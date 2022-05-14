goog.provide('app.main');
app.main.handlers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),(function (e){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.data], 0));
}),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opening a new connection"], 0));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Closing a connection"], 0));
})], null);
app.main.socket = wscljs.client.create("ws://localhost:8080/api/wss",app.main.handlers);
app.main.chatlog = (function app$main$chatlog(welcome){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(welcome,cljs.core.List.EMPTY));
var socket = app.main.socket;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
app.main.the_kingdom = (function app$main$the_kingdom(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The Kingdom"], null);
});
app.main.the_foundation = (function app$main$the_foundation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The Waiting Room"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.chatlog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Welcome message"], null)], null)], null);
});
app.main.home = (function app$main$home(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.the_foundation], null);
});

//# sourceMappingURL=app.main.js.map
