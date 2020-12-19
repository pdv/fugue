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
var G__32733 = arguments.length;
switch (G__32733) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32734 = (function (f,blockable,meta32735){
this.f = f;
this.blockable = blockable;
this.meta32735 = meta32735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32736,meta32735__$1){
var self__ = this;
var _32736__$1 = this;
return (new cljs.core.async.t_cljs$core$async32734(self__.f,self__.blockable,meta32735__$1));
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32736){
var self__ = this;
var _32736__$1 = this;
return self__.meta32735;
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32735","meta32735",-275257520,null)], null);
});

cljs.core.async.t_cljs$core$async32734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32734";

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32734");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32734.
 */
cljs.core.async.__GT_t_cljs$core$async32734 = (function cljs$core$async$__GT_t_cljs$core$async32734(f__$1,blockable__$1,meta32735){
return (new cljs.core.async.t_cljs$core$async32734(f__$1,blockable__$1,meta32735));
});

}

return (new cljs.core.async.t_cljs$core$async32734(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32740 = arguments.length;
switch (G__32740) {
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
var G__32743 = arguments.length;
switch (G__32743) {
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
var G__32746 = arguments.length;
switch (G__32746) {
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
var val_32748 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32748);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32748,ret){
return (function (){
return fn1.call(null,val_32748);
});})(val_32748,ret))
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
var G__32750 = arguments.length;
switch (G__32750) {
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
var n__4607__auto___32752 = n;
var x_32753 = (0);
while(true){
if((x_32753 < n__4607__auto___32752)){
(a[x_32753] = x_32753);

var G__32754 = (x_32753 + (1));
x_32753 = G__32754;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32755 = (function (flag,meta32756){
this.flag = flag;
this.meta32756 = meta32756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32757,meta32756__$1){
var self__ = this;
var _32757__$1 = this;
return (new cljs.core.async.t_cljs$core$async32755(self__.flag,meta32756__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32757){
var self__ = this;
var _32757__$1 = this;
return self__.meta32756;
});})(flag))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32755.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32756","meta32756",-80050246,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32755";

cljs.core.async.t_cljs$core$async32755.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32755");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32755.
 */
cljs.core.async.__GT_t_cljs$core$async32755 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32755(flag__$1,meta32756){
return (new cljs.core.async.t_cljs$core$async32755(flag__$1,meta32756));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32755(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32758 = (function (flag,cb,meta32759){
this.flag = flag;
this.cb = cb;
this.meta32759 = meta32759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32760,meta32759__$1){
var self__ = this;
var _32760__$1 = this;
return (new cljs.core.async.t_cljs$core$async32758(self__.flag,self__.cb,meta32759__$1));
});

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32760){
var self__ = this;
var _32760__$1 = this;
return self__.meta32759;
});

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32759","meta32759",594614158,null)], null);
});

cljs.core.async.t_cljs$core$async32758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32758";

cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32758");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32758.
 */
cljs.core.async.__GT_t_cljs$core$async32758 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32758(flag__$1,cb__$1,meta32759){
return (new cljs.core.async.t_cljs$core$async32758(flag__$1,cb__$1,meta32759));
});

}

return (new cljs.core.async.t_cljs$core$async32758(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32761_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32761_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32762_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32762_SHARP_,port], null));
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
var G__32763 = (i + (1));
i = G__32763;
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
var len__4730__auto___32769 = arguments.length;
var i__4731__auto___32770 = (0);
while(true){
if((i__4731__auto___32770 < len__4730__auto___32769)){
args__4736__auto__.push((arguments[i__4731__auto___32770]));

var G__32771 = (i__4731__auto___32770 + (1));
i__4731__auto___32770 = G__32771;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32766){
var map__32767 = p__32766;
var map__32767__$1 = (((((!((map__32767 == null))))?(((((map__32767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32767):map__32767);
var opts = map__32767__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32764){
var G__32765 = cljs.core.first.call(null,seq32764);
var seq32764__$1 = cljs.core.next.call(null,seq32764);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32765,seq32764__$1);
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
var G__32773 = arguments.length;
switch (G__32773) {
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
var c__32673__auto___32819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___32819){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___32819){
return (function (state_32797){
var state_val_32798 = (state_32797[(1)]);
if((state_val_32798 === (7))){
var inst_32793 = (state_32797[(2)]);
var state_32797__$1 = state_32797;
var statearr_32799_32820 = state_32797__$1;
(statearr_32799_32820[(2)] = inst_32793);

(statearr_32799_32820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (1))){
var state_32797__$1 = state_32797;
var statearr_32800_32821 = state_32797__$1;
(statearr_32800_32821[(2)] = null);

(statearr_32800_32821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (4))){
var inst_32776 = (state_32797[(7)]);
var inst_32776__$1 = (state_32797[(2)]);
var inst_32777 = (inst_32776__$1 == null);
var state_32797__$1 = (function (){var statearr_32801 = state_32797;
(statearr_32801[(7)] = inst_32776__$1);

return statearr_32801;
})();
if(cljs.core.truth_(inst_32777)){
var statearr_32802_32822 = state_32797__$1;
(statearr_32802_32822[(1)] = (5));

} else {
var statearr_32803_32823 = state_32797__$1;
(statearr_32803_32823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (13))){
var state_32797__$1 = state_32797;
var statearr_32804_32824 = state_32797__$1;
(statearr_32804_32824[(2)] = null);

(statearr_32804_32824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (6))){
var inst_32776 = (state_32797[(7)]);
var state_32797__$1 = state_32797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32797__$1,(11),to,inst_32776);
} else {
if((state_val_32798 === (3))){
var inst_32795 = (state_32797[(2)]);
var state_32797__$1 = state_32797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32797__$1,inst_32795);
} else {
if((state_val_32798 === (12))){
var state_32797__$1 = state_32797;
var statearr_32805_32825 = state_32797__$1;
(statearr_32805_32825[(2)] = null);

(statearr_32805_32825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (2))){
var state_32797__$1 = state_32797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32797__$1,(4),from);
} else {
if((state_val_32798 === (11))){
var inst_32786 = (state_32797[(2)]);
var state_32797__$1 = state_32797;
if(cljs.core.truth_(inst_32786)){
var statearr_32806_32826 = state_32797__$1;
(statearr_32806_32826[(1)] = (12));

} else {
var statearr_32807_32827 = state_32797__$1;
(statearr_32807_32827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (9))){
var state_32797__$1 = state_32797;
var statearr_32808_32828 = state_32797__$1;
(statearr_32808_32828[(2)] = null);

(statearr_32808_32828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (5))){
var state_32797__$1 = state_32797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32809_32829 = state_32797__$1;
(statearr_32809_32829[(1)] = (8));

} else {
var statearr_32810_32830 = state_32797__$1;
(statearr_32810_32830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (14))){
var inst_32791 = (state_32797[(2)]);
var state_32797__$1 = state_32797;
var statearr_32811_32831 = state_32797__$1;
(statearr_32811_32831[(2)] = inst_32791);

(statearr_32811_32831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (10))){
var inst_32783 = (state_32797[(2)]);
var state_32797__$1 = state_32797;
var statearr_32812_32832 = state_32797__$1;
(statearr_32812_32832[(2)] = inst_32783);

(statearr_32812_32832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (8))){
var inst_32780 = cljs.core.async.close_BANG_.call(null,to);
var state_32797__$1 = state_32797;
var statearr_32813_32833 = state_32797__$1;
(statearr_32813_32833[(2)] = inst_32780);

(statearr_32813_32833[(1)] = (10));


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
});})(c__32673__auto___32819))
;
return ((function (switch__32578__auto__,c__32673__auto___32819){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_32814 = [null,null,null,null,null,null,null,null];
(statearr_32814[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_32814[(1)] = (1));

return statearr_32814;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_32797){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_32797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e32815){if((e32815 instanceof Object)){
var ex__32582__auto__ = e32815;
var statearr_32816_32834 = state_32797;
(statearr_32816_32834[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_32797;
state_32797 = G__32835;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_32797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_32797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___32819))
})();
var state__32675__auto__ = (function (){var statearr_32817 = f__32674__auto__.call(null);
(statearr_32817[(6)] = c__32673__auto___32819);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___32819))
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
return (function (p__32836){
var vec__32837 = p__32836;
var v = cljs.core.nth.call(null,vec__32837,(0),null);
var p = cljs.core.nth.call(null,vec__32837,(1),null);
var job = vec__32837;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32673__auto___33008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___33008,res,vec__32837,v,p,job,jobs,results){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___33008,res,vec__32837,v,p,job,jobs,results){
return (function (state_32844){
var state_val_32845 = (state_32844[(1)]);
if((state_val_32845 === (1))){
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32844__$1,(2),res,v);
} else {
if((state_val_32845 === (2))){
var inst_32841 = (state_32844[(2)]);
var inst_32842 = cljs.core.async.close_BANG_.call(null,res);
var state_32844__$1 = (function (){var statearr_32846 = state_32844;
(statearr_32846[(7)] = inst_32841);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32844__$1,inst_32842);
} else {
return null;
}
}
});})(c__32673__auto___33008,res,vec__32837,v,p,job,jobs,results))
;
return ((function (switch__32578__auto__,c__32673__auto___33008,res,vec__32837,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0 = (function (){
var statearr_32847 = [null,null,null,null,null,null,null,null];
(statearr_32847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__);

(statearr_32847[(1)] = (1));

return statearr_32847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1 = (function (state_32844){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_32844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e32848){if((e32848 instanceof Object)){
var ex__32582__auto__ = e32848;
var statearr_32849_33009 = state_32844;
(statearr_32849_33009[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33010 = state_32844;
state_32844 = G__33010;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = function(state_32844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1.call(this,state_32844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___33008,res,vec__32837,v,p,job,jobs,results))
})();
var state__32675__auto__ = (function (){var statearr_32850 = f__32674__auto__.call(null);
(statearr_32850[(6)] = c__32673__auto___33008);

return statearr_32850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___33008,res,vec__32837,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32851){
var vec__32852 = p__32851;
var v = cljs.core.nth.call(null,vec__32852,(0),null);
var p = cljs.core.nth.call(null,vec__32852,(1),null);
var job = vec__32852;
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
var n__4607__auto___33011 = n;
var __33012 = (0);
while(true){
if((__33012 < n__4607__auto___33011)){
var G__32855_33013 = type;
var G__32855_33014__$1 = (((G__32855_33013 instanceof cljs.core.Keyword))?G__32855_33013.fqn:null);
switch (G__32855_33014__$1) {
case "compute":
var c__32673__auto___33016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33012,c__32673__auto___33016,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (__33012,c__32673__auto___33016,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async){
return (function (state_32868){
var state_val_32869 = (state_32868[(1)]);
if((state_val_32869 === (1))){
var state_32868__$1 = state_32868;
var statearr_32870_33017 = state_32868__$1;
(statearr_32870_33017[(2)] = null);

(statearr_32870_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (2))){
var state_32868__$1 = state_32868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32868__$1,(4),jobs);
} else {
if((state_val_32869 === (3))){
var inst_32866 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32868__$1,inst_32866);
} else {
if((state_val_32869 === (4))){
var inst_32858 = (state_32868[(2)]);
var inst_32859 = process.call(null,inst_32858);
var state_32868__$1 = state_32868;
if(cljs.core.truth_(inst_32859)){
var statearr_32871_33018 = state_32868__$1;
(statearr_32871_33018[(1)] = (5));

} else {
var statearr_32872_33019 = state_32868__$1;
(statearr_32872_33019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (5))){
var state_32868__$1 = state_32868;
var statearr_32873_33020 = state_32868__$1;
(statearr_32873_33020[(2)] = null);

(statearr_32873_33020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (6))){
var state_32868__$1 = state_32868;
var statearr_32874_33021 = state_32868__$1;
(statearr_32874_33021[(2)] = null);

(statearr_32874_33021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (7))){
var inst_32864 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32875_33022 = state_32868__$1;
(statearr_32875_33022[(2)] = inst_32864);

(statearr_32875_33022[(1)] = (3));


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
});})(__33012,c__32673__auto___33016,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async))
;
return ((function (__33012,switch__32578__auto__,c__32673__auto___33016,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null];
(statearr_32876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1 = (function (state_32868){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_32868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object)){
var ex__32582__auto__ = e32877;
var statearr_32878_33023 = state_32868;
(statearr_32878_33023[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33024 = state_32868;
state_32868 = G__33024;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = function(state_32868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1.call(this,state_32868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__;
})()
;})(__33012,switch__32578__auto__,c__32673__auto___33016,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async))
})();
var state__32675__auto__ = (function (){var statearr_32879 = f__32674__auto__.call(null);
(statearr_32879[(6)] = c__32673__auto___33016);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(__33012,c__32673__auto___33016,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async))
);


break;
case "async":
var c__32673__auto___33025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33012,c__32673__auto___33025,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (__33012,c__32673__auto___33025,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async){
return (function (state_32892){
var state_val_32893 = (state_32892[(1)]);
if((state_val_32893 === (1))){
var state_32892__$1 = state_32892;
var statearr_32894_33026 = state_32892__$1;
(statearr_32894_33026[(2)] = null);

(statearr_32894_33026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (2))){
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32892__$1,(4),jobs);
} else {
if((state_val_32893 === (3))){
var inst_32890 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32892__$1,inst_32890);
} else {
if((state_val_32893 === (4))){
var inst_32882 = (state_32892[(2)]);
var inst_32883 = async.call(null,inst_32882);
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32883)){
var statearr_32895_33027 = state_32892__$1;
(statearr_32895_33027[(1)] = (5));

} else {
var statearr_32896_33028 = state_32892__$1;
(statearr_32896_33028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (5))){
var state_32892__$1 = state_32892;
var statearr_32897_33029 = state_32892__$1;
(statearr_32897_33029[(2)] = null);

(statearr_32897_33029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (6))){
var state_32892__$1 = state_32892;
var statearr_32898_33030 = state_32892__$1;
(statearr_32898_33030[(2)] = null);

(statearr_32898_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (7))){
var inst_32888 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32899_33031 = state_32892__$1;
(statearr_32899_33031[(2)] = inst_32888);

(statearr_32899_33031[(1)] = (3));


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
});})(__33012,c__32673__auto___33025,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async))
;
return ((function (__33012,switch__32578__auto__,c__32673__auto___33025,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0 = (function (){
var statearr_32900 = [null,null,null,null,null,null,null];
(statearr_32900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__);

(statearr_32900[(1)] = (1));

return statearr_32900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1 = (function (state_32892){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_32892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e32901){if((e32901 instanceof Object)){
var ex__32582__auto__ = e32901;
var statearr_32902_33032 = state_32892;
(statearr_32902_33032[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33033 = state_32892;
state_32892 = G__33033;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = function(state_32892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1.call(this,state_32892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__;
})()
;})(__33012,switch__32578__auto__,c__32673__auto___33025,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async))
})();
var state__32675__auto__ = (function (){var statearr_32903 = f__32674__auto__.call(null);
(statearr_32903[(6)] = c__32673__auto___33025);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(__33012,c__32673__auto___33025,G__32855_33013,G__32855_33014__$1,n__4607__auto___33011,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32855_33014__$1)].join('')));

}

var G__33034 = (__33012 + (1));
__33012 = G__33034;
continue;
} else {
}
break;
}

var c__32673__auto___33035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___33035,jobs,results,process,async){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___33035,jobs,results,process,async){
return (function (state_32925){
var state_val_32926 = (state_32925[(1)]);
if((state_val_32926 === (7))){
var inst_32921 = (state_32925[(2)]);
var state_32925__$1 = state_32925;
var statearr_32927_33036 = state_32925__$1;
(statearr_32927_33036[(2)] = inst_32921);

(statearr_32927_33036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32926 === (1))){
var state_32925__$1 = state_32925;
var statearr_32928_33037 = state_32925__$1;
(statearr_32928_33037[(2)] = null);

(statearr_32928_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32926 === (4))){
var inst_32906 = (state_32925[(7)]);
var inst_32906__$1 = (state_32925[(2)]);
var inst_32907 = (inst_32906__$1 == null);
var state_32925__$1 = (function (){var statearr_32929 = state_32925;
(statearr_32929[(7)] = inst_32906__$1);

return statearr_32929;
})();
if(cljs.core.truth_(inst_32907)){
var statearr_32930_33038 = state_32925__$1;
(statearr_32930_33038[(1)] = (5));

} else {
var statearr_32931_33039 = state_32925__$1;
(statearr_32931_33039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32926 === (6))){
var inst_32911 = (state_32925[(8)]);
var inst_32906 = (state_32925[(7)]);
var inst_32911__$1 = cljs.core.async.chan.call(null,(1));
var inst_32912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32913 = [inst_32906,inst_32911__$1];
var inst_32914 = (new cljs.core.PersistentVector(null,2,(5),inst_32912,inst_32913,null));
var state_32925__$1 = (function (){var statearr_32932 = state_32925;
(statearr_32932[(8)] = inst_32911__$1);

return statearr_32932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32925__$1,(8),jobs,inst_32914);
} else {
if((state_val_32926 === (3))){
var inst_32923 = (state_32925[(2)]);
var state_32925__$1 = state_32925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32925__$1,inst_32923);
} else {
if((state_val_32926 === (2))){
var state_32925__$1 = state_32925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32925__$1,(4),from);
} else {
if((state_val_32926 === (9))){
var inst_32918 = (state_32925[(2)]);
var state_32925__$1 = (function (){var statearr_32933 = state_32925;
(statearr_32933[(9)] = inst_32918);

return statearr_32933;
})();
var statearr_32934_33040 = state_32925__$1;
(statearr_32934_33040[(2)] = null);

(statearr_32934_33040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32926 === (5))){
var inst_32909 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32925__$1 = state_32925;
var statearr_32935_33041 = state_32925__$1;
(statearr_32935_33041[(2)] = inst_32909);

(statearr_32935_33041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32926 === (8))){
var inst_32911 = (state_32925[(8)]);
var inst_32916 = (state_32925[(2)]);
var state_32925__$1 = (function (){var statearr_32936 = state_32925;
(statearr_32936[(10)] = inst_32916);

return statearr_32936;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32925__$1,(9),results,inst_32911);
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
});})(c__32673__auto___33035,jobs,results,process,async))
;
return ((function (switch__32578__auto__,c__32673__auto___33035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0 = (function (){
var statearr_32937 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__);

(statearr_32937[(1)] = (1));

return statearr_32937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1 = (function (state_32925){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_32925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e32938){if((e32938 instanceof Object)){
var ex__32582__auto__ = e32938;
var statearr_32939_33042 = state_32925;
(statearr_32939_33042[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33043 = state_32925;
state_32925 = G__33043;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = function(state_32925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1.call(this,state_32925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___33035,jobs,results,process,async))
})();
var state__32675__auto__ = (function (){var statearr_32940 = f__32674__auto__.call(null);
(statearr_32940[(6)] = c__32673__auto___33035);

return statearr_32940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___33035,jobs,results,process,async))
);


var c__32673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto__,jobs,results,process,async){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto__,jobs,results,process,async){
return (function (state_32978){
var state_val_32979 = (state_32978[(1)]);
if((state_val_32979 === (7))){
var inst_32974 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_32980_33044 = state_32978__$1;
(statearr_32980_33044[(2)] = inst_32974);

(statearr_32980_33044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (20))){
var state_32978__$1 = state_32978;
var statearr_32981_33045 = state_32978__$1;
(statearr_32981_33045[(2)] = null);

(statearr_32981_33045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (1))){
var state_32978__$1 = state_32978;
var statearr_32982_33046 = state_32978__$1;
(statearr_32982_33046[(2)] = null);

(statearr_32982_33046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (4))){
var inst_32943 = (state_32978[(7)]);
var inst_32943__$1 = (state_32978[(2)]);
var inst_32944 = (inst_32943__$1 == null);
var state_32978__$1 = (function (){var statearr_32983 = state_32978;
(statearr_32983[(7)] = inst_32943__$1);

return statearr_32983;
})();
if(cljs.core.truth_(inst_32944)){
var statearr_32984_33047 = state_32978__$1;
(statearr_32984_33047[(1)] = (5));

} else {
var statearr_32985_33048 = state_32978__$1;
(statearr_32985_33048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (15))){
var inst_32956 = (state_32978[(8)]);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32978__$1,(18),to,inst_32956);
} else {
if((state_val_32979 === (21))){
var inst_32969 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_32986_33049 = state_32978__$1;
(statearr_32986_33049[(2)] = inst_32969);

(statearr_32986_33049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (13))){
var inst_32971 = (state_32978[(2)]);
var state_32978__$1 = (function (){var statearr_32987 = state_32978;
(statearr_32987[(9)] = inst_32971);

return statearr_32987;
})();
var statearr_32988_33050 = state_32978__$1;
(statearr_32988_33050[(2)] = null);

(statearr_32988_33050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (6))){
var inst_32943 = (state_32978[(7)]);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32978__$1,(11),inst_32943);
} else {
if((state_val_32979 === (17))){
var inst_32964 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
if(cljs.core.truth_(inst_32964)){
var statearr_32989_33051 = state_32978__$1;
(statearr_32989_33051[(1)] = (19));

} else {
var statearr_32990_33052 = state_32978__$1;
(statearr_32990_33052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (3))){
var inst_32976 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32978__$1,inst_32976);
} else {
if((state_val_32979 === (12))){
var inst_32953 = (state_32978[(10)]);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32978__$1,(14),inst_32953);
} else {
if((state_val_32979 === (2))){
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32978__$1,(4),results);
} else {
if((state_val_32979 === (19))){
var state_32978__$1 = state_32978;
var statearr_32991_33053 = state_32978__$1;
(statearr_32991_33053[(2)] = null);

(statearr_32991_33053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (11))){
var inst_32953 = (state_32978[(2)]);
var state_32978__$1 = (function (){var statearr_32992 = state_32978;
(statearr_32992[(10)] = inst_32953);

return statearr_32992;
})();
var statearr_32993_33054 = state_32978__$1;
(statearr_32993_33054[(2)] = null);

(statearr_32993_33054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (9))){
var state_32978__$1 = state_32978;
var statearr_32994_33055 = state_32978__$1;
(statearr_32994_33055[(2)] = null);

(statearr_32994_33055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (5))){
var state_32978__$1 = state_32978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32995_33056 = state_32978__$1;
(statearr_32995_33056[(1)] = (8));

} else {
var statearr_32996_33057 = state_32978__$1;
(statearr_32996_33057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (14))){
var inst_32958 = (state_32978[(11)]);
var inst_32956 = (state_32978[(8)]);
var inst_32956__$1 = (state_32978[(2)]);
var inst_32957 = (inst_32956__$1 == null);
var inst_32958__$1 = cljs.core.not.call(null,inst_32957);
var state_32978__$1 = (function (){var statearr_32997 = state_32978;
(statearr_32997[(11)] = inst_32958__$1);

(statearr_32997[(8)] = inst_32956__$1);

return statearr_32997;
})();
if(inst_32958__$1){
var statearr_32998_33058 = state_32978__$1;
(statearr_32998_33058[(1)] = (15));

} else {
var statearr_32999_33059 = state_32978__$1;
(statearr_32999_33059[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (16))){
var inst_32958 = (state_32978[(11)]);
var state_32978__$1 = state_32978;
var statearr_33000_33060 = state_32978__$1;
(statearr_33000_33060[(2)] = inst_32958);

(statearr_33000_33060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (10))){
var inst_32950 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33001_33061 = state_32978__$1;
(statearr_33001_33061[(2)] = inst_32950);

(statearr_33001_33061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (18))){
var inst_32961 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33002_33062 = state_32978__$1;
(statearr_33002_33062[(2)] = inst_32961);

(statearr_33002_33062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (8))){
var inst_32947 = cljs.core.async.close_BANG_.call(null,to);
var state_32978__$1 = state_32978;
var statearr_33003_33063 = state_32978__$1;
(statearr_33003_33063[(2)] = inst_32947);

(statearr_33003_33063[(1)] = (10));


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
});})(c__32673__auto__,jobs,results,process,async))
;
return ((function (switch__32578__auto__,c__32673__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0 = (function (){
var statearr_33004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__);

(statearr_33004[(1)] = (1));

return statearr_33004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1 = (function (state_32978){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_32978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33005){if((e33005 instanceof Object)){
var ex__32582__auto__ = e33005;
var statearr_33006_33064 = state_32978;
(statearr_33006_33064[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33065 = state_32978;
state_32978 = G__33065;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__ = function(state_32978){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1.call(this,state_32978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto__,jobs,results,process,async))
})();
var state__32675__auto__ = (function (){var statearr_33007 = f__32674__auto__.call(null);
(statearr_33007[(6)] = c__32673__auto__);

return statearr_33007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto__,jobs,results,process,async))
);

return c__32673__auto__;
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
var G__33067 = arguments.length;
switch (G__33067) {
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
var G__33070 = arguments.length;
switch (G__33070) {
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
var G__33073 = arguments.length;
switch (G__33073) {
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
var c__32673__auto___33122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___33122,tc,fc){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___33122,tc,fc){
return (function (state_33099){
var state_val_33100 = (state_33099[(1)]);
if((state_val_33100 === (7))){
var inst_33095 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33101_33123 = state_33099__$1;
(statearr_33101_33123[(2)] = inst_33095);

(statearr_33101_33123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (1))){
var state_33099__$1 = state_33099;
var statearr_33102_33124 = state_33099__$1;
(statearr_33102_33124[(2)] = null);

(statearr_33102_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (4))){
var inst_33076 = (state_33099[(7)]);
var inst_33076__$1 = (state_33099[(2)]);
var inst_33077 = (inst_33076__$1 == null);
var state_33099__$1 = (function (){var statearr_33103 = state_33099;
(statearr_33103[(7)] = inst_33076__$1);

return statearr_33103;
})();
if(cljs.core.truth_(inst_33077)){
var statearr_33104_33125 = state_33099__$1;
(statearr_33104_33125[(1)] = (5));

} else {
var statearr_33105_33126 = state_33099__$1;
(statearr_33105_33126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (13))){
var state_33099__$1 = state_33099;
var statearr_33106_33127 = state_33099__$1;
(statearr_33106_33127[(2)] = null);

(statearr_33106_33127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (6))){
var inst_33076 = (state_33099[(7)]);
var inst_33082 = p.call(null,inst_33076);
var state_33099__$1 = state_33099;
if(cljs.core.truth_(inst_33082)){
var statearr_33107_33128 = state_33099__$1;
(statearr_33107_33128[(1)] = (9));

} else {
var statearr_33108_33129 = state_33099__$1;
(statearr_33108_33129[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (3))){
var inst_33097 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33099__$1,inst_33097);
} else {
if((state_val_33100 === (12))){
var state_33099__$1 = state_33099;
var statearr_33109_33130 = state_33099__$1;
(statearr_33109_33130[(2)] = null);

(statearr_33109_33130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (2))){
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33099__$1,(4),ch);
} else {
if((state_val_33100 === (11))){
var inst_33076 = (state_33099[(7)]);
var inst_33086 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33099__$1,(8),inst_33086,inst_33076);
} else {
if((state_val_33100 === (9))){
var state_33099__$1 = state_33099;
var statearr_33110_33131 = state_33099__$1;
(statearr_33110_33131[(2)] = tc);

(statearr_33110_33131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (5))){
var inst_33079 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33080 = cljs.core.async.close_BANG_.call(null,fc);
var state_33099__$1 = (function (){var statearr_33111 = state_33099;
(statearr_33111[(8)] = inst_33079);

return statearr_33111;
})();
var statearr_33112_33132 = state_33099__$1;
(statearr_33112_33132[(2)] = inst_33080);

(statearr_33112_33132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (14))){
var inst_33093 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33113_33133 = state_33099__$1;
(statearr_33113_33133[(2)] = inst_33093);

(statearr_33113_33133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (10))){
var state_33099__$1 = state_33099;
var statearr_33114_33134 = state_33099__$1;
(statearr_33114_33134[(2)] = fc);

(statearr_33114_33134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (8))){
var inst_33088 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
if(cljs.core.truth_(inst_33088)){
var statearr_33115_33135 = state_33099__$1;
(statearr_33115_33135[(1)] = (12));

} else {
var statearr_33116_33136 = state_33099__$1;
(statearr_33116_33136[(1)] = (13));

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
});})(c__32673__auto___33122,tc,fc))
;
return ((function (switch__32578__auto__,c__32673__auto___33122,tc,fc){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_33117 = [null,null,null,null,null,null,null,null,null];
(statearr_33117[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_33117[(1)] = (1));

return statearr_33117;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_33099){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33118){if((e33118 instanceof Object)){
var ex__32582__auto__ = e33118;
var statearr_33119_33137 = state_33099;
(statearr_33119_33137[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33138 = state_33099;
state_33099 = G__33138;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_33099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_33099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___33122,tc,fc))
})();
var state__32675__auto__ = (function (){var statearr_33120 = f__32674__auto__.call(null);
(statearr_33120[(6)] = c__32673__auto___33122);

return statearr_33120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___33122,tc,fc))
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
var c__32673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto__){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto__){
return (function (state_33159){
var state_val_33160 = (state_33159[(1)]);
if((state_val_33160 === (7))){
var inst_33155 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33161_33179 = state_33159__$1;
(statearr_33161_33179[(2)] = inst_33155);

(statearr_33161_33179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (1))){
var inst_33139 = init;
var state_33159__$1 = (function (){var statearr_33162 = state_33159;
(statearr_33162[(7)] = inst_33139);

return statearr_33162;
})();
var statearr_33163_33180 = state_33159__$1;
(statearr_33163_33180[(2)] = null);

(statearr_33163_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (4))){
var inst_33142 = (state_33159[(8)]);
var inst_33142__$1 = (state_33159[(2)]);
var inst_33143 = (inst_33142__$1 == null);
var state_33159__$1 = (function (){var statearr_33164 = state_33159;
(statearr_33164[(8)] = inst_33142__$1);

return statearr_33164;
})();
if(cljs.core.truth_(inst_33143)){
var statearr_33165_33181 = state_33159__$1;
(statearr_33165_33181[(1)] = (5));

} else {
var statearr_33166_33182 = state_33159__$1;
(statearr_33166_33182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (6))){
var inst_33146 = (state_33159[(9)]);
var inst_33139 = (state_33159[(7)]);
var inst_33142 = (state_33159[(8)]);
var inst_33146__$1 = f.call(null,inst_33139,inst_33142);
var inst_33147 = cljs.core.reduced_QMARK_.call(null,inst_33146__$1);
var state_33159__$1 = (function (){var statearr_33167 = state_33159;
(statearr_33167[(9)] = inst_33146__$1);

return statearr_33167;
})();
if(inst_33147){
var statearr_33168_33183 = state_33159__$1;
(statearr_33168_33183[(1)] = (8));

} else {
var statearr_33169_33184 = state_33159__$1;
(statearr_33169_33184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (3))){
var inst_33157 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33159__$1,inst_33157);
} else {
if((state_val_33160 === (2))){
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33159__$1,(4),ch);
} else {
if((state_val_33160 === (9))){
var inst_33146 = (state_33159[(9)]);
var inst_33139 = inst_33146;
var state_33159__$1 = (function (){var statearr_33170 = state_33159;
(statearr_33170[(7)] = inst_33139);

return statearr_33170;
})();
var statearr_33171_33185 = state_33159__$1;
(statearr_33171_33185[(2)] = null);

(statearr_33171_33185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (5))){
var inst_33139 = (state_33159[(7)]);
var state_33159__$1 = state_33159;
var statearr_33172_33186 = state_33159__$1;
(statearr_33172_33186[(2)] = inst_33139);

(statearr_33172_33186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (10))){
var inst_33153 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33173_33187 = state_33159__$1;
(statearr_33173_33187[(2)] = inst_33153);

(statearr_33173_33187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (8))){
var inst_33146 = (state_33159[(9)]);
var inst_33149 = cljs.core.deref.call(null,inst_33146);
var state_33159__$1 = state_33159;
var statearr_33174_33188 = state_33159__$1;
(statearr_33174_33188[(2)] = inst_33149);

(statearr_33174_33188[(1)] = (10));


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
});})(c__32673__auto__))
;
return ((function (switch__32578__auto__,c__32673__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32579__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32579__auto____0 = (function (){
var statearr_33175 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33175[(0)] = cljs$core$async$reduce_$_state_machine__32579__auto__);

(statearr_33175[(1)] = (1));

return statearr_33175;
});
var cljs$core$async$reduce_$_state_machine__32579__auto____1 = (function (state_33159){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33176){if((e33176 instanceof Object)){
var ex__32582__auto__ = e33176;
var statearr_33177_33189 = state_33159;
(statearr_33177_33189[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33190 = state_33159;
state_33159 = G__33190;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32579__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32579__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32579__auto____0;
cljs$core$async$reduce_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32579__auto____1;
return cljs$core$async$reduce_$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto__))
})();
var state__32675__auto__ = (function (){var statearr_33178 = f__32674__auto__.call(null);
(statearr_33178[(6)] = c__32673__auto__);

return statearr_33178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto__))
);

return c__32673__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto__,f__$1){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto__,f__$1){
return (function (state_33196){
var state_val_33197 = (state_33196[(1)]);
if((state_val_33197 === (1))){
var inst_33191 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33196__$1 = state_33196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33196__$1,(2),inst_33191);
} else {
if((state_val_33197 === (2))){
var inst_33193 = (state_33196[(2)]);
var inst_33194 = f__$1.call(null,inst_33193);
var state_33196__$1 = state_33196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33196__$1,inst_33194);
} else {
return null;
}
}
});})(c__32673__auto__,f__$1))
;
return ((function (switch__32578__auto__,c__32673__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32579__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32579__auto____0 = (function (){
var statearr_33198 = [null,null,null,null,null,null,null];
(statearr_33198[(0)] = cljs$core$async$transduce_$_state_machine__32579__auto__);

(statearr_33198[(1)] = (1));

return statearr_33198;
});
var cljs$core$async$transduce_$_state_machine__32579__auto____1 = (function (state_33196){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33199){if((e33199 instanceof Object)){
var ex__32582__auto__ = e33199;
var statearr_33200_33202 = state_33196;
(statearr_33200_33202[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33203 = state_33196;
state_33196 = G__33203;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32579__auto__ = function(state_33196){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32579__auto____1.call(this,state_33196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32579__auto____0;
cljs$core$async$transduce_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32579__auto____1;
return cljs$core$async$transduce_$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto__,f__$1))
})();
var state__32675__auto__ = (function (){var statearr_33201 = f__32674__auto__.call(null);
(statearr_33201[(6)] = c__32673__auto__);

return statearr_33201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto__,f__$1))
);

return c__32673__auto__;
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
var G__33205 = arguments.length;
switch (G__33205) {
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
var c__32673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto__){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto__){
return (function (state_33230){
var state_val_33231 = (state_33230[(1)]);
if((state_val_33231 === (7))){
var inst_33212 = (state_33230[(2)]);
var state_33230__$1 = state_33230;
var statearr_33232_33253 = state_33230__$1;
(statearr_33232_33253[(2)] = inst_33212);

(statearr_33232_33253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (1))){
var inst_33206 = cljs.core.seq.call(null,coll);
var inst_33207 = inst_33206;
var state_33230__$1 = (function (){var statearr_33233 = state_33230;
(statearr_33233[(7)] = inst_33207);

return statearr_33233;
})();
var statearr_33234_33254 = state_33230__$1;
(statearr_33234_33254[(2)] = null);

(statearr_33234_33254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (4))){
var inst_33207 = (state_33230[(7)]);
var inst_33210 = cljs.core.first.call(null,inst_33207);
var state_33230__$1 = state_33230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33230__$1,(7),ch,inst_33210);
} else {
if((state_val_33231 === (13))){
var inst_33224 = (state_33230[(2)]);
var state_33230__$1 = state_33230;
var statearr_33235_33255 = state_33230__$1;
(statearr_33235_33255[(2)] = inst_33224);

(statearr_33235_33255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (6))){
var inst_33215 = (state_33230[(2)]);
var state_33230__$1 = state_33230;
if(cljs.core.truth_(inst_33215)){
var statearr_33236_33256 = state_33230__$1;
(statearr_33236_33256[(1)] = (8));

} else {
var statearr_33237_33257 = state_33230__$1;
(statearr_33237_33257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (3))){
var inst_33228 = (state_33230[(2)]);
var state_33230__$1 = state_33230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33230__$1,inst_33228);
} else {
if((state_val_33231 === (12))){
var state_33230__$1 = state_33230;
var statearr_33238_33258 = state_33230__$1;
(statearr_33238_33258[(2)] = null);

(statearr_33238_33258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (2))){
var inst_33207 = (state_33230[(7)]);
var state_33230__$1 = state_33230;
if(cljs.core.truth_(inst_33207)){
var statearr_33239_33259 = state_33230__$1;
(statearr_33239_33259[(1)] = (4));

} else {
var statearr_33240_33260 = state_33230__$1;
(statearr_33240_33260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (11))){
var inst_33221 = cljs.core.async.close_BANG_.call(null,ch);
var state_33230__$1 = state_33230;
var statearr_33241_33261 = state_33230__$1;
(statearr_33241_33261[(2)] = inst_33221);

(statearr_33241_33261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (9))){
var state_33230__$1 = state_33230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33242_33262 = state_33230__$1;
(statearr_33242_33262[(1)] = (11));

} else {
var statearr_33243_33263 = state_33230__$1;
(statearr_33243_33263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (5))){
var inst_33207 = (state_33230[(7)]);
var state_33230__$1 = state_33230;
var statearr_33244_33264 = state_33230__$1;
(statearr_33244_33264[(2)] = inst_33207);

(statearr_33244_33264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (10))){
var inst_33226 = (state_33230[(2)]);
var state_33230__$1 = state_33230;
var statearr_33245_33265 = state_33230__$1;
(statearr_33245_33265[(2)] = inst_33226);

(statearr_33245_33265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33231 === (8))){
var inst_33207 = (state_33230[(7)]);
var inst_33217 = cljs.core.next.call(null,inst_33207);
var inst_33207__$1 = inst_33217;
var state_33230__$1 = (function (){var statearr_33246 = state_33230;
(statearr_33246[(7)] = inst_33207__$1);

return statearr_33246;
})();
var statearr_33247_33266 = state_33230__$1;
(statearr_33247_33266[(2)] = null);

(statearr_33247_33266[(1)] = (2));


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
});})(c__32673__auto__))
;
return ((function (switch__32578__auto__,c__32673__auto__){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_33248 = [null,null,null,null,null,null,null,null];
(statearr_33248[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_33248[(1)] = (1));

return statearr_33248;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_33230){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33249){if((e33249 instanceof Object)){
var ex__32582__auto__ = e33249;
var statearr_33250_33267 = state_33230;
(statearr_33250_33267[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33268 = state_33230;
state_33230 = G__33268;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_33230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_33230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto__))
})();
var state__32675__auto__ = (function (){var statearr_33251 = f__32674__auto__.call(null);
(statearr_33251[(6)] = c__32673__auto__);

return statearr_33251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto__))
);

return c__32673__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33269 = (function (ch,cs,meta33270){
this.ch = ch;
this.cs = cs;
this.meta33270 = meta33270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33271,meta33270__$1){
var self__ = this;
var _33271__$1 = this;
return (new cljs.core.async.t_cljs$core$async33269(self__.ch,self__.cs,meta33270__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33271){
var self__ = this;
var _33271__$1 = this;
return self__.meta33270;
});})(cs))
;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33269.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33270","meta33270",-79596268,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33269";

cljs.core.async.t_cljs$core$async33269.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33269");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33269.
 */
cljs.core.async.__GT_t_cljs$core$async33269 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33269(ch__$1,cs__$1,meta33270){
return (new cljs.core.async.t_cljs$core$async33269(ch__$1,cs__$1,meta33270));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33269(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32673__auto___33491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___33491,cs,m,dchan,dctr,done){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___33491,cs,m,dchan,dctr,done){
return (function (state_33406){
var state_val_33407 = (state_33406[(1)]);
if((state_val_33407 === (7))){
var inst_33402 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33408_33492 = state_33406__$1;
(statearr_33408_33492[(2)] = inst_33402);

(statearr_33408_33492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (20))){
var inst_33305 = (state_33406[(7)]);
var inst_33317 = cljs.core.first.call(null,inst_33305);
var inst_33318 = cljs.core.nth.call(null,inst_33317,(0),null);
var inst_33319 = cljs.core.nth.call(null,inst_33317,(1),null);
var state_33406__$1 = (function (){var statearr_33409 = state_33406;
(statearr_33409[(8)] = inst_33318);

return statearr_33409;
})();
if(cljs.core.truth_(inst_33319)){
var statearr_33410_33493 = state_33406__$1;
(statearr_33410_33493[(1)] = (22));

} else {
var statearr_33411_33494 = state_33406__$1;
(statearr_33411_33494[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (27))){
var inst_33274 = (state_33406[(9)]);
var inst_33347 = (state_33406[(10)]);
var inst_33354 = (state_33406[(11)]);
var inst_33349 = (state_33406[(12)]);
var inst_33354__$1 = cljs.core._nth.call(null,inst_33347,inst_33349);
var inst_33355 = cljs.core.async.put_BANG_.call(null,inst_33354__$1,inst_33274,done);
var state_33406__$1 = (function (){var statearr_33412 = state_33406;
(statearr_33412[(11)] = inst_33354__$1);

return statearr_33412;
})();
if(cljs.core.truth_(inst_33355)){
var statearr_33413_33495 = state_33406__$1;
(statearr_33413_33495[(1)] = (30));

} else {
var statearr_33414_33496 = state_33406__$1;
(statearr_33414_33496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (1))){
var state_33406__$1 = state_33406;
var statearr_33415_33497 = state_33406__$1;
(statearr_33415_33497[(2)] = null);

(statearr_33415_33497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (24))){
var inst_33305 = (state_33406[(7)]);
var inst_33324 = (state_33406[(2)]);
var inst_33325 = cljs.core.next.call(null,inst_33305);
var inst_33283 = inst_33325;
var inst_33284 = null;
var inst_33285 = (0);
var inst_33286 = (0);
var state_33406__$1 = (function (){var statearr_33416 = state_33406;
(statearr_33416[(13)] = inst_33283);

(statearr_33416[(14)] = inst_33286);

(statearr_33416[(15)] = inst_33324);

(statearr_33416[(16)] = inst_33285);

(statearr_33416[(17)] = inst_33284);

return statearr_33416;
})();
var statearr_33417_33498 = state_33406__$1;
(statearr_33417_33498[(2)] = null);

(statearr_33417_33498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (39))){
var state_33406__$1 = state_33406;
var statearr_33421_33499 = state_33406__$1;
(statearr_33421_33499[(2)] = null);

(statearr_33421_33499[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (4))){
var inst_33274 = (state_33406[(9)]);
var inst_33274__$1 = (state_33406[(2)]);
var inst_33275 = (inst_33274__$1 == null);
var state_33406__$1 = (function (){var statearr_33422 = state_33406;
(statearr_33422[(9)] = inst_33274__$1);

return statearr_33422;
})();
if(cljs.core.truth_(inst_33275)){
var statearr_33423_33500 = state_33406__$1;
(statearr_33423_33500[(1)] = (5));

} else {
var statearr_33424_33501 = state_33406__$1;
(statearr_33424_33501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (15))){
var inst_33283 = (state_33406[(13)]);
var inst_33286 = (state_33406[(14)]);
var inst_33285 = (state_33406[(16)]);
var inst_33284 = (state_33406[(17)]);
var inst_33301 = (state_33406[(2)]);
var inst_33302 = (inst_33286 + (1));
var tmp33418 = inst_33283;
var tmp33419 = inst_33285;
var tmp33420 = inst_33284;
var inst_33283__$1 = tmp33418;
var inst_33284__$1 = tmp33420;
var inst_33285__$1 = tmp33419;
var inst_33286__$1 = inst_33302;
var state_33406__$1 = (function (){var statearr_33425 = state_33406;
(statearr_33425[(13)] = inst_33283__$1);

(statearr_33425[(14)] = inst_33286__$1);

(statearr_33425[(16)] = inst_33285__$1);

(statearr_33425[(18)] = inst_33301);

(statearr_33425[(17)] = inst_33284__$1);

return statearr_33425;
})();
var statearr_33426_33502 = state_33406__$1;
(statearr_33426_33502[(2)] = null);

(statearr_33426_33502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (21))){
var inst_33328 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33430_33503 = state_33406__$1;
(statearr_33430_33503[(2)] = inst_33328);

(statearr_33430_33503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (31))){
var inst_33354 = (state_33406[(11)]);
var inst_33358 = done.call(null,null);
var inst_33359 = cljs.core.async.untap_STAR_.call(null,m,inst_33354);
var state_33406__$1 = (function (){var statearr_33431 = state_33406;
(statearr_33431[(19)] = inst_33358);

return statearr_33431;
})();
var statearr_33432_33504 = state_33406__$1;
(statearr_33432_33504[(2)] = inst_33359);

(statearr_33432_33504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (32))){
var inst_33347 = (state_33406[(10)]);
var inst_33346 = (state_33406[(20)]);
var inst_33349 = (state_33406[(12)]);
var inst_33348 = (state_33406[(21)]);
var inst_33361 = (state_33406[(2)]);
var inst_33362 = (inst_33349 + (1));
var tmp33427 = inst_33347;
var tmp33428 = inst_33346;
var tmp33429 = inst_33348;
var inst_33346__$1 = tmp33428;
var inst_33347__$1 = tmp33427;
var inst_33348__$1 = tmp33429;
var inst_33349__$1 = inst_33362;
var state_33406__$1 = (function (){var statearr_33433 = state_33406;
(statearr_33433[(10)] = inst_33347__$1);

(statearr_33433[(20)] = inst_33346__$1);

(statearr_33433[(22)] = inst_33361);

(statearr_33433[(12)] = inst_33349__$1);

(statearr_33433[(21)] = inst_33348__$1);

return statearr_33433;
})();
var statearr_33434_33505 = state_33406__$1;
(statearr_33434_33505[(2)] = null);

(statearr_33434_33505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (40))){
var inst_33374 = (state_33406[(23)]);
var inst_33378 = done.call(null,null);
var inst_33379 = cljs.core.async.untap_STAR_.call(null,m,inst_33374);
var state_33406__$1 = (function (){var statearr_33435 = state_33406;
(statearr_33435[(24)] = inst_33378);

return statearr_33435;
})();
var statearr_33436_33506 = state_33406__$1;
(statearr_33436_33506[(2)] = inst_33379);

(statearr_33436_33506[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (33))){
var inst_33365 = (state_33406[(25)]);
var inst_33367 = cljs.core.chunked_seq_QMARK_.call(null,inst_33365);
var state_33406__$1 = state_33406;
if(inst_33367){
var statearr_33437_33507 = state_33406__$1;
(statearr_33437_33507[(1)] = (36));

} else {
var statearr_33438_33508 = state_33406__$1;
(statearr_33438_33508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (13))){
var inst_33295 = (state_33406[(26)]);
var inst_33298 = cljs.core.async.close_BANG_.call(null,inst_33295);
var state_33406__$1 = state_33406;
var statearr_33439_33509 = state_33406__$1;
(statearr_33439_33509[(2)] = inst_33298);

(statearr_33439_33509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (22))){
var inst_33318 = (state_33406[(8)]);
var inst_33321 = cljs.core.async.close_BANG_.call(null,inst_33318);
var state_33406__$1 = state_33406;
var statearr_33440_33510 = state_33406__$1;
(statearr_33440_33510[(2)] = inst_33321);

(statearr_33440_33510[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (36))){
var inst_33365 = (state_33406[(25)]);
var inst_33369 = cljs.core.chunk_first.call(null,inst_33365);
var inst_33370 = cljs.core.chunk_rest.call(null,inst_33365);
var inst_33371 = cljs.core.count.call(null,inst_33369);
var inst_33346 = inst_33370;
var inst_33347 = inst_33369;
var inst_33348 = inst_33371;
var inst_33349 = (0);
var state_33406__$1 = (function (){var statearr_33441 = state_33406;
(statearr_33441[(10)] = inst_33347);

(statearr_33441[(20)] = inst_33346);

(statearr_33441[(12)] = inst_33349);

(statearr_33441[(21)] = inst_33348);

return statearr_33441;
})();
var statearr_33442_33511 = state_33406__$1;
(statearr_33442_33511[(2)] = null);

(statearr_33442_33511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (41))){
var inst_33365 = (state_33406[(25)]);
var inst_33381 = (state_33406[(2)]);
var inst_33382 = cljs.core.next.call(null,inst_33365);
var inst_33346 = inst_33382;
var inst_33347 = null;
var inst_33348 = (0);
var inst_33349 = (0);
var state_33406__$1 = (function (){var statearr_33443 = state_33406;
(statearr_33443[(10)] = inst_33347);

(statearr_33443[(20)] = inst_33346);

(statearr_33443[(12)] = inst_33349);

(statearr_33443[(21)] = inst_33348);

(statearr_33443[(27)] = inst_33381);

return statearr_33443;
})();
var statearr_33444_33512 = state_33406__$1;
(statearr_33444_33512[(2)] = null);

(statearr_33444_33512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (43))){
var state_33406__$1 = state_33406;
var statearr_33445_33513 = state_33406__$1;
(statearr_33445_33513[(2)] = null);

(statearr_33445_33513[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (29))){
var inst_33390 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33446_33514 = state_33406__$1;
(statearr_33446_33514[(2)] = inst_33390);

(statearr_33446_33514[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (44))){
var inst_33399 = (state_33406[(2)]);
var state_33406__$1 = (function (){var statearr_33447 = state_33406;
(statearr_33447[(28)] = inst_33399);

return statearr_33447;
})();
var statearr_33448_33515 = state_33406__$1;
(statearr_33448_33515[(2)] = null);

(statearr_33448_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (6))){
var inst_33338 = (state_33406[(29)]);
var inst_33337 = cljs.core.deref.call(null,cs);
var inst_33338__$1 = cljs.core.keys.call(null,inst_33337);
var inst_33339 = cljs.core.count.call(null,inst_33338__$1);
var inst_33340 = cljs.core.reset_BANG_.call(null,dctr,inst_33339);
var inst_33345 = cljs.core.seq.call(null,inst_33338__$1);
var inst_33346 = inst_33345;
var inst_33347 = null;
var inst_33348 = (0);
var inst_33349 = (0);
var state_33406__$1 = (function (){var statearr_33449 = state_33406;
(statearr_33449[(10)] = inst_33347);

(statearr_33449[(20)] = inst_33346);

(statearr_33449[(29)] = inst_33338__$1);

(statearr_33449[(30)] = inst_33340);

(statearr_33449[(12)] = inst_33349);

(statearr_33449[(21)] = inst_33348);

return statearr_33449;
})();
var statearr_33450_33516 = state_33406__$1;
(statearr_33450_33516[(2)] = null);

(statearr_33450_33516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (28))){
var inst_33346 = (state_33406[(20)]);
var inst_33365 = (state_33406[(25)]);
var inst_33365__$1 = cljs.core.seq.call(null,inst_33346);
var state_33406__$1 = (function (){var statearr_33451 = state_33406;
(statearr_33451[(25)] = inst_33365__$1);

return statearr_33451;
})();
if(inst_33365__$1){
var statearr_33452_33517 = state_33406__$1;
(statearr_33452_33517[(1)] = (33));

} else {
var statearr_33453_33518 = state_33406__$1;
(statearr_33453_33518[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (25))){
var inst_33349 = (state_33406[(12)]);
var inst_33348 = (state_33406[(21)]);
var inst_33351 = (inst_33349 < inst_33348);
var inst_33352 = inst_33351;
var state_33406__$1 = state_33406;
if(cljs.core.truth_(inst_33352)){
var statearr_33454_33519 = state_33406__$1;
(statearr_33454_33519[(1)] = (27));

} else {
var statearr_33455_33520 = state_33406__$1;
(statearr_33455_33520[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (34))){
var state_33406__$1 = state_33406;
var statearr_33456_33521 = state_33406__$1;
(statearr_33456_33521[(2)] = null);

(statearr_33456_33521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (17))){
var state_33406__$1 = state_33406;
var statearr_33457_33522 = state_33406__$1;
(statearr_33457_33522[(2)] = null);

(statearr_33457_33522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (3))){
var inst_33404 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33406__$1,inst_33404);
} else {
if((state_val_33407 === (12))){
var inst_33333 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33458_33523 = state_33406__$1;
(statearr_33458_33523[(2)] = inst_33333);

(statearr_33458_33523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (2))){
var state_33406__$1 = state_33406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33406__$1,(4),ch);
} else {
if((state_val_33407 === (23))){
var state_33406__$1 = state_33406;
var statearr_33459_33524 = state_33406__$1;
(statearr_33459_33524[(2)] = null);

(statearr_33459_33524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (35))){
var inst_33388 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33460_33525 = state_33406__$1;
(statearr_33460_33525[(2)] = inst_33388);

(statearr_33460_33525[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (19))){
var inst_33305 = (state_33406[(7)]);
var inst_33309 = cljs.core.chunk_first.call(null,inst_33305);
var inst_33310 = cljs.core.chunk_rest.call(null,inst_33305);
var inst_33311 = cljs.core.count.call(null,inst_33309);
var inst_33283 = inst_33310;
var inst_33284 = inst_33309;
var inst_33285 = inst_33311;
var inst_33286 = (0);
var state_33406__$1 = (function (){var statearr_33461 = state_33406;
(statearr_33461[(13)] = inst_33283);

(statearr_33461[(14)] = inst_33286);

(statearr_33461[(16)] = inst_33285);

(statearr_33461[(17)] = inst_33284);

return statearr_33461;
})();
var statearr_33462_33526 = state_33406__$1;
(statearr_33462_33526[(2)] = null);

(statearr_33462_33526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (11))){
var inst_33283 = (state_33406[(13)]);
var inst_33305 = (state_33406[(7)]);
var inst_33305__$1 = cljs.core.seq.call(null,inst_33283);
var state_33406__$1 = (function (){var statearr_33463 = state_33406;
(statearr_33463[(7)] = inst_33305__$1);

return statearr_33463;
})();
if(inst_33305__$1){
var statearr_33464_33527 = state_33406__$1;
(statearr_33464_33527[(1)] = (16));

} else {
var statearr_33465_33528 = state_33406__$1;
(statearr_33465_33528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (9))){
var inst_33335 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33466_33529 = state_33406__$1;
(statearr_33466_33529[(2)] = inst_33335);

(statearr_33466_33529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (5))){
var inst_33281 = cljs.core.deref.call(null,cs);
var inst_33282 = cljs.core.seq.call(null,inst_33281);
var inst_33283 = inst_33282;
var inst_33284 = null;
var inst_33285 = (0);
var inst_33286 = (0);
var state_33406__$1 = (function (){var statearr_33467 = state_33406;
(statearr_33467[(13)] = inst_33283);

(statearr_33467[(14)] = inst_33286);

(statearr_33467[(16)] = inst_33285);

(statearr_33467[(17)] = inst_33284);

return statearr_33467;
})();
var statearr_33468_33530 = state_33406__$1;
(statearr_33468_33530[(2)] = null);

(statearr_33468_33530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (14))){
var state_33406__$1 = state_33406;
var statearr_33469_33531 = state_33406__$1;
(statearr_33469_33531[(2)] = null);

(statearr_33469_33531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (45))){
var inst_33396 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33470_33532 = state_33406__$1;
(statearr_33470_33532[(2)] = inst_33396);

(statearr_33470_33532[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (26))){
var inst_33338 = (state_33406[(29)]);
var inst_33392 = (state_33406[(2)]);
var inst_33393 = cljs.core.seq.call(null,inst_33338);
var state_33406__$1 = (function (){var statearr_33471 = state_33406;
(statearr_33471[(31)] = inst_33392);

return statearr_33471;
})();
if(inst_33393){
var statearr_33472_33533 = state_33406__$1;
(statearr_33472_33533[(1)] = (42));

} else {
var statearr_33473_33534 = state_33406__$1;
(statearr_33473_33534[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (16))){
var inst_33305 = (state_33406[(7)]);
var inst_33307 = cljs.core.chunked_seq_QMARK_.call(null,inst_33305);
var state_33406__$1 = state_33406;
if(inst_33307){
var statearr_33474_33535 = state_33406__$1;
(statearr_33474_33535[(1)] = (19));

} else {
var statearr_33475_33536 = state_33406__$1;
(statearr_33475_33536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (38))){
var inst_33385 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33476_33537 = state_33406__$1;
(statearr_33476_33537[(2)] = inst_33385);

(statearr_33476_33537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (30))){
var state_33406__$1 = state_33406;
var statearr_33477_33538 = state_33406__$1;
(statearr_33477_33538[(2)] = null);

(statearr_33477_33538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (10))){
var inst_33286 = (state_33406[(14)]);
var inst_33284 = (state_33406[(17)]);
var inst_33294 = cljs.core._nth.call(null,inst_33284,inst_33286);
var inst_33295 = cljs.core.nth.call(null,inst_33294,(0),null);
var inst_33296 = cljs.core.nth.call(null,inst_33294,(1),null);
var state_33406__$1 = (function (){var statearr_33478 = state_33406;
(statearr_33478[(26)] = inst_33295);

return statearr_33478;
})();
if(cljs.core.truth_(inst_33296)){
var statearr_33479_33539 = state_33406__$1;
(statearr_33479_33539[(1)] = (13));

} else {
var statearr_33480_33540 = state_33406__$1;
(statearr_33480_33540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (18))){
var inst_33331 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33481_33541 = state_33406__$1;
(statearr_33481_33541[(2)] = inst_33331);

(statearr_33481_33541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (42))){
var state_33406__$1 = state_33406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33406__$1,(45),dchan);
} else {
if((state_val_33407 === (37))){
var inst_33274 = (state_33406[(9)]);
var inst_33365 = (state_33406[(25)]);
var inst_33374 = (state_33406[(23)]);
var inst_33374__$1 = cljs.core.first.call(null,inst_33365);
var inst_33375 = cljs.core.async.put_BANG_.call(null,inst_33374__$1,inst_33274,done);
var state_33406__$1 = (function (){var statearr_33482 = state_33406;
(statearr_33482[(23)] = inst_33374__$1);

return statearr_33482;
})();
if(cljs.core.truth_(inst_33375)){
var statearr_33483_33542 = state_33406__$1;
(statearr_33483_33542[(1)] = (39));

} else {
var statearr_33484_33543 = state_33406__$1;
(statearr_33484_33543[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (8))){
var inst_33286 = (state_33406[(14)]);
var inst_33285 = (state_33406[(16)]);
var inst_33288 = (inst_33286 < inst_33285);
var inst_33289 = inst_33288;
var state_33406__$1 = state_33406;
if(cljs.core.truth_(inst_33289)){
var statearr_33485_33544 = state_33406__$1;
(statearr_33485_33544[(1)] = (10));

} else {
var statearr_33486_33545 = state_33406__$1;
(statearr_33486_33545[(1)] = (11));

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
});})(c__32673__auto___33491,cs,m,dchan,dctr,done))
;
return ((function (switch__32578__auto__,c__32673__auto___33491,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32579__auto__ = null;
var cljs$core$async$mult_$_state_machine__32579__auto____0 = (function (){
var statearr_33487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33487[(0)] = cljs$core$async$mult_$_state_machine__32579__auto__);

(statearr_33487[(1)] = (1));

return statearr_33487;
});
var cljs$core$async$mult_$_state_machine__32579__auto____1 = (function (state_33406){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33488){if((e33488 instanceof Object)){
var ex__32582__auto__ = e33488;
var statearr_33489_33546 = state_33406;
(statearr_33489_33546[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33547 = state_33406;
state_33406 = G__33547;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32579__auto__ = function(state_33406){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32579__auto____1.call(this,state_33406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32579__auto____0;
cljs$core$async$mult_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32579__auto____1;
return cljs$core$async$mult_$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___33491,cs,m,dchan,dctr,done))
})();
var state__32675__auto__ = (function (){var statearr_33490 = f__32674__auto__.call(null);
(statearr_33490[(6)] = c__32673__auto___33491);

return statearr_33490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___33491,cs,m,dchan,dctr,done))
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
var G__33549 = arguments.length;
switch (G__33549) {
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
var len__4730__auto___33561 = arguments.length;
var i__4731__auto___33562 = (0);
while(true){
if((i__4731__auto___33562 < len__4730__auto___33561)){
args__4736__auto__.push((arguments[i__4731__auto___33562]));

var G__33563 = (i__4731__auto___33562 + (1));
i__4731__auto___33562 = G__33563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33555){
var map__33556 = p__33555;
var map__33556__$1 = (((((!((map__33556 == null))))?(((((map__33556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33556):map__33556);
var opts = map__33556__$1;
var statearr_33558_33564 = state;
(statearr_33558_33564[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33556,map__33556__$1,opts){
return (function (val){
var statearr_33559_33565 = state;
(statearr_33559_33565[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33556,map__33556__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33560_33566 = state;
(statearr_33560_33566[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33551){
var G__33552 = cljs.core.first.call(null,seq33551);
var seq33551__$1 = cljs.core.next.call(null,seq33551);
var G__33553 = cljs.core.first.call(null,seq33551__$1);
var seq33551__$2 = cljs.core.next.call(null,seq33551__$1);
var G__33554 = cljs.core.first.call(null,seq33551__$2);
var seq33551__$3 = cljs.core.next.call(null,seq33551__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33552,G__33553,G__33554,seq33551__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33567 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33568){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33568 = meta33568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33569,meta33568__$1){
var self__ = this;
var _33569__$1 = this;
return (new cljs.core.async.t_cljs$core$async33567(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33568__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33569){
var self__ = this;
var _33569__$1 = this;
return self__.meta33568;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33567.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33568","meta33568",-1326583058,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33567";

cljs.core.async.t_cljs$core$async33567.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33567");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33567.
 */
cljs.core.async.__GT_t_cljs$core$async33567 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33567(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33568){
return (new cljs.core.async.t_cljs$core$async33567(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33568));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33567(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32673__auto___33731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___33731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___33731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33671){
var state_val_33672 = (state_33671[(1)]);
if((state_val_33672 === (7))){
var inst_33586 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33673_33732 = state_33671__$1;
(statearr_33673_33732[(2)] = inst_33586);

(statearr_33673_33732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (20))){
var inst_33598 = (state_33671[(7)]);
var state_33671__$1 = state_33671;
var statearr_33674_33733 = state_33671__$1;
(statearr_33674_33733[(2)] = inst_33598);

(statearr_33674_33733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (27))){
var state_33671__$1 = state_33671;
var statearr_33675_33734 = state_33671__$1;
(statearr_33675_33734[(2)] = null);

(statearr_33675_33734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (1))){
var inst_33573 = (state_33671[(8)]);
var inst_33573__$1 = calc_state.call(null);
var inst_33575 = (inst_33573__$1 == null);
var inst_33576 = cljs.core.not.call(null,inst_33575);
var state_33671__$1 = (function (){var statearr_33676 = state_33671;
(statearr_33676[(8)] = inst_33573__$1);

return statearr_33676;
})();
if(inst_33576){
var statearr_33677_33735 = state_33671__$1;
(statearr_33677_33735[(1)] = (2));

} else {
var statearr_33678_33736 = state_33671__$1;
(statearr_33678_33736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (24))){
var inst_33622 = (state_33671[(9)]);
var inst_33645 = (state_33671[(10)]);
var inst_33631 = (state_33671[(11)]);
var inst_33645__$1 = inst_33622.call(null,inst_33631);
var state_33671__$1 = (function (){var statearr_33679 = state_33671;
(statearr_33679[(10)] = inst_33645__$1);

return statearr_33679;
})();
if(cljs.core.truth_(inst_33645__$1)){
var statearr_33680_33737 = state_33671__$1;
(statearr_33680_33737[(1)] = (29));

} else {
var statearr_33681_33738 = state_33671__$1;
(statearr_33681_33738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (4))){
var inst_33589 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33589)){
var statearr_33682_33739 = state_33671__$1;
(statearr_33682_33739[(1)] = (8));

} else {
var statearr_33683_33740 = state_33671__$1;
(statearr_33683_33740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (15))){
var inst_33616 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33616)){
var statearr_33684_33741 = state_33671__$1;
(statearr_33684_33741[(1)] = (19));

} else {
var statearr_33685_33742 = state_33671__$1;
(statearr_33685_33742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (21))){
var inst_33621 = (state_33671[(12)]);
var inst_33621__$1 = (state_33671[(2)]);
var inst_33622 = cljs.core.get.call(null,inst_33621__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33623 = cljs.core.get.call(null,inst_33621__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33624 = cljs.core.get.call(null,inst_33621__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33671__$1 = (function (){var statearr_33686 = state_33671;
(statearr_33686[(9)] = inst_33622);

(statearr_33686[(13)] = inst_33623);

(statearr_33686[(12)] = inst_33621__$1);

return statearr_33686;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33671__$1,(22),inst_33624);
} else {
if((state_val_33672 === (31))){
var inst_33653 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33653)){
var statearr_33687_33743 = state_33671__$1;
(statearr_33687_33743[(1)] = (32));

} else {
var statearr_33688_33744 = state_33671__$1;
(statearr_33688_33744[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (32))){
var inst_33630 = (state_33671[(14)]);
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33671__$1,(35),out,inst_33630);
} else {
if((state_val_33672 === (33))){
var inst_33621 = (state_33671[(12)]);
var inst_33598 = inst_33621;
var state_33671__$1 = (function (){var statearr_33689 = state_33671;
(statearr_33689[(7)] = inst_33598);

return statearr_33689;
})();
var statearr_33690_33745 = state_33671__$1;
(statearr_33690_33745[(2)] = null);

(statearr_33690_33745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (13))){
var inst_33598 = (state_33671[(7)]);
var inst_33605 = inst_33598.cljs$lang$protocol_mask$partition0$;
var inst_33606 = (inst_33605 & (64));
var inst_33607 = inst_33598.cljs$core$ISeq$;
var inst_33608 = (cljs.core.PROTOCOL_SENTINEL === inst_33607);
var inst_33609 = ((inst_33606) || (inst_33608));
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33609)){
var statearr_33691_33746 = state_33671__$1;
(statearr_33691_33746[(1)] = (16));

} else {
var statearr_33692_33747 = state_33671__$1;
(statearr_33692_33747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (22))){
var inst_33630 = (state_33671[(14)]);
var inst_33631 = (state_33671[(11)]);
var inst_33629 = (state_33671[(2)]);
var inst_33630__$1 = cljs.core.nth.call(null,inst_33629,(0),null);
var inst_33631__$1 = cljs.core.nth.call(null,inst_33629,(1),null);
var inst_33632 = (inst_33630__$1 == null);
var inst_33633 = cljs.core._EQ_.call(null,inst_33631__$1,change);
var inst_33634 = ((inst_33632) || (inst_33633));
var state_33671__$1 = (function (){var statearr_33693 = state_33671;
(statearr_33693[(14)] = inst_33630__$1);

(statearr_33693[(11)] = inst_33631__$1);

return statearr_33693;
})();
if(cljs.core.truth_(inst_33634)){
var statearr_33694_33748 = state_33671__$1;
(statearr_33694_33748[(1)] = (23));

} else {
var statearr_33695_33749 = state_33671__$1;
(statearr_33695_33749[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (36))){
var inst_33621 = (state_33671[(12)]);
var inst_33598 = inst_33621;
var state_33671__$1 = (function (){var statearr_33696 = state_33671;
(statearr_33696[(7)] = inst_33598);

return statearr_33696;
})();
var statearr_33697_33750 = state_33671__$1;
(statearr_33697_33750[(2)] = null);

(statearr_33697_33750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (29))){
var inst_33645 = (state_33671[(10)]);
var state_33671__$1 = state_33671;
var statearr_33698_33751 = state_33671__$1;
(statearr_33698_33751[(2)] = inst_33645);

(statearr_33698_33751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (6))){
var state_33671__$1 = state_33671;
var statearr_33699_33752 = state_33671__$1;
(statearr_33699_33752[(2)] = false);

(statearr_33699_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (28))){
var inst_33641 = (state_33671[(2)]);
var inst_33642 = calc_state.call(null);
var inst_33598 = inst_33642;
var state_33671__$1 = (function (){var statearr_33700 = state_33671;
(statearr_33700[(15)] = inst_33641);

(statearr_33700[(7)] = inst_33598);

return statearr_33700;
})();
var statearr_33701_33753 = state_33671__$1;
(statearr_33701_33753[(2)] = null);

(statearr_33701_33753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (25))){
var inst_33667 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33702_33754 = state_33671__$1;
(statearr_33702_33754[(2)] = inst_33667);

(statearr_33702_33754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (34))){
var inst_33665 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33703_33755 = state_33671__$1;
(statearr_33703_33755[(2)] = inst_33665);

(statearr_33703_33755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (17))){
var state_33671__$1 = state_33671;
var statearr_33704_33756 = state_33671__$1;
(statearr_33704_33756[(2)] = false);

(statearr_33704_33756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (3))){
var state_33671__$1 = state_33671;
var statearr_33705_33757 = state_33671__$1;
(statearr_33705_33757[(2)] = false);

(statearr_33705_33757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (12))){
var inst_33669 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33671__$1,inst_33669);
} else {
if((state_val_33672 === (2))){
var inst_33573 = (state_33671[(8)]);
var inst_33578 = inst_33573.cljs$lang$protocol_mask$partition0$;
var inst_33579 = (inst_33578 & (64));
var inst_33580 = inst_33573.cljs$core$ISeq$;
var inst_33581 = (cljs.core.PROTOCOL_SENTINEL === inst_33580);
var inst_33582 = ((inst_33579) || (inst_33581));
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33582)){
var statearr_33706_33758 = state_33671__$1;
(statearr_33706_33758[(1)] = (5));

} else {
var statearr_33707_33759 = state_33671__$1;
(statearr_33707_33759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (23))){
var inst_33630 = (state_33671[(14)]);
var inst_33636 = (inst_33630 == null);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33636)){
var statearr_33708_33760 = state_33671__$1;
(statearr_33708_33760[(1)] = (26));

} else {
var statearr_33709_33761 = state_33671__$1;
(statearr_33709_33761[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (35))){
var inst_33656 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33656)){
var statearr_33710_33762 = state_33671__$1;
(statearr_33710_33762[(1)] = (36));

} else {
var statearr_33711_33763 = state_33671__$1;
(statearr_33711_33763[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (19))){
var inst_33598 = (state_33671[(7)]);
var inst_33618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33598);
var state_33671__$1 = state_33671;
var statearr_33712_33764 = state_33671__$1;
(statearr_33712_33764[(2)] = inst_33618);

(statearr_33712_33764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (11))){
var inst_33598 = (state_33671[(7)]);
var inst_33602 = (inst_33598 == null);
var inst_33603 = cljs.core.not.call(null,inst_33602);
var state_33671__$1 = state_33671;
if(inst_33603){
var statearr_33713_33765 = state_33671__$1;
(statearr_33713_33765[(1)] = (13));

} else {
var statearr_33714_33766 = state_33671__$1;
(statearr_33714_33766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (9))){
var inst_33573 = (state_33671[(8)]);
var state_33671__$1 = state_33671;
var statearr_33715_33767 = state_33671__$1;
(statearr_33715_33767[(2)] = inst_33573);

(statearr_33715_33767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (5))){
var state_33671__$1 = state_33671;
var statearr_33716_33768 = state_33671__$1;
(statearr_33716_33768[(2)] = true);

(statearr_33716_33768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (14))){
var state_33671__$1 = state_33671;
var statearr_33717_33769 = state_33671__$1;
(statearr_33717_33769[(2)] = false);

(statearr_33717_33769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (26))){
var inst_33631 = (state_33671[(11)]);
var inst_33638 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33631);
var state_33671__$1 = state_33671;
var statearr_33718_33770 = state_33671__$1;
(statearr_33718_33770[(2)] = inst_33638);

(statearr_33718_33770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (16))){
var state_33671__$1 = state_33671;
var statearr_33719_33771 = state_33671__$1;
(statearr_33719_33771[(2)] = true);

(statearr_33719_33771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (38))){
var inst_33661 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33720_33772 = state_33671__$1;
(statearr_33720_33772[(2)] = inst_33661);

(statearr_33720_33772[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (30))){
var inst_33622 = (state_33671[(9)]);
var inst_33623 = (state_33671[(13)]);
var inst_33631 = (state_33671[(11)]);
var inst_33648 = cljs.core.empty_QMARK_.call(null,inst_33622);
var inst_33649 = inst_33623.call(null,inst_33631);
var inst_33650 = cljs.core.not.call(null,inst_33649);
var inst_33651 = ((inst_33648) && (inst_33650));
var state_33671__$1 = state_33671;
var statearr_33721_33773 = state_33671__$1;
(statearr_33721_33773[(2)] = inst_33651);

(statearr_33721_33773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (10))){
var inst_33573 = (state_33671[(8)]);
var inst_33594 = (state_33671[(2)]);
var inst_33595 = cljs.core.get.call(null,inst_33594,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33596 = cljs.core.get.call(null,inst_33594,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33597 = cljs.core.get.call(null,inst_33594,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33598 = inst_33573;
var state_33671__$1 = (function (){var statearr_33722 = state_33671;
(statearr_33722[(16)] = inst_33596);

(statearr_33722[(17)] = inst_33595);

(statearr_33722[(7)] = inst_33598);

(statearr_33722[(18)] = inst_33597);

return statearr_33722;
})();
var statearr_33723_33774 = state_33671__$1;
(statearr_33723_33774[(2)] = null);

(statearr_33723_33774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (18))){
var inst_33613 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33724_33775 = state_33671__$1;
(statearr_33724_33775[(2)] = inst_33613);

(statearr_33724_33775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (37))){
var state_33671__$1 = state_33671;
var statearr_33725_33776 = state_33671__$1;
(statearr_33725_33776[(2)] = null);

(statearr_33725_33776[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (8))){
var inst_33573 = (state_33671[(8)]);
var inst_33591 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33573);
var state_33671__$1 = state_33671;
var statearr_33726_33777 = state_33671__$1;
(statearr_33726_33777[(2)] = inst_33591);

(statearr_33726_33777[(1)] = (10));


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
});})(c__32673__auto___33731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32578__auto__,c__32673__auto___33731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32579__auto__ = null;
var cljs$core$async$mix_$_state_machine__32579__auto____0 = (function (){
var statearr_33727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33727[(0)] = cljs$core$async$mix_$_state_machine__32579__auto__);

(statearr_33727[(1)] = (1));

return statearr_33727;
});
var cljs$core$async$mix_$_state_machine__32579__auto____1 = (function (state_33671){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33728){if((e33728 instanceof Object)){
var ex__32582__auto__ = e33728;
var statearr_33729_33778 = state_33671;
(statearr_33729_33778[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33779 = state_33671;
state_33671 = G__33779;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32579__auto__ = function(state_33671){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32579__auto____1.call(this,state_33671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32579__auto____0;
cljs$core$async$mix_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32579__auto____1;
return cljs$core$async$mix_$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___33731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32675__auto__ = (function (){var statearr_33730 = f__32674__auto__.call(null);
(statearr_33730[(6)] = c__32673__auto___33731);

return statearr_33730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___33731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33781 = arguments.length;
switch (G__33781) {
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
var G__33785 = arguments.length;
switch (G__33785) {
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
return (function (p1__33783_SHARP_){
if(cljs.core.truth_(p1__33783_SHARP_.call(null,topic))){
return p1__33783_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33783_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33786 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33787){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33787 = meta33787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33788,meta33787__$1){
var self__ = this;
var _33788__$1 = this;
return (new cljs.core.async.t_cljs$core$async33786(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33787__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33788){
var self__ = this;
var _33788__$1 = this;
return self__.meta33787;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33786.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33787","meta33787",532653103,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33786";

cljs.core.async.t_cljs$core$async33786.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33786");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33786.
 */
cljs.core.async.__GT_t_cljs$core$async33786 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33787){
return (new cljs.core.async.t_cljs$core$async33786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33787));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33786(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32673__auto___33906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___33906,mults,ensure_mult,p){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___33906,mults,ensure_mult,p){
return (function (state_33860){
var state_val_33861 = (state_33860[(1)]);
if((state_val_33861 === (7))){
var inst_33856 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33862_33907 = state_33860__$1;
(statearr_33862_33907[(2)] = inst_33856);

(statearr_33862_33907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (20))){
var state_33860__$1 = state_33860;
var statearr_33863_33908 = state_33860__$1;
(statearr_33863_33908[(2)] = null);

(statearr_33863_33908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (1))){
var state_33860__$1 = state_33860;
var statearr_33864_33909 = state_33860__$1;
(statearr_33864_33909[(2)] = null);

(statearr_33864_33909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (24))){
var inst_33839 = (state_33860[(7)]);
var inst_33848 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33839);
var state_33860__$1 = state_33860;
var statearr_33865_33910 = state_33860__$1;
(statearr_33865_33910[(2)] = inst_33848);

(statearr_33865_33910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (4))){
var inst_33791 = (state_33860[(8)]);
var inst_33791__$1 = (state_33860[(2)]);
var inst_33792 = (inst_33791__$1 == null);
var state_33860__$1 = (function (){var statearr_33866 = state_33860;
(statearr_33866[(8)] = inst_33791__$1);

return statearr_33866;
})();
if(cljs.core.truth_(inst_33792)){
var statearr_33867_33911 = state_33860__$1;
(statearr_33867_33911[(1)] = (5));

} else {
var statearr_33868_33912 = state_33860__$1;
(statearr_33868_33912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (15))){
var inst_33833 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33869_33913 = state_33860__$1;
(statearr_33869_33913[(2)] = inst_33833);

(statearr_33869_33913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (21))){
var inst_33853 = (state_33860[(2)]);
var state_33860__$1 = (function (){var statearr_33870 = state_33860;
(statearr_33870[(9)] = inst_33853);

return statearr_33870;
})();
var statearr_33871_33914 = state_33860__$1;
(statearr_33871_33914[(2)] = null);

(statearr_33871_33914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (13))){
var inst_33815 = (state_33860[(10)]);
var inst_33817 = cljs.core.chunked_seq_QMARK_.call(null,inst_33815);
var state_33860__$1 = state_33860;
if(inst_33817){
var statearr_33872_33915 = state_33860__$1;
(statearr_33872_33915[(1)] = (16));

} else {
var statearr_33873_33916 = state_33860__$1;
(statearr_33873_33916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (22))){
var inst_33845 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33845)){
var statearr_33874_33917 = state_33860__$1;
(statearr_33874_33917[(1)] = (23));

} else {
var statearr_33875_33918 = state_33860__$1;
(statearr_33875_33918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (6))){
var inst_33839 = (state_33860[(7)]);
var inst_33791 = (state_33860[(8)]);
var inst_33841 = (state_33860[(11)]);
var inst_33839__$1 = topic_fn.call(null,inst_33791);
var inst_33840 = cljs.core.deref.call(null,mults);
var inst_33841__$1 = cljs.core.get.call(null,inst_33840,inst_33839__$1);
var state_33860__$1 = (function (){var statearr_33876 = state_33860;
(statearr_33876[(7)] = inst_33839__$1);

(statearr_33876[(11)] = inst_33841__$1);

return statearr_33876;
})();
if(cljs.core.truth_(inst_33841__$1)){
var statearr_33877_33919 = state_33860__$1;
(statearr_33877_33919[(1)] = (19));

} else {
var statearr_33878_33920 = state_33860__$1;
(statearr_33878_33920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (25))){
var inst_33850 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33879_33921 = state_33860__$1;
(statearr_33879_33921[(2)] = inst_33850);

(statearr_33879_33921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (17))){
var inst_33815 = (state_33860[(10)]);
var inst_33824 = cljs.core.first.call(null,inst_33815);
var inst_33825 = cljs.core.async.muxch_STAR_.call(null,inst_33824);
var inst_33826 = cljs.core.async.close_BANG_.call(null,inst_33825);
var inst_33827 = cljs.core.next.call(null,inst_33815);
var inst_33801 = inst_33827;
var inst_33802 = null;
var inst_33803 = (0);
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33880 = state_33860;
(statearr_33880[(12)] = inst_33826);

(statearr_33880[(13)] = inst_33802);

(statearr_33880[(14)] = inst_33803);

(statearr_33880[(15)] = inst_33804);

(statearr_33880[(16)] = inst_33801);

return statearr_33880;
})();
var statearr_33881_33922 = state_33860__$1;
(statearr_33881_33922[(2)] = null);

(statearr_33881_33922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (3))){
var inst_33858 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33860__$1,inst_33858);
} else {
if((state_val_33861 === (12))){
var inst_33835 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33882_33923 = state_33860__$1;
(statearr_33882_33923[(2)] = inst_33835);

(statearr_33882_33923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (2))){
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33860__$1,(4),ch);
} else {
if((state_val_33861 === (23))){
var state_33860__$1 = state_33860;
var statearr_33883_33924 = state_33860__$1;
(statearr_33883_33924[(2)] = null);

(statearr_33883_33924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (19))){
var inst_33791 = (state_33860[(8)]);
var inst_33841 = (state_33860[(11)]);
var inst_33843 = cljs.core.async.muxch_STAR_.call(null,inst_33841);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33860__$1,(22),inst_33843,inst_33791);
} else {
if((state_val_33861 === (11))){
var inst_33801 = (state_33860[(16)]);
var inst_33815 = (state_33860[(10)]);
var inst_33815__$1 = cljs.core.seq.call(null,inst_33801);
var state_33860__$1 = (function (){var statearr_33884 = state_33860;
(statearr_33884[(10)] = inst_33815__$1);

return statearr_33884;
})();
if(inst_33815__$1){
var statearr_33885_33925 = state_33860__$1;
(statearr_33885_33925[(1)] = (13));

} else {
var statearr_33886_33926 = state_33860__$1;
(statearr_33886_33926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (9))){
var inst_33837 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33887_33927 = state_33860__$1;
(statearr_33887_33927[(2)] = inst_33837);

(statearr_33887_33927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (5))){
var inst_33798 = cljs.core.deref.call(null,mults);
var inst_33799 = cljs.core.vals.call(null,inst_33798);
var inst_33800 = cljs.core.seq.call(null,inst_33799);
var inst_33801 = inst_33800;
var inst_33802 = null;
var inst_33803 = (0);
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33888 = state_33860;
(statearr_33888[(13)] = inst_33802);

(statearr_33888[(14)] = inst_33803);

(statearr_33888[(15)] = inst_33804);

(statearr_33888[(16)] = inst_33801);

return statearr_33888;
})();
var statearr_33889_33928 = state_33860__$1;
(statearr_33889_33928[(2)] = null);

(statearr_33889_33928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (14))){
var state_33860__$1 = state_33860;
var statearr_33893_33929 = state_33860__$1;
(statearr_33893_33929[(2)] = null);

(statearr_33893_33929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (16))){
var inst_33815 = (state_33860[(10)]);
var inst_33819 = cljs.core.chunk_first.call(null,inst_33815);
var inst_33820 = cljs.core.chunk_rest.call(null,inst_33815);
var inst_33821 = cljs.core.count.call(null,inst_33819);
var inst_33801 = inst_33820;
var inst_33802 = inst_33819;
var inst_33803 = inst_33821;
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33894 = state_33860;
(statearr_33894[(13)] = inst_33802);

(statearr_33894[(14)] = inst_33803);

(statearr_33894[(15)] = inst_33804);

(statearr_33894[(16)] = inst_33801);

return statearr_33894;
})();
var statearr_33895_33930 = state_33860__$1;
(statearr_33895_33930[(2)] = null);

(statearr_33895_33930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (10))){
var inst_33802 = (state_33860[(13)]);
var inst_33803 = (state_33860[(14)]);
var inst_33804 = (state_33860[(15)]);
var inst_33801 = (state_33860[(16)]);
var inst_33809 = cljs.core._nth.call(null,inst_33802,inst_33804);
var inst_33810 = cljs.core.async.muxch_STAR_.call(null,inst_33809);
var inst_33811 = cljs.core.async.close_BANG_.call(null,inst_33810);
var inst_33812 = (inst_33804 + (1));
var tmp33890 = inst_33802;
var tmp33891 = inst_33803;
var tmp33892 = inst_33801;
var inst_33801__$1 = tmp33892;
var inst_33802__$1 = tmp33890;
var inst_33803__$1 = tmp33891;
var inst_33804__$1 = inst_33812;
var state_33860__$1 = (function (){var statearr_33896 = state_33860;
(statearr_33896[(17)] = inst_33811);

(statearr_33896[(13)] = inst_33802__$1);

(statearr_33896[(14)] = inst_33803__$1);

(statearr_33896[(15)] = inst_33804__$1);

(statearr_33896[(16)] = inst_33801__$1);

return statearr_33896;
})();
var statearr_33897_33931 = state_33860__$1;
(statearr_33897_33931[(2)] = null);

(statearr_33897_33931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (18))){
var inst_33830 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33898_33932 = state_33860__$1;
(statearr_33898_33932[(2)] = inst_33830);

(statearr_33898_33932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (8))){
var inst_33803 = (state_33860[(14)]);
var inst_33804 = (state_33860[(15)]);
var inst_33806 = (inst_33804 < inst_33803);
var inst_33807 = inst_33806;
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33807)){
var statearr_33899_33933 = state_33860__$1;
(statearr_33899_33933[(1)] = (10));

} else {
var statearr_33900_33934 = state_33860__$1;
(statearr_33900_33934[(1)] = (11));

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
});})(c__32673__auto___33906,mults,ensure_mult,p))
;
return ((function (switch__32578__auto__,c__32673__auto___33906,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_33901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33901[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_33901[(1)] = (1));

return statearr_33901;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_33860){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e33902){if((e33902 instanceof Object)){
var ex__32582__auto__ = e33902;
var statearr_33903_33935 = state_33860;
(statearr_33903_33935[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33936 = state_33860;
state_33860 = G__33936;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_33860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_33860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___33906,mults,ensure_mult,p))
})();
var state__32675__auto__ = (function (){var statearr_33904 = f__32674__auto__.call(null);
(statearr_33904[(6)] = c__32673__auto___33906);

return statearr_33904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___33906,mults,ensure_mult,p))
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
var G__33938 = arguments.length;
switch (G__33938) {
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
var G__33941 = arguments.length;
switch (G__33941) {
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
var G__33944 = arguments.length;
switch (G__33944) {
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
var c__32673__auto___34011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___34011,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___34011,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33983){
var state_val_33984 = (state_33983[(1)]);
if((state_val_33984 === (7))){
var state_33983__$1 = state_33983;
var statearr_33985_34012 = state_33983__$1;
(statearr_33985_34012[(2)] = null);

(statearr_33985_34012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (1))){
var state_33983__$1 = state_33983;
var statearr_33986_34013 = state_33983__$1;
(statearr_33986_34013[(2)] = null);

(statearr_33986_34013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (4))){
var inst_33947 = (state_33983[(7)]);
var inst_33949 = (inst_33947 < cnt);
var state_33983__$1 = state_33983;
if(cljs.core.truth_(inst_33949)){
var statearr_33987_34014 = state_33983__$1;
(statearr_33987_34014[(1)] = (6));

} else {
var statearr_33988_34015 = state_33983__$1;
(statearr_33988_34015[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (15))){
var inst_33979 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
var statearr_33989_34016 = state_33983__$1;
(statearr_33989_34016[(2)] = inst_33979);

(statearr_33989_34016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (13))){
var inst_33972 = cljs.core.async.close_BANG_.call(null,out);
var state_33983__$1 = state_33983;
var statearr_33990_34017 = state_33983__$1;
(statearr_33990_34017[(2)] = inst_33972);

(statearr_33990_34017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (6))){
var state_33983__$1 = state_33983;
var statearr_33991_34018 = state_33983__$1;
(statearr_33991_34018[(2)] = null);

(statearr_33991_34018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (3))){
var inst_33981 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33983__$1,inst_33981);
} else {
if((state_val_33984 === (12))){
var inst_33969 = (state_33983[(8)]);
var inst_33969__$1 = (state_33983[(2)]);
var inst_33970 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33969__$1);
var state_33983__$1 = (function (){var statearr_33992 = state_33983;
(statearr_33992[(8)] = inst_33969__$1);

return statearr_33992;
})();
if(cljs.core.truth_(inst_33970)){
var statearr_33993_34019 = state_33983__$1;
(statearr_33993_34019[(1)] = (13));

} else {
var statearr_33994_34020 = state_33983__$1;
(statearr_33994_34020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (2))){
var inst_33946 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33947 = (0);
var state_33983__$1 = (function (){var statearr_33995 = state_33983;
(statearr_33995[(9)] = inst_33946);

(statearr_33995[(7)] = inst_33947);

return statearr_33995;
})();
var statearr_33996_34021 = state_33983__$1;
(statearr_33996_34021[(2)] = null);

(statearr_33996_34021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (11))){
var inst_33947 = (state_33983[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33983,(10),Object,null,(9));
var inst_33956 = chs__$1.call(null,inst_33947);
var inst_33957 = done.call(null,inst_33947);
var inst_33958 = cljs.core.async.take_BANG_.call(null,inst_33956,inst_33957);
var state_33983__$1 = state_33983;
var statearr_33997_34022 = state_33983__$1;
(statearr_33997_34022[(2)] = inst_33958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (9))){
var inst_33947 = (state_33983[(7)]);
var inst_33960 = (state_33983[(2)]);
var inst_33961 = (inst_33947 + (1));
var inst_33947__$1 = inst_33961;
var state_33983__$1 = (function (){var statearr_33998 = state_33983;
(statearr_33998[(10)] = inst_33960);

(statearr_33998[(7)] = inst_33947__$1);

return statearr_33998;
})();
var statearr_33999_34023 = state_33983__$1;
(statearr_33999_34023[(2)] = null);

(statearr_33999_34023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (5))){
var inst_33967 = (state_33983[(2)]);
var state_33983__$1 = (function (){var statearr_34000 = state_33983;
(statearr_34000[(11)] = inst_33967);

return statearr_34000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33983__$1,(12),dchan);
} else {
if((state_val_33984 === (14))){
var inst_33969 = (state_33983[(8)]);
var inst_33974 = cljs.core.apply.call(null,f,inst_33969);
var state_33983__$1 = state_33983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33983__$1,(16),out,inst_33974);
} else {
if((state_val_33984 === (16))){
var inst_33976 = (state_33983[(2)]);
var state_33983__$1 = (function (){var statearr_34001 = state_33983;
(statearr_34001[(12)] = inst_33976);

return statearr_34001;
})();
var statearr_34002_34024 = state_33983__$1;
(statearr_34002_34024[(2)] = null);

(statearr_34002_34024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (10))){
var inst_33951 = (state_33983[(2)]);
var inst_33952 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33983__$1 = (function (){var statearr_34003 = state_33983;
(statearr_34003[(13)] = inst_33951);

return statearr_34003;
})();
var statearr_34004_34025 = state_33983__$1;
(statearr_34004_34025[(2)] = inst_33952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (8))){
var inst_33965 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
var statearr_34005_34026 = state_33983__$1;
(statearr_34005_34026[(2)] = inst_33965);

(statearr_34005_34026[(1)] = (5));


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
});})(c__32673__auto___34011,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32578__auto__,c__32673__auto___34011,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_34006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34006[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_34006[(1)] = (1));

return statearr_34006;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_33983){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_33983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34007){if((e34007 instanceof Object)){
var ex__32582__auto__ = e34007;
var statearr_34008_34027 = state_33983;
(statearr_34008_34027[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34028 = state_33983;
state_33983 = G__34028;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_33983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_33983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___34011,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32675__auto__ = (function (){var statearr_34009 = f__32674__auto__.call(null);
(statearr_34009[(6)] = c__32673__auto___34011);

return statearr_34009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___34011,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34031 = arguments.length;
switch (G__34031) {
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
var c__32673__auto___34085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___34085,out){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___34085,out){
return (function (state_34063){
var state_val_34064 = (state_34063[(1)]);
if((state_val_34064 === (7))){
var inst_34043 = (state_34063[(7)]);
var inst_34042 = (state_34063[(8)]);
var inst_34042__$1 = (state_34063[(2)]);
var inst_34043__$1 = cljs.core.nth.call(null,inst_34042__$1,(0),null);
var inst_34044 = cljs.core.nth.call(null,inst_34042__$1,(1),null);
var inst_34045 = (inst_34043__$1 == null);
var state_34063__$1 = (function (){var statearr_34065 = state_34063;
(statearr_34065[(7)] = inst_34043__$1);

(statearr_34065[(8)] = inst_34042__$1);

(statearr_34065[(9)] = inst_34044);

return statearr_34065;
})();
if(cljs.core.truth_(inst_34045)){
var statearr_34066_34086 = state_34063__$1;
(statearr_34066_34086[(1)] = (8));

} else {
var statearr_34067_34087 = state_34063__$1;
(statearr_34067_34087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (1))){
var inst_34032 = cljs.core.vec.call(null,chs);
var inst_34033 = inst_34032;
var state_34063__$1 = (function (){var statearr_34068 = state_34063;
(statearr_34068[(10)] = inst_34033);

return statearr_34068;
})();
var statearr_34069_34088 = state_34063__$1;
(statearr_34069_34088[(2)] = null);

(statearr_34069_34088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (4))){
var inst_34033 = (state_34063[(10)]);
var state_34063__$1 = state_34063;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34063__$1,(7),inst_34033);
} else {
if((state_val_34064 === (6))){
var inst_34059 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34070_34089 = state_34063__$1;
(statearr_34070_34089[(2)] = inst_34059);

(statearr_34070_34089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (3))){
var inst_34061 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34063__$1,inst_34061);
} else {
if((state_val_34064 === (2))){
var inst_34033 = (state_34063[(10)]);
var inst_34035 = cljs.core.count.call(null,inst_34033);
var inst_34036 = (inst_34035 > (0));
var state_34063__$1 = state_34063;
if(cljs.core.truth_(inst_34036)){
var statearr_34072_34090 = state_34063__$1;
(statearr_34072_34090[(1)] = (4));

} else {
var statearr_34073_34091 = state_34063__$1;
(statearr_34073_34091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (11))){
var inst_34033 = (state_34063[(10)]);
var inst_34052 = (state_34063[(2)]);
var tmp34071 = inst_34033;
var inst_34033__$1 = tmp34071;
var state_34063__$1 = (function (){var statearr_34074 = state_34063;
(statearr_34074[(10)] = inst_34033__$1);

(statearr_34074[(11)] = inst_34052);

return statearr_34074;
})();
var statearr_34075_34092 = state_34063__$1;
(statearr_34075_34092[(2)] = null);

(statearr_34075_34092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (9))){
var inst_34043 = (state_34063[(7)]);
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34063__$1,(11),out,inst_34043);
} else {
if((state_val_34064 === (5))){
var inst_34057 = cljs.core.async.close_BANG_.call(null,out);
var state_34063__$1 = state_34063;
var statearr_34076_34093 = state_34063__$1;
(statearr_34076_34093[(2)] = inst_34057);

(statearr_34076_34093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (10))){
var inst_34055 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34077_34094 = state_34063__$1;
(statearr_34077_34094[(2)] = inst_34055);

(statearr_34077_34094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (8))){
var inst_34033 = (state_34063[(10)]);
var inst_34043 = (state_34063[(7)]);
var inst_34042 = (state_34063[(8)]);
var inst_34044 = (state_34063[(9)]);
var inst_34047 = (function (){var cs = inst_34033;
var vec__34038 = inst_34042;
var v = inst_34043;
var c = inst_34044;
return ((function (cs,vec__34038,v,c,inst_34033,inst_34043,inst_34042,inst_34044,state_val_34064,c__32673__auto___34085,out){
return (function (p1__34029_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34029_SHARP_);
});
;})(cs,vec__34038,v,c,inst_34033,inst_34043,inst_34042,inst_34044,state_val_34064,c__32673__auto___34085,out))
})();
var inst_34048 = cljs.core.filterv.call(null,inst_34047,inst_34033);
var inst_34033__$1 = inst_34048;
var state_34063__$1 = (function (){var statearr_34078 = state_34063;
(statearr_34078[(10)] = inst_34033__$1);

return statearr_34078;
})();
var statearr_34079_34095 = state_34063__$1;
(statearr_34079_34095[(2)] = null);

(statearr_34079_34095[(1)] = (2));


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
});})(c__32673__auto___34085,out))
;
return ((function (switch__32578__auto__,c__32673__auto___34085,out){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_34080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34080[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_34080[(1)] = (1));

return statearr_34080;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_34063){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34081){if((e34081 instanceof Object)){
var ex__32582__auto__ = e34081;
var statearr_34082_34096 = state_34063;
(statearr_34082_34096[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34097 = state_34063;
state_34063 = G__34097;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_34063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_34063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___34085,out))
})();
var state__32675__auto__ = (function (){var statearr_34083 = f__32674__auto__.call(null);
(statearr_34083[(6)] = c__32673__auto___34085);

return statearr_34083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___34085,out))
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
var G__34099 = arguments.length;
switch (G__34099) {
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
var c__32673__auto___34144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___34144,out){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___34144,out){
return (function (state_34123){
var state_val_34124 = (state_34123[(1)]);
if((state_val_34124 === (7))){
var inst_34105 = (state_34123[(7)]);
var inst_34105__$1 = (state_34123[(2)]);
var inst_34106 = (inst_34105__$1 == null);
var inst_34107 = cljs.core.not.call(null,inst_34106);
var state_34123__$1 = (function (){var statearr_34125 = state_34123;
(statearr_34125[(7)] = inst_34105__$1);

return statearr_34125;
})();
if(inst_34107){
var statearr_34126_34145 = state_34123__$1;
(statearr_34126_34145[(1)] = (8));

} else {
var statearr_34127_34146 = state_34123__$1;
(statearr_34127_34146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (1))){
var inst_34100 = (0);
var state_34123__$1 = (function (){var statearr_34128 = state_34123;
(statearr_34128[(8)] = inst_34100);

return statearr_34128;
})();
var statearr_34129_34147 = state_34123__$1;
(statearr_34129_34147[(2)] = null);

(statearr_34129_34147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (4))){
var state_34123__$1 = state_34123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34123__$1,(7),ch);
} else {
if((state_val_34124 === (6))){
var inst_34118 = (state_34123[(2)]);
var state_34123__$1 = state_34123;
var statearr_34130_34148 = state_34123__$1;
(statearr_34130_34148[(2)] = inst_34118);

(statearr_34130_34148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (3))){
var inst_34120 = (state_34123[(2)]);
var inst_34121 = cljs.core.async.close_BANG_.call(null,out);
var state_34123__$1 = (function (){var statearr_34131 = state_34123;
(statearr_34131[(9)] = inst_34120);

return statearr_34131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34123__$1,inst_34121);
} else {
if((state_val_34124 === (2))){
var inst_34100 = (state_34123[(8)]);
var inst_34102 = (inst_34100 < n);
var state_34123__$1 = state_34123;
if(cljs.core.truth_(inst_34102)){
var statearr_34132_34149 = state_34123__$1;
(statearr_34132_34149[(1)] = (4));

} else {
var statearr_34133_34150 = state_34123__$1;
(statearr_34133_34150[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (11))){
var inst_34100 = (state_34123[(8)]);
var inst_34110 = (state_34123[(2)]);
var inst_34111 = (inst_34100 + (1));
var inst_34100__$1 = inst_34111;
var state_34123__$1 = (function (){var statearr_34134 = state_34123;
(statearr_34134[(10)] = inst_34110);

(statearr_34134[(8)] = inst_34100__$1);

return statearr_34134;
})();
var statearr_34135_34151 = state_34123__$1;
(statearr_34135_34151[(2)] = null);

(statearr_34135_34151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (9))){
var state_34123__$1 = state_34123;
var statearr_34136_34152 = state_34123__$1;
(statearr_34136_34152[(2)] = null);

(statearr_34136_34152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (5))){
var state_34123__$1 = state_34123;
var statearr_34137_34153 = state_34123__$1;
(statearr_34137_34153[(2)] = null);

(statearr_34137_34153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (10))){
var inst_34115 = (state_34123[(2)]);
var state_34123__$1 = state_34123;
var statearr_34138_34154 = state_34123__$1;
(statearr_34138_34154[(2)] = inst_34115);

(statearr_34138_34154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34124 === (8))){
var inst_34105 = (state_34123[(7)]);
var state_34123__$1 = state_34123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34123__$1,(11),out,inst_34105);
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
});})(c__32673__auto___34144,out))
;
return ((function (switch__32578__auto__,c__32673__auto___34144,out){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_34139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34139[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_34139[(1)] = (1));

return statearr_34139;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_34123){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34140){if((e34140 instanceof Object)){
var ex__32582__auto__ = e34140;
var statearr_34141_34155 = state_34123;
(statearr_34141_34155[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34156 = state_34123;
state_34123 = G__34156;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_34123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_34123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___34144,out))
})();
var state__32675__auto__ = (function (){var statearr_34142 = f__32674__auto__.call(null);
(statearr_34142[(6)] = c__32673__auto___34144);

return statearr_34142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___34144,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34158 = (function (f,ch,meta34159){
this.f = f;
this.ch = ch;
this.meta34159 = meta34159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34160,meta34159__$1){
var self__ = this;
var _34160__$1 = this;
return (new cljs.core.async.t_cljs$core$async34158(self__.f,self__.ch,meta34159__$1));
});

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34160){
var self__ = this;
var _34160__$1 = this;
return self__.meta34159;
});

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34161 = (function (f,ch,meta34159,_,fn1,meta34162){
this.f = f;
this.ch = ch;
this.meta34159 = meta34159;
this._ = _;
this.fn1 = fn1;
this.meta34162 = meta34162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34163,meta34162__$1){
var self__ = this;
var _34163__$1 = this;
return (new cljs.core.async.t_cljs$core$async34161(self__.f,self__.ch,self__.meta34159,self__._,self__.fn1,meta34162__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34163){
var self__ = this;
var _34163__$1 = this;
return self__.meta34162;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34157_SHARP_){
return f1.call(null,(((p1__34157_SHARP_ == null))?null:self__.f.call(null,p1__34157_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34161.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34159","meta34159",345551131,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34158","cljs.core.async/t_cljs$core$async34158",-36195199,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34162","meta34162",-516019606,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34161";

cljs.core.async.t_cljs$core$async34161.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34161");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34161.
 */
cljs.core.async.__GT_t_cljs$core$async34161 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34161(f__$1,ch__$1,meta34159__$1,___$2,fn1__$1,meta34162){
return (new cljs.core.async.t_cljs$core$async34161(f__$1,ch__$1,meta34159__$1,___$2,fn1__$1,meta34162));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34161(self__.f,self__.ch,self__.meta34159,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34159","meta34159",345551131,null)], null);
});

cljs.core.async.t_cljs$core$async34158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34158";

cljs.core.async.t_cljs$core$async34158.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34158");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34158.
 */
cljs.core.async.__GT_t_cljs$core$async34158 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34158(f__$1,ch__$1,meta34159){
return (new cljs.core.async.t_cljs$core$async34158(f__$1,ch__$1,meta34159));
});

}

return (new cljs.core.async.t_cljs$core$async34158(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34164 = (function (f,ch,meta34165){
this.f = f;
this.ch = ch;
this.meta34165 = meta34165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34166,meta34165__$1){
var self__ = this;
var _34166__$1 = this;
return (new cljs.core.async.t_cljs$core$async34164(self__.f,self__.ch,meta34165__$1));
});

cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34166){
var self__ = this;
var _34166__$1 = this;
return self__.meta34165;
});

cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34165","meta34165",647466310,null)], null);
});

cljs.core.async.t_cljs$core$async34164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34164";

cljs.core.async.t_cljs$core$async34164.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34164");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34164.
 */
cljs.core.async.__GT_t_cljs$core$async34164 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34164(f__$1,ch__$1,meta34165){
return (new cljs.core.async.t_cljs$core$async34164(f__$1,ch__$1,meta34165));
});

}

return (new cljs.core.async.t_cljs$core$async34164(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34167 = (function (p,ch,meta34168){
this.p = p;
this.ch = ch;
this.meta34168 = meta34168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34169,meta34168__$1){
var self__ = this;
var _34169__$1 = this;
return (new cljs.core.async.t_cljs$core$async34167(self__.p,self__.ch,meta34168__$1));
});

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34169){
var self__ = this;
var _34169__$1 = this;
return self__.meta34168;
});

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34168","meta34168",1782388085,null)], null);
});

cljs.core.async.t_cljs$core$async34167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34167";

cljs.core.async.t_cljs$core$async34167.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34167");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34167.
 */
cljs.core.async.__GT_t_cljs$core$async34167 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34167(p__$1,ch__$1,meta34168){
return (new cljs.core.async.t_cljs$core$async34167(p__$1,ch__$1,meta34168));
});

}

return (new cljs.core.async.t_cljs$core$async34167(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34171 = arguments.length;
switch (G__34171) {
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
var c__32673__auto___34211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___34211,out){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___34211,out){
return (function (state_34192){
var state_val_34193 = (state_34192[(1)]);
if((state_val_34193 === (7))){
var inst_34188 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
var statearr_34194_34212 = state_34192__$1;
(statearr_34194_34212[(2)] = inst_34188);

(statearr_34194_34212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (1))){
var state_34192__$1 = state_34192;
var statearr_34195_34213 = state_34192__$1;
(statearr_34195_34213[(2)] = null);

(statearr_34195_34213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (4))){
var inst_34174 = (state_34192[(7)]);
var inst_34174__$1 = (state_34192[(2)]);
var inst_34175 = (inst_34174__$1 == null);
var state_34192__$1 = (function (){var statearr_34196 = state_34192;
(statearr_34196[(7)] = inst_34174__$1);

return statearr_34196;
})();
if(cljs.core.truth_(inst_34175)){
var statearr_34197_34214 = state_34192__$1;
(statearr_34197_34214[(1)] = (5));

} else {
var statearr_34198_34215 = state_34192__$1;
(statearr_34198_34215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (6))){
var inst_34174 = (state_34192[(7)]);
var inst_34179 = p.call(null,inst_34174);
var state_34192__$1 = state_34192;
if(cljs.core.truth_(inst_34179)){
var statearr_34199_34216 = state_34192__$1;
(statearr_34199_34216[(1)] = (8));

} else {
var statearr_34200_34217 = state_34192__$1;
(statearr_34200_34217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (3))){
var inst_34190 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34192__$1,inst_34190);
} else {
if((state_val_34193 === (2))){
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34192__$1,(4),ch);
} else {
if((state_val_34193 === (11))){
var inst_34182 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
var statearr_34201_34218 = state_34192__$1;
(statearr_34201_34218[(2)] = inst_34182);

(statearr_34201_34218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (9))){
var state_34192__$1 = state_34192;
var statearr_34202_34219 = state_34192__$1;
(statearr_34202_34219[(2)] = null);

(statearr_34202_34219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (5))){
var inst_34177 = cljs.core.async.close_BANG_.call(null,out);
var state_34192__$1 = state_34192;
var statearr_34203_34220 = state_34192__$1;
(statearr_34203_34220[(2)] = inst_34177);

(statearr_34203_34220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (10))){
var inst_34185 = (state_34192[(2)]);
var state_34192__$1 = (function (){var statearr_34204 = state_34192;
(statearr_34204[(8)] = inst_34185);

return statearr_34204;
})();
var statearr_34205_34221 = state_34192__$1;
(statearr_34205_34221[(2)] = null);

(statearr_34205_34221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (8))){
var inst_34174 = (state_34192[(7)]);
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34192__$1,(11),out,inst_34174);
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
});})(c__32673__auto___34211,out))
;
return ((function (switch__32578__auto__,c__32673__auto___34211,out){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_34192){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34207){if((e34207 instanceof Object)){
var ex__32582__auto__ = e34207;
var statearr_34208_34222 = state_34192;
(statearr_34208_34222[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34223 = state_34192;
state_34192 = G__34223;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_34192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_34192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___34211,out))
})();
var state__32675__auto__ = (function (){var statearr_34209 = f__32674__auto__.call(null);
(statearr_34209[(6)] = c__32673__auto___34211);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___34211,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34225 = arguments.length;
switch (G__34225) {
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
var c__32673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto__){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto__){
return (function (state_34288){
var state_val_34289 = (state_34288[(1)]);
if((state_val_34289 === (7))){
var inst_34284 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34290_34328 = state_34288__$1;
(statearr_34290_34328[(2)] = inst_34284);

(statearr_34290_34328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (20))){
var inst_34254 = (state_34288[(7)]);
var inst_34265 = (state_34288[(2)]);
var inst_34266 = cljs.core.next.call(null,inst_34254);
var inst_34240 = inst_34266;
var inst_34241 = null;
var inst_34242 = (0);
var inst_34243 = (0);
var state_34288__$1 = (function (){var statearr_34291 = state_34288;
(statearr_34291[(8)] = inst_34241);

(statearr_34291[(9)] = inst_34242);

(statearr_34291[(10)] = inst_34240);

(statearr_34291[(11)] = inst_34265);

(statearr_34291[(12)] = inst_34243);

return statearr_34291;
})();
var statearr_34292_34329 = state_34288__$1;
(statearr_34292_34329[(2)] = null);

(statearr_34292_34329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (1))){
var state_34288__$1 = state_34288;
var statearr_34293_34330 = state_34288__$1;
(statearr_34293_34330[(2)] = null);

(statearr_34293_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (4))){
var inst_34229 = (state_34288[(13)]);
var inst_34229__$1 = (state_34288[(2)]);
var inst_34230 = (inst_34229__$1 == null);
var state_34288__$1 = (function (){var statearr_34294 = state_34288;
(statearr_34294[(13)] = inst_34229__$1);

return statearr_34294;
})();
if(cljs.core.truth_(inst_34230)){
var statearr_34295_34331 = state_34288__$1;
(statearr_34295_34331[(1)] = (5));

} else {
var statearr_34296_34332 = state_34288__$1;
(statearr_34296_34332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (15))){
var state_34288__$1 = state_34288;
var statearr_34300_34333 = state_34288__$1;
(statearr_34300_34333[(2)] = null);

(statearr_34300_34333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (21))){
var state_34288__$1 = state_34288;
var statearr_34301_34334 = state_34288__$1;
(statearr_34301_34334[(2)] = null);

(statearr_34301_34334[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (13))){
var inst_34241 = (state_34288[(8)]);
var inst_34242 = (state_34288[(9)]);
var inst_34240 = (state_34288[(10)]);
var inst_34243 = (state_34288[(12)]);
var inst_34250 = (state_34288[(2)]);
var inst_34251 = (inst_34243 + (1));
var tmp34297 = inst_34241;
var tmp34298 = inst_34242;
var tmp34299 = inst_34240;
var inst_34240__$1 = tmp34299;
var inst_34241__$1 = tmp34297;
var inst_34242__$1 = tmp34298;
var inst_34243__$1 = inst_34251;
var state_34288__$1 = (function (){var statearr_34302 = state_34288;
(statearr_34302[(8)] = inst_34241__$1);

(statearr_34302[(9)] = inst_34242__$1);

(statearr_34302[(10)] = inst_34240__$1);

(statearr_34302[(14)] = inst_34250);

(statearr_34302[(12)] = inst_34243__$1);

return statearr_34302;
})();
var statearr_34303_34335 = state_34288__$1;
(statearr_34303_34335[(2)] = null);

(statearr_34303_34335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (22))){
var state_34288__$1 = state_34288;
var statearr_34304_34336 = state_34288__$1;
(statearr_34304_34336[(2)] = null);

(statearr_34304_34336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (6))){
var inst_34229 = (state_34288[(13)]);
var inst_34238 = f.call(null,inst_34229);
var inst_34239 = cljs.core.seq.call(null,inst_34238);
var inst_34240 = inst_34239;
var inst_34241 = null;
var inst_34242 = (0);
var inst_34243 = (0);
var state_34288__$1 = (function (){var statearr_34305 = state_34288;
(statearr_34305[(8)] = inst_34241);

(statearr_34305[(9)] = inst_34242);

(statearr_34305[(10)] = inst_34240);

(statearr_34305[(12)] = inst_34243);

return statearr_34305;
})();
var statearr_34306_34337 = state_34288__$1;
(statearr_34306_34337[(2)] = null);

(statearr_34306_34337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (17))){
var inst_34254 = (state_34288[(7)]);
var inst_34258 = cljs.core.chunk_first.call(null,inst_34254);
var inst_34259 = cljs.core.chunk_rest.call(null,inst_34254);
var inst_34260 = cljs.core.count.call(null,inst_34258);
var inst_34240 = inst_34259;
var inst_34241 = inst_34258;
var inst_34242 = inst_34260;
var inst_34243 = (0);
var state_34288__$1 = (function (){var statearr_34307 = state_34288;
(statearr_34307[(8)] = inst_34241);

(statearr_34307[(9)] = inst_34242);

(statearr_34307[(10)] = inst_34240);

(statearr_34307[(12)] = inst_34243);

return statearr_34307;
})();
var statearr_34308_34338 = state_34288__$1;
(statearr_34308_34338[(2)] = null);

(statearr_34308_34338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (3))){
var inst_34286 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34288__$1,inst_34286);
} else {
if((state_val_34289 === (12))){
var inst_34274 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34309_34339 = state_34288__$1;
(statearr_34309_34339[(2)] = inst_34274);

(statearr_34309_34339[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (2))){
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34288__$1,(4),in$);
} else {
if((state_val_34289 === (23))){
var inst_34282 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34310_34340 = state_34288__$1;
(statearr_34310_34340[(2)] = inst_34282);

(statearr_34310_34340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (19))){
var inst_34269 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34311_34341 = state_34288__$1;
(statearr_34311_34341[(2)] = inst_34269);

(statearr_34311_34341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (11))){
var inst_34254 = (state_34288[(7)]);
var inst_34240 = (state_34288[(10)]);
var inst_34254__$1 = cljs.core.seq.call(null,inst_34240);
var state_34288__$1 = (function (){var statearr_34312 = state_34288;
(statearr_34312[(7)] = inst_34254__$1);

return statearr_34312;
})();
if(inst_34254__$1){
var statearr_34313_34342 = state_34288__$1;
(statearr_34313_34342[(1)] = (14));

} else {
var statearr_34314_34343 = state_34288__$1;
(statearr_34314_34343[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (9))){
var inst_34276 = (state_34288[(2)]);
var inst_34277 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34288__$1 = (function (){var statearr_34315 = state_34288;
(statearr_34315[(15)] = inst_34276);

return statearr_34315;
})();
if(cljs.core.truth_(inst_34277)){
var statearr_34316_34344 = state_34288__$1;
(statearr_34316_34344[(1)] = (21));

} else {
var statearr_34317_34345 = state_34288__$1;
(statearr_34317_34345[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (5))){
var inst_34232 = cljs.core.async.close_BANG_.call(null,out);
var state_34288__$1 = state_34288;
var statearr_34318_34346 = state_34288__$1;
(statearr_34318_34346[(2)] = inst_34232);

(statearr_34318_34346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (14))){
var inst_34254 = (state_34288[(7)]);
var inst_34256 = cljs.core.chunked_seq_QMARK_.call(null,inst_34254);
var state_34288__$1 = state_34288;
if(inst_34256){
var statearr_34319_34347 = state_34288__$1;
(statearr_34319_34347[(1)] = (17));

} else {
var statearr_34320_34348 = state_34288__$1;
(statearr_34320_34348[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (16))){
var inst_34272 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34321_34349 = state_34288__$1;
(statearr_34321_34349[(2)] = inst_34272);

(statearr_34321_34349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (10))){
var inst_34241 = (state_34288[(8)]);
var inst_34243 = (state_34288[(12)]);
var inst_34248 = cljs.core._nth.call(null,inst_34241,inst_34243);
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34288__$1,(13),out,inst_34248);
} else {
if((state_val_34289 === (18))){
var inst_34254 = (state_34288[(7)]);
var inst_34263 = cljs.core.first.call(null,inst_34254);
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34288__$1,(20),out,inst_34263);
} else {
if((state_val_34289 === (8))){
var inst_34242 = (state_34288[(9)]);
var inst_34243 = (state_34288[(12)]);
var inst_34245 = (inst_34243 < inst_34242);
var inst_34246 = inst_34245;
var state_34288__$1 = state_34288;
if(cljs.core.truth_(inst_34246)){
var statearr_34322_34350 = state_34288__$1;
(statearr_34322_34350[(1)] = (10));

} else {
var statearr_34323_34351 = state_34288__$1;
(statearr_34323_34351[(1)] = (11));

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
});})(c__32673__auto__))
;
return ((function (switch__32578__auto__,c__32673__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32579__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32579__auto____0 = (function (){
var statearr_34324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34324[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32579__auto__);

(statearr_34324[(1)] = (1));

return statearr_34324;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32579__auto____1 = (function (state_34288){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34325){if((e34325 instanceof Object)){
var ex__32582__auto__ = e34325;
var statearr_34326_34352 = state_34288;
(statearr_34326_34352[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34353 = state_34288;
state_34288 = G__34353;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32579__auto__ = function(state_34288){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32579__auto____1.call(this,state_34288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32579__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32579__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto__))
})();
var state__32675__auto__ = (function (){var statearr_34327 = f__32674__auto__.call(null);
(statearr_34327[(6)] = c__32673__auto__);

return statearr_34327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto__))
);

return c__32673__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34355 = arguments.length;
switch (G__34355) {
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
var G__34358 = arguments.length;
switch (G__34358) {
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
var G__34361 = arguments.length;
switch (G__34361) {
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
var c__32673__auto___34408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___34408,out){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___34408,out){
return (function (state_34385){
var state_val_34386 = (state_34385[(1)]);
if((state_val_34386 === (7))){
var inst_34380 = (state_34385[(2)]);
var state_34385__$1 = state_34385;
var statearr_34387_34409 = state_34385__$1;
(statearr_34387_34409[(2)] = inst_34380);

(statearr_34387_34409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (1))){
var inst_34362 = null;
var state_34385__$1 = (function (){var statearr_34388 = state_34385;
(statearr_34388[(7)] = inst_34362);

return statearr_34388;
})();
var statearr_34389_34410 = state_34385__$1;
(statearr_34389_34410[(2)] = null);

(statearr_34389_34410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (4))){
var inst_34365 = (state_34385[(8)]);
var inst_34365__$1 = (state_34385[(2)]);
var inst_34366 = (inst_34365__$1 == null);
var inst_34367 = cljs.core.not.call(null,inst_34366);
var state_34385__$1 = (function (){var statearr_34390 = state_34385;
(statearr_34390[(8)] = inst_34365__$1);

return statearr_34390;
})();
if(inst_34367){
var statearr_34391_34411 = state_34385__$1;
(statearr_34391_34411[(1)] = (5));

} else {
var statearr_34392_34412 = state_34385__$1;
(statearr_34392_34412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (6))){
var state_34385__$1 = state_34385;
var statearr_34393_34413 = state_34385__$1;
(statearr_34393_34413[(2)] = null);

(statearr_34393_34413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (3))){
var inst_34382 = (state_34385[(2)]);
var inst_34383 = cljs.core.async.close_BANG_.call(null,out);
var state_34385__$1 = (function (){var statearr_34394 = state_34385;
(statearr_34394[(9)] = inst_34382);

return statearr_34394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34385__$1,inst_34383);
} else {
if((state_val_34386 === (2))){
var state_34385__$1 = state_34385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34385__$1,(4),ch);
} else {
if((state_val_34386 === (11))){
var inst_34365 = (state_34385[(8)]);
var inst_34374 = (state_34385[(2)]);
var inst_34362 = inst_34365;
var state_34385__$1 = (function (){var statearr_34395 = state_34385;
(statearr_34395[(7)] = inst_34362);

(statearr_34395[(10)] = inst_34374);

return statearr_34395;
})();
var statearr_34396_34414 = state_34385__$1;
(statearr_34396_34414[(2)] = null);

(statearr_34396_34414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (9))){
var inst_34365 = (state_34385[(8)]);
var state_34385__$1 = state_34385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34385__$1,(11),out,inst_34365);
} else {
if((state_val_34386 === (5))){
var inst_34362 = (state_34385[(7)]);
var inst_34365 = (state_34385[(8)]);
var inst_34369 = cljs.core._EQ_.call(null,inst_34365,inst_34362);
var state_34385__$1 = state_34385;
if(inst_34369){
var statearr_34398_34415 = state_34385__$1;
(statearr_34398_34415[(1)] = (8));

} else {
var statearr_34399_34416 = state_34385__$1;
(statearr_34399_34416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (10))){
var inst_34377 = (state_34385[(2)]);
var state_34385__$1 = state_34385;
var statearr_34400_34417 = state_34385__$1;
(statearr_34400_34417[(2)] = inst_34377);

(statearr_34400_34417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34386 === (8))){
var inst_34362 = (state_34385[(7)]);
var tmp34397 = inst_34362;
var inst_34362__$1 = tmp34397;
var state_34385__$1 = (function (){var statearr_34401 = state_34385;
(statearr_34401[(7)] = inst_34362__$1);

return statearr_34401;
})();
var statearr_34402_34418 = state_34385__$1;
(statearr_34402_34418[(2)] = null);

(statearr_34402_34418[(1)] = (2));


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
});})(c__32673__auto___34408,out))
;
return ((function (switch__32578__auto__,c__32673__auto___34408,out){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_34403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34403[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_34403[(1)] = (1));

return statearr_34403;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_34385){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34404){if((e34404 instanceof Object)){
var ex__32582__auto__ = e34404;
var statearr_34405_34419 = state_34385;
(statearr_34405_34419[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34420 = state_34385;
state_34385 = G__34420;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_34385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_34385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___34408,out))
})();
var state__32675__auto__ = (function (){var statearr_34406 = f__32674__auto__.call(null);
(statearr_34406[(6)] = c__32673__auto___34408);

return statearr_34406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___34408,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34422 = arguments.length;
switch (G__34422) {
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
var c__32673__auto___34488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___34488,out){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___34488,out){
return (function (state_34460){
var state_val_34461 = (state_34460[(1)]);
if((state_val_34461 === (7))){
var inst_34456 = (state_34460[(2)]);
var state_34460__$1 = state_34460;
var statearr_34462_34489 = state_34460__$1;
(statearr_34462_34489[(2)] = inst_34456);

(statearr_34462_34489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (1))){
var inst_34423 = (new Array(n));
var inst_34424 = inst_34423;
var inst_34425 = (0);
var state_34460__$1 = (function (){var statearr_34463 = state_34460;
(statearr_34463[(7)] = inst_34424);

(statearr_34463[(8)] = inst_34425);

return statearr_34463;
})();
var statearr_34464_34490 = state_34460__$1;
(statearr_34464_34490[(2)] = null);

(statearr_34464_34490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (4))){
var inst_34428 = (state_34460[(9)]);
var inst_34428__$1 = (state_34460[(2)]);
var inst_34429 = (inst_34428__$1 == null);
var inst_34430 = cljs.core.not.call(null,inst_34429);
var state_34460__$1 = (function (){var statearr_34465 = state_34460;
(statearr_34465[(9)] = inst_34428__$1);

return statearr_34465;
})();
if(inst_34430){
var statearr_34466_34491 = state_34460__$1;
(statearr_34466_34491[(1)] = (5));

} else {
var statearr_34467_34492 = state_34460__$1;
(statearr_34467_34492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (15))){
var inst_34450 = (state_34460[(2)]);
var state_34460__$1 = state_34460;
var statearr_34468_34493 = state_34460__$1;
(statearr_34468_34493[(2)] = inst_34450);

(statearr_34468_34493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (13))){
var state_34460__$1 = state_34460;
var statearr_34469_34494 = state_34460__$1;
(statearr_34469_34494[(2)] = null);

(statearr_34469_34494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (6))){
var inst_34425 = (state_34460[(8)]);
var inst_34446 = (inst_34425 > (0));
var state_34460__$1 = state_34460;
if(cljs.core.truth_(inst_34446)){
var statearr_34470_34495 = state_34460__$1;
(statearr_34470_34495[(1)] = (12));

} else {
var statearr_34471_34496 = state_34460__$1;
(statearr_34471_34496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (3))){
var inst_34458 = (state_34460[(2)]);
var state_34460__$1 = state_34460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34460__$1,inst_34458);
} else {
if((state_val_34461 === (12))){
var inst_34424 = (state_34460[(7)]);
var inst_34448 = cljs.core.vec.call(null,inst_34424);
var state_34460__$1 = state_34460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34460__$1,(15),out,inst_34448);
} else {
if((state_val_34461 === (2))){
var state_34460__$1 = state_34460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34460__$1,(4),ch);
} else {
if((state_val_34461 === (11))){
var inst_34440 = (state_34460[(2)]);
var inst_34441 = (new Array(n));
var inst_34424 = inst_34441;
var inst_34425 = (0);
var state_34460__$1 = (function (){var statearr_34472 = state_34460;
(statearr_34472[(10)] = inst_34440);

(statearr_34472[(7)] = inst_34424);

(statearr_34472[(8)] = inst_34425);

return statearr_34472;
})();
var statearr_34473_34497 = state_34460__$1;
(statearr_34473_34497[(2)] = null);

(statearr_34473_34497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (9))){
var inst_34424 = (state_34460[(7)]);
var inst_34438 = cljs.core.vec.call(null,inst_34424);
var state_34460__$1 = state_34460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34460__$1,(11),out,inst_34438);
} else {
if((state_val_34461 === (5))){
var inst_34433 = (state_34460[(11)]);
var inst_34424 = (state_34460[(7)]);
var inst_34428 = (state_34460[(9)]);
var inst_34425 = (state_34460[(8)]);
var inst_34432 = (inst_34424[inst_34425] = inst_34428);
var inst_34433__$1 = (inst_34425 + (1));
var inst_34434 = (inst_34433__$1 < n);
var state_34460__$1 = (function (){var statearr_34474 = state_34460;
(statearr_34474[(11)] = inst_34433__$1);

(statearr_34474[(12)] = inst_34432);

return statearr_34474;
})();
if(cljs.core.truth_(inst_34434)){
var statearr_34475_34498 = state_34460__$1;
(statearr_34475_34498[(1)] = (8));

} else {
var statearr_34476_34499 = state_34460__$1;
(statearr_34476_34499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (14))){
var inst_34453 = (state_34460[(2)]);
var inst_34454 = cljs.core.async.close_BANG_.call(null,out);
var state_34460__$1 = (function (){var statearr_34478 = state_34460;
(statearr_34478[(13)] = inst_34453);

return statearr_34478;
})();
var statearr_34479_34500 = state_34460__$1;
(statearr_34479_34500[(2)] = inst_34454);

(statearr_34479_34500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (10))){
var inst_34444 = (state_34460[(2)]);
var state_34460__$1 = state_34460;
var statearr_34480_34501 = state_34460__$1;
(statearr_34480_34501[(2)] = inst_34444);

(statearr_34480_34501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34461 === (8))){
var inst_34433 = (state_34460[(11)]);
var inst_34424 = (state_34460[(7)]);
var tmp34477 = inst_34424;
var inst_34424__$1 = tmp34477;
var inst_34425 = inst_34433;
var state_34460__$1 = (function (){var statearr_34481 = state_34460;
(statearr_34481[(7)] = inst_34424__$1);

(statearr_34481[(8)] = inst_34425);

return statearr_34481;
})();
var statearr_34482_34502 = state_34460__$1;
(statearr_34482_34502[(2)] = null);

(statearr_34482_34502[(1)] = (2));


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
});})(c__32673__auto___34488,out))
;
return ((function (switch__32578__auto__,c__32673__auto___34488,out){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_34483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34483[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_34483[(1)] = (1));

return statearr_34483;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_34460){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34484){if((e34484 instanceof Object)){
var ex__32582__auto__ = e34484;
var statearr_34485_34503 = state_34460;
(statearr_34485_34503[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34504 = state_34460;
state_34460 = G__34504;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_34460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_34460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___34488,out))
})();
var state__32675__auto__ = (function (){var statearr_34486 = f__32674__auto__.call(null);
(statearr_34486[(6)] = c__32673__auto___34488);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___34488,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34506 = arguments.length;
switch (G__34506) {
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
var c__32673__auto___34576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___34576,out){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___34576,out){
return (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34550_34577 = state_34548__$1;
(statearr_34550_34577[(2)] = inst_34544);

(statearr_34550_34577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var inst_34507 = [];
var inst_34508 = inst_34507;
var inst_34509 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34548__$1 = (function (){var statearr_34551 = state_34548;
(statearr_34551[(7)] = inst_34509);

(statearr_34551[(8)] = inst_34508);

return statearr_34551;
})();
var statearr_34552_34578 = state_34548__$1;
(statearr_34552_34578[(2)] = null);

(statearr_34552_34578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34512 = (state_34548[(9)]);
var inst_34512__$1 = (state_34548[(2)]);
var inst_34513 = (inst_34512__$1 == null);
var inst_34514 = cljs.core.not.call(null,inst_34513);
var state_34548__$1 = (function (){var statearr_34553 = state_34548;
(statearr_34553[(9)] = inst_34512__$1);

return statearr_34553;
})();
if(inst_34514){
var statearr_34554_34579 = state_34548__$1;
(statearr_34554_34579[(1)] = (5));

} else {
var statearr_34555_34580 = state_34548__$1;
(statearr_34555_34580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (15))){
var inst_34538 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34556_34581 = state_34548__$1;
(statearr_34556_34581[(2)] = inst_34538);

(statearr_34556_34581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (13))){
var state_34548__$1 = state_34548;
var statearr_34557_34582 = state_34548__$1;
(statearr_34557_34582[(2)] = null);

(statearr_34557_34582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (6))){
var inst_34508 = (state_34548[(8)]);
var inst_34533 = inst_34508.length;
var inst_34534 = (inst_34533 > (0));
var state_34548__$1 = state_34548;
if(cljs.core.truth_(inst_34534)){
var statearr_34558_34583 = state_34548__$1;
(statearr_34558_34583[(1)] = (12));

} else {
var statearr_34559_34584 = state_34548__$1;
(statearr_34559_34584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (3))){
var inst_34546 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34548__$1,inst_34546);
} else {
if((state_val_34549 === (12))){
var inst_34508 = (state_34548[(8)]);
var inst_34536 = cljs.core.vec.call(null,inst_34508);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34548__$1,(15),out,inst_34536);
} else {
if((state_val_34549 === (2))){
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34548__$1,(4),ch);
} else {
if((state_val_34549 === (11))){
var inst_34516 = (state_34548[(10)]);
var inst_34512 = (state_34548[(9)]);
var inst_34526 = (state_34548[(2)]);
var inst_34527 = [];
var inst_34528 = inst_34527.push(inst_34512);
var inst_34508 = inst_34527;
var inst_34509 = inst_34516;
var state_34548__$1 = (function (){var statearr_34560 = state_34548;
(statearr_34560[(7)] = inst_34509);

(statearr_34560[(11)] = inst_34526);

(statearr_34560[(12)] = inst_34528);

(statearr_34560[(8)] = inst_34508);

return statearr_34560;
})();
var statearr_34561_34585 = state_34548__$1;
(statearr_34561_34585[(2)] = null);

(statearr_34561_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (9))){
var inst_34508 = (state_34548[(8)]);
var inst_34524 = cljs.core.vec.call(null,inst_34508);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34548__$1,(11),out,inst_34524);
} else {
if((state_val_34549 === (5))){
var inst_34509 = (state_34548[(7)]);
var inst_34516 = (state_34548[(10)]);
var inst_34512 = (state_34548[(9)]);
var inst_34516__$1 = f.call(null,inst_34512);
var inst_34517 = cljs.core._EQ_.call(null,inst_34516__$1,inst_34509);
var inst_34518 = cljs.core.keyword_identical_QMARK_.call(null,inst_34509,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34519 = ((inst_34517) || (inst_34518));
var state_34548__$1 = (function (){var statearr_34562 = state_34548;
(statearr_34562[(10)] = inst_34516__$1);

return statearr_34562;
})();
if(cljs.core.truth_(inst_34519)){
var statearr_34563_34586 = state_34548__$1;
(statearr_34563_34586[(1)] = (8));

} else {
var statearr_34564_34587 = state_34548__$1;
(statearr_34564_34587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (14))){
var inst_34541 = (state_34548[(2)]);
var inst_34542 = cljs.core.async.close_BANG_.call(null,out);
var state_34548__$1 = (function (){var statearr_34566 = state_34548;
(statearr_34566[(13)] = inst_34541);

return statearr_34566;
})();
var statearr_34567_34588 = state_34548__$1;
(statearr_34567_34588[(2)] = inst_34542);

(statearr_34567_34588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (10))){
var inst_34531 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34568_34589 = state_34548__$1;
(statearr_34568_34589[(2)] = inst_34531);

(statearr_34568_34589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34516 = (state_34548[(10)]);
var inst_34512 = (state_34548[(9)]);
var inst_34508 = (state_34548[(8)]);
var inst_34521 = inst_34508.push(inst_34512);
var tmp34565 = inst_34508;
var inst_34508__$1 = tmp34565;
var inst_34509 = inst_34516;
var state_34548__$1 = (function (){var statearr_34569 = state_34548;
(statearr_34569[(7)] = inst_34509);

(statearr_34569[(14)] = inst_34521);

(statearr_34569[(8)] = inst_34508__$1);

return statearr_34569;
})();
var statearr_34570_34590 = state_34548__$1;
(statearr_34570_34590[(2)] = null);

(statearr_34570_34590[(1)] = (2));


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
});})(c__32673__auto___34576,out))
;
return ((function (switch__32578__auto__,c__32673__auto___34576,out){
return (function() {
var cljs$core$async$state_machine__32579__auto__ = null;
var cljs$core$async$state_machine__32579__auto____0 = (function (){
var statearr_34571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34571[(0)] = cljs$core$async$state_machine__32579__auto__);

(statearr_34571[(1)] = (1));

return statearr_34571;
});
var cljs$core$async$state_machine__32579__auto____1 = (function (state_34548){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__32582__auto__ = e34572;
var statearr_34573_34591 = state_34548;
(statearr_34573_34591[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_34548;
state_34548 = G__34592;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
cljs$core$async$state_machine__32579__auto__ = function(state_34548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32579__auto____1.call(this,state_34548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32579__auto____0;
cljs$core$async$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32579__auto____1;
return cljs$core$async$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___34576,out))
})();
var state__32675__auto__ = (function (){var statearr_34574 = f__32674__auto__.call(null);
(statearr_34574[(6)] = c__32673__auto___34576);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___34576,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1608403392460
