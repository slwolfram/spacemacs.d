goog.provide('wscljs.format');

/**
 * Protocol used to define encoding format for socket messages.
 * @interface
 */
wscljs.format.Format = function(){};

var wscljs$format$Format$read$dyn_13040 = (function (formatter,string){
var x__4550__auto__ = (((formatter == null))?null:formatter);
var m__4551__auto__ = (wscljs.format.read[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4551__auto__.call(null,formatter,string));
} else {
var m__4549__auto__ = (wscljs.format.read["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4549__auto__.call(null,formatter,string));
} else {
throw cljs.core.missing_protocol("Format.read",formatter);
}
}
});
wscljs.format.read = (function wscljs$format$read(formatter,string){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$read$arity$2 == null)))))){
return formatter.wscljs$format$Format$read$arity$2(formatter,string);
} else {
return wscljs$format$Format$read$dyn_13040(formatter,string);
}
});

var wscljs$format$Format$write$dyn_13041 = (function (formatter,value){
var x__4550__auto__ = (((formatter == null))?null:formatter);
var m__4551__auto__ = (wscljs.format.write[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4551__auto__.call(null,formatter,value));
} else {
var m__4549__auto__ = (wscljs.format.write["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4549__auto__.call(null,formatter,value));
} else {
throw cljs.core.missing_protocol("Format.write",formatter);
}
}
});
wscljs.format.write = (function wscljs$format$write(formatter,value){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$write$arity$2 == null)))))){
return formatter.wscljs$format$Format$write$arity$2(formatter,value);
} else {
return wscljs$format$Format$write$dyn_13041(formatter,value);
}
});

/**
 * The identity formatter. Does nothing to the input or output.
 */
wscljs.format.identity = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format13031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format13031 = (function (meta13032){
this.meta13032 = meta13032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format13031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13033,meta13032__$1){
var self__ = this;
var _13033__$1 = this;
return (new wscljs.format.t_wscljs$format13031(meta13032__$1));
}));

(wscljs.format.t_wscljs$format13031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13033){
var self__ = this;
var _13033__$1 = this;
return self__.meta13032;
}));

(wscljs.format.t_wscljs$format13031.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format13031.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(wscljs.format.t_wscljs$format13031.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return v;
}));

(wscljs.format.t_wscljs$format13031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13032","meta13032",-1151129966,null)], null);
}));

(wscljs.format.t_wscljs$format13031.cljs$lang$type = true);

(wscljs.format.t_wscljs$format13031.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format13031");

(wscljs.format.t_wscljs$format13031.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"wscljs.format/t_wscljs$format13031");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format13031.
 */
wscljs.format.__GT_t_wscljs$format13031 = (function wscljs$format$__GT_t_wscljs$format13031(meta13032){
return (new wscljs.format.t_wscljs$format13031(meta13032));
});

}

return (new wscljs.format.t_wscljs$format13031(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in JSON.
 */
wscljs.format.json = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format13034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format13034 = (function (meta13035){
this.meta13035 = meta13035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format13034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13036,meta13035__$1){
var self__ = this;
var _13036__$1 = this;
return (new wscljs.format.t_wscljs$format13034(meta13035__$1));
}));

(wscljs.format.t_wscljs$format13034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13036){
var self__ = this;
var _13036__$1 = this;
return self__.meta13035;
}));

(wscljs.format.t_wscljs$format13034.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format13034.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));

(wscljs.format.t_wscljs$format13034.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return JSON.stringify(cljs.core.clj__GT_js(v));
}));

(wscljs.format.t_wscljs$format13034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13035","meta13035",1488084991,null)], null);
}));

(wscljs.format.t_wscljs$format13034.cljs$lang$type = true);

(wscljs.format.t_wscljs$format13034.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format13034");

(wscljs.format.t_wscljs$format13034.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"wscljs.format/t_wscljs$format13034");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format13034.
 */
wscljs.format.__GT_t_wscljs$format13034 = (function wscljs$format$__GT_t_wscljs$format13034(meta13035){
return (new wscljs.format.t_wscljs$format13034(meta13035));
});

}

return (new wscljs.format.t_wscljs$format13034(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data serialized as EDN.
 */
wscljs.format.edn = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format13037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format13037 = (function (meta13038){
this.meta13038 = meta13038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format13037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13039,meta13038__$1){
var self__ = this;
var _13039__$1 = this;
return (new wscljs.format.t_wscljs$format13037(meta13038__$1));
}));

(wscljs.format.t_wscljs$format13037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13039){
var self__ = this;
var _13039__$1 = this;
return self__.meta13038;
}));

(wscljs.format.t_wscljs$format13037.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format13037.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(wscljs.format.t_wscljs$format13037.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}));

(wscljs.format.t_wscljs$format13037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13038","meta13038",25497699,null)], null);
}));

(wscljs.format.t_wscljs$format13037.cljs$lang$type = true);

(wscljs.format.t_wscljs$format13037.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format13037");

(wscljs.format.t_wscljs$format13037.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"wscljs.format/t_wscljs$format13037");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format13037.
 */
wscljs.format.__GT_t_wscljs$format13037 = (function wscljs$format$__GT_t_wscljs$format13037(meta13038){
return (new wscljs.format.t_wscljs$format13037(meta13038));
});

}

return (new wscljs.format.t_wscljs$format13037(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=wscljs.format.js.map
