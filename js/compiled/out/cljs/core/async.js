// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32745 = arguments.length;
switch (G__32745) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32746 = (function (f,blockable,meta32747){
this.f = f;
this.blockable = blockable;
this.meta32747 = meta32747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32748,meta32747__$1){
var self__ = this;
var _32748__$1 = this;
return (new cljs.core.async.t_cljs$core$async32746(self__.f,self__.blockable,meta32747__$1));
});

cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32748){
var self__ = this;
var _32748__$1 = this;
return self__.meta32747;
});

cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32747","meta32747",-907991380,null)], null);
});

cljs.core.async.t_cljs$core$async32746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32746";

cljs.core.async.t_cljs$core$async32746.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32746");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32746.
 */
cljs.core.async.__GT_t_cljs$core$async32746 = (function cljs$core$async$__GT_t_cljs$core$async32746(f__$1,blockable__$1,meta32747){
return (new cljs.core.async.t_cljs$core$async32746(f__$1,blockable__$1,meta32747));
});

}

return (new cljs.core.async.t_cljs$core$async32746(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32752 = arguments.length;
switch (G__32752) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32755 = arguments.length;
switch (G__32755) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32758 = arguments.length;
switch (G__32758) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32760 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32760);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32760,ret){
return (function (){
return fn1.call(null,val_32760);
});})(val_32760,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32762 = arguments.length;
switch (G__32762) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32764 = n;
var x_32765 = (0);
while(true){
if((x_32765 < n__4607__auto___32764)){
(a[x_32765] = x_32765);

var G__32766 = (x_32765 + (1));
x_32765 = G__32766;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32767 = (function (flag,meta32768){
this.flag = flag;
this.meta32768 = meta32768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32769,meta32768__$1){
var self__ = this;
var _32769__$1 = this;
return (new cljs.core.async.t_cljs$core$async32767(self__.flag,meta32768__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32769){
var self__ = this;
var _32769__$1 = this;
return self__.meta32768;
});})(flag))
;

cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32767.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32768","meta32768",-1654414523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32767";

cljs.core.async.t_cljs$core$async32767.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32767");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32767.
 */
cljs.core.async.__GT_t_cljs$core$async32767 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32767(flag__$1,meta32768){
return (new cljs.core.async.t_cljs$core$async32767(flag__$1,meta32768));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32767(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32770 = (function (flag,cb,meta32771){
this.flag = flag;
this.cb = cb;
this.meta32771 = meta32771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32772,meta32771__$1){
var self__ = this;
var _32772__$1 = this;
return (new cljs.core.async.t_cljs$core$async32770(self__.flag,self__.cb,meta32771__$1));
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32772){
var self__ = this;
var _32772__$1 = this;
return self__.meta32771;
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32771","meta32771",439366435,null)], null);
});

cljs.core.async.t_cljs$core$async32770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32770";

cljs.core.async.t_cljs$core$async32770.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32770");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32770.
 */
cljs.core.async.__GT_t_cljs$core$async32770 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32770(flag__$1,cb__$1,meta32771){
return (new cljs.core.async.t_cljs$core$async32770(flag__$1,cb__$1,meta32771));
});

}

return (new cljs.core.async.t_cljs$core$async32770(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32773_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32773_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32774_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32774_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32775 = (i + (1));
i = G__32775;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32781 = arguments.length;
var i__4731__auto___32782 = (0);
while(true){
if((i__4731__auto___32782 < len__4730__auto___32781)){
args__4736__auto__.push((arguments[i__4731__auto___32782]));

var G__32783 = (i__4731__auto___32782 + (1));
i__4731__auto___32782 = G__32783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32778){
var map__32779 = p__32778;
var map__32779__$1 = (((((!((map__32779 == null))))?(((((map__32779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32779):map__32779);
var opts = map__32779__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32776){
var G__32777 = cljs.core.first.call(null,seq32776);
var seq32776__$1 = cljs.core.next.call(null,seq32776);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32777,seq32776__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32785 = arguments.length;
switch (G__32785) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32685__auto___32831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___32831){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___32831){
return (function (state_32809){
var state_val_32810 = (state_32809[(1)]);
if((state_val_32810 === (7))){
var inst_32805 = (state_32809[(2)]);
var state_32809__$1 = state_32809;
var statearr_32811_32832 = state_32809__$1;
(statearr_32811_32832[(2)] = inst_32805);

(statearr_32811_32832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (1))){
var state_32809__$1 = state_32809;
var statearr_32812_32833 = state_32809__$1;
(statearr_32812_32833[(2)] = null);

(statearr_32812_32833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (4))){
var inst_32788 = (state_32809[(7)]);
var inst_32788__$1 = (state_32809[(2)]);
var inst_32789 = (inst_32788__$1 == null);
var state_32809__$1 = (function (){var statearr_32813 = state_32809;
(statearr_32813[(7)] = inst_32788__$1);

return statearr_32813;
})();
if(cljs.core.truth_(inst_32789)){
var statearr_32814_32834 = state_32809__$1;
(statearr_32814_32834[(1)] = (5));

} else {
var statearr_32815_32835 = state_32809__$1;
(statearr_32815_32835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (13))){
var state_32809__$1 = state_32809;
var statearr_32816_32836 = state_32809__$1;
(statearr_32816_32836[(2)] = null);

(statearr_32816_32836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (6))){
var inst_32788 = (state_32809[(7)]);
var state_32809__$1 = state_32809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32809__$1,(11),to,inst_32788);
} else {
if((state_val_32810 === (3))){
var inst_32807 = (state_32809[(2)]);
var state_32809__$1 = state_32809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32809__$1,inst_32807);
} else {
if((state_val_32810 === (12))){
var state_32809__$1 = state_32809;
var statearr_32817_32837 = state_32809__$1;
(statearr_32817_32837[(2)] = null);

(statearr_32817_32837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (2))){
var state_32809__$1 = state_32809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32809__$1,(4),from);
} else {
if((state_val_32810 === (11))){
var inst_32798 = (state_32809[(2)]);
var state_32809__$1 = state_32809;
if(cljs.core.truth_(inst_32798)){
var statearr_32818_32838 = state_32809__$1;
(statearr_32818_32838[(1)] = (12));

} else {
var statearr_32819_32839 = state_32809__$1;
(statearr_32819_32839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (9))){
var state_32809__$1 = state_32809;
var statearr_32820_32840 = state_32809__$1;
(statearr_32820_32840[(2)] = null);

(statearr_32820_32840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (5))){
var state_32809__$1 = state_32809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32821_32841 = state_32809__$1;
(statearr_32821_32841[(1)] = (8));

} else {
var statearr_32822_32842 = state_32809__$1;
(statearr_32822_32842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (14))){
var inst_32803 = (state_32809[(2)]);
var state_32809__$1 = state_32809;
var statearr_32823_32843 = state_32809__$1;
(statearr_32823_32843[(2)] = inst_32803);

(statearr_32823_32843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (10))){
var inst_32795 = (state_32809[(2)]);
var state_32809__$1 = state_32809;
var statearr_32824_32844 = state_32809__$1;
(statearr_32824_32844[(2)] = inst_32795);

(statearr_32824_32844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32810 === (8))){
var inst_32792 = cljs.core.async.close_BANG_.call(null,to);
var state_32809__$1 = state_32809;
var statearr_32825_32845 = state_32809__$1;
(statearr_32825_32845[(2)] = inst_32792);

(statearr_32825_32845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___32831))
;
return ((function (switch__32590__auto__,c__32685__auto___32831){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_32826 = [null,null,null,null,null,null,null,null];
(statearr_32826[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_32826[(1)] = (1));

return statearr_32826;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_32809){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_32809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e32827){if((e32827 instanceof Object)){
var ex__32594__auto__ = e32827;
var statearr_32828_32846 = state_32809;
(statearr_32828_32846[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32847 = state_32809;
state_32809 = G__32847;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_32809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_32809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___32831))
})();
var state__32687__auto__ = (function (){var statearr_32829 = f__32686__auto__.call(null);
(statearr_32829[(6)] = c__32685__auto___32831);

return statearr_32829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___32831))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32848){
var vec__32849 = p__32848;
var v = cljs.core.nth.call(null,vec__32849,(0),null);
var p = cljs.core.nth.call(null,vec__32849,(1),null);
var job = vec__32849;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32685__auto___33020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___33020,res,vec__32849,v,p,job,jobs,results){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___33020,res,vec__32849,v,p,job,jobs,results){
return (function (state_32856){
var state_val_32857 = (state_32856[(1)]);
if((state_val_32857 === (1))){
var state_32856__$1 = state_32856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32856__$1,(2),res,v);
} else {
if((state_val_32857 === (2))){
var inst_32853 = (state_32856[(2)]);
var inst_32854 = cljs.core.async.close_BANG_.call(null,res);
var state_32856__$1 = (function (){var statearr_32858 = state_32856;
(statearr_32858[(7)] = inst_32853);

return statearr_32858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32856__$1,inst_32854);
} else {
return null;
}
}
});})(c__32685__auto___33020,res,vec__32849,v,p,job,jobs,results))
;
return ((function (switch__32590__auto__,c__32685__auto___33020,res,vec__32849,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0 = (function (){
var statearr_32859 = [null,null,null,null,null,null,null,null];
(statearr_32859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__);

(statearr_32859[(1)] = (1));

return statearr_32859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1 = (function (state_32856){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_32856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e32860){if((e32860 instanceof Object)){
var ex__32594__auto__ = e32860;
var statearr_32861_33021 = state_32856;
(statearr_32861_33021[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33022 = state_32856;
state_32856 = G__33022;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = function(state_32856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1.call(this,state_32856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___33020,res,vec__32849,v,p,job,jobs,results))
})();
var state__32687__auto__ = (function (){var statearr_32862 = f__32686__auto__.call(null);
(statearr_32862[(6)] = c__32685__auto___33020);

return statearr_32862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___33020,res,vec__32849,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32863){
var vec__32864 = p__32863;
var v = cljs.core.nth.call(null,vec__32864,(0),null);
var p = cljs.core.nth.call(null,vec__32864,(1),null);
var job = vec__32864;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33023 = n;
var __33024 = (0);
while(true){
if((__33024 < n__4607__auto___33023)){
var G__32867_33025 = type;
var G__32867_33026__$1 = (((G__32867_33025 instanceof cljs.core.Keyword))?G__32867_33025.fqn:null);
switch (G__32867_33026__$1) {
case "compute":
var c__32685__auto___33028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33024,c__32685__auto___33028,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (__33024,c__32685__auto___33028,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async){
return (function (state_32880){
var state_val_32881 = (state_32880[(1)]);
if((state_val_32881 === (1))){
var state_32880__$1 = state_32880;
var statearr_32882_33029 = state_32880__$1;
(statearr_32882_33029[(2)] = null);

(statearr_32882_33029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (2))){
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32880__$1,(4),jobs);
} else {
if((state_val_32881 === (3))){
var inst_32878 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32880__$1,inst_32878);
} else {
if((state_val_32881 === (4))){
var inst_32870 = (state_32880[(2)]);
var inst_32871 = process.call(null,inst_32870);
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32871)){
var statearr_32883_33030 = state_32880__$1;
(statearr_32883_33030[(1)] = (5));

} else {
var statearr_32884_33031 = state_32880__$1;
(statearr_32884_33031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (5))){
var state_32880__$1 = state_32880;
var statearr_32885_33032 = state_32880__$1;
(statearr_32885_33032[(2)] = null);

(statearr_32885_33032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (6))){
var state_32880__$1 = state_32880;
var statearr_32886_33033 = state_32880__$1;
(statearr_32886_33033[(2)] = null);

(statearr_32886_33033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (7))){
var inst_32876 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32887_33034 = state_32880__$1;
(statearr_32887_33034[(2)] = inst_32876);

(statearr_32887_33034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33024,c__32685__auto___33028,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async))
;
return ((function (__33024,switch__32590__auto__,c__32685__auto___33028,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0 = (function (){
var statearr_32888 = [null,null,null,null,null,null,null];
(statearr_32888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__);

(statearr_32888[(1)] = (1));

return statearr_32888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1 = (function (state_32880){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_32880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e32889){if((e32889 instanceof Object)){
var ex__32594__auto__ = e32889;
var statearr_32890_33035 = state_32880;
(statearr_32890_33035[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33036 = state_32880;
state_32880 = G__33036;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = function(state_32880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1.call(this,state_32880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__;
})()
;})(__33024,switch__32590__auto__,c__32685__auto___33028,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async))
})();
var state__32687__auto__ = (function (){var statearr_32891 = f__32686__auto__.call(null);
(statearr_32891[(6)] = c__32685__auto___33028);

return statearr_32891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(__33024,c__32685__auto___33028,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async))
);


break;
case "async":
var c__32685__auto___33037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33024,c__32685__auto___33037,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (__33024,c__32685__auto___33037,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async){
return (function (state_32904){
var state_val_32905 = (state_32904[(1)]);
if((state_val_32905 === (1))){
var state_32904__$1 = state_32904;
var statearr_32906_33038 = state_32904__$1;
(statearr_32906_33038[(2)] = null);

(statearr_32906_33038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (2))){
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32904__$1,(4),jobs);
} else {
if((state_val_32905 === (3))){
var inst_32902 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32904__$1,inst_32902);
} else {
if((state_val_32905 === (4))){
var inst_32894 = (state_32904[(2)]);
var inst_32895 = async.call(null,inst_32894);
var state_32904__$1 = state_32904;
if(cljs.core.truth_(inst_32895)){
var statearr_32907_33039 = state_32904__$1;
(statearr_32907_33039[(1)] = (5));

} else {
var statearr_32908_33040 = state_32904__$1;
(statearr_32908_33040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (5))){
var state_32904__$1 = state_32904;
var statearr_32909_33041 = state_32904__$1;
(statearr_32909_33041[(2)] = null);

(statearr_32909_33041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (6))){
var state_32904__$1 = state_32904;
var statearr_32910_33042 = state_32904__$1;
(statearr_32910_33042[(2)] = null);

(statearr_32910_33042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (7))){
var inst_32900 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32911_33043 = state_32904__$1;
(statearr_32911_33043[(2)] = inst_32900);

(statearr_32911_33043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33024,c__32685__auto___33037,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async))
;
return ((function (__33024,switch__32590__auto__,c__32685__auto___33037,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0 = (function (){
var statearr_32912 = [null,null,null,null,null,null,null];
(statearr_32912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__);

(statearr_32912[(1)] = (1));

return statearr_32912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1 = (function (state_32904){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_32904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e32913){if((e32913 instanceof Object)){
var ex__32594__auto__ = e32913;
var statearr_32914_33044 = state_32904;
(statearr_32914_33044[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33045 = state_32904;
state_32904 = G__33045;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = function(state_32904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1.call(this,state_32904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__;
})()
;})(__33024,switch__32590__auto__,c__32685__auto___33037,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async))
})();
var state__32687__auto__ = (function (){var statearr_32915 = f__32686__auto__.call(null);
(statearr_32915[(6)] = c__32685__auto___33037);

return statearr_32915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(__33024,c__32685__auto___33037,G__32867_33025,G__32867_33026__$1,n__4607__auto___33023,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32867_33026__$1)].join('')));

}

var G__33046 = (__33024 + (1));
__33024 = G__33046;
continue;
} else {
}
break;
}

var c__32685__auto___33047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___33047,jobs,results,process,async){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___33047,jobs,results,process,async){
return (function (state_32937){
var state_val_32938 = (state_32937[(1)]);
if((state_val_32938 === (7))){
var inst_32933 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32939_33048 = state_32937__$1;
(statearr_32939_33048[(2)] = inst_32933);

(statearr_32939_33048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (1))){
var state_32937__$1 = state_32937;
var statearr_32940_33049 = state_32937__$1;
(statearr_32940_33049[(2)] = null);

(statearr_32940_33049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (4))){
var inst_32918 = (state_32937[(7)]);
var inst_32918__$1 = (state_32937[(2)]);
var inst_32919 = (inst_32918__$1 == null);
var state_32937__$1 = (function (){var statearr_32941 = state_32937;
(statearr_32941[(7)] = inst_32918__$1);

return statearr_32941;
})();
if(cljs.core.truth_(inst_32919)){
var statearr_32942_33050 = state_32937__$1;
(statearr_32942_33050[(1)] = (5));

} else {
var statearr_32943_33051 = state_32937__$1;
(statearr_32943_33051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (6))){
var inst_32918 = (state_32937[(7)]);
var inst_32923 = (state_32937[(8)]);
var inst_32923__$1 = cljs.core.async.chan.call(null,(1));
var inst_32924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32925 = [inst_32918,inst_32923__$1];
var inst_32926 = (new cljs.core.PersistentVector(null,2,(5),inst_32924,inst_32925,null));
var state_32937__$1 = (function (){var statearr_32944 = state_32937;
(statearr_32944[(8)] = inst_32923__$1);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32937__$1,(8),jobs,inst_32926);
} else {
if((state_val_32938 === (3))){
var inst_32935 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32937__$1,inst_32935);
} else {
if((state_val_32938 === (2))){
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32937__$1,(4),from);
} else {
if((state_val_32938 === (9))){
var inst_32930 = (state_32937[(2)]);
var state_32937__$1 = (function (){var statearr_32945 = state_32937;
(statearr_32945[(9)] = inst_32930);

return statearr_32945;
})();
var statearr_32946_33052 = state_32937__$1;
(statearr_32946_33052[(2)] = null);

(statearr_32946_33052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (5))){
var inst_32921 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32937__$1 = state_32937;
var statearr_32947_33053 = state_32937__$1;
(statearr_32947_33053[(2)] = inst_32921);

(statearr_32947_33053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (8))){
var inst_32923 = (state_32937[(8)]);
var inst_32928 = (state_32937[(2)]);
var state_32937__$1 = (function (){var statearr_32948 = state_32937;
(statearr_32948[(10)] = inst_32928);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32937__$1,(9),results,inst_32923);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___33047,jobs,results,process,async))
;
return ((function (switch__32590__auto__,c__32685__auto___33047,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0 = (function (){
var statearr_32949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__);

(statearr_32949[(1)] = (1));

return statearr_32949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1 = (function (state_32937){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_32937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e32950){if((e32950 instanceof Object)){
var ex__32594__auto__ = e32950;
var statearr_32951_33054 = state_32937;
(statearr_32951_33054[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33055 = state_32937;
state_32937 = G__33055;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = function(state_32937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1.call(this,state_32937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___33047,jobs,results,process,async))
})();
var state__32687__auto__ = (function (){var statearr_32952 = f__32686__auto__.call(null);
(statearr_32952[(6)] = c__32685__auto___33047);

return statearr_32952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___33047,jobs,results,process,async))
);


var c__32685__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto__,jobs,results,process,async){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto__,jobs,results,process,async){
return (function (state_32990){
var state_val_32991 = (state_32990[(1)]);
if((state_val_32991 === (7))){
var inst_32986 = (state_32990[(2)]);
var state_32990__$1 = state_32990;
var statearr_32992_33056 = state_32990__$1;
(statearr_32992_33056[(2)] = inst_32986);

(statearr_32992_33056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (20))){
var state_32990__$1 = state_32990;
var statearr_32993_33057 = state_32990__$1;
(statearr_32993_33057[(2)] = null);

(statearr_32993_33057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (1))){
var state_32990__$1 = state_32990;
var statearr_32994_33058 = state_32990__$1;
(statearr_32994_33058[(2)] = null);

(statearr_32994_33058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (4))){
var inst_32955 = (state_32990[(7)]);
var inst_32955__$1 = (state_32990[(2)]);
var inst_32956 = (inst_32955__$1 == null);
var state_32990__$1 = (function (){var statearr_32995 = state_32990;
(statearr_32995[(7)] = inst_32955__$1);

return statearr_32995;
})();
if(cljs.core.truth_(inst_32956)){
var statearr_32996_33059 = state_32990__$1;
(statearr_32996_33059[(1)] = (5));

} else {
var statearr_32997_33060 = state_32990__$1;
(statearr_32997_33060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (15))){
var inst_32968 = (state_32990[(8)]);
var state_32990__$1 = state_32990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32990__$1,(18),to,inst_32968);
} else {
if((state_val_32991 === (21))){
var inst_32981 = (state_32990[(2)]);
var state_32990__$1 = state_32990;
var statearr_32998_33061 = state_32990__$1;
(statearr_32998_33061[(2)] = inst_32981);

(statearr_32998_33061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (13))){
var inst_32983 = (state_32990[(2)]);
var state_32990__$1 = (function (){var statearr_32999 = state_32990;
(statearr_32999[(9)] = inst_32983);

return statearr_32999;
})();
var statearr_33000_33062 = state_32990__$1;
(statearr_33000_33062[(2)] = null);

(statearr_33000_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (6))){
var inst_32955 = (state_32990[(7)]);
var state_32990__$1 = state_32990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32990__$1,(11),inst_32955);
} else {
if((state_val_32991 === (17))){
var inst_32976 = (state_32990[(2)]);
var state_32990__$1 = state_32990;
if(cljs.core.truth_(inst_32976)){
var statearr_33001_33063 = state_32990__$1;
(statearr_33001_33063[(1)] = (19));

} else {
var statearr_33002_33064 = state_32990__$1;
(statearr_33002_33064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (3))){
var inst_32988 = (state_32990[(2)]);
var state_32990__$1 = state_32990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32990__$1,inst_32988);
} else {
if((state_val_32991 === (12))){
var inst_32965 = (state_32990[(10)]);
var state_32990__$1 = state_32990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32990__$1,(14),inst_32965);
} else {
if((state_val_32991 === (2))){
var state_32990__$1 = state_32990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32990__$1,(4),results);
} else {
if((state_val_32991 === (19))){
var state_32990__$1 = state_32990;
var statearr_33003_33065 = state_32990__$1;
(statearr_33003_33065[(2)] = null);

(statearr_33003_33065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (11))){
var inst_32965 = (state_32990[(2)]);
var state_32990__$1 = (function (){var statearr_33004 = state_32990;
(statearr_33004[(10)] = inst_32965);

return statearr_33004;
})();
var statearr_33005_33066 = state_32990__$1;
(statearr_33005_33066[(2)] = null);

(statearr_33005_33066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (9))){
var state_32990__$1 = state_32990;
var statearr_33006_33067 = state_32990__$1;
(statearr_33006_33067[(2)] = null);

(statearr_33006_33067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (5))){
var state_32990__$1 = state_32990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33007_33068 = state_32990__$1;
(statearr_33007_33068[(1)] = (8));

} else {
var statearr_33008_33069 = state_32990__$1;
(statearr_33008_33069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (14))){
var inst_32970 = (state_32990[(11)]);
var inst_32968 = (state_32990[(8)]);
var inst_32968__$1 = (state_32990[(2)]);
var inst_32969 = (inst_32968__$1 == null);
var inst_32970__$1 = cljs.core.not.call(null,inst_32969);
var state_32990__$1 = (function (){var statearr_33009 = state_32990;
(statearr_33009[(11)] = inst_32970__$1);

(statearr_33009[(8)] = inst_32968__$1);

return statearr_33009;
})();
if(inst_32970__$1){
var statearr_33010_33070 = state_32990__$1;
(statearr_33010_33070[(1)] = (15));

} else {
var statearr_33011_33071 = state_32990__$1;
(statearr_33011_33071[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (16))){
var inst_32970 = (state_32990[(11)]);
var state_32990__$1 = state_32990;
var statearr_33012_33072 = state_32990__$1;
(statearr_33012_33072[(2)] = inst_32970);

(statearr_33012_33072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (10))){
var inst_32962 = (state_32990[(2)]);
var state_32990__$1 = state_32990;
var statearr_33013_33073 = state_32990__$1;
(statearr_33013_33073[(2)] = inst_32962);

(statearr_33013_33073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (18))){
var inst_32973 = (state_32990[(2)]);
var state_32990__$1 = state_32990;
var statearr_33014_33074 = state_32990__$1;
(statearr_33014_33074[(2)] = inst_32973);

(statearr_33014_33074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32991 === (8))){
var inst_32959 = cljs.core.async.close_BANG_.call(null,to);
var state_32990__$1 = state_32990;
var statearr_33015_33075 = state_32990__$1;
(statearr_33015_33075[(2)] = inst_32959);

(statearr_33015_33075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto__,jobs,results,process,async))
;
return ((function (switch__32590__auto__,c__32685__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0 = (function (){
var statearr_33016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__);

(statearr_33016[(1)] = (1));

return statearr_33016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1 = (function (state_32990){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_32990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33017){if((e33017 instanceof Object)){
var ex__32594__auto__ = e33017;
var statearr_33018_33076 = state_32990;
(statearr_33018_33076[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33077 = state_32990;
state_32990 = G__33077;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__ = function(state_32990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1.call(this,state_32990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto__,jobs,results,process,async))
})();
var state__32687__auto__ = (function (){var statearr_33019 = f__32686__auto__.call(null);
(statearr_33019[(6)] = c__32685__auto__);

return statearr_33019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto__,jobs,results,process,async))
);

return c__32685__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33079 = arguments.length;
switch (G__33079) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33082 = arguments.length;
switch (G__33082) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33085 = arguments.length;
switch (G__33085) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32685__auto___33134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___33134,tc,fc){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___33134,tc,fc){
return (function (state_33111){
var state_val_33112 = (state_33111[(1)]);
if((state_val_33112 === (7))){
var inst_33107 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33113_33135 = state_33111__$1;
(statearr_33113_33135[(2)] = inst_33107);

(statearr_33113_33135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (1))){
var state_33111__$1 = state_33111;
var statearr_33114_33136 = state_33111__$1;
(statearr_33114_33136[(2)] = null);

(statearr_33114_33136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (4))){
var inst_33088 = (state_33111[(7)]);
var inst_33088__$1 = (state_33111[(2)]);
var inst_33089 = (inst_33088__$1 == null);
var state_33111__$1 = (function (){var statearr_33115 = state_33111;
(statearr_33115[(7)] = inst_33088__$1);

return statearr_33115;
})();
if(cljs.core.truth_(inst_33089)){
var statearr_33116_33137 = state_33111__$1;
(statearr_33116_33137[(1)] = (5));

} else {
var statearr_33117_33138 = state_33111__$1;
(statearr_33117_33138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (13))){
var state_33111__$1 = state_33111;
var statearr_33118_33139 = state_33111__$1;
(statearr_33118_33139[(2)] = null);

(statearr_33118_33139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (6))){
var inst_33088 = (state_33111[(7)]);
var inst_33094 = p.call(null,inst_33088);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33094)){
var statearr_33119_33140 = state_33111__$1;
(statearr_33119_33140[(1)] = (9));

} else {
var statearr_33120_33141 = state_33111__$1;
(statearr_33120_33141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (3))){
var inst_33109 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33111__$1,inst_33109);
} else {
if((state_val_33112 === (12))){
var state_33111__$1 = state_33111;
var statearr_33121_33142 = state_33111__$1;
(statearr_33121_33142[(2)] = null);

(statearr_33121_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (2))){
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33111__$1,(4),ch);
} else {
if((state_val_33112 === (11))){
var inst_33088 = (state_33111[(7)]);
var inst_33098 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33111__$1,(8),inst_33098,inst_33088);
} else {
if((state_val_33112 === (9))){
var state_33111__$1 = state_33111;
var statearr_33122_33143 = state_33111__$1;
(statearr_33122_33143[(2)] = tc);

(statearr_33122_33143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (5))){
var inst_33091 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33092 = cljs.core.async.close_BANG_.call(null,fc);
var state_33111__$1 = (function (){var statearr_33123 = state_33111;
(statearr_33123[(8)] = inst_33091);

return statearr_33123;
})();
var statearr_33124_33144 = state_33111__$1;
(statearr_33124_33144[(2)] = inst_33092);

(statearr_33124_33144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (14))){
var inst_33105 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33125_33145 = state_33111__$1;
(statearr_33125_33145[(2)] = inst_33105);

(statearr_33125_33145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (10))){
var state_33111__$1 = state_33111;
var statearr_33126_33146 = state_33111__$1;
(statearr_33126_33146[(2)] = fc);

(statearr_33126_33146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (8))){
var inst_33100 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33100)){
var statearr_33127_33147 = state_33111__$1;
(statearr_33127_33147[(1)] = (12));

} else {
var statearr_33128_33148 = state_33111__$1;
(statearr_33128_33148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___33134,tc,fc))
;
return ((function (switch__32590__auto__,c__32685__auto___33134,tc,fc){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_33129 = [null,null,null,null,null,null,null,null,null];
(statearr_33129[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_33129[(1)] = (1));

return statearr_33129;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_33111){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33130){if((e33130 instanceof Object)){
var ex__32594__auto__ = e33130;
var statearr_33131_33149 = state_33111;
(statearr_33131_33149[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33150 = state_33111;
state_33111 = G__33150;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_33111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_33111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___33134,tc,fc))
})();
var state__32687__auto__ = (function (){var statearr_33132 = f__32686__auto__.call(null);
(statearr_33132[(6)] = c__32685__auto___33134);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___33134,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32685__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto__){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto__){
return (function (state_33171){
var state_val_33172 = (state_33171[(1)]);
if((state_val_33172 === (7))){
var inst_33167 = (state_33171[(2)]);
var state_33171__$1 = state_33171;
var statearr_33173_33191 = state_33171__$1;
(statearr_33173_33191[(2)] = inst_33167);

(statearr_33173_33191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (1))){
var inst_33151 = init;
var state_33171__$1 = (function (){var statearr_33174 = state_33171;
(statearr_33174[(7)] = inst_33151);

return statearr_33174;
})();
var statearr_33175_33192 = state_33171__$1;
(statearr_33175_33192[(2)] = null);

(statearr_33175_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (4))){
var inst_33154 = (state_33171[(8)]);
var inst_33154__$1 = (state_33171[(2)]);
var inst_33155 = (inst_33154__$1 == null);
var state_33171__$1 = (function (){var statearr_33176 = state_33171;
(statearr_33176[(8)] = inst_33154__$1);

return statearr_33176;
})();
if(cljs.core.truth_(inst_33155)){
var statearr_33177_33193 = state_33171__$1;
(statearr_33177_33193[(1)] = (5));

} else {
var statearr_33178_33194 = state_33171__$1;
(statearr_33178_33194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (6))){
var inst_33158 = (state_33171[(9)]);
var inst_33154 = (state_33171[(8)]);
var inst_33151 = (state_33171[(7)]);
var inst_33158__$1 = f.call(null,inst_33151,inst_33154);
var inst_33159 = cljs.core.reduced_QMARK_.call(null,inst_33158__$1);
var state_33171__$1 = (function (){var statearr_33179 = state_33171;
(statearr_33179[(9)] = inst_33158__$1);

return statearr_33179;
})();
if(inst_33159){
var statearr_33180_33195 = state_33171__$1;
(statearr_33180_33195[(1)] = (8));

} else {
var statearr_33181_33196 = state_33171__$1;
(statearr_33181_33196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (3))){
var inst_33169 = (state_33171[(2)]);
var state_33171__$1 = state_33171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33171__$1,inst_33169);
} else {
if((state_val_33172 === (2))){
var state_33171__$1 = state_33171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33171__$1,(4),ch);
} else {
if((state_val_33172 === (9))){
var inst_33158 = (state_33171[(9)]);
var inst_33151 = inst_33158;
var state_33171__$1 = (function (){var statearr_33182 = state_33171;
(statearr_33182[(7)] = inst_33151);

return statearr_33182;
})();
var statearr_33183_33197 = state_33171__$1;
(statearr_33183_33197[(2)] = null);

(statearr_33183_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (5))){
var inst_33151 = (state_33171[(7)]);
var state_33171__$1 = state_33171;
var statearr_33184_33198 = state_33171__$1;
(statearr_33184_33198[(2)] = inst_33151);

(statearr_33184_33198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (10))){
var inst_33165 = (state_33171[(2)]);
var state_33171__$1 = state_33171;
var statearr_33185_33199 = state_33171__$1;
(statearr_33185_33199[(2)] = inst_33165);

(statearr_33185_33199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (8))){
var inst_33158 = (state_33171[(9)]);
var inst_33161 = cljs.core.deref.call(null,inst_33158);
var state_33171__$1 = state_33171;
var statearr_33186_33200 = state_33171__$1;
(statearr_33186_33200[(2)] = inst_33161);

(statearr_33186_33200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto__))
;
return ((function (switch__32590__auto__,c__32685__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32591__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32591__auto____0 = (function (){
var statearr_33187 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33187[(0)] = cljs$core$async$reduce_$_state_machine__32591__auto__);

(statearr_33187[(1)] = (1));

return statearr_33187;
});
var cljs$core$async$reduce_$_state_machine__32591__auto____1 = (function (state_33171){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33188){if((e33188 instanceof Object)){
var ex__32594__auto__ = e33188;
var statearr_33189_33201 = state_33171;
(statearr_33189_33201[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33202 = state_33171;
state_33171 = G__33202;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32591__auto__ = function(state_33171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32591__auto____1.call(this,state_33171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32591__auto____0;
cljs$core$async$reduce_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32591__auto____1;
return cljs$core$async$reduce_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto__))
})();
var state__32687__auto__ = (function (){var statearr_33190 = f__32686__auto__.call(null);
(statearr_33190[(6)] = c__32685__auto__);

return statearr_33190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto__))
);

return c__32685__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32685__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto__,f__$1){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto__,f__$1){
return (function (state_33208){
var state_val_33209 = (state_33208[(1)]);
if((state_val_33209 === (1))){
var inst_33203 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33208__$1,(2),inst_33203);
} else {
if((state_val_33209 === (2))){
var inst_33205 = (state_33208[(2)]);
var inst_33206 = f__$1.call(null,inst_33205);
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33208__$1,inst_33206);
} else {
return null;
}
}
});})(c__32685__auto__,f__$1))
;
return ((function (switch__32590__auto__,c__32685__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32591__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32591__auto____0 = (function (){
var statearr_33210 = [null,null,null,null,null,null,null];
(statearr_33210[(0)] = cljs$core$async$transduce_$_state_machine__32591__auto__);

(statearr_33210[(1)] = (1));

return statearr_33210;
});
var cljs$core$async$transduce_$_state_machine__32591__auto____1 = (function (state_33208){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33211){if((e33211 instanceof Object)){
var ex__32594__auto__ = e33211;
var statearr_33212_33214 = state_33208;
(statearr_33212_33214[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33215 = state_33208;
state_33208 = G__33215;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32591__auto__ = function(state_33208){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32591__auto____1.call(this,state_33208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32591__auto____0;
cljs$core$async$transduce_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32591__auto____1;
return cljs$core$async$transduce_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto__,f__$1))
})();
var state__32687__auto__ = (function (){var statearr_33213 = f__32686__auto__.call(null);
(statearr_33213[(6)] = c__32685__auto__);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto__,f__$1))
);

return c__32685__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33217 = arguments.length;
switch (G__33217) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32685__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto__){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto__){
return (function (state_33242){
var state_val_33243 = (state_33242[(1)]);
if((state_val_33243 === (7))){
var inst_33224 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
var statearr_33244_33265 = state_33242__$1;
(statearr_33244_33265[(2)] = inst_33224);

(statearr_33244_33265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (1))){
var inst_33218 = cljs.core.seq.call(null,coll);
var inst_33219 = inst_33218;
var state_33242__$1 = (function (){var statearr_33245 = state_33242;
(statearr_33245[(7)] = inst_33219);

return statearr_33245;
})();
var statearr_33246_33266 = state_33242__$1;
(statearr_33246_33266[(2)] = null);

(statearr_33246_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (4))){
var inst_33219 = (state_33242[(7)]);
var inst_33222 = cljs.core.first.call(null,inst_33219);
var state_33242__$1 = state_33242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33242__$1,(7),ch,inst_33222);
} else {
if((state_val_33243 === (13))){
var inst_33236 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
var statearr_33247_33267 = state_33242__$1;
(statearr_33247_33267[(2)] = inst_33236);

(statearr_33247_33267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (6))){
var inst_33227 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
if(cljs.core.truth_(inst_33227)){
var statearr_33248_33268 = state_33242__$1;
(statearr_33248_33268[(1)] = (8));

} else {
var statearr_33249_33269 = state_33242__$1;
(statearr_33249_33269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (3))){
var inst_33240 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33242__$1,inst_33240);
} else {
if((state_val_33243 === (12))){
var state_33242__$1 = state_33242;
var statearr_33250_33270 = state_33242__$1;
(statearr_33250_33270[(2)] = null);

(statearr_33250_33270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (2))){
var inst_33219 = (state_33242[(7)]);
var state_33242__$1 = state_33242;
if(cljs.core.truth_(inst_33219)){
var statearr_33251_33271 = state_33242__$1;
(statearr_33251_33271[(1)] = (4));

} else {
var statearr_33252_33272 = state_33242__$1;
(statearr_33252_33272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (11))){
var inst_33233 = cljs.core.async.close_BANG_.call(null,ch);
var state_33242__$1 = state_33242;
var statearr_33253_33273 = state_33242__$1;
(statearr_33253_33273[(2)] = inst_33233);

(statearr_33253_33273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (9))){
var state_33242__$1 = state_33242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33254_33274 = state_33242__$1;
(statearr_33254_33274[(1)] = (11));

} else {
var statearr_33255_33275 = state_33242__$1;
(statearr_33255_33275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (5))){
var inst_33219 = (state_33242[(7)]);
var state_33242__$1 = state_33242;
var statearr_33256_33276 = state_33242__$1;
(statearr_33256_33276[(2)] = inst_33219);

(statearr_33256_33276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (10))){
var inst_33238 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
var statearr_33257_33277 = state_33242__$1;
(statearr_33257_33277[(2)] = inst_33238);

(statearr_33257_33277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (8))){
var inst_33219 = (state_33242[(7)]);
var inst_33229 = cljs.core.next.call(null,inst_33219);
var inst_33219__$1 = inst_33229;
var state_33242__$1 = (function (){var statearr_33258 = state_33242;
(statearr_33258[(7)] = inst_33219__$1);

return statearr_33258;
})();
var statearr_33259_33278 = state_33242__$1;
(statearr_33259_33278[(2)] = null);

(statearr_33259_33278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto__))
;
return ((function (switch__32590__auto__,c__32685__auto__){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_33260 = [null,null,null,null,null,null,null,null];
(statearr_33260[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_33260[(1)] = (1));

return statearr_33260;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_33242){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33261){if((e33261 instanceof Object)){
var ex__32594__auto__ = e33261;
var statearr_33262_33279 = state_33242;
(statearr_33262_33279[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33280 = state_33242;
state_33242 = G__33280;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_33242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_33242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto__))
})();
var state__32687__auto__ = (function (){var statearr_33263 = f__32686__auto__.call(null);
(statearr_33263[(6)] = c__32685__auto__);

return statearr_33263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto__))
);

return c__32685__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33281 = (function (ch,cs,meta33282){
this.ch = ch;
this.cs = cs;
this.meta33282 = meta33282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33283,meta33282__$1){
var self__ = this;
var _33283__$1 = this;
return (new cljs.core.async.t_cljs$core$async33281(self__.ch,self__.cs,meta33282__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33283){
var self__ = this;
var _33283__$1 = this;
return self__.meta33282;
});})(cs))
;

cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33281.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33282","meta33282",1038774972,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33281";

cljs.core.async.t_cljs$core$async33281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33281");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33281.
 */
cljs.core.async.__GT_t_cljs$core$async33281 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33281(ch__$1,cs__$1,meta33282){
return (new cljs.core.async.t_cljs$core$async33281(ch__$1,cs__$1,meta33282));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33281(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32685__auto___33503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___33503,cs,m,dchan,dctr,done){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___33503,cs,m,dchan,dctr,done){
return (function (state_33418){
var state_val_33419 = (state_33418[(1)]);
if((state_val_33419 === (7))){
var inst_33414 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33420_33504 = state_33418__$1;
(statearr_33420_33504[(2)] = inst_33414);

(statearr_33420_33504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (20))){
var inst_33317 = (state_33418[(7)]);
var inst_33329 = cljs.core.first.call(null,inst_33317);
var inst_33330 = cljs.core.nth.call(null,inst_33329,(0),null);
var inst_33331 = cljs.core.nth.call(null,inst_33329,(1),null);
var state_33418__$1 = (function (){var statearr_33421 = state_33418;
(statearr_33421[(8)] = inst_33330);

return statearr_33421;
})();
if(cljs.core.truth_(inst_33331)){
var statearr_33422_33505 = state_33418__$1;
(statearr_33422_33505[(1)] = (22));

} else {
var statearr_33423_33506 = state_33418__$1;
(statearr_33423_33506[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (27))){
var inst_33366 = (state_33418[(9)]);
var inst_33359 = (state_33418[(10)]);
var inst_33286 = (state_33418[(11)]);
var inst_33361 = (state_33418[(12)]);
var inst_33366__$1 = cljs.core._nth.call(null,inst_33359,inst_33361);
var inst_33367 = cljs.core.async.put_BANG_.call(null,inst_33366__$1,inst_33286,done);
var state_33418__$1 = (function (){var statearr_33424 = state_33418;
(statearr_33424[(9)] = inst_33366__$1);

return statearr_33424;
})();
if(cljs.core.truth_(inst_33367)){
var statearr_33425_33507 = state_33418__$1;
(statearr_33425_33507[(1)] = (30));

} else {
var statearr_33426_33508 = state_33418__$1;
(statearr_33426_33508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (1))){
var state_33418__$1 = state_33418;
var statearr_33427_33509 = state_33418__$1;
(statearr_33427_33509[(2)] = null);

(statearr_33427_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (24))){
var inst_33317 = (state_33418[(7)]);
var inst_33336 = (state_33418[(2)]);
var inst_33337 = cljs.core.next.call(null,inst_33317);
var inst_33295 = inst_33337;
var inst_33296 = null;
var inst_33297 = (0);
var inst_33298 = (0);
var state_33418__$1 = (function (){var statearr_33428 = state_33418;
(statearr_33428[(13)] = inst_33298);

(statearr_33428[(14)] = inst_33295);

(statearr_33428[(15)] = inst_33336);

(statearr_33428[(16)] = inst_33297);

(statearr_33428[(17)] = inst_33296);

return statearr_33428;
})();
var statearr_33429_33510 = state_33418__$1;
(statearr_33429_33510[(2)] = null);

(statearr_33429_33510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (39))){
var state_33418__$1 = state_33418;
var statearr_33433_33511 = state_33418__$1;
(statearr_33433_33511[(2)] = null);

(statearr_33433_33511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (4))){
var inst_33286 = (state_33418[(11)]);
var inst_33286__$1 = (state_33418[(2)]);
var inst_33287 = (inst_33286__$1 == null);
var state_33418__$1 = (function (){var statearr_33434 = state_33418;
(statearr_33434[(11)] = inst_33286__$1);

return statearr_33434;
})();
if(cljs.core.truth_(inst_33287)){
var statearr_33435_33512 = state_33418__$1;
(statearr_33435_33512[(1)] = (5));

} else {
var statearr_33436_33513 = state_33418__$1;
(statearr_33436_33513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (15))){
var inst_33298 = (state_33418[(13)]);
var inst_33295 = (state_33418[(14)]);
var inst_33297 = (state_33418[(16)]);
var inst_33296 = (state_33418[(17)]);
var inst_33313 = (state_33418[(2)]);
var inst_33314 = (inst_33298 + (1));
var tmp33430 = inst_33295;
var tmp33431 = inst_33297;
var tmp33432 = inst_33296;
var inst_33295__$1 = tmp33430;
var inst_33296__$1 = tmp33432;
var inst_33297__$1 = tmp33431;
var inst_33298__$1 = inst_33314;
var state_33418__$1 = (function (){var statearr_33437 = state_33418;
(statearr_33437[(13)] = inst_33298__$1);

(statearr_33437[(18)] = inst_33313);

(statearr_33437[(14)] = inst_33295__$1);

(statearr_33437[(16)] = inst_33297__$1);

(statearr_33437[(17)] = inst_33296__$1);

return statearr_33437;
})();
var statearr_33438_33514 = state_33418__$1;
(statearr_33438_33514[(2)] = null);

(statearr_33438_33514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (21))){
var inst_33340 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33442_33515 = state_33418__$1;
(statearr_33442_33515[(2)] = inst_33340);

(statearr_33442_33515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (31))){
var inst_33366 = (state_33418[(9)]);
var inst_33370 = done.call(null,null);
var inst_33371 = cljs.core.async.untap_STAR_.call(null,m,inst_33366);
var state_33418__$1 = (function (){var statearr_33443 = state_33418;
(statearr_33443[(19)] = inst_33370);

return statearr_33443;
})();
var statearr_33444_33516 = state_33418__$1;
(statearr_33444_33516[(2)] = inst_33371);

(statearr_33444_33516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (32))){
var inst_33360 = (state_33418[(20)]);
var inst_33359 = (state_33418[(10)]);
var inst_33358 = (state_33418[(21)]);
var inst_33361 = (state_33418[(12)]);
var inst_33373 = (state_33418[(2)]);
var inst_33374 = (inst_33361 + (1));
var tmp33439 = inst_33360;
var tmp33440 = inst_33359;
var tmp33441 = inst_33358;
var inst_33358__$1 = tmp33441;
var inst_33359__$1 = tmp33440;
var inst_33360__$1 = tmp33439;
var inst_33361__$1 = inst_33374;
var state_33418__$1 = (function (){var statearr_33445 = state_33418;
(statearr_33445[(20)] = inst_33360__$1);

(statearr_33445[(22)] = inst_33373);

(statearr_33445[(10)] = inst_33359__$1);

(statearr_33445[(21)] = inst_33358__$1);

(statearr_33445[(12)] = inst_33361__$1);

return statearr_33445;
})();
var statearr_33446_33517 = state_33418__$1;
(statearr_33446_33517[(2)] = null);

(statearr_33446_33517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (40))){
var inst_33386 = (state_33418[(23)]);
var inst_33390 = done.call(null,null);
var inst_33391 = cljs.core.async.untap_STAR_.call(null,m,inst_33386);
var state_33418__$1 = (function (){var statearr_33447 = state_33418;
(statearr_33447[(24)] = inst_33390);

return statearr_33447;
})();
var statearr_33448_33518 = state_33418__$1;
(statearr_33448_33518[(2)] = inst_33391);

(statearr_33448_33518[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (33))){
var inst_33377 = (state_33418[(25)]);
var inst_33379 = cljs.core.chunked_seq_QMARK_.call(null,inst_33377);
var state_33418__$1 = state_33418;
if(inst_33379){
var statearr_33449_33519 = state_33418__$1;
(statearr_33449_33519[(1)] = (36));

} else {
var statearr_33450_33520 = state_33418__$1;
(statearr_33450_33520[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (13))){
var inst_33307 = (state_33418[(26)]);
var inst_33310 = cljs.core.async.close_BANG_.call(null,inst_33307);
var state_33418__$1 = state_33418;
var statearr_33451_33521 = state_33418__$1;
(statearr_33451_33521[(2)] = inst_33310);

(statearr_33451_33521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (22))){
var inst_33330 = (state_33418[(8)]);
var inst_33333 = cljs.core.async.close_BANG_.call(null,inst_33330);
var state_33418__$1 = state_33418;
var statearr_33452_33522 = state_33418__$1;
(statearr_33452_33522[(2)] = inst_33333);

(statearr_33452_33522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (36))){
var inst_33377 = (state_33418[(25)]);
var inst_33381 = cljs.core.chunk_first.call(null,inst_33377);
var inst_33382 = cljs.core.chunk_rest.call(null,inst_33377);
var inst_33383 = cljs.core.count.call(null,inst_33381);
var inst_33358 = inst_33382;
var inst_33359 = inst_33381;
var inst_33360 = inst_33383;
var inst_33361 = (0);
var state_33418__$1 = (function (){var statearr_33453 = state_33418;
(statearr_33453[(20)] = inst_33360);

(statearr_33453[(10)] = inst_33359);

(statearr_33453[(21)] = inst_33358);

(statearr_33453[(12)] = inst_33361);

return statearr_33453;
})();
var statearr_33454_33523 = state_33418__$1;
(statearr_33454_33523[(2)] = null);

(statearr_33454_33523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (41))){
var inst_33377 = (state_33418[(25)]);
var inst_33393 = (state_33418[(2)]);
var inst_33394 = cljs.core.next.call(null,inst_33377);
var inst_33358 = inst_33394;
var inst_33359 = null;
var inst_33360 = (0);
var inst_33361 = (0);
var state_33418__$1 = (function (){var statearr_33455 = state_33418;
(statearr_33455[(20)] = inst_33360);

(statearr_33455[(10)] = inst_33359);

(statearr_33455[(21)] = inst_33358);

(statearr_33455[(12)] = inst_33361);

(statearr_33455[(27)] = inst_33393);

return statearr_33455;
})();
var statearr_33456_33524 = state_33418__$1;
(statearr_33456_33524[(2)] = null);

(statearr_33456_33524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (43))){
var state_33418__$1 = state_33418;
var statearr_33457_33525 = state_33418__$1;
(statearr_33457_33525[(2)] = null);

(statearr_33457_33525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (29))){
var inst_33402 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33458_33526 = state_33418__$1;
(statearr_33458_33526[(2)] = inst_33402);

(statearr_33458_33526[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (44))){
var inst_33411 = (state_33418[(2)]);
var state_33418__$1 = (function (){var statearr_33459 = state_33418;
(statearr_33459[(28)] = inst_33411);

return statearr_33459;
})();
var statearr_33460_33527 = state_33418__$1;
(statearr_33460_33527[(2)] = null);

(statearr_33460_33527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (6))){
var inst_33350 = (state_33418[(29)]);
var inst_33349 = cljs.core.deref.call(null,cs);
var inst_33350__$1 = cljs.core.keys.call(null,inst_33349);
var inst_33351 = cljs.core.count.call(null,inst_33350__$1);
var inst_33352 = cljs.core.reset_BANG_.call(null,dctr,inst_33351);
var inst_33357 = cljs.core.seq.call(null,inst_33350__$1);
var inst_33358 = inst_33357;
var inst_33359 = null;
var inst_33360 = (0);
var inst_33361 = (0);
var state_33418__$1 = (function (){var statearr_33461 = state_33418;
(statearr_33461[(29)] = inst_33350__$1);

(statearr_33461[(20)] = inst_33360);

(statearr_33461[(10)] = inst_33359);

(statearr_33461[(30)] = inst_33352);

(statearr_33461[(21)] = inst_33358);

(statearr_33461[(12)] = inst_33361);

return statearr_33461;
})();
var statearr_33462_33528 = state_33418__$1;
(statearr_33462_33528[(2)] = null);

(statearr_33462_33528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (28))){
var inst_33377 = (state_33418[(25)]);
var inst_33358 = (state_33418[(21)]);
var inst_33377__$1 = cljs.core.seq.call(null,inst_33358);
var state_33418__$1 = (function (){var statearr_33463 = state_33418;
(statearr_33463[(25)] = inst_33377__$1);

return statearr_33463;
})();
if(inst_33377__$1){
var statearr_33464_33529 = state_33418__$1;
(statearr_33464_33529[(1)] = (33));

} else {
var statearr_33465_33530 = state_33418__$1;
(statearr_33465_33530[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (25))){
var inst_33360 = (state_33418[(20)]);
var inst_33361 = (state_33418[(12)]);
var inst_33363 = (inst_33361 < inst_33360);
var inst_33364 = inst_33363;
var state_33418__$1 = state_33418;
if(cljs.core.truth_(inst_33364)){
var statearr_33466_33531 = state_33418__$1;
(statearr_33466_33531[(1)] = (27));

} else {
var statearr_33467_33532 = state_33418__$1;
(statearr_33467_33532[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (34))){
var state_33418__$1 = state_33418;
var statearr_33468_33533 = state_33418__$1;
(statearr_33468_33533[(2)] = null);

(statearr_33468_33533[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (17))){
var state_33418__$1 = state_33418;
var statearr_33469_33534 = state_33418__$1;
(statearr_33469_33534[(2)] = null);

(statearr_33469_33534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (3))){
var inst_33416 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33418__$1,inst_33416);
} else {
if((state_val_33419 === (12))){
var inst_33345 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33470_33535 = state_33418__$1;
(statearr_33470_33535[(2)] = inst_33345);

(statearr_33470_33535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (2))){
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33418__$1,(4),ch);
} else {
if((state_val_33419 === (23))){
var state_33418__$1 = state_33418;
var statearr_33471_33536 = state_33418__$1;
(statearr_33471_33536[(2)] = null);

(statearr_33471_33536[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (35))){
var inst_33400 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33472_33537 = state_33418__$1;
(statearr_33472_33537[(2)] = inst_33400);

(statearr_33472_33537[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (19))){
var inst_33317 = (state_33418[(7)]);
var inst_33321 = cljs.core.chunk_first.call(null,inst_33317);
var inst_33322 = cljs.core.chunk_rest.call(null,inst_33317);
var inst_33323 = cljs.core.count.call(null,inst_33321);
var inst_33295 = inst_33322;
var inst_33296 = inst_33321;
var inst_33297 = inst_33323;
var inst_33298 = (0);
var state_33418__$1 = (function (){var statearr_33473 = state_33418;
(statearr_33473[(13)] = inst_33298);

(statearr_33473[(14)] = inst_33295);

(statearr_33473[(16)] = inst_33297);

(statearr_33473[(17)] = inst_33296);

return statearr_33473;
})();
var statearr_33474_33538 = state_33418__$1;
(statearr_33474_33538[(2)] = null);

(statearr_33474_33538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (11))){
var inst_33317 = (state_33418[(7)]);
var inst_33295 = (state_33418[(14)]);
var inst_33317__$1 = cljs.core.seq.call(null,inst_33295);
var state_33418__$1 = (function (){var statearr_33475 = state_33418;
(statearr_33475[(7)] = inst_33317__$1);

return statearr_33475;
})();
if(inst_33317__$1){
var statearr_33476_33539 = state_33418__$1;
(statearr_33476_33539[(1)] = (16));

} else {
var statearr_33477_33540 = state_33418__$1;
(statearr_33477_33540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (9))){
var inst_33347 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33478_33541 = state_33418__$1;
(statearr_33478_33541[(2)] = inst_33347);

(statearr_33478_33541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (5))){
var inst_33293 = cljs.core.deref.call(null,cs);
var inst_33294 = cljs.core.seq.call(null,inst_33293);
var inst_33295 = inst_33294;
var inst_33296 = null;
var inst_33297 = (0);
var inst_33298 = (0);
var state_33418__$1 = (function (){var statearr_33479 = state_33418;
(statearr_33479[(13)] = inst_33298);

(statearr_33479[(14)] = inst_33295);

(statearr_33479[(16)] = inst_33297);

(statearr_33479[(17)] = inst_33296);

return statearr_33479;
})();
var statearr_33480_33542 = state_33418__$1;
(statearr_33480_33542[(2)] = null);

(statearr_33480_33542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (14))){
var state_33418__$1 = state_33418;
var statearr_33481_33543 = state_33418__$1;
(statearr_33481_33543[(2)] = null);

(statearr_33481_33543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (45))){
var inst_33408 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33482_33544 = state_33418__$1;
(statearr_33482_33544[(2)] = inst_33408);

(statearr_33482_33544[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (26))){
var inst_33350 = (state_33418[(29)]);
var inst_33404 = (state_33418[(2)]);
var inst_33405 = cljs.core.seq.call(null,inst_33350);
var state_33418__$1 = (function (){var statearr_33483 = state_33418;
(statearr_33483[(31)] = inst_33404);

return statearr_33483;
})();
if(inst_33405){
var statearr_33484_33545 = state_33418__$1;
(statearr_33484_33545[(1)] = (42));

} else {
var statearr_33485_33546 = state_33418__$1;
(statearr_33485_33546[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (16))){
var inst_33317 = (state_33418[(7)]);
var inst_33319 = cljs.core.chunked_seq_QMARK_.call(null,inst_33317);
var state_33418__$1 = state_33418;
if(inst_33319){
var statearr_33486_33547 = state_33418__$1;
(statearr_33486_33547[(1)] = (19));

} else {
var statearr_33487_33548 = state_33418__$1;
(statearr_33487_33548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (38))){
var inst_33397 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33488_33549 = state_33418__$1;
(statearr_33488_33549[(2)] = inst_33397);

(statearr_33488_33549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (30))){
var state_33418__$1 = state_33418;
var statearr_33489_33550 = state_33418__$1;
(statearr_33489_33550[(2)] = null);

(statearr_33489_33550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (10))){
var inst_33298 = (state_33418[(13)]);
var inst_33296 = (state_33418[(17)]);
var inst_33306 = cljs.core._nth.call(null,inst_33296,inst_33298);
var inst_33307 = cljs.core.nth.call(null,inst_33306,(0),null);
var inst_33308 = cljs.core.nth.call(null,inst_33306,(1),null);
var state_33418__$1 = (function (){var statearr_33490 = state_33418;
(statearr_33490[(26)] = inst_33307);

return statearr_33490;
})();
if(cljs.core.truth_(inst_33308)){
var statearr_33491_33551 = state_33418__$1;
(statearr_33491_33551[(1)] = (13));

} else {
var statearr_33492_33552 = state_33418__$1;
(statearr_33492_33552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (18))){
var inst_33343 = (state_33418[(2)]);
var state_33418__$1 = state_33418;
var statearr_33493_33553 = state_33418__$1;
(statearr_33493_33553[(2)] = inst_33343);

(statearr_33493_33553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (42))){
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33418__$1,(45),dchan);
} else {
if((state_val_33419 === (37))){
var inst_33386 = (state_33418[(23)]);
var inst_33377 = (state_33418[(25)]);
var inst_33286 = (state_33418[(11)]);
var inst_33386__$1 = cljs.core.first.call(null,inst_33377);
var inst_33387 = cljs.core.async.put_BANG_.call(null,inst_33386__$1,inst_33286,done);
var state_33418__$1 = (function (){var statearr_33494 = state_33418;
(statearr_33494[(23)] = inst_33386__$1);

return statearr_33494;
})();
if(cljs.core.truth_(inst_33387)){
var statearr_33495_33554 = state_33418__$1;
(statearr_33495_33554[(1)] = (39));

} else {
var statearr_33496_33555 = state_33418__$1;
(statearr_33496_33555[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33419 === (8))){
var inst_33298 = (state_33418[(13)]);
var inst_33297 = (state_33418[(16)]);
var inst_33300 = (inst_33298 < inst_33297);
var inst_33301 = inst_33300;
var state_33418__$1 = state_33418;
if(cljs.core.truth_(inst_33301)){
var statearr_33497_33556 = state_33418__$1;
(statearr_33497_33556[(1)] = (10));

} else {
var statearr_33498_33557 = state_33418__$1;
(statearr_33498_33557[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___33503,cs,m,dchan,dctr,done))
;
return ((function (switch__32590__auto__,c__32685__auto___33503,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32591__auto__ = null;
var cljs$core$async$mult_$_state_machine__32591__auto____0 = (function (){
var statearr_33499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33499[(0)] = cljs$core$async$mult_$_state_machine__32591__auto__);

(statearr_33499[(1)] = (1));

return statearr_33499;
});
var cljs$core$async$mult_$_state_machine__32591__auto____1 = (function (state_33418){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33500){if((e33500 instanceof Object)){
var ex__32594__auto__ = e33500;
var statearr_33501_33558 = state_33418;
(statearr_33501_33558[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33559 = state_33418;
state_33418 = G__33559;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32591__auto__ = function(state_33418){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32591__auto____1.call(this,state_33418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32591__auto____0;
cljs$core$async$mult_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32591__auto____1;
return cljs$core$async$mult_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___33503,cs,m,dchan,dctr,done))
})();
var state__32687__auto__ = (function (){var statearr_33502 = f__32686__auto__.call(null);
(statearr_33502[(6)] = c__32685__auto___33503);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___33503,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33561 = arguments.length;
switch (G__33561) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33573 = arguments.length;
var i__4731__auto___33574 = (0);
while(true){
if((i__4731__auto___33574 < len__4730__auto___33573)){
args__4736__auto__.push((arguments[i__4731__auto___33574]));

var G__33575 = (i__4731__auto___33574 + (1));
i__4731__auto___33574 = G__33575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33567){
var map__33568 = p__33567;
var map__33568__$1 = (((((!((map__33568 == null))))?(((((map__33568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33568):map__33568);
var opts = map__33568__$1;
var statearr_33570_33576 = state;
(statearr_33570_33576[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33568,map__33568__$1,opts){
return (function (val){
var statearr_33571_33577 = state;
(statearr_33571_33577[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33568,map__33568__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33572_33578 = state;
(statearr_33572_33578[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33563){
var G__33564 = cljs.core.first.call(null,seq33563);
var seq33563__$1 = cljs.core.next.call(null,seq33563);
var G__33565 = cljs.core.first.call(null,seq33563__$1);
var seq33563__$2 = cljs.core.next.call(null,seq33563__$1);
var G__33566 = cljs.core.first.call(null,seq33563__$2);
var seq33563__$3 = cljs.core.next.call(null,seq33563__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33564,G__33565,G__33566,seq33563__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33579 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33580){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33580 = meta33580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33581,meta33580__$1){
var self__ = this;
var _33581__$1 = this;
return (new cljs.core.async.t_cljs$core$async33579(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33580__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33581){
var self__ = this;
var _33581__$1 = this;
return self__.meta33580;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33580","meta33580",1600443228,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33579";

cljs.core.async.t_cljs$core$async33579.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33579");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33579.
 */
cljs.core.async.__GT_t_cljs$core$async33579 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33579(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33580){
return (new cljs.core.async.t_cljs$core$async33579(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33580));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33579(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32685__auto___33743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___33743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___33743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33683){
var state_val_33684 = (state_33683[(1)]);
if((state_val_33684 === (7))){
var inst_33598 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33685_33744 = state_33683__$1;
(statearr_33685_33744[(2)] = inst_33598);

(statearr_33685_33744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (20))){
var inst_33610 = (state_33683[(7)]);
var state_33683__$1 = state_33683;
var statearr_33686_33745 = state_33683__$1;
(statearr_33686_33745[(2)] = inst_33610);

(statearr_33686_33745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (27))){
var state_33683__$1 = state_33683;
var statearr_33687_33746 = state_33683__$1;
(statearr_33687_33746[(2)] = null);

(statearr_33687_33746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (1))){
var inst_33585 = (state_33683[(8)]);
var inst_33585__$1 = calc_state.call(null);
var inst_33587 = (inst_33585__$1 == null);
var inst_33588 = cljs.core.not.call(null,inst_33587);
var state_33683__$1 = (function (){var statearr_33688 = state_33683;
(statearr_33688[(8)] = inst_33585__$1);

return statearr_33688;
})();
if(inst_33588){
var statearr_33689_33747 = state_33683__$1;
(statearr_33689_33747[(1)] = (2));

} else {
var statearr_33690_33748 = state_33683__$1;
(statearr_33690_33748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (24))){
var inst_33643 = (state_33683[(9)]);
var inst_33657 = (state_33683[(10)]);
var inst_33634 = (state_33683[(11)]);
var inst_33657__$1 = inst_33634.call(null,inst_33643);
var state_33683__$1 = (function (){var statearr_33691 = state_33683;
(statearr_33691[(10)] = inst_33657__$1);

return statearr_33691;
})();
if(cljs.core.truth_(inst_33657__$1)){
var statearr_33692_33749 = state_33683__$1;
(statearr_33692_33749[(1)] = (29));

} else {
var statearr_33693_33750 = state_33683__$1;
(statearr_33693_33750[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (4))){
var inst_33601 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33601)){
var statearr_33694_33751 = state_33683__$1;
(statearr_33694_33751[(1)] = (8));

} else {
var statearr_33695_33752 = state_33683__$1;
(statearr_33695_33752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (15))){
var inst_33628 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33628)){
var statearr_33696_33753 = state_33683__$1;
(statearr_33696_33753[(1)] = (19));

} else {
var statearr_33697_33754 = state_33683__$1;
(statearr_33697_33754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (21))){
var inst_33633 = (state_33683[(12)]);
var inst_33633__$1 = (state_33683[(2)]);
var inst_33634 = cljs.core.get.call(null,inst_33633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33635 = cljs.core.get.call(null,inst_33633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33636 = cljs.core.get.call(null,inst_33633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33683__$1 = (function (){var statearr_33698 = state_33683;
(statearr_33698[(13)] = inst_33635);

(statearr_33698[(12)] = inst_33633__$1);

(statearr_33698[(11)] = inst_33634);

return statearr_33698;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33683__$1,(22),inst_33636);
} else {
if((state_val_33684 === (31))){
var inst_33665 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33665)){
var statearr_33699_33755 = state_33683__$1;
(statearr_33699_33755[(1)] = (32));

} else {
var statearr_33700_33756 = state_33683__$1;
(statearr_33700_33756[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (32))){
var inst_33642 = (state_33683[(14)]);
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33683__$1,(35),out,inst_33642);
} else {
if((state_val_33684 === (33))){
var inst_33633 = (state_33683[(12)]);
var inst_33610 = inst_33633;
var state_33683__$1 = (function (){var statearr_33701 = state_33683;
(statearr_33701[(7)] = inst_33610);

return statearr_33701;
})();
var statearr_33702_33757 = state_33683__$1;
(statearr_33702_33757[(2)] = null);

(statearr_33702_33757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (13))){
var inst_33610 = (state_33683[(7)]);
var inst_33617 = inst_33610.cljs$lang$protocol_mask$partition0$;
var inst_33618 = (inst_33617 & (64));
var inst_33619 = inst_33610.cljs$core$ISeq$;
var inst_33620 = (cljs.core.PROTOCOL_SENTINEL === inst_33619);
var inst_33621 = ((inst_33618) || (inst_33620));
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33621)){
var statearr_33703_33758 = state_33683__$1;
(statearr_33703_33758[(1)] = (16));

} else {
var statearr_33704_33759 = state_33683__$1;
(statearr_33704_33759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (22))){
var inst_33643 = (state_33683[(9)]);
var inst_33642 = (state_33683[(14)]);
var inst_33641 = (state_33683[(2)]);
var inst_33642__$1 = cljs.core.nth.call(null,inst_33641,(0),null);
var inst_33643__$1 = cljs.core.nth.call(null,inst_33641,(1),null);
var inst_33644 = (inst_33642__$1 == null);
var inst_33645 = cljs.core._EQ_.call(null,inst_33643__$1,change);
var inst_33646 = ((inst_33644) || (inst_33645));
var state_33683__$1 = (function (){var statearr_33705 = state_33683;
(statearr_33705[(9)] = inst_33643__$1);

(statearr_33705[(14)] = inst_33642__$1);

return statearr_33705;
})();
if(cljs.core.truth_(inst_33646)){
var statearr_33706_33760 = state_33683__$1;
(statearr_33706_33760[(1)] = (23));

} else {
var statearr_33707_33761 = state_33683__$1;
(statearr_33707_33761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (36))){
var inst_33633 = (state_33683[(12)]);
var inst_33610 = inst_33633;
var state_33683__$1 = (function (){var statearr_33708 = state_33683;
(statearr_33708[(7)] = inst_33610);

return statearr_33708;
})();
var statearr_33709_33762 = state_33683__$1;
(statearr_33709_33762[(2)] = null);

(statearr_33709_33762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (29))){
var inst_33657 = (state_33683[(10)]);
var state_33683__$1 = state_33683;
var statearr_33710_33763 = state_33683__$1;
(statearr_33710_33763[(2)] = inst_33657);

(statearr_33710_33763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (6))){
var state_33683__$1 = state_33683;
var statearr_33711_33764 = state_33683__$1;
(statearr_33711_33764[(2)] = false);

(statearr_33711_33764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (28))){
var inst_33653 = (state_33683[(2)]);
var inst_33654 = calc_state.call(null);
var inst_33610 = inst_33654;
var state_33683__$1 = (function (){var statearr_33712 = state_33683;
(statearr_33712[(7)] = inst_33610);

(statearr_33712[(15)] = inst_33653);

return statearr_33712;
})();
var statearr_33713_33765 = state_33683__$1;
(statearr_33713_33765[(2)] = null);

(statearr_33713_33765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (25))){
var inst_33679 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33714_33766 = state_33683__$1;
(statearr_33714_33766[(2)] = inst_33679);

(statearr_33714_33766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (34))){
var inst_33677 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33715_33767 = state_33683__$1;
(statearr_33715_33767[(2)] = inst_33677);

(statearr_33715_33767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (17))){
var state_33683__$1 = state_33683;
var statearr_33716_33768 = state_33683__$1;
(statearr_33716_33768[(2)] = false);

(statearr_33716_33768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (3))){
var state_33683__$1 = state_33683;
var statearr_33717_33769 = state_33683__$1;
(statearr_33717_33769[(2)] = false);

(statearr_33717_33769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (12))){
var inst_33681 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33683__$1,inst_33681);
} else {
if((state_val_33684 === (2))){
var inst_33585 = (state_33683[(8)]);
var inst_33590 = inst_33585.cljs$lang$protocol_mask$partition0$;
var inst_33591 = (inst_33590 & (64));
var inst_33592 = inst_33585.cljs$core$ISeq$;
var inst_33593 = (cljs.core.PROTOCOL_SENTINEL === inst_33592);
var inst_33594 = ((inst_33591) || (inst_33593));
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33594)){
var statearr_33718_33770 = state_33683__$1;
(statearr_33718_33770[(1)] = (5));

} else {
var statearr_33719_33771 = state_33683__$1;
(statearr_33719_33771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (23))){
var inst_33642 = (state_33683[(14)]);
var inst_33648 = (inst_33642 == null);
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33648)){
var statearr_33720_33772 = state_33683__$1;
(statearr_33720_33772[(1)] = (26));

} else {
var statearr_33721_33773 = state_33683__$1;
(statearr_33721_33773[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (35))){
var inst_33668 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33668)){
var statearr_33722_33774 = state_33683__$1;
(statearr_33722_33774[(1)] = (36));

} else {
var statearr_33723_33775 = state_33683__$1;
(statearr_33723_33775[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (19))){
var inst_33610 = (state_33683[(7)]);
var inst_33630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33610);
var state_33683__$1 = state_33683;
var statearr_33724_33776 = state_33683__$1;
(statearr_33724_33776[(2)] = inst_33630);

(statearr_33724_33776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (11))){
var inst_33610 = (state_33683[(7)]);
var inst_33614 = (inst_33610 == null);
var inst_33615 = cljs.core.not.call(null,inst_33614);
var state_33683__$1 = state_33683;
if(inst_33615){
var statearr_33725_33777 = state_33683__$1;
(statearr_33725_33777[(1)] = (13));

} else {
var statearr_33726_33778 = state_33683__$1;
(statearr_33726_33778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (9))){
var inst_33585 = (state_33683[(8)]);
var state_33683__$1 = state_33683;
var statearr_33727_33779 = state_33683__$1;
(statearr_33727_33779[(2)] = inst_33585);

(statearr_33727_33779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (5))){
var state_33683__$1 = state_33683;
var statearr_33728_33780 = state_33683__$1;
(statearr_33728_33780[(2)] = true);

(statearr_33728_33780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (14))){
var state_33683__$1 = state_33683;
var statearr_33729_33781 = state_33683__$1;
(statearr_33729_33781[(2)] = false);

(statearr_33729_33781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (26))){
var inst_33643 = (state_33683[(9)]);
var inst_33650 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33643);
var state_33683__$1 = state_33683;
var statearr_33730_33782 = state_33683__$1;
(statearr_33730_33782[(2)] = inst_33650);

(statearr_33730_33782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (16))){
var state_33683__$1 = state_33683;
var statearr_33731_33783 = state_33683__$1;
(statearr_33731_33783[(2)] = true);

(statearr_33731_33783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (38))){
var inst_33673 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33732_33784 = state_33683__$1;
(statearr_33732_33784[(2)] = inst_33673);

(statearr_33732_33784[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (30))){
var inst_33635 = (state_33683[(13)]);
var inst_33643 = (state_33683[(9)]);
var inst_33634 = (state_33683[(11)]);
var inst_33660 = cljs.core.empty_QMARK_.call(null,inst_33634);
var inst_33661 = inst_33635.call(null,inst_33643);
var inst_33662 = cljs.core.not.call(null,inst_33661);
var inst_33663 = ((inst_33660) && (inst_33662));
var state_33683__$1 = state_33683;
var statearr_33733_33785 = state_33683__$1;
(statearr_33733_33785[(2)] = inst_33663);

(statearr_33733_33785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (10))){
var inst_33585 = (state_33683[(8)]);
var inst_33606 = (state_33683[(2)]);
var inst_33607 = cljs.core.get.call(null,inst_33606,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33608 = cljs.core.get.call(null,inst_33606,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33609 = cljs.core.get.call(null,inst_33606,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33610 = inst_33585;
var state_33683__$1 = (function (){var statearr_33734 = state_33683;
(statearr_33734[(7)] = inst_33610);

(statearr_33734[(16)] = inst_33609);

(statearr_33734[(17)] = inst_33608);

(statearr_33734[(18)] = inst_33607);

return statearr_33734;
})();
var statearr_33735_33786 = state_33683__$1;
(statearr_33735_33786[(2)] = null);

(statearr_33735_33786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (18))){
var inst_33625 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33736_33787 = state_33683__$1;
(statearr_33736_33787[(2)] = inst_33625);

(statearr_33736_33787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (37))){
var state_33683__$1 = state_33683;
var statearr_33737_33788 = state_33683__$1;
(statearr_33737_33788[(2)] = null);

(statearr_33737_33788[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (8))){
var inst_33585 = (state_33683[(8)]);
var inst_33603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33585);
var state_33683__$1 = state_33683;
var statearr_33738_33789 = state_33683__$1;
(statearr_33738_33789[(2)] = inst_33603);

(statearr_33738_33789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___33743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32590__auto__,c__32685__auto___33743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32591__auto__ = null;
var cljs$core$async$mix_$_state_machine__32591__auto____0 = (function (){
var statearr_33739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33739[(0)] = cljs$core$async$mix_$_state_machine__32591__auto__);

(statearr_33739[(1)] = (1));

return statearr_33739;
});
var cljs$core$async$mix_$_state_machine__32591__auto____1 = (function (state_33683){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33740){if((e33740 instanceof Object)){
var ex__32594__auto__ = e33740;
var statearr_33741_33790 = state_33683;
(statearr_33741_33790[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33791 = state_33683;
state_33683 = G__33791;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32591__auto__ = function(state_33683){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32591__auto____1.call(this,state_33683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32591__auto____0;
cljs$core$async$mix_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32591__auto____1;
return cljs$core$async$mix_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___33743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32687__auto__ = (function (){var statearr_33742 = f__32686__auto__.call(null);
(statearr_33742[(6)] = c__32685__auto___33743);

return statearr_33742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___33743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33793 = arguments.length;
switch (G__33793) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33797 = arguments.length;
switch (G__33797) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__33795_SHARP_){
if(cljs.core.truth_(p1__33795_SHARP_.call(null,topic))){
return p1__33795_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33795_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33798 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33799){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33799 = meta33799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33800,meta33799__$1){
var self__ = this;
var _33800__$1 = this;
return (new cljs.core.async.t_cljs$core$async33798(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33799__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33800){
var self__ = this;
var _33800__$1 = this;
return self__.meta33799;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33799","meta33799",-970235967,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33798";

cljs.core.async.t_cljs$core$async33798.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33798");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33798.
 */
cljs.core.async.__GT_t_cljs$core$async33798 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33799){
return (new cljs.core.async.t_cljs$core$async33798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33799));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33798(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32685__auto___33918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___33918,mults,ensure_mult,p){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___33918,mults,ensure_mult,p){
return (function (state_33872){
var state_val_33873 = (state_33872[(1)]);
if((state_val_33873 === (7))){
var inst_33868 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33874_33919 = state_33872__$1;
(statearr_33874_33919[(2)] = inst_33868);

(statearr_33874_33919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (20))){
var state_33872__$1 = state_33872;
var statearr_33875_33920 = state_33872__$1;
(statearr_33875_33920[(2)] = null);

(statearr_33875_33920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (1))){
var state_33872__$1 = state_33872;
var statearr_33876_33921 = state_33872__$1;
(statearr_33876_33921[(2)] = null);

(statearr_33876_33921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (24))){
var inst_33851 = (state_33872[(7)]);
var inst_33860 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33851);
var state_33872__$1 = state_33872;
var statearr_33877_33922 = state_33872__$1;
(statearr_33877_33922[(2)] = inst_33860);

(statearr_33877_33922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (4))){
var inst_33803 = (state_33872[(8)]);
var inst_33803__$1 = (state_33872[(2)]);
var inst_33804 = (inst_33803__$1 == null);
var state_33872__$1 = (function (){var statearr_33878 = state_33872;
(statearr_33878[(8)] = inst_33803__$1);

return statearr_33878;
})();
if(cljs.core.truth_(inst_33804)){
var statearr_33879_33923 = state_33872__$1;
(statearr_33879_33923[(1)] = (5));

} else {
var statearr_33880_33924 = state_33872__$1;
(statearr_33880_33924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (15))){
var inst_33845 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33881_33925 = state_33872__$1;
(statearr_33881_33925[(2)] = inst_33845);

(statearr_33881_33925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (21))){
var inst_33865 = (state_33872[(2)]);
var state_33872__$1 = (function (){var statearr_33882 = state_33872;
(statearr_33882[(9)] = inst_33865);

return statearr_33882;
})();
var statearr_33883_33926 = state_33872__$1;
(statearr_33883_33926[(2)] = null);

(statearr_33883_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (13))){
var inst_33827 = (state_33872[(10)]);
var inst_33829 = cljs.core.chunked_seq_QMARK_.call(null,inst_33827);
var state_33872__$1 = state_33872;
if(inst_33829){
var statearr_33884_33927 = state_33872__$1;
(statearr_33884_33927[(1)] = (16));

} else {
var statearr_33885_33928 = state_33872__$1;
(statearr_33885_33928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (22))){
var inst_33857 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
if(cljs.core.truth_(inst_33857)){
var statearr_33886_33929 = state_33872__$1;
(statearr_33886_33929[(1)] = (23));

} else {
var statearr_33887_33930 = state_33872__$1;
(statearr_33887_33930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (6))){
var inst_33853 = (state_33872[(11)]);
var inst_33851 = (state_33872[(7)]);
var inst_33803 = (state_33872[(8)]);
var inst_33851__$1 = topic_fn.call(null,inst_33803);
var inst_33852 = cljs.core.deref.call(null,mults);
var inst_33853__$1 = cljs.core.get.call(null,inst_33852,inst_33851__$1);
var state_33872__$1 = (function (){var statearr_33888 = state_33872;
(statearr_33888[(11)] = inst_33853__$1);

(statearr_33888[(7)] = inst_33851__$1);

return statearr_33888;
})();
if(cljs.core.truth_(inst_33853__$1)){
var statearr_33889_33931 = state_33872__$1;
(statearr_33889_33931[(1)] = (19));

} else {
var statearr_33890_33932 = state_33872__$1;
(statearr_33890_33932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (25))){
var inst_33862 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33891_33933 = state_33872__$1;
(statearr_33891_33933[(2)] = inst_33862);

(statearr_33891_33933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (17))){
var inst_33827 = (state_33872[(10)]);
var inst_33836 = cljs.core.first.call(null,inst_33827);
var inst_33837 = cljs.core.async.muxch_STAR_.call(null,inst_33836);
var inst_33838 = cljs.core.async.close_BANG_.call(null,inst_33837);
var inst_33839 = cljs.core.next.call(null,inst_33827);
var inst_33813 = inst_33839;
var inst_33814 = null;
var inst_33815 = (0);
var inst_33816 = (0);
var state_33872__$1 = (function (){var statearr_33892 = state_33872;
(statearr_33892[(12)] = inst_33816);

(statearr_33892[(13)] = inst_33813);

(statearr_33892[(14)] = inst_33838);

(statearr_33892[(15)] = inst_33815);

(statearr_33892[(16)] = inst_33814);

return statearr_33892;
})();
var statearr_33893_33934 = state_33872__$1;
(statearr_33893_33934[(2)] = null);

(statearr_33893_33934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (3))){
var inst_33870 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33872__$1,inst_33870);
} else {
if((state_val_33873 === (12))){
var inst_33847 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33894_33935 = state_33872__$1;
(statearr_33894_33935[(2)] = inst_33847);

(statearr_33894_33935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (2))){
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33872__$1,(4),ch);
} else {
if((state_val_33873 === (23))){
var state_33872__$1 = state_33872;
var statearr_33895_33936 = state_33872__$1;
(statearr_33895_33936[(2)] = null);

(statearr_33895_33936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (19))){
var inst_33853 = (state_33872[(11)]);
var inst_33803 = (state_33872[(8)]);
var inst_33855 = cljs.core.async.muxch_STAR_.call(null,inst_33853);
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33872__$1,(22),inst_33855,inst_33803);
} else {
if((state_val_33873 === (11))){
var inst_33827 = (state_33872[(10)]);
var inst_33813 = (state_33872[(13)]);
var inst_33827__$1 = cljs.core.seq.call(null,inst_33813);
var state_33872__$1 = (function (){var statearr_33896 = state_33872;
(statearr_33896[(10)] = inst_33827__$1);

return statearr_33896;
})();
if(inst_33827__$1){
var statearr_33897_33937 = state_33872__$1;
(statearr_33897_33937[(1)] = (13));

} else {
var statearr_33898_33938 = state_33872__$1;
(statearr_33898_33938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (9))){
var inst_33849 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33899_33939 = state_33872__$1;
(statearr_33899_33939[(2)] = inst_33849);

(statearr_33899_33939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (5))){
var inst_33810 = cljs.core.deref.call(null,mults);
var inst_33811 = cljs.core.vals.call(null,inst_33810);
var inst_33812 = cljs.core.seq.call(null,inst_33811);
var inst_33813 = inst_33812;
var inst_33814 = null;
var inst_33815 = (0);
var inst_33816 = (0);
var state_33872__$1 = (function (){var statearr_33900 = state_33872;
(statearr_33900[(12)] = inst_33816);

(statearr_33900[(13)] = inst_33813);

(statearr_33900[(15)] = inst_33815);

(statearr_33900[(16)] = inst_33814);

return statearr_33900;
})();
var statearr_33901_33940 = state_33872__$1;
(statearr_33901_33940[(2)] = null);

(statearr_33901_33940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (14))){
var state_33872__$1 = state_33872;
var statearr_33905_33941 = state_33872__$1;
(statearr_33905_33941[(2)] = null);

(statearr_33905_33941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (16))){
var inst_33827 = (state_33872[(10)]);
var inst_33831 = cljs.core.chunk_first.call(null,inst_33827);
var inst_33832 = cljs.core.chunk_rest.call(null,inst_33827);
var inst_33833 = cljs.core.count.call(null,inst_33831);
var inst_33813 = inst_33832;
var inst_33814 = inst_33831;
var inst_33815 = inst_33833;
var inst_33816 = (0);
var state_33872__$1 = (function (){var statearr_33906 = state_33872;
(statearr_33906[(12)] = inst_33816);

(statearr_33906[(13)] = inst_33813);

(statearr_33906[(15)] = inst_33815);

(statearr_33906[(16)] = inst_33814);

return statearr_33906;
})();
var statearr_33907_33942 = state_33872__$1;
(statearr_33907_33942[(2)] = null);

(statearr_33907_33942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (10))){
var inst_33816 = (state_33872[(12)]);
var inst_33813 = (state_33872[(13)]);
var inst_33815 = (state_33872[(15)]);
var inst_33814 = (state_33872[(16)]);
var inst_33821 = cljs.core._nth.call(null,inst_33814,inst_33816);
var inst_33822 = cljs.core.async.muxch_STAR_.call(null,inst_33821);
var inst_33823 = cljs.core.async.close_BANG_.call(null,inst_33822);
var inst_33824 = (inst_33816 + (1));
var tmp33902 = inst_33813;
var tmp33903 = inst_33815;
var tmp33904 = inst_33814;
var inst_33813__$1 = tmp33902;
var inst_33814__$1 = tmp33904;
var inst_33815__$1 = tmp33903;
var inst_33816__$1 = inst_33824;
var state_33872__$1 = (function (){var statearr_33908 = state_33872;
(statearr_33908[(12)] = inst_33816__$1);

(statearr_33908[(17)] = inst_33823);

(statearr_33908[(13)] = inst_33813__$1);

(statearr_33908[(15)] = inst_33815__$1);

(statearr_33908[(16)] = inst_33814__$1);

return statearr_33908;
})();
var statearr_33909_33943 = state_33872__$1;
(statearr_33909_33943[(2)] = null);

(statearr_33909_33943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (18))){
var inst_33842 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33910_33944 = state_33872__$1;
(statearr_33910_33944[(2)] = inst_33842);

(statearr_33910_33944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (8))){
var inst_33816 = (state_33872[(12)]);
var inst_33815 = (state_33872[(15)]);
var inst_33818 = (inst_33816 < inst_33815);
var inst_33819 = inst_33818;
var state_33872__$1 = state_33872;
if(cljs.core.truth_(inst_33819)){
var statearr_33911_33945 = state_33872__$1;
(statearr_33911_33945[(1)] = (10));

} else {
var statearr_33912_33946 = state_33872__$1;
(statearr_33912_33946[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___33918,mults,ensure_mult,p))
;
return ((function (switch__32590__auto__,c__32685__auto___33918,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_33913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33913[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_33913[(1)] = (1));

return statearr_33913;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_33872){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e33914){if((e33914 instanceof Object)){
var ex__32594__auto__ = e33914;
var statearr_33915_33947 = state_33872;
(statearr_33915_33947[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33948 = state_33872;
state_33872 = G__33948;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_33872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_33872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___33918,mults,ensure_mult,p))
})();
var state__32687__auto__ = (function (){var statearr_33916 = f__32686__auto__.call(null);
(statearr_33916[(6)] = c__32685__auto___33918);

return statearr_33916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___33918,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33950 = arguments.length;
switch (G__33950) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33953 = arguments.length;
switch (G__33953) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33956 = arguments.length;
switch (G__33956) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32685__auto___34023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33995){
var state_val_33996 = (state_33995[(1)]);
if((state_val_33996 === (7))){
var state_33995__$1 = state_33995;
var statearr_33997_34024 = state_33995__$1;
(statearr_33997_34024[(2)] = null);

(statearr_33997_34024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (1))){
var state_33995__$1 = state_33995;
var statearr_33998_34025 = state_33995__$1;
(statearr_33998_34025[(2)] = null);

(statearr_33998_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (4))){
var inst_33959 = (state_33995[(7)]);
var inst_33961 = (inst_33959 < cnt);
var state_33995__$1 = state_33995;
if(cljs.core.truth_(inst_33961)){
var statearr_33999_34026 = state_33995__$1;
(statearr_33999_34026[(1)] = (6));

} else {
var statearr_34000_34027 = state_33995__$1;
(statearr_34000_34027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (15))){
var inst_33991 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34001_34028 = state_33995__$1;
(statearr_34001_34028[(2)] = inst_33991);

(statearr_34001_34028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (13))){
var inst_33984 = cljs.core.async.close_BANG_.call(null,out);
var state_33995__$1 = state_33995;
var statearr_34002_34029 = state_33995__$1;
(statearr_34002_34029[(2)] = inst_33984);

(statearr_34002_34029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (6))){
var state_33995__$1 = state_33995;
var statearr_34003_34030 = state_33995__$1;
(statearr_34003_34030[(2)] = null);

(statearr_34003_34030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (3))){
var inst_33993 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33995__$1,inst_33993);
} else {
if((state_val_33996 === (12))){
var inst_33981 = (state_33995[(8)]);
var inst_33981__$1 = (state_33995[(2)]);
var inst_33982 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33981__$1);
var state_33995__$1 = (function (){var statearr_34004 = state_33995;
(statearr_34004[(8)] = inst_33981__$1);

return statearr_34004;
})();
if(cljs.core.truth_(inst_33982)){
var statearr_34005_34031 = state_33995__$1;
(statearr_34005_34031[(1)] = (13));

} else {
var statearr_34006_34032 = state_33995__$1;
(statearr_34006_34032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (2))){
var inst_33958 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33959 = (0);
var state_33995__$1 = (function (){var statearr_34007 = state_33995;
(statearr_34007[(9)] = inst_33958);

(statearr_34007[(7)] = inst_33959);

return statearr_34007;
})();
var statearr_34008_34033 = state_33995__$1;
(statearr_34008_34033[(2)] = null);

(statearr_34008_34033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (11))){
var inst_33959 = (state_33995[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33995,(10),Object,null,(9));
var inst_33968 = chs__$1.call(null,inst_33959);
var inst_33969 = done.call(null,inst_33959);
var inst_33970 = cljs.core.async.take_BANG_.call(null,inst_33968,inst_33969);
var state_33995__$1 = state_33995;
var statearr_34009_34034 = state_33995__$1;
(statearr_34009_34034[(2)] = inst_33970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (9))){
var inst_33959 = (state_33995[(7)]);
var inst_33972 = (state_33995[(2)]);
var inst_33973 = (inst_33959 + (1));
var inst_33959__$1 = inst_33973;
var state_33995__$1 = (function (){var statearr_34010 = state_33995;
(statearr_34010[(7)] = inst_33959__$1);

(statearr_34010[(10)] = inst_33972);

return statearr_34010;
})();
var statearr_34011_34035 = state_33995__$1;
(statearr_34011_34035[(2)] = null);

(statearr_34011_34035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (5))){
var inst_33979 = (state_33995[(2)]);
var state_33995__$1 = (function (){var statearr_34012 = state_33995;
(statearr_34012[(11)] = inst_33979);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33995__$1,(12),dchan);
} else {
if((state_val_33996 === (14))){
var inst_33981 = (state_33995[(8)]);
var inst_33986 = cljs.core.apply.call(null,f,inst_33981);
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33995__$1,(16),out,inst_33986);
} else {
if((state_val_33996 === (16))){
var inst_33988 = (state_33995[(2)]);
var state_33995__$1 = (function (){var statearr_34013 = state_33995;
(statearr_34013[(12)] = inst_33988);

return statearr_34013;
})();
var statearr_34014_34036 = state_33995__$1;
(statearr_34014_34036[(2)] = null);

(statearr_34014_34036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (10))){
var inst_33963 = (state_33995[(2)]);
var inst_33964 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33995__$1 = (function (){var statearr_34015 = state_33995;
(statearr_34015[(13)] = inst_33963);

return statearr_34015;
})();
var statearr_34016_34037 = state_33995__$1;
(statearr_34016_34037[(2)] = inst_33964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (8))){
var inst_33977 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34017_34038 = state_33995__$1;
(statearr_34017_34038[(2)] = inst_33977);

(statearr_34017_34038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___34023,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32590__auto__,c__32685__auto___34023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_34018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34018[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_34018[(1)] = (1));

return statearr_34018;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_33995){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_33995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34019){if((e34019 instanceof Object)){
var ex__32594__auto__ = e34019;
var statearr_34020_34039 = state_33995;
(statearr_34020_34039[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34040 = state_33995;
state_33995 = G__34040;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_33995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_33995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32687__auto__ = (function (){var statearr_34021 = f__32686__auto__.call(null);
(statearr_34021[(6)] = c__32685__auto___34023);

return statearr_34021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34023,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34043 = arguments.length;
switch (G__34043) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32685__auto___34097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34097,out){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34097,out){
return (function (state_34075){
var state_val_34076 = (state_34075[(1)]);
if((state_val_34076 === (7))){
var inst_34055 = (state_34075[(7)]);
var inst_34054 = (state_34075[(8)]);
var inst_34054__$1 = (state_34075[(2)]);
var inst_34055__$1 = cljs.core.nth.call(null,inst_34054__$1,(0),null);
var inst_34056 = cljs.core.nth.call(null,inst_34054__$1,(1),null);
var inst_34057 = (inst_34055__$1 == null);
var state_34075__$1 = (function (){var statearr_34077 = state_34075;
(statearr_34077[(7)] = inst_34055__$1);

(statearr_34077[(8)] = inst_34054__$1);

(statearr_34077[(9)] = inst_34056);

return statearr_34077;
})();
if(cljs.core.truth_(inst_34057)){
var statearr_34078_34098 = state_34075__$1;
(statearr_34078_34098[(1)] = (8));

} else {
var statearr_34079_34099 = state_34075__$1;
(statearr_34079_34099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (1))){
var inst_34044 = cljs.core.vec.call(null,chs);
var inst_34045 = inst_34044;
var state_34075__$1 = (function (){var statearr_34080 = state_34075;
(statearr_34080[(10)] = inst_34045);

return statearr_34080;
})();
var statearr_34081_34100 = state_34075__$1;
(statearr_34081_34100[(2)] = null);

(statearr_34081_34100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (4))){
var inst_34045 = (state_34075[(10)]);
var state_34075__$1 = state_34075;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34075__$1,(7),inst_34045);
} else {
if((state_val_34076 === (6))){
var inst_34071 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
var statearr_34082_34101 = state_34075__$1;
(statearr_34082_34101[(2)] = inst_34071);

(statearr_34082_34101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (3))){
var inst_34073 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34075__$1,inst_34073);
} else {
if((state_val_34076 === (2))){
var inst_34045 = (state_34075[(10)]);
var inst_34047 = cljs.core.count.call(null,inst_34045);
var inst_34048 = (inst_34047 > (0));
var state_34075__$1 = state_34075;
if(cljs.core.truth_(inst_34048)){
var statearr_34084_34102 = state_34075__$1;
(statearr_34084_34102[(1)] = (4));

} else {
var statearr_34085_34103 = state_34075__$1;
(statearr_34085_34103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (11))){
var inst_34045 = (state_34075[(10)]);
var inst_34064 = (state_34075[(2)]);
var tmp34083 = inst_34045;
var inst_34045__$1 = tmp34083;
var state_34075__$1 = (function (){var statearr_34086 = state_34075;
(statearr_34086[(11)] = inst_34064);

(statearr_34086[(10)] = inst_34045__$1);

return statearr_34086;
})();
var statearr_34087_34104 = state_34075__$1;
(statearr_34087_34104[(2)] = null);

(statearr_34087_34104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (9))){
var inst_34055 = (state_34075[(7)]);
var state_34075__$1 = state_34075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34075__$1,(11),out,inst_34055);
} else {
if((state_val_34076 === (5))){
var inst_34069 = cljs.core.async.close_BANG_.call(null,out);
var state_34075__$1 = state_34075;
var statearr_34088_34105 = state_34075__$1;
(statearr_34088_34105[(2)] = inst_34069);

(statearr_34088_34105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (10))){
var inst_34067 = (state_34075[(2)]);
var state_34075__$1 = state_34075;
var statearr_34089_34106 = state_34075__$1;
(statearr_34089_34106[(2)] = inst_34067);

(statearr_34089_34106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34076 === (8))){
var inst_34055 = (state_34075[(7)]);
var inst_34054 = (state_34075[(8)]);
var inst_34045 = (state_34075[(10)]);
var inst_34056 = (state_34075[(9)]);
var inst_34059 = (function (){var cs = inst_34045;
var vec__34050 = inst_34054;
var v = inst_34055;
var c = inst_34056;
return ((function (cs,vec__34050,v,c,inst_34055,inst_34054,inst_34045,inst_34056,state_val_34076,c__32685__auto___34097,out){
return (function (p1__34041_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34041_SHARP_);
});
;})(cs,vec__34050,v,c,inst_34055,inst_34054,inst_34045,inst_34056,state_val_34076,c__32685__auto___34097,out))
})();
var inst_34060 = cljs.core.filterv.call(null,inst_34059,inst_34045);
var inst_34045__$1 = inst_34060;
var state_34075__$1 = (function (){var statearr_34090 = state_34075;
(statearr_34090[(10)] = inst_34045__$1);

return statearr_34090;
})();
var statearr_34091_34107 = state_34075__$1;
(statearr_34091_34107[(2)] = null);

(statearr_34091_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___34097,out))
;
return ((function (switch__32590__auto__,c__32685__auto___34097,out){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_34092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34092[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_34092[(1)] = (1));

return statearr_34092;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_34075){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34093){if((e34093 instanceof Object)){
var ex__32594__auto__ = e34093;
var statearr_34094_34108 = state_34075;
(statearr_34094_34108[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34109 = state_34075;
state_34075 = G__34109;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_34075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_34075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34097,out))
})();
var state__32687__auto__ = (function (){var statearr_34095 = f__32686__auto__.call(null);
(statearr_34095[(6)] = c__32685__auto___34097);

return statearr_34095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34097,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34111 = arguments.length;
switch (G__34111) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32685__auto___34156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34156,out){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34156,out){
return (function (state_34135){
var state_val_34136 = (state_34135[(1)]);
if((state_val_34136 === (7))){
var inst_34117 = (state_34135[(7)]);
var inst_34117__$1 = (state_34135[(2)]);
var inst_34118 = (inst_34117__$1 == null);
var inst_34119 = cljs.core.not.call(null,inst_34118);
var state_34135__$1 = (function (){var statearr_34137 = state_34135;
(statearr_34137[(7)] = inst_34117__$1);

return statearr_34137;
})();
if(inst_34119){
var statearr_34138_34157 = state_34135__$1;
(statearr_34138_34157[(1)] = (8));

} else {
var statearr_34139_34158 = state_34135__$1;
(statearr_34139_34158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (1))){
var inst_34112 = (0);
var state_34135__$1 = (function (){var statearr_34140 = state_34135;
(statearr_34140[(8)] = inst_34112);

return statearr_34140;
})();
var statearr_34141_34159 = state_34135__$1;
(statearr_34141_34159[(2)] = null);

(statearr_34141_34159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (4))){
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34135__$1,(7),ch);
} else {
if((state_val_34136 === (6))){
var inst_34130 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34142_34160 = state_34135__$1;
(statearr_34142_34160[(2)] = inst_34130);

(statearr_34142_34160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (3))){
var inst_34132 = (state_34135[(2)]);
var inst_34133 = cljs.core.async.close_BANG_.call(null,out);
var state_34135__$1 = (function (){var statearr_34143 = state_34135;
(statearr_34143[(9)] = inst_34132);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34135__$1,inst_34133);
} else {
if((state_val_34136 === (2))){
var inst_34112 = (state_34135[(8)]);
var inst_34114 = (inst_34112 < n);
var state_34135__$1 = state_34135;
if(cljs.core.truth_(inst_34114)){
var statearr_34144_34161 = state_34135__$1;
(statearr_34144_34161[(1)] = (4));

} else {
var statearr_34145_34162 = state_34135__$1;
(statearr_34145_34162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (11))){
var inst_34112 = (state_34135[(8)]);
var inst_34122 = (state_34135[(2)]);
var inst_34123 = (inst_34112 + (1));
var inst_34112__$1 = inst_34123;
var state_34135__$1 = (function (){var statearr_34146 = state_34135;
(statearr_34146[(10)] = inst_34122);

(statearr_34146[(8)] = inst_34112__$1);

return statearr_34146;
})();
var statearr_34147_34163 = state_34135__$1;
(statearr_34147_34163[(2)] = null);

(statearr_34147_34163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (9))){
var state_34135__$1 = state_34135;
var statearr_34148_34164 = state_34135__$1;
(statearr_34148_34164[(2)] = null);

(statearr_34148_34164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (5))){
var state_34135__$1 = state_34135;
var statearr_34149_34165 = state_34135__$1;
(statearr_34149_34165[(2)] = null);

(statearr_34149_34165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (10))){
var inst_34127 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34150_34166 = state_34135__$1;
(statearr_34150_34166[(2)] = inst_34127);

(statearr_34150_34166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (8))){
var inst_34117 = (state_34135[(7)]);
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34135__$1,(11),out,inst_34117);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___34156,out))
;
return ((function (switch__32590__auto__,c__32685__auto___34156,out){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_34151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34151[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_34151[(1)] = (1));

return statearr_34151;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_34135){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34152){if((e34152 instanceof Object)){
var ex__32594__auto__ = e34152;
var statearr_34153_34167 = state_34135;
(statearr_34153_34167[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34168 = state_34135;
state_34135 = G__34168;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_34135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_34135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34156,out))
})();
var state__32687__auto__ = (function (){var statearr_34154 = f__32686__auto__.call(null);
(statearr_34154[(6)] = c__32685__auto___34156);

return statearr_34154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34156,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34170 = (function (f,ch,meta34171){
this.f = f;
this.ch = ch;
this.meta34171 = meta34171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34172,meta34171__$1){
var self__ = this;
var _34172__$1 = this;
return (new cljs.core.async.t_cljs$core$async34170(self__.f,self__.ch,meta34171__$1));
});

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34172){
var self__ = this;
var _34172__$1 = this;
return self__.meta34171;
});

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34173 = (function (f,ch,meta34171,_,fn1,meta34174){
this.f = f;
this.ch = ch;
this.meta34171 = meta34171;
this._ = _;
this.fn1 = fn1;
this.meta34174 = meta34174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34175,meta34174__$1){
var self__ = this;
var _34175__$1 = this;
return (new cljs.core.async.t_cljs$core$async34173(self__.f,self__.ch,self__.meta34171,self__._,self__.fn1,meta34174__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34175){
var self__ = this;
var _34175__$1 = this;
return self__.meta34174;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34169_SHARP_){
return f1.call(null,(((p1__34169_SHARP_ == null))?null:self__.f.call(null,p1__34169_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34173.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34171","meta34171",2147128277,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34170","cljs.core.async/t_cljs$core$async34170",-73192141,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34174","meta34174",1589288616,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34173";

cljs.core.async.t_cljs$core$async34173.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34173");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34173.
 */
cljs.core.async.__GT_t_cljs$core$async34173 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34173(f__$1,ch__$1,meta34171__$1,___$2,fn1__$1,meta34174){
return (new cljs.core.async.t_cljs$core$async34173(f__$1,ch__$1,meta34171__$1,___$2,fn1__$1,meta34174));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34173(self__.f,self__.ch,self__.meta34171,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34171","meta34171",2147128277,null)], null);
});

cljs.core.async.t_cljs$core$async34170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34170";

cljs.core.async.t_cljs$core$async34170.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34170.
 */
cljs.core.async.__GT_t_cljs$core$async34170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34170(f__$1,ch__$1,meta34171){
return (new cljs.core.async.t_cljs$core$async34170(f__$1,ch__$1,meta34171));
});

}

return (new cljs.core.async.t_cljs$core$async34170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34176 = (function (f,ch,meta34177){
this.f = f;
this.ch = ch;
this.meta34177 = meta34177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34178,meta34177__$1){
var self__ = this;
var _34178__$1 = this;
return (new cljs.core.async.t_cljs$core$async34176(self__.f,self__.ch,meta34177__$1));
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34178){
var self__ = this;
var _34178__$1 = this;
return self__.meta34177;
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34177","meta34177",74067911,null)], null);
});

cljs.core.async.t_cljs$core$async34176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34176";

cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34176");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34176.
 */
cljs.core.async.__GT_t_cljs$core$async34176 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34176(f__$1,ch__$1,meta34177){
return (new cljs.core.async.t_cljs$core$async34176(f__$1,ch__$1,meta34177));
});

}

return (new cljs.core.async.t_cljs$core$async34176(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34179 = (function (p,ch,meta34180){
this.p = p;
this.ch = ch;
this.meta34180 = meta34180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34181,meta34180__$1){
var self__ = this;
var _34181__$1 = this;
return (new cljs.core.async.t_cljs$core$async34179(self__.p,self__.ch,meta34180__$1));
});

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34181){
var self__ = this;
var _34181__$1 = this;
return self__.meta34180;
});

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34180","meta34180",-636889419,null)], null);
});

cljs.core.async.t_cljs$core$async34179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34179";

cljs.core.async.t_cljs$core$async34179.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34179");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34179.
 */
cljs.core.async.__GT_t_cljs$core$async34179 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34179(p__$1,ch__$1,meta34180){
return (new cljs.core.async.t_cljs$core$async34179(p__$1,ch__$1,meta34180));
});

}

return (new cljs.core.async.t_cljs$core$async34179(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34183 = arguments.length;
switch (G__34183) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32685__auto___34223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34223,out){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34223,out){
return (function (state_34204){
var state_val_34205 = (state_34204[(1)]);
if((state_val_34205 === (7))){
var inst_34200 = (state_34204[(2)]);
var state_34204__$1 = state_34204;
var statearr_34206_34224 = state_34204__$1;
(statearr_34206_34224[(2)] = inst_34200);

(statearr_34206_34224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (1))){
var state_34204__$1 = state_34204;
var statearr_34207_34225 = state_34204__$1;
(statearr_34207_34225[(2)] = null);

(statearr_34207_34225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (4))){
var inst_34186 = (state_34204[(7)]);
var inst_34186__$1 = (state_34204[(2)]);
var inst_34187 = (inst_34186__$1 == null);
var state_34204__$1 = (function (){var statearr_34208 = state_34204;
(statearr_34208[(7)] = inst_34186__$1);

return statearr_34208;
})();
if(cljs.core.truth_(inst_34187)){
var statearr_34209_34226 = state_34204__$1;
(statearr_34209_34226[(1)] = (5));

} else {
var statearr_34210_34227 = state_34204__$1;
(statearr_34210_34227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (6))){
var inst_34186 = (state_34204[(7)]);
var inst_34191 = p.call(null,inst_34186);
var state_34204__$1 = state_34204;
if(cljs.core.truth_(inst_34191)){
var statearr_34211_34228 = state_34204__$1;
(statearr_34211_34228[(1)] = (8));

} else {
var statearr_34212_34229 = state_34204__$1;
(statearr_34212_34229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (3))){
var inst_34202 = (state_34204[(2)]);
var state_34204__$1 = state_34204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34204__$1,inst_34202);
} else {
if((state_val_34205 === (2))){
var state_34204__$1 = state_34204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34204__$1,(4),ch);
} else {
if((state_val_34205 === (11))){
var inst_34194 = (state_34204[(2)]);
var state_34204__$1 = state_34204;
var statearr_34213_34230 = state_34204__$1;
(statearr_34213_34230[(2)] = inst_34194);

(statearr_34213_34230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (9))){
var state_34204__$1 = state_34204;
var statearr_34214_34231 = state_34204__$1;
(statearr_34214_34231[(2)] = null);

(statearr_34214_34231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (5))){
var inst_34189 = cljs.core.async.close_BANG_.call(null,out);
var state_34204__$1 = state_34204;
var statearr_34215_34232 = state_34204__$1;
(statearr_34215_34232[(2)] = inst_34189);

(statearr_34215_34232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (10))){
var inst_34197 = (state_34204[(2)]);
var state_34204__$1 = (function (){var statearr_34216 = state_34204;
(statearr_34216[(8)] = inst_34197);

return statearr_34216;
})();
var statearr_34217_34233 = state_34204__$1;
(statearr_34217_34233[(2)] = null);

(statearr_34217_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34205 === (8))){
var inst_34186 = (state_34204[(7)]);
var state_34204__$1 = state_34204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34204__$1,(11),out,inst_34186);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___34223,out))
;
return ((function (switch__32590__auto__,c__32685__auto___34223,out){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_34218 = [null,null,null,null,null,null,null,null,null];
(statearr_34218[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_34218[(1)] = (1));

return statearr_34218;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_34204){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34219){if((e34219 instanceof Object)){
var ex__32594__auto__ = e34219;
var statearr_34220_34234 = state_34204;
(statearr_34220_34234[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_34204;
state_34204 = G__34235;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_34204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_34204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34223,out))
})();
var state__32687__auto__ = (function (){var statearr_34221 = f__32686__auto__.call(null);
(statearr_34221[(6)] = c__32685__auto___34223);

return statearr_34221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34223,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34237 = arguments.length;
switch (G__34237) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32685__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto__){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto__){
return (function (state_34300){
var state_val_34301 = (state_34300[(1)]);
if((state_val_34301 === (7))){
var inst_34296 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34302_34340 = state_34300__$1;
(statearr_34302_34340[(2)] = inst_34296);

(statearr_34302_34340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (20))){
var inst_34266 = (state_34300[(7)]);
var inst_34277 = (state_34300[(2)]);
var inst_34278 = cljs.core.next.call(null,inst_34266);
var inst_34252 = inst_34278;
var inst_34253 = null;
var inst_34254 = (0);
var inst_34255 = (0);
var state_34300__$1 = (function (){var statearr_34303 = state_34300;
(statearr_34303[(8)] = inst_34254);

(statearr_34303[(9)] = inst_34253);

(statearr_34303[(10)] = inst_34277);

(statearr_34303[(11)] = inst_34252);

(statearr_34303[(12)] = inst_34255);

return statearr_34303;
})();
var statearr_34304_34341 = state_34300__$1;
(statearr_34304_34341[(2)] = null);

(statearr_34304_34341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (1))){
var state_34300__$1 = state_34300;
var statearr_34305_34342 = state_34300__$1;
(statearr_34305_34342[(2)] = null);

(statearr_34305_34342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (4))){
var inst_34241 = (state_34300[(13)]);
var inst_34241__$1 = (state_34300[(2)]);
var inst_34242 = (inst_34241__$1 == null);
var state_34300__$1 = (function (){var statearr_34306 = state_34300;
(statearr_34306[(13)] = inst_34241__$1);

return statearr_34306;
})();
if(cljs.core.truth_(inst_34242)){
var statearr_34307_34343 = state_34300__$1;
(statearr_34307_34343[(1)] = (5));

} else {
var statearr_34308_34344 = state_34300__$1;
(statearr_34308_34344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (15))){
var state_34300__$1 = state_34300;
var statearr_34312_34345 = state_34300__$1;
(statearr_34312_34345[(2)] = null);

(statearr_34312_34345[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (21))){
var state_34300__$1 = state_34300;
var statearr_34313_34346 = state_34300__$1;
(statearr_34313_34346[(2)] = null);

(statearr_34313_34346[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (13))){
var inst_34254 = (state_34300[(8)]);
var inst_34253 = (state_34300[(9)]);
var inst_34252 = (state_34300[(11)]);
var inst_34255 = (state_34300[(12)]);
var inst_34262 = (state_34300[(2)]);
var inst_34263 = (inst_34255 + (1));
var tmp34309 = inst_34254;
var tmp34310 = inst_34253;
var tmp34311 = inst_34252;
var inst_34252__$1 = tmp34311;
var inst_34253__$1 = tmp34310;
var inst_34254__$1 = tmp34309;
var inst_34255__$1 = inst_34263;
var state_34300__$1 = (function (){var statearr_34314 = state_34300;
(statearr_34314[(8)] = inst_34254__$1);

(statearr_34314[(9)] = inst_34253__$1);

(statearr_34314[(14)] = inst_34262);

(statearr_34314[(11)] = inst_34252__$1);

(statearr_34314[(12)] = inst_34255__$1);

return statearr_34314;
})();
var statearr_34315_34347 = state_34300__$1;
(statearr_34315_34347[(2)] = null);

(statearr_34315_34347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (22))){
var state_34300__$1 = state_34300;
var statearr_34316_34348 = state_34300__$1;
(statearr_34316_34348[(2)] = null);

(statearr_34316_34348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (6))){
var inst_34241 = (state_34300[(13)]);
var inst_34250 = f.call(null,inst_34241);
var inst_34251 = cljs.core.seq.call(null,inst_34250);
var inst_34252 = inst_34251;
var inst_34253 = null;
var inst_34254 = (0);
var inst_34255 = (0);
var state_34300__$1 = (function (){var statearr_34317 = state_34300;
(statearr_34317[(8)] = inst_34254);

(statearr_34317[(9)] = inst_34253);

(statearr_34317[(11)] = inst_34252);

(statearr_34317[(12)] = inst_34255);

return statearr_34317;
})();
var statearr_34318_34349 = state_34300__$1;
(statearr_34318_34349[(2)] = null);

(statearr_34318_34349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (17))){
var inst_34266 = (state_34300[(7)]);
var inst_34270 = cljs.core.chunk_first.call(null,inst_34266);
var inst_34271 = cljs.core.chunk_rest.call(null,inst_34266);
var inst_34272 = cljs.core.count.call(null,inst_34270);
var inst_34252 = inst_34271;
var inst_34253 = inst_34270;
var inst_34254 = inst_34272;
var inst_34255 = (0);
var state_34300__$1 = (function (){var statearr_34319 = state_34300;
(statearr_34319[(8)] = inst_34254);

(statearr_34319[(9)] = inst_34253);

(statearr_34319[(11)] = inst_34252);

(statearr_34319[(12)] = inst_34255);

return statearr_34319;
})();
var statearr_34320_34350 = state_34300__$1;
(statearr_34320_34350[(2)] = null);

(statearr_34320_34350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (3))){
var inst_34298 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34300__$1,inst_34298);
} else {
if((state_val_34301 === (12))){
var inst_34286 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34321_34351 = state_34300__$1;
(statearr_34321_34351[(2)] = inst_34286);

(statearr_34321_34351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (2))){
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34300__$1,(4),in$);
} else {
if((state_val_34301 === (23))){
var inst_34294 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34322_34352 = state_34300__$1;
(statearr_34322_34352[(2)] = inst_34294);

(statearr_34322_34352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (19))){
var inst_34281 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34323_34353 = state_34300__$1;
(statearr_34323_34353[(2)] = inst_34281);

(statearr_34323_34353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (11))){
var inst_34266 = (state_34300[(7)]);
var inst_34252 = (state_34300[(11)]);
var inst_34266__$1 = cljs.core.seq.call(null,inst_34252);
var state_34300__$1 = (function (){var statearr_34324 = state_34300;
(statearr_34324[(7)] = inst_34266__$1);

return statearr_34324;
})();
if(inst_34266__$1){
var statearr_34325_34354 = state_34300__$1;
(statearr_34325_34354[(1)] = (14));

} else {
var statearr_34326_34355 = state_34300__$1;
(statearr_34326_34355[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (9))){
var inst_34288 = (state_34300[(2)]);
var inst_34289 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34300__$1 = (function (){var statearr_34327 = state_34300;
(statearr_34327[(15)] = inst_34288);

return statearr_34327;
})();
if(cljs.core.truth_(inst_34289)){
var statearr_34328_34356 = state_34300__$1;
(statearr_34328_34356[(1)] = (21));

} else {
var statearr_34329_34357 = state_34300__$1;
(statearr_34329_34357[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (5))){
var inst_34244 = cljs.core.async.close_BANG_.call(null,out);
var state_34300__$1 = state_34300;
var statearr_34330_34358 = state_34300__$1;
(statearr_34330_34358[(2)] = inst_34244);

(statearr_34330_34358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (14))){
var inst_34266 = (state_34300[(7)]);
var inst_34268 = cljs.core.chunked_seq_QMARK_.call(null,inst_34266);
var state_34300__$1 = state_34300;
if(inst_34268){
var statearr_34331_34359 = state_34300__$1;
(statearr_34331_34359[(1)] = (17));

} else {
var statearr_34332_34360 = state_34300__$1;
(statearr_34332_34360[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (16))){
var inst_34284 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34333_34361 = state_34300__$1;
(statearr_34333_34361[(2)] = inst_34284);

(statearr_34333_34361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (10))){
var inst_34253 = (state_34300[(9)]);
var inst_34255 = (state_34300[(12)]);
var inst_34260 = cljs.core._nth.call(null,inst_34253,inst_34255);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34300__$1,(13),out,inst_34260);
} else {
if((state_val_34301 === (18))){
var inst_34266 = (state_34300[(7)]);
var inst_34275 = cljs.core.first.call(null,inst_34266);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34300__$1,(20),out,inst_34275);
} else {
if((state_val_34301 === (8))){
var inst_34254 = (state_34300[(8)]);
var inst_34255 = (state_34300[(12)]);
var inst_34257 = (inst_34255 < inst_34254);
var inst_34258 = inst_34257;
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34258)){
var statearr_34334_34362 = state_34300__$1;
(statearr_34334_34362[(1)] = (10));

} else {
var statearr_34335_34363 = state_34300__$1;
(statearr_34335_34363[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto__))
;
return ((function (switch__32590__auto__,c__32685__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32591__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32591__auto____0 = (function (){
var statearr_34336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34336[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32591__auto__);

(statearr_34336[(1)] = (1));

return statearr_34336;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32591__auto____1 = (function (state_34300){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34337){if((e34337 instanceof Object)){
var ex__32594__auto__ = e34337;
var statearr_34338_34364 = state_34300;
(statearr_34338_34364[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34365 = state_34300;
state_34300 = G__34365;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32591__auto__ = function(state_34300){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32591__auto____1.call(this,state_34300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32591__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32591__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto__))
})();
var state__32687__auto__ = (function (){var statearr_34339 = f__32686__auto__.call(null);
(statearr_34339[(6)] = c__32685__auto__);

return statearr_34339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto__))
);

return c__32685__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34367 = arguments.length;
switch (G__34367) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34370 = arguments.length;
switch (G__34370) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34373 = arguments.length;
switch (G__34373) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32685__auto___34420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34420,out){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34420,out){
return (function (state_34397){
var state_val_34398 = (state_34397[(1)]);
if((state_val_34398 === (7))){
var inst_34392 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
var statearr_34399_34421 = state_34397__$1;
(statearr_34399_34421[(2)] = inst_34392);

(statearr_34399_34421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (1))){
var inst_34374 = null;
var state_34397__$1 = (function (){var statearr_34400 = state_34397;
(statearr_34400[(7)] = inst_34374);

return statearr_34400;
})();
var statearr_34401_34422 = state_34397__$1;
(statearr_34401_34422[(2)] = null);

(statearr_34401_34422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (4))){
var inst_34377 = (state_34397[(8)]);
var inst_34377__$1 = (state_34397[(2)]);
var inst_34378 = (inst_34377__$1 == null);
var inst_34379 = cljs.core.not.call(null,inst_34378);
var state_34397__$1 = (function (){var statearr_34402 = state_34397;
(statearr_34402[(8)] = inst_34377__$1);

return statearr_34402;
})();
if(inst_34379){
var statearr_34403_34423 = state_34397__$1;
(statearr_34403_34423[(1)] = (5));

} else {
var statearr_34404_34424 = state_34397__$1;
(statearr_34404_34424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (6))){
var state_34397__$1 = state_34397;
var statearr_34405_34425 = state_34397__$1;
(statearr_34405_34425[(2)] = null);

(statearr_34405_34425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (3))){
var inst_34394 = (state_34397[(2)]);
var inst_34395 = cljs.core.async.close_BANG_.call(null,out);
var state_34397__$1 = (function (){var statearr_34406 = state_34397;
(statearr_34406[(9)] = inst_34394);

return statearr_34406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34397__$1,inst_34395);
} else {
if((state_val_34398 === (2))){
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34397__$1,(4),ch);
} else {
if((state_val_34398 === (11))){
var inst_34377 = (state_34397[(8)]);
var inst_34386 = (state_34397[(2)]);
var inst_34374 = inst_34377;
var state_34397__$1 = (function (){var statearr_34407 = state_34397;
(statearr_34407[(7)] = inst_34374);

(statearr_34407[(10)] = inst_34386);

return statearr_34407;
})();
var statearr_34408_34426 = state_34397__$1;
(statearr_34408_34426[(2)] = null);

(statearr_34408_34426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (9))){
var inst_34377 = (state_34397[(8)]);
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34397__$1,(11),out,inst_34377);
} else {
if((state_val_34398 === (5))){
var inst_34377 = (state_34397[(8)]);
var inst_34374 = (state_34397[(7)]);
var inst_34381 = cljs.core._EQ_.call(null,inst_34377,inst_34374);
var state_34397__$1 = state_34397;
if(inst_34381){
var statearr_34410_34427 = state_34397__$1;
(statearr_34410_34427[(1)] = (8));

} else {
var statearr_34411_34428 = state_34397__$1;
(statearr_34411_34428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (10))){
var inst_34389 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
var statearr_34412_34429 = state_34397__$1;
(statearr_34412_34429[(2)] = inst_34389);

(statearr_34412_34429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (8))){
var inst_34374 = (state_34397[(7)]);
var tmp34409 = inst_34374;
var inst_34374__$1 = tmp34409;
var state_34397__$1 = (function (){var statearr_34413 = state_34397;
(statearr_34413[(7)] = inst_34374__$1);

return statearr_34413;
})();
var statearr_34414_34430 = state_34397__$1;
(statearr_34414_34430[(2)] = null);

(statearr_34414_34430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___34420,out))
;
return ((function (switch__32590__auto__,c__32685__auto___34420,out){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_34415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34415[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_34415[(1)] = (1));

return statearr_34415;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_34397){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34416){if((e34416 instanceof Object)){
var ex__32594__auto__ = e34416;
var statearr_34417_34431 = state_34397;
(statearr_34417_34431[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_34397;
state_34397 = G__34432;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_34397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_34397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34420,out))
})();
var state__32687__auto__ = (function (){var statearr_34418 = f__32686__auto__.call(null);
(statearr_34418[(6)] = c__32685__auto___34420);

return statearr_34418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34420,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34434 = arguments.length;
switch (G__34434) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32685__auto___34500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34500,out){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34500,out){
return (function (state_34472){
var state_val_34473 = (state_34472[(1)]);
if((state_val_34473 === (7))){
var inst_34468 = (state_34472[(2)]);
var state_34472__$1 = state_34472;
var statearr_34474_34501 = state_34472__$1;
(statearr_34474_34501[(2)] = inst_34468);

(statearr_34474_34501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (1))){
var inst_34435 = (new Array(n));
var inst_34436 = inst_34435;
var inst_34437 = (0);
var state_34472__$1 = (function (){var statearr_34475 = state_34472;
(statearr_34475[(7)] = inst_34436);

(statearr_34475[(8)] = inst_34437);

return statearr_34475;
})();
var statearr_34476_34502 = state_34472__$1;
(statearr_34476_34502[(2)] = null);

(statearr_34476_34502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (4))){
var inst_34440 = (state_34472[(9)]);
var inst_34440__$1 = (state_34472[(2)]);
var inst_34441 = (inst_34440__$1 == null);
var inst_34442 = cljs.core.not.call(null,inst_34441);
var state_34472__$1 = (function (){var statearr_34477 = state_34472;
(statearr_34477[(9)] = inst_34440__$1);

return statearr_34477;
})();
if(inst_34442){
var statearr_34478_34503 = state_34472__$1;
(statearr_34478_34503[(1)] = (5));

} else {
var statearr_34479_34504 = state_34472__$1;
(statearr_34479_34504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (15))){
var inst_34462 = (state_34472[(2)]);
var state_34472__$1 = state_34472;
var statearr_34480_34505 = state_34472__$1;
(statearr_34480_34505[(2)] = inst_34462);

(statearr_34480_34505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (13))){
var state_34472__$1 = state_34472;
var statearr_34481_34506 = state_34472__$1;
(statearr_34481_34506[(2)] = null);

(statearr_34481_34506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (6))){
var inst_34437 = (state_34472[(8)]);
var inst_34458 = (inst_34437 > (0));
var state_34472__$1 = state_34472;
if(cljs.core.truth_(inst_34458)){
var statearr_34482_34507 = state_34472__$1;
(statearr_34482_34507[(1)] = (12));

} else {
var statearr_34483_34508 = state_34472__$1;
(statearr_34483_34508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (3))){
var inst_34470 = (state_34472[(2)]);
var state_34472__$1 = state_34472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34472__$1,inst_34470);
} else {
if((state_val_34473 === (12))){
var inst_34436 = (state_34472[(7)]);
var inst_34460 = cljs.core.vec.call(null,inst_34436);
var state_34472__$1 = state_34472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34472__$1,(15),out,inst_34460);
} else {
if((state_val_34473 === (2))){
var state_34472__$1 = state_34472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34472__$1,(4),ch);
} else {
if((state_val_34473 === (11))){
var inst_34452 = (state_34472[(2)]);
var inst_34453 = (new Array(n));
var inst_34436 = inst_34453;
var inst_34437 = (0);
var state_34472__$1 = (function (){var statearr_34484 = state_34472;
(statearr_34484[(7)] = inst_34436);

(statearr_34484[(8)] = inst_34437);

(statearr_34484[(10)] = inst_34452);

return statearr_34484;
})();
var statearr_34485_34509 = state_34472__$1;
(statearr_34485_34509[(2)] = null);

(statearr_34485_34509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (9))){
var inst_34436 = (state_34472[(7)]);
var inst_34450 = cljs.core.vec.call(null,inst_34436);
var state_34472__$1 = state_34472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34472__$1,(11),out,inst_34450);
} else {
if((state_val_34473 === (5))){
var inst_34440 = (state_34472[(9)]);
var inst_34436 = (state_34472[(7)]);
var inst_34445 = (state_34472[(11)]);
var inst_34437 = (state_34472[(8)]);
var inst_34444 = (inst_34436[inst_34437] = inst_34440);
var inst_34445__$1 = (inst_34437 + (1));
var inst_34446 = (inst_34445__$1 < n);
var state_34472__$1 = (function (){var statearr_34486 = state_34472;
(statearr_34486[(11)] = inst_34445__$1);

(statearr_34486[(12)] = inst_34444);

return statearr_34486;
})();
if(cljs.core.truth_(inst_34446)){
var statearr_34487_34510 = state_34472__$1;
(statearr_34487_34510[(1)] = (8));

} else {
var statearr_34488_34511 = state_34472__$1;
(statearr_34488_34511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (14))){
var inst_34465 = (state_34472[(2)]);
var inst_34466 = cljs.core.async.close_BANG_.call(null,out);
var state_34472__$1 = (function (){var statearr_34490 = state_34472;
(statearr_34490[(13)] = inst_34465);

return statearr_34490;
})();
var statearr_34491_34512 = state_34472__$1;
(statearr_34491_34512[(2)] = inst_34466);

(statearr_34491_34512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (10))){
var inst_34456 = (state_34472[(2)]);
var state_34472__$1 = state_34472;
var statearr_34492_34513 = state_34472__$1;
(statearr_34492_34513[(2)] = inst_34456);

(statearr_34492_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34473 === (8))){
var inst_34436 = (state_34472[(7)]);
var inst_34445 = (state_34472[(11)]);
var tmp34489 = inst_34436;
var inst_34436__$1 = tmp34489;
var inst_34437 = inst_34445;
var state_34472__$1 = (function (){var statearr_34493 = state_34472;
(statearr_34493[(7)] = inst_34436__$1);

(statearr_34493[(8)] = inst_34437);

return statearr_34493;
})();
var statearr_34494_34514 = state_34472__$1;
(statearr_34494_34514[(2)] = null);

(statearr_34494_34514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___34500,out))
;
return ((function (switch__32590__auto__,c__32685__auto___34500,out){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_34495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34495[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_34495[(1)] = (1));

return statearr_34495;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_34472){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34496){if((e34496 instanceof Object)){
var ex__32594__auto__ = e34496;
var statearr_34497_34515 = state_34472;
(statearr_34497_34515[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34516 = state_34472;
state_34472 = G__34516;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_34472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_34472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34500,out))
})();
var state__32687__auto__ = (function (){var statearr_34498 = f__32686__auto__.call(null);
(statearr_34498[(6)] = c__32685__auto___34500);

return statearr_34498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34500,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34518 = arguments.length;
switch (G__34518) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32685__auto___34588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34588,out){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34588,out){
return (function (state_34560){
var state_val_34561 = (state_34560[(1)]);
if((state_val_34561 === (7))){
var inst_34556 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34562_34589 = state_34560__$1;
(statearr_34562_34589[(2)] = inst_34556);

(statearr_34562_34589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (1))){
var inst_34519 = [];
var inst_34520 = inst_34519;
var inst_34521 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34560__$1 = (function (){var statearr_34563 = state_34560;
(statearr_34563[(7)] = inst_34521);

(statearr_34563[(8)] = inst_34520);

return statearr_34563;
})();
var statearr_34564_34590 = state_34560__$1;
(statearr_34564_34590[(2)] = null);

(statearr_34564_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (4))){
var inst_34524 = (state_34560[(9)]);
var inst_34524__$1 = (state_34560[(2)]);
var inst_34525 = (inst_34524__$1 == null);
var inst_34526 = cljs.core.not.call(null,inst_34525);
var state_34560__$1 = (function (){var statearr_34565 = state_34560;
(statearr_34565[(9)] = inst_34524__$1);

return statearr_34565;
})();
if(inst_34526){
var statearr_34566_34591 = state_34560__$1;
(statearr_34566_34591[(1)] = (5));

} else {
var statearr_34567_34592 = state_34560__$1;
(statearr_34567_34592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (15))){
var inst_34550 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34568_34593 = state_34560__$1;
(statearr_34568_34593[(2)] = inst_34550);

(statearr_34568_34593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (13))){
var state_34560__$1 = state_34560;
var statearr_34569_34594 = state_34560__$1;
(statearr_34569_34594[(2)] = null);

(statearr_34569_34594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (6))){
var inst_34520 = (state_34560[(8)]);
var inst_34545 = inst_34520.length;
var inst_34546 = (inst_34545 > (0));
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34546)){
var statearr_34570_34595 = state_34560__$1;
(statearr_34570_34595[(1)] = (12));

} else {
var statearr_34571_34596 = state_34560__$1;
(statearr_34571_34596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (3))){
var inst_34558 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34560__$1,inst_34558);
} else {
if((state_val_34561 === (12))){
var inst_34520 = (state_34560[(8)]);
var inst_34548 = cljs.core.vec.call(null,inst_34520);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34560__$1,(15),out,inst_34548);
} else {
if((state_val_34561 === (2))){
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34560__$1,(4),ch);
} else {
if((state_val_34561 === (11))){
var inst_34524 = (state_34560[(9)]);
var inst_34528 = (state_34560[(10)]);
var inst_34538 = (state_34560[(2)]);
var inst_34539 = [];
var inst_34540 = inst_34539.push(inst_34524);
var inst_34520 = inst_34539;
var inst_34521 = inst_34528;
var state_34560__$1 = (function (){var statearr_34572 = state_34560;
(statearr_34572[(11)] = inst_34540);

(statearr_34572[(12)] = inst_34538);

(statearr_34572[(7)] = inst_34521);

(statearr_34572[(8)] = inst_34520);

return statearr_34572;
})();
var statearr_34573_34597 = state_34560__$1;
(statearr_34573_34597[(2)] = null);

(statearr_34573_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (9))){
var inst_34520 = (state_34560[(8)]);
var inst_34536 = cljs.core.vec.call(null,inst_34520);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34560__$1,(11),out,inst_34536);
} else {
if((state_val_34561 === (5))){
var inst_34524 = (state_34560[(9)]);
var inst_34521 = (state_34560[(7)]);
var inst_34528 = (state_34560[(10)]);
var inst_34528__$1 = f.call(null,inst_34524);
var inst_34529 = cljs.core._EQ_.call(null,inst_34528__$1,inst_34521);
var inst_34530 = cljs.core.keyword_identical_QMARK_.call(null,inst_34521,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34531 = ((inst_34529) || (inst_34530));
var state_34560__$1 = (function (){var statearr_34574 = state_34560;
(statearr_34574[(10)] = inst_34528__$1);

return statearr_34574;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34575_34598 = state_34560__$1;
(statearr_34575_34598[(1)] = (8));

} else {
var statearr_34576_34599 = state_34560__$1;
(statearr_34576_34599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (14))){
var inst_34553 = (state_34560[(2)]);
var inst_34554 = cljs.core.async.close_BANG_.call(null,out);
var state_34560__$1 = (function (){var statearr_34578 = state_34560;
(statearr_34578[(13)] = inst_34553);

return statearr_34578;
})();
var statearr_34579_34600 = state_34560__$1;
(statearr_34579_34600[(2)] = inst_34554);

(statearr_34579_34600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (10))){
var inst_34543 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34580_34601 = state_34560__$1;
(statearr_34580_34601[(2)] = inst_34543);

(statearr_34580_34601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (8))){
var inst_34524 = (state_34560[(9)]);
var inst_34520 = (state_34560[(8)]);
var inst_34528 = (state_34560[(10)]);
var inst_34533 = inst_34520.push(inst_34524);
var tmp34577 = inst_34520;
var inst_34520__$1 = tmp34577;
var inst_34521 = inst_34528;
var state_34560__$1 = (function (){var statearr_34581 = state_34560;
(statearr_34581[(7)] = inst_34521);

(statearr_34581[(8)] = inst_34520__$1);

(statearr_34581[(14)] = inst_34533);

return statearr_34581;
})();
var statearr_34582_34602 = state_34560__$1;
(statearr_34582_34602[(2)] = null);

(statearr_34582_34602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32685__auto___34588,out))
;
return ((function (switch__32590__auto__,c__32685__auto___34588,out){
return (function() {
var cljs$core$async$state_machine__32591__auto__ = null;
var cljs$core$async$state_machine__32591__auto____0 = (function (){
var statearr_34583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34583[(0)] = cljs$core$async$state_machine__32591__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var cljs$core$async$state_machine__32591__auto____1 = (function (state_34560){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34584){if((e34584 instanceof Object)){
var ex__32594__auto__ = e34584;
var statearr_34585_34603 = state_34560;
(statearr_34585_34603[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34604 = state_34560;
state_34560 = G__34604;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
cljs$core$async$state_machine__32591__auto__ = function(state_34560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32591__auto____1.call(this,state_34560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32591__auto____0;
cljs$core$async$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32591__auto____1;
return cljs$core$async$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34588,out))
})();
var state__32687__auto__ = (function (){var statearr_34586 = f__32686__auto__.call(null);
(statearr_34586[(6)] = c__32685__auto___34588);

return statearr_34586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34588,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1610120087168
