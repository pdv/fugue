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
var G__14980 = arguments.length;
switch (G__14980) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14981 = (function (f,blockable,meta14982){
this.f = f;
this.blockable = blockable;
this.meta14982 = meta14982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14983,meta14982__$1){
var self__ = this;
var _14983__$1 = this;
return (new cljs.core.async.t_cljs$core$async14981(self__.f,self__.blockable,meta14982__$1));
});

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14983){
var self__ = this;
var _14983__$1 = this;
return self__.meta14982;
});

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14982","meta14982",-167126910,null)], null);
});

cljs.core.async.t_cljs$core$async14981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14981";

cljs.core.async.t_cljs$core$async14981.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14981");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14981.
 */
cljs.core.async.__GT_t_cljs$core$async14981 = (function cljs$core$async$__GT_t_cljs$core$async14981(f__$1,blockable__$1,meta14982){
return (new cljs.core.async.t_cljs$core$async14981(f__$1,blockable__$1,meta14982));
});

}

return (new cljs.core.async.t_cljs$core$async14981(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14987 = arguments.length;
switch (G__14987) {
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
var G__14990 = arguments.length;
switch (G__14990) {
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
var G__14993 = arguments.length;
switch (G__14993) {
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
var val_14995 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14995);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14995,ret){
return (function (){
return fn1.call(null,val_14995);
});})(val_14995,ret))
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
var G__14997 = arguments.length;
switch (G__14997) {
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
var n__4607__auto___14999 = n;
var x_15000 = (0);
while(true){
if((x_15000 < n__4607__auto___14999)){
(a[x_15000] = x_15000);

var G__15001 = (x_15000 + (1));
x_15000 = G__15001;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15002 = (function (flag,meta15003){
this.flag = flag;
this.meta15003 = meta15003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15004,meta15003__$1){
var self__ = this;
var _15004__$1 = this;
return (new cljs.core.async.t_cljs$core$async15002(self__.flag,meta15003__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15004){
var self__ = this;
var _15004__$1 = this;
return self__.meta15003;
});})(flag))
;

cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15002.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15003","meta15003",102252254,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15002";

cljs.core.async.t_cljs$core$async15002.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15002");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15002.
 */
cljs.core.async.__GT_t_cljs$core$async15002 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15002(flag__$1,meta15003){
return (new cljs.core.async.t_cljs$core$async15002(flag__$1,meta15003));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15002(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15005 = (function (flag,cb,meta15006){
this.flag = flag;
this.cb = cb;
this.meta15006 = meta15006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15007,meta15006__$1){
var self__ = this;
var _15007__$1 = this;
return (new cljs.core.async.t_cljs$core$async15005(self__.flag,self__.cb,meta15006__$1));
});

cljs.core.async.t_cljs$core$async15005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15007){
var self__ = this;
var _15007__$1 = this;
return self__.meta15006;
});

cljs.core.async.t_cljs$core$async15005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15006","meta15006",327571607,null)], null);
});

cljs.core.async.t_cljs$core$async15005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15005";

cljs.core.async.t_cljs$core$async15005.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15005");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15005.
 */
cljs.core.async.__GT_t_cljs$core$async15005 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15005(flag__$1,cb__$1,meta15006){
return (new cljs.core.async.t_cljs$core$async15005(flag__$1,cb__$1,meta15006));
});

}

return (new cljs.core.async.t_cljs$core$async15005(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15008_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15008_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15009_SHARP_,port], null));
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
var G__15010 = (i + (1));
i = G__15010;
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
var len__4730__auto___15016 = arguments.length;
var i__4731__auto___15017 = (0);
while(true){
if((i__4731__auto___15017 < len__4730__auto___15016)){
args__4736__auto__.push((arguments[i__4731__auto___15017]));

var G__15018 = (i__4731__auto___15017 + (1));
i__4731__auto___15017 = G__15018;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15013){
var map__15014 = p__15013;
var map__15014__$1 = (((((!((map__15014 == null))))?(((((map__15014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15014):map__15014);
var opts = map__15014__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15011){
var G__15012 = cljs.core.first.call(null,seq15011);
var seq15011__$1 = cljs.core.next.call(null,seq15011);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15012,seq15011__$1);
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
var G__15020 = arguments.length;
switch (G__15020) {
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
var c__14920__auto___15066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___15066){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___15066){
return (function (state_15044){
var state_val_15045 = (state_15044[(1)]);
if((state_val_15045 === (7))){
var inst_15040 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15046_15067 = state_15044__$1;
(statearr_15046_15067[(2)] = inst_15040);

(statearr_15046_15067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (1))){
var state_15044__$1 = state_15044;
var statearr_15047_15068 = state_15044__$1;
(statearr_15047_15068[(2)] = null);

(statearr_15047_15068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (4))){
var inst_15023 = (state_15044[(7)]);
var inst_15023__$1 = (state_15044[(2)]);
var inst_15024 = (inst_15023__$1 == null);
var state_15044__$1 = (function (){var statearr_15048 = state_15044;
(statearr_15048[(7)] = inst_15023__$1);

return statearr_15048;
})();
if(cljs.core.truth_(inst_15024)){
var statearr_15049_15069 = state_15044__$1;
(statearr_15049_15069[(1)] = (5));

} else {
var statearr_15050_15070 = state_15044__$1;
(statearr_15050_15070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (13))){
var state_15044__$1 = state_15044;
var statearr_15051_15071 = state_15044__$1;
(statearr_15051_15071[(2)] = null);

(statearr_15051_15071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (6))){
var inst_15023 = (state_15044[(7)]);
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15044__$1,(11),to,inst_15023);
} else {
if((state_val_15045 === (3))){
var inst_15042 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15044__$1,inst_15042);
} else {
if((state_val_15045 === (12))){
var state_15044__$1 = state_15044;
var statearr_15052_15072 = state_15044__$1;
(statearr_15052_15072[(2)] = null);

(statearr_15052_15072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (2))){
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15044__$1,(4),from);
} else {
if((state_val_15045 === (11))){
var inst_15033 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
if(cljs.core.truth_(inst_15033)){
var statearr_15053_15073 = state_15044__$1;
(statearr_15053_15073[(1)] = (12));

} else {
var statearr_15054_15074 = state_15044__$1;
(statearr_15054_15074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (9))){
var state_15044__$1 = state_15044;
var statearr_15055_15075 = state_15044__$1;
(statearr_15055_15075[(2)] = null);

(statearr_15055_15075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (5))){
var state_15044__$1 = state_15044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15056_15076 = state_15044__$1;
(statearr_15056_15076[(1)] = (8));

} else {
var statearr_15057_15077 = state_15044__$1;
(statearr_15057_15077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (14))){
var inst_15038 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15058_15078 = state_15044__$1;
(statearr_15058_15078[(2)] = inst_15038);

(statearr_15058_15078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (10))){
var inst_15030 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15059_15079 = state_15044__$1;
(statearr_15059_15079[(2)] = inst_15030);

(statearr_15059_15079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (8))){
var inst_15027 = cljs.core.async.close_BANG_.call(null,to);
var state_15044__$1 = state_15044;
var statearr_15060_15080 = state_15044__$1;
(statearr_15060_15080[(2)] = inst_15027);

(statearr_15060_15080[(1)] = (10));


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
});})(c__14920__auto___15066))
;
return ((function (switch__14825__auto__,c__14920__auto___15066){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_15061 = [null,null,null,null,null,null,null,null];
(statearr_15061[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_15061[(1)] = (1));

return statearr_15061;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_15044){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15062){if((e15062 instanceof Object)){
var ex__14829__auto__ = e15062;
var statearr_15063_15081 = state_15044;
(statearr_15063_15081[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15082 = state_15044;
state_15044 = G__15082;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_15044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_15044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___15066))
})();
var state__14922__auto__ = (function (){var statearr_15064 = f__14921__auto__.call(null);
(statearr_15064[(6)] = c__14920__auto___15066);

return statearr_15064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___15066))
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
return (function (p__15083){
var vec__15084 = p__15083;
var v = cljs.core.nth.call(null,vec__15084,(0),null);
var p = cljs.core.nth.call(null,vec__15084,(1),null);
var job = vec__15084;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14920__auto___15255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___15255,res,vec__15084,v,p,job,jobs,results){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___15255,res,vec__15084,v,p,job,jobs,results){
return (function (state_15091){
var state_val_15092 = (state_15091[(1)]);
if((state_val_15092 === (1))){
var state_15091__$1 = state_15091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15091__$1,(2),res,v);
} else {
if((state_val_15092 === (2))){
var inst_15088 = (state_15091[(2)]);
var inst_15089 = cljs.core.async.close_BANG_.call(null,res);
var state_15091__$1 = (function (){var statearr_15093 = state_15091;
(statearr_15093[(7)] = inst_15088);

return statearr_15093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15091__$1,inst_15089);
} else {
return null;
}
}
});})(c__14920__auto___15255,res,vec__15084,v,p,job,jobs,results))
;
return ((function (switch__14825__auto__,c__14920__auto___15255,res,vec__15084,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0 = (function (){
var statearr_15094 = [null,null,null,null,null,null,null,null];
(statearr_15094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__);

(statearr_15094[(1)] = (1));

return statearr_15094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1 = (function (state_15091){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15095){if((e15095 instanceof Object)){
var ex__14829__auto__ = e15095;
var statearr_15096_15256 = state_15091;
(statearr_15096_15256[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15257 = state_15091;
state_15091 = G__15257;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = function(state_15091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1.call(this,state_15091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___15255,res,vec__15084,v,p,job,jobs,results))
})();
var state__14922__auto__ = (function (){var statearr_15097 = f__14921__auto__.call(null);
(statearr_15097[(6)] = c__14920__auto___15255);

return statearr_15097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___15255,res,vec__15084,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15098){
var vec__15099 = p__15098;
var v = cljs.core.nth.call(null,vec__15099,(0),null);
var p = cljs.core.nth.call(null,vec__15099,(1),null);
var job = vec__15099;
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
var n__4607__auto___15258 = n;
var __15259 = (0);
while(true){
if((__15259 < n__4607__auto___15258)){
var G__15102_15260 = type;
var G__15102_15261__$1 = (((G__15102_15260 instanceof cljs.core.Keyword))?G__15102_15260.fqn:null);
switch (G__15102_15261__$1) {
case "compute":
var c__14920__auto___15263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15259,c__14920__auto___15263,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (__15259,c__14920__auto___15263,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async){
return (function (state_15115){
var state_val_15116 = (state_15115[(1)]);
if((state_val_15116 === (1))){
var state_15115__$1 = state_15115;
var statearr_15117_15264 = state_15115__$1;
(statearr_15117_15264[(2)] = null);

(statearr_15117_15264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (2))){
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15115__$1,(4),jobs);
} else {
if((state_val_15116 === (3))){
var inst_15113 = (state_15115[(2)]);
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15115__$1,inst_15113);
} else {
if((state_val_15116 === (4))){
var inst_15105 = (state_15115[(2)]);
var inst_15106 = process.call(null,inst_15105);
var state_15115__$1 = state_15115;
if(cljs.core.truth_(inst_15106)){
var statearr_15118_15265 = state_15115__$1;
(statearr_15118_15265[(1)] = (5));

} else {
var statearr_15119_15266 = state_15115__$1;
(statearr_15119_15266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (5))){
var state_15115__$1 = state_15115;
var statearr_15120_15267 = state_15115__$1;
(statearr_15120_15267[(2)] = null);

(statearr_15120_15267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (6))){
var state_15115__$1 = state_15115;
var statearr_15121_15268 = state_15115__$1;
(statearr_15121_15268[(2)] = null);

(statearr_15121_15268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (7))){
var inst_15111 = (state_15115[(2)]);
var state_15115__$1 = state_15115;
var statearr_15122_15269 = state_15115__$1;
(statearr_15122_15269[(2)] = inst_15111);

(statearr_15122_15269[(1)] = (3));


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
});})(__15259,c__14920__auto___15263,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async))
;
return ((function (__15259,switch__14825__auto__,c__14920__auto___15263,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0 = (function (){
var statearr_15123 = [null,null,null,null,null,null,null];
(statearr_15123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__);

(statearr_15123[(1)] = (1));

return statearr_15123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1 = (function (state_15115){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15124){if((e15124 instanceof Object)){
var ex__14829__auto__ = e15124;
var statearr_15125_15270 = state_15115;
(statearr_15125_15270[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15271 = state_15115;
state_15115 = G__15271;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = function(state_15115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1.call(this,state_15115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__;
})()
;})(__15259,switch__14825__auto__,c__14920__auto___15263,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async))
})();
var state__14922__auto__ = (function (){var statearr_15126 = f__14921__auto__.call(null);
(statearr_15126[(6)] = c__14920__auto___15263);

return statearr_15126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(__15259,c__14920__auto___15263,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async))
);


break;
case "async":
var c__14920__auto___15272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15259,c__14920__auto___15272,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (__15259,c__14920__auto___15272,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async){
return (function (state_15139){
var state_val_15140 = (state_15139[(1)]);
if((state_val_15140 === (1))){
var state_15139__$1 = state_15139;
var statearr_15141_15273 = state_15139__$1;
(statearr_15141_15273[(2)] = null);

(statearr_15141_15273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15140 === (2))){
var state_15139__$1 = state_15139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15139__$1,(4),jobs);
} else {
if((state_val_15140 === (3))){
var inst_15137 = (state_15139[(2)]);
var state_15139__$1 = state_15139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15139__$1,inst_15137);
} else {
if((state_val_15140 === (4))){
var inst_15129 = (state_15139[(2)]);
var inst_15130 = async.call(null,inst_15129);
var state_15139__$1 = state_15139;
if(cljs.core.truth_(inst_15130)){
var statearr_15142_15274 = state_15139__$1;
(statearr_15142_15274[(1)] = (5));

} else {
var statearr_15143_15275 = state_15139__$1;
(statearr_15143_15275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15140 === (5))){
var state_15139__$1 = state_15139;
var statearr_15144_15276 = state_15139__$1;
(statearr_15144_15276[(2)] = null);

(statearr_15144_15276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15140 === (6))){
var state_15139__$1 = state_15139;
var statearr_15145_15277 = state_15139__$1;
(statearr_15145_15277[(2)] = null);

(statearr_15145_15277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15140 === (7))){
var inst_15135 = (state_15139[(2)]);
var state_15139__$1 = state_15139;
var statearr_15146_15278 = state_15139__$1;
(statearr_15146_15278[(2)] = inst_15135);

(statearr_15146_15278[(1)] = (3));


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
});})(__15259,c__14920__auto___15272,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async))
;
return ((function (__15259,switch__14825__auto__,c__14920__auto___15272,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0 = (function (){
var statearr_15147 = [null,null,null,null,null,null,null];
(statearr_15147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__);

(statearr_15147[(1)] = (1));

return statearr_15147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1 = (function (state_15139){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15148){if((e15148 instanceof Object)){
var ex__14829__auto__ = e15148;
var statearr_15149_15279 = state_15139;
(statearr_15149_15279[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15280 = state_15139;
state_15139 = G__15280;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = function(state_15139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1.call(this,state_15139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__;
})()
;})(__15259,switch__14825__auto__,c__14920__auto___15272,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async))
})();
var state__14922__auto__ = (function (){var statearr_15150 = f__14921__auto__.call(null);
(statearr_15150[(6)] = c__14920__auto___15272);

return statearr_15150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(__15259,c__14920__auto___15272,G__15102_15260,G__15102_15261__$1,n__4607__auto___15258,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15102_15261__$1)].join('')));

}

var G__15281 = (__15259 + (1));
__15259 = G__15281;
continue;
} else {
}
break;
}

var c__14920__auto___15282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___15282,jobs,results,process,async){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___15282,jobs,results,process,async){
return (function (state_15172){
var state_val_15173 = (state_15172[(1)]);
if((state_val_15173 === (7))){
var inst_15168 = (state_15172[(2)]);
var state_15172__$1 = state_15172;
var statearr_15174_15283 = state_15172__$1;
(statearr_15174_15283[(2)] = inst_15168);

(statearr_15174_15283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15173 === (1))){
var state_15172__$1 = state_15172;
var statearr_15175_15284 = state_15172__$1;
(statearr_15175_15284[(2)] = null);

(statearr_15175_15284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15173 === (4))){
var inst_15153 = (state_15172[(7)]);
var inst_15153__$1 = (state_15172[(2)]);
var inst_15154 = (inst_15153__$1 == null);
var state_15172__$1 = (function (){var statearr_15176 = state_15172;
(statearr_15176[(7)] = inst_15153__$1);

return statearr_15176;
})();
if(cljs.core.truth_(inst_15154)){
var statearr_15177_15285 = state_15172__$1;
(statearr_15177_15285[(1)] = (5));

} else {
var statearr_15178_15286 = state_15172__$1;
(statearr_15178_15286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15173 === (6))){
var inst_15153 = (state_15172[(7)]);
var inst_15158 = (state_15172[(8)]);
var inst_15158__$1 = cljs.core.async.chan.call(null,(1));
var inst_15159 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15160 = [inst_15153,inst_15158__$1];
var inst_15161 = (new cljs.core.PersistentVector(null,2,(5),inst_15159,inst_15160,null));
var state_15172__$1 = (function (){var statearr_15179 = state_15172;
(statearr_15179[(8)] = inst_15158__$1);

return statearr_15179;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15172__$1,(8),jobs,inst_15161);
} else {
if((state_val_15173 === (3))){
var inst_15170 = (state_15172[(2)]);
var state_15172__$1 = state_15172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15172__$1,inst_15170);
} else {
if((state_val_15173 === (2))){
var state_15172__$1 = state_15172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15172__$1,(4),from);
} else {
if((state_val_15173 === (9))){
var inst_15165 = (state_15172[(2)]);
var state_15172__$1 = (function (){var statearr_15180 = state_15172;
(statearr_15180[(9)] = inst_15165);

return statearr_15180;
})();
var statearr_15181_15287 = state_15172__$1;
(statearr_15181_15287[(2)] = null);

(statearr_15181_15287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15173 === (5))){
var inst_15156 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15172__$1 = state_15172;
var statearr_15182_15288 = state_15172__$1;
(statearr_15182_15288[(2)] = inst_15156);

(statearr_15182_15288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15173 === (8))){
var inst_15158 = (state_15172[(8)]);
var inst_15163 = (state_15172[(2)]);
var state_15172__$1 = (function (){var statearr_15183 = state_15172;
(statearr_15183[(10)] = inst_15163);

return statearr_15183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15172__$1,(9),results,inst_15158);
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
});})(c__14920__auto___15282,jobs,results,process,async))
;
return ((function (switch__14825__auto__,c__14920__auto___15282,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0 = (function (){
var statearr_15184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__);

(statearr_15184[(1)] = (1));

return statearr_15184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1 = (function (state_15172){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15185){if((e15185 instanceof Object)){
var ex__14829__auto__ = e15185;
var statearr_15186_15289 = state_15172;
(statearr_15186_15289[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15290 = state_15172;
state_15172 = G__15290;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = function(state_15172){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1.call(this,state_15172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___15282,jobs,results,process,async))
})();
var state__14922__auto__ = (function (){var statearr_15187 = f__14921__auto__.call(null);
(statearr_15187[(6)] = c__14920__auto___15282);

return statearr_15187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___15282,jobs,results,process,async))
);


var c__14920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto__,jobs,results,process,async){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto__,jobs,results,process,async){
return (function (state_15225){
var state_val_15226 = (state_15225[(1)]);
if((state_val_15226 === (7))){
var inst_15221 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
var statearr_15227_15291 = state_15225__$1;
(statearr_15227_15291[(2)] = inst_15221);

(statearr_15227_15291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (20))){
var state_15225__$1 = state_15225;
var statearr_15228_15292 = state_15225__$1;
(statearr_15228_15292[(2)] = null);

(statearr_15228_15292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (1))){
var state_15225__$1 = state_15225;
var statearr_15229_15293 = state_15225__$1;
(statearr_15229_15293[(2)] = null);

(statearr_15229_15293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (4))){
var inst_15190 = (state_15225[(7)]);
var inst_15190__$1 = (state_15225[(2)]);
var inst_15191 = (inst_15190__$1 == null);
var state_15225__$1 = (function (){var statearr_15230 = state_15225;
(statearr_15230[(7)] = inst_15190__$1);

return statearr_15230;
})();
if(cljs.core.truth_(inst_15191)){
var statearr_15231_15294 = state_15225__$1;
(statearr_15231_15294[(1)] = (5));

} else {
var statearr_15232_15295 = state_15225__$1;
(statearr_15232_15295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (15))){
var inst_15203 = (state_15225[(8)]);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15225__$1,(18),to,inst_15203);
} else {
if((state_val_15226 === (21))){
var inst_15216 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
var statearr_15233_15296 = state_15225__$1;
(statearr_15233_15296[(2)] = inst_15216);

(statearr_15233_15296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (13))){
var inst_15218 = (state_15225[(2)]);
var state_15225__$1 = (function (){var statearr_15234 = state_15225;
(statearr_15234[(9)] = inst_15218);

return statearr_15234;
})();
var statearr_15235_15297 = state_15225__$1;
(statearr_15235_15297[(2)] = null);

(statearr_15235_15297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (6))){
var inst_15190 = (state_15225[(7)]);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15225__$1,(11),inst_15190);
} else {
if((state_val_15226 === (17))){
var inst_15211 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
if(cljs.core.truth_(inst_15211)){
var statearr_15236_15298 = state_15225__$1;
(statearr_15236_15298[(1)] = (19));

} else {
var statearr_15237_15299 = state_15225__$1;
(statearr_15237_15299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (3))){
var inst_15223 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15225__$1,inst_15223);
} else {
if((state_val_15226 === (12))){
var inst_15200 = (state_15225[(10)]);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15225__$1,(14),inst_15200);
} else {
if((state_val_15226 === (2))){
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15225__$1,(4),results);
} else {
if((state_val_15226 === (19))){
var state_15225__$1 = state_15225;
var statearr_15238_15300 = state_15225__$1;
(statearr_15238_15300[(2)] = null);

(statearr_15238_15300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (11))){
var inst_15200 = (state_15225[(2)]);
var state_15225__$1 = (function (){var statearr_15239 = state_15225;
(statearr_15239[(10)] = inst_15200);

return statearr_15239;
})();
var statearr_15240_15301 = state_15225__$1;
(statearr_15240_15301[(2)] = null);

(statearr_15240_15301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (9))){
var state_15225__$1 = state_15225;
var statearr_15241_15302 = state_15225__$1;
(statearr_15241_15302[(2)] = null);

(statearr_15241_15302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (5))){
var state_15225__$1 = state_15225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15242_15303 = state_15225__$1;
(statearr_15242_15303[(1)] = (8));

} else {
var statearr_15243_15304 = state_15225__$1;
(statearr_15243_15304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (14))){
var inst_15205 = (state_15225[(11)]);
var inst_15203 = (state_15225[(8)]);
var inst_15203__$1 = (state_15225[(2)]);
var inst_15204 = (inst_15203__$1 == null);
var inst_15205__$1 = cljs.core.not.call(null,inst_15204);
var state_15225__$1 = (function (){var statearr_15244 = state_15225;
(statearr_15244[(11)] = inst_15205__$1);

(statearr_15244[(8)] = inst_15203__$1);

return statearr_15244;
})();
if(inst_15205__$1){
var statearr_15245_15305 = state_15225__$1;
(statearr_15245_15305[(1)] = (15));

} else {
var statearr_15246_15306 = state_15225__$1;
(statearr_15246_15306[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (16))){
var inst_15205 = (state_15225[(11)]);
var state_15225__$1 = state_15225;
var statearr_15247_15307 = state_15225__$1;
(statearr_15247_15307[(2)] = inst_15205);

(statearr_15247_15307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (10))){
var inst_15197 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
var statearr_15248_15308 = state_15225__$1;
(statearr_15248_15308[(2)] = inst_15197);

(statearr_15248_15308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (18))){
var inst_15208 = (state_15225[(2)]);
var state_15225__$1 = state_15225;
var statearr_15249_15309 = state_15225__$1;
(statearr_15249_15309[(2)] = inst_15208);

(statearr_15249_15309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15226 === (8))){
var inst_15194 = cljs.core.async.close_BANG_.call(null,to);
var state_15225__$1 = state_15225;
var statearr_15250_15310 = state_15225__$1;
(statearr_15250_15310[(2)] = inst_15194);

(statearr_15250_15310[(1)] = (10));


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
});})(c__14920__auto__,jobs,results,process,async))
;
return ((function (switch__14825__auto__,c__14920__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0 = (function (){
var statearr_15251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__);

(statearr_15251[(1)] = (1));

return statearr_15251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1 = (function (state_15225){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15252){if((e15252 instanceof Object)){
var ex__14829__auto__ = e15252;
var statearr_15253_15311 = state_15225;
(statearr_15253_15311[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15312 = state_15225;
state_15225 = G__15312;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__ = function(state_15225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1.call(this,state_15225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto__,jobs,results,process,async))
})();
var state__14922__auto__ = (function (){var statearr_15254 = f__14921__auto__.call(null);
(statearr_15254[(6)] = c__14920__auto__);

return statearr_15254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto__,jobs,results,process,async))
);

return c__14920__auto__;
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
var G__15314 = arguments.length;
switch (G__15314) {
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
var G__15317 = arguments.length;
switch (G__15317) {
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
var G__15320 = arguments.length;
switch (G__15320) {
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
var c__14920__auto___15369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___15369,tc,fc){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___15369,tc,fc){
return (function (state_15346){
var state_val_15347 = (state_15346[(1)]);
if((state_val_15347 === (7))){
var inst_15342 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
var statearr_15348_15370 = state_15346__$1;
(statearr_15348_15370[(2)] = inst_15342);

(statearr_15348_15370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (1))){
var state_15346__$1 = state_15346;
var statearr_15349_15371 = state_15346__$1;
(statearr_15349_15371[(2)] = null);

(statearr_15349_15371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (4))){
var inst_15323 = (state_15346[(7)]);
var inst_15323__$1 = (state_15346[(2)]);
var inst_15324 = (inst_15323__$1 == null);
var state_15346__$1 = (function (){var statearr_15350 = state_15346;
(statearr_15350[(7)] = inst_15323__$1);

return statearr_15350;
})();
if(cljs.core.truth_(inst_15324)){
var statearr_15351_15372 = state_15346__$1;
(statearr_15351_15372[(1)] = (5));

} else {
var statearr_15352_15373 = state_15346__$1;
(statearr_15352_15373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (13))){
var state_15346__$1 = state_15346;
var statearr_15353_15374 = state_15346__$1;
(statearr_15353_15374[(2)] = null);

(statearr_15353_15374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (6))){
var inst_15323 = (state_15346[(7)]);
var inst_15329 = p.call(null,inst_15323);
var state_15346__$1 = state_15346;
if(cljs.core.truth_(inst_15329)){
var statearr_15354_15375 = state_15346__$1;
(statearr_15354_15375[(1)] = (9));

} else {
var statearr_15355_15376 = state_15346__$1;
(statearr_15355_15376[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (3))){
var inst_15344 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15346__$1,inst_15344);
} else {
if((state_val_15347 === (12))){
var state_15346__$1 = state_15346;
var statearr_15356_15377 = state_15346__$1;
(statearr_15356_15377[(2)] = null);

(statearr_15356_15377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (2))){
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15346__$1,(4),ch);
} else {
if((state_val_15347 === (11))){
var inst_15323 = (state_15346[(7)]);
var inst_15333 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15346__$1,(8),inst_15333,inst_15323);
} else {
if((state_val_15347 === (9))){
var state_15346__$1 = state_15346;
var statearr_15357_15378 = state_15346__$1;
(statearr_15357_15378[(2)] = tc);

(statearr_15357_15378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (5))){
var inst_15326 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15327 = cljs.core.async.close_BANG_.call(null,fc);
var state_15346__$1 = (function (){var statearr_15358 = state_15346;
(statearr_15358[(8)] = inst_15326);

return statearr_15358;
})();
var statearr_15359_15379 = state_15346__$1;
(statearr_15359_15379[(2)] = inst_15327);

(statearr_15359_15379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (14))){
var inst_15340 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
var statearr_15360_15380 = state_15346__$1;
(statearr_15360_15380[(2)] = inst_15340);

(statearr_15360_15380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (10))){
var state_15346__$1 = state_15346;
var statearr_15361_15381 = state_15346__$1;
(statearr_15361_15381[(2)] = fc);

(statearr_15361_15381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (8))){
var inst_15335 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
if(cljs.core.truth_(inst_15335)){
var statearr_15362_15382 = state_15346__$1;
(statearr_15362_15382[(1)] = (12));

} else {
var statearr_15363_15383 = state_15346__$1;
(statearr_15363_15383[(1)] = (13));

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
});})(c__14920__auto___15369,tc,fc))
;
return ((function (switch__14825__auto__,c__14920__auto___15369,tc,fc){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_15364 = [null,null,null,null,null,null,null,null,null];
(statearr_15364[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_15364[(1)] = (1));

return statearr_15364;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_15346){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15365){if((e15365 instanceof Object)){
var ex__14829__auto__ = e15365;
var statearr_15366_15384 = state_15346;
(statearr_15366_15384[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15385 = state_15346;
state_15346 = G__15385;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_15346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_15346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___15369,tc,fc))
})();
var state__14922__auto__ = (function (){var statearr_15367 = f__14921__auto__.call(null);
(statearr_15367[(6)] = c__14920__auto___15369);

return statearr_15367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___15369,tc,fc))
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
var c__14920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto__){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto__){
return (function (state_15406){
var state_val_15407 = (state_15406[(1)]);
if((state_val_15407 === (7))){
var inst_15402 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15408_15426 = state_15406__$1;
(statearr_15408_15426[(2)] = inst_15402);

(statearr_15408_15426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (1))){
var inst_15386 = init;
var state_15406__$1 = (function (){var statearr_15409 = state_15406;
(statearr_15409[(7)] = inst_15386);

return statearr_15409;
})();
var statearr_15410_15427 = state_15406__$1;
(statearr_15410_15427[(2)] = null);

(statearr_15410_15427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (4))){
var inst_15389 = (state_15406[(8)]);
var inst_15389__$1 = (state_15406[(2)]);
var inst_15390 = (inst_15389__$1 == null);
var state_15406__$1 = (function (){var statearr_15411 = state_15406;
(statearr_15411[(8)] = inst_15389__$1);

return statearr_15411;
})();
if(cljs.core.truth_(inst_15390)){
var statearr_15412_15428 = state_15406__$1;
(statearr_15412_15428[(1)] = (5));

} else {
var statearr_15413_15429 = state_15406__$1;
(statearr_15413_15429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (6))){
var inst_15386 = (state_15406[(7)]);
var inst_15389 = (state_15406[(8)]);
var inst_15393 = (state_15406[(9)]);
var inst_15393__$1 = f.call(null,inst_15386,inst_15389);
var inst_15394 = cljs.core.reduced_QMARK_.call(null,inst_15393__$1);
var state_15406__$1 = (function (){var statearr_15414 = state_15406;
(statearr_15414[(9)] = inst_15393__$1);

return statearr_15414;
})();
if(inst_15394){
var statearr_15415_15430 = state_15406__$1;
(statearr_15415_15430[(1)] = (8));

} else {
var statearr_15416_15431 = state_15406__$1;
(statearr_15416_15431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (3))){
var inst_15404 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15406__$1,inst_15404);
} else {
if((state_val_15407 === (2))){
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15406__$1,(4),ch);
} else {
if((state_val_15407 === (9))){
var inst_15393 = (state_15406[(9)]);
var inst_15386 = inst_15393;
var state_15406__$1 = (function (){var statearr_15417 = state_15406;
(statearr_15417[(7)] = inst_15386);

return statearr_15417;
})();
var statearr_15418_15432 = state_15406__$1;
(statearr_15418_15432[(2)] = null);

(statearr_15418_15432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (5))){
var inst_15386 = (state_15406[(7)]);
var state_15406__$1 = state_15406;
var statearr_15419_15433 = state_15406__$1;
(statearr_15419_15433[(2)] = inst_15386);

(statearr_15419_15433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (10))){
var inst_15400 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15420_15434 = state_15406__$1;
(statearr_15420_15434[(2)] = inst_15400);

(statearr_15420_15434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (8))){
var inst_15393 = (state_15406[(9)]);
var inst_15396 = cljs.core.deref.call(null,inst_15393);
var state_15406__$1 = state_15406;
var statearr_15421_15435 = state_15406__$1;
(statearr_15421_15435[(2)] = inst_15396);

(statearr_15421_15435[(1)] = (10));


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
});})(c__14920__auto__))
;
return ((function (switch__14825__auto__,c__14920__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14826__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14826__auto____0 = (function (){
var statearr_15422 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15422[(0)] = cljs$core$async$reduce_$_state_machine__14826__auto__);

(statearr_15422[(1)] = (1));

return statearr_15422;
});
var cljs$core$async$reduce_$_state_machine__14826__auto____1 = (function (state_15406){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15423){if((e15423 instanceof Object)){
var ex__14829__auto__ = e15423;
var statearr_15424_15436 = state_15406;
(statearr_15424_15436[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15437 = state_15406;
state_15406 = G__15437;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14826__auto__ = function(state_15406){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14826__auto____1.call(this,state_15406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14826__auto____0;
cljs$core$async$reduce_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14826__auto____1;
return cljs$core$async$reduce_$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto__))
})();
var state__14922__auto__ = (function (){var statearr_15425 = f__14921__auto__.call(null);
(statearr_15425[(6)] = c__14920__auto__);

return statearr_15425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto__))
);

return c__14920__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto__,f__$1){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto__,f__$1){
return (function (state_15443){
var state_val_15444 = (state_15443[(1)]);
if((state_val_15444 === (1))){
var inst_15438 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15443__$1 = state_15443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15443__$1,(2),inst_15438);
} else {
if((state_val_15444 === (2))){
var inst_15440 = (state_15443[(2)]);
var inst_15441 = f__$1.call(null,inst_15440);
var state_15443__$1 = state_15443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15443__$1,inst_15441);
} else {
return null;
}
}
});})(c__14920__auto__,f__$1))
;
return ((function (switch__14825__auto__,c__14920__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14826__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14826__auto____0 = (function (){
var statearr_15445 = [null,null,null,null,null,null,null];
(statearr_15445[(0)] = cljs$core$async$transduce_$_state_machine__14826__auto__);

(statearr_15445[(1)] = (1));

return statearr_15445;
});
var cljs$core$async$transduce_$_state_machine__14826__auto____1 = (function (state_15443){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15446){if((e15446 instanceof Object)){
var ex__14829__auto__ = e15446;
var statearr_15447_15449 = state_15443;
(statearr_15447_15449[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15450 = state_15443;
state_15443 = G__15450;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14826__auto__ = function(state_15443){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14826__auto____1.call(this,state_15443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14826__auto____0;
cljs$core$async$transduce_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14826__auto____1;
return cljs$core$async$transduce_$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto__,f__$1))
})();
var state__14922__auto__ = (function (){var statearr_15448 = f__14921__auto__.call(null);
(statearr_15448[(6)] = c__14920__auto__);

return statearr_15448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto__,f__$1))
);

return c__14920__auto__;
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
var G__15452 = arguments.length;
switch (G__15452) {
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
var c__14920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto__){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto__){
return (function (state_15477){
var state_val_15478 = (state_15477[(1)]);
if((state_val_15478 === (7))){
var inst_15459 = (state_15477[(2)]);
var state_15477__$1 = state_15477;
var statearr_15479_15500 = state_15477__$1;
(statearr_15479_15500[(2)] = inst_15459);

(statearr_15479_15500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (1))){
var inst_15453 = cljs.core.seq.call(null,coll);
var inst_15454 = inst_15453;
var state_15477__$1 = (function (){var statearr_15480 = state_15477;
(statearr_15480[(7)] = inst_15454);

return statearr_15480;
})();
var statearr_15481_15501 = state_15477__$1;
(statearr_15481_15501[(2)] = null);

(statearr_15481_15501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (4))){
var inst_15454 = (state_15477[(7)]);
var inst_15457 = cljs.core.first.call(null,inst_15454);
var state_15477__$1 = state_15477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15477__$1,(7),ch,inst_15457);
} else {
if((state_val_15478 === (13))){
var inst_15471 = (state_15477[(2)]);
var state_15477__$1 = state_15477;
var statearr_15482_15502 = state_15477__$1;
(statearr_15482_15502[(2)] = inst_15471);

(statearr_15482_15502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (6))){
var inst_15462 = (state_15477[(2)]);
var state_15477__$1 = state_15477;
if(cljs.core.truth_(inst_15462)){
var statearr_15483_15503 = state_15477__$1;
(statearr_15483_15503[(1)] = (8));

} else {
var statearr_15484_15504 = state_15477__$1;
(statearr_15484_15504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (3))){
var inst_15475 = (state_15477[(2)]);
var state_15477__$1 = state_15477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15477__$1,inst_15475);
} else {
if((state_val_15478 === (12))){
var state_15477__$1 = state_15477;
var statearr_15485_15505 = state_15477__$1;
(statearr_15485_15505[(2)] = null);

(statearr_15485_15505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (2))){
var inst_15454 = (state_15477[(7)]);
var state_15477__$1 = state_15477;
if(cljs.core.truth_(inst_15454)){
var statearr_15486_15506 = state_15477__$1;
(statearr_15486_15506[(1)] = (4));

} else {
var statearr_15487_15507 = state_15477__$1;
(statearr_15487_15507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (11))){
var inst_15468 = cljs.core.async.close_BANG_.call(null,ch);
var state_15477__$1 = state_15477;
var statearr_15488_15508 = state_15477__$1;
(statearr_15488_15508[(2)] = inst_15468);

(statearr_15488_15508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (9))){
var state_15477__$1 = state_15477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15489_15509 = state_15477__$1;
(statearr_15489_15509[(1)] = (11));

} else {
var statearr_15490_15510 = state_15477__$1;
(statearr_15490_15510[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (5))){
var inst_15454 = (state_15477[(7)]);
var state_15477__$1 = state_15477;
var statearr_15491_15511 = state_15477__$1;
(statearr_15491_15511[(2)] = inst_15454);

(statearr_15491_15511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (10))){
var inst_15473 = (state_15477[(2)]);
var state_15477__$1 = state_15477;
var statearr_15492_15512 = state_15477__$1;
(statearr_15492_15512[(2)] = inst_15473);

(statearr_15492_15512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15478 === (8))){
var inst_15454 = (state_15477[(7)]);
var inst_15464 = cljs.core.next.call(null,inst_15454);
var inst_15454__$1 = inst_15464;
var state_15477__$1 = (function (){var statearr_15493 = state_15477;
(statearr_15493[(7)] = inst_15454__$1);

return statearr_15493;
})();
var statearr_15494_15513 = state_15477__$1;
(statearr_15494_15513[(2)] = null);

(statearr_15494_15513[(1)] = (2));


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
});})(c__14920__auto__))
;
return ((function (switch__14825__auto__,c__14920__auto__){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_15495 = [null,null,null,null,null,null,null,null];
(statearr_15495[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_15495[(1)] = (1));

return statearr_15495;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_15477){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15496){if((e15496 instanceof Object)){
var ex__14829__auto__ = e15496;
var statearr_15497_15514 = state_15477;
(statearr_15497_15514[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15515 = state_15477;
state_15477 = G__15515;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_15477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_15477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto__))
})();
var state__14922__auto__ = (function (){var statearr_15498 = f__14921__auto__.call(null);
(statearr_15498[(6)] = c__14920__auto__);

return statearr_15498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto__))
);

return c__14920__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15516 = (function (ch,cs,meta15517){
this.ch = ch;
this.cs = cs;
this.meta15517 = meta15517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15518,meta15517__$1){
var self__ = this;
var _15518__$1 = this;
return (new cljs.core.async.t_cljs$core$async15516(self__.ch,self__.cs,meta15517__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15518){
var self__ = this;
var _15518__$1 = this;
return self__.meta15517;
});})(cs))
;

cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15516.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15517","meta15517",1399869240,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15516";

cljs.core.async.t_cljs$core$async15516.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15516");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15516.
 */
cljs.core.async.__GT_t_cljs$core$async15516 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15516(ch__$1,cs__$1,meta15517){
return (new cljs.core.async.t_cljs$core$async15516(ch__$1,cs__$1,meta15517));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15516(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14920__auto___15738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___15738,cs,m,dchan,dctr,done){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___15738,cs,m,dchan,dctr,done){
return (function (state_15653){
var state_val_15654 = (state_15653[(1)]);
if((state_val_15654 === (7))){
var inst_15649 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15655_15739 = state_15653__$1;
(statearr_15655_15739[(2)] = inst_15649);

(statearr_15655_15739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (20))){
var inst_15552 = (state_15653[(7)]);
var inst_15564 = cljs.core.first.call(null,inst_15552);
var inst_15565 = cljs.core.nth.call(null,inst_15564,(0),null);
var inst_15566 = cljs.core.nth.call(null,inst_15564,(1),null);
var state_15653__$1 = (function (){var statearr_15656 = state_15653;
(statearr_15656[(8)] = inst_15565);

return statearr_15656;
})();
if(cljs.core.truth_(inst_15566)){
var statearr_15657_15740 = state_15653__$1;
(statearr_15657_15740[(1)] = (22));

} else {
var statearr_15658_15741 = state_15653__$1;
(statearr_15658_15741[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (27))){
var inst_15594 = (state_15653[(9)]);
var inst_15596 = (state_15653[(10)]);
var inst_15521 = (state_15653[(11)]);
var inst_15601 = (state_15653[(12)]);
var inst_15601__$1 = cljs.core._nth.call(null,inst_15594,inst_15596);
var inst_15602 = cljs.core.async.put_BANG_.call(null,inst_15601__$1,inst_15521,done);
var state_15653__$1 = (function (){var statearr_15659 = state_15653;
(statearr_15659[(12)] = inst_15601__$1);

return statearr_15659;
})();
if(cljs.core.truth_(inst_15602)){
var statearr_15660_15742 = state_15653__$1;
(statearr_15660_15742[(1)] = (30));

} else {
var statearr_15661_15743 = state_15653__$1;
(statearr_15661_15743[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (1))){
var state_15653__$1 = state_15653;
var statearr_15662_15744 = state_15653__$1;
(statearr_15662_15744[(2)] = null);

(statearr_15662_15744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (24))){
var inst_15552 = (state_15653[(7)]);
var inst_15571 = (state_15653[(2)]);
var inst_15572 = cljs.core.next.call(null,inst_15552);
var inst_15530 = inst_15572;
var inst_15531 = null;
var inst_15532 = (0);
var inst_15533 = (0);
var state_15653__$1 = (function (){var statearr_15663 = state_15653;
(statearr_15663[(13)] = inst_15532);

(statearr_15663[(14)] = inst_15531);

(statearr_15663[(15)] = inst_15530);

(statearr_15663[(16)] = inst_15571);

(statearr_15663[(17)] = inst_15533);

return statearr_15663;
})();
var statearr_15664_15745 = state_15653__$1;
(statearr_15664_15745[(2)] = null);

(statearr_15664_15745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (39))){
var state_15653__$1 = state_15653;
var statearr_15668_15746 = state_15653__$1;
(statearr_15668_15746[(2)] = null);

(statearr_15668_15746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (4))){
var inst_15521 = (state_15653[(11)]);
var inst_15521__$1 = (state_15653[(2)]);
var inst_15522 = (inst_15521__$1 == null);
var state_15653__$1 = (function (){var statearr_15669 = state_15653;
(statearr_15669[(11)] = inst_15521__$1);

return statearr_15669;
})();
if(cljs.core.truth_(inst_15522)){
var statearr_15670_15747 = state_15653__$1;
(statearr_15670_15747[(1)] = (5));

} else {
var statearr_15671_15748 = state_15653__$1;
(statearr_15671_15748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (15))){
var inst_15532 = (state_15653[(13)]);
var inst_15531 = (state_15653[(14)]);
var inst_15530 = (state_15653[(15)]);
var inst_15533 = (state_15653[(17)]);
var inst_15548 = (state_15653[(2)]);
var inst_15549 = (inst_15533 + (1));
var tmp15665 = inst_15532;
var tmp15666 = inst_15531;
var tmp15667 = inst_15530;
var inst_15530__$1 = tmp15667;
var inst_15531__$1 = tmp15666;
var inst_15532__$1 = tmp15665;
var inst_15533__$1 = inst_15549;
var state_15653__$1 = (function (){var statearr_15672 = state_15653;
(statearr_15672[(13)] = inst_15532__$1);

(statearr_15672[(14)] = inst_15531__$1);

(statearr_15672[(15)] = inst_15530__$1);

(statearr_15672[(17)] = inst_15533__$1);

(statearr_15672[(18)] = inst_15548);

return statearr_15672;
})();
var statearr_15673_15749 = state_15653__$1;
(statearr_15673_15749[(2)] = null);

(statearr_15673_15749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (21))){
var inst_15575 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15677_15750 = state_15653__$1;
(statearr_15677_15750[(2)] = inst_15575);

(statearr_15677_15750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (31))){
var inst_15601 = (state_15653[(12)]);
var inst_15605 = done.call(null,null);
var inst_15606 = cljs.core.async.untap_STAR_.call(null,m,inst_15601);
var state_15653__$1 = (function (){var statearr_15678 = state_15653;
(statearr_15678[(19)] = inst_15605);

return statearr_15678;
})();
var statearr_15679_15751 = state_15653__$1;
(statearr_15679_15751[(2)] = inst_15606);

(statearr_15679_15751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (32))){
var inst_15594 = (state_15653[(9)]);
var inst_15593 = (state_15653[(20)]);
var inst_15595 = (state_15653[(21)]);
var inst_15596 = (state_15653[(10)]);
var inst_15608 = (state_15653[(2)]);
var inst_15609 = (inst_15596 + (1));
var tmp15674 = inst_15594;
var tmp15675 = inst_15593;
var tmp15676 = inst_15595;
var inst_15593__$1 = tmp15675;
var inst_15594__$1 = tmp15674;
var inst_15595__$1 = tmp15676;
var inst_15596__$1 = inst_15609;
var state_15653__$1 = (function (){var statearr_15680 = state_15653;
(statearr_15680[(9)] = inst_15594__$1);

(statearr_15680[(20)] = inst_15593__$1);

(statearr_15680[(21)] = inst_15595__$1);

(statearr_15680[(10)] = inst_15596__$1);

(statearr_15680[(22)] = inst_15608);

return statearr_15680;
})();
var statearr_15681_15752 = state_15653__$1;
(statearr_15681_15752[(2)] = null);

(statearr_15681_15752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (40))){
var inst_15621 = (state_15653[(23)]);
var inst_15625 = done.call(null,null);
var inst_15626 = cljs.core.async.untap_STAR_.call(null,m,inst_15621);
var state_15653__$1 = (function (){var statearr_15682 = state_15653;
(statearr_15682[(24)] = inst_15625);

return statearr_15682;
})();
var statearr_15683_15753 = state_15653__$1;
(statearr_15683_15753[(2)] = inst_15626);

(statearr_15683_15753[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (33))){
var inst_15612 = (state_15653[(25)]);
var inst_15614 = cljs.core.chunked_seq_QMARK_.call(null,inst_15612);
var state_15653__$1 = state_15653;
if(inst_15614){
var statearr_15684_15754 = state_15653__$1;
(statearr_15684_15754[(1)] = (36));

} else {
var statearr_15685_15755 = state_15653__$1;
(statearr_15685_15755[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (13))){
var inst_15542 = (state_15653[(26)]);
var inst_15545 = cljs.core.async.close_BANG_.call(null,inst_15542);
var state_15653__$1 = state_15653;
var statearr_15686_15756 = state_15653__$1;
(statearr_15686_15756[(2)] = inst_15545);

(statearr_15686_15756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (22))){
var inst_15565 = (state_15653[(8)]);
var inst_15568 = cljs.core.async.close_BANG_.call(null,inst_15565);
var state_15653__$1 = state_15653;
var statearr_15687_15757 = state_15653__$1;
(statearr_15687_15757[(2)] = inst_15568);

(statearr_15687_15757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (36))){
var inst_15612 = (state_15653[(25)]);
var inst_15616 = cljs.core.chunk_first.call(null,inst_15612);
var inst_15617 = cljs.core.chunk_rest.call(null,inst_15612);
var inst_15618 = cljs.core.count.call(null,inst_15616);
var inst_15593 = inst_15617;
var inst_15594 = inst_15616;
var inst_15595 = inst_15618;
var inst_15596 = (0);
var state_15653__$1 = (function (){var statearr_15688 = state_15653;
(statearr_15688[(9)] = inst_15594);

(statearr_15688[(20)] = inst_15593);

(statearr_15688[(21)] = inst_15595);

(statearr_15688[(10)] = inst_15596);

return statearr_15688;
})();
var statearr_15689_15758 = state_15653__$1;
(statearr_15689_15758[(2)] = null);

(statearr_15689_15758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (41))){
var inst_15612 = (state_15653[(25)]);
var inst_15628 = (state_15653[(2)]);
var inst_15629 = cljs.core.next.call(null,inst_15612);
var inst_15593 = inst_15629;
var inst_15594 = null;
var inst_15595 = (0);
var inst_15596 = (0);
var state_15653__$1 = (function (){var statearr_15690 = state_15653;
(statearr_15690[(9)] = inst_15594);

(statearr_15690[(27)] = inst_15628);

(statearr_15690[(20)] = inst_15593);

(statearr_15690[(21)] = inst_15595);

(statearr_15690[(10)] = inst_15596);

return statearr_15690;
})();
var statearr_15691_15759 = state_15653__$1;
(statearr_15691_15759[(2)] = null);

(statearr_15691_15759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (43))){
var state_15653__$1 = state_15653;
var statearr_15692_15760 = state_15653__$1;
(statearr_15692_15760[(2)] = null);

(statearr_15692_15760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (29))){
var inst_15637 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15693_15761 = state_15653__$1;
(statearr_15693_15761[(2)] = inst_15637);

(statearr_15693_15761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (44))){
var inst_15646 = (state_15653[(2)]);
var state_15653__$1 = (function (){var statearr_15694 = state_15653;
(statearr_15694[(28)] = inst_15646);

return statearr_15694;
})();
var statearr_15695_15762 = state_15653__$1;
(statearr_15695_15762[(2)] = null);

(statearr_15695_15762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (6))){
var inst_15585 = (state_15653[(29)]);
var inst_15584 = cljs.core.deref.call(null,cs);
var inst_15585__$1 = cljs.core.keys.call(null,inst_15584);
var inst_15586 = cljs.core.count.call(null,inst_15585__$1);
var inst_15587 = cljs.core.reset_BANG_.call(null,dctr,inst_15586);
var inst_15592 = cljs.core.seq.call(null,inst_15585__$1);
var inst_15593 = inst_15592;
var inst_15594 = null;
var inst_15595 = (0);
var inst_15596 = (0);
var state_15653__$1 = (function (){var statearr_15696 = state_15653;
(statearr_15696[(9)] = inst_15594);

(statearr_15696[(29)] = inst_15585__$1);

(statearr_15696[(20)] = inst_15593);

(statearr_15696[(30)] = inst_15587);

(statearr_15696[(21)] = inst_15595);

(statearr_15696[(10)] = inst_15596);

return statearr_15696;
})();
var statearr_15697_15763 = state_15653__$1;
(statearr_15697_15763[(2)] = null);

(statearr_15697_15763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (28))){
var inst_15593 = (state_15653[(20)]);
var inst_15612 = (state_15653[(25)]);
var inst_15612__$1 = cljs.core.seq.call(null,inst_15593);
var state_15653__$1 = (function (){var statearr_15698 = state_15653;
(statearr_15698[(25)] = inst_15612__$1);

return statearr_15698;
})();
if(inst_15612__$1){
var statearr_15699_15764 = state_15653__$1;
(statearr_15699_15764[(1)] = (33));

} else {
var statearr_15700_15765 = state_15653__$1;
(statearr_15700_15765[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (25))){
var inst_15595 = (state_15653[(21)]);
var inst_15596 = (state_15653[(10)]);
var inst_15598 = (inst_15596 < inst_15595);
var inst_15599 = inst_15598;
var state_15653__$1 = state_15653;
if(cljs.core.truth_(inst_15599)){
var statearr_15701_15766 = state_15653__$1;
(statearr_15701_15766[(1)] = (27));

} else {
var statearr_15702_15767 = state_15653__$1;
(statearr_15702_15767[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (34))){
var state_15653__$1 = state_15653;
var statearr_15703_15768 = state_15653__$1;
(statearr_15703_15768[(2)] = null);

(statearr_15703_15768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (17))){
var state_15653__$1 = state_15653;
var statearr_15704_15769 = state_15653__$1;
(statearr_15704_15769[(2)] = null);

(statearr_15704_15769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (3))){
var inst_15651 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15653__$1,inst_15651);
} else {
if((state_val_15654 === (12))){
var inst_15580 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15705_15770 = state_15653__$1;
(statearr_15705_15770[(2)] = inst_15580);

(statearr_15705_15770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (2))){
var state_15653__$1 = state_15653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15653__$1,(4),ch);
} else {
if((state_val_15654 === (23))){
var state_15653__$1 = state_15653;
var statearr_15706_15771 = state_15653__$1;
(statearr_15706_15771[(2)] = null);

(statearr_15706_15771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (35))){
var inst_15635 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15707_15772 = state_15653__$1;
(statearr_15707_15772[(2)] = inst_15635);

(statearr_15707_15772[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (19))){
var inst_15552 = (state_15653[(7)]);
var inst_15556 = cljs.core.chunk_first.call(null,inst_15552);
var inst_15557 = cljs.core.chunk_rest.call(null,inst_15552);
var inst_15558 = cljs.core.count.call(null,inst_15556);
var inst_15530 = inst_15557;
var inst_15531 = inst_15556;
var inst_15532 = inst_15558;
var inst_15533 = (0);
var state_15653__$1 = (function (){var statearr_15708 = state_15653;
(statearr_15708[(13)] = inst_15532);

(statearr_15708[(14)] = inst_15531);

(statearr_15708[(15)] = inst_15530);

(statearr_15708[(17)] = inst_15533);

return statearr_15708;
})();
var statearr_15709_15773 = state_15653__$1;
(statearr_15709_15773[(2)] = null);

(statearr_15709_15773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (11))){
var inst_15530 = (state_15653[(15)]);
var inst_15552 = (state_15653[(7)]);
var inst_15552__$1 = cljs.core.seq.call(null,inst_15530);
var state_15653__$1 = (function (){var statearr_15710 = state_15653;
(statearr_15710[(7)] = inst_15552__$1);

return statearr_15710;
})();
if(inst_15552__$1){
var statearr_15711_15774 = state_15653__$1;
(statearr_15711_15774[(1)] = (16));

} else {
var statearr_15712_15775 = state_15653__$1;
(statearr_15712_15775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (9))){
var inst_15582 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15713_15776 = state_15653__$1;
(statearr_15713_15776[(2)] = inst_15582);

(statearr_15713_15776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (5))){
var inst_15528 = cljs.core.deref.call(null,cs);
var inst_15529 = cljs.core.seq.call(null,inst_15528);
var inst_15530 = inst_15529;
var inst_15531 = null;
var inst_15532 = (0);
var inst_15533 = (0);
var state_15653__$1 = (function (){var statearr_15714 = state_15653;
(statearr_15714[(13)] = inst_15532);

(statearr_15714[(14)] = inst_15531);

(statearr_15714[(15)] = inst_15530);

(statearr_15714[(17)] = inst_15533);

return statearr_15714;
})();
var statearr_15715_15777 = state_15653__$1;
(statearr_15715_15777[(2)] = null);

(statearr_15715_15777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (14))){
var state_15653__$1 = state_15653;
var statearr_15716_15778 = state_15653__$1;
(statearr_15716_15778[(2)] = null);

(statearr_15716_15778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (45))){
var inst_15643 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15717_15779 = state_15653__$1;
(statearr_15717_15779[(2)] = inst_15643);

(statearr_15717_15779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (26))){
var inst_15585 = (state_15653[(29)]);
var inst_15639 = (state_15653[(2)]);
var inst_15640 = cljs.core.seq.call(null,inst_15585);
var state_15653__$1 = (function (){var statearr_15718 = state_15653;
(statearr_15718[(31)] = inst_15639);

return statearr_15718;
})();
if(inst_15640){
var statearr_15719_15780 = state_15653__$1;
(statearr_15719_15780[(1)] = (42));

} else {
var statearr_15720_15781 = state_15653__$1;
(statearr_15720_15781[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (16))){
var inst_15552 = (state_15653[(7)]);
var inst_15554 = cljs.core.chunked_seq_QMARK_.call(null,inst_15552);
var state_15653__$1 = state_15653;
if(inst_15554){
var statearr_15721_15782 = state_15653__$1;
(statearr_15721_15782[(1)] = (19));

} else {
var statearr_15722_15783 = state_15653__$1;
(statearr_15722_15783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (38))){
var inst_15632 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15723_15784 = state_15653__$1;
(statearr_15723_15784[(2)] = inst_15632);

(statearr_15723_15784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (30))){
var state_15653__$1 = state_15653;
var statearr_15724_15785 = state_15653__$1;
(statearr_15724_15785[(2)] = null);

(statearr_15724_15785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (10))){
var inst_15531 = (state_15653[(14)]);
var inst_15533 = (state_15653[(17)]);
var inst_15541 = cljs.core._nth.call(null,inst_15531,inst_15533);
var inst_15542 = cljs.core.nth.call(null,inst_15541,(0),null);
var inst_15543 = cljs.core.nth.call(null,inst_15541,(1),null);
var state_15653__$1 = (function (){var statearr_15725 = state_15653;
(statearr_15725[(26)] = inst_15542);

return statearr_15725;
})();
if(cljs.core.truth_(inst_15543)){
var statearr_15726_15786 = state_15653__$1;
(statearr_15726_15786[(1)] = (13));

} else {
var statearr_15727_15787 = state_15653__$1;
(statearr_15727_15787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (18))){
var inst_15578 = (state_15653[(2)]);
var state_15653__$1 = state_15653;
var statearr_15728_15788 = state_15653__$1;
(statearr_15728_15788[(2)] = inst_15578);

(statearr_15728_15788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (42))){
var state_15653__$1 = state_15653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15653__$1,(45),dchan);
} else {
if((state_val_15654 === (37))){
var inst_15621 = (state_15653[(23)]);
var inst_15612 = (state_15653[(25)]);
var inst_15521 = (state_15653[(11)]);
var inst_15621__$1 = cljs.core.first.call(null,inst_15612);
var inst_15622 = cljs.core.async.put_BANG_.call(null,inst_15621__$1,inst_15521,done);
var state_15653__$1 = (function (){var statearr_15729 = state_15653;
(statearr_15729[(23)] = inst_15621__$1);

return statearr_15729;
})();
if(cljs.core.truth_(inst_15622)){
var statearr_15730_15789 = state_15653__$1;
(statearr_15730_15789[(1)] = (39));

} else {
var statearr_15731_15790 = state_15653__$1;
(statearr_15731_15790[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (8))){
var inst_15532 = (state_15653[(13)]);
var inst_15533 = (state_15653[(17)]);
var inst_15535 = (inst_15533 < inst_15532);
var inst_15536 = inst_15535;
var state_15653__$1 = state_15653;
if(cljs.core.truth_(inst_15536)){
var statearr_15732_15791 = state_15653__$1;
(statearr_15732_15791[(1)] = (10));

} else {
var statearr_15733_15792 = state_15653__$1;
(statearr_15733_15792[(1)] = (11));

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
});})(c__14920__auto___15738,cs,m,dchan,dctr,done))
;
return ((function (switch__14825__auto__,c__14920__auto___15738,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14826__auto__ = null;
var cljs$core$async$mult_$_state_machine__14826__auto____0 = (function (){
var statearr_15734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15734[(0)] = cljs$core$async$mult_$_state_machine__14826__auto__);

(statearr_15734[(1)] = (1));

return statearr_15734;
});
var cljs$core$async$mult_$_state_machine__14826__auto____1 = (function (state_15653){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15735){if((e15735 instanceof Object)){
var ex__14829__auto__ = e15735;
var statearr_15736_15793 = state_15653;
(statearr_15736_15793[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15794 = state_15653;
state_15653 = G__15794;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14826__auto__ = function(state_15653){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14826__auto____1.call(this,state_15653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14826__auto____0;
cljs$core$async$mult_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14826__auto____1;
return cljs$core$async$mult_$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___15738,cs,m,dchan,dctr,done))
})();
var state__14922__auto__ = (function (){var statearr_15737 = f__14921__auto__.call(null);
(statearr_15737[(6)] = c__14920__auto___15738);

return statearr_15737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___15738,cs,m,dchan,dctr,done))
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
var G__15796 = arguments.length;
switch (G__15796) {
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
var len__4730__auto___15808 = arguments.length;
var i__4731__auto___15809 = (0);
while(true){
if((i__4731__auto___15809 < len__4730__auto___15808)){
args__4736__auto__.push((arguments[i__4731__auto___15809]));

var G__15810 = (i__4731__auto___15809 + (1));
i__4731__auto___15809 = G__15810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15802){
var map__15803 = p__15802;
var map__15803__$1 = (((((!((map__15803 == null))))?(((((map__15803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15803):map__15803);
var opts = map__15803__$1;
var statearr_15805_15811 = state;
(statearr_15805_15811[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__15803,map__15803__$1,opts){
return (function (val){
var statearr_15806_15812 = state;
(statearr_15806_15812[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15803,map__15803__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_15807_15813 = state;
(statearr_15807_15813[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15798){
var G__15799 = cljs.core.first.call(null,seq15798);
var seq15798__$1 = cljs.core.next.call(null,seq15798);
var G__15800 = cljs.core.first.call(null,seq15798__$1);
var seq15798__$2 = cljs.core.next.call(null,seq15798__$1);
var G__15801 = cljs.core.first.call(null,seq15798__$2);
var seq15798__$3 = cljs.core.next.call(null,seq15798__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15799,G__15800,G__15801,seq15798__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15814 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15814 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15815){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15815 = meta15815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15816,meta15815__$1){
var self__ = this;
var _15816__$1 = this;
return (new cljs.core.async.t_cljs$core$async15814(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15815__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15816){
var self__ = this;
var _15816__$1 = this;
return self__.meta15815;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15814.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15815","meta15815",-1731649917,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15814";

cljs.core.async.t_cljs$core$async15814.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15814");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15814.
 */
cljs.core.async.__GT_t_cljs$core$async15814 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15814(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15815){
return (new cljs.core.async.t_cljs$core$async15814(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15815));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15814(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14920__auto___15978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___15978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___15978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15918){
var state_val_15919 = (state_15918[(1)]);
if((state_val_15919 === (7))){
var inst_15833 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
var statearr_15920_15979 = state_15918__$1;
(statearr_15920_15979[(2)] = inst_15833);

(statearr_15920_15979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (20))){
var inst_15845 = (state_15918[(7)]);
var state_15918__$1 = state_15918;
var statearr_15921_15980 = state_15918__$1;
(statearr_15921_15980[(2)] = inst_15845);

(statearr_15921_15980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (27))){
var state_15918__$1 = state_15918;
var statearr_15922_15981 = state_15918__$1;
(statearr_15922_15981[(2)] = null);

(statearr_15922_15981[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (1))){
var inst_15820 = (state_15918[(8)]);
var inst_15820__$1 = calc_state.call(null);
var inst_15822 = (inst_15820__$1 == null);
var inst_15823 = cljs.core.not.call(null,inst_15822);
var state_15918__$1 = (function (){var statearr_15923 = state_15918;
(statearr_15923[(8)] = inst_15820__$1);

return statearr_15923;
})();
if(inst_15823){
var statearr_15924_15982 = state_15918__$1;
(statearr_15924_15982[(1)] = (2));

} else {
var statearr_15925_15983 = state_15918__$1;
(statearr_15925_15983[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (24))){
var inst_15878 = (state_15918[(9)]);
var inst_15892 = (state_15918[(10)]);
var inst_15869 = (state_15918[(11)]);
var inst_15892__$1 = inst_15869.call(null,inst_15878);
var state_15918__$1 = (function (){var statearr_15926 = state_15918;
(statearr_15926[(10)] = inst_15892__$1);

return statearr_15926;
})();
if(cljs.core.truth_(inst_15892__$1)){
var statearr_15927_15984 = state_15918__$1;
(statearr_15927_15984[(1)] = (29));

} else {
var statearr_15928_15985 = state_15918__$1;
(statearr_15928_15985[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (4))){
var inst_15836 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15836)){
var statearr_15929_15986 = state_15918__$1;
(statearr_15929_15986[(1)] = (8));

} else {
var statearr_15930_15987 = state_15918__$1;
(statearr_15930_15987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (15))){
var inst_15863 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15863)){
var statearr_15931_15988 = state_15918__$1;
(statearr_15931_15988[(1)] = (19));

} else {
var statearr_15932_15989 = state_15918__$1;
(statearr_15932_15989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (21))){
var inst_15868 = (state_15918[(12)]);
var inst_15868__$1 = (state_15918[(2)]);
var inst_15869 = cljs.core.get.call(null,inst_15868__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15870 = cljs.core.get.call(null,inst_15868__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15871 = cljs.core.get.call(null,inst_15868__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15918__$1 = (function (){var statearr_15933 = state_15918;
(statearr_15933[(11)] = inst_15869);

(statearr_15933[(13)] = inst_15870);

(statearr_15933[(12)] = inst_15868__$1);

return statearr_15933;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15918__$1,(22),inst_15871);
} else {
if((state_val_15919 === (31))){
var inst_15900 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15900)){
var statearr_15934_15990 = state_15918__$1;
(statearr_15934_15990[(1)] = (32));

} else {
var statearr_15935_15991 = state_15918__$1;
(statearr_15935_15991[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (32))){
var inst_15877 = (state_15918[(14)]);
var state_15918__$1 = state_15918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15918__$1,(35),out,inst_15877);
} else {
if((state_val_15919 === (33))){
var inst_15868 = (state_15918[(12)]);
var inst_15845 = inst_15868;
var state_15918__$1 = (function (){var statearr_15936 = state_15918;
(statearr_15936[(7)] = inst_15845);

return statearr_15936;
})();
var statearr_15937_15992 = state_15918__$1;
(statearr_15937_15992[(2)] = null);

(statearr_15937_15992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (13))){
var inst_15845 = (state_15918[(7)]);
var inst_15852 = inst_15845.cljs$lang$protocol_mask$partition0$;
var inst_15853 = (inst_15852 & (64));
var inst_15854 = inst_15845.cljs$core$ISeq$;
var inst_15855 = (cljs.core.PROTOCOL_SENTINEL === inst_15854);
var inst_15856 = ((inst_15853) || (inst_15855));
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15856)){
var statearr_15938_15993 = state_15918__$1;
(statearr_15938_15993[(1)] = (16));

} else {
var statearr_15939_15994 = state_15918__$1;
(statearr_15939_15994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (22))){
var inst_15878 = (state_15918[(9)]);
var inst_15877 = (state_15918[(14)]);
var inst_15876 = (state_15918[(2)]);
var inst_15877__$1 = cljs.core.nth.call(null,inst_15876,(0),null);
var inst_15878__$1 = cljs.core.nth.call(null,inst_15876,(1),null);
var inst_15879 = (inst_15877__$1 == null);
var inst_15880 = cljs.core._EQ_.call(null,inst_15878__$1,change);
var inst_15881 = ((inst_15879) || (inst_15880));
var state_15918__$1 = (function (){var statearr_15940 = state_15918;
(statearr_15940[(9)] = inst_15878__$1);

(statearr_15940[(14)] = inst_15877__$1);

return statearr_15940;
})();
if(cljs.core.truth_(inst_15881)){
var statearr_15941_15995 = state_15918__$1;
(statearr_15941_15995[(1)] = (23));

} else {
var statearr_15942_15996 = state_15918__$1;
(statearr_15942_15996[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (36))){
var inst_15868 = (state_15918[(12)]);
var inst_15845 = inst_15868;
var state_15918__$1 = (function (){var statearr_15943 = state_15918;
(statearr_15943[(7)] = inst_15845);

return statearr_15943;
})();
var statearr_15944_15997 = state_15918__$1;
(statearr_15944_15997[(2)] = null);

(statearr_15944_15997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (29))){
var inst_15892 = (state_15918[(10)]);
var state_15918__$1 = state_15918;
var statearr_15945_15998 = state_15918__$1;
(statearr_15945_15998[(2)] = inst_15892);

(statearr_15945_15998[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (6))){
var state_15918__$1 = state_15918;
var statearr_15946_15999 = state_15918__$1;
(statearr_15946_15999[(2)] = false);

(statearr_15946_15999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (28))){
var inst_15888 = (state_15918[(2)]);
var inst_15889 = calc_state.call(null);
var inst_15845 = inst_15889;
var state_15918__$1 = (function (){var statearr_15947 = state_15918;
(statearr_15947[(15)] = inst_15888);

(statearr_15947[(7)] = inst_15845);

return statearr_15947;
})();
var statearr_15948_16000 = state_15918__$1;
(statearr_15948_16000[(2)] = null);

(statearr_15948_16000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (25))){
var inst_15914 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
var statearr_15949_16001 = state_15918__$1;
(statearr_15949_16001[(2)] = inst_15914);

(statearr_15949_16001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (34))){
var inst_15912 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
var statearr_15950_16002 = state_15918__$1;
(statearr_15950_16002[(2)] = inst_15912);

(statearr_15950_16002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (17))){
var state_15918__$1 = state_15918;
var statearr_15951_16003 = state_15918__$1;
(statearr_15951_16003[(2)] = false);

(statearr_15951_16003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (3))){
var state_15918__$1 = state_15918;
var statearr_15952_16004 = state_15918__$1;
(statearr_15952_16004[(2)] = false);

(statearr_15952_16004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (12))){
var inst_15916 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15918__$1,inst_15916);
} else {
if((state_val_15919 === (2))){
var inst_15820 = (state_15918[(8)]);
var inst_15825 = inst_15820.cljs$lang$protocol_mask$partition0$;
var inst_15826 = (inst_15825 & (64));
var inst_15827 = inst_15820.cljs$core$ISeq$;
var inst_15828 = (cljs.core.PROTOCOL_SENTINEL === inst_15827);
var inst_15829 = ((inst_15826) || (inst_15828));
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15829)){
var statearr_15953_16005 = state_15918__$1;
(statearr_15953_16005[(1)] = (5));

} else {
var statearr_15954_16006 = state_15918__$1;
(statearr_15954_16006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (23))){
var inst_15877 = (state_15918[(14)]);
var inst_15883 = (inst_15877 == null);
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15883)){
var statearr_15955_16007 = state_15918__$1;
(statearr_15955_16007[(1)] = (26));

} else {
var statearr_15956_16008 = state_15918__$1;
(statearr_15956_16008[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (35))){
var inst_15903 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15903)){
var statearr_15957_16009 = state_15918__$1;
(statearr_15957_16009[(1)] = (36));

} else {
var statearr_15958_16010 = state_15918__$1;
(statearr_15958_16010[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (19))){
var inst_15845 = (state_15918[(7)]);
var inst_15865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15845);
var state_15918__$1 = state_15918;
var statearr_15959_16011 = state_15918__$1;
(statearr_15959_16011[(2)] = inst_15865);

(statearr_15959_16011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (11))){
var inst_15845 = (state_15918[(7)]);
var inst_15849 = (inst_15845 == null);
var inst_15850 = cljs.core.not.call(null,inst_15849);
var state_15918__$1 = state_15918;
if(inst_15850){
var statearr_15960_16012 = state_15918__$1;
(statearr_15960_16012[(1)] = (13));

} else {
var statearr_15961_16013 = state_15918__$1;
(statearr_15961_16013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (9))){
var inst_15820 = (state_15918[(8)]);
var state_15918__$1 = state_15918;
var statearr_15962_16014 = state_15918__$1;
(statearr_15962_16014[(2)] = inst_15820);

(statearr_15962_16014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (5))){
var state_15918__$1 = state_15918;
var statearr_15963_16015 = state_15918__$1;
(statearr_15963_16015[(2)] = true);

(statearr_15963_16015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (14))){
var state_15918__$1 = state_15918;
var statearr_15964_16016 = state_15918__$1;
(statearr_15964_16016[(2)] = false);

(statearr_15964_16016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (26))){
var inst_15878 = (state_15918[(9)]);
var inst_15885 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15878);
var state_15918__$1 = state_15918;
var statearr_15965_16017 = state_15918__$1;
(statearr_15965_16017[(2)] = inst_15885);

(statearr_15965_16017[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (16))){
var state_15918__$1 = state_15918;
var statearr_15966_16018 = state_15918__$1;
(statearr_15966_16018[(2)] = true);

(statearr_15966_16018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (38))){
var inst_15908 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
var statearr_15967_16019 = state_15918__$1;
(statearr_15967_16019[(2)] = inst_15908);

(statearr_15967_16019[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (30))){
var inst_15878 = (state_15918[(9)]);
var inst_15869 = (state_15918[(11)]);
var inst_15870 = (state_15918[(13)]);
var inst_15895 = cljs.core.empty_QMARK_.call(null,inst_15869);
var inst_15896 = inst_15870.call(null,inst_15878);
var inst_15897 = cljs.core.not.call(null,inst_15896);
var inst_15898 = ((inst_15895) && (inst_15897));
var state_15918__$1 = state_15918;
var statearr_15968_16020 = state_15918__$1;
(statearr_15968_16020[(2)] = inst_15898);

(statearr_15968_16020[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (10))){
var inst_15820 = (state_15918[(8)]);
var inst_15841 = (state_15918[(2)]);
var inst_15842 = cljs.core.get.call(null,inst_15841,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15843 = cljs.core.get.call(null,inst_15841,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15844 = cljs.core.get.call(null,inst_15841,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15845 = inst_15820;
var state_15918__$1 = (function (){var statearr_15969 = state_15918;
(statearr_15969[(16)] = inst_15842);

(statearr_15969[(7)] = inst_15845);

(statearr_15969[(17)] = inst_15843);

(statearr_15969[(18)] = inst_15844);

return statearr_15969;
})();
var statearr_15970_16021 = state_15918__$1;
(statearr_15970_16021[(2)] = null);

(statearr_15970_16021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (18))){
var inst_15860 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
var statearr_15971_16022 = state_15918__$1;
(statearr_15971_16022[(2)] = inst_15860);

(statearr_15971_16022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (37))){
var state_15918__$1 = state_15918;
var statearr_15972_16023 = state_15918__$1;
(statearr_15972_16023[(2)] = null);

(statearr_15972_16023[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15919 === (8))){
var inst_15820 = (state_15918[(8)]);
var inst_15838 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15820);
var state_15918__$1 = state_15918;
var statearr_15973_16024 = state_15918__$1;
(statearr_15973_16024[(2)] = inst_15838);

(statearr_15973_16024[(1)] = (10));


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
});})(c__14920__auto___15978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14825__auto__,c__14920__auto___15978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14826__auto__ = null;
var cljs$core$async$mix_$_state_machine__14826__auto____0 = (function (){
var statearr_15974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15974[(0)] = cljs$core$async$mix_$_state_machine__14826__auto__);

(statearr_15974[(1)] = (1));

return statearr_15974;
});
var cljs$core$async$mix_$_state_machine__14826__auto____1 = (function (state_15918){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_15918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e15975){if((e15975 instanceof Object)){
var ex__14829__auto__ = e15975;
var statearr_15976_16025 = state_15918;
(statearr_15976_16025[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16026 = state_15918;
state_15918 = G__16026;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14826__auto__ = function(state_15918){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14826__auto____1.call(this,state_15918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14826__auto____0;
cljs$core$async$mix_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14826__auto____1;
return cljs$core$async$mix_$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___15978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14922__auto__ = (function (){var statearr_15977 = f__14921__auto__.call(null);
(statearr_15977[(6)] = c__14920__auto___15978);

return statearr_15977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___15978,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__16028 = arguments.length;
switch (G__16028) {
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
var G__16032 = arguments.length;
switch (G__16032) {
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
return (function (p1__16030_SHARP_){
if(cljs.core.truth_(p1__16030_SHARP_.call(null,topic))){
return p1__16030_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16030_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16033 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16034){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16034 = meta16034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16035,meta16034__$1){
var self__ = this;
var _16035__$1 = this;
return (new cljs.core.async.t_cljs$core$async16033(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16034__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16035){
var self__ = this;
var _16035__$1 = this;
return self__.meta16034;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16033.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16033.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16034","meta16034",1942563574,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16033";

cljs.core.async.t_cljs$core$async16033.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16033");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16033.
 */
cljs.core.async.__GT_t_cljs$core$async16033 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16033(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16034){
return (new cljs.core.async.t_cljs$core$async16033(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16034));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16033(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14920__auto___16153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16153,mults,ensure_mult,p){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16153,mults,ensure_mult,p){
return (function (state_16107){
var state_val_16108 = (state_16107[(1)]);
if((state_val_16108 === (7))){
var inst_16103 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
var statearr_16109_16154 = state_16107__$1;
(statearr_16109_16154[(2)] = inst_16103);

(statearr_16109_16154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (20))){
var state_16107__$1 = state_16107;
var statearr_16110_16155 = state_16107__$1;
(statearr_16110_16155[(2)] = null);

(statearr_16110_16155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (1))){
var state_16107__$1 = state_16107;
var statearr_16111_16156 = state_16107__$1;
(statearr_16111_16156[(2)] = null);

(statearr_16111_16156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (24))){
var inst_16086 = (state_16107[(7)]);
var inst_16095 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16086);
var state_16107__$1 = state_16107;
var statearr_16112_16157 = state_16107__$1;
(statearr_16112_16157[(2)] = inst_16095);

(statearr_16112_16157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (4))){
var inst_16038 = (state_16107[(8)]);
var inst_16038__$1 = (state_16107[(2)]);
var inst_16039 = (inst_16038__$1 == null);
var state_16107__$1 = (function (){var statearr_16113 = state_16107;
(statearr_16113[(8)] = inst_16038__$1);

return statearr_16113;
})();
if(cljs.core.truth_(inst_16039)){
var statearr_16114_16158 = state_16107__$1;
(statearr_16114_16158[(1)] = (5));

} else {
var statearr_16115_16159 = state_16107__$1;
(statearr_16115_16159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (15))){
var inst_16080 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
var statearr_16116_16160 = state_16107__$1;
(statearr_16116_16160[(2)] = inst_16080);

(statearr_16116_16160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (21))){
var inst_16100 = (state_16107[(2)]);
var state_16107__$1 = (function (){var statearr_16117 = state_16107;
(statearr_16117[(9)] = inst_16100);

return statearr_16117;
})();
var statearr_16118_16161 = state_16107__$1;
(statearr_16118_16161[(2)] = null);

(statearr_16118_16161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (13))){
var inst_16062 = (state_16107[(10)]);
var inst_16064 = cljs.core.chunked_seq_QMARK_.call(null,inst_16062);
var state_16107__$1 = state_16107;
if(inst_16064){
var statearr_16119_16162 = state_16107__$1;
(statearr_16119_16162[(1)] = (16));

} else {
var statearr_16120_16163 = state_16107__$1;
(statearr_16120_16163[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (22))){
var inst_16092 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
if(cljs.core.truth_(inst_16092)){
var statearr_16121_16164 = state_16107__$1;
(statearr_16121_16164[(1)] = (23));

} else {
var statearr_16122_16165 = state_16107__$1;
(statearr_16122_16165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (6))){
var inst_16086 = (state_16107[(7)]);
var inst_16088 = (state_16107[(11)]);
var inst_16038 = (state_16107[(8)]);
var inst_16086__$1 = topic_fn.call(null,inst_16038);
var inst_16087 = cljs.core.deref.call(null,mults);
var inst_16088__$1 = cljs.core.get.call(null,inst_16087,inst_16086__$1);
var state_16107__$1 = (function (){var statearr_16123 = state_16107;
(statearr_16123[(7)] = inst_16086__$1);

(statearr_16123[(11)] = inst_16088__$1);

return statearr_16123;
})();
if(cljs.core.truth_(inst_16088__$1)){
var statearr_16124_16166 = state_16107__$1;
(statearr_16124_16166[(1)] = (19));

} else {
var statearr_16125_16167 = state_16107__$1;
(statearr_16125_16167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (25))){
var inst_16097 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
var statearr_16126_16168 = state_16107__$1;
(statearr_16126_16168[(2)] = inst_16097);

(statearr_16126_16168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (17))){
var inst_16062 = (state_16107[(10)]);
var inst_16071 = cljs.core.first.call(null,inst_16062);
var inst_16072 = cljs.core.async.muxch_STAR_.call(null,inst_16071);
var inst_16073 = cljs.core.async.close_BANG_.call(null,inst_16072);
var inst_16074 = cljs.core.next.call(null,inst_16062);
var inst_16048 = inst_16074;
var inst_16049 = null;
var inst_16050 = (0);
var inst_16051 = (0);
var state_16107__$1 = (function (){var statearr_16127 = state_16107;
(statearr_16127[(12)] = inst_16048);

(statearr_16127[(13)] = inst_16050);

(statearr_16127[(14)] = inst_16049);

(statearr_16127[(15)] = inst_16073);

(statearr_16127[(16)] = inst_16051);

return statearr_16127;
})();
var statearr_16128_16169 = state_16107__$1;
(statearr_16128_16169[(2)] = null);

(statearr_16128_16169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (3))){
var inst_16105 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16107__$1,inst_16105);
} else {
if((state_val_16108 === (12))){
var inst_16082 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
var statearr_16129_16170 = state_16107__$1;
(statearr_16129_16170[(2)] = inst_16082);

(statearr_16129_16170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (2))){
var state_16107__$1 = state_16107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16107__$1,(4),ch);
} else {
if((state_val_16108 === (23))){
var state_16107__$1 = state_16107;
var statearr_16130_16171 = state_16107__$1;
(statearr_16130_16171[(2)] = null);

(statearr_16130_16171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (19))){
var inst_16088 = (state_16107[(11)]);
var inst_16038 = (state_16107[(8)]);
var inst_16090 = cljs.core.async.muxch_STAR_.call(null,inst_16088);
var state_16107__$1 = state_16107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16107__$1,(22),inst_16090,inst_16038);
} else {
if((state_val_16108 === (11))){
var inst_16062 = (state_16107[(10)]);
var inst_16048 = (state_16107[(12)]);
var inst_16062__$1 = cljs.core.seq.call(null,inst_16048);
var state_16107__$1 = (function (){var statearr_16131 = state_16107;
(statearr_16131[(10)] = inst_16062__$1);

return statearr_16131;
})();
if(inst_16062__$1){
var statearr_16132_16172 = state_16107__$1;
(statearr_16132_16172[(1)] = (13));

} else {
var statearr_16133_16173 = state_16107__$1;
(statearr_16133_16173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (9))){
var inst_16084 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
var statearr_16134_16174 = state_16107__$1;
(statearr_16134_16174[(2)] = inst_16084);

(statearr_16134_16174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (5))){
var inst_16045 = cljs.core.deref.call(null,mults);
var inst_16046 = cljs.core.vals.call(null,inst_16045);
var inst_16047 = cljs.core.seq.call(null,inst_16046);
var inst_16048 = inst_16047;
var inst_16049 = null;
var inst_16050 = (0);
var inst_16051 = (0);
var state_16107__$1 = (function (){var statearr_16135 = state_16107;
(statearr_16135[(12)] = inst_16048);

(statearr_16135[(13)] = inst_16050);

(statearr_16135[(14)] = inst_16049);

(statearr_16135[(16)] = inst_16051);

return statearr_16135;
})();
var statearr_16136_16175 = state_16107__$1;
(statearr_16136_16175[(2)] = null);

(statearr_16136_16175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (14))){
var state_16107__$1 = state_16107;
var statearr_16140_16176 = state_16107__$1;
(statearr_16140_16176[(2)] = null);

(statearr_16140_16176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (16))){
var inst_16062 = (state_16107[(10)]);
var inst_16066 = cljs.core.chunk_first.call(null,inst_16062);
var inst_16067 = cljs.core.chunk_rest.call(null,inst_16062);
var inst_16068 = cljs.core.count.call(null,inst_16066);
var inst_16048 = inst_16067;
var inst_16049 = inst_16066;
var inst_16050 = inst_16068;
var inst_16051 = (0);
var state_16107__$1 = (function (){var statearr_16141 = state_16107;
(statearr_16141[(12)] = inst_16048);

(statearr_16141[(13)] = inst_16050);

(statearr_16141[(14)] = inst_16049);

(statearr_16141[(16)] = inst_16051);

return statearr_16141;
})();
var statearr_16142_16177 = state_16107__$1;
(statearr_16142_16177[(2)] = null);

(statearr_16142_16177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (10))){
var inst_16048 = (state_16107[(12)]);
var inst_16050 = (state_16107[(13)]);
var inst_16049 = (state_16107[(14)]);
var inst_16051 = (state_16107[(16)]);
var inst_16056 = cljs.core._nth.call(null,inst_16049,inst_16051);
var inst_16057 = cljs.core.async.muxch_STAR_.call(null,inst_16056);
var inst_16058 = cljs.core.async.close_BANG_.call(null,inst_16057);
var inst_16059 = (inst_16051 + (1));
var tmp16137 = inst_16048;
var tmp16138 = inst_16050;
var tmp16139 = inst_16049;
var inst_16048__$1 = tmp16137;
var inst_16049__$1 = tmp16139;
var inst_16050__$1 = tmp16138;
var inst_16051__$1 = inst_16059;
var state_16107__$1 = (function (){var statearr_16143 = state_16107;
(statearr_16143[(12)] = inst_16048__$1);

(statearr_16143[(13)] = inst_16050__$1);

(statearr_16143[(17)] = inst_16058);

(statearr_16143[(14)] = inst_16049__$1);

(statearr_16143[(16)] = inst_16051__$1);

return statearr_16143;
})();
var statearr_16144_16178 = state_16107__$1;
(statearr_16144_16178[(2)] = null);

(statearr_16144_16178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (18))){
var inst_16077 = (state_16107[(2)]);
var state_16107__$1 = state_16107;
var statearr_16145_16179 = state_16107__$1;
(statearr_16145_16179[(2)] = inst_16077);

(statearr_16145_16179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16108 === (8))){
var inst_16050 = (state_16107[(13)]);
var inst_16051 = (state_16107[(16)]);
var inst_16053 = (inst_16051 < inst_16050);
var inst_16054 = inst_16053;
var state_16107__$1 = state_16107;
if(cljs.core.truth_(inst_16054)){
var statearr_16146_16180 = state_16107__$1;
(statearr_16146_16180[(1)] = (10));

} else {
var statearr_16147_16181 = state_16107__$1;
(statearr_16147_16181[(1)] = (11));

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
});})(c__14920__auto___16153,mults,ensure_mult,p))
;
return ((function (switch__14825__auto__,c__14920__auto___16153,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16148[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16148[(1)] = (1));

return statearr_16148;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16107){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16149){if((e16149 instanceof Object)){
var ex__14829__auto__ = e16149;
var statearr_16150_16182 = state_16107;
(statearr_16150_16182[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16183 = state_16107;
state_16107 = G__16183;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16153,mults,ensure_mult,p))
})();
var state__14922__auto__ = (function (){var statearr_16151 = f__14921__auto__.call(null);
(statearr_16151[(6)] = c__14920__auto___16153);

return statearr_16151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16153,mults,ensure_mult,p))
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
var G__16185 = arguments.length;
switch (G__16185) {
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
var G__16188 = arguments.length;
switch (G__16188) {
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
var G__16191 = arguments.length;
switch (G__16191) {
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
var c__14920__auto___16258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16230){
var state_val_16231 = (state_16230[(1)]);
if((state_val_16231 === (7))){
var state_16230__$1 = state_16230;
var statearr_16232_16259 = state_16230__$1;
(statearr_16232_16259[(2)] = null);

(statearr_16232_16259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (1))){
var state_16230__$1 = state_16230;
var statearr_16233_16260 = state_16230__$1;
(statearr_16233_16260[(2)] = null);

(statearr_16233_16260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (4))){
var inst_16194 = (state_16230[(7)]);
var inst_16196 = (inst_16194 < cnt);
var state_16230__$1 = state_16230;
if(cljs.core.truth_(inst_16196)){
var statearr_16234_16261 = state_16230__$1;
(statearr_16234_16261[(1)] = (6));

} else {
var statearr_16235_16262 = state_16230__$1;
(statearr_16235_16262[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (15))){
var inst_16226 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16236_16263 = state_16230__$1;
(statearr_16236_16263[(2)] = inst_16226);

(statearr_16236_16263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (13))){
var inst_16219 = cljs.core.async.close_BANG_.call(null,out);
var state_16230__$1 = state_16230;
var statearr_16237_16264 = state_16230__$1;
(statearr_16237_16264[(2)] = inst_16219);

(statearr_16237_16264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (6))){
var state_16230__$1 = state_16230;
var statearr_16238_16265 = state_16230__$1;
(statearr_16238_16265[(2)] = null);

(statearr_16238_16265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (3))){
var inst_16228 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16230__$1,inst_16228);
} else {
if((state_val_16231 === (12))){
var inst_16216 = (state_16230[(8)]);
var inst_16216__$1 = (state_16230[(2)]);
var inst_16217 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16216__$1);
var state_16230__$1 = (function (){var statearr_16239 = state_16230;
(statearr_16239[(8)] = inst_16216__$1);

return statearr_16239;
})();
if(cljs.core.truth_(inst_16217)){
var statearr_16240_16266 = state_16230__$1;
(statearr_16240_16266[(1)] = (13));

} else {
var statearr_16241_16267 = state_16230__$1;
(statearr_16241_16267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (2))){
var inst_16193 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16194 = (0);
var state_16230__$1 = (function (){var statearr_16242 = state_16230;
(statearr_16242[(9)] = inst_16193);

(statearr_16242[(7)] = inst_16194);

return statearr_16242;
})();
var statearr_16243_16268 = state_16230__$1;
(statearr_16243_16268[(2)] = null);

(statearr_16243_16268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (11))){
var inst_16194 = (state_16230[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16230,(10),Object,null,(9));
var inst_16203 = chs__$1.call(null,inst_16194);
var inst_16204 = done.call(null,inst_16194);
var inst_16205 = cljs.core.async.take_BANG_.call(null,inst_16203,inst_16204);
var state_16230__$1 = state_16230;
var statearr_16244_16269 = state_16230__$1;
(statearr_16244_16269[(2)] = inst_16205);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16230__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (9))){
var inst_16194 = (state_16230[(7)]);
var inst_16207 = (state_16230[(2)]);
var inst_16208 = (inst_16194 + (1));
var inst_16194__$1 = inst_16208;
var state_16230__$1 = (function (){var statearr_16245 = state_16230;
(statearr_16245[(10)] = inst_16207);

(statearr_16245[(7)] = inst_16194__$1);

return statearr_16245;
})();
var statearr_16246_16270 = state_16230__$1;
(statearr_16246_16270[(2)] = null);

(statearr_16246_16270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (5))){
var inst_16214 = (state_16230[(2)]);
var state_16230__$1 = (function (){var statearr_16247 = state_16230;
(statearr_16247[(11)] = inst_16214);

return statearr_16247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16230__$1,(12),dchan);
} else {
if((state_val_16231 === (14))){
var inst_16216 = (state_16230[(8)]);
var inst_16221 = cljs.core.apply.call(null,f,inst_16216);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16230__$1,(16),out,inst_16221);
} else {
if((state_val_16231 === (16))){
var inst_16223 = (state_16230[(2)]);
var state_16230__$1 = (function (){var statearr_16248 = state_16230;
(statearr_16248[(12)] = inst_16223);

return statearr_16248;
})();
var statearr_16249_16271 = state_16230__$1;
(statearr_16249_16271[(2)] = null);

(statearr_16249_16271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (10))){
var inst_16198 = (state_16230[(2)]);
var inst_16199 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16230__$1 = (function (){var statearr_16250 = state_16230;
(statearr_16250[(13)] = inst_16198);

return statearr_16250;
})();
var statearr_16251_16272 = state_16230__$1;
(statearr_16251_16272[(2)] = inst_16199);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16230__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (8))){
var inst_16212 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16252_16273 = state_16230__$1;
(statearr_16252_16273[(2)] = inst_16212);

(statearr_16252_16273[(1)] = (5));


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
});})(c__14920__auto___16258,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14825__auto__,c__14920__auto___16258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16253[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16253[(1)] = (1));

return statearr_16253;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16230){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16254){if((e16254 instanceof Object)){
var ex__14829__auto__ = e16254;
var statearr_16255_16274 = state_16230;
(statearr_16255_16274[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16275 = state_16230;
state_16230 = G__16275;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16258,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14922__auto__ = (function (){var statearr_16256 = f__14921__auto__.call(null);
(statearr_16256[(6)] = c__14920__auto___16258);

return statearr_16256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16258,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16278 = arguments.length;
switch (G__16278) {
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
var c__14920__auto___16332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16332,out){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16332,out){
return (function (state_16310){
var state_val_16311 = (state_16310[(1)]);
if((state_val_16311 === (7))){
var inst_16290 = (state_16310[(7)]);
var inst_16289 = (state_16310[(8)]);
var inst_16289__$1 = (state_16310[(2)]);
var inst_16290__$1 = cljs.core.nth.call(null,inst_16289__$1,(0),null);
var inst_16291 = cljs.core.nth.call(null,inst_16289__$1,(1),null);
var inst_16292 = (inst_16290__$1 == null);
var state_16310__$1 = (function (){var statearr_16312 = state_16310;
(statearr_16312[(7)] = inst_16290__$1);

(statearr_16312[(8)] = inst_16289__$1);

(statearr_16312[(9)] = inst_16291);

return statearr_16312;
})();
if(cljs.core.truth_(inst_16292)){
var statearr_16313_16333 = state_16310__$1;
(statearr_16313_16333[(1)] = (8));

} else {
var statearr_16314_16334 = state_16310__$1;
(statearr_16314_16334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (1))){
var inst_16279 = cljs.core.vec.call(null,chs);
var inst_16280 = inst_16279;
var state_16310__$1 = (function (){var statearr_16315 = state_16310;
(statearr_16315[(10)] = inst_16280);

return statearr_16315;
})();
var statearr_16316_16335 = state_16310__$1;
(statearr_16316_16335[(2)] = null);

(statearr_16316_16335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (4))){
var inst_16280 = (state_16310[(10)]);
var state_16310__$1 = state_16310;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16310__$1,(7),inst_16280);
} else {
if((state_val_16311 === (6))){
var inst_16306 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16317_16336 = state_16310__$1;
(statearr_16317_16336[(2)] = inst_16306);

(statearr_16317_16336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (3))){
var inst_16308 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16310__$1,inst_16308);
} else {
if((state_val_16311 === (2))){
var inst_16280 = (state_16310[(10)]);
var inst_16282 = cljs.core.count.call(null,inst_16280);
var inst_16283 = (inst_16282 > (0));
var state_16310__$1 = state_16310;
if(cljs.core.truth_(inst_16283)){
var statearr_16319_16337 = state_16310__$1;
(statearr_16319_16337[(1)] = (4));

} else {
var statearr_16320_16338 = state_16310__$1;
(statearr_16320_16338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (11))){
var inst_16280 = (state_16310[(10)]);
var inst_16299 = (state_16310[(2)]);
var tmp16318 = inst_16280;
var inst_16280__$1 = tmp16318;
var state_16310__$1 = (function (){var statearr_16321 = state_16310;
(statearr_16321[(10)] = inst_16280__$1);

(statearr_16321[(11)] = inst_16299);

return statearr_16321;
})();
var statearr_16322_16339 = state_16310__$1;
(statearr_16322_16339[(2)] = null);

(statearr_16322_16339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (9))){
var inst_16290 = (state_16310[(7)]);
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16310__$1,(11),out,inst_16290);
} else {
if((state_val_16311 === (5))){
var inst_16304 = cljs.core.async.close_BANG_.call(null,out);
var state_16310__$1 = state_16310;
var statearr_16323_16340 = state_16310__$1;
(statearr_16323_16340[(2)] = inst_16304);

(statearr_16323_16340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (10))){
var inst_16302 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16324_16341 = state_16310__$1;
(statearr_16324_16341[(2)] = inst_16302);

(statearr_16324_16341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (8))){
var inst_16290 = (state_16310[(7)]);
var inst_16289 = (state_16310[(8)]);
var inst_16280 = (state_16310[(10)]);
var inst_16291 = (state_16310[(9)]);
var inst_16294 = (function (){var cs = inst_16280;
var vec__16285 = inst_16289;
var v = inst_16290;
var c = inst_16291;
return ((function (cs,vec__16285,v,c,inst_16290,inst_16289,inst_16280,inst_16291,state_val_16311,c__14920__auto___16332,out){
return (function (p1__16276_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16276_SHARP_);
});
;})(cs,vec__16285,v,c,inst_16290,inst_16289,inst_16280,inst_16291,state_val_16311,c__14920__auto___16332,out))
})();
var inst_16295 = cljs.core.filterv.call(null,inst_16294,inst_16280);
var inst_16280__$1 = inst_16295;
var state_16310__$1 = (function (){var statearr_16325 = state_16310;
(statearr_16325[(10)] = inst_16280__$1);

return statearr_16325;
})();
var statearr_16326_16342 = state_16310__$1;
(statearr_16326_16342[(2)] = null);

(statearr_16326_16342[(1)] = (2));


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
});})(c__14920__auto___16332,out))
;
return ((function (switch__14825__auto__,c__14920__auto___16332,out){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16327[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16327[(1)] = (1));

return statearr_16327;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16310){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16328){if((e16328 instanceof Object)){
var ex__14829__auto__ = e16328;
var statearr_16329_16343 = state_16310;
(statearr_16329_16343[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16344 = state_16310;
state_16310 = G__16344;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16332,out))
})();
var state__14922__auto__ = (function (){var statearr_16330 = f__14921__auto__.call(null);
(statearr_16330[(6)] = c__14920__auto___16332);

return statearr_16330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16332,out))
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
var G__16346 = arguments.length;
switch (G__16346) {
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
var c__14920__auto___16391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16391,out){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16391,out){
return (function (state_16370){
var state_val_16371 = (state_16370[(1)]);
if((state_val_16371 === (7))){
var inst_16352 = (state_16370[(7)]);
var inst_16352__$1 = (state_16370[(2)]);
var inst_16353 = (inst_16352__$1 == null);
var inst_16354 = cljs.core.not.call(null,inst_16353);
var state_16370__$1 = (function (){var statearr_16372 = state_16370;
(statearr_16372[(7)] = inst_16352__$1);

return statearr_16372;
})();
if(inst_16354){
var statearr_16373_16392 = state_16370__$1;
(statearr_16373_16392[(1)] = (8));

} else {
var statearr_16374_16393 = state_16370__$1;
(statearr_16374_16393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (1))){
var inst_16347 = (0);
var state_16370__$1 = (function (){var statearr_16375 = state_16370;
(statearr_16375[(8)] = inst_16347);

return statearr_16375;
})();
var statearr_16376_16394 = state_16370__$1;
(statearr_16376_16394[(2)] = null);

(statearr_16376_16394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (4))){
var state_16370__$1 = state_16370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16370__$1,(7),ch);
} else {
if((state_val_16371 === (6))){
var inst_16365 = (state_16370[(2)]);
var state_16370__$1 = state_16370;
var statearr_16377_16395 = state_16370__$1;
(statearr_16377_16395[(2)] = inst_16365);

(statearr_16377_16395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (3))){
var inst_16367 = (state_16370[(2)]);
var inst_16368 = cljs.core.async.close_BANG_.call(null,out);
var state_16370__$1 = (function (){var statearr_16378 = state_16370;
(statearr_16378[(9)] = inst_16367);

return statearr_16378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16370__$1,inst_16368);
} else {
if((state_val_16371 === (2))){
var inst_16347 = (state_16370[(8)]);
var inst_16349 = (inst_16347 < n);
var state_16370__$1 = state_16370;
if(cljs.core.truth_(inst_16349)){
var statearr_16379_16396 = state_16370__$1;
(statearr_16379_16396[(1)] = (4));

} else {
var statearr_16380_16397 = state_16370__$1;
(statearr_16380_16397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (11))){
var inst_16347 = (state_16370[(8)]);
var inst_16357 = (state_16370[(2)]);
var inst_16358 = (inst_16347 + (1));
var inst_16347__$1 = inst_16358;
var state_16370__$1 = (function (){var statearr_16381 = state_16370;
(statearr_16381[(10)] = inst_16357);

(statearr_16381[(8)] = inst_16347__$1);

return statearr_16381;
})();
var statearr_16382_16398 = state_16370__$1;
(statearr_16382_16398[(2)] = null);

(statearr_16382_16398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (9))){
var state_16370__$1 = state_16370;
var statearr_16383_16399 = state_16370__$1;
(statearr_16383_16399[(2)] = null);

(statearr_16383_16399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (5))){
var state_16370__$1 = state_16370;
var statearr_16384_16400 = state_16370__$1;
(statearr_16384_16400[(2)] = null);

(statearr_16384_16400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (10))){
var inst_16362 = (state_16370[(2)]);
var state_16370__$1 = state_16370;
var statearr_16385_16401 = state_16370__$1;
(statearr_16385_16401[(2)] = inst_16362);

(statearr_16385_16401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16371 === (8))){
var inst_16352 = (state_16370[(7)]);
var state_16370__$1 = state_16370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16370__$1,(11),out,inst_16352);
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
});})(c__14920__auto___16391,out))
;
return ((function (switch__14825__auto__,c__14920__auto___16391,out){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16386[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16386[(1)] = (1));

return statearr_16386;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16370){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16387){if((e16387 instanceof Object)){
var ex__14829__auto__ = e16387;
var statearr_16388_16402 = state_16370;
(statearr_16388_16402[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16403 = state_16370;
state_16370 = G__16403;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16391,out))
})();
var state__14922__auto__ = (function (){var statearr_16389 = f__14921__auto__.call(null);
(statearr_16389[(6)] = c__14920__auto___16391);

return statearr_16389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16391,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16405 = (function (f,ch,meta16406){
this.f = f;
this.ch = ch;
this.meta16406 = meta16406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16407,meta16406__$1){
var self__ = this;
var _16407__$1 = this;
return (new cljs.core.async.t_cljs$core$async16405(self__.f,self__.ch,meta16406__$1));
});

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16407){
var self__ = this;
var _16407__$1 = this;
return self__.meta16406;
});

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16408 = (function (f,ch,meta16406,_,fn1,meta16409){
this.f = f;
this.ch = ch;
this.meta16406 = meta16406;
this._ = _;
this.fn1 = fn1;
this.meta16409 = meta16409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16410,meta16409__$1){
var self__ = this;
var _16410__$1 = this;
return (new cljs.core.async.t_cljs$core$async16408(self__.f,self__.ch,self__.meta16406,self__._,self__.fn1,meta16409__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16410){
var self__ = this;
var _16410__$1 = this;
return self__.meta16409;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16404_SHARP_){
return f1.call(null,(((p1__16404_SHARP_ == null))?null:self__.f.call(null,p1__16404_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16408.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16406","meta16406",-1369907474,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16405","cljs.core.async/t_cljs$core$async16405",-1244781267,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16409","meta16409",-1556331413,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16408";

cljs.core.async.t_cljs$core$async16408.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16408");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16408.
 */
cljs.core.async.__GT_t_cljs$core$async16408 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16408(f__$1,ch__$1,meta16406__$1,___$2,fn1__$1,meta16409){
return (new cljs.core.async.t_cljs$core$async16408(f__$1,ch__$1,meta16406__$1,___$2,fn1__$1,meta16409));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16408(self__.f,self__.ch,self__.meta16406,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16406","meta16406",-1369907474,null)], null);
});

cljs.core.async.t_cljs$core$async16405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16405";

cljs.core.async.t_cljs$core$async16405.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16405");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16405.
 */
cljs.core.async.__GT_t_cljs$core$async16405 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16405(f__$1,ch__$1,meta16406){
return (new cljs.core.async.t_cljs$core$async16405(f__$1,ch__$1,meta16406));
});

}

return (new cljs.core.async.t_cljs$core$async16405(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16411 = (function (f,ch,meta16412){
this.f = f;
this.ch = ch;
this.meta16412 = meta16412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16413,meta16412__$1){
var self__ = this;
var _16413__$1 = this;
return (new cljs.core.async.t_cljs$core$async16411(self__.f,self__.ch,meta16412__$1));
});

cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16413){
var self__ = this;
var _16413__$1 = this;
return self__.meta16412;
});

cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16412","meta16412",793075202,null)], null);
});

cljs.core.async.t_cljs$core$async16411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16411";

cljs.core.async.t_cljs$core$async16411.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16411");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16411.
 */
cljs.core.async.__GT_t_cljs$core$async16411 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16411(f__$1,ch__$1,meta16412){
return (new cljs.core.async.t_cljs$core$async16411(f__$1,ch__$1,meta16412));
});

}

return (new cljs.core.async.t_cljs$core$async16411(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16414 = (function (p,ch,meta16415){
this.p = p;
this.ch = ch;
this.meta16415 = meta16415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16416,meta16415__$1){
var self__ = this;
var _16416__$1 = this;
return (new cljs.core.async.t_cljs$core$async16414(self__.p,self__.ch,meta16415__$1));
});

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16416){
var self__ = this;
var _16416__$1 = this;
return self__.meta16415;
});

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16415","meta16415",-1274361744,null)], null);
});

cljs.core.async.t_cljs$core$async16414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16414";

cljs.core.async.t_cljs$core$async16414.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16414");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16414.
 */
cljs.core.async.__GT_t_cljs$core$async16414 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16414(p__$1,ch__$1,meta16415){
return (new cljs.core.async.t_cljs$core$async16414(p__$1,ch__$1,meta16415));
});

}

return (new cljs.core.async.t_cljs$core$async16414(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16418 = arguments.length;
switch (G__16418) {
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
var c__14920__auto___16458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16458,out){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16458,out){
return (function (state_16439){
var state_val_16440 = (state_16439[(1)]);
if((state_val_16440 === (7))){
var inst_16435 = (state_16439[(2)]);
var state_16439__$1 = state_16439;
var statearr_16441_16459 = state_16439__$1;
(statearr_16441_16459[(2)] = inst_16435);

(statearr_16441_16459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (1))){
var state_16439__$1 = state_16439;
var statearr_16442_16460 = state_16439__$1;
(statearr_16442_16460[(2)] = null);

(statearr_16442_16460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (4))){
var inst_16421 = (state_16439[(7)]);
var inst_16421__$1 = (state_16439[(2)]);
var inst_16422 = (inst_16421__$1 == null);
var state_16439__$1 = (function (){var statearr_16443 = state_16439;
(statearr_16443[(7)] = inst_16421__$1);

return statearr_16443;
})();
if(cljs.core.truth_(inst_16422)){
var statearr_16444_16461 = state_16439__$1;
(statearr_16444_16461[(1)] = (5));

} else {
var statearr_16445_16462 = state_16439__$1;
(statearr_16445_16462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (6))){
var inst_16421 = (state_16439[(7)]);
var inst_16426 = p.call(null,inst_16421);
var state_16439__$1 = state_16439;
if(cljs.core.truth_(inst_16426)){
var statearr_16446_16463 = state_16439__$1;
(statearr_16446_16463[(1)] = (8));

} else {
var statearr_16447_16464 = state_16439__$1;
(statearr_16447_16464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (3))){
var inst_16437 = (state_16439[(2)]);
var state_16439__$1 = state_16439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16439__$1,inst_16437);
} else {
if((state_val_16440 === (2))){
var state_16439__$1 = state_16439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16439__$1,(4),ch);
} else {
if((state_val_16440 === (11))){
var inst_16429 = (state_16439[(2)]);
var state_16439__$1 = state_16439;
var statearr_16448_16465 = state_16439__$1;
(statearr_16448_16465[(2)] = inst_16429);

(statearr_16448_16465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (9))){
var state_16439__$1 = state_16439;
var statearr_16449_16466 = state_16439__$1;
(statearr_16449_16466[(2)] = null);

(statearr_16449_16466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (5))){
var inst_16424 = cljs.core.async.close_BANG_.call(null,out);
var state_16439__$1 = state_16439;
var statearr_16450_16467 = state_16439__$1;
(statearr_16450_16467[(2)] = inst_16424);

(statearr_16450_16467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (10))){
var inst_16432 = (state_16439[(2)]);
var state_16439__$1 = (function (){var statearr_16451 = state_16439;
(statearr_16451[(8)] = inst_16432);

return statearr_16451;
})();
var statearr_16452_16468 = state_16439__$1;
(statearr_16452_16468[(2)] = null);

(statearr_16452_16468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16440 === (8))){
var inst_16421 = (state_16439[(7)]);
var state_16439__$1 = state_16439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16439__$1,(11),out,inst_16421);
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
});})(c__14920__auto___16458,out))
;
return ((function (switch__14825__auto__,c__14920__auto___16458,out){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16453 = [null,null,null,null,null,null,null,null,null];
(statearr_16453[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16453[(1)] = (1));

return statearr_16453;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16439){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16454){if((e16454 instanceof Object)){
var ex__14829__auto__ = e16454;
var statearr_16455_16469 = state_16439;
(statearr_16455_16469[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16470 = state_16439;
state_16439 = G__16470;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16458,out))
})();
var state__14922__auto__ = (function (){var statearr_16456 = f__14921__auto__.call(null);
(statearr_16456[(6)] = c__14920__auto___16458);

return statearr_16456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16458,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16472 = arguments.length;
switch (G__16472) {
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
var c__14920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto__){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto__){
return (function (state_16535){
var state_val_16536 = (state_16535[(1)]);
if((state_val_16536 === (7))){
var inst_16531 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16537_16575 = state_16535__$1;
(statearr_16537_16575[(2)] = inst_16531);

(statearr_16537_16575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (20))){
var inst_16501 = (state_16535[(7)]);
var inst_16512 = (state_16535[(2)]);
var inst_16513 = cljs.core.next.call(null,inst_16501);
var inst_16487 = inst_16513;
var inst_16488 = null;
var inst_16489 = (0);
var inst_16490 = (0);
var state_16535__$1 = (function (){var statearr_16538 = state_16535;
(statearr_16538[(8)] = inst_16512);

(statearr_16538[(9)] = inst_16488);

(statearr_16538[(10)] = inst_16490);

(statearr_16538[(11)] = inst_16487);

(statearr_16538[(12)] = inst_16489);

return statearr_16538;
})();
var statearr_16539_16576 = state_16535__$1;
(statearr_16539_16576[(2)] = null);

(statearr_16539_16576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (1))){
var state_16535__$1 = state_16535;
var statearr_16540_16577 = state_16535__$1;
(statearr_16540_16577[(2)] = null);

(statearr_16540_16577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (4))){
var inst_16476 = (state_16535[(13)]);
var inst_16476__$1 = (state_16535[(2)]);
var inst_16477 = (inst_16476__$1 == null);
var state_16535__$1 = (function (){var statearr_16541 = state_16535;
(statearr_16541[(13)] = inst_16476__$1);

return statearr_16541;
})();
if(cljs.core.truth_(inst_16477)){
var statearr_16542_16578 = state_16535__$1;
(statearr_16542_16578[(1)] = (5));

} else {
var statearr_16543_16579 = state_16535__$1;
(statearr_16543_16579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (15))){
var state_16535__$1 = state_16535;
var statearr_16547_16580 = state_16535__$1;
(statearr_16547_16580[(2)] = null);

(statearr_16547_16580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (21))){
var state_16535__$1 = state_16535;
var statearr_16548_16581 = state_16535__$1;
(statearr_16548_16581[(2)] = null);

(statearr_16548_16581[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (13))){
var inst_16488 = (state_16535[(9)]);
var inst_16490 = (state_16535[(10)]);
var inst_16487 = (state_16535[(11)]);
var inst_16489 = (state_16535[(12)]);
var inst_16497 = (state_16535[(2)]);
var inst_16498 = (inst_16490 + (1));
var tmp16544 = inst_16488;
var tmp16545 = inst_16487;
var tmp16546 = inst_16489;
var inst_16487__$1 = tmp16545;
var inst_16488__$1 = tmp16544;
var inst_16489__$1 = tmp16546;
var inst_16490__$1 = inst_16498;
var state_16535__$1 = (function (){var statearr_16549 = state_16535;
(statearr_16549[(9)] = inst_16488__$1);

(statearr_16549[(14)] = inst_16497);

(statearr_16549[(10)] = inst_16490__$1);

(statearr_16549[(11)] = inst_16487__$1);

(statearr_16549[(12)] = inst_16489__$1);

return statearr_16549;
})();
var statearr_16550_16582 = state_16535__$1;
(statearr_16550_16582[(2)] = null);

(statearr_16550_16582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (22))){
var state_16535__$1 = state_16535;
var statearr_16551_16583 = state_16535__$1;
(statearr_16551_16583[(2)] = null);

(statearr_16551_16583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (6))){
var inst_16476 = (state_16535[(13)]);
var inst_16485 = f.call(null,inst_16476);
var inst_16486 = cljs.core.seq.call(null,inst_16485);
var inst_16487 = inst_16486;
var inst_16488 = null;
var inst_16489 = (0);
var inst_16490 = (0);
var state_16535__$1 = (function (){var statearr_16552 = state_16535;
(statearr_16552[(9)] = inst_16488);

(statearr_16552[(10)] = inst_16490);

(statearr_16552[(11)] = inst_16487);

(statearr_16552[(12)] = inst_16489);

return statearr_16552;
})();
var statearr_16553_16584 = state_16535__$1;
(statearr_16553_16584[(2)] = null);

(statearr_16553_16584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (17))){
var inst_16501 = (state_16535[(7)]);
var inst_16505 = cljs.core.chunk_first.call(null,inst_16501);
var inst_16506 = cljs.core.chunk_rest.call(null,inst_16501);
var inst_16507 = cljs.core.count.call(null,inst_16505);
var inst_16487 = inst_16506;
var inst_16488 = inst_16505;
var inst_16489 = inst_16507;
var inst_16490 = (0);
var state_16535__$1 = (function (){var statearr_16554 = state_16535;
(statearr_16554[(9)] = inst_16488);

(statearr_16554[(10)] = inst_16490);

(statearr_16554[(11)] = inst_16487);

(statearr_16554[(12)] = inst_16489);

return statearr_16554;
})();
var statearr_16555_16585 = state_16535__$1;
(statearr_16555_16585[(2)] = null);

(statearr_16555_16585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (3))){
var inst_16533 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16535__$1,inst_16533);
} else {
if((state_val_16536 === (12))){
var inst_16521 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16556_16586 = state_16535__$1;
(statearr_16556_16586[(2)] = inst_16521);

(statearr_16556_16586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (2))){
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16535__$1,(4),in$);
} else {
if((state_val_16536 === (23))){
var inst_16529 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16557_16587 = state_16535__$1;
(statearr_16557_16587[(2)] = inst_16529);

(statearr_16557_16587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (19))){
var inst_16516 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16558_16588 = state_16535__$1;
(statearr_16558_16588[(2)] = inst_16516);

(statearr_16558_16588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (11))){
var inst_16501 = (state_16535[(7)]);
var inst_16487 = (state_16535[(11)]);
var inst_16501__$1 = cljs.core.seq.call(null,inst_16487);
var state_16535__$1 = (function (){var statearr_16559 = state_16535;
(statearr_16559[(7)] = inst_16501__$1);

return statearr_16559;
})();
if(inst_16501__$1){
var statearr_16560_16589 = state_16535__$1;
(statearr_16560_16589[(1)] = (14));

} else {
var statearr_16561_16590 = state_16535__$1;
(statearr_16561_16590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (9))){
var inst_16523 = (state_16535[(2)]);
var inst_16524 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16535__$1 = (function (){var statearr_16562 = state_16535;
(statearr_16562[(15)] = inst_16523);

return statearr_16562;
})();
if(cljs.core.truth_(inst_16524)){
var statearr_16563_16591 = state_16535__$1;
(statearr_16563_16591[(1)] = (21));

} else {
var statearr_16564_16592 = state_16535__$1;
(statearr_16564_16592[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (5))){
var inst_16479 = cljs.core.async.close_BANG_.call(null,out);
var state_16535__$1 = state_16535;
var statearr_16565_16593 = state_16535__$1;
(statearr_16565_16593[(2)] = inst_16479);

(statearr_16565_16593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (14))){
var inst_16501 = (state_16535[(7)]);
var inst_16503 = cljs.core.chunked_seq_QMARK_.call(null,inst_16501);
var state_16535__$1 = state_16535;
if(inst_16503){
var statearr_16566_16594 = state_16535__$1;
(statearr_16566_16594[(1)] = (17));

} else {
var statearr_16567_16595 = state_16535__$1;
(statearr_16567_16595[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (16))){
var inst_16519 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16568_16596 = state_16535__$1;
(statearr_16568_16596[(2)] = inst_16519);

(statearr_16568_16596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (10))){
var inst_16488 = (state_16535[(9)]);
var inst_16490 = (state_16535[(10)]);
var inst_16495 = cljs.core._nth.call(null,inst_16488,inst_16490);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16535__$1,(13),out,inst_16495);
} else {
if((state_val_16536 === (18))){
var inst_16501 = (state_16535[(7)]);
var inst_16510 = cljs.core.first.call(null,inst_16501);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16535__$1,(20),out,inst_16510);
} else {
if((state_val_16536 === (8))){
var inst_16490 = (state_16535[(10)]);
var inst_16489 = (state_16535[(12)]);
var inst_16492 = (inst_16490 < inst_16489);
var inst_16493 = inst_16492;
var state_16535__$1 = state_16535;
if(cljs.core.truth_(inst_16493)){
var statearr_16569_16597 = state_16535__$1;
(statearr_16569_16597[(1)] = (10));

} else {
var statearr_16570_16598 = state_16535__$1;
(statearr_16570_16598[(1)] = (11));

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
});})(c__14920__auto__))
;
return ((function (switch__14825__auto__,c__14920__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14826__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14826__auto____0 = (function (){
var statearr_16571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16571[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14826__auto__);

(statearr_16571[(1)] = (1));

return statearr_16571;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14826__auto____1 = (function (state_16535){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16572){if((e16572 instanceof Object)){
var ex__14829__auto__ = e16572;
var statearr_16573_16599 = state_16535;
(statearr_16573_16599[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16600 = state_16535;
state_16535 = G__16600;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14826__auto__ = function(state_16535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14826__auto____1.call(this,state_16535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14826__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14826__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto__))
})();
var state__14922__auto__ = (function (){var statearr_16574 = f__14921__auto__.call(null);
(statearr_16574[(6)] = c__14920__auto__);

return statearr_16574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto__))
);

return c__14920__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16602 = arguments.length;
switch (G__16602) {
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
var G__16605 = arguments.length;
switch (G__16605) {
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
var G__16608 = arguments.length;
switch (G__16608) {
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
var c__14920__auto___16655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16655,out){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16655,out){
return (function (state_16632){
var state_val_16633 = (state_16632[(1)]);
if((state_val_16633 === (7))){
var inst_16627 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16634_16656 = state_16632__$1;
(statearr_16634_16656[(2)] = inst_16627);

(statearr_16634_16656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (1))){
var inst_16609 = null;
var state_16632__$1 = (function (){var statearr_16635 = state_16632;
(statearr_16635[(7)] = inst_16609);

return statearr_16635;
})();
var statearr_16636_16657 = state_16632__$1;
(statearr_16636_16657[(2)] = null);

(statearr_16636_16657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (4))){
var inst_16612 = (state_16632[(8)]);
var inst_16612__$1 = (state_16632[(2)]);
var inst_16613 = (inst_16612__$1 == null);
var inst_16614 = cljs.core.not.call(null,inst_16613);
var state_16632__$1 = (function (){var statearr_16637 = state_16632;
(statearr_16637[(8)] = inst_16612__$1);

return statearr_16637;
})();
if(inst_16614){
var statearr_16638_16658 = state_16632__$1;
(statearr_16638_16658[(1)] = (5));

} else {
var statearr_16639_16659 = state_16632__$1;
(statearr_16639_16659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (6))){
var state_16632__$1 = state_16632;
var statearr_16640_16660 = state_16632__$1;
(statearr_16640_16660[(2)] = null);

(statearr_16640_16660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (3))){
var inst_16629 = (state_16632[(2)]);
var inst_16630 = cljs.core.async.close_BANG_.call(null,out);
var state_16632__$1 = (function (){var statearr_16641 = state_16632;
(statearr_16641[(9)] = inst_16629);

return statearr_16641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16632__$1,inst_16630);
} else {
if((state_val_16633 === (2))){
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16632__$1,(4),ch);
} else {
if((state_val_16633 === (11))){
var inst_16612 = (state_16632[(8)]);
var inst_16621 = (state_16632[(2)]);
var inst_16609 = inst_16612;
var state_16632__$1 = (function (){var statearr_16642 = state_16632;
(statearr_16642[(10)] = inst_16621);

(statearr_16642[(7)] = inst_16609);

return statearr_16642;
})();
var statearr_16643_16661 = state_16632__$1;
(statearr_16643_16661[(2)] = null);

(statearr_16643_16661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (9))){
var inst_16612 = (state_16632[(8)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16632__$1,(11),out,inst_16612);
} else {
if((state_val_16633 === (5))){
var inst_16612 = (state_16632[(8)]);
var inst_16609 = (state_16632[(7)]);
var inst_16616 = cljs.core._EQ_.call(null,inst_16612,inst_16609);
var state_16632__$1 = state_16632;
if(inst_16616){
var statearr_16645_16662 = state_16632__$1;
(statearr_16645_16662[(1)] = (8));

} else {
var statearr_16646_16663 = state_16632__$1;
(statearr_16646_16663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (10))){
var inst_16624 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16647_16664 = state_16632__$1;
(statearr_16647_16664[(2)] = inst_16624);

(statearr_16647_16664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (8))){
var inst_16609 = (state_16632[(7)]);
var tmp16644 = inst_16609;
var inst_16609__$1 = tmp16644;
var state_16632__$1 = (function (){var statearr_16648 = state_16632;
(statearr_16648[(7)] = inst_16609__$1);

return statearr_16648;
})();
var statearr_16649_16665 = state_16632__$1;
(statearr_16649_16665[(2)] = null);

(statearr_16649_16665[(1)] = (2));


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
});})(c__14920__auto___16655,out))
;
return ((function (switch__14825__auto__,c__14920__auto___16655,out){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16650[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16650[(1)] = (1));

return statearr_16650;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16632){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16651){if((e16651 instanceof Object)){
var ex__14829__auto__ = e16651;
var statearr_16652_16666 = state_16632;
(statearr_16652_16666[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16667 = state_16632;
state_16632 = G__16667;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16655,out))
})();
var state__14922__auto__ = (function (){var statearr_16653 = f__14921__auto__.call(null);
(statearr_16653[(6)] = c__14920__auto___16655);

return statearr_16653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16655,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16669 = arguments.length;
switch (G__16669) {
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
var c__14920__auto___16735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16735,out){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16735,out){
return (function (state_16707){
var state_val_16708 = (state_16707[(1)]);
if((state_val_16708 === (7))){
var inst_16703 = (state_16707[(2)]);
var state_16707__$1 = state_16707;
var statearr_16709_16736 = state_16707__$1;
(statearr_16709_16736[(2)] = inst_16703);

(statearr_16709_16736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (1))){
var inst_16670 = (new Array(n));
var inst_16671 = inst_16670;
var inst_16672 = (0);
var state_16707__$1 = (function (){var statearr_16710 = state_16707;
(statearr_16710[(7)] = inst_16672);

(statearr_16710[(8)] = inst_16671);

return statearr_16710;
})();
var statearr_16711_16737 = state_16707__$1;
(statearr_16711_16737[(2)] = null);

(statearr_16711_16737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (4))){
var inst_16675 = (state_16707[(9)]);
var inst_16675__$1 = (state_16707[(2)]);
var inst_16676 = (inst_16675__$1 == null);
var inst_16677 = cljs.core.not.call(null,inst_16676);
var state_16707__$1 = (function (){var statearr_16712 = state_16707;
(statearr_16712[(9)] = inst_16675__$1);

return statearr_16712;
})();
if(inst_16677){
var statearr_16713_16738 = state_16707__$1;
(statearr_16713_16738[(1)] = (5));

} else {
var statearr_16714_16739 = state_16707__$1;
(statearr_16714_16739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (15))){
var inst_16697 = (state_16707[(2)]);
var state_16707__$1 = state_16707;
var statearr_16715_16740 = state_16707__$1;
(statearr_16715_16740[(2)] = inst_16697);

(statearr_16715_16740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (13))){
var state_16707__$1 = state_16707;
var statearr_16716_16741 = state_16707__$1;
(statearr_16716_16741[(2)] = null);

(statearr_16716_16741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (6))){
var inst_16672 = (state_16707[(7)]);
var inst_16693 = (inst_16672 > (0));
var state_16707__$1 = state_16707;
if(cljs.core.truth_(inst_16693)){
var statearr_16717_16742 = state_16707__$1;
(statearr_16717_16742[(1)] = (12));

} else {
var statearr_16718_16743 = state_16707__$1;
(statearr_16718_16743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (3))){
var inst_16705 = (state_16707[(2)]);
var state_16707__$1 = state_16707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16707__$1,inst_16705);
} else {
if((state_val_16708 === (12))){
var inst_16671 = (state_16707[(8)]);
var inst_16695 = cljs.core.vec.call(null,inst_16671);
var state_16707__$1 = state_16707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16707__$1,(15),out,inst_16695);
} else {
if((state_val_16708 === (2))){
var state_16707__$1 = state_16707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16707__$1,(4),ch);
} else {
if((state_val_16708 === (11))){
var inst_16687 = (state_16707[(2)]);
var inst_16688 = (new Array(n));
var inst_16671 = inst_16688;
var inst_16672 = (0);
var state_16707__$1 = (function (){var statearr_16719 = state_16707;
(statearr_16719[(10)] = inst_16687);

(statearr_16719[(7)] = inst_16672);

(statearr_16719[(8)] = inst_16671);

return statearr_16719;
})();
var statearr_16720_16744 = state_16707__$1;
(statearr_16720_16744[(2)] = null);

(statearr_16720_16744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (9))){
var inst_16671 = (state_16707[(8)]);
var inst_16685 = cljs.core.vec.call(null,inst_16671);
var state_16707__$1 = state_16707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16707__$1,(11),out,inst_16685);
} else {
if((state_val_16708 === (5))){
var inst_16680 = (state_16707[(11)]);
var inst_16675 = (state_16707[(9)]);
var inst_16672 = (state_16707[(7)]);
var inst_16671 = (state_16707[(8)]);
var inst_16679 = (inst_16671[inst_16672] = inst_16675);
var inst_16680__$1 = (inst_16672 + (1));
var inst_16681 = (inst_16680__$1 < n);
var state_16707__$1 = (function (){var statearr_16721 = state_16707;
(statearr_16721[(11)] = inst_16680__$1);

(statearr_16721[(12)] = inst_16679);

return statearr_16721;
})();
if(cljs.core.truth_(inst_16681)){
var statearr_16722_16745 = state_16707__$1;
(statearr_16722_16745[(1)] = (8));

} else {
var statearr_16723_16746 = state_16707__$1;
(statearr_16723_16746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (14))){
var inst_16700 = (state_16707[(2)]);
var inst_16701 = cljs.core.async.close_BANG_.call(null,out);
var state_16707__$1 = (function (){var statearr_16725 = state_16707;
(statearr_16725[(13)] = inst_16700);

return statearr_16725;
})();
var statearr_16726_16747 = state_16707__$1;
(statearr_16726_16747[(2)] = inst_16701);

(statearr_16726_16747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (10))){
var inst_16691 = (state_16707[(2)]);
var state_16707__$1 = state_16707;
var statearr_16727_16748 = state_16707__$1;
(statearr_16727_16748[(2)] = inst_16691);

(statearr_16727_16748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (8))){
var inst_16680 = (state_16707[(11)]);
var inst_16671 = (state_16707[(8)]);
var tmp16724 = inst_16671;
var inst_16671__$1 = tmp16724;
var inst_16672 = inst_16680;
var state_16707__$1 = (function (){var statearr_16728 = state_16707;
(statearr_16728[(7)] = inst_16672);

(statearr_16728[(8)] = inst_16671__$1);

return statearr_16728;
})();
var statearr_16729_16749 = state_16707__$1;
(statearr_16729_16749[(2)] = null);

(statearr_16729_16749[(1)] = (2));


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
});})(c__14920__auto___16735,out))
;
return ((function (switch__14825__auto__,c__14920__auto___16735,out){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16730[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16730[(1)] = (1));

return statearr_16730;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16707){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16731){if((e16731 instanceof Object)){
var ex__14829__auto__ = e16731;
var statearr_16732_16750 = state_16707;
(statearr_16732_16750[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16751 = state_16707;
state_16707 = G__16751;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16735,out))
})();
var state__14922__auto__ = (function (){var statearr_16733 = f__14921__auto__.call(null);
(statearr_16733[(6)] = c__14920__auto___16735);

return statearr_16733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16735,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16753 = arguments.length;
switch (G__16753) {
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
var c__14920__auto___16823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___16823,out){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___16823,out){
return (function (state_16795){
var state_val_16796 = (state_16795[(1)]);
if((state_val_16796 === (7))){
var inst_16791 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16797_16824 = state_16795__$1;
(statearr_16797_16824[(2)] = inst_16791);

(statearr_16797_16824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (1))){
var inst_16754 = [];
var inst_16755 = inst_16754;
var inst_16756 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16795__$1 = (function (){var statearr_16798 = state_16795;
(statearr_16798[(7)] = inst_16756);

(statearr_16798[(8)] = inst_16755);

return statearr_16798;
})();
var statearr_16799_16825 = state_16795__$1;
(statearr_16799_16825[(2)] = null);

(statearr_16799_16825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (4))){
var inst_16759 = (state_16795[(9)]);
var inst_16759__$1 = (state_16795[(2)]);
var inst_16760 = (inst_16759__$1 == null);
var inst_16761 = cljs.core.not.call(null,inst_16760);
var state_16795__$1 = (function (){var statearr_16800 = state_16795;
(statearr_16800[(9)] = inst_16759__$1);

return statearr_16800;
})();
if(inst_16761){
var statearr_16801_16826 = state_16795__$1;
(statearr_16801_16826[(1)] = (5));

} else {
var statearr_16802_16827 = state_16795__$1;
(statearr_16802_16827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (15))){
var inst_16785 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16803_16828 = state_16795__$1;
(statearr_16803_16828[(2)] = inst_16785);

(statearr_16803_16828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (13))){
var state_16795__$1 = state_16795;
var statearr_16804_16829 = state_16795__$1;
(statearr_16804_16829[(2)] = null);

(statearr_16804_16829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (6))){
var inst_16755 = (state_16795[(8)]);
var inst_16780 = inst_16755.length;
var inst_16781 = (inst_16780 > (0));
var state_16795__$1 = state_16795;
if(cljs.core.truth_(inst_16781)){
var statearr_16805_16830 = state_16795__$1;
(statearr_16805_16830[(1)] = (12));

} else {
var statearr_16806_16831 = state_16795__$1;
(statearr_16806_16831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (3))){
var inst_16793 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16795__$1,inst_16793);
} else {
if((state_val_16796 === (12))){
var inst_16755 = (state_16795[(8)]);
var inst_16783 = cljs.core.vec.call(null,inst_16755);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16795__$1,(15),out,inst_16783);
} else {
if((state_val_16796 === (2))){
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16795__$1,(4),ch);
} else {
if((state_val_16796 === (11))){
var inst_16759 = (state_16795[(9)]);
var inst_16763 = (state_16795[(10)]);
var inst_16773 = (state_16795[(2)]);
var inst_16774 = [];
var inst_16775 = inst_16774.push(inst_16759);
var inst_16755 = inst_16774;
var inst_16756 = inst_16763;
var state_16795__$1 = (function (){var statearr_16807 = state_16795;
(statearr_16807[(11)] = inst_16773);

(statearr_16807[(7)] = inst_16756);

(statearr_16807[(8)] = inst_16755);

(statearr_16807[(12)] = inst_16775);

return statearr_16807;
})();
var statearr_16808_16832 = state_16795__$1;
(statearr_16808_16832[(2)] = null);

(statearr_16808_16832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (9))){
var inst_16755 = (state_16795[(8)]);
var inst_16771 = cljs.core.vec.call(null,inst_16755);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16795__$1,(11),out,inst_16771);
} else {
if((state_val_16796 === (5))){
var inst_16759 = (state_16795[(9)]);
var inst_16756 = (state_16795[(7)]);
var inst_16763 = (state_16795[(10)]);
var inst_16763__$1 = f.call(null,inst_16759);
var inst_16764 = cljs.core._EQ_.call(null,inst_16763__$1,inst_16756);
var inst_16765 = cljs.core.keyword_identical_QMARK_.call(null,inst_16756,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16766 = ((inst_16764) || (inst_16765));
var state_16795__$1 = (function (){var statearr_16809 = state_16795;
(statearr_16809[(10)] = inst_16763__$1);

return statearr_16809;
})();
if(cljs.core.truth_(inst_16766)){
var statearr_16810_16833 = state_16795__$1;
(statearr_16810_16833[(1)] = (8));

} else {
var statearr_16811_16834 = state_16795__$1;
(statearr_16811_16834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (14))){
var inst_16788 = (state_16795[(2)]);
var inst_16789 = cljs.core.async.close_BANG_.call(null,out);
var state_16795__$1 = (function (){var statearr_16813 = state_16795;
(statearr_16813[(13)] = inst_16788);

return statearr_16813;
})();
var statearr_16814_16835 = state_16795__$1;
(statearr_16814_16835[(2)] = inst_16789);

(statearr_16814_16835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (10))){
var inst_16778 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16815_16836 = state_16795__$1;
(statearr_16815_16836[(2)] = inst_16778);

(statearr_16815_16836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (8))){
var inst_16759 = (state_16795[(9)]);
var inst_16755 = (state_16795[(8)]);
var inst_16763 = (state_16795[(10)]);
var inst_16768 = inst_16755.push(inst_16759);
var tmp16812 = inst_16755;
var inst_16755__$1 = tmp16812;
var inst_16756 = inst_16763;
var state_16795__$1 = (function (){var statearr_16816 = state_16795;
(statearr_16816[(14)] = inst_16768);

(statearr_16816[(7)] = inst_16756);

(statearr_16816[(8)] = inst_16755__$1);

return statearr_16816;
})();
var statearr_16817_16837 = state_16795__$1;
(statearr_16817_16837[(2)] = null);

(statearr_16817_16837[(1)] = (2));


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
});})(c__14920__auto___16823,out))
;
return ((function (switch__14825__auto__,c__14920__auto___16823,out){
return (function() {
var cljs$core$async$state_machine__14826__auto__ = null;
var cljs$core$async$state_machine__14826__auto____0 = (function (){
var statearr_16818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16818[(0)] = cljs$core$async$state_machine__14826__auto__);

(statearr_16818[(1)] = (1));

return statearr_16818;
});
var cljs$core$async$state_machine__14826__auto____1 = (function (state_16795){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_16795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e16819){if((e16819 instanceof Object)){
var ex__14829__auto__ = e16819;
var statearr_16820_16838 = state_16795;
(statearr_16820_16838[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16839 = state_16795;
state_16795 = G__16839;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
cljs$core$async$state_machine__14826__auto__ = function(state_16795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14826__auto____1.call(this,state_16795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14826__auto____0;
cljs$core$async$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14826__auto____1;
return cljs$core$async$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___16823,out))
})();
var state__14922__auto__ = (function (){var statearr_16821 = f__14921__auto__.call(null);
(statearr_16821[(6)] = c__14920__auto___16823);

return statearr_16821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___16823,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1611075880316
