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
var map__29500 = s;
var map__29500__$1 = (((((!((map__29500 == null))))?(((((map__29500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29500):map__29500);
var name = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29503 = info;
var map__29504 = G__29503;
var map__29504__$1 = (((((!((map__29504 == null))))?(((((map__29504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29504):map__29504);
var shadow = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29503__$1 = G__29503;
while(true){
var d__$2 = d__$1;
var map__29508 = G__29503__$1;
var map__29508__$1 = (((((!((map__29508 == null))))?(((((map__29508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29508):map__29508);
var shadow__$1 = cljs.core.get.call(null,map__29508__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29510 = (d__$2 + (1));
var G__29511 = shadow__$1;
d__$1 = G__29510;
G__29503__$1 = G__29511;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29512){
var map__29513 = p__29512;
var map__29513__$1 = (((((!((map__29513 == null))))?(((((map__29513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513):map__29513);
var name_var = map__29513__$1;
var name = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__29515 = info;
var map__29515__$1 = (((((!((map__29515 == null))))?(((((map__29515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29515):map__29515);
var ns = cljs.core.get.call(null,map__29515__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29515__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__29518 = arguments.length;
switch (G__29518) {
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
var G__29520 = cp;
switch (G__29520) {
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
var seq__29522_29526 = cljs.core.seq.call(null,s);
var chunk__29523_29527 = null;
var count__29524_29528 = (0);
var i__29525_29529 = (0);
while(true){
if((i__29525_29529 < count__29524_29528)){
var c_29530 = cljs.core._nth.call(null,chunk__29523_29527,i__29525_29529);
sb.append(cljs.compiler.escape_char.call(null,c_29530));


var G__29531 = seq__29522_29526;
var G__29532 = chunk__29523_29527;
var G__29533 = count__29524_29528;
var G__29534 = (i__29525_29529 + (1));
seq__29522_29526 = G__29531;
chunk__29523_29527 = G__29532;
count__29524_29528 = G__29533;
i__29525_29529 = G__29534;
continue;
} else {
var temp__5720__auto___29535 = cljs.core.seq.call(null,seq__29522_29526);
if(temp__5720__auto___29535){
var seq__29522_29536__$1 = temp__5720__auto___29535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29522_29536__$1)){
var c__4550__auto___29537 = cljs.core.chunk_first.call(null,seq__29522_29536__$1);
var G__29538 = cljs.core.chunk_rest.call(null,seq__29522_29536__$1);
var G__29539 = c__4550__auto___29537;
var G__29540 = cljs.core.count.call(null,c__4550__auto___29537);
var G__29541 = (0);
seq__29522_29526 = G__29538;
chunk__29523_29527 = G__29539;
count__29524_29528 = G__29540;
i__29525_29529 = G__29541;
continue;
} else {
var c_29542 = cljs.core.first.call(null,seq__29522_29536__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29542));


var G__29543 = cljs.core.next.call(null,seq__29522_29536__$1);
var G__29544 = null;
var G__29545 = (0);
var G__29546 = (0);
seq__29522_29526 = G__29543;
chunk__29523_29527 = G__29544;
count__29524_29528 = G__29545;
i__29525_29529 = G__29546;
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
var map__29547_29552 = ast;
var map__29547_29553__$1 = (((((!((map__29547_29552 == null))))?(((((map__29547_29552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29547_29552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29547_29552):map__29547_29552);
var env_29554 = cljs.core.get.call(null,map__29547_29553__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29554))){
var map__29549_29555 = env_29554;
var map__29549_29556__$1 = (((((!((map__29549_29555 == null))))?(((((map__29549_29555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29549_29555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29549_29555):map__29549_29555);
var line_29557 = cljs.core.get.call(null,map__29549_29556__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29558 = cljs.core.get.call(null,map__29549_29556__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29549_29555,map__29549_29556__$1,line_29557,column_29558,map__29547_29552,map__29547_29553__$1,env_29554){
return (function (m){
var minfo = (function (){var G__29551 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__29551,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__29551;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29557 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29549_29555,map__29549_29556__$1,line_29557,column_29558,map__29547_29552,map__29547_29553__$1,env_29554){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29558)?(column_29558 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29549_29555,map__29549_29556__$1,line_29557,column_29558,map__29547_29552,map__29547_29553__$1,env_29554){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29549_29555,map__29549_29556__$1,line_29557,column_29558,map__29547_29552,map__29547_29553__$1,env_29554))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29549_29555,map__29549_29556__$1,line_29557,column_29558,map__29547_29552,map__29547_29553__$1,env_29554))
,cljs.core.sorted_map.call(null)));
});})(map__29549_29555,map__29549_29556__$1,line_29557,column_29558,map__29547_29552,map__29547_29553__$1,env_29554))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__29567 = arguments.length;
switch (G__29567) {
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
var len__4730__auto___29574 = arguments.length;
var i__4731__auto___29575 = (0);
while(true){
if((i__4731__auto___29575 < len__4730__auto___29574)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29575]));

var G__29576 = (i__4731__auto___29575 + (1));
i__4731__auto___29575 = G__29576;
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
var s_29577 = (function (){var G__29568 = a;
if((!(typeof a === 'string'))){
return G__29568.toString();
} else {
return G__29568;
}
})();
var temp__5724__auto___29578 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___29578 == null)){
} else {
var sm_data_29579 = temp__5724__auto___29578;
cljs.core.swap_BANG_.call(null,sm_data_29579,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_29579,temp__5724__auto___29578,s_29577){
return (function (p1__29559_SHARP_){
return (p1__29559_SHARP_ + s_29577.length);
});})(sm_data_29579,temp__5724__auto___29578,s_29577))
);
}

cljs.core.print.call(null,s_29577);

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

var seq__29569 = cljs.core.seq.call(null,xs);
var chunk__29570 = null;
var count__29571 = (0);
var i__29572 = (0);
while(true){
if((i__29572 < count__29571)){
var x = cljs.core._nth.call(null,chunk__29570,i__29572);
cljs.compiler.emits.call(null,x);


var G__29580 = seq__29569;
var G__29581 = chunk__29570;
var G__29582 = count__29571;
var G__29583 = (i__29572 + (1));
seq__29569 = G__29580;
chunk__29570 = G__29581;
count__29571 = G__29582;
i__29572 = G__29583;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29569);
if(temp__5720__auto__){
var seq__29569__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29569__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29569__$1);
var G__29584 = cljs.core.chunk_rest.call(null,seq__29569__$1);
var G__29585 = c__4550__auto__;
var G__29586 = cljs.core.count.call(null,c__4550__auto__);
var G__29587 = (0);
seq__29569 = G__29584;
chunk__29570 = G__29585;
count__29571 = G__29586;
i__29572 = G__29587;
continue;
} else {
var x = cljs.core.first.call(null,seq__29569__$1);
cljs.compiler.emits.call(null,x);


var G__29588 = cljs.core.next.call(null,seq__29569__$1);
var G__29589 = null;
var G__29590 = (0);
var G__29591 = (0);
seq__29569 = G__29588;
chunk__29570 = G__29589;
count__29571 = G__29590;
i__29572 = G__29591;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq29561){
var G__29562 = cljs.core.first.call(null,seq29561);
var seq29561__$1 = cljs.core.next.call(null,seq29561);
var G__29563 = cljs.core.first.call(null,seq29561__$1);
var seq29561__$2 = cljs.core.next.call(null,seq29561__$1);
var G__29564 = cljs.core.first.call(null,seq29561__$2);
var seq29561__$3 = cljs.core.next.call(null,seq29561__$2);
var G__29565 = cljs.core.first.call(null,seq29561__$3);
var seq29561__$4 = cljs.core.next.call(null,seq29561__$3);
var G__29566 = cljs.core.first.call(null,seq29561__$4);
var seq29561__$5 = cljs.core.next.call(null,seq29561__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29562,G__29563,G__29564,G__29565,G__29566,seq29561__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29592){
var map__29593 = p__29592;
var map__29593__$1 = (((((!((map__29593 == null))))?(((((map__29593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29593):map__29593);
var m = map__29593__$1;
var gen_line = cljs.core.get.call(null,map__29593__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__29602 = arguments.length;
switch (G__29602) {
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
var len__4730__auto___29608 = arguments.length;
var i__4731__auto___29609 = (0);
while(true){
if((i__4731__auto___29609 < len__4730__auto___29608)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29609]));

var G__29610 = (i__4731__auto___29609 + (1));
i__4731__auto___29609 = G__29610;
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

var seq__29603_29611 = cljs.core.seq.call(null,xs);
var chunk__29604_29612 = null;
var count__29605_29613 = (0);
var i__29606_29614 = (0);
while(true){
if((i__29606_29614 < count__29605_29613)){
var x_29615 = cljs.core._nth.call(null,chunk__29604_29612,i__29606_29614);
cljs.compiler.emits.call(null,x_29615);


var G__29616 = seq__29603_29611;
var G__29617 = chunk__29604_29612;
var G__29618 = count__29605_29613;
var G__29619 = (i__29606_29614 + (1));
seq__29603_29611 = G__29616;
chunk__29604_29612 = G__29617;
count__29605_29613 = G__29618;
i__29606_29614 = G__29619;
continue;
} else {
var temp__5720__auto___29620 = cljs.core.seq.call(null,seq__29603_29611);
if(temp__5720__auto___29620){
var seq__29603_29621__$1 = temp__5720__auto___29620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29603_29621__$1)){
var c__4550__auto___29622 = cljs.core.chunk_first.call(null,seq__29603_29621__$1);
var G__29623 = cljs.core.chunk_rest.call(null,seq__29603_29621__$1);
var G__29624 = c__4550__auto___29622;
var G__29625 = cljs.core.count.call(null,c__4550__auto___29622);
var G__29626 = (0);
seq__29603_29611 = G__29623;
chunk__29604_29612 = G__29624;
count__29605_29613 = G__29625;
i__29606_29614 = G__29626;
continue;
} else {
var x_29627 = cljs.core.first.call(null,seq__29603_29621__$1);
cljs.compiler.emits.call(null,x_29627);


var G__29628 = cljs.core.next.call(null,seq__29603_29621__$1);
var G__29629 = null;
var G__29630 = (0);
var G__29631 = (0);
seq__29603_29611 = G__29628;
chunk__29604_29612 = G__29629;
count__29605_29613 = G__29630;
i__29606_29614 = G__29631;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29596){
var G__29597 = cljs.core.first.call(null,seq29596);
var seq29596__$1 = cljs.core.next.call(null,seq29596);
var G__29598 = cljs.core.first.call(null,seq29596__$1);
var seq29596__$2 = cljs.core.next.call(null,seq29596__$1);
var G__29599 = cljs.core.first.call(null,seq29596__$2);
var seq29596__$3 = cljs.core.next.call(null,seq29596__$2);
var G__29600 = cljs.core.first.call(null,seq29596__$3);
var seq29596__$4 = cljs.core.next.call(null,seq29596__$3);
var G__29601 = cljs.core.first.call(null,seq29596__$4);
var seq29596__$5 = cljs.core.next.call(null,seq29596__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29597,G__29598,G__29599,G__29600,G__29601,seq29596__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29632_29636 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29633_29637 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29634_29638 = true;
var _STAR_print_fn_STAR__temp_val__29635_29639 = ((function (_STAR_print_newline_STAR__orig_val__29632_29636,_STAR_print_fn_STAR__orig_val__29633_29637,_STAR_print_newline_STAR__temp_val__29634_29638,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29632_29636,_STAR_print_fn_STAR__orig_val__29633_29637,_STAR_print_newline_STAR__temp_val__29634_29638,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29634_29638;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29635_29639;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29633_29637;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29632_29636;
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
var vec__29640 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__29640,(0),null);
var name = cljs.core.nth.call(null,vec__29640,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__29640,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__29640,ns,name))
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
var vec__29643 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__29643,(0),null);
var flags = cljs.core.nth.call(null,vec__29643,(1),null);
var pattern = cljs.core.nth.call(null,vec__29643,(2),null);
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
return (function (p1__29646_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__29646_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__29648){
var map__29649 = p__29648;
var map__29649__$1 = (((((!((map__29649 == null))))?(((((map__29649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29649):map__29649);
var ast = map__29649__$1;
var info = cljs.core.get.call(null,map__29649__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29649__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29649__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__29651 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__29651__$1 = (((((!((map__29651 == null))))?(((((map__29651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29651):map__29651);
var cenv = map__29651__$1;
var options = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__29653 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__29653,cljs.analyzer.es5_allowed);
} else {
return G__29653;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__29654 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29654,reserved);
} else {
return G__29654;
}
})();
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__29655_29656 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__29655_29657__$1 = (((G__29655_29656 instanceof cljs.core.Keyword))?G__29655_29656.fqn:null);
switch (G__29655_29657__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__29659){
var map__29660 = p__29659;
var map__29660__$1 = (((((!((map__29660 == null))))?(((((map__29660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29660):map__29660);
var arg = map__29660__$1;
var env = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29662 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29662__$1 = (((((!((map__29662 == null))))?(((((map__29662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29662):map__29662);
var name = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__29664){
var map__29665 = p__29664;
var map__29665__$1 = (((((!((map__29665 == null))))?(((((map__29665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29665):map__29665);
var expr = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__29667_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29667_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29668){
var map__29669 = p__29668;
var map__29669__$1 = (((((!((map__29669 == null))))?(((((map__29669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29669):map__29669);
var env = cljs.core.get.call(null,map__29669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29669__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29669__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29671){
var map__29672 = p__29671;
var map__29672__$1 = (((((!((map__29672 == null))))?(((((map__29672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);
var items = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__29674_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29674_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29675){
var map__29676 = p__29675;
var map__29676__$1 = (((((!((map__29676 == null))))?(((((map__29676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);
var items = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___29700 = cljs.core.seq.call(null,items);
if(temp__5720__auto___29700){
var items_29701__$1 = temp__5720__auto___29700;
var vec__29678_29702 = items_29701__$1;
var seq__29679_29703 = cljs.core.seq.call(null,vec__29678_29702);
var first__29680_29704 = cljs.core.first.call(null,seq__29679_29703);
var seq__29679_29705__$1 = cljs.core.next.call(null,seq__29679_29703);
var vec__29681_29706 = first__29680_29704;
var k_29707 = cljs.core.nth.call(null,vec__29681_29706,(0),null);
var v_29708 = cljs.core.nth.call(null,vec__29681_29706,(1),null);
var r_29709 = seq__29679_29705__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29707),"\": ",emit_js_object_val.call(null,v_29708));

var seq__29684_29710 = cljs.core.seq.call(null,r_29709);
var chunk__29685_29711 = null;
var count__29686_29712 = (0);
var i__29687_29713 = (0);
while(true){
if((i__29687_29713 < count__29686_29712)){
var vec__29694_29714 = cljs.core._nth.call(null,chunk__29685_29711,i__29687_29713);
var k_29715__$1 = cljs.core.nth.call(null,vec__29694_29714,(0),null);
var v_29716__$1 = cljs.core.nth.call(null,vec__29694_29714,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29715__$1),"\": ",emit_js_object_val.call(null,v_29716__$1));


var G__29717 = seq__29684_29710;
var G__29718 = chunk__29685_29711;
var G__29719 = count__29686_29712;
var G__29720 = (i__29687_29713 + (1));
seq__29684_29710 = G__29717;
chunk__29685_29711 = G__29718;
count__29686_29712 = G__29719;
i__29687_29713 = G__29720;
continue;
} else {
var temp__5720__auto___29721__$1 = cljs.core.seq.call(null,seq__29684_29710);
if(temp__5720__auto___29721__$1){
var seq__29684_29722__$1 = temp__5720__auto___29721__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29684_29722__$1)){
var c__4550__auto___29723 = cljs.core.chunk_first.call(null,seq__29684_29722__$1);
var G__29724 = cljs.core.chunk_rest.call(null,seq__29684_29722__$1);
var G__29725 = c__4550__auto___29723;
var G__29726 = cljs.core.count.call(null,c__4550__auto___29723);
var G__29727 = (0);
seq__29684_29710 = G__29724;
chunk__29685_29711 = G__29725;
count__29686_29712 = G__29726;
i__29687_29713 = G__29727;
continue;
} else {
var vec__29697_29728 = cljs.core.first.call(null,seq__29684_29722__$1);
var k_29729__$1 = cljs.core.nth.call(null,vec__29697_29728,(0),null);
var v_29730__$1 = cljs.core.nth.call(null,vec__29697_29728,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29729__$1),"\": ",emit_js_object_val.call(null,v_29730__$1));


var G__29731 = cljs.core.next.call(null,seq__29684_29722__$1);
var G__29732 = null;
var G__29733 = (0);
var G__29734 = (0);
seq__29684_29710 = G__29731;
chunk__29685_29711 = G__29732;
count__29686_29712 = G__29733;
i__29687_29713 = G__29734;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__29735){
var map__29736 = p__29735;
var map__29736__$1 = (((((!((map__29736 == null))))?(((((map__29736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29736):map__29736);
var keys = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__29738){
var map__29739 = p__29738;
var map__29739__$1 = (((((!((map__29739 == null))))?(((((map__29739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29739):map__29739);
var items = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__29741){
var map__29742 = p__29741;
var map__29742__$1 = (((((!((map__29742 == null))))?(((((map__29742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29742):map__29742);
var expr = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__29744){
var map__29745 = p__29744;
var map__29745__$1 = (((((!((map__29745 == null))))?(((((map__29745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29745):map__29745);
var form = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29747 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29747__$1 = (((((!((map__29747 == null))))?(((((map__29747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29747):map__29747);
var op = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__29749 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29749__$1 = (((((!((map__29749 == null))))?(((((map__29749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29749):map__29749);
var op = cljs.core.get.call(null,map__29749__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29749__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29749__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29751){
var map__29752 = p__29751;
var map__29752__$1 = (((((!((map__29752 == null))))?(((((map__29752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29752):map__29752);
var test = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__29754){
var map__29755 = p__29754;
var map__29755__$1 = (((((!((map__29755 == null))))?(((((map__29755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29755):map__29755);
var v = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29757_29793 = cljs.core.seq.call(null,nodes);
var chunk__29758_29794 = null;
var count__29759_29795 = (0);
var i__29760_29796 = (0);
while(true){
if((i__29760_29796 < count__29759_29795)){
var map__29777_29797 = cljs.core._nth.call(null,chunk__29758_29794,i__29760_29796);
var map__29777_29798__$1 = (((((!((map__29777_29797 == null))))?(((((map__29777_29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29777_29797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29777_29797):map__29777_29797);
var ts_29799 = cljs.core.get.call(null,map__29777_29798__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29778_29800 = cljs.core.get.call(null,map__29777_29798__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29778_29801__$1 = (((((!((map__29778_29800 == null))))?(((((map__29778_29800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29778_29800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29778_29800):map__29778_29800);
var then_29802 = cljs.core.get.call(null,map__29778_29801__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29781_29803 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29799));
var chunk__29782_29804 = null;
var count__29783_29805 = (0);
var i__29784_29806 = (0);
while(true){
if((i__29784_29806 < count__29783_29805)){
var test_29807 = cljs.core._nth.call(null,chunk__29782_29804,i__29784_29806);
cljs.compiler.emitln.call(null,"case ",test_29807,":");


var G__29808 = seq__29781_29803;
var G__29809 = chunk__29782_29804;
var G__29810 = count__29783_29805;
var G__29811 = (i__29784_29806 + (1));
seq__29781_29803 = G__29808;
chunk__29782_29804 = G__29809;
count__29783_29805 = G__29810;
i__29784_29806 = G__29811;
continue;
} else {
var temp__5720__auto___29812 = cljs.core.seq.call(null,seq__29781_29803);
if(temp__5720__auto___29812){
var seq__29781_29813__$1 = temp__5720__auto___29812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29781_29813__$1)){
var c__4550__auto___29814 = cljs.core.chunk_first.call(null,seq__29781_29813__$1);
var G__29815 = cljs.core.chunk_rest.call(null,seq__29781_29813__$1);
var G__29816 = c__4550__auto___29814;
var G__29817 = cljs.core.count.call(null,c__4550__auto___29814);
var G__29818 = (0);
seq__29781_29803 = G__29815;
chunk__29782_29804 = G__29816;
count__29783_29805 = G__29817;
i__29784_29806 = G__29818;
continue;
} else {
var test_29819 = cljs.core.first.call(null,seq__29781_29813__$1);
cljs.compiler.emitln.call(null,"case ",test_29819,":");


var G__29820 = cljs.core.next.call(null,seq__29781_29813__$1);
var G__29821 = null;
var G__29822 = (0);
var G__29823 = (0);
seq__29781_29803 = G__29820;
chunk__29782_29804 = G__29821;
count__29783_29805 = G__29822;
i__29784_29806 = G__29823;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29802);
} else {
cljs.compiler.emitln.call(null,then_29802);
}

cljs.compiler.emitln.call(null,"break;");


var G__29824 = seq__29757_29793;
var G__29825 = chunk__29758_29794;
var G__29826 = count__29759_29795;
var G__29827 = (i__29760_29796 + (1));
seq__29757_29793 = G__29824;
chunk__29758_29794 = G__29825;
count__29759_29795 = G__29826;
i__29760_29796 = G__29827;
continue;
} else {
var temp__5720__auto___29828 = cljs.core.seq.call(null,seq__29757_29793);
if(temp__5720__auto___29828){
var seq__29757_29829__$1 = temp__5720__auto___29828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29757_29829__$1)){
var c__4550__auto___29830 = cljs.core.chunk_first.call(null,seq__29757_29829__$1);
var G__29831 = cljs.core.chunk_rest.call(null,seq__29757_29829__$1);
var G__29832 = c__4550__auto___29830;
var G__29833 = cljs.core.count.call(null,c__4550__auto___29830);
var G__29834 = (0);
seq__29757_29793 = G__29831;
chunk__29758_29794 = G__29832;
count__29759_29795 = G__29833;
i__29760_29796 = G__29834;
continue;
} else {
var map__29785_29835 = cljs.core.first.call(null,seq__29757_29829__$1);
var map__29785_29836__$1 = (((((!((map__29785_29835 == null))))?(((((map__29785_29835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29785_29835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29785_29835):map__29785_29835);
var ts_29837 = cljs.core.get.call(null,map__29785_29836__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29786_29838 = cljs.core.get.call(null,map__29785_29836__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29786_29839__$1 = (((((!((map__29786_29838 == null))))?(((((map__29786_29838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29786_29838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786_29838):map__29786_29838);
var then_29840 = cljs.core.get.call(null,map__29786_29839__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29789_29841 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29837));
var chunk__29790_29842 = null;
var count__29791_29843 = (0);
var i__29792_29844 = (0);
while(true){
if((i__29792_29844 < count__29791_29843)){
var test_29845 = cljs.core._nth.call(null,chunk__29790_29842,i__29792_29844);
cljs.compiler.emitln.call(null,"case ",test_29845,":");


var G__29846 = seq__29789_29841;
var G__29847 = chunk__29790_29842;
var G__29848 = count__29791_29843;
var G__29849 = (i__29792_29844 + (1));
seq__29789_29841 = G__29846;
chunk__29790_29842 = G__29847;
count__29791_29843 = G__29848;
i__29792_29844 = G__29849;
continue;
} else {
var temp__5720__auto___29850__$1 = cljs.core.seq.call(null,seq__29789_29841);
if(temp__5720__auto___29850__$1){
var seq__29789_29851__$1 = temp__5720__auto___29850__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29789_29851__$1)){
var c__4550__auto___29852 = cljs.core.chunk_first.call(null,seq__29789_29851__$1);
var G__29853 = cljs.core.chunk_rest.call(null,seq__29789_29851__$1);
var G__29854 = c__4550__auto___29852;
var G__29855 = cljs.core.count.call(null,c__4550__auto___29852);
var G__29856 = (0);
seq__29789_29841 = G__29853;
chunk__29790_29842 = G__29854;
count__29791_29843 = G__29855;
i__29792_29844 = G__29856;
continue;
} else {
var test_29857 = cljs.core.first.call(null,seq__29789_29851__$1);
cljs.compiler.emitln.call(null,"case ",test_29857,":");


var G__29858 = cljs.core.next.call(null,seq__29789_29851__$1);
var G__29859 = null;
var G__29860 = (0);
var G__29861 = (0);
seq__29789_29841 = G__29858;
chunk__29790_29842 = G__29859;
count__29791_29843 = G__29860;
i__29792_29844 = G__29861;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29840);
} else {
cljs.compiler.emitln.call(null,then_29840);
}

cljs.compiler.emitln.call(null,"break;");


var G__29862 = cljs.core.next.call(null,seq__29757_29829__$1);
var G__29863 = null;
var G__29864 = (0);
var G__29865 = (0);
seq__29757_29793 = G__29862;
chunk__29758_29794 = G__29863;
count__29759_29795 = G__29864;
i__29760_29796 = G__29865;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29866){
var map__29867 = p__29866;
var map__29867__$1 = (((((!((map__29867 == null))))?(((((map__29867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29867):map__29867);
var throw$ = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__29870 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__29870,(0),null);
var rstr = cljs.core.nth.call(null,vec__29870,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__29870,fstr,rstr,ret_t,axstr){
return (function (p1__29869_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29869_SHARP_);
});})(idx,vec__29870,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__29873 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29873,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29873;
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
return (function (p1__29874_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29874_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__29875 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29876 = cljs.core.seq.call(null,vec__29875);
var first__29877 = cljs.core.first.call(null,seq__29876);
var seq__29876__$1 = cljs.core.next.call(null,seq__29876);
var p = first__29877;
var first__29877__$1 = cljs.core.first.call(null,seq__29876__$1);
var seq__29876__$2 = cljs.core.next.call(null,seq__29876__$1);
var ts = first__29877__$1;
var first__29877__$2 = cljs.core.first.call(null,seq__29876__$2);
var seq__29876__$3 = cljs.core.next.call(null,seq__29876__$2);
var n = first__29877__$2;
var xs = seq__29876__$3;
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
var vec__29878 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29879 = cljs.core.seq.call(null,vec__29878);
var first__29880 = cljs.core.first.call(null,seq__29879);
var seq__29879__$1 = cljs.core.next.call(null,seq__29879);
var p = first__29880;
var first__29880__$1 = cljs.core.first.call(null,seq__29879__$1);
var seq__29879__$2 = cljs.core.next.call(null,seq__29879__$1);
var ts = first__29880__$1;
var xs = seq__29879__$2;
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
var G__29883 = arguments.length;
switch (G__29883) {
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
var vec__29891 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__29881_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__29881_SHARP_);
} else {
return p1__29881_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__29892 = cljs.core.seq.call(null,vec__29891);
var first__29893 = cljs.core.first.call(null,seq__29892);
var seq__29892__$1 = cljs.core.next.call(null,seq__29892);
var x = first__29893;
var ys = seq__29892__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__29894 = cljs.core.seq.call(null,ys);
var chunk__29895 = null;
var count__29896 = (0);
var i__29897 = (0);
while(true){
if((i__29897 < count__29896)){
var next_line = cljs.core._nth.call(null,chunk__29895,i__29897);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29903 = seq__29894;
var G__29904 = chunk__29895;
var G__29905 = count__29896;
var G__29906 = (i__29897 + (1));
seq__29894 = G__29903;
chunk__29895 = G__29904;
count__29896 = G__29905;
i__29897 = G__29906;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29894);
if(temp__5720__auto__){
var seq__29894__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29894__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29894__$1);
var G__29907 = cljs.core.chunk_rest.call(null,seq__29894__$1);
var G__29908 = c__4550__auto__;
var G__29909 = cljs.core.count.call(null,c__4550__auto__);
var G__29910 = (0);
seq__29894 = G__29907;
chunk__29895 = G__29908;
count__29896 = G__29909;
i__29897 = G__29910;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__29894__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29911 = cljs.core.next.call(null,seq__29894__$1);
var G__29912 = null;
var G__29913 = (0);
var G__29914 = (0);
seq__29894 = G__29911;
chunk__29895 = G__29912;
count__29896 = G__29913;
i__29897 = G__29914;
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

var seq__29898_29915 = cljs.core.seq.call(null,docs__$2);
var chunk__29899_29916 = null;
var count__29900_29917 = (0);
var i__29901_29918 = (0);
while(true){
if((i__29901_29918 < count__29900_29917)){
var e_29919 = cljs.core._nth.call(null,chunk__29899_29916,i__29901_29918);
if(cljs.core.truth_(e_29919)){
print_comment_lines.call(null,e_29919);
} else {
}


var G__29920 = seq__29898_29915;
var G__29921 = chunk__29899_29916;
var G__29922 = count__29900_29917;
var G__29923 = (i__29901_29918 + (1));
seq__29898_29915 = G__29920;
chunk__29899_29916 = G__29921;
count__29900_29917 = G__29922;
i__29901_29918 = G__29923;
continue;
} else {
var temp__5720__auto___29924 = cljs.core.seq.call(null,seq__29898_29915);
if(temp__5720__auto___29924){
var seq__29898_29925__$1 = temp__5720__auto___29924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29898_29925__$1)){
var c__4550__auto___29926 = cljs.core.chunk_first.call(null,seq__29898_29925__$1);
var G__29927 = cljs.core.chunk_rest.call(null,seq__29898_29925__$1);
var G__29928 = c__4550__auto___29926;
var G__29929 = cljs.core.count.call(null,c__4550__auto___29926);
var G__29930 = (0);
seq__29898_29915 = G__29927;
chunk__29899_29916 = G__29928;
count__29900_29917 = G__29929;
i__29901_29918 = G__29930;
continue;
} else {
var e_29931 = cljs.core.first.call(null,seq__29898_29925__$1);
if(cljs.core.truth_(e_29931)){
print_comment_lines.call(null,e_29931);
} else {
}


var G__29932 = cljs.core.next.call(null,seq__29898_29925__$1);
var G__29933 = null;
var G__29934 = (0);
var G__29935 = (0);
seq__29898_29915 = G__29932;
chunk__29899_29916 = G__29933;
count__29900_29917 = G__29934;
i__29901_29918 = G__29935;
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
return (function (p1__29937_SHARP_){
return goog.string.startsWith(p1__29937_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29938){
var map__29939 = p__29938;
var map__29939__$1 = (((((!((map__29939 == null))))?(((((map__29939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29939):map__29939);
var doc = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__29939__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29941){
var map__29942 = p__29941;
var map__29942__$1 = (((((!((map__29942 == null))))?(((((map__29942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29942):map__29942);
var name = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__29944_29968 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__29945_29969 = null;
var count__29946_29970 = (0);
var i__29947_29971 = (0);
while(true){
if((i__29947_29971 < count__29946_29970)){
var vec__29954_29972 = cljs.core._nth.call(null,chunk__29945_29969,i__29947_29971);
var i_29973 = cljs.core.nth.call(null,vec__29954_29972,(0),null);
var param_29974 = cljs.core.nth.call(null,vec__29954_29972,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29974);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29975 = seq__29944_29968;
var G__29976 = chunk__29945_29969;
var G__29977 = count__29946_29970;
var G__29978 = (i__29947_29971 + (1));
seq__29944_29968 = G__29975;
chunk__29945_29969 = G__29976;
count__29946_29970 = G__29977;
i__29947_29971 = G__29978;
continue;
} else {
var temp__5720__auto___29979 = cljs.core.seq.call(null,seq__29944_29968);
if(temp__5720__auto___29979){
var seq__29944_29980__$1 = temp__5720__auto___29979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29944_29980__$1)){
var c__4550__auto___29981 = cljs.core.chunk_first.call(null,seq__29944_29980__$1);
var G__29982 = cljs.core.chunk_rest.call(null,seq__29944_29980__$1);
var G__29983 = c__4550__auto___29981;
var G__29984 = cljs.core.count.call(null,c__4550__auto___29981);
var G__29985 = (0);
seq__29944_29968 = G__29982;
chunk__29945_29969 = G__29983;
count__29946_29970 = G__29984;
i__29947_29971 = G__29985;
continue;
} else {
var vec__29957_29986 = cljs.core.first.call(null,seq__29944_29980__$1);
var i_29987 = cljs.core.nth.call(null,vec__29957_29986,(0),null);
var param_29988 = cljs.core.nth.call(null,vec__29957_29986,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29988);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29989 = cljs.core.next.call(null,seq__29944_29980__$1);
var G__29990 = null;
var G__29991 = (0);
var G__29992 = (0);
seq__29944_29968 = G__29989;
chunk__29945_29969 = G__29990;
count__29946_29970 = G__29991;
i__29947_29971 = G__29992;
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

var seq__29960_29993 = cljs.core.seq.call(null,params);
var chunk__29961_29994 = null;
var count__29962_29995 = (0);
var i__29963_29996 = (0);
while(true){
if((i__29963_29996 < count__29962_29995)){
var param_29997 = cljs.core._nth.call(null,chunk__29961_29994,i__29963_29996);
cljs.compiler.emit.call(null,param_29997);

if(cljs.core._EQ_.call(null,param_29997,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29998 = seq__29960_29993;
var G__29999 = chunk__29961_29994;
var G__30000 = count__29962_29995;
var G__30001 = (i__29963_29996 + (1));
seq__29960_29993 = G__29998;
chunk__29961_29994 = G__29999;
count__29962_29995 = G__30000;
i__29963_29996 = G__30001;
continue;
} else {
var temp__5720__auto___30002 = cljs.core.seq.call(null,seq__29960_29993);
if(temp__5720__auto___30002){
var seq__29960_30003__$1 = temp__5720__auto___30002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29960_30003__$1)){
var c__4550__auto___30004 = cljs.core.chunk_first.call(null,seq__29960_30003__$1);
var G__30005 = cljs.core.chunk_rest.call(null,seq__29960_30003__$1);
var G__30006 = c__4550__auto___30004;
var G__30007 = cljs.core.count.call(null,c__4550__auto___30004);
var G__30008 = (0);
seq__29960_29993 = G__30005;
chunk__29961_29994 = G__30006;
count__29962_29995 = G__30007;
i__29963_29996 = G__30008;
continue;
} else {
var param_30009 = cljs.core.first.call(null,seq__29960_30003__$1);
cljs.compiler.emit.call(null,param_30009);

if(cljs.core._EQ_.call(null,param_30009,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30010 = cljs.core.next.call(null,seq__29960_30003__$1);
var G__30011 = null;
var G__30012 = (0);
var G__30013 = (0);
seq__29960_29993 = G__30010;
chunk__29961_29994 = G__30011;
count__29962_29995 = G__30012;
i__29963_29996 = G__30013;
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

var seq__29964_30014 = cljs.core.seq.call(null,params);
var chunk__29965_30015 = null;
var count__29966_30016 = (0);
var i__29967_30017 = (0);
while(true){
if((i__29967_30017 < count__29966_30016)){
var param_30018 = cljs.core._nth.call(null,chunk__29965_30015,i__29967_30017);
cljs.compiler.emit.call(null,param_30018);

if(cljs.core._EQ_.call(null,param_30018,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30019 = seq__29964_30014;
var G__30020 = chunk__29965_30015;
var G__30021 = count__29966_30016;
var G__30022 = (i__29967_30017 + (1));
seq__29964_30014 = G__30019;
chunk__29965_30015 = G__30020;
count__29966_30016 = G__30021;
i__29967_30017 = G__30022;
continue;
} else {
var temp__5720__auto___30023 = cljs.core.seq.call(null,seq__29964_30014);
if(temp__5720__auto___30023){
var seq__29964_30024__$1 = temp__5720__auto___30023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29964_30024__$1)){
var c__4550__auto___30025 = cljs.core.chunk_first.call(null,seq__29964_30024__$1);
var G__30026 = cljs.core.chunk_rest.call(null,seq__29964_30024__$1);
var G__30027 = c__4550__auto___30025;
var G__30028 = cljs.core.count.call(null,c__4550__auto___30025);
var G__30029 = (0);
seq__29964_30014 = G__30026;
chunk__29965_30015 = G__30027;
count__29966_30016 = G__30028;
i__29967_30017 = G__30029;
continue;
} else {
var param_30030 = cljs.core.first.call(null,seq__29964_30024__$1);
cljs.compiler.emit.call(null,param_30030);

if(cljs.core._EQ_.call(null,param_30030,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30031 = cljs.core.next.call(null,seq__29964_30024__$1);
var G__30032 = null;
var G__30033 = (0);
var G__30034 = (0);
seq__29964_30014 = G__30031;
chunk__29965_30015 = G__30032;
count__29966_30016 = G__30033;
i__29967_30017 = G__30034;
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
var seq__30035 = cljs.core.seq.call(null,params);
var chunk__30036 = null;
var count__30037 = (0);
var i__30038 = (0);
while(true){
if((i__30038 < count__30037)){
var param = cljs.core._nth.call(null,chunk__30036,i__30038);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30039 = seq__30035;
var G__30040 = chunk__30036;
var G__30041 = count__30037;
var G__30042 = (i__30038 + (1));
seq__30035 = G__30039;
chunk__30036 = G__30040;
count__30037 = G__30041;
i__30038 = G__30042;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30035);
if(temp__5720__auto__){
var seq__30035__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30035__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30035__$1);
var G__30043 = cljs.core.chunk_rest.call(null,seq__30035__$1);
var G__30044 = c__4550__auto__;
var G__30045 = cljs.core.count.call(null,c__4550__auto__);
var G__30046 = (0);
seq__30035 = G__30043;
chunk__30036 = G__30044;
count__30037 = G__30045;
i__30038 = G__30046;
continue;
} else {
var param = cljs.core.first.call(null,seq__30035__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30047 = cljs.core.next.call(null,seq__30035__$1);
var G__30048 = null;
var G__30049 = (0);
var G__30050 = (0);
seq__30035 = G__30047;
chunk__30036 = G__30048;
count__30037 = G__30049;
i__30038 = G__30050;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30051){
var map__30052 = p__30051;
var map__30052__$1 = (((((!((map__30052 == null))))?(((((map__30052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30052):map__30052);
var expr = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30054){
var map__30055 = p__30054;
var map__30055__$1 = (((((!((map__30055 == null))))?(((((map__30055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30055):map__30055);
var f = map__30055__$1;
var expr = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30055__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30065__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30066 = cljs.compiler.munge.call(null,name_30065__$1);
var delegate_name_30067 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30066),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30067," = function (");

var seq__30057_30068 = cljs.core.seq.call(null,params);
var chunk__30058_30069 = null;
var count__30059_30070 = (0);
var i__30060_30071 = (0);
while(true){
if((i__30060_30071 < count__30059_30070)){
var param_30072 = cljs.core._nth.call(null,chunk__30058_30069,i__30060_30071);
cljs.compiler.emit.call(null,param_30072);

if(cljs.core._EQ_.call(null,param_30072,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30073 = seq__30057_30068;
var G__30074 = chunk__30058_30069;
var G__30075 = count__30059_30070;
var G__30076 = (i__30060_30071 + (1));
seq__30057_30068 = G__30073;
chunk__30058_30069 = G__30074;
count__30059_30070 = G__30075;
i__30060_30071 = G__30076;
continue;
} else {
var temp__5720__auto___30077 = cljs.core.seq.call(null,seq__30057_30068);
if(temp__5720__auto___30077){
var seq__30057_30078__$1 = temp__5720__auto___30077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30057_30078__$1)){
var c__4550__auto___30079 = cljs.core.chunk_first.call(null,seq__30057_30078__$1);
var G__30080 = cljs.core.chunk_rest.call(null,seq__30057_30078__$1);
var G__30081 = c__4550__auto___30079;
var G__30082 = cljs.core.count.call(null,c__4550__auto___30079);
var G__30083 = (0);
seq__30057_30068 = G__30080;
chunk__30058_30069 = G__30081;
count__30059_30070 = G__30082;
i__30060_30071 = G__30083;
continue;
} else {
var param_30084 = cljs.core.first.call(null,seq__30057_30078__$1);
cljs.compiler.emit.call(null,param_30084);

if(cljs.core._EQ_.call(null,param_30084,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30085 = cljs.core.next.call(null,seq__30057_30078__$1);
var G__30086 = null;
var G__30087 = (0);
var G__30088 = (0);
seq__30057_30068 = G__30085;
chunk__30058_30069 = G__30086;
count__30059_30070 = G__30087;
i__30060_30071 = G__30088;
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

cljs.compiler.emitln.call(null,"var ",mname_30066," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30089 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30089,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30067,".call(this,");

var seq__30061_30090 = cljs.core.seq.call(null,params);
var chunk__30062_30091 = null;
var count__30063_30092 = (0);
var i__30064_30093 = (0);
while(true){
if((i__30064_30093 < count__30063_30092)){
var param_30094 = cljs.core._nth.call(null,chunk__30062_30091,i__30064_30093);
cljs.compiler.emit.call(null,param_30094);

if(cljs.core._EQ_.call(null,param_30094,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30095 = seq__30061_30090;
var G__30096 = chunk__30062_30091;
var G__30097 = count__30063_30092;
var G__30098 = (i__30064_30093 + (1));
seq__30061_30090 = G__30095;
chunk__30062_30091 = G__30096;
count__30063_30092 = G__30097;
i__30064_30093 = G__30098;
continue;
} else {
var temp__5720__auto___30099 = cljs.core.seq.call(null,seq__30061_30090);
if(temp__5720__auto___30099){
var seq__30061_30100__$1 = temp__5720__auto___30099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30061_30100__$1)){
var c__4550__auto___30101 = cljs.core.chunk_first.call(null,seq__30061_30100__$1);
var G__30102 = cljs.core.chunk_rest.call(null,seq__30061_30100__$1);
var G__30103 = c__4550__auto___30101;
var G__30104 = cljs.core.count.call(null,c__4550__auto___30101);
var G__30105 = (0);
seq__30061_30090 = G__30102;
chunk__30062_30091 = G__30103;
count__30063_30092 = G__30104;
i__30064_30093 = G__30105;
continue;
} else {
var param_30106 = cljs.core.first.call(null,seq__30061_30100__$1);
cljs.compiler.emit.call(null,param_30106);

if(cljs.core._EQ_.call(null,param_30106,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30107 = cljs.core.next.call(null,seq__30061_30100__$1);
var G__30108 = null;
var G__30109 = (0);
var G__30110 = (0);
seq__30061_30090 = G__30107;
chunk__30062_30091 = G__30108;
count__30063_30092 = G__30109;
i__30064_30093 = G__30110;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30066,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30066,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30065__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30066,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30067,";");

cljs.compiler.emitln.call(null,"return ",mname_30066,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30114){
var map__30115 = p__30114;
var map__30115__$1 = (((((!((map__30115 == null))))?(((((map__30115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30115):map__30115);
var variadic = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30111_SHARP_){
var and__4120__auto__ = p1__30111_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30111_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_30168__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30169 = cljs.compiler.munge.call(null,name_30168__$1);
var maxparams_30170 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30171 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30168__$1,mname_30169,maxparams_30170,loop_locals,map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30169),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30168__$1,mname_30169,maxparams_30170,loop_locals,map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_30172 = cljs.core.sort_by.call(null,((function (name_30168__$1,mname_30169,maxparams_30170,mmap_30171,loop_locals,map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30112_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30112_SHARP_)));
});})(name_30168__$1,mname_30169,maxparams_30170,mmap_30171,loop_locals,map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30171));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30169," = null;");

var seq__30117_30173 = cljs.core.seq.call(null,ms_30172);
var chunk__30118_30174 = null;
var count__30119_30175 = (0);
var i__30120_30176 = (0);
while(true){
if((i__30120_30176 < count__30119_30175)){
var vec__30127_30177 = cljs.core._nth.call(null,chunk__30118_30174,i__30120_30176);
var n_30178 = cljs.core.nth.call(null,vec__30127_30177,(0),null);
var meth_30179 = cljs.core.nth.call(null,vec__30127_30177,(1),null);
cljs.compiler.emits.call(null,"var ",n_30178," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30179))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30179);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30179);
}

cljs.compiler.emitln.call(null,";");


var G__30180 = seq__30117_30173;
var G__30181 = chunk__30118_30174;
var G__30182 = count__30119_30175;
var G__30183 = (i__30120_30176 + (1));
seq__30117_30173 = G__30180;
chunk__30118_30174 = G__30181;
count__30119_30175 = G__30182;
i__30120_30176 = G__30183;
continue;
} else {
var temp__5720__auto___30184 = cljs.core.seq.call(null,seq__30117_30173);
if(temp__5720__auto___30184){
var seq__30117_30185__$1 = temp__5720__auto___30184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30117_30185__$1)){
var c__4550__auto___30186 = cljs.core.chunk_first.call(null,seq__30117_30185__$1);
var G__30187 = cljs.core.chunk_rest.call(null,seq__30117_30185__$1);
var G__30188 = c__4550__auto___30186;
var G__30189 = cljs.core.count.call(null,c__4550__auto___30186);
var G__30190 = (0);
seq__30117_30173 = G__30187;
chunk__30118_30174 = G__30188;
count__30119_30175 = G__30189;
i__30120_30176 = G__30190;
continue;
} else {
var vec__30130_30191 = cljs.core.first.call(null,seq__30117_30185__$1);
var n_30192 = cljs.core.nth.call(null,vec__30130_30191,(0),null);
var meth_30193 = cljs.core.nth.call(null,vec__30130_30191,(1),null);
cljs.compiler.emits.call(null,"var ",n_30192," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30193))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30193);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30193);
}

cljs.compiler.emitln.call(null,";");


var G__30194 = cljs.core.next.call(null,seq__30117_30185__$1);
var G__30195 = null;
var G__30196 = (0);
var G__30197 = (0);
seq__30117_30173 = G__30194;
chunk__30118_30174 = G__30195;
count__30119_30175 = G__30196;
i__30120_30176 = G__30197;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30169," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30170),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30170)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30170));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30133_30198 = cljs.core.seq.call(null,ms_30172);
var chunk__30134_30199 = null;
var count__30135_30200 = (0);
var i__30136_30201 = (0);
while(true){
if((i__30136_30201 < count__30135_30200)){
var vec__30143_30202 = cljs.core._nth.call(null,chunk__30134_30199,i__30136_30201);
var n_30203 = cljs.core.nth.call(null,vec__30143_30202,(0),null);
var meth_30204 = cljs.core.nth.call(null,vec__30143_30202,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30204))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30205 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30205," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30206 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30205," = new cljs.core.IndexedSeq(",a_30206,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30203,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30170)),(((cljs.core.count.call(null,maxparams_30170) > (1)))?", ":null),restarg_30205,");");
} else {
var pcnt_30207 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30204));
cljs.compiler.emitln.call(null,"case ",pcnt_30207,":");

cljs.compiler.emitln.call(null,"return ",n_30203,".call(this",(((pcnt_30207 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30207,maxparams_30170)),null,(1),null)),(2),null))),");");
}


var G__30208 = seq__30133_30198;
var G__30209 = chunk__30134_30199;
var G__30210 = count__30135_30200;
var G__30211 = (i__30136_30201 + (1));
seq__30133_30198 = G__30208;
chunk__30134_30199 = G__30209;
count__30135_30200 = G__30210;
i__30136_30201 = G__30211;
continue;
} else {
var temp__5720__auto___30212 = cljs.core.seq.call(null,seq__30133_30198);
if(temp__5720__auto___30212){
var seq__30133_30213__$1 = temp__5720__auto___30212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30133_30213__$1)){
var c__4550__auto___30214 = cljs.core.chunk_first.call(null,seq__30133_30213__$1);
var G__30215 = cljs.core.chunk_rest.call(null,seq__30133_30213__$1);
var G__30216 = c__4550__auto___30214;
var G__30217 = cljs.core.count.call(null,c__4550__auto___30214);
var G__30218 = (0);
seq__30133_30198 = G__30215;
chunk__30134_30199 = G__30216;
count__30135_30200 = G__30217;
i__30136_30201 = G__30218;
continue;
} else {
var vec__30146_30219 = cljs.core.first.call(null,seq__30133_30213__$1);
var n_30220 = cljs.core.nth.call(null,vec__30146_30219,(0),null);
var meth_30221 = cljs.core.nth.call(null,vec__30146_30219,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30221))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30222 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30222," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30223 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30222," = new cljs.core.IndexedSeq(",a_30223,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30220,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30170)),(((cljs.core.count.call(null,maxparams_30170) > (1)))?", ":null),restarg_30222,");");
} else {
var pcnt_30224 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30221));
cljs.compiler.emitln.call(null,"case ",pcnt_30224,":");

cljs.compiler.emitln.call(null,"return ",n_30220,".call(this",(((pcnt_30224 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30224,maxparams_30170)),null,(1),null)),(2),null))),");");
}


var G__30225 = cljs.core.next.call(null,seq__30133_30213__$1);
var G__30226 = null;
var G__30227 = (0);
var G__30228 = (0);
seq__30133_30198 = G__30225;
chunk__30134_30199 = G__30226;
count__30135_30200 = G__30227;
i__30136_30201 = G__30228;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_30229 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_30172)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_30229,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30169,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30169,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30168__$1,mname_30169,maxparams_30170,mmap_30171,ms_30172,loop_locals,map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30113_SHARP_){
var vec__30149 = p1__30113_SHARP_;
var n = cljs.core.nth.call(null,vec__30149,(0),null);
var m = cljs.core.nth.call(null,vec__30149,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30168__$1,mname_30169,maxparams_30170,mmap_30171,ms_30172,loop_locals,map__30115,map__30115__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_30172),".cljs$lang$applyTo;");
} else {
}

var seq__30152_30230 = cljs.core.seq.call(null,ms_30172);
var chunk__30153_30231 = null;
var count__30154_30232 = (0);
var i__30155_30233 = (0);
while(true){
if((i__30155_30233 < count__30154_30232)){
var vec__30162_30234 = cljs.core._nth.call(null,chunk__30153_30231,i__30155_30233);
var n_30235 = cljs.core.nth.call(null,vec__30162_30234,(0),null);
var meth_30236 = cljs.core.nth.call(null,vec__30162_30234,(1),null);
var c_30237 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30236));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30236))){
cljs.compiler.emitln.call(null,mname_30169,".cljs$core$IFn$_invoke$arity$variadic = ",n_30235,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30169,".cljs$core$IFn$_invoke$arity$",c_30237," = ",n_30235,";");
}


var G__30238 = seq__30152_30230;
var G__30239 = chunk__30153_30231;
var G__30240 = count__30154_30232;
var G__30241 = (i__30155_30233 + (1));
seq__30152_30230 = G__30238;
chunk__30153_30231 = G__30239;
count__30154_30232 = G__30240;
i__30155_30233 = G__30241;
continue;
} else {
var temp__5720__auto___30242 = cljs.core.seq.call(null,seq__30152_30230);
if(temp__5720__auto___30242){
var seq__30152_30243__$1 = temp__5720__auto___30242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30152_30243__$1)){
var c__4550__auto___30244 = cljs.core.chunk_first.call(null,seq__30152_30243__$1);
var G__30245 = cljs.core.chunk_rest.call(null,seq__30152_30243__$1);
var G__30246 = c__4550__auto___30244;
var G__30247 = cljs.core.count.call(null,c__4550__auto___30244);
var G__30248 = (0);
seq__30152_30230 = G__30245;
chunk__30153_30231 = G__30246;
count__30154_30232 = G__30247;
i__30155_30233 = G__30248;
continue;
} else {
var vec__30165_30249 = cljs.core.first.call(null,seq__30152_30243__$1);
var n_30250 = cljs.core.nth.call(null,vec__30165_30249,(0),null);
var meth_30251 = cljs.core.nth.call(null,vec__30165_30249,(1),null);
var c_30252 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30251));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30251))){
cljs.compiler.emitln.call(null,mname_30169,".cljs$core$IFn$_invoke$arity$variadic = ",n_30250,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30169,".cljs$core$IFn$_invoke$arity$",c_30252," = ",n_30250,";");
}


var G__30253 = cljs.core.next.call(null,seq__30152_30243__$1);
var G__30254 = null;
var G__30255 = (0);
var G__30256 = (0);
seq__30152_30230 = G__30253;
chunk__30153_30231 = G__30254;
count__30154_30232 = G__30255;
i__30155_30233 = G__30256;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30169,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30257){
var map__30258 = p__30257;
var map__30258__$1 = (((((!((map__30258 == null))))?(((((map__30258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30258):map__30258);
var statements = cljs.core.get.call(null,map__30258__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30258__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30258__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__30260_30264 = cljs.core.seq.call(null,statements);
var chunk__30261_30265 = null;
var count__30262_30266 = (0);
var i__30263_30267 = (0);
while(true){
if((i__30263_30267 < count__30262_30266)){
var s_30268 = cljs.core._nth.call(null,chunk__30261_30265,i__30263_30267);
cljs.compiler.emitln.call(null,s_30268);


var G__30269 = seq__30260_30264;
var G__30270 = chunk__30261_30265;
var G__30271 = count__30262_30266;
var G__30272 = (i__30263_30267 + (1));
seq__30260_30264 = G__30269;
chunk__30261_30265 = G__30270;
count__30262_30266 = G__30271;
i__30263_30267 = G__30272;
continue;
} else {
var temp__5720__auto___30273 = cljs.core.seq.call(null,seq__30260_30264);
if(temp__5720__auto___30273){
var seq__30260_30274__$1 = temp__5720__auto___30273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30260_30274__$1)){
var c__4550__auto___30275 = cljs.core.chunk_first.call(null,seq__30260_30274__$1);
var G__30276 = cljs.core.chunk_rest.call(null,seq__30260_30274__$1);
var G__30277 = c__4550__auto___30275;
var G__30278 = cljs.core.count.call(null,c__4550__auto___30275);
var G__30279 = (0);
seq__30260_30264 = G__30276;
chunk__30261_30265 = G__30277;
count__30262_30266 = G__30278;
i__30263_30267 = G__30279;
continue;
} else {
var s_30280 = cljs.core.first.call(null,seq__30260_30274__$1);
cljs.compiler.emitln.call(null,s_30280);


var G__30281 = cljs.core.next.call(null,seq__30260_30274__$1);
var G__30282 = null;
var G__30283 = (0);
var G__30284 = (0);
seq__30260_30264 = G__30281;
chunk__30261_30265 = G__30282;
count__30262_30266 = G__30283;
i__30263_30267 = G__30284;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30285){
var map__30286 = p__30285;
var map__30286__$1 = (((((!((map__30286 == null))))?(((((map__30286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30286):map__30286);
var try$ = cljs.core.get.call(null,map__30286__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__30286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__30286__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30286__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30286__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30288,is_loop){
var map__30289 = p__30288;
var map__30289__$1 = (((((!((map__30289 == null))))?(((((map__30289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);
var expr = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__30291_30305 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__30292_30306 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__30291_30305,context,map__30289,map__30289__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__30291_30305,context,map__30289,map__30289__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__30292_30306;

try{var seq__30293_30307 = cljs.core.seq.call(null,bindings);
var chunk__30294_30308 = null;
var count__30295_30309 = (0);
var i__30296_30310 = (0);
while(true){
if((i__30296_30310 < count__30295_30309)){
var map__30301_30311 = cljs.core._nth.call(null,chunk__30294_30308,i__30296_30310);
var map__30301_30312__$1 = (((((!((map__30301_30311 == null))))?(((((map__30301_30311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30301_30311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30301_30311):map__30301_30311);
var binding_30313 = map__30301_30312__$1;
var init_30314 = cljs.core.get.call(null,map__30301_30312__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30313);

cljs.compiler.emitln.call(null," = ",init_30314,";");


var G__30315 = seq__30293_30307;
var G__30316 = chunk__30294_30308;
var G__30317 = count__30295_30309;
var G__30318 = (i__30296_30310 + (1));
seq__30293_30307 = G__30315;
chunk__30294_30308 = G__30316;
count__30295_30309 = G__30317;
i__30296_30310 = G__30318;
continue;
} else {
var temp__5720__auto___30319 = cljs.core.seq.call(null,seq__30293_30307);
if(temp__5720__auto___30319){
var seq__30293_30320__$1 = temp__5720__auto___30319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30293_30320__$1)){
var c__4550__auto___30321 = cljs.core.chunk_first.call(null,seq__30293_30320__$1);
var G__30322 = cljs.core.chunk_rest.call(null,seq__30293_30320__$1);
var G__30323 = c__4550__auto___30321;
var G__30324 = cljs.core.count.call(null,c__4550__auto___30321);
var G__30325 = (0);
seq__30293_30307 = G__30322;
chunk__30294_30308 = G__30323;
count__30295_30309 = G__30324;
i__30296_30310 = G__30325;
continue;
} else {
var map__30303_30326 = cljs.core.first.call(null,seq__30293_30320__$1);
var map__30303_30327__$1 = (((((!((map__30303_30326 == null))))?(((((map__30303_30326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30303_30326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303_30326):map__30303_30326);
var binding_30328 = map__30303_30327__$1;
var init_30329 = cljs.core.get.call(null,map__30303_30327__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30328);

cljs.compiler.emitln.call(null," = ",init_30329,";");


var G__30330 = cljs.core.next.call(null,seq__30293_30320__$1);
var G__30331 = null;
var G__30332 = (0);
var G__30333 = (0);
seq__30293_30307 = G__30330;
chunk__30294_30308 = G__30331;
count__30295_30309 = G__30332;
i__30296_30310 = G__30333;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__30291_30305;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30334){
var map__30335 = p__30334;
var map__30335__$1 = (((((!((map__30335 == null))))?(((((map__30335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30335):map__30335);
var frame = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___30337 = cljs.core.count.call(null,exprs);
var i_30338 = (0);
while(true){
if((i_30338 < n__4607__auto___30337)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30338)," = ",exprs.call(null,i_30338),";");

var G__30339 = (i_30338 + (1));
i_30338 = G__30339;
continue;
} else {
}
break;
}

var n__4607__auto___30340 = cljs.core.count.call(null,exprs);
var i_30341 = (0);
while(true){
if((i_30341 < n__4607__auto___30340)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30341))," = ",temps.call(null,i_30341),";");

var G__30342 = (i_30341 + (1));
i_30341 = G__30342;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30343){
var map__30344 = p__30343;
var map__30344__$1 = (((((!((map__30344 == null))))?(((((map__30344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30344):map__30344);
var expr = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30344__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30346_30358 = cljs.core.seq.call(null,bindings);
var chunk__30347_30359 = null;
var count__30348_30360 = (0);
var i__30349_30361 = (0);
while(true){
if((i__30349_30361 < count__30348_30360)){
var map__30354_30362 = cljs.core._nth.call(null,chunk__30347_30359,i__30349_30361);
var map__30354_30363__$1 = (((((!((map__30354_30362 == null))))?(((((map__30354_30362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30354_30362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354_30362):map__30354_30362);
var binding_30364 = map__30354_30363__$1;
var init_30365 = cljs.core.get.call(null,map__30354_30363__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30364)," = ",init_30365,";");


var G__30366 = seq__30346_30358;
var G__30367 = chunk__30347_30359;
var G__30368 = count__30348_30360;
var G__30369 = (i__30349_30361 + (1));
seq__30346_30358 = G__30366;
chunk__30347_30359 = G__30367;
count__30348_30360 = G__30368;
i__30349_30361 = G__30369;
continue;
} else {
var temp__5720__auto___30370 = cljs.core.seq.call(null,seq__30346_30358);
if(temp__5720__auto___30370){
var seq__30346_30371__$1 = temp__5720__auto___30370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30346_30371__$1)){
var c__4550__auto___30372 = cljs.core.chunk_first.call(null,seq__30346_30371__$1);
var G__30373 = cljs.core.chunk_rest.call(null,seq__30346_30371__$1);
var G__30374 = c__4550__auto___30372;
var G__30375 = cljs.core.count.call(null,c__4550__auto___30372);
var G__30376 = (0);
seq__30346_30358 = G__30373;
chunk__30347_30359 = G__30374;
count__30348_30360 = G__30375;
i__30349_30361 = G__30376;
continue;
} else {
var map__30356_30377 = cljs.core.first.call(null,seq__30346_30371__$1);
var map__30356_30378__$1 = (((((!((map__30356_30377 == null))))?(((((map__30356_30377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30356_30377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356_30377):map__30356_30377);
var binding_30379 = map__30356_30378__$1;
var init_30380 = cljs.core.get.call(null,map__30356_30378__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30379)," = ",init_30380,";");


var G__30381 = cljs.core.next.call(null,seq__30346_30371__$1);
var G__30382 = null;
var G__30383 = (0);
var G__30384 = (0);
seq__30346_30358 = G__30381;
chunk__30347_30359 = G__30382;
count__30348_30360 = G__30383;
i__30349_30361 = G__30384;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30387){
var map__30388 = p__30387;
var map__30388__$1 = (((((!((map__30388 == null))))?(((((map__30388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30388):map__30388);
var expr = map__30388__$1;
var f = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30390 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env){
return (function (p1__30385_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30385_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env){
return (function (p1__30386_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30386_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30388,map__30388__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30390,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30390,(1),null);
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30393 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30393,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30394 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30394,args)),(((mfa_30394 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30394,args)),"], 0))");
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
var fprop_30395 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_30395," ? ",f__$1,fprop_30395,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_30395," ? ",f__$1,fprop_30395,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30396){
var map__30397 = p__30396;
var map__30397__$1 = (((((!((map__30397 == null))))?(((((map__30397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30397):map__30397);
var ctor = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30399){
var map__30400 = p__30399;
var map__30400__$1 = (((((!((map__30400 == null))))?(((((map__30400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30400):map__30400);
var target = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
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
var map__30402 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30402__$1 = (((((!((map__30402 == null))))?(((((map__30402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30402):map__30402);
var options = cljs.core.get.call(null,map__30402__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__30402__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30403 = options;
var map__30403__$1 = (((((!((map__30403 == null))))?(((((map__30403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30403):map__30403);
var target = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30404 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30409 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30409__$1 = (((((!((map__30409 == null))))?(((((map__30409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30409):map__30409);
var node_libs = cljs.core.get.call(null,map__30409__$1,true);
var libs_to_load = cljs.core.get.call(null,map__30409__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__30404,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__30404,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30411_30431 = cljs.core.seq.call(null,libs_to_load);
var chunk__30412_30432 = null;
var count__30413_30433 = (0);
var i__30414_30434 = (0);
while(true){
if((i__30414_30434 < count__30413_30433)){
var lib_30435 = cljs.core._nth.call(null,chunk__30412_30432,i__30414_30434);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30435)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30435),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30435),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30435),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30435),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30435,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30435),"');");
}

}
}
}


var G__30436 = seq__30411_30431;
var G__30437 = chunk__30412_30432;
var G__30438 = count__30413_30433;
var G__30439 = (i__30414_30434 + (1));
seq__30411_30431 = G__30436;
chunk__30412_30432 = G__30437;
count__30413_30433 = G__30438;
i__30414_30434 = G__30439;
continue;
} else {
var temp__5720__auto___30440 = cljs.core.seq.call(null,seq__30411_30431);
if(temp__5720__auto___30440){
var seq__30411_30441__$1 = temp__5720__auto___30440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30411_30441__$1)){
var c__4550__auto___30442 = cljs.core.chunk_first.call(null,seq__30411_30441__$1);
var G__30443 = cljs.core.chunk_rest.call(null,seq__30411_30441__$1);
var G__30444 = c__4550__auto___30442;
var G__30445 = cljs.core.count.call(null,c__4550__auto___30442);
var G__30446 = (0);
seq__30411_30431 = G__30443;
chunk__30412_30432 = G__30444;
count__30413_30433 = G__30445;
i__30414_30434 = G__30446;
continue;
} else {
var lib_30447 = cljs.core.first.call(null,seq__30411_30441__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30447)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30447),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30447),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30447),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30447),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30447,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30447),"');");
}

}
}
}


var G__30448 = cljs.core.next.call(null,seq__30411_30441__$1);
var G__30449 = null;
var G__30450 = (0);
var G__30451 = (0);
seq__30411_30431 = G__30448;
chunk__30412_30432 = G__30449;
count__30413_30433 = G__30450;
i__30414_30434 = G__30451;
continue;
}
} else {
}
}
break;
}

var seq__30415_30452 = cljs.core.seq.call(null,node_libs);
var chunk__30416_30453 = null;
var count__30417_30454 = (0);
var i__30418_30455 = (0);
while(true){
if((i__30418_30455 < count__30417_30454)){
var lib_30456 = cljs.core._nth.call(null,chunk__30416_30453,i__30418_30455);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30456)," = require('",lib_30456,"');");


var G__30457 = seq__30415_30452;
var G__30458 = chunk__30416_30453;
var G__30459 = count__30417_30454;
var G__30460 = (i__30418_30455 + (1));
seq__30415_30452 = G__30457;
chunk__30416_30453 = G__30458;
count__30417_30454 = G__30459;
i__30418_30455 = G__30460;
continue;
} else {
var temp__5720__auto___30461 = cljs.core.seq.call(null,seq__30415_30452);
if(temp__5720__auto___30461){
var seq__30415_30462__$1 = temp__5720__auto___30461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30415_30462__$1)){
var c__4550__auto___30463 = cljs.core.chunk_first.call(null,seq__30415_30462__$1);
var G__30464 = cljs.core.chunk_rest.call(null,seq__30415_30462__$1);
var G__30465 = c__4550__auto___30463;
var G__30466 = cljs.core.count.call(null,c__4550__auto___30463);
var G__30467 = (0);
seq__30415_30452 = G__30464;
chunk__30416_30453 = G__30465;
count__30417_30454 = G__30466;
i__30418_30455 = G__30467;
continue;
} else {
var lib_30468 = cljs.core.first.call(null,seq__30415_30462__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30468)," = require('",lib_30468,"');");


var G__30469 = cljs.core.next.call(null,seq__30415_30462__$1);
var G__30470 = null;
var G__30471 = (0);
var G__30472 = (0);
seq__30415_30452 = G__30469;
chunk__30416_30453 = G__30470;
count__30417_30454 = G__30471;
i__30418_30455 = G__30472;
continue;
}
} else {
}
}
break;
}

var seq__30419_30473 = cljs.core.seq.call(null,global_exports_libs);
var chunk__30420_30474 = null;
var count__30421_30475 = (0);
var i__30422_30476 = (0);
while(true){
if((i__30422_30476 < count__30421_30475)){
var lib_30477 = cljs.core._nth.call(null,chunk__30420_30474,i__30422_30476);
var map__30427_30478 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30477));
var map__30427_30479__$1 = (((((!((map__30427_30478 == null))))?(((((map__30427_30478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30427_30478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30427_30478):map__30427_30478);
var global_exports_30480 = cljs.core.get.call(null,map__30427_30479__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30480,lib_30477);


var G__30481 = seq__30419_30473;
var G__30482 = chunk__30420_30474;
var G__30483 = count__30421_30475;
var G__30484 = (i__30422_30476 + (1));
seq__30419_30473 = G__30481;
chunk__30420_30474 = G__30482;
count__30421_30475 = G__30483;
i__30422_30476 = G__30484;
continue;
} else {
var temp__5720__auto___30485 = cljs.core.seq.call(null,seq__30419_30473);
if(temp__5720__auto___30485){
var seq__30419_30486__$1 = temp__5720__auto___30485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30419_30486__$1)){
var c__4550__auto___30487 = cljs.core.chunk_first.call(null,seq__30419_30486__$1);
var G__30488 = cljs.core.chunk_rest.call(null,seq__30419_30486__$1);
var G__30489 = c__4550__auto___30487;
var G__30490 = cljs.core.count.call(null,c__4550__auto___30487);
var G__30491 = (0);
seq__30419_30473 = G__30488;
chunk__30420_30474 = G__30489;
count__30421_30475 = G__30490;
i__30422_30476 = G__30491;
continue;
} else {
var lib_30492 = cljs.core.first.call(null,seq__30419_30486__$1);
var map__30429_30493 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30492));
var map__30429_30494__$1 = (((((!((map__30429_30493 == null))))?(((((map__30429_30493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30429_30493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30429_30493):map__30429_30493);
var global_exports_30495 = cljs.core.get.call(null,map__30429_30494__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30495,lib_30492);


var G__30496 = cljs.core.next.call(null,seq__30419_30486__$1);
var G__30497 = null;
var G__30498 = (0);
var G__30499 = (0);
seq__30419_30473 = G__30496;
chunk__30420_30474 = G__30497;
count__30421_30475 = G__30498;
i__30422_30476 = G__30499;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__30500){
var map__30501 = p__30500;
var map__30501__$1 = (((((!((map__30501 == null))))?(((((map__30501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30501):map__30501);
var name = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30503){
var map__30504 = p__30503;
var map__30504__$1 = (((((!((map__30504 == null))))?(((((map__30504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30504):map__30504);
var name = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__30506){
var map__30507 = p__30506;
var map__30507__$1 = (((((!((map__30507 == null))))?(((((map__30507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30507):map__30507);
var t = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30509_30533 = cljs.core.seq.call(null,protocols);
var chunk__30510_30534 = null;
var count__30511_30535 = (0);
var i__30512_30536 = (0);
while(true){
if((i__30512_30536 < count__30511_30535)){
var protocol_30537 = cljs.core._nth.call(null,chunk__30510_30534,i__30512_30536);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30537)),"}");


var G__30538 = seq__30509_30533;
var G__30539 = chunk__30510_30534;
var G__30540 = count__30511_30535;
var G__30541 = (i__30512_30536 + (1));
seq__30509_30533 = G__30538;
chunk__30510_30534 = G__30539;
count__30511_30535 = G__30540;
i__30512_30536 = G__30541;
continue;
} else {
var temp__5720__auto___30542 = cljs.core.seq.call(null,seq__30509_30533);
if(temp__5720__auto___30542){
var seq__30509_30543__$1 = temp__5720__auto___30542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30509_30543__$1)){
var c__4550__auto___30544 = cljs.core.chunk_first.call(null,seq__30509_30543__$1);
var G__30545 = cljs.core.chunk_rest.call(null,seq__30509_30543__$1);
var G__30546 = c__4550__auto___30544;
var G__30547 = cljs.core.count.call(null,c__4550__auto___30544);
var G__30548 = (0);
seq__30509_30533 = G__30545;
chunk__30510_30534 = G__30546;
count__30511_30535 = G__30547;
i__30512_30536 = G__30548;
continue;
} else {
var protocol_30549 = cljs.core.first.call(null,seq__30509_30543__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30549)),"}");


var G__30550 = cljs.core.next.call(null,seq__30509_30543__$1);
var G__30551 = null;
var G__30552 = (0);
var G__30553 = (0);
seq__30509_30533 = G__30550;
chunk__30510_30534 = G__30551;
count__30511_30535 = G__30552;
i__30512_30536 = G__30553;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30513_30554 = cljs.core.seq.call(null,fields__$1);
var chunk__30514_30555 = null;
var count__30515_30556 = (0);
var i__30516_30557 = (0);
while(true){
if((i__30516_30557 < count__30515_30556)){
var fld_30558 = cljs.core._nth.call(null,chunk__30514_30555,i__30516_30557);
cljs.compiler.emitln.call(null,"this.",fld_30558," = ",fld_30558,";");


var G__30559 = seq__30513_30554;
var G__30560 = chunk__30514_30555;
var G__30561 = count__30515_30556;
var G__30562 = (i__30516_30557 + (1));
seq__30513_30554 = G__30559;
chunk__30514_30555 = G__30560;
count__30515_30556 = G__30561;
i__30516_30557 = G__30562;
continue;
} else {
var temp__5720__auto___30563 = cljs.core.seq.call(null,seq__30513_30554);
if(temp__5720__auto___30563){
var seq__30513_30564__$1 = temp__5720__auto___30563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30513_30564__$1)){
var c__4550__auto___30565 = cljs.core.chunk_first.call(null,seq__30513_30564__$1);
var G__30566 = cljs.core.chunk_rest.call(null,seq__30513_30564__$1);
var G__30567 = c__4550__auto___30565;
var G__30568 = cljs.core.count.call(null,c__4550__auto___30565);
var G__30569 = (0);
seq__30513_30554 = G__30566;
chunk__30514_30555 = G__30567;
count__30515_30556 = G__30568;
i__30516_30557 = G__30569;
continue;
} else {
var fld_30570 = cljs.core.first.call(null,seq__30513_30564__$1);
cljs.compiler.emitln.call(null,"this.",fld_30570," = ",fld_30570,";");


var G__30571 = cljs.core.next.call(null,seq__30513_30564__$1);
var G__30572 = null;
var G__30573 = (0);
var G__30574 = (0);
seq__30513_30554 = G__30571;
chunk__30514_30555 = G__30572;
count__30515_30556 = G__30573;
i__30516_30557 = G__30574;
continue;
}
} else {
}
}
break;
}

var seq__30517_30575 = cljs.core.seq.call(null,pmasks);
var chunk__30518_30576 = null;
var count__30519_30577 = (0);
var i__30520_30578 = (0);
while(true){
if((i__30520_30578 < count__30519_30577)){
var vec__30527_30579 = cljs.core._nth.call(null,chunk__30518_30576,i__30520_30578);
var pno_30580 = cljs.core.nth.call(null,vec__30527_30579,(0),null);
var pmask_30581 = cljs.core.nth.call(null,vec__30527_30579,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30580,"$ = ",pmask_30581,";");


var G__30582 = seq__30517_30575;
var G__30583 = chunk__30518_30576;
var G__30584 = count__30519_30577;
var G__30585 = (i__30520_30578 + (1));
seq__30517_30575 = G__30582;
chunk__30518_30576 = G__30583;
count__30519_30577 = G__30584;
i__30520_30578 = G__30585;
continue;
} else {
var temp__5720__auto___30586 = cljs.core.seq.call(null,seq__30517_30575);
if(temp__5720__auto___30586){
var seq__30517_30587__$1 = temp__5720__auto___30586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30517_30587__$1)){
var c__4550__auto___30588 = cljs.core.chunk_first.call(null,seq__30517_30587__$1);
var G__30589 = cljs.core.chunk_rest.call(null,seq__30517_30587__$1);
var G__30590 = c__4550__auto___30588;
var G__30591 = cljs.core.count.call(null,c__4550__auto___30588);
var G__30592 = (0);
seq__30517_30575 = G__30589;
chunk__30518_30576 = G__30590;
count__30519_30577 = G__30591;
i__30520_30578 = G__30592;
continue;
} else {
var vec__30530_30593 = cljs.core.first.call(null,seq__30517_30587__$1);
var pno_30594 = cljs.core.nth.call(null,vec__30530_30593,(0),null);
var pmask_30595 = cljs.core.nth.call(null,vec__30530_30593,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30594,"$ = ",pmask_30595,";");


var G__30596 = cljs.core.next.call(null,seq__30517_30587__$1);
var G__30597 = null;
var G__30598 = (0);
var G__30599 = (0);
seq__30517_30575 = G__30596;
chunk__30518_30576 = G__30597;
count__30519_30577 = G__30598;
i__30520_30578 = G__30599;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__30600){
var map__30601 = p__30600;
var map__30601__$1 = (((((!((map__30601 == null))))?(((((map__30601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30601):map__30601);
var t = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30603_30627 = cljs.core.seq.call(null,protocols);
var chunk__30604_30628 = null;
var count__30605_30629 = (0);
var i__30606_30630 = (0);
while(true){
if((i__30606_30630 < count__30605_30629)){
var protocol_30631 = cljs.core._nth.call(null,chunk__30604_30628,i__30606_30630);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30631)),"}");


var G__30632 = seq__30603_30627;
var G__30633 = chunk__30604_30628;
var G__30634 = count__30605_30629;
var G__30635 = (i__30606_30630 + (1));
seq__30603_30627 = G__30632;
chunk__30604_30628 = G__30633;
count__30605_30629 = G__30634;
i__30606_30630 = G__30635;
continue;
} else {
var temp__5720__auto___30636 = cljs.core.seq.call(null,seq__30603_30627);
if(temp__5720__auto___30636){
var seq__30603_30637__$1 = temp__5720__auto___30636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30603_30637__$1)){
var c__4550__auto___30638 = cljs.core.chunk_first.call(null,seq__30603_30637__$1);
var G__30639 = cljs.core.chunk_rest.call(null,seq__30603_30637__$1);
var G__30640 = c__4550__auto___30638;
var G__30641 = cljs.core.count.call(null,c__4550__auto___30638);
var G__30642 = (0);
seq__30603_30627 = G__30639;
chunk__30604_30628 = G__30640;
count__30605_30629 = G__30641;
i__30606_30630 = G__30642;
continue;
} else {
var protocol_30643 = cljs.core.first.call(null,seq__30603_30637__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30643)),"}");


var G__30644 = cljs.core.next.call(null,seq__30603_30637__$1);
var G__30645 = null;
var G__30646 = (0);
var G__30647 = (0);
seq__30603_30627 = G__30644;
chunk__30604_30628 = G__30645;
count__30605_30629 = G__30646;
i__30606_30630 = G__30647;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30607_30648 = cljs.core.seq.call(null,fields__$1);
var chunk__30608_30649 = null;
var count__30609_30650 = (0);
var i__30610_30651 = (0);
while(true){
if((i__30610_30651 < count__30609_30650)){
var fld_30652 = cljs.core._nth.call(null,chunk__30608_30649,i__30610_30651);
cljs.compiler.emitln.call(null,"this.",fld_30652," = ",fld_30652,";");


var G__30653 = seq__30607_30648;
var G__30654 = chunk__30608_30649;
var G__30655 = count__30609_30650;
var G__30656 = (i__30610_30651 + (1));
seq__30607_30648 = G__30653;
chunk__30608_30649 = G__30654;
count__30609_30650 = G__30655;
i__30610_30651 = G__30656;
continue;
} else {
var temp__5720__auto___30657 = cljs.core.seq.call(null,seq__30607_30648);
if(temp__5720__auto___30657){
var seq__30607_30658__$1 = temp__5720__auto___30657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30607_30658__$1)){
var c__4550__auto___30659 = cljs.core.chunk_first.call(null,seq__30607_30658__$1);
var G__30660 = cljs.core.chunk_rest.call(null,seq__30607_30658__$1);
var G__30661 = c__4550__auto___30659;
var G__30662 = cljs.core.count.call(null,c__4550__auto___30659);
var G__30663 = (0);
seq__30607_30648 = G__30660;
chunk__30608_30649 = G__30661;
count__30609_30650 = G__30662;
i__30610_30651 = G__30663;
continue;
} else {
var fld_30664 = cljs.core.first.call(null,seq__30607_30658__$1);
cljs.compiler.emitln.call(null,"this.",fld_30664," = ",fld_30664,";");


var G__30665 = cljs.core.next.call(null,seq__30607_30658__$1);
var G__30666 = null;
var G__30667 = (0);
var G__30668 = (0);
seq__30607_30648 = G__30665;
chunk__30608_30649 = G__30666;
count__30609_30650 = G__30667;
i__30610_30651 = G__30668;
continue;
}
} else {
}
}
break;
}

var seq__30611_30669 = cljs.core.seq.call(null,pmasks);
var chunk__30612_30670 = null;
var count__30613_30671 = (0);
var i__30614_30672 = (0);
while(true){
if((i__30614_30672 < count__30613_30671)){
var vec__30621_30673 = cljs.core._nth.call(null,chunk__30612_30670,i__30614_30672);
var pno_30674 = cljs.core.nth.call(null,vec__30621_30673,(0),null);
var pmask_30675 = cljs.core.nth.call(null,vec__30621_30673,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30674,"$ = ",pmask_30675,";");


var G__30676 = seq__30611_30669;
var G__30677 = chunk__30612_30670;
var G__30678 = count__30613_30671;
var G__30679 = (i__30614_30672 + (1));
seq__30611_30669 = G__30676;
chunk__30612_30670 = G__30677;
count__30613_30671 = G__30678;
i__30614_30672 = G__30679;
continue;
} else {
var temp__5720__auto___30680 = cljs.core.seq.call(null,seq__30611_30669);
if(temp__5720__auto___30680){
var seq__30611_30681__$1 = temp__5720__auto___30680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30611_30681__$1)){
var c__4550__auto___30682 = cljs.core.chunk_first.call(null,seq__30611_30681__$1);
var G__30683 = cljs.core.chunk_rest.call(null,seq__30611_30681__$1);
var G__30684 = c__4550__auto___30682;
var G__30685 = cljs.core.count.call(null,c__4550__auto___30682);
var G__30686 = (0);
seq__30611_30669 = G__30683;
chunk__30612_30670 = G__30684;
count__30613_30671 = G__30685;
i__30614_30672 = G__30686;
continue;
} else {
var vec__30624_30687 = cljs.core.first.call(null,seq__30611_30681__$1);
var pno_30688 = cljs.core.nth.call(null,vec__30624_30687,(0),null);
var pmask_30689 = cljs.core.nth.call(null,vec__30624_30687,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30688,"$ = ",pmask_30689,";");


var G__30690 = cljs.core.next.call(null,seq__30611_30681__$1);
var G__30691 = null;
var G__30692 = (0);
var G__30693 = (0);
seq__30611_30669 = G__30690;
chunk__30612_30670 = G__30691;
count__30613_30671 = G__30692;
i__30614_30672 = G__30693;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30694){
var map__30695 = p__30694;
var map__30695__$1 = (((((!((map__30695 == null))))?(((((map__30695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30695):map__30695);
var target = cljs.core.get.call(null,map__30695__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__30695__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__30695__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__30695__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30695__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30697){
var map__30698 = p__30697;
var map__30698__$1 = (((((!((map__30698 == null))))?(((((map__30698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30698):map__30698);
var op = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29492__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29492__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__30704 = cljs.core.seq.call(null,table);
var chunk__30705 = null;
var count__30706 = (0);
var i__30707 = (0);
while(true){
if((i__30707 < count__30706)){
var vec__30714 = cljs.core._nth.call(null,chunk__30705,i__30707);
var sym = cljs.core.nth.call(null,vec__30714,(0),null);
var value = cljs.core.nth.call(null,vec__30714,(1),null);
var ns_30720 = cljs.core.namespace.call(null,sym);
var name_30721 = cljs.core.name.call(null,sym);
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


var G__30722 = seq__30704;
var G__30723 = chunk__30705;
var G__30724 = count__30706;
var G__30725 = (i__30707 + (1));
seq__30704 = G__30722;
chunk__30705 = G__30723;
count__30706 = G__30724;
i__30707 = G__30725;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30704);
if(temp__5720__auto__){
var seq__30704__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30704__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30704__$1);
var G__30726 = cljs.core.chunk_rest.call(null,seq__30704__$1);
var G__30727 = c__4550__auto__;
var G__30728 = cljs.core.count.call(null,c__4550__auto__);
var G__30729 = (0);
seq__30704 = G__30726;
chunk__30705 = G__30727;
count__30706 = G__30728;
i__30707 = G__30729;
continue;
} else {
var vec__30717 = cljs.core.first.call(null,seq__30704__$1);
var sym = cljs.core.nth.call(null,vec__30717,(0),null);
var value = cljs.core.nth.call(null,vec__30717,(1),null);
var ns_30730 = cljs.core.namespace.call(null,sym);
var name_30731 = cljs.core.name.call(null,sym);
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


var G__30732 = cljs.core.next.call(null,seq__30704__$1);
var G__30733 = null;
var G__30734 = (0);
var G__30735 = (0);
seq__30704 = G__30732;
chunk__30705 = G__30733;
count__30706 = G__30734;
i__30707 = G__30735;
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
var G__30737 = arguments.length;
switch (G__30737) {
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
var k_30742 = cljs.core.first.call(null,ks);
var vec__30738_30743 = cljs.core.conj.call(null,prefix,k_30742);
var top_30744 = cljs.core.nth.call(null,vec__30738_30743,(0),null);
var prefix_SINGLEQUOTE__30745 = vec__30738_30743;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_30742)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__30745) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_30744)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_30744)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30745)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_30744);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30745)),";");
}
} else {
}

var m_30746 = cljs.core.get.call(null,externs,k_30742);
if(cljs.core.empty_QMARK_.call(null,m_30746)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__30745,m_30746,top_level,known_externs);
}

var G__30747 = cljs.core.next.call(null,ks);
ks = G__30747;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1601344967816
