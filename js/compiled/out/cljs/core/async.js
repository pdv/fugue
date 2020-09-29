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
var G__32704 = arguments.length;
switch (G__32704) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32705 = (function (f,blockable,meta32706){
this.f = f;
this.blockable = blockable;
this.meta32706 = meta32706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32707,meta32706__$1){
var self__ = this;
var _32707__$1 = this;
return (new cljs.core.async.t_cljs$core$async32705(self__.f,self__.blockable,meta32706__$1));
});

cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32707){
var self__ = this;
var _32707__$1 = this;
return self__.meta32706;
});

cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32706","meta32706",-1935693441,null)], null);
});

cljs.core.async.t_cljs$core$async32705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32705";

cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32705");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32705.
 */
cljs.core.async.__GT_t_cljs$core$async32705 = (function cljs$core$async$__GT_t_cljs$core$async32705(f__$1,blockable__$1,meta32706){
return (new cljs.core.async.t_cljs$core$async32705(f__$1,blockable__$1,meta32706));
});

}

return (new cljs.core.async.t_cljs$core$async32705(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32711 = arguments.length;
switch (G__32711) {
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
var G__32714 = arguments.length;
switch (G__32714) {
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
var G__32717 = arguments.length;
switch (G__32717) {
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
var val_32719 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32719);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32719,ret){
return (function (){
return fn1.call(null,val_32719);
});})(val_32719,ret))
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
var G__32721 = arguments.length;
switch (G__32721) {
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
var n__4607__auto___32723 = n;
var x_32724 = (0);
while(true){
if((x_32724 < n__4607__auto___32723)){
(a[x_32724] = x_32724);

var G__32725 = (x_32724 + (1));
x_32724 = G__32725;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32726 = (function (flag,meta32727){
this.flag = flag;
this.meta32727 = meta32727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32728,meta32727__$1){
var self__ = this;
var _32728__$1 = this;
return (new cljs.core.async.t_cljs$core$async32726(self__.flag,meta32727__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32728){
var self__ = this;
var _32728__$1 = this;
return self__.meta32727;
});})(flag))
;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32726.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32727","meta32727",-1982590006,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32726";

cljs.core.async.t_cljs$core$async32726.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32726");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32726.
 */
cljs.core.async.__GT_t_cljs$core$async32726 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32726(flag__$1,meta32727){
return (new cljs.core.async.t_cljs$core$async32726(flag__$1,meta32727));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32726(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32729 = (function (flag,cb,meta32730){
this.flag = flag;
this.cb = cb;
this.meta32730 = meta32730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32731,meta32730__$1){
var self__ = this;
var _32731__$1 = this;
return (new cljs.core.async.t_cljs$core$async32729(self__.flag,self__.cb,meta32730__$1));
});

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32731){
var self__ = this;
var _32731__$1 = this;
return self__.meta32730;
});

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32730","meta32730",391744224,null)], null);
});

cljs.core.async.t_cljs$core$async32729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32729";

cljs.core.async.t_cljs$core$async32729.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32729");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32729.
 */
cljs.core.async.__GT_t_cljs$core$async32729 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32729(flag__$1,cb__$1,meta32730){
return (new cljs.core.async.t_cljs$core$async32729(flag__$1,cb__$1,meta32730));
});

}

return (new cljs.core.async.t_cljs$core$async32729(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32732_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32732_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32733_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32733_SHARP_,port], null));
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
var G__32734 = (i + (1));
i = G__32734;
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
var len__4730__auto___32740 = arguments.length;
var i__4731__auto___32741 = (0);
while(true){
if((i__4731__auto___32741 < len__4730__auto___32740)){
args__4736__auto__.push((arguments[i__4731__auto___32741]));

var G__32742 = (i__4731__auto___32741 + (1));
i__4731__auto___32741 = G__32742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32737){
var map__32738 = p__32737;
var map__32738__$1 = (((((!((map__32738 == null))))?(((((map__32738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32738):map__32738);
var opts = map__32738__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32735){
var G__32736 = cljs.core.first.call(null,seq32735);
var seq32735__$1 = cljs.core.next.call(null,seq32735);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32736,seq32735__$1);
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
var G__32744 = arguments.length;
switch (G__32744) {
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
var c__32644__auto___32790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___32790){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___32790){
return (function (state_32768){
var state_val_32769 = (state_32768[(1)]);
if((state_val_32769 === (7))){
var inst_32764 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
var statearr_32770_32791 = state_32768__$1;
(statearr_32770_32791[(2)] = inst_32764);

(statearr_32770_32791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (1))){
var state_32768__$1 = state_32768;
var statearr_32771_32792 = state_32768__$1;
(statearr_32771_32792[(2)] = null);

(statearr_32771_32792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (4))){
var inst_32747 = (state_32768[(7)]);
var inst_32747__$1 = (state_32768[(2)]);
var inst_32748 = (inst_32747__$1 == null);
var state_32768__$1 = (function (){var statearr_32772 = state_32768;
(statearr_32772[(7)] = inst_32747__$1);

return statearr_32772;
})();
if(cljs.core.truth_(inst_32748)){
var statearr_32773_32793 = state_32768__$1;
(statearr_32773_32793[(1)] = (5));

} else {
var statearr_32774_32794 = state_32768__$1;
(statearr_32774_32794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (13))){
var state_32768__$1 = state_32768;
var statearr_32775_32795 = state_32768__$1;
(statearr_32775_32795[(2)] = null);

(statearr_32775_32795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (6))){
var inst_32747 = (state_32768[(7)]);
var state_32768__$1 = state_32768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32768__$1,(11),to,inst_32747);
} else {
if((state_val_32769 === (3))){
var inst_32766 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32768__$1,inst_32766);
} else {
if((state_val_32769 === (12))){
var state_32768__$1 = state_32768;
var statearr_32776_32796 = state_32768__$1;
(statearr_32776_32796[(2)] = null);

(statearr_32776_32796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (2))){
var state_32768__$1 = state_32768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32768__$1,(4),from);
} else {
if((state_val_32769 === (11))){
var inst_32757 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
if(cljs.core.truth_(inst_32757)){
var statearr_32777_32797 = state_32768__$1;
(statearr_32777_32797[(1)] = (12));

} else {
var statearr_32778_32798 = state_32768__$1;
(statearr_32778_32798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (9))){
var state_32768__$1 = state_32768;
var statearr_32779_32799 = state_32768__$1;
(statearr_32779_32799[(2)] = null);

(statearr_32779_32799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (5))){
var state_32768__$1 = state_32768;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32780_32800 = state_32768__$1;
(statearr_32780_32800[(1)] = (8));

} else {
var statearr_32781_32801 = state_32768__$1;
(statearr_32781_32801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (14))){
var inst_32762 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
var statearr_32782_32802 = state_32768__$1;
(statearr_32782_32802[(2)] = inst_32762);

(statearr_32782_32802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (10))){
var inst_32754 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
var statearr_32783_32803 = state_32768__$1;
(statearr_32783_32803[(2)] = inst_32754);

(statearr_32783_32803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (8))){
var inst_32751 = cljs.core.async.close_BANG_.call(null,to);
var state_32768__$1 = state_32768;
var statearr_32784_32804 = state_32768__$1;
(statearr_32784_32804[(2)] = inst_32751);

(statearr_32784_32804[(1)] = (10));


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
});})(c__32644__auto___32790))
;
return ((function (switch__32549__auto__,c__32644__auto___32790){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_32785 = [null,null,null,null,null,null,null,null];
(statearr_32785[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_32785[(1)] = (1));

return statearr_32785;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_32768){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_32768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e32786){if((e32786 instanceof Object)){
var ex__32553__auto__ = e32786;
var statearr_32787_32805 = state_32768;
(statearr_32787_32805[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32806 = state_32768;
state_32768 = G__32806;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_32768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_32768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___32790))
})();
var state__32646__auto__ = (function (){var statearr_32788 = f__32645__auto__.call(null);
(statearr_32788[(6)] = c__32644__auto___32790);

return statearr_32788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___32790))
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
return (function (p__32807){
var vec__32808 = p__32807;
var v = cljs.core.nth.call(null,vec__32808,(0),null);
var p = cljs.core.nth.call(null,vec__32808,(1),null);
var job = vec__32808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32644__auto___32979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___32979,res,vec__32808,v,p,job,jobs,results){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___32979,res,vec__32808,v,p,job,jobs,results){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (1))){
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32815__$1,(2),res,v);
} else {
if((state_val_32816 === (2))){
var inst_32812 = (state_32815[(2)]);
var inst_32813 = cljs.core.async.close_BANG_.call(null,res);
var state_32815__$1 = (function (){var statearr_32817 = state_32815;
(statearr_32817[(7)] = inst_32812);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32815__$1,inst_32813);
} else {
return null;
}
}
});})(c__32644__auto___32979,res,vec__32808,v,p,job,jobs,results))
;
return ((function (switch__32549__auto__,c__32644__auto___32979,res,vec__32808,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0 = (function (){
var statearr_32818 = [null,null,null,null,null,null,null,null];
(statearr_32818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__);

(statearr_32818[(1)] = (1));

return statearr_32818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1 = (function (state_32815){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_32815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e32819){if((e32819 instanceof Object)){
var ex__32553__auto__ = e32819;
var statearr_32820_32980 = state_32815;
(statearr_32820_32980[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32981 = state_32815;
state_32815 = G__32981;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___32979,res,vec__32808,v,p,job,jobs,results))
})();
var state__32646__auto__ = (function (){var statearr_32821 = f__32645__auto__.call(null);
(statearr_32821[(6)] = c__32644__auto___32979);

return statearr_32821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___32979,res,vec__32808,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32822){
var vec__32823 = p__32822;
var v = cljs.core.nth.call(null,vec__32823,(0),null);
var p = cljs.core.nth.call(null,vec__32823,(1),null);
var job = vec__32823;
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
var n__4607__auto___32982 = n;
var __32983 = (0);
while(true){
if((__32983 < n__4607__auto___32982)){
var G__32826_32984 = type;
var G__32826_32985__$1 = (((G__32826_32984 instanceof cljs.core.Keyword))?G__32826_32984.fqn:null);
switch (G__32826_32985__$1) {
case "compute":
var c__32644__auto___32987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32983,c__32644__auto___32987,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (__32983,c__32644__auto___32987,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async){
return (function (state_32839){
var state_val_32840 = (state_32839[(1)]);
if((state_val_32840 === (1))){
var state_32839__$1 = state_32839;
var statearr_32841_32988 = state_32839__$1;
(statearr_32841_32988[(2)] = null);

(statearr_32841_32988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32840 === (2))){
var state_32839__$1 = state_32839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32839__$1,(4),jobs);
} else {
if((state_val_32840 === (3))){
var inst_32837 = (state_32839[(2)]);
var state_32839__$1 = state_32839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32839__$1,inst_32837);
} else {
if((state_val_32840 === (4))){
var inst_32829 = (state_32839[(2)]);
var inst_32830 = process.call(null,inst_32829);
var state_32839__$1 = state_32839;
if(cljs.core.truth_(inst_32830)){
var statearr_32842_32989 = state_32839__$1;
(statearr_32842_32989[(1)] = (5));

} else {
var statearr_32843_32990 = state_32839__$1;
(statearr_32843_32990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32840 === (5))){
var state_32839__$1 = state_32839;
var statearr_32844_32991 = state_32839__$1;
(statearr_32844_32991[(2)] = null);

(statearr_32844_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32840 === (6))){
var state_32839__$1 = state_32839;
var statearr_32845_32992 = state_32839__$1;
(statearr_32845_32992[(2)] = null);

(statearr_32845_32992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32840 === (7))){
var inst_32835 = (state_32839[(2)]);
var state_32839__$1 = state_32839;
var statearr_32846_32993 = state_32839__$1;
(statearr_32846_32993[(2)] = inst_32835);

(statearr_32846_32993[(1)] = (3));


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
});})(__32983,c__32644__auto___32987,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async))
;
return ((function (__32983,switch__32549__auto__,c__32644__auto___32987,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0 = (function (){
var statearr_32847 = [null,null,null,null,null,null,null];
(statearr_32847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__);

(statearr_32847[(1)] = (1));

return statearr_32847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1 = (function (state_32839){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_32839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e32848){if((e32848 instanceof Object)){
var ex__32553__auto__ = e32848;
var statearr_32849_32994 = state_32839;
(statearr_32849_32994[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32995 = state_32839;
state_32839 = G__32995;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = function(state_32839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1.call(this,state_32839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__;
})()
;})(__32983,switch__32549__auto__,c__32644__auto___32987,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async))
})();
var state__32646__auto__ = (function (){var statearr_32850 = f__32645__auto__.call(null);
(statearr_32850[(6)] = c__32644__auto___32987);

return statearr_32850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(__32983,c__32644__auto___32987,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async))
);


break;
case "async":
var c__32644__auto___32996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32983,c__32644__auto___32996,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (__32983,c__32644__auto___32996,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async){
return (function (state_32863){
var state_val_32864 = (state_32863[(1)]);
if((state_val_32864 === (1))){
var state_32863__$1 = state_32863;
var statearr_32865_32997 = state_32863__$1;
(statearr_32865_32997[(2)] = null);

(statearr_32865_32997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (2))){
var state_32863__$1 = state_32863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32863__$1,(4),jobs);
} else {
if((state_val_32864 === (3))){
var inst_32861 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32863__$1,inst_32861);
} else {
if((state_val_32864 === (4))){
var inst_32853 = (state_32863[(2)]);
var inst_32854 = async.call(null,inst_32853);
var state_32863__$1 = state_32863;
if(cljs.core.truth_(inst_32854)){
var statearr_32866_32998 = state_32863__$1;
(statearr_32866_32998[(1)] = (5));

} else {
var statearr_32867_32999 = state_32863__$1;
(statearr_32867_32999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (5))){
var state_32863__$1 = state_32863;
var statearr_32868_33000 = state_32863__$1;
(statearr_32868_33000[(2)] = null);

(statearr_32868_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (6))){
var state_32863__$1 = state_32863;
var statearr_32869_33001 = state_32863__$1;
(statearr_32869_33001[(2)] = null);

(statearr_32869_33001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (7))){
var inst_32859 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
var statearr_32870_33002 = state_32863__$1;
(statearr_32870_33002[(2)] = inst_32859);

(statearr_32870_33002[(1)] = (3));


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
});})(__32983,c__32644__auto___32996,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async))
;
return ((function (__32983,switch__32549__auto__,c__32644__auto___32996,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0 = (function (){
var statearr_32871 = [null,null,null,null,null,null,null];
(statearr_32871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__);

(statearr_32871[(1)] = (1));

return statearr_32871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1 = (function (state_32863){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_32863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e32872){if((e32872 instanceof Object)){
var ex__32553__auto__ = e32872;
var statearr_32873_33003 = state_32863;
(statearr_32873_33003[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33004 = state_32863;
state_32863 = G__33004;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = function(state_32863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1.call(this,state_32863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__;
})()
;})(__32983,switch__32549__auto__,c__32644__auto___32996,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async))
})();
var state__32646__auto__ = (function (){var statearr_32874 = f__32645__auto__.call(null);
(statearr_32874[(6)] = c__32644__auto___32996);

return statearr_32874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(__32983,c__32644__auto___32996,G__32826_32984,G__32826_32985__$1,n__4607__auto___32982,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32826_32985__$1)].join('')));

}

var G__33005 = (__32983 + (1));
__32983 = G__33005;
continue;
} else {
}
break;
}

var c__32644__auto___33006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___33006,jobs,results,process,async){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___33006,jobs,results,process,async){
return (function (state_32896){
var state_val_32897 = (state_32896[(1)]);
if((state_val_32897 === (7))){
var inst_32892 = (state_32896[(2)]);
var state_32896__$1 = state_32896;
var statearr_32898_33007 = state_32896__$1;
(statearr_32898_33007[(2)] = inst_32892);

(statearr_32898_33007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (1))){
var state_32896__$1 = state_32896;
var statearr_32899_33008 = state_32896__$1;
(statearr_32899_33008[(2)] = null);

(statearr_32899_33008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (4))){
var inst_32877 = (state_32896[(7)]);
var inst_32877__$1 = (state_32896[(2)]);
var inst_32878 = (inst_32877__$1 == null);
var state_32896__$1 = (function (){var statearr_32900 = state_32896;
(statearr_32900[(7)] = inst_32877__$1);

return statearr_32900;
})();
if(cljs.core.truth_(inst_32878)){
var statearr_32901_33009 = state_32896__$1;
(statearr_32901_33009[(1)] = (5));

} else {
var statearr_32902_33010 = state_32896__$1;
(statearr_32902_33010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (6))){
var inst_32882 = (state_32896[(8)]);
var inst_32877 = (state_32896[(7)]);
var inst_32882__$1 = cljs.core.async.chan.call(null,(1));
var inst_32883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32884 = [inst_32877,inst_32882__$1];
var inst_32885 = (new cljs.core.PersistentVector(null,2,(5),inst_32883,inst_32884,null));
var state_32896__$1 = (function (){var statearr_32903 = state_32896;
(statearr_32903[(8)] = inst_32882__$1);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32896__$1,(8),jobs,inst_32885);
} else {
if((state_val_32897 === (3))){
var inst_32894 = (state_32896[(2)]);
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32896__$1,inst_32894);
} else {
if((state_val_32897 === (2))){
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32896__$1,(4),from);
} else {
if((state_val_32897 === (9))){
var inst_32889 = (state_32896[(2)]);
var state_32896__$1 = (function (){var statearr_32904 = state_32896;
(statearr_32904[(9)] = inst_32889);

return statearr_32904;
})();
var statearr_32905_33011 = state_32896__$1;
(statearr_32905_33011[(2)] = null);

(statearr_32905_33011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (5))){
var inst_32880 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32896__$1 = state_32896;
var statearr_32906_33012 = state_32896__$1;
(statearr_32906_33012[(2)] = inst_32880);

(statearr_32906_33012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32897 === (8))){
var inst_32882 = (state_32896[(8)]);
var inst_32887 = (state_32896[(2)]);
var state_32896__$1 = (function (){var statearr_32907 = state_32896;
(statearr_32907[(10)] = inst_32887);

return statearr_32907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32896__$1,(9),results,inst_32882);
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
});})(c__32644__auto___33006,jobs,results,process,async))
;
return ((function (switch__32549__auto__,c__32644__auto___33006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0 = (function (){
var statearr_32908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__);

(statearr_32908[(1)] = (1));

return statearr_32908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1 = (function (state_32896){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_32896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e32909){if((e32909 instanceof Object)){
var ex__32553__auto__ = e32909;
var statearr_32910_33013 = state_32896;
(statearr_32910_33013[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33014 = state_32896;
state_32896 = G__33014;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = function(state_32896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1.call(this,state_32896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___33006,jobs,results,process,async))
})();
var state__32646__auto__ = (function (){var statearr_32911 = f__32645__auto__.call(null);
(statearr_32911[(6)] = c__32644__auto___33006);

return statearr_32911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___33006,jobs,results,process,async))
);


var c__32644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto__,jobs,results,process,async){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto__,jobs,results,process,async){
return (function (state_32949){
var state_val_32950 = (state_32949[(1)]);
if((state_val_32950 === (7))){
var inst_32945 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32951_33015 = state_32949__$1;
(statearr_32951_33015[(2)] = inst_32945);

(statearr_32951_33015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (20))){
var state_32949__$1 = state_32949;
var statearr_32952_33016 = state_32949__$1;
(statearr_32952_33016[(2)] = null);

(statearr_32952_33016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (1))){
var state_32949__$1 = state_32949;
var statearr_32953_33017 = state_32949__$1;
(statearr_32953_33017[(2)] = null);

(statearr_32953_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (4))){
var inst_32914 = (state_32949[(7)]);
var inst_32914__$1 = (state_32949[(2)]);
var inst_32915 = (inst_32914__$1 == null);
var state_32949__$1 = (function (){var statearr_32954 = state_32949;
(statearr_32954[(7)] = inst_32914__$1);

return statearr_32954;
})();
if(cljs.core.truth_(inst_32915)){
var statearr_32955_33018 = state_32949__$1;
(statearr_32955_33018[(1)] = (5));

} else {
var statearr_32956_33019 = state_32949__$1;
(statearr_32956_33019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (15))){
var inst_32927 = (state_32949[(8)]);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32949__$1,(18),to,inst_32927);
} else {
if((state_val_32950 === (21))){
var inst_32940 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32957_33020 = state_32949__$1;
(statearr_32957_33020[(2)] = inst_32940);

(statearr_32957_33020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (13))){
var inst_32942 = (state_32949[(2)]);
var state_32949__$1 = (function (){var statearr_32958 = state_32949;
(statearr_32958[(9)] = inst_32942);

return statearr_32958;
})();
var statearr_32959_33021 = state_32949__$1;
(statearr_32959_33021[(2)] = null);

(statearr_32959_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (6))){
var inst_32914 = (state_32949[(7)]);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32949__$1,(11),inst_32914);
} else {
if((state_val_32950 === (17))){
var inst_32935 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
if(cljs.core.truth_(inst_32935)){
var statearr_32960_33022 = state_32949__$1;
(statearr_32960_33022[(1)] = (19));

} else {
var statearr_32961_33023 = state_32949__$1;
(statearr_32961_33023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (3))){
var inst_32947 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32949__$1,inst_32947);
} else {
if((state_val_32950 === (12))){
var inst_32924 = (state_32949[(10)]);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32949__$1,(14),inst_32924);
} else {
if((state_val_32950 === (2))){
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32949__$1,(4),results);
} else {
if((state_val_32950 === (19))){
var state_32949__$1 = state_32949;
var statearr_32962_33024 = state_32949__$1;
(statearr_32962_33024[(2)] = null);

(statearr_32962_33024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (11))){
var inst_32924 = (state_32949[(2)]);
var state_32949__$1 = (function (){var statearr_32963 = state_32949;
(statearr_32963[(10)] = inst_32924);

return statearr_32963;
})();
var statearr_32964_33025 = state_32949__$1;
(statearr_32964_33025[(2)] = null);

(statearr_32964_33025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (9))){
var state_32949__$1 = state_32949;
var statearr_32965_33026 = state_32949__$1;
(statearr_32965_33026[(2)] = null);

(statearr_32965_33026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (5))){
var state_32949__$1 = state_32949;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32966_33027 = state_32949__$1;
(statearr_32966_33027[(1)] = (8));

} else {
var statearr_32967_33028 = state_32949__$1;
(statearr_32967_33028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (14))){
var inst_32929 = (state_32949[(11)]);
var inst_32927 = (state_32949[(8)]);
var inst_32927__$1 = (state_32949[(2)]);
var inst_32928 = (inst_32927__$1 == null);
var inst_32929__$1 = cljs.core.not.call(null,inst_32928);
var state_32949__$1 = (function (){var statearr_32968 = state_32949;
(statearr_32968[(11)] = inst_32929__$1);

(statearr_32968[(8)] = inst_32927__$1);

return statearr_32968;
})();
if(inst_32929__$1){
var statearr_32969_33029 = state_32949__$1;
(statearr_32969_33029[(1)] = (15));

} else {
var statearr_32970_33030 = state_32949__$1;
(statearr_32970_33030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (16))){
var inst_32929 = (state_32949[(11)]);
var state_32949__$1 = state_32949;
var statearr_32971_33031 = state_32949__$1;
(statearr_32971_33031[(2)] = inst_32929);

(statearr_32971_33031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (10))){
var inst_32921 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32972_33032 = state_32949__$1;
(statearr_32972_33032[(2)] = inst_32921);

(statearr_32972_33032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (18))){
var inst_32932 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32973_33033 = state_32949__$1;
(statearr_32973_33033[(2)] = inst_32932);

(statearr_32973_33033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (8))){
var inst_32918 = cljs.core.async.close_BANG_.call(null,to);
var state_32949__$1 = state_32949;
var statearr_32974_33034 = state_32949__$1;
(statearr_32974_33034[(2)] = inst_32918);

(statearr_32974_33034[(1)] = (10));


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
});})(c__32644__auto__,jobs,results,process,async))
;
return ((function (switch__32549__auto__,c__32644__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0 = (function (){
var statearr_32975 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__);

(statearr_32975[(1)] = (1));

return statearr_32975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1 = (function (state_32949){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_32949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e32976){if((e32976 instanceof Object)){
var ex__32553__auto__ = e32976;
var statearr_32977_33035 = state_32949;
(statearr_32977_33035[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33036 = state_32949;
state_32949 = G__33036;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__ = function(state_32949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1.call(this,state_32949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto__,jobs,results,process,async))
})();
var state__32646__auto__ = (function (){var statearr_32978 = f__32645__auto__.call(null);
(statearr_32978[(6)] = c__32644__auto__);

return statearr_32978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto__,jobs,results,process,async))
);

return c__32644__auto__;
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
var G__33038 = arguments.length;
switch (G__33038) {
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
var G__33041 = arguments.length;
switch (G__33041) {
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
var G__33044 = arguments.length;
switch (G__33044) {
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
var c__32644__auto___33093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___33093,tc,fc){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___33093,tc,fc){
return (function (state_33070){
var state_val_33071 = (state_33070[(1)]);
if((state_val_33071 === (7))){
var inst_33066 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33072_33094 = state_33070__$1;
(statearr_33072_33094[(2)] = inst_33066);

(statearr_33072_33094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (1))){
var state_33070__$1 = state_33070;
var statearr_33073_33095 = state_33070__$1;
(statearr_33073_33095[(2)] = null);

(statearr_33073_33095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (4))){
var inst_33047 = (state_33070[(7)]);
var inst_33047__$1 = (state_33070[(2)]);
var inst_33048 = (inst_33047__$1 == null);
var state_33070__$1 = (function (){var statearr_33074 = state_33070;
(statearr_33074[(7)] = inst_33047__$1);

return statearr_33074;
})();
if(cljs.core.truth_(inst_33048)){
var statearr_33075_33096 = state_33070__$1;
(statearr_33075_33096[(1)] = (5));

} else {
var statearr_33076_33097 = state_33070__$1;
(statearr_33076_33097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (13))){
var state_33070__$1 = state_33070;
var statearr_33077_33098 = state_33070__$1;
(statearr_33077_33098[(2)] = null);

(statearr_33077_33098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (6))){
var inst_33047 = (state_33070[(7)]);
var inst_33053 = p.call(null,inst_33047);
var state_33070__$1 = state_33070;
if(cljs.core.truth_(inst_33053)){
var statearr_33078_33099 = state_33070__$1;
(statearr_33078_33099[(1)] = (9));

} else {
var statearr_33079_33100 = state_33070__$1;
(statearr_33079_33100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (3))){
var inst_33068 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33070__$1,inst_33068);
} else {
if((state_val_33071 === (12))){
var state_33070__$1 = state_33070;
var statearr_33080_33101 = state_33070__$1;
(statearr_33080_33101[(2)] = null);

(statearr_33080_33101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (2))){
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33070__$1,(4),ch);
} else {
if((state_val_33071 === (11))){
var inst_33047 = (state_33070[(7)]);
var inst_33057 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33070__$1,(8),inst_33057,inst_33047);
} else {
if((state_val_33071 === (9))){
var state_33070__$1 = state_33070;
var statearr_33081_33102 = state_33070__$1;
(statearr_33081_33102[(2)] = tc);

(statearr_33081_33102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (5))){
var inst_33050 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33051 = cljs.core.async.close_BANG_.call(null,fc);
var state_33070__$1 = (function (){var statearr_33082 = state_33070;
(statearr_33082[(8)] = inst_33050);

return statearr_33082;
})();
var statearr_33083_33103 = state_33070__$1;
(statearr_33083_33103[(2)] = inst_33051);

(statearr_33083_33103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (14))){
var inst_33064 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33084_33104 = state_33070__$1;
(statearr_33084_33104[(2)] = inst_33064);

(statearr_33084_33104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (10))){
var state_33070__$1 = state_33070;
var statearr_33085_33105 = state_33070__$1;
(statearr_33085_33105[(2)] = fc);

(statearr_33085_33105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (8))){
var inst_33059 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
if(cljs.core.truth_(inst_33059)){
var statearr_33086_33106 = state_33070__$1;
(statearr_33086_33106[(1)] = (12));

} else {
var statearr_33087_33107 = state_33070__$1;
(statearr_33087_33107[(1)] = (13));

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
});})(c__32644__auto___33093,tc,fc))
;
return ((function (switch__32549__auto__,c__32644__auto___33093,tc,fc){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_33088 = [null,null,null,null,null,null,null,null,null];
(statearr_33088[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_33088[(1)] = (1));

return statearr_33088;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_33070){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33089){if((e33089 instanceof Object)){
var ex__32553__auto__ = e33089;
var statearr_33090_33108 = state_33070;
(statearr_33090_33108[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33109 = state_33070;
state_33070 = G__33109;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_33070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_33070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___33093,tc,fc))
})();
var state__32646__auto__ = (function (){var statearr_33091 = f__32645__auto__.call(null);
(statearr_33091[(6)] = c__32644__auto___33093);

return statearr_33091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___33093,tc,fc))
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
var c__32644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto__){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto__){
return (function (state_33130){
var state_val_33131 = (state_33130[(1)]);
if((state_val_33131 === (7))){
var inst_33126 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33132_33150 = state_33130__$1;
(statearr_33132_33150[(2)] = inst_33126);

(statearr_33132_33150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (1))){
var inst_33110 = init;
var state_33130__$1 = (function (){var statearr_33133 = state_33130;
(statearr_33133[(7)] = inst_33110);

return statearr_33133;
})();
var statearr_33134_33151 = state_33130__$1;
(statearr_33134_33151[(2)] = null);

(statearr_33134_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (4))){
var inst_33113 = (state_33130[(8)]);
var inst_33113__$1 = (state_33130[(2)]);
var inst_33114 = (inst_33113__$1 == null);
var state_33130__$1 = (function (){var statearr_33135 = state_33130;
(statearr_33135[(8)] = inst_33113__$1);

return statearr_33135;
})();
if(cljs.core.truth_(inst_33114)){
var statearr_33136_33152 = state_33130__$1;
(statearr_33136_33152[(1)] = (5));

} else {
var statearr_33137_33153 = state_33130__$1;
(statearr_33137_33153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (6))){
var inst_33117 = (state_33130[(9)]);
var inst_33113 = (state_33130[(8)]);
var inst_33110 = (state_33130[(7)]);
var inst_33117__$1 = f.call(null,inst_33110,inst_33113);
var inst_33118 = cljs.core.reduced_QMARK_.call(null,inst_33117__$1);
var state_33130__$1 = (function (){var statearr_33138 = state_33130;
(statearr_33138[(9)] = inst_33117__$1);

return statearr_33138;
})();
if(inst_33118){
var statearr_33139_33154 = state_33130__$1;
(statearr_33139_33154[(1)] = (8));

} else {
var statearr_33140_33155 = state_33130__$1;
(statearr_33140_33155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (3))){
var inst_33128 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33130__$1,inst_33128);
} else {
if((state_val_33131 === (2))){
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33130__$1,(4),ch);
} else {
if((state_val_33131 === (9))){
var inst_33117 = (state_33130[(9)]);
var inst_33110 = inst_33117;
var state_33130__$1 = (function (){var statearr_33141 = state_33130;
(statearr_33141[(7)] = inst_33110);

return statearr_33141;
})();
var statearr_33142_33156 = state_33130__$1;
(statearr_33142_33156[(2)] = null);

(statearr_33142_33156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (5))){
var inst_33110 = (state_33130[(7)]);
var state_33130__$1 = state_33130;
var statearr_33143_33157 = state_33130__$1;
(statearr_33143_33157[(2)] = inst_33110);

(statearr_33143_33157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (10))){
var inst_33124 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33144_33158 = state_33130__$1;
(statearr_33144_33158[(2)] = inst_33124);

(statearr_33144_33158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (8))){
var inst_33117 = (state_33130[(9)]);
var inst_33120 = cljs.core.deref.call(null,inst_33117);
var state_33130__$1 = state_33130;
var statearr_33145_33159 = state_33130__$1;
(statearr_33145_33159[(2)] = inst_33120);

(statearr_33145_33159[(1)] = (10));


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
});})(c__32644__auto__))
;
return ((function (switch__32549__auto__,c__32644__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32550__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32550__auto____0 = (function (){
var statearr_33146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33146[(0)] = cljs$core$async$reduce_$_state_machine__32550__auto__);

(statearr_33146[(1)] = (1));

return statearr_33146;
});
var cljs$core$async$reduce_$_state_machine__32550__auto____1 = (function (state_33130){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33147){if((e33147 instanceof Object)){
var ex__32553__auto__ = e33147;
var statearr_33148_33160 = state_33130;
(statearr_33148_33160[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33161 = state_33130;
state_33130 = G__33161;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32550__auto__ = function(state_33130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32550__auto____1.call(this,state_33130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32550__auto____0;
cljs$core$async$reduce_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32550__auto____1;
return cljs$core$async$reduce_$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto__))
})();
var state__32646__auto__ = (function (){var statearr_33149 = f__32645__auto__.call(null);
(statearr_33149[(6)] = c__32644__auto__);

return statearr_33149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto__))
);

return c__32644__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto__,f__$1){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto__,f__$1){
return (function (state_33167){
var state_val_33168 = (state_33167[(1)]);
if((state_val_33168 === (1))){
var inst_33162 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33167__$1,(2),inst_33162);
} else {
if((state_val_33168 === (2))){
var inst_33164 = (state_33167[(2)]);
var inst_33165 = f__$1.call(null,inst_33164);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33167__$1,inst_33165);
} else {
return null;
}
}
});})(c__32644__auto__,f__$1))
;
return ((function (switch__32549__auto__,c__32644__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32550__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32550__auto____0 = (function (){
var statearr_33169 = [null,null,null,null,null,null,null];
(statearr_33169[(0)] = cljs$core$async$transduce_$_state_machine__32550__auto__);

(statearr_33169[(1)] = (1));

return statearr_33169;
});
var cljs$core$async$transduce_$_state_machine__32550__auto____1 = (function (state_33167){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33170){if((e33170 instanceof Object)){
var ex__32553__auto__ = e33170;
var statearr_33171_33173 = state_33167;
(statearr_33171_33173[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33174 = state_33167;
state_33167 = G__33174;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32550__auto__ = function(state_33167){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32550__auto____1.call(this,state_33167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32550__auto____0;
cljs$core$async$transduce_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32550__auto____1;
return cljs$core$async$transduce_$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto__,f__$1))
})();
var state__32646__auto__ = (function (){var statearr_33172 = f__32645__auto__.call(null);
(statearr_33172[(6)] = c__32644__auto__);

return statearr_33172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto__,f__$1))
);

return c__32644__auto__;
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
var G__33176 = arguments.length;
switch (G__33176) {
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
var c__32644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto__){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto__){
return (function (state_33201){
var state_val_33202 = (state_33201[(1)]);
if((state_val_33202 === (7))){
var inst_33183 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33203_33224 = state_33201__$1;
(statearr_33203_33224[(2)] = inst_33183);

(statearr_33203_33224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (1))){
var inst_33177 = cljs.core.seq.call(null,coll);
var inst_33178 = inst_33177;
var state_33201__$1 = (function (){var statearr_33204 = state_33201;
(statearr_33204[(7)] = inst_33178);

return statearr_33204;
})();
var statearr_33205_33225 = state_33201__$1;
(statearr_33205_33225[(2)] = null);

(statearr_33205_33225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (4))){
var inst_33178 = (state_33201[(7)]);
var inst_33181 = cljs.core.first.call(null,inst_33178);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33201__$1,(7),ch,inst_33181);
} else {
if((state_val_33202 === (13))){
var inst_33195 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33206_33226 = state_33201__$1;
(statearr_33206_33226[(2)] = inst_33195);

(statearr_33206_33226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (6))){
var inst_33186 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
if(cljs.core.truth_(inst_33186)){
var statearr_33207_33227 = state_33201__$1;
(statearr_33207_33227[(1)] = (8));

} else {
var statearr_33208_33228 = state_33201__$1;
(statearr_33208_33228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (3))){
var inst_33199 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33201__$1,inst_33199);
} else {
if((state_val_33202 === (12))){
var state_33201__$1 = state_33201;
var statearr_33209_33229 = state_33201__$1;
(statearr_33209_33229[(2)] = null);

(statearr_33209_33229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (2))){
var inst_33178 = (state_33201[(7)]);
var state_33201__$1 = state_33201;
if(cljs.core.truth_(inst_33178)){
var statearr_33210_33230 = state_33201__$1;
(statearr_33210_33230[(1)] = (4));

} else {
var statearr_33211_33231 = state_33201__$1;
(statearr_33211_33231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (11))){
var inst_33192 = cljs.core.async.close_BANG_.call(null,ch);
var state_33201__$1 = state_33201;
var statearr_33212_33232 = state_33201__$1;
(statearr_33212_33232[(2)] = inst_33192);

(statearr_33212_33232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (9))){
var state_33201__$1 = state_33201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33213_33233 = state_33201__$1;
(statearr_33213_33233[(1)] = (11));

} else {
var statearr_33214_33234 = state_33201__$1;
(statearr_33214_33234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (5))){
var inst_33178 = (state_33201[(7)]);
var state_33201__$1 = state_33201;
var statearr_33215_33235 = state_33201__$1;
(statearr_33215_33235[(2)] = inst_33178);

(statearr_33215_33235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (10))){
var inst_33197 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33216_33236 = state_33201__$1;
(statearr_33216_33236[(2)] = inst_33197);

(statearr_33216_33236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (8))){
var inst_33178 = (state_33201[(7)]);
var inst_33188 = cljs.core.next.call(null,inst_33178);
var inst_33178__$1 = inst_33188;
var state_33201__$1 = (function (){var statearr_33217 = state_33201;
(statearr_33217[(7)] = inst_33178__$1);

return statearr_33217;
})();
var statearr_33218_33237 = state_33201__$1;
(statearr_33218_33237[(2)] = null);

(statearr_33218_33237[(1)] = (2));


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
});})(c__32644__auto__))
;
return ((function (switch__32549__auto__,c__32644__auto__){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_33219 = [null,null,null,null,null,null,null,null];
(statearr_33219[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_33219[(1)] = (1));

return statearr_33219;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_33201){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33220){if((e33220 instanceof Object)){
var ex__32553__auto__ = e33220;
var statearr_33221_33238 = state_33201;
(statearr_33221_33238[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33239 = state_33201;
state_33201 = G__33239;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_33201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_33201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto__))
})();
var state__32646__auto__ = (function (){var statearr_33222 = f__32645__auto__.call(null);
(statearr_33222[(6)] = c__32644__auto__);

return statearr_33222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto__))
);

return c__32644__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33240 = (function (ch,cs,meta33241){
this.ch = ch;
this.cs = cs;
this.meta33241 = meta33241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33242,meta33241__$1){
var self__ = this;
var _33242__$1 = this;
return (new cljs.core.async.t_cljs$core$async33240(self__.ch,self__.cs,meta33241__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33242){
var self__ = this;
var _33242__$1 = this;
return self__.meta33241;
});})(cs))
;

cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33240.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33241","meta33241",-1465349928,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33240";

cljs.core.async.t_cljs$core$async33240.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33240");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33240.
 */
cljs.core.async.__GT_t_cljs$core$async33240 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33240(ch__$1,cs__$1,meta33241){
return (new cljs.core.async.t_cljs$core$async33240(ch__$1,cs__$1,meta33241));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33240(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32644__auto___33462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___33462,cs,m,dchan,dctr,done){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___33462,cs,m,dchan,dctr,done){
return (function (state_33377){
var state_val_33378 = (state_33377[(1)]);
if((state_val_33378 === (7))){
var inst_33373 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33379_33463 = state_33377__$1;
(statearr_33379_33463[(2)] = inst_33373);

(statearr_33379_33463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (20))){
var inst_33276 = (state_33377[(7)]);
var inst_33288 = cljs.core.first.call(null,inst_33276);
var inst_33289 = cljs.core.nth.call(null,inst_33288,(0),null);
var inst_33290 = cljs.core.nth.call(null,inst_33288,(1),null);
var state_33377__$1 = (function (){var statearr_33380 = state_33377;
(statearr_33380[(8)] = inst_33289);

return statearr_33380;
})();
if(cljs.core.truth_(inst_33290)){
var statearr_33381_33464 = state_33377__$1;
(statearr_33381_33464[(1)] = (22));

} else {
var statearr_33382_33465 = state_33377__$1;
(statearr_33382_33465[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (27))){
var inst_33318 = (state_33377[(9)]);
var inst_33325 = (state_33377[(10)]);
var inst_33320 = (state_33377[(11)]);
var inst_33245 = (state_33377[(12)]);
var inst_33325__$1 = cljs.core._nth.call(null,inst_33318,inst_33320);
var inst_33326 = cljs.core.async.put_BANG_.call(null,inst_33325__$1,inst_33245,done);
var state_33377__$1 = (function (){var statearr_33383 = state_33377;
(statearr_33383[(10)] = inst_33325__$1);

return statearr_33383;
})();
if(cljs.core.truth_(inst_33326)){
var statearr_33384_33466 = state_33377__$1;
(statearr_33384_33466[(1)] = (30));

} else {
var statearr_33385_33467 = state_33377__$1;
(statearr_33385_33467[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (1))){
var state_33377__$1 = state_33377;
var statearr_33386_33468 = state_33377__$1;
(statearr_33386_33468[(2)] = null);

(statearr_33386_33468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (24))){
var inst_33276 = (state_33377[(7)]);
var inst_33295 = (state_33377[(2)]);
var inst_33296 = cljs.core.next.call(null,inst_33276);
var inst_33254 = inst_33296;
var inst_33255 = null;
var inst_33256 = (0);
var inst_33257 = (0);
var state_33377__$1 = (function (){var statearr_33387 = state_33377;
(statearr_33387[(13)] = inst_33257);

(statearr_33387[(14)] = inst_33255);

(statearr_33387[(15)] = inst_33295);

(statearr_33387[(16)] = inst_33256);

(statearr_33387[(17)] = inst_33254);

return statearr_33387;
})();
var statearr_33388_33469 = state_33377__$1;
(statearr_33388_33469[(2)] = null);

(statearr_33388_33469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (39))){
var state_33377__$1 = state_33377;
var statearr_33392_33470 = state_33377__$1;
(statearr_33392_33470[(2)] = null);

(statearr_33392_33470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (4))){
var inst_33245 = (state_33377[(12)]);
var inst_33245__$1 = (state_33377[(2)]);
var inst_33246 = (inst_33245__$1 == null);
var state_33377__$1 = (function (){var statearr_33393 = state_33377;
(statearr_33393[(12)] = inst_33245__$1);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33246)){
var statearr_33394_33471 = state_33377__$1;
(statearr_33394_33471[(1)] = (5));

} else {
var statearr_33395_33472 = state_33377__$1;
(statearr_33395_33472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (15))){
var inst_33257 = (state_33377[(13)]);
var inst_33255 = (state_33377[(14)]);
var inst_33256 = (state_33377[(16)]);
var inst_33254 = (state_33377[(17)]);
var inst_33272 = (state_33377[(2)]);
var inst_33273 = (inst_33257 + (1));
var tmp33389 = inst_33255;
var tmp33390 = inst_33256;
var tmp33391 = inst_33254;
var inst_33254__$1 = tmp33391;
var inst_33255__$1 = tmp33389;
var inst_33256__$1 = tmp33390;
var inst_33257__$1 = inst_33273;
var state_33377__$1 = (function (){var statearr_33396 = state_33377;
(statearr_33396[(13)] = inst_33257__$1);

(statearr_33396[(14)] = inst_33255__$1);

(statearr_33396[(16)] = inst_33256__$1);

(statearr_33396[(18)] = inst_33272);

(statearr_33396[(17)] = inst_33254__$1);

return statearr_33396;
})();
var statearr_33397_33473 = state_33377__$1;
(statearr_33397_33473[(2)] = null);

(statearr_33397_33473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (21))){
var inst_33299 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33401_33474 = state_33377__$1;
(statearr_33401_33474[(2)] = inst_33299);

(statearr_33401_33474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (31))){
var inst_33325 = (state_33377[(10)]);
var inst_33329 = done.call(null,null);
var inst_33330 = cljs.core.async.untap_STAR_.call(null,m,inst_33325);
var state_33377__$1 = (function (){var statearr_33402 = state_33377;
(statearr_33402[(19)] = inst_33329);

return statearr_33402;
})();
var statearr_33403_33475 = state_33377__$1;
(statearr_33403_33475[(2)] = inst_33330);

(statearr_33403_33475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (32))){
var inst_33317 = (state_33377[(20)]);
var inst_33318 = (state_33377[(9)]);
var inst_33319 = (state_33377[(21)]);
var inst_33320 = (state_33377[(11)]);
var inst_33332 = (state_33377[(2)]);
var inst_33333 = (inst_33320 + (1));
var tmp33398 = inst_33317;
var tmp33399 = inst_33318;
var tmp33400 = inst_33319;
var inst_33317__$1 = tmp33398;
var inst_33318__$1 = tmp33399;
var inst_33319__$1 = tmp33400;
var inst_33320__$1 = inst_33333;
var state_33377__$1 = (function (){var statearr_33404 = state_33377;
(statearr_33404[(20)] = inst_33317__$1);

(statearr_33404[(22)] = inst_33332);

(statearr_33404[(9)] = inst_33318__$1);

(statearr_33404[(21)] = inst_33319__$1);

(statearr_33404[(11)] = inst_33320__$1);

return statearr_33404;
})();
var statearr_33405_33476 = state_33377__$1;
(statearr_33405_33476[(2)] = null);

(statearr_33405_33476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (40))){
var inst_33345 = (state_33377[(23)]);
var inst_33349 = done.call(null,null);
var inst_33350 = cljs.core.async.untap_STAR_.call(null,m,inst_33345);
var state_33377__$1 = (function (){var statearr_33406 = state_33377;
(statearr_33406[(24)] = inst_33349);

return statearr_33406;
})();
var statearr_33407_33477 = state_33377__$1;
(statearr_33407_33477[(2)] = inst_33350);

(statearr_33407_33477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (33))){
var inst_33336 = (state_33377[(25)]);
var inst_33338 = cljs.core.chunked_seq_QMARK_.call(null,inst_33336);
var state_33377__$1 = state_33377;
if(inst_33338){
var statearr_33408_33478 = state_33377__$1;
(statearr_33408_33478[(1)] = (36));

} else {
var statearr_33409_33479 = state_33377__$1;
(statearr_33409_33479[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (13))){
var inst_33266 = (state_33377[(26)]);
var inst_33269 = cljs.core.async.close_BANG_.call(null,inst_33266);
var state_33377__$1 = state_33377;
var statearr_33410_33480 = state_33377__$1;
(statearr_33410_33480[(2)] = inst_33269);

(statearr_33410_33480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (22))){
var inst_33289 = (state_33377[(8)]);
var inst_33292 = cljs.core.async.close_BANG_.call(null,inst_33289);
var state_33377__$1 = state_33377;
var statearr_33411_33481 = state_33377__$1;
(statearr_33411_33481[(2)] = inst_33292);

(statearr_33411_33481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (36))){
var inst_33336 = (state_33377[(25)]);
var inst_33340 = cljs.core.chunk_first.call(null,inst_33336);
var inst_33341 = cljs.core.chunk_rest.call(null,inst_33336);
var inst_33342 = cljs.core.count.call(null,inst_33340);
var inst_33317 = inst_33341;
var inst_33318 = inst_33340;
var inst_33319 = inst_33342;
var inst_33320 = (0);
var state_33377__$1 = (function (){var statearr_33412 = state_33377;
(statearr_33412[(20)] = inst_33317);

(statearr_33412[(9)] = inst_33318);

(statearr_33412[(21)] = inst_33319);

(statearr_33412[(11)] = inst_33320);

return statearr_33412;
})();
var statearr_33413_33482 = state_33377__$1;
(statearr_33413_33482[(2)] = null);

(statearr_33413_33482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (41))){
var inst_33336 = (state_33377[(25)]);
var inst_33352 = (state_33377[(2)]);
var inst_33353 = cljs.core.next.call(null,inst_33336);
var inst_33317 = inst_33353;
var inst_33318 = null;
var inst_33319 = (0);
var inst_33320 = (0);
var state_33377__$1 = (function (){var statearr_33414 = state_33377;
(statearr_33414[(20)] = inst_33317);

(statearr_33414[(9)] = inst_33318);

(statearr_33414[(21)] = inst_33319);

(statearr_33414[(27)] = inst_33352);

(statearr_33414[(11)] = inst_33320);

return statearr_33414;
})();
var statearr_33415_33483 = state_33377__$1;
(statearr_33415_33483[(2)] = null);

(statearr_33415_33483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (43))){
var state_33377__$1 = state_33377;
var statearr_33416_33484 = state_33377__$1;
(statearr_33416_33484[(2)] = null);

(statearr_33416_33484[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (29))){
var inst_33361 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33417_33485 = state_33377__$1;
(statearr_33417_33485[(2)] = inst_33361);

(statearr_33417_33485[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (44))){
var inst_33370 = (state_33377[(2)]);
var state_33377__$1 = (function (){var statearr_33418 = state_33377;
(statearr_33418[(28)] = inst_33370);

return statearr_33418;
})();
var statearr_33419_33486 = state_33377__$1;
(statearr_33419_33486[(2)] = null);

(statearr_33419_33486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (6))){
var inst_33309 = (state_33377[(29)]);
var inst_33308 = cljs.core.deref.call(null,cs);
var inst_33309__$1 = cljs.core.keys.call(null,inst_33308);
var inst_33310 = cljs.core.count.call(null,inst_33309__$1);
var inst_33311 = cljs.core.reset_BANG_.call(null,dctr,inst_33310);
var inst_33316 = cljs.core.seq.call(null,inst_33309__$1);
var inst_33317 = inst_33316;
var inst_33318 = null;
var inst_33319 = (0);
var inst_33320 = (0);
var state_33377__$1 = (function (){var statearr_33420 = state_33377;
(statearr_33420[(20)] = inst_33317);

(statearr_33420[(29)] = inst_33309__$1);

(statearr_33420[(9)] = inst_33318);

(statearr_33420[(21)] = inst_33319);

(statearr_33420[(11)] = inst_33320);

(statearr_33420[(30)] = inst_33311);

return statearr_33420;
})();
var statearr_33421_33487 = state_33377__$1;
(statearr_33421_33487[(2)] = null);

(statearr_33421_33487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (28))){
var inst_33317 = (state_33377[(20)]);
var inst_33336 = (state_33377[(25)]);
var inst_33336__$1 = cljs.core.seq.call(null,inst_33317);
var state_33377__$1 = (function (){var statearr_33422 = state_33377;
(statearr_33422[(25)] = inst_33336__$1);

return statearr_33422;
})();
if(inst_33336__$1){
var statearr_33423_33488 = state_33377__$1;
(statearr_33423_33488[(1)] = (33));

} else {
var statearr_33424_33489 = state_33377__$1;
(statearr_33424_33489[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (25))){
var inst_33319 = (state_33377[(21)]);
var inst_33320 = (state_33377[(11)]);
var inst_33322 = (inst_33320 < inst_33319);
var inst_33323 = inst_33322;
var state_33377__$1 = state_33377;
if(cljs.core.truth_(inst_33323)){
var statearr_33425_33490 = state_33377__$1;
(statearr_33425_33490[(1)] = (27));

} else {
var statearr_33426_33491 = state_33377__$1;
(statearr_33426_33491[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (34))){
var state_33377__$1 = state_33377;
var statearr_33427_33492 = state_33377__$1;
(statearr_33427_33492[(2)] = null);

(statearr_33427_33492[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (17))){
var state_33377__$1 = state_33377;
var statearr_33428_33493 = state_33377__$1;
(statearr_33428_33493[(2)] = null);

(statearr_33428_33493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (3))){
var inst_33375 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33377__$1,inst_33375);
} else {
if((state_val_33378 === (12))){
var inst_33304 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33429_33494 = state_33377__$1;
(statearr_33429_33494[(2)] = inst_33304);

(statearr_33429_33494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (2))){
var state_33377__$1 = state_33377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33377__$1,(4),ch);
} else {
if((state_val_33378 === (23))){
var state_33377__$1 = state_33377;
var statearr_33430_33495 = state_33377__$1;
(statearr_33430_33495[(2)] = null);

(statearr_33430_33495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (35))){
var inst_33359 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33431_33496 = state_33377__$1;
(statearr_33431_33496[(2)] = inst_33359);

(statearr_33431_33496[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (19))){
var inst_33276 = (state_33377[(7)]);
var inst_33280 = cljs.core.chunk_first.call(null,inst_33276);
var inst_33281 = cljs.core.chunk_rest.call(null,inst_33276);
var inst_33282 = cljs.core.count.call(null,inst_33280);
var inst_33254 = inst_33281;
var inst_33255 = inst_33280;
var inst_33256 = inst_33282;
var inst_33257 = (0);
var state_33377__$1 = (function (){var statearr_33432 = state_33377;
(statearr_33432[(13)] = inst_33257);

(statearr_33432[(14)] = inst_33255);

(statearr_33432[(16)] = inst_33256);

(statearr_33432[(17)] = inst_33254);

return statearr_33432;
})();
var statearr_33433_33497 = state_33377__$1;
(statearr_33433_33497[(2)] = null);

(statearr_33433_33497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (11))){
var inst_33276 = (state_33377[(7)]);
var inst_33254 = (state_33377[(17)]);
var inst_33276__$1 = cljs.core.seq.call(null,inst_33254);
var state_33377__$1 = (function (){var statearr_33434 = state_33377;
(statearr_33434[(7)] = inst_33276__$1);

return statearr_33434;
})();
if(inst_33276__$1){
var statearr_33435_33498 = state_33377__$1;
(statearr_33435_33498[(1)] = (16));

} else {
var statearr_33436_33499 = state_33377__$1;
(statearr_33436_33499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (9))){
var inst_33306 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33437_33500 = state_33377__$1;
(statearr_33437_33500[(2)] = inst_33306);

(statearr_33437_33500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (5))){
var inst_33252 = cljs.core.deref.call(null,cs);
var inst_33253 = cljs.core.seq.call(null,inst_33252);
var inst_33254 = inst_33253;
var inst_33255 = null;
var inst_33256 = (0);
var inst_33257 = (0);
var state_33377__$1 = (function (){var statearr_33438 = state_33377;
(statearr_33438[(13)] = inst_33257);

(statearr_33438[(14)] = inst_33255);

(statearr_33438[(16)] = inst_33256);

(statearr_33438[(17)] = inst_33254);

return statearr_33438;
})();
var statearr_33439_33501 = state_33377__$1;
(statearr_33439_33501[(2)] = null);

(statearr_33439_33501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (14))){
var state_33377__$1 = state_33377;
var statearr_33440_33502 = state_33377__$1;
(statearr_33440_33502[(2)] = null);

(statearr_33440_33502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (45))){
var inst_33367 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33441_33503 = state_33377__$1;
(statearr_33441_33503[(2)] = inst_33367);

(statearr_33441_33503[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (26))){
var inst_33309 = (state_33377[(29)]);
var inst_33363 = (state_33377[(2)]);
var inst_33364 = cljs.core.seq.call(null,inst_33309);
var state_33377__$1 = (function (){var statearr_33442 = state_33377;
(statearr_33442[(31)] = inst_33363);

return statearr_33442;
})();
if(inst_33364){
var statearr_33443_33504 = state_33377__$1;
(statearr_33443_33504[(1)] = (42));

} else {
var statearr_33444_33505 = state_33377__$1;
(statearr_33444_33505[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (16))){
var inst_33276 = (state_33377[(7)]);
var inst_33278 = cljs.core.chunked_seq_QMARK_.call(null,inst_33276);
var state_33377__$1 = state_33377;
if(inst_33278){
var statearr_33445_33506 = state_33377__$1;
(statearr_33445_33506[(1)] = (19));

} else {
var statearr_33446_33507 = state_33377__$1;
(statearr_33446_33507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (38))){
var inst_33356 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33447_33508 = state_33377__$1;
(statearr_33447_33508[(2)] = inst_33356);

(statearr_33447_33508[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (30))){
var state_33377__$1 = state_33377;
var statearr_33448_33509 = state_33377__$1;
(statearr_33448_33509[(2)] = null);

(statearr_33448_33509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (10))){
var inst_33257 = (state_33377[(13)]);
var inst_33255 = (state_33377[(14)]);
var inst_33265 = cljs.core._nth.call(null,inst_33255,inst_33257);
var inst_33266 = cljs.core.nth.call(null,inst_33265,(0),null);
var inst_33267 = cljs.core.nth.call(null,inst_33265,(1),null);
var state_33377__$1 = (function (){var statearr_33449 = state_33377;
(statearr_33449[(26)] = inst_33266);

return statearr_33449;
})();
if(cljs.core.truth_(inst_33267)){
var statearr_33450_33510 = state_33377__$1;
(statearr_33450_33510[(1)] = (13));

} else {
var statearr_33451_33511 = state_33377__$1;
(statearr_33451_33511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (18))){
var inst_33302 = (state_33377[(2)]);
var state_33377__$1 = state_33377;
var statearr_33452_33512 = state_33377__$1;
(statearr_33452_33512[(2)] = inst_33302);

(statearr_33452_33512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (42))){
var state_33377__$1 = state_33377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33377__$1,(45),dchan);
} else {
if((state_val_33378 === (37))){
var inst_33336 = (state_33377[(25)]);
var inst_33245 = (state_33377[(12)]);
var inst_33345 = (state_33377[(23)]);
var inst_33345__$1 = cljs.core.first.call(null,inst_33336);
var inst_33346 = cljs.core.async.put_BANG_.call(null,inst_33345__$1,inst_33245,done);
var state_33377__$1 = (function (){var statearr_33453 = state_33377;
(statearr_33453[(23)] = inst_33345__$1);

return statearr_33453;
})();
if(cljs.core.truth_(inst_33346)){
var statearr_33454_33513 = state_33377__$1;
(statearr_33454_33513[(1)] = (39));

} else {
var statearr_33455_33514 = state_33377__$1;
(statearr_33455_33514[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33378 === (8))){
var inst_33257 = (state_33377[(13)]);
var inst_33256 = (state_33377[(16)]);
var inst_33259 = (inst_33257 < inst_33256);
var inst_33260 = inst_33259;
var state_33377__$1 = state_33377;
if(cljs.core.truth_(inst_33260)){
var statearr_33456_33515 = state_33377__$1;
(statearr_33456_33515[(1)] = (10));

} else {
var statearr_33457_33516 = state_33377__$1;
(statearr_33457_33516[(1)] = (11));

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
});})(c__32644__auto___33462,cs,m,dchan,dctr,done))
;
return ((function (switch__32549__auto__,c__32644__auto___33462,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32550__auto__ = null;
var cljs$core$async$mult_$_state_machine__32550__auto____0 = (function (){
var statearr_33458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33458[(0)] = cljs$core$async$mult_$_state_machine__32550__auto__);

(statearr_33458[(1)] = (1));

return statearr_33458;
});
var cljs$core$async$mult_$_state_machine__32550__auto____1 = (function (state_33377){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33459){if((e33459 instanceof Object)){
var ex__32553__auto__ = e33459;
var statearr_33460_33517 = state_33377;
(statearr_33460_33517[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33518 = state_33377;
state_33377 = G__33518;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32550__auto__ = function(state_33377){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32550__auto____1.call(this,state_33377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32550__auto____0;
cljs$core$async$mult_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32550__auto____1;
return cljs$core$async$mult_$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___33462,cs,m,dchan,dctr,done))
})();
var state__32646__auto__ = (function (){var statearr_33461 = f__32645__auto__.call(null);
(statearr_33461[(6)] = c__32644__auto___33462);

return statearr_33461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___33462,cs,m,dchan,dctr,done))
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
var G__33520 = arguments.length;
switch (G__33520) {
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
var len__4730__auto___33532 = arguments.length;
var i__4731__auto___33533 = (0);
while(true){
if((i__4731__auto___33533 < len__4730__auto___33532)){
args__4736__auto__.push((arguments[i__4731__auto___33533]));

var G__33534 = (i__4731__auto___33533 + (1));
i__4731__auto___33533 = G__33534;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33526){
var map__33527 = p__33526;
var map__33527__$1 = (((((!((map__33527 == null))))?(((((map__33527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33527):map__33527);
var opts = map__33527__$1;
var statearr_33529_33535 = state;
(statearr_33529_33535[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33527,map__33527__$1,opts){
return (function (val){
var statearr_33530_33536 = state;
(statearr_33530_33536[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33527,map__33527__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33531_33537 = state;
(statearr_33531_33537[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33522){
var G__33523 = cljs.core.first.call(null,seq33522);
var seq33522__$1 = cljs.core.next.call(null,seq33522);
var G__33524 = cljs.core.first.call(null,seq33522__$1);
var seq33522__$2 = cljs.core.next.call(null,seq33522__$1);
var G__33525 = cljs.core.first.call(null,seq33522__$2);
var seq33522__$3 = cljs.core.next.call(null,seq33522__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33523,G__33524,G__33525,seq33522__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33538 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33539){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33539 = meta33539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33540,meta33539__$1){
var self__ = this;
var _33540__$1 = this;
return (new cljs.core.async.t_cljs$core$async33538(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33539__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33540){
var self__ = this;
var _33540__$1 = this;
return self__.meta33539;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33538.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33539","meta33539",-2130794877,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33538";

cljs.core.async.t_cljs$core$async33538.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33538");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33538.
 */
cljs.core.async.__GT_t_cljs$core$async33538 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33538(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33539){
return (new cljs.core.async.t_cljs$core$async33538(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33539));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33538(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32644__auto___33702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___33702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___33702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33642){
var state_val_33643 = (state_33642[(1)]);
if((state_val_33643 === (7))){
var inst_33557 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33644_33703 = state_33642__$1;
(statearr_33644_33703[(2)] = inst_33557);

(statearr_33644_33703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (20))){
var inst_33569 = (state_33642[(7)]);
var state_33642__$1 = state_33642;
var statearr_33645_33704 = state_33642__$1;
(statearr_33645_33704[(2)] = inst_33569);

(statearr_33645_33704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (27))){
var state_33642__$1 = state_33642;
var statearr_33646_33705 = state_33642__$1;
(statearr_33646_33705[(2)] = null);

(statearr_33646_33705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (1))){
var inst_33544 = (state_33642[(8)]);
var inst_33544__$1 = calc_state.call(null);
var inst_33546 = (inst_33544__$1 == null);
var inst_33547 = cljs.core.not.call(null,inst_33546);
var state_33642__$1 = (function (){var statearr_33647 = state_33642;
(statearr_33647[(8)] = inst_33544__$1);

return statearr_33647;
})();
if(inst_33547){
var statearr_33648_33706 = state_33642__$1;
(statearr_33648_33706[(1)] = (2));

} else {
var statearr_33649_33707 = state_33642__$1;
(statearr_33649_33707[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (24))){
var inst_33593 = (state_33642[(9)]);
var inst_33616 = (state_33642[(10)]);
var inst_33602 = (state_33642[(11)]);
var inst_33616__$1 = inst_33593.call(null,inst_33602);
var state_33642__$1 = (function (){var statearr_33650 = state_33642;
(statearr_33650[(10)] = inst_33616__$1);

return statearr_33650;
})();
if(cljs.core.truth_(inst_33616__$1)){
var statearr_33651_33708 = state_33642__$1;
(statearr_33651_33708[(1)] = (29));

} else {
var statearr_33652_33709 = state_33642__$1;
(statearr_33652_33709[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (4))){
var inst_33560 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33560)){
var statearr_33653_33710 = state_33642__$1;
(statearr_33653_33710[(1)] = (8));

} else {
var statearr_33654_33711 = state_33642__$1;
(statearr_33654_33711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (15))){
var inst_33587 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33587)){
var statearr_33655_33712 = state_33642__$1;
(statearr_33655_33712[(1)] = (19));

} else {
var statearr_33656_33713 = state_33642__$1;
(statearr_33656_33713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (21))){
var inst_33592 = (state_33642[(12)]);
var inst_33592__$1 = (state_33642[(2)]);
var inst_33593 = cljs.core.get.call(null,inst_33592__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33594 = cljs.core.get.call(null,inst_33592__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33595 = cljs.core.get.call(null,inst_33592__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33642__$1 = (function (){var statearr_33657 = state_33642;
(statearr_33657[(9)] = inst_33593);

(statearr_33657[(13)] = inst_33594);

(statearr_33657[(12)] = inst_33592__$1);

return statearr_33657;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33642__$1,(22),inst_33595);
} else {
if((state_val_33643 === (31))){
var inst_33624 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33624)){
var statearr_33658_33714 = state_33642__$1;
(statearr_33658_33714[(1)] = (32));

} else {
var statearr_33659_33715 = state_33642__$1;
(statearr_33659_33715[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (32))){
var inst_33601 = (state_33642[(14)]);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33642__$1,(35),out,inst_33601);
} else {
if((state_val_33643 === (33))){
var inst_33592 = (state_33642[(12)]);
var inst_33569 = inst_33592;
var state_33642__$1 = (function (){var statearr_33660 = state_33642;
(statearr_33660[(7)] = inst_33569);

return statearr_33660;
})();
var statearr_33661_33716 = state_33642__$1;
(statearr_33661_33716[(2)] = null);

(statearr_33661_33716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (13))){
var inst_33569 = (state_33642[(7)]);
var inst_33576 = inst_33569.cljs$lang$protocol_mask$partition0$;
var inst_33577 = (inst_33576 & (64));
var inst_33578 = inst_33569.cljs$core$ISeq$;
var inst_33579 = (cljs.core.PROTOCOL_SENTINEL === inst_33578);
var inst_33580 = ((inst_33577) || (inst_33579));
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33580)){
var statearr_33662_33717 = state_33642__$1;
(statearr_33662_33717[(1)] = (16));

} else {
var statearr_33663_33718 = state_33642__$1;
(statearr_33663_33718[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (22))){
var inst_33601 = (state_33642[(14)]);
var inst_33602 = (state_33642[(11)]);
var inst_33600 = (state_33642[(2)]);
var inst_33601__$1 = cljs.core.nth.call(null,inst_33600,(0),null);
var inst_33602__$1 = cljs.core.nth.call(null,inst_33600,(1),null);
var inst_33603 = (inst_33601__$1 == null);
var inst_33604 = cljs.core._EQ_.call(null,inst_33602__$1,change);
var inst_33605 = ((inst_33603) || (inst_33604));
var state_33642__$1 = (function (){var statearr_33664 = state_33642;
(statearr_33664[(14)] = inst_33601__$1);

(statearr_33664[(11)] = inst_33602__$1);

return statearr_33664;
})();
if(cljs.core.truth_(inst_33605)){
var statearr_33665_33719 = state_33642__$1;
(statearr_33665_33719[(1)] = (23));

} else {
var statearr_33666_33720 = state_33642__$1;
(statearr_33666_33720[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (36))){
var inst_33592 = (state_33642[(12)]);
var inst_33569 = inst_33592;
var state_33642__$1 = (function (){var statearr_33667 = state_33642;
(statearr_33667[(7)] = inst_33569);

return statearr_33667;
})();
var statearr_33668_33721 = state_33642__$1;
(statearr_33668_33721[(2)] = null);

(statearr_33668_33721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (29))){
var inst_33616 = (state_33642[(10)]);
var state_33642__$1 = state_33642;
var statearr_33669_33722 = state_33642__$1;
(statearr_33669_33722[(2)] = inst_33616);

(statearr_33669_33722[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (6))){
var state_33642__$1 = state_33642;
var statearr_33670_33723 = state_33642__$1;
(statearr_33670_33723[(2)] = false);

(statearr_33670_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (28))){
var inst_33612 = (state_33642[(2)]);
var inst_33613 = calc_state.call(null);
var inst_33569 = inst_33613;
var state_33642__$1 = (function (){var statearr_33671 = state_33642;
(statearr_33671[(7)] = inst_33569);

(statearr_33671[(15)] = inst_33612);

return statearr_33671;
})();
var statearr_33672_33724 = state_33642__$1;
(statearr_33672_33724[(2)] = null);

(statearr_33672_33724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (25))){
var inst_33638 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33673_33725 = state_33642__$1;
(statearr_33673_33725[(2)] = inst_33638);

(statearr_33673_33725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (34))){
var inst_33636 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33674_33726 = state_33642__$1;
(statearr_33674_33726[(2)] = inst_33636);

(statearr_33674_33726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (17))){
var state_33642__$1 = state_33642;
var statearr_33675_33727 = state_33642__$1;
(statearr_33675_33727[(2)] = false);

(statearr_33675_33727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (3))){
var state_33642__$1 = state_33642;
var statearr_33676_33728 = state_33642__$1;
(statearr_33676_33728[(2)] = false);

(statearr_33676_33728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (12))){
var inst_33640 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33642__$1,inst_33640);
} else {
if((state_val_33643 === (2))){
var inst_33544 = (state_33642[(8)]);
var inst_33549 = inst_33544.cljs$lang$protocol_mask$partition0$;
var inst_33550 = (inst_33549 & (64));
var inst_33551 = inst_33544.cljs$core$ISeq$;
var inst_33552 = (cljs.core.PROTOCOL_SENTINEL === inst_33551);
var inst_33553 = ((inst_33550) || (inst_33552));
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33553)){
var statearr_33677_33729 = state_33642__$1;
(statearr_33677_33729[(1)] = (5));

} else {
var statearr_33678_33730 = state_33642__$1;
(statearr_33678_33730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (23))){
var inst_33601 = (state_33642[(14)]);
var inst_33607 = (inst_33601 == null);
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33607)){
var statearr_33679_33731 = state_33642__$1;
(statearr_33679_33731[(1)] = (26));

} else {
var statearr_33680_33732 = state_33642__$1;
(statearr_33680_33732[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (35))){
var inst_33627 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33627)){
var statearr_33681_33733 = state_33642__$1;
(statearr_33681_33733[(1)] = (36));

} else {
var statearr_33682_33734 = state_33642__$1;
(statearr_33682_33734[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (19))){
var inst_33569 = (state_33642[(7)]);
var inst_33589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33569);
var state_33642__$1 = state_33642;
var statearr_33683_33735 = state_33642__$1;
(statearr_33683_33735[(2)] = inst_33589);

(statearr_33683_33735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (11))){
var inst_33569 = (state_33642[(7)]);
var inst_33573 = (inst_33569 == null);
var inst_33574 = cljs.core.not.call(null,inst_33573);
var state_33642__$1 = state_33642;
if(inst_33574){
var statearr_33684_33736 = state_33642__$1;
(statearr_33684_33736[(1)] = (13));

} else {
var statearr_33685_33737 = state_33642__$1;
(statearr_33685_33737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (9))){
var inst_33544 = (state_33642[(8)]);
var state_33642__$1 = state_33642;
var statearr_33686_33738 = state_33642__$1;
(statearr_33686_33738[(2)] = inst_33544);

(statearr_33686_33738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (5))){
var state_33642__$1 = state_33642;
var statearr_33687_33739 = state_33642__$1;
(statearr_33687_33739[(2)] = true);

(statearr_33687_33739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (14))){
var state_33642__$1 = state_33642;
var statearr_33688_33740 = state_33642__$1;
(statearr_33688_33740[(2)] = false);

(statearr_33688_33740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (26))){
var inst_33602 = (state_33642[(11)]);
var inst_33609 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33602);
var state_33642__$1 = state_33642;
var statearr_33689_33741 = state_33642__$1;
(statearr_33689_33741[(2)] = inst_33609);

(statearr_33689_33741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (16))){
var state_33642__$1 = state_33642;
var statearr_33690_33742 = state_33642__$1;
(statearr_33690_33742[(2)] = true);

(statearr_33690_33742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (38))){
var inst_33632 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33691_33743 = state_33642__$1;
(statearr_33691_33743[(2)] = inst_33632);

(statearr_33691_33743[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (30))){
var inst_33593 = (state_33642[(9)]);
var inst_33594 = (state_33642[(13)]);
var inst_33602 = (state_33642[(11)]);
var inst_33619 = cljs.core.empty_QMARK_.call(null,inst_33593);
var inst_33620 = inst_33594.call(null,inst_33602);
var inst_33621 = cljs.core.not.call(null,inst_33620);
var inst_33622 = ((inst_33619) && (inst_33621));
var state_33642__$1 = state_33642;
var statearr_33692_33744 = state_33642__$1;
(statearr_33692_33744[(2)] = inst_33622);

(statearr_33692_33744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (10))){
var inst_33544 = (state_33642[(8)]);
var inst_33565 = (state_33642[(2)]);
var inst_33566 = cljs.core.get.call(null,inst_33565,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33567 = cljs.core.get.call(null,inst_33565,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33568 = cljs.core.get.call(null,inst_33565,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33569 = inst_33544;
var state_33642__$1 = (function (){var statearr_33693 = state_33642;
(statearr_33693[(7)] = inst_33569);

(statearr_33693[(16)] = inst_33567);

(statearr_33693[(17)] = inst_33566);

(statearr_33693[(18)] = inst_33568);

return statearr_33693;
})();
var statearr_33694_33745 = state_33642__$1;
(statearr_33694_33745[(2)] = null);

(statearr_33694_33745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (18))){
var inst_33584 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33695_33746 = state_33642__$1;
(statearr_33695_33746[(2)] = inst_33584);

(statearr_33695_33746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (37))){
var state_33642__$1 = state_33642;
var statearr_33696_33747 = state_33642__$1;
(statearr_33696_33747[(2)] = null);

(statearr_33696_33747[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (8))){
var inst_33544 = (state_33642[(8)]);
var inst_33562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33544);
var state_33642__$1 = state_33642;
var statearr_33697_33748 = state_33642__$1;
(statearr_33697_33748[(2)] = inst_33562);

(statearr_33697_33748[(1)] = (10));


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
});})(c__32644__auto___33702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32549__auto__,c__32644__auto___33702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32550__auto__ = null;
var cljs$core$async$mix_$_state_machine__32550__auto____0 = (function (){
var statearr_33698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33698[(0)] = cljs$core$async$mix_$_state_machine__32550__auto__);

(statearr_33698[(1)] = (1));

return statearr_33698;
});
var cljs$core$async$mix_$_state_machine__32550__auto____1 = (function (state_33642){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33699){if((e33699 instanceof Object)){
var ex__32553__auto__ = e33699;
var statearr_33700_33749 = state_33642;
(statearr_33700_33749[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33750 = state_33642;
state_33642 = G__33750;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32550__auto__ = function(state_33642){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32550__auto____1.call(this,state_33642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32550__auto____0;
cljs$core$async$mix_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32550__auto____1;
return cljs$core$async$mix_$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___33702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32646__auto__ = (function (){var statearr_33701 = f__32645__auto__.call(null);
(statearr_33701[(6)] = c__32644__auto___33702);

return statearr_33701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___33702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33752 = arguments.length;
switch (G__33752) {
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
var G__33756 = arguments.length;
switch (G__33756) {
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
return (function (p1__33754_SHARP_){
if(cljs.core.truth_(p1__33754_SHARP_.call(null,topic))){
return p1__33754_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33754_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33757 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33758){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33758 = meta33758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33759,meta33758__$1){
var self__ = this;
var _33759__$1 = this;
return (new cljs.core.async.t_cljs$core$async33757(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33758__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33759){
var self__ = this;
var _33759__$1 = this;
return self__.meta33758;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33757.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33758","meta33758",-864857948,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33757";

cljs.core.async.t_cljs$core$async33757.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33757");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33757.
 */
cljs.core.async.__GT_t_cljs$core$async33757 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33757(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33758){
return (new cljs.core.async.t_cljs$core$async33757(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33758));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33757(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32644__auto___33877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___33877,mults,ensure_mult,p){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___33877,mults,ensure_mult,p){
return (function (state_33831){
var state_val_33832 = (state_33831[(1)]);
if((state_val_33832 === (7))){
var inst_33827 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33833_33878 = state_33831__$1;
(statearr_33833_33878[(2)] = inst_33827);

(statearr_33833_33878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (20))){
var state_33831__$1 = state_33831;
var statearr_33834_33879 = state_33831__$1;
(statearr_33834_33879[(2)] = null);

(statearr_33834_33879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (1))){
var state_33831__$1 = state_33831;
var statearr_33835_33880 = state_33831__$1;
(statearr_33835_33880[(2)] = null);

(statearr_33835_33880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (24))){
var inst_33810 = (state_33831[(7)]);
var inst_33819 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33810);
var state_33831__$1 = state_33831;
var statearr_33836_33881 = state_33831__$1;
(statearr_33836_33881[(2)] = inst_33819);

(statearr_33836_33881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (4))){
var inst_33762 = (state_33831[(8)]);
var inst_33762__$1 = (state_33831[(2)]);
var inst_33763 = (inst_33762__$1 == null);
var state_33831__$1 = (function (){var statearr_33837 = state_33831;
(statearr_33837[(8)] = inst_33762__$1);

return statearr_33837;
})();
if(cljs.core.truth_(inst_33763)){
var statearr_33838_33882 = state_33831__$1;
(statearr_33838_33882[(1)] = (5));

} else {
var statearr_33839_33883 = state_33831__$1;
(statearr_33839_33883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (15))){
var inst_33804 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33840_33884 = state_33831__$1;
(statearr_33840_33884[(2)] = inst_33804);

(statearr_33840_33884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (21))){
var inst_33824 = (state_33831[(2)]);
var state_33831__$1 = (function (){var statearr_33841 = state_33831;
(statearr_33841[(9)] = inst_33824);

return statearr_33841;
})();
var statearr_33842_33885 = state_33831__$1;
(statearr_33842_33885[(2)] = null);

(statearr_33842_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (13))){
var inst_33786 = (state_33831[(10)]);
var inst_33788 = cljs.core.chunked_seq_QMARK_.call(null,inst_33786);
var state_33831__$1 = state_33831;
if(inst_33788){
var statearr_33843_33886 = state_33831__$1;
(statearr_33843_33886[(1)] = (16));

} else {
var statearr_33844_33887 = state_33831__$1;
(statearr_33844_33887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (22))){
var inst_33816 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
if(cljs.core.truth_(inst_33816)){
var statearr_33845_33888 = state_33831__$1;
(statearr_33845_33888[(1)] = (23));

} else {
var statearr_33846_33889 = state_33831__$1;
(statearr_33846_33889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (6))){
var inst_33762 = (state_33831[(8)]);
var inst_33812 = (state_33831[(11)]);
var inst_33810 = (state_33831[(7)]);
var inst_33810__$1 = topic_fn.call(null,inst_33762);
var inst_33811 = cljs.core.deref.call(null,mults);
var inst_33812__$1 = cljs.core.get.call(null,inst_33811,inst_33810__$1);
var state_33831__$1 = (function (){var statearr_33847 = state_33831;
(statearr_33847[(11)] = inst_33812__$1);

(statearr_33847[(7)] = inst_33810__$1);

return statearr_33847;
})();
if(cljs.core.truth_(inst_33812__$1)){
var statearr_33848_33890 = state_33831__$1;
(statearr_33848_33890[(1)] = (19));

} else {
var statearr_33849_33891 = state_33831__$1;
(statearr_33849_33891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (25))){
var inst_33821 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33850_33892 = state_33831__$1;
(statearr_33850_33892[(2)] = inst_33821);

(statearr_33850_33892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (17))){
var inst_33786 = (state_33831[(10)]);
var inst_33795 = cljs.core.first.call(null,inst_33786);
var inst_33796 = cljs.core.async.muxch_STAR_.call(null,inst_33795);
var inst_33797 = cljs.core.async.close_BANG_.call(null,inst_33796);
var inst_33798 = cljs.core.next.call(null,inst_33786);
var inst_33772 = inst_33798;
var inst_33773 = null;
var inst_33774 = (0);
var inst_33775 = (0);
var state_33831__$1 = (function (){var statearr_33851 = state_33831;
(statearr_33851[(12)] = inst_33775);

(statearr_33851[(13)] = inst_33773);

(statearr_33851[(14)] = inst_33797);

(statearr_33851[(15)] = inst_33772);

(statearr_33851[(16)] = inst_33774);

return statearr_33851;
})();
var statearr_33852_33893 = state_33831__$1;
(statearr_33852_33893[(2)] = null);

(statearr_33852_33893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (3))){
var inst_33829 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33831__$1,inst_33829);
} else {
if((state_val_33832 === (12))){
var inst_33806 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33853_33894 = state_33831__$1;
(statearr_33853_33894[(2)] = inst_33806);

(statearr_33853_33894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (2))){
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33831__$1,(4),ch);
} else {
if((state_val_33832 === (23))){
var state_33831__$1 = state_33831;
var statearr_33854_33895 = state_33831__$1;
(statearr_33854_33895[(2)] = null);

(statearr_33854_33895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (19))){
var inst_33762 = (state_33831[(8)]);
var inst_33812 = (state_33831[(11)]);
var inst_33814 = cljs.core.async.muxch_STAR_.call(null,inst_33812);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33831__$1,(22),inst_33814,inst_33762);
} else {
if((state_val_33832 === (11))){
var inst_33786 = (state_33831[(10)]);
var inst_33772 = (state_33831[(15)]);
var inst_33786__$1 = cljs.core.seq.call(null,inst_33772);
var state_33831__$1 = (function (){var statearr_33855 = state_33831;
(statearr_33855[(10)] = inst_33786__$1);

return statearr_33855;
})();
if(inst_33786__$1){
var statearr_33856_33896 = state_33831__$1;
(statearr_33856_33896[(1)] = (13));

} else {
var statearr_33857_33897 = state_33831__$1;
(statearr_33857_33897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (9))){
var inst_33808 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33858_33898 = state_33831__$1;
(statearr_33858_33898[(2)] = inst_33808);

(statearr_33858_33898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (5))){
var inst_33769 = cljs.core.deref.call(null,mults);
var inst_33770 = cljs.core.vals.call(null,inst_33769);
var inst_33771 = cljs.core.seq.call(null,inst_33770);
var inst_33772 = inst_33771;
var inst_33773 = null;
var inst_33774 = (0);
var inst_33775 = (0);
var state_33831__$1 = (function (){var statearr_33859 = state_33831;
(statearr_33859[(12)] = inst_33775);

(statearr_33859[(13)] = inst_33773);

(statearr_33859[(15)] = inst_33772);

(statearr_33859[(16)] = inst_33774);

return statearr_33859;
})();
var statearr_33860_33899 = state_33831__$1;
(statearr_33860_33899[(2)] = null);

(statearr_33860_33899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (14))){
var state_33831__$1 = state_33831;
var statearr_33864_33900 = state_33831__$1;
(statearr_33864_33900[(2)] = null);

(statearr_33864_33900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (16))){
var inst_33786 = (state_33831[(10)]);
var inst_33790 = cljs.core.chunk_first.call(null,inst_33786);
var inst_33791 = cljs.core.chunk_rest.call(null,inst_33786);
var inst_33792 = cljs.core.count.call(null,inst_33790);
var inst_33772 = inst_33791;
var inst_33773 = inst_33790;
var inst_33774 = inst_33792;
var inst_33775 = (0);
var state_33831__$1 = (function (){var statearr_33865 = state_33831;
(statearr_33865[(12)] = inst_33775);

(statearr_33865[(13)] = inst_33773);

(statearr_33865[(15)] = inst_33772);

(statearr_33865[(16)] = inst_33774);

return statearr_33865;
})();
var statearr_33866_33901 = state_33831__$1;
(statearr_33866_33901[(2)] = null);

(statearr_33866_33901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (10))){
var inst_33775 = (state_33831[(12)]);
var inst_33773 = (state_33831[(13)]);
var inst_33772 = (state_33831[(15)]);
var inst_33774 = (state_33831[(16)]);
var inst_33780 = cljs.core._nth.call(null,inst_33773,inst_33775);
var inst_33781 = cljs.core.async.muxch_STAR_.call(null,inst_33780);
var inst_33782 = cljs.core.async.close_BANG_.call(null,inst_33781);
var inst_33783 = (inst_33775 + (1));
var tmp33861 = inst_33773;
var tmp33862 = inst_33772;
var tmp33863 = inst_33774;
var inst_33772__$1 = tmp33862;
var inst_33773__$1 = tmp33861;
var inst_33774__$1 = tmp33863;
var inst_33775__$1 = inst_33783;
var state_33831__$1 = (function (){var statearr_33867 = state_33831;
(statearr_33867[(12)] = inst_33775__$1);

(statearr_33867[(17)] = inst_33782);

(statearr_33867[(13)] = inst_33773__$1);

(statearr_33867[(15)] = inst_33772__$1);

(statearr_33867[(16)] = inst_33774__$1);

return statearr_33867;
})();
var statearr_33868_33902 = state_33831__$1;
(statearr_33868_33902[(2)] = null);

(statearr_33868_33902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (18))){
var inst_33801 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33869_33903 = state_33831__$1;
(statearr_33869_33903[(2)] = inst_33801);

(statearr_33869_33903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (8))){
var inst_33775 = (state_33831[(12)]);
var inst_33774 = (state_33831[(16)]);
var inst_33777 = (inst_33775 < inst_33774);
var inst_33778 = inst_33777;
var state_33831__$1 = state_33831;
if(cljs.core.truth_(inst_33778)){
var statearr_33870_33904 = state_33831__$1;
(statearr_33870_33904[(1)] = (10));

} else {
var statearr_33871_33905 = state_33831__$1;
(statearr_33871_33905[(1)] = (11));

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
});})(c__32644__auto___33877,mults,ensure_mult,p))
;
return ((function (switch__32549__auto__,c__32644__auto___33877,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_33872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33872[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_33872[(1)] = (1));

return statearr_33872;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_33831){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33873){if((e33873 instanceof Object)){
var ex__32553__auto__ = e33873;
var statearr_33874_33906 = state_33831;
(statearr_33874_33906[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33907 = state_33831;
state_33831 = G__33907;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_33831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_33831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___33877,mults,ensure_mult,p))
})();
var state__32646__auto__ = (function (){var statearr_33875 = f__32645__auto__.call(null);
(statearr_33875[(6)] = c__32644__auto___33877);

return statearr_33875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___33877,mults,ensure_mult,p))
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
var G__33909 = arguments.length;
switch (G__33909) {
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
var G__33912 = arguments.length;
switch (G__33912) {
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
var G__33915 = arguments.length;
switch (G__33915) {
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
var c__32644__auto___33982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___33982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___33982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33954){
var state_val_33955 = (state_33954[(1)]);
if((state_val_33955 === (7))){
var state_33954__$1 = state_33954;
var statearr_33956_33983 = state_33954__$1;
(statearr_33956_33983[(2)] = null);

(statearr_33956_33983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (1))){
var state_33954__$1 = state_33954;
var statearr_33957_33984 = state_33954__$1;
(statearr_33957_33984[(2)] = null);

(statearr_33957_33984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (4))){
var inst_33918 = (state_33954[(7)]);
var inst_33920 = (inst_33918 < cnt);
var state_33954__$1 = state_33954;
if(cljs.core.truth_(inst_33920)){
var statearr_33958_33985 = state_33954__$1;
(statearr_33958_33985[(1)] = (6));

} else {
var statearr_33959_33986 = state_33954__$1;
(statearr_33959_33986[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (15))){
var inst_33950 = (state_33954[(2)]);
var state_33954__$1 = state_33954;
var statearr_33960_33987 = state_33954__$1;
(statearr_33960_33987[(2)] = inst_33950);

(statearr_33960_33987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (13))){
var inst_33943 = cljs.core.async.close_BANG_.call(null,out);
var state_33954__$1 = state_33954;
var statearr_33961_33988 = state_33954__$1;
(statearr_33961_33988[(2)] = inst_33943);

(statearr_33961_33988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (6))){
var state_33954__$1 = state_33954;
var statearr_33962_33989 = state_33954__$1;
(statearr_33962_33989[(2)] = null);

(statearr_33962_33989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (3))){
var inst_33952 = (state_33954[(2)]);
var state_33954__$1 = state_33954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33954__$1,inst_33952);
} else {
if((state_val_33955 === (12))){
var inst_33940 = (state_33954[(8)]);
var inst_33940__$1 = (state_33954[(2)]);
var inst_33941 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33940__$1);
var state_33954__$1 = (function (){var statearr_33963 = state_33954;
(statearr_33963[(8)] = inst_33940__$1);

return statearr_33963;
})();
if(cljs.core.truth_(inst_33941)){
var statearr_33964_33990 = state_33954__$1;
(statearr_33964_33990[(1)] = (13));

} else {
var statearr_33965_33991 = state_33954__$1;
(statearr_33965_33991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (2))){
var inst_33917 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33918 = (0);
var state_33954__$1 = (function (){var statearr_33966 = state_33954;
(statearr_33966[(7)] = inst_33918);

(statearr_33966[(9)] = inst_33917);

return statearr_33966;
})();
var statearr_33967_33992 = state_33954__$1;
(statearr_33967_33992[(2)] = null);

(statearr_33967_33992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (11))){
var inst_33918 = (state_33954[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33954,(10),Object,null,(9));
var inst_33927 = chs__$1.call(null,inst_33918);
var inst_33928 = done.call(null,inst_33918);
var inst_33929 = cljs.core.async.take_BANG_.call(null,inst_33927,inst_33928);
var state_33954__$1 = state_33954;
var statearr_33968_33993 = state_33954__$1;
(statearr_33968_33993[(2)] = inst_33929);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (9))){
var inst_33918 = (state_33954[(7)]);
var inst_33931 = (state_33954[(2)]);
var inst_33932 = (inst_33918 + (1));
var inst_33918__$1 = inst_33932;
var state_33954__$1 = (function (){var statearr_33969 = state_33954;
(statearr_33969[(10)] = inst_33931);

(statearr_33969[(7)] = inst_33918__$1);

return statearr_33969;
})();
var statearr_33970_33994 = state_33954__$1;
(statearr_33970_33994[(2)] = null);

(statearr_33970_33994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (5))){
var inst_33938 = (state_33954[(2)]);
var state_33954__$1 = (function (){var statearr_33971 = state_33954;
(statearr_33971[(11)] = inst_33938);

return statearr_33971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33954__$1,(12),dchan);
} else {
if((state_val_33955 === (14))){
var inst_33940 = (state_33954[(8)]);
var inst_33945 = cljs.core.apply.call(null,f,inst_33940);
var state_33954__$1 = state_33954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33954__$1,(16),out,inst_33945);
} else {
if((state_val_33955 === (16))){
var inst_33947 = (state_33954[(2)]);
var state_33954__$1 = (function (){var statearr_33972 = state_33954;
(statearr_33972[(12)] = inst_33947);

return statearr_33972;
})();
var statearr_33973_33995 = state_33954__$1;
(statearr_33973_33995[(2)] = null);

(statearr_33973_33995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (10))){
var inst_33922 = (state_33954[(2)]);
var inst_33923 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33954__$1 = (function (){var statearr_33974 = state_33954;
(statearr_33974[(13)] = inst_33922);

return statearr_33974;
})();
var statearr_33975_33996 = state_33954__$1;
(statearr_33975_33996[(2)] = inst_33923);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33955 === (8))){
var inst_33936 = (state_33954[(2)]);
var state_33954__$1 = state_33954;
var statearr_33976_33997 = state_33954__$1;
(statearr_33976_33997[(2)] = inst_33936);

(statearr_33976_33997[(1)] = (5));


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
});})(c__32644__auto___33982,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32549__auto__,c__32644__auto___33982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_33977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33977[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_33977[(1)] = (1));

return statearr_33977;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_33954){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_33954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e33978){if((e33978 instanceof Object)){
var ex__32553__auto__ = e33978;
var statearr_33979_33998 = state_33954;
(statearr_33979_33998[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33999 = state_33954;
state_33954 = G__33999;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_33954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_33954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___33982,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32646__auto__ = (function (){var statearr_33980 = f__32645__auto__.call(null);
(statearr_33980[(6)] = c__32644__auto___33982);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___33982,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34002 = arguments.length;
switch (G__34002) {
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
var c__32644__auto___34056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___34056,out){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___34056,out){
return (function (state_34034){
var state_val_34035 = (state_34034[(1)]);
if((state_val_34035 === (7))){
var inst_34014 = (state_34034[(7)]);
var inst_34013 = (state_34034[(8)]);
var inst_34013__$1 = (state_34034[(2)]);
var inst_34014__$1 = cljs.core.nth.call(null,inst_34013__$1,(0),null);
var inst_34015 = cljs.core.nth.call(null,inst_34013__$1,(1),null);
var inst_34016 = (inst_34014__$1 == null);
var state_34034__$1 = (function (){var statearr_34036 = state_34034;
(statearr_34036[(9)] = inst_34015);

(statearr_34036[(7)] = inst_34014__$1);

(statearr_34036[(8)] = inst_34013__$1);

return statearr_34036;
})();
if(cljs.core.truth_(inst_34016)){
var statearr_34037_34057 = state_34034__$1;
(statearr_34037_34057[(1)] = (8));

} else {
var statearr_34038_34058 = state_34034__$1;
(statearr_34038_34058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (1))){
var inst_34003 = cljs.core.vec.call(null,chs);
var inst_34004 = inst_34003;
var state_34034__$1 = (function (){var statearr_34039 = state_34034;
(statearr_34039[(10)] = inst_34004);

return statearr_34039;
})();
var statearr_34040_34059 = state_34034__$1;
(statearr_34040_34059[(2)] = null);

(statearr_34040_34059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (4))){
var inst_34004 = (state_34034[(10)]);
var state_34034__$1 = state_34034;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34034__$1,(7),inst_34004);
} else {
if((state_val_34035 === (6))){
var inst_34030 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34041_34060 = state_34034__$1;
(statearr_34041_34060[(2)] = inst_34030);

(statearr_34041_34060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (3))){
var inst_34032 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34034__$1,inst_34032);
} else {
if((state_val_34035 === (2))){
var inst_34004 = (state_34034[(10)]);
var inst_34006 = cljs.core.count.call(null,inst_34004);
var inst_34007 = (inst_34006 > (0));
var state_34034__$1 = state_34034;
if(cljs.core.truth_(inst_34007)){
var statearr_34043_34061 = state_34034__$1;
(statearr_34043_34061[(1)] = (4));

} else {
var statearr_34044_34062 = state_34034__$1;
(statearr_34044_34062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (11))){
var inst_34004 = (state_34034[(10)]);
var inst_34023 = (state_34034[(2)]);
var tmp34042 = inst_34004;
var inst_34004__$1 = tmp34042;
var state_34034__$1 = (function (){var statearr_34045 = state_34034;
(statearr_34045[(10)] = inst_34004__$1);

(statearr_34045[(11)] = inst_34023);

return statearr_34045;
})();
var statearr_34046_34063 = state_34034__$1;
(statearr_34046_34063[(2)] = null);

(statearr_34046_34063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (9))){
var inst_34014 = (state_34034[(7)]);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34034__$1,(11),out,inst_34014);
} else {
if((state_val_34035 === (5))){
var inst_34028 = cljs.core.async.close_BANG_.call(null,out);
var state_34034__$1 = state_34034;
var statearr_34047_34064 = state_34034__$1;
(statearr_34047_34064[(2)] = inst_34028);

(statearr_34047_34064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (10))){
var inst_34026 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34048_34065 = state_34034__$1;
(statearr_34048_34065[(2)] = inst_34026);

(statearr_34048_34065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (8))){
var inst_34004 = (state_34034[(10)]);
var inst_34015 = (state_34034[(9)]);
var inst_34014 = (state_34034[(7)]);
var inst_34013 = (state_34034[(8)]);
var inst_34018 = (function (){var cs = inst_34004;
var vec__34009 = inst_34013;
var v = inst_34014;
var c = inst_34015;
return ((function (cs,vec__34009,v,c,inst_34004,inst_34015,inst_34014,inst_34013,state_val_34035,c__32644__auto___34056,out){
return (function (p1__34000_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34000_SHARP_);
});
;})(cs,vec__34009,v,c,inst_34004,inst_34015,inst_34014,inst_34013,state_val_34035,c__32644__auto___34056,out))
})();
var inst_34019 = cljs.core.filterv.call(null,inst_34018,inst_34004);
var inst_34004__$1 = inst_34019;
var state_34034__$1 = (function (){var statearr_34049 = state_34034;
(statearr_34049[(10)] = inst_34004__$1);

return statearr_34049;
})();
var statearr_34050_34066 = state_34034__$1;
(statearr_34050_34066[(2)] = null);

(statearr_34050_34066[(1)] = (2));


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
});})(c__32644__auto___34056,out))
;
return ((function (switch__32549__auto__,c__32644__auto___34056,out){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_34051 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34051[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_34051[(1)] = (1));

return statearr_34051;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_34034){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34052){if((e34052 instanceof Object)){
var ex__32553__auto__ = e34052;
var statearr_34053_34067 = state_34034;
(statearr_34053_34067[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34068 = state_34034;
state_34034 = G__34068;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_34034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_34034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___34056,out))
})();
var state__32646__auto__ = (function (){var statearr_34054 = f__32645__auto__.call(null);
(statearr_34054[(6)] = c__32644__auto___34056);

return statearr_34054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___34056,out))
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
var G__34070 = arguments.length;
switch (G__34070) {
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
var c__32644__auto___34115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___34115,out){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___34115,out){
return (function (state_34094){
var state_val_34095 = (state_34094[(1)]);
if((state_val_34095 === (7))){
var inst_34076 = (state_34094[(7)]);
var inst_34076__$1 = (state_34094[(2)]);
var inst_34077 = (inst_34076__$1 == null);
var inst_34078 = cljs.core.not.call(null,inst_34077);
var state_34094__$1 = (function (){var statearr_34096 = state_34094;
(statearr_34096[(7)] = inst_34076__$1);

return statearr_34096;
})();
if(inst_34078){
var statearr_34097_34116 = state_34094__$1;
(statearr_34097_34116[(1)] = (8));

} else {
var statearr_34098_34117 = state_34094__$1;
(statearr_34098_34117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (1))){
var inst_34071 = (0);
var state_34094__$1 = (function (){var statearr_34099 = state_34094;
(statearr_34099[(8)] = inst_34071);

return statearr_34099;
})();
var statearr_34100_34118 = state_34094__$1;
(statearr_34100_34118[(2)] = null);

(statearr_34100_34118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (4))){
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34094__$1,(7),ch);
} else {
if((state_val_34095 === (6))){
var inst_34089 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34101_34119 = state_34094__$1;
(statearr_34101_34119[(2)] = inst_34089);

(statearr_34101_34119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (3))){
var inst_34091 = (state_34094[(2)]);
var inst_34092 = cljs.core.async.close_BANG_.call(null,out);
var state_34094__$1 = (function (){var statearr_34102 = state_34094;
(statearr_34102[(9)] = inst_34091);

return statearr_34102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34094__$1,inst_34092);
} else {
if((state_val_34095 === (2))){
var inst_34071 = (state_34094[(8)]);
var inst_34073 = (inst_34071 < n);
var state_34094__$1 = state_34094;
if(cljs.core.truth_(inst_34073)){
var statearr_34103_34120 = state_34094__$1;
(statearr_34103_34120[(1)] = (4));

} else {
var statearr_34104_34121 = state_34094__$1;
(statearr_34104_34121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (11))){
var inst_34071 = (state_34094[(8)]);
var inst_34081 = (state_34094[(2)]);
var inst_34082 = (inst_34071 + (1));
var inst_34071__$1 = inst_34082;
var state_34094__$1 = (function (){var statearr_34105 = state_34094;
(statearr_34105[(10)] = inst_34081);

(statearr_34105[(8)] = inst_34071__$1);

return statearr_34105;
})();
var statearr_34106_34122 = state_34094__$1;
(statearr_34106_34122[(2)] = null);

(statearr_34106_34122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (9))){
var state_34094__$1 = state_34094;
var statearr_34107_34123 = state_34094__$1;
(statearr_34107_34123[(2)] = null);

(statearr_34107_34123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (5))){
var state_34094__$1 = state_34094;
var statearr_34108_34124 = state_34094__$1;
(statearr_34108_34124[(2)] = null);

(statearr_34108_34124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (10))){
var inst_34086 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34109_34125 = state_34094__$1;
(statearr_34109_34125[(2)] = inst_34086);

(statearr_34109_34125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (8))){
var inst_34076 = (state_34094[(7)]);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34094__$1,(11),out,inst_34076);
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
});})(c__32644__auto___34115,out))
;
return ((function (switch__32549__auto__,c__32644__auto___34115,out){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_34110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34110[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_34110[(1)] = (1));

return statearr_34110;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_34094){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34111){if((e34111 instanceof Object)){
var ex__32553__auto__ = e34111;
var statearr_34112_34126 = state_34094;
(statearr_34112_34126[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34127 = state_34094;
state_34094 = G__34127;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_34094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_34094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___34115,out))
})();
var state__32646__auto__ = (function (){var statearr_34113 = f__32645__auto__.call(null);
(statearr_34113[(6)] = c__32644__auto___34115);

return statearr_34113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___34115,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34129 = (function (f,ch,meta34130){
this.f = f;
this.ch = ch;
this.meta34130 = meta34130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34131,meta34130__$1){
var self__ = this;
var _34131__$1 = this;
return (new cljs.core.async.t_cljs$core$async34129(self__.f,self__.ch,meta34130__$1));
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34131){
var self__ = this;
var _34131__$1 = this;
return self__.meta34130;
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34132 = (function (f,ch,meta34130,_,fn1,meta34133){
this.f = f;
this.ch = ch;
this.meta34130 = meta34130;
this._ = _;
this.fn1 = fn1;
this.meta34133 = meta34133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34134,meta34133__$1){
var self__ = this;
var _34134__$1 = this;
return (new cljs.core.async.t_cljs$core$async34132(self__.f,self__.ch,self__.meta34130,self__._,self__.fn1,meta34133__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34134){
var self__ = this;
var _34134__$1 = this;
return self__.meta34133;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34128_SHARP_){
return f1.call(null,(((p1__34128_SHARP_ == null))?null:self__.f.call(null,p1__34128_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34132.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34130","meta34130",1933875867,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34129","cljs.core.async/t_cljs$core$async34129",-1845642908,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34133","meta34133",-406303940,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34132";

cljs.core.async.t_cljs$core$async34132.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34132");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34132.
 */
cljs.core.async.__GT_t_cljs$core$async34132 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34132(f__$1,ch__$1,meta34130__$1,___$2,fn1__$1,meta34133){
return (new cljs.core.async.t_cljs$core$async34132(f__$1,ch__$1,meta34130__$1,___$2,fn1__$1,meta34133));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34132(self__.f,self__.ch,self__.meta34130,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34130","meta34130",1933875867,null)], null);
});

cljs.core.async.t_cljs$core$async34129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34129";

cljs.core.async.t_cljs$core$async34129.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34129");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34129.
 */
cljs.core.async.__GT_t_cljs$core$async34129 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34129(f__$1,ch__$1,meta34130){
return (new cljs.core.async.t_cljs$core$async34129(f__$1,ch__$1,meta34130));
});

}

return (new cljs.core.async.t_cljs$core$async34129(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34135 = (function (f,ch,meta34136){
this.f = f;
this.ch = ch;
this.meta34136 = meta34136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34137,meta34136__$1){
var self__ = this;
var _34137__$1 = this;
return (new cljs.core.async.t_cljs$core$async34135(self__.f,self__.ch,meta34136__$1));
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34137){
var self__ = this;
var _34137__$1 = this;
return self__.meta34136;
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34136","meta34136",-1189709418,null)], null);
});

cljs.core.async.t_cljs$core$async34135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34135";

cljs.core.async.t_cljs$core$async34135.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34135");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34135.
 */
cljs.core.async.__GT_t_cljs$core$async34135 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34135(f__$1,ch__$1,meta34136){
return (new cljs.core.async.t_cljs$core$async34135(f__$1,ch__$1,meta34136));
});

}

return (new cljs.core.async.t_cljs$core$async34135(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34138 = (function (p,ch,meta34139){
this.p = p;
this.ch = ch;
this.meta34139 = meta34139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34140,meta34139__$1){
var self__ = this;
var _34140__$1 = this;
return (new cljs.core.async.t_cljs$core$async34138(self__.p,self__.ch,meta34139__$1));
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34140){
var self__ = this;
var _34140__$1 = this;
return self__.meta34139;
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34139","meta34139",-994751288,null)], null);
});

cljs.core.async.t_cljs$core$async34138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34138";

cljs.core.async.t_cljs$core$async34138.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34138.
 */
cljs.core.async.__GT_t_cljs$core$async34138 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34138(p__$1,ch__$1,meta34139){
return (new cljs.core.async.t_cljs$core$async34138(p__$1,ch__$1,meta34139));
});

}

return (new cljs.core.async.t_cljs$core$async34138(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34142 = arguments.length;
switch (G__34142) {
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
var c__32644__auto___34182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___34182,out){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___34182,out){
return (function (state_34163){
var state_val_34164 = (state_34163[(1)]);
if((state_val_34164 === (7))){
var inst_34159 = (state_34163[(2)]);
var state_34163__$1 = state_34163;
var statearr_34165_34183 = state_34163__$1;
(statearr_34165_34183[(2)] = inst_34159);

(statearr_34165_34183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (1))){
var state_34163__$1 = state_34163;
var statearr_34166_34184 = state_34163__$1;
(statearr_34166_34184[(2)] = null);

(statearr_34166_34184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (4))){
var inst_34145 = (state_34163[(7)]);
var inst_34145__$1 = (state_34163[(2)]);
var inst_34146 = (inst_34145__$1 == null);
var state_34163__$1 = (function (){var statearr_34167 = state_34163;
(statearr_34167[(7)] = inst_34145__$1);

return statearr_34167;
})();
if(cljs.core.truth_(inst_34146)){
var statearr_34168_34185 = state_34163__$1;
(statearr_34168_34185[(1)] = (5));

} else {
var statearr_34169_34186 = state_34163__$1;
(statearr_34169_34186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (6))){
var inst_34145 = (state_34163[(7)]);
var inst_34150 = p.call(null,inst_34145);
var state_34163__$1 = state_34163;
if(cljs.core.truth_(inst_34150)){
var statearr_34170_34187 = state_34163__$1;
(statearr_34170_34187[(1)] = (8));

} else {
var statearr_34171_34188 = state_34163__$1;
(statearr_34171_34188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (3))){
var inst_34161 = (state_34163[(2)]);
var state_34163__$1 = state_34163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34163__$1,inst_34161);
} else {
if((state_val_34164 === (2))){
var state_34163__$1 = state_34163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34163__$1,(4),ch);
} else {
if((state_val_34164 === (11))){
var inst_34153 = (state_34163[(2)]);
var state_34163__$1 = state_34163;
var statearr_34172_34189 = state_34163__$1;
(statearr_34172_34189[(2)] = inst_34153);

(statearr_34172_34189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (9))){
var state_34163__$1 = state_34163;
var statearr_34173_34190 = state_34163__$1;
(statearr_34173_34190[(2)] = null);

(statearr_34173_34190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (5))){
var inst_34148 = cljs.core.async.close_BANG_.call(null,out);
var state_34163__$1 = state_34163;
var statearr_34174_34191 = state_34163__$1;
(statearr_34174_34191[(2)] = inst_34148);

(statearr_34174_34191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (10))){
var inst_34156 = (state_34163[(2)]);
var state_34163__$1 = (function (){var statearr_34175 = state_34163;
(statearr_34175[(8)] = inst_34156);

return statearr_34175;
})();
var statearr_34176_34192 = state_34163__$1;
(statearr_34176_34192[(2)] = null);

(statearr_34176_34192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (8))){
var inst_34145 = (state_34163[(7)]);
var state_34163__$1 = state_34163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34163__$1,(11),out,inst_34145);
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
});})(c__32644__auto___34182,out))
;
return ((function (switch__32549__auto__,c__32644__auto___34182,out){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_34177 = [null,null,null,null,null,null,null,null,null];
(statearr_34177[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_34177[(1)] = (1));

return statearr_34177;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_34163){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34178){if((e34178 instanceof Object)){
var ex__32553__auto__ = e34178;
var statearr_34179_34193 = state_34163;
(statearr_34179_34193[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_34163;
state_34163 = G__34194;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_34163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_34163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___34182,out))
})();
var state__32646__auto__ = (function (){var statearr_34180 = f__32645__auto__.call(null);
(statearr_34180[(6)] = c__32644__auto___34182);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___34182,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34196 = arguments.length;
switch (G__34196) {
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
var c__32644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto__){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto__){
return (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (7))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34261_34299 = state_34259__$1;
(statearr_34261_34299[(2)] = inst_34255);

(statearr_34261_34299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (20))){
var inst_34225 = (state_34259[(7)]);
var inst_34236 = (state_34259[(2)]);
var inst_34237 = cljs.core.next.call(null,inst_34225);
var inst_34211 = inst_34237;
var inst_34212 = null;
var inst_34213 = (0);
var inst_34214 = (0);
var state_34259__$1 = (function (){var statearr_34262 = state_34259;
(statearr_34262[(8)] = inst_34211);

(statearr_34262[(9)] = inst_34236);

(statearr_34262[(10)] = inst_34213);

(statearr_34262[(11)] = inst_34212);

(statearr_34262[(12)] = inst_34214);

return statearr_34262;
})();
var statearr_34263_34300 = state_34259__$1;
(statearr_34263_34300[(2)] = null);

(statearr_34263_34300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (1))){
var state_34259__$1 = state_34259;
var statearr_34264_34301 = state_34259__$1;
(statearr_34264_34301[(2)] = null);

(statearr_34264_34301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (4))){
var inst_34200 = (state_34259[(13)]);
var inst_34200__$1 = (state_34259[(2)]);
var inst_34201 = (inst_34200__$1 == null);
var state_34259__$1 = (function (){var statearr_34265 = state_34259;
(statearr_34265[(13)] = inst_34200__$1);

return statearr_34265;
})();
if(cljs.core.truth_(inst_34201)){
var statearr_34266_34302 = state_34259__$1;
(statearr_34266_34302[(1)] = (5));

} else {
var statearr_34267_34303 = state_34259__$1;
(statearr_34267_34303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (15))){
var state_34259__$1 = state_34259;
var statearr_34271_34304 = state_34259__$1;
(statearr_34271_34304[(2)] = null);

(statearr_34271_34304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (21))){
var state_34259__$1 = state_34259;
var statearr_34272_34305 = state_34259__$1;
(statearr_34272_34305[(2)] = null);

(statearr_34272_34305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (13))){
var inst_34211 = (state_34259[(8)]);
var inst_34213 = (state_34259[(10)]);
var inst_34212 = (state_34259[(11)]);
var inst_34214 = (state_34259[(12)]);
var inst_34221 = (state_34259[(2)]);
var inst_34222 = (inst_34214 + (1));
var tmp34268 = inst_34211;
var tmp34269 = inst_34213;
var tmp34270 = inst_34212;
var inst_34211__$1 = tmp34268;
var inst_34212__$1 = tmp34270;
var inst_34213__$1 = tmp34269;
var inst_34214__$1 = inst_34222;
var state_34259__$1 = (function (){var statearr_34273 = state_34259;
(statearr_34273[(14)] = inst_34221);

(statearr_34273[(8)] = inst_34211__$1);

(statearr_34273[(10)] = inst_34213__$1);

(statearr_34273[(11)] = inst_34212__$1);

(statearr_34273[(12)] = inst_34214__$1);

return statearr_34273;
})();
var statearr_34274_34306 = state_34259__$1;
(statearr_34274_34306[(2)] = null);

(statearr_34274_34306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (22))){
var state_34259__$1 = state_34259;
var statearr_34275_34307 = state_34259__$1;
(statearr_34275_34307[(2)] = null);

(statearr_34275_34307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (6))){
var inst_34200 = (state_34259[(13)]);
var inst_34209 = f.call(null,inst_34200);
var inst_34210 = cljs.core.seq.call(null,inst_34209);
var inst_34211 = inst_34210;
var inst_34212 = null;
var inst_34213 = (0);
var inst_34214 = (0);
var state_34259__$1 = (function (){var statearr_34276 = state_34259;
(statearr_34276[(8)] = inst_34211);

(statearr_34276[(10)] = inst_34213);

(statearr_34276[(11)] = inst_34212);

(statearr_34276[(12)] = inst_34214);

return statearr_34276;
})();
var statearr_34277_34308 = state_34259__$1;
(statearr_34277_34308[(2)] = null);

(statearr_34277_34308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (17))){
var inst_34225 = (state_34259[(7)]);
var inst_34229 = cljs.core.chunk_first.call(null,inst_34225);
var inst_34230 = cljs.core.chunk_rest.call(null,inst_34225);
var inst_34231 = cljs.core.count.call(null,inst_34229);
var inst_34211 = inst_34230;
var inst_34212 = inst_34229;
var inst_34213 = inst_34231;
var inst_34214 = (0);
var state_34259__$1 = (function (){var statearr_34278 = state_34259;
(statearr_34278[(8)] = inst_34211);

(statearr_34278[(10)] = inst_34213);

(statearr_34278[(11)] = inst_34212);

(statearr_34278[(12)] = inst_34214);

return statearr_34278;
})();
var statearr_34279_34309 = state_34259__$1;
(statearr_34279_34309[(2)] = null);

(statearr_34279_34309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (3))){
var inst_34257 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34259__$1,inst_34257);
} else {
if((state_val_34260 === (12))){
var inst_34245 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34280_34310 = state_34259__$1;
(statearr_34280_34310[(2)] = inst_34245);

(statearr_34280_34310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (2))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34259__$1,(4),in$);
} else {
if((state_val_34260 === (23))){
var inst_34253 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34281_34311 = state_34259__$1;
(statearr_34281_34311[(2)] = inst_34253);

(statearr_34281_34311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (19))){
var inst_34240 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34282_34312 = state_34259__$1;
(statearr_34282_34312[(2)] = inst_34240);

(statearr_34282_34312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (11))){
var inst_34211 = (state_34259[(8)]);
var inst_34225 = (state_34259[(7)]);
var inst_34225__$1 = cljs.core.seq.call(null,inst_34211);
var state_34259__$1 = (function (){var statearr_34283 = state_34259;
(statearr_34283[(7)] = inst_34225__$1);

return statearr_34283;
})();
if(inst_34225__$1){
var statearr_34284_34313 = state_34259__$1;
(statearr_34284_34313[(1)] = (14));

} else {
var statearr_34285_34314 = state_34259__$1;
(statearr_34285_34314[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (9))){
var inst_34247 = (state_34259[(2)]);
var inst_34248 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34259__$1 = (function (){var statearr_34286 = state_34259;
(statearr_34286[(15)] = inst_34247);

return statearr_34286;
})();
if(cljs.core.truth_(inst_34248)){
var statearr_34287_34315 = state_34259__$1;
(statearr_34287_34315[(1)] = (21));

} else {
var statearr_34288_34316 = state_34259__$1;
(statearr_34288_34316[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (5))){
var inst_34203 = cljs.core.async.close_BANG_.call(null,out);
var state_34259__$1 = state_34259;
var statearr_34289_34317 = state_34259__$1;
(statearr_34289_34317[(2)] = inst_34203);

(statearr_34289_34317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (14))){
var inst_34225 = (state_34259[(7)]);
var inst_34227 = cljs.core.chunked_seq_QMARK_.call(null,inst_34225);
var state_34259__$1 = state_34259;
if(inst_34227){
var statearr_34290_34318 = state_34259__$1;
(statearr_34290_34318[(1)] = (17));

} else {
var statearr_34291_34319 = state_34259__$1;
(statearr_34291_34319[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (16))){
var inst_34243 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34292_34320 = state_34259__$1;
(statearr_34292_34320[(2)] = inst_34243);

(statearr_34292_34320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (10))){
var inst_34212 = (state_34259[(11)]);
var inst_34214 = (state_34259[(12)]);
var inst_34219 = cljs.core._nth.call(null,inst_34212,inst_34214);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34259__$1,(13),out,inst_34219);
} else {
if((state_val_34260 === (18))){
var inst_34225 = (state_34259[(7)]);
var inst_34234 = cljs.core.first.call(null,inst_34225);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34259__$1,(20),out,inst_34234);
} else {
if((state_val_34260 === (8))){
var inst_34213 = (state_34259[(10)]);
var inst_34214 = (state_34259[(12)]);
var inst_34216 = (inst_34214 < inst_34213);
var inst_34217 = inst_34216;
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34217)){
var statearr_34293_34321 = state_34259__$1;
(statearr_34293_34321[(1)] = (10));

} else {
var statearr_34294_34322 = state_34259__$1;
(statearr_34294_34322[(1)] = (11));

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
});})(c__32644__auto__))
;
return ((function (switch__32549__auto__,c__32644__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32550__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32550__auto____0 = (function (){
var statearr_34295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32550__auto__);

(statearr_34295[(1)] = (1));

return statearr_34295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32550__auto____1 = (function (state_34259){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34296){if((e34296 instanceof Object)){
var ex__32553__auto__ = e34296;
var statearr_34297_34323 = state_34259;
(statearr_34297_34323[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34324 = state_34259;
state_34259 = G__34324;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32550__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32550__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32550__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32550__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto__))
})();
var state__32646__auto__ = (function (){var statearr_34298 = f__32645__auto__.call(null);
(statearr_34298[(6)] = c__32644__auto__);

return statearr_34298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto__))
);

return c__32644__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34326 = arguments.length;
switch (G__34326) {
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
var G__34329 = arguments.length;
switch (G__34329) {
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
var G__34332 = arguments.length;
switch (G__34332) {
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
var c__32644__auto___34379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___34379,out){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___34379,out){
return (function (state_34356){
var state_val_34357 = (state_34356[(1)]);
if((state_val_34357 === (7))){
var inst_34351 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34358_34380 = state_34356__$1;
(statearr_34358_34380[(2)] = inst_34351);

(statearr_34358_34380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (1))){
var inst_34333 = null;
var state_34356__$1 = (function (){var statearr_34359 = state_34356;
(statearr_34359[(7)] = inst_34333);

return statearr_34359;
})();
var statearr_34360_34381 = state_34356__$1;
(statearr_34360_34381[(2)] = null);

(statearr_34360_34381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (4))){
var inst_34336 = (state_34356[(8)]);
var inst_34336__$1 = (state_34356[(2)]);
var inst_34337 = (inst_34336__$1 == null);
var inst_34338 = cljs.core.not.call(null,inst_34337);
var state_34356__$1 = (function (){var statearr_34361 = state_34356;
(statearr_34361[(8)] = inst_34336__$1);

return statearr_34361;
})();
if(inst_34338){
var statearr_34362_34382 = state_34356__$1;
(statearr_34362_34382[(1)] = (5));

} else {
var statearr_34363_34383 = state_34356__$1;
(statearr_34363_34383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (6))){
var state_34356__$1 = state_34356;
var statearr_34364_34384 = state_34356__$1;
(statearr_34364_34384[(2)] = null);

(statearr_34364_34384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (3))){
var inst_34353 = (state_34356[(2)]);
var inst_34354 = cljs.core.async.close_BANG_.call(null,out);
var state_34356__$1 = (function (){var statearr_34365 = state_34356;
(statearr_34365[(9)] = inst_34353);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34356__$1,inst_34354);
} else {
if((state_val_34357 === (2))){
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34356__$1,(4),ch);
} else {
if((state_val_34357 === (11))){
var inst_34336 = (state_34356[(8)]);
var inst_34345 = (state_34356[(2)]);
var inst_34333 = inst_34336;
var state_34356__$1 = (function (){var statearr_34366 = state_34356;
(statearr_34366[(10)] = inst_34345);

(statearr_34366[(7)] = inst_34333);

return statearr_34366;
})();
var statearr_34367_34385 = state_34356__$1;
(statearr_34367_34385[(2)] = null);

(statearr_34367_34385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (9))){
var inst_34336 = (state_34356[(8)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34356__$1,(11),out,inst_34336);
} else {
if((state_val_34357 === (5))){
var inst_34336 = (state_34356[(8)]);
var inst_34333 = (state_34356[(7)]);
var inst_34340 = cljs.core._EQ_.call(null,inst_34336,inst_34333);
var state_34356__$1 = state_34356;
if(inst_34340){
var statearr_34369_34386 = state_34356__$1;
(statearr_34369_34386[(1)] = (8));

} else {
var statearr_34370_34387 = state_34356__$1;
(statearr_34370_34387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (10))){
var inst_34348 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34371_34388 = state_34356__$1;
(statearr_34371_34388[(2)] = inst_34348);

(statearr_34371_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (8))){
var inst_34333 = (state_34356[(7)]);
var tmp34368 = inst_34333;
var inst_34333__$1 = tmp34368;
var state_34356__$1 = (function (){var statearr_34372 = state_34356;
(statearr_34372[(7)] = inst_34333__$1);

return statearr_34372;
})();
var statearr_34373_34389 = state_34356__$1;
(statearr_34373_34389[(2)] = null);

(statearr_34373_34389[(1)] = (2));


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
});})(c__32644__auto___34379,out))
;
return ((function (switch__32549__auto__,c__32644__auto___34379,out){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_34374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34374[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_34374[(1)] = (1));

return statearr_34374;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_34356){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34375){if((e34375 instanceof Object)){
var ex__32553__auto__ = e34375;
var statearr_34376_34390 = state_34356;
(statearr_34376_34390[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34391 = state_34356;
state_34356 = G__34391;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_34356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_34356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___34379,out))
})();
var state__32646__auto__ = (function (){var statearr_34377 = f__32645__auto__.call(null);
(statearr_34377[(6)] = c__32644__auto___34379);

return statearr_34377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___34379,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34393 = arguments.length;
switch (G__34393) {
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
var c__32644__auto___34459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___34459,out){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___34459,out){
return (function (state_34431){
var state_val_34432 = (state_34431[(1)]);
if((state_val_34432 === (7))){
var inst_34427 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34433_34460 = state_34431__$1;
(statearr_34433_34460[(2)] = inst_34427);

(statearr_34433_34460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (1))){
var inst_34394 = (new Array(n));
var inst_34395 = inst_34394;
var inst_34396 = (0);
var state_34431__$1 = (function (){var statearr_34434 = state_34431;
(statearr_34434[(7)] = inst_34395);

(statearr_34434[(8)] = inst_34396);

return statearr_34434;
})();
var statearr_34435_34461 = state_34431__$1;
(statearr_34435_34461[(2)] = null);

(statearr_34435_34461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (4))){
var inst_34399 = (state_34431[(9)]);
var inst_34399__$1 = (state_34431[(2)]);
var inst_34400 = (inst_34399__$1 == null);
var inst_34401 = cljs.core.not.call(null,inst_34400);
var state_34431__$1 = (function (){var statearr_34436 = state_34431;
(statearr_34436[(9)] = inst_34399__$1);

return statearr_34436;
})();
if(inst_34401){
var statearr_34437_34462 = state_34431__$1;
(statearr_34437_34462[(1)] = (5));

} else {
var statearr_34438_34463 = state_34431__$1;
(statearr_34438_34463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (15))){
var inst_34421 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34439_34464 = state_34431__$1;
(statearr_34439_34464[(2)] = inst_34421);

(statearr_34439_34464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (13))){
var state_34431__$1 = state_34431;
var statearr_34440_34465 = state_34431__$1;
(statearr_34440_34465[(2)] = null);

(statearr_34440_34465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (6))){
var inst_34396 = (state_34431[(8)]);
var inst_34417 = (inst_34396 > (0));
var state_34431__$1 = state_34431;
if(cljs.core.truth_(inst_34417)){
var statearr_34441_34466 = state_34431__$1;
(statearr_34441_34466[(1)] = (12));

} else {
var statearr_34442_34467 = state_34431__$1;
(statearr_34442_34467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (3))){
var inst_34429 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34431__$1,inst_34429);
} else {
if((state_val_34432 === (12))){
var inst_34395 = (state_34431[(7)]);
var inst_34419 = cljs.core.vec.call(null,inst_34395);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34431__$1,(15),out,inst_34419);
} else {
if((state_val_34432 === (2))){
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34431__$1,(4),ch);
} else {
if((state_val_34432 === (11))){
var inst_34411 = (state_34431[(2)]);
var inst_34412 = (new Array(n));
var inst_34395 = inst_34412;
var inst_34396 = (0);
var state_34431__$1 = (function (){var statearr_34443 = state_34431;
(statearr_34443[(10)] = inst_34411);

(statearr_34443[(7)] = inst_34395);

(statearr_34443[(8)] = inst_34396);

return statearr_34443;
})();
var statearr_34444_34468 = state_34431__$1;
(statearr_34444_34468[(2)] = null);

(statearr_34444_34468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (9))){
var inst_34395 = (state_34431[(7)]);
var inst_34409 = cljs.core.vec.call(null,inst_34395);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34431__$1,(11),out,inst_34409);
} else {
if((state_val_34432 === (5))){
var inst_34395 = (state_34431[(7)]);
var inst_34396 = (state_34431[(8)]);
var inst_34399 = (state_34431[(9)]);
var inst_34404 = (state_34431[(11)]);
var inst_34403 = (inst_34395[inst_34396] = inst_34399);
var inst_34404__$1 = (inst_34396 + (1));
var inst_34405 = (inst_34404__$1 < n);
var state_34431__$1 = (function (){var statearr_34445 = state_34431;
(statearr_34445[(12)] = inst_34403);

(statearr_34445[(11)] = inst_34404__$1);

return statearr_34445;
})();
if(cljs.core.truth_(inst_34405)){
var statearr_34446_34469 = state_34431__$1;
(statearr_34446_34469[(1)] = (8));

} else {
var statearr_34447_34470 = state_34431__$1;
(statearr_34447_34470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (14))){
var inst_34424 = (state_34431[(2)]);
var inst_34425 = cljs.core.async.close_BANG_.call(null,out);
var state_34431__$1 = (function (){var statearr_34449 = state_34431;
(statearr_34449[(13)] = inst_34424);

return statearr_34449;
})();
var statearr_34450_34471 = state_34431__$1;
(statearr_34450_34471[(2)] = inst_34425);

(statearr_34450_34471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (10))){
var inst_34415 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34451_34472 = state_34431__$1;
(statearr_34451_34472[(2)] = inst_34415);

(statearr_34451_34472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (8))){
var inst_34395 = (state_34431[(7)]);
var inst_34404 = (state_34431[(11)]);
var tmp34448 = inst_34395;
var inst_34395__$1 = tmp34448;
var inst_34396 = inst_34404;
var state_34431__$1 = (function (){var statearr_34452 = state_34431;
(statearr_34452[(7)] = inst_34395__$1);

(statearr_34452[(8)] = inst_34396);

return statearr_34452;
})();
var statearr_34453_34473 = state_34431__$1;
(statearr_34453_34473[(2)] = null);

(statearr_34453_34473[(1)] = (2));


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
});})(c__32644__auto___34459,out))
;
return ((function (switch__32549__auto__,c__32644__auto___34459,out){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_34454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34454[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_34454[(1)] = (1));

return statearr_34454;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_34431){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object)){
var ex__32553__auto__ = e34455;
var statearr_34456_34474 = state_34431;
(statearr_34456_34474[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34475 = state_34431;
state_34431 = G__34475;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_34431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_34431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___34459,out))
})();
var state__32646__auto__ = (function (){var statearr_34457 = f__32645__auto__.call(null);
(statearr_34457[(6)] = c__32644__auto___34459);

return statearr_34457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___34459,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34477 = arguments.length;
switch (G__34477) {
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
var c__32644__auto___34547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___34547,out){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___34547,out){
return (function (state_34519){
var state_val_34520 = (state_34519[(1)]);
if((state_val_34520 === (7))){
var inst_34515 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34521_34548 = state_34519__$1;
(statearr_34521_34548[(2)] = inst_34515);

(statearr_34521_34548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (1))){
var inst_34478 = [];
var inst_34479 = inst_34478;
var inst_34480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34519__$1 = (function (){var statearr_34522 = state_34519;
(statearr_34522[(7)] = inst_34479);

(statearr_34522[(8)] = inst_34480);

return statearr_34522;
})();
var statearr_34523_34549 = state_34519__$1;
(statearr_34523_34549[(2)] = null);

(statearr_34523_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (4))){
var inst_34483 = (state_34519[(9)]);
var inst_34483__$1 = (state_34519[(2)]);
var inst_34484 = (inst_34483__$1 == null);
var inst_34485 = cljs.core.not.call(null,inst_34484);
var state_34519__$1 = (function (){var statearr_34524 = state_34519;
(statearr_34524[(9)] = inst_34483__$1);

return statearr_34524;
})();
if(inst_34485){
var statearr_34525_34550 = state_34519__$1;
(statearr_34525_34550[(1)] = (5));

} else {
var statearr_34526_34551 = state_34519__$1;
(statearr_34526_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (15))){
var inst_34509 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34527_34552 = state_34519__$1;
(statearr_34527_34552[(2)] = inst_34509);

(statearr_34527_34552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (13))){
var state_34519__$1 = state_34519;
var statearr_34528_34553 = state_34519__$1;
(statearr_34528_34553[(2)] = null);

(statearr_34528_34553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (6))){
var inst_34479 = (state_34519[(7)]);
var inst_34504 = inst_34479.length;
var inst_34505 = (inst_34504 > (0));
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34505)){
var statearr_34529_34554 = state_34519__$1;
(statearr_34529_34554[(1)] = (12));

} else {
var statearr_34530_34555 = state_34519__$1;
(statearr_34530_34555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (3))){
var inst_34517 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34519__$1,inst_34517);
} else {
if((state_val_34520 === (12))){
var inst_34479 = (state_34519[(7)]);
var inst_34507 = cljs.core.vec.call(null,inst_34479);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34519__$1,(15),out,inst_34507);
} else {
if((state_val_34520 === (2))){
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(4),ch);
} else {
if((state_val_34520 === (11))){
var inst_34483 = (state_34519[(9)]);
var inst_34487 = (state_34519[(10)]);
var inst_34497 = (state_34519[(2)]);
var inst_34498 = [];
var inst_34499 = inst_34498.push(inst_34483);
var inst_34479 = inst_34498;
var inst_34480 = inst_34487;
var state_34519__$1 = (function (){var statearr_34531 = state_34519;
(statearr_34531[(11)] = inst_34499);

(statearr_34531[(12)] = inst_34497);

(statearr_34531[(7)] = inst_34479);

(statearr_34531[(8)] = inst_34480);

return statearr_34531;
})();
var statearr_34532_34556 = state_34519__$1;
(statearr_34532_34556[(2)] = null);

(statearr_34532_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (9))){
var inst_34479 = (state_34519[(7)]);
var inst_34495 = cljs.core.vec.call(null,inst_34479);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34519__$1,(11),out,inst_34495);
} else {
if((state_val_34520 === (5))){
var inst_34483 = (state_34519[(9)]);
var inst_34487 = (state_34519[(10)]);
var inst_34480 = (state_34519[(8)]);
var inst_34487__$1 = f.call(null,inst_34483);
var inst_34488 = cljs.core._EQ_.call(null,inst_34487__$1,inst_34480);
var inst_34489 = cljs.core.keyword_identical_QMARK_.call(null,inst_34480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34490 = ((inst_34488) || (inst_34489));
var state_34519__$1 = (function (){var statearr_34533 = state_34519;
(statearr_34533[(10)] = inst_34487__$1);

return statearr_34533;
})();
if(cljs.core.truth_(inst_34490)){
var statearr_34534_34557 = state_34519__$1;
(statearr_34534_34557[(1)] = (8));

} else {
var statearr_34535_34558 = state_34519__$1;
(statearr_34535_34558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (14))){
var inst_34512 = (state_34519[(2)]);
var inst_34513 = cljs.core.async.close_BANG_.call(null,out);
var state_34519__$1 = (function (){var statearr_34537 = state_34519;
(statearr_34537[(13)] = inst_34512);

return statearr_34537;
})();
var statearr_34538_34559 = state_34519__$1;
(statearr_34538_34559[(2)] = inst_34513);

(statearr_34538_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (10))){
var inst_34502 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34539_34560 = state_34519__$1;
(statearr_34539_34560[(2)] = inst_34502);

(statearr_34539_34560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (8))){
var inst_34479 = (state_34519[(7)]);
var inst_34483 = (state_34519[(9)]);
var inst_34487 = (state_34519[(10)]);
var inst_34492 = inst_34479.push(inst_34483);
var tmp34536 = inst_34479;
var inst_34479__$1 = tmp34536;
var inst_34480 = inst_34487;
var state_34519__$1 = (function (){var statearr_34540 = state_34519;
(statearr_34540[(7)] = inst_34479__$1);

(statearr_34540[(14)] = inst_34492);

(statearr_34540[(8)] = inst_34480);

return statearr_34540;
})();
var statearr_34541_34561 = state_34519__$1;
(statearr_34541_34561[(2)] = null);

(statearr_34541_34561[(1)] = (2));


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
});})(c__32644__auto___34547,out))
;
return ((function (switch__32549__auto__,c__32644__auto___34547,out){
return (function() {
var cljs$core$async$state_machine__32550__auto__ = null;
var cljs$core$async$state_machine__32550__auto____0 = (function (){
var statearr_34542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34542[(0)] = cljs$core$async$state_machine__32550__auto__);

(statearr_34542[(1)] = (1));

return statearr_34542;
});
var cljs$core$async$state_machine__32550__auto____1 = (function (state_34519){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34543){if((e34543 instanceof Object)){
var ex__32553__auto__ = e34543;
var statearr_34544_34562 = state_34519;
(statearr_34544_34562[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34563 = state_34519;
state_34519 = G__34563;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
cljs$core$async$state_machine__32550__auto__ = function(state_34519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32550__auto____1.call(this,state_34519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32550__auto____0;
cljs$core$async$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32550__auto____1;
return cljs$core$async$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___34547,out))
})();
var state__32646__auto__ = (function (){var statearr_34545 = f__32645__auto__.call(null);
(statearr_34545[(6)] = c__32644__auto___34547);

return statearr_34545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___34547,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1601408406472
