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
var map__32952 = s;
var map__32952__$1 = (((((!((map__32952 == null))))?(((((map__32952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32952):map__32952);
var name = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__32955 = info;
var map__32956 = G__32955;
var map__32956__$1 = (((((!((map__32956 == null))))?(((((map__32956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32956):map__32956);
var shadow = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__32955__$1 = G__32955;
while(true){
var d__$2 = d__$1;
var map__32960 = G__32955__$1;
var map__32960__$1 = (((((!((map__32960 == null))))?(((((map__32960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32960):map__32960);
var shadow__$1 = cljs.core.get.call(null,map__32960__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__32962 = (d__$2 + (1));
var G__32963 = shadow__$1;
d__$1 = G__32962;
G__32955__$1 = G__32963;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__32964){
var map__32965 = p__32964;
var map__32965__$1 = (((((!((map__32965 == null))))?(((((map__32965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32965):map__32965);
var name_var = map__32965__$1;
var name = cljs.core.get.call(null,map__32965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__32965__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__32967 = info;
var map__32967__$1 = (((((!((map__32967 == null))))?(((((map__32967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32967):map__32967);
var ns = cljs.core.get.call(null,map__32967__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__32967__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__32970 = arguments.length;
switch (G__32970) {
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
var G__32972 = cp;
switch (G__32972) {
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
var seq__32974_32978 = cljs.core.seq.call(null,s);
var chunk__32975_32979 = null;
var count__32976_32980 = (0);
var i__32977_32981 = (0);
while(true){
if((i__32977_32981 < count__32976_32980)){
var c_32982 = cljs.core._nth.call(null,chunk__32975_32979,i__32977_32981);
sb.append(cljs.compiler.escape_char.call(null,c_32982));


var G__32983 = seq__32974_32978;
var G__32984 = chunk__32975_32979;
var G__32985 = count__32976_32980;
var G__32986 = (i__32977_32981 + (1));
seq__32974_32978 = G__32983;
chunk__32975_32979 = G__32984;
count__32976_32980 = G__32985;
i__32977_32981 = G__32986;
continue;
} else {
var temp__5720__auto___32987 = cljs.core.seq.call(null,seq__32974_32978);
if(temp__5720__auto___32987){
var seq__32974_32988__$1 = temp__5720__auto___32987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32974_32988__$1)){
var c__4550__auto___32989 = cljs.core.chunk_first.call(null,seq__32974_32988__$1);
var G__32990 = cljs.core.chunk_rest.call(null,seq__32974_32988__$1);
var G__32991 = c__4550__auto___32989;
var G__32992 = cljs.core.count.call(null,c__4550__auto___32989);
var G__32993 = (0);
seq__32974_32978 = G__32990;
chunk__32975_32979 = G__32991;
count__32976_32980 = G__32992;
i__32977_32981 = G__32993;
continue;
} else {
var c_32994 = cljs.core.first.call(null,seq__32974_32988__$1);
sb.append(cljs.compiler.escape_char.call(null,c_32994));


var G__32995 = cljs.core.next.call(null,seq__32974_32988__$1);
var G__32996 = null;
var G__32997 = (0);
var G__32998 = (0);
seq__32974_32978 = G__32995;
chunk__32975_32979 = G__32996;
count__32976_32980 = G__32997;
i__32977_32981 = G__32998;
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
var map__32999_33004 = ast;
var map__32999_33005__$1 = (((((!((map__32999_33004 == null))))?(((((map__32999_33004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32999_33004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32999_33004):map__32999_33004);
var env_33006 = cljs.core.get.call(null,map__32999_33005__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_33006))){
var map__33001_33007 = env_33006;
var map__33001_33008__$1 = (((((!((map__33001_33007 == null))))?(((((map__33001_33007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33001_33007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33001_33007):map__33001_33007);
var line_33009 = cljs.core.get.call(null,map__33001_33008__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33010 = cljs.core.get.call(null,map__33001_33008__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__33001_33007,map__33001_33008__$1,line_33009,column_33010,map__32999_33004,map__32999_33005__$1,env_33006){
return (function (m){
var minfo = (function (){var G__33003 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__33003,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__33003;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33009 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__33001_33007,map__33001_33008__$1,line_33009,column_33010,map__32999_33004,map__32999_33005__$1,env_33006){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33010)?(column_33010 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__33001_33007,map__33001_33008__$1,line_33009,column_33010,map__32999_33004,map__32999_33005__$1,env_33006){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__33001_33007,map__33001_33008__$1,line_33009,column_33010,map__32999_33004,map__32999_33005__$1,env_33006))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__33001_33007,map__33001_33008__$1,line_33009,column_33010,map__32999_33004,map__32999_33005__$1,env_33006))
,cljs.core.sorted_map.call(null)));
});})(map__33001_33007,map__33001_33008__$1,line_33009,column_33010,map__32999_33004,map__32999_33005__$1,env_33006))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__33019 = arguments.length;
switch (G__33019) {
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
var len__4730__auto___33026 = arguments.length;
var i__4731__auto___33027 = (0);
while(true){
if((i__4731__auto___33027 < len__4730__auto___33026)){
args_arr__4751__auto__.push((arguments[i__4731__auto___33027]));

var G__33028 = (i__4731__auto___33027 + (1));
i__4731__auto___33027 = G__33028;
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
var s_33029 = (function (){var G__33020 = a;
if((!(typeof a === 'string'))){
return G__33020.toString();
} else {
return G__33020;
}
})();
var temp__5724__auto___33030 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___33030 == null)){
} else {
var sm_data_33031 = temp__5724__auto___33030;
cljs.core.swap_BANG_.call(null,sm_data_33031,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_33031,temp__5724__auto___33030,s_33029){
return (function (p1__33011_SHARP_){
return (p1__33011_SHARP_ + s_33029.length);
});})(sm_data_33031,temp__5724__auto___33030,s_33029))
);
}

cljs.core.print.call(null,s_33029);

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

var seq__33021 = cljs.core.seq.call(null,xs);
var chunk__33022 = null;
var count__33023 = (0);
var i__33024 = (0);
while(true){
if((i__33024 < count__33023)){
var x = cljs.core._nth.call(null,chunk__33022,i__33024);
cljs.compiler.emits.call(null,x);


var G__33032 = seq__33021;
var G__33033 = chunk__33022;
var G__33034 = count__33023;
var G__33035 = (i__33024 + (1));
seq__33021 = G__33032;
chunk__33022 = G__33033;
count__33023 = G__33034;
i__33024 = G__33035;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33021);
if(temp__5720__auto__){
var seq__33021__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33021__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33021__$1);
var G__33036 = cljs.core.chunk_rest.call(null,seq__33021__$1);
var G__33037 = c__4550__auto__;
var G__33038 = cljs.core.count.call(null,c__4550__auto__);
var G__33039 = (0);
seq__33021 = G__33036;
chunk__33022 = G__33037;
count__33023 = G__33038;
i__33024 = G__33039;
continue;
} else {
var x = cljs.core.first.call(null,seq__33021__$1);
cljs.compiler.emits.call(null,x);


var G__33040 = cljs.core.next.call(null,seq__33021__$1);
var G__33041 = null;
var G__33042 = (0);
var G__33043 = (0);
seq__33021 = G__33040;
chunk__33022 = G__33041;
count__33023 = G__33042;
i__33024 = G__33043;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq33013){
var G__33014 = cljs.core.first.call(null,seq33013);
var seq33013__$1 = cljs.core.next.call(null,seq33013);
var G__33015 = cljs.core.first.call(null,seq33013__$1);
var seq33013__$2 = cljs.core.next.call(null,seq33013__$1);
var G__33016 = cljs.core.first.call(null,seq33013__$2);
var seq33013__$3 = cljs.core.next.call(null,seq33013__$2);
var G__33017 = cljs.core.first.call(null,seq33013__$3);
var seq33013__$4 = cljs.core.next.call(null,seq33013__$3);
var G__33018 = cljs.core.first.call(null,seq33013__$4);
var seq33013__$5 = cljs.core.next.call(null,seq33013__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33014,G__33015,G__33016,G__33017,G__33018,seq33013__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__33044){
var map__33045 = p__33044;
var map__33045__$1 = (((((!((map__33045 == null))))?(((((map__33045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33045):map__33045);
var m = map__33045__$1;
var gen_line = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__33054 = arguments.length;
switch (G__33054) {
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
var len__4730__auto___33060 = arguments.length;
var i__4731__auto___33061 = (0);
while(true){
if((i__4731__auto___33061 < len__4730__auto___33060)){
args_arr__4751__auto__.push((arguments[i__4731__auto___33061]));

var G__33062 = (i__4731__auto___33061 + (1));
i__4731__auto___33061 = G__33062;
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

var seq__33055_33063 = cljs.core.seq.call(null,xs);
var chunk__33056_33064 = null;
var count__33057_33065 = (0);
var i__33058_33066 = (0);
while(true){
if((i__33058_33066 < count__33057_33065)){
var x_33067 = cljs.core._nth.call(null,chunk__33056_33064,i__33058_33066);
cljs.compiler.emits.call(null,x_33067);


var G__33068 = seq__33055_33063;
var G__33069 = chunk__33056_33064;
var G__33070 = count__33057_33065;
var G__33071 = (i__33058_33066 + (1));
seq__33055_33063 = G__33068;
chunk__33056_33064 = G__33069;
count__33057_33065 = G__33070;
i__33058_33066 = G__33071;
continue;
} else {
var temp__5720__auto___33072 = cljs.core.seq.call(null,seq__33055_33063);
if(temp__5720__auto___33072){
var seq__33055_33073__$1 = temp__5720__auto___33072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33055_33073__$1)){
var c__4550__auto___33074 = cljs.core.chunk_first.call(null,seq__33055_33073__$1);
var G__33075 = cljs.core.chunk_rest.call(null,seq__33055_33073__$1);
var G__33076 = c__4550__auto___33074;
var G__33077 = cljs.core.count.call(null,c__4550__auto___33074);
var G__33078 = (0);
seq__33055_33063 = G__33075;
chunk__33056_33064 = G__33076;
count__33057_33065 = G__33077;
i__33058_33066 = G__33078;
continue;
} else {
var x_33079 = cljs.core.first.call(null,seq__33055_33073__$1);
cljs.compiler.emits.call(null,x_33079);


var G__33080 = cljs.core.next.call(null,seq__33055_33073__$1);
var G__33081 = null;
var G__33082 = (0);
var G__33083 = (0);
seq__33055_33063 = G__33080;
chunk__33056_33064 = G__33081;
count__33057_33065 = G__33082;
i__33058_33066 = G__33083;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33048){
var G__33049 = cljs.core.first.call(null,seq33048);
var seq33048__$1 = cljs.core.next.call(null,seq33048);
var G__33050 = cljs.core.first.call(null,seq33048__$1);
var seq33048__$2 = cljs.core.next.call(null,seq33048__$1);
var G__33051 = cljs.core.first.call(null,seq33048__$2);
var seq33048__$3 = cljs.core.next.call(null,seq33048__$2);
var G__33052 = cljs.core.first.call(null,seq33048__$3);
var seq33048__$4 = cljs.core.next.call(null,seq33048__$3);
var G__33053 = cljs.core.first.call(null,seq33048__$4);
var seq33048__$5 = cljs.core.next.call(null,seq33048__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33049,G__33050,G__33051,G__33052,G__33053,seq33048__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33084_33088 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33085_33089 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33086_33090 = true;
var _STAR_print_fn_STAR__temp_val__33087_33091 = ((function (_STAR_print_newline_STAR__orig_val__33084_33088,_STAR_print_fn_STAR__orig_val__33085_33089,_STAR_print_newline_STAR__temp_val__33086_33090,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33084_33088,_STAR_print_fn_STAR__orig_val__33085_33089,_STAR_print_newline_STAR__temp_val__33086_33090,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33086_33090;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33087_33091;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33085_33089;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33084_33088;
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
var vec__33092 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__33092,(0),null);
var name = cljs.core.nth.call(null,vec__33092,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__33092,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__33092,ns,name))
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
var vec__33095 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__33095,(0),null);
var flags = cljs.core.nth.call(null,vec__33095,(1),null);
var pattern = cljs.core.nth.call(null,vec__33095,(2),null);
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
return (function (p1__33098_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__33098_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__33100){
var map__33101 = p__33100;
var map__33101__$1 = (((((!((map__33101 == null))))?(((((map__33101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33101):map__33101);
var ast = map__33101__$1;
var info = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__33103 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__33103__$1 = (((((!((map__33103 == null))))?(((((map__33103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33103):map__33103);
var cenv = map__33103__$1;
var options = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__33105 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__33105,cljs.analyzer.es5_allowed);
} else {
return G__33105;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__33106 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__33106,reserved);
} else {
return G__33106;
}
})();
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__33107_33108 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__33107_33109__$1 = (((G__33107_33108 instanceof cljs.core.Keyword))?G__33107_33108.fqn:null);
switch (G__33107_33109__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__33111){
var map__33112 = p__33111;
var map__33112__$1 = (((((!((map__33112 == null))))?(((((map__33112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33112):map__33112);
var arg = map__33112__$1;
var env = cljs.core.get.call(null,map__33112__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__33112__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__33112__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__33112__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33114 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33114__$1 = (((((!((map__33114 == null))))?(((((map__33114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33114):map__33114);
var name = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__33116){
var map__33117 = p__33116;
var map__33117__$1 = (((((!((map__33117 == null))))?(((((map__33117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33117):map__33117);
var expr = cljs.core.get.call(null,map__33117__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__33117__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__33117__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__33119_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33119_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33120){
var map__33121 = p__33120;
var map__33121__$1 = (((((!((map__33121 == null))))?(((((map__33121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33121):map__33121);
var env = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33123){
var map__33124 = p__33123;
var map__33124__$1 = (((((!((map__33124 == null))))?(((((map__33124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33124):map__33124);
var items = cljs.core.get.call(null,map__33124__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__33126_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33126_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33127){
var map__33128 = p__33127;
var map__33128__$1 = (((((!((map__33128 == null))))?(((((map__33128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33128):map__33128);
var items = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___33152 = cljs.core.seq.call(null,items);
if(temp__5720__auto___33152){
var items_33153__$1 = temp__5720__auto___33152;
var vec__33130_33154 = items_33153__$1;
var seq__33131_33155 = cljs.core.seq.call(null,vec__33130_33154);
var first__33132_33156 = cljs.core.first.call(null,seq__33131_33155);
var seq__33131_33157__$1 = cljs.core.next.call(null,seq__33131_33155);
var vec__33133_33158 = first__33132_33156;
var k_33159 = cljs.core.nth.call(null,vec__33133_33158,(0),null);
var v_33160 = cljs.core.nth.call(null,vec__33133_33158,(1),null);
var r_33161 = seq__33131_33157__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_33159),"\": ",emit_js_object_val.call(null,v_33160));

var seq__33136_33162 = cljs.core.seq.call(null,r_33161);
var chunk__33137_33163 = null;
var count__33138_33164 = (0);
var i__33139_33165 = (0);
while(true){
if((i__33139_33165 < count__33138_33164)){
var vec__33146_33166 = cljs.core._nth.call(null,chunk__33137_33163,i__33139_33165);
var k_33167__$1 = cljs.core.nth.call(null,vec__33146_33166,(0),null);
var v_33168__$1 = cljs.core.nth.call(null,vec__33146_33166,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33167__$1),"\": ",emit_js_object_val.call(null,v_33168__$1));


var G__33169 = seq__33136_33162;
var G__33170 = chunk__33137_33163;
var G__33171 = count__33138_33164;
var G__33172 = (i__33139_33165 + (1));
seq__33136_33162 = G__33169;
chunk__33137_33163 = G__33170;
count__33138_33164 = G__33171;
i__33139_33165 = G__33172;
continue;
} else {
var temp__5720__auto___33173__$1 = cljs.core.seq.call(null,seq__33136_33162);
if(temp__5720__auto___33173__$1){
var seq__33136_33174__$1 = temp__5720__auto___33173__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33136_33174__$1)){
var c__4550__auto___33175 = cljs.core.chunk_first.call(null,seq__33136_33174__$1);
var G__33176 = cljs.core.chunk_rest.call(null,seq__33136_33174__$1);
var G__33177 = c__4550__auto___33175;
var G__33178 = cljs.core.count.call(null,c__4550__auto___33175);
var G__33179 = (0);
seq__33136_33162 = G__33176;
chunk__33137_33163 = G__33177;
count__33138_33164 = G__33178;
i__33139_33165 = G__33179;
continue;
} else {
var vec__33149_33180 = cljs.core.first.call(null,seq__33136_33174__$1);
var k_33181__$1 = cljs.core.nth.call(null,vec__33149_33180,(0),null);
var v_33182__$1 = cljs.core.nth.call(null,vec__33149_33180,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33181__$1),"\": ",emit_js_object_val.call(null,v_33182__$1));


var G__33183 = cljs.core.next.call(null,seq__33136_33174__$1);
var G__33184 = null;
var G__33185 = (0);
var G__33186 = (0);
seq__33136_33162 = G__33183;
chunk__33137_33163 = G__33184;
count__33138_33164 = G__33185;
i__33139_33165 = G__33186;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__33187){
var map__33188 = p__33187;
var map__33188__$1 = (((((!((map__33188 == null))))?(((((map__33188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33188):map__33188);
var keys = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__33190){
var map__33191 = p__33190;
var map__33191__$1 = (((((!((map__33191 == null))))?(((((map__33191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33191):map__33191);
var items = cljs.core.get.call(null,map__33191__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33191__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__33193){
var map__33194 = p__33193;
var map__33194__$1 = (((((!((map__33194 == null))))?(((((map__33194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33194):map__33194);
var expr = cljs.core.get.call(null,map__33194__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__33196){
var map__33197 = p__33196;
var map__33197__$1 = (((((!((map__33197 == null))))?(((((map__33197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33197):map__33197);
var form = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__33199 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__33199__$1 = (((((!((map__33199 == null))))?(((((map__33199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33199):map__33199);
var op = cljs.core.get.call(null,map__33199__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33199__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33199__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__33201 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__33201__$1 = (((((!((map__33201 == null))))?(((((map__33201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33201):map__33201);
var op = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33203){
var map__33204 = p__33203;
var map__33204__$1 = (((((!((map__33204 == null))))?(((((map__33204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33204):map__33204);
var test = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__33206){
var map__33207 = p__33206;
var map__33207__$1 = (((((!((map__33207 == null))))?(((((map__33207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33207):map__33207);
var v = cljs.core.get.call(null,map__33207__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__33207__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__33207__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__33207__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__33209_33245 = cljs.core.seq.call(null,nodes);
var chunk__33210_33246 = null;
var count__33211_33247 = (0);
var i__33212_33248 = (0);
while(true){
if((i__33212_33248 < count__33211_33247)){
var map__33229_33249 = cljs.core._nth.call(null,chunk__33210_33246,i__33212_33248);
var map__33229_33250__$1 = (((((!((map__33229_33249 == null))))?(((((map__33229_33249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33229_33249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33229_33249):map__33229_33249);
var ts_33251 = cljs.core.get.call(null,map__33229_33250__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33230_33252 = cljs.core.get.call(null,map__33229_33250__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33230_33253__$1 = (((((!((map__33230_33252 == null))))?(((((map__33230_33252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33230_33252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33230_33252):map__33230_33252);
var then_33254 = cljs.core.get.call(null,map__33230_33253__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33233_33255 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_33251));
var chunk__33234_33256 = null;
var count__33235_33257 = (0);
var i__33236_33258 = (0);
while(true){
if((i__33236_33258 < count__33235_33257)){
var test_33259 = cljs.core._nth.call(null,chunk__33234_33256,i__33236_33258);
cljs.compiler.emitln.call(null,"case ",test_33259,":");


var G__33260 = seq__33233_33255;
var G__33261 = chunk__33234_33256;
var G__33262 = count__33235_33257;
var G__33263 = (i__33236_33258 + (1));
seq__33233_33255 = G__33260;
chunk__33234_33256 = G__33261;
count__33235_33257 = G__33262;
i__33236_33258 = G__33263;
continue;
} else {
var temp__5720__auto___33264 = cljs.core.seq.call(null,seq__33233_33255);
if(temp__5720__auto___33264){
var seq__33233_33265__$1 = temp__5720__auto___33264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33233_33265__$1)){
var c__4550__auto___33266 = cljs.core.chunk_first.call(null,seq__33233_33265__$1);
var G__33267 = cljs.core.chunk_rest.call(null,seq__33233_33265__$1);
var G__33268 = c__4550__auto___33266;
var G__33269 = cljs.core.count.call(null,c__4550__auto___33266);
var G__33270 = (0);
seq__33233_33255 = G__33267;
chunk__33234_33256 = G__33268;
count__33235_33257 = G__33269;
i__33236_33258 = G__33270;
continue;
} else {
var test_33271 = cljs.core.first.call(null,seq__33233_33265__$1);
cljs.compiler.emitln.call(null,"case ",test_33271,":");


var G__33272 = cljs.core.next.call(null,seq__33233_33265__$1);
var G__33273 = null;
var G__33274 = (0);
var G__33275 = (0);
seq__33233_33255 = G__33272;
chunk__33234_33256 = G__33273;
count__33235_33257 = G__33274;
i__33236_33258 = G__33275;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33254);
} else {
cljs.compiler.emitln.call(null,then_33254);
}

cljs.compiler.emitln.call(null,"break;");


var G__33276 = seq__33209_33245;
var G__33277 = chunk__33210_33246;
var G__33278 = count__33211_33247;
var G__33279 = (i__33212_33248 + (1));
seq__33209_33245 = G__33276;
chunk__33210_33246 = G__33277;
count__33211_33247 = G__33278;
i__33212_33248 = G__33279;
continue;
} else {
var temp__5720__auto___33280 = cljs.core.seq.call(null,seq__33209_33245);
if(temp__5720__auto___33280){
var seq__33209_33281__$1 = temp__5720__auto___33280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33209_33281__$1)){
var c__4550__auto___33282 = cljs.core.chunk_first.call(null,seq__33209_33281__$1);
var G__33283 = cljs.core.chunk_rest.call(null,seq__33209_33281__$1);
var G__33284 = c__4550__auto___33282;
var G__33285 = cljs.core.count.call(null,c__4550__auto___33282);
var G__33286 = (0);
seq__33209_33245 = G__33283;
chunk__33210_33246 = G__33284;
count__33211_33247 = G__33285;
i__33212_33248 = G__33286;
continue;
} else {
var map__33237_33287 = cljs.core.first.call(null,seq__33209_33281__$1);
var map__33237_33288__$1 = (((((!((map__33237_33287 == null))))?(((((map__33237_33287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33237_33287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33237_33287):map__33237_33287);
var ts_33289 = cljs.core.get.call(null,map__33237_33288__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33238_33290 = cljs.core.get.call(null,map__33237_33288__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33238_33291__$1 = (((((!((map__33238_33290 == null))))?(((((map__33238_33290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33238_33290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33238_33290):map__33238_33290);
var then_33292 = cljs.core.get.call(null,map__33238_33291__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33241_33293 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_33289));
var chunk__33242_33294 = null;
var count__33243_33295 = (0);
var i__33244_33296 = (0);
while(true){
if((i__33244_33296 < count__33243_33295)){
var test_33297 = cljs.core._nth.call(null,chunk__33242_33294,i__33244_33296);
cljs.compiler.emitln.call(null,"case ",test_33297,":");


var G__33298 = seq__33241_33293;
var G__33299 = chunk__33242_33294;
var G__33300 = count__33243_33295;
var G__33301 = (i__33244_33296 + (1));
seq__33241_33293 = G__33298;
chunk__33242_33294 = G__33299;
count__33243_33295 = G__33300;
i__33244_33296 = G__33301;
continue;
} else {
var temp__5720__auto___33302__$1 = cljs.core.seq.call(null,seq__33241_33293);
if(temp__5720__auto___33302__$1){
var seq__33241_33303__$1 = temp__5720__auto___33302__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33241_33303__$1)){
var c__4550__auto___33304 = cljs.core.chunk_first.call(null,seq__33241_33303__$1);
var G__33305 = cljs.core.chunk_rest.call(null,seq__33241_33303__$1);
var G__33306 = c__4550__auto___33304;
var G__33307 = cljs.core.count.call(null,c__4550__auto___33304);
var G__33308 = (0);
seq__33241_33293 = G__33305;
chunk__33242_33294 = G__33306;
count__33243_33295 = G__33307;
i__33244_33296 = G__33308;
continue;
} else {
var test_33309 = cljs.core.first.call(null,seq__33241_33303__$1);
cljs.compiler.emitln.call(null,"case ",test_33309,":");


var G__33310 = cljs.core.next.call(null,seq__33241_33303__$1);
var G__33311 = null;
var G__33312 = (0);
var G__33313 = (0);
seq__33241_33293 = G__33310;
chunk__33242_33294 = G__33311;
count__33243_33295 = G__33312;
i__33244_33296 = G__33313;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33292);
} else {
cljs.compiler.emitln.call(null,then_33292);
}

cljs.compiler.emitln.call(null,"break;");


var G__33314 = cljs.core.next.call(null,seq__33209_33281__$1);
var G__33315 = null;
var G__33316 = (0);
var G__33317 = (0);
seq__33209_33245 = G__33314;
chunk__33210_33246 = G__33315;
count__33211_33247 = G__33316;
i__33212_33248 = G__33317;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33318){
var map__33319 = p__33318;
var map__33319__$1 = (((((!((map__33319 == null))))?(((((map__33319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33319):map__33319);
var throw$ = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__33322 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__33322,(0),null);
var rstr = cljs.core.nth.call(null,vec__33322,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__33322,fstr,rstr,ret_t,axstr){
return (function (p1__33321_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33321_SHARP_);
});})(idx,vec__33322,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__33325 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__33325,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33325;
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
return (function (p1__33326_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33326_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__33327 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33328 = cljs.core.seq.call(null,vec__33327);
var first__33329 = cljs.core.first.call(null,seq__33328);
var seq__33328__$1 = cljs.core.next.call(null,seq__33328);
var p = first__33329;
var first__33329__$1 = cljs.core.first.call(null,seq__33328__$1);
var seq__33328__$2 = cljs.core.next.call(null,seq__33328__$1);
var ts = first__33329__$1;
var first__33329__$2 = cljs.core.first.call(null,seq__33328__$2);
var seq__33328__$3 = cljs.core.next.call(null,seq__33328__$2);
var n = first__33329__$2;
var xs = seq__33328__$3;
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
var vec__33330 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33331 = cljs.core.seq.call(null,vec__33330);
var first__33332 = cljs.core.first.call(null,seq__33331);
var seq__33331__$1 = cljs.core.next.call(null,seq__33331);
var p = first__33332;
var first__33332__$1 = cljs.core.first.call(null,seq__33331__$1);
var seq__33331__$2 = cljs.core.next.call(null,seq__33331__$1);
var ts = first__33332__$1;
var xs = seq__33331__$2;
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
var G__33335 = arguments.length;
switch (G__33335) {
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
var vec__33343 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__33333_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__33333_SHARP_);
} else {
return p1__33333_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__33344 = cljs.core.seq.call(null,vec__33343);
var first__33345 = cljs.core.first.call(null,seq__33344);
var seq__33344__$1 = cljs.core.next.call(null,seq__33344);
var x = first__33345;
var ys = seq__33344__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__33346 = cljs.core.seq.call(null,ys);
var chunk__33347 = null;
var count__33348 = (0);
var i__33349 = (0);
while(true){
if((i__33349 < count__33348)){
var next_line = cljs.core._nth.call(null,chunk__33347,i__33349);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__33355 = seq__33346;
var G__33356 = chunk__33347;
var G__33357 = count__33348;
var G__33358 = (i__33349 + (1));
seq__33346 = G__33355;
chunk__33347 = G__33356;
count__33348 = G__33357;
i__33349 = G__33358;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33346);
if(temp__5720__auto__){
var seq__33346__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33346__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33346__$1);
var G__33359 = cljs.core.chunk_rest.call(null,seq__33346__$1);
var G__33360 = c__4550__auto__;
var G__33361 = cljs.core.count.call(null,c__4550__auto__);
var G__33362 = (0);
seq__33346 = G__33359;
chunk__33347 = G__33360;
count__33348 = G__33361;
i__33349 = G__33362;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__33346__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__33363 = cljs.core.next.call(null,seq__33346__$1);
var G__33364 = null;
var G__33365 = (0);
var G__33366 = (0);
seq__33346 = G__33363;
chunk__33347 = G__33364;
count__33348 = G__33365;
i__33349 = G__33366;
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

var seq__33350_33367 = cljs.core.seq.call(null,docs__$2);
var chunk__33351_33368 = null;
var count__33352_33369 = (0);
var i__33353_33370 = (0);
while(true){
if((i__33353_33370 < count__33352_33369)){
var e_33371 = cljs.core._nth.call(null,chunk__33351_33368,i__33353_33370);
if(cljs.core.truth_(e_33371)){
print_comment_lines.call(null,e_33371);
} else {
}


var G__33372 = seq__33350_33367;
var G__33373 = chunk__33351_33368;
var G__33374 = count__33352_33369;
var G__33375 = (i__33353_33370 + (1));
seq__33350_33367 = G__33372;
chunk__33351_33368 = G__33373;
count__33352_33369 = G__33374;
i__33353_33370 = G__33375;
continue;
} else {
var temp__5720__auto___33376 = cljs.core.seq.call(null,seq__33350_33367);
if(temp__5720__auto___33376){
var seq__33350_33377__$1 = temp__5720__auto___33376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33350_33377__$1)){
var c__4550__auto___33378 = cljs.core.chunk_first.call(null,seq__33350_33377__$1);
var G__33379 = cljs.core.chunk_rest.call(null,seq__33350_33377__$1);
var G__33380 = c__4550__auto___33378;
var G__33381 = cljs.core.count.call(null,c__4550__auto___33378);
var G__33382 = (0);
seq__33350_33367 = G__33379;
chunk__33351_33368 = G__33380;
count__33352_33369 = G__33381;
i__33353_33370 = G__33382;
continue;
} else {
var e_33383 = cljs.core.first.call(null,seq__33350_33377__$1);
if(cljs.core.truth_(e_33383)){
print_comment_lines.call(null,e_33383);
} else {
}


var G__33384 = cljs.core.next.call(null,seq__33350_33377__$1);
var G__33385 = null;
var G__33386 = (0);
var G__33387 = (0);
seq__33350_33367 = G__33384;
chunk__33351_33368 = G__33385;
count__33352_33369 = G__33386;
i__33353_33370 = G__33387;
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
return (function (p1__33389_SHARP_){
return goog.string.startsWith(p1__33389_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33390){
var map__33391 = p__33390;
var map__33391__$1 = (((((!((map__33391 == null))))?(((((map__33391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33391):map__33391);
var doc = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33393){
var map__33394 = p__33393;
var map__33394__$1 = (((((!((map__33394 == null))))?(((((map__33394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33394):map__33394);
var name = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__33396_33420 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__33397_33421 = null;
var count__33398_33422 = (0);
var i__33399_33423 = (0);
while(true){
if((i__33399_33423 < count__33398_33422)){
var vec__33406_33424 = cljs.core._nth.call(null,chunk__33397_33421,i__33399_33423);
var i_33425 = cljs.core.nth.call(null,vec__33406_33424,(0),null);
var param_33426 = cljs.core.nth.call(null,vec__33406_33424,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33426);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__33427 = seq__33396_33420;
var G__33428 = chunk__33397_33421;
var G__33429 = count__33398_33422;
var G__33430 = (i__33399_33423 + (1));
seq__33396_33420 = G__33427;
chunk__33397_33421 = G__33428;
count__33398_33422 = G__33429;
i__33399_33423 = G__33430;
continue;
} else {
var temp__5720__auto___33431 = cljs.core.seq.call(null,seq__33396_33420);
if(temp__5720__auto___33431){
var seq__33396_33432__$1 = temp__5720__auto___33431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33396_33432__$1)){
var c__4550__auto___33433 = cljs.core.chunk_first.call(null,seq__33396_33432__$1);
var G__33434 = cljs.core.chunk_rest.call(null,seq__33396_33432__$1);
var G__33435 = c__4550__auto___33433;
var G__33436 = cljs.core.count.call(null,c__4550__auto___33433);
var G__33437 = (0);
seq__33396_33420 = G__33434;
chunk__33397_33421 = G__33435;
count__33398_33422 = G__33436;
i__33399_33423 = G__33437;
continue;
} else {
var vec__33409_33438 = cljs.core.first.call(null,seq__33396_33432__$1);
var i_33439 = cljs.core.nth.call(null,vec__33409_33438,(0),null);
var param_33440 = cljs.core.nth.call(null,vec__33409_33438,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33440);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__33441 = cljs.core.next.call(null,seq__33396_33432__$1);
var G__33442 = null;
var G__33443 = (0);
var G__33444 = (0);
seq__33396_33420 = G__33441;
chunk__33397_33421 = G__33442;
count__33398_33422 = G__33443;
i__33399_33423 = G__33444;
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

var seq__33412_33445 = cljs.core.seq.call(null,params);
var chunk__33413_33446 = null;
var count__33414_33447 = (0);
var i__33415_33448 = (0);
while(true){
if((i__33415_33448 < count__33414_33447)){
var param_33449 = cljs.core._nth.call(null,chunk__33413_33446,i__33415_33448);
cljs.compiler.emit.call(null,param_33449);

if(cljs.core._EQ_.call(null,param_33449,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33450 = seq__33412_33445;
var G__33451 = chunk__33413_33446;
var G__33452 = count__33414_33447;
var G__33453 = (i__33415_33448 + (1));
seq__33412_33445 = G__33450;
chunk__33413_33446 = G__33451;
count__33414_33447 = G__33452;
i__33415_33448 = G__33453;
continue;
} else {
var temp__5720__auto___33454 = cljs.core.seq.call(null,seq__33412_33445);
if(temp__5720__auto___33454){
var seq__33412_33455__$1 = temp__5720__auto___33454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33412_33455__$1)){
var c__4550__auto___33456 = cljs.core.chunk_first.call(null,seq__33412_33455__$1);
var G__33457 = cljs.core.chunk_rest.call(null,seq__33412_33455__$1);
var G__33458 = c__4550__auto___33456;
var G__33459 = cljs.core.count.call(null,c__4550__auto___33456);
var G__33460 = (0);
seq__33412_33445 = G__33457;
chunk__33413_33446 = G__33458;
count__33414_33447 = G__33459;
i__33415_33448 = G__33460;
continue;
} else {
var param_33461 = cljs.core.first.call(null,seq__33412_33455__$1);
cljs.compiler.emit.call(null,param_33461);

if(cljs.core._EQ_.call(null,param_33461,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33462 = cljs.core.next.call(null,seq__33412_33455__$1);
var G__33463 = null;
var G__33464 = (0);
var G__33465 = (0);
seq__33412_33445 = G__33462;
chunk__33413_33446 = G__33463;
count__33414_33447 = G__33464;
i__33415_33448 = G__33465;
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

var seq__33416_33466 = cljs.core.seq.call(null,params);
var chunk__33417_33467 = null;
var count__33418_33468 = (0);
var i__33419_33469 = (0);
while(true){
if((i__33419_33469 < count__33418_33468)){
var param_33470 = cljs.core._nth.call(null,chunk__33417_33467,i__33419_33469);
cljs.compiler.emit.call(null,param_33470);

if(cljs.core._EQ_.call(null,param_33470,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33471 = seq__33416_33466;
var G__33472 = chunk__33417_33467;
var G__33473 = count__33418_33468;
var G__33474 = (i__33419_33469 + (1));
seq__33416_33466 = G__33471;
chunk__33417_33467 = G__33472;
count__33418_33468 = G__33473;
i__33419_33469 = G__33474;
continue;
} else {
var temp__5720__auto___33475 = cljs.core.seq.call(null,seq__33416_33466);
if(temp__5720__auto___33475){
var seq__33416_33476__$1 = temp__5720__auto___33475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33416_33476__$1)){
var c__4550__auto___33477 = cljs.core.chunk_first.call(null,seq__33416_33476__$1);
var G__33478 = cljs.core.chunk_rest.call(null,seq__33416_33476__$1);
var G__33479 = c__4550__auto___33477;
var G__33480 = cljs.core.count.call(null,c__4550__auto___33477);
var G__33481 = (0);
seq__33416_33466 = G__33478;
chunk__33417_33467 = G__33479;
count__33418_33468 = G__33480;
i__33419_33469 = G__33481;
continue;
} else {
var param_33482 = cljs.core.first.call(null,seq__33416_33476__$1);
cljs.compiler.emit.call(null,param_33482);

if(cljs.core._EQ_.call(null,param_33482,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33483 = cljs.core.next.call(null,seq__33416_33476__$1);
var G__33484 = null;
var G__33485 = (0);
var G__33486 = (0);
seq__33416_33466 = G__33483;
chunk__33417_33467 = G__33484;
count__33418_33468 = G__33485;
i__33419_33469 = G__33486;
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
var seq__33487 = cljs.core.seq.call(null,params);
var chunk__33488 = null;
var count__33489 = (0);
var i__33490 = (0);
while(true){
if((i__33490 < count__33489)){
var param = cljs.core._nth.call(null,chunk__33488,i__33490);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33491 = seq__33487;
var G__33492 = chunk__33488;
var G__33493 = count__33489;
var G__33494 = (i__33490 + (1));
seq__33487 = G__33491;
chunk__33488 = G__33492;
count__33489 = G__33493;
i__33490 = G__33494;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33487);
if(temp__5720__auto__){
var seq__33487__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33487__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33487__$1);
var G__33495 = cljs.core.chunk_rest.call(null,seq__33487__$1);
var G__33496 = c__4550__auto__;
var G__33497 = cljs.core.count.call(null,c__4550__auto__);
var G__33498 = (0);
seq__33487 = G__33495;
chunk__33488 = G__33496;
count__33489 = G__33497;
i__33490 = G__33498;
continue;
} else {
var param = cljs.core.first.call(null,seq__33487__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33499 = cljs.core.next.call(null,seq__33487__$1);
var G__33500 = null;
var G__33501 = (0);
var G__33502 = (0);
seq__33487 = G__33499;
chunk__33488 = G__33500;
count__33489 = G__33501;
i__33490 = G__33502;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33503){
var map__33504 = p__33503;
var map__33504__$1 = (((((!((map__33504 == null))))?(((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33504):map__33504);
var expr = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33506){
var map__33507 = p__33506;
var map__33507__$1 = (((((!((map__33507 == null))))?(((((map__33507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33507):map__33507);
var f = map__33507__$1;
var expr = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_33517__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33518 = cljs.compiler.munge.call(null,name_33517__$1);
var delegate_name_33519 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33518),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_33519," = function (");

var seq__33509_33520 = cljs.core.seq.call(null,params);
var chunk__33510_33521 = null;
var count__33511_33522 = (0);
var i__33512_33523 = (0);
while(true){
if((i__33512_33523 < count__33511_33522)){
var param_33524 = cljs.core._nth.call(null,chunk__33510_33521,i__33512_33523);
cljs.compiler.emit.call(null,param_33524);

if(cljs.core._EQ_.call(null,param_33524,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33525 = seq__33509_33520;
var G__33526 = chunk__33510_33521;
var G__33527 = count__33511_33522;
var G__33528 = (i__33512_33523 + (1));
seq__33509_33520 = G__33525;
chunk__33510_33521 = G__33526;
count__33511_33522 = G__33527;
i__33512_33523 = G__33528;
continue;
} else {
var temp__5720__auto___33529 = cljs.core.seq.call(null,seq__33509_33520);
if(temp__5720__auto___33529){
var seq__33509_33530__$1 = temp__5720__auto___33529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33509_33530__$1)){
var c__4550__auto___33531 = cljs.core.chunk_first.call(null,seq__33509_33530__$1);
var G__33532 = cljs.core.chunk_rest.call(null,seq__33509_33530__$1);
var G__33533 = c__4550__auto___33531;
var G__33534 = cljs.core.count.call(null,c__4550__auto___33531);
var G__33535 = (0);
seq__33509_33520 = G__33532;
chunk__33510_33521 = G__33533;
count__33511_33522 = G__33534;
i__33512_33523 = G__33535;
continue;
} else {
var param_33536 = cljs.core.first.call(null,seq__33509_33530__$1);
cljs.compiler.emit.call(null,param_33536);

if(cljs.core._EQ_.call(null,param_33536,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33537 = cljs.core.next.call(null,seq__33509_33530__$1);
var G__33538 = null;
var G__33539 = (0);
var G__33540 = (0);
seq__33509_33520 = G__33537;
chunk__33510_33521 = G__33538;
count__33511_33522 = G__33539;
i__33512_33523 = G__33540;
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

cljs.compiler.emitln.call(null,"var ",mname_33518," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_33541 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_33541,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_33519,".call(this,");

var seq__33513_33542 = cljs.core.seq.call(null,params);
var chunk__33514_33543 = null;
var count__33515_33544 = (0);
var i__33516_33545 = (0);
while(true){
if((i__33516_33545 < count__33515_33544)){
var param_33546 = cljs.core._nth.call(null,chunk__33514_33543,i__33516_33545);
cljs.compiler.emit.call(null,param_33546);

if(cljs.core._EQ_.call(null,param_33546,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33547 = seq__33513_33542;
var G__33548 = chunk__33514_33543;
var G__33549 = count__33515_33544;
var G__33550 = (i__33516_33545 + (1));
seq__33513_33542 = G__33547;
chunk__33514_33543 = G__33548;
count__33515_33544 = G__33549;
i__33516_33545 = G__33550;
continue;
} else {
var temp__5720__auto___33551 = cljs.core.seq.call(null,seq__33513_33542);
if(temp__5720__auto___33551){
var seq__33513_33552__$1 = temp__5720__auto___33551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33513_33552__$1)){
var c__4550__auto___33553 = cljs.core.chunk_first.call(null,seq__33513_33552__$1);
var G__33554 = cljs.core.chunk_rest.call(null,seq__33513_33552__$1);
var G__33555 = c__4550__auto___33553;
var G__33556 = cljs.core.count.call(null,c__4550__auto___33553);
var G__33557 = (0);
seq__33513_33542 = G__33554;
chunk__33514_33543 = G__33555;
count__33515_33544 = G__33556;
i__33516_33545 = G__33557;
continue;
} else {
var param_33558 = cljs.core.first.call(null,seq__33513_33552__$1);
cljs.compiler.emit.call(null,param_33558);

if(cljs.core._EQ_.call(null,param_33558,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__33559 = cljs.core.next.call(null,seq__33513_33552__$1);
var G__33560 = null;
var G__33561 = (0);
var G__33562 = (0);
seq__33513_33542 = G__33559;
chunk__33514_33543 = G__33560;
count__33515_33544 = G__33561;
i__33516_33545 = G__33562;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_33518,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_33518,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_33517__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_33518,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_33519,";");

cljs.compiler.emitln.call(null,"return ",mname_33518,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33566){
var map__33567 = p__33566;
var map__33567__$1 = (((((!((map__33567 == null))))?(((((map__33567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33567):map__33567);
var variadic = cljs.core.get.call(null,map__33567__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__33567__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33567__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__33567__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__33567__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__33567__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__33567__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__33563_SHARP_){
var and__4120__auto__ = p1__33563_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33563_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_33620__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33621 = cljs.compiler.munge.call(null,name_33620__$1);
var maxparams_33622 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_33623 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_33620__$1,mname_33621,maxparams_33622,loop_locals,map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33621),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_33620__$1,mname_33621,maxparams_33622,loop_locals,map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_33624 = cljs.core.sort_by.call(null,((function (name_33620__$1,mname_33621,maxparams_33622,mmap_33623,loop_locals,map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__33564_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33564_SHARP_)));
});})(name_33620__$1,mname_33621,maxparams_33622,mmap_33623,loop_locals,map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_33623));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_33621," = null;");

var seq__33569_33625 = cljs.core.seq.call(null,ms_33624);
var chunk__33570_33626 = null;
var count__33571_33627 = (0);
var i__33572_33628 = (0);
while(true){
if((i__33572_33628 < count__33571_33627)){
var vec__33579_33629 = cljs.core._nth.call(null,chunk__33570_33626,i__33572_33628);
var n_33630 = cljs.core.nth.call(null,vec__33579_33629,(0),null);
var meth_33631 = cljs.core.nth.call(null,vec__33579_33629,(1),null);
cljs.compiler.emits.call(null,"var ",n_33630," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33631))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33631);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33631);
}

cljs.compiler.emitln.call(null,";");


var G__33632 = seq__33569_33625;
var G__33633 = chunk__33570_33626;
var G__33634 = count__33571_33627;
var G__33635 = (i__33572_33628 + (1));
seq__33569_33625 = G__33632;
chunk__33570_33626 = G__33633;
count__33571_33627 = G__33634;
i__33572_33628 = G__33635;
continue;
} else {
var temp__5720__auto___33636 = cljs.core.seq.call(null,seq__33569_33625);
if(temp__5720__auto___33636){
var seq__33569_33637__$1 = temp__5720__auto___33636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33569_33637__$1)){
var c__4550__auto___33638 = cljs.core.chunk_first.call(null,seq__33569_33637__$1);
var G__33639 = cljs.core.chunk_rest.call(null,seq__33569_33637__$1);
var G__33640 = c__4550__auto___33638;
var G__33641 = cljs.core.count.call(null,c__4550__auto___33638);
var G__33642 = (0);
seq__33569_33625 = G__33639;
chunk__33570_33626 = G__33640;
count__33571_33627 = G__33641;
i__33572_33628 = G__33642;
continue;
} else {
var vec__33582_33643 = cljs.core.first.call(null,seq__33569_33637__$1);
var n_33644 = cljs.core.nth.call(null,vec__33582_33643,(0),null);
var meth_33645 = cljs.core.nth.call(null,vec__33582_33643,(1),null);
cljs.compiler.emits.call(null,"var ",n_33644," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33645))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33645);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33645);
}

cljs.compiler.emitln.call(null,";");


var G__33646 = cljs.core.next.call(null,seq__33569_33637__$1);
var G__33647 = null;
var G__33648 = (0);
var G__33649 = (0);
seq__33569_33625 = G__33646;
chunk__33570_33626 = G__33647;
count__33571_33627 = G__33648;
i__33572_33628 = G__33649;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_33621," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_33622),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_33622)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_33622));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__33585_33650 = cljs.core.seq.call(null,ms_33624);
var chunk__33586_33651 = null;
var count__33587_33652 = (0);
var i__33588_33653 = (0);
while(true){
if((i__33588_33653 < count__33587_33652)){
var vec__33595_33654 = cljs.core._nth.call(null,chunk__33586_33651,i__33588_33653);
var n_33655 = cljs.core.nth.call(null,vec__33595_33654,(0),null);
var meth_33656 = cljs.core.nth.call(null,vec__33595_33654,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33656))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33657 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33657," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33658 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33657," = new cljs.core.IndexedSeq(",a_33658,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33655,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33622)),(((cljs.core.count.call(null,maxparams_33622) > (1)))?", ":null),restarg_33657,");");
} else {
var pcnt_33659 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33656));
cljs.compiler.emitln.call(null,"case ",pcnt_33659,":");

cljs.compiler.emitln.call(null,"return ",n_33655,".call(this",(((pcnt_33659 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33659,maxparams_33622)),null,(1),null)),(2),null))),");");
}


var G__33660 = seq__33585_33650;
var G__33661 = chunk__33586_33651;
var G__33662 = count__33587_33652;
var G__33663 = (i__33588_33653 + (1));
seq__33585_33650 = G__33660;
chunk__33586_33651 = G__33661;
count__33587_33652 = G__33662;
i__33588_33653 = G__33663;
continue;
} else {
var temp__5720__auto___33664 = cljs.core.seq.call(null,seq__33585_33650);
if(temp__5720__auto___33664){
var seq__33585_33665__$1 = temp__5720__auto___33664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33585_33665__$1)){
var c__4550__auto___33666 = cljs.core.chunk_first.call(null,seq__33585_33665__$1);
var G__33667 = cljs.core.chunk_rest.call(null,seq__33585_33665__$1);
var G__33668 = c__4550__auto___33666;
var G__33669 = cljs.core.count.call(null,c__4550__auto___33666);
var G__33670 = (0);
seq__33585_33650 = G__33667;
chunk__33586_33651 = G__33668;
count__33587_33652 = G__33669;
i__33588_33653 = G__33670;
continue;
} else {
var vec__33598_33671 = cljs.core.first.call(null,seq__33585_33665__$1);
var n_33672 = cljs.core.nth.call(null,vec__33598_33671,(0),null);
var meth_33673 = cljs.core.nth.call(null,vec__33598_33671,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33673))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33674 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33674," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33675 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33674," = new cljs.core.IndexedSeq(",a_33675,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33672,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33622)),(((cljs.core.count.call(null,maxparams_33622) > (1)))?", ":null),restarg_33674,");");
} else {
var pcnt_33676 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33673));
cljs.compiler.emitln.call(null,"case ",pcnt_33676,":");

cljs.compiler.emitln.call(null,"return ",n_33672,".call(this",(((pcnt_33676 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33676,maxparams_33622)),null,(1),null)),(2),null))),");");
}


var G__33677 = cljs.core.next.call(null,seq__33585_33665__$1);
var G__33678 = null;
var G__33679 = (0);
var G__33680 = (0);
seq__33585_33650 = G__33677;
chunk__33586_33651 = G__33678;
count__33587_33652 = G__33679;
i__33588_33653 = G__33680;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_33681 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_33624)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_33681,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_33621,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_33621,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_33620__$1,mname_33621,maxparams_33622,mmap_33623,ms_33624,loop_locals,map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__33565_SHARP_){
var vec__33601 = p1__33565_SHARP_;
var n = cljs.core.nth.call(null,vec__33601,(0),null);
var m = cljs.core.nth.call(null,vec__33601,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_33620__$1,mname_33621,maxparams_33622,mmap_33623,ms_33624,loop_locals,map__33567,map__33567__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_33624),".cljs$lang$applyTo;");
} else {
}

var seq__33604_33682 = cljs.core.seq.call(null,ms_33624);
var chunk__33605_33683 = null;
var count__33606_33684 = (0);
var i__33607_33685 = (0);
while(true){
if((i__33607_33685 < count__33606_33684)){
var vec__33614_33686 = cljs.core._nth.call(null,chunk__33605_33683,i__33607_33685);
var n_33687 = cljs.core.nth.call(null,vec__33614_33686,(0),null);
var meth_33688 = cljs.core.nth.call(null,vec__33614_33686,(1),null);
var c_33689 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33688));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33688))){
cljs.compiler.emitln.call(null,mname_33621,".cljs$core$IFn$_invoke$arity$variadic = ",n_33687,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33621,".cljs$core$IFn$_invoke$arity$",c_33689," = ",n_33687,";");
}


var G__33690 = seq__33604_33682;
var G__33691 = chunk__33605_33683;
var G__33692 = count__33606_33684;
var G__33693 = (i__33607_33685 + (1));
seq__33604_33682 = G__33690;
chunk__33605_33683 = G__33691;
count__33606_33684 = G__33692;
i__33607_33685 = G__33693;
continue;
} else {
var temp__5720__auto___33694 = cljs.core.seq.call(null,seq__33604_33682);
if(temp__5720__auto___33694){
var seq__33604_33695__$1 = temp__5720__auto___33694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33604_33695__$1)){
var c__4550__auto___33696 = cljs.core.chunk_first.call(null,seq__33604_33695__$1);
var G__33697 = cljs.core.chunk_rest.call(null,seq__33604_33695__$1);
var G__33698 = c__4550__auto___33696;
var G__33699 = cljs.core.count.call(null,c__4550__auto___33696);
var G__33700 = (0);
seq__33604_33682 = G__33697;
chunk__33605_33683 = G__33698;
count__33606_33684 = G__33699;
i__33607_33685 = G__33700;
continue;
} else {
var vec__33617_33701 = cljs.core.first.call(null,seq__33604_33695__$1);
var n_33702 = cljs.core.nth.call(null,vec__33617_33701,(0),null);
var meth_33703 = cljs.core.nth.call(null,vec__33617_33701,(1),null);
var c_33704 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33703));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_33703))){
cljs.compiler.emitln.call(null,mname_33621,".cljs$core$IFn$_invoke$arity$variadic = ",n_33702,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33621,".cljs$core$IFn$_invoke$arity$",c_33704," = ",n_33702,";");
}


var G__33705 = cljs.core.next.call(null,seq__33604_33695__$1);
var G__33706 = null;
var G__33707 = (0);
var G__33708 = (0);
seq__33604_33682 = G__33705;
chunk__33605_33683 = G__33706;
count__33606_33684 = G__33707;
i__33607_33685 = G__33708;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_33621,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33709){
var map__33710 = p__33709;
var map__33710__$1 = (((((!((map__33710 == null))))?(((((map__33710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33710):map__33710);
var statements = cljs.core.get.call(null,map__33710__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__33710__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__33710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__33712_33716 = cljs.core.seq.call(null,statements);
var chunk__33713_33717 = null;
var count__33714_33718 = (0);
var i__33715_33719 = (0);
while(true){
if((i__33715_33719 < count__33714_33718)){
var s_33720 = cljs.core._nth.call(null,chunk__33713_33717,i__33715_33719);
cljs.compiler.emitln.call(null,s_33720);


var G__33721 = seq__33712_33716;
var G__33722 = chunk__33713_33717;
var G__33723 = count__33714_33718;
var G__33724 = (i__33715_33719 + (1));
seq__33712_33716 = G__33721;
chunk__33713_33717 = G__33722;
count__33714_33718 = G__33723;
i__33715_33719 = G__33724;
continue;
} else {
var temp__5720__auto___33725 = cljs.core.seq.call(null,seq__33712_33716);
if(temp__5720__auto___33725){
var seq__33712_33726__$1 = temp__5720__auto___33725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33712_33726__$1)){
var c__4550__auto___33727 = cljs.core.chunk_first.call(null,seq__33712_33726__$1);
var G__33728 = cljs.core.chunk_rest.call(null,seq__33712_33726__$1);
var G__33729 = c__4550__auto___33727;
var G__33730 = cljs.core.count.call(null,c__4550__auto___33727);
var G__33731 = (0);
seq__33712_33716 = G__33728;
chunk__33713_33717 = G__33729;
count__33714_33718 = G__33730;
i__33715_33719 = G__33731;
continue;
} else {
var s_33732 = cljs.core.first.call(null,seq__33712_33726__$1);
cljs.compiler.emitln.call(null,s_33732);


var G__33733 = cljs.core.next.call(null,seq__33712_33726__$1);
var G__33734 = null;
var G__33735 = (0);
var G__33736 = (0);
seq__33712_33716 = G__33733;
chunk__33713_33717 = G__33734;
count__33714_33718 = G__33735;
i__33715_33719 = G__33736;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33737){
var map__33738 = p__33737;
var map__33738__$1 = (((((!((map__33738 == null))))?(((((map__33738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var try$ = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33740,is_loop){
var map__33741 = p__33740;
var map__33741__$1 = (((((!((map__33741 == null))))?(((((map__33741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33741):map__33741);
var expr = cljs.core.get.call(null,map__33741__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__33741__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__33741__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__33743_33757 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__33744_33758 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__33743_33757,context,map__33741,map__33741__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__33743_33757,context,map__33741,map__33741__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__33744_33758;

try{var seq__33745_33759 = cljs.core.seq.call(null,bindings);
var chunk__33746_33760 = null;
var count__33747_33761 = (0);
var i__33748_33762 = (0);
while(true){
if((i__33748_33762 < count__33747_33761)){
var map__33753_33763 = cljs.core._nth.call(null,chunk__33746_33760,i__33748_33762);
var map__33753_33764__$1 = (((((!((map__33753_33763 == null))))?(((((map__33753_33763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33753_33763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33753_33763):map__33753_33763);
var binding_33765 = map__33753_33764__$1;
var init_33766 = cljs.core.get.call(null,map__33753_33764__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33765);

cljs.compiler.emitln.call(null," = ",init_33766,";");


var G__33767 = seq__33745_33759;
var G__33768 = chunk__33746_33760;
var G__33769 = count__33747_33761;
var G__33770 = (i__33748_33762 + (1));
seq__33745_33759 = G__33767;
chunk__33746_33760 = G__33768;
count__33747_33761 = G__33769;
i__33748_33762 = G__33770;
continue;
} else {
var temp__5720__auto___33771 = cljs.core.seq.call(null,seq__33745_33759);
if(temp__5720__auto___33771){
var seq__33745_33772__$1 = temp__5720__auto___33771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33745_33772__$1)){
var c__4550__auto___33773 = cljs.core.chunk_first.call(null,seq__33745_33772__$1);
var G__33774 = cljs.core.chunk_rest.call(null,seq__33745_33772__$1);
var G__33775 = c__4550__auto___33773;
var G__33776 = cljs.core.count.call(null,c__4550__auto___33773);
var G__33777 = (0);
seq__33745_33759 = G__33774;
chunk__33746_33760 = G__33775;
count__33747_33761 = G__33776;
i__33748_33762 = G__33777;
continue;
} else {
var map__33755_33778 = cljs.core.first.call(null,seq__33745_33772__$1);
var map__33755_33779__$1 = (((((!((map__33755_33778 == null))))?(((((map__33755_33778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33755_33778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33755_33778):map__33755_33778);
var binding_33780 = map__33755_33779__$1;
var init_33781 = cljs.core.get.call(null,map__33755_33779__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33780);

cljs.compiler.emitln.call(null," = ",init_33781,";");


var G__33782 = cljs.core.next.call(null,seq__33745_33772__$1);
var G__33783 = null;
var G__33784 = (0);
var G__33785 = (0);
seq__33745_33759 = G__33782;
chunk__33746_33760 = G__33783;
count__33747_33761 = G__33784;
i__33748_33762 = G__33785;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__33743_33757;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33786){
var map__33787 = p__33786;
var map__33787__$1 = (((((!((map__33787 == null))))?(((((map__33787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33787):map__33787);
var frame = cljs.core.get.call(null,map__33787__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__33787__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__33787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___33789 = cljs.core.count.call(null,exprs);
var i_33790 = (0);
while(true){
if((i_33790 < n__4607__auto___33789)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_33790)," = ",exprs.call(null,i_33790),";");

var G__33791 = (i_33790 + (1));
i_33790 = G__33791;
continue;
} else {
}
break;
}

var n__4607__auto___33792 = cljs.core.count.call(null,exprs);
var i_33793 = (0);
while(true){
if((i_33793 < n__4607__auto___33792)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_33793))," = ",temps.call(null,i_33793),";");

var G__33794 = (i_33793 + (1));
i_33793 = G__33794;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33795){
var map__33796 = p__33795;
var map__33796__$1 = (((((!((map__33796 == null))))?(((((map__33796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33796):map__33796);
var expr = cljs.core.get.call(null,map__33796__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__33796__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__33796__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__33798_33810 = cljs.core.seq.call(null,bindings);
var chunk__33799_33811 = null;
var count__33800_33812 = (0);
var i__33801_33813 = (0);
while(true){
if((i__33801_33813 < count__33800_33812)){
var map__33806_33814 = cljs.core._nth.call(null,chunk__33799_33811,i__33801_33813);
var map__33806_33815__$1 = (((((!((map__33806_33814 == null))))?(((((map__33806_33814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33806_33814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33806_33814):map__33806_33814);
var binding_33816 = map__33806_33815__$1;
var init_33817 = cljs.core.get.call(null,map__33806_33815__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33816)," = ",init_33817,";");


var G__33818 = seq__33798_33810;
var G__33819 = chunk__33799_33811;
var G__33820 = count__33800_33812;
var G__33821 = (i__33801_33813 + (1));
seq__33798_33810 = G__33818;
chunk__33799_33811 = G__33819;
count__33800_33812 = G__33820;
i__33801_33813 = G__33821;
continue;
} else {
var temp__5720__auto___33822 = cljs.core.seq.call(null,seq__33798_33810);
if(temp__5720__auto___33822){
var seq__33798_33823__$1 = temp__5720__auto___33822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33798_33823__$1)){
var c__4550__auto___33824 = cljs.core.chunk_first.call(null,seq__33798_33823__$1);
var G__33825 = cljs.core.chunk_rest.call(null,seq__33798_33823__$1);
var G__33826 = c__4550__auto___33824;
var G__33827 = cljs.core.count.call(null,c__4550__auto___33824);
var G__33828 = (0);
seq__33798_33810 = G__33825;
chunk__33799_33811 = G__33826;
count__33800_33812 = G__33827;
i__33801_33813 = G__33828;
continue;
} else {
var map__33808_33829 = cljs.core.first.call(null,seq__33798_33823__$1);
var map__33808_33830__$1 = (((((!((map__33808_33829 == null))))?(((((map__33808_33829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33808_33829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33808_33829):map__33808_33829);
var binding_33831 = map__33808_33830__$1;
var init_33832 = cljs.core.get.call(null,map__33808_33830__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33831)," = ",init_33832,";");


var G__33833 = cljs.core.next.call(null,seq__33798_33823__$1);
var G__33834 = null;
var G__33835 = (0);
var G__33836 = (0);
seq__33798_33810 = G__33833;
chunk__33799_33811 = G__33834;
count__33800_33812 = G__33835;
i__33801_33813 = G__33836;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__33839){
var map__33840 = p__33839;
var map__33840__$1 = (((((!((map__33840 == null))))?(((((map__33840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33840):map__33840);
var expr = map__33840__$1;
var f = cljs.core.get.call(null,map__33840__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__33840__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33840__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__33842 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env){
return (function (p1__33837_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33837_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env){
return (function (p1__33838_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33838_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33840,map__33840__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__33842,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__33842,(1),null);
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_33845 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_33845,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_33846 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_33846,args)),(((mfa_33846 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_33846,args)),"], 0))");
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
var fprop_33847 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_33847," ? ",f__$1,fprop_33847,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_33847," ? ",f__$1,fprop_33847,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__33848){
var map__33849 = p__33848;
var map__33849__$1 = (((((!((map__33849 == null))))?(((((map__33849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33849):map__33849);
var ctor = cljs.core.get.call(null,map__33849__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__33849__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33849__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__33851){
var map__33852 = p__33851;
var map__33852__$1 = (((((!((map__33852 == null))))?(((((map__33852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33852):map__33852);
var target = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__33852__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
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
var map__33854 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__33854__$1 = (((((!((map__33854 == null))))?(((((map__33854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33854):map__33854);
var options = cljs.core.get.call(null,map__33854__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__33854__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__33855 = options;
var map__33855__$1 = (((((!((map__33855 == null))))?(((((map__33855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33855):map__33855);
var target = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__33855__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__33856 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__33861 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__33861__$1 = (((((!((map__33861 == null))))?(((((map__33861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33861):map__33861);
var node_libs = cljs.core.get.call(null,map__33861__$1,true);
var libs_to_load = cljs.core.get.call(null,map__33861__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__33856,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__33856,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__33863_33883 = cljs.core.seq.call(null,libs_to_load);
var chunk__33864_33884 = null;
var count__33865_33885 = (0);
var i__33866_33886 = (0);
while(true){
if((i__33866_33886 < count__33865_33885)){
var lib_33887 = cljs.core._nth.call(null,chunk__33864_33884,i__33866_33886);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_33887)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33887),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33887),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33887),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33887),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_33887,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33887),"');");
}

}
}
}


var G__33888 = seq__33863_33883;
var G__33889 = chunk__33864_33884;
var G__33890 = count__33865_33885;
var G__33891 = (i__33866_33886 + (1));
seq__33863_33883 = G__33888;
chunk__33864_33884 = G__33889;
count__33865_33885 = G__33890;
i__33866_33886 = G__33891;
continue;
} else {
var temp__5720__auto___33892 = cljs.core.seq.call(null,seq__33863_33883);
if(temp__5720__auto___33892){
var seq__33863_33893__$1 = temp__5720__auto___33892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33863_33893__$1)){
var c__4550__auto___33894 = cljs.core.chunk_first.call(null,seq__33863_33893__$1);
var G__33895 = cljs.core.chunk_rest.call(null,seq__33863_33893__$1);
var G__33896 = c__4550__auto___33894;
var G__33897 = cljs.core.count.call(null,c__4550__auto___33894);
var G__33898 = (0);
seq__33863_33883 = G__33895;
chunk__33864_33884 = G__33896;
count__33865_33885 = G__33897;
i__33866_33886 = G__33898;
continue;
} else {
var lib_33899 = cljs.core.first.call(null,seq__33863_33893__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_33899)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33899),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33899),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33899),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33899),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_33899,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33899),"');");
}

}
}
}


var G__33900 = cljs.core.next.call(null,seq__33863_33893__$1);
var G__33901 = null;
var G__33902 = (0);
var G__33903 = (0);
seq__33863_33883 = G__33900;
chunk__33864_33884 = G__33901;
count__33865_33885 = G__33902;
i__33866_33886 = G__33903;
continue;
}
} else {
}
}
break;
}

var seq__33867_33904 = cljs.core.seq.call(null,node_libs);
var chunk__33868_33905 = null;
var count__33869_33906 = (0);
var i__33870_33907 = (0);
while(true){
if((i__33870_33907 < count__33869_33906)){
var lib_33908 = cljs.core._nth.call(null,chunk__33868_33905,i__33870_33907);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_33908)," = require('",lib_33908,"');");


var G__33909 = seq__33867_33904;
var G__33910 = chunk__33868_33905;
var G__33911 = count__33869_33906;
var G__33912 = (i__33870_33907 + (1));
seq__33867_33904 = G__33909;
chunk__33868_33905 = G__33910;
count__33869_33906 = G__33911;
i__33870_33907 = G__33912;
continue;
} else {
var temp__5720__auto___33913 = cljs.core.seq.call(null,seq__33867_33904);
if(temp__5720__auto___33913){
var seq__33867_33914__$1 = temp__5720__auto___33913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33867_33914__$1)){
var c__4550__auto___33915 = cljs.core.chunk_first.call(null,seq__33867_33914__$1);
var G__33916 = cljs.core.chunk_rest.call(null,seq__33867_33914__$1);
var G__33917 = c__4550__auto___33915;
var G__33918 = cljs.core.count.call(null,c__4550__auto___33915);
var G__33919 = (0);
seq__33867_33904 = G__33916;
chunk__33868_33905 = G__33917;
count__33869_33906 = G__33918;
i__33870_33907 = G__33919;
continue;
} else {
var lib_33920 = cljs.core.first.call(null,seq__33867_33914__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_33920)," = require('",lib_33920,"');");


var G__33921 = cljs.core.next.call(null,seq__33867_33914__$1);
var G__33922 = null;
var G__33923 = (0);
var G__33924 = (0);
seq__33867_33904 = G__33921;
chunk__33868_33905 = G__33922;
count__33869_33906 = G__33923;
i__33870_33907 = G__33924;
continue;
}
} else {
}
}
break;
}

var seq__33871_33925 = cljs.core.seq.call(null,global_exports_libs);
var chunk__33872_33926 = null;
var count__33873_33927 = (0);
var i__33874_33928 = (0);
while(true){
if((i__33874_33928 < count__33873_33927)){
var lib_33929 = cljs.core._nth.call(null,chunk__33872_33926,i__33874_33928);
var map__33879_33930 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_33929));
var map__33879_33931__$1 = (((((!((map__33879_33930 == null))))?(((((map__33879_33930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33879_33930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33879_33930):map__33879_33930);
var global_exports_33932 = cljs.core.get.call(null,map__33879_33931__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_33932,lib_33929);


var G__33933 = seq__33871_33925;
var G__33934 = chunk__33872_33926;
var G__33935 = count__33873_33927;
var G__33936 = (i__33874_33928 + (1));
seq__33871_33925 = G__33933;
chunk__33872_33926 = G__33934;
count__33873_33927 = G__33935;
i__33874_33928 = G__33936;
continue;
} else {
var temp__5720__auto___33937 = cljs.core.seq.call(null,seq__33871_33925);
if(temp__5720__auto___33937){
var seq__33871_33938__$1 = temp__5720__auto___33937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33871_33938__$1)){
var c__4550__auto___33939 = cljs.core.chunk_first.call(null,seq__33871_33938__$1);
var G__33940 = cljs.core.chunk_rest.call(null,seq__33871_33938__$1);
var G__33941 = c__4550__auto___33939;
var G__33942 = cljs.core.count.call(null,c__4550__auto___33939);
var G__33943 = (0);
seq__33871_33925 = G__33940;
chunk__33872_33926 = G__33941;
count__33873_33927 = G__33942;
i__33874_33928 = G__33943;
continue;
} else {
var lib_33944 = cljs.core.first.call(null,seq__33871_33938__$1);
var map__33881_33945 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_33944));
var map__33881_33946__$1 = (((((!((map__33881_33945 == null))))?(((((map__33881_33945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33881_33945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33881_33945):map__33881_33945);
var global_exports_33947 = cljs.core.get.call(null,map__33881_33946__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_33947,lib_33944);


var G__33948 = cljs.core.next.call(null,seq__33871_33938__$1);
var G__33949 = null;
var G__33950 = (0);
var G__33951 = (0);
seq__33871_33925 = G__33948;
chunk__33872_33926 = G__33949;
count__33873_33927 = G__33950;
i__33874_33928 = G__33951;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__33952){
var map__33953 = p__33952;
var map__33953__$1 = (((((!((map__33953 == null))))?(((((map__33953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33953):map__33953);
var name = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__33955){
var map__33956 = p__33955;
var map__33956__$1 = (((((!((map__33956 == null))))?(((((map__33956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33956):map__33956);
var name = cljs.core.get.call(null,map__33956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__33956__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__33956__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__33956__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__33956__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__33956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__33956__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__33958){
var map__33959 = p__33958;
var map__33959__$1 = (((((!((map__33959 == null))))?(((((map__33959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33959):map__33959);
var t = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__33961_33985 = cljs.core.seq.call(null,protocols);
var chunk__33962_33986 = null;
var count__33963_33987 = (0);
var i__33964_33988 = (0);
while(true){
if((i__33964_33988 < count__33963_33987)){
var protocol_33989 = cljs.core._nth.call(null,chunk__33962_33986,i__33964_33988);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33989)),"}");


var G__33990 = seq__33961_33985;
var G__33991 = chunk__33962_33986;
var G__33992 = count__33963_33987;
var G__33993 = (i__33964_33988 + (1));
seq__33961_33985 = G__33990;
chunk__33962_33986 = G__33991;
count__33963_33987 = G__33992;
i__33964_33988 = G__33993;
continue;
} else {
var temp__5720__auto___33994 = cljs.core.seq.call(null,seq__33961_33985);
if(temp__5720__auto___33994){
var seq__33961_33995__$1 = temp__5720__auto___33994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33961_33995__$1)){
var c__4550__auto___33996 = cljs.core.chunk_first.call(null,seq__33961_33995__$1);
var G__33997 = cljs.core.chunk_rest.call(null,seq__33961_33995__$1);
var G__33998 = c__4550__auto___33996;
var G__33999 = cljs.core.count.call(null,c__4550__auto___33996);
var G__34000 = (0);
seq__33961_33985 = G__33997;
chunk__33962_33986 = G__33998;
count__33963_33987 = G__33999;
i__33964_33988 = G__34000;
continue;
} else {
var protocol_34001 = cljs.core.first.call(null,seq__33961_33995__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34001)),"}");


var G__34002 = cljs.core.next.call(null,seq__33961_33995__$1);
var G__34003 = null;
var G__34004 = (0);
var G__34005 = (0);
seq__33961_33985 = G__34002;
chunk__33962_33986 = G__34003;
count__33963_33987 = G__34004;
i__33964_33988 = G__34005;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__33965_34006 = cljs.core.seq.call(null,fields__$1);
var chunk__33966_34007 = null;
var count__33967_34008 = (0);
var i__33968_34009 = (0);
while(true){
if((i__33968_34009 < count__33967_34008)){
var fld_34010 = cljs.core._nth.call(null,chunk__33966_34007,i__33968_34009);
cljs.compiler.emitln.call(null,"this.",fld_34010," = ",fld_34010,";");


var G__34011 = seq__33965_34006;
var G__34012 = chunk__33966_34007;
var G__34013 = count__33967_34008;
var G__34014 = (i__33968_34009 + (1));
seq__33965_34006 = G__34011;
chunk__33966_34007 = G__34012;
count__33967_34008 = G__34013;
i__33968_34009 = G__34014;
continue;
} else {
var temp__5720__auto___34015 = cljs.core.seq.call(null,seq__33965_34006);
if(temp__5720__auto___34015){
var seq__33965_34016__$1 = temp__5720__auto___34015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33965_34016__$1)){
var c__4550__auto___34017 = cljs.core.chunk_first.call(null,seq__33965_34016__$1);
var G__34018 = cljs.core.chunk_rest.call(null,seq__33965_34016__$1);
var G__34019 = c__4550__auto___34017;
var G__34020 = cljs.core.count.call(null,c__4550__auto___34017);
var G__34021 = (0);
seq__33965_34006 = G__34018;
chunk__33966_34007 = G__34019;
count__33967_34008 = G__34020;
i__33968_34009 = G__34021;
continue;
} else {
var fld_34022 = cljs.core.first.call(null,seq__33965_34016__$1);
cljs.compiler.emitln.call(null,"this.",fld_34022," = ",fld_34022,";");


var G__34023 = cljs.core.next.call(null,seq__33965_34016__$1);
var G__34024 = null;
var G__34025 = (0);
var G__34026 = (0);
seq__33965_34006 = G__34023;
chunk__33966_34007 = G__34024;
count__33967_34008 = G__34025;
i__33968_34009 = G__34026;
continue;
}
} else {
}
}
break;
}

var seq__33969_34027 = cljs.core.seq.call(null,pmasks);
var chunk__33970_34028 = null;
var count__33971_34029 = (0);
var i__33972_34030 = (0);
while(true){
if((i__33972_34030 < count__33971_34029)){
var vec__33979_34031 = cljs.core._nth.call(null,chunk__33970_34028,i__33972_34030);
var pno_34032 = cljs.core.nth.call(null,vec__33979_34031,(0),null);
var pmask_34033 = cljs.core.nth.call(null,vec__33979_34031,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34032,"$ = ",pmask_34033,";");


var G__34034 = seq__33969_34027;
var G__34035 = chunk__33970_34028;
var G__34036 = count__33971_34029;
var G__34037 = (i__33972_34030 + (1));
seq__33969_34027 = G__34034;
chunk__33970_34028 = G__34035;
count__33971_34029 = G__34036;
i__33972_34030 = G__34037;
continue;
} else {
var temp__5720__auto___34038 = cljs.core.seq.call(null,seq__33969_34027);
if(temp__5720__auto___34038){
var seq__33969_34039__$1 = temp__5720__auto___34038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33969_34039__$1)){
var c__4550__auto___34040 = cljs.core.chunk_first.call(null,seq__33969_34039__$1);
var G__34041 = cljs.core.chunk_rest.call(null,seq__33969_34039__$1);
var G__34042 = c__4550__auto___34040;
var G__34043 = cljs.core.count.call(null,c__4550__auto___34040);
var G__34044 = (0);
seq__33969_34027 = G__34041;
chunk__33970_34028 = G__34042;
count__33971_34029 = G__34043;
i__33972_34030 = G__34044;
continue;
} else {
var vec__33982_34045 = cljs.core.first.call(null,seq__33969_34039__$1);
var pno_34046 = cljs.core.nth.call(null,vec__33982_34045,(0),null);
var pmask_34047 = cljs.core.nth.call(null,vec__33982_34045,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34046,"$ = ",pmask_34047,";");


var G__34048 = cljs.core.next.call(null,seq__33969_34039__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__33969_34027 = G__34048;
chunk__33970_34028 = G__34049;
count__33971_34029 = G__34050;
i__33972_34030 = G__34051;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__34052){
var map__34053 = p__34052;
var map__34053__$1 = (((((!((map__34053 == null))))?(((((map__34053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34053):map__34053);
var t = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34055_34079 = cljs.core.seq.call(null,protocols);
var chunk__34056_34080 = null;
var count__34057_34081 = (0);
var i__34058_34082 = (0);
while(true){
if((i__34058_34082 < count__34057_34081)){
var protocol_34083 = cljs.core._nth.call(null,chunk__34056_34080,i__34058_34082);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34083)),"}");


var G__34084 = seq__34055_34079;
var G__34085 = chunk__34056_34080;
var G__34086 = count__34057_34081;
var G__34087 = (i__34058_34082 + (1));
seq__34055_34079 = G__34084;
chunk__34056_34080 = G__34085;
count__34057_34081 = G__34086;
i__34058_34082 = G__34087;
continue;
} else {
var temp__5720__auto___34088 = cljs.core.seq.call(null,seq__34055_34079);
if(temp__5720__auto___34088){
var seq__34055_34089__$1 = temp__5720__auto___34088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34055_34089__$1)){
var c__4550__auto___34090 = cljs.core.chunk_first.call(null,seq__34055_34089__$1);
var G__34091 = cljs.core.chunk_rest.call(null,seq__34055_34089__$1);
var G__34092 = c__4550__auto___34090;
var G__34093 = cljs.core.count.call(null,c__4550__auto___34090);
var G__34094 = (0);
seq__34055_34079 = G__34091;
chunk__34056_34080 = G__34092;
count__34057_34081 = G__34093;
i__34058_34082 = G__34094;
continue;
} else {
var protocol_34095 = cljs.core.first.call(null,seq__34055_34089__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34095)),"}");


var G__34096 = cljs.core.next.call(null,seq__34055_34089__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__34055_34079 = G__34096;
chunk__34056_34080 = G__34097;
count__34057_34081 = G__34098;
i__34058_34082 = G__34099;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34059_34100 = cljs.core.seq.call(null,fields__$1);
var chunk__34060_34101 = null;
var count__34061_34102 = (0);
var i__34062_34103 = (0);
while(true){
if((i__34062_34103 < count__34061_34102)){
var fld_34104 = cljs.core._nth.call(null,chunk__34060_34101,i__34062_34103);
cljs.compiler.emitln.call(null,"this.",fld_34104," = ",fld_34104,";");


var G__34105 = seq__34059_34100;
var G__34106 = chunk__34060_34101;
var G__34107 = count__34061_34102;
var G__34108 = (i__34062_34103 + (1));
seq__34059_34100 = G__34105;
chunk__34060_34101 = G__34106;
count__34061_34102 = G__34107;
i__34062_34103 = G__34108;
continue;
} else {
var temp__5720__auto___34109 = cljs.core.seq.call(null,seq__34059_34100);
if(temp__5720__auto___34109){
var seq__34059_34110__$1 = temp__5720__auto___34109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34059_34110__$1)){
var c__4550__auto___34111 = cljs.core.chunk_first.call(null,seq__34059_34110__$1);
var G__34112 = cljs.core.chunk_rest.call(null,seq__34059_34110__$1);
var G__34113 = c__4550__auto___34111;
var G__34114 = cljs.core.count.call(null,c__4550__auto___34111);
var G__34115 = (0);
seq__34059_34100 = G__34112;
chunk__34060_34101 = G__34113;
count__34061_34102 = G__34114;
i__34062_34103 = G__34115;
continue;
} else {
var fld_34116 = cljs.core.first.call(null,seq__34059_34110__$1);
cljs.compiler.emitln.call(null,"this.",fld_34116," = ",fld_34116,";");


var G__34117 = cljs.core.next.call(null,seq__34059_34110__$1);
var G__34118 = null;
var G__34119 = (0);
var G__34120 = (0);
seq__34059_34100 = G__34117;
chunk__34060_34101 = G__34118;
count__34061_34102 = G__34119;
i__34062_34103 = G__34120;
continue;
}
} else {
}
}
break;
}

var seq__34063_34121 = cljs.core.seq.call(null,pmasks);
var chunk__34064_34122 = null;
var count__34065_34123 = (0);
var i__34066_34124 = (0);
while(true){
if((i__34066_34124 < count__34065_34123)){
var vec__34073_34125 = cljs.core._nth.call(null,chunk__34064_34122,i__34066_34124);
var pno_34126 = cljs.core.nth.call(null,vec__34073_34125,(0),null);
var pmask_34127 = cljs.core.nth.call(null,vec__34073_34125,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34126,"$ = ",pmask_34127,";");


var G__34128 = seq__34063_34121;
var G__34129 = chunk__34064_34122;
var G__34130 = count__34065_34123;
var G__34131 = (i__34066_34124 + (1));
seq__34063_34121 = G__34128;
chunk__34064_34122 = G__34129;
count__34065_34123 = G__34130;
i__34066_34124 = G__34131;
continue;
} else {
var temp__5720__auto___34132 = cljs.core.seq.call(null,seq__34063_34121);
if(temp__5720__auto___34132){
var seq__34063_34133__$1 = temp__5720__auto___34132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34063_34133__$1)){
var c__4550__auto___34134 = cljs.core.chunk_first.call(null,seq__34063_34133__$1);
var G__34135 = cljs.core.chunk_rest.call(null,seq__34063_34133__$1);
var G__34136 = c__4550__auto___34134;
var G__34137 = cljs.core.count.call(null,c__4550__auto___34134);
var G__34138 = (0);
seq__34063_34121 = G__34135;
chunk__34064_34122 = G__34136;
count__34065_34123 = G__34137;
i__34066_34124 = G__34138;
continue;
} else {
var vec__34076_34139 = cljs.core.first.call(null,seq__34063_34133__$1);
var pno_34140 = cljs.core.nth.call(null,vec__34076_34139,(0),null);
var pmask_34141 = cljs.core.nth.call(null,vec__34076_34139,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34140,"$ = ",pmask_34141,";");


var G__34142 = cljs.core.next.call(null,seq__34063_34133__$1);
var G__34143 = null;
var G__34144 = (0);
var G__34145 = (0);
seq__34063_34121 = G__34142;
chunk__34064_34122 = G__34143;
count__34065_34123 = G__34144;
i__34066_34124 = G__34145;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__34146){
var map__34147 = p__34146;
var map__34147__$1 = (((((!((map__34147 == null))))?(((((map__34147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34147):map__34147);
var target = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__34149){
var map__34150 = p__34149;
var map__34150__$1 = (((((!((map__34150 == null))))?(((((map__34150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34150):map__34150);
var op = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__32944__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32944__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__34156 = cljs.core.seq.call(null,table);
var chunk__34157 = null;
var count__34158 = (0);
var i__34159 = (0);
while(true){
if((i__34159 < count__34158)){
var vec__34166 = cljs.core._nth.call(null,chunk__34157,i__34159);
var sym = cljs.core.nth.call(null,vec__34166,(0),null);
var value = cljs.core.nth.call(null,vec__34166,(1),null);
var ns_34172 = cljs.core.namespace.call(null,sym);
var name_34173 = cljs.core.name.call(null,sym);
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


var G__34174 = seq__34156;
var G__34175 = chunk__34157;
var G__34176 = count__34158;
var G__34177 = (i__34159 + (1));
seq__34156 = G__34174;
chunk__34157 = G__34175;
count__34158 = G__34176;
i__34159 = G__34177;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34156);
if(temp__5720__auto__){
var seq__34156__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34156__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34156__$1);
var G__34178 = cljs.core.chunk_rest.call(null,seq__34156__$1);
var G__34179 = c__4550__auto__;
var G__34180 = cljs.core.count.call(null,c__4550__auto__);
var G__34181 = (0);
seq__34156 = G__34178;
chunk__34157 = G__34179;
count__34158 = G__34180;
i__34159 = G__34181;
continue;
} else {
var vec__34169 = cljs.core.first.call(null,seq__34156__$1);
var sym = cljs.core.nth.call(null,vec__34169,(0),null);
var value = cljs.core.nth.call(null,vec__34169,(1),null);
var ns_34182 = cljs.core.namespace.call(null,sym);
var name_34183 = cljs.core.name.call(null,sym);
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


var G__34184 = cljs.core.next.call(null,seq__34156__$1);
var G__34185 = null;
var G__34186 = (0);
var G__34187 = (0);
seq__34156 = G__34184;
chunk__34157 = G__34185;
count__34158 = G__34186;
i__34159 = G__34187;
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
var G__34189 = arguments.length;
switch (G__34189) {
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
var k_34194 = cljs.core.first.call(null,ks);
var vec__34190_34195 = cljs.core.conj.call(null,prefix,k_34194);
var top_34196 = cljs.core.nth.call(null,vec__34190_34195,(0),null);
var prefix_SINGLEQUOTE__34197 = vec__34190_34195;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_34194)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__34197) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_34196)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_34196)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34197)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_34196);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34197)),";");
}
} else {
}

var m_34198 = cljs.core.get.call(null,externs,k_34194);
if(cljs.core.empty_QMARK_.call(null,m_34198)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__34197,m_34198,top_level,known_externs);
}

var G__34199 = cljs.core.next.call(null,ks);
ks = G__34199;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1600808347099
