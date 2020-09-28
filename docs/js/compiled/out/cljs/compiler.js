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
var map__27140 = s;
var map__27140__$1 = (((((!((map__27140 == null))))?(((((map__27140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27140):map__27140);
var name = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__27143 = info;
var map__27144 = G__27143;
var map__27144__$1 = (((((!((map__27144 == null))))?(((((map__27144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27144):map__27144);
var shadow = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__27143__$1 = G__27143;
while(true){
var d__$2 = d__$1;
var map__27148 = G__27143__$1;
var map__27148__$1 = (((((!((map__27148 == null))))?(((((map__27148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27148):map__27148);
var shadow__$1 = cljs.core.get.call(null,map__27148__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__27150 = (d__$2 + (1));
var G__27151 = shadow__$1;
d__$1 = G__27150;
G__27143__$1 = G__27151;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__27152){
var map__27153 = p__27152;
var map__27153__$1 = (((((!((map__27153 == null))))?(((((map__27153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27153):map__27153);
var name_var = map__27153__$1;
var name = cljs.core.get.call(null,map__27153__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27153__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__27155 = info;
var map__27155__$1 = (((((!((map__27155 == null))))?(((((map__27155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27155):map__27155);
var ns = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__27158 = arguments.length;
switch (G__27158) {
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
var G__27160 = cp;
switch (G__27160) {
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
var seq__27162_27166 = cljs.core.seq.call(null,s);
var chunk__27163_27167 = null;
var count__27164_27168 = (0);
var i__27165_27169 = (0);
while(true){
if((i__27165_27169 < count__27164_27168)){
var c_27170 = cljs.core._nth.call(null,chunk__27163_27167,i__27165_27169);
sb.append(cljs.compiler.escape_char.call(null,c_27170));


var G__27171 = seq__27162_27166;
var G__27172 = chunk__27163_27167;
var G__27173 = count__27164_27168;
var G__27174 = (i__27165_27169 + (1));
seq__27162_27166 = G__27171;
chunk__27163_27167 = G__27172;
count__27164_27168 = G__27173;
i__27165_27169 = G__27174;
continue;
} else {
var temp__5720__auto___27175 = cljs.core.seq.call(null,seq__27162_27166);
if(temp__5720__auto___27175){
var seq__27162_27176__$1 = temp__5720__auto___27175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27162_27176__$1)){
var c__4550__auto___27177 = cljs.core.chunk_first.call(null,seq__27162_27176__$1);
var G__27178 = cljs.core.chunk_rest.call(null,seq__27162_27176__$1);
var G__27179 = c__4550__auto___27177;
var G__27180 = cljs.core.count.call(null,c__4550__auto___27177);
var G__27181 = (0);
seq__27162_27166 = G__27178;
chunk__27163_27167 = G__27179;
count__27164_27168 = G__27180;
i__27165_27169 = G__27181;
continue;
} else {
var c_27182 = cljs.core.first.call(null,seq__27162_27176__$1);
sb.append(cljs.compiler.escape_char.call(null,c_27182));


var G__27183 = cljs.core.next.call(null,seq__27162_27176__$1);
var G__27184 = null;
var G__27185 = (0);
var G__27186 = (0);
seq__27162_27166 = G__27183;
chunk__27163_27167 = G__27184;
count__27164_27168 = G__27185;
i__27165_27169 = G__27186;
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
var map__27187_27192 = ast;
var map__27187_27193__$1 = (((((!((map__27187_27192 == null))))?(((((map__27187_27192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27187_27192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27187_27192):map__27187_27192);
var env_27194 = cljs.core.get.call(null,map__27187_27193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_27194))){
var map__27189_27195 = env_27194;
var map__27189_27196__$1 = (((((!((map__27189_27195 == null))))?(((((map__27189_27195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27189_27195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27189_27195):map__27189_27195);
var line_27197 = cljs.core.get.call(null,map__27189_27196__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27198 = cljs.core.get.call(null,map__27189_27196__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__27189_27195,map__27189_27196__$1,line_27197,column_27198,map__27187_27192,map__27187_27193__$1,env_27194){
return (function (m){
var minfo = (function (){var G__27191 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__27191,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__27191;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_27197 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__27189_27195,map__27189_27196__$1,line_27197,column_27198,map__27187_27192,map__27187_27193__$1,env_27194){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_27198)?(column_27198 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__27189_27195,map__27189_27196__$1,line_27197,column_27198,map__27187_27192,map__27187_27193__$1,env_27194){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__27189_27195,map__27189_27196__$1,line_27197,column_27198,map__27187_27192,map__27187_27193__$1,env_27194))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__27189_27195,map__27189_27196__$1,line_27197,column_27198,map__27187_27192,map__27187_27193__$1,env_27194))
,cljs.core.sorted_map.call(null)));
});})(map__27189_27195,map__27189_27196__$1,line_27197,column_27198,map__27187_27192,map__27187_27193__$1,env_27194))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__27207 = arguments.length;
switch (G__27207) {
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
var len__4730__auto___27214 = arguments.length;
var i__4731__auto___27215 = (0);
while(true){
if((i__4731__auto___27215 < len__4730__auto___27214)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27215]));

var G__27216 = (i__4731__auto___27215 + (1));
i__4731__auto___27215 = G__27216;
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
var s_27217 = (function (){var G__27208 = a;
if((!(typeof a === 'string'))){
return G__27208.toString();
} else {
return G__27208;
}
})();
var temp__5724__auto___27218 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___27218 == null)){
} else {
var sm_data_27219 = temp__5724__auto___27218;
cljs.core.swap_BANG_.call(null,sm_data_27219,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_27219,temp__5724__auto___27218,s_27217){
return (function (p1__27199_SHARP_){
return (p1__27199_SHARP_ + s_27217.length);
});})(sm_data_27219,temp__5724__auto___27218,s_27217))
);
}

cljs.core.print.call(null,s_27217);

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

var seq__27209 = cljs.core.seq.call(null,xs);
var chunk__27210 = null;
var count__27211 = (0);
var i__27212 = (0);
while(true){
if((i__27212 < count__27211)){
var x = cljs.core._nth.call(null,chunk__27210,i__27212);
cljs.compiler.emits.call(null,x);


var G__27220 = seq__27209;
var G__27221 = chunk__27210;
var G__27222 = count__27211;
var G__27223 = (i__27212 + (1));
seq__27209 = G__27220;
chunk__27210 = G__27221;
count__27211 = G__27222;
i__27212 = G__27223;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27209);
if(temp__5720__auto__){
var seq__27209__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27209__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27209__$1);
var G__27224 = cljs.core.chunk_rest.call(null,seq__27209__$1);
var G__27225 = c__4550__auto__;
var G__27226 = cljs.core.count.call(null,c__4550__auto__);
var G__27227 = (0);
seq__27209 = G__27224;
chunk__27210 = G__27225;
count__27211 = G__27226;
i__27212 = G__27227;
continue;
} else {
var x = cljs.core.first.call(null,seq__27209__$1);
cljs.compiler.emits.call(null,x);


var G__27228 = cljs.core.next.call(null,seq__27209__$1);
var G__27229 = null;
var G__27230 = (0);
var G__27231 = (0);
seq__27209 = G__27228;
chunk__27210 = G__27229;
count__27211 = G__27230;
i__27212 = G__27231;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq27201){
var G__27202 = cljs.core.first.call(null,seq27201);
var seq27201__$1 = cljs.core.next.call(null,seq27201);
var G__27203 = cljs.core.first.call(null,seq27201__$1);
var seq27201__$2 = cljs.core.next.call(null,seq27201__$1);
var G__27204 = cljs.core.first.call(null,seq27201__$2);
var seq27201__$3 = cljs.core.next.call(null,seq27201__$2);
var G__27205 = cljs.core.first.call(null,seq27201__$3);
var seq27201__$4 = cljs.core.next.call(null,seq27201__$3);
var G__27206 = cljs.core.first.call(null,seq27201__$4);
var seq27201__$5 = cljs.core.next.call(null,seq27201__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27202,G__27203,G__27204,G__27205,G__27206,seq27201__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__27232){
var map__27233 = p__27232;
var map__27233__$1 = (((((!((map__27233 == null))))?(((((map__27233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27233):map__27233);
var m = map__27233__$1;
var gen_line = cljs.core.get.call(null,map__27233__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__27242 = arguments.length;
switch (G__27242) {
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
var len__4730__auto___27248 = arguments.length;
var i__4731__auto___27249 = (0);
while(true){
if((i__4731__auto___27249 < len__4730__auto___27248)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27249]));

var G__27250 = (i__4731__auto___27249 + (1));
i__4731__auto___27249 = G__27250;
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

var seq__27243_27251 = cljs.core.seq.call(null,xs);
var chunk__27244_27252 = null;
var count__27245_27253 = (0);
var i__27246_27254 = (0);
while(true){
if((i__27246_27254 < count__27245_27253)){
var x_27255 = cljs.core._nth.call(null,chunk__27244_27252,i__27246_27254);
cljs.compiler.emits.call(null,x_27255);


var G__27256 = seq__27243_27251;
var G__27257 = chunk__27244_27252;
var G__27258 = count__27245_27253;
var G__27259 = (i__27246_27254 + (1));
seq__27243_27251 = G__27256;
chunk__27244_27252 = G__27257;
count__27245_27253 = G__27258;
i__27246_27254 = G__27259;
continue;
} else {
var temp__5720__auto___27260 = cljs.core.seq.call(null,seq__27243_27251);
if(temp__5720__auto___27260){
var seq__27243_27261__$1 = temp__5720__auto___27260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27243_27261__$1)){
var c__4550__auto___27262 = cljs.core.chunk_first.call(null,seq__27243_27261__$1);
var G__27263 = cljs.core.chunk_rest.call(null,seq__27243_27261__$1);
var G__27264 = c__4550__auto___27262;
var G__27265 = cljs.core.count.call(null,c__4550__auto___27262);
var G__27266 = (0);
seq__27243_27251 = G__27263;
chunk__27244_27252 = G__27264;
count__27245_27253 = G__27265;
i__27246_27254 = G__27266;
continue;
} else {
var x_27267 = cljs.core.first.call(null,seq__27243_27261__$1);
cljs.compiler.emits.call(null,x_27267);


var G__27268 = cljs.core.next.call(null,seq__27243_27261__$1);
var G__27269 = null;
var G__27270 = (0);
var G__27271 = (0);
seq__27243_27251 = G__27268;
chunk__27244_27252 = G__27269;
count__27245_27253 = G__27270;
i__27246_27254 = G__27271;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq27236){
var G__27237 = cljs.core.first.call(null,seq27236);
var seq27236__$1 = cljs.core.next.call(null,seq27236);
var G__27238 = cljs.core.first.call(null,seq27236__$1);
var seq27236__$2 = cljs.core.next.call(null,seq27236__$1);
var G__27239 = cljs.core.first.call(null,seq27236__$2);
var seq27236__$3 = cljs.core.next.call(null,seq27236__$2);
var G__27240 = cljs.core.first.call(null,seq27236__$3);
var seq27236__$4 = cljs.core.next.call(null,seq27236__$3);
var G__27241 = cljs.core.first.call(null,seq27236__$4);
var seq27236__$5 = cljs.core.next.call(null,seq27236__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27237,G__27238,G__27239,G__27240,G__27241,seq27236__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27272_27276 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27273_27277 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27274_27278 = true;
var _STAR_print_fn_STAR__temp_val__27275_27279 = ((function (_STAR_print_newline_STAR__orig_val__27272_27276,_STAR_print_fn_STAR__orig_val__27273_27277,_STAR_print_newline_STAR__temp_val__27274_27278,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27272_27276,_STAR_print_fn_STAR__orig_val__27273_27277,_STAR_print_newline_STAR__temp_val__27274_27278,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27274_27278;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27275_27279;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27273_27277;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27272_27276;
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
var vec__27280 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__27280,(0),null);
var name = cljs.core.nth.call(null,vec__27280,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__27280,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__27280,ns,name))
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
var vec__27283 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__27283,(0),null);
var flags = cljs.core.nth.call(null,vec__27283,(1),null);
var pattern = cljs.core.nth.call(null,vec__27283,(2),null);
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
return (function (p1__27286_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__27286_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__27288){
var map__27289 = p__27288;
var map__27289__$1 = (((((!((map__27289 == null))))?(((((map__27289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27289):map__27289);
var ast = map__27289__$1;
var info = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__27291 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27291__$1 = (((((!((map__27291 == null))))?(((((map__27291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27291):map__27291);
var cenv = map__27291__$1;
var options = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__27293 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__27293,cljs.analyzer.es5_allowed);
} else {
return G__27293;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__27294 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__27294,reserved);
} else {
return G__27294;
}
})();
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__27295_27296 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__27295_27297__$1 = (((G__27295_27296 instanceof cljs.core.Keyword))?G__27295_27296.fqn:null);
switch (G__27295_27297__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__27299){
var map__27300 = p__27299;
var map__27300__$1 = (((((!((map__27300 == null))))?(((((map__27300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27300):map__27300);
var arg = map__27300__$1;
var env = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__27302 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__27302__$1 = (((((!((map__27302 == null))))?(((((map__27302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27302):map__27302);
var name = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__27304){
var map__27305 = p__27304;
var map__27305__$1 = (((((!((map__27305 == null))))?(((((map__27305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27305):map__27305);
var expr = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__27307_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27307_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__27308){
var map__27309 = p__27308;
var map__27309__$1 = (((((!((map__27309 == null))))?(((((map__27309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27309):map__27309);
var env = cljs.core.get.call(null,map__27309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__27309__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27309__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__27311){
var map__27312 = p__27311;
var map__27312__$1 = (((((!((map__27312 == null))))?(((((map__27312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27312):map__27312);
var items = cljs.core.get.call(null,map__27312__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__27314_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27314_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__27315){
var map__27316 = p__27315;
var map__27316__$1 = (((((!((map__27316 == null))))?(((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var items = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___27340 = cljs.core.seq.call(null,items);
if(temp__5720__auto___27340){
var items_27341__$1 = temp__5720__auto___27340;
var vec__27318_27342 = items_27341__$1;
var seq__27319_27343 = cljs.core.seq.call(null,vec__27318_27342);
var first__27320_27344 = cljs.core.first.call(null,seq__27319_27343);
var seq__27319_27345__$1 = cljs.core.next.call(null,seq__27319_27343);
var vec__27321_27346 = first__27320_27344;
var k_27347 = cljs.core.nth.call(null,vec__27321_27346,(0),null);
var v_27348 = cljs.core.nth.call(null,vec__27321_27346,(1),null);
var r_27349 = seq__27319_27345__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_27347),"\": ",emit_js_object_val.call(null,v_27348));

var seq__27324_27350 = cljs.core.seq.call(null,r_27349);
var chunk__27325_27351 = null;
var count__27326_27352 = (0);
var i__27327_27353 = (0);
while(true){
if((i__27327_27353 < count__27326_27352)){
var vec__27334_27354 = cljs.core._nth.call(null,chunk__27325_27351,i__27327_27353);
var k_27355__$1 = cljs.core.nth.call(null,vec__27334_27354,(0),null);
var v_27356__$1 = cljs.core.nth.call(null,vec__27334_27354,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27355__$1),"\": ",emit_js_object_val.call(null,v_27356__$1));


var G__27357 = seq__27324_27350;
var G__27358 = chunk__27325_27351;
var G__27359 = count__27326_27352;
var G__27360 = (i__27327_27353 + (1));
seq__27324_27350 = G__27357;
chunk__27325_27351 = G__27358;
count__27326_27352 = G__27359;
i__27327_27353 = G__27360;
continue;
} else {
var temp__5720__auto___27361__$1 = cljs.core.seq.call(null,seq__27324_27350);
if(temp__5720__auto___27361__$1){
var seq__27324_27362__$1 = temp__5720__auto___27361__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27324_27362__$1)){
var c__4550__auto___27363 = cljs.core.chunk_first.call(null,seq__27324_27362__$1);
var G__27364 = cljs.core.chunk_rest.call(null,seq__27324_27362__$1);
var G__27365 = c__4550__auto___27363;
var G__27366 = cljs.core.count.call(null,c__4550__auto___27363);
var G__27367 = (0);
seq__27324_27350 = G__27364;
chunk__27325_27351 = G__27365;
count__27326_27352 = G__27366;
i__27327_27353 = G__27367;
continue;
} else {
var vec__27337_27368 = cljs.core.first.call(null,seq__27324_27362__$1);
var k_27369__$1 = cljs.core.nth.call(null,vec__27337_27368,(0),null);
var v_27370__$1 = cljs.core.nth.call(null,vec__27337_27368,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27369__$1),"\": ",emit_js_object_val.call(null,v_27370__$1));


var G__27371 = cljs.core.next.call(null,seq__27324_27362__$1);
var G__27372 = null;
var G__27373 = (0);
var G__27374 = (0);
seq__27324_27350 = G__27371;
chunk__27325_27351 = G__27372;
count__27326_27352 = G__27373;
i__27327_27353 = G__27374;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__27375){
var map__27376 = p__27375;
var map__27376__$1 = (((((!((map__27376 == null))))?(((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var keys = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__27378){
var map__27379 = p__27378;
var map__27379__$1 = (((((!((map__27379 == null))))?(((((map__27379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27379):map__27379);
var items = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__27381){
var map__27382 = p__27381;
var map__27382__$1 = (((((!((map__27382 == null))))?(((((map__27382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27382):map__27382);
var expr = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__27384){
var map__27385 = p__27384;
var map__27385__$1 = (((((!((map__27385 == null))))?(((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var form = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__27387 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27387__$1 = (((((!((map__27387 == null))))?(((((map__27387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27387):map__27387);
var op = cljs.core.get.call(null,map__27387__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27387__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27387__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__27389 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27389__$1 = (((((!((map__27389 == null))))?(((((map__27389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27389):map__27389);
var op = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__27391){
var map__27392 = p__27391;
var map__27392__$1 = (((((!((map__27392 == null))))?(((((map__27392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27392):map__27392);
var test = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__27394){
var map__27395 = p__27394;
var map__27395__$1 = (((((!((map__27395 == null))))?(((((map__27395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27395):map__27395);
var v = cljs.core.get.call(null,map__27395__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__27395__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__27395__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__27395__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__27397_27433 = cljs.core.seq.call(null,nodes);
var chunk__27398_27434 = null;
var count__27399_27435 = (0);
var i__27400_27436 = (0);
while(true){
if((i__27400_27436 < count__27399_27435)){
var map__27417_27437 = cljs.core._nth.call(null,chunk__27398_27434,i__27400_27436);
var map__27417_27438__$1 = (((((!((map__27417_27437 == null))))?(((((map__27417_27437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27417_27437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27417_27437):map__27417_27437);
var ts_27439 = cljs.core.get.call(null,map__27417_27438__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27418_27440 = cljs.core.get.call(null,map__27417_27438__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27418_27441__$1 = (((((!((map__27418_27440 == null))))?(((((map__27418_27440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27418_27440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27418_27440):map__27418_27440);
var then_27442 = cljs.core.get.call(null,map__27418_27441__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27421_27443 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27439));
var chunk__27422_27444 = null;
var count__27423_27445 = (0);
var i__27424_27446 = (0);
while(true){
if((i__27424_27446 < count__27423_27445)){
var test_27447 = cljs.core._nth.call(null,chunk__27422_27444,i__27424_27446);
cljs.compiler.emitln.call(null,"case ",test_27447,":");


var G__27448 = seq__27421_27443;
var G__27449 = chunk__27422_27444;
var G__27450 = count__27423_27445;
var G__27451 = (i__27424_27446 + (1));
seq__27421_27443 = G__27448;
chunk__27422_27444 = G__27449;
count__27423_27445 = G__27450;
i__27424_27446 = G__27451;
continue;
} else {
var temp__5720__auto___27452 = cljs.core.seq.call(null,seq__27421_27443);
if(temp__5720__auto___27452){
var seq__27421_27453__$1 = temp__5720__auto___27452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27421_27453__$1)){
var c__4550__auto___27454 = cljs.core.chunk_first.call(null,seq__27421_27453__$1);
var G__27455 = cljs.core.chunk_rest.call(null,seq__27421_27453__$1);
var G__27456 = c__4550__auto___27454;
var G__27457 = cljs.core.count.call(null,c__4550__auto___27454);
var G__27458 = (0);
seq__27421_27443 = G__27455;
chunk__27422_27444 = G__27456;
count__27423_27445 = G__27457;
i__27424_27446 = G__27458;
continue;
} else {
var test_27459 = cljs.core.first.call(null,seq__27421_27453__$1);
cljs.compiler.emitln.call(null,"case ",test_27459,":");


var G__27460 = cljs.core.next.call(null,seq__27421_27453__$1);
var G__27461 = null;
var G__27462 = (0);
var G__27463 = (0);
seq__27421_27443 = G__27460;
chunk__27422_27444 = G__27461;
count__27423_27445 = G__27462;
i__27424_27446 = G__27463;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27442);
} else {
cljs.compiler.emitln.call(null,then_27442);
}

cljs.compiler.emitln.call(null,"break;");


var G__27464 = seq__27397_27433;
var G__27465 = chunk__27398_27434;
var G__27466 = count__27399_27435;
var G__27467 = (i__27400_27436 + (1));
seq__27397_27433 = G__27464;
chunk__27398_27434 = G__27465;
count__27399_27435 = G__27466;
i__27400_27436 = G__27467;
continue;
} else {
var temp__5720__auto___27468 = cljs.core.seq.call(null,seq__27397_27433);
if(temp__5720__auto___27468){
var seq__27397_27469__$1 = temp__5720__auto___27468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27397_27469__$1)){
var c__4550__auto___27470 = cljs.core.chunk_first.call(null,seq__27397_27469__$1);
var G__27471 = cljs.core.chunk_rest.call(null,seq__27397_27469__$1);
var G__27472 = c__4550__auto___27470;
var G__27473 = cljs.core.count.call(null,c__4550__auto___27470);
var G__27474 = (0);
seq__27397_27433 = G__27471;
chunk__27398_27434 = G__27472;
count__27399_27435 = G__27473;
i__27400_27436 = G__27474;
continue;
} else {
var map__27425_27475 = cljs.core.first.call(null,seq__27397_27469__$1);
var map__27425_27476__$1 = (((((!((map__27425_27475 == null))))?(((((map__27425_27475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27425_27475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27425_27475):map__27425_27475);
var ts_27477 = cljs.core.get.call(null,map__27425_27476__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27426_27478 = cljs.core.get.call(null,map__27425_27476__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27426_27479__$1 = (((((!((map__27426_27478 == null))))?(((((map__27426_27478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27426_27478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27426_27478):map__27426_27478);
var then_27480 = cljs.core.get.call(null,map__27426_27479__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27429_27481 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27477));
var chunk__27430_27482 = null;
var count__27431_27483 = (0);
var i__27432_27484 = (0);
while(true){
if((i__27432_27484 < count__27431_27483)){
var test_27485 = cljs.core._nth.call(null,chunk__27430_27482,i__27432_27484);
cljs.compiler.emitln.call(null,"case ",test_27485,":");


var G__27486 = seq__27429_27481;
var G__27487 = chunk__27430_27482;
var G__27488 = count__27431_27483;
var G__27489 = (i__27432_27484 + (1));
seq__27429_27481 = G__27486;
chunk__27430_27482 = G__27487;
count__27431_27483 = G__27488;
i__27432_27484 = G__27489;
continue;
} else {
var temp__5720__auto___27490__$1 = cljs.core.seq.call(null,seq__27429_27481);
if(temp__5720__auto___27490__$1){
var seq__27429_27491__$1 = temp__5720__auto___27490__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27429_27491__$1)){
var c__4550__auto___27492 = cljs.core.chunk_first.call(null,seq__27429_27491__$1);
var G__27493 = cljs.core.chunk_rest.call(null,seq__27429_27491__$1);
var G__27494 = c__4550__auto___27492;
var G__27495 = cljs.core.count.call(null,c__4550__auto___27492);
var G__27496 = (0);
seq__27429_27481 = G__27493;
chunk__27430_27482 = G__27494;
count__27431_27483 = G__27495;
i__27432_27484 = G__27496;
continue;
} else {
var test_27497 = cljs.core.first.call(null,seq__27429_27491__$1);
cljs.compiler.emitln.call(null,"case ",test_27497,":");


var G__27498 = cljs.core.next.call(null,seq__27429_27491__$1);
var G__27499 = null;
var G__27500 = (0);
var G__27501 = (0);
seq__27429_27481 = G__27498;
chunk__27430_27482 = G__27499;
count__27431_27483 = G__27500;
i__27432_27484 = G__27501;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27480);
} else {
cljs.compiler.emitln.call(null,then_27480);
}

cljs.compiler.emitln.call(null,"break;");


var G__27502 = cljs.core.next.call(null,seq__27397_27469__$1);
var G__27503 = null;
var G__27504 = (0);
var G__27505 = (0);
seq__27397_27433 = G__27502;
chunk__27398_27434 = G__27503;
count__27399_27435 = G__27504;
i__27400_27436 = G__27505;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__27506){
var map__27507 = p__27506;
var map__27507__$1 = (((((!((map__27507 == null))))?(((((map__27507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27507):map__27507);
var throw$ = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__27510 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__27510,(0),null);
var rstr = cljs.core.nth.call(null,vec__27510,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__27510,fstr,rstr,ret_t,axstr){
return (function (p1__27509_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__27509_SHARP_);
});})(idx,vec__27510,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__27513 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__27513,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__27513;
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
return (function (p1__27514_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__27514_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__27515 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__27516 = cljs.core.seq.call(null,vec__27515);
var first__27517 = cljs.core.first.call(null,seq__27516);
var seq__27516__$1 = cljs.core.next.call(null,seq__27516);
var p = first__27517;
var first__27517__$1 = cljs.core.first.call(null,seq__27516__$1);
var seq__27516__$2 = cljs.core.next.call(null,seq__27516__$1);
var ts = first__27517__$1;
var first__27517__$2 = cljs.core.first.call(null,seq__27516__$2);
var seq__27516__$3 = cljs.core.next.call(null,seq__27516__$2);
var n = first__27517__$2;
var xs = seq__27516__$3;
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
var vec__27518 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__27519 = cljs.core.seq.call(null,vec__27518);
var first__27520 = cljs.core.first.call(null,seq__27519);
var seq__27519__$1 = cljs.core.next.call(null,seq__27519);
var p = first__27520;
var first__27520__$1 = cljs.core.first.call(null,seq__27519__$1);
var seq__27519__$2 = cljs.core.next.call(null,seq__27519__$1);
var ts = first__27520__$1;
var xs = seq__27519__$2;
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
var G__27523 = arguments.length;
switch (G__27523) {
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
var vec__27531 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__27521_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__27521_SHARP_);
} else {
return p1__27521_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__27532 = cljs.core.seq.call(null,vec__27531);
var first__27533 = cljs.core.first.call(null,seq__27532);
var seq__27532__$1 = cljs.core.next.call(null,seq__27532);
var x = first__27533;
var ys = seq__27532__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__27534 = cljs.core.seq.call(null,ys);
var chunk__27535 = null;
var count__27536 = (0);
var i__27537 = (0);
while(true){
if((i__27537 < count__27536)){
var next_line = cljs.core._nth.call(null,chunk__27535,i__27537);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__27543 = seq__27534;
var G__27544 = chunk__27535;
var G__27545 = count__27536;
var G__27546 = (i__27537 + (1));
seq__27534 = G__27543;
chunk__27535 = G__27544;
count__27536 = G__27545;
i__27537 = G__27546;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27534);
if(temp__5720__auto__){
var seq__27534__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27534__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27534__$1);
var G__27547 = cljs.core.chunk_rest.call(null,seq__27534__$1);
var G__27548 = c__4550__auto__;
var G__27549 = cljs.core.count.call(null,c__4550__auto__);
var G__27550 = (0);
seq__27534 = G__27547;
chunk__27535 = G__27548;
count__27536 = G__27549;
i__27537 = G__27550;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__27534__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__27551 = cljs.core.next.call(null,seq__27534__$1);
var G__27552 = null;
var G__27553 = (0);
var G__27554 = (0);
seq__27534 = G__27551;
chunk__27535 = G__27552;
count__27536 = G__27553;
i__27537 = G__27554;
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

var seq__27538_27555 = cljs.core.seq.call(null,docs__$2);
var chunk__27539_27556 = null;
var count__27540_27557 = (0);
var i__27541_27558 = (0);
while(true){
if((i__27541_27558 < count__27540_27557)){
var e_27559 = cljs.core._nth.call(null,chunk__27539_27556,i__27541_27558);
if(cljs.core.truth_(e_27559)){
print_comment_lines.call(null,e_27559);
} else {
}


var G__27560 = seq__27538_27555;
var G__27561 = chunk__27539_27556;
var G__27562 = count__27540_27557;
var G__27563 = (i__27541_27558 + (1));
seq__27538_27555 = G__27560;
chunk__27539_27556 = G__27561;
count__27540_27557 = G__27562;
i__27541_27558 = G__27563;
continue;
} else {
var temp__5720__auto___27564 = cljs.core.seq.call(null,seq__27538_27555);
if(temp__5720__auto___27564){
var seq__27538_27565__$1 = temp__5720__auto___27564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27538_27565__$1)){
var c__4550__auto___27566 = cljs.core.chunk_first.call(null,seq__27538_27565__$1);
var G__27567 = cljs.core.chunk_rest.call(null,seq__27538_27565__$1);
var G__27568 = c__4550__auto___27566;
var G__27569 = cljs.core.count.call(null,c__4550__auto___27566);
var G__27570 = (0);
seq__27538_27555 = G__27567;
chunk__27539_27556 = G__27568;
count__27540_27557 = G__27569;
i__27541_27558 = G__27570;
continue;
} else {
var e_27571 = cljs.core.first.call(null,seq__27538_27565__$1);
if(cljs.core.truth_(e_27571)){
print_comment_lines.call(null,e_27571);
} else {
}


var G__27572 = cljs.core.next.call(null,seq__27538_27565__$1);
var G__27573 = null;
var G__27574 = (0);
var G__27575 = (0);
seq__27538_27555 = G__27572;
chunk__27539_27556 = G__27573;
count__27540_27557 = G__27574;
i__27541_27558 = G__27575;
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
return (function (p1__27577_SHARP_){
return goog.string.startsWith(p1__27577_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__27578){
var map__27579 = p__27578;
var map__27579__$1 = (((((!((map__27579 == null))))?(((((map__27579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27579):map__27579);
var doc = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__27581){
var map__27582 = p__27581;
var map__27582__$1 = (((((!((map__27582 == null))))?(((((map__27582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27582):map__27582);
var name = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__27584_27608 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__27585_27609 = null;
var count__27586_27610 = (0);
var i__27587_27611 = (0);
while(true){
if((i__27587_27611 < count__27586_27610)){
var vec__27594_27612 = cljs.core._nth.call(null,chunk__27585_27609,i__27587_27611);
var i_27613 = cljs.core.nth.call(null,vec__27594_27612,(0),null);
var param_27614 = cljs.core.nth.call(null,vec__27594_27612,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27614);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__27615 = seq__27584_27608;
var G__27616 = chunk__27585_27609;
var G__27617 = count__27586_27610;
var G__27618 = (i__27587_27611 + (1));
seq__27584_27608 = G__27615;
chunk__27585_27609 = G__27616;
count__27586_27610 = G__27617;
i__27587_27611 = G__27618;
continue;
} else {
var temp__5720__auto___27619 = cljs.core.seq.call(null,seq__27584_27608);
if(temp__5720__auto___27619){
var seq__27584_27620__$1 = temp__5720__auto___27619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27584_27620__$1)){
var c__4550__auto___27621 = cljs.core.chunk_first.call(null,seq__27584_27620__$1);
var G__27622 = cljs.core.chunk_rest.call(null,seq__27584_27620__$1);
var G__27623 = c__4550__auto___27621;
var G__27624 = cljs.core.count.call(null,c__4550__auto___27621);
var G__27625 = (0);
seq__27584_27608 = G__27622;
chunk__27585_27609 = G__27623;
count__27586_27610 = G__27624;
i__27587_27611 = G__27625;
continue;
} else {
var vec__27597_27626 = cljs.core.first.call(null,seq__27584_27620__$1);
var i_27627 = cljs.core.nth.call(null,vec__27597_27626,(0),null);
var param_27628 = cljs.core.nth.call(null,vec__27597_27626,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27628);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__27629 = cljs.core.next.call(null,seq__27584_27620__$1);
var G__27630 = null;
var G__27631 = (0);
var G__27632 = (0);
seq__27584_27608 = G__27629;
chunk__27585_27609 = G__27630;
count__27586_27610 = G__27631;
i__27587_27611 = G__27632;
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

var seq__27600_27633 = cljs.core.seq.call(null,params);
var chunk__27601_27634 = null;
var count__27602_27635 = (0);
var i__27603_27636 = (0);
while(true){
if((i__27603_27636 < count__27602_27635)){
var param_27637 = cljs.core._nth.call(null,chunk__27601_27634,i__27603_27636);
cljs.compiler.emit.call(null,param_27637);

if(cljs.core._EQ_.call(null,param_27637,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27638 = seq__27600_27633;
var G__27639 = chunk__27601_27634;
var G__27640 = count__27602_27635;
var G__27641 = (i__27603_27636 + (1));
seq__27600_27633 = G__27638;
chunk__27601_27634 = G__27639;
count__27602_27635 = G__27640;
i__27603_27636 = G__27641;
continue;
} else {
var temp__5720__auto___27642 = cljs.core.seq.call(null,seq__27600_27633);
if(temp__5720__auto___27642){
var seq__27600_27643__$1 = temp__5720__auto___27642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27600_27643__$1)){
var c__4550__auto___27644 = cljs.core.chunk_first.call(null,seq__27600_27643__$1);
var G__27645 = cljs.core.chunk_rest.call(null,seq__27600_27643__$1);
var G__27646 = c__4550__auto___27644;
var G__27647 = cljs.core.count.call(null,c__4550__auto___27644);
var G__27648 = (0);
seq__27600_27633 = G__27645;
chunk__27601_27634 = G__27646;
count__27602_27635 = G__27647;
i__27603_27636 = G__27648;
continue;
} else {
var param_27649 = cljs.core.first.call(null,seq__27600_27643__$1);
cljs.compiler.emit.call(null,param_27649);

if(cljs.core._EQ_.call(null,param_27649,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27650 = cljs.core.next.call(null,seq__27600_27643__$1);
var G__27651 = null;
var G__27652 = (0);
var G__27653 = (0);
seq__27600_27633 = G__27650;
chunk__27601_27634 = G__27651;
count__27602_27635 = G__27652;
i__27603_27636 = G__27653;
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

var seq__27604_27654 = cljs.core.seq.call(null,params);
var chunk__27605_27655 = null;
var count__27606_27656 = (0);
var i__27607_27657 = (0);
while(true){
if((i__27607_27657 < count__27606_27656)){
var param_27658 = cljs.core._nth.call(null,chunk__27605_27655,i__27607_27657);
cljs.compiler.emit.call(null,param_27658);

if(cljs.core._EQ_.call(null,param_27658,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27659 = seq__27604_27654;
var G__27660 = chunk__27605_27655;
var G__27661 = count__27606_27656;
var G__27662 = (i__27607_27657 + (1));
seq__27604_27654 = G__27659;
chunk__27605_27655 = G__27660;
count__27606_27656 = G__27661;
i__27607_27657 = G__27662;
continue;
} else {
var temp__5720__auto___27663 = cljs.core.seq.call(null,seq__27604_27654);
if(temp__5720__auto___27663){
var seq__27604_27664__$1 = temp__5720__auto___27663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27604_27664__$1)){
var c__4550__auto___27665 = cljs.core.chunk_first.call(null,seq__27604_27664__$1);
var G__27666 = cljs.core.chunk_rest.call(null,seq__27604_27664__$1);
var G__27667 = c__4550__auto___27665;
var G__27668 = cljs.core.count.call(null,c__4550__auto___27665);
var G__27669 = (0);
seq__27604_27654 = G__27666;
chunk__27605_27655 = G__27667;
count__27606_27656 = G__27668;
i__27607_27657 = G__27669;
continue;
} else {
var param_27670 = cljs.core.first.call(null,seq__27604_27664__$1);
cljs.compiler.emit.call(null,param_27670);

if(cljs.core._EQ_.call(null,param_27670,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27671 = cljs.core.next.call(null,seq__27604_27664__$1);
var G__27672 = null;
var G__27673 = (0);
var G__27674 = (0);
seq__27604_27654 = G__27671;
chunk__27605_27655 = G__27672;
count__27606_27656 = G__27673;
i__27607_27657 = G__27674;
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
var seq__27675 = cljs.core.seq.call(null,params);
var chunk__27676 = null;
var count__27677 = (0);
var i__27678 = (0);
while(true){
if((i__27678 < count__27677)){
var param = cljs.core._nth.call(null,chunk__27676,i__27678);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27679 = seq__27675;
var G__27680 = chunk__27676;
var G__27681 = count__27677;
var G__27682 = (i__27678 + (1));
seq__27675 = G__27679;
chunk__27676 = G__27680;
count__27677 = G__27681;
i__27678 = G__27682;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27675);
if(temp__5720__auto__){
var seq__27675__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27675__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27675__$1);
var G__27683 = cljs.core.chunk_rest.call(null,seq__27675__$1);
var G__27684 = c__4550__auto__;
var G__27685 = cljs.core.count.call(null,c__4550__auto__);
var G__27686 = (0);
seq__27675 = G__27683;
chunk__27676 = G__27684;
count__27677 = G__27685;
i__27678 = G__27686;
continue;
} else {
var param = cljs.core.first.call(null,seq__27675__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27687 = cljs.core.next.call(null,seq__27675__$1);
var G__27688 = null;
var G__27689 = (0);
var G__27690 = (0);
seq__27675 = G__27687;
chunk__27676 = G__27688;
count__27677 = G__27689;
i__27678 = G__27690;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__27691){
var map__27692 = p__27691;
var map__27692__$1 = (((((!((map__27692 == null))))?(((((map__27692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27692):map__27692);
var expr = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__27694){
var map__27695 = p__27694;
var map__27695__$1 = (((((!((map__27695 == null))))?(((((map__27695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27695):map__27695);
var f = map__27695__$1;
var expr = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_27705__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27706 = cljs.compiler.munge.call(null,name_27705__$1);
var delegate_name_27707 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27706),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_27707," = function (");

var seq__27697_27708 = cljs.core.seq.call(null,params);
var chunk__27698_27709 = null;
var count__27699_27710 = (0);
var i__27700_27711 = (0);
while(true){
if((i__27700_27711 < count__27699_27710)){
var param_27712 = cljs.core._nth.call(null,chunk__27698_27709,i__27700_27711);
cljs.compiler.emit.call(null,param_27712);

if(cljs.core._EQ_.call(null,param_27712,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27713 = seq__27697_27708;
var G__27714 = chunk__27698_27709;
var G__27715 = count__27699_27710;
var G__27716 = (i__27700_27711 + (1));
seq__27697_27708 = G__27713;
chunk__27698_27709 = G__27714;
count__27699_27710 = G__27715;
i__27700_27711 = G__27716;
continue;
} else {
var temp__5720__auto___27717 = cljs.core.seq.call(null,seq__27697_27708);
if(temp__5720__auto___27717){
var seq__27697_27718__$1 = temp__5720__auto___27717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27697_27718__$1)){
var c__4550__auto___27719 = cljs.core.chunk_first.call(null,seq__27697_27718__$1);
var G__27720 = cljs.core.chunk_rest.call(null,seq__27697_27718__$1);
var G__27721 = c__4550__auto___27719;
var G__27722 = cljs.core.count.call(null,c__4550__auto___27719);
var G__27723 = (0);
seq__27697_27708 = G__27720;
chunk__27698_27709 = G__27721;
count__27699_27710 = G__27722;
i__27700_27711 = G__27723;
continue;
} else {
var param_27724 = cljs.core.first.call(null,seq__27697_27718__$1);
cljs.compiler.emit.call(null,param_27724);

if(cljs.core._EQ_.call(null,param_27724,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27725 = cljs.core.next.call(null,seq__27697_27718__$1);
var G__27726 = null;
var G__27727 = (0);
var G__27728 = (0);
seq__27697_27708 = G__27725;
chunk__27698_27709 = G__27726;
count__27699_27710 = G__27727;
i__27700_27711 = G__27728;
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

cljs.compiler.emitln.call(null,"var ",mname_27706," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_27729 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_27729,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_27707,".call(this,");

var seq__27701_27730 = cljs.core.seq.call(null,params);
var chunk__27702_27731 = null;
var count__27703_27732 = (0);
var i__27704_27733 = (0);
while(true){
if((i__27704_27733 < count__27703_27732)){
var param_27734 = cljs.core._nth.call(null,chunk__27702_27731,i__27704_27733);
cljs.compiler.emit.call(null,param_27734);

if(cljs.core._EQ_.call(null,param_27734,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27735 = seq__27701_27730;
var G__27736 = chunk__27702_27731;
var G__27737 = count__27703_27732;
var G__27738 = (i__27704_27733 + (1));
seq__27701_27730 = G__27735;
chunk__27702_27731 = G__27736;
count__27703_27732 = G__27737;
i__27704_27733 = G__27738;
continue;
} else {
var temp__5720__auto___27739 = cljs.core.seq.call(null,seq__27701_27730);
if(temp__5720__auto___27739){
var seq__27701_27740__$1 = temp__5720__auto___27739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27701_27740__$1)){
var c__4550__auto___27741 = cljs.core.chunk_first.call(null,seq__27701_27740__$1);
var G__27742 = cljs.core.chunk_rest.call(null,seq__27701_27740__$1);
var G__27743 = c__4550__auto___27741;
var G__27744 = cljs.core.count.call(null,c__4550__auto___27741);
var G__27745 = (0);
seq__27701_27730 = G__27742;
chunk__27702_27731 = G__27743;
count__27703_27732 = G__27744;
i__27704_27733 = G__27745;
continue;
} else {
var param_27746 = cljs.core.first.call(null,seq__27701_27740__$1);
cljs.compiler.emit.call(null,param_27746);

if(cljs.core._EQ_.call(null,param_27746,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27747 = cljs.core.next.call(null,seq__27701_27740__$1);
var G__27748 = null;
var G__27749 = (0);
var G__27750 = (0);
seq__27701_27730 = G__27747;
chunk__27702_27731 = G__27748;
count__27703_27732 = G__27749;
i__27704_27733 = G__27750;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_27706,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_27706,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_27705__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_27706,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_27707,";");

cljs.compiler.emitln.call(null,"return ",mname_27706,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__27754){
var map__27755 = p__27754;
var map__27755__$1 = (((((!((map__27755 == null))))?(((((map__27755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27755):map__27755);
var variadic = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27751_SHARP_){
var and__4120__auto__ = p1__27751_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__27751_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_27808__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27809 = cljs.compiler.munge.call(null,name_27808__$1);
var maxparams_27810 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_27811 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_27808__$1,mname_27809,maxparams_27810,loop_locals,map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27809),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_27808__$1,mname_27809,maxparams_27810,loop_locals,map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_27812 = cljs.core.sort_by.call(null,((function (name_27808__$1,mname_27809,maxparams_27810,mmap_27811,loop_locals,map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27752_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27752_SHARP_)));
});})(name_27808__$1,mname_27809,maxparams_27810,mmap_27811,loop_locals,map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_27811));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_27809," = null;");

var seq__27757_27813 = cljs.core.seq.call(null,ms_27812);
var chunk__27758_27814 = null;
var count__27759_27815 = (0);
var i__27760_27816 = (0);
while(true){
if((i__27760_27816 < count__27759_27815)){
var vec__27767_27817 = cljs.core._nth.call(null,chunk__27758_27814,i__27760_27816);
var n_27818 = cljs.core.nth.call(null,vec__27767_27817,(0),null);
var meth_27819 = cljs.core.nth.call(null,vec__27767_27817,(1),null);
cljs.compiler.emits.call(null,"var ",n_27818," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27819))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27819);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27819);
}

cljs.compiler.emitln.call(null,";");


var G__27820 = seq__27757_27813;
var G__27821 = chunk__27758_27814;
var G__27822 = count__27759_27815;
var G__27823 = (i__27760_27816 + (1));
seq__27757_27813 = G__27820;
chunk__27758_27814 = G__27821;
count__27759_27815 = G__27822;
i__27760_27816 = G__27823;
continue;
} else {
var temp__5720__auto___27824 = cljs.core.seq.call(null,seq__27757_27813);
if(temp__5720__auto___27824){
var seq__27757_27825__$1 = temp__5720__auto___27824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27757_27825__$1)){
var c__4550__auto___27826 = cljs.core.chunk_first.call(null,seq__27757_27825__$1);
var G__27827 = cljs.core.chunk_rest.call(null,seq__27757_27825__$1);
var G__27828 = c__4550__auto___27826;
var G__27829 = cljs.core.count.call(null,c__4550__auto___27826);
var G__27830 = (0);
seq__27757_27813 = G__27827;
chunk__27758_27814 = G__27828;
count__27759_27815 = G__27829;
i__27760_27816 = G__27830;
continue;
} else {
var vec__27770_27831 = cljs.core.first.call(null,seq__27757_27825__$1);
var n_27832 = cljs.core.nth.call(null,vec__27770_27831,(0),null);
var meth_27833 = cljs.core.nth.call(null,vec__27770_27831,(1),null);
cljs.compiler.emits.call(null,"var ",n_27832," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27833))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27833);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27833);
}

cljs.compiler.emitln.call(null,";");


var G__27834 = cljs.core.next.call(null,seq__27757_27825__$1);
var G__27835 = null;
var G__27836 = (0);
var G__27837 = (0);
seq__27757_27813 = G__27834;
chunk__27758_27814 = G__27835;
count__27759_27815 = G__27836;
i__27760_27816 = G__27837;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_27809," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_27810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_27810)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_27810));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__27773_27838 = cljs.core.seq.call(null,ms_27812);
var chunk__27774_27839 = null;
var count__27775_27840 = (0);
var i__27776_27841 = (0);
while(true){
if((i__27776_27841 < count__27775_27840)){
var vec__27783_27842 = cljs.core._nth.call(null,chunk__27774_27839,i__27776_27841);
var n_27843 = cljs.core.nth.call(null,vec__27783_27842,(0),null);
var meth_27844 = cljs.core.nth.call(null,vec__27783_27842,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27844))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27845 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27845," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27846 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27845," = new cljs.core.IndexedSeq(",a_27846,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27843,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27810)),(((cljs.core.count.call(null,maxparams_27810) > (1)))?", ":null),restarg_27845,");");
} else {
var pcnt_27847 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27844));
cljs.compiler.emitln.call(null,"case ",pcnt_27847,":");

cljs.compiler.emitln.call(null,"return ",n_27843,".call(this",(((pcnt_27847 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27847,maxparams_27810)),null,(1),null)),(2),null))),");");
}


var G__27848 = seq__27773_27838;
var G__27849 = chunk__27774_27839;
var G__27850 = count__27775_27840;
var G__27851 = (i__27776_27841 + (1));
seq__27773_27838 = G__27848;
chunk__27774_27839 = G__27849;
count__27775_27840 = G__27850;
i__27776_27841 = G__27851;
continue;
} else {
var temp__5720__auto___27852 = cljs.core.seq.call(null,seq__27773_27838);
if(temp__5720__auto___27852){
var seq__27773_27853__$1 = temp__5720__auto___27852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27773_27853__$1)){
var c__4550__auto___27854 = cljs.core.chunk_first.call(null,seq__27773_27853__$1);
var G__27855 = cljs.core.chunk_rest.call(null,seq__27773_27853__$1);
var G__27856 = c__4550__auto___27854;
var G__27857 = cljs.core.count.call(null,c__4550__auto___27854);
var G__27858 = (0);
seq__27773_27838 = G__27855;
chunk__27774_27839 = G__27856;
count__27775_27840 = G__27857;
i__27776_27841 = G__27858;
continue;
} else {
var vec__27786_27859 = cljs.core.first.call(null,seq__27773_27853__$1);
var n_27860 = cljs.core.nth.call(null,vec__27786_27859,(0),null);
var meth_27861 = cljs.core.nth.call(null,vec__27786_27859,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27861))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27862 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27862," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27863 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27862," = new cljs.core.IndexedSeq(",a_27863,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27860,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27810)),(((cljs.core.count.call(null,maxparams_27810) > (1)))?", ":null),restarg_27862,");");
} else {
var pcnt_27864 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27861));
cljs.compiler.emitln.call(null,"case ",pcnt_27864,":");

cljs.compiler.emitln.call(null,"return ",n_27860,".call(this",(((pcnt_27864 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27864,maxparams_27810)),null,(1),null)),(2),null))),");");
}


var G__27865 = cljs.core.next.call(null,seq__27773_27853__$1);
var G__27866 = null;
var G__27867 = (0);
var G__27868 = (0);
seq__27773_27838 = G__27865;
chunk__27774_27839 = G__27866;
count__27775_27840 = G__27867;
i__27776_27841 = G__27868;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_27869 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_27812)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_27869,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_27809,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_27809,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_27808__$1,mname_27809,maxparams_27810,mmap_27811,ms_27812,loop_locals,map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27753_SHARP_){
var vec__27789 = p1__27753_SHARP_;
var n = cljs.core.nth.call(null,vec__27789,(0),null);
var m = cljs.core.nth.call(null,vec__27789,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_27808__$1,mname_27809,maxparams_27810,mmap_27811,ms_27812,loop_locals,map__27755,map__27755__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_27812),".cljs$lang$applyTo;");
} else {
}

var seq__27792_27870 = cljs.core.seq.call(null,ms_27812);
var chunk__27793_27871 = null;
var count__27794_27872 = (0);
var i__27795_27873 = (0);
while(true){
if((i__27795_27873 < count__27794_27872)){
var vec__27802_27874 = cljs.core._nth.call(null,chunk__27793_27871,i__27795_27873);
var n_27875 = cljs.core.nth.call(null,vec__27802_27874,(0),null);
var meth_27876 = cljs.core.nth.call(null,vec__27802_27874,(1),null);
var c_27877 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27876));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27876))){
cljs.compiler.emitln.call(null,mname_27809,".cljs$core$IFn$_invoke$arity$variadic = ",n_27875,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27809,".cljs$core$IFn$_invoke$arity$",c_27877," = ",n_27875,";");
}


var G__27878 = seq__27792_27870;
var G__27879 = chunk__27793_27871;
var G__27880 = count__27794_27872;
var G__27881 = (i__27795_27873 + (1));
seq__27792_27870 = G__27878;
chunk__27793_27871 = G__27879;
count__27794_27872 = G__27880;
i__27795_27873 = G__27881;
continue;
} else {
var temp__5720__auto___27882 = cljs.core.seq.call(null,seq__27792_27870);
if(temp__5720__auto___27882){
var seq__27792_27883__$1 = temp__5720__auto___27882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27792_27883__$1)){
var c__4550__auto___27884 = cljs.core.chunk_first.call(null,seq__27792_27883__$1);
var G__27885 = cljs.core.chunk_rest.call(null,seq__27792_27883__$1);
var G__27886 = c__4550__auto___27884;
var G__27887 = cljs.core.count.call(null,c__4550__auto___27884);
var G__27888 = (0);
seq__27792_27870 = G__27885;
chunk__27793_27871 = G__27886;
count__27794_27872 = G__27887;
i__27795_27873 = G__27888;
continue;
} else {
var vec__27805_27889 = cljs.core.first.call(null,seq__27792_27883__$1);
var n_27890 = cljs.core.nth.call(null,vec__27805_27889,(0),null);
var meth_27891 = cljs.core.nth.call(null,vec__27805_27889,(1),null);
var c_27892 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27891));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27891))){
cljs.compiler.emitln.call(null,mname_27809,".cljs$core$IFn$_invoke$arity$variadic = ",n_27890,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27809,".cljs$core$IFn$_invoke$arity$",c_27892," = ",n_27890,";");
}


var G__27893 = cljs.core.next.call(null,seq__27792_27883__$1);
var G__27894 = null;
var G__27895 = (0);
var G__27896 = (0);
seq__27792_27870 = G__27893;
chunk__27793_27871 = G__27894;
count__27794_27872 = G__27895;
i__27795_27873 = G__27896;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_27809,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27897){
var map__27898 = p__27897;
var map__27898__$1 = (((((!((map__27898 == null))))?(((((map__27898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27898):map__27898);
var statements = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__27900_27904 = cljs.core.seq.call(null,statements);
var chunk__27901_27905 = null;
var count__27902_27906 = (0);
var i__27903_27907 = (0);
while(true){
if((i__27903_27907 < count__27902_27906)){
var s_27908 = cljs.core._nth.call(null,chunk__27901_27905,i__27903_27907);
cljs.compiler.emitln.call(null,s_27908);


var G__27909 = seq__27900_27904;
var G__27910 = chunk__27901_27905;
var G__27911 = count__27902_27906;
var G__27912 = (i__27903_27907 + (1));
seq__27900_27904 = G__27909;
chunk__27901_27905 = G__27910;
count__27902_27906 = G__27911;
i__27903_27907 = G__27912;
continue;
} else {
var temp__5720__auto___27913 = cljs.core.seq.call(null,seq__27900_27904);
if(temp__5720__auto___27913){
var seq__27900_27914__$1 = temp__5720__auto___27913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27900_27914__$1)){
var c__4550__auto___27915 = cljs.core.chunk_first.call(null,seq__27900_27914__$1);
var G__27916 = cljs.core.chunk_rest.call(null,seq__27900_27914__$1);
var G__27917 = c__4550__auto___27915;
var G__27918 = cljs.core.count.call(null,c__4550__auto___27915);
var G__27919 = (0);
seq__27900_27904 = G__27916;
chunk__27901_27905 = G__27917;
count__27902_27906 = G__27918;
i__27903_27907 = G__27919;
continue;
} else {
var s_27920 = cljs.core.first.call(null,seq__27900_27914__$1);
cljs.compiler.emitln.call(null,s_27920);


var G__27921 = cljs.core.next.call(null,seq__27900_27914__$1);
var G__27922 = null;
var G__27923 = (0);
var G__27924 = (0);
seq__27900_27904 = G__27921;
chunk__27901_27905 = G__27922;
count__27902_27906 = G__27923;
i__27903_27907 = G__27924;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__27925){
var map__27926 = p__27925;
var map__27926__$1 = (((((!((map__27926 == null))))?(((((map__27926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27926):map__27926);
var try$ = cljs.core.get.call(null,map__27926__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__27926__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__27926__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__27926__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__27926__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27928,is_loop){
var map__27929 = p__27928;
var map__27929__$1 = (((((!((map__27929 == null))))?(((((map__27929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27929):map__27929);
var expr = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__27931_27945 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__27932_27946 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__27931_27945,context,map__27929,map__27929__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__27931_27945,context,map__27929,map__27929__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__27932_27946;

try{var seq__27933_27947 = cljs.core.seq.call(null,bindings);
var chunk__27934_27948 = null;
var count__27935_27949 = (0);
var i__27936_27950 = (0);
while(true){
if((i__27936_27950 < count__27935_27949)){
var map__27941_27951 = cljs.core._nth.call(null,chunk__27934_27948,i__27936_27950);
var map__27941_27952__$1 = (((((!((map__27941_27951 == null))))?(((((map__27941_27951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27941_27951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27941_27951):map__27941_27951);
var binding_27953 = map__27941_27952__$1;
var init_27954 = cljs.core.get.call(null,map__27941_27952__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27953);

cljs.compiler.emitln.call(null," = ",init_27954,";");


var G__27955 = seq__27933_27947;
var G__27956 = chunk__27934_27948;
var G__27957 = count__27935_27949;
var G__27958 = (i__27936_27950 + (1));
seq__27933_27947 = G__27955;
chunk__27934_27948 = G__27956;
count__27935_27949 = G__27957;
i__27936_27950 = G__27958;
continue;
} else {
var temp__5720__auto___27959 = cljs.core.seq.call(null,seq__27933_27947);
if(temp__5720__auto___27959){
var seq__27933_27960__$1 = temp__5720__auto___27959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27933_27960__$1)){
var c__4550__auto___27961 = cljs.core.chunk_first.call(null,seq__27933_27960__$1);
var G__27962 = cljs.core.chunk_rest.call(null,seq__27933_27960__$1);
var G__27963 = c__4550__auto___27961;
var G__27964 = cljs.core.count.call(null,c__4550__auto___27961);
var G__27965 = (0);
seq__27933_27947 = G__27962;
chunk__27934_27948 = G__27963;
count__27935_27949 = G__27964;
i__27936_27950 = G__27965;
continue;
} else {
var map__27943_27966 = cljs.core.first.call(null,seq__27933_27960__$1);
var map__27943_27967__$1 = (((((!((map__27943_27966 == null))))?(((((map__27943_27966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27943_27966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27943_27966):map__27943_27966);
var binding_27968 = map__27943_27967__$1;
var init_27969 = cljs.core.get.call(null,map__27943_27967__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27968);

cljs.compiler.emitln.call(null," = ",init_27969,";");


var G__27970 = cljs.core.next.call(null,seq__27933_27960__$1);
var G__27971 = null;
var G__27972 = (0);
var G__27973 = (0);
seq__27933_27947 = G__27970;
chunk__27934_27948 = G__27971;
count__27935_27949 = G__27972;
i__27936_27950 = G__27973;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__27931_27945;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__27974){
var map__27975 = p__27974;
var map__27975__$1 = (((((!((map__27975 == null))))?(((((map__27975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27975):map__27975);
var frame = cljs.core.get.call(null,map__27975__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__27975__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__27975__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___27977 = cljs.core.count.call(null,exprs);
var i_27978 = (0);
while(true){
if((i_27978 < n__4607__auto___27977)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_27978)," = ",exprs.call(null,i_27978),";");

var G__27979 = (i_27978 + (1));
i_27978 = G__27979;
continue;
} else {
}
break;
}

var n__4607__auto___27980 = cljs.core.count.call(null,exprs);
var i_27981 = (0);
while(true){
if((i_27981 < n__4607__auto___27980)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_27981))," = ",temps.call(null,i_27981),";");

var G__27982 = (i_27981 + (1));
i_27981 = G__27982;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__27983){
var map__27984 = p__27983;
var map__27984__$1 = (((((!((map__27984 == null))))?(((((map__27984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27984):map__27984);
var expr = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27984__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__27986_27998 = cljs.core.seq.call(null,bindings);
var chunk__27987_27999 = null;
var count__27988_28000 = (0);
var i__27989_28001 = (0);
while(true){
if((i__27989_28001 < count__27988_28000)){
var map__27994_28002 = cljs.core._nth.call(null,chunk__27987_27999,i__27989_28001);
var map__27994_28003__$1 = (((((!((map__27994_28002 == null))))?(((((map__27994_28002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27994_28002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27994_28002):map__27994_28002);
var binding_28004 = map__27994_28003__$1;
var init_28005 = cljs.core.get.call(null,map__27994_28003__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28004)," = ",init_28005,";");


var G__28006 = seq__27986_27998;
var G__28007 = chunk__27987_27999;
var G__28008 = count__27988_28000;
var G__28009 = (i__27989_28001 + (1));
seq__27986_27998 = G__28006;
chunk__27987_27999 = G__28007;
count__27988_28000 = G__28008;
i__27989_28001 = G__28009;
continue;
} else {
var temp__5720__auto___28010 = cljs.core.seq.call(null,seq__27986_27998);
if(temp__5720__auto___28010){
var seq__27986_28011__$1 = temp__5720__auto___28010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27986_28011__$1)){
var c__4550__auto___28012 = cljs.core.chunk_first.call(null,seq__27986_28011__$1);
var G__28013 = cljs.core.chunk_rest.call(null,seq__27986_28011__$1);
var G__28014 = c__4550__auto___28012;
var G__28015 = cljs.core.count.call(null,c__4550__auto___28012);
var G__28016 = (0);
seq__27986_27998 = G__28013;
chunk__27987_27999 = G__28014;
count__27988_28000 = G__28015;
i__27989_28001 = G__28016;
continue;
} else {
var map__27996_28017 = cljs.core.first.call(null,seq__27986_28011__$1);
var map__27996_28018__$1 = (((((!((map__27996_28017 == null))))?(((((map__27996_28017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27996_28017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27996_28017):map__27996_28017);
var binding_28019 = map__27996_28018__$1;
var init_28020 = cljs.core.get.call(null,map__27996_28018__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28019)," = ",init_28020,";");


var G__28021 = cljs.core.next.call(null,seq__27986_28011__$1);
var G__28022 = null;
var G__28023 = (0);
var G__28024 = (0);
seq__27986_27998 = G__28021;
chunk__27987_27999 = G__28022;
count__27988_28000 = G__28023;
i__27989_28001 = G__28024;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__28027){
var map__28028 = p__28027;
var map__28028__$1 = (((((!((map__28028 == null))))?(((((map__28028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28028):map__28028);
var expr = map__28028__$1;
var f = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28030 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env){
return (function (p1__28025_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28025_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env){
return (function (p1__28026_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28026_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28028,map__28028__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__28030,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__28030,(1),null);
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_28033 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_28033,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_28034 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_28034,args)),(((mfa_28034 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_28034,args)),"], 0))");
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
var fprop_28035 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_28035," ? ",f__$1,fprop_28035,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_28035," ? ",f__$1,fprop_28035,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__28036){
var map__28037 = p__28036;
var map__28037__$1 = (((((!((map__28037 == null))))?(((((map__28037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28037):map__28037);
var ctor = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__28039){
var map__28040 = p__28039;
var map__28040__$1 = (((((!((map__28040 == null))))?(((((map__28040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28040):map__28040);
var target = cljs.core.get.call(null,map__28040__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__28040__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__28040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
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
var map__28042 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28042__$1 = (((((!((map__28042 == null))))?(((((map__28042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28042):map__28042);
var options = cljs.core.get.call(null,map__28042__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__28042__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__28043 = options;
var map__28043__$1 = (((((!((map__28043 == null))))?(((((map__28043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28043):map__28043);
var target = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__28044 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__28049 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__28049__$1 = (((((!((map__28049 == null))))?(((((map__28049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28049):map__28049);
var node_libs = cljs.core.get.call(null,map__28049__$1,true);
var libs_to_load = cljs.core.get.call(null,map__28049__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__28044,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__28044,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__28051_28071 = cljs.core.seq.call(null,libs_to_load);
var chunk__28052_28072 = null;
var count__28053_28073 = (0);
var i__28054_28074 = (0);
while(true){
if((i__28054_28074 < count__28053_28073)){
var lib_28075 = cljs.core._nth.call(null,chunk__28052_28072,i__28054_28074);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28075)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28075),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28075),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28075),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28075),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28075,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28075),"');");
}

}
}
}


var G__28076 = seq__28051_28071;
var G__28077 = chunk__28052_28072;
var G__28078 = count__28053_28073;
var G__28079 = (i__28054_28074 + (1));
seq__28051_28071 = G__28076;
chunk__28052_28072 = G__28077;
count__28053_28073 = G__28078;
i__28054_28074 = G__28079;
continue;
} else {
var temp__5720__auto___28080 = cljs.core.seq.call(null,seq__28051_28071);
if(temp__5720__auto___28080){
var seq__28051_28081__$1 = temp__5720__auto___28080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28051_28081__$1)){
var c__4550__auto___28082 = cljs.core.chunk_first.call(null,seq__28051_28081__$1);
var G__28083 = cljs.core.chunk_rest.call(null,seq__28051_28081__$1);
var G__28084 = c__4550__auto___28082;
var G__28085 = cljs.core.count.call(null,c__4550__auto___28082);
var G__28086 = (0);
seq__28051_28071 = G__28083;
chunk__28052_28072 = G__28084;
count__28053_28073 = G__28085;
i__28054_28074 = G__28086;
continue;
} else {
var lib_28087 = cljs.core.first.call(null,seq__28051_28081__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28087)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28087),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28087),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28087),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28087),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28087,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28087),"');");
}

}
}
}


var G__28088 = cljs.core.next.call(null,seq__28051_28081__$1);
var G__28089 = null;
var G__28090 = (0);
var G__28091 = (0);
seq__28051_28071 = G__28088;
chunk__28052_28072 = G__28089;
count__28053_28073 = G__28090;
i__28054_28074 = G__28091;
continue;
}
} else {
}
}
break;
}

var seq__28055_28092 = cljs.core.seq.call(null,node_libs);
var chunk__28056_28093 = null;
var count__28057_28094 = (0);
var i__28058_28095 = (0);
while(true){
if((i__28058_28095 < count__28057_28094)){
var lib_28096 = cljs.core._nth.call(null,chunk__28056_28093,i__28058_28095);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28096)," = require('",lib_28096,"');");


var G__28097 = seq__28055_28092;
var G__28098 = chunk__28056_28093;
var G__28099 = count__28057_28094;
var G__28100 = (i__28058_28095 + (1));
seq__28055_28092 = G__28097;
chunk__28056_28093 = G__28098;
count__28057_28094 = G__28099;
i__28058_28095 = G__28100;
continue;
} else {
var temp__5720__auto___28101 = cljs.core.seq.call(null,seq__28055_28092);
if(temp__5720__auto___28101){
var seq__28055_28102__$1 = temp__5720__auto___28101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28055_28102__$1)){
var c__4550__auto___28103 = cljs.core.chunk_first.call(null,seq__28055_28102__$1);
var G__28104 = cljs.core.chunk_rest.call(null,seq__28055_28102__$1);
var G__28105 = c__4550__auto___28103;
var G__28106 = cljs.core.count.call(null,c__4550__auto___28103);
var G__28107 = (0);
seq__28055_28092 = G__28104;
chunk__28056_28093 = G__28105;
count__28057_28094 = G__28106;
i__28058_28095 = G__28107;
continue;
} else {
var lib_28108 = cljs.core.first.call(null,seq__28055_28102__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28108)," = require('",lib_28108,"');");


var G__28109 = cljs.core.next.call(null,seq__28055_28102__$1);
var G__28110 = null;
var G__28111 = (0);
var G__28112 = (0);
seq__28055_28092 = G__28109;
chunk__28056_28093 = G__28110;
count__28057_28094 = G__28111;
i__28058_28095 = G__28112;
continue;
}
} else {
}
}
break;
}

var seq__28059_28113 = cljs.core.seq.call(null,global_exports_libs);
var chunk__28060_28114 = null;
var count__28061_28115 = (0);
var i__28062_28116 = (0);
while(true){
if((i__28062_28116 < count__28061_28115)){
var lib_28117 = cljs.core._nth.call(null,chunk__28060_28114,i__28062_28116);
var map__28067_28118 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28117));
var map__28067_28119__$1 = (((((!((map__28067_28118 == null))))?(((((map__28067_28118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28067_28118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28067_28118):map__28067_28118);
var global_exports_28120 = cljs.core.get.call(null,map__28067_28119__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28120,lib_28117);


var G__28121 = seq__28059_28113;
var G__28122 = chunk__28060_28114;
var G__28123 = count__28061_28115;
var G__28124 = (i__28062_28116 + (1));
seq__28059_28113 = G__28121;
chunk__28060_28114 = G__28122;
count__28061_28115 = G__28123;
i__28062_28116 = G__28124;
continue;
} else {
var temp__5720__auto___28125 = cljs.core.seq.call(null,seq__28059_28113);
if(temp__5720__auto___28125){
var seq__28059_28126__$1 = temp__5720__auto___28125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28059_28126__$1)){
var c__4550__auto___28127 = cljs.core.chunk_first.call(null,seq__28059_28126__$1);
var G__28128 = cljs.core.chunk_rest.call(null,seq__28059_28126__$1);
var G__28129 = c__4550__auto___28127;
var G__28130 = cljs.core.count.call(null,c__4550__auto___28127);
var G__28131 = (0);
seq__28059_28113 = G__28128;
chunk__28060_28114 = G__28129;
count__28061_28115 = G__28130;
i__28062_28116 = G__28131;
continue;
} else {
var lib_28132 = cljs.core.first.call(null,seq__28059_28126__$1);
var map__28069_28133 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28132));
var map__28069_28134__$1 = (((((!((map__28069_28133 == null))))?(((((map__28069_28133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28069_28133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28069_28133):map__28069_28133);
var global_exports_28135 = cljs.core.get.call(null,map__28069_28134__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28135,lib_28132);


var G__28136 = cljs.core.next.call(null,seq__28059_28126__$1);
var G__28137 = null;
var G__28138 = (0);
var G__28139 = (0);
seq__28059_28113 = G__28136;
chunk__28060_28114 = G__28137;
count__28061_28115 = G__28138;
i__28062_28116 = G__28139;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__28140){
var map__28141 = p__28140;
var map__28141__$1 = (((((!((map__28141 == null))))?(((((map__28141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28141):map__28141);
var name = cljs.core.get.call(null,map__28141__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28141__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28141__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28141__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28141__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28141__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28141__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__28143){
var map__28144 = p__28143;
var map__28144__$1 = (((((!((map__28144 == null))))?(((((map__28144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28144):map__28144);
var name = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__28146){
var map__28147 = p__28146;
var map__28147__$1 = (((((!((map__28147 == null))))?(((((map__28147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28147):map__28147);
var t = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28149_28173 = cljs.core.seq.call(null,protocols);
var chunk__28150_28174 = null;
var count__28151_28175 = (0);
var i__28152_28176 = (0);
while(true){
if((i__28152_28176 < count__28151_28175)){
var protocol_28177 = cljs.core._nth.call(null,chunk__28150_28174,i__28152_28176);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28177)),"}");


var G__28178 = seq__28149_28173;
var G__28179 = chunk__28150_28174;
var G__28180 = count__28151_28175;
var G__28181 = (i__28152_28176 + (1));
seq__28149_28173 = G__28178;
chunk__28150_28174 = G__28179;
count__28151_28175 = G__28180;
i__28152_28176 = G__28181;
continue;
} else {
var temp__5720__auto___28182 = cljs.core.seq.call(null,seq__28149_28173);
if(temp__5720__auto___28182){
var seq__28149_28183__$1 = temp__5720__auto___28182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28149_28183__$1)){
var c__4550__auto___28184 = cljs.core.chunk_first.call(null,seq__28149_28183__$1);
var G__28185 = cljs.core.chunk_rest.call(null,seq__28149_28183__$1);
var G__28186 = c__4550__auto___28184;
var G__28187 = cljs.core.count.call(null,c__4550__auto___28184);
var G__28188 = (0);
seq__28149_28173 = G__28185;
chunk__28150_28174 = G__28186;
count__28151_28175 = G__28187;
i__28152_28176 = G__28188;
continue;
} else {
var protocol_28189 = cljs.core.first.call(null,seq__28149_28183__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28189)),"}");


var G__28190 = cljs.core.next.call(null,seq__28149_28183__$1);
var G__28191 = null;
var G__28192 = (0);
var G__28193 = (0);
seq__28149_28173 = G__28190;
chunk__28150_28174 = G__28191;
count__28151_28175 = G__28192;
i__28152_28176 = G__28193;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28153_28194 = cljs.core.seq.call(null,fields__$1);
var chunk__28154_28195 = null;
var count__28155_28196 = (0);
var i__28156_28197 = (0);
while(true){
if((i__28156_28197 < count__28155_28196)){
var fld_28198 = cljs.core._nth.call(null,chunk__28154_28195,i__28156_28197);
cljs.compiler.emitln.call(null,"this.",fld_28198," = ",fld_28198,";");


var G__28199 = seq__28153_28194;
var G__28200 = chunk__28154_28195;
var G__28201 = count__28155_28196;
var G__28202 = (i__28156_28197 + (1));
seq__28153_28194 = G__28199;
chunk__28154_28195 = G__28200;
count__28155_28196 = G__28201;
i__28156_28197 = G__28202;
continue;
} else {
var temp__5720__auto___28203 = cljs.core.seq.call(null,seq__28153_28194);
if(temp__5720__auto___28203){
var seq__28153_28204__$1 = temp__5720__auto___28203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28153_28204__$1)){
var c__4550__auto___28205 = cljs.core.chunk_first.call(null,seq__28153_28204__$1);
var G__28206 = cljs.core.chunk_rest.call(null,seq__28153_28204__$1);
var G__28207 = c__4550__auto___28205;
var G__28208 = cljs.core.count.call(null,c__4550__auto___28205);
var G__28209 = (0);
seq__28153_28194 = G__28206;
chunk__28154_28195 = G__28207;
count__28155_28196 = G__28208;
i__28156_28197 = G__28209;
continue;
} else {
var fld_28210 = cljs.core.first.call(null,seq__28153_28204__$1);
cljs.compiler.emitln.call(null,"this.",fld_28210," = ",fld_28210,";");


var G__28211 = cljs.core.next.call(null,seq__28153_28204__$1);
var G__28212 = null;
var G__28213 = (0);
var G__28214 = (0);
seq__28153_28194 = G__28211;
chunk__28154_28195 = G__28212;
count__28155_28196 = G__28213;
i__28156_28197 = G__28214;
continue;
}
} else {
}
}
break;
}

var seq__28157_28215 = cljs.core.seq.call(null,pmasks);
var chunk__28158_28216 = null;
var count__28159_28217 = (0);
var i__28160_28218 = (0);
while(true){
if((i__28160_28218 < count__28159_28217)){
var vec__28167_28219 = cljs.core._nth.call(null,chunk__28158_28216,i__28160_28218);
var pno_28220 = cljs.core.nth.call(null,vec__28167_28219,(0),null);
var pmask_28221 = cljs.core.nth.call(null,vec__28167_28219,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28220,"$ = ",pmask_28221,";");


var G__28222 = seq__28157_28215;
var G__28223 = chunk__28158_28216;
var G__28224 = count__28159_28217;
var G__28225 = (i__28160_28218 + (1));
seq__28157_28215 = G__28222;
chunk__28158_28216 = G__28223;
count__28159_28217 = G__28224;
i__28160_28218 = G__28225;
continue;
} else {
var temp__5720__auto___28226 = cljs.core.seq.call(null,seq__28157_28215);
if(temp__5720__auto___28226){
var seq__28157_28227__$1 = temp__5720__auto___28226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28157_28227__$1)){
var c__4550__auto___28228 = cljs.core.chunk_first.call(null,seq__28157_28227__$1);
var G__28229 = cljs.core.chunk_rest.call(null,seq__28157_28227__$1);
var G__28230 = c__4550__auto___28228;
var G__28231 = cljs.core.count.call(null,c__4550__auto___28228);
var G__28232 = (0);
seq__28157_28215 = G__28229;
chunk__28158_28216 = G__28230;
count__28159_28217 = G__28231;
i__28160_28218 = G__28232;
continue;
} else {
var vec__28170_28233 = cljs.core.first.call(null,seq__28157_28227__$1);
var pno_28234 = cljs.core.nth.call(null,vec__28170_28233,(0),null);
var pmask_28235 = cljs.core.nth.call(null,vec__28170_28233,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28234,"$ = ",pmask_28235,";");


var G__28236 = cljs.core.next.call(null,seq__28157_28227__$1);
var G__28237 = null;
var G__28238 = (0);
var G__28239 = (0);
seq__28157_28215 = G__28236;
chunk__28158_28216 = G__28237;
count__28159_28217 = G__28238;
i__28160_28218 = G__28239;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__28240){
var map__28241 = p__28240;
var map__28241__$1 = (((((!((map__28241 == null))))?(((((map__28241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28241):map__28241);
var t = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28243_28267 = cljs.core.seq.call(null,protocols);
var chunk__28244_28268 = null;
var count__28245_28269 = (0);
var i__28246_28270 = (0);
while(true){
if((i__28246_28270 < count__28245_28269)){
var protocol_28271 = cljs.core._nth.call(null,chunk__28244_28268,i__28246_28270);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28271)),"}");


var G__28272 = seq__28243_28267;
var G__28273 = chunk__28244_28268;
var G__28274 = count__28245_28269;
var G__28275 = (i__28246_28270 + (1));
seq__28243_28267 = G__28272;
chunk__28244_28268 = G__28273;
count__28245_28269 = G__28274;
i__28246_28270 = G__28275;
continue;
} else {
var temp__5720__auto___28276 = cljs.core.seq.call(null,seq__28243_28267);
if(temp__5720__auto___28276){
var seq__28243_28277__$1 = temp__5720__auto___28276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28243_28277__$1)){
var c__4550__auto___28278 = cljs.core.chunk_first.call(null,seq__28243_28277__$1);
var G__28279 = cljs.core.chunk_rest.call(null,seq__28243_28277__$1);
var G__28280 = c__4550__auto___28278;
var G__28281 = cljs.core.count.call(null,c__4550__auto___28278);
var G__28282 = (0);
seq__28243_28267 = G__28279;
chunk__28244_28268 = G__28280;
count__28245_28269 = G__28281;
i__28246_28270 = G__28282;
continue;
} else {
var protocol_28283 = cljs.core.first.call(null,seq__28243_28277__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28283)),"}");


var G__28284 = cljs.core.next.call(null,seq__28243_28277__$1);
var G__28285 = null;
var G__28286 = (0);
var G__28287 = (0);
seq__28243_28267 = G__28284;
chunk__28244_28268 = G__28285;
count__28245_28269 = G__28286;
i__28246_28270 = G__28287;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28247_28288 = cljs.core.seq.call(null,fields__$1);
var chunk__28248_28289 = null;
var count__28249_28290 = (0);
var i__28250_28291 = (0);
while(true){
if((i__28250_28291 < count__28249_28290)){
var fld_28292 = cljs.core._nth.call(null,chunk__28248_28289,i__28250_28291);
cljs.compiler.emitln.call(null,"this.",fld_28292," = ",fld_28292,";");


var G__28293 = seq__28247_28288;
var G__28294 = chunk__28248_28289;
var G__28295 = count__28249_28290;
var G__28296 = (i__28250_28291 + (1));
seq__28247_28288 = G__28293;
chunk__28248_28289 = G__28294;
count__28249_28290 = G__28295;
i__28250_28291 = G__28296;
continue;
} else {
var temp__5720__auto___28297 = cljs.core.seq.call(null,seq__28247_28288);
if(temp__5720__auto___28297){
var seq__28247_28298__$1 = temp__5720__auto___28297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28247_28298__$1)){
var c__4550__auto___28299 = cljs.core.chunk_first.call(null,seq__28247_28298__$1);
var G__28300 = cljs.core.chunk_rest.call(null,seq__28247_28298__$1);
var G__28301 = c__4550__auto___28299;
var G__28302 = cljs.core.count.call(null,c__4550__auto___28299);
var G__28303 = (0);
seq__28247_28288 = G__28300;
chunk__28248_28289 = G__28301;
count__28249_28290 = G__28302;
i__28250_28291 = G__28303;
continue;
} else {
var fld_28304 = cljs.core.first.call(null,seq__28247_28298__$1);
cljs.compiler.emitln.call(null,"this.",fld_28304," = ",fld_28304,";");


var G__28305 = cljs.core.next.call(null,seq__28247_28298__$1);
var G__28306 = null;
var G__28307 = (0);
var G__28308 = (0);
seq__28247_28288 = G__28305;
chunk__28248_28289 = G__28306;
count__28249_28290 = G__28307;
i__28250_28291 = G__28308;
continue;
}
} else {
}
}
break;
}

var seq__28251_28309 = cljs.core.seq.call(null,pmasks);
var chunk__28252_28310 = null;
var count__28253_28311 = (0);
var i__28254_28312 = (0);
while(true){
if((i__28254_28312 < count__28253_28311)){
var vec__28261_28313 = cljs.core._nth.call(null,chunk__28252_28310,i__28254_28312);
var pno_28314 = cljs.core.nth.call(null,vec__28261_28313,(0),null);
var pmask_28315 = cljs.core.nth.call(null,vec__28261_28313,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28314,"$ = ",pmask_28315,";");


var G__28316 = seq__28251_28309;
var G__28317 = chunk__28252_28310;
var G__28318 = count__28253_28311;
var G__28319 = (i__28254_28312 + (1));
seq__28251_28309 = G__28316;
chunk__28252_28310 = G__28317;
count__28253_28311 = G__28318;
i__28254_28312 = G__28319;
continue;
} else {
var temp__5720__auto___28320 = cljs.core.seq.call(null,seq__28251_28309);
if(temp__5720__auto___28320){
var seq__28251_28321__$1 = temp__5720__auto___28320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28251_28321__$1)){
var c__4550__auto___28322 = cljs.core.chunk_first.call(null,seq__28251_28321__$1);
var G__28323 = cljs.core.chunk_rest.call(null,seq__28251_28321__$1);
var G__28324 = c__4550__auto___28322;
var G__28325 = cljs.core.count.call(null,c__4550__auto___28322);
var G__28326 = (0);
seq__28251_28309 = G__28323;
chunk__28252_28310 = G__28324;
count__28253_28311 = G__28325;
i__28254_28312 = G__28326;
continue;
} else {
var vec__28264_28327 = cljs.core.first.call(null,seq__28251_28321__$1);
var pno_28328 = cljs.core.nth.call(null,vec__28264_28327,(0),null);
var pmask_28329 = cljs.core.nth.call(null,vec__28264_28327,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28328,"$ = ",pmask_28329,";");


var G__28330 = cljs.core.next.call(null,seq__28251_28321__$1);
var G__28331 = null;
var G__28332 = (0);
var G__28333 = (0);
seq__28251_28309 = G__28330;
chunk__28252_28310 = G__28331;
count__28253_28311 = G__28332;
i__28254_28312 = G__28333;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__28334){
var map__28335 = p__28334;
var map__28335__$1 = (((((!((map__28335 == null))))?(((((map__28335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28335):map__28335);
var target = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__28337){
var map__28338 = p__28337;
var map__28338__$1 = (((((!((map__28338 == null))))?(((((map__28338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28338):map__28338);
var op = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__27132__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27132__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__28344 = cljs.core.seq.call(null,table);
var chunk__28345 = null;
var count__28346 = (0);
var i__28347 = (0);
while(true){
if((i__28347 < count__28346)){
var vec__28354 = cljs.core._nth.call(null,chunk__28345,i__28347);
var sym = cljs.core.nth.call(null,vec__28354,(0),null);
var value = cljs.core.nth.call(null,vec__28354,(1),null);
var ns_28360 = cljs.core.namespace.call(null,sym);
var name_28361 = cljs.core.name.call(null,sym);
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


var G__28362 = seq__28344;
var G__28363 = chunk__28345;
var G__28364 = count__28346;
var G__28365 = (i__28347 + (1));
seq__28344 = G__28362;
chunk__28345 = G__28363;
count__28346 = G__28364;
i__28347 = G__28365;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28344);
if(temp__5720__auto__){
var seq__28344__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28344__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28344__$1);
var G__28366 = cljs.core.chunk_rest.call(null,seq__28344__$1);
var G__28367 = c__4550__auto__;
var G__28368 = cljs.core.count.call(null,c__4550__auto__);
var G__28369 = (0);
seq__28344 = G__28366;
chunk__28345 = G__28367;
count__28346 = G__28368;
i__28347 = G__28369;
continue;
} else {
var vec__28357 = cljs.core.first.call(null,seq__28344__$1);
var sym = cljs.core.nth.call(null,vec__28357,(0),null);
var value = cljs.core.nth.call(null,vec__28357,(1),null);
var ns_28370 = cljs.core.namespace.call(null,sym);
var name_28371 = cljs.core.name.call(null,sym);
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


var G__28372 = cljs.core.next.call(null,seq__28344__$1);
var G__28373 = null;
var G__28374 = (0);
var G__28375 = (0);
seq__28344 = G__28372;
chunk__28345 = G__28373;
count__28346 = G__28374;
i__28347 = G__28375;
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
var G__28377 = arguments.length;
switch (G__28377) {
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
var k_28382 = cljs.core.first.call(null,ks);
var vec__28378_28383 = cljs.core.conj.call(null,prefix,k_28382);
var top_28384 = cljs.core.nth.call(null,vec__28378_28383,(0),null);
var prefix_SINGLEQUOTE__28385 = vec__28378_28383;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_28382)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__28385) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_28384)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_28384)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28385)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_28384);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28385)),";");
}
} else {
}

var m_28386 = cljs.core.get.call(null,externs,k_28382);
if(cljs.core.empty_QMARK_.call(null,m_28386)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__28385,m_28386,top_level,known_externs);
}

var G__28387 = cljs.core.next.call(null,ks);
ks = G__28387;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1601311811221
