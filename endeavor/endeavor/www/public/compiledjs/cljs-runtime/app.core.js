goog.provide('app.core');
app.core.about = (function app$core$about(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About"], null);
});
app.core.mount_BANG_ = (function app$core$mount_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.routes.root], null),document.getElementById("app"));
});
app.core.init_BANG_ = (function app$core$init_BANG_(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.events","initialize-db","app.events/initialize-db",-1317819610)], null));

return app.core.mount_BANG_();
});
app.core.reload_BANG_ = (function app$core$reload_BANG_(){
return app.core.mount_BANG_();
});

//# sourceMappingURL=app.core.js.map
