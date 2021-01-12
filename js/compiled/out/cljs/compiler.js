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
var map__29481 = s;
var map__29481__$1 = (((((!((map__29481 == null))))?(((((map__29481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481):map__29481);
var name = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29484 = info;
var map__29485 = G__29484;
var map__29485__$1 = (((((!((map__29485 == null))))?(((((map__29485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29485):map__29485);
var shadow = cljs.core.get.call(null,map__29485__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29484__$1 = G__29484;
while(true){
var d__$2 = d__$1;
var map__29489 = G__29484__$1;
var map__29489__$1 = (((((!((map__29489 == null))))?(((((map__29489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29489):map__29489);
var shadow__$1 = cljs.core.get.call(null,map__29489__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29491 = (d__$2 + (1));
var G__29492 = shadow__$1;
d__$1 = G__29491;
G__29484__$1 = G__29492;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29493){
var map__29494 = p__29493;
var map__29494__$1 = (((((!((map__29494 == null))))?(((((map__29494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29494):map__29494);
var name_var = map__29494__$1;
var name = cljs.core.get.call(null,map__29494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29494__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__29496 = info;
var map__29496__$1 = (((((!((map__29496 == null))))?(((((map__29496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29496):map__29496);
var ns = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__29499 = arguments.length;
switch (G__29499) {
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
var G__29501 = cp;
switch (G__29501) {
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
var seq__29503_29507 = cljs.core.seq.call(null,s);
var chunk__29504_29508 = null;
var count__29505_29509 = (0);
var i__29506_29510 = (0);
while(true){
if((i__29506_29510 < count__29505_29509)){
var c_29511 = cljs.core._nth.call(null,chunk__29504_29508,i__29506_29510);
sb.append(cljs.compiler.escape_char.call(null,c_29511));


var G__29512 = seq__29503_29507;
var G__29513 = chunk__29504_29508;
var G__29514 = count__29505_29509;
var G__29515 = (i__29506_29510 + (1));
seq__29503_29507 = G__29512;
chunk__29504_29508 = G__29513;
count__29505_29509 = G__29514;
i__29506_29510 = G__29515;
continue;
} else {
var temp__5720__auto___29516 = cljs.core.seq.call(null,seq__29503_29507);
if(temp__5720__auto___29516){
var seq__29503_29517__$1 = temp__5720__auto___29516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29503_29517__$1)){
var c__4550__auto___29518 = cljs.core.chunk_first.call(null,seq__29503_29517__$1);
var G__29519 = cljs.core.chunk_rest.call(null,seq__29503_29517__$1);
var G__29520 = c__4550__auto___29518;
var G__29521 = cljs.core.count.call(null,c__4550__auto___29518);
var G__29522 = (0);
seq__29503_29507 = G__29519;
chunk__29504_29508 = G__29520;
count__29505_29509 = G__29521;
i__29506_29510 = G__29522;
continue;
} else {
var c_29523 = cljs.core.first.call(null,seq__29503_29517__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29523));


var G__29524 = cljs.core.next.call(null,seq__29503_29517__$1);
var G__29525 = null;
var G__29526 = (0);
var G__29527 = (0);
seq__29503_29507 = G__29524;
chunk__29504_29508 = G__29525;
count__29505_29509 = G__29526;
i__29506_29510 = G__29527;
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
var map__29528_29533 = ast;
var map__29528_29534__$1 = (((((!((map__29528_29533 == null))))?(((((map__29528_29533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29528_29533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29528_29533):map__29528_29533);
var env_29535 = cljs.core.get.call(null,map__29528_29534__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29535))){
var map__29530_29536 = env_29535;
var map__29530_29537__$1 = (((((!((map__29530_29536 == null))))?(((((map__29530_29536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29530_29536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29530_29536):map__29530_29536);
var line_29538 = cljs.core.get.call(null,map__29530_29537__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29539 = cljs.core.get.call(null,map__29530_29537__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29530_29536,map__29530_29537__$1,line_29538,column_29539,map__29528_29533,map__29528_29534__$1,env_29535){
return (function (m){
var minfo = (function (){var G__29532 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__29532,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__29532;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29538 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29530_29536,map__29530_29537__$1,line_29538,column_29539,map__29528_29533,map__29528_29534__$1,env_29535){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29539)?(column_29539 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29530_29536,map__29530_29537__$1,line_29538,column_29539,map__29528_29533,map__29528_29534__$1,env_29535){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29530_29536,map__29530_29537__$1,line_29538,column_29539,map__29528_29533,map__29528_29534__$1,env_29535))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29530_29536,map__29530_29537__$1,line_29538,column_29539,map__29528_29533,map__29528_29534__$1,env_29535))
,cljs.core.sorted_map.call(null)));
});})(map__29530_29536,map__29530_29537__$1,line_29538,column_29539,map__29528_29533,map__29528_29534__$1,env_29535))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__29548 = arguments.length;
switch (G__29548) {
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
var len__4730__auto___29555 = arguments.length;
var i__4731__auto___29556 = (0);
while(true){
if((i__4731__auto___29556 < len__4730__auto___29555)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29556]));

var G__29557 = (i__4731__auto___29556 + (1));
i__4731__auto___29556 = G__29557;
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
var s_29558 = (function (){var G__29549 = a;
if((!(typeof a === 'string'))){
return G__29549.toString();
} else {
return G__29549;
}
})();
var temp__5724__auto___29559 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___29559 == null)){
} else {
var sm_data_29560 = temp__5724__auto___29559;
cljs.core.swap_BANG_.call(null,sm_data_29560,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_29560,temp__5724__auto___29559,s_29558){
return (function (p1__29540_SHARP_){
return (p1__29540_SHARP_ + s_29558.length);
});})(sm_data_29560,temp__5724__auto___29559,s_29558))
);
}

cljs.core.print.call(null,s_29558);

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

var seq__29550 = cljs.core.seq.call(null,xs);
var chunk__29551 = null;
var count__29552 = (0);
var i__29553 = (0);
while(true){
if((i__29553 < count__29552)){
var x = cljs.core._nth.call(null,chunk__29551,i__29553);
cljs.compiler.emits.call(null,x);


var G__29561 = seq__29550;
var G__29562 = chunk__29551;
var G__29563 = count__29552;
var G__29564 = (i__29553 + (1));
seq__29550 = G__29561;
chunk__29551 = G__29562;
count__29552 = G__29563;
i__29553 = G__29564;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29550);
if(temp__5720__auto__){
var seq__29550__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29550__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29550__$1);
var G__29565 = cljs.core.chunk_rest.call(null,seq__29550__$1);
var G__29566 = c__4550__auto__;
var G__29567 = cljs.core.count.call(null,c__4550__auto__);
var G__29568 = (0);
seq__29550 = G__29565;
chunk__29551 = G__29566;
count__29552 = G__29567;
i__29553 = G__29568;
continue;
} else {
var x = cljs.core.first.call(null,seq__29550__$1);
cljs.compiler.emits.call(null,x);


var G__29569 = cljs.core.next.call(null,seq__29550__$1);
var G__29570 = null;
var G__29571 = (0);
var G__29572 = (0);
seq__29550 = G__29569;
chunk__29551 = G__29570;
count__29552 = G__29571;
i__29553 = G__29572;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq29542){
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

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29573){
var map__29574 = p__29573;
var map__29574__$1 = (((((!((map__29574 == null))))?(((((map__29574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29574):map__29574);
var m = map__29574__$1;
var gen_line = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__29583 = arguments.length;
switch (G__29583) {
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
var len__4730__auto___29589 = arguments.length;
var i__4731__auto___29590 = (0);
while(true){
if((i__4731__auto___29590 < len__4730__auto___29589)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29590]));

var G__29591 = (i__4731__auto___29590 + (1));
i__4731__auto___29590 = G__29591;
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

var seq__29584_29592 = cljs.core.seq.call(null,xs);
var chunk__29585_29593 = null;
var count__29586_29594 = (0);
var i__29587_29595 = (0);
while(true){
if((i__29587_29595 < count__29586_29594)){
var x_29596 = cljs.core._nth.call(null,chunk__29585_29593,i__29587_29595);
cljs.compiler.emits.call(null,x_29596);


var G__29597 = seq__29584_29592;
var G__29598 = chunk__29585_29593;
var G__29599 = count__29586_29594;
var G__29600 = (i__29587_29595 + (1));
seq__29584_29592 = G__29597;
chunk__29585_29593 = G__29598;
count__29586_29594 = G__29599;
i__29587_29595 = G__29600;
continue;
} else {
var temp__5720__auto___29601 = cljs.core.seq.call(null,seq__29584_29592);
if(temp__5720__auto___29601){
var seq__29584_29602__$1 = temp__5720__auto___29601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29584_29602__$1)){
var c__4550__auto___29603 = cljs.core.chunk_first.call(null,seq__29584_29602__$1);
var G__29604 = cljs.core.chunk_rest.call(null,seq__29584_29602__$1);
var G__29605 = c__4550__auto___29603;
var G__29606 = cljs.core.count.call(null,c__4550__auto___29603);
var G__29607 = (0);
seq__29584_29592 = G__29604;
chunk__29585_29593 = G__29605;
count__29586_29594 = G__29606;
i__29587_29595 = G__29607;
continue;
} else {
var x_29608 = cljs.core.first.call(null,seq__29584_29602__$1);
cljs.compiler.emits.call(null,x_29608);


var G__29609 = cljs.core.next.call(null,seq__29584_29602__$1);
var G__29610 = null;
var G__29611 = (0);
var G__29612 = (0);
seq__29584_29592 = G__29609;
chunk__29585_29593 = G__29610;
count__29586_29594 = G__29611;
i__29587_29595 = G__29612;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29577){
var G__29578 = cljs.core.first.call(null,seq29577);
var seq29577__$1 = cljs.core.next.call(null,seq29577);
var G__29579 = cljs.core.first.call(null,seq29577__$1);
var seq29577__$2 = cljs.core.next.call(null,seq29577__$1);
var G__29580 = cljs.core.first.call(null,seq29577__$2);
var seq29577__$3 = cljs.core.next.call(null,seq29577__$2);
var G__29581 = cljs.core.first.call(null,seq29577__$3);
var seq29577__$4 = cljs.core.next.call(null,seq29577__$3);
var G__29582 = cljs.core.first.call(null,seq29577__$4);
var seq29577__$5 = cljs.core.next.call(null,seq29577__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29578,G__29579,G__29580,G__29581,G__29582,seq29577__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29613_29617 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29614_29618 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29615_29619 = true;
var _STAR_print_fn_STAR__temp_val__29616_29620 = ((function (_STAR_print_newline_STAR__orig_val__29613_29617,_STAR_print_fn_STAR__orig_val__29614_29618,_STAR_print_newline_STAR__temp_val__29615_29619,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29613_29617,_STAR_print_fn_STAR__orig_val__29614_29618,_STAR_print_newline_STAR__temp_val__29615_29619,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29615_29619;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29616_29620;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29614_29618;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29613_29617;
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
var vec__29621 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__29621,(0),null);
var name = cljs.core.nth.call(null,vec__29621,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__29621,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__29621,ns,name))
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
var vec__29624 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__29624,(0),null);
var flags = cljs.core.nth.call(null,vec__29624,(1),null);
var pattern = cljs.core.nth.call(null,vec__29624,(2),null);
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
return (function (p1__29627_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__29627_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__29629){
var map__29630 = p__29629;
var map__29630__$1 = (((((!((map__29630 == null))))?(((((map__29630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29630):map__29630);
var ast = map__29630__$1;
var info = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__29632 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__29632__$1 = (((((!((map__29632 == null))))?(((((map__29632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632):map__29632);
var cenv = map__29632__$1;
var options = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__29634 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__29634,cljs.analyzer.es5_allowed);
} else {
return G__29634;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__29635 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29635,reserved);
} else {
return G__29635;
}
})();
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__29636_29637 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__29636_29638__$1 = (((G__29636_29637 instanceof cljs.core.Keyword))?G__29636_29637.fqn:null);
switch (G__29636_29638__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__29640){
var map__29641 = p__29640;
var map__29641__$1 = (((((!((map__29641 == null))))?(((((map__29641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);
var arg = map__29641__$1;
var env = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29643 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29643__$1 = (((((!((map__29643 == null))))?(((((map__29643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29643):map__29643);
var name = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__29645){
var map__29646 = p__29645;
var map__29646__$1 = (((((!((map__29646 == null))))?(((((map__29646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29646):map__29646);
var expr = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__29648_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29648_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29649){
var map__29650 = p__29649;
var map__29650__$1 = (((((!((map__29650 == null))))?(((((map__29650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29650):map__29650);
var env = cljs.core.get.call(null,map__29650__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29650__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29650__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29652){
var map__29653 = p__29652;
var map__29653__$1 = (((((!((map__29653 == null))))?(((((map__29653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29653):map__29653);
var items = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__29655_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29655_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29656){
var map__29657 = p__29656;
var map__29657__$1 = (((((!((map__29657 == null))))?(((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var items = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___29681 = cljs.core.seq.call(null,items);
if(temp__5720__auto___29681){
var items_29682__$1 = temp__5720__auto___29681;
var vec__29659_29683 = items_29682__$1;
var seq__29660_29684 = cljs.core.seq.call(null,vec__29659_29683);
var first__29661_29685 = cljs.core.first.call(null,seq__29660_29684);
var seq__29660_29686__$1 = cljs.core.next.call(null,seq__29660_29684);
var vec__29662_29687 = first__29661_29685;
var k_29688 = cljs.core.nth.call(null,vec__29662_29687,(0),null);
var v_29689 = cljs.core.nth.call(null,vec__29662_29687,(1),null);
var r_29690 = seq__29660_29686__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29688),"\": ",emit_js_object_val.call(null,v_29689));

var seq__29665_29691 = cljs.core.seq.call(null,r_29690);
var chunk__29666_29692 = null;
var count__29667_29693 = (0);
var i__29668_29694 = (0);
while(true){
if((i__29668_29694 < count__29667_29693)){
var vec__29675_29695 = cljs.core._nth.call(null,chunk__29666_29692,i__29668_29694);
var k_29696__$1 = cljs.core.nth.call(null,vec__29675_29695,(0),null);
var v_29697__$1 = cljs.core.nth.call(null,vec__29675_29695,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29696__$1),"\": ",emit_js_object_val.call(null,v_29697__$1));


var G__29698 = seq__29665_29691;
var G__29699 = chunk__29666_29692;
var G__29700 = count__29667_29693;
var G__29701 = (i__29668_29694 + (1));
seq__29665_29691 = G__29698;
chunk__29666_29692 = G__29699;
count__29667_29693 = G__29700;
i__29668_29694 = G__29701;
continue;
} else {
var temp__5720__auto___29702__$1 = cljs.core.seq.call(null,seq__29665_29691);
if(temp__5720__auto___29702__$1){
var seq__29665_29703__$1 = temp__5720__auto___29702__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29665_29703__$1)){
var c__4550__auto___29704 = cljs.core.chunk_first.call(null,seq__29665_29703__$1);
var G__29705 = cljs.core.chunk_rest.call(null,seq__29665_29703__$1);
var G__29706 = c__4550__auto___29704;
var G__29707 = cljs.core.count.call(null,c__4550__auto___29704);
var G__29708 = (0);
seq__29665_29691 = G__29705;
chunk__29666_29692 = G__29706;
count__29667_29693 = G__29707;
i__29668_29694 = G__29708;
continue;
} else {
var vec__29678_29709 = cljs.core.first.call(null,seq__29665_29703__$1);
var k_29710__$1 = cljs.core.nth.call(null,vec__29678_29709,(0),null);
var v_29711__$1 = cljs.core.nth.call(null,vec__29678_29709,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29710__$1),"\": ",emit_js_object_val.call(null,v_29711__$1));


var G__29712 = cljs.core.next.call(null,seq__29665_29703__$1);
var G__29713 = null;
var G__29714 = (0);
var G__29715 = (0);
seq__29665_29691 = G__29712;
chunk__29666_29692 = G__29713;
count__29667_29693 = G__29714;
i__29668_29694 = G__29715;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__29716){
var map__29717 = p__29716;
var map__29717__$1 = (((((!((map__29717 == null))))?(((((map__29717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29717):map__29717);
var keys = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__29719){
var map__29720 = p__29719;
var map__29720__$1 = (((((!((map__29720 == null))))?(((((map__29720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29720):map__29720);
var items = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__29722){
var map__29723 = p__29722;
var map__29723__$1 = (((((!((map__29723 == null))))?(((((map__29723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29723):map__29723);
var expr = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__29725){
var map__29726 = p__29725;
var map__29726__$1 = (((((!((map__29726 == null))))?(((((map__29726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29726):map__29726);
var form = cljs.core.get.call(null,map__29726__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__29726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29728 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29728__$1 = (((((!((map__29728 == null))))?(((((map__29728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29728):map__29728);
var op = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__29730 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29730__$1 = (((((!((map__29730 == null))))?(((((map__29730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);
var op = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29732){
var map__29733 = p__29732;
var map__29733__$1 = (((((!((map__29733 == null))))?(((((map__29733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29733):map__29733);
var test = cljs.core.get.call(null,map__29733__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__29733__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__29733__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__29733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__29733__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__29735){
var map__29736 = p__29735;
var map__29736__$1 = (((((!((map__29736 == null))))?(((((map__29736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29736):map__29736);
var v = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29738_29774 = cljs.core.seq.call(null,nodes);
var chunk__29739_29775 = null;
var count__29740_29776 = (0);
var i__29741_29777 = (0);
while(true){
if((i__29741_29777 < count__29740_29776)){
var map__29758_29778 = cljs.core._nth.call(null,chunk__29739_29775,i__29741_29777);
var map__29758_29779__$1 = (((((!((map__29758_29778 == null))))?(((((map__29758_29778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29758_29778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29758_29778):map__29758_29778);
var ts_29780 = cljs.core.get.call(null,map__29758_29779__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29759_29781 = cljs.core.get.call(null,map__29758_29779__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29759_29782__$1 = (((((!((map__29759_29781 == null))))?(((((map__29759_29781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29759_29781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29759_29781):map__29759_29781);
var then_29783 = cljs.core.get.call(null,map__29759_29782__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29762_29784 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29780));
var chunk__29763_29785 = null;
var count__29764_29786 = (0);
var i__29765_29787 = (0);
while(true){
if((i__29765_29787 < count__29764_29786)){
var test_29788 = cljs.core._nth.call(null,chunk__29763_29785,i__29765_29787);
cljs.compiler.emitln.call(null,"case ",test_29788,":");


var G__29789 = seq__29762_29784;
var G__29790 = chunk__29763_29785;
var G__29791 = count__29764_29786;
var G__29792 = (i__29765_29787 + (1));
seq__29762_29784 = G__29789;
chunk__29763_29785 = G__29790;
count__29764_29786 = G__29791;
i__29765_29787 = G__29792;
continue;
} else {
var temp__5720__auto___29793 = cljs.core.seq.call(null,seq__29762_29784);
if(temp__5720__auto___29793){
var seq__29762_29794__$1 = temp__5720__auto___29793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29762_29794__$1)){
var c__4550__auto___29795 = cljs.core.chunk_first.call(null,seq__29762_29794__$1);
var G__29796 = cljs.core.chunk_rest.call(null,seq__29762_29794__$1);
var G__29797 = c__4550__auto___29795;
var G__29798 = cljs.core.count.call(null,c__4550__auto___29795);
var G__29799 = (0);
seq__29762_29784 = G__29796;
chunk__29763_29785 = G__29797;
count__29764_29786 = G__29798;
i__29765_29787 = G__29799;
continue;
} else {
var test_29800 = cljs.core.first.call(null,seq__29762_29794__$1);
cljs.compiler.emitln.call(null,"case ",test_29800,":");


var G__29801 = cljs.core.next.call(null,seq__29762_29794__$1);
var G__29802 = null;
var G__29803 = (0);
var G__29804 = (0);
seq__29762_29784 = G__29801;
chunk__29763_29785 = G__29802;
count__29764_29786 = G__29803;
i__29765_29787 = G__29804;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29783);
} else {
cljs.compiler.emitln.call(null,then_29783);
}

cljs.compiler.emitln.call(null,"break;");


var G__29805 = seq__29738_29774;
var G__29806 = chunk__29739_29775;
var G__29807 = count__29740_29776;
var G__29808 = (i__29741_29777 + (1));
seq__29738_29774 = G__29805;
chunk__29739_29775 = G__29806;
count__29740_29776 = G__29807;
i__29741_29777 = G__29808;
continue;
} else {
var temp__5720__auto___29809 = cljs.core.seq.call(null,seq__29738_29774);
if(temp__5720__auto___29809){
var seq__29738_29810__$1 = temp__5720__auto___29809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29738_29810__$1)){
var c__4550__auto___29811 = cljs.core.chunk_first.call(null,seq__29738_29810__$1);
var G__29812 = cljs.core.chunk_rest.call(null,seq__29738_29810__$1);
var G__29813 = c__4550__auto___29811;
var G__29814 = cljs.core.count.call(null,c__4550__auto___29811);
var G__29815 = (0);
seq__29738_29774 = G__29812;
chunk__29739_29775 = G__29813;
count__29740_29776 = G__29814;
i__29741_29777 = G__29815;
continue;
} else {
var map__29766_29816 = cljs.core.first.call(null,seq__29738_29810__$1);
var map__29766_29817__$1 = (((((!((map__29766_29816 == null))))?(((((map__29766_29816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29766_29816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29766_29816):map__29766_29816);
var ts_29818 = cljs.core.get.call(null,map__29766_29817__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29767_29819 = cljs.core.get.call(null,map__29766_29817__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29767_29820__$1 = (((((!((map__29767_29819 == null))))?(((((map__29767_29819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29767_29819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29767_29819):map__29767_29819);
var then_29821 = cljs.core.get.call(null,map__29767_29820__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29770_29822 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29818));
var chunk__29771_29823 = null;
var count__29772_29824 = (0);
var i__29773_29825 = (0);
while(true){
if((i__29773_29825 < count__29772_29824)){
var test_29826 = cljs.core._nth.call(null,chunk__29771_29823,i__29773_29825);
cljs.compiler.emitln.call(null,"case ",test_29826,":");


var G__29827 = seq__29770_29822;
var G__29828 = chunk__29771_29823;
var G__29829 = count__29772_29824;
var G__29830 = (i__29773_29825 + (1));
seq__29770_29822 = G__29827;
chunk__29771_29823 = G__29828;
count__29772_29824 = G__29829;
i__29773_29825 = G__29830;
continue;
} else {
var temp__5720__auto___29831__$1 = cljs.core.seq.call(null,seq__29770_29822);
if(temp__5720__auto___29831__$1){
var seq__29770_29832__$1 = temp__5720__auto___29831__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29770_29832__$1)){
var c__4550__auto___29833 = cljs.core.chunk_first.call(null,seq__29770_29832__$1);
var G__29834 = cljs.core.chunk_rest.call(null,seq__29770_29832__$1);
var G__29835 = c__4550__auto___29833;
var G__29836 = cljs.core.count.call(null,c__4550__auto___29833);
var G__29837 = (0);
seq__29770_29822 = G__29834;
chunk__29771_29823 = G__29835;
count__29772_29824 = G__29836;
i__29773_29825 = G__29837;
continue;
} else {
var test_29838 = cljs.core.first.call(null,seq__29770_29832__$1);
cljs.compiler.emitln.call(null,"case ",test_29838,":");


var G__29839 = cljs.core.next.call(null,seq__29770_29832__$1);
var G__29840 = null;
var G__29841 = (0);
var G__29842 = (0);
seq__29770_29822 = G__29839;
chunk__29771_29823 = G__29840;
count__29772_29824 = G__29841;
i__29773_29825 = G__29842;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29821);
} else {
cljs.compiler.emitln.call(null,then_29821);
}

cljs.compiler.emitln.call(null,"break;");


var G__29843 = cljs.core.next.call(null,seq__29738_29810__$1);
var G__29844 = null;
var G__29845 = (0);
var G__29846 = (0);
seq__29738_29774 = G__29843;
chunk__29739_29775 = G__29844;
count__29740_29776 = G__29845;
i__29741_29777 = G__29846;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29847){
var map__29848 = p__29847;
var map__29848__$1 = (((((!((map__29848 == null))))?(((((map__29848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29848):map__29848);
var throw$ = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__29851 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__29851,(0),null);
var rstr = cljs.core.nth.call(null,vec__29851,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__29851,fstr,rstr,ret_t,axstr){
return (function (p1__29850_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29850_SHARP_);
});})(idx,vec__29851,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__29854 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29854,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29854;
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
return (function (p1__29855_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29855_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__29856 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29857 = cljs.core.seq.call(null,vec__29856);
var first__29858 = cljs.core.first.call(null,seq__29857);
var seq__29857__$1 = cljs.core.next.call(null,seq__29857);
var p = first__29858;
var first__29858__$1 = cljs.core.first.call(null,seq__29857__$1);
var seq__29857__$2 = cljs.core.next.call(null,seq__29857__$1);
var ts = first__29858__$1;
var first__29858__$2 = cljs.core.first.call(null,seq__29857__$2);
var seq__29857__$3 = cljs.core.next.call(null,seq__29857__$2);
var n = first__29858__$2;
var xs = seq__29857__$3;
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
var vec__29859 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29860 = cljs.core.seq.call(null,vec__29859);
var first__29861 = cljs.core.first.call(null,seq__29860);
var seq__29860__$1 = cljs.core.next.call(null,seq__29860);
var p = first__29861;
var first__29861__$1 = cljs.core.first.call(null,seq__29860__$1);
var seq__29860__$2 = cljs.core.next.call(null,seq__29860__$1);
var ts = first__29861__$1;
var xs = seq__29860__$2;
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
var G__29864 = arguments.length;
switch (G__29864) {
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
var vec__29872 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__29862_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__29862_SHARP_);
} else {
return p1__29862_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__29873 = cljs.core.seq.call(null,vec__29872);
var first__29874 = cljs.core.first.call(null,seq__29873);
var seq__29873__$1 = cljs.core.next.call(null,seq__29873);
var x = first__29874;
var ys = seq__29873__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__29875 = cljs.core.seq.call(null,ys);
var chunk__29876 = null;
var count__29877 = (0);
var i__29878 = (0);
while(true){
if((i__29878 < count__29877)){
var next_line = cljs.core._nth.call(null,chunk__29876,i__29878);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29884 = seq__29875;
var G__29885 = chunk__29876;
var G__29886 = count__29877;
var G__29887 = (i__29878 + (1));
seq__29875 = G__29884;
chunk__29876 = G__29885;
count__29877 = G__29886;
i__29878 = G__29887;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29875);
if(temp__5720__auto__){
var seq__29875__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29875__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29875__$1);
var G__29888 = cljs.core.chunk_rest.call(null,seq__29875__$1);
var G__29889 = c__4550__auto__;
var G__29890 = cljs.core.count.call(null,c__4550__auto__);
var G__29891 = (0);
seq__29875 = G__29888;
chunk__29876 = G__29889;
count__29877 = G__29890;
i__29878 = G__29891;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__29875__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29892 = cljs.core.next.call(null,seq__29875__$1);
var G__29893 = null;
var G__29894 = (0);
var G__29895 = (0);
seq__29875 = G__29892;
chunk__29876 = G__29893;
count__29877 = G__29894;
i__29878 = G__29895;
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

var seq__29879_29896 = cljs.core.seq.call(null,docs__$2);
var chunk__29880_29897 = null;
var count__29881_29898 = (0);
var i__29882_29899 = (0);
while(true){
if((i__29882_29899 < count__29881_29898)){
var e_29900 = cljs.core._nth.call(null,chunk__29880_29897,i__29882_29899);
if(cljs.core.truth_(e_29900)){
print_comment_lines.call(null,e_29900);
} else {
}


var G__29901 = seq__29879_29896;
var G__29902 = chunk__29880_29897;
var G__29903 = count__29881_29898;
var G__29904 = (i__29882_29899 + (1));
seq__29879_29896 = G__29901;
chunk__29880_29897 = G__29902;
count__29881_29898 = G__29903;
i__29882_29899 = G__29904;
continue;
} else {
var temp__5720__auto___29905 = cljs.core.seq.call(null,seq__29879_29896);
if(temp__5720__auto___29905){
var seq__29879_29906__$1 = temp__5720__auto___29905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29879_29906__$1)){
var c__4550__auto___29907 = cljs.core.chunk_first.call(null,seq__29879_29906__$1);
var G__29908 = cljs.core.chunk_rest.call(null,seq__29879_29906__$1);
var G__29909 = c__4550__auto___29907;
var G__29910 = cljs.core.count.call(null,c__4550__auto___29907);
var G__29911 = (0);
seq__29879_29896 = G__29908;
chunk__29880_29897 = G__29909;
count__29881_29898 = G__29910;
i__29882_29899 = G__29911;
continue;
} else {
var e_29912 = cljs.core.first.call(null,seq__29879_29906__$1);
if(cljs.core.truth_(e_29912)){
print_comment_lines.call(null,e_29912);
} else {
}


var G__29913 = cljs.core.next.call(null,seq__29879_29906__$1);
var G__29914 = null;
var G__29915 = (0);
var G__29916 = (0);
seq__29879_29896 = G__29913;
chunk__29880_29897 = G__29914;
count__29881_29898 = G__29915;
i__29882_29899 = G__29916;
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
return (function (p1__29918_SHARP_){
return goog.string.startsWith(p1__29918_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29919){
var map__29920 = p__29919;
var map__29920__$1 = (((((!((map__29920 == null))))?(((((map__29920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29920):map__29920);
var doc = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29922){
var map__29923 = p__29922;
var map__29923__$1 = (((((!((map__29923 == null))))?(((((map__29923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29923):map__29923);
var name = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__29925_29949 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__29926_29950 = null;
var count__29927_29951 = (0);
var i__29928_29952 = (0);
while(true){
if((i__29928_29952 < count__29927_29951)){
var vec__29935_29953 = cljs.core._nth.call(null,chunk__29926_29950,i__29928_29952);
var i_29954 = cljs.core.nth.call(null,vec__29935_29953,(0),null);
var param_29955 = cljs.core.nth.call(null,vec__29935_29953,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29955);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29956 = seq__29925_29949;
var G__29957 = chunk__29926_29950;
var G__29958 = count__29927_29951;
var G__29959 = (i__29928_29952 + (1));
seq__29925_29949 = G__29956;
chunk__29926_29950 = G__29957;
count__29927_29951 = G__29958;
i__29928_29952 = G__29959;
continue;
} else {
var temp__5720__auto___29960 = cljs.core.seq.call(null,seq__29925_29949);
if(temp__5720__auto___29960){
var seq__29925_29961__$1 = temp__5720__auto___29960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29925_29961__$1)){
var c__4550__auto___29962 = cljs.core.chunk_first.call(null,seq__29925_29961__$1);
var G__29963 = cljs.core.chunk_rest.call(null,seq__29925_29961__$1);
var G__29964 = c__4550__auto___29962;
var G__29965 = cljs.core.count.call(null,c__4550__auto___29962);
var G__29966 = (0);
seq__29925_29949 = G__29963;
chunk__29926_29950 = G__29964;
count__29927_29951 = G__29965;
i__29928_29952 = G__29966;
continue;
} else {
var vec__29938_29967 = cljs.core.first.call(null,seq__29925_29961__$1);
var i_29968 = cljs.core.nth.call(null,vec__29938_29967,(0),null);
var param_29969 = cljs.core.nth.call(null,vec__29938_29967,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29969);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29970 = cljs.core.next.call(null,seq__29925_29961__$1);
var G__29971 = null;
var G__29972 = (0);
var G__29973 = (0);
seq__29925_29949 = G__29970;
chunk__29926_29950 = G__29971;
count__29927_29951 = G__29972;
i__29928_29952 = G__29973;
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

var seq__29941_29974 = cljs.core.seq.call(null,params);
var chunk__29942_29975 = null;
var count__29943_29976 = (0);
var i__29944_29977 = (0);
while(true){
if((i__29944_29977 < count__29943_29976)){
var param_29978 = cljs.core._nth.call(null,chunk__29942_29975,i__29944_29977);
cljs.compiler.emit.call(null,param_29978);

if(cljs.core._EQ_.call(null,param_29978,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29979 = seq__29941_29974;
var G__29980 = chunk__29942_29975;
var G__29981 = count__29943_29976;
var G__29982 = (i__29944_29977 + (1));
seq__29941_29974 = G__29979;
chunk__29942_29975 = G__29980;
count__29943_29976 = G__29981;
i__29944_29977 = G__29982;
continue;
} else {
var temp__5720__auto___29983 = cljs.core.seq.call(null,seq__29941_29974);
if(temp__5720__auto___29983){
var seq__29941_29984__$1 = temp__5720__auto___29983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29941_29984__$1)){
var c__4550__auto___29985 = cljs.core.chunk_first.call(null,seq__29941_29984__$1);
var G__29986 = cljs.core.chunk_rest.call(null,seq__29941_29984__$1);
var G__29987 = c__4550__auto___29985;
var G__29988 = cljs.core.count.call(null,c__4550__auto___29985);
var G__29989 = (0);
seq__29941_29974 = G__29986;
chunk__29942_29975 = G__29987;
count__29943_29976 = G__29988;
i__29944_29977 = G__29989;
continue;
} else {
var param_29990 = cljs.core.first.call(null,seq__29941_29984__$1);
cljs.compiler.emit.call(null,param_29990);

if(cljs.core._EQ_.call(null,param_29990,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29991 = cljs.core.next.call(null,seq__29941_29984__$1);
var G__29992 = null;
var G__29993 = (0);
var G__29994 = (0);
seq__29941_29974 = G__29991;
chunk__29942_29975 = G__29992;
count__29943_29976 = G__29993;
i__29944_29977 = G__29994;
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

var seq__29945_29995 = cljs.core.seq.call(null,params);
var chunk__29946_29996 = null;
var count__29947_29997 = (0);
var i__29948_29998 = (0);
while(true){
if((i__29948_29998 < count__29947_29997)){
var param_29999 = cljs.core._nth.call(null,chunk__29946_29996,i__29948_29998);
cljs.compiler.emit.call(null,param_29999);

if(cljs.core._EQ_.call(null,param_29999,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30000 = seq__29945_29995;
var G__30001 = chunk__29946_29996;
var G__30002 = count__29947_29997;
var G__30003 = (i__29948_29998 + (1));
seq__29945_29995 = G__30000;
chunk__29946_29996 = G__30001;
count__29947_29997 = G__30002;
i__29948_29998 = G__30003;
continue;
} else {
var temp__5720__auto___30004 = cljs.core.seq.call(null,seq__29945_29995);
if(temp__5720__auto___30004){
var seq__29945_30005__$1 = temp__5720__auto___30004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29945_30005__$1)){
var c__4550__auto___30006 = cljs.core.chunk_first.call(null,seq__29945_30005__$1);
var G__30007 = cljs.core.chunk_rest.call(null,seq__29945_30005__$1);
var G__30008 = c__4550__auto___30006;
var G__30009 = cljs.core.count.call(null,c__4550__auto___30006);
var G__30010 = (0);
seq__29945_29995 = G__30007;
chunk__29946_29996 = G__30008;
count__29947_29997 = G__30009;
i__29948_29998 = G__30010;
continue;
} else {
var param_30011 = cljs.core.first.call(null,seq__29945_30005__$1);
cljs.compiler.emit.call(null,param_30011);

if(cljs.core._EQ_.call(null,param_30011,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30012 = cljs.core.next.call(null,seq__29945_30005__$1);
var G__30013 = null;
var G__30014 = (0);
var G__30015 = (0);
seq__29945_29995 = G__30012;
chunk__29946_29996 = G__30013;
count__29947_29997 = G__30014;
i__29948_29998 = G__30015;
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
var seq__30016 = cljs.core.seq.call(null,params);
var chunk__30017 = null;
var count__30018 = (0);
var i__30019 = (0);
while(true){
if((i__30019 < count__30018)){
var param = cljs.core._nth.call(null,chunk__30017,i__30019);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30020 = seq__30016;
var G__30021 = chunk__30017;
var G__30022 = count__30018;
var G__30023 = (i__30019 + (1));
seq__30016 = G__30020;
chunk__30017 = G__30021;
count__30018 = G__30022;
i__30019 = G__30023;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30016);
if(temp__5720__auto__){
var seq__30016__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30016__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30016__$1);
var G__30024 = cljs.core.chunk_rest.call(null,seq__30016__$1);
var G__30025 = c__4550__auto__;
var G__30026 = cljs.core.count.call(null,c__4550__auto__);
var G__30027 = (0);
seq__30016 = G__30024;
chunk__30017 = G__30025;
count__30018 = G__30026;
i__30019 = G__30027;
continue;
} else {
var param = cljs.core.first.call(null,seq__30016__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30028 = cljs.core.next.call(null,seq__30016__$1);
var G__30029 = null;
var G__30030 = (0);
var G__30031 = (0);
seq__30016 = G__30028;
chunk__30017 = G__30029;
count__30018 = G__30030;
i__30019 = G__30031;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30032){
var map__30033 = p__30032;
var map__30033__$1 = (((((!((map__30033 == null))))?(((((map__30033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30033):map__30033);
var expr = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30035){
var map__30036 = p__30035;
var map__30036__$1 = (((((!((map__30036 == null))))?(((((map__30036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30036):map__30036);
var f = map__30036__$1;
var expr = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30046__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30047 = cljs.compiler.munge.call(null,name_30046__$1);
var delegate_name_30048 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30047),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30048," = function (");

var seq__30038_30049 = cljs.core.seq.call(null,params);
var chunk__30039_30050 = null;
var count__30040_30051 = (0);
var i__30041_30052 = (0);
while(true){
if((i__30041_30052 < count__30040_30051)){
var param_30053 = cljs.core._nth.call(null,chunk__30039_30050,i__30041_30052);
cljs.compiler.emit.call(null,param_30053);

if(cljs.core._EQ_.call(null,param_30053,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30054 = seq__30038_30049;
var G__30055 = chunk__30039_30050;
var G__30056 = count__30040_30051;
var G__30057 = (i__30041_30052 + (1));
seq__30038_30049 = G__30054;
chunk__30039_30050 = G__30055;
count__30040_30051 = G__30056;
i__30041_30052 = G__30057;
continue;
} else {
var temp__5720__auto___30058 = cljs.core.seq.call(null,seq__30038_30049);
if(temp__5720__auto___30058){
var seq__30038_30059__$1 = temp__5720__auto___30058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30038_30059__$1)){
var c__4550__auto___30060 = cljs.core.chunk_first.call(null,seq__30038_30059__$1);
var G__30061 = cljs.core.chunk_rest.call(null,seq__30038_30059__$1);
var G__30062 = c__4550__auto___30060;
var G__30063 = cljs.core.count.call(null,c__4550__auto___30060);
var G__30064 = (0);
seq__30038_30049 = G__30061;
chunk__30039_30050 = G__30062;
count__30040_30051 = G__30063;
i__30041_30052 = G__30064;
continue;
} else {
var param_30065 = cljs.core.first.call(null,seq__30038_30059__$1);
cljs.compiler.emit.call(null,param_30065);

if(cljs.core._EQ_.call(null,param_30065,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30066 = cljs.core.next.call(null,seq__30038_30059__$1);
var G__30067 = null;
var G__30068 = (0);
var G__30069 = (0);
seq__30038_30049 = G__30066;
chunk__30039_30050 = G__30067;
count__30040_30051 = G__30068;
i__30041_30052 = G__30069;
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

cljs.compiler.emitln.call(null,"var ",mname_30047," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30070 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30070,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30048,".call(this,");

var seq__30042_30071 = cljs.core.seq.call(null,params);
var chunk__30043_30072 = null;
var count__30044_30073 = (0);
var i__30045_30074 = (0);
while(true){
if((i__30045_30074 < count__30044_30073)){
var param_30075 = cljs.core._nth.call(null,chunk__30043_30072,i__30045_30074);
cljs.compiler.emit.call(null,param_30075);

if(cljs.core._EQ_.call(null,param_30075,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30076 = seq__30042_30071;
var G__30077 = chunk__30043_30072;
var G__30078 = count__30044_30073;
var G__30079 = (i__30045_30074 + (1));
seq__30042_30071 = G__30076;
chunk__30043_30072 = G__30077;
count__30044_30073 = G__30078;
i__30045_30074 = G__30079;
continue;
} else {
var temp__5720__auto___30080 = cljs.core.seq.call(null,seq__30042_30071);
if(temp__5720__auto___30080){
var seq__30042_30081__$1 = temp__5720__auto___30080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30042_30081__$1)){
var c__4550__auto___30082 = cljs.core.chunk_first.call(null,seq__30042_30081__$1);
var G__30083 = cljs.core.chunk_rest.call(null,seq__30042_30081__$1);
var G__30084 = c__4550__auto___30082;
var G__30085 = cljs.core.count.call(null,c__4550__auto___30082);
var G__30086 = (0);
seq__30042_30071 = G__30083;
chunk__30043_30072 = G__30084;
count__30044_30073 = G__30085;
i__30045_30074 = G__30086;
continue;
} else {
var param_30087 = cljs.core.first.call(null,seq__30042_30081__$1);
cljs.compiler.emit.call(null,param_30087);

if(cljs.core._EQ_.call(null,param_30087,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30088 = cljs.core.next.call(null,seq__30042_30081__$1);
var G__30089 = null;
var G__30090 = (0);
var G__30091 = (0);
seq__30042_30071 = G__30088;
chunk__30043_30072 = G__30089;
count__30044_30073 = G__30090;
i__30045_30074 = G__30091;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30047,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30047,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30046__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30047,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30048,";");

cljs.compiler.emitln.call(null,"return ",mname_30047,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30095){
var map__30096 = p__30095;
var map__30096__$1 = (((((!((map__30096 == null))))?(((((map__30096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30096):map__30096);
var variadic = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30092_SHARP_){
var and__4120__auto__ = p1__30092_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30092_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_30149__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30150 = cljs.compiler.munge.call(null,name_30149__$1);
var maxparams_30151 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30152 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30149__$1,mname_30150,maxparams_30151,loop_locals,map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30150),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30149__$1,mname_30150,maxparams_30151,loop_locals,map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_30153 = cljs.core.sort_by.call(null,((function (name_30149__$1,mname_30150,maxparams_30151,mmap_30152,loop_locals,map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30093_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30093_SHARP_)));
});})(name_30149__$1,mname_30150,maxparams_30151,mmap_30152,loop_locals,map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30152));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30150," = null;");

var seq__30098_30154 = cljs.core.seq.call(null,ms_30153);
var chunk__30099_30155 = null;
var count__30100_30156 = (0);
var i__30101_30157 = (0);
while(true){
if((i__30101_30157 < count__30100_30156)){
var vec__30108_30158 = cljs.core._nth.call(null,chunk__30099_30155,i__30101_30157);
var n_30159 = cljs.core.nth.call(null,vec__30108_30158,(0),null);
var meth_30160 = cljs.core.nth.call(null,vec__30108_30158,(1),null);
cljs.compiler.emits.call(null,"var ",n_30159," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30160))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30160);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30160);
}

cljs.compiler.emitln.call(null,";");


var G__30161 = seq__30098_30154;
var G__30162 = chunk__30099_30155;
var G__30163 = count__30100_30156;
var G__30164 = (i__30101_30157 + (1));
seq__30098_30154 = G__30161;
chunk__30099_30155 = G__30162;
count__30100_30156 = G__30163;
i__30101_30157 = G__30164;
continue;
} else {
var temp__5720__auto___30165 = cljs.core.seq.call(null,seq__30098_30154);
if(temp__5720__auto___30165){
var seq__30098_30166__$1 = temp__5720__auto___30165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30098_30166__$1)){
var c__4550__auto___30167 = cljs.core.chunk_first.call(null,seq__30098_30166__$1);
var G__30168 = cljs.core.chunk_rest.call(null,seq__30098_30166__$1);
var G__30169 = c__4550__auto___30167;
var G__30170 = cljs.core.count.call(null,c__4550__auto___30167);
var G__30171 = (0);
seq__30098_30154 = G__30168;
chunk__30099_30155 = G__30169;
count__30100_30156 = G__30170;
i__30101_30157 = G__30171;
continue;
} else {
var vec__30111_30172 = cljs.core.first.call(null,seq__30098_30166__$1);
var n_30173 = cljs.core.nth.call(null,vec__30111_30172,(0),null);
var meth_30174 = cljs.core.nth.call(null,vec__30111_30172,(1),null);
cljs.compiler.emits.call(null,"var ",n_30173," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30174))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30174);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30174);
}

cljs.compiler.emitln.call(null,";");


var G__30175 = cljs.core.next.call(null,seq__30098_30166__$1);
var G__30176 = null;
var G__30177 = (0);
var G__30178 = (0);
seq__30098_30154 = G__30175;
chunk__30099_30155 = G__30176;
count__30100_30156 = G__30177;
i__30101_30157 = G__30178;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30150," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30151),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30151)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30151));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30114_30179 = cljs.core.seq.call(null,ms_30153);
var chunk__30115_30180 = null;
var count__30116_30181 = (0);
var i__30117_30182 = (0);
while(true){
if((i__30117_30182 < count__30116_30181)){
var vec__30124_30183 = cljs.core._nth.call(null,chunk__30115_30180,i__30117_30182);
var n_30184 = cljs.core.nth.call(null,vec__30124_30183,(0),null);
var meth_30185 = cljs.core.nth.call(null,vec__30124_30183,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30185))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30186 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30186," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30187 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30186," = new cljs.core.IndexedSeq(",a_30187,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30184,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30151)),(((cljs.core.count.call(null,maxparams_30151) > (1)))?", ":null),restarg_30186,");");
} else {
var pcnt_30188 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30185));
cljs.compiler.emitln.call(null,"case ",pcnt_30188,":");

cljs.compiler.emitln.call(null,"return ",n_30184,".call(this",(((pcnt_30188 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30188,maxparams_30151)),null,(1),null)),(2),null))),");");
}


var G__30189 = seq__30114_30179;
var G__30190 = chunk__30115_30180;
var G__30191 = count__30116_30181;
var G__30192 = (i__30117_30182 + (1));
seq__30114_30179 = G__30189;
chunk__30115_30180 = G__30190;
count__30116_30181 = G__30191;
i__30117_30182 = G__30192;
continue;
} else {
var temp__5720__auto___30193 = cljs.core.seq.call(null,seq__30114_30179);
if(temp__5720__auto___30193){
var seq__30114_30194__$1 = temp__5720__auto___30193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30114_30194__$1)){
var c__4550__auto___30195 = cljs.core.chunk_first.call(null,seq__30114_30194__$1);
var G__30196 = cljs.core.chunk_rest.call(null,seq__30114_30194__$1);
var G__30197 = c__4550__auto___30195;
var G__30198 = cljs.core.count.call(null,c__4550__auto___30195);
var G__30199 = (0);
seq__30114_30179 = G__30196;
chunk__30115_30180 = G__30197;
count__30116_30181 = G__30198;
i__30117_30182 = G__30199;
continue;
} else {
var vec__30127_30200 = cljs.core.first.call(null,seq__30114_30194__$1);
var n_30201 = cljs.core.nth.call(null,vec__30127_30200,(0),null);
var meth_30202 = cljs.core.nth.call(null,vec__30127_30200,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30202))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30203 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30203," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30204 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30203," = new cljs.core.IndexedSeq(",a_30204,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30201,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30151)),(((cljs.core.count.call(null,maxparams_30151) > (1)))?", ":null),restarg_30203,");");
} else {
var pcnt_30205 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30202));
cljs.compiler.emitln.call(null,"case ",pcnt_30205,":");

cljs.compiler.emitln.call(null,"return ",n_30201,".call(this",(((pcnt_30205 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30205,maxparams_30151)),null,(1),null)),(2),null))),");");
}


var G__30206 = cljs.core.next.call(null,seq__30114_30194__$1);
var G__30207 = null;
var G__30208 = (0);
var G__30209 = (0);
seq__30114_30179 = G__30206;
chunk__30115_30180 = G__30207;
count__30116_30181 = G__30208;
i__30117_30182 = G__30209;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_30210 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_30153)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_30210,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30150,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30150,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30149__$1,mname_30150,maxparams_30151,mmap_30152,ms_30153,loop_locals,map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30094_SHARP_){
var vec__30130 = p1__30094_SHARP_;
var n = cljs.core.nth.call(null,vec__30130,(0),null);
var m = cljs.core.nth.call(null,vec__30130,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30149__$1,mname_30150,maxparams_30151,mmap_30152,ms_30153,loop_locals,map__30096,map__30096__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_30153),".cljs$lang$applyTo;");
} else {
}

var seq__30133_30211 = cljs.core.seq.call(null,ms_30153);
var chunk__30134_30212 = null;
var count__30135_30213 = (0);
var i__30136_30214 = (0);
while(true){
if((i__30136_30214 < count__30135_30213)){
var vec__30143_30215 = cljs.core._nth.call(null,chunk__30134_30212,i__30136_30214);
var n_30216 = cljs.core.nth.call(null,vec__30143_30215,(0),null);
var meth_30217 = cljs.core.nth.call(null,vec__30143_30215,(1),null);
var c_30218 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30217));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30217))){
cljs.compiler.emitln.call(null,mname_30150,".cljs$core$IFn$_invoke$arity$variadic = ",n_30216,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30150,".cljs$core$IFn$_invoke$arity$",c_30218," = ",n_30216,";");
}


var G__30219 = seq__30133_30211;
var G__30220 = chunk__30134_30212;
var G__30221 = count__30135_30213;
var G__30222 = (i__30136_30214 + (1));
seq__30133_30211 = G__30219;
chunk__30134_30212 = G__30220;
count__30135_30213 = G__30221;
i__30136_30214 = G__30222;
continue;
} else {
var temp__5720__auto___30223 = cljs.core.seq.call(null,seq__30133_30211);
if(temp__5720__auto___30223){
var seq__30133_30224__$1 = temp__5720__auto___30223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30133_30224__$1)){
var c__4550__auto___30225 = cljs.core.chunk_first.call(null,seq__30133_30224__$1);
var G__30226 = cljs.core.chunk_rest.call(null,seq__30133_30224__$1);
var G__30227 = c__4550__auto___30225;
var G__30228 = cljs.core.count.call(null,c__4550__auto___30225);
var G__30229 = (0);
seq__30133_30211 = G__30226;
chunk__30134_30212 = G__30227;
count__30135_30213 = G__30228;
i__30136_30214 = G__30229;
continue;
} else {
var vec__30146_30230 = cljs.core.first.call(null,seq__30133_30224__$1);
var n_30231 = cljs.core.nth.call(null,vec__30146_30230,(0),null);
var meth_30232 = cljs.core.nth.call(null,vec__30146_30230,(1),null);
var c_30233 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30232));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30232))){
cljs.compiler.emitln.call(null,mname_30150,".cljs$core$IFn$_invoke$arity$variadic = ",n_30231,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30150,".cljs$core$IFn$_invoke$arity$",c_30233," = ",n_30231,";");
}


var G__30234 = cljs.core.next.call(null,seq__30133_30224__$1);
var G__30235 = null;
var G__30236 = (0);
var G__30237 = (0);
seq__30133_30211 = G__30234;
chunk__30134_30212 = G__30235;
count__30135_30213 = G__30236;
i__30136_30214 = G__30237;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30150,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30238){
var map__30239 = p__30238;
var map__30239__$1 = (((((!((map__30239 == null))))?(((((map__30239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);
var statements = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__30241_30245 = cljs.core.seq.call(null,statements);
var chunk__30242_30246 = null;
var count__30243_30247 = (0);
var i__30244_30248 = (0);
while(true){
if((i__30244_30248 < count__30243_30247)){
var s_30249 = cljs.core._nth.call(null,chunk__30242_30246,i__30244_30248);
cljs.compiler.emitln.call(null,s_30249);


var G__30250 = seq__30241_30245;
var G__30251 = chunk__30242_30246;
var G__30252 = count__30243_30247;
var G__30253 = (i__30244_30248 + (1));
seq__30241_30245 = G__30250;
chunk__30242_30246 = G__30251;
count__30243_30247 = G__30252;
i__30244_30248 = G__30253;
continue;
} else {
var temp__5720__auto___30254 = cljs.core.seq.call(null,seq__30241_30245);
if(temp__5720__auto___30254){
var seq__30241_30255__$1 = temp__5720__auto___30254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30241_30255__$1)){
var c__4550__auto___30256 = cljs.core.chunk_first.call(null,seq__30241_30255__$1);
var G__30257 = cljs.core.chunk_rest.call(null,seq__30241_30255__$1);
var G__30258 = c__4550__auto___30256;
var G__30259 = cljs.core.count.call(null,c__4550__auto___30256);
var G__30260 = (0);
seq__30241_30245 = G__30257;
chunk__30242_30246 = G__30258;
count__30243_30247 = G__30259;
i__30244_30248 = G__30260;
continue;
} else {
var s_30261 = cljs.core.first.call(null,seq__30241_30255__$1);
cljs.compiler.emitln.call(null,s_30261);


var G__30262 = cljs.core.next.call(null,seq__30241_30255__$1);
var G__30263 = null;
var G__30264 = (0);
var G__30265 = (0);
seq__30241_30245 = G__30262;
chunk__30242_30246 = G__30263;
count__30243_30247 = G__30264;
i__30244_30248 = G__30265;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30266){
var map__30267 = p__30266;
var map__30267__$1 = (((((!((map__30267 == null))))?(((((map__30267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30267):map__30267);
var try$ = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30269,is_loop){
var map__30270 = p__30269;
var map__30270__$1 = (((((!((map__30270 == null))))?(((((map__30270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30270):map__30270);
var expr = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__30272_30286 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__30273_30287 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__30272_30286,context,map__30270,map__30270__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__30272_30286,context,map__30270,map__30270__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__30273_30287;

try{var seq__30274_30288 = cljs.core.seq.call(null,bindings);
var chunk__30275_30289 = null;
var count__30276_30290 = (0);
var i__30277_30291 = (0);
while(true){
if((i__30277_30291 < count__30276_30290)){
var map__30282_30292 = cljs.core._nth.call(null,chunk__30275_30289,i__30277_30291);
var map__30282_30293__$1 = (((((!((map__30282_30292 == null))))?(((((map__30282_30292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30282_30292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282_30292):map__30282_30292);
var binding_30294 = map__30282_30293__$1;
var init_30295 = cljs.core.get.call(null,map__30282_30293__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30294);

cljs.compiler.emitln.call(null," = ",init_30295,";");


var G__30296 = seq__30274_30288;
var G__30297 = chunk__30275_30289;
var G__30298 = count__30276_30290;
var G__30299 = (i__30277_30291 + (1));
seq__30274_30288 = G__30296;
chunk__30275_30289 = G__30297;
count__30276_30290 = G__30298;
i__30277_30291 = G__30299;
continue;
} else {
var temp__5720__auto___30300 = cljs.core.seq.call(null,seq__30274_30288);
if(temp__5720__auto___30300){
var seq__30274_30301__$1 = temp__5720__auto___30300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30274_30301__$1)){
var c__4550__auto___30302 = cljs.core.chunk_first.call(null,seq__30274_30301__$1);
var G__30303 = cljs.core.chunk_rest.call(null,seq__30274_30301__$1);
var G__30304 = c__4550__auto___30302;
var G__30305 = cljs.core.count.call(null,c__4550__auto___30302);
var G__30306 = (0);
seq__30274_30288 = G__30303;
chunk__30275_30289 = G__30304;
count__30276_30290 = G__30305;
i__30277_30291 = G__30306;
continue;
} else {
var map__30284_30307 = cljs.core.first.call(null,seq__30274_30301__$1);
var map__30284_30308__$1 = (((((!((map__30284_30307 == null))))?(((((map__30284_30307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30284_30307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30284_30307):map__30284_30307);
var binding_30309 = map__30284_30308__$1;
var init_30310 = cljs.core.get.call(null,map__30284_30308__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30309);

cljs.compiler.emitln.call(null," = ",init_30310,";");


var G__30311 = cljs.core.next.call(null,seq__30274_30301__$1);
var G__30312 = null;
var G__30313 = (0);
var G__30314 = (0);
seq__30274_30288 = G__30311;
chunk__30275_30289 = G__30312;
count__30276_30290 = G__30313;
i__30277_30291 = G__30314;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__30272_30286;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30315){
var map__30316 = p__30315;
var map__30316__$1 = (((((!((map__30316 == null))))?(((((map__30316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30316):map__30316);
var frame = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___30318 = cljs.core.count.call(null,exprs);
var i_30319 = (0);
while(true){
if((i_30319 < n__4607__auto___30318)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30319)," = ",exprs.call(null,i_30319),";");

var G__30320 = (i_30319 + (1));
i_30319 = G__30320;
continue;
} else {
}
break;
}

var n__4607__auto___30321 = cljs.core.count.call(null,exprs);
var i_30322 = (0);
while(true){
if((i_30322 < n__4607__auto___30321)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30322))," = ",temps.call(null,i_30322),";");

var G__30323 = (i_30322 + (1));
i_30322 = G__30323;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30324){
var map__30325 = p__30324;
var map__30325__$1 = (((((!((map__30325 == null))))?(((((map__30325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30325):map__30325);
var expr = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30327_30339 = cljs.core.seq.call(null,bindings);
var chunk__30328_30340 = null;
var count__30329_30341 = (0);
var i__30330_30342 = (0);
while(true){
if((i__30330_30342 < count__30329_30341)){
var map__30335_30343 = cljs.core._nth.call(null,chunk__30328_30340,i__30330_30342);
var map__30335_30344__$1 = (((((!((map__30335_30343 == null))))?(((((map__30335_30343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30335_30343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30335_30343):map__30335_30343);
var binding_30345 = map__30335_30344__$1;
var init_30346 = cljs.core.get.call(null,map__30335_30344__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30345)," = ",init_30346,";");


var G__30347 = seq__30327_30339;
var G__30348 = chunk__30328_30340;
var G__30349 = count__30329_30341;
var G__30350 = (i__30330_30342 + (1));
seq__30327_30339 = G__30347;
chunk__30328_30340 = G__30348;
count__30329_30341 = G__30349;
i__30330_30342 = G__30350;
continue;
} else {
var temp__5720__auto___30351 = cljs.core.seq.call(null,seq__30327_30339);
if(temp__5720__auto___30351){
var seq__30327_30352__$1 = temp__5720__auto___30351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30327_30352__$1)){
var c__4550__auto___30353 = cljs.core.chunk_first.call(null,seq__30327_30352__$1);
var G__30354 = cljs.core.chunk_rest.call(null,seq__30327_30352__$1);
var G__30355 = c__4550__auto___30353;
var G__30356 = cljs.core.count.call(null,c__4550__auto___30353);
var G__30357 = (0);
seq__30327_30339 = G__30354;
chunk__30328_30340 = G__30355;
count__30329_30341 = G__30356;
i__30330_30342 = G__30357;
continue;
} else {
var map__30337_30358 = cljs.core.first.call(null,seq__30327_30352__$1);
var map__30337_30359__$1 = (((((!((map__30337_30358 == null))))?(((((map__30337_30358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30337_30358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30337_30358):map__30337_30358);
var binding_30360 = map__30337_30359__$1;
var init_30361 = cljs.core.get.call(null,map__30337_30359__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30360)," = ",init_30361,";");


var G__30362 = cljs.core.next.call(null,seq__30327_30352__$1);
var G__30363 = null;
var G__30364 = (0);
var G__30365 = (0);
seq__30327_30339 = G__30362;
chunk__30328_30340 = G__30363;
count__30329_30341 = G__30364;
i__30330_30342 = G__30365;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30368){
var map__30369 = p__30368;
var map__30369__$1 = (((((!((map__30369 == null))))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var expr = map__30369__$1;
var f = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30371 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env){
return (function (p1__30366_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30366_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env){
return (function (p1__30367_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30367_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30369,map__30369__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30371,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30371,(1),null);
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30374 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30374,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30375 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30375,args)),(((mfa_30375 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30375,args)),"], 0))");
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
var fprop_30376 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_30376," ? ",f__$1,fprop_30376,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_30376," ? ",f__$1,fprop_30376,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30377){
var map__30378 = p__30377;
var map__30378__$1 = (((((!((map__30378 == null))))?(((((map__30378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30378):map__30378);
var ctor = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30380){
var map__30381 = p__30380;
var map__30381__$1 = (((((!((map__30381 == null))))?(((((map__30381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30381):map__30381);
var target = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
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
var map__30383 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30383__$1 = (((((!((map__30383 == null))))?(((((map__30383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30383):map__30383);
var options = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30384 = options;
var map__30384__$1 = (((((!((map__30384 == null))))?(((((map__30384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30384):map__30384);
var target = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30385 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30390 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30390__$1 = (((((!((map__30390 == null))))?(((((map__30390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30390):map__30390);
var node_libs = cljs.core.get.call(null,map__30390__$1,true);
var libs_to_load = cljs.core.get.call(null,map__30390__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__30385,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__30385,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30392_30412 = cljs.core.seq.call(null,libs_to_load);
var chunk__30393_30413 = null;
var count__30394_30414 = (0);
var i__30395_30415 = (0);
while(true){
if((i__30395_30415 < count__30394_30414)){
var lib_30416 = cljs.core._nth.call(null,chunk__30393_30413,i__30395_30415);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30416)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30416),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30416),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30416),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30416),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30416,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30416),"');");
}

}
}
}


var G__30417 = seq__30392_30412;
var G__30418 = chunk__30393_30413;
var G__30419 = count__30394_30414;
var G__30420 = (i__30395_30415 + (1));
seq__30392_30412 = G__30417;
chunk__30393_30413 = G__30418;
count__30394_30414 = G__30419;
i__30395_30415 = G__30420;
continue;
} else {
var temp__5720__auto___30421 = cljs.core.seq.call(null,seq__30392_30412);
if(temp__5720__auto___30421){
var seq__30392_30422__$1 = temp__5720__auto___30421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30392_30422__$1)){
var c__4550__auto___30423 = cljs.core.chunk_first.call(null,seq__30392_30422__$1);
var G__30424 = cljs.core.chunk_rest.call(null,seq__30392_30422__$1);
var G__30425 = c__4550__auto___30423;
var G__30426 = cljs.core.count.call(null,c__4550__auto___30423);
var G__30427 = (0);
seq__30392_30412 = G__30424;
chunk__30393_30413 = G__30425;
count__30394_30414 = G__30426;
i__30395_30415 = G__30427;
continue;
} else {
var lib_30428 = cljs.core.first.call(null,seq__30392_30422__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30428)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30428),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30428),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30428),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30428),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30428,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30428),"');");
}

}
}
}


var G__30429 = cljs.core.next.call(null,seq__30392_30422__$1);
var G__30430 = null;
var G__30431 = (0);
var G__30432 = (0);
seq__30392_30412 = G__30429;
chunk__30393_30413 = G__30430;
count__30394_30414 = G__30431;
i__30395_30415 = G__30432;
continue;
}
} else {
}
}
break;
}

var seq__30396_30433 = cljs.core.seq.call(null,node_libs);
var chunk__30397_30434 = null;
var count__30398_30435 = (0);
var i__30399_30436 = (0);
while(true){
if((i__30399_30436 < count__30398_30435)){
var lib_30437 = cljs.core._nth.call(null,chunk__30397_30434,i__30399_30436);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30437)," = require('",lib_30437,"');");


var G__30438 = seq__30396_30433;
var G__30439 = chunk__30397_30434;
var G__30440 = count__30398_30435;
var G__30441 = (i__30399_30436 + (1));
seq__30396_30433 = G__30438;
chunk__30397_30434 = G__30439;
count__30398_30435 = G__30440;
i__30399_30436 = G__30441;
continue;
} else {
var temp__5720__auto___30442 = cljs.core.seq.call(null,seq__30396_30433);
if(temp__5720__auto___30442){
var seq__30396_30443__$1 = temp__5720__auto___30442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30396_30443__$1)){
var c__4550__auto___30444 = cljs.core.chunk_first.call(null,seq__30396_30443__$1);
var G__30445 = cljs.core.chunk_rest.call(null,seq__30396_30443__$1);
var G__30446 = c__4550__auto___30444;
var G__30447 = cljs.core.count.call(null,c__4550__auto___30444);
var G__30448 = (0);
seq__30396_30433 = G__30445;
chunk__30397_30434 = G__30446;
count__30398_30435 = G__30447;
i__30399_30436 = G__30448;
continue;
} else {
var lib_30449 = cljs.core.first.call(null,seq__30396_30443__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30449)," = require('",lib_30449,"');");


var G__30450 = cljs.core.next.call(null,seq__30396_30443__$1);
var G__30451 = null;
var G__30452 = (0);
var G__30453 = (0);
seq__30396_30433 = G__30450;
chunk__30397_30434 = G__30451;
count__30398_30435 = G__30452;
i__30399_30436 = G__30453;
continue;
}
} else {
}
}
break;
}

var seq__30400_30454 = cljs.core.seq.call(null,global_exports_libs);
var chunk__30401_30455 = null;
var count__30402_30456 = (0);
var i__30403_30457 = (0);
while(true){
if((i__30403_30457 < count__30402_30456)){
var lib_30458 = cljs.core._nth.call(null,chunk__30401_30455,i__30403_30457);
var map__30408_30459 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30458));
var map__30408_30460__$1 = (((((!((map__30408_30459 == null))))?(((((map__30408_30459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30408_30459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30408_30459):map__30408_30459);
var global_exports_30461 = cljs.core.get.call(null,map__30408_30460__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30461,lib_30458);


var G__30462 = seq__30400_30454;
var G__30463 = chunk__30401_30455;
var G__30464 = count__30402_30456;
var G__30465 = (i__30403_30457 + (1));
seq__30400_30454 = G__30462;
chunk__30401_30455 = G__30463;
count__30402_30456 = G__30464;
i__30403_30457 = G__30465;
continue;
} else {
var temp__5720__auto___30466 = cljs.core.seq.call(null,seq__30400_30454);
if(temp__5720__auto___30466){
var seq__30400_30467__$1 = temp__5720__auto___30466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30400_30467__$1)){
var c__4550__auto___30468 = cljs.core.chunk_first.call(null,seq__30400_30467__$1);
var G__30469 = cljs.core.chunk_rest.call(null,seq__30400_30467__$1);
var G__30470 = c__4550__auto___30468;
var G__30471 = cljs.core.count.call(null,c__4550__auto___30468);
var G__30472 = (0);
seq__30400_30454 = G__30469;
chunk__30401_30455 = G__30470;
count__30402_30456 = G__30471;
i__30403_30457 = G__30472;
continue;
} else {
var lib_30473 = cljs.core.first.call(null,seq__30400_30467__$1);
var map__30410_30474 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30473));
var map__30410_30475__$1 = (((((!((map__30410_30474 == null))))?(((((map__30410_30474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30410_30474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30410_30474):map__30410_30474);
var global_exports_30476 = cljs.core.get.call(null,map__30410_30475__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30476,lib_30473);


var G__30477 = cljs.core.next.call(null,seq__30400_30467__$1);
var G__30478 = null;
var G__30479 = (0);
var G__30480 = (0);
seq__30400_30454 = G__30477;
chunk__30401_30455 = G__30478;
count__30402_30456 = G__30479;
i__30403_30457 = G__30480;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__30481){
var map__30482 = p__30481;
var map__30482__$1 = (((((!((map__30482 == null))))?(((((map__30482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30482):map__30482);
var name = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30484){
var map__30485 = p__30484;
var map__30485__$1 = (((((!((map__30485 == null))))?(((((map__30485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30485):map__30485);
var name = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__30487){
var map__30488 = p__30487;
var map__30488__$1 = (((((!((map__30488 == null))))?(((((map__30488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30488):map__30488);
var t = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30490_30514 = cljs.core.seq.call(null,protocols);
var chunk__30491_30515 = null;
var count__30492_30516 = (0);
var i__30493_30517 = (0);
while(true){
if((i__30493_30517 < count__30492_30516)){
var protocol_30518 = cljs.core._nth.call(null,chunk__30491_30515,i__30493_30517);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30518)),"}");


var G__30519 = seq__30490_30514;
var G__30520 = chunk__30491_30515;
var G__30521 = count__30492_30516;
var G__30522 = (i__30493_30517 + (1));
seq__30490_30514 = G__30519;
chunk__30491_30515 = G__30520;
count__30492_30516 = G__30521;
i__30493_30517 = G__30522;
continue;
} else {
var temp__5720__auto___30523 = cljs.core.seq.call(null,seq__30490_30514);
if(temp__5720__auto___30523){
var seq__30490_30524__$1 = temp__5720__auto___30523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30490_30524__$1)){
var c__4550__auto___30525 = cljs.core.chunk_first.call(null,seq__30490_30524__$1);
var G__30526 = cljs.core.chunk_rest.call(null,seq__30490_30524__$1);
var G__30527 = c__4550__auto___30525;
var G__30528 = cljs.core.count.call(null,c__4550__auto___30525);
var G__30529 = (0);
seq__30490_30514 = G__30526;
chunk__30491_30515 = G__30527;
count__30492_30516 = G__30528;
i__30493_30517 = G__30529;
continue;
} else {
var protocol_30530 = cljs.core.first.call(null,seq__30490_30524__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30530)),"}");


var G__30531 = cljs.core.next.call(null,seq__30490_30524__$1);
var G__30532 = null;
var G__30533 = (0);
var G__30534 = (0);
seq__30490_30514 = G__30531;
chunk__30491_30515 = G__30532;
count__30492_30516 = G__30533;
i__30493_30517 = G__30534;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30494_30535 = cljs.core.seq.call(null,fields__$1);
var chunk__30495_30536 = null;
var count__30496_30537 = (0);
var i__30497_30538 = (0);
while(true){
if((i__30497_30538 < count__30496_30537)){
var fld_30539 = cljs.core._nth.call(null,chunk__30495_30536,i__30497_30538);
cljs.compiler.emitln.call(null,"this.",fld_30539," = ",fld_30539,";");


var G__30540 = seq__30494_30535;
var G__30541 = chunk__30495_30536;
var G__30542 = count__30496_30537;
var G__30543 = (i__30497_30538 + (1));
seq__30494_30535 = G__30540;
chunk__30495_30536 = G__30541;
count__30496_30537 = G__30542;
i__30497_30538 = G__30543;
continue;
} else {
var temp__5720__auto___30544 = cljs.core.seq.call(null,seq__30494_30535);
if(temp__5720__auto___30544){
var seq__30494_30545__$1 = temp__5720__auto___30544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30494_30545__$1)){
var c__4550__auto___30546 = cljs.core.chunk_first.call(null,seq__30494_30545__$1);
var G__30547 = cljs.core.chunk_rest.call(null,seq__30494_30545__$1);
var G__30548 = c__4550__auto___30546;
var G__30549 = cljs.core.count.call(null,c__4550__auto___30546);
var G__30550 = (0);
seq__30494_30535 = G__30547;
chunk__30495_30536 = G__30548;
count__30496_30537 = G__30549;
i__30497_30538 = G__30550;
continue;
} else {
var fld_30551 = cljs.core.first.call(null,seq__30494_30545__$1);
cljs.compiler.emitln.call(null,"this.",fld_30551," = ",fld_30551,";");


var G__30552 = cljs.core.next.call(null,seq__30494_30545__$1);
var G__30553 = null;
var G__30554 = (0);
var G__30555 = (0);
seq__30494_30535 = G__30552;
chunk__30495_30536 = G__30553;
count__30496_30537 = G__30554;
i__30497_30538 = G__30555;
continue;
}
} else {
}
}
break;
}

var seq__30498_30556 = cljs.core.seq.call(null,pmasks);
var chunk__30499_30557 = null;
var count__30500_30558 = (0);
var i__30501_30559 = (0);
while(true){
if((i__30501_30559 < count__30500_30558)){
var vec__30508_30560 = cljs.core._nth.call(null,chunk__30499_30557,i__30501_30559);
var pno_30561 = cljs.core.nth.call(null,vec__30508_30560,(0),null);
var pmask_30562 = cljs.core.nth.call(null,vec__30508_30560,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30561,"$ = ",pmask_30562,";");


var G__30563 = seq__30498_30556;
var G__30564 = chunk__30499_30557;
var G__30565 = count__30500_30558;
var G__30566 = (i__30501_30559 + (1));
seq__30498_30556 = G__30563;
chunk__30499_30557 = G__30564;
count__30500_30558 = G__30565;
i__30501_30559 = G__30566;
continue;
} else {
var temp__5720__auto___30567 = cljs.core.seq.call(null,seq__30498_30556);
if(temp__5720__auto___30567){
var seq__30498_30568__$1 = temp__5720__auto___30567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30498_30568__$1)){
var c__4550__auto___30569 = cljs.core.chunk_first.call(null,seq__30498_30568__$1);
var G__30570 = cljs.core.chunk_rest.call(null,seq__30498_30568__$1);
var G__30571 = c__4550__auto___30569;
var G__30572 = cljs.core.count.call(null,c__4550__auto___30569);
var G__30573 = (0);
seq__30498_30556 = G__30570;
chunk__30499_30557 = G__30571;
count__30500_30558 = G__30572;
i__30501_30559 = G__30573;
continue;
} else {
var vec__30511_30574 = cljs.core.first.call(null,seq__30498_30568__$1);
var pno_30575 = cljs.core.nth.call(null,vec__30511_30574,(0),null);
var pmask_30576 = cljs.core.nth.call(null,vec__30511_30574,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30575,"$ = ",pmask_30576,";");


var G__30577 = cljs.core.next.call(null,seq__30498_30568__$1);
var G__30578 = null;
var G__30579 = (0);
var G__30580 = (0);
seq__30498_30556 = G__30577;
chunk__30499_30557 = G__30578;
count__30500_30558 = G__30579;
i__30501_30559 = G__30580;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__30581){
var map__30582 = p__30581;
var map__30582__$1 = (((((!((map__30582 == null))))?(((((map__30582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30582):map__30582);
var t = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30584_30608 = cljs.core.seq.call(null,protocols);
var chunk__30585_30609 = null;
var count__30586_30610 = (0);
var i__30587_30611 = (0);
while(true){
if((i__30587_30611 < count__30586_30610)){
var protocol_30612 = cljs.core._nth.call(null,chunk__30585_30609,i__30587_30611);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30612)),"}");


var G__30613 = seq__30584_30608;
var G__30614 = chunk__30585_30609;
var G__30615 = count__30586_30610;
var G__30616 = (i__30587_30611 + (1));
seq__30584_30608 = G__30613;
chunk__30585_30609 = G__30614;
count__30586_30610 = G__30615;
i__30587_30611 = G__30616;
continue;
} else {
var temp__5720__auto___30617 = cljs.core.seq.call(null,seq__30584_30608);
if(temp__5720__auto___30617){
var seq__30584_30618__$1 = temp__5720__auto___30617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30584_30618__$1)){
var c__4550__auto___30619 = cljs.core.chunk_first.call(null,seq__30584_30618__$1);
var G__30620 = cljs.core.chunk_rest.call(null,seq__30584_30618__$1);
var G__30621 = c__4550__auto___30619;
var G__30622 = cljs.core.count.call(null,c__4550__auto___30619);
var G__30623 = (0);
seq__30584_30608 = G__30620;
chunk__30585_30609 = G__30621;
count__30586_30610 = G__30622;
i__30587_30611 = G__30623;
continue;
} else {
var protocol_30624 = cljs.core.first.call(null,seq__30584_30618__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30624)),"}");


var G__30625 = cljs.core.next.call(null,seq__30584_30618__$1);
var G__30626 = null;
var G__30627 = (0);
var G__30628 = (0);
seq__30584_30608 = G__30625;
chunk__30585_30609 = G__30626;
count__30586_30610 = G__30627;
i__30587_30611 = G__30628;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30588_30629 = cljs.core.seq.call(null,fields__$1);
var chunk__30589_30630 = null;
var count__30590_30631 = (0);
var i__30591_30632 = (0);
while(true){
if((i__30591_30632 < count__30590_30631)){
var fld_30633 = cljs.core._nth.call(null,chunk__30589_30630,i__30591_30632);
cljs.compiler.emitln.call(null,"this.",fld_30633," = ",fld_30633,";");


var G__30634 = seq__30588_30629;
var G__30635 = chunk__30589_30630;
var G__30636 = count__30590_30631;
var G__30637 = (i__30591_30632 + (1));
seq__30588_30629 = G__30634;
chunk__30589_30630 = G__30635;
count__30590_30631 = G__30636;
i__30591_30632 = G__30637;
continue;
} else {
var temp__5720__auto___30638 = cljs.core.seq.call(null,seq__30588_30629);
if(temp__5720__auto___30638){
var seq__30588_30639__$1 = temp__5720__auto___30638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30588_30639__$1)){
var c__4550__auto___30640 = cljs.core.chunk_first.call(null,seq__30588_30639__$1);
var G__30641 = cljs.core.chunk_rest.call(null,seq__30588_30639__$1);
var G__30642 = c__4550__auto___30640;
var G__30643 = cljs.core.count.call(null,c__4550__auto___30640);
var G__30644 = (0);
seq__30588_30629 = G__30641;
chunk__30589_30630 = G__30642;
count__30590_30631 = G__30643;
i__30591_30632 = G__30644;
continue;
} else {
var fld_30645 = cljs.core.first.call(null,seq__30588_30639__$1);
cljs.compiler.emitln.call(null,"this.",fld_30645," = ",fld_30645,";");


var G__30646 = cljs.core.next.call(null,seq__30588_30639__$1);
var G__30647 = null;
var G__30648 = (0);
var G__30649 = (0);
seq__30588_30629 = G__30646;
chunk__30589_30630 = G__30647;
count__30590_30631 = G__30648;
i__30591_30632 = G__30649;
continue;
}
} else {
}
}
break;
}

var seq__30592_30650 = cljs.core.seq.call(null,pmasks);
var chunk__30593_30651 = null;
var count__30594_30652 = (0);
var i__30595_30653 = (0);
while(true){
if((i__30595_30653 < count__30594_30652)){
var vec__30602_30654 = cljs.core._nth.call(null,chunk__30593_30651,i__30595_30653);
var pno_30655 = cljs.core.nth.call(null,vec__30602_30654,(0),null);
var pmask_30656 = cljs.core.nth.call(null,vec__30602_30654,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30655,"$ = ",pmask_30656,";");


var G__30657 = seq__30592_30650;
var G__30658 = chunk__30593_30651;
var G__30659 = count__30594_30652;
var G__30660 = (i__30595_30653 + (1));
seq__30592_30650 = G__30657;
chunk__30593_30651 = G__30658;
count__30594_30652 = G__30659;
i__30595_30653 = G__30660;
continue;
} else {
var temp__5720__auto___30661 = cljs.core.seq.call(null,seq__30592_30650);
if(temp__5720__auto___30661){
var seq__30592_30662__$1 = temp__5720__auto___30661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30592_30662__$1)){
var c__4550__auto___30663 = cljs.core.chunk_first.call(null,seq__30592_30662__$1);
var G__30664 = cljs.core.chunk_rest.call(null,seq__30592_30662__$1);
var G__30665 = c__4550__auto___30663;
var G__30666 = cljs.core.count.call(null,c__4550__auto___30663);
var G__30667 = (0);
seq__30592_30650 = G__30664;
chunk__30593_30651 = G__30665;
count__30594_30652 = G__30666;
i__30595_30653 = G__30667;
continue;
} else {
var vec__30605_30668 = cljs.core.first.call(null,seq__30592_30662__$1);
var pno_30669 = cljs.core.nth.call(null,vec__30605_30668,(0),null);
var pmask_30670 = cljs.core.nth.call(null,vec__30605_30668,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30669,"$ = ",pmask_30670,";");


var G__30671 = cljs.core.next.call(null,seq__30592_30662__$1);
var G__30672 = null;
var G__30673 = (0);
var G__30674 = (0);
seq__30592_30650 = G__30671;
chunk__30593_30651 = G__30672;
count__30594_30652 = G__30673;
i__30595_30653 = G__30674;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30675){
var map__30676 = p__30675;
var map__30676__$1 = (((((!((map__30676 == null))))?(((((map__30676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30676):map__30676);
var target = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30678){
var map__30679 = p__30678;
var map__30679__$1 = (((((!((map__30679 == null))))?(((((map__30679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30679):map__30679);
var op = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__30685 = cljs.core.seq.call(null,table);
var chunk__30686 = null;
var count__30687 = (0);
var i__30688 = (0);
while(true){
if((i__30688 < count__30687)){
var vec__30695 = cljs.core._nth.call(null,chunk__30686,i__30688);
var sym = cljs.core.nth.call(null,vec__30695,(0),null);
var value = cljs.core.nth.call(null,vec__30695,(1),null);
var ns_30701 = cljs.core.namespace.call(null,sym);
var name_30702 = cljs.core.name.call(null,sym);
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


var G__30703 = seq__30685;
var G__30704 = chunk__30686;
var G__30705 = count__30687;
var G__30706 = (i__30688 + (1));
seq__30685 = G__30703;
chunk__30686 = G__30704;
count__30687 = G__30705;
i__30688 = G__30706;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30685);
if(temp__5720__auto__){
var seq__30685__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30685__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30685__$1);
var G__30707 = cljs.core.chunk_rest.call(null,seq__30685__$1);
var G__30708 = c__4550__auto__;
var G__30709 = cljs.core.count.call(null,c__4550__auto__);
var G__30710 = (0);
seq__30685 = G__30707;
chunk__30686 = G__30708;
count__30687 = G__30709;
i__30688 = G__30710;
continue;
} else {
var vec__30698 = cljs.core.first.call(null,seq__30685__$1);
var sym = cljs.core.nth.call(null,vec__30698,(0),null);
var value = cljs.core.nth.call(null,vec__30698,(1),null);
var ns_30711 = cljs.core.namespace.call(null,sym);
var name_30712 = cljs.core.name.call(null,sym);
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


var G__30713 = cljs.core.next.call(null,seq__30685__$1);
var G__30714 = null;
var G__30715 = (0);
var G__30716 = (0);
seq__30685 = G__30713;
chunk__30686 = G__30714;
count__30687 = G__30715;
i__30688 = G__30716;
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
var G__30718 = arguments.length;
switch (G__30718) {
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
var k_30723 = cljs.core.first.call(null,ks);
var vec__30719_30724 = cljs.core.conj.call(null,prefix,k_30723);
var top_30725 = cljs.core.nth.call(null,vec__30719_30724,(0),null);
var prefix_SINGLEQUOTE__30726 = vec__30719_30724;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_30723)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__30726) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_30725)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_30725)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30726)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_30725);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30726)),";");
}
} else {
}

var m_30727 = cljs.core.get.call(null,externs,k_30723);
if(cljs.core.empty_QMARK_.call(null,m_30727)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__30726,m_30727,top_level,known_externs);
}

var G__30728 = cljs.core.next.call(null,ks);
ks = G__30728;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1610422543109
