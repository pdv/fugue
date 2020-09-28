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
var G__32780 = arguments.length;
switch (G__32780) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32781 = (function (f,blockable,meta32782){
this.f = f;
this.blockable = blockable;
this.meta32782 = meta32782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32783,meta32782__$1){
var self__ = this;
var _32783__$1 = this;
return (new cljs.core.async.t_cljs$core$async32781(self__.f,self__.blockable,meta32782__$1));
});

cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32783){
var self__ = this;
var _32783__$1 = this;
return self__.meta32782;
});

cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32782","meta32782",-1115054895,null)], null);
});

cljs.core.async.t_cljs$core$async32781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32781";

cljs.core.async.t_cljs$core$async32781.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32781");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32781.
 */
cljs.core.async.__GT_t_cljs$core$async32781 = (function cljs$core$async$__GT_t_cljs$core$async32781(f__$1,blockable__$1,meta32782){
return (new cljs.core.async.t_cljs$core$async32781(f__$1,blockable__$1,meta32782));
});

}

return (new cljs.core.async.t_cljs$core$async32781(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32787 = arguments.length;
switch (G__32787) {
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
var G__32790 = arguments.length;
switch (G__32790) {
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
var G__32793 = arguments.length;
switch (G__32793) {
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
var val_32795 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32795);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32795,ret){
return (function (){
return fn1.call(null,val_32795);
});})(val_32795,ret))
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
var G__32797 = arguments.length;
switch (G__32797) {
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
var n__4607__auto___32799 = n;
var x_32800 = (0);
while(true){
if((x_32800 < n__4607__auto___32799)){
(a[x_32800] = x_32800);

var G__32801 = (x_32800 + (1));
x_32800 = G__32801;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32802 = (function (flag,meta32803){
this.flag = flag;
this.meta32803 = meta32803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32804,meta32803__$1){
var self__ = this;
var _32804__$1 = this;
return (new cljs.core.async.t_cljs$core$async32802(self__.flag,meta32803__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32804){
var self__ = this;
var _32804__$1 = this;
return self__.meta32803;
});})(flag))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32802.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32803","meta32803",-1518347288,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32802";

cljs.core.async.t_cljs$core$async32802.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32802");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32802.
 */
cljs.core.async.__GT_t_cljs$core$async32802 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32802(flag__$1,meta32803){
return (new cljs.core.async.t_cljs$core$async32802(flag__$1,meta32803));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32802(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32805 = (function (flag,cb,meta32806){
this.flag = flag;
this.cb = cb;
this.meta32806 = meta32806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32807,meta32806__$1){
var self__ = this;
var _32807__$1 = this;
return (new cljs.core.async.t_cljs$core$async32805(self__.flag,self__.cb,meta32806__$1));
});

cljs.core.async.t_cljs$core$async32805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32807){
var self__ = this;
var _32807__$1 = this;
return self__.meta32806;
});

cljs.core.async.t_cljs$core$async32805.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32805.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32806","meta32806",-1339981579,null)], null);
});

cljs.core.async.t_cljs$core$async32805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32805";

cljs.core.async.t_cljs$core$async32805.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32805");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32805.
 */
cljs.core.async.__GT_t_cljs$core$async32805 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32805(flag__$1,cb__$1,meta32806){
return (new cljs.core.async.t_cljs$core$async32805(flag__$1,cb__$1,meta32806));
});

}

return (new cljs.core.async.t_cljs$core$async32805(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32808_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32808_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32809_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32809_SHARP_,port], null));
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
var G__32810 = (i + (1));
i = G__32810;
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
var len__4730__auto___32816 = arguments.length;
var i__4731__auto___32817 = (0);
while(true){
if((i__4731__auto___32817 < len__4730__auto___32816)){
args__4736__auto__.push((arguments[i__4731__auto___32817]));

var G__32818 = (i__4731__auto___32817 + (1));
i__4731__auto___32817 = G__32818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32813){
var map__32814 = p__32813;
var map__32814__$1 = (((((!((map__32814 == null))))?(((((map__32814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32814):map__32814);
var opts = map__32814__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32811){
var G__32812 = cljs.core.first.call(null,seq32811);
var seq32811__$1 = cljs.core.next.call(null,seq32811);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32812,seq32811__$1);
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
var G__32820 = arguments.length;
switch (G__32820) {
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
var c__32720__auto___32866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___32866){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___32866){
return (function (state_32844){
var state_val_32845 = (state_32844[(1)]);
if((state_val_32845 === (7))){
var inst_32840 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32846_32867 = state_32844__$1;
(statearr_32846_32867[(2)] = inst_32840);

(statearr_32846_32867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (1))){
var state_32844__$1 = state_32844;
var statearr_32847_32868 = state_32844__$1;
(statearr_32847_32868[(2)] = null);

(statearr_32847_32868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (4))){
var inst_32823 = (state_32844[(7)]);
var inst_32823__$1 = (state_32844[(2)]);
var inst_32824 = (inst_32823__$1 == null);
var state_32844__$1 = (function (){var statearr_32848 = state_32844;
(statearr_32848[(7)] = inst_32823__$1);

return statearr_32848;
})();
if(cljs.core.truth_(inst_32824)){
var statearr_32849_32869 = state_32844__$1;
(statearr_32849_32869[(1)] = (5));

} else {
var statearr_32850_32870 = state_32844__$1;
(statearr_32850_32870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (13))){
var state_32844__$1 = state_32844;
var statearr_32851_32871 = state_32844__$1;
(statearr_32851_32871[(2)] = null);

(statearr_32851_32871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (6))){
var inst_32823 = (state_32844[(7)]);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32844__$1,(11),to,inst_32823);
} else {
if((state_val_32845 === (3))){
var inst_32842 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32844__$1,inst_32842);
} else {
if((state_val_32845 === (12))){
var state_32844__$1 = state_32844;
var statearr_32852_32872 = state_32844__$1;
(statearr_32852_32872[(2)] = null);

(statearr_32852_32872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (2))){
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32844__$1,(4),from);
} else {
if((state_val_32845 === (11))){
var inst_32833 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
if(cljs.core.truth_(inst_32833)){
var statearr_32853_32873 = state_32844__$1;
(statearr_32853_32873[(1)] = (12));

} else {
var statearr_32854_32874 = state_32844__$1;
(statearr_32854_32874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (9))){
var state_32844__$1 = state_32844;
var statearr_32855_32875 = state_32844__$1;
(statearr_32855_32875[(2)] = null);

(statearr_32855_32875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (5))){
var state_32844__$1 = state_32844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32856_32876 = state_32844__$1;
(statearr_32856_32876[(1)] = (8));

} else {
var statearr_32857_32877 = state_32844__$1;
(statearr_32857_32877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (14))){
var inst_32838 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32858_32878 = state_32844__$1;
(statearr_32858_32878[(2)] = inst_32838);

(statearr_32858_32878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (10))){
var inst_32830 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32859_32879 = state_32844__$1;
(statearr_32859_32879[(2)] = inst_32830);

(statearr_32859_32879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (8))){
var inst_32827 = cljs.core.async.close_BANG_.call(null,to);
var state_32844__$1 = state_32844;
var statearr_32860_32880 = state_32844__$1;
(statearr_32860_32880[(2)] = inst_32827);

(statearr_32860_32880[(1)] = (10));


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
});})(c__32720__auto___32866))
;
return ((function (switch__32625__auto__,c__32720__auto___32866){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_32861 = [null,null,null,null,null,null,null,null];
(statearr_32861[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_32861[(1)] = (1));

return statearr_32861;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_32844){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_32844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e32862){if((e32862 instanceof Object)){
var ex__32629__auto__ = e32862;
var statearr_32863_32881 = state_32844;
(statearr_32863_32881[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32882 = state_32844;
state_32844 = G__32882;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_32844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_32844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___32866))
})();
var state__32722__auto__ = (function (){var statearr_32864 = f__32721__auto__.call(null);
(statearr_32864[(6)] = c__32720__auto___32866);

return statearr_32864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___32866))
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
return (function (p__32883){
var vec__32884 = p__32883;
var v = cljs.core.nth.call(null,vec__32884,(0),null);
var p = cljs.core.nth.call(null,vec__32884,(1),null);
var job = vec__32884;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32720__auto___33055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___33055,res,vec__32884,v,p,job,jobs,results){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___33055,res,vec__32884,v,p,job,jobs,results){
return (function (state_32891){
var state_val_32892 = (state_32891[(1)]);
if((state_val_32892 === (1))){
var state_32891__$1 = state_32891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32891__$1,(2),res,v);
} else {
if((state_val_32892 === (2))){
var inst_32888 = (state_32891[(2)]);
var inst_32889 = cljs.core.async.close_BANG_.call(null,res);
var state_32891__$1 = (function (){var statearr_32893 = state_32891;
(statearr_32893[(7)] = inst_32888);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32891__$1,inst_32889);
} else {
return null;
}
}
});})(c__32720__auto___33055,res,vec__32884,v,p,job,jobs,results))
;
return ((function (switch__32625__auto__,c__32720__auto___33055,res,vec__32884,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0 = (function (){
var statearr_32894 = [null,null,null,null,null,null,null,null];
(statearr_32894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__);

(statearr_32894[(1)] = (1));

return statearr_32894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1 = (function (state_32891){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_32891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e32895){if((e32895 instanceof Object)){
var ex__32629__auto__ = e32895;
var statearr_32896_33056 = state_32891;
(statearr_32896_33056[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33057 = state_32891;
state_32891 = G__33057;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = function(state_32891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1.call(this,state_32891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___33055,res,vec__32884,v,p,job,jobs,results))
})();
var state__32722__auto__ = (function (){var statearr_32897 = f__32721__auto__.call(null);
(statearr_32897[(6)] = c__32720__auto___33055);

return statearr_32897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___33055,res,vec__32884,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32898){
var vec__32899 = p__32898;
var v = cljs.core.nth.call(null,vec__32899,(0),null);
var p = cljs.core.nth.call(null,vec__32899,(1),null);
var job = vec__32899;
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
var n__4607__auto___33058 = n;
var __33059 = (0);
while(true){
if((__33059 < n__4607__auto___33058)){
var G__32902_33060 = type;
var G__32902_33061__$1 = (((G__32902_33060 instanceof cljs.core.Keyword))?G__32902_33060.fqn:null);
switch (G__32902_33061__$1) {
case "compute":
var c__32720__auto___33063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33059,c__32720__auto___33063,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (__33059,c__32720__auto___33063,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async){
return (function (state_32915){
var state_val_32916 = (state_32915[(1)]);
if((state_val_32916 === (1))){
var state_32915__$1 = state_32915;
var statearr_32917_33064 = state_32915__$1;
(statearr_32917_33064[(2)] = null);

(statearr_32917_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (2))){
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(4),jobs);
} else {
if((state_val_32916 === (3))){
var inst_32913 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32915__$1,inst_32913);
} else {
if((state_val_32916 === (4))){
var inst_32905 = (state_32915[(2)]);
var inst_32906 = process.call(null,inst_32905);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32906)){
var statearr_32918_33065 = state_32915__$1;
(statearr_32918_33065[(1)] = (5));

} else {
var statearr_32919_33066 = state_32915__$1;
(statearr_32919_33066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (5))){
var state_32915__$1 = state_32915;
var statearr_32920_33067 = state_32915__$1;
(statearr_32920_33067[(2)] = null);

(statearr_32920_33067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (6))){
var state_32915__$1 = state_32915;
var statearr_32921_33068 = state_32915__$1;
(statearr_32921_33068[(2)] = null);

(statearr_32921_33068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (7))){
var inst_32911 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32922_33069 = state_32915__$1;
(statearr_32922_33069[(2)] = inst_32911);

(statearr_32922_33069[(1)] = (3));


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
});})(__33059,c__32720__auto___33063,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async))
;
return ((function (__33059,switch__32625__auto__,c__32720__auto___33063,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0 = (function (){
var statearr_32923 = [null,null,null,null,null,null,null];
(statearr_32923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__);

(statearr_32923[(1)] = (1));

return statearr_32923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1 = (function (state_32915){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_32915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e32924){if((e32924 instanceof Object)){
var ex__32629__auto__ = e32924;
var statearr_32925_33070 = state_32915;
(statearr_32925_33070[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_32915;
state_32915 = G__33071;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = function(state_32915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1.call(this,state_32915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__;
})()
;})(__33059,switch__32625__auto__,c__32720__auto___33063,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async))
})();
var state__32722__auto__ = (function (){var statearr_32926 = f__32721__auto__.call(null);
(statearr_32926[(6)] = c__32720__auto___33063);

return statearr_32926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(__33059,c__32720__auto___33063,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async))
);


break;
case "async":
var c__32720__auto___33072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33059,c__32720__auto___33072,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (__33059,c__32720__auto___33072,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async){
return (function (state_32939){
var state_val_32940 = (state_32939[(1)]);
if((state_val_32940 === (1))){
var state_32939__$1 = state_32939;
var statearr_32941_33073 = state_32939__$1;
(statearr_32941_33073[(2)] = null);

(statearr_32941_33073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (2))){
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32939__$1,(4),jobs);
} else {
if((state_val_32940 === (3))){
var inst_32937 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32939__$1,inst_32937);
} else {
if((state_val_32940 === (4))){
var inst_32929 = (state_32939[(2)]);
var inst_32930 = async.call(null,inst_32929);
var state_32939__$1 = state_32939;
if(cljs.core.truth_(inst_32930)){
var statearr_32942_33074 = state_32939__$1;
(statearr_32942_33074[(1)] = (5));

} else {
var statearr_32943_33075 = state_32939__$1;
(statearr_32943_33075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (5))){
var state_32939__$1 = state_32939;
var statearr_32944_33076 = state_32939__$1;
(statearr_32944_33076[(2)] = null);

(statearr_32944_33076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (6))){
var state_32939__$1 = state_32939;
var statearr_32945_33077 = state_32939__$1;
(statearr_32945_33077[(2)] = null);

(statearr_32945_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (7))){
var inst_32935 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32946_33078 = state_32939__$1;
(statearr_32946_33078[(2)] = inst_32935);

(statearr_32946_33078[(1)] = (3));


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
});})(__33059,c__32720__auto___33072,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async))
;
return ((function (__33059,switch__32625__auto__,c__32720__auto___33072,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0 = (function (){
var statearr_32947 = [null,null,null,null,null,null,null];
(statearr_32947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__);

(statearr_32947[(1)] = (1));

return statearr_32947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1 = (function (state_32939){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_32939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e32948){if((e32948 instanceof Object)){
var ex__32629__auto__ = e32948;
var statearr_32949_33079 = state_32939;
(statearr_32949_33079[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33080 = state_32939;
state_32939 = G__33080;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = function(state_32939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1.call(this,state_32939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__;
})()
;})(__33059,switch__32625__auto__,c__32720__auto___33072,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async))
})();
var state__32722__auto__ = (function (){var statearr_32950 = f__32721__auto__.call(null);
(statearr_32950[(6)] = c__32720__auto___33072);

return statearr_32950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(__33059,c__32720__auto___33072,G__32902_33060,G__32902_33061__$1,n__4607__auto___33058,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32902_33061__$1)].join('')));

}

var G__33081 = (__33059 + (1));
__33059 = G__33081;
continue;
} else {
}
break;
}

var c__32720__auto___33082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___33082,jobs,results,process,async){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___33082,jobs,results,process,async){
return (function (state_32972){
var state_val_32973 = (state_32972[(1)]);
if((state_val_32973 === (7))){
var inst_32968 = (state_32972[(2)]);
var state_32972__$1 = state_32972;
var statearr_32974_33083 = state_32972__$1;
(statearr_32974_33083[(2)] = inst_32968);

(statearr_32974_33083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (1))){
var state_32972__$1 = state_32972;
var statearr_32975_33084 = state_32972__$1;
(statearr_32975_33084[(2)] = null);

(statearr_32975_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (4))){
var inst_32953 = (state_32972[(7)]);
var inst_32953__$1 = (state_32972[(2)]);
var inst_32954 = (inst_32953__$1 == null);
var state_32972__$1 = (function (){var statearr_32976 = state_32972;
(statearr_32976[(7)] = inst_32953__$1);

return statearr_32976;
})();
if(cljs.core.truth_(inst_32954)){
var statearr_32977_33085 = state_32972__$1;
(statearr_32977_33085[(1)] = (5));

} else {
var statearr_32978_33086 = state_32972__$1;
(statearr_32978_33086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (6))){
var inst_32953 = (state_32972[(7)]);
var inst_32958 = (state_32972[(8)]);
var inst_32958__$1 = cljs.core.async.chan.call(null,(1));
var inst_32959 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32960 = [inst_32953,inst_32958__$1];
var inst_32961 = (new cljs.core.PersistentVector(null,2,(5),inst_32959,inst_32960,null));
var state_32972__$1 = (function (){var statearr_32979 = state_32972;
(statearr_32979[(8)] = inst_32958__$1);

return statearr_32979;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32972__$1,(8),jobs,inst_32961);
} else {
if((state_val_32973 === (3))){
var inst_32970 = (state_32972[(2)]);
var state_32972__$1 = state_32972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32972__$1,inst_32970);
} else {
if((state_val_32973 === (2))){
var state_32972__$1 = state_32972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32972__$1,(4),from);
} else {
if((state_val_32973 === (9))){
var inst_32965 = (state_32972[(2)]);
var state_32972__$1 = (function (){var statearr_32980 = state_32972;
(statearr_32980[(9)] = inst_32965);

return statearr_32980;
})();
var statearr_32981_33087 = state_32972__$1;
(statearr_32981_33087[(2)] = null);

(statearr_32981_33087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (5))){
var inst_32956 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32972__$1 = state_32972;
var statearr_32982_33088 = state_32972__$1;
(statearr_32982_33088[(2)] = inst_32956);

(statearr_32982_33088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32973 === (8))){
var inst_32958 = (state_32972[(8)]);
var inst_32963 = (state_32972[(2)]);
var state_32972__$1 = (function (){var statearr_32983 = state_32972;
(statearr_32983[(10)] = inst_32963);

return statearr_32983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32972__$1,(9),results,inst_32958);
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
});})(c__32720__auto___33082,jobs,results,process,async))
;
return ((function (switch__32625__auto__,c__32720__auto___33082,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0 = (function (){
var statearr_32984 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__);

(statearr_32984[(1)] = (1));

return statearr_32984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1 = (function (state_32972){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_32972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e32985){if((e32985 instanceof Object)){
var ex__32629__auto__ = e32985;
var statearr_32986_33089 = state_32972;
(statearr_32986_33089[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33090 = state_32972;
state_32972 = G__33090;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = function(state_32972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1.call(this,state_32972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___33082,jobs,results,process,async))
})();
var state__32722__auto__ = (function (){var statearr_32987 = f__32721__auto__.call(null);
(statearr_32987[(6)] = c__32720__auto___33082);

return statearr_32987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___33082,jobs,results,process,async))
);


var c__32720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto__,jobs,results,process,async){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto__,jobs,results,process,async){
return (function (state_33025){
var state_val_33026 = (state_33025[(1)]);
if((state_val_33026 === (7))){
var inst_33021 = (state_33025[(2)]);
var state_33025__$1 = state_33025;
var statearr_33027_33091 = state_33025__$1;
(statearr_33027_33091[(2)] = inst_33021);

(statearr_33027_33091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (20))){
var state_33025__$1 = state_33025;
var statearr_33028_33092 = state_33025__$1;
(statearr_33028_33092[(2)] = null);

(statearr_33028_33092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (1))){
var state_33025__$1 = state_33025;
var statearr_33029_33093 = state_33025__$1;
(statearr_33029_33093[(2)] = null);

(statearr_33029_33093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (4))){
var inst_32990 = (state_33025[(7)]);
var inst_32990__$1 = (state_33025[(2)]);
var inst_32991 = (inst_32990__$1 == null);
var state_33025__$1 = (function (){var statearr_33030 = state_33025;
(statearr_33030[(7)] = inst_32990__$1);

return statearr_33030;
})();
if(cljs.core.truth_(inst_32991)){
var statearr_33031_33094 = state_33025__$1;
(statearr_33031_33094[(1)] = (5));

} else {
var statearr_33032_33095 = state_33025__$1;
(statearr_33032_33095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (15))){
var inst_33003 = (state_33025[(8)]);
var state_33025__$1 = state_33025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33025__$1,(18),to,inst_33003);
} else {
if((state_val_33026 === (21))){
var inst_33016 = (state_33025[(2)]);
var state_33025__$1 = state_33025;
var statearr_33033_33096 = state_33025__$1;
(statearr_33033_33096[(2)] = inst_33016);

(statearr_33033_33096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (13))){
var inst_33018 = (state_33025[(2)]);
var state_33025__$1 = (function (){var statearr_33034 = state_33025;
(statearr_33034[(9)] = inst_33018);

return statearr_33034;
})();
var statearr_33035_33097 = state_33025__$1;
(statearr_33035_33097[(2)] = null);

(statearr_33035_33097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (6))){
var inst_32990 = (state_33025[(7)]);
var state_33025__$1 = state_33025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33025__$1,(11),inst_32990);
} else {
if((state_val_33026 === (17))){
var inst_33011 = (state_33025[(2)]);
var state_33025__$1 = state_33025;
if(cljs.core.truth_(inst_33011)){
var statearr_33036_33098 = state_33025__$1;
(statearr_33036_33098[(1)] = (19));

} else {
var statearr_33037_33099 = state_33025__$1;
(statearr_33037_33099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (3))){
var inst_33023 = (state_33025[(2)]);
var state_33025__$1 = state_33025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33025__$1,inst_33023);
} else {
if((state_val_33026 === (12))){
var inst_33000 = (state_33025[(10)]);
var state_33025__$1 = state_33025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33025__$1,(14),inst_33000);
} else {
if((state_val_33026 === (2))){
var state_33025__$1 = state_33025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33025__$1,(4),results);
} else {
if((state_val_33026 === (19))){
var state_33025__$1 = state_33025;
var statearr_33038_33100 = state_33025__$1;
(statearr_33038_33100[(2)] = null);

(statearr_33038_33100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (11))){
var inst_33000 = (state_33025[(2)]);
var state_33025__$1 = (function (){var statearr_33039 = state_33025;
(statearr_33039[(10)] = inst_33000);

return statearr_33039;
})();
var statearr_33040_33101 = state_33025__$1;
(statearr_33040_33101[(2)] = null);

(statearr_33040_33101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (9))){
var state_33025__$1 = state_33025;
var statearr_33041_33102 = state_33025__$1;
(statearr_33041_33102[(2)] = null);

(statearr_33041_33102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (5))){
var state_33025__$1 = state_33025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33042_33103 = state_33025__$1;
(statearr_33042_33103[(1)] = (8));

} else {
var statearr_33043_33104 = state_33025__$1;
(statearr_33043_33104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (14))){
var inst_33003 = (state_33025[(8)]);
var inst_33005 = (state_33025[(11)]);
var inst_33003__$1 = (state_33025[(2)]);
var inst_33004 = (inst_33003__$1 == null);
var inst_33005__$1 = cljs.core.not.call(null,inst_33004);
var state_33025__$1 = (function (){var statearr_33044 = state_33025;
(statearr_33044[(8)] = inst_33003__$1);

(statearr_33044[(11)] = inst_33005__$1);

return statearr_33044;
})();
if(inst_33005__$1){
var statearr_33045_33105 = state_33025__$1;
(statearr_33045_33105[(1)] = (15));

} else {
var statearr_33046_33106 = state_33025__$1;
(statearr_33046_33106[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (16))){
var inst_33005 = (state_33025[(11)]);
var state_33025__$1 = state_33025;
var statearr_33047_33107 = state_33025__$1;
(statearr_33047_33107[(2)] = inst_33005);

(statearr_33047_33107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (10))){
var inst_32997 = (state_33025[(2)]);
var state_33025__$1 = state_33025;
var statearr_33048_33108 = state_33025__$1;
(statearr_33048_33108[(2)] = inst_32997);

(statearr_33048_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (18))){
var inst_33008 = (state_33025[(2)]);
var state_33025__$1 = state_33025;
var statearr_33049_33109 = state_33025__$1;
(statearr_33049_33109[(2)] = inst_33008);

(statearr_33049_33109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33026 === (8))){
var inst_32994 = cljs.core.async.close_BANG_.call(null,to);
var state_33025__$1 = state_33025;
var statearr_33050_33110 = state_33025__$1;
(statearr_33050_33110[(2)] = inst_32994);

(statearr_33050_33110[(1)] = (10));


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
});})(c__32720__auto__,jobs,results,process,async))
;
return ((function (switch__32625__auto__,c__32720__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0 = (function (){
var statearr_33051 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__);

(statearr_33051[(1)] = (1));

return statearr_33051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1 = (function (state_33025){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33052){if((e33052 instanceof Object)){
var ex__32629__auto__ = e33052;
var statearr_33053_33111 = state_33025;
(statearr_33053_33111[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33112 = state_33025;
state_33025 = G__33112;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__ = function(state_33025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1.call(this,state_33025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto__,jobs,results,process,async))
})();
var state__32722__auto__ = (function (){var statearr_33054 = f__32721__auto__.call(null);
(statearr_33054[(6)] = c__32720__auto__);

return statearr_33054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto__,jobs,results,process,async))
);

return c__32720__auto__;
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
var G__33114 = arguments.length;
switch (G__33114) {
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
var G__33117 = arguments.length;
switch (G__33117) {
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
var G__33120 = arguments.length;
switch (G__33120) {
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
var c__32720__auto___33169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___33169,tc,fc){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___33169,tc,fc){
return (function (state_33146){
var state_val_33147 = (state_33146[(1)]);
if((state_val_33147 === (7))){
var inst_33142 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
var statearr_33148_33170 = state_33146__$1;
(statearr_33148_33170[(2)] = inst_33142);

(statearr_33148_33170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (1))){
var state_33146__$1 = state_33146;
var statearr_33149_33171 = state_33146__$1;
(statearr_33149_33171[(2)] = null);

(statearr_33149_33171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (4))){
var inst_33123 = (state_33146[(7)]);
var inst_33123__$1 = (state_33146[(2)]);
var inst_33124 = (inst_33123__$1 == null);
var state_33146__$1 = (function (){var statearr_33150 = state_33146;
(statearr_33150[(7)] = inst_33123__$1);

return statearr_33150;
})();
if(cljs.core.truth_(inst_33124)){
var statearr_33151_33172 = state_33146__$1;
(statearr_33151_33172[(1)] = (5));

} else {
var statearr_33152_33173 = state_33146__$1;
(statearr_33152_33173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (13))){
var state_33146__$1 = state_33146;
var statearr_33153_33174 = state_33146__$1;
(statearr_33153_33174[(2)] = null);

(statearr_33153_33174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (6))){
var inst_33123 = (state_33146[(7)]);
var inst_33129 = p.call(null,inst_33123);
var state_33146__$1 = state_33146;
if(cljs.core.truth_(inst_33129)){
var statearr_33154_33175 = state_33146__$1;
(statearr_33154_33175[(1)] = (9));

} else {
var statearr_33155_33176 = state_33146__$1;
(statearr_33155_33176[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (3))){
var inst_33144 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33146__$1,inst_33144);
} else {
if((state_val_33147 === (12))){
var state_33146__$1 = state_33146;
var statearr_33156_33177 = state_33146__$1;
(statearr_33156_33177[(2)] = null);

(statearr_33156_33177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (2))){
var state_33146__$1 = state_33146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33146__$1,(4),ch);
} else {
if((state_val_33147 === (11))){
var inst_33123 = (state_33146[(7)]);
var inst_33133 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33146__$1,(8),inst_33133,inst_33123);
} else {
if((state_val_33147 === (9))){
var state_33146__$1 = state_33146;
var statearr_33157_33178 = state_33146__$1;
(statearr_33157_33178[(2)] = tc);

(statearr_33157_33178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (5))){
var inst_33126 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33127 = cljs.core.async.close_BANG_.call(null,fc);
var state_33146__$1 = (function (){var statearr_33158 = state_33146;
(statearr_33158[(8)] = inst_33126);

return statearr_33158;
})();
var statearr_33159_33179 = state_33146__$1;
(statearr_33159_33179[(2)] = inst_33127);

(statearr_33159_33179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (14))){
var inst_33140 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
var statearr_33160_33180 = state_33146__$1;
(statearr_33160_33180[(2)] = inst_33140);

(statearr_33160_33180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (10))){
var state_33146__$1 = state_33146;
var statearr_33161_33181 = state_33146__$1;
(statearr_33161_33181[(2)] = fc);

(statearr_33161_33181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33147 === (8))){
var inst_33135 = (state_33146[(2)]);
var state_33146__$1 = state_33146;
if(cljs.core.truth_(inst_33135)){
var statearr_33162_33182 = state_33146__$1;
(statearr_33162_33182[(1)] = (12));

} else {
var statearr_33163_33183 = state_33146__$1;
(statearr_33163_33183[(1)] = (13));

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
});})(c__32720__auto___33169,tc,fc))
;
return ((function (switch__32625__auto__,c__32720__auto___33169,tc,fc){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_33164 = [null,null,null,null,null,null,null,null,null];
(statearr_33164[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_33164[(1)] = (1));

return statearr_33164;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_33146){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33165){if((e33165 instanceof Object)){
var ex__32629__auto__ = e33165;
var statearr_33166_33184 = state_33146;
(statearr_33166_33184[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33185 = state_33146;
state_33146 = G__33185;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_33146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_33146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___33169,tc,fc))
})();
var state__32722__auto__ = (function (){var statearr_33167 = f__32721__auto__.call(null);
(statearr_33167[(6)] = c__32720__auto___33169);

return statearr_33167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___33169,tc,fc))
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
var c__32720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto__){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto__){
return (function (state_33206){
var state_val_33207 = (state_33206[(1)]);
if((state_val_33207 === (7))){
var inst_33202 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33208_33226 = state_33206__$1;
(statearr_33208_33226[(2)] = inst_33202);

(statearr_33208_33226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (1))){
var inst_33186 = init;
var state_33206__$1 = (function (){var statearr_33209 = state_33206;
(statearr_33209[(7)] = inst_33186);

return statearr_33209;
})();
var statearr_33210_33227 = state_33206__$1;
(statearr_33210_33227[(2)] = null);

(statearr_33210_33227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (4))){
var inst_33189 = (state_33206[(8)]);
var inst_33189__$1 = (state_33206[(2)]);
var inst_33190 = (inst_33189__$1 == null);
var state_33206__$1 = (function (){var statearr_33211 = state_33206;
(statearr_33211[(8)] = inst_33189__$1);

return statearr_33211;
})();
if(cljs.core.truth_(inst_33190)){
var statearr_33212_33228 = state_33206__$1;
(statearr_33212_33228[(1)] = (5));

} else {
var statearr_33213_33229 = state_33206__$1;
(statearr_33213_33229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (6))){
var inst_33189 = (state_33206[(8)]);
var inst_33186 = (state_33206[(7)]);
var inst_33193 = (state_33206[(9)]);
var inst_33193__$1 = f.call(null,inst_33186,inst_33189);
var inst_33194 = cljs.core.reduced_QMARK_.call(null,inst_33193__$1);
var state_33206__$1 = (function (){var statearr_33214 = state_33206;
(statearr_33214[(9)] = inst_33193__$1);

return statearr_33214;
})();
if(inst_33194){
var statearr_33215_33230 = state_33206__$1;
(statearr_33215_33230[(1)] = (8));

} else {
var statearr_33216_33231 = state_33206__$1;
(statearr_33216_33231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (3))){
var inst_33204 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33206__$1,inst_33204);
} else {
if((state_val_33207 === (2))){
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33206__$1,(4),ch);
} else {
if((state_val_33207 === (9))){
var inst_33193 = (state_33206[(9)]);
var inst_33186 = inst_33193;
var state_33206__$1 = (function (){var statearr_33217 = state_33206;
(statearr_33217[(7)] = inst_33186);

return statearr_33217;
})();
var statearr_33218_33232 = state_33206__$1;
(statearr_33218_33232[(2)] = null);

(statearr_33218_33232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (5))){
var inst_33186 = (state_33206[(7)]);
var state_33206__$1 = state_33206;
var statearr_33219_33233 = state_33206__$1;
(statearr_33219_33233[(2)] = inst_33186);

(statearr_33219_33233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (10))){
var inst_33200 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33220_33234 = state_33206__$1;
(statearr_33220_33234[(2)] = inst_33200);

(statearr_33220_33234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (8))){
var inst_33193 = (state_33206[(9)]);
var inst_33196 = cljs.core.deref.call(null,inst_33193);
var state_33206__$1 = state_33206;
var statearr_33221_33235 = state_33206__$1;
(statearr_33221_33235[(2)] = inst_33196);

(statearr_33221_33235[(1)] = (10));


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
});})(c__32720__auto__))
;
return ((function (switch__32625__auto__,c__32720__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32626__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32626__auto____0 = (function (){
var statearr_33222 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33222[(0)] = cljs$core$async$reduce_$_state_machine__32626__auto__);

(statearr_33222[(1)] = (1));

return statearr_33222;
});
var cljs$core$async$reduce_$_state_machine__32626__auto____1 = (function (state_33206){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33223){if((e33223 instanceof Object)){
var ex__32629__auto__ = e33223;
var statearr_33224_33236 = state_33206;
(statearr_33224_33236[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33237 = state_33206;
state_33206 = G__33237;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32626__auto__ = function(state_33206){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32626__auto____1.call(this,state_33206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32626__auto____0;
cljs$core$async$reduce_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32626__auto____1;
return cljs$core$async$reduce_$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto__))
})();
var state__32722__auto__ = (function (){var statearr_33225 = f__32721__auto__.call(null);
(statearr_33225[(6)] = c__32720__auto__);

return statearr_33225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto__))
);

return c__32720__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto__,f__$1){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto__,f__$1){
return (function (state_33243){
var state_val_33244 = (state_33243[(1)]);
if((state_val_33244 === (1))){
var inst_33238 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33243__$1,(2),inst_33238);
} else {
if((state_val_33244 === (2))){
var inst_33240 = (state_33243[(2)]);
var inst_33241 = f__$1.call(null,inst_33240);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33243__$1,inst_33241);
} else {
return null;
}
}
});})(c__32720__auto__,f__$1))
;
return ((function (switch__32625__auto__,c__32720__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32626__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32626__auto____0 = (function (){
var statearr_33245 = [null,null,null,null,null,null,null];
(statearr_33245[(0)] = cljs$core$async$transduce_$_state_machine__32626__auto__);

(statearr_33245[(1)] = (1));

return statearr_33245;
});
var cljs$core$async$transduce_$_state_machine__32626__auto____1 = (function (state_33243){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33246){if((e33246 instanceof Object)){
var ex__32629__auto__ = e33246;
var statearr_33247_33249 = state_33243;
(statearr_33247_33249[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33250 = state_33243;
state_33243 = G__33250;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32626__auto__ = function(state_33243){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32626__auto____1.call(this,state_33243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32626__auto____0;
cljs$core$async$transduce_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32626__auto____1;
return cljs$core$async$transduce_$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto__,f__$1))
})();
var state__32722__auto__ = (function (){var statearr_33248 = f__32721__auto__.call(null);
(statearr_33248[(6)] = c__32720__auto__);

return statearr_33248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto__,f__$1))
);

return c__32720__auto__;
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
var G__33252 = arguments.length;
switch (G__33252) {
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
var c__32720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto__){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto__){
return (function (state_33277){
var state_val_33278 = (state_33277[(1)]);
if((state_val_33278 === (7))){
var inst_33259 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33279_33300 = state_33277__$1;
(statearr_33279_33300[(2)] = inst_33259);

(statearr_33279_33300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (1))){
var inst_33253 = cljs.core.seq.call(null,coll);
var inst_33254 = inst_33253;
var state_33277__$1 = (function (){var statearr_33280 = state_33277;
(statearr_33280[(7)] = inst_33254);

return statearr_33280;
})();
var statearr_33281_33301 = state_33277__$1;
(statearr_33281_33301[(2)] = null);

(statearr_33281_33301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (4))){
var inst_33254 = (state_33277[(7)]);
var inst_33257 = cljs.core.first.call(null,inst_33254);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33277__$1,(7),ch,inst_33257);
} else {
if((state_val_33278 === (13))){
var inst_33271 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33282_33302 = state_33277__$1;
(statearr_33282_33302[(2)] = inst_33271);

(statearr_33282_33302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (6))){
var inst_33262 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33262)){
var statearr_33283_33303 = state_33277__$1;
(statearr_33283_33303[(1)] = (8));

} else {
var statearr_33284_33304 = state_33277__$1;
(statearr_33284_33304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (3))){
var inst_33275 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33277__$1,inst_33275);
} else {
if((state_val_33278 === (12))){
var state_33277__$1 = state_33277;
var statearr_33285_33305 = state_33277__$1;
(statearr_33285_33305[(2)] = null);

(statearr_33285_33305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (2))){
var inst_33254 = (state_33277[(7)]);
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33254)){
var statearr_33286_33306 = state_33277__$1;
(statearr_33286_33306[(1)] = (4));

} else {
var statearr_33287_33307 = state_33277__$1;
(statearr_33287_33307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (11))){
var inst_33268 = cljs.core.async.close_BANG_.call(null,ch);
var state_33277__$1 = state_33277;
var statearr_33288_33308 = state_33277__$1;
(statearr_33288_33308[(2)] = inst_33268);

(statearr_33288_33308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (9))){
var state_33277__$1 = state_33277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33289_33309 = state_33277__$1;
(statearr_33289_33309[(1)] = (11));

} else {
var statearr_33290_33310 = state_33277__$1;
(statearr_33290_33310[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (5))){
var inst_33254 = (state_33277[(7)]);
var state_33277__$1 = state_33277;
var statearr_33291_33311 = state_33277__$1;
(statearr_33291_33311[(2)] = inst_33254);

(statearr_33291_33311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (10))){
var inst_33273 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33292_33312 = state_33277__$1;
(statearr_33292_33312[(2)] = inst_33273);

(statearr_33292_33312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (8))){
var inst_33254 = (state_33277[(7)]);
var inst_33264 = cljs.core.next.call(null,inst_33254);
var inst_33254__$1 = inst_33264;
var state_33277__$1 = (function (){var statearr_33293 = state_33277;
(statearr_33293[(7)] = inst_33254__$1);

return statearr_33293;
})();
var statearr_33294_33313 = state_33277__$1;
(statearr_33294_33313[(2)] = null);

(statearr_33294_33313[(1)] = (2));


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
});})(c__32720__auto__))
;
return ((function (switch__32625__auto__,c__32720__auto__){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_33295 = [null,null,null,null,null,null,null,null];
(statearr_33295[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_33295[(1)] = (1));

return statearr_33295;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_33277){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33296){if((e33296 instanceof Object)){
var ex__32629__auto__ = e33296;
var statearr_33297_33314 = state_33277;
(statearr_33297_33314[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33315 = state_33277;
state_33277 = G__33315;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_33277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_33277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto__))
})();
var state__32722__auto__ = (function (){var statearr_33298 = f__32721__auto__.call(null);
(statearr_33298[(6)] = c__32720__auto__);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto__))
);

return c__32720__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33316 = (function (ch,cs,meta33317){
this.ch = ch;
this.cs = cs;
this.meta33317 = meta33317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33318,meta33317__$1){
var self__ = this;
var _33318__$1 = this;
return (new cljs.core.async.t_cljs$core$async33316(self__.ch,self__.cs,meta33317__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33318){
var self__ = this;
var _33318__$1 = this;
return self__.meta33317;
});})(cs))
;

cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33316.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33317","meta33317",837021047,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33316";

cljs.core.async.t_cljs$core$async33316.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33316");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33316.
 */
cljs.core.async.__GT_t_cljs$core$async33316 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33316(ch__$1,cs__$1,meta33317){
return (new cljs.core.async.t_cljs$core$async33316(ch__$1,cs__$1,meta33317));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33316(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32720__auto___33538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___33538,cs,m,dchan,dctr,done){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___33538,cs,m,dchan,dctr,done){
return (function (state_33453){
var state_val_33454 = (state_33453[(1)]);
if((state_val_33454 === (7))){
var inst_33449 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33455_33539 = state_33453__$1;
(statearr_33455_33539[(2)] = inst_33449);

(statearr_33455_33539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (20))){
var inst_33352 = (state_33453[(7)]);
var inst_33364 = cljs.core.first.call(null,inst_33352);
var inst_33365 = cljs.core.nth.call(null,inst_33364,(0),null);
var inst_33366 = cljs.core.nth.call(null,inst_33364,(1),null);
var state_33453__$1 = (function (){var statearr_33456 = state_33453;
(statearr_33456[(8)] = inst_33365);

return statearr_33456;
})();
if(cljs.core.truth_(inst_33366)){
var statearr_33457_33540 = state_33453__$1;
(statearr_33457_33540[(1)] = (22));

} else {
var statearr_33458_33541 = state_33453__$1;
(statearr_33458_33541[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (27))){
var inst_33396 = (state_33453[(9)]);
var inst_33401 = (state_33453[(10)]);
var inst_33321 = (state_33453[(11)]);
var inst_33394 = (state_33453[(12)]);
var inst_33401__$1 = cljs.core._nth.call(null,inst_33394,inst_33396);
var inst_33402 = cljs.core.async.put_BANG_.call(null,inst_33401__$1,inst_33321,done);
var state_33453__$1 = (function (){var statearr_33459 = state_33453;
(statearr_33459[(10)] = inst_33401__$1);

return statearr_33459;
})();
if(cljs.core.truth_(inst_33402)){
var statearr_33460_33542 = state_33453__$1;
(statearr_33460_33542[(1)] = (30));

} else {
var statearr_33461_33543 = state_33453__$1;
(statearr_33461_33543[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (1))){
var state_33453__$1 = state_33453;
var statearr_33462_33544 = state_33453__$1;
(statearr_33462_33544[(2)] = null);

(statearr_33462_33544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (24))){
var inst_33352 = (state_33453[(7)]);
var inst_33371 = (state_33453[(2)]);
var inst_33372 = cljs.core.next.call(null,inst_33352);
var inst_33330 = inst_33372;
var inst_33331 = null;
var inst_33332 = (0);
var inst_33333 = (0);
var state_33453__$1 = (function (){var statearr_33463 = state_33453;
(statearr_33463[(13)] = inst_33371);

(statearr_33463[(14)] = inst_33332);

(statearr_33463[(15)] = inst_33330);

(statearr_33463[(16)] = inst_33331);

(statearr_33463[(17)] = inst_33333);

return statearr_33463;
})();
var statearr_33464_33545 = state_33453__$1;
(statearr_33464_33545[(2)] = null);

(statearr_33464_33545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (39))){
var state_33453__$1 = state_33453;
var statearr_33468_33546 = state_33453__$1;
(statearr_33468_33546[(2)] = null);

(statearr_33468_33546[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (4))){
var inst_33321 = (state_33453[(11)]);
var inst_33321__$1 = (state_33453[(2)]);
var inst_33322 = (inst_33321__$1 == null);
var state_33453__$1 = (function (){var statearr_33469 = state_33453;
(statearr_33469[(11)] = inst_33321__$1);

return statearr_33469;
})();
if(cljs.core.truth_(inst_33322)){
var statearr_33470_33547 = state_33453__$1;
(statearr_33470_33547[(1)] = (5));

} else {
var statearr_33471_33548 = state_33453__$1;
(statearr_33471_33548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (15))){
var inst_33332 = (state_33453[(14)]);
var inst_33330 = (state_33453[(15)]);
var inst_33331 = (state_33453[(16)]);
var inst_33333 = (state_33453[(17)]);
var inst_33348 = (state_33453[(2)]);
var inst_33349 = (inst_33333 + (1));
var tmp33465 = inst_33332;
var tmp33466 = inst_33330;
var tmp33467 = inst_33331;
var inst_33330__$1 = tmp33466;
var inst_33331__$1 = tmp33467;
var inst_33332__$1 = tmp33465;
var inst_33333__$1 = inst_33349;
var state_33453__$1 = (function (){var statearr_33472 = state_33453;
(statearr_33472[(14)] = inst_33332__$1);

(statearr_33472[(15)] = inst_33330__$1);

(statearr_33472[(16)] = inst_33331__$1);

(statearr_33472[(18)] = inst_33348);

(statearr_33472[(17)] = inst_33333__$1);

return statearr_33472;
})();
var statearr_33473_33549 = state_33453__$1;
(statearr_33473_33549[(2)] = null);

(statearr_33473_33549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (21))){
var inst_33375 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33477_33550 = state_33453__$1;
(statearr_33477_33550[(2)] = inst_33375);

(statearr_33477_33550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (31))){
var inst_33401 = (state_33453[(10)]);
var inst_33405 = done.call(null,null);
var inst_33406 = cljs.core.async.untap_STAR_.call(null,m,inst_33401);
var state_33453__$1 = (function (){var statearr_33478 = state_33453;
(statearr_33478[(19)] = inst_33405);

return statearr_33478;
})();
var statearr_33479_33551 = state_33453__$1;
(statearr_33479_33551[(2)] = inst_33406);

(statearr_33479_33551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (32))){
var inst_33396 = (state_33453[(9)]);
var inst_33395 = (state_33453[(20)]);
var inst_33393 = (state_33453[(21)]);
var inst_33394 = (state_33453[(12)]);
var inst_33408 = (state_33453[(2)]);
var inst_33409 = (inst_33396 + (1));
var tmp33474 = inst_33395;
var tmp33475 = inst_33393;
var tmp33476 = inst_33394;
var inst_33393__$1 = tmp33475;
var inst_33394__$1 = tmp33476;
var inst_33395__$1 = tmp33474;
var inst_33396__$1 = inst_33409;
var state_33453__$1 = (function (){var statearr_33480 = state_33453;
(statearr_33480[(9)] = inst_33396__$1);

(statearr_33480[(20)] = inst_33395__$1);

(statearr_33480[(22)] = inst_33408);

(statearr_33480[(21)] = inst_33393__$1);

(statearr_33480[(12)] = inst_33394__$1);

return statearr_33480;
})();
var statearr_33481_33552 = state_33453__$1;
(statearr_33481_33552[(2)] = null);

(statearr_33481_33552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (40))){
var inst_33421 = (state_33453[(23)]);
var inst_33425 = done.call(null,null);
var inst_33426 = cljs.core.async.untap_STAR_.call(null,m,inst_33421);
var state_33453__$1 = (function (){var statearr_33482 = state_33453;
(statearr_33482[(24)] = inst_33425);

return statearr_33482;
})();
var statearr_33483_33553 = state_33453__$1;
(statearr_33483_33553[(2)] = inst_33426);

(statearr_33483_33553[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (33))){
var inst_33412 = (state_33453[(25)]);
var inst_33414 = cljs.core.chunked_seq_QMARK_.call(null,inst_33412);
var state_33453__$1 = state_33453;
if(inst_33414){
var statearr_33484_33554 = state_33453__$1;
(statearr_33484_33554[(1)] = (36));

} else {
var statearr_33485_33555 = state_33453__$1;
(statearr_33485_33555[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (13))){
var inst_33342 = (state_33453[(26)]);
var inst_33345 = cljs.core.async.close_BANG_.call(null,inst_33342);
var state_33453__$1 = state_33453;
var statearr_33486_33556 = state_33453__$1;
(statearr_33486_33556[(2)] = inst_33345);

(statearr_33486_33556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (22))){
var inst_33365 = (state_33453[(8)]);
var inst_33368 = cljs.core.async.close_BANG_.call(null,inst_33365);
var state_33453__$1 = state_33453;
var statearr_33487_33557 = state_33453__$1;
(statearr_33487_33557[(2)] = inst_33368);

(statearr_33487_33557[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (36))){
var inst_33412 = (state_33453[(25)]);
var inst_33416 = cljs.core.chunk_first.call(null,inst_33412);
var inst_33417 = cljs.core.chunk_rest.call(null,inst_33412);
var inst_33418 = cljs.core.count.call(null,inst_33416);
var inst_33393 = inst_33417;
var inst_33394 = inst_33416;
var inst_33395 = inst_33418;
var inst_33396 = (0);
var state_33453__$1 = (function (){var statearr_33488 = state_33453;
(statearr_33488[(9)] = inst_33396);

(statearr_33488[(20)] = inst_33395);

(statearr_33488[(21)] = inst_33393);

(statearr_33488[(12)] = inst_33394);

return statearr_33488;
})();
var statearr_33489_33558 = state_33453__$1;
(statearr_33489_33558[(2)] = null);

(statearr_33489_33558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (41))){
var inst_33412 = (state_33453[(25)]);
var inst_33428 = (state_33453[(2)]);
var inst_33429 = cljs.core.next.call(null,inst_33412);
var inst_33393 = inst_33429;
var inst_33394 = null;
var inst_33395 = (0);
var inst_33396 = (0);
var state_33453__$1 = (function (){var statearr_33490 = state_33453;
(statearr_33490[(9)] = inst_33396);

(statearr_33490[(20)] = inst_33395);

(statearr_33490[(27)] = inst_33428);

(statearr_33490[(21)] = inst_33393);

(statearr_33490[(12)] = inst_33394);

return statearr_33490;
})();
var statearr_33491_33559 = state_33453__$1;
(statearr_33491_33559[(2)] = null);

(statearr_33491_33559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (43))){
var state_33453__$1 = state_33453;
var statearr_33492_33560 = state_33453__$1;
(statearr_33492_33560[(2)] = null);

(statearr_33492_33560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (29))){
var inst_33437 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33493_33561 = state_33453__$1;
(statearr_33493_33561[(2)] = inst_33437);

(statearr_33493_33561[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (44))){
var inst_33446 = (state_33453[(2)]);
var state_33453__$1 = (function (){var statearr_33494 = state_33453;
(statearr_33494[(28)] = inst_33446);

return statearr_33494;
})();
var statearr_33495_33562 = state_33453__$1;
(statearr_33495_33562[(2)] = null);

(statearr_33495_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (6))){
var inst_33385 = (state_33453[(29)]);
var inst_33384 = cljs.core.deref.call(null,cs);
var inst_33385__$1 = cljs.core.keys.call(null,inst_33384);
var inst_33386 = cljs.core.count.call(null,inst_33385__$1);
var inst_33387 = cljs.core.reset_BANG_.call(null,dctr,inst_33386);
var inst_33392 = cljs.core.seq.call(null,inst_33385__$1);
var inst_33393 = inst_33392;
var inst_33394 = null;
var inst_33395 = (0);
var inst_33396 = (0);
var state_33453__$1 = (function (){var statearr_33496 = state_33453;
(statearr_33496[(9)] = inst_33396);

(statearr_33496[(30)] = inst_33387);

(statearr_33496[(20)] = inst_33395);

(statearr_33496[(29)] = inst_33385__$1);

(statearr_33496[(21)] = inst_33393);

(statearr_33496[(12)] = inst_33394);

return statearr_33496;
})();
var statearr_33497_33563 = state_33453__$1;
(statearr_33497_33563[(2)] = null);

(statearr_33497_33563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (28))){
var inst_33412 = (state_33453[(25)]);
var inst_33393 = (state_33453[(21)]);
var inst_33412__$1 = cljs.core.seq.call(null,inst_33393);
var state_33453__$1 = (function (){var statearr_33498 = state_33453;
(statearr_33498[(25)] = inst_33412__$1);

return statearr_33498;
})();
if(inst_33412__$1){
var statearr_33499_33564 = state_33453__$1;
(statearr_33499_33564[(1)] = (33));

} else {
var statearr_33500_33565 = state_33453__$1;
(statearr_33500_33565[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (25))){
var inst_33396 = (state_33453[(9)]);
var inst_33395 = (state_33453[(20)]);
var inst_33398 = (inst_33396 < inst_33395);
var inst_33399 = inst_33398;
var state_33453__$1 = state_33453;
if(cljs.core.truth_(inst_33399)){
var statearr_33501_33566 = state_33453__$1;
(statearr_33501_33566[(1)] = (27));

} else {
var statearr_33502_33567 = state_33453__$1;
(statearr_33502_33567[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (34))){
var state_33453__$1 = state_33453;
var statearr_33503_33568 = state_33453__$1;
(statearr_33503_33568[(2)] = null);

(statearr_33503_33568[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (17))){
var state_33453__$1 = state_33453;
var statearr_33504_33569 = state_33453__$1;
(statearr_33504_33569[(2)] = null);

(statearr_33504_33569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (3))){
var inst_33451 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33453__$1,inst_33451);
} else {
if((state_val_33454 === (12))){
var inst_33380 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33505_33570 = state_33453__$1;
(statearr_33505_33570[(2)] = inst_33380);

(statearr_33505_33570[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (2))){
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33453__$1,(4),ch);
} else {
if((state_val_33454 === (23))){
var state_33453__$1 = state_33453;
var statearr_33506_33571 = state_33453__$1;
(statearr_33506_33571[(2)] = null);

(statearr_33506_33571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (35))){
var inst_33435 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33507_33572 = state_33453__$1;
(statearr_33507_33572[(2)] = inst_33435);

(statearr_33507_33572[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (19))){
var inst_33352 = (state_33453[(7)]);
var inst_33356 = cljs.core.chunk_first.call(null,inst_33352);
var inst_33357 = cljs.core.chunk_rest.call(null,inst_33352);
var inst_33358 = cljs.core.count.call(null,inst_33356);
var inst_33330 = inst_33357;
var inst_33331 = inst_33356;
var inst_33332 = inst_33358;
var inst_33333 = (0);
var state_33453__$1 = (function (){var statearr_33508 = state_33453;
(statearr_33508[(14)] = inst_33332);

(statearr_33508[(15)] = inst_33330);

(statearr_33508[(16)] = inst_33331);

(statearr_33508[(17)] = inst_33333);

return statearr_33508;
})();
var statearr_33509_33573 = state_33453__$1;
(statearr_33509_33573[(2)] = null);

(statearr_33509_33573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (11))){
var inst_33330 = (state_33453[(15)]);
var inst_33352 = (state_33453[(7)]);
var inst_33352__$1 = cljs.core.seq.call(null,inst_33330);
var state_33453__$1 = (function (){var statearr_33510 = state_33453;
(statearr_33510[(7)] = inst_33352__$1);

return statearr_33510;
})();
if(inst_33352__$1){
var statearr_33511_33574 = state_33453__$1;
(statearr_33511_33574[(1)] = (16));

} else {
var statearr_33512_33575 = state_33453__$1;
(statearr_33512_33575[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (9))){
var inst_33382 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33513_33576 = state_33453__$1;
(statearr_33513_33576[(2)] = inst_33382);

(statearr_33513_33576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (5))){
var inst_33328 = cljs.core.deref.call(null,cs);
var inst_33329 = cljs.core.seq.call(null,inst_33328);
var inst_33330 = inst_33329;
var inst_33331 = null;
var inst_33332 = (0);
var inst_33333 = (0);
var state_33453__$1 = (function (){var statearr_33514 = state_33453;
(statearr_33514[(14)] = inst_33332);

(statearr_33514[(15)] = inst_33330);

(statearr_33514[(16)] = inst_33331);

(statearr_33514[(17)] = inst_33333);

return statearr_33514;
})();
var statearr_33515_33577 = state_33453__$1;
(statearr_33515_33577[(2)] = null);

(statearr_33515_33577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (14))){
var state_33453__$1 = state_33453;
var statearr_33516_33578 = state_33453__$1;
(statearr_33516_33578[(2)] = null);

(statearr_33516_33578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (45))){
var inst_33443 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33517_33579 = state_33453__$1;
(statearr_33517_33579[(2)] = inst_33443);

(statearr_33517_33579[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (26))){
var inst_33385 = (state_33453[(29)]);
var inst_33439 = (state_33453[(2)]);
var inst_33440 = cljs.core.seq.call(null,inst_33385);
var state_33453__$1 = (function (){var statearr_33518 = state_33453;
(statearr_33518[(31)] = inst_33439);

return statearr_33518;
})();
if(inst_33440){
var statearr_33519_33580 = state_33453__$1;
(statearr_33519_33580[(1)] = (42));

} else {
var statearr_33520_33581 = state_33453__$1;
(statearr_33520_33581[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (16))){
var inst_33352 = (state_33453[(7)]);
var inst_33354 = cljs.core.chunked_seq_QMARK_.call(null,inst_33352);
var state_33453__$1 = state_33453;
if(inst_33354){
var statearr_33521_33582 = state_33453__$1;
(statearr_33521_33582[(1)] = (19));

} else {
var statearr_33522_33583 = state_33453__$1;
(statearr_33522_33583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (38))){
var inst_33432 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33523_33584 = state_33453__$1;
(statearr_33523_33584[(2)] = inst_33432);

(statearr_33523_33584[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (30))){
var state_33453__$1 = state_33453;
var statearr_33524_33585 = state_33453__$1;
(statearr_33524_33585[(2)] = null);

(statearr_33524_33585[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (10))){
var inst_33331 = (state_33453[(16)]);
var inst_33333 = (state_33453[(17)]);
var inst_33341 = cljs.core._nth.call(null,inst_33331,inst_33333);
var inst_33342 = cljs.core.nth.call(null,inst_33341,(0),null);
var inst_33343 = cljs.core.nth.call(null,inst_33341,(1),null);
var state_33453__$1 = (function (){var statearr_33525 = state_33453;
(statearr_33525[(26)] = inst_33342);

return statearr_33525;
})();
if(cljs.core.truth_(inst_33343)){
var statearr_33526_33586 = state_33453__$1;
(statearr_33526_33586[(1)] = (13));

} else {
var statearr_33527_33587 = state_33453__$1;
(statearr_33527_33587[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (18))){
var inst_33378 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33528_33588 = state_33453__$1;
(statearr_33528_33588[(2)] = inst_33378);

(statearr_33528_33588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (42))){
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33453__$1,(45),dchan);
} else {
if((state_val_33454 === (37))){
var inst_33421 = (state_33453[(23)]);
var inst_33412 = (state_33453[(25)]);
var inst_33321 = (state_33453[(11)]);
var inst_33421__$1 = cljs.core.first.call(null,inst_33412);
var inst_33422 = cljs.core.async.put_BANG_.call(null,inst_33421__$1,inst_33321,done);
var state_33453__$1 = (function (){var statearr_33529 = state_33453;
(statearr_33529[(23)] = inst_33421__$1);

return statearr_33529;
})();
if(cljs.core.truth_(inst_33422)){
var statearr_33530_33589 = state_33453__$1;
(statearr_33530_33589[(1)] = (39));

} else {
var statearr_33531_33590 = state_33453__$1;
(statearr_33531_33590[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (8))){
var inst_33332 = (state_33453[(14)]);
var inst_33333 = (state_33453[(17)]);
var inst_33335 = (inst_33333 < inst_33332);
var inst_33336 = inst_33335;
var state_33453__$1 = state_33453;
if(cljs.core.truth_(inst_33336)){
var statearr_33532_33591 = state_33453__$1;
(statearr_33532_33591[(1)] = (10));

} else {
var statearr_33533_33592 = state_33453__$1;
(statearr_33533_33592[(1)] = (11));

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
});})(c__32720__auto___33538,cs,m,dchan,dctr,done))
;
return ((function (switch__32625__auto__,c__32720__auto___33538,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32626__auto__ = null;
var cljs$core$async$mult_$_state_machine__32626__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = cljs$core$async$mult_$_state_machine__32626__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var cljs$core$async$mult_$_state_machine__32626__auto____1 = (function (state_33453){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33535){if((e33535 instanceof Object)){
var ex__32629__auto__ = e33535;
var statearr_33536_33593 = state_33453;
(statearr_33536_33593[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33594 = state_33453;
state_33453 = G__33594;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32626__auto__ = function(state_33453){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32626__auto____1.call(this,state_33453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32626__auto____0;
cljs$core$async$mult_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32626__auto____1;
return cljs$core$async$mult_$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___33538,cs,m,dchan,dctr,done))
})();
var state__32722__auto__ = (function (){var statearr_33537 = f__32721__auto__.call(null);
(statearr_33537[(6)] = c__32720__auto___33538);

return statearr_33537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___33538,cs,m,dchan,dctr,done))
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
var G__33596 = arguments.length;
switch (G__33596) {
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
var len__4730__auto___33608 = arguments.length;
var i__4731__auto___33609 = (0);
while(true){
if((i__4731__auto___33609 < len__4730__auto___33608)){
args__4736__auto__.push((arguments[i__4731__auto___33609]));

var G__33610 = (i__4731__auto___33609 + (1));
i__4731__auto___33609 = G__33610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33602){
var map__33603 = p__33602;
var map__33603__$1 = (((((!((map__33603 == null))))?(((((map__33603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33603):map__33603);
var opts = map__33603__$1;
var statearr_33605_33611 = state;
(statearr_33605_33611[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33603,map__33603__$1,opts){
return (function (val){
var statearr_33606_33612 = state;
(statearr_33606_33612[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33603,map__33603__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33607_33613 = state;
(statearr_33607_33613[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33598){
var G__33599 = cljs.core.first.call(null,seq33598);
var seq33598__$1 = cljs.core.next.call(null,seq33598);
var G__33600 = cljs.core.first.call(null,seq33598__$1);
var seq33598__$2 = cljs.core.next.call(null,seq33598__$1);
var G__33601 = cljs.core.first.call(null,seq33598__$2);
var seq33598__$3 = cljs.core.next.call(null,seq33598__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33599,G__33600,G__33601,seq33598__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33614 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33615){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33615 = meta33615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33616,meta33615__$1){
var self__ = this;
var _33616__$1 = this;
return (new cljs.core.async.t_cljs$core$async33614(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33615__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33616){
var self__ = this;
var _33616__$1 = this;
return self__.meta33615;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33614.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33615","meta33615",-1603099409,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33614";

cljs.core.async.t_cljs$core$async33614.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33614");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33614.
 */
cljs.core.async.__GT_t_cljs$core$async33614 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33614(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33615){
return (new cljs.core.async.t_cljs$core$async33614(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33615));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33614(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32720__auto___33778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___33778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___33778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33718){
var state_val_33719 = (state_33718[(1)]);
if((state_val_33719 === (7))){
var inst_33633 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33720_33779 = state_33718__$1;
(statearr_33720_33779[(2)] = inst_33633);

(statearr_33720_33779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (20))){
var inst_33645 = (state_33718[(7)]);
var state_33718__$1 = state_33718;
var statearr_33721_33780 = state_33718__$1;
(statearr_33721_33780[(2)] = inst_33645);

(statearr_33721_33780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (27))){
var state_33718__$1 = state_33718;
var statearr_33722_33781 = state_33718__$1;
(statearr_33722_33781[(2)] = null);

(statearr_33722_33781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (1))){
var inst_33620 = (state_33718[(8)]);
var inst_33620__$1 = calc_state.call(null);
var inst_33622 = (inst_33620__$1 == null);
var inst_33623 = cljs.core.not.call(null,inst_33622);
var state_33718__$1 = (function (){var statearr_33723 = state_33718;
(statearr_33723[(8)] = inst_33620__$1);

return statearr_33723;
})();
if(inst_33623){
var statearr_33724_33782 = state_33718__$1;
(statearr_33724_33782[(1)] = (2));

} else {
var statearr_33725_33783 = state_33718__$1;
(statearr_33725_33783[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (24))){
var inst_33669 = (state_33718[(9)]);
var inst_33678 = (state_33718[(10)]);
var inst_33692 = (state_33718[(11)]);
var inst_33692__$1 = inst_33669.call(null,inst_33678);
var state_33718__$1 = (function (){var statearr_33726 = state_33718;
(statearr_33726[(11)] = inst_33692__$1);

return statearr_33726;
})();
if(cljs.core.truth_(inst_33692__$1)){
var statearr_33727_33784 = state_33718__$1;
(statearr_33727_33784[(1)] = (29));

} else {
var statearr_33728_33785 = state_33718__$1;
(statearr_33728_33785[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (4))){
var inst_33636 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33636)){
var statearr_33729_33786 = state_33718__$1;
(statearr_33729_33786[(1)] = (8));

} else {
var statearr_33730_33787 = state_33718__$1;
(statearr_33730_33787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (15))){
var inst_33663 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33663)){
var statearr_33731_33788 = state_33718__$1;
(statearr_33731_33788[(1)] = (19));

} else {
var statearr_33732_33789 = state_33718__$1;
(statearr_33732_33789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (21))){
var inst_33668 = (state_33718[(12)]);
var inst_33668__$1 = (state_33718[(2)]);
var inst_33669 = cljs.core.get.call(null,inst_33668__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33670 = cljs.core.get.call(null,inst_33668__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33671 = cljs.core.get.call(null,inst_33668__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33718__$1 = (function (){var statearr_33733 = state_33718;
(statearr_33733[(9)] = inst_33669);

(statearr_33733[(13)] = inst_33670);

(statearr_33733[(12)] = inst_33668__$1);

return statearr_33733;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33718__$1,(22),inst_33671);
} else {
if((state_val_33719 === (31))){
var inst_33700 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33700)){
var statearr_33734_33790 = state_33718__$1;
(statearr_33734_33790[(1)] = (32));

} else {
var statearr_33735_33791 = state_33718__$1;
(statearr_33735_33791[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (32))){
var inst_33677 = (state_33718[(14)]);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33718__$1,(35),out,inst_33677);
} else {
if((state_val_33719 === (33))){
var inst_33668 = (state_33718[(12)]);
var inst_33645 = inst_33668;
var state_33718__$1 = (function (){var statearr_33736 = state_33718;
(statearr_33736[(7)] = inst_33645);

return statearr_33736;
})();
var statearr_33737_33792 = state_33718__$1;
(statearr_33737_33792[(2)] = null);

(statearr_33737_33792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (13))){
var inst_33645 = (state_33718[(7)]);
var inst_33652 = inst_33645.cljs$lang$protocol_mask$partition0$;
var inst_33653 = (inst_33652 & (64));
var inst_33654 = inst_33645.cljs$core$ISeq$;
var inst_33655 = (cljs.core.PROTOCOL_SENTINEL === inst_33654);
var inst_33656 = ((inst_33653) || (inst_33655));
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33656)){
var statearr_33738_33793 = state_33718__$1;
(statearr_33738_33793[(1)] = (16));

} else {
var statearr_33739_33794 = state_33718__$1;
(statearr_33739_33794[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (22))){
var inst_33677 = (state_33718[(14)]);
var inst_33678 = (state_33718[(10)]);
var inst_33676 = (state_33718[(2)]);
var inst_33677__$1 = cljs.core.nth.call(null,inst_33676,(0),null);
var inst_33678__$1 = cljs.core.nth.call(null,inst_33676,(1),null);
var inst_33679 = (inst_33677__$1 == null);
var inst_33680 = cljs.core._EQ_.call(null,inst_33678__$1,change);
var inst_33681 = ((inst_33679) || (inst_33680));
var state_33718__$1 = (function (){var statearr_33740 = state_33718;
(statearr_33740[(14)] = inst_33677__$1);

(statearr_33740[(10)] = inst_33678__$1);

return statearr_33740;
})();
if(cljs.core.truth_(inst_33681)){
var statearr_33741_33795 = state_33718__$1;
(statearr_33741_33795[(1)] = (23));

} else {
var statearr_33742_33796 = state_33718__$1;
(statearr_33742_33796[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (36))){
var inst_33668 = (state_33718[(12)]);
var inst_33645 = inst_33668;
var state_33718__$1 = (function (){var statearr_33743 = state_33718;
(statearr_33743[(7)] = inst_33645);

return statearr_33743;
})();
var statearr_33744_33797 = state_33718__$1;
(statearr_33744_33797[(2)] = null);

(statearr_33744_33797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (29))){
var inst_33692 = (state_33718[(11)]);
var state_33718__$1 = state_33718;
var statearr_33745_33798 = state_33718__$1;
(statearr_33745_33798[(2)] = inst_33692);

(statearr_33745_33798[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (6))){
var state_33718__$1 = state_33718;
var statearr_33746_33799 = state_33718__$1;
(statearr_33746_33799[(2)] = false);

(statearr_33746_33799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (28))){
var inst_33688 = (state_33718[(2)]);
var inst_33689 = calc_state.call(null);
var inst_33645 = inst_33689;
var state_33718__$1 = (function (){var statearr_33747 = state_33718;
(statearr_33747[(15)] = inst_33688);

(statearr_33747[(7)] = inst_33645);

return statearr_33747;
})();
var statearr_33748_33800 = state_33718__$1;
(statearr_33748_33800[(2)] = null);

(statearr_33748_33800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (25))){
var inst_33714 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33749_33801 = state_33718__$1;
(statearr_33749_33801[(2)] = inst_33714);

(statearr_33749_33801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (34))){
var inst_33712 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33750_33802 = state_33718__$1;
(statearr_33750_33802[(2)] = inst_33712);

(statearr_33750_33802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (17))){
var state_33718__$1 = state_33718;
var statearr_33751_33803 = state_33718__$1;
(statearr_33751_33803[(2)] = false);

(statearr_33751_33803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (3))){
var state_33718__$1 = state_33718;
var statearr_33752_33804 = state_33718__$1;
(statearr_33752_33804[(2)] = false);

(statearr_33752_33804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (12))){
var inst_33716 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33718__$1,inst_33716);
} else {
if((state_val_33719 === (2))){
var inst_33620 = (state_33718[(8)]);
var inst_33625 = inst_33620.cljs$lang$protocol_mask$partition0$;
var inst_33626 = (inst_33625 & (64));
var inst_33627 = inst_33620.cljs$core$ISeq$;
var inst_33628 = (cljs.core.PROTOCOL_SENTINEL === inst_33627);
var inst_33629 = ((inst_33626) || (inst_33628));
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33629)){
var statearr_33753_33805 = state_33718__$1;
(statearr_33753_33805[(1)] = (5));

} else {
var statearr_33754_33806 = state_33718__$1;
(statearr_33754_33806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (23))){
var inst_33677 = (state_33718[(14)]);
var inst_33683 = (inst_33677 == null);
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33683)){
var statearr_33755_33807 = state_33718__$1;
(statearr_33755_33807[(1)] = (26));

} else {
var statearr_33756_33808 = state_33718__$1;
(statearr_33756_33808[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (35))){
var inst_33703 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33703)){
var statearr_33757_33809 = state_33718__$1;
(statearr_33757_33809[(1)] = (36));

} else {
var statearr_33758_33810 = state_33718__$1;
(statearr_33758_33810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (19))){
var inst_33645 = (state_33718[(7)]);
var inst_33665 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33645);
var state_33718__$1 = state_33718;
var statearr_33759_33811 = state_33718__$1;
(statearr_33759_33811[(2)] = inst_33665);

(statearr_33759_33811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (11))){
var inst_33645 = (state_33718[(7)]);
var inst_33649 = (inst_33645 == null);
var inst_33650 = cljs.core.not.call(null,inst_33649);
var state_33718__$1 = state_33718;
if(inst_33650){
var statearr_33760_33812 = state_33718__$1;
(statearr_33760_33812[(1)] = (13));

} else {
var statearr_33761_33813 = state_33718__$1;
(statearr_33761_33813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (9))){
var inst_33620 = (state_33718[(8)]);
var state_33718__$1 = state_33718;
var statearr_33762_33814 = state_33718__$1;
(statearr_33762_33814[(2)] = inst_33620);

(statearr_33762_33814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (5))){
var state_33718__$1 = state_33718;
var statearr_33763_33815 = state_33718__$1;
(statearr_33763_33815[(2)] = true);

(statearr_33763_33815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (14))){
var state_33718__$1 = state_33718;
var statearr_33764_33816 = state_33718__$1;
(statearr_33764_33816[(2)] = false);

(statearr_33764_33816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (26))){
var inst_33678 = (state_33718[(10)]);
var inst_33685 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33678);
var state_33718__$1 = state_33718;
var statearr_33765_33817 = state_33718__$1;
(statearr_33765_33817[(2)] = inst_33685);

(statearr_33765_33817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (16))){
var state_33718__$1 = state_33718;
var statearr_33766_33818 = state_33718__$1;
(statearr_33766_33818[(2)] = true);

(statearr_33766_33818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (38))){
var inst_33708 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33767_33819 = state_33718__$1;
(statearr_33767_33819[(2)] = inst_33708);

(statearr_33767_33819[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (30))){
var inst_33669 = (state_33718[(9)]);
var inst_33670 = (state_33718[(13)]);
var inst_33678 = (state_33718[(10)]);
var inst_33695 = cljs.core.empty_QMARK_.call(null,inst_33669);
var inst_33696 = inst_33670.call(null,inst_33678);
var inst_33697 = cljs.core.not.call(null,inst_33696);
var inst_33698 = ((inst_33695) && (inst_33697));
var state_33718__$1 = state_33718;
var statearr_33768_33820 = state_33718__$1;
(statearr_33768_33820[(2)] = inst_33698);

(statearr_33768_33820[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (10))){
var inst_33620 = (state_33718[(8)]);
var inst_33641 = (state_33718[(2)]);
var inst_33642 = cljs.core.get.call(null,inst_33641,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33643 = cljs.core.get.call(null,inst_33641,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33644 = cljs.core.get.call(null,inst_33641,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33645 = inst_33620;
var state_33718__$1 = (function (){var statearr_33769 = state_33718;
(statearr_33769[(16)] = inst_33643);

(statearr_33769[(7)] = inst_33645);

(statearr_33769[(17)] = inst_33644);

(statearr_33769[(18)] = inst_33642);

return statearr_33769;
})();
var statearr_33770_33821 = state_33718__$1;
(statearr_33770_33821[(2)] = null);

(statearr_33770_33821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (18))){
var inst_33660 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33771_33822 = state_33718__$1;
(statearr_33771_33822[(2)] = inst_33660);

(statearr_33771_33822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (37))){
var state_33718__$1 = state_33718;
var statearr_33772_33823 = state_33718__$1;
(statearr_33772_33823[(2)] = null);

(statearr_33772_33823[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (8))){
var inst_33620 = (state_33718[(8)]);
var inst_33638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33620);
var state_33718__$1 = state_33718;
var statearr_33773_33824 = state_33718__$1;
(statearr_33773_33824[(2)] = inst_33638);

(statearr_33773_33824[(1)] = (10));


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
});})(c__32720__auto___33778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32625__auto__,c__32720__auto___33778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32626__auto__ = null;
var cljs$core$async$mix_$_state_machine__32626__auto____0 = (function (){
var statearr_33774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33774[(0)] = cljs$core$async$mix_$_state_machine__32626__auto__);

(statearr_33774[(1)] = (1));

return statearr_33774;
});
var cljs$core$async$mix_$_state_machine__32626__auto____1 = (function (state_33718){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33775){if((e33775 instanceof Object)){
var ex__32629__auto__ = e33775;
var statearr_33776_33825 = state_33718;
(statearr_33776_33825[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33826 = state_33718;
state_33718 = G__33826;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32626__auto__ = function(state_33718){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32626__auto____1.call(this,state_33718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32626__auto____0;
cljs$core$async$mix_$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32626__auto____1;
return cljs$core$async$mix_$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___33778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32722__auto__ = (function (){var statearr_33777 = f__32721__auto__.call(null);
(statearr_33777[(6)] = c__32720__auto___33778);

return statearr_33777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___33778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33828 = arguments.length;
switch (G__33828) {
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
var G__33832 = arguments.length;
switch (G__33832) {
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
return (function (p1__33830_SHARP_){
if(cljs.core.truth_(p1__33830_SHARP_.call(null,topic))){
return p1__33830_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33830_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33833 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33834){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33834 = meta33834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33835,meta33834__$1){
var self__ = this;
var _33835__$1 = this;
return (new cljs.core.async.t_cljs$core$async33833(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33834__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33835){
var self__ = this;
var _33835__$1 = this;
return self__.meta33834;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33833.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33834","meta33834",-1800136879,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33833";

cljs.core.async.t_cljs$core$async33833.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33833");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33833.
 */
cljs.core.async.__GT_t_cljs$core$async33833 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33834){
return (new cljs.core.async.t_cljs$core$async33833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33834));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33833(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32720__auto___33953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___33953,mults,ensure_mult,p){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___33953,mults,ensure_mult,p){
return (function (state_33907){
var state_val_33908 = (state_33907[(1)]);
if((state_val_33908 === (7))){
var inst_33903 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33909_33954 = state_33907__$1;
(statearr_33909_33954[(2)] = inst_33903);

(statearr_33909_33954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (20))){
var state_33907__$1 = state_33907;
var statearr_33910_33955 = state_33907__$1;
(statearr_33910_33955[(2)] = null);

(statearr_33910_33955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (1))){
var state_33907__$1 = state_33907;
var statearr_33911_33956 = state_33907__$1;
(statearr_33911_33956[(2)] = null);

(statearr_33911_33956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (24))){
var inst_33886 = (state_33907[(7)]);
var inst_33895 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33886);
var state_33907__$1 = state_33907;
var statearr_33912_33957 = state_33907__$1;
(statearr_33912_33957[(2)] = inst_33895);

(statearr_33912_33957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (4))){
var inst_33838 = (state_33907[(8)]);
var inst_33838__$1 = (state_33907[(2)]);
var inst_33839 = (inst_33838__$1 == null);
var state_33907__$1 = (function (){var statearr_33913 = state_33907;
(statearr_33913[(8)] = inst_33838__$1);

return statearr_33913;
})();
if(cljs.core.truth_(inst_33839)){
var statearr_33914_33958 = state_33907__$1;
(statearr_33914_33958[(1)] = (5));

} else {
var statearr_33915_33959 = state_33907__$1;
(statearr_33915_33959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (15))){
var inst_33880 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33916_33960 = state_33907__$1;
(statearr_33916_33960[(2)] = inst_33880);

(statearr_33916_33960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (21))){
var inst_33900 = (state_33907[(2)]);
var state_33907__$1 = (function (){var statearr_33917 = state_33907;
(statearr_33917[(9)] = inst_33900);

return statearr_33917;
})();
var statearr_33918_33961 = state_33907__$1;
(statearr_33918_33961[(2)] = null);

(statearr_33918_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (13))){
var inst_33862 = (state_33907[(10)]);
var inst_33864 = cljs.core.chunked_seq_QMARK_.call(null,inst_33862);
var state_33907__$1 = state_33907;
if(inst_33864){
var statearr_33919_33962 = state_33907__$1;
(statearr_33919_33962[(1)] = (16));

} else {
var statearr_33920_33963 = state_33907__$1;
(statearr_33920_33963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (22))){
var inst_33892 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33892)){
var statearr_33921_33964 = state_33907__$1;
(statearr_33921_33964[(1)] = (23));

} else {
var statearr_33922_33965 = state_33907__$1;
(statearr_33922_33965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (6))){
var inst_33888 = (state_33907[(11)]);
var inst_33886 = (state_33907[(7)]);
var inst_33838 = (state_33907[(8)]);
var inst_33886__$1 = topic_fn.call(null,inst_33838);
var inst_33887 = cljs.core.deref.call(null,mults);
var inst_33888__$1 = cljs.core.get.call(null,inst_33887,inst_33886__$1);
var state_33907__$1 = (function (){var statearr_33923 = state_33907;
(statearr_33923[(11)] = inst_33888__$1);

(statearr_33923[(7)] = inst_33886__$1);

return statearr_33923;
})();
if(cljs.core.truth_(inst_33888__$1)){
var statearr_33924_33966 = state_33907__$1;
(statearr_33924_33966[(1)] = (19));

} else {
var statearr_33925_33967 = state_33907__$1;
(statearr_33925_33967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (25))){
var inst_33897 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33926_33968 = state_33907__$1;
(statearr_33926_33968[(2)] = inst_33897);

(statearr_33926_33968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (17))){
var inst_33862 = (state_33907[(10)]);
var inst_33871 = cljs.core.first.call(null,inst_33862);
var inst_33872 = cljs.core.async.muxch_STAR_.call(null,inst_33871);
var inst_33873 = cljs.core.async.close_BANG_.call(null,inst_33872);
var inst_33874 = cljs.core.next.call(null,inst_33862);
var inst_33848 = inst_33874;
var inst_33849 = null;
var inst_33850 = (0);
var inst_33851 = (0);
var state_33907__$1 = (function (){var statearr_33927 = state_33907;
(statearr_33927[(12)] = inst_33873);

(statearr_33927[(13)] = inst_33851);

(statearr_33927[(14)] = inst_33850);

(statearr_33927[(15)] = inst_33849);

(statearr_33927[(16)] = inst_33848);

return statearr_33927;
})();
var statearr_33928_33969 = state_33907__$1;
(statearr_33928_33969[(2)] = null);

(statearr_33928_33969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (3))){
var inst_33905 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33907__$1,inst_33905);
} else {
if((state_val_33908 === (12))){
var inst_33882 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33929_33970 = state_33907__$1;
(statearr_33929_33970[(2)] = inst_33882);

(statearr_33929_33970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (2))){
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,(4),ch);
} else {
if((state_val_33908 === (23))){
var state_33907__$1 = state_33907;
var statearr_33930_33971 = state_33907__$1;
(statearr_33930_33971[(2)] = null);

(statearr_33930_33971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (19))){
var inst_33888 = (state_33907[(11)]);
var inst_33838 = (state_33907[(8)]);
var inst_33890 = cljs.core.async.muxch_STAR_.call(null,inst_33888);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33907__$1,(22),inst_33890,inst_33838);
} else {
if((state_val_33908 === (11))){
var inst_33862 = (state_33907[(10)]);
var inst_33848 = (state_33907[(16)]);
var inst_33862__$1 = cljs.core.seq.call(null,inst_33848);
var state_33907__$1 = (function (){var statearr_33931 = state_33907;
(statearr_33931[(10)] = inst_33862__$1);

return statearr_33931;
})();
if(inst_33862__$1){
var statearr_33932_33972 = state_33907__$1;
(statearr_33932_33972[(1)] = (13));

} else {
var statearr_33933_33973 = state_33907__$1;
(statearr_33933_33973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (9))){
var inst_33884 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33934_33974 = state_33907__$1;
(statearr_33934_33974[(2)] = inst_33884);

(statearr_33934_33974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (5))){
var inst_33845 = cljs.core.deref.call(null,mults);
var inst_33846 = cljs.core.vals.call(null,inst_33845);
var inst_33847 = cljs.core.seq.call(null,inst_33846);
var inst_33848 = inst_33847;
var inst_33849 = null;
var inst_33850 = (0);
var inst_33851 = (0);
var state_33907__$1 = (function (){var statearr_33935 = state_33907;
(statearr_33935[(13)] = inst_33851);

(statearr_33935[(14)] = inst_33850);

(statearr_33935[(15)] = inst_33849);

(statearr_33935[(16)] = inst_33848);

return statearr_33935;
})();
var statearr_33936_33975 = state_33907__$1;
(statearr_33936_33975[(2)] = null);

(statearr_33936_33975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (14))){
var state_33907__$1 = state_33907;
var statearr_33940_33976 = state_33907__$1;
(statearr_33940_33976[(2)] = null);

(statearr_33940_33976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (16))){
var inst_33862 = (state_33907[(10)]);
var inst_33866 = cljs.core.chunk_first.call(null,inst_33862);
var inst_33867 = cljs.core.chunk_rest.call(null,inst_33862);
var inst_33868 = cljs.core.count.call(null,inst_33866);
var inst_33848 = inst_33867;
var inst_33849 = inst_33866;
var inst_33850 = inst_33868;
var inst_33851 = (0);
var state_33907__$1 = (function (){var statearr_33941 = state_33907;
(statearr_33941[(13)] = inst_33851);

(statearr_33941[(14)] = inst_33850);

(statearr_33941[(15)] = inst_33849);

(statearr_33941[(16)] = inst_33848);

return statearr_33941;
})();
var statearr_33942_33977 = state_33907__$1;
(statearr_33942_33977[(2)] = null);

(statearr_33942_33977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (10))){
var inst_33851 = (state_33907[(13)]);
var inst_33850 = (state_33907[(14)]);
var inst_33849 = (state_33907[(15)]);
var inst_33848 = (state_33907[(16)]);
var inst_33856 = cljs.core._nth.call(null,inst_33849,inst_33851);
var inst_33857 = cljs.core.async.muxch_STAR_.call(null,inst_33856);
var inst_33858 = cljs.core.async.close_BANG_.call(null,inst_33857);
var inst_33859 = (inst_33851 + (1));
var tmp33937 = inst_33850;
var tmp33938 = inst_33849;
var tmp33939 = inst_33848;
var inst_33848__$1 = tmp33939;
var inst_33849__$1 = tmp33938;
var inst_33850__$1 = tmp33937;
var inst_33851__$1 = inst_33859;
var state_33907__$1 = (function (){var statearr_33943 = state_33907;
(statearr_33943[(17)] = inst_33858);

(statearr_33943[(13)] = inst_33851__$1);

(statearr_33943[(14)] = inst_33850__$1);

(statearr_33943[(15)] = inst_33849__$1);

(statearr_33943[(16)] = inst_33848__$1);

return statearr_33943;
})();
var statearr_33944_33978 = state_33907__$1;
(statearr_33944_33978[(2)] = null);

(statearr_33944_33978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (18))){
var inst_33877 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33945_33979 = state_33907__$1;
(statearr_33945_33979[(2)] = inst_33877);

(statearr_33945_33979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (8))){
var inst_33851 = (state_33907[(13)]);
var inst_33850 = (state_33907[(14)]);
var inst_33853 = (inst_33851 < inst_33850);
var inst_33854 = inst_33853;
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33854)){
var statearr_33946_33980 = state_33907__$1;
(statearr_33946_33980[(1)] = (10));

} else {
var statearr_33947_33981 = state_33907__$1;
(statearr_33947_33981[(1)] = (11));

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
});})(c__32720__auto___33953,mults,ensure_mult,p))
;
return ((function (switch__32625__auto__,c__32720__auto___33953,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_33948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33948[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_33948[(1)] = (1));

return statearr_33948;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_33907){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_33907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e33949){if((e33949 instanceof Object)){
var ex__32629__auto__ = e33949;
var statearr_33950_33982 = state_33907;
(statearr_33950_33982[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33983 = state_33907;
state_33907 = G__33983;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___33953,mults,ensure_mult,p))
})();
var state__32722__auto__ = (function (){var statearr_33951 = f__32721__auto__.call(null);
(statearr_33951[(6)] = c__32720__auto___33953);

return statearr_33951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___33953,mults,ensure_mult,p))
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
var G__33985 = arguments.length;
switch (G__33985) {
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
var G__33988 = arguments.length;
switch (G__33988) {
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
var G__33991 = arguments.length;
switch (G__33991) {
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
var c__32720__auto___34058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34058,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34058,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34030){
var state_val_34031 = (state_34030[(1)]);
if((state_val_34031 === (7))){
var state_34030__$1 = state_34030;
var statearr_34032_34059 = state_34030__$1;
(statearr_34032_34059[(2)] = null);

(statearr_34032_34059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (1))){
var state_34030__$1 = state_34030;
var statearr_34033_34060 = state_34030__$1;
(statearr_34033_34060[(2)] = null);

(statearr_34033_34060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (4))){
var inst_33994 = (state_34030[(7)]);
var inst_33996 = (inst_33994 < cnt);
var state_34030__$1 = state_34030;
if(cljs.core.truth_(inst_33996)){
var statearr_34034_34061 = state_34030__$1;
(statearr_34034_34061[(1)] = (6));

} else {
var statearr_34035_34062 = state_34030__$1;
(statearr_34035_34062[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (15))){
var inst_34026 = (state_34030[(2)]);
var state_34030__$1 = state_34030;
var statearr_34036_34063 = state_34030__$1;
(statearr_34036_34063[(2)] = inst_34026);

(statearr_34036_34063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (13))){
var inst_34019 = cljs.core.async.close_BANG_.call(null,out);
var state_34030__$1 = state_34030;
var statearr_34037_34064 = state_34030__$1;
(statearr_34037_34064[(2)] = inst_34019);

(statearr_34037_34064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (6))){
var state_34030__$1 = state_34030;
var statearr_34038_34065 = state_34030__$1;
(statearr_34038_34065[(2)] = null);

(statearr_34038_34065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (3))){
var inst_34028 = (state_34030[(2)]);
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34030__$1,inst_34028);
} else {
if((state_val_34031 === (12))){
var inst_34016 = (state_34030[(8)]);
var inst_34016__$1 = (state_34030[(2)]);
var inst_34017 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34016__$1);
var state_34030__$1 = (function (){var statearr_34039 = state_34030;
(statearr_34039[(8)] = inst_34016__$1);

return statearr_34039;
})();
if(cljs.core.truth_(inst_34017)){
var statearr_34040_34066 = state_34030__$1;
(statearr_34040_34066[(1)] = (13));

} else {
var statearr_34041_34067 = state_34030__$1;
(statearr_34041_34067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (2))){
var inst_33993 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33994 = (0);
var state_34030__$1 = (function (){var statearr_34042 = state_34030;
(statearr_34042[(9)] = inst_33993);

(statearr_34042[(7)] = inst_33994);

return statearr_34042;
})();
var statearr_34043_34068 = state_34030__$1;
(statearr_34043_34068[(2)] = null);

(statearr_34043_34068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (11))){
var inst_33994 = (state_34030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34030,(10),Object,null,(9));
var inst_34003 = chs__$1.call(null,inst_33994);
var inst_34004 = done.call(null,inst_33994);
var inst_34005 = cljs.core.async.take_BANG_.call(null,inst_34003,inst_34004);
var state_34030__$1 = state_34030;
var statearr_34044_34069 = state_34030__$1;
(statearr_34044_34069[(2)] = inst_34005);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (9))){
var inst_33994 = (state_34030[(7)]);
var inst_34007 = (state_34030[(2)]);
var inst_34008 = (inst_33994 + (1));
var inst_33994__$1 = inst_34008;
var state_34030__$1 = (function (){var statearr_34045 = state_34030;
(statearr_34045[(10)] = inst_34007);

(statearr_34045[(7)] = inst_33994__$1);

return statearr_34045;
})();
var statearr_34046_34070 = state_34030__$1;
(statearr_34046_34070[(2)] = null);

(statearr_34046_34070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (5))){
var inst_34014 = (state_34030[(2)]);
var state_34030__$1 = (function (){var statearr_34047 = state_34030;
(statearr_34047[(11)] = inst_34014);

return statearr_34047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34030__$1,(12),dchan);
} else {
if((state_val_34031 === (14))){
var inst_34016 = (state_34030[(8)]);
var inst_34021 = cljs.core.apply.call(null,f,inst_34016);
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34030__$1,(16),out,inst_34021);
} else {
if((state_val_34031 === (16))){
var inst_34023 = (state_34030[(2)]);
var state_34030__$1 = (function (){var statearr_34048 = state_34030;
(statearr_34048[(12)] = inst_34023);

return statearr_34048;
})();
var statearr_34049_34071 = state_34030__$1;
(statearr_34049_34071[(2)] = null);

(statearr_34049_34071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (10))){
var inst_33998 = (state_34030[(2)]);
var inst_33999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34030__$1 = (function (){var statearr_34050 = state_34030;
(statearr_34050[(13)] = inst_33998);

return statearr_34050;
})();
var statearr_34051_34072 = state_34030__$1;
(statearr_34051_34072[(2)] = inst_33999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (8))){
var inst_34012 = (state_34030[(2)]);
var state_34030__$1 = state_34030;
var statearr_34052_34073 = state_34030__$1;
(statearr_34052_34073[(2)] = inst_34012);

(statearr_34052_34073[(1)] = (5));


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
});})(c__32720__auto___34058,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32625__auto__,c__32720__auto___34058,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_34053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34053[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_34053[(1)] = (1));

return statearr_34053;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_34030){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34054){if((e34054 instanceof Object)){
var ex__32629__auto__ = e34054;
var statearr_34055_34074 = state_34030;
(statearr_34055_34074[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34075 = state_34030;
state_34030 = G__34075;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_34030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_34030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34058,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32722__auto__ = (function (){var statearr_34056 = f__32721__auto__.call(null);
(statearr_34056[(6)] = c__32720__auto___34058);

return statearr_34056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34058,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34078 = arguments.length;
switch (G__34078) {
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
var c__32720__auto___34132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34132,out){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34132,out){
return (function (state_34110){
var state_val_34111 = (state_34110[(1)]);
if((state_val_34111 === (7))){
var inst_34089 = (state_34110[(7)]);
var inst_34090 = (state_34110[(8)]);
var inst_34089__$1 = (state_34110[(2)]);
var inst_34090__$1 = cljs.core.nth.call(null,inst_34089__$1,(0),null);
var inst_34091 = cljs.core.nth.call(null,inst_34089__$1,(1),null);
var inst_34092 = (inst_34090__$1 == null);
var state_34110__$1 = (function (){var statearr_34112 = state_34110;
(statearr_34112[(9)] = inst_34091);

(statearr_34112[(7)] = inst_34089__$1);

(statearr_34112[(8)] = inst_34090__$1);

return statearr_34112;
})();
if(cljs.core.truth_(inst_34092)){
var statearr_34113_34133 = state_34110__$1;
(statearr_34113_34133[(1)] = (8));

} else {
var statearr_34114_34134 = state_34110__$1;
(statearr_34114_34134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (1))){
var inst_34079 = cljs.core.vec.call(null,chs);
var inst_34080 = inst_34079;
var state_34110__$1 = (function (){var statearr_34115 = state_34110;
(statearr_34115[(10)] = inst_34080);

return statearr_34115;
})();
var statearr_34116_34135 = state_34110__$1;
(statearr_34116_34135[(2)] = null);

(statearr_34116_34135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (4))){
var inst_34080 = (state_34110[(10)]);
var state_34110__$1 = state_34110;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34110__$1,(7),inst_34080);
} else {
if((state_val_34111 === (6))){
var inst_34106 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34117_34136 = state_34110__$1;
(statearr_34117_34136[(2)] = inst_34106);

(statearr_34117_34136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (3))){
var inst_34108 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34110__$1,inst_34108);
} else {
if((state_val_34111 === (2))){
var inst_34080 = (state_34110[(10)]);
var inst_34082 = cljs.core.count.call(null,inst_34080);
var inst_34083 = (inst_34082 > (0));
var state_34110__$1 = state_34110;
if(cljs.core.truth_(inst_34083)){
var statearr_34119_34137 = state_34110__$1;
(statearr_34119_34137[(1)] = (4));

} else {
var statearr_34120_34138 = state_34110__$1;
(statearr_34120_34138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (11))){
var inst_34080 = (state_34110[(10)]);
var inst_34099 = (state_34110[(2)]);
var tmp34118 = inst_34080;
var inst_34080__$1 = tmp34118;
var state_34110__$1 = (function (){var statearr_34121 = state_34110;
(statearr_34121[(10)] = inst_34080__$1);

(statearr_34121[(11)] = inst_34099);

return statearr_34121;
})();
var statearr_34122_34139 = state_34110__$1;
(statearr_34122_34139[(2)] = null);

(statearr_34122_34139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (9))){
var inst_34090 = (state_34110[(8)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34110__$1,(11),out,inst_34090);
} else {
if((state_val_34111 === (5))){
var inst_34104 = cljs.core.async.close_BANG_.call(null,out);
var state_34110__$1 = state_34110;
var statearr_34123_34140 = state_34110__$1;
(statearr_34123_34140[(2)] = inst_34104);

(statearr_34123_34140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (10))){
var inst_34102 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34124_34141 = state_34110__$1;
(statearr_34124_34141[(2)] = inst_34102);

(statearr_34124_34141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (8))){
var inst_34091 = (state_34110[(9)]);
var inst_34080 = (state_34110[(10)]);
var inst_34089 = (state_34110[(7)]);
var inst_34090 = (state_34110[(8)]);
var inst_34094 = (function (){var cs = inst_34080;
var vec__34085 = inst_34089;
var v = inst_34090;
var c = inst_34091;
return ((function (cs,vec__34085,v,c,inst_34091,inst_34080,inst_34089,inst_34090,state_val_34111,c__32720__auto___34132,out){
return (function (p1__34076_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34076_SHARP_);
});
;})(cs,vec__34085,v,c,inst_34091,inst_34080,inst_34089,inst_34090,state_val_34111,c__32720__auto___34132,out))
})();
var inst_34095 = cljs.core.filterv.call(null,inst_34094,inst_34080);
var inst_34080__$1 = inst_34095;
var state_34110__$1 = (function (){var statearr_34125 = state_34110;
(statearr_34125[(10)] = inst_34080__$1);

return statearr_34125;
})();
var statearr_34126_34142 = state_34110__$1;
(statearr_34126_34142[(2)] = null);

(statearr_34126_34142[(1)] = (2));


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
});})(c__32720__auto___34132,out))
;
return ((function (switch__32625__auto__,c__32720__auto___34132,out){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_34127 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34127[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_34127[(1)] = (1));

return statearr_34127;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_34110){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34128){if((e34128 instanceof Object)){
var ex__32629__auto__ = e34128;
var statearr_34129_34143 = state_34110;
(statearr_34129_34143[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34144 = state_34110;
state_34110 = G__34144;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_34110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_34110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34132,out))
})();
var state__32722__auto__ = (function (){var statearr_34130 = f__32721__auto__.call(null);
(statearr_34130[(6)] = c__32720__auto___34132);

return statearr_34130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34132,out))
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
var G__34146 = arguments.length;
switch (G__34146) {
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
var c__32720__auto___34191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34191,out){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34191,out){
return (function (state_34170){
var state_val_34171 = (state_34170[(1)]);
if((state_val_34171 === (7))){
var inst_34152 = (state_34170[(7)]);
var inst_34152__$1 = (state_34170[(2)]);
var inst_34153 = (inst_34152__$1 == null);
var inst_34154 = cljs.core.not.call(null,inst_34153);
var state_34170__$1 = (function (){var statearr_34172 = state_34170;
(statearr_34172[(7)] = inst_34152__$1);

return statearr_34172;
})();
if(inst_34154){
var statearr_34173_34192 = state_34170__$1;
(statearr_34173_34192[(1)] = (8));

} else {
var statearr_34174_34193 = state_34170__$1;
(statearr_34174_34193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (1))){
var inst_34147 = (0);
var state_34170__$1 = (function (){var statearr_34175 = state_34170;
(statearr_34175[(8)] = inst_34147);

return statearr_34175;
})();
var statearr_34176_34194 = state_34170__$1;
(statearr_34176_34194[(2)] = null);

(statearr_34176_34194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (4))){
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34170__$1,(7),ch);
} else {
if((state_val_34171 === (6))){
var inst_34165 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34177_34195 = state_34170__$1;
(statearr_34177_34195[(2)] = inst_34165);

(statearr_34177_34195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (3))){
var inst_34167 = (state_34170[(2)]);
var inst_34168 = cljs.core.async.close_BANG_.call(null,out);
var state_34170__$1 = (function (){var statearr_34178 = state_34170;
(statearr_34178[(9)] = inst_34167);

return statearr_34178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34170__$1,inst_34168);
} else {
if((state_val_34171 === (2))){
var inst_34147 = (state_34170[(8)]);
var inst_34149 = (inst_34147 < n);
var state_34170__$1 = state_34170;
if(cljs.core.truth_(inst_34149)){
var statearr_34179_34196 = state_34170__$1;
(statearr_34179_34196[(1)] = (4));

} else {
var statearr_34180_34197 = state_34170__$1;
(statearr_34180_34197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (11))){
var inst_34147 = (state_34170[(8)]);
var inst_34157 = (state_34170[(2)]);
var inst_34158 = (inst_34147 + (1));
var inst_34147__$1 = inst_34158;
var state_34170__$1 = (function (){var statearr_34181 = state_34170;
(statearr_34181[(8)] = inst_34147__$1);

(statearr_34181[(10)] = inst_34157);

return statearr_34181;
})();
var statearr_34182_34198 = state_34170__$1;
(statearr_34182_34198[(2)] = null);

(statearr_34182_34198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (9))){
var state_34170__$1 = state_34170;
var statearr_34183_34199 = state_34170__$1;
(statearr_34183_34199[(2)] = null);

(statearr_34183_34199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (5))){
var state_34170__$1 = state_34170;
var statearr_34184_34200 = state_34170__$1;
(statearr_34184_34200[(2)] = null);

(statearr_34184_34200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (10))){
var inst_34162 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34185_34201 = state_34170__$1;
(statearr_34185_34201[(2)] = inst_34162);

(statearr_34185_34201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (8))){
var inst_34152 = (state_34170[(7)]);
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34170__$1,(11),out,inst_34152);
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
});})(c__32720__auto___34191,out))
;
return ((function (switch__32625__auto__,c__32720__auto___34191,out){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_34186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34186[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_34186[(1)] = (1));

return statearr_34186;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_34170){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34187){if((e34187 instanceof Object)){
var ex__32629__auto__ = e34187;
var statearr_34188_34202 = state_34170;
(statearr_34188_34202[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34203 = state_34170;
state_34170 = G__34203;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_34170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_34170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34191,out))
})();
var state__32722__auto__ = (function (){var statearr_34189 = f__32721__auto__.call(null);
(statearr_34189[(6)] = c__32720__auto___34191);

return statearr_34189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34191,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34205 = (function (f,ch,meta34206){
this.f = f;
this.ch = ch;
this.meta34206 = meta34206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34207,meta34206__$1){
var self__ = this;
var _34207__$1 = this;
return (new cljs.core.async.t_cljs$core$async34205(self__.f,self__.ch,meta34206__$1));
});

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34207){
var self__ = this;
var _34207__$1 = this;
return self__.meta34206;
});

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34208 = (function (f,ch,meta34206,_,fn1,meta34209){
this.f = f;
this.ch = ch;
this.meta34206 = meta34206;
this._ = _;
this.fn1 = fn1;
this.meta34209 = meta34209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34210,meta34209__$1){
var self__ = this;
var _34210__$1 = this;
return (new cljs.core.async.t_cljs$core$async34208(self__.f,self__.ch,self__.meta34206,self__._,self__.fn1,meta34209__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34210){
var self__ = this;
var _34210__$1 = this;
return self__.meta34209;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34208.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34204_SHARP_){
return f1.call(null,(((p1__34204_SHARP_ == null))?null:self__.f.call(null,p1__34204_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34208.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34206","meta34206",-612121732,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34205","cljs.core.async/t_cljs$core$async34205",-394060982,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34209","meta34209",-813870143,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34208";

cljs.core.async.t_cljs$core$async34208.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34208");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34208.
 */
cljs.core.async.__GT_t_cljs$core$async34208 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34208(f__$1,ch__$1,meta34206__$1,___$2,fn1__$1,meta34209){
return (new cljs.core.async.t_cljs$core$async34208(f__$1,ch__$1,meta34206__$1,___$2,fn1__$1,meta34209));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34208(self__.f,self__.ch,self__.meta34206,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34206","meta34206",-612121732,null)], null);
});

cljs.core.async.t_cljs$core$async34205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34205";

cljs.core.async.t_cljs$core$async34205.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34205");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34205.
 */
cljs.core.async.__GT_t_cljs$core$async34205 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34205(f__$1,ch__$1,meta34206){
return (new cljs.core.async.t_cljs$core$async34205(f__$1,ch__$1,meta34206));
});

}

return (new cljs.core.async.t_cljs$core$async34205(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34211 = (function (f,ch,meta34212){
this.f = f;
this.ch = ch;
this.meta34212 = meta34212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34213,meta34212__$1){
var self__ = this;
var _34213__$1 = this;
return (new cljs.core.async.t_cljs$core$async34211(self__.f,self__.ch,meta34212__$1));
});

cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34213){
var self__ = this;
var _34213__$1 = this;
return self__.meta34212;
});

cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34212","meta34212",-1018002551,null)], null);
});

cljs.core.async.t_cljs$core$async34211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34211";

cljs.core.async.t_cljs$core$async34211.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34211");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34211.
 */
cljs.core.async.__GT_t_cljs$core$async34211 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34211(f__$1,ch__$1,meta34212){
return (new cljs.core.async.t_cljs$core$async34211(f__$1,ch__$1,meta34212));
});

}

return (new cljs.core.async.t_cljs$core$async34211(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34214 = (function (p,ch,meta34215){
this.p = p;
this.ch = ch;
this.meta34215 = meta34215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34216,meta34215__$1){
var self__ = this;
var _34216__$1 = this;
return (new cljs.core.async.t_cljs$core$async34214(self__.p,self__.ch,meta34215__$1));
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34216){
var self__ = this;
var _34216__$1 = this;
return self__.meta34215;
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34215","meta34215",434328583,null)], null);
});

cljs.core.async.t_cljs$core$async34214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34214";

cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34214");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34214.
 */
cljs.core.async.__GT_t_cljs$core$async34214 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34214(p__$1,ch__$1,meta34215){
return (new cljs.core.async.t_cljs$core$async34214(p__$1,ch__$1,meta34215));
});

}

return (new cljs.core.async.t_cljs$core$async34214(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34218 = arguments.length;
switch (G__34218) {
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
var c__32720__auto___34258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34258,out){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34258,out){
return (function (state_34239){
var state_val_34240 = (state_34239[(1)]);
if((state_val_34240 === (7))){
var inst_34235 = (state_34239[(2)]);
var state_34239__$1 = state_34239;
var statearr_34241_34259 = state_34239__$1;
(statearr_34241_34259[(2)] = inst_34235);

(statearr_34241_34259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (1))){
var state_34239__$1 = state_34239;
var statearr_34242_34260 = state_34239__$1;
(statearr_34242_34260[(2)] = null);

(statearr_34242_34260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (4))){
var inst_34221 = (state_34239[(7)]);
var inst_34221__$1 = (state_34239[(2)]);
var inst_34222 = (inst_34221__$1 == null);
var state_34239__$1 = (function (){var statearr_34243 = state_34239;
(statearr_34243[(7)] = inst_34221__$1);

return statearr_34243;
})();
if(cljs.core.truth_(inst_34222)){
var statearr_34244_34261 = state_34239__$1;
(statearr_34244_34261[(1)] = (5));

} else {
var statearr_34245_34262 = state_34239__$1;
(statearr_34245_34262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (6))){
var inst_34221 = (state_34239[(7)]);
var inst_34226 = p.call(null,inst_34221);
var state_34239__$1 = state_34239;
if(cljs.core.truth_(inst_34226)){
var statearr_34246_34263 = state_34239__$1;
(statearr_34246_34263[(1)] = (8));

} else {
var statearr_34247_34264 = state_34239__$1;
(statearr_34247_34264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (3))){
var inst_34237 = (state_34239[(2)]);
var state_34239__$1 = state_34239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34239__$1,inst_34237);
} else {
if((state_val_34240 === (2))){
var state_34239__$1 = state_34239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34239__$1,(4),ch);
} else {
if((state_val_34240 === (11))){
var inst_34229 = (state_34239[(2)]);
var state_34239__$1 = state_34239;
var statearr_34248_34265 = state_34239__$1;
(statearr_34248_34265[(2)] = inst_34229);

(statearr_34248_34265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (9))){
var state_34239__$1 = state_34239;
var statearr_34249_34266 = state_34239__$1;
(statearr_34249_34266[(2)] = null);

(statearr_34249_34266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (5))){
var inst_34224 = cljs.core.async.close_BANG_.call(null,out);
var state_34239__$1 = state_34239;
var statearr_34250_34267 = state_34239__$1;
(statearr_34250_34267[(2)] = inst_34224);

(statearr_34250_34267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (10))){
var inst_34232 = (state_34239[(2)]);
var state_34239__$1 = (function (){var statearr_34251 = state_34239;
(statearr_34251[(8)] = inst_34232);

return statearr_34251;
})();
var statearr_34252_34268 = state_34239__$1;
(statearr_34252_34268[(2)] = null);

(statearr_34252_34268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34240 === (8))){
var inst_34221 = (state_34239[(7)]);
var state_34239__$1 = state_34239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34239__$1,(11),out,inst_34221);
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
});})(c__32720__auto___34258,out))
;
return ((function (switch__32625__auto__,c__32720__auto___34258,out){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_34253 = [null,null,null,null,null,null,null,null,null];
(statearr_34253[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_34253[(1)] = (1));

return statearr_34253;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_34239){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34254){if((e34254 instanceof Object)){
var ex__32629__auto__ = e34254;
var statearr_34255_34269 = state_34239;
(statearr_34255_34269[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34270 = state_34239;
state_34239 = G__34270;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_34239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_34239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34258,out))
})();
var state__32722__auto__ = (function (){var statearr_34256 = f__32721__auto__.call(null);
(statearr_34256[(6)] = c__32720__auto___34258);

return statearr_34256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34258,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34272 = arguments.length;
switch (G__34272) {
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
var c__32720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto__){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto__){
return (function (state_34335){
var state_val_34336 = (state_34335[(1)]);
if((state_val_34336 === (7))){
var inst_34331 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
var statearr_34337_34375 = state_34335__$1;
(statearr_34337_34375[(2)] = inst_34331);

(statearr_34337_34375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (20))){
var inst_34301 = (state_34335[(7)]);
var inst_34312 = (state_34335[(2)]);
var inst_34313 = cljs.core.next.call(null,inst_34301);
var inst_34287 = inst_34313;
var inst_34288 = null;
var inst_34289 = (0);
var inst_34290 = (0);
var state_34335__$1 = (function (){var statearr_34338 = state_34335;
(statearr_34338[(8)] = inst_34287);

(statearr_34338[(9)] = inst_34290);

(statearr_34338[(10)] = inst_34289);

(statearr_34338[(11)] = inst_34312);

(statearr_34338[(12)] = inst_34288);

return statearr_34338;
})();
var statearr_34339_34376 = state_34335__$1;
(statearr_34339_34376[(2)] = null);

(statearr_34339_34376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (1))){
var state_34335__$1 = state_34335;
var statearr_34340_34377 = state_34335__$1;
(statearr_34340_34377[(2)] = null);

(statearr_34340_34377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (4))){
var inst_34276 = (state_34335[(13)]);
var inst_34276__$1 = (state_34335[(2)]);
var inst_34277 = (inst_34276__$1 == null);
var state_34335__$1 = (function (){var statearr_34341 = state_34335;
(statearr_34341[(13)] = inst_34276__$1);

return statearr_34341;
})();
if(cljs.core.truth_(inst_34277)){
var statearr_34342_34378 = state_34335__$1;
(statearr_34342_34378[(1)] = (5));

} else {
var statearr_34343_34379 = state_34335__$1;
(statearr_34343_34379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (15))){
var state_34335__$1 = state_34335;
var statearr_34347_34380 = state_34335__$1;
(statearr_34347_34380[(2)] = null);

(statearr_34347_34380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (21))){
var state_34335__$1 = state_34335;
var statearr_34348_34381 = state_34335__$1;
(statearr_34348_34381[(2)] = null);

(statearr_34348_34381[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (13))){
var inst_34287 = (state_34335[(8)]);
var inst_34290 = (state_34335[(9)]);
var inst_34289 = (state_34335[(10)]);
var inst_34288 = (state_34335[(12)]);
var inst_34297 = (state_34335[(2)]);
var inst_34298 = (inst_34290 + (1));
var tmp34344 = inst_34287;
var tmp34345 = inst_34289;
var tmp34346 = inst_34288;
var inst_34287__$1 = tmp34344;
var inst_34288__$1 = tmp34346;
var inst_34289__$1 = tmp34345;
var inst_34290__$1 = inst_34298;
var state_34335__$1 = (function (){var statearr_34349 = state_34335;
(statearr_34349[(14)] = inst_34297);

(statearr_34349[(8)] = inst_34287__$1);

(statearr_34349[(9)] = inst_34290__$1);

(statearr_34349[(10)] = inst_34289__$1);

(statearr_34349[(12)] = inst_34288__$1);

return statearr_34349;
})();
var statearr_34350_34382 = state_34335__$1;
(statearr_34350_34382[(2)] = null);

(statearr_34350_34382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (22))){
var state_34335__$1 = state_34335;
var statearr_34351_34383 = state_34335__$1;
(statearr_34351_34383[(2)] = null);

(statearr_34351_34383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (6))){
var inst_34276 = (state_34335[(13)]);
var inst_34285 = f.call(null,inst_34276);
var inst_34286 = cljs.core.seq.call(null,inst_34285);
var inst_34287 = inst_34286;
var inst_34288 = null;
var inst_34289 = (0);
var inst_34290 = (0);
var state_34335__$1 = (function (){var statearr_34352 = state_34335;
(statearr_34352[(8)] = inst_34287);

(statearr_34352[(9)] = inst_34290);

(statearr_34352[(10)] = inst_34289);

(statearr_34352[(12)] = inst_34288);

return statearr_34352;
})();
var statearr_34353_34384 = state_34335__$1;
(statearr_34353_34384[(2)] = null);

(statearr_34353_34384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (17))){
var inst_34301 = (state_34335[(7)]);
var inst_34305 = cljs.core.chunk_first.call(null,inst_34301);
var inst_34306 = cljs.core.chunk_rest.call(null,inst_34301);
var inst_34307 = cljs.core.count.call(null,inst_34305);
var inst_34287 = inst_34306;
var inst_34288 = inst_34305;
var inst_34289 = inst_34307;
var inst_34290 = (0);
var state_34335__$1 = (function (){var statearr_34354 = state_34335;
(statearr_34354[(8)] = inst_34287);

(statearr_34354[(9)] = inst_34290);

(statearr_34354[(10)] = inst_34289);

(statearr_34354[(12)] = inst_34288);

return statearr_34354;
})();
var statearr_34355_34385 = state_34335__$1;
(statearr_34355_34385[(2)] = null);

(statearr_34355_34385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (3))){
var inst_34333 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34335__$1,inst_34333);
} else {
if((state_val_34336 === (12))){
var inst_34321 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
var statearr_34356_34386 = state_34335__$1;
(statearr_34356_34386[(2)] = inst_34321);

(statearr_34356_34386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (2))){
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34335__$1,(4),in$);
} else {
if((state_val_34336 === (23))){
var inst_34329 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
var statearr_34357_34387 = state_34335__$1;
(statearr_34357_34387[(2)] = inst_34329);

(statearr_34357_34387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (19))){
var inst_34316 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
var statearr_34358_34388 = state_34335__$1;
(statearr_34358_34388[(2)] = inst_34316);

(statearr_34358_34388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (11))){
var inst_34301 = (state_34335[(7)]);
var inst_34287 = (state_34335[(8)]);
var inst_34301__$1 = cljs.core.seq.call(null,inst_34287);
var state_34335__$1 = (function (){var statearr_34359 = state_34335;
(statearr_34359[(7)] = inst_34301__$1);

return statearr_34359;
})();
if(inst_34301__$1){
var statearr_34360_34389 = state_34335__$1;
(statearr_34360_34389[(1)] = (14));

} else {
var statearr_34361_34390 = state_34335__$1;
(statearr_34361_34390[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (9))){
var inst_34323 = (state_34335[(2)]);
var inst_34324 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34335__$1 = (function (){var statearr_34362 = state_34335;
(statearr_34362[(15)] = inst_34323);

return statearr_34362;
})();
if(cljs.core.truth_(inst_34324)){
var statearr_34363_34391 = state_34335__$1;
(statearr_34363_34391[(1)] = (21));

} else {
var statearr_34364_34392 = state_34335__$1;
(statearr_34364_34392[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (5))){
var inst_34279 = cljs.core.async.close_BANG_.call(null,out);
var state_34335__$1 = state_34335;
var statearr_34365_34393 = state_34335__$1;
(statearr_34365_34393[(2)] = inst_34279);

(statearr_34365_34393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (14))){
var inst_34301 = (state_34335[(7)]);
var inst_34303 = cljs.core.chunked_seq_QMARK_.call(null,inst_34301);
var state_34335__$1 = state_34335;
if(inst_34303){
var statearr_34366_34394 = state_34335__$1;
(statearr_34366_34394[(1)] = (17));

} else {
var statearr_34367_34395 = state_34335__$1;
(statearr_34367_34395[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (16))){
var inst_34319 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
var statearr_34368_34396 = state_34335__$1;
(statearr_34368_34396[(2)] = inst_34319);

(statearr_34368_34396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (10))){
var inst_34290 = (state_34335[(9)]);
var inst_34288 = (state_34335[(12)]);
var inst_34295 = cljs.core._nth.call(null,inst_34288,inst_34290);
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34335__$1,(13),out,inst_34295);
} else {
if((state_val_34336 === (18))){
var inst_34301 = (state_34335[(7)]);
var inst_34310 = cljs.core.first.call(null,inst_34301);
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34335__$1,(20),out,inst_34310);
} else {
if((state_val_34336 === (8))){
var inst_34290 = (state_34335[(9)]);
var inst_34289 = (state_34335[(10)]);
var inst_34292 = (inst_34290 < inst_34289);
var inst_34293 = inst_34292;
var state_34335__$1 = state_34335;
if(cljs.core.truth_(inst_34293)){
var statearr_34369_34397 = state_34335__$1;
(statearr_34369_34397[(1)] = (10));

} else {
var statearr_34370_34398 = state_34335__$1;
(statearr_34370_34398[(1)] = (11));

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
});})(c__32720__auto__))
;
return ((function (switch__32625__auto__,c__32720__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32626__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32626__auto____0 = (function (){
var statearr_34371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34371[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32626__auto__);

(statearr_34371[(1)] = (1));

return statearr_34371;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32626__auto____1 = (function (state_34335){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34372){if((e34372 instanceof Object)){
var ex__32629__auto__ = e34372;
var statearr_34373_34399 = state_34335;
(statearr_34373_34399[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34400 = state_34335;
state_34335 = G__34400;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32626__auto__ = function(state_34335){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32626__auto____1.call(this,state_34335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32626__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32626__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto__))
})();
var state__32722__auto__ = (function (){var statearr_34374 = f__32721__auto__.call(null);
(statearr_34374[(6)] = c__32720__auto__);

return statearr_34374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto__))
);

return c__32720__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34402 = arguments.length;
switch (G__34402) {
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
var G__34405 = arguments.length;
switch (G__34405) {
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
var G__34408 = arguments.length;
switch (G__34408) {
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
var c__32720__auto___34455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34455,out){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34455,out){
return (function (state_34432){
var state_val_34433 = (state_34432[(1)]);
if((state_val_34433 === (7))){
var inst_34427 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34434_34456 = state_34432__$1;
(statearr_34434_34456[(2)] = inst_34427);

(statearr_34434_34456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (1))){
var inst_34409 = null;
var state_34432__$1 = (function (){var statearr_34435 = state_34432;
(statearr_34435[(7)] = inst_34409);

return statearr_34435;
})();
var statearr_34436_34457 = state_34432__$1;
(statearr_34436_34457[(2)] = null);

(statearr_34436_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (4))){
var inst_34412 = (state_34432[(8)]);
var inst_34412__$1 = (state_34432[(2)]);
var inst_34413 = (inst_34412__$1 == null);
var inst_34414 = cljs.core.not.call(null,inst_34413);
var state_34432__$1 = (function (){var statearr_34437 = state_34432;
(statearr_34437[(8)] = inst_34412__$1);

return statearr_34437;
})();
if(inst_34414){
var statearr_34438_34458 = state_34432__$1;
(statearr_34438_34458[(1)] = (5));

} else {
var statearr_34439_34459 = state_34432__$1;
(statearr_34439_34459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (6))){
var state_34432__$1 = state_34432;
var statearr_34440_34460 = state_34432__$1;
(statearr_34440_34460[(2)] = null);

(statearr_34440_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (3))){
var inst_34429 = (state_34432[(2)]);
var inst_34430 = cljs.core.async.close_BANG_.call(null,out);
var state_34432__$1 = (function (){var statearr_34441 = state_34432;
(statearr_34441[(9)] = inst_34429);

return statearr_34441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34432__$1,inst_34430);
} else {
if((state_val_34433 === (2))){
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34432__$1,(4),ch);
} else {
if((state_val_34433 === (11))){
var inst_34412 = (state_34432[(8)]);
var inst_34421 = (state_34432[(2)]);
var inst_34409 = inst_34412;
var state_34432__$1 = (function (){var statearr_34442 = state_34432;
(statearr_34442[(10)] = inst_34421);

(statearr_34442[(7)] = inst_34409);

return statearr_34442;
})();
var statearr_34443_34461 = state_34432__$1;
(statearr_34443_34461[(2)] = null);

(statearr_34443_34461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (9))){
var inst_34412 = (state_34432[(8)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34432__$1,(11),out,inst_34412);
} else {
if((state_val_34433 === (5))){
var inst_34409 = (state_34432[(7)]);
var inst_34412 = (state_34432[(8)]);
var inst_34416 = cljs.core._EQ_.call(null,inst_34412,inst_34409);
var state_34432__$1 = state_34432;
if(inst_34416){
var statearr_34445_34462 = state_34432__$1;
(statearr_34445_34462[(1)] = (8));

} else {
var statearr_34446_34463 = state_34432__$1;
(statearr_34446_34463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (10))){
var inst_34424 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34447_34464 = state_34432__$1;
(statearr_34447_34464[(2)] = inst_34424);

(statearr_34447_34464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (8))){
var inst_34409 = (state_34432[(7)]);
var tmp34444 = inst_34409;
var inst_34409__$1 = tmp34444;
var state_34432__$1 = (function (){var statearr_34448 = state_34432;
(statearr_34448[(7)] = inst_34409__$1);

return statearr_34448;
})();
var statearr_34449_34465 = state_34432__$1;
(statearr_34449_34465[(2)] = null);

(statearr_34449_34465[(1)] = (2));


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
});})(c__32720__auto___34455,out))
;
return ((function (switch__32625__auto__,c__32720__auto___34455,out){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_34450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34450[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_34450[(1)] = (1));

return statearr_34450;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_34432){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34451){if((e34451 instanceof Object)){
var ex__32629__auto__ = e34451;
var statearr_34452_34466 = state_34432;
(statearr_34452_34466[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34467 = state_34432;
state_34432 = G__34467;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_34432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_34432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34455,out))
})();
var state__32722__auto__ = (function (){var statearr_34453 = f__32721__auto__.call(null);
(statearr_34453[(6)] = c__32720__auto___34455);

return statearr_34453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34455,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34469 = arguments.length;
switch (G__34469) {
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
var c__32720__auto___34535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34535,out){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34535,out){
return (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (7))){
var inst_34503 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34509_34536 = state_34507__$1;
(statearr_34509_34536[(2)] = inst_34503);

(statearr_34509_34536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (1))){
var inst_34470 = (new Array(n));
var inst_34471 = inst_34470;
var inst_34472 = (0);
var state_34507__$1 = (function (){var statearr_34510 = state_34507;
(statearr_34510[(7)] = inst_34471);

(statearr_34510[(8)] = inst_34472);

return statearr_34510;
})();
var statearr_34511_34537 = state_34507__$1;
(statearr_34511_34537[(2)] = null);

(statearr_34511_34537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (4))){
var inst_34475 = (state_34507[(9)]);
var inst_34475__$1 = (state_34507[(2)]);
var inst_34476 = (inst_34475__$1 == null);
var inst_34477 = cljs.core.not.call(null,inst_34476);
var state_34507__$1 = (function (){var statearr_34512 = state_34507;
(statearr_34512[(9)] = inst_34475__$1);

return statearr_34512;
})();
if(inst_34477){
var statearr_34513_34538 = state_34507__$1;
(statearr_34513_34538[(1)] = (5));

} else {
var statearr_34514_34539 = state_34507__$1;
(statearr_34514_34539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (15))){
var inst_34497 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34515_34540 = state_34507__$1;
(statearr_34515_34540[(2)] = inst_34497);

(statearr_34515_34540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (13))){
var state_34507__$1 = state_34507;
var statearr_34516_34541 = state_34507__$1;
(statearr_34516_34541[(2)] = null);

(statearr_34516_34541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var inst_34472 = (state_34507[(8)]);
var inst_34493 = (inst_34472 > (0));
var state_34507__$1 = state_34507;
if(cljs.core.truth_(inst_34493)){
var statearr_34517_34542 = state_34507__$1;
(statearr_34517_34542[(1)] = (12));

} else {
var statearr_34518_34543 = state_34507__$1;
(statearr_34518_34543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (3))){
var inst_34505 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34507__$1,inst_34505);
} else {
if((state_val_34508 === (12))){
var inst_34471 = (state_34507[(7)]);
var inst_34495 = cljs.core.vec.call(null,inst_34471);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34507__$1,(15),out,inst_34495);
} else {
if((state_val_34508 === (2))){
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34507__$1,(4),ch);
} else {
if((state_val_34508 === (11))){
var inst_34487 = (state_34507[(2)]);
var inst_34488 = (new Array(n));
var inst_34471 = inst_34488;
var inst_34472 = (0);
var state_34507__$1 = (function (){var statearr_34519 = state_34507;
(statearr_34519[(7)] = inst_34471);

(statearr_34519[(8)] = inst_34472);

(statearr_34519[(10)] = inst_34487);

return statearr_34519;
})();
var statearr_34520_34544 = state_34507__$1;
(statearr_34520_34544[(2)] = null);

(statearr_34520_34544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (9))){
var inst_34471 = (state_34507[(7)]);
var inst_34485 = cljs.core.vec.call(null,inst_34471);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34507__$1,(11),out,inst_34485);
} else {
if((state_val_34508 === (5))){
var inst_34475 = (state_34507[(9)]);
var inst_34471 = (state_34507[(7)]);
var inst_34472 = (state_34507[(8)]);
var inst_34480 = (state_34507[(11)]);
var inst_34479 = (inst_34471[inst_34472] = inst_34475);
var inst_34480__$1 = (inst_34472 + (1));
var inst_34481 = (inst_34480__$1 < n);
var state_34507__$1 = (function (){var statearr_34521 = state_34507;
(statearr_34521[(12)] = inst_34479);

(statearr_34521[(11)] = inst_34480__$1);

return statearr_34521;
})();
if(cljs.core.truth_(inst_34481)){
var statearr_34522_34545 = state_34507__$1;
(statearr_34522_34545[(1)] = (8));

} else {
var statearr_34523_34546 = state_34507__$1;
(statearr_34523_34546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (14))){
var inst_34500 = (state_34507[(2)]);
var inst_34501 = cljs.core.async.close_BANG_.call(null,out);
var state_34507__$1 = (function (){var statearr_34525 = state_34507;
(statearr_34525[(13)] = inst_34500);

return statearr_34525;
})();
var statearr_34526_34547 = state_34507__$1;
(statearr_34526_34547[(2)] = inst_34501);

(statearr_34526_34547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (10))){
var inst_34491 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34527_34548 = state_34507__$1;
(statearr_34527_34548[(2)] = inst_34491);

(statearr_34527_34548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (8))){
var inst_34471 = (state_34507[(7)]);
var inst_34480 = (state_34507[(11)]);
var tmp34524 = inst_34471;
var inst_34471__$1 = tmp34524;
var inst_34472 = inst_34480;
var state_34507__$1 = (function (){var statearr_34528 = state_34507;
(statearr_34528[(7)] = inst_34471__$1);

(statearr_34528[(8)] = inst_34472);

return statearr_34528;
})();
var statearr_34529_34549 = state_34507__$1;
(statearr_34529_34549[(2)] = null);

(statearr_34529_34549[(1)] = (2));


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
});})(c__32720__auto___34535,out))
;
return ((function (switch__32625__auto__,c__32720__auto___34535,out){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_34530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34530[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_34530[(1)] = (1));

return statearr_34530;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_34507){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34531){if((e34531 instanceof Object)){
var ex__32629__auto__ = e34531;
var statearr_34532_34550 = state_34507;
(statearr_34532_34550[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34551 = state_34507;
state_34507 = G__34551;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_34507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_34507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34535,out))
})();
var state__32722__auto__ = (function (){var statearr_34533 = f__32721__auto__.call(null);
(statearr_34533[(6)] = c__32720__auto___34535);

return statearr_34533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34535,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34553 = arguments.length;
switch (G__34553) {
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
var c__32720__auto___34623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34623,out){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34623,out){
return (function (state_34595){
var state_val_34596 = (state_34595[(1)]);
if((state_val_34596 === (7))){
var inst_34591 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
var statearr_34597_34624 = state_34595__$1;
(statearr_34597_34624[(2)] = inst_34591);

(statearr_34597_34624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (1))){
var inst_34554 = [];
var inst_34555 = inst_34554;
var inst_34556 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34595__$1 = (function (){var statearr_34598 = state_34595;
(statearr_34598[(7)] = inst_34555);

(statearr_34598[(8)] = inst_34556);

return statearr_34598;
})();
var statearr_34599_34625 = state_34595__$1;
(statearr_34599_34625[(2)] = null);

(statearr_34599_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (4))){
var inst_34559 = (state_34595[(9)]);
var inst_34559__$1 = (state_34595[(2)]);
var inst_34560 = (inst_34559__$1 == null);
var inst_34561 = cljs.core.not.call(null,inst_34560);
var state_34595__$1 = (function (){var statearr_34600 = state_34595;
(statearr_34600[(9)] = inst_34559__$1);

return statearr_34600;
})();
if(inst_34561){
var statearr_34601_34626 = state_34595__$1;
(statearr_34601_34626[(1)] = (5));

} else {
var statearr_34602_34627 = state_34595__$1;
(statearr_34602_34627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (15))){
var inst_34585 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
var statearr_34603_34628 = state_34595__$1;
(statearr_34603_34628[(2)] = inst_34585);

(statearr_34603_34628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (13))){
var state_34595__$1 = state_34595;
var statearr_34604_34629 = state_34595__$1;
(statearr_34604_34629[(2)] = null);

(statearr_34604_34629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (6))){
var inst_34555 = (state_34595[(7)]);
var inst_34580 = inst_34555.length;
var inst_34581 = (inst_34580 > (0));
var state_34595__$1 = state_34595;
if(cljs.core.truth_(inst_34581)){
var statearr_34605_34630 = state_34595__$1;
(statearr_34605_34630[(1)] = (12));

} else {
var statearr_34606_34631 = state_34595__$1;
(statearr_34606_34631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (3))){
var inst_34593 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34595__$1,inst_34593);
} else {
if((state_val_34596 === (12))){
var inst_34555 = (state_34595[(7)]);
var inst_34583 = cljs.core.vec.call(null,inst_34555);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34595__$1,(15),out,inst_34583);
} else {
if((state_val_34596 === (2))){
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34595__$1,(4),ch);
} else {
if((state_val_34596 === (11))){
var inst_34559 = (state_34595[(9)]);
var inst_34563 = (state_34595[(10)]);
var inst_34573 = (state_34595[(2)]);
var inst_34574 = [];
var inst_34575 = inst_34574.push(inst_34559);
var inst_34555 = inst_34574;
var inst_34556 = inst_34563;
var state_34595__$1 = (function (){var statearr_34607 = state_34595;
(statearr_34607[(7)] = inst_34555);

(statearr_34607[(8)] = inst_34556);

(statearr_34607[(11)] = inst_34573);

(statearr_34607[(12)] = inst_34575);

return statearr_34607;
})();
var statearr_34608_34632 = state_34595__$1;
(statearr_34608_34632[(2)] = null);

(statearr_34608_34632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (9))){
var inst_34555 = (state_34595[(7)]);
var inst_34571 = cljs.core.vec.call(null,inst_34555);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34595__$1,(11),out,inst_34571);
} else {
if((state_val_34596 === (5))){
var inst_34559 = (state_34595[(9)]);
var inst_34556 = (state_34595[(8)]);
var inst_34563 = (state_34595[(10)]);
var inst_34563__$1 = f.call(null,inst_34559);
var inst_34564 = cljs.core._EQ_.call(null,inst_34563__$1,inst_34556);
var inst_34565 = cljs.core.keyword_identical_QMARK_.call(null,inst_34556,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34566 = ((inst_34564) || (inst_34565));
var state_34595__$1 = (function (){var statearr_34609 = state_34595;
(statearr_34609[(10)] = inst_34563__$1);

return statearr_34609;
})();
if(cljs.core.truth_(inst_34566)){
var statearr_34610_34633 = state_34595__$1;
(statearr_34610_34633[(1)] = (8));

} else {
var statearr_34611_34634 = state_34595__$1;
(statearr_34611_34634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (14))){
var inst_34588 = (state_34595[(2)]);
var inst_34589 = cljs.core.async.close_BANG_.call(null,out);
var state_34595__$1 = (function (){var statearr_34613 = state_34595;
(statearr_34613[(13)] = inst_34588);

return statearr_34613;
})();
var statearr_34614_34635 = state_34595__$1;
(statearr_34614_34635[(2)] = inst_34589);

(statearr_34614_34635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (10))){
var inst_34578 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
var statearr_34615_34636 = state_34595__$1;
(statearr_34615_34636[(2)] = inst_34578);

(statearr_34615_34636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (8))){
var inst_34559 = (state_34595[(9)]);
var inst_34555 = (state_34595[(7)]);
var inst_34563 = (state_34595[(10)]);
var inst_34568 = inst_34555.push(inst_34559);
var tmp34612 = inst_34555;
var inst_34555__$1 = tmp34612;
var inst_34556 = inst_34563;
var state_34595__$1 = (function (){var statearr_34616 = state_34595;
(statearr_34616[(7)] = inst_34555__$1);

(statearr_34616[(8)] = inst_34556);

(statearr_34616[(14)] = inst_34568);

return statearr_34616;
})();
var statearr_34617_34637 = state_34595__$1;
(statearr_34617_34637[(2)] = null);

(statearr_34617_34637[(1)] = (2));


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
});})(c__32720__auto___34623,out))
;
return ((function (switch__32625__auto__,c__32720__auto___34623,out){
return (function() {
var cljs$core$async$state_machine__32626__auto__ = null;
var cljs$core$async$state_machine__32626__auto____0 = (function (){
var statearr_34618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34618[(0)] = cljs$core$async$state_machine__32626__auto__);

(statearr_34618[(1)] = (1));

return statearr_34618;
});
var cljs$core$async$state_machine__32626__auto____1 = (function (state_34595){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34619){if((e34619 instanceof Object)){
var ex__32629__auto__ = e34619;
var statearr_34620_34638 = state_34595;
(statearr_34620_34638[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34639 = state_34595;
state_34595 = G__34639;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
cljs$core$async$state_machine__32626__auto__ = function(state_34595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32626__auto____1.call(this,state_34595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32626__auto____0;
cljs$core$async$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32626__auto____1;
return cljs$core$async$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34623,out))
})();
var state__32722__auto__ = (function (){var statearr_34621 = f__32721__auto__.call(null);
(statearr_34621[(6)] = c__32720__auto___34623);

return statearr_34621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34623,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1601274368876
