// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__4776__auto___37119 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37120 = arguments.length;
var i__4731__auto___37121 = (0);
while(true){
if((i__4731__auto___37121 < len__4730__auto___37120)){
args__4736__auto__.push((arguments[i__4731__auto___37121]));

var G__37122 = (i__4731__auto___37121 + (1));
i__4731__auto___37121 = G__37122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__37123 = threaded;
var G__37124 = cljs.core.next.call(null,forms__$1);
x__$1 = G__37123;
forms__$1 = G__37124;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq37115){
var G__37116 = cljs.core.first.call(null,seq37115);
var seq37115__$1 = cljs.core.next.call(null,seq37115);
var G__37117 = cljs.core.first.call(null,seq37115__$1);
var seq37115__$2 = cljs.core.next.call(null,seq37115__$1);
var G__37118 = cljs.core.first.call(null,seq37115__$2);
var seq37115__$3 = cljs.core.next.call(null,seq37115__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37116,G__37117,G__37118,seq37115__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__4776__auto___37129 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37130 = arguments.length;
var i__4731__auto___37131 = (0);
while(true){
if((i__4731__auto___37131 < len__4730__auto___37130)){
args__4736__auto__.push((arguments[i__4731__auto___37131]));

var G__37132 = (i__4731__auto___37131 + (1));
i__4731__auto___37131 = G__37132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),cljs.core.next.call(null,form),(new cljs.core.List(null,x__$1,null,(1),null))))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__37133 = threaded;
var G__37134 = cljs.core.next.call(null,forms__$1);
x__$1 = G__37133;
forms__$1 = G__37134;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq37125){
var G__37126 = cljs.core.first.call(null,seq37125);
var seq37125__$1 = cljs.core.next.call(null,seq37125);
var G__37127 = cljs.core.first.call(null,seq37125__$1);
var seq37125__$2 = cljs.core.next.call(null,seq37125__$1);
var G__37128 = cljs.core.first.call(null,seq37125__$2);
var seq37125__$3 = cljs.core.next.call(null,seq37125__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37126,G__37127,G__37128,seq37125__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___37142 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__37141 = arguments.length;
switch (G__37141) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37144 = arguments.length;
var i__4731__auto___37145 = (0);
while(true){
if((i__4731__auto___37145 < len__4730__auto___37144)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37145]));

var G__37146 = (i__4731__auto___37145 + (1));
i__4731__auto___37145 = G__37146;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq37136){
var G__37137 = cljs.core.first.call(null,seq37136);
var seq37136__$1 = cljs.core.next.call(null,seq37136);
var G__37138 = cljs.core.first.call(null,seq37136__$1);
var seq37136__$2 = cljs.core.next.call(null,seq37136__$1);
var G__37139 = cljs.core.first.call(null,seq37136__$2);
var seq37136__$3 = cljs.core.next.call(null,seq37136__$2);
var G__37140 = cljs.core.first.call(null,seq37136__$3);
var seq37136__$4 = cljs.core.next.call(null,seq37136__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37137,G__37138,G__37139,G__37140,seq37136__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__4776__auto___37150 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37151 = arguments.length;
var i__4731__auto___37152 = (0);
while(true){
if((i__4731__auto___37152 < len__4730__auto___37151)){
args__4736__auto__.push((arguments[i__4731__auto___37152]));

var G__37153 = (i__4731__auto___37152 + (1));
i__4731__auto___37152 = G__37153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.comment.cljs$lang$applyTo = (function (seq37147){
var G__37148 = cljs.core.first.call(null,seq37147);
var seq37147__$1 = cljs.core.next.call(null,seq37147);
var G__37149 = cljs.core.first.call(null,seq37147__$1);
var seq37147__$2 = cljs.core.next.call(null,seq37147__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37148,G__37149,seq37147__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__4776__auto___37157 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37158 = arguments.length;
var i__4731__auto___37159 = (0);
while(true){
if((i__4731__auto___37159 < len__4730__auto___37158)){
args__4736__auto__.push((arguments[i__4731__auto___37159]));

var G__37160 = (i__4731__auto___37159 + (1));
i__4731__auto___37159 = G__37160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,cljs.core.first.call(null,clauses),(new cljs.core.List(null,((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.cond.cljs$lang$applyTo = (function (seq37154){
var G__37155 = cljs.core.first.call(null,seq37154);
var seq37154__$1 = cljs.core.next.call(null,seq37154);
var G__37156 = cljs.core.first.call(null,seq37154__$1);
var seq37154__$2 = cljs.core.next.call(null,seq37154__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37155,G__37156,seq37154__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__4776__auto___37165 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37166 = arguments.length;
var i__4731__auto___37167 = (0);
while(true){
if((i__4731__auto___37167 < len__4730__auto___37166)){
args__4736__auto__.push((arguments[i__4731__auto___37167]));

var G__37168 = (i__4731__auto___37167 + (1));
i__4731__auto___37167 = G__37168;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (p1__37161_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.vary_meta.call(null,p1__37161_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true),null,(1),null)),(2),null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.declare.cljs$lang$applyTo = (function (seq37162){
var G__37163 = cljs.core.first.call(null,seq37162);
var seq37162__$1 = cljs.core.next.call(null,seq37162);
var G__37164 = cljs.core.first.call(null,seq37162__$1);
var seq37162__$2 = cljs.core.next.call(null,seq37162__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37163,G__37164,seq37162__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__4776__auto___37173 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new js/Map) (.set "a" 1) (.set "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37174 = arguments.length;
var i__4731__auto___37175 = (0);
while(true){
if((i__4731__auto___37175 < len__4730__auto___37174)){
args__4736__auto__.push((arguments[i__4731__auto___37175]));

var G__37176 = (i__4731__auto___37175 + (1));
i__4731__auto___37175 = G__37176;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,f),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))));
}
});})(gx))
,forms),(new cljs.core.List(null,gx,null,(1),null)))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.doto.cljs$lang$applyTo = (function (seq37169){
var G__37170 = cljs.core.first.call(null,seq37169);
var seq37169__$1 = cljs.core.next.call(null,seq37169);
var G__37171 = cljs.core.first.call(null,seq37169__$1);
var seq37169__$2 = cljs.core.next.call(null,seq37169__$1);
var G__37172 = cljs.core.first.call(null,seq37169__$2);
var seq37169__$3 = cljs.core.next.call(null,seq37169__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37170,G__37171,G__37172,seq37169__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__37177 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__37178 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__37177;
s = G__37178;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,((function (impls){
return (function (p__37179){
var vec__37180 = p__37179;
var t = cljs.core.nth.call(null,vec__37180,(0),null);
var fs = cljs.core.nth.call(null,vec__37180,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,p,null,(1),null)),fs)));
});})(impls))
,impls))));
});
var ret__4776__auto___37187 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37188 = arguments.length;
var i__4731__auto___37189 = (0);
while(true){
if((i__4731__auto___37189 < len__4730__auto___37188)){
args__4736__auto__.push((arguments[i__4731__auto___37189]));

var G__37190 = (i__4731__auto___37189 + (1));
i__4731__auto___37189 = G__37190;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq37183){
var G__37184 = cljs.core.first.call(null,seq37183);
var seq37183__$1 = cljs.core.next.call(null,seq37183);
var G__37185 = cljs.core.first.call(null,seq37183__$1);
var seq37183__$2 = cljs.core.next.call(null,seq37183__$1);
var G__37186 = cljs.core.first.call(null,seq37183__$2);
var seq37183__$3 = cljs.core.next.call(null,seq37183__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37184,G__37185,G__37186,seq37183__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__37191 = cljs.core.next.call(null,params__$1);
var G__37192 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__37193 = lets;
params__$1 = G__37191;
new_params = G__37192;
lets = G__37193;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__37194 = cljs.core.next.call(null,params__$1);
var G__37195 = cljs.core.conj.call(null,new_params,gparam);
var G__37196 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__37194;
new_params = G__37195;
lets = G__37196;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),body))),null,(1),null)))));
}
break;
}
}
});
var ret__4776__auto___37203 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37204 = arguments.length;
var i__4731__auto___37205 = (0);
while(true){
if((i__4731__auto___37205 < len__4730__auto___37204)){
args__4736__auto__.push((arguments[i__4731__auto___37205]));

var G__37206 = (i__4731__auto___37205 + (1));
i__4731__auto___37205 = G__37206;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):"Parameter declaration missing")))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if((!(cljs.core.seq_QMARK_.call(null,sig)))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__37200 = sig;
var seq__37201 = cljs.core.seq.call(null,vec__37200);
var first__37202 = cljs.core.first.call(null,seq__37201);
var seq__37201__$1 = cljs.core.next.call(null,seq__37201);
var params = first__37202;
var body = seq__37201__$1;
var _ = (((!(cljs.core.vector_QMARK_.call(null,params))))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = ((((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__4131__auto__ = conds;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first.call(null,body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (vec__37200,seq__37201,first__37202,seq__37201__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(vec__37200,seq__37201,first__37202,seq__37201__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__37200,seq__37201,first__37202,seq__37201__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(vec__37200,seq__37201,first__37202,seq__37201__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.fn.cljs$lang$applyTo = (function (seq37197){
var G__37198 = cljs.core.first.call(null,seq37197);
var seq37197__$1 = cljs.core.next.call(null,seq37197);
var G__37199 = cljs.core.first.call(null,seq37197__$1);
var seq37197__$2 = cljs.core.next.call(null,seq37197__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37198,G__37199,seq37197__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__4776__auto___37211 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37212 = arguments.length;
var i__4731__auto___37213 = (0);
while(true){
if((i__4731__auto___37213 < len__4730__auto___37212)){
args__4736__auto__.push((arguments[i__4731__auto___37213]));

var G__37214 = (i__4731__auto___37213 + (1));
i__4731__auto___37213 = G__37214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq37207){
var G__37208 = cljs.core.first.call(null,seq37207);
var seq37207__$1 = cljs.core.next.call(null,seq37207);
var G__37209 = cljs.core.first.call(null,seq37207__$1);
var seq37207__$2 = cljs.core.next.call(null,seq37207__$1);
var G__37210 = cljs.core.first.call(null,seq37207__$2);
var seq37207__$3 = cljs.core.next.call(null,seq37207__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37208,G__37209,G__37210,seq37207__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__4776__auto___37224 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__37223 = arguments.length;
switch (G__37223) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37226 = arguments.length;
var i__4731__auto___37227 = (0);
while(true){
if((i__4731__auto___37227 < len__4730__auto___37226)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37227]));

var G__37228 = (i__4731__auto___37227 + (1));
i__4731__auto___37227 = G__37228;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37215__auto__","temp__37215__auto__",469102507,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37215__auto__","temp__37215__auto__",469102507,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37215__auto__","temp__37215__auto__",469102507,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq37217){
var G__37218 = cljs.core.first.call(null,seq37217);
var seq37217__$1 = cljs.core.next.call(null,seq37217);
var G__37219 = cljs.core.first.call(null,seq37217__$1);
var seq37217__$2 = cljs.core.next.call(null,seq37217__$1);
var G__37220 = cljs.core.first.call(null,seq37217__$2);
var seq37217__$3 = cljs.core.next.call(null,seq37217__$2);
var G__37221 = cljs.core.first.call(null,seq37217__$3);
var seq37217__$4 = cljs.core.next.call(null,seq37217__$3);
var G__37222 = cljs.core.first.call(null,seq37217__$4);
var seq37217__$5 = cljs.core.next.call(null,seq37217__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37218,G__37219,G__37220,G__37221,G__37222,seq37217__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__4776__auto___37231 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__37230 = arguments.length;
switch (G__37230) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__4776__auto___37238 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37239 = arguments.length;
var i__4731__auto___37240 = (0);
while(true){
if((i__4731__auto___37240 < len__4730__auto___37239)){
args__4736__auto__.push((arguments[i__4731__auto___37240]));

var G__37241 = (i__4731__auto___37240 + (1));
i__4731__auto___37240 = G__37241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__37233_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__37233_SHARP_);
}),fnspecs))),null,(1),null)),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq37234){
var G__37235 = cljs.core.first.call(null,seq37234);
var seq37234__$1 = cljs.core.next.call(null,seq37234);
var G__37236 = cljs.core.first.call(null,seq37234__$1);
var seq37234__$2 = cljs.core.next.call(null,seq37234__$1);
var G__37237 = cljs.core.first.call(null,seq37234__$2);
var seq37234__$3 = cljs.core.next.call(null,seq37234__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37235,G__37236,G__37237,seq37234__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__4776__auto___37246 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37247 = arguments.length;
var i__4731__auto___37248 = (0);
while(true){
if((i__4731__auto___37248 < len__4730__auto___37247)){
args__4736__auto__.push((arguments[i__4731__auto___37248]));

var G__37249 = (i__4731__auto___37248 + (1));
i__4731__auto___37248 = G__37249;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,t,null,(1),null)),args)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),args))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq37242){
var G__37243 = cljs.core.first.call(null,seq37242);
var seq37242__$1 = cljs.core.next.call(null,seq37242);
var G__37244 = cljs.core.first.call(null,seq37242__$1);
var seq37242__$2 = cljs.core.next.call(null,seq37242__$1);
var G__37245 = cljs.core.first.call(null,seq37242__$2);
var seq37242__$3 = cljs.core.next.call(null,seq37242__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37243,G__37244,G__37245,seq37242__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__4776__auto___37254 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37255 = arguments.length;
var i__4731__auto___37256 = (0);
while(true){
if((i__4731__auto___37256 < len__4730__auto___37255)){
args__4736__auto__.push((arguments[i__4731__auto___37256]));

var G__37257 = (i__4731__auto___37256 + (1));
i__4731__auto___37256 = G__37257;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when.cljs$lang$applyTo = (function (seq37250){
var G__37251 = cljs.core.first.call(null,seq37250);
var seq37250__$1 = cljs.core.next.call(null,seq37250);
var G__37252 = cljs.core.first.call(null,seq37250__$1);
var seq37250__$2 = cljs.core.next.call(null,seq37250__$1);
var G__37253 = cljs.core.first.call(null,seq37250__$2);
var seq37250__$3 = cljs.core.next.call(null,seq37250__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37251,G__37252,G__37253,seq37250__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__4776__auto___37266 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37267 = arguments.length;
var i__4731__auto___37268 = (0);
while(true){
if((i__4731__auto___37268 < len__4730__auto___37267)){
args__4736__auto__.push((arguments[i__4731__auto___37268]));

var G__37269 = (i__4731__auto___37268 + (1));
i__4731__auto___37268 = G__37269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var vec__37263 = bindings;
var x = cljs.core.nth.call(null,vec__37263,(0),null);
var xs = cljs.core.nth.call(null,vec__37263,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__37258__auto__","xs__37258__auto__",1775303937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__37258__auto__","xs__37258__auto__",1775303937,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq37259){
var G__37260 = cljs.core.first.call(null,seq37259);
var seq37259__$1 = cljs.core.next.call(null,seq37259);
var G__37261 = cljs.core.first.call(null,seq37259__$1);
var seq37259__$2 = cljs.core.next.call(null,seq37259__$1);
var G__37262 = cljs.core.first.call(null,seq37259__$2);
var seq37259__$3 = cljs.core.next.call(null,seq37259__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37260,G__37261,G__37262,seq37259__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__4776__auto___37275 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37276 = arguments.length;
var i__4731__auto___37277 = (0);
while(true){
if((i__4731__auto___37277 < len__4730__auto___37276)){
args__4736__auto__.push((arguments[i__4731__auto___37277]));

var G__37278 = (i__4731__auto___37277 + (1));
i__4731__auto___37277 = G__37278;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37270__auto__","temp__37270__auto__",1101067121,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37270__auto__","temp__37270__auto__",1101067121,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37270__auto__","temp__37270__auto__",1101067121,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq37271){
var G__37272 = cljs.core.first.call(null,seq37271);
var seq37271__$1 = cljs.core.next.call(null,seq37271);
var G__37273 = cljs.core.first.call(null,seq37271__$1);
var seq37271__$2 = cljs.core.next.call(null,seq37271__$1);
var G__37274 = cljs.core.first.call(null,seq37271__$2);
var seq37271__$3 = cljs.core.next.call(null,seq37271__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37272,G__37273,G__37274,seq37271__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__4776__auto___37283 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37284 = arguments.length;
var i__4731__auto___37285 = (0);
while(true){
if((i__4731__auto___37285 < len__4730__auto___37284)){
args__4736__auto__.push((arguments[i__4731__auto___37285]));

var G__37286 = (i__4731__auto___37285 + (1));
i__4731__auto___37285 = G__37286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,null,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq37279){
var G__37280 = cljs.core.first.call(null,seq37279);
var seq37279__$1 = cljs.core.next.call(null,seq37279);
var G__37281 = cljs.core.first.call(null,seq37279__$1);
var seq37279__$2 = cljs.core.next.call(null,seq37279__$1);
var G__37282 = cljs.core.first.call(null,seq37279__$2);
var seq37279__$3 = cljs.core.next.call(null,seq37279__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37280,G__37281,G__37282,seq37279__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__4776__auto___37291 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37292 = arguments.length;
var i__4731__auto___37293 = (0);
while(true){
if((i__4731__auto___37293 < len__4730__auto___37292)){
args__4736__auto__.push((arguments[i__4731__auto___37293]));

var G__37294 = (i__4731__auto___37293 + (1));
i__4731__auto___37293 = G__37294;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.while$.cljs$lang$applyTo = (function (seq37287){
var G__37288 = cljs.core.first.call(null,seq37287);
var seq37287__$1 = cljs.core.next.call(null,seq37287);
var G__37289 = cljs.core.first.call(null,seq37287__$1);
var seq37287__$2 = cljs.core.next.call(null,seq37287__$1);
var G__37290 = cljs.core.first.call(null,seq37287__$2);
var seq37287__$3 = cljs.core.next.call(null,seq37287__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37288,G__37289,G__37290,seq37287__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__4776__auto___37303 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37304 = arguments.length;
var i__4731__auto___37305 = (0);
while(true){
if((i__4731__auto___37305 < len__4730__auto___37304)){
args__4736__auto__.push((arguments[i__4731__auto___37305]));

var G__37306 = (i__4731__auto___37305 + (1));
i__4731__auto___37305 = G__37306;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__37299){
var vec__37300 = p__37299;
var test = cljs.core.nth.call(null,vec__37300,(0),null);
var step = cljs.core.nth.call(null,vec__37300,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)))));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq37295){
var G__37296 = cljs.core.first.call(null,seq37295);
var seq37295__$1 = cljs.core.next.call(null,seq37295);
var G__37297 = cljs.core.first.call(null,seq37295__$1);
var seq37295__$2 = cljs.core.next.call(null,seq37295__$1);
var G__37298 = cljs.core.first.call(null,seq37295__$2);
var seq37295__$3 = cljs.core.next.call(null,seq37295__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37296,G__37297,G__37298,seq37295__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__4776__auto___37315 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37316 = arguments.length;
var i__4731__auto___37317 = (0);
while(true){
if((i__4731__auto___37317 < len__4730__auto___37316)){
args__4736__auto__.push((arguments[i__4731__auto___37317]));

var G__37318 = (i__4731__auto___37317 + (1));
i__4731__auto___37317 = G__37318;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__37311){
var vec__37312 = p__37311;
var test = cljs.core.nth.call(null,vec__37312,(0),null);
var step = cljs.core.nth.call(null,vec__37312,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)))));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq37307){
var G__37308 = cljs.core.first.call(null,seq37307);
var seq37307__$1 = cljs.core.next.call(null,seq37307);
var G__37309 = cljs.core.first.call(null,seq37307__$1);
var seq37307__$2 = cljs.core.next.call(null,seq37307__$1);
var G__37310 = cljs.core.first.call(null,seq37307__$2);
var seq37307__$3 = cljs.core.next.call(null,seq37307__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37308,G__37309,G__37310,seq37307__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___37324 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37325 = arguments.length;
var i__4731__auto___37326 = (0);
while(true){
if((i__4731__auto___37326 < len__4730__auto___37325)){
args__4736__auto__.push((arguments[i__4731__auto___37326]));

var G__37327 = (i__4731__auto___37326 + (1));
i__4731__auto___37326 = G__37327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms)),null,(1),null)))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq37319){
var G__37320 = cljs.core.first.call(null,seq37319);
var seq37319__$1 = cljs.core.next.call(null,seq37319);
var G__37321 = cljs.core.first.call(null,seq37319__$1);
var seq37319__$2 = cljs.core.next.call(null,seq37319__$1);
var G__37322 = cljs.core.first.call(null,seq37319__$2);
var seq37319__$3 = cljs.core.next.call(null,seq37319__$2);
var G__37323 = cljs.core.first.call(null,seq37319__$3);
var seq37319__$4 = cljs.core.next.call(null,seq37319__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37320,G__37321,G__37322,G__37323,seq37319__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__4776__auto___37332 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37333 = arguments.length;
var i__4731__auto___37334 = (0);
while(true){
if((i__4731__auto___37334 < len__4730__auto___37333)){
args__4736__auto__.push((arguments[i__4731__auto___37334]));

var G__37335 = (i__4731__auto___37334 + (1));
i__4731__auto___37334 = G__37335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)))));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq37328){
var G__37329 = cljs.core.first.call(null,seq37328);
var seq37328__$1 = cljs.core.next.call(null,seq37328);
var G__37330 = cljs.core.first.call(null,seq37328__$1);
var seq37328__$2 = cljs.core.next.call(null,seq37328__$1);
var G__37331 = cljs.core.first.call(null,seq37328__$2);
var seq37328__$3 = cljs.core.next.call(null,seq37328__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37329,G__37330,G__37331,seq37328__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__4776__auto___37340 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37341 = arguments.length;
var i__4731__auto___37342 = (0);
while(true){
if((i__4731__auto___37342 < len__4730__auto___37341)){
args__4736__auto__.push((arguments[i__4731__auto___37342]));

var G__37343 = (i__4731__auto___37342 + (1));
i__4731__auto___37342 = G__37343;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null))))),null,(1),null)))));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps)),null,(1),null)))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq37336){
var G__37337 = cljs.core.first.call(null,seq37336);
var seq37336__$1 = cljs.core.next.call(null,seq37336);
var G__37338 = cljs.core.first.call(null,seq37336__$1);
var seq37336__$2 = cljs.core.next.call(null,seq37336__$1);
var G__37339 = cljs.core.first.call(null,seq37336__$2);
var seq37336__$3 = cljs.core.next.call(null,seq37336__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37337,G__37338,G__37339,seq37336__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___37353 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__37352 = arguments.length;
switch (G__37352) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37355 = arguments.length;
var i__4731__auto___37356 = (0);
while(true){
if((i__4731__auto___37356 < len__4730__auto___37355)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37356]));

var G__37357 = (i__4731__auto___37356 + (1));
i__4731__auto___37356 = G__37357;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37344__auto__","temp__37344__auto__",819188368,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37344__auto__","temp__37344__auto__",819188368,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37344__auto__","temp__37344__auto__",819188368,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq37346){
var G__37347 = cljs.core.first.call(null,seq37346);
var seq37346__$1 = cljs.core.next.call(null,seq37346);
var G__37348 = cljs.core.first.call(null,seq37346__$1);
var seq37346__$2 = cljs.core.next.call(null,seq37346__$1);
var G__37349 = cljs.core.first.call(null,seq37346__$2);
var seq37346__$3 = cljs.core.next.call(null,seq37346__$2);
var G__37350 = cljs.core.first.call(null,seq37346__$3);
var seq37346__$4 = cljs.core.next.call(null,seq37346__$3);
var G__37351 = cljs.core.first.call(null,seq37346__$4);
var seq37346__$5 = cljs.core.next.call(null,seq37346__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37347,G__37348,G__37349,G__37350,G__37351,seq37346__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__4776__auto___37363 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37364 = arguments.length;
var i__4731__auto___37365 = (0);
while(true){
if((i__4731__auto___37365 < len__4730__auto___37364)){
args__4736__auto__.push((arguments[i__4731__auto___37365]));

var G__37366 = (i__4731__auto___37365 + (1));
i__4731__auto___37365 = G__37366;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37358__auto__","temp__37358__auto__",1876790932,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37358__auto__","temp__37358__auto__",1876790932,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__37358__auto__","temp__37358__auto__",1876790932,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq37359){
var G__37360 = cljs.core.first.call(null,seq37359);
var seq37359__$1 = cljs.core.next.call(null,seq37359);
var G__37361 = cljs.core.first.call(null,seq37359__$1);
var seq37359__$2 = cljs.core.next.call(null,seq37359__$1);
var G__37362 = cljs.core.first.call(null,seq37359__$2);
var seq37359__$3 = cljs.core.next.call(null,seq37359__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37360,G__37361,G__37362,seq37359__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__37367_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__37367_SHARP_)){
return cljs.core.first.call(null,p1__37367_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__37368_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__37368_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__37369 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__37370 = cljs.core.next.call(null,fdecls);
ret = G__37369;
fdecls = G__37370;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
return (new cljs.core.List(null,asig.call(null,fdecl),null,(1),null));
}
});
var ret__4776__auto___37371 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,init,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),(new cljs.core.List(null,gvec,null,(1),null)),(2),null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__37379 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__37380 = n;
var G__37381 = cljs.core.nnext.call(null,bs);
var G__37382 = true;
ret = G__37379;
n = G__37380;
bs = G__37381;
seen_rest_QMARK_ = G__37382;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__37383 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),(new cljs.core.List(null,gvec,(new cljs.core.List(null,n,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null))));
var G__37384 = (n + (1));
var G__37385 = cljs.core.next.call(null,bs);
var G__37386 = seen_rest_QMARK_;
ret = G__37383;
n = G__37384;
bs = G__37385;
seen_rest_QMARK_ = G__37386;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null)))))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__37372_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__4131__auto__ = mkns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.namespace.call(null,p1__37372_SHARP_);
}
})(),cljs.core.name.call(null,p1__37372_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__37373_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.call(null,(function (){var or__4131__auto__ = mkns;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.namespace.call(null,p1__37373_SHARP_);
}
})(),cljs.core.name.call(null,p1__37373_SHARP_)),null,(1),null)),(2),null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__37374_SHARP_,p2__37375_SHARP_){
return cljs.core.assoc.call(null,p1__37374_SHARP_,p2__37375_SHARP_,cljs.core.val.call(null,entry).call(null,p2__37375_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = (((((!((bb == null))))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,(new cljs.core.List(null,defaults.call(null,local),null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,null,(1),null)),(2),null)),(3),null)));
var G__37387 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__37388 = cljs.core.next.call(null,bes);
ret = G__37387;
bes = G__37388;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__5718__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__37376_SHARP_){
return (cljs.core.first.call(null,p1__37376_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5718__auto__){
var kwbs = temp__5718__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__4776__auto___37393 = (function (){
cljs.core$macros.return_first = (function cljs$core$macros$return_first(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37394 = arguments.length;
var i__4731__auto___37395 = (0);
while(true){
if((i__4731__auto___37395 < len__4730__auto___37394)){
args__4736__auto__.push((arguments[i__4731__auto___37395]));

var G__37396 = (i__4731__auto___37395 + (1));
i__4731__auto___37395 = G__37396;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__37389__auto__","ret__37389__auto__",-1207136981,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,body),null,(1),null)))))),null,(1),null)),cljs.core.rest.call(null,body),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__37389__auto__","ret__37389__auto__",-1207136981,null),null,(1),null)))));
});

cljs.core$macros.return_first.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.return_first.cljs$lang$applyTo = (function (seq37390){
var G__37391 = cljs.core.first.call(null,seq37390);
var seq37390__$1 = cljs.core.next.call(null,seq37390);
var G__37392 = cljs.core.first.call(null,seq37390__$1);
var seq37390__$2 = cljs.core.next.call(null,seq37390__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37391,G__37392,seq37390__$2);
});

return null;
})()
;
cljs.core$macros.return_first.cljs$lang$macro = true;

var ret__4776__auto___37398 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if(((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false))){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var defname = cljs.compiler.munge.call(null,[cljs.core._STAR_ns_STAR_,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":((((default$ === true) || (default$ === false)))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?new cljs.core.Symbol("cljs.core$macros","return-first","cljs.core$macros/return-first",190051731,null):new cljs.core.Symbol(null,"do","do",1686842252,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,sym,((function (defname,type){
return (function (m){
var G__37397 = m;
if((!(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223))))){
return cljs.core.assoc.call(null,G__37397,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.call(null,type));
} else {
return G__37397;
}
});})(defname,type))
),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["/** @define {",type,"} */"].join(''),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","define","goog/define",-352722538,null),null,(1),null)),(new cljs.core.List(null,defname,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__4776__auto___37403 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37404 = arguments.length;
var i__4731__auto___37405 = (0);
while(true){
if((i__4731__auto___37405 < len__4730__auto___37404)){
args__4736__auto__.push((arguments[i__4731__auto___37405]));

var G__37406 = (i__4731__auto___37405 + (1));
i__4731__auto___37405 = G__37406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.destructure.call(null,bindings),null,(1),null)),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.let$.cljs$lang$applyTo = (function (seq37399){
var G__37400 = cljs.core.first.call(null,seq37399);
var seq37399__$1 = cljs.core.next.call(null,seq37399);
var G__37401 = cljs.core.first.call(null,seq37399__$1);
var seq37399__$2 = cljs.core.next.call(null,seq37399__$1);
var G__37402 = cljs.core.first.call(null,seq37399__$2);
var seq37399__$3 = cljs.core.next.call(null,seq37399__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37400,G__37401,G__37402,seq37399__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__4776__auto___37415 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37416 = arguments.length;
var i__4731__auto___37417 = (0);
while(true){
if((i__4731__auto___37417 < len__4730__auto___37416)){
args__4736__auto__.push((arguments[i__4731__auto___37417]));

var G__37418 = (i__4731__auto___37417 + (1));
i__4731__auto___37417 = G__37418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__37411){
var vec__37412 = p__37411;
var b = cljs.core.nth.call(null,vec__37412,(0),null);
var v = cljs.core.nth.call(null,vec__37412,(1),null);
var g = cljs.core.nth.call(null,vec__37412,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,bfs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs)),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.loop.cljs$lang$applyTo = (function (seq37407){
var G__37408 = cljs.core.first.call(null,seq37407);
var seq37407__$1 = cljs.core.next.call(null,seq37407);
var G__37409 = cljs.core.first.call(null,seq37407__$1);
var seq37407__$2 = cljs.core.next.call(null,seq37407__$1);
var G__37410 = cljs.core.first.call(null,seq37407__$2);
var seq37407__$3 = cljs.core.next.call(null,seq37407__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37408,G__37409,G__37410,seq37407__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__37419_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37419_SHARP_));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__37420){
var vec__37421 = p__37420;
var p = cljs.core.nth.call(null,vec__37421,(0),null);
var b = cljs.core.nth.call(null,vec__37421,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.compatible_QMARK_ = (function cljs$core$macros$compatible_QMARK_(inferred_tag,allowed_tags){
if(cljs.core.set_QMARK_.call(null,inferred_tag)){
return clojure.set.subset_QMARK_.call(null,inferred_tag,allowed_tags);
} else {
return cljs.core.contains_QMARK_.call(null,allowed_tags,inferred_tag);
}
});
cljs.core$macros.typed_expr_QMARK_ = (function cljs$core$macros$typed_expr_QMARK_(env,form,allowed_tags){
return cljs.core$macros.compatible_QMARK_.call(null,cljs.analyzer.infer_tag.call(null,env,(function (){var _STAR_cljs_warnings_STAR__orig_val__37424 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__37425 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__37425;

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__37424;
}})()),allowed_tags);
});
cljs.core$macros.string_expr = (function cljs$core$macros$string_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"string","string",-349010059,null));
});
var ret__4776__auto___37432 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var G__37431 = arguments.length;
switch (G__37431) {
case 2:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37434 = arguments.length;
var i__4731__auto___37435 = (0);
while(true){
if((i__4731__auto___37435 < len__4730__auto___37434)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37435]));

var G__37436 = (i__4731__auto___37435 + (1));
i__4731__auto___37435 = G__37436;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return "";
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core$macros.typed_expr_QMARK_.call(null,_AMPERSAND_env,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null))){
return x;
} else {
return cljs.core$macros.string_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
}
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,ys){
var interpolate = (function (x__$1){
if(cljs.core$macros.typed_expr_QMARK_.call(null,_AMPERSAND_env,x__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null))){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,cljs.core.list_STAR_.call(null,x,ys))));
return cljs.core$macros.string_expr.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),x,ys));
});

/** @this {Function} */
cljs.core$macros.str.cljs$lang$applyTo = (function (seq37427){
var G__37428 = cljs.core.first.call(null,seq37427);
var seq37427__$1 = cljs.core.next.call(null,seq37427);
var G__37429 = cljs.core.first.call(null,seq37427__$1);
var seq37427__$2 = cljs.core.next.call(null,seq37427__$1);
var G__37430 = cljs.core.first.call(null,seq37427__$2);
var seq37427__$3 = cljs.core.next.call(null,seq37427__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37428,G__37429,G__37430,seq37427__$3);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__4120__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__4120__auto__;
}
});
var ret__4776__auto___37449 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__37446 = arguments.length;
switch (G__37446) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37451 = arguments.length;
var i__4731__auto___37452 = (0);
while(true){
if((i__4731__auto___37452 < len__4730__auto___37451)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37452]));

var G__37453 = (i__4731__auto___37452 + (1));
i__4731__auto___37452 = G__37453;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__37437_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__37437_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__37438_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__37447 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__37448 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__37448;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__37438_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__37447;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,((function (forms){
return (function (p1__37439_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__37439_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null));
});})(forms))
.call(null,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})"))));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,and_str,null,(1),null)),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"and__37440__auto__","and__37440__auto__",-20410246,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__37440__auto__","and__37440__auto__",-20410246,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__37440__auto__","and__37440__auto__",-20410246,null),null,(1),null))))),null,(1),null)))));
}
});

/** @this {Function} */
cljs.core$macros.and.cljs$lang$applyTo = (function (seq37442){
var G__37443 = cljs.core.first.call(null,seq37442);
var seq37442__$1 = cljs.core.next.call(null,seq37442);
var G__37444 = cljs.core.first.call(null,seq37442__$1);
var seq37442__$2 = cljs.core.next.call(null,seq37442__$1);
var G__37445 = cljs.core.first.call(null,seq37442__$2);
var seq37442__$3 = cljs.core.next.call(null,seq37442__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37443,G__37444,G__37445,seq37442__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__4776__auto___37466 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__37463 = arguments.length;
switch (G__37463) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37468 = arguments.length;
var i__4731__auto___37469 = (0);
while(true){
if((i__4731__auto___37469 < len__4730__auto___37468)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37469]));

var G__37470 = (i__4731__auto___37469 + (1));
i__4731__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__37454_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__37454_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__37455_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__37464 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__37465 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__37465;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__37455_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__37464;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,((function (forms){
return (function (p1__37456_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__37456_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null));
});})(forms))
.call(null,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})"))));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,or_str,null,(1),null)),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"or__37457__auto__","or__37457__auto__",-1370439865,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__37457__auto__","or__37457__auto__",-1370439865,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__37457__auto__","or__37457__auto__",-1370439865,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),next))),null,(1),null))))),null,(1),null)))));
}
});

/** @this {Function} */
cljs.core$macros.or.cljs$lang$applyTo = (function (seq37459){
var G__37460 = cljs.core.first.call(null,seq37459);
var seq37459__$1 = cljs.core.next.call(null,seq37459);
var G__37461 = cljs.core.first.call(null,seq37459__$1);
var seq37459__$2 = cljs.core.next.call(null,seq37459__$1);
var G__37462 = cljs.core.first.call(null,seq37459__$2);
var seq37459__$3 = cljs.core.next.call(null,seq37459__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37460,G__37461,G__37462,seq37459__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__4776__auto___37471 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37472 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37473 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(!~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__4776__auto___37474 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__4776__auto___37475 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} == ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__4776__auto___37476 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__4776__auto___37477 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != null && ~{} !== false)",(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__4776__auto___37478 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"arguments",null,(1),null)),(2),null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__4776__auto___37479 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"delete ~{}[~{}]",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__4776__auto___37480 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} in ~{}",(new cljs.core.List(null,key,(new cljs.core.List(null,obj,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__4776__auto___37481 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"debugger",null,(1),null)),(2),null)),(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__4776__auto___37486 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__37483 = clojure.string.split.call(null,comment,/\n/);
var seq__37484 = cljs.core.seq.call(null,vec__37483);
var first__37485 = cljs.core.first.call(null,seq__37484);
var seq__37484__$1 = cljs.core.next.call(null,seq__37484);
var x = first__37485;
var ys = seq__37484__$1;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["\n/**\n",[" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__37483,seq__37484,first__37485,seq__37484__$1,x,ys){
return (function (p1__37482_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__37482_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__37483,seq__37484,first__37485,seq__37484__$1,x,ys))
,ys)))," */\n"].join(''),null,(1),null)),(2),null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__4776__auto___37487 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,cast_expr,(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__4776__auto___37488 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join(''),null,(1),null)),(2),null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__4776__auto___37489 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === true",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37490 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === false",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37491 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'string'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37494 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
var x__$1 = (function (){var G__37493 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,_AMPERSAND_env,x));
if(cljs.core._EQ_.call(null,"js",cljs.core.namespace.call(null,x))){
return cljs.core.name.call(null,G__37493);
} else {
return G__37493;
}
})();
var segs = clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),"/",".")),/\./);
var n = cljs.core.count.call(null,segs);
var syms = cljs.core.map.call(null,((function (x__$1,segs,n){
return (function (p1__37492_SHARP_){
return cljs.core.vary_meta.call(null,cljs.core.symbol.call(null,"js",clojure.string.join.call(null,".",p1__37492_SHARP_)),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
});})(x__$1,segs,n))
,cljs.core.reverse.call(null,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.butlast,segs))));
var js = clojure.string.join.call(null," && ",cljs.core.repeat.call(null,n,"(typeof ~{} !== 'undefined')"));
return cljs.core$macros.bool_expr.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,js,null,(1),null)),(2),null)),syms));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37495 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(void 0 === ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37496 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37499 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} instanceof ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,c,null,(1),null)),(2),null)),(3),null)),(4),null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__37497__auto__","c__37497__auto__",-836120247,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37498__auto__","x__37498__auto__",-1974956717,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"(~{} instanceof ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37498__auto__","x__37498__auto__",-1974956717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__37497__auto__","c__37497__auto__",-836120247,null),null,(1),null))))),null,(1),null)))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37500 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'number'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37501 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37502 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37512 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__37509 = arguments.length;
switch (G__37509) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37514 = arguments.length;
var i__4731__auto___37515 = (0);
while(true){
if((i__4731__auto___37515 < len__4730__auto___37514)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37515]));

var G__37516 = (i__4731__auto___37515 + (1));
i__4731__auto___37515 = G__37516;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__37510 = cljs.analyzer.checked_arrays.call(null);
var G__37510__$1 = (((G__37510 instanceof cljs.core.Keyword))?G__37510.fqn:null);
switch (G__37510__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)))));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,null,(1),null)),(2),null)),(3),null)),(4),null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__37511 = cljs.analyzer.checked_arrays.call(null);
var G__37511__$1 = (((G__37511 instanceof cljs.core.Keyword))?G__37511.fqn:null);
switch (G__37511__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join(''),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs)));

}
});

/** @this {Function} */
cljs.core$macros.aget.cljs$lang$applyTo = (function (seq37504){
var G__37505 = cljs.core.first.call(null,seq37504);
var seq37504__$1 = cljs.core.next.call(null,seq37504);
var G__37506 = cljs.core.first.call(null,seq37504__$1);
var seq37504__$2 = cljs.core.next.call(null,seq37504__$1);
var G__37507 = cljs.core.first.call(null,seq37504__$2);
var seq37504__$3 = cljs.core.next.call(null,seq37504__$2);
var G__37508 = cljs.core.first.call(null,seq37504__$3);
var seq37504__$4 = cljs.core.next.call(null,seq37504__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37505,G__37506,G__37507,G__37508,seq37504__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__4776__auto___37529 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__37526 = arguments.length;
switch (G__37526) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37531 = arguments.length;
var i__4731__auto___37532 = (0);
while(true){
if((i__4731__auto___37532 < len__4730__auto___37531)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37532]));

var G__37533 = (i__4731__auto___37532 + (1));
i__4731__auto___37532 = G__37533;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__37527 = cljs.analyzer.checked_arrays.call(null);
var G__37527__$1 = (((G__37527 instanceof cljs.core.Keyword))?G__37527.fqn:null);
switch (G__37527__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__37528 = cljs.analyzer.checked_arrays.call(null);
var G__37528__$1 = (((G__37528 instanceof cljs.core.Keyword))?G__37528.fqn:null);
switch (G__37528__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join(''),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv)));

}
});

/** @this {Function} */
cljs.core$macros.aset.cljs$lang$applyTo = (function (seq37520){
var G__37521 = cljs.core.first.call(null,seq37520);
var seq37520__$1 = cljs.core.next.call(null,seq37520);
var G__37522 = cljs.core.first.call(null,seq37520__$1);
var seq37520__$2 = cljs.core.next.call(null,seq37520__$1);
var G__37523 = cljs.core.first.call(null,seq37520__$2);
var seq37520__$3 = cljs.core.next.call(null,seq37520__$2);
var G__37524 = cljs.core.first.call(null,seq37520__$3);
var seq37520__$4 = cljs.core.next.call(null,seq37520__$3);
var G__37525 = cljs.core.first.call(null,seq37520__$4);
var seq37520__$5 = cljs.core.next.call(null,seq37520__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37521,G__37522,G__37523,G__37524,G__37525,seq37520__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__4776__auto___37536 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__4776__auto___37537 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__4776__auto___37545 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__37544 = arguments.length;
switch (G__37544) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37547 = arguments.length;
var i__4731__auto___37548 = (0);
while(true){
if((i__4731__auto___37548 < len__4730__auto___37547)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37548]));

var G__37549 = (i__4731__auto___37548 + (1));
i__4731__auto___37548 = G__37549;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} + ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq37539){
var G__37540 = cljs.core.first.call(null,seq37539);
var seq37539__$1 = cljs.core.next.call(null,seq37539);
var G__37541 = cljs.core.first.call(null,seq37539__$1);
var seq37539__$2 = cljs.core.next.call(null,seq37539__$1);
var G__37542 = cljs.core.first.call(null,seq37539__$2);
var seq37539__$3 = cljs.core.next.call(null,seq37539__$2);
var G__37543 = cljs.core.first.call(null,seq37539__$3);
var seq37539__$4 = cljs.core.next.call(null,seq37539__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37540,G__37541,G__37542,G__37543,seq37539__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__4776__auto___37550 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__4776__auto___37551 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__4776__auto___37552 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__4776__auto___37553 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__4776__auto___37554 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__4776__auto___37555 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__4776__auto___37556 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__4776__auto___37557 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__4776__auto___37558 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__4776__auto___37562 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37563 = arguments.length;
var i__4731__auto___37564 = (0);
while(true){
if((i__4731__auto___37564 < len__4730__auto___37563)){
args__4736__auto__.push((arguments[i__4731__auto___37564]));

var G__37565 = (i__4731__auto___37564 + (1));
i__4731__auto___37564 = G__37565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq37559){
var G__37560 = cljs.core.first.call(null,seq37559);
var seq37559__$1 = cljs.core.next.call(null,seq37559);
var G__37561 = cljs.core.first.call(null,seq37559__$1);
var seq37559__$2 = cljs.core.next.call(null,seq37559__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37560,G__37561,seq37559__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__4776__auto___37569 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37570 = arguments.length;
var i__4731__auto___37571 = (0);
while(true){
if((i__4731__auto___37571 < len__4730__auto___37570)){
args__4736__auto__.push((arguments[i__4731__auto___37571]));

var G__37572 = (i__4731__auto___37571 + (1));
i__4731__auto___37571 = G__37572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq37566){
var G__37567 = cljs.core.first.call(null,seq37566);
var seq37566__$1 = cljs.core.next.call(null,seq37566);
var G__37568 = cljs.core.first.call(null,seq37566__$1);
var seq37566__$2 = cljs.core.next.call(null,seq37566__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37567,G__37568,seq37566__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__4776__auto___37573 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__4776__auto___37574 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__4776__auto___37578 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37579 = arguments.length;
var i__4731__auto___37580 = (0);
while(true){
if((i__4731__auto___37580 < len__4730__auto___37579)){
args__4736__auto__.push((arguments[i__4731__auto___37580]));

var G__37581 = (i__4731__auto___37580 + (1));
i__4731__auto___37580 = G__37581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq37575){
var G__37576 = cljs.core.first.call(null,seq37575);
var seq37575__$1 = cljs.core.next.call(null,seq37575);
var G__37577 = cljs.core.first.call(null,seq37575__$1);
var seq37575__$2 = cljs.core.next.call(null,seq37575__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37576,G__37577,seq37575__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__4776__auto___37582 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__4776__auto___37583 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__4776__auto___37587 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37588 = arguments.length;
var i__4731__auto___37589 = (0);
while(true){
if((i__4731__auto___37589 < len__4730__auto___37588)){
args__4736__auto__.push((arguments[i__4731__auto___37589]));

var G__37590 = (i__4731__auto___37589 + (1));
i__4731__auto___37589 = G__37590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq37584){
var G__37585 = cljs.core.first.call(null,seq37584);
var seq37584__$1 = cljs.core.next.call(null,seq37584);
var G__37586 = cljs.core.first.call(null,seq37584__$1);
var seq37584__$2 = cljs.core.next.call(null,seq37584__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37585,G__37586,seq37584__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__4776__auto___37594 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37595 = arguments.length;
var i__4731__auto___37596 = (0);
while(true){
if((i__4731__auto___37596 < len__4730__auto___37595)){
args__4736__auto__.push((arguments[i__4731__auto___37596]));

var G__37597 = (i__4731__auto___37596 + (1));
i__4731__auto___37596 = G__37597;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq37591){
var G__37592 = cljs.core.first.call(null,seq37591);
var seq37591__$1 = cljs.core.next.call(null,seq37591);
var G__37593 = cljs.core.first.call(null,seq37591__$1);
var seq37591__$2 = cljs.core.next.call(null,seq37591__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37592,G__37593,seq37591__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__4776__auto___37598 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__4776__auto___37599 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__4776__auto___37600 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__4776__auto___37604 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37605 = arguments.length;
var i__4731__auto___37606 = (0);
while(true){
if((i__4731__auto___37606 < len__4730__auto___37605)){
args__4736__auto__.push((arguments[i__4731__auto___37606]));

var G__37607 = (i__4731__auto___37606 + (1));
i__4731__auto___37606 = G__37607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq37601){
var G__37602 = cljs.core.first.call(null,seq37601);
var seq37601__$1 = cljs.core.next.call(null,seq37601);
var G__37603 = cljs.core.first.call(null,seq37601__$1);
var seq37601__$2 = cljs.core.next.call(null,seq37601__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37602,G__37603,seq37601__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__4776__auto___37611 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37612 = arguments.length;
var i__4731__auto___37613 = (0);
while(true){
if((i__4731__auto___37613 < len__4730__auto___37612)){
args__4736__auto__.push((arguments[i__4731__auto___37613]));

var G__37614 = (i__4731__auto___37613 + (1));
i__4731__auto___37613 = G__37614;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq37608){
var G__37609 = cljs.core.first.call(null,seq37608);
var seq37608__$1 = cljs.core.next.call(null,seq37608);
var G__37610 = cljs.core.first.call(null,seq37608__$1);
var seq37608__$2 = cljs.core.next.call(null,seq37608__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37609,G__37610,seq37608__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__4776__auto___37622 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__37621 = arguments.length;
switch (G__37621) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37624 = arguments.length;
var i__4731__auto___37625 = (0);
while(true){
if((i__4731__auto___37625 < len__4730__auto___37624)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37625]));

var G__37626 = (i__4731__auto___37625 + (1));
i__4731__auto___37625 = G__37626;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(- ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} - ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._.cljs$lang$applyTo = (function (seq37616){
var G__37617 = cljs.core.first.call(null,seq37616);
var seq37616__$1 = cljs.core.next.call(null,seq37616);
var G__37618 = cljs.core.first.call(null,seq37616__$1);
var seq37616__$2 = cljs.core.next.call(null,seq37616__$1);
var G__37619 = cljs.core.first.call(null,seq37616__$2);
var seq37616__$3 = cljs.core.next.call(null,seq37616__$2);
var G__37620 = cljs.core.first.call(null,seq37616__$3);
var seq37616__$4 = cljs.core.next.call(null,seq37616__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37617,G__37618,G__37619,G__37620,seq37616__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__4776__auto___37634 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__37633 = arguments.length;
switch (G__37633) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37636 = arguments.length;
var i__4731__auto___37637 = (0);
while(true){
if((i__4731__auto___37637 < len__4730__auto___37636)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37637]));

var G__37638 = (i__4731__auto___37637 + (1));
i__4731__auto___37637 = G__37638;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} * ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq37628){
var G__37629 = cljs.core.first.call(null,seq37628);
var seq37628__$1 = cljs.core.next.call(null,seq37628);
var G__37630 = cljs.core.first.call(null,seq37628__$1);
var seq37628__$2 = cljs.core.next.call(null,seq37628__$1);
var G__37631 = cljs.core.first.call(null,seq37628__$2);
var seq37628__$3 = cljs.core.next.call(null,seq37628__$2);
var G__37632 = cljs.core.first.call(null,seq37628__$3);
var seq37628__$4 = cljs.core.next.call(null,seq37628__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37629,G__37630,G__37631,G__37632,seq37628__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__4776__auto___37646 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__37645 = arguments.length;
switch (G__37645) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37648 = arguments.length;
var i__4731__auto___37649 = (0);
while(true){
if((i__4731__auto___37649 < len__4730__auto___37648)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37649]));

var G__37650 = (i__4731__auto___37649 + (1));
i__4731__auto___37649 = G__37650;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq37640){
var G__37641 = cljs.core.first.call(null,seq37640);
var seq37640__$1 = cljs.core.next.call(null,seq37640);
var G__37642 = cljs.core.first.call(null,seq37640__$1);
var seq37640__$2 = cljs.core.next.call(null,seq37640__$1);
var G__37643 = cljs.core.first.call(null,seq37640__$2);
var seq37640__$3 = cljs.core.next.call(null,seq37640__$2);
var G__37644 = cljs.core.first.call(null,seq37640__$3);
var seq37640__$4 = cljs.core.next.call(null,seq37640__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37641,G__37642,G__37643,G__37644,seq37640__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__4776__auto___37658 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__37657 = arguments.length;
switch (G__37657) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37660 = arguments.length;
var i__4731__auto___37661 = (0);
while(true){
if((i__4731__auto___37661 < len__4730__auto___37660)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37661]));

var G__37662 = (i__4731__auto___37661 + (1));
i__4731__auto___37661 = G__37662;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.divide.cljs$lang$applyTo = (function (seq37652){
var G__37653 = cljs.core.first.call(null,seq37652);
var seq37652__$1 = cljs.core.next.call(null,seq37652);
var G__37654 = cljs.core.first.call(null,seq37652__$1);
var seq37652__$2 = cljs.core.next.call(null,seq37652__$1);
var G__37655 = cljs.core.first.call(null,seq37652__$2);
var seq37652__$3 = cljs.core.next.call(null,seq37652__$2);
var G__37656 = cljs.core.first.call(null,seq37652__$3);
var seq37652__$4 = cljs.core.next.call(null,seq37652__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37653,G__37654,G__37655,G__37656,seq37652__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__4776__auto___37670 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__37669 = arguments.length;
switch (G__37669) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37672 = arguments.length;
var i__4731__auto___37673 = (0);
while(true){
if((i__4731__auto___37673 < len__4730__auto___37672)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37673]));

var G__37674 = (i__4731__auto___37673 + (1));
i__4731__auto___37673 = G__37674;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} < ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq37664){
var G__37665 = cljs.core.first.call(null,seq37664);
var seq37664__$1 = cljs.core.next.call(null,seq37664);
var G__37666 = cljs.core.first.call(null,seq37664__$1);
var seq37664__$2 = cljs.core.next.call(null,seq37664__$1);
var G__37667 = cljs.core.first.call(null,seq37664__$2);
var seq37664__$3 = cljs.core.next.call(null,seq37664__$2);
var G__37668 = cljs.core.first.call(null,seq37664__$3);
var seq37664__$4 = cljs.core.next.call(null,seq37664__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37665,G__37666,G__37667,G__37668,seq37664__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__4776__auto___37682 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__37681 = arguments.length;
switch (G__37681) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37684 = arguments.length;
var i__4731__auto___37685 = (0);
while(true){
if((i__4731__auto___37685 < len__4730__auto___37684)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37685]));

var G__37686 = (i__4731__auto___37685 + (1));
i__4731__auto___37685 = G__37686;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} <= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq37676){
var G__37677 = cljs.core.first.call(null,seq37676);
var seq37676__$1 = cljs.core.next.call(null,seq37676);
var G__37678 = cljs.core.first.call(null,seq37676__$1);
var seq37676__$2 = cljs.core.next.call(null,seq37676__$1);
var G__37679 = cljs.core.first.call(null,seq37676__$2);
var seq37676__$3 = cljs.core.next.call(null,seq37676__$2);
var G__37680 = cljs.core.first.call(null,seq37676__$3);
var seq37676__$4 = cljs.core.next.call(null,seq37676__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37677,G__37678,G__37679,G__37680,seq37676__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___37694 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__37693 = arguments.length;
switch (G__37693) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37696 = arguments.length;
var i__4731__auto___37697 = (0);
while(true){
if((i__4731__auto___37697 < len__4730__auto___37696)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37697]));

var G__37698 = (i__4731__auto___37697 + (1));
i__4731__auto___37697 = G__37698;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} > ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq37688){
var G__37689 = cljs.core.first.call(null,seq37688);
var seq37688__$1 = cljs.core.next.call(null,seq37688);
var G__37690 = cljs.core.first.call(null,seq37688__$1);
var seq37688__$2 = cljs.core.next.call(null,seq37688__$1);
var G__37691 = cljs.core.first.call(null,seq37688__$2);
var seq37688__$3 = cljs.core.next.call(null,seq37688__$2);
var G__37692 = cljs.core.first.call(null,seq37688__$3);
var seq37688__$4 = cljs.core.next.call(null,seq37688__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37689,G__37690,G__37691,G__37692,seq37688__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__4776__auto___37706 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__37705 = arguments.length;
switch (G__37705) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37708 = arguments.length;
var i__4731__auto___37709 = (0);
while(true){
if((i__4731__auto___37709 < len__4730__auto___37708)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37709]));

var G__37710 = (i__4731__auto___37709 + (1));
i__4731__auto___37709 = G__37710;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq37700){
var G__37701 = cljs.core.first.call(null,seq37700);
var seq37700__$1 = cljs.core.next.call(null,seq37700);
var G__37702 = cljs.core.first.call(null,seq37700__$1);
var seq37700__$2 = cljs.core.next.call(null,seq37700__$1);
var G__37703 = cljs.core.first.call(null,seq37700__$2);
var seq37700__$3 = cljs.core.next.call(null,seq37700__$2);
var G__37704 = cljs.core.first.call(null,seq37700__$3);
var seq37700__$4 = cljs.core.next.call(null,seq37700__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37701,G__37702,G__37703,G__37704,seq37700__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___37718 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__37717 = arguments.length;
switch (G__37717) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37720 = arguments.length;
var i__4731__auto___37721 = (0);
while(true){
if((i__4731__auto___37721 < len__4730__auto___37720)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37721]));

var G__37722 = (i__4731__auto___37721 + (1));
i__4731__auto___37721 = G__37722;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),more))),null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq37712){
var G__37713 = cljs.core.first.call(null,seq37712);
var seq37712__$1 = cljs.core.next.call(null,seq37712);
var G__37714 = cljs.core.first.call(null,seq37712__$1);
var seq37712__$2 = cljs.core.next.call(null,seq37712__$1);
var G__37715 = cljs.core.first.call(null,seq37712__$2);
var seq37712__$3 = cljs.core.next.call(null,seq37712__$2);
var G__37716 = cljs.core.first.call(null,seq37712__$3);
var seq37712__$4 = cljs.core.next.call(null,seq37712__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37713,G__37714,G__37715,G__37716,seq37712__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__4776__auto___37723 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__4776__auto___37724 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__4776__auto___37725 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37726 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37727 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___37737 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__37736 = arguments.length;
switch (G__37736) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37739 = arguments.length;
var i__4731__auto___37740 = (0);
while(true){
if((i__4731__auto___37740 < len__4730__auto___37739)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37740]));

var G__37741 = (i__4731__auto___37740 + (1));
i__4731__auto___37740 = G__37741;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37728__auto__","x__37728__auto__",2078866065,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__37729__auto__","y__37729__auto__",1664943632,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} > ~{}) ? ~{} : ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37728__auto__","x__37728__auto__",2078866065,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__37729__auto__","y__37729__auto__",1664943632,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37728__auto__","x__37728__auto__",2078866065,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__37729__auto__","y__37729__auto__",1664943632,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.max.cljs$lang$applyTo = (function (seq37731){
var G__37732 = cljs.core.first.call(null,seq37731);
var seq37731__$1 = cljs.core.next.call(null,seq37731);
var G__37733 = cljs.core.first.call(null,seq37731__$1);
var seq37731__$2 = cljs.core.next.call(null,seq37731__$1);
var G__37734 = cljs.core.first.call(null,seq37731__$2);
var seq37731__$3 = cljs.core.next.call(null,seq37731__$2);
var G__37735 = cljs.core.first.call(null,seq37731__$3);
var seq37731__$4 = cljs.core.next.call(null,seq37731__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37732,G__37733,G__37734,G__37735,seq37731__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__4776__auto___37751 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__37750 = arguments.length;
switch (G__37750) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37753 = arguments.length;
var i__4731__auto___37754 = (0);
while(true){
if((i__4731__auto___37754 < len__4730__auto___37753)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37754]));

var G__37755 = (i__4731__auto___37754 + (1));
i__4731__auto___37754 = G__37755;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37742__auto__","x__37742__auto__",1879546474,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__37743__auto__","y__37743__auto__",-1407883529,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} < ~{}) ? ~{} : ~{})",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37742__auto__","x__37742__auto__",1879546474,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__37743__auto__","y__37743__auto__",-1407883529,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37742__auto__","x__37742__auto__",1879546474,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__37743__auto__","y__37743__auto__",-1407883529,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.min.cljs$lang$applyTo = (function (seq37745){
var G__37746 = cljs.core.first.call(null,seq37745);
var seq37745__$1 = cljs.core.next.call(null,seq37745);
var G__37747 = cljs.core.first.call(null,seq37745__$1);
var seq37745__$2 = cljs.core.next.call(null,seq37745__$1);
var G__37748 = cljs.core.first.call(null,seq37745__$2);
var seq37745__$3 = cljs.core.next.call(null,seq37745__$2);
var G__37749 = cljs.core.first.call(null,seq37745__$3);
var seq37745__$4 = cljs.core.next.call(null,seq37745__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37746,G__37747,G__37748,G__37749,seq37745__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__4776__auto___37756 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} % ~{})",(new cljs.core.List(null,num,(new cljs.core.List(null,div,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__4776__auto___37757 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~ ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__4776__auto___37765 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__37764 = arguments.length;
switch (G__37764) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37767 = arguments.length;
var i__4731__auto___37768 = (0);
while(true){
if((i__4731__auto___37768 < len__4730__auto___37767)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37768]));

var G__37769 = (i__4731__auto___37768 + (1));
i__4731__auto___37768 = G__37769;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq37759){
var G__37760 = cljs.core.first.call(null,seq37759);
var seq37759__$1 = cljs.core.next.call(null,seq37759);
var G__37761 = cljs.core.first.call(null,seq37759__$1);
var seq37759__$2 = cljs.core.next.call(null,seq37759__$1);
var G__37762 = cljs.core.first.call(null,seq37759__$2);
var seq37759__$3 = cljs.core.next.call(null,seq37759__$2);
var G__37763 = cljs.core.first.call(null,seq37759__$3);
var seq37759__$4 = cljs.core.next.call(null,seq37759__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37760,G__37761,G__37762,G__37763,seq37759__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__4776__auto___37777 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__37776 = arguments.length;
switch (G__37776) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37779 = arguments.length;
var i__4731__auto___37780 = (0);
while(true){
if((i__4731__auto___37780 < len__4730__auto___37779)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37780]));

var G__37781 = (i__4731__auto___37780 + (1));
i__4731__auto___37780 = G__37781;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq37771){
var G__37772 = cljs.core.first.call(null,seq37771);
var seq37771__$1 = cljs.core.next.call(null,seq37771);
var G__37773 = cljs.core.first.call(null,seq37771__$1);
var seq37771__$2 = cljs.core.next.call(null,seq37771__$1);
var G__37774 = cljs.core.first.call(null,seq37771__$2);
var seq37771__$3 = cljs.core.next.call(null,seq37771__$2);
var G__37775 = cljs.core.first.call(null,seq37771__$3);
var seq37771__$4 = cljs.core.next.call(null,seq37771__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37772,G__37773,G__37774,G__37775,seq37771__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__4776__auto___37789 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__37788 = arguments.length;
switch (G__37788) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37791 = arguments.length;
var i__4731__auto___37792 = (0);
while(true){
if((i__4731__auto___37792 < len__4730__auto___37791)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37792]));

var G__37793 = (i__4731__auto___37792 + (1));
i__4731__auto___37792 = G__37793;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq37783){
var G__37784 = cljs.core.first.call(null,seq37783);
var seq37783__$1 = cljs.core.next.call(null,seq37783);
var G__37785 = cljs.core.first.call(null,seq37783__$1);
var seq37783__$2 = cljs.core.next.call(null,seq37783__$1);
var G__37786 = cljs.core.first.call(null,seq37783__$2);
var seq37783__$3 = cljs.core.next.call(null,seq37783__$2);
var G__37787 = cljs.core.first.call(null,seq37783__$3);
var seq37783__$4 = cljs.core.next.call(null,seq37783__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37784,G__37785,G__37786,G__37787,seq37783__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__4776__auto___37794 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__4776__auto___37802 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__37801 = arguments.length;
switch (G__37801) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37804 = arguments.length;
var i__4731__auto___37805 = (0);
while(true){
if((i__4731__auto___37805 < len__4730__auto___37804)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37805]));

var G__37806 = (i__4731__auto___37805 + (1));
i__4731__auto___37805 = G__37806;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq37796){
var G__37797 = cljs.core.first.call(null,seq37796);
var seq37796__$1 = cljs.core.next.call(null,seq37796);
var G__37798 = cljs.core.first.call(null,seq37796__$1);
var seq37796__$2 = cljs.core.next.call(null,seq37796__$1);
var G__37799 = cljs.core.first.call(null,seq37796__$2);
var seq37796__$3 = cljs.core.next.call(null,seq37796__$2);
var G__37800 = cljs.core.first.call(null,seq37796__$3);
var seq37796__$4 = cljs.core.next.call(null,seq37796__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37797,G__37798,G__37799,G__37800,seq37796__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__4776__auto___37814 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__37813 = arguments.length;
switch (G__37813) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37816 = arguments.length;
var i__4731__auto___37817 = (0);
while(true){
if((i__4731__auto___37817 < len__4730__auto___37816)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37817]));

var G__37818 = (i__4731__auto___37817 + (1));
i__4731__auto___37817 = G__37818;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),null,(1),null)),more)));
});

/** @this {Function} */
cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq37808){
var G__37809 = cljs.core.first.call(null,seq37808);
var seq37808__$1 = cljs.core.next.call(null,seq37808);
var G__37810 = cljs.core.first.call(null,seq37808__$1);
var seq37808__$2 = cljs.core.next.call(null,seq37808__$1);
var G__37811 = cljs.core.first.call(null,seq37808__$2);
var seq37808__$3 = cljs.core.next.call(null,seq37808__$2);
var G__37812 = cljs.core.first.call(null,seq37808__$3);
var seq37808__$4 = cljs.core.next.call(null,seq37808__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37809,G__37810,G__37811,G__37812,seq37808__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__4776__auto___37819 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~(1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__4776__auto___37820 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__4776__auto___37821 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} & (1 << ~{})) != 0)",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__4776__auto___37822 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} << ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__4776__auto___37823 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__4776__auto___37824 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__4776__auto___37825 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__4776__auto___37826 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__4776__auto___37827 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} >>> ~{}) & 0x01f)",(new cljs.core.List(null,hash,(new cljs.core.List(null,shift,null,(1),null)),(2),null)),(3),null)),(4),null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__4776__auto___37828 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(1 << ~{})",(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null),null,(1),null)),(new cljs.core.List(null,hash,null,(1),null)),(new cljs.core.List(null,shift,null,(1),null))))),null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__4776__auto___37830 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"h__37829__auto__","h__37829__auto__",-351594146,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__37829__auto__","h__37829__auto__",-351594146,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__37829__auto__","h__37829__auto__",-351594146,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"h__37829__auto__","h__37829__auto__",-351594146,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,hash_fn,null,(1),null)),(new cljs.core.List(null,coll,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__37829__auto__","h__37829__auto__",-351594146,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__37829__auto__","h__37829__auto__",-351594146,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cargs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37831__auto__","x__37831__auto__",-1732232126,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),cargs,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__37831__auto__","x__37831__auto__",-1732232126,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,args,null,(1),null)),body))),null,(1),null)))));
});
var ret__4776__auto___37839 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37840 = arguments.length;
var i__4731__auto___37841 = (0);
while(true){
if((i__4731__auto___37841 < len__4730__auto___37840)){
args__4736__auto__.push((arguments[i__4731__auto___37841]));

var G__37842 = (i__4731__auto___37841 + (1));
i__4731__auto___37841 = G__37842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((6) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4737__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

/** @this {Function} */
cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq37832){
var G__37833 = cljs.core.first.call(null,seq37832);
var seq37832__$1 = cljs.core.next.call(null,seq37832);
var G__37834 = cljs.core.first.call(null,seq37832__$1);
var seq37832__$2 = cljs.core.next.call(null,seq37832__$1);
var G__37835 = cljs.core.first.call(null,seq37832__$2);
var seq37832__$3 = cljs.core.next.call(null,seq37832__$2);
var G__37836 = cljs.core.first.call(null,seq37832__$3);
var seq37832__$4 = cljs.core.next.call(null,seq37832__$3);
var G__37837 = cljs.core.first.call(null,seq37832__$4);
var seq37832__$5 = cljs.core.next.call(null,seq37832__$4);
var G__37838 = cljs.core.first.call(null,seq37832__$5);
var seq37832__$6 = cljs.core.next.call(null,seq37832__$5);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37833,G__37834,G__37835,G__37836,G__37837,G__37838,seq37832__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f1,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,clojure.walk.postwalk.call(null,(function (p1__37843_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__37843_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__37843_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__37843_SHARP_));
} else {
return p1__37843_SHARP_;
}
}),fkv),null,(1),null)),(new cljs.core.List(null,fkv,null,(1),null)))));
});
var ret__4776__auto___37848 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__37844,fkv){
var vec__37845 = p__37844;
var f1 = cljs.core.nth.call(null,vec__37845,(0),null);
var k = cljs.core.nth.call(null,vec__37845,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__4776__auto___37852 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37853 = arguments.length;
var i__4731__auto___37854 = (0);
while(true){
if((i__4731__auto___37854 < len__4730__auto___37853)){
args__4736__auto__.push((arguments[i__4731__auto___37854]));

var G__37855 = (i__4731__auto___37854 + (1));
i__4731__auto___37854 = G__37855;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),locals,(new cljs.core.List(null,meta_sym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null))))),null,(1),null)),impls))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),locals,(new cljs.core.List(null,cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form)),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.reify.cljs$lang$applyTo = (function (seq37849){
var G__37850 = cljs.core.first.call(null,seq37849);
var seq37849__$1 = cljs.core.next.call(null,seq37849);
var G__37851 = cljs.core.first.call(null,seq37849__$1);
var seq37849__$2 = cljs.core.next.call(null,seq37849__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37850,G__37851,seq37849__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__4776__auto___37860 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37861 = arguments.length;
var i__4731__auto___37862 = (0);
while(true){
if((i__4731__auto___37862 < len__4730__auto___37861)){
args__4736__auto__.push((arguments[i__4731__auto___37862]));

var G__37863 = (i__4731__auto___37862 + (1));
i__4731__auto___37862 = G__37863;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),impls))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq37856){
var G__37857 = cljs.core.first.call(null,seq37856);
var seq37856__$1 = cljs.core.next.call(null,seq37856);
var G__37858 = cljs.core.first.call(null,seq37856__$1);
var seq37856__$2 = cljs.core.next.call(null,seq37856__$1);
var G__37859 = cljs.core.first.call(null,seq37856__$2);
var seq37856__$3 = cljs.core.next.call(null,seq37856__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37857,G__37858,G__37859,seq37856__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__4776__auto___37868 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37869 = arguments.length;
var i__4731__auto___37870 = (0);
while(true){
if((i__4731__auto___37870 < len__4730__auto___37869)){
args__4736__auto__.push((arguments[i__4731__auto___37870]));

var G__37871 = (i__4731__auto___37870 + (1));
i__4731__auto___37870 = G__37871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.specify.cljs$lang$applyTo = (function (seq37864){
var G__37865 = cljs.core.first.call(null,seq37864);
var seq37864__$1 = cljs.core.next.call(null,seq37864);
var G__37866 = cljs.core.first.call(null,seq37864__$1);
var seq37864__$2 = cljs.core.next.call(null,seq37864__$1);
var G__37867 = cljs.core.first.call(null,seq37864__$2);
var seq37864__$3 = cljs.core.next.call(null,seq37864__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37865,G__37866,G__37867,seq37864__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__4776__auto___37872 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"this",null,(1),null)),(2),null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__4776__auto___37877 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37878 = arguments.length;
var i__4731__auto___37879 = (0);
while(true){
if((i__4731__auto___37879 < len__4730__auto___37878)){
args__4736__auto__.push((arguments[i__4731__auto___37879]));

var G__37880 = (i__4731__auto___37879 + (1));
i__4731__auto___37879 = G__37880;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq37873){
var G__37874 = cljs.core.first.call(null,seq37873);
var seq37873__$1 = cljs.core.next.call(null,seq37873);
var G__37875 = cljs.core.first.call(null,seq37873__$1);
var seq37873__$2 = cljs.core.next.call(null,seq37873__$1);
var G__37876 = cljs.core.first.call(null,seq37873__$2);
var seq37873__$3 = cljs.core.next.call(null,seq37873__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37874,G__37875,G__37876,seq37873__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__5718__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__5718__auto__)){
var var$ = temp__5718__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__5718__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__5718__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__37881 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__37882 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__37881;
s = G__37882;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__37883){
var vec__37884 = p__37883;
var p = cljs.core.nth.call(null,vec__37884,(0),null);
var sigs = cljs.core.nth.call(null,vec__37884,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym),(0),(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__37884,p,sigs){
return (function (p__37887){
var vec__37888 = p__37887;
var seq__37889 = cljs.core.seq.call(null,vec__37888);
var first__37890 = cljs.core.first.call(null,seq__37889);
var seq__37889__$1 = cljs.core.next.call(null,seq__37889);
var f = first__37890;
var meths = seq__37889__$1;
var form = vec__37888;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),meths))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(psym,pfn_prefix,vec__37884,p,sigs))
,sigs));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core$macros !== 'undefined') && (typeof cljs.core$macros.extend_prefix !== 'undefined')){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,sym),null,(1),null)))));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,sym),null,(1),null)))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__37891){
var vec__37892 = p__37891;
var seq__37893 = cljs.core.seq.call(null,vec__37892);
var first__37894 = cljs.core.first.call(null,seq__37893);
var seq__37893__$1 = cljs.core.next.call(null,seq__37893);
var vec__37895 = first__37894;
var seq__37896 = cljs.core.seq.call(null,vec__37895);
var first__37897 = cljs.core.first.call(null,seq__37896);
var seq__37896__$1 = cljs.core.next.call(null,seq__37896);
var this$ = first__37897;
var args = seq__37896__$1;
var sig = vec__37895;
var body = seq__37893__$1;
return (new cljs.core.List(null,cljs.core.vec.call(null,args),(new cljs.core.List(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body),null,(1),null)),(2),null));
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__37898){
var vec__37899 = p__37898;
var seq__37900 = cljs.core.seq.call(null,vec__37899);
var first__37901 = cljs.core.first.call(null,seq__37900);
var seq__37900__$1 = cljs.core.next.call(null,seq__37900);
var vec__37902 = first__37901;
var seq__37903 = cljs.core.seq.call(null,vec__37902);
var first__37904 = cljs.core.first.call(null,seq__37903);
var seq__37903__$1 = cljs.core.next.call(null,seq__37903);
var this$ = first__37904;
var args = seq__37903__$1;
var sig = vec__37902;
var body = seq__37900__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)))))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__37905){
var vec__37906 = p__37905;
var seq__37907 = cljs.core.seq.call(null,vec__37906);
var first__37908 = cljs.core.first.call(null,seq__37907);
var seq__37907__$1 = cljs.core.next.call(null,seq__37907);
var vec__37909 = first__37908;
var seq__37910 = cljs.core.seq.call(null,vec__37909);
var first__37911 = cljs.core.first.call(null,seq__37910);
var seq__37910__$1 = cljs.core.next.call(null,seq__37910);
var this$ = first__37911;
var args = seq__37910__$1;
var sig = vec__37909;
var body = seq__37907__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,args),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),null,(1),null)),body))),null,(1),null)))));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__37912){
var vec__37913 = p__37912;
var seq__37914 = cljs.core.seq.call(null,vec__37913);
var first__37915 = cljs.core.first.call(null,seq__37914);
var seq__37914__$1 = cljs.core.next.call(null,seq__37914);
var vec__37916 = first__37915;
var seq__37917 = cljs.core.seq.call(null,vec__37916);
var first__37918 = cljs.core.first.call(null,seq__37917);
var seq__37917__$1 = cljs.core.next.call(null,seq__37917);
var this$ = first__37918;
var args = seq__37917__$1;
var sig = vec__37916;
var body = seq__37914__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,this_SINGLEQUOTE_,null,(1),null)),body))),null,(1),null)))));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__37920){
var vec__37921 = p__37920;
var seq__37922 = cljs.core.seq.call(null,vec__37921);
var first__37923 = cljs.core.first.call(null,seq__37922);
var seq__37922__$1 = cljs.core.next.call(null,seq__37922);
var f = first__37923;
var meths = seq__37922__$1;
var form = vec__37921;
var vec__37924 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__37924,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__37924,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,f__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),cljs.core.map.call(null,((function (vec__37924,f__$1,meths__$1,vec__37921,seq__37922,first__37923,seq__37922__$1,f,meths,form){
return (function (p1__37919_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__37919_SHARP_);
});})(vec__37924,f__$1,meths__$1,vec__37921,seq__37922,first__37923,seq__37922__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form)),null,(1),null)))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__37928){
var vec__37929 = p__37928;
var seq__37930 = cljs.core.seq.call(null,vec__37929);
var first__37931 = cljs.core.first.call(null,seq__37930);
var seq__37930__$1 = cljs.core.next.call(null,seq__37930);
var f = first__37931;
var meths = seq__37930__$1;
var form = vec__37929;
return cljs.core.map.call(null,((function (vec__37929,seq__37930,first__37931,seq__37930__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,meth,null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(vec__37929,seq__37930,first__37931,seq__37930__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__37929,seq__37930,first__37931,seq__37930__$1,f,meths,form){
return (function (p1__37927_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__37927_SHARP_);
});})(vec__37929,seq__37930,first__37931,seq__37930__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__37933){
var vec__37934 = p__37933;
var seq__37935 = cljs.core.seq.call(null,vec__37934);
var first__37936 = cljs.core.first.call(null,seq__37935);
var seq__37935__$1 = cljs.core.next.call(null,seq__37935);
var f = first__37936;
var meths = seq__37935__$1;
var form = vec__37934;
var meths__$1 = cljs.core.map.call(null,((function (vec__37934,seq__37935,first__37936,seq__37935__$1,f,meths,form){
return (function (p1__37932_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__37932_SHARP_);
});})(vec__37934,seq__37935,first__37936,seq__37935__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),meths__$1))),cljs.core.meta.call(null,form)),null,(1),null))))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-call",".-call",1760541695,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".concat",".concat",1180408684,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,argsym,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__37937){
var vec__37938 = p__37937;
var seq__37939 = cljs.core.seq.call(null,vec__37938);
var first__37940 = cljs.core.first.call(null,seq__37939);
var seq__37939__$1 = cljs.core.next.call(null,seq__37939);
var f = first__37940;
var meths = seq__37939__$1;
var form = vec__37938;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.core.name.call(null,f)))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form)),null,(1),null)))))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__37938,seq__37939,first__37940,seq__37939__$1,f,meths,form){
return (function (p__37941){
var vec__37942 = p__37941;
var seq__37943 = cljs.core.seq.call(null,vec__37942);
var first__37944 = cljs.core.first.call(null,seq__37943);
var seq__37943__$1 = cljs.core.next.call(null,seq__37943);
var sig = first__37944;
var body = seq__37943__$1;
var meth = vec__37942;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.adapt_proto_params.call(null,type,meth),null,(1),null))))),cljs.core.meta.call(null,form)),null,(1),null)))));
});})(pf,vec__37938,seq__37939,first__37940,seq__37939__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__37945){
var vec__37946 = p__37945;
var p = cljs.core.nth.call(null,vec__37946,(0),null);
var sigs = cljs.core.nth.call(null,vec__37946,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.call(null,type_sym,pprefix),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__37946,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__37946,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__37949 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__37949,(0),null);
var sigs = cljs.core.nth.call(null,vec__37949,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_37952 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_37952))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if(((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths)))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__37953 = cljs.core.next.call(null,sigs__$1);
var G__37954 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__37953;
seen = G__37954;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_37967 = cljs.core.PersistentHashSet.EMPTY;
var methods_37968__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_37968__$1)){
var vec__37964_37969 = cljs.core.first.call(null,methods_37968__$1);
var fname_37970 = cljs.core.nth.call(null,vec__37964_37969,(0),null);
var method_37971 = vec__37964_37969;
if(cljs.core.contains_QMARK_.call(null,seen_37967,fname_37970)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_37970], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_37971);

var G__37972 = cljs.core.conj.call(null,seen_37967,fname_37970);
var G__37973 = cljs.core.next.call(null,methods_37968__$1);
seen_37967 = G__37972;
methods_37968__$1 = G__37973;
continue;
} else {
}
break;
}

var G__37974 = cljs.core.conj.call(null,protos,proto);
var G__37975 = impls__$2;
protos = G__37974;
impls__$1 = G__37975;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__4776__auto___37984 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37985 = arguments.length;
var i__4731__auto___37986 = (0);
while(true){
if((i__4731__auto___37986 < len__4730__auto___37985)){
args__4736__auto__.push((arguments[i__4731__auto___37986]));

var G__37987 = (i__4731__auto___37986 + (1));
i__4731__auto___37986 = G__37987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null"], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__37981 = (function (){var temp__5718__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__5718__auto__)){
var type = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__37981,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__37981,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__4120__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__37981,type,assign_impls){
return (function (p1__37976_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__37976_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__37981,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq37977){
var G__37978 = cljs.core.first.call(null,seq37977);
var seq37977__$1 = cljs.core.next.call(null,seq37977);
var G__37979 = cljs.core.first.call(null,seq37977__$1);
var seq37977__$2 = cljs.core.next.call(null,seq37977__$1);
var G__37980 = cljs.core.first.call(null,seq37977__$2);
var seq37977__$3 = cljs.core.next.call(null,seq37977__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37978,G__37979,G__37980,seq37977__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__37989){
var vec__37990 = p__37989;
var f = cljs.core.nth.call(null,vec__37990,(0),null);
var sigs = cljs.core.nth.call(null,vec__37990,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__37990,f,sigs){
return (function (p1__37988_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__37988_SHARP_),cljs.core.nnext.call(null,p1__37988_SHARP_));
});})(vec__37990,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__37994 = arguments.length;
switch (G__37994) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__37996 = ret__$1;
var G__37997 = specs__$2;
ret = G__37996;
specs__$1 = G__37997;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__37998_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__37998_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var docstring = ["Positional factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),"."].join('');
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),field_values))),null,(1),null)))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__4776__auto___38010 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38011 = arguments.length;
var i__4731__auto___38012 = (0);
while(true){
if((i__4731__auto___38012 < len__4730__auto___38011)){
args__4736__auto__.push((arguments[i__4731__auto___38012]));

var G__38013 = (i__4731__auto___38012 + (1));
i__4731__auto___38012 = G__38013;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__38007 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__38007,(0),null);
var pmasks = cljs.core.nth.call(null,vec__38007,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),(new cljs.core.List(null,fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__37999__auto__","this__37999__auto__",-1142869187,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__38000__auto__","writer__38000__auto__",595814128,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opt__38001__auto__","opt__38001__auto__",-1025949133,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__38000__auto__","writer__38000__auto__",595814128,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq38002){
var G__38003 = cljs.core.first.call(null,seq38002);
var seq38002__$1 = cljs.core.next.call(null,seq38002);
var G__38004 = cljs.core.first.call(null,seq38002__$1);
var seq38002__$2 = cljs.core.next.call(null,seq38002__$1);
var G__38005 = cljs.core.first.call(null,seq38002__$2);
var seq38002__$3 = cljs.core.next.call(null,seq38002__$2);
var G__38006 = cljs.core.first.call(null,seq38002__$3);
var seq38002__$4 = cljs.core.next.call(null,seq38002__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38003,G__38004,G__38005,G__38006,seq38002__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__38014_SHARP_){
return cljs.core.with_meta.call(null,p1__38014_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.namespace.call(null,rname),".",cljs.core.name.call(null,rname),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-clone","-clone",227130084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38015__auto__","this__38015__auto__",-157085104,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),fields__$2))),null,(1),null))))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38016__auto__","this__38016__auto__",-775181853,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38016__auto__","this__38016__auto__",-775181853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__38017__auto__","coll__38017__auto__",-136433063,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.hash.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__38017__auto__","coll__38017__auto__",-136433063,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,other,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,field),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property.call(null,field),null,(1),null))))),null,(1),null)))));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38018__auto__","this__38018__auto__",-675289776,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38019__auto__","this__38019__auto__",224769402,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)))),null,(1),null))))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38020__auto__","this__38020__auto__",445313334,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38021__auto__","k__38021__auto__",1532775462,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38020__auto__","this__38020__auto__",445313334,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38021__auto__","k__38021__auto__",1532775462,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38022__auto__","this__38022__auto__",388591889,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__38023__auto__","else__38023__auto__",-270767942,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__38023__auto__","else__38023__auto__",-270767942,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-count","-count",416049189,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38024__auto__","this__38024__auto__",90451361,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38025__auto__","this__38025__auto__",1248383968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__38026__auto__","entry__38026__auto__",2000595689,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__38026__auto__","entry__38026__auto__",2000595689,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38025__auto__","this__38025__auto__",1248383968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__38026__auto__","entry__38026__auto__",2000595689,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__38026__auto__","entry__38026__auto__",2000595689,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38025__auto__","this__38025__auto__",1248383968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__38026__auto__","entry__38026__auto__",2000595689,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38027__auto__","this__38027__auto__",-1743597201,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38028__auto__","k__38028__auto__",1720891378,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38028__auto__","k__38028__auto__",1720891378,null),null,(1),null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38028__auto__","k__38028__auto__",1720891378,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38029__auto__","this__38029__auto__",-180481910,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38030__auto__","k__38030__auto__",-562735461,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38030__auto__","k__38030__auto__",-562735461,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38029__auto__","this__38029__auto__",-180481910,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38030__auto__","k__38030__auto__",-562735461,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38030__auto__","k__38030__auto__",-562735461,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38032__auto__","this__38032__auto__",-849800872,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__38031_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MapEntry.","cljs.core/MapEntry.",1317224033,null),(new cljs.core.List(null,cljs.core.keyword.call(null,p1__38031_SHARP_),(new cljs.core.List(null,p1__38031_SHARP_,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38034__auto__","this__38034__auto__",-121006944,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__38035__auto__","writer__38035__auto__",-1882441510,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__38036__auto__","opts__38036__auto__",-309780605,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__38037__auto__","pr-pair__38037__auto__",-1832288985,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__38038__auto__","keyval__38038__auto__",-2107087521,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__38035__auto__","writer__38035__auto__",-1882441510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.pr_writer",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__38036__auto__","opts__38036__auto__",-309780605,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__38038__auto__","keyval__38038__auto__",-2107087521,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__38035__auto__","writer__38035__auto__",-1882441510,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__38037__auto__","pr-pair__38037__auto__",-1832288985,null),null,(1),null)),(new cljs.core.List(null,pr_open,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,"}",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__38036__auto__","opts__38036__auto__",-309780605,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__38033_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null),(new cljs.core.List(null,cljs.core.keyword.call(null,p1__38033_SHARP_),(new cljs.core.List(null,p1__38033_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-kv-reduce","-kv-reduce",456218795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38039__auto__","this__38039__auto__",1918144928,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__38040__auto__","f__38040__auto__",1518338237,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"init__38041__auto__","init__38041__auto__",1258604568,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__38042__auto__","ret__38042__auto__",-441848597,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38043__auto__","k__38043__auto__",-1678257583,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__38044__auto__","v__38044__auto__",-1352993082,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__38040__auto__","f__38040__auto__",1518338237,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__38042__auto__","ret__38042__auto__",-441848597,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__38043__auto__","k__38043__auto__",-1678257583,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__38044__auto__","v__38044__auto__",-1352993082,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"init__38041__auto__","init__38041__auto__",1258604568,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38039__auto__","this__38039__auto__",1918144928,null),null,(1),null))))),null,(1),null)))))], null));
var vec__38045 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__38045,(0),null);
var pmasks = cljs.core.nth.call(null,vec__38045,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),(new cljs.core.List(null,hinted_fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true)))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var docstring = ["Factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),", taking a map of keywords to field values."].join('');
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,docstring,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)))));
});})(fn_name,docstring,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ms,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__38048__auto__","extmap__38048__auto__",1138399478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","cond->>","cljs.core$macros/cond->>",967881072,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)),ks))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","record?","cljs.core/record?",1307655860,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),getters,(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__38048__auto__","extmap__38048__auto__",1138399478,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
var ret__4776__auto___38056 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38057 = arguments.length;
var i__4731__auto___38058 = (0);
while(true){
if((i__4731__auto___38058 < len__4730__auto___38057)){
args__4736__auto__.push((arguments[i__4731__auto___38058]));

var G__38059 = (i__4731__auto___38058 + (1));
i__4731__auto___38058 = G__38059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38049__auto__","this__38049__auto__",1005295344,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38049__auto__","this__38049__auto__",1005295344,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__38050__auto__","writer__38050__auto__",1334924149,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__38050__auto__","writer__38050__auto__",1334924149,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq38051){
var G__38052 = cljs.core.first.call(null,seq38051);
var seq38051__$1 = cljs.core.next.call(null,seq38051);
var G__38053 = cljs.core.first.call(null,seq38051__$1);
var seq38051__$2 = cljs.core.next.call(null,seq38051__$1);
var G__38054 = cljs.core.first.call(null,seq38051__$2);
var seq38051__$3 = cljs.core.next.call(null,seq38051__$2);
var G__38055 = cljs.core.first.call(null,seq38051__$3);
var seq38051__$4 = cljs.core.next.call(null,seq38051__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38052,G__38053,G__38054,G__38055,seq38051__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__4776__auto___38101 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38102 = arguments.length;
var i__4731__auto___38103 = (0);
while(true){
if((i__4731__auto___38103 < len__4730__auto___38102)){
args__4736__auto__.push((arguments[i__4731__auto___38103]));

var G__38104 = (i__4731__auto___38103 + (1));
i__4731__auto___38103 = G__38104;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__38068 = (function (){var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true], null);
var methods$ = cljs.core.PersistentVector.EMPTY;
var sigs = doc_PLUS_methods;
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,sigs))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,methods$], null);
} else {
var vec__38074 = sigs;
var seq__38075 = cljs.core.seq.call(null,vec__38074);
var first__38076 = cljs.core.first.call(null,seq__38075);
var seq__38075__$1 = cljs.core.next.call(null,seq__38075);
var head = first__38076;
var tail = seq__38075__$1;
if(typeof head === 'string'){
var G__38105 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"doc","doc",1913296891),head);
var G__38106 = methods$;
var G__38107 = tail;
opts = G__38105;
methods$ = G__38106;
sigs = G__38107;
continue;
} else {
if((head instanceof cljs.core.Keyword)){
var G__38108 = cljs.core.assoc.call(null,opts,head,cljs.core.first.call(null,tail));
var G__38109 = methods$;
var G__38110 = cljs.core.rest.call(null,tail);
opts = G__38108;
methods$ = G__38109;
sigs = G__38110;
continue;
} else {
if(cljs.core.list_QMARK_.call(null,head)){
var G__38111 = opts;
var G__38112 = cljs.core.conj.call(null,methods$,head);
var G__38113 = tail;
opts = G__38111;
methods$ = G__38112;
sigs = G__38113;
continue;
} else {
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)," received unexpected argument"].join('')));

}
}
}
}
break;
}
})();
var opts = cljs.core.nth.call(null,vec__38068,(0),null);
var methods$ = cljs.core.nth.call(null,vec__38068,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.merge,opts);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__38068,opts,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
});})(p,vec__38068,opts,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__38077 = cljs.core.seq.call(null,methods$);
var chunk__38078 = null;
var count__38079 = (0);
var i__38080 = (0);
while(true){
if((i__38080 < count__38079)){
var vec__38087 = cljs.core._nth.call(null,chunk__38078,i__38080);
var seq__38088 = cljs.core.seq.call(null,vec__38087);
var first__38089 = cljs.core.first.call(null,seq__38088);
var seq__38088__$1 = cljs.core.next.call(null,seq__38088);
var mname = first__38089;
var arities = seq__38088__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__38114 = seq__38077;
var G__38115 = chunk__38078;
var G__38116 = count__38079;
var G__38117 = (i__38080 + (1));
seq__38077 = G__38114;
chunk__38078 = G__38115;
count__38079 = G__38116;
i__38080 = G__38117;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38077);
if(temp__5720__auto__){
var seq__38077__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38077__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38077__$1);
var G__38118 = cljs.core.chunk_rest.call(null,seq__38077__$1);
var G__38119 = c__4550__auto__;
var G__38120 = cljs.core.count.call(null,c__4550__auto__);
var G__38121 = (0);
seq__38077 = G__38118;
chunk__38078 = G__38119;
count__38079 = G__38120;
i__38080 = G__38121;
continue;
} else {
var vec__38090 = cljs.core.first.call(null,seq__38077__$1);
var seq__38091 = cljs.core.seq.call(null,vec__38090);
var first__38092 = cljs.core.first.call(null,seq__38091);
var seq__38091__$1 = cljs.core.next.call(null,seq__38091);
var mname = first__38092;
var arities = seq__38091__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__38122 = cljs.core.next.call(null,seq__38077__$1);
var G__38123 = null;
var G__38124 = (0);
var G__38125 = (0);
seq__38077 = G__38122;
chunk__38078 = G__38123;
count__38079 = G__38124;
i__38080 = G__38125;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = (((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig))))?cljs.core.mapv.call(null,((function (p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if(((cljs.core.map_QMARK_.call(null,arg)) && ((!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
var fqn_fname = fqn.call(null,fname);
var fsig = cljs.core.first.call(null,sig__$1);
var check = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__38060__auto__","m__38060__auto__",-109777582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),(new cljs.core.List(null,"_",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__38060__auto__","m__38060__auto__",-109777582,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__38060__auto__","m__38060__auto__",-109777582,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
var check__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts)))?check:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__38061__auto__","meta-impl__38061__auto__",430066226,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__38061__auto__","meta-impl__38061__auto__",430066226,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check,null,(1),null))))));
var check__$2 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__38062__auto__","x__38062__auto__",-551009589,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__38063__auto__","m__38063__auto__",-1430259959,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__38062__auto__","x__38062__auto__",-551009589,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__38063__auto__","m__38063__auto__",-1430259959,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__38063__auto__","m__38063__auto__",-1430259959,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check__$1,null,(1),null))))),null,(1),null)))));
var check__$3 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check__$2,null,(1),null)))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,sig__$1,null,(1),null)),(new cljs.core.List(null,check__$3,null,(1),null)))));
});})(p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__38093){
var vec__38094 = p__38093;
var seq__38095 = cljs.core.seq.call(null,vec__38094);
var first__38096 = cljs.core.first.call(null,seq__38095);
var seq__38095__$1 = cljs.core.next.call(null,seq__38095);
var fname = first__38096;
var sigs = seq__38095__$1;
var doc = (function (){var doc = cljs.core.last.call(null,sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__38097){
var vec__38098 = p__38097;
var seq__38099 = cljs.core.seq.call(null,vec__38098);
var first__38100 = cljs.core.first.call(null,seq__38099);
var seq__38099__$1 = cljs.core.next.call(null,seq__38099);
var fname = first__38100;
var sigs = seq__38099__$1;
var doc = (function (){var doc = cljs.core.last.call(null,sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.core.name.call(null,fname)))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,fname__$1,null,(1),null)),cljs.core.map.call(null,((function (doc,sigs__$1,amp,slot,fname__$1,vec__38098,seq__38099,first__38100,seq__38099__$1,fname,sigs,p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc,sigs__$1,amp,slot,fname__$1,vec__38098,seq__38099,first__38100,seq__38099__$1,fname,sigs,p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__38068,opts,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,psym__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"function(){}",null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,method,methods$),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq38064){
var G__38065 = cljs.core.first.call(null,seq38064);
var seq38064__$1 = cljs.core.next.call(null,seq38064);
var G__38066 = cljs.core.first.call(null,seq38064__$1);
var seq38064__$2 = cljs.core.next.call(null,seq38064__$1);
var G__38067 = cljs.core.first.call(null,seq38064__$2);
var seq38064__$3 = cljs.core.next.call(null,seq38064__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38065,G__38066,G__38067,seq38064__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__4776__auto___38129 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__38126 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__38126,(0),null);
var bit = cljs.core.nth.call(null,vec__38126,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___38133 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__38130 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__38130,(0),null);
var bit = cljs.core.nth.call(null,vec__38130,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bit,null,(1),null))))):false),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",prefix].join('')),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,msym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___38137 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38138 = arguments.length;
var i__4731__auto___38139 = (0);
while(true){
if((i__4731__auto___38139 < len__4730__auto___38138)){
args__4736__auto__.push((arguments[i__4731__auto___38139]));

var G__38140 = (i__4731__auto___38139 + (1));
i__4731__auto___38139 = G__38140;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq38134){
var G__38135 = cljs.core.first.call(null,seq38134);
var seq38134__$1 = cljs.core.next.call(null,seq38134);
var G__38136 = cljs.core.first.call(null,seq38134__$1);
var seq38134__$2 = cljs.core.next.call(null,seq38134__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38135,G__38136,seq38134__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__4776__auto___38144 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38145 = arguments.length;
var i__4731__auto___38146 = (0);
while(true){
if((i__4731__auto___38146 < len__4730__auto___38145)){
args__4736__auto__.push((arguments[i__4731__auto___38146]));

var G__38147 = (i__4731__auto___38146 + (1));
i__4731__auto___38146 = G__38147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.delay.cljs$lang$applyTo = (function (seq38141){
var G__38142 = cljs.core.first.call(null,seq38141);
var seq38141__$1 = cljs.core.next.call(null,seq38141);
var G__38143 = cljs.core.first.call(null,seq38141__$1);
var seq38141__$2 = cljs.core.next.call(null,seq38141__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38142,G__38143,seq38141__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__4776__auto___38158 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38159 = arguments.length;
var i__4731__auto___38160 = (0);
while(true){
if((i__4731__auto___38160 < len__4730__auto___38159)){
args__4736__auto__.push((arguments[i__4731__auto___38160]));

var G__38161 = (i__4731__auto___38160 + (1));
i__4731__auto___38160 = G__38161;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var orig_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,((function (names,vals){
return (function (p1__38148_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38148_SHARP_),"-orig-val__"].join('');
});})(names,vals))
,cljs.core.name),names);
var temp_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,((function (names,vals,orig_val_syms){
return (function (p1__38149_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38149_SHARP_),"-temp-val__"].join('');
});})(names,vals,orig_val_syms))
,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,orig_val_syms));
var bind_value = ((function (names,vals,orig_val_syms,temp_val_syms,binds,resets){
return (function (p__38154){
var vec__38155 = p__38154;
var k = cljs.core.nth.call(null,vec__38155,(0),null);
var v = cljs.core.nth.call(null,vec__38155,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
});})(names,vals,orig_val_syms,temp_val_syms,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,orig_val_syms,names),cljs.core.interleave.call(null,temp_val_syms,vals))))),null,(1),null)),cljs.core.map.call(null,bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),cljs.core.map.call(null,bind_value,resets)))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq38150){
var G__38151 = cljs.core.first.call(null,seq38150);
var seq38150__$1 = cljs.core.next.call(null,seq38150);
var G__38152 = cljs.core.first.call(null,seq38150__$1);
var seq38150__$2 = cljs.core.next.call(null,seq38150__$1);
var G__38153 = cljs.core.first.call(null,seq38150__$2);
var seq38150__$3 = cljs.core.next.call(null,seq38150__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38151,G__38152,G__38153,seq38150__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__4776__auto___38166 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38167 = arguments.length;
var i__4731__auto___38168 = (0);
while(true){
if((i__4731__auto___38168 < len__4730__auto___38167)){
args__4736__auto__.push((arguments[i__4731__auto___38168]));

var G__38169 = (i__4731__auto___38168 + (1));
i__4731__auto___38168 = G__38169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.binding.cljs$lang$applyTo = (function (seq38162){
var G__38163 = cljs.core.first.call(null,seq38162);
var seq38162__$1 = cljs.core.next.call(null,seq38162);
var G__38164 = cljs.core.first.call(null,seq38162__$1);
var seq38162__$2 = cljs.core.next.call(null,seq38162__$1);
var G__38165 = cljs.core.first.call(null,seq38162__$2);
var seq38162__$3 = cljs.core.next.call(null,seq38162__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38163,G__38164,G__38165,seq38162__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__4776__auto___38182 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an Error is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38183 = arguments.length;
var i__4731__auto___38184 = (0);
while(true){
if((i__4731__auto___38184 < len__4730__auto___38183)){
args__4736__auto__.push((arguments[i__4731__auto___38184]));

var G__38185 = (i__4731__auto___38184 + (1));
i__4731__auto___38184 = G__38185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__38176 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__38179 = cljs.core.nth.call(null,vec__38176,(0),null);
var a = cljs.core.nth.call(null,vec__38179,(0),null);
var b = cljs.core.nth.call(null,vec__38179,(1),null);
var c = cljs.core.nth.call(null,vec__38179,(2),null);
var clause = vec__38179;
var more = cljs.core.nth.call(null,vec__38176,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit.call(null,pred__$1,expr__$1,more),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__38170__auto__","p__38170__auto__",116818421,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,expr__$1,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__38170__auto__","p__38170__auto__",116818421,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit.call(null,pred__$1,expr__$1,more),null,(1),null)))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gpred,null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,gexpr,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,emit.call(null,gpred,gexpr,clauses),null,(1),null)))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.condp.cljs$lang$applyTo = (function (seq38171){
var G__38172 = cljs.core.first.call(null,seq38171);
var seq38171__$1 = cljs.core.next.call(null,seq38171);
var G__38173 = cljs.core.first.call(null,seq38171__$1);
var seq38171__$2 = cljs.core.next.call(null,seq38171__$1);
var G__38174 = cljs.core.first.call(null,seq38171__$2);
var seq38171__$3 = cljs.core.next.call(null,seq38171__$2);
var G__38175 = cljs.core.first.call(null,seq38171__$3);
var seq38171__$4 = cljs.core.next.call(null,seq38171__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38172,G__38173,G__38174,G__38175,seq38171__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.analyzer._STAR_cljs_file_STAR_].join(''):null)].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__4120__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__4120__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__4776__auto___38202 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38203 = arguments.length;
var i__4731__auto___38204 = (0);
while(true){
if((i__4731__auto___38204 < len__4730__auto___38203)){
args__4736__auto__.push((arguments[i__4731__auto___38204]));

var G__38205 = (i__4731__auto___38204 + (1));
i__4731__auto___38204 = G__38205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null))))),null,(1),null))))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__38194){
var vec__38195 = p__38194;
var test = cljs.core.nth.call(null,vec__38195,(0),null);
var expr = cljs.core.nth.call(null,vec__38195,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__38195,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test__$1,null,(1),null)),(2),null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__38195,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test,null,(1),null)),(2),null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__38186_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__38186_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__38187_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__38187_SHARP_)){
return cljs.core.vec.call(null,p1__38187_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38187_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__38188_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38188_SHARP_).substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__38189_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__38189_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__38189_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__38189_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,esym,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null),null,(1),null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__38198){
var vec__38199 = p__38198;
var m = cljs.core.nth.call(null,vec__38199,(0),null);
var c = cljs.core.nth.call(null,vec__38199,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});})(esym,default$,env,pairs,tests))
,pairs),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))),null,(1),null)))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.case$.cljs$lang$applyTo = (function (seq38190){
var G__38191 = cljs.core.first.call(null,seq38190);
var seq38190__$1 = cljs.core.next.call(null,seq38190);
var G__38192 = cljs.core.first.call(null,seq38190__$1);
var seq38190__$2 = cljs.core.next.call(null,seq38190__$1);
var G__38193 = cljs.core.first.call(null,seq38190__$2);
var seq38190__$3 = cljs.core.next.call(null,seq38190__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38191,G__38192,G__38193,seq38190__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__4776__auto___38206 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__4776__auto___38209 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__38208 = arguments.length;
switch (G__38208) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,["Assert failed: ",cljs.core.pr_str.call(null,x)].join(''),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Assert failed: ",null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.call(null,x),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__4776__auto___38247 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__38216){
var vec__38217 = p__38216;
var k = cljs.core.nth.call(null,vec__38217,(0),null);
var v = cljs.core.nth.call(null,vec__38217,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__38248__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__38248 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__38249__i = 0, G__38249__a = new Array(arguments.length -  0);
while (G__38249__i < G__38249__a.length) {G__38249__a[G__38249__i] = arguments[G__38249__i + 0]; ++G__38249__i;}
  msg = new cljs.core.IndexedSeq(G__38249__a,0,null);
} 
return G__38248__delegate.call(this,msg);};
G__38248.cljs$lang$maxFixedArity = 0;
G__38248.cljs$lang$applyTo = (function (arglist__38250){
var msg = cljs.core.seq(arglist__38250);
return G__38248__delegate(msg);
});
G__38248.cljs$core$IFn$_invoke$arity$variadic = G__38248__delegate;
return G__38248;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__38220){
var vec__38221 = p__38220;
var seq__38222 = cljs.core.seq.call(null,vec__38221);
var first__38223 = cljs.core.first.call(null,seq__38222);
var seq__38222__$1 = cljs.core.next.call(null,seq__38222);
var vec__38224 = first__38223;
var seq__38225 = cljs.core.seq.call(null,vec__38224);
var first__38226 = cljs.core.first.call(null,seq__38225);
var seq__38225__$1 = cljs.core.next.call(null,seq__38225);
var bind = first__38226;
var first__38226__$1 = cljs.core.first.call(null,seq__38225__$1);
var seq__38225__$2 = cljs.core.next.call(null,seq__38225__$1);
var expr = first__38226__$1;
var mod_pairs = seq__38225__$2;
var vec__38227 = seq__38222__$1;
var vec__38230 = cljs.core.nth.call(null,vec__38227,(0),null);
var _ = cljs.core.nth.call(null,vec__38230,(0),null);
var next_expr = cljs.core.nth.call(null,vec__38230,(1),null);
var next_groups = vec__38227;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__38221,seq__38222,first__38223,seq__38222__$1,vec__38224,seq__38225,first__38226,seq__38225__$1,bind,first__38226__$1,seq__38225__$2,expr,mod_pairs,vec__38227,vec__38230,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__38233){
var vec__38234 = p__38233;
var seq__38235 = cljs.core.seq.call(null,vec__38234);
var first__38236 = cljs.core.first.call(null,seq__38235);
var seq__38235__$1 = cljs.core.next.call(null,seq__38235);
var vec__38237 = first__38236;
var k = cljs.core.nth.call(null,vec__38237,(0),null);
var v = cljs.core.nth.call(null,vec__38237,(1),null);
var pair = vec__38237;
var etc = seq__38235__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__38211__auto__","iterys__38211__auto__",-326122109,null),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind.call(null,next_groups),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__38212__auto__","fs__38212__auto__",-383753483,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__38211__auto__","iterys__38211__auto__",-326122109,null),null,(1),null)),(new cljs.core.List(null,next_expr,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__38212__auto__","fs__38212__auto__",-383753483,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__38212__auto__","fs__38212__auto__",-383753483,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null)))));

}
}
}
}
}
});})(giter,gxs,vec__38221,seq__38222,first__38223,seq__38222__$1,vec__38224,seq__38225,first__38226,seq__38225__$1,bind,first__38226__$1,seq__38225__$2,expr,mod_pairs,vec__38227,vec__38230,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_mod.call(null,mod_pairs),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__38221,seq__38222,first__38223,seq__38222__$1,vec__38224,seq__38225,first__38226,seq__38225__$1,bind,first__38226__$1,seq__38225__$2,expr,mod_pairs,vec__38227,vec__38230,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__38240){
var vec__38241 = p__38240;
var seq__38242 = cljs.core.seq.call(null,vec__38241);
var first__38243 = cljs.core.first.call(null,seq__38242);
var seq__38242__$1 = cljs.core.next.call(null,seq__38242);
var vec__38244 = first__38243;
var k = cljs.core.nth.call(null,vec__38244,(0),null);
var v = cljs.core.nth.call(null,vec__38244,(1),null);
var pair = vec__38244;
var etc = seq__38242__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)))));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null)))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__38221,seq__38222,first__38223,seq__38222__$1,vec__38224,seq__38225,first__38226,seq__38225__$1,bind,first__38226__$1,seq__38225__$2,expr,mod_pairs,vec__38227,vec__38230,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__38213__auto__","c__38213__auto__",-1218612809,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/webcv/webcv/resources/public/js/compiled/out/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,2468,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,2468,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,82,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null),null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__38214__auto__","size__38214__auto__",-1667770007,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__38213__auto__","c__38213__auto__",-1218612809,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__38214__auto__","size__38214__auto__",-1667770007,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__38214__auto__","size__38214__auto__",-1667770007,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__38213__auto__","c__38213__auto__",-1218612809,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_cmod.call(null,mod_pairs),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,do_mod.call(null,mod_pairs),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iter__38215__auto__","iter__38215__auto__",1408200608,null),null,(1),null)),(new cljs.core.List(null,emit_bind.call(null,to_groups.call(null,seq_exprs)),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"iter__38215__auto__","iter__38215__auto__",1408200608,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second.call(null,seq_exprs),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__4776__auto___38256 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38257 = arguments.length;
var i__4731__auto___38258 = (0);
while(true){
if((i__4731__auto___38258 < len__4730__auto___38257)){
args__4736__auto__.push((arguments[i__4731__auto___38258]));

var G__38259 = (i__4731__auto___38258 + (1));
i__4731__auto___38258 = G__38259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var err = (function() { 
var G__38260__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__38260 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__38261__i = 0, G__38261__a = new Array(arguments.length -  0);
while (G__38261__i < G__38261__a.length) {G__38261__a[G__38261__i] = arguments[G__38261__i + 0]; ++G__38261__i;}
  msg = new cljs.core.IndexedSeq(G__38261__a,0,null);
} 
return G__38260__delegate.call(this,msg);};
G__38260.cljs$lang$maxFixedArity = 0;
G__38260.cljs$lang$applyTo = (function (arglist__38262){
var msg = cljs.core.seq(arglist__38262);
return G__38260__delegate(msg);
});
G__38260.cljs$core$IFn$_invoke$arity$variadic = G__38260__delegate;
return G__38260;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,(new cljs.core.List(null,null,null,(1),null)))))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)))),null,(1),null)),(new cljs.core.List(null,recform__$1,null,(1),null)))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null)))));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,subform_chunk,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__38251__auto__","c__38251__auto__",-404705703,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__38251__auto__","c__38251__auto__",-404705703,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__38251__auto__","c__38251__auto__",-404705703,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq38252){
var G__38253 = cljs.core.first.call(null,seq38252);
var seq38252__$1 = cljs.core.next.call(null,seq38252);
var G__38254 = cljs.core.first.call(null,seq38252__$1);
var seq38252__$2 = cljs.core.next.call(null,seq38252__$1);
var G__38255 = cljs.core.first.call(null,seq38252__$2);
var seq38252__$3 = cljs.core.next.call(null,seq38252__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38253,G__38254,G__38255,seq38252__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__4776__auto___38266 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38267 = arguments.length;
var i__4731__auto___38268 = (0);
while(true){
if((i__4731__auto___38268 < len__4730__auto___38267)){
args__4736__auto__.push((arguments[i__4731__auto___38268]));

var G__38269 = (i__4731__auto___38268 + (1));
i__4731__auto___38268 = G__38269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.array.cljs$lang$applyTo = (function (seq38263){
var G__38264 = cljs.core.first.call(null,seq38263);
var seq38263__$1 = cljs.core.next.call(null,seq38263);
var G__38265 = cljs.core.first.call(null,seq38263__$1);
var seq38263__$2 = cljs.core.next.call(null,seq38263__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38264,G__38265,seq38263__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__4776__auto___38280 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__38279 = arguments.length;
switch (G__38279) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38282 = arguments.length;
var i__4731__auto___38283 = (0);
while(true){
if((i__4731__auto___38283 < len__4730__auto___38282)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38283]));

var G__38284 = (i__4731__auto___38283 + (1));
i__4731__auto___38283 = G__38284;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__38270__auto__","dims__38270__auto__",-2077232200,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null),null,(1),null)),more_sizes))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__38271__auto__","dimarray__38271__auto__",472918906,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"i__38272__auto__","i__38272__auto__",2109162467,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__38271__auto__","dimarray__38271__auto__",472918906,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__38271__auto__","dimarray__38271__auto__",472918906,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__38272__auto__","i__38272__auto__",2109162467,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__38270__auto__","dims__38270__auto__",-2077232200,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__38271__auto__","dimarray__38271__auto__",472918906,null),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

/** @this {Function} */
cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq38274){
var G__38275 = cljs.core.first.call(null,seq38274);
var seq38274__$1 = cljs.core.next.call(null,seq38274);
var G__38276 = cljs.core.first.call(null,seq38274__$1);
var seq38274__$2 = cljs.core.next.call(null,seq38274__$1);
var G__38277 = cljs.core.first.call(null,seq38274__$2);
var seq38274__$3 = cljs.core.next.call(null,seq38274__$2);
var G__38278 = cljs.core.first.call(null,seq38274__$3);
var seq38274__$4 = cljs.core.next.call(null,seq38274__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38275,G__38276,G__38277,G__38278,seq38274__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__4776__auto___38291 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__38290 = arguments.length;
switch (G__38290) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38293 = arguments.length;
var i__4731__auto___38294 = (0);
while(true){
if((i__4731__auto___38294 < len__4730__auto___38293)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38294]));

var G__38295 = (i__4731__auto___38294 + (1));
i__4731__auto___38294 = G__38295;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
var cnt = (cljs.core.count.call(null,xs) + (1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

/** @this {Function} */
cljs.core$macros.list.cljs$lang$applyTo = (function (seq38286){
var G__38287 = cljs.core.first.call(null,seq38286);
var seq38286__$1 = cljs.core.next.call(null,seq38286);
var G__38288 = cljs.core.first.call(null,seq38286__$1);
var seq38286__$2 = cljs.core.next.call(null,seq38286__$1);
var G__38289 = cljs.core.first.call(null,seq38286__$2);
var seq38286__$3 = cljs.core.next.call(null,seq38286__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38287,G__38288,G__38289,seq38286__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__4776__auto___38301 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__38300 = arguments.length;
switch (G__38300) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38303 = arguments.length;
var i__4731__auto___38304 = (0);
while(true){
if((i__4731__auto___38304 < len__4730__auto___38303)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38304]));

var G__38305 = (i__4731__auto___38304 + (1));
i__4731__auto___38304 = G__38305;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

/** @this {Function} */
cljs.core$macros.vector.cljs$lang$applyTo = (function (seq38297){
var G__38298 = cljs.core.first.call(null,seq38297);
var seq38297__$1 = cljs.core.next.call(null,seq38297);
var G__38299 = cljs.core.first.call(null,seq38297__$1);
var seq38297__$2 = cljs.core.next.call(null,seq38297__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38298,G__38299,seq38297__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__4776__auto___38317 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__38312 = arguments.length;
switch (G__38312) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38319 = arguments.length;
var i__4731__auto___38320 = (0);
while(true){
if((i__4731__auto___38320 < len__4730__auto___38319)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38320]));

var G__38321 = (i__4731__auto___38320 + (1));
i__4731__auto___38320 = G__38321;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if(((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__38306_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,p1__38306_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__38307_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__38315 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__38316 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__38316;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__38307_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__38315;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(cljs.core.count.call(null,kvs) / (2)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),kvs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),kvs))),null,(1),null)))));
}
});

/** @this {Function} */
cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq38309){
var G__38310 = cljs.core.first.call(null,seq38309);
var seq38309__$1 = cljs.core.next.call(null,seq38309);
var G__38311 = cljs.core.first.call(null,seq38309__$1);
var seq38309__$2 = cljs.core.next.call(null,seq38309__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38310,G__38311,seq38309__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__4776__auto___38327 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__38326 = arguments.length;
switch (G__38326) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38329 = arguments.length;
var i__4731__auto___38330 = (0);
while(true){
if((i__4731__auto___38330 < len__4730__auto___38329)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38330]));

var G__38331 = (i__4731__auto___38330 + (1));
i__4731__auto___38330 = G__38331;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),ks))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),vs))),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

/** @this {Function} */
cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq38323){
var G__38324 = cljs.core.first.call(null,seq38323);
var seq38323__$1 = cljs.core.next.call(null,seq38323);
var G__38325 = cljs.core.first.call(null,seq38323__$1);
var seq38323__$2 = cljs.core.next.call(null,seq38323__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38324,G__38325,seq38323__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__4776__auto___38343 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__38338 = arguments.length;
switch (G__38338) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38345 = arguments.length;
var i__4731__auto___38346 = (0);
while(true){
if((i__4731__auto___38346 < len__4730__auto___38345)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38346]));

var G__38347 = (i__4731__auto___38346 + (1));
i__4731__auto___38346 = G__38347;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if((((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__38332_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,p1__38332_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
}),cljs.core.map.call(null,(function (p1__38333_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__38341 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__38342 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__38342;

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__38333_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__38341;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,xs),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null)),xs))),null,(1),null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

/** @this {Function} */
cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq38335){
var G__38336 = cljs.core.first.call(null,seq38335);
var seq38335__$1 = cljs.core.next.call(null,seq38335);
var G__38337 = cljs.core.first.call(null,seq38335__$1);
var seq38335__$2 = cljs.core.next.call(null,seq38335__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38336,G__38337,seq38335__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["({",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"})"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4776__auto___38363 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38364 = arguments.length;
var i__4731__auto___38365 = (0);
while(true){
if((i__4731__auto___38365 < len__4730__auto___38364)){
args__4736__auto__.push((arguments[i__4731__auto___38365]));

var G__38366 = (i__4731__auto___38365 + (1));
i__4731__auto___38365 = G__38366;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return (((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__38351){
var vec__38352 = p__38351;
var k = cljs.core.nth.call(null,vec__38352,(0),null);
var _ = cljs.core.nth.call(null,vec__38352,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs)),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__38355){
var vec__38356 = p__38355;
var k = cljs.core.nth.call(null,vec__38356,(0),null);
var v = cljs.core.nth.call(null,vec__38356,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__38359){
var vec__38360 = p__38359;
var k = cljs.core.nth.call(null,vec__38360,(0),null);
var v = cljs.core.nth.call(null,vec__38360,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.get.call(null,kvs,k),null,(1),null)))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(new cljs.core.List(null,obj,null,(1),null)))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq38348){
var G__38349 = cljs.core.first.call(null,seq38348);
var seq38348__$1 = cljs.core.next.call(null,seq38348);
var G__38350 = cljs.core.first.call(null,seq38348__$1);
var seq38348__$2 = cljs.core.next.call(null,seq38348__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38349,G__38350,seq38348__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__4776__auto___38367 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}.length",(new cljs.core.List(null,a,null,(1),null)),(2),null)),(3),null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__4776__auto___38370 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__38368__auto__","a__38368__auto__",306633815,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__38369__auto__","l__38369__auto__",-1794189424,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__38368__auto__","a__38368__auto__",306633815,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__38368__auto__","a__38368__auto__",306633815,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__38369__auto__","l__38369__auto__",-1794189424,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__4776__auto___38373 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__38371__auto__","a__38371__auto__",581089004,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__38372__auto__","l__38372__auto__",2054210339,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__38371__auto__","a__38371__auto__",581089004,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,init,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"l__38372__auto__","l__38372__auto__",2054210339,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__4776__auto___38379 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38380 = arguments.length;
var i__4731__auto___38381 = (0);
while(true){
if((i__4731__auto___38381 < len__4730__auto___38380)){
args__4736__auto__.push((arguments[i__4731__auto___38381]));

var G__38382 = (i__4731__auto___38381 + (1));
i__4731__auto___38381 = G__38382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"n__38374__auto__","n__38374__auto__",588627273,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"n__38374__auto__","n__38374__auto__",588627273,null),null,(1),null))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq38375){
var G__38376 = cljs.core.first.call(null,seq38375);
var seq38375__$1 = cljs.core.next.call(null,seq38375);
var G__38377 = cljs.core.first.call(null,seq38375__$1);
var seq38375__$2 = cljs.core.next.call(null,seq38375__$1);
var G__38378 = cljs.core.first.call(null,seq38375__$2);
var seq38375__$3 = cljs.core.next.call(null,seq38375__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38376,G__38377,G__38378,seq38375__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38386 = arguments.length;
var i__4731__auto___38387 = (0);
while(true){
if((i__4731__auto___38387 < len__4730__auto___38386)){
args__4736__auto__.push((arguments[i__4731__auto___38387]));

var G__38388 = (i__4731__auto___38387 + (1));
i__4731__auto___38387 = G__38388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__38383_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38383_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq38384){
var G__38385 = cljs.core.first.call(null,seq38384);
var seq38384__$1 = cljs.core.next.call(null,seq38384);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38385,seq38384__$1);
});

var ret__4776__auto___38398 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38399 = arguments.length;
var i__4731__auto___38400 = (0);
while(true){
if((i__4731__auto___38400 < len__4730__auto___38399)){
args__4736__auto__.push((arguments[i__4731__auto___38400]));

var G__38401 = (i__4731__auto___38400 + (1));
i__4731__auto___38400 = G__38401;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,mm_name,m__$2),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__38389__auto__","method-table__38389__auto__",329808649,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__38390__auto__","prefer-table__38390__auto__",-1542021132,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__38391__auto__","method-cache__38391__auto__",-632019767,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__38392__auto__","cached-hierarchy__38392__auto__",1567623517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__38393__auto__","hierarchy__38393__auto__",-1494640009,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,options__$4,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.get_global_hierarchy",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,mm_ns,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,mm_name),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__38393__auto__","hierarchy__38393__auto__",-1494640009,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__38389__auto__","method-table__38389__auto__",329808649,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__38390__auto__","prefer-table__38390__auto__",-1542021132,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__38391__auto__","method-cache__38391__auto__",-632019767,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__38392__auto__","cached-hierarchy__38392__auto__",1567623517,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq38394){
var G__38395 = cljs.core.first.call(null,seq38394);
var seq38394__$1 = cljs.core.next.call(null,seq38394);
var G__38396 = cljs.core.first.call(null,seq38394__$1);
var seq38394__$2 = cljs.core.next.call(null,seq38394__$1);
var G__38397 = cljs.core.first.call(null,seq38394__$2);
var seq38394__$3 = cljs.core.next.call(null,seq38394__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38395,G__38396,G__38397,seq38394__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__4776__auto___38407 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38408 = arguments.length;
var i__4731__auto___38409 = (0);
while(true){
if((i__4731__auto___38409 < len__4730__auto___38408)){
args__4736__auto__.push((arguments[i__4731__auto___38409]));

var G__38410 = (i__4731__auto___38409 + (1));
i__4731__auto___38409 = G__38410;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null)),null,(1),null)),(new cljs.core.List(null,dispatch_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),fn_tail))),null,(1),null)))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq38402){
var G__38403 = cljs.core.first.call(null,seq38402);
var seq38402__$1 = cljs.core.next.call(null,seq38402);
var G__38404 = cljs.core.first.call(null,seq38402__$1);
var seq38402__$2 = cljs.core.next.call(null,seq38402__$1);
var G__38405 = cljs.core.first.call(null,seq38402__$2);
var seq38402__$3 = cljs.core.next.call(null,seq38402__$2);
var G__38406 = cljs.core.first.call(null,seq38402__$3);
var seq38402__$4 = cljs.core.next.call(null,seq38402__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38403,G__38404,G__38405,G__38406,seq38402__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__4776__auto___38413 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__38411__auto__","start__38411__auto__",-440094792,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__38412__auto__","ret__38412__auto__",-61871507,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__38411__auto__","start__38411__auto__",-440094792,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(6),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__38412__auto__","ret__38412__auto__",-61871507,null),null,(1),null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__4776__auto___38428 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38429 = arguments.length;
var i__4731__auto___38430 = (0);
while(true){
if((i__4731__auto___38430 < len__4730__auto___38429)){
args__4736__auto__.push((arguments[i__4731__auto___38430]));

var G__38431 = (i__4731__auto___38430 + (1));
i__4731__auto___38430 = G__38431;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__38425){
var map__38426 = p__38425;
var map__38426__$1 = (((((!((map__38426 == null))))?(((((map__38426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38426):map__38426);
var print_fn = cljs.core.get.call(null,map__38426__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__38414__auto__","start__38414__auto__",-1557558542,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__38415__auto__","ret__38415__auto__",1891504415,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___38416__auto__","___38416__auto__",-1981709727,null),null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__38417__auto__","end__38417__auto__",1935379984,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__38418__auto__","elapsed__38418__auto__",1856947363,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__38417__auto__","end__38417__auto__",1935379984,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__38414__auto__","start__38414__auto__",-1557558542,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,print_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,bs_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,expr_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)),(new cljs.core.List(null," runs, ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__38418__auto__","elapsed__38418__auto__",1856947363,null),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq38419){
var G__38420 = cljs.core.first.call(null,seq38419);
var seq38419__$1 = cljs.core.next.call(null,seq38419);
var G__38421 = cljs.core.first.call(null,seq38419__$1);
var seq38419__$2 = cljs.core.next.call(null,seq38419__$1);
var G__38422 = cljs.core.first.call(null,seq38419__$2);
var seq38419__$3 = cljs.core.next.call(null,seq38419__$2);
var G__38423 = cljs.core.first.call(null,seq38419__$3);
var seq38419__$4 = cljs.core.next.call(null,seq38419__$3);
var G__38424 = cljs.core.first.call(null,seq38419__$4);
var seq38419__$5 = cljs.core.next.call(null,seq38419__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38420,G__38421,G__38422,G__38423,G__38424,seq38419__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__38433 = arguments.length;
switch (G__38433) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core$macros.cs.call(null,(n - (1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),cljs.core.take.call(null,n,cljs.core$macros.cs)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.call(null,(n + (1))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"Only up to 20 arguments supported on functions",null,(1),null))))),null,(1),null)))));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__4776__auto___38435 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.call(null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",proto_name].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",proto_name].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__38436_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38436_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new_arg_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,proto_prop,null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,proto_inv,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),all_args))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),all_args))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__38437__auto__","arr__38437__auto__",-394768570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),all_args))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"s__38438__auto__","s__38438__auto__",416858011,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__38438__auto__","s__38438__auto__",416858011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__38437__auto__","arr__38437__auto__",-394768570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__38438__auto__","s__38438__auto__",416858011,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__38438__auto__","s__38438__auto__",416858011,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__38437__auto__","arr__38437__auto__",-394768570,null),null,(1),null))))),null,(1),null))))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym)),null,(1),null))))),null,(1),null)))));
});
var ret__4776__auto___38439 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__4776__auto___38445 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38446 = arguments.length;
var i__4731__auto___38447 = (0);
while(true){
if((i__4731__auto___38447 < len__4730__auto___38446)){
args__4736__auto__.push((arguments[i__4731__auto___38447]));

var G__38448 = (i__4731__auto___38447 + (1));
i__4731__auto___38447 = G__38448;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__38440__auto__","sb__38440__auto__",1973063856,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.string","StringBuffer.","goog.string/StringBuffer.",-6870594,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__38441__auto__","x__38441__auto__",1676677183,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".append",".append",1595439852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__38440__auto__","sb__38440__auto__",1973063856,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__38441__auto__","x__38441__auto__",1676677183,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__38440__auto__","sb__38440__auto__",1973063856,null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq38442){
var G__38443 = cljs.core.first.call(null,seq38442);
var seq38442__$1 = cljs.core.next.call(null,seq38442);
var G__38444 = cljs.core.first.call(null,seq38442__$1);
var seq38442__$2 = cljs.core.next.call(null,seq38442__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38443,G__38444,seq38442__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__4776__auto___38453 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38454 = arguments.length;
var i__4731__auto___38455 = (0);
while(true){
if((i__4731__auto___38455 < len__4730__auto___38454)){
args__4736__auto__.push((arguments[i__4731__auto___38455]));

var G__38456 = (i__4731__auto___38455 + (1));
i__4731__auto___38455 = G__38456;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.map.call(null,(function (p1__38449_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null),(new cljs.core.List(null,p1__38449_SHARP_,null,(1),null)),(2),null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq38450){
var G__38451 = cljs.core.first.call(null,seq38450);
var seq38450__$1 = cljs.core.next.call(null,seq38450);
var G__38452 = cljs.core.first.call(null,seq38450__$1);
var seq38450__$2 = cljs.core.next.call(null,seq38450__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38451,G__38452,seq38450__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__4776__auto___38457 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"''+~{}",(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__4776__auto___38459 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,ty,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38458__auto__","this__38458__auto__",-1975308624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__38458__auto__","this__38458__auto__",-1975308624,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__4776__auto___38468 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__38460){
var vec__38461 = p__38460;
var sym = cljs.core.nth.call(null,vec__38461,(0),null);
var _ = cljs.core.nth.call(null,vec__38461,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym)),null,(1),null))))),null,(1),null))))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__38464){
var vec__38465 = p__38464;
var _ = cljs.core.nth.call(null,vec__38465,(0),null);
var info = cljs.core.nth.call(null,vec__38465,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))))),null,(1),null)))));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__4776__auto___38473 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__38469){
var vec__38470 = p__38469;
var ctor = cljs.core.nth.call(null,vec__38470,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__38470,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,ctor),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,qualified_ctor),null,(1),null))))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null))))))),null,(1),null)))));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__4776__auto___38478 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__38474){
var vec__38475 = p__38474;
var sym = cljs.core.nth.call(null,vec__38475,(0),null);
var _ = cljs.core.nth.call(null,vec__38475,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym)),null,(1),null))))),null,(1),null))))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))),null,(1),null)))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__4776__auto___38479 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if(((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.call(null,ns),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),null,(1),null)))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__4776__auto___38485 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38486 = arguments.length;
var i__4731__auto___38487 = (0);
while(true){
if((i__4731__auto___38487 < len__4730__auto___38486)){
args__4736__auto__.push((arguments[i__4731__auto___38487]));

var G__38488 = (i__4731__auto___38487 + (1));
i__4731__auto___38487 = G__38488;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null))))),null,(1),null)),args))),null,(1),null)))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq38480){
var G__38481 = cljs.core.first.call(null,seq38480);
var seq38480__$1 = cljs.core.next.call(null,seq38480);
var G__38482 = cljs.core.first.call(null,seq38480__$1);
var seq38480__$2 = cljs.core.next.call(null,seq38480__$1);
var G__38483 = cljs.core.first.call(null,seq38480__$2);
var seq38480__$3 = cljs.core.next.call(null,seq38480__$2);
var G__38484 = cljs.core.first.call(null,seq38480__$3);
var seq38480__$4 = cljs.core.next.call(null,seq38480__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38481,G__38482,G__38483,G__38484,seq38480__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__4776__auto___38493 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38494 = arguments.length;
var i__4731__auto___38495 = (0);
while(true){
if((i__4731__auto___38495 < len__4730__auto___38494)){
args__4736__auto__.push((arguments[i__4731__auto___38495]));

var G__38496 = (i__4731__auto___38495 + (1));
i__4731__auto___38495 = G__38496;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.locking.cljs$lang$applyTo = (function (seq38489){
var G__38490 = cljs.core.first.call(null,seq38489);
var seq38489__$1 = cljs.core.next.call(null,seq38489);
var G__38491 = cljs.core.first.call(null,seq38489__$1);
var seq38489__$2 = cljs.core.next.call(null,seq38489__$1);
var G__38492 = cljs.core.first.call(null,seq38489__$2);
var seq38489__$3 = cljs.core.next.call(null,seq38489__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38490,G__38491,G__38492,seq38489__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__4776__auto___38497 = cljs.core$macros.ns_special_form = (function cljs$core$macros$ns_special_form(_AMPERSAND_form,_AMPERSAND_env){
return null;
});
cljs.core$macros.ns_special_form.cljs$lang$macro = true;

var ret__4776__auto___38501 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38502 = arguments.length;
var i__4731__auto___38503 = (0);
while(true){
if((i__4731__auto___38503 < len__4730__auto___38502)){
args__4736__auto__.push((arguments[i__4731__auto___38503]));

var G__38504 = (i__4731__auto___38503 + (1));
i__4731__auto___38503 = G__38504;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args),null,(1),null)))));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.require.cljs$lang$applyTo = (function (seq38498){
var G__38499 = cljs.core.first.call(null,seq38498);
var seq38498__$1 = cljs.core.next.call(null,seq38498);
var G__38500 = cljs.core.first.call(null,seq38498__$1);
var seq38498__$2 = cljs.core.next.call(null,seq38498__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38499,G__38500,seq38498__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__4776__auto___38508 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38509 = arguments.length;
var i__4731__auto___38510 = (0);
while(true){
if((i__4731__auto___38510 < len__4730__auto___38509)){
args__4736__auto__.push((arguments[i__4731__auto___38510]));

var G__38511 = (i__4731__auto___38510 + (1));
i__4731__auto___38510 = G__38511;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args),null,(1),null)))));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq38505){
var G__38506 = cljs.core.first.call(null,seq38505);
var seq38505__$1 = cljs.core.next.call(null,seq38505);
var G__38507 = cljs.core.first.call(null,seq38505__$1);
var seq38505__$2 = cljs.core.next.call(null,seq38505__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38506,G__38507,seq38505__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__4776__auto___38515 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38516 = arguments.length;
var i__4731__auto___38517 = (0);
while(true){
if((i__4731__auto___38517 < len__4730__auto___38516)){
args__4736__auto__.push((arguments[i__4731__auto___38517]));

var G__38518 = (i__4731__auto___38517 + (1));
i__4731__auto___38517 = G__38518;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args),null,(1),null)))));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.use.cljs$lang$applyTo = (function (seq38512){
var G__38513 = cljs.core.first.call(null,seq38512);
var seq38512__$1 = cljs.core.next.call(null,seq38512);
var G__38514 = cljs.core.first.call(null,seq38512__$1);
var seq38512__$2 = cljs.core.next.call(null,seq38512__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38513,G__38514,seq38512__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__4776__auto___38522 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38523 = arguments.length;
var i__4731__auto___38524 = (0);
while(true){
if((i__4731__auto___38524 < len__4730__auto___38523)){
args__4736__auto__.push((arguments[i__4731__auto___38524]));

var G__38525 = (i__4731__auto___38524 + (1));
i__4731__auto___38524 = G__38525;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args),null,(1),null)))));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq38519){
var G__38520 = cljs.core.first.call(null,seq38519);
var seq38519__$1 = cljs.core.next.call(null,seq38519);
var G__38521 = cljs.core.first.call(null,seq38519__$1);
var seq38519__$2 = cljs.core.next.call(null,seq38519__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38520,G__38521,seq38519__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__4776__auto___38529 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38530 = arguments.length;
var i__4731__auto___38531 = (0);
while(true){
if((i__4731__auto___38531 < len__4730__auto___38530)){
args__4736__auto__.push((arguments[i__4731__auto___38531]));

var G__38532 = (i__4731__auto___38531 + (1));
i__4731__auto___38531 = G__38532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists),null,(1),null)))));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.import$.cljs$lang$applyTo = (function (seq38526){
var G__38527 = cljs.core.first.call(null,seq38526);
var seq38526__$1 = cljs.core.next.call(null,seq38526);
var G__38528 = cljs.core.first.call(null,seq38526__$1);
var seq38526__$2 = cljs.core.next.call(null,seq38526__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38527,G__38528,seq38526__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__4776__auto___38536 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38537 = arguments.length;
var i__4731__auto___38538 = (0);
while(true){
if((i__4731__auto___38538 < len__4730__auto___38537)){
args__4736__auto__.push((arguments[i__4731__auto___38538]));

var G__38539 = (i__4731__auto___38538 + (1));
i__4731__auto___38538 = G__38539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args),null,(1),null)))));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq38533){
var G__38534 = cljs.core.first.call(null,seq38533);
var seq38533__$1 = cljs.core.next.call(null,seq38533);
var G__38535 = cljs.core.first.call(null,seq38533__$1);
var seq38533__$2 = cljs.core.next.call(null,seq38533__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38534,G__38535,seq38533__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__4776__auto___38540 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","nodeGlobalRequire","goog/nodeGlobalRequire",163905703,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__4776__auto___38541 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form),null,(1),null)))));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__4776__auto___38542 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if((!((form__$1 === form_SINGLEQUOTE_)))){
var G__38543 = form_SINGLEQUOTE_;
var G__38544 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__38543;
form_SINGLEQUOTE_ = G__38544;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form_SINGLEQUOTE_,null,(1),null)))));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__4120__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__4120__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__4120__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__38548 = arguments.length;
switch (G__38548) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__38549,solo){
var vec__38550 = p__38549;
var seq__38551 = cljs.core.seq.call(null,vec__38550);
var first__38552 = cljs.core.first.call(null,seq__38551);
var seq__38551__$1 = cljs.core.next.call(null,seq__38551);
var arglist = first__38552;
var body = seq__38551__$1;
var method = vec__38550;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,param,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/webcv/webcv/resources/public/js/compiled/out/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3088,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,49,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3088,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,54,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/webcv/webcv/resources/public/js/compiled/out/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3089,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,51,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3089,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))));
});})(sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__38545__auto__","self__38545__auto__",-1750242831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__38545__auto__","self__38545__auto__",-1750242831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,get_delegate.call(null),null,(1),null)),params,(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__38546__auto__","self__38546__auto__",870879295,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__38546__auto__","self__38546__auto__",870879295,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,get_delegate.call(null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
});})(sig,restarg,vec__38550,seq__38551,first__38552,seq__38551__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,get_delegate_prop.call(null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,sig),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(cljs.core.count.call(null,sig) - (1)),null,(1),null))))),null,(1),null)))))):null),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-inline-comment","cljs.core$macros/js-inline-comment",-1640024593,null),null,(1),null)),(new cljs.core.List(null," @this {Function} ",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,sym,cljs.core.dissoc,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,apply_to.call(null),null,(1),null))))),null,(1),null)))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__4776__auto___38556 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"len__38554__auto__","len__38554__auto__",19741629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"i__38555__auto__","i__38555__auto__",-1390755290,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__38555__auto__","i__38555__auto__",-1390755290,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"len__38554__auto__","len__38554__auto__",19741629,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,dest,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__38555__auto__","i__38555__auto__",-1390755290,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__38555__auto__","i__38555__auto__",-1390755290,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.elide_implicit_macro_args = (function cljs$core$macros$elide_implicit_macro_args(arglists){
return cljs.core.map.call(null,(function (arglist){
if(cljs.core.vector_QMARK_.call(null,arglist)){
return cljs.core.subvec.call(null,arglist,(2));
} else {
return cljs.core.drop.call(null,(2),arglist);
}
}),arglists);
});
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__38559,emit_var_QMARK_){
var vec__38560 = p__38559;
var vec__38563 = cljs.core.nth.call(null,vec__38560,(0),null);
var seq__38564 = cljs.core.seq.call(null,vec__38563);
var first__38565 = cljs.core.first.call(null,seq__38564);
var seq__38564__$1 = cljs.core.next.call(null,seq__38564);
var arglist = first__38565;
var body = seq__38564__$1;
var method = vec__38563;
var fdecl = vec__38560;
var dest_args = ((function (vec__38560,vec__38563,seq__38564,first__38565,seq__38564__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__38560,vec__38563,seq__38564,first__38565,seq__38564__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
});})(vec__38560,vec__38563,seq__38564,first__38565,seq__38564__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__38560,vec__38563,seq__38564,first__38565,seq__38564__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var mfa = (function (){var G__38566 = c_1;
if(cljs.core.truth_(macro_QMARK_)){
return (G__38566 - (2));
} else {
return G__38566;
}
})();
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__38567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null);
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__38567);
} else {
return G__38567;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__38568 = (new cljs.core.List(null,arglist,null,(1),null));
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__38568);
} else {
return G__38568;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
var name__$1 = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args__38557__auto__","args__38557__auto__",501848189,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__38557__auto__","args__38557__auto__",501848189,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__38558__auto__","argseq__38558__auto__",946715707,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__38557__auto__","args__38557__auto__",501848189,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/webcv/webcv/resources/public/js/compiled/out/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3151,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3151,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,75,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__38557__auto__","args__38557__auto__",501848189,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args.call(null,c_1),(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__38558__auto__","argseq__38558__auto__",946715707,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.variadic_fn_STAR_.call(null,name__$1,method),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null)))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('')),null,(1),null)),dest_args.call(null,c)))),null,(1),null)))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(name__$1,p__38578){
var vec__38579 = p__38578;
var seq__38580 = cljs.core.seq.call(null,vec__38579);
var first__38581 = cljs.core.first.call(null,seq__38580);
var seq__38580__$1 = cljs.core.next.call(null,seq__38580);
var sig = first__38581;
var body = seq__38580__$1;
var method = vec__38579;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name__$1,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,name__$1,cljs.core.update,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),cljs.core.count.call(null,sig)], null)),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,method,null,(1),null))))),null,(1),null)))));
}
});
var rname = cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__38569_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),p1__38569_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var mfa = (function (){var G__38582 = maxfa;
if(cljs.core.truth_(macro_QMARK_)){
return (G__38582 - (2));
} else {
return G__38582;
}
})();
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__38583 = sigs;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__38583);
} else {
return G__38583;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__38584 = arglists;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args.call(null,G__38584);
} else {
return G__38584;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
var name__$1 = cljs.core.with_meta.call(null,name,meta__$1);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1){
return (function (p1__38570_SHARP_){
return fixed_arity.call(null,rname,p1__38570_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1))
,sigs),(new cljs.core.List(null,((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__38571__auto__","args-arr__38571__auto__",445631087,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__38571__auto__","args-arr__38571__auto__",445631087,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__38572__auto__","argseq__38572__auto__",-1567896005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/webcv/webcv/resources/public/js/compiled/out/cljs/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3218,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,59,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3218,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,79,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__38571__auto__","args-arr__38571__auto__",445631087,null),null,(1),null)),(new cljs.core.List(null,maxfa,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args.call(null,maxfa),(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__38572__auto__","argseq__38572__auto__",-1567896005,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1){
return (function (p1__38573_SHARP_){
return fn_method.call(null,name__$1,p1__38573_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,macro_QMARK_,mfa,meta__$1,args_sym,param_counts,name__$1))
,fdecl),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,maxfa,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null)))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core$macros.sigs.call(null,fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4)){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta.call(null,name,m__$4),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4),null,(1),null)),(2),null)),(3),null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__38585__i = 0, G__38585__a = new Array(arguments.length -  3);
while (G__38585__i < G__38585__a.length) {G__38585__a[G__38585__i] = arguments[G__38585__i + 3]; ++G__38585__i;}
  fdecl = new cljs.core.IndexedSeq(G__38585__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__38586){
var _AMPERSAND_form = cljs.core.first(arglist__38586);
arglist__38586 = cljs.core.next(arglist__38586);
var _AMPERSAND_env = cljs.core.first(arglist__38586);
arglist__38586 = cljs.core.next(arglist__38586);
var name = cljs.core.first(arglist__38586);
var fdecl = cljs.core.rest(arglist__38586);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38592 = arguments.length;
var i__4731__auto___38593 = (0);
while(true){
if((i__4731__auto___38593 < len__4730__auto___38592)){
args__4736__auto__.push((arguments[i__4731__auto___38593]));

var G__38594 = (i__4731__auto___38593 + (1));
i__4731__auto___38593 = G__38594;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (new cljs.core.List(null,cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true),null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__38595 = cljs.core.cons.call(null,f,p);
var G__38596 = cljs.core.next.call(null,args__$1);
p = G__38595;
args__$1 = G__38596;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__38597 = cljs.core.cons.call(null,f,p);
var G__38598 = cljs.core.next.call(null,args__$1);
p = G__38597;
args__$1 = G__38598;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__38599 = cljs.core.next.call(null,fd);
fd = G__38599;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__38600 = cljs.core.next.call(null,fd);
fd = G__38600;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__38601 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__38602 = cljs.core.next.call(null,ds);
acc = G__38601;
ds = G__38602;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__38603 = cljs.core.next.call(null,p);
var G__38604 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__38603;
d = G__38604;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__38587__auto__","ret__38587__auto__",837954168,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__38587__auto__","ret__38587__auto__",837954168,null),null,(1),null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq38588){
var G__38589 = cljs.core.first.call(null,seq38588);
var seq38588__$1 = cljs.core.next.call(null,seq38588);
var G__38590 = cljs.core.first.call(null,seq38588__$1);
var seq38588__$2 = cljs.core.next.call(null,seq38588__$1);
var G__38591 = cljs.core.first.call(null,seq38588__$2);
var seq38588__$3 = cljs.core.next.call(null,seq38588__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38589,G__38590,G__38591,seq38588__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__4776__auto___38609 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if(((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym))))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__38605 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e38608){var e = e38608;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__38605,(0),null);
var meta = cljs.core.nth.call(null,vec__38605,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,meta,null,(1),null))))),null,(1),null)))));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map?rel=1601406067971
