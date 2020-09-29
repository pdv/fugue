// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__29446 = s;
var map__29446__$1 = (((((!((map__29446 == null))))?(((((map__29446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29446):map__29446);
var name = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29449 = info;
var map__29450 = G__29449;
var map__29450__$1 = (((((!((map__29450 == null))))?(((((map__29450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29450):map__29450);
var shadow = cljs.core.get.call(null,map__29450__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29449__$1 = G__29449;
while(true){
var d__$2 = d__$1;
var map__29454 = G__29449__$1;
var map__29454__$1 = (((((!((map__29454 == null))))?(((((map__29454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29454):map__29454);
var shadow__$1 = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29456 = (d__$2 + (1));
var G__29457 = shadow__$1;
d__$1 = G__29456;
G__29449__$1 = G__29457;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29458){
var map__29459 = p__29458;
var map__29459__$1 = (((((!((map__29459 == null))))?(((((map__29459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29459):map__29459);
var name_var = map__29459__$1;
var name = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__29461 = info;
var map__29461__$1 = (((((!((map__29461 == null))))?(((((map__29461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);
var ns = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__29464 = arguments.length;
switch (G__29464) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11478),(11478),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__29466 = cp;
switch (G__29466) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__29468_29472 = cljs.core.seq.call(null,s);
var chunk__29469_29473 = null;
var count__29470_29474 = (0);
var i__29471_29475 = (0);
while(true){
if((i__29471_29475 < count__29470_29474)){
var c_29476 = cljs.core._nth.call(null,chunk__29469_29473,i__29471_29475);
sb.append(cljs.compiler.escape_char.call(null,c_29476));


var G__29477 = seq__29468_29472;
var G__29478 = chunk__29469_29473;
var G__29479 = count__29470_29474;
var G__29480 = (i__29471_29475 + (1));
seq__29468_29472 = G__29477;
chunk__29469_29473 = G__29478;
count__29470_29474 = G__29479;
i__29471_29475 = G__29480;
continue;
} else {
var temp__5720__auto___29481 = cljs.core.seq.call(null,seq__29468_29472);
if(temp__5720__auto___29481){
var seq__29468_29482__$1 = temp__5720__auto___29481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29468_29482__$1)){
var c__4550__auto___29483 = cljs.core.chunk_first.call(null,seq__29468_29482__$1);
var G__29484 = cljs.core.chunk_rest.call(null,seq__29468_29482__$1);
var G__29485 = c__4550__auto___29483;
var G__29486 = cljs.core.count.call(null,c__4550__auto___29483);
var G__29487 = (0);
seq__29468_29472 = G__29484;
chunk__29469_29473 = G__29485;
count__29470_29474 = G__29486;
i__29471_29475 = G__29487;
continue;
} else {
var c_29488 = cljs.core.first.call(null,seq__29468_29482__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29488));


var G__29489 = cljs.core.next.call(null,seq__29468_29482__$1);
var G__29490 = null;
var G__29491 = (0);
var G__29492 = (0);
seq__29468_29472 = G__29489;
chunk__29469_29473 = G__29490;
count__29470_29474 = G__29491;
i__29471_29475 = G__29492;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__29493_29498 = ast;
var map__29493_29499__$1 = (((((!((map__29493_29498 == null))))?(((((map__29493_29498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29493_29498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29493_29498):map__29493_29498);
var env_29500 = cljs.core.get.call(null,map__29493_29499__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29500))){
var map__29495_29501 = env_29500;
var map__29495_29502__$1 = (((((!((map__29495_29501 == null))))?(((((map__29495_29501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29495_29501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29495_29501):map__29495_29501);
var line_29503 = cljs.core.get.call(null,map__29495_29502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29504 = cljs.core.get.call(null,map__29495_29502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29495_29501,map__29495_29502__$1,line_29503,column_29504,map__29493_29498,map__29493_29499__$1,env_29500){
return (function (m){
var minfo = (function (){var G__29497 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__29497,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__29497;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29503 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29495_29501,map__29495_29502__$1,line_29503,column_29504,map__29493_29498,map__29493_29499__$1,env_29500){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29504)?(column_29504 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29495_29501,map__29495_29502__$1,line_29503,column_29504,map__29493_29498,map__29493_29499__$1,env_29500){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29495_29501,map__29495_29502__$1,line_29503,column_29504,map__29493_29498,map__29493_29499__$1,env_29500))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29495_29501,map__29495_29502__$1,line_29503,column_29504,map__29493_29498,map__29493_29499__$1,env_29500))
,cljs.core.sorted_map.call(null)));
});})(map__29495_29501,map__29495_29502__$1,line_29503,column_29504,map__29493_29498,map__29493_29499__$1,env_29500))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__29513 = arguments.length;
switch (G__29513) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___29520 = arguments.length;
var i__4731__auto___29521 = (0);
while(true){
if((i__4731__auto___29521 < len__4730__auto___29520)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29521]));

var G__29522 = (i__4731__auto___29521 + (1));
i__4731__auto___29521 = G__29522;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_29523 = (function (){var G__29514 = a;
if((!(typeof a === 'string'))){
return G__29514.toString();
} else {
return G__29514;
}
})();
var temp__5724__auto___29524 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___29524 == null)){
} else {
var sm_data_29525 = temp__5724__auto___29524;
cljs.core.swap_BANG_.call(null,sm_data_29525,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_29525,temp__5724__auto___29524,s_29523){
return (function (p1__29505_SHARP_){
return (p1__29505_SHARP_ + s_29523.length);
});})(sm_data_29525,temp__5724__auto___29524,s_29523))
);
}

cljs.core.print.call(null,s_29523);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__29515 = cljs.core.seq.call(null,xs);
var chunk__29516 = null;
var count__29517 = (0);
var i__29518 = (0);
while(true){
if((i__29518 < count__29517)){
var x = cljs.core._nth.call(null,chunk__29516,i__29518);
cljs.compiler.emits.call(null,x);


var G__29526 = seq__29515;
var G__29527 = chunk__29516;
var G__29528 = count__29517;
var G__29529 = (i__29518 + (1));
seq__29515 = G__29526;
chunk__29516 = G__29527;
count__29517 = G__29528;
i__29518 = G__29529;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29515);
if(temp__5720__auto__){
var seq__29515__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29515__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29515__$1);
var G__29530 = cljs.core.chunk_rest.call(null,seq__29515__$1);
var G__29531 = c__4550__auto__;
var G__29532 = cljs.core.count.call(null,c__4550__auto__);
var G__29533 = (0);
seq__29515 = G__29530;
chunk__29516 = G__29531;
count__29517 = G__29532;
i__29518 = G__29533;
continue;
} else {
var x = cljs.core.first.call(null,seq__29515__$1);
cljs.compiler.emits.call(null,x);


var G__29534 = cljs.core.next.call(null,seq__29515__$1);
var G__29535 = null;
var G__29536 = (0);
var G__29537 = (0);
seq__29515 = G__29534;
chunk__29516 = G__29535;
count__29517 = G__29536;
i__29518 = G__29537;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq29507){
var G__29508 = cljs.core.first.call(null,seq29507);
var seq29507__$1 = cljs.core.next.call(null,seq29507);
var G__29509 = cljs.core.first.call(null,seq29507__$1);
var seq29507__$2 = cljs.core.next.call(null,seq29507__$1);
var G__29510 = cljs.core.first.call(null,seq29507__$2);
var seq29507__$3 = cljs.core.next.call(null,seq29507__$2);
var G__29511 = cljs.core.first.call(null,seq29507__$3);
var seq29507__$4 = cljs.core.next.call(null,seq29507__$3);
var G__29512 = cljs.core.first.call(null,seq29507__$4);
var seq29507__$5 = cljs.core.next.call(null,seq29507__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29508,G__29509,G__29510,G__29511,G__29512,seq29507__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29538){
var map__29539 = p__29538;
var map__29539__$1 = (((((!((map__29539 == null))))?(((((map__29539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);
var m = map__29539__$1;
var gen_line = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__29548 = arguments.length;
switch (G__29548) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___29554 = arguments.length;
var i__4731__auto___29555 = (0);
while(true){
if((i__4731__auto___29555 < len__4730__auto___29554)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29555]));

var G__29556 = (i__4731__auto___29555 + (1));
i__4731__auto___29555 = G__29556;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__29549_29557 = cljs.core.seq.call(null,xs);
var chunk__29550_29558 = null;
var count__29551_29559 = (0);
var i__29552_29560 = (0);
while(true){
if((i__29552_29560 < count__29551_29559)){
var x_29561 = cljs.core._nth.call(null,chunk__29550_29558,i__29552_29560);
cljs.compiler.emits.call(null,x_29561);


var G__29562 = seq__29549_29557;
var G__29563 = chunk__29550_29558;
var G__29564 = count__29551_29559;
var G__29565 = (i__29552_29560 + (1));
seq__29549_29557 = G__29562;
chunk__29550_29558 = G__29563;
count__29551_29559 = G__29564;
i__29552_29560 = G__29565;
continue;
} else {
var temp__5720__auto___29566 = cljs.core.seq.call(null,seq__29549_29557);
if(temp__5720__auto___29566){
var seq__29549_29567__$1 = temp__5720__auto___29566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29549_29567__$1)){
var c__4550__auto___29568 = cljs.core.chunk_first.call(null,seq__29549_29567__$1);
var G__29569 = cljs.core.chunk_rest.call(null,seq__29549_29567__$1);
var G__29570 = c__4550__auto___29568;
var G__29571 = cljs.core.count.call(null,c__4550__auto___29568);
var G__29572 = (0);
seq__29549_29557 = G__29569;
chunk__29550_29558 = G__29570;
count__29551_29559 = G__29571;
i__29552_29560 = G__29572;
continue;
} else {
var x_29573 = cljs.core.first.call(null,seq__29549_29567__$1);
cljs.compiler.emits.call(null,x_29573);


var G__29574 = cljs.core.next.call(null,seq__29549_29567__$1);
var G__29575 = null;
var G__29576 = (0);
var G__29577 = (0);
seq__29549_29557 = G__29574;
chunk__29550_29558 = G__29575;
count__29551_29559 = G__29576;
i__29552_29560 = G__29577;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29542){
var G__29543 = cljs.core.first.call(null,seq29542);
var seq29542__$1 = cljs.core.next.call(null,seq29542);
var G__29544 = cljs.core.first.call(null,seq29542__$1);
var seq29542__$2 = cljs.core.next.call(null,seq29542__$1);
var G__29545 = cljs.core.first.call(null,seq29542__$2);
var seq29542__$3 = cljs.core.next.call(null,seq29542__$2);
var G__29546 = cljs.core.first.call(null,seq29542__$3);
var seq29542__$4 = cljs.core.next.call(null,seq29542__$3);
var G__29547 = cljs.core.first.call(null,seq29542__$4);
var seq29542__$5 = cljs.core.next.call(null,seq29542__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29543,G__29544,G__29545,G__29546,G__29547,seq29542__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29578_29582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29579_29583 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29580_29584 = true;
var _STAR_print_fn_STAR__temp_val__29581_29585 = ((function (_STAR_print_newline_STAR__orig_val__29578_29582,_STAR_print_fn_STAR__orig_val__29579_29583,_STAR_print_newline_STAR__temp_val__29580_29584,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29578_29582,_STAR_print_fn_STAR__orig_val__29579_29583,_STAR_print_newline_STAR__temp_val__29580_29584,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29580_29584;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29581_29585;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29579_29583;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29578_29582;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__29586 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__29586,(0),null);
var name = cljs.core.nth.call(null,vec__29586,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__29586,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__29586,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__29589 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__29589,(0),null);
var flags = cljs.core.nth.call(null,vec__29589,(1),null);
var pattern = cljs.core.nth.call(null,vec__29589,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__29592_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__29592_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__29594){
var map__29595 = p__29594;
var map__29595__$1 = (((((!((map__29595 == null))))?(((((map__29595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29595):map__29595);
var ast = map__29595__$1;
var info = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__29597 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__29597__$1 = (((((!((map__29597 == null))))?(((((map__29597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29597):map__29597);
var cenv = map__29597__$1;
var options = cljs.core.get.call(null,map__29597__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__29599 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__29599,cljs.analyzer.es5_allowed);
} else {
return G__29599;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__29600 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29600,reserved);
} else {
return G__29600;
}
})();
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__29601_29602 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__29601_29603__$1 = (((G__29601_29602 instanceof cljs.core.Keyword))?G__29601_29602.fqn:null);
switch (G__29601_29603__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__29605){
var map__29606 = p__29605;
var map__29606__$1 = (((((!((map__29606 == null))))?(((((map__29606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29606):map__29606);
var arg = map__29606__$1;
var env = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29608 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29608__$1 = (((((!((map__29608 == null))))?(((((map__29608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29608):map__29608);
var name = cljs.core.get.call(null,map__29608__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__29610){
var map__29611 = p__29610;
var map__29611__$1 = (((((!((map__29611 == null))))?(((((map__29611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29611):map__29611);
var expr = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__29613_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29613_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29614){
var map__29615 = p__29614;
var map__29615__$1 = (((((!((map__29615 == null))))?(((((map__29615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29615):map__29615);
var env = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29617){
var map__29618 = p__29617;
var map__29618__$1 = (((((!((map__29618 == null))))?(((((map__29618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29618):map__29618);
var items = cljs.core.get.call(null,map__29618__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29618__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__29620_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29620_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29621){
var map__29622 = p__29621;
var map__29622__$1 = (((((!((map__29622 == null))))?(((((map__29622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);
var items = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___29646 = cljs.core.seq.call(null,items);
if(temp__5720__auto___29646){
var items_29647__$1 = temp__5720__auto___29646;
var vec__29624_29648 = items_29647__$1;
var seq__29625_29649 = cljs.core.seq.call(null,vec__29624_29648);
var first__29626_29650 = cljs.core.first.call(null,seq__29625_29649);
var seq__29625_29651__$1 = cljs.core.next.call(null,seq__29625_29649);
var vec__29627_29652 = first__29626_29650;
var k_29653 = cljs.core.nth.call(null,vec__29627_29652,(0),null);
var v_29654 = cljs.core.nth.call(null,vec__29627_29652,(1),null);
var r_29655 = seq__29625_29651__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29653),"\": ",emit_js_object_val.call(null,v_29654));

var seq__29630_29656 = cljs.core.seq.call(null,r_29655);
var chunk__29631_29657 = null;
var count__29632_29658 = (0);
var i__29633_29659 = (0);
while(true){
if((i__29633_29659 < count__29632_29658)){
var vec__29640_29660 = cljs.core._nth.call(null,chunk__29631_29657,i__29633_29659);
var k_29661__$1 = cljs.core.nth.call(null,vec__29640_29660,(0),null);
var v_29662__$1 = cljs.core.nth.call(null,vec__29640_29660,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29661__$1),"\": ",emit_js_object_val.call(null,v_29662__$1));


var G__29663 = seq__29630_29656;
var G__29664 = chunk__29631_29657;
var G__29665 = count__29632_29658;
var G__29666 = (i__29633_29659 + (1));
seq__29630_29656 = G__29663;
chunk__29631_29657 = G__29664;
count__29632_29658 = G__29665;
i__29633_29659 = G__29666;
continue;
} else {
var temp__5720__auto___29667__$1 = cljs.core.seq.call(null,seq__29630_29656);
if(temp__5720__auto___29667__$1){
var seq__29630_29668__$1 = temp__5720__auto___29667__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29630_29668__$1)){
var c__4550__auto___29669 = cljs.core.chunk_first.call(null,seq__29630_29668__$1);
var G__29670 = cljs.core.chunk_rest.call(null,seq__29630_29668__$1);
var G__29671 = c__4550__auto___29669;
var G__29672 = cljs.core.count.call(null,c__4550__auto___29669);
var G__29673 = (0);
seq__29630_29656 = G__29670;
chunk__29631_29657 = G__29671;
count__29632_29658 = G__29672;
i__29633_29659 = G__29673;
continue;
} else {
var vec__29643_29674 = cljs.core.first.call(null,seq__29630_29668__$1);
var k_29675__$1 = cljs.core.nth.call(null,vec__29643_29674,(0),null);
var v_29676__$1 = cljs.core.nth.call(null,vec__29643_29674,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29675__$1),"\": ",emit_js_object_val.call(null,v_29676__$1));


var G__29677 = cljs.core.next.call(null,seq__29630_29668__$1);
var G__29678 = null;
var G__29679 = (0);
var G__29680 = (0);
seq__29630_29656 = G__29677;
chunk__29631_29657 = G__29678;
count__29632_29658 = G__29679;
i__29633_29659 = G__29680;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__29681){
var map__29682 = p__29681;
var map__29682__$1 = (((((!((map__29682 == null))))?(((((map__29682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29682):map__29682);
var keys = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__29684){
var map__29685 = p__29684;
var map__29685__$1 = (((((!((map__29685 == null))))?(((((map__29685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29685):map__29685);
var items = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__29687){
var map__29688 = p__29687;
var map__29688__$1 = (((((!((map__29688 == null))))?(((((map__29688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29688):map__29688);
var expr = cljs.core.get.call(null,map__29688__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__29690){
var map__29691 = p__29690;
var map__29691__$1 = (((((!((map__29691 == null))))?(((((map__29691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29691):map__29691);
var form = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29693 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29693__$1 = (((((!((map__29693 == null))))?(((((map__29693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29693):map__29693);
var op = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__29695 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29695__$1 = (((((!((map__29695 == null))))?(((((map__29695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695):map__29695);
var op = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29697){
var map__29698 = p__29697;
var map__29698__$1 = (((((!((map__29698 == null))))?(((((map__29698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);
var test = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__29700){
var map__29701 = p__29700;
var map__29701__$1 = (((((!((map__29701 == null))))?(((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var v = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__29703_29739 = cljs.core.seq.call(null,nodes);
var chunk__29704_29740 = null;
var count__29705_29741 = (0);
var i__29706_29742 = (0);
while(true){
if((i__29706_29742 < count__29705_29741)){
var map__29723_29743 = cljs.core._nth.call(null,chunk__29704_29740,i__29706_29742);
var map__29723_29744__$1 = (((((!((map__29723_29743 == null))))?(((((map__29723_29743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29723_29743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29723_29743):map__29723_29743);
var ts_29745 = cljs.core.get.call(null,map__29723_29744__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29724_29746 = cljs.core.get.call(null,map__29723_29744__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29724_29747__$1 = (((((!((map__29724_29746 == null))))?(((((map__29724_29746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29724_29746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29724_29746):map__29724_29746);
var then_29748 = cljs.core.get.call(null,map__29724_29747__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29727_29749 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29745));
var chunk__29728_29750 = null;
var count__29729_29751 = (0);
var i__29730_29752 = (0);
while(true){
if((i__29730_29752 < count__29729_29751)){
var test_29753 = cljs.core._nth.call(null,chunk__29728_29750,i__29730_29752);
cljs.compiler.emitln.call(null,"case ",test_29753,":");


var G__29754 = seq__29727_29749;
var G__29755 = chunk__29728_29750;
var G__29756 = count__29729_29751;
var G__29757 = (i__29730_29752 + (1));
seq__29727_29749 = G__29754;
chunk__29728_29750 = G__29755;
count__29729_29751 = G__29756;
i__29730_29752 = G__29757;
continue;
} else {
var temp__5720__auto___29758 = cljs.core.seq.call(null,seq__29727_29749);
if(temp__5720__auto___29758){
var seq__29727_29759__$1 = temp__5720__auto___29758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29727_29759__$1)){
var c__4550__auto___29760 = cljs.core.chunk_first.call(null,seq__29727_29759__$1);
var G__29761 = cljs.core.chunk_rest.call(null,seq__29727_29759__$1);
var G__29762 = c__4550__auto___29760;
var G__29763 = cljs.core.count.call(null,c__4550__auto___29760);
var G__29764 = (0);
seq__29727_29749 = G__29761;
chunk__29728_29750 = G__29762;
count__29729_29751 = G__29763;
i__29730_29752 = G__29764;
continue;
} else {
var test_29765 = cljs.core.first.call(null,seq__29727_29759__$1);
cljs.compiler.emitln.call(null,"case ",test_29765,":");


var G__29766 = cljs.core.next.call(null,seq__29727_29759__$1);
var G__29767 = null;
var G__29768 = (0);
var G__29769 = (0);
seq__29727_29749 = G__29766;
chunk__29728_29750 = G__29767;
count__29729_29751 = G__29768;
i__29730_29752 = G__29769;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29748);
} else {
cljs.compiler.emitln.call(null,then_29748);
}

cljs.compiler.emitln.call(null,"break;");


var G__29770 = seq__29703_29739;
var G__29771 = chunk__29704_29740;
var G__29772 = count__29705_29741;
var G__29773 = (i__29706_29742 + (1));
seq__29703_29739 = G__29770;
chunk__29704_29740 = G__29771;
count__29705_29741 = G__29772;
i__29706_29742 = G__29773;
continue;
} else {
var temp__5720__auto___29774 = cljs.core.seq.call(null,seq__29703_29739);
if(temp__5720__auto___29774){
var seq__29703_29775__$1 = temp__5720__auto___29774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29703_29775__$1)){
var c__4550__auto___29776 = cljs.core.chunk_first.call(null,seq__29703_29775__$1);
var G__29777 = cljs.core.chunk_rest.call(null,seq__29703_29775__$1);
var G__29778 = c__4550__auto___29776;
var G__29779 = cljs.core.count.call(null,c__4550__auto___29776);
var G__29780 = (0);
seq__29703_29739 = G__29777;
chunk__29704_29740 = G__29778;
count__29705_29741 = G__29779;
i__29706_29742 = G__29780;
continue;
} else {
var map__29731_29781 = cljs.core.first.call(null,seq__29703_29775__$1);
var map__29731_29782__$1 = (((((!((map__29731_29781 == null))))?(((((map__29731_29781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29731_29781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29731_29781):map__29731_29781);
var ts_29783 = cljs.core.get.call(null,map__29731_29782__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29732_29784 = cljs.core.get.call(null,map__29731_29782__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29732_29785__$1 = (((((!((map__29732_29784 == null))))?(((((map__29732_29784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29732_29784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29732_29784):map__29732_29784);
var then_29786 = cljs.core.get.call(null,map__29732_29785__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29735_29787 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29783));
var chunk__29736_29788 = null;
var count__29737_29789 = (0);
var i__29738_29790 = (0);
while(true){
if((i__29738_29790 < count__29737_29789)){
var test_29791 = cljs.core._nth.call(null,chunk__29736_29788,i__29738_29790);
cljs.compiler.emitln.call(null,"case ",test_29791,":");


var G__29792 = seq__29735_29787;
var G__29793 = chunk__29736_29788;
var G__29794 = count__29737_29789;
var G__29795 = (i__29738_29790 + (1));
seq__29735_29787 = G__29792;
chunk__29736_29788 = G__29793;
count__29737_29789 = G__29794;
i__29738_29790 = G__29795;
continue;
} else {
var temp__5720__auto___29796__$1 = cljs.core.seq.call(null,seq__29735_29787);
if(temp__5720__auto___29796__$1){
var seq__29735_29797__$1 = temp__5720__auto___29796__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29735_29797__$1)){
var c__4550__auto___29798 = cljs.core.chunk_first.call(null,seq__29735_29797__$1);
var G__29799 = cljs.core.chunk_rest.call(null,seq__29735_29797__$1);
var G__29800 = c__4550__auto___29798;
var G__29801 = cljs.core.count.call(null,c__4550__auto___29798);
var G__29802 = (0);
seq__29735_29787 = G__29799;
chunk__29736_29788 = G__29800;
count__29737_29789 = G__29801;
i__29738_29790 = G__29802;
continue;
} else {
var test_29803 = cljs.core.first.call(null,seq__29735_29797__$1);
cljs.compiler.emitln.call(null,"case ",test_29803,":");


var G__29804 = cljs.core.next.call(null,seq__29735_29797__$1);
var G__29805 = null;
var G__29806 = (0);
var G__29807 = (0);
seq__29735_29787 = G__29804;
chunk__29736_29788 = G__29805;
count__29737_29789 = G__29806;
i__29738_29790 = G__29807;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29786);
} else {
cljs.compiler.emitln.call(null,then_29786);
}

cljs.compiler.emitln.call(null,"break;");


var G__29808 = cljs.core.next.call(null,seq__29703_29775__$1);
var G__29809 = null;
var G__29810 = (0);
var G__29811 = (0);
seq__29703_29739 = G__29808;
chunk__29704_29740 = G__29809;
count__29705_29741 = G__29810;
i__29706_29742 = G__29811;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29812){
var map__29813 = p__29812;
var map__29813__$1 = (((((!((map__29813 == null))))?(((((map__29813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29813):map__29813);
var throw$ = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__29816 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__29816,(0),null);
var rstr = cljs.core.nth.call(null,vec__29816,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__29816,fstr,rstr,ret_t,axstr){
return (function (p1__29815_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29815_SHARP_);
});})(idx,vec__29816,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__29819 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29819,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29819;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__29820_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29820_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__29821 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29822 = cljs.core.seq.call(null,vec__29821);
var first__29823 = cljs.core.first.call(null,seq__29822);
var seq__29822__$1 = cljs.core.next.call(null,seq__29822);
var p = first__29823;
var first__29823__$1 = cljs.core.first.call(null,seq__29822__$1);
var seq__29822__$2 = cljs.core.next.call(null,seq__29822__$1);
var ts = first__29823__$1;
var first__29823__$2 = cljs.core.first.call(null,seq__29822__$2);
var seq__29822__$3 = cljs.core.next.call(null,seq__29822__$2);
var n = first__29823__$2;
var xs = seq__29822__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__29824 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29825 = cljs.core.seq.call(null,vec__29824);
var first__29826 = cljs.core.first.call(null,seq__29825);
var seq__29825__$1 = cljs.core.next.call(null,seq__29825);
var p = first__29826;
var first__29826__$1 = cljs.core.first.call(null,seq__29825__$1);
var seq__29825__$2 = cljs.core.next.call(null,seq__29825__$1);
var ts = first__29826__$1;
var xs = seq__29825__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__29829 = arguments.length;
switch (G__29829) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__29837 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__29827_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__29827_SHARP_);
} else {
return p1__29827_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__29838 = cljs.core.seq.call(null,vec__29837);
var first__29839 = cljs.core.first.call(null,seq__29838);
var seq__29838__$1 = cljs.core.next.call(null,seq__29838);
var x = first__29839;
var ys = seq__29838__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__29840 = cljs.core.seq.call(null,ys);
var chunk__29841 = null;
var count__29842 = (0);
var i__29843 = (0);
while(true){
if((i__29843 < count__29842)){
var next_line = cljs.core._nth.call(null,chunk__29841,i__29843);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29849 = seq__29840;
var G__29850 = chunk__29841;
var G__29851 = count__29842;
var G__29852 = (i__29843 + (1));
seq__29840 = G__29849;
chunk__29841 = G__29850;
count__29842 = G__29851;
i__29843 = G__29852;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29840);
if(temp__5720__auto__){
var seq__29840__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29840__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29840__$1);
var G__29853 = cljs.core.chunk_rest.call(null,seq__29840__$1);
var G__29854 = c__4550__auto__;
var G__29855 = cljs.core.count.call(null,c__4550__auto__);
var G__29856 = (0);
seq__29840 = G__29853;
chunk__29841 = G__29854;
count__29842 = G__29855;
i__29843 = G__29856;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__29840__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29857 = cljs.core.next.call(null,seq__29840__$1);
var G__29858 = null;
var G__29859 = (0);
var G__29860 = (0);
seq__29840 = G__29857;
chunk__29841 = G__29858;
count__29842 = G__29859;
i__29843 = G__29860;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__29844_29861 = cljs.core.seq.call(null,docs__$2);
var chunk__29845_29862 = null;
var count__29846_29863 = (0);
var i__29847_29864 = (0);
while(true){
if((i__29847_29864 < count__29846_29863)){
var e_29865 = cljs.core._nth.call(null,chunk__29845_29862,i__29847_29864);
if(cljs.core.truth_(e_29865)){
print_comment_lines.call(null,e_29865);
} else {
}


var G__29866 = seq__29844_29861;
var G__29867 = chunk__29845_29862;
var G__29868 = count__29846_29863;
var G__29869 = (i__29847_29864 + (1));
seq__29844_29861 = G__29866;
chunk__29845_29862 = G__29867;
count__29846_29863 = G__29868;
i__29847_29864 = G__29869;
continue;
} else {
var temp__5720__auto___29870 = cljs.core.seq.call(null,seq__29844_29861);
if(temp__5720__auto___29870){
var seq__29844_29871__$1 = temp__5720__auto___29870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29844_29871__$1)){
var c__4550__auto___29872 = cljs.core.chunk_first.call(null,seq__29844_29871__$1);
var G__29873 = cljs.core.chunk_rest.call(null,seq__29844_29871__$1);
var G__29874 = c__4550__auto___29872;
var G__29875 = cljs.core.count.call(null,c__4550__auto___29872);
var G__29876 = (0);
seq__29844_29861 = G__29873;
chunk__29845_29862 = G__29874;
count__29846_29863 = G__29875;
i__29847_29864 = G__29876;
continue;
} else {
var e_29877 = cljs.core.first.call(null,seq__29844_29871__$1);
if(cljs.core.truth_(e_29877)){
print_comment_lines.call(null,e_29877);
} else {
}


var G__29878 = cljs.core.next.call(null,seq__29844_29871__$1);
var G__29879 = null;
var G__29880 = (0);
var G__29881 = (0);
seq__29844_29861 = G__29878;
chunk__29845_29862 = G__29879;
count__29846_29863 = G__29880;
i__29847_29864 = G__29881;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4120__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__29883_SHARP_){
return goog.string.startsWith(p1__29883_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29884){
var map__29885 = p__29884;
var map__29885__$1 = (((((!((map__29885 == null))))?(((((map__29885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29885):map__29885);
var doc = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__29885__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29887){
var map__29888 = p__29887;
var map__29888__$1 = (((((!((map__29888 == null))))?(((((map__29888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29888):map__29888);
var name = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__29890_29914 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__29891_29915 = null;
var count__29892_29916 = (0);
var i__29893_29917 = (0);
while(true){
if((i__29893_29917 < count__29892_29916)){
var vec__29900_29918 = cljs.core._nth.call(null,chunk__29891_29915,i__29893_29917);
var i_29919 = cljs.core.nth.call(null,vec__29900_29918,(0),null);
var param_29920 = cljs.core.nth.call(null,vec__29900_29918,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29920);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29921 = seq__29890_29914;
var G__29922 = chunk__29891_29915;
var G__29923 = count__29892_29916;
var G__29924 = (i__29893_29917 + (1));
seq__29890_29914 = G__29921;
chunk__29891_29915 = G__29922;
count__29892_29916 = G__29923;
i__29893_29917 = G__29924;
continue;
} else {
var temp__5720__auto___29925 = cljs.core.seq.call(null,seq__29890_29914);
if(temp__5720__auto___29925){
var seq__29890_29926__$1 = temp__5720__auto___29925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29890_29926__$1)){
var c__4550__auto___29927 = cljs.core.chunk_first.call(null,seq__29890_29926__$1);
var G__29928 = cljs.core.chunk_rest.call(null,seq__29890_29926__$1);
var G__29929 = c__4550__auto___29927;
var G__29930 = cljs.core.count.call(null,c__4550__auto___29927);
var G__29931 = (0);
seq__29890_29914 = G__29928;
chunk__29891_29915 = G__29929;
count__29892_29916 = G__29930;
i__29893_29917 = G__29931;
continue;
} else {
var vec__29903_29932 = cljs.core.first.call(null,seq__29890_29926__$1);
var i_29933 = cljs.core.nth.call(null,vec__29903_29932,(0),null);
var param_29934 = cljs.core.nth.call(null,vec__29903_29932,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29934);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29935 = cljs.core.next.call(null,seq__29890_29926__$1);
var G__29936 = null;
var G__29937 = (0);
var G__29938 = (0);
seq__29890_29914 = G__29935;
chunk__29891_29915 = G__29936;
count__29892_29916 = G__29937;
i__29893_29917 = G__29938;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__29906_29939 = cljs.core.seq.call(null,params);
var chunk__29907_29940 = null;
var count__29908_29941 = (0);
var i__29909_29942 = (0);
while(true){
if((i__29909_29942 < count__29908_29941)){
var param_29943 = cljs.core._nth.call(null,chunk__29907_29940,i__29909_29942);
cljs.compiler.emit.call(null,param_29943);

if(cljs.core._EQ_.call(null,param_29943,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29944 = seq__29906_29939;
var G__29945 = chunk__29907_29940;
var G__29946 = count__29908_29941;
var G__29947 = (i__29909_29942 + (1));
seq__29906_29939 = G__29944;
chunk__29907_29940 = G__29945;
count__29908_29941 = G__29946;
i__29909_29942 = G__29947;
continue;
} else {
var temp__5720__auto___29948 = cljs.core.seq.call(null,seq__29906_29939);
if(temp__5720__auto___29948){
var seq__29906_29949__$1 = temp__5720__auto___29948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29906_29949__$1)){
var c__4550__auto___29950 = cljs.core.chunk_first.call(null,seq__29906_29949__$1);
var G__29951 = cljs.core.chunk_rest.call(null,seq__29906_29949__$1);
var G__29952 = c__4550__auto___29950;
var G__29953 = cljs.core.count.call(null,c__4550__auto___29950);
var G__29954 = (0);
seq__29906_29939 = G__29951;
chunk__29907_29940 = G__29952;
count__29908_29941 = G__29953;
i__29909_29942 = G__29954;
continue;
} else {
var param_29955 = cljs.core.first.call(null,seq__29906_29949__$1);
cljs.compiler.emit.call(null,param_29955);

if(cljs.core._EQ_.call(null,param_29955,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29956 = cljs.core.next.call(null,seq__29906_29949__$1);
var G__29957 = null;
var G__29958 = (0);
var G__29959 = (0);
seq__29906_29939 = G__29956;
chunk__29907_29940 = G__29957;
count__29908_29941 = G__29958;
i__29909_29942 = G__29959;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__29910_29960 = cljs.core.seq.call(null,params);
var chunk__29911_29961 = null;
var count__29912_29962 = (0);
var i__29913_29963 = (0);
while(true){
if((i__29913_29963 < count__29912_29962)){
var param_29964 = cljs.core._nth.call(null,chunk__29911_29961,i__29913_29963);
cljs.compiler.emit.call(null,param_29964);

if(cljs.core._EQ_.call(null,param_29964,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29965 = seq__29910_29960;
var G__29966 = chunk__29911_29961;
var G__29967 = count__29912_29962;
var G__29968 = (i__29913_29963 + (1));
seq__29910_29960 = G__29965;
chunk__29911_29961 = G__29966;
count__29912_29962 = G__29967;
i__29913_29963 = G__29968;
continue;
} else {
var temp__5720__auto___29969 = cljs.core.seq.call(null,seq__29910_29960);
if(temp__5720__auto___29969){
var seq__29910_29970__$1 = temp__5720__auto___29969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29910_29970__$1)){
var c__4550__auto___29971 = cljs.core.chunk_first.call(null,seq__29910_29970__$1);
var G__29972 = cljs.core.chunk_rest.call(null,seq__29910_29970__$1);
var G__29973 = c__4550__auto___29971;
var G__29974 = cljs.core.count.call(null,c__4550__auto___29971);
var G__29975 = (0);
seq__29910_29960 = G__29972;
chunk__29911_29961 = G__29973;
count__29912_29962 = G__29974;
i__29913_29963 = G__29975;
continue;
} else {
var param_29976 = cljs.core.first.call(null,seq__29910_29970__$1);
cljs.compiler.emit.call(null,param_29976);

if(cljs.core._EQ_.call(null,param_29976,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29977 = cljs.core.next.call(null,seq__29910_29970__$1);
var G__29978 = null;
var G__29979 = (0);
var G__29980 = (0);
seq__29910_29960 = G__29977;
chunk__29911_29961 = G__29978;
count__29912_29962 = G__29979;
i__29913_29963 = G__29980;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__29981 = cljs.core.seq.call(null,params);
var chunk__29982 = null;
var count__29983 = (0);
var i__29984 = (0);
while(true){
if((i__29984 < count__29983)){
var param = cljs.core._nth.call(null,chunk__29982,i__29984);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29985 = seq__29981;
var G__29986 = chunk__29982;
var G__29987 = count__29983;
var G__29988 = (i__29984 + (1));
seq__29981 = G__29985;
chunk__29982 = G__29986;
count__29983 = G__29987;
i__29984 = G__29988;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29981);
if(temp__5720__auto__){
var seq__29981__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29981__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29981__$1);
var G__29989 = cljs.core.chunk_rest.call(null,seq__29981__$1);
var G__29990 = c__4550__auto__;
var G__29991 = cljs.core.count.call(null,c__4550__auto__);
var G__29992 = (0);
seq__29981 = G__29989;
chunk__29982 = G__29990;
count__29983 = G__29991;
i__29984 = G__29992;
continue;
} else {
var param = cljs.core.first.call(null,seq__29981__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29993 = cljs.core.next.call(null,seq__29981__$1);
var G__29994 = null;
var G__29995 = (0);
var G__29996 = (0);
seq__29981 = G__29993;
chunk__29982 = G__29994;
count__29983 = G__29995;
i__29984 = G__29996;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29997){
var map__29998 = p__29997;
var map__29998__$1 = (((((!((map__29998 == null))))?(((((map__29998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29998):map__29998);
var expr = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30000){
var map__30001 = p__30000;
var map__30001__$1 = (((((!((map__30001 == null))))?(((((map__30001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30001):map__30001);
var f = map__30001__$1;
var expr = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30011__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30012 = cljs.compiler.munge.call(null,name_30011__$1);
var delegate_name_30013 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30012),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30013," = function (");

var seq__30003_30014 = cljs.core.seq.call(null,params);
var chunk__30004_30015 = null;
var count__30005_30016 = (0);
var i__30006_30017 = (0);
while(true){
if((i__30006_30017 < count__30005_30016)){
var param_30018 = cljs.core._nth.call(null,chunk__30004_30015,i__30006_30017);
cljs.compiler.emit.call(null,param_30018);

if(cljs.core._EQ_.call(null,param_30018,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30019 = seq__30003_30014;
var G__30020 = chunk__30004_30015;
var G__30021 = count__30005_30016;
var G__30022 = (i__30006_30017 + (1));
seq__30003_30014 = G__30019;
chunk__30004_30015 = G__30020;
count__30005_30016 = G__30021;
i__30006_30017 = G__30022;
continue;
} else {
var temp__5720__auto___30023 = cljs.core.seq.call(null,seq__30003_30014);
if(temp__5720__auto___30023){
var seq__30003_30024__$1 = temp__5720__auto___30023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30003_30024__$1)){
var c__4550__auto___30025 = cljs.core.chunk_first.call(null,seq__30003_30024__$1);
var G__30026 = cljs.core.chunk_rest.call(null,seq__30003_30024__$1);
var G__30027 = c__4550__auto___30025;
var G__30028 = cljs.core.count.call(null,c__4550__auto___30025);
var G__30029 = (0);
seq__30003_30014 = G__30026;
chunk__30004_30015 = G__30027;
count__30005_30016 = G__30028;
i__30006_30017 = G__30029;
continue;
} else {
var param_30030 = cljs.core.first.call(null,seq__30003_30024__$1);
cljs.compiler.emit.call(null,param_30030);

if(cljs.core._EQ_.call(null,param_30030,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30031 = cljs.core.next.call(null,seq__30003_30024__$1);
var G__30032 = null;
var G__30033 = (0);
var G__30034 = (0);
seq__30003_30014 = G__30031;
chunk__30004_30015 = G__30032;
count__30005_30016 = G__30033;
i__30006_30017 = G__30034;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_30012," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30035 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30035,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30013,".call(this,");

var seq__30007_30036 = cljs.core.seq.call(null,params);
var chunk__30008_30037 = null;
var count__30009_30038 = (0);
var i__30010_30039 = (0);
while(true){
if((i__30010_30039 < count__30009_30038)){
var param_30040 = cljs.core._nth.call(null,chunk__30008_30037,i__30010_30039);
cljs.compiler.emit.call(null,param_30040);

if(cljs.core._EQ_.call(null,param_30040,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30041 = seq__30007_30036;
var G__30042 = chunk__30008_30037;
var G__30043 = count__30009_30038;
var G__30044 = (i__30010_30039 + (1));
seq__30007_30036 = G__30041;
chunk__30008_30037 = G__30042;
count__30009_30038 = G__30043;
i__30010_30039 = G__30044;
continue;
} else {
var temp__5720__auto___30045 = cljs.core.seq.call(null,seq__30007_30036);
if(temp__5720__auto___30045){
var seq__30007_30046__$1 = temp__5720__auto___30045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30007_30046__$1)){
var c__4550__auto___30047 = cljs.core.chunk_first.call(null,seq__30007_30046__$1);
var G__30048 = cljs.core.chunk_rest.call(null,seq__30007_30046__$1);
var G__30049 = c__4550__auto___30047;
var G__30050 = cljs.core.count.call(null,c__4550__auto___30047);
var G__30051 = (0);
seq__30007_30036 = G__30048;
chunk__30008_30037 = G__30049;
count__30009_30038 = G__30050;
i__30010_30039 = G__30051;
continue;
} else {
var param_30052 = cljs.core.first.call(null,seq__30007_30046__$1);
cljs.compiler.emit.call(null,param_30052);

if(cljs.core._EQ_.call(null,param_30052,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30053 = cljs.core.next.call(null,seq__30007_30046__$1);
var G__30054 = null;
var G__30055 = (0);
var G__30056 = (0);
seq__30007_30036 = G__30053;
chunk__30008_30037 = G__30054;
count__30009_30038 = G__30055;
i__30010_30039 = G__30056;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30012,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30012,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30011__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30012,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30013,";");

cljs.compiler.emitln.call(null,"return ",mname_30012,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30060){
var map__30061 = p__30060;
var map__30061__$1 = (((((!((map__30061 == null))))?(((((map__30061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30061):map__30061);
var variadic = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30057_SHARP_){
var and__4120__auto__ = p1__30057_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30057_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_30114__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30115 = cljs.compiler.munge.call(null,name_30114__$1);
var maxparams_30116 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30117 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30114__$1,mname_30115,maxparams_30116,loop_locals,map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30115),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30114__$1,mname_30115,maxparams_30116,loop_locals,map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_30118 = cljs.core.sort_by.call(null,((function (name_30114__$1,mname_30115,maxparams_30116,mmap_30117,loop_locals,map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30058_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30058_SHARP_)));
});})(name_30114__$1,mname_30115,maxparams_30116,mmap_30117,loop_locals,map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30117));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30115," = null;");

var seq__30063_30119 = cljs.core.seq.call(null,ms_30118);
var chunk__30064_30120 = null;
var count__30065_30121 = (0);
var i__30066_30122 = (0);
while(true){
if((i__30066_30122 < count__30065_30121)){
var vec__30073_30123 = cljs.core._nth.call(null,chunk__30064_30120,i__30066_30122);
var n_30124 = cljs.core.nth.call(null,vec__30073_30123,(0),null);
var meth_30125 = cljs.core.nth.call(null,vec__30073_30123,(1),null);
cljs.compiler.emits.call(null,"var ",n_30124," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30125))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30125);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30125);
}

cljs.compiler.emitln.call(null,";");


var G__30126 = seq__30063_30119;
var G__30127 = chunk__30064_30120;
var G__30128 = count__30065_30121;
var G__30129 = (i__30066_30122 + (1));
seq__30063_30119 = G__30126;
chunk__30064_30120 = G__30127;
count__30065_30121 = G__30128;
i__30066_30122 = G__30129;
continue;
} else {
var temp__5720__auto___30130 = cljs.core.seq.call(null,seq__30063_30119);
if(temp__5720__auto___30130){
var seq__30063_30131__$1 = temp__5720__auto___30130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30063_30131__$1)){
var c__4550__auto___30132 = cljs.core.chunk_first.call(null,seq__30063_30131__$1);
var G__30133 = cljs.core.chunk_rest.call(null,seq__30063_30131__$1);
var G__30134 = c__4550__auto___30132;
var G__30135 = cljs.core.count.call(null,c__4550__auto___30132);
var G__30136 = (0);
seq__30063_30119 = G__30133;
chunk__30064_30120 = G__30134;
count__30065_30121 = G__30135;
i__30066_30122 = G__30136;
continue;
} else {
var vec__30076_30137 = cljs.core.first.call(null,seq__30063_30131__$1);
var n_30138 = cljs.core.nth.call(null,vec__30076_30137,(0),null);
var meth_30139 = cljs.core.nth.call(null,vec__30076_30137,(1),null);
cljs.compiler.emits.call(null,"var ",n_30138," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30139))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30139);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30139);
}

cljs.compiler.emitln.call(null,";");


var G__30140 = cljs.core.next.call(null,seq__30063_30131__$1);
var G__30141 = null;
var G__30142 = (0);
var G__30143 = (0);
seq__30063_30119 = G__30140;
chunk__30064_30120 = G__30141;
count__30065_30121 = G__30142;
i__30066_30122 = G__30143;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30115," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30116),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30116)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30116));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30079_30144 = cljs.core.seq.call(null,ms_30118);
var chunk__30080_30145 = null;
var count__30081_30146 = (0);
var i__30082_30147 = (0);
while(true){
if((i__30082_30147 < count__30081_30146)){
var vec__30089_30148 = cljs.core._nth.call(null,chunk__30080_30145,i__30082_30147);
var n_30149 = cljs.core.nth.call(null,vec__30089_30148,(0),null);
var meth_30150 = cljs.core.nth.call(null,vec__30089_30148,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30150))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30151 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30151," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30152 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30151," = new cljs.core.IndexedSeq(",a_30152,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30149,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30116)),(((cljs.core.count.call(null,maxparams_30116) > (1)))?", ":null),restarg_30151,");");
} else {
var pcnt_30153 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30150));
cljs.compiler.emitln.call(null,"case ",pcnt_30153,":");

cljs.compiler.emitln.call(null,"return ",n_30149,".call(this",(((pcnt_30153 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30153,maxparams_30116)),null,(1),null)),(2),null))),");");
}


var G__30154 = seq__30079_30144;
var G__30155 = chunk__30080_30145;
var G__30156 = count__30081_30146;
var G__30157 = (i__30082_30147 + (1));
seq__30079_30144 = G__30154;
chunk__30080_30145 = G__30155;
count__30081_30146 = G__30156;
i__30082_30147 = G__30157;
continue;
} else {
var temp__5720__auto___30158 = cljs.core.seq.call(null,seq__30079_30144);
if(temp__5720__auto___30158){
var seq__30079_30159__$1 = temp__5720__auto___30158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30079_30159__$1)){
var c__4550__auto___30160 = cljs.core.chunk_first.call(null,seq__30079_30159__$1);
var G__30161 = cljs.core.chunk_rest.call(null,seq__30079_30159__$1);
var G__30162 = c__4550__auto___30160;
var G__30163 = cljs.core.count.call(null,c__4550__auto___30160);
var G__30164 = (0);
seq__30079_30144 = G__30161;
chunk__30080_30145 = G__30162;
count__30081_30146 = G__30163;
i__30082_30147 = G__30164;
continue;
} else {
var vec__30092_30165 = cljs.core.first.call(null,seq__30079_30159__$1);
var n_30166 = cljs.core.nth.call(null,vec__30092_30165,(0),null);
var meth_30167 = cljs.core.nth.call(null,vec__30092_30165,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30167))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30168 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30168," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30169 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30168," = new cljs.core.IndexedSeq(",a_30169,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30166,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30116)),(((cljs.core.count.call(null,maxparams_30116) > (1)))?", ":null),restarg_30168,");");
} else {
var pcnt_30170 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30167));
cljs.compiler.emitln.call(null,"case ",pcnt_30170,":");

cljs.compiler.emitln.call(null,"return ",n_30166,".call(this",(((pcnt_30170 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30170,maxparams_30116)),null,(1),null)),(2),null))),");");
}


var G__30171 = cljs.core.next.call(null,seq__30079_30159__$1);
var G__30172 = null;
var G__30173 = (0);
var G__30174 = (0);
seq__30079_30144 = G__30171;
chunk__30080_30145 = G__30172;
count__30081_30146 = G__30173;
i__30082_30147 = G__30174;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_30175 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_30118)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_30175,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30115,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30115,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30114__$1,mname_30115,maxparams_30116,mmap_30117,ms_30118,loop_locals,map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30059_SHARP_){
var vec__30095 = p1__30059_SHARP_;
var n = cljs.core.nth.call(null,vec__30095,(0),null);
var m = cljs.core.nth.call(null,vec__30095,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30114__$1,mname_30115,maxparams_30116,mmap_30117,ms_30118,loop_locals,map__30061,map__30061__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_30118),".cljs$lang$applyTo;");
} else {
}

var seq__30098_30176 = cljs.core.seq.call(null,ms_30118);
var chunk__30099_30177 = null;
var count__30100_30178 = (0);
var i__30101_30179 = (0);
while(true){
if((i__30101_30179 < count__30100_30178)){
var vec__30108_30180 = cljs.core._nth.call(null,chunk__30099_30177,i__30101_30179);
var n_30181 = cljs.core.nth.call(null,vec__30108_30180,(0),null);
var meth_30182 = cljs.core.nth.call(null,vec__30108_30180,(1),null);
var c_30183 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30182));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30182))){
cljs.compiler.emitln.call(null,mname_30115,".cljs$core$IFn$_invoke$arity$variadic = ",n_30181,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30115,".cljs$core$IFn$_invoke$arity$",c_30183," = ",n_30181,";");
}


var G__30184 = seq__30098_30176;
var G__30185 = chunk__30099_30177;
var G__30186 = count__30100_30178;
var G__30187 = (i__30101_30179 + (1));
seq__30098_30176 = G__30184;
chunk__30099_30177 = G__30185;
count__30100_30178 = G__30186;
i__30101_30179 = G__30187;
continue;
} else {
var temp__5720__auto___30188 = cljs.core.seq.call(null,seq__30098_30176);
if(temp__5720__auto___30188){
var seq__30098_30189__$1 = temp__5720__auto___30188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30098_30189__$1)){
var c__4550__auto___30190 = cljs.core.chunk_first.call(null,seq__30098_30189__$1);
var G__30191 = cljs.core.chunk_rest.call(null,seq__30098_30189__$1);
var G__30192 = c__4550__auto___30190;
var G__30193 = cljs.core.count.call(null,c__4550__auto___30190);
var G__30194 = (0);
seq__30098_30176 = G__30191;
chunk__30099_30177 = G__30192;
count__30100_30178 = G__30193;
i__30101_30179 = G__30194;
continue;
} else {
var vec__30111_30195 = cljs.core.first.call(null,seq__30098_30189__$1);
var n_30196 = cljs.core.nth.call(null,vec__30111_30195,(0),null);
var meth_30197 = cljs.core.nth.call(null,vec__30111_30195,(1),null);
var c_30198 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30197));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30197))){
cljs.compiler.emitln.call(null,mname_30115,".cljs$core$IFn$_invoke$arity$variadic = ",n_30196,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30115,".cljs$core$IFn$_invoke$arity$",c_30198," = ",n_30196,";");
}


var G__30199 = cljs.core.next.call(null,seq__30098_30189__$1);
var G__30200 = null;
var G__30201 = (0);
var G__30202 = (0);
seq__30098_30176 = G__30199;
chunk__30099_30177 = G__30200;
count__30100_30178 = G__30201;
i__30101_30179 = G__30202;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30115,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30203){
var map__30204 = p__30203;
var map__30204__$1 = (((((!((map__30204 == null))))?(((((map__30204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30204):map__30204);
var statements = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__30206_30210 = cljs.core.seq.call(null,statements);
var chunk__30207_30211 = null;
var count__30208_30212 = (0);
var i__30209_30213 = (0);
while(true){
if((i__30209_30213 < count__30208_30212)){
var s_30214 = cljs.core._nth.call(null,chunk__30207_30211,i__30209_30213);
cljs.compiler.emitln.call(null,s_30214);


var G__30215 = seq__30206_30210;
var G__30216 = chunk__30207_30211;
var G__30217 = count__30208_30212;
var G__30218 = (i__30209_30213 + (1));
seq__30206_30210 = G__30215;
chunk__30207_30211 = G__30216;
count__30208_30212 = G__30217;
i__30209_30213 = G__30218;
continue;
} else {
var temp__5720__auto___30219 = cljs.core.seq.call(null,seq__30206_30210);
if(temp__5720__auto___30219){
var seq__30206_30220__$1 = temp__5720__auto___30219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30206_30220__$1)){
var c__4550__auto___30221 = cljs.core.chunk_first.call(null,seq__30206_30220__$1);
var G__30222 = cljs.core.chunk_rest.call(null,seq__30206_30220__$1);
var G__30223 = c__4550__auto___30221;
var G__30224 = cljs.core.count.call(null,c__4550__auto___30221);
var G__30225 = (0);
seq__30206_30210 = G__30222;
chunk__30207_30211 = G__30223;
count__30208_30212 = G__30224;
i__30209_30213 = G__30225;
continue;
} else {
var s_30226 = cljs.core.first.call(null,seq__30206_30220__$1);
cljs.compiler.emitln.call(null,s_30226);


var G__30227 = cljs.core.next.call(null,seq__30206_30220__$1);
var G__30228 = null;
var G__30229 = (0);
var G__30230 = (0);
seq__30206_30210 = G__30227;
chunk__30207_30211 = G__30228;
count__30208_30212 = G__30229;
i__30209_30213 = G__30230;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30231){
var map__30232 = p__30231;
var map__30232__$1 = (((((!((map__30232 == null))))?(((((map__30232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30232):map__30232);
var try$ = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30234,is_loop){
var map__30235 = p__30234;
var map__30235__$1 = (((((!((map__30235 == null))))?(((((map__30235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);
var expr = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__30237_30251 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__30238_30252 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__30237_30251,context,map__30235,map__30235__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__30237_30251,context,map__30235,map__30235__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__30238_30252;

try{var seq__30239_30253 = cljs.core.seq.call(null,bindings);
var chunk__30240_30254 = null;
var count__30241_30255 = (0);
var i__30242_30256 = (0);
while(true){
if((i__30242_30256 < count__30241_30255)){
var map__30247_30257 = cljs.core._nth.call(null,chunk__30240_30254,i__30242_30256);
var map__30247_30258__$1 = (((((!((map__30247_30257 == null))))?(((((map__30247_30257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30247_30257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30247_30257):map__30247_30257);
var binding_30259 = map__30247_30258__$1;
var init_30260 = cljs.core.get.call(null,map__30247_30258__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30259);

cljs.compiler.emitln.call(null," = ",init_30260,";");


var G__30261 = seq__30239_30253;
var G__30262 = chunk__30240_30254;
var G__30263 = count__30241_30255;
var G__30264 = (i__30242_30256 + (1));
seq__30239_30253 = G__30261;
chunk__30240_30254 = G__30262;
count__30241_30255 = G__30263;
i__30242_30256 = G__30264;
continue;
} else {
var temp__5720__auto___30265 = cljs.core.seq.call(null,seq__30239_30253);
if(temp__5720__auto___30265){
var seq__30239_30266__$1 = temp__5720__auto___30265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30239_30266__$1)){
var c__4550__auto___30267 = cljs.core.chunk_first.call(null,seq__30239_30266__$1);
var G__30268 = cljs.core.chunk_rest.call(null,seq__30239_30266__$1);
var G__30269 = c__4550__auto___30267;
var G__30270 = cljs.core.count.call(null,c__4550__auto___30267);
var G__30271 = (0);
seq__30239_30253 = G__30268;
chunk__30240_30254 = G__30269;
count__30241_30255 = G__30270;
i__30242_30256 = G__30271;
continue;
} else {
var map__30249_30272 = cljs.core.first.call(null,seq__30239_30266__$1);
var map__30249_30273__$1 = (((((!((map__30249_30272 == null))))?(((((map__30249_30272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30249_30272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30249_30272):map__30249_30272);
var binding_30274 = map__30249_30273__$1;
var init_30275 = cljs.core.get.call(null,map__30249_30273__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30274);

cljs.compiler.emitln.call(null," = ",init_30275,";");


var G__30276 = cljs.core.next.call(null,seq__30239_30266__$1);
var G__30277 = null;
var G__30278 = (0);
var G__30279 = (0);
seq__30239_30253 = G__30276;
chunk__30240_30254 = G__30277;
count__30241_30255 = G__30278;
i__30242_30256 = G__30279;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__30237_30251;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30280){
var map__30281 = p__30280;
var map__30281__$1 = (((((!((map__30281 == null))))?(((((map__30281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30281):map__30281);
var frame = cljs.core.get.call(null,map__30281__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30281__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30281__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___30283 = cljs.core.count.call(null,exprs);
var i_30284 = (0);
while(true){
if((i_30284 < n__4607__auto___30283)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30284)," = ",exprs.call(null,i_30284),";");

var G__30285 = (i_30284 + (1));
i_30284 = G__30285;
continue;
} else {
}
break;
}

var n__4607__auto___30286 = cljs.core.count.call(null,exprs);
var i_30287 = (0);
while(true){
if((i_30287 < n__4607__auto___30286)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30287))," = ",temps.call(null,i_30287),";");

var G__30288 = (i_30287 + (1));
i_30287 = G__30288;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30289){
var map__30290 = p__30289;
var map__30290__$1 = (((((!((map__30290 == null))))?(((((map__30290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30290):map__30290);
var expr = cljs.core.get.call(null,map__30290__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30290__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30290__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30292_30304 = cljs.core.seq.call(null,bindings);
var chunk__30293_30305 = null;
var count__30294_30306 = (0);
var i__30295_30307 = (0);
while(true){
if((i__30295_30307 < count__30294_30306)){
var map__30300_30308 = cljs.core._nth.call(null,chunk__30293_30305,i__30295_30307);
var map__30300_30309__$1 = (((((!((map__30300_30308 == null))))?(((((map__30300_30308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30300_30308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30300_30308):map__30300_30308);
var binding_30310 = map__30300_30309__$1;
var init_30311 = cljs.core.get.call(null,map__30300_30309__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30310)," = ",init_30311,";");


var G__30312 = seq__30292_30304;
var G__30313 = chunk__30293_30305;
var G__30314 = count__30294_30306;
var G__30315 = (i__30295_30307 + (1));
seq__30292_30304 = G__30312;
chunk__30293_30305 = G__30313;
count__30294_30306 = G__30314;
i__30295_30307 = G__30315;
continue;
} else {
var temp__5720__auto___30316 = cljs.core.seq.call(null,seq__30292_30304);
if(temp__5720__auto___30316){
var seq__30292_30317__$1 = temp__5720__auto___30316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30292_30317__$1)){
var c__4550__auto___30318 = cljs.core.chunk_first.call(null,seq__30292_30317__$1);
var G__30319 = cljs.core.chunk_rest.call(null,seq__30292_30317__$1);
var G__30320 = c__4550__auto___30318;
var G__30321 = cljs.core.count.call(null,c__4550__auto___30318);
var G__30322 = (0);
seq__30292_30304 = G__30319;
chunk__30293_30305 = G__30320;
count__30294_30306 = G__30321;
i__30295_30307 = G__30322;
continue;
} else {
var map__30302_30323 = cljs.core.first.call(null,seq__30292_30317__$1);
var map__30302_30324__$1 = (((((!((map__30302_30323 == null))))?(((((map__30302_30323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30302_30323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30302_30323):map__30302_30323);
var binding_30325 = map__30302_30324__$1;
var init_30326 = cljs.core.get.call(null,map__30302_30324__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30325)," = ",init_30326,";");


var G__30327 = cljs.core.next.call(null,seq__30292_30317__$1);
var G__30328 = null;
var G__30329 = (0);
var G__30330 = (0);
seq__30292_30304 = G__30327;
chunk__30293_30305 = G__30328;
count__30294_30306 = G__30329;
i__30295_30307 = G__30330;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30333){
var map__30334 = p__30333;
var map__30334__$1 = (((((!((map__30334 == null))))?(((((map__30334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30334):map__30334);
var expr = map__30334__$1;
var f = cljs.core.get.call(null,map__30334__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__30334__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30334__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4120__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__30336 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env){
return (function (p1__30331_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30331_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env){
return (function (p1__30332_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30332_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30334,map__30334__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30336,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30336,(1),null);
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30339 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30339,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30340 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30340,args)),(((mfa_30340 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30340,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4120__auto__;
}
})())){
var fprop_30341 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_30341," ? ",f__$1,fprop_30341,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_30341," ? ",f__$1,fprop_30341,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30342){
var map__30343 = p__30342;
var map__30343__$1 = (((((!((map__30343 == null))))?(((((map__30343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30343):map__30343);
var ctor = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30345){
var map__30346 = p__30345;
var map__30346__$1 = (((((!((map__30346 == null))))?(((((map__30346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30346):map__30346);
var target = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4131__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__30348 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30348__$1 = (((((!((map__30348 == null))))?(((((map__30348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30348):map__30348);
var options = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30349 = options;
var map__30349__$1 = (((((!((map__30349 == null))))?(((((map__30349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349):map__30349);
var target = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30350 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30355 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30355__$1 = (((((!((map__30355 == null))))?(((((map__30355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30355):map__30355);
var node_libs = cljs.core.get.call(null,map__30355__$1,true);
var libs_to_load = cljs.core.get.call(null,map__30355__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__30350,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__30350,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30357_30377 = cljs.core.seq.call(null,libs_to_load);
var chunk__30358_30378 = null;
var count__30359_30379 = (0);
var i__30360_30380 = (0);
while(true){
if((i__30360_30380 < count__30359_30379)){
var lib_30381 = cljs.core._nth.call(null,chunk__30358_30378,i__30360_30380);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30381)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30381),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30381),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30381),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30381),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30381,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30381),"');");
}

}
}
}


var G__30382 = seq__30357_30377;
var G__30383 = chunk__30358_30378;
var G__30384 = count__30359_30379;
var G__30385 = (i__30360_30380 + (1));
seq__30357_30377 = G__30382;
chunk__30358_30378 = G__30383;
count__30359_30379 = G__30384;
i__30360_30380 = G__30385;
continue;
} else {
var temp__5720__auto___30386 = cljs.core.seq.call(null,seq__30357_30377);
if(temp__5720__auto___30386){
var seq__30357_30387__$1 = temp__5720__auto___30386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30357_30387__$1)){
var c__4550__auto___30388 = cljs.core.chunk_first.call(null,seq__30357_30387__$1);
var G__30389 = cljs.core.chunk_rest.call(null,seq__30357_30387__$1);
var G__30390 = c__4550__auto___30388;
var G__30391 = cljs.core.count.call(null,c__4550__auto___30388);
var G__30392 = (0);
seq__30357_30377 = G__30389;
chunk__30358_30378 = G__30390;
count__30359_30379 = G__30391;
i__30360_30380 = G__30392;
continue;
} else {
var lib_30393 = cljs.core.first.call(null,seq__30357_30387__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30393)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30393),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30393),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30393),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30393),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30393,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30393),"');");
}

}
}
}


var G__30394 = cljs.core.next.call(null,seq__30357_30387__$1);
var G__30395 = null;
var G__30396 = (0);
var G__30397 = (0);
seq__30357_30377 = G__30394;
chunk__30358_30378 = G__30395;
count__30359_30379 = G__30396;
i__30360_30380 = G__30397;
continue;
}
} else {
}
}
break;
}

var seq__30361_30398 = cljs.core.seq.call(null,node_libs);
var chunk__30362_30399 = null;
var count__30363_30400 = (0);
var i__30364_30401 = (0);
while(true){
if((i__30364_30401 < count__30363_30400)){
var lib_30402 = cljs.core._nth.call(null,chunk__30362_30399,i__30364_30401);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30402)," = require('",lib_30402,"');");


var G__30403 = seq__30361_30398;
var G__30404 = chunk__30362_30399;
var G__30405 = count__30363_30400;
var G__30406 = (i__30364_30401 + (1));
seq__30361_30398 = G__30403;
chunk__30362_30399 = G__30404;
count__30363_30400 = G__30405;
i__30364_30401 = G__30406;
continue;
} else {
var temp__5720__auto___30407 = cljs.core.seq.call(null,seq__30361_30398);
if(temp__5720__auto___30407){
var seq__30361_30408__$1 = temp__5720__auto___30407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30361_30408__$1)){
var c__4550__auto___30409 = cljs.core.chunk_first.call(null,seq__30361_30408__$1);
var G__30410 = cljs.core.chunk_rest.call(null,seq__30361_30408__$1);
var G__30411 = c__4550__auto___30409;
var G__30412 = cljs.core.count.call(null,c__4550__auto___30409);
var G__30413 = (0);
seq__30361_30398 = G__30410;
chunk__30362_30399 = G__30411;
count__30363_30400 = G__30412;
i__30364_30401 = G__30413;
continue;
} else {
var lib_30414 = cljs.core.first.call(null,seq__30361_30408__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30414)," = require('",lib_30414,"');");


var G__30415 = cljs.core.next.call(null,seq__30361_30408__$1);
var G__30416 = null;
var G__30417 = (0);
var G__30418 = (0);
seq__30361_30398 = G__30415;
chunk__30362_30399 = G__30416;
count__30363_30400 = G__30417;
i__30364_30401 = G__30418;
continue;
}
} else {
}
}
break;
}

var seq__30365_30419 = cljs.core.seq.call(null,global_exports_libs);
var chunk__30366_30420 = null;
var count__30367_30421 = (0);
var i__30368_30422 = (0);
while(true){
if((i__30368_30422 < count__30367_30421)){
var lib_30423 = cljs.core._nth.call(null,chunk__30366_30420,i__30368_30422);
var map__30373_30424 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30423));
var map__30373_30425__$1 = (((((!((map__30373_30424 == null))))?(((((map__30373_30424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30373_30424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30373_30424):map__30373_30424);
var global_exports_30426 = cljs.core.get.call(null,map__30373_30425__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30426,lib_30423);


var G__30427 = seq__30365_30419;
var G__30428 = chunk__30366_30420;
var G__30429 = count__30367_30421;
var G__30430 = (i__30368_30422 + (1));
seq__30365_30419 = G__30427;
chunk__30366_30420 = G__30428;
count__30367_30421 = G__30429;
i__30368_30422 = G__30430;
continue;
} else {
var temp__5720__auto___30431 = cljs.core.seq.call(null,seq__30365_30419);
if(temp__5720__auto___30431){
var seq__30365_30432__$1 = temp__5720__auto___30431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30365_30432__$1)){
var c__4550__auto___30433 = cljs.core.chunk_first.call(null,seq__30365_30432__$1);
var G__30434 = cljs.core.chunk_rest.call(null,seq__30365_30432__$1);
var G__30435 = c__4550__auto___30433;
var G__30436 = cljs.core.count.call(null,c__4550__auto___30433);
var G__30437 = (0);
seq__30365_30419 = G__30434;
chunk__30366_30420 = G__30435;
count__30367_30421 = G__30436;
i__30368_30422 = G__30437;
continue;
} else {
var lib_30438 = cljs.core.first.call(null,seq__30365_30432__$1);
var map__30375_30439 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30438));
var map__30375_30440__$1 = (((((!((map__30375_30439 == null))))?(((((map__30375_30439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375_30439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375_30439):map__30375_30439);
var global_exports_30441 = cljs.core.get.call(null,map__30375_30440__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30441,lib_30438);


var G__30442 = cljs.core.next.call(null,seq__30365_30432__$1);
var G__30443 = null;
var G__30444 = (0);
var G__30445 = (0);
seq__30365_30419 = G__30442;
chunk__30366_30420 = G__30443;
count__30367_30421 = G__30444;
i__30368_30422 = G__30445;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__30446){
var map__30447 = p__30446;
var map__30447__$1 = (((((!((map__30447 == null))))?(((((map__30447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);
var name = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30449){
var map__30450 = p__30449;
var map__30450__$1 = (((((!((map__30450 == null))))?(((((map__30450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30450):map__30450);
var name = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__30452){
var map__30453 = p__30452;
var map__30453__$1 = (((((!((map__30453 == null))))?(((((map__30453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30453):map__30453);
var t = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30455_30479 = cljs.core.seq.call(null,protocols);
var chunk__30456_30480 = null;
var count__30457_30481 = (0);
var i__30458_30482 = (0);
while(true){
if((i__30458_30482 < count__30457_30481)){
var protocol_30483 = cljs.core._nth.call(null,chunk__30456_30480,i__30458_30482);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30483)),"}");


var G__30484 = seq__30455_30479;
var G__30485 = chunk__30456_30480;
var G__30486 = count__30457_30481;
var G__30487 = (i__30458_30482 + (1));
seq__30455_30479 = G__30484;
chunk__30456_30480 = G__30485;
count__30457_30481 = G__30486;
i__30458_30482 = G__30487;
continue;
} else {
var temp__5720__auto___30488 = cljs.core.seq.call(null,seq__30455_30479);
if(temp__5720__auto___30488){
var seq__30455_30489__$1 = temp__5720__auto___30488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30455_30489__$1)){
var c__4550__auto___30490 = cljs.core.chunk_first.call(null,seq__30455_30489__$1);
var G__30491 = cljs.core.chunk_rest.call(null,seq__30455_30489__$1);
var G__30492 = c__4550__auto___30490;
var G__30493 = cljs.core.count.call(null,c__4550__auto___30490);
var G__30494 = (0);
seq__30455_30479 = G__30491;
chunk__30456_30480 = G__30492;
count__30457_30481 = G__30493;
i__30458_30482 = G__30494;
continue;
} else {
var protocol_30495 = cljs.core.first.call(null,seq__30455_30489__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30495)),"}");


var G__30496 = cljs.core.next.call(null,seq__30455_30489__$1);
var G__30497 = null;
var G__30498 = (0);
var G__30499 = (0);
seq__30455_30479 = G__30496;
chunk__30456_30480 = G__30497;
count__30457_30481 = G__30498;
i__30458_30482 = G__30499;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30459_30500 = cljs.core.seq.call(null,fields__$1);
var chunk__30460_30501 = null;
var count__30461_30502 = (0);
var i__30462_30503 = (0);
while(true){
if((i__30462_30503 < count__30461_30502)){
var fld_30504 = cljs.core._nth.call(null,chunk__30460_30501,i__30462_30503);
cljs.compiler.emitln.call(null,"this.",fld_30504," = ",fld_30504,";");


var G__30505 = seq__30459_30500;
var G__30506 = chunk__30460_30501;
var G__30507 = count__30461_30502;
var G__30508 = (i__30462_30503 + (1));
seq__30459_30500 = G__30505;
chunk__30460_30501 = G__30506;
count__30461_30502 = G__30507;
i__30462_30503 = G__30508;
continue;
} else {
var temp__5720__auto___30509 = cljs.core.seq.call(null,seq__30459_30500);
if(temp__5720__auto___30509){
var seq__30459_30510__$1 = temp__5720__auto___30509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30459_30510__$1)){
var c__4550__auto___30511 = cljs.core.chunk_first.call(null,seq__30459_30510__$1);
var G__30512 = cljs.core.chunk_rest.call(null,seq__30459_30510__$1);
var G__30513 = c__4550__auto___30511;
var G__30514 = cljs.core.count.call(null,c__4550__auto___30511);
var G__30515 = (0);
seq__30459_30500 = G__30512;
chunk__30460_30501 = G__30513;
count__30461_30502 = G__30514;
i__30462_30503 = G__30515;
continue;
} else {
var fld_30516 = cljs.core.first.call(null,seq__30459_30510__$1);
cljs.compiler.emitln.call(null,"this.",fld_30516," = ",fld_30516,";");


var G__30517 = cljs.core.next.call(null,seq__30459_30510__$1);
var G__30518 = null;
var G__30519 = (0);
var G__30520 = (0);
seq__30459_30500 = G__30517;
chunk__30460_30501 = G__30518;
count__30461_30502 = G__30519;
i__30462_30503 = G__30520;
continue;
}
} else {
}
}
break;
}

var seq__30463_30521 = cljs.core.seq.call(null,pmasks);
var chunk__30464_30522 = null;
var count__30465_30523 = (0);
var i__30466_30524 = (0);
while(true){
if((i__30466_30524 < count__30465_30523)){
var vec__30473_30525 = cljs.core._nth.call(null,chunk__30464_30522,i__30466_30524);
var pno_30526 = cljs.core.nth.call(null,vec__30473_30525,(0),null);
var pmask_30527 = cljs.core.nth.call(null,vec__30473_30525,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30526,"$ = ",pmask_30527,";");


var G__30528 = seq__30463_30521;
var G__30529 = chunk__30464_30522;
var G__30530 = count__30465_30523;
var G__30531 = (i__30466_30524 + (1));
seq__30463_30521 = G__30528;
chunk__30464_30522 = G__30529;
count__30465_30523 = G__30530;
i__30466_30524 = G__30531;
continue;
} else {
var temp__5720__auto___30532 = cljs.core.seq.call(null,seq__30463_30521);
if(temp__5720__auto___30532){
var seq__30463_30533__$1 = temp__5720__auto___30532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30463_30533__$1)){
var c__4550__auto___30534 = cljs.core.chunk_first.call(null,seq__30463_30533__$1);
var G__30535 = cljs.core.chunk_rest.call(null,seq__30463_30533__$1);
var G__30536 = c__4550__auto___30534;
var G__30537 = cljs.core.count.call(null,c__4550__auto___30534);
var G__30538 = (0);
seq__30463_30521 = G__30535;
chunk__30464_30522 = G__30536;
count__30465_30523 = G__30537;
i__30466_30524 = G__30538;
continue;
} else {
var vec__30476_30539 = cljs.core.first.call(null,seq__30463_30533__$1);
var pno_30540 = cljs.core.nth.call(null,vec__30476_30539,(0),null);
var pmask_30541 = cljs.core.nth.call(null,vec__30476_30539,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30540,"$ = ",pmask_30541,";");


var G__30542 = cljs.core.next.call(null,seq__30463_30533__$1);
var G__30543 = null;
var G__30544 = (0);
var G__30545 = (0);
seq__30463_30521 = G__30542;
chunk__30464_30522 = G__30543;
count__30465_30523 = G__30544;
i__30466_30524 = G__30545;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__30546){
var map__30547 = p__30546;
var map__30547__$1 = (((((!((map__30547 == null))))?(((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var t = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30549_30573 = cljs.core.seq.call(null,protocols);
var chunk__30550_30574 = null;
var count__30551_30575 = (0);
var i__30552_30576 = (0);
while(true){
if((i__30552_30576 < count__30551_30575)){
var protocol_30577 = cljs.core._nth.call(null,chunk__30550_30574,i__30552_30576);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30577)),"}");


var G__30578 = seq__30549_30573;
var G__30579 = chunk__30550_30574;
var G__30580 = count__30551_30575;
var G__30581 = (i__30552_30576 + (1));
seq__30549_30573 = G__30578;
chunk__30550_30574 = G__30579;
count__30551_30575 = G__30580;
i__30552_30576 = G__30581;
continue;
} else {
var temp__5720__auto___30582 = cljs.core.seq.call(null,seq__30549_30573);
if(temp__5720__auto___30582){
var seq__30549_30583__$1 = temp__5720__auto___30582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30549_30583__$1)){
var c__4550__auto___30584 = cljs.core.chunk_first.call(null,seq__30549_30583__$1);
var G__30585 = cljs.core.chunk_rest.call(null,seq__30549_30583__$1);
var G__30586 = c__4550__auto___30584;
var G__30587 = cljs.core.count.call(null,c__4550__auto___30584);
var G__30588 = (0);
seq__30549_30573 = G__30585;
chunk__30550_30574 = G__30586;
count__30551_30575 = G__30587;
i__30552_30576 = G__30588;
continue;
} else {
var protocol_30589 = cljs.core.first.call(null,seq__30549_30583__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30589)),"}");


var G__30590 = cljs.core.next.call(null,seq__30549_30583__$1);
var G__30591 = null;
var G__30592 = (0);
var G__30593 = (0);
seq__30549_30573 = G__30590;
chunk__30550_30574 = G__30591;
count__30551_30575 = G__30592;
i__30552_30576 = G__30593;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30553_30594 = cljs.core.seq.call(null,fields__$1);
var chunk__30554_30595 = null;
var count__30555_30596 = (0);
var i__30556_30597 = (0);
while(true){
if((i__30556_30597 < count__30555_30596)){
var fld_30598 = cljs.core._nth.call(null,chunk__30554_30595,i__30556_30597);
cljs.compiler.emitln.call(null,"this.",fld_30598," = ",fld_30598,";");


var G__30599 = seq__30553_30594;
var G__30600 = chunk__30554_30595;
var G__30601 = count__30555_30596;
var G__30602 = (i__30556_30597 + (1));
seq__30553_30594 = G__30599;
chunk__30554_30595 = G__30600;
count__30555_30596 = G__30601;
i__30556_30597 = G__30602;
continue;
} else {
var temp__5720__auto___30603 = cljs.core.seq.call(null,seq__30553_30594);
if(temp__5720__auto___30603){
var seq__30553_30604__$1 = temp__5720__auto___30603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30553_30604__$1)){
var c__4550__auto___30605 = cljs.core.chunk_first.call(null,seq__30553_30604__$1);
var G__30606 = cljs.core.chunk_rest.call(null,seq__30553_30604__$1);
var G__30607 = c__4550__auto___30605;
var G__30608 = cljs.core.count.call(null,c__4550__auto___30605);
var G__30609 = (0);
seq__30553_30594 = G__30606;
chunk__30554_30595 = G__30607;
count__30555_30596 = G__30608;
i__30556_30597 = G__30609;
continue;
} else {
var fld_30610 = cljs.core.first.call(null,seq__30553_30604__$1);
cljs.compiler.emitln.call(null,"this.",fld_30610," = ",fld_30610,";");


var G__30611 = cljs.core.next.call(null,seq__30553_30604__$1);
var G__30612 = null;
var G__30613 = (0);
var G__30614 = (0);
seq__30553_30594 = G__30611;
chunk__30554_30595 = G__30612;
count__30555_30596 = G__30613;
i__30556_30597 = G__30614;
continue;
}
} else {
}
}
break;
}

var seq__30557_30615 = cljs.core.seq.call(null,pmasks);
var chunk__30558_30616 = null;
var count__30559_30617 = (0);
var i__30560_30618 = (0);
while(true){
if((i__30560_30618 < count__30559_30617)){
var vec__30567_30619 = cljs.core._nth.call(null,chunk__30558_30616,i__30560_30618);
var pno_30620 = cljs.core.nth.call(null,vec__30567_30619,(0),null);
var pmask_30621 = cljs.core.nth.call(null,vec__30567_30619,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30620,"$ = ",pmask_30621,";");


var G__30622 = seq__30557_30615;
var G__30623 = chunk__30558_30616;
var G__30624 = count__30559_30617;
var G__30625 = (i__30560_30618 + (1));
seq__30557_30615 = G__30622;
chunk__30558_30616 = G__30623;
count__30559_30617 = G__30624;
i__30560_30618 = G__30625;
continue;
} else {
var temp__5720__auto___30626 = cljs.core.seq.call(null,seq__30557_30615);
if(temp__5720__auto___30626){
var seq__30557_30627__$1 = temp__5720__auto___30626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30557_30627__$1)){
var c__4550__auto___30628 = cljs.core.chunk_first.call(null,seq__30557_30627__$1);
var G__30629 = cljs.core.chunk_rest.call(null,seq__30557_30627__$1);
var G__30630 = c__4550__auto___30628;
var G__30631 = cljs.core.count.call(null,c__4550__auto___30628);
var G__30632 = (0);
seq__30557_30615 = G__30629;
chunk__30558_30616 = G__30630;
count__30559_30617 = G__30631;
i__30560_30618 = G__30632;
continue;
} else {
var vec__30570_30633 = cljs.core.first.call(null,seq__30557_30627__$1);
var pno_30634 = cljs.core.nth.call(null,vec__30570_30633,(0),null);
var pmask_30635 = cljs.core.nth.call(null,vec__30570_30633,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30634,"$ = ",pmask_30635,";");


var G__30636 = cljs.core.next.call(null,seq__30557_30627__$1);
var G__30637 = null;
var G__30638 = (0);
var G__30639 = (0);
seq__30557_30615 = G__30636;
chunk__30558_30616 = G__30637;
count__30559_30617 = G__30638;
i__30560_30618 = G__30639;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30640){
var map__30641 = p__30640;
var map__30641__$1 = (((((!((map__30641 == null))))?(((((map__30641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);
var target = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30643){
var map__30644 = p__30643;
var map__30644__$1 = (((((!((map__30644 == null))))?(((((map__30644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30644):map__30644);
var op = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29438__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29438__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__30650 = cljs.core.seq.call(null,table);
var chunk__30651 = null;
var count__30652 = (0);
var i__30653 = (0);
while(true){
if((i__30653 < count__30652)){
var vec__30660 = cljs.core._nth.call(null,chunk__30651,i__30653);
var sym = cljs.core.nth.call(null,vec__30660,(0),null);
var value = cljs.core.nth.call(null,vec__30660,(1),null);
var ns_30666 = cljs.core.namespace.call(null,sym);
var name_30667 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__30668 = seq__30650;
var G__30669 = chunk__30651;
var G__30670 = count__30652;
var G__30671 = (i__30653 + (1));
seq__30650 = G__30668;
chunk__30651 = G__30669;
count__30652 = G__30670;
i__30653 = G__30671;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30650);
if(temp__5720__auto__){
var seq__30650__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30650__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30650__$1);
var G__30672 = cljs.core.chunk_rest.call(null,seq__30650__$1);
var G__30673 = c__4550__auto__;
var G__30674 = cljs.core.count.call(null,c__4550__auto__);
var G__30675 = (0);
seq__30650 = G__30672;
chunk__30651 = G__30673;
count__30652 = G__30674;
i__30653 = G__30675;
continue;
} else {
var vec__30663 = cljs.core.first.call(null,seq__30650__$1);
var sym = cljs.core.nth.call(null,vec__30663,(0),null);
var value = cljs.core.nth.call(null,vec__30663,(1),null);
var ns_30676 = cljs.core.namespace.call(null,sym);
var name_30677 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__30678 = cljs.core.next.call(null,seq__30650__$1);
var G__30679 = null;
var G__30680 = (0);
var G__30681 = (0);
seq__30650 = G__30678;
chunk__30651 = G__30679;
count__30652 = G__30680;
i__30653 = G__30681;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__30683 = arguments.length;
switch (G__30683) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_30688 = cljs.core.first.call(null,ks);
var vec__30684_30689 = cljs.core.conj.call(null,prefix,k_30688);
var top_30690 = cljs.core.nth.call(null,vec__30684_30689,(0),null);
var prefix_SINGLEQUOTE__30691 = vec__30684_30689;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_30688)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__30691) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_30690)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_30690)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30691)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_30690);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30691)),";");
}
} else {
}

var m_30692 = cljs.core.get.call(null,externs,k_30688);
if(cljs.core.empty_QMARK_.call(null,m_30692)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__30691,m_30692,top_level,known_externs);
}

var G__30693 = cljs.core.next.call(null,ks);
ks = G__30693;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1601408403592
