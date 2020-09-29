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
var G__32709 = arguments.length;
switch (G__32709) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32710 = (function (f,blockable,meta32711){
this.f = f;
this.blockable = blockable;
this.meta32711 = meta32711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32712,meta32711__$1){
var self__ = this;
var _32712__$1 = this;
return (new cljs.core.async.t_cljs$core$async32710(self__.f,self__.blockable,meta32711__$1));
});

cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32712){
var self__ = this;
var _32712__$1 = this;
return self__.meta32711;
});

cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32711","meta32711",1799673455,null)], null);
});

cljs.core.async.t_cljs$core$async32710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32710";

cljs.core.async.t_cljs$core$async32710.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32710");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32710.
 */
cljs.core.async.__GT_t_cljs$core$async32710 = (function cljs$core$async$__GT_t_cljs$core$async32710(f__$1,blockable__$1,meta32711){
return (new cljs.core.async.t_cljs$core$async32710(f__$1,blockable__$1,meta32711));
});

}

return (new cljs.core.async.t_cljs$core$async32710(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32716 = arguments.length;
switch (G__32716) {
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
var G__32719 = arguments.length;
switch (G__32719) {
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
var G__32722 = arguments.length;
switch (G__32722) {
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
var val_32724 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32724);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32724,ret){
return (function (){
return fn1.call(null,val_32724);
});})(val_32724,ret))
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
var G__32726 = arguments.length;
switch (G__32726) {
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
var n__4607__auto___32728 = n;
var x_32729 = (0);
while(true){
if((x_32729 < n__4607__auto___32728)){
(a[x_32729] = x_32729);

var G__32730 = (x_32729 + (1));
x_32729 = G__32730;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32731 = (function (flag,meta32732){
this.flag = flag;
this.meta32732 = meta32732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32733,meta32732__$1){
var self__ = this;
var _32733__$1 = this;
return (new cljs.core.async.t_cljs$core$async32731(self__.flag,meta32732__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32733){
var self__ = this;
var _32733__$1 = this;
return self__.meta32732;
});})(flag))
;

cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32731.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32732","meta32732",-946698619,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32731";

cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32731");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32731.
 */
cljs.core.async.__GT_t_cljs$core$async32731 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32731(flag__$1,meta32732){
return (new cljs.core.async.t_cljs$core$async32731(flag__$1,meta32732));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32731(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32734 = (function (flag,cb,meta32735){
this.flag = flag;
this.cb = cb;
this.meta32735 = meta32735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32736,meta32735__$1){
var self__ = this;
var _32736__$1 = this;
return (new cljs.core.async.t_cljs$core$async32734(self__.flag,self__.cb,meta32735__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32735","meta32735",-275257520,null)], null);
});

cljs.core.async.t_cljs$core$async32734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32734";

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32734");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32734.
 */
cljs.core.async.__GT_t_cljs$core$async32734 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32734(flag__$1,cb__$1,meta32735){
return (new cljs.core.async.t_cljs$core$async32734(flag__$1,cb__$1,meta32735));
});

}

return (new cljs.core.async.t_cljs$core$async32734(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32737_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32737_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32738_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32738_SHARP_,port], null));
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
var G__32739 = (i + (1));
i = G__32739;
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
var len__4730__auto___32745 = arguments.length;
var i__4731__auto___32746 = (0);
while(true){
if((i__4731__auto___32746 < len__4730__auto___32745)){
args__4736__auto__.push((arguments[i__4731__auto___32746]));

var G__32747 = (i__4731__auto___32746 + (1));
i__4731__auto___32746 = G__32747;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32742){
var map__32743 = p__32742;
var map__32743__$1 = (((((!((map__32743 == null))))?(((((map__32743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32743):map__32743);
var opts = map__32743__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32740){
var G__32741 = cljs.core.first.call(null,seq32740);
var seq32740__$1 = cljs.core.next.call(null,seq32740);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32741,seq32740__$1);
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
var G__32749 = arguments.length;
switch (G__32749) {
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
var c__32649__auto___32795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___32795){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___32795){
return (function (state_32773){
var state_val_32774 = (state_32773[(1)]);
if((state_val_32774 === (7))){
var inst_32769 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32775_32796 = state_32773__$1;
(statearr_32775_32796[(2)] = inst_32769);

(statearr_32775_32796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (1))){
var state_32773__$1 = state_32773;
var statearr_32776_32797 = state_32773__$1;
(statearr_32776_32797[(2)] = null);

(statearr_32776_32797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (4))){
var inst_32752 = (state_32773[(7)]);
var inst_32752__$1 = (state_32773[(2)]);
var inst_32753 = (inst_32752__$1 == null);
var state_32773__$1 = (function (){var statearr_32777 = state_32773;
(statearr_32777[(7)] = inst_32752__$1);

return statearr_32777;
})();
if(cljs.core.truth_(inst_32753)){
var statearr_32778_32798 = state_32773__$1;
(statearr_32778_32798[(1)] = (5));

} else {
var statearr_32779_32799 = state_32773__$1;
(statearr_32779_32799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (13))){
var state_32773__$1 = state_32773;
var statearr_32780_32800 = state_32773__$1;
(statearr_32780_32800[(2)] = null);

(statearr_32780_32800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (6))){
var inst_32752 = (state_32773[(7)]);
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32773__$1,(11),to,inst_32752);
} else {
if((state_val_32774 === (3))){
var inst_32771 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32773__$1,inst_32771);
} else {
if((state_val_32774 === (12))){
var state_32773__$1 = state_32773;
var statearr_32781_32801 = state_32773__$1;
(statearr_32781_32801[(2)] = null);

(statearr_32781_32801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (2))){
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32773__$1,(4),from);
} else {
if((state_val_32774 === (11))){
var inst_32762 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32762)){
var statearr_32782_32802 = state_32773__$1;
(statearr_32782_32802[(1)] = (12));

} else {
var statearr_32783_32803 = state_32773__$1;
(statearr_32783_32803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (9))){
var state_32773__$1 = state_32773;
var statearr_32784_32804 = state_32773__$1;
(statearr_32784_32804[(2)] = null);

(statearr_32784_32804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (5))){
var state_32773__$1 = state_32773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32785_32805 = state_32773__$1;
(statearr_32785_32805[(1)] = (8));

} else {
var statearr_32786_32806 = state_32773__$1;
(statearr_32786_32806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (14))){
var inst_32767 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32787_32807 = state_32773__$1;
(statearr_32787_32807[(2)] = inst_32767);

(statearr_32787_32807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (10))){
var inst_32759 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32788_32808 = state_32773__$1;
(statearr_32788_32808[(2)] = inst_32759);

(statearr_32788_32808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (8))){
var inst_32756 = cljs.core.async.close_BANG_.call(null,to);
var state_32773__$1 = state_32773;
var statearr_32789_32809 = state_32773__$1;
(statearr_32789_32809[(2)] = inst_32756);

(statearr_32789_32809[(1)] = (10));


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
});})(c__32649__auto___32795))
;
return ((function (switch__32554__auto__,c__32649__auto___32795){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_32790 = [null,null,null,null,null,null,null,null];
(statearr_32790[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_32790[(1)] = (1));

return statearr_32790;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_32773){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_32773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e32791){if((e32791 instanceof Object)){
var ex__32558__auto__ = e32791;
var statearr_32792_32810 = state_32773;
(statearr_32792_32810[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32811 = state_32773;
state_32773 = G__32811;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_32773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_32773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___32795))
})();
var state__32651__auto__ = (function (){var statearr_32793 = f__32650__auto__.call(null);
(statearr_32793[(6)] = c__32649__auto___32795);

return statearr_32793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___32795))
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
return (function (p__32812){
var vec__32813 = p__32812;
var v = cljs.core.nth.call(null,vec__32813,(0),null);
var p = cljs.core.nth.call(null,vec__32813,(1),null);
var job = vec__32813;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32649__auto___32984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___32984,res,vec__32813,v,p,job,jobs,results){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___32984,res,vec__32813,v,p,job,jobs,results){
return (function (state_32820){
var state_val_32821 = (state_32820[(1)]);
if((state_val_32821 === (1))){
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32820__$1,(2),res,v);
} else {
if((state_val_32821 === (2))){
var inst_32817 = (state_32820[(2)]);
var inst_32818 = cljs.core.async.close_BANG_.call(null,res);
var state_32820__$1 = (function (){var statearr_32822 = state_32820;
(statearr_32822[(7)] = inst_32817);

return statearr_32822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32820__$1,inst_32818);
} else {
return null;
}
}
});})(c__32649__auto___32984,res,vec__32813,v,p,job,jobs,results))
;
return ((function (switch__32554__auto__,c__32649__auto___32984,res,vec__32813,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0 = (function (){
var statearr_32823 = [null,null,null,null,null,null,null,null];
(statearr_32823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__);

(statearr_32823[(1)] = (1));

return statearr_32823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1 = (function (state_32820){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_32820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e32824){if((e32824 instanceof Object)){
var ex__32558__auto__ = e32824;
var statearr_32825_32985 = state_32820;
(statearr_32825_32985[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32986 = state_32820;
state_32820 = G__32986;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = function(state_32820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1.call(this,state_32820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___32984,res,vec__32813,v,p,job,jobs,results))
})();
var state__32651__auto__ = (function (){var statearr_32826 = f__32650__auto__.call(null);
(statearr_32826[(6)] = c__32649__auto___32984);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___32984,res,vec__32813,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32827){
var vec__32828 = p__32827;
var v = cljs.core.nth.call(null,vec__32828,(0),null);
var p = cljs.core.nth.call(null,vec__32828,(1),null);
var job = vec__32828;
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
var n__4607__auto___32987 = n;
var __32988 = (0);
while(true){
if((__32988 < n__4607__auto___32987)){
var G__32831_32989 = type;
var G__32831_32990__$1 = (((G__32831_32989 instanceof cljs.core.Keyword))?G__32831_32989.fqn:null);
switch (G__32831_32990__$1) {
case "compute":
var c__32649__auto___32992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32988,c__32649__auto___32992,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (__32988,c__32649__auto___32992,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async){
return (function (state_32844){
var state_val_32845 = (state_32844[(1)]);
if((state_val_32845 === (1))){
var state_32844__$1 = state_32844;
var statearr_32846_32993 = state_32844__$1;
(statearr_32846_32993[(2)] = null);

(statearr_32846_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (2))){
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32844__$1,(4),jobs);
} else {
if((state_val_32845 === (3))){
var inst_32842 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32844__$1,inst_32842);
} else {
if((state_val_32845 === (4))){
var inst_32834 = (state_32844[(2)]);
var inst_32835 = process.call(null,inst_32834);
var state_32844__$1 = state_32844;
if(cljs.core.truth_(inst_32835)){
var statearr_32847_32994 = state_32844__$1;
(statearr_32847_32994[(1)] = (5));

} else {
var statearr_32848_32995 = state_32844__$1;
(statearr_32848_32995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (5))){
var state_32844__$1 = state_32844;
var statearr_32849_32996 = state_32844__$1;
(statearr_32849_32996[(2)] = null);

(statearr_32849_32996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (6))){
var state_32844__$1 = state_32844;
var statearr_32850_32997 = state_32844__$1;
(statearr_32850_32997[(2)] = null);

(statearr_32850_32997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (7))){
var inst_32840 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32851_32998 = state_32844__$1;
(statearr_32851_32998[(2)] = inst_32840);

(statearr_32851_32998[(1)] = (3));


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
});})(__32988,c__32649__auto___32992,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async))
;
return ((function (__32988,switch__32554__auto__,c__32649__auto___32992,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0 = (function (){
var statearr_32852 = [null,null,null,null,null,null,null];
(statearr_32852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__);

(statearr_32852[(1)] = (1));

return statearr_32852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1 = (function (state_32844){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_32844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e32853){if((e32853 instanceof Object)){
var ex__32558__auto__ = e32853;
var statearr_32854_32999 = state_32844;
(statearr_32854_32999[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33000 = state_32844;
state_32844 = G__33000;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = function(state_32844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1.call(this,state_32844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__;
})()
;})(__32988,switch__32554__auto__,c__32649__auto___32992,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async))
})();
var state__32651__auto__ = (function (){var statearr_32855 = f__32650__auto__.call(null);
(statearr_32855[(6)] = c__32649__auto___32992);

return statearr_32855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(__32988,c__32649__auto___32992,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async))
);


break;
case "async":
var c__32649__auto___33001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32988,c__32649__auto___33001,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (__32988,c__32649__auto___33001,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async){
return (function (state_32868){
var state_val_32869 = (state_32868[(1)]);
if((state_val_32869 === (1))){
var state_32868__$1 = state_32868;
var statearr_32870_33002 = state_32868__$1;
(statearr_32870_33002[(2)] = null);

(statearr_32870_33002[(1)] = (2));


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
var inst_32859 = async.call(null,inst_32858);
var state_32868__$1 = state_32868;
if(cljs.core.truth_(inst_32859)){
var statearr_32871_33003 = state_32868__$1;
(statearr_32871_33003[(1)] = (5));

} else {
var statearr_32872_33004 = state_32868__$1;
(statearr_32872_33004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (5))){
var state_32868__$1 = state_32868;
var statearr_32873_33005 = state_32868__$1;
(statearr_32873_33005[(2)] = null);

(statearr_32873_33005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (6))){
var state_32868__$1 = state_32868;
var statearr_32874_33006 = state_32868__$1;
(statearr_32874_33006[(2)] = null);

(statearr_32874_33006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (7))){
var inst_32864 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32875_33007 = state_32868__$1;
(statearr_32875_33007[(2)] = inst_32864);

(statearr_32875_33007[(1)] = (3));


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
});})(__32988,c__32649__auto___33001,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async))
;
return ((function (__32988,switch__32554__auto__,c__32649__auto___33001,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null];
(statearr_32876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1 = (function (state_32868){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_32868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object)){
var ex__32558__auto__ = e32877;
var statearr_32878_33008 = state_32868;
(statearr_32878_33008[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_32868;
state_32868 = G__33009;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = function(state_32868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1.call(this,state_32868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__;
})()
;})(__32988,switch__32554__auto__,c__32649__auto___33001,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async))
})();
var state__32651__auto__ = (function (){var statearr_32879 = f__32650__auto__.call(null);
(statearr_32879[(6)] = c__32649__auto___33001);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(__32988,c__32649__auto___33001,G__32831_32989,G__32831_32990__$1,n__4607__auto___32987,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32831_32990__$1)].join('')));

}

var G__33010 = (__32988 + (1));
__32988 = G__33010;
continue;
} else {
}
break;
}

var c__32649__auto___33011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___33011,jobs,results,process,async){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___33011,jobs,results,process,async){
return (function (state_32901){
var state_val_32902 = (state_32901[(1)]);
if((state_val_32902 === (7))){
var inst_32897 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32903_33012 = state_32901__$1;
(statearr_32903_33012[(2)] = inst_32897);

(statearr_32903_33012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (1))){
var state_32901__$1 = state_32901;
var statearr_32904_33013 = state_32901__$1;
(statearr_32904_33013[(2)] = null);

(statearr_32904_33013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (4))){
var inst_32882 = (state_32901[(7)]);
var inst_32882__$1 = (state_32901[(2)]);
var inst_32883 = (inst_32882__$1 == null);
var state_32901__$1 = (function (){var statearr_32905 = state_32901;
(statearr_32905[(7)] = inst_32882__$1);

return statearr_32905;
})();
if(cljs.core.truth_(inst_32883)){
var statearr_32906_33014 = state_32901__$1;
(statearr_32906_33014[(1)] = (5));

} else {
var statearr_32907_33015 = state_32901__$1;
(statearr_32907_33015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (6))){
var inst_32882 = (state_32901[(7)]);
var inst_32887 = (state_32901[(8)]);
var inst_32887__$1 = cljs.core.async.chan.call(null,(1));
var inst_32888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32889 = [inst_32882,inst_32887__$1];
var inst_32890 = (new cljs.core.PersistentVector(null,2,(5),inst_32888,inst_32889,null));
var state_32901__$1 = (function (){var statearr_32908 = state_32901;
(statearr_32908[(8)] = inst_32887__$1);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32901__$1,(8),jobs,inst_32890);
} else {
if((state_val_32902 === (3))){
var inst_32899 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32901__$1,inst_32899);
} else {
if((state_val_32902 === (2))){
var state_32901__$1 = state_32901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32901__$1,(4),from);
} else {
if((state_val_32902 === (9))){
var inst_32894 = (state_32901[(2)]);
var state_32901__$1 = (function (){var statearr_32909 = state_32901;
(statearr_32909[(9)] = inst_32894);

return statearr_32909;
})();
var statearr_32910_33016 = state_32901__$1;
(statearr_32910_33016[(2)] = null);

(statearr_32910_33016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (5))){
var inst_32885 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32901__$1 = state_32901;
var statearr_32911_33017 = state_32901__$1;
(statearr_32911_33017[(2)] = inst_32885);

(statearr_32911_33017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (8))){
var inst_32887 = (state_32901[(8)]);
var inst_32892 = (state_32901[(2)]);
var state_32901__$1 = (function (){var statearr_32912 = state_32901;
(statearr_32912[(10)] = inst_32892);

return statearr_32912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32901__$1,(9),results,inst_32887);
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
});})(c__32649__auto___33011,jobs,results,process,async))
;
return ((function (switch__32554__auto__,c__32649__auto___33011,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0 = (function (){
var statearr_32913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__);

(statearr_32913[(1)] = (1));

return statearr_32913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1 = (function (state_32901){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_32901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e32914){if((e32914 instanceof Object)){
var ex__32558__auto__ = e32914;
var statearr_32915_33018 = state_32901;
(statearr_32915_33018[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33019 = state_32901;
state_32901 = G__33019;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = function(state_32901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1.call(this,state_32901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___33011,jobs,results,process,async))
})();
var state__32651__auto__ = (function (){var statearr_32916 = f__32650__auto__.call(null);
(statearr_32916[(6)] = c__32649__auto___33011);

return statearr_32916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___33011,jobs,results,process,async))
);


var c__32649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto__,jobs,results,process,async){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto__,jobs,results,process,async){
return (function (state_32954){
var state_val_32955 = (state_32954[(1)]);
if((state_val_32955 === (7))){
var inst_32950 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32956_33020 = state_32954__$1;
(statearr_32956_33020[(2)] = inst_32950);

(statearr_32956_33020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (20))){
var state_32954__$1 = state_32954;
var statearr_32957_33021 = state_32954__$1;
(statearr_32957_33021[(2)] = null);

(statearr_32957_33021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (1))){
var state_32954__$1 = state_32954;
var statearr_32958_33022 = state_32954__$1;
(statearr_32958_33022[(2)] = null);

(statearr_32958_33022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (4))){
var inst_32919 = (state_32954[(7)]);
var inst_32919__$1 = (state_32954[(2)]);
var inst_32920 = (inst_32919__$1 == null);
var state_32954__$1 = (function (){var statearr_32959 = state_32954;
(statearr_32959[(7)] = inst_32919__$1);

return statearr_32959;
})();
if(cljs.core.truth_(inst_32920)){
var statearr_32960_33023 = state_32954__$1;
(statearr_32960_33023[(1)] = (5));

} else {
var statearr_32961_33024 = state_32954__$1;
(statearr_32961_33024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (15))){
var inst_32932 = (state_32954[(8)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32954__$1,(18),to,inst_32932);
} else {
if((state_val_32955 === (21))){
var inst_32945 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32962_33025 = state_32954__$1;
(statearr_32962_33025[(2)] = inst_32945);

(statearr_32962_33025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (13))){
var inst_32947 = (state_32954[(2)]);
var state_32954__$1 = (function (){var statearr_32963 = state_32954;
(statearr_32963[(9)] = inst_32947);

return statearr_32963;
})();
var statearr_32964_33026 = state_32954__$1;
(statearr_32964_33026[(2)] = null);

(statearr_32964_33026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (6))){
var inst_32919 = (state_32954[(7)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32954__$1,(11),inst_32919);
} else {
if((state_val_32955 === (17))){
var inst_32940 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
if(cljs.core.truth_(inst_32940)){
var statearr_32965_33027 = state_32954__$1;
(statearr_32965_33027[(1)] = (19));

} else {
var statearr_32966_33028 = state_32954__$1;
(statearr_32966_33028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (3))){
var inst_32952 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32954__$1,inst_32952);
} else {
if((state_val_32955 === (12))){
var inst_32929 = (state_32954[(10)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32954__$1,(14),inst_32929);
} else {
if((state_val_32955 === (2))){
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32954__$1,(4),results);
} else {
if((state_val_32955 === (19))){
var state_32954__$1 = state_32954;
var statearr_32967_33029 = state_32954__$1;
(statearr_32967_33029[(2)] = null);

(statearr_32967_33029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (11))){
var inst_32929 = (state_32954[(2)]);
var state_32954__$1 = (function (){var statearr_32968 = state_32954;
(statearr_32968[(10)] = inst_32929);

return statearr_32968;
})();
var statearr_32969_33030 = state_32954__$1;
(statearr_32969_33030[(2)] = null);

(statearr_32969_33030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (9))){
var state_32954__$1 = state_32954;
var statearr_32970_33031 = state_32954__$1;
(statearr_32970_33031[(2)] = null);

(statearr_32970_33031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (5))){
var state_32954__$1 = state_32954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32971_33032 = state_32954__$1;
(statearr_32971_33032[(1)] = (8));

} else {
var statearr_32972_33033 = state_32954__$1;
(statearr_32972_33033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (14))){
var inst_32932 = (state_32954[(8)]);
var inst_32934 = (state_32954[(11)]);
var inst_32932__$1 = (state_32954[(2)]);
var inst_32933 = (inst_32932__$1 == null);
var inst_32934__$1 = cljs.core.not.call(null,inst_32933);
var state_32954__$1 = (function (){var statearr_32973 = state_32954;
(statearr_32973[(8)] = inst_32932__$1);

(statearr_32973[(11)] = inst_32934__$1);

return statearr_32973;
})();
if(inst_32934__$1){
var statearr_32974_33034 = state_32954__$1;
(statearr_32974_33034[(1)] = (15));

} else {
var statearr_32975_33035 = state_32954__$1;
(statearr_32975_33035[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (16))){
var inst_32934 = (state_32954[(11)]);
var state_32954__$1 = state_32954;
var statearr_32976_33036 = state_32954__$1;
(statearr_32976_33036[(2)] = inst_32934);

(statearr_32976_33036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (10))){
var inst_32926 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32977_33037 = state_32954__$1;
(statearr_32977_33037[(2)] = inst_32926);

(statearr_32977_33037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (18))){
var inst_32937 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32978_33038 = state_32954__$1;
(statearr_32978_33038[(2)] = inst_32937);

(statearr_32978_33038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (8))){
var inst_32923 = cljs.core.async.close_BANG_.call(null,to);
var state_32954__$1 = state_32954;
var statearr_32979_33039 = state_32954__$1;
(statearr_32979_33039[(2)] = inst_32923);

(statearr_32979_33039[(1)] = (10));


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
});})(c__32649__auto__,jobs,results,process,async))
;
return ((function (switch__32554__auto__,c__32649__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0 = (function (){
var statearr_32980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__);

(statearr_32980[(1)] = (1));

return statearr_32980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1 = (function (state_32954){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_32954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e32981){if((e32981 instanceof Object)){
var ex__32558__auto__ = e32981;
var statearr_32982_33040 = state_32954;
(statearr_32982_33040[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33041 = state_32954;
state_32954 = G__33041;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__ = function(state_32954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1.call(this,state_32954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto__,jobs,results,process,async))
})();
var state__32651__auto__ = (function (){var statearr_32983 = f__32650__auto__.call(null);
(statearr_32983[(6)] = c__32649__auto__);

return statearr_32983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto__,jobs,results,process,async))
);

return c__32649__auto__;
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
var G__33043 = arguments.length;
switch (G__33043) {
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
var G__33046 = arguments.length;
switch (G__33046) {
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
var G__33049 = arguments.length;
switch (G__33049) {
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
var c__32649__auto___33098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___33098,tc,fc){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___33098,tc,fc){
return (function (state_33075){
var state_val_33076 = (state_33075[(1)]);
if((state_val_33076 === (7))){
var inst_33071 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33077_33099 = state_33075__$1;
(statearr_33077_33099[(2)] = inst_33071);

(statearr_33077_33099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (1))){
var state_33075__$1 = state_33075;
var statearr_33078_33100 = state_33075__$1;
(statearr_33078_33100[(2)] = null);

(statearr_33078_33100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (4))){
var inst_33052 = (state_33075[(7)]);
var inst_33052__$1 = (state_33075[(2)]);
var inst_33053 = (inst_33052__$1 == null);
var state_33075__$1 = (function (){var statearr_33079 = state_33075;
(statearr_33079[(7)] = inst_33052__$1);

return statearr_33079;
})();
if(cljs.core.truth_(inst_33053)){
var statearr_33080_33101 = state_33075__$1;
(statearr_33080_33101[(1)] = (5));

} else {
var statearr_33081_33102 = state_33075__$1;
(statearr_33081_33102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (13))){
var state_33075__$1 = state_33075;
var statearr_33082_33103 = state_33075__$1;
(statearr_33082_33103[(2)] = null);

(statearr_33082_33103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (6))){
var inst_33052 = (state_33075[(7)]);
var inst_33058 = p.call(null,inst_33052);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33058)){
var statearr_33083_33104 = state_33075__$1;
(statearr_33083_33104[(1)] = (9));

} else {
var statearr_33084_33105 = state_33075__$1;
(statearr_33084_33105[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (3))){
var inst_33073 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33075__$1,inst_33073);
} else {
if((state_val_33076 === (12))){
var state_33075__$1 = state_33075;
var statearr_33085_33106 = state_33075__$1;
(statearr_33085_33106[(2)] = null);

(statearr_33085_33106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (2))){
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33075__$1,(4),ch);
} else {
if((state_val_33076 === (11))){
var inst_33052 = (state_33075[(7)]);
var inst_33062 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33075__$1,(8),inst_33062,inst_33052);
} else {
if((state_val_33076 === (9))){
var state_33075__$1 = state_33075;
var statearr_33086_33107 = state_33075__$1;
(statearr_33086_33107[(2)] = tc);

(statearr_33086_33107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (5))){
var inst_33055 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33056 = cljs.core.async.close_BANG_.call(null,fc);
var state_33075__$1 = (function (){var statearr_33087 = state_33075;
(statearr_33087[(8)] = inst_33055);

return statearr_33087;
})();
var statearr_33088_33108 = state_33075__$1;
(statearr_33088_33108[(2)] = inst_33056);

(statearr_33088_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (14))){
var inst_33069 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33089_33109 = state_33075__$1;
(statearr_33089_33109[(2)] = inst_33069);

(statearr_33089_33109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (10))){
var state_33075__$1 = state_33075;
var statearr_33090_33110 = state_33075__$1;
(statearr_33090_33110[(2)] = fc);

(statearr_33090_33110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (8))){
var inst_33064 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33064)){
var statearr_33091_33111 = state_33075__$1;
(statearr_33091_33111[(1)] = (12));

} else {
var statearr_33092_33112 = state_33075__$1;
(statearr_33092_33112[(1)] = (13));

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
});})(c__32649__auto___33098,tc,fc))
;
return ((function (switch__32554__auto__,c__32649__auto___33098,tc,fc){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_33093 = [null,null,null,null,null,null,null,null,null];
(statearr_33093[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_33093[(1)] = (1));

return statearr_33093;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_33075){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33094){if((e33094 instanceof Object)){
var ex__32558__auto__ = e33094;
var statearr_33095_33113 = state_33075;
(statearr_33095_33113[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33114 = state_33075;
state_33075 = G__33114;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_33075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_33075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___33098,tc,fc))
})();
var state__32651__auto__ = (function (){var statearr_33096 = f__32650__auto__.call(null);
(statearr_33096[(6)] = c__32649__auto___33098);

return statearr_33096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___33098,tc,fc))
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
var c__32649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto__){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto__){
return (function (state_33135){
var state_val_33136 = (state_33135[(1)]);
if((state_val_33136 === (7))){
var inst_33131 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
var statearr_33137_33155 = state_33135__$1;
(statearr_33137_33155[(2)] = inst_33131);

(statearr_33137_33155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (1))){
var inst_33115 = init;
var state_33135__$1 = (function (){var statearr_33138 = state_33135;
(statearr_33138[(7)] = inst_33115);

return statearr_33138;
})();
var statearr_33139_33156 = state_33135__$1;
(statearr_33139_33156[(2)] = null);

(statearr_33139_33156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (4))){
var inst_33118 = (state_33135[(8)]);
var inst_33118__$1 = (state_33135[(2)]);
var inst_33119 = (inst_33118__$1 == null);
var state_33135__$1 = (function (){var statearr_33140 = state_33135;
(statearr_33140[(8)] = inst_33118__$1);

return statearr_33140;
})();
if(cljs.core.truth_(inst_33119)){
var statearr_33141_33157 = state_33135__$1;
(statearr_33141_33157[(1)] = (5));

} else {
var statearr_33142_33158 = state_33135__$1;
(statearr_33142_33158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (6))){
var inst_33115 = (state_33135[(7)]);
var inst_33122 = (state_33135[(9)]);
var inst_33118 = (state_33135[(8)]);
var inst_33122__$1 = f.call(null,inst_33115,inst_33118);
var inst_33123 = cljs.core.reduced_QMARK_.call(null,inst_33122__$1);
var state_33135__$1 = (function (){var statearr_33143 = state_33135;
(statearr_33143[(9)] = inst_33122__$1);

return statearr_33143;
})();
if(inst_33123){
var statearr_33144_33159 = state_33135__$1;
(statearr_33144_33159[(1)] = (8));

} else {
var statearr_33145_33160 = state_33135__$1;
(statearr_33145_33160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (3))){
var inst_33133 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33135__$1,inst_33133);
} else {
if((state_val_33136 === (2))){
var state_33135__$1 = state_33135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33135__$1,(4),ch);
} else {
if((state_val_33136 === (9))){
var inst_33122 = (state_33135[(9)]);
var inst_33115 = inst_33122;
var state_33135__$1 = (function (){var statearr_33146 = state_33135;
(statearr_33146[(7)] = inst_33115);

return statearr_33146;
})();
var statearr_33147_33161 = state_33135__$1;
(statearr_33147_33161[(2)] = null);

(statearr_33147_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (5))){
var inst_33115 = (state_33135[(7)]);
var state_33135__$1 = state_33135;
var statearr_33148_33162 = state_33135__$1;
(statearr_33148_33162[(2)] = inst_33115);

(statearr_33148_33162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (10))){
var inst_33129 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
var statearr_33149_33163 = state_33135__$1;
(statearr_33149_33163[(2)] = inst_33129);

(statearr_33149_33163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (8))){
var inst_33122 = (state_33135[(9)]);
var inst_33125 = cljs.core.deref.call(null,inst_33122);
var state_33135__$1 = state_33135;
var statearr_33150_33164 = state_33135__$1;
(statearr_33150_33164[(2)] = inst_33125);

(statearr_33150_33164[(1)] = (10));


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
});})(c__32649__auto__))
;
return ((function (switch__32554__auto__,c__32649__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32555__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32555__auto____0 = (function (){
var statearr_33151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33151[(0)] = cljs$core$async$reduce_$_state_machine__32555__auto__);

(statearr_33151[(1)] = (1));

return statearr_33151;
});
var cljs$core$async$reduce_$_state_machine__32555__auto____1 = (function (state_33135){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33152){if((e33152 instanceof Object)){
var ex__32558__auto__ = e33152;
var statearr_33153_33165 = state_33135;
(statearr_33153_33165[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_33135;
state_33135 = G__33166;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32555__auto__ = function(state_33135){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32555__auto____1.call(this,state_33135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32555__auto____0;
cljs$core$async$reduce_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32555__auto____1;
return cljs$core$async$reduce_$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto__))
})();
var state__32651__auto__ = (function (){var statearr_33154 = f__32650__auto__.call(null);
(statearr_33154[(6)] = c__32649__auto__);

return statearr_33154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto__))
);

return c__32649__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto__,f__$1){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto__,f__$1){
return (function (state_33172){
var state_val_33173 = (state_33172[(1)]);
if((state_val_33173 === (1))){
var inst_33167 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33172__$1,(2),inst_33167);
} else {
if((state_val_33173 === (2))){
var inst_33169 = (state_33172[(2)]);
var inst_33170 = f__$1.call(null,inst_33169);
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33172__$1,inst_33170);
} else {
return null;
}
}
});})(c__32649__auto__,f__$1))
;
return ((function (switch__32554__auto__,c__32649__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32555__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32555__auto____0 = (function (){
var statearr_33174 = [null,null,null,null,null,null,null];
(statearr_33174[(0)] = cljs$core$async$transduce_$_state_machine__32555__auto__);

(statearr_33174[(1)] = (1));

return statearr_33174;
});
var cljs$core$async$transduce_$_state_machine__32555__auto____1 = (function (state_33172){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33175){if((e33175 instanceof Object)){
var ex__32558__auto__ = e33175;
var statearr_33176_33178 = state_33172;
(statearr_33176_33178[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33179 = state_33172;
state_33172 = G__33179;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32555__auto__ = function(state_33172){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32555__auto____1.call(this,state_33172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32555__auto____0;
cljs$core$async$transduce_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32555__auto____1;
return cljs$core$async$transduce_$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto__,f__$1))
})();
var state__32651__auto__ = (function (){var statearr_33177 = f__32650__auto__.call(null);
(statearr_33177[(6)] = c__32649__auto__);

return statearr_33177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto__,f__$1))
);

return c__32649__auto__;
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
var G__33181 = arguments.length;
switch (G__33181) {
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
var c__32649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto__){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto__){
return (function (state_33206){
var state_val_33207 = (state_33206[(1)]);
if((state_val_33207 === (7))){
var inst_33188 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33208_33229 = state_33206__$1;
(statearr_33208_33229[(2)] = inst_33188);

(statearr_33208_33229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (1))){
var inst_33182 = cljs.core.seq.call(null,coll);
var inst_33183 = inst_33182;
var state_33206__$1 = (function (){var statearr_33209 = state_33206;
(statearr_33209[(7)] = inst_33183);

return statearr_33209;
})();
var statearr_33210_33230 = state_33206__$1;
(statearr_33210_33230[(2)] = null);

(statearr_33210_33230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (4))){
var inst_33183 = (state_33206[(7)]);
var inst_33186 = cljs.core.first.call(null,inst_33183);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33206__$1,(7),ch,inst_33186);
} else {
if((state_val_33207 === (13))){
var inst_33200 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33211_33231 = state_33206__$1;
(statearr_33211_33231[(2)] = inst_33200);

(statearr_33211_33231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (6))){
var inst_33191 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
if(cljs.core.truth_(inst_33191)){
var statearr_33212_33232 = state_33206__$1;
(statearr_33212_33232[(1)] = (8));

} else {
var statearr_33213_33233 = state_33206__$1;
(statearr_33213_33233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (3))){
var inst_33204 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33206__$1,inst_33204);
} else {
if((state_val_33207 === (12))){
var state_33206__$1 = state_33206;
var statearr_33214_33234 = state_33206__$1;
(statearr_33214_33234[(2)] = null);

(statearr_33214_33234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (2))){
var inst_33183 = (state_33206[(7)]);
var state_33206__$1 = state_33206;
if(cljs.core.truth_(inst_33183)){
var statearr_33215_33235 = state_33206__$1;
(statearr_33215_33235[(1)] = (4));

} else {
var statearr_33216_33236 = state_33206__$1;
(statearr_33216_33236[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (11))){
var inst_33197 = cljs.core.async.close_BANG_.call(null,ch);
var state_33206__$1 = state_33206;
var statearr_33217_33237 = state_33206__$1;
(statearr_33217_33237[(2)] = inst_33197);

(statearr_33217_33237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (9))){
var state_33206__$1 = state_33206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33218_33238 = state_33206__$1;
(statearr_33218_33238[(1)] = (11));

} else {
var statearr_33219_33239 = state_33206__$1;
(statearr_33219_33239[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (5))){
var inst_33183 = (state_33206[(7)]);
var state_33206__$1 = state_33206;
var statearr_33220_33240 = state_33206__$1;
(statearr_33220_33240[(2)] = inst_33183);

(statearr_33220_33240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (10))){
var inst_33202 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33221_33241 = state_33206__$1;
(statearr_33221_33241[(2)] = inst_33202);

(statearr_33221_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (8))){
var inst_33183 = (state_33206[(7)]);
var inst_33193 = cljs.core.next.call(null,inst_33183);
var inst_33183__$1 = inst_33193;
var state_33206__$1 = (function (){var statearr_33222 = state_33206;
(statearr_33222[(7)] = inst_33183__$1);

return statearr_33222;
})();
var statearr_33223_33242 = state_33206__$1;
(statearr_33223_33242[(2)] = null);

(statearr_33223_33242[(1)] = (2));


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
});})(c__32649__auto__))
;
return ((function (switch__32554__auto__,c__32649__auto__){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_33224 = [null,null,null,null,null,null,null,null];
(statearr_33224[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_33224[(1)] = (1));

return statearr_33224;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_33206){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33225){if((e33225 instanceof Object)){
var ex__32558__auto__ = e33225;
var statearr_33226_33243 = state_33206;
(statearr_33226_33243[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33244 = state_33206;
state_33206 = G__33244;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_33206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_33206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto__))
})();
var state__32651__auto__ = (function (){var statearr_33227 = f__32650__auto__.call(null);
(statearr_33227[(6)] = c__32649__auto__);

return statearr_33227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto__))
);

return c__32649__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33245 = (function (ch,cs,meta33246){
this.ch = ch;
this.cs = cs;
this.meta33246 = meta33246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33247,meta33246__$1){
var self__ = this;
var _33247__$1 = this;
return (new cljs.core.async.t_cljs$core$async33245(self__.ch,self__.cs,meta33246__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33247){
var self__ = this;
var _33247__$1 = this;
return self__.meta33246;
});})(cs))
;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33245.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33246","meta33246",-1847824854,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33245";

cljs.core.async.t_cljs$core$async33245.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33245");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33245.
 */
cljs.core.async.__GT_t_cljs$core$async33245 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33245(ch__$1,cs__$1,meta33246){
return (new cljs.core.async.t_cljs$core$async33245(ch__$1,cs__$1,meta33246));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33245(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32649__auto___33467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___33467,cs,m,dchan,dctr,done){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___33467,cs,m,dchan,dctr,done){
return (function (state_33382){
var state_val_33383 = (state_33382[(1)]);
if((state_val_33383 === (7))){
var inst_33378 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33384_33468 = state_33382__$1;
(statearr_33384_33468[(2)] = inst_33378);

(statearr_33384_33468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (20))){
var inst_33281 = (state_33382[(7)]);
var inst_33293 = cljs.core.first.call(null,inst_33281);
var inst_33294 = cljs.core.nth.call(null,inst_33293,(0),null);
var inst_33295 = cljs.core.nth.call(null,inst_33293,(1),null);
var state_33382__$1 = (function (){var statearr_33385 = state_33382;
(statearr_33385[(8)] = inst_33294);

return statearr_33385;
})();
if(cljs.core.truth_(inst_33295)){
var statearr_33386_33469 = state_33382__$1;
(statearr_33386_33469[(1)] = (22));

} else {
var statearr_33387_33470 = state_33382__$1;
(statearr_33387_33470[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (27))){
var inst_33330 = (state_33382[(9)]);
var inst_33325 = (state_33382[(10)]);
var inst_33323 = (state_33382[(11)]);
var inst_33250 = (state_33382[(12)]);
var inst_33330__$1 = cljs.core._nth.call(null,inst_33323,inst_33325);
var inst_33331 = cljs.core.async.put_BANG_.call(null,inst_33330__$1,inst_33250,done);
var state_33382__$1 = (function (){var statearr_33388 = state_33382;
(statearr_33388[(9)] = inst_33330__$1);

return statearr_33388;
})();
if(cljs.core.truth_(inst_33331)){
var statearr_33389_33471 = state_33382__$1;
(statearr_33389_33471[(1)] = (30));

} else {
var statearr_33390_33472 = state_33382__$1;
(statearr_33390_33472[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (1))){
var state_33382__$1 = state_33382;
var statearr_33391_33473 = state_33382__$1;
(statearr_33391_33473[(2)] = null);

(statearr_33391_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (24))){
var inst_33281 = (state_33382[(7)]);
var inst_33300 = (state_33382[(2)]);
var inst_33301 = cljs.core.next.call(null,inst_33281);
var inst_33259 = inst_33301;
var inst_33260 = null;
var inst_33261 = (0);
var inst_33262 = (0);
var state_33382__$1 = (function (){var statearr_33392 = state_33382;
(statearr_33392[(13)] = inst_33259);

(statearr_33392[(14)] = inst_33260);

(statearr_33392[(15)] = inst_33262);

(statearr_33392[(16)] = inst_33261);

(statearr_33392[(17)] = inst_33300);

return statearr_33392;
})();
var statearr_33393_33474 = state_33382__$1;
(statearr_33393_33474[(2)] = null);

(statearr_33393_33474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (39))){
var state_33382__$1 = state_33382;
var statearr_33397_33475 = state_33382__$1;
(statearr_33397_33475[(2)] = null);

(statearr_33397_33475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (4))){
var inst_33250 = (state_33382[(12)]);
var inst_33250__$1 = (state_33382[(2)]);
var inst_33251 = (inst_33250__$1 == null);
var state_33382__$1 = (function (){var statearr_33398 = state_33382;
(statearr_33398[(12)] = inst_33250__$1);

return statearr_33398;
})();
if(cljs.core.truth_(inst_33251)){
var statearr_33399_33476 = state_33382__$1;
(statearr_33399_33476[(1)] = (5));

} else {
var statearr_33400_33477 = state_33382__$1;
(statearr_33400_33477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (15))){
var inst_33259 = (state_33382[(13)]);
var inst_33260 = (state_33382[(14)]);
var inst_33262 = (state_33382[(15)]);
var inst_33261 = (state_33382[(16)]);
var inst_33277 = (state_33382[(2)]);
var inst_33278 = (inst_33262 + (1));
var tmp33394 = inst_33259;
var tmp33395 = inst_33260;
var tmp33396 = inst_33261;
var inst_33259__$1 = tmp33394;
var inst_33260__$1 = tmp33395;
var inst_33261__$1 = tmp33396;
var inst_33262__$1 = inst_33278;
var state_33382__$1 = (function (){var statearr_33401 = state_33382;
(statearr_33401[(18)] = inst_33277);

(statearr_33401[(13)] = inst_33259__$1);

(statearr_33401[(14)] = inst_33260__$1);

(statearr_33401[(15)] = inst_33262__$1);

(statearr_33401[(16)] = inst_33261__$1);

return statearr_33401;
})();
var statearr_33402_33478 = state_33382__$1;
(statearr_33402_33478[(2)] = null);

(statearr_33402_33478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (21))){
var inst_33304 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33406_33479 = state_33382__$1;
(statearr_33406_33479[(2)] = inst_33304);

(statearr_33406_33479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (31))){
var inst_33330 = (state_33382[(9)]);
var inst_33334 = done.call(null,null);
var inst_33335 = cljs.core.async.untap_STAR_.call(null,m,inst_33330);
var state_33382__$1 = (function (){var statearr_33407 = state_33382;
(statearr_33407[(19)] = inst_33334);

return statearr_33407;
})();
var statearr_33408_33480 = state_33382__$1;
(statearr_33408_33480[(2)] = inst_33335);

(statearr_33408_33480[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (32))){
var inst_33325 = (state_33382[(10)]);
var inst_33323 = (state_33382[(11)]);
var inst_33324 = (state_33382[(20)]);
var inst_33322 = (state_33382[(21)]);
var inst_33337 = (state_33382[(2)]);
var inst_33338 = (inst_33325 + (1));
var tmp33403 = inst_33323;
var tmp33404 = inst_33324;
var tmp33405 = inst_33322;
var inst_33322__$1 = tmp33405;
var inst_33323__$1 = tmp33403;
var inst_33324__$1 = tmp33404;
var inst_33325__$1 = inst_33338;
var state_33382__$1 = (function (){var statearr_33409 = state_33382;
(statearr_33409[(22)] = inst_33337);

(statearr_33409[(10)] = inst_33325__$1);

(statearr_33409[(11)] = inst_33323__$1);

(statearr_33409[(20)] = inst_33324__$1);

(statearr_33409[(21)] = inst_33322__$1);

return statearr_33409;
})();
var statearr_33410_33481 = state_33382__$1;
(statearr_33410_33481[(2)] = null);

(statearr_33410_33481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (40))){
var inst_33350 = (state_33382[(23)]);
var inst_33354 = done.call(null,null);
var inst_33355 = cljs.core.async.untap_STAR_.call(null,m,inst_33350);
var state_33382__$1 = (function (){var statearr_33411 = state_33382;
(statearr_33411[(24)] = inst_33354);

return statearr_33411;
})();
var statearr_33412_33482 = state_33382__$1;
(statearr_33412_33482[(2)] = inst_33355);

(statearr_33412_33482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (33))){
var inst_33341 = (state_33382[(25)]);
var inst_33343 = cljs.core.chunked_seq_QMARK_.call(null,inst_33341);
var state_33382__$1 = state_33382;
if(inst_33343){
var statearr_33413_33483 = state_33382__$1;
(statearr_33413_33483[(1)] = (36));

} else {
var statearr_33414_33484 = state_33382__$1;
(statearr_33414_33484[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (13))){
var inst_33271 = (state_33382[(26)]);
var inst_33274 = cljs.core.async.close_BANG_.call(null,inst_33271);
var state_33382__$1 = state_33382;
var statearr_33415_33485 = state_33382__$1;
(statearr_33415_33485[(2)] = inst_33274);

(statearr_33415_33485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (22))){
var inst_33294 = (state_33382[(8)]);
var inst_33297 = cljs.core.async.close_BANG_.call(null,inst_33294);
var state_33382__$1 = state_33382;
var statearr_33416_33486 = state_33382__$1;
(statearr_33416_33486[(2)] = inst_33297);

(statearr_33416_33486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (36))){
var inst_33341 = (state_33382[(25)]);
var inst_33345 = cljs.core.chunk_first.call(null,inst_33341);
var inst_33346 = cljs.core.chunk_rest.call(null,inst_33341);
var inst_33347 = cljs.core.count.call(null,inst_33345);
var inst_33322 = inst_33346;
var inst_33323 = inst_33345;
var inst_33324 = inst_33347;
var inst_33325 = (0);
var state_33382__$1 = (function (){var statearr_33417 = state_33382;
(statearr_33417[(10)] = inst_33325);

(statearr_33417[(11)] = inst_33323);

(statearr_33417[(20)] = inst_33324);

(statearr_33417[(21)] = inst_33322);

return statearr_33417;
})();
var statearr_33418_33487 = state_33382__$1;
(statearr_33418_33487[(2)] = null);

(statearr_33418_33487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (41))){
var inst_33341 = (state_33382[(25)]);
var inst_33357 = (state_33382[(2)]);
var inst_33358 = cljs.core.next.call(null,inst_33341);
var inst_33322 = inst_33358;
var inst_33323 = null;
var inst_33324 = (0);
var inst_33325 = (0);
var state_33382__$1 = (function (){var statearr_33419 = state_33382;
(statearr_33419[(10)] = inst_33325);

(statearr_33419[(11)] = inst_33323);

(statearr_33419[(20)] = inst_33324);

(statearr_33419[(27)] = inst_33357);

(statearr_33419[(21)] = inst_33322);

return statearr_33419;
})();
var statearr_33420_33488 = state_33382__$1;
(statearr_33420_33488[(2)] = null);

(statearr_33420_33488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (43))){
var state_33382__$1 = state_33382;
var statearr_33421_33489 = state_33382__$1;
(statearr_33421_33489[(2)] = null);

(statearr_33421_33489[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (29))){
var inst_33366 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33422_33490 = state_33382__$1;
(statearr_33422_33490[(2)] = inst_33366);

(statearr_33422_33490[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (44))){
var inst_33375 = (state_33382[(2)]);
var state_33382__$1 = (function (){var statearr_33423 = state_33382;
(statearr_33423[(28)] = inst_33375);

return statearr_33423;
})();
var statearr_33424_33491 = state_33382__$1;
(statearr_33424_33491[(2)] = null);

(statearr_33424_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (6))){
var inst_33314 = (state_33382[(29)]);
var inst_33313 = cljs.core.deref.call(null,cs);
var inst_33314__$1 = cljs.core.keys.call(null,inst_33313);
var inst_33315 = cljs.core.count.call(null,inst_33314__$1);
var inst_33316 = cljs.core.reset_BANG_.call(null,dctr,inst_33315);
var inst_33321 = cljs.core.seq.call(null,inst_33314__$1);
var inst_33322 = inst_33321;
var inst_33323 = null;
var inst_33324 = (0);
var inst_33325 = (0);
var state_33382__$1 = (function (){var statearr_33425 = state_33382;
(statearr_33425[(10)] = inst_33325);

(statearr_33425[(11)] = inst_33323);

(statearr_33425[(20)] = inst_33324);

(statearr_33425[(30)] = inst_33316);

(statearr_33425[(29)] = inst_33314__$1);

(statearr_33425[(21)] = inst_33322);

return statearr_33425;
})();
var statearr_33426_33492 = state_33382__$1;
(statearr_33426_33492[(2)] = null);

(statearr_33426_33492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (28))){
var inst_33341 = (state_33382[(25)]);
var inst_33322 = (state_33382[(21)]);
var inst_33341__$1 = cljs.core.seq.call(null,inst_33322);
var state_33382__$1 = (function (){var statearr_33427 = state_33382;
(statearr_33427[(25)] = inst_33341__$1);

return statearr_33427;
})();
if(inst_33341__$1){
var statearr_33428_33493 = state_33382__$1;
(statearr_33428_33493[(1)] = (33));

} else {
var statearr_33429_33494 = state_33382__$1;
(statearr_33429_33494[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (25))){
var inst_33325 = (state_33382[(10)]);
var inst_33324 = (state_33382[(20)]);
var inst_33327 = (inst_33325 < inst_33324);
var inst_33328 = inst_33327;
var state_33382__$1 = state_33382;
if(cljs.core.truth_(inst_33328)){
var statearr_33430_33495 = state_33382__$1;
(statearr_33430_33495[(1)] = (27));

} else {
var statearr_33431_33496 = state_33382__$1;
(statearr_33431_33496[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (34))){
var state_33382__$1 = state_33382;
var statearr_33432_33497 = state_33382__$1;
(statearr_33432_33497[(2)] = null);

(statearr_33432_33497[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (17))){
var state_33382__$1 = state_33382;
var statearr_33433_33498 = state_33382__$1;
(statearr_33433_33498[(2)] = null);

(statearr_33433_33498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (3))){
var inst_33380 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33382__$1,inst_33380);
} else {
if((state_val_33383 === (12))){
var inst_33309 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33434_33499 = state_33382__$1;
(statearr_33434_33499[(2)] = inst_33309);

(statearr_33434_33499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (2))){
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33382__$1,(4),ch);
} else {
if((state_val_33383 === (23))){
var state_33382__$1 = state_33382;
var statearr_33435_33500 = state_33382__$1;
(statearr_33435_33500[(2)] = null);

(statearr_33435_33500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (35))){
var inst_33364 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33436_33501 = state_33382__$1;
(statearr_33436_33501[(2)] = inst_33364);

(statearr_33436_33501[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (19))){
var inst_33281 = (state_33382[(7)]);
var inst_33285 = cljs.core.chunk_first.call(null,inst_33281);
var inst_33286 = cljs.core.chunk_rest.call(null,inst_33281);
var inst_33287 = cljs.core.count.call(null,inst_33285);
var inst_33259 = inst_33286;
var inst_33260 = inst_33285;
var inst_33261 = inst_33287;
var inst_33262 = (0);
var state_33382__$1 = (function (){var statearr_33437 = state_33382;
(statearr_33437[(13)] = inst_33259);

(statearr_33437[(14)] = inst_33260);

(statearr_33437[(15)] = inst_33262);

(statearr_33437[(16)] = inst_33261);

return statearr_33437;
})();
var statearr_33438_33502 = state_33382__$1;
(statearr_33438_33502[(2)] = null);

(statearr_33438_33502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (11))){
var inst_33259 = (state_33382[(13)]);
var inst_33281 = (state_33382[(7)]);
var inst_33281__$1 = cljs.core.seq.call(null,inst_33259);
var state_33382__$1 = (function (){var statearr_33439 = state_33382;
(statearr_33439[(7)] = inst_33281__$1);

return statearr_33439;
})();
if(inst_33281__$1){
var statearr_33440_33503 = state_33382__$1;
(statearr_33440_33503[(1)] = (16));

} else {
var statearr_33441_33504 = state_33382__$1;
(statearr_33441_33504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (9))){
var inst_33311 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33442_33505 = state_33382__$1;
(statearr_33442_33505[(2)] = inst_33311);

(statearr_33442_33505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (5))){
var inst_33257 = cljs.core.deref.call(null,cs);
var inst_33258 = cljs.core.seq.call(null,inst_33257);
var inst_33259 = inst_33258;
var inst_33260 = null;
var inst_33261 = (0);
var inst_33262 = (0);
var state_33382__$1 = (function (){var statearr_33443 = state_33382;
(statearr_33443[(13)] = inst_33259);

(statearr_33443[(14)] = inst_33260);

(statearr_33443[(15)] = inst_33262);

(statearr_33443[(16)] = inst_33261);

return statearr_33443;
})();
var statearr_33444_33506 = state_33382__$1;
(statearr_33444_33506[(2)] = null);

(statearr_33444_33506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (14))){
var state_33382__$1 = state_33382;
var statearr_33445_33507 = state_33382__$1;
(statearr_33445_33507[(2)] = null);

(statearr_33445_33507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (45))){
var inst_33372 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33446_33508 = state_33382__$1;
(statearr_33446_33508[(2)] = inst_33372);

(statearr_33446_33508[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (26))){
var inst_33314 = (state_33382[(29)]);
var inst_33368 = (state_33382[(2)]);
var inst_33369 = cljs.core.seq.call(null,inst_33314);
var state_33382__$1 = (function (){var statearr_33447 = state_33382;
(statearr_33447[(31)] = inst_33368);

return statearr_33447;
})();
if(inst_33369){
var statearr_33448_33509 = state_33382__$1;
(statearr_33448_33509[(1)] = (42));

} else {
var statearr_33449_33510 = state_33382__$1;
(statearr_33449_33510[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (16))){
var inst_33281 = (state_33382[(7)]);
var inst_33283 = cljs.core.chunked_seq_QMARK_.call(null,inst_33281);
var state_33382__$1 = state_33382;
if(inst_33283){
var statearr_33450_33511 = state_33382__$1;
(statearr_33450_33511[(1)] = (19));

} else {
var statearr_33451_33512 = state_33382__$1;
(statearr_33451_33512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (38))){
var inst_33361 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33452_33513 = state_33382__$1;
(statearr_33452_33513[(2)] = inst_33361);

(statearr_33452_33513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (30))){
var state_33382__$1 = state_33382;
var statearr_33453_33514 = state_33382__$1;
(statearr_33453_33514[(2)] = null);

(statearr_33453_33514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (10))){
var inst_33260 = (state_33382[(14)]);
var inst_33262 = (state_33382[(15)]);
var inst_33270 = cljs.core._nth.call(null,inst_33260,inst_33262);
var inst_33271 = cljs.core.nth.call(null,inst_33270,(0),null);
var inst_33272 = cljs.core.nth.call(null,inst_33270,(1),null);
var state_33382__$1 = (function (){var statearr_33454 = state_33382;
(statearr_33454[(26)] = inst_33271);

return statearr_33454;
})();
if(cljs.core.truth_(inst_33272)){
var statearr_33455_33515 = state_33382__$1;
(statearr_33455_33515[(1)] = (13));

} else {
var statearr_33456_33516 = state_33382__$1;
(statearr_33456_33516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (18))){
var inst_33307 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33457_33517 = state_33382__$1;
(statearr_33457_33517[(2)] = inst_33307);

(statearr_33457_33517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (42))){
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33382__$1,(45),dchan);
} else {
if((state_val_33383 === (37))){
var inst_33350 = (state_33382[(23)]);
var inst_33341 = (state_33382[(25)]);
var inst_33250 = (state_33382[(12)]);
var inst_33350__$1 = cljs.core.first.call(null,inst_33341);
var inst_33351 = cljs.core.async.put_BANG_.call(null,inst_33350__$1,inst_33250,done);
var state_33382__$1 = (function (){var statearr_33458 = state_33382;
(statearr_33458[(23)] = inst_33350__$1);

return statearr_33458;
})();
if(cljs.core.truth_(inst_33351)){
var statearr_33459_33518 = state_33382__$1;
(statearr_33459_33518[(1)] = (39));

} else {
var statearr_33460_33519 = state_33382__$1;
(statearr_33460_33519[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (8))){
var inst_33262 = (state_33382[(15)]);
var inst_33261 = (state_33382[(16)]);
var inst_33264 = (inst_33262 < inst_33261);
var inst_33265 = inst_33264;
var state_33382__$1 = state_33382;
if(cljs.core.truth_(inst_33265)){
var statearr_33461_33520 = state_33382__$1;
(statearr_33461_33520[(1)] = (10));

} else {
var statearr_33462_33521 = state_33382__$1;
(statearr_33462_33521[(1)] = (11));

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
});})(c__32649__auto___33467,cs,m,dchan,dctr,done))
;
return ((function (switch__32554__auto__,c__32649__auto___33467,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32555__auto__ = null;
var cljs$core$async$mult_$_state_machine__32555__auto____0 = (function (){
var statearr_33463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33463[(0)] = cljs$core$async$mult_$_state_machine__32555__auto__);

(statearr_33463[(1)] = (1));

return statearr_33463;
});
var cljs$core$async$mult_$_state_machine__32555__auto____1 = (function (state_33382){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33464){if((e33464 instanceof Object)){
var ex__32558__auto__ = e33464;
var statearr_33465_33522 = state_33382;
(statearr_33465_33522[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33523 = state_33382;
state_33382 = G__33523;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32555__auto__ = function(state_33382){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32555__auto____1.call(this,state_33382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32555__auto____0;
cljs$core$async$mult_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32555__auto____1;
return cljs$core$async$mult_$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___33467,cs,m,dchan,dctr,done))
})();
var state__32651__auto__ = (function (){var statearr_33466 = f__32650__auto__.call(null);
(statearr_33466[(6)] = c__32649__auto___33467);

return statearr_33466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___33467,cs,m,dchan,dctr,done))
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
var G__33525 = arguments.length;
switch (G__33525) {
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
var len__4730__auto___33537 = arguments.length;
var i__4731__auto___33538 = (0);
while(true){
if((i__4731__auto___33538 < len__4730__auto___33537)){
args__4736__auto__.push((arguments[i__4731__auto___33538]));

var G__33539 = (i__4731__auto___33538 + (1));
i__4731__auto___33538 = G__33539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33531){
var map__33532 = p__33531;
var map__33532__$1 = (((((!((map__33532 == null))))?(((((map__33532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33532):map__33532);
var opts = map__33532__$1;
var statearr_33534_33540 = state;
(statearr_33534_33540[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33532,map__33532__$1,opts){
return (function (val){
var statearr_33535_33541 = state;
(statearr_33535_33541[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33532,map__33532__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33536_33542 = state;
(statearr_33536_33542[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33527){
var G__33528 = cljs.core.first.call(null,seq33527);
var seq33527__$1 = cljs.core.next.call(null,seq33527);
var G__33529 = cljs.core.first.call(null,seq33527__$1);
var seq33527__$2 = cljs.core.next.call(null,seq33527__$1);
var G__33530 = cljs.core.first.call(null,seq33527__$2);
var seq33527__$3 = cljs.core.next.call(null,seq33527__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33528,G__33529,G__33530,seq33527__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33543 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33544){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33544 = meta33544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33545,meta33544__$1){
var self__ = this;
var _33545__$1 = this;
return (new cljs.core.async.t_cljs$core$async33543(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33544__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33545){
var self__ = this;
var _33545__$1 = this;
return self__.meta33544;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33543.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33544","meta33544",-1716153553,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33543";

cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33543");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33543.
 */
cljs.core.async.__GT_t_cljs$core$async33543 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33543(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33544){
return (new cljs.core.async.t_cljs$core$async33543(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33544));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33543(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32649__auto___33707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___33707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___33707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33647){
var state_val_33648 = (state_33647[(1)]);
if((state_val_33648 === (7))){
var inst_33562 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
var statearr_33649_33708 = state_33647__$1;
(statearr_33649_33708[(2)] = inst_33562);

(statearr_33649_33708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (20))){
var inst_33574 = (state_33647[(7)]);
var state_33647__$1 = state_33647;
var statearr_33650_33709 = state_33647__$1;
(statearr_33650_33709[(2)] = inst_33574);

(statearr_33650_33709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (27))){
var state_33647__$1 = state_33647;
var statearr_33651_33710 = state_33647__$1;
(statearr_33651_33710[(2)] = null);

(statearr_33651_33710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (1))){
var inst_33549 = (state_33647[(8)]);
var inst_33549__$1 = calc_state.call(null);
var inst_33551 = (inst_33549__$1 == null);
var inst_33552 = cljs.core.not.call(null,inst_33551);
var state_33647__$1 = (function (){var statearr_33652 = state_33647;
(statearr_33652[(8)] = inst_33549__$1);

return statearr_33652;
})();
if(inst_33552){
var statearr_33653_33711 = state_33647__$1;
(statearr_33653_33711[(1)] = (2));

} else {
var statearr_33654_33712 = state_33647__$1;
(statearr_33654_33712[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (24))){
var inst_33598 = (state_33647[(9)]);
var inst_33621 = (state_33647[(10)]);
var inst_33607 = (state_33647[(11)]);
var inst_33621__$1 = inst_33598.call(null,inst_33607);
var state_33647__$1 = (function (){var statearr_33655 = state_33647;
(statearr_33655[(10)] = inst_33621__$1);

return statearr_33655;
})();
if(cljs.core.truth_(inst_33621__$1)){
var statearr_33656_33713 = state_33647__$1;
(statearr_33656_33713[(1)] = (29));

} else {
var statearr_33657_33714 = state_33647__$1;
(statearr_33657_33714[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (4))){
var inst_33565 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
if(cljs.core.truth_(inst_33565)){
var statearr_33658_33715 = state_33647__$1;
(statearr_33658_33715[(1)] = (8));

} else {
var statearr_33659_33716 = state_33647__$1;
(statearr_33659_33716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (15))){
var inst_33592 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
if(cljs.core.truth_(inst_33592)){
var statearr_33660_33717 = state_33647__$1;
(statearr_33660_33717[(1)] = (19));

} else {
var statearr_33661_33718 = state_33647__$1;
(statearr_33661_33718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (21))){
var inst_33597 = (state_33647[(12)]);
var inst_33597__$1 = (state_33647[(2)]);
var inst_33598 = cljs.core.get.call(null,inst_33597__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33599 = cljs.core.get.call(null,inst_33597__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33600 = cljs.core.get.call(null,inst_33597__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33647__$1 = (function (){var statearr_33662 = state_33647;
(statearr_33662[(9)] = inst_33598);

(statearr_33662[(12)] = inst_33597__$1);

(statearr_33662[(13)] = inst_33599);

return statearr_33662;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33647__$1,(22),inst_33600);
} else {
if((state_val_33648 === (31))){
var inst_33629 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
if(cljs.core.truth_(inst_33629)){
var statearr_33663_33719 = state_33647__$1;
(statearr_33663_33719[(1)] = (32));

} else {
var statearr_33664_33720 = state_33647__$1;
(statearr_33664_33720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (32))){
var inst_33606 = (state_33647[(14)]);
var state_33647__$1 = state_33647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33647__$1,(35),out,inst_33606);
} else {
if((state_val_33648 === (33))){
var inst_33597 = (state_33647[(12)]);
var inst_33574 = inst_33597;
var state_33647__$1 = (function (){var statearr_33665 = state_33647;
(statearr_33665[(7)] = inst_33574);

return statearr_33665;
})();
var statearr_33666_33721 = state_33647__$1;
(statearr_33666_33721[(2)] = null);

(statearr_33666_33721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (13))){
var inst_33574 = (state_33647[(7)]);
var inst_33581 = inst_33574.cljs$lang$protocol_mask$partition0$;
var inst_33582 = (inst_33581 & (64));
var inst_33583 = inst_33574.cljs$core$ISeq$;
var inst_33584 = (cljs.core.PROTOCOL_SENTINEL === inst_33583);
var inst_33585 = ((inst_33582) || (inst_33584));
var state_33647__$1 = state_33647;
if(cljs.core.truth_(inst_33585)){
var statearr_33667_33722 = state_33647__$1;
(statearr_33667_33722[(1)] = (16));

} else {
var statearr_33668_33723 = state_33647__$1;
(statearr_33668_33723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (22))){
var inst_33606 = (state_33647[(14)]);
var inst_33607 = (state_33647[(11)]);
var inst_33605 = (state_33647[(2)]);
var inst_33606__$1 = cljs.core.nth.call(null,inst_33605,(0),null);
var inst_33607__$1 = cljs.core.nth.call(null,inst_33605,(1),null);
var inst_33608 = (inst_33606__$1 == null);
var inst_33609 = cljs.core._EQ_.call(null,inst_33607__$1,change);
var inst_33610 = ((inst_33608) || (inst_33609));
var state_33647__$1 = (function (){var statearr_33669 = state_33647;
(statearr_33669[(14)] = inst_33606__$1);

(statearr_33669[(11)] = inst_33607__$1);

return statearr_33669;
})();
if(cljs.core.truth_(inst_33610)){
var statearr_33670_33724 = state_33647__$1;
(statearr_33670_33724[(1)] = (23));

} else {
var statearr_33671_33725 = state_33647__$1;
(statearr_33671_33725[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (36))){
var inst_33597 = (state_33647[(12)]);
var inst_33574 = inst_33597;
var state_33647__$1 = (function (){var statearr_33672 = state_33647;
(statearr_33672[(7)] = inst_33574);

return statearr_33672;
})();
var statearr_33673_33726 = state_33647__$1;
(statearr_33673_33726[(2)] = null);

(statearr_33673_33726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (29))){
var inst_33621 = (state_33647[(10)]);
var state_33647__$1 = state_33647;
var statearr_33674_33727 = state_33647__$1;
(statearr_33674_33727[(2)] = inst_33621);

(statearr_33674_33727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (6))){
var state_33647__$1 = state_33647;
var statearr_33675_33728 = state_33647__$1;
(statearr_33675_33728[(2)] = false);

(statearr_33675_33728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (28))){
var inst_33617 = (state_33647[(2)]);
var inst_33618 = calc_state.call(null);
var inst_33574 = inst_33618;
var state_33647__$1 = (function (){var statearr_33676 = state_33647;
(statearr_33676[(7)] = inst_33574);

(statearr_33676[(15)] = inst_33617);

return statearr_33676;
})();
var statearr_33677_33729 = state_33647__$1;
(statearr_33677_33729[(2)] = null);

(statearr_33677_33729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (25))){
var inst_33643 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
var statearr_33678_33730 = state_33647__$1;
(statearr_33678_33730[(2)] = inst_33643);

(statearr_33678_33730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (34))){
var inst_33641 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
var statearr_33679_33731 = state_33647__$1;
(statearr_33679_33731[(2)] = inst_33641);

(statearr_33679_33731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (17))){
var state_33647__$1 = state_33647;
var statearr_33680_33732 = state_33647__$1;
(statearr_33680_33732[(2)] = false);

(statearr_33680_33732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (3))){
var state_33647__$1 = state_33647;
var statearr_33681_33733 = state_33647__$1;
(statearr_33681_33733[(2)] = false);

(statearr_33681_33733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (12))){
var inst_33645 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33647__$1,inst_33645);
} else {
if((state_val_33648 === (2))){
var inst_33549 = (state_33647[(8)]);
var inst_33554 = inst_33549.cljs$lang$protocol_mask$partition0$;
var inst_33555 = (inst_33554 & (64));
var inst_33556 = inst_33549.cljs$core$ISeq$;
var inst_33557 = (cljs.core.PROTOCOL_SENTINEL === inst_33556);
var inst_33558 = ((inst_33555) || (inst_33557));
var state_33647__$1 = state_33647;
if(cljs.core.truth_(inst_33558)){
var statearr_33682_33734 = state_33647__$1;
(statearr_33682_33734[(1)] = (5));

} else {
var statearr_33683_33735 = state_33647__$1;
(statearr_33683_33735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (23))){
var inst_33606 = (state_33647[(14)]);
var inst_33612 = (inst_33606 == null);
var state_33647__$1 = state_33647;
if(cljs.core.truth_(inst_33612)){
var statearr_33684_33736 = state_33647__$1;
(statearr_33684_33736[(1)] = (26));

} else {
var statearr_33685_33737 = state_33647__$1;
(statearr_33685_33737[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (35))){
var inst_33632 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
if(cljs.core.truth_(inst_33632)){
var statearr_33686_33738 = state_33647__$1;
(statearr_33686_33738[(1)] = (36));

} else {
var statearr_33687_33739 = state_33647__$1;
(statearr_33687_33739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (19))){
var inst_33574 = (state_33647[(7)]);
var inst_33594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33574);
var state_33647__$1 = state_33647;
var statearr_33688_33740 = state_33647__$1;
(statearr_33688_33740[(2)] = inst_33594);

(statearr_33688_33740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (11))){
var inst_33574 = (state_33647[(7)]);
var inst_33578 = (inst_33574 == null);
var inst_33579 = cljs.core.not.call(null,inst_33578);
var state_33647__$1 = state_33647;
if(inst_33579){
var statearr_33689_33741 = state_33647__$1;
(statearr_33689_33741[(1)] = (13));

} else {
var statearr_33690_33742 = state_33647__$1;
(statearr_33690_33742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (9))){
var inst_33549 = (state_33647[(8)]);
var state_33647__$1 = state_33647;
var statearr_33691_33743 = state_33647__$1;
(statearr_33691_33743[(2)] = inst_33549);

(statearr_33691_33743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (5))){
var state_33647__$1 = state_33647;
var statearr_33692_33744 = state_33647__$1;
(statearr_33692_33744[(2)] = true);

(statearr_33692_33744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (14))){
var state_33647__$1 = state_33647;
var statearr_33693_33745 = state_33647__$1;
(statearr_33693_33745[(2)] = false);

(statearr_33693_33745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (26))){
var inst_33607 = (state_33647[(11)]);
var inst_33614 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33607);
var state_33647__$1 = state_33647;
var statearr_33694_33746 = state_33647__$1;
(statearr_33694_33746[(2)] = inst_33614);

(statearr_33694_33746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (16))){
var state_33647__$1 = state_33647;
var statearr_33695_33747 = state_33647__$1;
(statearr_33695_33747[(2)] = true);

(statearr_33695_33747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (38))){
var inst_33637 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
var statearr_33696_33748 = state_33647__$1;
(statearr_33696_33748[(2)] = inst_33637);

(statearr_33696_33748[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (30))){
var inst_33598 = (state_33647[(9)]);
var inst_33599 = (state_33647[(13)]);
var inst_33607 = (state_33647[(11)]);
var inst_33624 = cljs.core.empty_QMARK_.call(null,inst_33598);
var inst_33625 = inst_33599.call(null,inst_33607);
var inst_33626 = cljs.core.not.call(null,inst_33625);
var inst_33627 = ((inst_33624) && (inst_33626));
var state_33647__$1 = state_33647;
var statearr_33697_33749 = state_33647__$1;
(statearr_33697_33749[(2)] = inst_33627);

(statearr_33697_33749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (10))){
var inst_33549 = (state_33647[(8)]);
var inst_33570 = (state_33647[(2)]);
var inst_33571 = cljs.core.get.call(null,inst_33570,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33572 = cljs.core.get.call(null,inst_33570,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33573 = cljs.core.get.call(null,inst_33570,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33574 = inst_33549;
var state_33647__$1 = (function (){var statearr_33698 = state_33647;
(statearr_33698[(16)] = inst_33571);

(statearr_33698[(17)] = inst_33573);

(statearr_33698[(18)] = inst_33572);

(statearr_33698[(7)] = inst_33574);

return statearr_33698;
})();
var statearr_33699_33750 = state_33647__$1;
(statearr_33699_33750[(2)] = null);

(statearr_33699_33750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (18))){
var inst_33589 = (state_33647[(2)]);
var state_33647__$1 = state_33647;
var statearr_33700_33751 = state_33647__$1;
(statearr_33700_33751[(2)] = inst_33589);

(statearr_33700_33751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (37))){
var state_33647__$1 = state_33647;
var statearr_33701_33752 = state_33647__$1;
(statearr_33701_33752[(2)] = null);

(statearr_33701_33752[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33648 === (8))){
var inst_33549 = (state_33647[(8)]);
var inst_33567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33549);
var state_33647__$1 = state_33647;
var statearr_33702_33753 = state_33647__$1;
(statearr_33702_33753[(2)] = inst_33567);

(statearr_33702_33753[(1)] = (10));


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
});})(c__32649__auto___33707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32554__auto__,c__32649__auto___33707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32555__auto__ = null;
var cljs$core$async$mix_$_state_machine__32555__auto____0 = (function (){
var statearr_33703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33703[(0)] = cljs$core$async$mix_$_state_machine__32555__auto__);

(statearr_33703[(1)] = (1));

return statearr_33703;
});
var cljs$core$async$mix_$_state_machine__32555__auto____1 = (function (state_33647){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33704){if((e33704 instanceof Object)){
var ex__32558__auto__ = e33704;
var statearr_33705_33754 = state_33647;
(statearr_33705_33754[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33755 = state_33647;
state_33647 = G__33755;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32555__auto__ = function(state_33647){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32555__auto____1.call(this,state_33647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32555__auto____0;
cljs$core$async$mix_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32555__auto____1;
return cljs$core$async$mix_$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___33707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32651__auto__ = (function (){var statearr_33706 = f__32650__auto__.call(null);
(statearr_33706[(6)] = c__32649__auto___33707);

return statearr_33706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___33707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33757 = arguments.length;
switch (G__33757) {
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
var G__33761 = arguments.length;
switch (G__33761) {
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
return (function (p1__33759_SHARP_){
if(cljs.core.truth_(p1__33759_SHARP_.call(null,topic))){
return p1__33759_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33759_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33762 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33763){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33763 = meta33763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33764,meta33763__$1){
var self__ = this;
var _33764__$1 = this;
return (new cljs.core.async.t_cljs$core$async33762(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33763__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33764){
var self__ = this;
var _33764__$1 = this;
return self__.meta33763;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33762.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33763","meta33763",-187457009,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33762";

cljs.core.async.t_cljs$core$async33762.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33762");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33762.
 */
cljs.core.async.__GT_t_cljs$core$async33762 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33763){
return (new cljs.core.async.t_cljs$core$async33762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33763));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33762(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32649__auto___33882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___33882,mults,ensure_mult,p){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___33882,mults,ensure_mult,p){
return (function (state_33836){
var state_val_33837 = (state_33836[(1)]);
if((state_val_33837 === (7))){
var inst_33832 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33838_33883 = state_33836__$1;
(statearr_33838_33883[(2)] = inst_33832);

(statearr_33838_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (20))){
var state_33836__$1 = state_33836;
var statearr_33839_33884 = state_33836__$1;
(statearr_33839_33884[(2)] = null);

(statearr_33839_33884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (1))){
var state_33836__$1 = state_33836;
var statearr_33840_33885 = state_33836__$1;
(statearr_33840_33885[(2)] = null);

(statearr_33840_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (24))){
var inst_33815 = (state_33836[(7)]);
var inst_33824 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33815);
var state_33836__$1 = state_33836;
var statearr_33841_33886 = state_33836__$1;
(statearr_33841_33886[(2)] = inst_33824);

(statearr_33841_33886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (4))){
var inst_33767 = (state_33836[(8)]);
var inst_33767__$1 = (state_33836[(2)]);
var inst_33768 = (inst_33767__$1 == null);
var state_33836__$1 = (function (){var statearr_33842 = state_33836;
(statearr_33842[(8)] = inst_33767__$1);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33768)){
var statearr_33843_33887 = state_33836__$1;
(statearr_33843_33887[(1)] = (5));

} else {
var statearr_33844_33888 = state_33836__$1;
(statearr_33844_33888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (15))){
var inst_33809 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33845_33889 = state_33836__$1;
(statearr_33845_33889[(2)] = inst_33809);

(statearr_33845_33889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (21))){
var inst_33829 = (state_33836[(2)]);
var state_33836__$1 = (function (){var statearr_33846 = state_33836;
(statearr_33846[(9)] = inst_33829);

return statearr_33846;
})();
var statearr_33847_33890 = state_33836__$1;
(statearr_33847_33890[(2)] = null);

(statearr_33847_33890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (13))){
var inst_33791 = (state_33836[(10)]);
var inst_33793 = cljs.core.chunked_seq_QMARK_.call(null,inst_33791);
var state_33836__$1 = state_33836;
if(inst_33793){
var statearr_33848_33891 = state_33836__$1;
(statearr_33848_33891[(1)] = (16));

} else {
var statearr_33849_33892 = state_33836__$1;
(statearr_33849_33892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (22))){
var inst_33821 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
if(cljs.core.truth_(inst_33821)){
var statearr_33850_33893 = state_33836__$1;
(statearr_33850_33893[(1)] = (23));

} else {
var statearr_33851_33894 = state_33836__$1;
(statearr_33851_33894[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (6))){
var inst_33817 = (state_33836[(11)]);
var inst_33767 = (state_33836[(8)]);
var inst_33815 = (state_33836[(7)]);
var inst_33815__$1 = topic_fn.call(null,inst_33767);
var inst_33816 = cljs.core.deref.call(null,mults);
var inst_33817__$1 = cljs.core.get.call(null,inst_33816,inst_33815__$1);
var state_33836__$1 = (function (){var statearr_33852 = state_33836;
(statearr_33852[(11)] = inst_33817__$1);

(statearr_33852[(7)] = inst_33815__$1);

return statearr_33852;
})();
if(cljs.core.truth_(inst_33817__$1)){
var statearr_33853_33895 = state_33836__$1;
(statearr_33853_33895[(1)] = (19));

} else {
var statearr_33854_33896 = state_33836__$1;
(statearr_33854_33896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (25))){
var inst_33826 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33855_33897 = state_33836__$1;
(statearr_33855_33897[(2)] = inst_33826);

(statearr_33855_33897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (17))){
var inst_33791 = (state_33836[(10)]);
var inst_33800 = cljs.core.first.call(null,inst_33791);
var inst_33801 = cljs.core.async.muxch_STAR_.call(null,inst_33800);
var inst_33802 = cljs.core.async.close_BANG_.call(null,inst_33801);
var inst_33803 = cljs.core.next.call(null,inst_33791);
var inst_33777 = inst_33803;
var inst_33778 = null;
var inst_33779 = (0);
var inst_33780 = (0);
var state_33836__$1 = (function (){var statearr_33856 = state_33836;
(statearr_33856[(12)] = inst_33779);

(statearr_33856[(13)] = inst_33780);

(statearr_33856[(14)] = inst_33802);

(statearr_33856[(15)] = inst_33778);

(statearr_33856[(16)] = inst_33777);

return statearr_33856;
})();
var statearr_33857_33898 = state_33836__$1;
(statearr_33857_33898[(2)] = null);

(statearr_33857_33898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (3))){
var inst_33834 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33836__$1,inst_33834);
} else {
if((state_val_33837 === (12))){
var inst_33811 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33858_33899 = state_33836__$1;
(statearr_33858_33899[(2)] = inst_33811);

(statearr_33858_33899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (2))){
var state_33836__$1 = state_33836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33836__$1,(4),ch);
} else {
if((state_val_33837 === (23))){
var state_33836__$1 = state_33836;
var statearr_33859_33900 = state_33836__$1;
(statearr_33859_33900[(2)] = null);

(statearr_33859_33900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (19))){
var inst_33817 = (state_33836[(11)]);
var inst_33767 = (state_33836[(8)]);
var inst_33819 = cljs.core.async.muxch_STAR_.call(null,inst_33817);
var state_33836__$1 = state_33836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33836__$1,(22),inst_33819,inst_33767);
} else {
if((state_val_33837 === (11))){
var inst_33791 = (state_33836[(10)]);
var inst_33777 = (state_33836[(16)]);
var inst_33791__$1 = cljs.core.seq.call(null,inst_33777);
var state_33836__$1 = (function (){var statearr_33860 = state_33836;
(statearr_33860[(10)] = inst_33791__$1);

return statearr_33860;
})();
if(inst_33791__$1){
var statearr_33861_33901 = state_33836__$1;
(statearr_33861_33901[(1)] = (13));

} else {
var statearr_33862_33902 = state_33836__$1;
(statearr_33862_33902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (9))){
var inst_33813 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33863_33903 = state_33836__$1;
(statearr_33863_33903[(2)] = inst_33813);

(statearr_33863_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (5))){
var inst_33774 = cljs.core.deref.call(null,mults);
var inst_33775 = cljs.core.vals.call(null,inst_33774);
var inst_33776 = cljs.core.seq.call(null,inst_33775);
var inst_33777 = inst_33776;
var inst_33778 = null;
var inst_33779 = (0);
var inst_33780 = (0);
var state_33836__$1 = (function (){var statearr_33864 = state_33836;
(statearr_33864[(12)] = inst_33779);

(statearr_33864[(13)] = inst_33780);

(statearr_33864[(15)] = inst_33778);

(statearr_33864[(16)] = inst_33777);

return statearr_33864;
})();
var statearr_33865_33904 = state_33836__$1;
(statearr_33865_33904[(2)] = null);

(statearr_33865_33904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (14))){
var state_33836__$1 = state_33836;
var statearr_33869_33905 = state_33836__$1;
(statearr_33869_33905[(2)] = null);

(statearr_33869_33905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (16))){
var inst_33791 = (state_33836[(10)]);
var inst_33795 = cljs.core.chunk_first.call(null,inst_33791);
var inst_33796 = cljs.core.chunk_rest.call(null,inst_33791);
var inst_33797 = cljs.core.count.call(null,inst_33795);
var inst_33777 = inst_33796;
var inst_33778 = inst_33795;
var inst_33779 = inst_33797;
var inst_33780 = (0);
var state_33836__$1 = (function (){var statearr_33870 = state_33836;
(statearr_33870[(12)] = inst_33779);

(statearr_33870[(13)] = inst_33780);

(statearr_33870[(15)] = inst_33778);

(statearr_33870[(16)] = inst_33777);

return statearr_33870;
})();
var statearr_33871_33906 = state_33836__$1;
(statearr_33871_33906[(2)] = null);

(statearr_33871_33906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (10))){
var inst_33779 = (state_33836[(12)]);
var inst_33780 = (state_33836[(13)]);
var inst_33778 = (state_33836[(15)]);
var inst_33777 = (state_33836[(16)]);
var inst_33785 = cljs.core._nth.call(null,inst_33778,inst_33780);
var inst_33786 = cljs.core.async.muxch_STAR_.call(null,inst_33785);
var inst_33787 = cljs.core.async.close_BANG_.call(null,inst_33786);
var inst_33788 = (inst_33780 + (1));
var tmp33866 = inst_33779;
var tmp33867 = inst_33778;
var tmp33868 = inst_33777;
var inst_33777__$1 = tmp33868;
var inst_33778__$1 = tmp33867;
var inst_33779__$1 = tmp33866;
var inst_33780__$1 = inst_33788;
var state_33836__$1 = (function (){var statearr_33872 = state_33836;
(statearr_33872[(12)] = inst_33779__$1);

(statearr_33872[(13)] = inst_33780__$1);

(statearr_33872[(15)] = inst_33778__$1);

(statearr_33872[(17)] = inst_33787);

(statearr_33872[(16)] = inst_33777__$1);

return statearr_33872;
})();
var statearr_33873_33907 = state_33836__$1;
(statearr_33873_33907[(2)] = null);

(statearr_33873_33907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (18))){
var inst_33806 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33874_33908 = state_33836__$1;
(statearr_33874_33908[(2)] = inst_33806);

(statearr_33874_33908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (8))){
var inst_33779 = (state_33836[(12)]);
var inst_33780 = (state_33836[(13)]);
var inst_33782 = (inst_33780 < inst_33779);
var inst_33783 = inst_33782;
var state_33836__$1 = state_33836;
if(cljs.core.truth_(inst_33783)){
var statearr_33875_33909 = state_33836__$1;
(statearr_33875_33909[(1)] = (10));

} else {
var statearr_33876_33910 = state_33836__$1;
(statearr_33876_33910[(1)] = (11));

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
});})(c__32649__auto___33882,mults,ensure_mult,p))
;
return ((function (switch__32554__auto__,c__32649__auto___33882,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_33836){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33878){if((e33878 instanceof Object)){
var ex__32558__auto__ = e33878;
var statearr_33879_33911 = state_33836;
(statearr_33879_33911[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33912 = state_33836;
state_33836 = G__33912;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_33836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_33836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___33882,mults,ensure_mult,p))
})();
var state__32651__auto__ = (function (){var statearr_33880 = f__32650__auto__.call(null);
(statearr_33880[(6)] = c__32649__auto___33882);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___33882,mults,ensure_mult,p))
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
var G__33914 = arguments.length;
switch (G__33914) {
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
var G__33917 = arguments.length;
switch (G__33917) {
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
var G__33920 = arguments.length;
switch (G__33920) {
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
var c__32649__auto___33987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___33987,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___33987,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33959){
var state_val_33960 = (state_33959[(1)]);
if((state_val_33960 === (7))){
var state_33959__$1 = state_33959;
var statearr_33961_33988 = state_33959__$1;
(statearr_33961_33988[(2)] = null);

(statearr_33961_33988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (1))){
var state_33959__$1 = state_33959;
var statearr_33962_33989 = state_33959__$1;
(statearr_33962_33989[(2)] = null);

(statearr_33962_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (4))){
var inst_33923 = (state_33959[(7)]);
var inst_33925 = (inst_33923 < cnt);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33925)){
var statearr_33963_33990 = state_33959__$1;
(statearr_33963_33990[(1)] = (6));

} else {
var statearr_33964_33991 = state_33959__$1;
(statearr_33964_33991[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (15))){
var inst_33955 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33965_33992 = state_33959__$1;
(statearr_33965_33992[(2)] = inst_33955);

(statearr_33965_33992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (13))){
var inst_33948 = cljs.core.async.close_BANG_.call(null,out);
var state_33959__$1 = state_33959;
var statearr_33966_33993 = state_33959__$1;
(statearr_33966_33993[(2)] = inst_33948);

(statearr_33966_33993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (6))){
var state_33959__$1 = state_33959;
var statearr_33967_33994 = state_33959__$1;
(statearr_33967_33994[(2)] = null);

(statearr_33967_33994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (3))){
var inst_33957 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33959__$1,inst_33957);
} else {
if((state_val_33960 === (12))){
var inst_33945 = (state_33959[(8)]);
var inst_33945__$1 = (state_33959[(2)]);
var inst_33946 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33945__$1);
var state_33959__$1 = (function (){var statearr_33968 = state_33959;
(statearr_33968[(8)] = inst_33945__$1);

return statearr_33968;
})();
if(cljs.core.truth_(inst_33946)){
var statearr_33969_33995 = state_33959__$1;
(statearr_33969_33995[(1)] = (13));

} else {
var statearr_33970_33996 = state_33959__$1;
(statearr_33970_33996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (2))){
var inst_33922 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33923 = (0);
var state_33959__$1 = (function (){var statearr_33971 = state_33959;
(statearr_33971[(7)] = inst_33923);

(statearr_33971[(9)] = inst_33922);

return statearr_33971;
})();
var statearr_33972_33997 = state_33959__$1;
(statearr_33972_33997[(2)] = null);

(statearr_33972_33997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (11))){
var inst_33923 = (state_33959[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33959,(10),Object,null,(9));
var inst_33932 = chs__$1.call(null,inst_33923);
var inst_33933 = done.call(null,inst_33923);
var inst_33934 = cljs.core.async.take_BANG_.call(null,inst_33932,inst_33933);
var state_33959__$1 = state_33959;
var statearr_33973_33998 = state_33959__$1;
(statearr_33973_33998[(2)] = inst_33934);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (9))){
var inst_33923 = (state_33959[(7)]);
var inst_33936 = (state_33959[(2)]);
var inst_33937 = (inst_33923 + (1));
var inst_33923__$1 = inst_33937;
var state_33959__$1 = (function (){var statearr_33974 = state_33959;
(statearr_33974[(7)] = inst_33923__$1);

(statearr_33974[(10)] = inst_33936);

return statearr_33974;
})();
var statearr_33975_33999 = state_33959__$1;
(statearr_33975_33999[(2)] = null);

(statearr_33975_33999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (5))){
var inst_33943 = (state_33959[(2)]);
var state_33959__$1 = (function (){var statearr_33976 = state_33959;
(statearr_33976[(11)] = inst_33943);

return statearr_33976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(12),dchan);
} else {
if((state_val_33960 === (14))){
var inst_33945 = (state_33959[(8)]);
var inst_33950 = cljs.core.apply.call(null,f,inst_33945);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33959__$1,(16),out,inst_33950);
} else {
if((state_val_33960 === (16))){
var inst_33952 = (state_33959[(2)]);
var state_33959__$1 = (function (){var statearr_33977 = state_33959;
(statearr_33977[(12)] = inst_33952);

return statearr_33977;
})();
var statearr_33978_34000 = state_33959__$1;
(statearr_33978_34000[(2)] = null);

(statearr_33978_34000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (10))){
var inst_33927 = (state_33959[(2)]);
var inst_33928 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33959__$1 = (function (){var statearr_33979 = state_33959;
(statearr_33979[(13)] = inst_33927);

return statearr_33979;
})();
var statearr_33980_34001 = state_33959__$1;
(statearr_33980_34001[(2)] = inst_33928);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (8))){
var inst_33941 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33981_34002 = state_33959__$1;
(statearr_33981_34002[(2)] = inst_33941);

(statearr_33981_34002[(1)] = (5));


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
});})(c__32649__auto___33987,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32554__auto__,c__32649__auto___33987,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_33982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33982[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_33982[(1)] = (1));

return statearr_33982;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_33959){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_33959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e33983){if((e33983 instanceof Object)){
var ex__32558__auto__ = e33983;
var statearr_33984_34003 = state_33959;
(statearr_33984_34003[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34004 = state_33959;
state_33959 = G__34004;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_33959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_33959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___33987,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32651__auto__ = (function (){var statearr_33985 = f__32650__auto__.call(null);
(statearr_33985[(6)] = c__32649__auto___33987);

return statearr_33985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___33987,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34007 = arguments.length;
switch (G__34007) {
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
var c__32649__auto___34061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___34061,out){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___34061,out){
return (function (state_34039){
var state_val_34040 = (state_34039[(1)]);
if((state_val_34040 === (7))){
var inst_34019 = (state_34039[(7)]);
var inst_34018 = (state_34039[(8)]);
var inst_34018__$1 = (state_34039[(2)]);
var inst_34019__$1 = cljs.core.nth.call(null,inst_34018__$1,(0),null);
var inst_34020 = cljs.core.nth.call(null,inst_34018__$1,(1),null);
var inst_34021 = (inst_34019__$1 == null);
var state_34039__$1 = (function (){var statearr_34041 = state_34039;
(statearr_34041[(9)] = inst_34020);

(statearr_34041[(7)] = inst_34019__$1);

(statearr_34041[(8)] = inst_34018__$1);

return statearr_34041;
})();
if(cljs.core.truth_(inst_34021)){
var statearr_34042_34062 = state_34039__$1;
(statearr_34042_34062[(1)] = (8));

} else {
var statearr_34043_34063 = state_34039__$1;
(statearr_34043_34063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (1))){
var inst_34008 = cljs.core.vec.call(null,chs);
var inst_34009 = inst_34008;
var state_34039__$1 = (function (){var statearr_34044 = state_34039;
(statearr_34044[(10)] = inst_34009);

return statearr_34044;
})();
var statearr_34045_34064 = state_34039__$1;
(statearr_34045_34064[(2)] = null);

(statearr_34045_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (4))){
var inst_34009 = (state_34039[(10)]);
var state_34039__$1 = state_34039;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34039__$1,(7),inst_34009);
} else {
if((state_val_34040 === (6))){
var inst_34035 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
var statearr_34046_34065 = state_34039__$1;
(statearr_34046_34065[(2)] = inst_34035);

(statearr_34046_34065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (3))){
var inst_34037 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34039__$1,inst_34037);
} else {
if((state_val_34040 === (2))){
var inst_34009 = (state_34039[(10)]);
var inst_34011 = cljs.core.count.call(null,inst_34009);
var inst_34012 = (inst_34011 > (0));
var state_34039__$1 = state_34039;
if(cljs.core.truth_(inst_34012)){
var statearr_34048_34066 = state_34039__$1;
(statearr_34048_34066[(1)] = (4));

} else {
var statearr_34049_34067 = state_34039__$1;
(statearr_34049_34067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (11))){
var inst_34009 = (state_34039[(10)]);
var inst_34028 = (state_34039[(2)]);
var tmp34047 = inst_34009;
var inst_34009__$1 = tmp34047;
var state_34039__$1 = (function (){var statearr_34050 = state_34039;
(statearr_34050[(11)] = inst_34028);

(statearr_34050[(10)] = inst_34009__$1);

return statearr_34050;
})();
var statearr_34051_34068 = state_34039__$1;
(statearr_34051_34068[(2)] = null);

(statearr_34051_34068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (9))){
var inst_34019 = (state_34039[(7)]);
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34039__$1,(11),out,inst_34019);
} else {
if((state_val_34040 === (5))){
var inst_34033 = cljs.core.async.close_BANG_.call(null,out);
var state_34039__$1 = state_34039;
var statearr_34052_34069 = state_34039__$1;
(statearr_34052_34069[(2)] = inst_34033);

(statearr_34052_34069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (10))){
var inst_34031 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
var statearr_34053_34070 = state_34039__$1;
(statearr_34053_34070[(2)] = inst_34031);

(statearr_34053_34070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (8))){
var inst_34020 = (state_34039[(9)]);
var inst_34019 = (state_34039[(7)]);
var inst_34018 = (state_34039[(8)]);
var inst_34009 = (state_34039[(10)]);
var inst_34023 = (function (){var cs = inst_34009;
var vec__34014 = inst_34018;
var v = inst_34019;
var c = inst_34020;
return ((function (cs,vec__34014,v,c,inst_34020,inst_34019,inst_34018,inst_34009,state_val_34040,c__32649__auto___34061,out){
return (function (p1__34005_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34005_SHARP_);
});
;})(cs,vec__34014,v,c,inst_34020,inst_34019,inst_34018,inst_34009,state_val_34040,c__32649__auto___34061,out))
})();
var inst_34024 = cljs.core.filterv.call(null,inst_34023,inst_34009);
var inst_34009__$1 = inst_34024;
var state_34039__$1 = (function (){var statearr_34054 = state_34039;
(statearr_34054[(10)] = inst_34009__$1);

return statearr_34054;
})();
var statearr_34055_34071 = state_34039__$1;
(statearr_34055_34071[(2)] = null);

(statearr_34055_34071[(1)] = (2));


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
});})(c__32649__auto___34061,out))
;
return ((function (switch__32554__auto__,c__32649__auto___34061,out){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_34056 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34056[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_34056[(1)] = (1));

return statearr_34056;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_34039){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_34039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e34057){if((e34057 instanceof Object)){
var ex__32558__auto__ = e34057;
var statearr_34058_34072 = state_34039;
(statearr_34058_34072[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34073 = state_34039;
state_34039 = G__34073;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_34039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_34039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___34061,out))
})();
var state__32651__auto__ = (function (){var statearr_34059 = f__32650__auto__.call(null);
(statearr_34059[(6)] = c__32649__auto___34061);

return statearr_34059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___34061,out))
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
var G__34075 = arguments.length;
switch (G__34075) {
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
var c__32649__auto___34120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___34120,out){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___34120,out){
return (function (state_34099){
var state_val_34100 = (state_34099[(1)]);
if((state_val_34100 === (7))){
var inst_34081 = (state_34099[(7)]);
var inst_34081__$1 = (state_34099[(2)]);
var inst_34082 = (inst_34081__$1 == null);
var inst_34083 = cljs.core.not.call(null,inst_34082);
var state_34099__$1 = (function (){var statearr_34101 = state_34099;
(statearr_34101[(7)] = inst_34081__$1);

return statearr_34101;
})();
if(inst_34083){
var statearr_34102_34121 = state_34099__$1;
(statearr_34102_34121[(1)] = (8));

} else {
var statearr_34103_34122 = state_34099__$1;
(statearr_34103_34122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (1))){
var inst_34076 = (0);
var state_34099__$1 = (function (){var statearr_34104 = state_34099;
(statearr_34104[(8)] = inst_34076);

return statearr_34104;
})();
var statearr_34105_34123 = state_34099__$1;
(statearr_34105_34123[(2)] = null);

(statearr_34105_34123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (4))){
var state_34099__$1 = state_34099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34099__$1,(7),ch);
} else {
if((state_val_34100 === (6))){
var inst_34094 = (state_34099[(2)]);
var state_34099__$1 = state_34099;
var statearr_34106_34124 = state_34099__$1;
(statearr_34106_34124[(2)] = inst_34094);

(statearr_34106_34124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (3))){
var inst_34096 = (state_34099[(2)]);
var inst_34097 = cljs.core.async.close_BANG_.call(null,out);
var state_34099__$1 = (function (){var statearr_34107 = state_34099;
(statearr_34107[(9)] = inst_34096);

return statearr_34107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34099__$1,inst_34097);
} else {
if((state_val_34100 === (2))){
var inst_34076 = (state_34099[(8)]);
var inst_34078 = (inst_34076 < n);
var state_34099__$1 = state_34099;
if(cljs.core.truth_(inst_34078)){
var statearr_34108_34125 = state_34099__$1;
(statearr_34108_34125[(1)] = (4));

} else {
var statearr_34109_34126 = state_34099__$1;
(statearr_34109_34126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (11))){
var inst_34076 = (state_34099[(8)]);
var inst_34086 = (state_34099[(2)]);
var inst_34087 = (inst_34076 + (1));
var inst_34076__$1 = inst_34087;
var state_34099__$1 = (function (){var statearr_34110 = state_34099;
(statearr_34110[(8)] = inst_34076__$1);

(statearr_34110[(10)] = inst_34086);

return statearr_34110;
})();
var statearr_34111_34127 = state_34099__$1;
(statearr_34111_34127[(2)] = null);

(statearr_34111_34127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (9))){
var state_34099__$1 = state_34099;
var statearr_34112_34128 = state_34099__$1;
(statearr_34112_34128[(2)] = null);

(statearr_34112_34128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (5))){
var state_34099__$1 = state_34099;
var statearr_34113_34129 = state_34099__$1;
(statearr_34113_34129[(2)] = null);

(statearr_34113_34129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (10))){
var inst_34091 = (state_34099[(2)]);
var state_34099__$1 = state_34099;
var statearr_34114_34130 = state_34099__$1;
(statearr_34114_34130[(2)] = inst_34091);

(statearr_34114_34130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (8))){
var inst_34081 = (state_34099[(7)]);
var state_34099__$1 = state_34099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34099__$1,(11),out,inst_34081);
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
});})(c__32649__auto___34120,out))
;
return ((function (switch__32554__auto__,c__32649__auto___34120,out){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_34115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34115[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_34115[(1)] = (1));

return statearr_34115;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_34099){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_34099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e34116){if((e34116 instanceof Object)){
var ex__32558__auto__ = e34116;
var statearr_34117_34131 = state_34099;
(statearr_34117_34131[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34132 = state_34099;
state_34099 = G__34132;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_34099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_34099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___34120,out))
})();
var state__32651__auto__ = (function (){var statearr_34118 = f__32650__auto__.call(null);
(statearr_34118[(6)] = c__32649__auto___34120);

return statearr_34118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___34120,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34134 = (function (f,ch,meta34135){
this.f = f;
this.ch = ch;
this.meta34135 = meta34135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34136,meta34135__$1){
var self__ = this;
var _34136__$1 = this;
return (new cljs.core.async.t_cljs$core$async34134(self__.f,self__.ch,meta34135__$1));
});

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34136){
var self__ = this;
var _34136__$1 = this;
return self__.meta34135;
});

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34137 = (function (f,ch,meta34135,_,fn1,meta34138){
this.f = f;
this.ch = ch;
this.meta34135 = meta34135;
this._ = _;
this.fn1 = fn1;
this.meta34138 = meta34138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34139,meta34138__$1){
var self__ = this;
var _34139__$1 = this;
return (new cljs.core.async.t_cljs$core$async34137(self__.f,self__.ch,self__.meta34135,self__._,self__.fn1,meta34138__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34139){
var self__ = this;
var _34139__$1 = this;
return self__.meta34138;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34133_SHARP_){
return f1.call(null,(((p1__34133_SHARP_ == null))?null:self__.f.call(null,p1__34133_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34137.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34135","meta34135",1267019723,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34134","cljs.core.async/t_cljs$core$async34134",-1220924658,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34138","meta34138",-1526378639,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34137";

cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34137");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34137.
 */
cljs.core.async.__GT_t_cljs$core$async34137 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34137(f__$1,ch__$1,meta34135__$1,___$2,fn1__$1,meta34138){
return (new cljs.core.async.t_cljs$core$async34137(f__$1,ch__$1,meta34135__$1,___$2,fn1__$1,meta34138));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34137(self__.f,self__.ch,self__.meta34135,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34135","meta34135",1267019723,null)], null);
});

cljs.core.async.t_cljs$core$async34134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34134";

cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34134");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34134.
 */
cljs.core.async.__GT_t_cljs$core$async34134 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34134(f__$1,ch__$1,meta34135){
return (new cljs.core.async.t_cljs$core$async34134(f__$1,ch__$1,meta34135));
});

}

return (new cljs.core.async.t_cljs$core$async34134(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34140 = (function (f,ch,meta34141){
this.f = f;
this.ch = ch;
this.meta34141 = meta34141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34142,meta34141__$1){
var self__ = this;
var _34142__$1 = this;
return (new cljs.core.async.t_cljs$core$async34140(self__.f,self__.ch,meta34141__$1));
});

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34142){
var self__ = this;
var _34142__$1 = this;
return self__.meta34141;
});

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34141","meta34141",846809801,null)], null);
});

cljs.core.async.t_cljs$core$async34140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34140";

cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34140");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34140.
 */
cljs.core.async.__GT_t_cljs$core$async34140 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34140(f__$1,ch__$1,meta34141){
return (new cljs.core.async.t_cljs$core$async34140(f__$1,ch__$1,meta34141));
});

}

return (new cljs.core.async.t_cljs$core$async34140(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34143 = (function (p,ch,meta34144){
this.p = p;
this.ch = ch;
this.meta34144 = meta34144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34145,meta34144__$1){
var self__ = this;
var _34145__$1 = this;
return (new cljs.core.async.t_cljs$core$async34143(self__.p,self__.ch,meta34144__$1));
});

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34145){
var self__ = this;
var _34145__$1 = this;
return self__.meta34144;
});

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34144","meta34144",1629469954,null)], null);
});

cljs.core.async.t_cljs$core$async34143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34143";

cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34143");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34143.
 */
cljs.core.async.__GT_t_cljs$core$async34143 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34143(p__$1,ch__$1,meta34144){
return (new cljs.core.async.t_cljs$core$async34143(p__$1,ch__$1,meta34144));
});

}

return (new cljs.core.async.t_cljs$core$async34143(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34147 = arguments.length;
switch (G__34147) {
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
var c__32649__auto___34187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___34187,out){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___34187,out){
return (function (state_34168){
var state_val_34169 = (state_34168[(1)]);
if((state_val_34169 === (7))){
var inst_34164 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
var statearr_34170_34188 = state_34168__$1;
(statearr_34170_34188[(2)] = inst_34164);

(statearr_34170_34188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (1))){
var state_34168__$1 = state_34168;
var statearr_34171_34189 = state_34168__$1;
(statearr_34171_34189[(2)] = null);

(statearr_34171_34189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (4))){
var inst_34150 = (state_34168[(7)]);
var inst_34150__$1 = (state_34168[(2)]);
var inst_34151 = (inst_34150__$1 == null);
var state_34168__$1 = (function (){var statearr_34172 = state_34168;
(statearr_34172[(7)] = inst_34150__$1);

return statearr_34172;
})();
if(cljs.core.truth_(inst_34151)){
var statearr_34173_34190 = state_34168__$1;
(statearr_34173_34190[(1)] = (5));

} else {
var statearr_34174_34191 = state_34168__$1;
(statearr_34174_34191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (6))){
var inst_34150 = (state_34168[(7)]);
var inst_34155 = p.call(null,inst_34150);
var state_34168__$1 = state_34168;
if(cljs.core.truth_(inst_34155)){
var statearr_34175_34192 = state_34168__$1;
(statearr_34175_34192[(1)] = (8));

} else {
var statearr_34176_34193 = state_34168__$1;
(statearr_34176_34193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (3))){
var inst_34166 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34168__$1,inst_34166);
} else {
if((state_val_34169 === (2))){
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34168__$1,(4),ch);
} else {
if((state_val_34169 === (11))){
var inst_34158 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
var statearr_34177_34194 = state_34168__$1;
(statearr_34177_34194[(2)] = inst_34158);

(statearr_34177_34194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (9))){
var state_34168__$1 = state_34168;
var statearr_34178_34195 = state_34168__$1;
(statearr_34178_34195[(2)] = null);

(statearr_34178_34195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (5))){
var inst_34153 = cljs.core.async.close_BANG_.call(null,out);
var state_34168__$1 = state_34168;
var statearr_34179_34196 = state_34168__$1;
(statearr_34179_34196[(2)] = inst_34153);

(statearr_34179_34196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (10))){
var inst_34161 = (state_34168[(2)]);
var state_34168__$1 = (function (){var statearr_34180 = state_34168;
(statearr_34180[(8)] = inst_34161);

return statearr_34180;
})();
var statearr_34181_34197 = state_34168__$1;
(statearr_34181_34197[(2)] = null);

(statearr_34181_34197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (8))){
var inst_34150 = (state_34168[(7)]);
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34168__$1,(11),out,inst_34150);
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
});})(c__32649__auto___34187,out))
;
return ((function (switch__32554__auto__,c__32649__auto___34187,out){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_34182 = [null,null,null,null,null,null,null,null,null];
(statearr_34182[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_34182[(1)] = (1));

return statearr_34182;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_34168){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_34168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e34183){if((e34183 instanceof Object)){
var ex__32558__auto__ = e34183;
var statearr_34184_34198 = state_34168;
(statearr_34184_34198[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34199 = state_34168;
state_34168 = G__34199;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_34168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_34168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___34187,out))
})();
var state__32651__auto__ = (function (){var statearr_34185 = f__32650__auto__.call(null);
(statearr_34185[(6)] = c__32649__auto___34187);

return statearr_34185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___34187,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34201 = arguments.length;
switch (G__34201) {
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
var c__32649__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto__){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto__){
return (function (state_34264){
var state_val_34265 = (state_34264[(1)]);
if((state_val_34265 === (7))){
var inst_34260 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34266_34304 = state_34264__$1;
(statearr_34266_34304[(2)] = inst_34260);

(statearr_34266_34304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (20))){
var inst_34230 = (state_34264[(7)]);
var inst_34241 = (state_34264[(2)]);
var inst_34242 = cljs.core.next.call(null,inst_34230);
var inst_34216 = inst_34242;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34264__$1 = (function (){var statearr_34267 = state_34264;
(statearr_34267[(8)] = inst_34241);

(statearr_34267[(9)] = inst_34218);

(statearr_34267[(10)] = inst_34216);

(statearr_34267[(11)] = inst_34217);

(statearr_34267[(12)] = inst_34219);

return statearr_34267;
})();
var statearr_34268_34305 = state_34264__$1;
(statearr_34268_34305[(2)] = null);

(statearr_34268_34305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (1))){
var state_34264__$1 = state_34264;
var statearr_34269_34306 = state_34264__$1;
(statearr_34269_34306[(2)] = null);

(statearr_34269_34306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (4))){
var inst_34205 = (state_34264[(13)]);
var inst_34205__$1 = (state_34264[(2)]);
var inst_34206 = (inst_34205__$1 == null);
var state_34264__$1 = (function (){var statearr_34270 = state_34264;
(statearr_34270[(13)] = inst_34205__$1);

return statearr_34270;
})();
if(cljs.core.truth_(inst_34206)){
var statearr_34271_34307 = state_34264__$1;
(statearr_34271_34307[(1)] = (5));

} else {
var statearr_34272_34308 = state_34264__$1;
(statearr_34272_34308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (15))){
var state_34264__$1 = state_34264;
var statearr_34276_34309 = state_34264__$1;
(statearr_34276_34309[(2)] = null);

(statearr_34276_34309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (21))){
var state_34264__$1 = state_34264;
var statearr_34277_34310 = state_34264__$1;
(statearr_34277_34310[(2)] = null);

(statearr_34277_34310[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (13))){
var inst_34218 = (state_34264[(9)]);
var inst_34216 = (state_34264[(10)]);
var inst_34217 = (state_34264[(11)]);
var inst_34219 = (state_34264[(12)]);
var inst_34226 = (state_34264[(2)]);
var inst_34227 = (inst_34219 + (1));
var tmp34273 = inst_34218;
var tmp34274 = inst_34216;
var tmp34275 = inst_34217;
var inst_34216__$1 = tmp34274;
var inst_34217__$1 = tmp34275;
var inst_34218__$1 = tmp34273;
var inst_34219__$1 = inst_34227;
var state_34264__$1 = (function (){var statearr_34278 = state_34264;
(statearr_34278[(9)] = inst_34218__$1);

(statearr_34278[(10)] = inst_34216__$1);

(statearr_34278[(11)] = inst_34217__$1);

(statearr_34278[(12)] = inst_34219__$1);

(statearr_34278[(14)] = inst_34226);

return statearr_34278;
})();
var statearr_34279_34311 = state_34264__$1;
(statearr_34279_34311[(2)] = null);

(statearr_34279_34311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (22))){
var state_34264__$1 = state_34264;
var statearr_34280_34312 = state_34264__$1;
(statearr_34280_34312[(2)] = null);

(statearr_34280_34312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (6))){
var inst_34205 = (state_34264[(13)]);
var inst_34214 = f.call(null,inst_34205);
var inst_34215 = cljs.core.seq.call(null,inst_34214);
var inst_34216 = inst_34215;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34264__$1 = (function (){var statearr_34281 = state_34264;
(statearr_34281[(9)] = inst_34218);

(statearr_34281[(10)] = inst_34216);

(statearr_34281[(11)] = inst_34217);

(statearr_34281[(12)] = inst_34219);

return statearr_34281;
})();
var statearr_34282_34313 = state_34264__$1;
(statearr_34282_34313[(2)] = null);

(statearr_34282_34313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (17))){
var inst_34230 = (state_34264[(7)]);
var inst_34234 = cljs.core.chunk_first.call(null,inst_34230);
var inst_34235 = cljs.core.chunk_rest.call(null,inst_34230);
var inst_34236 = cljs.core.count.call(null,inst_34234);
var inst_34216 = inst_34235;
var inst_34217 = inst_34234;
var inst_34218 = inst_34236;
var inst_34219 = (0);
var state_34264__$1 = (function (){var statearr_34283 = state_34264;
(statearr_34283[(9)] = inst_34218);

(statearr_34283[(10)] = inst_34216);

(statearr_34283[(11)] = inst_34217);

(statearr_34283[(12)] = inst_34219);

return statearr_34283;
})();
var statearr_34284_34314 = state_34264__$1;
(statearr_34284_34314[(2)] = null);

(statearr_34284_34314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (3))){
var inst_34262 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34264__$1,inst_34262);
} else {
if((state_val_34265 === (12))){
var inst_34250 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34285_34315 = state_34264__$1;
(statearr_34285_34315[(2)] = inst_34250);

(statearr_34285_34315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (2))){
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(4),in$);
} else {
if((state_val_34265 === (23))){
var inst_34258 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34286_34316 = state_34264__$1;
(statearr_34286_34316[(2)] = inst_34258);

(statearr_34286_34316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (19))){
var inst_34245 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34287_34317 = state_34264__$1;
(statearr_34287_34317[(2)] = inst_34245);

(statearr_34287_34317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (11))){
var inst_34216 = (state_34264[(10)]);
var inst_34230 = (state_34264[(7)]);
var inst_34230__$1 = cljs.core.seq.call(null,inst_34216);
var state_34264__$1 = (function (){var statearr_34288 = state_34264;
(statearr_34288[(7)] = inst_34230__$1);

return statearr_34288;
})();
if(inst_34230__$1){
var statearr_34289_34318 = state_34264__$1;
(statearr_34289_34318[(1)] = (14));

} else {
var statearr_34290_34319 = state_34264__$1;
(statearr_34290_34319[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (9))){
var inst_34252 = (state_34264[(2)]);
var inst_34253 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34264__$1 = (function (){var statearr_34291 = state_34264;
(statearr_34291[(15)] = inst_34252);

return statearr_34291;
})();
if(cljs.core.truth_(inst_34253)){
var statearr_34292_34320 = state_34264__$1;
(statearr_34292_34320[(1)] = (21));

} else {
var statearr_34293_34321 = state_34264__$1;
(statearr_34293_34321[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (5))){
var inst_34208 = cljs.core.async.close_BANG_.call(null,out);
var state_34264__$1 = state_34264;
var statearr_34294_34322 = state_34264__$1;
(statearr_34294_34322[(2)] = inst_34208);

(statearr_34294_34322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (14))){
var inst_34230 = (state_34264[(7)]);
var inst_34232 = cljs.core.chunked_seq_QMARK_.call(null,inst_34230);
var state_34264__$1 = state_34264;
if(inst_34232){
var statearr_34295_34323 = state_34264__$1;
(statearr_34295_34323[(1)] = (17));

} else {
var statearr_34296_34324 = state_34264__$1;
(statearr_34296_34324[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (16))){
var inst_34248 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34297_34325 = state_34264__$1;
(statearr_34297_34325[(2)] = inst_34248);

(statearr_34297_34325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (10))){
var inst_34217 = (state_34264[(11)]);
var inst_34219 = (state_34264[(12)]);
var inst_34224 = cljs.core._nth.call(null,inst_34217,inst_34219);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34264__$1,(13),out,inst_34224);
} else {
if((state_val_34265 === (18))){
var inst_34230 = (state_34264[(7)]);
var inst_34239 = cljs.core.first.call(null,inst_34230);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34264__$1,(20),out,inst_34239);
} else {
if((state_val_34265 === (8))){
var inst_34218 = (state_34264[(9)]);
var inst_34219 = (state_34264[(12)]);
var inst_34221 = (inst_34219 < inst_34218);
var inst_34222 = inst_34221;
var state_34264__$1 = state_34264;
if(cljs.core.truth_(inst_34222)){
var statearr_34298_34326 = state_34264__$1;
(statearr_34298_34326[(1)] = (10));

} else {
var statearr_34299_34327 = state_34264__$1;
(statearr_34299_34327[(1)] = (11));

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
});})(c__32649__auto__))
;
return ((function (switch__32554__auto__,c__32649__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32555__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32555__auto____0 = (function (){
var statearr_34300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34300[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32555__auto__);

(statearr_34300[(1)] = (1));

return statearr_34300;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32555__auto____1 = (function (state_34264){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_34264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e34301){if((e34301 instanceof Object)){
var ex__32558__auto__ = e34301;
var statearr_34302_34328 = state_34264;
(statearr_34302_34328[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34329 = state_34264;
state_34264 = G__34329;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32555__auto__ = function(state_34264){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32555__auto____1.call(this,state_34264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32555__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32555__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto__))
})();
var state__32651__auto__ = (function (){var statearr_34303 = f__32650__auto__.call(null);
(statearr_34303[(6)] = c__32649__auto__);

return statearr_34303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto__))
);

return c__32649__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34331 = arguments.length;
switch (G__34331) {
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
var G__34334 = arguments.length;
switch (G__34334) {
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
var G__34337 = arguments.length;
switch (G__34337) {
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
var c__32649__auto___34384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___34384,out){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___34384,out){
return (function (state_34361){
var state_val_34362 = (state_34361[(1)]);
if((state_val_34362 === (7))){
var inst_34356 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34363_34385 = state_34361__$1;
(statearr_34363_34385[(2)] = inst_34356);

(statearr_34363_34385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (1))){
var inst_34338 = null;
var state_34361__$1 = (function (){var statearr_34364 = state_34361;
(statearr_34364[(7)] = inst_34338);

return statearr_34364;
})();
var statearr_34365_34386 = state_34361__$1;
(statearr_34365_34386[(2)] = null);

(statearr_34365_34386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (4))){
var inst_34341 = (state_34361[(8)]);
var inst_34341__$1 = (state_34361[(2)]);
var inst_34342 = (inst_34341__$1 == null);
var inst_34343 = cljs.core.not.call(null,inst_34342);
var state_34361__$1 = (function (){var statearr_34366 = state_34361;
(statearr_34366[(8)] = inst_34341__$1);

return statearr_34366;
})();
if(inst_34343){
var statearr_34367_34387 = state_34361__$1;
(statearr_34367_34387[(1)] = (5));

} else {
var statearr_34368_34388 = state_34361__$1;
(statearr_34368_34388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (6))){
var state_34361__$1 = state_34361;
var statearr_34369_34389 = state_34361__$1;
(statearr_34369_34389[(2)] = null);

(statearr_34369_34389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (3))){
var inst_34358 = (state_34361[(2)]);
var inst_34359 = cljs.core.async.close_BANG_.call(null,out);
var state_34361__$1 = (function (){var statearr_34370 = state_34361;
(statearr_34370[(9)] = inst_34358);

return statearr_34370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34361__$1,inst_34359);
} else {
if((state_val_34362 === (2))){
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34361__$1,(4),ch);
} else {
if((state_val_34362 === (11))){
var inst_34341 = (state_34361[(8)]);
var inst_34350 = (state_34361[(2)]);
var inst_34338 = inst_34341;
var state_34361__$1 = (function (){var statearr_34371 = state_34361;
(statearr_34371[(7)] = inst_34338);

(statearr_34371[(10)] = inst_34350);

return statearr_34371;
})();
var statearr_34372_34390 = state_34361__$1;
(statearr_34372_34390[(2)] = null);

(statearr_34372_34390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (9))){
var inst_34341 = (state_34361[(8)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34361__$1,(11),out,inst_34341);
} else {
if((state_val_34362 === (5))){
var inst_34341 = (state_34361[(8)]);
var inst_34338 = (state_34361[(7)]);
var inst_34345 = cljs.core._EQ_.call(null,inst_34341,inst_34338);
var state_34361__$1 = state_34361;
if(inst_34345){
var statearr_34374_34391 = state_34361__$1;
(statearr_34374_34391[(1)] = (8));

} else {
var statearr_34375_34392 = state_34361__$1;
(statearr_34375_34392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (10))){
var inst_34353 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34376_34393 = state_34361__$1;
(statearr_34376_34393[(2)] = inst_34353);

(statearr_34376_34393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (8))){
var inst_34338 = (state_34361[(7)]);
var tmp34373 = inst_34338;
var inst_34338__$1 = tmp34373;
var state_34361__$1 = (function (){var statearr_34377 = state_34361;
(statearr_34377[(7)] = inst_34338__$1);

return statearr_34377;
})();
var statearr_34378_34394 = state_34361__$1;
(statearr_34378_34394[(2)] = null);

(statearr_34378_34394[(1)] = (2));


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
});})(c__32649__auto___34384,out))
;
return ((function (switch__32554__auto__,c__32649__auto___34384,out){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34379[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_34379[(1)] = (1));

return statearr_34379;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_34361){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_34361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e34380){if((e34380 instanceof Object)){
var ex__32558__auto__ = e34380;
var statearr_34381_34395 = state_34361;
(statearr_34381_34395[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34396 = state_34361;
state_34361 = G__34396;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_34361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_34361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___34384,out))
})();
var state__32651__auto__ = (function (){var statearr_34382 = f__32650__auto__.call(null);
(statearr_34382[(6)] = c__32649__auto___34384);

return statearr_34382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___34384,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34398 = arguments.length;
switch (G__34398) {
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
var c__32649__auto___34464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___34464,out){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___34464,out){
return (function (state_34436){
var state_val_34437 = (state_34436[(1)]);
if((state_val_34437 === (7))){
var inst_34432 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34438_34465 = state_34436__$1;
(statearr_34438_34465[(2)] = inst_34432);

(statearr_34438_34465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (1))){
var inst_34399 = (new Array(n));
var inst_34400 = inst_34399;
var inst_34401 = (0);
var state_34436__$1 = (function (){var statearr_34439 = state_34436;
(statearr_34439[(7)] = inst_34400);

(statearr_34439[(8)] = inst_34401);

return statearr_34439;
})();
var statearr_34440_34466 = state_34436__$1;
(statearr_34440_34466[(2)] = null);

(statearr_34440_34466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (4))){
var inst_34404 = (state_34436[(9)]);
var inst_34404__$1 = (state_34436[(2)]);
var inst_34405 = (inst_34404__$1 == null);
var inst_34406 = cljs.core.not.call(null,inst_34405);
var state_34436__$1 = (function (){var statearr_34441 = state_34436;
(statearr_34441[(9)] = inst_34404__$1);

return statearr_34441;
})();
if(inst_34406){
var statearr_34442_34467 = state_34436__$1;
(statearr_34442_34467[(1)] = (5));

} else {
var statearr_34443_34468 = state_34436__$1;
(statearr_34443_34468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (15))){
var inst_34426 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34444_34469 = state_34436__$1;
(statearr_34444_34469[(2)] = inst_34426);

(statearr_34444_34469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (13))){
var state_34436__$1 = state_34436;
var statearr_34445_34470 = state_34436__$1;
(statearr_34445_34470[(2)] = null);

(statearr_34445_34470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (6))){
var inst_34401 = (state_34436[(8)]);
var inst_34422 = (inst_34401 > (0));
var state_34436__$1 = state_34436;
if(cljs.core.truth_(inst_34422)){
var statearr_34446_34471 = state_34436__$1;
(statearr_34446_34471[(1)] = (12));

} else {
var statearr_34447_34472 = state_34436__$1;
(statearr_34447_34472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (3))){
var inst_34434 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34436__$1,inst_34434);
} else {
if((state_val_34437 === (12))){
var inst_34400 = (state_34436[(7)]);
var inst_34424 = cljs.core.vec.call(null,inst_34400);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34436__$1,(15),out,inst_34424);
} else {
if((state_val_34437 === (2))){
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34436__$1,(4),ch);
} else {
if((state_val_34437 === (11))){
var inst_34416 = (state_34436[(2)]);
var inst_34417 = (new Array(n));
var inst_34400 = inst_34417;
var inst_34401 = (0);
var state_34436__$1 = (function (){var statearr_34448 = state_34436;
(statearr_34448[(7)] = inst_34400);

(statearr_34448[(8)] = inst_34401);

(statearr_34448[(10)] = inst_34416);

return statearr_34448;
})();
var statearr_34449_34473 = state_34436__$1;
(statearr_34449_34473[(2)] = null);

(statearr_34449_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (9))){
var inst_34400 = (state_34436[(7)]);
var inst_34414 = cljs.core.vec.call(null,inst_34400);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34436__$1,(11),out,inst_34414);
} else {
if((state_val_34437 === (5))){
var inst_34400 = (state_34436[(7)]);
var inst_34409 = (state_34436[(11)]);
var inst_34401 = (state_34436[(8)]);
var inst_34404 = (state_34436[(9)]);
var inst_34408 = (inst_34400[inst_34401] = inst_34404);
var inst_34409__$1 = (inst_34401 + (1));
var inst_34410 = (inst_34409__$1 < n);
var state_34436__$1 = (function (){var statearr_34450 = state_34436;
(statearr_34450[(11)] = inst_34409__$1);

(statearr_34450[(12)] = inst_34408);

return statearr_34450;
})();
if(cljs.core.truth_(inst_34410)){
var statearr_34451_34474 = state_34436__$1;
(statearr_34451_34474[(1)] = (8));

} else {
var statearr_34452_34475 = state_34436__$1;
(statearr_34452_34475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (14))){
var inst_34429 = (state_34436[(2)]);
var inst_34430 = cljs.core.async.close_BANG_.call(null,out);
var state_34436__$1 = (function (){var statearr_34454 = state_34436;
(statearr_34454[(13)] = inst_34429);

return statearr_34454;
})();
var statearr_34455_34476 = state_34436__$1;
(statearr_34455_34476[(2)] = inst_34430);

(statearr_34455_34476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (10))){
var inst_34420 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34456_34477 = state_34436__$1;
(statearr_34456_34477[(2)] = inst_34420);

(statearr_34456_34477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (8))){
var inst_34400 = (state_34436[(7)]);
var inst_34409 = (state_34436[(11)]);
var tmp34453 = inst_34400;
var inst_34400__$1 = tmp34453;
var inst_34401 = inst_34409;
var state_34436__$1 = (function (){var statearr_34457 = state_34436;
(statearr_34457[(7)] = inst_34400__$1);

(statearr_34457[(8)] = inst_34401);

return statearr_34457;
})();
var statearr_34458_34478 = state_34436__$1;
(statearr_34458_34478[(2)] = null);

(statearr_34458_34478[(1)] = (2));


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
});})(c__32649__auto___34464,out))
;
return ((function (switch__32554__auto__,c__32649__auto___34464,out){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_34436){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_34436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e34460){if((e34460 instanceof Object)){
var ex__32558__auto__ = e34460;
var statearr_34461_34479 = state_34436;
(statearr_34461_34479[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34480 = state_34436;
state_34436 = G__34480;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_34436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_34436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___34464,out))
})();
var state__32651__auto__ = (function (){var statearr_34462 = f__32650__auto__.call(null);
(statearr_34462[(6)] = c__32649__auto___34464);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___34464,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34482 = arguments.length;
switch (G__34482) {
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
var c__32649__auto___34552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___34552,out){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___34552,out){
return (function (state_34524){
var state_val_34525 = (state_34524[(1)]);
if((state_val_34525 === (7))){
var inst_34520 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34526_34553 = state_34524__$1;
(statearr_34526_34553[(2)] = inst_34520);

(statearr_34526_34553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (1))){
var inst_34483 = [];
var inst_34484 = inst_34483;
var inst_34485 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34524__$1 = (function (){var statearr_34527 = state_34524;
(statearr_34527[(7)] = inst_34485);

(statearr_34527[(8)] = inst_34484);

return statearr_34527;
})();
var statearr_34528_34554 = state_34524__$1;
(statearr_34528_34554[(2)] = null);

(statearr_34528_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (4))){
var inst_34488 = (state_34524[(9)]);
var inst_34488__$1 = (state_34524[(2)]);
var inst_34489 = (inst_34488__$1 == null);
var inst_34490 = cljs.core.not.call(null,inst_34489);
var state_34524__$1 = (function (){var statearr_34529 = state_34524;
(statearr_34529[(9)] = inst_34488__$1);

return statearr_34529;
})();
if(inst_34490){
var statearr_34530_34555 = state_34524__$1;
(statearr_34530_34555[(1)] = (5));

} else {
var statearr_34531_34556 = state_34524__$1;
(statearr_34531_34556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (15))){
var inst_34514 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34532_34557 = state_34524__$1;
(statearr_34532_34557[(2)] = inst_34514);

(statearr_34532_34557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (13))){
var state_34524__$1 = state_34524;
var statearr_34533_34558 = state_34524__$1;
(statearr_34533_34558[(2)] = null);

(statearr_34533_34558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (6))){
var inst_34484 = (state_34524[(8)]);
var inst_34509 = inst_34484.length;
var inst_34510 = (inst_34509 > (0));
var state_34524__$1 = state_34524;
if(cljs.core.truth_(inst_34510)){
var statearr_34534_34559 = state_34524__$1;
(statearr_34534_34559[(1)] = (12));

} else {
var statearr_34535_34560 = state_34524__$1;
(statearr_34535_34560[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (3))){
var inst_34522 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34524__$1,inst_34522);
} else {
if((state_val_34525 === (12))){
var inst_34484 = (state_34524[(8)]);
var inst_34512 = cljs.core.vec.call(null,inst_34484);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34524__$1,(15),out,inst_34512);
} else {
if((state_val_34525 === (2))){
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34524__$1,(4),ch);
} else {
if((state_val_34525 === (11))){
var inst_34488 = (state_34524[(9)]);
var inst_34492 = (state_34524[(10)]);
var inst_34502 = (state_34524[(2)]);
var inst_34503 = [];
var inst_34504 = inst_34503.push(inst_34488);
var inst_34484 = inst_34503;
var inst_34485 = inst_34492;
var state_34524__$1 = (function (){var statearr_34536 = state_34524;
(statearr_34536[(7)] = inst_34485);

(statearr_34536[(8)] = inst_34484);

(statearr_34536[(11)] = inst_34504);

(statearr_34536[(12)] = inst_34502);

return statearr_34536;
})();
var statearr_34537_34561 = state_34524__$1;
(statearr_34537_34561[(2)] = null);

(statearr_34537_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (9))){
var inst_34484 = (state_34524[(8)]);
var inst_34500 = cljs.core.vec.call(null,inst_34484);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34524__$1,(11),out,inst_34500);
} else {
if((state_val_34525 === (5))){
var inst_34485 = (state_34524[(7)]);
var inst_34488 = (state_34524[(9)]);
var inst_34492 = (state_34524[(10)]);
var inst_34492__$1 = f.call(null,inst_34488);
var inst_34493 = cljs.core._EQ_.call(null,inst_34492__$1,inst_34485);
var inst_34494 = cljs.core.keyword_identical_QMARK_.call(null,inst_34485,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34495 = ((inst_34493) || (inst_34494));
var state_34524__$1 = (function (){var statearr_34538 = state_34524;
(statearr_34538[(10)] = inst_34492__$1);

return statearr_34538;
})();
if(cljs.core.truth_(inst_34495)){
var statearr_34539_34562 = state_34524__$1;
(statearr_34539_34562[(1)] = (8));

} else {
var statearr_34540_34563 = state_34524__$1;
(statearr_34540_34563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (14))){
var inst_34517 = (state_34524[(2)]);
var inst_34518 = cljs.core.async.close_BANG_.call(null,out);
var state_34524__$1 = (function (){var statearr_34542 = state_34524;
(statearr_34542[(13)] = inst_34517);

return statearr_34542;
})();
var statearr_34543_34564 = state_34524__$1;
(statearr_34543_34564[(2)] = inst_34518);

(statearr_34543_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (10))){
var inst_34507 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34544_34565 = state_34524__$1;
(statearr_34544_34565[(2)] = inst_34507);

(statearr_34544_34565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (8))){
var inst_34488 = (state_34524[(9)]);
var inst_34484 = (state_34524[(8)]);
var inst_34492 = (state_34524[(10)]);
var inst_34497 = inst_34484.push(inst_34488);
var tmp34541 = inst_34484;
var inst_34484__$1 = tmp34541;
var inst_34485 = inst_34492;
var state_34524__$1 = (function (){var statearr_34545 = state_34524;
(statearr_34545[(7)] = inst_34485);

(statearr_34545[(14)] = inst_34497);

(statearr_34545[(8)] = inst_34484__$1);

return statearr_34545;
})();
var statearr_34546_34566 = state_34524__$1;
(statearr_34546_34566[(2)] = null);

(statearr_34546_34566[(1)] = (2));


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
});})(c__32649__auto___34552,out))
;
return ((function (switch__32554__auto__,c__32649__auto___34552,out){
return (function() {
var cljs$core$async$state_machine__32555__auto__ = null;
var cljs$core$async$state_machine__32555__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34547[(0)] = cljs$core$async$state_machine__32555__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var cljs$core$async$state_machine__32555__auto____1 = (function (state_34524){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_34524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e34548){if((e34548 instanceof Object)){
var ex__32558__auto__ = e34548;
var statearr_34549_34567 = state_34524;
(statearr_34549_34567[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34568 = state_34524;
state_34524 = G__34568;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
cljs$core$async$state_machine__32555__auto__ = function(state_34524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32555__auto____1.call(this,state_34524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32555__auto____0;
cljs$core$async$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32555__auto____1;
return cljs$core$async$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___34552,out))
})();
var state__32651__auto__ = (function (){var statearr_34550 = f__32650__auto__.call(null);
(statearr_34550[(6)] = c__32649__auto___34552);

return statearr_34550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___34552,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1601344971405
