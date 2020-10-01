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
var G__32712 = arguments.length;
switch (G__32712) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32713 = (function (f,blockable,meta32714){
this.f = f;
this.blockable = blockable;
this.meta32714 = meta32714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32715,meta32714__$1){
var self__ = this;
var _32715__$1 = this;
return (new cljs.core.async.t_cljs$core$async32713(self__.f,self__.blockable,meta32714__$1));
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32715){
var self__ = this;
var _32715__$1 = this;
return self__.meta32714;
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32714","meta32714",-477947632,null)], null);
});

cljs.core.async.t_cljs$core$async32713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32713";

cljs.core.async.t_cljs$core$async32713.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32713");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32713.
 */
cljs.core.async.__GT_t_cljs$core$async32713 = (function cljs$core$async$__GT_t_cljs$core$async32713(f__$1,blockable__$1,meta32714){
return (new cljs.core.async.t_cljs$core$async32713(f__$1,blockable__$1,meta32714));
});

}

return (new cljs.core.async.t_cljs$core$async32713(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32719 = arguments.length;
switch (G__32719) {
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
var G__32722 = arguments.length;
switch (G__32722) {
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
var G__32725 = arguments.length;
switch (G__32725) {
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
var val_32727 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32727);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32727,ret){
return (function (){
return fn1.call(null,val_32727);
});})(val_32727,ret))
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
var G__32729 = arguments.length;
switch (G__32729) {
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
var n__4607__auto___32731 = n;
var x_32732 = (0);
while(true){
if((x_32732 < n__4607__auto___32731)){
(a[x_32732] = x_32732);

var G__32733 = (x_32732 + (1));
x_32732 = G__32733;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32734 = (function (flag,meta32735){
this.flag = flag;
this.meta32735 = meta32735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32736,meta32735__$1){
var self__ = this;
var _32736__$1 = this;
return (new cljs.core.async.t_cljs$core$async32734(self__.flag,meta32735__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32736){
var self__ = this;
var _32736__$1 = this;
return self__.meta32735;
});})(flag))
;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32734.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32735","meta32735",-275257520,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32734";

cljs.core.async.t_cljs$core$async32734.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32734");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32734.
 */
cljs.core.async.__GT_t_cljs$core$async32734 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32734(flag__$1,meta32735){
return (new cljs.core.async.t_cljs$core$async32734(flag__$1,meta32735));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32734(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32737 = (function (flag,cb,meta32738){
this.flag = flag;
this.cb = cb;
this.meta32738 = meta32738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32739,meta32738__$1){
var self__ = this;
var _32739__$1 = this;
return (new cljs.core.async.t_cljs$core$async32737(self__.flag,self__.cb,meta32738__$1));
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32739){
var self__ = this;
var _32739__$1 = this;
return self__.meta32738;
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32738","meta32738",1077468281,null)], null);
});

cljs.core.async.t_cljs$core$async32737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32737";

cljs.core.async.t_cljs$core$async32737.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32737");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32737.
 */
cljs.core.async.__GT_t_cljs$core$async32737 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32737(flag__$1,cb__$1,meta32738){
return (new cljs.core.async.t_cljs$core$async32737(flag__$1,cb__$1,meta32738));
});

}

return (new cljs.core.async.t_cljs$core$async32737(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32740_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32740_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32741_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32741_SHARP_,port], null));
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
var G__32742 = (i + (1));
i = G__32742;
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
var len__4730__auto___32748 = arguments.length;
var i__4731__auto___32749 = (0);
while(true){
if((i__4731__auto___32749 < len__4730__auto___32748)){
args__4736__auto__.push((arguments[i__4731__auto___32749]));

var G__32750 = (i__4731__auto___32749 + (1));
i__4731__auto___32749 = G__32750;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32745){
var map__32746 = p__32745;
var map__32746__$1 = (((((!((map__32746 == null))))?(((((map__32746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32746):map__32746);
var opts = map__32746__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32743){
var G__32744 = cljs.core.first.call(null,seq32743);
var seq32743__$1 = cljs.core.next.call(null,seq32743);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32744,seq32743__$1);
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
var G__32752 = arguments.length;
switch (G__32752) {
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
var c__32652__auto___32798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___32798){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___32798){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32778_32799 = state_32776__$1;
(statearr_32778_32799[(2)] = inst_32772);

(statearr_32778_32799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32779_32800 = state_32776__$1;
(statearr_32779_32800[(2)] = null);

(statearr_32779_32800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32755 = (state_32776[(7)]);
var inst_32755__$1 = (state_32776[(2)]);
var inst_32756 = (inst_32755__$1 == null);
var state_32776__$1 = (function (){var statearr_32780 = state_32776;
(statearr_32780[(7)] = inst_32755__$1);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32756)){
var statearr_32781_32801 = state_32776__$1;
(statearr_32781_32801[(1)] = (5));

} else {
var statearr_32782_32802 = state_32776__$1;
(statearr_32782_32802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (13))){
var state_32776__$1 = state_32776;
var statearr_32783_32803 = state_32776__$1;
(statearr_32783_32803[(2)] = null);

(statearr_32783_32803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32755 = (state_32776[(7)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(11),to,inst_32755);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (12))){
var state_32776__$1 = state_32776;
var statearr_32784_32804 = state_32776__$1;
(statearr_32784_32804[(2)] = null);

(statearr_32784_32804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(4),from);
} else {
if((state_val_32777 === (11))){
var inst_32765 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32765)){
var statearr_32785_32805 = state_32776__$1;
(statearr_32785_32805[(1)] = (12));

} else {
var statearr_32786_32806 = state_32776__$1;
(statearr_32786_32806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var state_32776__$1 = state_32776;
var statearr_32787_32807 = state_32776__$1;
(statearr_32787_32807[(2)] = null);

(statearr_32787_32807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var state_32776__$1 = state_32776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32788_32808 = state_32776__$1;
(statearr_32788_32808[(1)] = (8));

} else {
var statearr_32789_32809 = state_32776__$1;
(statearr_32789_32809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (14))){
var inst_32770 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32790_32810 = state_32776__$1;
(statearr_32790_32810[(2)] = inst_32770);

(statearr_32790_32810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32762 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32791_32811 = state_32776__$1;
(statearr_32791_32811[(2)] = inst_32762);

(statearr_32791_32811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32759 = cljs.core.async.close_BANG_.call(null,to);
var state_32776__$1 = state_32776;
var statearr_32792_32812 = state_32776__$1;
(statearr_32792_32812[(2)] = inst_32759);

(statearr_32792_32812[(1)] = (10));


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
});})(c__32652__auto___32798))
;
return ((function (switch__32557__auto__,c__32652__auto___32798){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_32793 = [null,null,null,null,null,null,null,null];
(statearr_32793[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_32793[(1)] = (1));

return statearr_32793;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_32776){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e32794){if((e32794 instanceof Object)){
var ex__32561__auto__ = e32794;
var statearr_32795_32813 = state_32776;
(statearr_32795_32813[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32814 = state_32776;
state_32776 = G__32814;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___32798))
})();
var state__32654__auto__ = (function (){var statearr_32796 = f__32653__auto__.call(null);
(statearr_32796[(6)] = c__32652__auto___32798);

return statearr_32796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___32798))
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
return (function (p__32815){
var vec__32816 = p__32815;
var v = cljs.core.nth.call(null,vec__32816,(0),null);
var p = cljs.core.nth.call(null,vec__32816,(1),null);
var job = vec__32816;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32652__auto___32987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___32987,res,vec__32816,v,p,job,jobs,results){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___32987,res,vec__32816,v,p,job,jobs,results){
return (function (state_32823){
var state_val_32824 = (state_32823[(1)]);
if((state_val_32824 === (1))){
var state_32823__$1 = state_32823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32823__$1,(2),res,v);
} else {
if((state_val_32824 === (2))){
var inst_32820 = (state_32823[(2)]);
var inst_32821 = cljs.core.async.close_BANG_.call(null,res);
var state_32823__$1 = (function (){var statearr_32825 = state_32823;
(statearr_32825[(7)] = inst_32820);

return statearr_32825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32823__$1,inst_32821);
} else {
return null;
}
}
});})(c__32652__auto___32987,res,vec__32816,v,p,job,jobs,results))
;
return ((function (switch__32557__auto__,c__32652__auto___32987,res,vec__32816,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0 = (function (){
var statearr_32826 = [null,null,null,null,null,null,null,null];
(statearr_32826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__);

(statearr_32826[(1)] = (1));

return statearr_32826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1 = (function (state_32823){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_32823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e32827){if((e32827 instanceof Object)){
var ex__32561__auto__ = e32827;
var statearr_32828_32988 = state_32823;
(statearr_32828_32988[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32989 = state_32823;
state_32823 = G__32989;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = function(state_32823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1.call(this,state_32823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___32987,res,vec__32816,v,p,job,jobs,results))
})();
var state__32654__auto__ = (function (){var statearr_32829 = f__32653__auto__.call(null);
(statearr_32829[(6)] = c__32652__auto___32987);

return statearr_32829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___32987,res,vec__32816,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32830){
var vec__32831 = p__32830;
var v = cljs.core.nth.call(null,vec__32831,(0),null);
var p = cljs.core.nth.call(null,vec__32831,(1),null);
var job = vec__32831;
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
var n__4607__auto___32990 = n;
var __32991 = (0);
while(true){
if((__32991 < n__4607__auto___32990)){
var G__32834_32992 = type;
var G__32834_32993__$1 = (((G__32834_32992 instanceof cljs.core.Keyword))?G__32834_32992.fqn:null);
switch (G__32834_32993__$1) {
case "compute":
var c__32652__auto___32995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32991,c__32652__auto___32995,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (__32991,c__32652__auto___32995,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async){
return (function (state_32847){
var state_val_32848 = (state_32847[(1)]);
if((state_val_32848 === (1))){
var state_32847__$1 = state_32847;
var statearr_32849_32996 = state_32847__$1;
(statearr_32849_32996[(2)] = null);

(statearr_32849_32996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (2))){
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32847__$1,(4),jobs);
} else {
if((state_val_32848 === (3))){
var inst_32845 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32847__$1,inst_32845);
} else {
if((state_val_32848 === (4))){
var inst_32837 = (state_32847[(2)]);
var inst_32838 = process.call(null,inst_32837);
var state_32847__$1 = state_32847;
if(cljs.core.truth_(inst_32838)){
var statearr_32850_32997 = state_32847__$1;
(statearr_32850_32997[(1)] = (5));

} else {
var statearr_32851_32998 = state_32847__$1;
(statearr_32851_32998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (5))){
var state_32847__$1 = state_32847;
var statearr_32852_32999 = state_32847__$1;
(statearr_32852_32999[(2)] = null);

(statearr_32852_32999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (6))){
var state_32847__$1 = state_32847;
var statearr_32853_33000 = state_32847__$1;
(statearr_32853_33000[(2)] = null);

(statearr_32853_33000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (7))){
var inst_32843 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
var statearr_32854_33001 = state_32847__$1;
(statearr_32854_33001[(2)] = inst_32843);

(statearr_32854_33001[(1)] = (3));


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
});})(__32991,c__32652__auto___32995,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async))
;
return ((function (__32991,switch__32557__auto__,c__32652__auto___32995,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0 = (function (){
var statearr_32855 = [null,null,null,null,null,null,null];
(statearr_32855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__);

(statearr_32855[(1)] = (1));

return statearr_32855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1 = (function (state_32847){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_32847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e32856){if((e32856 instanceof Object)){
var ex__32561__auto__ = e32856;
var statearr_32857_33002 = state_32847;
(statearr_32857_33002[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33003 = state_32847;
state_32847 = G__33003;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = function(state_32847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1.call(this,state_32847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__;
})()
;})(__32991,switch__32557__auto__,c__32652__auto___32995,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async))
})();
var state__32654__auto__ = (function (){var statearr_32858 = f__32653__auto__.call(null);
(statearr_32858[(6)] = c__32652__auto___32995);

return statearr_32858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(__32991,c__32652__auto___32995,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async))
);


break;
case "async":
var c__32652__auto___33004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32991,c__32652__auto___33004,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (__32991,c__32652__auto___33004,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async){
return (function (state_32871){
var state_val_32872 = (state_32871[(1)]);
if((state_val_32872 === (1))){
var state_32871__$1 = state_32871;
var statearr_32873_33005 = state_32871__$1;
(statearr_32873_33005[(2)] = null);

(statearr_32873_33005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (2))){
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32871__$1,(4),jobs);
} else {
if((state_val_32872 === (3))){
var inst_32869 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32871__$1,inst_32869);
} else {
if((state_val_32872 === (4))){
var inst_32861 = (state_32871[(2)]);
var inst_32862 = async.call(null,inst_32861);
var state_32871__$1 = state_32871;
if(cljs.core.truth_(inst_32862)){
var statearr_32874_33006 = state_32871__$1;
(statearr_32874_33006[(1)] = (5));

} else {
var statearr_32875_33007 = state_32871__$1;
(statearr_32875_33007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (5))){
var state_32871__$1 = state_32871;
var statearr_32876_33008 = state_32871__$1;
(statearr_32876_33008[(2)] = null);

(statearr_32876_33008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (6))){
var state_32871__$1 = state_32871;
var statearr_32877_33009 = state_32871__$1;
(statearr_32877_33009[(2)] = null);

(statearr_32877_33009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (7))){
var inst_32867 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32878_33010 = state_32871__$1;
(statearr_32878_33010[(2)] = inst_32867);

(statearr_32878_33010[(1)] = (3));


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
});})(__32991,c__32652__auto___33004,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async))
;
return ((function (__32991,switch__32557__auto__,c__32652__auto___33004,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0 = (function (){
var statearr_32879 = [null,null,null,null,null,null,null];
(statearr_32879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__);

(statearr_32879[(1)] = (1));

return statearr_32879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1 = (function (state_32871){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_32871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e32880){if((e32880 instanceof Object)){
var ex__32561__auto__ = e32880;
var statearr_32881_33011 = state_32871;
(statearr_32881_33011[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33012 = state_32871;
state_32871 = G__33012;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = function(state_32871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1.call(this,state_32871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__;
})()
;})(__32991,switch__32557__auto__,c__32652__auto___33004,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async))
})();
var state__32654__auto__ = (function (){var statearr_32882 = f__32653__auto__.call(null);
(statearr_32882[(6)] = c__32652__auto___33004);

return statearr_32882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(__32991,c__32652__auto___33004,G__32834_32992,G__32834_32993__$1,n__4607__auto___32990,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32834_32993__$1)].join('')));

}

var G__33013 = (__32991 + (1));
__32991 = G__33013;
continue;
} else {
}
break;
}

var c__32652__auto___33014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___33014,jobs,results,process,async){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___33014,jobs,results,process,async){
return (function (state_32904){
var state_val_32905 = (state_32904[(1)]);
if((state_val_32905 === (7))){
var inst_32900 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32906_33015 = state_32904__$1;
(statearr_32906_33015[(2)] = inst_32900);

(statearr_32906_33015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (1))){
var state_32904__$1 = state_32904;
var statearr_32907_33016 = state_32904__$1;
(statearr_32907_33016[(2)] = null);

(statearr_32907_33016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (4))){
var inst_32885 = (state_32904[(7)]);
var inst_32885__$1 = (state_32904[(2)]);
var inst_32886 = (inst_32885__$1 == null);
var state_32904__$1 = (function (){var statearr_32908 = state_32904;
(statearr_32908[(7)] = inst_32885__$1);

return statearr_32908;
})();
if(cljs.core.truth_(inst_32886)){
var statearr_32909_33017 = state_32904__$1;
(statearr_32909_33017[(1)] = (5));

} else {
var statearr_32910_33018 = state_32904__$1;
(statearr_32910_33018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (6))){
var inst_32890 = (state_32904[(8)]);
var inst_32885 = (state_32904[(7)]);
var inst_32890__$1 = cljs.core.async.chan.call(null,(1));
var inst_32891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32892 = [inst_32885,inst_32890__$1];
var inst_32893 = (new cljs.core.PersistentVector(null,2,(5),inst_32891,inst_32892,null));
var state_32904__$1 = (function (){var statearr_32911 = state_32904;
(statearr_32911[(8)] = inst_32890__$1);

return statearr_32911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32904__$1,(8),jobs,inst_32893);
} else {
if((state_val_32905 === (3))){
var inst_32902 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32904__$1,inst_32902);
} else {
if((state_val_32905 === (2))){
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32904__$1,(4),from);
} else {
if((state_val_32905 === (9))){
var inst_32897 = (state_32904[(2)]);
var state_32904__$1 = (function (){var statearr_32912 = state_32904;
(statearr_32912[(9)] = inst_32897);

return statearr_32912;
})();
var statearr_32913_33019 = state_32904__$1;
(statearr_32913_33019[(2)] = null);

(statearr_32913_33019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (5))){
var inst_32888 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32904__$1 = state_32904;
var statearr_32914_33020 = state_32904__$1;
(statearr_32914_33020[(2)] = inst_32888);

(statearr_32914_33020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (8))){
var inst_32890 = (state_32904[(8)]);
var inst_32895 = (state_32904[(2)]);
var state_32904__$1 = (function (){var statearr_32915 = state_32904;
(statearr_32915[(10)] = inst_32895);

return statearr_32915;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32904__$1,(9),results,inst_32890);
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
});})(c__32652__auto___33014,jobs,results,process,async))
;
return ((function (switch__32557__auto__,c__32652__auto___33014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0 = (function (){
var statearr_32916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__);

(statearr_32916[(1)] = (1));

return statearr_32916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1 = (function (state_32904){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_32904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e32917){if((e32917 instanceof Object)){
var ex__32561__auto__ = e32917;
var statearr_32918_33021 = state_32904;
(statearr_32918_33021[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33022 = state_32904;
state_32904 = G__33022;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = function(state_32904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1.call(this,state_32904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___33014,jobs,results,process,async))
})();
var state__32654__auto__ = (function (){var statearr_32919 = f__32653__auto__.call(null);
(statearr_32919[(6)] = c__32652__auto___33014);

return statearr_32919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___33014,jobs,results,process,async))
);


var c__32652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto__,jobs,results,process,async){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto__,jobs,results,process,async){
return (function (state_32957){
var state_val_32958 = (state_32957[(1)]);
if((state_val_32958 === (7))){
var inst_32953 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
var statearr_32959_33023 = state_32957__$1;
(statearr_32959_33023[(2)] = inst_32953);

(statearr_32959_33023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (20))){
var state_32957__$1 = state_32957;
var statearr_32960_33024 = state_32957__$1;
(statearr_32960_33024[(2)] = null);

(statearr_32960_33024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (1))){
var state_32957__$1 = state_32957;
var statearr_32961_33025 = state_32957__$1;
(statearr_32961_33025[(2)] = null);

(statearr_32961_33025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (4))){
var inst_32922 = (state_32957[(7)]);
var inst_32922__$1 = (state_32957[(2)]);
var inst_32923 = (inst_32922__$1 == null);
var state_32957__$1 = (function (){var statearr_32962 = state_32957;
(statearr_32962[(7)] = inst_32922__$1);

return statearr_32962;
})();
if(cljs.core.truth_(inst_32923)){
var statearr_32963_33026 = state_32957__$1;
(statearr_32963_33026[(1)] = (5));

} else {
var statearr_32964_33027 = state_32957__$1;
(statearr_32964_33027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (15))){
var inst_32935 = (state_32957[(8)]);
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32957__$1,(18),to,inst_32935);
} else {
if((state_val_32958 === (21))){
var inst_32948 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
var statearr_32965_33028 = state_32957__$1;
(statearr_32965_33028[(2)] = inst_32948);

(statearr_32965_33028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (13))){
var inst_32950 = (state_32957[(2)]);
var state_32957__$1 = (function (){var statearr_32966 = state_32957;
(statearr_32966[(9)] = inst_32950);

return statearr_32966;
})();
var statearr_32967_33029 = state_32957__$1;
(statearr_32967_33029[(2)] = null);

(statearr_32967_33029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (6))){
var inst_32922 = (state_32957[(7)]);
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32957__$1,(11),inst_32922);
} else {
if((state_val_32958 === (17))){
var inst_32943 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
if(cljs.core.truth_(inst_32943)){
var statearr_32968_33030 = state_32957__$1;
(statearr_32968_33030[(1)] = (19));

} else {
var statearr_32969_33031 = state_32957__$1;
(statearr_32969_33031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (3))){
var inst_32955 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32957__$1,inst_32955);
} else {
if((state_val_32958 === (12))){
var inst_32932 = (state_32957[(10)]);
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32957__$1,(14),inst_32932);
} else {
if((state_val_32958 === (2))){
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32957__$1,(4),results);
} else {
if((state_val_32958 === (19))){
var state_32957__$1 = state_32957;
var statearr_32970_33032 = state_32957__$1;
(statearr_32970_33032[(2)] = null);

(statearr_32970_33032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (11))){
var inst_32932 = (state_32957[(2)]);
var state_32957__$1 = (function (){var statearr_32971 = state_32957;
(statearr_32971[(10)] = inst_32932);

return statearr_32971;
})();
var statearr_32972_33033 = state_32957__$1;
(statearr_32972_33033[(2)] = null);

(statearr_32972_33033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (9))){
var state_32957__$1 = state_32957;
var statearr_32973_33034 = state_32957__$1;
(statearr_32973_33034[(2)] = null);

(statearr_32973_33034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (5))){
var state_32957__$1 = state_32957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32974_33035 = state_32957__$1;
(statearr_32974_33035[(1)] = (8));

} else {
var statearr_32975_33036 = state_32957__$1;
(statearr_32975_33036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (14))){
var inst_32935 = (state_32957[(8)]);
var inst_32937 = (state_32957[(11)]);
var inst_32935__$1 = (state_32957[(2)]);
var inst_32936 = (inst_32935__$1 == null);
var inst_32937__$1 = cljs.core.not.call(null,inst_32936);
var state_32957__$1 = (function (){var statearr_32976 = state_32957;
(statearr_32976[(8)] = inst_32935__$1);

(statearr_32976[(11)] = inst_32937__$1);

return statearr_32976;
})();
if(inst_32937__$1){
var statearr_32977_33037 = state_32957__$1;
(statearr_32977_33037[(1)] = (15));

} else {
var statearr_32978_33038 = state_32957__$1;
(statearr_32978_33038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (16))){
var inst_32937 = (state_32957[(11)]);
var state_32957__$1 = state_32957;
var statearr_32979_33039 = state_32957__$1;
(statearr_32979_33039[(2)] = inst_32937);

(statearr_32979_33039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (10))){
var inst_32929 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
var statearr_32980_33040 = state_32957__$1;
(statearr_32980_33040[(2)] = inst_32929);

(statearr_32980_33040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (18))){
var inst_32940 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
var statearr_32981_33041 = state_32957__$1;
(statearr_32981_33041[(2)] = inst_32940);

(statearr_32981_33041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (8))){
var inst_32926 = cljs.core.async.close_BANG_.call(null,to);
var state_32957__$1 = state_32957;
var statearr_32982_33042 = state_32957__$1;
(statearr_32982_33042[(2)] = inst_32926);

(statearr_32982_33042[(1)] = (10));


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
});})(c__32652__auto__,jobs,results,process,async))
;
return ((function (switch__32557__auto__,c__32652__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0 = (function (){
var statearr_32983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__);

(statearr_32983[(1)] = (1));

return statearr_32983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1 = (function (state_32957){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_32957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e32984){if((e32984 instanceof Object)){
var ex__32561__auto__ = e32984;
var statearr_32985_33043 = state_32957;
(statearr_32985_33043[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33044 = state_32957;
state_32957 = G__33044;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__ = function(state_32957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1.call(this,state_32957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto__,jobs,results,process,async))
})();
var state__32654__auto__ = (function (){var statearr_32986 = f__32653__auto__.call(null);
(statearr_32986[(6)] = c__32652__auto__);

return statearr_32986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto__,jobs,results,process,async))
);

return c__32652__auto__;
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
var G__33046 = arguments.length;
switch (G__33046) {
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
var G__33049 = arguments.length;
switch (G__33049) {
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
var G__33052 = arguments.length;
switch (G__33052) {
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
var c__32652__auto___33101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___33101,tc,fc){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___33101,tc,fc){
return (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (7))){
var inst_33074 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33080_33102 = state_33078__$1;
(statearr_33080_33102[(2)] = inst_33074);

(statearr_33080_33102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (1))){
var state_33078__$1 = state_33078;
var statearr_33081_33103 = state_33078__$1;
(statearr_33081_33103[(2)] = null);

(statearr_33081_33103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (4))){
var inst_33055 = (state_33078[(7)]);
var inst_33055__$1 = (state_33078[(2)]);
var inst_33056 = (inst_33055__$1 == null);
var state_33078__$1 = (function (){var statearr_33082 = state_33078;
(statearr_33082[(7)] = inst_33055__$1);

return statearr_33082;
})();
if(cljs.core.truth_(inst_33056)){
var statearr_33083_33104 = state_33078__$1;
(statearr_33083_33104[(1)] = (5));

} else {
var statearr_33084_33105 = state_33078__$1;
(statearr_33084_33105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (13))){
var state_33078__$1 = state_33078;
var statearr_33085_33106 = state_33078__$1;
(statearr_33085_33106[(2)] = null);

(statearr_33085_33106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (6))){
var inst_33055 = (state_33078[(7)]);
var inst_33061 = p.call(null,inst_33055);
var state_33078__$1 = state_33078;
if(cljs.core.truth_(inst_33061)){
var statearr_33086_33107 = state_33078__$1;
(statearr_33086_33107[(1)] = (9));

} else {
var statearr_33087_33108 = state_33078__$1;
(statearr_33087_33108[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (3))){
var inst_33076 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33078__$1,inst_33076);
} else {
if((state_val_33079 === (12))){
var state_33078__$1 = state_33078;
var statearr_33088_33109 = state_33078__$1;
(statearr_33088_33109[(2)] = null);

(statearr_33088_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (2))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33078__$1,(4),ch);
} else {
if((state_val_33079 === (11))){
var inst_33055 = (state_33078[(7)]);
var inst_33065 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33078__$1,(8),inst_33065,inst_33055);
} else {
if((state_val_33079 === (9))){
var state_33078__$1 = state_33078;
var statearr_33089_33110 = state_33078__$1;
(statearr_33089_33110[(2)] = tc);

(statearr_33089_33110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (5))){
var inst_33058 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33059 = cljs.core.async.close_BANG_.call(null,fc);
var state_33078__$1 = (function (){var statearr_33090 = state_33078;
(statearr_33090[(8)] = inst_33058);

return statearr_33090;
})();
var statearr_33091_33111 = state_33078__$1;
(statearr_33091_33111[(2)] = inst_33059);

(statearr_33091_33111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (14))){
var inst_33072 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33092_33112 = state_33078__$1;
(statearr_33092_33112[(2)] = inst_33072);

(statearr_33092_33112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (10))){
var state_33078__$1 = state_33078;
var statearr_33093_33113 = state_33078__$1;
(statearr_33093_33113[(2)] = fc);

(statearr_33093_33113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (8))){
var inst_33067 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
if(cljs.core.truth_(inst_33067)){
var statearr_33094_33114 = state_33078__$1;
(statearr_33094_33114[(1)] = (12));

} else {
var statearr_33095_33115 = state_33078__$1;
(statearr_33095_33115[(1)] = (13));

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
});})(c__32652__auto___33101,tc,fc))
;
return ((function (switch__32557__auto__,c__32652__auto___33101,tc,fc){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_33096 = [null,null,null,null,null,null,null,null,null];
(statearr_33096[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_33096[(1)] = (1));

return statearr_33096;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_33078){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33097){if((e33097 instanceof Object)){
var ex__32561__auto__ = e33097;
var statearr_33098_33116 = state_33078;
(statearr_33098_33116[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33117 = state_33078;
state_33078 = G__33117;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___33101,tc,fc))
})();
var state__32654__auto__ = (function (){var statearr_33099 = f__32653__auto__.call(null);
(statearr_33099[(6)] = c__32652__auto___33101);

return statearr_33099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___33101,tc,fc))
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
var c__32652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto__){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto__){
return (function (state_33138){
var state_val_33139 = (state_33138[(1)]);
if((state_val_33139 === (7))){
var inst_33134 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33140_33158 = state_33138__$1;
(statearr_33140_33158[(2)] = inst_33134);

(statearr_33140_33158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (1))){
var inst_33118 = init;
var state_33138__$1 = (function (){var statearr_33141 = state_33138;
(statearr_33141[(7)] = inst_33118);

return statearr_33141;
})();
var statearr_33142_33159 = state_33138__$1;
(statearr_33142_33159[(2)] = null);

(statearr_33142_33159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (4))){
var inst_33121 = (state_33138[(8)]);
var inst_33121__$1 = (state_33138[(2)]);
var inst_33122 = (inst_33121__$1 == null);
var state_33138__$1 = (function (){var statearr_33143 = state_33138;
(statearr_33143[(8)] = inst_33121__$1);

return statearr_33143;
})();
if(cljs.core.truth_(inst_33122)){
var statearr_33144_33160 = state_33138__$1;
(statearr_33144_33160[(1)] = (5));

} else {
var statearr_33145_33161 = state_33138__$1;
(statearr_33145_33161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (6))){
var inst_33121 = (state_33138[(8)]);
var inst_33125 = (state_33138[(9)]);
var inst_33118 = (state_33138[(7)]);
var inst_33125__$1 = f.call(null,inst_33118,inst_33121);
var inst_33126 = cljs.core.reduced_QMARK_.call(null,inst_33125__$1);
var state_33138__$1 = (function (){var statearr_33146 = state_33138;
(statearr_33146[(9)] = inst_33125__$1);

return statearr_33146;
})();
if(inst_33126){
var statearr_33147_33162 = state_33138__$1;
(statearr_33147_33162[(1)] = (8));

} else {
var statearr_33148_33163 = state_33138__$1;
(statearr_33148_33163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (3))){
var inst_33136 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33138__$1,inst_33136);
} else {
if((state_val_33139 === (2))){
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33138__$1,(4),ch);
} else {
if((state_val_33139 === (9))){
var inst_33125 = (state_33138[(9)]);
var inst_33118 = inst_33125;
var state_33138__$1 = (function (){var statearr_33149 = state_33138;
(statearr_33149[(7)] = inst_33118);

return statearr_33149;
})();
var statearr_33150_33164 = state_33138__$1;
(statearr_33150_33164[(2)] = null);

(statearr_33150_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (5))){
var inst_33118 = (state_33138[(7)]);
var state_33138__$1 = state_33138;
var statearr_33151_33165 = state_33138__$1;
(statearr_33151_33165[(2)] = inst_33118);

(statearr_33151_33165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (10))){
var inst_33132 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33152_33166 = state_33138__$1;
(statearr_33152_33166[(2)] = inst_33132);

(statearr_33152_33166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (8))){
var inst_33125 = (state_33138[(9)]);
var inst_33128 = cljs.core.deref.call(null,inst_33125);
var state_33138__$1 = state_33138;
var statearr_33153_33167 = state_33138__$1;
(statearr_33153_33167[(2)] = inst_33128);

(statearr_33153_33167[(1)] = (10));


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
});})(c__32652__auto__))
;
return ((function (switch__32557__auto__,c__32652__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32558__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32558__auto____0 = (function (){
var statearr_33154 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33154[(0)] = cljs$core$async$reduce_$_state_machine__32558__auto__);

(statearr_33154[(1)] = (1));

return statearr_33154;
});
var cljs$core$async$reduce_$_state_machine__32558__auto____1 = (function (state_33138){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33155){if((e33155 instanceof Object)){
var ex__32561__auto__ = e33155;
var statearr_33156_33168 = state_33138;
(statearr_33156_33168[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33169 = state_33138;
state_33138 = G__33169;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32558__auto__ = function(state_33138){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32558__auto____1.call(this,state_33138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32558__auto____0;
cljs$core$async$reduce_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32558__auto____1;
return cljs$core$async$reduce_$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto__))
})();
var state__32654__auto__ = (function (){var statearr_33157 = f__32653__auto__.call(null);
(statearr_33157[(6)] = c__32652__auto__);

return statearr_33157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto__))
);

return c__32652__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto__,f__$1){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto__,f__$1){
return (function (state_33175){
var state_val_33176 = (state_33175[(1)]);
if((state_val_33176 === (1))){
var inst_33170 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33175__$1,(2),inst_33170);
} else {
if((state_val_33176 === (2))){
var inst_33172 = (state_33175[(2)]);
var inst_33173 = f__$1.call(null,inst_33172);
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33175__$1,inst_33173);
} else {
return null;
}
}
});})(c__32652__auto__,f__$1))
;
return ((function (switch__32557__auto__,c__32652__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32558__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32558__auto____0 = (function (){
var statearr_33177 = [null,null,null,null,null,null,null];
(statearr_33177[(0)] = cljs$core$async$transduce_$_state_machine__32558__auto__);

(statearr_33177[(1)] = (1));

return statearr_33177;
});
var cljs$core$async$transduce_$_state_machine__32558__auto____1 = (function (state_33175){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33178){if((e33178 instanceof Object)){
var ex__32561__auto__ = e33178;
var statearr_33179_33181 = state_33175;
(statearr_33179_33181[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33182 = state_33175;
state_33175 = G__33182;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32558__auto__ = function(state_33175){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32558__auto____1.call(this,state_33175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32558__auto____0;
cljs$core$async$transduce_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32558__auto____1;
return cljs$core$async$transduce_$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto__,f__$1))
})();
var state__32654__auto__ = (function (){var statearr_33180 = f__32653__auto__.call(null);
(statearr_33180[(6)] = c__32652__auto__);

return statearr_33180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto__,f__$1))
);

return c__32652__auto__;
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
var G__33184 = arguments.length;
switch (G__33184) {
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
var c__32652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto__){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto__){
return (function (state_33209){
var state_val_33210 = (state_33209[(1)]);
if((state_val_33210 === (7))){
var inst_33191 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33211_33232 = state_33209__$1;
(statearr_33211_33232[(2)] = inst_33191);

(statearr_33211_33232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (1))){
var inst_33185 = cljs.core.seq.call(null,coll);
var inst_33186 = inst_33185;
var state_33209__$1 = (function (){var statearr_33212 = state_33209;
(statearr_33212[(7)] = inst_33186);

return statearr_33212;
})();
var statearr_33213_33233 = state_33209__$1;
(statearr_33213_33233[(2)] = null);

(statearr_33213_33233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (4))){
var inst_33186 = (state_33209[(7)]);
var inst_33189 = cljs.core.first.call(null,inst_33186);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33209__$1,(7),ch,inst_33189);
} else {
if((state_val_33210 === (13))){
var inst_33203 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33214_33234 = state_33209__$1;
(statearr_33214_33234[(2)] = inst_33203);

(statearr_33214_33234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (6))){
var inst_33194 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
if(cljs.core.truth_(inst_33194)){
var statearr_33215_33235 = state_33209__$1;
(statearr_33215_33235[(1)] = (8));

} else {
var statearr_33216_33236 = state_33209__$1;
(statearr_33216_33236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (3))){
var inst_33207 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33209__$1,inst_33207);
} else {
if((state_val_33210 === (12))){
var state_33209__$1 = state_33209;
var statearr_33217_33237 = state_33209__$1;
(statearr_33217_33237[(2)] = null);

(statearr_33217_33237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (2))){
var inst_33186 = (state_33209[(7)]);
var state_33209__$1 = state_33209;
if(cljs.core.truth_(inst_33186)){
var statearr_33218_33238 = state_33209__$1;
(statearr_33218_33238[(1)] = (4));

} else {
var statearr_33219_33239 = state_33209__$1;
(statearr_33219_33239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (11))){
var inst_33200 = cljs.core.async.close_BANG_.call(null,ch);
var state_33209__$1 = state_33209;
var statearr_33220_33240 = state_33209__$1;
(statearr_33220_33240[(2)] = inst_33200);

(statearr_33220_33240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (9))){
var state_33209__$1 = state_33209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33221_33241 = state_33209__$1;
(statearr_33221_33241[(1)] = (11));

} else {
var statearr_33222_33242 = state_33209__$1;
(statearr_33222_33242[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (5))){
var inst_33186 = (state_33209[(7)]);
var state_33209__$1 = state_33209;
var statearr_33223_33243 = state_33209__$1;
(statearr_33223_33243[(2)] = inst_33186);

(statearr_33223_33243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (10))){
var inst_33205 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33224_33244 = state_33209__$1;
(statearr_33224_33244[(2)] = inst_33205);

(statearr_33224_33244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (8))){
var inst_33186 = (state_33209[(7)]);
var inst_33196 = cljs.core.next.call(null,inst_33186);
var inst_33186__$1 = inst_33196;
var state_33209__$1 = (function (){var statearr_33225 = state_33209;
(statearr_33225[(7)] = inst_33186__$1);

return statearr_33225;
})();
var statearr_33226_33245 = state_33209__$1;
(statearr_33226_33245[(2)] = null);

(statearr_33226_33245[(1)] = (2));


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
});})(c__32652__auto__))
;
return ((function (switch__32557__auto__,c__32652__auto__){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_33209){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__32561__auto__ = e33228;
var statearr_33229_33246 = state_33209;
(statearr_33229_33246[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33247 = state_33209;
state_33209 = G__33247;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_33209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_33209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto__))
})();
var state__32654__auto__ = (function (){var statearr_33230 = f__32653__auto__.call(null);
(statearr_33230[(6)] = c__32652__auto__);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto__))
);

return c__32652__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33248 = (function (ch,cs,meta33249){
this.ch = ch;
this.cs = cs;
this.meta33249 = meta33249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33250,meta33249__$1){
var self__ = this;
var _33250__$1 = this;
return (new cljs.core.async.t_cljs$core$async33248(self__.ch,self__.cs,meta33249__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33250){
var self__ = this;
var _33250__$1 = this;
return self__.meta33249;
});})(cs))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33248.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33249","meta33249",-395469053,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33248";

cljs.core.async.t_cljs$core$async33248.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33248");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33248.
 */
cljs.core.async.__GT_t_cljs$core$async33248 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33248(ch__$1,cs__$1,meta33249){
return (new cljs.core.async.t_cljs$core$async33248(ch__$1,cs__$1,meta33249));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33248(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32652__auto___33470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___33470,cs,m,dchan,dctr,done){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___33470,cs,m,dchan,dctr,done){
return (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (7))){
var inst_33381 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33387_33471 = state_33385__$1;
(statearr_33387_33471[(2)] = inst_33381);

(statearr_33387_33471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (20))){
var inst_33284 = (state_33385[(7)]);
var inst_33296 = cljs.core.first.call(null,inst_33284);
var inst_33297 = cljs.core.nth.call(null,inst_33296,(0),null);
var inst_33298 = cljs.core.nth.call(null,inst_33296,(1),null);
var state_33385__$1 = (function (){var statearr_33388 = state_33385;
(statearr_33388[(8)] = inst_33297);

return statearr_33388;
})();
if(cljs.core.truth_(inst_33298)){
var statearr_33389_33472 = state_33385__$1;
(statearr_33389_33472[(1)] = (22));

} else {
var statearr_33390_33473 = state_33385__$1;
(statearr_33390_33473[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (27))){
var inst_33328 = (state_33385[(9)]);
var inst_33326 = (state_33385[(10)]);
var inst_33253 = (state_33385[(11)]);
var inst_33333 = (state_33385[(12)]);
var inst_33333__$1 = cljs.core._nth.call(null,inst_33326,inst_33328);
var inst_33334 = cljs.core.async.put_BANG_.call(null,inst_33333__$1,inst_33253,done);
var state_33385__$1 = (function (){var statearr_33391 = state_33385;
(statearr_33391[(12)] = inst_33333__$1);

return statearr_33391;
})();
if(cljs.core.truth_(inst_33334)){
var statearr_33392_33474 = state_33385__$1;
(statearr_33392_33474[(1)] = (30));

} else {
var statearr_33393_33475 = state_33385__$1;
(statearr_33393_33475[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (1))){
var state_33385__$1 = state_33385;
var statearr_33394_33476 = state_33385__$1;
(statearr_33394_33476[(2)] = null);

(statearr_33394_33476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (24))){
var inst_33284 = (state_33385[(7)]);
var inst_33303 = (state_33385[(2)]);
var inst_33304 = cljs.core.next.call(null,inst_33284);
var inst_33262 = inst_33304;
var inst_33263 = null;
var inst_33264 = (0);
var inst_33265 = (0);
var state_33385__$1 = (function (){var statearr_33395 = state_33385;
(statearr_33395[(13)] = inst_33263);

(statearr_33395[(14)] = inst_33264);

(statearr_33395[(15)] = inst_33262);

(statearr_33395[(16)] = inst_33265);

(statearr_33395[(17)] = inst_33303);

return statearr_33395;
})();
var statearr_33396_33477 = state_33385__$1;
(statearr_33396_33477[(2)] = null);

(statearr_33396_33477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (39))){
var state_33385__$1 = state_33385;
var statearr_33400_33478 = state_33385__$1;
(statearr_33400_33478[(2)] = null);

(statearr_33400_33478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (4))){
var inst_33253 = (state_33385[(11)]);
var inst_33253__$1 = (state_33385[(2)]);
var inst_33254 = (inst_33253__$1 == null);
var state_33385__$1 = (function (){var statearr_33401 = state_33385;
(statearr_33401[(11)] = inst_33253__$1);

return statearr_33401;
})();
if(cljs.core.truth_(inst_33254)){
var statearr_33402_33479 = state_33385__$1;
(statearr_33402_33479[(1)] = (5));

} else {
var statearr_33403_33480 = state_33385__$1;
(statearr_33403_33480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (15))){
var inst_33263 = (state_33385[(13)]);
var inst_33264 = (state_33385[(14)]);
var inst_33262 = (state_33385[(15)]);
var inst_33265 = (state_33385[(16)]);
var inst_33280 = (state_33385[(2)]);
var inst_33281 = (inst_33265 + (1));
var tmp33397 = inst_33263;
var tmp33398 = inst_33264;
var tmp33399 = inst_33262;
var inst_33262__$1 = tmp33399;
var inst_33263__$1 = tmp33397;
var inst_33264__$1 = tmp33398;
var inst_33265__$1 = inst_33281;
var state_33385__$1 = (function (){var statearr_33404 = state_33385;
(statearr_33404[(13)] = inst_33263__$1);

(statearr_33404[(18)] = inst_33280);

(statearr_33404[(14)] = inst_33264__$1);

(statearr_33404[(15)] = inst_33262__$1);

(statearr_33404[(16)] = inst_33265__$1);

return statearr_33404;
})();
var statearr_33405_33481 = state_33385__$1;
(statearr_33405_33481[(2)] = null);

(statearr_33405_33481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (21))){
var inst_33307 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33409_33482 = state_33385__$1;
(statearr_33409_33482[(2)] = inst_33307);

(statearr_33409_33482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (31))){
var inst_33333 = (state_33385[(12)]);
var inst_33337 = done.call(null,null);
var inst_33338 = cljs.core.async.untap_STAR_.call(null,m,inst_33333);
var state_33385__$1 = (function (){var statearr_33410 = state_33385;
(statearr_33410[(19)] = inst_33337);

return statearr_33410;
})();
var statearr_33411_33483 = state_33385__$1;
(statearr_33411_33483[(2)] = inst_33338);

(statearr_33411_33483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (32))){
var inst_33328 = (state_33385[(9)]);
var inst_33327 = (state_33385[(20)]);
var inst_33325 = (state_33385[(21)]);
var inst_33326 = (state_33385[(10)]);
var inst_33340 = (state_33385[(2)]);
var inst_33341 = (inst_33328 + (1));
var tmp33406 = inst_33327;
var tmp33407 = inst_33325;
var tmp33408 = inst_33326;
var inst_33325__$1 = tmp33407;
var inst_33326__$1 = tmp33408;
var inst_33327__$1 = tmp33406;
var inst_33328__$1 = inst_33341;
var state_33385__$1 = (function (){var statearr_33412 = state_33385;
(statearr_33412[(9)] = inst_33328__$1);

(statearr_33412[(20)] = inst_33327__$1);

(statearr_33412[(21)] = inst_33325__$1);

(statearr_33412[(22)] = inst_33340);

(statearr_33412[(10)] = inst_33326__$1);

return statearr_33412;
})();
var statearr_33413_33484 = state_33385__$1;
(statearr_33413_33484[(2)] = null);

(statearr_33413_33484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (40))){
var inst_33353 = (state_33385[(23)]);
var inst_33357 = done.call(null,null);
var inst_33358 = cljs.core.async.untap_STAR_.call(null,m,inst_33353);
var state_33385__$1 = (function (){var statearr_33414 = state_33385;
(statearr_33414[(24)] = inst_33357);

return statearr_33414;
})();
var statearr_33415_33485 = state_33385__$1;
(statearr_33415_33485[(2)] = inst_33358);

(statearr_33415_33485[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (33))){
var inst_33344 = (state_33385[(25)]);
var inst_33346 = cljs.core.chunked_seq_QMARK_.call(null,inst_33344);
var state_33385__$1 = state_33385;
if(inst_33346){
var statearr_33416_33486 = state_33385__$1;
(statearr_33416_33486[(1)] = (36));

} else {
var statearr_33417_33487 = state_33385__$1;
(statearr_33417_33487[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (13))){
var inst_33274 = (state_33385[(26)]);
var inst_33277 = cljs.core.async.close_BANG_.call(null,inst_33274);
var state_33385__$1 = state_33385;
var statearr_33418_33488 = state_33385__$1;
(statearr_33418_33488[(2)] = inst_33277);

(statearr_33418_33488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (22))){
var inst_33297 = (state_33385[(8)]);
var inst_33300 = cljs.core.async.close_BANG_.call(null,inst_33297);
var state_33385__$1 = state_33385;
var statearr_33419_33489 = state_33385__$1;
(statearr_33419_33489[(2)] = inst_33300);

(statearr_33419_33489[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (36))){
var inst_33344 = (state_33385[(25)]);
var inst_33348 = cljs.core.chunk_first.call(null,inst_33344);
var inst_33349 = cljs.core.chunk_rest.call(null,inst_33344);
var inst_33350 = cljs.core.count.call(null,inst_33348);
var inst_33325 = inst_33349;
var inst_33326 = inst_33348;
var inst_33327 = inst_33350;
var inst_33328 = (0);
var state_33385__$1 = (function (){var statearr_33420 = state_33385;
(statearr_33420[(9)] = inst_33328);

(statearr_33420[(20)] = inst_33327);

(statearr_33420[(21)] = inst_33325);

(statearr_33420[(10)] = inst_33326);

return statearr_33420;
})();
var statearr_33421_33490 = state_33385__$1;
(statearr_33421_33490[(2)] = null);

(statearr_33421_33490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (41))){
var inst_33344 = (state_33385[(25)]);
var inst_33360 = (state_33385[(2)]);
var inst_33361 = cljs.core.next.call(null,inst_33344);
var inst_33325 = inst_33361;
var inst_33326 = null;
var inst_33327 = (0);
var inst_33328 = (0);
var state_33385__$1 = (function (){var statearr_33422 = state_33385;
(statearr_33422[(9)] = inst_33328);

(statearr_33422[(20)] = inst_33327);

(statearr_33422[(27)] = inst_33360);

(statearr_33422[(21)] = inst_33325);

(statearr_33422[(10)] = inst_33326);

return statearr_33422;
})();
var statearr_33423_33491 = state_33385__$1;
(statearr_33423_33491[(2)] = null);

(statearr_33423_33491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (43))){
var state_33385__$1 = state_33385;
var statearr_33424_33492 = state_33385__$1;
(statearr_33424_33492[(2)] = null);

(statearr_33424_33492[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (29))){
var inst_33369 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33425_33493 = state_33385__$1;
(statearr_33425_33493[(2)] = inst_33369);

(statearr_33425_33493[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (44))){
var inst_33378 = (state_33385[(2)]);
var state_33385__$1 = (function (){var statearr_33426 = state_33385;
(statearr_33426[(28)] = inst_33378);

return statearr_33426;
})();
var statearr_33427_33494 = state_33385__$1;
(statearr_33427_33494[(2)] = null);

(statearr_33427_33494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (6))){
var inst_33317 = (state_33385[(29)]);
var inst_33316 = cljs.core.deref.call(null,cs);
var inst_33317__$1 = cljs.core.keys.call(null,inst_33316);
var inst_33318 = cljs.core.count.call(null,inst_33317__$1);
var inst_33319 = cljs.core.reset_BANG_.call(null,dctr,inst_33318);
var inst_33324 = cljs.core.seq.call(null,inst_33317__$1);
var inst_33325 = inst_33324;
var inst_33326 = null;
var inst_33327 = (0);
var inst_33328 = (0);
var state_33385__$1 = (function (){var statearr_33428 = state_33385;
(statearr_33428[(9)] = inst_33328);

(statearr_33428[(29)] = inst_33317__$1);

(statearr_33428[(20)] = inst_33327);

(statearr_33428[(30)] = inst_33319);

(statearr_33428[(21)] = inst_33325);

(statearr_33428[(10)] = inst_33326);

return statearr_33428;
})();
var statearr_33429_33495 = state_33385__$1;
(statearr_33429_33495[(2)] = null);

(statearr_33429_33495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (28))){
var inst_33325 = (state_33385[(21)]);
var inst_33344 = (state_33385[(25)]);
var inst_33344__$1 = cljs.core.seq.call(null,inst_33325);
var state_33385__$1 = (function (){var statearr_33430 = state_33385;
(statearr_33430[(25)] = inst_33344__$1);

return statearr_33430;
})();
if(inst_33344__$1){
var statearr_33431_33496 = state_33385__$1;
(statearr_33431_33496[(1)] = (33));

} else {
var statearr_33432_33497 = state_33385__$1;
(statearr_33432_33497[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (25))){
var inst_33328 = (state_33385[(9)]);
var inst_33327 = (state_33385[(20)]);
var inst_33330 = (inst_33328 < inst_33327);
var inst_33331 = inst_33330;
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33331)){
var statearr_33433_33498 = state_33385__$1;
(statearr_33433_33498[(1)] = (27));

} else {
var statearr_33434_33499 = state_33385__$1;
(statearr_33434_33499[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (34))){
var state_33385__$1 = state_33385;
var statearr_33435_33500 = state_33385__$1;
(statearr_33435_33500[(2)] = null);

(statearr_33435_33500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (17))){
var state_33385__$1 = state_33385;
var statearr_33436_33501 = state_33385__$1;
(statearr_33436_33501[(2)] = null);

(statearr_33436_33501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (3))){
var inst_33383 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33385__$1,inst_33383);
} else {
if((state_val_33386 === (12))){
var inst_33312 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33437_33502 = state_33385__$1;
(statearr_33437_33502[(2)] = inst_33312);

(statearr_33437_33502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (2))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33385__$1,(4),ch);
} else {
if((state_val_33386 === (23))){
var state_33385__$1 = state_33385;
var statearr_33438_33503 = state_33385__$1;
(statearr_33438_33503[(2)] = null);

(statearr_33438_33503[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (35))){
var inst_33367 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33439_33504 = state_33385__$1;
(statearr_33439_33504[(2)] = inst_33367);

(statearr_33439_33504[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (19))){
var inst_33284 = (state_33385[(7)]);
var inst_33288 = cljs.core.chunk_first.call(null,inst_33284);
var inst_33289 = cljs.core.chunk_rest.call(null,inst_33284);
var inst_33290 = cljs.core.count.call(null,inst_33288);
var inst_33262 = inst_33289;
var inst_33263 = inst_33288;
var inst_33264 = inst_33290;
var inst_33265 = (0);
var state_33385__$1 = (function (){var statearr_33440 = state_33385;
(statearr_33440[(13)] = inst_33263);

(statearr_33440[(14)] = inst_33264);

(statearr_33440[(15)] = inst_33262);

(statearr_33440[(16)] = inst_33265);

return statearr_33440;
})();
var statearr_33441_33505 = state_33385__$1;
(statearr_33441_33505[(2)] = null);

(statearr_33441_33505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (11))){
var inst_33262 = (state_33385[(15)]);
var inst_33284 = (state_33385[(7)]);
var inst_33284__$1 = cljs.core.seq.call(null,inst_33262);
var state_33385__$1 = (function (){var statearr_33442 = state_33385;
(statearr_33442[(7)] = inst_33284__$1);

return statearr_33442;
})();
if(inst_33284__$1){
var statearr_33443_33506 = state_33385__$1;
(statearr_33443_33506[(1)] = (16));

} else {
var statearr_33444_33507 = state_33385__$1;
(statearr_33444_33507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (9))){
var inst_33314 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33445_33508 = state_33385__$1;
(statearr_33445_33508[(2)] = inst_33314);

(statearr_33445_33508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (5))){
var inst_33260 = cljs.core.deref.call(null,cs);
var inst_33261 = cljs.core.seq.call(null,inst_33260);
var inst_33262 = inst_33261;
var inst_33263 = null;
var inst_33264 = (0);
var inst_33265 = (0);
var state_33385__$1 = (function (){var statearr_33446 = state_33385;
(statearr_33446[(13)] = inst_33263);

(statearr_33446[(14)] = inst_33264);

(statearr_33446[(15)] = inst_33262);

(statearr_33446[(16)] = inst_33265);

return statearr_33446;
})();
var statearr_33447_33509 = state_33385__$1;
(statearr_33447_33509[(2)] = null);

(statearr_33447_33509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (14))){
var state_33385__$1 = state_33385;
var statearr_33448_33510 = state_33385__$1;
(statearr_33448_33510[(2)] = null);

(statearr_33448_33510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (45))){
var inst_33375 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33449_33511 = state_33385__$1;
(statearr_33449_33511[(2)] = inst_33375);

(statearr_33449_33511[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (26))){
var inst_33317 = (state_33385[(29)]);
var inst_33371 = (state_33385[(2)]);
var inst_33372 = cljs.core.seq.call(null,inst_33317);
var state_33385__$1 = (function (){var statearr_33450 = state_33385;
(statearr_33450[(31)] = inst_33371);

return statearr_33450;
})();
if(inst_33372){
var statearr_33451_33512 = state_33385__$1;
(statearr_33451_33512[(1)] = (42));

} else {
var statearr_33452_33513 = state_33385__$1;
(statearr_33452_33513[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (16))){
var inst_33284 = (state_33385[(7)]);
var inst_33286 = cljs.core.chunked_seq_QMARK_.call(null,inst_33284);
var state_33385__$1 = state_33385;
if(inst_33286){
var statearr_33453_33514 = state_33385__$1;
(statearr_33453_33514[(1)] = (19));

} else {
var statearr_33454_33515 = state_33385__$1;
(statearr_33454_33515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (38))){
var inst_33364 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33455_33516 = state_33385__$1;
(statearr_33455_33516[(2)] = inst_33364);

(statearr_33455_33516[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (30))){
var state_33385__$1 = state_33385;
var statearr_33456_33517 = state_33385__$1;
(statearr_33456_33517[(2)] = null);

(statearr_33456_33517[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (10))){
var inst_33263 = (state_33385[(13)]);
var inst_33265 = (state_33385[(16)]);
var inst_33273 = cljs.core._nth.call(null,inst_33263,inst_33265);
var inst_33274 = cljs.core.nth.call(null,inst_33273,(0),null);
var inst_33275 = cljs.core.nth.call(null,inst_33273,(1),null);
var state_33385__$1 = (function (){var statearr_33457 = state_33385;
(statearr_33457[(26)] = inst_33274);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33275)){
var statearr_33458_33518 = state_33385__$1;
(statearr_33458_33518[(1)] = (13));

} else {
var statearr_33459_33519 = state_33385__$1;
(statearr_33459_33519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (18))){
var inst_33310 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33460_33520 = state_33385__$1;
(statearr_33460_33520[(2)] = inst_33310);

(statearr_33460_33520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (42))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33385__$1,(45),dchan);
} else {
if((state_val_33386 === (37))){
var inst_33353 = (state_33385[(23)]);
var inst_33344 = (state_33385[(25)]);
var inst_33253 = (state_33385[(11)]);
var inst_33353__$1 = cljs.core.first.call(null,inst_33344);
var inst_33354 = cljs.core.async.put_BANG_.call(null,inst_33353__$1,inst_33253,done);
var state_33385__$1 = (function (){var statearr_33461 = state_33385;
(statearr_33461[(23)] = inst_33353__$1);

return statearr_33461;
})();
if(cljs.core.truth_(inst_33354)){
var statearr_33462_33521 = state_33385__$1;
(statearr_33462_33521[(1)] = (39));

} else {
var statearr_33463_33522 = state_33385__$1;
(statearr_33463_33522[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (8))){
var inst_33264 = (state_33385[(14)]);
var inst_33265 = (state_33385[(16)]);
var inst_33267 = (inst_33265 < inst_33264);
var inst_33268 = inst_33267;
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33268)){
var statearr_33464_33523 = state_33385__$1;
(statearr_33464_33523[(1)] = (10));

} else {
var statearr_33465_33524 = state_33385__$1;
(statearr_33465_33524[(1)] = (11));

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
});})(c__32652__auto___33470,cs,m,dchan,dctr,done))
;
return ((function (switch__32557__auto__,c__32652__auto___33470,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32558__auto__ = null;
var cljs$core$async$mult_$_state_machine__32558__auto____0 = (function (){
var statearr_33466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33466[(0)] = cljs$core$async$mult_$_state_machine__32558__auto__);

(statearr_33466[(1)] = (1));

return statearr_33466;
});
var cljs$core$async$mult_$_state_machine__32558__auto____1 = (function (state_33385){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33467){if((e33467 instanceof Object)){
var ex__32561__auto__ = e33467;
var statearr_33468_33525 = state_33385;
(statearr_33468_33525[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33526 = state_33385;
state_33385 = G__33526;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32558__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32558__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32558__auto____0;
cljs$core$async$mult_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32558__auto____1;
return cljs$core$async$mult_$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___33470,cs,m,dchan,dctr,done))
})();
var state__32654__auto__ = (function (){var statearr_33469 = f__32653__auto__.call(null);
(statearr_33469[(6)] = c__32652__auto___33470);

return statearr_33469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___33470,cs,m,dchan,dctr,done))
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
var G__33528 = arguments.length;
switch (G__33528) {
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
var len__4730__auto___33540 = arguments.length;
var i__4731__auto___33541 = (0);
while(true){
if((i__4731__auto___33541 < len__4730__auto___33540)){
args__4736__auto__.push((arguments[i__4731__auto___33541]));

var G__33542 = (i__4731__auto___33541 + (1));
i__4731__auto___33541 = G__33542;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33534){
var map__33535 = p__33534;
var map__33535__$1 = (((((!((map__33535 == null))))?(((((map__33535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33535):map__33535);
var opts = map__33535__$1;
var statearr_33537_33543 = state;
(statearr_33537_33543[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33535,map__33535__$1,opts){
return (function (val){
var statearr_33538_33544 = state;
(statearr_33538_33544[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33535,map__33535__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33539_33545 = state;
(statearr_33539_33545[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33530){
var G__33531 = cljs.core.first.call(null,seq33530);
var seq33530__$1 = cljs.core.next.call(null,seq33530);
var G__33532 = cljs.core.first.call(null,seq33530__$1);
var seq33530__$2 = cljs.core.next.call(null,seq33530__$1);
var G__33533 = cljs.core.first.call(null,seq33530__$2);
var seq33530__$3 = cljs.core.next.call(null,seq33530__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33531,G__33532,G__33533,seq33530__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33546 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33547){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33547 = meta33547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33548,meta33547__$1){
var self__ = this;
var _33548__$1 = this;
return (new cljs.core.async.t_cljs$core$async33546(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33547__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33548){
var self__ = this;
var _33548__$1 = this;
return self__.meta33547;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33546.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33547","meta33547",-695311653,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33546";

cljs.core.async.t_cljs$core$async33546.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33546");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33546.
 */
cljs.core.async.__GT_t_cljs$core$async33546 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33546(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33547){
return (new cljs.core.async.t_cljs$core$async33546(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33547));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33546(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32652__auto___33710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___33710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___33710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33650){
var state_val_33651 = (state_33650[(1)]);
if((state_val_33651 === (7))){
var inst_33565 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33652_33711 = state_33650__$1;
(statearr_33652_33711[(2)] = inst_33565);

(statearr_33652_33711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (20))){
var inst_33577 = (state_33650[(7)]);
var state_33650__$1 = state_33650;
var statearr_33653_33712 = state_33650__$1;
(statearr_33653_33712[(2)] = inst_33577);

(statearr_33653_33712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (27))){
var state_33650__$1 = state_33650;
var statearr_33654_33713 = state_33650__$1;
(statearr_33654_33713[(2)] = null);

(statearr_33654_33713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (1))){
var inst_33552 = (state_33650[(8)]);
var inst_33552__$1 = calc_state.call(null);
var inst_33554 = (inst_33552__$1 == null);
var inst_33555 = cljs.core.not.call(null,inst_33554);
var state_33650__$1 = (function (){var statearr_33655 = state_33650;
(statearr_33655[(8)] = inst_33552__$1);

return statearr_33655;
})();
if(inst_33555){
var statearr_33656_33714 = state_33650__$1;
(statearr_33656_33714[(1)] = (2));

} else {
var statearr_33657_33715 = state_33650__$1;
(statearr_33657_33715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (24))){
var inst_33610 = (state_33650[(9)]);
var inst_33601 = (state_33650[(10)]);
var inst_33624 = (state_33650[(11)]);
var inst_33624__$1 = inst_33601.call(null,inst_33610);
var state_33650__$1 = (function (){var statearr_33658 = state_33650;
(statearr_33658[(11)] = inst_33624__$1);

return statearr_33658;
})();
if(cljs.core.truth_(inst_33624__$1)){
var statearr_33659_33716 = state_33650__$1;
(statearr_33659_33716[(1)] = (29));

} else {
var statearr_33660_33717 = state_33650__$1;
(statearr_33660_33717[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (4))){
var inst_33568 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33568)){
var statearr_33661_33718 = state_33650__$1;
(statearr_33661_33718[(1)] = (8));

} else {
var statearr_33662_33719 = state_33650__$1;
(statearr_33662_33719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (15))){
var inst_33595 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33595)){
var statearr_33663_33720 = state_33650__$1;
(statearr_33663_33720[(1)] = (19));

} else {
var statearr_33664_33721 = state_33650__$1;
(statearr_33664_33721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (21))){
var inst_33600 = (state_33650[(12)]);
var inst_33600__$1 = (state_33650[(2)]);
var inst_33601 = cljs.core.get.call(null,inst_33600__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33602 = cljs.core.get.call(null,inst_33600__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33603 = cljs.core.get.call(null,inst_33600__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33650__$1 = (function (){var statearr_33665 = state_33650;
(statearr_33665[(10)] = inst_33601);

(statearr_33665[(12)] = inst_33600__$1);

(statearr_33665[(13)] = inst_33602);

return statearr_33665;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33650__$1,(22),inst_33603);
} else {
if((state_val_33651 === (31))){
var inst_33632 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33632)){
var statearr_33666_33722 = state_33650__$1;
(statearr_33666_33722[(1)] = (32));

} else {
var statearr_33667_33723 = state_33650__$1;
(statearr_33667_33723[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (32))){
var inst_33609 = (state_33650[(14)]);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33650__$1,(35),out,inst_33609);
} else {
if((state_val_33651 === (33))){
var inst_33600 = (state_33650[(12)]);
var inst_33577 = inst_33600;
var state_33650__$1 = (function (){var statearr_33668 = state_33650;
(statearr_33668[(7)] = inst_33577);

return statearr_33668;
})();
var statearr_33669_33724 = state_33650__$1;
(statearr_33669_33724[(2)] = null);

(statearr_33669_33724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (13))){
var inst_33577 = (state_33650[(7)]);
var inst_33584 = inst_33577.cljs$lang$protocol_mask$partition0$;
var inst_33585 = (inst_33584 & (64));
var inst_33586 = inst_33577.cljs$core$ISeq$;
var inst_33587 = (cljs.core.PROTOCOL_SENTINEL === inst_33586);
var inst_33588 = ((inst_33585) || (inst_33587));
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33588)){
var statearr_33670_33725 = state_33650__$1;
(statearr_33670_33725[(1)] = (16));

} else {
var statearr_33671_33726 = state_33650__$1;
(statearr_33671_33726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (22))){
var inst_33610 = (state_33650[(9)]);
var inst_33609 = (state_33650[(14)]);
var inst_33608 = (state_33650[(2)]);
var inst_33609__$1 = cljs.core.nth.call(null,inst_33608,(0),null);
var inst_33610__$1 = cljs.core.nth.call(null,inst_33608,(1),null);
var inst_33611 = (inst_33609__$1 == null);
var inst_33612 = cljs.core._EQ_.call(null,inst_33610__$1,change);
var inst_33613 = ((inst_33611) || (inst_33612));
var state_33650__$1 = (function (){var statearr_33672 = state_33650;
(statearr_33672[(9)] = inst_33610__$1);

(statearr_33672[(14)] = inst_33609__$1);

return statearr_33672;
})();
if(cljs.core.truth_(inst_33613)){
var statearr_33673_33727 = state_33650__$1;
(statearr_33673_33727[(1)] = (23));

} else {
var statearr_33674_33728 = state_33650__$1;
(statearr_33674_33728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (36))){
var inst_33600 = (state_33650[(12)]);
var inst_33577 = inst_33600;
var state_33650__$1 = (function (){var statearr_33675 = state_33650;
(statearr_33675[(7)] = inst_33577);

return statearr_33675;
})();
var statearr_33676_33729 = state_33650__$1;
(statearr_33676_33729[(2)] = null);

(statearr_33676_33729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (29))){
var inst_33624 = (state_33650[(11)]);
var state_33650__$1 = state_33650;
var statearr_33677_33730 = state_33650__$1;
(statearr_33677_33730[(2)] = inst_33624);

(statearr_33677_33730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (6))){
var state_33650__$1 = state_33650;
var statearr_33678_33731 = state_33650__$1;
(statearr_33678_33731[(2)] = false);

(statearr_33678_33731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (28))){
var inst_33620 = (state_33650[(2)]);
var inst_33621 = calc_state.call(null);
var inst_33577 = inst_33621;
var state_33650__$1 = (function (){var statearr_33679 = state_33650;
(statearr_33679[(15)] = inst_33620);

(statearr_33679[(7)] = inst_33577);

return statearr_33679;
})();
var statearr_33680_33732 = state_33650__$1;
(statearr_33680_33732[(2)] = null);

(statearr_33680_33732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (25))){
var inst_33646 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33681_33733 = state_33650__$1;
(statearr_33681_33733[(2)] = inst_33646);

(statearr_33681_33733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (34))){
var inst_33644 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33682_33734 = state_33650__$1;
(statearr_33682_33734[(2)] = inst_33644);

(statearr_33682_33734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (17))){
var state_33650__$1 = state_33650;
var statearr_33683_33735 = state_33650__$1;
(statearr_33683_33735[(2)] = false);

(statearr_33683_33735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (3))){
var state_33650__$1 = state_33650;
var statearr_33684_33736 = state_33650__$1;
(statearr_33684_33736[(2)] = false);

(statearr_33684_33736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (12))){
var inst_33648 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33650__$1,inst_33648);
} else {
if((state_val_33651 === (2))){
var inst_33552 = (state_33650[(8)]);
var inst_33557 = inst_33552.cljs$lang$protocol_mask$partition0$;
var inst_33558 = (inst_33557 & (64));
var inst_33559 = inst_33552.cljs$core$ISeq$;
var inst_33560 = (cljs.core.PROTOCOL_SENTINEL === inst_33559);
var inst_33561 = ((inst_33558) || (inst_33560));
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33561)){
var statearr_33685_33737 = state_33650__$1;
(statearr_33685_33737[(1)] = (5));

} else {
var statearr_33686_33738 = state_33650__$1;
(statearr_33686_33738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (23))){
var inst_33609 = (state_33650[(14)]);
var inst_33615 = (inst_33609 == null);
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33615)){
var statearr_33687_33739 = state_33650__$1;
(statearr_33687_33739[(1)] = (26));

} else {
var statearr_33688_33740 = state_33650__$1;
(statearr_33688_33740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (35))){
var inst_33635 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33635)){
var statearr_33689_33741 = state_33650__$1;
(statearr_33689_33741[(1)] = (36));

} else {
var statearr_33690_33742 = state_33650__$1;
(statearr_33690_33742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (19))){
var inst_33577 = (state_33650[(7)]);
var inst_33597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33577);
var state_33650__$1 = state_33650;
var statearr_33691_33743 = state_33650__$1;
(statearr_33691_33743[(2)] = inst_33597);

(statearr_33691_33743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (11))){
var inst_33577 = (state_33650[(7)]);
var inst_33581 = (inst_33577 == null);
var inst_33582 = cljs.core.not.call(null,inst_33581);
var state_33650__$1 = state_33650;
if(inst_33582){
var statearr_33692_33744 = state_33650__$1;
(statearr_33692_33744[(1)] = (13));

} else {
var statearr_33693_33745 = state_33650__$1;
(statearr_33693_33745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (9))){
var inst_33552 = (state_33650[(8)]);
var state_33650__$1 = state_33650;
var statearr_33694_33746 = state_33650__$1;
(statearr_33694_33746[(2)] = inst_33552);

(statearr_33694_33746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (5))){
var state_33650__$1 = state_33650;
var statearr_33695_33747 = state_33650__$1;
(statearr_33695_33747[(2)] = true);

(statearr_33695_33747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (14))){
var state_33650__$1 = state_33650;
var statearr_33696_33748 = state_33650__$1;
(statearr_33696_33748[(2)] = false);

(statearr_33696_33748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (26))){
var inst_33610 = (state_33650[(9)]);
var inst_33617 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33610);
var state_33650__$1 = state_33650;
var statearr_33697_33749 = state_33650__$1;
(statearr_33697_33749[(2)] = inst_33617);

(statearr_33697_33749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (16))){
var state_33650__$1 = state_33650;
var statearr_33698_33750 = state_33650__$1;
(statearr_33698_33750[(2)] = true);

(statearr_33698_33750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (38))){
var inst_33640 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33699_33751 = state_33650__$1;
(statearr_33699_33751[(2)] = inst_33640);

(statearr_33699_33751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (30))){
var inst_33610 = (state_33650[(9)]);
var inst_33601 = (state_33650[(10)]);
var inst_33602 = (state_33650[(13)]);
var inst_33627 = cljs.core.empty_QMARK_.call(null,inst_33601);
var inst_33628 = inst_33602.call(null,inst_33610);
var inst_33629 = cljs.core.not.call(null,inst_33628);
var inst_33630 = ((inst_33627) && (inst_33629));
var state_33650__$1 = state_33650;
var statearr_33700_33752 = state_33650__$1;
(statearr_33700_33752[(2)] = inst_33630);

(statearr_33700_33752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (10))){
var inst_33552 = (state_33650[(8)]);
var inst_33573 = (state_33650[(2)]);
var inst_33574 = cljs.core.get.call(null,inst_33573,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33575 = cljs.core.get.call(null,inst_33573,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33576 = cljs.core.get.call(null,inst_33573,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33577 = inst_33552;
var state_33650__$1 = (function (){var statearr_33701 = state_33650;
(statearr_33701[(16)] = inst_33574);

(statearr_33701[(17)] = inst_33575);

(statearr_33701[(7)] = inst_33577);

(statearr_33701[(18)] = inst_33576);

return statearr_33701;
})();
var statearr_33702_33753 = state_33650__$1;
(statearr_33702_33753[(2)] = null);

(statearr_33702_33753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (18))){
var inst_33592 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33703_33754 = state_33650__$1;
(statearr_33703_33754[(2)] = inst_33592);

(statearr_33703_33754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (37))){
var state_33650__$1 = state_33650;
var statearr_33704_33755 = state_33650__$1;
(statearr_33704_33755[(2)] = null);

(statearr_33704_33755[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (8))){
var inst_33552 = (state_33650[(8)]);
var inst_33570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33552);
var state_33650__$1 = state_33650;
var statearr_33705_33756 = state_33650__$1;
(statearr_33705_33756[(2)] = inst_33570);

(statearr_33705_33756[(1)] = (10));


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
});})(c__32652__auto___33710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32557__auto__,c__32652__auto___33710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32558__auto__ = null;
var cljs$core$async$mix_$_state_machine__32558__auto____0 = (function (){
var statearr_33706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33706[(0)] = cljs$core$async$mix_$_state_machine__32558__auto__);

(statearr_33706[(1)] = (1));

return statearr_33706;
});
var cljs$core$async$mix_$_state_machine__32558__auto____1 = (function (state_33650){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33707){if((e33707 instanceof Object)){
var ex__32561__auto__ = e33707;
var statearr_33708_33757 = state_33650;
(statearr_33708_33757[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33758 = state_33650;
state_33650 = G__33758;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32558__auto__ = function(state_33650){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32558__auto____1.call(this,state_33650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32558__auto____0;
cljs$core$async$mix_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32558__auto____1;
return cljs$core$async$mix_$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___33710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32654__auto__ = (function (){var statearr_33709 = f__32653__auto__.call(null);
(statearr_33709[(6)] = c__32652__auto___33710);

return statearr_33709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___33710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33760 = arguments.length;
switch (G__33760) {
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
var G__33764 = arguments.length;
switch (G__33764) {
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
return (function (p1__33762_SHARP_){
if(cljs.core.truth_(p1__33762_SHARP_.call(null,topic))){
return p1__33762_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33762_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33765 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33766){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33766 = meta33766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33767,meta33766__$1){
var self__ = this;
var _33767__$1 = this;
return (new cljs.core.async.t_cljs$core$async33765(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33766__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33767){
var self__ = this;
var _33767__$1 = this;
return self__.meta33766;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33765.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33766","meta33766",1742438325,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33765";

cljs.core.async.t_cljs$core$async33765.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33765");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33765.
 */
cljs.core.async.__GT_t_cljs$core$async33765 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33765(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33766){
return (new cljs.core.async.t_cljs$core$async33765(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33766));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33765(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32652__auto___33885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___33885,mults,ensure_mult,p){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___33885,mults,ensure_mult,p){
return (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (7))){
var inst_33835 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33841_33886 = state_33839__$1;
(statearr_33841_33886[(2)] = inst_33835);

(statearr_33841_33886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (20))){
var state_33839__$1 = state_33839;
var statearr_33842_33887 = state_33839__$1;
(statearr_33842_33887[(2)] = null);

(statearr_33842_33887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (1))){
var state_33839__$1 = state_33839;
var statearr_33843_33888 = state_33839__$1;
(statearr_33843_33888[(2)] = null);

(statearr_33843_33888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (24))){
var inst_33818 = (state_33839[(7)]);
var inst_33827 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33818);
var state_33839__$1 = state_33839;
var statearr_33844_33889 = state_33839__$1;
(statearr_33844_33889[(2)] = inst_33827);

(statearr_33844_33889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (4))){
var inst_33770 = (state_33839[(8)]);
var inst_33770__$1 = (state_33839[(2)]);
var inst_33771 = (inst_33770__$1 == null);
var state_33839__$1 = (function (){var statearr_33845 = state_33839;
(statearr_33845[(8)] = inst_33770__$1);

return statearr_33845;
})();
if(cljs.core.truth_(inst_33771)){
var statearr_33846_33890 = state_33839__$1;
(statearr_33846_33890[(1)] = (5));

} else {
var statearr_33847_33891 = state_33839__$1;
(statearr_33847_33891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (15))){
var inst_33812 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33848_33892 = state_33839__$1;
(statearr_33848_33892[(2)] = inst_33812);

(statearr_33848_33892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (21))){
var inst_33832 = (state_33839[(2)]);
var state_33839__$1 = (function (){var statearr_33849 = state_33839;
(statearr_33849[(9)] = inst_33832);

return statearr_33849;
})();
var statearr_33850_33893 = state_33839__$1;
(statearr_33850_33893[(2)] = null);

(statearr_33850_33893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (13))){
var inst_33794 = (state_33839[(10)]);
var inst_33796 = cljs.core.chunked_seq_QMARK_.call(null,inst_33794);
var state_33839__$1 = state_33839;
if(inst_33796){
var statearr_33851_33894 = state_33839__$1;
(statearr_33851_33894[(1)] = (16));

} else {
var statearr_33852_33895 = state_33839__$1;
(statearr_33852_33895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (22))){
var inst_33824 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33824)){
var statearr_33853_33896 = state_33839__$1;
(statearr_33853_33896[(1)] = (23));

} else {
var statearr_33854_33897 = state_33839__$1;
(statearr_33854_33897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (6))){
var inst_33770 = (state_33839[(8)]);
var inst_33820 = (state_33839[(11)]);
var inst_33818 = (state_33839[(7)]);
var inst_33818__$1 = topic_fn.call(null,inst_33770);
var inst_33819 = cljs.core.deref.call(null,mults);
var inst_33820__$1 = cljs.core.get.call(null,inst_33819,inst_33818__$1);
var state_33839__$1 = (function (){var statearr_33855 = state_33839;
(statearr_33855[(11)] = inst_33820__$1);

(statearr_33855[(7)] = inst_33818__$1);

return statearr_33855;
})();
if(cljs.core.truth_(inst_33820__$1)){
var statearr_33856_33898 = state_33839__$1;
(statearr_33856_33898[(1)] = (19));

} else {
var statearr_33857_33899 = state_33839__$1;
(statearr_33857_33899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (25))){
var inst_33829 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33858_33900 = state_33839__$1;
(statearr_33858_33900[(2)] = inst_33829);

(statearr_33858_33900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (17))){
var inst_33794 = (state_33839[(10)]);
var inst_33803 = cljs.core.first.call(null,inst_33794);
var inst_33804 = cljs.core.async.muxch_STAR_.call(null,inst_33803);
var inst_33805 = cljs.core.async.close_BANG_.call(null,inst_33804);
var inst_33806 = cljs.core.next.call(null,inst_33794);
var inst_33780 = inst_33806;
var inst_33781 = null;
var inst_33782 = (0);
var inst_33783 = (0);
var state_33839__$1 = (function (){var statearr_33859 = state_33839;
(statearr_33859[(12)] = inst_33782);

(statearr_33859[(13)] = inst_33780);

(statearr_33859[(14)] = inst_33805);

(statearr_33859[(15)] = inst_33783);

(statearr_33859[(16)] = inst_33781);

return statearr_33859;
})();
var statearr_33860_33901 = state_33839__$1;
(statearr_33860_33901[(2)] = null);

(statearr_33860_33901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (3))){
var inst_33837 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33839__$1,inst_33837);
} else {
if((state_val_33840 === (12))){
var inst_33814 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33861_33902 = state_33839__$1;
(statearr_33861_33902[(2)] = inst_33814);

(statearr_33861_33902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (2))){
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33839__$1,(4),ch);
} else {
if((state_val_33840 === (23))){
var state_33839__$1 = state_33839;
var statearr_33862_33903 = state_33839__$1;
(statearr_33862_33903[(2)] = null);

(statearr_33862_33903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (19))){
var inst_33770 = (state_33839[(8)]);
var inst_33820 = (state_33839[(11)]);
var inst_33822 = cljs.core.async.muxch_STAR_.call(null,inst_33820);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33839__$1,(22),inst_33822,inst_33770);
} else {
if((state_val_33840 === (11))){
var inst_33780 = (state_33839[(13)]);
var inst_33794 = (state_33839[(10)]);
var inst_33794__$1 = cljs.core.seq.call(null,inst_33780);
var state_33839__$1 = (function (){var statearr_33863 = state_33839;
(statearr_33863[(10)] = inst_33794__$1);

return statearr_33863;
})();
if(inst_33794__$1){
var statearr_33864_33904 = state_33839__$1;
(statearr_33864_33904[(1)] = (13));

} else {
var statearr_33865_33905 = state_33839__$1;
(statearr_33865_33905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (9))){
var inst_33816 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33866_33906 = state_33839__$1;
(statearr_33866_33906[(2)] = inst_33816);

(statearr_33866_33906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (5))){
var inst_33777 = cljs.core.deref.call(null,mults);
var inst_33778 = cljs.core.vals.call(null,inst_33777);
var inst_33779 = cljs.core.seq.call(null,inst_33778);
var inst_33780 = inst_33779;
var inst_33781 = null;
var inst_33782 = (0);
var inst_33783 = (0);
var state_33839__$1 = (function (){var statearr_33867 = state_33839;
(statearr_33867[(12)] = inst_33782);

(statearr_33867[(13)] = inst_33780);

(statearr_33867[(15)] = inst_33783);

(statearr_33867[(16)] = inst_33781);

return statearr_33867;
})();
var statearr_33868_33907 = state_33839__$1;
(statearr_33868_33907[(2)] = null);

(statearr_33868_33907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (14))){
var state_33839__$1 = state_33839;
var statearr_33872_33908 = state_33839__$1;
(statearr_33872_33908[(2)] = null);

(statearr_33872_33908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (16))){
var inst_33794 = (state_33839[(10)]);
var inst_33798 = cljs.core.chunk_first.call(null,inst_33794);
var inst_33799 = cljs.core.chunk_rest.call(null,inst_33794);
var inst_33800 = cljs.core.count.call(null,inst_33798);
var inst_33780 = inst_33799;
var inst_33781 = inst_33798;
var inst_33782 = inst_33800;
var inst_33783 = (0);
var state_33839__$1 = (function (){var statearr_33873 = state_33839;
(statearr_33873[(12)] = inst_33782);

(statearr_33873[(13)] = inst_33780);

(statearr_33873[(15)] = inst_33783);

(statearr_33873[(16)] = inst_33781);

return statearr_33873;
})();
var statearr_33874_33909 = state_33839__$1;
(statearr_33874_33909[(2)] = null);

(statearr_33874_33909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (10))){
var inst_33782 = (state_33839[(12)]);
var inst_33780 = (state_33839[(13)]);
var inst_33783 = (state_33839[(15)]);
var inst_33781 = (state_33839[(16)]);
var inst_33788 = cljs.core._nth.call(null,inst_33781,inst_33783);
var inst_33789 = cljs.core.async.muxch_STAR_.call(null,inst_33788);
var inst_33790 = cljs.core.async.close_BANG_.call(null,inst_33789);
var inst_33791 = (inst_33783 + (1));
var tmp33869 = inst_33782;
var tmp33870 = inst_33780;
var tmp33871 = inst_33781;
var inst_33780__$1 = tmp33870;
var inst_33781__$1 = tmp33871;
var inst_33782__$1 = tmp33869;
var inst_33783__$1 = inst_33791;
var state_33839__$1 = (function (){var statearr_33875 = state_33839;
(statearr_33875[(12)] = inst_33782__$1);

(statearr_33875[(17)] = inst_33790);

(statearr_33875[(13)] = inst_33780__$1);

(statearr_33875[(15)] = inst_33783__$1);

(statearr_33875[(16)] = inst_33781__$1);

return statearr_33875;
})();
var statearr_33876_33910 = state_33839__$1;
(statearr_33876_33910[(2)] = null);

(statearr_33876_33910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (18))){
var inst_33809 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33877_33911 = state_33839__$1;
(statearr_33877_33911[(2)] = inst_33809);

(statearr_33877_33911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (8))){
var inst_33782 = (state_33839[(12)]);
var inst_33783 = (state_33839[(15)]);
var inst_33785 = (inst_33783 < inst_33782);
var inst_33786 = inst_33785;
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33786)){
var statearr_33878_33912 = state_33839__$1;
(statearr_33878_33912[(1)] = (10));

} else {
var statearr_33879_33913 = state_33839__$1;
(statearr_33879_33913[(1)] = (11));

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
});})(c__32652__auto___33885,mults,ensure_mult,p))
;
return ((function (switch__32557__auto__,c__32652__auto___33885,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_33880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33880[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_33880[(1)] = (1));

return statearr_33880;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_33839){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33881){if((e33881 instanceof Object)){
var ex__32561__auto__ = e33881;
var statearr_33882_33914 = state_33839;
(statearr_33882_33914[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33915 = state_33839;
state_33839 = G__33915;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___33885,mults,ensure_mult,p))
})();
var state__32654__auto__ = (function (){var statearr_33883 = f__32653__auto__.call(null);
(statearr_33883[(6)] = c__32652__auto___33885);

return statearr_33883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___33885,mults,ensure_mult,p))
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
var G__33917 = arguments.length;
switch (G__33917) {
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
var G__33920 = arguments.length;
switch (G__33920) {
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
var G__33923 = arguments.length;
switch (G__33923) {
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
var c__32652__auto___33990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___33990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___33990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33962){
var state_val_33963 = (state_33962[(1)]);
if((state_val_33963 === (7))){
var state_33962__$1 = state_33962;
var statearr_33964_33991 = state_33962__$1;
(statearr_33964_33991[(2)] = null);

(statearr_33964_33991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (1))){
var state_33962__$1 = state_33962;
var statearr_33965_33992 = state_33962__$1;
(statearr_33965_33992[(2)] = null);

(statearr_33965_33992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (4))){
var inst_33926 = (state_33962[(7)]);
var inst_33928 = (inst_33926 < cnt);
var state_33962__$1 = state_33962;
if(cljs.core.truth_(inst_33928)){
var statearr_33966_33993 = state_33962__$1;
(statearr_33966_33993[(1)] = (6));

} else {
var statearr_33967_33994 = state_33962__$1;
(statearr_33967_33994[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (15))){
var inst_33958 = (state_33962[(2)]);
var state_33962__$1 = state_33962;
var statearr_33968_33995 = state_33962__$1;
(statearr_33968_33995[(2)] = inst_33958);

(statearr_33968_33995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (13))){
var inst_33951 = cljs.core.async.close_BANG_.call(null,out);
var state_33962__$1 = state_33962;
var statearr_33969_33996 = state_33962__$1;
(statearr_33969_33996[(2)] = inst_33951);

(statearr_33969_33996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (6))){
var state_33962__$1 = state_33962;
var statearr_33970_33997 = state_33962__$1;
(statearr_33970_33997[(2)] = null);

(statearr_33970_33997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (3))){
var inst_33960 = (state_33962[(2)]);
var state_33962__$1 = state_33962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33962__$1,inst_33960);
} else {
if((state_val_33963 === (12))){
var inst_33948 = (state_33962[(8)]);
var inst_33948__$1 = (state_33962[(2)]);
var inst_33949 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33948__$1);
var state_33962__$1 = (function (){var statearr_33971 = state_33962;
(statearr_33971[(8)] = inst_33948__$1);

return statearr_33971;
})();
if(cljs.core.truth_(inst_33949)){
var statearr_33972_33998 = state_33962__$1;
(statearr_33972_33998[(1)] = (13));

} else {
var statearr_33973_33999 = state_33962__$1;
(statearr_33973_33999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (2))){
var inst_33925 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33926 = (0);
var state_33962__$1 = (function (){var statearr_33974 = state_33962;
(statearr_33974[(7)] = inst_33926);

(statearr_33974[(9)] = inst_33925);

return statearr_33974;
})();
var statearr_33975_34000 = state_33962__$1;
(statearr_33975_34000[(2)] = null);

(statearr_33975_34000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (11))){
var inst_33926 = (state_33962[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33962,(10),Object,null,(9));
var inst_33935 = chs__$1.call(null,inst_33926);
var inst_33936 = done.call(null,inst_33926);
var inst_33937 = cljs.core.async.take_BANG_.call(null,inst_33935,inst_33936);
var state_33962__$1 = state_33962;
var statearr_33976_34001 = state_33962__$1;
(statearr_33976_34001[(2)] = inst_33937);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (9))){
var inst_33926 = (state_33962[(7)]);
var inst_33939 = (state_33962[(2)]);
var inst_33940 = (inst_33926 + (1));
var inst_33926__$1 = inst_33940;
var state_33962__$1 = (function (){var statearr_33977 = state_33962;
(statearr_33977[(7)] = inst_33926__$1);

(statearr_33977[(10)] = inst_33939);

return statearr_33977;
})();
var statearr_33978_34002 = state_33962__$1;
(statearr_33978_34002[(2)] = null);

(statearr_33978_34002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (5))){
var inst_33946 = (state_33962[(2)]);
var state_33962__$1 = (function (){var statearr_33979 = state_33962;
(statearr_33979[(11)] = inst_33946);

return statearr_33979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33962__$1,(12),dchan);
} else {
if((state_val_33963 === (14))){
var inst_33948 = (state_33962[(8)]);
var inst_33953 = cljs.core.apply.call(null,f,inst_33948);
var state_33962__$1 = state_33962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33962__$1,(16),out,inst_33953);
} else {
if((state_val_33963 === (16))){
var inst_33955 = (state_33962[(2)]);
var state_33962__$1 = (function (){var statearr_33980 = state_33962;
(statearr_33980[(12)] = inst_33955);

return statearr_33980;
})();
var statearr_33981_34003 = state_33962__$1;
(statearr_33981_34003[(2)] = null);

(statearr_33981_34003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (10))){
var inst_33930 = (state_33962[(2)]);
var inst_33931 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33962__$1 = (function (){var statearr_33982 = state_33962;
(statearr_33982[(13)] = inst_33930);

return statearr_33982;
})();
var statearr_33983_34004 = state_33962__$1;
(statearr_33983_34004[(2)] = inst_33931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33963 === (8))){
var inst_33944 = (state_33962[(2)]);
var state_33962__$1 = state_33962;
var statearr_33984_34005 = state_33962__$1;
(statearr_33984_34005[(2)] = inst_33944);

(statearr_33984_34005[(1)] = (5));


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
});})(c__32652__auto___33990,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32557__auto__,c__32652__auto___33990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_33985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33985[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_33985[(1)] = (1));

return statearr_33985;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_33962){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_33962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e33986){if((e33986 instanceof Object)){
var ex__32561__auto__ = e33986;
var statearr_33987_34006 = state_33962;
(statearr_33987_34006[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34007 = state_33962;
state_33962 = G__34007;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_33962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_33962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___33990,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32654__auto__ = (function (){var statearr_33988 = f__32653__auto__.call(null);
(statearr_33988[(6)] = c__32652__auto___33990);

return statearr_33988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___33990,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34010 = arguments.length;
switch (G__34010) {
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
var c__32652__auto___34064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___34064,out){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___34064,out){
return (function (state_34042){
var state_val_34043 = (state_34042[(1)]);
if((state_val_34043 === (7))){
var inst_34022 = (state_34042[(7)]);
var inst_34021 = (state_34042[(8)]);
var inst_34021__$1 = (state_34042[(2)]);
var inst_34022__$1 = cljs.core.nth.call(null,inst_34021__$1,(0),null);
var inst_34023 = cljs.core.nth.call(null,inst_34021__$1,(1),null);
var inst_34024 = (inst_34022__$1 == null);
var state_34042__$1 = (function (){var statearr_34044 = state_34042;
(statearr_34044[(7)] = inst_34022__$1);

(statearr_34044[(9)] = inst_34023);

(statearr_34044[(8)] = inst_34021__$1);

return statearr_34044;
})();
if(cljs.core.truth_(inst_34024)){
var statearr_34045_34065 = state_34042__$1;
(statearr_34045_34065[(1)] = (8));

} else {
var statearr_34046_34066 = state_34042__$1;
(statearr_34046_34066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (1))){
var inst_34011 = cljs.core.vec.call(null,chs);
var inst_34012 = inst_34011;
var state_34042__$1 = (function (){var statearr_34047 = state_34042;
(statearr_34047[(10)] = inst_34012);

return statearr_34047;
})();
var statearr_34048_34067 = state_34042__$1;
(statearr_34048_34067[(2)] = null);

(statearr_34048_34067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (4))){
var inst_34012 = (state_34042[(10)]);
var state_34042__$1 = state_34042;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34042__$1,(7),inst_34012);
} else {
if((state_val_34043 === (6))){
var inst_34038 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
var statearr_34049_34068 = state_34042__$1;
(statearr_34049_34068[(2)] = inst_34038);

(statearr_34049_34068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (3))){
var inst_34040 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34042__$1,inst_34040);
} else {
if((state_val_34043 === (2))){
var inst_34012 = (state_34042[(10)]);
var inst_34014 = cljs.core.count.call(null,inst_34012);
var inst_34015 = (inst_34014 > (0));
var state_34042__$1 = state_34042;
if(cljs.core.truth_(inst_34015)){
var statearr_34051_34069 = state_34042__$1;
(statearr_34051_34069[(1)] = (4));

} else {
var statearr_34052_34070 = state_34042__$1;
(statearr_34052_34070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (11))){
var inst_34012 = (state_34042[(10)]);
var inst_34031 = (state_34042[(2)]);
var tmp34050 = inst_34012;
var inst_34012__$1 = tmp34050;
var state_34042__$1 = (function (){var statearr_34053 = state_34042;
(statearr_34053[(10)] = inst_34012__$1);

(statearr_34053[(11)] = inst_34031);

return statearr_34053;
})();
var statearr_34054_34071 = state_34042__$1;
(statearr_34054_34071[(2)] = null);

(statearr_34054_34071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (9))){
var inst_34022 = (state_34042[(7)]);
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34042__$1,(11),out,inst_34022);
} else {
if((state_val_34043 === (5))){
var inst_34036 = cljs.core.async.close_BANG_.call(null,out);
var state_34042__$1 = state_34042;
var statearr_34055_34072 = state_34042__$1;
(statearr_34055_34072[(2)] = inst_34036);

(statearr_34055_34072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (10))){
var inst_34034 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
var statearr_34056_34073 = state_34042__$1;
(statearr_34056_34073[(2)] = inst_34034);

(statearr_34056_34073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (8))){
var inst_34012 = (state_34042[(10)]);
var inst_34022 = (state_34042[(7)]);
var inst_34023 = (state_34042[(9)]);
var inst_34021 = (state_34042[(8)]);
var inst_34026 = (function (){var cs = inst_34012;
var vec__34017 = inst_34021;
var v = inst_34022;
var c = inst_34023;
return ((function (cs,vec__34017,v,c,inst_34012,inst_34022,inst_34023,inst_34021,state_val_34043,c__32652__auto___34064,out){
return (function (p1__34008_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34008_SHARP_);
});
;})(cs,vec__34017,v,c,inst_34012,inst_34022,inst_34023,inst_34021,state_val_34043,c__32652__auto___34064,out))
})();
var inst_34027 = cljs.core.filterv.call(null,inst_34026,inst_34012);
var inst_34012__$1 = inst_34027;
var state_34042__$1 = (function (){var statearr_34057 = state_34042;
(statearr_34057[(10)] = inst_34012__$1);

return statearr_34057;
})();
var statearr_34058_34074 = state_34042__$1;
(statearr_34058_34074[(2)] = null);

(statearr_34058_34074[(1)] = (2));


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
});})(c__32652__auto___34064,out))
;
return ((function (switch__32557__auto__,c__32652__auto___34064,out){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_34059 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34059[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_34059[(1)] = (1));

return statearr_34059;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_34042){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34060){if((e34060 instanceof Object)){
var ex__32561__auto__ = e34060;
var statearr_34061_34075 = state_34042;
(statearr_34061_34075[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34076 = state_34042;
state_34042 = G__34076;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_34042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_34042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___34064,out))
})();
var state__32654__auto__ = (function (){var statearr_34062 = f__32653__auto__.call(null);
(statearr_34062[(6)] = c__32652__auto___34064);

return statearr_34062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___34064,out))
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
var G__34078 = arguments.length;
switch (G__34078) {
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
var c__32652__auto___34123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___34123,out){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___34123,out){
return (function (state_34102){
var state_val_34103 = (state_34102[(1)]);
if((state_val_34103 === (7))){
var inst_34084 = (state_34102[(7)]);
var inst_34084__$1 = (state_34102[(2)]);
var inst_34085 = (inst_34084__$1 == null);
var inst_34086 = cljs.core.not.call(null,inst_34085);
var state_34102__$1 = (function (){var statearr_34104 = state_34102;
(statearr_34104[(7)] = inst_34084__$1);

return statearr_34104;
})();
if(inst_34086){
var statearr_34105_34124 = state_34102__$1;
(statearr_34105_34124[(1)] = (8));

} else {
var statearr_34106_34125 = state_34102__$1;
(statearr_34106_34125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (1))){
var inst_34079 = (0);
var state_34102__$1 = (function (){var statearr_34107 = state_34102;
(statearr_34107[(8)] = inst_34079);

return statearr_34107;
})();
var statearr_34108_34126 = state_34102__$1;
(statearr_34108_34126[(2)] = null);

(statearr_34108_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (4))){
var state_34102__$1 = state_34102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34102__$1,(7),ch);
} else {
if((state_val_34103 === (6))){
var inst_34097 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34109_34127 = state_34102__$1;
(statearr_34109_34127[(2)] = inst_34097);

(statearr_34109_34127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (3))){
var inst_34099 = (state_34102[(2)]);
var inst_34100 = cljs.core.async.close_BANG_.call(null,out);
var state_34102__$1 = (function (){var statearr_34110 = state_34102;
(statearr_34110[(9)] = inst_34099);

return statearr_34110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34102__$1,inst_34100);
} else {
if((state_val_34103 === (2))){
var inst_34079 = (state_34102[(8)]);
var inst_34081 = (inst_34079 < n);
var state_34102__$1 = state_34102;
if(cljs.core.truth_(inst_34081)){
var statearr_34111_34128 = state_34102__$1;
(statearr_34111_34128[(1)] = (4));

} else {
var statearr_34112_34129 = state_34102__$1;
(statearr_34112_34129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (11))){
var inst_34079 = (state_34102[(8)]);
var inst_34089 = (state_34102[(2)]);
var inst_34090 = (inst_34079 + (1));
var inst_34079__$1 = inst_34090;
var state_34102__$1 = (function (){var statearr_34113 = state_34102;
(statearr_34113[(8)] = inst_34079__$1);

(statearr_34113[(10)] = inst_34089);

return statearr_34113;
})();
var statearr_34114_34130 = state_34102__$1;
(statearr_34114_34130[(2)] = null);

(statearr_34114_34130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (9))){
var state_34102__$1 = state_34102;
var statearr_34115_34131 = state_34102__$1;
(statearr_34115_34131[(2)] = null);

(statearr_34115_34131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (5))){
var state_34102__$1 = state_34102;
var statearr_34116_34132 = state_34102__$1;
(statearr_34116_34132[(2)] = null);

(statearr_34116_34132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (10))){
var inst_34094 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34117_34133 = state_34102__$1;
(statearr_34117_34133[(2)] = inst_34094);

(statearr_34117_34133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (8))){
var inst_34084 = (state_34102[(7)]);
var state_34102__$1 = state_34102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34102__$1,(11),out,inst_34084);
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
});})(c__32652__auto___34123,out))
;
return ((function (switch__32557__auto__,c__32652__auto___34123,out){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_34118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34118[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_34118[(1)] = (1));

return statearr_34118;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_34102){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34119){if((e34119 instanceof Object)){
var ex__32561__auto__ = e34119;
var statearr_34120_34134 = state_34102;
(statearr_34120_34134[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34135 = state_34102;
state_34102 = G__34135;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_34102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_34102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___34123,out))
})();
var state__32654__auto__ = (function (){var statearr_34121 = f__32653__auto__.call(null);
(statearr_34121[(6)] = c__32652__auto___34123);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___34123,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34137 = (function (f,ch,meta34138){
this.f = f;
this.ch = ch;
this.meta34138 = meta34138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34139,meta34138__$1){
var self__ = this;
var _34139__$1 = this;
return (new cljs.core.async.t_cljs$core$async34137(self__.f,self__.ch,meta34138__$1));
});

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34139){
var self__ = this;
var _34139__$1 = this;
return self__.meta34138;
});

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34140 = (function (f,ch,meta34138,_,fn1,meta34141){
this.f = f;
this.ch = ch;
this.meta34138 = meta34138;
this._ = _;
this.fn1 = fn1;
this.meta34141 = meta34141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34142,meta34141__$1){
var self__ = this;
var _34142__$1 = this;
return (new cljs.core.async.t_cljs$core$async34140(self__.f,self__.ch,self__.meta34138,self__._,self__.fn1,meta34141__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34142){
var self__ = this;
var _34142__$1 = this;
return self__.meta34141;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34136_SHARP_){
return f1.call(null,(((p1__34136_SHARP_ == null))?null:self__.f.call(null,p1__34136_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34140.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34138","meta34138",-1526378639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34137","cljs.core.async/t_cljs$core$async34137",1510872850,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34141","meta34141",846809801,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34140";

cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34140");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34140.
 */
cljs.core.async.__GT_t_cljs$core$async34140 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34140(f__$1,ch__$1,meta34138__$1,___$2,fn1__$1,meta34141){
return (new cljs.core.async.t_cljs$core$async34140(f__$1,ch__$1,meta34138__$1,___$2,fn1__$1,meta34141));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34140(self__.f,self__.ch,self__.meta34138,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34138","meta34138",-1526378639,null)], null);
});

cljs.core.async.t_cljs$core$async34137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34137";

cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34137");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34137.
 */
cljs.core.async.__GT_t_cljs$core$async34137 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34137(f__$1,ch__$1,meta34138){
return (new cljs.core.async.t_cljs$core$async34137(f__$1,ch__$1,meta34138));
});

}

return (new cljs.core.async.t_cljs$core$async34137(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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
cljs.core.async.t_cljs$core$async34143 = (function (f,ch,meta34144){
this.f = f;
this.ch = ch;
this.meta34144 = meta34144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34145,meta34144__$1){
var self__ = this;
var _34145__$1 = this;
return (new cljs.core.async.t_cljs$core$async34143(self__.f,self__.ch,meta34144__$1));
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
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34144","meta34144",1629469954,null)], null);
});

cljs.core.async.t_cljs$core$async34143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34143";

cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34143");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34143.
 */
cljs.core.async.__GT_t_cljs$core$async34143 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34143(f__$1,ch__$1,meta34144){
return (new cljs.core.async.t_cljs$core$async34143(f__$1,ch__$1,meta34144));
});

}

return (new cljs.core.async.t_cljs$core$async34143(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34146 = (function (p,ch,meta34147){
this.p = p;
this.ch = ch;
this.meta34147 = meta34147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34148,meta34147__$1){
var self__ = this;
var _34148__$1 = this;
return (new cljs.core.async.t_cljs$core$async34146(self__.p,self__.ch,meta34147__$1));
});

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34148){
var self__ = this;
var _34148__$1 = this;
return self__.meta34147;
});

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34147","meta34147",-792472468,null)], null);
});

cljs.core.async.t_cljs$core$async34146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34146";

cljs.core.async.t_cljs$core$async34146.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34146");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34146.
 */
cljs.core.async.__GT_t_cljs$core$async34146 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34146(p__$1,ch__$1,meta34147){
return (new cljs.core.async.t_cljs$core$async34146(p__$1,ch__$1,meta34147));
});

}

return (new cljs.core.async.t_cljs$core$async34146(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34150 = arguments.length;
switch (G__34150) {
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
var c__32652__auto___34190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___34190,out){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___34190,out){
return (function (state_34171){
var state_val_34172 = (state_34171[(1)]);
if((state_val_34172 === (7))){
var inst_34167 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
var statearr_34173_34191 = state_34171__$1;
(statearr_34173_34191[(2)] = inst_34167);

(statearr_34173_34191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (1))){
var state_34171__$1 = state_34171;
var statearr_34174_34192 = state_34171__$1;
(statearr_34174_34192[(2)] = null);

(statearr_34174_34192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (4))){
var inst_34153 = (state_34171[(7)]);
var inst_34153__$1 = (state_34171[(2)]);
var inst_34154 = (inst_34153__$1 == null);
var state_34171__$1 = (function (){var statearr_34175 = state_34171;
(statearr_34175[(7)] = inst_34153__$1);

return statearr_34175;
})();
if(cljs.core.truth_(inst_34154)){
var statearr_34176_34193 = state_34171__$1;
(statearr_34176_34193[(1)] = (5));

} else {
var statearr_34177_34194 = state_34171__$1;
(statearr_34177_34194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (6))){
var inst_34153 = (state_34171[(7)]);
var inst_34158 = p.call(null,inst_34153);
var state_34171__$1 = state_34171;
if(cljs.core.truth_(inst_34158)){
var statearr_34178_34195 = state_34171__$1;
(statearr_34178_34195[(1)] = (8));

} else {
var statearr_34179_34196 = state_34171__$1;
(statearr_34179_34196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (3))){
var inst_34169 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34171__$1,inst_34169);
} else {
if((state_val_34172 === (2))){
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34171__$1,(4),ch);
} else {
if((state_val_34172 === (11))){
var inst_34161 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
var statearr_34180_34197 = state_34171__$1;
(statearr_34180_34197[(2)] = inst_34161);

(statearr_34180_34197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (9))){
var state_34171__$1 = state_34171;
var statearr_34181_34198 = state_34171__$1;
(statearr_34181_34198[(2)] = null);

(statearr_34181_34198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (5))){
var inst_34156 = cljs.core.async.close_BANG_.call(null,out);
var state_34171__$1 = state_34171;
var statearr_34182_34199 = state_34171__$1;
(statearr_34182_34199[(2)] = inst_34156);

(statearr_34182_34199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (10))){
var inst_34164 = (state_34171[(2)]);
var state_34171__$1 = (function (){var statearr_34183 = state_34171;
(statearr_34183[(8)] = inst_34164);

return statearr_34183;
})();
var statearr_34184_34200 = state_34171__$1;
(statearr_34184_34200[(2)] = null);

(statearr_34184_34200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (8))){
var inst_34153 = (state_34171[(7)]);
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34171__$1,(11),out,inst_34153);
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
});})(c__32652__auto___34190,out))
;
return ((function (switch__32557__auto__,c__32652__auto___34190,out){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_34185 = [null,null,null,null,null,null,null,null,null];
(statearr_34185[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_34185[(1)] = (1));

return statearr_34185;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_34171){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34186){if((e34186 instanceof Object)){
var ex__32561__auto__ = e34186;
var statearr_34187_34201 = state_34171;
(statearr_34187_34201[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34202 = state_34171;
state_34171 = G__34202;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_34171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_34171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___34190,out))
})();
var state__32654__auto__ = (function (){var statearr_34188 = f__32653__auto__.call(null);
(statearr_34188[(6)] = c__32652__auto___34190);

return statearr_34188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___34190,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34204 = arguments.length;
switch (G__34204) {
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
var c__32652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto__){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto__){
return (function (state_34267){
var state_val_34268 = (state_34267[(1)]);
if((state_val_34268 === (7))){
var inst_34263 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34269_34307 = state_34267__$1;
(statearr_34269_34307[(2)] = inst_34263);

(statearr_34269_34307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (20))){
var inst_34233 = (state_34267[(7)]);
var inst_34244 = (state_34267[(2)]);
var inst_34245 = cljs.core.next.call(null,inst_34233);
var inst_34219 = inst_34245;
var inst_34220 = null;
var inst_34221 = (0);
var inst_34222 = (0);
var state_34267__$1 = (function (){var statearr_34270 = state_34267;
(statearr_34270[(8)] = inst_34244);

(statearr_34270[(9)] = inst_34221);

(statearr_34270[(10)] = inst_34220);

(statearr_34270[(11)] = inst_34219);

(statearr_34270[(12)] = inst_34222);

return statearr_34270;
})();
var statearr_34271_34308 = state_34267__$1;
(statearr_34271_34308[(2)] = null);

(statearr_34271_34308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (1))){
var state_34267__$1 = state_34267;
var statearr_34272_34309 = state_34267__$1;
(statearr_34272_34309[(2)] = null);

(statearr_34272_34309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (4))){
var inst_34208 = (state_34267[(13)]);
var inst_34208__$1 = (state_34267[(2)]);
var inst_34209 = (inst_34208__$1 == null);
var state_34267__$1 = (function (){var statearr_34273 = state_34267;
(statearr_34273[(13)] = inst_34208__$1);

return statearr_34273;
})();
if(cljs.core.truth_(inst_34209)){
var statearr_34274_34310 = state_34267__$1;
(statearr_34274_34310[(1)] = (5));

} else {
var statearr_34275_34311 = state_34267__$1;
(statearr_34275_34311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (15))){
var state_34267__$1 = state_34267;
var statearr_34279_34312 = state_34267__$1;
(statearr_34279_34312[(2)] = null);

(statearr_34279_34312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (21))){
var state_34267__$1 = state_34267;
var statearr_34280_34313 = state_34267__$1;
(statearr_34280_34313[(2)] = null);

(statearr_34280_34313[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (13))){
var inst_34221 = (state_34267[(9)]);
var inst_34220 = (state_34267[(10)]);
var inst_34219 = (state_34267[(11)]);
var inst_34222 = (state_34267[(12)]);
var inst_34229 = (state_34267[(2)]);
var inst_34230 = (inst_34222 + (1));
var tmp34276 = inst_34221;
var tmp34277 = inst_34220;
var tmp34278 = inst_34219;
var inst_34219__$1 = tmp34278;
var inst_34220__$1 = tmp34277;
var inst_34221__$1 = tmp34276;
var inst_34222__$1 = inst_34230;
var state_34267__$1 = (function (){var statearr_34281 = state_34267;
(statearr_34281[(9)] = inst_34221__$1);

(statearr_34281[(14)] = inst_34229);

(statearr_34281[(10)] = inst_34220__$1);

(statearr_34281[(11)] = inst_34219__$1);

(statearr_34281[(12)] = inst_34222__$1);

return statearr_34281;
})();
var statearr_34282_34314 = state_34267__$1;
(statearr_34282_34314[(2)] = null);

(statearr_34282_34314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (22))){
var state_34267__$1 = state_34267;
var statearr_34283_34315 = state_34267__$1;
(statearr_34283_34315[(2)] = null);

(statearr_34283_34315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (6))){
var inst_34208 = (state_34267[(13)]);
var inst_34217 = f.call(null,inst_34208);
var inst_34218 = cljs.core.seq.call(null,inst_34217);
var inst_34219 = inst_34218;
var inst_34220 = null;
var inst_34221 = (0);
var inst_34222 = (0);
var state_34267__$1 = (function (){var statearr_34284 = state_34267;
(statearr_34284[(9)] = inst_34221);

(statearr_34284[(10)] = inst_34220);

(statearr_34284[(11)] = inst_34219);

(statearr_34284[(12)] = inst_34222);

return statearr_34284;
})();
var statearr_34285_34316 = state_34267__$1;
(statearr_34285_34316[(2)] = null);

(statearr_34285_34316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (17))){
var inst_34233 = (state_34267[(7)]);
var inst_34237 = cljs.core.chunk_first.call(null,inst_34233);
var inst_34238 = cljs.core.chunk_rest.call(null,inst_34233);
var inst_34239 = cljs.core.count.call(null,inst_34237);
var inst_34219 = inst_34238;
var inst_34220 = inst_34237;
var inst_34221 = inst_34239;
var inst_34222 = (0);
var state_34267__$1 = (function (){var statearr_34286 = state_34267;
(statearr_34286[(9)] = inst_34221);

(statearr_34286[(10)] = inst_34220);

(statearr_34286[(11)] = inst_34219);

(statearr_34286[(12)] = inst_34222);

return statearr_34286;
})();
var statearr_34287_34317 = state_34267__$1;
(statearr_34287_34317[(2)] = null);

(statearr_34287_34317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (3))){
var inst_34265 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34267__$1,inst_34265);
} else {
if((state_val_34268 === (12))){
var inst_34253 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34288_34318 = state_34267__$1;
(statearr_34288_34318[(2)] = inst_34253);

(statearr_34288_34318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (2))){
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34267__$1,(4),in$);
} else {
if((state_val_34268 === (23))){
var inst_34261 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34289_34319 = state_34267__$1;
(statearr_34289_34319[(2)] = inst_34261);

(statearr_34289_34319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (19))){
var inst_34248 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34290_34320 = state_34267__$1;
(statearr_34290_34320[(2)] = inst_34248);

(statearr_34290_34320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (11))){
var inst_34219 = (state_34267[(11)]);
var inst_34233 = (state_34267[(7)]);
var inst_34233__$1 = cljs.core.seq.call(null,inst_34219);
var state_34267__$1 = (function (){var statearr_34291 = state_34267;
(statearr_34291[(7)] = inst_34233__$1);

return statearr_34291;
})();
if(inst_34233__$1){
var statearr_34292_34321 = state_34267__$1;
(statearr_34292_34321[(1)] = (14));

} else {
var statearr_34293_34322 = state_34267__$1;
(statearr_34293_34322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (9))){
var inst_34255 = (state_34267[(2)]);
var inst_34256 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34267__$1 = (function (){var statearr_34294 = state_34267;
(statearr_34294[(15)] = inst_34255);

return statearr_34294;
})();
if(cljs.core.truth_(inst_34256)){
var statearr_34295_34323 = state_34267__$1;
(statearr_34295_34323[(1)] = (21));

} else {
var statearr_34296_34324 = state_34267__$1;
(statearr_34296_34324[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (5))){
var inst_34211 = cljs.core.async.close_BANG_.call(null,out);
var state_34267__$1 = state_34267;
var statearr_34297_34325 = state_34267__$1;
(statearr_34297_34325[(2)] = inst_34211);

(statearr_34297_34325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (14))){
var inst_34233 = (state_34267[(7)]);
var inst_34235 = cljs.core.chunked_seq_QMARK_.call(null,inst_34233);
var state_34267__$1 = state_34267;
if(inst_34235){
var statearr_34298_34326 = state_34267__$1;
(statearr_34298_34326[(1)] = (17));

} else {
var statearr_34299_34327 = state_34267__$1;
(statearr_34299_34327[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (16))){
var inst_34251 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34300_34328 = state_34267__$1;
(statearr_34300_34328[(2)] = inst_34251);

(statearr_34300_34328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (10))){
var inst_34220 = (state_34267[(10)]);
var inst_34222 = (state_34267[(12)]);
var inst_34227 = cljs.core._nth.call(null,inst_34220,inst_34222);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34267__$1,(13),out,inst_34227);
} else {
if((state_val_34268 === (18))){
var inst_34233 = (state_34267[(7)]);
var inst_34242 = cljs.core.first.call(null,inst_34233);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34267__$1,(20),out,inst_34242);
} else {
if((state_val_34268 === (8))){
var inst_34221 = (state_34267[(9)]);
var inst_34222 = (state_34267[(12)]);
var inst_34224 = (inst_34222 < inst_34221);
var inst_34225 = inst_34224;
var state_34267__$1 = state_34267;
if(cljs.core.truth_(inst_34225)){
var statearr_34301_34329 = state_34267__$1;
(statearr_34301_34329[(1)] = (10));

} else {
var statearr_34302_34330 = state_34267__$1;
(statearr_34302_34330[(1)] = (11));

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
});})(c__32652__auto__))
;
return ((function (switch__32557__auto__,c__32652__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32558__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32558__auto____0 = (function (){
var statearr_34303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34303[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32558__auto__);

(statearr_34303[(1)] = (1));

return statearr_34303;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32558__auto____1 = (function (state_34267){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34304){if((e34304 instanceof Object)){
var ex__32561__auto__ = e34304;
var statearr_34305_34331 = state_34267;
(statearr_34305_34331[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34332 = state_34267;
state_34267 = G__34332;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32558__auto__ = function(state_34267){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32558__auto____1.call(this,state_34267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32558__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32558__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto__))
})();
var state__32654__auto__ = (function (){var statearr_34306 = f__32653__auto__.call(null);
(statearr_34306[(6)] = c__32652__auto__);

return statearr_34306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto__))
);

return c__32652__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34334 = arguments.length;
switch (G__34334) {
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
var G__34337 = arguments.length;
switch (G__34337) {
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
var G__34340 = arguments.length;
switch (G__34340) {
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
var c__32652__auto___34387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___34387,out){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___34387,out){
return (function (state_34364){
var state_val_34365 = (state_34364[(1)]);
if((state_val_34365 === (7))){
var inst_34359 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34366_34388 = state_34364__$1;
(statearr_34366_34388[(2)] = inst_34359);

(statearr_34366_34388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (1))){
var inst_34341 = null;
var state_34364__$1 = (function (){var statearr_34367 = state_34364;
(statearr_34367[(7)] = inst_34341);

return statearr_34367;
})();
var statearr_34368_34389 = state_34364__$1;
(statearr_34368_34389[(2)] = null);

(statearr_34368_34389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (4))){
var inst_34344 = (state_34364[(8)]);
var inst_34344__$1 = (state_34364[(2)]);
var inst_34345 = (inst_34344__$1 == null);
var inst_34346 = cljs.core.not.call(null,inst_34345);
var state_34364__$1 = (function (){var statearr_34369 = state_34364;
(statearr_34369[(8)] = inst_34344__$1);

return statearr_34369;
})();
if(inst_34346){
var statearr_34370_34390 = state_34364__$1;
(statearr_34370_34390[(1)] = (5));

} else {
var statearr_34371_34391 = state_34364__$1;
(statearr_34371_34391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (6))){
var state_34364__$1 = state_34364;
var statearr_34372_34392 = state_34364__$1;
(statearr_34372_34392[(2)] = null);

(statearr_34372_34392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (3))){
var inst_34361 = (state_34364[(2)]);
var inst_34362 = cljs.core.async.close_BANG_.call(null,out);
var state_34364__$1 = (function (){var statearr_34373 = state_34364;
(statearr_34373[(9)] = inst_34361);

return statearr_34373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34364__$1,inst_34362);
} else {
if((state_val_34365 === (2))){
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(4),ch);
} else {
if((state_val_34365 === (11))){
var inst_34344 = (state_34364[(8)]);
var inst_34353 = (state_34364[(2)]);
var inst_34341 = inst_34344;
var state_34364__$1 = (function (){var statearr_34374 = state_34364;
(statearr_34374[(7)] = inst_34341);

(statearr_34374[(10)] = inst_34353);

return statearr_34374;
})();
var statearr_34375_34393 = state_34364__$1;
(statearr_34375_34393[(2)] = null);

(statearr_34375_34393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (9))){
var inst_34344 = (state_34364[(8)]);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34364__$1,(11),out,inst_34344);
} else {
if((state_val_34365 === (5))){
var inst_34341 = (state_34364[(7)]);
var inst_34344 = (state_34364[(8)]);
var inst_34348 = cljs.core._EQ_.call(null,inst_34344,inst_34341);
var state_34364__$1 = state_34364;
if(inst_34348){
var statearr_34377_34394 = state_34364__$1;
(statearr_34377_34394[(1)] = (8));

} else {
var statearr_34378_34395 = state_34364__$1;
(statearr_34378_34395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (10))){
var inst_34356 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34379_34396 = state_34364__$1;
(statearr_34379_34396[(2)] = inst_34356);

(statearr_34379_34396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (8))){
var inst_34341 = (state_34364[(7)]);
var tmp34376 = inst_34341;
var inst_34341__$1 = tmp34376;
var state_34364__$1 = (function (){var statearr_34380 = state_34364;
(statearr_34380[(7)] = inst_34341__$1);

return statearr_34380;
})();
var statearr_34381_34397 = state_34364__$1;
(statearr_34381_34397[(2)] = null);

(statearr_34381_34397[(1)] = (2));


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
});})(c__32652__auto___34387,out))
;
return ((function (switch__32557__auto__,c__32652__auto___34387,out){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_34382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34382[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_34382[(1)] = (1));

return statearr_34382;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_34364){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34383){if((e34383 instanceof Object)){
var ex__32561__auto__ = e34383;
var statearr_34384_34398 = state_34364;
(statearr_34384_34398[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34399 = state_34364;
state_34364 = G__34399;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_34364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_34364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___34387,out))
})();
var state__32654__auto__ = (function (){var statearr_34385 = f__32653__auto__.call(null);
(statearr_34385[(6)] = c__32652__auto___34387);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___34387,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34401 = arguments.length;
switch (G__34401) {
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
var c__32652__auto___34467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___34467,out){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___34467,out){
return (function (state_34439){
var state_val_34440 = (state_34439[(1)]);
if((state_val_34440 === (7))){
var inst_34435 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
var statearr_34441_34468 = state_34439__$1;
(statearr_34441_34468[(2)] = inst_34435);

(statearr_34441_34468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (1))){
var inst_34402 = (new Array(n));
var inst_34403 = inst_34402;
var inst_34404 = (0);
var state_34439__$1 = (function (){var statearr_34442 = state_34439;
(statearr_34442[(7)] = inst_34403);

(statearr_34442[(8)] = inst_34404);

return statearr_34442;
})();
var statearr_34443_34469 = state_34439__$1;
(statearr_34443_34469[(2)] = null);

(statearr_34443_34469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (4))){
var inst_34407 = (state_34439[(9)]);
var inst_34407__$1 = (state_34439[(2)]);
var inst_34408 = (inst_34407__$1 == null);
var inst_34409 = cljs.core.not.call(null,inst_34408);
var state_34439__$1 = (function (){var statearr_34444 = state_34439;
(statearr_34444[(9)] = inst_34407__$1);

return statearr_34444;
})();
if(inst_34409){
var statearr_34445_34470 = state_34439__$1;
(statearr_34445_34470[(1)] = (5));

} else {
var statearr_34446_34471 = state_34439__$1;
(statearr_34446_34471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (15))){
var inst_34429 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
var statearr_34447_34472 = state_34439__$1;
(statearr_34447_34472[(2)] = inst_34429);

(statearr_34447_34472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (13))){
var state_34439__$1 = state_34439;
var statearr_34448_34473 = state_34439__$1;
(statearr_34448_34473[(2)] = null);

(statearr_34448_34473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (6))){
var inst_34404 = (state_34439[(8)]);
var inst_34425 = (inst_34404 > (0));
var state_34439__$1 = state_34439;
if(cljs.core.truth_(inst_34425)){
var statearr_34449_34474 = state_34439__$1;
(statearr_34449_34474[(1)] = (12));

} else {
var statearr_34450_34475 = state_34439__$1;
(statearr_34450_34475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (3))){
var inst_34437 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34439__$1,inst_34437);
} else {
if((state_val_34440 === (12))){
var inst_34403 = (state_34439[(7)]);
var inst_34427 = cljs.core.vec.call(null,inst_34403);
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34439__$1,(15),out,inst_34427);
} else {
if((state_val_34440 === (2))){
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34439__$1,(4),ch);
} else {
if((state_val_34440 === (11))){
var inst_34419 = (state_34439[(2)]);
var inst_34420 = (new Array(n));
var inst_34403 = inst_34420;
var inst_34404 = (0);
var state_34439__$1 = (function (){var statearr_34451 = state_34439;
(statearr_34451[(7)] = inst_34403);

(statearr_34451[(8)] = inst_34404);

(statearr_34451[(10)] = inst_34419);

return statearr_34451;
})();
var statearr_34452_34476 = state_34439__$1;
(statearr_34452_34476[(2)] = null);

(statearr_34452_34476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (9))){
var inst_34403 = (state_34439[(7)]);
var inst_34417 = cljs.core.vec.call(null,inst_34403);
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34439__$1,(11),out,inst_34417);
} else {
if((state_val_34440 === (5))){
var inst_34407 = (state_34439[(9)]);
var inst_34403 = (state_34439[(7)]);
var inst_34412 = (state_34439[(11)]);
var inst_34404 = (state_34439[(8)]);
var inst_34411 = (inst_34403[inst_34404] = inst_34407);
var inst_34412__$1 = (inst_34404 + (1));
var inst_34413 = (inst_34412__$1 < n);
var state_34439__$1 = (function (){var statearr_34453 = state_34439;
(statearr_34453[(12)] = inst_34411);

(statearr_34453[(11)] = inst_34412__$1);

return statearr_34453;
})();
if(cljs.core.truth_(inst_34413)){
var statearr_34454_34477 = state_34439__$1;
(statearr_34454_34477[(1)] = (8));

} else {
var statearr_34455_34478 = state_34439__$1;
(statearr_34455_34478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (14))){
var inst_34432 = (state_34439[(2)]);
var inst_34433 = cljs.core.async.close_BANG_.call(null,out);
var state_34439__$1 = (function (){var statearr_34457 = state_34439;
(statearr_34457[(13)] = inst_34432);

return statearr_34457;
})();
var statearr_34458_34479 = state_34439__$1;
(statearr_34458_34479[(2)] = inst_34433);

(statearr_34458_34479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (10))){
var inst_34423 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
var statearr_34459_34480 = state_34439__$1;
(statearr_34459_34480[(2)] = inst_34423);

(statearr_34459_34480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (8))){
var inst_34403 = (state_34439[(7)]);
var inst_34412 = (state_34439[(11)]);
var tmp34456 = inst_34403;
var inst_34403__$1 = tmp34456;
var inst_34404 = inst_34412;
var state_34439__$1 = (function (){var statearr_34460 = state_34439;
(statearr_34460[(7)] = inst_34403__$1);

(statearr_34460[(8)] = inst_34404);

return statearr_34460;
})();
var statearr_34461_34481 = state_34439__$1;
(statearr_34461_34481[(2)] = null);

(statearr_34461_34481[(1)] = (2));


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
});})(c__32652__auto___34467,out))
;
return ((function (switch__32557__auto__,c__32652__auto___34467,out){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_34462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34462[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_34462[(1)] = (1));

return statearr_34462;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_34439){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34463){if((e34463 instanceof Object)){
var ex__32561__auto__ = e34463;
var statearr_34464_34482 = state_34439;
(statearr_34464_34482[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34483 = state_34439;
state_34439 = G__34483;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_34439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_34439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___34467,out))
})();
var state__32654__auto__ = (function (){var statearr_34465 = f__32653__auto__.call(null);
(statearr_34465[(6)] = c__32652__auto___34467);

return statearr_34465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___34467,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34485 = arguments.length;
switch (G__34485) {
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
var c__32652__auto___34555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___34555,out){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___34555,out){
return (function (state_34527){
var state_val_34528 = (state_34527[(1)]);
if((state_val_34528 === (7))){
var inst_34523 = (state_34527[(2)]);
var state_34527__$1 = state_34527;
var statearr_34529_34556 = state_34527__$1;
(statearr_34529_34556[(2)] = inst_34523);

(statearr_34529_34556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (1))){
var inst_34486 = [];
var inst_34487 = inst_34486;
var inst_34488 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34527__$1 = (function (){var statearr_34530 = state_34527;
(statearr_34530[(7)] = inst_34488);

(statearr_34530[(8)] = inst_34487);

return statearr_34530;
})();
var statearr_34531_34557 = state_34527__$1;
(statearr_34531_34557[(2)] = null);

(statearr_34531_34557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (4))){
var inst_34491 = (state_34527[(9)]);
var inst_34491__$1 = (state_34527[(2)]);
var inst_34492 = (inst_34491__$1 == null);
var inst_34493 = cljs.core.not.call(null,inst_34492);
var state_34527__$1 = (function (){var statearr_34532 = state_34527;
(statearr_34532[(9)] = inst_34491__$1);

return statearr_34532;
})();
if(inst_34493){
var statearr_34533_34558 = state_34527__$1;
(statearr_34533_34558[(1)] = (5));

} else {
var statearr_34534_34559 = state_34527__$1;
(statearr_34534_34559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (15))){
var inst_34517 = (state_34527[(2)]);
var state_34527__$1 = state_34527;
var statearr_34535_34560 = state_34527__$1;
(statearr_34535_34560[(2)] = inst_34517);

(statearr_34535_34560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (13))){
var state_34527__$1 = state_34527;
var statearr_34536_34561 = state_34527__$1;
(statearr_34536_34561[(2)] = null);

(statearr_34536_34561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (6))){
var inst_34487 = (state_34527[(8)]);
var inst_34512 = inst_34487.length;
var inst_34513 = (inst_34512 > (0));
var state_34527__$1 = state_34527;
if(cljs.core.truth_(inst_34513)){
var statearr_34537_34562 = state_34527__$1;
(statearr_34537_34562[(1)] = (12));

} else {
var statearr_34538_34563 = state_34527__$1;
(statearr_34538_34563[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (3))){
var inst_34525 = (state_34527[(2)]);
var state_34527__$1 = state_34527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34527__$1,inst_34525);
} else {
if((state_val_34528 === (12))){
var inst_34487 = (state_34527[(8)]);
var inst_34515 = cljs.core.vec.call(null,inst_34487);
var state_34527__$1 = state_34527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34527__$1,(15),out,inst_34515);
} else {
if((state_val_34528 === (2))){
var state_34527__$1 = state_34527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34527__$1,(4),ch);
} else {
if((state_val_34528 === (11))){
var inst_34495 = (state_34527[(10)]);
var inst_34491 = (state_34527[(9)]);
var inst_34505 = (state_34527[(2)]);
var inst_34506 = [];
var inst_34507 = inst_34506.push(inst_34491);
var inst_34487 = inst_34506;
var inst_34488 = inst_34495;
var state_34527__$1 = (function (){var statearr_34539 = state_34527;
(statearr_34539[(11)] = inst_34507);

(statearr_34539[(12)] = inst_34505);

(statearr_34539[(7)] = inst_34488);

(statearr_34539[(8)] = inst_34487);

return statearr_34539;
})();
var statearr_34540_34564 = state_34527__$1;
(statearr_34540_34564[(2)] = null);

(statearr_34540_34564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (9))){
var inst_34487 = (state_34527[(8)]);
var inst_34503 = cljs.core.vec.call(null,inst_34487);
var state_34527__$1 = state_34527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34527__$1,(11),out,inst_34503);
} else {
if((state_val_34528 === (5))){
var inst_34495 = (state_34527[(10)]);
var inst_34488 = (state_34527[(7)]);
var inst_34491 = (state_34527[(9)]);
var inst_34495__$1 = f.call(null,inst_34491);
var inst_34496 = cljs.core._EQ_.call(null,inst_34495__$1,inst_34488);
var inst_34497 = cljs.core.keyword_identical_QMARK_.call(null,inst_34488,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34498 = ((inst_34496) || (inst_34497));
var state_34527__$1 = (function (){var statearr_34541 = state_34527;
(statearr_34541[(10)] = inst_34495__$1);

return statearr_34541;
})();
if(cljs.core.truth_(inst_34498)){
var statearr_34542_34565 = state_34527__$1;
(statearr_34542_34565[(1)] = (8));

} else {
var statearr_34543_34566 = state_34527__$1;
(statearr_34543_34566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (14))){
var inst_34520 = (state_34527[(2)]);
var inst_34521 = cljs.core.async.close_BANG_.call(null,out);
var state_34527__$1 = (function (){var statearr_34545 = state_34527;
(statearr_34545[(13)] = inst_34520);

return statearr_34545;
})();
var statearr_34546_34567 = state_34527__$1;
(statearr_34546_34567[(2)] = inst_34521);

(statearr_34546_34567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (10))){
var inst_34510 = (state_34527[(2)]);
var state_34527__$1 = state_34527;
var statearr_34547_34568 = state_34527__$1;
(statearr_34547_34568[(2)] = inst_34510);

(statearr_34547_34568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (8))){
var inst_34495 = (state_34527[(10)]);
var inst_34491 = (state_34527[(9)]);
var inst_34487 = (state_34527[(8)]);
var inst_34500 = inst_34487.push(inst_34491);
var tmp34544 = inst_34487;
var inst_34487__$1 = tmp34544;
var inst_34488 = inst_34495;
var state_34527__$1 = (function (){var statearr_34548 = state_34527;
(statearr_34548[(7)] = inst_34488);

(statearr_34548[(8)] = inst_34487__$1);

(statearr_34548[(14)] = inst_34500);

return statearr_34548;
})();
var statearr_34549_34569 = state_34527__$1;
(statearr_34549_34569[(2)] = null);

(statearr_34549_34569[(1)] = (2));


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
});})(c__32652__auto___34555,out))
;
return ((function (switch__32557__auto__,c__32652__auto___34555,out){
return (function() {
var cljs$core$async$state_machine__32558__auto__ = null;
var cljs$core$async$state_machine__32558__auto____0 = (function (){
var statearr_34550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34550[(0)] = cljs$core$async$state_machine__32558__auto__);

(statearr_34550[(1)] = (1));

return statearr_34550;
});
var cljs$core$async$state_machine__32558__auto____1 = (function (state_34527){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34551){if((e34551 instanceof Object)){
var ex__32561__auto__ = e34551;
var statearr_34552_34570 = state_34527;
(statearr_34552_34570[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34571 = state_34527;
state_34527 = G__34571;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
cljs$core$async$state_machine__32558__auto__ = function(state_34527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32558__auto____1.call(this,state_34527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32558__auto____0;
cljs$core$async$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32558__auto____1;
return cljs$core$async$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___34555,out))
})();
var state__32654__auto__ = (function (){var statearr_34553 = f__32653__auto__.call(null);
(statearr_34553[(6)] = c__32652__auto___34555);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___34555,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1601516332852
