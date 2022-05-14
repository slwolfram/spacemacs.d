goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21030 = arguments.length;
var i__4865__auto___21031 = (0);
while(true){
if((i__4865__auto___21031 < len__4864__auto___21030)){
args__4870__auto__.push((arguments[i__4865__auto___21031]));

var G__21032 = (i__4865__auto___21031 + (1));
i__4865__auto___21031 = G__21032;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20750){
var G__20751 = cljs.core.first(seq20750);
var seq20750__$1 = cljs.core.next(seq20750);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20751,seq20750__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20752 = cljs.core.seq(sources);
var chunk__20753 = null;
var count__20754 = (0);
var i__20755 = (0);
while(true){
if((i__20755 < count__20754)){
var map__20760 = chunk__20753.cljs$core$IIndexed$_nth$arity$2(null,i__20755);
var map__20760__$1 = cljs.core.__destructure_map(map__20760);
var src = map__20760__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20760__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20760__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20760__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20760__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20761){var e_21033 = e20761;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21033);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21033.message)].join('')));
}

var G__21034 = seq__20752;
var G__21035 = chunk__20753;
var G__21036 = count__20754;
var G__21037 = (i__20755 + (1));
seq__20752 = G__21034;
chunk__20753 = G__21035;
count__20754 = G__21036;
i__20755 = G__21037;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20752);
if(temp__5753__auto__){
var seq__20752__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20752__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20752__$1);
var G__21038 = cljs.core.chunk_rest(seq__20752__$1);
var G__21039 = c__4679__auto__;
var G__21040 = cljs.core.count(c__4679__auto__);
var G__21041 = (0);
seq__20752 = G__21038;
chunk__20753 = G__21039;
count__20754 = G__21040;
i__20755 = G__21041;
continue;
} else {
var map__20762 = cljs.core.first(seq__20752__$1);
var map__20762__$1 = cljs.core.__destructure_map(map__20762);
var src = map__20762__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20763){var e_21042 = e20763;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21042);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21042.message)].join('')));
}

var G__21043 = cljs.core.next(seq__20752__$1);
var G__21044 = null;
var G__21045 = (0);
var G__21046 = (0);
seq__20752 = G__21043;
chunk__20753 = G__21044;
count__20754 = G__21045;
i__20755 = G__21046;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20764 = cljs.core.seq(js_requires);
var chunk__20765 = null;
var count__20766 = (0);
var i__20767 = (0);
while(true){
if((i__20767 < count__20766)){
var js_ns = chunk__20765.cljs$core$IIndexed$_nth$arity$2(null,i__20767);
var require_str_21047 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21047);


var G__21048 = seq__20764;
var G__21049 = chunk__20765;
var G__21050 = count__20766;
var G__21051 = (i__20767 + (1));
seq__20764 = G__21048;
chunk__20765 = G__21049;
count__20766 = G__21050;
i__20767 = G__21051;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20764);
if(temp__5753__auto__){
var seq__20764__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20764__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20764__$1);
var G__21052 = cljs.core.chunk_rest(seq__20764__$1);
var G__21053 = c__4679__auto__;
var G__21054 = cljs.core.count(c__4679__auto__);
var G__21055 = (0);
seq__20764 = G__21052;
chunk__20765 = G__21053;
count__20766 = G__21054;
i__20767 = G__21055;
continue;
} else {
var js_ns = cljs.core.first(seq__20764__$1);
var require_str_21056 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21056);


var G__21057 = cljs.core.next(seq__20764__$1);
var G__21058 = null;
var G__21059 = (0);
var G__21060 = (0);
seq__20764 = G__21057;
chunk__20765 = G__21058;
count__20766 = G__21059;
i__20767 = G__21060;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20769){
var map__20770 = p__20769;
var map__20770__$1 = cljs.core.__destructure_map(map__20770);
var msg = map__20770__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20770__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20770__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20771(s__20772){
return (new cljs.core.LazySeq(null,(function (){
var s__20772__$1 = s__20772;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20772__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__20777 = cljs.core.first(xs__6308__auto__);
var map__20777__$1 = cljs.core.__destructure_map(map__20777);
var src = map__20777__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20777__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20777__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__20772__$1,map__20777,map__20777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__20770,map__20770__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20771_$_iter__20773(s__20774){
return (new cljs.core.LazySeq(null,((function (s__20772__$1,map__20777,map__20777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__20770,map__20770__$1,msg,info,reload_info){
return (function (){
var s__20774__$1 = s__20774;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__20774__$1);
if(temp__5753__auto____$1){
var s__20774__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20774__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__20774__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__20776 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__20775 = (0);
while(true){
if((i__20775 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__20775);
cljs.core.chunk_append(b__20776,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21061 = (i__20775 + (1));
i__20775 = G__21061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20776),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20771_$_iter__20773(cljs.core.chunk_rest(s__20774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20776),null);
}
} else {
var warning = cljs.core.first(s__20774__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20771_$_iter__20773(cljs.core.rest(s__20774__$2)));
}
} else {
return null;
}
break;
}
});})(s__20772__$1,map__20777,map__20777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__20770,map__20770__$1,msg,info,reload_info))
,null,null));
});})(s__20772__$1,map__20777,map__20777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__20770,map__20770__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20771(cljs.core.rest(s__20772__$1)));
} else {
var G__21062 = cljs.core.rest(s__20772__$1);
s__20772__$1 = G__21062;
continue;
}
} else {
var G__21063 = cljs.core.rest(s__20772__$1);
s__20772__$1 = G__21063;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20778_21064 = cljs.core.seq(warnings);
var chunk__20779_21065 = null;
var count__20780_21066 = (0);
var i__20781_21067 = (0);
while(true){
if((i__20781_21067 < count__20780_21066)){
var map__20784_21068 = chunk__20779_21065.cljs$core$IIndexed$_nth$arity$2(null,i__20781_21067);
var map__20784_21069__$1 = cljs.core.__destructure_map(map__20784_21068);
var w_21070 = map__20784_21069__$1;
var msg_21071__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784_21069__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784_21069__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784_21069__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784_21069__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21074)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21072),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21073),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21071__$1)].join(''));


var G__21075 = seq__20778_21064;
var G__21076 = chunk__20779_21065;
var G__21077 = count__20780_21066;
var G__21078 = (i__20781_21067 + (1));
seq__20778_21064 = G__21075;
chunk__20779_21065 = G__21076;
count__20780_21066 = G__21077;
i__20781_21067 = G__21078;
continue;
} else {
var temp__5753__auto___21079 = cljs.core.seq(seq__20778_21064);
if(temp__5753__auto___21079){
var seq__20778_21080__$1 = temp__5753__auto___21079;
if(cljs.core.chunked_seq_QMARK_(seq__20778_21080__$1)){
var c__4679__auto___21081 = cljs.core.chunk_first(seq__20778_21080__$1);
var G__21082 = cljs.core.chunk_rest(seq__20778_21080__$1);
var G__21083 = c__4679__auto___21081;
var G__21084 = cljs.core.count(c__4679__auto___21081);
var G__21085 = (0);
seq__20778_21064 = G__21082;
chunk__20779_21065 = G__21083;
count__20780_21066 = G__21084;
i__20781_21067 = G__21085;
continue;
} else {
var map__20785_21086 = cljs.core.first(seq__20778_21080__$1);
var map__20785_21087__$1 = cljs.core.__destructure_map(map__20785_21086);
var w_21088 = map__20785_21087__$1;
var msg_21089__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785_21087__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785_21087__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785_21087__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785_21087__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21092)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21090),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21091),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21089__$1)].join(''));


var G__21093 = cljs.core.next(seq__20778_21080__$1);
var G__21094 = null;
var G__21095 = (0);
var G__21096 = (0);
seq__20778_21064 = G__21093;
chunk__20779_21065 = G__21094;
count__20780_21066 = G__21095;
i__20781_21067 = G__21096;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20768_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20768_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20786){
var map__20787 = p__20786;
var map__20787__$1 = cljs.core.__destructure_map(map__20787);
var msg = map__20787__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20788 = cljs.core.seq(updates);
var chunk__20790 = null;
var count__20791 = (0);
var i__20792 = (0);
while(true){
if((i__20792 < count__20791)){
var path = chunk__20790.cljs$core$IIndexed$_nth$arity$2(null,i__20792);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20902_21097 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20906_21098 = null;
var count__20907_21099 = (0);
var i__20908_21100 = (0);
while(true){
if((i__20908_21100 < count__20907_21099)){
var node_21101 = chunk__20906_21098.cljs$core$IIndexed$_nth$arity$2(null,i__20908_21100);
if(cljs.core.not(node_21101.shadow$old)){
var path_match_21102 = shadow.cljs.devtools.client.browser.match_paths(node_21101.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21102)){
var new_link_21103 = (function (){var G__20934 = node_21101.cloneNode(true);
G__20934.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21102),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20934;
})();
(node_21101.shadow$old = true);

(new_link_21103.onload = ((function (seq__20902_21097,chunk__20906_21098,count__20907_21099,i__20908_21100,seq__20788,chunk__20790,count__20791,i__20792,new_link_21103,path_match_21102,node_21101,path,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__20935_21104 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20937_21105 = null;
var count__20938_21106 = (0);
var i__20939_21107 = (0);
while(true){
if((i__20939_21107 < count__20938_21106)){
var map__20943_21108 = chunk__20937_21105.cljs$core$IIndexed$_nth$arity$2(null,i__20939_21107);
var map__20943_21109__$1 = cljs.core.__destructure_map(map__20943_21108);
var task_21110 = map__20943_21109__$1;
var fn_str_21111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943_21109__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943_21109__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21113 = goog.getObjectByName(fn_str_21111,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21112)].join(''));

(fn_obj_21113.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21113.cljs$core$IFn$_invoke$arity$2(path,new_link_21103) : fn_obj_21113.call(null,path,new_link_21103));


var G__21114 = seq__20935_21104;
var G__21115 = chunk__20937_21105;
var G__21116 = count__20938_21106;
var G__21117 = (i__20939_21107 + (1));
seq__20935_21104 = G__21114;
chunk__20937_21105 = G__21115;
count__20938_21106 = G__21116;
i__20939_21107 = G__21117;
continue;
} else {
var temp__5753__auto___21118 = cljs.core.seq(seq__20935_21104);
if(temp__5753__auto___21118){
var seq__20935_21119__$1 = temp__5753__auto___21118;
if(cljs.core.chunked_seq_QMARK_(seq__20935_21119__$1)){
var c__4679__auto___21120 = cljs.core.chunk_first(seq__20935_21119__$1);
var G__21121 = cljs.core.chunk_rest(seq__20935_21119__$1);
var G__21122 = c__4679__auto___21120;
var G__21123 = cljs.core.count(c__4679__auto___21120);
var G__21124 = (0);
seq__20935_21104 = G__21121;
chunk__20937_21105 = G__21122;
count__20938_21106 = G__21123;
i__20939_21107 = G__21124;
continue;
} else {
var map__20944_21125 = cljs.core.first(seq__20935_21119__$1);
var map__20944_21126__$1 = cljs.core.__destructure_map(map__20944_21125);
var task_21127 = map__20944_21126__$1;
var fn_str_21128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944_21126__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944_21126__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21130 = goog.getObjectByName(fn_str_21128,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21129)].join(''));

(fn_obj_21130.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21130.cljs$core$IFn$_invoke$arity$2(path,new_link_21103) : fn_obj_21130.call(null,path,new_link_21103));


var G__21131 = cljs.core.next(seq__20935_21119__$1);
var G__21132 = null;
var G__21133 = (0);
var G__21134 = (0);
seq__20935_21104 = G__21131;
chunk__20937_21105 = G__21132;
count__20938_21106 = G__21133;
i__20939_21107 = G__21134;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21101);
});})(seq__20902_21097,chunk__20906_21098,count__20907_21099,i__20908_21100,seq__20788,chunk__20790,count__20791,i__20792,new_link_21103,path_match_21102,node_21101,path,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21102], 0));

goog.dom.insertSiblingAfter(new_link_21103,node_21101);


var G__21135 = seq__20902_21097;
var G__21136 = chunk__20906_21098;
var G__21137 = count__20907_21099;
var G__21138 = (i__20908_21100 + (1));
seq__20902_21097 = G__21135;
chunk__20906_21098 = G__21136;
count__20907_21099 = G__21137;
i__20908_21100 = G__21138;
continue;
} else {
var G__21139 = seq__20902_21097;
var G__21140 = chunk__20906_21098;
var G__21141 = count__20907_21099;
var G__21142 = (i__20908_21100 + (1));
seq__20902_21097 = G__21139;
chunk__20906_21098 = G__21140;
count__20907_21099 = G__21141;
i__20908_21100 = G__21142;
continue;
}
} else {
var G__21143 = seq__20902_21097;
var G__21144 = chunk__20906_21098;
var G__21145 = count__20907_21099;
var G__21146 = (i__20908_21100 + (1));
seq__20902_21097 = G__21143;
chunk__20906_21098 = G__21144;
count__20907_21099 = G__21145;
i__20908_21100 = G__21146;
continue;
}
} else {
var temp__5753__auto___21147 = cljs.core.seq(seq__20902_21097);
if(temp__5753__auto___21147){
var seq__20902_21148__$1 = temp__5753__auto___21147;
if(cljs.core.chunked_seq_QMARK_(seq__20902_21148__$1)){
var c__4679__auto___21149 = cljs.core.chunk_first(seq__20902_21148__$1);
var G__21150 = cljs.core.chunk_rest(seq__20902_21148__$1);
var G__21151 = c__4679__auto___21149;
var G__21152 = cljs.core.count(c__4679__auto___21149);
var G__21153 = (0);
seq__20902_21097 = G__21150;
chunk__20906_21098 = G__21151;
count__20907_21099 = G__21152;
i__20908_21100 = G__21153;
continue;
} else {
var node_21154 = cljs.core.first(seq__20902_21148__$1);
if(cljs.core.not(node_21154.shadow$old)){
var path_match_21155 = shadow.cljs.devtools.client.browser.match_paths(node_21154.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21155)){
var new_link_21156 = (function (){var G__20945 = node_21154.cloneNode(true);
G__20945.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21155),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20945;
})();
(node_21154.shadow$old = true);

(new_link_21156.onload = ((function (seq__20902_21097,chunk__20906_21098,count__20907_21099,i__20908_21100,seq__20788,chunk__20790,count__20791,i__20792,new_link_21156,path_match_21155,node_21154,seq__20902_21148__$1,temp__5753__auto___21147,path,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__20946_21157 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20948_21158 = null;
var count__20949_21159 = (0);
var i__20950_21160 = (0);
while(true){
if((i__20950_21160 < count__20949_21159)){
var map__20954_21161 = chunk__20948_21158.cljs$core$IIndexed$_nth$arity$2(null,i__20950_21160);
var map__20954_21162__$1 = cljs.core.__destructure_map(map__20954_21161);
var task_21163 = map__20954_21162__$1;
var fn_str_21164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20954_21162__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20954_21162__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21166 = goog.getObjectByName(fn_str_21164,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21165)].join(''));

(fn_obj_21166.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21166.cljs$core$IFn$_invoke$arity$2(path,new_link_21156) : fn_obj_21166.call(null,path,new_link_21156));


var G__21167 = seq__20946_21157;
var G__21168 = chunk__20948_21158;
var G__21169 = count__20949_21159;
var G__21170 = (i__20950_21160 + (1));
seq__20946_21157 = G__21167;
chunk__20948_21158 = G__21168;
count__20949_21159 = G__21169;
i__20950_21160 = G__21170;
continue;
} else {
var temp__5753__auto___21171__$1 = cljs.core.seq(seq__20946_21157);
if(temp__5753__auto___21171__$1){
var seq__20946_21172__$1 = temp__5753__auto___21171__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20946_21172__$1)){
var c__4679__auto___21173 = cljs.core.chunk_first(seq__20946_21172__$1);
var G__21174 = cljs.core.chunk_rest(seq__20946_21172__$1);
var G__21175 = c__4679__auto___21173;
var G__21176 = cljs.core.count(c__4679__auto___21173);
var G__21177 = (0);
seq__20946_21157 = G__21174;
chunk__20948_21158 = G__21175;
count__20949_21159 = G__21176;
i__20950_21160 = G__21177;
continue;
} else {
var map__20955_21178 = cljs.core.first(seq__20946_21172__$1);
var map__20955_21179__$1 = cljs.core.__destructure_map(map__20955_21178);
var task_21180 = map__20955_21179__$1;
var fn_str_21181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20955_21179__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20955_21179__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21183 = goog.getObjectByName(fn_str_21181,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21182)].join(''));

(fn_obj_21183.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21183.cljs$core$IFn$_invoke$arity$2(path,new_link_21156) : fn_obj_21183.call(null,path,new_link_21156));


var G__21184 = cljs.core.next(seq__20946_21172__$1);
var G__21185 = null;
var G__21186 = (0);
var G__21187 = (0);
seq__20946_21157 = G__21184;
chunk__20948_21158 = G__21185;
count__20949_21159 = G__21186;
i__20950_21160 = G__21187;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21154);
});})(seq__20902_21097,chunk__20906_21098,count__20907_21099,i__20908_21100,seq__20788,chunk__20790,count__20791,i__20792,new_link_21156,path_match_21155,node_21154,seq__20902_21148__$1,temp__5753__auto___21147,path,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21155], 0));

goog.dom.insertSiblingAfter(new_link_21156,node_21154);


var G__21188 = cljs.core.next(seq__20902_21148__$1);
var G__21189 = null;
var G__21190 = (0);
var G__21191 = (0);
seq__20902_21097 = G__21188;
chunk__20906_21098 = G__21189;
count__20907_21099 = G__21190;
i__20908_21100 = G__21191;
continue;
} else {
var G__21192 = cljs.core.next(seq__20902_21148__$1);
var G__21193 = null;
var G__21194 = (0);
var G__21195 = (0);
seq__20902_21097 = G__21192;
chunk__20906_21098 = G__21193;
count__20907_21099 = G__21194;
i__20908_21100 = G__21195;
continue;
}
} else {
var G__21196 = cljs.core.next(seq__20902_21148__$1);
var G__21197 = null;
var G__21198 = (0);
var G__21199 = (0);
seq__20902_21097 = G__21196;
chunk__20906_21098 = G__21197;
count__20907_21099 = G__21198;
i__20908_21100 = G__21199;
continue;
}
}
} else {
}
}
break;
}


var G__21200 = seq__20788;
var G__21201 = chunk__20790;
var G__21202 = count__20791;
var G__21203 = (i__20792 + (1));
seq__20788 = G__21200;
chunk__20790 = G__21201;
count__20791 = G__21202;
i__20792 = G__21203;
continue;
} else {
var G__21204 = seq__20788;
var G__21205 = chunk__20790;
var G__21206 = count__20791;
var G__21207 = (i__20792 + (1));
seq__20788 = G__21204;
chunk__20790 = G__21205;
count__20791 = G__21206;
i__20792 = G__21207;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20788);
if(temp__5753__auto__){
var seq__20788__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20788__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20788__$1);
var G__21208 = cljs.core.chunk_rest(seq__20788__$1);
var G__21209 = c__4679__auto__;
var G__21210 = cljs.core.count(c__4679__auto__);
var G__21211 = (0);
seq__20788 = G__21208;
chunk__20790 = G__21209;
count__20791 = G__21210;
i__20792 = G__21211;
continue;
} else {
var path = cljs.core.first(seq__20788__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20956_21212 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20960_21213 = null;
var count__20961_21214 = (0);
var i__20962_21215 = (0);
while(true){
if((i__20962_21215 < count__20961_21214)){
var node_21216 = chunk__20960_21213.cljs$core$IIndexed$_nth$arity$2(null,i__20962_21215);
if(cljs.core.not(node_21216.shadow$old)){
var path_match_21217 = shadow.cljs.devtools.client.browser.match_paths(node_21216.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21217)){
var new_link_21218 = (function (){var G__20988 = node_21216.cloneNode(true);
G__20988.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21217),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20988;
})();
(node_21216.shadow$old = true);

(new_link_21218.onload = ((function (seq__20956_21212,chunk__20960_21213,count__20961_21214,i__20962_21215,seq__20788,chunk__20790,count__20791,i__20792,new_link_21218,path_match_21217,node_21216,path,seq__20788__$1,temp__5753__auto__,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__20989_21219 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20991_21220 = null;
var count__20992_21221 = (0);
var i__20993_21222 = (0);
while(true){
if((i__20993_21222 < count__20992_21221)){
var map__20997_21223 = chunk__20991_21220.cljs$core$IIndexed$_nth$arity$2(null,i__20993_21222);
var map__20997_21224__$1 = cljs.core.__destructure_map(map__20997_21223);
var task_21225 = map__20997_21224__$1;
var fn_str_21226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997_21224__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997_21224__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21228 = goog.getObjectByName(fn_str_21226,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21227)].join(''));

(fn_obj_21228.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21228.cljs$core$IFn$_invoke$arity$2(path,new_link_21218) : fn_obj_21228.call(null,path,new_link_21218));


var G__21229 = seq__20989_21219;
var G__21230 = chunk__20991_21220;
var G__21231 = count__20992_21221;
var G__21232 = (i__20993_21222 + (1));
seq__20989_21219 = G__21229;
chunk__20991_21220 = G__21230;
count__20992_21221 = G__21231;
i__20993_21222 = G__21232;
continue;
} else {
var temp__5753__auto___21233__$1 = cljs.core.seq(seq__20989_21219);
if(temp__5753__auto___21233__$1){
var seq__20989_21234__$1 = temp__5753__auto___21233__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20989_21234__$1)){
var c__4679__auto___21235 = cljs.core.chunk_first(seq__20989_21234__$1);
var G__21236 = cljs.core.chunk_rest(seq__20989_21234__$1);
var G__21237 = c__4679__auto___21235;
var G__21238 = cljs.core.count(c__4679__auto___21235);
var G__21239 = (0);
seq__20989_21219 = G__21236;
chunk__20991_21220 = G__21237;
count__20992_21221 = G__21238;
i__20993_21222 = G__21239;
continue;
} else {
var map__20998_21240 = cljs.core.first(seq__20989_21234__$1);
var map__20998_21241__$1 = cljs.core.__destructure_map(map__20998_21240);
var task_21242 = map__20998_21241__$1;
var fn_str_21243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20998_21241__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20998_21241__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21245 = goog.getObjectByName(fn_str_21243,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21244)].join(''));

(fn_obj_21245.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21245.cljs$core$IFn$_invoke$arity$2(path,new_link_21218) : fn_obj_21245.call(null,path,new_link_21218));


var G__21246 = cljs.core.next(seq__20989_21234__$1);
var G__21247 = null;
var G__21248 = (0);
var G__21249 = (0);
seq__20989_21219 = G__21246;
chunk__20991_21220 = G__21247;
count__20992_21221 = G__21248;
i__20993_21222 = G__21249;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21216);
});})(seq__20956_21212,chunk__20960_21213,count__20961_21214,i__20962_21215,seq__20788,chunk__20790,count__20791,i__20792,new_link_21218,path_match_21217,node_21216,path,seq__20788__$1,temp__5753__auto__,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21217], 0));

goog.dom.insertSiblingAfter(new_link_21218,node_21216);


var G__21250 = seq__20956_21212;
var G__21251 = chunk__20960_21213;
var G__21252 = count__20961_21214;
var G__21253 = (i__20962_21215 + (1));
seq__20956_21212 = G__21250;
chunk__20960_21213 = G__21251;
count__20961_21214 = G__21252;
i__20962_21215 = G__21253;
continue;
} else {
var G__21254 = seq__20956_21212;
var G__21255 = chunk__20960_21213;
var G__21256 = count__20961_21214;
var G__21257 = (i__20962_21215 + (1));
seq__20956_21212 = G__21254;
chunk__20960_21213 = G__21255;
count__20961_21214 = G__21256;
i__20962_21215 = G__21257;
continue;
}
} else {
var G__21258 = seq__20956_21212;
var G__21259 = chunk__20960_21213;
var G__21260 = count__20961_21214;
var G__21261 = (i__20962_21215 + (1));
seq__20956_21212 = G__21258;
chunk__20960_21213 = G__21259;
count__20961_21214 = G__21260;
i__20962_21215 = G__21261;
continue;
}
} else {
var temp__5753__auto___21262__$1 = cljs.core.seq(seq__20956_21212);
if(temp__5753__auto___21262__$1){
var seq__20956_21263__$1 = temp__5753__auto___21262__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20956_21263__$1)){
var c__4679__auto___21264 = cljs.core.chunk_first(seq__20956_21263__$1);
var G__21265 = cljs.core.chunk_rest(seq__20956_21263__$1);
var G__21266 = c__4679__auto___21264;
var G__21267 = cljs.core.count(c__4679__auto___21264);
var G__21268 = (0);
seq__20956_21212 = G__21265;
chunk__20960_21213 = G__21266;
count__20961_21214 = G__21267;
i__20962_21215 = G__21268;
continue;
} else {
var node_21269 = cljs.core.first(seq__20956_21263__$1);
if(cljs.core.not(node_21269.shadow$old)){
var path_match_21270 = shadow.cljs.devtools.client.browser.match_paths(node_21269.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21270)){
var new_link_21271 = (function (){var G__20999 = node_21269.cloneNode(true);
G__20999.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21270),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20999;
})();
(node_21269.shadow$old = true);

(new_link_21271.onload = ((function (seq__20956_21212,chunk__20960_21213,count__20961_21214,i__20962_21215,seq__20788,chunk__20790,count__20791,i__20792,new_link_21271,path_match_21270,node_21269,seq__20956_21263__$1,temp__5753__auto___21262__$1,path,seq__20788__$1,temp__5753__auto__,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__21000_21272 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21002_21273 = null;
var count__21003_21274 = (0);
var i__21004_21275 = (0);
while(true){
if((i__21004_21275 < count__21003_21274)){
var map__21008_21276 = chunk__21002_21273.cljs$core$IIndexed$_nth$arity$2(null,i__21004_21275);
var map__21008_21277__$1 = cljs.core.__destructure_map(map__21008_21276);
var task_21278 = map__21008_21277__$1;
var fn_str_21279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21277__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21277__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21281 = goog.getObjectByName(fn_str_21279,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21280)].join(''));

(fn_obj_21281.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21281.cljs$core$IFn$_invoke$arity$2(path,new_link_21271) : fn_obj_21281.call(null,path,new_link_21271));


var G__21282 = seq__21000_21272;
var G__21283 = chunk__21002_21273;
var G__21284 = count__21003_21274;
var G__21285 = (i__21004_21275 + (1));
seq__21000_21272 = G__21282;
chunk__21002_21273 = G__21283;
count__21003_21274 = G__21284;
i__21004_21275 = G__21285;
continue;
} else {
var temp__5753__auto___21286__$2 = cljs.core.seq(seq__21000_21272);
if(temp__5753__auto___21286__$2){
var seq__21000_21287__$1 = temp__5753__auto___21286__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21000_21287__$1)){
var c__4679__auto___21288 = cljs.core.chunk_first(seq__21000_21287__$1);
var G__21289 = cljs.core.chunk_rest(seq__21000_21287__$1);
var G__21290 = c__4679__auto___21288;
var G__21291 = cljs.core.count(c__4679__auto___21288);
var G__21292 = (0);
seq__21000_21272 = G__21289;
chunk__21002_21273 = G__21290;
count__21003_21274 = G__21291;
i__21004_21275 = G__21292;
continue;
} else {
var map__21009_21293 = cljs.core.first(seq__21000_21287__$1);
var map__21009_21294__$1 = cljs.core.__destructure_map(map__21009_21293);
var task_21295 = map__21009_21294__$1;
var fn_str_21296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21009_21294__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21009_21294__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21298 = goog.getObjectByName(fn_str_21296,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21297)].join(''));

(fn_obj_21298.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21298.cljs$core$IFn$_invoke$arity$2(path,new_link_21271) : fn_obj_21298.call(null,path,new_link_21271));


var G__21299 = cljs.core.next(seq__21000_21287__$1);
var G__21300 = null;
var G__21301 = (0);
var G__21302 = (0);
seq__21000_21272 = G__21299;
chunk__21002_21273 = G__21300;
count__21003_21274 = G__21301;
i__21004_21275 = G__21302;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21269);
});})(seq__20956_21212,chunk__20960_21213,count__20961_21214,i__20962_21215,seq__20788,chunk__20790,count__20791,i__20792,new_link_21271,path_match_21270,node_21269,seq__20956_21263__$1,temp__5753__auto___21262__$1,path,seq__20788__$1,temp__5753__auto__,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21270], 0));

goog.dom.insertSiblingAfter(new_link_21271,node_21269);


var G__21303 = cljs.core.next(seq__20956_21263__$1);
var G__21304 = null;
var G__21305 = (0);
var G__21306 = (0);
seq__20956_21212 = G__21303;
chunk__20960_21213 = G__21304;
count__20961_21214 = G__21305;
i__20962_21215 = G__21306;
continue;
} else {
var G__21307 = cljs.core.next(seq__20956_21263__$1);
var G__21308 = null;
var G__21309 = (0);
var G__21310 = (0);
seq__20956_21212 = G__21307;
chunk__20960_21213 = G__21308;
count__20961_21214 = G__21309;
i__20962_21215 = G__21310;
continue;
}
} else {
var G__21311 = cljs.core.next(seq__20956_21263__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__20956_21212 = G__21311;
chunk__20960_21213 = G__21312;
count__20961_21214 = G__21313;
i__20962_21215 = G__21314;
continue;
}
}
} else {
}
}
break;
}


var G__21315 = cljs.core.next(seq__20788__$1);
var G__21316 = null;
var G__21317 = (0);
var G__21318 = (0);
seq__20788 = G__21315;
chunk__20790 = G__21316;
count__20791 = G__21317;
i__20792 = G__21318;
continue;
} else {
var G__21319 = cljs.core.next(seq__20788__$1);
var G__21320 = null;
var G__21321 = (0);
var G__21322 = (0);
seq__20788 = G__21319;
chunk__20790 = G__21320;
count__20791 = G__21321;
i__20792 = G__21322;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21010){
var map__21011 = p__21010;
var map__21011__$1 = cljs.core.__destructure_map(map__21011);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21012){
var map__21013 = p__21012;
var map__21013__$1 = cljs.core.__destructure_map(map__21013);
var _ = map__21013__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21013__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21014,done,error){
var map__21015 = p__21014;
var map__21015__$1 = cljs.core.__destructure_map(map__21015);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21016,done,error){
var map__21017 = p__21016;
var map__21017__$1 = cljs.core.__destructure_map(map__21017);
var msg = map__21017__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21017__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21017__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21017__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21018){
var map__21019 = p__21018;
var map__21019__$1 = cljs.core.__destructure_map(map__21019);
var src = map__21019__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21020 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21020) : done.call(null,G__21020));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21021){
var map__21022 = p__21021;
var map__21022__$1 = cljs.core.__destructure_map(map__21022);
var msg__$1 = map__21022__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21022__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21023){var ex = e21023;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21024){
var map__21025 = p__21024;
var map__21025__$1 = cljs.core.__destructure_map(map__21025);
var env = map__21025__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21026){
var map__21027 = p__21026;
var map__21027__$1 = cljs.core.__destructure_map(map__21027);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21028){
var map__21029 = p__21028;
var map__21029__$1 = cljs.core.__destructure_map(map__21029);
var svc = map__21029__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
