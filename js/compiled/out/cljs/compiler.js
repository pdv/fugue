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
var map__29454 = s;
var map__29454__$1 = (((((!((map__29454 == null))))?(((((map__29454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29454):map__29454);
var name = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29457 = info;
var map__29458 = G__29457;
var map__29458__$1 = (((((!((map__29458 == null))))?(((((map__29458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29458):map__29458);
var shadow = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29457__$1 = G__29457;
while(true){
var d__$2 = d__$1;
var map__29462 = G__29457__$1;
var map__29462__$1 = (((((!((map__29462 == null))))?(((((map__29462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);
var shadow__$1 = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29464 = (d__$2 + (1));
var G__29465 = shadow__$1;
d__$1 = G__29464;
G__29457__$1 = G__29465;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29466){
var map__29467 = p__29466;
var map__29467__$1 = (((((!((map__29467 == null))))?(((((map__29467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29467):map__29467);
var name_var = map__29467__$1;
var name = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__29469 = info;
var map__29469__$1 = (((((!((map__29469 == null))))?(((((map__29469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);
var ns = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__29472 = arguments.length;
switch (G__29472) {
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
var G__29474 = cp;
switch (G__29474) {
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
var seq__29476_29480 = cljs.core.seq.call(null,s);
var chunk__29477_29481 = null;
var count__29478_29482 = (0);
var i__29479_29483 = (0);
while(true){
if((i__29479_29483 < count__29478_29482)){
var c_29484 = cljs.core._nth.call(null,chunk__29477_29481,i__29479_29483);
sb.append(cljs.compiler.escape_char.call(null,c_29484));


var G__29485 = seq__29476_29480;
var G__29486 = chunk__29477_29481;
var G__29487 = count__29478_29482;
var G__29488 = (i__29479_29483 + (1));
seq__29476_29480 = G__29485;
chunk__29477_29481 = G__29486;
count__29478_29482 = G__29487;
i__29479_29483 = G__29488;
continue;
} else {
var temp__5720__auto___29489 = cljs.core.seq.call(null,seq__29476_29480);
if(temp__5720__auto___29489){
var seq__29476_29490__$1 = temp__5720__auto___29489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29476_29490__$1)){
var c__4550__auto___29491 = cljs.core.chunk_first.call(null,seq__29476_29490__$1);
var G__29492 = cljs.core.chunk_rest.call(null,seq__29476_29490__$1);
var G__29493 = c__4550__auto___29491;
var G__29494 = cljs.core.count.call(null,c__4550__auto___29491);
var G__29495 = (0);
seq__29476_29480 = G__29492;
chunk__29477_29481 = G__29493;
count__29478_29482 = G__29494;
i__29479_29483 = G__29495;
continue;
} else {
var c_29496 = cljs.core.first.call(null,seq__29476_29490__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29496));


var G__29497 = cljs.core.next.call(null,seq__29476_29490__$1);
var G__29498 = null;
var G__29499 = (0);
var G__29500 = (0);
seq__29476_29480 = G__29497;
chunk__29477_29481 = G__29498;
count__29478_29482 = G__29499;
i__29479_29483 = G__29500;
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
var map__29501_29506 = ast;
var map__29501_29507__$1 = (((((!((map__29501_29506 == null))))?(((((map__29501_29506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29501_29506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29501_29506):map__29501_29506);
var env_29508 = cljs.core.get.call(null,map__29501_29507__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29508))){
var map__29503_29509 = env_29508;
var map__29503_29510__$1 = (((((!((map__29503_29509 == null))))?(((((map__29503_29509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29503_29509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29503_29509):map__29503_29509);
var line_29511 = cljs.core.get.call(null,map__29503_29510__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29512 = cljs.core.get.call(null,map__29503_29510__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29503_29509,map__29503_29510__$1,line_29511,column_29512,map__29501_29506,map__29501_29507__$1,env_29508){
return (function (m){
var minfo = (function (){var G__29505 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__29505,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__29505;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29511 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29503_29509,map__29503_29510__$1,line_29511,column_29512,map__29501_29506,map__29501_29507__$1,env_29508){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29512)?(column_29512 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29503_29509,map__29503_29510__$1,line_29511,column_29512,map__29501_29506,map__29501_29507__$1,env_29508){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29503_29509,map__29503_29510__$1,line_29511,column_29512,map__29501_29506,map__29501_29507__$1,env_29508))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29503_29509,map__29503_29510__$1,line_29511,column_29512,map__29501_29506,map__29501_29507__$1,env_29508))
,cljs.core.sorted_map.call(null)));
});})(map__29503_29509,map__29503_29510__$1,line_29511,column_29512,map__29501_29506,map__29501_29507__$1,env_29508))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__29521 = arguments.length;
switch (G__29521) {
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
var len__4730__auto___29528 = arguments.length;
var i__4731__auto___29529 = (0);
while(true){
if((i__4731__auto___29529 < len__4730__auto___29528)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29529]));

var G__29530 = (i__4731__auto___29529 + (1));
i__4731__auto___29529 = G__29530;
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
var s_29531 = (function (){var G__29522 = a;
if((!(typeof a === 'string'))){
return G__29522.toString();
} else {
return G__29522;
}
})();
var temp__5724__auto___29532 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___29532 == null)){
} else {
var sm_data_29533 = temp__5724__auto___29532;
cljs.core.swap_BANG_.call(null,sm_data_29533,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_29533,temp__5724__auto___29532,s_29531){
return (function (p1__29513_SHARP_){
return (p1__29513_SHARP_ + s_29531.length);
});})(sm_data_29533,temp__5724__auto___29532,s_29531))
);
}

cljs.core.print.call(null,s_29531);

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

var seq__29523 = cljs.core.seq.call(null,xs);
var chunk__29524 = null;
var count__29525 = (0);
var i__29526 = (0);
while(true){
if((i__29526 < count__29525)){
var x = cljs.core._nth.call(null,chunk__29524,i__29526);
cljs.compiler.emits.call(null,x);


var G__29534 = seq__29523;
var G__29535 = chunk__29524;
var G__29536 = count__29525;
var G__29537 = (i__29526 + (1));
seq__29523 = G__29534;
chunk__29524 = G__29535;
count__29525 = G__29536;
i__29526 = G__29537;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29523);
if(temp__5720__auto__){
var seq__29523__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29523__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29523__$1);
var G__29538 = cljs.core.chunk_rest.call(null,seq__29523__$1);
var G__29539 = c__4550__auto__;
var G__29540 = cljs.core.count.call(null,c__4550__auto__);
var G__29541 = (0);
seq__29523 = G__29538;
chunk__29524 = G__29539;
count__29525 = G__29540;
i__29526 = G__29541;
continue;
} else {
var x = cljs.core.first.call(null,seq__29523__$1);
cljs.compiler.emits.call(null,x);


var G__29542 = cljs.core.next.call(null,seq__29523__$1);
var G__29543 = null;
var G__29544 = (0);
var G__29545 = (0);
seq__29523 = G__29542;
chunk__29524 = G__29543;
count__29525 = G__29544;
i__29526 = G__29545;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq29515){
var G__29516 = cljs.core.first.call(null,seq29515);
var seq29515__$1 = cljs.core.next.call(null,seq29515);
var G__29517 = cljs.core.first.call(null,seq29515__$1);
var seq29515__$2 = cljs.core.next.call(null,seq29515__$1);
var G__29518 = cljs.core.first.call(null,seq29515__$2);
var seq29515__$3 = cljs.core.next.call(null,seq29515__$2);
var G__29519 = cljs.core.first.call(null,seq29515__$3);
var seq29515__$4 = cljs.core.next.call(null,seq29515__$3);
var G__29520 = cljs.core.first.call(null,seq29515__$4);
var seq29515__$5 = cljs.core.next.call(null,seq29515__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29516,G__29517,G__29518,G__29519,G__29520,seq29515__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29546){
var map__29547 = p__29546;
var map__29547__$1 = (((((!((map__29547 == null))))?(((((map__29547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29547):map__29547);
var m = map__29547__$1;
var gen_line = cljs.core.get.call(null,map__29547__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__29556 = arguments.length;
switch (G__29556) {
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
var len__4730__auto___29562 = arguments.length;
var i__4731__auto___29563 = (0);
while(true){
if((i__4731__auto___29563 < len__4730__auto___29562)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29563]));

var G__29564 = (i__4731__auto___29563 + (1));
i__4731__auto___29563 = G__29564;
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

var seq__29557_29565 = cljs.core.seq.call(null,xs);
var chunk__29558_29566 = null;
var count__29559_29567 = (0);
var i__29560_29568 = (0);
while(true){
if((i__29560_29568 < count__29559_29567)){
var x_29569 = cljs.core._nth.call(null,chunk__29558_29566,i__29560_29568);
cljs.compiler.emits.call(null,x_29569);


var G__29570 = seq__29557_29565;
var G__29571 = chunk__29558_29566;
var G__29572 = count__29559_29567;
var G__29573 = (i__29560_29568 + (1));
seq__29557_29565 = G__29570;
chunk__29558_29566 = G__29571;
count__29559_29567 = G__29572;
i__29560_29568 = G__29573;
continue;
} else {
var temp__5720__auto___29574 = cljs.core.seq.call(null,seq__29557_29565);
if(temp__5720__auto___29574){
var seq__29557_29575__$1 = temp__5720__auto___29574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29557_29575__$1)){
var c__4550__auto___29576 = cljs.core.chunk_first.call(null,seq__29557_29575__$1);
var G__29577 = cljs.core.chunk_rest.call(null,seq__29557_29575__$1);
var G__29578 = c__4550__auto___29576;
var G__29579 = cljs.core.count.call(null,c__4550__auto___29576);
var G__29580 = (0);
seq__29557_29565 = G__29577;
chunk__29558_29566 = G__29578;
count__29559_29567 = G__29579;
i__29560_29568 = G__29580;
continue;
} else {
var x_29581 = cljs.core.first.call(null,seq__29557_29575__$1);
cljs.compiler.emits.call(null,x_29581);


var G__29582 = cljs.core.next.call(null,seq__29557_29575__$1);
var G__29583 = null;
var G__29584 = (0);
var G__29585 = (0);
seq__29557_29565 = G__29582;
chunk__29558_29566 = G__29583;
count__29559_29567 = G__29584;
i__29560_29568 = G__29585;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29550){
var G__29551 = cljs.core.first.call(null,seq29550);
var seq29550__$1 = cljs.core.next.call(null,seq29550);
var G__29552 = cljs.core.first.call(null,seq29550__$1);
var seq29550__$2 = cljs.core.next.call(null,seq29550__$1);
var G__29553 = cljs.core.first.call(null,seq29550__$2);
var seq29550__$3 = cljs.core.next.call(null,seq29550__$2);
var G__29554 = cljs.core.first.call(null,seq29550__$3);
var seq29550__$4 = cljs.core.next.call(null,seq29550__$3);
var G__29555 = cljs.core.first.call(null,seq29550__$4);
var seq29550__$5 = cljs.core.next.call(null,seq29550__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29551,G__29552,G__29553,G__29554,G__29555,seq29550__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29586_29590 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29587_29591 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29588_29592 = true;
var _STAR_print_fn_STAR__temp_val__29589_29593 = ((function (_STAR_print_newline_STAR__orig_val__29586_29590,_STAR_print_fn_STAR__orig_val__29587_29591,_STAR_print_newline_STAR__temp_val__29588_29592,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29586_29590,_STAR_print_fn_STAR__orig_val__29587_29591,_STAR_print_newline_STAR__temp_val__29588_29592,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29588_29592;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29589_29593;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29587_29591;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29586_29590;
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
var vec__29594 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__29594,(0),null);
var name = cljs.core.nth.call(null,vec__29594,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__29594,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__29594,ns,name))
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
var vec__29597 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__29597,(0),null);
var flags = cljs.core.nth.call(null,vec__29597,(1),null);
var pattern = cljs.core.nth.call(null,vec__29597,(2),null);
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
return (function (p1__29600_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__29600_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__29602){
var map__29603 = p__29602;
var map__29603__$1 = (((((!((map__29603 == null))))?(((((map__29603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29603):map__29603);
var ast = map__29603__$1;
var info = cljs.core.get.call(null,map__29603__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29603__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29603__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__29605 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__29605__$1 = (((((!((map__29605 == null))))?(((((map__29605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29605):map__29605);
var cenv = map__29605__$1;
var options = cljs.core.get.call(null,map__29605__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__29607 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__29607,cljs.analyzer.es5_allowed);
} else {
return G__29607;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__29608 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29608,reserved);
} else {
return G__29608;
}
})();
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__29609_29610 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__29609_29611__$1 = (((G__29609_29610 instanceof cljs.core.Keyword))?G__29609_29610.fqn:null);
switch (G__29609_29611__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__29613){
var map__29614 = p__29613;
var map__29614__$1 = (((((!((map__29614 == null))))?(((((map__29614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29614):map__29614);
var arg = map__29614__$1;
var env = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29616 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29616__$1 = (((((!((map__29616 == null))))?(((((map__29616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29616):map__29616);
var name = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__29618){
var map__29619 = p__29618;
var map__29619__$1 = (((((!((map__29619 == null))))?(((((map__29619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29619):map__29619);
var expr = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__29621_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29621_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29622){
var map__29623 = p__29622;
var map__29623__$1 = (((((!((map__29623 == null))))?(((((map__29623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29623):map__29623);
var env = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29625){
var map__29626 = p__29625;
var map__29626__$1 = (((((!((map__29626 == null))))?(((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);
var items = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__29628_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29628_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29629){
var map__29630 = p__29629;
var map__29630__$1 = (((((!((map__29630 == null))))?(((((map__29630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29630):map__29630);
var items = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___29654 = cljs.core.seq.call(null,items);
if(temp__5720__auto___29654){
var items_29655__$1 = temp__5720__auto___29654;
var vec__29632_29656 = items_29655__$1;
var seq__29633_29657 = cljs.core.seq.call(null,vec__29632_29656);
var first__29634_29658 = cljs.core.first.call(null,seq__29633_29657);
var seq__29633_29659__$1 = cljs.core.next.call(null,seq__29633_29657);
var vec__29635_29660 = first__29634_29658;
var k_29661 = cljs.core.nth.call(null,vec__29635_29660,(0),null);
var v_29662 = cljs.core.nth.call(null,vec__29635_29660,(1),null);
var r_29663 = seq__29633_29659__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29661),"\": ",emit_js_object_val.call(null,v_29662));

var seq__29638_29664 = cljs.core.seq.call(null,r_29663);
var chunk__29639_29665 = null;
var count__29640_29666 = (0);
var i__29641_29667 = (0);
while(true){
if((i__29641_29667 < count__29640_29666)){
var vec__29648_29668 = cljs.core._nth.call(null,chunk__29639_29665,i__29641_29667);
var k_29669__$1 = cljs.core.nth.call(null,vec__29648_29668,(0),null);
var v_29670__$1 = cljs.core.nth.call(null,vec__29648_29668,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29669__$1),"\": ",emit_js_object_val.call(null,v_29670__$1));


var G__29671 = seq__29638_29664;
var G__29672 = chunk__29639_29665;
var G__29673 = count__29640_29666;
var G__29674 = (i__29641_29667 + (1));
seq__29638_29664 = G__29671;
chunk__29639_29665 = G__29672;
count__29640_29666 = G__29673;
i__29641_29667 = G__29674;
continue;
} else {
var temp__5720__auto___29675__$1 = cljs.core.seq.call(null,seq__29638_29664);
if(temp__5720__auto___29675__$1){
var seq__29638_29676__$1 = temp__5720__auto___29675__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29638_29676__$1)){
var c__4550__auto___29677 = cljs.core.chunk_first.call(null,seq__29638_29676__$1);
var G__29678 = cljs.core.chunk_rest.call(null,seq__29638_29676__$1);
var G__29679 = c__4550__auto___29677;
var G__29680 = cljs.core.count.call(null,c__4550__auto___29677);
var G__29681 = (0);
seq__29638_29664 = G__29678;
chunk__29639_29665 = G__29679;
count__29640_29666 = G__29680;
i__29641_29667 = G__29681;
continue;
} else {
var vec__29651_29682 = cljs.core.first.call(null,seq__29638_29676__$1);
var k_29683__$1 = cljs.core.nth.call(null,vec__29651_29682,(0),null);
var v_29684__$1 = cljs.core.nth.call(null,vec__29651_29682,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29683__$1),"\": ",emit_js_object_val.call(null,v_29684__$1));


var G__29685 = cljs.core.next.call(null,seq__29638_29676__$1);
var G__29686 = null;
var G__29687 = (0);
var G__29688 = (0);
seq__29638_29664 = G__29685;
chunk__29639_29665 = G__29686;
count__29640_29666 = G__29687;
i__29641_29667 = G__29688;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__29689){
var map__29690 = p__29689;
var map__29690__$1 = (((((!((map__29690 == null))))?(((((map__29690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);
var keys = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__29692){
var map__29693 = p__29692;
var map__29693__$1 = (((((!((map__29693 == null))))?(((((map__29693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29693):map__29693);
var items = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__29695){
var map__29696 = p__29695;
var map__29696__$1 = (((((!((map__29696 == null))))?(((((map__29696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29696):map__29696);
var expr = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__29698){
var map__29699 = p__29698;
var map__29699__$1 = (((((!((map__29699 == null))))?(((((map__29699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29699):map__29699);
var form = cljs.core.get.call(null,map__29699__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__29699__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29701 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29701__$1 = (((((!((map__29701 == null))))?(((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var op = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__29703 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29703__$1 = (((((!((map__29703 == null))))?(((((map__29703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29703):map__29703);
var op = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29705){
var map__29706 = p__29705;
var map__29706__$1 = (((((!((map__29706 == null))))?(((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);
var test = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__29708){
var map__29709 = p__29708;
var map__29709__$1 = (((((!((map__29709 == null))))?(((((map__29709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29709):map__29709);
var v = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29711_29747 = cljs.core.seq.call(null,nodes);
var chunk__29712_29748 = null;
var count__29713_29749 = (0);
var i__29714_29750 = (0);
while(true){
if((i__29714_29750 < count__29713_29749)){
var map__29731_29751 = cljs.core._nth.call(null,chunk__29712_29748,i__29714_29750);
var map__29731_29752__$1 = (((((!((map__29731_29751 == null))))?(((((map__29731_29751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29731_29751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29731_29751):map__29731_29751);
var ts_29753 = cljs.core.get.call(null,map__29731_29752__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29732_29754 = cljs.core.get.call(null,map__29731_29752__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29732_29755__$1 = (((((!((map__29732_29754 == null))))?(((((map__29732_29754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29732_29754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29732_29754):map__29732_29754);
var then_29756 = cljs.core.get.call(null,map__29732_29755__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29735_29757 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29753));
var chunk__29736_29758 = null;
var count__29737_29759 = (0);
var i__29738_29760 = (0);
while(true){
if((i__29738_29760 < count__29737_29759)){
var test_29761 = cljs.core._nth.call(null,chunk__29736_29758,i__29738_29760);
cljs.compiler.emitln.call(null,"case ",test_29761,":");


var G__29762 = seq__29735_29757;
var G__29763 = chunk__29736_29758;
var G__29764 = count__29737_29759;
var G__29765 = (i__29738_29760 + (1));
seq__29735_29757 = G__29762;
chunk__29736_29758 = G__29763;
count__29737_29759 = G__29764;
i__29738_29760 = G__29765;
continue;
} else {
var temp__5720__auto___29766 = cljs.core.seq.call(null,seq__29735_29757);
if(temp__5720__auto___29766){
var seq__29735_29767__$1 = temp__5720__auto___29766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29735_29767__$1)){
var c__4550__auto___29768 = cljs.core.chunk_first.call(null,seq__29735_29767__$1);
var G__29769 = cljs.core.chunk_rest.call(null,seq__29735_29767__$1);
var G__29770 = c__4550__auto___29768;
var G__29771 = cljs.core.count.call(null,c__4550__auto___29768);
var G__29772 = (0);
seq__29735_29757 = G__29769;
chunk__29736_29758 = G__29770;
count__29737_29759 = G__29771;
i__29738_29760 = G__29772;
continue;
} else {
var test_29773 = cljs.core.first.call(null,seq__29735_29767__$1);
cljs.compiler.emitln.call(null,"case ",test_29773,":");


var G__29774 = cljs.core.next.call(null,seq__29735_29767__$1);
var G__29775 = null;
var G__29776 = (0);
var G__29777 = (0);
seq__29735_29757 = G__29774;
chunk__29736_29758 = G__29775;
count__29737_29759 = G__29776;
i__29738_29760 = G__29777;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29756);
} else {
cljs.compiler.emitln.call(null,then_29756);
}

cljs.compiler.emitln.call(null,"break;");


var G__29778 = seq__29711_29747;
var G__29779 = chunk__29712_29748;
var G__29780 = count__29713_29749;
var G__29781 = (i__29714_29750 + (1));
seq__29711_29747 = G__29778;
chunk__29712_29748 = G__29779;
count__29713_29749 = G__29780;
i__29714_29750 = G__29781;
continue;
} else {
var temp__5720__auto___29782 = cljs.core.seq.call(null,seq__29711_29747);
if(temp__5720__auto___29782){
var seq__29711_29783__$1 = temp__5720__auto___29782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29711_29783__$1)){
var c__4550__auto___29784 = cljs.core.chunk_first.call(null,seq__29711_29783__$1);
var G__29785 = cljs.core.chunk_rest.call(null,seq__29711_29783__$1);
var G__29786 = c__4550__auto___29784;
var G__29787 = cljs.core.count.call(null,c__4550__auto___29784);
var G__29788 = (0);
seq__29711_29747 = G__29785;
chunk__29712_29748 = G__29786;
count__29713_29749 = G__29787;
i__29714_29750 = G__29788;
continue;
} else {
var map__29739_29789 = cljs.core.first.call(null,seq__29711_29783__$1);
var map__29739_29790__$1 = (((((!((map__29739_29789 == null))))?(((((map__29739_29789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29739_29789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29739_29789):map__29739_29789);
var ts_29791 = cljs.core.get.call(null,map__29739_29790__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29740_29792 = cljs.core.get.call(null,map__29739_29790__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29740_29793__$1 = (((((!((map__29740_29792 == null))))?(((((map__29740_29792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29740_29792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29740_29792):map__29740_29792);
var then_29794 = cljs.core.get.call(null,map__29740_29793__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29743_29795 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29791));
var chunk__29744_29796 = null;
var count__29745_29797 = (0);
var i__29746_29798 = (0);
while(true){
if((i__29746_29798 < count__29745_29797)){
var test_29799 = cljs.core._nth.call(null,chunk__29744_29796,i__29746_29798);
cljs.compiler.emitln.call(null,"case ",test_29799,":");


var G__29800 = seq__29743_29795;
var G__29801 = chunk__29744_29796;
var G__29802 = count__29745_29797;
var G__29803 = (i__29746_29798 + (1));
seq__29743_29795 = G__29800;
chunk__29744_29796 = G__29801;
count__29745_29797 = G__29802;
i__29746_29798 = G__29803;
continue;
} else {
var temp__5720__auto___29804__$1 = cljs.core.seq.call(null,seq__29743_29795);
if(temp__5720__auto___29804__$1){
var seq__29743_29805__$1 = temp__5720__auto___29804__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29743_29805__$1)){
var c__4550__auto___29806 = cljs.core.chunk_first.call(null,seq__29743_29805__$1);
var G__29807 = cljs.core.chunk_rest.call(null,seq__29743_29805__$1);
var G__29808 = c__4550__auto___29806;
var G__29809 = cljs.core.count.call(null,c__4550__auto___29806);
var G__29810 = (0);
seq__29743_29795 = G__29807;
chunk__29744_29796 = G__29808;
count__29745_29797 = G__29809;
i__29746_29798 = G__29810;
continue;
} else {
var test_29811 = cljs.core.first.call(null,seq__29743_29805__$1);
cljs.compiler.emitln.call(null,"case ",test_29811,":");


var G__29812 = cljs.core.next.call(null,seq__29743_29805__$1);
var G__29813 = null;
var G__29814 = (0);
var G__29815 = (0);
seq__29743_29795 = G__29812;
chunk__29744_29796 = G__29813;
count__29745_29797 = G__29814;
i__29746_29798 = G__29815;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29794);
} else {
cljs.compiler.emitln.call(null,then_29794);
}

cljs.compiler.emitln.call(null,"break;");


var G__29816 = cljs.core.next.call(null,seq__29711_29783__$1);
var G__29817 = null;
var G__29818 = (0);
var G__29819 = (0);
seq__29711_29747 = G__29816;
chunk__29712_29748 = G__29817;
count__29713_29749 = G__29818;
i__29714_29750 = G__29819;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29820){
var map__29821 = p__29820;
var map__29821__$1 = (((((!((map__29821 == null))))?(((((map__29821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29821):map__29821);
var throw$ = cljs.core.get.call(null,map__29821__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__29821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__29824 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__29824,(0),null);
var rstr = cljs.core.nth.call(null,vec__29824,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__29824,fstr,rstr,ret_t,axstr){
return (function (p1__29823_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29823_SHARP_);
});})(idx,vec__29824,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__29827 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29827,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29827;
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
return (function (p1__29828_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29828_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__29829 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29830 = cljs.core.seq.call(null,vec__29829);
var first__29831 = cljs.core.first.call(null,seq__29830);
var seq__29830__$1 = cljs.core.next.call(null,seq__29830);
var p = first__29831;
var first__29831__$1 = cljs.core.first.call(null,seq__29830__$1);
var seq__29830__$2 = cljs.core.next.call(null,seq__29830__$1);
var ts = first__29831__$1;
var first__29831__$2 = cljs.core.first.call(null,seq__29830__$2);
var seq__29830__$3 = cljs.core.next.call(null,seq__29830__$2);
var n = first__29831__$2;
var xs = seq__29830__$3;
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
var vec__29832 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29833 = cljs.core.seq.call(null,vec__29832);
var first__29834 = cljs.core.first.call(null,seq__29833);
var seq__29833__$1 = cljs.core.next.call(null,seq__29833);
var p = first__29834;
var first__29834__$1 = cljs.core.first.call(null,seq__29833__$1);
var seq__29833__$2 = cljs.core.next.call(null,seq__29833__$1);
var ts = first__29834__$1;
var xs = seq__29833__$2;
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
var G__29837 = arguments.length;
switch (G__29837) {
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
var vec__29845 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__29835_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__29835_SHARP_);
} else {
return p1__29835_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__29846 = cljs.core.seq.call(null,vec__29845);
var first__29847 = cljs.core.first.call(null,seq__29846);
var seq__29846__$1 = cljs.core.next.call(null,seq__29846);
var x = first__29847;
var ys = seq__29846__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__29848 = cljs.core.seq.call(null,ys);
var chunk__29849 = null;
var count__29850 = (0);
var i__29851 = (0);
while(true){
if((i__29851 < count__29850)){
var next_line = cljs.core._nth.call(null,chunk__29849,i__29851);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29857 = seq__29848;
var G__29858 = chunk__29849;
var G__29859 = count__29850;
var G__29860 = (i__29851 + (1));
seq__29848 = G__29857;
chunk__29849 = G__29858;
count__29850 = G__29859;
i__29851 = G__29860;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29848);
if(temp__5720__auto__){
var seq__29848__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29848__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29848__$1);
var G__29861 = cljs.core.chunk_rest.call(null,seq__29848__$1);
var G__29862 = c__4550__auto__;
var G__29863 = cljs.core.count.call(null,c__4550__auto__);
var G__29864 = (0);
seq__29848 = G__29861;
chunk__29849 = G__29862;
count__29850 = G__29863;
i__29851 = G__29864;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__29848__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29865 = cljs.core.next.call(null,seq__29848__$1);
var G__29866 = null;
var G__29867 = (0);
var G__29868 = (0);
seq__29848 = G__29865;
chunk__29849 = G__29866;
count__29850 = G__29867;
i__29851 = G__29868;
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

var seq__29852_29869 = cljs.core.seq.call(null,docs__$2);
var chunk__29853_29870 = null;
var count__29854_29871 = (0);
var i__29855_29872 = (0);
while(true){
if((i__29855_29872 < count__29854_29871)){
var e_29873 = cljs.core._nth.call(null,chunk__29853_29870,i__29855_29872);
if(cljs.core.truth_(e_29873)){
print_comment_lines.call(null,e_29873);
} else {
}


var G__29874 = seq__29852_29869;
var G__29875 = chunk__29853_29870;
var G__29876 = count__29854_29871;
var G__29877 = (i__29855_29872 + (1));
seq__29852_29869 = G__29874;
chunk__29853_29870 = G__29875;
count__29854_29871 = G__29876;
i__29855_29872 = G__29877;
continue;
} else {
var temp__5720__auto___29878 = cljs.core.seq.call(null,seq__29852_29869);
if(temp__5720__auto___29878){
var seq__29852_29879__$1 = temp__5720__auto___29878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29852_29879__$1)){
var c__4550__auto___29880 = cljs.core.chunk_first.call(null,seq__29852_29879__$1);
var G__29881 = cljs.core.chunk_rest.call(null,seq__29852_29879__$1);
var G__29882 = c__4550__auto___29880;
var G__29883 = cljs.core.count.call(null,c__4550__auto___29880);
var G__29884 = (0);
seq__29852_29869 = G__29881;
chunk__29853_29870 = G__29882;
count__29854_29871 = G__29883;
i__29855_29872 = G__29884;
continue;
} else {
var e_29885 = cljs.core.first.call(null,seq__29852_29879__$1);
if(cljs.core.truth_(e_29885)){
print_comment_lines.call(null,e_29885);
} else {
}


var G__29886 = cljs.core.next.call(null,seq__29852_29879__$1);
var G__29887 = null;
var G__29888 = (0);
var G__29889 = (0);
seq__29852_29869 = G__29886;
chunk__29853_29870 = G__29887;
count__29854_29871 = G__29888;
i__29855_29872 = G__29889;
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
return (function (p1__29891_SHARP_){
return goog.string.startsWith(p1__29891_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29892){
var map__29893 = p__29892;
var map__29893__$1 = (((((!((map__29893 == null))))?(((((map__29893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29893):map__29893);
var doc = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29895){
var map__29896 = p__29895;
var map__29896__$1 = (((((!((map__29896 == null))))?(((((map__29896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29896):map__29896);
var name = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__29898_29922 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__29899_29923 = null;
var count__29900_29924 = (0);
var i__29901_29925 = (0);
while(true){
if((i__29901_29925 < count__29900_29924)){
var vec__29908_29926 = cljs.core._nth.call(null,chunk__29899_29923,i__29901_29925);
var i_29927 = cljs.core.nth.call(null,vec__29908_29926,(0),null);
var param_29928 = cljs.core.nth.call(null,vec__29908_29926,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29928);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29929 = seq__29898_29922;
var G__29930 = chunk__29899_29923;
var G__29931 = count__29900_29924;
var G__29932 = (i__29901_29925 + (1));
seq__29898_29922 = G__29929;
chunk__29899_29923 = G__29930;
count__29900_29924 = G__29931;
i__29901_29925 = G__29932;
continue;
} else {
var temp__5720__auto___29933 = cljs.core.seq.call(null,seq__29898_29922);
if(temp__5720__auto___29933){
var seq__29898_29934__$1 = temp__5720__auto___29933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29898_29934__$1)){
var c__4550__auto___29935 = cljs.core.chunk_first.call(null,seq__29898_29934__$1);
var G__29936 = cljs.core.chunk_rest.call(null,seq__29898_29934__$1);
var G__29937 = c__4550__auto___29935;
var G__29938 = cljs.core.count.call(null,c__4550__auto___29935);
var G__29939 = (0);
seq__29898_29922 = G__29936;
chunk__29899_29923 = G__29937;
count__29900_29924 = G__29938;
i__29901_29925 = G__29939;
continue;
} else {
var vec__29911_29940 = cljs.core.first.call(null,seq__29898_29934__$1);
var i_29941 = cljs.core.nth.call(null,vec__29911_29940,(0),null);
var param_29942 = cljs.core.nth.call(null,vec__29911_29940,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29942);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29943 = cljs.core.next.call(null,seq__29898_29934__$1);
var G__29944 = null;
var G__29945 = (0);
var G__29946 = (0);
seq__29898_29922 = G__29943;
chunk__29899_29923 = G__29944;
count__29900_29924 = G__29945;
i__29901_29925 = G__29946;
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

var seq__29914_29947 = cljs.core.seq.call(null,params);
var chunk__29915_29948 = null;
var count__29916_29949 = (0);
var i__29917_29950 = (0);
while(true){
if((i__29917_29950 < count__29916_29949)){
var param_29951 = cljs.core._nth.call(null,chunk__29915_29948,i__29917_29950);
cljs.compiler.emit.call(null,param_29951);

if(cljs.core._EQ_.call(null,param_29951,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29952 = seq__29914_29947;
var G__29953 = chunk__29915_29948;
var G__29954 = count__29916_29949;
var G__29955 = (i__29917_29950 + (1));
seq__29914_29947 = G__29952;
chunk__29915_29948 = G__29953;
count__29916_29949 = G__29954;
i__29917_29950 = G__29955;
continue;
} else {
var temp__5720__auto___29956 = cljs.core.seq.call(null,seq__29914_29947);
if(temp__5720__auto___29956){
var seq__29914_29957__$1 = temp__5720__auto___29956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29914_29957__$1)){
var c__4550__auto___29958 = cljs.core.chunk_first.call(null,seq__29914_29957__$1);
var G__29959 = cljs.core.chunk_rest.call(null,seq__29914_29957__$1);
var G__29960 = c__4550__auto___29958;
var G__29961 = cljs.core.count.call(null,c__4550__auto___29958);
var G__29962 = (0);
seq__29914_29947 = G__29959;
chunk__29915_29948 = G__29960;
count__29916_29949 = G__29961;
i__29917_29950 = G__29962;
continue;
} else {
var param_29963 = cljs.core.first.call(null,seq__29914_29957__$1);
cljs.compiler.emit.call(null,param_29963);

if(cljs.core._EQ_.call(null,param_29963,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29964 = cljs.core.next.call(null,seq__29914_29957__$1);
var G__29965 = null;
var G__29966 = (0);
var G__29967 = (0);
seq__29914_29947 = G__29964;
chunk__29915_29948 = G__29965;
count__29916_29949 = G__29966;
i__29917_29950 = G__29967;
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

var seq__29918_29968 = cljs.core.seq.call(null,params);
var chunk__29919_29969 = null;
var count__29920_29970 = (0);
var i__29921_29971 = (0);
while(true){
if((i__29921_29971 < count__29920_29970)){
var param_29972 = cljs.core._nth.call(null,chunk__29919_29969,i__29921_29971);
cljs.compiler.emit.call(null,param_29972);

if(cljs.core._EQ_.call(null,param_29972,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29973 = seq__29918_29968;
var G__29974 = chunk__29919_29969;
var G__29975 = count__29920_29970;
var G__29976 = (i__29921_29971 + (1));
seq__29918_29968 = G__29973;
chunk__29919_29969 = G__29974;
count__29920_29970 = G__29975;
i__29921_29971 = G__29976;
continue;
} else {
var temp__5720__auto___29977 = cljs.core.seq.call(null,seq__29918_29968);
if(temp__5720__auto___29977){
var seq__29918_29978__$1 = temp__5720__auto___29977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29918_29978__$1)){
var c__4550__auto___29979 = cljs.core.chunk_first.call(null,seq__29918_29978__$1);
var G__29980 = cljs.core.chunk_rest.call(null,seq__29918_29978__$1);
var G__29981 = c__4550__auto___29979;
var G__29982 = cljs.core.count.call(null,c__4550__auto___29979);
var G__29983 = (0);
seq__29918_29968 = G__29980;
chunk__29919_29969 = G__29981;
count__29920_29970 = G__29982;
i__29921_29971 = G__29983;
continue;
} else {
var param_29984 = cljs.core.first.call(null,seq__29918_29978__$1);
cljs.compiler.emit.call(null,param_29984);

if(cljs.core._EQ_.call(null,param_29984,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29985 = cljs.core.next.call(null,seq__29918_29978__$1);
var G__29986 = null;
var G__29987 = (0);
var G__29988 = (0);
seq__29918_29968 = G__29985;
chunk__29919_29969 = G__29986;
count__29920_29970 = G__29987;
i__29921_29971 = G__29988;
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
var seq__29989 = cljs.core.seq.call(null,params);
var chunk__29990 = null;
var count__29991 = (0);
var i__29992 = (0);
while(true){
if((i__29992 < count__29991)){
var param = cljs.core._nth.call(null,chunk__29990,i__29992);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29993 = seq__29989;
var G__29994 = chunk__29990;
var G__29995 = count__29991;
var G__29996 = (i__29992 + (1));
seq__29989 = G__29993;
chunk__29990 = G__29994;
count__29991 = G__29995;
i__29992 = G__29996;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29989);
if(temp__5720__auto__){
var seq__29989__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29989__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29989__$1);
var G__29997 = cljs.core.chunk_rest.call(null,seq__29989__$1);
var G__29998 = c__4550__auto__;
var G__29999 = cljs.core.count.call(null,c__4550__auto__);
var G__30000 = (0);
seq__29989 = G__29997;
chunk__29990 = G__29998;
count__29991 = G__29999;
i__29992 = G__30000;
continue;
} else {
var param = cljs.core.first.call(null,seq__29989__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30001 = cljs.core.next.call(null,seq__29989__$1);
var G__30002 = null;
var G__30003 = (0);
var G__30004 = (0);
seq__29989 = G__30001;
chunk__29990 = G__30002;
count__29991 = G__30003;
i__29992 = G__30004;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30005){
var map__30006 = p__30005;
var map__30006__$1 = (((((!((map__30006 == null))))?(((((map__30006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);
var expr = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30008){
var map__30009 = p__30008;
var map__30009__$1 = (((((!((map__30009 == null))))?(((((map__30009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30009):map__30009);
var f = map__30009__$1;
var expr = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30019__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30020 = cljs.compiler.munge.call(null,name_30019__$1);
var delegate_name_30021 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30020),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30021," = function (");

var seq__30011_30022 = cljs.core.seq.call(null,params);
var chunk__30012_30023 = null;
var count__30013_30024 = (0);
var i__30014_30025 = (0);
while(true){
if((i__30014_30025 < count__30013_30024)){
var param_30026 = cljs.core._nth.call(null,chunk__30012_30023,i__30014_30025);
cljs.compiler.emit.call(null,param_30026);

if(cljs.core._EQ_.call(null,param_30026,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30027 = seq__30011_30022;
var G__30028 = chunk__30012_30023;
var G__30029 = count__30013_30024;
var G__30030 = (i__30014_30025 + (1));
seq__30011_30022 = G__30027;
chunk__30012_30023 = G__30028;
count__30013_30024 = G__30029;
i__30014_30025 = G__30030;
continue;
} else {
var temp__5720__auto___30031 = cljs.core.seq.call(null,seq__30011_30022);
if(temp__5720__auto___30031){
var seq__30011_30032__$1 = temp__5720__auto___30031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30011_30032__$1)){
var c__4550__auto___30033 = cljs.core.chunk_first.call(null,seq__30011_30032__$1);
var G__30034 = cljs.core.chunk_rest.call(null,seq__30011_30032__$1);
var G__30035 = c__4550__auto___30033;
var G__30036 = cljs.core.count.call(null,c__4550__auto___30033);
var G__30037 = (0);
seq__30011_30022 = G__30034;
chunk__30012_30023 = G__30035;
count__30013_30024 = G__30036;
i__30014_30025 = G__30037;
continue;
} else {
var param_30038 = cljs.core.first.call(null,seq__30011_30032__$1);
cljs.compiler.emit.call(null,param_30038);

if(cljs.core._EQ_.call(null,param_30038,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30039 = cljs.core.next.call(null,seq__30011_30032__$1);
var G__30040 = null;
var G__30041 = (0);
var G__30042 = (0);
seq__30011_30022 = G__30039;
chunk__30012_30023 = G__30040;
count__30013_30024 = G__30041;
i__30014_30025 = G__30042;
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

cljs.compiler.emitln.call(null,"var ",mname_30020," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30043 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30043,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30021,".call(this,");

var seq__30015_30044 = cljs.core.seq.call(null,params);
var chunk__30016_30045 = null;
var count__30017_30046 = (0);
var i__30018_30047 = (0);
while(true){
if((i__30018_30047 < count__30017_30046)){
var param_30048 = cljs.core._nth.call(null,chunk__30016_30045,i__30018_30047);
cljs.compiler.emit.call(null,param_30048);

if(cljs.core._EQ_.call(null,param_30048,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30049 = seq__30015_30044;
var G__30050 = chunk__30016_30045;
var G__30051 = count__30017_30046;
var G__30052 = (i__30018_30047 + (1));
seq__30015_30044 = G__30049;
chunk__30016_30045 = G__30050;
count__30017_30046 = G__30051;
i__30018_30047 = G__30052;
continue;
} else {
var temp__5720__auto___30053 = cljs.core.seq.call(null,seq__30015_30044);
if(temp__5720__auto___30053){
var seq__30015_30054__$1 = temp__5720__auto___30053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30015_30054__$1)){
var c__4550__auto___30055 = cljs.core.chunk_first.call(null,seq__30015_30054__$1);
var G__30056 = cljs.core.chunk_rest.call(null,seq__30015_30054__$1);
var G__30057 = c__4550__auto___30055;
var G__30058 = cljs.core.count.call(null,c__4550__auto___30055);
var G__30059 = (0);
seq__30015_30044 = G__30056;
chunk__30016_30045 = G__30057;
count__30017_30046 = G__30058;
i__30018_30047 = G__30059;
continue;
} else {
var param_30060 = cljs.core.first.call(null,seq__30015_30054__$1);
cljs.compiler.emit.call(null,param_30060);

if(cljs.core._EQ_.call(null,param_30060,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30061 = cljs.core.next.call(null,seq__30015_30054__$1);
var G__30062 = null;
var G__30063 = (0);
var G__30064 = (0);
seq__30015_30044 = G__30061;
chunk__30016_30045 = G__30062;
count__30017_30046 = G__30063;
i__30018_30047 = G__30064;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30020,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30020,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30019__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30020,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30021,";");

cljs.compiler.emitln.call(null,"return ",mname_30020,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30068){
var map__30069 = p__30068;
var map__30069__$1 = (((((!((map__30069 == null))))?(((((map__30069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);
var variadic = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30065_SHARP_){
var and__4120__auto__ = p1__30065_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30065_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_30122__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30123 = cljs.compiler.munge.call(null,name_30122__$1);
var maxparams_30124 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30125 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30122__$1,mname_30123,maxparams_30124,loop_locals,map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30123),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30122__$1,mname_30123,maxparams_30124,loop_locals,map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_30126 = cljs.core.sort_by.call(null,((function (name_30122__$1,mname_30123,maxparams_30124,mmap_30125,loop_locals,map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30066_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30066_SHARP_)));
});})(name_30122__$1,mname_30123,maxparams_30124,mmap_30125,loop_locals,map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30125));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30123," = null;");

var seq__30071_30127 = cljs.core.seq.call(null,ms_30126);
var chunk__30072_30128 = null;
var count__30073_30129 = (0);
var i__30074_30130 = (0);
while(true){
if((i__30074_30130 < count__30073_30129)){
var vec__30081_30131 = cljs.core._nth.call(null,chunk__30072_30128,i__30074_30130);
var n_30132 = cljs.core.nth.call(null,vec__30081_30131,(0),null);
var meth_30133 = cljs.core.nth.call(null,vec__30081_30131,(1),null);
cljs.compiler.emits.call(null,"var ",n_30132," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30133))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30133);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30133);
}

cljs.compiler.emitln.call(null,";");


var G__30134 = seq__30071_30127;
var G__30135 = chunk__30072_30128;
var G__30136 = count__30073_30129;
var G__30137 = (i__30074_30130 + (1));
seq__30071_30127 = G__30134;
chunk__30072_30128 = G__30135;
count__30073_30129 = G__30136;
i__30074_30130 = G__30137;
continue;
} else {
var temp__5720__auto___30138 = cljs.core.seq.call(null,seq__30071_30127);
if(temp__5720__auto___30138){
var seq__30071_30139__$1 = temp__5720__auto___30138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30071_30139__$1)){
var c__4550__auto___30140 = cljs.core.chunk_first.call(null,seq__30071_30139__$1);
var G__30141 = cljs.core.chunk_rest.call(null,seq__30071_30139__$1);
var G__30142 = c__4550__auto___30140;
var G__30143 = cljs.core.count.call(null,c__4550__auto___30140);
var G__30144 = (0);
seq__30071_30127 = G__30141;
chunk__30072_30128 = G__30142;
count__30073_30129 = G__30143;
i__30074_30130 = G__30144;
continue;
} else {
var vec__30084_30145 = cljs.core.first.call(null,seq__30071_30139__$1);
var n_30146 = cljs.core.nth.call(null,vec__30084_30145,(0),null);
var meth_30147 = cljs.core.nth.call(null,vec__30084_30145,(1),null);
cljs.compiler.emits.call(null,"var ",n_30146," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30147))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30147);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30147);
}

cljs.compiler.emitln.call(null,";");


var G__30148 = cljs.core.next.call(null,seq__30071_30139__$1);
var G__30149 = null;
var G__30150 = (0);
var G__30151 = (0);
seq__30071_30127 = G__30148;
chunk__30072_30128 = G__30149;
count__30073_30129 = G__30150;
i__30074_30130 = G__30151;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30123," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30124),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30124)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30124));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30087_30152 = cljs.core.seq.call(null,ms_30126);
var chunk__30088_30153 = null;
var count__30089_30154 = (0);
var i__30090_30155 = (0);
while(true){
if((i__30090_30155 < count__30089_30154)){
var vec__30097_30156 = cljs.core._nth.call(null,chunk__30088_30153,i__30090_30155);
var n_30157 = cljs.core.nth.call(null,vec__30097_30156,(0),null);
var meth_30158 = cljs.core.nth.call(null,vec__30097_30156,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30158))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30159 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30159," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30160 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30159," = new cljs.core.IndexedSeq(",a_30160,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30157,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30124)),(((cljs.core.count.call(null,maxparams_30124) > (1)))?", ":null),restarg_30159,");");
} else {
var pcnt_30161 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30158));
cljs.compiler.emitln.call(null,"case ",pcnt_30161,":");

cljs.compiler.emitln.call(null,"return ",n_30157,".call(this",(((pcnt_30161 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30161,maxparams_30124)),null,(1),null)),(2),null))),");");
}


var G__30162 = seq__30087_30152;
var G__30163 = chunk__30088_30153;
var G__30164 = count__30089_30154;
var G__30165 = (i__30090_30155 + (1));
seq__30087_30152 = G__30162;
chunk__30088_30153 = G__30163;
count__30089_30154 = G__30164;
i__30090_30155 = G__30165;
continue;
} else {
var temp__5720__auto___30166 = cljs.core.seq.call(null,seq__30087_30152);
if(temp__5720__auto___30166){
var seq__30087_30167__$1 = temp__5720__auto___30166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30087_30167__$1)){
var c__4550__auto___30168 = cljs.core.chunk_first.call(null,seq__30087_30167__$1);
var G__30169 = cljs.core.chunk_rest.call(null,seq__30087_30167__$1);
var G__30170 = c__4550__auto___30168;
var G__30171 = cljs.core.count.call(null,c__4550__auto___30168);
var G__30172 = (0);
seq__30087_30152 = G__30169;
chunk__30088_30153 = G__30170;
count__30089_30154 = G__30171;
i__30090_30155 = G__30172;
continue;
} else {
var vec__30100_30173 = cljs.core.first.call(null,seq__30087_30167__$1);
var n_30174 = cljs.core.nth.call(null,vec__30100_30173,(0),null);
var meth_30175 = cljs.core.nth.call(null,vec__30100_30173,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30175))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30176 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30176," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30177 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30176," = new cljs.core.IndexedSeq(",a_30177,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30174,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30124)),(((cljs.core.count.call(null,maxparams_30124) > (1)))?", ":null),restarg_30176,");");
} else {
var pcnt_30178 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30175));
cljs.compiler.emitln.call(null,"case ",pcnt_30178,":");

cljs.compiler.emitln.call(null,"return ",n_30174,".call(this",(((pcnt_30178 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30178,maxparams_30124)),null,(1),null)),(2),null))),");");
}


var G__30179 = cljs.core.next.call(null,seq__30087_30167__$1);
var G__30180 = null;
var G__30181 = (0);
var G__30182 = (0);
seq__30087_30152 = G__30179;
chunk__30088_30153 = G__30180;
count__30089_30154 = G__30181;
i__30090_30155 = G__30182;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_30183 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_30126)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_30183,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30123,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30123,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30122__$1,mname_30123,maxparams_30124,mmap_30125,ms_30126,loop_locals,map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30067_SHARP_){
var vec__30103 = p1__30067_SHARP_;
var n = cljs.core.nth.call(null,vec__30103,(0),null);
var m = cljs.core.nth.call(null,vec__30103,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30122__$1,mname_30123,maxparams_30124,mmap_30125,ms_30126,loop_locals,map__30069,map__30069__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_30126),".cljs$lang$applyTo;");
} else {
}

var seq__30106_30184 = cljs.core.seq.call(null,ms_30126);
var chunk__30107_30185 = null;
var count__30108_30186 = (0);
var i__30109_30187 = (0);
while(true){
if((i__30109_30187 < count__30108_30186)){
var vec__30116_30188 = cljs.core._nth.call(null,chunk__30107_30185,i__30109_30187);
var n_30189 = cljs.core.nth.call(null,vec__30116_30188,(0),null);
var meth_30190 = cljs.core.nth.call(null,vec__30116_30188,(1),null);
var c_30191 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30190));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30190))){
cljs.compiler.emitln.call(null,mname_30123,".cljs$core$IFn$_invoke$arity$variadic = ",n_30189,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30123,".cljs$core$IFn$_invoke$arity$",c_30191," = ",n_30189,";");
}


var G__30192 = seq__30106_30184;
var G__30193 = chunk__30107_30185;
var G__30194 = count__30108_30186;
var G__30195 = (i__30109_30187 + (1));
seq__30106_30184 = G__30192;
chunk__30107_30185 = G__30193;
count__30108_30186 = G__30194;
i__30109_30187 = G__30195;
continue;
} else {
var temp__5720__auto___30196 = cljs.core.seq.call(null,seq__30106_30184);
if(temp__5720__auto___30196){
var seq__30106_30197__$1 = temp__5720__auto___30196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30106_30197__$1)){
var c__4550__auto___30198 = cljs.core.chunk_first.call(null,seq__30106_30197__$1);
var G__30199 = cljs.core.chunk_rest.call(null,seq__30106_30197__$1);
var G__30200 = c__4550__auto___30198;
var G__30201 = cljs.core.count.call(null,c__4550__auto___30198);
var G__30202 = (0);
seq__30106_30184 = G__30199;
chunk__30107_30185 = G__30200;
count__30108_30186 = G__30201;
i__30109_30187 = G__30202;
continue;
} else {
var vec__30119_30203 = cljs.core.first.call(null,seq__30106_30197__$1);
var n_30204 = cljs.core.nth.call(null,vec__30119_30203,(0),null);
var meth_30205 = cljs.core.nth.call(null,vec__30119_30203,(1),null);
var c_30206 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30205));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30205))){
cljs.compiler.emitln.call(null,mname_30123,".cljs$core$IFn$_invoke$arity$variadic = ",n_30204,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30123,".cljs$core$IFn$_invoke$arity$",c_30206," = ",n_30204,";");
}


var G__30207 = cljs.core.next.call(null,seq__30106_30197__$1);
var G__30208 = null;
var G__30209 = (0);
var G__30210 = (0);
seq__30106_30184 = G__30207;
chunk__30107_30185 = G__30208;
count__30108_30186 = G__30209;
i__30109_30187 = G__30210;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30123,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30211){
var map__30212 = p__30211;
var map__30212__$1 = (((((!((map__30212 == null))))?(((((map__30212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30212):map__30212);
var statements = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__30214_30218 = cljs.core.seq.call(null,statements);
var chunk__30215_30219 = null;
var count__30216_30220 = (0);
var i__30217_30221 = (0);
while(true){
if((i__30217_30221 < count__30216_30220)){
var s_30222 = cljs.core._nth.call(null,chunk__30215_30219,i__30217_30221);
cljs.compiler.emitln.call(null,s_30222);


var G__30223 = seq__30214_30218;
var G__30224 = chunk__30215_30219;
var G__30225 = count__30216_30220;
var G__30226 = (i__30217_30221 + (1));
seq__30214_30218 = G__30223;
chunk__30215_30219 = G__30224;
count__30216_30220 = G__30225;
i__30217_30221 = G__30226;
continue;
} else {
var temp__5720__auto___30227 = cljs.core.seq.call(null,seq__30214_30218);
if(temp__5720__auto___30227){
var seq__30214_30228__$1 = temp__5720__auto___30227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30214_30228__$1)){
var c__4550__auto___30229 = cljs.core.chunk_first.call(null,seq__30214_30228__$1);
var G__30230 = cljs.core.chunk_rest.call(null,seq__30214_30228__$1);
var G__30231 = c__4550__auto___30229;
var G__30232 = cljs.core.count.call(null,c__4550__auto___30229);
var G__30233 = (0);
seq__30214_30218 = G__30230;
chunk__30215_30219 = G__30231;
count__30216_30220 = G__30232;
i__30217_30221 = G__30233;
continue;
} else {
var s_30234 = cljs.core.first.call(null,seq__30214_30228__$1);
cljs.compiler.emitln.call(null,s_30234);


var G__30235 = cljs.core.next.call(null,seq__30214_30228__$1);
var G__30236 = null;
var G__30237 = (0);
var G__30238 = (0);
seq__30214_30218 = G__30235;
chunk__30215_30219 = G__30236;
count__30216_30220 = G__30237;
i__30217_30221 = G__30238;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30239){
var map__30240 = p__30239;
var map__30240__$1 = (((((!((map__30240 == null))))?(((((map__30240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30240):map__30240);
var try$ = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30242,is_loop){
var map__30243 = p__30242;
var map__30243__$1 = (((((!((map__30243 == null))))?(((((map__30243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30243):map__30243);
var expr = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__30245_30259 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__30246_30260 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__30245_30259,context,map__30243,map__30243__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__30245_30259,context,map__30243,map__30243__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__30246_30260;

try{var seq__30247_30261 = cljs.core.seq.call(null,bindings);
var chunk__30248_30262 = null;
var count__30249_30263 = (0);
var i__30250_30264 = (0);
while(true){
if((i__30250_30264 < count__30249_30263)){
var map__30255_30265 = cljs.core._nth.call(null,chunk__30248_30262,i__30250_30264);
var map__30255_30266__$1 = (((((!((map__30255_30265 == null))))?(((((map__30255_30265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30255_30265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30255_30265):map__30255_30265);
var binding_30267 = map__30255_30266__$1;
var init_30268 = cljs.core.get.call(null,map__30255_30266__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30267);

cljs.compiler.emitln.call(null," = ",init_30268,";");


var G__30269 = seq__30247_30261;
var G__30270 = chunk__30248_30262;
var G__30271 = count__30249_30263;
var G__30272 = (i__30250_30264 + (1));
seq__30247_30261 = G__30269;
chunk__30248_30262 = G__30270;
count__30249_30263 = G__30271;
i__30250_30264 = G__30272;
continue;
} else {
var temp__5720__auto___30273 = cljs.core.seq.call(null,seq__30247_30261);
if(temp__5720__auto___30273){
var seq__30247_30274__$1 = temp__5720__auto___30273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30247_30274__$1)){
var c__4550__auto___30275 = cljs.core.chunk_first.call(null,seq__30247_30274__$1);
var G__30276 = cljs.core.chunk_rest.call(null,seq__30247_30274__$1);
var G__30277 = c__4550__auto___30275;
var G__30278 = cljs.core.count.call(null,c__4550__auto___30275);
var G__30279 = (0);
seq__30247_30261 = G__30276;
chunk__30248_30262 = G__30277;
count__30249_30263 = G__30278;
i__30250_30264 = G__30279;
continue;
} else {
var map__30257_30280 = cljs.core.first.call(null,seq__30247_30274__$1);
var map__30257_30281__$1 = (((((!((map__30257_30280 == null))))?(((((map__30257_30280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30257_30280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30257_30280):map__30257_30280);
var binding_30282 = map__30257_30281__$1;
var init_30283 = cljs.core.get.call(null,map__30257_30281__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30282);

cljs.compiler.emitln.call(null," = ",init_30283,";");


var G__30284 = cljs.core.next.call(null,seq__30247_30274__$1);
var G__30285 = null;
var G__30286 = (0);
var G__30287 = (0);
seq__30247_30261 = G__30284;
chunk__30248_30262 = G__30285;
count__30249_30263 = G__30286;
i__30250_30264 = G__30287;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__30245_30259;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30288){
var map__30289 = p__30288;
var map__30289__$1 = (((((!((map__30289 == null))))?(((((map__30289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);
var frame = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___30291 = cljs.core.count.call(null,exprs);
var i_30292 = (0);
while(true){
if((i_30292 < n__4607__auto___30291)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30292)," = ",exprs.call(null,i_30292),";");

var G__30293 = (i_30292 + (1));
i_30292 = G__30293;
continue;
} else {
}
break;
}

var n__4607__auto___30294 = cljs.core.count.call(null,exprs);
var i_30295 = (0);
while(true){
if((i_30295 < n__4607__auto___30294)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30295))," = ",temps.call(null,i_30295),";");

var G__30296 = (i_30295 + (1));
i_30295 = G__30296;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30297){
var map__30298 = p__30297;
var map__30298__$1 = (((((!((map__30298 == null))))?(((((map__30298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30298):map__30298);
var expr = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30300_30312 = cljs.core.seq.call(null,bindings);
var chunk__30301_30313 = null;
var count__30302_30314 = (0);
var i__30303_30315 = (0);
while(true){
if((i__30303_30315 < count__30302_30314)){
var map__30308_30316 = cljs.core._nth.call(null,chunk__30301_30313,i__30303_30315);
var map__30308_30317__$1 = (((((!((map__30308_30316 == null))))?(((((map__30308_30316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30308_30316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30308_30316):map__30308_30316);
var binding_30318 = map__30308_30317__$1;
var init_30319 = cljs.core.get.call(null,map__30308_30317__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30318)," = ",init_30319,";");


var G__30320 = seq__30300_30312;
var G__30321 = chunk__30301_30313;
var G__30322 = count__30302_30314;
var G__30323 = (i__30303_30315 + (1));
seq__30300_30312 = G__30320;
chunk__30301_30313 = G__30321;
count__30302_30314 = G__30322;
i__30303_30315 = G__30323;
continue;
} else {
var temp__5720__auto___30324 = cljs.core.seq.call(null,seq__30300_30312);
if(temp__5720__auto___30324){
var seq__30300_30325__$1 = temp__5720__auto___30324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30300_30325__$1)){
var c__4550__auto___30326 = cljs.core.chunk_first.call(null,seq__30300_30325__$1);
var G__30327 = cljs.core.chunk_rest.call(null,seq__30300_30325__$1);
var G__30328 = c__4550__auto___30326;
var G__30329 = cljs.core.count.call(null,c__4550__auto___30326);
var G__30330 = (0);
seq__30300_30312 = G__30327;
chunk__30301_30313 = G__30328;
count__30302_30314 = G__30329;
i__30303_30315 = G__30330;
continue;
} else {
var map__30310_30331 = cljs.core.first.call(null,seq__30300_30325__$1);
var map__30310_30332__$1 = (((((!((map__30310_30331 == null))))?(((((map__30310_30331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30310_30331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310_30331):map__30310_30331);
var binding_30333 = map__30310_30332__$1;
var init_30334 = cljs.core.get.call(null,map__30310_30332__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30333)," = ",init_30334,";");


var G__30335 = cljs.core.next.call(null,seq__30300_30325__$1);
var G__30336 = null;
var G__30337 = (0);
var G__30338 = (0);
seq__30300_30312 = G__30335;
chunk__30301_30313 = G__30336;
count__30302_30314 = G__30337;
i__30303_30315 = G__30338;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30341){
var map__30342 = p__30341;
var map__30342__$1 = (((((!((map__30342 == null))))?(((((map__30342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30342):map__30342);
var expr = map__30342__$1;
var f = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30344 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env){
return (function (p1__30339_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30339_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env){
return (function (p1__30340_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30340_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30342,map__30342__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30344,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30344,(1),null);
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30347 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30347,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30348 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30348,args)),(((mfa_30348 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30348,args)),"], 0))");
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
var fprop_30349 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_30349," ? ",f__$1,fprop_30349,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_30349," ? ",f__$1,fprop_30349,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30350){
var map__30351 = p__30350;
var map__30351__$1 = (((((!((map__30351 == null))))?(((((map__30351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351):map__30351);
var ctor = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30353){
var map__30354 = p__30353;
var map__30354__$1 = (((((!((map__30354 == null))))?(((((map__30354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354):map__30354);
var target = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
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
var map__30356 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30356__$1 = (((((!((map__30356 == null))))?(((((map__30356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);
var options = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30357 = options;
var map__30357__$1 = (((((!((map__30357 == null))))?(((((map__30357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30357):map__30357);
var target = cljs.core.get.call(null,map__30357__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__30357__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30358 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30363 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30363__$1 = (((((!((map__30363 == null))))?(((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var node_libs = cljs.core.get.call(null,map__30363__$1,true);
var libs_to_load = cljs.core.get.call(null,map__30363__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__30358,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__30358,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30365_30385 = cljs.core.seq.call(null,libs_to_load);
var chunk__30366_30386 = null;
var count__30367_30387 = (0);
var i__30368_30388 = (0);
while(true){
if((i__30368_30388 < count__30367_30387)){
var lib_30389 = cljs.core._nth.call(null,chunk__30366_30386,i__30368_30388);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30389)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30389),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30389),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30389),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30389),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30389,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30389),"');");
}

}
}
}


var G__30390 = seq__30365_30385;
var G__30391 = chunk__30366_30386;
var G__30392 = count__30367_30387;
var G__30393 = (i__30368_30388 + (1));
seq__30365_30385 = G__30390;
chunk__30366_30386 = G__30391;
count__30367_30387 = G__30392;
i__30368_30388 = G__30393;
continue;
} else {
var temp__5720__auto___30394 = cljs.core.seq.call(null,seq__30365_30385);
if(temp__5720__auto___30394){
var seq__30365_30395__$1 = temp__5720__auto___30394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30365_30395__$1)){
var c__4550__auto___30396 = cljs.core.chunk_first.call(null,seq__30365_30395__$1);
var G__30397 = cljs.core.chunk_rest.call(null,seq__30365_30395__$1);
var G__30398 = c__4550__auto___30396;
var G__30399 = cljs.core.count.call(null,c__4550__auto___30396);
var G__30400 = (0);
seq__30365_30385 = G__30397;
chunk__30366_30386 = G__30398;
count__30367_30387 = G__30399;
i__30368_30388 = G__30400;
continue;
} else {
var lib_30401 = cljs.core.first.call(null,seq__30365_30395__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30401)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30401),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30401),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30401),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30401),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30401,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30401),"');");
}

}
}
}


var G__30402 = cljs.core.next.call(null,seq__30365_30395__$1);
var G__30403 = null;
var G__30404 = (0);
var G__30405 = (0);
seq__30365_30385 = G__30402;
chunk__30366_30386 = G__30403;
count__30367_30387 = G__30404;
i__30368_30388 = G__30405;
continue;
}
} else {
}
}
break;
}

var seq__30369_30406 = cljs.core.seq.call(null,node_libs);
var chunk__30370_30407 = null;
var count__30371_30408 = (0);
var i__30372_30409 = (0);
while(true){
if((i__30372_30409 < count__30371_30408)){
var lib_30410 = cljs.core._nth.call(null,chunk__30370_30407,i__30372_30409);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30410)," = require('",lib_30410,"');");


var G__30411 = seq__30369_30406;
var G__30412 = chunk__30370_30407;
var G__30413 = count__30371_30408;
var G__30414 = (i__30372_30409 + (1));
seq__30369_30406 = G__30411;
chunk__30370_30407 = G__30412;
count__30371_30408 = G__30413;
i__30372_30409 = G__30414;
continue;
} else {
var temp__5720__auto___30415 = cljs.core.seq.call(null,seq__30369_30406);
if(temp__5720__auto___30415){
var seq__30369_30416__$1 = temp__5720__auto___30415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30369_30416__$1)){
var c__4550__auto___30417 = cljs.core.chunk_first.call(null,seq__30369_30416__$1);
var G__30418 = cljs.core.chunk_rest.call(null,seq__30369_30416__$1);
var G__30419 = c__4550__auto___30417;
var G__30420 = cljs.core.count.call(null,c__4550__auto___30417);
var G__30421 = (0);
seq__30369_30406 = G__30418;
chunk__30370_30407 = G__30419;
count__30371_30408 = G__30420;
i__30372_30409 = G__30421;
continue;
} else {
var lib_30422 = cljs.core.first.call(null,seq__30369_30416__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30422)," = require('",lib_30422,"');");


var G__30423 = cljs.core.next.call(null,seq__30369_30416__$1);
var G__30424 = null;
var G__30425 = (0);
var G__30426 = (0);
seq__30369_30406 = G__30423;
chunk__30370_30407 = G__30424;
count__30371_30408 = G__30425;
i__30372_30409 = G__30426;
continue;
}
} else {
}
}
break;
}

var seq__30373_30427 = cljs.core.seq.call(null,global_exports_libs);
var chunk__30374_30428 = null;
var count__30375_30429 = (0);
var i__30376_30430 = (0);
while(true){
if((i__30376_30430 < count__30375_30429)){
var lib_30431 = cljs.core._nth.call(null,chunk__30374_30428,i__30376_30430);
var map__30381_30432 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30431));
var map__30381_30433__$1 = (((((!((map__30381_30432 == null))))?(((((map__30381_30432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30381_30432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30381_30432):map__30381_30432);
var global_exports_30434 = cljs.core.get.call(null,map__30381_30433__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30434,lib_30431);


var G__30435 = seq__30373_30427;
var G__30436 = chunk__30374_30428;
var G__30437 = count__30375_30429;
var G__30438 = (i__30376_30430 + (1));
seq__30373_30427 = G__30435;
chunk__30374_30428 = G__30436;
count__30375_30429 = G__30437;
i__30376_30430 = G__30438;
continue;
} else {
var temp__5720__auto___30439 = cljs.core.seq.call(null,seq__30373_30427);
if(temp__5720__auto___30439){
var seq__30373_30440__$1 = temp__5720__auto___30439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30373_30440__$1)){
var c__4550__auto___30441 = cljs.core.chunk_first.call(null,seq__30373_30440__$1);
var G__30442 = cljs.core.chunk_rest.call(null,seq__30373_30440__$1);
var G__30443 = c__4550__auto___30441;
var G__30444 = cljs.core.count.call(null,c__4550__auto___30441);
var G__30445 = (0);
seq__30373_30427 = G__30442;
chunk__30374_30428 = G__30443;
count__30375_30429 = G__30444;
i__30376_30430 = G__30445;
continue;
} else {
var lib_30446 = cljs.core.first.call(null,seq__30373_30440__$1);
var map__30383_30447 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30446));
var map__30383_30448__$1 = (((((!((map__30383_30447 == null))))?(((((map__30383_30447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30383_30447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30383_30447):map__30383_30447);
var global_exports_30449 = cljs.core.get.call(null,map__30383_30448__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30449,lib_30446);


var G__30450 = cljs.core.next.call(null,seq__30373_30440__$1);
var G__30451 = null;
var G__30452 = (0);
var G__30453 = (0);
seq__30373_30427 = G__30450;
chunk__30374_30428 = G__30451;
count__30375_30429 = G__30452;
i__30376_30430 = G__30453;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__30454){
var map__30455 = p__30454;
var map__30455__$1 = (((((!((map__30455 == null))))?(((((map__30455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30455):map__30455);
var name = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30457){
var map__30458 = p__30457;
var map__30458__$1 = (((((!((map__30458 == null))))?(((((map__30458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30458):map__30458);
var name = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30458__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__30460){
var map__30461 = p__30460;
var map__30461__$1 = (((((!((map__30461 == null))))?(((((map__30461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30461):map__30461);
var t = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30463_30487 = cljs.core.seq.call(null,protocols);
var chunk__30464_30488 = null;
var count__30465_30489 = (0);
var i__30466_30490 = (0);
while(true){
if((i__30466_30490 < count__30465_30489)){
var protocol_30491 = cljs.core._nth.call(null,chunk__30464_30488,i__30466_30490);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30491)),"}");


var G__30492 = seq__30463_30487;
var G__30493 = chunk__30464_30488;
var G__30494 = count__30465_30489;
var G__30495 = (i__30466_30490 + (1));
seq__30463_30487 = G__30492;
chunk__30464_30488 = G__30493;
count__30465_30489 = G__30494;
i__30466_30490 = G__30495;
continue;
} else {
var temp__5720__auto___30496 = cljs.core.seq.call(null,seq__30463_30487);
if(temp__5720__auto___30496){
var seq__30463_30497__$1 = temp__5720__auto___30496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30463_30497__$1)){
var c__4550__auto___30498 = cljs.core.chunk_first.call(null,seq__30463_30497__$1);
var G__30499 = cljs.core.chunk_rest.call(null,seq__30463_30497__$1);
var G__30500 = c__4550__auto___30498;
var G__30501 = cljs.core.count.call(null,c__4550__auto___30498);
var G__30502 = (0);
seq__30463_30487 = G__30499;
chunk__30464_30488 = G__30500;
count__30465_30489 = G__30501;
i__30466_30490 = G__30502;
continue;
} else {
var protocol_30503 = cljs.core.first.call(null,seq__30463_30497__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30503)),"}");


var G__30504 = cljs.core.next.call(null,seq__30463_30497__$1);
var G__30505 = null;
var G__30506 = (0);
var G__30507 = (0);
seq__30463_30487 = G__30504;
chunk__30464_30488 = G__30505;
count__30465_30489 = G__30506;
i__30466_30490 = G__30507;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30467_30508 = cljs.core.seq.call(null,fields__$1);
var chunk__30468_30509 = null;
var count__30469_30510 = (0);
var i__30470_30511 = (0);
while(true){
if((i__30470_30511 < count__30469_30510)){
var fld_30512 = cljs.core._nth.call(null,chunk__30468_30509,i__30470_30511);
cljs.compiler.emitln.call(null,"this.",fld_30512," = ",fld_30512,";");


var G__30513 = seq__30467_30508;
var G__30514 = chunk__30468_30509;
var G__30515 = count__30469_30510;
var G__30516 = (i__30470_30511 + (1));
seq__30467_30508 = G__30513;
chunk__30468_30509 = G__30514;
count__30469_30510 = G__30515;
i__30470_30511 = G__30516;
continue;
} else {
var temp__5720__auto___30517 = cljs.core.seq.call(null,seq__30467_30508);
if(temp__5720__auto___30517){
var seq__30467_30518__$1 = temp__5720__auto___30517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30467_30518__$1)){
var c__4550__auto___30519 = cljs.core.chunk_first.call(null,seq__30467_30518__$1);
var G__30520 = cljs.core.chunk_rest.call(null,seq__30467_30518__$1);
var G__30521 = c__4550__auto___30519;
var G__30522 = cljs.core.count.call(null,c__4550__auto___30519);
var G__30523 = (0);
seq__30467_30508 = G__30520;
chunk__30468_30509 = G__30521;
count__30469_30510 = G__30522;
i__30470_30511 = G__30523;
continue;
} else {
var fld_30524 = cljs.core.first.call(null,seq__30467_30518__$1);
cljs.compiler.emitln.call(null,"this.",fld_30524," = ",fld_30524,";");


var G__30525 = cljs.core.next.call(null,seq__30467_30518__$1);
var G__30526 = null;
var G__30527 = (0);
var G__30528 = (0);
seq__30467_30508 = G__30525;
chunk__30468_30509 = G__30526;
count__30469_30510 = G__30527;
i__30470_30511 = G__30528;
continue;
}
} else {
}
}
break;
}

var seq__30471_30529 = cljs.core.seq.call(null,pmasks);
var chunk__30472_30530 = null;
var count__30473_30531 = (0);
var i__30474_30532 = (0);
while(true){
if((i__30474_30532 < count__30473_30531)){
var vec__30481_30533 = cljs.core._nth.call(null,chunk__30472_30530,i__30474_30532);
var pno_30534 = cljs.core.nth.call(null,vec__30481_30533,(0),null);
var pmask_30535 = cljs.core.nth.call(null,vec__30481_30533,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30534,"$ = ",pmask_30535,";");


var G__30536 = seq__30471_30529;
var G__30537 = chunk__30472_30530;
var G__30538 = count__30473_30531;
var G__30539 = (i__30474_30532 + (1));
seq__30471_30529 = G__30536;
chunk__30472_30530 = G__30537;
count__30473_30531 = G__30538;
i__30474_30532 = G__30539;
continue;
} else {
var temp__5720__auto___30540 = cljs.core.seq.call(null,seq__30471_30529);
if(temp__5720__auto___30540){
var seq__30471_30541__$1 = temp__5720__auto___30540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30471_30541__$1)){
var c__4550__auto___30542 = cljs.core.chunk_first.call(null,seq__30471_30541__$1);
var G__30543 = cljs.core.chunk_rest.call(null,seq__30471_30541__$1);
var G__30544 = c__4550__auto___30542;
var G__30545 = cljs.core.count.call(null,c__4550__auto___30542);
var G__30546 = (0);
seq__30471_30529 = G__30543;
chunk__30472_30530 = G__30544;
count__30473_30531 = G__30545;
i__30474_30532 = G__30546;
continue;
} else {
var vec__30484_30547 = cljs.core.first.call(null,seq__30471_30541__$1);
var pno_30548 = cljs.core.nth.call(null,vec__30484_30547,(0),null);
var pmask_30549 = cljs.core.nth.call(null,vec__30484_30547,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30548,"$ = ",pmask_30549,";");


var G__30550 = cljs.core.next.call(null,seq__30471_30541__$1);
var G__30551 = null;
var G__30552 = (0);
var G__30553 = (0);
seq__30471_30529 = G__30550;
chunk__30472_30530 = G__30551;
count__30473_30531 = G__30552;
i__30474_30532 = G__30553;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__30554){
var map__30555 = p__30554;
var map__30555__$1 = (((((!((map__30555 == null))))?(((((map__30555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30555):map__30555);
var t = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30557_30581 = cljs.core.seq.call(null,protocols);
var chunk__30558_30582 = null;
var count__30559_30583 = (0);
var i__30560_30584 = (0);
while(true){
if((i__30560_30584 < count__30559_30583)){
var protocol_30585 = cljs.core._nth.call(null,chunk__30558_30582,i__30560_30584);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30585)),"}");


var G__30586 = seq__30557_30581;
var G__30587 = chunk__30558_30582;
var G__30588 = count__30559_30583;
var G__30589 = (i__30560_30584 + (1));
seq__30557_30581 = G__30586;
chunk__30558_30582 = G__30587;
count__30559_30583 = G__30588;
i__30560_30584 = G__30589;
continue;
} else {
var temp__5720__auto___30590 = cljs.core.seq.call(null,seq__30557_30581);
if(temp__5720__auto___30590){
var seq__30557_30591__$1 = temp__5720__auto___30590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30557_30591__$1)){
var c__4550__auto___30592 = cljs.core.chunk_first.call(null,seq__30557_30591__$1);
var G__30593 = cljs.core.chunk_rest.call(null,seq__30557_30591__$1);
var G__30594 = c__4550__auto___30592;
var G__30595 = cljs.core.count.call(null,c__4550__auto___30592);
var G__30596 = (0);
seq__30557_30581 = G__30593;
chunk__30558_30582 = G__30594;
count__30559_30583 = G__30595;
i__30560_30584 = G__30596;
continue;
} else {
var protocol_30597 = cljs.core.first.call(null,seq__30557_30591__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30597)),"}");


var G__30598 = cljs.core.next.call(null,seq__30557_30591__$1);
var G__30599 = null;
var G__30600 = (0);
var G__30601 = (0);
seq__30557_30581 = G__30598;
chunk__30558_30582 = G__30599;
count__30559_30583 = G__30600;
i__30560_30584 = G__30601;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30561_30602 = cljs.core.seq.call(null,fields__$1);
var chunk__30562_30603 = null;
var count__30563_30604 = (0);
var i__30564_30605 = (0);
while(true){
if((i__30564_30605 < count__30563_30604)){
var fld_30606 = cljs.core._nth.call(null,chunk__30562_30603,i__30564_30605);
cljs.compiler.emitln.call(null,"this.",fld_30606," = ",fld_30606,";");


var G__30607 = seq__30561_30602;
var G__30608 = chunk__30562_30603;
var G__30609 = count__30563_30604;
var G__30610 = (i__30564_30605 + (1));
seq__30561_30602 = G__30607;
chunk__30562_30603 = G__30608;
count__30563_30604 = G__30609;
i__30564_30605 = G__30610;
continue;
} else {
var temp__5720__auto___30611 = cljs.core.seq.call(null,seq__30561_30602);
if(temp__5720__auto___30611){
var seq__30561_30612__$1 = temp__5720__auto___30611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30561_30612__$1)){
var c__4550__auto___30613 = cljs.core.chunk_first.call(null,seq__30561_30612__$1);
var G__30614 = cljs.core.chunk_rest.call(null,seq__30561_30612__$1);
var G__30615 = c__4550__auto___30613;
var G__30616 = cljs.core.count.call(null,c__4550__auto___30613);
var G__30617 = (0);
seq__30561_30602 = G__30614;
chunk__30562_30603 = G__30615;
count__30563_30604 = G__30616;
i__30564_30605 = G__30617;
continue;
} else {
var fld_30618 = cljs.core.first.call(null,seq__30561_30612__$1);
cljs.compiler.emitln.call(null,"this.",fld_30618," = ",fld_30618,";");


var G__30619 = cljs.core.next.call(null,seq__30561_30612__$1);
var G__30620 = null;
var G__30621 = (0);
var G__30622 = (0);
seq__30561_30602 = G__30619;
chunk__30562_30603 = G__30620;
count__30563_30604 = G__30621;
i__30564_30605 = G__30622;
continue;
}
} else {
}
}
break;
}

var seq__30565_30623 = cljs.core.seq.call(null,pmasks);
var chunk__30566_30624 = null;
var count__30567_30625 = (0);
var i__30568_30626 = (0);
while(true){
if((i__30568_30626 < count__30567_30625)){
var vec__30575_30627 = cljs.core._nth.call(null,chunk__30566_30624,i__30568_30626);
var pno_30628 = cljs.core.nth.call(null,vec__30575_30627,(0),null);
var pmask_30629 = cljs.core.nth.call(null,vec__30575_30627,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30628,"$ = ",pmask_30629,";");


var G__30630 = seq__30565_30623;
var G__30631 = chunk__30566_30624;
var G__30632 = count__30567_30625;
var G__30633 = (i__30568_30626 + (1));
seq__30565_30623 = G__30630;
chunk__30566_30624 = G__30631;
count__30567_30625 = G__30632;
i__30568_30626 = G__30633;
continue;
} else {
var temp__5720__auto___30634 = cljs.core.seq.call(null,seq__30565_30623);
if(temp__5720__auto___30634){
var seq__30565_30635__$1 = temp__5720__auto___30634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30565_30635__$1)){
var c__4550__auto___30636 = cljs.core.chunk_first.call(null,seq__30565_30635__$1);
var G__30637 = cljs.core.chunk_rest.call(null,seq__30565_30635__$1);
var G__30638 = c__4550__auto___30636;
var G__30639 = cljs.core.count.call(null,c__4550__auto___30636);
var G__30640 = (0);
seq__30565_30623 = G__30637;
chunk__30566_30624 = G__30638;
count__30567_30625 = G__30639;
i__30568_30626 = G__30640;
continue;
} else {
var vec__30578_30641 = cljs.core.first.call(null,seq__30565_30635__$1);
var pno_30642 = cljs.core.nth.call(null,vec__30578_30641,(0),null);
var pmask_30643 = cljs.core.nth.call(null,vec__30578_30641,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30642,"$ = ",pmask_30643,";");


var G__30644 = cljs.core.next.call(null,seq__30565_30635__$1);
var G__30645 = null;
var G__30646 = (0);
var G__30647 = (0);
seq__30565_30623 = G__30644;
chunk__30566_30624 = G__30645;
count__30567_30625 = G__30646;
i__30568_30626 = G__30647;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30648){
var map__30649 = p__30648;
var map__30649__$1 = (((((!((map__30649 == null))))?(((((map__30649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30649):map__30649);
var target = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30651){
var map__30652 = p__30651;
var map__30652__$1 = (((((!((map__30652 == null))))?(((((map__30652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30652):map__30652);
var op = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29446__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29446__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__30658 = cljs.core.seq.call(null,table);
var chunk__30659 = null;
var count__30660 = (0);
var i__30661 = (0);
while(true){
if((i__30661 < count__30660)){
var vec__30668 = cljs.core._nth.call(null,chunk__30659,i__30661);
var sym = cljs.core.nth.call(null,vec__30668,(0),null);
var value = cljs.core.nth.call(null,vec__30668,(1),null);
var ns_30674 = cljs.core.namespace.call(null,sym);
var name_30675 = cljs.core.name.call(null,sym);
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


var G__30676 = seq__30658;
var G__30677 = chunk__30659;
var G__30678 = count__30660;
var G__30679 = (i__30661 + (1));
seq__30658 = G__30676;
chunk__30659 = G__30677;
count__30660 = G__30678;
i__30661 = G__30679;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30658);
if(temp__5720__auto__){
var seq__30658__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30658__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30658__$1);
var G__30680 = cljs.core.chunk_rest.call(null,seq__30658__$1);
var G__30681 = c__4550__auto__;
var G__30682 = cljs.core.count.call(null,c__4550__auto__);
var G__30683 = (0);
seq__30658 = G__30680;
chunk__30659 = G__30681;
count__30660 = G__30682;
i__30661 = G__30683;
continue;
} else {
var vec__30671 = cljs.core.first.call(null,seq__30658__$1);
var sym = cljs.core.nth.call(null,vec__30671,(0),null);
var value = cljs.core.nth.call(null,vec__30671,(1),null);
var ns_30684 = cljs.core.namespace.call(null,sym);
var name_30685 = cljs.core.name.call(null,sym);
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


var G__30686 = cljs.core.next.call(null,seq__30658__$1);
var G__30687 = null;
var G__30688 = (0);
var G__30689 = (0);
seq__30658 = G__30686;
chunk__30659 = G__30687;
count__30660 = G__30688;
i__30661 = G__30689;
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
var G__30691 = arguments.length;
switch (G__30691) {
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
var k_30696 = cljs.core.first.call(null,ks);
var vec__30692_30697 = cljs.core.conj.call(null,prefix,k_30696);
var top_30698 = cljs.core.nth.call(null,vec__30692_30697,(0),null);
var prefix_SINGLEQUOTE__30699 = vec__30692_30697;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_30696)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__30699) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_30698)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_30698)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30699)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_30698);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30699)),";");
}
} else {
}

var m_30700 = cljs.core.get.call(null,externs,k_30696);
if(cljs.core.empty_QMARK_.call(null,m_30700)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__30699,m_30700,top_level,known_externs);
}

var G__30701 = cljs.core.next.call(null,ks);
ks = G__30701;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1601516298569
