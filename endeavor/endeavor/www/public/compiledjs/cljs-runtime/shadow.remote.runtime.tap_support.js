goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20522,p__20523){
var map__20524 = p__20522;
var map__20524__$1 = cljs.core.__destructure_map(map__20524);
var svc = map__20524__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20524__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20524__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20524__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20525 = p__20523;
var map__20525__$1 = cljs.core.__destructure_map(map__20525);
var msg = map__20525__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20525__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20525__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20525__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20525__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20526,p__20527){
var map__20528 = p__20526;
var map__20528__$1 = cljs.core.__destructure_map(map__20528);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20528__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20529 = p__20527;
var map__20529__$1 = cljs.core.__destructure_map(map__20529);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20529__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20530,p__20531){
var map__20532 = p__20530;
var map__20532__$1 = cljs.core.__destructure_map(map__20532);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20533 = p__20531;
var map__20533__$1 = cljs.core.__destructure_map(map__20533);
var msg = map__20533__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20533__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20534,tid){
var map__20535 = p__20534;
var map__20535__$1 = cljs.core.__destructure_map(map__20535);
var svc = map__20535__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20535__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20540 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20541 = null;
var count__20542 = (0);
var i__20543 = (0);
while(true){
if((i__20543 < count__20542)){
var vec__20550 = chunk__20541.cljs$core$IIndexed$_nth$arity$2(null,i__20543);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20550,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20550,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20558 = seq__20540;
var G__20559 = chunk__20541;
var G__20560 = count__20542;
var G__20561 = (i__20543 + (1));
seq__20540 = G__20558;
chunk__20541 = G__20559;
count__20542 = G__20560;
i__20543 = G__20561;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20540);
if(temp__5753__auto__){
var seq__20540__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20540__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20540__$1);
var G__20562 = cljs.core.chunk_rest(seq__20540__$1);
var G__20563 = c__4679__auto__;
var G__20564 = cljs.core.count(c__4679__auto__);
var G__20565 = (0);
seq__20540 = G__20562;
chunk__20541 = G__20563;
count__20542 = G__20564;
i__20543 = G__20565;
continue;
} else {
var vec__20553 = cljs.core.first(seq__20540__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20566 = cljs.core.next(seq__20540__$1);
var G__20567 = null;
var G__20568 = (0);
var G__20569 = (0);
seq__20540 = G__20566;
chunk__20541 = G__20567;
count__20542 = G__20568;
i__20543 = G__20569;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20536_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20536_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20537_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20537_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20538_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20538_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20539_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20539_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20556){
var map__20557 = p__20556;
var map__20557__$1 = cljs.core.__destructure_map(map__20557);
var svc = map__20557__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20557__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20557__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
