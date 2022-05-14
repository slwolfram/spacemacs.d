goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__22636 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22637 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22637);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___22702 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___22702)){
var new_db_22703 = temp__5753__auto___22702;
var fexpr__22638_22704 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22638_22704.cljs$core$IFn$_invoke$arity$1 ? fexpr__22638_22704.cljs$core$IFn$_invoke$arity$1(new_db_22703) : fexpr__22638_22704.call(null,new_db_22703));
} else {
}

var seq__22639 = cljs.core.seq(effects_without_db);
var chunk__22640 = null;
var count__22641 = (0);
var i__22642 = (0);
while(true){
if((i__22642 < count__22641)){
var vec__22649 = chunk__22640.cljs$core$IIndexed$_nth$arity$2(null,i__22642);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22649,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22649,(1),null);
var temp__5751__auto___22705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___22705)){
var effect_fn_22706 = temp__5751__auto___22705;
(effect_fn_22706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22707 = seq__22639;
var G__22708 = chunk__22640;
var G__22709 = count__22641;
var G__22710 = (i__22642 + (1));
seq__22639 = G__22707;
chunk__22640 = G__22708;
count__22641 = G__22709;
i__22642 = G__22710;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22639);
if(temp__5753__auto__){
var seq__22639__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22639__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22639__$1);
var G__22711 = cljs.core.chunk_rest(seq__22639__$1);
var G__22712 = c__4679__auto__;
var G__22713 = cljs.core.count(c__4679__auto__);
var G__22714 = (0);
seq__22639 = G__22711;
chunk__22640 = G__22712;
count__22641 = G__22713;
i__22642 = G__22714;
continue;
} else {
var vec__22652 = cljs.core.first(seq__22639__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22652,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22652,(1),null);
var temp__5751__auto___22715 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___22715)){
var effect_fn_22716 = temp__5751__auto___22715;
(effect_fn_22716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22716.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22717 = cljs.core.next(seq__22639__$1);
var G__22718 = null;
var G__22719 = (0);
var G__22720 = (0);
seq__22639 = G__22717;
chunk__22640 = G__22718;
count__22641 = G__22719;
i__22642 = G__22720;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22344__auto___22721 = re_frame.interop.now();
var duration__22345__auto___22722 = (end__22344__auto___22721 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22345__auto___22722,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22344__auto___22721);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22636);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___22723 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___22723)){
var new_db_22724 = temp__5753__auto___22723;
var fexpr__22655_22725 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22655_22725.cljs$core$IFn$_invoke$arity$1 ? fexpr__22655_22725.cljs$core$IFn$_invoke$arity$1(new_db_22724) : fexpr__22655_22725.call(null,new_db_22724));
} else {
}

var seq__22656 = cljs.core.seq(effects_without_db);
var chunk__22657 = null;
var count__22658 = (0);
var i__22659 = (0);
while(true){
if((i__22659 < count__22658)){
var vec__22666 = chunk__22657.cljs$core$IIndexed$_nth$arity$2(null,i__22659);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22666,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22666,(1),null);
var temp__5751__auto___22726 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___22726)){
var effect_fn_22727 = temp__5751__auto___22726;
(effect_fn_22727.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22727.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22727.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22728 = seq__22656;
var G__22729 = chunk__22657;
var G__22730 = count__22658;
var G__22731 = (i__22659 + (1));
seq__22656 = G__22728;
chunk__22657 = G__22729;
count__22658 = G__22730;
i__22659 = G__22731;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22656);
if(temp__5753__auto__){
var seq__22656__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22656__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22656__$1);
var G__22732 = cljs.core.chunk_rest(seq__22656__$1);
var G__22733 = c__4679__auto__;
var G__22734 = cljs.core.count(c__4679__auto__);
var G__22735 = (0);
seq__22656 = G__22732;
chunk__22657 = G__22733;
count__22658 = G__22734;
i__22659 = G__22735;
continue;
} else {
var vec__22669 = cljs.core.first(seq__22656__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669,(1),null);
var temp__5751__auto___22736 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___22736)){
var effect_fn_22737 = temp__5751__auto___22736;
(effect_fn_22737.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22737.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22737.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22738 = cljs.core.next(seq__22656__$1);
var G__22739 = null;
var G__22740 = (0);
var G__22741 = (0);
seq__22656 = G__22738;
chunk__22657 = G__22739;
count__22658 = G__22740;
i__22659 = G__22741;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__22672){
var map__22673 = p__22672;
var map__22673__$1 = cljs.core.__destructure_map(map__22673);
var effect = map__22673__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22673__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22673__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__22674 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22675 = null;
var count__22676 = (0);
var i__22677 = (0);
while(true){
if((i__22677 < count__22676)){
var effect = chunk__22675.cljs$core$IIndexed$_nth$arity$2(null,i__22677);
re_frame.fx.dispatch_later(effect);


var G__22742 = seq__22674;
var G__22743 = chunk__22675;
var G__22744 = count__22676;
var G__22745 = (i__22677 + (1));
seq__22674 = G__22742;
chunk__22675 = G__22743;
count__22676 = G__22744;
i__22677 = G__22745;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22674);
if(temp__5753__auto__){
var seq__22674__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22674__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22674__$1);
var G__22746 = cljs.core.chunk_rest(seq__22674__$1);
var G__22747 = c__4679__auto__;
var G__22748 = cljs.core.count(c__4679__auto__);
var G__22749 = (0);
seq__22674 = G__22746;
chunk__22675 = G__22747;
count__22676 = G__22748;
i__22677 = G__22749;
continue;
} else {
var effect = cljs.core.first(seq__22674__$1);
re_frame.fx.dispatch_later(effect);


var G__22750 = cljs.core.next(seq__22674__$1);
var G__22751 = null;
var G__22752 = (0);
var G__22753 = (0);
seq__22674 = G__22750;
chunk__22675 = G__22751;
count__22676 = G__22752;
i__22677 = G__22753;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__22678 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__22679 = null;
var count__22680 = (0);
var i__22681 = (0);
while(true){
if((i__22681 < count__22680)){
var vec__22688 = chunk__22679.cljs$core$IIndexed$_nth$arity$2(null,i__22681);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___22754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___22754)){
var effect_fn_22755 = temp__5751__auto___22754;
(effect_fn_22755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22756 = seq__22678;
var G__22757 = chunk__22679;
var G__22758 = count__22680;
var G__22759 = (i__22681 + (1));
seq__22678 = G__22756;
chunk__22679 = G__22757;
count__22680 = G__22758;
i__22681 = G__22759;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22678);
if(temp__5753__auto__){
var seq__22678__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22678__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22678__$1);
var G__22760 = cljs.core.chunk_rest(seq__22678__$1);
var G__22761 = c__4679__auto__;
var G__22762 = cljs.core.count(c__4679__auto__);
var G__22763 = (0);
seq__22678 = G__22760;
chunk__22679 = G__22761;
count__22680 = G__22762;
i__22681 = G__22763;
continue;
} else {
var vec__22691 = cljs.core.first(seq__22678__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___22764 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___22764)){
var effect_fn_22765 = temp__5751__auto___22764;
(effect_fn_22765.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22765.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22765.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22766 = cljs.core.next(seq__22678__$1);
var G__22767 = null;
var G__22768 = (0);
var G__22769 = (0);
seq__22678 = G__22766;
chunk__22679 = G__22767;
count__22680 = G__22768;
i__22681 = G__22769;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__22694 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22695 = null;
var count__22696 = (0);
var i__22697 = (0);
while(true){
if((i__22697 < count__22696)){
var event = chunk__22695.cljs$core$IIndexed$_nth$arity$2(null,i__22697);
re_frame.router.dispatch(event);


var G__22770 = seq__22694;
var G__22771 = chunk__22695;
var G__22772 = count__22696;
var G__22773 = (i__22697 + (1));
seq__22694 = G__22770;
chunk__22695 = G__22771;
count__22696 = G__22772;
i__22697 = G__22773;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22694);
if(temp__5753__auto__){
var seq__22694__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22694__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22694__$1);
var G__22774 = cljs.core.chunk_rest(seq__22694__$1);
var G__22775 = c__4679__auto__;
var G__22776 = cljs.core.count(c__4679__auto__);
var G__22777 = (0);
seq__22694 = G__22774;
chunk__22695 = G__22775;
count__22696 = G__22776;
i__22697 = G__22777;
continue;
} else {
var event = cljs.core.first(seq__22694__$1);
re_frame.router.dispatch(event);


var G__22778 = cljs.core.next(seq__22694__$1);
var G__22779 = null;
var G__22780 = (0);
var G__22781 = (0);
seq__22694 = G__22778;
chunk__22695 = G__22779;
count__22696 = G__22780;
i__22697 = G__22781;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__22698 = cljs.core.seq(value);
var chunk__22699 = null;
var count__22700 = (0);
var i__22701 = (0);
while(true){
if((i__22701 < count__22700)){
var event = chunk__22699.cljs$core$IIndexed$_nth$arity$2(null,i__22701);
clear_event(event);


var G__22782 = seq__22698;
var G__22783 = chunk__22699;
var G__22784 = count__22700;
var G__22785 = (i__22701 + (1));
seq__22698 = G__22782;
chunk__22699 = G__22783;
count__22700 = G__22784;
i__22701 = G__22785;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22698);
if(temp__5753__auto__){
var seq__22698__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22698__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22698__$1);
var G__22786 = cljs.core.chunk_rest(seq__22698__$1);
var G__22787 = c__4679__auto__;
var G__22788 = cljs.core.count(c__4679__auto__);
var G__22789 = (0);
seq__22698 = G__22786;
chunk__22699 = G__22787;
count__22700 = G__22788;
i__22701 = G__22789;
continue;
} else {
var event = cljs.core.first(seq__22698__$1);
clear_event(event);


var G__22790 = cljs.core.next(seq__22698__$1);
var G__22791 = null;
var G__22792 = (0);
var G__22793 = (0);
seq__22698 = G__22790;
chunk__22699 = G__22791;
count__22700 = G__22792;
i__22701 = G__22793;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
