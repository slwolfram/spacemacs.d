goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15892 = arguments.length;
switch (G__15892) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15893 = (function (f,blockable,meta15894){
this.f = f;
this.blockable = blockable;
this.meta15894 = meta15894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15895,meta15894__$1){
var self__ = this;
var _15895__$1 = this;
return (new cljs.core.async.t_cljs$core$async15893(self__.f,self__.blockable,meta15894__$1));
}));

(cljs.core.async.t_cljs$core$async15893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15895){
var self__ = this;
var _15895__$1 = this;
return self__.meta15894;
}));

(cljs.core.async.t_cljs$core$async15893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15894","meta15894",1461922279,null)], null);
}));

(cljs.core.async.t_cljs$core$async15893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15893");

(cljs.core.async.t_cljs$core$async15893.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async15893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15893.
 */
cljs.core.async.__GT_t_cljs$core$async15893 = (function cljs$core$async$__GT_t_cljs$core$async15893(f__$1,blockable__$1,meta15894){
return (new cljs.core.async.t_cljs$core$async15893(f__$1,blockable__$1,meta15894));
});

}

return (new cljs.core.async.t_cljs$core$async15893(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15898 = arguments.length;
switch (G__15898) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15900 = arguments.length;
switch (G__15900) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15902 = arguments.length;
switch (G__15902) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17317 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17317) : fn1.call(null,val_17317));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17317) : fn1.call(null,val_17317));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__15904 = arguments.length;
switch (G__15904) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___17319 = n;
var x_17320 = (0);
while(true){
if((x_17320 < n__4741__auto___17319)){
(a[x_17320] = x_17320);

var G__17321 = (x_17320 + (1));
x_17320 = G__17321;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15905 = (function (flag,meta15906){
this.flag = flag;
this.meta15906 = meta15906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15907,meta15906__$1){
var self__ = this;
var _15907__$1 = this;
return (new cljs.core.async.t_cljs$core$async15905(self__.flag,meta15906__$1));
}));

(cljs.core.async.t_cljs$core$async15905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15907){
var self__ = this;
var _15907__$1 = this;
return self__.meta15906;
}));

(cljs.core.async.t_cljs$core$async15905.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15905.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15906","meta15906",-1239992069,null)], null);
}));

(cljs.core.async.t_cljs$core$async15905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15905");

(cljs.core.async.t_cljs$core$async15905.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async15905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15905.
 */
cljs.core.async.__GT_t_cljs$core$async15905 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15905(flag__$1,meta15906){
return (new cljs.core.async.t_cljs$core$async15905(flag__$1,meta15906));
});

}

return (new cljs.core.async.t_cljs$core$async15905(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15908 = (function (flag,cb,meta15909){
this.flag = flag;
this.cb = cb;
this.meta15909 = meta15909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15910,meta15909__$1){
var self__ = this;
var _15910__$1 = this;
return (new cljs.core.async.t_cljs$core$async15908(self__.flag,self__.cb,meta15909__$1));
}));

(cljs.core.async.t_cljs$core$async15908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15910){
var self__ = this;
var _15910__$1 = this;
return self__.meta15909;
}));

(cljs.core.async.t_cljs$core$async15908.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15908.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15909","meta15909",-1885773742,null)], null);
}));

(cljs.core.async.t_cljs$core$async15908.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15908");

(cljs.core.async.t_cljs$core$async15908.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async15908");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15908.
 */
cljs.core.async.__GT_t_cljs$core$async15908 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15908(flag__$1,cb__$1,meta15909){
return (new cljs.core.async.t_cljs$core$async15908(flag__$1,cb__$1,meta15909));
});

}

return (new cljs.core.async.t_cljs$core$async15908(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15911_SHARP_){
var G__15913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15911_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15913) : fret.call(null,G__15913));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15912_SHARP_){
var G__15914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15912_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15914) : fret.call(null,G__15914));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17322 = (i + (1));
i = G__17322;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4870__auto__ = [];
var len__4864__auto___17323 = arguments.length;
var i__4865__auto___17324 = (0);
while(true){
if((i__4865__auto___17324 < len__4864__auto___17323)){
args__4870__auto__.push((arguments[i__4865__auto___17324]));

var G__17325 = (i__4865__auto___17324 + (1));
i__4865__auto___17324 = G__17325;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15917){
var map__15918 = p__15917;
var map__15918__$1 = cljs.core.__destructure_map(map__15918);
var opts = map__15918__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15915){
var G__15916 = cljs.core.first(seq15915);
var seq15915__$1 = cljs.core.next(seq15915);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15916,seq15915__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__15920 = arguments.length;
switch (G__15920) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15834__auto___17327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_15944){
var state_val_15945 = (state_15944[(1)]);
if((state_val_15945 === (7))){
var inst_15940 = (state_15944[(2)]);
var state_15944__$1 = state_15944;
var statearr_15946_17328 = state_15944__$1;
(statearr_15946_17328[(2)] = inst_15940);

(statearr_15946_17328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (1))){
var state_15944__$1 = state_15944;
var statearr_15947_17329 = state_15944__$1;
(statearr_15947_17329[(2)] = null);

(statearr_15947_17329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (4))){
var inst_15923 = (state_15944[(7)]);
var inst_15923__$1 = (state_15944[(2)]);
var inst_15924 = (inst_15923__$1 == null);
var state_15944__$1 = (function (){var statearr_15948 = state_15944;
(statearr_15948[(7)] = inst_15923__$1);

return statearr_15948;
})();
if(cljs.core.truth_(inst_15924)){
var statearr_15949_17330 = state_15944__$1;
(statearr_15949_17330[(1)] = (5));

} else {
var statearr_15950_17331 = state_15944__$1;
(statearr_15950_17331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (13))){
var state_15944__$1 = state_15944;
var statearr_15951_17332 = state_15944__$1;
(statearr_15951_17332[(2)] = null);

(statearr_15951_17332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (6))){
var inst_15923 = (state_15944[(7)]);
var state_15944__$1 = state_15944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15944__$1,(11),to,inst_15923);
} else {
if((state_val_15945 === (3))){
var inst_15942 = (state_15944[(2)]);
var state_15944__$1 = state_15944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15944__$1,inst_15942);
} else {
if((state_val_15945 === (12))){
var state_15944__$1 = state_15944;
var statearr_15952_17333 = state_15944__$1;
(statearr_15952_17333[(2)] = null);

(statearr_15952_17333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (2))){
var state_15944__$1 = state_15944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15944__$1,(4),from);
} else {
if((state_val_15945 === (11))){
var inst_15933 = (state_15944[(2)]);
var state_15944__$1 = state_15944;
if(cljs.core.truth_(inst_15933)){
var statearr_15953_17334 = state_15944__$1;
(statearr_15953_17334[(1)] = (12));

} else {
var statearr_15954_17335 = state_15944__$1;
(statearr_15954_17335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (9))){
var state_15944__$1 = state_15944;
var statearr_15955_17336 = state_15944__$1;
(statearr_15955_17336[(2)] = null);

(statearr_15955_17336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (5))){
var state_15944__$1 = state_15944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15956_17337 = state_15944__$1;
(statearr_15956_17337[(1)] = (8));

} else {
var statearr_15957_17338 = state_15944__$1;
(statearr_15957_17338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (14))){
var inst_15938 = (state_15944[(2)]);
var state_15944__$1 = state_15944;
var statearr_15958_17339 = state_15944__$1;
(statearr_15958_17339[(2)] = inst_15938);

(statearr_15958_17339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (10))){
var inst_15930 = (state_15944[(2)]);
var state_15944__$1 = state_15944;
var statearr_15959_17340 = state_15944__$1;
(statearr_15959_17340[(2)] = inst_15930);

(statearr_15959_17340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15945 === (8))){
var inst_15927 = cljs.core.async.close_BANG_(to);
var state_15944__$1 = state_15944;
var statearr_15960_17341 = state_15944__$1;
(statearr_15960_17341[(2)] = inst_15927);

(statearr_15960_17341[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_15961 = [null,null,null,null,null,null,null,null];
(statearr_15961[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_15961[(1)] = (1));

return statearr_15961;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_15944){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_15944);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e15962){var ex__15802__auto__ = e15962;
var statearr_15963_17342 = state_15944;
(statearr_15963_17342[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_15944[(4)]))){
var statearr_15964_17343 = state_15944;
(statearr_15964_17343[(1)] = cljs.core.first((state_15944[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17344 = state_15944;
state_15944 = G__17344;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_15944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_15944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_15965 = f__15835__auto__();
(statearr_15965[(6)] = c__15834__auto___17327);

return statearr_15965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__15966){
var vec__15967 = p__15966;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(1),null);
var job = vec__15967;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15834__auto___17345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_15974){
var state_val_15975 = (state_15974[(1)]);
if((state_val_15975 === (1))){
var state_15974__$1 = state_15974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15974__$1,(2),res,v);
} else {
if((state_val_15975 === (2))){
var inst_15971 = (state_15974[(2)]);
var inst_15972 = cljs.core.async.close_BANG_(res);
var state_15974__$1 = (function (){var statearr_15976 = state_15974;
(statearr_15976[(7)] = inst_15971);

return statearr_15976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15974__$1,inst_15972);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0 = (function (){
var statearr_15977 = [null,null,null,null,null,null,null,null];
(statearr_15977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__);

(statearr_15977[(1)] = (1));

return statearr_15977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1 = (function (state_15974){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_15974);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e15978){var ex__15802__auto__ = e15978;
var statearr_15979_17346 = state_15974;
(statearr_15979_17346[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_15974[(4)]))){
var statearr_15980_17347 = state_15974;
(statearr_15980_17347[(1)] = cljs.core.first((state_15974[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17348 = state_15974;
state_15974 = G__17348;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = function(state_15974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1.call(this,state_15974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_15981 = f__15835__auto__();
(statearr_15981[(6)] = c__15834__auto___17345);

return statearr_15981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15982){
var vec__15983 = p__15982;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(1),null);
var job = vec__15983;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___17349 = n;
var __17350 = (0);
while(true){
if((__17350 < n__4741__auto___17349)){
var G__15986_17351 = type;
var G__15986_17352__$1 = (((G__15986_17351 instanceof cljs.core.Keyword))?G__15986_17351.fqn:null);
switch (G__15986_17352__$1) {
case "compute":
var c__15834__auto___17354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17350,c__15834__auto___17354,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async){
return (function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = ((function (__17350,c__15834__auto___17354,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async){
return (function (state_15999){
var state_val_16000 = (state_15999[(1)]);
if((state_val_16000 === (1))){
var state_15999__$1 = state_15999;
var statearr_16001_17355 = state_15999__$1;
(statearr_16001_17355[(2)] = null);

(statearr_16001_17355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16000 === (2))){
var state_15999__$1 = state_15999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15999__$1,(4),jobs);
} else {
if((state_val_16000 === (3))){
var inst_15997 = (state_15999[(2)]);
var state_15999__$1 = state_15999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15999__$1,inst_15997);
} else {
if((state_val_16000 === (4))){
var inst_15989 = (state_15999[(2)]);
var inst_15990 = process(inst_15989);
var state_15999__$1 = state_15999;
if(cljs.core.truth_(inst_15990)){
var statearr_16002_17356 = state_15999__$1;
(statearr_16002_17356[(1)] = (5));

} else {
var statearr_16003_17357 = state_15999__$1;
(statearr_16003_17357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16000 === (5))){
var state_15999__$1 = state_15999;
var statearr_16004_17358 = state_15999__$1;
(statearr_16004_17358[(2)] = null);

(statearr_16004_17358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16000 === (6))){
var state_15999__$1 = state_15999;
var statearr_16005_17359 = state_15999__$1;
(statearr_16005_17359[(2)] = null);

(statearr_16005_17359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16000 === (7))){
var inst_15995 = (state_15999[(2)]);
var state_15999__$1 = state_15999;
var statearr_16006_17360 = state_15999__$1;
(statearr_16006_17360[(2)] = inst_15995);

(statearr_16006_17360[(1)] = (3));


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
});})(__17350,c__15834__auto___17354,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async))
;
return ((function (__17350,switch__15798__auto__,c__15834__auto___17354,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0 = (function (){
var statearr_16007 = [null,null,null,null,null,null,null];
(statearr_16007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__);

(statearr_16007[(1)] = (1));

return statearr_16007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1 = (function (state_15999){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_15999);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16008){var ex__15802__auto__ = e16008;
var statearr_16009_17361 = state_15999;
(statearr_16009_17361[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_15999[(4)]))){
var statearr_16010_17362 = state_15999;
(statearr_16010_17362[(1)] = cljs.core.first((state_15999[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17363 = state_15999;
state_15999 = G__17363;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = function(state_15999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1.call(this,state_15999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__;
})()
;})(__17350,switch__15798__auto__,c__15834__auto___17354,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async))
})();
var state__15836__auto__ = (function (){var statearr_16011 = f__15835__auto__();
(statearr_16011[(6)] = c__15834__auto___17354);

return statearr_16011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
});})(__17350,c__15834__auto___17354,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async))
);


break;
case "async":
var c__15834__auto___17364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17350,c__15834__auto___17364,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async){
return (function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = ((function (__17350,c__15834__auto___17364,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async){
return (function (state_16024){
var state_val_16025 = (state_16024[(1)]);
if((state_val_16025 === (1))){
var state_16024__$1 = state_16024;
var statearr_16026_17365 = state_16024__$1;
(statearr_16026_17365[(2)] = null);

(statearr_16026_17365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (2))){
var state_16024__$1 = state_16024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16024__$1,(4),jobs);
} else {
if((state_val_16025 === (3))){
var inst_16022 = (state_16024[(2)]);
var state_16024__$1 = state_16024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16024__$1,inst_16022);
} else {
if((state_val_16025 === (4))){
var inst_16014 = (state_16024[(2)]);
var inst_16015 = async(inst_16014);
var state_16024__$1 = state_16024;
if(cljs.core.truth_(inst_16015)){
var statearr_16027_17366 = state_16024__$1;
(statearr_16027_17366[(1)] = (5));

} else {
var statearr_16028_17367 = state_16024__$1;
(statearr_16028_17367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (5))){
var state_16024__$1 = state_16024;
var statearr_16029_17368 = state_16024__$1;
(statearr_16029_17368[(2)] = null);

(statearr_16029_17368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (6))){
var state_16024__$1 = state_16024;
var statearr_16030_17369 = state_16024__$1;
(statearr_16030_17369[(2)] = null);

(statearr_16030_17369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (7))){
var inst_16020 = (state_16024[(2)]);
var state_16024__$1 = state_16024;
var statearr_16031_17370 = state_16024__$1;
(statearr_16031_17370[(2)] = inst_16020);

(statearr_16031_17370[(1)] = (3));


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
});})(__17350,c__15834__auto___17364,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async))
;
return ((function (__17350,switch__15798__auto__,c__15834__auto___17364,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0 = (function (){
var statearr_16032 = [null,null,null,null,null,null,null];
(statearr_16032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__);

(statearr_16032[(1)] = (1));

return statearr_16032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1 = (function (state_16024){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16024);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16033){var ex__15802__auto__ = e16033;
var statearr_16034_17371 = state_16024;
(statearr_16034_17371[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16024[(4)]))){
var statearr_16035_17372 = state_16024;
(statearr_16035_17372[(1)] = cljs.core.first((state_16024[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17373 = state_16024;
state_16024 = G__17373;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = function(state_16024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1.call(this,state_16024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__;
})()
;})(__17350,switch__15798__auto__,c__15834__auto___17364,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async))
})();
var state__15836__auto__ = (function (){var statearr_16036 = f__15835__auto__();
(statearr_16036[(6)] = c__15834__auto___17364);

return statearr_16036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
});})(__17350,c__15834__auto___17364,G__15986_17351,G__15986_17352__$1,n__4741__auto___17349,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15986_17352__$1)].join('')));

}

var G__17374 = (__17350 + (1));
__17350 = G__17374;
continue;
} else {
}
break;
}

var c__15834__auto___17375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16058){
var state_val_16059 = (state_16058[(1)]);
if((state_val_16059 === (7))){
var inst_16054 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
var statearr_16060_17376 = state_16058__$1;
(statearr_16060_17376[(2)] = inst_16054);

(statearr_16060_17376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (1))){
var state_16058__$1 = state_16058;
var statearr_16061_17377 = state_16058__$1;
(statearr_16061_17377[(2)] = null);

(statearr_16061_17377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (4))){
var inst_16039 = (state_16058[(7)]);
var inst_16039__$1 = (state_16058[(2)]);
var inst_16040 = (inst_16039__$1 == null);
var state_16058__$1 = (function (){var statearr_16062 = state_16058;
(statearr_16062[(7)] = inst_16039__$1);

return statearr_16062;
})();
if(cljs.core.truth_(inst_16040)){
var statearr_16063_17378 = state_16058__$1;
(statearr_16063_17378[(1)] = (5));

} else {
var statearr_16064_17379 = state_16058__$1;
(statearr_16064_17379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (6))){
var inst_16039 = (state_16058[(7)]);
var inst_16044 = (state_16058[(8)]);
var inst_16044__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16045 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16046 = [inst_16039,inst_16044__$1];
var inst_16047 = (new cljs.core.PersistentVector(null,2,(5),inst_16045,inst_16046,null));
var state_16058__$1 = (function (){var statearr_16065 = state_16058;
(statearr_16065[(8)] = inst_16044__$1);

return statearr_16065;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16058__$1,(8),jobs,inst_16047);
} else {
if((state_val_16059 === (3))){
var inst_16056 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16058__$1,inst_16056);
} else {
if((state_val_16059 === (2))){
var state_16058__$1 = state_16058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16058__$1,(4),from);
} else {
if((state_val_16059 === (9))){
var inst_16051 = (state_16058[(2)]);
var state_16058__$1 = (function (){var statearr_16066 = state_16058;
(statearr_16066[(9)] = inst_16051);

return statearr_16066;
})();
var statearr_16067_17380 = state_16058__$1;
(statearr_16067_17380[(2)] = null);

(statearr_16067_17380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (5))){
var inst_16042 = cljs.core.async.close_BANG_(jobs);
var state_16058__$1 = state_16058;
var statearr_16068_17381 = state_16058__$1;
(statearr_16068_17381[(2)] = inst_16042);

(statearr_16068_17381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (8))){
var inst_16044 = (state_16058[(8)]);
var inst_16049 = (state_16058[(2)]);
var state_16058__$1 = (function (){var statearr_16069 = state_16058;
(statearr_16069[(10)] = inst_16049);

return statearr_16069;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16058__$1,(9),results,inst_16044);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0 = (function (){
var statearr_16070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__);

(statearr_16070[(1)] = (1));

return statearr_16070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1 = (function (state_16058){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16058);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16071){var ex__15802__auto__ = e16071;
var statearr_16072_17382 = state_16058;
(statearr_16072_17382[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16058[(4)]))){
var statearr_16073_17383 = state_16058;
(statearr_16073_17383[(1)] = cljs.core.first((state_16058[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17384 = state_16058;
state_16058 = G__17384;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = function(state_16058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1.call(this,state_16058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16074 = f__15835__auto__();
(statearr_16074[(6)] = c__15834__auto___17375);

return statearr_16074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


var c__15834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16112){
var state_val_16113 = (state_16112[(1)]);
if((state_val_16113 === (7))){
var inst_16108 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16114_17385 = state_16112__$1;
(statearr_16114_17385[(2)] = inst_16108);

(statearr_16114_17385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (20))){
var state_16112__$1 = state_16112;
var statearr_16115_17386 = state_16112__$1;
(statearr_16115_17386[(2)] = null);

(statearr_16115_17386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (1))){
var state_16112__$1 = state_16112;
var statearr_16116_17387 = state_16112__$1;
(statearr_16116_17387[(2)] = null);

(statearr_16116_17387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (4))){
var inst_16077 = (state_16112[(7)]);
var inst_16077__$1 = (state_16112[(2)]);
var inst_16078 = (inst_16077__$1 == null);
var state_16112__$1 = (function (){var statearr_16117 = state_16112;
(statearr_16117[(7)] = inst_16077__$1);

return statearr_16117;
})();
if(cljs.core.truth_(inst_16078)){
var statearr_16118_17388 = state_16112__$1;
(statearr_16118_17388[(1)] = (5));

} else {
var statearr_16119_17389 = state_16112__$1;
(statearr_16119_17389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (15))){
var inst_16090 = (state_16112[(8)]);
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16112__$1,(18),to,inst_16090);
} else {
if((state_val_16113 === (21))){
var inst_16103 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16120_17390 = state_16112__$1;
(statearr_16120_17390[(2)] = inst_16103);

(statearr_16120_17390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (13))){
var inst_16105 = (state_16112[(2)]);
var state_16112__$1 = (function (){var statearr_16121 = state_16112;
(statearr_16121[(9)] = inst_16105);

return statearr_16121;
})();
var statearr_16122_17391 = state_16112__$1;
(statearr_16122_17391[(2)] = null);

(statearr_16122_17391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (6))){
var inst_16077 = (state_16112[(7)]);
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16112__$1,(11),inst_16077);
} else {
if((state_val_16113 === (17))){
var inst_16098 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
if(cljs.core.truth_(inst_16098)){
var statearr_16123_17392 = state_16112__$1;
(statearr_16123_17392[(1)] = (19));

} else {
var statearr_16124_17393 = state_16112__$1;
(statearr_16124_17393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (3))){
var inst_16110 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16112__$1,inst_16110);
} else {
if((state_val_16113 === (12))){
var inst_16087 = (state_16112[(10)]);
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16112__$1,(14),inst_16087);
} else {
if((state_val_16113 === (2))){
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16112__$1,(4),results);
} else {
if((state_val_16113 === (19))){
var state_16112__$1 = state_16112;
var statearr_16125_17394 = state_16112__$1;
(statearr_16125_17394[(2)] = null);

(statearr_16125_17394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (11))){
var inst_16087 = (state_16112[(2)]);
var state_16112__$1 = (function (){var statearr_16126 = state_16112;
(statearr_16126[(10)] = inst_16087);

return statearr_16126;
})();
var statearr_16127_17395 = state_16112__$1;
(statearr_16127_17395[(2)] = null);

(statearr_16127_17395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (9))){
var state_16112__$1 = state_16112;
var statearr_16128_17396 = state_16112__$1;
(statearr_16128_17396[(2)] = null);

(statearr_16128_17396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (5))){
var state_16112__$1 = state_16112;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16129_17397 = state_16112__$1;
(statearr_16129_17397[(1)] = (8));

} else {
var statearr_16130_17398 = state_16112__$1;
(statearr_16130_17398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (14))){
var inst_16092 = (state_16112[(11)]);
var inst_16090 = (state_16112[(8)]);
var inst_16090__$1 = (state_16112[(2)]);
var inst_16091 = (inst_16090__$1 == null);
var inst_16092__$1 = cljs.core.not(inst_16091);
var state_16112__$1 = (function (){var statearr_16131 = state_16112;
(statearr_16131[(11)] = inst_16092__$1);

(statearr_16131[(8)] = inst_16090__$1);

return statearr_16131;
})();
if(inst_16092__$1){
var statearr_16132_17399 = state_16112__$1;
(statearr_16132_17399[(1)] = (15));

} else {
var statearr_16133_17400 = state_16112__$1;
(statearr_16133_17400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (16))){
var inst_16092 = (state_16112[(11)]);
var state_16112__$1 = state_16112;
var statearr_16134_17401 = state_16112__$1;
(statearr_16134_17401[(2)] = inst_16092);

(statearr_16134_17401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (10))){
var inst_16084 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16135_17402 = state_16112__$1;
(statearr_16135_17402[(2)] = inst_16084);

(statearr_16135_17402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (18))){
var inst_16095 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16136_17403 = state_16112__$1;
(statearr_16136_17403[(2)] = inst_16095);

(statearr_16136_17403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16113 === (8))){
var inst_16081 = cljs.core.async.close_BANG_(to);
var state_16112__$1 = state_16112;
var statearr_16137_17404 = state_16112__$1;
(statearr_16137_17404[(2)] = inst_16081);

(statearr_16137_17404[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0 = (function (){
var statearr_16138 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__);

(statearr_16138[(1)] = (1));

return statearr_16138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1 = (function (state_16112){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16112);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16139){var ex__15802__auto__ = e16139;
var statearr_16140_17405 = state_16112;
(statearr_16140_17405[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16112[(4)]))){
var statearr_16141_17406 = state_16112;
(statearr_16141_17406[(1)] = cljs.core.first((state_16112[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17407 = state_16112;
state_16112 = G__17407;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__ = function(state_16112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1.call(this,state_16112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16142 = f__15835__auto__();
(statearr_16142[(6)] = c__15834__auto__);

return statearr_16142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));

return c__15834__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16144 = arguments.length;
switch (G__16144) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__16146 = arguments.length;
switch (G__16146) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__16148 = arguments.length;
switch (G__16148) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15834__auto___17411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16174){
var state_val_16175 = (state_16174[(1)]);
if((state_val_16175 === (7))){
var inst_16170 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
var statearr_16176_17412 = state_16174__$1;
(statearr_16176_17412[(2)] = inst_16170);

(statearr_16176_17412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (1))){
var state_16174__$1 = state_16174;
var statearr_16177_17413 = state_16174__$1;
(statearr_16177_17413[(2)] = null);

(statearr_16177_17413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (4))){
var inst_16151 = (state_16174[(7)]);
var inst_16151__$1 = (state_16174[(2)]);
var inst_16152 = (inst_16151__$1 == null);
var state_16174__$1 = (function (){var statearr_16178 = state_16174;
(statearr_16178[(7)] = inst_16151__$1);

return statearr_16178;
})();
if(cljs.core.truth_(inst_16152)){
var statearr_16179_17414 = state_16174__$1;
(statearr_16179_17414[(1)] = (5));

} else {
var statearr_16180_17415 = state_16174__$1;
(statearr_16180_17415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (13))){
var state_16174__$1 = state_16174;
var statearr_16181_17416 = state_16174__$1;
(statearr_16181_17416[(2)] = null);

(statearr_16181_17416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (6))){
var inst_16151 = (state_16174[(7)]);
var inst_16157 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16151) : p.call(null,inst_16151));
var state_16174__$1 = state_16174;
if(cljs.core.truth_(inst_16157)){
var statearr_16182_17417 = state_16174__$1;
(statearr_16182_17417[(1)] = (9));

} else {
var statearr_16183_17418 = state_16174__$1;
(statearr_16183_17418[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (3))){
var inst_16172 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16174__$1,inst_16172);
} else {
if((state_val_16175 === (12))){
var state_16174__$1 = state_16174;
var statearr_16184_17419 = state_16174__$1;
(statearr_16184_17419[(2)] = null);

(statearr_16184_17419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (2))){
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16174__$1,(4),ch);
} else {
if((state_val_16175 === (11))){
var inst_16151 = (state_16174[(7)]);
var inst_16161 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16174__$1,(8),inst_16161,inst_16151);
} else {
if((state_val_16175 === (9))){
var state_16174__$1 = state_16174;
var statearr_16185_17420 = state_16174__$1;
(statearr_16185_17420[(2)] = tc);

(statearr_16185_17420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (5))){
var inst_16154 = cljs.core.async.close_BANG_(tc);
var inst_16155 = cljs.core.async.close_BANG_(fc);
var state_16174__$1 = (function (){var statearr_16186 = state_16174;
(statearr_16186[(8)] = inst_16154);

return statearr_16186;
})();
var statearr_16187_17421 = state_16174__$1;
(statearr_16187_17421[(2)] = inst_16155);

(statearr_16187_17421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (14))){
var inst_16168 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
var statearr_16188_17422 = state_16174__$1;
(statearr_16188_17422[(2)] = inst_16168);

(statearr_16188_17422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (10))){
var state_16174__$1 = state_16174;
var statearr_16189_17423 = state_16174__$1;
(statearr_16189_17423[(2)] = fc);

(statearr_16189_17423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (8))){
var inst_16163 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
if(cljs.core.truth_(inst_16163)){
var statearr_16190_17424 = state_16174__$1;
(statearr_16190_17424[(1)] = (12));

} else {
var statearr_16191_17425 = state_16174__$1;
(statearr_16191_17425[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_16192 = [null,null,null,null,null,null,null,null,null];
(statearr_16192[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_16192[(1)] = (1));

return statearr_16192;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_16174){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16174);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16193){var ex__15802__auto__ = e16193;
var statearr_16194_17426 = state_16174;
(statearr_16194_17426[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16174[(4)]))){
var statearr_16195_17427 = state_16174;
(statearr_16195_17427[(1)] = cljs.core.first((state_16174[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17428 = state_16174;
state_16174 = G__17428;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_16174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_16174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16196 = f__15835__auto__();
(statearr_16196[(6)] = c__15834__auto___17411);

return statearr_16196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16218){
var state_val_16219 = (state_16218[(1)]);
if((state_val_16219 === (7))){
var inst_16214 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16220_17429 = state_16218__$1;
(statearr_16220_17429[(2)] = inst_16214);

(statearr_16220_17429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16219 === (1))){
var inst_16197 = init;
var inst_16198 = inst_16197;
var state_16218__$1 = (function (){var statearr_16221 = state_16218;
(statearr_16221[(7)] = inst_16198);

return statearr_16221;
})();
var statearr_16222_17430 = state_16218__$1;
(statearr_16222_17430[(2)] = null);

(statearr_16222_17430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16219 === (4))){
var inst_16201 = (state_16218[(8)]);
var inst_16201__$1 = (state_16218[(2)]);
var inst_16202 = (inst_16201__$1 == null);
var state_16218__$1 = (function (){var statearr_16223 = state_16218;
(statearr_16223[(8)] = inst_16201__$1);

return statearr_16223;
})();
if(cljs.core.truth_(inst_16202)){
var statearr_16224_17431 = state_16218__$1;
(statearr_16224_17431[(1)] = (5));

} else {
var statearr_16225_17432 = state_16218__$1;
(statearr_16225_17432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16219 === (6))){
var inst_16205 = (state_16218[(9)]);
var inst_16201 = (state_16218[(8)]);
var inst_16198 = (state_16218[(7)]);
var inst_16205__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16198,inst_16201) : f.call(null,inst_16198,inst_16201));
var inst_16206 = cljs.core.reduced_QMARK_(inst_16205__$1);
var state_16218__$1 = (function (){var statearr_16226 = state_16218;
(statearr_16226[(9)] = inst_16205__$1);

return statearr_16226;
})();
if(inst_16206){
var statearr_16227_17433 = state_16218__$1;
(statearr_16227_17433[(1)] = (8));

} else {
var statearr_16228_17434 = state_16218__$1;
(statearr_16228_17434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16219 === (3))){
var inst_16216 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16218__$1,inst_16216);
} else {
if((state_val_16219 === (2))){
var state_16218__$1 = state_16218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16218__$1,(4),ch);
} else {
if((state_val_16219 === (9))){
var inst_16205 = (state_16218[(9)]);
var inst_16198 = inst_16205;
var state_16218__$1 = (function (){var statearr_16229 = state_16218;
(statearr_16229[(7)] = inst_16198);

return statearr_16229;
})();
var statearr_16230_17435 = state_16218__$1;
(statearr_16230_17435[(2)] = null);

(statearr_16230_17435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16219 === (5))){
var inst_16198 = (state_16218[(7)]);
var state_16218__$1 = state_16218;
var statearr_16231_17436 = state_16218__$1;
(statearr_16231_17436[(2)] = inst_16198);

(statearr_16231_17436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16219 === (10))){
var inst_16212 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16232_17437 = state_16218__$1;
(statearr_16232_17437[(2)] = inst_16212);

(statearr_16232_17437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16219 === (8))){
var inst_16205 = (state_16218[(9)]);
var inst_16208 = cljs.core.deref(inst_16205);
var state_16218__$1 = state_16218;
var statearr_16233_17438 = state_16218__$1;
(statearr_16233_17438[(2)] = inst_16208);

(statearr_16233_17438[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15799__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15799__auto____0 = (function (){
var statearr_16234 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16234[(0)] = cljs$core$async$reduce_$_state_machine__15799__auto__);

(statearr_16234[(1)] = (1));

return statearr_16234;
});
var cljs$core$async$reduce_$_state_machine__15799__auto____1 = (function (state_16218){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16218);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16235){var ex__15802__auto__ = e16235;
var statearr_16236_17439 = state_16218;
(statearr_16236_17439[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16218[(4)]))){
var statearr_16237_17440 = state_16218;
(statearr_16237_17440[(1)] = cljs.core.first((state_16218[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17441 = state_16218;
state_16218 = G__17441;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15799__auto__ = function(state_16218){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15799__auto____1.call(this,state_16218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15799__auto____0;
cljs$core$async$reduce_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15799__auto____1;
return cljs$core$async$reduce_$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16238 = f__15835__auto__();
(statearr_16238[(6)] = c__15834__auto__);

return statearr_16238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));

return c__15834__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16244){
var state_val_16245 = (state_16244[(1)]);
if((state_val_16245 === (1))){
var inst_16239 = cljs.core.async.reduce(f__$1,init,ch);
var state_16244__$1 = state_16244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16244__$1,(2),inst_16239);
} else {
if((state_val_16245 === (2))){
var inst_16241 = (state_16244[(2)]);
var inst_16242 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16241) : f__$1.call(null,inst_16241));
var state_16244__$1 = state_16244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16244__$1,inst_16242);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15799__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15799__auto____0 = (function (){
var statearr_16246 = [null,null,null,null,null,null,null];
(statearr_16246[(0)] = cljs$core$async$transduce_$_state_machine__15799__auto__);

(statearr_16246[(1)] = (1));

return statearr_16246;
});
var cljs$core$async$transduce_$_state_machine__15799__auto____1 = (function (state_16244){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16244);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16247){var ex__15802__auto__ = e16247;
var statearr_16248_17442 = state_16244;
(statearr_16248_17442[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16244[(4)]))){
var statearr_16249_17443 = state_16244;
(statearr_16249_17443[(1)] = cljs.core.first((state_16244[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17444 = state_16244;
state_16244 = G__17444;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15799__auto__ = function(state_16244){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15799__auto____1.call(this,state_16244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15799__auto____0;
cljs$core$async$transduce_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15799__auto____1;
return cljs$core$async$transduce_$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16250 = f__15835__auto__();
(statearr_16250[(6)] = c__15834__auto__);

return statearr_16250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));

return c__15834__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16252 = arguments.length;
switch (G__16252) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16277){
var state_val_16278 = (state_16277[(1)]);
if((state_val_16278 === (7))){
var inst_16259 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16279_17446 = state_16277__$1;
(statearr_16279_17446[(2)] = inst_16259);

(statearr_16279_17446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (1))){
var inst_16253 = cljs.core.seq(coll);
var inst_16254 = inst_16253;
var state_16277__$1 = (function (){var statearr_16280 = state_16277;
(statearr_16280[(7)] = inst_16254);

return statearr_16280;
})();
var statearr_16281_17447 = state_16277__$1;
(statearr_16281_17447[(2)] = null);

(statearr_16281_17447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (4))){
var inst_16254 = (state_16277[(7)]);
var inst_16257 = cljs.core.first(inst_16254);
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16277__$1,(7),ch,inst_16257);
} else {
if((state_val_16278 === (13))){
var inst_16271 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16282_17448 = state_16277__$1;
(statearr_16282_17448[(2)] = inst_16271);

(statearr_16282_17448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (6))){
var inst_16262 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
if(cljs.core.truth_(inst_16262)){
var statearr_16283_17449 = state_16277__$1;
(statearr_16283_17449[(1)] = (8));

} else {
var statearr_16284_17450 = state_16277__$1;
(statearr_16284_17450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (3))){
var inst_16275 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16277__$1,inst_16275);
} else {
if((state_val_16278 === (12))){
var state_16277__$1 = state_16277;
var statearr_16285_17451 = state_16277__$1;
(statearr_16285_17451[(2)] = null);

(statearr_16285_17451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (2))){
var inst_16254 = (state_16277[(7)]);
var state_16277__$1 = state_16277;
if(cljs.core.truth_(inst_16254)){
var statearr_16286_17452 = state_16277__$1;
(statearr_16286_17452[(1)] = (4));

} else {
var statearr_16287_17453 = state_16277__$1;
(statearr_16287_17453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (11))){
var inst_16268 = cljs.core.async.close_BANG_(ch);
var state_16277__$1 = state_16277;
var statearr_16288_17454 = state_16277__$1;
(statearr_16288_17454[(2)] = inst_16268);

(statearr_16288_17454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (9))){
var state_16277__$1 = state_16277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16289_17455 = state_16277__$1;
(statearr_16289_17455[(1)] = (11));

} else {
var statearr_16290_17456 = state_16277__$1;
(statearr_16290_17456[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (5))){
var inst_16254 = (state_16277[(7)]);
var state_16277__$1 = state_16277;
var statearr_16291_17457 = state_16277__$1;
(statearr_16291_17457[(2)] = inst_16254);

(statearr_16291_17457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (10))){
var inst_16273 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16292_17458 = state_16277__$1;
(statearr_16292_17458[(2)] = inst_16273);

(statearr_16292_17458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (8))){
var inst_16254 = (state_16277[(7)]);
var inst_16264 = cljs.core.next(inst_16254);
var inst_16254__$1 = inst_16264;
var state_16277__$1 = (function (){var statearr_16293 = state_16277;
(statearr_16293[(7)] = inst_16254__$1);

return statearr_16293;
})();
var statearr_16294_17459 = state_16277__$1;
(statearr_16294_17459[(2)] = null);

(statearr_16294_17459[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_16295 = [null,null,null,null,null,null,null,null];
(statearr_16295[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_16295[(1)] = (1));

return statearr_16295;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_16277){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16277);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16296){var ex__15802__auto__ = e16296;
var statearr_16297_17460 = state_16277;
(statearr_16297_17460[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16277[(4)]))){
var statearr_16298_17461 = state_16277;
(statearr_16298_17461[(1)] = cljs.core.first((state_16277[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17462 = state_16277;
state_16277 = G__17462;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_16277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_16277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16299 = f__15835__auto__();
(statearr_16299[(6)] = c__15834__auto__);

return statearr_16299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));

return c__15834__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16301 = arguments.length;
switch (G__16301) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17464 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17464(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17465 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17465(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17466 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17466(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17467 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17467(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16302 = (function (ch,cs,meta16303){
this.ch = ch;
this.cs = cs;
this.meta16303 = meta16303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16304,meta16303__$1){
var self__ = this;
var _16304__$1 = this;
return (new cljs.core.async.t_cljs$core$async16302(self__.ch,self__.cs,meta16303__$1));
}));

(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16304){
var self__ = this;
var _16304__$1 = this;
return self__.meta16303;
}));

(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16302.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16303","meta16303",-2088955733,null)], null);
}));

(cljs.core.async.t_cljs$core$async16302.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16302");

(cljs.core.async.t_cljs$core$async16302.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16302");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16302.
 */
cljs.core.async.__GT_t_cljs$core$async16302 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16302(ch__$1,cs__$1,meta16303){
return (new cljs.core.async.t_cljs$core$async16302(ch__$1,cs__$1,meta16303));
});

}

return (new cljs.core.async.t_cljs$core$async16302(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15834__auto___17468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16437){
var state_val_16438 = (state_16437[(1)]);
if((state_val_16438 === (7))){
var inst_16433 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16439_17469 = state_16437__$1;
(statearr_16439_17469[(2)] = inst_16433);

(statearr_16439_17469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (20))){
var inst_16338 = (state_16437[(7)]);
var inst_16350 = cljs.core.first(inst_16338);
var inst_16351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16350,(0),null);
var inst_16352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16350,(1),null);
var state_16437__$1 = (function (){var statearr_16440 = state_16437;
(statearr_16440[(8)] = inst_16351);

return statearr_16440;
})();
if(cljs.core.truth_(inst_16352)){
var statearr_16441_17470 = state_16437__$1;
(statearr_16441_17470[(1)] = (22));

} else {
var statearr_16442_17471 = state_16437__$1;
(statearr_16442_17471[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (27))){
var inst_16387 = (state_16437[(9)]);
var inst_16382 = (state_16437[(10)]);
var inst_16380 = (state_16437[(11)]);
var inst_16307 = (state_16437[(12)]);
var inst_16387__$1 = cljs.core._nth(inst_16380,inst_16382);
var inst_16388 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16387__$1,inst_16307,done);
var state_16437__$1 = (function (){var statearr_16443 = state_16437;
(statearr_16443[(9)] = inst_16387__$1);

return statearr_16443;
})();
if(cljs.core.truth_(inst_16388)){
var statearr_16444_17472 = state_16437__$1;
(statearr_16444_17472[(1)] = (30));

} else {
var statearr_16445_17473 = state_16437__$1;
(statearr_16445_17473[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (1))){
var state_16437__$1 = state_16437;
var statearr_16446_17474 = state_16437__$1;
(statearr_16446_17474[(2)] = null);

(statearr_16446_17474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (24))){
var inst_16338 = (state_16437[(7)]);
var inst_16357 = (state_16437[(2)]);
var inst_16358 = cljs.core.next(inst_16338);
var inst_16316 = inst_16358;
var inst_16317 = null;
var inst_16318 = (0);
var inst_16319 = (0);
var state_16437__$1 = (function (){var statearr_16447 = state_16437;
(statearr_16447[(13)] = inst_16357);

(statearr_16447[(14)] = inst_16317);

(statearr_16447[(15)] = inst_16316);

(statearr_16447[(16)] = inst_16318);

(statearr_16447[(17)] = inst_16319);

return statearr_16447;
})();
var statearr_16448_17475 = state_16437__$1;
(statearr_16448_17475[(2)] = null);

(statearr_16448_17475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (39))){
var state_16437__$1 = state_16437;
var statearr_16452_17476 = state_16437__$1;
(statearr_16452_17476[(2)] = null);

(statearr_16452_17476[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (4))){
var inst_16307 = (state_16437[(12)]);
var inst_16307__$1 = (state_16437[(2)]);
var inst_16308 = (inst_16307__$1 == null);
var state_16437__$1 = (function (){var statearr_16453 = state_16437;
(statearr_16453[(12)] = inst_16307__$1);

return statearr_16453;
})();
if(cljs.core.truth_(inst_16308)){
var statearr_16454_17477 = state_16437__$1;
(statearr_16454_17477[(1)] = (5));

} else {
var statearr_16455_17478 = state_16437__$1;
(statearr_16455_17478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (15))){
var inst_16317 = (state_16437[(14)]);
var inst_16316 = (state_16437[(15)]);
var inst_16318 = (state_16437[(16)]);
var inst_16319 = (state_16437[(17)]);
var inst_16334 = (state_16437[(2)]);
var inst_16335 = (inst_16319 + (1));
var tmp16449 = inst_16317;
var tmp16450 = inst_16316;
var tmp16451 = inst_16318;
var inst_16316__$1 = tmp16450;
var inst_16317__$1 = tmp16449;
var inst_16318__$1 = tmp16451;
var inst_16319__$1 = inst_16335;
var state_16437__$1 = (function (){var statearr_16456 = state_16437;
(statearr_16456[(14)] = inst_16317__$1);

(statearr_16456[(15)] = inst_16316__$1);

(statearr_16456[(16)] = inst_16318__$1);

(statearr_16456[(18)] = inst_16334);

(statearr_16456[(17)] = inst_16319__$1);

return statearr_16456;
})();
var statearr_16457_17479 = state_16437__$1;
(statearr_16457_17479[(2)] = null);

(statearr_16457_17479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (21))){
var inst_16361 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16461_17480 = state_16437__$1;
(statearr_16461_17480[(2)] = inst_16361);

(statearr_16461_17480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (31))){
var inst_16387 = (state_16437[(9)]);
var inst_16391 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16387);
var state_16437__$1 = state_16437;
var statearr_16462_17481 = state_16437__$1;
(statearr_16462_17481[(2)] = inst_16391);

(statearr_16462_17481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (32))){
var inst_16382 = (state_16437[(10)]);
var inst_16380 = (state_16437[(11)]);
var inst_16381 = (state_16437[(19)]);
var inst_16379 = (state_16437[(20)]);
var inst_16393 = (state_16437[(2)]);
var inst_16394 = (inst_16382 + (1));
var tmp16458 = inst_16380;
var tmp16459 = inst_16381;
var tmp16460 = inst_16379;
var inst_16379__$1 = tmp16460;
var inst_16380__$1 = tmp16458;
var inst_16381__$1 = tmp16459;
var inst_16382__$1 = inst_16394;
var state_16437__$1 = (function (){var statearr_16463 = state_16437;
(statearr_16463[(10)] = inst_16382__$1);

(statearr_16463[(11)] = inst_16380__$1);

(statearr_16463[(19)] = inst_16381__$1);

(statearr_16463[(21)] = inst_16393);

(statearr_16463[(20)] = inst_16379__$1);

return statearr_16463;
})();
var statearr_16464_17482 = state_16437__$1;
(statearr_16464_17482[(2)] = null);

(statearr_16464_17482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (40))){
var inst_16406 = (state_16437[(22)]);
var inst_16410 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16406);
var state_16437__$1 = state_16437;
var statearr_16465_17483 = state_16437__$1;
(statearr_16465_17483[(2)] = inst_16410);

(statearr_16465_17483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (33))){
var inst_16397 = (state_16437[(23)]);
var inst_16399 = cljs.core.chunked_seq_QMARK_(inst_16397);
var state_16437__$1 = state_16437;
if(inst_16399){
var statearr_16466_17484 = state_16437__$1;
(statearr_16466_17484[(1)] = (36));

} else {
var statearr_16467_17485 = state_16437__$1;
(statearr_16467_17485[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (13))){
var inst_16328 = (state_16437[(24)]);
var inst_16331 = cljs.core.async.close_BANG_(inst_16328);
var state_16437__$1 = state_16437;
var statearr_16468_17486 = state_16437__$1;
(statearr_16468_17486[(2)] = inst_16331);

(statearr_16468_17486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (22))){
var inst_16351 = (state_16437[(8)]);
var inst_16354 = cljs.core.async.close_BANG_(inst_16351);
var state_16437__$1 = state_16437;
var statearr_16469_17487 = state_16437__$1;
(statearr_16469_17487[(2)] = inst_16354);

(statearr_16469_17487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (36))){
var inst_16397 = (state_16437[(23)]);
var inst_16401 = cljs.core.chunk_first(inst_16397);
var inst_16402 = cljs.core.chunk_rest(inst_16397);
var inst_16403 = cljs.core.count(inst_16401);
var inst_16379 = inst_16402;
var inst_16380 = inst_16401;
var inst_16381 = inst_16403;
var inst_16382 = (0);
var state_16437__$1 = (function (){var statearr_16470 = state_16437;
(statearr_16470[(10)] = inst_16382);

(statearr_16470[(11)] = inst_16380);

(statearr_16470[(19)] = inst_16381);

(statearr_16470[(20)] = inst_16379);

return statearr_16470;
})();
var statearr_16471_17488 = state_16437__$1;
(statearr_16471_17488[(2)] = null);

(statearr_16471_17488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (41))){
var inst_16397 = (state_16437[(23)]);
var inst_16412 = (state_16437[(2)]);
var inst_16413 = cljs.core.next(inst_16397);
var inst_16379 = inst_16413;
var inst_16380 = null;
var inst_16381 = (0);
var inst_16382 = (0);
var state_16437__$1 = (function (){var statearr_16472 = state_16437;
(statearr_16472[(25)] = inst_16412);

(statearr_16472[(10)] = inst_16382);

(statearr_16472[(11)] = inst_16380);

(statearr_16472[(19)] = inst_16381);

(statearr_16472[(20)] = inst_16379);

return statearr_16472;
})();
var statearr_16473_17489 = state_16437__$1;
(statearr_16473_17489[(2)] = null);

(statearr_16473_17489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (43))){
var state_16437__$1 = state_16437;
var statearr_16474_17490 = state_16437__$1;
(statearr_16474_17490[(2)] = null);

(statearr_16474_17490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (29))){
var inst_16421 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16475_17491 = state_16437__$1;
(statearr_16475_17491[(2)] = inst_16421);

(statearr_16475_17491[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (44))){
var inst_16430 = (state_16437[(2)]);
var state_16437__$1 = (function (){var statearr_16476 = state_16437;
(statearr_16476[(26)] = inst_16430);

return statearr_16476;
})();
var statearr_16477_17492 = state_16437__$1;
(statearr_16477_17492[(2)] = null);

(statearr_16477_17492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (6))){
var inst_16371 = (state_16437[(27)]);
var inst_16370 = cljs.core.deref(cs);
var inst_16371__$1 = cljs.core.keys(inst_16370);
var inst_16372 = cljs.core.count(inst_16371__$1);
var inst_16373 = cljs.core.reset_BANG_(dctr,inst_16372);
var inst_16378 = cljs.core.seq(inst_16371__$1);
var inst_16379 = inst_16378;
var inst_16380 = null;
var inst_16381 = (0);
var inst_16382 = (0);
var state_16437__$1 = (function (){var statearr_16478 = state_16437;
(statearr_16478[(10)] = inst_16382);

(statearr_16478[(11)] = inst_16380);

(statearr_16478[(19)] = inst_16381);

(statearr_16478[(27)] = inst_16371__$1);

(statearr_16478[(28)] = inst_16373);

(statearr_16478[(20)] = inst_16379);

return statearr_16478;
})();
var statearr_16479_17493 = state_16437__$1;
(statearr_16479_17493[(2)] = null);

(statearr_16479_17493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (28))){
var inst_16397 = (state_16437[(23)]);
var inst_16379 = (state_16437[(20)]);
var inst_16397__$1 = cljs.core.seq(inst_16379);
var state_16437__$1 = (function (){var statearr_16480 = state_16437;
(statearr_16480[(23)] = inst_16397__$1);

return statearr_16480;
})();
if(inst_16397__$1){
var statearr_16481_17494 = state_16437__$1;
(statearr_16481_17494[(1)] = (33));

} else {
var statearr_16482_17495 = state_16437__$1;
(statearr_16482_17495[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (25))){
var inst_16382 = (state_16437[(10)]);
var inst_16381 = (state_16437[(19)]);
var inst_16384 = (inst_16382 < inst_16381);
var inst_16385 = inst_16384;
var state_16437__$1 = state_16437;
if(cljs.core.truth_(inst_16385)){
var statearr_16483_17496 = state_16437__$1;
(statearr_16483_17496[(1)] = (27));

} else {
var statearr_16484_17497 = state_16437__$1;
(statearr_16484_17497[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (34))){
var state_16437__$1 = state_16437;
var statearr_16485_17498 = state_16437__$1;
(statearr_16485_17498[(2)] = null);

(statearr_16485_17498[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (17))){
var state_16437__$1 = state_16437;
var statearr_16486_17499 = state_16437__$1;
(statearr_16486_17499[(2)] = null);

(statearr_16486_17499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (3))){
var inst_16435 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16437__$1,inst_16435);
} else {
if((state_val_16438 === (12))){
var inst_16366 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16487_17500 = state_16437__$1;
(statearr_16487_17500[(2)] = inst_16366);

(statearr_16487_17500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (2))){
var state_16437__$1 = state_16437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16437__$1,(4),ch);
} else {
if((state_val_16438 === (23))){
var state_16437__$1 = state_16437;
var statearr_16488_17501 = state_16437__$1;
(statearr_16488_17501[(2)] = null);

(statearr_16488_17501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (35))){
var inst_16419 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16489_17502 = state_16437__$1;
(statearr_16489_17502[(2)] = inst_16419);

(statearr_16489_17502[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (19))){
var inst_16338 = (state_16437[(7)]);
var inst_16342 = cljs.core.chunk_first(inst_16338);
var inst_16343 = cljs.core.chunk_rest(inst_16338);
var inst_16344 = cljs.core.count(inst_16342);
var inst_16316 = inst_16343;
var inst_16317 = inst_16342;
var inst_16318 = inst_16344;
var inst_16319 = (0);
var state_16437__$1 = (function (){var statearr_16490 = state_16437;
(statearr_16490[(14)] = inst_16317);

(statearr_16490[(15)] = inst_16316);

(statearr_16490[(16)] = inst_16318);

(statearr_16490[(17)] = inst_16319);

return statearr_16490;
})();
var statearr_16491_17503 = state_16437__$1;
(statearr_16491_17503[(2)] = null);

(statearr_16491_17503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (11))){
var inst_16338 = (state_16437[(7)]);
var inst_16316 = (state_16437[(15)]);
var inst_16338__$1 = cljs.core.seq(inst_16316);
var state_16437__$1 = (function (){var statearr_16492 = state_16437;
(statearr_16492[(7)] = inst_16338__$1);

return statearr_16492;
})();
if(inst_16338__$1){
var statearr_16493_17504 = state_16437__$1;
(statearr_16493_17504[(1)] = (16));

} else {
var statearr_16494_17505 = state_16437__$1;
(statearr_16494_17505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (9))){
var inst_16368 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16495_17506 = state_16437__$1;
(statearr_16495_17506[(2)] = inst_16368);

(statearr_16495_17506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (5))){
var inst_16314 = cljs.core.deref(cs);
var inst_16315 = cljs.core.seq(inst_16314);
var inst_16316 = inst_16315;
var inst_16317 = null;
var inst_16318 = (0);
var inst_16319 = (0);
var state_16437__$1 = (function (){var statearr_16496 = state_16437;
(statearr_16496[(14)] = inst_16317);

(statearr_16496[(15)] = inst_16316);

(statearr_16496[(16)] = inst_16318);

(statearr_16496[(17)] = inst_16319);

return statearr_16496;
})();
var statearr_16497_17507 = state_16437__$1;
(statearr_16497_17507[(2)] = null);

(statearr_16497_17507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (14))){
var state_16437__$1 = state_16437;
var statearr_16498_17508 = state_16437__$1;
(statearr_16498_17508[(2)] = null);

(statearr_16498_17508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (45))){
var inst_16427 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16499_17509 = state_16437__$1;
(statearr_16499_17509[(2)] = inst_16427);

(statearr_16499_17509[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (26))){
var inst_16371 = (state_16437[(27)]);
var inst_16423 = (state_16437[(2)]);
var inst_16424 = cljs.core.seq(inst_16371);
var state_16437__$1 = (function (){var statearr_16500 = state_16437;
(statearr_16500[(29)] = inst_16423);

return statearr_16500;
})();
if(inst_16424){
var statearr_16501_17510 = state_16437__$1;
(statearr_16501_17510[(1)] = (42));

} else {
var statearr_16502_17511 = state_16437__$1;
(statearr_16502_17511[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (16))){
var inst_16338 = (state_16437[(7)]);
var inst_16340 = cljs.core.chunked_seq_QMARK_(inst_16338);
var state_16437__$1 = state_16437;
if(inst_16340){
var statearr_16503_17512 = state_16437__$1;
(statearr_16503_17512[(1)] = (19));

} else {
var statearr_16504_17513 = state_16437__$1;
(statearr_16504_17513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (38))){
var inst_16416 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16505_17514 = state_16437__$1;
(statearr_16505_17514[(2)] = inst_16416);

(statearr_16505_17514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (30))){
var state_16437__$1 = state_16437;
var statearr_16506_17515 = state_16437__$1;
(statearr_16506_17515[(2)] = null);

(statearr_16506_17515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (10))){
var inst_16317 = (state_16437[(14)]);
var inst_16319 = (state_16437[(17)]);
var inst_16327 = cljs.core._nth(inst_16317,inst_16319);
var inst_16328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16327,(0),null);
var inst_16329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16327,(1),null);
var state_16437__$1 = (function (){var statearr_16507 = state_16437;
(statearr_16507[(24)] = inst_16328);

return statearr_16507;
})();
if(cljs.core.truth_(inst_16329)){
var statearr_16508_17516 = state_16437__$1;
(statearr_16508_17516[(1)] = (13));

} else {
var statearr_16509_17517 = state_16437__$1;
(statearr_16509_17517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (18))){
var inst_16364 = (state_16437[(2)]);
var state_16437__$1 = state_16437;
var statearr_16510_17518 = state_16437__$1;
(statearr_16510_17518[(2)] = inst_16364);

(statearr_16510_17518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (42))){
var state_16437__$1 = state_16437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16437__$1,(45),dchan);
} else {
if((state_val_16438 === (37))){
var inst_16406 = (state_16437[(22)]);
var inst_16307 = (state_16437[(12)]);
var inst_16397 = (state_16437[(23)]);
var inst_16406__$1 = cljs.core.first(inst_16397);
var inst_16407 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16406__$1,inst_16307,done);
var state_16437__$1 = (function (){var statearr_16511 = state_16437;
(statearr_16511[(22)] = inst_16406__$1);

return statearr_16511;
})();
if(cljs.core.truth_(inst_16407)){
var statearr_16512_17519 = state_16437__$1;
(statearr_16512_17519[(1)] = (39));

} else {
var statearr_16513_17520 = state_16437__$1;
(statearr_16513_17520[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16438 === (8))){
var inst_16318 = (state_16437[(16)]);
var inst_16319 = (state_16437[(17)]);
var inst_16321 = (inst_16319 < inst_16318);
var inst_16322 = inst_16321;
var state_16437__$1 = state_16437;
if(cljs.core.truth_(inst_16322)){
var statearr_16514_17521 = state_16437__$1;
(statearr_16514_17521[(1)] = (10));

} else {
var statearr_16515_17522 = state_16437__$1;
(statearr_16515_17522[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__15799__auto__ = null;
var cljs$core$async$mult_$_state_machine__15799__auto____0 = (function (){
var statearr_16516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16516[(0)] = cljs$core$async$mult_$_state_machine__15799__auto__);

(statearr_16516[(1)] = (1));

return statearr_16516;
});
var cljs$core$async$mult_$_state_machine__15799__auto____1 = (function (state_16437){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16437);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16517){var ex__15802__auto__ = e16517;
var statearr_16518_17523 = state_16437;
(statearr_16518_17523[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16437[(4)]))){
var statearr_16519_17524 = state_16437;
(statearr_16519_17524[(1)] = cljs.core.first((state_16437[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17525 = state_16437;
state_16437 = G__17525;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15799__auto__ = function(state_16437){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15799__auto____1.call(this,state_16437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15799__auto____0;
cljs$core$async$mult_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15799__auto____1;
return cljs$core$async$mult_$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16520 = f__15835__auto__();
(statearr_16520[(6)] = c__15834__auto___17468);

return statearr_16520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16522 = arguments.length;
switch (G__16522) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17527 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17527(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17528 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17528(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17529 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17529(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17530 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17530(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17531 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17531(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17532 = arguments.length;
var i__4865__auto___17533 = (0);
while(true){
if((i__4865__auto___17533 < len__4864__auto___17532)){
args__4870__auto__.push((arguments[i__4865__auto___17533]));

var G__17534 = (i__4865__auto___17533 + (1));
i__4865__auto___17533 = G__17534;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16527){
var map__16528 = p__16527;
var map__16528__$1 = cljs.core.__destructure_map(map__16528);
var opts = map__16528__$1;
var statearr_16529_17535 = state;
(statearr_16529_17535[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16530_17536 = state;
(statearr_16530_17536[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_16531_17537 = state;
(statearr_16531_17537[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16523){
var G__16524 = cljs.core.first(seq16523);
var seq16523__$1 = cljs.core.next(seq16523);
var G__16525 = cljs.core.first(seq16523__$1);
var seq16523__$2 = cljs.core.next(seq16523__$1);
var G__16526 = cljs.core.first(seq16523__$2);
var seq16523__$3 = cljs.core.next(seq16523__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16524,G__16525,G__16526,seq16523__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16532 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16533){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16533 = meta16533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16534,meta16533__$1){
var self__ = this;
var _16534__$1 = this;
return (new cljs.core.async.t_cljs$core$async16532(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16533__$1));
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16534){
var self__ = this;
var _16534__$1 = this;
return self__.meta16533;
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16533","meta16533",1471106735,null)], null);
}));

(cljs.core.async.t_cljs$core$async16532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16532");

(cljs.core.async.t_cljs$core$async16532.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16532.
 */
cljs.core.async.__GT_t_cljs$core$async16532 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16532(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16533){
return (new cljs.core.async.t_cljs$core$async16532(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16533));
});

}

return (new cljs.core.async.t_cljs$core$async16532(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15834__auto___17538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16602){
var state_val_16603 = (state_16602[(1)]);
if((state_val_16603 === (7))){
var inst_16562 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16562)){
var statearr_16604_17539 = state_16602__$1;
(statearr_16604_17539[(1)] = (8));

} else {
var statearr_16605_17540 = state_16602__$1;
(statearr_16605_17540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (20))){
var inst_16555 = (state_16602[(7)]);
var state_16602__$1 = state_16602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16602__$1,(23),out,inst_16555);
} else {
if((state_val_16603 === (1))){
var inst_16538 = calc_state();
var inst_16539 = cljs.core.__destructure_map(inst_16538);
var inst_16540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16539,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16539,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16539,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16543 = inst_16538;
var state_16602__$1 = (function (){var statearr_16606 = state_16602;
(statearr_16606[(8)] = inst_16542);

(statearr_16606[(9)] = inst_16541);

(statearr_16606[(10)] = inst_16540);

(statearr_16606[(11)] = inst_16543);

return statearr_16606;
})();
var statearr_16607_17541 = state_16602__$1;
(statearr_16607_17541[(2)] = null);

(statearr_16607_17541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (24))){
var inst_16546 = (state_16602[(12)]);
var inst_16543 = inst_16546;
var state_16602__$1 = (function (){var statearr_16608 = state_16602;
(statearr_16608[(11)] = inst_16543);

return statearr_16608;
})();
var statearr_16609_17542 = state_16602__$1;
(statearr_16609_17542[(2)] = null);

(statearr_16609_17542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (4))){
var inst_16557 = (state_16602[(13)]);
var inst_16555 = (state_16602[(7)]);
var inst_16554 = (state_16602[(2)]);
var inst_16555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16554,(0),null);
var inst_16556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16554,(1),null);
var inst_16557__$1 = (inst_16555__$1 == null);
var state_16602__$1 = (function (){var statearr_16610 = state_16602;
(statearr_16610[(13)] = inst_16557__$1);

(statearr_16610[(7)] = inst_16555__$1);

(statearr_16610[(14)] = inst_16556);

return statearr_16610;
})();
if(cljs.core.truth_(inst_16557__$1)){
var statearr_16611_17543 = state_16602__$1;
(statearr_16611_17543[(1)] = (5));

} else {
var statearr_16612_17544 = state_16602__$1;
(statearr_16612_17544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (15))){
var inst_16547 = (state_16602[(15)]);
var inst_16576 = (state_16602[(16)]);
var inst_16576__$1 = cljs.core.empty_QMARK_(inst_16547);
var state_16602__$1 = (function (){var statearr_16613 = state_16602;
(statearr_16613[(16)] = inst_16576__$1);

return statearr_16613;
})();
if(inst_16576__$1){
var statearr_16614_17545 = state_16602__$1;
(statearr_16614_17545[(1)] = (17));

} else {
var statearr_16615_17546 = state_16602__$1;
(statearr_16615_17546[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (21))){
var inst_16546 = (state_16602[(12)]);
var inst_16543 = inst_16546;
var state_16602__$1 = (function (){var statearr_16616 = state_16602;
(statearr_16616[(11)] = inst_16543);

return statearr_16616;
})();
var statearr_16617_17547 = state_16602__$1;
(statearr_16617_17547[(2)] = null);

(statearr_16617_17547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (13))){
var inst_16569 = (state_16602[(2)]);
var inst_16570 = calc_state();
var inst_16543 = inst_16570;
var state_16602__$1 = (function (){var statearr_16618 = state_16602;
(statearr_16618[(17)] = inst_16569);

(statearr_16618[(11)] = inst_16543);

return statearr_16618;
})();
var statearr_16619_17548 = state_16602__$1;
(statearr_16619_17548[(2)] = null);

(statearr_16619_17548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (22))){
var inst_16596 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16620_17549 = state_16602__$1;
(statearr_16620_17549[(2)] = inst_16596);

(statearr_16620_17549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (6))){
var inst_16556 = (state_16602[(14)]);
var inst_16560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16556,change);
var state_16602__$1 = state_16602;
var statearr_16621_17550 = state_16602__$1;
(statearr_16621_17550[(2)] = inst_16560);

(statearr_16621_17550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (25))){
var state_16602__$1 = state_16602;
var statearr_16622_17551 = state_16602__$1;
(statearr_16622_17551[(2)] = null);

(statearr_16622_17551[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (17))){
var inst_16548 = (state_16602[(18)]);
var inst_16556 = (state_16602[(14)]);
var inst_16578 = (inst_16548.cljs$core$IFn$_invoke$arity$1 ? inst_16548.cljs$core$IFn$_invoke$arity$1(inst_16556) : inst_16548.call(null,inst_16556));
var inst_16579 = cljs.core.not(inst_16578);
var state_16602__$1 = state_16602;
var statearr_16623_17552 = state_16602__$1;
(statearr_16623_17552[(2)] = inst_16579);

(statearr_16623_17552[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (3))){
var inst_16600 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16602__$1,inst_16600);
} else {
if((state_val_16603 === (12))){
var state_16602__$1 = state_16602;
var statearr_16624_17553 = state_16602__$1;
(statearr_16624_17553[(2)] = null);

(statearr_16624_17553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (2))){
var inst_16546 = (state_16602[(12)]);
var inst_16543 = (state_16602[(11)]);
var inst_16546__$1 = cljs.core.__destructure_map(inst_16543);
var inst_16547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16546__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16546__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16546__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16602__$1 = (function (){var statearr_16625 = state_16602;
(statearr_16625[(15)] = inst_16547);

(statearr_16625[(18)] = inst_16548);

(statearr_16625[(12)] = inst_16546__$1);

return statearr_16625;
})();
return cljs.core.async.ioc_alts_BANG_(state_16602__$1,(4),inst_16549);
} else {
if((state_val_16603 === (23))){
var inst_16587 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16587)){
var statearr_16626_17554 = state_16602__$1;
(statearr_16626_17554[(1)] = (24));

} else {
var statearr_16627_17555 = state_16602__$1;
(statearr_16627_17555[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (19))){
var inst_16582 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16628_17556 = state_16602__$1;
(statearr_16628_17556[(2)] = inst_16582);

(statearr_16628_17556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (11))){
var inst_16556 = (state_16602[(14)]);
var inst_16566 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16556);
var state_16602__$1 = state_16602;
var statearr_16629_17557 = state_16602__$1;
(statearr_16629_17557[(2)] = inst_16566);

(statearr_16629_17557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (9))){
var inst_16547 = (state_16602[(15)]);
var inst_16556 = (state_16602[(14)]);
var inst_16573 = (state_16602[(19)]);
var inst_16573__$1 = (inst_16547.cljs$core$IFn$_invoke$arity$1 ? inst_16547.cljs$core$IFn$_invoke$arity$1(inst_16556) : inst_16547.call(null,inst_16556));
var state_16602__$1 = (function (){var statearr_16630 = state_16602;
(statearr_16630[(19)] = inst_16573__$1);

return statearr_16630;
})();
if(cljs.core.truth_(inst_16573__$1)){
var statearr_16631_17558 = state_16602__$1;
(statearr_16631_17558[(1)] = (14));

} else {
var statearr_16632_17559 = state_16602__$1;
(statearr_16632_17559[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (5))){
var inst_16557 = (state_16602[(13)]);
var state_16602__$1 = state_16602;
var statearr_16633_17560 = state_16602__$1;
(statearr_16633_17560[(2)] = inst_16557);

(statearr_16633_17560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (14))){
var inst_16573 = (state_16602[(19)]);
var state_16602__$1 = state_16602;
var statearr_16634_17561 = state_16602__$1;
(statearr_16634_17561[(2)] = inst_16573);

(statearr_16634_17561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (26))){
var inst_16592 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16635_17562 = state_16602__$1;
(statearr_16635_17562[(2)] = inst_16592);

(statearr_16635_17562[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (16))){
var inst_16584 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16584)){
var statearr_16636_17563 = state_16602__$1;
(statearr_16636_17563[(1)] = (20));

} else {
var statearr_16637_17564 = state_16602__$1;
(statearr_16637_17564[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (10))){
var inst_16598 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16638_17565 = state_16602__$1;
(statearr_16638_17565[(2)] = inst_16598);

(statearr_16638_17565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (18))){
var inst_16576 = (state_16602[(16)]);
var state_16602__$1 = state_16602;
var statearr_16639_17566 = state_16602__$1;
(statearr_16639_17566[(2)] = inst_16576);

(statearr_16639_17566[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (8))){
var inst_16555 = (state_16602[(7)]);
var inst_16564 = (inst_16555 == null);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16564)){
var statearr_16640_17567 = state_16602__$1;
(statearr_16640_17567[(1)] = (11));

} else {
var statearr_16641_17568 = state_16602__$1;
(statearr_16641_17568[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__15799__auto__ = null;
var cljs$core$async$mix_$_state_machine__15799__auto____0 = (function (){
var statearr_16642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16642[(0)] = cljs$core$async$mix_$_state_machine__15799__auto__);

(statearr_16642[(1)] = (1));

return statearr_16642;
});
var cljs$core$async$mix_$_state_machine__15799__auto____1 = (function (state_16602){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16602);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16643){var ex__15802__auto__ = e16643;
var statearr_16644_17569 = state_16602;
(statearr_16644_17569[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16602[(4)]))){
var statearr_16645_17570 = state_16602;
(statearr_16645_17570[(1)] = cljs.core.first((state_16602[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17571 = state_16602;
state_16602 = G__17571;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15799__auto__ = function(state_16602){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15799__auto____1.call(this,state_16602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15799__auto____0;
cljs$core$async$mix_$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15799__auto____1;
return cljs$core$async$mix_$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16646 = f__15835__auto__();
(statearr_16646[(6)] = c__15834__auto___17538);

return statearr_16646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17572 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17572(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17573 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17573(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17574 = (function() {
var G__17575 = null;
var G__17575__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17575__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17575 = function(p,v){
switch(arguments.length){
case 1:
return G__17575__1.call(this,p);
case 2:
return G__17575__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17575.cljs$core$IFn$_invoke$arity$1 = G__17575__1;
G__17575.cljs$core$IFn$_invoke$arity$2 = G__17575__2;
return G__17575;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16648 = arguments.length;
switch (G__16648) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17574(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17574(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__16651 = arguments.length;
switch (G__16651) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16649_SHARP_){
if(cljs.core.truth_((p1__16649_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16649_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16649_SHARP_.call(null,topic)))){
return p1__16649_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16649_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16652 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16653){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16653 = meta16653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16654,meta16653__$1){
var self__ = this;
var _16654__$1 = this;
return (new cljs.core.async.t_cljs$core$async16652(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16653__$1));
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16654){
var self__ = this;
var _16654__$1 = this;
return self__.meta16653;
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16653","meta16653",1309379015,null)], null);
}));

(cljs.core.async.t_cljs$core$async16652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16652");

(cljs.core.async.t_cljs$core$async16652.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16652.
 */
cljs.core.async.__GT_t_cljs$core$async16652 = (function cljs$core$async$__GT_t_cljs$core$async16652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16653){
return (new cljs.core.async.t_cljs$core$async16652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16653));
});

}

return (new cljs.core.async.t_cljs$core$async16652(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15834__auto___17578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16726){
var state_val_16727 = (state_16726[(1)]);
if((state_val_16727 === (7))){
var inst_16722 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16728_17579 = state_16726__$1;
(statearr_16728_17579[(2)] = inst_16722);

(statearr_16728_17579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (20))){
var state_16726__$1 = state_16726;
var statearr_16729_17580 = state_16726__$1;
(statearr_16729_17580[(2)] = null);

(statearr_16729_17580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (1))){
var state_16726__$1 = state_16726;
var statearr_16730_17581 = state_16726__$1;
(statearr_16730_17581[(2)] = null);

(statearr_16730_17581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (24))){
var inst_16705 = (state_16726[(7)]);
var inst_16714 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16705);
var state_16726__$1 = state_16726;
var statearr_16731_17582 = state_16726__$1;
(statearr_16731_17582[(2)] = inst_16714);

(statearr_16731_17582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (4))){
var inst_16657 = (state_16726[(8)]);
var inst_16657__$1 = (state_16726[(2)]);
var inst_16658 = (inst_16657__$1 == null);
var state_16726__$1 = (function (){var statearr_16732 = state_16726;
(statearr_16732[(8)] = inst_16657__$1);

return statearr_16732;
})();
if(cljs.core.truth_(inst_16658)){
var statearr_16733_17583 = state_16726__$1;
(statearr_16733_17583[(1)] = (5));

} else {
var statearr_16734_17584 = state_16726__$1;
(statearr_16734_17584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (15))){
var inst_16699 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16735_17585 = state_16726__$1;
(statearr_16735_17585[(2)] = inst_16699);

(statearr_16735_17585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (21))){
var inst_16719 = (state_16726[(2)]);
var state_16726__$1 = (function (){var statearr_16736 = state_16726;
(statearr_16736[(9)] = inst_16719);

return statearr_16736;
})();
var statearr_16737_17586 = state_16726__$1;
(statearr_16737_17586[(2)] = null);

(statearr_16737_17586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (13))){
var inst_16681 = (state_16726[(10)]);
var inst_16683 = cljs.core.chunked_seq_QMARK_(inst_16681);
var state_16726__$1 = state_16726;
if(inst_16683){
var statearr_16738_17587 = state_16726__$1;
(statearr_16738_17587[(1)] = (16));

} else {
var statearr_16739_17588 = state_16726__$1;
(statearr_16739_17588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (22))){
var inst_16711 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
if(cljs.core.truth_(inst_16711)){
var statearr_16740_17589 = state_16726__$1;
(statearr_16740_17589[(1)] = (23));

} else {
var statearr_16741_17590 = state_16726__$1;
(statearr_16741_17590[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (6))){
var inst_16705 = (state_16726[(7)]);
var inst_16707 = (state_16726[(11)]);
var inst_16657 = (state_16726[(8)]);
var inst_16705__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16657) : topic_fn.call(null,inst_16657));
var inst_16706 = cljs.core.deref(mults);
var inst_16707__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16706,inst_16705__$1);
var state_16726__$1 = (function (){var statearr_16742 = state_16726;
(statearr_16742[(7)] = inst_16705__$1);

(statearr_16742[(11)] = inst_16707__$1);

return statearr_16742;
})();
if(cljs.core.truth_(inst_16707__$1)){
var statearr_16743_17591 = state_16726__$1;
(statearr_16743_17591[(1)] = (19));

} else {
var statearr_16744_17592 = state_16726__$1;
(statearr_16744_17592[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (25))){
var inst_16716 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16745_17593 = state_16726__$1;
(statearr_16745_17593[(2)] = inst_16716);

(statearr_16745_17593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (17))){
var inst_16681 = (state_16726[(10)]);
var inst_16690 = cljs.core.first(inst_16681);
var inst_16691 = cljs.core.async.muxch_STAR_(inst_16690);
var inst_16692 = cljs.core.async.close_BANG_(inst_16691);
var inst_16693 = cljs.core.next(inst_16681);
var inst_16667 = inst_16693;
var inst_16668 = null;
var inst_16669 = (0);
var inst_16670 = (0);
var state_16726__$1 = (function (){var statearr_16746 = state_16726;
(statearr_16746[(12)] = inst_16669);

(statearr_16746[(13)] = inst_16692);

(statearr_16746[(14)] = inst_16667);

(statearr_16746[(15)] = inst_16668);

(statearr_16746[(16)] = inst_16670);

return statearr_16746;
})();
var statearr_16747_17594 = state_16726__$1;
(statearr_16747_17594[(2)] = null);

(statearr_16747_17594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (3))){
var inst_16724 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16726__$1,inst_16724);
} else {
if((state_val_16727 === (12))){
var inst_16701 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16748_17595 = state_16726__$1;
(statearr_16748_17595[(2)] = inst_16701);

(statearr_16748_17595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (2))){
var state_16726__$1 = state_16726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16726__$1,(4),ch);
} else {
if((state_val_16727 === (23))){
var state_16726__$1 = state_16726;
var statearr_16749_17596 = state_16726__$1;
(statearr_16749_17596[(2)] = null);

(statearr_16749_17596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (19))){
var inst_16707 = (state_16726[(11)]);
var inst_16657 = (state_16726[(8)]);
var inst_16709 = cljs.core.async.muxch_STAR_(inst_16707);
var state_16726__$1 = state_16726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16726__$1,(22),inst_16709,inst_16657);
} else {
if((state_val_16727 === (11))){
var inst_16681 = (state_16726[(10)]);
var inst_16667 = (state_16726[(14)]);
var inst_16681__$1 = cljs.core.seq(inst_16667);
var state_16726__$1 = (function (){var statearr_16750 = state_16726;
(statearr_16750[(10)] = inst_16681__$1);

return statearr_16750;
})();
if(inst_16681__$1){
var statearr_16751_17597 = state_16726__$1;
(statearr_16751_17597[(1)] = (13));

} else {
var statearr_16752_17598 = state_16726__$1;
(statearr_16752_17598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (9))){
var inst_16703 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16753_17599 = state_16726__$1;
(statearr_16753_17599[(2)] = inst_16703);

(statearr_16753_17599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (5))){
var inst_16664 = cljs.core.deref(mults);
var inst_16665 = cljs.core.vals(inst_16664);
var inst_16666 = cljs.core.seq(inst_16665);
var inst_16667 = inst_16666;
var inst_16668 = null;
var inst_16669 = (0);
var inst_16670 = (0);
var state_16726__$1 = (function (){var statearr_16754 = state_16726;
(statearr_16754[(12)] = inst_16669);

(statearr_16754[(14)] = inst_16667);

(statearr_16754[(15)] = inst_16668);

(statearr_16754[(16)] = inst_16670);

return statearr_16754;
})();
var statearr_16755_17600 = state_16726__$1;
(statearr_16755_17600[(2)] = null);

(statearr_16755_17600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (14))){
var state_16726__$1 = state_16726;
var statearr_16759_17601 = state_16726__$1;
(statearr_16759_17601[(2)] = null);

(statearr_16759_17601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (16))){
var inst_16681 = (state_16726[(10)]);
var inst_16685 = cljs.core.chunk_first(inst_16681);
var inst_16686 = cljs.core.chunk_rest(inst_16681);
var inst_16687 = cljs.core.count(inst_16685);
var inst_16667 = inst_16686;
var inst_16668 = inst_16685;
var inst_16669 = inst_16687;
var inst_16670 = (0);
var state_16726__$1 = (function (){var statearr_16760 = state_16726;
(statearr_16760[(12)] = inst_16669);

(statearr_16760[(14)] = inst_16667);

(statearr_16760[(15)] = inst_16668);

(statearr_16760[(16)] = inst_16670);

return statearr_16760;
})();
var statearr_16761_17602 = state_16726__$1;
(statearr_16761_17602[(2)] = null);

(statearr_16761_17602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (10))){
var inst_16669 = (state_16726[(12)]);
var inst_16667 = (state_16726[(14)]);
var inst_16668 = (state_16726[(15)]);
var inst_16670 = (state_16726[(16)]);
var inst_16675 = cljs.core._nth(inst_16668,inst_16670);
var inst_16676 = cljs.core.async.muxch_STAR_(inst_16675);
var inst_16677 = cljs.core.async.close_BANG_(inst_16676);
var inst_16678 = (inst_16670 + (1));
var tmp16756 = inst_16669;
var tmp16757 = inst_16667;
var tmp16758 = inst_16668;
var inst_16667__$1 = tmp16757;
var inst_16668__$1 = tmp16758;
var inst_16669__$1 = tmp16756;
var inst_16670__$1 = inst_16678;
var state_16726__$1 = (function (){var statearr_16762 = state_16726;
(statearr_16762[(12)] = inst_16669__$1);

(statearr_16762[(14)] = inst_16667__$1);

(statearr_16762[(15)] = inst_16668__$1);

(statearr_16762[(16)] = inst_16670__$1);

(statearr_16762[(17)] = inst_16677);

return statearr_16762;
})();
var statearr_16763_17603 = state_16726__$1;
(statearr_16763_17603[(2)] = null);

(statearr_16763_17603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (18))){
var inst_16696 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16764_17604 = state_16726__$1;
(statearr_16764_17604[(2)] = inst_16696);

(statearr_16764_17604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16727 === (8))){
var inst_16669 = (state_16726[(12)]);
var inst_16670 = (state_16726[(16)]);
var inst_16672 = (inst_16670 < inst_16669);
var inst_16673 = inst_16672;
var state_16726__$1 = state_16726;
if(cljs.core.truth_(inst_16673)){
var statearr_16765_17605 = state_16726__$1;
(statearr_16765_17605[(1)] = (10));

} else {
var statearr_16766_17606 = state_16726__$1;
(statearr_16766_17606[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_16767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16767[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_16767[(1)] = (1));

return statearr_16767;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_16726){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16726);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16768){var ex__15802__auto__ = e16768;
var statearr_16769_17607 = state_16726;
(statearr_16769_17607[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16726[(4)]))){
var statearr_16770_17608 = state_16726;
(statearr_16770_17608[(1)] = cljs.core.first((state_16726[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17609 = state_16726;
state_16726 = G__17609;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_16726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_16726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16771 = f__15835__auto__();
(statearr_16771[(6)] = c__15834__auto___17578);

return statearr_16771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16773 = arguments.length;
switch (G__16773) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16775 = arguments.length;
switch (G__16775) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16777 = arguments.length;
switch (G__16777) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15834__auto___17613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16820){
var state_val_16821 = (state_16820[(1)]);
if((state_val_16821 === (7))){
var state_16820__$1 = state_16820;
var statearr_16822_17614 = state_16820__$1;
(statearr_16822_17614[(2)] = null);

(statearr_16822_17614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (1))){
var state_16820__$1 = state_16820;
var statearr_16823_17615 = state_16820__$1;
(statearr_16823_17615[(2)] = null);

(statearr_16823_17615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (4))){
var inst_16781 = (state_16820[(7)]);
var inst_16780 = (state_16820[(8)]);
var inst_16783 = (inst_16781 < inst_16780);
var state_16820__$1 = state_16820;
if(cljs.core.truth_(inst_16783)){
var statearr_16824_17616 = state_16820__$1;
(statearr_16824_17616[(1)] = (6));

} else {
var statearr_16825_17617 = state_16820__$1;
(statearr_16825_17617[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (15))){
var inst_16806 = (state_16820[(9)]);
var inst_16811 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16806);
var state_16820__$1 = state_16820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16820__$1,(17),out,inst_16811);
} else {
if((state_val_16821 === (13))){
var inst_16806 = (state_16820[(9)]);
var inst_16806__$1 = (state_16820[(2)]);
var inst_16807 = cljs.core.some(cljs.core.nil_QMARK_,inst_16806__$1);
var state_16820__$1 = (function (){var statearr_16826 = state_16820;
(statearr_16826[(9)] = inst_16806__$1);

return statearr_16826;
})();
if(cljs.core.truth_(inst_16807)){
var statearr_16827_17618 = state_16820__$1;
(statearr_16827_17618[(1)] = (14));

} else {
var statearr_16828_17619 = state_16820__$1;
(statearr_16828_17619[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (6))){
var state_16820__$1 = state_16820;
var statearr_16829_17620 = state_16820__$1;
(statearr_16829_17620[(2)] = null);

(statearr_16829_17620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (17))){
var inst_16813 = (state_16820[(2)]);
var state_16820__$1 = (function (){var statearr_16831 = state_16820;
(statearr_16831[(10)] = inst_16813);

return statearr_16831;
})();
var statearr_16832_17621 = state_16820__$1;
(statearr_16832_17621[(2)] = null);

(statearr_16832_17621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (3))){
var inst_16818 = (state_16820[(2)]);
var state_16820__$1 = state_16820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16820__$1,inst_16818);
} else {
if((state_val_16821 === (12))){
var _ = (function (){var statearr_16833 = state_16820;
(statearr_16833[(4)] = cljs.core.rest((state_16820[(4)])));

return statearr_16833;
})();
var state_16820__$1 = state_16820;
var ex16830 = (state_16820__$1[(2)]);
var statearr_16834_17622 = state_16820__$1;
(statearr_16834_17622[(5)] = ex16830);


if((ex16830 instanceof Object)){
var statearr_16835_17623 = state_16820__$1;
(statearr_16835_17623[(1)] = (11));

(statearr_16835_17623[(5)] = null);

} else {
throw ex16830;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (2))){
var inst_16779 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16780 = cnt;
var inst_16781 = (0);
var state_16820__$1 = (function (){var statearr_16836 = state_16820;
(statearr_16836[(7)] = inst_16781);

(statearr_16836[(11)] = inst_16779);

(statearr_16836[(8)] = inst_16780);

return statearr_16836;
})();
var statearr_16837_17624 = state_16820__$1;
(statearr_16837_17624[(2)] = null);

(statearr_16837_17624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (11))){
var inst_16785 = (state_16820[(2)]);
var inst_16786 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16820__$1 = (function (){var statearr_16838 = state_16820;
(statearr_16838[(12)] = inst_16785);

return statearr_16838;
})();
var statearr_16839_17625 = state_16820__$1;
(statearr_16839_17625[(2)] = inst_16786);

(statearr_16839_17625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (9))){
var inst_16781 = (state_16820[(7)]);
var _ = (function (){var statearr_16840 = state_16820;
(statearr_16840[(4)] = cljs.core.cons((12),(state_16820[(4)])));

return statearr_16840;
})();
var inst_16792 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16781) : chs__$1.call(null,inst_16781));
var inst_16793 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16781) : done.call(null,inst_16781));
var inst_16794 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16792,inst_16793);
var ___$1 = (function (){var statearr_16841 = state_16820;
(statearr_16841[(4)] = cljs.core.rest((state_16820[(4)])));

return statearr_16841;
})();
var state_16820__$1 = state_16820;
var statearr_16842_17626 = state_16820__$1;
(statearr_16842_17626[(2)] = inst_16794);

(statearr_16842_17626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (5))){
var inst_16804 = (state_16820[(2)]);
var state_16820__$1 = (function (){var statearr_16843 = state_16820;
(statearr_16843[(13)] = inst_16804);

return statearr_16843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16820__$1,(13),dchan);
} else {
if((state_val_16821 === (14))){
var inst_16809 = cljs.core.async.close_BANG_(out);
var state_16820__$1 = state_16820;
var statearr_16844_17627 = state_16820__$1;
(statearr_16844_17627[(2)] = inst_16809);

(statearr_16844_17627[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (16))){
var inst_16816 = (state_16820[(2)]);
var state_16820__$1 = state_16820;
var statearr_16845_17628 = state_16820__$1;
(statearr_16845_17628[(2)] = inst_16816);

(statearr_16845_17628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (10))){
var inst_16781 = (state_16820[(7)]);
var inst_16797 = (state_16820[(2)]);
var inst_16798 = (inst_16781 + (1));
var inst_16781__$1 = inst_16798;
var state_16820__$1 = (function (){var statearr_16846 = state_16820;
(statearr_16846[(14)] = inst_16797);

(statearr_16846[(7)] = inst_16781__$1);

return statearr_16846;
})();
var statearr_16847_17629 = state_16820__$1;
(statearr_16847_17629[(2)] = null);

(statearr_16847_17629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16821 === (8))){
var inst_16802 = (state_16820[(2)]);
var state_16820__$1 = state_16820;
var statearr_16848_17630 = state_16820__$1;
(statearr_16848_17630[(2)] = inst_16802);

(statearr_16848_17630[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_16849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16849[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_16849[(1)] = (1));

return statearr_16849;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_16820){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16820);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16850){var ex__15802__auto__ = e16850;
var statearr_16851_17631 = state_16820;
(statearr_16851_17631[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16820[(4)]))){
var statearr_16852_17632 = state_16820;
(statearr_16852_17632[(1)] = cljs.core.first((state_16820[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17633 = state_16820;
state_16820 = G__17633;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_16820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_16820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16853 = f__15835__auto__();
(statearr_16853[(6)] = c__15834__auto___17613);

return statearr_16853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16856 = arguments.length;
switch (G__16856) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15834__auto___17635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16888){
var state_val_16889 = (state_16888[(1)]);
if((state_val_16889 === (7))){
var inst_16868 = (state_16888[(7)]);
var inst_16867 = (state_16888[(8)]);
var inst_16867__$1 = (state_16888[(2)]);
var inst_16868__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16867__$1,(0),null);
var inst_16869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16867__$1,(1),null);
var inst_16870 = (inst_16868__$1 == null);
var state_16888__$1 = (function (){var statearr_16890 = state_16888;
(statearr_16890[(7)] = inst_16868__$1);

(statearr_16890[(8)] = inst_16867__$1);

(statearr_16890[(9)] = inst_16869);

return statearr_16890;
})();
if(cljs.core.truth_(inst_16870)){
var statearr_16891_17636 = state_16888__$1;
(statearr_16891_17636[(1)] = (8));

} else {
var statearr_16892_17637 = state_16888__$1;
(statearr_16892_17637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (1))){
var inst_16857 = cljs.core.vec(chs);
var inst_16858 = inst_16857;
var state_16888__$1 = (function (){var statearr_16893 = state_16888;
(statearr_16893[(10)] = inst_16858);

return statearr_16893;
})();
var statearr_16894_17638 = state_16888__$1;
(statearr_16894_17638[(2)] = null);

(statearr_16894_17638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (4))){
var inst_16858 = (state_16888[(10)]);
var state_16888__$1 = state_16888;
return cljs.core.async.ioc_alts_BANG_(state_16888__$1,(7),inst_16858);
} else {
if((state_val_16889 === (6))){
var inst_16884 = (state_16888[(2)]);
var state_16888__$1 = state_16888;
var statearr_16895_17639 = state_16888__$1;
(statearr_16895_17639[(2)] = inst_16884);

(statearr_16895_17639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (3))){
var inst_16886 = (state_16888[(2)]);
var state_16888__$1 = state_16888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16888__$1,inst_16886);
} else {
if((state_val_16889 === (2))){
var inst_16858 = (state_16888[(10)]);
var inst_16860 = cljs.core.count(inst_16858);
var inst_16861 = (inst_16860 > (0));
var state_16888__$1 = state_16888;
if(cljs.core.truth_(inst_16861)){
var statearr_16897_17640 = state_16888__$1;
(statearr_16897_17640[(1)] = (4));

} else {
var statearr_16898_17641 = state_16888__$1;
(statearr_16898_17641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (11))){
var inst_16858 = (state_16888[(10)]);
var inst_16877 = (state_16888[(2)]);
var tmp16896 = inst_16858;
var inst_16858__$1 = tmp16896;
var state_16888__$1 = (function (){var statearr_16899 = state_16888;
(statearr_16899[(10)] = inst_16858__$1);

(statearr_16899[(11)] = inst_16877);

return statearr_16899;
})();
var statearr_16900_17642 = state_16888__$1;
(statearr_16900_17642[(2)] = null);

(statearr_16900_17642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (9))){
var inst_16868 = (state_16888[(7)]);
var state_16888__$1 = state_16888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16888__$1,(11),out,inst_16868);
} else {
if((state_val_16889 === (5))){
var inst_16882 = cljs.core.async.close_BANG_(out);
var state_16888__$1 = state_16888;
var statearr_16901_17643 = state_16888__$1;
(statearr_16901_17643[(2)] = inst_16882);

(statearr_16901_17643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (10))){
var inst_16880 = (state_16888[(2)]);
var state_16888__$1 = state_16888;
var statearr_16902_17644 = state_16888__$1;
(statearr_16902_17644[(2)] = inst_16880);

(statearr_16902_17644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (8))){
var inst_16858 = (state_16888[(10)]);
var inst_16868 = (state_16888[(7)]);
var inst_16867 = (state_16888[(8)]);
var inst_16869 = (state_16888[(9)]);
var inst_16872 = (function (){var cs = inst_16858;
var vec__16863 = inst_16867;
var v = inst_16868;
var c = inst_16869;
return (function (p1__16854_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16854_SHARP_);
});
})();
var inst_16873 = cljs.core.filterv(inst_16872,inst_16858);
var inst_16858__$1 = inst_16873;
var state_16888__$1 = (function (){var statearr_16903 = state_16888;
(statearr_16903[(10)] = inst_16858__$1);

return statearr_16903;
})();
var statearr_16904_17645 = state_16888__$1;
(statearr_16904_17645[(2)] = null);

(statearr_16904_17645[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_16905 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16905[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_16905[(1)] = (1));

return statearr_16905;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_16888){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16888);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16906){var ex__15802__auto__ = e16906;
var statearr_16907_17646 = state_16888;
(statearr_16907_17646[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16888[(4)]))){
var statearr_16908_17647 = state_16888;
(statearr_16908_17647[(1)] = cljs.core.first((state_16888[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17648 = state_16888;
state_16888 = G__17648;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_16888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_16888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16909 = f__15835__auto__();
(statearr_16909[(6)] = c__15834__auto___17635);

return statearr_16909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16911 = arguments.length;
switch (G__16911) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15834__auto___17650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16935){
var state_val_16936 = (state_16935[(1)]);
if((state_val_16936 === (7))){
var inst_16917 = (state_16935[(7)]);
var inst_16917__$1 = (state_16935[(2)]);
var inst_16918 = (inst_16917__$1 == null);
var inst_16919 = cljs.core.not(inst_16918);
var state_16935__$1 = (function (){var statearr_16937 = state_16935;
(statearr_16937[(7)] = inst_16917__$1);

return statearr_16937;
})();
if(inst_16919){
var statearr_16938_17651 = state_16935__$1;
(statearr_16938_17651[(1)] = (8));

} else {
var statearr_16939_17652 = state_16935__$1;
(statearr_16939_17652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (1))){
var inst_16912 = (0);
var state_16935__$1 = (function (){var statearr_16940 = state_16935;
(statearr_16940[(8)] = inst_16912);

return statearr_16940;
})();
var statearr_16941_17653 = state_16935__$1;
(statearr_16941_17653[(2)] = null);

(statearr_16941_17653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (4))){
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16935__$1,(7),ch);
} else {
if((state_val_16936 === (6))){
var inst_16930 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16942_17654 = state_16935__$1;
(statearr_16942_17654[(2)] = inst_16930);

(statearr_16942_17654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (3))){
var inst_16932 = (state_16935[(2)]);
var inst_16933 = cljs.core.async.close_BANG_(out);
var state_16935__$1 = (function (){var statearr_16943 = state_16935;
(statearr_16943[(9)] = inst_16932);

return statearr_16943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16935__$1,inst_16933);
} else {
if((state_val_16936 === (2))){
var inst_16912 = (state_16935[(8)]);
var inst_16914 = (inst_16912 < n);
var state_16935__$1 = state_16935;
if(cljs.core.truth_(inst_16914)){
var statearr_16944_17655 = state_16935__$1;
(statearr_16944_17655[(1)] = (4));

} else {
var statearr_16945_17656 = state_16935__$1;
(statearr_16945_17656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (11))){
var inst_16912 = (state_16935[(8)]);
var inst_16922 = (state_16935[(2)]);
var inst_16923 = (inst_16912 + (1));
var inst_16912__$1 = inst_16923;
var state_16935__$1 = (function (){var statearr_16946 = state_16935;
(statearr_16946[(8)] = inst_16912__$1);

(statearr_16946[(10)] = inst_16922);

return statearr_16946;
})();
var statearr_16947_17657 = state_16935__$1;
(statearr_16947_17657[(2)] = null);

(statearr_16947_17657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (9))){
var state_16935__$1 = state_16935;
var statearr_16948_17658 = state_16935__$1;
(statearr_16948_17658[(2)] = null);

(statearr_16948_17658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (5))){
var state_16935__$1 = state_16935;
var statearr_16949_17659 = state_16935__$1;
(statearr_16949_17659[(2)] = null);

(statearr_16949_17659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (10))){
var inst_16927 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16950_17660 = state_16935__$1;
(statearr_16950_17660[(2)] = inst_16927);

(statearr_16950_17660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (8))){
var inst_16917 = (state_16935[(7)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16935__$1,(11),out,inst_16917);
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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_16951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16951[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_16951[(1)] = (1));

return statearr_16951;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_16935){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16935);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e16952){var ex__15802__auto__ = e16952;
var statearr_16953_17661 = state_16935;
(statearr_16953_17661[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16935[(4)]))){
var statearr_16954_17662 = state_16935;
(statearr_16954_17662[(1)] = cljs.core.first((state_16935[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17663 = state_16935;
state_16935 = G__17663;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_16955 = f__15835__auto__();
(statearr_16955[(6)] = c__15834__auto___17650);

return statearr_16955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16957 = (function (f,ch,meta16958){
this.f = f;
this.ch = ch;
this.meta16958 = meta16958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16959,meta16958__$1){
var self__ = this;
var _16959__$1 = this;
return (new cljs.core.async.t_cljs$core$async16957(self__.f,self__.ch,meta16958__$1));
}));

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16959){
var self__ = this;
var _16959__$1 = this;
return self__.meta16958;
}));

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16960 = (function (f,ch,meta16958,_,fn1,meta16961){
this.f = f;
this.ch = ch;
this.meta16958 = meta16958;
this._ = _;
this.fn1 = fn1;
this.meta16961 = meta16961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16962,meta16961__$1){
var self__ = this;
var _16962__$1 = this;
return (new cljs.core.async.t_cljs$core$async16960(self__.f,self__.ch,self__.meta16958,self__._,self__.fn1,meta16961__$1));
}));

(cljs.core.async.t_cljs$core$async16960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16962){
var self__ = this;
var _16962__$1 = this;
return self__.meta16961;
}));

(cljs.core.async.t_cljs$core$async16960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16956_SHARP_){
var G__16963 = (((p1__16956_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16956_SHARP_) : self__.f.call(null,p1__16956_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16963) : f1.call(null,G__16963));
});
}));

(cljs.core.async.t_cljs$core$async16960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16958","meta16958",689500766,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16957","cljs.core.async/t_cljs$core$async16957",-37633234,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16961","meta16961",753247361,null)], null);
}));

(cljs.core.async.t_cljs$core$async16960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16960");

(cljs.core.async.t_cljs$core$async16960.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16960.
 */
cljs.core.async.__GT_t_cljs$core$async16960 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16960(f__$1,ch__$1,meta16958__$1,___$2,fn1__$1,meta16961){
return (new cljs.core.async.t_cljs$core$async16960(f__$1,ch__$1,meta16958__$1,___$2,fn1__$1,meta16961));
});

}

return (new cljs.core.async.t_cljs$core$async16960(self__.f,self__.ch,self__.meta16958,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16964 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16964) : self__.f.call(null,G__16964));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16958","meta16958",689500766,null)], null);
}));

(cljs.core.async.t_cljs$core$async16957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16957");

(cljs.core.async.t_cljs$core$async16957.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16957.
 */
cljs.core.async.__GT_t_cljs$core$async16957 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16957(f__$1,ch__$1,meta16958){
return (new cljs.core.async.t_cljs$core$async16957(f__$1,ch__$1,meta16958));
});

}

return (new cljs.core.async.t_cljs$core$async16957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16965 = (function (f,ch,meta16966){
this.f = f;
this.ch = ch;
this.meta16966 = meta16966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16967,meta16966__$1){
var self__ = this;
var _16967__$1 = this;
return (new cljs.core.async.t_cljs$core$async16965(self__.f,self__.ch,meta16966__$1));
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16967){
var self__ = this;
var _16967__$1 = this;
return self__.meta16966;
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16966","meta16966",-1602129733,null)], null);
}));

(cljs.core.async.t_cljs$core$async16965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16965");

(cljs.core.async.t_cljs$core$async16965.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16965.
 */
cljs.core.async.__GT_t_cljs$core$async16965 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16965(f__$1,ch__$1,meta16966){
return (new cljs.core.async.t_cljs$core$async16965(f__$1,ch__$1,meta16966));
});

}

return (new cljs.core.async.t_cljs$core$async16965(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16968 = (function (p,ch,meta16969){
this.p = p;
this.ch = ch;
this.meta16969 = meta16969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16970,meta16969__$1){
var self__ = this;
var _16970__$1 = this;
return (new cljs.core.async.t_cljs$core$async16968(self__.p,self__.ch,meta16969__$1));
}));

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16970){
var self__ = this;
var _16970__$1 = this;
return self__.meta16969;
}));

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16969","meta16969",-519190218,null)], null);
}));

(cljs.core.async.t_cljs$core$async16968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16968");

(cljs.core.async.t_cljs$core$async16968.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async16968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16968.
 */
cljs.core.async.__GT_t_cljs$core$async16968 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16968(p__$1,ch__$1,meta16969){
return (new cljs.core.async.t_cljs$core$async16968(p__$1,ch__$1,meta16969));
});

}

return (new cljs.core.async.t_cljs$core$async16968(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16972 = arguments.length;
switch (G__16972) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15834__auto___17665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_16993){
var state_val_16994 = (state_16993[(1)]);
if((state_val_16994 === (7))){
var inst_16989 = (state_16993[(2)]);
var state_16993__$1 = state_16993;
var statearr_16995_17666 = state_16993__$1;
(statearr_16995_17666[(2)] = inst_16989);

(statearr_16995_17666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (1))){
var state_16993__$1 = state_16993;
var statearr_16996_17667 = state_16993__$1;
(statearr_16996_17667[(2)] = null);

(statearr_16996_17667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (4))){
var inst_16975 = (state_16993[(7)]);
var inst_16975__$1 = (state_16993[(2)]);
var inst_16976 = (inst_16975__$1 == null);
var state_16993__$1 = (function (){var statearr_16997 = state_16993;
(statearr_16997[(7)] = inst_16975__$1);

return statearr_16997;
})();
if(cljs.core.truth_(inst_16976)){
var statearr_16998_17668 = state_16993__$1;
(statearr_16998_17668[(1)] = (5));

} else {
var statearr_16999_17669 = state_16993__$1;
(statearr_16999_17669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (6))){
var inst_16975 = (state_16993[(7)]);
var inst_16980 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16975) : p.call(null,inst_16975));
var state_16993__$1 = state_16993;
if(cljs.core.truth_(inst_16980)){
var statearr_17000_17670 = state_16993__$1;
(statearr_17000_17670[(1)] = (8));

} else {
var statearr_17001_17671 = state_16993__$1;
(statearr_17001_17671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (3))){
var inst_16991 = (state_16993[(2)]);
var state_16993__$1 = state_16993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16993__$1,inst_16991);
} else {
if((state_val_16994 === (2))){
var state_16993__$1 = state_16993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16993__$1,(4),ch);
} else {
if((state_val_16994 === (11))){
var inst_16983 = (state_16993[(2)]);
var state_16993__$1 = state_16993;
var statearr_17002_17672 = state_16993__$1;
(statearr_17002_17672[(2)] = inst_16983);

(statearr_17002_17672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (9))){
var state_16993__$1 = state_16993;
var statearr_17003_17673 = state_16993__$1;
(statearr_17003_17673[(2)] = null);

(statearr_17003_17673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (5))){
var inst_16978 = cljs.core.async.close_BANG_(out);
var state_16993__$1 = state_16993;
var statearr_17004_17674 = state_16993__$1;
(statearr_17004_17674[(2)] = inst_16978);

(statearr_17004_17674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (10))){
var inst_16986 = (state_16993[(2)]);
var state_16993__$1 = (function (){var statearr_17005 = state_16993;
(statearr_17005[(8)] = inst_16986);

return statearr_17005;
})();
var statearr_17006_17675 = state_16993__$1;
(statearr_17006_17675[(2)] = null);

(statearr_17006_17675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16994 === (8))){
var inst_16975 = (state_16993[(7)]);
var state_16993__$1 = state_16993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16993__$1,(11),out,inst_16975);
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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_17007 = [null,null,null,null,null,null,null,null,null];
(statearr_17007[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_17007[(1)] = (1));

return statearr_17007;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_16993){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_16993);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e17008){var ex__15802__auto__ = e17008;
var statearr_17009_17676 = state_16993;
(statearr_17009_17676[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_16993[(4)]))){
var statearr_17010_17677 = state_16993;
(statearr_17010_17677[(1)] = cljs.core.first((state_16993[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17678 = state_16993;
state_16993 = G__17678;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_16993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_16993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_17011 = f__15835__auto__();
(statearr_17011[(6)] = c__15834__auto___17665);

return statearr_17011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17013 = arguments.length;
switch (G__17013) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15834__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_17075){
var state_val_17076 = (state_17075[(1)]);
if((state_val_17076 === (7))){
var inst_17071 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17077_17680 = state_17075__$1;
(statearr_17077_17680[(2)] = inst_17071);

(statearr_17077_17680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (20))){
var inst_17041 = (state_17075[(7)]);
var inst_17052 = (state_17075[(2)]);
var inst_17053 = cljs.core.next(inst_17041);
var inst_17027 = inst_17053;
var inst_17028 = null;
var inst_17029 = (0);
var inst_17030 = (0);
var state_17075__$1 = (function (){var statearr_17078 = state_17075;
(statearr_17078[(8)] = inst_17030);

(statearr_17078[(9)] = inst_17052);

(statearr_17078[(10)] = inst_17028);

(statearr_17078[(11)] = inst_17027);

(statearr_17078[(12)] = inst_17029);

return statearr_17078;
})();
var statearr_17079_17681 = state_17075__$1;
(statearr_17079_17681[(2)] = null);

(statearr_17079_17681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (1))){
var state_17075__$1 = state_17075;
var statearr_17080_17682 = state_17075__$1;
(statearr_17080_17682[(2)] = null);

(statearr_17080_17682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (4))){
var inst_17016 = (state_17075[(13)]);
var inst_17016__$1 = (state_17075[(2)]);
var inst_17017 = (inst_17016__$1 == null);
var state_17075__$1 = (function (){var statearr_17081 = state_17075;
(statearr_17081[(13)] = inst_17016__$1);

return statearr_17081;
})();
if(cljs.core.truth_(inst_17017)){
var statearr_17082_17683 = state_17075__$1;
(statearr_17082_17683[(1)] = (5));

} else {
var statearr_17083_17684 = state_17075__$1;
(statearr_17083_17684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (15))){
var state_17075__$1 = state_17075;
var statearr_17087_17685 = state_17075__$1;
(statearr_17087_17685[(2)] = null);

(statearr_17087_17685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (21))){
var state_17075__$1 = state_17075;
var statearr_17088_17686 = state_17075__$1;
(statearr_17088_17686[(2)] = null);

(statearr_17088_17686[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (13))){
var inst_17030 = (state_17075[(8)]);
var inst_17028 = (state_17075[(10)]);
var inst_17027 = (state_17075[(11)]);
var inst_17029 = (state_17075[(12)]);
var inst_17037 = (state_17075[(2)]);
var inst_17038 = (inst_17030 + (1));
var tmp17084 = inst_17028;
var tmp17085 = inst_17027;
var tmp17086 = inst_17029;
var inst_17027__$1 = tmp17085;
var inst_17028__$1 = tmp17084;
var inst_17029__$1 = tmp17086;
var inst_17030__$1 = inst_17038;
var state_17075__$1 = (function (){var statearr_17089 = state_17075;
(statearr_17089[(8)] = inst_17030__$1);

(statearr_17089[(10)] = inst_17028__$1);

(statearr_17089[(11)] = inst_17027__$1);

(statearr_17089[(12)] = inst_17029__$1);

(statearr_17089[(14)] = inst_17037);

return statearr_17089;
})();
var statearr_17090_17687 = state_17075__$1;
(statearr_17090_17687[(2)] = null);

(statearr_17090_17687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (22))){
var state_17075__$1 = state_17075;
var statearr_17091_17688 = state_17075__$1;
(statearr_17091_17688[(2)] = null);

(statearr_17091_17688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (6))){
var inst_17016 = (state_17075[(13)]);
var inst_17025 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17016) : f.call(null,inst_17016));
var inst_17026 = cljs.core.seq(inst_17025);
var inst_17027 = inst_17026;
var inst_17028 = null;
var inst_17029 = (0);
var inst_17030 = (0);
var state_17075__$1 = (function (){var statearr_17092 = state_17075;
(statearr_17092[(8)] = inst_17030);

(statearr_17092[(10)] = inst_17028);

(statearr_17092[(11)] = inst_17027);

(statearr_17092[(12)] = inst_17029);

return statearr_17092;
})();
var statearr_17093_17689 = state_17075__$1;
(statearr_17093_17689[(2)] = null);

(statearr_17093_17689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (17))){
var inst_17041 = (state_17075[(7)]);
var inst_17045 = cljs.core.chunk_first(inst_17041);
var inst_17046 = cljs.core.chunk_rest(inst_17041);
var inst_17047 = cljs.core.count(inst_17045);
var inst_17027 = inst_17046;
var inst_17028 = inst_17045;
var inst_17029 = inst_17047;
var inst_17030 = (0);
var state_17075__$1 = (function (){var statearr_17094 = state_17075;
(statearr_17094[(8)] = inst_17030);

(statearr_17094[(10)] = inst_17028);

(statearr_17094[(11)] = inst_17027);

(statearr_17094[(12)] = inst_17029);

return statearr_17094;
})();
var statearr_17095_17690 = state_17075__$1;
(statearr_17095_17690[(2)] = null);

(statearr_17095_17690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (3))){
var inst_17073 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17075__$1,inst_17073);
} else {
if((state_val_17076 === (12))){
var inst_17061 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17096_17691 = state_17075__$1;
(statearr_17096_17691[(2)] = inst_17061);

(statearr_17096_17691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (2))){
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17075__$1,(4),in$);
} else {
if((state_val_17076 === (23))){
var inst_17069 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17097_17692 = state_17075__$1;
(statearr_17097_17692[(2)] = inst_17069);

(statearr_17097_17692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (19))){
var inst_17056 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17098_17693 = state_17075__$1;
(statearr_17098_17693[(2)] = inst_17056);

(statearr_17098_17693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (11))){
var inst_17041 = (state_17075[(7)]);
var inst_17027 = (state_17075[(11)]);
var inst_17041__$1 = cljs.core.seq(inst_17027);
var state_17075__$1 = (function (){var statearr_17099 = state_17075;
(statearr_17099[(7)] = inst_17041__$1);

return statearr_17099;
})();
if(inst_17041__$1){
var statearr_17100_17694 = state_17075__$1;
(statearr_17100_17694[(1)] = (14));

} else {
var statearr_17101_17695 = state_17075__$1;
(statearr_17101_17695[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (9))){
var inst_17063 = (state_17075[(2)]);
var inst_17064 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17075__$1 = (function (){var statearr_17102 = state_17075;
(statearr_17102[(15)] = inst_17063);

return statearr_17102;
})();
if(cljs.core.truth_(inst_17064)){
var statearr_17103_17696 = state_17075__$1;
(statearr_17103_17696[(1)] = (21));

} else {
var statearr_17104_17697 = state_17075__$1;
(statearr_17104_17697[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (5))){
var inst_17019 = cljs.core.async.close_BANG_(out);
var state_17075__$1 = state_17075;
var statearr_17105_17698 = state_17075__$1;
(statearr_17105_17698[(2)] = inst_17019);

(statearr_17105_17698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (14))){
var inst_17041 = (state_17075[(7)]);
var inst_17043 = cljs.core.chunked_seq_QMARK_(inst_17041);
var state_17075__$1 = state_17075;
if(inst_17043){
var statearr_17106_17699 = state_17075__$1;
(statearr_17106_17699[(1)] = (17));

} else {
var statearr_17107_17700 = state_17075__$1;
(statearr_17107_17700[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (16))){
var inst_17059 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17108_17701 = state_17075__$1;
(statearr_17108_17701[(2)] = inst_17059);

(statearr_17108_17701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (10))){
var inst_17030 = (state_17075[(8)]);
var inst_17028 = (state_17075[(10)]);
var inst_17035 = cljs.core._nth(inst_17028,inst_17030);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17075__$1,(13),out,inst_17035);
} else {
if((state_val_17076 === (18))){
var inst_17041 = (state_17075[(7)]);
var inst_17050 = cljs.core.first(inst_17041);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17075__$1,(20),out,inst_17050);
} else {
if((state_val_17076 === (8))){
var inst_17030 = (state_17075[(8)]);
var inst_17029 = (state_17075[(12)]);
var inst_17032 = (inst_17030 < inst_17029);
var inst_17033 = inst_17032;
var state_17075__$1 = state_17075;
if(cljs.core.truth_(inst_17033)){
var statearr_17109_17702 = state_17075__$1;
(statearr_17109_17702[(1)] = (10));

} else {
var statearr_17110_17703 = state_17075__$1;
(statearr_17110_17703[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15799__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15799__auto____0 = (function (){
var statearr_17111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17111[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15799__auto__);

(statearr_17111[(1)] = (1));

return statearr_17111;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15799__auto____1 = (function (state_17075){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_17075);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e17112){var ex__15802__auto__ = e17112;
var statearr_17113_17704 = state_17075;
(statearr_17113_17704[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_17075[(4)]))){
var statearr_17114_17705 = state_17075;
(statearr_17114_17705[(1)] = cljs.core.first((state_17075[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17706 = state_17075;
state_17075 = G__17706;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15799__auto__ = function(state_17075){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15799__auto____1.call(this,state_17075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15799__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15799__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_17115 = f__15835__auto__();
(statearr_17115[(6)] = c__15834__auto__);

return statearr_17115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));

return c__15834__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17117 = arguments.length;
switch (G__17117) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17119 = arguments.length;
switch (G__17119) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17121 = arguments.length;
switch (G__17121) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15834__auto___17710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_17145){
var state_val_17146 = (state_17145[(1)]);
if((state_val_17146 === (7))){
var inst_17140 = (state_17145[(2)]);
var state_17145__$1 = state_17145;
var statearr_17147_17711 = state_17145__$1;
(statearr_17147_17711[(2)] = inst_17140);

(statearr_17147_17711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17146 === (1))){
var inst_17122 = null;
var state_17145__$1 = (function (){var statearr_17148 = state_17145;
(statearr_17148[(7)] = inst_17122);

return statearr_17148;
})();
var statearr_17149_17712 = state_17145__$1;
(statearr_17149_17712[(2)] = null);

(statearr_17149_17712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17146 === (4))){
var inst_17125 = (state_17145[(8)]);
var inst_17125__$1 = (state_17145[(2)]);
var inst_17126 = (inst_17125__$1 == null);
var inst_17127 = cljs.core.not(inst_17126);
var state_17145__$1 = (function (){var statearr_17150 = state_17145;
(statearr_17150[(8)] = inst_17125__$1);

return statearr_17150;
})();
if(inst_17127){
var statearr_17151_17713 = state_17145__$1;
(statearr_17151_17713[(1)] = (5));

} else {
var statearr_17152_17714 = state_17145__$1;
(statearr_17152_17714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17146 === (6))){
var state_17145__$1 = state_17145;
var statearr_17153_17715 = state_17145__$1;
(statearr_17153_17715[(2)] = null);

(statearr_17153_17715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17146 === (3))){
var inst_17142 = (state_17145[(2)]);
var inst_17143 = cljs.core.async.close_BANG_(out);
var state_17145__$1 = (function (){var statearr_17154 = state_17145;
(statearr_17154[(9)] = inst_17142);

return statearr_17154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17145__$1,inst_17143);
} else {
if((state_val_17146 === (2))){
var state_17145__$1 = state_17145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17145__$1,(4),ch);
} else {
if((state_val_17146 === (11))){
var inst_17125 = (state_17145[(8)]);
var inst_17134 = (state_17145[(2)]);
var inst_17122 = inst_17125;
var state_17145__$1 = (function (){var statearr_17155 = state_17145;
(statearr_17155[(7)] = inst_17122);

(statearr_17155[(10)] = inst_17134);

return statearr_17155;
})();
var statearr_17156_17716 = state_17145__$1;
(statearr_17156_17716[(2)] = null);

(statearr_17156_17716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17146 === (9))){
var inst_17125 = (state_17145[(8)]);
var state_17145__$1 = state_17145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17145__$1,(11),out,inst_17125);
} else {
if((state_val_17146 === (5))){
var inst_17125 = (state_17145[(8)]);
var inst_17122 = (state_17145[(7)]);
var inst_17129 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17125,inst_17122);
var state_17145__$1 = state_17145;
if(inst_17129){
var statearr_17158_17717 = state_17145__$1;
(statearr_17158_17717[(1)] = (8));

} else {
var statearr_17159_17718 = state_17145__$1;
(statearr_17159_17718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17146 === (10))){
var inst_17137 = (state_17145[(2)]);
var state_17145__$1 = state_17145;
var statearr_17160_17719 = state_17145__$1;
(statearr_17160_17719[(2)] = inst_17137);

(statearr_17160_17719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17146 === (8))){
var inst_17122 = (state_17145[(7)]);
var tmp17157 = inst_17122;
var inst_17122__$1 = tmp17157;
var state_17145__$1 = (function (){var statearr_17161 = state_17145;
(statearr_17161[(7)] = inst_17122__$1);

return statearr_17161;
})();
var statearr_17162_17720 = state_17145__$1;
(statearr_17162_17720[(2)] = null);

(statearr_17162_17720[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_17163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17163[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_17163[(1)] = (1));

return statearr_17163;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_17145){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_17145);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e17164){var ex__15802__auto__ = e17164;
var statearr_17165_17721 = state_17145;
(statearr_17165_17721[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_17145[(4)]))){
var statearr_17166_17722 = state_17145;
(statearr_17166_17722[(1)] = cljs.core.first((state_17145[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17723 = state_17145;
state_17145 = G__17723;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_17145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_17145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_17167 = f__15835__auto__();
(statearr_17167[(6)] = c__15834__auto___17710);

return statearr_17167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17169 = arguments.length;
switch (G__17169) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15834__auto___17725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_17207){
var state_val_17208 = (state_17207[(1)]);
if((state_val_17208 === (7))){
var inst_17203 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
var statearr_17209_17726 = state_17207__$1;
(statearr_17209_17726[(2)] = inst_17203);

(statearr_17209_17726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (1))){
var inst_17170 = (new Array(n));
var inst_17171 = inst_17170;
var inst_17172 = (0);
var state_17207__$1 = (function (){var statearr_17210 = state_17207;
(statearr_17210[(7)] = inst_17171);

(statearr_17210[(8)] = inst_17172);

return statearr_17210;
})();
var statearr_17211_17727 = state_17207__$1;
(statearr_17211_17727[(2)] = null);

(statearr_17211_17727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (4))){
var inst_17175 = (state_17207[(9)]);
var inst_17175__$1 = (state_17207[(2)]);
var inst_17176 = (inst_17175__$1 == null);
var inst_17177 = cljs.core.not(inst_17176);
var state_17207__$1 = (function (){var statearr_17212 = state_17207;
(statearr_17212[(9)] = inst_17175__$1);

return statearr_17212;
})();
if(inst_17177){
var statearr_17213_17728 = state_17207__$1;
(statearr_17213_17728[(1)] = (5));

} else {
var statearr_17214_17729 = state_17207__$1;
(statearr_17214_17729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (15))){
var inst_17197 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
var statearr_17215_17730 = state_17207__$1;
(statearr_17215_17730[(2)] = inst_17197);

(statearr_17215_17730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (13))){
var state_17207__$1 = state_17207;
var statearr_17216_17731 = state_17207__$1;
(statearr_17216_17731[(2)] = null);

(statearr_17216_17731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (6))){
var inst_17172 = (state_17207[(8)]);
var inst_17193 = (inst_17172 > (0));
var state_17207__$1 = state_17207;
if(cljs.core.truth_(inst_17193)){
var statearr_17217_17732 = state_17207__$1;
(statearr_17217_17732[(1)] = (12));

} else {
var statearr_17218_17733 = state_17207__$1;
(statearr_17218_17733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (3))){
var inst_17205 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17207__$1,inst_17205);
} else {
if((state_val_17208 === (12))){
var inst_17171 = (state_17207[(7)]);
var inst_17195 = cljs.core.vec(inst_17171);
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17207__$1,(15),out,inst_17195);
} else {
if((state_val_17208 === (2))){
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17207__$1,(4),ch);
} else {
if((state_val_17208 === (11))){
var inst_17187 = (state_17207[(2)]);
var inst_17188 = (new Array(n));
var inst_17171 = inst_17188;
var inst_17172 = (0);
var state_17207__$1 = (function (){var statearr_17219 = state_17207;
(statearr_17219[(10)] = inst_17187);

(statearr_17219[(7)] = inst_17171);

(statearr_17219[(8)] = inst_17172);

return statearr_17219;
})();
var statearr_17220_17734 = state_17207__$1;
(statearr_17220_17734[(2)] = null);

(statearr_17220_17734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (9))){
var inst_17171 = (state_17207[(7)]);
var inst_17185 = cljs.core.vec(inst_17171);
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17207__$1,(11),out,inst_17185);
} else {
if((state_val_17208 === (5))){
var inst_17175 = (state_17207[(9)]);
var inst_17180 = (state_17207[(11)]);
var inst_17171 = (state_17207[(7)]);
var inst_17172 = (state_17207[(8)]);
var inst_17179 = (inst_17171[inst_17172] = inst_17175);
var inst_17180__$1 = (inst_17172 + (1));
var inst_17181 = (inst_17180__$1 < n);
var state_17207__$1 = (function (){var statearr_17221 = state_17207;
(statearr_17221[(11)] = inst_17180__$1);

(statearr_17221[(12)] = inst_17179);

return statearr_17221;
})();
if(cljs.core.truth_(inst_17181)){
var statearr_17222_17735 = state_17207__$1;
(statearr_17222_17735[(1)] = (8));

} else {
var statearr_17223_17736 = state_17207__$1;
(statearr_17223_17736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (14))){
var inst_17200 = (state_17207[(2)]);
var inst_17201 = cljs.core.async.close_BANG_(out);
var state_17207__$1 = (function (){var statearr_17225 = state_17207;
(statearr_17225[(13)] = inst_17200);

return statearr_17225;
})();
var statearr_17226_17737 = state_17207__$1;
(statearr_17226_17737[(2)] = inst_17201);

(statearr_17226_17737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (10))){
var inst_17191 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
var statearr_17227_17738 = state_17207__$1;
(statearr_17227_17738[(2)] = inst_17191);

(statearr_17227_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (8))){
var inst_17180 = (state_17207[(11)]);
var inst_17171 = (state_17207[(7)]);
var tmp17224 = inst_17171;
var inst_17171__$1 = tmp17224;
var inst_17172 = inst_17180;
var state_17207__$1 = (function (){var statearr_17228 = state_17207;
(statearr_17228[(7)] = inst_17171__$1);

(statearr_17228[(8)] = inst_17172);

return statearr_17228;
})();
var statearr_17229_17739 = state_17207__$1;
(statearr_17229_17739[(2)] = null);

(statearr_17229_17739[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_17230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17230[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_17230[(1)] = (1));

return statearr_17230;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_17207){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_17207);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e17231){var ex__15802__auto__ = e17231;
var statearr_17232_17740 = state_17207;
(statearr_17232_17740[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_17207[(4)]))){
var statearr_17233_17741 = state_17207;
(statearr_17233_17741[(1)] = cljs.core.first((state_17207[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17742 = state_17207;
state_17207 = G__17742;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_17207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_17207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_17234 = f__15835__auto__();
(statearr_17234[(6)] = c__15834__auto___17725);

return statearr_17234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17236 = arguments.length;
switch (G__17236) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15834__auto___17744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_17281){
var state_val_17282 = (state_17281[(1)]);
if((state_val_17282 === (7))){
var inst_17277 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17283_17745 = state_17281__$1;
(statearr_17283_17745[(2)] = inst_17277);

(statearr_17283_17745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (1))){
var inst_17237 = [];
var inst_17238 = inst_17237;
var inst_17239 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17281__$1 = (function (){var statearr_17284 = state_17281;
(statearr_17284[(7)] = inst_17238);

(statearr_17284[(8)] = inst_17239);

return statearr_17284;
})();
var statearr_17285_17746 = state_17281__$1;
(statearr_17285_17746[(2)] = null);

(statearr_17285_17746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (4))){
var inst_17242 = (state_17281[(9)]);
var inst_17242__$1 = (state_17281[(2)]);
var inst_17243 = (inst_17242__$1 == null);
var inst_17244 = cljs.core.not(inst_17243);
var state_17281__$1 = (function (){var statearr_17286 = state_17281;
(statearr_17286[(9)] = inst_17242__$1);

return statearr_17286;
})();
if(inst_17244){
var statearr_17287_17747 = state_17281__$1;
(statearr_17287_17747[(1)] = (5));

} else {
var statearr_17288_17748 = state_17281__$1;
(statearr_17288_17748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (15))){
var inst_17238 = (state_17281[(7)]);
var inst_17269 = cljs.core.vec(inst_17238);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(18),out,inst_17269);
} else {
if((state_val_17282 === (13))){
var inst_17264 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17289_17749 = state_17281__$1;
(statearr_17289_17749[(2)] = inst_17264);

(statearr_17289_17749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (6))){
var inst_17238 = (state_17281[(7)]);
var inst_17266 = inst_17238.length;
var inst_17267 = (inst_17266 > (0));
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17267)){
var statearr_17290_17750 = state_17281__$1;
(statearr_17290_17750[(1)] = (15));

} else {
var statearr_17291_17751 = state_17281__$1;
(statearr_17291_17751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (17))){
var inst_17274 = (state_17281[(2)]);
var inst_17275 = cljs.core.async.close_BANG_(out);
var state_17281__$1 = (function (){var statearr_17292 = state_17281;
(statearr_17292[(10)] = inst_17274);

return statearr_17292;
})();
var statearr_17293_17752 = state_17281__$1;
(statearr_17293_17752[(2)] = inst_17275);

(statearr_17293_17752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (3))){
var inst_17279 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17281__$1,inst_17279);
} else {
if((state_val_17282 === (12))){
var inst_17238 = (state_17281[(7)]);
var inst_17257 = cljs.core.vec(inst_17238);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(14),out,inst_17257);
} else {
if((state_val_17282 === (2))){
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17281__$1,(4),ch);
} else {
if((state_val_17282 === (11))){
var inst_17246 = (state_17281[(11)]);
var inst_17238 = (state_17281[(7)]);
var inst_17242 = (state_17281[(9)]);
var inst_17254 = inst_17238.push(inst_17242);
var tmp17294 = inst_17238;
var inst_17238__$1 = tmp17294;
var inst_17239 = inst_17246;
var state_17281__$1 = (function (){var statearr_17295 = state_17281;
(statearr_17295[(12)] = inst_17254);

(statearr_17295[(7)] = inst_17238__$1);

(statearr_17295[(8)] = inst_17239);

return statearr_17295;
})();
var statearr_17296_17753 = state_17281__$1;
(statearr_17296_17753[(2)] = null);

(statearr_17296_17753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (9))){
var inst_17239 = (state_17281[(8)]);
var inst_17250 = cljs.core.keyword_identical_QMARK_(inst_17239,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17281__$1 = state_17281;
var statearr_17297_17754 = state_17281__$1;
(statearr_17297_17754[(2)] = inst_17250);

(statearr_17297_17754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (5))){
var inst_17246 = (state_17281[(11)]);
var inst_17247 = (state_17281[(13)]);
var inst_17242 = (state_17281[(9)]);
var inst_17239 = (state_17281[(8)]);
var inst_17246__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17242) : f.call(null,inst_17242));
var inst_17247__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17246__$1,inst_17239);
var state_17281__$1 = (function (){var statearr_17298 = state_17281;
(statearr_17298[(11)] = inst_17246__$1);

(statearr_17298[(13)] = inst_17247__$1);

return statearr_17298;
})();
if(inst_17247__$1){
var statearr_17299_17755 = state_17281__$1;
(statearr_17299_17755[(1)] = (8));

} else {
var statearr_17300_17756 = state_17281__$1;
(statearr_17300_17756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (14))){
var inst_17246 = (state_17281[(11)]);
var inst_17242 = (state_17281[(9)]);
var inst_17259 = (state_17281[(2)]);
var inst_17260 = [];
var inst_17261 = inst_17260.push(inst_17242);
var inst_17238 = inst_17260;
var inst_17239 = inst_17246;
var state_17281__$1 = (function (){var statearr_17301 = state_17281;
(statearr_17301[(14)] = inst_17259);

(statearr_17301[(15)] = inst_17261);

(statearr_17301[(7)] = inst_17238);

(statearr_17301[(8)] = inst_17239);

return statearr_17301;
})();
var statearr_17302_17757 = state_17281__$1;
(statearr_17302_17757[(2)] = null);

(statearr_17302_17757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (16))){
var state_17281__$1 = state_17281;
var statearr_17303_17758 = state_17281__$1;
(statearr_17303_17758[(2)] = null);

(statearr_17303_17758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (10))){
var inst_17252 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17252)){
var statearr_17304_17759 = state_17281__$1;
(statearr_17304_17759[(1)] = (11));

} else {
var statearr_17305_17760 = state_17281__$1;
(statearr_17305_17760[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (18))){
var inst_17271 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17306_17761 = state_17281__$1;
(statearr_17306_17761[(2)] = inst_17271);

(statearr_17306_17761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (8))){
var inst_17247 = (state_17281[(13)]);
var state_17281__$1 = state_17281;
var statearr_17307_17762 = state_17281__$1;
(statearr_17307_17762[(2)] = inst_17247);

(statearr_17307_17762[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__15799__auto__ = null;
var cljs$core$async$state_machine__15799__auto____0 = (function (){
var statearr_17308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17308[(0)] = cljs$core$async$state_machine__15799__auto__);

(statearr_17308[(1)] = (1));

return statearr_17308;
});
var cljs$core$async$state_machine__15799__auto____1 = (function (state_17281){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_17281);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e17309){var ex__15802__auto__ = e17309;
var statearr_17310_17763 = state_17281;
(statearr_17310_17763[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_17281[(4)]))){
var statearr_17311_17764 = state_17281;
(statearr_17311_17764[(1)] = cljs.core.first((state_17281[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17765 = state_17281;
state_17281 = G__17765;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
cljs$core$async$state_machine__15799__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15799__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15799__auto____0;
cljs$core$async$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15799__auto____1;
return cljs$core$async$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_17312 = f__15835__auto__();
(statearr_17312[(6)] = c__15834__auto___17744);

return statearr_17312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
