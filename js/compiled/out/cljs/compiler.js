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
var map__9255 = s;
var map__9255__$1 = (((((!((map__9255 == null))))?(((((map__9255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9255):map__9255);
var name = cljs.core.get.call(null,map__9255__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__9255__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__9258 = info;
var map__9259 = G__9258;
var map__9259__$1 = (((((!((map__9259 == null))))?(((((map__9259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9259):map__9259);
var shadow = cljs.core.get.call(null,map__9259__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__9258__$1 = G__9258;
while(true){
var d__$2 = d__$1;
var map__9263 = G__9258__$1;
var map__9263__$1 = (((((!((map__9263 == null))))?(((((map__9263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9263):map__9263);
var shadow__$1 = cljs.core.get.call(null,map__9263__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__9265 = (d__$2 + (1));
var G__9266 = shadow__$1;
d__$1 = G__9265;
G__9258__$1 = G__9266;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__9267){
var map__9268 = p__9267;
var map__9268__$1 = (((((!((map__9268 == null))))?(((((map__9268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9268):map__9268);
var name_var = map__9268__$1;
var name = cljs.core.get.call(null,map__9268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__9268__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__9270 = info;
var map__9270__$1 = (((((!((map__9270 == null))))?(((((map__9270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9270):map__9270);
var ns = cljs.core.get.call(null,map__9270__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__9270__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__9273 = arguments.length;
switch (G__9273) {
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
var G__9275 = cp;
switch (G__9275) {
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
var seq__9277_9281 = cljs.core.seq.call(null,s);
var chunk__9278_9282 = null;
var count__9279_9283 = (0);
var i__9280_9284 = (0);
while(true){
if((i__9280_9284 < count__9279_9283)){
var c_9285 = cljs.core._nth.call(null,chunk__9278_9282,i__9280_9284);
sb.append(cljs.compiler.escape_char.call(null,c_9285));


var G__9286 = seq__9277_9281;
var G__9287 = chunk__9278_9282;
var G__9288 = count__9279_9283;
var G__9289 = (i__9280_9284 + (1));
seq__9277_9281 = G__9286;
chunk__9278_9282 = G__9287;
count__9279_9283 = G__9288;
i__9280_9284 = G__9289;
continue;
} else {
var temp__5720__auto___9290 = cljs.core.seq.call(null,seq__9277_9281);
if(temp__5720__auto___9290){
var seq__9277_9291__$1 = temp__5720__auto___9290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9277_9291__$1)){
var c__4550__auto___9292 = cljs.core.chunk_first.call(null,seq__9277_9291__$1);
var G__9293 = cljs.core.chunk_rest.call(null,seq__9277_9291__$1);
var G__9294 = c__4550__auto___9292;
var G__9295 = cljs.core.count.call(null,c__4550__auto___9292);
var G__9296 = (0);
seq__9277_9281 = G__9293;
chunk__9278_9282 = G__9294;
count__9279_9283 = G__9295;
i__9280_9284 = G__9296;
continue;
} else {
var c_9297 = cljs.core.first.call(null,seq__9277_9291__$1);
sb.append(cljs.compiler.escape_char.call(null,c_9297));


var G__9298 = cljs.core.next.call(null,seq__9277_9291__$1);
var G__9299 = null;
var G__9300 = (0);
var G__9301 = (0);
seq__9277_9281 = G__9298;
chunk__9278_9282 = G__9299;
count__9279_9283 = G__9300;
i__9280_9284 = G__9301;
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
var map__9302_9307 = ast;
var map__9302_9308__$1 = (((((!((map__9302_9307 == null))))?(((((map__9302_9307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9302_9307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9302_9307):map__9302_9307);
var env_9309 = cljs.core.get.call(null,map__9302_9308__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_9309))){
var map__9304_9310 = env_9309;
var map__9304_9311__$1 = (((((!((map__9304_9310 == null))))?(((((map__9304_9310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9304_9310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9304_9310):map__9304_9310);
var line_9312 = cljs.core.get.call(null,map__9304_9311__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_9313 = cljs.core.get.call(null,map__9304_9311__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__9304_9310,map__9304_9311__$1,line_9312,column_9313,map__9302_9307,map__9302_9308__$1,env_9309){
return (function (m){
var minfo = (function (){var G__9306 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__9306,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__9306;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_9312 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__9304_9310,map__9304_9311__$1,line_9312,column_9313,map__9302_9307,map__9302_9308__$1,env_9309){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_9313)?(column_9313 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__9304_9310,map__9304_9311__$1,line_9312,column_9313,map__9302_9307,map__9302_9308__$1,env_9309){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__9304_9310,map__9304_9311__$1,line_9312,column_9313,map__9302_9307,map__9302_9308__$1,env_9309))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__9304_9310,map__9304_9311__$1,line_9312,column_9313,map__9302_9307,map__9302_9308__$1,env_9309))
,cljs.core.sorted_map.call(null)));
});})(map__9304_9310,map__9304_9311__$1,line_9312,column_9313,map__9302_9307,map__9302_9308__$1,env_9309))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__9322 = arguments.length;
switch (G__9322) {
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
var len__4730__auto___9329 = arguments.length;
var i__4731__auto___9330 = (0);
while(true){
if((i__4731__auto___9330 < len__4730__auto___9329)){
args_arr__4751__auto__.push((arguments[i__4731__auto___9330]));

var G__9331 = (i__4731__auto___9330 + (1));
i__4731__auto___9330 = G__9331;
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
var s_9332 = (function (){var G__9323 = a;
if((!(typeof a === 'string'))){
return G__9323.toString();
} else {
return G__9323;
}
})();
var temp__5724__auto___9333 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___9333 == null)){
} else {
var sm_data_9334 = temp__5724__auto___9333;
cljs.core.swap_BANG_.call(null,sm_data_9334,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_9334,temp__5724__auto___9333,s_9332){
return (function (p1__9314_SHARP_){
return (p1__9314_SHARP_ + s_9332.length);
});})(sm_data_9334,temp__5724__auto___9333,s_9332))
);
}

cljs.core.print.call(null,s_9332);

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

var seq__9324 = cljs.core.seq.call(null,xs);
var chunk__9325 = null;
var count__9326 = (0);
var i__9327 = (0);
while(true){
if((i__9327 < count__9326)){
var x = cljs.core._nth.call(null,chunk__9325,i__9327);
cljs.compiler.emits.call(null,x);


var G__9335 = seq__9324;
var G__9336 = chunk__9325;
var G__9337 = count__9326;
var G__9338 = (i__9327 + (1));
seq__9324 = G__9335;
chunk__9325 = G__9336;
count__9326 = G__9337;
i__9327 = G__9338;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9324);
if(temp__5720__auto__){
var seq__9324__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9324__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9324__$1);
var G__9339 = cljs.core.chunk_rest.call(null,seq__9324__$1);
var G__9340 = c__4550__auto__;
var G__9341 = cljs.core.count.call(null,c__4550__auto__);
var G__9342 = (0);
seq__9324 = G__9339;
chunk__9325 = G__9340;
count__9326 = G__9341;
i__9327 = G__9342;
continue;
} else {
var x = cljs.core.first.call(null,seq__9324__$1);
cljs.compiler.emits.call(null,x);


var G__9343 = cljs.core.next.call(null,seq__9324__$1);
var G__9344 = null;
var G__9345 = (0);
var G__9346 = (0);
seq__9324 = G__9343;
chunk__9325 = G__9344;
count__9326 = G__9345;
i__9327 = G__9346;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq9316){
var G__9317 = cljs.core.first.call(null,seq9316);
var seq9316__$1 = cljs.core.next.call(null,seq9316);
var G__9318 = cljs.core.first.call(null,seq9316__$1);
var seq9316__$2 = cljs.core.next.call(null,seq9316__$1);
var G__9319 = cljs.core.first.call(null,seq9316__$2);
var seq9316__$3 = cljs.core.next.call(null,seq9316__$2);
var G__9320 = cljs.core.first.call(null,seq9316__$3);
var seq9316__$4 = cljs.core.next.call(null,seq9316__$3);
var G__9321 = cljs.core.first.call(null,seq9316__$4);
var seq9316__$5 = cljs.core.next.call(null,seq9316__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9317,G__9318,G__9319,G__9320,G__9321,seq9316__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__9347){
var map__9348 = p__9347;
var map__9348__$1 = (((((!((map__9348 == null))))?(((((map__9348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9348):map__9348);
var m = map__9348__$1;
var gen_line = cljs.core.get.call(null,map__9348__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__9357 = arguments.length;
switch (G__9357) {
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
var len__4730__auto___9363 = arguments.length;
var i__4731__auto___9364 = (0);
while(true){
if((i__4731__auto___9364 < len__4730__auto___9363)){
args_arr__4751__auto__.push((arguments[i__4731__auto___9364]));

var G__9365 = (i__4731__auto___9364 + (1));
i__4731__auto___9364 = G__9365;
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

var seq__9358_9366 = cljs.core.seq.call(null,xs);
var chunk__9359_9367 = null;
var count__9360_9368 = (0);
var i__9361_9369 = (0);
while(true){
if((i__9361_9369 < count__9360_9368)){
var x_9370 = cljs.core._nth.call(null,chunk__9359_9367,i__9361_9369);
cljs.compiler.emits.call(null,x_9370);


var G__9371 = seq__9358_9366;
var G__9372 = chunk__9359_9367;
var G__9373 = count__9360_9368;
var G__9374 = (i__9361_9369 + (1));
seq__9358_9366 = G__9371;
chunk__9359_9367 = G__9372;
count__9360_9368 = G__9373;
i__9361_9369 = G__9374;
continue;
} else {
var temp__5720__auto___9375 = cljs.core.seq.call(null,seq__9358_9366);
if(temp__5720__auto___9375){
var seq__9358_9376__$1 = temp__5720__auto___9375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9358_9376__$1)){
var c__4550__auto___9377 = cljs.core.chunk_first.call(null,seq__9358_9376__$1);
var G__9378 = cljs.core.chunk_rest.call(null,seq__9358_9376__$1);
var G__9379 = c__4550__auto___9377;
var G__9380 = cljs.core.count.call(null,c__4550__auto___9377);
var G__9381 = (0);
seq__9358_9366 = G__9378;
chunk__9359_9367 = G__9379;
count__9360_9368 = G__9380;
i__9361_9369 = G__9381;
continue;
} else {
var x_9382 = cljs.core.first.call(null,seq__9358_9376__$1);
cljs.compiler.emits.call(null,x_9382);


var G__9383 = cljs.core.next.call(null,seq__9358_9376__$1);
var G__9384 = null;
var G__9385 = (0);
var G__9386 = (0);
seq__9358_9366 = G__9383;
chunk__9359_9367 = G__9384;
count__9360_9368 = G__9385;
i__9361_9369 = G__9386;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9351){
var G__9352 = cljs.core.first.call(null,seq9351);
var seq9351__$1 = cljs.core.next.call(null,seq9351);
var G__9353 = cljs.core.first.call(null,seq9351__$1);
var seq9351__$2 = cljs.core.next.call(null,seq9351__$1);
var G__9354 = cljs.core.first.call(null,seq9351__$2);
var seq9351__$3 = cljs.core.next.call(null,seq9351__$2);
var G__9355 = cljs.core.first.call(null,seq9351__$3);
var seq9351__$4 = cljs.core.next.call(null,seq9351__$3);
var G__9356 = cljs.core.first.call(null,seq9351__$4);
var seq9351__$5 = cljs.core.next.call(null,seq9351__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9352,G__9353,G__9354,G__9355,G__9356,seq9351__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9387_9391 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9388_9392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9389_9393 = true;
var _STAR_print_fn_STAR__temp_val__9390_9394 = ((function (_STAR_print_newline_STAR__orig_val__9387_9391,_STAR_print_fn_STAR__orig_val__9388_9392,_STAR_print_newline_STAR__temp_val__9389_9393,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__9387_9391,_STAR_print_fn_STAR__orig_val__9388_9392,_STAR_print_newline_STAR__temp_val__9389_9393,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9389_9393;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9390_9394;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9388_9392;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9387_9391;
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
var vec__9395 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__9395,(0),null);
var name = cljs.core.nth.call(null,vec__9395,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__9395,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__9395,ns,name))
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
var vec__9398 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__9398,(0),null);
var flags = cljs.core.nth.call(null,vec__9398,(1),null);
var pattern = cljs.core.nth.call(null,vec__9398,(2),null);
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
return (function (p1__9401_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__9401_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__9403){
var map__9404 = p__9403;
var map__9404__$1 = (((((!((map__9404 == null))))?(((((map__9404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9404):map__9404);
var ast = map__9404__$1;
var info = cljs.core.get.call(null,map__9404__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__9404__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__9404__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__9406 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__9406__$1 = (((((!((map__9406 == null))))?(((((map__9406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9406):map__9406);
var cenv = map__9406__$1;
var options = cljs.core.get.call(null,map__9406__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__9408 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__9408,cljs.analyzer.es5_allowed);
} else {
return G__9408;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__9409 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__9409,reserved);
} else {
return G__9409;
}
})();
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__9410_9411 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__9410_9412__$1 = (((G__9410_9411 instanceof cljs.core.Keyword))?G__9410_9411.fqn:null);
switch (G__9410_9412__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__9414){
var map__9415 = p__9414;
var map__9415__$1 = (((((!((map__9415 == null))))?(((((map__9415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9415):map__9415);
var arg = map__9415__$1;
var env = cljs.core.get.call(null,map__9415__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__9415__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__9415__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__9415__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__9417 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9417__$1 = (((((!((map__9417 == null))))?(((((map__9417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9417):map__9417);
var name = cljs.core.get.call(null,map__9417__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__9419){
var map__9420 = p__9419;
var map__9420__$1 = (((((!((map__9420 == null))))?(((((map__9420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9420):map__9420);
var expr = cljs.core.get.call(null,map__9420__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__9420__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__9420__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__9422_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9422_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9423){
var map__9424 = p__9423;
var map__9424__$1 = (((((!((map__9424 == null))))?(((((map__9424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9424):map__9424);
var env = cljs.core.get.call(null,map__9424__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__9424__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__9424__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9426){
var map__9427 = p__9426;
var map__9427__$1 = (((((!((map__9427 == null))))?(((((map__9427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9427):map__9427);
var items = cljs.core.get.call(null,map__9427__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9427__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__9429_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9429_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9430){
var map__9431 = p__9430;
var map__9431__$1 = (((((!((map__9431 == null))))?(((((map__9431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9431):map__9431);
var items = cljs.core.get.call(null,map__9431__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9431__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___9455 = cljs.core.seq.call(null,items);
if(temp__5720__auto___9455){
var items_9456__$1 = temp__5720__auto___9455;
var vec__9433_9457 = items_9456__$1;
var seq__9434_9458 = cljs.core.seq.call(null,vec__9433_9457);
var first__9435_9459 = cljs.core.first.call(null,seq__9434_9458);
var seq__9434_9460__$1 = cljs.core.next.call(null,seq__9434_9458);
var vec__9436_9461 = first__9435_9459;
var k_9462 = cljs.core.nth.call(null,vec__9436_9461,(0),null);
var v_9463 = cljs.core.nth.call(null,vec__9436_9461,(1),null);
var r_9464 = seq__9434_9460__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_9462),"\": ",emit_js_object_val.call(null,v_9463));

var seq__9439_9465 = cljs.core.seq.call(null,r_9464);
var chunk__9440_9466 = null;
var count__9441_9467 = (0);
var i__9442_9468 = (0);
while(true){
if((i__9442_9468 < count__9441_9467)){
var vec__9449_9469 = cljs.core._nth.call(null,chunk__9440_9466,i__9442_9468);
var k_9470__$1 = cljs.core.nth.call(null,vec__9449_9469,(0),null);
var v_9471__$1 = cljs.core.nth.call(null,vec__9449_9469,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9470__$1),"\": ",emit_js_object_val.call(null,v_9471__$1));


var G__9472 = seq__9439_9465;
var G__9473 = chunk__9440_9466;
var G__9474 = count__9441_9467;
var G__9475 = (i__9442_9468 + (1));
seq__9439_9465 = G__9472;
chunk__9440_9466 = G__9473;
count__9441_9467 = G__9474;
i__9442_9468 = G__9475;
continue;
} else {
var temp__5720__auto___9476__$1 = cljs.core.seq.call(null,seq__9439_9465);
if(temp__5720__auto___9476__$1){
var seq__9439_9477__$1 = temp__5720__auto___9476__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9439_9477__$1)){
var c__4550__auto___9478 = cljs.core.chunk_first.call(null,seq__9439_9477__$1);
var G__9479 = cljs.core.chunk_rest.call(null,seq__9439_9477__$1);
var G__9480 = c__4550__auto___9478;
var G__9481 = cljs.core.count.call(null,c__4550__auto___9478);
var G__9482 = (0);
seq__9439_9465 = G__9479;
chunk__9440_9466 = G__9480;
count__9441_9467 = G__9481;
i__9442_9468 = G__9482;
continue;
} else {
var vec__9452_9483 = cljs.core.first.call(null,seq__9439_9477__$1);
var k_9484__$1 = cljs.core.nth.call(null,vec__9452_9483,(0),null);
var v_9485__$1 = cljs.core.nth.call(null,vec__9452_9483,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9484__$1),"\": ",emit_js_object_val.call(null,v_9485__$1));


var G__9486 = cljs.core.next.call(null,seq__9439_9477__$1);
var G__9487 = null;
var G__9488 = (0);
var G__9489 = (0);
seq__9439_9465 = G__9486;
chunk__9440_9466 = G__9487;
count__9441_9467 = G__9488;
i__9442_9468 = G__9489;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__9490){
var map__9491 = p__9490;
var map__9491__$1 = (((((!((map__9491 == null))))?(((((map__9491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9491):map__9491);
var keys = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__9493){
var map__9494 = p__9493;
var map__9494__$1 = (((((!((map__9494 == null))))?(((((map__9494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9494):map__9494);
var items = cljs.core.get.call(null,map__9494__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9494__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__9496){
var map__9497 = p__9496;
var map__9497__$1 = (((((!((map__9497 == null))))?(((((map__9497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9497):map__9497);
var expr = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__9499){
var map__9500 = p__9499;
var map__9500__$1 = (((((!((map__9500 == null))))?(((((map__9500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9500):map__9500);
var form = cljs.core.get.call(null,map__9500__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__9500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__9502 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__9502__$1 = (((((!((map__9502 == null))))?(((((map__9502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9502):map__9502);
var op = cljs.core.get.call(null,map__9502__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__9502__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__9502__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__9504 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__9504__$1 = (((((!((map__9504 == null))))?(((((map__9504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9504):map__9504);
var op = cljs.core.get.call(null,map__9504__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__9504__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__9504__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9506){
var map__9507 = p__9506;
var map__9507__$1 = (((((!((map__9507 == null))))?(((((map__9507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9507):map__9507);
var test = cljs.core.get.call(null,map__9507__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__9507__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__9507__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__9507__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__9507__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__9509){
var map__9510 = p__9509;
var map__9510__$1 = (((((!((map__9510 == null))))?(((((map__9510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9510):map__9510);
var v = cljs.core.get.call(null,map__9510__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__9510__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__9510__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__9510__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__9512_9548 = cljs.core.seq.call(null,nodes);
var chunk__9513_9549 = null;
var count__9514_9550 = (0);
var i__9515_9551 = (0);
while(true){
if((i__9515_9551 < count__9514_9550)){
var map__9532_9552 = cljs.core._nth.call(null,chunk__9513_9549,i__9515_9551);
var map__9532_9553__$1 = (((((!((map__9532_9552 == null))))?(((((map__9532_9552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9532_9552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9532_9552):map__9532_9552);
var ts_9554 = cljs.core.get.call(null,map__9532_9553__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9533_9555 = cljs.core.get.call(null,map__9532_9553__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9533_9556__$1 = (((((!((map__9533_9555 == null))))?(((((map__9533_9555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9533_9555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9533_9555):map__9533_9555);
var then_9557 = cljs.core.get.call(null,map__9533_9556__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9536_9558 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_9554));
var chunk__9537_9559 = null;
var count__9538_9560 = (0);
var i__9539_9561 = (0);
while(true){
if((i__9539_9561 < count__9538_9560)){
var test_9562 = cljs.core._nth.call(null,chunk__9537_9559,i__9539_9561);
cljs.compiler.emitln.call(null,"case ",test_9562,":");


var G__9563 = seq__9536_9558;
var G__9564 = chunk__9537_9559;
var G__9565 = count__9538_9560;
var G__9566 = (i__9539_9561 + (1));
seq__9536_9558 = G__9563;
chunk__9537_9559 = G__9564;
count__9538_9560 = G__9565;
i__9539_9561 = G__9566;
continue;
} else {
var temp__5720__auto___9567 = cljs.core.seq.call(null,seq__9536_9558);
if(temp__5720__auto___9567){
var seq__9536_9568__$1 = temp__5720__auto___9567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9536_9568__$1)){
var c__4550__auto___9569 = cljs.core.chunk_first.call(null,seq__9536_9568__$1);
var G__9570 = cljs.core.chunk_rest.call(null,seq__9536_9568__$1);
var G__9571 = c__4550__auto___9569;
var G__9572 = cljs.core.count.call(null,c__4550__auto___9569);
var G__9573 = (0);
seq__9536_9558 = G__9570;
chunk__9537_9559 = G__9571;
count__9538_9560 = G__9572;
i__9539_9561 = G__9573;
continue;
} else {
var test_9574 = cljs.core.first.call(null,seq__9536_9568__$1);
cljs.compiler.emitln.call(null,"case ",test_9574,":");


var G__9575 = cljs.core.next.call(null,seq__9536_9568__$1);
var G__9576 = null;
var G__9577 = (0);
var G__9578 = (0);
seq__9536_9558 = G__9575;
chunk__9537_9559 = G__9576;
count__9538_9560 = G__9577;
i__9539_9561 = G__9578;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9557);
} else {
cljs.compiler.emitln.call(null,then_9557);
}

cljs.compiler.emitln.call(null,"break;");


var G__9579 = seq__9512_9548;
var G__9580 = chunk__9513_9549;
var G__9581 = count__9514_9550;
var G__9582 = (i__9515_9551 + (1));
seq__9512_9548 = G__9579;
chunk__9513_9549 = G__9580;
count__9514_9550 = G__9581;
i__9515_9551 = G__9582;
continue;
} else {
var temp__5720__auto___9583 = cljs.core.seq.call(null,seq__9512_9548);
if(temp__5720__auto___9583){
var seq__9512_9584__$1 = temp__5720__auto___9583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9512_9584__$1)){
var c__4550__auto___9585 = cljs.core.chunk_first.call(null,seq__9512_9584__$1);
var G__9586 = cljs.core.chunk_rest.call(null,seq__9512_9584__$1);
var G__9587 = c__4550__auto___9585;
var G__9588 = cljs.core.count.call(null,c__4550__auto___9585);
var G__9589 = (0);
seq__9512_9548 = G__9586;
chunk__9513_9549 = G__9587;
count__9514_9550 = G__9588;
i__9515_9551 = G__9589;
continue;
} else {
var map__9540_9590 = cljs.core.first.call(null,seq__9512_9584__$1);
var map__9540_9591__$1 = (((((!((map__9540_9590 == null))))?(((((map__9540_9590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9540_9590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9540_9590):map__9540_9590);
var ts_9592 = cljs.core.get.call(null,map__9540_9591__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9541_9593 = cljs.core.get.call(null,map__9540_9591__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9541_9594__$1 = (((((!((map__9541_9593 == null))))?(((((map__9541_9593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9541_9593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9541_9593):map__9541_9593);
var then_9595 = cljs.core.get.call(null,map__9541_9594__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9544_9596 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_9592));
var chunk__9545_9597 = null;
var count__9546_9598 = (0);
var i__9547_9599 = (0);
while(true){
if((i__9547_9599 < count__9546_9598)){
var test_9600 = cljs.core._nth.call(null,chunk__9545_9597,i__9547_9599);
cljs.compiler.emitln.call(null,"case ",test_9600,":");


var G__9601 = seq__9544_9596;
var G__9602 = chunk__9545_9597;
var G__9603 = count__9546_9598;
var G__9604 = (i__9547_9599 + (1));
seq__9544_9596 = G__9601;
chunk__9545_9597 = G__9602;
count__9546_9598 = G__9603;
i__9547_9599 = G__9604;
continue;
} else {
var temp__5720__auto___9605__$1 = cljs.core.seq.call(null,seq__9544_9596);
if(temp__5720__auto___9605__$1){
var seq__9544_9606__$1 = temp__5720__auto___9605__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9544_9606__$1)){
var c__4550__auto___9607 = cljs.core.chunk_first.call(null,seq__9544_9606__$1);
var G__9608 = cljs.core.chunk_rest.call(null,seq__9544_9606__$1);
var G__9609 = c__4550__auto___9607;
var G__9610 = cljs.core.count.call(null,c__4550__auto___9607);
var G__9611 = (0);
seq__9544_9596 = G__9608;
chunk__9545_9597 = G__9609;
count__9546_9598 = G__9610;
i__9547_9599 = G__9611;
continue;
} else {
var test_9612 = cljs.core.first.call(null,seq__9544_9606__$1);
cljs.compiler.emitln.call(null,"case ",test_9612,":");


var G__9613 = cljs.core.next.call(null,seq__9544_9606__$1);
var G__9614 = null;
var G__9615 = (0);
var G__9616 = (0);
seq__9544_9596 = G__9613;
chunk__9545_9597 = G__9614;
count__9546_9598 = G__9615;
i__9547_9599 = G__9616;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9595);
} else {
cljs.compiler.emitln.call(null,then_9595);
}

cljs.compiler.emitln.call(null,"break;");


var G__9617 = cljs.core.next.call(null,seq__9512_9584__$1);
var G__9618 = null;
var G__9619 = (0);
var G__9620 = (0);
seq__9512_9548 = G__9617;
chunk__9513_9549 = G__9618;
count__9514_9550 = G__9619;
i__9515_9551 = G__9620;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__9621){
var map__9622 = p__9621;
var map__9622__$1 = (((((!((map__9622 == null))))?(((((map__9622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9622):map__9622);
var throw$ = cljs.core.get.call(null,map__9622__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__9622__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__9625 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__9625,(0),null);
var rstr = cljs.core.nth.call(null,vec__9625,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__9625,fstr,rstr,ret_t,axstr){
return (function (p1__9624_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__9624_SHARP_);
});})(idx,vec__9625,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__9628 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__9628,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__9628;
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
return (function (p1__9629_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__9629_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__9630 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__9631 = cljs.core.seq.call(null,vec__9630);
var first__9632 = cljs.core.first.call(null,seq__9631);
var seq__9631__$1 = cljs.core.next.call(null,seq__9631);
var p = first__9632;
var first__9632__$1 = cljs.core.first.call(null,seq__9631__$1);
var seq__9631__$2 = cljs.core.next.call(null,seq__9631__$1);
var ts = first__9632__$1;
var first__9632__$2 = cljs.core.first.call(null,seq__9631__$2);
var seq__9631__$3 = cljs.core.next.call(null,seq__9631__$2);
var n = first__9632__$2;
var xs = seq__9631__$3;
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
var vec__9633 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__9634 = cljs.core.seq.call(null,vec__9633);
var first__9635 = cljs.core.first.call(null,seq__9634);
var seq__9634__$1 = cljs.core.next.call(null,seq__9634);
var p = first__9635;
var first__9635__$1 = cljs.core.first.call(null,seq__9634__$1);
var seq__9634__$2 = cljs.core.next.call(null,seq__9634__$1);
var ts = first__9635__$1;
var xs = seq__9634__$2;
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
var G__9638 = arguments.length;
switch (G__9638) {
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
var vec__9646 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__9636_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__9636_SHARP_);
} else {
return p1__9636_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__9647 = cljs.core.seq.call(null,vec__9646);
var first__9648 = cljs.core.first.call(null,seq__9647);
var seq__9647__$1 = cljs.core.next.call(null,seq__9647);
var x = first__9648;
var ys = seq__9647__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__9649 = cljs.core.seq.call(null,ys);
var chunk__9650 = null;
var count__9651 = (0);
var i__9652 = (0);
while(true){
if((i__9652 < count__9651)){
var next_line = cljs.core._nth.call(null,chunk__9650,i__9652);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__9658 = seq__9649;
var G__9659 = chunk__9650;
var G__9660 = count__9651;
var G__9661 = (i__9652 + (1));
seq__9649 = G__9658;
chunk__9650 = G__9659;
count__9651 = G__9660;
i__9652 = G__9661;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9649);
if(temp__5720__auto__){
var seq__9649__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9649__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9649__$1);
var G__9662 = cljs.core.chunk_rest.call(null,seq__9649__$1);
var G__9663 = c__4550__auto__;
var G__9664 = cljs.core.count.call(null,c__4550__auto__);
var G__9665 = (0);
seq__9649 = G__9662;
chunk__9650 = G__9663;
count__9651 = G__9664;
i__9652 = G__9665;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__9649__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__9666 = cljs.core.next.call(null,seq__9649__$1);
var G__9667 = null;
var G__9668 = (0);
var G__9669 = (0);
seq__9649 = G__9666;
chunk__9650 = G__9667;
count__9651 = G__9668;
i__9652 = G__9669;
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

var seq__9653_9670 = cljs.core.seq.call(null,docs__$2);
var chunk__9654_9671 = null;
var count__9655_9672 = (0);
var i__9656_9673 = (0);
while(true){
if((i__9656_9673 < count__9655_9672)){
var e_9674 = cljs.core._nth.call(null,chunk__9654_9671,i__9656_9673);
if(cljs.core.truth_(e_9674)){
print_comment_lines.call(null,e_9674);
} else {
}


var G__9675 = seq__9653_9670;
var G__9676 = chunk__9654_9671;
var G__9677 = count__9655_9672;
var G__9678 = (i__9656_9673 + (1));
seq__9653_9670 = G__9675;
chunk__9654_9671 = G__9676;
count__9655_9672 = G__9677;
i__9656_9673 = G__9678;
continue;
} else {
var temp__5720__auto___9679 = cljs.core.seq.call(null,seq__9653_9670);
if(temp__5720__auto___9679){
var seq__9653_9680__$1 = temp__5720__auto___9679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9653_9680__$1)){
var c__4550__auto___9681 = cljs.core.chunk_first.call(null,seq__9653_9680__$1);
var G__9682 = cljs.core.chunk_rest.call(null,seq__9653_9680__$1);
var G__9683 = c__4550__auto___9681;
var G__9684 = cljs.core.count.call(null,c__4550__auto___9681);
var G__9685 = (0);
seq__9653_9670 = G__9682;
chunk__9654_9671 = G__9683;
count__9655_9672 = G__9684;
i__9656_9673 = G__9685;
continue;
} else {
var e_9686 = cljs.core.first.call(null,seq__9653_9680__$1);
if(cljs.core.truth_(e_9686)){
print_comment_lines.call(null,e_9686);
} else {
}


var G__9687 = cljs.core.next.call(null,seq__9653_9680__$1);
var G__9688 = null;
var G__9689 = (0);
var G__9690 = (0);
seq__9653_9670 = G__9687;
chunk__9654_9671 = G__9688;
count__9655_9672 = G__9689;
i__9656_9673 = G__9690;
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
return (function (p1__9692_SHARP_){
return goog.string.startsWith(p1__9692_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__9693){
var map__9694 = p__9693;
var map__9694__$1 = (((((!((map__9694 == null))))?(((((map__9694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9694):map__9694);
var doc = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__9694__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__9696){
var map__9697 = p__9696;
var map__9697__$1 = (((((!((map__9697 == null))))?(((((map__9697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9697):map__9697);
var name = cljs.core.get.call(null,map__9697__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__9697__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__9697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__9699_9723 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__9700_9724 = null;
var count__9701_9725 = (0);
var i__9702_9726 = (0);
while(true){
if((i__9702_9726 < count__9701_9725)){
var vec__9709_9727 = cljs.core._nth.call(null,chunk__9700_9724,i__9702_9726);
var i_9728 = cljs.core.nth.call(null,vec__9709_9727,(0),null);
var param_9729 = cljs.core.nth.call(null,vec__9709_9727,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9729);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__9730 = seq__9699_9723;
var G__9731 = chunk__9700_9724;
var G__9732 = count__9701_9725;
var G__9733 = (i__9702_9726 + (1));
seq__9699_9723 = G__9730;
chunk__9700_9724 = G__9731;
count__9701_9725 = G__9732;
i__9702_9726 = G__9733;
continue;
} else {
var temp__5720__auto___9734 = cljs.core.seq.call(null,seq__9699_9723);
if(temp__5720__auto___9734){
var seq__9699_9735__$1 = temp__5720__auto___9734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9699_9735__$1)){
var c__4550__auto___9736 = cljs.core.chunk_first.call(null,seq__9699_9735__$1);
var G__9737 = cljs.core.chunk_rest.call(null,seq__9699_9735__$1);
var G__9738 = c__4550__auto___9736;
var G__9739 = cljs.core.count.call(null,c__4550__auto___9736);
var G__9740 = (0);
seq__9699_9723 = G__9737;
chunk__9700_9724 = G__9738;
count__9701_9725 = G__9739;
i__9702_9726 = G__9740;
continue;
} else {
var vec__9712_9741 = cljs.core.first.call(null,seq__9699_9735__$1);
var i_9742 = cljs.core.nth.call(null,vec__9712_9741,(0),null);
var param_9743 = cljs.core.nth.call(null,vec__9712_9741,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9743);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__9744 = cljs.core.next.call(null,seq__9699_9735__$1);
var G__9745 = null;
var G__9746 = (0);
var G__9747 = (0);
seq__9699_9723 = G__9744;
chunk__9700_9724 = G__9745;
count__9701_9725 = G__9746;
i__9702_9726 = G__9747;
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

var seq__9715_9748 = cljs.core.seq.call(null,params);
var chunk__9716_9749 = null;
var count__9717_9750 = (0);
var i__9718_9751 = (0);
while(true){
if((i__9718_9751 < count__9717_9750)){
var param_9752 = cljs.core._nth.call(null,chunk__9716_9749,i__9718_9751);
cljs.compiler.emit.call(null,param_9752);

if(cljs.core._EQ_.call(null,param_9752,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9753 = seq__9715_9748;
var G__9754 = chunk__9716_9749;
var G__9755 = count__9717_9750;
var G__9756 = (i__9718_9751 + (1));
seq__9715_9748 = G__9753;
chunk__9716_9749 = G__9754;
count__9717_9750 = G__9755;
i__9718_9751 = G__9756;
continue;
} else {
var temp__5720__auto___9757 = cljs.core.seq.call(null,seq__9715_9748);
if(temp__5720__auto___9757){
var seq__9715_9758__$1 = temp__5720__auto___9757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9715_9758__$1)){
var c__4550__auto___9759 = cljs.core.chunk_first.call(null,seq__9715_9758__$1);
var G__9760 = cljs.core.chunk_rest.call(null,seq__9715_9758__$1);
var G__9761 = c__4550__auto___9759;
var G__9762 = cljs.core.count.call(null,c__4550__auto___9759);
var G__9763 = (0);
seq__9715_9748 = G__9760;
chunk__9716_9749 = G__9761;
count__9717_9750 = G__9762;
i__9718_9751 = G__9763;
continue;
} else {
var param_9764 = cljs.core.first.call(null,seq__9715_9758__$1);
cljs.compiler.emit.call(null,param_9764);

if(cljs.core._EQ_.call(null,param_9764,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9765 = cljs.core.next.call(null,seq__9715_9758__$1);
var G__9766 = null;
var G__9767 = (0);
var G__9768 = (0);
seq__9715_9748 = G__9765;
chunk__9716_9749 = G__9766;
count__9717_9750 = G__9767;
i__9718_9751 = G__9768;
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

var seq__9719_9769 = cljs.core.seq.call(null,params);
var chunk__9720_9770 = null;
var count__9721_9771 = (0);
var i__9722_9772 = (0);
while(true){
if((i__9722_9772 < count__9721_9771)){
var param_9773 = cljs.core._nth.call(null,chunk__9720_9770,i__9722_9772);
cljs.compiler.emit.call(null,param_9773);

if(cljs.core._EQ_.call(null,param_9773,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9774 = seq__9719_9769;
var G__9775 = chunk__9720_9770;
var G__9776 = count__9721_9771;
var G__9777 = (i__9722_9772 + (1));
seq__9719_9769 = G__9774;
chunk__9720_9770 = G__9775;
count__9721_9771 = G__9776;
i__9722_9772 = G__9777;
continue;
} else {
var temp__5720__auto___9778 = cljs.core.seq.call(null,seq__9719_9769);
if(temp__5720__auto___9778){
var seq__9719_9779__$1 = temp__5720__auto___9778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9719_9779__$1)){
var c__4550__auto___9780 = cljs.core.chunk_first.call(null,seq__9719_9779__$1);
var G__9781 = cljs.core.chunk_rest.call(null,seq__9719_9779__$1);
var G__9782 = c__4550__auto___9780;
var G__9783 = cljs.core.count.call(null,c__4550__auto___9780);
var G__9784 = (0);
seq__9719_9769 = G__9781;
chunk__9720_9770 = G__9782;
count__9721_9771 = G__9783;
i__9722_9772 = G__9784;
continue;
} else {
var param_9785 = cljs.core.first.call(null,seq__9719_9779__$1);
cljs.compiler.emit.call(null,param_9785);

if(cljs.core._EQ_.call(null,param_9785,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9786 = cljs.core.next.call(null,seq__9719_9779__$1);
var G__9787 = null;
var G__9788 = (0);
var G__9789 = (0);
seq__9719_9769 = G__9786;
chunk__9720_9770 = G__9787;
count__9721_9771 = G__9788;
i__9722_9772 = G__9789;
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
var seq__9790 = cljs.core.seq.call(null,params);
var chunk__9791 = null;
var count__9792 = (0);
var i__9793 = (0);
while(true){
if((i__9793 < count__9792)){
var param = cljs.core._nth.call(null,chunk__9791,i__9793);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9794 = seq__9790;
var G__9795 = chunk__9791;
var G__9796 = count__9792;
var G__9797 = (i__9793 + (1));
seq__9790 = G__9794;
chunk__9791 = G__9795;
count__9792 = G__9796;
i__9793 = G__9797;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9790);
if(temp__5720__auto__){
var seq__9790__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9790__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9790__$1);
var G__9798 = cljs.core.chunk_rest.call(null,seq__9790__$1);
var G__9799 = c__4550__auto__;
var G__9800 = cljs.core.count.call(null,c__4550__auto__);
var G__9801 = (0);
seq__9790 = G__9798;
chunk__9791 = G__9799;
count__9792 = G__9800;
i__9793 = G__9801;
continue;
} else {
var param = cljs.core.first.call(null,seq__9790__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9802 = cljs.core.next.call(null,seq__9790__$1);
var G__9803 = null;
var G__9804 = (0);
var G__9805 = (0);
seq__9790 = G__9802;
chunk__9791 = G__9803;
count__9792 = G__9804;
i__9793 = G__9805;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9806){
var map__9807 = p__9806;
var map__9807__$1 = (((((!((map__9807 == null))))?(((((map__9807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9807):map__9807);
var expr = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9809){
var map__9810 = p__9809;
var map__9810__$1 = (((((!((map__9810 == null))))?(((((map__9810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9810):map__9810);
var f = map__9810__$1;
var expr = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_9820__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9821 = cljs.compiler.munge.call(null,name_9820__$1);
var delegate_name_9822 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_9821),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_9822," = function (");

var seq__9812_9823 = cljs.core.seq.call(null,params);
var chunk__9813_9824 = null;
var count__9814_9825 = (0);
var i__9815_9826 = (0);
while(true){
if((i__9815_9826 < count__9814_9825)){
var param_9827 = cljs.core._nth.call(null,chunk__9813_9824,i__9815_9826);
cljs.compiler.emit.call(null,param_9827);

if(cljs.core._EQ_.call(null,param_9827,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9828 = seq__9812_9823;
var G__9829 = chunk__9813_9824;
var G__9830 = count__9814_9825;
var G__9831 = (i__9815_9826 + (1));
seq__9812_9823 = G__9828;
chunk__9813_9824 = G__9829;
count__9814_9825 = G__9830;
i__9815_9826 = G__9831;
continue;
} else {
var temp__5720__auto___9832 = cljs.core.seq.call(null,seq__9812_9823);
if(temp__5720__auto___9832){
var seq__9812_9833__$1 = temp__5720__auto___9832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9812_9833__$1)){
var c__4550__auto___9834 = cljs.core.chunk_first.call(null,seq__9812_9833__$1);
var G__9835 = cljs.core.chunk_rest.call(null,seq__9812_9833__$1);
var G__9836 = c__4550__auto___9834;
var G__9837 = cljs.core.count.call(null,c__4550__auto___9834);
var G__9838 = (0);
seq__9812_9823 = G__9835;
chunk__9813_9824 = G__9836;
count__9814_9825 = G__9837;
i__9815_9826 = G__9838;
continue;
} else {
var param_9839 = cljs.core.first.call(null,seq__9812_9833__$1);
cljs.compiler.emit.call(null,param_9839);

if(cljs.core._EQ_.call(null,param_9839,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9840 = cljs.core.next.call(null,seq__9812_9833__$1);
var G__9841 = null;
var G__9842 = (0);
var G__9843 = (0);
seq__9812_9823 = G__9840;
chunk__9813_9824 = G__9841;
count__9814_9825 = G__9842;
i__9815_9826 = G__9843;
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

cljs.compiler.emitln.call(null,"var ",mname_9821," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_9844 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_9844,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_9822,".call(this,");

var seq__9816_9845 = cljs.core.seq.call(null,params);
var chunk__9817_9846 = null;
var count__9818_9847 = (0);
var i__9819_9848 = (0);
while(true){
if((i__9819_9848 < count__9818_9847)){
var param_9849 = cljs.core._nth.call(null,chunk__9817_9846,i__9819_9848);
cljs.compiler.emit.call(null,param_9849);

if(cljs.core._EQ_.call(null,param_9849,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9850 = seq__9816_9845;
var G__9851 = chunk__9817_9846;
var G__9852 = count__9818_9847;
var G__9853 = (i__9819_9848 + (1));
seq__9816_9845 = G__9850;
chunk__9817_9846 = G__9851;
count__9818_9847 = G__9852;
i__9819_9848 = G__9853;
continue;
} else {
var temp__5720__auto___9854 = cljs.core.seq.call(null,seq__9816_9845);
if(temp__5720__auto___9854){
var seq__9816_9855__$1 = temp__5720__auto___9854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9816_9855__$1)){
var c__4550__auto___9856 = cljs.core.chunk_first.call(null,seq__9816_9855__$1);
var G__9857 = cljs.core.chunk_rest.call(null,seq__9816_9855__$1);
var G__9858 = c__4550__auto___9856;
var G__9859 = cljs.core.count.call(null,c__4550__auto___9856);
var G__9860 = (0);
seq__9816_9845 = G__9857;
chunk__9817_9846 = G__9858;
count__9818_9847 = G__9859;
i__9819_9848 = G__9860;
continue;
} else {
var param_9861 = cljs.core.first.call(null,seq__9816_9855__$1);
cljs.compiler.emit.call(null,param_9861);

if(cljs.core._EQ_.call(null,param_9861,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9862 = cljs.core.next.call(null,seq__9816_9855__$1);
var G__9863 = null;
var G__9864 = (0);
var G__9865 = (0);
seq__9816_9845 = G__9862;
chunk__9817_9846 = G__9863;
count__9818_9847 = G__9864;
i__9819_9848 = G__9865;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_9821,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_9821,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_9820__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_9821,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_9822,";");

cljs.compiler.emitln.call(null,"return ",mname_9821,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__9869){
var map__9870 = p__9869;
var map__9870__$1 = (((((!((map__9870 == null))))?(((((map__9870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9870):map__9870);
var variadic = cljs.core.get.call(null,map__9870__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__9870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__9870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__9870__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__9870__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__9870__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__9870__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__9866_SHARP_){
var and__4120__auto__ = p1__9866_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9866_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_9923__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9924 = cljs.compiler.munge.call(null,name_9923__$1);
var maxparams_9925 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_9926 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_9923__$1,mname_9924,maxparams_9925,loop_locals,map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_9924),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_9923__$1,mname_9924,maxparams_9925,loop_locals,map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_9927 = cljs.core.sort_by.call(null,((function (name_9923__$1,mname_9924,maxparams_9925,mmap_9926,loop_locals,map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__9867_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__9867_SHARP_)));
});})(name_9923__$1,mname_9924,maxparams_9925,mmap_9926,loop_locals,map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_9926));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_9924," = null;");

var seq__9872_9928 = cljs.core.seq.call(null,ms_9927);
var chunk__9873_9929 = null;
var count__9874_9930 = (0);
var i__9875_9931 = (0);
while(true){
if((i__9875_9931 < count__9874_9930)){
var vec__9882_9932 = cljs.core._nth.call(null,chunk__9873_9929,i__9875_9931);
var n_9933 = cljs.core.nth.call(null,vec__9882_9932,(0),null);
var meth_9934 = cljs.core.nth.call(null,vec__9882_9932,(1),null);
cljs.compiler.emits.call(null,"var ",n_9933," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9934))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9934);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9934);
}

cljs.compiler.emitln.call(null,";");


var G__9935 = seq__9872_9928;
var G__9936 = chunk__9873_9929;
var G__9937 = count__9874_9930;
var G__9938 = (i__9875_9931 + (1));
seq__9872_9928 = G__9935;
chunk__9873_9929 = G__9936;
count__9874_9930 = G__9937;
i__9875_9931 = G__9938;
continue;
} else {
var temp__5720__auto___9939 = cljs.core.seq.call(null,seq__9872_9928);
if(temp__5720__auto___9939){
var seq__9872_9940__$1 = temp__5720__auto___9939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9872_9940__$1)){
var c__4550__auto___9941 = cljs.core.chunk_first.call(null,seq__9872_9940__$1);
var G__9942 = cljs.core.chunk_rest.call(null,seq__9872_9940__$1);
var G__9943 = c__4550__auto___9941;
var G__9944 = cljs.core.count.call(null,c__4550__auto___9941);
var G__9945 = (0);
seq__9872_9928 = G__9942;
chunk__9873_9929 = G__9943;
count__9874_9930 = G__9944;
i__9875_9931 = G__9945;
continue;
} else {
var vec__9885_9946 = cljs.core.first.call(null,seq__9872_9940__$1);
var n_9947 = cljs.core.nth.call(null,vec__9885_9946,(0),null);
var meth_9948 = cljs.core.nth.call(null,vec__9885_9946,(1),null);
cljs.compiler.emits.call(null,"var ",n_9947," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9948))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9948);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9948);
}

cljs.compiler.emitln.call(null,";");


var G__9949 = cljs.core.next.call(null,seq__9872_9940__$1);
var G__9950 = null;
var G__9951 = (0);
var G__9952 = (0);
seq__9872_9928 = G__9949;
chunk__9873_9929 = G__9950;
count__9874_9930 = G__9951;
i__9875_9931 = G__9952;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_9924," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_9925),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_9925)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_9925));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__9888_9953 = cljs.core.seq.call(null,ms_9927);
var chunk__9889_9954 = null;
var count__9890_9955 = (0);
var i__9891_9956 = (0);
while(true){
if((i__9891_9956 < count__9890_9955)){
var vec__9898_9957 = cljs.core._nth.call(null,chunk__9889_9954,i__9891_9956);
var n_9958 = cljs.core.nth.call(null,vec__9898_9957,(0),null);
var meth_9959 = cljs.core.nth.call(null,vec__9898_9957,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9959))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9960 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9960," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9961 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9960," = new cljs.core.IndexedSeq(",a_9961,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9958,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9925)),(((cljs.core.count.call(null,maxparams_9925) > (1)))?", ":null),restarg_9960,");");
} else {
var pcnt_9962 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9959));
cljs.compiler.emitln.call(null,"case ",pcnt_9962,":");

cljs.compiler.emitln.call(null,"return ",n_9958,".call(this",(((pcnt_9962 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9962,maxparams_9925)),null,(1),null)),(2),null))),");");
}


var G__9963 = seq__9888_9953;
var G__9964 = chunk__9889_9954;
var G__9965 = count__9890_9955;
var G__9966 = (i__9891_9956 + (1));
seq__9888_9953 = G__9963;
chunk__9889_9954 = G__9964;
count__9890_9955 = G__9965;
i__9891_9956 = G__9966;
continue;
} else {
var temp__5720__auto___9967 = cljs.core.seq.call(null,seq__9888_9953);
if(temp__5720__auto___9967){
var seq__9888_9968__$1 = temp__5720__auto___9967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9888_9968__$1)){
var c__4550__auto___9969 = cljs.core.chunk_first.call(null,seq__9888_9968__$1);
var G__9970 = cljs.core.chunk_rest.call(null,seq__9888_9968__$1);
var G__9971 = c__4550__auto___9969;
var G__9972 = cljs.core.count.call(null,c__4550__auto___9969);
var G__9973 = (0);
seq__9888_9953 = G__9970;
chunk__9889_9954 = G__9971;
count__9890_9955 = G__9972;
i__9891_9956 = G__9973;
continue;
} else {
var vec__9901_9974 = cljs.core.first.call(null,seq__9888_9968__$1);
var n_9975 = cljs.core.nth.call(null,vec__9901_9974,(0),null);
var meth_9976 = cljs.core.nth.call(null,vec__9901_9974,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9976))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9977 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9977," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9978 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9977," = new cljs.core.IndexedSeq(",a_9978,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9975,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9925)),(((cljs.core.count.call(null,maxparams_9925) > (1)))?", ":null),restarg_9977,");");
} else {
var pcnt_9979 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9976));
cljs.compiler.emitln.call(null,"case ",pcnt_9979,":");

cljs.compiler.emitln.call(null,"return ",n_9975,".call(this",(((pcnt_9979 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9979,maxparams_9925)),null,(1),null)),(2),null))),");");
}


var G__9980 = cljs.core.next.call(null,seq__9888_9968__$1);
var G__9981 = null;
var G__9982 = (0);
var G__9983 = (0);
seq__9888_9953 = G__9980;
chunk__9889_9954 = G__9981;
count__9890_9955 = G__9982;
i__9891_9956 = G__9983;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_9984 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_9927)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_9984,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_9924,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_9924,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_9923__$1,mname_9924,maxparams_9925,mmap_9926,ms_9927,loop_locals,map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__9868_SHARP_){
var vec__9904 = p1__9868_SHARP_;
var n = cljs.core.nth.call(null,vec__9904,(0),null);
var m = cljs.core.nth.call(null,vec__9904,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_9923__$1,mname_9924,maxparams_9925,mmap_9926,ms_9927,loop_locals,map__9870,map__9870__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_9927),".cljs$lang$applyTo;");
} else {
}

var seq__9907_9985 = cljs.core.seq.call(null,ms_9927);
var chunk__9908_9986 = null;
var count__9909_9987 = (0);
var i__9910_9988 = (0);
while(true){
if((i__9910_9988 < count__9909_9987)){
var vec__9917_9989 = cljs.core._nth.call(null,chunk__9908_9986,i__9910_9988);
var n_9990 = cljs.core.nth.call(null,vec__9917_9989,(0),null);
var meth_9991 = cljs.core.nth.call(null,vec__9917_9989,(1),null);
var c_9992 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9991));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_9991))){
cljs.compiler.emitln.call(null,mname_9924,".cljs$core$IFn$_invoke$arity$variadic = ",n_9990,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9924,".cljs$core$IFn$_invoke$arity$",c_9992," = ",n_9990,";");
}


var G__9993 = seq__9907_9985;
var G__9994 = chunk__9908_9986;
var G__9995 = count__9909_9987;
var G__9996 = (i__9910_9988 + (1));
seq__9907_9985 = G__9993;
chunk__9908_9986 = G__9994;
count__9909_9987 = G__9995;
i__9910_9988 = G__9996;
continue;
} else {
var temp__5720__auto___9997 = cljs.core.seq.call(null,seq__9907_9985);
if(temp__5720__auto___9997){
var seq__9907_9998__$1 = temp__5720__auto___9997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9907_9998__$1)){
var c__4550__auto___9999 = cljs.core.chunk_first.call(null,seq__9907_9998__$1);
var G__10000 = cljs.core.chunk_rest.call(null,seq__9907_9998__$1);
var G__10001 = c__4550__auto___9999;
var G__10002 = cljs.core.count.call(null,c__4550__auto___9999);
var G__10003 = (0);
seq__9907_9985 = G__10000;
chunk__9908_9986 = G__10001;
count__9909_9987 = G__10002;
i__9910_9988 = G__10003;
continue;
} else {
var vec__9920_10004 = cljs.core.first.call(null,seq__9907_9998__$1);
var n_10005 = cljs.core.nth.call(null,vec__9920_10004,(0),null);
var meth_10006 = cljs.core.nth.call(null,vec__9920_10004,(1),null);
var c_10007 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10006));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10006))){
cljs.compiler.emitln.call(null,mname_9924,".cljs$core$IFn$_invoke$arity$variadic = ",n_10005,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9924,".cljs$core$IFn$_invoke$arity$",c_10007," = ",n_10005,";");
}


var G__10008 = cljs.core.next.call(null,seq__9907_9998__$1);
var G__10009 = null;
var G__10010 = (0);
var G__10011 = (0);
seq__9907_9985 = G__10008;
chunk__9908_9986 = G__10009;
count__9909_9987 = G__10010;
i__9910_9988 = G__10011;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_9924,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__10012){
var map__10013 = p__10012;
var map__10013__$1 = (((((!((map__10013 == null))))?(((((map__10013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10013):map__10013);
var statements = cljs.core.get.call(null,map__10013__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__10013__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__10013__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__10015_10019 = cljs.core.seq.call(null,statements);
var chunk__10016_10020 = null;
var count__10017_10021 = (0);
var i__10018_10022 = (0);
while(true){
if((i__10018_10022 < count__10017_10021)){
var s_10023 = cljs.core._nth.call(null,chunk__10016_10020,i__10018_10022);
cljs.compiler.emitln.call(null,s_10023);


var G__10024 = seq__10015_10019;
var G__10025 = chunk__10016_10020;
var G__10026 = count__10017_10021;
var G__10027 = (i__10018_10022 + (1));
seq__10015_10019 = G__10024;
chunk__10016_10020 = G__10025;
count__10017_10021 = G__10026;
i__10018_10022 = G__10027;
continue;
} else {
var temp__5720__auto___10028 = cljs.core.seq.call(null,seq__10015_10019);
if(temp__5720__auto___10028){
var seq__10015_10029__$1 = temp__5720__auto___10028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10015_10029__$1)){
var c__4550__auto___10030 = cljs.core.chunk_first.call(null,seq__10015_10029__$1);
var G__10031 = cljs.core.chunk_rest.call(null,seq__10015_10029__$1);
var G__10032 = c__4550__auto___10030;
var G__10033 = cljs.core.count.call(null,c__4550__auto___10030);
var G__10034 = (0);
seq__10015_10019 = G__10031;
chunk__10016_10020 = G__10032;
count__10017_10021 = G__10033;
i__10018_10022 = G__10034;
continue;
} else {
var s_10035 = cljs.core.first.call(null,seq__10015_10029__$1);
cljs.compiler.emitln.call(null,s_10035);


var G__10036 = cljs.core.next.call(null,seq__10015_10029__$1);
var G__10037 = null;
var G__10038 = (0);
var G__10039 = (0);
seq__10015_10019 = G__10036;
chunk__10016_10020 = G__10037;
count__10017_10021 = G__10038;
i__10018_10022 = G__10039;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__10040){
var map__10041 = p__10040;
var map__10041__$1 = (((((!((map__10041 == null))))?(((((map__10041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10041):map__10041);
var try$ = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__10043,is_loop){
var map__10044 = p__10043;
var map__10044__$1 = (((((!((map__10044 == null))))?(((((map__10044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10044):map__10044);
var expr = cljs.core.get.call(null,map__10044__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__10044__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__10044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__10046_10060 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__10047_10061 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__10046_10060,context,map__10044,map__10044__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__10046_10060,context,map__10044,map__10044__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__10047_10061;

try{var seq__10048_10062 = cljs.core.seq.call(null,bindings);
var chunk__10049_10063 = null;
var count__10050_10064 = (0);
var i__10051_10065 = (0);
while(true){
if((i__10051_10065 < count__10050_10064)){
var map__10056_10066 = cljs.core._nth.call(null,chunk__10049_10063,i__10051_10065);
var map__10056_10067__$1 = (((((!((map__10056_10066 == null))))?(((((map__10056_10066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10056_10066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10056_10066):map__10056_10066);
var binding_10068 = map__10056_10067__$1;
var init_10069 = cljs.core.get.call(null,map__10056_10067__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10068);

cljs.compiler.emitln.call(null," = ",init_10069,";");


var G__10070 = seq__10048_10062;
var G__10071 = chunk__10049_10063;
var G__10072 = count__10050_10064;
var G__10073 = (i__10051_10065 + (1));
seq__10048_10062 = G__10070;
chunk__10049_10063 = G__10071;
count__10050_10064 = G__10072;
i__10051_10065 = G__10073;
continue;
} else {
var temp__5720__auto___10074 = cljs.core.seq.call(null,seq__10048_10062);
if(temp__5720__auto___10074){
var seq__10048_10075__$1 = temp__5720__auto___10074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10048_10075__$1)){
var c__4550__auto___10076 = cljs.core.chunk_first.call(null,seq__10048_10075__$1);
var G__10077 = cljs.core.chunk_rest.call(null,seq__10048_10075__$1);
var G__10078 = c__4550__auto___10076;
var G__10079 = cljs.core.count.call(null,c__4550__auto___10076);
var G__10080 = (0);
seq__10048_10062 = G__10077;
chunk__10049_10063 = G__10078;
count__10050_10064 = G__10079;
i__10051_10065 = G__10080;
continue;
} else {
var map__10058_10081 = cljs.core.first.call(null,seq__10048_10075__$1);
var map__10058_10082__$1 = (((((!((map__10058_10081 == null))))?(((((map__10058_10081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10058_10081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10058_10081):map__10058_10081);
var binding_10083 = map__10058_10082__$1;
var init_10084 = cljs.core.get.call(null,map__10058_10082__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10083);

cljs.compiler.emitln.call(null," = ",init_10084,";");


var G__10085 = cljs.core.next.call(null,seq__10048_10075__$1);
var G__10086 = null;
var G__10087 = (0);
var G__10088 = (0);
seq__10048_10062 = G__10085;
chunk__10049_10063 = G__10086;
count__10050_10064 = G__10087;
i__10051_10065 = G__10088;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__10046_10060;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__10089){
var map__10090 = p__10089;
var map__10090__$1 = (((((!((map__10090 == null))))?(((((map__10090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10090):map__10090);
var frame = cljs.core.get.call(null,map__10090__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__10090__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__10090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___10092 = cljs.core.count.call(null,exprs);
var i_10093 = (0);
while(true){
if((i_10093 < n__4607__auto___10092)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_10093)," = ",exprs.call(null,i_10093),";");

var G__10094 = (i_10093 + (1));
i_10093 = G__10094;
continue;
} else {
}
break;
}

var n__4607__auto___10095 = cljs.core.count.call(null,exprs);
var i_10096 = (0);
while(true){
if((i_10096 < n__4607__auto___10095)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_10096))," = ",temps.call(null,i_10096),";");

var G__10097 = (i_10096 + (1));
i_10096 = G__10097;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__10098){
var map__10099 = p__10098;
var map__10099__$1 = (((((!((map__10099 == null))))?(((((map__10099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10099):map__10099);
var expr = cljs.core.get.call(null,map__10099__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__10099__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__10099__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__10101_10113 = cljs.core.seq.call(null,bindings);
var chunk__10102_10114 = null;
var count__10103_10115 = (0);
var i__10104_10116 = (0);
while(true){
if((i__10104_10116 < count__10103_10115)){
var map__10109_10117 = cljs.core._nth.call(null,chunk__10102_10114,i__10104_10116);
var map__10109_10118__$1 = (((((!((map__10109_10117 == null))))?(((((map__10109_10117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10109_10117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10109_10117):map__10109_10117);
var binding_10119 = map__10109_10118__$1;
var init_10120 = cljs.core.get.call(null,map__10109_10118__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10119)," = ",init_10120,";");


var G__10121 = seq__10101_10113;
var G__10122 = chunk__10102_10114;
var G__10123 = count__10103_10115;
var G__10124 = (i__10104_10116 + (1));
seq__10101_10113 = G__10121;
chunk__10102_10114 = G__10122;
count__10103_10115 = G__10123;
i__10104_10116 = G__10124;
continue;
} else {
var temp__5720__auto___10125 = cljs.core.seq.call(null,seq__10101_10113);
if(temp__5720__auto___10125){
var seq__10101_10126__$1 = temp__5720__auto___10125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10101_10126__$1)){
var c__4550__auto___10127 = cljs.core.chunk_first.call(null,seq__10101_10126__$1);
var G__10128 = cljs.core.chunk_rest.call(null,seq__10101_10126__$1);
var G__10129 = c__4550__auto___10127;
var G__10130 = cljs.core.count.call(null,c__4550__auto___10127);
var G__10131 = (0);
seq__10101_10113 = G__10128;
chunk__10102_10114 = G__10129;
count__10103_10115 = G__10130;
i__10104_10116 = G__10131;
continue;
} else {
var map__10111_10132 = cljs.core.first.call(null,seq__10101_10126__$1);
var map__10111_10133__$1 = (((((!((map__10111_10132 == null))))?(((((map__10111_10132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10111_10132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10111_10132):map__10111_10132);
var binding_10134 = map__10111_10133__$1;
var init_10135 = cljs.core.get.call(null,map__10111_10133__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10134)," = ",init_10135,";");


var G__10136 = cljs.core.next.call(null,seq__10101_10126__$1);
var G__10137 = null;
var G__10138 = (0);
var G__10139 = (0);
seq__10101_10113 = G__10136;
chunk__10102_10114 = G__10137;
count__10103_10115 = G__10138;
i__10104_10116 = G__10139;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__10142){
var map__10143 = p__10142;
var map__10143__$1 = (((((!((map__10143 == null))))?(((((map__10143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10143):map__10143);
var expr = map__10143__$1;
var f = cljs.core.get.call(null,map__10143__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__10143__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__10143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__10145 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env){
return (function (p1__10140_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10140_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env){
return (function (p1__10141_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10141_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10143,map__10143__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__10145,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__10145,(1),null);
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_10148 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_10148,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_10149 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_10149,args)),(((mfa_10149 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_10149,args)),"], 0))");
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
var fprop_10150 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_10150," ? ",f__$1,fprop_10150,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_10150," ? ",f__$1,fprop_10150,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__10151){
var map__10152 = p__10151;
var map__10152__$1 = (((((!((map__10152 == null))))?(((((map__10152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10152):map__10152);
var ctor = cljs.core.get.call(null,map__10152__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__10152__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__10152__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__10154){
var map__10155 = p__10154;
var map__10155__$1 = (((((!((map__10155 == null))))?(((((map__10155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10155):map__10155);
var target = cljs.core.get.call(null,map__10155__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__10155__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__10155__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
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
var map__10157 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__10157__$1 = (((((!((map__10157 == null))))?(((((map__10157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10157):map__10157);
var options = cljs.core.get.call(null,map__10157__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__10157__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__10158 = options;
var map__10158__$1 = (((((!((map__10158 == null))))?(((((map__10158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10158):map__10158);
var target = cljs.core.get.call(null,map__10158__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__10158__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__10159 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__10164 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__10164__$1 = (((((!((map__10164 == null))))?(((((map__10164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10164):map__10164);
var node_libs = cljs.core.get.call(null,map__10164__$1,true);
var libs_to_load = cljs.core.get.call(null,map__10164__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__10159,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__10159,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__10166_10186 = cljs.core.seq.call(null,libs_to_load);
var chunk__10167_10187 = null;
var count__10168_10188 = (0);
var i__10169_10189 = (0);
while(true){
if((i__10169_10189 < count__10168_10188)){
var lib_10190 = cljs.core._nth.call(null,chunk__10167_10187,i__10169_10189);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_10190)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10190),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10190),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10190),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10190),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_10190,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10190),"');");
}

}
}
}


var G__10191 = seq__10166_10186;
var G__10192 = chunk__10167_10187;
var G__10193 = count__10168_10188;
var G__10194 = (i__10169_10189 + (1));
seq__10166_10186 = G__10191;
chunk__10167_10187 = G__10192;
count__10168_10188 = G__10193;
i__10169_10189 = G__10194;
continue;
} else {
var temp__5720__auto___10195 = cljs.core.seq.call(null,seq__10166_10186);
if(temp__5720__auto___10195){
var seq__10166_10196__$1 = temp__5720__auto___10195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10166_10196__$1)){
var c__4550__auto___10197 = cljs.core.chunk_first.call(null,seq__10166_10196__$1);
var G__10198 = cljs.core.chunk_rest.call(null,seq__10166_10196__$1);
var G__10199 = c__4550__auto___10197;
var G__10200 = cljs.core.count.call(null,c__4550__auto___10197);
var G__10201 = (0);
seq__10166_10186 = G__10198;
chunk__10167_10187 = G__10199;
count__10168_10188 = G__10200;
i__10169_10189 = G__10201;
continue;
} else {
var lib_10202 = cljs.core.first.call(null,seq__10166_10196__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_10202)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10202),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10202),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_10202),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10202),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_10202,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_10202),"');");
}

}
}
}


var G__10203 = cljs.core.next.call(null,seq__10166_10196__$1);
var G__10204 = null;
var G__10205 = (0);
var G__10206 = (0);
seq__10166_10186 = G__10203;
chunk__10167_10187 = G__10204;
count__10168_10188 = G__10205;
i__10169_10189 = G__10206;
continue;
}
} else {
}
}
break;
}

var seq__10170_10207 = cljs.core.seq.call(null,node_libs);
var chunk__10171_10208 = null;
var count__10172_10209 = (0);
var i__10173_10210 = (0);
while(true){
if((i__10173_10210 < count__10172_10209)){
var lib_10211 = cljs.core._nth.call(null,chunk__10171_10208,i__10173_10210);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_10211)," = require('",lib_10211,"');");


var G__10212 = seq__10170_10207;
var G__10213 = chunk__10171_10208;
var G__10214 = count__10172_10209;
var G__10215 = (i__10173_10210 + (1));
seq__10170_10207 = G__10212;
chunk__10171_10208 = G__10213;
count__10172_10209 = G__10214;
i__10173_10210 = G__10215;
continue;
} else {
var temp__5720__auto___10216 = cljs.core.seq.call(null,seq__10170_10207);
if(temp__5720__auto___10216){
var seq__10170_10217__$1 = temp__5720__auto___10216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10170_10217__$1)){
var c__4550__auto___10218 = cljs.core.chunk_first.call(null,seq__10170_10217__$1);
var G__10219 = cljs.core.chunk_rest.call(null,seq__10170_10217__$1);
var G__10220 = c__4550__auto___10218;
var G__10221 = cljs.core.count.call(null,c__4550__auto___10218);
var G__10222 = (0);
seq__10170_10207 = G__10219;
chunk__10171_10208 = G__10220;
count__10172_10209 = G__10221;
i__10173_10210 = G__10222;
continue;
} else {
var lib_10223 = cljs.core.first.call(null,seq__10170_10217__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_10223)," = require('",lib_10223,"');");


var G__10224 = cljs.core.next.call(null,seq__10170_10217__$1);
var G__10225 = null;
var G__10226 = (0);
var G__10227 = (0);
seq__10170_10207 = G__10224;
chunk__10171_10208 = G__10225;
count__10172_10209 = G__10226;
i__10173_10210 = G__10227;
continue;
}
} else {
}
}
break;
}

var seq__10174_10228 = cljs.core.seq.call(null,global_exports_libs);
var chunk__10175_10229 = null;
var count__10176_10230 = (0);
var i__10177_10231 = (0);
while(true){
if((i__10177_10231 < count__10176_10230)){
var lib_10232 = cljs.core._nth.call(null,chunk__10175_10229,i__10177_10231);
var map__10182_10233 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_10232));
var map__10182_10234__$1 = (((((!((map__10182_10233 == null))))?(((((map__10182_10233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10182_10233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10182_10233):map__10182_10233);
var global_exports_10235 = cljs.core.get.call(null,map__10182_10234__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_10235,lib_10232);


var G__10236 = seq__10174_10228;
var G__10237 = chunk__10175_10229;
var G__10238 = count__10176_10230;
var G__10239 = (i__10177_10231 + (1));
seq__10174_10228 = G__10236;
chunk__10175_10229 = G__10237;
count__10176_10230 = G__10238;
i__10177_10231 = G__10239;
continue;
} else {
var temp__5720__auto___10240 = cljs.core.seq.call(null,seq__10174_10228);
if(temp__5720__auto___10240){
var seq__10174_10241__$1 = temp__5720__auto___10240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10174_10241__$1)){
var c__4550__auto___10242 = cljs.core.chunk_first.call(null,seq__10174_10241__$1);
var G__10243 = cljs.core.chunk_rest.call(null,seq__10174_10241__$1);
var G__10244 = c__4550__auto___10242;
var G__10245 = cljs.core.count.call(null,c__4550__auto___10242);
var G__10246 = (0);
seq__10174_10228 = G__10243;
chunk__10175_10229 = G__10244;
count__10176_10230 = G__10245;
i__10177_10231 = G__10246;
continue;
} else {
var lib_10247 = cljs.core.first.call(null,seq__10174_10241__$1);
var map__10184_10248 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_10247));
var map__10184_10249__$1 = (((((!((map__10184_10248 == null))))?(((((map__10184_10248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10184_10248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10184_10248):map__10184_10248);
var global_exports_10250 = cljs.core.get.call(null,map__10184_10249__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_10250,lib_10247);


var G__10251 = cljs.core.next.call(null,seq__10174_10241__$1);
var G__10252 = null;
var G__10253 = (0);
var G__10254 = (0);
seq__10174_10228 = G__10251;
chunk__10175_10229 = G__10252;
count__10176_10230 = G__10253;
i__10177_10231 = G__10254;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__10255){
var map__10256 = p__10255;
var map__10256__$1 = (((((!((map__10256 == null))))?(((((map__10256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10256):map__10256);
var name = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__10258){
var map__10259 = p__10258;
var map__10259__$1 = (((((!((map__10259 == null))))?(((((map__10259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10259):map__10259);
var name = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__10261){
var map__10262 = p__10261;
var map__10262__$1 = (((((!((map__10262 == null))))?(((((map__10262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10262):map__10262);
var t = cljs.core.get.call(null,map__10262__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__10262__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__10262__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__10262__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__10262__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__10264_10288 = cljs.core.seq.call(null,protocols);
var chunk__10265_10289 = null;
var count__10266_10290 = (0);
var i__10267_10291 = (0);
while(true){
if((i__10267_10291 < count__10266_10290)){
var protocol_10292 = cljs.core._nth.call(null,chunk__10265_10289,i__10267_10291);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10292)),"}");


var G__10293 = seq__10264_10288;
var G__10294 = chunk__10265_10289;
var G__10295 = count__10266_10290;
var G__10296 = (i__10267_10291 + (1));
seq__10264_10288 = G__10293;
chunk__10265_10289 = G__10294;
count__10266_10290 = G__10295;
i__10267_10291 = G__10296;
continue;
} else {
var temp__5720__auto___10297 = cljs.core.seq.call(null,seq__10264_10288);
if(temp__5720__auto___10297){
var seq__10264_10298__$1 = temp__5720__auto___10297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10264_10298__$1)){
var c__4550__auto___10299 = cljs.core.chunk_first.call(null,seq__10264_10298__$1);
var G__10300 = cljs.core.chunk_rest.call(null,seq__10264_10298__$1);
var G__10301 = c__4550__auto___10299;
var G__10302 = cljs.core.count.call(null,c__4550__auto___10299);
var G__10303 = (0);
seq__10264_10288 = G__10300;
chunk__10265_10289 = G__10301;
count__10266_10290 = G__10302;
i__10267_10291 = G__10303;
continue;
} else {
var protocol_10304 = cljs.core.first.call(null,seq__10264_10298__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10304)),"}");


var G__10305 = cljs.core.next.call(null,seq__10264_10298__$1);
var G__10306 = null;
var G__10307 = (0);
var G__10308 = (0);
seq__10264_10288 = G__10305;
chunk__10265_10289 = G__10306;
count__10266_10290 = G__10307;
i__10267_10291 = G__10308;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__10268_10309 = cljs.core.seq.call(null,fields__$1);
var chunk__10269_10310 = null;
var count__10270_10311 = (0);
var i__10271_10312 = (0);
while(true){
if((i__10271_10312 < count__10270_10311)){
var fld_10313 = cljs.core._nth.call(null,chunk__10269_10310,i__10271_10312);
cljs.compiler.emitln.call(null,"this.",fld_10313," = ",fld_10313,";");


var G__10314 = seq__10268_10309;
var G__10315 = chunk__10269_10310;
var G__10316 = count__10270_10311;
var G__10317 = (i__10271_10312 + (1));
seq__10268_10309 = G__10314;
chunk__10269_10310 = G__10315;
count__10270_10311 = G__10316;
i__10271_10312 = G__10317;
continue;
} else {
var temp__5720__auto___10318 = cljs.core.seq.call(null,seq__10268_10309);
if(temp__5720__auto___10318){
var seq__10268_10319__$1 = temp__5720__auto___10318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10268_10319__$1)){
var c__4550__auto___10320 = cljs.core.chunk_first.call(null,seq__10268_10319__$1);
var G__10321 = cljs.core.chunk_rest.call(null,seq__10268_10319__$1);
var G__10322 = c__4550__auto___10320;
var G__10323 = cljs.core.count.call(null,c__4550__auto___10320);
var G__10324 = (0);
seq__10268_10309 = G__10321;
chunk__10269_10310 = G__10322;
count__10270_10311 = G__10323;
i__10271_10312 = G__10324;
continue;
} else {
var fld_10325 = cljs.core.first.call(null,seq__10268_10319__$1);
cljs.compiler.emitln.call(null,"this.",fld_10325," = ",fld_10325,";");


var G__10326 = cljs.core.next.call(null,seq__10268_10319__$1);
var G__10327 = null;
var G__10328 = (0);
var G__10329 = (0);
seq__10268_10309 = G__10326;
chunk__10269_10310 = G__10327;
count__10270_10311 = G__10328;
i__10271_10312 = G__10329;
continue;
}
} else {
}
}
break;
}

var seq__10272_10330 = cljs.core.seq.call(null,pmasks);
var chunk__10273_10331 = null;
var count__10274_10332 = (0);
var i__10275_10333 = (0);
while(true){
if((i__10275_10333 < count__10274_10332)){
var vec__10282_10334 = cljs.core._nth.call(null,chunk__10273_10331,i__10275_10333);
var pno_10335 = cljs.core.nth.call(null,vec__10282_10334,(0),null);
var pmask_10336 = cljs.core.nth.call(null,vec__10282_10334,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10335,"$ = ",pmask_10336,";");


var G__10337 = seq__10272_10330;
var G__10338 = chunk__10273_10331;
var G__10339 = count__10274_10332;
var G__10340 = (i__10275_10333 + (1));
seq__10272_10330 = G__10337;
chunk__10273_10331 = G__10338;
count__10274_10332 = G__10339;
i__10275_10333 = G__10340;
continue;
} else {
var temp__5720__auto___10341 = cljs.core.seq.call(null,seq__10272_10330);
if(temp__5720__auto___10341){
var seq__10272_10342__$1 = temp__5720__auto___10341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10272_10342__$1)){
var c__4550__auto___10343 = cljs.core.chunk_first.call(null,seq__10272_10342__$1);
var G__10344 = cljs.core.chunk_rest.call(null,seq__10272_10342__$1);
var G__10345 = c__4550__auto___10343;
var G__10346 = cljs.core.count.call(null,c__4550__auto___10343);
var G__10347 = (0);
seq__10272_10330 = G__10344;
chunk__10273_10331 = G__10345;
count__10274_10332 = G__10346;
i__10275_10333 = G__10347;
continue;
} else {
var vec__10285_10348 = cljs.core.first.call(null,seq__10272_10342__$1);
var pno_10349 = cljs.core.nth.call(null,vec__10285_10348,(0),null);
var pmask_10350 = cljs.core.nth.call(null,vec__10285_10348,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10349,"$ = ",pmask_10350,";");


var G__10351 = cljs.core.next.call(null,seq__10272_10342__$1);
var G__10352 = null;
var G__10353 = (0);
var G__10354 = (0);
seq__10272_10330 = G__10351;
chunk__10273_10331 = G__10352;
count__10274_10332 = G__10353;
i__10275_10333 = G__10354;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__10355){
var map__10356 = p__10355;
var map__10356__$1 = (((((!((map__10356 == null))))?(((((map__10356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10356):map__10356);
var t = cljs.core.get.call(null,map__10356__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__10356__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__10356__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__10356__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__10356__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__10358_10382 = cljs.core.seq.call(null,protocols);
var chunk__10359_10383 = null;
var count__10360_10384 = (0);
var i__10361_10385 = (0);
while(true){
if((i__10361_10385 < count__10360_10384)){
var protocol_10386 = cljs.core._nth.call(null,chunk__10359_10383,i__10361_10385);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10386)),"}");


var G__10387 = seq__10358_10382;
var G__10388 = chunk__10359_10383;
var G__10389 = count__10360_10384;
var G__10390 = (i__10361_10385 + (1));
seq__10358_10382 = G__10387;
chunk__10359_10383 = G__10388;
count__10360_10384 = G__10389;
i__10361_10385 = G__10390;
continue;
} else {
var temp__5720__auto___10391 = cljs.core.seq.call(null,seq__10358_10382);
if(temp__5720__auto___10391){
var seq__10358_10392__$1 = temp__5720__auto___10391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10358_10392__$1)){
var c__4550__auto___10393 = cljs.core.chunk_first.call(null,seq__10358_10392__$1);
var G__10394 = cljs.core.chunk_rest.call(null,seq__10358_10392__$1);
var G__10395 = c__4550__auto___10393;
var G__10396 = cljs.core.count.call(null,c__4550__auto___10393);
var G__10397 = (0);
seq__10358_10382 = G__10394;
chunk__10359_10383 = G__10395;
count__10360_10384 = G__10396;
i__10361_10385 = G__10397;
continue;
} else {
var protocol_10398 = cljs.core.first.call(null,seq__10358_10392__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10398)),"}");


var G__10399 = cljs.core.next.call(null,seq__10358_10392__$1);
var G__10400 = null;
var G__10401 = (0);
var G__10402 = (0);
seq__10358_10382 = G__10399;
chunk__10359_10383 = G__10400;
count__10360_10384 = G__10401;
i__10361_10385 = G__10402;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__10362_10403 = cljs.core.seq.call(null,fields__$1);
var chunk__10363_10404 = null;
var count__10364_10405 = (0);
var i__10365_10406 = (0);
while(true){
if((i__10365_10406 < count__10364_10405)){
var fld_10407 = cljs.core._nth.call(null,chunk__10363_10404,i__10365_10406);
cljs.compiler.emitln.call(null,"this.",fld_10407," = ",fld_10407,";");


var G__10408 = seq__10362_10403;
var G__10409 = chunk__10363_10404;
var G__10410 = count__10364_10405;
var G__10411 = (i__10365_10406 + (1));
seq__10362_10403 = G__10408;
chunk__10363_10404 = G__10409;
count__10364_10405 = G__10410;
i__10365_10406 = G__10411;
continue;
} else {
var temp__5720__auto___10412 = cljs.core.seq.call(null,seq__10362_10403);
if(temp__5720__auto___10412){
var seq__10362_10413__$1 = temp__5720__auto___10412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10362_10413__$1)){
var c__4550__auto___10414 = cljs.core.chunk_first.call(null,seq__10362_10413__$1);
var G__10415 = cljs.core.chunk_rest.call(null,seq__10362_10413__$1);
var G__10416 = c__4550__auto___10414;
var G__10417 = cljs.core.count.call(null,c__4550__auto___10414);
var G__10418 = (0);
seq__10362_10403 = G__10415;
chunk__10363_10404 = G__10416;
count__10364_10405 = G__10417;
i__10365_10406 = G__10418;
continue;
} else {
var fld_10419 = cljs.core.first.call(null,seq__10362_10413__$1);
cljs.compiler.emitln.call(null,"this.",fld_10419," = ",fld_10419,";");


var G__10420 = cljs.core.next.call(null,seq__10362_10413__$1);
var G__10421 = null;
var G__10422 = (0);
var G__10423 = (0);
seq__10362_10403 = G__10420;
chunk__10363_10404 = G__10421;
count__10364_10405 = G__10422;
i__10365_10406 = G__10423;
continue;
}
} else {
}
}
break;
}

var seq__10366_10424 = cljs.core.seq.call(null,pmasks);
var chunk__10367_10425 = null;
var count__10368_10426 = (0);
var i__10369_10427 = (0);
while(true){
if((i__10369_10427 < count__10368_10426)){
var vec__10376_10428 = cljs.core._nth.call(null,chunk__10367_10425,i__10369_10427);
var pno_10429 = cljs.core.nth.call(null,vec__10376_10428,(0),null);
var pmask_10430 = cljs.core.nth.call(null,vec__10376_10428,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10429,"$ = ",pmask_10430,";");


var G__10431 = seq__10366_10424;
var G__10432 = chunk__10367_10425;
var G__10433 = count__10368_10426;
var G__10434 = (i__10369_10427 + (1));
seq__10366_10424 = G__10431;
chunk__10367_10425 = G__10432;
count__10368_10426 = G__10433;
i__10369_10427 = G__10434;
continue;
} else {
var temp__5720__auto___10435 = cljs.core.seq.call(null,seq__10366_10424);
if(temp__5720__auto___10435){
var seq__10366_10436__$1 = temp__5720__auto___10435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10366_10436__$1)){
var c__4550__auto___10437 = cljs.core.chunk_first.call(null,seq__10366_10436__$1);
var G__10438 = cljs.core.chunk_rest.call(null,seq__10366_10436__$1);
var G__10439 = c__4550__auto___10437;
var G__10440 = cljs.core.count.call(null,c__4550__auto___10437);
var G__10441 = (0);
seq__10366_10424 = G__10438;
chunk__10367_10425 = G__10439;
count__10368_10426 = G__10440;
i__10369_10427 = G__10441;
continue;
} else {
var vec__10379_10442 = cljs.core.first.call(null,seq__10366_10436__$1);
var pno_10443 = cljs.core.nth.call(null,vec__10379_10442,(0),null);
var pmask_10444 = cljs.core.nth.call(null,vec__10379_10442,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10443,"$ = ",pmask_10444,";");


var G__10445 = cljs.core.next.call(null,seq__10366_10436__$1);
var G__10446 = null;
var G__10447 = (0);
var G__10448 = (0);
seq__10366_10424 = G__10445;
chunk__10367_10425 = G__10446;
count__10368_10426 = G__10447;
i__10369_10427 = G__10448;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__10449){
var map__10450 = p__10449;
var map__10450__$1 = (((((!((map__10450 == null))))?(((((map__10450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10450):map__10450);
var target = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__10452){
var map__10453 = p__10452;
var map__10453__$1 = (((((!((map__10453 == null))))?(((((map__10453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10453):map__10453);
var op = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__9247__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9247__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__10459 = cljs.core.seq.call(null,table);
var chunk__10460 = null;
var count__10461 = (0);
var i__10462 = (0);
while(true){
if((i__10462 < count__10461)){
var vec__10469 = cljs.core._nth.call(null,chunk__10460,i__10462);
var sym = cljs.core.nth.call(null,vec__10469,(0),null);
var value = cljs.core.nth.call(null,vec__10469,(1),null);
var ns_10475 = cljs.core.namespace.call(null,sym);
var name_10476 = cljs.core.name.call(null,sym);
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


var G__10477 = seq__10459;
var G__10478 = chunk__10460;
var G__10479 = count__10461;
var G__10480 = (i__10462 + (1));
seq__10459 = G__10477;
chunk__10460 = G__10478;
count__10461 = G__10479;
i__10462 = G__10480;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10459);
if(temp__5720__auto__){
var seq__10459__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10459__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10459__$1);
var G__10481 = cljs.core.chunk_rest.call(null,seq__10459__$1);
var G__10482 = c__4550__auto__;
var G__10483 = cljs.core.count.call(null,c__4550__auto__);
var G__10484 = (0);
seq__10459 = G__10481;
chunk__10460 = G__10482;
count__10461 = G__10483;
i__10462 = G__10484;
continue;
} else {
var vec__10472 = cljs.core.first.call(null,seq__10459__$1);
var sym = cljs.core.nth.call(null,vec__10472,(0),null);
var value = cljs.core.nth.call(null,vec__10472,(1),null);
var ns_10485 = cljs.core.namespace.call(null,sym);
var name_10486 = cljs.core.name.call(null,sym);
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


var G__10487 = cljs.core.next.call(null,seq__10459__$1);
var G__10488 = null;
var G__10489 = (0);
var G__10490 = (0);
seq__10459 = G__10487;
chunk__10460 = G__10488;
count__10461 = G__10489;
i__10462 = G__10490;
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
var G__10492 = arguments.length;
switch (G__10492) {
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
var k_10497 = cljs.core.first.call(null,ks);
var vec__10493_10498 = cljs.core.conj.call(null,prefix,k_10497);
var top_10499 = cljs.core.nth.call(null,vec__10493_10498,(0),null);
var prefix_SINGLEQUOTE__10500 = vec__10493_10498;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_10497)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__10500) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_10499)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_10499)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__10500)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_10499);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__10500)),";");
}
} else {
}

var m_10501 = cljs.core.get.call(null,externs,k_10497);
if(cljs.core.empty_QMARK_.call(null,m_10501)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__10500,m_10501,top_level,known_externs);
}

var G__10502 = cljs.core.next.call(null,ks);
ks = G__10502;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1610745451215
