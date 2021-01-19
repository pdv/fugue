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
var map__10227 = s;
var map__10227__$1 = (((((!((map__10227 == null))))?(((((map__10227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10227):map__10227);
var name = cljs.core.get.call(null,map__10227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__10227__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__10230 = info;
var map__10231 = G__10230;
var map__10231__$1 = (((((!((map__10231 == null))))?(((((map__10231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10231):map__10231);
var shadow = cljs.core.get.call(null,map__10231__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__10230__$1 = G__10230;
while(true){
var d__$2 = d__$1;
var map__10235 = G__10230__$1;
var map__10235__$1 = (((((!((map__10235 == null))))?(((((map__10235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10235):map__10235);
var shadow__$1 = cljs.core.get.call(null,map__10235__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__10237 = (d__$2 + (1));
var G__10238 = shadow__$1;
d__$1 = G__10237;
G__10230__$1 = G__10238;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__10239){
var map__10240 = p__10239;
var map__10240__$1 = (((((!((map__10240 == null))))?(((((map__10240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10240):map__10240);
var name_var = map__10240__$1;
var name = cljs.core.get.call(null,map__10240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__10240__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__10242 = info;
var map__10242__$1 = (((((!((map__10242 == null))))?(((((map__10242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10242):map__10242);
var ns = cljs.core.get.call(null,map__10242__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__10242__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__10245 = arguments.length;
switch (G__10245) {
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
var G__10247 = cp;
switch (G__10247) {
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
var seq__10249_10253 = cljs.core.seq.call(null,s);
var chunk__10250_10254 = null;
var count__10251_10255 = (0);
var i__10252_10256 = (0);
while(true){
if((i__10252_10256 < count__10251_10255)){
var c_10257 = cljs.core._nth.call(null,chunk__10250_10254,i__10252_10256);
sb.append(cljs.compiler.escape_char.call(null,c_10257));


var G__10258 = seq__10249_10253;
var G__10259 = chunk__10250_10254;
var G__10260 = count__10251_10255;
var G__10261 = (i__10252_10256 + (1));
seq__10249_10253 = G__10258;
chunk__10250_10254 = G__10259;
count__10251_10255 = G__10260;
i__10252_10256 = G__10261;
continue;
} else {
var temp__5720__auto___10262 = cljs.core.seq.call(null,seq__10249_10253);
if(temp__5720__auto___10262){
var seq__10249_10263__$1 = temp__5720__auto___10262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10249_10263__$1)){
var c__4550__auto___10264 = cljs.core.chunk_first.call(null,seq__10249_10263__$1);
var G__10265 = cljs.core.chunk_rest.call(null,seq__10249_10263__$1);
var G__10266 = c__4550__auto___10264;
var G__10267 = cljs.core.count.call(null,c__4550__auto___10264);
var G__10268 = (0);
seq__10249_10253 = G__10265;
chunk__10250_10254 = G__10266;
count__10251_10255 = G__10267;
i__10252_10256 = G__10268;
continue;
} else {
var c_10269 = cljs.core.first.call(null,seq__10249_10263__$1);
sb.append(cljs.compiler.escape_char.call(null,c_10269));


var G__10270 = cljs.core.next.call(null,seq__10249_10263__$1);
var G__10271 = null;
var G__10272 = (0);
var G__10273 = (0);
seq__10249_10253 = G__10270;
chunk__10250_10254 = G__10271;
count__10251_10255 = G__10272;
i__10252_10256 = G__10273;
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
var map__10274_10279 = ast;
var map__10274_10280__$1 = (((((!((map__10274_10279 == null))))?(((((map__10274_10279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10274_10279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10274_10279):map__10274_10279);
var env_10281 = cljs.core.get.call(null,map__10274_10280__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_10281))){
var map__10276_10282 = env_10281;
var map__10276_10283__$1 = (((((!((map__10276_10282 == null))))?(((((map__10276_10282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10276_10282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10276_10282):map__10276_10282);
var line_10284 = cljs.core.get.call(null,map__10276_10283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_10285 = cljs.core.get.call(null,map__10276_10283__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__10276_10282,map__10276_10283__$1,line_10284,column_10285,map__10274_10279,map__10274_10280__$1,env_10281){
return (function (m){
var minfo = (function (){var G__10278 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__10278,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__10278;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_10284 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__10276_10282,map__10276_10283__$1,line_10284,column_10285,map__10274_10279,map__10274_10280__$1,env_10281){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_10285)?(column_10285 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__10276_10282,map__10276_10283__$1,line_10284,column_10285,map__10274_10279,map__10274_10280__$1,env_10281){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__10276_10282,map__10276_10283__$1,line_10284,column_10285,map__10274_10279,map__10274_10280__$1,env_10281))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__10276_10282,map__10276_10283__$1,line_10284,column_10285,map__10274_10279,map__10274_10280__$1,env_10281))
,cljs.core.sorted_map.call(null)));
});})(map__10276_10282,map__10276_10283__$1,line_10284,column_10285,map__10274_10279,map__10274_10280__$1,env_10281))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__10294 = arguments.length;
switch (G__10294) {
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
var len__4730__auto___10301 = arguments.length;
var i__4731__auto___10302 = (0);
while(true){
if((i__4731__auto___10302 < len__4730__auto___10301)){
args_arr__4751__auto__.push((arguments[i__4731__auto___10302]));

var G__10303 = (i__4731__auto___10302 + (1));
i__4731__auto___10302 = G__10303;
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
var s_10304 = (function (){var G__10295 = a;
if((!(typeof a === 'string'))){
return G__10295.toString();
} else {
return G__10295;
}
})();
var temp__5724__auto___10305 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___10305 == null)){
} else {
var sm_data_10306 = temp__5724__auto___10305;
cljs.core.swap_BANG_.call(null,sm_data_10306,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_10306,temp__5724__auto___10305,s_10304){
return (function (p1__10286_SHARP_){
return (p1__10286_SHARP_ + s_10304.length);
});})(sm_data_10306,temp__5724__auto___10305,s_10304))
);
}

cljs.core.print.call(null,s_10304);

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

var seq__10296 = cljs.core.seq.call(null,xs);
var chunk__10297 = null;
var count__10298 = (0);
var i__10299 = (0);
while(true){
if((i__10299 < count__10298)){
var x = cljs.core._nth.call(null,chunk__10297,i__10299);
cljs.compiler.emits.call(null,x);


var G__10307 = seq__10296;
var G__10308 = chunk__10297;
var G__10309 = count__10298;
var G__10310 = (i__10299 + (1));
seq__10296 = G__10307;
chunk__10297 = G__10308;
count__10298 = G__10309;
i__10299 = G__10310;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10296);
if(temp__5720__auto__){
var seq__10296__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10296__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10296__$1);
var G__10311 = cljs.core.chunk_rest.call(null,seq__10296__$1);
var G__10312 = c__4550__auto__;
var G__10313 = cljs.core.count.call(null,c__4550__auto__);
var G__10314 = (0);
seq__10296 = G__10311;
chunk__10297 = G__10312;
count__10298 = G__10313;
i__10299 = G__10314;
continue;
} else {
var x = cljs.core.first.call(null,seq__10296__$1);
cljs.compiler.emits.call(null,x);


var G__10315 = cljs.core.next.call(null,seq__10296__$1);
var G__10316 = null;
var G__10317 = (0);
var G__10318 = (0);
seq__10296 = G__10315;
chunk__10297 = G__10316;
count__10298 = G__10317;
i__10299 = G__10318;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq10288){
var G__10289 = cljs.core.first.call(null,seq10288);
var seq10288__$1 = cljs.core.next.call(null,seq10288);
var G__10290 = cljs.core.first.call(null,seq10288__$1);
var seq10288__$2 = cljs.core.next.call(null,seq10288__$1);
var G__10291 = cljs.core.first.call(null,seq10288__$2);
var seq10288__$3 = cljs.core.next.call(null,seq10288__$2);
var G__10292 = cljs.core.first.call(null,seq10288__$3);
var seq10288__$4 = cljs.core.next.call(null,seq10288__$3);
var G__10293 = cljs.core.first.call(null,seq10288__$4);
var seq10288__$5 = cljs.core.next.call(null,seq10288__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10289,G__10290,G__10291,G__10292,G__10293,seq10288__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__10319){
var map__10320 = p__10319;
var map__10320__$1 = (((((!((map__10320 == null))))?(((((map__10320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10320):map__10320);
var m = map__10320__$1;
var gen_line = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__10329 = arguments.length;
switch (G__10329) {
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
var len__4730__auto___10335 = arguments.length;
var i__4731__auto___10336 = (0);
while(true){
if((i__4731__auto___10336 < len__4730__auto___10335)){
args_arr__4751__auto__.push((arguments[i__4731__auto___10336]));

var G__10337 = (i__4731__auto___10336 + (1));
i__4731__auto___10336 = G__10337;
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

var seq__10330_10338 = cljs.core.seq.call(null,xs);
var chunk__10331_10339 = null;
var count__10332_10340 = (0);
var i__10333_10341 = (0);
while(true){
if((i__10333_10341 < count__10332_10340)){
var x_10342 = cljs.core._nth.call(null,chunk__10331_10339,i__10333_10341);
cljs.compiler.emits.call(null,x_10342);


var G__10343 = seq__10330_10338;
var G__10344 = chunk__10331_10339;
var G__10345 = count__10332_10340;
var G__10346 = (i__10333_10341 + (1));
seq__10330_10338 = G__10343;
chunk__10331_10339 = G__10344;
count__10332_10340 = G__10345;
i__10333_10341 = G__10346;
continue;
} else {
var temp__5720__auto___10347 = cljs.core.seq.call(null,seq__10330_10338);
if(temp__5720__auto___10347){
var seq__10330_10348__$1 = temp__5720__auto___10347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10330_10348__$1)){
var c__4550__auto___10349 = cljs.core.chunk_first.call(null,seq__10330_10348__$1);
var G__10350 = cljs.core.chunk_rest.call(null,seq__10330_10348__$1);
var G__10351 = c__4550__auto___10349;
var G__10352 = cljs.core.count.call(null,c__4550__auto___10349);
var G__10353 = (0);
seq__10330_10338 = G__10350;
chunk__10331_10339 = G__10351;
count__10332_10340 = G__10352;
i__10333_10341 = G__10353;
continue;
} else {
var x_10354 = cljs.core.first.call(null,seq__10330_10348__$1);
cljs.compiler.emits.call(null,x_10354);


var G__10355 = cljs.core.next.call(null,seq__10330_10348__$1);
var G__10356 = null;
var G__10357 = (0);
var G__10358 = (0);
seq__10330_10338 = G__10355;
chunk__10331_10339 = G__10356;
count__10332_10340 = G__10357;
i__10333_10341 = G__10358;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq10323){
var G__10324 = cljs.core.first.call(null,seq10323);
var seq10323__$1 = cljs.core.next.call(null,seq10323);
var G__10325 = cljs.core.first.call(null,seq10323__$1);
var seq10323__$2 = cljs.core.next.call(null,seq10323__$1);
var G__10326 = cljs.core.first.call(null,seq10323__$2);
var seq10323__$3 = cljs.core.next.call(null,seq10323__$2);
var G__10327 = cljs.core.first.call(null,seq10323__$3);
var seq10323__$4 = cljs.core.next.call(null,seq10323__$3);
var G__10328 = cljs.core.first.call(null,seq10323__$4);
var seq10323__$5 = cljs.core.next.call(null,seq10323__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10324,G__10325,G__10326,G__10327,G__10328,seq10323__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10359_10363 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10360_10364 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10361_10365 = true;
var _STAR_print_fn_STAR__temp_val__10362_10366 = ((function (_STAR_print_newline_STAR__orig_val__10359_10363,_STAR_print_fn_STAR__orig_val__10360_10364,_STAR_print_newline_STAR__temp_val__10361_10365,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__10359_10363,_STAR_print_fn_STAR__orig_val__10360_10364,_STAR_print_newline_STAR__temp_val__10361_10365,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10361_10365;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10362_10366;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10360_10364;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10359_10363;
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
var vec__10367 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__10367,(0),null);
var name = cljs.core.nth.call(null,vec__10367,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__10367,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__10367,ns,name))
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
var vec__10370 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__10370,(0),null);
var flags = cljs.core.nth.call(null,vec__10370,(1),null);
var pattern = cljs.core.nth.call(null,vec__10370,(2),null);
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
return (function (p1__10373_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__10373_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__10375){
var map__10376 = p__10375;
var map__10376__$1 = (((((!((map__10376 == null))))?(((((map__10376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10376):map__10376);
var ast = map__10376__$1;
var info = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__10378 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__10378__$1 = (((((!((map__10378 == null))))?(((((map__10378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10378):map__10378);
var cenv = map__10378__$1;
var options = cljs.core.get.call(null,map__10378__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__10380 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__10380,cljs.analyzer.es5_allowed);
} else {
return G__10380;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__10381 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__10381,reserved);
} else {
return G__10381;
}
})();
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__10382_10383 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__10382_10384__$1 = (((G__10382_10383 instanceof cljs.core.Keyword))?G__10382_10383.fqn:null);
switch (G__10382_10384__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__10386){
var map__10387 = p__10386;
var map__10387__$1 = (((((!((map__10387 == null))))?(((((map__10387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10387):map__10387);
var arg = map__10387__$1;
var env = cljs.core.get.call(null,map__10387__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__10387__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__10387__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__10387__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__10389 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__10389__$1 = (((((!((map__10389 == null))))?(((((map__10389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10389):map__10389);
var name = cljs.core.get.call(null,map__10389__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__10391){
var map__10392 = p__10391;
var map__10392__$1 = (((((!((map__10392 == null))))?(((((map__10392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10392):map__10392);
var expr = cljs.core.get.call(null,map__10392__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__10392__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__10392__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__10394_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__10394_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__10395){
var map__10396 = p__10395;
var map__10396__$1 = (((((!((map__10396 == null))))?(((((map__10396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10396):map__10396);
var env = cljs.core.get.call(null,map__10396__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__10396__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__10396__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__10398){
var map__10399 = p__10398;
var map__10399__$1 = (((((!((map__10399 == null))))?(((((map__10399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10399):map__10399);
var items = cljs.core.get.call(null,map__10399__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__10399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__10401_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__10401_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__10402){
var map__10403 = p__10402;
var map__10403__$1 = (((((!((map__10403 == null))))?(((((map__10403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10403):map__10403);
var items = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___10427 = cljs.core.seq.call(null,items);
if(temp__5720__auto___10427){
var items_10428__$1 = temp__5720__auto___10427;
var vec__10405_10429 = items_10428__$1;
var seq__10406_10430 = cljs.core.seq.call(null,vec__10405_10429);
var first__10407_10431 = cljs.core.first.call(null,seq__10406_10430);
var seq__10406_10432__$1 = cljs.core.next.call(null,seq__10406_10430);
var vec__10408_10433 = first__10407_10431;
var k_10434 = cljs.core.nth.call(null,vec__10408_10433,(0),null);
var v_10435 = cljs.core.nth.call(null,vec__10408_10433,(1),null);
var r_10436 = seq__10406_10432__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_10434),"\": ",emit_js_object_val.call(null,v_10435));

var seq__10411_10437 = cljs.core.seq.call(null,r_10436);
var chunk__10412_10438 = null;
var count__10413_10439 = (0);
var i__10414_10440 = (0);
while(true){
if((i__10414_10440 < count__10413_10439)){
var vec__10421_10441 = cljs.core._nth.call(null,chunk__10412_10438,i__10414_10440);
var k_10442__$1 = cljs.core.nth.call(null,vec__10421_10441,(0),null);
var v_10443__$1 = cljs.core.nth.call(null,vec__10421_10441,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10442__$1),"\": ",emit_js_object_val.call(null,v_10443__$1));


var G__10444 = seq__10411_10437;
var G__10445 = chunk__10412_10438;
var G__10446 = count__10413_10439;
var G__10447 = (i__10414_10440 + (1));
seq__10411_10437 = G__10444;
chunk__10412_10438 = G__10445;
count__10413_10439 = G__10446;
i__10414_10440 = G__10447;
continue;
} else {
var temp__5720__auto___10448__$1 = cljs.core.seq.call(null,seq__10411_10437);
if(temp__5720__auto___10448__$1){
var seq__10411_10449__$1 = temp__5720__auto___10448__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10411_10449__$1)){
var c__4550__auto___10450 = cljs.core.chunk_first.call(null,seq__10411_10449__$1);
var G__10451 = cljs.core.chunk_rest.call(null,seq__10411_10449__$1);
var G__10452 = c__4550__auto___10450;
var G__10453 = cljs.core.count.call(null,c__4550__auto___10450);
var G__10454 = (0);
seq__10411_10437 = G__10451;
chunk__10412_10438 = G__10452;
count__10413_10439 = G__10453;
i__10414_10440 = G__10454;
continue;
} else {
var vec__10424_10455 = cljs.core.first.call(null,seq__10411_10449__$1);
var k_10456__$1 = cljs.core.nth.call(null,vec__10424_10455,(0),null);
var v_10457__$1 = cljs.core.nth.call(null,vec__10424_10455,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10456__$1),"\": ",emit_js_object_val.call(null,v_10457__$1));


var G__10458 = cljs.core.next.call(null,seq__10411_10449__$1);
var G__10459 = null;
var G__10460 = (0);
var G__10461 = (0);
seq__10411_10437 = G__10458;
chunk__10412_10438 = G__10459;
count__10413_10439 = G__10460;
i__10414_10440 = G__10461;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__10462){
var map__10463 = p__10462;
var map__10463__$1 = (((((!((map__10463 == null))))?(((((map__10463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10463):map__10463);
var keys = cljs.core.get.call(null,map__10463__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__10463__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__10463__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__10465){
var map__10466 = p__10465;
var map__10466__$1 = (((((!((map__10466 == null))))?(((((map__10466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10466):map__10466);
var items = cljs.core.get.call(null,map__10466__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__10466__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__10468){
var map__10469 = p__10468;
var map__10469__$1 = (((((!((map__10469 == null))))?(((((map__10469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10469):map__10469);
var expr = cljs.core.get.call(null,map__10469__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__10471){
var map__10472 = p__10471;
var map__10472__$1 = (((((!((map__10472 == null))))?(((((map__10472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10472):map__10472);
var form = cljs.core.get.call(null,map__10472__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__10472__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__10474 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__10474__$1 = (((((!((map__10474 == null))))?(((((map__10474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10474):map__10474);
var op = cljs.core.get.call(null,map__10474__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__10474__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__10474__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__10476 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__10476__$1 = (((((!((map__10476 == null))))?(((((map__10476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10476):map__10476);
var op = cljs.core.get.call(null,map__10476__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__10476__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__10476__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__10478){
var map__10479 = p__10478;
var map__10479__$1 = (((((!((map__10479 == null))))?(((((map__10479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10479):map__10479);
var test = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__10481){
var map__10482 = p__10481;
var map__10482__$1 = (((((!((map__10482 == null))))?(((((map__10482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10482):map__10482);
var v = cljs.core.get.call(null,map__10482__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__10482__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__10482__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__10482__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__10484_10520 = cljs.core.seq.call(null,nodes);
var chunk__10485_10521 = null;
var count__10486_10522 = (0);
var i__10487_10523 = (0);
while(true){
if((i__10487_10523 < count__10486_10522)){
var map__10504_10524 = cljs.core._nth.call(null,chunk__10485_10521,i__10487_10523);
var map__10504_10525__$1 = (((((!((map__10504_10524 == null))))?(((((map__10504_10524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10504_10524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10504_10524):map__10504_10524);
var ts_10526 = cljs.core.get.call(null,map__10504_10525__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__10505_10527 = cljs.core.get.call(null,map__10504_10525__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__10505_10528__$1 = (((((!((map__10505_10527 == null))))?(((((map__10505_10527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10505_10527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10505_10527):map__10505_10527);
var then_10529 = cljs.core.get.call(null,map__10505_10528__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__10508_10530 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_10526));
var chunk__10509_10531 = null;
var count__10510_10532 = (0);
var i__10511_10533 = (0);
while(true){
if((i__10511_10533 < count__10510_10532)){
var test_10534 = cljs.core._nth.call(null,chunk__10509_10531,i__10511_10533);
cljs.compiler.emitln.call(null,"case ",test_10534,":");


var G__10535 = seq__10508_10530;
var G__10536 = chunk__10509_10531;
var G__10537 = count__10510_10532;
var G__10538 = (i__10511_10533 + (1));
seq__10508_10530 = G__10535;
chunk__10509_10531 = G__10536;
count__10510_10532 = G__10537;
i__10511_10533 = G__10538;
continue;
} else {
var temp__5720__auto___10539 = cljs.core.seq.call(null,seq__10508_10530);
if(temp__5720__auto___10539){
var seq__10508_10540__$1 = temp__5720__auto___10539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10508_10540__$1)){
var c__4550__auto___10541 = cljs.core.chunk_first.call(null,seq__10508_10540__$1);
var G__10542 = cljs.core.chunk_rest.call(null,seq__10508_10540__$1);
var G__10543 = c__4550__auto___10541;
var G__10544 = cljs.core.count.call(null,c__4550__auto___10541);
var G__10545 = (0);
seq__10508_10530 = G__10542;
chunk__10509_10531 = G__10543;
count__10510_10532 = G__10544;
i__10511_10533 = G__10545;
continue;
} else {
var test_10546 = cljs.core.first.call(null,seq__10508_10540__$1);
cljs.compiler.emitln.call(null,"case ",test_10546,":");


var G__10547 = cljs.core.next.call(null,seq__10508_10540__$1);
var G__10548 = null;
var G__10549 = (0);
var G__10550 = (0);
seq__10508_10530 = G__10547;
chunk__10509_10531 = G__10548;
count__10510_10532 = G__10549;
i__10511_10533 = G__10550;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10529);
} else {
cljs.compiler.emitln.call(null,then_10529);
}

cljs.compiler.emitln.call(null,"break;");


var G__10551 = seq__10484_10520;
var G__10552 = chunk__10485_10521;
var G__10553 = count__10486_10522;
var G__10554 = (i__10487_10523 + (1));
seq__10484_10520 = G__10551;
chunk__10485_10521 = G__10552;
count__10486_10522 = G__10553;
i__10487_10523 = G__10554;
continue;
} else {
var temp__5720__auto___10555 = cljs.core.seq.call(null,seq__10484_10520);
if(temp__5720__auto___10555){
var seq__10484_10556__$1 = temp__5720__auto___10555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10484_10556__$1)){
var c__4550__auto___10557 = cljs.core.chunk_first.call(null,seq__10484_10556__$1);
var G__10558 = cljs.core.chunk_rest.call(null,seq__10484_10556__$1);
var G__10559 = c__4550__auto___10557;
var G__10560 = cljs.core.count.call(null,c__4550__auto___10557);
var G__10561 = (0);
seq__10484_10520 = G__10558;
chunk__10485_10521 = G__10559;
count__10486_10522 = G__10560;
i__10487_10523 = G__10561;
continue;
} else {
var map__10512_10562 = cljs.core.first.call(null,seq__10484_10556__$1);
var map__10512_10563__$1 = (((((!((map__10512_10562 == null))))?(((((map__10512_10562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10512_10562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10512_10562):map__10512_10562);
var ts_10564 = cljs.core.get.call(null,map__10512_10563__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__10513_10565 = cljs.core.get.call(null,map__10512_10563__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__10513_10566__$1 = (((((!((map__10513_10565 == null))))?(((((map__10513_10565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10513_10565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10513_10565):map__10513_10565);
var then_10567 = cljs.core.get.call(null,map__10513_10566__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__10516_10568 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_10564));
var chunk__10517_10569 = null;
var count__10518_10570 = (0);
var i__10519_10571 = (0);
while(true){
if((i__10519_10571 < count__10518_10570)){
var test_10572 = cljs.core._nth.call(null,chunk__10517_10569,i__10519_10571);
cljs.compiler.emitln.call(null,"case ",test_10572,":");


var G__10573 = seq__10516_10568;
var G__10574 = chunk__10517_10569;
var G__10575 = count__10518_10570;
var G__10576 = (i__10519_10571 + (1));
seq__10516_10568 = G__10573;
chunk__10517_10569 = G__10574;
count__10518_10570 = G__10575;
i__10519_10571 = G__10576;
continue;
} else {
var temp__5720__auto___10577__$1 = cljs.core.seq.call(null,seq__10516_10568);
if(temp__5720__auto___10577__$1){
var seq__10516_10578__$1 = temp__5720__auto___10577__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10516_10578__$1)){
var c__4550__auto___10579 = cljs.core.chunk_first.call(null,seq__10516_10578__$1);
var G__10580 = cljs.core.chunk_rest.call(null,seq__10516_10578__$1);
var G__10581 = c__4550__auto___10579;
var G__10582 = cljs.core.count.call(null,c__4550__auto___10579);
var G__10583 = (0);
seq__10516_10568 = G__10580;
chunk__10517_10569 = G__10581;
count__10518_10570 = G__10582;
i__10519_10571 = G__10583;
continue;
} else {
var test_10584 = cljs.core.first.call(null,seq__10516_10578__$1);
cljs.compiler.emitln.call(null,"case ",test_10584,":");


var G__10585 = cljs.core.next.call(null,seq__10516_10578__$1);
var G__10586 = null;
var G__10587 = (0);
var G__10588 = (0);
seq__10516_10568 = G__10585;
chunk__10517_10569 = G__10586;
count__10518_10570 = G__10587;
i__10519_10571 = G__10588;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10567);
} else {
cljs.compiler.emitln.call(null,then_10567);
}

cljs.compiler.emitln.call(null,"break;");


var G__10589 = cljs.core.next.call(null,seq__10484_10556__$1);
var G__10590 = null;
var G__10591 = (0);
var G__10592 = (0);
seq__10484_10520 = G__10589;
chunk__10485_10521 = G__10590;
count__10486_10522 = G__10591;
i__10487_10523 = G__10592;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__10593){
var map__10594 = p__10593;
var map__10594__$1 = (((((!((map__10594 == null))))?(((((map__10594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10594):map__10594);
var throw$ = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__10594__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__10597 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__10597,(0),null);
var rstr = cljs.core.nth.call(null,vec__10597,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__10597,fstr,rstr,ret_t,axstr){
return (function (p1__10596_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__10596_SHARP_);
});})(idx,vec__10597,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__10600 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__10600,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__10600;
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
return (function (p1__10601_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__10601_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__10602 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__10603 = cljs.core.seq.call(null,vec__10602);
var first__10604 = cljs.core.first.call(null,seq__10603);
var seq__10603__$1 = cljs.core.next.call(null,seq__10603);
var p = first__10604;
var first__10604__$1 = cljs.core.first.call(null,seq__10603__$1);
var seq__10603__$2 = cljs.core.next.call(null,seq__10603__$1);
var ts = first__10604__$1;
var first__10604__$2 = cljs.core.first.call(null,seq__10603__$2);
var seq__10603__$3 = cljs.core.next.call(null,seq__10603__$2);
var n = first__10604__$2;
var xs = seq__10603__$3;
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
var vec__10605 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__10606 = cljs.core.seq.call(null,vec__10605);
var first__10607 = cljs.core.first.call(null,seq__10606);
var seq__10606__$1 = cljs.core.next.call(null,seq__10606);
var p = first__10607;
var first__10607__$1 = cljs.core.first.call(null,seq__10606__$1);
var seq__10606__$2 = cljs.core.next.call(null,seq__10606__$1);
var ts = first__10607__$1;
var xs = seq__10606__$2;
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
var G__10610 = arguments.length;
switch (G__10610) {
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
var vec__10618 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__10608_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__10608_SHARP_);
} else {
return p1__10608_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__10619 = cljs.core.seq.call(null,vec__10618);
var first__10620 = cljs.core.first.call(null,seq__10619);
var seq__10619__$1 = cljs.core.next.call(null,seq__10619);
var x = first__10620;
var ys = seq__10619__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__10621 = cljs.core.seq.call(null,ys);
var chunk__10622 = null;
var count__10623 = (0);
var i__10624 = (0);
while(true){
if((i__10624 < count__10623)){
var next_line = cljs.core._nth.call(null,chunk__10622,i__10624);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__10630 = seq__10621;
var G__10631 = chunk__10622;
var G__10632 = count__10623;
var G__10633 = (i__10624 + (1));
seq__10621 = G__10630;
chunk__10622 = G__10631;
count__10623 = G__10632;
i__10624 = G__10633;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10621);
if(temp__5720__auto__){
var seq__10621__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10621__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10621__$1);
var G__10634 = cljs.core.chunk_rest.call(null,seq__10621__$1);
var G__10635 = c__4550__auto__;
var G__10636 = cljs.core.count.call(null,c__4550__auto__);
var G__10637 = (0);
seq__10621 = G__10634;
chunk__10622 = G__10635;
count__10623 = G__10636;
i__10624 = G__10637;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__10621__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__10638 = cljs.core.next.call(null,seq__10621__$1);
var G__10639 = null;
var G__10640 = (0);
var G__10641 = (0);
seq__10621 = G__10638;
chunk__10622 = G__10639;
count__10623 = G__10640;
i__10624 = G__10641;
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

var seq__10625_10642 = cljs.core.seq.call(null,docs__$2);
var chunk__10626_10643 = null;
var count__10627_10644 = (0);
var i__10628_10645 = (0);
while(true){
if((i__10628_10645 < count__10627_10644)){
var e_10646 = cljs.core._nth.call(null,chunk__10626_10643,i__10628_10645);
if(cljs.core.truth_(e_10646)){
print_comment_lines.call(null,e_10646);
} else {
}


var G__10647 = seq__10625_10642;
var G__10648 = chunk__10626_10643;
var G__10649 = count__10627_10644;
var G__10650 = (i__10628_10645 + (1));
seq__10625_10642 = G__10647;
chunk__10626_10643 = G__10648;
count__10627_10644 = G__10649;
i__10628_10645 = G__10650;
continue;
} else {
var temp__5720__auto___10651 = cljs.core.seq.call(null,seq__10625_10642);
if(temp__5720__auto___10651){
var seq__10625_10652__$1 = temp__5720__auto___10651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10625_10652__$1)){
var c__4550__auto___10653 = cljs.core.chunk_first.call(null,seq__10625_10652__$1);
var G__10654 = cljs.core.chunk_rest.call(null,seq__10625_10652__$1);
var G__10655 = c__4550__auto___10653;
var G__10656 = cljs.core.count.call(null,c__4550__auto___10653);
var G__10657 = (0);
seq__10625_10642 = G__10654;
chunk__10626_10643 = G__10655;
count__10627_10644 = G__10656;
i__10628_10645 = G__10657;
continue;
} else {
var e_10658 = cljs.core.first.call(null,seq__10625_10652__$1);
if(cljs.core.truth_(e_10658)){
print_comment_lines.call(null,e_10658);
} else {
}


var G__10659 = cljs.core.next.call(null,seq__10625_10652__$1);
var G__10660 = null;
var G__10661 = (0);
var G__10662 = (0);
seq__10625_10642 = G__10659;
chunk__10626_10643 = G__10660;
count__10627_10644 = G__10661;
i__10628_10645 = G__10662;
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
return (function (p1__10664_SHARP_){
return goog.string.startsWith(p1__10664_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__10665){
var map__10666 = p__10665;
var map__10666__$1 = (((((!((map__10666 == null))))?(((((map__10666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10666):map__10666);
var doc = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__10666__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__10668){
var map__10669 = p__10668;
var map__10669__$1 = (((((!((map__10669 == null))))?(((((map__10669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10669):map__10669);
var name = cljs.core.get.call(null,map__10669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__10669__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__10669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__10671_10695 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__10672_10696 = null;
var count__10673_10697 = (0);
var i__10674_10698 = (0);
while(true){
if((i__10674_10698 < count__10673_10697)){
var vec__10681_10699 = cljs.core._nth.call(null,chunk__10672_10696,i__10674_10698);
var i_10700 = cljs.core.nth.call(null,vec__10681_10699,(0),null);
var param_10701 = cljs.core.nth.call(null,vec__10681_10699,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10701);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__10702 = seq__10671_10695;
var G__10703 = chunk__10672_10696;
var G__10704 = count__10673_10697;
var G__10705 = (i__10674_10698 + (1));
seq__10671_10695 = G__10702;
chunk__10672_10696 = G__10703;
count__10673_10697 = G__10704;
i__10674_10698 = G__10705;
continue;
} else {
var temp__5720__auto___10706 = cljs.core.seq.call(null,seq__10671_10695);
if(temp__5720__auto___10706){
var seq__10671_10707__$1 = temp__5720__auto___10706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10671_10707__$1)){
var c__4550__auto___10708 = cljs.core.chunk_first.call(null,seq__10671_10707__$1);
var G__10709 = cljs.core.chunk_rest.call(null,seq__10671_10707__$1);
var G__10710 = c__4550__auto___10708;
var G__10711 = cljs.core.count.call(null,c__4550__auto___10708);
var G__10712 = (0);
seq__10671_10695 = G__10709;
chunk__10672_10696 = G__10710;
count__10673_10697 = G__10711;
i__10674_10698 = G__10712;
continue;
} else {
var vec__10684_10713 = cljs.core.first.call(null,seq__10671_10707__$1);
var i_10714 = cljs.core.nth.call(null,vec__10684_10713,(0),null);
var param_10715 = cljs.core.nth.call(null,vec__10684_10713,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10715);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__10716 = cljs.core.next.call(null,seq__10671_10707__$1);
var G__10717 = null;
var G__10718 = (0);
var G__10719 = (0);
seq__10671_10695 = G__10716;
chunk__10672_10696 = G__10717;
count__10673_10697 = G__10718;
i__10674_10698 = G__10719;
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

var seq__10687_10720 = cljs.core.seq.call(null,params);
var chunk__10688_10721 = null;
var count__10689_10722 = (0);
var i__10690_10723 = (0);
while(true){
if((i__10690_10723 < count__10689_10722)){
var param_10724 = cljs.core._nth.call(null,chunk__10688_10721,i__10690_10723);
cljs.compiler.emit.call(null,param_10724);

if(cljs.core._EQ_.call(null,param_10724,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10725 = seq__10687_10720;
var G__10726 = chunk__10688_10721;
var G__10727 = count__10689_10722;
var G__10728 = (i__10690_10723 + (1));
seq__10687_10720 = G__10725;
chunk__10688_10721 = G__10726;
count__10689_10722 = G__10727;
i__10690_10723 = G__10728;
continue;
} else {
var temp__5720__auto___10729 = cljs.core.seq.call(null,seq__10687_10720);
if(temp__5720__auto___10729){
var seq__10687_10730__$1 = temp__5720__auto___10729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10687_10730__$1)){
var c__4550__auto___10731 = cljs.core.chunk_first.call(null,seq__10687_10730__$1);
var G__10732 = cljs.core.chunk_rest.call(null,seq__10687_10730__$1);
var G__10733 = c__4550__auto___10731;
var G__10734 = cljs.core.count.call(null,c__4550__auto___10731);
var G__10735 = (0);
seq__10687_10720 = G__10732;
chunk__10688_10721 = G__10733;
count__10689_10722 = G__10734;
i__10690_10723 = G__10735;
continue;
} else {
var param_10736 = cljs.core.first.call(null,seq__10687_10730__$1);
cljs.compiler.emit.call(null,param_10736);

if(cljs.core._EQ_.call(null,param_10736,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10737 = cljs.core.next.call(null,seq__10687_10730__$1);
var G__10738 = null;
var G__10739 = (0);
var G__10740 = (0);
seq__10687_10720 = G__10737;
chunk__10688_10721 = G__10738;
count__10689_10722 = G__10739;
i__10690_10723 = G__10740;
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

var seq__10691_10741 = cljs.core.seq.call(null,params);
var chunk__10692_10742 = null;
var count__10693_10743 = (0);
var i__10694_10744 = (0);
while(true){
if((i__10694_10744 < count__10693_10743)){
var param_10745 = cljs.core._nth.call(null,chunk__10692_10742,i__10694_10744);
cljs.compiler.emit.call(null,param_10745);

if(cljs.core._EQ_.call(null,param_10745,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10746 = seq__10691_10741;
var G__10747 = chunk__10692_10742;
var G__10748 = count__10693_10743;
var G__10749 = (i__10694_10744 + (1));
seq__10691_10741 = G__10746;
chunk__10692_10742 = G__10747;
count__10693_10743 = G__10748;
i__10694_10744 = G__10749;
continue;
} else {
var temp__5720__auto___10750 = cljs.core.seq.call(null,seq__10691_10741);
if(temp__5720__auto___10750){
var seq__10691_10751__$1 = temp__5720__auto___10750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10691_10751__$1)){
var c__4550__auto___10752 = cljs.core.chunk_first.call(null,seq__10691_10751__$1);
var G__10753 = cljs.core.chunk_rest.call(null,seq__10691_10751__$1);
var G__10754 = c__4550__auto___10752;
var G__10755 = cljs.core.count.call(null,c__4550__auto___10752);
var G__10756 = (0);
seq__10691_10741 = G__10753;
chunk__10692_10742 = G__10754;
count__10693_10743 = G__10755;
i__10694_10744 = G__10756;
continue;
} else {
var param_10757 = cljs.core.first.call(null,seq__10691_10751__$1);
cljs.compiler.emit.call(null,param_10757);

if(cljs.core._EQ_.call(null,param_10757,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10758 = cljs.core.next.call(null,seq__10691_10751__$1);
var G__10759 = null;
var G__10760 = (0);
var G__10761 = (0);
seq__10691_10741 = G__10758;
chunk__10692_10742 = G__10759;
count__10693_10743 = G__10760;
i__10694_10744 = G__10761;
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
var seq__10762 = cljs.core.seq.call(null,params);
var chunk__10763 = null;
var count__10764 = (0);
var i__10765 = (0);
while(true){
if((i__10765 < count__10764)){
var param = cljs.core._nth.call(null,chunk__10763,i__10765);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10766 = seq__10762;
var G__10767 = chunk__10763;
var G__10768 = count__10764;
var G__10769 = (i__10765 + (1));
seq__10762 = G__10766;
chunk__10763 = G__10767;
count__10764 = G__10768;
i__10765 = G__10769;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10762);
if(temp__5720__auto__){
var seq__10762__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10762__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10762__$1);
var G__10770 = cljs.core.chunk_rest.call(null,seq__10762__$1);
var G__10771 = c__4550__auto__;
var G__10772 = cljs.core.count.call(null,c__4550__auto__);
var G__10773 = (0);
seq__10762 = G__10770;
chunk__10763 = G__10771;
count__10764 = G__10772;
i__10765 = G__10773;
continue;
} else {
var param = cljs.core.first.call(null,seq__10762__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10774 = cljs.core.next.call(null,seq__10762__$1);
var G__10775 = null;
var G__10776 = (0);
var G__10777 = (0);
seq__10762 = G__10774;
chunk__10763 = G__10775;
count__10764 = G__10776;
i__10765 = G__10777;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__10778){
var map__10779 = p__10778;
var map__10779__$1 = (((((!((map__10779 == null))))?(((((map__10779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10779):map__10779);
var expr = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__10781){
var map__10782 = p__10781;
var map__10782__$1 = (((((!((map__10782 == null))))?(((((map__10782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10782):map__10782);
var f = map__10782__$1;
var expr = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_10792__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10793 = cljs.compiler.munge.call(null,name_10792__$1);
var delegate_name_10794 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_10793),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_10794," = function (");

var seq__10784_10795 = cljs.core.seq.call(null,params);
var chunk__10785_10796 = null;
var count__10786_10797 = (0);
var i__10787_10798 = (0);
while(true){
if((i__10787_10798 < count__10786_10797)){
var param_10799 = cljs.core._nth.call(null,chunk__10785_10796,i__10787_10798);
cljs.compiler.emit.call(null,param_10799);

if(cljs.core._EQ_.call(null,param_10799,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10800 = seq__10784_10795;
var G__10801 = chunk__10785_10796;
var G__10802 = count__10786_10797;
var G__10803 = (i__10787_10798 + (1));
seq__10784_10795 = G__10800;
chunk__10785_10796 = G__10801;
count__10786_10797 = G__10802;
i__10787_10798 = G__10803;
continue;
} else {
var temp__5720__auto___10804 = cljs.core.seq.call(null,seq__10784_10795);
if(temp__5720__auto___10804){
var seq__10784_10805__$1 = temp__5720__auto___10804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10784_10805__$1)){
var c__4550__auto___10806 = cljs.core.chunk_first.call(null,seq__10784_10805__$1);
var G__10807 = cljs.core.chunk_rest.call(null,seq__10784_10805__$1);
var G__10808 = c__4550__auto___10806;
var G__10809 = cljs.core.count.call(null,c__4550__auto___10806);
var G__10810 = (0);
seq__10784_10795 = G__10807;
chunk__10785_10796 = G__10808;
count__10786_10797 = G__10809;
i__10787_10798 = G__10810;
continue;
} else {
var param_10811 = cljs.core.first.call(null,seq__10784_10805__$1);
cljs.compiler.emit.call(null,param_10811);

if(cljs.core._EQ_.call(null,param_10811,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10812 = cljs.core.next.call(null,seq__10784_10805__$1);
var G__10813 = null;
var G__10814 = (0);
var G__10815 = (0);
seq__10784_10795 = G__10812;
chunk__10785_10796 = G__10813;
count__10786_10797 = G__10814;
i__10787_10798 = G__10815;
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

cljs.compiler.emitln.call(null,"var ",mname_10793," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_10816 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_10816,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_10794,".call(this,");

var seq__10788_10817 = cljs.core.seq.call(null,params);
var chunk__10789_10818 = null;
var count__10790_10819 = (0);
var i__10791_10820 = (0);
while(true){
if((i__10791_10820 < count__10790_10819)){
var param_10821 = cljs.core._nth.call(null,chunk__10789_10818,i__10791_10820);
cljs.compiler.emit.call(null,param_10821);

if(cljs.core._EQ_.call(null,param_10821,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10822 = seq__10788_10817;
var G__10823 = chunk__10789_10818;
var G__10824 = count__10790_10819;
var G__10825 = (i__10791_10820 + (1));
seq__10788_10817 = G__10822;
chunk__10789_10818 = G__10823;
count__10790_10819 = G__10824;
i__10791_10820 = G__10825;
continue;
} else {
var temp__5720__auto___10826 = cljs.core.seq.call(null,seq__10788_10817);
if(temp__5720__auto___10826){
var seq__10788_10827__$1 = temp__5720__auto___10826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10788_10827__$1)){
var c__4550__auto___10828 = cljs.core.chunk_first.call(null,seq__10788_10827__$1);
var G__10829 = cljs.core.chunk_rest.call(null,seq__10788_10827__$1);
var G__10830 = c__4550__auto___10828;
var G__10831 = cljs.core.count.call(null,c__4550__auto___10828);
var G__10832 = (0);
seq__10788_10817 = G__10829;
chunk__10789_10818 = G__10830;
count__10790_10819 = G__10831;
i__10791_10820 = G__10832;
continue;
} else {
var param_10833 = cljs.core.first.call(null,seq__10788_10827__$1);
cljs.compiler.emit.call(null,param_10833);

if(cljs.core._EQ_.call(null,param_10833,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__10834 = cljs.core.next.call(null,seq__10788_10827__$1);
var G__10835 = null;
var G__10836 = (0);
var G__10837 = (0);
seq__10788_10817 = G__10834;
chunk__10789_10818 = G__10835;
count__10790_10819 = G__10836;
i__10791_10820 = G__10837;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_10793,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_10793,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_10792__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_10793,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_10794,";");

cljs.compiler.emitln.call(null,"return ",mname_10793,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__10841){
var map__10842 = p__10841;
var map__10842__$1 = (((((!((map__10842 == null))))?(((((map__10842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10842):map__10842);
var variadic = cljs.core.get.call(null,map__10842__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__10842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__10842__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__10842__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__10842__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__10842__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__10842__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__10838_SHARP_){
var and__4120__auto__ = p1__10838_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__10838_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_10895__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10896 = cljs.compiler.munge.call(null,name_10895__$1);
var maxparams_10897 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_10898 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_10895__$1,mname_10896,maxparams_10897,loop_locals,map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_10896),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_10895__$1,mname_10896,maxparams_10897,loop_locals,map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_10899 = cljs.core.sort_by.call(null,((function (name_10895__$1,mname_10896,maxparams_10897,mmap_10898,loop_locals,map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__10839_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__10839_SHARP_)));
});})(name_10895__$1,mname_10896,maxparams_10897,mmap_10898,loop_locals,map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_10898));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_10896," = null;");

var seq__10844_10900 = cljs.core.seq.call(null,ms_10899);
var chunk__10845_10901 = null;
var count__10846_10902 = (0);
var i__10847_10903 = (0);
while(true){
if((i__10847_10903 < count__10846_10902)){
var vec__10854_10904 = cljs.core._nth.call(null,chunk__10845_10901,i__10847_10903);
var n_10905 = cljs.core.nth.call(null,vec__10854_10904,(0),null);
var meth_10906 = cljs.core.nth.call(null,vec__10854_10904,(1),null);
cljs.compiler.emits.call(null,"var ",n_10905," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10906))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10906);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10906);
}

cljs.compiler.emitln.call(null,";");


var G__10907 = seq__10844_10900;
var G__10908 = chunk__10845_10901;
var G__10909 = count__10846_10902;
var G__10910 = (i__10847_10903 + (1));
seq__10844_10900 = G__10907;
chunk__10845_10901 = G__10908;
count__10846_10902 = G__10909;
i__10847_10903 = G__10910;
continue;
} else {
var temp__5720__auto___10911 = cljs.core.seq.call(null,seq__10844_10900);
if(temp__5720__auto___10911){
var seq__10844_10912__$1 = temp__5720__auto___10911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10844_10912__$1)){
var c__4550__auto___10913 = cljs.core.chunk_first.call(null,seq__10844_10912__$1);
var G__10914 = cljs.core.chunk_rest.call(null,seq__10844_10912__$1);
var G__10915 = c__4550__auto___10913;
var G__10916 = cljs.core.count.call(null,c__4550__auto___10913);
var G__10917 = (0);
seq__10844_10900 = G__10914;
chunk__10845_10901 = G__10915;
count__10846_10902 = G__10916;
i__10847_10903 = G__10917;
continue;
} else {
var vec__10857_10918 = cljs.core.first.call(null,seq__10844_10912__$1);
var n_10919 = cljs.core.nth.call(null,vec__10857_10918,(0),null);
var meth_10920 = cljs.core.nth.call(null,vec__10857_10918,(1),null);
cljs.compiler.emits.call(null,"var ",n_10919," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10920))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10920);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10920);
}

cljs.compiler.emitln.call(null,";");


var G__10921 = cljs.core.next.call(null,seq__10844_10912__$1);
var G__10922 = null;
var G__10923 = (0);
var G__10924 = (0);
seq__10844_10900 = G__10921;
chunk__10845_10901 = G__10922;
count__10846_10902 = G__10923;
i__10847_10903 = G__10924;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_10896," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_10897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_10897)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_10897));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__10860_10925 = cljs.core.seq.call(null,ms_10899);
var chunk__10861_10926 = null;
var count__10862_10927 = (0);
var i__10863_10928 = (0);
while(true){
if((i__10863_10928 < count__10862_10927)){
var vec__10870_10929 = cljs.core._nth.call(null,chunk__10861_10926,i__10863_10928);
var n_10930 = cljs.core.nth.call(null,vec__10870_10929,(0),null);
var meth_10931 = cljs.core.nth.call(null,vec__10870_10929,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10931))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10932 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10932," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10933 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10932," = new cljs.core.IndexedSeq(",a_10933,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10930,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10897)),(((cljs.core.count.call(null,maxparams_10897) > (1)))?", ":null),restarg_10932,");");
} else {
var pcnt_10934 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10931));
cljs.compiler.emitln.call(null,"case ",pcnt_10934,":");

cljs.compiler.emitln.call(null,"return ",n_10930,".call(this",(((pcnt_10934 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10934,maxparams_10897)),null,(1),null)),(2),null))),");");
}


var G__10935 = seq__10860_10925;
var G__10936 = chunk__10861_10926;
var G__10937 = count__10862_10927;
var G__10938 = (i__10863_10928 + (1));
seq__10860_10925 = G__10935;
chunk__10861_10926 = G__10936;
count__10862_10927 = G__10937;
i__10863_10928 = G__10938;
continue;
} else {
var temp__5720__auto___10939 = cljs.core.seq.call(null,seq__10860_10925);
if(temp__5720__auto___10939){
var seq__10860_10940__$1 = temp__5720__auto___10939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10860_10940__$1)){
var c__4550__auto___10941 = cljs.core.chunk_first.call(null,seq__10860_10940__$1);
var G__10942 = cljs.core.chunk_rest.call(null,seq__10860_10940__$1);
var G__10943 = c__4550__auto___10941;
var G__10944 = cljs.core.count.call(null,c__4550__auto___10941);
var G__10945 = (0);
seq__10860_10925 = G__10942;
chunk__10861_10926 = G__10943;
count__10862_10927 = G__10944;
i__10863_10928 = G__10945;
continue;
} else {
var vec__10873_10946 = cljs.core.first.call(null,seq__10860_10940__$1);
var n_10947 = cljs.core.nth.call(null,vec__10873_10946,(0),null);
var meth_10948 = cljs.core.nth.call(null,vec__10873_10946,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10948))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10949 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10949," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10950 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10949," = new cljs.core.IndexedSeq(",a_10950,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10947,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10897)),(((cljs.core.count.call(null,maxparams_10897) > (1)))?", ":null),restarg_10949,");");
} else {
var pcnt_10951 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10948));
cljs.compiler.emitln.call(null,"case ",pcnt_10951,":");

cljs.compiler.emitln.call(null,"return ",n_10947,".call(this",(((pcnt_10951 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10951,maxparams_10897)),null,(1),null)),(2),null))),");");
}


var G__10952 = cljs.core.next.call(null,seq__10860_10940__$1);
var G__10953 = null;
var G__10954 = (0);
var G__10955 = (0);
seq__10860_10925 = G__10952;
chunk__10861_10926 = G__10953;
count__10862_10927 = G__10954;
i__10863_10928 = G__10955;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_10956 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_10899)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_10956,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_10896,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_10896,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_10895__$1,mname_10896,maxparams_10897,mmap_10898,ms_10899,loop_locals,map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__10840_SHARP_){
var vec__10876 = p1__10840_SHARP_;
var n = cljs.core.nth.call(null,vec__10876,(0),null);
var m = cljs.core.nth.call(null,vec__10876,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_10895__$1,mname_10896,maxparams_10897,mmap_10898,ms_10899,loop_locals,map__10842,map__10842__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_10899),".cljs$lang$applyTo;");
} else {
}

var seq__10879_10957 = cljs.core.seq.call(null,ms_10899);
var chunk__10880_10958 = null;
var count__10881_10959 = (0);
var i__10882_10960 = (0);
while(true){
if((i__10882_10960 < count__10881_10959)){
var vec__10889_10961 = cljs.core._nth.call(null,chunk__10880_10958,i__10882_10960);
var n_10962 = cljs.core.nth.call(null,vec__10889_10961,(0),null);
var meth_10963 = cljs.core.nth.call(null,vec__10889_10961,(1),null);
var c_10964 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10963));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10963))){
cljs.compiler.emitln.call(null,mname_10896,".cljs$core$IFn$_invoke$arity$variadic = ",n_10962,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10896,".cljs$core$IFn$_invoke$arity$",c_10964," = ",n_10962,";");
}


var G__10965 = seq__10879_10957;
var G__10966 = chunk__10880_10958;
var G__10967 = count__10881_10959;
var G__10968 = (i__10882_10960 + (1));
seq__10879_10957 = G__10965;
chunk__10880_10958 = G__10966;
count__10881_10959 = G__10967;
i__10882_10960 = G__10968;
continue;
} else {
var temp__5720__auto___10969 = cljs.core.seq.call(null,seq__10879_10957);
if(temp__5720__auto___10969){
var seq__10879_10970__$1 = temp__5720__auto___10969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10879_10970__$1)){
var c__4550__auto___10971 = cljs.core.chunk_first.call(null,seq__10879_10970__$1);
var G__10972 = cljs.core.chunk_rest.call(null,seq__10879_10970__$1);
var G__10973 = c__4550__auto___10971;
var G__10974 = cljs.core.count.call(null,c__4550__auto___10971);
var G__10975 = (0);
seq__10879_10957 = G__10972;
chunk__10880_10958 = G__10973;
count__10881_10959 = G__10974;
i__10882_10960 = G__10975;
continue;
} else {
var vec__10892_10976 = cljs.core.first.call(null,seq__10879_10970__$1);
var n_10977 = cljs.core.nth.call(null,vec__10892_10976,(0),null);
var meth_10978 = cljs.core.nth.call(null,vec__10892_10976,(1),null);
var c_10979 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10978));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10978))){
cljs.compiler.emitln.call(null,mname_10896,".cljs$core$IFn$_invoke$arity$variadic = ",n_10977,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10896,".cljs$core$IFn$_invoke$arity$",c_10979," = ",n_10977,";");
}


var G__10980 = cljs.core.next.call(null,seq__10879_10970__$1);
var G__10981 = null;
var G__10982 = (0);
var G__10983 = (0);
seq__10879_10957 = G__10980;
chunk__10880_10958 = G__10981;
count__10881_10959 = G__10982;
i__10882_10960 = G__10983;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_10896,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__10984){
var map__10985 = p__10984;
var map__10985__$1 = (((((!((map__10985 == null))))?(((((map__10985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10985):map__10985);
var statements = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__10987_10991 = cljs.core.seq.call(null,statements);
var chunk__10988_10992 = null;
var count__10989_10993 = (0);
var i__10990_10994 = (0);
while(true){
if((i__10990_10994 < count__10989_10993)){
var s_10995 = cljs.core._nth.call(null,chunk__10988_10992,i__10990_10994);
cljs.compiler.emitln.call(null,s_10995);


var G__10996 = seq__10987_10991;
var G__10997 = chunk__10988_10992;
var G__10998 = count__10989_10993;
var G__10999 = (i__10990_10994 + (1));
seq__10987_10991 = G__10996;
chunk__10988_10992 = G__10997;
count__10989_10993 = G__10998;
i__10990_10994 = G__10999;
continue;
} else {
var temp__5720__auto___11000 = cljs.core.seq.call(null,seq__10987_10991);
if(temp__5720__auto___11000){
var seq__10987_11001__$1 = temp__5720__auto___11000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10987_11001__$1)){
var c__4550__auto___11002 = cljs.core.chunk_first.call(null,seq__10987_11001__$1);
var G__11003 = cljs.core.chunk_rest.call(null,seq__10987_11001__$1);
var G__11004 = c__4550__auto___11002;
var G__11005 = cljs.core.count.call(null,c__4550__auto___11002);
var G__11006 = (0);
seq__10987_10991 = G__11003;
chunk__10988_10992 = G__11004;
count__10989_10993 = G__11005;
i__10990_10994 = G__11006;
continue;
} else {
var s_11007 = cljs.core.first.call(null,seq__10987_11001__$1);
cljs.compiler.emitln.call(null,s_11007);


var G__11008 = cljs.core.next.call(null,seq__10987_11001__$1);
var G__11009 = null;
var G__11010 = (0);
var G__11011 = (0);
seq__10987_10991 = G__11008;
chunk__10988_10992 = G__11009;
count__10989_10993 = G__11010;
i__10990_10994 = G__11011;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__11012){
var map__11013 = p__11012;
var map__11013__$1 = (((((!((map__11013 == null))))?(((((map__11013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11013):map__11013);
var try$ = cljs.core.get.call(null,map__11013__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__11013__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__11013__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__11013__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__11013__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__11015,is_loop){
var map__11016 = p__11015;
var map__11016__$1 = (((((!((map__11016 == null))))?(((((map__11016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11016):map__11016);
var expr = cljs.core.get.call(null,map__11016__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__11016__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__11016__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__11018_11032 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__11019_11033 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__11018_11032,context,map__11016,map__11016__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__11018_11032,context,map__11016,map__11016__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__11019_11033;

try{var seq__11020_11034 = cljs.core.seq.call(null,bindings);
var chunk__11021_11035 = null;
var count__11022_11036 = (0);
var i__11023_11037 = (0);
while(true){
if((i__11023_11037 < count__11022_11036)){
var map__11028_11038 = cljs.core._nth.call(null,chunk__11021_11035,i__11023_11037);
var map__11028_11039__$1 = (((((!((map__11028_11038 == null))))?(((((map__11028_11038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11028_11038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11028_11038):map__11028_11038);
var binding_11040 = map__11028_11039__$1;
var init_11041 = cljs.core.get.call(null,map__11028_11039__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_11040);

cljs.compiler.emitln.call(null," = ",init_11041,";");


var G__11042 = seq__11020_11034;
var G__11043 = chunk__11021_11035;
var G__11044 = count__11022_11036;
var G__11045 = (i__11023_11037 + (1));
seq__11020_11034 = G__11042;
chunk__11021_11035 = G__11043;
count__11022_11036 = G__11044;
i__11023_11037 = G__11045;
continue;
} else {
var temp__5720__auto___11046 = cljs.core.seq.call(null,seq__11020_11034);
if(temp__5720__auto___11046){
var seq__11020_11047__$1 = temp__5720__auto___11046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11020_11047__$1)){
var c__4550__auto___11048 = cljs.core.chunk_first.call(null,seq__11020_11047__$1);
var G__11049 = cljs.core.chunk_rest.call(null,seq__11020_11047__$1);
var G__11050 = c__4550__auto___11048;
var G__11051 = cljs.core.count.call(null,c__4550__auto___11048);
var G__11052 = (0);
seq__11020_11034 = G__11049;
chunk__11021_11035 = G__11050;
count__11022_11036 = G__11051;
i__11023_11037 = G__11052;
continue;
} else {
var map__11030_11053 = cljs.core.first.call(null,seq__11020_11047__$1);
var map__11030_11054__$1 = (((((!((map__11030_11053 == null))))?(((((map__11030_11053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11030_11053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11030_11053):map__11030_11053);
var binding_11055 = map__11030_11054__$1;
var init_11056 = cljs.core.get.call(null,map__11030_11054__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_11055);

cljs.compiler.emitln.call(null," = ",init_11056,";");


var G__11057 = cljs.core.next.call(null,seq__11020_11047__$1);
var G__11058 = null;
var G__11059 = (0);
var G__11060 = (0);
seq__11020_11034 = G__11057;
chunk__11021_11035 = G__11058;
count__11022_11036 = G__11059;
i__11023_11037 = G__11060;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__11018_11032;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__11061){
var map__11062 = p__11061;
var map__11062__$1 = (((((!((map__11062 == null))))?(((((map__11062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11062):map__11062);
var frame = cljs.core.get.call(null,map__11062__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__11062__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__11062__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___11064 = cljs.core.count.call(null,exprs);
var i_11065 = (0);
while(true){
if((i_11065 < n__4607__auto___11064)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_11065)," = ",exprs.call(null,i_11065),";");

var G__11066 = (i_11065 + (1));
i_11065 = G__11066;
continue;
} else {
}
break;
}

var n__4607__auto___11067 = cljs.core.count.call(null,exprs);
var i_11068 = (0);
while(true){
if((i_11068 < n__4607__auto___11067)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_11068))," = ",temps.call(null,i_11068),";");

var G__11069 = (i_11068 + (1));
i_11068 = G__11069;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__11070){
var map__11071 = p__11070;
var map__11071__$1 = (((((!((map__11071 == null))))?(((((map__11071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11071):map__11071);
var expr = cljs.core.get.call(null,map__11071__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__11071__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__11071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__11073_11085 = cljs.core.seq.call(null,bindings);
var chunk__11074_11086 = null;
var count__11075_11087 = (0);
var i__11076_11088 = (0);
while(true){
if((i__11076_11088 < count__11075_11087)){
var map__11081_11089 = cljs.core._nth.call(null,chunk__11074_11086,i__11076_11088);
var map__11081_11090__$1 = (((((!((map__11081_11089 == null))))?(((((map__11081_11089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11081_11089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11081_11089):map__11081_11089);
var binding_11091 = map__11081_11090__$1;
var init_11092 = cljs.core.get.call(null,map__11081_11090__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_11091)," = ",init_11092,";");


var G__11093 = seq__11073_11085;
var G__11094 = chunk__11074_11086;
var G__11095 = count__11075_11087;
var G__11096 = (i__11076_11088 + (1));
seq__11073_11085 = G__11093;
chunk__11074_11086 = G__11094;
count__11075_11087 = G__11095;
i__11076_11088 = G__11096;
continue;
} else {
var temp__5720__auto___11097 = cljs.core.seq.call(null,seq__11073_11085);
if(temp__5720__auto___11097){
var seq__11073_11098__$1 = temp__5720__auto___11097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11073_11098__$1)){
var c__4550__auto___11099 = cljs.core.chunk_first.call(null,seq__11073_11098__$1);
var G__11100 = cljs.core.chunk_rest.call(null,seq__11073_11098__$1);
var G__11101 = c__4550__auto___11099;
var G__11102 = cljs.core.count.call(null,c__4550__auto___11099);
var G__11103 = (0);
seq__11073_11085 = G__11100;
chunk__11074_11086 = G__11101;
count__11075_11087 = G__11102;
i__11076_11088 = G__11103;
continue;
} else {
var map__11083_11104 = cljs.core.first.call(null,seq__11073_11098__$1);
var map__11083_11105__$1 = (((((!((map__11083_11104 == null))))?(((((map__11083_11104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11083_11104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11083_11104):map__11083_11104);
var binding_11106 = map__11083_11105__$1;
var init_11107 = cljs.core.get.call(null,map__11083_11105__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_11106)," = ",init_11107,";");


var G__11108 = cljs.core.next.call(null,seq__11073_11098__$1);
var G__11109 = null;
var G__11110 = (0);
var G__11111 = (0);
seq__11073_11085 = G__11108;
chunk__11074_11086 = G__11109;
count__11075_11087 = G__11110;
i__11076_11088 = G__11111;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__11114){
var map__11115 = p__11114;
var map__11115__$1 = (((((!((map__11115 == null))))?(((((map__11115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11115):map__11115);
var expr = map__11115__$1;
var f = cljs.core.get.call(null,map__11115__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__11115__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__11115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__11117 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env){
return (function (p1__11112_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__11112_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env){
return (function (p1__11113_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__11113_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__11115,map__11115__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__11117,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__11117,(1),null);
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_11120 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_11120,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_11121 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_11121,args)),(((mfa_11121 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_11121,args)),"], 0))");
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
var fprop_11122 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_11122," ? ",f__$1,fprop_11122,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_11122," ? ",f__$1,fprop_11122,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__11123){
var map__11124 = p__11123;
var map__11124__$1 = (((((!((map__11124 == null))))?(((((map__11124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11124):map__11124);
var ctor = cljs.core.get.call(null,map__11124__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__11124__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__11124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__11126){
var map__11127 = p__11126;
var map__11127__$1 = (((((!((map__11127 == null))))?(((((map__11127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11127):map__11127);
var target = cljs.core.get.call(null,map__11127__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__11127__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__11127__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
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
var map__11129 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11129__$1 = (((((!((map__11129 == null))))?(((((map__11129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11129):map__11129);
var options = cljs.core.get.call(null,map__11129__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__11129__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__11130 = options;
var map__11130__$1 = (((((!((map__11130 == null))))?(((((map__11130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11130):map__11130);
var target = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__11131 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__11136 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__11136__$1 = (((((!((map__11136 == null))))?(((((map__11136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11136):map__11136);
var node_libs = cljs.core.get.call(null,map__11136__$1,true);
var libs_to_load = cljs.core.get.call(null,map__11136__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__11131,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__11131,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__11138_11158 = cljs.core.seq.call(null,libs_to_load);
var chunk__11139_11159 = null;
var count__11140_11160 = (0);
var i__11141_11161 = (0);
while(true){
if((i__11141_11161 < count__11140_11160)){
var lib_11162 = cljs.core._nth.call(null,chunk__11139_11159,i__11141_11161);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_11162)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11162),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11162),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11162),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11162),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_11162,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11162),"');");
}

}
}
}


var G__11163 = seq__11138_11158;
var G__11164 = chunk__11139_11159;
var G__11165 = count__11140_11160;
var G__11166 = (i__11141_11161 + (1));
seq__11138_11158 = G__11163;
chunk__11139_11159 = G__11164;
count__11140_11160 = G__11165;
i__11141_11161 = G__11166;
continue;
} else {
var temp__5720__auto___11167 = cljs.core.seq.call(null,seq__11138_11158);
if(temp__5720__auto___11167){
var seq__11138_11168__$1 = temp__5720__auto___11167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11138_11168__$1)){
var c__4550__auto___11169 = cljs.core.chunk_first.call(null,seq__11138_11168__$1);
var G__11170 = cljs.core.chunk_rest.call(null,seq__11138_11168__$1);
var G__11171 = c__4550__auto___11169;
var G__11172 = cljs.core.count.call(null,c__4550__auto___11169);
var G__11173 = (0);
seq__11138_11158 = G__11170;
chunk__11139_11159 = G__11171;
count__11140_11160 = G__11172;
i__11141_11161 = G__11173;
continue;
} else {
var lib_11174 = cljs.core.first.call(null,seq__11138_11168__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_11174)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11174),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11174),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11174),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11174),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_11174,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11174),"');");
}

}
}
}


var G__11175 = cljs.core.next.call(null,seq__11138_11168__$1);
var G__11176 = null;
var G__11177 = (0);
var G__11178 = (0);
seq__11138_11158 = G__11175;
chunk__11139_11159 = G__11176;
count__11140_11160 = G__11177;
i__11141_11161 = G__11178;
continue;
}
} else {
}
}
break;
}

var seq__11142_11179 = cljs.core.seq.call(null,node_libs);
var chunk__11143_11180 = null;
var count__11144_11181 = (0);
var i__11145_11182 = (0);
while(true){
if((i__11145_11182 < count__11144_11181)){
var lib_11183 = cljs.core._nth.call(null,chunk__11143_11180,i__11145_11182);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_11183)," = require('",lib_11183,"');");


var G__11184 = seq__11142_11179;
var G__11185 = chunk__11143_11180;
var G__11186 = count__11144_11181;
var G__11187 = (i__11145_11182 + (1));
seq__11142_11179 = G__11184;
chunk__11143_11180 = G__11185;
count__11144_11181 = G__11186;
i__11145_11182 = G__11187;
continue;
} else {
var temp__5720__auto___11188 = cljs.core.seq.call(null,seq__11142_11179);
if(temp__5720__auto___11188){
var seq__11142_11189__$1 = temp__5720__auto___11188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11142_11189__$1)){
var c__4550__auto___11190 = cljs.core.chunk_first.call(null,seq__11142_11189__$1);
var G__11191 = cljs.core.chunk_rest.call(null,seq__11142_11189__$1);
var G__11192 = c__4550__auto___11190;
var G__11193 = cljs.core.count.call(null,c__4550__auto___11190);
var G__11194 = (0);
seq__11142_11179 = G__11191;
chunk__11143_11180 = G__11192;
count__11144_11181 = G__11193;
i__11145_11182 = G__11194;
continue;
} else {
var lib_11195 = cljs.core.first.call(null,seq__11142_11189__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_11195)," = require('",lib_11195,"');");


var G__11196 = cljs.core.next.call(null,seq__11142_11189__$1);
var G__11197 = null;
var G__11198 = (0);
var G__11199 = (0);
seq__11142_11179 = G__11196;
chunk__11143_11180 = G__11197;
count__11144_11181 = G__11198;
i__11145_11182 = G__11199;
continue;
}
} else {
}
}
break;
}

var seq__11146_11200 = cljs.core.seq.call(null,global_exports_libs);
var chunk__11147_11201 = null;
var count__11148_11202 = (0);
var i__11149_11203 = (0);
while(true){
if((i__11149_11203 < count__11148_11202)){
var lib_11204 = cljs.core._nth.call(null,chunk__11147_11201,i__11149_11203);
var map__11154_11205 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_11204));
var map__11154_11206__$1 = (((((!((map__11154_11205 == null))))?(((((map__11154_11205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11154_11205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11154_11205):map__11154_11205);
var global_exports_11207 = cljs.core.get.call(null,map__11154_11206__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_11207,lib_11204);


var G__11208 = seq__11146_11200;
var G__11209 = chunk__11147_11201;
var G__11210 = count__11148_11202;
var G__11211 = (i__11149_11203 + (1));
seq__11146_11200 = G__11208;
chunk__11147_11201 = G__11209;
count__11148_11202 = G__11210;
i__11149_11203 = G__11211;
continue;
} else {
var temp__5720__auto___11212 = cljs.core.seq.call(null,seq__11146_11200);
if(temp__5720__auto___11212){
var seq__11146_11213__$1 = temp__5720__auto___11212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11146_11213__$1)){
var c__4550__auto___11214 = cljs.core.chunk_first.call(null,seq__11146_11213__$1);
var G__11215 = cljs.core.chunk_rest.call(null,seq__11146_11213__$1);
var G__11216 = c__4550__auto___11214;
var G__11217 = cljs.core.count.call(null,c__4550__auto___11214);
var G__11218 = (0);
seq__11146_11200 = G__11215;
chunk__11147_11201 = G__11216;
count__11148_11202 = G__11217;
i__11149_11203 = G__11218;
continue;
} else {
var lib_11219 = cljs.core.first.call(null,seq__11146_11213__$1);
var map__11156_11220 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_11219));
var map__11156_11221__$1 = (((((!((map__11156_11220 == null))))?(((((map__11156_11220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11156_11220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11156_11220):map__11156_11220);
var global_exports_11222 = cljs.core.get.call(null,map__11156_11221__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_11222,lib_11219);


var G__11223 = cljs.core.next.call(null,seq__11146_11213__$1);
var G__11224 = null;
var G__11225 = (0);
var G__11226 = (0);
seq__11146_11200 = G__11223;
chunk__11147_11201 = G__11224;
count__11148_11202 = G__11225;
i__11149_11203 = G__11226;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__11227){
var map__11228 = p__11227;
var map__11228__$1 = (((((!((map__11228 == null))))?(((((map__11228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11228):map__11228);
var name = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__11230){
var map__11231 = p__11230;
var map__11231__$1 = (((((!((map__11231 == null))))?(((((map__11231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11231):map__11231);
var name = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__11231__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__11233){
var map__11234 = p__11233;
var map__11234__$1 = (((((!((map__11234 == null))))?(((((map__11234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11234):map__11234);
var t = cljs.core.get.call(null,map__11234__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__11234__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__11234__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__11234__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__11234__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__11236_11260 = cljs.core.seq.call(null,protocols);
var chunk__11237_11261 = null;
var count__11238_11262 = (0);
var i__11239_11263 = (0);
while(true){
if((i__11239_11263 < count__11238_11262)){
var protocol_11264 = cljs.core._nth.call(null,chunk__11237_11261,i__11239_11263);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11264)),"}");


var G__11265 = seq__11236_11260;
var G__11266 = chunk__11237_11261;
var G__11267 = count__11238_11262;
var G__11268 = (i__11239_11263 + (1));
seq__11236_11260 = G__11265;
chunk__11237_11261 = G__11266;
count__11238_11262 = G__11267;
i__11239_11263 = G__11268;
continue;
} else {
var temp__5720__auto___11269 = cljs.core.seq.call(null,seq__11236_11260);
if(temp__5720__auto___11269){
var seq__11236_11270__$1 = temp__5720__auto___11269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11236_11270__$1)){
var c__4550__auto___11271 = cljs.core.chunk_first.call(null,seq__11236_11270__$1);
var G__11272 = cljs.core.chunk_rest.call(null,seq__11236_11270__$1);
var G__11273 = c__4550__auto___11271;
var G__11274 = cljs.core.count.call(null,c__4550__auto___11271);
var G__11275 = (0);
seq__11236_11260 = G__11272;
chunk__11237_11261 = G__11273;
count__11238_11262 = G__11274;
i__11239_11263 = G__11275;
continue;
} else {
var protocol_11276 = cljs.core.first.call(null,seq__11236_11270__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11276)),"}");


var G__11277 = cljs.core.next.call(null,seq__11236_11270__$1);
var G__11278 = null;
var G__11279 = (0);
var G__11280 = (0);
seq__11236_11260 = G__11277;
chunk__11237_11261 = G__11278;
count__11238_11262 = G__11279;
i__11239_11263 = G__11280;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__11240_11281 = cljs.core.seq.call(null,fields__$1);
var chunk__11241_11282 = null;
var count__11242_11283 = (0);
var i__11243_11284 = (0);
while(true){
if((i__11243_11284 < count__11242_11283)){
var fld_11285 = cljs.core._nth.call(null,chunk__11241_11282,i__11243_11284);
cljs.compiler.emitln.call(null,"this.",fld_11285," = ",fld_11285,";");


var G__11286 = seq__11240_11281;
var G__11287 = chunk__11241_11282;
var G__11288 = count__11242_11283;
var G__11289 = (i__11243_11284 + (1));
seq__11240_11281 = G__11286;
chunk__11241_11282 = G__11287;
count__11242_11283 = G__11288;
i__11243_11284 = G__11289;
continue;
} else {
var temp__5720__auto___11290 = cljs.core.seq.call(null,seq__11240_11281);
if(temp__5720__auto___11290){
var seq__11240_11291__$1 = temp__5720__auto___11290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11240_11291__$1)){
var c__4550__auto___11292 = cljs.core.chunk_first.call(null,seq__11240_11291__$1);
var G__11293 = cljs.core.chunk_rest.call(null,seq__11240_11291__$1);
var G__11294 = c__4550__auto___11292;
var G__11295 = cljs.core.count.call(null,c__4550__auto___11292);
var G__11296 = (0);
seq__11240_11281 = G__11293;
chunk__11241_11282 = G__11294;
count__11242_11283 = G__11295;
i__11243_11284 = G__11296;
continue;
} else {
var fld_11297 = cljs.core.first.call(null,seq__11240_11291__$1);
cljs.compiler.emitln.call(null,"this.",fld_11297," = ",fld_11297,";");


var G__11298 = cljs.core.next.call(null,seq__11240_11291__$1);
var G__11299 = null;
var G__11300 = (0);
var G__11301 = (0);
seq__11240_11281 = G__11298;
chunk__11241_11282 = G__11299;
count__11242_11283 = G__11300;
i__11243_11284 = G__11301;
continue;
}
} else {
}
}
break;
}

var seq__11244_11302 = cljs.core.seq.call(null,pmasks);
var chunk__11245_11303 = null;
var count__11246_11304 = (0);
var i__11247_11305 = (0);
while(true){
if((i__11247_11305 < count__11246_11304)){
var vec__11254_11306 = cljs.core._nth.call(null,chunk__11245_11303,i__11247_11305);
var pno_11307 = cljs.core.nth.call(null,vec__11254_11306,(0),null);
var pmask_11308 = cljs.core.nth.call(null,vec__11254_11306,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11307,"$ = ",pmask_11308,";");


var G__11309 = seq__11244_11302;
var G__11310 = chunk__11245_11303;
var G__11311 = count__11246_11304;
var G__11312 = (i__11247_11305 + (1));
seq__11244_11302 = G__11309;
chunk__11245_11303 = G__11310;
count__11246_11304 = G__11311;
i__11247_11305 = G__11312;
continue;
} else {
var temp__5720__auto___11313 = cljs.core.seq.call(null,seq__11244_11302);
if(temp__5720__auto___11313){
var seq__11244_11314__$1 = temp__5720__auto___11313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11244_11314__$1)){
var c__4550__auto___11315 = cljs.core.chunk_first.call(null,seq__11244_11314__$1);
var G__11316 = cljs.core.chunk_rest.call(null,seq__11244_11314__$1);
var G__11317 = c__4550__auto___11315;
var G__11318 = cljs.core.count.call(null,c__4550__auto___11315);
var G__11319 = (0);
seq__11244_11302 = G__11316;
chunk__11245_11303 = G__11317;
count__11246_11304 = G__11318;
i__11247_11305 = G__11319;
continue;
} else {
var vec__11257_11320 = cljs.core.first.call(null,seq__11244_11314__$1);
var pno_11321 = cljs.core.nth.call(null,vec__11257_11320,(0),null);
var pmask_11322 = cljs.core.nth.call(null,vec__11257_11320,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11321,"$ = ",pmask_11322,";");


var G__11323 = cljs.core.next.call(null,seq__11244_11314__$1);
var G__11324 = null;
var G__11325 = (0);
var G__11326 = (0);
seq__11244_11302 = G__11323;
chunk__11245_11303 = G__11324;
count__11246_11304 = G__11325;
i__11247_11305 = G__11326;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__11327){
var map__11328 = p__11327;
var map__11328__$1 = (((((!((map__11328 == null))))?(((((map__11328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11328):map__11328);
var t = cljs.core.get.call(null,map__11328__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__11328__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__11328__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__11328__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__11328__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__11330_11354 = cljs.core.seq.call(null,protocols);
var chunk__11331_11355 = null;
var count__11332_11356 = (0);
var i__11333_11357 = (0);
while(true){
if((i__11333_11357 < count__11332_11356)){
var protocol_11358 = cljs.core._nth.call(null,chunk__11331_11355,i__11333_11357);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11358)),"}");


var G__11359 = seq__11330_11354;
var G__11360 = chunk__11331_11355;
var G__11361 = count__11332_11356;
var G__11362 = (i__11333_11357 + (1));
seq__11330_11354 = G__11359;
chunk__11331_11355 = G__11360;
count__11332_11356 = G__11361;
i__11333_11357 = G__11362;
continue;
} else {
var temp__5720__auto___11363 = cljs.core.seq.call(null,seq__11330_11354);
if(temp__5720__auto___11363){
var seq__11330_11364__$1 = temp__5720__auto___11363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11330_11364__$1)){
var c__4550__auto___11365 = cljs.core.chunk_first.call(null,seq__11330_11364__$1);
var G__11366 = cljs.core.chunk_rest.call(null,seq__11330_11364__$1);
var G__11367 = c__4550__auto___11365;
var G__11368 = cljs.core.count.call(null,c__4550__auto___11365);
var G__11369 = (0);
seq__11330_11354 = G__11366;
chunk__11331_11355 = G__11367;
count__11332_11356 = G__11368;
i__11333_11357 = G__11369;
continue;
} else {
var protocol_11370 = cljs.core.first.call(null,seq__11330_11364__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11370)),"}");


var G__11371 = cljs.core.next.call(null,seq__11330_11364__$1);
var G__11372 = null;
var G__11373 = (0);
var G__11374 = (0);
seq__11330_11354 = G__11371;
chunk__11331_11355 = G__11372;
count__11332_11356 = G__11373;
i__11333_11357 = G__11374;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__11334_11375 = cljs.core.seq.call(null,fields__$1);
var chunk__11335_11376 = null;
var count__11336_11377 = (0);
var i__11337_11378 = (0);
while(true){
if((i__11337_11378 < count__11336_11377)){
var fld_11379 = cljs.core._nth.call(null,chunk__11335_11376,i__11337_11378);
cljs.compiler.emitln.call(null,"this.",fld_11379," = ",fld_11379,";");


var G__11380 = seq__11334_11375;
var G__11381 = chunk__11335_11376;
var G__11382 = count__11336_11377;
var G__11383 = (i__11337_11378 + (1));
seq__11334_11375 = G__11380;
chunk__11335_11376 = G__11381;
count__11336_11377 = G__11382;
i__11337_11378 = G__11383;
continue;
} else {
var temp__5720__auto___11384 = cljs.core.seq.call(null,seq__11334_11375);
if(temp__5720__auto___11384){
var seq__11334_11385__$1 = temp__5720__auto___11384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11334_11385__$1)){
var c__4550__auto___11386 = cljs.core.chunk_first.call(null,seq__11334_11385__$1);
var G__11387 = cljs.core.chunk_rest.call(null,seq__11334_11385__$1);
var G__11388 = c__4550__auto___11386;
var G__11389 = cljs.core.count.call(null,c__4550__auto___11386);
var G__11390 = (0);
seq__11334_11375 = G__11387;
chunk__11335_11376 = G__11388;
count__11336_11377 = G__11389;
i__11337_11378 = G__11390;
continue;
} else {
var fld_11391 = cljs.core.first.call(null,seq__11334_11385__$1);
cljs.compiler.emitln.call(null,"this.",fld_11391," = ",fld_11391,";");


var G__11392 = cljs.core.next.call(null,seq__11334_11385__$1);
var G__11393 = null;
var G__11394 = (0);
var G__11395 = (0);
seq__11334_11375 = G__11392;
chunk__11335_11376 = G__11393;
count__11336_11377 = G__11394;
i__11337_11378 = G__11395;
continue;
}
} else {
}
}
break;
}

var seq__11338_11396 = cljs.core.seq.call(null,pmasks);
var chunk__11339_11397 = null;
var count__11340_11398 = (0);
var i__11341_11399 = (0);
while(true){
if((i__11341_11399 < count__11340_11398)){
var vec__11348_11400 = cljs.core._nth.call(null,chunk__11339_11397,i__11341_11399);
var pno_11401 = cljs.core.nth.call(null,vec__11348_11400,(0),null);
var pmask_11402 = cljs.core.nth.call(null,vec__11348_11400,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11401,"$ = ",pmask_11402,";");


var G__11403 = seq__11338_11396;
var G__11404 = chunk__11339_11397;
var G__11405 = count__11340_11398;
var G__11406 = (i__11341_11399 + (1));
seq__11338_11396 = G__11403;
chunk__11339_11397 = G__11404;
count__11340_11398 = G__11405;
i__11341_11399 = G__11406;
continue;
} else {
var temp__5720__auto___11407 = cljs.core.seq.call(null,seq__11338_11396);
if(temp__5720__auto___11407){
var seq__11338_11408__$1 = temp__5720__auto___11407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11338_11408__$1)){
var c__4550__auto___11409 = cljs.core.chunk_first.call(null,seq__11338_11408__$1);
var G__11410 = cljs.core.chunk_rest.call(null,seq__11338_11408__$1);
var G__11411 = c__4550__auto___11409;
var G__11412 = cljs.core.count.call(null,c__4550__auto___11409);
var G__11413 = (0);
seq__11338_11396 = G__11410;
chunk__11339_11397 = G__11411;
count__11340_11398 = G__11412;
i__11341_11399 = G__11413;
continue;
} else {
var vec__11351_11414 = cljs.core.first.call(null,seq__11338_11408__$1);
var pno_11415 = cljs.core.nth.call(null,vec__11351_11414,(0),null);
var pmask_11416 = cljs.core.nth.call(null,vec__11351_11414,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11415,"$ = ",pmask_11416,";");


var G__11417 = cljs.core.next.call(null,seq__11338_11408__$1);
var G__11418 = null;
var G__11419 = (0);
var G__11420 = (0);
seq__11338_11396 = G__11417;
chunk__11339_11397 = G__11418;
count__11340_11398 = G__11419;
i__11341_11399 = G__11420;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__11421){
var map__11422 = p__11421;
var map__11422__$1 = (((((!((map__11422 == null))))?(((((map__11422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11422):map__11422);
var target = cljs.core.get.call(null,map__11422__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__11422__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__11422__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__11422__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__11422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__11424){
var map__11425 = p__11424;
var map__11425__$1 = (((((!((map__11425 == null))))?(((((map__11425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11425):map__11425);
var op = cljs.core.get.call(null,map__11425__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__11425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__11425__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__11425__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__11425__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__10219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__11431 = cljs.core.seq.call(null,table);
var chunk__11432 = null;
var count__11433 = (0);
var i__11434 = (0);
while(true){
if((i__11434 < count__11433)){
var vec__11441 = cljs.core._nth.call(null,chunk__11432,i__11434);
var sym = cljs.core.nth.call(null,vec__11441,(0),null);
var value = cljs.core.nth.call(null,vec__11441,(1),null);
var ns_11447 = cljs.core.namespace.call(null,sym);
var name_11448 = cljs.core.name.call(null,sym);
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


var G__11449 = seq__11431;
var G__11450 = chunk__11432;
var G__11451 = count__11433;
var G__11452 = (i__11434 + (1));
seq__11431 = G__11449;
chunk__11432 = G__11450;
count__11433 = G__11451;
i__11434 = G__11452;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11431);
if(temp__5720__auto__){
var seq__11431__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11431__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11431__$1);
var G__11453 = cljs.core.chunk_rest.call(null,seq__11431__$1);
var G__11454 = c__4550__auto__;
var G__11455 = cljs.core.count.call(null,c__4550__auto__);
var G__11456 = (0);
seq__11431 = G__11453;
chunk__11432 = G__11454;
count__11433 = G__11455;
i__11434 = G__11456;
continue;
} else {
var vec__11444 = cljs.core.first.call(null,seq__11431__$1);
var sym = cljs.core.nth.call(null,vec__11444,(0),null);
var value = cljs.core.nth.call(null,vec__11444,(1),null);
var ns_11457 = cljs.core.namespace.call(null,sym);
var name_11458 = cljs.core.name.call(null,sym);
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


var G__11459 = cljs.core.next.call(null,seq__11431__$1);
var G__11460 = null;
var G__11461 = (0);
var G__11462 = (0);
seq__11431 = G__11459;
chunk__11432 = G__11460;
count__11433 = G__11461;
i__11434 = G__11462;
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
var G__11464 = arguments.length;
switch (G__11464) {
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
var k_11469 = cljs.core.first.call(null,ks);
var vec__11465_11470 = cljs.core.conj.call(null,prefix,k_11469);
var top_11471 = cljs.core.nth.call(null,vec__11465_11470,(0),null);
var prefix_SINGLEQUOTE__11472 = vec__11465_11470;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_11469)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__11472) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_11471)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_11471)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__11472)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_11471);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__11472)),";");
}
} else {
}

var m_11473 = cljs.core.get.call(null,externs,k_11469);
if(cljs.core.empty_QMARK_.call(null,m_11473)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__11472,m_11473,top_level,known_externs);
}

var G__11474 = cljs.core.next.call(null,ks);
ks = G__11474;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1611075062639
