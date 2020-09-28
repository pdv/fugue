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
var map__27121 = s;
var map__27121__$1 = (((((!((map__27121 == null))))?(((((map__27121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27121):map__27121);
var name = cljs.core.get.call(null,map__27121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27121__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__27124 = info;
var map__27125 = G__27124;
var map__27125__$1 = (((((!((map__27125 == null))))?(((((map__27125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27125):map__27125);
var shadow = cljs.core.get.call(null,map__27125__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__27124__$1 = G__27124;
while(true){
var d__$2 = d__$1;
var map__27129 = G__27124__$1;
var map__27129__$1 = (((((!((map__27129 == null))))?(((((map__27129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27129):map__27129);
var shadow__$1 = cljs.core.get.call(null,map__27129__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__27131 = (d__$2 + (1));
var G__27132 = shadow__$1;
d__$1 = G__27131;
G__27124__$1 = G__27132;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__27133){
var map__27134 = p__27133;
var map__27134__$1 = (((((!((map__27134 == null))))?(((((map__27134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27134):map__27134);
var name_var = map__27134__$1;
var name = cljs.core.get.call(null,map__27134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27134__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__27136 = info;
var map__27136__$1 = (((((!((map__27136 == null))))?(((((map__27136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27136):map__27136);
var ns = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__27139 = arguments.length;
switch (G__27139) {
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
var G__27141 = cp;
switch (G__27141) {
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
var seq__27143_27147 = cljs.core.seq.call(null,s);
var chunk__27144_27148 = null;
var count__27145_27149 = (0);
var i__27146_27150 = (0);
while(true){
if((i__27146_27150 < count__27145_27149)){
var c_27151 = cljs.core._nth.call(null,chunk__27144_27148,i__27146_27150);
sb.append(cljs.compiler.escape_char.call(null,c_27151));


var G__27152 = seq__27143_27147;
var G__27153 = chunk__27144_27148;
var G__27154 = count__27145_27149;
var G__27155 = (i__27146_27150 + (1));
seq__27143_27147 = G__27152;
chunk__27144_27148 = G__27153;
count__27145_27149 = G__27154;
i__27146_27150 = G__27155;
continue;
} else {
var temp__5720__auto___27156 = cljs.core.seq.call(null,seq__27143_27147);
if(temp__5720__auto___27156){
var seq__27143_27157__$1 = temp__5720__auto___27156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27143_27157__$1)){
var c__4550__auto___27158 = cljs.core.chunk_first.call(null,seq__27143_27157__$1);
var G__27159 = cljs.core.chunk_rest.call(null,seq__27143_27157__$1);
var G__27160 = c__4550__auto___27158;
var G__27161 = cljs.core.count.call(null,c__4550__auto___27158);
var G__27162 = (0);
seq__27143_27147 = G__27159;
chunk__27144_27148 = G__27160;
count__27145_27149 = G__27161;
i__27146_27150 = G__27162;
continue;
} else {
var c_27163 = cljs.core.first.call(null,seq__27143_27157__$1);
sb.append(cljs.compiler.escape_char.call(null,c_27163));


var G__27164 = cljs.core.next.call(null,seq__27143_27157__$1);
var G__27165 = null;
var G__27166 = (0);
var G__27167 = (0);
seq__27143_27147 = G__27164;
chunk__27144_27148 = G__27165;
count__27145_27149 = G__27166;
i__27146_27150 = G__27167;
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
var map__27168_27173 = ast;
var map__27168_27174__$1 = (((((!((map__27168_27173 == null))))?(((((map__27168_27173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27168_27173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27168_27173):map__27168_27173);
var env_27175 = cljs.core.get.call(null,map__27168_27174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_27175))){
var map__27170_27176 = env_27175;
var map__27170_27177__$1 = (((((!((map__27170_27176 == null))))?(((((map__27170_27176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27170_27176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27170_27176):map__27170_27176);
var line_27178 = cljs.core.get.call(null,map__27170_27177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27179 = cljs.core.get.call(null,map__27170_27177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__27170_27176,map__27170_27177__$1,line_27178,column_27179,map__27168_27173,map__27168_27174__$1,env_27175){
return (function (m){
var minfo = (function (){var G__27172 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__27172,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__27172;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_27178 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__27170_27176,map__27170_27177__$1,line_27178,column_27179,map__27168_27173,map__27168_27174__$1,env_27175){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_27179)?(column_27179 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__27170_27176,map__27170_27177__$1,line_27178,column_27179,map__27168_27173,map__27168_27174__$1,env_27175){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__27170_27176,map__27170_27177__$1,line_27178,column_27179,map__27168_27173,map__27168_27174__$1,env_27175))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__27170_27176,map__27170_27177__$1,line_27178,column_27179,map__27168_27173,map__27168_27174__$1,env_27175))
,cljs.core.sorted_map.call(null)));
});})(map__27170_27176,map__27170_27177__$1,line_27178,column_27179,map__27168_27173,map__27168_27174__$1,env_27175))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__27188 = arguments.length;
switch (G__27188) {
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
var len__4730__auto___27195 = arguments.length;
var i__4731__auto___27196 = (0);
while(true){
if((i__4731__auto___27196 < len__4730__auto___27195)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27196]));

var G__27197 = (i__4731__auto___27196 + (1));
i__4731__auto___27196 = G__27197;
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
var s_27198 = (function (){var G__27189 = a;
if((!(typeof a === 'string'))){
return G__27189.toString();
} else {
return G__27189;
}
})();
var temp__5724__auto___27199 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___27199 == null)){
} else {
var sm_data_27200 = temp__5724__auto___27199;
cljs.core.swap_BANG_.call(null,sm_data_27200,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_27200,temp__5724__auto___27199,s_27198){
return (function (p1__27180_SHARP_){
return (p1__27180_SHARP_ + s_27198.length);
});})(sm_data_27200,temp__5724__auto___27199,s_27198))
);
}

cljs.core.print.call(null,s_27198);

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

var seq__27190 = cljs.core.seq.call(null,xs);
var chunk__27191 = null;
var count__27192 = (0);
var i__27193 = (0);
while(true){
if((i__27193 < count__27192)){
var x = cljs.core._nth.call(null,chunk__27191,i__27193);
cljs.compiler.emits.call(null,x);


var G__27201 = seq__27190;
var G__27202 = chunk__27191;
var G__27203 = count__27192;
var G__27204 = (i__27193 + (1));
seq__27190 = G__27201;
chunk__27191 = G__27202;
count__27192 = G__27203;
i__27193 = G__27204;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27190);
if(temp__5720__auto__){
var seq__27190__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27190__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27190__$1);
var G__27205 = cljs.core.chunk_rest.call(null,seq__27190__$1);
var G__27206 = c__4550__auto__;
var G__27207 = cljs.core.count.call(null,c__4550__auto__);
var G__27208 = (0);
seq__27190 = G__27205;
chunk__27191 = G__27206;
count__27192 = G__27207;
i__27193 = G__27208;
continue;
} else {
var x = cljs.core.first.call(null,seq__27190__$1);
cljs.compiler.emits.call(null,x);


var G__27209 = cljs.core.next.call(null,seq__27190__$1);
var G__27210 = null;
var G__27211 = (0);
var G__27212 = (0);
seq__27190 = G__27209;
chunk__27191 = G__27210;
count__27192 = G__27211;
i__27193 = G__27212;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq27182){
var G__27183 = cljs.core.first.call(null,seq27182);
var seq27182__$1 = cljs.core.next.call(null,seq27182);
var G__27184 = cljs.core.first.call(null,seq27182__$1);
var seq27182__$2 = cljs.core.next.call(null,seq27182__$1);
var G__27185 = cljs.core.first.call(null,seq27182__$2);
var seq27182__$3 = cljs.core.next.call(null,seq27182__$2);
var G__27186 = cljs.core.first.call(null,seq27182__$3);
var seq27182__$4 = cljs.core.next.call(null,seq27182__$3);
var G__27187 = cljs.core.first.call(null,seq27182__$4);
var seq27182__$5 = cljs.core.next.call(null,seq27182__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27183,G__27184,G__27185,G__27186,G__27187,seq27182__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__27213){
var map__27214 = p__27213;
var map__27214__$1 = (((((!((map__27214 == null))))?(((((map__27214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27214):map__27214);
var m = map__27214__$1;
var gen_line = cljs.core.get.call(null,map__27214__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__27223 = arguments.length;
switch (G__27223) {
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
var len__4730__auto___27229 = arguments.length;
var i__4731__auto___27230 = (0);
while(true){
if((i__4731__auto___27230 < len__4730__auto___27229)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27230]));

var G__27231 = (i__4731__auto___27230 + (1));
i__4731__auto___27230 = G__27231;
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

var seq__27224_27232 = cljs.core.seq.call(null,xs);
var chunk__27225_27233 = null;
var count__27226_27234 = (0);
var i__27227_27235 = (0);
while(true){
if((i__27227_27235 < count__27226_27234)){
var x_27236 = cljs.core._nth.call(null,chunk__27225_27233,i__27227_27235);
cljs.compiler.emits.call(null,x_27236);


var G__27237 = seq__27224_27232;
var G__27238 = chunk__27225_27233;
var G__27239 = count__27226_27234;
var G__27240 = (i__27227_27235 + (1));
seq__27224_27232 = G__27237;
chunk__27225_27233 = G__27238;
count__27226_27234 = G__27239;
i__27227_27235 = G__27240;
continue;
} else {
var temp__5720__auto___27241 = cljs.core.seq.call(null,seq__27224_27232);
if(temp__5720__auto___27241){
var seq__27224_27242__$1 = temp__5720__auto___27241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27224_27242__$1)){
var c__4550__auto___27243 = cljs.core.chunk_first.call(null,seq__27224_27242__$1);
var G__27244 = cljs.core.chunk_rest.call(null,seq__27224_27242__$1);
var G__27245 = c__4550__auto___27243;
var G__27246 = cljs.core.count.call(null,c__4550__auto___27243);
var G__27247 = (0);
seq__27224_27232 = G__27244;
chunk__27225_27233 = G__27245;
count__27226_27234 = G__27246;
i__27227_27235 = G__27247;
continue;
} else {
var x_27248 = cljs.core.first.call(null,seq__27224_27242__$1);
cljs.compiler.emits.call(null,x_27248);


var G__27249 = cljs.core.next.call(null,seq__27224_27242__$1);
var G__27250 = null;
var G__27251 = (0);
var G__27252 = (0);
seq__27224_27232 = G__27249;
chunk__27225_27233 = G__27250;
count__27226_27234 = G__27251;
i__27227_27235 = G__27252;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq27217){
var G__27218 = cljs.core.first.call(null,seq27217);
var seq27217__$1 = cljs.core.next.call(null,seq27217);
var G__27219 = cljs.core.first.call(null,seq27217__$1);
var seq27217__$2 = cljs.core.next.call(null,seq27217__$1);
var G__27220 = cljs.core.first.call(null,seq27217__$2);
var seq27217__$3 = cljs.core.next.call(null,seq27217__$2);
var G__27221 = cljs.core.first.call(null,seq27217__$3);
var seq27217__$4 = cljs.core.next.call(null,seq27217__$3);
var G__27222 = cljs.core.first.call(null,seq27217__$4);
var seq27217__$5 = cljs.core.next.call(null,seq27217__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27218,G__27219,G__27220,G__27221,G__27222,seq27217__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27253_27257 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27254_27258 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27255_27259 = true;
var _STAR_print_fn_STAR__temp_val__27256_27260 = ((function (_STAR_print_newline_STAR__orig_val__27253_27257,_STAR_print_fn_STAR__orig_val__27254_27258,_STAR_print_newline_STAR__temp_val__27255_27259,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27253_27257,_STAR_print_fn_STAR__orig_val__27254_27258,_STAR_print_newline_STAR__temp_val__27255_27259,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27255_27259;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27256_27260;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27254_27258;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27253_27257;
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
var vec__27261 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__27261,(0),null);
var name = cljs.core.nth.call(null,vec__27261,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__27261,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__27261,ns,name))
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
var vec__27264 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__27264,(0),null);
var flags = cljs.core.nth.call(null,vec__27264,(1),null);
var pattern = cljs.core.nth.call(null,vec__27264,(2),null);
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
return (function (p1__27267_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__27267_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__27269){
var map__27270 = p__27269;
var map__27270__$1 = (((((!((map__27270 == null))))?(((((map__27270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27270):map__27270);
var ast = map__27270__$1;
var info = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__27272 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27272__$1 = (((((!((map__27272 == null))))?(((((map__27272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27272):map__27272);
var cenv = map__27272__$1;
var options = cljs.core.get.call(null,map__27272__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__27274 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__27274,cljs.analyzer.es5_allowed);
} else {
return G__27274;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__27275 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__27275,reserved);
} else {
return G__27275;
}
})();
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__27276_27277 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__27276_27278__$1 = (((G__27276_27277 instanceof cljs.core.Keyword))?G__27276_27277.fqn:null);
switch (G__27276_27278__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__27280){
var map__27281 = p__27280;
var map__27281__$1 = (((((!((map__27281 == null))))?(((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var arg = map__27281__$1;
var env = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__27283 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__27283__$1 = (((((!((map__27283 == null))))?(((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var name = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__27285){
var map__27286 = p__27285;
var map__27286__$1 = (((((!((map__27286 == null))))?(((((map__27286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27286):map__27286);
var expr = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__27288_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27288_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__27289){
var map__27290 = p__27289;
var map__27290__$1 = (((((!((map__27290 == null))))?(((((map__27290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27290):map__27290);
var env = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__27292){
var map__27293 = p__27292;
var map__27293__$1 = (((((!((map__27293 == null))))?(((((map__27293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293):map__27293);
var items = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__27295_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27295_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__27296){
var map__27297 = p__27296;
var map__27297__$1 = (((((!((map__27297 == null))))?(((((map__27297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27297):map__27297);
var items = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___27321 = cljs.core.seq.call(null,items);
if(temp__5720__auto___27321){
var items_27322__$1 = temp__5720__auto___27321;
var vec__27299_27323 = items_27322__$1;
var seq__27300_27324 = cljs.core.seq.call(null,vec__27299_27323);
var first__27301_27325 = cljs.core.first.call(null,seq__27300_27324);
var seq__27300_27326__$1 = cljs.core.next.call(null,seq__27300_27324);
var vec__27302_27327 = first__27301_27325;
var k_27328 = cljs.core.nth.call(null,vec__27302_27327,(0),null);
var v_27329 = cljs.core.nth.call(null,vec__27302_27327,(1),null);
var r_27330 = seq__27300_27326__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_27328),"\": ",emit_js_object_val.call(null,v_27329));

var seq__27305_27331 = cljs.core.seq.call(null,r_27330);
var chunk__27306_27332 = null;
var count__27307_27333 = (0);
var i__27308_27334 = (0);
while(true){
if((i__27308_27334 < count__27307_27333)){
var vec__27315_27335 = cljs.core._nth.call(null,chunk__27306_27332,i__27308_27334);
var k_27336__$1 = cljs.core.nth.call(null,vec__27315_27335,(0),null);
var v_27337__$1 = cljs.core.nth.call(null,vec__27315_27335,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27336__$1),"\": ",emit_js_object_val.call(null,v_27337__$1));


var G__27338 = seq__27305_27331;
var G__27339 = chunk__27306_27332;
var G__27340 = count__27307_27333;
var G__27341 = (i__27308_27334 + (1));
seq__27305_27331 = G__27338;
chunk__27306_27332 = G__27339;
count__27307_27333 = G__27340;
i__27308_27334 = G__27341;
continue;
} else {
var temp__5720__auto___27342__$1 = cljs.core.seq.call(null,seq__27305_27331);
if(temp__5720__auto___27342__$1){
var seq__27305_27343__$1 = temp__5720__auto___27342__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27305_27343__$1)){
var c__4550__auto___27344 = cljs.core.chunk_first.call(null,seq__27305_27343__$1);
var G__27345 = cljs.core.chunk_rest.call(null,seq__27305_27343__$1);
var G__27346 = c__4550__auto___27344;
var G__27347 = cljs.core.count.call(null,c__4550__auto___27344);
var G__27348 = (0);
seq__27305_27331 = G__27345;
chunk__27306_27332 = G__27346;
count__27307_27333 = G__27347;
i__27308_27334 = G__27348;
continue;
} else {
var vec__27318_27349 = cljs.core.first.call(null,seq__27305_27343__$1);
var k_27350__$1 = cljs.core.nth.call(null,vec__27318_27349,(0),null);
var v_27351__$1 = cljs.core.nth.call(null,vec__27318_27349,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27350__$1),"\": ",emit_js_object_val.call(null,v_27351__$1));


var G__27352 = cljs.core.next.call(null,seq__27305_27343__$1);
var G__27353 = null;
var G__27354 = (0);
var G__27355 = (0);
seq__27305_27331 = G__27352;
chunk__27306_27332 = G__27353;
count__27307_27333 = G__27354;
i__27308_27334 = G__27355;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__27356){
var map__27357 = p__27356;
var map__27357__$1 = (((((!((map__27357 == null))))?(((((map__27357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27357):map__27357);
var keys = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__27359){
var map__27360 = p__27359;
var map__27360__$1 = (((((!((map__27360 == null))))?(((((map__27360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27360):map__27360);
var items = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__27362){
var map__27363 = p__27362;
var map__27363__$1 = (((((!((map__27363 == null))))?(((((map__27363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27363):map__27363);
var expr = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__27365){
var map__27366 = p__27365;
var map__27366__$1 = (((((!((map__27366 == null))))?(((((map__27366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27366):map__27366);
var form = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__27368 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27368__$1 = (((((!((map__27368 == null))))?(((((map__27368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27368):map__27368);
var op = cljs.core.get.call(null,map__27368__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27368__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27368__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__27370 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27370__$1 = (((((!((map__27370 == null))))?(((((map__27370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27370):map__27370);
var op = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__27372){
var map__27373 = p__27372;
var map__27373__$1 = (((((!((map__27373 == null))))?(((((map__27373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27373):map__27373);
var test = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__27375){
var map__27376 = p__27375;
var map__27376__$1 = (((((!((map__27376 == null))))?(((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var v = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__27378_27414 = cljs.core.seq.call(null,nodes);
var chunk__27379_27415 = null;
var count__27380_27416 = (0);
var i__27381_27417 = (0);
while(true){
if((i__27381_27417 < count__27380_27416)){
var map__27398_27418 = cljs.core._nth.call(null,chunk__27379_27415,i__27381_27417);
var map__27398_27419__$1 = (((((!((map__27398_27418 == null))))?(((((map__27398_27418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27398_27418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27398_27418):map__27398_27418);
var ts_27420 = cljs.core.get.call(null,map__27398_27419__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27399_27421 = cljs.core.get.call(null,map__27398_27419__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27399_27422__$1 = (((((!((map__27399_27421 == null))))?(((((map__27399_27421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27399_27421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27399_27421):map__27399_27421);
var then_27423 = cljs.core.get.call(null,map__27399_27422__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27402_27424 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27420));
var chunk__27403_27425 = null;
var count__27404_27426 = (0);
var i__27405_27427 = (0);
while(true){
if((i__27405_27427 < count__27404_27426)){
var test_27428 = cljs.core._nth.call(null,chunk__27403_27425,i__27405_27427);
cljs.compiler.emitln.call(null,"case ",test_27428,":");


var G__27429 = seq__27402_27424;
var G__27430 = chunk__27403_27425;
var G__27431 = count__27404_27426;
var G__27432 = (i__27405_27427 + (1));
seq__27402_27424 = G__27429;
chunk__27403_27425 = G__27430;
count__27404_27426 = G__27431;
i__27405_27427 = G__27432;
continue;
} else {
var temp__5720__auto___27433 = cljs.core.seq.call(null,seq__27402_27424);
if(temp__5720__auto___27433){
var seq__27402_27434__$1 = temp__5720__auto___27433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27402_27434__$1)){
var c__4550__auto___27435 = cljs.core.chunk_first.call(null,seq__27402_27434__$1);
var G__27436 = cljs.core.chunk_rest.call(null,seq__27402_27434__$1);
var G__27437 = c__4550__auto___27435;
var G__27438 = cljs.core.count.call(null,c__4550__auto___27435);
var G__27439 = (0);
seq__27402_27424 = G__27436;
chunk__27403_27425 = G__27437;
count__27404_27426 = G__27438;
i__27405_27427 = G__27439;
continue;
} else {
var test_27440 = cljs.core.first.call(null,seq__27402_27434__$1);
cljs.compiler.emitln.call(null,"case ",test_27440,":");


var G__27441 = cljs.core.next.call(null,seq__27402_27434__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27402_27424 = G__27441;
chunk__27403_27425 = G__27442;
count__27404_27426 = G__27443;
i__27405_27427 = G__27444;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27423);
} else {
cljs.compiler.emitln.call(null,then_27423);
}

cljs.compiler.emitln.call(null,"break;");


var G__27445 = seq__27378_27414;
var G__27446 = chunk__27379_27415;
var G__27447 = count__27380_27416;
var G__27448 = (i__27381_27417 + (1));
seq__27378_27414 = G__27445;
chunk__27379_27415 = G__27446;
count__27380_27416 = G__27447;
i__27381_27417 = G__27448;
continue;
} else {
var temp__5720__auto___27449 = cljs.core.seq.call(null,seq__27378_27414);
if(temp__5720__auto___27449){
var seq__27378_27450__$1 = temp__5720__auto___27449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27378_27450__$1)){
var c__4550__auto___27451 = cljs.core.chunk_first.call(null,seq__27378_27450__$1);
var G__27452 = cljs.core.chunk_rest.call(null,seq__27378_27450__$1);
var G__27453 = c__4550__auto___27451;
var G__27454 = cljs.core.count.call(null,c__4550__auto___27451);
var G__27455 = (0);
seq__27378_27414 = G__27452;
chunk__27379_27415 = G__27453;
count__27380_27416 = G__27454;
i__27381_27417 = G__27455;
continue;
} else {
var map__27406_27456 = cljs.core.first.call(null,seq__27378_27450__$1);
var map__27406_27457__$1 = (((((!((map__27406_27456 == null))))?(((((map__27406_27456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27406_27456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406_27456):map__27406_27456);
var ts_27458 = cljs.core.get.call(null,map__27406_27457__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27407_27459 = cljs.core.get.call(null,map__27406_27457__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27407_27460__$1 = (((((!((map__27407_27459 == null))))?(((((map__27407_27459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27407_27459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27407_27459):map__27407_27459);
var then_27461 = cljs.core.get.call(null,map__27407_27460__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27410_27462 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27458));
var chunk__27411_27463 = null;
var count__27412_27464 = (0);
var i__27413_27465 = (0);
while(true){
if((i__27413_27465 < count__27412_27464)){
var test_27466 = cljs.core._nth.call(null,chunk__27411_27463,i__27413_27465);
cljs.compiler.emitln.call(null,"case ",test_27466,":");


var G__27467 = seq__27410_27462;
var G__27468 = chunk__27411_27463;
var G__27469 = count__27412_27464;
var G__27470 = (i__27413_27465 + (1));
seq__27410_27462 = G__27467;
chunk__27411_27463 = G__27468;
count__27412_27464 = G__27469;
i__27413_27465 = G__27470;
continue;
} else {
var temp__5720__auto___27471__$1 = cljs.core.seq.call(null,seq__27410_27462);
if(temp__5720__auto___27471__$1){
var seq__27410_27472__$1 = temp__5720__auto___27471__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27410_27472__$1)){
var c__4550__auto___27473 = cljs.core.chunk_first.call(null,seq__27410_27472__$1);
var G__27474 = cljs.core.chunk_rest.call(null,seq__27410_27472__$1);
var G__27475 = c__4550__auto___27473;
var G__27476 = cljs.core.count.call(null,c__4550__auto___27473);
var G__27477 = (0);
seq__27410_27462 = G__27474;
chunk__27411_27463 = G__27475;
count__27412_27464 = G__27476;
i__27413_27465 = G__27477;
continue;
} else {
var test_27478 = cljs.core.first.call(null,seq__27410_27472__$1);
cljs.compiler.emitln.call(null,"case ",test_27478,":");


var G__27479 = cljs.core.next.call(null,seq__27410_27472__$1);
var G__27480 = null;
var G__27481 = (0);
var G__27482 = (0);
seq__27410_27462 = G__27479;
chunk__27411_27463 = G__27480;
count__27412_27464 = G__27481;
i__27413_27465 = G__27482;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27461);
} else {
cljs.compiler.emitln.call(null,then_27461);
}

cljs.compiler.emitln.call(null,"break;");


var G__27483 = cljs.core.next.call(null,seq__27378_27450__$1);
var G__27484 = null;
var G__27485 = (0);
var G__27486 = (0);
seq__27378_27414 = G__27483;
chunk__27379_27415 = G__27484;
count__27380_27416 = G__27485;
i__27381_27417 = G__27486;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__27487){
var map__27488 = p__27487;
var map__27488__$1 = (((((!((map__27488 == null))))?(((((map__27488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27488):map__27488);
var throw$ = cljs.core.get.call(null,map__27488__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__27488__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__27491 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__27491,(0),null);
var rstr = cljs.core.nth.call(null,vec__27491,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__27491,fstr,rstr,ret_t,axstr){
return (function (p1__27490_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__27490_SHARP_);
});})(idx,vec__27491,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__27494 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__27494,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__27494;
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
return (function (p1__27495_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__27495_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__27496 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__27497 = cljs.core.seq.call(null,vec__27496);
var first__27498 = cljs.core.first.call(null,seq__27497);
var seq__27497__$1 = cljs.core.next.call(null,seq__27497);
var p = first__27498;
var first__27498__$1 = cljs.core.first.call(null,seq__27497__$1);
var seq__27497__$2 = cljs.core.next.call(null,seq__27497__$1);
var ts = first__27498__$1;
var first__27498__$2 = cljs.core.first.call(null,seq__27497__$2);
var seq__27497__$3 = cljs.core.next.call(null,seq__27497__$2);
var n = first__27498__$2;
var xs = seq__27497__$3;
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
var vec__27499 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__27500 = cljs.core.seq.call(null,vec__27499);
var first__27501 = cljs.core.first.call(null,seq__27500);
var seq__27500__$1 = cljs.core.next.call(null,seq__27500);
var p = first__27501;
var first__27501__$1 = cljs.core.first.call(null,seq__27500__$1);
var seq__27500__$2 = cljs.core.next.call(null,seq__27500__$1);
var ts = first__27501__$1;
var xs = seq__27500__$2;
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
var G__27504 = arguments.length;
switch (G__27504) {
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
var vec__27512 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__27502_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__27502_SHARP_);
} else {
return p1__27502_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__27513 = cljs.core.seq.call(null,vec__27512);
var first__27514 = cljs.core.first.call(null,seq__27513);
var seq__27513__$1 = cljs.core.next.call(null,seq__27513);
var x = first__27514;
var ys = seq__27513__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__27515 = cljs.core.seq.call(null,ys);
var chunk__27516 = null;
var count__27517 = (0);
var i__27518 = (0);
while(true){
if((i__27518 < count__27517)){
var next_line = cljs.core._nth.call(null,chunk__27516,i__27518);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__27524 = seq__27515;
var G__27525 = chunk__27516;
var G__27526 = count__27517;
var G__27527 = (i__27518 + (1));
seq__27515 = G__27524;
chunk__27516 = G__27525;
count__27517 = G__27526;
i__27518 = G__27527;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27515);
if(temp__5720__auto__){
var seq__27515__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27515__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27515__$1);
var G__27528 = cljs.core.chunk_rest.call(null,seq__27515__$1);
var G__27529 = c__4550__auto__;
var G__27530 = cljs.core.count.call(null,c__4550__auto__);
var G__27531 = (0);
seq__27515 = G__27528;
chunk__27516 = G__27529;
count__27517 = G__27530;
i__27518 = G__27531;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__27515__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__27532 = cljs.core.next.call(null,seq__27515__$1);
var G__27533 = null;
var G__27534 = (0);
var G__27535 = (0);
seq__27515 = G__27532;
chunk__27516 = G__27533;
count__27517 = G__27534;
i__27518 = G__27535;
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

var seq__27519_27536 = cljs.core.seq.call(null,docs__$2);
var chunk__27520_27537 = null;
var count__27521_27538 = (0);
var i__27522_27539 = (0);
while(true){
if((i__27522_27539 < count__27521_27538)){
var e_27540 = cljs.core._nth.call(null,chunk__27520_27537,i__27522_27539);
if(cljs.core.truth_(e_27540)){
print_comment_lines.call(null,e_27540);
} else {
}


var G__27541 = seq__27519_27536;
var G__27542 = chunk__27520_27537;
var G__27543 = count__27521_27538;
var G__27544 = (i__27522_27539 + (1));
seq__27519_27536 = G__27541;
chunk__27520_27537 = G__27542;
count__27521_27538 = G__27543;
i__27522_27539 = G__27544;
continue;
} else {
var temp__5720__auto___27545 = cljs.core.seq.call(null,seq__27519_27536);
if(temp__5720__auto___27545){
var seq__27519_27546__$1 = temp__5720__auto___27545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27519_27546__$1)){
var c__4550__auto___27547 = cljs.core.chunk_first.call(null,seq__27519_27546__$1);
var G__27548 = cljs.core.chunk_rest.call(null,seq__27519_27546__$1);
var G__27549 = c__4550__auto___27547;
var G__27550 = cljs.core.count.call(null,c__4550__auto___27547);
var G__27551 = (0);
seq__27519_27536 = G__27548;
chunk__27520_27537 = G__27549;
count__27521_27538 = G__27550;
i__27522_27539 = G__27551;
continue;
} else {
var e_27552 = cljs.core.first.call(null,seq__27519_27546__$1);
if(cljs.core.truth_(e_27552)){
print_comment_lines.call(null,e_27552);
} else {
}


var G__27553 = cljs.core.next.call(null,seq__27519_27546__$1);
var G__27554 = null;
var G__27555 = (0);
var G__27556 = (0);
seq__27519_27536 = G__27553;
chunk__27520_27537 = G__27554;
count__27521_27538 = G__27555;
i__27522_27539 = G__27556;
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
return (function (p1__27558_SHARP_){
return goog.string.startsWith(p1__27558_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__27559){
var map__27560 = p__27559;
var map__27560__$1 = (((((!((map__27560 == null))))?(((((map__27560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27560):map__27560);
var doc = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__27562){
var map__27563 = p__27562;
var map__27563__$1 = (((((!((map__27563 == null))))?(((((map__27563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27563):map__27563);
var name = cljs.core.get.call(null,map__27563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27563__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27563__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__27565_27589 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__27566_27590 = null;
var count__27567_27591 = (0);
var i__27568_27592 = (0);
while(true){
if((i__27568_27592 < count__27567_27591)){
var vec__27575_27593 = cljs.core._nth.call(null,chunk__27566_27590,i__27568_27592);
var i_27594 = cljs.core.nth.call(null,vec__27575_27593,(0),null);
var param_27595 = cljs.core.nth.call(null,vec__27575_27593,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27595);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__27596 = seq__27565_27589;
var G__27597 = chunk__27566_27590;
var G__27598 = count__27567_27591;
var G__27599 = (i__27568_27592 + (1));
seq__27565_27589 = G__27596;
chunk__27566_27590 = G__27597;
count__27567_27591 = G__27598;
i__27568_27592 = G__27599;
continue;
} else {
var temp__5720__auto___27600 = cljs.core.seq.call(null,seq__27565_27589);
if(temp__5720__auto___27600){
var seq__27565_27601__$1 = temp__5720__auto___27600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27565_27601__$1)){
var c__4550__auto___27602 = cljs.core.chunk_first.call(null,seq__27565_27601__$1);
var G__27603 = cljs.core.chunk_rest.call(null,seq__27565_27601__$1);
var G__27604 = c__4550__auto___27602;
var G__27605 = cljs.core.count.call(null,c__4550__auto___27602);
var G__27606 = (0);
seq__27565_27589 = G__27603;
chunk__27566_27590 = G__27604;
count__27567_27591 = G__27605;
i__27568_27592 = G__27606;
continue;
} else {
var vec__27578_27607 = cljs.core.first.call(null,seq__27565_27601__$1);
var i_27608 = cljs.core.nth.call(null,vec__27578_27607,(0),null);
var param_27609 = cljs.core.nth.call(null,vec__27578_27607,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27609);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__27610 = cljs.core.next.call(null,seq__27565_27601__$1);
var G__27611 = null;
var G__27612 = (0);
var G__27613 = (0);
seq__27565_27589 = G__27610;
chunk__27566_27590 = G__27611;
count__27567_27591 = G__27612;
i__27568_27592 = G__27613;
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

var seq__27581_27614 = cljs.core.seq.call(null,params);
var chunk__27582_27615 = null;
var count__27583_27616 = (0);
var i__27584_27617 = (0);
while(true){
if((i__27584_27617 < count__27583_27616)){
var param_27618 = cljs.core._nth.call(null,chunk__27582_27615,i__27584_27617);
cljs.compiler.emit.call(null,param_27618);

if(cljs.core._EQ_.call(null,param_27618,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27619 = seq__27581_27614;
var G__27620 = chunk__27582_27615;
var G__27621 = count__27583_27616;
var G__27622 = (i__27584_27617 + (1));
seq__27581_27614 = G__27619;
chunk__27582_27615 = G__27620;
count__27583_27616 = G__27621;
i__27584_27617 = G__27622;
continue;
} else {
var temp__5720__auto___27623 = cljs.core.seq.call(null,seq__27581_27614);
if(temp__5720__auto___27623){
var seq__27581_27624__$1 = temp__5720__auto___27623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27581_27624__$1)){
var c__4550__auto___27625 = cljs.core.chunk_first.call(null,seq__27581_27624__$1);
var G__27626 = cljs.core.chunk_rest.call(null,seq__27581_27624__$1);
var G__27627 = c__4550__auto___27625;
var G__27628 = cljs.core.count.call(null,c__4550__auto___27625);
var G__27629 = (0);
seq__27581_27614 = G__27626;
chunk__27582_27615 = G__27627;
count__27583_27616 = G__27628;
i__27584_27617 = G__27629;
continue;
} else {
var param_27630 = cljs.core.first.call(null,seq__27581_27624__$1);
cljs.compiler.emit.call(null,param_27630);

if(cljs.core._EQ_.call(null,param_27630,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27631 = cljs.core.next.call(null,seq__27581_27624__$1);
var G__27632 = null;
var G__27633 = (0);
var G__27634 = (0);
seq__27581_27614 = G__27631;
chunk__27582_27615 = G__27632;
count__27583_27616 = G__27633;
i__27584_27617 = G__27634;
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

var seq__27585_27635 = cljs.core.seq.call(null,params);
var chunk__27586_27636 = null;
var count__27587_27637 = (0);
var i__27588_27638 = (0);
while(true){
if((i__27588_27638 < count__27587_27637)){
var param_27639 = cljs.core._nth.call(null,chunk__27586_27636,i__27588_27638);
cljs.compiler.emit.call(null,param_27639);

if(cljs.core._EQ_.call(null,param_27639,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27640 = seq__27585_27635;
var G__27641 = chunk__27586_27636;
var G__27642 = count__27587_27637;
var G__27643 = (i__27588_27638 + (1));
seq__27585_27635 = G__27640;
chunk__27586_27636 = G__27641;
count__27587_27637 = G__27642;
i__27588_27638 = G__27643;
continue;
} else {
var temp__5720__auto___27644 = cljs.core.seq.call(null,seq__27585_27635);
if(temp__5720__auto___27644){
var seq__27585_27645__$1 = temp__5720__auto___27644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27585_27645__$1)){
var c__4550__auto___27646 = cljs.core.chunk_first.call(null,seq__27585_27645__$1);
var G__27647 = cljs.core.chunk_rest.call(null,seq__27585_27645__$1);
var G__27648 = c__4550__auto___27646;
var G__27649 = cljs.core.count.call(null,c__4550__auto___27646);
var G__27650 = (0);
seq__27585_27635 = G__27647;
chunk__27586_27636 = G__27648;
count__27587_27637 = G__27649;
i__27588_27638 = G__27650;
continue;
} else {
var param_27651 = cljs.core.first.call(null,seq__27585_27645__$1);
cljs.compiler.emit.call(null,param_27651);

if(cljs.core._EQ_.call(null,param_27651,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27652 = cljs.core.next.call(null,seq__27585_27645__$1);
var G__27653 = null;
var G__27654 = (0);
var G__27655 = (0);
seq__27585_27635 = G__27652;
chunk__27586_27636 = G__27653;
count__27587_27637 = G__27654;
i__27588_27638 = G__27655;
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
var seq__27656 = cljs.core.seq.call(null,params);
var chunk__27657 = null;
var count__27658 = (0);
var i__27659 = (0);
while(true){
if((i__27659 < count__27658)){
var param = cljs.core._nth.call(null,chunk__27657,i__27659);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27660 = seq__27656;
var G__27661 = chunk__27657;
var G__27662 = count__27658;
var G__27663 = (i__27659 + (1));
seq__27656 = G__27660;
chunk__27657 = G__27661;
count__27658 = G__27662;
i__27659 = G__27663;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27656);
if(temp__5720__auto__){
var seq__27656__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27656__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27656__$1);
var G__27664 = cljs.core.chunk_rest.call(null,seq__27656__$1);
var G__27665 = c__4550__auto__;
var G__27666 = cljs.core.count.call(null,c__4550__auto__);
var G__27667 = (0);
seq__27656 = G__27664;
chunk__27657 = G__27665;
count__27658 = G__27666;
i__27659 = G__27667;
continue;
} else {
var param = cljs.core.first.call(null,seq__27656__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27668 = cljs.core.next.call(null,seq__27656__$1);
var G__27669 = null;
var G__27670 = (0);
var G__27671 = (0);
seq__27656 = G__27668;
chunk__27657 = G__27669;
count__27658 = G__27670;
i__27659 = G__27671;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__27672){
var map__27673 = p__27672;
var map__27673__$1 = (((((!((map__27673 == null))))?(((((map__27673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27673):map__27673);
var expr = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__27675){
var map__27676 = p__27675;
var map__27676__$1 = (((((!((map__27676 == null))))?(((((map__27676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27676):map__27676);
var f = map__27676__$1;
var expr = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_27686__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27687 = cljs.compiler.munge.call(null,name_27686__$1);
var delegate_name_27688 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27687),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_27688," = function (");

var seq__27678_27689 = cljs.core.seq.call(null,params);
var chunk__27679_27690 = null;
var count__27680_27691 = (0);
var i__27681_27692 = (0);
while(true){
if((i__27681_27692 < count__27680_27691)){
var param_27693 = cljs.core._nth.call(null,chunk__27679_27690,i__27681_27692);
cljs.compiler.emit.call(null,param_27693);

if(cljs.core._EQ_.call(null,param_27693,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27694 = seq__27678_27689;
var G__27695 = chunk__27679_27690;
var G__27696 = count__27680_27691;
var G__27697 = (i__27681_27692 + (1));
seq__27678_27689 = G__27694;
chunk__27679_27690 = G__27695;
count__27680_27691 = G__27696;
i__27681_27692 = G__27697;
continue;
} else {
var temp__5720__auto___27698 = cljs.core.seq.call(null,seq__27678_27689);
if(temp__5720__auto___27698){
var seq__27678_27699__$1 = temp__5720__auto___27698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27678_27699__$1)){
var c__4550__auto___27700 = cljs.core.chunk_first.call(null,seq__27678_27699__$1);
var G__27701 = cljs.core.chunk_rest.call(null,seq__27678_27699__$1);
var G__27702 = c__4550__auto___27700;
var G__27703 = cljs.core.count.call(null,c__4550__auto___27700);
var G__27704 = (0);
seq__27678_27689 = G__27701;
chunk__27679_27690 = G__27702;
count__27680_27691 = G__27703;
i__27681_27692 = G__27704;
continue;
} else {
var param_27705 = cljs.core.first.call(null,seq__27678_27699__$1);
cljs.compiler.emit.call(null,param_27705);

if(cljs.core._EQ_.call(null,param_27705,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27706 = cljs.core.next.call(null,seq__27678_27699__$1);
var G__27707 = null;
var G__27708 = (0);
var G__27709 = (0);
seq__27678_27689 = G__27706;
chunk__27679_27690 = G__27707;
count__27680_27691 = G__27708;
i__27681_27692 = G__27709;
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

cljs.compiler.emitln.call(null,"var ",mname_27687," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_27710 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_27710,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_27688,".call(this,");

var seq__27682_27711 = cljs.core.seq.call(null,params);
var chunk__27683_27712 = null;
var count__27684_27713 = (0);
var i__27685_27714 = (0);
while(true){
if((i__27685_27714 < count__27684_27713)){
var param_27715 = cljs.core._nth.call(null,chunk__27683_27712,i__27685_27714);
cljs.compiler.emit.call(null,param_27715);

if(cljs.core._EQ_.call(null,param_27715,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27716 = seq__27682_27711;
var G__27717 = chunk__27683_27712;
var G__27718 = count__27684_27713;
var G__27719 = (i__27685_27714 + (1));
seq__27682_27711 = G__27716;
chunk__27683_27712 = G__27717;
count__27684_27713 = G__27718;
i__27685_27714 = G__27719;
continue;
} else {
var temp__5720__auto___27720 = cljs.core.seq.call(null,seq__27682_27711);
if(temp__5720__auto___27720){
var seq__27682_27721__$1 = temp__5720__auto___27720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27682_27721__$1)){
var c__4550__auto___27722 = cljs.core.chunk_first.call(null,seq__27682_27721__$1);
var G__27723 = cljs.core.chunk_rest.call(null,seq__27682_27721__$1);
var G__27724 = c__4550__auto___27722;
var G__27725 = cljs.core.count.call(null,c__4550__auto___27722);
var G__27726 = (0);
seq__27682_27711 = G__27723;
chunk__27683_27712 = G__27724;
count__27684_27713 = G__27725;
i__27685_27714 = G__27726;
continue;
} else {
var param_27727 = cljs.core.first.call(null,seq__27682_27721__$1);
cljs.compiler.emit.call(null,param_27727);

if(cljs.core._EQ_.call(null,param_27727,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27728 = cljs.core.next.call(null,seq__27682_27721__$1);
var G__27729 = null;
var G__27730 = (0);
var G__27731 = (0);
seq__27682_27711 = G__27728;
chunk__27683_27712 = G__27729;
count__27684_27713 = G__27730;
i__27685_27714 = G__27731;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_27687,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_27687,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_27686__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_27687,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_27688,";");

cljs.compiler.emitln.call(null,"return ",mname_27687,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__27735){
var map__27736 = p__27735;
var map__27736__$1 = (((((!((map__27736 == null))))?(((((map__27736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27736):map__27736);
var variadic = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27732_SHARP_){
var and__4120__auto__ = p1__27732_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__27732_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_27789__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27790 = cljs.compiler.munge.call(null,name_27789__$1);
var maxparams_27791 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_27792 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_27789__$1,mname_27790,maxparams_27791,loop_locals,map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27790),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_27789__$1,mname_27790,maxparams_27791,loop_locals,map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_27793 = cljs.core.sort_by.call(null,((function (name_27789__$1,mname_27790,maxparams_27791,mmap_27792,loop_locals,map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27733_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27733_SHARP_)));
});})(name_27789__$1,mname_27790,maxparams_27791,mmap_27792,loop_locals,map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_27792));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_27790," = null;");

var seq__27738_27794 = cljs.core.seq.call(null,ms_27793);
var chunk__27739_27795 = null;
var count__27740_27796 = (0);
var i__27741_27797 = (0);
while(true){
if((i__27741_27797 < count__27740_27796)){
var vec__27748_27798 = cljs.core._nth.call(null,chunk__27739_27795,i__27741_27797);
var n_27799 = cljs.core.nth.call(null,vec__27748_27798,(0),null);
var meth_27800 = cljs.core.nth.call(null,vec__27748_27798,(1),null);
cljs.compiler.emits.call(null,"var ",n_27799," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27800))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27800);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27800);
}

cljs.compiler.emitln.call(null,";");


var G__27801 = seq__27738_27794;
var G__27802 = chunk__27739_27795;
var G__27803 = count__27740_27796;
var G__27804 = (i__27741_27797 + (1));
seq__27738_27794 = G__27801;
chunk__27739_27795 = G__27802;
count__27740_27796 = G__27803;
i__27741_27797 = G__27804;
continue;
} else {
var temp__5720__auto___27805 = cljs.core.seq.call(null,seq__27738_27794);
if(temp__5720__auto___27805){
var seq__27738_27806__$1 = temp__5720__auto___27805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27738_27806__$1)){
var c__4550__auto___27807 = cljs.core.chunk_first.call(null,seq__27738_27806__$1);
var G__27808 = cljs.core.chunk_rest.call(null,seq__27738_27806__$1);
var G__27809 = c__4550__auto___27807;
var G__27810 = cljs.core.count.call(null,c__4550__auto___27807);
var G__27811 = (0);
seq__27738_27794 = G__27808;
chunk__27739_27795 = G__27809;
count__27740_27796 = G__27810;
i__27741_27797 = G__27811;
continue;
} else {
var vec__27751_27812 = cljs.core.first.call(null,seq__27738_27806__$1);
var n_27813 = cljs.core.nth.call(null,vec__27751_27812,(0),null);
var meth_27814 = cljs.core.nth.call(null,vec__27751_27812,(1),null);
cljs.compiler.emits.call(null,"var ",n_27813," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27814))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27814);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27814);
}

cljs.compiler.emitln.call(null,";");


var G__27815 = cljs.core.next.call(null,seq__27738_27806__$1);
var G__27816 = null;
var G__27817 = (0);
var G__27818 = (0);
seq__27738_27794 = G__27815;
chunk__27739_27795 = G__27816;
count__27740_27796 = G__27817;
i__27741_27797 = G__27818;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_27790," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_27791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_27791)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_27791));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__27754_27819 = cljs.core.seq.call(null,ms_27793);
var chunk__27755_27820 = null;
var count__27756_27821 = (0);
var i__27757_27822 = (0);
while(true){
if((i__27757_27822 < count__27756_27821)){
var vec__27764_27823 = cljs.core._nth.call(null,chunk__27755_27820,i__27757_27822);
var n_27824 = cljs.core.nth.call(null,vec__27764_27823,(0),null);
var meth_27825 = cljs.core.nth.call(null,vec__27764_27823,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27825))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27826 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27826," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27827 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27826," = new cljs.core.IndexedSeq(",a_27827,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27824,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27791)),(((cljs.core.count.call(null,maxparams_27791) > (1)))?", ":null),restarg_27826,");");
} else {
var pcnt_27828 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27825));
cljs.compiler.emitln.call(null,"case ",pcnt_27828,":");

cljs.compiler.emitln.call(null,"return ",n_27824,".call(this",(((pcnt_27828 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27828,maxparams_27791)),null,(1),null)),(2),null))),");");
}


var G__27829 = seq__27754_27819;
var G__27830 = chunk__27755_27820;
var G__27831 = count__27756_27821;
var G__27832 = (i__27757_27822 + (1));
seq__27754_27819 = G__27829;
chunk__27755_27820 = G__27830;
count__27756_27821 = G__27831;
i__27757_27822 = G__27832;
continue;
} else {
var temp__5720__auto___27833 = cljs.core.seq.call(null,seq__27754_27819);
if(temp__5720__auto___27833){
var seq__27754_27834__$1 = temp__5720__auto___27833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27754_27834__$1)){
var c__4550__auto___27835 = cljs.core.chunk_first.call(null,seq__27754_27834__$1);
var G__27836 = cljs.core.chunk_rest.call(null,seq__27754_27834__$1);
var G__27837 = c__4550__auto___27835;
var G__27838 = cljs.core.count.call(null,c__4550__auto___27835);
var G__27839 = (0);
seq__27754_27819 = G__27836;
chunk__27755_27820 = G__27837;
count__27756_27821 = G__27838;
i__27757_27822 = G__27839;
continue;
} else {
var vec__27767_27840 = cljs.core.first.call(null,seq__27754_27834__$1);
var n_27841 = cljs.core.nth.call(null,vec__27767_27840,(0),null);
var meth_27842 = cljs.core.nth.call(null,vec__27767_27840,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27842))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27843 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27843," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27844 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27843," = new cljs.core.IndexedSeq(",a_27844,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27841,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27791)),(((cljs.core.count.call(null,maxparams_27791) > (1)))?", ":null),restarg_27843,");");
} else {
var pcnt_27845 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27842));
cljs.compiler.emitln.call(null,"case ",pcnt_27845,":");

cljs.compiler.emitln.call(null,"return ",n_27841,".call(this",(((pcnt_27845 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27845,maxparams_27791)),null,(1),null)),(2),null))),");");
}


var G__27846 = cljs.core.next.call(null,seq__27754_27834__$1);
var G__27847 = null;
var G__27848 = (0);
var G__27849 = (0);
seq__27754_27819 = G__27846;
chunk__27755_27820 = G__27847;
count__27756_27821 = G__27848;
i__27757_27822 = G__27849;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_27850 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_27793)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_27850,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_27790,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_27790,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_27789__$1,mname_27790,maxparams_27791,mmap_27792,ms_27793,loop_locals,map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27734_SHARP_){
var vec__27770 = p1__27734_SHARP_;
var n = cljs.core.nth.call(null,vec__27770,(0),null);
var m = cljs.core.nth.call(null,vec__27770,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_27789__$1,mname_27790,maxparams_27791,mmap_27792,ms_27793,loop_locals,map__27736,map__27736__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_27793),".cljs$lang$applyTo;");
} else {
}

var seq__27773_27851 = cljs.core.seq.call(null,ms_27793);
var chunk__27774_27852 = null;
var count__27775_27853 = (0);
var i__27776_27854 = (0);
while(true){
if((i__27776_27854 < count__27775_27853)){
var vec__27783_27855 = cljs.core._nth.call(null,chunk__27774_27852,i__27776_27854);
var n_27856 = cljs.core.nth.call(null,vec__27783_27855,(0),null);
var meth_27857 = cljs.core.nth.call(null,vec__27783_27855,(1),null);
var c_27858 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27857));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27857))){
cljs.compiler.emitln.call(null,mname_27790,".cljs$core$IFn$_invoke$arity$variadic = ",n_27856,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27790,".cljs$core$IFn$_invoke$arity$",c_27858," = ",n_27856,";");
}


var G__27859 = seq__27773_27851;
var G__27860 = chunk__27774_27852;
var G__27861 = count__27775_27853;
var G__27862 = (i__27776_27854 + (1));
seq__27773_27851 = G__27859;
chunk__27774_27852 = G__27860;
count__27775_27853 = G__27861;
i__27776_27854 = G__27862;
continue;
} else {
var temp__5720__auto___27863 = cljs.core.seq.call(null,seq__27773_27851);
if(temp__5720__auto___27863){
var seq__27773_27864__$1 = temp__5720__auto___27863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27773_27864__$1)){
var c__4550__auto___27865 = cljs.core.chunk_first.call(null,seq__27773_27864__$1);
var G__27866 = cljs.core.chunk_rest.call(null,seq__27773_27864__$1);
var G__27867 = c__4550__auto___27865;
var G__27868 = cljs.core.count.call(null,c__4550__auto___27865);
var G__27869 = (0);
seq__27773_27851 = G__27866;
chunk__27774_27852 = G__27867;
count__27775_27853 = G__27868;
i__27776_27854 = G__27869;
continue;
} else {
var vec__27786_27870 = cljs.core.first.call(null,seq__27773_27864__$1);
var n_27871 = cljs.core.nth.call(null,vec__27786_27870,(0),null);
var meth_27872 = cljs.core.nth.call(null,vec__27786_27870,(1),null);
var c_27873 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27872));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27872))){
cljs.compiler.emitln.call(null,mname_27790,".cljs$core$IFn$_invoke$arity$variadic = ",n_27871,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27790,".cljs$core$IFn$_invoke$arity$",c_27873," = ",n_27871,";");
}


var G__27874 = cljs.core.next.call(null,seq__27773_27864__$1);
var G__27875 = null;
var G__27876 = (0);
var G__27877 = (0);
seq__27773_27851 = G__27874;
chunk__27774_27852 = G__27875;
count__27775_27853 = G__27876;
i__27776_27854 = G__27877;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_27790,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27878){
var map__27879 = p__27878;
var map__27879__$1 = (((((!((map__27879 == null))))?(((((map__27879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27879):map__27879);
var statements = cljs.core.get.call(null,map__27879__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27879__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27879__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__27881_27885 = cljs.core.seq.call(null,statements);
var chunk__27882_27886 = null;
var count__27883_27887 = (0);
var i__27884_27888 = (0);
while(true){
if((i__27884_27888 < count__27883_27887)){
var s_27889 = cljs.core._nth.call(null,chunk__27882_27886,i__27884_27888);
cljs.compiler.emitln.call(null,s_27889);


var G__27890 = seq__27881_27885;
var G__27891 = chunk__27882_27886;
var G__27892 = count__27883_27887;
var G__27893 = (i__27884_27888 + (1));
seq__27881_27885 = G__27890;
chunk__27882_27886 = G__27891;
count__27883_27887 = G__27892;
i__27884_27888 = G__27893;
continue;
} else {
var temp__5720__auto___27894 = cljs.core.seq.call(null,seq__27881_27885);
if(temp__5720__auto___27894){
var seq__27881_27895__$1 = temp__5720__auto___27894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27881_27895__$1)){
var c__4550__auto___27896 = cljs.core.chunk_first.call(null,seq__27881_27895__$1);
var G__27897 = cljs.core.chunk_rest.call(null,seq__27881_27895__$1);
var G__27898 = c__4550__auto___27896;
var G__27899 = cljs.core.count.call(null,c__4550__auto___27896);
var G__27900 = (0);
seq__27881_27885 = G__27897;
chunk__27882_27886 = G__27898;
count__27883_27887 = G__27899;
i__27884_27888 = G__27900;
continue;
} else {
var s_27901 = cljs.core.first.call(null,seq__27881_27895__$1);
cljs.compiler.emitln.call(null,s_27901);


var G__27902 = cljs.core.next.call(null,seq__27881_27895__$1);
var G__27903 = null;
var G__27904 = (0);
var G__27905 = (0);
seq__27881_27885 = G__27902;
chunk__27882_27886 = G__27903;
count__27883_27887 = G__27904;
i__27884_27888 = G__27905;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__27906){
var map__27907 = p__27906;
var map__27907__$1 = (((((!((map__27907 == null))))?(((((map__27907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27907):map__27907);
var try$ = cljs.core.get.call(null,map__27907__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__27907__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__27907__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__27907__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__27907__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27909,is_loop){
var map__27910 = p__27909;
var map__27910__$1 = (((((!((map__27910 == null))))?(((((map__27910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27910):map__27910);
var expr = cljs.core.get.call(null,map__27910__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27910__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27910__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__27912_27926 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__27913_27927 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__27912_27926,context,map__27910,map__27910__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__27912_27926,context,map__27910,map__27910__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__27913_27927;

try{var seq__27914_27928 = cljs.core.seq.call(null,bindings);
var chunk__27915_27929 = null;
var count__27916_27930 = (0);
var i__27917_27931 = (0);
while(true){
if((i__27917_27931 < count__27916_27930)){
var map__27922_27932 = cljs.core._nth.call(null,chunk__27915_27929,i__27917_27931);
var map__27922_27933__$1 = (((((!((map__27922_27932 == null))))?(((((map__27922_27932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27922_27932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27922_27932):map__27922_27932);
var binding_27934 = map__27922_27933__$1;
var init_27935 = cljs.core.get.call(null,map__27922_27933__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27934);

cljs.compiler.emitln.call(null," = ",init_27935,";");


var G__27936 = seq__27914_27928;
var G__27937 = chunk__27915_27929;
var G__27938 = count__27916_27930;
var G__27939 = (i__27917_27931 + (1));
seq__27914_27928 = G__27936;
chunk__27915_27929 = G__27937;
count__27916_27930 = G__27938;
i__27917_27931 = G__27939;
continue;
} else {
var temp__5720__auto___27940 = cljs.core.seq.call(null,seq__27914_27928);
if(temp__5720__auto___27940){
var seq__27914_27941__$1 = temp__5720__auto___27940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27914_27941__$1)){
var c__4550__auto___27942 = cljs.core.chunk_first.call(null,seq__27914_27941__$1);
var G__27943 = cljs.core.chunk_rest.call(null,seq__27914_27941__$1);
var G__27944 = c__4550__auto___27942;
var G__27945 = cljs.core.count.call(null,c__4550__auto___27942);
var G__27946 = (0);
seq__27914_27928 = G__27943;
chunk__27915_27929 = G__27944;
count__27916_27930 = G__27945;
i__27917_27931 = G__27946;
continue;
} else {
var map__27924_27947 = cljs.core.first.call(null,seq__27914_27941__$1);
var map__27924_27948__$1 = (((((!((map__27924_27947 == null))))?(((((map__27924_27947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27924_27947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27924_27947):map__27924_27947);
var binding_27949 = map__27924_27948__$1;
var init_27950 = cljs.core.get.call(null,map__27924_27948__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27949);

cljs.compiler.emitln.call(null," = ",init_27950,";");


var G__27951 = cljs.core.next.call(null,seq__27914_27941__$1);
var G__27952 = null;
var G__27953 = (0);
var G__27954 = (0);
seq__27914_27928 = G__27951;
chunk__27915_27929 = G__27952;
count__27916_27930 = G__27953;
i__27917_27931 = G__27954;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__27912_27926;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__27955){
var map__27956 = p__27955;
var map__27956__$1 = (((((!((map__27956 == null))))?(((((map__27956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27956):map__27956);
var frame = cljs.core.get.call(null,map__27956__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__27956__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__27956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___27958 = cljs.core.count.call(null,exprs);
var i_27959 = (0);
while(true){
if((i_27959 < n__4607__auto___27958)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_27959)," = ",exprs.call(null,i_27959),";");

var G__27960 = (i_27959 + (1));
i_27959 = G__27960;
continue;
} else {
}
break;
}

var n__4607__auto___27961 = cljs.core.count.call(null,exprs);
var i_27962 = (0);
while(true){
if((i_27962 < n__4607__auto___27961)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_27962))," = ",temps.call(null,i_27962),";");

var G__27963 = (i_27962 + (1));
i_27962 = G__27963;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__27964){
var map__27965 = p__27964;
var map__27965__$1 = (((((!((map__27965 == null))))?(((((map__27965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27965):map__27965);
var expr = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__27967_27979 = cljs.core.seq.call(null,bindings);
var chunk__27968_27980 = null;
var count__27969_27981 = (0);
var i__27970_27982 = (0);
while(true){
if((i__27970_27982 < count__27969_27981)){
var map__27975_27983 = cljs.core._nth.call(null,chunk__27968_27980,i__27970_27982);
var map__27975_27984__$1 = (((((!((map__27975_27983 == null))))?(((((map__27975_27983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27975_27983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27975_27983):map__27975_27983);
var binding_27985 = map__27975_27984__$1;
var init_27986 = cljs.core.get.call(null,map__27975_27984__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27985)," = ",init_27986,";");


var G__27987 = seq__27967_27979;
var G__27988 = chunk__27968_27980;
var G__27989 = count__27969_27981;
var G__27990 = (i__27970_27982 + (1));
seq__27967_27979 = G__27987;
chunk__27968_27980 = G__27988;
count__27969_27981 = G__27989;
i__27970_27982 = G__27990;
continue;
} else {
var temp__5720__auto___27991 = cljs.core.seq.call(null,seq__27967_27979);
if(temp__5720__auto___27991){
var seq__27967_27992__$1 = temp__5720__auto___27991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27967_27992__$1)){
var c__4550__auto___27993 = cljs.core.chunk_first.call(null,seq__27967_27992__$1);
var G__27994 = cljs.core.chunk_rest.call(null,seq__27967_27992__$1);
var G__27995 = c__4550__auto___27993;
var G__27996 = cljs.core.count.call(null,c__4550__auto___27993);
var G__27997 = (0);
seq__27967_27979 = G__27994;
chunk__27968_27980 = G__27995;
count__27969_27981 = G__27996;
i__27970_27982 = G__27997;
continue;
} else {
var map__27977_27998 = cljs.core.first.call(null,seq__27967_27992__$1);
var map__27977_27999__$1 = (((((!((map__27977_27998 == null))))?(((((map__27977_27998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27977_27998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27977_27998):map__27977_27998);
var binding_28000 = map__27977_27999__$1;
var init_28001 = cljs.core.get.call(null,map__27977_27999__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28000)," = ",init_28001,";");


var G__28002 = cljs.core.next.call(null,seq__27967_27992__$1);
var G__28003 = null;
var G__28004 = (0);
var G__28005 = (0);
seq__27967_27979 = G__28002;
chunk__27968_27980 = G__28003;
count__27969_27981 = G__28004;
i__27970_27982 = G__28005;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__28008){
var map__28009 = p__28008;
var map__28009__$1 = (((((!((map__28009 == null))))?(((((map__28009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28009):map__28009);
var expr = map__28009__$1;
var f = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28011 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env){
return (function (p1__28006_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28006_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env){
return (function (p1__28007_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28007_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28009,map__28009__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__28011,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__28011,(1),null);
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_28014 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_28014,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_28015 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_28015,args)),(((mfa_28015 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_28015,args)),"], 0))");
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
var fprop_28016 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_28016," ? ",f__$1,fprop_28016,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_28016," ? ",f__$1,fprop_28016,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__28017){
var map__28018 = p__28017;
var map__28018__$1 = (((((!((map__28018 == null))))?(((((map__28018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28018):map__28018);
var ctor = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__28020){
var map__28021 = p__28020;
var map__28021__$1 = (((((!((map__28021 == null))))?(((((map__28021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28021):map__28021);
var target = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
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
var map__28023 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28023__$1 = (((((!((map__28023 == null))))?(((((map__28023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);
var options = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__28024 = options;
var map__28024__$1 = (((((!((map__28024 == null))))?(((((map__28024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28024):map__28024);
var target = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__28025 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__28030 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__28030__$1 = (((((!((map__28030 == null))))?(((((map__28030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28030):map__28030);
var node_libs = cljs.core.get.call(null,map__28030__$1,true);
var libs_to_load = cljs.core.get.call(null,map__28030__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__28025,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__28025,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__28032_28052 = cljs.core.seq.call(null,libs_to_load);
var chunk__28033_28053 = null;
var count__28034_28054 = (0);
var i__28035_28055 = (0);
while(true){
if((i__28035_28055 < count__28034_28054)){
var lib_28056 = cljs.core._nth.call(null,chunk__28033_28053,i__28035_28055);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28056)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28056),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28056),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28056),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28056),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28056,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28056),"');");
}

}
}
}


var G__28057 = seq__28032_28052;
var G__28058 = chunk__28033_28053;
var G__28059 = count__28034_28054;
var G__28060 = (i__28035_28055 + (1));
seq__28032_28052 = G__28057;
chunk__28033_28053 = G__28058;
count__28034_28054 = G__28059;
i__28035_28055 = G__28060;
continue;
} else {
var temp__5720__auto___28061 = cljs.core.seq.call(null,seq__28032_28052);
if(temp__5720__auto___28061){
var seq__28032_28062__$1 = temp__5720__auto___28061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28032_28062__$1)){
var c__4550__auto___28063 = cljs.core.chunk_first.call(null,seq__28032_28062__$1);
var G__28064 = cljs.core.chunk_rest.call(null,seq__28032_28062__$1);
var G__28065 = c__4550__auto___28063;
var G__28066 = cljs.core.count.call(null,c__4550__auto___28063);
var G__28067 = (0);
seq__28032_28052 = G__28064;
chunk__28033_28053 = G__28065;
count__28034_28054 = G__28066;
i__28035_28055 = G__28067;
continue;
} else {
var lib_28068 = cljs.core.first.call(null,seq__28032_28062__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28068)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28068),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28068),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28068),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28068),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28068,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28068),"');");
}

}
}
}


var G__28069 = cljs.core.next.call(null,seq__28032_28062__$1);
var G__28070 = null;
var G__28071 = (0);
var G__28072 = (0);
seq__28032_28052 = G__28069;
chunk__28033_28053 = G__28070;
count__28034_28054 = G__28071;
i__28035_28055 = G__28072;
continue;
}
} else {
}
}
break;
}

var seq__28036_28073 = cljs.core.seq.call(null,node_libs);
var chunk__28037_28074 = null;
var count__28038_28075 = (0);
var i__28039_28076 = (0);
while(true){
if((i__28039_28076 < count__28038_28075)){
var lib_28077 = cljs.core._nth.call(null,chunk__28037_28074,i__28039_28076);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28077)," = require('",lib_28077,"');");


var G__28078 = seq__28036_28073;
var G__28079 = chunk__28037_28074;
var G__28080 = count__28038_28075;
var G__28081 = (i__28039_28076 + (1));
seq__28036_28073 = G__28078;
chunk__28037_28074 = G__28079;
count__28038_28075 = G__28080;
i__28039_28076 = G__28081;
continue;
} else {
var temp__5720__auto___28082 = cljs.core.seq.call(null,seq__28036_28073);
if(temp__5720__auto___28082){
var seq__28036_28083__$1 = temp__5720__auto___28082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28036_28083__$1)){
var c__4550__auto___28084 = cljs.core.chunk_first.call(null,seq__28036_28083__$1);
var G__28085 = cljs.core.chunk_rest.call(null,seq__28036_28083__$1);
var G__28086 = c__4550__auto___28084;
var G__28087 = cljs.core.count.call(null,c__4550__auto___28084);
var G__28088 = (0);
seq__28036_28073 = G__28085;
chunk__28037_28074 = G__28086;
count__28038_28075 = G__28087;
i__28039_28076 = G__28088;
continue;
} else {
var lib_28089 = cljs.core.first.call(null,seq__28036_28083__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28089)," = require('",lib_28089,"');");


var G__28090 = cljs.core.next.call(null,seq__28036_28083__$1);
var G__28091 = null;
var G__28092 = (0);
var G__28093 = (0);
seq__28036_28073 = G__28090;
chunk__28037_28074 = G__28091;
count__28038_28075 = G__28092;
i__28039_28076 = G__28093;
continue;
}
} else {
}
}
break;
}

var seq__28040_28094 = cljs.core.seq.call(null,global_exports_libs);
var chunk__28041_28095 = null;
var count__28042_28096 = (0);
var i__28043_28097 = (0);
while(true){
if((i__28043_28097 < count__28042_28096)){
var lib_28098 = cljs.core._nth.call(null,chunk__28041_28095,i__28043_28097);
var map__28048_28099 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28098));
var map__28048_28100__$1 = (((((!((map__28048_28099 == null))))?(((((map__28048_28099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28048_28099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28048_28099):map__28048_28099);
var global_exports_28101 = cljs.core.get.call(null,map__28048_28100__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28101,lib_28098);


var G__28102 = seq__28040_28094;
var G__28103 = chunk__28041_28095;
var G__28104 = count__28042_28096;
var G__28105 = (i__28043_28097 + (1));
seq__28040_28094 = G__28102;
chunk__28041_28095 = G__28103;
count__28042_28096 = G__28104;
i__28043_28097 = G__28105;
continue;
} else {
var temp__5720__auto___28106 = cljs.core.seq.call(null,seq__28040_28094);
if(temp__5720__auto___28106){
var seq__28040_28107__$1 = temp__5720__auto___28106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28040_28107__$1)){
var c__4550__auto___28108 = cljs.core.chunk_first.call(null,seq__28040_28107__$1);
var G__28109 = cljs.core.chunk_rest.call(null,seq__28040_28107__$1);
var G__28110 = c__4550__auto___28108;
var G__28111 = cljs.core.count.call(null,c__4550__auto___28108);
var G__28112 = (0);
seq__28040_28094 = G__28109;
chunk__28041_28095 = G__28110;
count__28042_28096 = G__28111;
i__28043_28097 = G__28112;
continue;
} else {
var lib_28113 = cljs.core.first.call(null,seq__28040_28107__$1);
var map__28050_28114 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28113));
var map__28050_28115__$1 = (((((!((map__28050_28114 == null))))?(((((map__28050_28114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28050_28114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28050_28114):map__28050_28114);
var global_exports_28116 = cljs.core.get.call(null,map__28050_28115__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28116,lib_28113);


var G__28117 = cljs.core.next.call(null,seq__28040_28107__$1);
var G__28118 = null;
var G__28119 = (0);
var G__28120 = (0);
seq__28040_28094 = G__28117;
chunk__28041_28095 = G__28118;
count__28042_28096 = G__28119;
i__28043_28097 = G__28120;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__28121){
var map__28122 = p__28121;
var map__28122__$1 = (((((!((map__28122 == null))))?(((((map__28122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28122):map__28122);
var name = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__28124){
var map__28125 = p__28124;
var map__28125__$1 = (((((!((map__28125 == null))))?(((((map__28125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28125):map__28125);
var name = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__28127){
var map__28128 = p__28127;
var map__28128__$1 = (((((!((map__28128 == null))))?(((((map__28128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28128):map__28128);
var t = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28130_28154 = cljs.core.seq.call(null,protocols);
var chunk__28131_28155 = null;
var count__28132_28156 = (0);
var i__28133_28157 = (0);
while(true){
if((i__28133_28157 < count__28132_28156)){
var protocol_28158 = cljs.core._nth.call(null,chunk__28131_28155,i__28133_28157);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28158)),"}");


var G__28159 = seq__28130_28154;
var G__28160 = chunk__28131_28155;
var G__28161 = count__28132_28156;
var G__28162 = (i__28133_28157 + (1));
seq__28130_28154 = G__28159;
chunk__28131_28155 = G__28160;
count__28132_28156 = G__28161;
i__28133_28157 = G__28162;
continue;
} else {
var temp__5720__auto___28163 = cljs.core.seq.call(null,seq__28130_28154);
if(temp__5720__auto___28163){
var seq__28130_28164__$1 = temp__5720__auto___28163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28130_28164__$1)){
var c__4550__auto___28165 = cljs.core.chunk_first.call(null,seq__28130_28164__$1);
var G__28166 = cljs.core.chunk_rest.call(null,seq__28130_28164__$1);
var G__28167 = c__4550__auto___28165;
var G__28168 = cljs.core.count.call(null,c__4550__auto___28165);
var G__28169 = (0);
seq__28130_28154 = G__28166;
chunk__28131_28155 = G__28167;
count__28132_28156 = G__28168;
i__28133_28157 = G__28169;
continue;
} else {
var protocol_28170 = cljs.core.first.call(null,seq__28130_28164__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28170)),"}");


var G__28171 = cljs.core.next.call(null,seq__28130_28164__$1);
var G__28172 = null;
var G__28173 = (0);
var G__28174 = (0);
seq__28130_28154 = G__28171;
chunk__28131_28155 = G__28172;
count__28132_28156 = G__28173;
i__28133_28157 = G__28174;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28134_28175 = cljs.core.seq.call(null,fields__$1);
var chunk__28135_28176 = null;
var count__28136_28177 = (0);
var i__28137_28178 = (0);
while(true){
if((i__28137_28178 < count__28136_28177)){
var fld_28179 = cljs.core._nth.call(null,chunk__28135_28176,i__28137_28178);
cljs.compiler.emitln.call(null,"this.",fld_28179," = ",fld_28179,";");


var G__28180 = seq__28134_28175;
var G__28181 = chunk__28135_28176;
var G__28182 = count__28136_28177;
var G__28183 = (i__28137_28178 + (1));
seq__28134_28175 = G__28180;
chunk__28135_28176 = G__28181;
count__28136_28177 = G__28182;
i__28137_28178 = G__28183;
continue;
} else {
var temp__5720__auto___28184 = cljs.core.seq.call(null,seq__28134_28175);
if(temp__5720__auto___28184){
var seq__28134_28185__$1 = temp__5720__auto___28184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28134_28185__$1)){
var c__4550__auto___28186 = cljs.core.chunk_first.call(null,seq__28134_28185__$1);
var G__28187 = cljs.core.chunk_rest.call(null,seq__28134_28185__$1);
var G__28188 = c__4550__auto___28186;
var G__28189 = cljs.core.count.call(null,c__4550__auto___28186);
var G__28190 = (0);
seq__28134_28175 = G__28187;
chunk__28135_28176 = G__28188;
count__28136_28177 = G__28189;
i__28137_28178 = G__28190;
continue;
} else {
var fld_28191 = cljs.core.first.call(null,seq__28134_28185__$1);
cljs.compiler.emitln.call(null,"this.",fld_28191," = ",fld_28191,";");


var G__28192 = cljs.core.next.call(null,seq__28134_28185__$1);
var G__28193 = null;
var G__28194 = (0);
var G__28195 = (0);
seq__28134_28175 = G__28192;
chunk__28135_28176 = G__28193;
count__28136_28177 = G__28194;
i__28137_28178 = G__28195;
continue;
}
} else {
}
}
break;
}

var seq__28138_28196 = cljs.core.seq.call(null,pmasks);
var chunk__28139_28197 = null;
var count__28140_28198 = (0);
var i__28141_28199 = (0);
while(true){
if((i__28141_28199 < count__28140_28198)){
var vec__28148_28200 = cljs.core._nth.call(null,chunk__28139_28197,i__28141_28199);
var pno_28201 = cljs.core.nth.call(null,vec__28148_28200,(0),null);
var pmask_28202 = cljs.core.nth.call(null,vec__28148_28200,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28201,"$ = ",pmask_28202,";");


var G__28203 = seq__28138_28196;
var G__28204 = chunk__28139_28197;
var G__28205 = count__28140_28198;
var G__28206 = (i__28141_28199 + (1));
seq__28138_28196 = G__28203;
chunk__28139_28197 = G__28204;
count__28140_28198 = G__28205;
i__28141_28199 = G__28206;
continue;
} else {
var temp__5720__auto___28207 = cljs.core.seq.call(null,seq__28138_28196);
if(temp__5720__auto___28207){
var seq__28138_28208__$1 = temp__5720__auto___28207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28138_28208__$1)){
var c__4550__auto___28209 = cljs.core.chunk_first.call(null,seq__28138_28208__$1);
var G__28210 = cljs.core.chunk_rest.call(null,seq__28138_28208__$1);
var G__28211 = c__4550__auto___28209;
var G__28212 = cljs.core.count.call(null,c__4550__auto___28209);
var G__28213 = (0);
seq__28138_28196 = G__28210;
chunk__28139_28197 = G__28211;
count__28140_28198 = G__28212;
i__28141_28199 = G__28213;
continue;
} else {
var vec__28151_28214 = cljs.core.first.call(null,seq__28138_28208__$1);
var pno_28215 = cljs.core.nth.call(null,vec__28151_28214,(0),null);
var pmask_28216 = cljs.core.nth.call(null,vec__28151_28214,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28215,"$ = ",pmask_28216,";");


var G__28217 = cljs.core.next.call(null,seq__28138_28208__$1);
var G__28218 = null;
var G__28219 = (0);
var G__28220 = (0);
seq__28138_28196 = G__28217;
chunk__28139_28197 = G__28218;
count__28140_28198 = G__28219;
i__28141_28199 = G__28220;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__28221){
var map__28222 = p__28221;
var map__28222__$1 = (((((!((map__28222 == null))))?(((((map__28222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28222):map__28222);
var t = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28224_28248 = cljs.core.seq.call(null,protocols);
var chunk__28225_28249 = null;
var count__28226_28250 = (0);
var i__28227_28251 = (0);
while(true){
if((i__28227_28251 < count__28226_28250)){
var protocol_28252 = cljs.core._nth.call(null,chunk__28225_28249,i__28227_28251);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28252)),"}");


var G__28253 = seq__28224_28248;
var G__28254 = chunk__28225_28249;
var G__28255 = count__28226_28250;
var G__28256 = (i__28227_28251 + (1));
seq__28224_28248 = G__28253;
chunk__28225_28249 = G__28254;
count__28226_28250 = G__28255;
i__28227_28251 = G__28256;
continue;
} else {
var temp__5720__auto___28257 = cljs.core.seq.call(null,seq__28224_28248);
if(temp__5720__auto___28257){
var seq__28224_28258__$1 = temp__5720__auto___28257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28224_28258__$1)){
var c__4550__auto___28259 = cljs.core.chunk_first.call(null,seq__28224_28258__$1);
var G__28260 = cljs.core.chunk_rest.call(null,seq__28224_28258__$1);
var G__28261 = c__4550__auto___28259;
var G__28262 = cljs.core.count.call(null,c__4550__auto___28259);
var G__28263 = (0);
seq__28224_28248 = G__28260;
chunk__28225_28249 = G__28261;
count__28226_28250 = G__28262;
i__28227_28251 = G__28263;
continue;
} else {
var protocol_28264 = cljs.core.first.call(null,seq__28224_28258__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28264)),"}");


var G__28265 = cljs.core.next.call(null,seq__28224_28258__$1);
var G__28266 = null;
var G__28267 = (0);
var G__28268 = (0);
seq__28224_28248 = G__28265;
chunk__28225_28249 = G__28266;
count__28226_28250 = G__28267;
i__28227_28251 = G__28268;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28228_28269 = cljs.core.seq.call(null,fields__$1);
var chunk__28229_28270 = null;
var count__28230_28271 = (0);
var i__28231_28272 = (0);
while(true){
if((i__28231_28272 < count__28230_28271)){
var fld_28273 = cljs.core._nth.call(null,chunk__28229_28270,i__28231_28272);
cljs.compiler.emitln.call(null,"this.",fld_28273," = ",fld_28273,";");


var G__28274 = seq__28228_28269;
var G__28275 = chunk__28229_28270;
var G__28276 = count__28230_28271;
var G__28277 = (i__28231_28272 + (1));
seq__28228_28269 = G__28274;
chunk__28229_28270 = G__28275;
count__28230_28271 = G__28276;
i__28231_28272 = G__28277;
continue;
} else {
var temp__5720__auto___28278 = cljs.core.seq.call(null,seq__28228_28269);
if(temp__5720__auto___28278){
var seq__28228_28279__$1 = temp__5720__auto___28278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28228_28279__$1)){
var c__4550__auto___28280 = cljs.core.chunk_first.call(null,seq__28228_28279__$1);
var G__28281 = cljs.core.chunk_rest.call(null,seq__28228_28279__$1);
var G__28282 = c__4550__auto___28280;
var G__28283 = cljs.core.count.call(null,c__4550__auto___28280);
var G__28284 = (0);
seq__28228_28269 = G__28281;
chunk__28229_28270 = G__28282;
count__28230_28271 = G__28283;
i__28231_28272 = G__28284;
continue;
} else {
var fld_28285 = cljs.core.first.call(null,seq__28228_28279__$1);
cljs.compiler.emitln.call(null,"this.",fld_28285," = ",fld_28285,";");


var G__28286 = cljs.core.next.call(null,seq__28228_28279__$1);
var G__28287 = null;
var G__28288 = (0);
var G__28289 = (0);
seq__28228_28269 = G__28286;
chunk__28229_28270 = G__28287;
count__28230_28271 = G__28288;
i__28231_28272 = G__28289;
continue;
}
} else {
}
}
break;
}

var seq__28232_28290 = cljs.core.seq.call(null,pmasks);
var chunk__28233_28291 = null;
var count__28234_28292 = (0);
var i__28235_28293 = (0);
while(true){
if((i__28235_28293 < count__28234_28292)){
var vec__28242_28294 = cljs.core._nth.call(null,chunk__28233_28291,i__28235_28293);
var pno_28295 = cljs.core.nth.call(null,vec__28242_28294,(0),null);
var pmask_28296 = cljs.core.nth.call(null,vec__28242_28294,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28295,"$ = ",pmask_28296,";");


var G__28297 = seq__28232_28290;
var G__28298 = chunk__28233_28291;
var G__28299 = count__28234_28292;
var G__28300 = (i__28235_28293 + (1));
seq__28232_28290 = G__28297;
chunk__28233_28291 = G__28298;
count__28234_28292 = G__28299;
i__28235_28293 = G__28300;
continue;
} else {
var temp__5720__auto___28301 = cljs.core.seq.call(null,seq__28232_28290);
if(temp__5720__auto___28301){
var seq__28232_28302__$1 = temp__5720__auto___28301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28232_28302__$1)){
var c__4550__auto___28303 = cljs.core.chunk_first.call(null,seq__28232_28302__$1);
var G__28304 = cljs.core.chunk_rest.call(null,seq__28232_28302__$1);
var G__28305 = c__4550__auto___28303;
var G__28306 = cljs.core.count.call(null,c__4550__auto___28303);
var G__28307 = (0);
seq__28232_28290 = G__28304;
chunk__28233_28291 = G__28305;
count__28234_28292 = G__28306;
i__28235_28293 = G__28307;
continue;
} else {
var vec__28245_28308 = cljs.core.first.call(null,seq__28232_28302__$1);
var pno_28309 = cljs.core.nth.call(null,vec__28245_28308,(0),null);
var pmask_28310 = cljs.core.nth.call(null,vec__28245_28308,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28309,"$ = ",pmask_28310,";");


var G__28311 = cljs.core.next.call(null,seq__28232_28302__$1);
var G__28312 = null;
var G__28313 = (0);
var G__28314 = (0);
seq__28232_28290 = G__28311;
chunk__28233_28291 = G__28312;
count__28234_28292 = G__28313;
i__28235_28293 = G__28314;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__28315){
var map__28316 = p__28315;
var map__28316__$1 = (((((!((map__28316 == null))))?(((((map__28316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28316):map__28316);
var target = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__28318){
var map__28319 = p__28318;
var map__28319__$1 = (((((!((map__28319 == null))))?(((((map__28319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28319):map__28319);
var op = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__27113__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27113__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__28325 = cljs.core.seq.call(null,table);
var chunk__28326 = null;
var count__28327 = (0);
var i__28328 = (0);
while(true){
if((i__28328 < count__28327)){
var vec__28335 = cljs.core._nth.call(null,chunk__28326,i__28328);
var sym = cljs.core.nth.call(null,vec__28335,(0),null);
var value = cljs.core.nth.call(null,vec__28335,(1),null);
var ns_28341 = cljs.core.namespace.call(null,sym);
var name_28342 = cljs.core.name.call(null,sym);
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


var G__28343 = seq__28325;
var G__28344 = chunk__28326;
var G__28345 = count__28327;
var G__28346 = (i__28328 + (1));
seq__28325 = G__28343;
chunk__28326 = G__28344;
count__28327 = G__28345;
i__28328 = G__28346;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28325);
if(temp__5720__auto__){
var seq__28325__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28325__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28325__$1);
var G__28347 = cljs.core.chunk_rest.call(null,seq__28325__$1);
var G__28348 = c__4550__auto__;
var G__28349 = cljs.core.count.call(null,c__4550__auto__);
var G__28350 = (0);
seq__28325 = G__28347;
chunk__28326 = G__28348;
count__28327 = G__28349;
i__28328 = G__28350;
continue;
} else {
var vec__28338 = cljs.core.first.call(null,seq__28325__$1);
var sym = cljs.core.nth.call(null,vec__28338,(0),null);
var value = cljs.core.nth.call(null,vec__28338,(1),null);
var ns_28351 = cljs.core.namespace.call(null,sym);
var name_28352 = cljs.core.name.call(null,sym);
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


var G__28353 = cljs.core.next.call(null,seq__28325__$1);
var G__28354 = null;
var G__28355 = (0);
var G__28356 = (0);
seq__28325 = G__28353;
chunk__28326 = G__28354;
count__28327 = G__28355;
i__28328 = G__28356;
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
var G__28358 = arguments.length;
switch (G__28358) {
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
var k_28363 = cljs.core.first.call(null,ks);
var vec__28359_28364 = cljs.core.conj.call(null,prefix,k_28363);
var top_28365 = cljs.core.nth.call(null,vec__28359_28364,(0),null);
var prefix_SINGLEQUOTE__28366 = vec__28359_28364;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_28363)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__28366) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_28365)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_28365)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28366)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_28365);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28366)),";");
}
} else {
}

var m_28367 = cljs.core.get.call(null,externs,k_28363);
if(cljs.core.empty_QMARK_.call(null,m_28367)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__28366,m_28367,top_level,known_externs);
}

var G__28368 = cljs.core.next.call(null,ks);
ks = G__28368;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1601267800044
