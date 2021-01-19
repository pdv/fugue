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
var G__12882 = arguments.length;
switch (G__12882) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12883 = (function (f,blockable,meta12884){
this.f = f;
this.blockable = blockable;
this.meta12884 = meta12884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12885,meta12884__$1){
var self__ = this;
var _12885__$1 = this;
return (new cljs.core.async.t_cljs$core$async12883(self__.f,self__.blockable,meta12884__$1));
});

cljs.core.async.t_cljs$core$async12883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12885){
var self__ = this;
var _12885__$1 = this;
return self__.meta12884;
});

cljs.core.async.t_cljs$core$async12883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12884","meta12884",-1074372450,null)], null);
});

cljs.core.async.t_cljs$core$async12883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12883";

cljs.core.async.t_cljs$core$async12883.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12883");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12883.
 */
cljs.core.async.__GT_t_cljs$core$async12883 = (function cljs$core$async$__GT_t_cljs$core$async12883(f__$1,blockable__$1,meta12884){
return (new cljs.core.async.t_cljs$core$async12883(f__$1,blockable__$1,meta12884));
});

}

return (new cljs.core.async.t_cljs$core$async12883(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12889 = arguments.length;
switch (G__12889) {
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
var G__12892 = arguments.length;
switch (G__12892) {
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
var G__12895 = arguments.length;
switch (G__12895) {
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
var val_12897 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12897);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12897,ret){
return (function (){
return fn1.call(null,val_12897);
});})(val_12897,ret))
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
var G__12899 = arguments.length;
switch (G__12899) {
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
var n__4607__auto___12901 = n;
var x_12902 = (0);
while(true){
if((x_12902 < n__4607__auto___12901)){
(a[x_12902] = x_12902);

var G__12903 = (x_12902 + (1));
x_12902 = G__12903;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12904 = (function (flag,meta12905){
this.flag = flag;
this.meta12905 = meta12905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12906,meta12905__$1){
var self__ = this;
var _12906__$1 = this;
return (new cljs.core.async.t_cljs$core$async12904(self__.flag,meta12905__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12906){
var self__ = this;
var _12906__$1 = this;
return self__.meta12905;
});})(flag))
;

cljs.core.async.t_cljs$core$async12904.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12904.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12905","meta12905",-2022099003,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12904";

cljs.core.async.t_cljs$core$async12904.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12904");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12904.
 */
cljs.core.async.__GT_t_cljs$core$async12904 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12904(flag__$1,meta12905){
return (new cljs.core.async.t_cljs$core$async12904(flag__$1,meta12905));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12904(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12907 = (function (flag,cb,meta12908){
this.flag = flag;
this.cb = cb;
this.meta12908 = meta12908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12909,meta12908__$1){
var self__ = this;
var _12909__$1 = this;
return (new cljs.core.async.t_cljs$core$async12907(self__.flag,self__.cb,meta12908__$1));
});

cljs.core.async.t_cljs$core$async12907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12909){
var self__ = this;
var _12909__$1 = this;
return self__.meta12908;
});

cljs.core.async.t_cljs$core$async12907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12908","meta12908",-574782744,null)], null);
});

cljs.core.async.t_cljs$core$async12907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12907";

cljs.core.async.t_cljs$core$async12907.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12907");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12907.
 */
cljs.core.async.__GT_t_cljs$core$async12907 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12907(flag__$1,cb__$1,meta12908){
return (new cljs.core.async.t_cljs$core$async12907(flag__$1,cb__$1,meta12908));
});

}

return (new cljs.core.async.t_cljs$core$async12907(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12910_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12910_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12911_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12911_SHARP_,port], null));
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
var G__12912 = (i + (1));
i = G__12912;
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
var len__4730__auto___12918 = arguments.length;
var i__4731__auto___12919 = (0);
while(true){
if((i__4731__auto___12919 < len__4730__auto___12918)){
args__4736__auto__.push((arguments[i__4731__auto___12919]));

var G__12920 = (i__4731__auto___12919 + (1));
i__4731__auto___12919 = G__12920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12915){
var map__12916 = p__12915;
var map__12916__$1 = (((((!((map__12916 == null))))?(((((map__12916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12916):map__12916);
var opts = map__12916__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12913){
var G__12914 = cljs.core.first.call(null,seq12913);
var seq12913__$1 = cljs.core.next.call(null,seq12913);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12914,seq12913__$1);
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
var G__12922 = arguments.length;
switch (G__12922) {
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
var c__12822__auto___12968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___12968){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___12968){
return (function (state_12946){
var state_val_12947 = (state_12946[(1)]);
if((state_val_12947 === (7))){
var inst_12942 = (state_12946[(2)]);
var state_12946__$1 = state_12946;
var statearr_12948_12969 = state_12946__$1;
(statearr_12948_12969[(2)] = inst_12942);

(statearr_12948_12969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (1))){
var state_12946__$1 = state_12946;
var statearr_12949_12970 = state_12946__$1;
(statearr_12949_12970[(2)] = null);

(statearr_12949_12970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (4))){
var inst_12925 = (state_12946[(7)]);
var inst_12925__$1 = (state_12946[(2)]);
var inst_12926 = (inst_12925__$1 == null);
var state_12946__$1 = (function (){var statearr_12950 = state_12946;
(statearr_12950[(7)] = inst_12925__$1);

return statearr_12950;
})();
if(cljs.core.truth_(inst_12926)){
var statearr_12951_12971 = state_12946__$1;
(statearr_12951_12971[(1)] = (5));

} else {
var statearr_12952_12972 = state_12946__$1;
(statearr_12952_12972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (13))){
var state_12946__$1 = state_12946;
var statearr_12953_12973 = state_12946__$1;
(statearr_12953_12973[(2)] = null);

(statearr_12953_12973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (6))){
var inst_12925 = (state_12946[(7)]);
var state_12946__$1 = state_12946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12946__$1,(11),to,inst_12925);
} else {
if((state_val_12947 === (3))){
var inst_12944 = (state_12946[(2)]);
var state_12946__$1 = state_12946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12946__$1,inst_12944);
} else {
if((state_val_12947 === (12))){
var state_12946__$1 = state_12946;
var statearr_12954_12974 = state_12946__$1;
(statearr_12954_12974[(2)] = null);

(statearr_12954_12974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (2))){
var state_12946__$1 = state_12946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12946__$1,(4),from);
} else {
if((state_val_12947 === (11))){
var inst_12935 = (state_12946[(2)]);
var state_12946__$1 = state_12946;
if(cljs.core.truth_(inst_12935)){
var statearr_12955_12975 = state_12946__$1;
(statearr_12955_12975[(1)] = (12));

} else {
var statearr_12956_12976 = state_12946__$1;
(statearr_12956_12976[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (9))){
var state_12946__$1 = state_12946;
var statearr_12957_12977 = state_12946__$1;
(statearr_12957_12977[(2)] = null);

(statearr_12957_12977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (5))){
var state_12946__$1 = state_12946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12958_12978 = state_12946__$1;
(statearr_12958_12978[(1)] = (8));

} else {
var statearr_12959_12979 = state_12946__$1;
(statearr_12959_12979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (14))){
var inst_12940 = (state_12946[(2)]);
var state_12946__$1 = state_12946;
var statearr_12960_12980 = state_12946__$1;
(statearr_12960_12980[(2)] = inst_12940);

(statearr_12960_12980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (10))){
var inst_12932 = (state_12946[(2)]);
var state_12946__$1 = state_12946;
var statearr_12961_12981 = state_12946__$1;
(statearr_12961_12981[(2)] = inst_12932);

(statearr_12961_12981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12947 === (8))){
var inst_12929 = cljs.core.async.close_BANG_.call(null,to);
var state_12946__$1 = state_12946;
var statearr_12962_12982 = state_12946__$1;
(statearr_12962_12982[(2)] = inst_12929);

(statearr_12962_12982[(1)] = (10));


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
});})(c__12822__auto___12968))
;
return ((function (switch__12727__auto__,c__12822__auto___12968){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_12963 = [null,null,null,null,null,null,null,null];
(statearr_12963[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_12963[(1)] = (1));

return statearr_12963;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_12946){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_12946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e12964){if((e12964 instanceof Object)){
var ex__12731__auto__ = e12964;
var statearr_12965_12983 = state_12946;
(statearr_12965_12983[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12984 = state_12946;
state_12946 = G__12984;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_12946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_12946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___12968))
})();
var state__12824__auto__ = (function (){var statearr_12966 = f__12823__auto__.call(null);
(statearr_12966[(6)] = c__12822__auto___12968);

return statearr_12966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___12968))
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
return (function (p__12985){
var vec__12986 = p__12985;
var v = cljs.core.nth.call(null,vec__12986,(0),null);
var p = cljs.core.nth.call(null,vec__12986,(1),null);
var job = vec__12986;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12822__auto___13157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___13157,res,vec__12986,v,p,job,jobs,results){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___13157,res,vec__12986,v,p,job,jobs,results){
return (function (state_12993){
var state_val_12994 = (state_12993[(1)]);
if((state_val_12994 === (1))){
var state_12993__$1 = state_12993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12993__$1,(2),res,v);
} else {
if((state_val_12994 === (2))){
var inst_12990 = (state_12993[(2)]);
var inst_12991 = cljs.core.async.close_BANG_.call(null,res);
var state_12993__$1 = (function (){var statearr_12995 = state_12993;
(statearr_12995[(7)] = inst_12990);

return statearr_12995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12993__$1,inst_12991);
} else {
return null;
}
}
});})(c__12822__auto___13157,res,vec__12986,v,p,job,jobs,results))
;
return ((function (switch__12727__auto__,c__12822__auto___13157,res,vec__12986,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0 = (function (){
var statearr_12996 = [null,null,null,null,null,null,null,null];
(statearr_12996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__);

(statearr_12996[(1)] = (1));

return statearr_12996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1 = (function (state_12993){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_12993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e12997){if((e12997 instanceof Object)){
var ex__12731__auto__ = e12997;
var statearr_12998_13158 = state_12993;
(statearr_12998_13158[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13159 = state_12993;
state_12993 = G__13159;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = function(state_12993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1.call(this,state_12993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___13157,res,vec__12986,v,p,job,jobs,results))
})();
var state__12824__auto__ = (function (){var statearr_12999 = f__12823__auto__.call(null);
(statearr_12999[(6)] = c__12822__auto___13157);

return statearr_12999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___13157,res,vec__12986,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13000){
var vec__13001 = p__13000;
var v = cljs.core.nth.call(null,vec__13001,(0),null);
var p = cljs.core.nth.call(null,vec__13001,(1),null);
var job = vec__13001;
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
var n__4607__auto___13160 = n;
var __13161 = (0);
while(true){
if((__13161 < n__4607__auto___13160)){
var G__13004_13162 = type;
var G__13004_13163__$1 = (((G__13004_13162 instanceof cljs.core.Keyword))?G__13004_13162.fqn:null);
switch (G__13004_13163__$1) {
case "compute":
var c__12822__auto___13165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13161,c__12822__auto___13165,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (__13161,c__12822__auto___13165,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async){
return (function (state_13017){
var state_val_13018 = (state_13017[(1)]);
if((state_val_13018 === (1))){
var state_13017__$1 = state_13017;
var statearr_13019_13166 = state_13017__$1;
(statearr_13019_13166[(2)] = null);

(statearr_13019_13166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13018 === (2))){
var state_13017__$1 = state_13017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13017__$1,(4),jobs);
} else {
if((state_val_13018 === (3))){
var inst_13015 = (state_13017[(2)]);
var state_13017__$1 = state_13017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13017__$1,inst_13015);
} else {
if((state_val_13018 === (4))){
var inst_13007 = (state_13017[(2)]);
var inst_13008 = process.call(null,inst_13007);
var state_13017__$1 = state_13017;
if(cljs.core.truth_(inst_13008)){
var statearr_13020_13167 = state_13017__$1;
(statearr_13020_13167[(1)] = (5));

} else {
var statearr_13021_13168 = state_13017__$1;
(statearr_13021_13168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13018 === (5))){
var state_13017__$1 = state_13017;
var statearr_13022_13169 = state_13017__$1;
(statearr_13022_13169[(2)] = null);

(statearr_13022_13169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13018 === (6))){
var state_13017__$1 = state_13017;
var statearr_13023_13170 = state_13017__$1;
(statearr_13023_13170[(2)] = null);

(statearr_13023_13170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13018 === (7))){
var inst_13013 = (state_13017[(2)]);
var state_13017__$1 = state_13017;
var statearr_13024_13171 = state_13017__$1;
(statearr_13024_13171[(2)] = inst_13013);

(statearr_13024_13171[(1)] = (3));


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
});})(__13161,c__12822__auto___13165,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async))
;
return ((function (__13161,switch__12727__auto__,c__12822__auto___13165,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0 = (function (){
var statearr_13025 = [null,null,null,null,null,null,null];
(statearr_13025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__);

(statearr_13025[(1)] = (1));

return statearr_13025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1 = (function (state_13017){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13026){if((e13026 instanceof Object)){
var ex__12731__auto__ = e13026;
var statearr_13027_13172 = state_13017;
(statearr_13027_13172[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13173 = state_13017;
state_13017 = G__13173;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = function(state_13017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1.call(this,state_13017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__;
})()
;})(__13161,switch__12727__auto__,c__12822__auto___13165,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async))
})();
var state__12824__auto__ = (function (){var statearr_13028 = f__12823__auto__.call(null);
(statearr_13028[(6)] = c__12822__auto___13165);

return statearr_13028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(__13161,c__12822__auto___13165,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async))
);


break;
case "async":
var c__12822__auto___13174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13161,c__12822__auto___13174,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (__13161,c__12822__auto___13174,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async){
return (function (state_13041){
var state_val_13042 = (state_13041[(1)]);
if((state_val_13042 === (1))){
var state_13041__$1 = state_13041;
var statearr_13043_13175 = state_13041__$1;
(statearr_13043_13175[(2)] = null);

(statearr_13043_13175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13042 === (2))){
var state_13041__$1 = state_13041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13041__$1,(4),jobs);
} else {
if((state_val_13042 === (3))){
var inst_13039 = (state_13041[(2)]);
var state_13041__$1 = state_13041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13041__$1,inst_13039);
} else {
if((state_val_13042 === (4))){
var inst_13031 = (state_13041[(2)]);
var inst_13032 = async.call(null,inst_13031);
var state_13041__$1 = state_13041;
if(cljs.core.truth_(inst_13032)){
var statearr_13044_13176 = state_13041__$1;
(statearr_13044_13176[(1)] = (5));

} else {
var statearr_13045_13177 = state_13041__$1;
(statearr_13045_13177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13042 === (5))){
var state_13041__$1 = state_13041;
var statearr_13046_13178 = state_13041__$1;
(statearr_13046_13178[(2)] = null);

(statearr_13046_13178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13042 === (6))){
var state_13041__$1 = state_13041;
var statearr_13047_13179 = state_13041__$1;
(statearr_13047_13179[(2)] = null);

(statearr_13047_13179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13042 === (7))){
var inst_13037 = (state_13041[(2)]);
var state_13041__$1 = state_13041;
var statearr_13048_13180 = state_13041__$1;
(statearr_13048_13180[(2)] = inst_13037);

(statearr_13048_13180[(1)] = (3));


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
});})(__13161,c__12822__auto___13174,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async))
;
return ((function (__13161,switch__12727__auto__,c__12822__auto___13174,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0 = (function (){
var statearr_13049 = [null,null,null,null,null,null,null];
(statearr_13049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__);

(statearr_13049[(1)] = (1));

return statearr_13049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1 = (function (state_13041){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13050){if((e13050 instanceof Object)){
var ex__12731__auto__ = e13050;
var statearr_13051_13181 = state_13041;
(statearr_13051_13181[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13182 = state_13041;
state_13041 = G__13182;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = function(state_13041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1.call(this,state_13041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__;
})()
;})(__13161,switch__12727__auto__,c__12822__auto___13174,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async))
})();
var state__12824__auto__ = (function (){var statearr_13052 = f__12823__auto__.call(null);
(statearr_13052[(6)] = c__12822__auto___13174);

return statearr_13052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(__13161,c__12822__auto___13174,G__13004_13162,G__13004_13163__$1,n__4607__auto___13160,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13004_13163__$1)].join('')));

}

var G__13183 = (__13161 + (1));
__13161 = G__13183;
continue;
} else {
}
break;
}

var c__12822__auto___13184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___13184,jobs,results,process,async){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___13184,jobs,results,process,async){
return (function (state_13074){
var state_val_13075 = (state_13074[(1)]);
if((state_val_13075 === (7))){
var inst_13070 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
var statearr_13076_13185 = state_13074__$1;
(statearr_13076_13185[(2)] = inst_13070);

(statearr_13076_13185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (1))){
var state_13074__$1 = state_13074;
var statearr_13077_13186 = state_13074__$1;
(statearr_13077_13186[(2)] = null);

(statearr_13077_13186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (4))){
var inst_13055 = (state_13074[(7)]);
var inst_13055__$1 = (state_13074[(2)]);
var inst_13056 = (inst_13055__$1 == null);
var state_13074__$1 = (function (){var statearr_13078 = state_13074;
(statearr_13078[(7)] = inst_13055__$1);

return statearr_13078;
})();
if(cljs.core.truth_(inst_13056)){
var statearr_13079_13187 = state_13074__$1;
(statearr_13079_13187[(1)] = (5));

} else {
var statearr_13080_13188 = state_13074__$1;
(statearr_13080_13188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (6))){
var inst_13060 = (state_13074[(8)]);
var inst_13055 = (state_13074[(7)]);
var inst_13060__$1 = cljs.core.async.chan.call(null,(1));
var inst_13061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13062 = [inst_13055,inst_13060__$1];
var inst_13063 = (new cljs.core.PersistentVector(null,2,(5),inst_13061,inst_13062,null));
var state_13074__$1 = (function (){var statearr_13081 = state_13074;
(statearr_13081[(8)] = inst_13060__$1);

return statearr_13081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13074__$1,(8),jobs,inst_13063);
} else {
if((state_val_13075 === (3))){
var inst_13072 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13074__$1,inst_13072);
} else {
if((state_val_13075 === (2))){
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13074__$1,(4),from);
} else {
if((state_val_13075 === (9))){
var inst_13067 = (state_13074[(2)]);
var state_13074__$1 = (function (){var statearr_13082 = state_13074;
(statearr_13082[(9)] = inst_13067);

return statearr_13082;
})();
var statearr_13083_13189 = state_13074__$1;
(statearr_13083_13189[(2)] = null);

(statearr_13083_13189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (5))){
var inst_13058 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13074__$1 = state_13074;
var statearr_13084_13190 = state_13074__$1;
(statearr_13084_13190[(2)] = inst_13058);

(statearr_13084_13190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (8))){
var inst_13060 = (state_13074[(8)]);
var inst_13065 = (state_13074[(2)]);
var state_13074__$1 = (function (){var statearr_13085 = state_13074;
(statearr_13085[(10)] = inst_13065);

return statearr_13085;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13074__$1,(9),results,inst_13060);
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
});})(c__12822__auto___13184,jobs,results,process,async))
;
return ((function (switch__12727__auto__,c__12822__auto___13184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0 = (function (){
var statearr_13086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__);

(statearr_13086[(1)] = (1));

return statearr_13086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1 = (function (state_13074){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13087){if((e13087 instanceof Object)){
var ex__12731__auto__ = e13087;
var statearr_13088_13191 = state_13074;
(statearr_13088_13191[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13192 = state_13074;
state_13074 = G__13192;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = function(state_13074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1.call(this,state_13074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___13184,jobs,results,process,async))
})();
var state__12824__auto__ = (function (){var statearr_13089 = f__12823__auto__.call(null);
(statearr_13089[(6)] = c__12822__auto___13184);

return statearr_13089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___13184,jobs,results,process,async))
);


var c__12822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto__,jobs,results,process,async){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto__,jobs,results,process,async){
return (function (state_13127){
var state_val_13128 = (state_13127[(1)]);
if((state_val_13128 === (7))){
var inst_13123 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13129_13193 = state_13127__$1;
(statearr_13129_13193[(2)] = inst_13123);

(statearr_13129_13193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (20))){
var state_13127__$1 = state_13127;
var statearr_13130_13194 = state_13127__$1;
(statearr_13130_13194[(2)] = null);

(statearr_13130_13194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (1))){
var state_13127__$1 = state_13127;
var statearr_13131_13195 = state_13127__$1;
(statearr_13131_13195[(2)] = null);

(statearr_13131_13195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (4))){
var inst_13092 = (state_13127[(7)]);
var inst_13092__$1 = (state_13127[(2)]);
var inst_13093 = (inst_13092__$1 == null);
var state_13127__$1 = (function (){var statearr_13132 = state_13127;
(statearr_13132[(7)] = inst_13092__$1);

return statearr_13132;
})();
if(cljs.core.truth_(inst_13093)){
var statearr_13133_13196 = state_13127__$1;
(statearr_13133_13196[(1)] = (5));

} else {
var statearr_13134_13197 = state_13127__$1;
(statearr_13134_13197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (15))){
var inst_13105 = (state_13127[(8)]);
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13127__$1,(18),to,inst_13105);
} else {
if((state_val_13128 === (21))){
var inst_13118 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13135_13198 = state_13127__$1;
(statearr_13135_13198[(2)] = inst_13118);

(statearr_13135_13198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (13))){
var inst_13120 = (state_13127[(2)]);
var state_13127__$1 = (function (){var statearr_13136 = state_13127;
(statearr_13136[(9)] = inst_13120);

return statearr_13136;
})();
var statearr_13137_13199 = state_13127__$1;
(statearr_13137_13199[(2)] = null);

(statearr_13137_13199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (6))){
var inst_13092 = (state_13127[(7)]);
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13127__$1,(11),inst_13092);
} else {
if((state_val_13128 === (17))){
var inst_13113 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
if(cljs.core.truth_(inst_13113)){
var statearr_13138_13200 = state_13127__$1;
(statearr_13138_13200[(1)] = (19));

} else {
var statearr_13139_13201 = state_13127__$1;
(statearr_13139_13201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (3))){
var inst_13125 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13127__$1,inst_13125);
} else {
if((state_val_13128 === (12))){
var inst_13102 = (state_13127[(10)]);
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13127__$1,(14),inst_13102);
} else {
if((state_val_13128 === (2))){
var state_13127__$1 = state_13127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13127__$1,(4),results);
} else {
if((state_val_13128 === (19))){
var state_13127__$1 = state_13127;
var statearr_13140_13202 = state_13127__$1;
(statearr_13140_13202[(2)] = null);

(statearr_13140_13202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (11))){
var inst_13102 = (state_13127[(2)]);
var state_13127__$1 = (function (){var statearr_13141 = state_13127;
(statearr_13141[(10)] = inst_13102);

return statearr_13141;
})();
var statearr_13142_13203 = state_13127__$1;
(statearr_13142_13203[(2)] = null);

(statearr_13142_13203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (9))){
var state_13127__$1 = state_13127;
var statearr_13143_13204 = state_13127__$1;
(statearr_13143_13204[(2)] = null);

(statearr_13143_13204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (5))){
var state_13127__$1 = state_13127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13144_13205 = state_13127__$1;
(statearr_13144_13205[(1)] = (8));

} else {
var statearr_13145_13206 = state_13127__$1;
(statearr_13145_13206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (14))){
var inst_13105 = (state_13127[(8)]);
var inst_13107 = (state_13127[(11)]);
var inst_13105__$1 = (state_13127[(2)]);
var inst_13106 = (inst_13105__$1 == null);
var inst_13107__$1 = cljs.core.not.call(null,inst_13106);
var state_13127__$1 = (function (){var statearr_13146 = state_13127;
(statearr_13146[(8)] = inst_13105__$1);

(statearr_13146[(11)] = inst_13107__$1);

return statearr_13146;
})();
if(inst_13107__$1){
var statearr_13147_13207 = state_13127__$1;
(statearr_13147_13207[(1)] = (15));

} else {
var statearr_13148_13208 = state_13127__$1;
(statearr_13148_13208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (16))){
var inst_13107 = (state_13127[(11)]);
var state_13127__$1 = state_13127;
var statearr_13149_13209 = state_13127__$1;
(statearr_13149_13209[(2)] = inst_13107);

(statearr_13149_13209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (10))){
var inst_13099 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13150_13210 = state_13127__$1;
(statearr_13150_13210[(2)] = inst_13099);

(statearr_13150_13210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (18))){
var inst_13110 = (state_13127[(2)]);
var state_13127__$1 = state_13127;
var statearr_13151_13211 = state_13127__$1;
(statearr_13151_13211[(2)] = inst_13110);

(statearr_13151_13211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13128 === (8))){
var inst_13096 = cljs.core.async.close_BANG_.call(null,to);
var state_13127__$1 = state_13127;
var statearr_13152_13212 = state_13127__$1;
(statearr_13152_13212[(2)] = inst_13096);

(statearr_13152_13212[(1)] = (10));


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
});})(c__12822__auto__,jobs,results,process,async))
;
return ((function (switch__12727__auto__,c__12822__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0 = (function (){
var statearr_13153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__);

(statearr_13153[(1)] = (1));

return statearr_13153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1 = (function (state_13127){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13154){if((e13154 instanceof Object)){
var ex__12731__auto__ = e13154;
var statearr_13155_13213 = state_13127;
(statearr_13155_13213[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13214 = state_13127;
state_13127 = G__13214;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__ = function(state_13127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1.call(this,state_13127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto__,jobs,results,process,async))
})();
var state__12824__auto__ = (function (){var statearr_13156 = f__12823__auto__.call(null);
(statearr_13156[(6)] = c__12822__auto__);

return statearr_13156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto__,jobs,results,process,async))
);

return c__12822__auto__;
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
var G__13216 = arguments.length;
switch (G__13216) {
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
var G__13219 = arguments.length;
switch (G__13219) {
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
var G__13222 = arguments.length;
switch (G__13222) {
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
var c__12822__auto___13271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___13271,tc,fc){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___13271,tc,fc){
return (function (state_13248){
var state_val_13249 = (state_13248[(1)]);
if((state_val_13249 === (7))){
var inst_13244 = (state_13248[(2)]);
var state_13248__$1 = state_13248;
var statearr_13250_13272 = state_13248__$1;
(statearr_13250_13272[(2)] = inst_13244);

(statearr_13250_13272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (1))){
var state_13248__$1 = state_13248;
var statearr_13251_13273 = state_13248__$1;
(statearr_13251_13273[(2)] = null);

(statearr_13251_13273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (4))){
var inst_13225 = (state_13248[(7)]);
var inst_13225__$1 = (state_13248[(2)]);
var inst_13226 = (inst_13225__$1 == null);
var state_13248__$1 = (function (){var statearr_13252 = state_13248;
(statearr_13252[(7)] = inst_13225__$1);

return statearr_13252;
})();
if(cljs.core.truth_(inst_13226)){
var statearr_13253_13274 = state_13248__$1;
(statearr_13253_13274[(1)] = (5));

} else {
var statearr_13254_13275 = state_13248__$1;
(statearr_13254_13275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (13))){
var state_13248__$1 = state_13248;
var statearr_13255_13276 = state_13248__$1;
(statearr_13255_13276[(2)] = null);

(statearr_13255_13276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (6))){
var inst_13225 = (state_13248[(7)]);
var inst_13231 = p.call(null,inst_13225);
var state_13248__$1 = state_13248;
if(cljs.core.truth_(inst_13231)){
var statearr_13256_13277 = state_13248__$1;
(statearr_13256_13277[(1)] = (9));

} else {
var statearr_13257_13278 = state_13248__$1;
(statearr_13257_13278[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (3))){
var inst_13246 = (state_13248[(2)]);
var state_13248__$1 = state_13248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13248__$1,inst_13246);
} else {
if((state_val_13249 === (12))){
var state_13248__$1 = state_13248;
var statearr_13258_13279 = state_13248__$1;
(statearr_13258_13279[(2)] = null);

(statearr_13258_13279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (2))){
var state_13248__$1 = state_13248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13248__$1,(4),ch);
} else {
if((state_val_13249 === (11))){
var inst_13225 = (state_13248[(7)]);
var inst_13235 = (state_13248[(2)]);
var state_13248__$1 = state_13248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13248__$1,(8),inst_13235,inst_13225);
} else {
if((state_val_13249 === (9))){
var state_13248__$1 = state_13248;
var statearr_13259_13280 = state_13248__$1;
(statearr_13259_13280[(2)] = tc);

(statearr_13259_13280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (5))){
var inst_13228 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13229 = cljs.core.async.close_BANG_.call(null,fc);
var state_13248__$1 = (function (){var statearr_13260 = state_13248;
(statearr_13260[(8)] = inst_13228);

return statearr_13260;
})();
var statearr_13261_13281 = state_13248__$1;
(statearr_13261_13281[(2)] = inst_13229);

(statearr_13261_13281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (14))){
var inst_13242 = (state_13248[(2)]);
var state_13248__$1 = state_13248;
var statearr_13262_13282 = state_13248__$1;
(statearr_13262_13282[(2)] = inst_13242);

(statearr_13262_13282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (10))){
var state_13248__$1 = state_13248;
var statearr_13263_13283 = state_13248__$1;
(statearr_13263_13283[(2)] = fc);

(statearr_13263_13283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13249 === (8))){
var inst_13237 = (state_13248[(2)]);
var state_13248__$1 = state_13248;
if(cljs.core.truth_(inst_13237)){
var statearr_13264_13284 = state_13248__$1;
(statearr_13264_13284[(1)] = (12));

} else {
var statearr_13265_13285 = state_13248__$1;
(statearr_13265_13285[(1)] = (13));

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
});})(c__12822__auto___13271,tc,fc))
;
return ((function (switch__12727__auto__,c__12822__auto___13271,tc,fc){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_13266 = [null,null,null,null,null,null,null,null,null];
(statearr_13266[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_13266[(1)] = (1));

return statearr_13266;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_13248){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13267){if((e13267 instanceof Object)){
var ex__12731__auto__ = e13267;
var statearr_13268_13286 = state_13248;
(statearr_13268_13286[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13287 = state_13248;
state_13248 = G__13287;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_13248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_13248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___13271,tc,fc))
})();
var state__12824__auto__ = (function (){var statearr_13269 = f__12823__auto__.call(null);
(statearr_13269[(6)] = c__12822__auto___13271);

return statearr_13269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___13271,tc,fc))
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
var c__12822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto__){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto__){
return (function (state_13308){
var state_val_13309 = (state_13308[(1)]);
if((state_val_13309 === (7))){
var inst_13304 = (state_13308[(2)]);
var state_13308__$1 = state_13308;
var statearr_13310_13328 = state_13308__$1;
(statearr_13310_13328[(2)] = inst_13304);

(statearr_13310_13328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13309 === (1))){
var inst_13288 = init;
var state_13308__$1 = (function (){var statearr_13311 = state_13308;
(statearr_13311[(7)] = inst_13288);

return statearr_13311;
})();
var statearr_13312_13329 = state_13308__$1;
(statearr_13312_13329[(2)] = null);

(statearr_13312_13329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13309 === (4))){
var inst_13291 = (state_13308[(8)]);
var inst_13291__$1 = (state_13308[(2)]);
var inst_13292 = (inst_13291__$1 == null);
var state_13308__$1 = (function (){var statearr_13313 = state_13308;
(statearr_13313[(8)] = inst_13291__$1);

return statearr_13313;
})();
if(cljs.core.truth_(inst_13292)){
var statearr_13314_13330 = state_13308__$1;
(statearr_13314_13330[(1)] = (5));

} else {
var statearr_13315_13331 = state_13308__$1;
(statearr_13315_13331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13309 === (6))){
var inst_13291 = (state_13308[(8)]);
var inst_13288 = (state_13308[(7)]);
var inst_13295 = (state_13308[(9)]);
var inst_13295__$1 = f.call(null,inst_13288,inst_13291);
var inst_13296 = cljs.core.reduced_QMARK_.call(null,inst_13295__$1);
var state_13308__$1 = (function (){var statearr_13316 = state_13308;
(statearr_13316[(9)] = inst_13295__$1);

return statearr_13316;
})();
if(inst_13296){
var statearr_13317_13332 = state_13308__$1;
(statearr_13317_13332[(1)] = (8));

} else {
var statearr_13318_13333 = state_13308__$1;
(statearr_13318_13333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13309 === (3))){
var inst_13306 = (state_13308[(2)]);
var state_13308__$1 = state_13308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13308__$1,inst_13306);
} else {
if((state_val_13309 === (2))){
var state_13308__$1 = state_13308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13308__$1,(4),ch);
} else {
if((state_val_13309 === (9))){
var inst_13295 = (state_13308[(9)]);
var inst_13288 = inst_13295;
var state_13308__$1 = (function (){var statearr_13319 = state_13308;
(statearr_13319[(7)] = inst_13288);

return statearr_13319;
})();
var statearr_13320_13334 = state_13308__$1;
(statearr_13320_13334[(2)] = null);

(statearr_13320_13334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13309 === (5))){
var inst_13288 = (state_13308[(7)]);
var state_13308__$1 = state_13308;
var statearr_13321_13335 = state_13308__$1;
(statearr_13321_13335[(2)] = inst_13288);

(statearr_13321_13335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13309 === (10))){
var inst_13302 = (state_13308[(2)]);
var state_13308__$1 = state_13308;
var statearr_13322_13336 = state_13308__$1;
(statearr_13322_13336[(2)] = inst_13302);

(statearr_13322_13336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13309 === (8))){
var inst_13295 = (state_13308[(9)]);
var inst_13298 = cljs.core.deref.call(null,inst_13295);
var state_13308__$1 = state_13308;
var statearr_13323_13337 = state_13308__$1;
(statearr_13323_13337[(2)] = inst_13298);

(statearr_13323_13337[(1)] = (10));


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
});})(c__12822__auto__))
;
return ((function (switch__12727__auto__,c__12822__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12728__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12728__auto____0 = (function (){
var statearr_13324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13324[(0)] = cljs$core$async$reduce_$_state_machine__12728__auto__);

(statearr_13324[(1)] = (1));

return statearr_13324;
});
var cljs$core$async$reduce_$_state_machine__12728__auto____1 = (function (state_13308){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13325){if((e13325 instanceof Object)){
var ex__12731__auto__ = e13325;
var statearr_13326_13338 = state_13308;
(statearr_13326_13338[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13339 = state_13308;
state_13308 = G__13339;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12728__auto__ = function(state_13308){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12728__auto____1.call(this,state_13308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12728__auto____0;
cljs$core$async$reduce_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12728__auto____1;
return cljs$core$async$reduce_$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto__))
})();
var state__12824__auto__ = (function (){var statearr_13327 = f__12823__auto__.call(null);
(statearr_13327[(6)] = c__12822__auto__);

return statearr_13327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto__))
);

return c__12822__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto__,f__$1){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto__,f__$1){
return (function (state_13345){
var state_val_13346 = (state_13345[(1)]);
if((state_val_13346 === (1))){
var inst_13340 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13345__$1 = state_13345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13345__$1,(2),inst_13340);
} else {
if((state_val_13346 === (2))){
var inst_13342 = (state_13345[(2)]);
var inst_13343 = f__$1.call(null,inst_13342);
var state_13345__$1 = state_13345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13345__$1,inst_13343);
} else {
return null;
}
}
});})(c__12822__auto__,f__$1))
;
return ((function (switch__12727__auto__,c__12822__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12728__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12728__auto____0 = (function (){
var statearr_13347 = [null,null,null,null,null,null,null];
(statearr_13347[(0)] = cljs$core$async$transduce_$_state_machine__12728__auto__);

(statearr_13347[(1)] = (1));

return statearr_13347;
});
var cljs$core$async$transduce_$_state_machine__12728__auto____1 = (function (state_13345){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13348){if((e13348 instanceof Object)){
var ex__12731__auto__ = e13348;
var statearr_13349_13351 = state_13345;
(statearr_13349_13351[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13352 = state_13345;
state_13345 = G__13352;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12728__auto__ = function(state_13345){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12728__auto____1.call(this,state_13345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12728__auto____0;
cljs$core$async$transduce_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12728__auto____1;
return cljs$core$async$transduce_$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto__,f__$1))
})();
var state__12824__auto__ = (function (){var statearr_13350 = f__12823__auto__.call(null);
(statearr_13350[(6)] = c__12822__auto__);

return statearr_13350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto__,f__$1))
);

return c__12822__auto__;
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
var G__13354 = arguments.length;
switch (G__13354) {
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
var c__12822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto__){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto__){
return (function (state_13379){
var state_val_13380 = (state_13379[(1)]);
if((state_val_13380 === (7))){
var inst_13361 = (state_13379[(2)]);
var state_13379__$1 = state_13379;
var statearr_13381_13402 = state_13379__$1;
(statearr_13381_13402[(2)] = inst_13361);

(statearr_13381_13402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (1))){
var inst_13355 = cljs.core.seq.call(null,coll);
var inst_13356 = inst_13355;
var state_13379__$1 = (function (){var statearr_13382 = state_13379;
(statearr_13382[(7)] = inst_13356);

return statearr_13382;
})();
var statearr_13383_13403 = state_13379__$1;
(statearr_13383_13403[(2)] = null);

(statearr_13383_13403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (4))){
var inst_13356 = (state_13379[(7)]);
var inst_13359 = cljs.core.first.call(null,inst_13356);
var state_13379__$1 = state_13379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13379__$1,(7),ch,inst_13359);
} else {
if((state_val_13380 === (13))){
var inst_13373 = (state_13379[(2)]);
var state_13379__$1 = state_13379;
var statearr_13384_13404 = state_13379__$1;
(statearr_13384_13404[(2)] = inst_13373);

(statearr_13384_13404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (6))){
var inst_13364 = (state_13379[(2)]);
var state_13379__$1 = state_13379;
if(cljs.core.truth_(inst_13364)){
var statearr_13385_13405 = state_13379__$1;
(statearr_13385_13405[(1)] = (8));

} else {
var statearr_13386_13406 = state_13379__$1;
(statearr_13386_13406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (3))){
var inst_13377 = (state_13379[(2)]);
var state_13379__$1 = state_13379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13379__$1,inst_13377);
} else {
if((state_val_13380 === (12))){
var state_13379__$1 = state_13379;
var statearr_13387_13407 = state_13379__$1;
(statearr_13387_13407[(2)] = null);

(statearr_13387_13407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (2))){
var inst_13356 = (state_13379[(7)]);
var state_13379__$1 = state_13379;
if(cljs.core.truth_(inst_13356)){
var statearr_13388_13408 = state_13379__$1;
(statearr_13388_13408[(1)] = (4));

} else {
var statearr_13389_13409 = state_13379__$1;
(statearr_13389_13409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (11))){
var inst_13370 = cljs.core.async.close_BANG_.call(null,ch);
var state_13379__$1 = state_13379;
var statearr_13390_13410 = state_13379__$1;
(statearr_13390_13410[(2)] = inst_13370);

(statearr_13390_13410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (9))){
var state_13379__$1 = state_13379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13391_13411 = state_13379__$1;
(statearr_13391_13411[(1)] = (11));

} else {
var statearr_13392_13412 = state_13379__$1;
(statearr_13392_13412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (5))){
var inst_13356 = (state_13379[(7)]);
var state_13379__$1 = state_13379;
var statearr_13393_13413 = state_13379__$1;
(statearr_13393_13413[(2)] = inst_13356);

(statearr_13393_13413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (10))){
var inst_13375 = (state_13379[(2)]);
var state_13379__$1 = state_13379;
var statearr_13394_13414 = state_13379__$1;
(statearr_13394_13414[(2)] = inst_13375);

(statearr_13394_13414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13380 === (8))){
var inst_13356 = (state_13379[(7)]);
var inst_13366 = cljs.core.next.call(null,inst_13356);
var inst_13356__$1 = inst_13366;
var state_13379__$1 = (function (){var statearr_13395 = state_13379;
(statearr_13395[(7)] = inst_13356__$1);

return statearr_13395;
})();
var statearr_13396_13415 = state_13379__$1;
(statearr_13396_13415[(2)] = null);

(statearr_13396_13415[(1)] = (2));


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
});})(c__12822__auto__))
;
return ((function (switch__12727__auto__,c__12822__auto__){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_13397 = [null,null,null,null,null,null,null,null];
(statearr_13397[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_13397[(1)] = (1));

return statearr_13397;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_13379){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13398){if((e13398 instanceof Object)){
var ex__12731__auto__ = e13398;
var statearr_13399_13416 = state_13379;
(statearr_13399_13416[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13417 = state_13379;
state_13379 = G__13417;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_13379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_13379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto__))
})();
var state__12824__auto__ = (function (){var statearr_13400 = f__12823__auto__.call(null);
(statearr_13400[(6)] = c__12822__auto__);

return statearr_13400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto__))
);

return c__12822__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13418 = (function (ch,cs,meta13419){
this.ch = ch;
this.cs = cs;
this.meta13419 = meta13419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13420,meta13419__$1){
var self__ = this;
var _13420__$1 = this;
return (new cljs.core.async.t_cljs$core$async13418(self__.ch,self__.cs,meta13419__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13420){
var self__ = this;
var _13420__$1 = this;
return self__.meta13419;
});})(cs))
;

cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13418.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13418.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13419","meta13419",-461278515,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13418";

cljs.core.async.t_cljs$core$async13418.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async13418");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13418.
 */
cljs.core.async.__GT_t_cljs$core$async13418 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13418(ch__$1,cs__$1,meta13419){
return (new cljs.core.async.t_cljs$core$async13418(ch__$1,cs__$1,meta13419));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13418(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12822__auto___13640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___13640,cs,m,dchan,dctr,done){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___13640,cs,m,dchan,dctr,done){
return (function (state_13555){
var state_val_13556 = (state_13555[(1)]);
if((state_val_13556 === (7))){
var inst_13551 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13557_13641 = state_13555__$1;
(statearr_13557_13641[(2)] = inst_13551);

(statearr_13557_13641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (20))){
var inst_13454 = (state_13555[(7)]);
var inst_13466 = cljs.core.first.call(null,inst_13454);
var inst_13467 = cljs.core.nth.call(null,inst_13466,(0),null);
var inst_13468 = cljs.core.nth.call(null,inst_13466,(1),null);
var state_13555__$1 = (function (){var statearr_13558 = state_13555;
(statearr_13558[(8)] = inst_13467);

return statearr_13558;
})();
if(cljs.core.truth_(inst_13468)){
var statearr_13559_13642 = state_13555__$1;
(statearr_13559_13642[(1)] = (22));

} else {
var statearr_13560_13643 = state_13555__$1;
(statearr_13560_13643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (27))){
var inst_13423 = (state_13555[(9)]);
var inst_13498 = (state_13555[(10)]);
var inst_13503 = (state_13555[(11)]);
var inst_13496 = (state_13555[(12)]);
var inst_13503__$1 = cljs.core._nth.call(null,inst_13496,inst_13498);
var inst_13504 = cljs.core.async.put_BANG_.call(null,inst_13503__$1,inst_13423,done);
var state_13555__$1 = (function (){var statearr_13561 = state_13555;
(statearr_13561[(11)] = inst_13503__$1);

return statearr_13561;
})();
if(cljs.core.truth_(inst_13504)){
var statearr_13562_13644 = state_13555__$1;
(statearr_13562_13644[(1)] = (30));

} else {
var statearr_13563_13645 = state_13555__$1;
(statearr_13563_13645[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (1))){
var state_13555__$1 = state_13555;
var statearr_13564_13646 = state_13555__$1;
(statearr_13564_13646[(2)] = null);

(statearr_13564_13646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (24))){
var inst_13454 = (state_13555[(7)]);
var inst_13473 = (state_13555[(2)]);
var inst_13474 = cljs.core.next.call(null,inst_13454);
var inst_13432 = inst_13474;
var inst_13433 = null;
var inst_13434 = (0);
var inst_13435 = (0);
var state_13555__$1 = (function (){var statearr_13565 = state_13555;
(statearr_13565[(13)] = inst_13432);

(statearr_13565[(14)] = inst_13434);

(statearr_13565[(15)] = inst_13435);

(statearr_13565[(16)] = inst_13473);

(statearr_13565[(17)] = inst_13433);

return statearr_13565;
})();
var statearr_13566_13647 = state_13555__$1;
(statearr_13566_13647[(2)] = null);

(statearr_13566_13647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (39))){
var state_13555__$1 = state_13555;
var statearr_13570_13648 = state_13555__$1;
(statearr_13570_13648[(2)] = null);

(statearr_13570_13648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (4))){
var inst_13423 = (state_13555[(9)]);
var inst_13423__$1 = (state_13555[(2)]);
var inst_13424 = (inst_13423__$1 == null);
var state_13555__$1 = (function (){var statearr_13571 = state_13555;
(statearr_13571[(9)] = inst_13423__$1);

return statearr_13571;
})();
if(cljs.core.truth_(inst_13424)){
var statearr_13572_13649 = state_13555__$1;
(statearr_13572_13649[(1)] = (5));

} else {
var statearr_13573_13650 = state_13555__$1;
(statearr_13573_13650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (15))){
var inst_13432 = (state_13555[(13)]);
var inst_13434 = (state_13555[(14)]);
var inst_13435 = (state_13555[(15)]);
var inst_13433 = (state_13555[(17)]);
var inst_13450 = (state_13555[(2)]);
var inst_13451 = (inst_13435 + (1));
var tmp13567 = inst_13432;
var tmp13568 = inst_13434;
var tmp13569 = inst_13433;
var inst_13432__$1 = tmp13567;
var inst_13433__$1 = tmp13569;
var inst_13434__$1 = tmp13568;
var inst_13435__$1 = inst_13451;
var state_13555__$1 = (function (){var statearr_13574 = state_13555;
(statearr_13574[(13)] = inst_13432__$1);

(statearr_13574[(14)] = inst_13434__$1);

(statearr_13574[(18)] = inst_13450);

(statearr_13574[(15)] = inst_13435__$1);

(statearr_13574[(17)] = inst_13433__$1);

return statearr_13574;
})();
var statearr_13575_13651 = state_13555__$1;
(statearr_13575_13651[(2)] = null);

(statearr_13575_13651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (21))){
var inst_13477 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13579_13652 = state_13555__$1;
(statearr_13579_13652[(2)] = inst_13477);

(statearr_13579_13652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (31))){
var inst_13503 = (state_13555[(11)]);
var inst_13507 = done.call(null,null);
var inst_13508 = cljs.core.async.untap_STAR_.call(null,m,inst_13503);
var state_13555__$1 = (function (){var statearr_13580 = state_13555;
(statearr_13580[(19)] = inst_13507);

return statearr_13580;
})();
var statearr_13581_13653 = state_13555__$1;
(statearr_13581_13653[(2)] = inst_13508);

(statearr_13581_13653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (32))){
var inst_13497 = (state_13555[(20)]);
var inst_13498 = (state_13555[(10)]);
var inst_13495 = (state_13555[(21)]);
var inst_13496 = (state_13555[(12)]);
var inst_13510 = (state_13555[(2)]);
var inst_13511 = (inst_13498 + (1));
var tmp13576 = inst_13497;
var tmp13577 = inst_13495;
var tmp13578 = inst_13496;
var inst_13495__$1 = tmp13577;
var inst_13496__$1 = tmp13578;
var inst_13497__$1 = tmp13576;
var inst_13498__$1 = inst_13511;
var state_13555__$1 = (function (){var statearr_13582 = state_13555;
(statearr_13582[(22)] = inst_13510);

(statearr_13582[(20)] = inst_13497__$1);

(statearr_13582[(10)] = inst_13498__$1);

(statearr_13582[(21)] = inst_13495__$1);

(statearr_13582[(12)] = inst_13496__$1);

return statearr_13582;
})();
var statearr_13583_13654 = state_13555__$1;
(statearr_13583_13654[(2)] = null);

(statearr_13583_13654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (40))){
var inst_13523 = (state_13555[(23)]);
var inst_13527 = done.call(null,null);
var inst_13528 = cljs.core.async.untap_STAR_.call(null,m,inst_13523);
var state_13555__$1 = (function (){var statearr_13584 = state_13555;
(statearr_13584[(24)] = inst_13527);

return statearr_13584;
})();
var statearr_13585_13655 = state_13555__$1;
(statearr_13585_13655[(2)] = inst_13528);

(statearr_13585_13655[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (33))){
var inst_13514 = (state_13555[(25)]);
var inst_13516 = cljs.core.chunked_seq_QMARK_.call(null,inst_13514);
var state_13555__$1 = state_13555;
if(inst_13516){
var statearr_13586_13656 = state_13555__$1;
(statearr_13586_13656[(1)] = (36));

} else {
var statearr_13587_13657 = state_13555__$1;
(statearr_13587_13657[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (13))){
var inst_13444 = (state_13555[(26)]);
var inst_13447 = cljs.core.async.close_BANG_.call(null,inst_13444);
var state_13555__$1 = state_13555;
var statearr_13588_13658 = state_13555__$1;
(statearr_13588_13658[(2)] = inst_13447);

(statearr_13588_13658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (22))){
var inst_13467 = (state_13555[(8)]);
var inst_13470 = cljs.core.async.close_BANG_.call(null,inst_13467);
var state_13555__$1 = state_13555;
var statearr_13589_13659 = state_13555__$1;
(statearr_13589_13659[(2)] = inst_13470);

(statearr_13589_13659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (36))){
var inst_13514 = (state_13555[(25)]);
var inst_13518 = cljs.core.chunk_first.call(null,inst_13514);
var inst_13519 = cljs.core.chunk_rest.call(null,inst_13514);
var inst_13520 = cljs.core.count.call(null,inst_13518);
var inst_13495 = inst_13519;
var inst_13496 = inst_13518;
var inst_13497 = inst_13520;
var inst_13498 = (0);
var state_13555__$1 = (function (){var statearr_13590 = state_13555;
(statearr_13590[(20)] = inst_13497);

(statearr_13590[(10)] = inst_13498);

(statearr_13590[(21)] = inst_13495);

(statearr_13590[(12)] = inst_13496);

return statearr_13590;
})();
var statearr_13591_13660 = state_13555__$1;
(statearr_13591_13660[(2)] = null);

(statearr_13591_13660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (41))){
var inst_13514 = (state_13555[(25)]);
var inst_13530 = (state_13555[(2)]);
var inst_13531 = cljs.core.next.call(null,inst_13514);
var inst_13495 = inst_13531;
var inst_13496 = null;
var inst_13497 = (0);
var inst_13498 = (0);
var state_13555__$1 = (function (){var statearr_13592 = state_13555;
(statearr_13592[(20)] = inst_13497);

(statearr_13592[(10)] = inst_13498);

(statearr_13592[(21)] = inst_13495);

(statearr_13592[(27)] = inst_13530);

(statearr_13592[(12)] = inst_13496);

return statearr_13592;
})();
var statearr_13593_13661 = state_13555__$1;
(statearr_13593_13661[(2)] = null);

(statearr_13593_13661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (43))){
var state_13555__$1 = state_13555;
var statearr_13594_13662 = state_13555__$1;
(statearr_13594_13662[(2)] = null);

(statearr_13594_13662[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (29))){
var inst_13539 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13595_13663 = state_13555__$1;
(statearr_13595_13663[(2)] = inst_13539);

(statearr_13595_13663[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (44))){
var inst_13548 = (state_13555[(2)]);
var state_13555__$1 = (function (){var statearr_13596 = state_13555;
(statearr_13596[(28)] = inst_13548);

return statearr_13596;
})();
var statearr_13597_13664 = state_13555__$1;
(statearr_13597_13664[(2)] = null);

(statearr_13597_13664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (6))){
var inst_13487 = (state_13555[(29)]);
var inst_13486 = cljs.core.deref.call(null,cs);
var inst_13487__$1 = cljs.core.keys.call(null,inst_13486);
var inst_13488 = cljs.core.count.call(null,inst_13487__$1);
var inst_13489 = cljs.core.reset_BANG_.call(null,dctr,inst_13488);
var inst_13494 = cljs.core.seq.call(null,inst_13487__$1);
var inst_13495 = inst_13494;
var inst_13496 = null;
var inst_13497 = (0);
var inst_13498 = (0);
var state_13555__$1 = (function (){var statearr_13598 = state_13555;
(statearr_13598[(20)] = inst_13497);

(statearr_13598[(10)] = inst_13498);

(statearr_13598[(21)] = inst_13495);

(statearr_13598[(30)] = inst_13489);

(statearr_13598[(12)] = inst_13496);

(statearr_13598[(29)] = inst_13487__$1);

return statearr_13598;
})();
var statearr_13599_13665 = state_13555__$1;
(statearr_13599_13665[(2)] = null);

(statearr_13599_13665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (28))){
var inst_13514 = (state_13555[(25)]);
var inst_13495 = (state_13555[(21)]);
var inst_13514__$1 = cljs.core.seq.call(null,inst_13495);
var state_13555__$1 = (function (){var statearr_13600 = state_13555;
(statearr_13600[(25)] = inst_13514__$1);

return statearr_13600;
})();
if(inst_13514__$1){
var statearr_13601_13666 = state_13555__$1;
(statearr_13601_13666[(1)] = (33));

} else {
var statearr_13602_13667 = state_13555__$1;
(statearr_13602_13667[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (25))){
var inst_13497 = (state_13555[(20)]);
var inst_13498 = (state_13555[(10)]);
var inst_13500 = (inst_13498 < inst_13497);
var inst_13501 = inst_13500;
var state_13555__$1 = state_13555;
if(cljs.core.truth_(inst_13501)){
var statearr_13603_13668 = state_13555__$1;
(statearr_13603_13668[(1)] = (27));

} else {
var statearr_13604_13669 = state_13555__$1;
(statearr_13604_13669[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (34))){
var state_13555__$1 = state_13555;
var statearr_13605_13670 = state_13555__$1;
(statearr_13605_13670[(2)] = null);

(statearr_13605_13670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (17))){
var state_13555__$1 = state_13555;
var statearr_13606_13671 = state_13555__$1;
(statearr_13606_13671[(2)] = null);

(statearr_13606_13671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (3))){
var inst_13553 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13555__$1,inst_13553);
} else {
if((state_val_13556 === (12))){
var inst_13482 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13607_13672 = state_13555__$1;
(statearr_13607_13672[(2)] = inst_13482);

(statearr_13607_13672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (2))){
var state_13555__$1 = state_13555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13555__$1,(4),ch);
} else {
if((state_val_13556 === (23))){
var state_13555__$1 = state_13555;
var statearr_13608_13673 = state_13555__$1;
(statearr_13608_13673[(2)] = null);

(statearr_13608_13673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (35))){
var inst_13537 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13609_13674 = state_13555__$1;
(statearr_13609_13674[(2)] = inst_13537);

(statearr_13609_13674[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (19))){
var inst_13454 = (state_13555[(7)]);
var inst_13458 = cljs.core.chunk_first.call(null,inst_13454);
var inst_13459 = cljs.core.chunk_rest.call(null,inst_13454);
var inst_13460 = cljs.core.count.call(null,inst_13458);
var inst_13432 = inst_13459;
var inst_13433 = inst_13458;
var inst_13434 = inst_13460;
var inst_13435 = (0);
var state_13555__$1 = (function (){var statearr_13610 = state_13555;
(statearr_13610[(13)] = inst_13432);

(statearr_13610[(14)] = inst_13434);

(statearr_13610[(15)] = inst_13435);

(statearr_13610[(17)] = inst_13433);

return statearr_13610;
})();
var statearr_13611_13675 = state_13555__$1;
(statearr_13611_13675[(2)] = null);

(statearr_13611_13675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (11))){
var inst_13432 = (state_13555[(13)]);
var inst_13454 = (state_13555[(7)]);
var inst_13454__$1 = cljs.core.seq.call(null,inst_13432);
var state_13555__$1 = (function (){var statearr_13612 = state_13555;
(statearr_13612[(7)] = inst_13454__$1);

return statearr_13612;
})();
if(inst_13454__$1){
var statearr_13613_13676 = state_13555__$1;
(statearr_13613_13676[(1)] = (16));

} else {
var statearr_13614_13677 = state_13555__$1;
(statearr_13614_13677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (9))){
var inst_13484 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13615_13678 = state_13555__$1;
(statearr_13615_13678[(2)] = inst_13484);

(statearr_13615_13678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (5))){
var inst_13430 = cljs.core.deref.call(null,cs);
var inst_13431 = cljs.core.seq.call(null,inst_13430);
var inst_13432 = inst_13431;
var inst_13433 = null;
var inst_13434 = (0);
var inst_13435 = (0);
var state_13555__$1 = (function (){var statearr_13616 = state_13555;
(statearr_13616[(13)] = inst_13432);

(statearr_13616[(14)] = inst_13434);

(statearr_13616[(15)] = inst_13435);

(statearr_13616[(17)] = inst_13433);

return statearr_13616;
})();
var statearr_13617_13679 = state_13555__$1;
(statearr_13617_13679[(2)] = null);

(statearr_13617_13679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (14))){
var state_13555__$1 = state_13555;
var statearr_13618_13680 = state_13555__$1;
(statearr_13618_13680[(2)] = null);

(statearr_13618_13680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (45))){
var inst_13545 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13619_13681 = state_13555__$1;
(statearr_13619_13681[(2)] = inst_13545);

(statearr_13619_13681[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (26))){
var inst_13487 = (state_13555[(29)]);
var inst_13541 = (state_13555[(2)]);
var inst_13542 = cljs.core.seq.call(null,inst_13487);
var state_13555__$1 = (function (){var statearr_13620 = state_13555;
(statearr_13620[(31)] = inst_13541);

return statearr_13620;
})();
if(inst_13542){
var statearr_13621_13682 = state_13555__$1;
(statearr_13621_13682[(1)] = (42));

} else {
var statearr_13622_13683 = state_13555__$1;
(statearr_13622_13683[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (16))){
var inst_13454 = (state_13555[(7)]);
var inst_13456 = cljs.core.chunked_seq_QMARK_.call(null,inst_13454);
var state_13555__$1 = state_13555;
if(inst_13456){
var statearr_13623_13684 = state_13555__$1;
(statearr_13623_13684[(1)] = (19));

} else {
var statearr_13624_13685 = state_13555__$1;
(statearr_13624_13685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (38))){
var inst_13534 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13625_13686 = state_13555__$1;
(statearr_13625_13686[(2)] = inst_13534);

(statearr_13625_13686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (30))){
var state_13555__$1 = state_13555;
var statearr_13626_13687 = state_13555__$1;
(statearr_13626_13687[(2)] = null);

(statearr_13626_13687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (10))){
var inst_13435 = (state_13555[(15)]);
var inst_13433 = (state_13555[(17)]);
var inst_13443 = cljs.core._nth.call(null,inst_13433,inst_13435);
var inst_13444 = cljs.core.nth.call(null,inst_13443,(0),null);
var inst_13445 = cljs.core.nth.call(null,inst_13443,(1),null);
var state_13555__$1 = (function (){var statearr_13627 = state_13555;
(statearr_13627[(26)] = inst_13444);

return statearr_13627;
})();
if(cljs.core.truth_(inst_13445)){
var statearr_13628_13688 = state_13555__$1;
(statearr_13628_13688[(1)] = (13));

} else {
var statearr_13629_13689 = state_13555__$1;
(statearr_13629_13689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (18))){
var inst_13480 = (state_13555[(2)]);
var state_13555__$1 = state_13555;
var statearr_13630_13690 = state_13555__$1;
(statearr_13630_13690[(2)] = inst_13480);

(statearr_13630_13690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (42))){
var state_13555__$1 = state_13555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13555__$1,(45),dchan);
} else {
if((state_val_13556 === (37))){
var inst_13423 = (state_13555[(9)]);
var inst_13523 = (state_13555[(23)]);
var inst_13514 = (state_13555[(25)]);
var inst_13523__$1 = cljs.core.first.call(null,inst_13514);
var inst_13524 = cljs.core.async.put_BANG_.call(null,inst_13523__$1,inst_13423,done);
var state_13555__$1 = (function (){var statearr_13631 = state_13555;
(statearr_13631[(23)] = inst_13523__$1);

return statearr_13631;
})();
if(cljs.core.truth_(inst_13524)){
var statearr_13632_13691 = state_13555__$1;
(statearr_13632_13691[(1)] = (39));

} else {
var statearr_13633_13692 = state_13555__$1;
(statearr_13633_13692[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13556 === (8))){
var inst_13434 = (state_13555[(14)]);
var inst_13435 = (state_13555[(15)]);
var inst_13437 = (inst_13435 < inst_13434);
var inst_13438 = inst_13437;
var state_13555__$1 = state_13555;
if(cljs.core.truth_(inst_13438)){
var statearr_13634_13693 = state_13555__$1;
(statearr_13634_13693[(1)] = (10));

} else {
var statearr_13635_13694 = state_13555__$1;
(statearr_13635_13694[(1)] = (11));

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
});})(c__12822__auto___13640,cs,m,dchan,dctr,done))
;
return ((function (switch__12727__auto__,c__12822__auto___13640,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12728__auto__ = null;
var cljs$core$async$mult_$_state_machine__12728__auto____0 = (function (){
var statearr_13636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13636[(0)] = cljs$core$async$mult_$_state_machine__12728__auto__);

(statearr_13636[(1)] = (1));

return statearr_13636;
});
var cljs$core$async$mult_$_state_machine__12728__auto____1 = (function (state_13555){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13637){if((e13637 instanceof Object)){
var ex__12731__auto__ = e13637;
var statearr_13638_13695 = state_13555;
(statearr_13638_13695[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13696 = state_13555;
state_13555 = G__13696;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12728__auto__ = function(state_13555){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12728__auto____1.call(this,state_13555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12728__auto____0;
cljs$core$async$mult_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12728__auto____1;
return cljs$core$async$mult_$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___13640,cs,m,dchan,dctr,done))
})();
var state__12824__auto__ = (function (){var statearr_13639 = f__12823__auto__.call(null);
(statearr_13639[(6)] = c__12822__auto___13640);

return statearr_13639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___13640,cs,m,dchan,dctr,done))
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
var G__13698 = arguments.length;
switch (G__13698) {
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
var len__4730__auto___13710 = arguments.length;
var i__4731__auto___13711 = (0);
while(true){
if((i__4731__auto___13711 < len__4730__auto___13710)){
args__4736__auto__.push((arguments[i__4731__auto___13711]));

var G__13712 = (i__4731__auto___13711 + (1));
i__4731__auto___13711 = G__13712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13704){
var map__13705 = p__13704;
var map__13705__$1 = (((((!((map__13705 == null))))?(((((map__13705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13705):map__13705);
var opts = map__13705__$1;
var statearr_13707_13713 = state;
(statearr_13707_13713[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__13705,map__13705__$1,opts){
return (function (val){
var statearr_13708_13714 = state;
(statearr_13708_13714[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13705,map__13705__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_13709_13715 = state;
(statearr_13709_13715[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13700){
var G__13701 = cljs.core.first.call(null,seq13700);
var seq13700__$1 = cljs.core.next.call(null,seq13700);
var G__13702 = cljs.core.first.call(null,seq13700__$1);
var seq13700__$2 = cljs.core.next.call(null,seq13700__$1);
var G__13703 = cljs.core.first.call(null,seq13700__$2);
var seq13700__$3 = cljs.core.next.call(null,seq13700__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13701,G__13702,G__13703,seq13700__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13716 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13717){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13717 = meta13717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13718,meta13717__$1){
var self__ = this;
var _13718__$1 = this;
return (new cljs.core.async.t_cljs$core$async13716(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13717__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13718){
var self__ = this;
var _13718__$1 = this;
return self__.meta13717;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13716.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13717","meta13717",2065994517,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13716";

cljs.core.async.t_cljs$core$async13716.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async13716");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13716.
 */
cljs.core.async.__GT_t_cljs$core$async13716 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13716(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13717){
return (new cljs.core.async.t_cljs$core$async13716(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13717));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13716(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12822__auto___13880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___13880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___13880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13820){
var state_val_13821 = (state_13820[(1)]);
if((state_val_13821 === (7))){
var inst_13735 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
var statearr_13822_13881 = state_13820__$1;
(statearr_13822_13881[(2)] = inst_13735);

(statearr_13822_13881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (20))){
var inst_13747 = (state_13820[(7)]);
var state_13820__$1 = state_13820;
var statearr_13823_13882 = state_13820__$1;
(statearr_13823_13882[(2)] = inst_13747);

(statearr_13823_13882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (27))){
var state_13820__$1 = state_13820;
var statearr_13824_13883 = state_13820__$1;
(statearr_13824_13883[(2)] = null);

(statearr_13824_13883[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (1))){
var inst_13722 = (state_13820[(8)]);
var inst_13722__$1 = calc_state.call(null);
var inst_13724 = (inst_13722__$1 == null);
var inst_13725 = cljs.core.not.call(null,inst_13724);
var state_13820__$1 = (function (){var statearr_13825 = state_13820;
(statearr_13825[(8)] = inst_13722__$1);

return statearr_13825;
})();
if(inst_13725){
var statearr_13826_13884 = state_13820__$1;
(statearr_13826_13884[(1)] = (2));

} else {
var statearr_13827_13885 = state_13820__$1;
(statearr_13827_13885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (24))){
var inst_13794 = (state_13820[(9)]);
var inst_13780 = (state_13820[(10)]);
var inst_13771 = (state_13820[(11)]);
var inst_13794__$1 = inst_13771.call(null,inst_13780);
var state_13820__$1 = (function (){var statearr_13828 = state_13820;
(statearr_13828[(9)] = inst_13794__$1);

return statearr_13828;
})();
if(cljs.core.truth_(inst_13794__$1)){
var statearr_13829_13886 = state_13820__$1;
(statearr_13829_13886[(1)] = (29));

} else {
var statearr_13830_13887 = state_13820__$1;
(statearr_13830_13887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (4))){
var inst_13738 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
if(cljs.core.truth_(inst_13738)){
var statearr_13831_13888 = state_13820__$1;
(statearr_13831_13888[(1)] = (8));

} else {
var statearr_13832_13889 = state_13820__$1;
(statearr_13832_13889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (15))){
var inst_13765 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
if(cljs.core.truth_(inst_13765)){
var statearr_13833_13890 = state_13820__$1;
(statearr_13833_13890[(1)] = (19));

} else {
var statearr_13834_13891 = state_13820__$1;
(statearr_13834_13891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (21))){
var inst_13770 = (state_13820[(12)]);
var inst_13770__$1 = (state_13820[(2)]);
var inst_13771 = cljs.core.get.call(null,inst_13770__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13772 = cljs.core.get.call(null,inst_13770__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13773 = cljs.core.get.call(null,inst_13770__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13820__$1 = (function (){var statearr_13835 = state_13820;
(statearr_13835[(13)] = inst_13772);

(statearr_13835[(12)] = inst_13770__$1);

(statearr_13835[(11)] = inst_13771);

return statearr_13835;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13820__$1,(22),inst_13773);
} else {
if((state_val_13821 === (31))){
var inst_13802 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
if(cljs.core.truth_(inst_13802)){
var statearr_13836_13892 = state_13820__$1;
(statearr_13836_13892[(1)] = (32));

} else {
var statearr_13837_13893 = state_13820__$1;
(statearr_13837_13893[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (32))){
var inst_13779 = (state_13820[(14)]);
var state_13820__$1 = state_13820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13820__$1,(35),out,inst_13779);
} else {
if((state_val_13821 === (33))){
var inst_13770 = (state_13820[(12)]);
var inst_13747 = inst_13770;
var state_13820__$1 = (function (){var statearr_13838 = state_13820;
(statearr_13838[(7)] = inst_13747);

return statearr_13838;
})();
var statearr_13839_13894 = state_13820__$1;
(statearr_13839_13894[(2)] = null);

(statearr_13839_13894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (13))){
var inst_13747 = (state_13820[(7)]);
var inst_13754 = inst_13747.cljs$lang$protocol_mask$partition0$;
var inst_13755 = (inst_13754 & (64));
var inst_13756 = inst_13747.cljs$core$ISeq$;
var inst_13757 = (cljs.core.PROTOCOL_SENTINEL === inst_13756);
var inst_13758 = ((inst_13755) || (inst_13757));
var state_13820__$1 = state_13820;
if(cljs.core.truth_(inst_13758)){
var statearr_13840_13895 = state_13820__$1;
(statearr_13840_13895[(1)] = (16));

} else {
var statearr_13841_13896 = state_13820__$1;
(statearr_13841_13896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (22))){
var inst_13779 = (state_13820[(14)]);
var inst_13780 = (state_13820[(10)]);
var inst_13778 = (state_13820[(2)]);
var inst_13779__$1 = cljs.core.nth.call(null,inst_13778,(0),null);
var inst_13780__$1 = cljs.core.nth.call(null,inst_13778,(1),null);
var inst_13781 = (inst_13779__$1 == null);
var inst_13782 = cljs.core._EQ_.call(null,inst_13780__$1,change);
var inst_13783 = ((inst_13781) || (inst_13782));
var state_13820__$1 = (function (){var statearr_13842 = state_13820;
(statearr_13842[(14)] = inst_13779__$1);

(statearr_13842[(10)] = inst_13780__$1);

return statearr_13842;
})();
if(cljs.core.truth_(inst_13783)){
var statearr_13843_13897 = state_13820__$1;
(statearr_13843_13897[(1)] = (23));

} else {
var statearr_13844_13898 = state_13820__$1;
(statearr_13844_13898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (36))){
var inst_13770 = (state_13820[(12)]);
var inst_13747 = inst_13770;
var state_13820__$1 = (function (){var statearr_13845 = state_13820;
(statearr_13845[(7)] = inst_13747);

return statearr_13845;
})();
var statearr_13846_13899 = state_13820__$1;
(statearr_13846_13899[(2)] = null);

(statearr_13846_13899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (29))){
var inst_13794 = (state_13820[(9)]);
var state_13820__$1 = state_13820;
var statearr_13847_13900 = state_13820__$1;
(statearr_13847_13900[(2)] = inst_13794);

(statearr_13847_13900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (6))){
var state_13820__$1 = state_13820;
var statearr_13848_13901 = state_13820__$1;
(statearr_13848_13901[(2)] = false);

(statearr_13848_13901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (28))){
var inst_13790 = (state_13820[(2)]);
var inst_13791 = calc_state.call(null);
var inst_13747 = inst_13791;
var state_13820__$1 = (function (){var statearr_13849 = state_13820;
(statearr_13849[(7)] = inst_13747);

(statearr_13849[(15)] = inst_13790);

return statearr_13849;
})();
var statearr_13850_13902 = state_13820__$1;
(statearr_13850_13902[(2)] = null);

(statearr_13850_13902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (25))){
var inst_13816 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
var statearr_13851_13903 = state_13820__$1;
(statearr_13851_13903[(2)] = inst_13816);

(statearr_13851_13903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (34))){
var inst_13814 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
var statearr_13852_13904 = state_13820__$1;
(statearr_13852_13904[(2)] = inst_13814);

(statearr_13852_13904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (17))){
var state_13820__$1 = state_13820;
var statearr_13853_13905 = state_13820__$1;
(statearr_13853_13905[(2)] = false);

(statearr_13853_13905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (3))){
var state_13820__$1 = state_13820;
var statearr_13854_13906 = state_13820__$1;
(statearr_13854_13906[(2)] = false);

(statearr_13854_13906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (12))){
var inst_13818 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13820__$1,inst_13818);
} else {
if((state_val_13821 === (2))){
var inst_13722 = (state_13820[(8)]);
var inst_13727 = inst_13722.cljs$lang$protocol_mask$partition0$;
var inst_13728 = (inst_13727 & (64));
var inst_13729 = inst_13722.cljs$core$ISeq$;
var inst_13730 = (cljs.core.PROTOCOL_SENTINEL === inst_13729);
var inst_13731 = ((inst_13728) || (inst_13730));
var state_13820__$1 = state_13820;
if(cljs.core.truth_(inst_13731)){
var statearr_13855_13907 = state_13820__$1;
(statearr_13855_13907[(1)] = (5));

} else {
var statearr_13856_13908 = state_13820__$1;
(statearr_13856_13908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (23))){
var inst_13779 = (state_13820[(14)]);
var inst_13785 = (inst_13779 == null);
var state_13820__$1 = state_13820;
if(cljs.core.truth_(inst_13785)){
var statearr_13857_13909 = state_13820__$1;
(statearr_13857_13909[(1)] = (26));

} else {
var statearr_13858_13910 = state_13820__$1;
(statearr_13858_13910[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (35))){
var inst_13805 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
if(cljs.core.truth_(inst_13805)){
var statearr_13859_13911 = state_13820__$1;
(statearr_13859_13911[(1)] = (36));

} else {
var statearr_13860_13912 = state_13820__$1;
(statearr_13860_13912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (19))){
var inst_13747 = (state_13820[(7)]);
var inst_13767 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13747);
var state_13820__$1 = state_13820;
var statearr_13861_13913 = state_13820__$1;
(statearr_13861_13913[(2)] = inst_13767);

(statearr_13861_13913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (11))){
var inst_13747 = (state_13820[(7)]);
var inst_13751 = (inst_13747 == null);
var inst_13752 = cljs.core.not.call(null,inst_13751);
var state_13820__$1 = state_13820;
if(inst_13752){
var statearr_13862_13914 = state_13820__$1;
(statearr_13862_13914[(1)] = (13));

} else {
var statearr_13863_13915 = state_13820__$1;
(statearr_13863_13915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (9))){
var inst_13722 = (state_13820[(8)]);
var state_13820__$1 = state_13820;
var statearr_13864_13916 = state_13820__$1;
(statearr_13864_13916[(2)] = inst_13722);

(statearr_13864_13916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (5))){
var state_13820__$1 = state_13820;
var statearr_13865_13917 = state_13820__$1;
(statearr_13865_13917[(2)] = true);

(statearr_13865_13917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (14))){
var state_13820__$1 = state_13820;
var statearr_13866_13918 = state_13820__$1;
(statearr_13866_13918[(2)] = false);

(statearr_13866_13918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (26))){
var inst_13780 = (state_13820[(10)]);
var inst_13787 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13780);
var state_13820__$1 = state_13820;
var statearr_13867_13919 = state_13820__$1;
(statearr_13867_13919[(2)] = inst_13787);

(statearr_13867_13919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (16))){
var state_13820__$1 = state_13820;
var statearr_13868_13920 = state_13820__$1;
(statearr_13868_13920[(2)] = true);

(statearr_13868_13920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (38))){
var inst_13810 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
var statearr_13869_13921 = state_13820__$1;
(statearr_13869_13921[(2)] = inst_13810);

(statearr_13869_13921[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (30))){
var inst_13772 = (state_13820[(13)]);
var inst_13780 = (state_13820[(10)]);
var inst_13771 = (state_13820[(11)]);
var inst_13797 = cljs.core.empty_QMARK_.call(null,inst_13771);
var inst_13798 = inst_13772.call(null,inst_13780);
var inst_13799 = cljs.core.not.call(null,inst_13798);
var inst_13800 = ((inst_13797) && (inst_13799));
var state_13820__$1 = state_13820;
var statearr_13870_13922 = state_13820__$1;
(statearr_13870_13922[(2)] = inst_13800);

(statearr_13870_13922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (10))){
var inst_13722 = (state_13820[(8)]);
var inst_13743 = (state_13820[(2)]);
var inst_13744 = cljs.core.get.call(null,inst_13743,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13745 = cljs.core.get.call(null,inst_13743,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13746 = cljs.core.get.call(null,inst_13743,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13747 = inst_13722;
var state_13820__$1 = (function (){var statearr_13871 = state_13820;
(statearr_13871[(16)] = inst_13745);

(statearr_13871[(17)] = inst_13744);

(statearr_13871[(7)] = inst_13747);

(statearr_13871[(18)] = inst_13746);

return statearr_13871;
})();
var statearr_13872_13923 = state_13820__$1;
(statearr_13872_13923[(2)] = null);

(statearr_13872_13923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (18))){
var inst_13762 = (state_13820[(2)]);
var state_13820__$1 = state_13820;
var statearr_13873_13924 = state_13820__$1;
(statearr_13873_13924[(2)] = inst_13762);

(statearr_13873_13924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (37))){
var state_13820__$1 = state_13820;
var statearr_13874_13925 = state_13820__$1;
(statearr_13874_13925[(2)] = null);

(statearr_13874_13925[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13821 === (8))){
var inst_13722 = (state_13820[(8)]);
var inst_13740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13722);
var state_13820__$1 = state_13820;
var statearr_13875_13926 = state_13820__$1;
(statearr_13875_13926[(2)] = inst_13740);

(statearr_13875_13926[(1)] = (10));


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
});})(c__12822__auto___13880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12727__auto__,c__12822__auto___13880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12728__auto__ = null;
var cljs$core$async$mix_$_state_machine__12728__auto____0 = (function (){
var statearr_13876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13876[(0)] = cljs$core$async$mix_$_state_machine__12728__auto__);

(statearr_13876[(1)] = (1));

return statearr_13876;
});
var cljs$core$async$mix_$_state_machine__12728__auto____1 = (function (state_13820){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_13820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e13877){if((e13877 instanceof Object)){
var ex__12731__auto__ = e13877;
var statearr_13878_13927 = state_13820;
(statearr_13878_13927[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13928 = state_13820;
state_13820 = G__13928;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12728__auto__ = function(state_13820){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12728__auto____1.call(this,state_13820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12728__auto____0;
cljs$core$async$mix_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12728__auto____1;
return cljs$core$async$mix_$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___13880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12824__auto__ = (function (){var statearr_13879 = f__12823__auto__.call(null);
(statearr_13879[(6)] = c__12822__auto___13880);

return statearr_13879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___13880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__13930 = arguments.length;
switch (G__13930) {
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
var G__13934 = arguments.length;
switch (G__13934) {
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
return (function (p1__13932_SHARP_){
if(cljs.core.truth_(p1__13932_SHARP_.call(null,topic))){
return p1__13932_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13932_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13935 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13936){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13936 = meta13936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13937,meta13936__$1){
var self__ = this;
var _13937__$1 = this;
return (new cljs.core.async.t_cljs$core$async13935(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13936__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13937){
var self__ = this;
var _13937__$1 = this;
return self__.meta13936;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13935.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13936","meta13936",1484193490,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13935";

cljs.core.async.t_cljs$core$async13935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async13935");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13935.
 */
cljs.core.async.__GT_t_cljs$core$async13935 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13936){
return (new cljs.core.async.t_cljs$core$async13935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13936));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13935(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12822__auto___14055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14055,mults,ensure_mult,p){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14055,mults,ensure_mult,p){
return (function (state_14009){
var state_val_14010 = (state_14009[(1)]);
if((state_val_14010 === (7))){
var inst_14005 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14011_14056 = state_14009__$1;
(statearr_14011_14056[(2)] = inst_14005);

(statearr_14011_14056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (20))){
var state_14009__$1 = state_14009;
var statearr_14012_14057 = state_14009__$1;
(statearr_14012_14057[(2)] = null);

(statearr_14012_14057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (1))){
var state_14009__$1 = state_14009;
var statearr_14013_14058 = state_14009__$1;
(statearr_14013_14058[(2)] = null);

(statearr_14013_14058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (24))){
var inst_13988 = (state_14009[(7)]);
var inst_13997 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13988);
var state_14009__$1 = state_14009;
var statearr_14014_14059 = state_14009__$1;
(statearr_14014_14059[(2)] = inst_13997);

(statearr_14014_14059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (4))){
var inst_13940 = (state_14009[(8)]);
var inst_13940__$1 = (state_14009[(2)]);
var inst_13941 = (inst_13940__$1 == null);
var state_14009__$1 = (function (){var statearr_14015 = state_14009;
(statearr_14015[(8)] = inst_13940__$1);

return statearr_14015;
})();
if(cljs.core.truth_(inst_13941)){
var statearr_14016_14060 = state_14009__$1;
(statearr_14016_14060[(1)] = (5));

} else {
var statearr_14017_14061 = state_14009__$1;
(statearr_14017_14061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (15))){
var inst_13982 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14018_14062 = state_14009__$1;
(statearr_14018_14062[(2)] = inst_13982);

(statearr_14018_14062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (21))){
var inst_14002 = (state_14009[(2)]);
var state_14009__$1 = (function (){var statearr_14019 = state_14009;
(statearr_14019[(9)] = inst_14002);

return statearr_14019;
})();
var statearr_14020_14063 = state_14009__$1;
(statearr_14020_14063[(2)] = null);

(statearr_14020_14063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (13))){
var inst_13964 = (state_14009[(10)]);
var inst_13966 = cljs.core.chunked_seq_QMARK_.call(null,inst_13964);
var state_14009__$1 = state_14009;
if(inst_13966){
var statearr_14021_14064 = state_14009__$1;
(statearr_14021_14064[(1)] = (16));

} else {
var statearr_14022_14065 = state_14009__$1;
(statearr_14022_14065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (22))){
var inst_13994 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
if(cljs.core.truth_(inst_13994)){
var statearr_14023_14066 = state_14009__$1;
(statearr_14023_14066[(1)] = (23));

} else {
var statearr_14024_14067 = state_14009__$1;
(statearr_14024_14067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (6))){
var inst_13940 = (state_14009[(8)]);
var inst_13990 = (state_14009[(11)]);
var inst_13988 = (state_14009[(7)]);
var inst_13988__$1 = topic_fn.call(null,inst_13940);
var inst_13989 = cljs.core.deref.call(null,mults);
var inst_13990__$1 = cljs.core.get.call(null,inst_13989,inst_13988__$1);
var state_14009__$1 = (function (){var statearr_14025 = state_14009;
(statearr_14025[(11)] = inst_13990__$1);

(statearr_14025[(7)] = inst_13988__$1);

return statearr_14025;
})();
if(cljs.core.truth_(inst_13990__$1)){
var statearr_14026_14068 = state_14009__$1;
(statearr_14026_14068[(1)] = (19));

} else {
var statearr_14027_14069 = state_14009__$1;
(statearr_14027_14069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (25))){
var inst_13999 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14028_14070 = state_14009__$1;
(statearr_14028_14070[(2)] = inst_13999);

(statearr_14028_14070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (17))){
var inst_13964 = (state_14009[(10)]);
var inst_13973 = cljs.core.first.call(null,inst_13964);
var inst_13974 = cljs.core.async.muxch_STAR_.call(null,inst_13973);
var inst_13975 = cljs.core.async.close_BANG_.call(null,inst_13974);
var inst_13976 = cljs.core.next.call(null,inst_13964);
var inst_13950 = inst_13976;
var inst_13951 = null;
var inst_13952 = (0);
var inst_13953 = (0);
var state_14009__$1 = (function (){var statearr_14029 = state_14009;
(statearr_14029[(12)] = inst_13953);

(statearr_14029[(13)] = inst_13952);

(statearr_14029[(14)] = inst_13975);

(statearr_14029[(15)] = inst_13950);

(statearr_14029[(16)] = inst_13951);

return statearr_14029;
})();
var statearr_14030_14071 = state_14009__$1;
(statearr_14030_14071[(2)] = null);

(statearr_14030_14071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (3))){
var inst_14007 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14009__$1,inst_14007);
} else {
if((state_val_14010 === (12))){
var inst_13984 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14031_14072 = state_14009__$1;
(statearr_14031_14072[(2)] = inst_13984);

(statearr_14031_14072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (2))){
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14009__$1,(4),ch);
} else {
if((state_val_14010 === (23))){
var state_14009__$1 = state_14009;
var statearr_14032_14073 = state_14009__$1;
(statearr_14032_14073[(2)] = null);

(statearr_14032_14073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (19))){
var inst_13940 = (state_14009[(8)]);
var inst_13990 = (state_14009[(11)]);
var inst_13992 = cljs.core.async.muxch_STAR_.call(null,inst_13990);
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14009__$1,(22),inst_13992,inst_13940);
} else {
if((state_val_14010 === (11))){
var inst_13964 = (state_14009[(10)]);
var inst_13950 = (state_14009[(15)]);
var inst_13964__$1 = cljs.core.seq.call(null,inst_13950);
var state_14009__$1 = (function (){var statearr_14033 = state_14009;
(statearr_14033[(10)] = inst_13964__$1);

return statearr_14033;
})();
if(inst_13964__$1){
var statearr_14034_14074 = state_14009__$1;
(statearr_14034_14074[(1)] = (13));

} else {
var statearr_14035_14075 = state_14009__$1;
(statearr_14035_14075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (9))){
var inst_13986 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14036_14076 = state_14009__$1;
(statearr_14036_14076[(2)] = inst_13986);

(statearr_14036_14076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (5))){
var inst_13947 = cljs.core.deref.call(null,mults);
var inst_13948 = cljs.core.vals.call(null,inst_13947);
var inst_13949 = cljs.core.seq.call(null,inst_13948);
var inst_13950 = inst_13949;
var inst_13951 = null;
var inst_13952 = (0);
var inst_13953 = (0);
var state_14009__$1 = (function (){var statearr_14037 = state_14009;
(statearr_14037[(12)] = inst_13953);

(statearr_14037[(13)] = inst_13952);

(statearr_14037[(15)] = inst_13950);

(statearr_14037[(16)] = inst_13951);

return statearr_14037;
})();
var statearr_14038_14077 = state_14009__$1;
(statearr_14038_14077[(2)] = null);

(statearr_14038_14077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (14))){
var state_14009__$1 = state_14009;
var statearr_14042_14078 = state_14009__$1;
(statearr_14042_14078[(2)] = null);

(statearr_14042_14078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (16))){
var inst_13964 = (state_14009[(10)]);
var inst_13968 = cljs.core.chunk_first.call(null,inst_13964);
var inst_13969 = cljs.core.chunk_rest.call(null,inst_13964);
var inst_13970 = cljs.core.count.call(null,inst_13968);
var inst_13950 = inst_13969;
var inst_13951 = inst_13968;
var inst_13952 = inst_13970;
var inst_13953 = (0);
var state_14009__$1 = (function (){var statearr_14043 = state_14009;
(statearr_14043[(12)] = inst_13953);

(statearr_14043[(13)] = inst_13952);

(statearr_14043[(15)] = inst_13950);

(statearr_14043[(16)] = inst_13951);

return statearr_14043;
})();
var statearr_14044_14079 = state_14009__$1;
(statearr_14044_14079[(2)] = null);

(statearr_14044_14079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (10))){
var inst_13953 = (state_14009[(12)]);
var inst_13952 = (state_14009[(13)]);
var inst_13950 = (state_14009[(15)]);
var inst_13951 = (state_14009[(16)]);
var inst_13958 = cljs.core._nth.call(null,inst_13951,inst_13953);
var inst_13959 = cljs.core.async.muxch_STAR_.call(null,inst_13958);
var inst_13960 = cljs.core.async.close_BANG_.call(null,inst_13959);
var inst_13961 = (inst_13953 + (1));
var tmp14039 = inst_13952;
var tmp14040 = inst_13950;
var tmp14041 = inst_13951;
var inst_13950__$1 = tmp14040;
var inst_13951__$1 = tmp14041;
var inst_13952__$1 = tmp14039;
var inst_13953__$1 = inst_13961;
var state_14009__$1 = (function (){var statearr_14045 = state_14009;
(statearr_14045[(12)] = inst_13953__$1);

(statearr_14045[(13)] = inst_13952__$1);

(statearr_14045[(17)] = inst_13960);

(statearr_14045[(15)] = inst_13950__$1);

(statearr_14045[(16)] = inst_13951__$1);

return statearr_14045;
})();
var statearr_14046_14080 = state_14009__$1;
(statearr_14046_14080[(2)] = null);

(statearr_14046_14080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (18))){
var inst_13979 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14047_14081 = state_14009__$1;
(statearr_14047_14081[(2)] = inst_13979);

(statearr_14047_14081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (8))){
var inst_13953 = (state_14009[(12)]);
var inst_13952 = (state_14009[(13)]);
var inst_13955 = (inst_13953 < inst_13952);
var inst_13956 = inst_13955;
var state_14009__$1 = state_14009;
if(cljs.core.truth_(inst_13956)){
var statearr_14048_14082 = state_14009__$1;
(statearr_14048_14082[(1)] = (10));

} else {
var statearr_14049_14083 = state_14009__$1;
(statearr_14049_14083[(1)] = (11));

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
});})(c__12822__auto___14055,mults,ensure_mult,p))
;
return ((function (switch__12727__auto__,c__12822__auto___14055,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14050[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14050[(1)] = (1));

return statearr_14050;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14009){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14051){if((e14051 instanceof Object)){
var ex__12731__auto__ = e14051;
var statearr_14052_14084 = state_14009;
(statearr_14052_14084[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14085 = state_14009;
state_14009 = G__14085;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14055,mults,ensure_mult,p))
})();
var state__12824__auto__ = (function (){var statearr_14053 = f__12823__auto__.call(null);
(statearr_14053[(6)] = c__12822__auto___14055);

return statearr_14053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14055,mults,ensure_mult,p))
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
var G__14087 = arguments.length;
switch (G__14087) {
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
var G__14090 = arguments.length;
switch (G__14090) {
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
var G__14093 = arguments.length;
switch (G__14093) {
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
var c__12822__auto___14160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14132){
var state_val_14133 = (state_14132[(1)]);
if((state_val_14133 === (7))){
var state_14132__$1 = state_14132;
var statearr_14134_14161 = state_14132__$1;
(statearr_14134_14161[(2)] = null);

(statearr_14134_14161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (1))){
var state_14132__$1 = state_14132;
var statearr_14135_14162 = state_14132__$1;
(statearr_14135_14162[(2)] = null);

(statearr_14135_14162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (4))){
var inst_14096 = (state_14132[(7)]);
var inst_14098 = (inst_14096 < cnt);
var state_14132__$1 = state_14132;
if(cljs.core.truth_(inst_14098)){
var statearr_14136_14163 = state_14132__$1;
(statearr_14136_14163[(1)] = (6));

} else {
var statearr_14137_14164 = state_14132__$1;
(statearr_14137_14164[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (15))){
var inst_14128 = (state_14132[(2)]);
var state_14132__$1 = state_14132;
var statearr_14138_14165 = state_14132__$1;
(statearr_14138_14165[(2)] = inst_14128);

(statearr_14138_14165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (13))){
var inst_14121 = cljs.core.async.close_BANG_.call(null,out);
var state_14132__$1 = state_14132;
var statearr_14139_14166 = state_14132__$1;
(statearr_14139_14166[(2)] = inst_14121);

(statearr_14139_14166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (6))){
var state_14132__$1 = state_14132;
var statearr_14140_14167 = state_14132__$1;
(statearr_14140_14167[(2)] = null);

(statearr_14140_14167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (3))){
var inst_14130 = (state_14132[(2)]);
var state_14132__$1 = state_14132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14132__$1,inst_14130);
} else {
if((state_val_14133 === (12))){
var inst_14118 = (state_14132[(8)]);
var inst_14118__$1 = (state_14132[(2)]);
var inst_14119 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14118__$1);
var state_14132__$1 = (function (){var statearr_14141 = state_14132;
(statearr_14141[(8)] = inst_14118__$1);

return statearr_14141;
})();
if(cljs.core.truth_(inst_14119)){
var statearr_14142_14168 = state_14132__$1;
(statearr_14142_14168[(1)] = (13));

} else {
var statearr_14143_14169 = state_14132__$1;
(statearr_14143_14169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (2))){
var inst_14095 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14096 = (0);
var state_14132__$1 = (function (){var statearr_14144 = state_14132;
(statearr_14144[(7)] = inst_14096);

(statearr_14144[(9)] = inst_14095);

return statearr_14144;
})();
var statearr_14145_14170 = state_14132__$1;
(statearr_14145_14170[(2)] = null);

(statearr_14145_14170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (11))){
var inst_14096 = (state_14132[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14132,(10),Object,null,(9));
var inst_14105 = chs__$1.call(null,inst_14096);
var inst_14106 = done.call(null,inst_14096);
var inst_14107 = cljs.core.async.take_BANG_.call(null,inst_14105,inst_14106);
var state_14132__$1 = state_14132;
var statearr_14146_14171 = state_14132__$1;
(statearr_14146_14171[(2)] = inst_14107);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (9))){
var inst_14096 = (state_14132[(7)]);
var inst_14109 = (state_14132[(2)]);
var inst_14110 = (inst_14096 + (1));
var inst_14096__$1 = inst_14110;
var state_14132__$1 = (function (){var statearr_14147 = state_14132;
(statearr_14147[(7)] = inst_14096__$1);

(statearr_14147[(10)] = inst_14109);

return statearr_14147;
})();
var statearr_14148_14172 = state_14132__$1;
(statearr_14148_14172[(2)] = null);

(statearr_14148_14172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (5))){
var inst_14116 = (state_14132[(2)]);
var state_14132__$1 = (function (){var statearr_14149 = state_14132;
(statearr_14149[(11)] = inst_14116);

return statearr_14149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14132__$1,(12),dchan);
} else {
if((state_val_14133 === (14))){
var inst_14118 = (state_14132[(8)]);
var inst_14123 = cljs.core.apply.call(null,f,inst_14118);
var state_14132__$1 = state_14132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14132__$1,(16),out,inst_14123);
} else {
if((state_val_14133 === (16))){
var inst_14125 = (state_14132[(2)]);
var state_14132__$1 = (function (){var statearr_14150 = state_14132;
(statearr_14150[(12)] = inst_14125);

return statearr_14150;
})();
var statearr_14151_14173 = state_14132__$1;
(statearr_14151_14173[(2)] = null);

(statearr_14151_14173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (10))){
var inst_14100 = (state_14132[(2)]);
var inst_14101 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14132__$1 = (function (){var statearr_14152 = state_14132;
(statearr_14152[(13)] = inst_14100);

return statearr_14152;
})();
var statearr_14153_14174 = state_14132__$1;
(statearr_14153_14174[(2)] = inst_14101);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14133 === (8))){
var inst_14114 = (state_14132[(2)]);
var state_14132__$1 = state_14132;
var statearr_14154_14175 = state_14132__$1;
(statearr_14154_14175[(2)] = inst_14114);

(statearr_14154_14175[(1)] = (5));


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
});})(c__12822__auto___14160,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12727__auto__,c__12822__auto___14160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14155[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14155[(1)] = (1));

return statearr_14155;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14132){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14156){if((e14156 instanceof Object)){
var ex__12731__auto__ = e14156;
var statearr_14157_14176 = state_14132;
(statearr_14157_14176[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14177 = state_14132;
state_14132 = G__14177;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14160,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12824__auto__ = (function (){var statearr_14158 = f__12823__auto__.call(null);
(statearr_14158[(6)] = c__12822__auto___14160);

return statearr_14158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14160,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14180 = arguments.length;
switch (G__14180) {
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
var c__12822__auto___14234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14234,out){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14234,out){
return (function (state_14212){
var state_val_14213 = (state_14212[(1)]);
if((state_val_14213 === (7))){
var inst_14191 = (state_14212[(7)]);
var inst_14192 = (state_14212[(8)]);
var inst_14191__$1 = (state_14212[(2)]);
var inst_14192__$1 = cljs.core.nth.call(null,inst_14191__$1,(0),null);
var inst_14193 = cljs.core.nth.call(null,inst_14191__$1,(1),null);
var inst_14194 = (inst_14192__$1 == null);
var state_14212__$1 = (function (){var statearr_14214 = state_14212;
(statearr_14214[(9)] = inst_14193);

(statearr_14214[(7)] = inst_14191__$1);

(statearr_14214[(8)] = inst_14192__$1);

return statearr_14214;
})();
if(cljs.core.truth_(inst_14194)){
var statearr_14215_14235 = state_14212__$1;
(statearr_14215_14235[(1)] = (8));

} else {
var statearr_14216_14236 = state_14212__$1;
(statearr_14216_14236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (1))){
var inst_14181 = cljs.core.vec.call(null,chs);
var inst_14182 = inst_14181;
var state_14212__$1 = (function (){var statearr_14217 = state_14212;
(statearr_14217[(10)] = inst_14182);

return statearr_14217;
})();
var statearr_14218_14237 = state_14212__$1;
(statearr_14218_14237[(2)] = null);

(statearr_14218_14237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (4))){
var inst_14182 = (state_14212[(10)]);
var state_14212__$1 = state_14212;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14212__$1,(7),inst_14182);
} else {
if((state_val_14213 === (6))){
var inst_14208 = (state_14212[(2)]);
var state_14212__$1 = state_14212;
var statearr_14219_14238 = state_14212__$1;
(statearr_14219_14238[(2)] = inst_14208);

(statearr_14219_14238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (3))){
var inst_14210 = (state_14212[(2)]);
var state_14212__$1 = state_14212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14212__$1,inst_14210);
} else {
if((state_val_14213 === (2))){
var inst_14182 = (state_14212[(10)]);
var inst_14184 = cljs.core.count.call(null,inst_14182);
var inst_14185 = (inst_14184 > (0));
var state_14212__$1 = state_14212;
if(cljs.core.truth_(inst_14185)){
var statearr_14221_14239 = state_14212__$1;
(statearr_14221_14239[(1)] = (4));

} else {
var statearr_14222_14240 = state_14212__$1;
(statearr_14222_14240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (11))){
var inst_14182 = (state_14212[(10)]);
var inst_14201 = (state_14212[(2)]);
var tmp14220 = inst_14182;
var inst_14182__$1 = tmp14220;
var state_14212__$1 = (function (){var statearr_14223 = state_14212;
(statearr_14223[(11)] = inst_14201);

(statearr_14223[(10)] = inst_14182__$1);

return statearr_14223;
})();
var statearr_14224_14241 = state_14212__$1;
(statearr_14224_14241[(2)] = null);

(statearr_14224_14241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (9))){
var inst_14192 = (state_14212[(8)]);
var state_14212__$1 = state_14212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14212__$1,(11),out,inst_14192);
} else {
if((state_val_14213 === (5))){
var inst_14206 = cljs.core.async.close_BANG_.call(null,out);
var state_14212__$1 = state_14212;
var statearr_14225_14242 = state_14212__$1;
(statearr_14225_14242[(2)] = inst_14206);

(statearr_14225_14242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (10))){
var inst_14204 = (state_14212[(2)]);
var state_14212__$1 = state_14212;
var statearr_14226_14243 = state_14212__$1;
(statearr_14226_14243[(2)] = inst_14204);

(statearr_14226_14243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (8))){
var inst_14193 = (state_14212[(9)]);
var inst_14191 = (state_14212[(7)]);
var inst_14192 = (state_14212[(8)]);
var inst_14182 = (state_14212[(10)]);
var inst_14196 = (function (){var cs = inst_14182;
var vec__14187 = inst_14191;
var v = inst_14192;
var c = inst_14193;
return ((function (cs,vec__14187,v,c,inst_14193,inst_14191,inst_14192,inst_14182,state_val_14213,c__12822__auto___14234,out){
return (function (p1__14178_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14178_SHARP_);
});
;})(cs,vec__14187,v,c,inst_14193,inst_14191,inst_14192,inst_14182,state_val_14213,c__12822__auto___14234,out))
})();
var inst_14197 = cljs.core.filterv.call(null,inst_14196,inst_14182);
var inst_14182__$1 = inst_14197;
var state_14212__$1 = (function (){var statearr_14227 = state_14212;
(statearr_14227[(10)] = inst_14182__$1);

return statearr_14227;
})();
var statearr_14228_14244 = state_14212__$1;
(statearr_14228_14244[(2)] = null);

(statearr_14228_14244[(1)] = (2));


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
});})(c__12822__auto___14234,out))
;
return ((function (switch__12727__auto__,c__12822__auto___14234,out){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14229[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14229[(1)] = (1));

return statearr_14229;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14212){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14230){if((e14230 instanceof Object)){
var ex__12731__auto__ = e14230;
var statearr_14231_14245 = state_14212;
(statearr_14231_14245[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14246 = state_14212;
state_14212 = G__14246;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14234,out))
})();
var state__12824__auto__ = (function (){var statearr_14232 = f__12823__auto__.call(null);
(statearr_14232[(6)] = c__12822__auto___14234);

return statearr_14232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14234,out))
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
var G__14248 = arguments.length;
switch (G__14248) {
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
var c__12822__auto___14293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14293,out){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14293,out){
return (function (state_14272){
var state_val_14273 = (state_14272[(1)]);
if((state_val_14273 === (7))){
var inst_14254 = (state_14272[(7)]);
var inst_14254__$1 = (state_14272[(2)]);
var inst_14255 = (inst_14254__$1 == null);
var inst_14256 = cljs.core.not.call(null,inst_14255);
var state_14272__$1 = (function (){var statearr_14274 = state_14272;
(statearr_14274[(7)] = inst_14254__$1);

return statearr_14274;
})();
if(inst_14256){
var statearr_14275_14294 = state_14272__$1;
(statearr_14275_14294[(1)] = (8));

} else {
var statearr_14276_14295 = state_14272__$1;
(statearr_14276_14295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (1))){
var inst_14249 = (0);
var state_14272__$1 = (function (){var statearr_14277 = state_14272;
(statearr_14277[(8)] = inst_14249);

return statearr_14277;
})();
var statearr_14278_14296 = state_14272__$1;
(statearr_14278_14296[(2)] = null);

(statearr_14278_14296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (4))){
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14272__$1,(7),ch);
} else {
if((state_val_14273 === (6))){
var inst_14267 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14279_14297 = state_14272__$1;
(statearr_14279_14297[(2)] = inst_14267);

(statearr_14279_14297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (3))){
var inst_14269 = (state_14272[(2)]);
var inst_14270 = cljs.core.async.close_BANG_.call(null,out);
var state_14272__$1 = (function (){var statearr_14280 = state_14272;
(statearr_14280[(9)] = inst_14269);

return statearr_14280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14272__$1,inst_14270);
} else {
if((state_val_14273 === (2))){
var inst_14249 = (state_14272[(8)]);
var inst_14251 = (inst_14249 < n);
var state_14272__$1 = state_14272;
if(cljs.core.truth_(inst_14251)){
var statearr_14281_14298 = state_14272__$1;
(statearr_14281_14298[(1)] = (4));

} else {
var statearr_14282_14299 = state_14272__$1;
(statearr_14282_14299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (11))){
var inst_14249 = (state_14272[(8)]);
var inst_14259 = (state_14272[(2)]);
var inst_14260 = (inst_14249 + (1));
var inst_14249__$1 = inst_14260;
var state_14272__$1 = (function (){var statearr_14283 = state_14272;
(statearr_14283[(10)] = inst_14259);

(statearr_14283[(8)] = inst_14249__$1);

return statearr_14283;
})();
var statearr_14284_14300 = state_14272__$1;
(statearr_14284_14300[(2)] = null);

(statearr_14284_14300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (9))){
var state_14272__$1 = state_14272;
var statearr_14285_14301 = state_14272__$1;
(statearr_14285_14301[(2)] = null);

(statearr_14285_14301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (5))){
var state_14272__$1 = state_14272;
var statearr_14286_14302 = state_14272__$1;
(statearr_14286_14302[(2)] = null);

(statearr_14286_14302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (10))){
var inst_14264 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14287_14303 = state_14272__$1;
(statearr_14287_14303[(2)] = inst_14264);

(statearr_14287_14303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (8))){
var inst_14254 = (state_14272[(7)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14272__$1,(11),out,inst_14254);
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
});})(c__12822__auto___14293,out))
;
return ((function (switch__12727__auto__,c__12822__auto___14293,out){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14288[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14288[(1)] = (1));

return statearr_14288;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14272){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14289){if((e14289 instanceof Object)){
var ex__12731__auto__ = e14289;
var statearr_14290_14304 = state_14272;
(statearr_14290_14304[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14305 = state_14272;
state_14272 = G__14305;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14293,out))
})();
var state__12824__auto__ = (function (){var statearr_14291 = f__12823__auto__.call(null);
(statearr_14291[(6)] = c__12822__auto___14293);

return statearr_14291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14293,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14307 = (function (f,ch,meta14308){
this.f = f;
this.ch = ch;
this.meta14308 = meta14308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14309,meta14308__$1){
var self__ = this;
var _14309__$1 = this;
return (new cljs.core.async.t_cljs$core$async14307(self__.f,self__.ch,meta14308__$1));
});

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14309){
var self__ = this;
var _14309__$1 = this;
return self__.meta14308;
});

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14310 = (function (f,ch,meta14308,_,fn1,meta14311){
this.f = f;
this.ch = ch;
this.meta14308 = meta14308;
this._ = _;
this.fn1 = fn1;
this.meta14311 = meta14311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14312,meta14311__$1){
var self__ = this;
var _14312__$1 = this;
return (new cljs.core.async.t_cljs$core$async14310(self__.f,self__.ch,self__.meta14308,self__._,self__.fn1,meta14311__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14312){
var self__ = this;
var _14312__$1 = this;
return self__.meta14311;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14306_SHARP_){
return f1.call(null,(((p1__14306_SHARP_ == null))?null:self__.f.call(null,p1__14306_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14310.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14308","meta14308",541052271,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14307","cljs.core.async/t_cljs$core$async14307",282188670,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14311","meta14311",-760746074,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14310";

cljs.core.async.t_cljs$core$async14310.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14310");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14310.
 */
cljs.core.async.__GT_t_cljs$core$async14310 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14310(f__$1,ch__$1,meta14308__$1,___$2,fn1__$1,meta14311){
return (new cljs.core.async.t_cljs$core$async14310(f__$1,ch__$1,meta14308__$1,___$2,fn1__$1,meta14311));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14310(self__.f,self__.ch,self__.meta14308,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14308","meta14308",541052271,null)], null);
});

cljs.core.async.t_cljs$core$async14307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14307";

cljs.core.async.t_cljs$core$async14307.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14307");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14307.
 */
cljs.core.async.__GT_t_cljs$core$async14307 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14307(f__$1,ch__$1,meta14308){
return (new cljs.core.async.t_cljs$core$async14307(f__$1,ch__$1,meta14308));
});

}

return (new cljs.core.async.t_cljs$core$async14307(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14313 = (function (f,ch,meta14314){
this.f = f;
this.ch = ch;
this.meta14314 = meta14314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14315,meta14314__$1){
var self__ = this;
var _14315__$1 = this;
return (new cljs.core.async.t_cljs$core$async14313(self__.f,self__.ch,meta14314__$1));
});

cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14315){
var self__ = this;
var _14315__$1 = this;
return self__.meta14314;
});

cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14314","meta14314",-1951658608,null)], null);
});

cljs.core.async.t_cljs$core$async14313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14313";

cljs.core.async.t_cljs$core$async14313.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14313");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14313.
 */
cljs.core.async.__GT_t_cljs$core$async14313 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14313(f__$1,ch__$1,meta14314){
return (new cljs.core.async.t_cljs$core$async14313(f__$1,ch__$1,meta14314));
});

}

return (new cljs.core.async.t_cljs$core$async14313(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14316 = (function (p,ch,meta14317){
this.p = p;
this.ch = ch;
this.meta14317 = meta14317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14318,meta14317__$1){
var self__ = this;
var _14318__$1 = this;
return (new cljs.core.async.t_cljs$core$async14316(self__.p,self__.ch,meta14317__$1));
});

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14318){
var self__ = this;
var _14318__$1 = this;
return self__.meta14317;
});

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14317","meta14317",1762759479,null)], null);
});

cljs.core.async.t_cljs$core$async14316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14316";

cljs.core.async.t_cljs$core$async14316.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14316");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14316.
 */
cljs.core.async.__GT_t_cljs$core$async14316 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14316(p__$1,ch__$1,meta14317){
return (new cljs.core.async.t_cljs$core$async14316(p__$1,ch__$1,meta14317));
});

}

return (new cljs.core.async.t_cljs$core$async14316(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14320 = arguments.length;
switch (G__14320) {
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
var c__12822__auto___14360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14360,out){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14360,out){
return (function (state_14341){
var state_val_14342 = (state_14341[(1)]);
if((state_val_14342 === (7))){
var inst_14337 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14343_14361 = state_14341__$1;
(statearr_14343_14361[(2)] = inst_14337);

(statearr_14343_14361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (1))){
var state_14341__$1 = state_14341;
var statearr_14344_14362 = state_14341__$1;
(statearr_14344_14362[(2)] = null);

(statearr_14344_14362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (4))){
var inst_14323 = (state_14341[(7)]);
var inst_14323__$1 = (state_14341[(2)]);
var inst_14324 = (inst_14323__$1 == null);
var state_14341__$1 = (function (){var statearr_14345 = state_14341;
(statearr_14345[(7)] = inst_14323__$1);

return statearr_14345;
})();
if(cljs.core.truth_(inst_14324)){
var statearr_14346_14363 = state_14341__$1;
(statearr_14346_14363[(1)] = (5));

} else {
var statearr_14347_14364 = state_14341__$1;
(statearr_14347_14364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (6))){
var inst_14323 = (state_14341[(7)]);
var inst_14328 = p.call(null,inst_14323);
var state_14341__$1 = state_14341;
if(cljs.core.truth_(inst_14328)){
var statearr_14348_14365 = state_14341__$1;
(statearr_14348_14365[(1)] = (8));

} else {
var statearr_14349_14366 = state_14341__$1;
(statearr_14349_14366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (3))){
var inst_14339 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14341__$1,inst_14339);
} else {
if((state_val_14342 === (2))){
var state_14341__$1 = state_14341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14341__$1,(4),ch);
} else {
if((state_val_14342 === (11))){
var inst_14331 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14350_14367 = state_14341__$1;
(statearr_14350_14367[(2)] = inst_14331);

(statearr_14350_14367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (9))){
var state_14341__$1 = state_14341;
var statearr_14351_14368 = state_14341__$1;
(statearr_14351_14368[(2)] = null);

(statearr_14351_14368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (5))){
var inst_14326 = cljs.core.async.close_BANG_.call(null,out);
var state_14341__$1 = state_14341;
var statearr_14352_14369 = state_14341__$1;
(statearr_14352_14369[(2)] = inst_14326);

(statearr_14352_14369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (10))){
var inst_14334 = (state_14341[(2)]);
var state_14341__$1 = (function (){var statearr_14353 = state_14341;
(statearr_14353[(8)] = inst_14334);

return statearr_14353;
})();
var statearr_14354_14370 = state_14341__$1;
(statearr_14354_14370[(2)] = null);

(statearr_14354_14370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (8))){
var inst_14323 = (state_14341[(7)]);
var state_14341__$1 = state_14341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14341__$1,(11),out,inst_14323);
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
});})(c__12822__auto___14360,out))
;
return ((function (switch__12727__auto__,c__12822__auto___14360,out){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14355 = [null,null,null,null,null,null,null,null,null];
(statearr_14355[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14355[(1)] = (1));

return statearr_14355;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14341){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14356){if((e14356 instanceof Object)){
var ex__12731__auto__ = e14356;
var statearr_14357_14371 = state_14341;
(statearr_14357_14371[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14372 = state_14341;
state_14341 = G__14372;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14360,out))
})();
var state__12824__auto__ = (function (){var statearr_14358 = f__12823__auto__.call(null);
(statearr_14358[(6)] = c__12822__auto___14360);

return statearr_14358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14360,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14374 = arguments.length;
switch (G__14374) {
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
var c__12822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto__){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto__){
return (function (state_14437){
var state_val_14438 = (state_14437[(1)]);
if((state_val_14438 === (7))){
var inst_14433 = (state_14437[(2)]);
var state_14437__$1 = state_14437;
var statearr_14439_14477 = state_14437__$1;
(statearr_14439_14477[(2)] = inst_14433);

(statearr_14439_14477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (20))){
var inst_14403 = (state_14437[(7)]);
var inst_14414 = (state_14437[(2)]);
var inst_14415 = cljs.core.next.call(null,inst_14403);
var inst_14389 = inst_14415;
var inst_14390 = null;
var inst_14391 = (0);
var inst_14392 = (0);
var state_14437__$1 = (function (){var statearr_14440 = state_14437;
(statearr_14440[(8)] = inst_14392);

(statearr_14440[(9)] = inst_14391);

(statearr_14440[(10)] = inst_14414);

(statearr_14440[(11)] = inst_14390);

(statearr_14440[(12)] = inst_14389);

return statearr_14440;
})();
var statearr_14441_14478 = state_14437__$1;
(statearr_14441_14478[(2)] = null);

(statearr_14441_14478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (1))){
var state_14437__$1 = state_14437;
var statearr_14442_14479 = state_14437__$1;
(statearr_14442_14479[(2)] = null);

(statearr_14442_14479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (4))){
var inst_14378 = (state_14437[(13)]);
var inst_14378__$1 = (state_14437[(2)]);
var inst_14379 = (inst_14378__$1 == null);
var state_14437__$1 = (function (){var statearr_14443 = state_14437;
(statearr_14443[(13)] = inst_14378__$1);

return statearr_14443;
})();
if(cljs.core.truth_(inst_14379)){
var statearr_14444_14480 = state_14437__$1;
(statearr_14444_14480[(1)] = (5));

} else {
var statearr_14445_14481 = state_14437__$1;
(statearr_14445_14481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (15))){
var state_14437__$1 = state_14437;
var statearr_14449_14482 = state_14437__$1;
(statearr_14449_14482[(2)] = null);

(statearr_14449_14482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (21))){
var state_14437__$1 = state_14437;
var statearr_14450_14483 = state_14437__$1;
(statearr_14450_14483[(2)] = null);

(statearr_14450_14483[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (13))){
var inst_14392 = (state_14437[(8)]);
var inst_14391 = (state_14437[(9)]);
var inst_14390 = (state_14437[(11)]);
var inst_14389 = (state_14437[(12)]);
var inst_14399 = (state_14437[(2)]);
var inst_14400 = (inst_14392 + (1));
var tmp14446 = inst_14391;
var tmp14447 = inst_14390;
var tmp14448 = inst_14389;
var inst_14389__$1 = tmp14448;
var inst_14390__$1 = tmp14447;
var inst_14391__$1 = tmp14446;
var inst_14392__$1 = inst_14400;
var state_14437__$1 = (function (){var statearr_14451 = state_14437;
(statearr_14451[(8)] = inst_14392__$1);

(statearr_14451[(9)] = inst_14391__$1);

(statearr_14451[(14)] = inst_14399);

(statearr_14451[(11)] = inst_14390__$1);

(statearr_14451[(12)] = inst_14389__$1);

return statearr_14451;
})();
var statearr_14452_14484 = state_14437__$1;
(statearr_14452_14484[(2)] = null);

(statearr_14452_14484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (22))){
var state_14437__$1 = state_14437;
var statearr_14453_14485 = state_14437__$1;
(statearr_14453_14485[(2)] = null);

(statearr_14453_14485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (6))){
var inst_14378 = (state_14437[(13)]);
var inst_14387 = f.call(null,inst_14378);
var inst_14388 = cljs.core.seq.call(null,inst_14387);
var inst_14389 = inst_14388;
var inst_14390 = null;
var inst_14391 = (0);
var inst_14392 = (0);
var state_14437__$1 = (function (){var statearr_14454 = state_14437;
(statearr_14454[(8)] = inst_14392);

(statearr_14454[(9)] = inst_14391);

(statearr_14454[(11)] = inst_14390);

(statearr_14454[(12)] = inst_14389);

return statearr_14454;
})();
var statearr_14455_14486 = state_14437__$1;
(statearr_14455_14486[(2)] = null);

(statearr_14455_14486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (17))){
var inst_14403 = (state_14437[(7)]);
var inst_14407 = cljs.core.chunk_first.call(null,inst_14403);
var inst_14408 = cljs.core.chunk_rest.call(null,inst_14403);
var inst_14409 = cljs.core.count.call(null,inst_14407);
var inst_14389 = inst_14408;
var inst_14390 = inst_14407;
var inst_14391 = inst_14409;
var inst_14392 = (0);
var state_14437__$1 = (function (){var statearr_14456 = state_14437;
(statearr_14456[(8)] = inst_14392);

(statearr_14456[(9)] = inst_14391);

(statearr_14456[(11)] = inst_14390);

(statearr_14456[(12)] = inst_14389);

return statearr_14456;
})();
var statearr_14457_14487 = state_14437__$1;
(statearr_14457_14487[(2)] = null);

(statearr_14457_14487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (3))){
var inst_14435 = (state_14437[(2)]);
var state_14437__$1 = state_14437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14437__$1,inst_14435);
} else {
if((state_val_14438 === (12))){
var inst_14423 = (state_14437[(2)]);
var state_14437__$1 = state_14437;
var statearr_14458_14488 = state_14437__$1;
(statearr_14458_14488[(2)] = inst_14423);

(statearr_14458_14488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (2))){
var state_14437__$1 = state_14437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14437__$1,(4),in$);
} else {
if((state_val_14438 === (23))){
var inst_14431 = (state_14437[(2)]);
var state_14437__$1 = state_14437;
var statearr_14459_14489 = state_14437__$1;
(statearr_14459_14489[(2)] = inst_14431);

(statearr_14459_14489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (19))){
var inst_14418 = (state_14437[(2)]);
var state_14437__$1 = state_14437;
var statearr_14460_14490 = state_14437__$1;
(statearr_14460_14490[(2)] = inst_14418);

(statearr_14460_14490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (11))){
var inst_14389 = (state_14437[(12)]);
var inst_14403 = (state_14437[(7)]);
var inst_14403__$1 = cljs.core.seq.call(null,inst_14389);
var state_14437__$1 = (function (){var statearr_14461 = state_14437;
(statearr_14461[(7)] = inst_14403__$1);

return statearr_14461;
})();
if(inst_14403__$1){
var statearr_14462_14491 = state_14437__$1;
(statearr_14462_14491[(1)] = (14));

} else {
var statearr_14463_14492 = state_14437__$1;
(statearr_14463_14492[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (9))){
var inst_14425 = (state_14437[(2)]);
var inst_14426 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14437__$1 = (function (){var statearr_14464 = state_14437;
(statearr_14464[(15)] = inst_14425);

return statearr_14464;
})();
if(cljs.core.truth_(inst_14426)){
var statearr_14465_14493 = state_14437__$1;
(statearr_14465_14493[(1)] = (21));

} else {
var statearr_14466_14494 = state_14437__$1;
(statearr_14466_14494[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (5))){
var inst_14381 = cljs.core.async.close_BANG_.call(null,out);
var state_14437__$1 = state_14437;
var statearr_14467_14495 = state_14437__$1;
(statearr_14467_14495[(2)] = inst_14381);

(statearr_14467_14495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (14))){
var inst_14403 = (state_14437[(7)]);
var inst_14405 = cljs.core.chunked_seq_QMARK_.call(null,inst_14403);
var state_14437__$1 = state_14437;
if(inst_14405){
var statearr_14468_14496 = state_14437__$1;
(statearr_14468_14496[(1)] = (17));

} else {
var statearr_14469_14497 = state_14437__$1;
(statearr_14469_14497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (16))){
var inst_14421 = (state_14437[(2)]);
var state_14437__$1 = state_14437;
var statearr_14470_14498 = state_14437__$1;
(statearr_14470_14498[(2)] = inst_14421);

(statearr_14470_14498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14438 === (10))){
var inst_14392 = (state_14437[(8)]);
var inst_14390 = (state_14437[(11)]);
var inst_14397 = cljs.core._nth.call(null,inst_14390,inst_14392);
var state_14437__$1 = state_14437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14437__$1,(13),out,inst_14397);
} else {
if((state_val_14438 === (18))){
var inst_14403 = (state_14437[(7)]);
var inst_14412 = cljs.core.first.call(null,inst_14403);
var state_14437__$1 = state_14437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14437__$1,(20),out,inst_14412);
} else {
if((state_val_14438 === (8))){
var inst_14392 = (state_14437[(8)]);
var inst_14391 = (state_14437[(9)]);
var inst_14394 = (inst_14392 < inst_14391);
var inst_14395 = inst_14394;
var state_14437__$1 = state_14437;
if(cljs.core.truth_(inst_14395)){
var statearr_14471_14499 = state_14437__$1;
(statearr_14471_14499[(1)] = (10));

} else {
var statearr_14472_14500 = state_14437__$1;
(statearr_14472_14500[(1)] = (11));

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
});})(c__12822__auto__))
;
return ((function (switch__12727__auto__,c__12822__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12728__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12728__auto____0 = (function (){
var statearr_14473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12728__auto__);

(statearr_14473[(1)] = (1));

return statearr_14473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12728__auto____1 = (function (state_14437){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14474){if((e14474 instanceof Object)){
var ex__12731__auto__ = e14474;
var statearr_14475_14501 = state_14437;
(statearr_14475_14501[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14502 = state_14437;
state_14437 = G__14502;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12728__auto__ = function(state_14437){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12728__auto____1.call(this,state_14437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12728__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12728__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto__))
})();
var state__12824__auto__ = (function (){var statearr_14476 = f__12823__auto__.call(null);
(statearr_14476[(6)] = c__12822__auto__);

return statearr_14476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto__))
);

return c__12822__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14504 = arguments.length;
switch (G__14504) {
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
var G__14507 = arguments.length;
switch (G__14507) {
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
var G__14510 = arguments.length;
switch (G__14510) {
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
var c__12822__auto___14557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14557,out){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14557,out){
return (function (state_14534){
var state_val_14535 = (state_14534[(1)]);
if((state_val_14535 === (7))){
var inst_14529 = (state_14534[(2)]);
var state_14534__$1 = state_14534;
var statearr_14536_14558 = state_14534__$1;
(statearr_14536_14558[(2)] = inst_14529);

(statearr_14536_14558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14535 === (1))){
var inst_14511 = null;
var state_14534__$1 = (function (){var statearr_14537 = state_14534;
(statearr_14537[(7)] = inst_14511);

return statearr_14537;
})();
var statearr_14538_14559 = state_14534__$1;
(statearr_14538_14559[(2)] = null);

(statearr_14538_14559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14535 === (4))){
var inst_14514 = (state_14534[(8)]);
var inst_14514__$1 = (state_14534[(2)]);
var inst_14515 = (inst_14514__$1 == null);
var inst_14516 = cljs.core.not.call(null,inst_14515);
var state_14534__$1 = (function (){var statearr_14539 = state_14534;
(statearr_14539[(8)] = inst_14514__$1);

return statearr_14539;
})();
if(inst_14516){
var statearr_14540_14560 = state_14534__$1;
(statearr_14540_14560[(1)] = (5));

} else {
var statearr_14541_14561 = state_14534__$1;
(statearr_14541_14561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14535 === (6))){
var state_14534__$1 = state_14534;
var statearr_14542_14562 = state_14534__$1;
(statearr_14542_14562[(2)] = null);

(statearr_14542_14562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14535 === (3))){
var inst_14531 = (state_14534[(2)]);
var inst_14532 = cljs.core.async.close_BANG_.call(null,out);
var state_14534__$1 = (function (){var statearr_14543 = state_14534;
(statearr_14543[(9)] = inst_14531);

return statearr_14543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14534__$1,inst_14532);
} else {
if((state_val_14535 === (2))){
var state_14534__$1 = state_14534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14534__$1,(4),ch);
} else {
if((state_val_14535 === (11))){
var inst_14514 = (state_14534[(8)]);
var inst_14523 = (state_14534[(2)]);
var inst_14511 = inst_14514;
var state_14534__$1 = (function (){var statearr_14544 = state_14534;
(statearr_14544[(10)] = inst_14523);

(statearr_14544[(7)] = inst_14511);

return statearr_14544;
})();
var statearr_14545_14563 = state_14534__$1;
(statearr_14545_14563[(2)] = null);

(statearr_14545_14563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14535 === (9))){
var inst_14514 = (state_14534[(8)]);
var state_14534__$1 = state_14534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14534__$1,(11),out,inst_14514);
} else {
if((state_val_14535 === (5))){
var inst_14514 = (state_14534[(8)]);
var inst_14511 = (state_14534[(7)]);
var inst_14518 = cljs.core._EQ_.call(null,inst_14514,inst_14511);
var state_14534__$1 = state_14534;
if(inst_14518){
var statearr_14547_14564 = state_14534__$1;
(statearr_14547_14564[(1)] = (8));

} else {
var statearr_14548_14565 = state_14534__$1;
(statearr_14548_14565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14535 === (10))){
var inst_14526 = (state_14534[(2)]);
var state_14534__$1 = state_14534;
var statearr_14549_14566 = state_14534__$1;
(statearr_14549_14566[(2)] = inst_14526);

(statearr_14549_14566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14535 === (8))){
var inst_14511 = (state_14534[(7)]);
var tmp14546 = inst_14511;
var inst_14511__$1 = tmp14546;
var state_14534__$1 = (function (){var statearr_14550 = state_14534;
(statearr_14550[(7)] = inst_14511__$1);

return statearr_14550;
})();
var statearr_14551_14567 = state_14534__$1;
(statearr_14551_14567[(2)] = null);

(statearr_14551_14567[(1)] = (2));


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
});})(c__12822__auto___14557,out))
;
return ((function (switch__12727__auto__,c__12822__auto___14557,out){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14552[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14552[(1)] = (1));

return statearr_14552;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14534){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14553){if((e14553 instanceof Object)){
var ex__12731__auto__ = e14553;
var statearr_14554_14568 = state_14534;
(statearr_14554_14568[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14569 = state_14534;
state_14534 = G__14569;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14557,out))
})();
var state__12824__auto__ = (function (){var statearr_14555 = f__12823__auto__.call(null);
(statearr_14555[(6)] = c__12822__auto___14557);

return statearr_14555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14557,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14571 = arguments.length;
switch (G__14571) {
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
var c__12822__auto___14637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14637,out){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14637,out){
return (function (state_14609){
var state_val_14610 = (state_14609[(1)]);
if((state_val_14610 === (7))){
var inst_14605 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
var statearr_14611_14638 = state_14609__$1;
(statearr_14611_14638[(2)] = inst_14605);

(statearr_14611_14638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (1))){
var inst_14572 = (new Array(n));
var inst_14573 = inst_14572;
var inst_14574 = (0);
var state_14609__$1 = (function (){var statearr_14612 = state_14609;
(statearr_14612[(7)] = inst_14574);

(statearr_14612[(8)] = inst_14573);

return statearr_14612;
})();
var statearr_14613_14639 = state_14609__$1;
(statearr_14613_14639[(2)] = null);

(statearr_14613_14639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (4))){
var inst_14577 = (state_14609[(9)]);
var inst_14577__$1 = (state_14609[(2)]);
var inst_14578 = (inst_14577__$1 == null);
var inst_14579 = cljs.core.not.call(null,inst_14578);
var state_14609__$1 = (function (){var statearr_14614 = state_14609;
(statearr_14614[(9)] = inst_14577__$1);

return statearr_14614;
})();
if(inst_14579){
var statearr_14615_14640 = state_14609__$1;
(statearr_14615_14640[(1)] = (5));

} else {
var statearr_14616_14641 = state_14609__$1;
(statearr_14616_14641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (15))){
var inst_14599 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
var statearr_14617_14642 = state_14609__$1;
(statearr_14617_14642[(2)] = inst_14599);

(statearr_14617_14642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (13))){
var state_14609__$1 = state_14609;
var statearr_14618_14643 = state_14609__$1;
(statearr_14618_14643[(2)] = null);

(statearr_14618_14643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (6))){
var inst_14574 = (state_14609[(7)]);
var inst_14595 = (inst_14574 > (0));
var state_14609__$1 = state_14609;
if(cljs.core.truth_(inst_14595)){
var statearr_14619_14644 = state_14609__$1;
(statearr_14619_14644[(1)] = (12));

} else {
var statearr_14620_14645 = state_14609__$1;
(statearr_14620_14645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (3))){
var inst_14607 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14609__$1,inst_14607);
} else {
if((state_val_14610 === (12))){
var inst_14573 = (state_14609[(8)]);
var inst_14597 = cljs.core.vec.call(null,inst_14573);
var state_14609__$1 = state_14609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14609__$1,(15),out,inst_14597);
} else {
if((state_val_14610 === (2))){
var state_14609__$1 = state_14609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14609__$1,(4),ch);
} else {
if((state_val_14610 === (11))){
var inst_14589 = (state_14609[(2)]);
var inst_14590 = (new Array(n));
var inst_14573 = inst_14590;
var inst_14574 = (0);
var state_14609__$1 = (function (){var statearr_14621 = state_14609;
(statearr_14621[(10)] = inst_14589);

(statearr_14621[(7)] = inst_14574);

(statearr_14621[(8)] = inst_14573);

return statearr_14621;
})();
var statearr_14622_14646 = state_14609__$1;
(statearr_14622_14646[(2)] = null);

(statearr_14622_14646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (9))){
var inst_14573 = (state_14609[(8)]);
var inst_14587 = cljs.core.vec.call(null,inst_14573);
var state_14609__$1 = state_14609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14609__$1,(11),out,inst_14587);
} else {
if((state_val_14610 === (5))){
var inst_14574 = (state_14609[(7)]);
var inst_14577 = (state_14609[(9)]);
var inst_14582 = (state_14609[(11)]);
var inst_14573 = (state_14609[(8)]);
var inst_14581 = (inst_14573[inst_14574] = inst_14577);
var inst_14582__$1 = (inst_14574 + (1));
var inst_14583 = (inst_14582__$1 < n);
var state_14609__$1 = (function (){var statearr_14623 = state_14609;
(statearr_14623[(12)] = inst_14581);

(statearr_14623[(11)] = inst_14582__$1);

return statearr_14623;
})();
if(cljs.core.truth_(inst_14583)){
var statearr_14624_14647 = state_14609__$1;
(statearr_14624_14647[(1)] = (8));

} else {
var statearr_14625_14648 = state_14609__$1;
(statearr_14625_14648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (14))){
var inst_14602 = (state_14609[(2)]);
var inst_14603 = cljs.core.async.close_BANG_.call(null,out);
var state_14609__$1 = (function (){var statearr_14627 = state_14609;
(statearr_14627[(13)] = inst_14602);

return statearr_14627;
})();
var statearr_14628_14649 = state_14609__$1;
(statearr_14628_14649[(2)] = inst_14603);

(statearr_14628_14649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (10))){
var inst_14593 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
var statearr_14629_14650 = state_14609__$1;
(statearr_14629_14650[(2)] = inst_14593);

(statearr_14629_14650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14610 === (8))){
var inst_14582 = (state_14609[(11)]);
var inst_14573 = (state_14609[(8)]);
var tmp14626 = inst_14573;
var inst_14573__$1 = tmp14626;
var inst_14574 = inst_14582;
var state_14609__$1 = (function (){var statearr_14630 = state_14609;
(statearr_14630[(7)] = inst_14574);

(statearr_14630[(8)] = inst_14573__$1);

return statearr_14630;
})();
var statearr_14631_14651 = state_14609__$1;
(statearr_14631_14651[(2)] = null);

(statearr_14631_14651[(1)] = (2));


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
});})(c__12822__auto___14637,out))
;
return ((function (switch__12727__auto__,c__12822__auto___14637,out){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14632[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14632[(1)] = (1));

return statearr_14632;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14609){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14633){if((e14633 instanceof Object)){
var ex__12731__auto__ = e14633;
var statearr_14634_14652 = state_14609;
(statearr_14634_14652[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14653 = state_14609;
state_14609 = G__14653;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14637,out))
})();
var state__12824__auto__ = (function (){var statearr_14635 = f__12823__auto__.call(null);
(statearr_14635[(6)] = c__12822__auto___14637);

return statearr_14635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14637,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14655 = arguments.length;
switch (G__14655) {
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
var c__12822__auto___14725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___14725,out){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___14725,out){
return (function (state_14697){
var state_val_14698 = (state_14697[(1)]);
if((state_val_14698 === (7))){
var inst_14693 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14699_14726 = state_14697__$1;
(statearr_14699_14726[(2)] = inst_14693);

(statearr_14699_14726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (1))){
var inst_14656 = [];
var inst_14657 = inst_14656;
var inst_14658 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14697__$1 = (function (){var statearr_14700 = state_14697;
(statearr_14700[(7)] = inst_14658);

(statearr_14700[(8)] = inst_14657);

return statearr_14700;
})();
var statearr_14701_14727 = state_14697__$1;
(statearr_14701_14727[(2)] = null);

(statearr_14701_14727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (4))){
var inst_14661 = (state_14697[(9)]);
var inst_14661__$1 = (state_14697[(2)]);
var inst_14662 = (inst_14661__$1 == null);
var inst_14663 = cljs.core.not.call(null,inst_14662);
var state_14697__$1 = (function (){var statearr_14702 = state_14697;
(statearr_14702[(9)] = inst_14661__$1);

return statearr_14702;
})();
if(inst_14663){
var statearr_14703_14728 = state_14697__$1;
(statearr_14703_14728[(1)] = (5));

} else {
var statearr_14704_14729 = state_14697__$1;
(statearr_14704_14729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (15))){
var inst_14687 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14705_14730 = state_14697__$1;
(statearr_14705_14730[(2)] = inst_14687);

(statearr_14705_14730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (13))){
var state_14697__$1 = state_14697;
var statearr_14706_14731 = state_14697__$1;
(statearr_14706_14731[(2)] = null);

(statearr_14706_14731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (6))){
var inst_14657 = (state_14697[(8)]);
var inst_14682 = inst_14657.length;
var inst_14683 = (inst_14682 > (0));
var state_14697__$1 = state_14697;
if(cljs.core.truth_(inst_14683)){
var statearr_14707_14732 = state_14697__$1;
(statearr_14707_14732[(1)] = (12));

} else {
var statearr_14708_14733 = state_14697__$1;
(statearr_14708_14733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (3))){
var inst_14695 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14697__$1,inst_14695);
} else {
if((state_val_14698 === (12))){
var inst_14657 = (state_14697[(8)]);
var inst_14685 = cljs.core.vec.call(null,inst_14657);
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14697__$1,(15),out,inst_14685);
} else {
if((state_val_14698 === (2))){
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14697__$1,(4),ch);
} else {
if((state_val_14698 === (11))){
var inst_14661 = (state_14697[(9)]);
var inst_14665 = (state_14697[(10)]);
var inst_14675 = (state_14697[(2)]);
var inst_14676 = [];
var inst_14677 = inst_14676.push(inst_14661);
var inst_14657 = inst_14676;
var inst_14658 = inst_14665;
var state_14697__$1 = (function (){var statearr_14709 = state_14697;
(statearr_14709[(11)] = inst_14675);

(statearr_14709[(7)] = inst_14658);

(statearr_14709[(12)] = inst_14677);

(statearr_14709[(8)] = inst_14657);

return statearr_14709;
})();
var statearr_14710_14734 = state_14697__$1;
(statearr_14710_14734[(2)] = null);

(statearr_14710_14734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (9))){
var inst_14657 = (state_14697[(8)]);
var inst_14673 = cljs.core.vec.call(null,inst_14657);
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14697__$1,(11),out,inst_14673);
} else {
if((state_val_14698 === (5))){
var inst_14661 = (state_14697[(9)]);
var inst_14658 = (state_14697[(7)]);
var inst_14665 = (state_14697[(10)]);
var inst_14665__$1 = f.call(null,inst_14661);
var inst_14666 = cljs.core._EQ_.call(null,inst_14665__$1,inst_14658);
var inst_14667 = cljs.core.keyword_identical_QMARK_.call(null,inst_14658,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14668 = ((inst_14666) || (inst_14667));
var state_14697__$1 = (function (){var statearr_14711 = state_14697;
(statearr_14711[(10)] = inst_14665__$1);

return statearr_14711;
})();
if(cljs.core.truth_(inst_14668)){
var statearr_14712_14735 = state_14697__$1;
(statearr_14712_14735[(1)] = (8));

} else {
var statearr_14713_14736 = state_14697__$1;
(statearr_14713_14736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (14))){
var inst_14690 = (state_14697[(2)]);
var inst_14691 = cljs.core.async.close_BANG_.call(null,out);
var state_14697__$1 = (function (){var statearr_14715 = state_14697;
(statearr_14715[(13)] = inst_14690);

return statearr_14715;
})();
var statearr_14716_14737 = state_14697__$1;
(statearr_14716_14737[(2)] = inst_14691);

(statearr_14716_14737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (10))){
var inst_14680 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14717_14738 = state_14697__$1;
(statearr_14717_14738[(2)] = inst_14680);

(statearr_14717_14738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (8))){
var inst_14661 = (state_14697[(9)]);
var inst_14657 = (state_14697[(8)]);
var inst_14665 = (state_14697[(10)]);
var inst_14670 = inst_14657.push(inst_14661);
var tmp14714 = inst_14657;
var inst_14657__$1 = tmp14714;
var inst_14658 = inst_14665;
var state_14697__$1 = (function (){var statearr_14718 = state_14697;
(statearr_14718[(7)] = inst_14658);

(statearr_14718[(14)] = inst_14670);

(statearr_14718[(8)] = inst_14657__$1);

return statearr_14718;
})();
var statearr_14719_14739 = state_14697__$1;
(statearr_14719_14739[(2)] = null);

(statearr_14719_14739[(1)] = (2));


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
});})(c__12822__auto___14725,out))
;
return ((function (switch__12727__auto__,c__12822__auto___14725,out){
return (function() {
var cljs$core$async$state_machine__12728__auto__ = null;
var cljs$core$async$state_machine__12728__auto____0 = (function (){
var statearr_14720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14720[(0)] = cljs$core$async$state_machine__12728__auto__);

(statearr_14720[(1)] = (1));

return statearr_14720;
});
var cljs$core$async$state_machine__12728__auto____1 = (function (state_14697){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14721){if((e14721 instanceof Object)){
var ex__12731__auto__ = e14721;
var statearr_14722_14740 = state_14697;
(statearr_14722_14740[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14741 = state_14697;
state_14697 = G__14741;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
cljs$core$async$state_machine__12728__auto__ = function(state_14697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12728__auto____1.call(this,state_14697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12728__auto____0;
cljs$core$async$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12728__auto____1;
return cljs$core$async$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___14725,out))
})();
var state__12824__auto__ = (function (){var statearr_14723 = f__12823__auto__.call(null);
(statearr_14723[(6)] = c__12822__auto___14725);

return statearr_14723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___14725,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1611070468758
