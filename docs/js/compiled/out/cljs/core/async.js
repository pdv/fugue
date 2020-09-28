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
var G__31762 = arguments.length;
switch (G__31762) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31763 = (function (f,blockable,meta31764){
this.f = f;
this.blockable = blockable;
this.meta31764 = meta31764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31765,meta31764__$1){
var self__ = this;
var _31765__$1 = this;
return (new cljs.core.async.t_cljs$core$async31763(self__.f,self__.blockable,meta31764__$1));
});

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31765){
var self__ = this;
var _31765__$1 = this;
return self__.meta31764;
});

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31764","meta31764",-68912076,null)], null);
});

cljs.core.async.t_cljs$core$async31763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31763";

cljs.core.async.t_cljs$core$async31763.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31763");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31763.
 */
cljs.core.async.__GT_t_cljs$core$async31763 = (function cljs$core$async$__GT_t_cljs$core$async31763(f__$1,blockable__$1,meta31764){
return (new cljs.core.async.t_cljs$core$async31763(f__$1,blockable__$1,meta31764));
});

}

return (new cljs.core.async.t_cljs$core$async31763(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31769 = arguments.length;
switch (G__31769) {
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
var G__31772 = arguments.length;
switch (G__31772) {
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
var G__31775 = arguments.length;
switch (G__31775) {
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
var val_31777 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31777);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31777,ret){
return (function (){
return fn1.call(null,val_31777);
});})(val_31777,ret))
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
var G__31779 = arguments.length;
switch (G__31779) {
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
var n__4607__auto___31781 = n;
var x_31782 = (0);
while(true){
if((x_31782 < n__4607__auto___31781)){
(a[x_31782] = x_31782);

var G__31783 = (x_31782 + (1));
x_31782 = G__31783;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31784 = (function (flag,meta31785){
this.flag = flag;
this.meta31785 = meta31785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31786,meta31785__$1){
var self__ = this;
var _31786__$1 = this;
return (new cljs.core.async.t_cljs$core$async31784(self__.flag,meta31785__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31786){
var self__ = this;
var _31786__$1 = this;
return self__.meta31785;
});})(flag))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31784.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31785","meta31785",-89427002,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31784";

cljs.core.async.t_cljs$core$async31784.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31784");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31784.
 */
cljs.core.async.__GT_t_cljs$core$async31784 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31784(flag__$1,meta31785){
return (new cljs.core.async.t_cljs$core$async31784(flag__$1,meta31785));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31784(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31787 = (function (flag,cb,meta31788){
this.flag = flag;
this.cb = cb;
this.meta31788 = meta31788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31789,meta31788__$1){
var self__ = this;
var _31789__$1 = this;
return (new cljs.core.async.t_cljs$core$async31787(self__.flag,self__.cb,meta31788__$1));
});

cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31789){
var self__ = this;
var _31789__$1 = this;
return self__.meta31788;
});

cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31788","meta31788",-198529858,null)], null);
});

cljs.core.async.t_cljs$core$async31787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31787";

cljs.core.async.t_cljs$core$async31787.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31787");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31787.
 */
cljs.core.async.__GT_t_cljs$core$async31787 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31787(flag__$1,cb__$1,meta31788){
return (new cljs.core.async.t_cljs$core$async31787(flag__$1,cb__$1,meta31788));
});

}

return (new cljs.core.async.t_cljs$core$async31787(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31790_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31790_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31791_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31791_SHARP_,port], null));
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
var G__31792 = (i + (1));
i = G__31792;
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
var len__4730__auto___31798 = arguments.length;
var i__4731__auto___31799 = (0);
while(true){
if((i__4731__auto___31799 < len__4730__auto___31798)){
args__4736__auto__.push((arguments[i__4731__auto___31799]));

var G__31800 = (i__4731__auto___31799 + (1));
i__4731__auto___31799 = G__31800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31795){
var map__31796 = p__31795;
var map__31796__$1 = (((((!((map__31796 == null))))?(((((map__31796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31796):map__31796);
var opts = map__31796__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31793){
var G__31794 = cljs.core.first.call(null,seq31793);
var seq31793__$1 = cljs.core.next.call(null,seq31793);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31794,seq31793__$1);
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
var G__31802 = arguments.length;
switch (G__31802) {
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
var c__31702__auto___31848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___31848){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___31848){
return (function (state_31826){
var state_val_31827 = (state_31826[(1)]);
if((state_val_31827 === (7))){
var inst_31822 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31828_31849 = state_31826__$1;
(statearr_31828_31849[(2)] = inst_31822);

(statearr_31828_31849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (1))){
var state_31826__$1 = state_31826;
var statearr_31829_31850 = state_31826__$1;
(statearr_31829_31850[(2)] = null);

(statearr_31829_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (4))){
var inst_31805 = (state_31826[(7)]);
var inst_31805__$1 = (state_31826[(2)]);
var inst_31806 = (inst_31805__$1 == null);
var state_31826__$1 = (function (){var statearr_31830 = state_31826;
(statearr_31830[(7)] = inst_31805__$1);

return statearr_31830;
})();
if(cljs.core.truth_(inst_31806)){
var statearr_31831_31851 = state_31826__$1;
(statearr_31831_31851[(1)] = (5));

} else {
var statearr_31832_31852 = state_31826__$1;
(statearr_31832_31852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (13))){
var state_31826__$1 = state_31826;
var statearr_31833_31853 = state_31826__$1;
(statearr_31833_31853[(2)] = null);

(statearr_31833_31853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (6))){
var inst_31805 = (state_31826[(7)]);
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31826__$1,(11),to,inst_31805);
} else {
if((state_val_31827 === (3))){
var inst_31824 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31826__$1,inst_31824);
} else {
if((state_val_31827 === (12))){
var state_31826__$1 = state_31826;
var statearr_31834_31854 = state_31826__$1;
(statearr_31834_31854[(2)] = null);

(statearr_31834_31854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (2))){
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31826__$1,(4),from);
} else {
if((state_val_31827 === (11))){
var inst_31815 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
if(cljs.core.truth_(inst_31815)){
var statearr_31835_31855 = state_31826__$1;
(statearr_31835_31855[(1)] = (12));

} else {
var statearr_31836_31856 = state_31826__$1;
(statearr_31836_31856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (9))){
var state_31826__$1 = state_31826;
var statearr_31837_31857 = state_31826__$1;
(statearr_31837_31857[(2)] = null);

(statearr_31837_31857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (5))){
var state_31826__$1 = state_31826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31838_31858 = state_31826__$1;
(statearr_31838_31858[(1)] = (8));

} else {
var statearr_31839_31859 = state_31826__$1;
(statearr_31839_31859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (14))){
var inst_31820 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31840_31860 = state_31826__$1;
(statearr_31840_31860[(2)] = inst_31820);

(statearr_31840_31860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (10))){
var inst_31812 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31841_31861 = state_31826__$1;
(statearr_31841_31861[(2)] = inst_31812);

(statearr_31841_31861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (8))){
var inst_31809 = cljs.core.async.close_BANG_.call(null,to);
var state_31826__$1 = state_31826;
var statearr_31842_31862 = state_31826__$1;
(statearr_31842_31862[(2)] = inst_31809);

(statearr_31842_31862[(1)] = (10));


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
});})(c__31702__auto___31848))
;
return ((function (switch__31607__auto__,c__31702__auto___31848){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_31843 = [null,null,null,null,null,null,null,null];
(statearr_31843[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_31843[(1)] = (1));

return statearr_31843;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_31826){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_31826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e31844){if((e31844 instanceof Object)){
var ex__31611__auto__ = e31844;
var statearr_31845_31863 = state_31826;
(statearr_31845_31863[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31864 = state_31826;
state_31826 = G__31864;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_31826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_31826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___31848))
})();
var state__31704__auto__ = (function (){var statearr_31846 = f__31703__auto__.call(null);
(statearr_31846[(6)] = c__31702__auto___31848);

return statearr_31846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___31848))
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
return (function (p__31865){
var vec__31866 = p__31865;
var v = cljs.core.nth.call(null,vec__31866,(0),null);
var p = cljs.core.nth.call(null,vec__31866,(1),null);
var job = vec__31866;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31702__auto___32037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___32037,res,vec__31866,v,p,job,jobs,results){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___32037,res,vec__31866,v,p,job,jobs,results){
return (function (state_31873){
var state_val_31874 = (state_31873[(1)]);
if((state_val_31874 === (1))){
var state_31873__$1 = state_31873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31873__$1,(2),res,v);
} else {
if((state_val_31874 === (2))){
var inst_31870 = (state_31873[(2)]);
var inst_31871 = cljs.core.async.close_BANG_.call(null,res);
var state_31873__$1 = (function (){var statearr_31875 = state_31873;
(statearr_31875[(7)] = inst_31870);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31873__$1,inst_31871);
} else {
return null;
}
}
});})(c__31702__auto___32037,res,vec__31866,v,p,job,jobs,results))
;
return ((function (switch__31607__auto__,c__31702__auto___32037,res,vec__31866,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0 = (function (){
var statearr_31876 = [null,null,null,null,null,null,null,null];
(statearr_31876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__);

(statearr_31876[(1)] = (1));

return statearr_31876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1 = (function (state_31873){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_31873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e31877){if((e31877 instanceof Object)){
var ex__31611__auto__ = e31877;
var statearr_31878_32038 = state_31873;
(statearr_31878_32038[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32039 = state_31873;
state_31873 = G__32039;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = function(state_31873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1.call(this,state_31873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___32037,res,vec__31866,v,p,job,jobs,results))
})();
var state__31704__auto__ = (function (){var statearr_31879 = f__31703__auto__.call(null);
(statearr_31879[(6)] = c__31702__auto___32037);

return statearr_31879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___32037,res,vec__31866,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31880){
var vec__31881 = p__31880;
var v = cljs.core.nth.call(null,vec__31881,(0),null);
var p = cljs.core.nth.call(null,vec__31881,(1),null);
var job = vec__31881;
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
var n__4607__auto___32040 = n;
var __32041 = (0);
while(true){
if((__32041 < n__4607__auto___32040)){
var G__31884_32042 = type;
var G__31884_32043__$1 = (((G__31884_32042 instanceof cljs.core.Keyword))?G__31884_32042.fqn:null);
switch (G__31884_32043__$1) {
case "compute":
var c__31702__auto___32045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32041,c__31702__auto___32045,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (__32041,c__31702__auto___32045,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async){
return (function (state_31897){
var state_val_31898 = (state_31897[(1)]);
if((state_val_31898 === (1))){
var state_31897__$1 = state_31897;
var statearr_31899_32046 = state_31897__$1;
(statearr_31899_32046[(2)] = null);

(statearr_31899_32046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (2))){
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31897__$1,(4),jobs);
} else {
if((state_val_31898 === (3))){
var inst_31895 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31897__$1,inst_31895);
} else {
if((state_val_31898 === (4))){
var inst_31887 = (state_31897[(2)]);
var inst_31888 = process.call(null,inst_31887);
var state_31897__$1 = state_31897;
if(cljs.core.truth_(inst_31888)){
var statearr_31900_32047 = state_31897__$1;
(statearr_31900_32047[(1)] = (5));

} else {
var statearr_31901_32048 = state_31897__$1;
(statearr_31901_32048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (5))){
var state_31897__$1 = state_31897;
var statearr_31902_32049 = state_31897__$1;
(statearr_31902_32049[(2)] = null);

(statearr_31902_32049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (6))){
var state_31897__$1 = state_31897;
var statearr_31903_32050 = state_31897__$1;
(statearr_31903_32050[(2)] = null);

(statearr_31903_32050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (7))){
var inst_31893 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
var statearr_31904_32051 = state_31897__$1;
(statearr_31904_32051[(2)] = inst_31893);

(statearr_31904_32051[(1)] = (3));


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
});})(__32041,c__31702__auto___32045,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async))
;
return ((function (__32041,switch__31607__auto__,c__31702__auto___32045,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0 = (function (){
var statearr_31905 = [null,null,null,null,null,null,null];
(statearr_31905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__);

(statearr_31905[(1)] = (1));

return statearr_31905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1 = (function (state_31897){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_31897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e31906){if((e31906 instanceof Object)){
var ex__31611__auto__ = e31906;
var statearr_31907_32052 = state_31897;
(statearr_31907_32052[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32053 = state_31897;
state_31897 = G__32053;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = function(state_31897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1.call(this,state_31897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__;
})()
;})(__32041,switch__31607__auto__,c__31702__auto___32045,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async))
})();
var state__31704__auto__ = (function (){var statearr_31908 = f__31703__auto__.call(null);
(statearr_31908[(6)] = c__31702__auto___32045);

return statearr_31908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(__32041,c__31702__auto___32045,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async))
);


break;
case "async":
var c__31702__auto___32054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32041,c__31702__auto___32054,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (__32041,c__31702__auto___32054,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async){
return (function (state_31921){
var state_val_31922 = (state_31921[(1)]);
if((state_val_31922 === (1))){
var state_31921__$1 = state_31921;
var statearr_31923_32055 = state_31921__$1;
(statearr_31923_32055[(2)] = null);

(statearr_31923_32055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (2))){
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31921__$1,(4),jobs);
} else {
if((state_val_31922 === (3))){
var inst_31919 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31921__$1,inst_31919);
} else {
if((state_val_31922 === (4))){
var inst_31911 = (state_31921[(2)]);
var inst_31912 = async.call(null,inst_31911);
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31912)){
var statearr_31924_32056 = state_31921__$1;
(statearr_31924_32056[(1)] = (5));

} else {
var statearr_31925_32057 = state_31921__$1;
(statearr_31925_32057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (5))){
var state_31921__$1 = state_31921;
var statearr_31926_32058 = state_31921__$1;
(statearr_31926_32058[(2)] = null);

(statearr_31926_32058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (6))){
var state_31921__$1 = state_31921;
var statearr_31927_32059 = state_31921__$1;
(statearr_31927_32059[(2)] = null);

(statearr_31927_32059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (7))){
var inst_31917 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31928_32060 = state_31921__$1;
(statearr_31928_32060[(2)] = inst_31917);

(statearr_31928_32060[(1)] = (3));


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
});})(__32041,c__31702__auto___32054,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async))
;
return ((function (__32041,switch__31607__auto__,c__31702__auto___32054,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0 = (function (){
var statearr_31929 = [null,null,null,null,null,null,null];
(statearr_31929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__);

(statearr_31929[(1)] = (1));

return statearr_31929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1 = (function (state_31921){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_31921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e31930){if((e31930 instanceof Object)){
var ex__31611__auto__ = e31930;
var statearr_31931_32061 = state_31921;
(statearr_31931_32061[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32062 = state_31921;
state_31921 = G__32062;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = function(state_31921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1.call(this,state_31921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__;
})()
;})(__32041,switch__31607__auto__,c__31702__auto___32054,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async))
})();
var state__31704__auto__ = (function (){var statearr_31932 = f__31703__auto__.call(null);
(statearr_31932[(6)] = c__31702__auto___32054);

return statearr_31932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(__32041,c__31702__auto___32054,G__31884_32042,G__31884_32043__$1,n__4607__auto___32040,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31884_32043__$1)].join('')));

}

var G__32063 = (__32041 + (1));
__32041 = G__32063;
continue;
} else {
}
break;
}

var c__31702__auto___32064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___32064,jobs,results,process,async){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___32064,jobs,results,process,async){
return (function (state_31954){
var state_val_31955 = (state_31954[(1)]);
if((state_val_31955 === (7))){
var inst_31950 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_31956_32065 = state_31954__$1;
(statearr_31956_32065[(2)] = inst_31950);

(statearr_31956_32065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (1))){
var state_31954__$1 = state_31954;
var statearr_31957_32066 = state_31954__$1;
(statearr_31957_32066[(2)] = null);

(statearr_31957_32066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (4))){
var inst_31935 = (state_31954[(7)]);
var inst_31935__$1 = (state_31954[(2)]);
var inst_31936 = (inst_31935__$1 == null);
var state_31954__$1 = (function (){var statearr_31958 = state_31954;
(statearr_31958[(7)] = inst_31935__$1);

return statearr_31958;
})();
if(cljs.core.truth_(inst_31936)){
var statearr_31959_32067 = state_31954__$1;
(statearr_31959_32067[(1)] = (5));

} else {
var statearr_31960_32068 = state_31954__$1;
(statearr_31960_32068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (6))){
var inst_31940 = (state_31954[(8)]);
var inst_31935 = (state_31954[(7)]);
var inst_31940__$1 = cljs.core.async.chan.call(null,(1));
var inst_31941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31942 = [inst_31935,inst_31940__$1];
var inst_31943 = (new cljs.core.PersistentVector(null,2,(5),inst_31941,inst_31942,null));
var state_31954__$1 = (function (){var statearr_31961 = state_31954;
(statearr_31961[(8)] = inst_31940__$1);

return statearr_31961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31954__$1,(8),jobs,inst_31943);
} else {
if((state_val_31955 === (3))){
var inst_31952 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31954__$1,inst_31952);
} else {
if((state_val_31955 === (2))){
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31954__$1,(4),from);
} else {
if((state_val_31955 === (9))){
var inst_31947 = (state_31954[(2)]);
var state_31954__$1 = (function (){var statearr_31962 = state_31954;
(statearr_31962[(9)] = inst_31947);

return statearr_31962;
})();
var statearr_31963_32069 = state_31954__$1;
(statearr_31963_32069[(2)] = null);

(statearr_31963_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (5))){
var inst_31938 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31954__$1 = state_31954;
var statearr_31964_32070 = state_31954__$1;
(statearr_31964_32070[(2)] = inst_31938);

(statearr_31964_32070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (8))){
var inst_31940 = (state_31954[(8)]);
var inst_31945 = (state_31954[(2)]);
var state_31954__$1 = (function (){var statearr_31965 = state_31954;
(statearr_31965[(10)] = inst_31945);

return statearr_31965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31954__$1,(9),results,inst_31940);
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
});})(c__31702__auto___32064,jobs,results,process,async))
;
return ((function (switch__31607__auto__,c__31702__auto___32064,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0 = (function (){
var statearr_31966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__);

(statearr_31966[(1)] = (1));

return statearr_31966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1 = (function (state_31954){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_31954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e31967){if((e31967 instanceof Object)){
var ex__31611__auto__ = e31967;
var statearr_31968_32071 = state_31954;
(statearr_31968_32071[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32072 = state_31954;
state_31954 = G__32072;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = function(state_31954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1.call(this,state_31954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___32064,jobs,results,process,async))
})();
var state__31704__auto__ = (function (){var statearr_31969 = f__31703__auto__.call(null);
(statearr_31969[(6)] = c__31702__auto___32064);

return statearr_31969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___32064,jobs,results,process,async))
);


var c__31702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto__,jobs,results,process,async){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto__,jobs,results,process,async){
return (function (state_32007){
var state_val_32008 = (state_32007[(1)]);
if((state_val_32008 === (7))){
var inst_32003 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32009_32073 = state_32007__$1;
(statearr_32009_32073[(2)] = inst_32003);

(statearr_32009_32073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (20))){
var state_32007__$1 = state_32007;
var statearr_32010_32074 = state_32007__$1;
(statearr_32010_32074[(2)] = null);

(statearr_32010_32074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (1))){
var state_32007__$1 = state_32007;
var statearr_32011_32075 = state_32007__$1;
(statearr_32011_32075[(2)] = null);

(statearr_32011_32075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (4))){
var inst_31972 = (state_32007[(7)]);
var inst_31972__$1 = (state_32007[(2)]);
var inst_31973 = (inst_31972__$1 == null);
var state_32007__$1 = (function (){var statearr_32012 = state_32007;
(statearr_32012[(7)] = inst_31972__$1);

return statearr_32012;
})();
if(cljs.core.truth_(inst_31973)){
var statearr_32013_32076 = state_32007__$1;
(statearr_32013_32076[(1)] = (5));

} else {
var statearr_32014_32077 = state_32007__$1;
(statearr_32014_32077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (15))){
var inst_31985 = (state_32007[(8)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32007__$1,(18),to,inst_31985);
} else {
if((state_val_32008 === (21))){
var inst_31998 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32015_32078 = state_32007__$1;
(statearr_32015_32078[(2)] = inst_31998);

(statearr_32015_32078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (13))){
var inst_32000 = (state_32007[(2)]);
var state_32007__$1 = (function (){var statearr_32016 = state_32007;
(statearr_32016[(9)] = inst_32000);

return statearr_32016;
})();
var statearr_32017_32079 = state_32007__$1;
(statearr_32017_32079[(2)] = null);

(statearr_32017_32079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (6))){
var inst_31972 = (state_32007[(7)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(11),inst_31972);
} else {
if((state_val_32008 === (17))){
var inst_31993 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31993)){
var statearr_32018_32080 = state_32007__$1;
(statearr_32018_32080[(1)] = (19));

} else {
var statearr_32019_32081 = state_32007__$1;
(statearr_32019_32081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (3))){
var inst_32005 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32007__$1,inst_32005);
} else {
if((state_val_32008 === (12))){
var inst_31982 = (state_32007[(10)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(14),inst_31982);
} else {
if((state_val_32008 === (2))){
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(4),results);
} else {
if((state_val_32008 === (19))){
var state_32007__$1 = state_32007;
var statearr_32020_32082 = state_32007__$1;
(statearr_32020_32082[(2)] = null);

(statearr_32020_32082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (11))){
var inst_31982 = (state_32007[(2)]);
var state_32007__$1 = (function (){var statearr_32021 = state_32007;
(statearr_32021[(10)] = inst_31982);

return statearr_32021;
})();
var statearr_32022_32083 = state_32007__$1;
(statearr_32022_32083[(2)] = null);

(statearr_32022_32083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (9))){
var state_32007__$1 = state_32007;
var statearr_32023_32084 = state_32007__$1;
(statearr_32023_32084[(2)] = null);

(statearr_32023_32084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (5))){
var state_32007__$1 = state_32007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32024_32085 = state_32007__$1;
(statearr_32024_32085[(1)] = (8));

} else {
var statearr_32025_32086 = state_32007__$1;
(statearr_32025_32086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (14))){
var inst_31987 = (state_32007[(11)]);
var inst_31985 = (state_32007[(8)]);
var inst_31985__$1 = (state_32007[(2)]);
var inst_31986 = (inst_31985__$1 == null);
var inst_31987__$1 = cljs.core.not.call(null,inst_31986);
var state_32007__$1 = (function (){var statearr_32026 = state_32007;
(statearr_32026[(11)] = inst_31987__$1);

(statearr_32026[(8)] = inst_31985__$1);

return statearr_32026;
})();
if(inst_31987__$1){
var statearr_32027_32087 = state_32007__$1;
(statearr_32027_32087[(1)] = (15));

} else {
var statearr_32028_32088 = state_32007__$1;
(statearr_32028_32088[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (16))){
var inst_31987 = (state_32007[(11)]);
var state_32007__$1 = state_32007;
var statearr_32029_32089 = state_32007__$1;
(statearr_32029_32089[(2)] = inst_31987);

(statearr_32029_32089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (10))){
var inst_31979 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32030_32090 = state_32007__$1;
(statearr_32030_32090[(2)] = inst_31979);

(statearr_32030_32090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (18))){
var inst_31990 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32031_32091 = state_32007__$1;
(statearr_32031_32091[(2)] = inst_31990);

(statearr_32031_32091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (8))){
var inst_31976 = cljs.core.async.close_BANG_.call(null,to);
var state_32007__$1 = state_32007;
var statearr_32032_32092 = state_32007__$1;
(statearr_32032_32092[(2)] = inst_31976);

(statearr_32032_32092[(1)] = (10));


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
});})(c__31702__auto__,jobs,results,process,async))
;
return ((function (switch__31607__auto__,c__31702__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0 = (function (){
var statearr_32033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__);

(statearr_32033[(1)] = (1));

return statearr_32033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1 = (function (state_32007){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32034){if((e32034 instanceof Object)){
var ex__31611__auto__ = e32034;
var statearr_32035_32093 = state_32007;
(statearr_32035_32093[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32094 = state_32007;
state_32007 = G__32094;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__ = function(state_32007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1.call(this,state_32007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto__,jobs,results,process,async))
})();
var state__31704__auto__ = (function (){var statearr_32036 = f__31703__auto__.call(null);
(statearr_32036[(6)] = c__31702__auto__);

return statearr_32036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto__,jobs,results,process,async))
);

return c__31702__auto__;
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
var G__32096 = arguments.length;
switch (G__32096) {
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
var G__32099 = arguments.length;
switch (G__32099) {
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
var G__32102 = arguments.length;
switch (G__32102) {
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
var c__31702__auto___32151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___32151,tc,fc){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___32151,tc,fc){
return (function (state_32128){
var state_val_32129 = (state_32128[(1)]);
if((state_val_32129 === (7))){
var inst_32124 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
var statearr_32130_32152 = state_32128__$1;
(statearr_32130_32152[(2)] = inst_32124);

(statearr_32130_32152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (1))){
var state_32128__$1 = state_32128;
var statearr_32131_32153 = state_32128__$1;
(statearr_32131_32153[(2)] = null);

(statearr_32131_32153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (4))){
var inst_32105 = (state_32128[(7)]);
var inst_32105__$1 = (state_32128[(2)]);
var inst_32106 = (inst_32105__$1 == null);
var state_32128__$1 = (function (){var statearr_32132 = state_32128;
(statearr_32132[(7)] = inst_32105__$1);

return statearr_32132;
})();
if(cljs.core.truth_(inst_32106)){
var statearr_32133_32154 = state_32128__$1;
(statearr_32133_32154[(1)] = (5));

} else {
var statearr_32134_32155 = state_32128__$1;
(statearr_32134_32155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (13))){
var state_32128__$1 = state_32128;
var statearr_32135_32156 = state_32128__$1;
(statearr_32135_32156[(2)] = null);

(statearr_32135_32156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (6))){
var inst_32105 = (state_32128[(7)]);
var inst_32111 = p.call(null,inst_32105);
var state_32128__$1 = state_32128;
if(cljs.core.truth_(inst_32111)){
var statearr_32136_32157 = state_32128__$1;
(statearr_32136_32157[(1)] = (9));

} else {
var statearr_32137_32158 = state_32128__$1;
(statearr_32137_32158[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (3))){
var inst_32126 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32128__$1,inst_32126);
} else {
if((state_val_32129 === (12))){
var state_32128__$1 = state_32128;
var statearr_32138_32159 = state_32128__$1;
(statearr_32138_32159[(2)] = null);

(statearr_32138_32159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (2))){
var state_32128__$1 = state_32128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32128__$1,(4),ch);
} else {
if((state_val_32129 === (11))){
var inst_32105 = (state_32128[(7)]);
var inst_32115 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32128__$1,(8),inst_32115,inst_32105);
} else {
if((state_val_32129 === (9))){
var state_32128__$1 = state_32128;
var statearr_32139_32160 = state_32128__$1;
(statearr_32139_32160[(2)] = tc);

(statearr_32139_32160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (5))){
var inst_32108 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32109 = cljs.core.async.close_BANG_.call(null,fc);
var state_32128__$1 = (function (){var statearr_32140 = state_32128;
(statearr_32140[(8)] = inst_32108);

return statearr_32140;
})();
var statearr_32141_32161 = state_32128__$1;
(statearr_32141_32161[(2)] = inst_32109);

(statearr_32141_32161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (14))){
var inst_32122 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
var statearr_32142_32162 = state_32128__$1;
(statearr_32142_32162[(2)] = inst_32122);

(statearr_32142_32162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (10))){
var state_32128__$1 = state_32128;
var statearr_32143_32163 = state_32128__$1;
(statearr_32143_32163[(2)] = fc);

(statearr_32143_32163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32129 === (8))){
var inst_32117 = (state_32128[(2)]);
var state_32128__$1 = state_32128;
if(cljs.core.truth_(inst_32117)){
var statearr_32144_32164 = state_32128__$1;
(statearr_32144_32164[(1)] = (12));

} else {
var statearr_32145_32165 = state_32128__$1;
(statearr_32145_32165[(1)] = (13));

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
});})(c__31702__auto___32151,tc,fc))
;
return ((function (switch__31607__auto__,c__31702__auto___32151,tc,fc){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_32146 = [null,null,null,null,null,null,null,null,null];
(statearr_32146[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_32146[(1)] = (1));

return statearr_32146;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_32128){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32147){if((e32147 instanceof Object)){
var ex__31611__auto__ = e32147;
var statearr_32148_32166 = state_32128;
(statearr_32148_32166[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32167 = state_32128;
state_32128 = G__32167;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_32128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_32128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___32151,tc,fc))
})();
var state__31704__auto__ = (function (){var statearr_32149 = f__31703__auto__.call(null);
(statearr_32149[(6)] = c__31702__auto___32151);

return statearr_32149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___32151,tc,fc))
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
var c__31702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto__){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto__){
return (function (state_32188){
var state_val_32189 = (state_32188[(1)]);
if((state_val_32189 === (7))){
var inst_32184 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32190_32208 = state_32188__$1;
(statearr_32190_32208[(2)] = inst_32184);

(statearr_32190_32208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (1))){
var inst_32168 = init;
var state_32188__$1 = (function (){var statearr_32191 = state_32188;
(statearr_32191[(7)] = inst_32168);

return statearr_32191;
})();
var statearr_32192_32209 = state_32188__$1;
(statearr_32192_32209[(2)] = null);

(statearr_32192_32209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (4))){
var inst_32171 = (state_32188[(8)]);
var inst_32171__$1 = (state_32188[(2)]);
var inst_32172 = (inst_32171__$1 == null);
var state_32188__$1 = (function (){var statearr_32193 = state_32188;
(statearr_32193[(8)] = inst_32171__$1);

return statearr_32193;
})();
if(cljs.core.truth_(inst_32172)){
var statearr_32194_32210 = state_32188__$1;
(statearr_32194_32210[(1)] = (5));

} else {
var statearr_32195_32211 = state_32188__$1;
(statearr_32195_32211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (6))){
var inst_32175 = (state_32188[(9)]);
var inst_32171 = (state_32188[(8)]);
var inst_32168 = (state_32188[(7)]);
var inst_32175__$1 = f.call(null,inst_32168,inst_32171);
var inst_32176 = cljs.core.reduced_QMARK_.call(null,inst_32175__$1);
var state_32188__$1 = (function (){var statearr_32196 = state_32188;
(statearr_32196[(9)] = inst_32175__$1);

return statearr_32196;
})();
if(inst_32176){
var statearr_32197_32212 = state_32188__$1;
(statearr_32197_32212[(1)] = (8));

} else {
var statearr_32198_32213 = state_32188__$1;
(statearr_32198_32213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (3))){
var inst_32186 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32188__$1,inst_32186);
} else {
if((state_val_32189 === (2))){
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32188__$1,(4),ch);
} else {
if((state_val_32189 === (9))){
var inst_32175 = (state_32188[(9)]);
var inst_32168 = inst_32175;
var state_32188__$1 = (function (){var statearr_32199 = state_32188;
(statearr_32199[(7)] = inst_32168);

return statearr_32199;
})();
var statearr_32200_32214 = state_32188__$1;
(statearr_32200_32214[(2)] = null);

(statearr_32200_32214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (5))){
var inst_32168 = (state_32188[(7)]);
var state_32188__$1 = state_32188;
var statearr_32201_32215 = state_32188__$1;
(statearr_32201_32215[(2)] = inst_32168);

(statearr_32201_32215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (10))){
var inst_32182 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32202_32216 = state_32188__$1;
(statearr_32202_32216[(2)] = inst_32182);

(statearr_32202_32216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (8))){
var inst_32175 = (state_32188[(9)]);
var inst_32178 = cljs.core.deref.call(null,inst_32175);
var state_32188__$1 = state_32188;
var statearr_32203_32217 = state_32188__$1;
(statearr_32203_32217[(2)] = inst_32178);

(statearr_32203_32217[(1)] = (10));


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
});})(c__31702__auto__))
;
return ((function (switch__31607__auto__,c__31702__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31608__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31608__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32204[(0)] = cljs$core$async$reduce_$_state_machine__31608__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var cljs$core$async$reduce_$_state_machine__31608__auto____1 = (function (state_32188){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32205){if((e32205 instanceof Object)){
var ex__31611__auto__ = e32205;
var statearr_32206_32218 = state_32188;
(statearr_32206_32218[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32219 = state_32188;
state_32188 = G__32219;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31608__auto__ = function(state_32188){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31608__auto____1.call(this,state_32188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31608__auto____0;
cljs$core$async$reduce_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31608__auto____1;
return cljs$core$async$reduce_$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto__))
})();
var state__31704__auto__ = (function (){var statearr_32207 = f__31703__auto__.call(null);
(statearr_32207[(6)] = c__31702__auto__);

return statearr_32207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto__))
);

return c__31702__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto__,f__$1){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto__,f__$1){
return (function (state_32225){
var state_val_32226 = (state_32225[(1)]);
if((state_val_32226 === (1))){
var inst_32220 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32225__$1,(2),inst_32220);
} else {
if((state_val_32226 === (2))){
var inst_32222 = (state_32225[(2)]);
var inst_32223 = f__$1.call(null,inst_32222);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32225__$1,inst_32223);
} else {
return null;
}
}
});})(c__31702__auto__,f__$1))
;
return ((function (switch__31607__auto__,c__31702__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31608__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31608__auto____0 = (function (){
var statearr_32227 = [null,null,null,null,null,null,null];
(statearr_32227[(0)] = cljs$core$async$transduce_$_state_machine__31608__auto__);

(statearr_32227[(1)] = (1));

return statearr_32227;
});
var cljs$core$async$transduce_$_state_machine__31608__auto____1 = (function (state_32225){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32228){if((e32228 instanceof Object)){
var ex__31611__auto__ = e32228;
var statearr_32229_32231 = state_32225;
(statearr_32229_32231[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32232 = state_32225;
state_32225 = G__32232;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31608__auto__ = function(state_32225){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31608__auto____1.call(this,state_32225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31608__auto____0;
cljs$core$async$transduce_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31608__auto____1;
return cljs$core$async$transduce_$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto__,f__$1))
})();
var state__31704__auto__ = (function (){var statearr_32230 = f__31703__auto__.call(null);
(statearr_32230[(6)] = c__31702__auto__);

return statearr_32230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto__,f__$1))
);

return c__31702__auto__;
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
var G__32234 = arguments.length;
switch (G__32234) {
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
var c__31702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto__){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto__){
return (function (state_32259){
var state_val_32260 = (state_32259[(1)]);
if((state_val_32260 === (7))){
var inst_32241 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32261_32282 = state_32259__$1;
(statearr_32261_32282[(2)] = inst_32241);

(statearr_32261_32282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (1))){
var inst_32235 = cljs.core.seq.call(null,coll);
var inst_32236 = inst_32235;
var state_32259__$1 = (function (){var statearr_32262 = state_32259;
(statearr_32262[(7)] = inst_32236);

return statearr_32262;
})();
var statearr_32263_32283 = state_32259__$1;
(statearr_32263_32283[(2)] = null);

(statearr_32263_32283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (4))){
var inst_32236 = (state_32259[(7)]);
var inst_32239 = cljs.core.first.call(null,inst_32236);
var state_32259__$1 = state_32259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32259__$1,(7),ch,inst_32239);
} else {
if((state_val_32260 === (13))){
var inst_32253 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32264_32284 = state_32259__$1;
(statearr_32264_32284[(2)] = inst_32253);

(statearr_32264_32284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (6))){
var inst_32244 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
if(cljs.core.truth_(inst_32244)){
var statearr_32265_32285 = state_32259__$1;
(statearr_32265_32285[(1)] = (8));

} else {
var statearr_32266_32286 = state_32259__$1;
(statearr_32266_32286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (3))){
var inst_32257 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32259__$1,inst_32257);
} else {
if((state_val_32260 === (12))){
var state_32259__$1 = state_32259;
var statearr_32267_32287 = state_32259__$1;
(statearr_32267_32287[(2)] = null);

(statearr_32267_32287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (2))){
var inst_32236 = (state_32259[(7)]);
var state_32259__$1 = state_32259;
if(cljs.core.truth_(inst_32236)){
var statearr_32268_32288 = state_32259__$1;
(statearr_32268_32288[(1)] = (4));

} else {
var statearr_32269_32289 = state_32259__$1;
(statearr_32269_32289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (11))){
var inst_32250 = cljs.core.async.close_BANG_.call(null,ch);
var state_32259__$1 = state_32259;
var statearr_32270_32290 = state_32259__$1;
(statearr_32270_32290[(2)] = inst_32250);

(statearr_32270_32290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (9))){
var state_32259__$1 = state_32259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32271_32291 = state_32259__$1;
(statearr_32271_32291[(1)] = (11));

} else {
var statearr_32272_32292 = state_32259__$1;
(statearr_32272_32292[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (5))){
var inst_32236 = (state_32259[(7)]);
var state_32259__$1 = state_32259;
var statearr_32273_32293 = state_32259__$1;
(statearr_32273_32293[(2)] = inst_32236);

(statearr_32273_32293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (10))){
var inst_32255 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32274_32294 = state_32259__$1;
(statearr_32274_32294[(2)] = inst_32255);

(statearr_32274_32294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (8))){
var inst_32236 = (state_32259[(7)]);
var inst_32246 = cljs.core.next.call(null,inst_32236);
var inst_32236__$1 = inst_32246;
var state_32259__$1 = (function (){var statearr_32275 = state_32259;
(statearr_32275[(7)] = inst_32236__$1);

return statearr_32275;
})();
var statearr_32276_32295 = state_32259__$1;
(statearr_32276_32295[(2)] = null);

(statearr_32276_32295[(1)] = (2));


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
});})(c__31702__auto__))
;
return ((function (switch__31607__auto__,c__31702__auto__){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_32277 = [null,null,null,null,null,null,null,null];
(statearr_32277[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_32277[(1)] = (1));

return statearr_32277;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_32259){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32278){if((e32278 instanceof Object)){
var ex__31611__auto__ = e32278;
var statearr_32279_32296 = state_32259;
(statearr_32279_32296[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32297 = state_32259;
state_32259 = G__32297;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_32259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_32259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto__))
})();
var state__31704__auto__ = (function (){var statearr_32280 = f__31703__auto__.call(null);
(statearr_32280[(6)] = c__31702__auto__);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto__))
);

return c__31702__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32298 = (function (ch,cs,meta32299){
this.ch = ch;
this.cs = cs;
this.meta32299 = meta32299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32300,meta32299__$1){
var self__ = this;
var _32300__$1 = this;
return (new cljs.core.async.t_cljs$core$async32298(self__.ch,self__.cs,meta32299__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32300){
var self__ = this;
var _32300__$1 = this;
return self__.meta32299;
});})(cs))
;

cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32298.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32298.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32299","meta32299",757737840,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32298";

cljs.core.async.t_cljs$core$async32298.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32298");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32298.
 */
cljs.core.async.__GT_t_cljs$core$async32298 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32298(ch__$1,cs__$1,meta32299){
return (new cljs.core.async.t_cljs$core$async32298(ch__$1,cs__$1,meta32299));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32298(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31702__auto___32520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___32520,cs,m,dchan,dctr,done){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___32520,cs,m,dchan,dctr,done){
return (function (state_32435){
var state_val_32436 = (state_32435[(1)]);
if((state_val_32436 === (7))){
var inst_32431 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32437_32521 = state_32435__$1;
(statearr_32437_32521[(2)] = inst_32431);

(statearr_32437_32521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (20))){
var inst_32334 = (state_32435[(7)]);
var inst_32346 = cljs.core.first.call(null,inst_32334);
var inst_32347 = cljs.core.nth.call(null,inst_32346,(0),null);
var inst_32348 = cljs.core.nth.call(null,inst_32346,(1),null);
var state_32435__$1 = (function (){var statearr_32438 = state_32435;
(statearr_32438[(8)] = inst_32347);

return statearr_32438;
})();
if(cljs.core.truth_(inst_32348)){
var statearr_32439_32522 = state_32435__$1;
(statearr_32439_32522[(1)] = (22));

} else {
var statearr_32440_32523 = state_32435__$1;
(statearr_32440_32523[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (27))){
var inst_32378 = (state_32435[(9)]);
var inst_32383 = (state_32435[(10)]);
var inst_32303 = (state_32435[(11)]);
var inst_32376 = (state_32435[(12)]);
var inst_32383__$1 = cljs.core._nth.call(null,inst_32376,inst_32378);
var inst_32384 = cljs.core.async.put_BANG_.call(null,inst_32383__$1,inst_32303,done);
var state_32435__$1 = (function (){var statearr_32441 = state_32435;
(statearr_32441[(10)] = inst_32383__$1);

return statearr_32441;
})();
if(cljs.core.truth_(inst_32384)){
var statearr_32442_32524 = state_32435__$1;
(statearr_32442_32524[(1)] = (30));

} else {
var statearr_32443_32525 = state_32435__$1;
(statearr_32443_32525[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (1))){
var state_32435__$1 = state_32435;
var statearr_32444_32526 = state_32435__$1;
(statearr_32444_32526[(2)] = null);

(statearr_32444_32526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (24))){
var inst_32334 = (state_32435[(7)]);
var inst_32353 = (state_32435[(2)]);
var inst_32354 = cljs.core.next.call(null,inst_32334);
var inst_32312 = inst_32354;
var inst_32313 = null;
var inst_32314 = (0);
var inst_32315 = (0);
var state_32435__$1 = (function (){var statearr_32445 = state_32435;
(statearr_32445[(13)] = inst_32313);

(statearr_32445[(14)] = inst_32353);

(statearr_32445[(15)] = inst_32315);

(statearr_32445[(16)] = inst_32314);

(statearr_32445[(17)] = inst_32312);

return statearr_32445;
})();
var statearr_32446_32527 = state_32435__$1;
(statearr_32446_32527[(2)] = null);

(statearr_32446_32527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (39))){
var state_32435__$1 = state_32435;
var statearr_32450_32528 = state_32435__$1;
(statearr_32450_32528[(2)] = null);

(statearr_32450_32528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (4))){
var inst_32303 = (state_32435[(11)]);
var inst_32303__$1 = (state_32435[(2)]);
var inst_32304 = (inst_32303__$1 == null);
var state_32435__$1 = (function (){var statearr_32451 = state_32435;
(statearr_32451[(11)] = inst_32303__$1);

return statearr_32451;
})();
if(cljs.core.truth_(inst_32304)){
var statearr_32452_32529 = state_32435__$1;
(statearr_32452_32529[(1)] = (5));

} else {
var statearr_32453_32530 = state_32435__$1;
(statearr_32453_32530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (15))){
var inst_32313 = (state_32435[(13)]);
var inst_32315 = (state_32435[(15)]);
var inst_32314 = (state_32435[(16)]);
var inst_32312 = (state_32435[(17)]);
var inst_32330 = (state_32435[(2)]);
var inst_32331 = (inst_32315 + (1));
var tmp32447 = inst_32313;
var tmp32448 = inst_32314;
var tmp32449 = inst_32312;
var inst_32312__$1 = tmp32449;
var inst_32313__$1 = tmp32447;
var inst_32314__$1 = tmp32448;
var inst_32315__$1 = inst_32331;
var state_32435__$1 = (function (){var statearr_32454 = state_32435;
(statearr_32454[(13)] = inst_32313__$1);

(statearr_32454[(15)] = inst_32315__$1);

(statearr_32454[(18)] = inst_32330);

(statearr_32454[(16)] = inst_32314__$1);

(statearr_32454[(17)] = inst_32312__$1);

return statearr_32454;
})();
var statearr_32455_32531 = state_32435__$1;
(statearr_32455_32531[(2)] = null);

(statearr_32455_32531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (21))){
var inst_32357 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32459_32532 = state_32435__$1;
(statearr_32459_32532[(2)] = inst_32357);

(statearr_32459_32532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (31))){
var inst_32383 = (state_32435[(10)]);
var inst_32387 = done.call(null,null);
var inst_32388 = cljs.core.async.untap_STAR_.call(null,m,inst_32383);
var state_32435__$1 = (function (){var statearr_32460 = state_32435;
(statearr_32460[(19)] = inst_32387);

return statearr_32460;
})();
var statearr_32461_32533 = state_32435__$1;
(statearr_32461_32533[(2)] = inst_32388);

(statearr_32461_32533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (32))){
var inst_32378 = (state_32435[(9)]);
var inst_32377 = (state_32435[(20)]);
var inst_32376 = (state_32435[(12)]);
var inst_32375 = (state_32435[(21)]);
var inst_32390 = (state_32435[(2)]);
var inst_32391 = (inst_32378 + (1));
var tmp32456 = inst_32377;
var tmp32457 = inst_32376;
var tmp32458 = inst_32375;
var inst_32375__$1 = tmp32458;
var inst_32376__$1 = tmp32457;
var inst_32377__$1 = tmp32456;
var inst_32378__$1 = inst_32391;
var state_32435__$1 = (function (){var statearr_32462 = state_32435;
(statearr_32462[(9)] = inst_32378__$1);

(statearr_32462[(20)] = inst_32377__$1);

(statearr_32462[(22)] = inst_32390);

(statearr_32462[(12)] = inst_32376__$1);

(statearr_32462[(21)] = inst_32375__$1);

return statearr_32462;
})();
var statearr_32463_32534 = state_32435__$1;
(statearr_32463_32534[(2)] = null);

(statearr_32463_32534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (40))){
var inst_32403 = (state_32435[(23)]);
var inst_32407 = done.call(null,null);
var inst_32408 = cljs.core.async.untap_STAR_.call(null,m,inst_32403);
var state_32435__$1 = (function (){var statearr_32464 = state_32435;
(statearr_32464[(24)] = inst_32407);

return statearr_32464;
})();
var statearr_32465_32535 = state_32435__$1;
(statearr_32465_32535[(2)] = inst_32408);

(statearr_32465_32535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (33))){
var inst_32394 = (state_32435[(25)]);
var inst_32396 = cljs.core.chunked_seq_QMARK_.call(null,inst_32394);
var state_32435__$1 = state_32435;
if(inst_32396){
var statearr_32466_32536 = state_32435__$1;
(statearr_32466_32536[(1)] = (36));

} else {
var statearr_32467_32537 = state_32435__$1;
(statearr_32467_32537[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (13))){
var inst_32324 = (state_32435[(26)]);
var inst_32327 = cljs.core.async.close_BANG_.call(null,inst_32324);
var state_32435__$1 = state_32435;
var statearr_32468_32538 = state_32435__$1;
(statearr_32468_32538[(2)] = inst_32327);

(statearr_32468_32538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (22))){
var inst_32347 = (state_32435[(8)]);
var inst_32350 = cljs.core.async.close_BANG_.call(null,inst_32347);
var state_32435__$1 = state_32435;
var statearr_32469_32539 = state_32435__$1;
(statearr_32469_32539[(2)] = inst_32350);

(statearr_32469_32539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (36))){
var inst_32394 = (state_32435[(25)]);
var inst_32398 = cljs.core.chunk_first.call(null,inst_32394);
var inst_32399 = cljs.core.chunk_rest.call(null,inst_32394);
var inst_32400 = cljs.core.count.call(null,inst_32398);
var inst_32375 = inst_32399;
var inst_32376 = inst_32398;
var inst_32377 = inst_32400;
var inst_32378 = (0);
var state_32435__$1 = (function (){var statearr_32470 = state_32435;
(statearr_32470[(9)] = inst_32378);

(statearr_32470[(20)] = inst_32377);

(statearr_32470[(12)] = inst_32376);

(statearr_32470[(21)] = inst_32375);

return statearr_32470;
})();
var statearr_32471_32540 = state_32435__$1;
(statearr_32471_32540[(2)] = null);

(statearr_32471_32540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (41))){
var inst_32394 = (state_32435[(25)]);
var inst_32410 = (state_32435[(2)]);
var inst_32411 = cljs.core.next.call(null,inst_32394);
var inst_32375 = inst_32411;
var inst_32376 = null;
var inst_32377 = (0);
var inst_32378 = (0);
var state_32435__$1 = (function (){var statearr_32472 = state_32435;
(statearr_32472[(9)] = inst_32378);

(statearr_32472[(20)] = inst_32377);

(statearr_32472[(27)] = inst_32410);

(statearr_32472[(12)] = inst_32376);

(statearr_32472[(21)] = inst_32375);

return statearr_32472;
})();
var statearr_32473_32541 = state_32435__$1;
(statearr_32473_32541[(2)] = null);

(statearr_32473_32541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (43))){
var state_32435__$1 = state_32435;
var statearr_32474_32542 = state_32435__$1;
(statearr_32474_32542[(2)] = null);

(statearr_32474_32542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (29))){
var inst_32419 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32475_32543 = state_32435__$1;
(statearr_32475_32543[(2)] = inst_32419);

(statearr_32475_32543[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (44))){
var inst_32428 = (state_32435[(2)]);
var state_32435__$1 = (function (){var statearr_32476 = state_32435;
(statearr_32476[(28)] = inst_32428);

return statearr_32476;
})();
var statearr_32477_32544 = state_32435__$1;
(statearr_32477_32544[(2)] = null);

(statearr_32477_32544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (6))){
var inst_32367 = (state_32435[(29)]);
var inst_32366 = cljs.core.deref.call(null,cs);
var inst_32367__$1 = cljs.core.keys.call(null,inst_32366);
var inst_32368 = cljs.core.count.call(null,inst_32367__$1);
var inst_32369 = cljs.core.reset_BANG_.call(null,dctr,inst_32368);
var inst_32374 = cljs.core.seq.call(null,inst_32367__$1);
var inst_32375 = inst_32374;
var inst_32376 = null;
var inst_32377 = (0);
var inst_32378 = (0);
var state_32435__$1 = (function (){var statearr_32478 = state_32435;
(statearr_32478[(30)] = inst_32369);

(statearr_32478[(9)] = inst_32378);

(statearr_32478[(20)] = inst_32377);

(statearr_32478[(29)] = inst_32367__$1);

(statearr_32478[(12)] = inst_32376);

(statearr_32478[(21)] = inst_32375);

return statearr_32478;
})();
var statearr_32479_32545 = state_32435__$1;
(statearr_32479_32545[(2)] = null);

(statearr_32479_32545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (28))){
var inst_32394 = (state_32435[(25)]);
var inst_32375 = (state_32435[(21)]);
var inst_32394__$1 = cljs.core.seq.call(null,inst_32375);
var state_32435__$1 = (function (){var statearr_32480 = state_32435;
(statearr_32480[(25)] = inst_32394__$1);

return statearr_32480;
})();
if(inst_32394__$1){
var statearr_32481_32546 = state_32435__$1;
(statearr_32481_32546[(1)] = (33));

} else {
var statearr_32482_32547 = state_32435__$1;
(statearr_32482_32547[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (25))){
var inst_32378 = (state_32435[(9)]);
var inst_32377 = (state_32435[(20)]);
var inst_32380 = (inst_32378 < inst_32377);
var inst_32381 = inst_32380;
var state_32435__$1 = state_32435;
if(cljs.core.truth_(inst_32381)){
var statearr_32483_32548 = state_32435__$1;
(statearr_32483_32548[(1)] = (27));

} else {
var statearr_32484_32549 = state_32435__$1;
(statearr_32484_32549[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (34))){
var state_32435__$1 = state_32435;
var statearr_32485_32550 = state_32435__$1;
(statearr_32485_32550[(2)] = null);

(statearr_32485_32550[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (17))){
var state_32435__$1 = state_32435;
var statearr_32486_32551 = state_32435__$1;
(statearr_32486_32551[(2)] = null);

(statearr_32486_32551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (3))){
var inst_32433 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32435__$1,inst_32433);
} else {
if((state_val_32436 === (12))){
var inst_32362 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32487_32552 = state_32435__$1;
(statearr_32487_32552[(2)] = inst_32362);

(statearr_32487_32552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (2))){
var state_32435__$1 = state_32435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32435__$1,(4),ch);
} else {
if((state_val_32436 === (23))){
var state_32435__$1 = state_32435;
var statearr_32488_32553 = state_32435__$1;
(statearr_32488_32553[(2)] = null);

(statearr_32488_32553[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (35))){
var inst_32417 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32489_32554 = state_32435__$1;
(statearr_32489_32554[(2)] = inst_32417);

(statearr_32489_32554[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (19))){
var inst_32334 = (state_32435[(7)]);
var inst_32338 = cljs.core.chunk_first.call(null,inst_32334);
var inst_32339 = cljs.core.chunk_rest.call(null,inst_32334);
var inst_32340 = cljs.core.count.call(null,inst_32338);
var inst_32312 = inst_32339;
var inst_32313 = inst_32338;
var inst_32314 = inst_32340;
var inst_32315 = (0);
var state_32435__$1 = (function (){var statearr_32490 = state_32435;
(statearr_32490[(13)] = inst_32313);

(statearr_32490[(15)] = inst_32315);

(statearr_32490[(16)] = inst_32314);

(statearr_32490[(17)] = inst_32312);

return statearr_32490;
})();
var statearr_32491_32555 = state_32435__$1;
(statearr_32491_32555[(2)] = null);

(statearr_32491_32555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (11))){
var inst_32334 = (state_32435[(7)]);
var inst_32312 = (state_32435[(17)]);
var inst_32334__$1 = cljs.core.seq.call(null,inst_32312);
var state_32435__$1 = (function (){var statearr_32492 = state_32435;
(statearr_32492[(7)] = inst_32334__$1);

return statearr_32492;
})();
if(inst_32334__$1){
var statearr_32493_32556 = state_32435__$1;
(statearr_32493_32556[(1)] = (16));

} else {
var statearr_32494_32557 = state_32435__$1;
(statearr_32494_32557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (9))){
var inst_32364 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32495_32558 = state_32435__$1;
(statearr_32495_32558[(2)] = inst_32364);

(statearr_32495_32558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (5))){
var inst_32310 = cljs.core.deref.call(null,cs);
var inst_32311 = cljs.core.seq.call(null,inst_32310);
var inst_32312 = inst_32311;
var inst_32313 = null;
var inst_32314 = (0);
var inst_32315 = (0);
var state_32435__$1 = (function (){var statearr_32496 = state_32435;
(statearr_32496[(13)] = inst_32313);

(statearr_32496[(15)] = inst_32315);

(statearr_32496[(16)] = inst_32314);

(statearr_32496[(17)] = inst_32312);

return statearr_32496;
})();
var statearr_32497_32559 = state_32435__$1;
(statearr_32497_32559[(2)] = null);

(statearr_32497_32559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (14))){
var state_32435__$1 = state_32435;
var statearr_32498_32560 = state_32435__$1;
(statearr_32498_32560[(2)] = null);

(statearr_32498_32560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (45))){
var inst_32425 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32499_32561 = state_32435__$1;
(statearr_32499_32561[(2)] = inst_32425);

(statearr_32499_32561[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (26))){
var inst_32367 = (state_32435[(29)]);
var inst_32421 = (state_32435[(2)]);
var inst_32422 = cljs.core.seq.call(null,inst_32367);
var state_32435__$1 = (function (){var statearr_32500 = state_32435;
(statearr_32500[(31)] = inst_32421);

return statearr_32500;
})();
if(inst_32422){
var statearr_32501_32562 = state_32435__$1;
(statearr_32501_32562[(1)] = (42));

} else {
var statearr_32502_32563 = state_32435__$1;
(statearr_32502_32563[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (16))){
var inst_32334 = (state_32435[(7)]);
var inst_32336 = cljs.core.chunked_seq_QMARK_.call(null,inst_32334);
var state_32435__$1 = state_32435;
if(inst_32336){
var statearr_32503_32564 = state_32435__$1;
(statearr_32503_32564[(1)] = (19));

} else {
var statearr_32504_32565 = state_32435__$1;
(statearr_32504_32565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (38))){
var inst_32414 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32505_32566 = state_32435__$1;
(statearr_32505_32566[(2)] = inst_32414);

(statearr_32505_32566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (30))){
var state_32435__$1 = state_32435;
var statearr_32506_32567 = state_32435__$1;
(statearr_32506_32567[(2)] = null);

(statearr_32506_32567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (10))){
var inst_32313 = (state_32435[(13)]);
var inst_32315 = (state_32435[(15)]);
var inst_32323 = cljs.core._nth.call(null,inst_32313,inst_32315);
var inst_32324 = cljs.core.nth.call(null,inst_32323,(0),null);
var inst_32325 = cljs.core.nth.call(null,inst_32323,(1),null);
var state_32435__$1 = (function (){var statearr_32507 = state_32435;
(statearr_32507[(26)] = inst_32324);

return statearr_32507;
})();
if(cljs.core.truth_(inst_32325)){
var statearr_32508_32568 = state_32435__$1;
(statearr_32508_32568[(1)] = (13));

} else {
var statearr_32509_32569 = state_32435__$1;
(statearr_32509_32569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (18))){
var inst_32360 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32510_32570 = state_32435__$1;
(statearr_32510_32570[(2)] = inst_32360);

(statearr_32510_32570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (42))){
var state_32435__$1 = state_32435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32435__$1,(45),dchan);
} else {
if((state_val_32436 === (37))){
var inst_32394 = (state_32435[(25)]);
var inst_32303 = (state_32435[(11)]);
var inst_32403 = (state_32435[(23)]);
var inst_32403__$1 = cljs.core.first.call(null,inst_32394);
var inst_32404 = cljs.core.async.put_BANG_.call(null,inst_32403__$1,inst_32303,done);
var state_32435__$1 = (function (){var statearr_32511 = state_32435;
(statearr_32511[(23)] = inst_32403__$1);

return statearr_32511;
})();
if(cljs.core.truth_(inst_32404)){
var statearr_32512_32571 = state_32435__$1;
(statearr_32512_32571[(1)] = (39));

} else {
var statearr_32513_32572 = state_32435__$1;
(statearr_32513_32572[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32436 === (8))){
var inst_32315 = (state_32435[(15)]);
var inst_32314 = (state_32435[(16)]);
var inst_32317 = (inst_32315 < inst_32314);
var inst_32318 = inst_32317;
var state_32435__$1 = state_32435;
if(cljs.core.truth_(inst_32318)){
var statearr_32514_32573 = state_32435__$1;
(statearr_32514_32573[(1)] = (10));

} else {
var statearr_32515_32574 = state_32435__$1;
(statearr_32515_32574[(1)] = (11));

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
});})(c__31702__auto___32520,cs,m,dchan,dctr,done))
;
return ((function (switch__31607__auto__,c__31702__auto___32520,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31608__auto__ = null;
var cljs$core$async$mult_$_state_machine__31608__auto____0 = (function (){
var statearr_32516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32516[(0)] = cljs$core$async$mult_$_state_machine__31608__auto__);

(statearr_32516[(1)] = (1));

return statearr_32516;
});
var cljs$core$async$mult_$_state_machine__31608__auto____1 = (function (state_32435){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32517){if((e32517 instanceof Object)){
var ex__31611__auto__ = e32517;
var statearr_32518_32575 = state_32435;
(statearr_32518_32575[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32576 = state_32435;
state_32435 = G__32576;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31608__auto__ = function(state_32435){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31608__auto____1.call(this,state_32435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31608__auto____0;
cljs$core$async$mult_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31608__auto____1;
return cljs$core$async$mult_$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___32520,cs,m,dchan,dctr,done))
})();
var state__31704__auto__ = (function (){var statearr_32519 = f__31703__auto__.call(null);
(statearr_32519[(6)] = c__31702__auto___32520);

return statearr_32519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___32520,cs,m,dchan,dctr,done))
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
var G__32578 = arguments.length;
switch (G__32578) {
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
var len__4730__auto___32590 = arguments.length;
var i__4731__auto___32591 = (0);
while(true){
if((i__4731__auto___32591 < len__4730__auto___32590)){
args__4736__auto__.push((arguments[i__4731__auto___32591]));

var G__32592 = (i__4731__auto___32591 + (1));
i__4731__auto___32591 = G__32592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32584){
var map__32585 = p__32584;
var map__32585__$1 = (((((!((map__32585 == null))))?(((((map__32585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32585):map__32585);
var opts = map__32585__$1;
var statearr_32587_32593 = state;
(statearr_32587_32593[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32585,map__32585__$1,opts){
return (function (val){
var statearr_32588_32594 = state;
(statearr_32588_32594[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32585,map__32585__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32589_32595 = state;
(statearr_32589_32595[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32580){
var G__32581 = cljs.core.first.call(null,seq32580);
var seq32580__$1 = cljs.core.next.call(null,seq32580);
var G__32582 = cljs.core.first.call(null,seq32580__$1);
var seq32580__$2 = cljs.core.next.call(null,seq32580__$1);
var G__32583 = cljs.core.first.call(null,seq32580__$2);
var seq32580__$3 = cljs.core.next.call(null,seq32580__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32581,G__32582,G__32583,seq32580__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32596 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32597){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32597 = meta32597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32598,meta32597__$1){
var self__ = this;
var _32598__$1 = this;
return (new cljs.core.async.t_cljs$core$async32596(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32597__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32598){
var self__ = this;
var _32598__$1 = this;
return self__.meta32597;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32596.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32597","meta32597",1419257195,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32596";

cljs.core.async.t_cljs$core$async32596.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32596");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32596.
 */
cljs.core.async.__GT_t_cljs$core$async32596 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32597){
return (new cljs.core.async.t_cljs$core$async32596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32597));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31702__auto___32760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___32760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___32760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32700){
var state_val_32701 = (state_32700[(1)]);
if((state_val_32701 === (7))){
var inst_32615 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32702_32761 = state_32700__$1;
(statearr_32702_32761[(2)] = inst_32615);

(statearr_32702_32761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (20))){
var inst_32627 = (state_32700[(7)]);
var state_32700__$1 = state_32700;
var statearr_32703_32762 = state_32700__$1;
(statearr_32703_32762[(2)] = inst_32627);

(statearr_32703_32762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (27))){
var state_32700__$1 = state_32700;
var statearr_32704_32763 = state_32700__$1;
(statearr_32704_32763[(2)] = null);

(statearr_32704_32763[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (1))){
var inst_32602 = (state_32700[(8)]);
var inst_32602__$1 = calc_state.call(null);
var inst_32604 = (inst_32602__$1 == null);
var inst_32605 = cljs.core.not.call(null,inst_32604);
var state_32700__$1 = (function (){var statearr_32705 = state_32700;
(statearr_32705[(8)] = inst_32602__$1);

return statearr_32705;
})();
if(inst_32605){
var statearr_32706_32764 = state_32700__$1;
(statearr_32706_32764[(1)] = (2));

} else {
var statearr_32707_32765 = state_32700__$1;
(statearr_32707_32765[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (24))){
var inst_32674 = (state_32700[(9)]);
var inst_32651 = (state_32700[(10)]);
var inst_32660 = (state_32700[(11)]);
var inst_32674__$1 = inst_32651.call(null,inst_32660);
var state_32700__$1 = (function (){var statearr_32708 = state_32700;
(statearr_32708[(9)] = inst_32674__$1);

return statearr_32708;
})();
if(cljs.core.truth_(inst_32674__$1)){
var statearr_32709_32766 = state_32700__$1;
(statearr_32709_32766[(1)] = (29));

} else {
var statearr_32710_32767 = state_32700__$1;
(statearr_32710_32767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (4))){
var inst_32618 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32618)){
var statearr_32711_32768 = state_32700__$1;
(statearr_32711_32768[(1)] = (8));

} else {
var statearr_32712_32769 = state_32700__$1;
(statearr_32712_32769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (15))){
var inst_32645 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32645)){
var statearr_32713_32770 = state_32700__$1;
(statearr_32713_32770[(1)] = (19));

} else {
var statearr_32714_32771 = state_32700__$1;
(statearr_32714_32771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (21))){
var inst_32650 = (state_32700[(12)]);
var inst_32650__$1 = (state_32700[(2)]);
var inst_32651 = cljs.core.get.call(null,inst_32650__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32652 = cljs.core.get.call(null,inst_32650__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32653 = cljs.core.get.call(null,inst_32650__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32700__$1 = (function (){var statearr_32715 = state_32700;
(statearr_32715[(13)] = inst_32652);

(statearr_32715[(12)] = inst_32650__$1);

(statearr_32715[(10)] = inst_32651);

return statearr_32715;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32700__$1,(22),inst_32653);
} else {
if((state_val_32701 === (31))){
var inst_32682 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32682)){
var statearr_32716_32772 = state_32700__$1;
(statearr_32716_32772[(1)] = (32));

} else {
var statearr_32717_32773 = state_32700__$1;
(statearr_32717_32773[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (32))){
var inst_32659 = (state_32700[(14)]);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32700__$1,(35),out,inst_32659);
} else {
if((state_val_32701 === (33))){
var inst_32650 = (state_32700[(12)]);
var inst_32627 = inst_32650;
var state_32700__$1 = (function (){var statearr_32718 = state_32700;
(statearr_32718[(7)] = inst_32627);

return statearr_32718;
})();
var statearr_32719_32774 = state_32700__$1;
(statearr_32719_32774[(2)] = null);

(statearr_32719_32774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (13))){
var inst_32627 = (state_32700[(7)]);
var inst_32634 = inst_32627.cljs$lang$protocol_mask$partition0$;
var inst_32635 = (inst_32634 & (64));
var inst_32636 = inst_32627.cljs$core$ISeq$;
var inst_32637 = (cljs.core.PROTOCOL_SENTINEL === inst_32636);
var inst_32638 = ((inst_32635) || (inst_32637));
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32638)){
var statearr_32720_32775 = state_32700__$1;
(statearr_32720_32775[(1)] = (16));

} else {
var statearr_32721_32776 = state_32700__$1;
(statearr_32721_32776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (22))){
var inst_32659 = (state_32700[(14)]);
var inst_32660 = (state_32700[(11)]);
var inst_32658 = (state_32700[(2)]);
var inst_32659__$1 = cljs.core.nth.call(null,inst_32658,(0),null);
var inst_32660__$1 = cljs.core.nth.call(null,inst_32658,(1),null);
var inst_32661 = (inst_32659__$1 == null);
var inst_32662 = cljs.core._EQ_.call(null,inst_32660__$1,change);
var inst_32663 = ((inst_32661) || (inst_32662));
var state_32700__$1 = (function (){var statearr_32722 = state_32700;
(statearr_32722[(14)] = inst_32659__$1);

(statearr_32722[(11)] = inst_32660__$1);

return statearr_32722;
})();
if(cljs.core.truth_(inst_32663)){
var statearr_32723_32777 = state_32700__$1;
(statearr_32723_32777[(1)] = (23));

} else {
var statearr_32724_32778 = state_32700__$1;
(statearr_32724_32778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (36))){
var inst_32650 = (state_32700[(12)]);
var inst_32627 = inst_32650;
var state_32700__$1 = (function (){var statearr_32725 = state_32700;
(statearr_32725[(7)] = inst_32627);

return statearr_32725;
})();
var statearr_32726_32779 = state_32700__$1;
(statearr_32726_32779[(2)] = null);

(statearr_32726_32779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (29))){
var inst_32674 = (state_32700[(9)]);
var state_32700__$1 = state_32700;
var statearr_32727_32780 = state_32700__$1;
(statearr_32727_32780[(2)] = inst_32674);

(statearr_32727_32780[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (6))){
var state_32700__$1 = state_32700;
var statearr_32728_32781 = state_32700__$1;
(statearr_32728_32781[(2)] = false);

(statearr_32728_32781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (28))){
var inst_32670 = (state_32700[(2)]);
var inst_32671 = calc_state.call(null);
var inst_32627 = inst_32671;
var state_32700__$1 = (function (){var statearr_32729 = state_32700;
(statearr_32729[(7)] = inst_32627);

(statearr_32729[(15)] = inst_32670);

return statearr_32729;
})();
var statearr_32730_32782 = state_32700__$1;
(statearr_32730_32782[(2)] = null);

(statearr_32730_32782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (25))){
var inst_32696 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32731_32783 = state_32700__$1;
(statearr_32731_32783[(2)] = inst_32696);

(statearr_32731_32783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (34))){
var inst_32694 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32732_32784 = state_32700__$1;
(statearr_32732_32784[(2)] = inst_32694);

(statearr_32732_32784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (17))){
var state_32700__$1 = state_32700;
var statearr_32733_32785 = state_32700__$1;
(statearr_32733_32785[(2)] = false);

(statearr_32733_32785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (3))){
var state_32700__$1 = state_32700;
var statearr_32734_32786 = state_32700__$1;
(statearr_32734_32786[(2)] = false);

(statearr_32734_32786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (12))){
var inst_32698 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32700__$1,inst_32698);
} else {
if((state_val_32701 === (2))){
var inst_32602 = (state_32700[(8)]);
var inst_32607 = inst_32602.cljs$lang$protocol_mask$partition0$;
var inst_32608 = (inst_32607 & (64));
var inst_32609 = inst_32602.cljs$core$ISeq$;
var inst_32610 = (cljs.core.PROTOCOL_SENTINEL === inst_32609);
var inst_32611 = ((inst_32608) || (inst_32610));
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32611)){
var statearr_32735_32787 = state_32700__$1;
(statearr_32735_32787[(1)] = (5));

} else {
var statearr_32736_32788 = state_32700__$1;
(statearr_32736_32788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (23))){
var inst_32659 = (state_32700[(14)]);
var inst_32665 = (inst_32659 == null);
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32665)){
var statearr_32737_32789 = state_32700__$1;
(statearr_32737_32789[(1)] = (26));

} else {
var statearr_32738_32790 = state_32700__$1;
(statearr_32738_32790[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (35))){
var inst_32685 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32685)){
var statearr_32739_32791 = state_32700__$1;
(statearr_32739_32791[(1)] = (36));

} else {
var statearr_32740_32792 = state_32700__$1;
(statearr_32740_32792[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (19))){
var inst_32627 = (state_32700[(7)]);
var inst_32647 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32627);
var state_32700__$1 = state_32700;
var statearr_32741_32793 = state_32700__$1;
(statearr_32741_32793[(2)] = inst_32647);

(statearr_32741_32793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (11))){
var inst_32627 = (state_32700[(7)]);
var inst_32631 = (inst_32627 == null);
var inst_32632 = cljs.core.not.call(null,inst_32631);
var state_32700__$1 = state_32700;
if(inst_32632){
var statearr_32742_32794 = state_32700__$1;
(statearr_32742_32794[(1)] = (13));

} else {
var statearr_32743_32795 = state_32700__$1;
(statearr_32743_32795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (9))){
var inst_32602 = (state_32700[(8)]);
var state_32700__$1 = state_32700;
var statearr_32744_32796 = state_32700__$1;
(statearr_32744_32796[(2)] = inst_32602);

(statearr_32744_32796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (5))){
var state_32700__$1 = state_32700;
var statearr_32745_32797 = state_32700__$1;
(statearr_32745_32797[(2)] = true);

(statearr_32745_32797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (14))){
var state_32700__$1 = state_32700;
var statearr_32746_32798 = state_32700__$1;
(statearr_32746_32798[(2)] = false);

(statearr_32746_32798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (26))){
var inst_32660 = (state_32700[(11)]);
var inst_32667 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32660);
var state_32700__$1 = state_32700;
var statearr_32747_32799 = state_32700__$1;
(statearr_32747_32799[(2)] = inst_32667);

(statearr_32747_32799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (16))){
var state_32700__$1 = state_32700;
var statearr_32748_32800 = state_32700__$1;
(statearr_32748_32800[(2)] = true);

(statearr_32748_32800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (38))){
var inst_32690 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32749_32801 = state_32700__$1;
(statearr_32749_32801[(2)] = inst_32690);

(statearr_32749_32801[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (30))){
var inst_32652 = (state_32700[(13)]);
var inst_32651 = (state_32700[(10)]);
var inst_32660 = (state_32700[(11)]);
var inst_32677 = cljs.core.empty_QMARK_.call(null,inst_32651);
var inst_32678 = inst_32652.call(null,inst_32660);
var inst_32679 = cljs.core.not.call(null,inst_32678);
var inst_32680 = ((inst_32677) && (inst_32679));
var state_32700__$1 = state_32700;
var statearr_32750_32802 = state_32700__$1;
(statearr_32750_32802[(2)] = inst_32680);

(statearr_32750_32802[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (10))){
var inst_32602 = (state_32700[(8)]);
var inst_32623 = (state_32700[(2)]);
var inst_32624 = cljs.core.get.call(null,inst_32623,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32625 = cljs.core.get.call(null,inst_32623,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32626 = cljs.core.get.call(null,inst_32623,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32627 = inst_32602;
var state_32700__$1 = (function (){var statearr_32751 = state_32700;
(statearr_32751[(7)] = inst_32627);

(statearr_32751[(16)] = inst_32626);

(statearr_32751[(17)] = inst_32624);

(statearr_32751[(18)] = inst_32625);

return statearr_32751;
})();
var statearr_32752_32803 = state_32700__$1;
(statearr_32752_32803[(2)] = null);

(statearr_32752_32803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (18))){
var inst_32642 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32753_32804 = state_32700__$1;
(statearr_32753_32804[(2)] = inst_32642);

(statearr_32753_32804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (37))){
var state_32700__$1 = state_32700;
var statearr_32754_32805 = state_32700__$1;
(statearr_32754_32805[(2)] = null);

(statearr_32754_32805[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (8))){
var inst_32602 = (state_32700[(8)]);
var inst_32620 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32602);
var state_32700__$1 = state_32700;
var statearr_32755_32806 = state_32700__$1;
(statearr_32755_32806[(2)] = inst_32620);

(statearr_32755_32806[(1)] = (10));


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
});})(c__31702__auto___32760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31607__auto__,c__31702__auto___32760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31608__auto__ = null;
var cljs$core$async$mix_$_state_machine__31608__auto____0 = (function (){
var statearr_32756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32756[(0)] = cljs$core$async$mix_$_state_machine__31608__auto__);

(statearr_32756[(1)] = (1));

return statearr_32756;
});
var cljs$core$async$mix_$_state_machine__31608__auto____1 = (function (state_32700){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32757){if((e32757 instanceof Object)){
var ex__31611__auto__ = e32757;
var statearr_32758_32807 = state_32700;
(statearr_32758_32807[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32808 = state_32700;
state_32700 = G__32808;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31608__auto__ = function(state_32700){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31608__auto____1.call(this,state_32700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31608__auto____0;
cljs$core$async$mix_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31608__auto____1;
return cljs$core$async$mix_$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___32760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31704__auto__ = (function (){var statearr_32759 = f__31703__auto__.call(null);
(statearr_32759[(6)] = c__31702__auto___32760);

return statearr_32759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___32760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__32810 = arguments.length;
switch (G__32810) {
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
var G__32814 = arguments.length;
switch (G__32814) {
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
return (function (p1__32812_SHARP_){
if(cljs.core.truth_(p1__32812_SHARP_.call(null,topic))){
return p1__32812_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32812_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32815 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32816){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32816 = meta32816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32817,meta32816__$1){
var self__ = this;
var _32817__$1 = this;
return (new cljs.core.async.t_cljs$core$async32815(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32816__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32817){
var self__ = this;
var _32817__$1 = this;
return self__.meta32816;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32815.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32816","meta32816",754081902,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32815";

cljs.core.async.t_cljs$core$async32815.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32815");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32815.
 */
cljs.core.async.__GT_t_cljs$core$async32815 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32816){
return (new cljs.core.async.t_cljs$core$async32815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32816));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32815(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31702__auto___32935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___32935,mults,ensure_mult,p){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___32935,mults,ensure_mult,p){
return (function (state_32889){
var state_val_32890 = (state_32889[(1)]);
if((state_val_32890 === (7))){
var inst_32885 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
var statearr_32891_32936 = state_32889__$1;
(statearr_32891_32936[(2)] = inst_32885);

(statearr_32891_32936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (20))){
var state_32889__$1 = state_32889;
var statearr_32892_32937 = state_32889__$1;
(statearr_32892_32937[(2)] = null);

(statearr_32892_32937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (1))){
var state_32889__$1 = state_32889;
var statearr_32893_32938 = state_32889__$1;
(statearr_32893_32938[(2)] = null);

(statearr_32893_32938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (24))){
var inst_32868 = (state_32889[(7)]);
var inst_32877 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32868);
var state_32889__$1 = state_32889;
var statearr_32894_32939 = state_32889__$1;
(statearr_32894_32939[(2)] = inst_32877);

(statearr_32894_32939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (4))){
var inst_32820 = (state_32889[(8)]);
var inst_32820__$1 = (state_32889[(2)]);
var inst_32821 = (inst_32820__$1 == null);
var state_32889__$1 = (function (){var statearr_32895 = state_32889;
(statearr_32895[(8)] = inst_32820__$1);

return statearr_32895;
})();
if(cljs.core.truth_(inst_32821)){
var statearr_32896_32940 = state_32889__$1;
(statearr_32896_32940[(1)] = (5));

} else {
var statearr_32897_32941 = state_32889__$1;
(statearr_32897_32941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (15))){
var inst_32862 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
var statearr_32898_32942 = state_32889__$1;
(statearr_32898_32942[(2)] = inst_32862);

(statearr_32898_32942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (21))){
var inst_32882 = (state_32889[(2)]);
var state_32889__$1 = (function (){var statearr_32899 = state_32889;
(statearr_32899[(9)] = inst_32882);

return statearr_32899;
})();
var statearr_32900_32943 = state_32889__$1;
(statearr_32900_32943[(2)] = null);

(statearr_32900_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (13))){
var inst_32844 = (state_32889[(10)]);
var inst_32846 = cljs.core.chunked_seq_QMARK_.call(null,inst_32844);
var state_32889__$1 = state_32889;
if(inst_32846){
var statearr_32901_32944 = state_32889__$1;
(statearr_32901_32944[(1)] = (16));

} else {
var statearr_32902_32945 = state_32889__$1;
(statearr_32902_32945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (22))){
var inst_32874 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
if(cljs.core.truth_(inst_32874)){
var statearr_32903_32946 = state_32889__$1;
(statearr_32903_32946[(1)] = (23));

} else {
var statearr_32904_32947 = state_32889__$1;
(statearr_32904_32947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (6))){
var inst_32868 = (state_32889[(7)]);
var inst_32820 = (state_32889[(8)]);
var inst_32870 = (state_32889[(11)]);
var inst_32868__$1 = topic_fn.call(null,inst_32820);
var inst_32869 = cljs.core.deref.call(null,mults);
var inst_32870__$1 = cljs.core.get.call(null,inst_32869,inst_32868__$1);
var state_32889__$1 = (function (){var statearr_32905 = state_32889;
(statearr_32905[(7)] = inst_32868__$1);

(statearr_32905[(11)] = inst_32870__$1);

return statearr_32905;
})();
if(cljs.core.truth_(inst_32870__$1)){
var statearr_32906_32948 = state_32889__$1;
(statearr_32906_32948[(1)] = (19));

} else {
var statearr_32907_32949 = state_32889__$1;
(statearr_32907_32949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (25))){
var inst_32879 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
var statearr_32908_32950 = state_32889__$1;
(statearr_32908_32950[(2)] = inst_32879);

(statearr_32908_32950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (17))){
var inst_32844 = (state_32889[(10)]);
var inst_32853 = cljs.core.first.call(null,inst_32844);
var inst_32854 = cljs.core.async.muxch_STAR_.call(null,inst_32853);
var inst_32855 = cljs.core.async.close_BANG_.call(null,inst_32854);
var inst_32856 = cljs.core.next.call(null,inst_32844);
var inst_32830 = inst_32856;
var inst_32831 = null;
var inst_32832 = (0);
var inst_32833 = (0);
var state_32889__$1 = (function (){var statearr_32909 = state_32889;
(statearr_32909[(12)] = inst_32831);

(statearr_32909[(13)] = inst_32832);

(statearr_32909[(14)] = inst_32833);

(statearr_32909[(15)] = inst_32830);

(statearr_32909[(16)] = inst_32855);

return statearr_32909;
})();
var statearr_32910_32951 = state_32889__$1;
(statearr_32910_32951[(2)] = null);

(statearr_32910_32951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (3))){
var inst_32887 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32889__$1,inst_32887);
} else {
if((state_val_32890 === (12))){
var inst_32864 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
var statearr_32911_32952 = state_32889__$1;
(statearr_32911_32952[(2)] = inst_32864);

(statearr_32911_32952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (2))){
var state_32889__$1 = state_32889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32889__$1,(4),ch);
} else {
if((state_val_32890 === (23))){
var state_32889__$1 = state_32889;
var statearr_32912_32953 = state_32889__$1;
(statearr_32912_32953[(2)] = null);

(statearr_32912_32953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (19))){
var inst_32820 = (state_32889[(8)]);
var inst_32870 = (state_32889[(11)]);
var inst_32872 = cljs.core.async.muxch_STAR_.call(null,inst_32870);
var state_32889__$1 = state_32889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32889__$1,(22),inst_32872,inst_32820);
} else {
if((state_val_32890 === (11))){
var inst_32844 = (state_32889[(10)]);
var inst_32830 = (state_32889[(15)]);
var inst_32844__$1 = cljs.core.seq.call(null,inst_32830);
var state_32889__$1 = (function (){var statearr_32913 = state_32889;
(statearr_32913[(10)] = inst_32844__$1);

return statearr_32913;
})();
if(inst_32844__$1){
var statearr_32914_32954 = state_32889__$1;
(statearr_32914_32954[(1)] = (13));

} else {
var statearr_32915_32955 = state_32889__$1;
(statearr_32915_32955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (9))){
var inst_32866 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
var statearr_32916_32956 = state_32889__$1;
(statearr_32916_32956[(2)] = inst_32866);

(statearr_32916_32956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (5))){
var inst_32827 = cljs.core.deref.call(null,mults);
var inst_32828 = cljs.core.vals.call(null,inst_32827);
var inst_32829 = cljs.core.seq.call(null,inst_32828);
var inst_32830 = inst_32829;
var inst_32831 = null;
var inst_32832 = (0);
var inst_32833 = (0);
var state_32889__$1 = (function (){var statearr_32917 = state_32889;
(statearr_32917[(12)] = inst_32831);

(statearr_32917[(13)] = inst_32832);

(statearr_32917[(14)] = inst_32833);

(statearr_32917[(15)] = inst_32830);

return statearr_32917;
})();
var statearr_32918_32957 = state_32889__$1;
(statearr_32918_32957[(2)] = null);

(statearr_32918_32957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (14))){
var state_32889__$1 = state_32889;
var statearr_32922_32958 = state_32889__$1;
(statearr_32922_32958[(2)] = null);

(statearr_32922_32958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (16))){
var inst_32844 = (state_32889[(10)]);
var inst_32848 = cljs.core.chunk_first.call(null,inst_32844);
var inst_32849 = cljs.core.chunk_rest.call(null,inst_32844);
var inst_32850 = cljs.core.count.call(null,inst_32848);
var inst_32830 = inst_32849;
var inst_32831 = inst_32848;
var inst_32832 = inst_32850;
var inst_32833 = (0);
var state_32889__$1 = (function (){var statearr_32923 = state_32889;
(statearr_32923[(12)] = inst_32831);

(statearr_32923[(13)] = inst_32832);

(statearr_32923[(14)] = inst_32833);

(statearr_32923[(15)] = inst_32830);

return statearr_32923;
})();
var statearr_32924_32959 = state_32889__$1;
(statearr_32924_32959[(2)] = null);

(statearr_32924_32959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (10))){
var inst_32831 = (state_32889[(12)]);
var inst_32832 = (state_32889[(13)]);
var inst_32833 = (state_32889[(14)]);
var inst_32830 = (state_32889[(15)]);
var inst_32838 = cljs.core._nth.call(null,inst_32831,inst_32833);
var inst_32839 = cljs.core.async.muxch_STAR_.call(null,inst_32838);
var inst_32840 = cljs.core.async.close_BANG_.call(null,inst_32839);
var inst_32841 = (inst_32833 + (1));
var tmp32919 = inst_32831;
var tmp32920 = inst_32832;
var tmp32921 = inst_32830;
var inst_32830__$1 = tmp32921;
var inst_32831__$1 = tmp32919;
var inst_32832__$1 = tmp32920;
var inst_32833__$1 = inst_32841;
var state_32889__$1 = (function (){var statearr_32925 = state_32889;
(statearr_32925[(12)] = inst_32831__$1);

(statearr_32925[(13)] = inst_32832__$1);

(statearr_32925[(14)] = inst_32833__$1);

(statearr_32925[(15)] = inst_32830__$1);

(statearr_32925[(17)] = inst_32840);

return statearr_32925;
})();
var statearr_32926_32960 = state_32889__$1;
(statearr_32926_32960[(2)] = null);

(statearr_32926_32960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (18))){
var inst_32859 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
var statearr_32927_32961 = state_32889__$1;
(statearr_32927_32961[(2)] = inst_32859);

(statearr_32927_32961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32890 === (8))){
var inst_32832 = (state_32889[(13)]);
var inst_32833 = (state_32889[(14)]);
var inst_32835 = (inst_32833 < inst_32832);
var inst_32836 = inst_32835;
var state_32889__$1 = state_32889;
if(cljs.core.truth_(inst_32836)){
var statearr_32928_32962 = state_32889__$1;
(statearr_32928_32962[(1)] = (10));

} else {
var statearr_32929_32963 = state_32889__$1;
(statearr_32929_32963[(1)] = (11));

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
});})(c__31702__auto___32935,mults,ensure_mult,p))
;
return ((function (switch__31607__auto__,c__31702__auto___32935,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_32930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32930[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_32930[(1)] = (1));

return statearr_32930;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_32889){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_32889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e32931){if((e32931 instanceof Object)){
var ex__31611__auto__ = e32931;
var statearr_32932_32964 = state_32889;
(statearr_32932_32964[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32965 = state_32889;
state_32889 = G__32965;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_32889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_32889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___32935,mults,ensure_mult,p))
})();
var state__31704__auto__ = (function (){var statearr_32933 = f__31703__auto__.call(null);
(statearr_32933[(6)] = c__31702__auto___32935);

return statearr_32933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___32935,mults,ensure_mult,p))
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
var G__32967 = arguments.length;
switch (G__32967) {
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
var G__32970 = arguments.length;
switch (G__32970) {
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
var G__32973 = arguments.length;
switch (G__32973) {
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
var c__31702__auto___33040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___33040,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___33040,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33012){
var state_val_33013 = (state_33012[(1)]);
if((state_val_33013 === (7))){
var state_33012__$1 = state_33012;
var statearr_33014_33041 = state_33012__$1;
(statearr_33014_33041[(2)] = null);

(statearr_33014_33041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (1))){
var state_33012__$1 = state_33012;
var statearr_33015_33042 = state_33012__$1;
(statearr_33015_33042[(2)] = null);

(statearr_33015_33042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (4))){
var inst_32976 = (state_33012[(7)]);
var inst_32978 = (inst_32976 < cnt);
var state_33012__$1 = state_33012;
if(cljs.core.truth_(inst_32978)){
var statearr_33016_33043 = state_33012__$1;
(statearr_33016_33043[(1)] = (6));

} else {
var statearr_33017_33044 = state_33012__$1;
(statearr_33017_33044[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (15))){
var inst_33008 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33018_33045 = state_33012__$1;
(statearr_33018_33045[(2)] = inst_33008);

(statearr_33018_33045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (13))){
var inst_33001 = cljs.core.async.close_BANG_.call(null,out);
var state_33012__$1 = state_33012;
var statearr_33019_33046 = state_33012__$1;
(statearr_33019_33046[(2)] = inst_33001);

(statearr_33019_33046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (6))){
var state_33012__$1 = state_33012;
var statearr_33020_33047 = state_33012__$1;
(statearr_33020_33047[(2)] = null);

(statearr_33020_33047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (3))){
var inst_33010 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33012__$1,inst_33010);
} else {
if((state_val_33013 === (12))){
var inst_32998 = (state_33012[(8)]);
var inst_32998__$1 = (state_33012[(2)]);
var inst_32999 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32998__$1);
var state_33012__$1 = (function (){var statearr_33021 = state_33012;
(statearr_33021[(8)] = inst_32998__$1);

return statearr_33021;
})();
if(cljs.core.truth_(inst_32999)){
var statearr_33022_33048 = state_33012__$1;
(statearr_33022_33048[(1)] = (13));

} else {
var statearr_33023_33049 = state_33012__$1;
(statearr_33023_33049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (2))){
var inst_32975 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32976 = (0);
var state_33012__$1 = (function (){var statearr_33024 = state_33012;
(statearr_33024[(7)] = inst_32976);

(statearr_33024[(9)] = inst_32975);

return statearr_33024;
})();
var statearr_33025_33050 = state_33012__$1;
(statearr_33025_33050[(2)] = null);

(statearr_33025_33050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (11))){
var inst_32976 = (state_33012[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33012,(10),Object,null,(9));
var inst_32985 = chs__$1.call(null,inst_32976);
var inst_32986 = done.call(null,inst_32976);
var inst_32987 = cljs.core.async.take_BANG_.call(null,inst_32985,inst_32986);
var state_33012__$1 = state_33012;
var statearr_33026_33051 = state_33012__$1;
(statearr_33026_33051[(2)] = inst_32987);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33012__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (9))){
var inst_32976 = (state_33012[(7)]);
var inst_32989 = (state_33012[(2)]);
var inst_32990 = (inst_32976 + (1));
var inst_32976__$1 = inst_32990;
var state_33012__$1 = (function (){var statearr_33027 = state_33012;
(statearr_33027[(7)] = inst_32976__$1);

(statearr_33027[(10)] = inst_32989);

return statearr_33027;
})();
var statearr_33028_33052 = state_33012__$1;
(statearr_33028_33052[(2)] = null);

(statearr_33028_33052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (5))){
var inst_32996 = (state_33012[(2)]);
var state_33012__$1 = (function (){var statearr_33029 = state_33012;
(statearr_33029[(11)] = inst_32996);

return statearr_33029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33012__$1,(12),dchan);
} else {
if((state_val_33013 === (14))){
var inst_32998 = (state_33012[(8)]);
var inst_33003 = cljs.core.apply.call(null,f,inst_32998);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33012__$1,(16),out,inst_33003);
} else {
if((state_val_33013 === (16))){
var inst_33005 = (state_33012[(2)]);
var state_33012__$1 = (function (){var statearr_33030 = state_33012;
(statearr_33030[(12)] = inst_33005);

return statearr_33030;
})();
var statearr_33031_33053 = state_33012__$1;
(statearr_33031_33053[(2)] = null);

(statearr_33031_33053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (10))){
var inst_32980 = (state_33012[(2)]);
var inst_32981 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33012__$1 = (function (){var statearr_33032 = state_33012;
(statearr_33032[(13)] = inst_32980);

return statearr_33032;
})();
var statearr_33033_33054 = state_33012__$1;
(statearr_33033_33054[(2)] = inst_32981);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33012__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33013 === (8))){
var inst_32994 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33034_33055 = state_33012__$1;
(statearr_33034_33055[(2)] = inst_32994);

(statearr_33034_33055[(1)] = (5));


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
});})(c__31702__auto___33040,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31607__auto__,c__31702__auto___33040,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_33035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33035[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_33035[(1)] = (1));

return statearr_33035;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_33012){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33036){if((e33036 instanceof Object)){
var ex__31611__auto__ = e33036;
var statearr_33037_33056 = state_33012;
(statearr_33037_33056[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33057 = state_33012;
state_33012 = G__33057;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_33012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_33012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___33040,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31704__auto__ = (function (){var statearr_33038 = f__31703__auto__.call(null);
(statearr_33038[(6)] = c__31702__auto___33040);

return statearr_33038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___33040,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33060 = arguments.length;
switch (G__33060) {
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
var c__31702__auto___33114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___33114,out){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___33114,out){
return (function (state_33092){
var state_val_33093 = (state_33092[(1)]);
if((state_val_33093 === (7))){
var inst_33071 = (state_33092[(7)]);
var inst_33072 = (state_33092[(8)]);
var inst_33071__$1 = (state_33092[(2)]);
var inst_33072__$1 = cljs.core.nth.call(null,inst_33071__$1,(0),null);
var inst_33073 = cljs.core.nth.call(null,inst_33071__$1,(1),null);
var inst_33074 = (inst_33072__$1 == null);
var state_33092__$1 = (function (){var statearr_33094 = state_33092;
(statearr_33094[(7)] = inst_33071__$1);

(statearr_33094[(9)] = inst_33073);

(statearr_33094[(8)] = inst_33072__$1);

return statearr_33094;
})();
if(cljs.core.truth_(inst_33074)){
var statearr_33095_33115 = state_33092__$1;
(statearr_33095_33115[(1)] = (8));

} else {
var statearr_33096_33116 = state_33092__$1;
(statearr_33096_33116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (1))){
var inst_33061 = cljs.core.vec.call(null,chs);
var inst_33062 = inst_33061;
var state_33092__$1 = (function (){var statearr_33097 = state_33092;
(statearr_33097[(10)] = inst_33062);

return statearr_33097;
})();
var statearr_33098_33117 = state_33092__$1;
(statearr_33098_33117[(2)] = null);

(statearr_33098_33117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (4))){
var inst_33062 = (state_33092[(10)]);
var state_33092__$1 = state_33092;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33092__$1,(7),inst_33062);
} else {
if((state_val_33093 === (6))){
var inst_33088 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33099_33118 = state_33092__$1;
(statearr_33099_33118[(2)] = inst_33088);

(statearr_33099_33118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (3))){
var inst_33090 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33092__$1,inst_33090);
} else {
if((state_val_33093 === (2))){
var inst_33062 = (state_33092[(10)]);
var inst_33064 = cljs.core.count.call(null,inst_33062);
var inst_33065 = (inst_33064 > (0));
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33065)){
var statearr_33101_33119 = state_33092__$1;
(statearr_33101_33119[(1)] = (4));

} else {
var statearr_33102_33120 = state_33092__$1;
(statearr_33102_33120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (11))){
var inst_33062 = (state_33092[(10)]);
var inst_33081 = (state_33092[(2)]);
var tmp33100 = inst_33062;
var inst_33062__$1 = tmp33100;
var state_33092__$1 = (function (){var statearr_33103 = state_33092;
(statearr_33103[(11)] = inst_33081);

(statearr_33103[(10)] = inst_33062__$1);

return statearr_33103;
})();
var statearr_33104_33121 = state_33092__$1;
(statearr_33104_33121[(2)] = null);

(statearr_33104_33121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (9))){
var inst_33072 = (state_33092[(8)]);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33092__$1,(11),out,inst_33072);
} else {
if((state_val_33093 === (5))){
var inst_33086 = cljs.core.async.close_BANG_.call(null,out);
var state_33092__$1 = state_33092;
var statearr_33105_33122 = state_33092__$1;
(statearr_33105_33122[(2)] = inst_33086);

(statearr_33105_33122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (10))){
var inst_33084 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33106_33123 = state_33092__$1;
(statearr_33106_33123[(2)] = inst_33084);

(statearr_33106_33123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (8))){
var inst_33071 = (state_33092[(7)]);
var inst_33073 = (state_33092[(9)]);
var inst_33072 = (state_33092[(8)]);
var inst_33062 = (state_33092[(10)]);
var inst_33076 = (function (){var cs = inst_33062;
var vec__33067 = inst_33071;
var v = inst_33072;
var c = inst_33073;
return ((function (cs,vec__33067,v,c,inst_33071,inst_33073,inst_33072,inst_33062,state_val_33093,c__31702__auto___33114,out){
return (function (p1__33058_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33058_SHARP_);
});
;})(cs,vec__33067,v,c,inst_33071,inst_33073,inst_33072,inst_33062,state_val_33093,c__31702__auto___33114,out))
})();
var inst_33077 = cljs.core.filterv.call(null,inst_33076,inst_33062);
var inst_33062__$1 = inst_33077;
var state_33092__$1 = (function (){var statearr_33107 = state_33092;
(statearr_33107[(10)] = inst_33062__$1);

return statearr_33107;
})();
var statearr_33108_33124 = state_33092__$1;
(statearr_33108_33124[(2)] = null);

(statearr_33108_33124[(1)] = (2));


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
});})(c__31702__auto___33114,out))
;
return ((function (switch__31607__auto__,c__31702__auto___33114,out){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_33109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33109[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_33109[(1)] = (1));

return statearr_33109;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_33092){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33110){if((e33110 instanceof Object)){
var ex__31611__auto__ = e33110;
var statearr_33111_33125 = state_33092;
(statearr_33111_33125[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33126 = state_33092;
state_33092 = G__33126;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_33092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_33092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___33114,out))
})();
var state__31704__auto__ = (function (){var statearr_33112 = f__31703__auto__.call(null);
(statearr_33112[(6)] = c__31702__auto___33114);

return statearr_33112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___33114,out))
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
var G__33128 = arguments.length;
switch (G__33128) {
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
var c__31702__auto___33173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___33173,out){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___33173,out){
return (function (state_33152){
var state_val_33153 = (state_33152[(1)]);
if((state_val_33153 === (7))){
var inst_33134 = (state_33152[(7)]);
var inst_33134__$1 = (state_33152[(2)]);
var inst_33135 = (inst_33134__$1 == null);
var inst_33136 = cljs.core.not.call(null,inst_33135);
var state_33152__$1 = (function (){var statearr_33154 = state_33152;
(statearr_33154[(7)] = inst_33134__$1);

return statearr_33154;
})();
if(inst_33136){
var statearr_33155_33174 = state_33152__$1;
(statearr_33155_33174[(1)] = (8));

} else {
var statearr_33156_33175 = state_33152__$1;
(statearr_33156_33175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (1))){
var inst_33129 = (0);
var state_33152__$1 = (function (){var statearr_33157 = state_33152;
(statearr_33157[(8)] = inst_33129);

return statearr_33157;
})();
var statearr_33158_33176 = state_33152__$1;
(statearr_33158_33176[(2)] = null);

(statearr_33158_33176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (4))){
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33152__$1,(7),ch);
} else {
if((state_val_33153 === (6))){
var inst_33147 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33159_33177 = state_33152__$1;
(statearr_33159_33177[(2)] = inst_33147);

(statearr_33159_33177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (3))){
var inst_33149 = (state_33152[(2)]);
var inst_33150 = cljs.core.async.close_BANG_.call(null,out);
var state_33152__$1 = (function (){var statearr_33160 = state_33152;
(statearr_33160[(9)] = inst_33149);

return statearr_33160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33152__$1,inst_33150);
} else {
if((state_val_33153 === (2))){
var inst_33129 = (state_33152[(8)]);
var inst_33131 = (inst_33129 < n);
var state_33152__$1 = state_33152;
if(cljs.core.truth_(inst_33131)){
var statearr_33161_33178 = state_33152__$1;
(statearr_33161_33178[(1)] = (4));

} else {
var statearr_33162_33179 = state_33152__$1;
(statearr_33162_33179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (11))){
var inst_33129 = (state_33152[(8)]);
var inst_33139 = (state_33152[(2)]);
var inst_33140 = (inst_33129 + (1));
var inst_33129__$1 = inst_33140;
var state_33152__$1 = (function (){var statearr_33163 = state_33152;
(statearr_33163[(10)] = inst_33139);

(statearr_33163[(8)] = inst_33129__$1);

return statearr_33163;
})();
var statearr_33164_33180 = state_33152__$1;
(statearr_33164_33180[(2)] = null);

(statearr_33164_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (9))){
var state_33152__$1 = state_33152;
var statearr_33165_33181 = state_33152__$1;
(statearr_33165_33181[(2)] = null);

(statearr_33165_33181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (5))){
var state_33152__$1 = state_33152;
var statearr_33166_33182 = state_33152__$1;
(statearr_33166_33182[(2)] = null);

(statearr_33166_33182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (10))){
var inst_33144 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33167_33183 = state_33152__$1;
(statearr_33167_33183[(2)] = inst_33144);

(statearr_33167_33183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (8))){
var inst_33134 = (state_33152[(7)]);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33152__$1,(11),out,inst_33134);
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
});})(c__31702__auto___33173,out))
;
return ((function (switch__31607__auto__,c__31702__auto___33173,out){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_33168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33168[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_33168[(1)] = (1));

return statearr_33168;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_33152){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33169){if((e33169 instanceof Object)){
var ex__31611__auto__ = e33169;
var statearr_33170_33184 = state_33152;
(statearr_33170_33184[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33185 = state_33152;
state_33152 = G__33185;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_33152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_33152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___33173,out))
})();
var state__31704__auto__ = (function (){var statearr_33171 = f__31703__auto__.call(null);
(statearr_33171[(6)] = c__31702__auto___33173);

return statearr_33171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___33173,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33187 = (function (f,ch,meta33188){
this.f = f;
this.ch = ch;
this.meta33188 = meta33188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33189,meta33188__$1){
var self__ = this;
var _33189__$1 = this;
return (new cljs.core.async.t_cljs$core$async33187(self__.f,self__.ch,meta33188__$1));
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33189){
var self__ = this;
var _33189__$1 = this;
return self__.meta33188;
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33190 = (function (f,ch,meta33188,_,fn1,meta33191){
this.f = f;
this.ch = ch;
this.meta33188 = meta33188;
this._ = _;
this.fn1 = fn1;
this.meta33191 = meta33191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33192,meta33191__$1){
var self__ = this;
var _33192__$1 = this;
return (new cljs.core.async.t_cljs$core$async33190(self__.f,self__.ch,self__.meta33188,self__._,self__.fn1,meta33191__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33192){
var self__ = this;
var _33192__$1 = this;
return self__.meta33191;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33186_SHARP_){
return f1.call(null,(((p1__33186_SHARP_ == null))?null:self__.f.call(null,p1__33186_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33190.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33188","meta33188",-906149714,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33187","cljs.core.async/t_cljs$core$async33187",-1913227325,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33191","meta33191",1997397260,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33190";

cljs.core.async.t_cljs$core$async33190.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33190");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33190.
 */
cljs.core.async.__GT_t_cljs$core$async33190 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33190(f__$1,ch__$1,meta33188__$1,___$2,fn1__$1,meta33191){
return (new cljs.core.async.t_cljs$core$async33190(f__$1,ch__$1,meta33188__$1,___$2,fn1__$1,meta33191));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33190(self__.f,self__.ch,self__.meta33188,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33188","meta33188",-906149714,null)], null);
});

cljs.core.async.t_cljs$core$async33187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33187";

cljs.core.async.t_cljs$core$async33187.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33187");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33187.
 */
cljs.core.async.__GT_t_cljs$core$async33187 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33187(f__$1,ch__$1,meta33188){
return (new cljs.core.async.t_cljs$core$async33187(f__$1,ch__$1,meta33188));
});

}

return (new cljs.core.async.t_cljs$core$async33187(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33193 = (function (f,ch,meta33194){
this.f = f;
this.ch = ch;
this.meta33194 = meta33194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33195,meta33194__$1){
var self__ = this;
var _33195__$1 = this;
return (new cljs.core.async.t_cljs$core$async33193(self__.f,self__.ch,meta33194__$1));
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33195){
var self__ = this;
var _33195__$1 = this;
return self__.meta33194;
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33194","meta33194",1543210262,null)], null);
});

cljs.core.async.t_cljs$core$async33193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33193";

cljs.core.async.t_cljs$core$async33193.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33193");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33193.
 */
cljs.core.async.__GT_t_cljs$core$async33193 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33193(f__$1,ch__$1,meta33194){
return (new cljs.core.async.t_cljs$core$async33193(f__$1,ch__$1,meta33194));
});

}

return (new cljs.core.async.t_cljs$core$async33193(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33196 = (function (p,ch,meta33197){
this.p = p;
this.ch = ch;
this.meta33197 = meta33197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33198,meta33197__$1){
var self__ = this;
var _33198__$1 = this;
return (new cljs.core.async.t_cljs$core$async33196(self__.p,self__.ch,meta33197__$1));
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33198){
var self__ = this;
var _33198__$1 = this;
return self__.meta33197;
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33197","meta33197",-780914017,null)], null);
});

cljs.core.async.t_cljs$core$async33196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33196";

cljs.core.async.t_cljs$core$async33196.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33196");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33196.
 */
cljs.core.async.__GT_t_cljs$core$async33196 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33196(p__$1,ch__$1,meta33197){
return (new cljs.core.async.t_cljs$core$async33196(p__$1,ch__$1,meta33197));
});

}

return (new cljs.core.async.t_cljs$core$async33196(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33200 = arguments.length;
switch (G__33200) {
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
var c__31702__auto___33240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___33240,out){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___33240,out){
return (function (state_33221){
var state_val_33222 = (state_33221[(1)]);
if((state_val_33222 === (7))){
var inst_33217 = (state_33221[(2)]);
var state_33221__$1 = state_33221;
var statearr_33223_33241 = state_33221__$1;
(statearr_33223_33241[(2)] = inst_33217);

(statearr_33223_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (1))){
var state_33221__$1 = state_33221;
var statearr_33224_33242 = state_33221__$1;
(statearr_33224_33242[(2)] = null);

(statearr_33224_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (4))){
var inst_33203 = (state_33221[(7)]);
var inst_33203__$1 = (state_33221[(2)]);
var inst_33204 = (inst_33203__$1 == null);
var state_33221__$1 = (function (){var statearr_33225 = state_33221;
(statearr_33225[(7)] = inst_33203__$1);

return statearr_33225;
})();
if(cljs.core.truth_(inst_33204)){
var statearr_33226_33243 = state_33221__$1;
(statearr_33226_33243[(1)] = (5));

} else {
var statearr_33227_33244 = state_33221__$1;
(statearr_33227_33244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (6))){
var inst_33203 = (state_33221[(7)]);
var inst_33208 = p.call(null,inst_33203);
var state_33221__$1 = state_33221;
if(cljs.core.truth_(inst_33208)){
var statearr_33228_33245 = state_33221__$1;
(statearr_33228_33245[(1)] = (8));

} else {
var statearr_33229_33246 = state_33221__$1;
(statearr_33229_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (3))){
var inst_33219 = (state_33221[(2)]);
var state_33221__$1 = state_33221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33221__$1,inst_33219);
} else {
if((state_val_33222 === (2))){
var state_33221__$1 = state_33221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33221__$1,(4),ch);
} else {
if((state_val_33222 === (11))){
var inst_33211 = (state_33221[(2)]);
var state_33221__$1 = state_33221;
var statearr_33230_33247 = state_33221__$1;
(statearr_33230_33247[(2)] = inst_33211);

(statearr_33230_33247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (9))){
var state_33221__$1 = state_33221;
var statearr_33231_33248 = state_33221__$1;
(statearr_33231_33248[(2)] = null);

(statearr_33231_33248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (5))){
var inst_33206 = cljs.core.async.close_BANG_.call(null,out);
var state_33221__$1 = state_33221;
var statearr_33232_33249 = state_33221__$1;
(statearr_33232_33249[(2)] = inst_33206);

(statearr_33232_33249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (10))){
var inst_33214 = (state_33221[(2)]);
var state_33221__$1 = (function (){var statearr_33233 = state_33221;
(statearr_33233[(8)] = inst_33214);

return statearr_33233;
})();
var statearr_33234_33250 = state_33221__$1;
(statearr_33234_33250[(2)] = null);

(statearr_33234_33250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33222 === (8))){
var inst_33203 = (state_33221[(7)]);
var state_33221__$1 = state_33221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33221__$1,(11),out,inst_33203);
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
});})(c__31702__auto___33240,out))
;
return ((function (switch__31607__auto__,c__31702__auto___33240,out){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_33221){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33236){if((e33236 instanceof Object)){
var ex__31611__auto__ = e33236;
var statearr_33237_33251 = state_33221;
(statearr_33237_33251[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33252 = state_33221;
state_33221 = G__33252;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_33221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_33221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___33240,out))
})();
var state__31704__auto__ = (function (){var statearr_33238 = f__31703__auto__.call(null);
(statearr_33238[(6)] = c__31702__auto___33240);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___33240,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33254 = arguments.length;
switch (G__33254) {
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
var c__31702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto__){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto__){
return (function (state_33317){
var state_val_33318 = (state_33317[(1)]);
if((state_val_33318 === (7))){
var inst_33313 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33319_33357 = state_33317__$1;
(statearr_33319_33357[(2)] = inst_33313);

(statearr_33319_33357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (20))){
var inst_33283 = (state_33317[(7)]);
var inst_33294 = (state_33317[(2)]);
var inst_33295 = cljs.core.next.call(null,inst_33283);
var inst_33269 = inst_33295;
var inst_33270 = null;
var inst_33271 = (0);
var inst_33272 = (0);
var state_33317__$1 = (function (){var statearr_33320 = state_33317;
(statearr_33320[(8)] = inst_33269);

(statearr_33320[(9)] = inst_33270);

(statearr_33320[(10)] = inst_33271);

(statearr_33320[(11)] = inst_33272);

(statearr_33320[(12)] = inst_33294);

return statearr_33320;
})();
var statearr_33321_33358 = state_33317__$1;
(statearr_33321_33358[(2)] = null);

(statearr_33321_33358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (1))){
var state_33317__$1 = state_33317;
var statearr_33322_33359 = state_33317__$1;
(statearr_33322_33359[(2)] = null);

(statearr_33322_33359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (4))){
var inst_33258 = (state_33317[(13)]);
var inst_33258__$1 = (state_33317[(2)]);
var inst_33259 = (inst_33258__$1 == null);
var state_33317__$1 = (function (){var statearr_33323 = state_33317;
(statearr_33323[(13)] = inst_33258__$1);

return statearr_33323;
})();
if(cljs.core.truth_(inst_33259)){
var statearr_33324_33360 = state_33317__$1;
(statearr_33324_33360[(1)] = (5));

} else {
var statearr_33325_33361 = state_33317__$1;
(statearr_33325_33361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (15))){
var state_33317__$1 = state_33317;
var statearr_33329_33362 = state_33317__$1;
(statearr_33329_33362[(2)] = null);

(statearr_33329_33362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (21))){
var state_33317__$1 = state_33317;
var statearr_33330_33363 = state_33317__$1;
(statearr_33330_33363[(2)] = null);

(statearr_33330_33363[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (13))){
var inst_33269 = (state_33317[(8)]);
var inst_33270 = (state_33317[(9)]);
var inst_33271 = (state_33317[(10)]);
var inst_33272 = (state_33317[(11)]);
var inst_33279 = (state_33317[(2)]);
var inst_33280 = (inst_33272 + (1));
var tmp33326 = inst_33269;
var tmp33327 = inst_33270;
var tmp33328 = inst_33271;
var inst_33269__$1 = tmp33326;
var inst_33270__$1 = tmp33327;
var inst_33271__$1 = tmp33328;
var inst_33272__$1 = inst_33280;
var state_33317__$1 = (function (){var statearr_33331 = state_33317;
(statearr_33331[(8)] = inst_33269__$1);

(statearr_33331[(9)] = inst_33270__$1);

(statearr_33331[(10)] = inst_33271__$1);

(statearr_33331[(11)] = inst_33272__$1);

(statearr_33331[(14)] = inst_33279);

return statearr_33331;
})();
var statearr_33332_33364 = state_33317__$1;
(statearr_33332_33364[(2)] = null);

(statearr_33332_33364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (22))){
var state_33317__$1 = state_33317;
var statearr_33333_33365 = state_33317__$1;
(statearr_33333_33365[(2)] = null);

(statearr_33333_33365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (6))){
var inst_33258 = (state_33317[(13)]);
var inst_33267 = f.call(null,inst_33258);
var inst_33268 = cljs.core.seq.call(null,inst_33267);
var inst_33269 = inst_33268;
var inst_33270 = null;
var inst_33271 = (0);
var inst_33272 = (0);
var state_33317__$1 = (function (){var statearr_33334 = state_33317;
(statearr_33334[(8)] = inst_33269);

(statearr_33334[(9)] = inst_33270);

(statearr_33334[(10)] = inst_33271);

(statearr_33334[(11)] = inst_33272);

return statearr_33334;
})();
var statearr_33335_33366 = state_33317__$1;
(statearr_33335_33366[(2)] = null);

(statearr_33335_33366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (17))){
var inst_33283 = (state_33317[(7)]);
var inst_33287 = cljs.core.chunk_first.call(null,inst_33283);
var inst_33288 = cljs.core.chunk_rest.call(null,inst_33283);
var inst_33289 = cljs.core.count.call(null,inst_33287);
var inst_33269 = inst_33288;
var inst_33270 = inst_33287;
var inst_33271 = inst_33289;
var inst_33272 = (0);
var state_33317__$1 = (function (){var statearr_33336 = state_33317;
(statearr_33336[(8)] = inst_33269);

(statearr_33336[(9)] = inst_33270);

(statearr_33336[(10)] = inst_33271);

(statearr_33336[(11)] = inst_33272);

return statearr_33336;
})();
var statearr_33337_33367 = state_33317__$1;
(statearr_33337_33367[(2)] = null);

(statearr_33337_33367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (3))){
var inst_33315 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33317__$1,inst_33315);
} else {
if((state_val_33318 === (12))){
var inst_33303 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33338_33368 = state_33317__$1;
(statearr_33338_33368[(2)] = inst_33303);

(statearr_33338_33368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (2))){
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33317__$1,(4),in$);
} else {
if((state_val_33318 === (23))){
var inst_33311 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33339_33369 = state_33317__$1;
(statearr_33339_33369[(2)] = inst_33311);

(statearr_33339_33369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (19))){
var inst_33298 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33340_33370 = state_33317__$1;
(statearr_33340_33370[(2)] = inst_33298);

(statearr_33340_33370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (11))){
var inst_33269 = (state_33317[(8)]);
var inst_33283 = (state_33317[(7)]);
var inst_33283__$1 = cljs.core.seq.call(null,inst_33269);
var state_33317__$1 = (function (){var statearr_33341 = state_33317;
(statearr_33341[(7)] = inst_33283__$1);

return statearr_33341;
})();
if(inst_33283__$1){
var statearr_33342_33371 = state_33317__$1;
(statearr_33342_33371[(1)] = (14));

} else {
var statearr_33343_33372 = state_33317__$1;
(statearr_33343_33372[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (9))){
var inst_33305 = (state_33317[(2)]);
var inst_33306 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33317__$1 = (function (){var statearr_33344 = state_33317;
(statearr_33344[(15)] = inst_33305);

return statearr_33344;
})();
if(cljs.core.truth_(inst_33306)){
var statearr_33345_33373 = state_33317__$1;
(statearr_33345_33373[(1)] = (21));

} else {
var statearr_33346_33374 = state_33317__$1;
(statearr_33346_33374[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (5))){
var inst_33261 = cljs.core.async.close_BANG_.call(null,out);
var state_33317__$1 = state_33317;
var statearr_33347_33375 = state_33317__$1;
(statearr_33347_33375[(2)] = inst_33261);

(statearr_33347_33375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (14))){
var inst_33283 = (state_33317[(7)]);
var inst_33285 = cljs.core.chunked_seq_QMARK_.call(null,inst_33283);
var state_33317__$1 = state_33317;
if(inst_33285){
var statearr_33348_33376 = state_33317__$1;
(statearr_33348_33376[(1)] = (17));

} else {
var statearr_33349_33377 = state_33317__$1;
(statearr_33349_33377[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (16))){
var inst_33301 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33350_33378 = state_33317__$1;
(statearr_33350_33378[(2)] = inst_33301);

(statearr_33350_33378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (10))){
var inst_33270 = (state_33317[(9)]);
var inst_33272 = (state_33317[(11)]);
var inst_33277 = cljs.core._nth.call(null,inst_33270,inst_33272);
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33317__$1,(13),out,inst_33277);
} else {
if((state_val_33318 === (18))){
var inst_33283 = (state_33317[(7)]);
var inst_33292 = cljs.core.first.call(null,inst_33283);
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33317__$1,(20),out,inst_33292);
} else {
if((state_val_33318 === (8))){
var inst_33271 = (state_33317[(10)]);
var inst_33272 = (state_33317[(11)]);
var inst_33274 = (inst_33272 < inst_33271);
var inst_33275 = inst_33274;
var state_33317__$1 = state_33317;
if(cljs.core.truth_(inst_33275)){
var statearr_33351_33379 = state_33317__$1;
(statearr_33351_33379[(1)] = (10));

} else {
var statearr_33352_33380 = state_33317__$1;
(statearr_33352_33380[(1)] = (11));

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
});})(c__31702__auto__))
;
return ((function (switch__31607__auto__,c__31702__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31608__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31608__auto____0 = (function (){
var statearr_33353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33353[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31608__auto__);

(statearr_33353[(1)] = (1));

return statearr_33353;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31608__auto____1 = (function (state_33317){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33354){if((e33354 instanceof Object)){
var ex__31611__auto__ = e33354;
var statearr_33355_33381 = state_33317;
(statearr_33355_33381[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33382 = state_33317;
state_33317 = G__33382;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31608__auto__ = function(state_33317){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31608__auto____1.call(this,state_33317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31608__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31608__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto__))
})();
var state__31704__auto__ = (function (){var statearr_33356 = f__31703__auto__.call(null);
(statearr_33356[(6)] = c__31702__auto__);

return statearr_33356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto__))
);

return c__31702__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33384 = arguments.length;
switch (G__33384) {
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
var G__33387 = arguments.length;
switch (G__33387) {
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
var G__33390 = arguments.length;
switch (G__33390) {
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
var c__31702__auto___33437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___33437,out){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___33437,out){
return (function (state_33414){
var state_val_33415 = (state_33414[(1)]);
if((state_val_33415 === (7))){
var inst_33409 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33416_33438 = state_33414__$1;
(statearr_33416_33438[(2)] = inst_33409);

(statearr_33416_33438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (1))){
var inst_33391 = null;
var state_33414__$1 = (function (){var statearr_33417 = state_33414;
(statearr_33417[(7)] = inst_33391);

return statearr_33417;
})();
var statearr_33418_33439 = state_33414__$1;
(statearr_33418_33439[(2)] = null);

(statearr_33418_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (4))){
var inst_33394 = (state_33414[(8)]);
var inst_33394__$1 = (state_33414[(2)]);
var inst_33395 = (inst_33394__$1 == null);
var inst_33396 = cljs.core.not.call(null,inst_33395);
var state_33414__$1 = (function (){var statearr_33419 = state_33414;
(statearr_33419[(8)] = inst_33394__$1);

return statearr_33419;
})();
if(inst_33396){
var statearr_33420_33440 = state_33414__$1;
(statearr_33420_33440[(1)] = (5));

} else {
var statearr_33421_33441 = state_33414__$1;
(statearr_33421_33441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (6))){
var state_33414__$1 = state_33414;
var statearr_33422_33442 = state_33414__$1;
(statearr_33422_33442[(2)] = null);

(statearr_33422_33442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (3))){
var inst_33411 = (state_33414[(2)]);
var inst_33412 = cljs.core.async.close_BANG_.call(null,out);
var state_33414__$1 = (function (){var statearr_33423 = state_33414;
(statearr_33423[(9)] = inst_33411);

return statearr_33423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33414__$1,inst_33412);
} else {
if((state_val_33415 === (2))){
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33414__$1,(4),ch);
} else {
if((state_val_33415 === (11))){
var inst_33394 = (state_33414[(8)]);
var inst_33403 = (state_33414[(2)]);
var inst_33391 = inst_33394;
var state_33414__$1 = (function (){var statearr_33424 = state_33414;
(statearr_33424[(7)] = inst_33391);

(statearr_33424[(10)] = inst_33403);

return statearr_33424;
})();
var statearr_33425_33443 = state_33414__$1;
(statearr_33425_33443[(2)] = null);

(statearr_33425_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (9))){
var inst_33394 = (state_33414[(8)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33414__$1,(11),out,inst_33394);
} else {
if((state_val_33415 === (5))){
var inst_33391 = (state_33414[(7)]);
var inst_33394 = (state_33414[(8)]);
var inst_33398 = cljs.core._EQ_.call(null,inst_33394,inst_33391);
var state_33414__$1 = state_33414;
if(inst_33398){
var statearr_33427_33444 = state_33414__$1;
(statearr_33427_33444[(1)] = (8));

} else {
var statearr_33428_33445 = state_33414__$1;
(statearr_33428_33445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (10))){
var inst_33406 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33429_33446 = state_33414__$1;
(statearr_33429_33446[(2)] = inst_33406);

(statearr_33429_33446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (8))){
var inst_33391 = (state_33414[(7)]);
var tmp33426 = inst_33391;
var inst_33391__$1 = tmp33426;
var state_33414__$1 = (function (){var statearr_33430 = state_33414;
(statearr_33430[(7)] = inst_33391__$1);

return statearr_33430;
})();
var statearr_33431_33447 = state_33414__$1;
(statearr_33431_33447[(2)] = null);

(statearr_33431_33447[(1)] = (2));


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
});})(c__31702__auto___33437,out))
;
return ((function (switch__31607__auto__,c__31702__auto___33437,out){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_33432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33432[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_33432[(1)] = (1));

return statearr_33432;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_33414){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33433){if((e33433 instanceof Object)){
var ex__31611__auto__ = e33433;
var statearr_33434_33448 = state_33414;
(statearr_33434_33448[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33449 = state_33414;
state_33414 = G__33449;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_33414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_33414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___33437,out))
})();
var state__31704__auto__ = (function (){var statearr_33435 = f__31703__auto__.call(null);
(statearr_33435[(6)] = c__31702__auto___33437);

return statearr_33435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___33437,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33451 = arguments.length;
switch (G__33451) {
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
var c__31702__auto___33517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___33517,out){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___33517,out){
return (function (state_33489){
var state_val_33490 = (state_33489[(1)]);
if((state_val_33490 === (7))){
var inst_33485 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33491_33518 = state_33489__$1;
(statearr_33491_33518[(2)] = inst_33485);

(statearr_33491_33518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (1))){
var inst_33452 = (new Array(n));
var inst_33453 = inst_33452;
var inst_33454 = (0);
var state_33489__$1 = (function (){var statearr_33492 = state_33489;
(statearr_33492[(7)] = inst_33454);

(statearr_33492[(8)] = inst_33453);

return statearr_33492;
})();
var statearr_33493_33519 = state_33489__$1;
(statearr_33493_33519[(2)] = null);

(statearr_33493_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (4))){
var inst_33457 = (state_33489[(9)]);
var inst_33457__$1 = (state_33489[(2)]);
var inst_33458 = (inst_33457__$1 == null);
var inst_33459 = cljs.core.not.call(null,inst_33458);
var state_33489__$1 = (function (){var statearr_33494 = state_33489;
(statearr_33494[(9)] = inst_33457__$1);

return statearr_33494;
})();
if(inst_33459){
var statearr_33495_33520 = state_33489__$1;
(statearr_33495_33520[(1)] = (5));

} else {
var statearr_33496_33521 = state_33489__$1;
(statearr_33496_33521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (15))){
var inst_33479 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33497_33522 = state_33489__$1;
(statearr_33497_33522[(2)] = inst_33479);

(statearr_33497_33522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (13))){
var state_33489__$1 = state_33489;
var statearr_33498_33523 = state_33489__$1;
(statearr_33498_33523[(2)] = null);

(statearr_33498_33523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (6))){
var inst_33454 = (state_33489[(7)]);
var inst_33475 = (inst_33454 > (0));
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33475)){
var statearr_33499_33524 = state_33489__$1;
(statearr_33499_33524[(1)] = (12));

} else {
var statearr_33500_33525 = state_33489__$1;
(statearr_33500_33525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (3))){
var inst_33487 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33489__$1,inst_33487);
} else {
if((state_val_33490 === (12))){
var inst_33453 = (state_33489[(8)]);
var inst_33477 = cljs.core.vec.call(null,inst_33453);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33489__$1,(15),out,inst_33477);
} else {
if((state_val_33490 === (2))){
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33489__$1,(4),ch);
} else {
if((state_val_33490 === (11))){
var inst_33469 = (state_33489[(2)]);
var inst_33470 = (new Array(n));
var inst_33453 = inst_33470;
var inst_33454 = (0);
var state_33489__$1 = (function (){var statearr_33501 = state_33489;
(statearr_33501[(7)] = inst_33454);

(statearr_33501[(10)] = inst_33469);

(statearr_33501[(8)] = inst_33453);

return statearr_33501;
})();
var statearr_33502_33526 = state_33489__$1;
(statearr_33502_33526[(2)] = null);

(statearr_33502_33526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (9))){
var inst_33453 = (state_33489[(8)]);
var inst_33467 = cljs.core.vec.call(null,inst_33453);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33489__$1,(11),out,inst_33467);
} else {
if((state_val_33490 === (5))){
var inst_33454 = (state_33489[(7)]);
var inst_33462 = (state_33489[(11)]);
var inst_33457 = (state_33489[(9)]);
var inst_33453 = (state_33489[(8)]);
var inst_33461 = (inst_33453[inst_33454] = inst_33457);
var inst_33462__$1 = (inst_33454 + (1));
var inst_33463 = (inst_33462__$1 < n);
var state_33489__$1 = (function (){var statearr_33503 = state_33489;
(statearr_33503[(12)] = inst_33461);

(statearr_33503[(11)] = inst_33462__$1);

return statearr_33503;
})();
if(cljs.core.truth_(inst_33463)){
var statearr_33504_33527 = state_33489__$1;
(statearr_33504_33527[(1)] = (8));

} else {
var statearr_33505_33528 = state_33489__$1;
(statearr_33505_33528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (14))){
var inst_33482 = (state_33489[(2)]);
var inst_33483 = cljs.core.async.close_BANG_.call(null,out);
var state_33489__$1 = (function (){var statearr_33507 = state_33489;
(statearr_33507[(13)] = inst_33482);

return statearr_33507;
})();
var statearr_33508_33529 = state_33489__$1;
(statearr_33508_33529[(2)] = inst_33483);

(statearr_33508_33529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (10))){
var inst_33473 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33509_33530 = state_33489__$1;
(statearr_33509_33530[(2)] = inst_33473);

(statearr_33509_33530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (8))){
var inst_33462 = (state_33489[(11)]);
var inst_33453 = (state_33489[(8)]);
var tmp33506 = inst_33453;
var inst_33453__$1 = tmp33506;
var inst_33454 = inst_33462;
var state_33489__$1 = (function (){var statearr_33510 = state_33489;
(statearr_33510[(7)] = inst_33454);

(statearr_33510[(8)] = inst_33453__$1);

return statearr_33510;
})();
var statearr_33511_33531 = state_33489__$1;
(statearr_33511_33531[(2)] = null);

(statearr_33511_33531[(1)] = (2));


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
});})(c__31702__auto___33517,out))
;
return ((function (switch__31607__auto__,c__31702__auto___33517,out){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_33512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33512[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_33512[(1)] = (1));

return statearr_33512;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_33489){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33513){if((e33513 instanceof Object)){
var ex__31611__auto__ = e33513;
var statearr_33514_33532 = state_33489;
(statearr_33514_33532[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33533 = state_33489;
state_33489 = G__33533;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_33489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_33489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___33517,out))
})();
var state__31704__auto__ = (function (){var statearr_33515 = f__31703__auto__.call(null);
(statearr_33515[(6)] = c__31702__auto___33517);

return statearr_33515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___33517,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33535 = arguments.length;
switch (G__33535) {
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
var c__31702__auto___33605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31702__auto___33605,out){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (c__31702__auto___33605,out){
return (function (state_33577){
var state_val_33578 = (state_33577[(1)]);
if((state_val_33578 === (7))){
var inst_33573 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33579_33606 = state_33577__$1;
(statearr_33579_33606[(2)] = inst_33573);

(statearr_33579_33606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (1))){
var inst_33536 = [];
var inst_33537 = inst_33536;
var inst_33538 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33577__$1 = (function (){var statearr_33580 = state_33577;
(statearr_33580[(7)] = inst_33538);

(statearr_33580[(8)] = inst_33537);

return statearr_33580;
})();
var statearr_33581_33607 = state_33577__$1;
(statearr_33581_33607[(2)] = null);

(statearr_33581_33607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (4))){
var inst_33541 = (state_33577[(9)]);
var inst_33541__$1 = (state_33577[(2)]);
var inst_33542 = (inst_33541__$1 == null);
var inst_33543 = cljs.core.not.call(null,inst_33542);
var state_33577__$1 = (function (){var statearr_33582 = state_33577;
(statearr_33582[(9)] = inst_33541__$1);

return statearr_33582;
})();
if(inst_33543){
var statearr_33583_33608 = state_33577__$1;
(statearr_33583_33608[(1)] = (5));

} else {
var statearr_33584_33609 = state_33577__$1;
(statearr_33584_33609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (15))){
var inst_33567 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33585_33610 = state_33577__$1;
(statearr_33585_33610[(2)] = inst_33567);

(statearr_33585_33610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (13))){
var state_33577__$1 = state_33577;
var statearr_33586_33611 = state_33577__$1;
(statearr_33586_33611[(2)] = null);

(statearr_33586_33611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (6))){
var inst_33537 = (state_33577[(8)]);
var inst_33562 = inst_33537.length;
var inst_33563 = (inst_33562 > (0));
var state_33577__$1 = state_33577;
if(cljs.core.truth_(inst_33563)){
var statearr_33587_33612 = state_33577__$1;
(statearr_33587_33612[(1)] = (12));

} else {
var statearr_33588_33613 = state_33577__$1;
(statearr_33588_33613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (3))){
var inst_33575 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33577__$1,inst_33575);
} else {
if((state_val_33578 === (12))){
var inst_33537 = (state_33577[(8)]);
var inst_33565 = cljs.core.vec.call(null,inst_33537);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33577__$1,(15),out,inst_33565);
} else {
if((state_val_33578 === (2))){
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33577__$1,(4),ch);
} else {
if((state_val_33578 === (11))){
var inst_33545 = (state_33577[(10)]);
var inst_33541 = (state_33577[(9)]);
var inst_33555 = (state_33577[(2)]);
var inst_33556 = [];
var inst_33557 = inst_33556.push(inst_33541);
var inst_33537 = inst_33556;
var inst_33538 = inst_33545;
var state_33577__$1 = (function (){var statearr_33589 = state_33577;
(statearr_33589[(7)] = inst_33538);

(statearr_33589[(8)] = inst_33537);

(statearr_33589[(11)] = inst_33557);

(statearr_33589[(12)] = inst_33555);

return statearr_33589;
})();
var statearr_33590_33614 = state_33577__$1;
(statearr_33590_33614[(2)] = null);

(statearr_33590_33614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (9))){
var inst_33537 = (state_33577[(8)]);
var inst_33553 = cljs.core.vec.call(null,inst_33537);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33577__$1,(11),out,inst_33553);
} else {
if((state_val_33578 === (5))){
var inst_33545 = (state_33577[(10)]);
var inst_33538 = (state_33577[(7)]);
var inst_33541 = (state_33577[(9)]);
var inst_33545__$1 = f.call(null,inst_33541);
var inst_33546 = cljs.core._EQ_.call(null,inst_33545__$1,inst_33538);
var inst_33547 = cljs.core.keyword_identical_QMARK_.call(null,inst_33538,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33548 = ((inst_33546) || (inst_33547));
var state_33577__$1 = (function (){var statearr_33591 = state_33577;
(statearr_33591[(10)] = inst_33545__$1);

return statearr_33591;
})();
if(cljs.core.truth_(inst_33548)){
var statearr_33592_33615 = state_33577__$1;
(statearr_33592_33615[(1)] = (8));

} else {
var statearr_33593_33616 = state_33577__$1;
(statearr_33593_33616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (14))){
var inst_33570 = (state_33577[(2)]);
var inst_33571 = cljs.core.async.close_BANG_.call(null,out);
var state_33577__$1 = (function (){var statearr_33595 = state_33577;
(statearr_33595[(13)] = inst_33570);

return statearr_33595;
})();
var statearr_33596_33617 = state_33577__$1;
(statearr_33596_33617[(2)] = inst_33571);

(statearr_33596_33617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (10))){
var inst_33560 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33597_33618 = state_33577__$1;
(statearr_33597_33618[(2)] = inst_33560);

(statearr_33597_33618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (8))){
var inst_33545 = (state_33577[(10)]);
var inst_33541 = (state_33577[(9)]);
var inst_33537 = (state_33577[(8)]);
var inst_33550 = inst_33537.push(inst_33541);
var tmp33594 = inst_33537;
var inst_33537__$1 = tmp33594;
var inst_33538 = inst_33545;
var state_33577__$1 = (function (){var statearr_33598 = state_33577;
(statearr_33598[(7)] = inst_33538);

(statearr_33598[(14)] = inst_33550);

(statearr_33598[(8)] = inst_33537__$1);

return statearr_33598;
})();
var statearr_33599_33619 = state_33577__$1;
(statearr_33599_33619[(2)] = null);

(statearr_33599_33619[(1)] = (2));


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
});})(c__31702__auto___33605,out))
;
return ((function (switch__31607__auto__,c__31702__auto___33605,out){
return (function() {
var cljs$core$async$state_machine__31608__auto__ = null;
var cljs$core$async$state_machine__31608__auto____0 = (function (){
var statearr_33600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33600[(0)] = cljs$core$async$state_machine__31608__auto__);

(statearr_33600[(1)] = (1));

return statearr_33600;
});
var cljs$core$async$state_machine__31608__auto____1 = (function (state_33577){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_33577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e33601){if((e33601 instanceof Object)){
var ex__31611__auto__ = e33601;
var statearr_33602_33620 = state_33577;
(statearr_33602_33620[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33621 = state_33577;
state_33577 = G__33621;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
cljs$core$async$state_machine__31608__auto__ = function(state_33577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31608__auto____1.call(this,state_33577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31608__auto____0;
cljs$core$async$state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31608__auto____1;
return cljs$core$async$state_machine__31608__auto__;
})()
;})(switch__31607__auto__,c__31702__auto___33605,out))
})();
var state__31704__auto__ = (function (){var statearr_33603 = f__31703__auto__.call(null);
(statearr_33603[(6)] = c__31702__auto___33605);

return statearr_33603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(c__31702__auto___33605,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1601267805100
