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
var G__32751 = arguments.length;
switch (G__32751) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32752 = (function (f,blockable,meta32753){
this.f = f;
this.blockable = blockable;
this.meta32753 = meta32753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32754,meta32753__$1){
var self__ = this;
var _32754__$1 = this;
return (new cljs.core.async.t_cljs$core$async32752(self__.f,self__.blockable,meta32753__$1));
});

cljs.core.async.t_cljs$core$async32752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32754){
var self__ = this;
var _32754__$1 = this;
return self__.meta32753;
});

cljs.core.async.t_cljs$core$async32752.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32752.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32753","meta32753",1891026378,null)], null);
});

cljs.core.async.t_cljs$core$async32752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32752";

cljs.core.async.t_cljs$core$async32752.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32752");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32752.
 */
cljs.core.async.__GT_t_cljs$core$async32752 = (function cljs$core$async$__GT_t_cljs$core$async32752(f__$1,blockable__$1,meta32753){
return (new cljs.core.async.t_cljs$core$async32752(f__$1,blockable__$1,meta32753));
});

}

return (new cljs.core.async.t_cljs$core$async32752(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32758 = arguments.length;
switch (G__32758) {
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
var G__32761 = arguments.length;
switch (G__32761) {
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
var G__32764 = arguments.length;
switch (G__32764) {
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
var val_32766 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32766);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32766,ret){
return (function (){
return fn1.call(null,val_32766);
});})(val_32766,ret))
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
var G__32768 = arguments.length;
switch (G__32768) {
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
var n__4607__auto___32770 = n;
var x_32771 = (0);
while(true){
if((x_32771 < n__4607__auto___32770)){
(a[x_32771] = x_32771);

var G__32772 = (x_32771 + (1));
x_32771 = G__32772;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32773 = (function (flag,meta32774){
this.flag = flag;
this.meta32774 = meta32774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32775,meta32774__$1){
var self__ = this;
var _32775__$1 = this;
return (new cljs.core.async.t_cljs$core$async32773(self__.flag,meta32774__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32775){
var self__ = this;
var _32775__$1 = this;
return self__.meta32774;
});})(flag))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32773.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32774","meta32774",2036694937,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32773";

cljs.core.async.t_cljs$core$async32773.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32773");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32773.
 */
cljs.core.async.__GT_t_cljs$core$async32773 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32773(flag__$1,meta32774){
return (new cljs.core.async.t_cljs$core$async32773(flag__$1,meta32774));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32773(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32776 = (function (flag,cb,meta32777){
this.flag = flag;
this.cb = cb;
this.meta32777 = meta32777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32778,meta32777__$1){
var self__ = this;
var _32778__$1 = this;
return (new cljs.core.async.t_cljs$core$async32776(self__.flag,self__.cb,meta32777__$1));
});

cljs.core.async.t_cljs$core$async32776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32778){
var self__ = this;
var _32778__$1 = this;
return self__.meta32777;
});

cljs.core.async.t_cljs$core$async32776.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32776.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32777","meta32777",-1018460784,null)], null);
});

cljs.core.async.t_cljs$core$async32776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32776";

cljs.core.async.t_cljs$core$async32776.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32776");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32776.
 */
cljs.core.async.__GT_t_cljs$core$async32776 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32776(flag__$1,cb__$1,meta32777){
return (new cljs.core.async.t_cljs$core$async32776(flag__$1,cb__$1,meta32777));
});

}

return (new cljs.core.async.t_cljs$core$async32776(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32779_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32779_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32780_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32780_SHARP_,port], null));
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
var G__32781 = (i + (1));
i = G__32781;
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
var len__4730__auto___32787 = arguments.length;
var i__4731__auto___32788 = (0);
while(true){
if((i__4731__auto___32788 < len__4730__auto___32787)){
args__4736__auto__.push((arguments[i__4731__auto___32788]));

var G__32789 = (i__4731__auto___32788 + (1));
i__4731__auto___32788 = G__32789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32784){
var map__32785 = p__32784;
var map__32785__$1 = (((((!((map__32785 == null))))?(((((map__32785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32785):map__32785);
var opts = map__32785__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32782){
var G__32783 = cljs.core.first.call(null,seq32782);
var seq32782__$1 = cljs.core.next.call(null,seq32782);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32783,seq32782__$1);
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
var G__32791 = arguments.length;
switch (G__32791) {
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
var c__32691__auto___32837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___32837){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___32837){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (7))){
var inst_32811 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32817_32838 = state_32815__$1;
(statearr_32817_32838[(2)] = inst_32811);

(statearr_32817_32838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (1))){
var state_32815__$1 = state_32815;
var statearr_32818_32839 = state_32815__$1;
(statearr_32818_32839[(2)] = null);

(statearr_32818_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (4))){
var inst_32794 = (state_32815[(7)]);
var inst_32794__$1 = (state_32815[(2)]);
var inst_32795 = (inst_32794__$1 == null);
var state_32815__$1 = (function (){var statearr_32819 = state_32815;
(statearr_32819[(7)] = inst_32794__$1);

return statearr_32819;
})();
if(cljs.core.truth_(inst_32795)){
var statearr_32820_32840 = state_32815__$1;
(statearr_32820_32840[(1)] = (5));

} else {
var statearr_32821_32841 = state_32815__$1;
(statearr_32821_32841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (13))){
var state_32815__$1 = state_32815;
var statearr_32822_32842 = state_32815__$1;
(statearr_32822_32842[(2)] = null);

(statearr_32822_32842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (6))){
var inst_32794 = (state_32815[(7)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32815__$1,(11),to,inst_32794);
} else {
if((state_val_32816 === (3))){
var inst_32813 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (12))){
var state_32815__$1 = state_32815;
var statearr_32823_32843 = state_32815__$1;
(statearr_32823_32843[(2)] = null);

(statearr_32823_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (2))){
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32815__$1,(4),from);
} else {
if((state_val_32816 === (11))){
var inst_32804 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32804)){
var statearr_32824_32844 = state_32815__$1;
(statearr_32824_32844[(1)] = (12));

} else {
var statearr_32825_32845 = state_32815__$1;
(statearr_32825_32845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (9))){
var state_32815__$1 = state_32815;
var statearr_32826_32846 = state_32815__$1;
(statearr_32826_32846[(2)] = null);

(statearr_32826_32846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (5))){
var state_32815__$1 = state_32815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32827_32847 = state_32815__$1;
(statearr_32827_32847[(1)] = (8));

} else {
var statearr_32828_32848 = state_32815__$1;
(statearr_32828_32848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (14))){
var inst_32809 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32829_32849 = state_32815__$1;
(statearr_32829_32849[(2)] = inst_32809);

(statearr_32829_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (10))){
var inst_32801 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32830_32850 = state_32815__$1;
(statearr_32830_32850[(2)] = inst_32801);

(statearr_32830_32850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (8))){
var inst_32798 = cljs.core.async.close_BANG_.call(null,to);
var state_32815__$1 = state_32815;
var statearr_32831_32851 = state_32815__$1;
(statearr_32831_32851[(2)] = inst_32798);

(statearr_32831_32851[(1)] = (10));


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
});})(c__32691__auto___32837))
;
return ((function (switch__32596__auto__,c__32691__auto___32837){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_32832 = [null,null,null,null,null,null,null,null];
(statearr_32832[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_32832[(1)] = (1));

return statearr_32832;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_32815){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_32815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e32833){if((e32833 instanceof Object)){
var ex__32600__auto__ = e32833;
var statearr_32834_32852 = state_32815;
(statearr_32834_32852[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32853 = state_32815;
state_32815 = G__32853;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___32837))
})();
var state__32693__auto__ = (function (){var statearr_32835 = f__32692__auto__.call(null);
(statearr_32835[(6)] = c__32691__auto___32837);

return statearr_32835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___32837))
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
return (function (p__32854){
var vec__32855 = p__32854;
var v = cljs.core.nth.call(null,vec__32855,(0),null);
var p = cljs.core.nth.call(null,vec__32855,(1),null);
var job = vec__32855;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32691__auto___33026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___33026,res,vec__32855,v,p,job,jobs,results){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___33026,res,vec__32855,v,p,job,jobs,results){
return (function (state_32862){
var state_val_32863 = (state_32862[(1)]);
if((state_val_32863 === (1))){
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32862__$1,(2),res,v);
} else {
if((state_val_32863 === (2))){
var inst_32859 = (state_32862[(2)]);
var inst_32860 = cljs.core.async.close_BANG_.call(null,res);
var state_32862__$1 = (function (){var statearr_32864 = state_32862;
(statearr_32864[(7)] = inst_32859);

return statearr_32864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32862__$1,inst_32860);
} else {
return null;
}
}
});})(c__32691__auto___33026,res,vec__32855,v,p,job,jobs,results))
;
return ((function (switch__32596__auto__,c__32691__auto___33026,res,vec__32855,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0 = (function (){
var statearr_32865 = [null,null,null,null,null,null,null,null];
(statearr_32865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__);

(statearr_32865[(1)] = (1));

return statearr_32865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1 = (function (state_32862){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_32862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e32866){if((e32866 instanceof Object)){
var ex__32600__auto__ = e32866;
var statearr_32867_33027 = state_32862;
(statearr_32867_33027[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33028 = state_32862;
state_32862 = G__33028;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = function(state_32862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1.call(this,state_32862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___33026,res,vec__32855,v,p,job,jobs,results))
})();
var state__32693__auto__ = (function (){var statearr_32868 = f__32692__auto__.call(null);
(statearr_32868[(6)] = c__32691__auto___33026);

return statearr_32868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___33026,res,vec__32855,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32869){
var vec__32870 = p__32869;
var v = cljs.core.nth.call(null,vec__32870,(0),null);
var p = cljs.core.nth.call(null,vec__32870,(1),null);
var job = vec__32870;
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
var n__4607__auto___33029 = n;
var __33030 = (0);
while(true){
if((__33030 < n__4607__auto___33029)){
var G__32873_33031 = type;
var G__32873_33032__$1 = (((G__32873_33031 instanceof cljs.core.Keyword))?G__32873_33031.fqn:null);
switch (G__32873_33032__$1) {
case "compute":
var c__32691__auto___33034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33030,c__32691__auto___33034,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (__33030,c__32691__auto___33034,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async){
return (function (state_32886){
var state_val_32887 = (state_32886[(1)]);
if((state_val_32887 === (1))){
var state_32886__$1 = state_32886;
var statearr_32888_33035 = state_32886__$1;
(statearr_32888_33035[(2)] = null);

(statearr_32888_33035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (2))){
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32886__$1,(4),jobs);
} else {
if((state_val_32887 === (3))){
var inst_32884 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32886__$1,inst_32884);
} else {
if((state_val_32887 === (4))){
var inst_32876 = (state_32886[(2)]);
var inst_32877 = process.call(null,inst_32876);
var state_32886__$1 = state_32886;
if(cljs.core.truth_(inst_32877)){
var statearr_32889_33036 = state_32886__$1;
(statearr_32889_33036[(1)] = (5));

} else {
var statearr_32890_33037 = state_32886__$1;
(statearr_32890_33037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (5))){
var state_32886__$1 = state_32886;
var statearr_32891_33038 = state_32886__$1;
(statearr_32891_33038[(2)] = null);

(statearr_32891_33038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (6))){
var state_32886__$1 = state_32886;
var statearr_32892_33039 = state_32886__$1;
(statearr_32892_33039[(2)] = null);

(statearr_32892_33039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (7))){
var inst_32882 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
var statearr_32893_33040 = state_32886__$1;
(statearr_32893_33040[(2)] = inst_32882);

(statearr_32893_33040[(1)] = (3));


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
});})(__33030,c__32691__auto___33034,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async))
;
return ((function (__33030,switch__32596__auto__,c__32691__auto___33034,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0 = (function (){
var statearr_32894 = [null,null,null,null,null,null,null];
(statearr_32894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__);

(statearr_32894[(1)] = (1));

return statearr_32894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1 = (function (state_32886){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_32886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e32895){if((e32895 instanceof Object)){
var ex__32600__auto__ = e32895;
var statearr_32896_33041 = state_32886;
(statearr_32896_33041[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33042 = state_32886;
state_32886 = G__33042;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = function(state_32886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1.call(this,state_32886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__;
})()
;})(__33030,switch__32596__auto__,c__32691__auto___33034,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async))
})();
var state__32693__auto__ = (function (){var statearr_32897 = f__32692__auto__.call(null);
(statearr_32897[(6)] = c__32691__auto___33034);

return statearr_32897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(__33030,c__32691__auto___33034,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async))
);


break;
case "async":
var c__32691__auto___33043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33030,c__32691__auto___33043,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (__33030,c__32691__auto___33043,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async){
return (function (state_32910){
var state_val_32911 = (state_32910[(1)]);
if((state_val_32911 === (1))){
var state_32910__$1 = state_32910;
var statearr_32912_33044 = state_32910__$1;
(statearr_32912_33044[(2)] = null);

(statearr_32912_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (2))){
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32910__$1,(4),jobs);
} else {
if((state_val_32911 === (3))){
var inst_32908 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32910__$1,inst_32908);
} else {
if((state_val_32911 === (4))){
var inst_32900 = (state_32910[(2)]);
var inst_32901 = async.call(null,inst_32900);
var state_32910__$1 = state_32910;
if(cljs.core.truth_(inst_32901)){
var statearr_32913_33045 = state_32910__$1;
(statearr_32913_33045[(1)] = (5));

} else {
var statearr_32914_33046 = state_32910__$1;
(statearr_32914_33046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (5))){
var state_32910__$1 = state_32910;
var statearr_32915_33047 = state_32910__$1;
(statearr_32915_33047[(2)] = null);

(statearr_32915_33047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (6))){
var state_32910__$1 = state_32910;
var statearr_32916_33048 = state_32910__$1;
(statearr_32916_33048[(2)] = null);

(statearr_32916_33048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (7))){
var inst_32906 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32917_33049 = state_32910__$1;
(statearr_32917_33049[(2)] = inst_32906);

(statearr_32917_33049[(1)] = (3));


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
});})(__33030,c__32691__auto___33043,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async))
;
return ((function (__33030,switch__32596__auto__,c__32691__auto___33043,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0 = (function (){
var statearr_32918 = [null,null,null,null,null,null,null];
(statearr_32918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__);

(statearr_32918[(1)] = (1));

return statearr_32918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1 = (function (state_32910){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_32910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e32919){if((e32919 instanceof Object)){
var ex__32600__auto__ = e32919;
var statearr_32920_33050 = state_32910;
(statearr_32920_33050[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33051 = state_32910;
state_32910 = G__33051;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = function(state_32910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1.call(this,state_32910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__;
})()
;})(__33030,switch__32596__auto__,c__32691__auto___33043,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async))
})();
var state__32693__auto__ = (function (){var statearr_32921 = f__32692__auto__.call(null);
(statearr_32921[(6)] = c__32691__auto___33043);

return statearr_32921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(__33030,c__32691__auto___33043,G__32873_33031,G__32873_33032__$1,n__4607__auto___33029,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32873_33032__$1)].join('')));

}

var G__33052 = (__33030 + (1));
__33030 = G__33052;
continue;
} else {
}
break;
}

var c__32691__auto___33053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___33053,jobs,results,process,async){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___33053,jobs,results,process,async){
return (function (state_32943){
var state_val_32944 = (state_32943[(1)]);
if((state_val_32944 === (7))){
var inst_32939 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32945_33054 = state_32943__$1;
(statearr_32945_33054[(2)] = inst_32939);

(statearr_32945_33054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (1))){
var state_32943__$1 = state_32943;
var statearr_32946_33055 = state_32943__$1;
(statearr_32946_33055[(2)] = null);

(statearr_32946_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (4))){
var inst_32924 = (state_32943[(7)]);
var inst_32924__$1 = (state_32943[(2)]);
var inst_32925 = (inst_32924__$1 == null);
var state_32943__$1 = (function (){var statearr_32947 = state_32943;
(statearr_32947[(7)] = inst_32924__$1);

return statearr_32947;
})();
if(cljs.core.truth_(inst_32925)){
var statearr_32948_33056 = state_32943__$1;
(statearr_32948_33056[(1)] = (5));

} else {
var statearr_32949_33057 = state_32943__$1;
(statearr_32949_33057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (6))){
var inst_32924 = (state_32943[(7)]);
var inst_32929 = (state_32943[(8)]);
var inst_32929__$1 = cljs.core.async.chan.call(null,(1));
var inst_32930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32931 = [inst_32924,inst_32929__$1];
var inst_32932 = (new cljs.core.PersistentVector(null,2,(5),inst_32930,inst_32931,null));
var state_32943__$1 = (function (){var statearr_32950 = state_32943;
(statearr_32950[(8)] = inst_32929__$1);

return statearr_32950;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32943__$1,(8),jobs,inst_32932);
} else {
if((state_val_32944 === (3))){
var inst_32941 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32943__$1,inst_32941);
} else {
if((state_val_32944 === (2))){
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32943__$1,(4),from);
} else {
if((state_val_32944 === (9))){
var inst_32936 = (state_32943[(2)]);
var state_32943__$1 = (function (){var statearr_32951 = state_32943;
(statearr_32951[(9)] = inst_32936);

return statearr_32951;
})();
var statearr_32952_33058 = state_32943__$1;
(statearr_32952_33058[(2)] = null);

(statearr_32952_33058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (5))){
var inst_32927 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32943__$1 = state_32943;
var statearr_32953_33059 = state_32943__$1;
(statearr_32953_33059[(2)] = inst_32927);

(statearr_32953_33059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (8))){
var inst_32929 = (state_32943[(8)]);
var inst_32934 = (state_32943[(2)]);
var state_32943__$1 = (function (){var statearr_32954 = state_32943;
(statearr_32954[(10)] = inst_32934);

return statearr_32954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32943__$1,(9),results,inst_32929);
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
});})(c__32691__auto___33053,jobs,results,process,async))
;
return ((function (switch__32596__auto__,c__32691__auto___33053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0 = (function (){
var statearr_32955 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__);

(statearr_32955[(1)] = (1));

return statearr_32955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1 = (function (state_32943){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_32943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e32956){if((e32956 instanceof Object)){
var ex__32600__auto__ = e32956;
var statearr_32957_33060 = state_32943;
(statearr_32957_33060[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33061 = state_32943;
state_32943 = G__33061;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = function(state_32943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1.call(this,state_32943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___33053,jobs,results,process,async))
})();
var state__32693__auto__ = (function (){var statearr_32958 = f__32692__auto__.call(null);
(statearr_32958[(6)] = c__32691__auto___33053);

return statearr_32958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___33053,jobs,results,process,async))
);


var c__32691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto__,jobs,results,process,async){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto__,jobs,results,process,async){
return (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_32998_33062 = state_32996__$1;
(statearr_32998_33062[(2)] = inst_32992);

(statearr_32998_33062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (20))){
var state_32996__$1 = state_32996;
var statearr_32999_33063 = state_32996__$1;
(statearr_32999_33063[(2)] = null);

(statearr_32999_33063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var state_32996__$1 = state_32996;
var statearr_33000_33064 = state_32996__$1;
(statearr_33000_33064[(2)] = null);

(statearr_33000_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32961 = (state_32996[(7)]);
var inst_32961__$1 = (state_32996[(2)]);
var inst_32962 = (inst_32961__$1 == null);
var state_32996__$1 = (function (){var statearr_33001 = state_32996;
(statearr_33001[(7)] = inst_32961__$1);

return statearr_33001;
})();
if(cljs.core.truth_(inst_32962)){
var statearr_33002_33065 = state_32996__$1;
(statearr_33002_33065[(1)] = (5));

} else {
var statearr_33003_33066 = state_32996__$1;
(statearr_33003_33066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (15))){
var inst_32974 = (state_32996[(8)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32996__$1,(18),to,inst_32974);
} else {
if((state_val_32997 === (21))){
var inst_32987 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33004_33067 = state_32996__$1;
(statearr_33004_33067[(2)] = inst_32987);

(statearr_33004_33067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (13))){
var inst_32989 = (state_32996[(2)]);
var state_32996__$1 = (function (){var statearr_33005 = state_32996;
(statearr_33005[(9)] = inst_32989);

return statearr_33005;
})();
var statearr_33006_33068 = state_32996__$1;
(statearr_33006_33068[(2)] = null);

(statearr_33006_33068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var inst_32961 = (state_32996[(7)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(11),inst_32961);
} else {
if((state_val_32997 === (17))){
var inst_32982 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32982)){
var statearr_33007_33069 = state_32996__$1;
(statearr_33007_33069[(1)] = (19));

} else {
var statearr_33008_33070 = state_32996__$1;
(statearr_33008_33070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (12))){
var inst_32971 = (state_32996[(10)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(14),inst_32971);
} else {
if((state_val_32997 === (2))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(4),results);
} else {
if((state_val_32997 === (19))){
var state_32996__$1 = state_32996;
var statearr_33009_33071 = state_32996__$1;
(statearr_33009_33071[(2)] = null);

(statearr_33009_33071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (11))){
var inst_32971 = (state_32996[(2)]);
var state_32996__$1 = (function (){var statearr_33010 = state_32996;
(statearr_33010[(10)] = inst_32971);

return statearr_33010;
})();
var statearr_33011_33072 = state_32996__$1;
(statearr_33011_33072[(2)] = null);

(statearr_33011_33072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (9))){
var state_32996__$1 = state_32996;
var statearr_33012_33073 = state_32996__$1;
(statearr_33012_33073[(2)] = null);

(statearr_33012_33073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (5))){
var state_32996__$1 = state_32996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33013_33074 = state_32996__$1;
(statearr_33013_33074[(1)] = (8));

} else {
var statearr_33014_33075 = state_32996__$1;
(statearr_33014_33075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (14))){
var inst_32976 = (state_32996[(11)]);
var inst_32974 = (state_32996[(8)]);
var inst_32974__$1 = (state_32996[(2)]);
var inst_32975 = (inst_32974__$1 == null);
var inst_32976__$1 = cljs.core.not.call(null,inst_32975);
var state_32996__$1 = (function (){var statearr_33015 = state_32996;
(statearr_33015[(11)] = inst_32976__$1);

(statearr_33015[(8)] = inst_32974__$1);

return statearr_33015;
})();
if(inst_32976__$1){
var statearr_33016_33076 = state_32996__$1;
(statearr_33016_33076[(1)] = (15));

} else {
var statearr_33017_33077 = state_32996__$1;
(statearr_33017_33077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (16))){
var inst_32976 = (state_32996[(11)]);
var state_32996__$1 = state_32996;
var statearr_33018_33078 = state_32996__$1;
(statearr_33018_33078[(2)] = inst_32976);

(statearr_33018_33078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var inst_32968 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33019_33079 = state_32996__$1;
(statearr_33019_33079[(2)] = inst_32968);

(statearr_33019_33079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (18))){
var inst_32979 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33020_33080 = state_32996__$1;
(statearr_33020_33080[(2)] = inst_32979);

(statearr_33020_33080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (8))){
var inst_32965 = cljs.core.async.close_BANG_.call(null,to);
var state_32996__$1 = state_32996;
var statearr_33021_33081 = state_32996__$1;
(statearr_33021_33081[(2)] = inst_32965);

(statearr_33021_33081[(1)] = (10));


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
});})(c__32691__auto__,jobs,results,process,async))
;
return ((function (switch__32596__auto__,c__32691__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0 = (function (){
var statearr_33022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__);

(statearr_33022[(1)] = (1));

return statearr_33022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1 = (function (state_32996){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_32996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33023){if((e33023 instanceof Object)){
var ex__32600__auto__ = e33023;
var statearr_33024_33082 = state_32996;
(statearr_33024_33082[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33083 = state_32996;
state_32996 = G__33083;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto__,jobs,results,process,async))
})();
var state__32693__auto__ = (function (){var statearr_33025 = f__32692__auto__.call(null);
(statearr_33025[(6)] = c__32691__auto__);

return statearr_33025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto__,jobs,results,process,async))
);

return c__32691__auto__;
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
var G__33085 = arguments.length;
switch (G__33085) {
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
var G__33088 = arguments.length;
switch (G__33088) {
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
var G__33091 = arguments.length;
switch (G__33091) {
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
var c__32691__auto___33140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___33140,tc,fc){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___33140,tc,fc){
return (function (state_33117){
var state_val_33118 = (state_33117[(1)]);
if((state_val_33118 === (7))){
var inst_33113 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
var statearr_33119_33141 = state_33117__$1;
(statearr_33119_33141[(2)] = inst_33113);

(statearr_33119_33141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (1))){
var state_33117__$1 = state_33117;
var statearr_33120_33142 = state_33117__$1;
(statearr_33120_33142[(2)] = null);

(statearr_33120_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (4))){
var inst_33094 = (state_33117[(7)]);
var inst_33094__$1 = (state_33117[(2)]);
var inst_33095 = (inst_33094__$1 == null);
var state_33117__$1 = (function (){var statearr_33121 = state_33117;
(statearr_33121[(7)] = inst_33094__$1);

return statearr_33121;
})();
if(cljs.core.truth_(inst_33095)){
var statearr_33122_33143 = state_33117__$1;
(statearr_33122_33143[(1)] = (5));

} else {
var statearr_33123_33144 = state_33117__$1;
(statearr_33123_33144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (13))){
var state_33117__$1 = state_33117;
var statearr_33124_33145 = state_33117__$1;
(statearr_33124_33145[(2)] = null);

(statearr_33124_33145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (6))){
var inst_33094 = (state_33117[(7)]);
var inst_33100 = p.call(null,inst_33094);
var state_33117__$1 = state_33117;
if(cljs.core.truth_(inst_33100)){
var statearr_33125_33146 = state_33117__$1;
(statearr_33125_33146[(1)] = (9));

} else {
var statearr_33126_33147 = state_33117__$1;
(statearr_33126_33147[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (3))){
var inst_33115 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33117__$1,inst_33115);
} else {
if((state_val_33118 === (12))){
var state_33117__$1 = state_33117;
var statearr_33127_33148 = state_33117__$1;
(statearr_33127_33148[(2)] = null);

(statearr_33127_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (2))){
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33117__$1,(4),ch);
} else {
if((state_val_33118 === (11))){
var inst_33094 = (state_33117[(7)]);
var inst_33104 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33117__$1,(8),inst_33104,inst_33094);
} else {
if((state_val_33118 === (9))){
var state_33117__$1 = state_33117;
var statearr_33128_33149 = state_33117__$1;
(statearr_33128_33149[(2)] = tc);

(statearr_33128_33149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (5))){
var inst_33097 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33098 = cljs.core.async.close_BANG_.call(null,fc);
var state_33117__$1 = (function (){var statearr_33129 = state_33117;
(statearr_33129[(8)] = inst_33097);

return statearr_33129;
})();
var statearr_33130_33150 = state_33117__$1;
(statearr_33130_33150[(2)] = inst_33098);

(statearr_33130_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (14))){
var inst_33111 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
var statearr_33131_33151 = state_33117__$1;
(statearr_33131_33151[(2)] = inst_33111);

(statearr_33131_33151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (10))){
var state_33117__$1 = state_33117;
var statearr_33132_33152 = state_33117__$1;
(statearr_33132_33152[(2)] = fc);

(statearr_33132_33152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (8))){
var inst_33106 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
if(cljs.core.truth_(inst_33106)){
var statearr_33133_33153 = state_33117__$1;
(statearr_33133_33153[(1)] = (12));

} else {
var statearr_33134_33154 = state_33117__$1;
(statearr_33134_33154[(1)] = (13));

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
});})(c__32691__auto___33140,tc,fc))
;
return ((function (switch__32596__auto__,c__32691__auto___33140,tc,fc){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_33135 = [null,null,null,null,null,null,null,null,null];
(statearr_33135[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_33135[(1)] = (1));

return statearr_33135;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_33117){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_33117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33136){if((e33136 instanceof Object)){
var ex__32600__auto__ = e33136;
var statearr_33137_33155 = state_33117;
(statearr_33137_33155[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33156 = state_33117;
state_33117 = G__33156;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_33117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_33117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___33140,tc,fc))
})();
var state__32693__auto__ = (function (){var statearr_33138 = f__32692__auto__.call(null);
(statearr_33138[(6)] = c__32691__auto___33140);

return statearr_33138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___33140,tc,fc))
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
var c__32691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto__){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto__){
return (function (state_33177){
var state_val_33178 = (state_33177[(1)]);
if((state_val_33178 === (7))){
var inst_33173 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33179_33197 = state_33177__$1;
(statearr_33179_33197[(2)] = inst_33173);

(statearr_33179_33197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (1))){
var inst_33157 = init;
var state_33177__$1 = (function (){var statearr_33180 = state_33177;
(statearr_33180[(7)] = inst_33157);

return statearr_33180;
})();
var statearr_33181_33198 = state_33177__$1;
(statearr_33181_33198[(2)] = null);

(statearr_33181_33198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (4))){
var inst_33160 = (state_33177[(8)]);
var inst_33160__$1 = (state_33177[(2)]);
var inst_33161 = (inst_33160__$1 == null);
var state_33177__$1 = (function (){var statearr_33182 = state_33177;
(statearr_33182[(8)] = inst_33160__$1);

return statearr_33182;
})();
if(cljs.core.truth_(inst_33161)){
var statearr_33183_33199 = state_33177__$1;
(statearr_33183_33199[(1)] = (5));

} else {
var statearr_33184_33200 = state_33177__$1;
(statearr_33184_33200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (6))){
var inst_33164 = (state_33177[(9)]);
var inst_33157 = (state_33177[(7)]);
var inst_33160 = (state_33177[(8)]);
var inst_33164__$1 = f.call(null,inst_33157,inst_33160);
var inst_33165 = cljs.core.reduced_QMARK_.call(null,inst_33164__$1);
var state_33177__$1 = (function (){var statearr_33185 = state_33177;
(statearr_33185[(9)] = inst_33164__$1);

return statearr_33185;
})();
if(inst_33165){
var statearr_33186_33201 = state_33177__$1;
(statearr_33186_33201[(1)] = (8));

} else {
var statearr_33187_33202 = state_33177__$1;
(statearr_33187_33202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (3))){
var inst_33175 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33177__$1,inst_33175);
} else {
if((state_val_33178 === (2))){
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(4),ch);
} else {
if((state_val_33178 === (9))){
var inst_33164 = (state_33177[(9)]);
var inst_33157 = inst_33164;
var state_33177__$1 = (function (){var statearr_33188 = state_33177;
(statearr_33188[(7)] = inst_33157);

return statearr_33188;
})();
var statearr_33189_33203 = state_33177__$1;
(statearr_33189_33203[(2)] = null);

(statearr_33189_33203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (5))){
var inst_33157 = (state_33177[(7)]);
var state_33177__$1 = state_33177;
var statearr_33190_33204 = state_33177__$1;
(statearr_33190_33204[(2)] = inst_33157);

(statearr_33190_33204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (10))){
var inst_33171 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33191_33205 = state_33177__$1;
(statearr_33191_33205[(2)] = inst_33171);

(statearr_33191_33205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (8))){
var inst_33164 = (state_33177[(9)]);
var inst_33167 = cljs.core.deref.call(null,inst_33164);
var state_33177__$1 = state_33177;
var statearr_33192_33206 = state_33177__$1;
(statearr_33192_33206[(2)] = inst_33167);

(statearr_33192_33206[(1)] = (10));


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
});})(c__32691__auto__))
;
return ((function (switch__32596__auto__,c__32691__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32597__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32597__auto____0 = (function (){
var statearr_33193 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33193[(0)] = cljs$core$async$reduce_$_state_machine__32597__auto__);

(statearr_33193[(1)] = (1));

return statearr_33193;
});
var cljs$core$async$reduce_$_state_machine__32597__auto____1 = (function (state_33177){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_33177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33194){if((e33194 instanceof Object)){
var ex__32600__auto__ = e33194;
var statearr_33195_33207 = state_33177;
(statearr_33195_33207[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33208 = state_33177;
state_33177 = G__33208;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32597__auto__ = function(state_33177){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32597__auto____1.call(this,state_33177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32597__auto____0;
cljs$core$async$reduce_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32597__auto____1;
return cljs$core$async$reduce_$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto__))
})();
var state__32693__auto__ = (function (){var statearr_33196 = f__32692__auto__.call(null);
(statearr_33196[(6)] = c__32691__auto__);

return statearr_33196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto__))
);

return c__32691__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto__,f__$1){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto__,f__$1){
return (function (state_33214){
var state_val_33215 = (state_33214[(1)]);
if((state_val_33215 === (1))){
var inst_33209 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33214__$1,(2),inst_33209);
} else {
if((state_val_33215 === (2))){
var inst_33211 = (state_33214[(2)]);
var inst_33212 = f__$1.call(null,inst_33211);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33214__$1,inst_33212);
} else {
return null;
}
}
});})(c__32691__auto__,f__$1))
;
return ((function (switch__32596__auto__,c__32691__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32597__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32597__auto____0 = (function (){
var statearr_33216 = [null,null,null,null,null,null,null];
(statearr_33216[(0)] = cljs$core$async$transduce_$_state_machine__32597__auto__);

(statearr_33216[(1)] = (1));

return statearr_33216;
});
var cljs$core$async$transduce_$_state_machine__32597__auto____1 = (function (state_33214){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_33214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33217){if((e33217 instanceof Object)){
var ex__32600__auto__ = e33217;
var statearr_33218_33220 = state_33214;
(statearr_33218_33220[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33221 = state_33214;
state_33214 = G__33221;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32597__auto__ = function(state_33214){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32597__auto____1.call(this,state_33214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32597__auto____0;
cljs$core$async$transduce_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32597__auto____1;
return cljs$core$async$transduce_$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto__,f__$1))
})();
var state__32693__auto__ = (function (){var statearr_33219 = f__32692__auto__.call(null);
(statearr_33219[(6)] = c__32691__auto__);

return statearr_33219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto__,f__$1))
);

return c__32691__auto__;
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
var G__33223 = arguments.length;
switch (G__33223) {
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
var c__32691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto__){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto__){
return (function (state_33248){
var state_val_33249 = (state_33248[(1)]);
if((state_val_33249 === (7))){
var inst_33230 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
var statearr_33250_33271 = state_33248__$1;
(statearr_33250_33271[(2)] = inst_33230);

(statearr_33250_33271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (1))){
var inst_33224 = cljs.core.seq.call(null,coll);
var inst_33225 = inst_33224;
var state_33248__$1 = (function (){var statearr_33251 = state_33248;
(statearr_33251[(7)] = inst_33225);

return statearr_33251;
})();
var statearr_33252_33272 = state_33248__$1;
(statearr_33252_33272[(2)] = null);

(statearr_33252_33272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (4))){
var inst_33225 = (state_33248[(7)]);
var inst_33228 = cljs.core.first.call(null,inst_33225);
var state_33248__$1 = state_33248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33248__$1,(7),ch,inst_33228);
} else {
if((state_val_33249 === (13))){
var inst_33242 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
var statearr_33253_33273 = state_33248__$1;
(statearr_33253_33273[(2)] = inst_33242);

(statearr_33253_33273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (6))){
var inst_33233 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
if(cljs.core.truth_(inst_33233)){
var statearr_33254_33274 = state_33248__$1;
(statearr_33254_33274[(1)] = (8));

} else {
var statearr_33255_33275 = state_33248__$1;
(statearr_33255_33275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (3))){
var inst_33246 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33248__$1,inst_33246);
} else {
if((state_val_33249 === (12))){
var state_33248__$1 = state_33248;
var statearr_33256_33276 = state_33248__$1;
(statearr_33256_33276[(2)] = null);

(statearr_33256_33276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (2))){
var inst_33225 = (state_33248[(7)]);
var state_33248__$1 = state_33248;
if(cljs.core.truth_(inst_33225)){
var statearr_33257_33277 = state_33248__$1;
(statearr_33257_33277[(1)] = (4));

} else {
var statearr_33258_33278 = state_33248__$1;
(statearr_33258_33278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (11))){
var inst_33239 = cljs.core.async.close_BANG_.call(null,ch);
var state_33248__$1 = state_33248;
var statearr_33259_33279 = state_33248__$1;
(statearr_33259_33279[(2)] = inst_33239);

(statearr_33259_33279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (9))){
var state_33248__$1 = state_33248;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33260_33280 = state_33248__$1;
(statearr_33260_33280[(1)] = (11));

} else {
var statearr_33261_33281 = state_33248__$1;
(statearr_33261_33281[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (5))){
var inst_33225 = (state_33248[(7)]);
var state_33248__$1 = state_33248;
var statearr_33262_33282 = state_33248__$1;
(statearr_33262_33282[(2)] = inst_33225);

(statearr_33262_33282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (10))){
var inst_33244 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
var statearr_33263_33283 = state_33248__$1;
(statearr_33263_33283[(2)] = inst_33244);

(statearr_33263_33283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (8))){
var inst_33225 = (state_33248[(7)]);
var inst_33235 = cljs.core.next.call(null,inst_33225);
var inst_33225__$1 = inst_33235;
var state_33248__$1 = (function (){var statearr_33264 = state_33248;
(statearr_33264[(7)] = inst_33225__$1);

return statearr_33264;
})();
var statearr_33265_33284 = state_33248__$1;
(statearr_33265_33284[(2)] = null);

(statearr_33265_33284[(1)] = (2));


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
});})(c__32691__auto__))
;
return ((function (switch__32596__auto__,c__32691__auto__){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_33266 = [null,null,null,null,null,null,null,null];
(statearr_33266[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_33266[(1)] = (1));

return statearr_33266;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_33248){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_33248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33267){if((e33267 instanceof Object)){
var ex__32600__auto__ = e33267;
var statearr_33268_33285 = state_33248;
(statearr_33268_33285[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33286 = state_33248;
state_33248 = G__33286;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_33248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_33248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto__))
})();
var state__32693__auto__ = (function (){var statearr_33269 = f__32692__auto__.call(null);
(statearr_33269[(6)] = c__32691__auto__);

return statearr_33269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto__))
);

return c__32691__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33287 = (function (ch,cs,meta33288){
this.ch = ch;
this.cs = cs;
this.meta33288 = meta33288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33289,meta33288__$1){
var self__ = this;
var _33289__$1 = this;
return (new cljs.core.async.t_cljs$core$async33287(self__.ch,self__.cs,meta33288__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33289){
var self__ = this;
var _33289__$1 = this;
return self__.meta33288;
});})(cs))
;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33287.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33287.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33288","meta33288",472182674,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33287";

cljs.core.async.t_cljs$core$async33287.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33287");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33287.
 */
cljs.core.async.__GT_t_cljs$core$async33287 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33287(ch__$1,cs__$1,meta33288){
return (new cljs.core.async.t_cljs$core$async33287(ch__$1,cs__$1,meta33288));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33287(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32691__auto___33509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___33509,cs,m,dchan,dctr,done){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___33509,cs,m,dchan,dctr,done){
return (function (state_33424){
var state_val_33425 = (state_33424[(1)]);
if((state_val_33425 === (7))){
var inst_33420 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33426_33510 = state_33424__$1;
(statearr_33426_33510[(2)] = inst_33420);

(statearr_33426_33510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (20))){
var inst_33323 = (state_33424[(7)]);
var inst_33335 = cljs.core.first.call(null,inst_33323);
var inst_33336 = cljs.core.nth.call(null,inst_33335,(0),null);
var inst_33337 = cljs.core.nth.call(null,inst_33335,(1),null);
var state_33424__$1 = (function (){var statearr_33427 = state_33424;
(statearr_33427[(8)] = inst_33336);

return statearr_33427;
})();
if(cljs.core.truth_(inst_33337)){
var statearr_33428_33511 = state_33424__$1;
(statearr_33428_33511[(1)] = (22));

} else {
var statearr_33429_33512 = state_33424__$1;
(statearr_33429_33512[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (27))){
var inst_33292 = (state_33424[(9)]);
var inst_33367 = (state_33424[(10)]);
var inst_33372 = (state_33424[(11)]);
var inst_33365 = (state_33424[(12)]);
var inst_33372__$1 = cljs.core._nth.call(null,inst_33365,inst_33367);
var inst_33373 = cljs.core.async.put_BANG_.call(null,inst_33372__$1,inst_33292,done);
var state_33424__$1 = (function (){var statearr_33430 = state_33424;
(statearr_33430[(11)] = inst_33372__$1);

return statearr_33430;
})();
if(cljs.core.truth_(inst_33373)){
var statearr_33431_33513 = state_33424__$1;
(statearr_33431_33513[(1)] = (30));

} else {
var statearr_33432_33514 = state_33424__$1;
(statearr_33432_33514[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (1))){
var state_33424__$1 = state_33424;
var statearr_33433_33515 = state_33424__$1;
(statearr_33433_33515[(2)] = null);

(statearr_33433_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (24))){
var inst_33323 = (state_33424[(7)]);
var inst_33342 = (state_33424[(2)]);
var inst_33343 = cljs.core.next.call(null,inst_33323);
var inst_33301 = inst_33343;
var inst_33302 = null;
var inst_33303 = (0);
var inst_33304 = (0);
var state_33424__$1 = (function (){var statearr_33434 = state_33424;
(statearr_33434[(13)] = inst_33302);

(statearr_33434[(14)] = inst_33342);

(statearr_33434[(15)] = inst_33303);

(statearr_33434[(16)] = inst_33301);

(statearr_33434[(17)] = inst_33304);

return statearr_33434;
})();
var statearr_33435_33516 = state_33424__$1;
(statearr_33435_33516[(2)] = null);

(statearr_33435_33516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (39))){
var state_33424__$1 = state_33424;
var statearr_33439_33517 = state_33424__$1;
(statearr_33439_33517[(2)] = null);

(statearr_33439_33517[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (4))){
var inst_33292 = (state_33424[(9)]);
var inst_33292__$1 = (state_33424[(2)]);
var inst_33293 = (inst_33292__$1 == null);
var state_33424__$1 = (function (){var statearr_33440 = state_33424;
(statearr_33440[(9)] = inst_33292__$1);

return statearr_33440;
})();
if(cljs.core.truth_(inst_33293)){
var statearr_33441_33518 = state_33424__$1;
(statearr_33441_33518[(1)] = (5));

} else {
var statearr_33442_33519 = state_33424__$1;
(statearr_33442_33519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (15))){
var inst_33302 = (state_33424[(13)]);
var inst_33303 = (state_33424[(15)]);
var inst_33301 = (state_33424[(16)]);
var inst_33304 = (state_33424[(17)]);
var inst_33319 = (state_33424[(2)]);
var inst_33320 = (inst_33304 + (1));
var tmp33436 = inst_33302;
var tmp33437 = inst_33303;
var tmp33438 = inst_33301;
var inst_33301__$1 = tmp33438;
var inst_33302__$1 = tmp33436;
var inst_33303__$1 = tmp33437;
var inst_33304__$1 = inst_33320;
var state_33424__$1 = (function (){var statearr_33443 = state_33424;
(statearr_33443[(13)] = inst_33302__$1);

(statearr_33443[(18)] = inst_33319);

(statearr_33443[(15)] = inst_33303__$1);

(statearr_33443[(16)] = inst_33301__$1);

(statearr_33443[(17)] = inst_33304__$1);

return statearr_33443;
})();
var statearr_33444_33520 = state_33424__$1;
(statearr_33444_33520[(2)] = null);

(statearr_33444_33520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (21))){
var inst_33346 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33448_33521 = state_33424__$1;
(statearr_33448_33521[(2)] = inst_33346);

(statearr_33448_33521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (31))){
var inst_33372 = (state_33424[(11)]);
var inst_33376 = done.call(null,null);
var inst_33377 = cljs.core.async.untap_STAR_.call(null,m,inst_33372);
var state_33424__$1 = (function (){var statearr_33449 = state_33424;
(statearr_33449[(19)] = inst_33376);

return statearr_33449;
})();
var statearr_33450_33522 = state_33424__$1;
(statearr_33450_33522[(2)] = inst_33377);

(statearr_33450_33522[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (32))){
var inst_33367 = (state_33424[(10)]);
var inst_33366 = (state_33424[(20)]);
var inst_33364 = (state_33424[(21)]);
var inst_33365 = (state_33424[(12)]);
var inst_33379 = (state_33424[(2)]);
var inst_33380 = (inst_33367 + (1));
var tmp33445 = inst_33366;
var tmp33446 = inst_33364;
var tmp33447 = inst_33365;
var inst_33364__$1 = tmp33446;
var inst_33365__$1 = tmp33447;
var inst_33366__$1 = tmp33445;
var inst_33367__$1 = inst_33380;
var state_33424__$1 = (function (){var statearr_33451 = state_33424;
(statearr_33451[(10)] = inst_33367__$1);

(statearr_33451[(20)] = inst_33366__$1);

(statearr_33451[(21)] = inst_33364__$1);

(statearr_33451[(22)] = inst_33379);

(statearr_33451[(12)] = inst_33365__$1);

return statearr_33451;
})();
var statearr_33452_33523 = state_33424__$1;
(statearr_33452_33523[(2)] = null);

(statearr_33452_33523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (40))){
var inst_33392 = (state_33424[(23)]);
var inst_33396 = done.call(null,null);
var inst_33397 = cljs.core.async.untap_STAR_.call(null,m,inst_33392);
var state_33424__$1 = (function (){var statearr_33453 = state_33424;
(statearr_33453[(24)] = inst_33396);

return statearr_33453;
})();
var statearr_33454_33524 = state_33424__$1;
(statearr_33454_33524[(2)] = inst_33397);

(statearr_33454_33524[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (33))){
var inst_33383 = (state_33424[(25)]);
var inst_33385 = cljs.core.chunked_seq_QMARK_.call(null,inst_33383);
var state_33424__$1 = state_33424;
if(inst_33385){
var statearr_33455_33525 = state_33424__$1;
(statearr_33455_33525[(1)] = (36));

} else {
var statearr_33456_33526 = state_33424__$1;
(statearr_33456_33526[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (13))){
var inst_33313 = (state_33424[(26)]);
var inst_33316 = cljs.core.async.close_BANG_.call(null,inst_33313);
var state_33424__$1 = state_33424;
var statearr_33457_33527 = state_33424__$1;
(statearr_33457_33527[(2)] = inst_33316);

(statearr_33457_33527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (22))){
var inst_33336 = (state_33424[(8)]);
var inst_33339 = cljs.core.async.close_BANG_.call(null,inst_33336);
var state_33424__$1 = state_33424;
var statearr_33458_33528 = state_33424__$1;
(statearr_33458_33528[(2)] = inst_33339);

(statearr_33458_33528[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (36))){
var inst_33383 = (state_33424[(25)]);
var inst_33387 = cljs.core.chunk_first.call(null,inst_33383);
var inst_33388 = cljs.core.chunk_rest.call(null,inst_33383);
var inst_33389 = cljs.core.count.call(null,inst_33387);
var inst_33364 = inst_33388;
var inst_33365 = inst_33387;
var inst_33366 = inst_33389;
var inst_33367 = (0);
var state_33424__$1 = (function (){var statearr_33459 = state_33424;
(statearr_33459[(10)] = inst_33367);

(statearr_33459[(20)] = inst_33366);

(statearr_33459[(21)] = inst_33364);

(statearr_33459[(12)] = inst_33365);

return statearr_33459;
})();
var statearr_33460_33529 = state_33424__$1;
(statearr_33460_33529[(2)] = null);

(statearr_33460_33529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (41))){
var inst_33383 = (state_33424[(25)]);
var inst_33399 = (state_33424[(2)]);
var inst_33400 = cljs.core.next.call(null,inst_33383);
var inst_33364 = inst_33400;
var inst_33365 = null;
var inst_33366 = (0);
var inst_33367 = (0);
var state_33424__$1 = (function (){var statearr_33461 = state_33424;
(statearr_33461[(10)] = inst_33367);

(statearr_33461[(20)] = inst_33366);

(statearr_33461[(27)] = inst_33399);

(statearr_33461[(21)] = inst_33364);

(statearr_33461[(12)] = inst_33365);

return statearr_33461;
})();
var statearr_33462_33530 = state_33424__$1;
(statearr_33462_33530[(2)] = null);

(statearr_33462_33530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (43))){
var state_33424__$1 = state_33424;
var statearr_33463_33531 = state_33424__$1;
(statearr_33463_33531[(2)] = null);

(statearr_33463_33531[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (29))){
var inst_33408 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33464_33532 = state_33424__$1;
(statearr_33464_33532[(2)] = inst_33408);

(statearr_33464_33532[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (44))){
var inst_33417 = (state_33424[(2)]);
var state_33424__$1 = (function (){var statearr_33465 = state_33424;
(statearr_33465[(28)] = inst_33417);

return statearr_33465;
})();
var statearr_33466_33533 = state_33424__$1;
(statearr_33466_33533[(2)] = null);

(statearr_33466_33533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (6))){
var inst_33356 = (state_33424[(29)]);
var inst_33355 = cljs.core.deref.call(null,cs);
var inst_33356__$1 = cljs.core.keys.call(null,inst_33355);
var inst_33357 = cljs.core.count.call(null,inst_33356__$1);
var inst_33358 = cljs.core.reset_BANG_.call(null,dctr,inst_33357);
var inst_33363 = cljs.core.seq.call(null,inst_33356__$1);
var inst_33364 = inst_33363;
var inst_33365 = null;
var inst_33366 = (0);
var inst_33367 = (0);
var state_33424__$1 = (function (){var statearr_33467 = state_33424;
(statearr_33467[(29)] = inst_33356__$1);

(statearr_33467[(10)] = inst_33367);

(statearr_33467[(20)] = inst_33366);

(statearr_33467[(30)] = inst_33358);

(statearr_33467[(21)] = inst_33364);

(statearr_33467[(12)] = inst_33365);

return statearr_33467;
})();
var statearr_33468_33534 = state_33424__$1;
(statearr_33468_33534[(2)] = null);

(statearr_33468_33534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (28))){
var inst_33383 = (state_33424[(25)]);
var inst_33364 = (state_33424[(21)]);
var inst_33383__$1 = cljs.core.seq.call(null,inst_33364);
var state_33424__$1 = (function (){var statearr_33469 = state_33424;
(statearr_33469[(25)] = inst_33383__$1);

return statearr_33469;
})();
if(inst_33383__$1){
var statearr_33470_33535 = state_33424__$1;
(statearr_33470_33535[(1)] = (33));

} else {
var statearr_33471_33536 = state_33424__$1;
(statearr_33471_33536[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (25))){
var inst_33367 = (state_33424[(10)]);
var inst_33366 = (state_33424[(20)]);
var inst_33369 = (inst_33367 < inst_33366);
var inst_33370 = inst_33369;
var state_33424__$1 = state_33424;
if(cljs.core.truth_(inst_33370)){
var statearr_33472_33537 = state_33424__$1;
(statearr_33472_33537[(1)] = (27));

} else {
var statearr_33473_33538 = state_33424__$1;
(statearr_33473_33538[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (34))){
var state_33424__$1 = state_33424;
var statearr_33474_33539 = state_33424__$1;
(statearr_33474_33539[(2)] = null);

(statearr_33474_33539[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (17))){
var state_33424__$1 = state_33424;
var statearr_33475_33540 = state_33424__$1;
(statearr_33475_33540[(2)] = null);

(statearr_33475_33540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (3))){
var inst_33422 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33424__$1,inst_33422);
} else {
if((state_val_33425 === (12))){
var inst_33351 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33476_33541 = state_33424__$1;
(statearr_33476_33541[(2)] = inst_33351);

(statearr_33476_33541[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (2))){
var state_33424__$1 = state_33424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33424__$1,(4),ch);
} else {
if((state_val_33425 === (23))){
var state_33424__$1 = state_33424;
var statearr_33477_33542 = state_33424__$1;
(statearr_33477_33542[(2)] = null);

(statearr_33477_33542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (35))){
var inst_33406 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33478_33543 = state_33424__$1;
(statearr_33478_33543[(2)] = inst_33406);

(statearr_33478_33543[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (19))){
var inst_33323 = (state_33424[(7)]);
var inst_33327 = cljs.core.chunk_first.call(null,inst_33323);
var inst_33328 = cljs.core.chunk_rest.call(null,inst_33323);
var inst_33329 = cljs.core.count.call(null,inst_33327);
var inst_33301 = inst_33328;
var inst_33302 = inst_33327;
var inst_33303 = inst_33329;
var inst_33304 = (0);
var state_33424__$1 = (function (){var statearr_33479 = state_33424;
(statearr_33479[(13)] = inst_33302);

(statearr_33479[(15)] = inst_33303);

(statearr_33479[(16)] = inst_33301);

(statearr_33479[(17)] = inst_33304);

return statearr_33479;
})();
var statearr_33480_33544 = state_33424__$1;
(statearr_33480_33544[(2)] = null);

(statearr_33480_33544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (11))){
var inst_33323 = (state_33424[(7)]);
var inst_33301 = (state_33424[(16)]);
var inst_33323__$1 = cljs.core.seq.call(null,inst_33301);
var state_33424__$1 = (function (){var statearr_33481 = state_33424;
(statearr_33481[(7)] = inst_33323__$1);

return statearr_33481;
})();
if(inst_33323__$1){
var statearr_33482_33545 = state_33424__$1;
(statearr_33482_33545[(1)] = (16));

} else {
var statearr_33483_33546 = state_33424__$1;
(statearr_33483_33546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (9))){
var inst_33353 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33484_33547 = state_33424__$1;
(statearr_33484_33547[(2)] = inst_33353);

(statearr_33484_33547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (5))){
var inst_33299 = cljs.core.deref.call(null,cs);
var inst_33300 = cljs.core.seq.call(null,inst_33299);
var inst_33301 = inst_33300;
var inst_33302 = null;
var inst_33303 = (0);
var inst_33304 = (0);
var state_33424__$1 = (function (){var statearr_33485 = state_33424;
(statearr_33485[(13)] = inst_33302);

(statearr_33485[(15)] = inst_33303);

(statearr_33485[(16)] = inst_33301);

(statearr_33485[(17)] = inst_33304);

return statearr_33485;
})();
var statearr_33486_33548 = state_33424__$1;
(statearr_33486_33548[(2)] = null);

(statearr_33486_33548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (14))){
var state_33424__$1 = state_33424;
var statearr_33487_33549 = state_33424__$1;
(statearr_33487_33549[(2)] = null);

(statearr_33487_33549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (45))){
var inst_33414 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33488_33550 = state_33424__$1;
(statearr_33488_33550[(2)] = inst_33414);

(statearr_33488_33550[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (26))){
var inst_33356 = (state_33424[(29)]);
var inst_33410 = (state_33424[(2)]);
var inst_33411 = cljs.core.seq.call(null,inst_33356);
var state_33424__$1 = (function (){var statearr_33489 = state_33424;
(statearr_33489[(31)] = inst_33410);

return statearr_33489;
})();
if(inst_33411){
var statearr_33490_33551 = state_33424__$1;
(statearr_33490_33551[(1)] = (42));

} else {
var statearr_33491_33552 = state_33424__$1;
(statearr_33491_33552[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (16))){
var inst_33323 = (state_33424[(7)]);
var inst_33325 = cljs.core.chunked_seq_QMARK_.call(null,inst_33323);
var state_33424__$1 = state_33424;
if(inst_33325){
var statearr_33492_33553 = state_33424__$1;
(statearr_33492_33553[(1)] = (19));

} else {
var statearr_33493_33554 = state_33424__$1;
(statearr_33493_33554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (38))){
var inst_33403 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33494_33555 = state_33424__$1;
(statearr_33494_33555[(2)] = inst_33403);

(statearr_33494_33555[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (30))){
var state_33424__$1 = state_33424;
var statearr_33495_33556 = state_33424__$1;
(statearr_33495_33556[(2)] = null);

(statearr_33495_33556[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (10))){
var inst_33302 = (state_33424[(13)]);
var inst_33304 = (state_33424[(17)]);
var inst_33312 = cljs.core._nth.call(null,inst_33302,inst_33304);
var inst_33313 = cljs.core.nth.call(null,inst_33312,(0),null);
var inst_33314 = cljs.core.nth.call(null,inst_33312,(1),null);
var state_33424__$1 = (function (){var statearr_33496 = state_33424;
(statearr_33496[(26)] = inst_33313);

return statearr_33496;
})();
if(cljs.core.truth_(inst_33314)){
var statearr_33497_33557 = state_33424__$1;
(statearr_33497_33557[(1)] = (13));

} else {
var statearr_33498_33558 = state_33424__$1;
(statearr_33498_33558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (18))){
var inst_33349 = (state_33424[(2)]);
var state_33424__$1 = state_33424;
var statearr_33499_33559 = state_33424__$1;
(statearr_33499_33559[(2)] = inst_33349);

(statearr_33499_33559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (42))){
var state_33424__$1 = state_33424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33424__$1,(45),dchan);
} else {
if((state_val_33425 === (37))){
var inst_33392 = (state_33424[(23)]);
var inst_33292 = (state_33424[(9)]);
var inst_33383 = (state_33424[(25)]);
var inst_33392__$1 = cljs.core.first.call(null,inst_33383);
var inst_33393 = cljs.core.async.put_BANG_.call(null,inst_33392__$1,inst_33292,done);
var state_33424__$1 = (function (){var statearr_33500 = state_33424;
(statearr_33500[(23)] = inst_33392__$1);

return statearr_33500;
})();
if(cljs.core.truth_(inst_33393)){
var statearr_33501_33560 = state_33424__$1;
(statearr_33501_33560[(1)] = (39));

} else {
var statearr_33502_33561 = state_33424__$1;
(statearr_33502_33561[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33425 === (8))){
var inst_33303 = (state_33424[(15)]);
var inst_33304 = (state_33424[(17)]);
var inst_33306 = (inst_33304 < inst_33303);
var inst_33307 = inst_33306;
var state_33424__$1 = state_33424;
if(cljs.core.truth_(inst_33307)){
var statearr_33503_33562 = state_33424__$1;
(statearr_33503_33562[(1)] = (10));

} else {
var statearr_33504_33563 = state_33424__$1;
(statearr_33504_33563[(1)] = (11));

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
});})(c__32691__auto___33509,cs,m,dchan,dctr,done))
;
return ((function (switch__32596__auto__,c__32691__auto___33509,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32597__auto__ = null;
var cljs$core$async$mult_$_state_machine__32597__auto____0 = (function (){
var statearr_33505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33505[(0)] = cljs$core$async$mult_$_state_machine__32597__auto__);

(statearr_33505[(1)] = (1));

return statearr_33505;
});
var cljs$core$async$mult_$_state_machine__32597__auto____1 = (function (state_33424){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_33424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33506){if((e33506 instanceof Object)){
var ex__32600__auto__ = e33506;
var statearr_33507_33564 = state_33424;
(statearr_33507_33564[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33565 = state_33424;
state_33424 = G__33565;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32597__auto__ = function(state_33424){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32597__auto____1.call(this,state_33424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32597__auto____0;
cljs$core$async$mult_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32597__auto____1;
return cljs$core$async$mult_$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___33509,cs,m,dchan,dctr,done))
})();
var state__32693__auto__ = (function (){var statearr_33508 = f__32692__auto__.call(null);
(statearr_33508[(6)] = c__32691__auto___33509);

return statearr_33508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___33509,cs,m,dchan,dctr,done))
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
var G__33567 = arguments.length;
switch (G__33567) {
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
var len__4730__auto___33579 = arguments.length;
var i__4731__auto___33580 = (0);
while(true){
if((i__4731__auto___33580 < len__4730__auto___33579)){
args__4736__auto__.push((arguments[i__4731__auto___33580]));

var G__33581 = (i__4731__auto___33580 + (1));
i__4731__auto___33580 = G__33581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33573){
var map__33574 = p__33573;
var map__33574__$1 = (((((!((map__33574 == null))))?(((((map__33574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33574):map__33574);
var opts = map__33574__$1;
var statearr_33576_33582 = state;
(statearr_33576_33582[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33574,map__33574__$1,opts){
return (function (val){
var statearr_33577_33583 = state;
(statearr_33577_33583[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33574,map__33574__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33578_33584 = state;
(statearr_33578_33584[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33569){
var G__33570 = cljs.core.first.call(null,seq33569);
var seq33569__$1 = cljs.core.next.call(null,seq33569);
var G__33571 = cljs.core.first.call(null,seq33569__$1);
var seq33569__$2 = cljs.core.next.call(null,seq33569__$1);
var G__33572 = cljs.core.first.call(null,seq33569__$2);
var seq33569__$3 = cljs.core.next.call(null,seq33569__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33570,G__33571,G__33572,seq33569__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33585 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33586){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33586 = meta33586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33587,meta33586__$1){
var self__ = this;
var _33587__$1 = this;
return (new cljs.core.async.t_cljs$core$async33585(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33586__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33587){
var self__ = this;
var _33587__$1 = this;
return self__.meta33586;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33585.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33586","meta33586",476975768,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33585";

cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33585");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33585.
 */
cljs.core.async.__GT_t_cljs$core$async33585 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33585(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33586){
return (new cljs.core.async.t_cljs$core$async33585(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33586));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33585(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32691__auto___33749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___33749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___33749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33689){
var state_val_33690 = (state_33689[(1)]);
if((state_val_33690 === (7))){
var inst_33604 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33691_33750 = state_33689__$1;
(statearr_33691_33750[(2)] = inst_33604);

(statearr_33691_33750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (20))){
var inst_33616 = (state_33689[(7)]);
var state_33689__$1 = state_33689;
var statearr_33692_33751 = state_33689__$1;
(statearr_33692_33751[(2)] = inst_33616);

(statearr_33692_33751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (27))){
var state_33689__$1 = state_33689;
var statearr_33693_33752 = state_33689__$1;
(statearr_33693_33752[(2)] = null);

(statearr_33693_33752[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (1))){
var inst_33591 = (state_33689[(8)]);
var inst_33591__$1 = calc_state.call(null);
var inst_33593 = (inst_33591__$1 == null);
var inst_33594 = cljs.core.not.call(null,inst_33593);
var state_33689__$1 = (function (){var statearr_33694 = state_33689;
(statearr_33694[(8)] = inst_33591__$1);

return statearr_33694;
})();
if(inst_33594){
var statearr_33695_33753 = state_33689__$1;
(statearr_33695_33753[(1)] = (2));

} else {
var statearr_33696_33754 = state_33689__$1;
(statearr_33696_33754[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (24))){
var inst_33663 = (state_33689[(9)]);
var inst_33649 = (state_33689[(10)]);
var inst_33640 = (state_33689[(11)]);
var inst_33663__$1 = inst_33640.call(null,inst_33649);
var state_33689__$1 = (function (){var statearr_33697 = state_33689;
(statearr_33697[(9)] = inst_33663__$1);

return statearr_33697;
})();
if(cljs.core.truth_(inst_33663__$1)){
var statearr_33698_33755 = state_33689__$1;
(statearr_33698_33755[(1)] = (29));

} else {
var statearr_33699_33756 = state_33689__$1;
(statearr_33699_33756[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (4))){
var inst_33607 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33607)){
var statearr_33700_33757 = state_33689__$1;
(statearr_33700_33757[(1)] = (8));

} else {
var statearr_33701_33758 = state_33689__$1;
(statearr_33701_33758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (15))){
var inst_33634 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33634)){
var statearr_33702_33759 = state_33689__$1;
(statearr_33702_33759[(1)] = (19));

} else {
var statearr_33703_33760 = state_33689__$1;
(statearr_33703_33760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (21))){
var inst_33639 = (state_33689[(12)]);
var inst_33639__$1 = (state_33689[(2)]);
var inst_33640 = cljs.core.get.call(null,inst_33639__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33641 = cljs.core.get.call(null,inst_33639__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33642 = cljs.core.get.call(null,inst_33639__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33689__$1 = (function (){var statearr_33704 = state_33689;
(statearr_33704[(13)] = inst_33641);

(statearr_33704[(11)] = inst_33640);

(statearr_33704[(12)] = inst_33639__$1);

return statearr_33704;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33689__$1,(22),inst_33642);
} else {
if((state_val_33690 === (31))){
var inst_33671 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33671)){
var statearr_33705_33761 = state_33689__$1;
(statearr_33705_33761[(1)] = (32));

} else {
var statearr_33706_33762 = state_33689__$1;
(statearr_33706_33762[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (32))){
var inst_33648 = (state_33689[(14)]);
var state_33689__$1 = state_33689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33689__$1,(35),out,inst_33648);
} else {
if((state_val_33690 === (33))){
var inst_33639 = (state_33689[(12)]);
var inst_33616 = inst_33639;
var state_33689__$1 = (function (){var statearr_33707 = state_33689;
(statearr_33707[(7)] = inst_33616);

return statearr_33707;
})();
var statearr_33708_33763 = state_33689__$1;
(statearr_33708_33763[(2)] = null);

(statearr_33708_33763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (13))){
var inst_33616 = (state_33689[(7)]);
var inst_33623 = inst_33616.cljs$lang$protocol_mask$partition0$;
var inst_33624 = (inst_33623 & (64));
var inst_33625 = inst_33616.cljs$core$ISeq$;
var inst_33626 = (cljs.core.PROTOCOL_SENTINEL === inst_33625);
var inst_33627 = ((inst_33624) || (inst_33626));
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33627)){
var statearr_33709_33764 = state_33689__$1;
(statearr_33709_33764[(1)] = (16));

} else {
var statearr_33710_33765 = state_33689__$1;
(statearr_33710_33765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (22))){
var inst_33649 = (state_33689[(10)]);
var inst_33648 = (state_33689[(14)]);
var inst_33647 = (state_33689[(2)]);
var inst_33648__$1 = cljs.core.nth.call(null,inst_33647,(0),null);
var inst_33649__$1 = cljs.core.nth.call(null,inst_33647,(1),null);
var inst_33650 = (inst_33648__$1 == null);
var inst_33651 = cljs.core._EQ_.call(null,inst_33649__$1,change);
var inst_33652 = ((inst_33650) || (inst_33651));
var state_33689__$1 = (function (){var statearr_33711 = state_33689;
(statearr_33711[(10)] = inst_33649__$1);

(statearr_33711[(14)] = inst_33648__$1);

return statearr_33711;
})();
if(cljs.core.truth_(inst_33652)){
var statearr_33712_33766 = state_33689__$1;
(statearr_33712_33766[(1)] = (23));

} else {
var statearr_33713_33767 = state_33689__$1;
(statearr_33713_33767[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (36))){
var inst_33639 = (state_33689[(12)]);
var inst_33616 = inst_33639;
var state_33689__$1 = (function (){var statearr_33714 = state_33689;
(statearr_33714[(7)] = inst_33616);

return statearr_33714;
})();
var statearr_33715_33768 = state_33689__$1;
(statearr_33715_33768[(2)] = null);

(statearr_33715_33768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (29))){
var inst_33663 = (state_33689[(9)]);
var state_33689__$1 = state_33689;
var statearr_33716_33769 = state_33689__$1;
(statearr_33716_33769[(2)] = inst_33663);

(statearr_33716_33769[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (6))){
var state_33689__$1 = state_33689;
var statearr_33717_33770 = state_33689__$1;
(statearr_33717_33770[(2)] = false);

(statearr_33717_33770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (28))){
var inst_33659 = (state_33689[(2)]);
var inst_33660 = calc_state.call(null);
var inst_33616 = inst_33660;
var state_33689__$1 = (function (){var statearr_33718 = state_33689;
(statearr_33718[(15)] = inst_33659);

(statearr_33718[(7)] = inst_33616);

return statearr_33718;
})();
var statearr_33719_33771 = state_33689__$1;
(statearr_33719_33771[(2)] = null);

(statearr_33719_33771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (25))){
var inst_33685 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33720_33772 = state_33689__$1;
(statearr_33720_33772[(2)] = inst_33685);

(statearr_33720_33772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (34))){
var inst_33683 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33721_33773 = state_33689__$1;
(statearr_33721_33773[(2)] = inst_33683);

(statearr_33721_33773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (17))){
var state_33689__$1 = state_33689;
var statearr_33722_33774 = state_33689__$1;
(statearr_33722_33774[(2)] = false);

(statearr_33722_33774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (3))){
var state_33689__$1 = state_33689;
var statearr_33723_33775 = state_33689__$1;
(statearr_33723_33775[(2)] = false);

(statearr_33723_33775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (12))){
var inst_33687 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33689__$1,inst_33687);
} else {
if((state_val_33690 === (2))){
var inst_33591 = (state_33689[(8)]);
var inst_33596 = inst_33591.cljs$lang$protocol_mask$partition0$;
var inst_33597 = (inst_33596 & (64));
var inst_33598 = inst_33591.cljs$core$ISeq$;
var inst_33599 = (cljs.core.PROTOCOL_SENTINEL === inst_33598);
var inst_33600 = ((inst_33597) || (inst_33599));
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33600)){
var statearr_33724_33776 = state_33689__$1;
(statearr_33724_33776[(1)] = (5));

} else {
var statearr_33725_33777 = state_33689__$1;
(statearr_33725_33777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (23))){
var inst_33648 = (state_33689[(14)]);
var inst_33654 = (inst_33648 == null);
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33654)){
var statearr_33726_33778 = state_33689__$1;
(statearr_33726_33778[(1)] = (26));

} else {
var statearr_33727_33779 = state_33689__$1;
(statearr_33727_33779[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (35))){
var inst_33674 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33674)){
var statearr_33728_33780 = state_33689__$1;
(statearr_33728_33780[(1)] = (36));

} else {
var statearr_33729_33781 = state_33689__$1;
(statearr_33729_33781[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (19))){
var inst_33616 = (state_33689[(7)]);
var inst_33636 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33616);
var state_33689__$1 = state_33689;
var statearr_33730_33782 = state_33689__$1;
(statearr_33730_33782[(2)] = inst_33636);

(statearr_33730_33782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (11))){
var inst_33616 = (state_33689[(7)]);
var inst_33620 = (inst_33616 == null);
var inst_33621 = cljs.core.not.call(null,inst_33620);
var state_33689__$1 = state_33689;
if(inst_33621){
var statearr_33731_33783 = state_33689__$1;
(statearr_33731_33783[(1)] = (13));

} else {
var statearr_33732_33784 = state_33689__$1;
(statearr_33732_33784[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (9))){
var inst_33591 = (state_33689[(8)]);
var state_33689__$1 = state_33689;
var statearr_33733_33785 = state_33689__$1;
(statearr_33733_33785[(2)] = inst_33591);

(statearr_33733_33785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (5))){
var state_33689__$1 = state_33689;
var statearr_33734_33786 = state_33689__$1;
(statearr_33734_33786[(2)] = true);

(statearr_33734_33786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (14))){
var state_33689__$1 = state_33689;
var statearr_33735_33787 = state_33689__$1;
(statearr_33735_33787[(2)] = false);

(statearr_33735_33787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (26))){
var inst_33649 = (state_33689[(10)]);
var inst_33656 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33649);
var state_33689__$1 = state_33689;
var statearr_33736_33788 = state_33689__$1;
(statearr_33736_33788[(2)] = inst_33656);

(statearr_33736_33788[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (16))){
var state_33689__$1 = state_33689;
var statearr_33737_33789 = state_33689__$1;
(statearr_33737_33789[(2)] = true);

(statearr_33737_33789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (38))){
var inst_33679 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33738_33790 = state_33689__$1;
(statearr_33738_33790[(2)] = inst_33679);

(statearr_33738_33790[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (30))){
var inst_33649 = (state_33689[(10)]);
var inst_33641 = (state_33689[(13)]);
var inst_33640 = (state_33689[(11)]);
var inst_33666 = cljs.core.empty_QMARK_.call(null,inst_33640);
var inst_33667 = inst_33641.call(null,inst_33649);
var inst_33668 = cljs.core.not.call(null,inst_33667);
var inst_33669 = ((inst_33666) && (inst_33668));
var state_33689__$1 = state_33689;
var statearr_33739_33791 = state_33689__$1;
(statearr_33739_33791[(2)] = inst_33669);

(statearr_33739_33791[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (10))){
var inst_33591 = (state_33689[(8)]);
var inst_33612 = (state_33689[(2)]);
var inst_33613 = cljs.core.get.call(null,inst_33612,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33614 = cljs.core.get.call(null,inst_33612,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33615 = cljs.core.get.call(null,inst_33612,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33616 = inst_33591;
var state_33689__$1 = (function (){var statearr_33740 = state_33689;
(statearr_33740[(16)] = inst_33614);

(statearr_33740[(17)] = inst_33615);

(statearr_33740[(7)] = inst_33616);

(statearr_33740[(18)] = inst_33613);

return statearr_33740;
})();
var statearr_33741_33792 = state_33689__$1;
(statearr_33741_33792[(2)] = null);

(statearr_33741_33792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (18))){
var inst_33631 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33742_33793 = state_33689__$1;
(statearr_33742_33793[(2)] = inst_33631);

(statearr_33742_33793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (37))){
var state_33689__$1 = state_33689;
var statearr_33743_33794 = state_33689__$1;
(statearr_33743_33794[(2)] = null);

(statearr_33743_33794[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (8))){
var inst_33591 = (state_33689[(8)]);
var inst_33609 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33591);
var state_33689__$1 = state_33689;
var statearr_33744_33795 = state_33689__$1;
(statearr_33744_33795[(2)] = inst_33609);

(statearr_33744_33795[(1)] = (10));


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
});})(c__32691__auto___33749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32596__auto__,c__32691__auto___33749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32597__auto__ = null;
var cljs$core$async$mix_$_state_machine__32597__auto____0 = (function (){
var statearr_33745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33745[(0)] = cljs$core$async$mix_$_state_machine__32597__auto__);

(statearr_33745[(1)] = (1));

return statearr_33745;
});
var cljs$core$async$mix_$_state_machine__32597__auto____1 = (function (state_33689){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_33689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33746){if((e33746 instanceof Object)){
var ex__32600__auto__ = e33746;
var statearr_33747_33796 = state_33689;
(statearr_33747_33796[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33797 = state_33689;
state_33689 = G__33797;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32597__auto__ = function(state_33689){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32597__auto____1.call(this,state_33689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32597__auto____0;
cljs$core$async$mix_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32597__auto____1;
return cljs$core$async$mix_$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___33749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32693__auto__ = (function (){var statearr_33748 = f__32692__auto__.call(null);
(statearr_33748[(6)] = c__32691__auto___33749);

return statearr_33748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___33749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33799 = arguments.length;
switch (G__33799) {
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
var G__33803 = arguments.length;
switch (G__33803) {
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
return (function (p1__33801_SHARP_){
if(cljs.core.truth_(p1__33801_SHARP_.call(null,topic))){
return p1__33801_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33801_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33804 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33805){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33805 = meta33805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33806,meta33805__$1){
var self__ = this;
var _33806__$1 = this;
return (new cljs.core.async.t_cljs$core$async33804(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33805__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33806){
var self__ = this;
var _33806__$1 = this;
return self__.meta33805;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33804.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33804.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33805","meta33805",-1644301871,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33804";

cljs.core.async.t_cljs$core$async33804.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33804");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33804.
 */
cljs.core.async.__GT_t_cljs$core$async33804 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33804(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33805){
return (new cljs.core.async.t_cljs$core$async33804(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33805));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33804(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32691__auto___33924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___33924,mults,ensure_mult,p){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___33924,mults,ensure_mult,p){
return (function (state_33878){
var state_val_33879 = (state_33878[(1)]);
if((state_val_33879 === (7))){
var inst_33874 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33880_33925 = state_33878__$1;
(statearr_33880_33925[(2)] = inst_33874);

(statearr_33880_33925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (20))){
var state_33878__$1 = state_33878;
var statearr_33881_33926 = state_33878__$1;
(statearr_33881_33926[(2)] = null);

(statearr_33881_33926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (1))){
var state_33878__$1 = state_33878;
var statearr_33882_33927 = state_33878__$1;
(statearr_33882_33927[(2)] = null);

(statearr_33882_33927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (24))){
var inst_33857 = (state_33878[(7)]);
var inst_33866 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33857);
var state_33878__$1 = state_33878;
var statearr_33883_33928 = state_33878__$1;
(statearr_33883_33928[(2)] = inst_33866);

(statearr_33883_33928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (4))){
var inst_33809 = (state_33878[(8)]);
var inst_33809__$1 = (state_33878[(2)]);
var inst_33810 = (inst_33809__$1 == null);
var state_33878__$1 = (function (){var statearr_33884 = state_33878;
(statearr_33884[(8)] = inst_33809__$1);

return statearr_33884;
})();
if(cljs.core.truth_(inst_33810)){
var statearr_33885_33929 = state_33878__$1;
(statearr_33885_33929[(1)] = (5));

} else {
var statearr_33886_33930 = state_33878__$1;
(statearr_33886_33930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (15))){
var inst_33851 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33887_33931 = state_33878__$1;
(statearr_33887_33931[(2)] = inst_33851);

(statearr_33887_33931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (21))){
var inst_33871 = (state_33878[(2)]);
var state_33878__$1 = (function (){var statearr_33888 = state_33878;
(statearr_33888[(9)] = inst_33871);

return statearr_33888;
})();
var statearr_33889_33932 = state_33878__$1;
(statearr_33889_33932[(2)] = null);

(statearr_33889_33932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (13))){
var inst_33833 = (state_33878[(10)]);
var inst_33835 = cljs.core.chunked_seq_QMARK_.call(null,inst_33833);
var state_33878__$1 = state_33878;
if(inst_33835){
var statearr_33890_33933 = state_33878__$1;
(statearr_33890_33933[(1)] = (16));

} else {
var statearr_33891_33934 = state_33878__$1;
(statearr_33891_33934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (22))){
var inst_33863 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
if(cljs.core.truth_(inst_33863)){
var statearr_33892_33935 = state_33878__$1;
(statearr_33892_33935[(1)] = (23));

} else {
var statearr_33893_33936 = state_33878__$1;
(statearr_33893_33936[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (6))){
var inst_33859 = (state_33878[(11)]);
var inst_33857 = (state_33878[(7)]);
var inst_33809 = (state_33878[(8)]);
var inst_33857__$1 = topic_fn.call(null,inst_33809);
var inst_33858 = cljs.core.deref.call(null,mults);
var inst_33859__$1 = cljs.core.get.call(null,inst_33858,inst_33857__$1);
var state_33878__$1 = (function (){var statearr_33894 = state_33878;
(statearr_33894[(11)] = inst_33859__$1);

(statearr_33894[(7)] = inst_33857__$1);

return statearr_33894;
})();
if(cljs.core.truth_(inst_33859__$1)){
var statearr_33895_33937 = state_33878__$1;
(statearr_33895_33937[(1)] = (19));

} else {
var statearr_33896_33938 = state_33878__$1;
(statearr_33896_33938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (25))){
var inst_33868 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33897_33939 = state_33878__$1;
(statearr_33897_33939[(2)] = inst_33868);

(statearr_33897_33939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (17))){
var inst_33833 = (state_33878[(10)]);
var inst_33842 = cljs.core.first.call(null,inst_33833);
var inst_33843 = cljs.core.async.muxch_STAR_.call(null,inst_33842);
var inst_33844 = cljs.core.async.close_BANG_.call(null,inst_33843);
var inst_33845 = cljs.core.next.call(null,inst_33833);
var inst_33819 = inst_33845;
var inst_33820 = null;
var inst_33821 = (0);
var inst_33822 = (0);
var state_33878__$1 = (function (){var statearr_33898 = state_33878;
(statearr_33898[(12)] = inst_33820);

(statearr_33898[(13)] = inst_33821);

(statearr_33898[(14)] = inst_33844);

(statearr_33898[(15)] = inst_33819);

(statearr_33898[(16)] = inst_33822);

return statearr_33898;
})();
var statearr_33899_33940 = state_33878__$1;
(statearr_33899_33940[(2)] = null);

(statearr_33899_33940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (3))){
var inst_33876 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33878__$1,inst_33876);
} else {
if((state_val_33879 === (12))){
var inst_33853 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33900_33941 = state_33878__$1;
(statearr_33900_33941[(2)] = inst_33853);

(statearr_33900_33941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (2))){
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33878__$1,(4),ch);
} else {
if((state_val_33879 === (23))){
var state_33878__$1 = state_33878;
var statearr_33901_33942 = state_33878__$1;
(statearr_33901_33942[(2)] = null);

(statearr_33901_33942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (19))){
var inst_33859 = (state_33878[(11)]);
var inst_33809 = (state_33878[(8)]);
var inst_33861 = cljs.core.async.muxch_STAR_.call(null,inst_33859);
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33878__$1,(22),inst_33861,inst_33809);
} else {
if((state_val_33879 === (11))){
var inst_33819 = (state_33878[(15)]);
var inst_33833 = (state_33878[(10)]);
var inst_33833__$1 = cljs.core.seq.call(null,inst_33819);
var state_33878__$1 = (function (){var statearr_33902 = state_33878;
(statearr_33902[(10)] = inst_33833__$1);

return statearr_33902;
})();
if(inst_33833__$1){
var statearr_33903_33943 = state_33878__$1;
(statearr_33903_33943[(1)] = (13));

} else {
var statearr_33904_33944 = state_33878__$1;
(statearr_33904_33944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (9))){
var inst_33855 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33905_33945 = state_33878__$1;
(statearr_33905_33945[(2)] = inst_33855);

(statearr_33905_33945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (5))){
var inst_33816 = cljs.core.deref.call(null,mults);
var inst_33817 = cljs.core.vals.call(null,inst_33816);
var inst_33818 = cljs.core.seq.call(null,inst_33817);
var inst_33819 = inst_33818;
var inst_33820 = null;
var inst_33821 = (0);
var inst_33822 = (0);
var state_33878__$1 = (function (){var statearr_33906 = state_33878;
(statearr_33906[(12)] = inst_33820);

(statearr_33906[(13)] = inst_33821);

(statearr_33906[(15)] = inst_33819);

(statearr_33906[(16)] = inst_33822);

return statearr_33906;
})();
var statearr_33907_33946 = state_33878__$1;
(statearr_33907_33946[(2)] = null);

(statearr_33907_33946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (14))){
var state_33878__$1 = state_33878;
var statearr_33911_33947 = state_33878__$1;
(statearr_33911_33947[(2)] = null);

(statearr_33911_33947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (16))){
var inst_33833 = (state_33878[(10)]);
var inst_33837 = cljs.core.chunk_first.call(null,inst_33833);
var inst_33838 = cljs.core.chunk_rest.call(null,inst_33833);
var inst_33839 = cljs.core.count.call(null,inst_33837);
var inst_33819 = inst_33838;
var inst_33820 = inst_33837;
var inst_33821 = inst_33839;
var inst_33822 = (0);
var state_33878__$1 = (function (){var statearr_33912 = state_33878;
(statearr_33912[(12)] = inst_33820);

(statearr_33912[(13)] = inst_33821);

(statearr_33912[(15)] = inst_33819);

(statearr_33912[(16)] = inst_33822);

return statearr_33912;
})();
var statearr_33913_33948 = state_33878__$1;
(statearr_33913_33948[(2)] = null);

(statearr_33913_33948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (10))){
var inst_33820 = (state_33878[(12)]);
var inst_33821 = (state_33878[(13)]);
var inst_33819 = (state_33878[(15)]);
var inst_33822 = (state_33878[(16)]);
var inst_33827 = cljs.core._nth.call(null,inst_33820,inst_33822);
var inst_33828 = cljs.core.async.muxch_STAR_.call(null,inst_33827);
var inst_33829 = cljs.core.async.close_BANG_.call(null,inst_33828);
var inst_33830 = (inst_33822 + (1));
var tmp33908 = inst_33820;
var tmp33909 = inst_33821;
var tmp33910 = inst_33819;
var inst_33819__$1 = tmp33910;
var inst_33820__$1 = tmp33908;
var inst_33821__$1 = tmp33909;
var inst_33822__$1 = inst_33830;
var state_33878__$1 = (function (){var statearr_33914 = state_33878;
(statearr_33914[(12)] = inst_33820__$1);

(statearr_33914[(17)] = inst_33829);

(statearr_33914[(13)] = inst_33821__$1);

(statearr_33914[(15)] = inst_33819__$1);

(statearr_33914[(16)] = inst_33822__$1);

return statearr_33914;
})();
var statearr_33915_33949 = state_33878__$1;
(statearr_33915_33949[(2)] = null);

(statearr_33915_33949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (18))){
var inst_33848 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33916_33950 = state_33878__$1;
(statearr_33916_33950[(2)] = inst_33848);

(statearr_33916_33950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (8))){
var inst_33821 = (state_33878[(13)]);
var inst_33822 = (state_33878[(16)]);
var inst_33824 = (inst_33822 < inst_33821);
var inst_33825 = inst_33824;
var state_33878__$1 = state_33878;
if(cljs.core.truth_(inst_33825)){
var statearr_33917_33951 = state_33878__$1;
(statearr_33917_33951[(1)] = (10));

} else {
var statearr_33918_33952 = state_33878__$1;
(statearr_33918_33952[(1)] = (11));

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
});})(c__32691__auto___33924,mults,ensure_mult,p))
;
return ((function (switch__32596__auto__,c__32691__auto___33924,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_33919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33919[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_33919[(1)] = (1));

return statearr_33919;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_33878){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_33878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e33920){if((e33920 instanceof Object)){
var ex__32600__auto__ = e33920;
var statearr_33921_33953 = state_33878;
(statearr_33921_33953[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33954 = state_33878;
state_33878 = G__33954;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_33878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_33878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___33924,mults,ensure_mult,p))
})();
var state__32693__auto__ = (function (){var statearr_33922 = f__32692__auto__.call(null);
(statearr_33922[(6)] = c__32691__auto___33924);

return statearr_33922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___33924,mults,ensure_mult,p))
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
var G__33956 = arguments.length;
switch (G__33956) {
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
var G__33959 = arguments.length;
switch (G__33959) {
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
var G__33962 = arguments.length;
switch (G__33962) {
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
var c__32691__auto___34029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34001){
var state_val_34002 = (state_34001[(1)]);
if((state_val_34002 === (7))){
var state_34001__$1 = state_34001;
var statearr_34003_34030 = state_34001__$1;
(statearr_34003_34030[(2)] = null);

(statearr_34003_34030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (1))){
var state_34001__$1 = state_34001;
var statearr_34004_34031 = state_34001__$1;
(statearr_34004_34031[(2)] = null);

(statearr_34004_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (4))){
var inst_33965 = (state_34001[(7)]);
var inst_33967 = (inst_33965 < cnt);
var state_34001__$1 = state_34001;
if(cljs.core.truth_(inst_33967)){
var statearr_34005_34032 = state_34001__$1;
(statearr_34005_34032[(1)] = (6));

} else {
var statearr_34006_34033 = state_34001__$1;
(statearr_34006_34033[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (15))){
var inst_33997 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34007_34034 = state_34001__$1;
(statearr_34007_34034[(2)] = inst_33997);

(statearr_34007_34034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (13))){
var inst_33990 = cljs.core.async.close_BANG_.call(null,out);
var state_34001__$1 = state_34001;
var statearr_34008_34035 = state_34001__$1;
(statearr_34008_34035[(2)] = inst_33990);

(statearr_34008_34035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (6))){
var state_34001__$1 = state_34001;
var statearr_34009_34036 = state_34001__$1;
(statearr_34009_34036[(2)] = null);

(statearr_34009_34036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (3))){
var inst_33999 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34001__$1,inst_33999);
} else {
if((state_val_34002 === (12))){
var inst_33987 = (state_34001[(8)]);
var inst_33987__$1 = (state_34001[(2)]);
var inst_33988 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33987__$1);
var state_34001__$1 = (function (){var statearr_34010 = state_34001;
(statearr_34010[(8)] = inst_33987__$1);

return statearr_34010;
})();
if(cljs.core.truth_(inst_33988)){
var statearr_34011_34037 = state_34001__$1;
(statearr_34011_34037[(1)] = (13));

} else {
var statearr_34012_34038 = state_34001__$1;
(statearr_34012_34038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (2))){
var inst_33964 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33965 = (0);
var state_34001__$1 = (function (){var statearr_34013 = state_34001;
(statearr_34013[(7)] = inst_33965);

(statearr_34013[(9)] = inst_33964);

return statearr_34013;
})();
var statearr_34014_34039 = state_34001__$1;
(statearr_34014_34039[(2)] = null);

(statearr_34014_34039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (11))){
var inst_33965 = (state_34001[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34001,(10),Object,null,(9));
var inst_33974 = chs__$1.call(null,inst_33965);
var inst_33975 = done.call(null,inst_33965);
var inst_33976 = cljs.core.async.take_BANG_.call(null,inst_33974,inst_33975);
var state_34001__$1 = state_34001;
var statearr_34015_34040 = state_34001__$1;
(statearr_34015_34040[(2)] = inst_33976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34001__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (9))){
var inst_33965 = (state_34001[(7)]);
var inst_33978 = (state_34001[(2)]);
var inst_33979 = (inst_33965 + (1));
var inst_33965__$1 = inst_33979;
var state_34001__$1 = (function (){var statearr_34016 = state_34001;
(statearr_34016[(7)] = inst_33965__$1);

(statearr_34016[(10)] = inst_33978);

return statearr_34016;
})();
var statearr_34017_34041 = state_34001__$1;
(statearr_34017_34041[(2)] = null);

(statearr_34017_34041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (5))){
var inst_33985 = (state_34001[(2)]);
var state_34001__$1 = (function (){var statearr_34018 = state_34001;
(statearr_34018[(11)] = inst_33985);

return statearr_34018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34001__$1,(12),dchan);
} else {
if((state_val_34002 === (14))){
var inst_33987 = (state_34001[(8)]);
var inst_33992 = cljs.core.apply.call(null,f,inst_33987);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34001__$1,(16),out,inst_33992);
} else {
if((state_val_34002 === (16))){
var inst_33994 = (state_34001[(2)]);
var state_34001__$1 = (function (){var statearr_34019 = state_34001;
(statearr_34019[(12)] = inst_33994);

return statearr_34019;
})();
var statearr_34020_34042 = state_34001__$1;
(statearr_34020_34042[(2)] = null);

(statearr_34020_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (10))){
var inst_33969 = (state_34001[(2)]);
var inst_33970 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34001__$1 = (function (){var statearr_34021 = state_34001;
(statearr_34021[(13)] = inst_33969);

return statearr_34021;
})();
var statearr_34022_34043 = state_34001__$1;
(statearr_34022_34043[(2)] = inst_33970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34001__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (8))){
var inst_33983 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34023_34044 = state_34001__$1;
(statearr_34023_34044[(2)] = inst_33983);

(statearr_34023_34044[(1)] = (5));


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
});})(c__32691__auto___34029,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32596__auto__,c__32691__auto___34029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_34024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34024[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_34024[(1)] = (1));

return statearr_34024;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_34001){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34025){if((e34025 instanceof Object)){
var ex__32600__auto__ = e34025;
var statearr_34026_34045 = state_34001;
(statearr_34026_34045[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34046 = state_34001;
state_34001 = G__34046;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_34001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_34001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34029,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32693__auto__ = (function (){var statearr_34027 = f__32692__auto__.call(null);
(statearr_34027[(6)] = c__32691__auto___34029);

return statearr_34027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34029,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34049 = arguments.length;
switch (G__34049) {
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
var c__32691__auto___34103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34103,out){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34103,out){
return (function (state_34081){
var state_val_34082 = (state_34081[(1)]);
if((state_val_34082 === (7))){
var inst_34060 = (state_34081[(7)]);
var inst_34061 = (state_34081[(8)]);
var inst_34060__$1 = (state_34081[(2)]);
var inst_34061__$1 = cljs.core.nth.call(null,inst_34060__$1,(0),null);
var inst_34062 = cljs.core.nth.call(null,inst_34060__$1,(1),null);
var inst_34063 = (inst_34061__$1 == null);
var state_34081__$1 = (function (){var statearr_34083 = state_34081;
(statearr_34083[(7)] = inst_34060__$1);

(statearr_34083[(8)] = inst_34061__$1);

(statearr_34083[(9)] = inst_34062);

return statearr_34083;
})();
if(cljs.core.truth_(inst_34063)){
var statearr_34084_34104 = state_34081__$1;
(statearr_34084_34104[(1)] = (8));

} else {
var statearr_34085_34105 = state_34081__$1;
(statearr_34085_34105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (1))){
var inst_34050 = cljs.core.vec.call(null,chs);
var inst_34051 = inst_34050;
var state_34081__$1 = (function (){var statearr_34086 = state_34081;
(statearr_34086[(10)] = inst_34051);

return statearr_34086;
})();
var statearr_34087_34106 = state_34081__$1;
(statearr_34087_34106[(2)] = null);

(statearr_34087_34106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (4))){
var inst_34051 = (state_34081[(10)]);
var state_34081__$1 = state_34081;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34081__$1,(7),inst_34051);
} else {
if((state_val_34082 === (6))){
var inst_34077 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34088_34107 = state_34081__$1;
(statearr_34088_34107[(2)] = inst_34077);

(statearr_34088_34107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (3))){
var inst_34079 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34081__$1,inst_34079);
} else {
if((state_val_34082 === (2))){
var inst_34051 = (state_34081[(10)]);
var inst_34053 = cljs.core.count.call(null,inst_34051);
var inst_34054 = (inst_34053 > (0));
var state_34081__$1 = state_34081;
if(cljs.core.truth_(inst_34054)){
var statearr_34090_34108 = state_34081__$1;
(statearr_34090_34108[(1)] = (4));

} else {
var statearr_34091_34109 = state_34081__$1;
(statearr_34091_34109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (11))){
var inst_34051 = (state_34081[(10)]);
var inst_34070 = (state_34081[(2)]);
var tmp34089 = inst_34051;
var inst_34051__$1 = tmp34089;
var state_34081__$1 = (function (){var statearr_34092 = state_34081;
(statearr_34092[(10)] = inst_34051__$1);

(statearr_34092[(11)] = inst_34070);

return statearr_34092;
})();
var statearr_34093_34110 = state_34081__$1;
(statearr_34093_34110[(2)] = null);

(statearr_34093_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (9))){
var inst_34061 = (state_34081[(8)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34081__$1,(11),out,inst_34061);
} else {
if((state_val_34082 === (5))){
var inst_34075 = cljs.core.async.close_BANG_.call(null,out);
var state_34081__$1 = state_34081;
var statearr_34094_34111 = state_34081__$1;
(statearr_34094_34111[(2)] = inst_34075);

(statearr_34094_34111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (10))){
var inst_34073 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34095_34112 = state_34081__$1;
(statearr_34095_34112[(2)] = inst_34073);

(statearr_34095_34112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (8))){
var inst_34060 = (state_34081[(7)]);
var inst_34061 = (state_34081[(8)]);
var inst_34062 = (state_34081[(9)]);
var inst_34051 = (state_34081[(10)]);
var inst_34065 = (function (){var cs = inst_34051;
var vec__34056 = inst_34060;
var v = inst_34061;
var c = inst_34062;
return ((function (cs,vec__34056,v,c,inst_34060,inst_34061,inst_34062,inst_34051,state_val_34082,c__32691__auto___34103,out){
return (function (p1__34047_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34047_SHARP_);
});
;})(cs,vec__34056,v,c,inst_34060,inst_34061,inst_34062,inst_34051,state_val_34082,c__32691__auto___34103,out))
})();
var inst_34066 = cljs.core.filterv.call(null,inst_34065,inst_34051);
var inst_34051__$1 = inst_34066;
var state_34081__$1 = (function (){var statearr_34096 = state_34081;
(statearr_34096[(10)] = inst_34051__$1);

return statearr_34096;
})();
var statearr_34097_34113 = state_34081__$1;
(statearr_34097_34113[(2)] = null);

(statearr_34097_34113[(1)] = (2));


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
});})(c__32691__auto___34103,out))
;
return ((function (switch__32596__auto__,c__32691__auto___34103,out){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_34098 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34098[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_34098[(1)] = (1));

return statearr_34098;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_34081){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34099){if((e34099 instanceof Object)){
var ex__32600__auto__ = e34099;
var statearr_34100_34114 = state_34081;
(statearr_34100_34114[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34115 = state_34081;
state_34081 = G__34115;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_34081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_34081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34103,out))
})();
var state__32693__auto__ = (function (){var statearr_34101 = f__32692__auto__.call(null);
(statearr_34101[(6)] = c__32691__auto___34103);

return statearr_34101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34103,out))
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
var G__34117 = arguments.length;
switch (G__34117) {
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
var c__32691__auto___34162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34162,out){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34162,out){
return (function (state_34141){
var state_val_34142 = (state_34141[(1)]);
if((state_val_34142 === (7))){
var inst_34123 = (state_34141[(7)]);
var inst_34123__$1 = (state_34141[(2)]);
var inst_34124 = (inst_34123__$1 == null);
var inst_34125 = cljs.core.not.call(null,inst_34124);
var state_34141__$1 = (function (){var statearr_34143 = state_34141;
(statearr_34143[(7)] = inst_34123__$1);

return statearr_34143;
})();
if(inst_34125){
var statearr_34144_34163 = state_34141__$1;
(statearr_34144_34163[(1)] = (8));

} else {
var statearr_34145_34164 = state_34141__$1;
(statearr_34145_34164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (1))){
var inst_34118 = (0);
var state_34141__$1 = (function (){var statearr_34146 = state_34141;
(statearr_34146[(8)] = inst_34118);

return statearr_34146;
})();
var statearr_34147_34165 = state_34141__$1;
(statearr_34147_34165[(2)] = null);

(statearr_34147_34165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (4))){
var state_34141__$1 = state_34141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34141__$1,(7),ch);
} else {
if((state_val_34142 === (6))){
var inst_34136 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34148_34166 = state_34141__$1;
(statearr_34148_34166[(2)] = inst_34136);

(statearr_34148_34166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (3))){
var inst_34138 = (state_34141[(2)]);
var inst_34139 = cljs.core.async.close_BANG_.call(null,out);
var state_34141__$1 = (function (){var statearr_34149 = state_34141;
(statearr_34149[(9)] = inst_34138);

return statearr_34149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34141__$1,inst_34139);
} else {
if((state_val_34142 === (2))){
var inst_34118 = (state_34141[(8)]);
var inst_34120 = (inst_34118 < n);
var state_34141__$1 = state_34141;
if(cljs.core.truth_(inst_34120)){
var statearr_34150_34167 = state_34141__$1;
(statearr_34150_34167[(1)] = (4));

} else {
var statearr_34151_34168 = state_34141__$1;
(statearr_34151_34168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (11))){
var inst_34118 = (state_34141[(8)]);
var inst_34128 = (state_34141[(2)]);
var inst_34129 = (inst_34118 + (1));
var inst_34118__$1 = inst_34129;
var state_34141__$1 = (function (){var statearr_34152 = state_34141;
(statearr_34152[(8)] = inst_34118__$1);

(statearr_34152[(10)] = inst_34128);

return statearr_34152;
})();
var statearr_34153_34169 = state_34141__$1;
(statearr_34153_34169[(2)] = null);

(statearr_34153_34169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (9))){
var state_34141__$1 = state_34141;
var statearr_34154_34170 = state_34141__$1;
(statearr_34154_34170[(2)] = null);

(statearr_34154_34170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (5))){
var state_34141__$1 = state_34141;
var statearr_34155_34171 = state_34141__$1;
(statearr_34155_34171[(2)] = null);

(statearr_34155_34171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (10))){
var inst_34133 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34156_34172 = state_34141__$1;
(statearr_34156_34172[(2)] = inst_34133);

(statearr_34156_34172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (8))){
var inst_34123 = (state_34141[(7)]);
var state_34141__$1 = state_34141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34141__$1,(11),out,inst_34123);
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
});})(c__32691__auto___34162,out))
;
return ((function (switch__32596__auto__,c__32691__auto___34162,out){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_34157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34157[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_34157[(1)] = (1));

return statearr_34157;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_34141){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34158){if((e34158 instanceof Object)){
var ex__32600__auto__ = e34158;
var statearr_34159_34173 = state_34141;
(statearr_34159_34173[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34174 = state_34141;
state_34141 = G__34174;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_34141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_34141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34162,out))
})();
var state__32693__auto__ = (function (){var statearr_34160 = f__32692__auto__.call(null);
(statearr_34160[(6)] = c__32691__auto___34162);

return statearr_34160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34162,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34176 = (function (f,ch,meta34177){
this.f = f;
this.ch = ch;
this.meta34177 = meta34177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34178,meta34177__$1){
var self__ = this;
var _34178__$1 = this;
return (new cljs.core.async.t_cljs$core$async34176(self__.f,self__.ch,meta34177__$1));
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34178){
var self__ = this;
var _34178__$1 = this;
return self__.meta34177;
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34179 = (function (f,ch,meta34177,_,fn1,meta34180){
this.f = f;
this.ch = ch;
this.meta34177 = meta34177;
this._ = _;
this.fn1 = fn1;
this.meta34180 = meta34180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34181,meta34180__$1){
var self__ = this;
var _34181__$1 = this;
return (new cljs.core.async.t_cljs$core$async34179(self__.f,self__.ch,self__.meta34177,self__._,self__.fn1,meta34180__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34181){
var self__ = this;
var _34181__$1 = this;
return self__.meta34180;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34175_SHARP_){
return f1.call(null,(((p1__34175_SHARP_ == null))?null:self__.f.call(null,p1__34175_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34179.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34177","meta34177",74067911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34176","cljs.core.async/t_cljs$core$async34176",815188807,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34180","meta34180",-636889419,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34179";

cljs.core.async.t_cljs$core$async34179.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34179");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34179.
 */
cljs.core.async.__GT_t_cljs$core$async34179 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34179(f__$1,ch__$1,meta34177__$1,___$2,fn1__$1,meta34180){
return (new cljs.core.async.t_cljs$core$async34179(f__$1,ch__$1,meta34177__$1,___$2,fn1__$1,meta34180));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34179(self__.f,self__.ch,self__.meta34177,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34177","meta34177",74067911,null)], null);
});

cljs.core.async.t_cljs$core$async34176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34176";

cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34176");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34176.
 */
cljs.core.async.__GT_t_cljs$core$async34176 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34176(f__$1,ch__$1,meta34177){
return (new cljs.core.async.t_cljs$core$async34176(f__$1,ch__$1,meta34177));
});

}

return (new cljs.core.async.t_cljs$core$async34176(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34182 = (function (f,ch,meta34183){
this.f = f;
this.ch = ch;
this.meta34183 = meta34183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34184,meta34183__$1){
var self__ = this;
var _34184__$1 = this;
return (new cljs.core.async.t_cljs$core$async34182(self__.f,self__.ch,meta34183__$1));
});

cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34184){
var self__ = this;
var _34184__$1 = this;
return self__.meta34183;
});

cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34183","meta34183",-331673541,null)], null);
});

cljs.core.async.t_cljs$core$async34182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34182";

cljs.core.async.t_cljs$core$async34182.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34182");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34182.
 */
cljs.core.async.__GT_t_cljs$core$async34182 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34182(f__$1,ch__$1,meta34183){
return (new cljs.core.async.t_cljs$core$async34182(f__$1,ch__$1,meta34183));
});

}

return (new cljs.core.async.t_cljs$core$async34182(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34185 = (function (p,ch,meta34186){
this.p = p;
this.ch = ch;
this.meta34186 = meta34186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34187,meta34186__$1){
var self__ = this;
var _34187__$1 = this;
return (new cljs.core.async.t_cljs$core$async34185(self__.p,self__.ch,meta34186__$1));
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34187){
var self__ = this;
var _34187__$1 = this;
return self__.meta34186;
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34186","meta34186",884509872,null)], null);
});

cljs.core.async.t_cljs$core$async34185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34185";

cljs.core.async.t_cljs$core$async34185.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34185");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34185.
 */
cljs.core.async.__GT_t_cljs$core$async34185 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34185(p__$1,ch__$1,meta34186){
return (new cljs.core.async.t_cljs$core$async34185(p__$1,ch__$1,meta34186));
});

}

return (new cljs.core.async.t_cljs$core$async34185(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34189 = arguments.length;
switch (G__34189) {
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
var c__32691__auto___34229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34229,out){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34229,out){
return (function (state_34210){
var state_val_34211 = (state_34210[(1)]);
if((state_val_34211 === (7))){
var inst_34206 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34212_34230 = state_34210__$1;
(statearr_34212_34230[(2)] = inst_34206);

(statearr_34212_34230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (1))){
var state_34210__$1 = state_34210;
var statearr_34213_34231 = state_34210__$1;
(statearr_34213_34231[(2)] = null);

(statearr_34213_34231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (4))){
var inst_34192 = (state_34210[(7)]);
var inst_34192__$1 = (state_34210[(2)]);
var inst_34193 = (inst_34192__$1 == null);
var state_34210__$1 = (function (){var statearr_34214 = state_34210;
(statearr_34214[(7)] = inst_34192__$1);

return statearr_34214;
})();
if(cljs.core.truth_(inst_34193)){
var statearr_34215_34232 = state_34210__$1;
(statearr_34215_34232[(1)] = (5));

} else {
var statearr_34216_34233 = state_34210__$1;
(statearr_34216_34233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (6))){
var inst_34192 = (state_34210[(7)]);
var inst_34197 = p.call(null,inst_34192);
var state_34210__$1 = state_34210;
if(cljs.core.truth_(inst_34197)){
var statearr_34217_34234 = state_34210__$1;
(statearr_34217_34234[(1)] = (8));

} else {
var statearr_34218_34235 = state_34210__$1;
(statearr_34218_34235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (3))){
var inst_34208 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34210__$1,inst_34208);
} else {
if((state_val_34211 === (2))){
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34210__$1,(4),ch);
} else {
if((state_val_34211 === (11))){
var inst_34200 = (state_34210[(2)]);
var state_34210__$1 = state_34210;
var statearr_34219_34236 = state_34210__$1;
(statearr_34219_34236[(2)] = inst_34200);

(statearr_34219_34236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (9))){
var state_34210__$1 = state_34210;
var statearr_34220_34237 = state_34210__$1;
(statearr_34220_34237[(2)] = null);

(statearr_34220_34237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (5))){
var inst_34195 = cljs.core.async.close_BANG_.call(null,out);
var state_34210__$1 = state_34210;
var statearr_34221_34238 = state_34210__$1;
(statearr_34221_34238[(2)] = inst_34195);

(statearr_34221_34238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (10))){
var inst_34203 = (state_34210[(2)]);
var state_34210__$1 = (function (){var statearr_34222 = state_34210;
(statearr_34222[(8)] = inst_34203);

return statearr_34222;
})();
var statearr_34223_34239 = state_34210__$1;
(statearr_34223_34239[(2)] = null);

(statearr_34223_34239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34211 === (8))){
var inst_34192 = (state_34210[(7)]);
var state_34210__$1 = state_34210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34210__$1,(11),out,inst_34192);
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
});})(c__32691__auto___34229,out))
;
return ((function (switch__32596__auto__,c__32691__auto___34229,out){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_34224 = [null,null,null,null,null,null,null,null,null];
(statearr_34224[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_34224[(1)] = (1));

return statearr_34224;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_34210){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34225){if((e34225 instanceof Object)){
var ex__32600__auto__ = e34225;
var statearr_34226_34240 = state_34210;
(statearr_34226_34240[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34241 = state_34210;
state_34210 = G__34241;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_34210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_34210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34229,out))
})();
var state__32693__auto__ = (function (){var statearr_34227 = f__32692__auto__.call(null);
(statearr_34227[(6)] = c__32691__auto___34229);

return statearr_34227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34229,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34243 = arguments.length;
switch (G__34243) {
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
var c__32691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto__){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto__){
return (function (state_34306){
var state_val_34307 = (state_34306[(1)]);
if((state_val_34307 === (7))){
var inst_34302 = (state_34306[(2)]);
var state_34306__$1 = state_34306;
var statearr_34308_34346 = state_34306__$1;
(statearr_34308_34346[(2)] = inst_34302);

(statearr_34308_34346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (20))){
var inst_34272 = (state_34306[(7)]);
var inst_34283 = (state_34306[(2)]);
var inst_34284 = cljs.core.next.call(null,inst_34272);
var inst_34258 = inst_34284;
var inst_34259 = null;
var inst_34260 = (0);
var inst_34261 = (0);
var state_34306__$1 = (function (){var statearr_34309 = state_34306;
(statearr_34309[(8)] = inst_34259);

(statearr_34309[(9)] = inst_34261);

(statearr_34309[(10)] = inst_34283);

(statearr_34309[(11)] = inst_34260);

(statearr_34309[(12)] = inst_34258);

return statearr_34309;
})();
var statearr_34310_34347 = state_34306__$1;
(statearr_34310_34347[(2)] = null);

(statearr_34310_34347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (1))){
var state_34306__$1 = state_34306;
var statearr_34311_34348 = state_34306__$1;
(statearr_34311_34348[(2)] = null);

(statearr_34311_34348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (4))){
var inst_34247 = (state_34306[(13)]);
var inst_34247__$1 = (state_34306[(2)]);
var inst_34248 = (inst_34247__$1 == null);
var state_34306__$1 = (function (){var statearr_34312 = state_34306;
(statearr_34312[(13)] = inst_34247__$1);

return statearr_34312;
})();
if(cljs.core.truth_(inst_34248)){
var statearr_34313_34349 = state_34306__$1;
(statearr_34313_34349[(1)] = (5));

} else {
var statearr_34314_34350 = state_34306__$1;
(statearr_34314_34350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (15))){
var state_34306__$1 = state_34306;
var statearr_34318_34351 = state_34306__$1;
(statearr_34318_34351[(2)] = null);

(statearr_34318_34351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (21))){
var state_34306__$1 = state_34306;
var statearr_34319_34352 = state_34306__$1;
(statearr_34319_34352[(2)] = null);

(statearr_34319_34352[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (13))){
var inst_34259 = (state_34306[(8)]);
var inst_34261 = (state_34306[(9)]);
var inst_34260 = (state_34306[(11)]);
var inst_34258 = (state_34306[(12)]);
var inst_34268 = (state_34306[(2)]);
var inst_34269 = (inst_34261 + (1));
var tmp34315 = inst_34259;
var tmp34316 = inst_34260;
var tmp34317 = inst_34258;
var inst_34258__$1 = tmp34317;
var inst_34259__$1 = tmp34315;
var inst_34260__$1 = tmp34316;
var inst_34261__$1 = inst_34269;
var state_34306__$1 = (function (){var statearr_34320 = state_34306;
(statearr_34320[(8)] = inst_34259__$1);

(statearr_34320[(9)] = inst_34261__$1);

(statearr_34320[(14)] = inst_34268);

(statearr_34320[(11)] = inst_34260__$1);

(statearr_34320[(12)] = inst_34258__$1);

return statearr_34320;
})();
var statearr_34321_34353 = state_34306__$1;
(statearr_34321_34353[(2)] = null);

(statearr_34321_34353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (22))){
var state_34306__$1 = state_34306;
var statearr_34322_34354 = state_34306__$1;
(statearr_34322_34354[(2)] = null);

(statearr_34322_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (6))){
var inst_34247 = (state_34306[(13)]);
var inst_34256 = f.call(null,inst_34247);
var inst_34257 = cljs.core.seq.call(null,inst_34256);
var inst_34258 = inst_34257;
var inst_34259 = null;
var inst_34260 = (0);
var inst_34261 = (0);
var state_34306__$1 = (function (){var statearr_34323 = state_34306;
(statearr_34323[(8)] = inst_34259);

(statearr_34323[(9)] = inst_34261);

(statearr_34323[(11)] = inst_34260);

(statearr_34323[(12)] = inst_34258);

return statearr_34323;
})();
var statearr_34324_34355 = state_34306__$1;
(statearr_34324_34355[(2)] = null);

(statearr_34324_34355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (17))){
var inst_34272 = (state_34306[(7)]);
var inst_34276 = cljs.core.chunk_first.call(null,inst_34272);
var inst_34277 = cljs.core.chunk_rest.call(null,inst_34272);
var inst_34278 = cljs.core.count.call(null,inst_34276);
var inst_34258 = inst_34277;
var inst_34259 = inst_34276;
var inst_34260 = inst_34278;
var inst_34261 = (0);
var state_34306__$1 = (function (){var statearr_34325 = state_34306;
(statearr_34325[(8)] = inst_34259);

(statearr_34325[(9)] = inst_34261);

(statearr_34325[(11)] = inst_34260);

(statearr_34325[(12)] = inst_34258);

return statearr_34325;
})();
var statearr_34326_34356 = state_34306__$1;
(statearr_34326_34356[(2)] = null);

(statearr_34326_34356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (3))){
var inst_34304 = (state_34306[(2)]);
var state_34306__$1 = state_34306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34306__$1,inst_34304);
} else {
if((state_val_34307 === (12))){
var inst_34292 = (state_34306[(2)]);
var state_34306__$1 = state_34306;
var statearr_34327_34357 = state_34306__$1;
(statearr_34327_34357[(2)] = inst_34292);

(statearr_34327_34357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (2))){
var state_34306__$1 = state_34306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34306__$1,(4),in$);
} else {
if((state_val_34307 === (23))){
var inst_34300 = (state_34306[(2)]);
var state_34306__$1 = state_34306;
var statearr_34328_34358 = state_34306__$1;
(statearr_34328_34358[(2)] = inst_34300);

(statearr_34328_34358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (19))){
var inst_34287 = (state_34306[(2)]);
var state_34306__$1 = state_34306;
var statearr_34329_34359 = state_34306__$1;
(statearr_34329_34359[(2)] = inst_34287);

(statearr_34329_34359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (11))){
var inst_34272 = (state_34306[(7)]);
var inst_34258 = (state_34306[(12)]);
var inst_34272__$1 = cljs.core.seq.call(null,inst_34258);
var state_34306__$1 = (function (){var statearr_34330 = state_34306;
(statearr_34330[(7)] = inst_34272__$1);

return statearr_34330;
})();
if(inst_34272__$1){
var statearr_34331_34360 = state_34306__$1;
(statearr_34331_34360[(1)] = (14));

} else {
var statearr_34332_34361 = state_34306__$1;
(statearr_34332_34361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (9))){
var inst_34294 = (state_34306[(2)]);
var inst_34295 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34306__$1 = (function (){var statearr_34333 = state_34306;
(statearr_34333[(15)] = inst_34294);

return statearr_34333;
})();
if(cljs.core.truth_(inst_34295)){
var statearr_34334_34362 = state_34306__$1;
(statearr_34334_34362[(1)] = (21));

} else {
var statearr_34335_34363 = state_34306__$1;
(statearr_34335_34363[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (5))){
var inst_34250 = cljs.core.async.close_BANG_.call(null,out);
var state_34306__$1 = state_34306;
var statearr_34336_34364 = state_34306__$1;
(statearr_34336_34364[(2)] = inst_34250);

(statearr_34336_34364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (14))){
var inst_34272 = (state_34306[(7)]);
var inst_34274 = cljs.core.chunked_seq_QMARK_.call(null,inst_34272);
var state_34306__$1 = state_34306;
if(inst_34274){
var statearr_34337_34365 = state_34306__$1;
(statearr_34337_34365[(1)] = (17));

} else {
var statearr_34338_34366 = state_34306__$1;
(statearr_34338_34366[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (16))){
var inst_34290 = (state_34306[(2)]);
var state_34306__$1 = state_34306;
var statearr_34339_34367 = state_34306__$1;
(statearr_34339_34367[(2)] = inst_34290);

(statearr_34339_34367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34307 === (10))){
var inst_34259 = (state_34306[(8)]);
var inst_34261 = (state_34306[(9)]);
var inst_34266 = cljs.core._nth.call(null,inst_34259,inst_34261);
var state_34306__$1 = state_34306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34306__$1,(13),out,inst_34266);
} else {
if((state_val_34307 === (18))){
var inst_34272 = (state_34306[(7)]);
var inst_34281 = cljs.core.first.call(null,inst_34272);
var state_34306__$1 = state_34306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34306__$1,(20),out,inst_34281);
} else {
if((state_val_34307 === (8))){
var inst_34261 = (state_34306[(9)]);
var inst_34260 = (state_34306[(11)]);
var inst_34263 = (inst_34261 < inst_34260);
var inst_34264 = inst_34263;
var state_34306__$1 = state_34306;
if(cljs.core.truth_(inst_34264)){
var statearr_34340_34368 = state_34306__$1;
(statearr_34340_34368[(1)] = (10));

} else {
var statearr_34341_34369 = state_34306__$1;
(statearr_34341_34369[(1)] = (11));

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
});})(c__32691__auto__))
;
return ((function (switch__32596__auto__,c__32691__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32597__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32597__auto____0 = (function (){
var statearr_34342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34342[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32597__auto__);

(statearr_34342[(1)] = (1));

return statearr_34342;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32597__auto____1 = (function (state_34306){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34343){if((e34343 instanceof Object)){
var ex__32600__auto__ = e34343;
var statearr_34344_34370 = state_34306;
(statearr_34344_34370[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34371 = state_34306;
state_34306 = G__34371;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32597__auto__ = function(state_34306){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32597__auto____1.call(this,state_34306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32597__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32597__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto__))
})();
var state__32693__auto__ = (function (){var statearr_34345 = f__32692__auto__.call(null);
(statearr_34345[(6)] = c__32691__auto__);

return statearr_34345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto__))
);

return c__32691__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34373 = arguments.length;
switch (G__34373) {
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
var G__34376 = arguments.length;
switch (G__34376) {
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
var G__34379 = arguments.length;
switch (G__34379) {
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
var c__32691__auto___34426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34426,out){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34426,out){
return (function (state_34403){
var state_val_34404 = (state_34403[(1)]);
if((state_val_34404 === (7))){
var inst_34398 = (state_34403[(2)]);
var state_34403__$1 = state_34403;
var statearr_34405_34427 = state_34403__$1;
(statearr_34405_34427[(2)] = inst_34398);

(statearr_34405_34427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (1))){
var inst_34380 = null;
var state_34403__$1 = (function (){var statearr_34406 = state_34403;
(statearr_34406[(7)] = inst_34380);

return statearr_34406;
})();
var statearr_34407_34428 = state_34403__$1;
(statearr_34407_34428[(2)] = null);

(statearr_34407_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (4))){
var inst_34383 = (state_34403[(8)]);
var inst_34383__$1 = (state_34403[(2)]);
var inst_34384 = (inst_34383__$1 == null);
var inst_34385 = cljs.core.not.call(null,inst_34384);
var state_34403__$1 = (function (){var statearr_34408 = state_34403;
(statearr_34408[(8)] = inst_34383__$1);

return statearr_34408;
})();
if(inst_34385){
var statearr_34409_34429 = state_34403__$1;
(statearr_34409_34429[(1)] = (5));

} else {
var statearr_34410_34430 = state_34403__$1;
(statearr_34410_34430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (6))){
var state_34403__$1 = state_34403;
var statearr_34411_34431 = state_34403__$1;
(statearr_34411_34431[(2)] = null);

(statearr_34411_34431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (3))){
var inst_34400 = (state_34403[(2)]);
var inst_34401 = cljs.core.async.close_BANG_.call(null,out);
var state_34403__$1 = (function (){var statearr_34412 = state_34403;
(statearr_34412[(9)] = inst_34400);

return statearr_34412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34403__$1,inst_34401);
} else {
if((state_val_34404 === (2))){
var state_34403__$1 = state_34403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34403__$1,(4),ch);
} else {
if((state_val_34404 === (11))){
var inst_34383 = (state_34403[(8)]);
var inst_34392 = (state_34403[(2)]);
var inst_34380 = inst_34383;
var state_34403__$1 = (function (){var statearr_34413 = state_34403;
(statearr_34413[(7)] = inst_34380);

(statearr_34413[(10)] = inst_34392);

return statearr_34413;
})();
var statearr_34414_34432 = state_34403__$1;
(statearr_34414_34432[(2)] = null);

(statearr_34414_34432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (9))){
var inst_34383 = (state_34403[(8)]);
var state_34403__$1 = state_34403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34403__$1,(11),out,inst_34383);
} else {
if((state_val_34404 === (5))){
var inst_34380 = (state_34403[(7)]);
var inst_34383 = (state_34403[(8)]);
var inst_34387 = cljs.core._EQ_.call(null,inst_34383,inst_34380);
var state_34403__$1 = state_34403;
if(inst_34387){
var statearr_34416_34433 = state_34403__$1;
(statearr_34416_34433[(1)] = (8));

} else {
var statearr_34417_34434 = state_34403__$1;
(statearr_34417_34434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (10))){
var inst_34395 = (state_34403[(2)]);
var state_34403__$1 = state_34403;
var statearr_34418_34435 = state_34403__$1;
(statearr_34418_34435[(2)] = inst_34395);

(statearr_34418_34435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (8))){
var inst_34380 = (state_34403[(7)]);
var tmp34415 = inst_34380;
var inst_34380__$1 = tmp34415;
var state_34403__$1 = (function (){var statearr_34419 = state_34403;
(statearr_34419[(7)] = inst_34380__$1);

return statearr_34419;
})();
var statearr_34420_34436 = state_34403__$1;
(statearr_34420_34436[(2)] = null);

(statearr_34420_34436[(1)] = (2));


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
});})(c__32691__auto___34426,out))
;
return ((function (switch__32596__auto__,c__32691__auto___34426,out){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_34421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34421[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_34421[(1)] = (1));

return statearr_34421;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_34403){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34422){if((e34422 instanceof Object)){
var ex__32600__auto__ = e34422;
var statearr_34423_34437 = state_34403;
(statearr_34423_34437[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34438 = state_34403;
state_34403 = G__34438;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_34403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_34403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34426,out))
})();
var state__32693__auto__ = (function (){var statearr_34424 = f__32692__auto__.call(null);
(statearr_34424[(6)] = c__32691__auto___34426);

return statearr_34424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34426,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34440 = arguments.length;
switch (G__34440) {
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
var c__32691__auto___34506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34506,out){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34506,out){
return (function (state_34478){
var state_val_34479 = (state_34478[(1)]);
if((state_val_34479 === (7))){
var inst_34474 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34480_34507 = state_34478__$1;
(statearr_34480_34507[(2)] = inst_34474);

(statearr_34480_34507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (1))){
var inst_34441 = (new Array(n));
var inst_34442 = inst_34441;
var inst_34443 = (0);
var state_34478__$1 = (function (){var statearr_34481 = state_34478;
(statearr_34481[(7)] = inst_34443);

(statearr_34481[(8)] = inst_34442);

return statearr_34481;
})();
var statearr_34482_34508 = state_34478__$1;
(statearr_34482_34508[(2)] = null);

(statearr_34482_34508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (4))){
var inst_34446 = (state_34478[(9)]);
var inst_34446__$1 = (state_34478[(2)]);
var inst_34447 = (inst_34446__$1 == null);
var inst_34448 = cljs.core.not.call(null,inst_34447);
var state_34478__$1 = (function (){var statearr_34483 = state_34478;
(statearr_34483[(9)] = inst_34446__$1);

return statearr_34483;
})();
if(inst_34448){
var statearr_34484_34509 = state_34478__$1;
(statearr_34484_34509[(1)] = (5));

} else {
var statearr_34485_34510 = state_34478__$1;
(statearr_34485_34510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (15))){
var inst_34468 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34486_34511 = state_34478__$1;
(statearr_34486_34511[(2)] = inst_34468);

(statearr_34486_34511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (13))){
var state_34478__$1 = state_34478;
var statearr_34487_34512 = state_34478__$1;
(statearr_34487_34512[(2)] = null);

(statearr_34487_34512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (6))){
var inst_34443 = (state_34478[(7)]);
var inst_34464 = (inst_34443 > (0));
var state_34478__$1 = state_34478;
if(cljs.core.truth_(inst_34464)){
var statearr_34488_34513 = state_34478__$1;
(statearr_34488_34513[(1)] = (12));

} else {
var statearr_34489_34514 = state_34478__$1;
(statearr_34489_34514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (3))){
var inst_34476 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34478__$1,inst_34476);
} else {
if((state_val_34479 === (12))){
var inst_34442 = (state_34478[(8)]);
var inst_34466 = cljs.core.vec.call(null,inst_34442);
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34478__$1,(15),out,inst_34466);
} else {
if((state_val_34479 === (2))){
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34478__$1,(4),ch);
} else {
if((state_val_34479 === (11))){
var inst_34458 = (state_34478[(2)]);
var inst_34459 = (new Array(n));
var inst_34442 = inst_34459;
var inst_34443 = (0);
var state_34478__$1 = (function (){var statearr_34490 = state_34478;
(statearr_34490[(7)] = inst_34443);

(statearr_34490[(10)] = inst_34458);

(statearr_34490[(8)] = inst_34442);

return statearr_34490;
})();
var statearr_34491_34515 = state_34478__$1;
(statearr_34491_34515[(2)] = null);

(statearr_34491_34515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (9))){
var inst_34442 = (state_34478[(8)]);
var inst_34456 = cljs.core.vec.call(null,inst_34442);
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34478__$1,(11),out,inst_34456);
} else {
if((state_val_34479 === (5))){
var inst_34443 = (state_34478[(7)]);
var inst_34451 = (state_34478[(11)]);
var inst_34442 = (state_34478[(8)]);
var inst_34446 = (state_34478[(9)]);
var inst_34450 = (inst_34442[inst_34443] = inst_34446);
var inst_34451__$1 = (inst_34443 + (1));
var inst_34452 = (inst_34451__$1 < n);
var state_34478__$1 = (function (){var statearr_34492 = state_34478;
(statearr_34492[(11)] = inst_34451__$1);

(statearr_34492[(12)] = inst_34450);

return statearr_34492;
})();
if(cljs.core.truth_(inst_34452)){
var statearr_34493_34516 = state_34478__$1;
(statearr_34493_34516[(1)] = (8));

} else {
var statearr_34494_34517 = state_34478__$1;
(statearr_34494_34517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (14))){
var inst_34471 = (state_34478[(2)]);
var inst_34472 = cljs.core.async.close_BANG_.call(null,out);
var state_34478__$1 = (function (){var statearr_34496 = state_34478;
(statearr_34496[(13)] = inst_34471);

return statearr_34496;
})();
var statearr_34497_34518 = state_34478__$1;
(statearr_34497_34518[(2)] = inst_34472);

(statearr_34497_34518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (10))){
var inst_34462 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34498_34519 = state_34478__$1;
(statearr_34498_34519[(2)] = inst_34462);

(statearr_34498_34519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (8))){
var inst_34451 = (state_34478[(11)]);
var inst_34442 = (state_34478[(8)]);
var tmp34495 = inst_34442;
var inst_34442__$1 = tmp34495;
var inst_34443 = inst_34451;
var state_34478__$1 = (function (){var statearr_34499 = state_34478;
(statearr_34499[(7)] = inst_34443);

(statearr_34499[(8)] = inst_34442__$1);

return statearr_34499;
})();
var statearr_34500_34520 = state_34478__$1;
(statearr_34500_34520[(2)] = null);

(statearr_34500_34520[(1)] = (2));


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
});})(c__32691__auto___34506,out))
;
return ((function (switch__32596__auto__,c__32691__auto___34506,out){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_34501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34501[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_34501[(1)] = (1));

return statearr_34501;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_34478){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34502){if((e34502 instanceof Object)){
var ex__32600__auto__ = e34502;
var statearr_34503_34521 = state_34478;
(statearr_34503_34521[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34522 = state_34478;
state_34478 = G__34522;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_34478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_34478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34506,out))
})();
var state__32693__auto__ = (function (){var statearr_34504 = f__32692__auto__.call(null);
(statearr_34504[(6)] = c__32691__auto___34506);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34506,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34524 = arguments.length;
switch (G__34524) {
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
var c__32691__auto___34594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34594,out){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34594,out){
return (function (state_34566){
var state_val_34567 = (state_34566[(1)]);
if((state_val_34567 === (7))){
var inst_34562 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34568_34595 = state_34566__$1;
(statearr_34568_34595[(2)] = inst_34562);

(statearr_34568_34595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (1))){
var inst_34525 = [];
var inst_34526 = inst_34525;
var inst_34527 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34566__$1 = (function (){var statearr_34569 = state_34566;
(statearr_34569[(7)] = inst_34527);

(statearr_34569[(8)] = inst_34526);

return statearr_34569;
})();
var statearr_34570_34596 = state_34566__$1;
(statearr_34570_34596[(2)] = null);

(statearr_34570_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (4))){
var inst_34530 = (state_34566[(9)]);
var inst_34530__$1 = (state_34566[(2)]);
var inst_34531 = (inst_34530__$1 == null);
var inst_34532 = cljs.core.not.call(null,inst_34531);
var state_34566__$1 = (function (){var statearr_34571 = state_34566;
(statearr_34571[(9)] = inst_34530__$1);

return statearr_34571;
})();
if(inst_34532){
var statearr_34572_34597 = state_34566__$1;
(statearr_34572_34597[(1)] = (5));

} else {
var statearr_34573_34598 = state_34566__$1;
(statearr_34573_34598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (15))){
var inst_34556 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34574_34599 = state_34566__$1;
(statearr_34574_34599[(2)] = inst_34556);

(statearr_34574_34599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (13))){
var state_34566__$1 = state_34566;
var statearr_34575_34600 = state_34566__$1;
(statearr_34575_34600[(2)] = null);

(statearr_34575_34600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (6))){
var inst_34526 = (state_34566[(8)]);
var inst_34551 = inst_34526.length;
var inst_34552 = (inst_34551 > (0));
var state_34566__$1 = state_34566;
if(cljs.core.truth_(inst_34552)){
var statearr_34576_34601 = state_34566__$1;
(statearr_34576_34601[(1)] = (12));

} else {
var statearr_34577_34602 = state_34566__$1;
(statearr_34577_34602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (3))){
var inst_34564 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34566__$1,inst_34564);
} else {
if((state_val_34567 === (12))){
var inst_34526 = (state_34566[(8)]);
var inst_34554 = cljs.core.vec.call(null,inst_34526);
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34566__$1,(15),out,inst_34554);
} else {
if((state_val_34567 === (2))){
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34566__$1,(4),ch);
} else {
if((state_val_34567 === (11))){
var inst_34534 = (state_34566[(10)]);
var inst_34530 = (state_34566[(9)]);
var inst_34544 = (state_34566[(2)]);
var inst_34545 = [];
var inst_34546 = inst_34545.push(inst_34530);
var inst_34526 = inst_34545;
var inst_34527 = inst_34534;
var state_34566__$1 = (function (){var statearr_34578 = state_34566;
(statearr_34578[(7)] = inst_34527);

(statearr_34578[(11)] = inst_34544);

(statearr_34578[(12)] = inst_34546);

(statearr_34578[(8)] = inst_34526);

return statearr_34578;
})();
var statearr_34579_34603 = state_34566__$1;
(statearr_34579_34603[(2)] = null);

(statearr_34579_34603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (9))){
var inst_34526 = (state_34566[(8)]);
var inst_34542 = cljs.core.vec.call(null,inst_34526);
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34566__$1,(11),out,inst_34542);
} else {
if((state_val_34567 === (5))){
var inst_34534 = (state_34566[(10)]);
var inst_34527 = (state_34566[(7)]);
var inst_34530 = (state_34566[(9)]);
var inst_34534__$1 = f.call(null,inst_34530);
var inst_34535 = cljs.core._EQ_.call(null,inst_34534__$1,inst_34527);
var inst_34536 = cljs.core.keyword_identical_QMARK_.call(null,inst_34527,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34537 = ((inst_34535) || (inst_34536));
var state_34566__$1 = (function (){var statearr_34580 = state_34566;
(statearr_34580[(10)] = inst_34534__$1);

return statearr_34580;
})();
if(cljs.core.truth_(inst_34537)){
var statearr_34581_34604 = state_34566__$1;
(statearr_34581_34604[(1)] = (8));

} else {
var statearr_34582_34605 = state_34566__$1;
(statearr_34582_34605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (14))){
var inst_34559 = (state_34566[(2)]);
var inst_34560 = cljs.core.async.close_BANG_.call(null,out);
var state_34566__$1 = (function (){var statearr_34584 = state_34566;
(statearr_34584[(13)] = inst_34559);

return statearr_34584;
})();
var statearr_34585_34606 = state_34566__$1;
(statearr_34585_34606[(2)] = inst_34560);

(statearr_34585_34606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (10))){
var inst_34549 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34586_34607 = state_34566__$1;
(statearr_34586_34607[(2)] = inst_34549);

(statearr_34586_34607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34567 === (8))){
var inst_34534 = (state_34566[(10)]);
var inst_34526 = (state_34566[(8)]);
var inst_34530 = (state_34566[(9)]);
var inst_34539 = inst_34526.push(inst_34530);
var tmp34583 = inst_34526;
var inst_34526__$1 = tmp34583;
var inst_34527 = inst_34534;
var state_34566__$1 = (function (){var statearr_34587 = state_34566;
(statearr_34587[(7)] = inst_34527);

(statearr_34587[(8)] = inst_34526__$1);

(statearr_34587[(14)] = inst_34539);

return statearr_34587;
})();
var statearr_34588_34608 = state_34566__$1;
(statearr_34588_34608[(2)] = null);

(statearr_34588_34608[(1)] = (2));


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
});})(c__32691__auto___34594,out))
;
return ((function (switch__32596__auto__,c__32691__auto___34594,out){
return (function() {
var cljs$core$async$state_machine__32597__auto__ = null;
var cljs$core$async$state_machine__32597__auto____0 = (function (){
var statearr_34589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34589[(0)] = cljs$core$async$state_machine__32597__auto__);

(statearr_34589[(1)] = (1));

return statearr_34589;
});
var cljs$core$async$state_machine__32597__auto____1 = (function (state_34566){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34590){if((e34590 instanceof Object)){
var ex__32600__auto__ = e34590;
var statearr_34591_34609 = state_34566;
(statearr_34591_34609[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34610 = state_34566;
state_34566 = G__34610;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
cljs$core$async$state_machine__32597__auto__ = function(state_34566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32597__auto____1.call(this,state_34566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32597__auto____0;
cljs$core$async$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32597__auto____1;
return cljs$core$async$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34594,out))
})();
var state__32693__auto__ = (function (){var statearr_34592 = f__32692__auto__.call(null);
(statearr_34592[(6)] = c__32691__auto___34594);

return statearr_34592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34594,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1610330675288
