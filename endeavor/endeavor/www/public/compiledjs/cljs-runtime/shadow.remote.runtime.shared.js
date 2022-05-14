goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19199,res){
var map__19200 = p__19199;
var map__19200__$1 = cljs.core.__destructure_map(map__19200);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19201 = res;
var G__19201__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19201,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19201);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19201__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19201__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19203 = arguments.length;
switch (G__19203) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19204,msg,handlers,timeout_after_ms){
var map__19205 = p__19204;
var map__19205__$1 = cljs.core.__destructure_map(map__19205);
var runtime = map__19205__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19258 = arguments.length;
var i__4865__auto___19259 = (0);
while(true){
if((i__4865__auto___19259 < len__4864__auto___19258)){
args__4870__auto__.push((arguments[i__4865__auto___19259]));

var G__19260 = (i__4865__auto___19259 + (1));
i__4865__auto___19259 = G__19260;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19209,ev,args){
var map__19210 = p__19209;
var map__19210__$1 = cljs.core.__destructure_map(map__19210);
var runtime = map__19210__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19211 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19214 = null;
var count__19215 = (0);
var i__19216 = (0);
while(true){
if((i__19216 < count__19215)){
var ext = chunk__19214.cljs$core$IIndexed$_nth$arity$2(null,i__19216);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19261 = seq__19211;
var G__19262 = chunk__19214;
var G__19263 = count__19215;
var G__19264 = (i__19216 + (1));
seq__19211 = G__19261;
chunk__19214 = G__19262;
count__19215 = G__19263;
i__19216 = G__19264;
continue;
} else {
var G__19265 = seq__19211;
var G__19266 = chunk__19214;
var G__19267 = count__19215;
var G__19268 = (i__19216 + (1));
seq__19211 = G__19265;
chunk__19214 = G__19266;
count__19215 = G__19267;
i__19216 = G__19268;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19211);
if(temp__5753__auto__){
var seq__19211__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19211__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__19211__$1);
var G__19269 = cljs.core.chunk_rest(seq__19211__$1);
var G__19270 = c__4679__auto__;
var G__19271 = cljs.core.count(c__4679__auto__);
var G__19272 = (0);
seq__19211 = G__19269;
chunk__19214 = G__19270;
count__19215 = G__19271;
i__19216 = G__19272;
continue;
} else {
var ext = cljs.core.first(seq__19211__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19273 = cljs.core.next(seq__19211__$1);
var G__19274 = null;
var G__19275 = (0);
var G__19276 = (0);
seq__19211 = G__19273;
chunk__19214 = G__19274;
count__19215 = G__19275;
i__19216 = G__19276;
continue;
} else {
var G__19277 = cljs.core.next(seq__19211__$1);
var G__19278 = null;
var G__19279 = (0);
var G__19280 = (0);
seq__19211 = G__19277;
chunk__19214 = G__19278;
count__19215 = G__19279;
i__19216 = G__19280;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19206){
var G__19207 = cljs.core.first(seq19206);
var seq19206__$1 = cljs.core.next(seq19206);
var G__19208 = cljs.core.first(seq19206__$1);
var seq19206__$2 = cljs.core.next(seq19206__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19207,G__19208,seq19206__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19219,p__19220){
var map__19221 = p__19219;
var map__19221__$1 = cljs.core.__destructure_map(map__19221);
var runtime = map__19221__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19222 = p__19220;
var map__19222__$1 = cljs.core.__destructure_map(map__19222);
var msg = map__19222__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19222__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19223 = cljs.core.deref(state_ref);
var map__19223__$1 = cljs.core.__destructure_map(map__19223);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19223__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19223__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19224){
var map__19225 = p__19224;
var map__19225__$1 = cljs.core.__destructure_map(map__19225);
var runtime = map__19225__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19226,msg){
var map__19227 = p__19226;
var map__19227__$1 = cljs.core.__destructure_map(map__19227);
var runtime = map__19227__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19227__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19228,key,p__19229){
var map__19230 = p__19228;
var map__19230__$1 = cljs.core.__destructure_map(map__19230);
var state = map__19230__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19230__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19231 = p__19229;
var map__19231__$1 = cljs.core.__destructure_map(map__19231);
var spec = map__19231__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19232,key,spec){
var map__19233 = p__19232;
var map__19233__$1 = cljs.core.__destructure_map(map__19233);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19233__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19234_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19234_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19235_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19235_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19236_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19236_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19237_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19237_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19238_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19238_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19239,key){
var map__19240 = p__19239;
var map__19240__$1 = cljs.core.__destructure_map(map__19240);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19240__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19241,msg){
var map__19242 = p__19241;
var map__19242__$1 = cljs.core.__destructure_map(map__19242);
var runtime = map__19242__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19243,p__19244){
var map__19245 = p__19243;
var map__19245__$1 = cljs.core.__destructure_map(map__19245);
var runtime = map__19245__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19245__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19246 = p__19244;
var map__19246__$1 = cljs.core.__destructure_map(map__19246);
var msg = map__19246__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19246__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19246__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19247 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19249 = null;
var count__19250 = (0);
var i__19251 = (0);
while(true){
if((i__19251 < count__19250)){
var map__19255 = chunk__19249.cljs$core$IIndexed$_nth$arity$2(null,i__19251);
var map__19255__$1 = cljs.core.__destructure_map(map__19255);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19255__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19281 = seq__19247;
var G__19282 = chunk__19249;
var G__19283 = count__19250;
var G__19284 = (i__19251 + (1));
seq__19247 = G__19281;
chunk__19249 = G__19282;
count__19250 = G__19283;
i__19251 = G__19284;
continue;
} else {
var G__19285 = seq__19247;
var G__19286 = chunk__19249;
var G__19287 = count__19250;
var G__19288 = (i__19251 + (1));
seq__19247 = G__19285;
chunk__19249 = G__19286;
count__19250 = G__19287;
i__19251 = G__19288;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19247);
if(temp__5753__auto__){
var seq__19247__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19247__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__19247__$1);
var G__19289 = cljs.core.chunk_rest(seq__19247__$1);
var G__19290 = c__4679__auto__;
var G__19291 = cljs.core.count(c__4679__auto__);
var G__19292 = (0);
seq__19247 = G__19289;
chunk__19249 = G__19290;
count__19250 = G__19291;
i__19251 = G__19292;
continue;
} else {
var map__19256 = cljs.core.first(seq__19247__$1);
var map__19256__$1 = cljs.core.__destructure_map(map__19256);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19256__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19293 = cljs.core.next(seq__19247__$1);
var G__19294 = null;
var G__19295 = (0);
var G__19296 = (0);
seq__19247 = G__19293;
chunk__19249 = G__19294;
count__19250 = G__19295;
i__19251 = G__19296;
continue;
} else {
var G__19297 = cljs.core.next(seq__19247__$1);
var G__19298 = null;
var G__19299 = (0);
var G__19300 = (0);
seq__19247 = G__19297;
chunk__19249 = G__19298;
count__19250 = G__19299;
i__19251 = G__19300;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
