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
var map__27130 = s;
var map__27130__$1 = (((((!((map__27130 == null))))?(((((map__27130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27130):map__27130);
var name = cljs.core.get.call(null,map__27130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27130__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__27133 = info;
var map__27134 = G__27133;
var map__27134__$1 = (((((!((map__27134 == null))))?(((((map__27134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27134):map__27134);
var shadow = cljs.core.get.call(null,map__27134__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__27133__$1 = G__27133;
while(true){
var d__$2 = d__$1;
var map__27138 = G__27133__$1;
var map__27138__$1 = (((((!((map__27138 == null))))?(((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27138):map__27138);
var shadow__$1 = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__27140 = (d__$2 + (1));
var G__27141 = shadow__$1;
d__$1 = G__27140;
G__27133__$1 = G__27141;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__27142){
var map__27143 = p__27142;
var map__27143__$1 = (((((!((map__27143 == null))))?(((((map__27143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27143):map__27143);
var name_var = map__27143__$1;
var name = cljs.core.get.call(null,map__27143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27143__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__27145 = info;
var map__27145__$1 = (((((!((map__27145 == null))))?(((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var ns = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__27148 = arguments.length;
switch (G__27148) {
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
var G__27150 = cp;
switch (G__27150) {
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
var seq__27152_27156 = cljs.core.seq.call(null,s);
var chunk__27153_27157 = null;
var count__27154_27158 = (0);
var i__27155_27159 = (0);
while(true){
if((i__27155_27159 < count__27154_27158)){
var c_27160 = cljs.core._nth.call(null,chunk__27153_27157,i__27155_27159);
sb.append(cljs.compiler.escape_char.call(null,c_27160));


var G__27161 = seq__27152_27156;
var G__27162 = chunk__27153_27157;
var G__27163 = count__27154_27158;
var G__27164 = (i__27155_27159 + (1));
seq__27152_27156 = G__27161;
chunk__27153_27157 = G__27162;
count__27154_27158 = G__27163;
i__27155_27159 = G__27164;
continue;
} else {
var temp__5720__auto___27165 = cljs.core.seq.call(null,seq__27152_27156);
if(temp__5720__auto___27165){
var seq__27152_27166__$1 = temp__5720__auto___27165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27152_27166__$1)){
var c__4550__auto___27167 = cljs.core.chunk_first.call(null,seq__27152_27166__$1);
var G__27168 = cljs.core.chunk_rest.call(null,seq__27152_27166__$1);
var G__27169 = c__4550__auto___27167;
var G__27170 = cljs.core.count.call(null,c__4550__auto___27167);
var G__27171 = (0);
seq__27152_27156 = G__27168;
chunk__27153_27157 = G__27169;
count__27154_27158 = G__27170;
i__27155_27159 = G__27171;
continue;
} else {
var c_27172 = cljs.core.first.call(null,seq__27152_27166__$1);
sb.append(cljs.compiler.escape_char.call(null,c_27172));


var G__27173 = cljs.core.next.call(null,seq__27152_27166__$1);
var G__27174 = null;
var G__27175 = (0);
var G__27176 = (0);
seq__27152_27156 = G__27173;
chunk__27153_27157 = G__27174;
count__27154_27158 = G__27175;
i__27155_27159 = G__27176;
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
var map__27177_27182 = ast;
var map__27177_27183__$1 = (((((!((map__27177_27182 == null))))?(((((map__27177_27182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27177_27182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27177_27182):map__27177_27182);
var env_27184 = cljs.core.get.call(null,map__27177_27183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_27184))){
var map__27179_27185 = env_27184;
var map__27179_27186__$1 = (((((!((map__27179_27185 == null))))?(((((map__27179_27185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27179_27185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27179_27185):map__27179_27185);
var line_27187 = cljs.core.get.call(null,map__27179_27186__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27188 = cljs.core.get.call(null,map__27179_27186__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__27179_27185,map__27179_27186__$1,line_27187,column_27188,map__27177_27182,map__27177_27183__$1,env_27184){
return (function (m){
var minfo = (function (){var G__27181 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__27181,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__27181;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_27187 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__27179_27185,map__27179_27186__$1,line_27187,column_27188,map__27177_27182,map__27177_27183__$1,env_27184){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_27188)?(column_27188 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__27179_27185,map__27179_27186__$1,line_27187,column_27188,map__27177_27182,map__27177_27183__$1,env_27184){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__27179_27185,map__27179_27186__$1,line_27187,column_27188,map__27177_27182,map__27177_27183__$1,env_27184))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__27179_27185,map__27179_27186__$1,line_27187,column_27188,map__27177_27182,map__27177_27183__$1,env_27184))
,cljs.core.sorted_map.call(null)));
});})(map__27179_27185,map__27179_27186__$1,line_27187,column_27188,map__27177_27182,map__27177_27183__$1,env_27184))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__27197 = arguments.length;
switch (G__27197) {
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
var len__4730__auto___27204 = arguments.length;
var i__4731__auto___27205 = (0);
while(true){
if((i__4731__auto___27205 < len__4730__auto___27204)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27205]));

var G__27206 = (i__4731__auto___27205 + (1));
i__4731__auto___27205 = G__27206;
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
var s_27207 = (function (){var G__27198 = a;
if((!(typeof a === 'string'))){
return G__27198.toString();
} else {
return G__27198;
}
})();
var temp__5724__auto___27208 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___27208 == null)){
} else {
var sm_data_27209 = temp__5724__auto___27208;
cljs.core.swap_BANG_.call(null,sm_data_27209,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_27209,temp__5724__auto___27208,s_27207){
return (function (p1__27189_SHARP_){
return (p1__27189_SHARP_ + s_27207.length);
});})(sm_data_27209,temp__5724__auto___27208,s_27207))
);
}

cljs.core.print.call(null,s_27207);

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

var seq__27199 = cljs.core.seq.call(null,xs);
var chunk__27200 = null;
var count__27201 = (0);
var i__27202 = (0);
while(true){
if((i__27202 < count__27201)){
var x = cljs.core._nth.call(null,chunk__27200,i__27202);
cljs.compiler.emits.call(null,x);


var G__27210 = seq__27199;
var G__27211 = chunk__27200;
var G__27212 = count__27201;
var G__27213 = (i__27202 + (1));
seq__27199 = G__27210;
chunk__27200 = G__27211;
count__27201 = G__27212;
i__27202 = G__27213;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27199);
if(temp__5720__auto__){
var seq__27199__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27199__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27199__$1);
var G__27214 = cljs.core.chunk_rest.call(null,seq__27199__$1);
var G__27215 = c__4550__auto__;
var G__27216 = cljs.core.count.call(null,c__4550__auto__);
var G__27217 = (0);
seq__27199 = G__27214;
chunk__27200 = G__27215;
count__27201 = G__27216;
i__27202 = G__27217;
continue;
} else {
var x = cljs.core.first.call(null,seq__27199__$1);
cljs.compiler.emits.call(null,x);


var G__27218 = cljs.core.next.call(null,seq__27199__$1);
var G__27219 = null;
var G__27220 = (0);
var G__27221 = (0);
seq__27199 = G__27218;
chunk__27200 = G__27219;
count__27201 = G__27220;
i__27202 = G__27221;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq27191){
var G__27192 = cljs.core.first.call(null,seq27191);
var seq27191__$1 = cljs.core.next.call(null,seq27191);
var G__27193 = cljs.core.first.call(null,seq27191__$1);
var seq27191__$2 = cljs.core.next.call(null,seq27191__$1);
var G__27194 = cljs.core.first.call(null,seq27191__$2);
var seq27191__$3 = cljs.core.next.call(null,seq27191__$2);
var G__27195 = cljs.core.first.call(null,seq27191__$3);
var seq27191__$4 = cljs.core.next.call(null,seq27191__$3);
var G__27196 = cljs.core.first.call(null,seq27191__$4);
var seq27191__$5 = cljs.core.next.call(null,seq27191__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27192,G__27193,G__27194,G__27195,G__27196,seq27191__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__27222){
var map__27223 = p__27222;
var map__27223__$1 = (((((!((map__27223 == null))))?(((((map__27223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27223):map__27223);
var m = map__27223__$1;
var gen_line = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__27232 = arguments.length;
switch (G__27232) {
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
var len__4730__auto___27238 = arguments.length;
var i__4731__auto___27239 = (0);
while(true){
if((i__4731__auto___27239 < len__4730__auto___27238)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27239]));

var G__27240 = (i__4731__auto___27239 + (1));
i__4731__auto___27239 = G__27240;
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

var seq__27233_27241 = cljs.core.seq.call(null,xs);
var chunk__27234_27242 = null;
var count__27235_27243 = (0);
var i__27236_27244 = (0);
while(true){
if((i__27236_27244 < count__27235_27243)){
var x_27245 = cljs.core._nth.call(null,chunk__27234_27242,i__27236_27244);
cljs.compiler.emits.call(null,x_27245);


var G__27246 = seq__27233_27241;
var G__27247 = chunk__27234_27242;
var G__27248 = count__27235_27243;
var G__27249 = (i__27236_27244 + (1));
seq__27233_27241 = G__27246;
chunk__27234_27242 = G__27247;
count__27235_27243 = G__27248;
i__27236_27244 = G__27249;
continue;
} else {
var temp__5720__auto___27250 = cljs.core.seq.call(null,seq__27233_27241);
if(temp__5720__auto___27250){
var seq__27233_27251__$1 = temp__5720__auto___27250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27233_27251__$1)){
var c__4550__auto___27252 = cljs.core.chunk_first.call(null,seq__27233_27251__$1);
var G__27253 = cljs.core.chunk_rest.call(null,seq__27233_27251__$1);
var G__27254 = c__4550__auto___27252;
var G__27255 = cljs.core.count.call(null,c__4550__auto___27252);
var G__27256 = (0);
seq__27233_27241 = G__27253;
chunk__27234_27242 = G__27254;
count__27235_27243 = G__27255;
i__27236_27244 = G__27256;
continue;
} else {
var x_27257 = cljs.core.first.call(null,seq__27233_27251__$1);
cljs.compiler.emits.call(null,x_27257);


var G__27258 = cljs.core.next.call(null,seq__27233_27251__$1);
var G__27259 = null;
var G__27260 = (0);
var G__27261 = (0);
seq__27233_27241 = G__27258;
chunk__27234_27242 = G__27259;
count__27235_27243 = G__27260;
i__27236_27244 = G__27261;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq27226){
var G__27227 = cljs.core.first.call(null,seq27226);
var seq27226__$1 = cljs.core.next.call(null,seq27226);
var G__27228 = cljs.core.first.call(null,seq27226__$1);
var seq27226__$2 = cljs.core.next.call(null,seq27226__$1);
var G__27229 = cljs.core.first.call(null,seq27226__$2);
var seq27226__$3 = cljs.core.next.call(null,seq27226__$2);
var G__27230 = cljs.core.first.call(null,seq27226__$3);
var seq27226__$4 = cljs.core.next.call(null,seq27226__$3);
var G__27231 = cljs.core.first.call(null,seq27226__$4);
var seq27226__$5 = cljs.core.next.call(null,seq27226__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27227,G__27228,G__27229,G__27230,G__27231,seq27226__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27262_27266 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27263_27267 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27264_27268 = true;
var _STAR_print_fn_STAR__temp_val__27265_27269 = ((function (_STAR_print_newline_STAR__orig_val__27262_27266,_STAR_print_fn_STAR__orig_val__27263_27267,_STAR_print_newline_STAR__temp_val__27264_27268,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27262_27266,_STAR_print_fn_STAR__orig_val__27263_27267,_STAR_print_newline_STAR__temp_val__27264_27268,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27264_27268;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27265_27269;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27263_27267;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27262_27266;
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
var vec__27270 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__27270,(0),null);
var name = cljs.core.nth.call(null,vec__27270,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__27270,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__27270,ns,name))
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
var vec__27273 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__27273,(0),null);
var flags = cljs.core.nth.call(null,vec__27273,(1),null);
var pattern = cljs.core.nth.call(null,vec__27273,(2),null);
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
return (function (p1__27276_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__27276_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__27278){
var map__27279 = p__27278;
var map__27279__$1 = (((((!((map__27279 == null))))?(((((map__27279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27279):map__27279);
var ast = map__27279__$1;
var info = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__27281 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27281__$1 = (((((!((map__27281 == null))))?(((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var cenv = map__27281__$1;
var options = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__27283 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__27283,cljs.analyzer.es5_allowed);
} else {
return G__27283;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__27284 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__27284,reserved);
} else {
return G__27284;
}
})();
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__27285_27286 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__27285_27287__$1 = (((G__27285_27286 instanceof cljs.core.Keyword))?G__27285_27286.fqn:null);
switch (G__27285_27287__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__27289){
var map__27290 = p__27289;
var map__27290__$1 = (((((!((map__27290 == null))))?(((((map__27290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27290):map__27290);
var arg = map__27290__$1;
var env = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__27292 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__27292__$1 = (((((!((map__27292 == null))))?(((((map__27292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27292):map__27292);
var name = cljs.core.get.call(null,map__27292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__27294){
var map__27295 = p__27294;
var map__27295__$1 = (((((!((map__27295 == null))))?(((((map__27295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27295):map__27295);
var expr = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__27297_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27297_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__27298){
var map__27299 = p__27298;
var map__27299__$1 = (((((!((map__27299 == null))))?(((((map__27299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27299):map__27299);
var env = cljs.core.get.call(null,map__27299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__27299__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27299__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__27301){
var map__27302 = p__27301;
var map__27302__$1 = (((((!((map__27302 == null))))?(((((map__27302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27302):map__27302);
var items = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__27304_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27304_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__27305){
var map__27306 = p__27305;
var map__27306__$1 = (((((!((map__27306 == null))))?(((((map__27306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27306):map__27306);
var items = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___27330 = cljs.core.seq.call(null,items);
if(temp__5720__auto___27330){
var items_27331__$1 = temp__5720__auto___27330;
var vec__27308_27332 = items_27331__$1;
var seq__27309_27333 = cljs.core.seq.call(null,vec__27308_27332);
var first__27310_27334 = cljs.core.first.call(null,seq__27309_27333);
var seq__27309_27335__$1 = cljs.core.next.call(null,seq__27309_27333);
var vec__27311_27336 = first__27310_27334;
var k_27337 = cljs.core.nth.call(null,vec__27311_27336,(0),null);
var v_27338 = cljs.core.nth.call(null,vec__27311_27336,(1),null);
var r_27339 = seq__27309_27335__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_27337),"\": ",emit_js_object_val.call(null,v_27338));

var seq__27314_27340 = cljs.core.seq.call(null,r_27339);
var chunk__27315_27341 = null;
var count__27316_27342 = (0);
var i__27317_27343 = (0);
while(true){
if((i__27317_27343 < count__27316_27342)){
var vec__27324_27344 = cljs.core._nth.call(null,chunk__27315_27341,i__27317_27343);
var k_27345__$1 = cljs.core.nth.call(null,vec__27324_27344,(0),null);
var v_27346__$1 = cljs.core.nth.call(null,vec__27324_27344,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27345__$1),"\": ",emit_js_object_val.call(null,v_27346__$1));


var G__27347 = seq__27314_27340;
var G__27348 = chunk__27315_27341;
var G__27349 = count__27316_27342;
var G__27350 = (i__27317_27343 + (1));
seq__27314_27340 = G__27347;
chunk__27315_27341 = G__27348;
count__27316_27342 = G__27349;
i__27317_27343 = G__27350;
continue;
} else {
var temp__5720__auto___27351__$1 = cljs.core.seq.call(null,seq__27314_27340);
if(temp__5720__auto___27351__$1){
var seq__27314_27352__$1 = temp__5720__auto___27351__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27314_27352__$1)){
var c__4550__auto___27353 = cljs.core.chunk_first.call(null,seq__27314_27352__$1);
var G__27354 = cljs.core.chunk_rest.call(null,seq__27314_27352__$1);
var G__27355 = c__4550__auto___27353;
var G__27356 = cljs.core.count.call(null,c__4550__auto___27353);
var G__27357 = (0);
seq__27314_27340 = G__27354;
chunk__27315_27341 = G__27355;
count__27316_27342 = G__27356;
i__27317_27343 = G__27357;
continue;
} else {
var vec__27327_27358 = cljs.core.first.call(null,seq__27314_27352__$1);
var k_27359__$1 = cljs.core.nth.call(null,vec__27327_27358,(0),null);
var v_27360__$1 = cljs.core.nth.call(null,vec__27327_27358,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27359__$1),"\": ",emit_js_object_val.call(null,v_27360__$1));


var G__27361 = cljs.core.next.call(null,seq__27314_27352__$1);
var G__27362 = null;
var G__27363 = (0);
var G__27364 = (0);
seq__27314_27340 = G__27361;
chunk__27315_27341 = G__27362;
count__27316_27342 = G__27363;
i__27317_27343 = G__27364;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__27365){
var map__27366 = p__27365;
var map__27366__$1 = (((((!((map__27366 == null))))?(((((map__27366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27366):map__27366);
var keys = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__27368){
var map__27369 = p__27368;
var map__27369__$1 = (((((!((map__27369 == null))))?(((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var items = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__27371){
var map__27372 = p__27371;
var map__27372__$1 = (((((!((map__27372 == null))))?(((((map__27372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27372):map__27372);
var expr = cljs.core.get.call(null,map__27372__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__27374){
var map__27375 = p__27374;
var map__27375__$1 = (((((!((map__27375 == null))))?(((((map__27375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27375):map__27375);
var form = cljs.core.get.call(null,map__27375__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__27375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__27377 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27377__$1 = (((((!((map__27377 == null))))?(((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27377):map__27377);
var op = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__27379 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__27379__$1 = (((((!((map__27379 == null))))?(((((map__27379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27379):map__27379);
var op = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__27381){
var map__27382 = p__27381;
var map__27382__$1 = (((((!((map__27382 == null))))?(((((map__27382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27382):map__27382);
var test = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__27384){
var map__27385 = p__27384;
var map__27385__$1 = (((((!((map__27385 == null))))?(((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var v = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__27387_27423 = cljs.core.seq.call(null,nodes);
var chunk__27388_27424 = null;
var count__27389_27425 = (0);
var i__27390_27426 = (0);
while(true){
if((i__27390_27426 < count__27389_27425)){
var map__27407_27427 = cljs.core._nth.call(null,chunk__27388_27424,i__27390_27426);
var map__27407_27428__$1 = (((((!((map__27407_27427 == null))))?(((((map__27407_27427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27407_27427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27407_27427):map__27407_27427);
var ts_27429 = cljs.core.get.call(null,map__27407_27428__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27408_27430 = cljs.core.get.call(null,map__27407_27428__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27408_27431__$1 = (((((!((map__27408_27430 == null))))?(((((map__27408_27430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408_27430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408_27430):map__27408_27430);
var then_27432 = cljs.core.get.call(null,map__27408_27431__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27411_27433 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27429));
var chunk__27412_27434 = null;
var count__27413_27435 = (0);
var i__27414_27436 = (0);
while(true){
if((i__27414_27436 < count__27413_27435)){
var test_27437 = cljs.core._nth.call(null,chunk__27412_27434,i__27414_27436);
cljs.compiler.emitln.call(null,"case ",test_27437,":");


var G__27438 = seq__27411_27433;
var G__27439 = chunk__27412_27434;
var G__27440 = count__27413_27435;
var G__27441 = (i__27414_27436 + (1));
seq__27411_27433 = G__27438;
chunk__27412_27434 = G__27439;
count__27413_27435 = G__27440;
i__27414_27436 = G__27441;
continue;
} else {
var temp__5720__auto___27442 = cljs.core.seq.call(null,seq__27411_27433);
if(temp__5720__auto___27442){
var seq__27411_27443__$1 = temp__5720__auto___27442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27411_27443__$1)){
var c__4550__auto___27444 = cljs.core.chunk_first.call(null,seq__27411_27443__$1);
var G__27445 = cljs.core.chunk_rest.call(null,seq__27411_27443__$1);
var G__27446 = c__4550__auto___27444;
var G__27447 = cljs.core.count.call(null,c__4550__auto___27444);
var G__27448 = (0);
seq__27411_27433 = G__27445;
chunk__27412_27434 = G__27446;
count__27413_27435 = G__27447;
i__27414_27436 = G__27448;
continue;
} else {
var test_27449 = cljs.core.first.call(null,seq__27411_27443__$1);
cljs.compiler.emitln.call(null,"case ",test_27449,":");


var G__27450 = cljs.core.next.call(null,seq__27411_27443__$1);
var G__27451 = null;
var G__27452 = (0);
var G__27453 = (0);
seq__27411_27433 = G__27450;
chunk__27412_27434 = G__27451;
count__27413_27435 = G__27452;
i__27414_27436 = G__27453;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27432);
} else {
cljs.compiler.emitln.call(null,then_27432);
}

cljs.compiler.emitln.call(null,"break;");


var G__27454 = seq__27387_27423;
var G__27455 = chunk__27388_27424;
var G__27456 = count__27389_27425;
var G__27457 = (i__27390_27426 + (1));
seq__27387_27423 = G__27454;
chunk__27388_27424 = G__27455;
count__27389_27425 = G__27456;
i__27390_27426 = G__27457;
continue;
} else {
var temp__5720__auto___27458 = cljs.core.seq.call(null,seq__27387_27423);
if(temp__5720__auto___27458){
var seq__27387_27459__$1 = temp__5720__auto___27458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27387_27459__$1)){
var c__4550__auto___27460 = cljs.core.chunk_first.call(null,seq__27387_27459__$1);
var G__27461 = cljs.core.chunk_rest.call(null,seq__27387_27459__$1);
var G__27462 = c__4550__auto___27460;
var G__27463 = cljs.core.count.call(null,c__4550__auto___27460);
var G__27464 = (0);
seq__27387_27423 = G__27461;
chunk__27388_27424 = G__27462;
count__27389_27425 = G__27463;
i__27390_27426 = G__27464;
continue;
} else {
var map__27415_27465 = cljs.core.first.call(null,seq__27387_27459__$1);
var map__27415_27466__$1 = (((((!((map__27415_27465 == null))))?(((((map__27415_27465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27415_27465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415_27465):map__27415_27465);
var ts_27467 = cljs.core.get.call(null,map__27415_27466__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__27416_27468 = cljs.core.get.call(null,map__27415_27466__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__27416_27469__$1 = (((((!((map__27416_27468 == null))))?(((((map__27416_27468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27416_27468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27416_27468):map__27416_27468);
var then_27470 = cljs.core.get.call(null,map__27416_27469__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__27419_27471 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_27467));
var chunk__27420_27472 = null;
var count__27421_27473 = (0);
var i__27422_27474 = (0);
while(true){
if((i__27422_27474 < count__27421_27473)){
var test_27475 = cljs.core._nth.call(null,chunk__27420_27472,i__27422_27474);
cljs.compiler.emitln.call(null,"case ",test_27475,":");


var G__27476 = seq__27419_27471;
var G__27477 = chunk__27420_27472;
var G__27478 = count__27421_27473;
var G__27479 = (i__27422_27474 + (1));
seq__27419_27471 = G__27476;
chunk__27420_27472 = G__27477;
count__27421_27473 = G__27478;
i__27422_27474 = G__27479;
continue;
} else {
var temp__5720__auto___27480__$1 = cljs.core.seq.call(null,seq__27419_27471);
if(temp__5720__auto___27480__$1){
var seq__27419_27481__$1 = temp__5720__auto___27480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27419_27481__$1)){
var c__4550__auto___27482 = cljs.core.chunk_first.call(null,seq__27419_27481__$1);
var G__27483 = cljs.core.chunk_rest.call(null,seq__27419_27481__$1);
var G__27484 = c__4550__auto___27482;
var G__27485 = cljs.core.count.call(null,c__4550__auto___27482);
var G__27486 = (0);
seq__27419_27471 = G__27483;
chunk__27420_27472 = G__27484;
count__27421_27473 = G__27485;
i__27422_27474 = G__27486;
continue;
} else {
var test_27487 = cljs.core.first.call(null,seq__27419_27481__$1);
cljs.compiler.emitln.call(null,"case ",test_27487,":");


var G__27488 = cljs.core.next.call(null,seq__27419_27481__$1);
var G__27489 = null;
var G__27490 = (0);
var G__27491 = (0);
seq__27419_27471 = G__27488;
chunk__27420_27472 = G__27489;
count__27421_27473 = G__27490;
i__27422_27474 = G__27491;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27470);
} else {
cljs.compiler.emitln.call(null,then_27470);
}

cljs.compiler.emitln.call(null,"break;");


var G__27492 = cljs.core.next.call(null,seq__27387_27459__$1);
var G__27493 = null;
var G__27494 = (0);
var G__27495 = (0);
seq__27387_27423 = G__27492;
chunk__27388_27424 = G__27493;
count__27389_27425 = G__27494;
i__27390_27426 = G__27495;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__27496){
var map__27497 = p__27496;
var map__27497__$1 = (((((!((map__27497 == null))))?(((((map__27497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497):map__27497);
var throw$ = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__27500 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__27500,(0),null);
var rstr = cljs.core.nth.call(null,vec__27500,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__27500,fstr,rstr,ret_t,axstr){
return (function (p1__27499_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__27499_SHARP_);
});})(idx,vec__27500,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__27503 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__27503,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__27503;
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
return (function (p1__27504_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__27504_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__27505 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__27506 = cljs.core.seq.call(null,vec__27505);
var first__27507 = cljs.core.first.call(null,seq__27506);
var seq__27506__$1 = cljs.core.next.call(null,seq__27506);
var p = first__27507;
var first__27507__$1 = cljs.core.first.call(null,seq__27506__$1);
var seq__27506__$2 = cljs.core.next.call(null,seq__27506__$1);
var ts = first__27507__$1;
var first__27507__$2 = cljs.core.first.call(null,seq__27506__$2);
var seq__27506__$3 = cljs.core.next.call(null,seq__27506__$2);
var n = first__27507__$2;
var xs = seq__27506__$3;
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
var vec__27508 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__27509 = cljs.core.seq.call(null,vec__27508);
var first__27510 = cljs.core.first.call(null,seq__27509);
var seq__27509__$1 = cljs.core.next.call(null,seq__27509);
var p = first__27510;
var first__27510__$1 = cljs.core.first.call(null,seq__27509__$1);
var seq__27509__$2 = cljs.core.next.call(null,seq__27509__$1);
var ts = first__27510__$1;
var xs = seq__27509__$2;
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
var G__27513 = arguments.length;
switch (G__27513) {
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
var vec__27521 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__27511_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__27511_SHARP_);
} else {
return p1__27511_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__27522 = cljs.core.seq.call(null,vec__27521);
var first__27523 = cljs.core.first.call(null,seq__27522);
var seq__27522__$1 = cljs.core.next.call(null,seq__27522);
var x = first__27523;
var ys = seq__27522__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__27524 = cljs.core.seq.call(null,ys);
var chunk__27525 = null;
var count__27526 = (0);
var i__27527 = (0);
while(true){
if((i__27527 < count__27526)){
var next_line = cljs.core._nth.call(null,chunk__27525,i__27527);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__27533 = seq__27524;
var G__27534 = chunk__27525;
var G__27535 = count__27526;
var G__27536 = (i__27527 + (1));
seq__27524 = G__27533;
chunk__27525 = G__27534;
count__27526 = G__27535;
i__27527 = G__27536;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27524);
if(temp__5720__auto__){
var seq__27524__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27524__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27524__$1);
var G__27537 = cljs.core.chunk_rest.call(null,seq__27524__$1);
var G__27538 = c__4550__auto__;
var G__27539 = cljs.core.count.call(null,c__4550__auto__);
var G__27540 = (0);
seq__27524 = G__27537;
chunk__27525 = G__27538;
count__27526 = G__27539;
i__27527 = G__27540;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__27524__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__27541 = cljs.core.next.call(null,seq__27524__$1);
var G__27542 = null;
var G__27543 = (0);
var G__27544 = (0);
seq__27524 = G__27541;
chunk__27525 = G__27542;
count__27526 = G__27543;
i__27527 = G__27544;
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

var seq__27528_27545 = cljs.core.seq.call(null,docs__$2);
var chunk__27529_27546 = null;
var count__27530_27547 = (0);
var i__27531_27548 = (0);
while(true){
if((i__27531_27548 < count__27530_27547)){
var e_27549 = cljs.core._nth.call(null,chunk__27529_27546,i__27531_27548);
if(cljs.core.truth_(e_27549)){
print_comment_lines.call(null,e_27549);
} else {
}


var G__27550 = seq__27528_27545;
var G__27551 = chunk__27529_27546;
var G__27552 = count__27530_27547;
var G__27553 = (i__27531_27548 + (1));
seq__27528_27545 = G__27550;
chunk__27529_27546 = G__27551;
count__27530_27547 = G__27552;
i__27531_27548 = G__27553;
continue;
} else {
var temp__5720__auto___27554 = cljs.core.seq.call(null,seq__27528_27545);
if(temp__5720__auto___27554){
var seq__27528_27555__$1 = temp__5720__auto___27554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27528_27555__$1)){
var c__4550__auto___27556 = cljs.core.chunk_first.call(null,seq__27528_27555__$1);
var G__27557 = cljs.core.chunk_rest.call(null,seq__27528_27555__$1);
var G__27558 = c__4550__auto___27556;
var G__27559 = cljs.core.count.call(null,c__4550__auto___27556);
var G__27560 = (0);
seq__27528_27545 = G__27557;
chunk__27529_27546 = G__27558;
count__27530_27547 = G__27559;
i__27531_27548 = G__27560;
continue;
} else {
var e_27561 = cljs.core.first.call(null,seq__27528_27555__$1);
if(cljs.core.truth_(e_27561)){
print_comment_lines.call(null,e_27561);
} else {
}


var G__27562 = cljs.core.next.call(null,seq__27528_27555__$1);
var G__27563 = null;
var G__27564 = (0);
var G__27565 = (0);
seq__27528_27545 = G__27562;
chunk__27529_27546 = G__27563;
count__27530_27547 = G__27564;
i__27531_27548 = G__27565;
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
return (function (p1__27567_SHARP_){
return goog.string.startsWith(p1__27567_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__27568){
var map__27569 = p__27568;
var map__27569__$1 = (((((!((map__27569 == null))))?(((((map__27569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27569):map__27569);
var doc = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__27571){
var map__27572 = p__27571;
var map__27572__$1 = (((((!((map__27572 == null))))?(((((map__27572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27572):map__27572);
var name = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__27574_27598 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__27575_27599 = null;
var count__27576_27600 = (0);
var i__27577_27601 = (0);
while(true){
if((i__27577_27601 < count__27576_27600)){
var vec__27584_27602 = cljs.core._nth.call(null,chunk__27575_27599,i__27577_27601);
var i_27603 = cljs.core.nth.call(null,vec__27584_27602,(0),null);
var param_27604 = cljs.core.nth.call(null,vec__27584_27602,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27604);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__27605 = seq__27574_27598;
var G__27606 = chunk__27575_27599;
var G__27607 = count__27576_27600;
var G__27608 = (i__27577_27601 + (1));
seq__27574_27598 = G__27605;
chunk__27575_27599 = G__27606;
count__27576_27600 = G__27607;
i__27577_27601 = G__27608;
continue;
} else {
var temp__5720__auto___27609 = cljs.core.seq.call(null,seq__27574_27598);
if(temp__5720__auto___27609){
var seq__27574_27610__$1 = temp__5720__auto___27609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27574_27610__$1)){
var c__4550__auto___27611 = cljs.core.chunk_first.call(null,seq__27574_27610__$1);
var G__27612 = cljs.core.chunk_rest.call(null,seq__27574_27610__$1);
var G__27613 = c__4550__auto___27611;
var G__27614 = cljs.core.count.call(null,c__4550__auto___27611);
var G__27615 = (0);
seq__27574_27598 = G__27612;
chunk__27575_27599 = G__27613;
count__27576_27600 = G__27614;
i__27577_27601 = G__27615;
continue;
} else {
var vec__27587_27616 = cljs.core.first.call(null,seq__27574_27610__$1);
var i_27617 = cljs.core.nth.call(null,vec__27587_27616,(0),null);
var param_27618 = cljs.core.nth.call(null,vec__27587_27616,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27618);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__27619 = cljs.core.next.call(null,seq__27574_27610__$1);
var G__27620 = null;
var G__27621 = (0);
var G__27622 = (0);
seq__27574_27598 = G__27619;
chunk__27575_27599 = G__27620;
count__27576_27600 = G__27621;
i__27577_27601 = G__27622;
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

var seq__27590_27623 = cljs.core.seq.call(null,params);
var chunk__27591_27624 = null;
var count__27592_27625 = (0);
var i__27593_27626 = (0);
while(true){
if((i__27593_27626 < count__27592_27625)){
var param_27627 = cljs.core._nth.call(null,chunk__27591_27624,i__27593_27626);
cljs.compiler.emit.call(null,param_27627);

if(cljs.core._EQ_.call(null,param_27627,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27628 = seq__27590_27623;
var G__27629 = chunk__27591_27624;
var G__27630 = count__27592_27625;
var G__27631 = (i__27593_27626 + (1));
seq__27590_27623 = G__27628;
chunk__27591_27624 = G__27629;
count__27592_27625 = G__27630;
i__27593_27626 = G__27631;
continue;
} else {
var temp__5720__auto___27632 = cljs.core.seq.call(null,seq__27590_27623);
if(temp__5720__auto___27632){
var seq__27590_27633__$1 = temp__5720__auto___27632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27590_27633__$1)){
var c__4550__auto___27634 = cljs.core.chunk_first.call(null,seq__27590_27633__$1);
var G__27635 = cljs.core.chunk_rest.call(null,seq__27590_27633__$1);
var G__27636 = c__4550__auto___27634;
var G__27637 = cljs.core.count.call(null,c__4550__auto___27634);
var G__27638 = (0);
seq__27590_27623 = G__27635;
chunk__27591_27624 = G__27636;
count__27592_27625 = G__27637;
i__27593_27626 = G__27638;
continue;
} else {
var param_27639 = cljs.core.first.call(null,seq__27590_27633__$1);
cljs.compiler.emit.call(null,param_27639);

if(cljs.core._EQ_.call(null,param_27639,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27640 = cljs.core.next.call(null,seq__27590_27633__$1);
var G__27641 = null;
var G__27642 = (0);
var G__27643 = (0);
seq__27590_27623 = G__27640;
chunk__27591_27624 = G__27641;
count__27592_27625 = G__27642;
i__27593_27626 = G__27643;
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

var seq__27594_27644 = cljs.core.seq.call(null,params);
var chunk__27595_27645 = null;
var count__27596_27646 = (0);
var i__27597_27647 = (0);
while(true){
if((i__27597_27647 < count__27596_27646)){
var param_27648 = cljs.core._nth.call(null,chunk__27595_27645,i__27597_27647);
cljs.compiler.emit.call(null,param_27648);

if(cljs.core._EQ_.call(null,param_27648,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27649 = seq__27594_27644;
var G__27650 = chunk__27595_27645;
var G__27651 = count__27596_27646;
var G__27652 = (i__27597_27647 + (1));
seq__27594_27644 = G__27649;
chunk__27595_27645 = G__27650;
count__27596_27646 = G__27651;
i__27597_27647 = G__27652;
continue;
} else {
var temp__5720__auto___27653 = cljs.core.seq.call(null,seq__27594_27644);
if(temp__5720__auto___27653){
var seq__27594_27654__$1 = temp__5720__auto___27653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27594_27654__$1)){
var c__4550__auto___27655 = cljs.core.chunk_first.call(null,seq__27594_27654__$1);
var G__27656 = cljs.core.chunk_rest.call(null,seq__27594_27654__$1);
var G__27657 = c__4550__auto___27655;
var G__27658 = cljs.core.count.call(null,c__4550__auto___27655);
var G__27659 = (0);
seq__27594_27644 = G__27656;
chunk__27595_27645 = G__27657;
count__27596_27646 = G__27658;
i__27597_27647 = G__27659;
continue;
} else {
var param_27660 = cljs.core.first.call(null,seq__27594_27654__$1);
cljs.compiler.emit.call(null,param_27660);

if(cljs.core._EQ_.call(null,param_27660,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27661 = cljs.core.next.call(null,seq__27594_27654__$1);
var G__27662 = null;
var G__27663 = (0);
var G__27664 = (0);
seq__27594_27644 = G__27661;
chunk__27595_27645 = G__27662;
count__27596_27646 = G__27663;
i__27597_27647 = G__27664;
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
var seq__27665 = cljs.core.seq.call(null,params);
var chunk__27666 = null;
var count__27667 = (0);
var i__27668 = (0);
while(true){
if((i__27668 < count__27667)){
var param = cljs.core._nth.call(null,chunk__27666,i__27668);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27669 = seq__27665;
var G__27670 = chunk__27666;
var G__27671 = count__27667;
var G__27672 = (i__27668 + (1));
seq__27665 = G__27669;
chunk__27666 = G__27670;
count__27667 = G__27671;
i__27668 = G__27672;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27665);
if(temp__5720__auto__){
var seq__27665__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27665__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27665__$1);
var G__27673 = cljs.core.chunk_rest.call(null,seq__27665__$1);
var G__27674 = c__4550__auto__;
var G__27675 = cljs.core.count.call(null,c__4550__auto__);
var G__27676 = (0);
seq__27665 = G__27673;
chunk__27666 = G__27674;
count__27667 = G__27675;
i__27668 = G__27676;
continue;
} else {
var param = cljs.core.first.call(null,seq__27665__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27677 = cljs.core.next.call(null,seq__27665__$1);
var G__27678 = null;
var G__27679 = (0);
var G__27680 = (0);
seq__27665 = G__27677;
chunk__27666 = G__27678;
count__27667 = G__27679;
i__27668 = G__27680;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__27681){
var map__27682 = p__27681;
var map__27682__$1 = (((((!((map__27682 == null))))?(((((map__27682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27682):map__27682);
var expr = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27682__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__27684){
var map__27685 = p__27684;
var map__27685__$1 = (((((!((map__27685 == null))))?(((((map__27685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27685):map__27685);
var f = map__27685__$1;
var expr = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_27695__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27696 = cljs.compiler.munge.call(null,name_27695__$1);
var delegate_name_27697 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27696),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_27697," = function (");

var seq__27687_27698 = cljs.core.seq.call(null,params);
var chunk__27688_27699 = null;
var count__27689_27700 = (0);
var i__27690_27701 = (0);
while(true){
if((i__27690_27701 < count__27689_27700)){
var param_27702 = cljs.core._nth.call(null,chunk__27688_27699,i__27690_27701);
cljs.compiler.emit.call(null,param_27702);

if(cljs.core._EQ_.call(null,param_27702,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27703 = seq__27687_27698;
var G__27704 = chunk__27688_27699;
var G__27705 = count__27689_27700;
var G__27706 = (i__27690_27701 + (1));
seq__27687_27698 = G__27703;
chunk__27688_27699 = G__27704;
count__27689_27700 = G__27705;
i__27690_27701 = G__27706;
continue;
} else {
var temp__5720__auto___27707 = cljs.core.seq.call(null,seq__27687_27698);
if(temp__5720__auto___27707){
var seq__27687_27708__$1 = temp__5720__auto___27707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27687_27708__$1)){
var c__4550__auto___27709 = cljs.core.chunk_first.call(null,seq__27687_27708__$1);
var G__27710 = cljs.core.chunk_rest.call(null,seq__27687_27708__$1);
var G__27711 = c__4550__auto___27709;
var G__27712 = cljs.core.count.call(null,c__4550__auto___27709);
var G__27713 = (0);
seq__27687_27698 = G__27710;
chunk__27688_27699 = G__27711;
count__27689_27700 = G__27712;
i__27690_27701 = G__27713;
continue;
} else {
var param_27714 = cljs.core.first.call(null,seq__27687_27708__$1);
cljs.compiler.emit.call(null,param_27714);

if(cljs.core._EQ_.call(null,param_27714,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27715 = cljs.core.next.call(null,seq__27687_27708__$1);
var G__27716 = null;
var G__27717 = (0);
var G__27718 = (0);
seq__27687_27698 = G__27715;
chunk__27688_27699 = G__27716;
count__27689_27700 = G__27717;
i__27690_27701 = G__27718;
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

cljs.compiler.emitln.call(null,"var ",mname_27696," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_27719 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_27719,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_27697,".call(this,");

var seq__27691_27720 = cljs.core.seq.call(null,params);
var chunk__27692_27721 = null;
var count__27693_27722 = (0);
var i__27694_27723 = (0);
while(true){
if((i__27694_27723 < count__27693_27722)){
var param_27724 = cljs.core._nth.call(null,chunk__27692_27721,i__27694_27723);
cljs.compiler.emit.call(null,param_27724);

if(cljs.core._EQ_.call(null,param_27724,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27725 = seq__27691_27720;
var G__27726 = chunk__27692_27721;
var G__27727 = count__27693_27722;
var G__27728 = (i__27694_27723 + (1));
seq__27691_27720 = G__27725;
chunk__27692_27721 = G__27726;
count__27693_27722 = G__27727;
i__27694_27723 = G__27728;
continue;
} else {
var temp__5720__auto___27729 = cljs.core.seq.call(null,seq__27691_27720);
if(temp__5720__auto___27729){
var seq__27691_27730__$1 = temp__5720__auto___27729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27691_27730__$1)){
var c__4550__auto___27731 = cljs.core.chunk_first.call(null,seq__27691_27730__$1);
var G__27732 = cljs.core.chunk_rest.call(null,seq__27691_27730__$1);
var G__27733 = c__4550__auto___27731;
var G__27734 = cljs.core.count.call(null,c__4550__auto___27731);
var G__27735 = (0);
seq__27691_27720 = G__27732;
chunk__27692_27721 = G__27733;
count__27693_27722 = G__27734;
i__27694_27723 = G__27735;
continue;
} else {
var param_27736 = cljs.core.first.call(null,seq__27691_27730__$1);
cljs.compiler.emit.call(null,param_27736);

if(cljs.core._EQ_.call(null,param_27736,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27737 = cljs.core.next.call(null,seq__27691_27730__$1);
var G__27738 = null;
var G__27739 = (0);
var G__27740 = (0);
seq__27691_27720 = G__27737;
chunk__27692_27721 = G__27738;
count__27693_27722 = G__27739;
i__27694_27723 = G__27740;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_27696,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_27696,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_27695__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_27696,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_27697,";");

cljs.compiler.emitln.call(null,"return ",mname_27696,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__27744){
var map__27745 = p__27744;
var map__27745__$1 = (((((!((map__27745 == null))))?(((((map__27745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27745):map__27745);
var variadic = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27741_SHARP_){
var and__4120__auto__ = p1__27741_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__27741_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_27798__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27799 = cljs.compiler.munge.call(null,name_27798__$1);
var maxparams_27800 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_27801 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_27798__$1,mname_27799,maxparams_27800,loop_locals,map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27799),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_27798__$1,mname_27799,maxparams_27800,loop_locals,map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_27802 = cljs.core.sort_by.call(null,((function (name_27798__$1,mname_27799,maxparams_27800,mmap_27801,loop_locals,map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27742_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27742_SHARP_)));
});})(name_27798__$1,mname_27799,maxparams_27800,mmap_27801,loop_locals,map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_27801));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_27799," = null;");

var seq__27747_27803 = cljs.core.seq.call(null,ms_27802);
var chunk__27748_27804 = null;
var count__27749_27805 = (0);
var i__27750_27806 = (0);
while(true){
if((i__27750_27806 < count__27749_27805)){
var vec__27757_27807 = cljs.core._nth.call(null,chunk__27748_27804,i__27750_27806);
var n_27808 = cljs.core.nth.call(null,vec__27757_27807,(0),null);
var meth_27809 = cljs.core.nth.call(null,vec__27757_27807,(1),null);
cljs.compiler.emits.call(null,"var ",n_27808," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27809))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27809);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27809);
}

cljs.compiler.emitln.call(null,";");


var G__27810 = seq__27747_27803;
var G__27811 = chunk__27748_27804;
var G__27812 = count__27749_27805;
var G__27813 = (i__27750_27806 + (1));
seq__27747_27803 = G__27810;
chunk__27748_27804 = G__27811;
count__27749_27805 = G__27812;
i__27750_27806 = G__27813;
continue;
} else {
var temp__5720__auto___27814 = cljs.core.seq.call(null,seq__27747_27803);
if(temp__5720__auto___27814){
var seq__27747_27815__$1 = temp__5720__auto___27814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27747_27815__$1)){
var c__4550__auto___27816 = cljs.core.chunk_first.call(null,seq__27747_27815__$1);
var G__27817 = cljs.core.chunk_rest.call(null,seq__27747_27815__$1);
var G__27818 = c__4550__auto___27816;
var G__27819 = cljs.core.count.call(null,c__4550__auto___27816);
var G__27820 = (0);
seq__27747_27803 = G__27817;
chunk__27748_27804 = G__27818;
count__27749_27805 = G__27819;
i__27750_27806 = G__27820;
continue;
} else {
var vec__27760_27821 = cljs.core.first.call(null,seq__27747_27815__$1);
var n_27822 = cljs.core.nth.call(null,vec__27760_27821,(0),null);
var meth_27823 = cljs.core.nth.call(null,vec__27760_27821,(1),null);
cljs.compiler.emits.call(null,"var ",n_27822," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27823))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27823);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27823);
}

cljs.compiler.emitln.call(null,";");


var G__27824 = cljs.core.next.call(null,seq__27747_27815__$1);
var G__27825 = null;
var G__27826 = (0);
var G__27827 = (0);
seq__27747_27803 = G__27824;
chunk__27748_27804 = G__27825;
count__27749_27805 = G__27826;
i__27750_27806 = G__27827;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_27799," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_27800),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_27800)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_27800));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__27763_27828 = cljs.core.seq.call(null,ms_27802);
var chunk__27764_27829 = null;
var count__27765_27830 = (0);
var i__27766_27831 = (0);
while(true){
if((i__27766_27831 < count__27765_27830)){
var vec__27773_27832 = cljs.core._nth.call(null,chunk__27764_27829,i__27766_27831);
var n_27833 = cljs.core.nth.call(null,vec__27773_27832,(0),null);
var meth_27834 = cljs.core.nth.call(null,vec__27773_27832,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27834))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27835 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27835," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27836 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27835," = new cljs.core.IndexedSeq(",a_27836,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27833,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27800)),(((cljs.core.count.call(null,maxparams_27800) > (1)))?", ":null),restarg_27835,");");
} else {
var pcnt_27837 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27834));
cljs.compiler.emitln.call(null,"case ",pcnt_27837,":");

cljs.compiler.emitln.call(null,"return ",n_27833,".call(this",(((pcnt_27837 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27837,maxparams_27800)),null,(1),null)),(2),null))),");");
}


var G__27838 = seq__27763_27828;
var G__27839 = chunk__27764_27829;
var G__27840 = count__27765_27830;
var G__27841 = (i__27766_27831 + (1));
seq__27763_27828 = G__27838;
chunk__27764_27829 = G__27839;
count__27765_27830 = G__27840;
i__27766_27831 = G__27841;
continue;
} else {
var temp__5720__auto___27842 = cljs.core.seq.call(null,seq__27763_27828);
if(temp__5720__auto___27842){
var seq__27763_27843__$1 = temp__5720__auto___27842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27763_27843__$1)){
var c__4550__auto___27844 = cljs.core.chunk_first.call(null,seq__27763_27843__$1);
var G__27845 = cljs.core.chunk_rest.call(null,seq__27763_27843__$1);
var G__27846 = c__4550__auto___27844;
var G__27847 = cljs.core.count.call(null,c__4550__auto___27844);
var G__27848 = (0);
seq__27763_27828 = G__27845;
chunk__27764_27829 = G__27846;
count__27765_27830 = G__27847;
i__27766_27831 = G__27848;
continue;
} else {
var vec__27776_27849 = cljs.core.first.call(null,seq__27763_27843__$1);
var n_27850 = cljs.core.nth.call(null,vec__27776_27849,(0),null);
var meth_27851 = cljs.core.nth.call(null,vec__27776_27849,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27851))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27852 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27852," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27853 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27852," = new cljs.core.IndexedSeq(",a_27853,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27850,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27800)),(((cljs.core.count.call(null,maxparams_27800) > (1)))?", ":null),restarg_27852,");");
} else {
var pcnt_27854 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27851));
cljs.compiler.emitln.call(null,"case ",pcnt_27854,":");

cljs.compiler.emitln.call(null,"return ",n_27850,".call(this",(((pcnt_27854 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27854,maxparams_27800)),null,(1),null)),(2),null))),");");
}


var G__27855 = cljs.core.next.call(null,seq__27763_27843__$1);
var G__27856 = null;
var G__27857 = (0);
var G__27858 = (0);
seq__27763_27828 = G__27855;
chunk__27764_27829 = G__27856;
count__27765_27830 = G__27857;
i__27766_27831 = G__27858;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_27859 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_27802)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_27859,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_27799,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_27799,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_27798__$1,mname_27799,maxparams_27800,mmap_27801,ms_27802,loop_locals,map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__27743_SHARP_){
var vec__27779 = p1__27743_SHARP_;
var n = cljs.core.nth.call(null,vec__27779,(0),null);
var m = cljs.core.nth.call(null,vec__27779,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_27798__$1,mname_27799,maxparams_27800,mmap_27801,ms_27802,loop_locals,map__27745,map__27745__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_27802),".cljs$lang$applyTo;");
} else {
}

var seq__27782_27860 = cljs.core.seq.call(null,ms_27802);
var chunk__27783_27861 = null;
var count__27784_27862 = (0);
var i__27785_27863 = (0);
while(true){
if((i__27785_27863 < count__27784_27862)){
var vec__27792_27864 = cljs.core._nth.call(null,chunk__27783_27861,i__27785_27863);
var n_27865 = cljs.core.nth.call(null,vec__27792_27864,(0),null);
var meth_27866 = cljs.core.nth.call(null,vec__27792_27864,(1),null);
var c_27867 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27866));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27866))){
cljs.compiler.emitln.call(null,mname_27799,".cljs$core$IFn$_invoke$arity$variadic = ",n_27865,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27799,".cljs$core$IFn$_invoke$arity$",c_27867," = ",n_27865,";");
}


var G__27868 = seq__27782_27860;
var G__27869 = chunk__27783_27861;
var G__27870 = count__27784_27862;
var G__27871 = (i__27785_27863 + (1));
seq__27782_27860 = G__27868;
chunk__27783_27861 = G__27869;
count__27784_27862 = G__27870;
i__27785_27863 = G__27871;
continue;
} else {
var temp__5720__auto___27872 = cljs.core.seq.call(null,seq__27782_27860);
if(temp__5720__auto___27872){
var seq__27782_27873__$1 = temp__5720__auto___27872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27782_27873__$1)){
var c__4550__auto___27874 = cljs.core.chunk_first.call(null,seq__27782_27873__$1);
var G__27875 = cljs.core.chunk_rest.call(null,seq__27782_27873__$1);
var G__27876 = c__4550__auto___27874;
var G__27877 = cljs.core.count.call(null,c__4550__auto___27874);
var G__27878 = (0);
seq__27782_27860 = G__27875;
chunk__27783_27861 = G__27876;
count__27784_27862 = G__27877;
i__27785_27863 = G__27878;
continue;
} else {
var vec__27795_27879 = cljs.core.first.call(null,seq__27782_27873__$1);
var n_27880 = cljs.core.nth.call(null,vec__27795_27879,(0),null);
var meth_27881 = cljs.core.nth.call(null,vec__27795_27879,(1),null);
var c_27882 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27881));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27881))){
cljs.compiler.emitln.call(null,mname_27799,".cljs$core$IFn$_invoke$arity$variadic = ",n_27880,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27799,".cljs$core$IFn$_invoke$arity$",c_27882," = ",n_27880,";");
}


var G__27883 = cljs.core.next.call(null,seq__27782_27873__$1);
var G__27884 = null;
var G__27885 = (0);
var G__27886 = (0);
seq__27782_27860 = G__27883;
chunk__27783_27861 = G__27884;
count__27784_27862 = G__27885;
i__27785_27863 = G__27886;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_27799,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27887){
var map__27888 = p__27887;
var map__27888__$1 = (((((!((map__27888 == null))))?(((((map__27888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27888):map__27888);
var statements = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__27890_27894 = cljs.core.seq.call(null,statements);
var chunk__27891_27895 = null;
var count__27892_27896 = (0);
var i__27893_27897 = (0);
while(true){
if((i__27893_27897 < count__27892_27896)){
var s_27898 = cljs.core._nth.call(null,chunk__27891_27895,i__27893_27897);
cljs.compiler.emitln.call(null,s_27898);


var G__27899 = seq__27890_27894;
var G__27900 = chunk__27891_27895;
var G__27901 = count__27892_27896;
var G__27902 = (i__27893_27897 + (1));
seq__27890_27894 = G__27899;
chunk__27891_27895 = G__27900;
count__27892_27896 = G__27901;
i__27893_27897 = G__27902;
continue;
} else {
var temp__5720__auto___27903 = cljs.core.seq.call(null,seq__27890_27894);
if(temp__5720__auto___27903){
var seq__27890_27904__$1 = temp__5720__auto___27903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27890_27904__$1)){
var c__4550__auto___27905 = cljs.core.chunk_first.call(null,seq__27890_27904__$1);
var G__27906 = cljs.core.chunk_rest.call(null,seq__27890_27904__$1);
var G__27907 = c__4550__auto___27905;
var G__27908 = cljs.core.count.call(null,c__4550__auto___27905);
var G__27909 = (0);
seq__27890_27894 = G__27906;
chunk__27891_27895 = G__27907;
count__27892_27896 = G__27908;
i__27893_27897 = G__27909;
continue;
} else {
var s_27910 = cljs.core.first.call(null,seq__27890_27904__$1);
cljs.compiler.emitln.call(null,s_27910);


var G__27911 = cljs.core.next.call(null,seq__27890_27904__$1);
var G__27912 = null;
var G__27913 = (0);
var G__27914 = (0);
seq__27890_27894 = G__27911;
chunk__27891_27895 = G__27912;
count__27892_27896 = G__27913;
i__27893_27897 = G__27914;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__27915){
var map__27916 = p__27915;
var map__27916__$1 = (((((!((map__27916 == null))))?(((((map__27916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27916):map__27916);
var try$ = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27918,is_loop){
var map__27919 = p__27918;
var map__27919__$1 = (((((!((map__27919 == null))))?(((((map__27919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27919):map__27919);
var expr = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__27921_27935 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__27922_27936 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__27921_27935,context,map__27919,map__27919__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__27921_27935,context,map__27919,map__27919__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__27922_27936;

try{var seq__27923_27937 = cljs.core.seq.call(null,bindings);
var chunk__27924_27938 = null;
var count__27925_27939 = (0);
var i__27926_27940 = (0);
while(true){
if((i__27926_27940 < count__27925_27939)){
var map__27931_27941 = cljs.core._nth.call(null,chunk__27924_27938,i__27926_27940);
var map__27931_27942__$1 = (((((!((map__27931_27941 == null))))?(((((map__27931_27941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27931_27941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931_27941):map__27931_27941);
var binding_27943 = map__27931_27942__$1;
var init_27944 = cljs.core.get.call(null,map__27931_27942__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27943);

cljs.compiler.emitln.call(null," = ",init_27944,";");


var G__27945 = seq__27923_27937;
var G__27946 = chunk__27924_27938;
var G__27947 = count__27925_27939;
var G__27948 = (i__27926_27940 + (1));
seq__27923_27937 = G__27945;
chunk__27924_27938 = G__27946;
count__27925_27939 = G__27947;
i__27926_27940 = G__27948;
continue;
} else {
var temp__5720__auto___27949 = cljs.core.seq.call(null,seq__27923_27937);
if(temp__5720__auto___27949){
var seq__27923_27950__$1 = temp__5720__auto___27949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27923_27950__$1)){
var c__4550__auto___27951 = cljs.core.chunk_first.call(null,seq__27923_27950__$1);
var G__27952 = cljs.core.chunk_rest.call(null,seq__27923_27950__$1);
var G__27953 = c__4550__auto___27951;
var G__27954 = cljs.core.count.call(null,c__4550__auto___27951);
var G__27955 = (0);
seq__27923_27937 = G__27952;
chunk__27924_27938 = G__27953;
count__27925_27939 = G__27954;
i__27926_27940 = G__27955;
continue;
} else {
var map__27933_27956 = cljs.core.first.call(null,seq__27923_27950__$1);
var map__27933_27957__$1 = (((((!((map__27933_27956 == null))))?(((((map__27933_27956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27933_27956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933_27956):map__27933_27956);
var binding_27958 = map__27933_27957__$1;
var init_27959 = cljs.core.get.call(null,map__27933_27957__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27958);

cljs.compiler.emitln.call(null," = ",init_27959,";");


var G__27960 = cljs.core.next.call(null,seq__27923_27950__$1);
var G__27961 = null;
var G__27962 = (0);
var G__27963 = (0);
seq__27923_27937 = G__27960;
chunk__27924_27938 = G__27961;
count__27925_27939 = G__27962;
i__27926_27940 = G__27963;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__27921_27935;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__27964){
var map__27965 = p__27964;
var map__27965__$1 = (((((!((map__27965 == null))))?(((((map__27965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27965):map__27965);
var frame = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___27967 = cljs.core.count.call(null,exprs);
var i_27968 = (0);
while(true){
if((i_27968 < n__4607__auto___27967)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_27968)," = ",exprs.call(null,i_27968),";");

var G__27969 = (i_27968 + (1));
i_27968 = G__27969;
continue;
} else {
}
break;
}

var n__4607__auto___27970 = cljs.core.count.call(null,exprs);
var i_27971 = (0);
while(true){
if((i_27971 < n__4607__auto___27970)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_27971))," = ",temps.call(null,i_27971),";");

var G__27972 = (i_27971 + (1));
i_27971 = G__27972;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__27973){
var map__27974 = p__27973;
var map__27974__$1 = (((((!((map__27974 == null))))?(((((map__27974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27974):map__27974);
var expr = cljs.core.get.call(null,map__27974__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27974__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__27976_27988 = cljs.core.seq.call(null,bindings);
var chunk__27977_27989 = null;
var count__27978_27990 = (0);
var i__27979_27991 = (0);
while(true){
if((i__27979_27991 < count__27978_27990)){
var map__27984_27992 = cljs.core._nth.call(null,chunk__27977_27989,i__27979_27991);
var map__27984_27993__$1 = (((((!((map__27984_27992 == null))))?(((((map__27984_27992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27984_27992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27984_27992):map__27984_27992);
var binding_27994 = map__27984_27993__$1;
var init_27995 = cljs.core.get.call(null,map__27984_27993__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27994)," = ",init_27995,";");


var G__27996 = seq__27976_27988;
var G__27997 = chunk__27977_27989;
var G__27998 = count__27978_27990;
var G__27999 = (i__27979_27991 + (1));
seq__27976_27988 = G__27996;
chunk__27977_27989 = G__27997;
count__27978_27990 = G__27998;
i__27979_27991 = G__27999;
continue;
} else {
var temp__5720__auto___28000 = cljs.core.seq.call(null,seq__27976_27988);
if(temp__5720__auto___28000){
var seq__27976_28001__$1 = temp__5720__auto___28000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27976_28001__$1)){
var c__4550__auto___28002 = cljs.core.chunk_first.call(null,seq__27976_28001__$1);
var G__28003 = cljs.core.chunk_rest.call(null,seq__27976_28001__$1);
var G__28004 = c__4550__auto___28002;
var G__28005 = cljs.core.count.call(null,c__4550__auto___28002);
var G__28006 = (0);
seq__27976_27988 = G__28003;
chunk__27977_27989 = G__28004;
count__27978_27990 = G__28005;
i__27979_27991 = G__28006;
continue;
} else {
var map__27986_28007 = cljs.core.first.call(null,seq__27976_28001__$1);
var map__27986_28008__$1 = (((((!((map__27986_28007 == null))))?(((((map__27986_28007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27986_28007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27986_28007):map__27986_28007);
var binding_28009 = map__27986_28008__$1;
var init_28010 = cljs.core.get.call(null,map__27986_28008__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28009)," = ",init_28010,";");


var G__28011 = cljs.core.next.call(null,seq__27976_28001__$1);
var G__28012 = null;
var G__28013 = (0);
var G__28014 = (0);
seq__27976_27988 = G__28011;
chunk__27977_27989 = G__28012;
count__27978_27990 = G__28013;
i__27979_27991 = G__28014;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__28017){
var map__28018 = p__28017;
var map__28018__$1 = (((((!((map__28018 == null))))?(((((map__28018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28018):map__28018);
var expr = map__28018__$1;
var f = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28020 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env){
return (function (p1__28015_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28015_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env){
return (function (p1__28016_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28016_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28018,map__28018__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__28020,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__28020,(1),null);
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_28023 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_28023,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_28024 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_28024,args)),(((mfa_28024 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_28024,args)),"], 0))");
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
var fprop_28025 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_28025," ? ",f__$1,fprop_28025,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_28025," ? ",f__$1,fprop_28025,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__28026){
var map__28027 = p__28026;
var map__28027__$1 = (((((!((map__28027 == null))))?(((((map__28027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28027):map__28027);
var ctor = cljs.core.get.call(null,map__28027__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__28027__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28027__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__28029){
var map__28030 = p__28029;
var map__28030__$1 = (((((!((map__28030 == null))))?(((((map__28030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28030):map__28030);
var target = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
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
var map__28032 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28032__$1 = (((((!((map__28032 == null))))?(((((map__28032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28032):map__28032);
var options = cljs.core.get.call(null,map__28032__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__28032__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__28033 = options;
var map__28033__$1 = (((((!((map__28033 == null))))?(((((map__28033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28033):map__28033);
var target = cljs.core.get.call(null,map__28033__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__28033__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__28034 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__28039 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__28039__$1 = (((((!((map__28039 == null))))?(((((map__28039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28039):map__28039);
var node_libs = cljs.core.get.call(null,map__28039__$1,true);
var libs_to_load = cljs.core.get.call(null,map__28039__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__28034,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__28034,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__28041_28061 = cljs.core.seq.call(null,libs_to_load);
var chunk__28042_28062 = null;
var count__28043_28063 = (0);
var i__28044_28064 = (0);
while(true){
if((i__28044_28064 < count__28043_28063)){
var lib_28065 = cljs.core._nth.call(null,chunk__28042_28062,i__28044_28064);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28065)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28065),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28065),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28065),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28065),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28065,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28065),"');");
}

}
}
}


var G__28066 = seq__28041_28061;
var G__28067 = chunk__28042_28062;
var G__28068 = count__28043_28063;
var G__28069 = (i__28044_28064 + (1));
seq__28041_28061 = G__28066;
chunk__28042_28062 = G__28067;
count__28043_28063 = G__28068;
i__28044_28064 = G__28069;
continue;
} else {
var temp__5720__auto___28070 = cljs.core.seq.call(null,seq__28041_28061);
if(temp__5720__auto___28070){
var seq__28041_28071__$1 = temp__5720__auto___28070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28041_28071__$1)){
var c__4550__auto___28072 = cljs.core.chunk_first.call(null,seq__28041_28071__$1);
var G__28073 = cljs.core.chunk_rest.call(null,seq__28041_28071__$1);
var G__28074 = c__4550__auto___28072;
var G__28075 = cljs.core.count.call(null,c__4550__auto___28072);
var G__28076 = (0);
seq__28041_28061 = G__28073;
chunk__28042_28062 = G__28074;
count__28043_28063 = G__28075;
i__28044_28064 = G__28076;
continue;
} else {
var lib_28077 = cljs.core.first.call(null,seq__28041_28071__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28077)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28077),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28077),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28077),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28077),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_28077,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28077),"');");
}

}
}
}


var G__28078 = cljs.core.next.call(null,seq__28041_28071__$1);
var G__28079 = null;
var G__28080 = (0);
var G__28081 = (0);
seq__28041_28061 = G__28078;
chunk__28042_28062 = G__28079;
count__28043_28063 = G__28080;
i__28044_28064 = G__28081;
continue;
}
} else {
}
}
break;
}

var seq__28045_28082 = cljs.core.seq.call(null,node_libs);
var chunk__28046_28083 = null;
var count__28047_28084 = (0);
var i__28048_28085 = (0);
while(true){
if((i__28048_28085 < count__28047_28084)){
var lib_28086 = cljs.core._nth.call(null,chunk__28046_28083,i__28048_28085);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28086)," = require('",lib_28086,"');");


var G__28087 = seq__28045_28082;
var G__28088 = chunk__28046_28083;
var G__28089 = count__28047_28084;
var G__28090 = (i__28048_28085 + (1));
seq__28045_28082 = G__28087;
chunk__28046_28083 = G__28088;
count__28047_28084 = G__28089;
i__28048_28085 = G__28090;
continue;
} else {
var temp__5720__auto___28091 = cljs.core.seq.call(null,seq__28045_28082);
if(temp__5720__auto___28091){
var seq__28045_28092__$1 = temp__5720__auto___28091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28045_28092__$1)){
var c__4550__auto___28093 = cljs.core.chunk_first.call(null,seq__28045_28092__$1);
var G__28094 = cljs.core.chunk_rest.call(null,seq__28045_28092__$1);
var G__28095 = c__4550__auto___28093;
var G__28096 = cljs.core.count.call(null,c__4550__auto___28093);
var G__28097 = (0);
seq__28045_28082 = G__28094;
chunk__28046_28083 = G__28095;
count__28047_28084 = G__28096;
i__28048_28085 = G__28097;
continue;
} else {
var lib_28098 = cljs.core.first.call(null,seq__28045_28092__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28098)," = require('",lib_28098,"');");


var G__28099 = cljs.core.next.call(null,seq__28045_28092__$1);
var G__28100 = null;
var G__28101 = (0);
var G__28102 = (0);
seq__28045_28082 = G__28099;
chunk__28046_28083 = G__28100;
count__28047_28084 = G__28101;
i__28048_28085 = G__28102;
continue;
}
} else {
}
}
break;
}

var seq__28049_28103 = cljs.core.seq.call(null,global_exports_libs);
var chunk__28050_28104 = null;
var count__28051_28105 = (0);
var i__28052_28106 = (0);
while(true){
if((i__28052_28106 < count__28051_28105)){
var lib_28107 = cljs.core._nth.call(null,chunk__28050_28104,i__28052_28106);
var map__28057_28108 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28107));
var map__28057_28109__$1 = (((((!((map__28057_28108 == null))))?(((((map__28057_28108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28057_28108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28057_28108):map__28057_28108);
var global_exports_28110 = cljs.core.get.call(null,map__28057_28109__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28110,lib_28107);


var G__28111 = seq__28049_28103;
var G__28112 = chunk__28050_28104;
var G__28113 = count__28051_28105;
var G__28114 = (i__28052_28106 + (1));
seq__28049_28103 = G__28111;
chunk__28050_28104 = G__28112;
count__28051_28105 = G__28113;
i__28052_28106 = G__28114;
continue;
} else {
var temp__5720__auto___28115 = cljs.core.seq.call(null,seq__28049_28103);
if(temp__5720__auto___28115){
var seq__28049_28116__$1 = temp__5720__auto___28115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28049_28116__$1)){
var c__4550__auto___28117 = cljs.core.chunk_first.call(null,seq__28049_28116__$1);
var G__28118 = cljs.core.chunk_rest.call(null,seq__28049_28116__$1);
var G__28119 = c__4550__auto___28117;
var G__28120 = cljs.core.count.call(null,c__4550__auto___28117);
var G__28121 = (0);
seq__28049_28103 = G__28118;
chunk__28050_28104 = G__28119;
count__28051_28105 = G__28120;
i__28052_28106 = G__28121;
continue;
} else {
var lib_28122 = cljs.core.first.call(null,seq__28049_28116__$1);
var map__28059_28123 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28122));
var map__28059_28124__$1 = (((((!((map__28059_28123 == null))))?(((((map__28059_28123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28059_28123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28059_28123):map__28059_28123);
var global_exports_28125 = cljs.core.get.call(null,map__28059_28124__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_28125,lib_28122);


var G__28126 = cljs.core.next.call(null,seq__28049_28116__$1);
var G__28127 = null;
var G__28128 = (0);
var G__28129 = (0);
seq__28049_28103 = G__28126;
chunk__28050_28104 = G__28127;
count__28051_28105 = G__28128;
i__28052_28106 = G__28129;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__28130){
var map__28131 = p__28130;
var map__28131__$1 = (((((!((map__28131 == null))))?(((((map__28131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28131):map__28131);
var name = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__28133){
var map__28134 = p__28133;
var map__28134__$1 = (((((!((map__28134 == null))))?(((((map__28134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28134):map__28134);
var name = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__28136){
var map__28137 = p__28136;
var map__28137__$1 = (((((!((map__28137 == null))))?(((((map__28137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28137):map__28137);
var t = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28139_28163 = cljs.core.seq.call(null,protocols);
var chunk__28140_28164 = null;
var count__28141_28165 = (0);
var i__28142_28166 = (0);
while(true){
if((i__28142_28166 < count__28141_28165)){
var protocol_28167 = cljs.core._nth.call(null,chunk__28140_28164,i__28142_28166);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28167)),"}");


var G__28168 = seq__28139_28163;
var G__28169 = chunk__28140_28164;
var G__28170 = count__28141_28165;
var G__28171 = (i__28142_28166 + (1));
seq__28139_28163 = G__28168;
chunk__28140_28164 = G__28169;
count__28141_28165 = G__28170;
i__28142_28166 = G__28171;
continue;
} else {
var temp__5720__auto___28172 = cljs.core.seq.call(null,seq__28139_28163);
if(temp__5720__auto___28172){
var seq__28139_28173__$1 = temp__5720__auto___28172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28139_28173__$1)){
var c__4550__auto___28174 = cljs.core.chunk_first.call(null,seq__28139_28173__$1);
var G__28175 = cljs.core.chunk_rest.call(null,seq__28139_28173__$1);
var G__28176 = c__4550__auto___28174;
var G__28177 = cljs.core.count.call(null,c__4550__auto___28174);
var G__28178 = (0);
seq__28139_28163 = G__28175;
chunk__28140_28164 = G__28176;
count__28141_28165 = G__28177;
i__28142_28166 = G__28178;
continue;
} else {
var protocol_28179 = cljs.core.first.call(null,seq__28139_28173__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28179)),"}");


var G__28180 = cljs.core.next.call(null,seq__28139_28173__$1);
var G__28181 = null;
var G__28182 = (0);
var G__28183 = (0);
seq__28139_28163 = G__28180;
chunk__28140_28164 = G__28181;
count__28141_28165 = G__28182;
i__28142_28166 = G__28183;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28143_28184 = cljs.core.seq.call(null,fields__$1);
var chunk__28144_28185 = null;
var count__28145_28186 = (0);
var i__28146_28187 = (0);
while(true){
if((i__28146_28187 < count__28145_28186)){
var fld_28188 = cljs.core._nth.call(null,chunk__28144_28185,i__28146_28187);
cljs.compiler.emitln.call(null,"this.",fld_28188," = ",fld_28188,";");


var G__28189 = seq__28143_28184;
var G__28190 = chunk__28144_28185;
var G__28191 = count__28145_28186;
var G__28192 = (i__28146_28187 + (1));
seq__28143_28184 = G__28189;
chunk__28144_28185 = G__28190;
count__28145_28186 = G__28191;
i__28146_28187 = G__28192;
continue;
} else {
var temp__5720__auto___28193 = cljs.core.seq.call(null,seq__28143_28184);
if(temp__5720__auto___28193){
var seq__28143_28194__$1 = temp__5720__auto___28193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28143_28194__$1)){
var c__4550__auto___28195 = cljs.core.chunk_first.call(null,seq__28143_28194__$1);
var G__28196 = cljs.core.chunk_rest.call(null,seq__28143_28194__$1);
var G__28197 = c__4550__auto___28195;
var G__28198 = cljs.core.count.call(null,c__4550__auto___28195);
var G__28199 = (0);
seq__28143_28184 = G__28196;
chunk__28144_28185 = G__28197;
count__28145_28186 = G__28198;
i__28146_28187 = G__28199;
continue;
} else {
var fld_28200 = cljs.core.first.call(null,seq__28143_28194__$1);
cljs.compiler.emitln.call(null,"this.",fld_28200," = ",fld_28200,";");


var G__28201 = cljs.core.next.call(null,seq__28143_28194__$1);
var G__28202 = null;
var G__28203 = (0);
var G__28204 = (0);
seq__28143_28184 = G__28201;
chunk__28144_28185 = G__28202;
count__28145_28186 = G__28203;
i__28146_28187 = G__28204;
continue;
}
} else {
}
}
break;
}

var seq__28147_28205 = cljs.core.seq.call(null,pmasks);
var chunk__28148_28206 = null;
var count__28149_28207 = (0);
var i__28150_28208 = (0);
while(true){
if((i__28150_28208 < count__28149_28207)){
var vec__28157_28209 = cljs.core._nth.call(null,chunk__28148_28206,i__28150_28208);
var pno_28210 = cljs.core.nth.call(null,vec__28157_28209,(0),null);
var pmask_28211 = cljs.core.nth.call(null,vec__28157_28209,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28210,"$ = ",pmask_28211,";");


var G__28212 = seq__28147_28205;
var G__28213 = chunk__28148_28206;
var G__28214 = count__28149_28207;
var G__28215 = (i__28150_28208 + (1));
seq__28147_28205 = G__28212;
chunk__28148_28206 = G__28213;
count__28149_28207 = G__28214;
i__28150_28208 = G__28215;
continue;
} else {
var temp__5720__auto___28216 = cljs.core.seq.call(null,seq__28147_28205);
if(temp__5720__auto___28216){
var seq__28147_28217__$1 = temp__5720__auto___28216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28147_28217__$1)){
var c__4550__auto___28218 = cljs.core.chunk_first.call(null,seq__28147_28217__$1);
var G__28219 = cljs.core.chunk_rest.call(null,seq__28147_28217__$1);
var G__28220 = c__4550__auto___28218;
var G__28221 = cljs.core.count.call(null,c__4550__auto___28218);
var G__28222 = (0);
seq__28147_28205 = G__28219;
chunk__28148_28206 = G__28220;
count__28149_28207 = G__28221;
i__28150_28208 = G__28222;
continue;
} else {
var vec__28160_28223 = cljs.core.first.call(null,seq__28147_28217__$1);
var pno_28224 = cljs.core.nth.call(null,vec__28160_28223,(0),null);
var pmask_28225 = cljs.core.nth.call(null,vec__28160_28223,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28224,"$ = ",pmask_28225,";");


var G__28226 = cljs.core.next.call(null,seq__28147_28217__$1);
var G__28227 = null;
var G__28228 = (0);
var G__28229 = (0);
seq__28147_28205 = G__28226;
chunk__28148_28206 = G__28227;
count__28149_28207 = G__28228;
i__28150_28208 = G__28229;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__28230){
var map__28231 = p__28230;
var map__28231__$1 = (((((!((map__28231 == null))))?(((((map__28231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28231):map__28231);
var t = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28231__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28233_28257 = cljs.core.seq.call(null,protocols);
var chunk__28234_28258 = null;
var count__28235_28259 = (0);
var i__28236_28260 = (0);
while(true){
if((i__28236_28260 < count__28235_28259)){
var protocol_28261 = cljs.core._nth.call(null,chunk__28234_28258,i__28236_28260);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28261)),"}");


var G__28262 = seq__28233_28257;
var G__28263 = chunk__28234_28258;
var G__28264 = count__28235_28259;
var G__28265 = (i__28236_28260 + (1));
seq__28233_28257 = G__28262;
chunk__28234_28258 = G__28263;
count__28235_28259 = G__28264;
i__28236_28260 = G__28265;
continue;
} else {
var temp__5720__auto___28266 = cljs.core.seq.call(null,seq__28233_28257);
if(temp__5720__auto___28266){
var seq__28233_28267__$1 = temp__5720__auto___28266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28233_28267__$1)){
var c__4550__auto___28268 = cljs.core.chunk_first.call(null,seq__28233_28267__$1);
var G__28269 = cljs.core.chunk_rest.call(null,seq__28233_28267__$1);
var G__28270 = c__4550__auto___28268;
var G__28271 = cljs.core.count.call(null,c__4550__auto___28268);
var G__28272 = (0);
seq__28233_28257 = G__28269;
chunk__28234_28258 = G__28270;
count__28235_28259 = G__28271;
i__28236_28260 = G__28272;
continue;
} else {
var protocol_28273 = cljs.core.first.call(null,seq__28233_28267__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28273)),"}");


var G__28274 = cljs.core.next.call(null,seq__28233_28267__$1);
var G__28275 = null;
var G__28276 = (0);
var G__28277 = (0);
seq__28233_28257 = G__28274;
chunk__28234_28258 = G__28275;
count__28235_28259 = G__28276;
i__28236_28260 = G__28277;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28237_28278 = cljs.core.seq.call(null,fields__$1);
var chunk__28238_28279 = null;
var count__28239_28280 = (0);
var i__28240_28281 = (0);
while(true){
if((i__28240_28281 < count__28239_28280)){
var fld_28282 = cljs.core._nth.call(null,chunk__28238_28279,i__28240_28281);
cljs.compiler.emitln.call(null,"this.",fld_28282," = ",fld_28282,";");


var G__28283 = seq__28237_28278;
var G__28284 = chunk__28238_28279;
var G__28285 = count__28239_28280;
var G__28286 = (i__28240_28281 + (1));
seq__28237_28278 = G__28283;
chunk__28238_28279 = G__28284;
count__28239_28280 = G__28285;
i__28240_28281 = G__28286;
continue;
} else {
var temp__5720__auto___28287 = cljs.core.seq.call(null,seq__28237_28278);
if(temp__5720__auto___28287){
var seq__28237_28288__$1 = temp__5720__auto___28287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28237_28288__$1)){
var c__4550__auto___28289 = cljs.core.chunk_first.call(null,seq__28237_28288__$1);
var G__28290 = cljs.core.chunk_rest.call(null,seq__28237_28288__$1);
var G__28291 = c__4550__auto___28289;
var G__28292 = cljs.core.count.call(null,c__4550__auto___28289);
var G__28293 = (0);
seq__28237_28278 = G__28290;
chunk__28238_28279 = G__28291;
count__28239_28280 = G__28292;
i__28240_28281 = G__28293;
continue;
} else {
var fld_28294 = cljs.core.first.call(null,seq__28237_28288__$1);
cljs.compiler.emitln.call(null,"this.",fld_28294," = ",fld_28294,";");


var G__28295 = cljs.core.next.call(null,seq__28237_28288__$1);
var G__28296 = null;
var G__28297 = (0);
var G__28298 = (0);
seq__28237_28278 = G__28295;
chunk__28238_28279 = G__28296;
count__28239_28280 = G__28297;
i__28240_28281 = G__28298;
continue;
}
} else {
}
}
break;
}

var seq__28241_28299 = cljs.core.seq.call(null,pmasks);
var chunk__28242_28300 = null;
var count__28243_28301 = (0);
var i__28244_28302 = (0);
while(true){
if((i__28244_28302 < count__28243_28301)){
var vec__28251_28303 = cljs.core._nth.call(null,chunk__28242_28300,i__28244_28302);
var pno_28304 = cljs.core.nth.call(null,vec__28251_28303,(0),null);
var pmask_28305 = cljs.core.nth.call(null,vec__28251_28303,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28304,"$ = ",pmask_28305,";");


var G__28306 = seq__28241_28299;
var G__28307 = chunk__28242_28300;
var G__28308 = count__28243_28301;
var G__28309 = (i__28244_28302 + (1));
seq__28241_28299 = G__28306;
chunk__28242_28300 = G__28307;
count__28243_28301 = G__28308;
i__28244_28302 = G__28309;
continue;
} else {
var temp__5720__auto___28310 = cljs.core.seq.call(null,seq__28241_28299);
if(temp__5720__auto___28310){
var seq__28241_28311__$1 = temp__5720__auto___28310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28241_28311__$1)){
var c__4550__auto___28312 = cljs.core.chunk_first.call(null,seq__28241_28311__$1);
var G__28313 = cljs.core.chunk_rest.call(null,seq__28241_28311__$1);
var G__28314 = c__4550__auto___28312;
var G__28315 = cljs.core.count.call(null,c__4550__auto___28312);
var G__28316 = (0);
seq__28241_28299 = G__28313;
chunk__28242_28300 = G__28314;
count__28243_28301 = G__28315;
i__28244_28302 = G__28316;
continue;
} else {
var vec__28254_28317 = cljs.core.first.call(null,seq__28241_28311__$1);
var pno_28318 = cljs.core.nth.call(null,vec__28254_28317,(0),null);
var pmask_28319 = cljs.core.nth.call(null,vec__28254_28317,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28318,"$ = ",pmask_28319,";");


var G__28320 = cljs.core.next.call(null,seq__28241_28311__$1);
var G__28321 = null;
var G__28322 = (0);
var G__28323 = (0);
seq__28241_28299 = G__28320;
chunk__28242_28300 = G__28321;
count__28243_28301 = G__28322;
i__28244_28302 = G__28323;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__28324){
var map__28325 = p__28324;
var map__28325__$1 = (((((!((map__28325 == null))))?(((((map__28325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28325):map__28325);
var target = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__28327){
var map__28328 = p__28327;
var map__28328__$1 = (((((!((map__28328 == null))))?(((((map__28328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28328):map__28328);
var op = cljs.core.get.call(null,map__28328__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__28328__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__28328__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__28328__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__28328__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__27122__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27122__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__28334 = cljs.core.seq.call(null,table);
var chunk__28335 = null;
var count__28336 = (0);
var i__28337 = (0);
while(true){
if((i__28337 < count__28336)){
var vec__28344 = cljs.core._nth.call(null,chunk__28335,i__28337);
var sym = cljs.core.nth.call(null,vec__28344,(0),null);
var value = cljs.core.nth.call(null,vec__28344,(1),null);
var ns_28350 = cljs.core.namespace.call(null,sym);
var name_28351 = cljs.core.name.call(null,sym);
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


var G__28352 = seq__28334;
var G__28353 = chunk__28335;
var G__28354 = count__28336;
var G__28355 = (i__28337 + (1));
seq__28334 = G__28352;
chunk__28335 = G__28353;
count__28336 = G__28354;
i__28337 = G__28355;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28334);
if(temp__5720__auto__){
var seq__28334__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28334__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28334__$1);
var G__28356 = cljs.core.chunk_rest.call(null,seq__28334__$1);
var G__28357 = c__4550__auto__;
var G__28358 = cljs.core.count.call(null,c__4550__auto__);
var G__28359 = (0);
seq__28334 = G__28356;
chunk__28335 = G__28357;
count__28336 = G__28358;
i__28337 = G__28359;
continue;
} else {
var vec__28347 = cljs.core.first.call(null,seq__28334__$1);
var sym = cljs.core.nth.call(null,vec__28347,(0),null);
var value = cljs.core.nth.call(null,vec__28347,(1),null);
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


var G__28362 = cljs.core.next.call(null,seq__28334__$1);
var G__28363 = null;
var G__28364 = (0);
var G__28365 = (0);
seq__28334 = G__28362;
chunk__28335 = G__28363;
count__28336 = G__28364;
i__28337 = G__28365;
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
var G__28367 = arguments.length;
switch (G__28367) {
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
var k_28372 = cljs.core.first.call(null,ks);
var vec__28368_28373 = cljs.core.conj.call(null,prefix,k_28372);
var top_28374 = cljs.core.nth.call(null,vec__28368_28373,(0),null);
var prefix_SINGLEQUOTE__28375 = vec__28368_28373;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_28372)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__28375) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_28374)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_28374)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28375)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_28374);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__28375)),";");
}
} else {
}

var m_28376 = cljs.core.get.call(null,externs,k_28372);
if(cljs.core.empty_QMARK_.call(null,m_28376)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__28375,m_28376,top_level,known_externs);
}

var G__28377 = cljs.core.next.call(null,ks);
ks = G__28377;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1601312560490
