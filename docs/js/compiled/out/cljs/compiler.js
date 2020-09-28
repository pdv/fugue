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
var map__33106 = s;
var map__33106__$1 = (((((!((map__33106 == null))))?(((((map__33106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33106):map__33106);
var name = cljs.core.get.call(null,map__33106__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33106__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__33109 = info;
var map__33110 = G__33109;
var map__33110__$1 = (((((!((map__33110 == null))))?(((((map__33110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33110):map__33110);
var shadow = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__33109__$1 = G__33109;
while(true){
var d__$2 = d__$1;
var map__33114 = G__33109__$1;
var map__33114__$1 = (((((!((map__33114 == null))))?(((((map__33114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33114):map__33114);
var shadow__$1 = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__33116 = (d__$2 + (1));
var G__33117 = shadow__$1;
d__$1 = G__33116;
G__33109__$1 = G__33117;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__33118){
var map__33119 = p__33118;
var map__33119__$1 = (((((!((map__33119 == null))))?(((((map__33119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33119):map__33119);
var name_var = map__33119__$1;
var name = cljs.core.get.call(null,map__33119__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33119__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__33121 = info;
var map__33121__$1 = (((((!((map__33121 == null))))?(((((map__33121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33121):map__33121);
var ns = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__33124 = arguments.length;
switch (G__33124) {
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
var G__33126 = cp;
switch (G__33126) {
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
var seq__33128_33132 = cljs.core.seq.call(null,s);
var chunk__33129_33133 = null;
var count__33130_33134 = (0);
var i__33131_33135 = (0);
while(true){
if((i__33131_33135 < count__33130_33134)){
var c_33136 = cljs.core._nth.call(null,chunk__33129_33133,i__33131_33135);
sb.append(cljs.compiler.escape_char.call(null,c_33136));


var G__33137 = seq__33128_33132;
var G__33138 = chunk__33129_33133;
var G__33139 = count__33130_33134;
var G__33140 = (i__33131_33135 + (1));
seq__33128_33132 = G__33137;
chunk__33129_33133 = G__33138;
count__33130_33134 = G__33139;
i__33131_33135 = G__33140;
continue;
} else {
var temp__5720__auto___33141 = cljs.core.seq.call(null,seq__33128_33132);
if(temp__5720__auto___33141){
var seq__33128_33142__$1 = temp__5720__auto___33141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33128_33142__$1)){
var c__4550__auto___33143 = cljs.core.chunk_first.call(null,seq__33128_33142__$1);
var G__33144 = cljs.core.chunk_rest.call(null,seq__33128_33142__$1);
var G__33145 = c__4550__auto___33143;
var G__33146 = cljs.core.count.call(null,c__4550__auto___33143);
var G__33147 = (0);
seq__33128_33132 = G__33144;
chunk__33129_33133 = G__33145;
count__33130_33134 = G__33146;
i__33131_33135 = G__33147;
continue;
} else {
var c_33148 = cljs.core.first.call(null,seq__33128_33142__$1);
sb.append(cljs.compiler.escape_char.call(null,c_33148));


var G__33149 = cljs.core.next.call(null,seq__33128_33142__$1);
var G__33150 = null;
var G__33151 = (0);
var G__33152 = (0);
seq__33128_33132 = G__33149;
chunk__33129_33133 = G__33150;
count__33130_33134 = G__33151;
i__33131_33135 = G__33152;
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
var map__33153_33158 = ast;
var map__33153_33159__$1 = (((((!((map__33153_33158 == null))))?(((((map__33153_33158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33153_33158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33153_33158):map__33153_33158);
var env_33160 = cljs.core.get.call(null,map__33153_33159__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_33160))){
var map__33155_33161 = env_33160;
var map__33155_33162__$1 = (((((!((map__33155_33161 == null))))?(((((map__33155_33161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33155_33161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33155_33161):map__33155_33161);
var line_33163 = cljs.core.get.call(null,map__33155_33162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33164 = cljs.core.get.call(null,map__33155_33162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__33155_33161,map__33155_33162__$1,line_33163,column_33164,map__33153_33158,map__33153_33159__$1,env_33160){
return (function (m){
var minfo = (function (){var G__33157 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__33157,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__33157;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33163 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__33155_33161,map__33155_33162__$1,line_33163,column_33164,map__33153_33158,map__33153_33159__$1,env_33160){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33164)?(column_33164 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__33155_33161,map__33155_33162__$1,line_33163,column_33164,map__33153_33158,map__33153_33159__$1,env_33160){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__33155_33161,map__33155_33162__$1,line_33163,column_33164,map__33153_33158,map__33153_33159__$1,env_33160))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__33155_33161,map__33155_33162__$1,line_33163,column_33164,map__33153_33158,map__33153_33159__$1,env_33160))
,cljs.core.sorted_map.call(null)));
});})(map__33155_33161,map__33155_33162__$1,line_33163,column_33164,map__33153_33158,map__33153_33159__$1,env_33160))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__33173 = arguments.length;
switch (G__33173) {
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
var len__4730__auto___33180 = arguments.length;
var i__4731__auto___33181 = (0);
while(true){
if((i__4731__auto___33181 < len__4730__auto___33180)){
args_arr__4751__auto__.push((arguments[i__4731__auto___33181]));

var G__33182 = (i__4731__auto___33181 + (1));
i__4731__auto___33181 = G__33182;
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
var s_33183 = (function (){var G__33174 = a;
if((!(typeof a === 'string'))){
return G__33174.toString();
} else {
return G__33174;
}
})();
var temp__5724__auto___33184 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___33184 == null)){
} else {
var sm_data_33185 = temp__5724__auto___33184;
cljs.core.swap_BANG_.call(null,sm_data_33185,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_33185,temp__5724__auto___33184,s_33183){
return (function (p1__33165_SHARP_){
return (p1__33165_SHARP_ + s_33183.length);
});})(sm_data_33185,temp__5724__auto___33184,s_33183))
);
}

cljs.core.print.call(null,s_33183);

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

var seq__33175 = cljs.core.seq.call(null,xs);
var chunk__33176 = null;
var count__33177 = (0);
var i__33178 = (0);
while(true){
if((i__33178 < count__33177)){
var x = cljs.core._nth.call(null,chunk__33176,i__33178);
cljs.compiler.emits.call(null,x);


var G__33186 = seq__33175;
var G__33187 = chunk__33176;
var G__33188 = count__33177;
var G__33189 = (i__33178 + (1));
seq__33175 = G__33186;
chunk__33176 = G__33187;
count__33177 = G__33188;
i__33178 = G__33189;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33175);
if(temp__5720__auto__){
var seq__33175__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33175__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33175__$1);
var G__33190 = cljs.core.chunk_rest.call(null,seq__33175__$1);
var G__33191 = c__4550__auto__;
var G__33192 = cljs.core.count.call(null,c__4550__auto__);
var G__33193 = (0);
seq__33175 = G__33190;
chunk__33176 = G__33191;
count__33177 = G__33192;
i__33178 = G__33193;
continue;
} else {
var x = cljs.core.first.call(null,seq__33175__$1);
cljs.compiler.emits.call(null,x);


var G__33194 = cljs.core.next.call(null,seq__33175__$1);
var G__33195 = null;
var G__33196 = (0);
var G__33197 = (0);
seq__33175 = G__33194;
chunk__33176 = G__33195;
count__33177 = G__33196;
i__33178 = G__33197;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq33167){
var G__33168 = cljs.core.first.call(null,seq33167);
var seq33167__$1 = cljs.core.next.call(null,seq33167);
var G__33169 = cljs.core.first.call(null,seq33167__$1);
var seq33167__$2 = cljs.core.next.call(null,seq33167__$1);
var G__33170 = cljs.core.first.call(null,seq33167__$2);
var seq33167__$3 = cljs.core.next.call(null,seq33167__$2);
var G__33171 = cljs.core.first.call(null,seq33167__$3);
var seq33167__$4 = cljs.core.next.call(null,seq33167__$3);
var G__33172 = cljs.core.first.call(null,seq33167__$4);
var seq33167__$5 = cljs.core.next.call(null,seq33167__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33168,G__33169,G__33170,G__33171,G__33172,seq33167__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__33198){
var map__33199 = p__33198;
var map__33199__$1 = (((((!((map__33199 == null))))?(((((map__33199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33199):map__33199);
var m = map__33199__$1;
var gen_line = cljs.core.get.call(null,map__33199__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__33208 = arguments.length;
switch (G__33208) {
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
var len__4730__auto___33214 = arguments.length;
var i__4731__auto___33215 = (0);
while(true){
if((i__4731__auto___33215 < len__4730__auto___33214)){
args_arr__4751__auto__.push((arguments[i__4731__auto___33215]));

var G__33216 = (i__4731__auto___33215 + (1));
i__4731__auto___33215 = G__33216;
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

var seq__33209_33217 = cljs.core.seq.call(null,xs);
var chunk__33210_33218 = null;
var count__33211_33219 = (0);
var i__33212_33220 = (0);
while(true){
if((i__33212_33220 < count__33211_33219)){
var x_33221 = cljs.core._nth.call(null,chunk__33210_33218,i__33212_33220);
cljs.compiler.emits.call(null,x_33221);


var G__33222 = seq__33209_33217;
var G__33223 = chunk__33210_33218;
var G__33224 = count__33211_33219;
var G__33225 = (i__33212_33220 + (1));
seq__33209_33217 = G__33222;
chunk__33210_33218 = G__33223;
count__33211_33219 = G__33224;
i__33212_33220 = G__33225;
continue;
} else {
var temp__5720__auto___33226 = cljs.core.seq.call(null,seq__33209_33217);
if(temp__5720__auto___33226){
var seq__33209_33227__$1 = temp__5720__auto___33226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33209_33227__$1)){
var c__4550__auto___33228 = cljs.core.chunk_first.call(null,seq__33209_33227__$1);
var G__33229 = cljs.core.chunk_rest.call(null,seq__33209_33227__$1);
var G__33230 = c__4550__auto___33228;
var G__33231 = cljs.core.count.call(null,c__4550__auto___33228);
var G__33232 = (0);
seq__33209_33217 = G__33229;
chunk__33210_33218 = G__33230;
count__33211_33219 = G__33231;
i__33212_33220 = G__33232;
continue;
} else {
var x_33233 = cljs.core.first.call(null,seq__33209_33227__$1);
cljs.compiler.emits.call(null,x_33233);


var G__33234 = cljs.core.next.call(null,seq__33209_33227__$1);
var G__33235 = null;
var G__33236 = (0);
var G__33237 = (0);
seq__33209_33217 = G__33234;
chunk__33210_33218 = G__33235;
count__33211_33219 = G__33236;
i__33212_33220 = G__33237;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33202){
var G__33203 = cljs.core.first.call(null,seq33202);
var seq33202__$1 = cljs.core.next.call(null,seq33202);
var G__33204 = cljs.core.first.call(null,seq33202__$1);
var seq33202__$2 = cljs.core.next.call(null,seq33202__$1);
var G__33205 = cljs.core.first.call(null,seq33202__$2);
var seq33202__$3 = cljs.core.next.call(null,seq33202__$2);
var G__33206 = cljs.core.first.call(null,seq33202__$3);
var seq33202__$4 = cljs.core.next.call(null,seq33202__$3);
var G__33207 = cljs.core.first.call(null,seq33202__$4);
var seq33202__$5 = cljs.core.next.call(null,seq33202__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33203,G__33204,G__33205,G__33206,G__33207,seq33202__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33238_33242 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33239_33243 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33240_33244 = true;
var _STAR_print_fn_STAR__temp_val__33241_33245 = ((function (_STAR_print_newline_STAR__orig_val__33238_33242,_STAR_print_fn_STAR__orig_val__33239_33243,_STAR_print_newline_STAR__temp_val__33240_33244,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33238_33242,_STAR_print_fn_STAR__orig_val__33239_33243,_STAR_print_newline_STAR__temp_val__33240_33244,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33240_33244;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33241_33245;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33239_33243;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33238_33242;
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
var vec__33246 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__33246,(0),null);
var name = cljs.core.nth.call(null,vec__33246,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__33246,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__33246,ns,name))
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
var vec__33249 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__33249,(0),null);
var flags = cljs.core.nth.call(null,vec__33249,(1),null);
var pattern = cljs.core.nth.call(null,vec__33249,(2),null);
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
return (function (p1__33252_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__33252_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__33254){
var map__33255 = p__33254;
var map__33255__$1 = (((((!((map__33255 == null))))?(((((map__33255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33255):map__33255);
var ast = map__33255__$1;
var info = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__33257 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__33257__$1 = (((((!((map__33257 == null))))?(((((map__33257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257):map__33257);
var cenv = map__33257__$1;
var options = cljs.core.get.call(null,map__33257__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__33259 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__33259,cljs.analyzer.es5_allowed);
} else {
return G__33259;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__33260 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__33260,reserved);
} else {
return G__33260;
}
})();
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__33261_33262 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__33261_33263__$1 = (((G__33261_33262 instanceof cljs.core.Keyword))?G__33261_33262.fqn:null);
switch (G__33261_33263__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__33265){
var map__33266 = p__33265;
var map__33266__$1 = (((((!((map__33266 == null))))?(((((map__33266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33266):map__33266);
var arg = map__33266__$1;
var env = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33268 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33268__$1 = (((((!((map__33268 == null))))?(((((map__33268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33268):map__33268);
var name = cljs.core.get.call(null,map__33268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__33270){
var map__33271 = p__33270;
var map__33271__$1 = (((((!((map__33271 == null))))?(((((map__33271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33271):map__33271);
var expr = cljs.core.get.call(null,map__33271__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__33271__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__33271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__33273_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33273_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33274){
var map__33275 = p__33274;
var map__33275__$1 = (((((!((map__33275 == null))))?(((((map__33275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33275):map__33275);
var env = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33277){
var map__33278 = p__33277;
var map__33278__$1 = (((((!((map__33278 == null))))?(((((map__33278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33278):map__33278);
var items = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__33280_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33280_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33281){
var map__33282 = p__33281;
var map__33282__$1 = (((((!((map__33282 == null))))?(((((map__33282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33282):map__33282);
var items = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___33306 = cljs.core.seq.call(null,items);
if(temp__5720__auto___33306){
var items_33307__$1 = temp__5720__auto___33306;
var vec__33284_33308 = items_33307__$1;
var seq__33285_33309 = cljs.core.seq.call(null,vec__33284_33308);
var first__33286_33310 = cljs.core.first.call(null,seq__33285_33309);
var seq__33285_33311__$1 = cljs.core.next.call(null,seq__33285_33309);
var vec__33287_33312 = first__33286_33310;
var k_33313 = cljs.core.nth.call(null,vec__33287_33312,(0),null);
var v_33314 = cljs.core.nth.call(null,vec__33287_33312,(1),null);
var r_33315 = seq__33285_33311__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_33313),"\": ",emit_js_object_val.call(null,v_33314));

var seq__33290_33316 = cljs.core.seq.call(null,r_33315);
var chunk__33291_33317 = null;
var count__33292_33318 = (0);
var i__33293_33319 = (0);
while(true){
if((i__33293_33319 < count__33292_33318)){
var vec__33300_33320 = cljs.core._nth.call(null,chunk__33291_33317,i__33293_33319);
var k_33321__$1 = cljs.core.nth.call(null,vec__33300_33320,(0),null);
var v_33322__$1 = cljs.core.nth.call(null,vec__33300_33320,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33321__$1),"\": ",emit_js_object_val.call(null,v_33322__$1));


var G__33323 = seq__33290_33316;
var G__33324 = chunk__33291_33317;
var G__33325 = count__33292_33318;
var G__33326 = (i__33293_33319 + (1));
seq__33290_33316 = G__33323;
chunk__33291_33317 = G__33324;
count__33292_33318 = G__33325;
i__33293_33319 = G__33326;
continue;
} else {
var temp__5720__auto___33327__$1 = cljs.core.seq.call(null,seq__33290_33316);
if(temp__5720__auto___33327__$1){
var seq__33290_33328__$1 = temp__5720__auto___33327__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33290_33328__$1)){
var c__4550__auto___33329 = cljs.core.chunk_first.call(null,seq__33290_33328__$1);
var G__33330 = cljs.core.chunk_rest.call(null,seq__33290_33328__$1);
var G__33331 = c__4550__auto___33329;
var G__33332 = cljs.core.count.call(null,c__4550__auto___33329);
var G__33333 = (0);
seq__33290_33316 = G__33330;
chunk__33291_33317 = G__33331;
count__33292_33318 = G__33332;
i__33293_33319 = G__33333;
continue;
} else {
var vec__33303_33334 = cljs.core.first.call(null,seq__33290_33328__$1);
var k_33335__$1 = cljs.core.nth.call(null,vec__33303_33334,(0),null);
var v_33336__$1 = cljs.core.nth.call(null,vec__33303_33334,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33335__$1),"\": ",emit_js_object_val.call(null,v_33336__$1));


var G__33337 = cljs.core.next.call(null,seq__33290_33328__$1);
var G__33338 = null;
var G__33339 = (0);
var G__33340 = (0);
seq__33290_33316 = G__33337;
chunk__33291_33317 = G__33338;
count__33292_33318 = G__33339;
i__33293_33319 = G__33340;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__33341){
var map__33342 = p__33341;
var map__33342__$1 = (((((!((map__33342 == null))))?(((((map__33342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33342):map__33342);
var keys = cljs.core.get.call(null,map__33342__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__33342__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__33342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__33344){
var map__33345 = p__33344;
var map__33345__$1 = (((((!((map__33345 == null))))?(((((map__33345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33345):map__33345);
var items = cljs.core.get.call(null,map__33345__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33345__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__33347){
var map__33348 = p__33347;
var map__33348__$1 = (((((!((map__33348 == null))))?(((((map__33348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33348):map__33348);
var expr = cljs.core.get.call(null,map__33348__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__33350){
var map__33351 = p__33350;
var map__33351__$1 = (((((!((map__33351 == null))))?(((((map__33351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33351):map__33351);
var form = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__33353 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__33353__$1 = (((((!((map__33353 == null))))?(((((map__33353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33353):map__33353);
var op = cljs.core.get.call(null,map__33353__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33353__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33353__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__33355 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__33355__$1 = (((((!((map__33355 == null))))?(((((map__33355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33355):map__33355);
var op = cljs.core.get.call(null,map__33355__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33355__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33355__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33357){
var map__33358 = p__33357;
var map__33358__$1 = (((((!((map__33358 == null))))?(((((map__33358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33358):map__33358);
var test = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__33360){
var map__33361 = p__33360;
var map__33361__$1 = (((((!((map__33361 == null))))?(((((map__33361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33361):map__33361);
var v = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__33363_33399 = cljs.core.seq.call(null,nodes);
var chunk__33364_33400 = null;
var count__33365_33401 = (0);
var i__33366_33402 = (0);
while(true){
if((i__33366_33402 < count__33365_33401)){
var map__33383_33403 = cljs.core._nth.call(null,chunk__33364_33400,i__33366_33402);
var map__33383_33404__$1 = (((((!((map__33383_33403 == null))))?(((((map__33383_33403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33383_33403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33383_33403):map__33383_33403);
var ts_33405 = cljs.core.get.call(null,map__33383_33404__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33384_33406 = cljs.core.get.call(null,map__33383_33404__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33384_33407__$1 = (((((!((map__33384_33406 == null))))?(((((map__33384_33406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33384_33406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33384_33406):map__33384_33406);
var then_33408 = cljs.core.get.call(null,map__33384_33407__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33387_33409 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_33405));
var chunk__33388_33410 = null;
var count__33389_33411 = (0);
var i__33390_33412 = (0);
while(true){
if((i__33390_33412 < count__33389_33411)){
var test_33413 = cljs.core._nth.call(null,chunk__33388_33410,i__33390_33412);
cljs.compiler.emitln.call(null,"case ",test_33413,":");


var G__33414 = seq__33387_33409;
var G__33415 = chunk__33388_33410;
var G__33416 = count__33389_33411;
var G__33417 = (i__33390_33412 + (1));
seq__33387_33409 = G__33414;
chunk__33388_33410 = G__33415;
count__33389_33411 = G__33416;
i__33390_33412 = G__33417;
continue;
} else {
var temp__5720__auto___33418 = cljs.core.seq.call(null,seq__33387_33409);
if(temp__5720__auto___33418){
var seq__33387_33419__$1 = temp__5720__auto___33418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33387_33419__$1)){
var c__4550__auto___33420 = cljs.core.chunk_first.call(null,seq__33387_33419__$1);
var G__33421 = cljs.core.chunk_rest.call(null,seq__33387_33419__$1);
var G__33422 = c__4550__auto___33420;
var G__33423 = cljs.core.count.call(null,c__4550__auto___33420);
var G__33424 = (0);
seq__33387_33409 = G__33421;
chunk__33388_33410 = G__33422;
count__33389_33411 = G__33423;
i__33390_33412 = G__33424;
continue;
} else {
var test_33425 = cljs.core.first.call(null,seq__33387_33419__$1);
cljs.compiler.emitln.call(null,"case ",test_33425,":");


var G__33426 = cljs.core.next.call(null,seq__33387_33419__$1);
var G__33427 = null;
var G__33428 = (0);
var G__33429 = (0);
seq__33387_33409 = G__33426;
chunk__33388_33410 = G__33427;
count__33389_33411 = G__33428;
i__33390_33412 = G__33429;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33408);
} else {
cljs.compiler.emitln.call(null,then_33408);
}

cljs.compiler.emitln.call(null,"break;");


var G__33430 = seq__33363_33399;
var G__33431 = chunk__33364_33400;
var G__33432 = count__33365_33401;
var G__33433 = (i__33366_33402 + (1));
seq__33363_33399 = G__33430;
chunk__33364_33400 = G__33431;
count__33365_33401 = G__33432;
i__33366_33402 = G__33433;
continue;
} else {
var temp__5720__auto___33434 = cljs.core.seq.call(null,seq__33363_33399);
if(temp__5720__auto___33434){
var seq__33363_33435__$1 = temp__5720__auto___33434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33363_33435__$1)){
var c__4550__auto___33436 = cljs.core.chunk_first.call(null,seq__33363_33435__$1);
var G__33437 = cljs.core.chunk_rest.call(null,seq__33363_33435__$1);
var G__33438 = c__4550__auto___33436;
var G__33439 = cljs.core.count.call(null,c__4550__auto___33436);
var G__33440 = (0);
seq__33363_33399 = G__33437;
chunk__33364_33400 = G__33438;
count__33365_33401 = G__33439;
i__33366_33402 = G__33440;
continue;
} else {
var map__33391_33441 = cljs.core.first.call(null,seq__33363_33435__$1);
var map__33391_33442__$1 = (((((!((map__33391_33441 == null))))?(((((map__33391_33441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33391_33441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33391_33441):map__33391_33441);
var ts_33443 = cljs.core.get.call(null,map__33391_33442__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33392_33444 = cljs.core.get.call(null,map__33391_33442__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33392_33445__$1 = (((((!((map__33392_33444 == null))))?(((((map__33392_33444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33392_33444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33392_33444):map__33392_33444);
var then_33446 = cljs.core.get.call(null,map__33392_33445__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33395_33447 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_33443));
var chunk__33396_33448 = null;
var count__33397_33449 = (0);
var i__33398_33450 = (0);
while(true){
if((i__33398_33450 < count__33397_33449)){
var test_33451 = cljs.core._nth.call(null,chunk__33396_33448,i__33398_33450);
cljs.compiler.emitln.call(null,"case ",test_33451,":");


var G__33452 = seq__33395_33447;
var G__33453 = chunk__33396_33448;
var G__33454 = count__33397_33449;
var G__33455 = (i__33398_33450 + (1));
seq__33395_33447 = G__33452;
chunk__33396_33448 = G__33453;
count__33397_33449 = G__33454;
i__33398_33450 = G__33455;
continue;
} else {
var temp__5720__auto___33456__$1 = cljs.core.seq.call(null,seq__33395_33447);
if(temp__5720__auto___33456__$1){
var seq__33395_33457__$1 = temp__5720__auto___33456__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33395_33457__$1)){
var c__4550__auto___33458 = cljs.core.chunk_first.call(null,seq__33395_33457__$1);
var G__33459 = cljs.core.chunk_rest.call(null,seq__33395_33457__$1);
var G__33460 = c__4550__auto___33458;
var G__33461 = cljs.core.count.call(null,c__4550__auto___33458);
var G__33462 = (0);
seq__33395_33447 = G__33459;
chunk__33396_33448 = G__33460;
count__33397_33449 = G__33461;
i__33398_33450 = G__33462;
continue;
} else {
var test_33463 = cljs.core.first.call(null,seq__33395_33457__$1);
cljs.compiler.emitln.call(null,"case ",test_33463,":");


var G__33464 = cljs.core.next.call(null,seq__33395_33457__$1);
var G__33465 = null;
var G__33466 = (0);
var G__33467 = (0);
seq__33395_33447 = G__33464;
chunk__33396_33448 = G__33465;
count__33397_33449 = G__33466;
i__33398_33450 = G__33467;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33446);
} else {
cljs.compiler.emitln.call(null,then_33446);
}

cljs.compiler.emitln.call(null,"break;");


var G__33468 = cljs.core.next.call(null,seq__33363_33435__$1);
var G__33469 = null;
var G__33470 = (0);
var G__33471 = (0);
seq__33363_33399 = G__33468;
chunk__33364_33400 = G__33469;
count__33365_33401 = G__33470;
i__33366_33402 = G__33471;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33472){
var map__33473 = p__33472;
var map__33473__$1 = (((((!((map__33473 == null))))?(((((map__33473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33473):map__33473);
var throw$ = cljs.core.get.call(null,map__33473__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__33473__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__33476 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__33476,(0),null);
var rstr = cljs.core.nth.call(null,vec__33476,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__33476,fstr,rstr,ret_t,axstr){
return (function (p1__33475_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33475_SHARP_);
});})(idx,vec__33476,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__33479 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__33479,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33479;
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
return (function (p1__33480_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33480_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__33481 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33482 = cljs.core.seq.call(null,vec__33481);
var first__33483 = cljs.core.first.call(null,seq__33482);
var seq__33482__$1 = cljs.core.next.call(null,seq__33482);
var p = first__33483;
var first__33483__$1 = cljs.core.first.call(null,seq__33482__$1);
var seq__33482__$2 = cljs.core.next.call(null,seq__33482__$1);
var ts = first__33483__$1;
var first__33483__$2 = cljs.core.first.call(null,seq__33482__$2);
var seq__33482__$3 = cljs.core.next.call(null,seq__33482__$2);
var n = first__33483__$2;
var xs = seq__33482__$3;
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
var vec__33484 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33485 = cljs.core.seq.call(null,vec__33484);
var first__33486 = cljs.core.first.call(null,seq__33485);
var seq__33485__$1 = cljs.core.next.call(null,seq__33485);
var p = first__33486;
var first__33486__$1 = cljs.core.first.call(null,seq__33485__$1);
var seq__33485__$2 = cljs.core.next.call(null,seq__33485__$1);
var ts = first__33486__$1;
var xs = seq__33485__$2;
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
var G__33489 = arguments.length;
switch (G__33489) {
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
var vec__33497 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__33487_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__33487_SHARP_);
} else {
return p1__33487_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__33498 = cljs.core.seq.call(null,vec__33497);
var first__33499 = cljs.core.first.call(null,seq__33498);
var seq__33498__$1 = cljs.core.next.call(null,seq__33498);
var x = first__33499;
var ys = seq__33498__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__33500 = cljs.core.seq.call(null,ys);
var chunk__33501 = null;
var count__33502 = (0);
var i__33503 = (0);
while(true){
if((i__33503 < count__33502)){
var next_line = cljs.core._nth.call(null,chunk__33501,i__33503);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__33509 = seq__33500;
var G__33510 = chunk__33501;
var G__33511 = count__33502;
var G__33512 = (i__33503 + (1));
seq__33500 = G__33509;
chunk__33501 = G__33510;
count__33502 = G__33511;
i__33503 = G__33512;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33500);
if(temp__5720__auto__){
var seq__33500__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33500__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33500__$1);
var G__33513 = cljs.core.chunk_rest.call(null,seq__33500__$1);
var G__33514 = c__4550__auto__;
var G__33515 = cljs.core.count.call(null,c__4550__auto__);
var G__33516 = (0);
seq__33500 = G__33513;
chunk__33501 = G__33514;
count__33502 = G__33515;
i__33503 = G__33516;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__33500__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__33517 = cljs.core.next.call(null,seq__33500__$1);
var G__33518 = null;
var G__33519 = (0);
var G__33520 = (0);
seq__33500 = G__33517;
chunk__33501 = G__33518;
count__33502 = G__33519;
i__33503 = G__33520;
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

var seq__33504_33521 = cljs.core.seq.call(null,docs__$2);
var chunk__33505_33522 = null;
var count__33506_33523 = (0);
var i__33507_33524 = (0);
while(true){
if((i__33507_33524 < count__33506_33523)){
var e_33525 = cljs.core._nth.call(null,chunk__33505_33522,i__33507_33524);
if(cljs.core.truth_(e_33525)){
print_comment_lines.call(null,e_33525);
} else {
}


var G__33526 = seq__33504_33521;
var G__33527 = chunk__33505_33522;
var G__33528 = count__33506_33523;
var G__33529 = (i__33507_33524 + (1));
seq__33504_33521 = G__33526;
chunk__33505_33522 = G__33527;
count__33506_33523 = G__33528;
i__33507_33524 = G__33529;
continue;
} else {
var temp__5720__auto___33530 = cljs.core.seq.call(null,seq__33504_33521);
if(temp__5720__auto___33530){
var seq__33504_33531__$1 = temp__5720__auto___33530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33504_33531__$1)){
var c__4550__auto___33532 = cljs.core.chunk_first.call(null,seq__33504_33531__$1);
var G__33533 = cljs.core.chunk_rest.call(null,seq__33504_33531__$1);
var G__33534 = c__4550__auto___33532;
var G__33535 = cljs.core.count.call(null,c__4550__auto___33532);
var G__33536 = (0);
seq__33504_33521 = G__33533;
chunk__33505_33522 = G__33534;
count__33506_33523 = G__33535;
i__33507_33524 = G__33536;
continue;
} else {
var e_33537 = cljs.core.first.call(null,seq__33504_33531__$1);
if(cljs.core.truth_(e_33537)){
print_comment_lines.call(null,e_33537);
} else {
}


var G__33538 = cljs.core.next.call(null,seq__33504_33531__$1);
var G__33539 = null;
var G__33540 = (0);
var G__33541 = (0);
seq__33504_33521 = G__33538;
chunk__33505_33522 = G__33539;
count__33506_33523 = G__33540;
i__33507_33524 = G__33541;
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
return (function (p1__33543_SHARP_){
return goog.string.startsWith(p1__33543_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33544){
var map__33545 = p__33544;
var map__33545__$1 = (((((!((map__33545 == null))))?(((((map__33545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33545):map__33545);
var doc = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33547){
var map__33548 = p__33547;
var map__33548__$1 = (((((!((map__33548 == null))))?(((((map__33548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33548):map__33548);
var name = cljs.core.get.call(null,map__33548__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33548__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33548__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__33550_33574 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__33551_33575 = null;
var count__33552_33576 = (0);
var i__33553_33577 = (0);
while(true){
if((i__33553_33577 < count__33552_33576)){
var vec__33560_33578 = cljs.core._nth.call(null,chunk__33551_33575,i__33553_33577);
var i_33579 = cljs.core.nth.call(null,vec__33560_33578,(0),null);
var param_33580 = cljs.core.nth.call(null,vec__33560_33578,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33580);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__33581 = seq__33550_33574;
var G__33582 = chunk__33551_33575;
var G__33583 = count__33552_33576;
var G__33584 = (i__33553_33577 + (1));
seq__33550_33574 = G__33581;
chunk__33551_33575 = G__33582;
count__33552_33576 = G__33583;
i__33553_33577 = G__33584;
continue;
} else {
var temp__5720__auto___33585 = cljs.core.seq.call(null,seq__33550_33574);
if(temp__5720__auto___33585){
var seq__33550_33586__$1 = temp__5720__auto___33585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33550_33586__$1)){
var c__4550__auto___33587 = cljs.core.chunk_first.call(null,seq__33550_33586__$1);
var G__33588 = cljs.core.chunk_rest.call(null,seq__33550_33586__$1);
var G__33589 = c__4550__auto___33587;
var G__33590 = cljs.core.count.call(null,c__4550__auto___33587);
var G__33591 = (0);
seq__33550_33574 = G__33588;
chunk__33551_33575 = G__33589;
count__33552_33576 = G__33590;
i__33553_33577 = G__33591;
continue;
} else {
var vec__33563_33592 = cljs.core.first.call(null,seq__33550_33586__$1);
var i_33593 = cljs.core.nth.call(null,vec__33563_33592,(0),null);
var param_33594 = cljs.core.nth.call(null,vec__33563_33592,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33594);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__33595 = cljs.core.next.call(null,seq__33550_33586__$1);
var G__33596 = null;
var G__33597 = (0);
var G__33598 = (0);
seq__33550_33574 = G__33595;
chunk__33551_33575 = G__33596;
count__33552_33576 = G__33597;
i__33553_33577 = G__33598;
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

var seq__33566_33599 = cljs.core.seq.call(null,params);
var chunk__33567_33600 = null;
var count__33568_33601 = (0);
var i__33569_33602 = (0);
while(true){
if((i__33569_33602 < count__33568_33601)){
var param_33603 = cljs.core._nth.call(null,chunk__33567_33600,i__33569_33602);
cljs.compiler.emit.call(null,param_33603);

if(cljs.core._EQ_.call(null,param_33603,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33604 = seq__33566_33599;
var G__33605 = chunk__33567_33600;
var G__33606 = count__33568_33601;
var G__33607 = (i__33569_33602 + (1));
seq__33566_33599 = G__33604;
chunk__33567_33600 = G__33605;
count__33568_33601 = G__33606;
i__33569_33602 = G__33607;
continue;
} else {
var temp__5720__auto___33608 = cljs.core.seq.call(null,seq__33566_33599);
if(temp__5720__auto___33608){
var seq__33566_33609__$1 = temp__5720__auto___33608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33566_33609__$1)){
var c__4550__auto___33610 = cljs.core.chunk_first.call(null,seq__33566_33609__$1);
var G__33611 = cljs.core.chunk_rest.call(null,seq__33566_33609__$1);
var G__33612 = c__4550__auto___33610;
var G__33613 = cljs.core.count.call(null,c__4550__auto___33610);
var G__33614 = (0);
seq__33566_33599 = G__33611;
chunk__33567_33600 = G__33612;
count__33568_33601 = G__33613;
i__33569_33602 = G__33614;
continue;
} else {
var param_33615 = cljs.core.first.call(null,seq__33566_33609__$1);
cljs.compiler.emit.call(null,param_33615);

if(cljs.core._EQ_.call(null,param_33615,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33616 = cljs.core.next.call(null,seq__33566_33609__$1);
var G__33617 = null;
var G__33618 = (0);
var G__33619 = (0);
seq__33566_33599 = G__33616;
chunk__33567_33600 = G__33617;
count__33568_33601 = G__33618;
i__33569_33602 = G__33619;
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

var seq__33570_33620 = cljs.core.seq.call(null,params);
var chunk__33571_33621 = null;
var count__33572_33622 = (0);
var i__33573_33623 = (0);
while(true){
if((i__33573_33623 < count__33572_33622)){
var param_33624 = cljs.core._nth.call(null,chunk__33571_33621,i__33573_33623);
cljs.compiler.emit.call(null,param_33624);

if(cljs.core._EQ_.call(null,param_33624,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33625 = seq__33570_33620;
var G__33626 = chunk__33571_33621;
var G__33627 = count__33572_33622;
var G__33628 = (i__33573_33623 + (1));
seq__33570_33620 = G__33625;
chunk__33571_33621 = G__33626;
count__33572_33622 = G__33627;
i__33573_33623 = G__33628;
continue;
} else {
var temp__5720__auto___33629 = cljs.core.seq.call(null,seq__33570_33620);
if(temp__5720__auto___33629){
var seq__33570_33630__$1 = temp__5720__auto___33629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33570_33630__$1)){
var c__4550__auto___33631 = cljs.core.chunk_first.call(null,seq__33570_33630__$1);
var G__33632 = cljs.core.chunk_rest.call(null,seq__33570_33630__$1);
var G__33633 = c__4550__auto___33631;
var G__33634 = cljs.core.count.call(null,c__4550__auto___33631);
var G__33635 = (0);
seq__33570_33620 = G__33632;
chunk__33571_33621 = G__33633;
count__33572_33622 = G__33634;
i__33573_33623 = G__33635;
continue;
} else {
var param_33636 = cljs.core.first.call(null,seq__33570_33630__$1);
cljs.compiler.emit.call(null,param_33636);

if(cljs.core._EQ_.call(null,param_33636,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33637 = cljs.core.next.call(null,seq__33570_33630__$1);
var G__33638 = null;
var G__33639 = (0);
var G__33640 = (0);
seq__33570_33620 = G__33637;
chunk__33571_33621 = G__33638;
count__33572_33622 = G__33639;
i__33573_33623 = G__33640;
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
var seq__33641 = cljs.core.seq.call(null,params);
var chunk__33642 = null;
var count__33643 = (0);
var i__33644 = (0);
while(true){
if((i__33644 < count__33643)){
var param = cljs.core._nth.call(null,chunk__33642,i__33644);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33645 = seq__33641;
var G__33646 = chunk__33642;
var G__33647 = count__33643;
var G__33648 = (i__33644 + (1));
seq__33641 = G__33645;
chunk__33642 = G__33646;
count__33643 = G__33647;
i__33644 = G__33648;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33641);
if(temp__5720__auto__){
var seq__33641__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33641__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33641__$1);
var G__33649 = cljs.core.chunk_rest.call(null,seq__33641__$1);
var G__33650 = c__4550__auto__;
var G__33651 = cljs.core.count.call(null,c__4550__auto__);
var G__33652 = (0);
seq__33641 = G__33649;
chunk__33642 = G__33650;
count__33643 = G__33651;
i__33644 = G__33652;
continue;
} else {
var param = cljs.core.first.call(null,seq__33641__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33653 = cljs.core.next.call(null,seq__33641__$1);
var G__33654 = null;
var G__33655 = (0);
var G__33656 = (0);
seq__33641 = G__33653;
chunk__33642 = G__33654;
count__33643 = G__33655;
i__33644 = G__33656;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33657){
var map__33658 = p__33657;
var map__33658__$1 = (((((!((map__33658 == null))))?(((((map__33658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33658):map__33658);
var expr = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33660){
var map__33661 = p__33660;
var map__33661__$1 = (((((!((map__33661 == null))))?(((((map__33661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33661):map__33661);
var f = map__33661__$1;
var expr = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_33671__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33672 = cljs.compiler.munge.call(null,name_33671__$1);
var delegate_name_33673 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33672),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_33673," = function (");

var seq__33663_33674 = cljs.core.seq.call(null,params);
var chunk__33664_33675 = null;
var count__33665_33676 = (0);
var i__33666_33677 = (0);
while(true){
if((i__33666_33677 < count__33665_33676)){
var param_33678 = cljs.core._nth.call(null,chunk__33664_33675,i__33666_33677);
cljs.compiler.emit.call(null,param_33678);

if(cljs.core._EQ_.call(null,param_33678,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33679 = seq__33663_33674;
var G__33680 = chunk__33664_33675;
var G__33681 = count__33665_33676;
var G__33682 = (i__33666_33677 + (1));
seq__33663_33674 = G__33679;
chunk__33664_33675 = G__33680;
count__33665_33676 = G__33681;
i__33666_33677 = G__33682;
continue;
} else {
var temp__5720__auto___33683 = cljs.core.seq.call(null,seq__33663_33674);
if(temp__5720__auto___33683){
var seq__33663_33684__$1 = temp__5720__auto___33683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33663_33684__$1)){
var c__4550__auto___33685 = cljs.core.chunk_first.call(null,seq__33663_33684__$1);
var G__33686 = cljs.core.chunk_rest.call(null,seq__33663_33684__$1);
var G__33687 = c__4550__auto___33685;
var G__33688 = cljs.core.count.call(null,c__4550__auto___33685);
var G__33689 = (0);
seq__33663_33674 = G__33686;
chunk__33664_33675 = G__33687;
count__33665_33676 = G__33688;
i__33666_33677 = G__33689;
continue;
} else {
var param_33690 = cljs.core.first.call(null,seq__33663_33684__$1);
cljs.compiler.emit.call(null,param_33690);

if(cljs.core._EQ_.call(null,param_33690,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33691 = cljs.core.next.call(null,seq__33663_33684__$1);
var G__33692 = null;
var G__33693 = (0);
var G__33694 = (0);
seq__33663_33674 = G__33691;
chunk__33664_33675 = G__33692;
count__33665_33676 = G__33693;
i__33666_33677 = G__33694;
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

cljs.compiler.emitln.call(null,"var ",mname_33672," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_33695 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_33695,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_33673,".call(this,");

var seq__33667_33696 = cljs.core.seq.call(null,params);
var chunk__33668_33697 = null;
var count__33669_33698 = (0);
var i__33670_33699 = (0);
while(true){
if((i__33670_33699 < count__33669_33698)){
var param_33700 = cljs.core._nth.call(null,chunk__33668_33697,i__33670_33699);
cljs.compiler.emit.call(null,param_33700);

if(cljs.core._EQ_.call(null,param_33700,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33701 = seq__33667_33696;
var G__33702 = chunk__33668_33697;
var G__33703 = count__33669_33698;
var G__33704 = (i__33670_33699 + (1));
seq__33667_33696 = G__33701;
chunk__33668_33697 = G__33702;
count__33669_33698 = G__33703;
i__33670_33699 = G__33704;
continue;
} else {
var temp__5720__auto___33705 = cljs.core.seq.call(null,seq__33667_33696);
if(temp__5720__auto___33705){
var seq__33667_33706__$1 = temp__5720__auto___33705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33667_33706__$1)){
var c__4550__auto___33707 = cljs.core.chunk_first.call(null,seq__33667_33706__$1);
var G__33708 = cljs.core.chunk_rest.call(null,seq__33667_33706__$1);
var G__33709 = c__4550__auto___33707;
var G__33710 = cljs.core.count.call(null,c__4550__auto___33707);
var G__33711 = (0);
seq__33667_33696 = G__33708;
chunk__33668_33697 = G__33709;
count__33669_33698 = G__33710;
i__33670_33699 = G__33711;
continue;
} else {
var param_33712 = cljs.core.first.call(null,seq__33667_33706__$1);
cljs.compiler.emit.call(null,param_33712);

if(cljs.core._EQ_.call(null,param_33712,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33713 = cljs.core.next.call(null,seq__33667_33706__$1);
var G__33714 = null;
var G__33715 = (0);
var G__33716 = (0);
seq__33667_33696 = G__33713;
chunk__33668_33697 = G__33714;
count__33669_33698 = G__33715;
i__33670_33699 = G__33716;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_33672,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_33672,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_33671__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_33672,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_33673,";");

cljs.compiler.emitln.call(null,"return ",mname_33672,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33720){
var map__33721 = p__33720;
var map__33721__$1 = (((((!((map__33721 == null))))?(((((map__33721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721):map__33721);
var variadic = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__33717_SHARP_){
var and__4120__auto__ = p1__33717_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33717_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_33774__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33775 = cljs.compiler.munge.call(null,name_33774__$1);
var maxparams_33776 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_33777 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_33774__$1,mname_33775,maxparams_33776,loop_locals,map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33775),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_33774__$1,mname_33775,maxparams_33776,loop_locals,map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_33778 = cljs.core.sort_by.call(null,((function (name_33774__$1,mname_33775,maxparams_33776,mmap_33777,loop_locals,map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__33718_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33718_SHARP_)));
});})(name_33774__$1,mname_33775,maxparams_33776,mmap_33777,loop_locals,map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_33777));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_33775," = null;");

var seq__33723_33779 = cljs.core.seq.call(null,ms_33778);
var chunk__33724_33780 = null;
var count__33725_33781 = (0);
var i__33726_33782 = (0);
while(true){
if((i__33726_33782 < count__33725_33781)){
var vec__33733_33783 = cljs.core._nth.call(null,chunk__33724_33780,i__33726_33782);
var n_33784 = cljs.core.nth.call(null,vec__33733_33783,(0),null);
var meth_33785 = cljs.core.nth.call(null,vec__33733_33783,(1),null);
cljs.compiler.emits.call(null,"var ",n_33784," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33785))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33785);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33785);
}

cljs.compiler.emitln.call(null,";");


var G__33786 = seq__33723_33779;
var G__33787 = chunk__33724_33780;
var G__33788 = count__33725_33781;
var G__33789 = (i__33726_33782 + (1));
seq__33723_33779 = G__33786;
chunk__33724_33780 = G__33787;
count__33725_33781 = G__33788;
i__33726_33782 = G__33789;
continue;
} else {
var temp__5720__auto___33790 = cljs.core.seq.call(null,seq__33723_33779);
if(temp__5720__auto___33790){
var seq__33723_33791__$1 = temp__5720__auto___33790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33723_33791__$1)){
var c__4550__auto___33792 = cljs.core.chunk_first.call(null,seq__33723_33791__$1);
var G__33793 = cljs.core.chunk_rest.call(null,seq__33723_33791__$1);
var G__33794 = c__4550__auto___33792;
var G__33795 = cljs.core.count.call(null,c__4550__auto___33792);
var G__33796 = (0);
seq__33723_33779 = G__33793;
chunk__33724_33780 = G__33794;
count__33725_33781 = G__33795;
i__33726_33782 = G__33796;
continue;
} else {
var vec__33736_33797 = cljs.core.first.call(null,seq__33723_33791__$1);
var n_33798 = cljs.core.nth.call(null,vec__33736_33797,(0),null);
var meth_33799 = cljs.core.nth.call(null,vec__33736_33797,(1),null);
cljs.compiler.emits.call(null,"var ",n_33798," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33799))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33799);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33799);
}

cljs.compiler.emitln.call(null,";");


var G__33800 = cljs.core.next.call(null,seq__33723_33791__$1);
var G__33801 = null;
var G__33802 = (0);
var G__33803 = (0);
seq__33723_33779 = G__33800;
chunk__33724_33780 = G__33801;
count__33725_33781 = G__33802;
i__33726_33782 = G__33803;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_33775," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_33776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_33776)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_33776));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__33739_33804 = cljs.core.seq.call(null,ms_33778);
var chunk__33740_33805 = null;
var count__33741_33806 = (0);
var i__33742_33807 = (0);
while(true){
if((i__33742_33807 < count__33741_33806)){
var vec__33749_33808 = cljs.core._nth.call(null,chunk__33740_33805,i__33742_33807);
var n_33809 = cljs.core.nth.call(null,vec__33749_33808,(0),null);
var meth_33810 = cljs.core.nth.call(null,vec__33749_33808,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33810))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33811 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33811," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33812 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33811," = new cljs.core.IndexedSeq(",a_33812,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33809,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33776)),(((cljs.core.count.call(null,maxparams_33776) > (1)))?", ":null),restarg_33811,");");
} else {
var pcnt_33813 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33810));
cljs.compiler.emitln.call(null,"case ",pcnt_33813,":");

cljs.compiler.emitln.call(null,"return ",n_33809,".call(this",(((pcnt_33813 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33813,maxparams_33776)),null,(1),null)),(2),null))),");");
}


var G__33814 = seq__33739_33804;
var G__33815 = chunk__33740_33805;
var G__33816 = count__33741_33806;
var G__33817 = (i__33742_33807 + (1));
seq__33739_33804 = G__33814;
chunk__33740_33805 = G__33815;
count__33741_33806 = G__33816;
i__33742_33807 = G__33817;
continue;
} else {
var temp__5720__auto___33818 = cljs.core.seq.call(null,seq__33739_33804);
if(temp__5720__auto___33818){
var seq__33739_33819__$1 = temp__5720__auto___33818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33739_33819__$1)){
var c__4550__auto___33820 = cljs.core.chunk_first.call(null,seq__33739_33819__$1);
var G__33821 = cljs.core.chunk_rest.call(null,seq__33739_33819__$1);
var G__33822 = c__4550__auto___33820;
var G__33823 = cljs.core.count.call(null,c__4550__auto___33820);
var G__33824 = (0);
seq__33739_33804 = G__33821;
chunk__33740_33805 = G__33822;
count__33741_33806 = G__33823;
i__33742_33807 = G__33824;
continue;
} else {
var vec__33752_33825 = cljs.core.first.call(null,seq__33739_33819__$1);
var n_33826 = cljs.core.nth.call(null,vec__33752_33825,(0),null);
var meth_33827 = cljs.core.nth.call(null,vec__33752_33825,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33827))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33828 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33828," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33829 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33828," = new cljs.core.IndexedSeq(",a_33829,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33826,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33776)),(((cljs.core.count.call(null,maxparams_33776) > (1)))?", ":null),restarg_33828,");");
} else {
var pcnt_33830 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33827));
cljs.compiler.emitln.call(null,"case ",pcnt_33830,":");

cljs.compiler.emitln.call(null,"return ",n_33826,".call(this",(((pcnt_33830 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33830,maxparams_33776)),null,(1),null)),(2),null))),");");
}


var G__33831 = cljs.core.next.call(null,seq__33739_33819__$1);
var G__33832 = null;
var G__33833 = (0);
var G__33834 = (0);
seq__33739_33804 = G__33831;
chunk__33740_33805 = G__33832;
count__33741_33806 = G__33833;
i__33742_33807 = G__33834;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_33835 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_33778)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_33835,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_33775,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_33775,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_33774__$1,mname_33775,maxparams_33776,mmap_33777,ms_33778,loop_locals,map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__33719_SHARP_){
var vec__33755 = p1__33719_SHARP_;
var n = cljs.core.nth.call(null,vec__33755,(0),null);
var m = cljs.core.nth.call(null,vec__33755,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_33774__$1,mname_33775,maxparams_33776,mmap_33777,ms_33778,loop_locals,map__33721,map__33721__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_33778),".cljs$lang$applyTo;");
} else {
}

var seq__33758_33836 = cljs.core.seq.call(null,ms_33778);
var chunk__33759_33837 = null;
var count__33760_33838 = (0);
var i__33761_33839 = (0);
while(true){
if((i__33761_33839 < count__33760_33838)){
var vec__33768_33840 = cljs.core._nth.call(null,chunk__33759_33837,i__33761_33839);
var n_33841 = cljs.core.nth.call(null,vec__33768_33840,(0),null);
var meth_33842 = cljs.core.nth.call(null,vec__33768_33840,(1),null);
var c_33843 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33842));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33842))){
cljs.compiler.emitln.call(null,mname_33775,".cljs$core$IFn$_invoke$arity$variadic = ",n_33841,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33775,".cljs$core$IFn$_invoke$arity$",c_33843," = ",n_33841,";");
}


var G__33844 = seq__33758_33836;
var G__33845 = chunk__33759_33837;
var G__33846 = count__33760_33838;
var G__33847 = (i__33761_33839 + (1));
seq__33758_33836 = G__33844;
chunk__33759_33837 = G__33845;
count__33760_33838 = G__33846;
i__33761_33839 = G__33847;
continue;
} else {
var temp__5720__auto___33848 = cljs.core.seq.call(null,seq__33758_33836);
if(temp__5720__auto___33848){
var seq__33758_33849__$1 = temp__5720__auto___33848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33758_33849__$1)){
var c__4550__auto___33850 = cljs.core.chunk_first.call(null,seq__33758_33849__$1);
var G__33851 = cljs.core.chunk_rest.call(null,seq__33758_33849__$1);
var G__33852 = c__4550__auto___33850;
var G__33853 = cljs.core.count.call(null,c__4550__auto___33850);
var G__33854 = (0);
seq__33758_33836 = G__33851;
chunk__33759_33837 = G__33852;
count__33760_33838 = G__33853;
i__33761_33839 = G__33854;
continue;
} else {
var vec__33771_33855 = cljs.core.first.call(null,seq__33758_33849__$1);
var n_33856 = cljs.core.nth.call(null,vec__33771_33855,(0),null);
var meth_33857 = cljs.core.nth.call(null,vec__33771_33855,(1),null);
var c_33858 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33857));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33857))){
cljs.compiler.emitln.call(null,mname_33775,".cljs$core$IFn$_invoke$arity$variadic = ",n_33856,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33775,".cljs$core$IFn$_invoke$arity$",c_33858," = ",n_33856,";");
}


var G__33859 = cljs.core.next.call(null,seq__33758_33849__$1);
var G__33860 = null;
var G__33861 = (0);
var G__33862 = (0);
seq__33758_33836 = G__33859;
chunk__33759_33837 = G__33860;
count__33760_33838 = G__33861;
i__33761_33839 = G__33862;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_33775,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33863){
var map__33864 = p__33863;
var map__33864__$1 = (((((!((map__33864 == null))))?(((((map__33864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33864):map__33864);
var statements = cljs.core.get.call(null,map__33864__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__33864__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__33864__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__33866_33870 = cljs.core.seq.call(null,statements);
var chunk__33867_33871 = null;
var count__33868_33872 = (0);
var i__33869_33873 = (0);
while(true){
if((i__33869_33873 < count__33868_33872)){
var s_33874 = cljs.core._nth.call(null,chunk__33867_33871,i__33869_33873);
cljs.compiler.emitln.call(null,s_33874);


var G__33875 = seq__33866_33870;
var G__33876 = chunk__33867_33871;
var G__33877 = count__33868_33872;
var G__33878 = (i__33869_33873 + (1));
seq__33866_33870 = G__33875;
chunk__33867_33871 = G__33876;
count__33868_33872 = G__33877;
i__33869_33873 = G__33878;
continue;
} else {
var temp__5720__auto___33879 = cljs.core.seq.call(null,seq__33866_33870);
if(temp__5720__auto___33879){
var seq__33866_33880__$1 = temp__5720__auto___33879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33866_33880__$1)){
var c__4550__auto___33881 = cljs.core.chunk_first.call(null,seq__33866_33880__$1);
var G__33882 = cljs.core.chunk_rest.call(null,seq__33866_33880__$1);
var G__33883 = c__4550__auto___33881;
var G__33884 = cljs.core.count.call(null,c__4550__auto___33881);
var G__33885 = (0);
seq__33866_33870 = G__33882;
chunk__33867_33871 = G__33883;
count__33868_33872 = G__33884;
i__33869_33873 = G__33885;
continue;
} else {
var s_33886 = cljs.core.first.call(null,seq__33866_33880__$1);
cljs.compiler.emitln.call(null,s_33886);


var G__33887 = cljs.core.next.call(null,seq__33866_33880__$1);
var G__33888 = null;
var G__33889 = (0);
var G__33890 = (0);
seq__33866_33870 = G__33887;
chunk__33867_33871 = G__33888;
count__33868_33872 = G__33889;
i__33869_33873 = G__33890;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33891){
var map__33892 = p__33891;
var map__33892__$1 = (((((!((map__33892 == null))))?(((((map__33892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33892):map__33892);
var try$ = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33894,is_loop){
var map__33895 = p__33894;
var map__33895__$1 = (((((!((map__33895 == null))))?(((((map__33895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33895):map__33895);
var expr = cljs.core.get.call(null,map__33895__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__33895__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__33895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__33897_33911 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__33898_33912 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__33897_33911,context,map__33895,map__33895__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__33897_33911,context,map__33895,map__33895__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__33898_33912;

try{var seq__33899_33913 = cljs.core.seq.call(null,bindings);
var chunk__33900_33914 = null;
var count__33901_33915 = (0);
var i__33902_33916 = (0);
while(true){
if((i__33902_33916 < count__33901_33915)){
var map__33907_33917 = cljs.core._nth.call(null,chunk__33900_33914,i__33902_33916);
var map__33907_33918__$1 = (((((!((map__33907_33917 == null))))?(((((map__33907_33917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33907_33917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33907_33917):map__33907_33917);
var binding_33919 = map__33907_33918__$1;
var init_33920 = cljs.core.get.call(null,map__33907_33918__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33919);

cljs.compiler.emitln.call(null," = ",init_33920,";");


var G__33921 = seq__33899_33913;
var G__33922 = chunk__33900_33914;
var G__33923 = count__33901_33915;
var G__33924 = (i__33902_33916 + (1));
seq__33899_33913 = G__33921;
chunk__33900_33914 = G__33922;
count__33901_33915 = G__33923;
i__33902_33916 = G__33924;
continue;
} else {
var temp__5720__auto___33925 = cljs.core.seq.call(null,seq__33899_33913);
if(temp__5720__auto___33925){
var seq__33899_33926__$1 = temp__5720__auto___33925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33899_33926__$1)){
var c__4550__auto___33927 = cljs.core.chunk_first.call(null,seq__33899_33926__$1);
var G__33928 = cljs.core.chunk_rest.call(null,seq__33899_33926__$1);
var G__33929 = c__4550__auto___33927;
var G__33930 = cljs.core.count.call(null,c__4550__auto___33927);
var G__33931 = (0);
seq__33899_33913 = G__33928;
chunk__33900_33914 = G__33929;
count__33901_33915 = G__33930;
i__33902_33916 = G__33931;
continue;
} else {
var map__33909_33932 = cljs.core.first.call(null,seq__33899_33926__$1);
var map__33909_33933__$1 = (((((!((map__33909_33932 == null))))?(((((map__33909_33932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33909_33932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33909_33932):map__33909_33932);
var binding_33934 = map__33909_33933__$1;
var init_33935 = cljs.core.get.call(null,map__33909_33933__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33934);

cljs.compiler.emitln.call(null," = ",init_33935,";");


var G__33936 = cljs.core.next.call(null,seq__33899_33926__$1);
var G__33937 = null;
var G__33938 = (0);
var G__33939 = (0);
seq__33899_33913 = G__33936;
chunk__33900_33914 = G__33937;
count__33901_33915 = G__33938;
i__33902_33916 = G__33939;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__33897_33911;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33940){
var map__33941 = p__33940;
var map__33941__$1 = (((((!((map__33941 == null))))?(((((map__33941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33941):map__33941);
var frame = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___33943 = cljs.core.count.call(null,exprs);
var i_33944 = (0);
while(true){
if((i_33944 < n__4607__auto___33943)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_33944)," = ",exprs.call(null,i_33944),";");

var G__33945 = (i_33944 + (1));
i_33944 = G__33945;
continue;
} else {
}
break;
}

var n__4607__auto___33946 = cljs.core.count.call(null,exprs);
var i_33947 = (0);
while(true){
if((i_33947 < n__4607__auto___33946)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_33947))," = ",temps.call(null,i_33947),";");

var G__33948 = (i_33947 + (1));
i_33947 = G__33948;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33949){
var map__33950 = p__33949;
var map__33950__$1 = (((((!((map__33950 == null))))?(((((map__33950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33950):map__33950);
var expr = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__33952_33964 = cljs.core.seq.call(null,bindings);
var chunk__33953_33965 = null;
var count__33954_33966 = (0);
var i__33955_33967 = (0);
while(true){
if((i__33955_33967 < count__33954_33966)){
var map__33960_33968 = cljs.core._nth.call(null,chunk__33953_33965,i__33955_33967);
var map__33960_33969__$1 = (((((!((map__33960_33968 == null))))?(((((map__33960_33968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33960_33968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33960_33968):map__33960_33968);
var binding_33970 = map__33960_33969__$1;
var init_33971 = cljs.core.get.call(null,map__33960_33969__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33970)," = ",init_33971,";");


var G__33972 = seq__33952_33964;
var G__33973 = chunk__33953_33965;
var G__33974 = count__33954_33966;
var G__33975 = (i__33955_33967 + (1));
seq__33952_33964 = G__33972;
chunk__33953_33965 = G__33973;
count__33954_33966 = G__33974;
i__33955_33967 = G__33975;
continue;
} else {
var temp__5720__auto___33976 = cljs.core.seq.call(null,seq__33952_33964);
if(temp__5720__auto___33976){
var seq__33952_33977__$1 = temp__5720__auto___33976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33952_33977__$1)){
var c__4550__auto___33978 = cljs.core.chunk_first.call(null,seq__33952_33977__$1);
var G__33979 = cljs.core.chunk_rest.call(null,seq__33952_33977__$1);
var G__33980 = c__4550__auto___33978;
var G__33981 = cljs.core.count.call(null,c__4550__auto___33978);
var G__33982 = (0);
seq__33952_33964 = G__33979;
chunk__33953_33965 = G__33980;
count__33954_33966 = G__33981;
i__33955_33967 = G__33982;
continue;
} else {
var map__33962_33983 = cljs.core.first.call(null,seq__33952_33977__$1);
var map__33962_33984__$1 = (((((!((map__33962_33983 == null))))?(((((map__33962_33983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33962_33983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33962_33983):map__33962_33983);
var binding_33985 = map__33962_33984__$1;
var init_33986 = cljs.core.get.call(null,map__33962_33984__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33985)," = ",init_33986,";");


var G__33987 = cljs.core.next.call(null,seq__33952_33977__$1);
var G__33988 = null;
var G__33989 = (0);
var G__33990 = (0);
seq__33952_33964 = G__33987;
chunk__33953_33965 = G__33988;
count__33954_33966 = G__33989;
i__33955_33967 = G__33990;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__33993){
var map__33994 = p__33993;
var map__33994__$1 = (((((!((map__33994 == null))))?(((((map__33994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33994):map__33994);
var expr = map__33994__$1;
var f = cljs.core.get.call(null,map__33994__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__33994__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__33996 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env){
return (function (p1__33991_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33991_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env){
return (function (p1__33992_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33992_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33994,map__33994__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__33996,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__33996,(1),null);
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_33999 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_33999,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_34000 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_34000,args)),(((mfa_34000 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_34000,args)),"], 0))");
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
var fprop_34001 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_34001," ? ",f__$1,fprop_34001,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_34001," ? ",f__$1,fprop_34001,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__34002){
var map__34003 = p__34002;
var map__34003__$1 = (((((!((map__34003 == null))))?(((((map__34003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34003):map__34003);
var ctor = cljs.core.get.call(null,map__34003__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__34003__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__34005){
var map__34006 = p__34005;
var map__34006__$1 = (((((!((map__34006 == null))))?(((((map__34006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34006):map__34006);
var target = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
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
var map__34008 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__34008__$1 = (((((!((map__34008 == null))))?(((((map__34008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34008):map__34008);
var options = cljs.core.get.call(null,map__34008__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__34008__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__34009 = options;
var map__34009__$1 = (((((!((map__34009 == null))))?(((((map__34009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34009):map__34009);
var target = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__34010 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__34015 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__34015__$1 = (((((!((map__34015 == null))))?(((((map__34015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34015):map__34015);
var node_libs = cljs.core.get.call(null,map__34015__$1,true);
var libs_to_load = cljs.core.get.call(null,map__34015__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__34010,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__34010,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__34017_34037 = cljs.core.seq.call(null,libs_to_load);
var chunk__34018_34038 = null;
var count__34019_34039 = (0);
var i__34020_34040 = (0);
while(true){
if((i__34020_34040 < count__34019_34039)){
var lib_34041 = cljs.core._nth.call(null,chunk__34018_34038,i__34020_34040);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_34041)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34041),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34041),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34041),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34041),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_34041,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34041),"');");
}

}
}
}


var G__34042 = seq__34017_34037;
var G__34043 = chunk__34018_34038;
var G__34044 = count__34019_34039;
var G__34045 = (i__34020_34040 + (1));
seq__34017_34037 = G__34042;
chunk__34018_34038 = G__34043;
count__34019_34039 = G__34044;
i__34020_34040 = G__34045;
continue;
} else {
var temp__5720__auto___34046 = cljs.core.seq.call(null,seq__34017_34037);
if(temp__5720__auto___34046){
var seq__34017_34047__$1 = temp__5720__auto___34046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34017_34047__$1)){
var c__4550__auto___34048 = cljs.core.chunk_first.call(null,seq__34017_34047__$1);
var G__34049 = cljs.core.chunk_rest.call(null,seq__34017_34047__$1);
var G__34050 = c__4550__auto___34048;
var G__34051 = cljs.core.count.call(null,c__4550__auto___34048);
var G__34052 = (0);
seq__34017_34037 = G__34049;
chunk__34018_34038 = G__34050;
count__34019_34039 = G__34051;
i__34020_34040 = G__34052;
continue;
} else {
var lib_34053 = cljs.core.first.call(null,seq__34017_34047__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_34053)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34053),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34053),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34053),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34053),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_34053,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34053),"');");
}

}
}
}


var G__34054 = cljs.core.next.call(null,seq__34017_34047__$1);
var G__34055 = null;
var G__34056 = (0);
var G__34057 = (0);
seq__34017_34037 = G__34054;
chunk__34018_34038 = G__34055;
count__34019_34039 = G__34056;
i__34020_34040 = G__34057;
continue;
}
} else {
}
}
break;
}

var seq__34021_34058 = cljs.core.seq.call(null,node_libs);
var chunk__34022_34059 = null;
var count__34023_34060 = (0);
var i__34024_34061 = (0);
while(true){
if((i__34024_34061 < count__34023_34060)){
var lib_34062 = cljs.core._nth.call(null,chunk__34022_34059,i__34024_34061);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_34062)," = require('",lib_34062,"');");


var G__34063 = seq__34021_34058;
var G__34064 = chunk__34022_34059;
var G__34065 = count__34023_34060;
var G__34066 = (i__34024_34061 + (1));
seq__34021_34058 = G__34063;
chunk__34022_34059 = G__34064;
count__34023_34060 = G__34065;
i__34024_34061 = G__34066;
continue;
} else {
var temp__5720__auto___34067 = cljs.core.seq.call(null,seq__34021_34058);
if(temp__5720__auto___34067){
var seq__34021_34068__$1 = temp__5720__auto___34067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34021_34068__$1)){
var c__4550__auto___34069 = cljs.core.chunk_first.call(null,seq__34021_34068__$1);
var G__34070 = cljs.core.chunk_rest.call(null,seq__34021_34068__$1);
var G__34071 = c__4550__auto___34069;
var G__34072 = cljs.core.count.call(null,c__4550__auto___34069);
var G__34073 = (0);
seq__34021_34058 = G__34070;
chunk__34022_34059 = G__34071;
count__34023_34060 = G__34072;
i__34024_34061 = G__34073;
continue;
} else {
var lib_34074 = cljs.core.first.call(null,seq__34021_34068__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_34074)," = require('",lib_34074,"');");


var G__34075 = cljs.core.next.call(null,seq__34021_34068__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__34021_34058 = G__34075;
chunk__34022_34059 = G__34076;
count__34023_34060 = G__34077;
i__34024_34061 = G__34078;
continue;
}
} else {
}
}
break;
}

var seq__34025_34079 = cljs.core.seq.call(null,global_exports_libs);
var chunk__34026_34080 = null;
var count__34027_34081 = (0);
var i__34028_34082 = (0);
while(true){
if((i__34028_34082 < count__34027_34081)){
var lib_34083 = cljs.core._nth.call(null,chunk__34026_34080,i__34028_34082);
var map__34033_34084 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_34083));
var map__34033_34085__$1 = (((((!((map__34033_34084 == null))))?(((((map__34033_34084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34033_34084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34033_34084):map__34033_34084);
var global_exports_34086 = cljs.core.get.call(null,map__34033_34085__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_34086,lib_34083);


var G__34087 = seq__34025_34079;
var G__34088 = chunk__34026_34080;
var G__34089 = count__34027_34081;
var G__34090 = (i__34028_34082 + (1));
seq__34025_34079 = G__34087;
chunk__34026_34080 = G__34088;
count__34027_34081 = G__34089;
i__34028_34082 = G__34090;
continue;
} else {
var temp__5720__auto___34091 = cljs.core.seq.call(null,seq__34025_34079);
if(temp__5720__auto___34091){
var seq__34025_34092__$1 = temp__5720__auto___34091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34025_34092__$1)){
var c__4550__auto___34093 = cljs.core.chunk_first.call(null,seq__34025_34092__$1);
var G__34094 = cljs.core.chunk_rest.call(null,seq__34025_34092__$1);
var G__34095 = c__4550__auto___34093;
var G__34096 = cljs.core.count.call(null,c__4550__auto___34093);
var G__34097 = (0);
seq__34025_34079 = G__34094;
chunk__34026_34080 = G__34095;
count__34027_34081 = G__34096;
i__34028_34082 = G__34097;
continue;
} else {
var lib_34098 = cljs.core.first.call(null,seq__34025_34092__$1);
var map__34035_34099 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_34098));
var map__34035_34100__$1 = (((((!((map__34035_34099 == null))))?(((((map__34035_34099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34035_34099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34035_34099):map__34035_34099);
var global_exports_34101 = cljs.core.get.call(null,map__34035_34100__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_34101,lib_34098);


var G__34102 = cljs.core.next.call(null,seq__34025_34092__$1);
var G__34103 = null;
var G__34104 = (0);
var G__34105 = (0);
seq__34025_34079 = G__34102;
chunk__34026_34080 = G__34103;
count__34027_34081 = G__34104;
i__34028_34082 = G__34105;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__34106){
var map__34107 = p__34106;
var map__34107__$1 = (((((!((map__34107 == null))))?(((((map__34107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34107):map__34107);
var name = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__34109){
var map__34110 = p__34109;
var map__34110__$1 = (((((!((map__34110 == null))))?(((((map__34110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34110):map__34110);
var name = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__34110__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__34112){
var map__34113 = p__34112;
var map__34113__$1 = (((((!((map__34113 == null))))?(((((map__34113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34113):map__34113);
var t = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34115_34139 = cljs.core.seq.call(null,protocols);
var chunk__34116_34140 = null;
var count__34117_34141 = (0);
var i__34118_34142 = (0);
while(true){
if((i__34118_34142 < count__34117_34141)){
var protocol_34143 = cljs.core._nth.call(null,chunk__34116_34140,i__34118_34142);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34143)),"}");


var G__34144 = seq__34115_34139;
var G__34145 = chunk__34116_34140;
var G__34146 = count__34117_34141;
var G__34147 = (i__34118_34142 + (1));
seq__34115_34139 = G__34144;
chunk__34116_34140 = G__34145;
count__34117_34141 = G__34146;
i__34118_34142 = G__34147;
continue;
} else {
var temp__5720__auto___34148 = cljs.core.seq.call(null,seq__34115_34139);
if(temp__5720__auto___34148){
var seq__34115_34149__$1 = temp__5720__auto___34148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34115_34149__$1)){
var c__4550__auto___34150 = cljs.core.chunk_first.call(null,seq__34115_34149__$1);
var G__34151 = cljs.core.chunk_rest.call(null,seq__34115_34149__$1);
var G__34152 = c__4550__auto___34150;
var G__34153 = cljs.core.count.call(null,c__4550__auto___34150);
var G__34154 = (0);
seq__34115_34139 = G__34151;
chunk__34116_34140 = G__34152;
count__34117_34141 = G__34153;
i__34118_34142 = G__34154;
continue;
} else {
var protocol_34155 = cljs.core.first.call(null,seq__34115_34149__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34155)),"}");


var G__34156 = cljs.core.next.call(null,seq__34115_34149__$1);
var G__34157 = null;
var G__34158 = (0);
var G__34159 = (0);
seq__34115_34139 = G__34156;
chunk__34116_34140 = G__34157;
count__34117_34141 = G__34158;
i__34118_34142 = G__34159;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34119_34160 = cljs.core.seq.call(null,fields__$1);
var chunk__34120_34161 = null;
var count__34121_34162 = (0);
var i__34122_34163 = (0);
while(true){
if((i__34122_34163 < count__34121_34162)){
var fld_34164 = cljs.core._nth.call(null,chunk__34120_34161,i__34122_34163);
cljs.compiler.emitln.call(null,"this.",fld_34164," = ",fld_34164,";");


var G__34165 = seq__34119_34160;
var G__34166 = chunk__34120_34161;
var G__34167 = count__34121_34162;
var G__34168 = (i__34122_34163 + (1));
seq__34119_34160 = G__34165;
chunk__34120_34161 = G__34166;
count__34121_34162 = G__34167;
i__34122_34163 = G__34168;
continue;
} else {
var temp__5720__auto___34169 = cljs.core.seq.call(null,seq__34119_34160);
if(temp__5720__auto___34169){
var seq__34119_34170__$1 = temp__5720__auto___34169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34119_34170__$1)){
var c__4550__auto___34171 = cljs.core.chunk_first.call(null,seq__34119_34170__$1);
var G__34172 = cljs.core.chunk_rest.call(null,seq__34119_34170__$1);
var G__34173 = c__4550__auto___34171;
var G__34174 = cljs.core.count.call(null,c__4550__auto___34171);
var G__34175 = (0);
seq__34119_34160 = G__34172;
chunk__34120_34161 = G__34173;
count__34121_34162 = G__34174;
i__34122_34163 = G__34175;
continue;
} else {
var fld_34176 = cljs.core.first.call(null,seq__34119_34170__$1);
cljs.compiler.emitln.call(null,"this.",fld_34176," = ",fld_34176,";");


var G__34177 = cljs.core.next.call(null,seq__34119_34170__$1);
var G__34178 = null;
var G__34179 = (0);
var G__34180 = (0);
seq__34119_34160 = G__34177;
chunk__34120_34161 = G__34178;
count__34121_34162 = G__34179;
i__34122_34163 = G__34180;
continue;
}
} else {
}
}
break;
}

var seq__34123_34181 = cljs.core.seq.call(null,pmasks);
var chunk__34124_34182 = null;
var count__34125_34183 = (0);
var i__34126_34184 = (0);
while(true){
if((i__34126_34184 < count__34125_34183)){
var vec__34133_34185 = cljs.core._nth.call(null,chunk__34124_34182,i__34126_34184);
var pno_34186 = cljs.core.nth.call(null,vec__34133_34185,(0),null);
var pmask_34187 = cljs.core.nth.call(null,vec__34133_34185,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34186,"$ = ",pmask_34187,";");


var G__34188 = seq__34123_34181;
var G__34189 = chunk__34124_34182;
var G__34190 = count__34125_34183;
var G__34191 = (i__34126_34184 + (1));
seq__34123_34181 = G__34188;
chunk__34124_34182 = G__34189;
count__34125_34183 = G__34190;
i__34126_34184 = G__34191;
continue;
} else {
var temp__5720__auto___34192 = cljs.core.seq.call(null,seq__34123_34181);
if(temp__5720__auto___34192){
var seq__34123_34193__$1 = temp__5720__auto___34192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34123_34193__$1)){
var c__4550__auto___34194 = cljs.core.chunk_first.call(null,seq__34123_34193__$1);
var G__34195 = cljs.core.chunk_rest.call(null,seq__34123_34193__$1);
var G__34196 = c__4550__auto___34194;
var G__34197 = cljs.core.count.call(null,c__4550__auto___34194);
var G__34198 = (0);
seq__34123_34181 = G__34195;
chunk__34124_34182 = G__34196;
count__34125_34183 = G__34197;
i__34126_34184 = G__34198;
continue;
} else {
var vec__34136_34199 = cljs.core.first.call(null,seq__34123_34193__$1);
var pno_34200 = cljs.core.nth.call(null,vec__34136_34199,(0),null);
var pmask_34201 = cljs.core.nth.call(null,vec__34136_34199,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34200,"$ = ",pmask_34201,";");


var G__34202 = cljs.core.next.call(null,seq__34123_34193__$1);
var G__34203 = null;
var G__34204 = (0);
var G__34205 = (0);
seq__34123_34181 = G__34202;
chunk__34124_34182 = G__34203;
count__34125_34183 = G__34204;
i__34126_34184 = G__34205;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__34206){
var map__34207 = p__34206;
var map__34207__$1 = (((((!((map__34207 == null))))?(((((map__34207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34207):map__34207);
var t = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34209_34233 = cljs.core.seq.call(null,protocols);
var chunk__34210_34234 = null;
var count__34211_34235 = (0);
var i__34212_34236 = (0);
while(true){
if((i__34212_34236 < count__34211_34235)){
var protocol_34237 = cljs.core._nth.call(null,chunk__34210_34234,i__34212_34236);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34237)),"}");


var G__34238 = seq__34209_34233;
var G__34239 = chunk__34210_34234;
var G__34240 = count__34211_34235;
var G__34241 = (i__34212_34236 + (1));
seq__34209_34233 = G__34238;
chunk__34210_34234 = G__34239;
count__34211_34235 = G__34240;
i__34212_34236 = G__34241;
continue;
} else {
var temp__5720__auto___34242 = cljs.core.seq.call(null,seq__34209_34233);
if(temp__5720__auto___34242){
var seq__34209_34243__$1 = temp__5720__auto___34242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34209_34243__$1)){
var c__4550__auto___34244 = cljs.core.chunk_first.call(null,seq__34209_34243__$1);
var G__34245 = cljs.core.chunk_rest.call(null,seq__34209_34243__$1);
var G__34246 = c__4550__auto___34244;
var G__34247 = cljs.core.count.call(null,c__4550__auto___34244);
var G__34248 = (0);
seq__34209_34233 = G__34245;
chunk__34210_34234 = G__34246;
count__34211_34235 = G__34247;
i__34212_34236 = G__34248;
continue;
} else {
var protocol_34249 = cljs.core.first.call(null,seq__34209_34243__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34249)),"}");


var G__34250 = cljs.core.next.call(null,seq__34209_34243__$1);
var G__34251 = null;
var G__34252 = (0);
var G__34253 = (0);
seq__34209_34233 = G__34250;
chunk__34210_34234 = G__34251;
count__34211_34235 = G__34252;
i__34212_34236 = G__34253;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34213_34254 = cljs.core.seq.call(null,fields__$1);
var chunk__34214_34255 = null;
var count__34215_34256 = (0);
var i__34216_34257 = (0);
while(true){
if((i__34216_34257 < count__34215_34256)){
var fld_34258 = cljs.core._nth.call(null,chunk__34214_34255,i__34216_34257);
cljs.compiler.emitln.call(null,"this.",fld_34258," = ",fld_34258,";");


var G__34259 = seq__34213_34254;
var G__34260 = chunk__34214_34255;
var G__34261 = count__34215_34256;
var G__34262 = (i__34216_34257 + (1));
seq__34213_34254 = G__34259;
chunk__34214_34255 = G__34260;
count__34215_34256 = G__34261;
i__34216_34257 = G__34262;
continue;
} else {
var temp__5720__auto___34263 = cljs.core.seq.call(null,seq__34213_34254);
if(temp__5720__auto___34263){
var seq__34213_34264__$1 = temp__5720__auto___34263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34213_34264__$1)){
var c__4550__auto___34265 = cljs.core.chunk_first.call(null,seq__34213_34264__$1);
var G__34266 = cljs.core.chunk_rest.call(null,seq__34213_34264__$1);
var G__34267 = c__4550__auto___34265;
var G__34268 = cljs.core.count.call(null,c__4550__auto___34265);
var G__34269 = (0);
seq__34213_34254 = G__34266;
chunk__34214_34255 = G__34267;
count__34215_34256 = G__34268;
i__34216_34257 = G__34269;
continue;
} else {
var fld_34270 = cljs.core.first.call(null,seq__34213_34264__$1);
cljs.compiler.emitln.call(null,"this.",fld_34270," = ",fld_34270,";");


var G__34271 = cljs.core.next.call(null,seq__34213_34264__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__34213_34254 = G__34271;
chunk__34214_34255 = G__34272;
count__34215_34256 = G__34273;
i__34216_34257 = G__34274;
continue;
}
} else {
}
}
break;
}

var seq__34217_34275 = cljs.core.seq.call(null,pmasks);
var chunk__34218_34276 = null;
var count__34219_34277 = (0);
var i__34220_34278 = (0);
while(true){
if((i__34220_34278 < count__34219_34277)){
var vec__34227_34279 = cljs.core._nth.call(null,chunk__34218_34276,i__34220_34278);
var pno_34280 = cljs.core.nth.call(null,vec__34227_34279,(0),null);
var pmask_34281 = cljs.core.nth.call(null,vec__34227_34279,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34280,"$ = ",pmask_34281,";");


var G__34282 = seq__34217_34275;
var G__34283 = chunk__34218_34276;
var G__34284 = count__34219_34277;
var G__34285 = (i__34220_34278 + (1));
seq__34217_34275 = G__34282;
chunk__34218_34276 = G__34283;
count__34219_34277 = G__34284;
i__34220_34278 = G__34285;
continue;
} else {
var temp__5720__auto___34286 = cljs.core.seq.call(null,seq__34217_34275);
if(temp__5720__auto___34286){
var seq__34217_34287__$1 = temp__5720__auto___34286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34217_34287__$1)){
var c__4550__auto___34288 = cljs.core.chunk_first.call(null,seq__34217_34287__$1);
var G__34289 = cljs.core.chunk_rest.call(null,seq__34217_34287__$1);
var G__34290 = c__4550__auto___34288;
var G__34291 = cljs.core.count.call(null,c__4550__auto___34288);
var G__34292 = (0);
seq__34217_34275 = G__34289;
chunk__34218_34276 = G__34290;
count__34219_34277 = G__34291;
i__34220_34278 = G__34292;
continue;
} else {
var vec__34230_34293 = cljs.core.first.call(null,seq__34217_34287__$1);
var pno_34294 = cljs.core.nth.call(null,vec__34230_34293,(0),null);
var pmask_34295 = cljs.core.nth.call(null,vec__34230_34293,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34294,"$ = ",pmask_34295,";");


var G__34296 = cljs.core.next.call(null,seq__34217_34287__$1);
var G__34297 = null;
var G__34298 = (0);
var G__34299 = (0);
seq__34217_34275 = G__34296;
chunk__34218_34276 = G__34297;
count__34219_34277 = G__34298;
i__34220_34278 = G__34299;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__34300){
var map__34301 = p__34300;
var map__34301__$1 = (((((!((map__34301 == null))))?(((((map__34301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34301):map__34301);
var target = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__34303){
var map__34304 = p__34303;
var map__34304__$1 = (((((!((map__34304 == null))))?(((((map__34304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34304):map__34304);
var op = cljs.core.get.call(null,map__34304__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__34304__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__34304__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__34304__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__34304__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__33098__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33098__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__34310 = cljs.core.seq.call(null,table);
var chunk__34311 = null;
var count__34312 = (0);
var i__34313 = (0);
while(true){
if((i__34313 < count__34312)){
var vec__34320 = cljs.core._nth.call(null,chunk__34311,i__34313);
var sym = cljs.core.nth.call(null,vec__34320,(0),null);
var value = cljs.core.nth.call(null,vec__34320,(1),null);
var ns_34326 = cljs.core.namespace.call(null,sym);
var name_34327 = cljs.core.name.call(null,sym);
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


var G__34328 = seq__34310;
var G__34329 = chunk__34311;
var G__34330 = count__34312;
var G__34331 = (i__34313 + (1));
seq__34310 = G__34328;
chunk__34311 = G__34329;
count__34312 = G__34330;
i__34313 = G__34331;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34310);
if(temp__5720__auto__){
var seq__34310__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34310__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34310__$1);
var G__34332 = cljs.core.chunk_rest.call(null,seq__34310__$1);
var G__34333 = c__4550__auto__;
var G__34334 = cljs.core.count.call(null,c__4550__auto__);
var G__34335 = (0);
seq__34310 = G__34332;
chunk__34311 = G__34333;
count__34312 = G__34334;
i__34313 = G__34335;
continue;
} else {
var vec__34323 = cljs.core.first.call(null,seq__34310__$1);
var sym = cljs.core.nth.call(null,vec__34323,(0),null);
var value = cljs.core.nth.call(null,vec__34323,(1),null);
var ns_34336 = cljs.core.namespace.call(null,sym);
var name_34337 = cljs.core.name.call(null,sym);
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


var G__34338 = cljs.core.next.call(null,seq__34310__$1);
var G__34339 = null;
var G__34340 = (0);
var G__34341 = (0);
seq__34310 = G__34338;
chunk__34311 = G__34339;
count__34312 = G__34340;
i__34313 = G__34341;
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
var G__34343 = arguments.length;
switch (G__34343) {
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
var k_34348 = cljs.core.first.call(null,ks);
var vec__34344_34349 = cljs.core.conj.call(null,prefix,k_34348);
var top_34350 = cljs.core.nth.call(null,vec__34344_34349,(0),null);
var prefix_SINGLEQUOTE__34351 = vec__34344_34349;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_34348)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__34351) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_34350)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_34350)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34351)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_34350);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34351)),";");
}
} else {
}

var m_34352 = cljs.core.get.call(null,externs,k_34348);
if(cljs.core.empty_QMARK_.call(null,m_34352)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__34351,m_34352,top_level,known_externs);
}

var G__34353 = cljs.core.next.call(null,ks);
ks = G__34353;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1601261551151
