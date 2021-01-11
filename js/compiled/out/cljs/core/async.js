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
var G__32767 = arguments.length;
switch (G__32767) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32768 = (function (f,blockable,meta32769){
this.f = f;
this.blockable = blockable;
this.meta32769 = meta32769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32770,meta32769__$1){
var self__ = this;
var _32770__$1 = this;
return (new cljs.core.async.t_cljs$core$async32768(self__.f,self__.blockable,meta32769__$1));
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32770){
var self__ = this;
var _32770__$1 = this;
return self__.meta32769;
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32769","meta32769",1958057728,null)], null);
});

cljs.core.async.t_cljs$core$async32768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32768";

cljs.core.async.t_cljs$core$async32768.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32768");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32768.
 */
cljs.core.async.__GT_t_cljs$core$async32768 = (function cljs$core$async$__GT_t_cljs$core$async32768(f__$1,blockable__$1,meta32769){
return (new cljs.core.async.t_cljs$core$async32768(f__$1,blockable__$1,meta32769));
});

}

return (new cljs.core.async.t_cljs$core$async32768(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32774 = arguments.length;
switch (G__32774) {
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
var G__32777 = arguments.length;
switch (G__32777) {
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
var G__32780 = arguments.length;
switch (G__32780) {
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
var val_32782 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32782);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32782,ret){
return (function (){
return fn1.call(null,val_32782);
});})(val_32782,ret))
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
var G__32784 = arguments.length;
switch (G__32784) {
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
var n__4607__auto___32786 = n;
var x_32787 = (0);
while(true){
if((x_32787 < n__4607__auto___32786)){
(a[x_32787] = x_32787);

var G__32788 = (x_32787 + (1));
x_32787 = G__32788;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32789 = (function (flag,meta32790){
this.flag = flag;
this.meta32790 = meta32790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32791,meta32790__$1){
var self__ = this;
var _32791__$1 = this;
return (new cljs.core.async.t_cljs$core$async32789(self__.flag,meta32790__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32791){
var self__ = this;
var _32791__$1 = this;
return self__.meta32790;
});})(flag))
;

cljs.core.async.t_cljs$core$async32789.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32789.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32790","meta32790",1502979359,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32789";

cljs.core.async.t_cljs$core$async32789.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32789");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32789.
 */
cljs.core.async.__GT_t_cljs$core$async32789 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32789(flag__$1,meta32790){
return (new cljs.core.async.t_cljs$core$async32789(flag__$1,meta32790));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32789(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32792 = (function (flag,cb,meta32793){
this.flag = flag;
this.cb = cb;
this.meta32793 = meta32793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32794,meta32793__$1){
var self__ = this;
var _32794__$1 = this;
return (new cljs.core.async.t_cljs$core$async32792(self__.flag,self__.cb,meta32793__$1));
});

cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32794){
var self__ = this;
var _32794__$1 = this;
return self__.meta32793;
});

cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32793","meta32793",-1998320934,null)], null);
});

cljs.core.async.t_cljs$core$async32792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32792";

cljs.core.async.t_cljs$core$async32792.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32792");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32792.
 */
cljs.core.async.__GT_t_cljs$core$async32792 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32792(flag__$1,cb__$1,meta32793){
return (new cljs.core.async.t_cljs$core$async32792(flag__$1,cb__$1,meta32793));
});

}

return (new cljs.core.async.t_cljs$core$async32792(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32795_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32795_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32796_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32796_SHARP_,port], null));
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
var G__32797 = (i + (1));
i = G__32797;
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
var len__4730__auto___32803 = arguments.length;
var i__4731__auto___32804 = (0);
while(true){
if((i__4731__auto___32804 < len__4730__auto___32803)){
args__4736__auto__.push((arguments[i__4731__auto___32804]));

var G__32805 = (i__4731__auto___32804 + (1));
i__4731__auto___32804 = G__32805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32800){
var map__32801 = p__32800;
var map__32801__$1 = (((((!((map__32801 == null))))?(((((map__32801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32801):map__32801);
var opts = map__32801__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32798){
var G__32799 = cljs.core.first.call(null,seq32798);
var seq32798__$1 = cljs.core.next.call(null,seq32798);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32799,seq32798__$1);
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
var G__32807 = arguments.length;
switch (G__32807) {
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
var c__32707__auto___32853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___32853){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___32853){
return (function (state_32831){
var state_val_32832 = (state_32831[(1)]);
if((state_val_32832 === (7))){
var inst_32827 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32833_32854 = state_32831__$1;
(statearr_32833_32854[(2)] = inst_32827);

(statearr_32833_32854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (1))){
var state_32831__$1 = state_32831;
var statearr_32834_32855 = state_32831__$1;
(statearr_32834_32855[(2)] = null);

(statearr_32834_32855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (4))){
var inst_32810 = (state_32831[(7)]);
var inst_32810__$1 = (state_32831[(2)]);
var inst_32811 = (inst_32810__$1 == null);
var state_32831__$1 = (function (){var statearr_32835 = state_32831;
(statearr_32835[(7)] = inst_32810__$1);

return statearr_32835;
})();
if(cljs.core.truth_(inst_32811)){
var statearr_32836_32856 = state_32831__$1;
(statearr_32836_32856[(1)] = (5));

} else {
var statearr_32837_32857 = state_32831__$1;
(statearr_32837_32857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (13))){
var state_32831__$1 = state_32831;
var statearr_32838_32858 = state_32831__$1;
(statearr_32838_32858[(2)] = null);

(statearr_32838_32858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (6))){
var inst_32810 = (state_32831[(7)]);
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32831__$1,(11),to,inst_32810);
} else {
if((state_val_32832 === (3))){
var inst_32829 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32831__$1,inst_32829);
} else {
if((state_val_32832 === (12))){
var state_32831__$1 = state_32831;
var statearr_32839_32859 = state_32831__$1;
(statearr_32839_32859[(2)] = null);

(statearr_32839_32859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (2))){
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32831__$1,(4),from);
} else {
if((state_val_32832 === (11))){
var inst_32820 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
if(cljs.core.truth_(inst_32820)){
var statearr_32840_32860 = state_32831__$1;
(statearr_32840_32860[(1)] = (12));

} else {
var statearr_32841_32861 = state_32831__$1;
(statearr_32841_32861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (9))){
var state_32831__$1 = state_32831;
var statearr_32842_32862 = state_32831__$1;
(statearr_32842_32862[(2)] = null);

(statearr_32842_32862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (5))){
var state_32831__$1 = state_32831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32843_32863 = state_32831__$1;
(statearr_32843_32863[(1)] = (8));

} else {
var statearr_32844_32864 = state_32831__$1;
(statearr_32844_32864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (14))){
var inst_32825 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32845_32865 = state_32831__$1;
(statearr_32845_32865[(2)] = inst_32825);

(statearr_32845_32865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (10))){
var inst_32817 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32846_32866 = state_32831__$1;
(statearr_32846_32866[(2)] = inst_32817);

(statearr_32846_32866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (8))){
var inst_32814 = cljs.core.async.close_BANG_.call(null,to);
var state_32831__$1 = state_32831;
var statearr_32847_32867 = state_32831__$1;
(statearr_32847_32867[(2)] = inst_32814);

(statearr_32847_32867[(1)] = (10));


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
});})(c__32707__auto___32853))
;
return ((function (switch__32612__auto__,c__32707__auto___32853){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_32848 = [null,null,null,null,null,null,null,null];
(statearr_32848[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_32848[(1)] = (1));

return statearr_32848;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_32831){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_32831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e32849){if((e32849 instanceof Object)){
var ex__32616__auto__ = e32849;
var statearr_32850_32868 = state_32831;
(statearr_32850_32868[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32869 = state_32831;
state_32831 = G__32869;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_32831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_32831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___32853))
})();
var state__32709__auto__ = (function (){var statearr_32851 = f__32708__auto__.call(null);
(statearr_32851[(6)] = c__32707__auto___32853);

return statearr_32851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___32853))
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
return (function (p__32870){
var vec__32871 = p__32870;
var v = cljs.core.nth.call(null,vec__32871,(0),null);
var p = cljs.core.nth.call(null,vec__32871,(1),null);
var job = vec__32871;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32707__auto___33042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___33042,res,vec__32871,v,p,job,jobs,results){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___33042,res,vec__32871,v,p,job,jobs,results){
return (function (state_32878){
var state_val_32879 = (state_32878[(1)]);
if((state_val_32879 === (1))){
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32878__$1,(2),res,v);
} else {
if((state_val_32879 === (2))){
var inst_32875 = (state_32878[(2)]);
var inst_32876 = cljs.core.async.close_BANG_.call(null,res);
var state_32878__$1 = (function (){var statearr_32880 = state_32878;
(statearr_32880[(7)] = inst_32875);

return statearr_32880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32878__$1,inst_32876);
} else {
return null;
}
}
});})(c__32707__auto___33042,res,vec__32871,v,p,job,jobs,results))
;
return ((function (switch__32612__auto__,c__32707__auto___33042,res,vec__32871,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0 = (function (){
var statearr_32881 = [null,null,null,null,null,null,null,null];
(statearr_32881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__);

(statearr_32881[(1)] = (1));

return statearr_32881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1 = (function (state_32878){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_32878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e32882){if((e32882 instanceof Object)){
var ex__32616__auto__ = e32882;
var statearr_32883_33043 = state_32878;
(statearr_32883_33043[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33044 = state_32878;
state_32878 = G__33044;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = function(state_32878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1.call(this,state_32878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___33042,res,vec__32871,v,p,job,jobs,results))
})();
var state__32709__auto__ = (function (){var statearr_32884 = f__32708__auto__.call(null);
(statearr_32884[(6)] = c__32707__auto___33042);

return statearr_32884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___33042,res,vec__32871,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32885){
var vec__32886 = p__32885;
var v = cljs.core.nth.call(null,vec__32886,(0),null);
var p = cljs.core.nth.call(null,vec__32886,(1),null);
var job = vec__32886;
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
var n__4607__auto___33045 = n;
var __33046 = (0);
while(true){
if((__33046 < n__4607__auto___33045)){
var G__32889_33047 = type;
var G__32889_33048__$1 = (((G__32889_33047 instanceof cljs.core.Keyword))?G__32889_33047.fqn:null);
switch (G__32889_33048__$1) {
case "compute":
var c__32707__auto___33050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33046,c__32707__auto___33050,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (__33046,c__32707__auto___33050,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async){
return (function (state_32902){
var state_val_32903 = (state_32902[(1)]);
if((state_val_32903 === (1))){
var state_32902__$1 = state_32902;
var statearr_32904_33051 = state_32902__$1;
(statearr_32904_33051[(2)] = null);

(statearr_32904_33051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (2))){
var state_32902__$1 = state_32902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32902__$1,(4),jobs);
} else {
if((state_val_32903 === (3))){
var inst_32900 = (state_32902[(2)]);
var state_32902__$1 = state_32902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32902__$1,inst_32900);
} else {
if((state_val_32903 === (4))){
var inst_32892 = (state_32902[(2)]);
var inst_32893 = process.call(null,inst_32892);
var state_32902__$1 = state_32902;
if(cljs.core.truth_(inst_32893)){
var statearr_32905_33052 = state_32902__$1;
(statearr_32905_33052[(1)] = (5));

} else {
var statearr_32906_33053 = state_32902__$1;
(statearr_32906_33053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (5))){
var state_32902__$1 = state_32902;
var statearr_32907_33054 = state_32902__$1;
(statearr_32907_33054[(2)] = null);

(statearr_32907_33054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (6))){
var state_32902__$1 = state_32902;
var statearr_32908_33055 = state_32902__$1;
(statearr_32908_33055[(2)] = null);

(statearr_32908_33055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (7))){
var inst_32898 = (state_32902[(2)]);
var state_32902__$1 = state_32902;
var statearr_32909_33056 = state_32902__$1;
(statearr_32909_33056[(2)] = inst_32898);

(statearr_32909_33056[(1)] = (3));


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
});})(__33046,c__32707__auto___33050,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async))
;
return ((function (__33046,switch__32612__auto__,c__32707__auto___33050,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0 = (function (){
var statearr_32910 = [null,null,null,null,null,null,null];
(statearr_32910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__);

(statearr_32910[(1)] = (1));

return statearr_32910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1 = (function (state_32902){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_32902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e32911){if((e32911 instanceof Object)){
var ex__32616__auto__ = e32911;
var statearr_32912_33057 = state_32902;
(statearr_32912_33057[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33058 = state_32902;
state_32902 = G__33058;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = function(state_32902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1.call(this,state_32902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__;
})()
;})(__33046,switch__32612__auto__,c__32707__auto___33050,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async))
})();
var state__32709__auto__ = (function (){var statearr_32913 = f__32708__auto__.call(null);
(statearr_32913[(6)] = c__32707__auto___33050);

return statearr_32913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(__33046,c__32707__auto___33050,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async))
);


break;
case "async":
var c__32707__auto___33059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33046,c__32707__auto___33059,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (__33046,c__32707__auto___33059,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async){
return (function (state_32926){
var state_val_32927 = (state_32926[(1)]);
if((state_val_32927 === (1))){
var state_32926__$1 = state_32926;
var statearr_32928_33060 = state_32926__$1;
(statearr_32928_33060[(2)] = null);

(statearr_32928_33060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32927 === (2))){
var state_32926__$1 = state_32926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32926__$1,(4),jobs);
} else {
if((state_val_32927 === (3))){
var inst_32924 = (state_32926[(2)]);
var state_32926__$1 = state_32926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32926__$1,inst_32924);
} else {
if((state_val_32927 === (4))){
var inst_32916 = (state_32926[(2)]);
var inst_32917 = async.call(null,inst_32916);
var state_32926__$1 = state_32926;
if(cljs.core.truth_(inst_32917)){
var statearr_32929_33061 = state_32926__$1;
(statearr_32929_33061[(1)] = (5));

} else {
var statearr_32930_33062 = state_32926__$1;
(statearr_32930_33062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32927 === (5))){
var state_32926__$1 = state_32926;
var statearr_32931_33063 = state_32926__$1;
(statearr_32931_33063[(2)] = null);

(statearr_32931_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32927 === (6))){
var state_32926__$1 = state_32926;
var statearr_32932_33064 = state_32926__$1;
(statearr_32932_33064[(2)] = null);

(statearr_32932_33064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32927 === (7))){
var inst_32922 = (state_32926[(2)]);
var state_32926__$1 = state_32926;
var statearr_32933_33065 = state_32926__$1;
(statearr_32933_33065[(2)] = inst_32922);

(statearr_32933_33065[(1)] = (3));


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
});})(__33046,c__32707__auto___33059,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async))
;
return ((function (__33046,switch__32612__auto__,c__32707__auto___33059,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0 = (function (){
var statearr_32934 = [null,null,null,null,null,null,null];
(statearr_32934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__);

(statearr_32934[(1)] = (1));

return statearr_32934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1 = (function (state_32926){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_32926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e32935){if((e32935 instanceof Object)){
var ex__32616__auto__ = e32935;
var statearr_32936_33066 = state_32926;
(statearr_32936_33066[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33067 = state_32926;
state_32926 = G__33067;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = function(state_32926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1.call(this,state_32926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__;
})()
;})(__33046,switch__32612__auto__,c__32707__auto___33059,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async))
})();
var state__32709__auto__ = (function (){var statearr_32937 = f__32708__auto__.call(null);
(statearr_32937[(6)] = c__32707__auto___33059);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(__33046,c__32707__auto___33059,G__32889_33047,G__32889_33048__$1,n__4607__auto___33045,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32889_33048__$1)].join('')));

}

var G__33068 = (__33046 + (1));
__33046 = G__33068;
continue;
} else {
}
break;
}

var c__32707__auto___33069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___33069,jobs,results,process,async){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___33069,jobs,results,process,async){
return (function (state_32959){
var state_val_32960 = (state_32959[(1)]);
if((state_val_32960 === (7))){
var inst_32955 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32961_33070 = state_32959__$1;
(statearr_32961_33070[(2)] = inst_32955);

(statearr_32961_33070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (1))){
var state_32959__$1 = state_32959;
var statearr_32962_33071 = state_32959__$1;
(statearr_32962_33071[(2)] = null);

(statearr_32962_33071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (4))){
var inst_32940 = (state_32959[(7)]);
var inst_32940__$1 = (state_32959[(2)]);
var inst_32941 = (inst_32940__$1 == null);
var state_32959__$1 = (function (){var statearr_32963 = state_32959;
(statearr_32963[(7)] = inst_32940__$1);

return statearr_32963;
})();
if(cljs.core.truth_(inst_32941)){
var statearr_32964_33072 = state_32959__$1;
(statearr_32964_33072[(1)] = (5));

} else {
var statearr_32965_33073 = state_32959__$1;
(statearr_32965_33073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (6))){
var inst_32945 = (state_32959[(8)]);
var inst_32940 = (state_32959[(7)]);
var inst_32945__$1 = cljs.core.async.chan.call(null,(1));
var inst_32946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32947 = [inst_32940,inst_32945__$1];
var inst_32948 = (new cljs.core.PersistentVector(null,2,(5),inst_32946,inst_32947,null));
var state_32959__$1 = (function (){var statearr_32966 = state_32959;
(statearr_32966[(8)] = inst_32945__$1);

return statearr_32966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32959__$1,(8),jobs,inst_32948);
} else {
if((state_val_32960 === (3))){
var inst_32957 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32959__$1,inst_32957);
} else {
if((state_val_32960 === (2))){
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32959__$1,(4),from);
} else {
if((state_val_32960 === (9))){
var inst_32952 = (state_32959[(2)]);
var state_32959__$1 = (function (){var statearr_32967 = state_32959;
(statearr_32967[(9)] = inst_32952);

return statearr_32967;
})();
var statearr_32968_33074 = state_32959__$1;
(statearr_32968_33074[(2)] = null);

(statearr_32968_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (5))){
var inst_32943 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32959__$1 = state_32959;
var statearr_32969_33075 = state_32959__$1;
(statearr_32969_33075[(2)] = inst_32943);

(statearr_32969_33075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (8))){
var inst_32945 = (state_32959[(8)]);
var inst_32950 = (state_32959[(2)]);
var state_32959__$1 = (function (){var statearr_32970 = state_32959;
(statearr_32970[(10)] = inst_32950);

return statearr_32970;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32959__$1,(9),results,inst_32945);
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
});})(c__32707__auto___33069,jobs,results,process,async))
;
return ((function (switch__32612__auto__,c__32707__auto___33069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0 = (function (){
var statearr_32971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__);

(statearr_32971[(1)] = (1));

return statearr_32971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1 = (function (state_32959){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_32959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e32972){if((e32972 instanceof Object)){
var ex__32616__auto__ = e32972;
var statearr_32973_33076 = state_32959;
(statearr_32973_33076[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33077 = state_32959;
state_32959 = G__33077;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = function(state_32959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1.call(this,state_32959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___33069,jobs,results,process,async))
})();
var state__32709__auto__ = (function (){var statearr_32974 = f__32708__auto__.call(null);
(statearr_32974[(6)] = c__32707__auto___33069);

return statearr_32974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___33069,jobs,results,process,async))
);


var c__32707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto__,jobs,results,process,async){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto__,jobs,results,process,async){
return (function (state_33012){
var state_val_33013 = (state_33012[(1)]);
if((state_val_33013 === (7))){
var inst_33008 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33014_33078 = state_33012__$1;
(statearr_33014_33078[(2)] = inst_33008);

(statearr_33014_33078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (20))){
var state_33012__$1 = state_33012;
var statearr_33015_33079 = state_33012__$1;
(statearr_33015_33079[(2)] = null);

(statearr_33015_33079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (1))){
var state_33012__$1 = state_33012;
var statearr_33016_33080 = state_33012__$1;
(statearr_33016_33080[(2)] = null);

(statearr_33016_33080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (4))){
var inst_32977 = (state_33012[(7)]);
var inst_32977__$1 = (state_33012[(2)]);
var inst_32978 = (inst_32977__$1 == null);
var state_33012__$1 = (function (){var statearr_33017 = state_33012;
(statearr_33017[(7)] = inst_32977__$1);

return statearr_33017;
})();
if(cljs.core.truth_(inst_32978)){
var statearr_33018_33081 = state_33012__$1;
(statearr_33018_33081[(1)] = (5));

} else {
var statearr_33019_33082 = state_33012__$1;
(statearr_33019_33082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (15))){
var inst_32990 = (state_33012[(8)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33012__$1,(18),to,inst_32990);
} else {
if((state_val_33013 === (21))){
var inst_33003 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33020_33083 = state_33012__$1;
(statearr_33020_33083[(2)] = inst_33003);

(statearr_33020_33083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (13))){
var inst_33005 = (state_33012[(2)]);
var state_33012__$1 = (function (){var statearr_33021 = state_33012;
(statearr_33021[(9)] = inst_33005);

return statearr_33021;
})();
var statearr_33022_33084 = state_33012__$1;
(statearr_33022_33084[(2)] = null);

(statearr_33022_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (6))){
var inst_32977 = (state_33012[(7)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33012__$1,(11),inst_32977);
} else {
if((state_val_33013 === (17))){
var inst_32998 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
if(cljs.core.truth_(inst_32998)){
var statearr_33023_33085 = state_33012__$1;
(statearr_33023_33085[(1)] = (19));

} else {
var statearr_33024_33086 = state_33012__$1;
(statearr_33024_33086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (3))){
var inst_33010 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33012__$1,inst_33010);
} else {
if((state_val_33013 === (12))){
var inst_32987 = (state_33012[(10)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33012__$1,(14),inst_32987);
} else {
if((state_val_33013 === (2))){
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33012__$1,(4),results);
} else {
if((state_val_33013 === (19))){
var state_33012__$1 = state_33012;
var statearr_33025_33087 = state_33012__$1;
(statearr_33025_33087[(2)] = null);

(statearr_33025_33087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (11))){
var inst_32987 = (state_33012[(2)]);
var state_33012__$1 = (function (){var statearr_33026 = state_33012;
(statearr_33026[(10)] = inst_32987);

return statearr_33026;
})();
var statearr_33027_33088 = state_33012__$1;
(statearr_33027_33088[(2)] = null);

(statearr_33027_33088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (9))){
var state_33012__$1 = state_33012;
var statearr_33028_33089 = state_33012__$1;
(statearr_33028_33089[(2)] = null);

(statearr_33028_33089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (5))){
var state_33012__$1 = state_33012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33029_33090 = state_33012__$1;
(statearr_33029_33090[(1)] = (8));

} else {
var statearr_33030_33091 = state_33012__$1;
(statearr_33030_33091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (14))){
var inst_32992 = (state_33012[(11)]);
var inst_32990 = (state_33012[(8)]);
var inst_32990__$1 = (state_33012[(2)]);
var inst_32991 = (inst_32990__$1 == null);
var inst_32992__$1 = cljs.core.not.call(null,inst_32991);
var state_33012__$1 = (function (){var statearr_33031 = state_33012;
(statearr_33031[(11)] = inst_32992__$1);

(statearr_33031[(8)] = inst_32990__$1);

return statearr_33031;
})();
if(inst_32992__$1){
var statearr_33032_33092 = state_33012__$1;
(statearr_33032_33092[(1)] = (15));

} else {
var statearr_33033_33093 = state_33012__$1;
(statearr_33033_33093[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (16))){
var inst_32992 = (state_33012[(11)]);
var state_33012__$1 = state_33012;
var statearr_33034_33094 = state_33012__$1;
(statearr_33034_33094[(2)] = inst_32992);

(statearr_33034_33094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (10))){
var inst_32984 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33035_33095 = state_33012__$1;
(statearr_33035_33095[(2)] = inst_32984);

(statearr_33035_33095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (18))){
var inst_32995 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33036_33096 = state_33012__$1;
(statearr_33036_33096[(2)] = inst_32995);

(statearr_33036_33096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (8))){
var inst_32981 = cljs.core.async.close_BANG_.call(null,to);
var state_33012__$1 = state_33012;
var statearr_33037_33097 = state_33012__$1;
(statearr_33037_33097[(2)] = inst_32981);

(statearr_33037_33097[(1)] = (10));


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
});})(c__32707__auto__,jobs,results,process,async))
;
return ((function (switch__32612__auto__,c__32707__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0 = (function (){
var statearr_33038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__);

(statearr_33038[(1)] = (1));

return statearr_33038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1 = (function (state_33012){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33039){if((e33039 instanceof Object)){
var ex__32616__auto__ = e33039;
var statearr_33040_33098 = state_33012;
(statearr_33040_33098[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33099 = state_33012;
state_33012 = G__33099;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__ = function(state_33012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1.call(this,state_33012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto__,jobs,results,process,async))
})();
var state__32709__auto__ = (function (){var statearr_33041 = f__32708__auto__.call(null);
(statearr_33041[(6)] = c__32707__auto__);

return statearr_33041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto__,jobs,results,process,async))
);

return c__32707__auto__;
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
var G__33101 = arguments.length;
switch (G__33101) {
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
var G__33104 = arguments.length;
switch (G__33104) {
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
var G__33107 = arguments.length;
switch (G__33107) {
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
var c__32707__auto___33156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___33156,tc,fc){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___33156,tc,fc){
return (function (state_33133){
var state_val_33134 = (state_33133[(1)]);
if((state_val_33134 === (7))){
var inst_33129 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33135_33157 = state_33133__$1;
(statearr_33135_33157[(2)] = inst_33129);

(statearr_33135_33157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (1))){
var state_33133__$1 = state_33133;
var statearr_33136_33158 = state_33133__$1;
(statearr_33136_33158[(2)] = null);

(statearr_33136_33158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (4))){
var inst_33110 = (state_33133[(7)]);
var inst_33110__$1 = (state_33133[(2)]);
var inst_33111 = (inst_33110__$1 == null);
var state_33133__$1 = (function (){var statearr_33137 = state_33133;
(statearr_33137[(7)] = inst_33110__$1);

return statearr_33137;
})();
if(cljs.core.truth_(inst_33111)){
var statearr_33138_33159 = state_33133__$1;
(statearr_33138_33159[(1)] = (5));

} else {
var statearr_33139_33160 = state_33133__$1;
(statearr_33139_33160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (13))){
var state_33133__$1 = state_33133;
var statearr_33140_33161 = state_33133__$1;
(statearr_33140_33161[(2)] = null);

(statearr_33140_33161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (6))){
var inst_33110 = (state_33133[(7)]);
var inst_33116 = p.call(null,inst_33110);
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33116)){
var statearr_33141_33162 = state_33133__$1;
(statearr_33141_33162[(1)] = (9));

} else {
var statearr_33142_33163 = state_33133__$1;
(statearr_33142_33163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (3))){
var inst_33131 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33133__$1,inst_33131);
} else {
if((state_val_33134 === (12))){
var state_33133__$1 = state_33133;
var statearr_33143_33164 = state_33133__$1;
(statearr_33143_33164[(2)] = null);

(statearr_33143_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (2))){
var state_33133__$1 = state_33133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33133__$1,(4),ch);
} else {
if((state_val_33134 === (11))){
var inst_33110 = (state_33133[(7)]);
var inst_33120 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33133__$1,(8),inst_33120,inst_33110);
} else {
if((state_val_33134 === (9))){
var state_33133__$1 = state_33133;
var statearr_33144_33165 = state_33133__$1;
(statearr_33144_33165[(2)] = tc);

(statearr_33144_33165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (5))){
var inst_33113 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33114 = cljs.core.async.close_BANG_.call(null,fc);
var state_33133__$1 = (function (){var statearr_33145 = state_33133;
(statearr_33145[(8)] = inst_33113);

return statearr_33145;
})();
var statearr_33146_33166 = state_33133__$1;
(statearr_33146_33166[(2)] = inst_33114);

(statearr_33146_33166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (14))){
var inst_33127 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33147_33167 = state_33133__$1;
(statearr_33147_33167[(2)] = inst_33127);

(statearr_33147_33167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (10))){
var state_33133__$1 = state_33133;
var statearr_33148_33168 = state_33133__$1;
(statearr_33148_33168[(2)] = fc);

(statearr_33148_33168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (8))){
var inst_33122 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33122)){
var statearr_33149_33169 = state_33133__$1;
(statearr_33149_33169[(1)] = (12));

} else {
var statearr_33150_33170 = state_33133__$1;
(statearr_33150_33170[(1)] = (13));

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
});})(c__32707__auto___33156,tc,fc))
;
return ((function (switch__32612__auto__,c__32707__auto___33156,tc,fc){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_33151 = [null,null,null,null,null,null,null,null,null];
(statearr_33151[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_33151[(1)] = (1));

return statearr_33151;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_33133){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33152){if((e33152 instanceof Object)){
var ex__32616__auto__ = e33152;
var statearr_33153_33171 = state_33133;
(statearr_33153_33171[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33172 = state_33133;
state_33133 = G__33172;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_33133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_33133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___33156,tc,fc))
})();
var state__32709__auto__ = (function (){var statearr_33154 = f__32708__auto__.call(null);
(statearr_33154[(6)] = c__32707__auto___33156);

return statearr_33154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___33156,tc,fc))
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
var c__32707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto__){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto__){
return (function (state_33193){
var state_val_33194 = (state_33193[(1)]);
if((state_val_33194 === (7))){
var inst_33189 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33195_33213 = state_33193__$1;
(statearr_33195_33213[(2)] = inst_33189);

(statearr_33195_33213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (1))){
var inst_33173 = init;
var state_33193__$1 = (function (){var statearr_33196 = state_33193;
(statearr_33196[(7)] = inst_33173);

return statearr_33196;
})();
var statearr_33197_33214 = state_33193__$1;
(statearr_33197_33214[(2)] = null);

(statearr_33197_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (4))){
var inst_33176 = (state_33193[(8)]);
var inst_33176__$1 = (state_33193[(2)]);
var inst_33177 = (inst_33176__$1 == null);
var state_33193__$1 = (function (){var statearr_33198 = state_33193;
(statearr_33198[(8)] = inst_33176__$1);

return statearr_33198;
})();
if(cljs.core.truth_(inst_33177)){
var statearr_33199_33215 = state_33193__$1;
(statearr_33199_33215[(1)] = (5));

} else {
var statearr_33200_33216 = state_33193__$1;
(statearr_33200_33216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (6))){
var inst_33173 = (state_33193[(7)]);
var inst_33176 = (state_33193[(8)]);
var inst_33180 = (state_33193[(9)]);
var inst_33180__$1 = f.call(null,inst_33173,inst_33176);
var inst_33181 = cljs.core.reduced_QMARK_.call(null,inst_33180__$1);
var state_33193__$1 = (function (){var statearr_33201 = state_33193;
(statearr_33201[(9)] = inst_33180__$1);

return statearr_33201;
})();
if(inst_33181){
var statearr_33202_33217 = state_33193__$1;
(statearr_33202_33217[(1)] = (8));

} else {
var statearr_33203_33218 = state_33193__$1;
(statearr_33203_33218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (3))){
var inst_33191 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33193__$1,inst_33191);
} else {
if((state_val_33194 === (2))){
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33193__$1,(4),ch);
} else {
if((state_val_33194 === (9))){
var inst_33180 = (state_33193[(9)]);
var inst_33173 = inst_33180;
var state_33193__$1 = (function (){var statearr_33204 = state_33193;
(statearr_33204[(7)] = inst_33173);

return statearr_33204;
})();
var statearr_33205_33219 = state_33193__$1;
(statearr_33205_33219[(2)] = null);

(statearr_33205_33219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (5))){
var inst_33173 = (state_33193[(7)]);
var state_33193__$1 = state_33193;
var statearr_33206_33220 = state_33193__$1;
(statearr_33206_33220[(2)] = inst_33173);

(statearr_33206_33220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (10))){
var inst_33187 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33207_33221 = state_33193__$1;
(statearr_33207_33221[(2)] = inst_33187);

(statearr_33207_33221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (8))){
var inst_33180 = (state_33193[(9)]);
var inst_33183 = cljs.core.deref.call(null,inst_33180);
var state_33193__$1 = state_33193;
var statearr_33208_33222 = state_33193__$1;
(statearr_33208_33222[(2)] = inst_33183);

(statearr_33208_33222[(1)] = (10));


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
});})(c__32707__auto__))
;
return ((function (switch__32612__auto__,c__32707__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32613__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32613__auto____0 = (function (){
var statearr_33209 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33209[(0)] = cljs$core$async$reduce_$_state_machine__32613__auto__);

(statearr_33209[(1)] = (1));

return statearr_33209;
});
var cljs$core$async$reduce_$_state_machine__32613__auto____1 = (function (state_33193){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33210){if((e33210 instanceof Object)){
var ex__32616__auto__ = e33210;
var statearr_33211_33223 = state_33193;
(statearr_33211_33223[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33224 = state_33193;
state_33193 = G__33224;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32613__auto__ = function(state_33193){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32613__auto____1.call(this,state_33193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32613__auto____0;
cljs$core$async$reduce_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32613__auto____1;
return cljs$core$async$reduce_$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto__))
})();
var state__32709__auto__ = (function (){var statearr_33212 = f__32708__auto__.call(null);
(statearr_33212[(6)] = c__32707__auto__);

return statearr_33212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto__))
);

return c__32707__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto__,f__$1){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto__,f__$1){
return (function (state_33230){
var state_val_33231 = (state_33230[(1)]);
if((state_val_33231 === (1))){
var inst_33225 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33230__$1 = state_33230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33230__$1,(2),inst_33225);
} else {
if((state_val_33231 === (2))){
var inst_33227 = (state_33230[(2)]);
var inst_33228 = f__$1.call(null,inst_33227);
var state_33230__$1 = state_33230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33230__$1,inst_33228);
} else {
return null;
}
}
});})(c__32707__auto__,f__$1))
;
return ((function (switch__32612__auto__,c__32707__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32613__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32613__auto____0 = (function (){
var statearr_33232 = [null,null,null,null,null,null,null];
(statearr_33232[(0)] = cljs$core$async$transduce_$_state_machine__32613__auto__);

(statearr_33232[(1)] = (1));

return statearr_33232;
});
var cljs$core$async$transduce_$_state_machine__32613__auto____1 = (function (state_33230){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33233){if((e33233 instanceof Object)){
var ex__32616__auto__ = e33233;
var statearr_33234_33236 = state_33230;
(statearr_33234_33236[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33237 = state_33230;
state_33230 = G__33237;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32613__auto__ = function(state_33230){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32613__auto____1.call(this,state_33230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32613__auto____0;
cljs$core$async$transduce_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32613__auto____1;
return cljs$core$async$transduce_$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto__,f__$1))
})();
var state__32709__auto__ = (function (){var statearr_33235 = f__32708__auto__.call(null);
(statearr_33235[(6)] = c__32707__auto__);

return statearr_33235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto__,f__$1))
);

return c__32707__auto__;
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
var G__33239 = arguments.length;
switch (G__33239) {
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
var c__32707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto__){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto__){
return (function (state_33264){
var state_val_33265 = (state_33264[(1)]);
if((state_val_33265 === (7))){
var inst_33246 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33266_33287 = state_33264__$1;
(statearr_33266_33287[(2)] = inst_33246);

(statearr_33266_33287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (1))){
var inst_33240 = cljs.core.seq.call(null,coll);
var inst_33241 = inst_33240;
var state_33264__$1 = (function (){var statearr_33267 = state_33264;
(statearr_33267[(7)] = inst_33241);

return statearr_33267;
})();
var statearr_33268_33288 = state_33264__$1;
(statearr_33268_33288[(2)] = null);

(statearr_33268_33288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (4))){
var inst_33241 = (state_33264[(7)]);
var inst_33244 = cljs.core.first.call(null,inst_33241);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33264__$1,(7),ch,inst_33244);
} else {
if((state_val_33265 === (13))){
var inst_33258 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33269_33289 = state_33264__$1;
(statearr_33269_33289[(2)] = inst_33258);

(statearr_33269_33289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (6))){
var inst_33249 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
if(cljs.core.truth_(inst_33249)){
var statearr_33270_33290 = state_33264__$1;
(statearr_33270_33290[(1)] = (8));

} else {
var statearr_33271_33291 = state_33264__$1;
(statearr_33271_33291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (3))){
var inst_33262 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33264__$1,inst_33262);
} else {
if((state_val_33265 === (12))){
var state_33264__$1 = state_33264;
var statearr_33272_33292 = state_33264__$1;
(statearr_33272_33292[(2)] = null);

(statearr_33272_33292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (2))){
var inst_33241 = (state_33264[(7)]);
var state_33264__$1 = state_33264;
if(cljs.core.truth_(inst_33241)){
var statearr_33273_33293 = state_33264__$1;
(statearr_33273_33293[(1)] = (4));

} else {
var statearr_33274_33294 = state_33264__$1;
(statearr_33274_33294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (11))){
var inst_33255 = cljs.core.async.close_BANG_.call(null,ch);
var state_33264__$1 = state_33264;
var statearr_33275_33295 = state_33264__$1;
(statearr_33275_33295[(2)] = inst_33255);

(statearr_33275_33295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (9))){
var state_33264__$1 = state_33264;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33276_33296 = state_33264__$1;
(statearr_33276_33296[(1)] = (11));

} else {
var statearr_33277_33297 = state_33264__$1;
(statearr_33277_33297[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (5))){
var inst_33241 = (state_33264[(7)]);
var state_33264__$1 = state_33264;
var statearr_33278_33298 = state_33264__$1;
(statearr_33278_33298[(2)] = inst_33241);

(statearr_33278_33298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (10))){
var inst_33260 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33279_33299 = state_33264__$1;
(statearr_33279_33299[(2)] = inst_33260);

(statearr_33279_33299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (8))){
var inst_33241 = (state_33264[(7)]);
var inst_33251 = cljs.core.next.call(null,inst_33241);
var inst_33241__$1 = inst_33251;
var state_33264__$1 = (function (){var statearr_33280 = state_33264;
(statearr_33280[(7)] = inst_33241__$1);

return statearr_33280;
})();
var statearr_33281_33300 = state_33264__$1;
(statearr_33281_33300[(2)] = null);

(statearr_33281_33300[(1)] = (2));


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
});})(c__32707__auto__))
;
return ((function (switch__32612__auto__,c__32707__auto__){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_33282 = [null,null,null,null,null,null,null,null];
(statearr_33282[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_33282[(1)] = (1));

return statearr_33282;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_33264){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33283){if((e33283 instanceof Object)){
var ex__32616__auto__ = e33283;
var statearr_33284_33301 = state_33264;
(statearr_33284_33301[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33302 = state_33264;
state_33264 = G__33302;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_33264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_33264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto__))
})();
var state__32709__auto__ = (function (){var statearr_33285 = f__32708__auto__.call(null);
(statearr_33285[(6)] = c__32707__auto__);

return statearr_33285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto__))
);

return c__32707__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33303 = (function (ch,cs,meta33304){
this.ch = ch;
this.cs = cs;
this.meta33304 = meta33304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33305,meta33304__$1){
var self__ = this;
var _33305__$1 = this;
return (new cljs.core.async.t_cljs$core$async33303(self__.ch,self__.cs,meta33304__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33305){
var self__ = this;
var _33305__$1 = this;
return self__.meta33304;
});})(cs))
;

cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33303.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33304","meta33304",-1671634224,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33303";

cljs.core.async.t_cljs$core$async33303.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33303");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33303.
 */
cljs.core.async.__GT_t_cljs$core$async33303 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33303(ch__$1,cs__$1,meta33304){
return (new cljs.core.async.t_cljs$core$async33303(ch__$1,cs__$1,meta33304));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33303(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32707__auto___33525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___33525,cs,m,dchan,dctr,done){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___33525,cs,m,dchan,dctr,done){
return (function (state_33440){
var state_val_33441 = (state_33440[(1)]);
if((state_val_33441 === (7))){
var inst_33436 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33442_33526 = state_33440__$1;
(statearr_33442_33526[(2)] = inst_33436);

(statearr_33442_33526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (20))){
var inst_33339 = (state_33440[(7)]);
var inst_33351 = cljs.core.first.call(null,inst_33339);
var inst_33352 = cljs.core.nth.call(null,inst_33351,(0),null);
var inst_33353 = cljs.core.nth.call(null,inst_33351,(1),null);
var state_33440__$1 = (function (){var statearr_33443 = state_33440;
(statearr_33443[(8)] = inst_33352);

return statearr_33443;
})();
if(cljs.core.truth_(inst_33353)){
var statearr_33444_33527 = state_33440__$1;
(statearr_33444_33527[(1)] = (22));

} else {
var statearr_33445_33528 = state_33440__$1;
(statearr_33445_33528[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (27))){
var inst_33308 = (state_33440[(9)]);
var inst_33383 = (state_33440[(10)]);
var inst_33388 = (state_33440[(11)]);
var inst_33381 = (state_33440[(12)]);
var inst_33388__$1 = cljs.core._nth.call(null,inst_33381,inst_33383);
var inst_33389 = cljs.core.async.put_BANG_.call(null,inst_33388__$1,inst_33308,done);
var state_33440__$1 = (function (){var statearr_33446 = state_33440;
(statearr_33446[(11)] = inst_33388__$1);

return statearr_33446;
})();
if(cljs.core.truth_(inst_33389)){
var statearr_33447_33529 = state_33440__$1;
(statearr_33447_33529[(1)] = (30));

} else {
var statearr_33448_33530 = state_33440__$1;
(statearr_33448_33530[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (1))){
var state_33440__$1 = state_33440;
var statearr_33449_33531 = state_33440__$1;
(statearr_33449_33531[(2)] = null);

(statearr_33449_33531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (24))){
var inst_33339 = (state_33440[(7)]);
var inst_33358 = (state_33440[(2)]);
var inst_33359 = cljs.core.next.call(null,inst_33339);
var inst_33317 = inst_33359;
var inst_33318 = null;
var inst_33319 = (0);
var inst_33320 = (0);
var state_33440__$1 = (function (){var statearr_33450 = state_33440;
(statearr_33450[(13)] = inst_33317);

(statearr_33450[(14)] = inst_33318);

(statearr_33450[(15)] = inst_33319);

(statearr_33450[(16)] = inst_33358);

(statearr_33450[(17)] = inst_33320);

return statearr_33450;
})();
var statearr_33451_33532 = state_33440__$1;
(statearr_33451_33532[(2)] = null);

(statearr_33451_33532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (39))){
var state_33440__$1 = state_33440;
var statearr_33455_33533 = state_33440__$1;
(statearr_33455_33533[(2)] = null);

(statearr_33455_33533[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (4))){
var inst_33308 = (state_33440[(9)]);
var inst_33308__$1 = (state_33440[(2)]);
var inst_33309 = (inst_33308__$1 == null);
var state_33440__$1 = (function (){var statearr_33456 = state_33440;
(statearr_33456[(9)] = inst_33308__$1);

return statearr_33456;
})();
if(cljs.core.truth_(inst_33309)){
var statearr_33457_33534 = state_33440__$1;
(statearr_33457_33534[(1)] = (5));

} else {
var statearr_33458_33535 = state_33440__$1;
(statearr_33458_33535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (15))){
var inst_33317 = (state_33440[(13)]);
var inst_33318 = (state_33440[(14)]);
var inst_33319 = (state_33440[(15)]);
var inst_33320 = (state_33440[(17)]);
var inst_33335 = (state_33440[(2)]);
var inst_33336 = (inst_33320 + (1));
var tmp33452 = inst_33317;
var tmp33453 = inst_33318;
var tmp33454 = inst_33319;
var inst_33317__$1 = tmp33452;
var inst_33318__$1 = tmp33453;
var inst_33319__$1 = tmp33454;
var inst_33320__$1 = inst_33336;
var state_33440__$1 = (function (){var statearr_33459 = state_33440;
(statearr_33459[(13)] = inst_33317__$1);

(statearr_33459[(18)] = inst_33335);

(statearr_33459[(14)] = inst_33318__$1);

(statearr_33459[(15)] = inst_33319__$1);

(statearr_33459[(17)] = inst_33320__$1);

return statearr_33459;
})();
var statearr_33460_33536 = state_33440__$1;
(statearr_33460_33536[(2)] = null);

(statearr_33460_33536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (21))){
var inst_33362 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33464_33537 = state_33440__$1;
(statearr_33464_33537[(2)] = inst_33362);

(statearr_33464_33537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (31))){
var inst_33388 = (state_33440[(11)]);
var inst_33392 = done.call(null,null);
var inst_33393 = cljs.core.async.untap_STAR_.call(null,m,inst_33388);
var state_33440__$1 = (function (){var statearr_33465 = state_33440;
(statearr_33465[(19)] = inst_33392);

return statearr_33465;
})();
var statearr_33466_33538 = state_33440__$1;
(statearr_33466_33538[(2)] = inst_33393);

(statearr_33466_33538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (32))){
var inst_33383 = (state_33440[(10)]);
var inst_33380 = (state_33440[(20)]);
var inst_33382 = (state_33440[(21)]);
var inst_33381 = (state_33440[(12)]);
var inst_33395 = (state_33440[(2)]);
var inst_33396 = (inst_33383 + (1));
var tmp33461 = inst_33380;
var tmp33462 = inst_33382;
var tmp33463 = inst_33381;
var inst_33380__$1 = tmp33461;
var inst_33381__$1 = tmp33463;
var inst_33382__$1 = tmp33462;
var inst_33383__$1 = inst_33396;
var state_33440__$1 = (function (){var statearr_33467 = state_33440;
(statearr_33467[(10)] = inst_33383__$1);

(statearr_33467[(22)] = inst_33395);

(statearr_33467[(20)] = inst_33380__$1);

(statearr_33467[(21)] = inst_33382__$1);

(statearr_33467[(12)] = inst_33381__$1);

return statearr_33467;
})();
var statearr_33468_33539 = state_33440__$1;
(statearr_33468_33539[(2)] = null);

(statearr_33468_33539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (40))){
var inst_33408 = (state_33440[(23)]);
var inst_33412 = done.call(null,null);
var inst_33413 = cljs.core.async.untap_STAR_.call(null,m,inst_33408);
var state_33440__$1 = (function (){var statearr_33469 = state_33440;
(statearr_33469[(24)] = inst_33412);

return statearr_33469;
})();
var statearr_33470_33540 = state_33440__$1;
(statearr_33470_33540[(2)] = inst_33413);

(statearr_33470_33540[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (33))){
var inst_33399 = (state_33440[(25)]);
var inst_33401 = cljs.core.chunked_seq_QMARK_.call(null,inst_33399);
var state_33440__$1 = state_33440;
if(inst_33401){
var statearr_33471_33541 = state_33440__$1;
(statearr_33471_33541[(1)] = (36));

} else {
var statearr_33472_33542 = state_33440__$1;
(statearr_33472_33542[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (13))){
var inst_33329 = (state_33440[(26)]);
var inst_33332 = cljs.core.async.close_BANG_.call(null,inst_33329);
var state_33440__$1 = state_33440;
var statearr_33473_33543 = state_33440__$1;
(statearr_33473_33543[(2)] = inst_33332);

(statearr_33473_33543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (22))){
var inst_33352 = (state_33440[(8)]);
var inst_33355 = cljs.core.async.close_BANG_.call(null,inst_33352);
var state_33440__$1 = state_33440;
var statearr_33474_33544 = state_33440__$1;
(statearr_33474_33544[(2)] = inst_33355);

(statearr_33474_33544[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (36))){
var inst_33399 = (state_33440[(25)]);
var inst_33403 = cljs.core.chunk_first.call(null,inst_33399);
var inst_33404 = cljs.core.chunk_rest.call(null,inst_33399);
var inst_33405 = cljs.core.count.call(null,inst_33403);
var inst_33380 = inst_33404;
var inst_33381 = inst_33403;
var inst_33382 = inst_33405;
var inst_33383 = (0);
var state_33440__$1 = (function (){var statearr_33475 = state_33440;
(statearr_33475[(10)] = inst_33383);

(statearr_33475[(20)] = inst_33380);

(statearr_33475[(21)] = inst_33382);

(statearr_33475[(12)] = inst_33381);

return statearr_33475;
})();
var statearr_33476_33545 = state_33440__$1;
(statearr_33476_33545[(2)] = null);

(statearr_33476_33545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (41))){
var inst_33399 = (state_33440[(25)]);
var inst_33415 = (state_33440[(2)]);
var inst_33416 = cljs.core.next.call(null,inst_33399);
var inst_33380 = inst_33416;
var inst_33381 = null;
var inst_33382 = (0);
var inst_33383 = (0);
var state_33440__$1 = (function (){var statearr_33477 = state_33440;
(statearr_33477[(10)] = inst_33383);

(statearr_33477[(20)] = inst_33380);

(statearr_33477[(27)] = inst_33415);

(statearr_33477[(21)] = inst_33382);

(statearr_33477[(12)] = inst_33381);

return statearr_33477;
})();
var statearr_33478_33546 = state_33440__$1;
(statearr_33478_33546[(2)] = null);

(statearr_33478_33546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (43))){
var state_33440__$1 = state_33440;
var statearr_33479_33547 = state_33440__$1;
(statearr_33479_33547[(2)] = null);

(statearr_33479_33547[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (29))){
var inst_33424 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33480_33548 = state_33440__$1;
(statearr_33480_33548[(2)] = inst_33424);

(statearr_33480_33548[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (44))){
var inst_33433 = (state_33440[(2)]);
var state_33440__$1 = (function (){var statearr_33481 = state_33440;
(statearr_33481[(28)] = inst_33433);

return statearr_33481;
})();
var statearr_33482_33549 = state_33440__$1;
(statearr_33482_33549[(2)] = null);

(statearr_33482_33549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (6))){
var inst_33372 = (state_33440[(29)]);
var inst_33371 = cljs.core.deref.call(null,cs);
var inst_33372__$1 = cljs.core.keys.call(null,inst_33371);
var inst_33373 = cljs.core.count.call(null,inst_33372__$1);
var inst_33374 = cljs.core.reset_BANG_.call(null,dctr,inst_33373);
var inst_33379 = cljs.core.seq.call(null,inst_33372__$1);
var inst_33380 = inst_33379;
var inst_33381 = null;
var inst_33382 = (0);
var inst_33383 = (0);
var state_33440__$1 = (function (){var statearr_33483 = state_33440;
(statearr_33483[(10)] = inst_33383);

(statearr_33483[(29)] = inst_33372__$1);

(statearr_33483[(20)] = inst_33380);

(statearr_33483[(21)] = inst_33382);

(statearr_33483[(30)] = inst_33374);

(statearr_33483[(12)] = inst_33381);

return statearr_33483;
})();
var statearr_33484_33550 = state_33440__$1;
(statearr_33484_33550[(2)] = null);

(statearr_33484_33550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (28))){
var inst_33399 = (state_33440[(25)]);
var inst_33380 = (state_33440[(20)]);
var inst_33399__$1 = cljs.core.seq.call(null,inst_33380);
var state_33440__$1 = (function (){var statearr_33485 = state_33440;
(statearr_33485[(25)] = inst_33399__$1);

return statearr_33485;
})();
if(inst_33399__$1){
var statearr_33486_33551 = state_33440__$1;
(statearr_33486_33551[(1)] = (33));

} else {
var statearr_33487_33552 = state_33440__$1;
(statearr_33487_33552[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (25))){
var inst_33383 = (state_33440[(10)]);
var inst_33382 = (state_33440[(21)]);
var inst_33385 = (inst_33383 < inst_33382);
var inst_33386 = inst_33385;
var state_33440__$1 = state_33440;
if(cljs.core.truth_(inst_33386)){
var statearr_33488_33553 = state_33440__$1;
(statearr_33488_33553[(1)] = (27));

} else {
var statearr_33489_33554 = state_33440__$1;
(statearr_33489_33554[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (34))){
var state_33440__$1 = state_33440;
var statearr_33490_33555 = state_33440__$1;
(statearr_33490_33555[(2)] = null);

(statearr_33490_33555[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (17))){
var state_33440__$1 = state_33440;
var statearr_33491_33556 = state_33440__$1;
(statearr_33491_33556[(2)] = null);

(statearr_33491_33556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (3))){
var inst_33438 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33440__$1,inst_33438);
} else {
if((state_val_33441 === (12))){
var inst_33367 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33492_33557 = state_33440__$1;
(statearr_33492_33557[(2)] = inst_33367);

(statearr_33492_33557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (2))){
var state_33440__$1 = state_33440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33440__$1,(4),ch);
} else {
if((state_val_33441 === (23))){
var state_33440__$1 = state_33440;
var statearr_33493_33558 = state_33440__$1;
(statearr_33493_33558[(2)] = null);

(statearr_33493_33558[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (35))){
var inst_33422 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33494_33559 = state_33440__$1;
(statearr_33494_33559[(2)] = inst_33422);

(statearr_33494_33559[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (19))){
var inst_33339 = (state_33440[(7)]);
var inst_33343 = cljs.core.chunk_first.call(null,inst_33339);
var inst_33344 = cljs.core.chunk_rest.call(null,inst_33339);
var inst_33345 = cljs.core.count.call(null,inst_33343);
var inst_33317 = inst_33344;
var inst_33318 = inst_33343;
var inst_33319 = inst_33345;
var inst_33320 = (0);
var state_33440__$1 = (function (){var statearr_33495 = state_33440;
(statearr_33495[(13)] = inst_33317);

(statearr_33495[(14)] = inst_33318);

(statearr_33495[(15)] = inst_33319);

(statearr_33495[(17)] = inst_33320);

return statearr_33495;
})();
var statearr_33496_33560 = state_33440__$1;
(statearr_33496_33560[(2)] = null);

(statearr_33496_33560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (11))){
var inst_33317 = (state_33440[(13)]);
var inst_33339 = (state_33440[(7)]);
var inst_33339__$1 = cljs.core.seq.call(null,inst_33317);
var state_33440__$1 = (function (){var statearr_33497 = state_33440;
(statearr_33497[(7)] = inst_33339__$1);

return statearr_33497;
})();
if(inst_33339__$1){
var statearr_33498_33561 = state_33440__$1;
(statearr_33498_33561[(1)] = (16));

} else {
var statearr_33499_33562 = state_33440__$1;
(statearr_33499_33562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (9))){
var inst_33369 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33500_33563 = state_33440__$1;
(statearr_33500_33563[(2)] = inst_33369);

(statearr_33500_33563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (5))){
var inst_33315 = cljs.core.deref.call(null,cs);
var inst_33316 = cljs.core.seq.call(null,inst_33315);
var inst_33317 = inst_33316;
var inst_33318 = null;
var inst_33319 = (0);
var inst_33320 = (0);
var state_33440__$1 = (function (){var statearr_33501 = state_33440;
(statearr_33501[(13)] = inst_33317);

(statearr_33501[(14)] = inst_33318);

(statearr_33501[(15)] = inst_33319);

(statearr_33501[(17)] = inst_33320);

return statearr_33501;
})();
var statearr_33502_33564 = state_33440__$1;
(statearr_33502_33564[(2)] = null);

(statearr_33502_33564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (14))){
var state_33440__$1 = state_33440;
var statearr_33503_33565 = state_33440__$1;
(statearr_33503_33565[(2)] = null);

(statearr_33503_33565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (45))){
var inst_33430 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33504_33566 = state_33440__$1;
(statearr_33504_33566[(2)] = inst_33430);

(statearr_33504_33566[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (26))){
var inst_33372 = (state_33440[(29)]);
var inst_33426 = (state_33440[(2)]);
var inst_33427 = cljs.core.seq.call(null,inst_33372);
var state_33440__$1 = (function (){var statearr_33505 = state_33440;
(statearr_33505[(31)] = inst_33426);

return statearr_33505;
})();
if(inst_33427){
var statearr_33506_33567 = state_33440__$1;
(statearr_33506_33567[(1)] = (42));

} else {
var statearr_33507_33568 = state_33440__$1;
(statearr_33507_33568[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (16))){
var inst_33339 = (state_33440[(7)]);
var inst_33341 = cljs.core.chunked_seq_QMARK_.call(null,inst_33339);
var state_33440__$1 = state_33440;
if(inst_33341){
var statearr_33508_33569 = state_33440__$1;
(statearr_33508_33569[(1)] = (19));

} else {
var statearr_33509_33570 = state_33440__$1;
(statearr_33509_33570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (38))){
var inst_33419 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33510_33571 = state_33440__$1;
(statearr_33510_33571[(2)] = inst_33419);

(statearr_33510_33571[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (30))){
var state_33440__$1 = state_33440;
var statearr_33511_33572 = state_33440__$1;
(statearr_33511_33572[(2)] = null);

(statearr_33511_33572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (10))){
var inst_33318 = (state_33440[(14)]);
var inst_33320 = (state_33440[(17)]);
var inst_33328 = cljs.core._nth.call(null,inst_33318,inst_33320);
var inst_33329 = cljs.core.nth.call(null,inst_33328,(0),null);
var inst_33330 = cljs.core.nth.call(null,inst_33328,(1),null);
var state_33440__$1 = (function (){var statearr_33512 = state_33440;
(statearr_33512[(26)] = inst_33329);

return statearr_33512;
})();
if(cljs.core.truth_(inst_33330)){
var statearr_33513_33573 = state_33440__$1;
(statearr_33513_33573[(1)] = (13));

} else {
var statearr_33514_33574 = state_33440__$1;
(statearr_33514_33574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (18))){
var inst_33365 = (state_33440[(2)]);
var state_33440__$1 = state_33440;
var statearr_33515_33575 = state_33440__$1;
(statearr_33515_33575[(2)] = inst_33365);

(statearr_33515_33575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (42))){
var state_33440__$1 = state_33440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33440__$1,(45),dchan);
} else {
if((state_val_33441 === (37))){
var inst_33308 = (state_33440[(9)]);
var inst_33399 = (state_33440[(25)]);
var inst_33408 = (state_33440[(23)]);
var inst_33408__$1 = cljs.core.first.call(null,inst_33399);
var inst_33409 = cljs.core.async.put_BANG_.call(null,inst_33408__$1,inst_33308,done);
var state_33440__$1 = (function (){var statearr_33516 = state_33440;
(statearr_33516[(23)] = inst_33408__$1);

return statearr_33516;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33517_33576 = state_33440__$1;
(statearr_33517_33576[(1)] = (39));

} else {
var statearr_33518_33577 = state_33440__$1;
(statearr_33518_33577[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33441 === (8))){
var inst_33319 = (state_33440[(15)]);
var inst_33320 = (state_33440[(17)]);
var inst_33322 = (inst_33320 < inst_33319);
var inst_33323 = inst_33322;
var state_33440__$1 = state_33440;
if(cljs.core.truth_(inst_33323)){
var statearr_33519_33578 = state_33440__$1;
(statearr_33519_33578[(1)] = (10));

} else {
var statearr_33520_33579 = state_33440__$1;
(statearr_33520_33579[(1)] = (11));

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
});})(c__32707__auto___33525,cs,m,dchan,dctr,done))
;
return ((function (switch__32612__auto__,c__32707__auto___33525,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32613__auto__ = null;
var cljs$core$async$mult_$_state_machine__32613__auto____0 = (function (){
var statearr_33521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33521[(0)] = cljs$core$async$mult_$_state_machine__32613__auto__);

(statearr_33521[(1)] = (1));

return statearr_33521;
});
var cljs$core$async$mult_$_state_machine__32613__auto____1 = (function (state_33440){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33522){if((e33522 instanceof Object)){
var ex__32616__auto__ = e33522;
var statearr_33523_33580 = state_33440;
(statearr_33523_33580[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33581 = state_33440;
state_33440 = G__33581;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32613__auto__ = function(state_33440){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32613__auto____1.call(this,state_33440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32613__auto____0;
cljs$core$async$mult_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32613__auto____1;
return cljs$core$async$mult_$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___33525,cs,m,dchan,dctr,done))
})();
var state__32709__auto__ = (function (){var statearr_33524 = f__32708__auto__.call(null);
(statearr_33524[(6)] = c__32707__auto___33525);

return statearr_33524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___33525,cs,m,dchan,dctr,done))
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
var G__33583 = arguments.length;
switch (G__33583) {
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
var len__4730__auto___33595 = arguments.length;
var i__4731__auto___33596 = (0);
while(true){
if((i__4731__auto___33596 < len__4730__auto___33595)){
args__4736__auto__.push((arguments[i__4731__auto___33596]));

var G__33597 = (i__4731__auto___33596 + (1));
i__4731__auto___33596 = G__33597;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33589){
var map__33590 = p__33589;
var map__33590__$1 = (((((!((map__33590 == null))))?(((((map__33590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33590):map__33590);
var opts = map__33590__$1;
var statearr_33592_33598 = state;
(statearr_33592_33598[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33590,map__33590__$1,opts){
return (function (val){
var statearr_33593_33599 = state;
(statearr_33593_33599[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33590,map__33590__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33594_33600 = state;
(statearr_33594_33600[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33585){
var G__33586 = cljs.core.first.call(null,seq33585);
var seq33585__$1 = cljs.core.next.call(null,seq33585);
var G__33587 = cljs.core.first.call(null,seq33585__$1);
var seq33585__$2 = cljs.core.next.call(null,seq33585__$1);
var G__33588 = cljs.core.first.call(null,seq33585__$2);
var seq33585__$3 = cljs.core.next.call(null,seq33585__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33586,G__33587,G__33588,seq33585__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33601 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33602){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33602 = meta33602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33603,meta33602__$1){
var self__ = this;
var _33603__$1 = this;
return (new cljs.core.async.t_cljs$core$async33601(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33602__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33603){
var self__ = this;
var _33603__$1 = this;
return self__.meta33602;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33601.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33602","meta33602",830243087,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33601";

cljs.core.async.t_cljs$core$async33601.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33601");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33601.
 */
cljs.core.async.__GT_t_cljs$core$async33601 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33601(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33602){
return (new cljs.core.async.t_cljs$core$async33601(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33602));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33601(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32707__auto___33765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33705){
var state_val_33706 = (state_33705[(1)]);
if((state_val_33706 === (7))){
var inst_33620 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
var statearr_33707_33766 = state_33705__$1;
(statearr_33707_33766[(2)] = inst_33620);

(statearr_33707_33766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (20))){
var inst_33632 = (state_33705[(7)]);
var state_33705__$1 = state_33705;
var statearr_33708_33767 = state_33705__$1;
(statearr_33708_33767[(2)] = inst_33632);

(statearr_33708_33767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (27))){
var state_33705__$1 = state_33705;
var statearr_33709_33768 = state_33705__$1;
(statearr_33709_33768[(2)] = null);

(statearr_33709_33768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (1))){
var inst_33607 = (state_33705[(8)]);
var inst_33607__$1 = calc_state.call(null);
var inst_33609 = (inst_33607__$1 == null);
var inst_33610 = cljs.core.not.call(null,inst_33609);
var state_33705__$1 = (function (){var statearr_33710 = state_33705;
(statearr_33710[(8)] = inst_33607__$1);

return statearr_33710;
})();
if(inst_33610){
var statearr_33711_33769 = state_33705__$1;
(statearr_33711_33769[(1)] = (2));

} else {
var statearr_33712_33770 = state_33705__$1;
(statearr_33712_33770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (24))){
var inst_33656 = (state_33705[(9)]);
var inst_33679 = (state_33705[(10)]);
var inst_33665 = (state_33705[(11)]);
var inst_33679__$1 = inst_33656.call(null,inst_33665);
var state_33705__$1 = (function (){var statearr_33713 = state_33705;
(statearr_33713[(10)] = inst_33679__$1);

return statearr_33713;
})();
if(cljs.core.truth_(inst_33679__$1)){
var statearr_33714_33771 = state_33705__$1;
(statearr_33714_33771[(1)] = (29));

} else {
var statearr_33715_33772 = state_33705__$1;
(statearr_33715_33772[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (4))){
var inst_33623 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
if(cljs.core.truth_(inst_33623)){
var statearr_33716_33773 = state_33705__$1;
(statearr_33716_33773[(1)] = (8));

} else {
var statearr_33717_33774 = state_33705__$1;
(statearr_33717_33774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (15))){
var inst_33650 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
if(cljs.core.truth_(inst_33650)){
var statearr_33718_33775 = state_33705__$1;
(statearr_33718_33775[(1)] = (19));

} else {
var statearr_33719_33776 = state_33705__$1;
(statearr_33719_33776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (21))){
var inst_33655 = (state_33705[(12)]);
var inst_33655__$1 = (state_33705[(2)]);
var inst_33656 = cljs.core.get.call(null,inst_33655__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33657 = cljs.core.get.call(null,inst_33655__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33658 = cljs.core.get.call(null,inst_33655__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33705__$1 = (function (){var statearr_33720 = state_33705;
(statearr_33720[(9)] = inst_33656);

(statearr_33720[(12)] = inst_33655__$1);

(statearr_33720[(13)] = inst_33657);

return statearr_33720;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33705__$1,(22),inst_33658);
} else {
if((state_val_33706 === (31))){
var inst_33687 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
if(cljs.core.truth_(inst_33687)){
var statearr_33721_33777 = state_33705__$1;
(statearr_33721_33777[(1)] = (32));

} else {
var statearr_33722_33778 = state_33705__$1;
(statearr_33722_33778[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (32))){
var inst_33664 = (state_33705[(14)]);
var state_33705__$1 = state_33705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33705__$1,(35),out,inst_33664);
} else {
if((state_val_33706 === (33))){
var inst_33655 = (state_33705[(12)]);
var inst_33632 = inst_33655;
var state_33705__$1 = (function (){var statearr_33723 = state_33705;
(statearr_33723[(7)] = inst_33632);

return statearr_33723;
})();
var statearr_33724_33779 = state_33705__$1;
(statearr_33724_33779[(2)] = null);

(statearr_33724_33779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (13))){
var inst_33632 = (state_33705[(7)]);
var inst_33639 = inst_33632.cljs$lang$protocol_mask$partition0$;
var inst_33640 = (inst_33639 & (64));
var inst_33641 = inst_33632.cljs$core$ISeq$;
var inst_33642 = (cljs.core.PROTOCOL_SENTINEL === inst_33641);
var inst_33643 = ((inst_33640) || (inst_33642));
var state_33705__$1 = state_33705;
if(cljs.core.truth_(inst_33643)){
var statearr_33725_33780 = state_33705__$1;
(statearr_33725_33780[(1)] = (16));

} else {
var statearr_33726_33781 = state_33705__$1;
(statearr_33726_33781[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (22))){
var inst_33664 = (state_33705[(14)]);
var inst_33665 = (state_33705[(11)]);
var inst_33663 = (state_33705[(2)]);
var inst_33664__$1 = cljs.core.nth.call(null,inst_33663,(0),null);
var inst_33665__$1 = cljs.core.nth.call(null,inst_33663,(1),null);
var inst_33666 = (inst_33664__$1 == null);
var inst_33667 = cljs.core._EQ_.call(null,inst_33665__$1,change);
var inst_33668 = ((inst_33666) || (inst_33667));
var state_33705__$1 = (function (){var statearr_33727 = state_33705;
(statearr_33727[(14)] = inst_33664__$1);

(statearr_33727[(11)] = inst_33665__$1);

return statearr_33727;
})();
if(cljs.core.truth_(inst_33668)){
var statearr_33728_33782 = state_33705__$1;
(statearr_33728_33782[(1)] = (23));

} else {
var statearr_33729_33783 = state_33705__$1;
(statearr_33729_33783[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (36))){
var inst_33655 = (state_33705[(12)]);
var inst_33632 = inst_33655;
var state_33705__$1 = (function (){var statearr_33730 = state_33705;
(statearr_33730[(7)] = inst_33632);

return statearr_33730;
})();
var statearr_33731_33784 = state_33705__$1;
(statearr_33731_33784[(2)] = null);

(statearr_33731_33784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (29))){
var inst_33679 = (state_33705[(10)]);
var state_33705__$1 = state_33705;
var statearr_33732_33785 = state_33705__$1;
(statearr_33732_33785[(2)] = inst_33679);

(statearr_33732_33785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (6))){
var state_33705__$1 = state_33705;
var statearr_33733_33786 = state_33705__$1;
(statearr_33733_33786[(2)] = false);

(statearr_33733_33786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (28))){
var inst_33675 = (state_33705[(2)]);
var inst_33676 = calc_state.call(null);
var inst_33632 = inst_33676;
var state_33705__$1 = (function (){var statearr_33734 = state_33705;
(statearr_33734[(7)] = inst_33632);

(statearr_33734[(15)] = inst_33675);

return statearr_33734;
})();
var statearr_33735_33787 = state_33705__$1;
(statearr_33735_33787[(2)] = null);

(statearr_33735_33787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (25))){
var inst_33701 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
var statearr_33736_33788 = state_33705__$1;
(statearr_33736_33788[(2)] = inst_33701);

(statearr_33736_33788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (34))){
var inst_33699 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
var statearr_33737_33789 = state_33705__$1;
(statearr_33737_33789[(2)] = inst_33699);

(statearr_33737_33789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (17))){
var state_33705__$1 = state_33705;
var statearr_33738_33790 = state_33705__$1;
(statearr_33738_33790[(2)] = false);

(statearr_33738_33790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (3))){
var state_33705__$1 = state_33705;
var statearr_33739_33791 = state_33705__$1;
(statearr_33739_33791[(2)] = false);

(statearr_33739_33791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (12))){
var inst_33703 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33705__$1,inst_33703);
} else {
if((state_val_33706 === (2))){
var inst_33607 = (state_33705[(8)]);
var inst_33612 = inst_33607.cljs$lang$protocol_mask$partition0$;
var inst_33613 = (inst_33612 & (64));
var inst_33614 = inst_33607.cljs$core$ISeq$;
var inst_33615 = (cljs.core.PROTOCOL_SENTINEL === inst_33614);
var inst_33616 = ((inst_33613) || (inst_33615));
var state_33705__$1 = state_33705;
if(cljs.core.truth_(inst_33616)){
var statearr_33740_33792 = state_33705__$1;
(statearr_33740_33792[(1)] = (5));

} else {
var statearr_33741_33793 = state_33705__$1;
(statearr_33741_33793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (23))){
var inst_33664 = (state_33705[(14)]);
var inst_33670 = (inst_33664 == null);
var state_33705__$1 = state_33705;
if(cljs.core.truth_(inst_33670)){
var statearr_33742_33794 = state_33705__$1;
(statearr_33742_33794[(1)] = (26));

} else {
var statearr_33743_33795 = state_33705__$1;
(statearr_33743_33795[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (35))){
var inst_33690 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
if(cljs.core.truth_(inst_33690)){
var statearr_33744_33796 = state_33705__$1;
(statearr_33744_33796[(1)] = (36));

} else {
var statearr_33745_33797 = state_33705__$1;
(statearr_33745_33797[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (19))){
var inst_33632 = (state_33705[(7)]);
var inst_33652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33632);
var state_33705__$1 = state_33705;
var statearr_33746_33798 = state_33705__$1;
(statearr_33746_33798[(2)] = inst_33652);

(statearr_33746_33798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (11))){
var inst_33632 = (state_33705[(7)]);
var inst_33636 = (inst_33632 == null);
var inst_33637 = cljs.core.not.call(null,inst_33636);
var state_33705__$1 = state_33705;
if(inst_33637){
var statearr_33747_33799 = state_33705__$1;
(statearr_33747_33799[(1)] = (13));

} else {
var statearr_33748_33800 = state_33705__$1;
(statearr_33748_33800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (9))){
var inst_33607 = (state_33705[(8)]);
var state_33705__$1 = state_33705;
var statearr_33749_33801 = state_33705__$1;
(statearr_33749_33801[(2)] = inst_33607);

(statearr_33749_33801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (5))){
var state_33705__$1 = state_33705;
var statearr_33750_33802 = state_33705__$1;
(statearr_33750_33802[(2)] = true);

(statearr_33750_33802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (14))){
var state_33705__$1 = state_33705;
var statearr_33751_33803 = state_33705__$1;
(statearr_33751_33803[(2)] = false);

(statearr_33751_33803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (26))){
var inst_33665 = (state_33705[(11)]);
var inst_33672 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33665);
var state_33705__$1 = state_33705;
var statearr_33752_33804 = state_33705__$1;
(statearr_33752_33804[(2)] = inst_33672);

(statearr_33752_33804[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (16))){
var state_33705__$1 = state_33705;
var statearr_33753_33805 = state_33705__$1;
(statearr_33753_33805[(2)] = true);

(statearr_33753_33805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (38))){
var inst_33695 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
var statearr_33754_33806 = state_33705__$1;
(statearr_33754_33806[(2)] = inst_33695);

(statearr_33754_33806[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (30))){
var inst_33656 = (state_33705[(9)]);
var inst_33665 = (state_33705[(11)]);
var inst_33657 = (state_33705[(13)]);
var inst_33682 = cljs.core.empty_QMARK_.call(null,inst_33656);
var inst_33683 = inst_33657.call(null,inst_33665);
var inst_33684 = cljs.core.not.call(null,inst_33683);
var inst_33685 = ((inst_33682) && (inst_33684));
var state_33705__$1 = state_33705;
var statearr_33755_33807 = state_33705__$1;
(statearr_33755_33807[(2)] = inst_33685);

(statearr_33755_33807[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (10))){
var inst_33607 = (state_33705[(8)]);
var inst_33628 = (state_33705[(2)]);
var inst_33629 = cljs.core.get.call(null,inst_33628,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33630 = cljs.core.get.call(null,inst_33628,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33631 = cljs.core.get.call(null,inst_33628,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33632 = inst_33607;
var state_33705__$1 = (function (){var statearr_33756 = state_33705;
(statearr_33756[(7)] = inst_33632);

(statearr_33756[(16)] = inst_33629);

(statearr_33756[(17)] = inst_33630);

(statearr_33756[(18)] = inst_33631);

return statearr_33756;
})();
var statearr_33757_33808 = state_33705__$1;
(statearr_33757_33808[(2)] = null);

(statearr_33757_33808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (18))){
var inst_33647 = (state_33705[(2)]);
var state_33705__$1 = state_33705;
var statearr_33758_33809 = state_33705__$1;
(statearr_33758_33809[(2)] = inst_33647);

(statearr_33758_33809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (37))){
var state_33705__$1 = state_33705;
var statearr_33759_33810 = state_33705__$1;
(statearr_33759_33810[(2)] = null);

(statearr_33759_33810[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33706 === (8))){
var inst_33607 = (state_33705[(8)]);
var inst_33625 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33607);
var state_33705__$1 = state_33705;
var statearr_33760_33811 = state_33705__$1;
(statearr_33760_33811[(2)] = inst_33625);

(statearr_33760_33811[(1)] = (10));


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
});})(c__32707__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32612__auto__,c__32707__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32613__auto__ = null;
var cljs$core$async$mix_$_state_machine__32613__auto____0 = (function (){
var statearr_33761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33761[(0)] = cljs$core$async$mix_$_state_machine__32613__auto__);

(statearr_33761[(1)] = (1));

return statearr_33761;
});
var cljs$core$async$mix_$_state_machine__32613__auto____1 = (function (state_33705){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33762){if((e33762 instanceof Object)){
var ex__32616__auto__ = e33762;
var statearr_33763_33812 = state_33705;
(statearr_33763_33812[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33813 = state_33705;
state_33705 = G__33813;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32613__auto__ = function(state_33705){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32613__auto____1.call(this,state_33705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32613__auto____0;
cljs$core$async$mix_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32613__auto____1;
return cljs$core$async$mix_$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32709__auto__ = (function (){var statearr_33764 = f__32708__auto__.call(null);
(statearr_33764[(6)] = c__32707__auto___33765);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33815 = arguments.length;
switch (G__33815) {
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
var G__33819 = arguments.length;
switch (G__33819) {
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
return (function (p1__33817_SHARP_){
if(cljs.core.truth_(p1__33817_SHARP_.call(null,topic))){
return p1__33817_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33817_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33820 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33821){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33821 = meta33821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33822,meta33821__$1){
var self__ = this;
var _33822__$1 = this;
return (new cljs.core.async.t_cljs$core$async33820(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33821__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33822){
var self__ = this;
var _33822__$1 = this;
return self__.meta33821;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33820.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33821","meta33821",2107366783,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33820";

cljs.core.async.t_cljs$core$async33820.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33820");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33820.
 */
cljs.core.async.__GT_t_cljs$core$async33820 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33820(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33821){
return (new cljs.core.async.t_cljs$core$async33820(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33821));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33820(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32707__auto___33940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___33940,mults,ensure_mult,p){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___33940,mults,ensure_mult,p){
return (function (state_33894){
var state_val_33895 = (state_33894[(1)]);
if((state_val_33895 === (7))){
var inst_33890 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33896_33941 = state_33894__$1;
(statearr_33896_33941[(2)] = inst_33890);

(statearr_33896_33941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (20))){
var state_33894__$1 = state_33894;
var statearr_33897_33942 = state_33894__$1;
(statearr_33897_33942[(2)] = null);

(statearr_33897_33942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (1))){
var state_33894__$1 = state_33894;
var statearr_33898_33943 = state_33894__$1;
(statearr_33898_33943[(2)] = null);

(statearr_33898_33943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (24))){
var inst_33873 = (state_33894[(7)]);
var inst_33882 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33873);
var state_33894__$1 = state_33894;
var statearr_33899_33944 = state_33894__$1;
(statearr_33899_33944[(2)] = inst_33882);

(statearr_33899_33944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (4))){
var inst_33825 = (state_33894[(8)]);
var inst_33825__$1 = (state_33894[(2)]);
var inst_33826 = (inst_33825__$1 == null);
var state_33894__$1 = (function (){var statearr_33900 = state_33894;
(statearr_33900[(8)] = inst_33825__$1);

return statearr_33900;
})();
if(cljs.core.truth_(inst_33826)){
var statearr_33901_33945 = state_33894__$1;
(statearr_33901_33945[(1)] = (5));

} else {
var statearr_33902_33946 = state_33894__$1;
(statearr_33902_33946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (15))){
var inst_33867 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33903_33947 = state_33894__$1;
(statearr_33903_33947[(2)] = inst_33867);

(statearr_33903_33947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (21))){
var inst_33887 = (state_33894[(2)]);
var state_33894__$1 = (function (){var statearr_33904 = state_33894;
(statearr_33904[(9)] = inst_33887);

return statearr_33904;
})();
var statearr_33905_33948 = state_33894__$1;
(statearr_33905_33948[(2)] = null);

(statearr_33905_33948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (13))){
var inst_33849 = (state_33894[(10)]);
var inst_33851 = cljs.core.chunked_seq_QMARK_.call(null,inst_33849);
var state_33894__$1 = state_33894;
if(inst_33851){
var statearr_33906_33949 = state_33894__$1;
(statearr_33906_33949[(1)] = (16));

} else {
var statearr_33907_33950 = state_33894__$1;
(statearr_33907_33950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (22))){
var inst_33879 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
if(cljs.core.truth_(inst_33879)){
var statearr_33908_33951 = state_33894__$1;
(statearr_33908_33951[(1)] = (23));

} else {
var statearr_33909_33952 = state_33894__$1;
(statearr_33909_33952[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (6))){
var inst_33873 = (state_33894[(7)]);
var inst_33875 = (state_33894[(11)]);
var inst_33825 = (state_33894[(8)]);
var inst_33873__$1 = topic_fn.call(null,inst_33825);
var inst_33874 = cljs.core.deref.call(null,mults);
var inst_33875__$1 = cljs.core.get.call(null,inst_33874,inst_33873__$1);
var state_33894__$1 = (function (){var statearr_33910 = state_33894;
(statearr_33910[(7)] = inst_33873__$1);

(statearr_33910[(11)] = inst_33875__$1);

return statearr_33910;
})();
if(cljs.core.truth_(inst_33875__$1)){
var statearr_33911_33953 = state_33894__$1;
(statearr_33911_33953[(1)] = (19));

} else {
var statearr_33912_33954 = state_33894__$1;
(statearr_33912_33954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (25))){
var inst_33884 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33913_33955 = state_33894__$1;
(statearr_33913_33955[(2)] = inst_33884);

(statearr_33913_33955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (17))){
var inst_33849 = (state_33894[(10)]);
var inst_33858 = cljs.core.first.call(null,inst_33849);
var inst_33859 = cljs.core.async.muxch_STAR_.call(null,inst_33858);
var inst_33860 = cljs.core.async.close_BANG_.call(null,inst_33859);
var inst_33861 = cljs.core.next.call(null,inst_33849);
var inst_33835 = inst_33861;
var inst_33836 = null;
var inst_33837 = (0);
var inst_33838 = (0);
var state_33894__$1 = (function (){var statearr_33914 = state_33894;
(statearr_33914[(12)] = inst_33860);

(statearr_33914[(13)] = inst_33837);

(statearr_33914[(14)] = inst_33836);

(statearr_33914[(15)] = inst_33838);

(statearr_33914[(16)] = inst_33835);

return statearr_33914;
})();
var statearr_33915_33956 = state_33894__$1;
(statearr_33915_33956[(2)] = null);

(statearr_33915_33956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (3))){
var inst_33892 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33894__$1,inst_33892);
} else {
if((state_val_33895 === (12))){
var inst_33869 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33916_33957 = state_33894__$1;
(statearr_33916_33957[(2)] = inst_33869);

(statearr_33916_33957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (2))){
var state_33894__$1 = state_33894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33894__$1,(4),ch);
} else {
if((state_val_33895 === (23))){
var state_33894__$1 = state_33894;
var statearr_33917_33958 = state_33894__$1;
(statearr_33917_33958[(2)] = null);

(statearr_33917_33958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (19))){
var inst_33875 = (state_33894[(11)]);
var inst_33825 = (state_33894[(8)]);
var inst_33877 = cljs.core.async.muxch_STAR_.call(null,inst_33875);
var state_33894__$1 = state_33894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33894__$1,(22),inst_33877,inst_33825);
} else {
if((state_val_33895 === (11))){
var inst_33849 = (state_33894[(10)]);
var inst_33835 = (state_33894[(16)]);
var inst_33849__$1 = cljs.core.seq.call(null,inst_33835);
var state_33894__$1 = (function (){var statearr_33918 = state_33894;
(statearr_33918[(10)] = inst_33849__$1);

return statearr_33918;
})();
if(inst_33849__$1){
var statearr_33919_33959 = state_33894__$1;
(statearr_33919_33959[(1)] = (13));

} else {
var statearr_33920_33960 = state_33894__$1;
(statearr_33920_33960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (9))){
var inst_33871 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33921_33961 = state_33894__$1;
(statearr_33921_33961[(2)] = inst_33871);

(statearr_33921_33961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (5))){
var inst_33832 = cljs.core.deref.call(null,mults);
var inst_33833 = cljs.core.vals.call(null,inst_33832);
var inst_33834 = cljs.core.seq.call(null,inst_33833);
var inst_33835 = inst_33834;
var inst_33836 = null;
var inst_33837 = (0);
var inst_33838 = (0);
var state_33894__$1 = (function (){var statearr_33922 = state_33894;
(statearr_33922[(13)] = inst_33837);

(statearr_33922[(14)] = inst_33836);

(statearr_33922[(15)] = inst_33838);

(statearr_33922[(16)] = inst_33835);

return statearr_33922;
})();
var statearr_33923_33962 = state_33894__$1;
(statearr_33923_33962[(2)] = null);

(statearr_33923_33962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (14))){
var state_33894__$1 = state_33894;
var statearr_33927_33963 = state_33894__$1;
(statearr_33927_33963[(2)] = null);

(statearr_33927_33963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (16))){
var inst_33849 = (state_33894[(10)]);
var inst_33853 = cljs.core.chunk_first.call(null,inst_33849);
var inst_33854 = cljs.core.chunk_rest.call(null,inst_33849);
var inst_33855 = cljs.core.count.call(null,inst_33853);
var inst_33835 = inst_33854;
var inst_33836 = inst_33853;
var inst_33837 = inst_33855;
var inst_33838 = (0);
var state_33894__$1 = (function (){var statearr_33928 = state_33894;
(statearr_33928[(13)] = inst_33837);

(statearr_33928[(14)] = inst_33836);

(statearr_33928[(15)] = inst_33838);

(statearr_33928[(16)] = inst_33835);

return statearr_33928;
})();
var statearr_33929_33964 = state_33894__$1;
(statearr_33929_33964[(2)] = null);

(statearr_33929_33964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (10))){
var inst_33837 = (state_33894[(13)]);
var inst_33836 = (state_33894[(14)]);
var inst_33838 = (state_33894[(15)]);
var inst_33835 = (state_33894[(16)]);
var inst_33843 = cljs.core._nth.call(null,inst_33836,inst_33838);
var inst_33844 = cljs.core.async.muxch_STAR_.call(null,inst_33843);
var inst_33845 = cljs.core.async.close_BANG_.call(null,inst_33844);
var inst_33846 = (inst_33838 + (1));
var tmp33924 = inst_33837;
var tmp33925 = inst_33836;
var tmp33926 = inst_33835;
var inst_33835__$1 = tmp33926;
var inst_33836__$1 = tmp33925;
var inst_33837__$1 = tmp33924;
var inst_33838__$1 = inst_33846;
var state_33894__$1 = (function (){var statearr_33930 = state_33894;
(statearr_33930[(13)] = inst_33837__$1);

(statearr_33930[(14)] = inst_33836__$1);

(statearr_33930[(17)] = inst_33845);

(statearr_33930[(15)] = inst_33838__$1);

(statearr_33930[(16)] = inst_33835__$1);

return statearr_33930;
})();
var statearr_33931_33965 = state_33894__$1;
(statearr_33931_33965[(2)] = null);

(statearr_33931_33965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (18))){
var inst_33864 = (state_33894[(2)]);
var state_33894__$1 = state_33894;
var statearr_33932_33966 = state_33894__$1;
(statearr_33932_33966[(2)] = inst_33864);

(statearr_33932_33966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33895 === (8))){
var inst_33837 = (state_33894[(13)]);
var inst_33838 = (state_33894[(15)]);
var inst_33840 = (inst_33838 < inst_33837);
var inst_33841 = inst_33840;
var state_33894__$1 = state_33894;
if(cljs.core.truth_(inst_33841)){
var statearr_33933_33967 = state_33894__$1;
(statearr_33933_33967[(1)] = (10));

} else {
var statearr_33934_33968 = state_33894__$1;
(statearr_33934_33968[(1)] = (11));

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
});})(c__32707__auto___33940,mults,ensure_mult,p))
;
return ((function (switch__32612__auto__,c__32707__auto___33940,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_33935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33935[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_33935[(1)] = (1));

return statearr_33935;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_33894){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_33894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e33936){if((e33936 instanceof Object)){
var ex__32616__auto__ = e33936;
var statearr_33937_33969 = state_33894;
(statearr_33937_33969[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33970 = state_33894;
state_33894 = G__33970;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_33894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_33894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___33940,mults,ensure_mult,p))
})();
var state__32709__auto__ = (function (){var statearr_33938 = f__32708__auto__.call(null);
(statearr_33938[(6)] = c__32707__auto___33940);

return statearr_33938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___33940,mults,ensure_mult,p))
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
var G__33972 = arguments.length;
switch (G__33972) {
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
var G__33975 = arguments.length;
switch (G__33975) {
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
var G__33978 = arguments.length;
switch (G__33978) {
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
var c__32707__auto___34045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___34045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___34045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34017){
var state_val_34018 = (state_34017[(1)]);
if((state_val_34018 === (7))){
var state_34017__$1 = state_34017;
var statearr_34019_34046 = state_34017__$1;
(statearr_34019_34046[(2)] = null);

(statearr_34019_34046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (1))){
var state_34017__$1 = state_34017;
var statearr_34020_34047 = state_34017__$1;
(statearr_34020_34047[(2)] = null);

(statearr_34020_34047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (4))){
var inst_33981 = (state_34017[(7)]);
var inst_33983 = (inst_33981 < cnt);
var state_34017__$1 = state_34017;
if(cljs.core.truth_(inst_33983)){
var statearr_34021_34048 = state_34017__$1;
(statearr_34021_34048[(1)] = (6));

} else {
var statearr_34022_34049 = state_34017__$1;
(statearr_34022_34049[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (15))){
var inst_34013 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34023_34050 = state_34017__$1;
(statearr_34023_34050[(2)] = inst_34013);

(statearr_34023_34050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (13))){
var inst_34006 = cljs.core.async.close_BANG_.call(null,out);
var state_34017__$1 = state_34017;
var statearr_34024_34051 = state_34017__$1;
(statearr_34024_34051[(2)] = inst_34006);

(statearr_34024_34051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (6))){
var state_34017__$1 = state_34017;
var statearr_34025_34052 = state_34017__$1;
(statearr_34025_34052[(2)] = null);

(statearr_34025_34052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (3))){
var inst_34015 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34017__$1,inst_34015);
} else {
if((state_val_34018 === (12))){
var inst_34003 = (state_34017[(8)]);
var inst_34003__$1 = (state_34017[(2)]);
var inst_34004 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34003__$1);
var state_34017__$1 = (function (){var statearr_34026 = state_34017;
(statearr_34026[(8)] = inst_34003__$1);

return statearr_34026;
})();
if(cljs.core.truth_(inst_34004)){
var statearr_34027_34053 = state_34017__$1;
(statearr_34027_34053[(1)] = (13));

} else {
var statearr_34028_34054 = state_34017__$1;
(statearr_34028_34054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (2))){
var inst_33980 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33981 = (0);
var state_34017__$1 = (function (){var statearr_34029 = state_34017;
(statearr_34029[(7)] = inst_33981);

(statearr_34029[(9)] = inst_33980);

return statearr_34029;
})();
var statearr_34030_34055 = state_34017__$1;
(statearr_34030_34055[(2)] = null);

(statearr_34030_34055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (11))){
var inst_33981 = (state_34017[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34017,(10),Object,null,(9));
var inst_33990 = chs__$1.call(null,inst_33981);
var inst_33991 = done.call(null,inst_33981);
var inst_33992 = cljs.core.async.take_BANG_.call(null,inst_33990,inst_33991);
var state_34017__$1 = state_34017;
var statearr_34031_34056 = state_34017__$1;
(statearr_34031_34056[(2)] = inst_33992);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34017__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (9))){
var inst_33981 = (state_34017[(7)]);
var inst_33994 = (state_34017[(2)]);
var inst_33995 = (inst_33981 + (1));
var inst_33981__$1 = inst_33995;
var state_34017__$1 = (function (){var statearr_34032 = state_34017;
(statearr_34032[(7)] = inst_33981__$1);

(statearr_34032[(10)] = inst_33994);

return statearr_34032;
})();
var statearr_34033_34057 = state_34017__$1;
(statearr_34033_34057[(2)] = null);

(statearr_34033_34057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (5))){
var inst_34001 = (state_34017[(2)]);
var state_34017__$1 = (function (){var statearr_34034 = state_34017;
(statearr_34034[(11)] = inst_34001);

return statearr_34034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34017__$1,(12),dchan);
} else {
if((state_val_34018 === (14))){
var inst_34003 = (state_34017[(8)]);
var inst_34008 = cljs.core.apply.call(null,f,inst_34003);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34017__$1,(16),out,inst_34008);
} else {
if((state_val_34018 === (16))){
var inst_34010 = (state_34017[(2)]);
var state_34017__$1 = (function (){var statearr_34035 = state_34017;
(statearr_34035[(12)] = inst_34010);

return statearr_34035;
})();
var statearr_34036_34058 = state_34017__$1;
(statearr_34036_34058[(2)] = null);

(statearr_34036_34058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (10))){
var inst_33985 = (state_34017[(2)]);
var inst_33986 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34017__$1 = (function (){var statearr_34037 = state_34017;
(statearr_34037[(13)] = inst_33985);

return statearr_34037;
})();
var statearr_34038_34059 = state_34017__$1;
(statearr_34038_34059[(2)] = inst_33986);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34017__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (8))){
var inst_33999 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34039_34060 = state_34017__$1;
(statearr_34039_34060[(2)] = inst_33999);

(statearr_34039_34060[(1)] = (5));


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
});})(c__32707__auto___34045,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32612__auto__,c__32707__auto___34045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_34040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34040[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_34040[(1)] = (1));

return statearr_34040;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_34017){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34041){if((e34041 instanceof Object)){
var ex__32616__auto__ = e34041;
var statearr_34042_34061 = state_34017;
(statearr_34042_34061[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34062 = state_34017;
state_34017 = G__34062;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_34017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_34017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___34045,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32709__auto__ = (function (){var statearr_34043 = f__32708__auto__.call(null);
(statearr_34043[(6)] = c__32707__auto___34045);

return statearr_34043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___34045,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34065 = arguments.length;
switch (G__34065) {
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
var c__32707__auto___34119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___34119,out){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___34119,out){
return (function (state_34097){
var state_val_34098 = (state_34097[(1)]);
if((state_val_34098 === (7))){
var inst_34077 = (state_34097[(7)]);
var inst_34076 = (state_34097[(8)]);
var inst_34076__$1 = (state_34097[(2)]);
var inst_34077__$1 = cljs.core.nth.call(null,inst_34076__$1,(0),null);
var inst_34078 = cljs.core.nth.call(null,inst_34076__$1,(1),null);
var inst_34079 = (inst_34077__$1 == null);
var state_34097__$1 = (function (){var statearr_34099 = state_34097;
(statearr_34099[(7)] = inst_34077__$1);

(statearr_34099[(8)] = inst_34076__$1);

(statearr_34099[(9)] = inst_34078);

return statearr_34099;
})();
if(cljs.core.truth_(inst_34079)){
var statearr_34100_34120 = state_34097__$1;
(statearr_34100_34120[(1)] = (8));

} else {
var statearr_34101_34121 = state_34097__$1;
(statearr_34101_34121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (1))){
var inst_34066 = cljs.core.vec.call(null,chs);
var inst_34067 = inst_34066;
var state_34097__$1 = (function (){var statearr_34102 = state_34097;
(statearr_34102[(10)] = inst_34067);

return statearr_34102;
})();
var statearr_34103_34122 = state_34097__$1;
(statearr_34103_34122[(2)] = null);

(statearr_34103_34122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (4))){
var inst_34067 = (state_34097[(10)]);
var state_34097__$1 = state_34097;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34097__$1,(7),inst_34067);
} else {
if((state_val_34098 === (6))){
var inst_34093 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34104_34123 = state_34097__$1;
(statearr_34104_34123[(2)] = inst_34093);

(statearr_34104_34123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (3))){
var inst_34095 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34097__$1,inst_34095);
} else {
if((state_val_34098 === (2))){
var inst_34067 = (state_34097[(10)]);
var inst_34069 = cljs.core.count.call(null,inst_34067);
var inst_34070 = (inst_34069 > (0));
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34070)){
var statearr_34106_34124 = state_34097__$1;
(statearr_34106_34124[(1)] = (4));

} else {
var statearr_34107_34125 = state_34097__$1;
(statearr_34107_34125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (11))){
var inst_34067 = (state_34097[(10)]);
var inst_34086 = (state_34097[(2)]);
var tmp34105 = inst_34067;
var inst_34067__$1 = tmp34105;
var state_34097__$1 = (function (){var statearr_34108 = state_34097;
(statearr_34108[(11)] = inst_34086);

(statearr_34108[(10)] = inst_34067__$1);

return statearr_34108;
})();
var statearr_34109_34126 = state_34097__$1;
(statearr_34109_34126[(2)] = null);

(statearr_34109_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (9))){
var inst_34077 = (state_34097[(7)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34097__$1,(11),out,inst_34077);
} else {
if((state_val_34098 === (5))){
var inst_34091 = cljs.core.async.close_BANG_.call(null,out);
var state_34097__$1 = state_34097;
var statearr_34110_34127 = state_34097__$1;
(statearr_34110_34127[(2)] = inst_34091);

(statearr_34110_34127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (10))){
var inst_34089 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34111_34128 = state_34097__$1;
(statearr_34111_34128[(2)] = inst_34089);

(statearr_34111_34128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (8))){
var inst_34077 = (state_34097[(7)]);
var inst_34076 = (state_34097[(8)]);
var inst_34078 = (state_34097[(9)]);
var inst_34067 = (state_34097[(10)]);
var inst_34081 = (function (){var cs = inst_34067;
var vec__34072 = inst_34076;
var v = inst_34077;
var c = inst_34078;
return ((function (cs,vec__34072,v,c,inst_34077,inst_34076,inst_34078,inst_34067,state_val_34098,c__32707__auto___34119,out){
return (function (p1__34063_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34063_SHARP_);
});
;})(cs,vec__34072,v,c,inst_34077,inst_34076,inst_34078,inst_34067,state_val_34098,c__32707__auto___34119,out))
})();
var inst_34082 = cljs.core.filterv.call(null,inst_34081,inst_34067);
var inst_34067__$1 = inst_34082;
var state_34097__$1 = (function (){var statearr_34112 = state_34097;
(statearr_34112[(10)] = inst_34067__$1);

return statearr_34112;
})();
var statearr_34113_34129 = state_34097__$1;
(statearr_34113_34129[(2)] = null);

(statearr_34113_34129[(1)] = (2));


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
});})(c__32707__auto___34119,out))
;
return ((function (switch__32612__auto__,c__32707__auto___34119,out){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_34114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34114[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_34114[(1)] = (1));

return statearr_34114;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_34097){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34115){if((e34115 instanceof Object)){
var ex__32616__auto__ = e34115;
var statearr_34116_34130 = state_34097;
(statearr_34116_34130[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34131 = state_34097;
state_34097 = G__34131;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_34097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_34097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___34119,out))
})();
var state__32709__auto__ = (function (){var statearr_34117 = f__32708__auto__.call(null);
(statearr_34117[(6)] = c__32707__auto___34119);

return statearr_34117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___34119,out))
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
var G__34133 = arguments.length;
switch (G__34133) {
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
var c__32707__auto___34178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___34178,out){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___34178,out){
return (function (state_34157){
var state_val_34158 = (state_34157[(1)]);
if((state_val_34158 === (7))){
var inst_34139 = (state_34157[(7)]);
var inst_34139__$1 = (state_34157[(2)]);
var inst_34140 = (inst_34139__$1 == null);
var inst_34141 = cljs.core.not.call(null,inst_34140);
var state_34157__$1 = (function (){var statearr_34159 = state_34157;
(statearr_34159[(7)] = inst_34139__$1);

return statearr_34159;
})();
if(inst_34141){
var statearr_34160_34179 = state_34157__$1;
(statearr_34160_34179[(1)] = (8));

} else {
var statearr_34161_34180 = state_34157__$1;
(statearr_34161_34180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (1))){
var inst_34134 = (0);
var state_34157__$1 = (function (){var statearr_34162 = state_34157;
(statearr_34162[(8)] = inst_34134);

return statearr_34162;
})();
var statearr_34163_34181 = state_34157__$1;
(statearr_34163_34181[(2)] = null);

(statearr_34163_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (4))){
var state_34157__$1 = state_34157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34157__$1,(7),ch);
} else {
if((state_val_34158 === (6))){
var inst_34152 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
var statearr_34164_34182 = state_34157__$1;
(statearr_34164_34182[(2)] = inst_34152);

(statearr_34164_34182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (3))){
var inst_34154 = (state_34157[(2)]);
var inst_34155 = cljs.core.async.close_BANG_.call(null,out);
var state_34157__$1 = (function (){var statearr_34165 = state_34157;
(statearr_34165[(9)] = inst_34154);

return statearr_34165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34157__$1,inst_34155);
} else {
if((state_val_34158 === (2))){
var inst_34134 = (state_34157[(8)]);
var inst_34136 = (inst_34134 < n);
var state_34157__$1 = state_34157;
if(cljs.core.truth_(inst_34136)){
var statearr_34166_34183 = state_34157__$1;
(statearr_34166_34183[(1)] = (4));

} else {
var statearr_34167_34184 = state_34157__$1;
(statearr_34167_34184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (11))){
var inst_34134 = (state_34157[(8)]);
var inst_34144 = (state_34157[(2)]);
var inst_34145 = (inst_34134 + (1));
var inst_34134__$1 = inst_34145;
var state_34157__$1 = (function (){var statearr_34168 = state_34157;
(statearr_34168[(10)] = inst_34144);

(statearr_34168[(8)] = inst_34134__$1);

return statearr_34168;
})();
var statearr_34169_34185 = state_34157__$1;
(statearr_34169_34185[(2)] = null);

(statearr_34169_34185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (9))){
var state_34157__$1 = state_34157;
var statearr_34170_34186 = state_34157__$1;
(statearr_34170_34186[(2)] = null);

(statearr_34170_34186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (5))){
var state_34157__$1 = state_34157;
var statearr_34171_34187 = state_34157__$1;
(statearr_34171_34187[(2)] = null);

(statearr_34171_34187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (10))){
var inst_34149 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
var statearr_34172_34188 = state_34157__$1;
(statearr_34172_34188[(2)] = inst_34149);

(statearr_34172_34188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (8))){
var inst_34139 = (state_34157[(7)]);
var state_34157__$1 = state_34157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34157__$1,(11),out,inst_34139);
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
});})(c__32707__auto___34178,out))
;
return ((function (switch__32612__auto__,c__32707__auto___34178,out){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_34173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34173[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_34173[(1)] = (1));

return statearr_34173;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_34157){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34174){if((e34174 instanceof Object)){
var ex__32616__auto__ = e34174;
var statearr_34175_34189 = state_34157;
(statearr_34175_34189[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34190 = state_34157;
state_34157 = G__34190;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_34157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_34157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___34178,out))
})();
var state__32709__auto__ = (function (){var statearr_34176 = f__32708__auto__.call(null);
(statearr_34176[(6)] = c__32707__auto___34178);

return statearr_34176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___34178,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34192 = (function (f,ch,meta34193){
this.f = f;
this.ch = ch;
this.meta34193 = meta34193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34194,meta34193__$1){
var self__ = this;
var _34194__$1 = this;
return (new cljs.core.async.t_cljs$core$async34192(self__.f,self__.ch,meta34193__$1));
});

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34194){
var self__ = this;
var _34194__$1 = this;
return self__.meta34193;
});

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34195 = (function (f,ch,meta34193,_,fn1,meta34196){
this.f = f;
this.ch = ch;
this.meta34193 = meta34193;
this._ = _;
this.fn1 = fn1;
this.meta34196 = meta34196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34197,meta34196__$1){
var self__ = this;
var _34197__$1 = this;
return (new cljs.core.async.t_cljs$core$async34195(self__.f,self__.ch,self__.meta34193,self__._,self__.fn1,meta34196__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34197){
var self__ = this;
var _34197__$1 = this;
return self__.meta34196;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34191_SHARP_){
return f1.call(null,(((p1__34191_SHARP_ == null))?null:self__.f.call(null,p1__34191_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34195.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34193","meta34193",-813471741,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34192","cljs.core.async/t_cljs$core$async34192",-575684678,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34196","meta34196",-1363812980,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34195";

cljs.core.async.t_cljs$core$async34195.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34195");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34195.
 */
cljs.core.async.__GT_t_cljs$core$async34195 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34195(f__$1,ch__$1,meta34193__$1,___$2,fn1__$1,meta34196){
return (new cljs.core.async.t_cljs$core$async34195(f__$1,ch__$1,meta34193__$1,___$2,fn1__$1,meta34196));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34195(self__.f,self__.ch,self__.meta34193,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34193","meta34193",-813471741,null)], null);
});

cljs.core.async.t_cljs$core$async34192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34192";

cljs.core.async.t_cljs$core$async34192.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34192");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34192.
 */
cljs.core.async.__GT_t_cljs$core$async34192 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34192(f__$1,ch__$1,meta34193){
return (new cljs.core.async.t_cljs$core$async34192(f__$1,ch__$1,meta34193));
});

}

return (new cljs.core.async.t_cljs$core$async34192(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34198 = (function (f,ch,meta34199){
this.f = f;
this.ch = ch;
this.meta34199 = meta34199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34200,meta34199__$1){
var self__ = this;
var _34200__$1 = this;
return (new cljs.core.async.t_cljs$core$async34198(self__.f,self__.ch,meta34199__$1));
});

cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34200){
var self__ = this;
var _34200__$1 = this;
return self__.meta34199;
});

cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34198.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34199","meta34199",-750347878,null)], null);
});

cljs.core.async.t_cljs$core$async34198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34198";

cljs.core.async.t_cljs$core$async34198.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34198");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34198.
 */
cljs.core.async.__GT_t_cljs$core$async34198 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34198(f__$1,ch__$1,meta34199){
return (new cljs.core.async.t_cljs$core$async34198(f__$1,ch__$1,meta34199));
});

}

return (new cljs.core.async.t_cljs$core$async34198(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34201 = (function (p,ch,meta34202){
this.p = p;
this.ch = ch;
this.meta34202 = meta34202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34203,meta34202__$1){
var self__ = this;
var _34203__$1 = this;
return (new cljs.core.async.t_cljs$core$async34201(self__.p,self__.ch,meta34202__$1));
});

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34203){
var self__ = this;
var _34203__$1 = this;
return self__.meta34202;
});

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34202","meta34202",-1437417265,null)], null);
});

cljs.core.async.t_cljs$core$async34201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34201";

cljs.core.async.t_cljs$core$async34201.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34201");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34201.
 */
cljs.core.async.__GT_t_cljs$core$async34201 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34201(p__$1,ch__$1,meta34202){
return (new cljs.core.async.t_cljs$core$async34201(p__$1,ch__$1,meta34202));
});

}

return (new cljs.core.async.t_cljs$core$async34201(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34205 = arguments.length;
switch (G__34205) {
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
var c__32707__auto___34245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___34245,out){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___34245,out){
return (function (state_34226){
var state_val_34227 = (state_34226[(1)]);
if((state_val_34227 === (7))){
var inst_34222 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
var statearr_34228_34246 = state_34226__$1;
(statearr_34228_34246[(2)] = inst_34222);

(statearr_34228_34246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (1))){
var state_34226__$1 = state_34226;
var statearr_34229_34247 = state_34226__$1;
(statearr_34229_34247[(2)] = null);

(statearr_34229_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (4))){
var inst_34208 = (state_34226[(7)]);
var inst_34208__$1 = (state_34226[(2)]);
var inst_34209 = (inst_34208__$1 == null);
var state_34226__$1 = (function (){var statearr_34230 = state_34226;
(statearr_34230[(7)] = inst_34208__$1);

return statearr_34230;
})();
if(cljs.core.truth_(inst_34209)){
var statearr_34231_34248 = state_34226__$1;
(statearr_34231_34248[(1)] = (5));

} else {
var statearr_34232_34249 = state_34226__$1;
(statearr_34232_34249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (6))){
var inst_34208 = (state_34226[(7)]);
var inst_34213 = p.call(null,inst_34208);
var state_34226__$1 = state_34226;
if(cljs.core.truth_(inst_34213)){
var statearr_34233_34250 = state_34226__$1;
(statearr_34233_34250[(1)] = (8));

} else {
var statearr_34234_34251 = state_34226__$1;
(statearr_34234_34251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (3))){
var inst_34224 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34226__$1,inst_34224);
} else {
if((state_val_34227 === (2))){
var state_34226__$1 = state_34226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34226__$1,(4),ch);
} else {
if((state_val_34227 === (11))){
var inst_34216 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
var statearr_34235_34252 = state_34226__$1;
(statearr_34235_34252[(2)] = inst_34216);

(statearr_34235_34252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (9))){
var state_34226__$1 = state_34226;
var statearr_34236_34253 = state_34226__$1;
(statearr_34236_34253[(2)] = null);

(statearr_34236_34253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (5))){
var inst_34211 = cljs.core.async.close_BANG_.call(null,out);
var state_34226__$1 = state_34226;
var statearr_34237_34254 = state_34226__$1;
(statearr_34237_34254[(2)] = inst_34211);

(statearr_34237_34254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (10))){
var inst_34219 = (state_34226[(2)]);
var state_34226__$1 = (function (){var statearr_34238 = state_34226;
(statearr_34238[(8)] = inst_34219);

return statearr_34238;
})();
var statearr_34239_34255 = state_34226__$1;
(statearr_34239_34255[(2)] = null);

(statearr_34239_34255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (8))){
var inst_34208 = (state_34226[(7)]);
var state_34226__$1 = state_34226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34226__$1,(11),out,inst_34208);
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
});})(c__32707__auto___34245,out))
;
return ((function (switch__32612__auto__,c__32707__auto___34245,out){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_34226){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34241){if((e34241 instanceof Object)){
var ex__32616__auto__ = e34241;
var statearr_34242_34256 = state_34226;
(statearr_34242_34256[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34257 = state_34226;
state_34226 = G__34257;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_34226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_34226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___34245,out))
})();
var state__32709__auto__ = (function (){var statearr_34243 = f__32708__auto__.call(null);
(statearr_34243[(6)] = c__32707__auto___34245);

return statearr_34243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___34245,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34259 = arguments.length;
switch (G__34259) {
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
var c__32707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto__){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto__){
return (function (state_34322){
var state_val_34323 = (state_34322[(1)]);
if((state_val_34323 === (7))){
var inst_34318 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
var statearr_34324_34362 = state_34322__$1;
(statearr_34324_34362[(2)] = inst_34318);

(statearr_34324_34362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (20))){
var inst_34288 = (state_34322[(7)]);
var inst_34299 = (state_34322[(2)]);
var inst_34300 = cljs.core.next.call(null,inst_34288);
var inst_34274 = inst_34300;
var inst_34275 = null;
var inst_34276 = (0);
var inst_34277 = (0);
var state_34322__$1 = (function (){var statearr_34325 = state_34322;
(statearr_34325[(8)] = inst_34274);

(statearr_34325[(9)] = inst_34275);

(statearr_34325[(10)] = inst_34277);

(statearr_34325[(11)] = inst_34276);

(statearr_34325[(12)] = inst_34299);

return statearr_34325;
})();
var statearr_34326_34363 = state_34322__$1;
(statearr_34326_34363[(2)] = null);

(statearr_34326_34363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (1))){
var state_34322__$1 = state_34322;
var statearr_34327_34364 = state_34322__$1;
(statearr_34327_34364[(2)] = null);

(statearr_34327_34364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (4))){
var inst_34263 = (state_34322[(13)]);
var inst_34263__$1 = (state_34322[(2)]);
var inst_34264 = (inst_34263__$1 == null);
var state_34322__$1 = (function (){var statearr_34328 = state_34322;
(statearr_34328[(13)] = inst_34263__$1);

return statearr_34328;
})();
if(cljs.core.truth_(inst_34264)){
var statearr_34329_34365 = state_34322__$1;
(statearr_34329_34365[(1)] = (5));

} else {
var statearr_34330_34366 = state_34322__$1;
(statearr_34330_34366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (15))){
var state_34322__$1 = state_34322;
var statearr_34334_34367 = state_34322__$1;
(statearr_34334_34367[(2)] = null);

(statearr_34334_34367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (21))){
var state_34322__$1 = state_34322;
var statearr_34335_34368 = state_34322__$1;
(statearr_34335_34368[(2)] = null);

(statearr_34335_34368[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (13))){
var inst_34274 = (state_34322[(8)]);
var inst_34275 = (state_34322[(9)]);
var inst_34277 = (state_34322[(10)]);
var inst_34276 = (state_34322[(11)]);
var inst_34284 = (state_34322[(2)]);
var inst_34285 = (inst_34277 + (1));
var tmp34331 = inst_34274;
var tmp34332 = inst_34275;
var tmp34333 = inst_34276;
var inst_34274__$1 = tmp34331;
var inst_34275__$1 = tmp34332;
var inst_34276__$1 = tmp34333;
var inst_34277__$1 = inst_34285;
var state_34322__$1 = (function (){var statearr_34336 = state_34322;
(statearr_34336[(8)] = inst_34274__$1);

(statearr_34336[(9)] = inst_34275__$1);

(statearr_34336[(14)] = inst_34284);

(statearr_34336[(10)] = inst_34277__$1);

(statearr_34336[(11)] = inst_34276__$1);

return statearr_34336;
})();
var statearr_34337_34369 = state_34322__$1;
(statearr_34337_34369[(2)] = null);

(statearr_34337_34369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (22))){
var state_34322__$1 = state_34322;
var statearr_34338_34370 = state_34322__$1;
(statearr_34338_34370[(2)] = null);

(statearr_34338_34370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (6))){
var inst_34263 = (state_34322[(13)]);
var inst_34272 = f.call(null,inst_34263);
var inst_34273 = cljs.core.seq.call(null,inst_34272);
var inst_34274 = inst_34273;
var inst_34275 = null;
var inst_34276 = (0);
var inst_34277 = (0);
var state_34322__$1 = (function (){var statearr_34339 = state_34322;
(statearr_34339[(8)] = inst_34274);

(statearr_34339[(9)] = inst_34275);

(statearr_34339[(10)] = inst_34277);

(statearr_34339[(11)] = inst_34276);

return statearr_34339;
})();
var statearr_34340_34371 = state_34322__$1;
(statearr_34340_34371[(2)] = null);

(statearr_34340_34371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (17))){
var inst_34288 = (state_34322[(7)]);
var inst_34292 = cljs.core.chunk_first.call(null,inst_34288);
var inst_34293 = cljs.core.chunk_rest.call(null,inst_34288);
var inst_34294 = cljs.core.count.call(null,inst_34292);
var inst_34274 = inst_34293;
var inst_34275 = inst_34292;
var inst_34276 = inst_34294;
var inst_34277 = (0);
var state_34322__$1 = (function (){var statearr_34341 = state_34322;
(statearr_34341[(8)] = inst_34274);

(statearr_34341[(9)] = inst_34275);

(statearr_34341[(10)] = inst_34277);

(statearr_34341[(11)] = inst_34276);

return statearr_34341;
})();
var statearr_34342_34372 = state_34322__$1;
(statearr_34342_34372[(2)] = null);

(statearr_34342_34372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (3))){
var inst_34320 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34322__$1,inst_34320);
} else {
if((state_val_34323 === (12))){
var inst_34308 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
var statearr_34343_34373 = state_34322__$1;
(statearr_34343_34373[(2)] = inst_34308);

(statearr_34343_34373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (2))){
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34322__$1,(4),in$);
} else {
if((state_val_34323 === (23))){
var inst_34316 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
var statearr_34344_34374 = state_34322__$1;
(statearr_34344_34374[(2)] = inst_34316);

(statearr_34344_34374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (19))){
var inst_34303 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
var statearr_34345_34375 = state_34322__$1;
(statearr_34345_34375[(2)] = inst_34303);

(statearr_34345_34375[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (11))){
var inst_34274 = (state_34322[(8)]);
var inst_34288 = (state_34322[(7)]);
var inst_34288__$1 = cljs.core.seq.call(null,inst_34274);
var state_34322__$1 = (function (){var statearr_34346 = state_34322;
(statearr_34346[(7)] = inst_34288__$1);

return statearr_34346;
})();
if(inst_34288__$1){
var statearr_34347_34376 = state_34322__$1;
(statearr_34347_34376[(1)] = (14));

} else {
var statearr_34348_34377 = state_34322__$1;
(statearr_34348_34377[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (9))){
var inst_34310 = (state_34322[(2)]);
var inst_34311 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34322__$1 = (function (){var statearr_34349 = state_34322;
(statearr_34349[(15)] = inst_34310);

return statearr_34349;
})();
if(cljs.core.truth_(inst_34311)){
var statearr_34350_34378 = state_34322__$1;
(statearr_34350_34378[(1)] = (21));

} else {
var statearr_34351_34379 = state_34322__$1;
(statearr_34351_34379[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (5))){
var inst_34266 = cljs.core.async.close_BANG_.call(null,out);
var state_34322__$1 = state_34322;
var statearr_34352_34380 = state_34322__$1;
(statearr_34352_34380[(2)] = inst_34266);

(statearr_34352_34380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (14))){
var inst_34288 = (state_34322[(7)]);
var inst_34290 = cljs.core.chunked_seq_QMARK_.call(null,inst_34288);
var state_34322__$1 = state_34322;
if(inst_34290){
var statearr_34353_34381 = state_34322__$1;
(statearr_34353_34381[(1)] = (17));

} else {
var statearr_34354_34382 = state_34322__$1;
(statearr_34354_34382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (16))){
var inst_34306 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
var statearr_34355_34383 = state_34322__$1;
(statearr_34355_34383[(2)] = inst_34306);

(statearr_34355_34383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (10))){
var inst_34275 = (state_34322[(9)]);
var inst_34277 = (state_34322[(10)]);
var inst_34282 = cljs.core._nth.call(null,inst_34275,inst_34277);
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34322__$1,(13),out,inst_34282);
} else {
if((state_val_34323 === (18))){
var inst_34288 = (state_34322[(7)]);
var inst_34297 = cljs.core.first.call(null,inst_34288);
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34322__$1,(20),out,inst_34297);
} else {
if((state_val_34323 === (8))){
var inst_34277 = (state_34322[(10)]);
var inst_34276 = (state_34322[(11)]);
var inst_34279 = (inst_34277 < inst_34276);
var inst_34280 = inst_34279;
var state_34322__$1 = state_34322;
if(cljs.core.truth_(inst_34280)){
var statearr_34356_34384 = state_34322__$1;
(statearr_34356_34384[(1)] = (10));

} else {
var statearr_34357_34385 = state_34322__$1;
(statearr_34357_34385[(1)] = (11));

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
});})(c__32707__auto__))
;
return ((function (switch__32612__auto__,c__32707__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32613__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32613__auto____0 = (function (){
var statearr_34358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34358[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32613__auto__);

(statearr_34358[(1)] = (1));

return statearr_34358;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32613__auto____1 = (function (state_34322){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34359){if((e34359 instanceof Object)){
var ex__32616__auto__ = e34359;
var statearr_34360_34386 = state_34322;
(statearr_34360_34386[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34387 = state_34322;
state_34322 = G__34387;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32613__auto__ = function(state_34322){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32613__auto____1.call(this,state_34322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32613__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32613__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto__))
})();
var state__32709__auto__ = (function (){var statearr_34361 = f__32708__auto__.call(null);
(statearr_34361[(6)] = c__32707__auto__);

return statearr_34361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto__))
);

return c__32707__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34389 = arguments.length;
switch (G__34389) {
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
var G__34392 = arguments.length;
switch (G__34392) {
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
var G__34395 = arguments.length;
switch (G__34395) {
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
var c__32707__auto___34442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___34442,out){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___34442,out){
return (function (state_34419){
var state_val_34420 = (state_34419[(1)]);
if((state_val_34420 === (7))){
var inst_34414 = (state_34419[(2)]);
var state_34419__$1 = state_34419;
var statearr_34421_34443 = state_34419__$1;
(statearr_34421_34443[(2)] = inst_34414);

(statearr_34421_34443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34420 === (1))){
var inst_34396 = null;
var state_34419__$1 = (function (){var statearr_34422 = state_34419;
(statearr_34422[(7)] = inst_34396);

return statearr_34422;
})();
var statearr_34423_34444 = state_34419__$1;
(statearr_34423_34444[(2)] = null);

(statearr_34423_34444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34420 === (4))){
var inst_34399 = (state_34419[(8)]);
var inst_34399__$1 = (state_34419[(2)]);
var inst_34400 = (inst_34399__$1 == null);
var inst_34401 = cljs.core.not.call(null,inst_34400);
var state_34419__$1 = (function (){var statearr_34424 = state_34419;
(statearr_34424[(8)] = inst_34399__$1);

return statearr_34424;
})();
if(inst_34401){
var statearr_34425_34445 = state_34419__$1;
(statearr_34425_34445[(1)] = (5));

} else {
var statearr_34426_34446 = state_34419__$1;
(statearr_34426_34446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34420 === (6))){
var state_34419__$1 = state_34419;
var statearr_34427_34447 = state_34419__$1;
(statearr_34427_34447[(2)] = null);

(statearr_34427_34447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34420 === (3))){
var inst_34416 = (state_34419[(2)]);
var inst_34417 = cljs.core.async.close_BANG_.call(null,out);
var state_34419__$1 = (function (){var statearr_34428 = state_34419;
(statearr_34428[(9)] = inst_34416);

return statearr_34428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34419__$1,inst_34417);
} else {
if((state_val_34420 === (2))){
var state_34419__$1 = state_34419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34419__$1,(4),ch);
} else {
if((state_val_34420 === (11))){
var inst_34399 = (state_34419[(8)]);
var inst_34408 = (state_34419[(2)]);
var inst_34396 = inst_34399;
var state_34419__$1 = (function (){var statearr_34429 = state_34419;
(statearr_34429[(10)] = inst_34408);

(statearr_34429[(7)] = inst_34396);

return statearr_34429;
})();
var statearr_34430_34448 = state_34419__$1;
(statearr_34430_34448[(2)] = null);

(statearr_34430_34448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34420 === (9))){
var inst_34399 = (state_34419[(8)]);
var state_34419__$1 = state_34419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34419__$1,(11),out,inst_34399);
} else {
if((state_val_34420 === (5))){
var inst_34396 = (state_34419[(7)]);
var inst_34399 = (state_34419[(8)]);
var inst_34403 = cljs.core._EQ_.call(null,inst_34399,inst_34396);
var state_34419__$1 = state_34419;
if(inst_34403){
var statearr_34432_34449 = state_34419__$1;
(statearr_34432_34449[(1)] = (8));

} else {
var statearr_34433_34450 = state_34419__$1;
(statearr_34433_34450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34420 === (10))){
var inst_34411 = (state_34419[(2)]);
var state_34419__$1 = state_34419;
var statearr_34434_34451 = state_34419__$1;
(statearr_34434_34451[(2)] = inst_34411);

(statearr_34434_34451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34420 === (8))){
var inst_34396 = (state_34419[(7)]);
var tmp34431 = inst_34396;
var inst_34396__$1 = tmp34431;
var state_34419__$1 = (function (){var statearr_34435 = state_34419;
(statearr_34435[(7)] = inst_34396__$1);

return statearr_34435;
})();
var statearr_34436_34452 = state_34419__$1;
(statearr_34436_34452[(2)] = null);

(statearr_34436_34452[(1)] = (2));


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
});})(c__32707__auto___34442,out))
;
return ((function (switch__32612__auto__,c__32707__auto___34442,out){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_34437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34437[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_34437[(1)] = (1));

return statearr_34437;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_34419){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34438){if((e34438 instanceof Object)){
var ex__32616__auto__ = e34438;
var statearr_34439_34453 = state_34419;
(statearr_34439_34453[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34454 = state_34419;
state_34419 = G__34454;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_34419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_34419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___34442,out))
})();
var state__32709__auto__ = (function (){var statearr_34440 = f__32708__auto__.call(null);
(statearr_34440[(6)] = c__32707__auto___34442);

return statearr_34440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___34442,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34456 = arguments.length;
switch (G__34456) {
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
var c__32707__auto___34522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___34522,out){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___34522,out){
return (function (state_34494){
var state_val_34495 = (state_34494[(1)]);
if((state_val_34495 === (7))){
var inst_34490 = (state_34494[(2)]);
var state_34494__$1 = state_34494;
var statearr_34496_34523 = state_34494__$1;
(statearr_34496_34523[(2)] = inst_34490);

(statearr_34496_34523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (1))){
var inst_34457 = (new Array(n));
var inst_34458 = inst_34457;
var inst_34459 = (0);
var state_34494__$1 = (function (){var statearr_34497 = state_34494;
(statearr_34497[(7)] = inst_34459);

(statearr_34497[(8)] = inst_34458);

return statearr_34497;
})();
var statearr_34498_34524 = state_34494__$1;
(statearr_34498_34524[(2)] = null);

(statearr_34498_34524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (4))){
var inst_34462 = (state_34494[(9)]);
var inst_34462__$1 = (state_34494[(2)]);
var inst_34463 = (inst_34462__$1 == null);
var inst_34464 = cljs.core.not.call(null,inst_34463);
var state_34494__$1 = (function (){var statearr_34499 = state_34494;
(statearr_34499[(9)] = inst_34462__$1);

return statearr_34499;
})();
if(inst_34464){
var statearr_34500_34525 = state_34494__$1;
(statearr_34500_34525[(1)] = (5));

} else {
var statearr_34501_34526 = state_34494__$1;
(statearr_34501_34526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (15))){
var inst_34484 = (state_34494[(2)]);
var state_34494__$1 = state_34494;
var statearr_34502_34527 = state_34494__$1;
(statearr_34502_34527[(2)] = inst_34484);

(statearr_34502_34527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (13))){
var state_34494__$1 = state_34494;
var statearr_34503_34528 = state_34494__$1;
(statearr_34503_34528[(2)] = null);

(statearr_34503_34528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (6))){
var inst_34459 = (state_34494[(7)]);
var inst_34480 = (inst_34459 > (0));
var state_34494__$1 = state_34494;
if(cljs.core.truth_(inst_34480)){
var statearr_34504_34529 = state_34494__$1;
(statearr_34504_34529[(1)] = (12));

} else {
var statearr_34505_34530 = state_34494__$1;
(statearr_34505_34530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (3))){
var inst_34492 = (state_34494[(2)]);
var state_34494__$1 = state_34494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34494__$1,inst_34492);
} else {
if((state_val_34495 === (12))){
var inst_34458 = (state_34494[(8)]);
var inst_34482 = cljs.core.vec.call(null,inst_34458);
var state_34494__$1 = state_34494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34494__$1,(15),out,inst_34482);
} else {
if((state_val_34495 === (2))){
var state_34494__$1 = state_34494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34494__$1,(4),ch);
} else {
if((state_val_34495 === (11))){
var inst_34474 = (state_34494[(2)]);
var inst_34475 = (new Array(n));
var inst_34458 = inst_34475;
var inst_34459 = (0);
var state_34494__$1 = (function (){var statearr_34506 = state_34494;
(statearr_34506[(7)] = inst_34459);

(statearr_34506[(8)] = inst_34458);

(statearr_34506[(10)] = inst_34474);

return statearr_34506;
})();
var statearr_34507_34531 = state_34494__$1;
(statearr_34507_34531[(2)] = null);

(statearr_34507_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (9))){
var inst_34458 = (state_34494[(8)]);
var inst_34472 = cljs.core.vec.call(null,inst_34458);
var state_34494__$1 = state_34494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34494__$1,(11),out,inst_34472);
} else {
if((state_val_34495 === (5))){
var inst_34467 = (state_34494[(11)]);
var inst_34462 = (state_34494[(9)]);
var inst_34459 = (state_34494[(7)]);
var inst_34458 = (state_34494[(8)]);
var inst_34466 = (inst_34458[inst_34459] = inst_34462);
var inst_34467__$1 = (inst_34459 + (1));
var inst_34468 = (inst_34467__$1 < n);
var state_34494__$1 = (function (){var statearr_34508 = state_34494;
(statearr_34508[(11)] = inst_34467__$1);

(statearr_34508[(12)] = inst_34466);

return statearr_34508;
})();
if(cljs.core.truth_(inst_34468)){
var statearr_34509_34532 = state_34494__$1;
(statearr_34509_34532[(1)] = (8));

} else {
var statearr_34510_34533 = state_34494__$1;
(statearr_34510_34533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (14))){
var inst_34487 = (state_34494[(2)]);
var inst_34488 = cljs.core.async.close_BANG_.call(null,out);
var state_34494__$1 = (function (){var statearr_34512 = state_34494;
(statearr_34512[(13)] = inst_34487);

return statearr_34512;
})();
var statearr_34513_34534 = state_34494__$1;
(statearr_34513_34534[(2)] = inst_34488);

(statearr_34513_34534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (10))){
var inst_34478 = (state_34494[(2)]);
var state_34494__$1 = state_34494;
var statearr_34514_34535 = state_34494__$1;
(statearr_34514_34535[(2)] = inst_34478);

(statearr_34514_34535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34495 === (8))){
var inst_34467 = (state_34494[(11)]);
var inst_34458 = (state_34494[(8)]);
var tmp34511 = inst_34458;
var inst_34458__$1 = tmp34511;
var inst_34459 = inst_34467;
var state_34494__$1 = (function (){var statearr_34515 = state_34494;
(statearr_34515[(7)] = inst_34459);

(statearr_34515[(8)] = inst_34458__$1);

return statearr_34515;
})();
var statearr_34516_34536 = state_34494__$1;
(statearr_34516_34536[(2)] = null);

(statearr_34516_34536[(1)] = (2));


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
});})(c__32707__auto___34522,out))
;
return ((function (switch__32612__auto__,c__32707__auto___34522,out){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_34517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34517[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_34517[(1)] = (1));

return statearr_34517;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_34494){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34518){if((e34518 instanceof Object)){
var ex__32616__auto__ = e34518;
var statearr_34519_34537 = state_34494;
(statearr_34519_34537[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34538 = state_34494;
state_34494 = G__34538;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_34494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_34494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___34522,out))
})();
var state__32709__auto__ = (function (){var statearr_34520 = f__32708__auto__.call(null);
(statearr_34520[(6)] = c__32707__auto___34522);

return statearr_34520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___34522,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34540 = arguments.length;
switch (G__34540) {
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
var c__32707__auto___34610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___34610,out){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___34610,out){
return (function (state_34582){
var state_val_34583 = (state_34582[(1)]);
if((state_val_34583 === (7))){
var inst_34578 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34584_34611 = state_34582__$1;
(statearr_34584_34611[(2)] = inst_34578);

(statearr_34584_34611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (1))){
var inst_34541 = [];
var inst_34542 = inst_34541;
var inst_34543 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34582__$1 = (function (){var statearr_34585 = state_34582;
(statearr_34585[(7)] = inst_34542);

(statearr_34585[(8)] = inst_34543);

return statearr_34585;
})();
var statearr_34586_34612 = state_34582__$1;
(statearr_34586_34612[(2)] = null);

(statearr_34586_34612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (4))){
var inst_34546 = (state_34582[(9)]);
var inst_34546__$1 = (state_34582[(2)]);
var inst_34547 = (inst_34546__$1 == null);
var inst_34548 = cljs.core.not.call(null,inst_34547);
var state_34582__$1 = (function (){var statearr_34587 = state_34582;
(statearr_34587[(9)] = inst_34546__$1);

return statearr_34587;
})();
if(inst_34548){
var statearr_34588_34613 = state_34582__$1;
(statearr_34588_34613[(1)] = (5));

} else {
var statearr_34589_34614 = state_34582__$1;
(statearr_34589_34614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (15))){
var inst_34572 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34590_34615 = state_34582__$1;
(statearr_34590_34615[(2)] = inst_34572);

(statearr_34590_34615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (13))){
var state_34582__$1 = state_34582;
var statearr_34591_34616 = state_34582__$1;
(statearr_34591_34616[(2)] = null);

(statearr_34591_34616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (6))){
var inst_34542 = (state_34582[(7)]);
var inst_34567 = inst_34542.length;
var inst_34568 = (inst_34567 > (0));
var state_34582__$1 = state_34582;
if(cljs.core.truth_(inst_34568)){
var statearr_34592_34617 = state_34582__$1;
(statearr_34592_34617[(1)] = (12));

} else {
var statearr_34593_34618 = state_34582__$1;
(statearr_34593_34618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (3))){
var inst_34580 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34582__$1,inst_34580);
} else {
if((state_val_34583 === (12))){
var inst_34542 = (state_34582[(7)]);
var inst_34570 = cljs.core.vec.call(null,inst_34542);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34582__$1,(15),out,inst_34570);
} else {
if((state_val_34583 === (2))){
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34582__$1,(4),ch);
} else {
if((state_val_34583 === (11))){
var inst_34550 = (state_34582[(10)]);
var inst_34546 = (state_34582[(9)]);
var inst_34560 = (state_34582[(2)]);
var inst_34561 = [];
var inst_34562 = inst_34561.push(inst_34546);
var inst_34542 = inst_34561;
var inst_34543 = inst_34550;
var state_34582__$1 = (function (){var statearr_34594 = state_34582;
(statearr_34594[(11)] = inst_34560);

(statearr_34594[(7)] = inst_34542);

(statearr_34594[(8)] = inst_34543);

(statearr_34594[(12)] = inst_34562);

return statearr_34594;
})();
var statearr_34595_34619 = state_34582__$1;
(statearr_34595_34619[(2)] = null);

(statearr_34595_34619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (9))){
var inst_34542 = (state_34582[(7)]);
var inst_34558 = cljs.core.vec.call(null,inst_34542);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34582__$1,(11),out,inst_34558);
} else {
if((state_val_34583 === (5))){
var inst_34550 = (state_34582[(10)]);
var inst_34543 = (state_34582[(8)]);
var inst_34546 = (state_34582[(9)]);
var inst_34550__$1 = f.call(null,inst_34546);
var inst_34551 = cljs.core._EQ_.call(null,inst_34550__$1,inst_34543);
var inst_34552 = cljs.core.keyword_identical_QMARK_.call(null,inst_34543,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34553 = ((inst_34551) || (inst_34552));
var state_34582__$1 = (function (){var statearr_34596 = state_34582;
(statearr_34596[(10)] = inst_34550__$1);

return statearr_34596;
})();
if(cljs.core.truth_(inst_34553)){
var statearr_34597_34620 = state_34582__$1;
(statearr_34597_34620[(1)] = (8));

} else {
var statearr_34598_34621 = state_34582__$1;
(statearr_34598_34621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (14))){
var inst_34575 = (state_34582[(2)]);
var inst_34576 = cljs.core.async.close_BANG_.call(null,out);
var state_34582__$1 = (function (){var statearr_34600 = state_34582;
(statearr_34600[(13)] = inst_34575);

return statearr_34600;
})();
var statearr_34601_34622 = state_34582__$1;
(statearr_34601_34622[(2)] = inst_34576);

(statearr_34601_34622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (10))){
var inst_34565 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34602_34623 = state_34582__$1;
(statearr_34602_34623[(2)] = inst_34565);

(statearr_34602_34623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (8))){
var inst_34542 = (state_34582[(7)]);
var inst_34550 = (state_34582[(10)]);
var inst_34546 = (state_34582[(9)]);
var inst_34555 = inst_34542.push(inst_34546);
var tmp34599 = inst_34542;
var inst_34542__$1 = tmp34599;
var inst_34543 = inst_34550;
var state_34582__$1 = (function (){var statearr_34603 = state_34582;
(statearr_34603[(7)] = inst_34542__$1);

(statearr_34603[(8)] = inst_34543);

(statearr_34603[(14)] = inst_34555);

return statearr_34603;
})();
var statearr_34604_34624 = state_34582__$1;
(statearr_34604_34624[(2)] = null);

(statearr_34604_34624[(1)] = (2));


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
});})(c__32707__auto___34610,out))
;
return ((function (switch__32612__auto__,c__32707__auto___34610,out){
return (function() {
var cljs$core$async$state_machine__32613__auto__ = null;
var cljs$core$async$state_machine__32613__auto____0 = (function (){
var statearr_34605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34605[(0)] = cljs$core$async$state_machine__32613__auto__);

(statearr_34605[(1)] = (1));

return statearr_34605;
});
var cljs$core$async$state_machine__32613__auto____1 = (function (state_34582){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34606){if((e34606 instanceof Object)){
var ex__32616__auto__ = e34606;
var statearr_34607_34625 = state_34582;
(statearr_34607_34625[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34626 = state_34582;
state_34582 = G__34626;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
cljs$core$async$state_machine__32613__auto__ = function(state_34582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32613__auto____1.call(this,state_34582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32613__auto____0;
cljs$core$async$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32613__auto____1;
return cljs$core$async$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___34610,out))
})();
var state__32709__auto__ = (function (){var statearr_34608 = f__32708__auto__.call(null);
(statearr_34608[(6)] = c__32707__auto___34610);

return statearr_34608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___34610,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1610405468149
