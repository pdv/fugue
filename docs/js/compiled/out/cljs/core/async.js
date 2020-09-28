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
var G__31607 = arguments.length;
switch (G__31607) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31608 = (function (f,blockable,meta31609){
this.f = f;
this.blockable = blockable;
this.meta31609 = meta31609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31610,meta31609__$1){
var self__ = this;
var _31610__$1 = this;
return (new cljs.core.async.t_cljs$core$async31608(self__.f,self__.blockable,meta31609__$1));
});

cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31610){
var self__ = this;
var _31610__$1 = this;
return self__.meta31609;
});

cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31609","meta31609",465529860,null)], null);
});

cljs.core.async.t_cljs$core$async31608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31608";

cljs.core.async.t_cljs$core$async31608.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31608");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31608.
 */
cljs.core.async.__GT_t_cljs$core$async31608 = (function cljs$core$async$__GT_t_cljs$core$async31608(f__$1,blockable__$1,meta31609){
return (new cljs.core.async.t_cljs$core$async31608(f__$1,blockable__$1,meta31609));
});

}

return (new cljs.core.async.t_cljs$core$async31608(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31614 = arguments.length;
switch (G__31614) {
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
var G__31617 = arguments.length;
switch (G__31617) {
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
var G__31620 = arguments.length;
switch (G__31620) {
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
var val_31622 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31622);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31622,ret){
return (function (){
return fn1.call(null,val_31622);
});})(val_31622,ret))
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
var G__31624 = arguments.length;
switch (G__31624) {
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
var n__4607__auto___31626 = n;
var x_31627 = (0);
while(true){
if((x_31627 < n__4607__auto___31626)){
(a[x_31627] = x_31627);

var G__31628 = (x_31627 + (1));
x_31627 = G__31628;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31629 = (function (flag,meta31630){
this.flag = flag;
this.meta31630 = meta31630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31631,meta31630__$1){
var self__ = this;
var _31631__$1 = this;
return (new cljs.core.async.t_cljs$core$async31629(self__.flag,meta31630__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31631){
var self__ = this;
var _31631__$1 = this;
return self__.meta31630;
});})(flag))
;

cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31629.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31630","meta31630",1145520699,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31629";

cljs.core.async.t_cljs$core$async31629.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31629");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31629.
 */
cljs.core.async.__GT_t_cljs$core$async31629 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31629(flag__$1,meta31630){
return (new cljs.core.async.t_cljs$core$async31629(flag__$1,meta31630));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31629(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31632 = (function (flag,cb,meta31633){
this.flag = flag;
this.cb = cb;
this.meta31633 = meta31633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31634,meta31633__$1){
var self__ = this;
var _31634__$1 = this;
return (new cljs.core.async.t_cljs$core$async31632(self__.flag,self__.cb,meta31633__$1));
});

cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31634){
var self__ = this;
var _31634__$1 = this;
return self__.meta31633;
});

cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31633","meta31633",-1430112818,null)], null);
});

cljs.core.async.t_cljs$core$async31632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31632";

cljs.core.async.t_cljs$core$async31632.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31632");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31632.
 */
cljs.core.async.__GT_t_cljs$core$async31632 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31632(flag__$1,cb__$1,meta31633){
return (new cljs.core.async.t_cljs$core$async31632(flag__$1,cb__$1,meta31633));
});

}

return (new cljs.core.async.t_cljs$core$async31632(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31635_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31635_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31636_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31636_SHARP_,port], null));
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
var G__31637 = (i + (1));
i = G__31637;
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
var len__4730__auto___31643 = arguments.length;
var i__4731__auto___31644 = (0);
while(true){
if((i__4731__auto___31644 < len__4730__auto___31643)){
args__4736__auto__.push((arguments[i__4731__auto___31644]));

var G__31645 = (i__4731__auto___31644 + (1));
i__4731__auto___31644 = G__31645;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31640){
var map__31641 = p__31640;
var map__31641__$1 = (((((!((map__31641 == null))))?(((((map__31641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31641):map__31641);
var opts = map__31641__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31638){
var G__31639 = cljs.core.first.call(null,seq31638);
var seq31638__$1 = cljs.core.next.call(null,seq31638);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31639,seq31638__$1);
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
var G__31647 = arguments.length;
switch (G__31647) {
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
var c__31547__auto___31693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31693){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___31693){
return (function (state_31671){
var state_val_31672 = (state_31671[(1)]);
if((state_val_31672 === (7))){
var inst_31667 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31673_31694 = state_31671__$1;
(statearr_31673_31694[(2)] = inst_31667);

(statearr_31673_31694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (1))){
var state_31671__$1 = state_31671;
var statearr_31674_31695 = state_31671__$1;
(statearr_31674_31695[(2)] = null);

(statearr_31674_31695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (4))){
var inst_31650 = (state_31671[(7)]);
var inst_31650__$1 = (state_31671[(2)]);
var inst_31651 = (inst_31650__$1 == null);
var state_31671__$1 = (function (){var statearr_31675 = state_31671;
(statearr_31675[(7)] = inst_31650__$1);

return statearr_31675;
})();
if(cljs.core.truth_(inst_31651)){
var statearr_31676_31696 = state_31671__$1;
(statearr_31676_31696[(1)] = (5));

} else {
var statearr_31677_31697 = state_31671__$1;
(statearr_31677_31697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (13))){
var state_31671__$1 = state_31671;
var statearr_31678_31698 = state_31671__$1;
(statearr_31678_31698[(2)] = null);

(statearr_31678_31698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (6))){
var inst_31650 = (state_31671[(7)]);
var state_31671__$1 = state_31671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31671__$1,(11),to,inst_31650);
} else {
if((state_val_31672 === (3))){
var inst_31669 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31671__$1,inst_31669);
} else {
if((state_val_31672 === (12))){
var state_31671__$1 = state_31671;
var statearr_31679_31699 = state_31671__$1;
(statearr_31679_31699[(2)] = null);

(statearr_31679_31699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (2))){
var state_31671__$1 = state_31671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31671__$1,(4),from);
} else {
if((state_val_31672 === (11))){
var inst_31660 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
if(cljs.core.truth_(inst_31660)){
var statearr_31680_31700 = state_31671__$1;
(statearr_31680_31700[(1)] = (12));

} else {
var statearr_31681_31701 = state_31671__$1;
(statearr_31681_31701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (9))){
var state_31671__$1 = state_31671;
var statearr_31682_31702 = state_31671__$1;
(statearr_31682_31702[(2)] = null);

(statearr_31682_31702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (5))){
var state_31671__$1 = state_31671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31683_31703 = state_31671__$1;
(statearr_31683_31703[(1)] = (8));

} else {
var statearr_31684_31704 = state_31671__$1;
(statearr_31684_31704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (14))){
var inst_31665 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31685_31705 = state_31671__$1;
(statearr_31685_31705[(2)] = inst_31665);

(statearr_31685_31705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (10))){
var inst_31657 = (state_31671[(2)]);
var state_31671__$1 = state_31671;
var statearr_31686_31706 = state_31671__$1;
(statearr_31686_31706[(2)] = inst_31657);

(statearr_31686_31706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31672 === (8))){
var inst_31654 = cljs.core.async.close_BANG_.call(null,to);
var state_31671__$1 = state_31671;
var statearr_31687_31707 = state_31671__$1;
(statearr_31687_31707[(2)] = inst_31654);

(statearr_31687_31707[(1)] = (10));


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
});})(c__31547__auto___31693))
;
return ((function (switch__31452__auto__,c__31547__auto___31693){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null,null];
(statearr_31688[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_31671){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_31671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object)){
var ex__31456__auto__ = e31689;
var statearr_31690_31708 = state_31671;
(statearr_31690_31708[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31709 = state_31671;
state_31671 = G__31709;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_31671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_31671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___31693))
})();
var state__31549__auto__ = (function (){var statearr_31691 = f__31548__auto__.call(null);
(statearr_31691[(6)] = c__31547__auto___31693);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31693))
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
return (function (p__31710){
var vec__31711 = p__31710;
var v = cljs.core.nth.call(null,vec__31711,(0),null);
var p = cljs.core.nth.call(null,vec__31711,(1),null);
var job = vec__31711;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31547__auto___31882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31882,res,vec__31711,v,p,job,jobs,results){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___31882,res,vec__31711,v,p,job,jobs,results){
return (function (state_31718){
var state_val_31719 = (state_31718[(1)]);
if((state_val_31719 === (1))){
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31718__$1,(2),res,v);
} else {
if((state_val_31719 === (2))){
var inst_31715 = (state_31718[(2)]);
var inst_31716 = cljs.core.async.close_BANG_.call(null,res);
var state_31718__$1 = (function (){var statearr_31720 = state_31718;
(statearr_31720[(7)] = inst_31715);

return statearr_31720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31718__$1,inst_31716);
} else {
return null;
}
}
});})(c__31547__auto___31882,res,vec__31711,v,p,job,jobs,results))
;
return ((function (switch__31452__auto__,c__31547__auto___31882,res,vec__31711,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0 = (function (){
var statearr_31721 = [null,null,null,null,null,null,null,null];
(statearr_31721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__);

(statearr_31721[(1)] = (1));

return statearr_31721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1 = (function (state_31718){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_31718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e31722){if((e31722 instanceof Object)){
var ex__31456__auto__ = e31722;
var statearr_31723_31883 = state_31718;
(statearr_31723_31883[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31884 = state_31718;
state_31718 = G__31884;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = function(state_31718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1.call(this,state_31718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___31882,res,vec__31711,v,p,job,jobs,results))
})();
var state__31549__auto__ = (function (){var statearr_31724 = f__31548__auto__.call(null);
(statearr_31724[(6)] = c__31547__auto___31882);

return statearr_31724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31882,res,vec__31711,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31725){
var vec__31726 = p__31725;
var v = cljs.core.nth.call(null,vec__31726,(0),null);
var p = cljs.core.nth.call(null,vec__31726,(1),null);
var job = vec__31726;
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
var n__4607__auto___31885 = n;
var __31886 = (0);
while(true){
if((__31886 < n__4607__auto___31885)){
var G__31729_31887 = type;
var G__31729_31888__$1 = (((G__31729_31887 instanceof cljs.core.Keyword))?G__31729_31887.fqn:null);
switch (G__31729_31888__$1) {
case "compute":
var c__31547__auto___31890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31886,c__31547__auto___31890,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (__31886,c__31547__auto___31890,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async){
return (function (state_31742){
var state_val_31743 = (state_31742[(1)]);
if((state_val_31743 === (1))){
var state_31742__$1 = state_31742;
var statearr_31744_31891 = state_31742__$1;
(statearr_31744_31891[(2)] = null);

(statearr_31744_31891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31743 === (2))){
var state_31742__$1 = state_31742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31742__$1,(4),jobs);
} else {
if((state_val_31743 === (3))){
var inst_31740 = (state_31742[(2)]);
var state_31742__$1 = state_31742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31742__$1,inst_31740);
} else {
if((state_val_31743 === (4))){
var inst_31732 = (state_31742[(2)]);
var inst_31733 = process.call(null,inst_31732);
var state_31742__$1 = state_31742;
if(cljs.core.truth_(inst_31733)){
var statearr_31745_31892 = state_31742__$1;
(statearr_31745_31892[(1)] = (5));

} else {
var statearr_31746_31893 = state_31742__$1;
(statearr_31746_31893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31743 === (5))){
var state_31742__$1 = state_31742;
var statearr_31747_31894 = state_31742__$1;
(statearr_31747_31894[(2)] = null);

(statearr_31747_31894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31743 === (6))){
var state_31742__$1 = state_31742;
var statearr_31748_31895 = state_31742__$1;
(statearr_31748_31895[(2)] = null);

(statearr_31748_31895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31743 === (7))){
var inst_31738 = (state_31742[(2)]);
var state_31742__$1 = state_31742;
var statearr_31749_31896 = state_31742__$1;
(statearr_31749_31896[(2)] = inst_31738);

(statearr_31749_31896[(1)] = (3));


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
});})(__31886,c__31547__auto___31890,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async))
;
return ((function (__31886,switch__31452__auto__,c__31547__auto___31890,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0 = (function (){
var statearr_31750 = [null,null,null,null,null,null,null];
(statearr_31750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__);

(statearr_31750[(1)] = (1));

return statearr_31750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1 = (function (state_31742){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_31742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e31751){if((e31751 instanceof Object)){
var ex__31456__auto__ = e31751;
var statearr_31752_31897 = state_31742;
(statearr_31752_31897[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31898 = state_31742;
state_31742 = G__31898;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = function(state_31742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1.call(this,state_31742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__;
})()
;})(__31886,switch__31452__auto__,c__31547__auto___31890,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31753 = f__31548__auto__.call(null);
(statearr_31753[(6)] = c__31547__auto___31890);

return statearr_31753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(__31886,c__31547__auto___31890,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async))
);


break;
case "async":
var c__31547__auto___31899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31886,c__31547__auto___31899,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (__31886,c__31547__auto___31899,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async){
return (function (state_31766){
var state_val_31767 = (state_31766[(1)]);
if((state_val_31767 === (1))){
var state_31766__$1 = state_31766;
var statearr_31768_31900 = state_31766__$1;
(statearr_31768_31900[(2)] = null);

(statearr_31768_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (2))){
var state_31766__$1 = state_31766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31766__$1,(4),jobs);
} else {
if((state_val_31767 === (3))){
var inst_31764 = (state_31766[(2)]);
var state_31766__$1 = state_31766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31766__$1,inst_31764);
} else {
if((state_val_31767 === (4))){
var inst_31756 = (state_31766[(2)]);
var inst_31757 = async.call(null,inst_31756);
var state_31766__$1 = state_31766;
if(cljs.core.truth_(inst_31757)){
var statearr_31769_31901 = state_31766__$1;
(statearr_31769_31901[(1)] = (5));

} else {
var statearr_31770_31902 = state_31766__$1;
(statearr_31770_31902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (5))){
var state_31766__$1 = state_31766;
var statearr_31771_31903 = state_31766__$1;
(statearr_31771_31903[(2)] = null);

(statearr_31771_31903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (6))){
var state_31766__$1 = state_31766;
var statearr_31772_31904 = state_31766__$1;
(statearr_31772_31904[(2)] = null);

(statearr_31772_31904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31767 === (7))){
var inst_31762 = (state_31766[(2)]);
var state_31766__$1 = state_31766;
var statearr_31773_31905 = state_31766__$1;
(statearr_31773_31905[(2)] = inst_31762);

(statearr_31773_31905[(1)] = (3));


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
});})(__31886,c__31547__auto___31899,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async))
;
return ((function (__31886,switch__31452__auto__,c__31547__auto___31899,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0 = (function (){
var statearr_31774 = [null,null,null,null,null,null,null];
(statearr_31774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__);

(statearr_31774[(1)] = (1));

return statearr_31774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1 = (function (state_31766){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_31766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e31775){if((e31775 instanceof Object)){
var ex__31456__auto__ = e31775;
var statearr_31776_31906 = state_31766;
(statearr_31776_31906[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31907 = state_31766;
state_31766 = G__31907;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = function(state_31766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1.call(this,state_31766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__;
})()
;})(__31886,switch__31452__auto__,c__31547__auto___31899,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31777 = f__31548__auto__.call(null);
(statearr_31777[(6)] = c__31547__auto___31899);

return statearr_31777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(__31886,c__31547__auto___31899,G__31729_31887,G__31729_31888__$1,n__4607__auto___31885,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31729_31888__$1)].join('')));

}

var G__31908 = (__31886 + (1));
__31886 = G__31908;
continue;
} else {
}
break;
}

var c__31547__auto___31909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31909,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___31909,jobs,results,process,async){
return (function (state_31799){
var state_val_31800 = (state_31799[(1)]);
if((state_val_31800 === (7))){
var inst_31795 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31801_31910 = state_31799__$1;
(statearr_31801_31910[(2)] = inst_31795);

(statearr_31801_31910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (1))){
var state_31799__$1 = state_31799;
var statearr_31802_31911 = state_31799__$1;
(statearr_31802_31911[(2)] = null);

(statearr_31802_31911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (4))){
var inst_31780 = (state_31799[(7)]);
var inst_31780__$1 = (state_31799[(2)]);
var inst_31781 = (inst_31780__$1 == null);
var state_31799__$1 = (function (){var statearr_31803 = state_31799;
(statearr_31803[(7)] = inst_31780__$1);

return statearr_31803;
})();
if(cljs.core.truth_(inst_31781)){
var statearr_31804_31912 = state_31799__$1;
(statearr_31804_31912[(1)] = (5));

} else {
var statearr_31805_31913 = state_31799__$1;
(statearr_31805_31913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (6))){
var inst_31780 = (state_31799[(7)]);
var inst_31785 = (state_31799[(8)]);
var inst_31785__$1 = cljs.core.async.chan.call(null,(1));
var inst_31786 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31787 = [inst_31780,inst_31785__$1];
var inst_31788 = (new cljs.core.PersistentVector(null,2,(5),inst_31786,inst_31787,null));
var state_31799__$1 = (function (){var statearr_31806 = state_31799;
(statearr_31806[(8)] = inst_31785__$1);

return statearr_31806;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31799__$1,(8),jobs,inst_31788);
} else {
if((state_val_31800 === (3))){
var inst_31797 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31799__$1,inst_31797);
} else {
if((state_val_31800 === (2))){
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31799__$1,(4),from);
} else {
if((state_val_31800 === (9))){
var inst_31792 = (state_31799[(2)]);
var state_31799__$1 = (function (){var statearr_31807 = state_31799;
(statearr_31807[(9)] = inst_31792);

return statearr_31807;
})();
var statearr_31808_31914 = state_31799__$1;
(statearr_31808_31914[(2)] = null);

(statearr_31808_31914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (5))){
var inst_31783 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31799__$1 = state_31799;
var statearr_31809_31915 = state_31799__$1;
(statearr_31809_31915[(2)] = inst_31783);

(statearr_31809_31915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (8))){
var inst_31785 = (state_31799[(8)]);
var inst_31790 = (state_31799[(2)]);
var state_31799__$1 = (function (){var statearr_31810 = state_31799;
(statearr_31810[(10)] = inst_31790);

return statearr_31810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31799__$1,(9),results,inst_31785);
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
});})(c__31547__auto___31909,jobs,results,process,async))
;
return ((function (switch__31452__auto__,c__31547__auto___31909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0 = (function (){
var statearr_31811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__);

(statearr_31811[(1)] = (1));

return statearr_31811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1 = (function (state_31799){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_31799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e31812){if((e31812 instanceof Object)){
var ex__31456__auto__ = e31812;
var statearr_31813_31916 = state_31799;
(statearr_31813_31916[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31917 = state_31799;
state_31799 = G__31917;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = function(state_31799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1.call(this,state_31799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___31909,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31814 = f__31548__auto__.call(null);
(statearr_31814[(6)] = c__31547__auto___31909);

return statearr_31814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31909,jobs,results,process,async))
);


var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto__,jobs,results,process,async){
return (function (state_31852){
var state_val_31853 = (state_31852[(1)]);
if((state_val_31853 === (7))){
var inst_31848 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31854_31918 = state_31852__$1;
(statearr_31854_31918[(2)] = inst_31848);

(statearr_31854_31918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (20))){
var state_31852__$1 = state_31852;
var statearr_31855_31919 = state_31852__$1;
(statearr_31855_31919[(2)] = null);

(statearr_31855_31919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (1))){
var state_31852__$1 = state_31852;
var statearr_31856_31920 = state_31852__$1;
(statearr_31856_31920[(2)] = null);

(statearr_31856_31920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (4))){
var inst_31817 = (state_31852[(7)]);
var inst_31817__$1 = (state_31852[(2)]);
var inst_31818 = (inst_31817__$1 == null);
var state_31852__$1 = (function (){var statearr_31857 = state_31852;
(statearr_31857[(7)] = inst_31817__$1);

return statearr_31857;
})();
if(cljs.core.truth_(inst_31818)){
var statearr_31858_31921 = state_31852__$1;
(statearr_31858_31921[(1)] = (5));

} else {
var statearr_31859_31922 = state_31852__$1;
(statearr_31859_31922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (15))){
var inst_31830 = (state_31852[(8)]);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31852__$1,(18),to,inst_31830);
} else {
if((state_val_31853 === (21))){
var inst_31843 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31860_31923 = state_31852__$1;
(statearr_31860_31923[(2)] = inst_31843);

(statearr_31860_31923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (13))){
var inst_31845 = (state_31852[(2)]);
var state_31852__$1 = (function (){var statearr_31861 = state_31852;
(statearr_31861[(9)] = inst_31845);

return statearr_31861;
})();
var statearr_31862_31924 = state_31852__$1;
(statearr_31862_31924[(2)] = null);

(statearr_31862_31924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (6))){
var inst_31817 = (state_31852[(7)]);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31852__$1,(11),inst_31817);
} else {
if((state_val_31853 === (17))){
var inst_31838 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
if(cljs.core.truth_(inst_31838)){
var statearr_31863_31925 = state_31852__$1;
(statearr_31863_31925[(1)] = (19));

} else {
var statearr_31864_31926 = state_31852__$1;
(statearr_31864_31926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (3))){
var inst_31850 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31852__$1,inst_31850);
} else {
if((state_val_31853 === (12))){
var inst_31827 = (state_31852[(10)]);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31852__$1,(14),inst_31827);
} else {
if((state_val_31853 === (2))){
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31852__$1,(4),results);
} else {
if((state_val_31853 === (19))){
var state_31852__$1 = state_31852;
var statearr_31865_31927 = state_31852__$1;
(statearr_31865_31927[(2)] = null);

(statearr_31865_31927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (11))){
var inst_31827 = (state_31852[(2)]);
var state_31852__$1 = (function (){var statearr_31866 = state_31852;
(statearr_31866[(10)] = inst_31827);

return statearr_31866;
})();
var statearr_31867_31928 = state_31852__$1;
(statearr_31867_31928[(2)] = null);

(statearr_31867_31928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (9))){
var state_31852__$1 = state_31852;
var statearr_31868_31929 = state_31852__$1;
(statearr_31868_31929[(2)] = null);

(statearr_31868_31929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (5))){
var state_31852__$1 = state_31852;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31869_31930 = state_31852__$1;
(statearr_31869_31930[(1)] = (8));

} else {
var statearr_31870_31931 = state_31852__$1;
(statearr_31870_31931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (14))){
var inst_31832 = (state_31852[(11)]);
var inst_31830 = (state_31852[(8)]);
var inst_31830__$1 = (state_31852[(2)]);
var inst_31831 = (inst_31830__$1 == null);
var inst_31832__$1 = cljs.core.not.call(null,inst_31831);
var state_31852__$1 = (function (){var statearr_31871 = state_31852;
(statearr_31871[(11)] = inst_31832__$1);

(statearr_31871[(8)] = inst_31830__$1);

return statearr_31871;
})();
if(inst_31832__$1){
var statearr_31872_31932 = state_31852__$1;
(statearr_31872_31932[(1)] = (15));

} else {
var statearr_31873_31933 = state_31852__$1;
(statearr_31873_31933[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (16))){
var inst_31832 = (state_31852[(11)]);
var state_31852__$1 = state_31852;
var statearr_31874_31934 = state_31852__$1;
(statearr_31874_31934[(2)] = inst_31832);

(statearr_31874_31934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (10))){
var inst_31824 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31875_31935 = state_31852__$1;
(statearr_31875_31935[(2)] = inst_31824);

(statearr_31875_31935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (18))){
var inst_31835 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31876_31936 = state_31852__$1;
(statearr_31876_31936[(2)] = inst_31835);

(statearr_31876_31936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (8))){
var inst_31821 = cljs.core.async.close_BANG_.call(null,to);
var state_31852__$1 = state_31852;
var statearr_31877_31937 = state_31852__$1;
(statearr_31877_31937[(2)] = inst_31821);

(statearr_31877_31937[(1)] = (10));


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
});})(c__31547__auto__,jobs,results,process,async))
;
return ((function (switch__31452__auto__,c__31547__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0 = (function (){
var statearr_31878 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__);

(statearr_31878[(1)] = (1));

return statearr_31878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1 = (function (state_31852){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_31852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e31879){if((e31879 instanceof Object)){
var ex__31456__auto__ = e31879;
var statearr_31880_31938 = state_31852;
(statearr_31880_31938[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31939 = state_31852;
state_31852 = G__31939;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__ = function(state_31852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1.call(this,state_31852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto__,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31881 = f__31548__auto__.call(null);
(statearr_31881[(6)] = c__31547__auto__);

return statearr_31881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__,jobs,results,process,async))
);

return c__31547__auto__;
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
var G__31941 = arguments.length;
switch (G__31941) {
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
var G__31944 = arguments.length;
switch (G__31944) {
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
var G__31947 = arguments.length;
switch (G__31947) {
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
var c__31547__auto___31996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31996,tc,fc){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___31996,tc,fc){
return (function (state_31973){
var state_val_31974 = (state_31973[(1)]);
if((state_val_31974 === (7))){
var inst_31969 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31975_31997 = state_31973__$1;
(statearr_31975_31997[(2)] = inst_31969);

(statearr_31975_31997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (1))){
var state_31973__$1 = state_31973;
var statearr_31976_31998 = state_31973__$1;
(statearr_31976_31998[(2)] = null);

(statearr_31976_31998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (4))){
var inst_31950 = (state_31973[(7)]);
var inst_31950__$1 = (state_31973[(2)]);
var inst_31951 = (inst_31950__$1 == null);
var state_31973__$1 = (function (){var statearr_31977 = state_31973;
(statearr_31977[(7)] = inst_31950__$1);

return statearr_31977;
})();
if(cljs.core.truth_(inst_31951)){
var statearr_31978_31999 = state_31973__$1;
(statearr_31978_31999[(1)] = (5));

} else {
var statearr_31979_32000 = state_31973__$1;
(statearr_31979_32000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (13))){
var state_31973__$1 = state_31973;
var statearr_31980_32001 = state_31973__$1;
(statearr_31980_32001[(2)] = null);

(statearr_31980_32001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (6))){
var inst_31950 = (state_31973[(7)]);
var inst_31956 = p.call(null,inst_31950);
var state_31973__$1 = state_31973;
if(cljs.core.truth_(inst_31956)){
var statearr_31981_32002 = state_31973__$1;
(statearr_31981_32002[(1)] = (9));

} else {
var statearr_31982_32003 = state_31973__$1;
(statearr_31982_32003[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (3))){
var inst_31971 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31973__$1,inst_31971);
} else {
if((state_val_31974 === (12))){
var state_31973__$1 = state_31973;
var statearr_31983_32004 = state_31973__$1;
(statearr_31983_32004[(2)] = null);

(statearr_31983_32004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (2))){
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31973__$1,(4),ch);
} else {
if((state_val_31974 === (11))){
var inst_31950 = (state_31973[(7)]);
var inst_31960 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31973__$1,(8),inst_31960,inst_31950);
} else {
if((state_val_31974 === (9))){
var state_31973__$1 = state_31973;
var statearr_31984_32005 = state_31973__$1;
(statearr_31984_32005[(2)] = tc);

(statearr_31984_32005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (5))){
var inst_31953 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31954 = cljs.core.async.close_BANG_.call(null,fc);
var state_31973__$1 = (function (){var statearr_31985 = state_31973;
(statearr_31985[(8)] = inst_31953);

return statearr_31985;
})();
var statearr_31986_32006 = state_31973__$1;
(statearr_31986_32006[(2)] = inst_31954);

(statearr_31986_32006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (14))){
var inst_31967 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31987_32007 = state_31973__$1;
(statearr_31987_32007[(2)] = inst_31967);

(statearr_31987_32007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (10))){
var state_31973__$1 = state_31973;
var statearr_31988_32008 = state_31973__$1;
(statearr_31988_32008[(2)] = fc);

(statearr_31988_32008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (8))){
var inst_31962 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
if(cljs.core.truth_(inst_31962)){
var statearr_31989_32009 = state_31973__$1;
(statearr_31989_32009[(1)] = (12));

} else {
var statearr_31990_32010 = state_31973__$1;
(statearr_31990_32010[(1)] = (13));

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
});})(c__31547__auto___31996,tc,fc))
;
return ((function (switch__31452__auto__,c__31547__auto___31996,tc,fc){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_31991 = [null,null,null,null,null,null,null,null,null];
(statearr_31991[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_31991[(1)] = (1));

return statearr_31991;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_31973){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_31973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e31992){if((e31992 instanceof Object)){
var ex__31456__auto__ = e31992;
var statearr_31993_32011 = state_31973;
(statearr_31993_32011[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32012 = state_31973;
state_31973 = G__32012;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_31973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_31973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___31996,tc,fc))
})();
var state__31549__auto__ = (function (){var statearr_31994 = f__31548__auto__.call(null);
(statearr_31994[(6)] = c__31547__auto___31996);

return statearr_31994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31996,tc,fc))
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
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto__){
return (function (state_32033){
var state_val_32034 = (state_32033[(1)]);
if((state_val_32034 === (7))){
var inst_32029 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32035_32053 = state_32033__$1;
(statearr_32035_32053[(2)] = inst_32029);

(statearr_32035_32053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (1))){
var inst_32013 = init;
var state_32033__$1 = (function (){var statearr_32036 = state_32033;
(statearr_32036[(7)] = inst_32013);

return statearr_32036;
})();
var statearr_32037_32054 = state_32033__$1;
(statearr_32037_32054[(2)] = null);

(statearr_32037_32054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (4))){
var inst_32016 = (state_32033[(8)]);
var inst_32016__$1 = (state_32033[(2)]);
var inst_32017 = (inst_32016__$1 == null);
var state_32033__$1 = (function (){var statearr_32038 = state_32033;
(statearr_32038[(8)] = inst_32016__$1);

return statearr_32038;
})();
if(cljs.core.truth_(inst_32017)){
var statearr_32039_32055 = state_32033__$1;
(statearr_32039_32055[(1)] = (5));

} else {
var statearr_32040_32056 = state_32033__$1;
(statearr_32040_32056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (6))){
var inst_32020 = (state_32033[(9)]);
var inst_32013 = (state_32033[(7)]);
var inst_32016 = (state_32033[(8)]);
var inst_32020__$1 = f.call(null,inst_32013,inst_32016);
var inst_32021 = cljs.core.reduced_QMARK_.call(null,inst_32020__$1);
var state_32033__$1 = (function (){var statearr_32041 = state_32033;
(statearr_32041[(9)] = inst_32020__$1);

return statearr_32041;
})();
if(inst_32021){
var statearr_32042_32057 = state_32033__$1;
(statearr_32042_32057[(1)] = (8));

} else {
var statearr_32043_32058 = state_32033__$1;
(statearr_32043_32058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (3))){
var inst_32031 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32033__$1,inst_32031);
} else {
if((state_val_32034 === (2))){
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32033__$1,(4),ch);
} else {
if((state_val_32034 === (9))){
var inst_32020 = (state_32033[(9)]);
var inst_32013 = inst_32020;
var state_32033__$1 = (function (){var statearr_32044 = state_32033;
(statearr_32044[(7)] = inst_32013);

return statearr_32044;
})();
var statearr_32045_32059 = state_32033__$1;
(statearr_32045_32059[(2)] = null);

(statearr_32045_32059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (5))){
var inst_32013 = (state_32033[(7)]);
var state_32033__$1 = state_32033;
var statearr_32046_32060 = state_32033__$1;
(statearr_32046_32060[(2)] = inst_32013);

(statearr_32046_32060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (10))){
var inst_32027 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32047_32061 = state_32033__$1;
(statearr_32047_32061[(2)] = inst_32027);

(statearr_32047_32061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (8))){
var inst_32020 = (state_32033[(9)]);
var inst_32023 = cljs.core.deref.call(null,inst_32020);
var state_32033__$1 = state_32033;
var statearr_32048_32062 = state_32033__$1;
(statearr_32048_32062[(2)] = inst_32023);

(statearr_32048_32062[(1)] = (10));


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
});})(c__31547__auto__))
;
return ((function (switch__31452__auto__,c__31547__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31453__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31453__auto____0 = (function (){
var statearr_32049 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32049[(0)] = cljs$core$async$reduce_$_state_machine__31453__auto__);

(statearr_32049[(1)] = (1));

return statearr_32049;
});
var cljs$core$async$reduce_$_state_machine__31453__auto____1 = (function (state_32033){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32050){if((e32050 instanceof Object)){
var ex__31456__auto__ = e32050;
var statearr_32051_32063 = state_32033;
(statearr_32051_32063[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32064 = state_32033;
state_32033 = G__32064;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31453__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31453__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31453__auto____0;
cljs$core$async$reduce_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31453__auto____1;
return cljs$core$async$reduce_$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_32052 = f__31548__auto__.call(null);
(statearr_32052[(6)] = c__31547__auto__);

return statearr_32052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__,f__$1){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto__,f__$1){
return (function (state_32070){
var state_val_32071 = (state_32070[(1)]);
if((state_val_32071 === (1))){
var inst_32065 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32070__$1,(2),inst_32065);
} else {
if((state_val_32071 === (2))){
var inst_32067 = (state_32070[(2)]);
var inst_32068 = f__$1.call(null,inst_32067);
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32070__$1,inst_32068);
} else {
return null;
}
}
});})(c__31547__auto__,f__$1))
;
return ((function (switch__31452__auto__,c__31547__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31453__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31453__auto____0 = (function (){
var statearr_32072 = [null,null,null,null,null,null,null];
(statearr_32072[(0)] = cljs$core$async$transduce_$_state_machine__31453__auto__);

(statearr_32072[(1)] = (1));

return statearr_32072;
});
var cljs$core$async$transduce_$_state_machine__31453__auto____1 = (function (state_32070){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32073){if((e32073 instanceof Object)){
var ex__31456__auto__ = e32073;
var statearr_32074_32076 = state_32070;
(statearr_32074_32076[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32077 = state_32070;
state_32070 = G__32077;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31453__auto__ = function(state_32070){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31453__auto____1.call(this,state_32070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31453__auto____0;
cljs$core$async$transduce_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31453__auto____1;
return cljs$core$async$transduce_$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto__,f__$1))
})();
var state__31549__auto__ = (function (){var statearr_32075 = f__31548__auto__.call(null);
(statearr_32075[(6)] = c__31547__auto__);

return statearr_32075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__,f__$1))
);

return c__31547__auto__;
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
var G__32079 = arguments.length;
switch (G__32079) {
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
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto__){
return (function (state_32104){
var state_val_32105 = (state_32104[(1)]);
if((state_val_32105 === (7))){
var inst_32086 = (state_32104[(2)]);
var state_32104__$1 = state_32104;
var statearr_32106_32127 = state_32104__$1;
(statearr_32106_32127[(2)] = inst_32086);

(statearr_32106_32127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (1))){
var inst_32080 = cljs.core.seq.call(null,coll);
var inst_32081 = inst_32080;
var state_32104__$1 = (function (){var statearr_32107 = state_32104;
(statearr_32107[(7)] = inst_32081);

return statearr_32107;
})();
var statearr_32108_32128 = state_32104__$1;
(statearr_32108_32128[(2)] = null);

(statearr_32108_32128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (4))){
var inst_32081 = (state_32104[(7)]);
var inst_32084 = cljs.core.first.call(null,inst_32081);
var state_32104__$1 = state_32104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32104__$1,(7),ch,inst_32084);
} else {
if((state_val_32105 === (13))){
var inst_32098 = (state_32104[(2)]);
var state_32104__$1 = state_32104;
var statearr_32109_32129 = state_32104__$1;
(statearr_32109_32129[(2)] = inst_32098);

(statearr_32109_32129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (6))){
var inst_32089 = (state_32104[(2)]);
var state_32104__$1 = state_32104;
if(cljs.core.truth_(inst_32089)){
var statearr_32110_32130 = state_32104__$1;
(statearr_32110_32130[(1)] = (8));

} else {
var statearr_32111_32131 = state_32104__$1;
(statearr_32111_32131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (3))){
var inst_32102 = (state_32104[(2)]);
var state_32104__$1 = state_32104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32104__$1,inst_32102);
} else {
if((state_val_32105 === (12))){
var state_32104__$1 = state_32104;
var statearr_32112_32132 = state_32104__$1;
(statearr_32112_32132[(2)] = null);

(statearr_32112_32132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (2))){
var inst_32081 = (state_32104[(7)]);
var state_32104__$1 = state_32104;
if(cljs.core.truth_(inst_32081)){
var statearr_32113_32133 = state_32104__$1;
(statearr_32113_32133[(1)] = (4));

} else {
var statearr_32114_32134 = state_32104__$1;
(statearr_32114_32134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (11))){
var inst_32095 = cljs.core.async.close_BANG_.call(null,ch);
var state_32104__$1 = state_32104;
var statearr_32115_32135 = state_32104__$1;
(statearr_32115_32135[(2)] = inst_32095);

(statearr_32115_32135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (9))){
var state_32104__$1 = state_32104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32116_32136 = state_32104__$1;
(statearr_32116_32136[(1)] = (11));

} else {
var statearr_32117_32137 = state_32104__$1;
(statearr_32117_32137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (5))){
var inst_32081 = (state_32104[(7)]);
var state_32104__$1 = state_32104;
var statearr_32118_32138 = state_32104__$1;
(statearr_32118_32138[(2)] = inst_32081);

(statearr_32118_32138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (10))){
var inst_32100 = (state_32104[(2)]);
var state_32104__$1 = state_32104;
var statearr_32119_32139 = state_32104__$1;
(statearr_32119_32139[(2)] = inst_32100);

(statearr_32119_32139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32105 === (8))){
var inst_32081 = (state_32104[(7)]);
var inst_32091 = cljs.core.next.call(null,inst_32081);
var inst_32081__$1 = inst_32091;
var state_32104__$1 = (function (){var statearr_32120 = state_32104;
(statearr_32120[(7)] = inst_32081__$1);

return statearr_32120;
})();
var statearr_32121_32140 = state_32104__$1;
(statearr_32121_32140[(2)] = null);

(statearr_32121_32140[(1)] = (2));


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
});})(c__31547__auto__))
;
return ((function (switch__31452__auto__,c__31547__auto__){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_32122 = [null,null,null,null,null,null,null,null];
(statearr_32122[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_32122[(1)] = (1));

return statearr_32122;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_32104){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32123){if((e32123 instanceof Object)){
var ex__31456__auto__ = e32123;
var statearr_32124_32141 = state_32104;
(statearr_32124_32141[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32142 = state_32104;
state_32104 = G__32142;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_32104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_32104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_32125 = f__31548__auto__.call(null);
(statearr_32125[(6)] = c__31547__auto__);

return statearr_32125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32143 = (function (ch,cs,meta32144){
this.ch = ch;
this.cs = cs;
this.meta32144 = meta32144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32145,meta32144__$1){
var self__ = this;
var _32145__$1 = this;
return (new cljs.core.async.t_cljs$core$async32143(self__.ch,self__.cs,meta32144__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32145){
var self__ = this;
var _32145__$1 = this;
return self__.meta32144;
});})(cs))
;

cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32143.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32143.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32144","meta32144",2058555493,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32143";

cljs.core.async.t_cljs$core$async32143.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32143");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32143.
 */
cljs.core.async.__GT_t_cljs$core$async32143 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32143(ch__$1,cs__$1,meta32144){
return (new cljs.core.async.t_cljs$core$async32143(ch__$1,cs__$1,meta32144));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32143(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31547__auto___32365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32365,cs,m,dchan,dctr,done){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___32365,cs,m,dchan,dctr,done){
return (function (state_32280){
var state_val_32281 = (state_32280[(1)]);
if((state_val_32281 === (7))){
var inst_32276 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32282_32366 = state_32280__$1;
(statearr_32282_32366[(2)] = inst_32276);

(statearr_32282_32366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (20))){
var inst_32179 = (state_32280[(7)]);
var inst_32191 = cljs.core.first.call(null,inst_32179);
var inst_32192 = cljs.core.nth.call(null,inst_32191,(0),null);
var inst_32193 = cljs.core.nth.call(null,inst_32191,(1),null);
var state_32280__$1 = (function (){var statearr_32283 = state_32280;
(statearr_32283[(8)] = inst_32192);

return statearr_32283;
})();
if(cljs.core.truth_(inst_32193)){
var statearr_32284_32367 = state_32280__$1;
(statearr_32284_32367[(1)] = (22));

} else {
var statearr_32285_32368 = state_32280__$1;
(statearr_32285_32368[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (27))){
var inst_32221 = (state_32280[(9)]);
var inst_32228 = (state_32280[(10)]);
var inst_32223 = (state_32280[(11)]);
var inst_32148 = (state_32280[(12)]);
var inst_32228__$1 = cljs.core._nth.call(null,inst_32221,inst_32223);
var inst_32229 = cljs.core.async.put_BANG_.call(null,inst_32228__$1,inst_32148,done);
var state_32280__$1 = (function (){var statearr_32286 = state_32280;
(statearr_32286[(10)] = inst_32228__$1);

return statearr_32286;
})();
if(cljs.core.truth_(inst_32229)){
var statearr_32287_32369 = state_32280__$1;
(statearr_32287_32369[(1)] = (30));

} else {
var statearr_32288_32370 = state_32280__$1;
(statearr_32288_32370[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (1))){
var state_32280__$1 = state_32280;
var statearr_32289_32371 = state_32280__$1;
(statearr_32289_32371[(2)] = null);

(statearr_32289_32371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (24))){
var inst_32179 = (state_32280[(7)]);
var inst_32198 = (state_32280[(2)]);
var inst_32199 = cljs.core.next.call(null,inst_32179);
var inst_32157 = inst_32199;
var inst_32158 = null;
var inst_32159 = (0);
var inst_32160 = (0);
var state_32280__$1 = (function (){var statearr_32290 = state_32280;
(statearr_32290[(13)] = inst_32160);

(statearr_32290[(14)] = inst_32157);

(statearr_32290[(15)] = inst_32159);

(statearr_32290[(16)] = inst_32158);

(statearr_32290[(17)] = inst_32198);

return statearr_32290;
})();
var statearr_32291_32372 = state_32280__$1;
(statearr_32291_32372[(2)] = null);

(statearr_32291_32372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (39))){
var state_32280__$1 = state_32280;
var statearr_32295_32373 = state_32280__$1;
(statearr_32295_32373[(2)] = null);

(statearr_32295_32373[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (4))){
var inst_32148 = (state_32280[(12)]);
var inst_32148__$1 = (state_32280[(2)]);
var inst_32149 = (inst_32148__$1 == null);
var state_32280__$1 = (function (){var statearr_32296 = state_32280;
(statearr_32296[(12)] = inst_32148__$1);

return statearr_32296;
})();
if(cljs.core.truth_(inst_32149)){
var statearr_32297_32374 = state_32280__$1;
(statearr_32297_32374[(1)] = (5));

} else {
var statearr_32298_32375 = state_32280__$1;
(statearr_32298_32375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (15))){
var inst_32160 = (state_32280[(13)]);
var inst_32157 = (state_32280[(14)]);
var inst_32159 = (state_32280[(15)]);
var inst_32158 = (state_32280[(16)]);
var inst_32175 = (state_32280[(2)]);
var inst_32176 = (inst_32160 + (1));
var tmp32292 = inst_32157;
var tmp32293 = inst_32159;
var tmp32294 = inst_32158;
var inst_32157__$1 = tmp32292;
var inst_32158__$1 = tmp32294;
var inst_32159__$1 = tmp32293;
var inst_32160__$1 = inst_32176;
var state_32280__$1 = (function (){var statearr_32299 = state_32280;
(statearr_32299[(18)] = inst_32175);

(statearr_32299[(13)] = inst_32160__$1);

(statearr_32299[(14)] = inst_32157__$1);

(statearr_32299[(15)] = inst_32159__$1);

(statearr_32299[(16)] = inst_32158__$1);

return statearr_32299;
})();
var statearr_32300_32376 = state_32280__$1;
(statearr_32300_32376[(2)] = null);

(statearr_32300_32376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (21))){
var inst_32202 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32304_32377 = state_32280__$1;
(statearr_32304_32377[(2)] = inst_32202);

(statearr_32304_32377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (31))){
var inst_32228 = (state_32280[(10)]);
var inst_32232 = done.call(null,null);
var inst_32233 = cljs.core.async.untap_STAR_.call(null,m,inst_32228);
var state_32280__$1 = (function (){var statearr_32305 = state_32280;
(statearr_32305[(19)] = inst_32232);

return statearr_32305;
})();
var statearr_32306_32378 = state_32280__$1;
(statearr_32306_32378[(2)] = inst_32233);

(statearr_32306_32378[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (32))){
var inst_32221 = (state_32280[(9)]);
var inst_32223 = (state_32280[(11)]);
var inst_32222 = (state_32280[(20)]);
var inst_32220 = (state_32280[(21)]);
var inst_32235 = (state_32280[(2)]);
var inst_32236 = (inst_32223 + (1));
var tmp32301 = inst_32221;
var tmp32302 = inst_32222;
var tmp32303 = inst_32220;
var inst_32220__$1 = tmp32303;
var inst_32221__$1 = tmp32301;
var inst_32222__$1 = tmp32302;
var inst_32223__$1 = inst_32236;
var state_32280__$1 = (function (){var statearr_32307 = state_32280;
(statearr_32307[(9)] = inst_32221__$1);

(statearr_32307[(11)] = inst_32223__$1);

(statearr_32307[(20)] = inst_32222__$1);

(statearr_32307[(22)] = inst_32235);

(statearr_32307[(21)] = inst_32220__$1);

return statearr_32307;
})();
var statearr_32308_32379 = state_32280__$1;
(statearr_32308_32379[(2)] = null);

(statearr_32308_32379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (40))){
var inst_32248 = (state_32280[(23)]);
var inst_32252 = done.call(null,null);
var inst_32253 = cljs.core.async.untap_STAR_.call(null,m,inst_32248);
var state_32280__$1 = (function (){var statearr_32309 = state_32280;
(statearr_32309[(24)] = inst_32252);

return statearr_32309;
})();
var statearr_32310_32380 = state_32280__$1;
(statearr_32310_32380[(2)] = inst_32253);

(statearr_32310_32380[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (33))){
var inst_32239 = (state_32280[(25)]);
var inst_32241 = cljs.core.chunked_seq_QMARK_.call(null,inst_32239);
var state_32280__$1 = state_32280;
if(inst_32241){
var statearr_32311_32381 = state_32280__$1;
(statearr_32311_32381[(1)] = (36));

} else {
var statearr_32312_32382 = state_32280__$1;
(statearr_32312_32382[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (13))){
var inst_32169 = (state_32280[(26)]);
var inst_32172 = cljs.core.async.close_BANG_.call(null,inst_32169);
var state_32280__$1 = state_32280;
var statearr_32313_32383 = state_32280__$1;
(statearr_32313_32383[(2)] = inst_32172);

(statearr_32313_32383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (22))){
var inst_32192 = (state_32280[(8)]);
var inst_32195 = cljs.core.async.close_BANG_.call(null,inst_32192);
var state_32280__$1 = state_32280;
var statearr_32314_32384 = state_32280__$1;
(statearr_32314_32384[(2)] = inst_32195);

(statearr_32314_32384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (36))){
var inst_32239 = (state_32280[(25)]);
var inst_32243 = cljs.core.chunk_first.call(null,inst_32239);
var inst_32244 = cljs.core.chunk_rest.call(null,inst_32239);
var inst_32245 = cljs.core.count.call(null,inst_32243);
var inst_32220 = inst_32244;
var inst_32221 = inst_32243;
var inst_32222 = inst_32245;
var inst_32223 = (0);
var state_32280__$1 = (function (){var statearr_32315 = state_32280;
(statearr_32315[(9)] = inst_32221);

(statearr_32315[(11)] = inst_32223);

(statearr_32315[(20)] = inst_32222);

(statearr_32315[(21)] = inst_32220);

return statearr_32315;
})();
var statearr_32316_32385 = state_32280__$1;
(statearr_32316_32385[(2)] = null);

(statearr_32316_32385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (41))){
var inst_32239 = (state_32280[(25)]);
var inst_32255 = (state_32280[(2)]);
var inst_32256 = cljs.core.next.call(null,inst_32239);
var inst_32220 = inst_32256;
var inst_32221 = null;
var inst_32222 = (0);
var inst_32223 = (0);
var state_32280__$1 = (function (){var statearr_32317 = state_32280;
(statearr_32317[(9)] = inst_32221);

(statearr_32317[(27)] = inst_32255);

(statearr_32317[(11)] = inst_32223);

(statearr_32317[(20)] = inst_32222);

(statearr_32317[(21)] = inst_32220);

return statearr_32317;
})();
var statearr_32318_32386 = state_32280__$1;
(statearr_32318_32386[(2)] = null);

(statearr_32318_32386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (43))){
var state_32280__$1 = state_32280;
var statearr_32319_32387 = state_32280__$1;
(statearr_32319_32387[(2)] = null);

(statearr_32319_32387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (29))){
var inst_32264 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32320_32388 = state_32280__$1;
(statearr_32320_32388[(2)] = inst_32264);

(statearr_32320_32388[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (44))){
var inst_32273 = (state_32280[(2)]);
var state_32280__$1 = (function (){var statearr_32321 = state_32280;
(statearr_32321[(28)] = inst_32273);

return statearr_32321;
})();
var statearr_32322_32389 = state_32280__$1;
(statearr_32322_32389[(2)] = null);

(statearr_32322_32389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (6))){
var inst_32212 = (state_32280[(29)]);
var inst_32211 = cljs.core.deref.call(null,cs);
var inst_32212__$1 = cljs.core.keys.call(null,inst_32211);
var inst_32213 = cljs.core.count.call(null,inst_32212__$1);
var inst_32214 = cljs.core.reset_BANG_.call(null,dctr,inst_32213);
var inst_32219 = cljs.core.seq.call(null,inst_32212__$1);
var inst_32220 = inst_32219;
var inst_32221 = null;
var inst_32222 = (0);
var inst_32223 = (0);
var state_32280__$1 = (function (){var statearr_32323 = state_32280;
(statearr_32323[(30)] = inst_32214);

(statearr_32323[(29)] = inst_32212__$1);

(statearr_32323[(9)] = inst_32221);

(statearr_32323[(11)] = inst_32223);

(statearr_32323[(20)] = inst_32222);

(statearr_32323[(21)] = inst_32220);

return statearr_32323;
})();
var statearr_32324_32390 = state_32280__$1;
(statearr_32324_32390[(2)] = null);

(statearr_32324_32390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (28))){
var inst_32239 = (state_32280[(25)]);
var inst_32220 = (state_32280[(21)]);
var inst_32239__$1 = cljs.core.seq.call(null,inst_32220);
var state_32280__$1 = (function (){var statearr_32325 = state_32280;
(statearr_32325[(25)] = inst_32239__$1);

return statearr_32325;
})();
if(inst_32239__$1){
var statearr_32326_32391 = state_32280__$1;
(statearr_32326_32391[(1)] = (33));

} else {
var statearr_32327_32392 = state_32280__$1;
(statearr_32327_32392[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (25))){
var inst_32223 = (state_32280[(11)]);
var inst_32222 = (state_32280[(20)]);
var inst_32225 = (inst_32223 < inst_32222);
var inst_32226 = inst_32225;
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32226)){
var statearr_32328_32393 = state_32280__$1;
(statearr_32328_32393[(1)] = (27));

} else {
var statearr_32329_32394 = state_32280__$1;
(statearr_32329_32394[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (34))){
var state_32280__$1 = state_32280;
var statearr_32330_32395 = state_32280__$1;
(statearr_32330_32395[(2)] = null);

(statearr_32330_32395[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (17))){
var state_32280__$1 = state_32280;
var statearr_32331_32396 = state_32280__$1;
(statearr_32331_32396[(2)] = null);

(statearr_32331_32396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (3))){
var inst_32278 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32280__$1,inst_32278);
} else {
if((state_val_32281 === (12))){
var inst_32207 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32332_32397 = state_32280__$1;
(statearr_32332_32397[(2)] = inst_32207);

(statearr_32332_32397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (2))){
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32280__$1,(4),ch);
} else {
if((state_val_32281 === (23))){
var state_32280__$1 = state_32280;
var statearr_32333_32398 = state_32280__$1;
(statearr_32333_32398[(2)] = null);

(statearr_32333_32398[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (35))){
var inst_32262 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32334_32399 = state_32280__$1;
(statearr_32334_32399[(2)] = inst_32262);

(statearr_32334_32399[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (19))){
var inst_32179 = (state_32280[(7)]);
var inst_32183 = cljs.core.chunk_first.call(null,inst_32179);
var inst_32184 = cljs.core.chunk_rest.call(null,inst_32179);
var inst_32185 = cljs.core.count.call(null,inst_32183);
var inst_32157 = inst_32184;
var inst_32158 = inst_32183;
var inst_32159 = inst_32185;
var inst_32160 = (0);
var state_32280__$1 = (function (){var statearr_32335 = state_32280;
(statearr_32335[(13)] = inst_32160);

(statearr_32335[(14)] = inst_32157);

(statearr_32335[(15)] = inst_32159);

(statearr_32335[(16)] = inst_32158);

return statearr_32335;
})();
var statearr_32336_32400 = state_32280__$1;
(statearr_32336_32400[(2)] = null);

(statearr_32336_32400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (11))){
var inst_32179 = (state_32280[(7)]);
var inst_32157 = (state_32280[(14)]);
var inst_32179__$1 = cljs.core.seq.call(null,inst_32157);
var state_32280__$1 = (function (){var statearr_32337 = state_32280;
(statearr_32337[(7)] = inst_32179__$1);

return statearr_32337;
})();
if(inst_32179__$1){
var statearr_32338_32401 = state_32280__$1;
(statearr_32338_32401[(1)] = (16));

} else {
var statearr_32339_32402 = state_32280__$1;
(statearr_32339_32402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (9))){
var inst_32209 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32340_32403 = state_32280__$1;
(statearr_32340_32403[(2)] = inst_32209);

(statearr_32340_32403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (5))){
var inst_32155 = cljs.core.deref.call(null,cs);
var inst_32156 = cljs.core.seq.call(null,inst_32155);
var inst_32157 = inst_32156;
var inst_32158 = null;
var inst_32159 = (0);
var inst_32160 = (0);
var state_32280__$1 = (function (){var statearr_32341 = state_32280;
(statearr_32341[(13)] = inst_32160);

(statearr_32341[(14)] = inst_32157);

(statearr_32341[(15)] = inst_32159);

(statearr_32341[(16)] = inst_32158);

return statearr_32341;
})();
var statearr_32342_32404 = state_32280__$1;
(statearr_32342_32404[(2)] = null);

(statearr_32342_32404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (14))){
var state_32280__$1 = state_32280;
var statearr_32343_32405 = state_32280__$1;
(statearr_32343_32405[(2)] = null);

(statearr_32343_32405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (45))){
var inst_32270 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32344_32406 = state_32280__$1;
(statearr_32344_32406[(2)] = inst_32270);

(statearr_32344_32406[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (26))){
var inst_32212 = (state_32280[(29)]);
var inst_32266 = (state_32280[(2)]);
var inst_32267 = cljs.core.seq.call(null,inst_32212);
var state_32280__$1 = (function (){var statearr_32345 = state_32280;
(statearr_32345[(31)] = inst_32266);

return statearr_32345;
})();
if(inst_32267){
var statearr_32346_32407 = state_32280__$1;
(statearr_32346_32407[(1)] = (42));

} else {
var statearr_32347_32408 = state_32280__$1;
(statearr_32347_32408[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (16))){
var inst_32179 = (state_32280[(7)]);
var inst_32181 = cljs.core.chunked_seq_QMARK_.call(null,inst_32179);
var state_32280__$1 = state_32280;
if(inst_32181){
var statearr_32348_32409 = state_32280__$1;
(statearr_32348_32409[(1)] = (19));

} else {
var statearr_32349_32410 = state_32280__$1;
(statearr_32349_32410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (38))){
var inst_32259 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32350_32411 = state_32280__$1;
(statearr_32350_32411[(2)] = inst_32259);

(statearr_32350_32411[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (30))){
var state_32280__$1 = state_32280;
var statearr_32351_32412 = state_32280__$1;
(statearr_32351_32412[(2)] = null);

(statearr_32351_32412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (10))){
var inst_32160 = (state_32280[(13)]);
var inst_32158 = (state_32280[(16)]);
var inst_32168 = cljs.core._nth.call(null,inst_32158,inst_32160);
var inst_32169 = cljs.core.nth.call(null,inst_32168,(0),null);
var inst_32170 = cljs.core.nth.call(null,inst_32168,(1),null);
var state_32280__$1 = (function (){var statearr_32352 = state_32280;
(statearr_32352[(26)] = inst_32169);

return statearr_32352;
})();
if(cljs.core.truth_(inst_32170)){
var statearr_32353_32413 = state_32280__$1;
(statearr_32353_32413[(1)] = (13));

} else {
var statearr_32354_32414 = state_32280__$1;
(statearr_32354_32414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (18))){
var inst_32205 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32355_32415 = state_32280__$1;
(statearr_32355_32415[(2)] = inst_32205);

(statearr_32355_32415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (42))){
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32280__$1,(45),dchan);
} else {
if((state_val_32281 === (37))){
var inst_32248 = (state_32280[(23)]);
var inst_32148 = (state_32280[(12)]);
var inst_32239 = (state_32280[(25)]);
var inst_32248__$1 = cljs.core.first.call(null,inst_32239);
var inst_32249 = cljs.core.async.put_BANG_.call(null,inst_32248__$1,inst_32148,done);
var state_32280__$1 = (function (){var statearr_32356 = state_32280;
(statearr_32356[(23)] = inst_32248__$1);

return statearr_32356;
})();
if(cljs.core.truth_(inst_32249)){
var statearr_32357_32416 = state_32280__$1;
(statearr_32357_32416[(1)] = (39));

} else {
var statearr_32358_32417 = state_32280__$1;
(statearr_32358_32417[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (8))){
var inst_32160 = (state_32280[(13)]);
var inst_32159 = (state_32280[(15)]);
var inst_32162 = (inst_32160 < inst_32159);
var inst_32163 = inst_32162;
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32163)){
var statearr_32359_32418 = state_32280__$1;
(statearr_32359_32418[(1)] = (10));

} else {
var statearr_32360_32419 = state_32280__$1;
(statearr_32360_32419[(1)] = (11));

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
});})(c__31547__auto___32365,cs,m,dchan,dctr,done))
;
return ((function (switch__31452__auto__,c__31547__auto___32365,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31453__auto__ = null;
var cljs$core$async$mult_$_state_machine__31453__auto____0 = (function (){
var statearr_32361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32361[(0)] = cljs$core$async$mult_$_state_machine__31453__auto__);

(statearr_32361[(1)] = (1));

return statearr_32361;
});
var cljs$core$async$mult_$_state_machine__31453__auto____1 = (function (state_32280){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32362){if((e32362 instanceof Object)){
var ex__31456__auto__ = e32362;
var statearr_32363_32420 = state_32280;
(statearr_32363_32420[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32421 = state_32280;
state_32280 = G__32421;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31453__auto__ = function(state_32280){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31453__auto____1.call(this,state_32280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31453__auto____0;
cljs$core$async$mult_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31453__auto____1;
return cljs$core$async$mult_$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___32365,cs,m,dchan,dctr,done))
})();
var state__31549__auto__ = (function (){var statearr_32364 = f__31548__auto__.call(null);
(statearr_32364[(6)] = c__31547__auto___32365);

return statearr_32364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32365,cs,m,dchan,dctr,done))
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
var G__32423 = arguments.length;
switch (G__32423) {
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
var len__4730__auto___32435 = arguments.length;
var i__4731__auto___32436 = (0);
while(true){
if((i__4731__auto___32436 < len__4730__auto___32435)){
args__4736__auto__.push((arguments[i__4731__auto___32436]));

var G__32437 = (i__4731__auto___32436 + (1));
i__4731__auto___32436 = G__32437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32429){
var map__32430 = p__32429;
var map__32430__$1 = (((((!((map__32430 == null))))?(((((map__32430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32430):map__32430);
var opts = map__32430__$1;
var statearr_32432_32438 = state;
(statearr_32432_32438[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32430,map__32430__$1,opts){
return (function (val){
var statearr_32433_32439 = state;
(statearr_32433_32439[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32430,map__32430__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32434_32440 = state;
(statearr_32434_32440[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32425){
var G__32426 = cljs.core.first.call(null,seq32425);
var seq32425__$1 = cljs.core.next.call(null,seq32425);
var G__32427 = cljs.core.first.call(null,seq32425__$1);
var seq32425__$2 = cljs.core.next.call(null,seq32425__$1);
var G__32428 = cljs.core.first.call(null,seq32425__$2);
var seq32425__$3 = cljs.core.next.call(null,seq32425__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32426,G__32427,G__32428,seq32425__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32441 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32442){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32442 = meta32442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32443,meta32442__$1){
var self__ = this;
var _32443__$1 = this;
return (new cljs.core.async.t_cljs$core$async32441(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32442__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32443){
var self__ = this;
var _32443__$1 = this;
return self__.meta32442;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32441.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32442","meta32442",-422501927,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32441";

cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32441");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32441.
 */
cljs.core.async.__GT_t_cljs$core$async32441 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32441(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32442){
return (new cljs.core.async.t_cljs$core$async32441(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32442));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32441(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31547__auto___32605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___32605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32545){
var state_val_32546 = (state_32545[(1)]);
if((state_val_32546 === (7))){
var inst_32460 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32547_32606 = state_32545__$1;
(statearr_32547_32606[(2)] = inst_32460);

(statearr_32547_32606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (20))){
var inst_32472 = (state_32545[(7)]);
var state_32545__$1 = state_32545;
var statearr_32548_32607 = state_32545__$1;
(statearr_32548_32607[(2)] = inst_32472);

(statearr_32548_32607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (27))){
var state_32545__$1 = state_32545;
var statearr_32549_32608 = state_32545__$1;
(statearr_32549_32608[(2)] = null);

(statearr_32549_32608[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (1))){
var inst_32447 = (state_32545[(8)]);
var inst_32447__$1 = calc_state.call(null);
var inst_32449 = (inst_32447__$1 == null);
var inst_32450 = cljs.core.not.call(null,inst_32449);
var state_32545__$1 = (function (){var statearr_32550 = state_32545;
(statearr_32550[(8)] = inst_32447__$1);

return statearr_32550;
})();
if(inst_32450){
var statearr_32551_32609 = state_32545__$1;
(statearr_32551_32609[(1)] = (2));

} else {
var statearr_32552_32610 = state_32545__$1;
(statearr_32552_32610[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (24))){
var inst_32519 = (state_32545[(9)]);
var inst_32496 = (state_32545[(10)]);
var inst_32505 = (state_32545[(11)]);
var inst_32519__$1 = inst_32496.call(null,inst_32505);
var state_32545__$1 = (function (){var statearr_32553 = state_32545;
(statearr_32553[(9)] = inst_32519__$1);

return statearr_32553;
})();
if(cljs.core.truth_(inst_32519__$1)){
var statearr_32554_32611 = state_32545__$1;
(statearr_32554_32611[(1)] = (29));

} else {
var statearr_32555_32612 = state_32545__$1;
(statearr_32555_32612[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (4))){
var inst_32463 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32463)){
var statearr_32556_32613 = state_32545__$1;
(statearr_32556_32613[(1)] = (8));

} else {
var statearr_32557_32614 = state_32545__$1;
(statearr_32557_32614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (15))){
var inst_32490 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32490)){
var statearr_32558_32615 = state_32545__$1;
(statearr_32558_32615[(1)] = (19));

} else {
var statearr_32559_32616 = state_32545__$1;
(statearr_32559_32616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (21))){
var inst_32495 = (state_32545[(12)]);
var inst_32495__$1 = (state_32545[(2)]);
var inst_32496 = cljs.core.get.call(null,inst_32495__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32497 = cljs.core.get.call(null,inst_32495__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32498 = cljs.core.get.call(null,inst_32495__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32545__$1 = (function (){var statearr_32560 = state_32545;
(statearr_32560[(10)] = inst_32496);

(statearr_32560[(12)] = inst_32495__$1);

(statearr_32560[(13)] = inst_32497);

return statearr_32560;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32545__$1,(22),inst_32498);
} else {
if((state_val_32546 === (31))){
var inst_32527 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32527)){
var statearr_32561_32617 = state_32545__$1;
(statearr_32561_32617[(1)] = (32));

} else {
var statearr_32562_32618 = state_32545__$1;
(statearr_32562_32618[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (32))){
var inst_32504 = (state_32545[(14)]);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32545__$1,(35),out,inst_32504);
} else {
if((state_val_32546 === (33))){
var inst_32495 = (state_32545[(12)]);
var inst_32472 = inst_32495;
var state_32545__$1 = (function (){var statearr_32563 = state_32545;
(statearr_32563[(7)] = inst_32472);

return statearr_32563;
})();
var statearr_32564_32619 = state_32545__$1;
(statearr_32564_32619[(2)] = null);

(statearr_32564_32619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (13))){
var inst_32472 = (state_32545[(7)]);
var inst_32479 = inst_32472.cljs$lang$protocol_mask$partition0$;
var inst_32480 = (inst_32479 & (64));
var inst_32481 = inst_32472.cljs$core$ISeq$;
var inst_32482 = (cljs.core.PROTOCOL_SENTINEL === inst_32481);
var inst_32483 = ((inst_32480) || (inst_32482));
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32483)){
var statearr_32565_32620 = state_32545__$1;
(statearr_32565_32620[(1)] = (16));

} else {
var statearr_32566_32621 = state_32545__$1;
(statearr_32566_32621[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (22))){
var inst_32504 = (state_32545[(14)]);
var inst_32505 = (state_32545[(11)]);
var inst_32503 = (state_32545[(2)]);
var inst_32504__$1 = cljs.core.nth.call(null,inst_32503,(0),null);
var inst_32505__$1 = cljs.core.nth.call(null,inst_32503,(1),null);
var inst_32506 = (inst_32504__$1 == null);
var inst_32507 = cljs.core._EQ_.call(null,inst_32505__$1,change);
var inst_32508 = ((inst_32506) || (inst_32507));
var state_32545__$1 = (function (){var statearr_32567 = state_32545;
(statearr_32567[(14)] = inst_32504__$1);

(statearr_32567[(11)] = inst_32505__$1);

return statearr_32567;
})();
if(cljs.core.truth_(inst_32508)){
var statearr_32568_32622 = state_32545__$1;
(statearr_32568_32622[(1)] = (23));

} else {
var statearr_32569_32623 = state_32545__$1;
(statearr_32569_32623[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (36))){
var inst_32495 = (state_32545[(12)]);
var inst_32472 = inst_32495;
var state_32545__$1 = (function (){var statearr_32570 = state_32545;
(statearr_32570[(7)] = inst_32472);

return statearr_32570;
})();
var statearr_32571_32624 = state_32545__$1;
(statearr_32571_32624[(2)] = null);

(statearr_32571_32624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (29))){
var inst_32519 = (state_32545[(9)]);
var state_32545__$1 = state_32545;
var statearr_32572_32625 = state_32545__$1;
(statearr_32572_32625[(2)] = inst_32519);

(statearr_32572_32625[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (6))){
var state_32545__$1 = state_32545;
var statearr_32573_32626 = state_32545__$1;
(statearr_32573_32626[(2)] = false);

(statearr_32573_32626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (28))){
var inst_32515 = (state_32545[(2)]);
var inst_32516 = calc_state.call(null);
var inst_32472 = inst_32516;
var state_32545__$1 = (function (){var statearr_32574 = state_32545;
(statearr_32574[(15)] = inst_32515);

(statearr_32574[(7)] = inst_32472);

return statearr_32574;
})();
var statearr_32575_32627 = state_32545__$1;
(statearr_32575_32627[(2)] = null);

(statearr_32575_32627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (25))){
var inst_32541 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32576_32628 = state_32545__$1;
(statearr_32576_32628[(2)] = inst_32541);

(statearr_32576_32628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (34))){
var inst_32539 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32577_32629 = state_32545__$1;
(statearr_32577_32629[(2)] = inst_32539);

(statearr_32577_32629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (17))){
var state_32545__$1 = state_32545;
var statearr_32578_32630 = state_32545__$1;
(statearr_32578_32630[(2)] = false);

(statearr_32578_32630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (3))){
var state_32545__$1 = state_32545;
var statearr_32579_32631 = state_32545__$1;
(statearr_32579_32631[(2)] = false);

(statearr_32579_32631[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (12))){
var inst_32543 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32545__$1,inst_32543);
} else {
if((state_val_32546 === (2))){
var inst_32447 = (state_32545[(8)]);
var inst_32452 = inst_32447.cljs$lang$protocol_mask$partition0$;
var inst_32453 = (inst_32452 & (64));
var inst_32454 = inst_32447.cljs$core$ISeq$;
var inst_32455 = (cljs.core.PROTOCOL_SENTINEL === inst_32454);
var inst_32456 = ((inst_32453) || (inst_32455));
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32456)){
var statearr_32580_32632 = state_32545__$1;
(statearr_32580_32632[(1)] = (5));

} else {
var statearr_32581_32633 = state_32545__$1;
(statearr_32581_32633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (23))){
var inst_32504 = (state_32545[(14)]);
var inst_32510 = (inst_32504 == null);
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32510)){
var statearr_32582_32634 = state_32545__$1;
(statearr_32582_32634[(1)] = (26));

} else {
var statearr_32583_32635 = state_32545__$1;
(statearr_32583_32635[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (35))){
var inst_32530 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32530)){
var statearr_32584_32636 = state_32545__$1;
(statearr_32584_32636[(1)] = (36));

} else {
var statearr_32585_32637 = state_32545__$1;
(statearr_32585_32637[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (19))){
var inst_32472 = (state_32545[(7)]);
var inst_32492 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32472);
var state_32545__$1 = state_32545;
var statearr_32586_32638 = state_32545__$1;
(statearr_32586_32638[(2)] = inst_32492);

(statearr_32586_32638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (11))){
var inst_32472 = (state_32545[(7)]);
var inst_32476 = (inst_32472 == null);
var inst_32477 = cljs.core.not.call(null,inst_32476);
var state_32545__$1 = state_32545;
if(inst_32477){
var statearr_32587_32639 = state_32545__$1;
(statearr_32587_32639[(1)] = (13));

} else {
var statearr_32588_32640 = state_32545__$1;
(statearr_32588_32640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (9))){
var inst_32447 = (state_32545[(8)]);
var state_32545__$1 = state_32545;
var statearr_32589_32641 = state_32545__$1;
(statearr_32589_32641[(2)] = inst_32447);

(statearr_32589_32641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (5))){
var state_32545__$1 = state_32545;
var statearr_32590_32642 = state_32545__$1;
(statearr_32590_32642[(2)] = true);

(statearr_32590_32642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (14))){
var state_32545__$1 = state_32545;
var statearr_32591_32643 = state_32545__$1;
(statearr_32591_32643[(2)] = false);

(statearr_32591_32643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (26))){
var inst_32505 = (state_32545[(11)]);
var inst_32512 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32505);
var state_32545__$1 = state_32545;
var statearr_32592_32644 = state_32545__$1;
(statearr_32592_32644[(2)] = inst_32512);

(statearr_32592_32644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (16))){
var state_32545__$1 = state_32545;
var statearr_32593_32645 = state_32545__$1;
(statearr_32593_32645[(2)] = true);

(statearr_32593_32645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (38))){
var inst_32535 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32594_32646 = state_32545__$1;
(statearr_32594_32646[(2)] = inst_32535);

(statearr_32594_32646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (30))){
var inst_32496 = (state_32545[(10)]);
var inst_32497 = (state_32545[(13)]);
var inst_32505 = (state_32545[(11)]);
var inst_32522 = cljs.core.empty_QMARK_.call(null,inst_32496);
var inst_32523 = inst_32497.call(null,inst_32505);
var inst_32524 = cljs.core.not.call(null,inst_32523);
var inst_32525 = ((inst_32522) && (inst_32524));
var state_32545__$1 = state_32545;
var statearr_32595_32647 = state_32545__$1;
(statearr_32595_32647[(2)] = inst_32525);

(statearr_32595_32647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (10))){
var inst_32447 = (state_32545[(8)]);
var inst_32468 = (state_32545[(2)]);
var inst_32469 = cljs.core.get.call(null,inst_32468,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32470 = cljs.core.get.call(null,inst_32468,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32471 = cljs.core.get.call(null,inst_32468,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32472 = inst_32447;
var state_32545__$1 = (function (){var statearr_32596 = state_32545;
(statearr_32596[(16)] = inst_32471);

(statearr_32596[(7)] = inst_32472);

(statearr_32596[(17)] = inst_32470);

(statearr_32596[(18)] = inst_32469);

return statearr_32596;
})();
var statearr_32597_32648 = state_32545__$1;
(statearr_32597_32648[(2)] = null);

(statearr_32597_32648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (18))){
var inst_32487 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32598_32649 = state_32545__$1;
(statearr_32598_32649[(2)] = inst_32487);

(statearr_32598_32649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (37))){
var state_32545__$1 = state_32545;
var statearr_32599_32650 = state_32545__$1;
(statearr_32599_32650[(2)] = null);

(statearr_32599_32650[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (8))){
var inst_32447 = (state_32545[(8)]);
var inst_32465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32447);
var state_32545__$1 = state_32545;
var statearr_32600_32651 = state_32545__$1;
(statearr_32600_32651[(2)] = inst_32465);

(statearr_32600_32651[(1)] = (10));


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
});})(c__31547__auto___32605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31452__auto__,c__31547__auto___32605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31453__auto__ = null;
var cljs$core$async$mix_$_state_machine__31453__auto____0 = (function (){
var statearr_32601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32601[(0)] = cljs$core$async$mix_$_state_machine__31453__auto__);

(statearr_32601[(1)] = (1));

return statearr_32601;
});
var cljs$core$async$mix_$_state_machine__31453__auto____1 = (function (state_32545){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32602){if((e32602 instanceof Object)){
var ex__31456__auto__ = e32602;
var statearr_32603_32652 = state_32545;
(statearr_32603_32652[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32653 = state_32545;
state_32545 = G__32653;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31453__auto__ = function(state_32545){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31453__auto____1.call(this,state_32545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31453__auto____0;
cljs$core$async$mix_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31453__auto____1;
return cljs$core$async$mix_$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___32605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31549__auto__ = (function (){var statearr_32604 = f__31548__auto__.call(null);
(statearr_32604[(6)] = c__31547__auto___32605);

return statearr_32604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__32655 = arguments.length;
switch (G__32655) {
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
var G__32659 = arguments.length;
switch (G__32659) {
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
return (function (p1__32657_SHARP_){
if(cljs.core.truth_(p1__32657_SHARP_.call(null,topic))){
return p1__32657_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32657_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32660 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32661){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32661 = meta32661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32662,meta32661__$1){
var self__ = this;
var _32662__$1 = this;
return (new cljs.core.async.t_cljs$core$async32660(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32661__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32662){
var self__ = this;
var _32662__$1 = this;
return self__.meta32661;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32660.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32661","meta32661",1520151695,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32660";

cljs.core.async.t_cljs$core$async32660.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32660");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32660.
 */
cljs.core.async.__GT_t_cljs$core$async32660 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32660(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32661){
return (new cljs.core.async.t_cljs$core$async32660(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32661));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32660(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31547__auto___32780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32780,mults,ensure_mult,p){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___32780,mults,ensure_mult,p){
return (function (state_32734){
var state_val_32735 = (state_32734[(1)]);
if((state_val_32735 === (7))){
var inst_32730 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32736_32781 = state_32734__$1;
(statearr_32736_32781[(2)] = inst_32730);

(statearr_32736_32781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (20))){
var state_32734__$1 = state_32734;
var statearr_32737_32782 = state_32734__$1;
(statearr_32737_32782[(2)] = null);

(statearr_32737_32782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (1))){
var state_32734__$1 = state_32734;
var statearr_32738_32783 = state_32734__$1;
(statearr_32738_32783[(2)] = null);

(statearr_32738_32783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (24))){
var inst_32713 = (state_32734[(7)]);
var inst_32722 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32713);
var state_32734__$1 = state_32734;
var statearr_32739_32784 = state_32734__$1;
(statearr_32739_32784[(2)] = inst_32722);

(statearr_32739_32784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (4))){
var inst_32665 = (state_32734[(8)]);
var inst_32665__$1 = (state_32734[(2)]);
var inst_32666 = (inst_32665__$1 == null);
var state_32734__$1 = (function (){var statearr_32740 = state_32734;
(statearr_32740[(8)] = inst_32665__$1);

return statearr_32740;
})();
if(cljs.core.truth_(inst_32666)){
var statearr_32741_32785 = state_32734__$1;
(statearr_32741_32785[(1)] = (5));

} else {
var statearr_32742_32786 = state_32734__$1;
(statearr_32742_32786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (15))){
var inst_32707 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32743_32787 = state_32734__$1;
(statearr_32743_32787[(2)] = inst_32707);

(statearr_32743_32787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (21))){
var inst_32727 = (state_32734[(2)]);
var state_32734__$1 = (function (){var statearr_32744 = state_32734;
(statearr_32744[(9)] = inst_32727);

return statearr_32744;
})();
var statearr_32745_32788 = state_32734__$1;
(statearr_32745_32788[(2)] = null);

(statearr_32745_32788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (13))){
var inst_32689 = (state_32734[(10)]);
var inst_32691 = cljs.core.chunked_seq_QMARK_.call(null,inst_32689);
var state_32734__$1 = state_32734;
if(inst_32691){
var statearr_32746_32789 = state_32734__$1;
(statearr_32746_32789[(1)] = (16));

} else {
var statearr_32747_32790 = state_32734__$1;
(statearr_32747_32790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (22))){
var inst_32719 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
if(cljs.core.truth_(inst_32719)){
var statearr_32748_32791 = state_32734__$1;
(statearr_32748_32791[(1)] = (23));

} else {
var statearr_32749_32792 = state_32734__$1;
(statearr_32749_32792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (6))){
var inst_32713 = (state_32734[(7)]);
var inst_32715 = (state_32734[(11)]);
var inst_32665 = (state_32734[(8)]);
var inst_32713__$1 = topic_fn.call(null,inst_32665);
var inst_32714 = cljs.core.deref.call(null,mults);
var inst_32715__$1 = cljs.core.get.call(null,inst_32714,inst_32713__$1);
var state_32734__$1 = (function (){var statearr_32750 = state_32734;
(statearr_32750[(7)] = inst_32713__$1);

(statearr_32750[(11)] = inst_32715__$1);

return statearr_32750;
})();
if(cljs.core.truth_(inst_32715__$1)){
var statearr_32751_32793 = state_32734__$1;
(statearr_32751_32793[(1)] = (19));

} else {
var statearr_32752_32794 = state_32734__$1;
(statearr_32752_32794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (25))){
var inst_32724 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32753_32795 = state_32734__$1;
(statearr_32753_32795[(2)] = inst_32724);

(statearr_32753_32795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (17))){
var inst_32689 = (state_32734[(10)]);
var inst_32698 = cljs.core.first.call(null,inst_32689);
var inst_32699 = cljs.core.async.muxch_STAR_.call(null,inst_32698);
var inst_32700 = cljs.core.async.close_BANG_.call(null,inst_32699);
var inst_32701 = cljs.core.next.call(null,inst_32689);
var inst_32675 = inst_32701;
var inst_32676 = null;
var inst_32677 = (0);
var inst_32678 = (0);
var state_32734__$1 = (function (){var statearr_32754 = state_32734;
(statearr_32754[(12)] = inst_32700);

(statearr_32754[(13)] = inst_32675);

(statearr_32754[(14)] = inst_32678);

(statearr_32754[(15)] = inst_32676);

(statearr_32754[(16)] = inst_32677);

return statearr_32754;
})();
var statearr_32755_32796 = state_32734__$1;
(statearr_32755_32796[(2)] = null);

(statearr_32755_32796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (3))){
var inst_32732 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32734__$1,inst_32732);
} else {
if((state_val_32735 === (12))){
var inst_32709 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32756_32797 = state_32734__$1;
(statearr_32756_32797[(2)] = inst_32709);

(statearr_32756_32797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (2))){
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32734__$1,(4),ch);
} else {
if((state_val_32735 === (23))){
var state_32734__$1 = state_32734;
var statearr_32757_32798 = state_32734__$1;
(statearr_32757_32798[(2)] = null);

(statearr_32757_32798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (19))){
var inst_32715 = (state_32734[(11)]);
var inst_32665 = (state_32734[(8)]);
var inst_32717 = cljs.core.async.muxch_STAR_.call(null,inst_32715);
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32734__$1,(22),inst_32717,inst_32665);
} else {
if((state_val_32735 === (11))){
var inst_32675 = (state_32734[(13)]);
var inst_32689 = (state_32734[(10)]);
var inst_32689__$1 = cljs.core.seq.call(null,inst_32675);
var state_32734__$1 = (function (){var statearr_32758 = state_32734;
(statearr_32758[(10)] = inst_32689__$1);

return statearr_32758;
})();
if(inst_32689__$1){
var statearr_32759_32799 = state_32734__$1;
(statearr_32759_32799[(1)] = (13));

} else {
var statearr_32760_32800 = state_32734__$1;
(statearr_32760_32800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (9))){
var inst_32711 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32761_32801 = state_32734__$1;
(statearr_32761_32801[(2)] = inst_32711);

(statearr_32761_32801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (5))){
var inst_32672 = cljs.core.deref.call(null,mults);
var inst_32673 = cljs.core.vals.call(null,inst_32672);
var inst_32674 = cljs.core.seq.call(null,inst_32673);
var inst_32675 = inst_32674;
var inst_32676 = null;
var inst_32677 = (0);
var inst_32678 = (0);
var state_32734__$1 = (function (){var statearr_32762 = state_32734;
(statearr_32762[(13)] = inst_32675);

(statearr_32762[(14)] = inst_32678);

(statearr_32762[(15)] = inst_32676);

(statearr_32762[(16)] = inst_32677);

return statearr_32762;
})();
var statearr_32763_32802 = state_32734__$1;
(statearr_32763_32802[(2)] = null);

(statearr_32763_32802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (14))){
var state_32734__$1 = state_32734;
var statearr_32767_32803 = state_32734__$1;
(statearr_32767_32803[(2)] = null);

(statearr_32767_32803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (16))){
var inst_32689 = (state_32734[(10)]);
var inst_32693 = cljs.core.chunk_first.call(null,inst_32689);
var inst_32694 = cljs.core.chunk_rest.call(null,inst_32689);
var inst_32695 = cljs.core.count.call(null,inst_32693);
var inst_32675 = inst_32694;
var inst_32676 = inst_32693;
var inst_32677 = inst_32695;
var inst_32678 = (0);
var state_32734__$1 = (function (){var statearr_32768 = state_32734;
(statearr_32768[(13)] = inst_32675);

(statearr_32768[(14)] = inst_32678);

(statearr_32768[(15)] = inst_32676);

(statearr_32768[(16)] = inst_32677);

return statearr_32768;
})();
var statearr_32769_32804 = state_32734__$1;
(statearr_32769_32804[(2)] = null);

(statearr_32769_32804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (10))){
var inst_32675 = (state_32734[(13)]);
var inst_32678 = (state_32734[(14)]);
var inst_32676 = (state_32734[(15)]);
var inst_32677 = (state_32734[(16)]);
var inst_32683 = cljs.core._nth.call(null,inst_32676,inst_32678);
var inst_32684 = cljs.core.async.muxch_STAR_.call(null,inst_32683);
var inst_32685 = cljs.core.async.close_BANG_.call(null,inst_32684);
var inst_32686 = (inst_32678 + (1));
var tmp32764 = inst_32675;
var tmp32765 = inst_32676;
var tmp32766 = inst_32677;
var inst_32675__$1 = tmp32764;
var inst_32676__$1 = tmp32765;
var inst_32677__$1 = tmp32766;
var inst_32678__$1 = inst_32686;
var state_32734__$1 = (function (){var statearr_32770 = state_32734;
(statearr_32770[(13)] = inst_32675__$1);

(statearr_32770[(14)] = inst_32678__$1);

(statearr_32770[(15)] = inst_32676__$1);

(statearr_32770[(17)] = inst_32685);

(statearr_32770[(16)] = inst_32677__$1);

return statearr_32770;
})();
var statearr_32771_32805 = state_32734__$1;
(statearr_32771_32805[(2)] = null);

(statearr_32771_32805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (18))){
var inst_32704 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32772_32806 = state_32734__$1;
(statearr_32772_32806[(2)] = inst_32704);

(statearr_32772_32806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (8))){
var inst_32678 = (state_32734[(14)]);
var inst_32677 = (state_32734[(16)]);
var inst_32680 = (inst_32678 < inst_32677);
var inst_32681 = inst_32680;
var state_32734__$1 = state_32734;
if(cljs.core.truth_(inst_32681)){
var statearr_32773_32807 = state_32734__$1;
(statearr_32773_32807[(1)] = (10));

} else {
var statearr_32774_32808 = state_32734__$1;
(statearr_32774_32808[(1)] = (11));

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
});})(c__31547__auto___32780,mults,ensure_mult,p))
;
return ((function (switch__31452__auto__,c__31547__auto___32780,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_32775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32775[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_32775[(1)] = (1));

return statearr_32775;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_32734){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32776){if((e32776 instanceof Object)){
var ex__31456__auto__ = e32776;
var statearr_32777_32809 = state_32734;
(statearr_32777_32809[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32810 = state_32734;
state_32734 = G__32810;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_32734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_32734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___32780,mults,ensure_mult,p))
})();
var state__31549__auto__ = (function (){var statearr_32778 = f__31548__auto__.call(null);
(statearr_32778[(6)] = c__31547__auto___32780);

return statearr_32778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32780,mults,ensure_mult,p))
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
var G__32812 = arguments.length;
switch (G__32812) {
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
var G__32815 = arguments.length;
switch (G__32815) {
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
var G__32818 = arguments.length;
switch (G__32818) {
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
var c__31547__auto___32885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___32885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32857){
var state_val_32858 = (state_32857[(1)]);
if((state_val_32858 === (7))){
var state_32857__$1 = state_32857;
var statearr_32859_32886 = state_32857__$1;
(statearr_32859_32886[(2)] = null);

(statearr_32859_32886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (1))){
var state_32857__$1 = state_32857;
var statearr_32860_32887 = state_32857__$1;
(statearr_32860_32887[(2)] = null);

(statearr_32860_32887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (4))){
var inst_32821 = (state_32857[(7)]);
var inst_32823 = (inst_32821 < cnt);
var state_32857__$1 = state_32857;
if(cljs.core.truth_(inst_32823)){
var statearr_32861_32888 = state_32857__$1;
(statearr_32861_32888[(1)] = (6));

} else {
var statearr_32862_32889 = state_32857__$1;
(statearr_32862_32889[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (15))){
var inst_32853 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32863_32890 = state_32857__$1;
(statearr_32863_32890[(2)] = inst_32853);

(statearr_32863_32890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (13))){
var inst_32846 = cljs.core.async.close_BANG_.call(null,out);
var state_32857__$1 = state_32857;
var statearr_32864_32891 = state_32857__$1;
(statearr_32864_32891[(2)] = inst_32846);

(statearr_32864_32891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (6))){
var state_32857__$1 = state_32857;
var statearr_32865_32892 = state_32857__$1;
(statearr_32865_32892[(2)] = null);

(statearr_32865_32892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (3))){
var inst_32855 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32857__$1,inst_32855);
} else {
if((state_val_32858 === (12))){
var inst_32843 = (state_32857[(8)]);
var inst_32843__$1 = (state_32857[(2)]);
var inst_32844 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32843__$1);
var state_32857__$1 = (function (){var statearr_32866 = state_32857;
(statearr_32866[(8)] = inst_32843__$1);

return statearr_32866;
})();
if(cljs.core.truth_(inst_32844)){
var statearr_32867_32893 = state_32857__$1;
(statearr_32867_32893[(1)] = (13));

} else {
var statearr_32868_32894 = state_32857__$1;
(statearr_32868_32894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (2))){
var inst_32820 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32821 = (0);
var state_32857__$1 = (function (){var statearr_32869 = state_32857;
(statearr_32869[(7)] = inst_32821);

(statearr_32869[(9)] = inst_32820);

return statearr_32869;
})();
var statearr_32870_32895 = state_32857__$1;
(statearr_32870_32895[(2)] = null);

(statearr_32870_32895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (11))){
var inst_32821 = (state_32857[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32857,(10),Object,null,(9));
var inst_32830 = chs__$1.call(null,inst_32821);
var inst_32831 = done.call(null,inst_32821);
var inst_32832 = cljs.core.async.take_BANG_.call(null,inst_32830,inst_32831);
var state_32857__$1 = state_32857;
var statearr_32871_32896 = state_32857__$1;
(statearr_32871_32896[(2)] = inst_32832);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32857__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (9))){
var inst_32821 = (state_32857[(7)]);
var inst_32834 = (state_32857[(2)]);
var inst_32835 = (inst_32821 + (1));
var inst_32821__$1 = inst_32835;
var state_32857__$1 = (function (){var statearr_32872 = state_32857;
(statearr_32872[(7)] = inst_32821__$1);

(statearr_32872[(10)] = inst_32834);

return statearr_32872;
})();
var statearr_32873_32897 = state_32857__$1;
(statearr_32873_32897[(2)] = null);

(statearr_32873_32897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (5))){
var inst_32841 = (state_32857[(2)]);
var state_32857__$1 = (function (){var statearr_32874 = state_32857;
(statearr_32874[(11)] = inst_32841);

return statearr_32874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32857__$1,(12),dchan);
} else {
if((state_val_32858 === (14))){
var inst_32843 = (state_32857[(8)]);
var inst_32848 = cljs.core.apply.call(null,f,inst_32843);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32857__$1,(16),out,inst_32848);
} else {
if((state_val_32858 === (16))){
var inst_32850 = (state_32857[(2)]);
var state_32857__$1 = (function (){var statearr_32875 = state_32857;
(statearr_32875[(12)] = inst_32850);

return statearr_32875;
})();
var statearr_32876_32898 = state_32857__$1;
(statearr_32876_32898[(2)] = null);

(statearr_32876_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (10))){
var inst_32825 = (state_32857[(2)]);
var inst_32826 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32857__$1 = (function (){var statearr_32877 = state_32857;
(statearr_32877[(13)] = inst_32825);

return statearr_32877;
})();
var statearr_32878_32899 = state_32857__$1;
(statearr_32878_32899[(2)] = inst_32826);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32857__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (8))){
var inst_32839 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32879_32900 = state_32857__$1;
(statearr_32879_32900[(2)] = inst_32839);

(statearr_32879_32900[(1)] = (5));


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
});})(c__31547__auto___32885,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31452__auto__,c__31547__auto___32885,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_32880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32880[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_32880[(1)] = (1));

return statearr_32880;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_32857){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32881){if((e32881 instanceof Object)){
var ex__31456__auto__ = e32881;
var statearr_32882_32901 = state_32857;
(statearr_32882_32901[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32902 = state_32857;
state_32857 = G__32902;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_32857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_32857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___32885,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31549__auto__ = (function (){var statearr_32883 = f__31548__auto__.call(null);
(statearr_32883[(6)] = c__31547__auto___32885);

return statearr_32883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32885,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32905 = arguments.length;
switch (G__32905) {
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
var c__31547__auto___32959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32959,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___32959,out){
return (function (state_32937){
var state_val_32938 = (state_32937[(1)]);
if((state_val_32938 === (7))){
var inst_32917 = (state_32937[(7)]);
var inst_32916 = (state_32937[(8)]);
var inst_32916__$1 = (state_32937[(2)]);
var inst_32917__$1 = cljs.core.nth.call(null,inst_32916__$1,(0),null);
var inst_32918 = cljs.core.nth.call(null,inst_32916__$1,(1),null);
var inst_32919 = (inst_32917__$1 == null);
var state_32937__$1 = (function (){var statearr_32939 = state_32937;
(statearr_32939[(9)] = inst_32918);

(statearr_32939[(7)] = inst_32917__$1);

(statearr_32939[(8)] = inst_32916__$1);

return statearr_32939;
})();
if(cljs.core.truth_(inst_32919)){
var statearr_32940_32960 = state_32937__$1;
(statearr_32940_32960[(1)] = (8));

} else {
var statearr_32941_32961 = state_32937__$1;
(statearr_32941_32961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (1))){
var inst_32906 = cljs.core.vec.call(null,chs);
var inst_32907 = inst_32906;
var state_32937__$1 = (function (){var statearr_32942 = state_32937;
(statearr_32942[(10)] = inst_32907);

return statearr_32942;
})();
var statearr_32943_32962 = state_32937__$1;
(statearr_32943_32962[(2)] = null);

(statearr_32943_32962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (4))){
var inst_32907 = (state_32937[(10)]);
var state_32937__$1 = state_32937;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32937__$1,(7),inst_32907);
} else {
if((state_val_32938 === (6))){
var inst_32933 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32944_32963 = state_32937__$1;
(statearr_32944_32963[(2)] = inst_32933);

(statearr_32944_32963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (3))){
var inst_32935 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32937__$1,inst_32935);
} else {
if((state_val_32938 === (2))){
var inst_32907 = (state_32937[(10)]);
var inst_32909 = cljs.core.count.call(null,inst_32907);
var inst_32910 = (inst_32909 > (0));
var state_32937__$1 = state_32937;
if(cljs.core.truth_(inst_32910)){
var statearr_32946_32964 = state_32937__$1;
(statearr_32946_32964[(1)] = (4));

} else {
var statearr_32947_32965 = state_32937__$1;
(statearr_32947_32965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (11))){
var inst_32907 = (state_32937[(10)]);
var inst_32926 = (state_32937[(2)]);
var tmp32945 = inst_32907;
var inst_32907__$1 = tmp32945;
var state_32937__$1 = (function (){var statearr_32948 = state_32937;
(statearr_32948[(11)] = inst_32926);

(statearr_32948[(10)] = inst_32907__$1);

return statearr_32948;
})();
var statearr_32949_32966 = state_32937__$1;
(statearr_32949_32966[(2)] = null);

(statearr_32949_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (9))){
var inst_32917 = (state_32937[(7)]);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32937__$1,(11),out,inst_32917);
} else {
if((state_val_32938 === (5))){
var inst_32931 = cljs.core.async.close_BANG_.call(null,out);
var state_32937__$1 = state_32937;
var statearr_32950_32967 = state_32937__$1;
(statearr_32950_32967[(2)] = inst_32931);

(statearr_32950_32967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (10))){
var inst_32929 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32951_32968 = state_32937__$1;
(statearr_32951_32968[(2)] = inst_32929);

(statearr_32951_32968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (8))){
var inst_32918 = (state_32937[(9)]);
var inst_32917 = (state_32937[(7)]);
var inst_32916 = (state_32937[(8)]);
var inst_32907 = (state_32937[(10)]);
var inst_32921 = (function (){var cs = inst_32907;
var vec__32912 = inst_32916;
var v = inst_32917;
var c = inst_32918;
return ((function (cs,vec__32912,v,c,inst_32918,inst_32917,inst_32916,inst_32907,state_val_32938,c__31547__auto___32959,out){
return (function (p1__32903_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32903_SHARP_);
});
;})(cs,vec__32912,v,c,inst_32918,inst_32917,inst_32916,inst_32907,state_val_32938,c__31547__auto___32959,out))
})();
var inst_32922 = cljs.core.filterv.call(null,inst_32921,inst_32907);
var inst_32907__$1 = inst_32922;
var state_32937__$1 = (function (){var statearr_32952 = state_32937;
(statearr_32952[(10)] = inst_32907__$1);

return statearr_32952;
})();
var statearr_32953_32969 = state_32937__$1;
(statearr_32953_32969[(2)] = null);

(statearr_32953_32969[(1)] = (2));


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
});})(c__31547__auto___32959,out))
;
return ((function (switch__31452__auto__,c__31547__auto___32959,out){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_32954 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32954[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_32954[(1)] = (1));

return statearr_32954;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_32937){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e32955){if((e32955 instanceof Object)){
var ex__31456__auto__ = e32955;
var statearr_32956_32970 = state_32937;
(statearr_32956_32970[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32971 = state_32937;
state_32937 = G__32971;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_32937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_32937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___32959,out))
})();
var state__31549__auto__ = (function (){var statearr_32957 = f__31548__auto__.call(null);
(statearr_32957[(6)] = c__31547__auto___32959);

return statearr_32957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32959,out))
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
var G__32973 = arguments.length;
switch (G__32973) {
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
var c__31547__auto___33018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33018,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___33018,out){
return (function (state_32997){
var state_val_32998 = (state_32997[(1)]);
if((state_val_32998 === (7))){
var inst_32979 = (state_32997[(7)]);
var inst_32979__$1 = (state_32997[(2)]);
var inst_32980 = (inst_32979__$1 == null);
var inst_32981 = cljs.core.not.call(null,inst_32980);
var state_32997__$1 = (function (){var statearr_32999 = state_32997;
(statearr_32999[(7)] = inst_32979__$1);

return statearr_32999;
})();
if(inst_32981){
var statearr_33000_33019 = state_32997__$1;
(statearr_33000_33019[(1)] = (8));

} else {
var statearr_33001_33020 = state_32997__$1;
(statearr_33001_33020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (1))){
var inst_32974 = (0);
var state_32997__$1 = (function (){var statearr_33002 = state_32997;
(statearr_33002[(8)] = inst_32974);

return statearr_33002;
})();
var statearr_33003_33021 = state_32997__$1;
(statearr_33003_33021[(2)] = null);

(statearr_33003_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (4))){
var state_32997__$1 = state_32997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32997__$1,(7),ch);
} else {
if((state_val_32998 === (6))){
var inst_32992 = (state_32997[(2)]);
var state_32997__$1 = state_32997;
var statearr_33004_33022 = state_32997__$1;
(statearr_33004_33022[(2)] = inst_32992);

(statearr_33004_33022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (3))){
var inst_32994 = (state_32997[(2)]);
var inst_32995 = cljs.core.async.close_BANG_.call(null,out);
var state_32997__$1 = (function (){var statearr_33005 = state_32997;
(statearr_33005[(9)] = inst_32994);

return statearr_33005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32997__$1,inst_32995);
} else {
if((state_val_32998 === (2))){
var inst_32974 = (state_32997[(8)]);
var inst_32976 = (inst_32974 < n);
var state_32997__$1 = state_32997;
if(cljs.core.truth_(inst_32976)){
var statearr_33006_33023 = state_32997__$1;
(statearr_33006_33023[(1)] = (4));

} else {
var statearr_33007_33024 = state_32997__$1;
(statearr_33007_33024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (11))){
var inst_32974 = (state_32997[(8)]);
var inst_32984 = (state_32997[(2)]);
var inst_32985 = (inst_32974 + (1));
var inst_32974__$1 = inst_32985;
var state_32997__$1 = (function (){var statearr_33008 = state_32997;
(statearr_33008[(10)] = inst_32984);

(statearr_33008[(8)] = inst_32974__$1);

return statearr_33008;
})();
var statearr_33009_33025 = state_32997__$1;
(statearr_33009_33025[(2)] = null);

(statearr_33009_33025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (9))){
var state_32997__$1 = state_32997;
var statearr_33010_33026 = state_32997__$1;
(statearr_33010_33026[(2)] = null);

(statearr_33010_33026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (5))){
var state_32997__$1 = state_32997;
var statearr_33011_33027 = state_32997__$1;
(statearr_33011_33027[(2)] = null);

(statearr_33011_33027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (10))){
var inst_32989 = (state_32997[(2)]);
var state_32997__$1 = state_32997;
var statearr_33012_33028 = state_32997__$1;
(statearr_33012_33028[(2)] = inst_32989);

(statearr_33012_33028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32998 === (8))){
var inst_32979 = (state_32997[(7)]);
var state_32997__$1 = state_32997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32997__$1,(11),out,inst_32979);
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
});})(c__31547__auto___33018,out))
;
return ((function (switch__31452__auto__,c__31547__auto___33018,out){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_33013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33013[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_33013[(1)] = (1));

return statearr_33013;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_32997){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_32997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e33014){if((e33014 instanceof Object)){
var ex__31456__auto__ = e33014;
var statearr_33015_33029 = state_32997;
(statearr_33015_33029[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33030 = state_32997;
state_32997 = G__33030;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_32997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_32997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___33018,out))
})();
var state__31549__auto__ = (function (){var statearr_33016 = f__31548__auto__.call(null);
(statearr_33016[(6)] = c__31547__auto___33018);

return statearr_33016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33018,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33032 = (function (f,ch,meta33033){
this.f = f;
this.ch = ch;
this.meta33033 = meta33033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33034,meta33033__$1){
var self__ = this;
var _33034__$1 = this;
return (new cljs.core.async.t_cljs$core$async33032(self__.f,self__.ch,meta33033__$1));
});

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33034){
var self__ = this;
var _33034__$1 = this;
return self__.meta33033;
});

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33035 = (function (f,ch,meta33033,_,fn1,meta33036){
this.f = f;
this.ch = ch;
this.meta33033 = meta33033;
this._ = _;
this.fn1 = fn1;
this.meta33036 = meta33036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33037,meta33036__$1){
var self__ = this;
var _33037__$1 = this;
return (new cljs.core.async.t_cljs$core$async33035(self__.f,self__.ch,self__.meta33033,self__._,self__.fn1,meta33036__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33037){
var self__ = this;
var _33037__$1 = this;
return self__.meta33036;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33031_SHARP_){
return f1.call(null,(((p1__33031_SHARP_ == null))?null:self__.f.call(null,p1__33031_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33035.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33033","meta33033",248996423,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33032","cljs.core.async/t_cljs$core$async33032",-1344144917,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33036","meta33036",1882457919,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33035";

cljs.core.async.t_cljs$core$async33035.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33035");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33035.
 */
cljs.core.async.__GT_t_cljs$core$async33035 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33035(f__$1,ch__$1,meta33033__$1,___$2,fn1__$1,meta33036){
return (new cljs.core.async.t_cljs$core$async33035(f__$1,ch__$1,meta33033__$1,___$2,fn1__$1,meta33036));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33035(self__.f,self__.ch,self__.meta33033,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33033","meta33033",248996423,null)], null);
});

cljs.core.async.t_cljs$core$async33032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33032";

cljs.core.async.t_cljs$core$async33032.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33032");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33032.
 */
cljs.core.async.__GT_t_cljs$core$async33032 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33032(f__$1,ch__$1,meta33033){
return (new cljs.core.async.t_cljs$core$async33032(f__$1,ch__$1,meta33033));
});

}

return (new cljs.core.async.t_cljs$core$async33032(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33038 = (function (f,ch,meta33039){
this.f = f;
this.ch = ch;
this.meta33039 = meta33039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33040,meta33039__$1){
var self__ = this;
var _33040__$1 = this;
return (new cljs.core.async.t_cljs$core$async33038(self__.f,self__.ch,meta33039__$1));
});

cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33040){
var self__ = this;
var _33040__$1 = this;
return self__.meta33039;
});

cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33039","meta33039",78114159,null)], null);
});

cljs.core.async.t_cljs$core$async33038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33038";

cljs.core.async.t_cljs$core$async33038.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33038");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33038.
 */
cljs.core.async.__GT_t_cljs$core$async33038 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33038(f__$1,ch__$1,meta33039){
return (new cljs.core.async.t_cljs$core$async33038(f__$1,ch__$1,meta33039));
});

}

return (new cljs.core.async.t_cljs$core$async33038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33041 = (function (p,ch,meta33042){
this.p = p;
this.ch = ch;
this.meta33042 = meta33042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33043,meta33042__$1){
var self__ = this;
var _33043__$1 = this;
return (new cljs.core.async.t_cljs$core$async33041(self__.p,self__.ch,meta33042__$1));
});

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33043){
var self__ = this;
var _33043__$1 = this;
return self__.meta33042;
});

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33042","meta33042",-1778661037,null)], null);
});

cljs.core.async.t_cljs$core$async33041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33041";

cljs.core.async.t_cljs$core$async33041.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33041");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33041.
 */
cljs.core.async.__GT_t_cljs$core$async33041 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33041(p__$1,ch__$1,meta33042){
return (new cljs.core.async.t_cljs$core$async33041(p__$1,ch__$1,meta33042));
});

}

return (new cljs.core.async.t_cljs$core$async33041(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33045 = arguments.length;
switch (G__33045) {
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
var c__31547__auto___33085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33085,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___33085,out){
return (function (state_33066){
var state_val_33067 = (state_33066[(1)]);
if((state_val_33067 === (7))){
var inst_33062 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
var statearr_33068_33086 = state_33066__$1;
(statearr_33068_33086[(2)] = inst_33062);

(statearr_33068_33086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (1))){
var state_33066__$1 = state_33066;
var statearr_33069_33087 = state_33066__$1;
(statearr_33069_33087[(2)] = null);

(statearr_33069_33087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (4))){
var inst_33048 = (state_33066[(7)]);
var inst_33048__$1 = (state_33066[(2)]);
var inst_33049 = (inst_33048__$1 == null);
var state_33066__$1 = (function (){var statearr_33070 = state_33066;
(statearr_33070[(7)] = inst_33048__$1);

return statearr_33070;
})();
if(cljs.core.truth_(inst_33049)){
var statearr_33071_33088 = state_33066__$1;
(statearr_33071_33088[(1)] = (5));

} else {
var statearr_33072_33089 = state_33066__$1;
(statearr_33072_33089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (6))){
var inst_33048 = (state_33066[(7)]);
var inst_33053 = p.call(null,inst_33048);
var state_33066__$1 = state_33066;
if(cljs.core.truth_(inst_33053)){
var statearr_33073_33090 = state_33066__$1;
(statearr_33073_33090[(1)] = (8));

} else {
var statearr_33074_33091 = state_33066__$1;
(statearr_33074_33091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (3))){
var inst_33064 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33066__$1,inst_33064);
} else {
if((state_val_33067 === (2))){
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33066__$1,(4),ch);
} else {
if((state_val_33067 === (11))){
var inst_33056 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
var statearr_33075_33092 = state_33066__$1;
(statearr_33075_33092[(2)] = inst_33056);

(statearr_33075_33092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (9))){
var state_33066__$1 = state_33066;
var statearr_33076_33093 = state_33066__$1;
(statearr_33076_33093[(2)] = null);

(statearr_33076_33093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (5))){
var inst_33051 = cljs.core.async.close_BANG_.call(null,out);
var state_33066__$1 = state_33066;
var statearr_33077_33094 = state_33066__$1;
(statearr_33077_33094[(2)] = inst_33051);

(statearr_33077_33094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (10))){
var inst_33059 = (state_33066[(2)]);
var state_33066__$1 = (function (){var statearr_33078 = state_33066;
(statearr_33078[(8)] = inst_33059);

return statearr_33078;
})();
var statearr_33079_33095 = state_33066__$1;
(statearr_33079_33095[(2)] = null);

(statearr_33079_33095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (8))){
var inst_33048 = (state_33066[(7)]);
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33066__$1,(11),out,inst_33048);
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
});})(c__31547__auto___33085,out))
;
return ((function (switch__31452__auto__,c__31547__auto___33085,out){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null,null,null];
(statearr_33080[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_33066){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_33066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e33081){if((e33081 instanceof Object)){
var ex__31456__auto__ = e33081;
var statearr_33082_33096 = state_33066;
(statearr_33082_33096[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33097 = state_33066;
state_33066 = G__33097;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_33066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_33066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___33085,out))
})();
var state__31549__auto__ = (function (){var statearr_33083 = f__31548__auto__.call(null);
(statearr_33083[(6)] = c__31547__auto___33085);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33085,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33099 = arguments.length;
switch (G__33099) {
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
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto__){
return (function (state_33162){
var state_val_33163 = (state_33162[(1)]);
if((state_val_33163 === (7))){
var inst_33158 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33164_33202 = state_33162__$1;
(statearr_33164_33202[(2)] = inst_33158);

(statearr_33164_33202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (20))){
var inst_33128 = (state_33162[(7)]);
var inst_33139 = (state_33162[(2)]);
var inst_33140 = cljs.core.next.call(null,inst_33128);
var inst_33114 = inst_33140;
var inst_33115 = null;
var inst_33116 = (0);
var inst_33117 = (0);
var state_33162__$1 = (function (){var statearr_33165 = state_33162;
(statearr_33165[(8)] = inst_33117);

(statearr_33165[(9)] = inst_33114);

(statearr_33165[(10)] = inst_33115);

(statearr_33165[(11)] = inst_33139);

(statearr_33165[(12)] = inst_33116);

return statearr_33165;
})();
var statearr_33166_33203 = state_33162__$1;
(statearr_33166_33203[(2)] = null);

(statearr_33166_33203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (1))){
var state_33162__$1 = state_33162;
var statearr_33167_33204 = state_33162__$1;
(statearr_33167_33204[(2)] = null);

(statearr_33167_33204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (4))){
var inst_33103 = (state_33162[(13)]);
var inst_33103__$1 = (state_33162[(2)]);
var inst_33104 = (inst_33103__$1 == null);
var state_33162__$1 = (function (){var statearr_33168 = state_33162;
(statearr_33168[(13)] = inst_33103__$1);

return statearr_33168;
})();
if(cljs.core.truth_(inst_33104)){
var statearr_33169_33205 = state_33162__$1;
(statearr_33169_33205[(1)] = (5));

} else {
var statearr_33170_33206 = state_33162__$1;
(statearr_33170_33206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (15))){
var state_33162__$1 = state_33162;
var statearr_33174_33207 = state_33162__$1;
(statearr_33174_33207[(2)] = null);

(statearr_33174_33207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (21))){
var state_33162__$1 = state_33162;
var statearr_33175_33208 = state_33162__$1;
(statearr_33175_33208[(2)] = null);

(statearr_33175_33208[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (13))){
var inst_33117 = (state_33162[(8)]);
var inst_33114 = (state_33162[(9)]);
var inst_33115 = (state_33162[(10)]);
var inst_33116 = (state_33162[(12)]);
var inst_33124 = (state_33162[(2)]);
var inst_33125 = (inst_33117 + (1));
var tmp33171 = inst_33114;
var tmp33172 = inst_33115;
var tmp33173 = inst_33116;
var inst_33114__$1 = tmp33171;
var inst_33115__$1 = tmp33172;
var inst_33116__$1 = tmp33173;
var inst_33117__$1 = inst_33125;
var state_33162__$1 = (function (){var statearr_33176 = state_33162;
(statearr_33176[(8)] = inst_33117__$1);

(statearr_33176[(9)] = inst_33114__$1);

(statearr_33176[(14)] = inst_33124);

(statearr_33176[(10)] = inst_33115__$1);

(statearr_33176[(12)] = inst_33116__$1);

return statearr_33176;
})();
var statearr_33177_33209 = state_33162__$1;
(statearr_33177_33209[(2)] = null);

(statearr_33177_33209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (22))){
var state_33162__$1 = state_33162;
var statearr_33178_33210 = state_33162__$1;
(statearr_33178_33210[(2)] = null);

(statearr_33178_33210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (6))){
var inst_33103 = (state_33162[(13)]);
var inst_33112 = f.call(null,inst_33103);
var inst_33113 = cljs.core.seq.call(null,inst_33112);
var inst_33114 = inst_33113;
var inst_33115 = null;
var inst_33116 = (0);
var inst_33117 = (0);
var state_33162__$1 = (function (){var statearr_33179 = state_33162;
(statearr_33179[(8)] = inst_33117);

(statearr_33179[(9)] = inst_33114);

(statearr_33179[(10)] = inst_33115);

(statearr_33179[(12)] = inst_33116);

return statearr_33179;
})();
var statearr_33180_33211 = state_33162__$1;
(statearr_33180_33211[(2)] = null);

(statearr_33180_33211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (17))){
var inst_33128 = (state_33162[(7)]);
var inst_33132 = cljs.core.chunk_first.call(null,inst_33128);
var inst_33133 = cljs.core.chunk_rest.call(null,inst_33128);
var inst_33134 = cljs.core.count.call(null,inst_33132);
var inst_33114 = inst_33133;
var inst_33115 = inst_33132;
var inst_33116 = inst_33134;
var inst_33117 = (0);
var state_33162__$1 = (function (){var statearr_33181 = state_33162;
(statearr_33181[(8)] = inst_33117);

(statearr_33181[(9)] = inst_33114);

(statearr_33181[(10)] = inst_33115);

(statearr_33181[(12)] = inst_33116);

return statearr_33181;
})();
var statearr_33182_33212 = state_33162__$1;
(statearr_33182_33212[(2)] = null);

(statearr_33182_33212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (3))){
var inst_33160 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33162__$1,inst_33160);
} else {
if((state_val_33163 === (12))){
var inst_33148 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33183_33213 = state_33162__$1;
(statearr_33183_33213[(2)] = inst_33148);

(statearr_33183_33213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (2))){
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33162__$1,(4),in$);
} else {
if((state_val_33163 === (23))){
var inst_33156 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33184_33214 = state_33162__$1;
(statearr_33184_33214[(2)] = inst_33156);

(statearr_33184_33214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (19))){
var inst_33143 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33185_33215 = state_33162__$1;
(statearr_33185_33215[(2)] = inst_33143);

(statearr_33185_33215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (11))){
var inst_33114 = (state_33162[(9)]);
var inst_33128 = (state_33162[(7)]);
var inst_33128__$1 = cljs.core.seq.call(null,inst_33114);
var state_33162__$1 = (function (){var statearr_33186 = state_33162;
(statearr_33186[(7)] = inst_33128__$1);

return statearr_33186;
})();
if(inst_33128__$1){
var statearr_33187_33216 = state_33162__$1;
(statearr_33187_33216[(1)] = (14));

} else {
var statearr_33188_33217 = state_33162__$1;
(statearr_33188_33217[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (9))){
var inst_33150 = (state_33162[(2)]);
var inst_33151 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33162__$1 = (function (){var statearr_33189 = state_33162;
(statearr_33189[(15)] = inst_33150);

return statearr_33189;
})();
if(cljs.core.truth_(inst_33151)){
var statearr_33190_33218 = state_33162__$1;
(statearr_33190_33218[(1)] = (21));

} else {
var statearr_33191_33219 = state_33162__$1;
(statearr_33191_33219[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (5))){
var inst_33106 = cljs.core.async.close_BANG_.call(null,out);
var state_33162__$1 = state_33162;
var statearr_33192_33220 = state_33162__$1;
(statearr_33192_33220[(2)] = inst_33106);

(statearr_33192_33220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (14))){
var inst_33128 = (state_33162[(7)]);
var inst_33130 = cljs.core.chunked_seq_QMARK_.call(null,inst_33128);
var state_33162__$1 = state_33162;
if(inst_33130){
var statearr_33193_33221 = state_33162__$1;
(statearr_33193_33221[(1)] = (17));

} else {
var statearr_33194_33222 = state_33162__$1;
(statearr_33194_33222[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (16))){
var inst_33146 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33195_33223 = state_33162__$1;
(statearr_33195_33223[(2)] = inst_33146);

(statearr_33195_33223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (10))){
var inst_33117 = (state_33162[(8)]);
var inst_33115 = (state_33162[(10)]);
var inst_33122 = cljs.core._nth.call(null,inst_33115,inst_33117);
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33162__$1,(13),out,inst_33122);
} else {
if((state_val_33163 === (18))){
var inst_33128 = (state_33162[(7)]);
var inst_33137 = cljs.core.first.call(null,inst_33128);
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33162__$1,(20),out,inst_33137);
} else {
if((state_val_33163 === (8))){
var inst_33117 = (state_33162[(8)]);
var inst_33116 = (state_33162[(12)]);
var inst_33119 = (inst_33117 < inst_33116);
var inst_33120 = inst_33119;
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33120)){
var statearr_33196_33224 = state_33162__$1;
(statearr_33196_33224[(1)] = (10));

} else {
var statearr_33197_33225 = state_33162__$1;
(statearr_33197_33225[(1)] = (11));

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
});})(c__31547__auto__))
;
return ((function (switch__31452__auto__,c__31547__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31453__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31453__auto____0 = (function (){
var statearr_33198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33198[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31453__auto__);

(statearr_33198[(1)] = (1));

return statearr_33198;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31453__auto____1 = (function (state_33162){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_33162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e33199){if((e33199 instanceof Object)){
var ex__31456__auto__ = e33199;
var statearr_33200_33226 = state_33162;
(statearr_33200_33226[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33227 = state_33162;
state_33162 = G__33227;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31453__auto__ = function(state_33162){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31453__auto____1.call(this,state_33162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31453__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31453__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_33201 = f__31548__auto__.call(null);
(statearr_33201[(6)] = c__31547__auto__);

return statearr_33201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33229 = arguments.length;
switch (G__33229) {
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
var G__33232 = arguments.length;
switch (G__33232) {
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
var G__33235 = arguments.length;
switch (G__33235) {
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
var c__31547__auto___33282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33282,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___33282,out){
return (function (state_33259){
var state_val_33260 = (state_33259[(1)]);
if((state_val_33260 === (7))){
var inst_33254 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
var statearr_33261_33283 = state_33259__$1;
(statearr_33261_33283[(2)] = inst_33254);

(statearr_33261_33283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (1))){
var inst_33236 = null;
var state_33259__$1 = (function (){var statearr_33262 = state_33259;
(statearr_33262[(7)] = inst_33236);

return statearr_33262;
})();
var statearr_33263_33284 = state_33259__$1;
(statearr_33263_33284[(2)] = null);

(statearr_33263_33284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (4))){
var inst_33239 = (state_33259[(8)]);
var inst_33239__$1 = (state_33259[(2)]);
var inst_33240 = (inst_33239__$1 == null);
var inst_33241 = cljs.core.not.call(null,inst_33240);
var state_33259__$1 = (function (){var statearr_33264 = state_33259;
(statearr_33264[(8)] = inst_33239__$1);

return statearr_33264;
})();
if(inst_33241){
var statearr_33265_33285 = state_33259__$1;
(statearr_33265_33285[(1)] = (5));

} else {
var statearr_33266_33286 = state_33259__$1;
(statearr_33266_33286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (6))){
var state_33259__$1 = state_33259;
var statearr_33267_33287 = state_33259__$1;
(statearr_33267_33287[(2)] = null);

(statearr_33267_33287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (3))){
var inst_33256 = (state_33259[(2)]);
var inst_33257 = cljs.core.async.close_BANG_.call(null,out);
var state_33259__$1 = (function (){var statearr_33268 = state_33259;
(statearr_33268[(9)] = inst_33256);

return statearr_33268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33259__$1,inst_33257);
} else {
if((state_val_33260 === (2))){
var state_33259__$1 = state_33259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33259__$1,(4),ch);
} else {
if((state_val_33260 === (11))){
var inst_33239 = (state_33259[(8)]);
var inst_33248 = (state_33259[(2)]);
var inst_33236 = inst_33239;
var state_33259__$1 = (function (){var statearr_33269 = state_33259;
(statearr_33269[(7)] = inst_33236);

(statearr_33269[(10)] = inst_33248);

return statearr_33269;
})();
var statearr_33270_33288 = state_33259__$1;
(statearr_33270_33288[(2)] = null);

(statearr_33270_33288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (9))){
var inst_33239 = (state_33259[(8)]);
var state_33259__$1 = state_33259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33259__$1,(11),out,inst_33239);
} else {
if((state_val_33260 === (5))){
var inst_33236 = (state_33259[(7)]);
var inst_33239 = (state_33259[(8)]);
var inst_33243 = cljs.core._EQ_.call(null,inst_33239,inst_33236);
var state_33259__$1 = state_33259;
if(inst_33243){
var statearr_33272_33289 = state_33259__$1;
(statearr_33272_33289[(1)] = (8));

} else {
var statearr_33273_33290 = state_33259__$1;
(statearr_33273_33290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (10))){
var inst_33251 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
var statearr_33274_33291 = state_33259__$1;
(statearr_33274_33291[(2)] = inst_33251);

(statearr_33274_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (8))){
var inst_33236 = (state_33259[(7)]);
var tmp33271 = inst_33236;
var inst_33236__$1 = tmp33271;
var state_33259__$1 = (function (){var statearr_33275 = state_33259;
(statearr_33275[(7)] = inst_33236__$1);

return statearr_33275;
})();
var statearr_33276_33292 = state_33259__$1;
(statearr_33276_33292[(2)] = null);

(statearr_33276_33292[(1)] = (2));


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
});})(c__31547__auto___33282,out))
;
return ((function (switch__31452__auto__,c__31547__auto___33282,out){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_33277 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33277[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_33277[(1)] = (1));

return statearr_33277;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_33259){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_33259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e33278){if((e33278 instanceof Object)){
var ex__31456__auto__ = e33278;
var statearr_33279_33293 = state_33259;
(statearr_33279_33293[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33294 = state_33259;
state_33259 = G__33294;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_33259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_33259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___33282,out))
})();
var state__31549__auto__ = (function (){var statearr_33280 = f__31548__auto__.call(null);
(statearr_33280[(6)] = c__31547__auto___33282);

return statearr_33280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33282,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33296 = arguments.length;
switch (G__33296) {
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
var c__31547__auto___33362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33362,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___33362,out){
return (function (state_33334){
var state_val_33335 = (state_33334[(1)]);
if((state_val_33335 === (7))){
var inst_33330 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
var statearr_33336_33363 = state_33334__$1;
(statearr_33336_33363[(2)] = inst_33330);

(statearr_33336_33363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (1))){
var inst_33297 = (new Array(n));
var inst_33298 = inst_33297;
var inst_33299 = (0);
var state_33334__$1 = (function (){var statearr_33337 = state_33334;
(statearr_33337[(7)] = inst_33298);

(statearr_33337[(8)] = inst_33299);

return statearr_33337;
})();
var statearr_33338_33364 = state_33334__$1;
(statearr_33338_33364[(2)] = null);

(statearr_33338_33364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (4))){
var inst_33302 = (state_33334[(9)]);
var inst_33302__$1 = (state_33334[(2)]);
var inst_33303 = (inst_33302__$1 == null);
var inst_33304 = cljs.core.not.call(null,inst_33303);
var state_33334__$1 = (function (){var statearr_33339 = state_33334;
(statearr_33339[(9)] = inst_33302__$1);

return statearr_33339;
})();
if(inst_33304){
var statearr_33340_33365 = state_33334__$1;
(statearr_33340_33365[(1)] = (5));

} else {
var statearr_33341_33366 = state_33334__$1;
(statearr_33341_33366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (15))){
var inst_33324 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
var statearr_33342_33367 = state_33334__$1;
(statearr_33342_33367[(2)] = inst_33324);

(statearr_33342_33367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (13))){
var state_33334__$1 = state_33334;
var statearr_33343_33368 = state_33334__$1;
(statearr_33343_33368[(2)] = null);

(statearr_33343_33368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (6))){
var inst_33299 = (state_33334[(8)]);
var inst_33320 = (inst_33299 > (0));
var state_33334__$1 = state_33334;
if(cljs.core.truth_(inst_33320)){
var statearr_33344_33369 = state_33334__$1;
(statearr_33344_33369[(1)] = (12));

} else {
var statearr_33345_33370 = state_33334__$1;
(statearr_33345_33370[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (3))){
var inst_33332 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33334__$1,inst_33332);
} else {
if((state_val_33335 === (12))){
var inst_33298 = (state_33334[(7)]);
var inst_33322 = cljs.core.vec.call(null,inst_33298);
var state_33334__$1 = state_33334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33334__$1,(15),out,inst_33322);
} else {
if((state_val_33335 === (2))){
var state_33334__$1 = state_33334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33334__$1,(4),ch);
} else {
if((state_val_33335 === (11))){
var inst_33314 = (state_33334[(2)]);
var inst_33315 = (new Array(n));
var inst_33298 = inst_33315;
var inst_33299 = (0);
var state_33334__$1 = (function (){var statearr_33346 = state_33334;
(statearr_33346[(7)] = inst_33298);

(statearr_33346[(8)] = inst_33299);

(statearr_33346[(10)] = inst_33314);

return statearr_33346;
})();
var statearr_33347_33371 = state_33334__$1;
(statearr_33347_33371[(2)] = null);

(statearr_33347_33371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (9))){
var inst_33298 = (state_33334[(7)]);
var inst_33312 = cljs.core.vec.call(null,inst_33298);
var state_33334__$1 = state_33334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33334__$1,(11),out,inst_33312);
} else {
if((state_val_33335 === (5))){
var inst_33298 = (state_33334[(7)]);
var inst_33302 = (state_33334[(9)]);
var inst_33299 = (state_33334[(8)]);
var inst_33307 = (state_33334[(11)]);
var inst_33306 = (inst_33298[inst_33299] = inst_33302);
var inst_33307__$1 = (inst_33299 + (1));
var inst_33308 = (inst_33307__$1 < n);
var state_33334__$1 = (function (){var statearr_33348 = state_33334;
(statearr_33348[(12)] = inst_33306);

(statearr_33348[(11)] = inst_33307__$1);

return statearr_33348;
})();
if(cljs.core.truth_(inst_33308)){
var statearr_33349_33372 = state_33334__$1;
(statearr_33349_33372[(1)] = (8));

} else {
var statearr_33350_33373 = state_33334__$1;
(statearr_33350_33373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (14))){
var inst_33327 = (state_33334[(2)]);
var inst_33328 = cljs.core.async.close_BANG_.call(null,out);
var state_33334__$1 = (function (){var statearr_33352 = state_33334;
(statearr_33352[(13)] = inst_33327);

return statearr_33352;
})();
var statearr_33353_33374 = state_33334__$1;
(statearr_33353_33374[(2)] = inst_33328);

(statearr_33353_33374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (10))){
var inst_33318 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
var statearr_33354_33375 = state_33334__$1;
(statearr_33354_33375[(2)] = inst_33318);

(statearr_33354_33375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (8))){
var inst_33298 = (state_33334[(7)]);
var inst_33307 = (state_33334[(11)]);
var tmp33351 = inst_33298;
var inst_33298__$1 = tmp33351;
var inst_33299 = inst_33307;
var state_33334__$1 = (function (){var statearr_33355 = state_33334;
(statearr_33355[(7)] = inst_33298__$1);

(statearr_33355[(8)] = inst_33299);

return statearr_33355;
})();
var statearr_33356_33376 = state_33334__$1;
(statearr_33356_33376[(2)] = null);

(statearr_33356_33376[(1)] = (2));


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
});})(c__31547__auto___33362,out))
;
return ((function (switch__31452__auto__,c__31547__auto___33362,out){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_33357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33357[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_33357[(1)] = (1));

return statearr_33357;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_33334){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_33334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e33358){if((e33358 instanceof Object)){
var ex__31456__auto__ = e33358;
var statearr_33359_33377 = state_33334;
(statearr_33359_33377[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33378 = state_33334;
state_33334 = G__33378;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_33334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_33334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___33362,out))
})();
var state__31549__auto__ = (function (){var statearr_33360 = f__31548__auto__.call(null);
(statearr_33360[(6)] = c__31547__auto___33362);

return statearr_33360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33362,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33380 = arguments.length;
switch (G__33380) {
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
var c__31547__auto___33450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33450,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (c__31547__auto___33450,out){
return (function (state_33422){
var state_val_33423 = (state_33422[(1)]);
if((state_val_33423 === (7))){
var inst_33418 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
var statearr_33424_33451 = state_33422__$1;
(statearr_33424_33451[(2)] = inst_33418);

(statearr_33424_33451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (1))){
var inst_33381 = [];
var inst_33382 = inst_33381;
var inst_33383 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33422__$1 = (function (){var statearr_33425 = state_33422;
(statearr_33425[(7)] = inst_33383);

(statearr_33425[(8)] = inst_33382);

return statearr_33425;
})();
var statearr_33426_33452 = state_33422__$1;
(statearr_33426_33452[(2)] = null);

(statearr_33426_33452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (4))){
var inst_33386 = (state_33422[(9)]);
var inst_33386__$1 = (state_33422[(2)]);
var inst_33387 = (inst_33386__$1 == null);
var inst_33388 = cljs.core.not.call(null,inst_33387);
var state_33422__$1 = (function (){var statearr_33427 = state_33422;
(statearr_33427[(9)] = inst_33386__$1);

return statearr_33427;
})();
if(inst_33388){
var statearr_33428_33453 = state_33422__$1;
(statearr_33428_33453[(1)] = (5));

} else {
var statearr_33429_33454 = state_33422__$1;
(statearr_33429_33454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (15))){
var inst_33412 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
var statearr_33430_33455 = state_33422__$1;
(statearr_33430_33455[(2)] = inst_33412);

(statearr_33430_33455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (13))){
var state_33422__$1 = state_33422;
var statearr_33431_33456 = state_33422__$1;
(statearr_33431_33456[(2)] = null);

(statearr_33431_33456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (6))){
var inst_33382 = (state_33422[(8)]);
var inst_33407 = inst_33382.length;
var inst_33408 = (inst_33407 > (0));
var state_33422__$1 = state_33422;
if(cljs.core.truth_(inst_33408)){
var statearr_33432_33457 = state_33422__$1;
(statearr_33432_33457[(1)] = (12));

} else {
var statearr_33433_33458 = state_33422__$1;
(statearr_33433_33458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (3))){
var inst_33420 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33422__$1,inst_33420);
} else {
if((state_val_33423 === (12))){
var inst_33382 = (state_33422[(8)]);
var inst_33410 = cljs.core.vec.call(null,inst_33382);
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33422__$1,(15),out,inst_33410);
} else {
if((state_val_33423 === (2))){
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33422__$1,(4),ch);
} else {
if((state_val_33423 === (11))){
var inst_33386 = (state_33422[(9)]);
var inst_33390 = (state_33422[(10)]);
var inst_33400 = (state_33422[(2)]);
var inst_33401 = [];
var inst_33402 = inst_33401.push(inst_33386);
var inst_33382 = inst_33401;
var inst_33383 = inst_33390;
var state_33422__$1 = (function (){var statearr_33434 = state_33422;
(statearr_33434[(7)] = inst_33383);

(statearr_33434[(11)] = inst_33402);

(statearr_33434[(12)] = inst_33400);

(statearr_33434[(8)] = inst_33382);

return statearr_33434;
})();
var statearr_33435_33459 = state_33422__$1;
(statearr_33435_33459[(2)] = null);

(statearr_33435_33459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (9))){
var inst_33382 = (state_33422[(8)]);
var inst_33398 = cljs.core.vec.call(null,inst_33382);
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33422__$1,(11),out,inst_33398);
} else {
if((state_val_33423 === (5))){
var inst_33386 = (state_33422[(9)]);
var inst_33383 = (state_33422[(7)]);
var inst_33390 = (state_33422[(10)]);
var inst_33390__$1 = f.call(null,inst_33386);
var inst_33391 = cljs.core._EQ_.call(null,inst_33390__$1,inst_33383);
var inst_33392 = cljs.core.keyword_identical_QMARK_.call(null,inst_33383,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33393 = ((inst_33391) || (inst_33392));
var state_33422__$1 = (function (){var statearr_33436 = state_33422;
(statearr_33436[(10)] = inst_33390__$1);

return statearr_33436;
})();
if(cljs.core.truth_(inst_33393)){
var statearr_33437_33460 = state_33422__$1;
(statearr_33437_33460[(1)] = (8));

} else {
var statearr_33438_33461 = state_33422__$1;
(statearr_33438_33461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (14))){
var inst_33415 = (state_33422[(2)]);
var inst_33416 = cljs.core.async.close_BANG_.call(null,out);
var state_33422__$1 = (function (){var statearr_33440 = state_33422;
(statearr_33440[(13)] = inst_33415);

return statearr_33440;
})();
var statearr_33441_33462 = state_33422__$1;
(statearr_33441_33462[(2)] = inst_33416);

(statearr_33441_33462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (10))){
var inst_33405 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
var statearr_33442_33463 = state_33422__$1;
(statearr_33442_33463[(2)] = inst_33405);

(statearr_33442_33463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (8))){
var inst_33386 = (state_33422[(9)]);
var inst_33390 = (state_33422[(10)]);
var inst_33382 = (state_33422[(8)]);
var inst_33395 = inst_33382.push(inst_33386);
var tmp33439 = inst_33382;
var inst_33382__$1 = tmp33439;
var inst_33383 = inst_33390;
var state_33422__$1 = (function (){var statearr_33443 = state_33422;
(statearr_33443[(7)] = inst_33383);

(statearr_33443[(14)] = inst_33395);

(statearr_33443[(8)] = inst_33382__$1);

return statearr_33443;
})();
var statearr_33444_33464 = state_33422__$1;
(statearr_33444_33464[(2)] = null);

(statearr_33444_33464[(1)] = (2));


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
});})(c__31547__auto___33450,out))
;
return ((function (switch__31452__auto__,c__31547__auto___33450,out){
return (function() {
var cljs$core$async$state_machine__31453__auto__ = null;
var cljs$core$async$state_machine__31453__auto____0 = (function (){
var statearr_33445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33445[(0)] = cljs$core$async$state_machine__31453__auto__);

(statearr_33445[(1)] = (1));

return statearr_33445;
});
var cljs$core$async$state_machine__31453__auto____1 = (function (state_33422){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_33422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e33446){if((e33446 instanceof Object)){
var ex__31456__auto__ = e33446;
var statearr_33447_33465 = state_33422;
(statearr_33447_33465[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33466 = state_33422;
state_33422 = G__33466;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
cljs$core$async$state_machine__31453__auto__ = function(state_33422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31453__auto____1.call(this,state_33422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31453__auto____0;
cljs$core$async$state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31453__auto____1;
return cljs$core$async$state_machine__31453__auto__;
})()
;})(switch__31452__auto__,c__31547__auto___33450,out))
})();
var state__31549__auto__ = (function (){var statearr_33448 = f__31548__auto__.call(null);
(statearr_33448[(6)] = c__31547__auto___33450);

return statearr_33448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33450,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1601307461366
