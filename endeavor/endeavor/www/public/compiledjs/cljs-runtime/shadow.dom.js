goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18038 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18038(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18039 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18039(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17785 = coll;
var G__17786 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17785,G__17786) : shadow.dom.lazy_native_coll_seq.call(null,G__17785,G__17786));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17789 = arguments.length;
switch (G__17789) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17791 = arguments.length;
switch (G__17791) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17793 = arguments.length;
switch (G__17793) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17795 = arguments.length;
switch (G__17795) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17797 = arguments.length;
switch (G__17797) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17799 = arguments.length;
switch (G__17799) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17800){if((e17800 instanceof Object)){
var e = e17800;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17800;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17801 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17802 = null;
var count__17803 = (0);
var i__17804 = (0);
while(true){
if((i__17804 < count__17803)){
var el = chunk__17802.cljs$core$IIndexed$_nth$arity$2(null,i__17804);
var handler_18046__$1 = ((function (seq__17801,chunk__17802,count__17803,i__17804,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17801,chunk__17802,count__17803,i__17804,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18046__$1);


var G__18047 = seq__17801;
var G__18048 = chunk__17802;
var G__18049 = count__17803;
var G__18050 = (i__17804 + (1));
seq__17801 = G__18047;
chunk__17802 = G__18048;
count__17803 = G__18049;
i__17804 = G__18050;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17801);
if(temp__5753__auto__){
var seq__17801__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17801__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17801__$1);
var G__18051 = cljs.core.chunk_rest(seq__17801__$1);
var G__18052 = c__4679__auto__;
var G__18053 = cljs.core.count(c__4679__auto__);
var G__18054 = (0);
seq__17801 = G__18051;
chunk__17802 = G__18052;
count__17803 = G__18053;
i__17804 = G__18054;
continue;
} else {
var el = cljs.core.first(seq__17801__$1);
var handler_18055__$1 = ((function (seq__17801,chunk__17802,count__17803,i__17804,el,seq__17801__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17801,chunk__17802,count__17803,i__17804,el,seq__17801__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18055__$1);


var G__18056 = cljs.core.next(seq__17801__$1);
var G__18057 = null;
var G__18058 = (0);
var G__18059 = (0);
seq__17801 = G__18056;
chunk__17802 = G__18057;
count__17803 = G__18058;
i__17804 = G__18059;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17806 = arguments.length;
switch (G__17806) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17807 = cljs.core.seq(events);
var chunk__17808 = null;
var count__17809 = (0);
var i__17810 = (0);
while(true){
if((i__17810 < count__17809)){
var vec__17817 = chunk__17808.cljs$core$IIndexed$_nth$arity$2(null,i__17810);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18061 = seq__17807;
var G__18062 = chunk__17808;
var G__18063 = count__17809;
var G__18064 = (i__17810 + (1));
seq__17807 = G__18061;
chunk__17808 = G__18062;
count__17809 = G__18063;
i__17810 = G__18064;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17807);
if(temp__5753__auto__){
var seq__17807__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17807__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17807__$1);
var G__18065 = cljs.core.chunk_rest(seq__17807__$1);
var G__18066 = c__4679__auto__;
var G__18067 = cljs.core.count(c__4679__auto__);
var G__18068 = (0);
seq__17807 = G__18065;
chunk__17808 = G__18066;
count__17809 = G__18067;
i__17810 = G__18068;
continue;
} else {
var vec__17820 = cljs.core.first(seq__17807__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17820,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18069 = cljs.core.next(seq__17807__$1);
var G__18070 = null;
var G__18071 = (0);
var G__18072 = (0);
seq__17807 = G__18069;
chunk__17808 = G__18070;
count__17809 = G__18071;
i__17810 = G__18072;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17823 = cljs.core.seq(styles);
var chunk__17824 = null;
var count__17825 = (0);
var i__17826 = (0);
while(true){
if((i__17826 < count__17825)){
var vec__17833 = chunk__17824.cljs$core$IIndexed$_nth$arity$2(null,i__17826);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18073 = seq__17823;
var G__18074 = chunk__17824;
var G__18075 = count__17825;
var G__18076 = (i__17826 + (1));
seq__17823 = G__18073;
chunk__17824 = G__18074;
count__17825 = G__18075;
i__17826 = G__18076;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17823);
if(temp__5753__auto__){
var seq__17823__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17823__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17823__$1);
var G__18077 = cljs.core.chunk_rest(seq__17823__$1);
var G__18078 = c__4679__auto__;
var G__18079 = cljs.core.count(c__4679__auto__);
var G__18080 = (0);
seq__17823 = G__18077;
chunk__17824 = G__18078;
count__17825 = G__18079;
i__17826 = G__18080;
continue;
} else {
var vec__17836 = cljs.core.first(seq__17823__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17836,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18081 = cljs.core.next(seq__17823__$1);
var G__18082 = null;
var G__18083 = (0);
var G__18084 = (0);
seq__17823 = G__18081;
chunk__17824 = G__18082;
count__17825 = G__18083;
i__17826 = G__18084;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17839_18085 = key;
var G__17839_18086__$1 = (((G__17839_18085 instanceof cljs.core.Keyword))?G__17839_18085.fqn:null);
switch (G__17839_18086__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18088 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_18088,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_18088,"aria-");
}
})())){
el.setAttribute(ks_18088,value);
} else {
(el[ks_18088] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17840){
var map__17841 = p__17840;
var map__17841__$1 = cljs.core.__destructure_map(map__17841);
var props = map__17841__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17841__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17842 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17845 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17845,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17845;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17847 = arguments.length;
switch (G__17847) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17848){
var vec__17849 = p__17848;
var seq__17850 = cljs.core.seq(vec__17849);
var first__17851 = cljs.core.first(seq__17850);
var seq__17850__$1 = cljs.core.next(seq__17850);
var nn = first__17851;
var first__17851__$1 = cljs.core.first(seq__17850__$1);
var seq__17850__$2 = cljs.core.next(seq__17850__$1);
var np = first__17851__$1;
var nc = seq__17850__$2;
var node = vec__17849;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17852 = nn;
var G__17853 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17852,G__17853) : create_fn.call(null,G__17852,G__17853));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17854 = nn;
var G__17855 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17854,G__17855) : create_fn.call(null,G__17854,G__17855));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17856 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17856,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17856,(1),null);
var seq__17859_18090 = cljs.core.seq(node_children);
var chunk__17860_18091 = null;
var count__17861_18092 = (0);
var i__17862_18093 = (0);
while(true){
if((i__17862_18093 < count__17861_18092)){
var child_struct_18094 = chunk__17860_18091.cljs$core$IIndexed$_nth$arity$2(null,i__17862_18093);
var children_18095 = shadow.dom.dom_node(child_struct_18094);
if(cljs.core.seq_QMARK_(children_18095)){
var seq__17875_18096 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18095));
var chunk__17877_18097 = null;
var count__17878_18098 = (0);
var i__17879_18099 = (0);
while(true){
if((i__17879_18099 < count__17878_18098)){
var child_18100 = chunk__17877_18097.cljs$core$IIndexed$_nth$arity$2(null,i__17879_18099);
if(cljs.core.truth_(child_18100)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18100);


var G__18101 = seq__17875_18096;
var G__18102 = chunk__17877_18097;
var G__18103 = count__17878_18098;
var G__18104 = (i__17879_18099 + (1));
seq__17875_18096 = G__18101;
chunk__17877_18097 = G__18102;
count__17878_18098 = G__18103;
i__17879_18099 = G__18104;
continue;
} else {
var G__18105 = seq__17875_18096;
var G__18106 = chunk__17877_18097;
var G__18107 = count__17878_18098;
var G__18108 = (i__17879_18099 + (1));
seq__17875_18096 = G__18105;
chunk__17877_18097 = G__18106;
count__17878_18098 = G__18107;
i__17879_18099 = G__18108;
continue;
}
} else {
var temp__5753__auto___18109 = cljs.core.seq(seq__17875_18096);
if(temp__5753__auto___18109){
var seq__17875_18110__$1 = temp__5753__auto___18109;
if(cljs.core.chunked_seq_QMARK_(seq__17875_18110__$1)){
var c__4679__auto___18111 = cljs.core.chunk_first(seq__17875_18110__$1);
var G__18112 = cljs.core.chunk_rest(seq__17875_18110__$1);
var G__18113 = c__4679__auto___18111;
var G__18114 = cljs.core.count(c__4679__auto___18111);
var G__18115 = (0);
seq__17875_18096 = G__18112;
chunk__17877_18097 = G__18113;
count__17878_18098 = G__18114;
i__17879_18099 = G__18115;
continue;
} else {
var child_18116 = cljs.core.first(seq__17875_18110__$1);
if(cljs.core.truth_(child_18116)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18116);


var G__18117 = cljs.core.next(seq__17875_18110__$1);
var G__18118 = null;
var G__18119 = (0);
var G__18120 = (0);
seq__17875_18096 = G__18117;
chunk__17877_18097 = G__18118;
count__17878_18098 = G__18119;
i__17879_18099 = G__18120;
continue;
} else {
var G__18121 = cljs.core.next(seq__17875_18110__$1);
var G__18122 = null;
var G__18123 = (0);
var G__18124 = (0);
seq__17875_18096 = G__18121;
chunk__17877_18097 = G__18122;
count__17878_18098 = G__18123;
i__17879_18099 = G__18124;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18095);
}


var G__18125 = seq__17859_18090;
var G__18126 = chunk__17860_18091;
var G__18127 = count__17861_18092;
var G__18128 = (i__17862_18093 + (1));
seq__17859_18090 = G__18125;
chunk__17860_18091 = G__18126;
count__17861_18092 = G__18127;
i__17862_18093 = G__18128;
continue;
} else {
var temp__5753__auto___18129 = cljs.core.seq(seq__17859_18090);
if(temp__5753__auto___18129){
var seq__17859_18130__$1 = temp__5753__auto___18129;
if(cljs.core.chunked_seq_QMARK_(seq__17859_18130__$1)){
var c__4679__auto___18131 = cljs.core.chunk_first(seq__17859_18130__$1);
var G__18132 = cljs.core.chunk_rest(seq__17859_18130__$1);
var G__18133 = c__4679__auto___18131;
var G__18134 = cljs.core.count(c__4679__auto___18131);
var G__18135 = (0);
seq__17859_18090 = G__18132;
chunk__17860_18091 = G__18133;
count__17861_18092 = G__18134;
i__17862_18093 = G__18135;
continue;
} else {
var child_struct_18136 = cljs.core.first(seq__17859_18130__$1);
var children_18137 = shadow.dom.dom_node(child_struct_18136);
if(cljs.core.seq_QMARK_(children_18137)){
var seq__17881_18138 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18137));
var chunk__17883_18139 = null;
var count__17884_18140 = (0);
var i__17885_18141 = (0);
while(true){
if((i__17885_18141 < count__17884_18140)){
var child_18142 = chunk__17883_18139.cljs$core$IIndexed$_nth$arity$2(null,i__17885_18141);
if(cljs.core.truth_(child_18142)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18142);


var G__18143 = seq__17881_18138;
var G__18144 = chunk__17883_18139;
var G__18145 = count__17884_18140;
var G__18146 = (i__17885_18141 + (1));
seq__17881_18138 = G__18143;
chunk__17883_18139 = G__18144;
count__17884_18140 = G__18145;
i__17885_18141 = G__18146;
continue;
} else {
var G__18147 = seq__17881_18138;
var G__18148 = chunk__17883_18139;
var G__18149 = count__17884_18140;
var G__18150 = (i__17885_18141 + (1));
seq__17881_18138 = G__18147;
chunk__17883_18139 = G__18148;
count__17884_18140 = G__18149;
i__17885_18141 = G__18150;
continue;
}
} else {
var temp__5753__auto___18151__$1 = cljs.core.seq(seq__17881_18138);
if(temp__5753__auto___18151__$1){
var seq__17881_18152__$1 = temp__5753__auto___18151__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17881_18152__$1)){
var c__4679__auto___18153 = cljs.core.chunk_first(seq__17881_18152__$1);
var G__18154 = cljs.core.chunk_rest(seq__17881_18152__$1);
var G__18155 = c__4679__auto___18153;
var G__18156 = cljs.core.count(c__4679__auto___18153);
var G__18157 = (0);
seq__17881_18138 = G__18154;
chunk__17883_18139 = G__18155;
count__17884_18140 = G__18156;
i__17885_18141 = G__18157;
continue;
} else {
var child_18158 = cljs.core.first(seq__17881_18152__$1);
if(cljs.core.truth_(child_18158)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18158);


var G__18159 = cljs.core.next(seq__17881_18152__$1);
var G__18160 = null;
var G__18161 = (0);
var G__18162 = (0);
seq__17881_18138 = G__18159;
chunk__17883_18139 = G__18160;
count__17884_18140 = G__18161;
i__17885_18141 = G__18162;
continue;
} else {
var G__18163 = cljs.core.next(seq__17881_18152__$1);
var G__18164 = null;
var G__18165 = (0);
var G__18166 = (0);
seq__17881_18138 = G__18163;
chunk__17883_18139 = G__18164;
count__17884_18140 = G__18165;
i__17885_18141 = G__18166;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18137);
}


var G__18167 = cljs.core.next(seq__17859_18130__$1);
var G__18168 = null;
var G__18169 = (0);
var G__18170 = (0);
seq__17859_18090 = G__18167;
chunk__17860_18091 = G__18168;
count__17861_18092 = G__18169;
i__17862_18093 = G__18170;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17888 = cljs.core.seq(node);
var chunk__17889 = null;
var count__17890 = (0);
var i__17891 = (0);
while(true){
if((i__17891 < count__17890)){
var n = chunk__17889.cljs$core$IIndexed$_nth$arity$2(null,i__17891);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18171 = seq__17888;
var G__18172 = chunk__17889;
var G__18173 = count__17890;
var G__18174 = (i__17891 + (1));
seq__17888 = G__18171;
chunk__17889 = G__18172;
count__17890 = G__18173;
i__17891 = G__18174;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17888);
if(temp__5753__auto__){
var seq__17888__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17888__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17888__$1);
var G__18175 = cljs.core.chunk_rest(seq__17888__$1);
var G__18176 = c__4679__auto__;
var G__18177 = cljs.core.count(c__4679__auto__);
var G__18178 = (0);
seq__17888 = G__18175;
chunk__17889 = G__18176;
count__17890 = G__18177;
i__17891 = G__18178;
continue;
} else {
var n = cljs.core.first(seq__17888__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18179 = cljs.core.next(seq__17888__$1);
var G__18180 = null;
var G__18181 = (0);
var G__18182 = (0);
seq__17888 = G__18179;
chunk__17889 = G__18180;
count__17890 = G__18181;
i__17891 = G__18182;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17893 = arguments.length;
switch (G__17893) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17895 = arguments.length;
switch (G__17895) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17897 = arguments.length;
switch (G__17897) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___18186 = arguments.length;
var i__4865__auto___18187 = (0);
while(true){
if((i__4865__auto___18187 < len__4864__auto___18186)){
args__4870__auto__.push((arguments[i__4865__auto___18187]));

var G__18188 = (i__4865__auto___18187 + (1));
i__4865__auto___18187 = G__18188;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17899_18189 = cljs.core.seq(nodes);
var chunk__17900_18190 = null;
var count__17901_18191 = (0);
var i__17902_18192 = (0);
while(true){
if((i__17902_18192 < count__17901_18191)){
var node_18193 = chunk__17900_18190.cljs$core$IIndexed$_nth$arity$2(null,i__17902_18192);
fragment.appendChild(shadow.dom._to_dom(node_18193));


var G__18194 = seq__17899_18189;
var G__18195 = chunk__17900_18190;
var G__18196 = count__17901_18191;
var G__18197 = (i__17902_18192 + (1));
seq__17899_18189 = G__18194;
chunk__17900_18190 = G__18195;
count__17901_18191 = G__18196;
i__17902_18192 = G__18197;
continue;
} else {
var temp__5753__auto___18198 = cljs.core.seq(seq__17899_18189);
if(temp__5753__auto___18198){
var seq__17899_18199__$1 = temp__5753__auto___18198;
if(cljs.core.chunked_seq_QMARK_(seq__17899_18199__$1)){
var c__4679__auto___18200 = cljs.core.chunk_first(seq__17899_18199__$1);
var G__18201 = cljs.core.chunk_rest(seq__17899_18199__$1);
var G__18202 = c__4679__auto___18200;
var G__18203 = cljs.core.count(c__4679__auto___18200);
var G__18204 = (0);
seq__17899_18189 = G__18201;
chunk__17900_18190 = G__18202;
count__17901_18191 = G__18203;
i__17902_18192 = G__18204;
continue;
} else {
var node_18205 = cljs.core.first(seq__17899_18199__$1);
fragment.appendChild(shadow.dom._to_dom(node_18205));


var G__18206 = cljs.core.next(seq__17899_18199__$1);
var G__18207 = null;
var G__18208 = (0);
var G__18209 = (0);
seq__17899_18189 = G__18206;
chunk__17900_18190 = G__18207;
count__17901_18191 = G__18208;
i__17902_18192 = G__18209;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17898){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17898));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17903_18210 = cljs.core.seq(scripts);
var chunk__17904_18211 = null;
var count__17905_18212 = (0);
var i__17906_18213 = (0);
while(true){
if((i__17906_18213 < count__17905_18212)){
var vec__17913_18214 = chunk__17904_18211.cljs$core$IIndexed$_nth$arity$2(null,i__17906_18213);
var script_tag_18215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913_18214,(0),null);
var script_body_18216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913_18214,(1),null);
eval(script_body_18216);


var G__18217 = seq__17903_18210;
var G__18218 = chunk__17904_18211;
var G__18219 = count__17905_18212;
var G__18220 = (i__17906_18213 + (1));
seq__17903_18210 = G__18217;
chunk__17904_18211 = G__18218;
count__17905_18212 = G__18219;
i__17906_18213 = G__18220;
continue;
} else {
var temp__5753__auto___18221 = cljs.core.seq(seq__17903_18210);
if(temp__5753__auto___18221){
var seq__17903_18222__$1 = temp__5753__auto___18221;
if(cljs.core.chunked_seq_QMARK_(seq__17903_18222__$1)){
var c__4679__auto___18223 = cljs.core.chunk_first(seq__17903_18222__$1);
var G__18224 = cljs.core.chunk_rest(seq__17903_18222__$1);
var G__18225 = c__4679__auto___18223;
var G__18226 = cljs.core.count(c__4679__auto___18223);
var G__18227 = (0);
seq__17903_18210 = G__18224;
chunk__17904_18211 = G__18225;
count__17905_18212 = G__18226;
i__17906_18213 = G__18227;
continue;
} else {
var vec__17916_18228 = cljs.core.first(seq__17903_18222__$1);
var script_tag_18229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916_18228,(0),null);
var script_body_18230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916_18228,(1),null);
eval(script_body_18230);


var G__18231 = cljs.core.next(seq__17903_18222__$1);
var G__18232 = null;
var G__18233 = (0);
var G__18234 = (0);
seq__17903_18210 = G__18231;
chunk__17904_18211 = G__18232;
count__17905_18212 = G__18233;
i__17906_18213 = G__18234;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17919){
var vec__17920 = p__17919;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17924 = arguments.length;
switch (G__17924) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17925 = cljs.core.seq(style_keys);
var chunk__17926 = null;
var count__17927 = (0);
var i__17928 = (0);
while(true){
if((i__17928 < count__17927)){
var it = chunk__17926.cljs$core$IIndexed$_nth$arity$2(null,i__17928);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18236 = seq__17925;
var G__18237 = chunk__17926;
var G__18238 = count__17927;
var G__18239 = (i__17928 + (1));
seq__17925 = G__18236;
chunk__17926 = G__18237;
count__17927 = G__18238;
i__17928 = G__18239;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17925);
if(temp__5753__auto__){
var seq__17925__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17925__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17925__$1);
var G__18240 = cljs.core.chunk_rest(seq__17925__$1);
var G__18241 = c__4679__auto__;
var G__18242 = cljs.core.count(c__4679__auto__);
var G__18243 = (0);
seq__17925 = G__18240;
chunk__17926 = G__18241;
count__17927 = G__18242;
i__17928 = G__18243;
continue;
} else {
var it = cljs.core.first(seq__17925__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18244 = cljs.core.next(seq__17925__$1);
var G__18245 = null;
var G__18246 = (0);
var G__18247 = (0);
seq__17925 = G__18244;
chunk__17926 = G__18245;
count__17927 = G__18246;
i__17928 = G__18247;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k17930,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__17934 = k17930;
var G__17934__$1 = (((G__17934 instanceof cljs.core.Keyword))?G__17934.fqn:null);
switch (G__17934__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17930,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__17935){
var vec__17936 = p__17935;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17929){
var self__ = this;
var G__17929__$1 = this;
return (new cljs.core.RecordIter((0),G__17929__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17931,other17932){
var self__ = this;
var this17931__$1 = this;
return (((!((other17932 == null)))) && ((((this17931__$1.constructor === other17932.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17931__$1.x,other17932.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17931__$1.y,other17932.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17931__$1.__extmap,other17932.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k17930){
var self__ = this;
var this__4509__auto____$1 = this;
var G__17939 = k17930;
var G__17939__$1 = (((G__17939 instanceof cljs.core.Keyword))?G__17939.fqn:null);
switch (G__17939__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17930);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__17929){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__17940 = cljs.core.keyword_identical_QMARK_;
var expr__17941 = k__4511__auto__;
if(cljs.core.truth_((pred__17940.cljs$core$IFn$_invoke$arity$2 ? pred__17940.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17941) : pred__17940.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17941)))){
return (new shadow.dom.Coordinate(G__17929,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17940.cljs$core$IFn$_invoke$arity$2 ? pred__17940.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17941) : pred__17940.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17941)))){
return (new shadow.dom.Coordinate(self__.x,G__17929,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__17929),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__17929){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17929,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17933){
var extmap__4542__auto__ = (function (){var G__17943 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17933,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17933)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17943);
} else {
return G__17943;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17933),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17933),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k17945,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__17949 = k17945;
var G__17949__$1 = (((G__17949 instanceof cljs.core.Keyword))?G__17949.fqn:null);
switch (G__17949__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17945,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__17950){
var vec__17951 = p__17950;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17944){
var self__ = this;
var G__17944__$1 = this;
return (new cljs.core.RecordIter((0),G__17944__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17946,other17947){
var self__ = this;
var this17946__$1 = this;
return (((!((other17947 == null)))) && ((((this17946__$1.constructor === other17947.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17946__$1.w,other17947.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17946__$1.h,other17947.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17946__$1.__extmap,other17947.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k17945){
var self__ = this;
var this__4509__auto____$1 = this;
var G__17954 = k17945;
var G__17954__$1 = (((G__17954 instanceof cljs.core.Keyword))?G__17954.fqn:null);
switch (G__17954__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17945);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__17944){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__17955 = cljs.core.keyword_identical_QMARK_;
var expr__17956 = k__4511__auto__;
if(cljs.core.truth_((pred__17955.cljs$core$IFn$_invoke$arity$2 ? pred__17955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17956) : pred__17955.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17956)))){
return (new shadow.dom.Size(G__17944,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17955.cljs$core$IFn$_invoke$arity$2 ? pred__17955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17956) : pred__17955.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17956)))){
return (new shadow.dom.Size(self__.w,G__17944,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__17944),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__17944){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17944,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17948){
var extmap__4542__auto__ = (function (){var G__17958 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17948,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17948)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17958);
} else {
return G__17958;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17948),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17948),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__18252 = (i + (1));
var G__18253 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18252;
ret = G__18253;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17963){
var vec__17964 = p__17963;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__17968 = arguments.length;
switch (G__17968) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18255 = ps;
var G__18256 = (i + (1));
el__$1 = G__18255;
i = G__18256;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__17969 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17969,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17969,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17969,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__17972_18257 = cljs.core.seq(props);
var chunk__17973_18258 = null;
var count__17974_18259 = (0);
var i__17975_18260 = (0);
while(true){
if((i__17975_18260 < count__17974_18259)){
var vec__17982_18261 = chunk__17973_18258.cljs$core$IIndexed$_nth$arity$2(null,i__17975_18260);
var k_18262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17982_18261,(0),null);
var v_18263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17982_18261,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_18262);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18262),v_18263);


var G__18264 = seq__17972_18257;
var G__18265 = chunk__17973_18258;
var G__18266 = count__17974_18259;
var G__18267 = (i__17975_18260 + (1));
seq__17972_18257 = G__18264;
chunk__17973_18258 = G__18265;
count__17974_18259 = G__18266;
i__17975_18260 = G__18267;
continue;
} else {
var temp__5753__auto___18268 = cljs.core.seq(seq__17972_18257);
if(temp__5753__auto___18268){
var seq__17972_18269__$1 = temp__5753__auto___18268;
if(cljs.core.chunked_seq_QMARK_(seq__17972_18269__$1)){
var c__4679__auto___18270 = cljs.core.chunk_first(seq__17972_18269__$1);
var G__18271 = cljs.core.chunk_rest(seq__17972_18269__$1);
var G__18272 = c__4679__auto___18270;
var G__18273 = cljs.core.count(c__4679__auto___18270);
var G__18274 = (0);
seq__17972_18257 = G__18271;
chunk__17973_18258 = G__18272;
count__17974_18259 = G__18273;
i__17975_18260 = G__18274;
continue;
} else {
var vec__17985_18275 = cljs.core.first(seq__17972_18269__$1);
var k_18276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985_18275,(0),null);
var v_18277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985_18275,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_18276);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18276),v_18277);


var G__18278 = cljs.core.next(seq__17972_18269__$1);
var G__18279 = null;
var G__18280 = (0);
var G__18281 = (0);
seq__17972_18257 = G__18278;
chunk__17973_18258 = G__18279;
count__17974_18259 = G__18280;
i__17975_18260 = G__18281;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__17989 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989,(1),null);
var seq__17992_18282 = cljs.core.seq(node_children);
var chunk__17994_18283 = null;
var count__17995_18284 = (0);
var i__17996_18285 = (0);
while(true){
if((i__17996_18285 < count__17995_18284)){
var child_struct_18286 = chunk__17994_18283.cljs$core$IIndexed$_nth$arity$2(null,i__17996_18285);
if((!((child_struct_18286 == null)))){
if(typeof child_struct_18286 === 'string'){
var text_18287 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18287),child_struct_18286].join(''));
} else {
var children_18288 = shadow.dom.svg_node(child_struct_18286);
if(cljs.core.seq_QMARK_(children_18288)){
var seq__18010_18289 = cljs.core.seq(children_18288);
var chunk__18012_18290 = null;
var count__18013_18291 = (0);
var i__18014_18292 = (0);
while(true){
if((i__18014_18292 < count__18013_18291)){
var child_18293 = chunk__18012_18290.cljs$core$IIndexed$_nth$arity$2(null,i__18014_18292);
if(cljs.core.truth_(child_18293)){
node.appendChild(child_18293);


var G__18294 = seq__18010_18289;
var G__18295 = chunk__18012_18290;
var G__18296 = count__18013_18291;
var G__18297 = (i__18014_18292 + (1));
seq__18010_18289 = G__18294;
chunk__18012_18290 = G__18295;
count__18013_18291 = G__18296;
i__18014_18292 = G__18297;
continue;
} else {
var G__18298 = seq__18010_18289;
var G__18299 = chunk__18012_18290;
var G__18300 = count__18013_18291;
var G__18301 = (i__18014_18292 + (1));
seq__18010_18289 = G__18298;
chunk__18012_18290 = G__18299;
count__18013_18291 = G__18300;
i__18014_18292 = G__18301;
continue;
}
} else {
var temp__5753__auto___18302 = cljs.core.seq(seq__18010_18289);
if(temp__5753__auto___18302){
var seq__18010_18303__$1 = temp__5753__auto___18302;
if(cljs.core.chunked_seq_QMARK_(seq__18010_18303__$1)){
var c__4679__auto___18304 = cljs.core.chunk_first(seq__18010_18303__$1);
var G__18305 = cljs.core.chunk_rest(seq__18010_18303__$1);
var G__18306 = c__4679__auto___18304;
var G__18307 = cljs.core.count(c__4679__auto___18304);
var G__18308 = (0);
seq__18010_18289 = G__18305;
chunk__18012_18290 = G__18306;
count__18013_18291 = G__18307;
i__18014_18292 = G__18308;
continue;
} else {
var child_18309 = cljs.core.first(seq__18010_18303__$1);
if(cljs.core.truth_(child_18309)){
node.appendChild(child_18309);


var G__18310 = cljs.core.next(seq__18010_18303__$1);
var G__18311 = null;
var G__18312 = (0);
var G__18313 = (0);
seq__18010_18289 = G__18310;
chunk__18012_18290 = G__18311;
count__18013_18291 = G__18312;
i__18014_18292 = G__18313;
continue;
} else {
var G__18314 = cljs.core.next(seq__18010_18303__$1);
var G__18315 = null;
var G__18316 = (0);
var G__18317 = (0);
seq__18010_18289 = G__18314;
chunk__18012_18290 = G__18315;
count__18013_18291 = G__18316;
i__18014_18292 = G__18317;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18288);
}
}


var G__18318 = seq__17992_18282;
var G__18319 = chunk__17994_18283;
var G__18320 = count__17995_18284;
var G__18321 = (i__17996_18285 + (1));
seq__17992_18282 = G__18318;
chunk__17994_18283 = G__18319;
count__17995_18284 = G__18320;
i__17996_18285 = G__18321;
continue;
} else {
var G__18322 = seq__17992_18282;
var G__18323 = chunk__17994_18283;
var G__18324 = count__17995_18284;
var G__18325 = (i__17996_18285 + (1));
seq__17992_18282 = G__18322;
chunk__17994_18283 = G__18323;
count__17995_18284 = G__18324;
i__17996_18285 = G__18325;
continue;
}
} else {
var temp__5753__auto___18326 = cljs.core.seq(seq__17992_18282);
if(temp__5753__auto___18326){
var seq__17992_18327__$1 = temp__5753__auto___18326;
if(cljs.core.chunked_seq_QMARK_(seq__17992_18327__$1)){
var c__4679__auto___18328 = cljs.core.chunk_first(seq__17992_18327__$1);
var G__18329 = cljs.core.chunk_rest(seq__17992_18327__$1);
var G__18330 = c__4679__auto___18328;
var G__18331 = cljs.core.count(c__4679__auto___18328);
var G__18332 = (0);
seq__17992_18282 = G__18329;
chunk__17994_18283 = G__18330;
count__17995_18284 = G__18331;
i__17996_18285 = G__18332;
continue;
} else {
var child_struct_18333 = cljs.core.first(seq__17992_18327__$1);
if((!((child_struct_18333 == null)))){
if(typeof child_struct_18333 === 'string'){
var text_18334 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18334),child_struct_18333].join(''));
} else {
var children_18335 = shadow.dom.svg_node(child_struct_18333);
if(cljs.core.seq_QMARK_(children_18335)){
var seq__18016_18336 = cljs.core.seq(children_18335);
var chunk__18018_18337 = null;
var count__18019_18338 = (0);
var i__18020_18339 = (0);
while(true){
if((i__18020_18339 < count__18019_18338)){
var child_18340 = chunk__18018_18337.cljs$core$IIndexed$_nth$arity$2(null,i__18020_18339);
if(cljs.core.truth_(child_18340)){
node.appendChild(child_18340);


var G__18341 = seq__18016_18336;
var G__18342 = chunk__18018_18337;
var G__18343 = count__18019_18338;
var G__18344 = (i__18020_18339 + (1));
seq__18016_18336 = G__18341;
chunk__18018_18337 = G__18342;
count__18019_18338 = G__18343;
i__18020_18339 = G__18344;
continue;
} else {
var G__18345 = seq__18016_18336;
var G__18346 = chunk__18018_18337;
var G__18347 = count__18019_18338;
var G__18348 = (i__18020_18339 + (1));
seq__18016_18336 = G__18345;
chunk__18018_18337 = G__18346;
count__18019_18338 = G__18347;
i__18020_18339 = G__18348;
continue;
}
} else {
var temp__5753__auto___18349__$1 = cljs.core.seq(seq__18016_18336);
if(temp__5753__auto___18349__$1){
var seq__18016_18350__$1 = temp__5753__auto___18349__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18016_18350__$1)){
var c__4679__auto___18351 = cljs.core.chunk_first(seq__18016_18350__$1);
var G__18352 = cljs.core.chunk_rest(seq__18016_18350__$1);
var G__18353 = c__4679__auto___18351;
var G__18354 = cljs.core.count(c__4679__auto___18351);
var G__18355 = (0);
seq__18016_18336 = G__18352;
chunk__18018_18337 = G__18353;
count__18019_18338 = G__18354;
i__18020_18339 = G__18355;
continue;
} else {
var child_18356 = cljs.core.first(seq__18016_18350__$1);
if(cljs.core.truth_(child_18356)){
node.appendChild(child_18356);


var G__18357 = cljs.core.next(seq__18016_18350__$1);
var G__18358 = null;
var G__18359 = (0);
var G__18360 = (0);
seq__18016_18336 = G__18357;
chunk__18018_18337 = G__18358;
count__18019_18338 = G__18359;
i__18020_18339 = G__18360;
continue;
} else {
var G__18361 = cljs.core.next(seq__18016_18350__$1);
var G__18362 = null;
var G__18363 = (0);
var G__18364 = (0);
seq__18016_18336 = G__18361;
chunk__18018_18337 = G__18362;
count__18019_18338 = G__18363;
i__18020_18339 = G__18364;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18335);
}
}


var G__18365 = cljs.core.next(seq__17992_18327__$1);
var G__18366 = null;
var G__18367 = (0);
var G__18368 = (0);
seq__17992_18282 = G__18365;
chunk__17994_18283 = G__18366;
count__17995_18284 = G__18367;
i__17996_18285 = G__18368;
continue;
} else {
var G__18369 = cljs.core.next(seq__17992_18327__$1);
var G__18370 = null;
var G__18371 = (0);
var G__18372 = (0);
seq__17992_18282 = G__18369;
chunk__17994_18283 = G__18370;
count__17995_18284 = G__18371;
i__17996_18285 = G__18372;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___18373 = arguments.length;
var i__4865__auto___18374 = (0);
while(true){
if((i__4865__auto___18374 < len__4864__auto___18373)){
args__4870__auto__.push((arguments[i__4865__auto___18374]));

var G__18375 = (i__4865__auto___18374 + (1));
i__4865__auto___18374 = G__18375;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18022){
var G__18023 = cljs.core.first(seq18022);
var seq18022__$1 = cljs.core.next(seq18022);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18023,seq18022__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18025 = arguments.length;
switch (G__18025) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__15834__auto___18377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15835__auto__ = (function (){var switch__15798__auto__ = (function (state_18030){
var state_val_18031 = (state_18030[(1)]);
if((state_val_18031 === (1))){
var state_18030__$1 = state_18030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18030__$1,(2),once_or_cleanup);
} else {
if((state_val_18031 === (2))){
var inst_18027 = (state_18030[(2)]);
var inst_18028 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18030__$1 = (function (){var statearr_18032 = state_18030;
(statearr_18032[(7)] = inst_18027);

return statearr_18032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18030__$1,inst_18028);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15799__auto__ = null;
var shadow$dom$state_machine__15799__auto____0 = (function (){
var statearr_18033 = [null,null,null,null,null,null,null,null];
(statearr_18033[(0)] = shadow$dom$state_machine__15799__auto__);

(statearr_18033[(1)] = (1));

return statearr_18033;
});
var shadow$dom$state_machine__15799__auto____1 = (function (state_18030){
while(true){
var ret_value__15800__auto__ = (function (){try{while(true){
var result__15801__auto__ = switch__15798__auto__(state_18030);
if(cljs.core.keyword_identical_QMARK_(result__15801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15801__auto__;
}
break;
}
}catch (e18034){var ex__15802__auto__ = e18034;
var statearr_18035_18378 = state_18030;
(statearr_18035_18378[(2)] = ex__15802__auto__);


if(cljs.core.seq((state_18030[(4)]))){
var statearr_18036_18379 = state_18030;
(statearr_18036_18379[(1)] = cljs.core.first((state_18030[(4)])));

} else {
throw ex__15802__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18380 = state_18030;
state_18030 = G__18380;
continue;
} else {
return ret_value__15800__auto__;
}
break;
}
});
shadow$dom$state_machine__15799__auto__ = function(state_18030){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15799__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15799__auto____1.call(this,state_18030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15799__auto____0;
shadow$dom$state_machine__15799__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15799__auto____1;
return shadow$dom$state_machine__15799__auto__;
})()
})();
var state__15836__auto__ = (function (){var statearr_18037 = f__15835__auto__();
(statearr_18037[(6)] = c__15834__auto___18377);

return statearr_18037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15836__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
