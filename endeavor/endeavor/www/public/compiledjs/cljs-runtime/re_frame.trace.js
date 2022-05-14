goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22364){
var map__22365 = p__22364;
var map__22365__$1 = cljs.core.__destructure_map(map__22365);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22365__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22365__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22365__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22365__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22366_22393 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22367_22394 = null;
var count__22368_22395 = (0);
var i__22369_22396 = (0);
while(true){
if((i__22369_22396 < count__22368_22395)){
var vec__22380_22397 = chunk__22367_22394.cljs$core$IIndexed$_nth$arity$2(null,i__22369_22396);
var k_22398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22380_22397,(0),null);
var cb_22399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22380_22397,(1),null);
try{var G__22384_22400 = cljs.core.deref(re_frame.trace.traces);
(cb_22399.cljs$core$IFn$_invoke$arity$1 ? cb_22399.cljs$core$IFn$_invoke$arity$1(G__22384_22400) : cb_22399.call(null,G__22384_22400));
}catch (e22383){var e_22401 = e22383;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22398,"while storing",cljs.core.deref(re_frame.trace.traces),e_22401], 0));
}

var G__22402 = seq__22366_22393;
var G__22403 = chunk__22367_22394;
var G__22404 = count__22368_22395;
var G__22405 = (i__22369_22396 + (1));
seq__22366_22393 = G__22402;
chunk__22367_22394 = G__22403;
count__22368_22395 = G__22404;
i__22369_22396 = G__22405;
continue;
} else {
var temp__5753__auto___22406 = cljs.core.seq(seq__22366_22393);
if(temp__5753__auto___22406){
var seq__22366_22407__$1 = temp__5753__auto___22406;
if(cljs.core.chunked_seq_QMARK_(seq__22366_22407__$1)){
var c__4679__auto___22408 = cljs.core.chunk_first(seq__22366_22407__$1);
var G__22409 = cljs.core.chunk_rest(seq__22366_22407__$1);
var G__22410 = c__4679__auto___22408;
var G__22411 = cljs.core.count(c__4679__auto___22408);
var G__22412 = (0);
seq__22366_22393 = G__22409;
chunk__22367_22394 = G__22410;
count__22368_22395 = G__22411;
i__22369_22396 = G__22412;
continue;
} else {
var vec__22385_22413 = cljs.core.first(seq__22366_22407__$1);
var k_22414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22385_22413,(0),null);
var cb_22415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22385_22413,(1),null);
try{var G__22389_22416 = cljs.core.deref(re_frame.trace.traces);
(cb_22415.cljs$core$IFn$_invoke$arity$1 ? cb_22415.cljs$core$IFn$_invoke$arity$1(G__22389_22416) : cb_22415.call(null,G__22389_22416));
}catch (e22388){var e_22417 = e22388;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22414,"while storing",cljs.core.deref(re_frame.trace.traces),e_22417], 0));
}

var G__22418 = cljs.core.next(seq__22366_22407__$1);
var G__22419 = null;
var G__22420 = (0);
var G__22421 = (0);
seq__22366_22393 = G__22418;
chunk__22367_22394 = G__22419;
count__22368_22395 = G__22420;
i__22369_22396 = G__22421;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
