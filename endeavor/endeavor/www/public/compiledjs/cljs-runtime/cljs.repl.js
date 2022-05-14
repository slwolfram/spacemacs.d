goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20238){
var map__20239 = p__20238;
var map__20239__$1 = cljs.core.__destructure_map(map__20239);
var m = map__20239__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20240_20330 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20241_20331 = null;
var count__20242_20332 = (0);
var i__20243_20333 = (0);
while(true){
if((i__20243_20333 < count__20242_20332)){
var f_20334 = chunk__20241_20331.cljs$core$IIndexed$_nth$arity$2(null,i__20243_20333);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20334], 0));


var G__20335 = seq__20240_20330;
var G__20336 = chunk__20241_20331;
var G__20337 = count__20242_20332;
var G__20338 = (i__20243_20333 + (1));
seq__20240_20330 = G__20335;
chunk__20241_20331 = G__20336;
count__20242_20332 = G__20337;
i__20243_20333 = G__20338;
continue;
} else {
var temp__5753__auto___20339 = cljs.core.seq(seq__20240_20330);
if(temp__5753__auto___20339){
var seq__20240_20340__$1 = temp__5753__auto___20339;
if(cljs.core.chunked_seq_QMARK_(seq__20240_20340__$1)){
var c__4679__auto___20341 = cljs.core.chunk_first(seq__20240_20340__$1);
var G__20342 = cljs.core.chunk_rest(seq__20240_20340__$1);
var G__20343 = c__4679__auto___20341;
var G__20344 = cljs.core.count(c__4679__auto___20341);
var G__20345 = (0);
seq__20240_20330 = G__20342;
chunk__20241_20331 = G__20343;
count__20242_20332 = G__20344;
i__20243_20333 = G__20345;
continue;
} else {
var f_20346 = cljs.core.first(seq__20240_20340__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20346], 0));


var G__20347 = cljs.core.next(seq__20240_20340__$1);
var G__20348 = null;
var G__20349 = (0);
var G__20350 = (0);
seq__20240_20330 = G__20347;
chunk__20241_20331 = G__20348;
count__20242_20332 = G__20349;
i__20243_20333 = G__20350;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20351], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20351)))?cljs.core.second(arglists_20351):arglists_20351)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20244_20352 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20245_20353 = null;
var count__20246_20354 = (0);
var i__20247_20355 = (0);
while(true){
if((i__20247_20355 < count__20246_20354)){
var vec__20256_20356 = chunk__20245_20353.cljs$core$IIndexed$_nth$arity$2(null,i__20247_20355);
var name_20357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256_20356,(0),null);
var map__20259_20358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256_20356,(1),null);
var map__20259_20359__$1 = cljs.core.__destructure_map(map__20259_20358);
var doc_20360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20259_20359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20259_20359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20357], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20361], 0));

if(cljs.core.truth_(doc_20360)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20360], 0));
} else {
}


var G__20362 = seq__20244_20352;
var G__20363 = chunk__20245_20353;
var G__20364 = count__20246_20354;
var G__20365 = (i__20247_20355 + (1));
seq__20244_20352 = G__20362;
chunk__20245_20353 = G__20363;
count__20246_20354 = G__20364;
i__20247_20355 = G__20365;
continue;
} else {
var temp__5753__auto___20366 = cljs.core.seq(seq__20244_20352);
if(temp__5753__auto___20366){
var seq__20244_20367__$1 = temp__5753__auto___20366;
if(cljs.core.chunked_seq_QMARK_(seq__20244_20367__$1)){
var c__4679__auto___20368 = cljs.core.chunk_first(seq__20244_20367__$1);
var G__20369 = cljs.core.chunk_rest(seq__20244_20367__$1);
var G__20370 = c__4679__auto___20368;
var G__20371 = cljs.core.count(c__4679__auto___20368);
var G__20372 = (0);
seq__20244_20352 = G__20369;
chunk__20245_20353 = G__20370;
count__20246_20354 = G__20371;
i__20247_20355 = G__20372;
continue;
} else {
var vec__20260_20373 = cljs.core.first(seq__20244_20367__$1);
var name_20374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20260_20373,(0),null);
var map__20263_20375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20260_20373,(1),null);
var map__20263_20376__$1 = cljs.core.__destructure_map(map__20263_20375);
var doc_20377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20263_20376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20263_20376__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20374], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20378], 0));

if(cljs.core.truth_(doc_20377)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20377], 0));
} else {
}


var G__20379 = cljs.core.next(seq__20244_20367__$1);
var G__20380 = null;
var G__20381 = (0);
var G__20382 = (0);
seq__20244_20352 = G__20379;
chunk__20245_20353 = G__20380;
count__20246_20354 = G__20381;
i__20247_20355 = G__20382;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20264 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20265 = null;
var count__20266 = (0);
var i__20267 = (0);
while(true){
if((i__20267 < count__20266)){
var role = chunk__20265.cljs$core$IIndexed$_nth$arity$2(null,i__20267);
var temp__5753__auto___20383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___20383__$1)){
var spec_20384 = temp__5753__auto___20383__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20384)], 0));
} else {
}


var G__20385 = seq__20264;
var G__20386 = chunk__20265;
var G__20387 = count__20266;
var G__20388 = (i__20267 + (1));
seq__20264 = G__20385;
chunk__20265 = G__20386;
count__20266 = G__20387;
i__20267 = G__20388;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__20264);
if(temp__5753__auto____$1){
var seq__20264__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20264__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20264__$1);
var G__20389 = cljs.core.chunk_rest(seq__20264__$1);
var G__20390 = c__4679__auto__;
var G__20391 = cljs.core.count(c__4679__auto__);
var G__20392 = (0);
seq__20264 = G__20389;
chunk__20265 = G__20390;
count__20266 = G__20391;
i__20267 = G__20392;
continue;
} else {
var role = cljs.core.first(seq__20264__$1);
var temp__5753__auto___20393__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___20393__$2)){
var spec_20394 = temp__5753__auto___20393__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20394)], 0));
} else {
}


var G__20395 = cljs.core.next(seq__20264__$1);
var G__20396 = null;
var G__20397 = (0);
var G__20398 = (0);
seq__20264 = G__20395;
chunk__20265 = G__20396;
count__20266 = G__20397;
i__20267 = G__20398;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20399 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20400 = cljs.core.ex_cause(t);
via = G__20399;
t = G__20400;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20270 = datafied_throwable;
var map__20270__$1 = cljs.core.__destructure_map(map__20270);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20270__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20270__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20270__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20271 = cljs.core.last(via);
var map__20271__$1 = cljs.core.__destructure_map(map__20271);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20272 = data;
var map__20272__$1 = cljs.core.__destructure_map(map__20272);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20272__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20272__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20272__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20273 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20273__$1 = cljs.core.__destructure_map(map__20273);
var top_data = map__20273__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20274 = phase;
var G__20274__$1 = (((G__20274 instanceof cljs.core.Keyword))?G__20274.fqn:null);
switch (G__20274__$1) {
case "read-source":
var map__20275 = data;
var map__20275__$1 = cljs.core.__destructure_map(map__20275);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20275__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20275__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20276 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20276__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20276,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20276);
var G__20276__$2 = (cljs.core.truth_((function (){var fexpr__20277 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20277.cljs$core$IFn$_invoke$arity$1 ? fexpr__20277.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20277.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20276__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20276__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20276__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20276__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20278 = top_data;
var G__20278__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20278,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20278);
var G__20278__$2 = (cljs.core.truth_((function (){var fexpr__20279 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20279.cljs$core$IFn$_invoke$arity$1 ? fexpr__20279.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20279.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20278__$1);
var G__20278__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20278__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20278__$2);
var G__20278__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20278__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20278__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20278__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20278__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20280 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(3),null);
var G__20283 = top_data;
var G__20283__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20283,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20283);
var G__20283__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20283__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20283__$1);
var G__20283__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20283__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20283__$2);
var G__20283__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20283__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20283__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20283__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20283__$4;
}

break;
case "execution":
var vec__20284 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20284,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20284,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20284,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20284,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20269_SHARP_){
var or__4253__auto__ = (p1__20269_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__20287 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20287.cljs$core$IFn$_invoke$arity$1 ? fexpr__20287.cljs$core$IFn$_invoke$arity$1(p1__20269_SHARP_) : fexpr__20287.call(null,p1__20269_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__20288 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20288__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20288,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20288);
var G__20288__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20288__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20288__$1);
var G__20288__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20288__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20288__$2);
var G__20288__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20288__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20288__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20288__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20288__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20274__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20291){
var map__20292 = p__20291;
var map__20292__$1 = cljs.core.__destructure_map(map__20292);
var triage_data = map__20292__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20292__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20293 = phase;
var G__20293__$1 = (((G__20293 instanceof cljs.core.Keyword))?G__20293.fqn:null);
switch (G__20293__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20294 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20295 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20296 = loc;
var G__20297 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20298_20403 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20299_20404 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20300_20405 = true;
var _STAR_print_fn_STAR__temp_val__20301_20406 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20300_20405);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20301_20406);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20289_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20289_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20299_20404);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20298_20403);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20294,G__20295,G__20296,G__20297) : format.call(null,G__20294,G__20295,G__20296,G__20297));

break;
case "macroexpansion":
var G__20302 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20303 = cause_type;
var G__20304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20305 = loc;
var G__20306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20302,G__20303,G__20304,G__20305,G__20306) : format.call(null,G__20302,G__20303,G__20304,G__20305,G__20306));

break;
case "compile-syntax-check":
var G__20307 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20308 = cause_type;
var G__20309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20310 = loc;
var G__20311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20307,G__20308,G__20309,G__20310,G__20311) : format.call(null,G__20307,G__20308,G__20309,G__20310,G__20311));

break;
case "compilation":
var G__20312 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20313 = cause_type;
var G__20314 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20315 = loc;
var G__20316 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20312,G__20313,G__20314,G__20315,G__20316) : format.call(null,G__20312,G__20313,G__20314,G__20315,G__20316));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20317 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20318 = symbol;
var G__20319 = loc;
var G__20320 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20321_20407 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20322_20408 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20323_20409 = true;
var _STAR_print_fn_STAR__temp_val__20324_20410 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20323_20409);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20324_20410);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20290_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20290_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20322_20408);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20321_20407);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20317,G__20318,G__20319,G__20320) : format.call(null,G__20317,G__20318,G__20319,G__20320));
} else {
var G__20325 = "Execution error%s at %s(%s).\n%s\n";
var G__20326 = cause_type;
var G__20327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20328 = loc;
var G__20329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20325,G__20326,G__20327,G__20328,G__20329) : format.call(null,G__20325,G__20326,G__20327,G__20328,G__20329));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20293__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
