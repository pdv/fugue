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
var G__23630 = arguments.length;
switch (G__23630) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23631 = (function (f,blockable,meta23632){
this.f = f;
this.blockable = blockable;
this.meta23632 = meta23632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23633,meta23632__$1){
var self__ = this;
var _23633__$1 = this;
return (new cljs.core.async.t_cljs$core$async23631(self__.f,self__.blockable,meta23632__$1));
});

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23633){
var self__ = this;
var _23633__$1 = this;
return self__.meta23632;
});

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23632","meta23632",-1773143218,null)], null);
});

cljs.core.async.t_cljs$core$async23631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23631";

cljs.core.async.t_cljs$core$async23631.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23631");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23631.
 */
cljs.core.async.__GT_t_cljs$core$async23631 = (function cljs$core$async$__GT_t_cljs$core$async23631(f__$1,blockable__$1,meta23632){
return (new cljs.core.async.t_cljs$core$async23631(f__$1,blockable__$1,meta23632));
});

}

return (new cljs.core.async.t_cljs$core$async23631(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23637 = arguments.length;
switch (G__23637) {
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
var G__23640 = arguments.length;
switch (G__23640) {
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
var G__23643 = arguments.length;
switch (G__23643) {
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
var val_23645 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23645);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23645,ret){
return (function (){
return fn1.call(null,val_23645);
});})(val_23645,ret))
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
var G__23647 = arguments.length;
switch (G__23647) {
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
var n__4607__auto___23649 = n;
var x_23650 = (0);
while(true){
if((x_23650 < n__4607__auto___23649)){
(a[x_23650] = x_23650);

var G__23651 = (x_23650 + (1));
x_23650 = G__23651;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23652 = (function (flag,meta23653){
this.flag = flag;
this.meta23653 = meta23653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23654,meta23653__$1){
var self__ = this;
var _23654__$1 = this;
return (new cljs.core.async.t_cljs$core$async23652(self__.flag,meta23653__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23654){
var self__ = this;
var _23654__$1 = this;
return self__.meta23653;
});})(flag))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23652.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23653","meta23653",-1780449435,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23652";

cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23652");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23652.
 */
cljs.core.async.__GT_t_cljs$core$async23652 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23652(flag__$1,meta23653){
return (new cljs.core.async.t_cljs$core$async23652(flag__$1,meta23653));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23652(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23655 = (function (flag,cb,meta23656){
this.flag = flag;
this.cb = cb;
this.meta23656 = meta23656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23657,meta23656__$1){
var self__ = this;
var _23657__$1 = this;
return (new cljs.core.async.t_cljs$core$async23655(self__.flag,self__.cb,meta23656__$1));
});

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23657){
var self__ = this;
var _23657__$1 = this;
return self__.meta23656;
});

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23656","meta23656",-1793916832,null)], null);
});

cljs.core.async.t_cljs$core$async23655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23655";

cljs.core.async.t_cljs$core$async23655.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23655");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23655.
 */
cljs.core.async.__GT_t_cljs$core$async23655 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23655(flag__$1,cb__$1,meta23656){
return (new cljs.core.async.t_cljs$core$async23655(flag__$1,cb__$1,meta23656));
});

}

return (new cljs.core.async.t_cljs$core$async23655(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23658_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23658_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23659_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23659_SHARP_,port], null));
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
var G__23660 = (i + (1));
i = G__23660;
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
var len__4730__auto___23666 = arguments.length;
var i__4731__auto___23667 = (0);
while(true){
if((i__4731__auto___23667 < len__4730__auto___23666)){
args__4736__auto__.push((arguments[i__4731__auto___23667]));

var G__23668 = (i__4731__auto___23667 + (1));
i__4731__auto___23667 = G__23668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23663){
var map__23664 = p__23663;
var map__23664__$1 = (((((!((map__23664 == null))))?(((((map__23664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23664):map__23664);
var opts = map__23664__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23661){
var G__23662 = cljs.core.first.call(null,seq23661);
var seq23661__$1 = cljs.core.next.call(null,seq23661);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23662,seq23661__$1);
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
var G__23670 = arguments.length;
switch (G__23670) {
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
var c__23570__auto___23716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___23716){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___23716){
return (function (state_23694){
var state_val_23695 = (state_23694[(1)]);
if((state_val_23695 === (7))){
var inst_23690 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
var statearr_23696_23717 = state_23694__$1;
(statearr_23696_23717[(2)] = inst_23690);

(statearr_23696_23717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (1))){
var state_23694__$1 = state_23694;
var statearr_23697_23718 = state_23694__$1;
(statearr_23697_23718[(2)] = null);

(statearr_23697_23718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (4))){
var inst_23673 = (state_23694[(7)]);
var inst_23673__$1 = (state_23694[(2)]);
var inst_23674 = (inst_23673__$1 == null);
var state_23694__$1 = (function (){var statearr_23698 = state_23694;
(statearr_23698[(7)] = inst_23673__$1);

return statearr_23698;
})();
if(cljs.core.truth_(inst_23674)){
var statearr_23699_23719 = state_23694__$1;
(statearr_23699_23719[(1)] = (5));

} else {
var statearr_23700_23720 = state_23694__$1;
(statearr_23700_23720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (13))){
var state_23694__$1 = state_23694;
var statearr_23701_23721 = state_23694__$1;
(statearr_23701_23721[(2)] = null);

(statearr_23701_23721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (6))){
var inst_23673 = (state_23694[(7)]);
var state_23694__$1 = state_23694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23694__$1,(11),to,inst_23673);
} else {
if((state_val_23695 === (3))){
var inst_23692 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23694__$1,inst_23692);
} else {
if((state_val_23695 === (12))){
var state_23694__$1 = state_23694;
var statearr_23702_23722 = state_23694__$1;
(statearr_23702_23722[(2)] = null);

(statearr_23702_23722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (2))){
var state_23694__$1 = state_23694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23694__$1,(4),from);
} else {
if((state_val_23695 === (11))){
var inst_23683 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
if(cljs.core.truth_(inst_23683)){
var statearr_23703_23723 = state_23694__$1;
(statearr_23703_23723[(1)] = (12));

} else {
var statearr_23704_23724 = state_23694__$1;
(statearr_23704_23724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (9))){
var state_23694__$1 = state_23694;
var statearr_23705_23725 = state_23694__$1;
(statearr_23705_23725[(2)] = null);

(statearr_23705_23725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (5))){
var state_23694__$1 = state_23694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23706_23726 = state_23694__$1;
(statearr_23706_23726[(1)] = (8));

} else {
var statearr_23707_23727 = state_23694__$1;
(statearr_23707_23727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (14))){
var inst_23688 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
var statearr_23708_23728 = state_23694__$1;
(statearr_23708_23728[(2)] = inst_23688);

(statearr_23708_23728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (10))){
var inst_23680 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
var statearr_23709_23729 = state_23694__$1;
(statearr_23709_23729[(2)] = inst_23680);

(statearr_23709_23729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (8))){
var inst_23677 = cljs.core.async.close_BANG_.call(null,to);
var state_23694__$1 = state_23694;
var statearr_23710_23730 = state_23694__$1;
(statearr_23710_23730[(2)] = inst_23677);

(statearr_23710_23730[(1)] = (10));


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
});})(c__23570__auto___23716))
;
return ((function (switch__23475__auto__,c__23570__auto___23716){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_23711 = [null,null,null,null,null,null,null,null];
(statearr_23711[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_23711[(1)] = (1));

return statearr_23711;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_23694){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23712){if((e23712 instanceof Object)){
var ex__23479__auto__ = e23712;
var statearr_23713_23731 = state_23694;
(statearr_23713_23731[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23732 = state_23694;
state_23694 = G__23732;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_23694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_23694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___23716))
})();
var state__23572__auto__ = (function (){var statearr_23714 = f__23571__auto__.call(null);
(statearr_23714[(6)] = c__23570__auto___23716);

return statearr_23714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___23716))
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
return (function (p__23733){
var vec__23734 = p__23733;
var v = cljs.core.nth.call(null,vec__23734,(0),null);
var p = cljs.core.nth.call(null,vec__23734,(1),null);
var job = vec__23734;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23570__auto___23905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___23905,res,vec__23734,v,p,job,jobs,results){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___23905,res,vec__23734,v,p,job,jobs,results){
return (function (state_23741){
var state_val_23742 = (state_23741[(1)]);
if((state_val_23742 === (1))){
var state_23741__$1 = state_23741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23741__$1,(2),res,v);
} else {
if((state_val_23742 === (2))){
var inst_23738 = (state_23741[(2)]);
var inst_23739 = cljs.core.async.close_BANG_.call(null,res);
var state_23741__$1 = (function (){var statearr_23743 = state_23741;
(statearr_23743[(7)] = inst_23738);

return statearr_23743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23741__$1,inst_23739);
} else {
return null;
}
}
});})(c__23570__auto___23905,res,vec__23734,v,p,job,jobs,results))
;
return ((function (switch__23475__auto__,c__23570__auto___23905,res,vec__23734,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23744 = [null,null,null,null,null,null,null,null];
(statearr_23744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23744[(1)] = (1));

return statearr_23744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23741){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23745){if((e23745 instanceof Object)){
var ex__23479__auto__ = e23745;
var statearr_23746_23906 = state_23741;
(statearr_23746_23906[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23907 = state_23741;
state_23741 = G__23907;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___23905,res,vec__23734,v,p,job,jobs,results))
})();
var state__23572__auto__ = (function (){var statearr_23747 = f__23571__auto__.call(null);
(statearr_23747[(6)] = c__23570__auto___23905);

return statearr_23747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___23905,res,vec__23734,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23748){
var vec__23749 = p__23748;
var v = cljs.core.nth.call(null,vec__23749,(0),null);
var p = cljs.core.nth.call(null,vec__23749,(1),null);
var job = vec__23749;
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
var n__4607__auto___23908 = n;
var __23909 = (0);
while(true){
if((__23909 < n__4607__auto___23908)){
var G__23752_23910 = type;
var G__23752_23911__$1 = (((G__23752_23910 instanceof cljs.core.Keyword))?G__23752_23910.fqn:null);
switch (G__23752_23911__$1) {
case "compute":
var c__23570__auto___23913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23909,c__23570__auto___23913,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (__23909,c__23570__auto___23913,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async){
return (function (state_23765){
var state_val_23766 = (state_23765[(1)]);
if((state_val_23766 === (1))){
var state_23765__$1 = state_23765;
var statearr_23767_23914 = state_23765__$1;
(statearr_23767_23914[(2)] = null);

(statearr_23767_23914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23766 === (2))){
var state_23765__$1 = state_23765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23765__$1,(4),jobs);
} else {
if((state_val_23766 === (3))){
var inst_23763 = (state_23765[(2)]);
var state_23765__$1 = state_23765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23765__$1,inst_23763);
} else {
if((state_val_23766 === (4))){
var inst_23755 = (state_23765[(2)]);
var inst_23756 = process.call(null,inst_23755);
var state_23765__$1 = state_23765;
if(cljs.core.truth_(inst_23756)){
var statearr_23768_23915 = state_23765__$1;
(statearr_23768_23915[(1)] = (5));

} else {
var statearr_23769_23916 = state_23765__$1;
(statearr_23769_23916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23766 === (5))){
var state_23765__$1 = state_23765;
var statearr_23770_23917 = state_23765__$1;
(statearr_23770_23917[(2)] = null);

(statearr_23770_23917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23766 === (6))){
var state_23765__$1 = state_23765;
var statearr_23771_23918 = state_23765__$1;
(statearr_23771_23918[(2)] = null);

(statearr_23771_23918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23766 === (7))){
var inst_23761 = (state_23765[(2)]);
var state_23765__$1 = state_23765;
var statearr_23772_23919 = state_23765__$1;
(statearr_23772_23919[(2)] = inst_23761);

(statearr_23772_23919[(1)] = (3));


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
});})(__23909,c__23570__auto___23913,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async))
;
return ((function (__23909,switch__23475__auto__,c__23570__auto___23913,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23773 = [null,null,null,null,null,null,null];
(statearr_23773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23773[(1)] = (1));

return statearr_23773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23765){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23774){if((e23774 instanceof Object)){
var ex__23479__auto__ = e23774;
var statearr_23775_23920 = state_23765;
(statearr_23775_23920[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23921 = state_23765;
state_23765 = G__23921;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(__23909,switch__23475__auto__,c__23570__auto___23913,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async))
})();
var state__23572__auto__ = (function (){var statearr_23776 = f__23571__auto__.call(null);
(statearr_23776[(6)] = c__23570__auto___23913);

return statearr_23776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(__23909,c__23570__auto___23913,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async))
);


break;
case "async":
var c__23570__auto___23922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23909,c__23570__auto___23922,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (__23909,c__23570__auto___23922,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async){
return (function (state_23789){
var state_val_23790 = (state_23789[(1)]);
if((state_val_23790 === (1))){
var state_23789__$1 = state_23789;
var statearr_23791_23923 = state_23789__$1;
(statearr_23791_23923[(2)] = null);

(statearr_23791_23923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (2))){
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23789__$1,(4),jobs);
} else {
if((state_val_23790 === (3))){
var inst_23787 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23789__$1,inst_23787);
} else {
if((state_val_23790 === (4))){
var inst_23779 = (state_23789[(2)]);
var inst_23780 = async.call(null,inst_23779);
var state_23789__$1 = state_23789;
if(cljs.core.truth_(inst_23780)){
var statearr_23792_23924 = state_23789__$1;
(statearr_23792_23924[(1)] = (5));

} else {
var statearr_23793_23925 = state_23789__$1;
(statearr_23793_23925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (5))){
var state_23789__$1 = state_23789;
var statearr_23794_23926 = state_23789__$1;
(statearr_23794_23926[(2)] = null);

(statearr_23794_23926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (6))){
var state_23789__$1 = state_23789;
var statearr_23795_23927 = state_23789__$1;
(statearr_23795_23927[(2)] = null);

(statearr_23795_23927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (7))){
var inst_23785 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23796_23928 = state_23789__$1;
(statearr_23796_23928[(2)] = inst_23785);

(statearr_23796_23928[(1)] = (3));


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
});})(__23909,c__23570__auto___23922,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async))
;
return ((function (__23909,switch__23475__auto__,c__23570__auto___23922,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23797 = [null,null,null,null,null,null,null];
(statearr_23797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23797[(1)] = (1));

return statearr_23797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23789){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23798){if((e23798 instanceof Object)){
var ex__23479__auto__ = e23798;
var statearr_23799_23929 = state_23789;
(statearr_23799_23929[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23930 = state_23789;
state_23789 = G__23930;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(__23909,switch__23475__auto__,c__23570__auto___23922,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async))
})();
var state__23572__auto__ = (function (){var statearr_23800 = f__23571__auto__.call(null);
(statearr_23800[(6)] = c__23570__auto___23922);

return statearr_23800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(__23909,c__23570__auto___23922,G__23752_23910,G__23752_23911__$1,n__4607__auto___23908,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23752_23911__$1)].join('')));

}

var G__23931 = (__23909 + (1));
__23909 = G__23931;
continue;
} else {
}
break;
}

var c__23570__auto___23932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___23932,jobs,results,process,async){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___23932,jobs,results,process,async){
return (function (state_23822){
var state_val_23823 = (state_23822[(1)]);
if((state_val_23823 === (7))){
var inst_23818 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23824_23933 = state_23822__$1;
(statearr_23824_23933[(2)] = inst_23818);

(statearr_23824_23933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (1))){
var state_23822__$1 = state_23822;
var statearr_23825_23934 = state_23822__$1;
(statearr_23825_23934[(2)] = null);

(statearr_23825_23934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (4))){
var inst_23803 = (state_23822[(7)]);
var inst_23803__$1 = (state_23822[(2)]);
var inst_23804 = (inst_23803__$1 == null);
var state_23822__$1 = (function (){var statearr_23826 = state_23822;
(statearr_23826[(7)] = inst_23803__$1);

return statearr_23826;
})();
if(cljs.core.truth_(inst_23804)){
var statearr_23827_23935 = state_23822__$1;
(statearr_23827_23935[(1)] = (5));

} else {
var statearr_23828_23936 = state_23822__$1;
(statearr_23828_23936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (6))){
var inst_23808 = (state_23822[(8)]);
var inst_23803 = (state_23822[(7)]);
var inst_23808__$1 = cljs.core.async.chan.call(null,(1));
var inst_23809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23810 = [inst_23803,inst_23808__$1];
var inst_23811 = (new cljs.core.PersistentVector(null,2,(5),inst_23809,inst_23810,null));
var state_23822__$1 = (function (){var statearr_23829 = state_23822;
(statearr_23829[(8)] = inst_23808__$1);

return statearr_23829;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23822__$1,(8),jobs,inst_23811);
} else {
if((state_val_23823 === (3))){
var inst_23820 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23822__$1,inst_23820);
} else {
if((state_val_23823 === (2))){
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23822__$1,(4),from);
} else {
if((state_val_23823 === (9))){
var inst_23815 = (state_23822[(2)]);
var state_23822__$1 = (function (){var statearr_23830 = state_23822;
(statearr_23830[(9)] = inst_23815);

return statearr_23830;
})();
var statearr_23831_23937 = state_23822__$1;
(statearr_23831_23937[(2)] = null);

(statearr_23831_23937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (5))){
var inst_23806 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23822__$1 = state_23822;
var statearr_23832_23938 = state_23822__$1;
(statearr_23832_23938[(2)] = inst_23806);

(statearr_23832_23938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (8))){
var inst_23808 = (state_23822[(8)]);
var inst_23813 = (state_23822[(2)]);
var state_23822__$1 = (function (){var statearr_23833 = state_23822;
(statearr_23833[(10)] = inst_23813);

return statearr_23833;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23822__$1,(9),results,inst_23808);
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
});})(c__23570__auto___23932,jobs,results,process,async))
;
return ((function (switch__23475__auto__,c__23570__auto___23932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23834[(1)] = (1));

return statearr_23834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23822){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23835){if((e23835 instanceof Object)){
var ex__23479__auto__ = e23835;
var statearr_23836_23939 = state_23822;
(statearr_23836_23939[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23940 = state_23822;
state_23822 = G__23940;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___23932,jobs,results,process,async))
})();
var state__23572__auto__ = (function (){var statearr_23837 = f__23571__auto__.call(null);
(statearr_23837[(6)] = c__23570__auto___23932);

return statearr_23837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___23932,jobs,results,process,async))
);


var c__23570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto__,jobs,results,process,async){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto__,jobs,results,process,async){
return (function (state_23875){
var state_val_23876 = (state_23875[(1)]);
if((state_val_23876 === (7))){
var inst_23871 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
var statearr_23877_23941 = state_23875__$1;
(statearr_23877_23941[(2)] = inst_23871);

(statearr_23877_23941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (20))){
var state_23875__$1 = state_23875;
var statearr_23878_23942 = state_23875__$1;
(statearr_23878_23942[(2)] = null);

(statearr_23878_23942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (1))){
var state_23875__$1 = state_23875;
var statearr_23879_23943 = state_23875__$1;
(statearr_23879_23943[(2)] = null);

(statearr_23879_23943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (4))){
var inst_23840 = (state_23875[(7)]);
var inst_23840__$1 = (state_23875[(2)]);
var inst_23841 = (inst_23840__$1 == null);
var state_23875__$1 = (function (){var statearr_23880 = state_23875;
(statearr_23880[(7)] = inst_23840__$1);

return statearr_23880;
})();
if(cljs.core.truth_(inst_23841)){
var statearr_23881_23944 = state_23875__$1;
(statearr_23881_23944[(1)] = (5));

} else {
var statearr_23882_23945 = state_23875__$1;
(statearr_23882_23945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (15))){
var inst_23853 = (state_23875[(8)]);
var state_23875__$1 = state_23875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23875__$1,(18),to,inst_23853);
} else {
if((state_val_23876 === (21))){
var inst_23866 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
var statearr_23883_23946 = state_23875__$1;
(statearr_23883_23946[(2)] = inst_23866);

(statearr_23883_23946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (13))){
var inst_23868 = (state_23875[(2)]);
var state_23875__$1 = (function (){var statearr_23884 = state_23875;
(statearr_23884[(9)] = inst_23868);

return statearr_23884;
})();
var statearr_23885_23947 = state_23875__$1;
(statearr_23885_23947[(2)] = null);

(statearr_23885_23947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (6))){
var inst_23840 = (state_23875[(7)]);
var state_23875__$1 = state_23875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23875__$1,(11),inst_23840);
} else {
if((state_val_23876 === (17))){
var inst_23861 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
if(cljs.core.truth_(inst_23861)){
var statearr_23886_23948 = state_23875__$1;
(statearr_23886_23948[(1)] = (19));

} else {
var statearr_23887_23949 = state_23875__$1;
(statearr_23887_23949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (3))){
var inst_23873 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23875__$1,inst_23873);
} else {
if((state_val_23876 === (12))){
var inst_23850 = (state_23875[(10)]);
var state_23875__$1 = state_23875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23875__$1,(14),inst_23850);
} else {
if((state_val_23876 === (2))){
var state_23875__$1 = state_23875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23875__$1,(4),results);
} else {
if((state_val_23876 === (19))){
var state_23875__$1 = state_23875;
var statearr_23888_23950 = state_23875__$1;
(statearr_23888_23950[(2)] = null);

(statearr_23888_23950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (11))){
var inst_23850 = (state_23875[(2)]);
var state_23875__$1 = (function (){var statearr_23889 = state_23875;
(statearr_23889[(10)] = inst_23850);

return statearr_23889;
})();
var statearr_23890_23951 = state_23875__$1;
(statearr_23890_23951[(2)] = null);

(statearr_23890_23951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (9))){
var state_23875__$1 = state_23875;
var statearr_23891_23952 = state_23875__$1;
(statearr_23891_23952[(2)] = null);

(statearr_23891_23952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (5))){
var state_23875__$1 = state_23875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23892_23953 = state_23875__$1;
(statearr_23892_23953[(1)] = (8));

} else {
var statearr_23893_23954 = state_23875__$1;
(statearr_23893_23954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (14))){
var inst_23855 = (state_23875[(11)]);
var inst_23853 = (state_23875[(8)]);
var inst_23853__$1 = (state_23875[(2)]);
var inst_23854 = (inst_23853__$1 == null);
var inst_23855__$1 = cljs.core.not.call(null,inst_23854);
var state_23875__$1 = (function (){var statearr_23894 = state_23875;
(statearr_23894[(11)] = inst_23855__$1);

(statearr_23894[(8)] = inst_23853__$1);

return statearr_23894;
})();
if(inst_23855__$1){
var statearr_23895_23955 = state_23875__$1;
(statearr_23895_23955[(1)] = (15));

} else {
var statearr_23896_23956 = state_23875__$1;
(statearr_23896_23956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (16))){
var inst_23855 = (state_23875[(11)]);
var state_23875__$1 = state_23875;
var statearr_23897_23957 = state_23875__$1;
(statearr_23897_23957[(2)] = inst_23855);

(statearr_23897_23957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (10))){
var inst_23847 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
var statearr_23898_23958 = state_23875__$1;
(statearr_23898_23958[(2)] = inst_23847);

(statearr_23898_23958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (18))){
var inst_23858 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
var statearr_23899_23959 = state_23875__$1;
(statearr_23899_23959[(2)] = inst_23858);

(statearr_23899_23959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (8))){
var inst_23844 = cljs.core.async.close_BANG_.call(null,to);
var state_23875__$1 = state_23875;
var statearr_23900_23960 = state_23875__$1;
(statearr_23900_23960[(2)] = inst_23844);

(statearr_23900_23960[(1)] = (10));


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
});})(c__23570__auto__,jobs,results,process,async))
;
return ((function (switch__23475__auto__,c__23570__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_23901 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__);

(statearr_23901[(1)] = (1));

return statearr_23901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1 = (function (state_23875){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e23902){if((e23902 instanceof Object)){
var ex__23479__auto__ = e23902;
var statearr_23903_23961 = state_23875;
(statearr_23903_23961[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23962 = state_23875;
state_23875 = G__23962;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__ = function(state_23875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1.call(this,state_23875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto__,jobs,results,process,async))
})();
var state__23572__auto__ = (function (){var statearr_23904 = f__23571__auto__.call(null);
(statearr_23904[(6)] = c__23570__auto__);

return statearr_23904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto__,jobs,results,process,async))
);

return c__23570__auto__;
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
var G__23964 = arguments.length;
switch (G__23964) {
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
var G__23967 = arguments.length;
switch (G__23967) {
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
var G__23970 = arguments.length;
switch (G__23970) {
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
var c__23570__auto___24019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___24019,tc,fc){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___24019,tc,fc){
return (function (state_23996){
var state_val_23997 = (state_23996[(1)]);
if((state_val_23997 === (7))){
var inst_23992 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
var statearr_23998_24020 = state_23996__$1;
(statearr_23998_24020[(2)] = inst_23992);

(statearr_23998_24020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (1))){
var state_23996__$1 = state_23996;
var statearr_23999_24021 = state_23996__$1;
(statearr_23999_24021[(2)] = null);

(statearr_23999_24021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (4))){
var inst_23973 = (state_23996[(7)]);
var inst_23973__$1 = (state_23996[(2)]);
var inst_23974 = (inst_23973__$1 == null);
var state_23996__$1 = (function (){var statearr_24000 = state_23996;
(statearr_24000[(7)] = inst_23973__$1);

return statearr_24000;
})();
if(cljs.core.truth_(inst_23974)){
var statearr_24001_24022 = state_23996__$1;
(statearr_24001_24022[(1)] = (5));

} else {
var statearr_24002_24023 = state_23996__$1;
(statearr_24002_24023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (13))){
var state_23996__$1 = state_23996;
var statearr_24003_24024 = state_23996__$1;
(statearr_24003_24024[(2)] = null);

(statearr_24003_24024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (6))){
var inst_23973 = (state_23996[(7)]);
var inst_23979 = p.call(null,inst_23973);
var state_23996__$1 = state_23996;
if(cljs.core.truth_(inst_23979)){
var statearr_24004_24025 = state_23996__$1;
(statearr_24004_24025[(1)] = (9));

} else {
var statearr_24005_24026 = state_23996__$1;
(statearr_24005_24026[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (3))){
var inst_23994 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23996__$1,inst_23994);
} else {
if((state_val_23997 === (12))){
var state_23996__$1 = state_23996;
var statearr_24006_24027 = state_23996__$1;
(statearr_24006_24027[(2)] = null);

(statearr_24006_24027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (2))){
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23996__$1,(4),ch);
} else {
if((state_val_23997 === (11))){
var inst_23973 = (state_23996[(7)]);
var inst_23983 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23996__$1,(8),inst_23983,inst_23973);
} else {
if((state_val_23997 === (9))){
var state_23996__$1 = state_23996;
var statearr_24007_24028 = state_23996__$1;
(statearr_24007_24028[(2)] = tc);

(statearr_24007_24028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (5))){
var inst_23976 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23977 = cljs.core.async.close_BANG_.call(null,fc);
var state_23996__$1 = (function (){var statearr_24008 = state_23996;
(statearr_24008[(8)] = inst_23976);

return statearr_24008;
})();
var statearr_24009_24029 = state_23996__$1;
(statearr_24009_24029[(2)] = inst_23977);

(statearr_24009_24029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (14))){
var inst_23990 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
var statearr_24010_24030 = state_23996__$1;
(statearr_24010_24030[(2)] = inst_23990);

(statearr_24010_24030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (10))){
var state_23996__$1 = state_23996;
var statearr_24011_24031 = state_23996__$1;
(statearr_24011_24031[(2)] = fc);

(statearr_24011_24031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (8))){
var inst_23985 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
if(cljs.core.truth_(inst_23985)){
var statearr_24012_24032 = state_23996__$1;
(statearr_24012_24032[(1)] = (12));

} else {
var statearr_24013_24033 = state_23996__$1;
(statearr_24013_24033[(1)] = (13));

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
});})(c__23570__auto___24019,tc,fc))
;
return ((function (switch__23475__auto__,c__23570__auto___24019,tc,fc){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24014 = [null,null,null,null,null,null,null,null,null];
(statearr_24014[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24014[(1)] = (1));

return statearr_24014;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_23996){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_23996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24015){if((e24015 instanceof Object)){
var ex__23479__auto__ = e24015;
var statearr_24016_24034 = state_23996;
(statearr_24016_24034[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24035 = state_23996;
state_23996 = G__24035;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_23996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_23996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___24019,tc,fc))
})();
var state__23572__auto__ = (function (){var statearr_24017 = f__23571__auto__.call(null);
(statearr_24017[(6)] = c__23570__auto___24019);

return statearr_24017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___24019,tc,fc))
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
var c__23570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto__){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto__){
return (function (state_24056){
var state_val_24057 = (state_24056[(1)]);
if((state_val_24057 === (7))){
var inst_24052 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
var statearr_24058_24076 = state_24056__$1;
(statearr_24058_24076[(2)] = inst_24052);

(statearr_24058_24076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (1))){
var inst_24036 = init;
var state_24056__$1 = (function (){var statearr_24059 = state_24056;
(statearr_24059[(7)] = inst_24036);

return statearr_24059;
})();
var statearr_24060_24077 = state_24056__$1;
(statearr_24060_24077[(2)] = null);

(statearr_24060_24077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (4))){
var inst_24039 = (state_24056[(8)]);
var inst_24039__$1 = (state_24056[(2)]);
var inst_24040 = (inst_24039__$1 == null);
var state_24056__$1 = (function (){var statearr_24061 = state_24056;
(statearr_24061[(8)] = inst_24039__$1);

return statearr_24061;
})();
if(cljs.core.truth_(inst_24040)){
var statearr_24062_24078 = state_24056__$1;
(statearr_24062_24078[(1)] = (5));

} else {
var statearr_24063_24079 = state_24056__$1;
(statearr_24063_24079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (6))){
var inst_24036 = (state_24056[(7)]);
var inst_24039 = (state_24056[(8)]);
var inst_24043 = (state_24056[(9)]);
var inst_24043__$1 = f.call(null,inst_24036,inst_24039);
var inst_24044 = cljs.core.reduced_QMARK_.call(null,inst_24043__$1);
var state_24056__$1 = (function (){var statearr_24064 = state_24056;
(statearr_24064[(9)] = inst_24043__$1);

return statearr_24064;
})();
if(inst_24044){
var statearr_24065_24080 = state_24056__$1;
(statearr_24065_24080[(1)] = (8));

} else {
var statearr_24066_24081 = state_24056__$1;
(statearr_24066_24081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (3))){
var inst_24054 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24056__$1,inst_24054);
} else {
if((state_val_24057 === (2))){
var state_24056__$1 = state_24056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24056__$1,(4),ch);
} else {
if((state_val_24057 === (9))){
var inst_24043 = (state_24056[(9)]);
var inst_24036 = inst_24043;
var state_24056__$1 = (function (){var statearr_24067 = state_24056;
(statearr_24067[(7)] = inst_24036);

return statearr_24067;
})();
var statearr_24068_24082 = state_24056__$1;
(statearr_24068_24082[(2)] = null);

(statearr_24068_24082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (5))){
var inst_24036 = (state_24056[(7)]);
var state_24056__$1 = state_24056;
var statearr_24069_24083 = state_24056__$1;
(statearr_24069_24083[(2)] = inst_24036);

(statearr_24069_24083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (10))){
var inst_24050 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
var statearr_24070_24084 = state_24056__$1;
(statearr_24070_24084[(2)] = inst_24050);

(statearr_24070_24084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (8))){
var inst_24043 = (state_24056[(9)]);
var inst_24046 = cljs.core.deref.call(null,inst_24043);
var state_24056__$1 = state_24056;
var statearr_24071_24085 = state_24056__$1;
(statearr_24071_24085[(2)] = inst_24046);

(statearr_24071_24085[(1)] = (10));


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
});})(c__23570__auto__))
;
return ((function (switch__23475__auto__,c__23570__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23476__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23476__auto____0 = (function (){
var statearr_24072 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24072[(0)] = cljs$core$async$reduce_$_state_machine__23476__auto__);

(statearr_24072[(1)] = (1));

return statearr_24072;
});
var cljs$core$async$reduce_$_state_machine__23476__auto____1 = (function (state_24056){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24073){if((e24073 instanceof Object)){
var ex__23479__auto__ = e24073;
var statearr_24074_24086 = state_24056;
(statearr_24074_24086[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24087 = state_24056;
state_24056 = G__24087;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23476__auto__ = function(state_24056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23476__auto____1.call(this,state_24056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23476__auto____0;
cljs$core$async$reduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23476__auto____1;
return cljs$core$async$reduce_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto__))
})();
var state__23572__auto__ = (function (){var statearr_24075 = f__23571__auto__.call(null);
(statearr_24075[(6)] = c__23570__auto__);

return statearr_24075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto__))
);

return c__23570__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto__,f__$1){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto__,f__$1){
return (function (state_24093){
var state_val_24094 = (state_24093[(1)]);
if((state_val_24094 === (1))){
var inst_24088 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24093__$1 = state_24093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24093__$1,(2),inst_24088);
} else {
if((state_val_24094 === (2))){
var inst_24090 = (state_24093[(2)]);
var inst_24091 = f__$1.call(null,inst_24090);
var state_24093__$1 = state_24093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24093__$1,inst_24091);
} else {
return null;
}
}
});})(c__23570__auto__,f__$1))
;
return ((function (switch__23475__auto__,c__23570__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23476__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23476__auto____0 = (function (){
var statearr_24095 = [null,null,null,null,null,null,null];
(statearr_24095[(0)] = cljs$core$async$transduce_$_state_machine__23476__auto__);

(statearr_24095[(1)] = (1));

return statearr_24095;
});
var cljs$core$async$transduce_$_state_machine__23476__auto____1 = (function (state_24093){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24096){if((e24096 instanceof Object)){
var ex__23479__auto__ = e24096;
var statearr_24097_24099 = state_24093;
(statearr_24097_24099[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24100 = state_24093;
state_24093 = G__24100;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23476__auto__ = function(state_24093){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23476__auto____1.call(this,state_24093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23476__auto____0;
cljs$core$async$transduce_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23476__auto____1;
return cljs$core$async$transduce_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto__,f__$1))
})();
var state__23572__auto__ = (function (){var statearr_24098 = f__23571__auto__.call(null);
(statearr_24098[(6)] = c__23570__auto__);

return statearr_24098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto__,f__$1))
);

return c__23570__auto__;
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
var G__24102 = arguments.length;
switch (G__24102) {
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
var c__23570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto__){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto__){
return (function (state_24127){
var state_val_24128 = (state_24127[(1)]);
if((state_val_24128 === (7))){
var inst_24109 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
var statearr_24129_24150 = state_24127__$1;
(statearr_24129_24150[(2)] = inst_24109);

(statearr_24129_24150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (1))){
var inst_24103 = cljs.core.seq.call(null,coll);
var inst_24104 = inst_24103;
var state_24127__$1 = (function (){var statearr_24130 = state_24127;
(statearr_24130[(7)] = inst_24104);

return statearr_24130;
})();
var statearr_24131_24151 = state_24127__$1;
(statearr_24131_24151[(2)] = null);

(statearr_24131_24151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (4))){
var inst_24104 = (state_24127[(7)]);
var inst_24107 = cljs.core.first.call(null,inst_24104);
var state_24127__$1 = state_24127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24127__$1,(7),ch,inst_24107);
} else {
if((state_val_24128 === (13))){
var inst_24121 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
var statearr_24132_24152 = state_24127__$1;
(statearr_24132_24152[(2)] = inst_24121);

(statearr_24132_24152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (6))){
var inst_24112 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
if(cljs.core.truth_(inst_24112)){
var statearr_24133_24153 = state_24127__$1;
(statearr_24133_24153[(1)] = (8));

} else {
var statearr_24134_24154 = state_24127__$1;
(statearr_24134_24154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (3))){
var inst_24125 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24127__$1,inst_24125);
} else {
if((state_val_24128 === (12))){
var state_24127__$1 = state_24127;
var statearr_24135_24155 = state_24127__$1;
(statearr_24135_24155[(2)] = null);

(statearr_24135_24155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (2))){
var inst_24104 = (state_24127[(7)]);
var state_24127__$1 = state_24127;
if(cljs.core.truth_(inst_24104)){
var statearr_24136_24156 = state_24127__$1;
(statearr_24136_24156[(1)] = (4));

} else {
var statearr_24137_24157 = state_24127__$1;
(statearr_24137_24157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (11))){
var inst_24118 = cljs.core.async.close_BANG_.call(null,ch);
var state_24127__$1 = state_24127;
var statearr_24138_24158 = state_24127__$1;
(statearr_24138_24158[(2)] = inst_24118);

(statearr_24138_24158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (9))){
var state_24127__$1 = state_24127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24139_24159 = state_24127__$1;
(statearr_24139_24159[(1)] = (11));

} else {
var statearr_24140_24160 = state_24127__$1;
(statearr_24140_24160[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (5))){
var inst_24104 = (state_24127[(7)]);
var state_24127__$1 = state_24127;
var statearr_24141_24161 = state_24127__$1;
(statearr_24141_24161[(2)] = inst_24104);

(statearr_24141_24161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (10))){
var inst_24123 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
var statearr_24142_24162 = state_24127__$1;
(statearr_24142_24162[(2)] = inst_24123);

(statearr_24142_24162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (8))){
var inst_24104 = (state_24127[(7)]);
var inst_24114 = cljs.core.next.call(null,inst_24104);
var inst_24104__$1 = inst_24114;
var state_24127__$1 = (function (){var statearr_24143 = state_24127;
(statearr_24143[(7)] = inst_24104__$1);

return statearr_24143;
})();
var statearr_24144_24163 = state_24127__$1;
(statearr_24144_24163[(2)] = null);

(statearr_24144_24163[(1)] = (2));


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
});})(c__23570__auto__))
;
return ((function (switch__23475__auto__,c__23570__auto__){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24145 = [null,null,null,null,null,null,null,null];
(statearr_24145[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24145[(1)] = (1));

return statearr_24145;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24127){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24146){if((e24146 instanceof Object)){
var ex__23479__auto__ = e24146;
var statearr_24147_24164 = state_24127;
(statearr_24147_24164[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24165 = state_24127;
state_24127 = G__24165;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto__))
})();
var state__23572__auto__ = (function (){var statearr_24148 = f__23571__auto__.call(null);
(statearr_24148[(6)] = c__23570__auto__);

return statearr_24148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto__))
);

return c__23570__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24166 = (function (ch,cs,meta24167){
this.ch = ch;
this.cs = cs;
this.meta24167 = meta24167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24168,meta24167__$1){
var self__ = this;
var _24168__$1 = this;
return (new cljs.core.async.t_cljs$core$async24166(self__.ch,self__.cs,meta24167__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24168){
var self__ = this;
var _24168__$1 = this;
return self__.meta24167;
});})(cs))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24166.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24166.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24167","meta24167",1449765836,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24166";

cljs.core.async.t_cljs$core$async24166.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24166");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24166.
 */
cljs.core.async.__GT_t_cljs$core$async24166 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24166(ch__$1,cs__$1,meta24167){
return (new cljs.core.async.t_cljs$core$async24166(ch__$1,cs__$1,meta24167));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24166(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23570__auto___24388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___24388,cs,m,dchan,dctr,done){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___24388,cs,m,dchan,dctr,done){
return (function (state_24303){
var state_val_24304 = (state_24303[(1)]);
if((state_val_24304 === (7))){
var inst_24299 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24305_24389 = state_24303__$1;
(statearr_24305_24389[(2)] = inst_24299);

(statearr_24305_24389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (20))){
var inst_24202 = (state_24303[(7)]);
var inst_24214 = cljs.core.first.call(null,inst_24202);
var inst_24215 = cljs.core.nth.call(null,inst_24214,(0),null);
var inst_24216 = cljs.core.nth.call(null,inst_24214,(1),null);
var state_24303__$1 = (function (){var statearr_24306 = state_24303;
(statearr_24306[(8)] = inst_24215);

return statearr_24306;
})();
if(cljs.core.truth_(inst_24216)){
var statearr_24307_24390 = state_24303__$1;
(statearr_24307_24390[(1)] = (22));

} else {
var statearr_24308_24391 = state_24303__$1;
(statearr_24308_24391[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (27))){
var inst_24171 = (state_24303[(9)]);
var inst_24244 = (state_24303[(10)]);
var inst_24246 = (state_24303[(11)]);
var inst_24251 = (state_24303[(12)]);
var inst_24251__$1 = cljs.core._nth.call(null,inst_24244,inst_24246);
var inst_24252 = cljs.core.async.put_BANG_.call(null,inst_24251__$1,inst_24171,done);
var state_24303__$1 = (function (){var statearr_24309 = state_24303;
(statearr_24309[(12)] = inst_24251__$1);

return statearr_24309;
})();
if(cljs.core.truth_(inst_24252)){
var statearr_24310_24392 = state_24303__$1;
(statearr_24310_24392[(1)] = (30));

} else {
var statearr_24311_24393 = state_24303__$1;
(statearr_24311_24393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (1))){
var state_24303__$1 = state_24303;
var statearr_24312_24394 = state_24303__$1;
(statearr_24312_24394[(2)] = null);

(statearr_24312_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (24))){
var inst_24202 = (state_24303[(7)]);
var inst_24221 = (state_24303[(2)]);
var inst_24222 = cljs.core.next.call(null,inst_24202);
var inst_24180 = inst_24222;
var inst_24181 = null;
var inst_24182 = (0);
var inst_24183 = (0);
var state_24303__$1 = (function (){var statearr_24313 = state_24303;
(statearr_24313[(13)] = inst_24183);

(statearr_24313[(14)] = inst_24180);

(statearr_24313[(15)] = inst_24182);

(statearr_24313[(16)] = inst_24181);

(statearr_24313[(17)] = inst_24221);

return statearr_24313;
})();
var statearr_24314_24395 = state_24303__$1;
(statearr_24314_24395[(2)] = null);

(statearr_24314_24395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (39))){
var state_24303__$1 = state_24303;
var statearr_24318_24396 = state_24303__$1;
(statearr_24318_24396[(2)] = null);

(statearr_24318_24396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (4))){
var inst_24171 = (state_24303[(9)]);
var inst_24171__$1 = (state_24303[(2)]);
var inst_24172 = (inst_24171__$1 == null);
var state_24303__$1 = (function (){var statearr_24319 = state_24303;
(statearr_24319[(9)] = inst_24171__$1);

return statearr_24319;
})();
if(cljs.core.truth_(inst_24172)){
var statearr_24320_24397 = state_24303__$1;
(statearr_24320_24397[(1)] = (5));

} else {
var statearr_24321_24398 = state_24303__$1;
(statearr_24321_24398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (15))){
var inst_24183 = (state_24303[(13)]);
var inst_24180 = (state_24303[(14)]);
var inst_24182 = (state_24303[(15)]);
var inst_24181 = (state_24303[(16)]);
var inst_24198 = (state_24303[(2)]);
var inst_24199 = (inst_24183 + (1));
var tmp24315 = inst_24180;
var tmp24316 = inst_24182;
var tmp24317 = inst_24181;
var inst_24180__$1 = tmp24315;
var inst_24181__$1 = tmp24317;
var inst_24182__$1 = tmp24316;
var inst_24183__$1 = inst_24199;
var state_24303__$1 = (function (){var statearr_24322 = state_24303;
(statearr_24322[(13)] = inst_24183__$1);

(statearr_24322[(14)] = inst_24180__$1);

(statearr_24322[(18)] = inst_24198);

(statearr_24322[(15)] = inst_24182__$1);

(statearr_24322[(16)] = inst_24181__$1);

return statearr_24322;
})();
var statearr_24323_24399 = state_24303__$1;
(statearr_24323_24399[(2)] = null);

(statearr_24323_24399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (21))){
var inst_24225 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24327_24400 = state_24303__$1;
(statearr_24327_24400[(2)] = inst_24225);

(statearr_24327_24400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (31))){
var inst_24251 = (state_24303[(12)]);
var inst_24255 = done.call(null,null);
var inst_24256 = cljs.core.async.untap_STAR_.call(null,m,inst_24251);
var state_24303__$1 = (function (){var statearr_24328 = state_24303;
(statearr_24328[(19)] = inst_24255);

return statearr_24328;
})();
var statearr_24329_24401 = state_24303__$1;
(statearr_24329_24401[(2)] = inst_24256);

(statearr_24329_24401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (32))){
var inst_24243 = (state_24303[(20)]);
var inst_24245 = (state_24303[(21)]);
var inst_24244 = (state_24303[(10)]);
var inst_24246 = (state_24303[(11)]);
var inst_24258 = (state_24303[(2)]);
var inst_24259 = (inst_24246 + (1));
var tmp24324 = inst_24243;
var tmp24325 = inst_24245;
var tmp24326 = inst_24244;
var inst_24243__$1 = tmp24324;
var inst_24244__$1 = tmp24326;
var inst_24245__$1 = tmp24325;
var inst_24246__$1 = inst_24259;
var state_24303__$1 = (function (){var statearr_24330 = state_24303;
(statearr_24330[(20)] = inst_24243__$1);

(statearr_24330[(21)] = inst_24245__$1);

(statearr_24330[(22)] = inst_24258);

(statearr_24330[(10)] = inst_24244__$1);

(statearr_24330[(11)] = inst_24246__$1);

return statearr_24330;
})();
var statearr_24331_24402 = state_24303__$1;
(statearr_24331_24402[(2)] = null);

(statearr_24331_24402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (40))){
var inst_24271 = (state_24303[(23)]);
var inst_24275 = done.call(null,null);
var inst_24276 = cljs.core.async.untap_STAR_.call(null,m,inst_24271);
var state_24303__$1 = (function (){var statearr_24332 = state_24303;
(statearr_24332[(24)] = inst_24275);

return statearr_24332;
})();
var statearr_24333_24403 = state_24303__$1;
(statearr_24333_24403[(2)] = inst_24276);

(statearr_24333_24403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (33))){
var inst_24262 = (state_24303[(25)]);
var inst_24264 = cljs.core.chunked_seq_QMARK_.call(null,inst_24262);
var state_24303__$1 = state_24303;
if(inst_24264){
var statearr_24334_24404 = state_24303__$1;
(statearr_24334_24404[(1)] = (36));

} else {
var statearr_24335_24405 = state_24303__$1;
(statearr_24335_24405[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (13))){
var inst_24192 = (state_24303[(26)]);
var inst_24195 = cljs.core.async.close_BANG_.call(null,inst_24192);
var state_24303__$1 = state_24303;
var statearr_24336_24406 = state_24303__$1;
(statearr_24336_24406[(2)] = inst_24195);

(statearr_24336_24406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (22))){
var inst_24215 = (state_24303[(8)]);
var inst_24218 = cljs.core.async.close_BANG_.call(null,inst_24215);
var state_24303__$1 = state_24303;
var statearr_24337_24407 = state_24303__$1;
(statearr_24337_24407[(2)] = inst_24218);

(statearr_24337_24407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (36))){
var inst_24262 = (state_24303[(25)]);
var inst_24266 = cljs.core.chunk_first.call(null,inst_24262);
var inst_24267 = cljs.core.chunk_rest.call(null,inst_24262);
var inst_24268 = cljs.core.count.call(null,inst_24266);
var inst_24243 = inst_24267;
var inst_24244 = inst_24266;
var inst_24245 = inst_24268;
var inst_24246 = (0);
var state_24303__$1 = (function (){var statearr_24338 = state_24303;
(statearr_24338[(20)] = inst_24243);

(statearr_24338[(21)] = inst_24245);

(statearr_24338[(10)] = inst_24244);

(statearr_24338[(11)] = inst_24246);

return statearr_24338;
})();
var statearr_24339_24408 = state_24303__$1;
(statearr_24339_24408[(2)] = null);

(statearr_24339_24408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (41))){
var inst_24262 = (state_24303[(25)]);
var inst_24278 = (state_24303[(2)]);
var inst_24279 = cljs.core.next.call(null,inst_24262);
var inst_24243 = inst_24279;
var inst_24244 = null;
var inst_24245 = (0);
var inst_24246 = (0);
var state_24303__$1 = (function (){var statearr_24340 = state_24303;
(statearr_24340[(20)] = inst_24243);

(statearr_24340[(21)] = inst_24245);

(statearr_24340[(27)] = inst_24278);

(statearr_24340[(10)] = inst_24244);

(statearr_24340[(11)] = inst_24246);

return statearr_24340;
})();
var statearr_24341_24409 = state_24303__$1;
(statearr_24341_24409[(2)] = null);

(statearr_24341_24409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (43))){
var state_24303__$1 = state_24303;
var statearr_24342_24410 = state_24303__$1;
(statearr_24342_24410[(2)] = null);

(statearr_24342_24410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (29))){
var inst_24287 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24343_24411 = state_24303__$1;
(statearr_24343_24411[(2)] = inst_24287);

(statearr_24343_24411[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (44))){
var inst_24296 = (state_24303[(2)]);
var state_24303__$1 = (function (){var statearr_24344 = state_24303;
(statearr_24344[(28)] = inst_24296);

return statearr_24344;
})();
var statearr_24345_24412 = state_24303__$1;
(statearr_24345_24412[(2)] = null);

(statearr_24345_24412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (6))){
var inst_24235 = (state_24303[(29)]);
var inst_24234 = cljs.core.deref.call(null,cs);
var inst_24235__$1 = cljs.core.keys.call(null,inst_24234);
var inst_24236 = cljs.core.count.call(null,inst_24235__$1);
var inst_24237 = cljs.core.reset_BANG_.call(null,dctr,inst_24236);
var inst_24242 = cljs.core.seq.call(null,inst_24235__$1);
var inst_24243 = inst_24242;
var inst_24244 = null;
var inst_24245 = (0);
var inst_24246 = (0);
var state_24303__$1 = (function (){var statearr_24346 = state_24303;
(statearr_24346[(20)] = inst_24243);

(statearr_24346[(29)] = inst_24235__$1);

(statearr_24346[(21)] = inst_24245);

(statearr_24346[(10)] = inst_24244);

(statearr_24346[(30)] = inst_24237);

(statearr_24346[(11)] = inst_24246);

return statearr_24346;
})();
var statearr_24347_24413 = state_24303__$1;
(statearr_24347_24413[(2)] = null);

(statearr_24347_24413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (28))){
var inst_24243 = (state_24303[(20)]);
var inst_24262 = (state_24303[(25)]);
var inst_24262__$1 = cljs.core.seq.call(null,inst_24243);
var state_24303__$1 = (function (){var statearr_24348 = state_24303;
(statearr_24348[(25)] = inst_24262__$1);

return statearr_24348;
})();
if(inst_24262__$1){
var statearr_24349_24414 = state_24303__$1;
(statearr_24349_24414[(1)] = (33));

} else {
var statearr_24350_24415 = state_24303__$1;
(statearr_24350_24415[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (25))){
var inst_24245 = (state_24303[(21)]);
var inst_24246 = (state_24303[(11)]);
var inst_24248 = (inst_24246 < inst_24245);
var inst_24249 = inst_24248;
var state_24303__$1 = state_24303;
if(cljs.core.truth_(inst_24249)){
var statearr_24351_24416 = state_24303__$1;
(statearr_24351_24416[(1)] = (27));

} else {
var statearr_24352_24417 = state_24303__$1;
(statearr_24352_24417[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (34))){
var state_24303__$1 = state_24303;
var statearr_24353_24418 = state_24303__$1;
(statearr_24353_24418[(2)] = null);

(statearr_24353_24418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (17))){
var state_24303__$1 = state_24303;
var statearr_24354_24419 = state_24303__$1;
(statearr_24354_24419[(2)] = null);

(statearr_24354_24419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (3))){
var inst_24301 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24303__$1,inst_24301);
} else {
if((state_val_24304 === (12))){
var inst_24230 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24355_24420 = state_24303__$1;
(statearr_24355_24420[(2)] = inst_24230);

(statearr_24355_24420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (2))){
var state_24303__$1 = state_24303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24303__$1,(4),ch);
} else {
if((state_val_24304 === (23))){
var state_24303__$1 = state_24303;
var statearr_24356_24421 = state_24303__$1;
(statearr_24356_24421[(2)] = null);

(statearr_24356_24421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (35))){
var inst_24285 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24357_24422 = state_24303__$1;
(statearr_24357_24422[(2)] = inst_24285);

(statearr_24357_24422[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (19))){
var inst_24202 = (state_24303[(7)]);
var inst_24206 = cljs.core.chunk_first.call(null,inst_24202);
var inst_24207 = cljs.core.chunk_rest.call(null,inst_24202);
var inst_24208 = cljs.core.count.call(null,inst_24206);
var inst_24180 = inst_24207;
var inst_24181 = inst_24206;
var inst_24182 = inst_24208;
var inst_24183 = (0);
var state_24303__$1 = (function (){var statearr_24358 = state_24303;
(statearr_24358[(13)] = inst_24183);

(statearr_24358[(14)] = inst_24180);

(statearr_24358[(15)] = inst_24182);

(statearr_24358[(16)] = inst_24181);

return statearr_24358;
})();
var statearr_24359_24423 = state_24303__$1;
(statearr_24359_24423[(2)] = null);

(statearr_24359_24423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (11))){
var inst_24202 = (state_24303[(7)]);
var inst_24180 = (state_24303[(14)]);
var inst_24202__$1 = cljs.core.seq.call(null,inst_24180);
var state_24303__$1 = (function (){var statearr_24360 = state_24303;
(statearr_24360[(7)] = inst_24202__$1);

return statearr_24360;
})();
if(inst_24202__$1){
var statearr_24361_24424 = state_24303__$1;
(statearr_24361_24424[(1)] = (16));

} else {
var statearr_24362_24425 = state_24303__$1;
(statearr_24362_24425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (9))){
var inst_24232 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24363_24426 = state_24303__$1;
(statearr_24363_24426[(2)] = inst_24232);

(statearr_24363_24426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (5))){
var inst_24178 = cljs.core.deref.call(null,cs);
var inst_24179 = cljs.core.seq.call(null,inst_24178);
var inst_24180 = inst_24179;
var inst_24181 = null;
var inst_24182 = (0);
var inst_24183 = (0);
var state_24303__$1 = (function (){var statearr_24364 = state_24303;
(statearr_24364[(13)] = inst_24183);

(statearr_24364[(14)] = inst_24180);

(statearr_24364[(15)] = inst_24182);

(statearr_24364[(16)] = inst_24181);

return statearr_24364;
})();
var statearr_24365_24427 = state_24303__$1;
(statearr_24365_24427[(2)] = null);

(statearr_24365_24427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (14))){
var state_24303__$1 = state_24303;
var statearr_24366_24428 = state_24303__$1;
(statearr_24366_24428[(2)] = null);

(statearr_24366_24428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (45))){
var inst_24293 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24367_24429 = state_24303__$1;
(statearr_24367_24429[(2)] = inst_24293);

(statearr_24367_24429[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (26))){
var inst_24235 = (state_24303[(29)]);
var inst_24289 = (state_24303[(2)]);
var inst_24290 = cljs.core.seq.call(null,inst_24235);
var state_24303__$1 = (function (){var statearr_24368 = state_24303;
(statearr_24368[(31)] = inst_24289);

return statearr_24368;
})();
if(inst_24290){
var statearr_24369_24430 = state_24303__$1;
(statearr_24369_24430[(1)] = (42));

} else {
var statearr_24370_24431 = state_24303__$1;
(statearr_24370_24431[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (16))){
var inst_24202 = (state_24303[(7)]);
var inst_24204 = cljs.core.chunked_seq_QMARK_.call(null,inst_24202);
var state_24303__$1 = state_24303;
if(inst_24204){
var statearr_24371_24432 = state_24303__$1;
(statearr_24371_24432[(1)] = (19));

} else {
var statearr_24372_24433 = state_24303__$1;
(statearr_24372_24433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (38))){
var inst_24282 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24373_24434 = state_24303__$1;
(statearr_24373_24434[(2)] = inst_24282);

(statearr_24373_24434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (30))){
var state_24303__$1 = state_24303;
var statearr_24374_24435 = state_24303__$1;
(statearr_24374_24435[(2)] = null);

(statearr_24374_24435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (10))){
var inst_24183 = (state_24303[(13)]);
var inst_24181 = (state_24303[(16)]);
var inst_24191 = cljs.core._nth.call(null,inst_24181,inst_24183);
var inst_24192 = cljs.core.nth.call(null,inst_24191,(0),null);
var inst_24193 = cljs.core.nth.call(null,inst_24191,(1),null);
var state_24303__$1 = (function (){var statearr_24375 = state_24303;
(statearr_24375[(26)] = inst_24192);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24193)){
var statearr_24376_24436 = state_24303__$1;
(statearr_24376_24436[(1)] = (13));

} else {
var statearr_24377_24437 = state_24303__$1;
(statearr_24377_24437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (18))){
var inst_24228 = (state_24303[(2)]);
var state_24303__$1 = state_24303;
var statearr_24378_24438 = state_24303__$1;
(statearr_24378_24438[(2)] = inst_24228);

(statearr_24378_24438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (42))){
var state_24303__$1 = state_24303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24303__$1,(45),dchan);
} else {
if((state_val_24304 === (37))){
var inst_24171 = (state_24303[(9)]);
var inst_24262 = (state_24303[(25)]);
var inst_24271 = (state_24303[(23)]);
var inst_24271__$1 = cljs.core.first.call(null,inst_24262);
var inst_24272 = cljs.core.async.put_BANG_.call(null,inst_24271__$1,inst_24171,done);
var state_24303__$1 = (function (){var statearr_24379 = state_24303;
(statearr_24379[(23)] = inst_24271__$1);

return statearr_24379;
})();
if(cljs.core.truth_(inst_24272)){
var statearr_24380_24439 = state_24303__$1;
(statearr_24380_24439[(1)] = (39));

} else {
var statearr_24381_24440 = state_24303__$1;
(statearr_24381_24440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24304 === (8))){
var inst_24183 = (state_24303[(13)]);
var inst_24182 = (state_24303[(15)]);
var inst_24185 = (inst_24183 < inst_24182);
var inst_24186 = inst_24185;
var state_24303__$1 = state_24303;
if(cljs.core.truth_(inst_24186)){
var statearr_24382_24441 = state_24303__$1;
(statearr_24382_24441[(1)] = (10));

} else {
var statearr_24383_24442 = state_24303__$1;
(statearr_24383_24442[(1)] = (11));

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
});})(c__23570__auto___24388,cs,m,dchan,dctr,done))
;
return ((function (switch__23475__auto__,c__23570__auto___24388,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23476__auto__ = null;
var cljs$core$async$mult_$_state_machine__23476__auto____0 = (function (){
var statearr_24384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24384[(0)] = cljs$core$async$mult_$_state_machine__23476__auto__);

(statearr_24384[(1)] = (1));

return statearr_24384;
});
var cljs$core$async$mult_$_state_machine__23476__auto____1 = (function (state_24303){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24385){if((e24385 instanceof Object)){
var ex__23479__auto__ = e24385;
var statearr_24386_24443 = state_24303;
(statearr_24386_24443[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24444 = state_24303;
state_24303 = G__24444;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23476__auto__ = function(state_24303){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23476__auto____1.call(this,state_24303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23476__auto____0;
cljs$core$async$mult_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23476__auto____1;
return cljs$core$async$mult_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___24388,cs,m,dchan,dctr,done))
})();
var state__23572__auto__ = (function (){var statearr_24387 = f__23571__auto__.call(null);
(statearr_24387[(6)] = c__23570__auto___24388);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___24388,cs,m,dchan,dctr,done))
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
var G__24446 = arguments.length;
switch (G__24446) {
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
var len__4730__auto___24458 = arguments.length;
var i__4731__auto___24459 = (0);
while(true){
if((i__4731__auto___24459 < len__4730__auto___24458)){
args__4736__auto__.push((arguments[i__4731__auto___24459]));

var G__24460 = (i__4731__auto___24459 + (1));
i__4731__auto___24459 = G__24460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24452){
var map__24453 = p__24452;
var map__24453__$1 = (((((!((map__24453 == null))))?(((((map__24453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24453):map__24453);
var opts = map__24453__$1;
var statearr_24455_24461 = state;
(statearr_24455_24461[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__24453,map__24453__$1,opts){
return (function (val){
var statearr_24456_24462 = state;
(statearr_24456_24462[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24453,map__24453__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24457_24463 = state;
(statearr_24457_24463[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24448){
var G__24449 = cljs.core.first.call(null,seq24448);
var seq24448__$1 = cljs.core.next.call(null,seq24448);
var G__24450 = cljs.core.first.call(null,seq24448__$1);
var seq24448__$2 = cljs.core.next.call(null,seq24448__$1);
var G__24451 = cljs.core.first.call(null,seq24448__$2);
var seq24448__$3 = cljs.core.next.call(null,seq24448__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24449,G__24450,G__24451,seq24448__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24464 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24465){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24465 = meta24465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24466,meta24465__$1){
var self__ = this;
var _24466__$1 = this;
return (new cljs.core.async.t_cljs$core$async24464(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24465__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24466){
var self__ = this;
var _24466__$1 = this;
return self__.meta24465;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24464.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24465","meta24465",2126355160,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24464";

cljs.core.async.t_cljs$core$async24464.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24464");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24464.
 */
cljs.core.async.__GT_t_cljs$core$async24464 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24464(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24465){
return (new cljs.core.async.t_cljs$core$async24464(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24465));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24464(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23570__auto___24628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___24628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___24628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24568){
var state_val_24569 = (state_24568[(1)]);
if((state_val_24569 === (7))){
var inst_24483 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
var statearr_24570_24629 = state_24568__$1;
(statearr_24570_24629[(2)] = inst_24483);

(statearr_24570_24629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (20))){
var inst_24495 = (state_24568[(7)]);
var state_24568__$1 = state_24568;
var statearr_24571_24630 = state_24568__$1;
(statearr_24571_24630[(2)] = inst_24495);

(statearr_24571_24630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (27))){
var state_24568__$1 = state_24568;
var statearr_24572_24631 = state_24568__$1;
(statearr_24572_24631[(2)] = null);

(statearr_24572_24631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (1))){
var inst_24470 = (state_24568[(8)]);
var inst_24470__$1 = calc_state.call(null);
var inst_24472 = (inst_24470__$1 == null);
var inst_24473 = cljs.core.not.call(null,inst_24472);
var state_24568__$1 = (function (){var statearr_24573 = state_24568;
(statearr_24573[(8)] = inst_24470__$1);

return statearr_24573;
})();
if(inst_24473){
var statearr_24574_24632 = state_24568__$1;
(statearr_24574_24632[(1)] = (2));

} else {
var statearr_24575_24633 = state_24568__$1;
(statearr_24575_24633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (24))){
var inst_24528 = (state_24568[(9)]);
var inst_24542 = (state_24568[(10)]);
var inst_24519 = (state_24568[(11)]);
var inst_24542__$1 = inst_24519.call(null,inst_24528);
var state_24568__$1 = (function (){var statearr_24576 = state_24568;
(statearr_24576[(10)] = inst_24542__$1);

return statearr_24576;
})();
if(cljs.core.truth_(inst_24542__$1)){
var statearr_24577_24634 = state_24568__$1;
(statearr_24577_24634[(1)] = (29));

} else {
var statearr_24578_24635 = state_24568__$1;
(statearr_24578_24635[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (4))){
var inst_24486 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
if(cljs.core.truth_(inst_24486)){
var statearr_24579_24636 = state_24568__$1;
(statearr_24579_24636[(1)] = (8));

} else {
var statearr_24580_24637 = state_24568__$1;
(statearr_24580_24637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (15))){
var inst_24513 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
if(cljs.core.truth_(inst_24513)){
var statearr_24581_24638 = state_24568__$1;
(statearr_24581_24638[(1)] = (19));

} else {
var statearr_24582_24639 = state_24568__$1;
(statearr_24582_24639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (21))){
var inst_24518 = (state_24568[(12)]);
var inst_24518__$1 = (state_24568[(2)]);
var inst_24519 = cljs.core.get.call(null,inst_24518__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24520 = cljs.core.get.call(null,inst_24518__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24521 = cljs.core.get.call(null,inst_24518__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24568__$1 = (function (){var statearr_24583 = state_24568;
(statearr_24583[(13)] = inst_24520);

(statearr_24583[(12)] = inst_24518__$1);

(statearr_24583[(11)] = inst_24519);

return statearr_24583;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24568__$1,(22),inst_24521);
} else {
if((state_val_24569 === (31))){
var inst_24550 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
if(cljs.core.truth_(inst_24550)){
var statearr_24584_24640 = state_24568__$1;
(statearr_24584_24640[(1)] = (32));

} else {
var statearr_24585_24641 = state_24568__$1;
(statearr_24585_24641[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (32))){
var inst_24527 = (state_24568[(14)]);
var state_24568__$1 = state_24568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24568__$1,(35),out,inst_24527);
} else {
if((state_val_24569 === (33))){
var inst_24518 = (state_24568[(12)]);
var inst_24495 = inst_24518;
var state_24568__$1 = (function (){var statearr_24586 = state_24568;
(statearr_24586[(7)] = inst_24495);

return statearr_24586;
})();
var statearr_24587_24642 = state_24568__$1;
(statearr_24587_24642[(2)] = null);

(statearr_24587_24642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (13))){
var inst_24495 = (state_24568[(7)]);
var inst_24502 = inst_24495.cljs$lang$protocol_mask$partition0$;
var inst_24503 = (inst_24502 & (64));
var inst_24504 = inst_24495.cljs$core$ISeq$;
var inst_24505 = (cljs.core.PROTOCOL_SENTINEL === inst_24504);
var inst_24506 = ((inst_24503) || (inst_24505));
var state_24568__$1 = state_24568;
if(cljs.core.truth_(inst_24506)){
var statearr_24588_24643 = state_24568__$1;
(statearr_24588_24643[(1)] = (16));

} else {
var statearr_24589_24644 = state_24568__$1;
(statearr_24589_24644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (22))){
var inst_24528 = (state_24568[(9)]);
var inst_24527 = (state_24568[(14)]);
var inst_24526 = (state_24568[(2)]);
var inst_24527__$1 = cljs.core.nth.call(null,inst_24526,(0),null);
var inst_24528__$1 = cljs.core.nth.call(null,inst_24526,(1),null);
var inst_24529 = (inst_24527__$1 == null);
var inst_24530 = cljs.core._EQ_.call(null,inst_24528__$1,change);
var inst_24531 = ((inst_24529) || (inst_24530));
var state_24568__$1 = (function (){var statearr_24590 = state_24568;
(statearr_24590[(9)] = inst_24528__$1);

(statearr_24590[(14)] = inst_24527__$1);

return statearr_24590;
})();
if(cljs.core.truth_(inst_24531)){
var statearr_24591_24645 = state_24568__$1;
(statearr_24591_24645[(1)] = (23));

} else {
var statearr_24592_24646 = state_24568__$1;
(statearr_24592_24646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (36))){
var inst_24518 = (state_24568[(12)]);
var inst_24495 = inst_24518;
var state_24568__$1 = (function (){var statearr_24593 = state_24568;
(statearr_24593[(7)] = inst_24495);

return statearr_24593;
})();
var statearr_24594_24647 = state_24568__$1;
(statearr_24594_24647[(2)] = null);

(statearr_24594_24647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (29))){
var inst_24542 = (state_24568[(10)]);
var state_24568__$1 = state_24568;
var statearr_24595_24648 = state_24568__$1;
(statearr_24595_24648[(2)] = inst_24542);

(statearr_24595_24648[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (6))){
var state_24568__$1 = state_24568;
var statearr_24596_24649 = state_24568__$1;
(statearr_24596_24649[(2)] = false);

(statearr_24596_24649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (28))){
var inst_24538 = (state_24568[(2)]);
var inst_24539 = calc_state.call(null);
var inst_24495 = inst_24539;
var state_24568__$1 = (function (){var statearr_24597 = state_24568;
(statearr_24597[(15)] = inst_24538);

(statearr_24597[(7)] = inst_24495);

return statearr_24597;
})();
var statearr_24598_24650 = state_24568__$1;
(statearr_24598_24650[(2)] = null);

(statearr_24598_24650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (25))){
var inst_24564 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
var statearr_24599_24651 = state_24568__$1;
(statearr_24599_24651[(2)] = inst_24564);

(statearr_24599_24651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (34))){
var inst_24562 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
var statearr_24600_24652 = state_24568__$1;
(statearr_24600_24652[(2)] = inst_24562);

(statearr_24600_24652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (17))){
var state_24568__$1 = state_24568;
var statearr_24601_24653 = state_24568__$1;
(statearr_24601_24653[(2)] = false);

(statearr_24601_24653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (3))){
var state_24568__$1 = state_24568;
var statearr_24602_24654 = state_24568__$1;
(statearr_24602_24654[(2)] = false);

(statearr_24602_24654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (12))){
var inst_24566 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24568__$1,inst_24566);
} else {
if((state_val_24569 === (2))){
var inst_24470 = (state_24568[(8)]);
var inst_24475 = inst_24470.cljs$lang$protocol_mask$partition0$;
var inst_24476 = (inst_24475 & (64));
var inst_24477 = inst_24470.cljs$core$ISeq$;
var inst_24478 = (cljs.core.PROTOCOL_SENTINEL === inst_24477);
var inst_24479 = ((inst_24476) || (inst_24478));
var state_24568__$1 = state_24568;
if(cljs.core.truth_(inst_24479)){
var statearr_24603_24655 = state_24568__$1;
(statearr_24603_24655[(1)] = (5));

} else {
var statearr_24604_24656 = state_24568__$1;
(statearr_24604_24656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (23))){
var inst_24527 = (state_24568[(14)]);
var inst_24533 = (inst_24527 == null);
var state_24568__$1 = state_24568;
if(cljs.core.truth_(inst_24533)){
var statearr_24605_24657 = state_24568__$1;
(statearr_24605_24657[(1)] = (26));

} else {
var statearr_24606_24658 = state_24568__$1;
(statearr_24606_24658[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (35))){
var inst_24553 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
if(cljs.core.truth_(inst_24553)){
var statearr_24607_24659 = state_24568__$1;
(statearr_24607_24659[(1)] = (36));

} else {
var statearr_24608_24660 = state_24568__$1;
(statearr_24608_24660[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (19))){
var inst_24495 = (state_24568[(7)]);
var inst_24515 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24495);
var state_24568__$1 = state_24568;
var statearr_24609_24661 = state_24568__$1;
(statearr_24609_24661[(2)] = inst_24515);

(statearr_24609_24661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (11))){
var inst_24495 = (state_24568[(7)]);
var inst_24499 = (inst_24495 == null);
var inst_24500 = cljs.core.not.call(null,inst_24499);
var state_24568__$1 = state_24568;
if(inst_24500){
var statearr_24610_24662 = state_24568__$1;
(statearr_24610_24662[(1)] = (13));

} else {
var statearr_24611_24663 = state_24568__$1;
(statearr_24611_24663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (9))){
var inst_24470 = (state_24568[(8)]);
var state_24568__$1 = state_24568;
var statearr_24612_24664 = state_24568__$1;
(statearr_24612_24664[(2)] = inst_24470);

(statearr_24612_24664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (5))){
var state_24568__$1 = state_24568;
var statearr_24613_24665 = state_24568__$1;
(statearr_24613_24665[(2)] = true);

(statearr_24613_24665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (14))){
var state_24568__$1 = state_24568;
var statearr_24614_24666 = state_24568__$1;
(statearr_24614_24666[(2)] = false);

(statearr_24614_24666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (26))){
var inst_24528 = (state_24568[(9)]);
var inst_24535 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24528);
var state_24568__$1 = state_24568;
var statearr_24615_24667 = state_24568__$1;
(statearr_24615_24667[(2)] = inst_24535);

(statearr_24615_24667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (16))){
var state_24568__$1 = state_24568;
var statearr_24616_24668 = state_24568__$1;
(statearr_24616_24668[(2)] = true);

(statearr_24616_24668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (38))){
var inst_24558 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
var statearr_24617_24669 = state_24568__$1;
(statearr_24617_24669[(2)] = inst_24558);

(statearr_24617_24669[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (30))){
var inst_24528 = (state_24568[(9)]);
var inst_24520 = (state_24568[(13)]);
var inst_24519 = (state_24568[(11)]);
var inst_24545 = cljs.core.empty_QMARK_.call(null,inst_24519);
var inst_24546 = inst_24520.call(null,inst_24528);
var inst_24547 = cljs.core.not.call(null,inst_24546);
var inst_24548 = ((inst_24545) && (inst_24547));
var state_24568__$1 = state_24568;
var statearr_24618_24670 = state_24568__$1;
(statearr_24618_24670[(2)] = inst_24548);

(statearr_24618_24670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (10))){
var inst_24470 = (state_24568[(8)]);
var inst_24491 = (state_24568[(2)]);
var inst_24492 = cljs.core.get.call(null,inst_24491,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24493 = cljs.core.get.call(null,inst_24491,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24494 = cljs.core.get.call(null,inst_24491,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24495 = inst_24470;
var state_24568__$1 = (function (){var statearr_24619 = state_24568;
(statearr_24619[(16)] = inst_24492);

(statearr_24619[(17)] = inst_24494);

(statearr_24619[(7)] = inst_24495);

(statearr_24619[(18)] = inst_24493);

return statearr_24619;
})();
var statearr_24620_24671 = state_24568__$1;
(statearr_24620_24671[(2)] = null);

(statearr_24620_24671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (18))){
var inst_24510 = (state_24568[(2)]);
var state_24568__$1 = state_24568;
var statearr_24621_24672 = state_24568__$1;
(statearr_24621_24672[(2)] = inst_24510);

(statearr_24621_24672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (37))){
var state_24568__$1 = state_24568;
var statearr_24622_24673 = state_24568__$1;
(statearr_24622_24673[(2)] = null);

(statearr_24622_24673[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24569 === (8))){
var inst_24470 = (state_24568[(8)]);
var inst_24488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24470);
var state_24568__$1 = state_24568;
var statearr_24623_24674 = state_24568__$1;
(statearr_24623_24674[(2)] = inst_24488);

(statearr_24623_24674[(1)] = (10));


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
});})(c__23570__auto___24628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23475__auto__,c__23570__auto___24628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23476__auto__ = null;
var cljs$core$async$mix_$_state_machine__23476__auto____0 = (function (){
var statearr_24624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24624[(0)] = cljs$core$async$mix_$_state_machine__23476__auto__);

(statearr_24624[(1)] = (1));

return statearr_24624;
});
var cljs$core$async$mix_$_state_machine__23476__auto____1 = (function (state_24568){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24625){if((e24625 instanceof Object)){
var ex__23479__auto__ = e24625;
var statearr_24626_24675 = state_24568;
(statearr_24626_24675[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24676 = state_24568;
state_24568 = G__24676;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23476__auto__ = function(state_24568){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23476__auto____1.call(this,state_24568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23476__auto____0;
cljs$core$async$mix_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23476__auto____1;
return cljs$core$async$mix_$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___24628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23572__auto__ = (function (){var statearr_24627 = f__23571__auto__.call(null);
(statearr_24627[(6)] = c__23570__auto___24628);

return statearr_24627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___24628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24678 = arguments.length;
switch (G__24678) {
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
var G__24682 = arguments.length;
switch (G__24682) {
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
return (function (p1__24680_SHARP_){
if(cljs.core.truth_(p1__24680_SHARP_.call(null,topic))){
return p1__24680_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24680_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24683 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24684){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24684 = meta24684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24685,meta24684__$1){
var self__ = this;
var _24685__$1 = this;
return (new cljs.core.async.t_cljs$core$async24683(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24684__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24685){
var self__ = this;
var _24685__$1 = this;
return self__.meta24684;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24683.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24684","meta24684",-711761115,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24683";

cljs.core.async.t_cljs$core$async24683.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24683");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24683.
 */
cljs.core.async.__GT_t_cljs$core$async24683 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24684){
return (new cljs.core.async.t_cljs$core$async24683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24684));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24683(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23570__auto___24803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___24803,mults,ensure_mult,p){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___24803,mults,ensure_mult,p){
return (function (state_24757){
var state_val_24758 = (state_24757[(1)]);
if((state_val_24758 === (7))){
var inst_24753 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24759_24804 = state_24757__$1;
(statearr_24759_24804[(2)] = inst_24753);

(statearr_24759_24804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (20))){
var state_24757__$1 = state_24757;
var statearr_24760_24805 = state_24757__$1;
(statearr_24760_24805[(2)] = null);

(statearr_24760_24805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (1))){
var state_24757__$1 = state_24757;
var statearr_24761_24806 = state_24757__$1;
(statearr_24761_24806[(2)] = null);

(statearr_24761_24806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (24))){
var inst_24736 = (state_24757[(7)]);
var inst_24745 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24736);
var state_24757__$1 = state_24757;
var statearr_24762_24807 = state_24757__$1;
(statearr_24762_24807[(2)] = inst_24745);

(statearr_24762_24807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (4))){
var inst_24688 = (state_24757[(8)]);
var inst_24688__$1 = (state_24757[(2)]);
var inst_24689 = (inst_24688__$1 == null);
var state_24757__$1 = (function (){var statearr_24763 = state_24757;
(statearr_24763[(8)] = inst_24688__$1);

return statearr_24763;
})();
if(cljs.core.truth_(inst_24689)){
var statearr_24764_24808 = state_24757__$1;
(statearr_24764_24808[(1)] = (5));

} else {
var statearr_24765_24809 = state_24757__$1;
(statearr_24765_24809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (15))){
var inst_24730 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24766_24810 = state_24757__$1;
(statearr_24766_24810[(2)] = inst_24730);

(statearr_24766_24810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (21))){
var inst_24750 = (state_24757[(2)]);
var state_24757__$1 = (function (){var statearr_24767 = state_24757;
(statearr_24767[(9)] = inst_24750);

return statearr_24767;
})();
var statearr_24768_24811 = state_24757__$1;
(statearr_24768_24811[(2)] = null);

(statearr_24768_24811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (13))){
var inst_24712 = (state_24757[(10)]);
var inst_24714 = cljs.core.chunked_seq_QMARK_.call(null,inst_24712);
var state_24757__$1 = state_24757;
if(inst_24714){
var statearr_24769_24812 = state_24757__$1;
(statearr_24769_24812[(1)] = (16));

} else {
var statearr_24770_24813 = state_24757__$1;
(statearr_24770_24813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (22))){
var inst_24742 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24742)){
var statearr_24771_24814 = state_24757__$1;
(statearr_24771_24814[(1)] = (23));

} else {
var statearr_24772_24815 = state_24757__$1;
(statearr_24772_24815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (6))){
var inst_24738 = (state_24757[(11)]);
var inst_24688 = (state_24757[(8)]);
var inst_24736 = (state_24757[(7)]);
var inst_24736__$1 = topic_fn.call(null,inst_24688);
var inst_24737 = cljs.core.deref.call(null,mults);
var inst_24738__$1 = cljs.core.get.call(null,inst_24737,inst_24736__$1);
var state_24757__$1 = (function (){var statearr_24773 = state_24757;
(statearr_24773[(11)] = inst_24738__$1);

(statearr_24773[(7)] = inst_24736__$1);

return statearr_24773;
})();
if(cljs.core.truth_(inst_24738__$1)){
var statearr_24774_24816 = state_24757__$1;
(statearr_24774_24816[(1)] = (19));

} else {
var statearr_24775_24817 = state_24757__$1;
(statearr_24775_24817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (25))){
var inst_24747 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24776_24818 = state_24757__$1;
(statearr_24776_24818[(2)] = inst_24747);

(statearr_24776_24818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (17))){
var inst_24712 = (state_24757[(10)]);
var inst_24721 = cljs.core.first.call(null,inst_24712);
var inst_24722 = cljs.core.async.muxch_STAR_.call(null,inst_24721);
var inst_24723 = cljs.core.async.close_BANG_.call(null,inst_24722);
var inst_24724 = cljs.core.next.call(null,inst_24712);
var inst_24698 = inst_24724;
var inst_24699 = null;
var inst_24700 = (0);
var inst_24701 = (0);
var state_24757__$1 = (function (){var statearr_24777 = state_24757;
(statearr_24777[(12)] = inst_24699);

(statearr_24777[(13)] = inst_24698);

(statearr_24777[(14)] = inst_24701);

(statearr_24777[(15)] = inst_24723);

(statearr_24777[(16)] = inst_24700);

return statearr_24777;
})();
var statearr_24778_24819 = state_24757__$1;
(statearr_24778_24819[(2)] = null);

(statearr_24778_24819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (3))){
var inst_24755 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24757__$1,inst_24755);
} else {
if((state_val_24758 === (12))){
var inst_24732 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24779_24820 = state_24757__$1;
(statearr_24779_24820[(2)] = inst_24732);

(statearr_24779_24820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (2))){
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24757__$1,(4),ch);
} else {
if((state_val_24758 === (23))){
var state_24757__$1 = state_24757;
var statearr_24780_24821 = state_24757__$1;
(statearr_24780_24821[(2)] = null);

(statearr_24780_24821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (19))){
var inst_24738 = (state_24757[(11)]);
var inst_24688 = (state_24757[(8)]);
var inst_24740 = cljs.core.async.muxch_STAR_.call(null,inst_24738);
var state_24757__$1 = state_24757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24757__$1,(22),inst_24740,inst_24688);
} else {
if((state_val_24758 === (11))){
var inst_24698 = (state_24757[(13)]);
var inst_24712 = (state_24757[(10)]);
var inst_24712__$1 = cljs.core.seq.call(null,inst_24698);
var state_24757__$1 = (function (){var statearr_24781 = state_24757;
(statearr_24781[(10)] = inst_24712__$1);

return statearr_24781;
})();
if(inst_24712__$1){
var statearr_24782_24822 = state_24757__$1;
(statearr_24782_24822[(1)] = (13));

} else {
var statearr_24783_24823 = state_24757__$1;
(statearr_24783_24823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (9))){
var inst_24734 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24784_24824 = state_24757__$1;
(statearr_24784_24824[(2)] = inst_24734);

(statearr_24784_24824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (5))){
var inst_24695 = cljs.core.deref.call(null,mults);
var inst_24696 = cljs.core.vals.call(null,inst_24695);
var inst_24697 = cljs.core.seq.call(null,inst_24696);
var inst_24698 = inst_24697;
var inst_24699 = null;
var inst_24700 = (0);
var inst_24701 = (0);
var state_24757__$1 = (function (){var statearr_24785 = state_24757;
(statearr_24785[(12)] = inst_24699);

(statearr_24785[(13)] = inst_24698);

(statearr_24785[(14)] = inst_24701);

(statearr_24785[(16)] = inst_24700);

return statearr_24785;
})();
var statearr_24786_24825 = state_24757__$1;
(statearr_24786_24825[(2)] = null);

(statearr_24786_24825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (14))){
var state_24757__$1 = state_24757;
var statearr_24790_24826 = state_24757__$1;
(statearr_24790_24826[(2)] = null);

(statearr_24790_24826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (16))){
var inst_24712 = (state_24757[(10)]);
var inst_24716 = cljs.core.chunk_first.call(null,inst_24712);
var inst_24717 = cljs.core.chunk_rest.call(null,inst_24712);
var inst_24718 = cljs.core.count.call(null,inst_24716);
var inst_24698 = inst_24717;
var inst_24699 = inst_24716;
var inst_24700 = inst_24718;
var inst_24701 = (0);
var state_24757__$1 = (function (){var statearr_24791 = state_24757;
(statearr_24791[(12)] = inst_24699);

(statearr_24791[(13)] = inst_24698);

(statearr_24791[(14)] = inst_24701);

(statearr_24791[(16)] = inst_24700);

return statearr_24791;
})();
var statearr_24792_24827 = state_24757__$1;
(statearr_24792_24827[(2)] = null);

(statearr_24792_24827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (10))){
var inst_24699 = (state_24757[(12)]);
var inst_24698 = (state_24757[(13)]);
var inst_24701 = (state_24757[(14)]);
var inst_24700 = (state_24757[(16)]);
var inst_24706 = cljs.core._nth.call(null,inst_24699,inst_24701);
var inst_24707 = cljs.core.async.muxch_STAR_.call(null,inst_24706);
var inst_24708 = cljs.core.async.close_BANG_.call(null,inst_24707);
var inst_24709 = (inst_24701 + (1));
var tmp24787 = inst_24699;
var tmp24788 = inst_24698;
var tmp24789 = inst_24700;
var inst_24698__$1 = tmp24788;
var inst_24699__$1 = tmp24787;
var inst_24700__$1 = tmp24789;
var inst_24701__$1 = inst_24709;
var state_24757__$1 = (function (){var statearr_24793 = state_24757;
(statearr_24793[(17)] = inst_24708);

(statearr_24793[(12)] = inst_24699__$1);

(statearr_24793[(13)] = inst_24698__$1);

(statearr_24793[(14)] = inst_24701__$1);

(statearr_24793[(16)] = inst_24700__$1);

return statearr_24793;
})();
var statearr_24794_24828 = state_24757__$1;
(statearr_24794_24828[(2)] = null);

(statearr_24794_24828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (18))){
var inst_24727 = (state_24757[(2)]);
var state_24757__$1 = state_24757;
var statearr_24795_24829 = state_24757__$1;
(statearr_24795_24829[(2)] = inst_24727);

(statearr_24795_24829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24758 === (8))){
var inst_24701 = (state_24757[(14)]);
var inst_24700 = (state_24757[(16)]);
var inst_24703 = (inst_24701 < inst_24700);
var inst_24704 = inst_24703;
var state_24757__$1 = state_24757;
if(cljs.core.truth_(inst_24704)){
var statearr_24796_24830 = state_24757__$1;
(statearr_24796_24830[(1)] = (10));

} else {
var statearr_24797_24831 = state_24757__$1;
(statearr_24797_24831[(1)] = (11));

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
});})(c__23570__auto___24803,mults,ensure_mult,p))
;
return ((function (switch__23475__auto__,c__23570__auto___24803,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24798[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24798[(1)] = (1));

return statearr_24798;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24757){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24799){if((e24799 instanceof Object)){
var ex__23479__auto__ = e24799;
var statearr_24800_24832 = state_24757;
(statearr_24800_24832[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24833 = state_24757;
state_24757 = G__24833;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___24803,mults,ensure_mult,p))
})();
var state__23572__auto__ = (function (){var statearr_24801 = f__23571__auto__.call(null);
(statearr_24801[(6)] = c__23570__auto___24803);

return statearr_24801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___24803,mults,ensure_mult,p))
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
var G__24835 = arguments.length;
switch (G__24835) {
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
var G__24838 = arguments.length;
switch (G__24838) {
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
var G__24841 = arguments.length;
switch (G__24841) {
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
var c__23570__auto___24908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___24908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___24908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24880){
var state_val_24881 = (state_24880[(1)]);
if((state_val_24881 === (7))){
var state_24880__$1 = state_24880;
var statearr_24882_24909 = state_24880__$1;
(statearr_24882_24909[(2)] = null);

(statearr_24882_24909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (1))){
var state_24880__$1 = state_24880;
var statearr_24883_24910 = state_24880__$1;
(statearr_24883_24910[(2)] = null);

(statearr_24883_24910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (4))){
var inst_24844 = (state_24880[(7)]);
var inst_24846 = (inst_24844 < cnt);
var state_24880__$1 = state_24880;
if(cljs.core.truth_(inst_24846)){
var statearr_24884_24911 = state_24880__$1;
(statearr_24884_24911[(1)] = (6));

} else {
var statearr_24885_24912 = state_24880__$1;
(statearr_24885_24912[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (15))){
var inst_24876 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24886_24913 = state_24880__$1;
(statearr_24886_24913[(2)] = inst_24876);

(statearr_24886_24913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (13))){
var inst_24869 = cljs.core.async.close_BANG_.call(null,out);
var state_24880__$1 = state_24880;
var statearr_24887_24914 = state_24880__$1;
(statearr_24887_24914[(2)] = inst_24869);

(statearr_24887_24914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (6))){
var state_24880__$1 = state_24880;
var statearr_24888_24915 = state_24880__$1;
(statearr_24888_24915[(2)] = null);

(statearr_24888_24915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (3))){
var inst_24878 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24880__$1,inst_24878);
} else {
if((state_val_24881 === (12))){
var inst_24866 = (state_24880[(8)]);
var inst_24866__$1 = (state_24880[(2)]);
var inst_24867 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24866__$1);
var state_24880__$1 = (function (){var statearr_24889 = state_24880;
(statearr_24889[(8)] = inst_24866__$1);

return statearr_24889;
})();
if(cljs.core.truth_(inst_24867)){
var statearr_24890_24916 = state_24880__$1;
(statearr_24890_24916[(1)] = (13));

} else {
var statearr_24891_24917 = state_24880__$1;
(statearr_24891_24917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (2))){
var inst_24843 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24844 = (0);
var state_24880__$1 = (function (){var statearr_24892 = state_24880;
(statearr_24892[(7)] = inst_24844);

(statearr_24892[(9)] = inst_24843);

return statearr_24892;
})();
var statearr_24893_24918 = state_24880__$1;
(statearr_24893_24918[(2)] = null);

(statearr_24893_24918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (11))){
var inst_24844 = (state_24880[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24880,(10),Object,null,(9));
var inst_24853 = chs__$1.call(null,inst_24844);
var inst_24854 = done.call(null,inst_24844);
var inst_24855 = cljs.core.async.take_BANG_.call(null,inst_24853,inst_24854);
var state_24880__$1 = state_24880;
var statearr_24894_24919 = state_24880__$1;
(statearr_24894_24919[(2)] = inst_24855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (9))){
var inst_24844 = (state_24880[(7)]);
var inst_24857 = (state_24880[(2)]);
var inst_24858 = (inst_24844 + (1));
var inst_24844__$1 = inst_24858;
var state_24880__$1 = (function (){var statearr_24895 = state_24880;
(statearr_24895[(7)] = inst_24844__$1);

(statearr_24895[(10)] = inst_24857);

return statearr_24895;
})();
var statearr_24896_24920 = state_24880__$1;
(statearr_24896_24920[(2)] = null);

(statearr_24896_24920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (5))){
var inst_24864 = (state_24880[(2)]);
var state_24880__$1 = (function (){var statearr_24897 = state_24880;
(statearr_24897[(11)] = inst_24864);

return statearr_24897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24880__$1,(12),dchan);
} else {
if((state_val_24881 === (14))){
var inst_24866 = (state_24880[(8)]);
var inst_24871 = cljs.core.apply.call(null,f,inst_24866);
var state_24880__$1 = state_24880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24880__$1,(16),out,inst_24871);
} else {
if((state_val_24881 === (16))){
var inst_24873 = (state_24880[(2)]);
var state_24880__$1 = (function (){var statearr_24898 = state_24880;
(statearr_24898[(12)] = inst_24873);

return statearr_24898;
})();
var statearr_24899_24921 = state_24880__$1;
(statearr_24899_24921[(2)] = null);

(statearr_24899_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (10))){
var inst_24848 = (state_24880[(2)]);
var inst_24849 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24880__$1 = (function (){var statearr_24900 = state_24880;
(statearr_24900[(13)] = inst_24848);

return statearr_24900;
})();
var statearr_24901_24922 = state_24880__$1;
(statearr_24901_24922[(2)] = inst_24849);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (8))){
var inst_24862 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24902_24923 = state_24880__$1;
(statearr_24902_24923[(2)] = inst_24862);

(statearr_24902_24923[(1)] = (5));


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
});})(c__23570__auto___24908,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23475__auto__,c__23570__auto___24908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24903[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24903[(1)] = (1));

return statearr_24903;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24880){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24904){if((e24904 instanceof Object)){
var ex__23479__auto__ = e24904;
var statearr_24905_24924 = state_24880;
(statearr_24905_24924[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24925 = state_24880;
state_24880 = G__24925;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___24908,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23572__auto__ = (function (){var statearr_24906 = f__23571__auto__.call(null);
(statearr_24906[(6)] = c__23570__auto___24908);

return statearr_24906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___24908,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24928 = arguments.length;
switch (G__24928) {
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
var c__23570__auto___24982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___24982,out){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___24982,out){
return (function (state_24960){
var state_val_24961 = (state_24960[(1)]);
if((state_val_24961 === (7))){
var inst_24939 = (state_24960[(7)]);
var inst_24940 = (state_24960[(8)]);
var inst_24939__$1 = (state_24960[(2)]);
var inst_24940__$1 = cljs.core.nth.call(null,inst_24939__$1,(0),null);
var inst_24941 = cljs.core.nth.call(null,inst_24939__$1,(1),null);
var inst_24942 = (inst_24940__$1 == null);
var state_24960__$1 = (function (){var statearr_24962 = state_24960;
(statearr_24962[(7)] = inst_24939__$1);

(statearr_24962[(8)] = inst_24940__$1);

(statearr_24962[(9)] = inst_24941);

return statearr_24962;
})();
if(cljs.core.truth_(inst_24942)){
var statearr_24963_24983 = state_24960__$1;
(statearr_24963_24983[(1)] = (8));

} else {
var statearr_24964_24984 = state_24960__$1;
(statearr_24964_24984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24961 === (1))){
var inst_24929 = cljs.core.vec.call(null,chs);
var inst_24930 = inst_24929;
var state_24960__$1 = (function (){var statearr_24965 = state_24960;
(statearr_24965[(10)] = inst_24930);

return statearr_24965;
})();
var statearr_24966_24985 = state_24960__$1;
(statearr_24966_24985[(2)] = null);

(statearr_24966_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24961 === (4))){
var inst_24930 = (state_24960[(10)]);
var state_24960__$1 = state_24960;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24960__$1,(7),inst_24930);
} else {
if((state_val_24961 === (6))){
var inst_24956 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
var statearr_24967_24986 = state_24960__$1;
(statearr_24967_24986[(2)] = inst_24956);

(statearr_24967_24986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24961 === (3))){
var inst_24958 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24960__$1,inst_24958);
} else {
if((state_val_24961 === (2))){
var inst_24930 = (state_24960[(10)]);
var inst_24932 = cljs.core.count.call(null,inst_24930);
var inst_24933 = (inst_24932 > (0));
var state_24960__$1 = state_24960;
if(cljs.core.truth_(inst_24933)){
var statearr_24969_24987 = state_24960__$1;
(statearr_24969_24987[(1)] = (4));

} else {
var statearr_24970_24988 = state_24960__$1;
(statearr_24970_24988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24961 === (11))){
var inst_24930 = (state_24960[(10)]);
var inst_24949 = (state_24960[(2)]);
var tmp24968 = inst_24930;
var inst_24930__$1 = tmp24968;
var state_24960__$1 = (function (){var statearr_24971 = state_24960;
(statearr_24971[(10)] = inst_24930__$1);

(statearr_24971[(11)] = inst_24949);

return statearr_24971;
})();
var statearr_24972_24989 = state_24960__$1;
(statearr_24972_24989[(2)] = null);

(statearr_24972_24989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24961 === (9))){
var inst_24940 = (state_24960[(8)]);
var state_24960__$1 = state_24960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24960__$1,(11),out,inst_24940);
} else {
if((state_val_24961 === (5))){
var inst_24954 = cljs.core.async.close_BANG_.call(null,out);
var state_24960__$1 = state_24960;
var statearr_24973_24990 = state_24960__$1;
(statearr_24973_24990[(2)] = inst_24954);

(statearr_24973_24990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24961 === (10))){
var inst_24952 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
var statearr_24974_24991 = state_24960__$1;
(statearr_24974_24991[(2)] = inst_24952);

(statearr_24974_24991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24961 === (8))){
var inst_24939 = (state_24960[(7)]);
var inst_24930 = (state_24960[(10)]);
var inst_24940 = (state_24960[(8)]);
var inst_24941 = (state_24960[(9)]);
var inst_24944 = (function (){var cs = inst_24930;
var vec__24935 = inst_24939;
var v = inst_24940;
var c = inst_24941;
return ((function (cs,vec__24935,v,c,inst_24939,inst_24930,inst_24940,inst_24941,state_val_24961,c__23570__auto___24982,out){
return (function (p1__24926_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24926_SHARP_);
});
;})(cs,vec__24935,v,c,inst_24939,inst_24930,inst_24940,inst_24941,state_val_24961,c__23570__auto___24982,out))
})();
var inst_24945 = cljs.core.filterv.call(null,inst_24944,inst_24930);
var inst_24930__$1 = inst_24945;
var state_24960__$1 = (function (){var statearr_24975 = state_24960;
(statearr_24975[(10)] = inst_24930__$1);

return statearr_24975;
})();
var statearr_24976_24992 = state_24960__$1;
(statearr_24976_24992[(2)] = null);

(statearr_24976_24992[(1)] = (2));


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
});})(c__23570__auto___24982,out))
;
return ((function (switch__23475__auto__,c__23570__auto___24982,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_24977 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24977[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_24977[(1)] = (1));

return statearr_24977;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_24960){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_24960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object)){
var ex__23479__auto__ = e24978;
var statearr_24979_24993 = state_24960;
(statearr_24979_24993[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24994 = state_24960;
state_24960 = G__24994;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_24960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_24960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___24982,out))
})();
var state__23572__auto__ = (function (){var statearr_24980 = f__23571__auto__.call(null);
(statearr_24980[(6)] = c__23570__auto___24982);

return statearr_24980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___24982,out))
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
var G__24996 = arguments.length;
switch (G__24996) {
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
var c__23570__auto___25041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___25041,out){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___25041,out){
return (function (state_25020){
var state_val_25021 = (state_25020[(1)]);
if((state_val_25021 === (7))){
var inst_25002 = (state_25020[(7)]);
var inst_25002__$1 = (state_25020[(2)]);
var inst_25003 = (inst_25002__$1 == null);
var inst_25004 = cljs.core.not.call(null,inst_25003);
var state_25020__$1 = (function (){var statearr_25022 = state_25020;
(statearr_25022[(7)] = inst_25002__$1);

return statearr_25022;
})();
if(inst_25004){
var statearr_25023_25042 = state_25020__$1;
(statearr_25023_25042[(1)] = (8));

} else {
var statearr_25024_25043 = state_25020__$1;
(statearr_25024_25043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (1))){
var inst_24997 = (0);
var state_25020__$1 = (function (){var statearr_25025 = state_25020;
(statearr_25025[(8)] = inst_24997);

return statearr_25025;
})();
var statearr_25026_25044 = state_25020__$1;
(statearr_25026_25044[(2)] = null);

(statearr_25026_25044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (4))){
var state_25020__$1 = state_25020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25020__$1,(7),ch);
} else {
if((state_val_25021 === (6))){
var inst_25015 = (state_25020[(2)]);
var state_25020__$1 = state_25020;
var statearr_25027_25045 = state_25020__$1;
(statearr_25027_25045[(2)] = inst_25015);

(statearr_25027_25045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (3))){
var inst_25017 = (state_25020[(2)]);
var inst_25018 = cljs.core.async.close_BANG_.call(null,out);
var state_25020__$1 = (function (){var statearr_25028 = state_25020;
(statearr_25028[(9)] = inst_25017);

return statearr_25028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25020__$1,inst_25018);
} else {
if((state_val_25021 === (2))){
var inst_24997 = (state_25020[(8)]);
var inst_24999 = (inst_24997 < n);
var state_25020__$1 = state_25020;
if(cljs.core.truth_(inst_24999)){
var statearr_25029_25046 = state_25020__$1;
(statearr_25029_25046[(1)] = (4));

} else {
var statearr_25030_25047 = state_25020__$1;
(statearr_25030_25047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (11))){
var inst_24997 = (state_25020[(8)]);
var inst_25007 = (state_25020[(2)]);
var inst_25008 = (inst_24997 + (1));
var inst_24997__$1 = inst_25008;
var state_25020__$1 = (function (){var statearr_25031 = state_25020;
(statearr_25031[(8)] = inst_24997__$1);

(statearr_25031[(10)] = inst_25007);

return statearr_25031;
})();
var statearr_25032_25048 = state_25020__$1;
(statearr_25032_25048[(2)] = null);

(statearr_25032_25048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (9))){
var state_25020__$1 = state_25020;
var statearr_25033_25049 = state_25020__$1;
(statearr_25033_25049[(2)] = null);

(statearr_25033_25049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (5))){
var state_25020__$1 = state_25020;
var statearr_25034_25050 = state_25020__$1;
(statearr_25034_25050[(2)] = null);

(statearr_25034_25050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (10))){
var inst_25012 = (state_25020[(2)]);
var state_25020__$1 = state_25020;
var statearr_25035_25051 = state_25020__$1;
(statearr_25035_25051[(2)] = inst_25012);

(statearr_25035_25051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25021 === (8))){
var inst_25002 = (state_25020[(7)]);
var state_25020__$1 = state_25020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25020__$1,(11),out,inst_25002);
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
});})(c__23570__auto___25041,out))
;
return ((function (switch__23475__auto__,c__23570__auto___25041,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25036[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25036[(1)] = (1));

return statearr_25036;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25020){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25037){if((e25037 instanceof Object)){
var ex__23479__auto__ = e25037;
var statearr_25038_25052 = state_25020;
(statearr_25038_25052[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25053 = state_25020;
state_25020 = G__25053;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___25041,out))
})();
var state__23572__auto__ = (function (){var statearr_25039 = f__23571__auto__.call(null);
(statearr_25039[(6)] = c__23570__auto___25041);

return statearr_25039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___25041,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25055 = (function (f,ch,meta25056){
this.f = f;
this.ch = ch;
this.meta25056 = meta25056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25057,meta25056__$1){
var self__ = this;
var _25057__$1 = this;
return (new cljs.core.async.t_cljs$core$async25055(self__.f,self__.ch,meta25056__$1));
});

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25057){
var self__ = this;
var _25057__$1 = this;
return self__.meta25056;
});

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25058 = (function (f,ch,meta25056,_,fn1,meta25059){
this.f = f;
this.ch = ch;
this.meta25056 = meta25056;
this._ = _;
this.fn1 = fn1;
this.meta25059 = meta25059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25060,meta25059__$1){
var self__ = this;
var _25060__$1 = this;
return (new cljs.core.async.t_cljs$core$async25058(self__.f,self__.ch,self__.meta25056,self__._,self__.fn1,meta25059__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25060){
var self__ = this;
var _25060__$1 = this;
return self__.meta25059;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25054_SHARP_){
return f1.call(null,(((p1__25054_SHARP_ == null))?null:self__.f.call(null,p1__25054_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25058.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25056","meta25056",1318552678,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25055","cljs.core.async/t_cljs$core$async25055",-433084620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25059","meta25059",-948214575,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25058";

cljs.core.async.t_cljs$core$async25058.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25058");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25058.
 */
cljs.core.async.__GT_t_cljs$core$async25058 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25058(f__$1,ch__$1,meta25056__$1,___$2,fn1__$1,meta25059){
return (new cljs.core.async.t_cljs$core$async25058(f__$1,ch__$1,meta25056__$1,___$2,fn1__$1,meta25059));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25058(self__.f,self__.ch,self__.meta25056,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25056","meta25056",1318552678,null)], null);
});

cljs.core.async.t_cljs$core$async25055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25055";

cljs.core.async.t_cljs$core$async25055.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25055");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25055.
 */
cljs.core.async.__GT_t_cljs$core$async25055 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25055(f__$1,ch__$1,meta25056){
return (new cljs.core.async.t_cljs$core$async25055(f__$1,ch__$1,meta25056));
});

}

return (new cljs.core.async.t_cljs$core$async25055(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25061 = (function (f,ch,meta25062){
this.f = f;
this.ch = ch;
this.meta25062 = meta25062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25063,meta25062__$1){
var self__ = this;
var _25063__$1 = this;
return (new cljs.core.async.t_cljs$core$async25061(self__.f,self__.ch,meta25062__$1));
});

cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25063){
var self__ = this;
var _25063__$1 = this;
return self__.meta25062;
});

cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25062","meta25062",-939711402,null)], null);
});

cljs.core.async.t_cljs$core$async25061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25061";

cljs.core.async.t_cljs$core$async25061.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25061");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25061.
 */
cljs.core.async.__GT_t_cljs$core$async25061 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25061(f__$1,ch__$1,meta25062){
return (new cljs.core.async.t_cljs$core$async25061(f__$1,ch__$1,meta25062));
});

}

return (new cljs.core.async.t_cljs$core$async25061(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25064 = (function (p,ch,meta25065){
this.p = p;
this.ch = ch;
this.meta25065 = meta25065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25066,meta25065__$1){
var self__ = this;
var _25066__$1 = this;
return (new cljs.core.async.t_cljs$core$async25064(self__.p,self__.ch,meta25065__$1));
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25066){
var self__ = this;
var _25066__$1 = this;
return self__.meta25065;
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25065","meta25065",-755491505,null)], null);
});

cljs.core.async.t_cljs$core$async25064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25064";

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25064");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25064.
 */
cljs.core.async.__GT_t_cljs$core$async25064 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25064(p__$1,ch__$1,meta25065){
return (new cljs.core.async.t_cljs$core$async25064(p__$1,ch__$1,meta25065));
});

}

return (new cljs.core.async.t_cljs$core$async25064(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25068 = arguments.length;
switch (G__25068) {
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
var c__23570__auto___25108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___25108,out){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___25108,out){
return (function (state_25089){
var state_val_25090 = (state_25089[(1)]);
if((state_val_25090 === (7))){
var inst_25085 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25091_25109 = state_25089__$1;
(statearr_25091_25109[(2)] = inst_25085);

(statearr_25091_25109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (1))){
var state_25089__$1 = state_25089;
var statearr_25092_25110 = state_25089__$1;
(statearr_25092_25110[(2)] = null);

(statearr_25092_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (4))){
var inst_25071 = (state_25089[(7)]);
var inst_25071__$1 = (state_25089[(2)]);
var inst_25072 = (inst_25071__$1 == null);
var state_25089__$1 = (function (){var statearr_25093 = state_25089;
(statearr_25093[(7)] = inst_25071__$1);

return statearr_25093;
})();
if(cljs.core.truth_(inst_25072)){
var statearr_25094_25111 = state_25089__$1;
(statearr_25094_25111[(1)] = (5));

} else {
var statearr_25095_25112 = state_25089__$1;
(statearr_25095_25112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (6))){
var inst_25071 = (state_25089[(7)]);
var inst_25076 = p.call(null,inst_25071);
var state_25089__$1 = state_25089;
if(cljs.core.truth_(inst_25076)){
var statearr_25096_25113 = state_25089__$1;
(statearr_25096_25113[(1)] = (8));

} else {
var statearr_25097_25114 = state_25089__$1;
(statearr_25097_25114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (3))){
var inst_25087 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25089__$1,inst_25087);
} else {
if((state_val_25090 === (2))){
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25089__$1,(4),ch);
} else {
if((state_val_25090 === (11))){
var inst_25079 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25098_25115 = state_25089__$1;
(statearr_25098_25115[(2)] = inst_25079);

(statearr_25098_25115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (9))){
var state_25089__$1 = state_25089;
var statearr_25099_25116 = state_25089__$1;
(statearr_25099_25116[(2)] = null);

(statearr_25099_25116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (5))){
var inst_25074 = cljs.core.async.close_BANG_.call(null,out);
var state_25089__$1 = state_25089;
var statearr_25100_25117 = state_25089__$1;
(statearr_25100_25117[(2)] = inst_25074);

(statearr_25100_25117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (10))){
var inst_25082 = (state_25089[(2)]);
var state_25089__$1 = (function (){var statearr_25101 = state_25089;
(statearr_25101[(8)] = inst_25082);

return statearr_25101;
})();
var statearr_25102_25118 = state_25089__$1;
(statearr_25102_25118[(2)] = null);

(statearr_25102_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (8))){
var inst_25071 = (state_25089[(7)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25089__$1,(11),out,inst_25071);
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
});})(c__23570__auto___25108,out))
;
return ((function (switch__23475__auto__,c__23570__auto___25108,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25103 = [null,null,null,null,null,null,null,null,null];
(statearr_25103[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25103[(1)] = (1));

return statearr_25103;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25089){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25104){if((e25104 instanceof Object)){
var ex__23479__auto__ = e25104;
var statearr_25105_25119 = state_25089;
(statearr_25105_25119[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25120 = state_25089;
state_25089 = G__25120;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___25108,out))
})();
var state__23572__auto__ = (function (){var statearr_25106 = f__23571__auto__.call(null);
(statearr_25106[(6)] = c__23570__auto___25108);

return statearr_25106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___25108,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25122 = arguments.length;
switch (G__25122) {
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
var c__23570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto__){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto__){
return (function (state_25185){
var state_val_25186 = (state_25185[(1)]);
if((state_val_25186 === (7))){
var inst_25181 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25187_25225 = state_25185__$1;
(statearr_25187_25225[(2)] = inst_25181);

(statearr_25187_25225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (20))){
var inst_25151 = (state_25185[(7)]);
var inst_25162 = (state_25185[(2)]);
var inst_25163 = cljs.core.next.call(null,inst_25151);
var inst_25137 = inst_25163;
var inst_25138 = null;
var inst_25139 = (0);
var inst_25140 = (0);
var state_25185__$1 = (function (){var statearr_25188 = state_25185;
(statearr_25188[(8)] = inst_25162);

(statearr_25188[(9)] = inst_25140);

(statearr_25188[(10)] = inst_25138);

(statearr_25188[(11)] = inst_25139);

(statearr_25188[(12)] = inst_25137);

return statearr_25188;
})();
var statearr_25189_25226 = state_25185__$1;
(statearr_25189_25226[(2)] = null);

(statearr_25189_25226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (1))){
var state_25185__$1 = state_25185;
var statearr_25190_25227 = state_25185__$1;
(statearr_25190_25227[(2)] = null);

(statearr_25190_25227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (4))){
var inst_25126 = (state_25185[(13)]);
var inst_25126__$1 = (state_25185[(2)]);
var inst_25127 = (inst_25126__$1 == null);
var state_25185__$1 = (function (){var statearr_25191 = state_25185;
(statearr_25191[(13)] = inst_25126__$1);

return statearr_25191;
})();
if(cljs.core.truth_(inst_25127)){
var statearr_25192_25228 = state_25185__$1;
(statearr_25192_25228[(1)] = (5));

} else {
var statearr_25193_25229 = state_25185__$1;
(statearr_25193_25229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (15))){
var state_25185__$1 = state_25185;
var statearr_25197_25230 = state_25185__$1;
(statearr_25197_25230[(2)] = null);

(statearr_25197_25230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (21))){
var state_25185__$1 = state_25185;
var statearr_25198_25231 = state_25185__$1;
(statearr_25198_25231[(2)] = null);

(statearr_25198_25231[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (13))){
var inst_25140 = (state_25185[(9)]);
var inst_25138 = (state_25185[(10)]);
var inst_25139 = (state_25185[(11)]);
var inst_25137 = (state_25185[(12)]);
var inst_25147 = (state_25185[(2)]);
var inst_25148 = (inst_25140 + (1));
var tmp25194 = inst_25138;
var tmp25195 = inst_25139;
var tmp25196 = inst_25137;
var inst_25137__$1 = tmp25196;
var inst_25138__$1 = tmp25194;
var inst_25139__$1 = tmp25195;
var inst_25140__$1 = inst_25148;
var state_25185__$1 = (function (){var statearr_25199 = state_25185;
(statearr_25199[(9)] = inst_25140__$1);

(statearr_25199[(10)] = inst_25138__$1);

(statearr_25199[(14)] = inst_25147);

(statearr_25199[(11)] = inst_25139__$1);

(statearr_25199[(12)] = inst_25137__$1);

return statearr_25199;
})();
var statearr_25200_25232 = state_25185__$1;
(statearr_25200_25232[(2)] = null);

(statearr_25200_25232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (22))){
var state_25185__$1 = state_25185;
var statearr_25201_25233 = state_25185__$1;
(statearr_25201_25233[(2)] = null);

(statearr_25201_25233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (6))){
var inst_25126 = (state_25185[(13)]);
var inst_25135 = f.call(null,inst_25126);
var inst_25136 = cljs.core.seq.call(null,inst_25135);
var inst_25137 = inst_25136;
var inst_25138 = null;
var inst_25139 = (0);
var inst_25140 = (0);
var state_25185__$1 = (function (){var statearr_25202 = state_25185;
(statearr_25202[(9)] = inst_25140);

(statearr_25202[(10)] = inst_25138);

(statearr_25202[(11)] = inst_25139);

(statearr_25202[(12)] = inst_25137);

return statearr_25202;
})();
var statearr_25203_25234 = state_25185__$1;
(statearr_25203_25234[(2)] = null);

(statearr_25203_25234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (17))){
var inst_25151 = (state_25185[(7)]);
var inst_25155 = cljs.core.chunk_first.call(null,inst_25151);
var inst_25156 = cljs.core.chunk_rest.call(null,inst_25151);
var inst_25157 = cljs.core.count.call(null,inst_25155);
var inst_25137 = inst_25156;
var inst_25138 = inst_25155;
var inst_25139 = inst_25157;
var inst_25140 = (0);
var state_25185__$1 = (function (){var statearr_25204 = state_25185;
(statearr_25204[(9)] = inst_25140);

(statearr_25204[(10)] = inst_25138);

(statearr_25204[(11)] = inst_25139);

(statearr_25204[(12)] = inst_25137);

return statearr_25204;
})();
var statearr_25205_25235 = state_25185__$1;
(statearr_25205_25235[(2)] = null);

(statearr_25205_25235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (3))){
var inst_25183 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25185__$1,inst_25183);
} else {
if((state_val_25186 === (12))){
var inst_25171 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25206_25236 = state_25185__$1;
(statearr_25206_25236[(2)] = inst_25171);

(statearr_25206_25236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (2))){
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25185__$1,(4),in$);
} else {
if((state_val_25186 === (23))){
var inst_25179 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25207_25237 = state_25185__$1;
(statearr_25207_25237[(2)] = inst_25179);

(statearr_25207_25237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (19))){
var inst_25166 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25208_25238 = state_25185__$1;
(statearr_25208_25238[(2)] = inst_25166);

(statearr_25208_25238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (11))){
var inst_25137 = (state_25185[(12)]);
var inst_25151 = (state_25185[(7)]);
var inst_25151__$1 = cljs.core.seq.call(null,inst_25137);
var state_25185__$1 = (function (){var statearr_25209 = state_25185;
(statearr_25209[(7)] = inst_25151__$1);

return statearr_25209;
})();
if(inst_25151__$1){
var statearr_25210_25239 = state_25185__$1;
(statearr_25210_25239[(1)] = (14));

} else {
var statearr_25211_25240 = state_25185__$1;
(statearr_25211_25240[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (9))){
var inst_25173 = (state_25185[(2)]);
var inst_25174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25185__$1 = (function (){var statearr_25212 = state_25185;
(statearr_25212[(15)] = inst_25173);

return statearr_25212;
})();
if(cljs.core.truth_(inst_25174)){
var statearr_25213_25241 = state_25185__$1;
(statearr_25213_25241[(1)] = (21));

} else {
var statearr_25214_25242 = state_25185__$1;
(statearr_25214_25242[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (5))){
var inst_25129 = cljs.core.async.close_BANG_.call(null,out);
var state_25185__$1 = state_25185;
var statearr_25215_25243 = state_25185__$1;
(statearr_25215_25243[(2)] = inst_25129);

(statearr_25215_25243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (14))){
var inst_25151 = (state_25185[(7)]);
var inst_25153 = cljs.core.chunked_seq_QMARK_.call(null,inst_25151);
var state_25185__$1 = state_25185;
if(inst_25153){
var statearr_25216_25244 = state_25185__$1;
(statearr_25216_25244[(1)] = (17));

} else {
var statearr_25217_25245 = state_25185__$1;
(statearr_25217_25245[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (16))){
var inst_25169 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25218_25246 = state_25185__$1;
(statearr_25218_25246[(2)] = inst_25169);

(statearr_25218_25246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25186 === (10))){
var inst_25140 = (state_25185[(9)]);
var inst_25138 = (state_25185[(10)]);
var inst_25145 = cljs.core._nth.call(null,inst_25138,inst_25140);
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25185__$1,(13),out,inst_25145);
} else {
if((state_val_25186 === (18))){
var inst_25151 = (state_25185[(7)]);
var inst_25160 = cljs.core.first.call(null,inst_25151);
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25185__$1,(20),out,inst_25160);
} else {
if((state_val_25186 === (8))){
var inst_25140 = (state_25185[(9)]);
var inst_25139 = (state_25185[(11)]);
var inst_25142 = (inst_25140 < inst_25139);
var inst_25143 = inst_25142;
var state_25185__$1 = state_25185;
if(cljs.core.truth_(inst_25143)){
var statearr_25219_25247 = state_25185__$1;
(statearr_25219_25247[(1)] = (10));

} else {
var statearr_25220_25248 = state_25185__$1;
(statearr_25220_25248[(1)] = (11));

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
});})(c__23570__auto__))
;
return ((function (switch__23475__auto__,c__23570__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____0 = (function (){
var statearr_25221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__);

(statearr_25221[(1)] = (1));

return statearr_25221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____1 = (function (state_25185){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object)){
var ex__23479__auto__ = e25222;
var statearr_25223_25249 = state_25185;
(statearr_25223_25249[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25250 = state_25185;
state_25185 = G__25250;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__ = function(state_25185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____1.call(this,state_25185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23476__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto__))
})();
var state__23572__auto__ = (function (){var statearr_25224 = f__23571__auto__.call(null);
(statearr_25224[(6)] = c__23570__auto__);

return statearr_25224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto__))
);

return c__23570__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25252 = arguments.length;
switch (G__25252) {
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
var G__25255 = arguments.length;
switch (G__25255) {
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
var G__25258 = arguments.length;
switch (G__25258) {
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
var c__23570__auto___25305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___25305,out){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___25305,out){
return (function (state_25282){
var state_val_25283 = (state_25282[(1)]);
if((state_val_25283 === (7))){
var inst_25277 = (state_25282[(2)]);
var state_25282__$1 = state_25282;
var statearr_25284_25306 = state_25282__$1;
(statearr_25284_25306[(2)] = inst_25277);

(statearr_25284_25306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (1))){
var inst_25259 = null;
var state_25282__$1 = (function (){var statearr_25285 = state_25282;
(statearr_25285[(7)] = inst_25259);

return statearr_25285;
})();
var statearr_25286_25307 = state_25282__$1;
(statearr_25286_25307[(2)] = null);

(statearr_25286_25307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (4))){
var inst_25262 = (state_25282[(8)]);
var inst_25262__$1 = (state_25282[(2)]);
var inst_25263 = (inst_25262__$1 == null);
var inst_25264 = cljs.core.not.call(null,inst_25263);
var state_25282__$1 = (function (){var statearr_25287 = state_25282;
(statearr_25287[(8)] = inst_25262__$1);

return statearr_25287;
})();
if(inst_25264){
var statearr_25288_25308 = state_25282__$1;
(statearr_25288_25308[(1)] = (5));

} else {
var statearr_25289_25309 = state_25282__$1;
(statearr_25289_25309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (6))){
var state_25282__$1 = state_25282;
var statearr_25290_25310 = state_25282__$1;
(statearr_25290_25310[(2)] = null);

(statearr_25290_25310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (3))){
var inst_25279 = (state_25282[(2)]);
var inst_25280 = cljs.core.async.close_BANG_.call(null,out);
var state_25282__$1 = (function (){var statearr_25291 = state_25282;
(statearr_25291[(9)] = inst_25279);

return statearr_25291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25282__$1,inst_25280);
} else {
if((state_val_25283 === (2))){
var state_25282__$1 = state_25282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25282__$1,(4),ch);
} else {
if((state_val_25283 === (11))){
var inst_25262 = (state_25282[(8)]);
var inst_25271 = (state_25282[(2)]);
var inst_25259 = inst_25262;
var state_25282__$1 = (function (){var statearr_25292 = state_25282;
(statearr_25292[(7)] = inst_25259);

(statearr_25292[(10)] = inst_25271);

return statearr_25292;
})();
var statearr_25293_25311 = state_25282__$1;
(statearr_25293_25311[(2)] = null);

(statearr_25293_25311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (9))){
var inst_25262 = (state_25282[(8)]);
var state_25282__$1 = state_25282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25282__$1,(11),out,inst_25262);
} else {
if((state_val_25283 === (5))){
var inst_25259 = (state_25282[(7)]);
var inst_25262 = (state_25282[(8)]);
var inst_25266 = cljs.core._EQ_.call(null,inst_25262,inst_25259);
var state_25282__$1 = state_25282;
if(inst_25266){
var statearr_25295_25312 = state_25282__$1;
(statearr_25295_25312[(1)] = (8));

} else {
var statearr_25296_25313 = state_25282__$1;
(statearr_25296_25313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (10))){
var inst_25274 = (state_25282[(2)]);
var state_25282__$1 = state_25282;
var statearr_25297_25314 = state_25282__$1;
(statearr_25297_25314[(2)] = inst_25274);

(statearr_25297_25314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (8))){
var inst_25259 = (state_25282[(7)]);
var tmp25294 = inst_25259;
var inst_25259__$1 = tmp25294;
var state_25282__$1 = (function (){var statearr_25298 = state_25282;
(statearr_25298[(7)] = inst_25259__$1);

return statearr_25298;
})();
var statearr_25299_25315 = state_25282__$1;
(statearr_25299_25315[(2)] = null);

(statearr_25299_25315[(1)] = (2));


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
});})(c__23570__auto___25305,out))
;
return ((function (switch__23475__auto__,c__23570__auto___25305,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25300[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25300[(1)] = (1));

return statearr_25300;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25282){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25301){if((e25301 instanceof Object)){
var ex__23479__auto__ = e25301;
var statearr_25302_25316 = state_25282;
(statearr_25302_25316[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25317 = state_25282;
state_25282 = G__25317;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___25305,out))
})();
var state__23572__auto__ = (function (){var statearr_25303 = f__23571__auto__.call(null);
(statearr_25303[(6)] = c__23570__auto___25305);

return statearr_25303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___25305,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25319 = arguments.length;
switch (G__25319) {
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
var c__23570__auto___25385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___25385,out){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___25385,out){
return (function (state_25357){
var state_val_25358 = (state_25357[(1)]);
if((state_val_25358 === (7))){
var inst_25353 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25359_25386 = state_25357__$1;
(statearr_25359_25386[(2)] = inst_25353);

(statearr_25359_25386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (1))){
var inst_25320 = (new Array(n));
var inst_25321 = inst_25320;
var inst_25322 = (0);
var state_25357__$1 = (function (){var statearr_25360 = state_25357;
(statearr_25360[(7)] = inst_25322);

(statearr_25360[(8)] = inst_25321);

return statearr_25360;
})();
var statearr_25361_25387 = state_25357__$1;
(statearr_25361_25387[(2)] = null);

(statearr_25361_25387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (4))){
var inst_25325 = (state_25357[(9)]);
var inst_25325__$1 = (state_25357[(2)]);
var inst_25326 = (inst_25325__$1 == null);
var inst_25327 = cljs.core.not.call(null,inst_25326);
var state_25357__$1 = (function (){var statearr_25362 = state_25357;
(statearr_25362[(9)] = inst_25325__$1);

return statearr_25362;
})();
if(inst_25327){
var statearr_25363_25388 = state_25357__$1;
(statearr_25363_25388[(1)] = (5));

} else {
var statearr_25364_25389 = state_25357__$1;
(statearr_25364_25389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (15))){
var inst_25347 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25365_25390 = state_25357__$1;
(statearr_25365_25390[(2)] = inst_25347);

(statearr_25365_25390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (13))){
var state_25357__$1 = state_25357;
var statearr_25366_25391 = state_25357__$1;
(statearr_25366_25391[(2)] = null);

(statearr_25366_25391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (6))){
var inst_25322 = (state_25357[(7)]);
var inst_25343 = (inst_25322 > (0));
var state_25357__$1 = state_25357;
if(cljs.core.truth_(inst_25343)){
var statearr_25367_25392 = state_25357__$1;
(statearr_25367_25392[(1)] = (12));

} else {
var statearr_25368_25393 = state_25357__$1;
(statearr_25368_25393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (3))){
var inst_25355 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25357__$1,inst_25355);
} else {
if((state_val_25358 === (12))){
var inst_25321 = (state_25357[(8)]);
var inst_25345 = cljs.core.vec.call(null,inst_25321);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25357__$1,(15),out,inst_25345);
} else {
if((state_val_25358 === (2))){
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(4),ch);
} else {
if((state_val_25358 === (11))){
var inst_25337 = (state_25357[(2)]);
var inst_25338 = (new Array(n));
var inst_25321 = inst_25338;
var inst_25322 = (0);
var state_25357__$1 = (function (){var statearr_25369 = state_25357;
(statearr_25369[(7)] = inst_25322);

(statearr_25369[(10)] = inst_25337);

(statearr_25369[(8)] = inst_25321);

return statearr_25369;
})();
var statearr_25370_25394 = state_25357__$1;
(statearr_25370_25394[(2)] = null);

(statearr_25370_25394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (9))){
var inst_25321 = (state_25357[(8)]);
var inst_25335 = cljs.core.vec.call(null,inst_25321);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25357__$1,(11),out,inst_25335);
} else {
if((state_val_25358 === (5))){
var inst_25325 = (state_25357[(9)]);
var inst_25322 = (state_25357[(7)]);
var inst_25330 = (state_25357[(11)]);
var inst_25321 = (state_25357[(8)]);
var inst_25329 = (inst_25321[inst_25322] = inst_25325);
var inst_25330__$1 = (inst_25322 + (1));
var inst_25331 = (inst_25330__$1 < n);
var state_25357__$1 = (function (){var statearr_25371 = state_25357;
(statearr_25371[(12)] = inst_25329);

(statearr_25371[(11)] = inst_25330__$1);

return statearr_25371;
})();
if(cljs.core.truth_(inst_25331)){
var statearr_25372_25395 = state_25357__$1;
(statearr_25372_25395[(1)] = (8));

} else {
var statearr_25373_25396 = state_25357__$1;
(statearr_25373_25396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (14))){
var inst_25350 = (state_25357[(2)]);
var inst_25351 = cljs.core.async.close_BANG_.call(null,out);
var state_25357__$1 = (function (){var statearr_25375 = state_25357;
(statearr_25375[(13)] = inst_25350);

return statearr_25375;
})();
var statearr_25376_25397 = state_25357__$1;
(statearr_25376_25397[(2)] = inst_25351);

(statearr_25376_25397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (10))){
var inst_25341 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25377_25398 = state_25357__$1;
(statearr_25377_25398[(2)] = inst_25341);

(statearr_25377_25398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (8))){
var inst_25330 = (state_25357[(11)]);
var inst_25321 = (state_25357[(8)]);
var tmp25374 = inst_25321;
var inst_25321__$1 = tmp25374;
var inst_25322 = inst_25330;
var state_25357__$1 = (function (){var statearr_25378 = state_25357;
(statearr_25378[(7)] = inst_25322);

(statearr_25378[(8)] = inst_25321__$1);

return statearr_25378;
})();
var statearr_25379_25399 = state_25357__$1;
(statearr_25379_25399[(2)] = null);

(statearr_25379_25399[(1)] = (2));


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
});})(c__23570__auto___25385,out))
;
return ((function (switch__23475__auto__,c__23570__auto___25385,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25380[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25380[(1)] = (1));

return statearr_25380;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25357){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25381){if((e25381 instanceof Object)){
var ex__23479__auto__ = e25381;
var statearr_25382_25400 = state_25357;
(statearr_25382_25400[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25401 = state_25357;
state_25357 = G__25401;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___25385,out))
})();
var state__23572__auto__ = (function (){var statearr_25383 = f__23571__auto__.call(null);
(statearr_25383[(6)] = c__23570__auto___25385);

return statearr_25383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___25385,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25403 = arguments.length;
switch (G__25403) {
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
var c__23570__auto___25473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___25473,out){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___25473,out){
return (function (state_25445){
var state_val_25446 = (state_25445[(1)]);
if((state_val_25446 === (7))){
var inst_25441 = (state_25445[(2)]);
var state_25445__$1 = state_25445;
var statearr_25447_25474 = state_25445__$1;
(statearr_25447_25474[(2)] = inst_25441);

(statearr_25447_25474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (1))){
var inst_25404 = [];
var inst_25405 = inst_25404;
var inst_25406 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25445__$1 = (function (){var statearr_25448 = state_25445;
(statearr_25448[(7)] = inst_25405);

(statearr_25448[(8)] = inst_25406);

return statearr_25448;
})();
var statearr_25449_25475 = state_25445__$1;
(statearr_25449_25475[(2)] = null);

(statearr_25449_25475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (4))){
var inst_25409 = (state_25445[(9)]);
var inst_25409__$1 = (state_25445[(2)]);
var inst_25410 = (inst_25409__$1 == null);
var inst_25411 = cljs.core.not.call(null,inst_25410);
var state_25445__$1 = (function (){var statearr_25450 = state_25445;
(statearr_25450[(9)] = inst_25409__$1);

return statearr_25450;
})();
if(inst_25411){
var statearr_25451_25476 = state_25445__$1;
(statearr_25451_25476[(1)] = (5));

} else {
var statearr_25452_25477 = state_25445__$1;
(statearr_25452_25477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (15))){
var inst_25435 = (state_25445[(2)]);
var state_25445__$1 = state_25445;
var statearr_25453_25478 = state_25445__$1;
(statearr_25453_25478[(2)] = inst_25435);

(statearr_25453_25478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (13))){
var state_25445__$1 = state_25445;
var statearr_25454_25479 = state_25445__$1;
(statearr_25454_25479[(2)] = null);

(statearr_25454_25479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (6))){
var inst_25405 = (state_25445[(7)]);
var inst_25430 = inst_25405.length;
var inst_25431 = (inst_25430 > (0));
var state_25445__$1 = state_25445;
if(cljs.core.truth_(inst_25431)){
var statearr_25455_25480 = state_25445__$1;
(statearr_25455_25480[(1)] = (12));

} else {
var statearr_25456_25481 = state_25445__$1;
(statearr_25456_25481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (3))){
var inst_25443 = (state_25445[(2)]);
var state_25445__$1 = state_25445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25445__$1,inst_25443);
} else {
if((state_val_25446 === (12))){
var inst_25405 = (state_25445[(7)]);
var inst_25433 = cljs.core.vec.call(null,inst_25405);
var state_25445__$1 = state_25445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25445__$1,(15),out,inst_25433);
} else {
if((state_val_25446 === (2))){
var state_25445__$1 = state_25445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25445__$1,(4),ch);
} else {
if((state_val_25446 === (11))){
var inst_25413 = (state_25445[(10)]);
var inst_25409 = (state_25445[(9)]);
var inst_25423 = (state_25445[(2)]);
var inst_25424 = [];
var inst_25425 = inst_25424.push(inst_25409);
var inst_25405 = inst_25424;
var inst_25406 = inst_25413;
var state_25445__$1 = (function (){var statearr_25457 = state_25445;
(statearr_25457[(11)] = inst_25423);

(statearr_25457[(12)] = inst_25425);

(statearr_25457[(7)] = inst_25405);

(statearr_25457[(8)] = inst_25406);

return statearr_25457;
})();
var statearr_25458_25482 = state_25445__$1;
(statearr_25458_25482[(2)] = null);

(statearr_25458_25482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (9))){
var inst_25405 = (state_25445[(7)]);
var inst_25421 = cljs.core.vec.call(null,inst_25405);
var state_25445__$1 = state_25445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25445__$1,(11),out,inst_25421);
} else {
if((state_val_25446 === (5))){
var inst_25406 = (state_25445[(8)]);
var inst_25413 = (state_25445[(10)]);
var inst_25409 = (state_25445[(9)]);
var inst_25413__$1 = f.call(null,inst_25409);
var inst_25414 = cljs.core._EQ_.call(null,inst_25413__$1,inst_25406);
var inst_25415 = cljs.core.keyword_identical_QMARK_.call(null,inst_25406,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25416 = ((inst_25414) || (inst_25415));
var state_25445__$1 = (function (){var statearr_25459 = state_25445;
(statearr_25459[(10)] = inst_25413__$1);

return statearr_25459;
})();
if(cljs.core.truth_(inst_25416)){
var statearr_25460_25483 = state_25445__$1;
(statearr_25460_25483[(1)] = (8));

} else {
var statearr_25461_25484 = state_25445__$1;
(statearr_25461_25484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (14))){
var inst_25438 = (state_25445[(2)]);
var inst_25439 = cljs.core.async.close_BANG_.call(null,out);
var state_25445__$1 = (function (){var statearr_25463 = state_25445;
(statearr_25463[(13)] = inst_25438);

return statearr_25463;
})();
var statearr_25464_25485 = state_25445__$1;
(statearr_25464_25485[(2)] = inst_25439);

(statearr_25464_25485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (10))){
var inst_25428 = (state_25445[(2)]);
var state_25445__$1 = state_25445;
var statearr_25465_25486 = state_25445__$1;
(statearr_25465_25486[(2)] = inst_25428);

(statearr_25465_25486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25446 === (8))){
var inst_25405 = (state_25445[(7)]);
var inst_25413 = (state_25445[(10)]);
var inst_25409 = (state_25445[(9)]);
var inst_25418 = inst_25405.push(inst_25409);
var tmp25462 = inst_25405;
var inst_25405__$1 = tmp25462;
var inst_25406 = inst_25413;
var state_25445__$1 = (function (){var statearr_25466 = state_25445;
(statearr_25466[(7)] = inst_25405__$1);

(statearr_25466[(8)] = inst_25406);

(statearr_25466[(14)] = inst_25418);

return statearr_25466;
})();
var statearr_25467_25487 = state_25445__$1;
(statearr_25467_25487[(2)] = null);

(statearr_25467_25487[(1)] = (2));


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
});})(c__23570__auto___25473,out))
;
return ((function (switch__23475__auto__,c__23570__auto___25473,out){
return (function() {
var cljs$core$async$state_machine__23476__auto__ = null;
var cljs$core$async$state_machine__23476__auto____0 = (function (){
var statearr_25468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25468[(0)] = cljs$core$async$state_machine__23476__auto__);

(statearr_25468[(1)] = (1));

return statearr_25468;
});
var cljs$core$async$state_machine__23476__auto____1 = (function (state_25445){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_25445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e25469){if((e25469 instanceof Object)){
var ex__23479__auto__ = e25469;
var statearr_25470_25488 = state_25445;
(statearr_25470_25488[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25489 = state_25445;
state_25445 = G__25489;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
cljs$core$async$state_machine__23476__auto__ = function(state_25445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23476__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23476__auto____1.call(this,state_25445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23476__auto____0;
cljs$core$async$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23476__auto____1;
return cljs$core$async$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___25473,out))
})();
var state__23572__auto__ = (function (){var statearr_25471 = f__23571__auto__.call(null);
(statearr_25471[(6)] = c__23570__auto___25473);

return statearr_25471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___25473,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1600808337920
