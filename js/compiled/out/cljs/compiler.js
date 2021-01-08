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
var map__29466 = s;
var map__29466__$1 = (((((!((map__29466 == null))))?(((((map__29466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29466):map__29466);
var name = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29469 = info;
var map__29470 = G__29469;
var map__29470__$1 = (((((!((map__29470 == null))))?(((((map__29470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29470):map__29470);
var shadow = cljs.core.get.call(null,map__29470__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29469__$1 = G__29469;
while(true){
var d__$2 = d__$1;
var map__29474 = G__29469__$1;
var map__29474__$1 = (((((!((map__29474 == null))))?(((((map__29474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29474):map__29474);
var shadow__$1 = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29476 = (d__$2 + (1));
var G__29477 = shadow__$1;
d__$1 = G__29476;
G__29469__$1 = G__29477;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29478){
var map__29479 = p__29478;
var map__29479__$1 = (((((!((map__29479 == null))))?(((((map__29479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29479):map__29479);
var name_var = map__29479__$1;
var name = cljs.core.get.call(null,map__29479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29479__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__29481 = info;
var map__29481__$1 = (((((!((map__29481 == null))))?(((((map__29481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481):map__29481);
var ns = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__29484 = arguments.length;
switch (G__29484) {
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
var G__29486 = cp;
switch (G__29486) {
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
var seq__29488_29492 = cljs.core.seq.call(null,s);
var chunk__29489_29493 = null;
var count__29490_29494 = (0);
var i__29491_29495 = (0);
while(true){
if((i__29491_29495 < count__29490_29494)){
var c_29496 = cljs.core._nth.call(null,chunk__29489_29493,i__29491_29495);
sb.append(cljs.compiler.escape_char.call(null,c_29496));


var G__29497 = seq__29488_29492;
var G__29498 = chunk__29489_29493;
var G__29499 = count__29490_29494;
var G__29500 = (i__29491_29495 + (1));
seq__29488_29492 = G__29497;
chunk__29489_29493 = G__29498;
count__29490_29494 = G__29499;
i__29491_29495 = G__29500;
continue;
} else {
var temp__5720__auto___29501 = cljs.core.seq.call(null,seq__29488_29492);
if(temp__5720__auto___29501){
var seq__29488_29502__$1 = temp__5720__auto___29501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29488_29502__$1)){
var c__4550__auto___29503 = cljs.core.chunk_first.call(null,seq__29488_29502__$1);
var G__29504 = cljs.core.chunk_rest.call(null,seq__29488_29502__$1);
var G__29505 = c__4550__auto___29503;
var G__29506 = cljs.core.count.call(null,c__4550__auto___29503);
var G__29507 = (0);
seq__29488_29492 = G__29504;
chunk__29489_29493 = G__29505;
count__29490_29494 = G__29506;
i__29491_29495 = G__29507;
continue;
} else {
var c_29508 = cljs.core.first.call(null,seq__29488_29502__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29508));


var G__29509 = cljs.core.next.call(null,seq__29488_29502__$1);
var G__29510 = null;
var G__29511 = (0);
var G__29512 = (0);
seq__29488_29492 = G__29509;
chunk__29489_29493 = G__29510;
count__29490_29494 = G__29511;
i__29491_29495 = G__29512;
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
var map__29513_29518 = ast;
var map__29513_29519__$1 = (((((!((map__29513_29518 == null))))?(((((map__29513_29518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29513_29518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513_29518):map__29513_29518);
var env_29520 = cljs.core.get.call(null,map__29513_29519__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29520))){
var map__29515_29521 = env_29520;
var map__29515_29522__$1 = (((((!((map__29515_29521 == null))))?(((((map__29515_29521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29515_29521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29515_29521):map__29515_29521);
var line_29523 = cljs.core.get.call(null,map__29515_29522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29524 = cljs.core.get.call(null,map__29515_29522__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29515_29521,map__29515_29522__$1,line_29523,column_29524,map__29513_29518,map__29513_29519__$1,env_29520){
return (function (m){
var minfo = (function (){var G__29517 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__29517,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__29517;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29523 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29515_29521,map__29515_29522__$1,line_29523,column_29524,map__29513_29518,map__29513_29519__$1,env_29520){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29524)?(column_29524 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29515_29521,map__29515_29522__$1,line_29523,column_29524,map__29513_29518,map__29513_29519__$1,env_29520){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29515_29521,map__29515_29522__$1,line_29523,column_29524,map__29513_29518,map__29513_29519__$1,env_29520))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29515_29521,map__29515_29522__$1,line_29523,column_29524,map__29513_29518,map__29513_29519__$1,env_29520))
,cljs.core.sorted_map.call(null)));
});})(map__29515_29521,map__29515_29522__$1,line_29523,column_29524,map__29513_29518,map__29513_29519__$1,env_29520))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__29533 = arguments.length;
switch (G__29533) {
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
var len__4730__auto___29540 = arguments.length;
var i__4731__auto___29541 = (0);
while(true){
if((i__4731__auto___29541 < len__4730__auto___29540)){
args_arr__4751__auto__.push((arguments[i__4731__auto___29541]));

var G__29542 = (i__4731__auto___29541 + (1));
i__4731__auto___29541 = G__29542;
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
var s_29543 = (function (){var G__29534 = a;
if((!(typeof a === 'string'))){
return G__29534.toString();
} else {
return G__29534;
}
})();
var temp__5724__auto___29544 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___29544 == null)){
} else {
var sm_data_29545 = temp__5724__auto___29544;
cljs.core.swap_BANG_.call(null,sm_data_29545,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_29545,temp__5724__auto___29544,s_29543){
return (function (p1__29525_SHARP_){
return (p1__29525_SHARP_ + s_29543.length);
});})(sm_data_29545,temp__5724__auto___29544,s_29543))
);
}

cljs.core.print.call(null,s_29543);

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

var seq__29535 = cljs.core.seq.call(null,xs);
var chunk__29536 = null;
var count__29537 = (0);
var i__29538 = (0);
while(true){
if((i__29538 < count__29537)){
var x = cljs.core._nth.call(null,chunk__29536,i__29538);
cljs.compiler.emits.call(null,x);


var G__29546 = seq__29535;
var G__29547 = chunk__29536;
var G__29548 = count__29537;
var G__29549 = (i__29538 + (1));
seq__29535 = G__29546;
chunk__29536 = G__29547;
count__29537 = G__29548;
i__29538 = G__29549;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29535);
if(temp__5720__auto__){
var seq__29535__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29535__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29535__$1);
var G__29550 = cljs.core.chunk_rest.call(null,seq__29535__$1);
var G__29551 = c__4550__auto__;
var G__29552 = cljs.core.count.call(null,c__4550__auto__);
var G__29553 = (0);
seq__29535 = G__29550;
chunk__29536 = G__29551;
count__29537 = G__29552;
i__29538 = G__29553;
continue;
} else {
var x = cljs.core.first.call(null,seq__29535__$1);
cljs.compiler.emits.call(null,x);


var G__29554 = cljs.core.next.call(null,seq__29535__$1);
var G__29555 = null;
var G__29556 = (0);
var G__29557 = (0);
seq__29535 = G__29554;
chunk__29536 = G__29555;
count__29537 = G__29556;
i__29538 = G__29557;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq29527){
var G__29528 = cljs.core.first.call(null,seq29527);
var seq29527__$1 = cljs.core.next.call(null,seq29527);
var G__29529 = cljs.core.first.call(null,seq29527__$1);
var seq29527__$2 = cljs.core.next.call(null,seq29527__$1);
var G__29530 = cljs.core.first.call(null,seq29527__$2);
var seq29527__$3 = cljs.core.next.call(null,seq29527__$2);
var G__29531 = cljs.core.first.call(null,seq29527__$3);
var seq29527__$4 = cljs.core.next.call(null,seq29527__$3);
var G__29532 = cljs.core.first.call(null,seq29527__$4);
var seq29527__$5 = cljs.core.next.call(null,seq29527__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29528,G__29529,G__29530,G__29531,G__29532,seq29527__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29558){
var map__29559 = p__29558;
var map__29559__$1 = (((((!((map__29559 == null))))?(((((map__29559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29559):map__29559);
var m = map__29559__$1;
var gen_line = cljs.core.get.call(null,map__29559__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__29568 = arguments.length;
switch (G__29568) {
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

var seq__29569_29577 = cljs.core.seq.call(null,xs);
var chunk__29570_29578 = null;
var count__29571_29579 = (0);
var i__29572_29580 = (0);
while(true){
if((i__29572_29580 < count__29571_29579)){
var x_29581 = cljs.core._nth.call(null,chunk__29570_29578,i__29572_29580);
cljs.compiler.emits.call(null,x_29581);


var G__29582 = seq__29569_29577;
var G__29583 = chunk__29570_29578;
var G__29584 = count__29571_29579;
var G__29585 = (i__29572_29580 + (1));
seq__29569_29577 = G__29582;
chunk__29570_29578 = G__29583;
count__29571_29579 = G__29584;
i__29572_29580 = G__29585;
continue;
} else {
var temp__5720__auto___29586 = cljs.core.seq.call(null,seq__29569_29577);
if(temp__5720__auto___29586){
var seq__29569_29587__$1 = temp__5720__auto___29586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29569_29587__$1)){
var c__4550__auto___29588 = cljs.core.chunk_first.call(null,seq__29569_29587__$1);
var G__29589 = cljs.core.chunk_rest.call(null,seq__29569_29587__$1);
var G__29590 = c__4550__auto___29588;
var G__29591 = cljs.core.count.call(null,c__4550__auto___29588);
var G__29592 = (0);
seq__29569_29577 = G__29589;
chunk__29570_29578 = G__29590;
count__29571_29579 = G__29591;
i__29572_29580 = G__29592;
continue;
} else {
var x_29593 = cljs.core.first.call(null,seq__29569_29587__$1);
cljs.compiler.emits.call(null,x_29593);


var G__29594 = cljs.core.next.call(null,seq__29569_29587__$1);
var G__29595 = null;
var G__29596 = (0);
var G__29597 = (0);
seq__29569_29577 = G__29594;
chunk__29570_29578 = G__29595;
count__29571_29579 = G__29596;
i__29572_29580 = G__29597;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29562){
var G__29563 = cljs.core.first.call(null,seq29562);
var seq29562__$1 = cljs.core.next.call(null,seq29562);
var G__29564 = cljs.core.first.call(null,seq29562__$1);
var seq29562__$2 = cljs.core.next.call(null,seq29562__$1);
var G__29565 = cljs.core.first.call(null,seq29562__$2);
var seq29562__$3 = cljs.core.next.call(null,seq29562__$2);
var G__29566 = cljs.core.first.call(null,seq29562__$3);
var seq29562__$4 = cljs.core.next.call(null,seq29562__$3);
var G__29567 = cljs.core.first.call(null,seq29562__$4);
var seq29562__$5 = cljs.core.next.call(null,seq29562__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29563,G__29564,G__29565,G__29566,G__29567,seq29562__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29598_29602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29599_29603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29600_29604 = true;
var _STAR_print_fn_STAR__temp_val__29601_29605 = ((function (_STAR_print_newline_STAR__orig_val__29598_29602,_STAR_print_fn_STAR__orig_val__29599_29603,_STAR_print_newline_STAR__temp_val__29600_29604,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29598_29602,_STAR_print_fn_STAR__orig_val__29599_29603,_STAR_print_newline_STAR__temp_val__29600_29604,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29600_29604;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29601_29605;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29599_29603;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29598_29602;
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
var vec__29606 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__29606,(0),null);
var name = cljs.core.nth.call(null,vec__29606,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__29606,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__29606,ns,name))
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
var vec__29609 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__29609,(0),null);
var flags = cljs.core.nth.call(null,vec__29609,(1),null);
var pattern = cljs.core.nth.call(null,vec__29609,(2),null);
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
return (function (p1__29612_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__29612_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__29614){
var map__29615 = p__29614;
var map__29615__$1 = (((((!((map__29615 == null))))?(((((map__29615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29615):map__29615);
var ast = map__29615__$1;
var info = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__29617 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__29617__$1 = (((((!((map__29617 == null))))?(((((map__29617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29617):map__29617);
var cenv = map__29617__$1;
var options = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__29619 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__29619,cljs.analyzer.es5_allowed);
} else {
return G__29619;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__29620 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29620,reserved);
} else {
return G__29620;
}
})();
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__29621_29622 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__29621_29623__$1 = (((G__29621_29622 instanceof cljs.core.Keyword))?G__29621_29622.fqn:null);
switch (G__29621_29623__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__29625){
var map__29626 = p__29625;
var map__29626__$1 = (((((!((map__29626 == null))))?(((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);
var arg = map__29626__$1;
var env = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29628 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29628__$1 = (((((!((map__29628 == null))))?(((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29628):map__29628);
var name = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__29630){
var map__29631 = p__29630;
var map__29631__$1 = (((((!((map__29631 == null))))?(((((map__29631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29631):map__29631);
var expr = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__29633_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29633_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29634){
var map__29635 = p__29634;
var map__29635__$1 = (((((!((map__29635 == null))))?(((((map__29635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29635):map__29635);
var env = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29637){
var map__29638 = p__29637;
var map__29638__$1 = (((((!((map__29638 == null))))?(((((map__29638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29638):map__29638);
var items = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__29640_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29640_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29641){
var map__29642 = p__29641;
var map__29642__$1 = (((((!((map__29642 == null))))?(((((map__29642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29642):map__29642);
var items = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___29666 = cljs.core.seq.call(null,items);
if(temp__5720__auto___29666){
var items_29667__$1 = temp__5720__auto___29666;
var vec__29644_29668 = items_29667__$1;
var seq__29645_29669 = cljs.core.seq.call(null,vec__29644_29668);
var first__29646_29670 = cljs.core.first.call(null,seq__29645_29669);
var seq__29645_29671__$1 = cljs.core.next.call(null,seq__29645_29669);
var vec__29647_29672 = first__29646_29670;
var k_29673 = cljs.core.nth.call(null,vec__29647_29672,(0),null);
var v_29674 = cljs.core.nth.call(null,vec__29647_29672,(1),null);
var r_29675 = seq__29645_29671__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29673),"\": ",emit_js_object_val.call(null,v_29674));

var seq__29650_29676 = cljs.core.seq.call(null,r_29675);
var chunk__29651_29677 = null;
var count__29652_29678 = (0);
var i__29653_29679 = (0);
while(true){
if((i__29653_29679 < count__29652_29678)){
var vec__29660_29680 = cljs.core._nth.call(null,chunk__29651_29677,i__29653_29679);
var k_29681__$1 = cljs.core.nth.call(null,vec__29660_29680,(0),null);
var v_29682__$1 = cljs.core.nth.call(null,vec__29660_29680,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29681__$1),"\": ",emit_js_object_val.call(null,v_29682__$1));


var G__29683 = seq__29650_29676;
var G__29684 = chunk__29651_29677;
var G__29685 = count__29652_29678;
var G__29686 = (i__29653_29679 + (1));
seq__29650_29676 = G__29683;
chunk__29651_29677 = G__29684;
count__29652_29678 = G__29685;
i__29653_29679 = G__29686;
continue;
} else {
var temp__5720__auto___29687__$1 = cljs.core.seq.call(null,seq__29650_29676);
if(temp__5720__auto___29687__$1){
var seq__29650_29688__$1 = temp__5720__auto___29687__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29650_29688__$1)){
var c__4550__auto___29689 = cljs.core.chunk_first.call(null,seq__29650_29688__$1);
var G__29690 = cljs.core.chunk_rest.call(null,seq__29650_29688__$1);
var G__29691 = c__4550__auto___29689;
var G__29692 = cljs.core.count.call(null,c__4550__auto___29689);
var G__29693 = (0);
seq__29650_29676 = G__29690;
chunk__29651_29677 = G__29691;
count__29652_29678 = G__29692;
i__29653_29679 = G__29693;
continue;
} else {
var vec__29663_29694 = cljs.core.first.call(null,seq__29650_29688__$1);
var k_29695__$1 = cljs.core.nth.call(null,vec__29663_29694,(0),null);
var v_29696__$1 = cljs.core.nth.call(null,vec__29663_29694,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29695__$1),"\": ",emit_js_object_val.call(null,v_29696__$1));


var G__29697 = cljs.core.next.call(null,seq__29650_29688__$1);
var G__29698 = null;
var G__29699 = (0);
var G__29700 = (0);
seq__29650_29676 = G__29697;
chunk__29651_29677 = G__29698;
count__29652_29678 = G__29699;
i__29653_29679 = G__29700;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__29701){
var map__29702 = p__29701;
var map__29702__$1 = (((((!((map__29702 == null))))?(((((map__29702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702):map__29702);
var keys = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__29704){
var map__29705 = p__29704;
var map__29705__$1 = (((((!((map__29705 == null))))?(((((map__29705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29705):map__29705);
var items = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__29707){
var map__29708 = p__29707;
var map__29708__$1 = (((((!((map__29708 == null))))?(((((map__29708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29708):map__29708);
var expr = cljs.core.get.call(null,map__29708__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__29710){
var map__29711 = p__29710;
var map__29711__$1 = (((((!((map__29711 == null))))?(((((map__29711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29711):map__29711);
var form = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__29713 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29713__$1 = (((((!((map__29713 == null))))?(((((map__29713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29713):map__29713);
var op = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__29715 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__29715__$1 = (((((!((map__29715 == null))))?(((((map__29715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29715):map__29715);
var op = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29717){
var map__29718 = p__29717;
var map__29718__$1 = (((((!((map__29718 == null))))?(((((map__29718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29718):map__29718);
var test = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__29720){
var map__29721 = p__29720;
var map__29721__$1 = (((((!((map__29721 == null))))?(((((map__29721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29721):map__29721);
var v = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29723_29759 = cljs.core.seq.call(null,nodes);
var chunk__29724_29760 = null;
var count__29725_29761 = (0);
var i__29726_29762 = (0);
while(true){
if((i__29726_29762 < count__29725_29761)){
var map__29743_29763 = cljs.core._nth.call(null,chunk__29724_29760,i__29726_29762);
var map__29743_29764__$1 = (((((!((map__29743_29763 == null))))?(((((map__29743_29763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29743_29763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29743_29763):map__29743_29763);
var ts_29765 = cljs.core.get.call(null,map__29743_29764__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29744_29766 = cljs.core.get.call(null,map__29743_29764__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29744_29767__$1 = (((((!((map__29744_29766 == null))))?(((((map__29744_29766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29744_29766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29744_29766):map__29744_29766);
var then_29768 = cljs.core.get.call(null,map__29744_29767__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29747_29769 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29765));
var chunk__29748_29770 = null;
var count__29749_29771 = (0);
var i__29750_29772 = (0);
while(true){
if((i__29750_29772 < count__29749_29771)){
var test_29773 = cljs.core._nth.call(null,chunk__29748_29770,i__29750_29772);
cljs.compiler.emitln.call(null,"case ",test_29773,":");


var G__29774 = seq__29747_29769;
var G__29775 = chunk__29748_29770;
var G__29776 = count__29749_29771;
var G__29777 = (i__29750_29772 + (1));
seq__29747_29769 = G__29774;
chunk__29748_29770 = G__29775;
count__29749_29771 = G__29776;
i__29750_29772 = G__29777;
continue;
} else {
var temp__5720__auto___29778 = cljs.core.seq.call(null,seq__29747_29769);
if(temp__5720__auto___29778){
var seq__29747_29779__$1 = temp__5720__auto___29778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29747_29779__$1)){
var c__4550__auto___29780 = cljs.core.chunk_first.call(null,seq__29747_29779__$1);
var G__29781 = cljs.core.chunk_rest.call(null,seq__29747_29779__$1);
var G__29782 = c__4550__auto___29780;
var G__29783 = cljs.core.count.call(null,c__4550__auto___29780);
var G__29784 = (0);
seq__29747_29769 = G__29781;
chunk__29748_29770 = G__29782;
count__29749_29771 = G__29783;
i__29750_29772 = G__29784;
continue;
} else {
var test_29785 = cljs.core.first.call(null,seq__29747_29779__$1);
cljs.compiler.emitln.call(null,"case ",test_29785,":");


var G__29786 = cljs.core.next.call(null,seq__29747_29779__$1);
var G__29787 = null;
var G__29788 = (0);
var G__29789 = (0);
seq__29747_29769 = G__29786;
chunk__29748_29770 = G__29787;
count__29749_29771 = G__29788;
i__29750_29772 = G__29789;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29768);
} else {
cljs.compiler.emitln.call(null,then_29768);
}

cljs.compiler.emitln.call(null,"break;");


var G__29790 = seq__29723_29759;
var G__29791 = chunk__29724_29760;
var G__29792 = count__29725_29761;
var G__29793 = (i__29726_29762 + (1));
seq__29723_29759 = G__29790;
chunk__29724_29760 = G__29791;
count__29725_29761 = G__29792;
i__29726_29762 = G__29793;
continue;
} else {
var temp__5720__auto___29794 = cljs.core.seq.call(null,seq__29723_29759);
if(temp__5720__auto___29794){
var seq__29723_29795__$1 = temp__5720__auto___29794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29723_29795__$1)){
var c__4550__auto___29796 = cljs.core.chunk_first.call(null,seq__29723_29795__$1);
var G__29797 = cljs.core.chunk_rest.call(null,seq__29723_29795__$1);
var G__29798 = c__4550__auto___29796;
var G__29799 = cljs.core.count.call(null,c__4550__auto___29796);
var G__29800 = (0);
seq__29723_29759 = G__29797;
chunk__29724_29760 = G__29798;
count__29725_29761 = G__29799;
i__29726_29762 = G__29800;
continue;
} else {
var map__29751_29801 = cljs.core.first.call(null,seq__29723_29795__$1);
var map__29751_29802__$1 = (((((!((map__29751_29801 == null))))?(((((map__29751_29801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29751_29801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29751_29801):map__29751_29801);
var ts_29803 = cljs.core.get.call(null,map__29751_29802__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__29752_29804 = cljs.core.get.call(null,map__29751_29802__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__29752_29805__$1 = (((((!((map__29752_29804 == null))))?(((((map__29752_29804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29752_29804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29752_29804):map__29752_29804);
var then_29806 = cljs.core.get.call(null,map__29752_29805__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__29755_29807 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_29803));
var chunk__29756_29808 = null;
var count__29757_29809 = (0);
var i__29758_29810 = (0);
while(true){
if((i__29758_29810 < count__29757_29809)){
var test_29811 = cljs.core._nth.call(null,chunk__29756_29808,i__29758_29810);
cljs.compiler.emitln.call(null,"case ",test_29811,":");


var G__29812 = seq__29755_29807;
var G__29813 = chunk__29756_29808;
var G__29814 = count__29757_29809;
var G__29815 = (i__29758_29810 + (1));
seq__29755_29807 = G__29812;
chunk__29756_29808 = G__29813;
count__29757_29809 = G__29814;
i__29758_29810 = G__29815;
continue;
} else {
var temp__5720__auto___29816__$1 = cljs.core.seq.call(null,seq__29755_29807);
if(temp__5720__auto___29816__$1){
var seq__29755_29817__$1 = temp__5720__auto___29816__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29755_29817__$1)){
var c__4550__auto___29818 = cljs.core.chunk_first.call(null,seq__29755_29817__$1);
var G__29819 = cljs.core.chunk_rest.call(null,seq__29755_29817__$1);
var G__29820 = c__4550__auto___29818;
var G__29821 = cljs.core.count.call(null,c__4550__auto___29818);
var G__29822 = (0);
seq__29755_29807 = G__29819;
chunk__29756_29808 = G__29820;
count__29757_29809 = G__29821;
i__29758_29810 = G__29822;
continue;
} else {
var test_29823 = cljs.core.first.call(null,seq__29755_29817__$1);
cljs.compiler.emitln.call(null,"case ",test_29823,":");


var G__29824 = cljs.core.next.call(null,seq__29755_29817__$1);
var G__29825 = null;
var G__29826 = (0);
var G__29827 = (0);
seq__29755_29807 = G__29824;
chunk__29756_29808 = G__29825;
count__29757_29809 = G__29826;
i__29758_29810 = G__29827;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29806);
} else {
cljs.compiler.emitln.call(null,then_29806);
}

cljs.compiler.emitln.call(null,"break;");


var G__29828 = cljs.core.next.call(null,seq__29723_29795__$1);
var G__29829 = null;
var G__29830 = (0);
var G__29831 = (0);
seq__29723_29759 = G__29828;
chunk__29724_29760 = G__29829;
count__29725_29761 = G__29830;
i__29726_29762 = G__29831;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29832){
var map__29833 = p__29832;
var map__29833__$1 = (((((!((map__29833 == null))))?(((((map__29833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29833):map__29833);
var throw$ = cljs.core.get.call(null,map__29833__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__29833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__29836 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__29836,(0),null);
var rstr = cljs.core.nth.call(null,vec__29836,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__29836,fstr,rstr,ret_t,axstr){
return (function (p1__29835_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29835_SHARP_);
});})(idx,vec__29836,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__29839 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__29839,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__29839;
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
return (function (p1__29840_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29840_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__29841 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29842 = cljs.core.seq.call(null,vec__29841);
var first__29843 = cljs.core.first.call(null,seq__29842);
var seq__29842__$1 = cljs.core.next.call(null,seq__29842);
var p = first__29843;
var first__29843__$1 = cljs.core.first.call(null,seq__29842__$1);
var seq__29842__$2 = cljs.core.next.call(null,seq__29842__$1);
var ts = first__29843__$1;
var first__29843__$2 = cljs.core.first.call(null,seq__29842__$2);
var seq__29842__$3 = cljs.core.next.call(null,seq__29842__$2);
var n = first__29843__$2;
var xs = seq__29842__$3;
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
var vec__29844 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29845 = cljs.core.seq.call(null,vec__29844);
var first__29846 = cljs.core.first.call(null,seq__29845);
var seq__29845__$1 = cljs.core.next.call(null,seq__29845);
var p = first__29846;
var first__29846__$1 = cljs.core.first.call(null,seq__29845__$1);
var seq__29845__$2 = cljs.core.next.call(null,seq__29845__$1);
var ts = first__29846__$1;
var xs = seq__29845__$2;
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
var G__29849 = arguments.length;
switch (G__29849) {
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
var vec__29857 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__29847_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__29847_SHARP_);
} else {
return p1__29847_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__29858 = cljs.core.seq.call(null,vec__29857);
var first__29859 = cljs.core.first.call(null,seq__29858);
var seq__29858__$1 = cljs.core.next.call(null,seq__29858);
var x = first__29859;
var ys = seq__29858__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__29860 = cljs.core.seq.call(null,ys);
var chunk__29861 = null;
var count__29862 = (0);
var i__29863 = (0);
while(true){
if((i__29863 < count__29862)){
var next_line = cljs.core._nth.call(null,chunk__29861,i__29863);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29869 = seq__29860;
var G__29870 = chunk__29861;
var G__29871 = count__29862;
var G__29872 = (i__29863 + (1));
seq__29860 = G__29869;
chunk__29861 = G__29870;
count__29862 = G__29871;
i__29863 = G__29872;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29860);
if(temp__5720__auto__){
var seq__29860__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29860__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29860__$1);
var G__29873 = cljs.core.chunk_rest.call(null,seq__29860__$1);
var G__29874 = c__4550__auto__;
var G__29875 = cljs.core.count.call(null,c__4550__auto__);
var G__29876 = (0);
seq__29860 = G__29873;
chunk__29861 = G__29874;
count__29862 = G__29875;
i__29863 = G__29876;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__29860__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__29877 = cljs.core.next.call(null,seq__29860__$1);
var G__29878 = null;
var G__29879 = (0);
var G__29880 = (0);
seq__29860 = G__29877;
chunk__29861 = G__29878;
count__29862 = G__29879;
i__29863 = G__29880;
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

var seq__29864_29881 = cljs.core.seq.call(null,docs__$2);
var chunk__29865_29882 = null;
var count__29866_29883 = (0);
var i__29867_29884 = (0);
while(true){
if((i__29867_29884 < count__29866_29883)){
var e_29885 = cljs.core._nth.call(null,chunk__29865_29882,i__29867_29884);
if(cljs.core.truth_(e_29885)){
print_comment_lines.call(null,e_29885);
} else {
}


var G__29886 = seq__29864_29881;
var G__29887 = chunk__29865_29882;
var G__29888 = count__29866_29883;
var G__29889 = (i__29867_29884 + (1));
seq__29864_29881 = G__29886;
chunk__29865_29882 = G__29887;
count__29866_29883 = G__29888;
i__29867_29884 = G__29889;
continue;
} else {
var temp__5720__auto___29890 = cljs.core.seq.call(null,seq__29864_29881);
if(temp__5720__auto___29890){
var seq__29864_29891__$1 = temp__5720__auto___29890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29864_29891__$1)){
var c__4550__auto___29892 = cljs.core.chunk_first.call(null,seq__29864_29891__$1);
var G__29893 = cljs.core.chunk_rest.call(null,seq__29864_29891__$1);
var G__29894 = c__4550__auto___29892;
var G__29895 = cljs.core.count.call(null,c__4550__auto___29892);
var G__29896 = (0);
seq__29864_29881 = G__29893;
chunk__29865_29882 = G__29894;
count__29866_29883 = G__29895;
i__29867_29884 = G__29896;
continue;
} else {
var e_29897 = cljs.core.first.call(null,seq__29864_29891__$1);
if(cljs.core.truth_(e_29897)){
print_comment_lines.call(null,e_29897);
} else {
}


var G__29898 = cljs.core.next.call(null,seq__29864_29891__$1);
var G__29899 = null;
var G__29900 = (0);
var G__29901 = (0);
seq__29864_29881 = G__29898;
chunk__29865_29882 = G__29899;
count__29866_29883 = G__29900;
i__29867_29884 = G__29901;
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
return (function (p1__29903_SHARP_){
return goog.string.startsWith(p1__29903_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29904){
var map__29905 = p__29904;
var map__29905__$1 = (((((!((map__29905 == null))))?(((((map__29905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29905):map__29905);
var doc = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29907){
var map__29908 = p__29907;
var map__29908__$1 = (((((!((map__29908 == null))))?(((((map__29908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29908):map__29908);
var name = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__29910_29934 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__29911_29935 = null;
var count__29912_29936 = (0);
var i__29913_29937 = (0);
while(true){
if((i__29913_29937 < count__29912_29936)){
var vec__29920_29938 = cljs.core._nth.call(null,chunk__29911_29935,i__29913_29937);
var i_29939 = cljs.core.nth.call(null,vec__29920_29938,(0),null);
var param_29940 = cljs.core.nth.call(null,vec__29920_29938,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29940);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29941 = seq__29910_29934;
var G__29942 = chunk__29911_29935;
var G__29943 = count__29912_29936;
var G__29944 = (i__29913_29937 + (1));
seq__29910_29934 = G__29941;
chunk__29911_29935 = G__29942;
count__29912_29936 = G__29943;
i__29913_29937 = G__29944;
continue;
} else {
var temp__5720__auto___29945 = cljs.core.seq.call(null,seq__29910_29934);
if(temp__5720__auto___29945){
var seq__29910_29946__$1 = temp__5720__auto___29945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29910_29946__$1)){
var c__4550__auto___29947 = cljs.core.chunk_first.call(null,seq__29910_29946__$1);
var G__29948 = cljs.core.chunk_rest.call(null,seq__29910_29946__$1);
var G__29949 = c__4550__auto___29947;
var G__29950 = cljs.core.count.call(null,c__4550__auto___29947);
var G__29951 = (0);
seq__29910_29934 = G__29948;
chunk__29911_29935 = G__29949;
count__29912_29936 = G__29950;
i__29913_29937 = G__29951;
continue;
} else {
var vec__29923_29952 = cljs.core.first.call(null,seq__29910_29946__$1);
var i_29953 = cljs.core.nth.call(null,vec__29923_29952,(0),null);
var param_29954 = cljs.core.nth.call(null,vec__29923_29952,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29954);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__29955 = cljs.core.next.call(null,seq__29910_29946__$1);
var G__29956 = null;
var G__29957 = (0);
var G__29958 = (0);
seq__29910_29934 = G__29955;
chunk__29911_29935 = G__29956;
count__29912_29936 = G__29957;
i__29913_29937 = G__29958;
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

var seq__29926_29959 = cljs.core.seq.call(null,params);
var chunk__29927_29960 = null;
var count__29928_29961 = (0);
var i__29929_29962 = (0);
while(true){
if((i__29929_29962 < count__29928_29961)){
var param_29963 = cljs.core._nth.call(null,chunk__29927_29960,i__29929_29962);
cljs.compiler.emit.call(null,param_29963);

if(cljs.core._EQ_.call(null,param_29963,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29964 = seq__29926_29959;
var G__29965 = chunk__29927_29960;
var G__29966 = count__29928_29961;
var G__29967 = (i__29929_29962 + (1));
seq__29926_29959 = G__29964;
chunk__29927_29960 = G__29965;
count__29928_29961 = G__29966;
i__29929_29962 = G__29967;
continue;
} else {
var temp__5720__auto___29968 = cljs.core.seq.call(null,seq__29926_29959);
if(temp__5720__auto___29968){
var seq__29926_29969__$1 = temp__5720__auto___29968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29926_29969__$1)){
var c__4550__auto___29970 = cljs.core.chunk_first.call(null,seq__29926_29969__$1);
var G__29971 = cljs.core.chunk_rest.call(null,seq__29926_29969__$1);
var G__29972 = c__4550__auto___29970;
var G__29973 = cljs.core.count.call(null,c__4550__auto___29970);
var G__29974 = (0);
seq__29926_29959 = G__29971;
chunk__29927_29960 = G__29972;
count__29928_29961 = G__29973;
i__29929_29962 = G__29974;
continue;
} else {
var param_29975 = cljs.core.first.call(null,seq__29926_29969__$1);
cljs.compiler.emit.call(null,param_29975);

if(cljs.core._EQ_.call(null,param_29975,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29976 = cljs.core.next.call(null,seq__29926_29969__$1);
var G__29977 = null;
var G__29978 = (0);
var G__29979 = (0);
seq__29926_29959 = G__29976;
chunk__29927_29960 = G__29977;
count__29928_29961 = G__29978;
i__29929_29962 = G__29979;
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

var seq__29930_29980 = cljs.core.seq.call(null,params);
var chunk__29931_29981 = null;
var count__29932_29982 = (0);
var i__29933_29983 = (0);
while(true){
if((i__29933_29983 < count__29932_29982)){
var param_29984 = cljs.core._nth.call(null,chunk__29931_29981,i__29933_29983);
cljs.compiler.emit.call(null,param_29984);

if(cljs.core._EQ_.call(null,param_29984,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29985 = seq__29930_29980;
var G__29986 = chunk__29931_29981;
var G__29987 = count__29932_29982;
var G__29988 = (i__29933_29983 + (1));
seq__29930_29980 = G__29985;
chunk__29931_29981 = G__29986;
count__29932_29982 = G__29987;
i__29933_29983 = G__29988;
continue;
} else {
var temp__5720__auto___29989 = cljs.core.seq.call(null,seq__29930_29980);
if(temp__5720__auto___29989){
var seq__29930_29990__$1 = temp__5720__auto___29989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29930_29990__$1)){
var c__4550__auto___29991 = cljs.core.chunk_first.call(null,seq__29930_29990__$1);
var G__29992 = cljs.core.chunk_rest.call(null,seq__29930_29990__$1);
var G__29993 = c__4550__auto___29991;
var G__29994 = cljs.core.count.call(null,c__4550__auto___29991);
var G__29995 = (0);
seq__29930_29980 = G__29992;
chunk__29931_29981 = G__29993;
count__29932_29982 = G__29994;
i__29933_29983 = G__29995;
continue;
} else {
var param_29996 = cljs.core.first.call(null,seq__29930_29990__$1);
cljs.compiler.emit.call(null,param_29996);

if(cljs.core._EQ_.call(null,param_29996,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__29997 = cljs.core.next.call(null,seq__29930_29990__$1);
var G__29998 = null;
var G__29999 = (0);
var G__30000 = (0);
seq__29930_29980 = G__29997;
chunk__29931_29981 = G__29998;
count__29932_29982 = G__29999;
i__29933_29983 = G__30000;
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
var seq__30001 = cljs.core.seq.call(null,params);
var chunk__30002 = null;
var count__30003 = (0);
var i__30004 = (0);
while(true){
if((i__30004 < count__30003)){
var param = cljs.core._nth.call(null,chunk__30002,i__30004);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30005 = seq__30001;
var G__30006 = chunk__30002;
var G__30007 = count__30003;
var G__30008 = (i__30004 + (1));
seq__30001 = G__30005;
chunk__30002 = G__30006;
count__30003 = G__30007;
i__30004 = G__30008;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30001);
if(temp__5720__auto__){
var seq__30001__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30001__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30001__$1);
var G__30009 = cljs.core.chunk_rest.call(null,seq__30001__$1);
var G__30010 = c__4550__auto__;
var G__30011 = cljs.core.count.call(null,c__4550__auto__);
var G__30012 = (0);
seq__30001 = G__30009;
chunk__30002 = G__30010;
count__30003 = G__30011;
i__30004 = G__30012;
continue;
} else {
var param = cljs.core.first.call(null,seq__30001__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30013 = cljs.core.next.call(null,seq__30001__$1);
var G__30014 = null;
var G__30015 = (0);
var G__30016 = (0);
seq__30001 = G__30013;
chunk__30002 = G__30014;
count__30003 = G__30015;
i__30004 = G__30016;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30017){
var map__30018 = p__30017;
var map__30018__$1 = (((((!((map__30018 == null))))?(((((map__30018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30018):map__30018);
var expr = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30020){
var map__30021 = p__30020;
var map__30021__$1 = (((((!((map__30021 == null))))?(((((map__30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);
var f = map__30021__$1;
var expr = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30031__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30032 = cljs.compiler.munge.call(null,name_30031__$1);
var delegate_name_30033 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30032),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30033," = function (");

var seq__30023_30034 = cljs.core.seq.call(null,params);
var chunk__30024_30035 = null;
var count__30025_30036 = (0);
var i__30026_30037 = (0);
while(true){
if((i__30026_30037 < count__30025_30036)){
var param_30038 = cljs.core._nth.call(null,chunk__30024_30035,i__30026_30037);
cljs.compiler.emit.call(null,param_30038);

if(cljs.core._EQ_.call(null,param_30038,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30039 = seq__30023_30034;
var G__30040 = chunk__30024_30035;
var G__30041 = count__30025_30036;
var G__30042 = (i__30026_30037 + (1));
seq__30023_30034 = G__30039;
chunk__30024_30035 = G__30040;
count__30025_30036 = G__30041;
i__30026_30037 = G__30042;
continue;
} else {
var temp__5720__auto___30043 = cljs.core.seq.call(null,seq__30023_30034);
if(temp__5720__auto___30043){
var seq__30023_30044__$1 = temp__5720__auto___30043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30023_30044__$1)){
var c__4550__auto___30045 = cljs.core.chunk_first.call(null,seq__30023_30044__$1);
var G__30046 = cljs.core.chunk_rest.call(null,seq__30023_30044__$1);
var G__30047 = c__4550__auto___30045;
var G__30048 = cljs.core.count.call(null,c__4550__auto___30045);
var G__30049 = (0);
seq__30023_30034 = G__30046;
chunk__30024_30035 = G__30047;
count__30025_30036 = G__30048;
i__30026_30037 = G__30049;
continue;
} else {
var param_30050 = cljs.core.first.call(null,seq__30023_30044__$1);
cljs.compiler.emit.call(null,param_30050);

if(cljs.core._EQ_.call(null,param_30050,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30051 = cljs.core.next.call(null,seq__30023_30044__$1);
var G__30052 = null;
var G__30053 = (0);
var G__30054 = (0);
seq__30023_30034 = G__30051;
chunk__30024_30035 = G__30052;
count__30025_30036 = G__30053;
i__30026_30037 = G__30054;
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

cljs.compiler.emitln.call(null,"var ",mname_30032," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30055 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30055,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30033,".call(this,");

var seq__30027_30056 = cljs.core.seq.call(null,params);
var chunk__30028_30057 = null;
var count__30029_30058 = (0);
var i__30030_30059 = (0);
while(true){
if((i__30030_30059 < count__30029_30058)){
var param_30060 = cljs.core._nth.call(null,chunk__30028_30057,i__30030_30059);
cljs.compiler.emit.call(null,param_30060);

if(cljs.core._EQ_.call(null,param_30060,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30061 = seq__30027_30056;
var G__30062 = chunk__30028_30057;
var G__30063 = count__30029_30058;
var G__30064 = (i__30030_30059 + (1));
seq__30027_30056 = G__30061;
chunk__30028_30057 = G__30062;
count__30029_30058 = G__30063;
i__30030_30059 = G__30064;
continue;
} else {
var temp__5720__auto___30065 = cljs.core.seq.call(null,seq__30027_30056);
if(temp__5720__auto___30065){
var seq__30027_30066__$1 = temp__5720__auto___30065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30027_30066__$1)){
var c__4550__auto___30067 = cljs.core.chunk_first.call(null,seq__30027_30066__$1);
var G__30068 = cljs.core.chunk_rest.call(null,seq__30027_30066__$1);
var G__30069 = c__4550__auto___30067;
var G__30070 = cljs.core.count.call(null,c__4550__auto___30067);
var G__30071 = (0);
seq__30027_30056 = G__30068;
chunk__30028_30057 = G__30069;
count__30029_30058 = G__30070;
i__30030_30059 = G__30071;
continue;
} else {
var param_30072 = cljs.core.first.call(null,seq__30027_30066__$1);
cljs.compiler.emit.call(null,param_30072);

if(cljs.core._EQ_.call(null,param_30072,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30073 = cljs.core.next.call(null,seq__30027_30066__$1);
var G__30074 = null;
var G__30075 = (0);
var G__30076 = (0);
seq__30027_30056 = G__30073;
chunk__30028_30057 = G__30074;
count__30029_30058 = G__30075;
i__30030_30059 = G__30076;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30032,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30032,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30031__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30032,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30033,";");

cljs.compiler.emitln.call(null,"return ",mname_30032,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30080){
var map__30081 = p__30080;
var map__30081__$1 = (((((!((map__30081 == null))))?(((((map__30081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30081):map__30081);
var variadic = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30077_SHARP_){
var and__4120__auto__ = p1__30077_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30077_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_30134__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30135 = cljs.compiler.munge.call(null,name_30134__$1);
var maxparams_30136 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30137 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30134__$1,mname_30135,maxparams_30136,loop_locals,map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30135),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30134__$1,mname_30135,maxparams_30136,loop_locals,map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_30138 = cljs.core.sort_by.call(null,((function (name_30134__$1,mname_30135,maxparams_30136,mmap_30137,loop_locals,map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30078_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30078_SHARP_)));
});})(name_30134__$1,mname_30135,maxparams_30136,mmap_30137,loop_locals,map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30137));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30135," = null;");

var seq__30083_30139 = cljs.core.seq.call(null,ms_30138);
var chunk__30084_30140 = null;
var count__30085_30141 = (0);
var i__30086_30142 = (0);
while(true){
if((i__30086_30142 < count__30085_30141)){
var vec__30093_30143 = cljs.core._nth.call(null,chunk__30084_30140,i__30086_30142);
var n_30144 = cljs.core.nth.call(null,vec__30093_30143,(0),null);
var meth_30145 = cljs.core.nth.call(null,vec__30093_30143,(1),null);
cljs.compiler.emits.call(null,"var ",n_30144," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30145))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30145);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30145);
}

cljs.compiler.emitln.call(null,";");


var G__30146 = seq__30083_30139;
var G__30147 = chunk__30084_30140;
var G__30148 = count__30085_30141;
var G__30149 = (i__30086_30142 + (1));
seq__30083_30139 = G__30146;
chunk__30084_30140 = G__30147;
count__30085_30141 = G__30148;
i__30086_30142 = G__30149;
continue;
} else {
var temp__5720__auto___30150 = cljs.core.seq.call(null,seq__30083_30139);
if(temp__5720__auto___30150){
var seq__30083_30151__$1 = temp__5720__auto___30150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30083_30151__$1)){
var c__4550__auto___30152 = cljs.core.chunk_first.call(null,seq__30083_30151__$1);
var G__30153 = cljs.core.chunk_rest.call(null,seq__30083_30151__$1);
var G__30154 = c__4550__auto___30152;
var G__30155 = cljs.core.count.call(null,c__4550__auto___30152);
var G__30156 = (0);
seq__30083_30139 = G__30153;
chunk__30084_30140 = G__30154;
count__30085_30141 = G__30155;
i__30086_30142 = G__30156;
continue;
} else {
var vec__30096_30157 = cljs.core.first.call(null,seq__30083_30151__$1);
var n_30158 = cljs.core.nth.call(null,vec__30096_30157,(0),null);
var meth_30159 = cljs.core.nth.call(null,vec__30096_30157,(1),null);
cljs.compiler.emits.call(null,"var ",n_30158," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30159))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30159);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30159);
}

cljs.compiler.emitln.call(null,";");


var G__30160 = cljs.core.next.call(null,seq__30083_30151__$1);
var G__30161 = null;
var G__30162 = (0);
var G__30163 = (0);
seq__30083_30139 = G__30160;
chunk__30084_30140 = G__30161;
count__30085_30141 = G__30162;
i__30086_30142 = G__30163;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30135," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30136),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30136)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30136));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30099_30164 = cljs.core.seq.call(null,ms_30138);
var chunk__30100_30165 = null;
var count__30101_30166 = (0);
var i__30102_30167 = (0);
while(true){
if((i__30102_30167 < count__30101_30166)){
var vec__30109_30168 = cljs.core._nth.call(null,chunk__30100_30165,i__30102_30167);
var n_30169 = cljs.core.nth.call(null,vec__30109_30168,(0),null);
var meth_30170 = cljs.core.nth.call(null,vec__30109_30168,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30170))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30171 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30171," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30172 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30171," = new cljs.core.IndexedSeq(",a_30172,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30169,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30136)),(((cljs.core.count.call(null,maxparams_30136) > (1)))?", ":null),restarg_30171,");");
} else {
var pcnt_30173 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30170));
cljs.compiler.emitln.call(null,"case ",pcnt_30173,":");

cljs.compiler.emitln.call(null,"return ",n_30169,".call(this",(((pcnt_30173 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30173,maxparams_30136)),null,(1),null)),(2),null))),");");
}


var G__30174 = seq__30099_30164;
var G__30175 = chunk__30100_30165;
var G__30176 = count__30101_30166;
var G__30177 = (i__30102_30167 + (1));
seq__30099_30164 = G__30174;
chunk__30100_30165 = G__30175;
count__30101_30166 = G__30176;
i__30102_30167 = G__30177;
continue;
} else {
var temp__5720__auto___30178 = cljs.core.seq.call(null,seq__30099_30164);
if(temp__5720__auto___30178){
var seq__30099_30179__$1 = temp__5720__auto___30178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30099_30179__$1)){
var c__4550__auto___30180 = cljs.core.chunk_first.call(null,seq__30099_30179__$1);
var G__30181 = cljs.core.chunk_rest.call(null,seq__30099_30179__$1);
var G__30182 = c__4550__auto___30180;
var G__30183 = cljs.core.count.call(null,c__4550__auto___30180);
var G__30184 = (0);
seq__30099_30164 = G__30181;
chunk__30100_30165 = G__30182;
count__30101_30166 = G__30183;
i__30102_30167 = G__30184;
continue;
} else {
var vec__30112_30185 = cljs.core.first.call(null,seq__30099_30179__$1);
var n_30186 = cljs.core.nth.call(null,vec__30112_30185,(0),null);
var meth_30187 = cljs.core.nth.call(null,vec__30112_30185,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30187))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30188 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30188," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30189 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30188," = new cljs.core.IndexedSeq(",a_30189,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30186,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30136)),(((cljs.core.count.call(null,maxparams_30136) > (1)))?", ":null),restarg_30188,");");
} else {
var pcnt_30190 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30187));
cljs.compiler.emitln.call(null,"case ",pcnt_30190,":");

cljs.compiler.emitln.call(null,"return ",n_30186,".call(this",(((pcnt_30190 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30190,maxparams_30136)),null,(1),null)),(2),null))),");");
}


var G__30191 = cljs.core.next.call(null,seq__30099_30179__$1);
var G__30192 = null;
var G__30193 = (0);
var G__30194 = (0);
seq__30099_30164 = G__30191;
chunk__30100_30165 = G__30192;
count__30101_30166 = G__30193;
i__30102_30167 = G__30194;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_30195 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_30138)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_30195,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30135,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30135,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30134__$1,mname_30135,maxparams_30136,mmap_30137,ms_30138,loop_locals,map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30079_SHARP_){
var vec__30115 = p1__30079_SHARP_;
var n = cljs.core.nth.call(null,vec__30115,(0),null);
var m = cljs.core.nth.call(null,vec__30115,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30134__$1,mname_30135,maxparams_30136,mmap_30137,ms_30138,loop_locals,map__30081,map__30081__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_30138),".cljs$lang$applyTo;");
} else {
}

var seq__30118_30196 = cljs.core.seq.call(null,ms_30138);
var chunk__30119_30197 = null;
var count__30120_30198 = (0);
var i__30121_30199 = (0);
while(true){
if((i__30121_30199 < count__30120_30198)){
var vec__30128_30200 = cljs.core._nth.call(null,chunk__30119_30197,i__30121_30199);
var n_30201 = cljs.core.nth.call(null,vec__30128_30200,(0),null);
var meth_30202 = cljs.core.nth.call(null,vec__30128_30200,(1),null);
var c_30203 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30202));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30202))){
cljs.compiler.emitln.call(null,mname_30135,".cljs$core$IFn$_invoke$arity$variadic = ",n_30201,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30135,".cljs$core$IFn$_invoke$arity$",c_30203," = ",n_30201,";");
}


var G__30204 = seq__30118_30196;
var G__30205 = chunk__30119_30197;
var G__30206 = count__30120_30198;
var G__30207 = (i__30121_30199 + (1));
seq__30118_30196 = G__30204;
chunk__30119_30197 = G__30205;
count__30120_30198 = G__30206;
i__30121_30199 = G__30207;
continue;
} else {
var temp__5720__auto___30208 = cljs.core.seq.call(null,seq__30118_30196);
if(temp__5720__auto___30208){
var seq__30118_30209__$1 = temp__5720__auto___30208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30118_30209__$1)){
var c__4550__auto___30210 = cljs.core.chunk_first.call(null,seq__30118_30209__$1);
var G__30211 = cljs.core.chunk_rest.call(null,seq__30118_30209__$1);
var G__30212 = c__4550__auto___30210;
var G__30213 = cljs.core.count.call(null,c__4550__auto___30210);
var G__30214 = (0);
seq__30118_30196 = G__30211;
chunk__30119_30197 = G__30212;
count__30120_30198 = G__30213;
i__30121_30199 = G__30214;
continue;
} else {
var vec__30131_30215 = cljs.core.first.call(null,seq__30118_30209__$1);
var n_30216 = cljs.core.nth.call(null,vec__30131_30215,(0),null);
var meth_30217 = cljs.core.nth.call(null,vec__30131_30215,(1),null);
var c_30218 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30217));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30217))){
cljs.compiler.emitln.call(null,mname_30135,".cljs$core$IFn$_invoke$arity$variadic = ",n_30216,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30135,".cljs$core$IFn$_invoke$arity$",c_30218," = ",n_30216,";");
}


var G__30219 = cljs.core.next.call(null,seq__30118_30209__$1);
var G__30220 = null;
var G__30221 = (0);
var G__30222 = (0);
seq__30118_30196 = G__30219;
chunk__30119_30197 = G__30220;
count__30120_30198 = G__30221;
i__30121_30199 = G__30222;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30135,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30223){
var map__30224 = p__30223;
var map__30224__$1 = (((((!((map__30224 == null))))?(((((map__30224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30224):map__30224);
var statements = cljs.core.get.call(null,map__30224__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30224__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30224__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__30226_30230 = cljs.core.seq.call(null,statements);
var chunk__30227_30231 = null;
var count__30228_30232 = (0);
var i__30229_30233 = (0);
while(true){
if((i__30229_30233 < count__30228_30232)){
var s_30234 = cljs.core._nth.call(null,chunk__30227_30231,i__30229_30233);
cljs.compiler.emitln.call(null,s_30234);


var G__30235 = seq__30226_30230;
var G__30236 = chunk__30227_30231;
var G__30237 = count__30228_30232;
var G__30238 = (i__30229_30233 + (1));
seq__30226_30230 = G__30235;
chunk__30227_30231 = G__30236;
count__30228_30232 = G__30237;
i__30229_30233 = G__30238;
continue;
} else {
var temp__5720__auto___30239 = cljs.core.seq.call(null,seq__30226_30230);
if(temp__5720__auto___30239){
var seq__30226_30240__$1 = temp__5720__auto___30239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30226_30240__$1)){
var c__4550__auto___30241 = cljs.core.chunk_first.call(null,seq__30226_30240__$1);
var G__30242 = cljs.core.chunk_rest.call(null,seq__30226_30240__$1);
var G__30243 = c__4550__auto___30241;
var G__30244 = cljs.core.count.call(null,c__4550__auto___30241);
var G__30245 = (0);
seq__30226_30230 = G__30242;
chunk__30227_30231 = G__30243;
count__30228_30232 = G__30244;
i__30229_30233 = G__30245;
continue;
} else {
var s_30246 = cljs.core.first.call(null,seq__30226_30240__$1);
cljs.compiler.emitln.call(null,s_30246);


var G__30247 = cljs.core.next.call(null,seq__30226_30240__$1);
var G__30248 = null;
var G__30249 = (0);
var G__30250 = (0);
seq__30226_30230 = G__30247;
chunk__30227_30231 = G__30248;
count__30228_30232 = G__30249;
i__30229_30233 = G__30250;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30251){
var map__30252 = p__30251;
var map__30252__$1 = (((((!((map__30252 == null))))?(((((map__30252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30252):map__30252);
var try$ = cljs.core.get.call(null,map__30252__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__30252__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__30252__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30252__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30254,is_loop){
var map__30255 = p__30254;
var map__30255__$1 = (((((!((map__30255 == null))))?(((((map__30255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30255):map__30255);
var expr = cljs.core.get.call(null,map__30255__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30255__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30255__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__30257_30271 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__30258_30272 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__30257_30271,context,map__30255,map__30255__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__30257_30271,context,map__30255,map__30255__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__30258_30272;

try{var seq__30259_30273 = cljs.core.seq.call(null,bindings);
var chunk__30260_30274 = null;
var count__30261_30275 = (0);
var i__30262_30276 = (0);
while(true){
if((i__30262_30276 < count__30261_30275)){
var map__30267_30277 = cljs.core._nth.call(null,chunk__30260_30274,i__30262_30276);
var map__30267_30278__$1 = (((((!((map__30267_30277 == null))))?(((((map__30267_30277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30267_30277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30267_30277):map__30267_30277);
var binding_30279 = map__30267_30278__$1;
var init_30280 = cljs.core.get.call(null,map__30267_30278__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30279);

cljs.compiler.emitln.call(null," = ",init_30280,";");


var G__30281 = seq__30259_30273;
var G__30282 = chunk__30260_30274;
var G__30283 = count__30261_30275;
var G__30284 = (i__30262_30276 + (1));
seq__30259_30273 = G__30281;
chunk__30260_30274 = G__30282;
count__30261_30275 = G__30283;
i__30262_30276 = G__30284;
continue;
} else {
var temp__5720__auto___30285 = cljs.core.seq.call(null,seq__30259_30273);
if(temp__5720__auto___30285){
var seq__30259_30286__$1 = temp__5720__auto___30285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30259_30286__$1)){
var c__4550__auto___30287 = cljs.core.chunk_first.call(null,seq__30259_30286__$1);
var G__30288 = cljs.core.chunk_rest.call(null,seq__30259_30286__$1);
var G__30289 = c__4550__auto___30287;
var G__30290 = cljs.core.count.call(null,c__4550__auto___30287);
var G__30291 = (0);
seq__30259_30273 = G__30288;
chunk__30260_30274 = G__30289;
count__30261_30275 = G__30290;
i__30262_30276 = G__30291;
continue;
} else {
var map__30269_30292 = cljs.core.first.call(null,seq__30259_30286__$1);
var map__30269_30293__$1 = (((((!((map__30269_30292 == null))))?(((((map__30269_30292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30269_30292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30269_30292):map__30269_30292);
var binding_30294 = map__30269_30293__$1;
var init_30295 = cljs.core.get.call(null,map__30269_30293__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30294);

cljs.compiler.emitln.call(null," = ",init_30295,";");


var G__30296 = cljs.core.next.call(null,seq__30259_30286__$1);
var G__30297 = null;
var G__30298 = (0);
var G__30299 = (0);
seq__30259_30273 = G__30296;
chunk__30260_30274 = G__30297;
count__30261_30275 = G__30298;
i__30262_30276 = G__30299;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__30257_30271;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30300){
var map__30301 = p__30300;
var map__30301__$1 = (((((!((map__30301 == null))))?(((((map__30301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30301):map__30301);
var frame = cljs.core.get.call(null,map__30301__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30301__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___30303 = cljs.core.count.call(null,exprs);
var i_30304 = (0);
while(true){
if((i_30304 < n__4607__auto___30303)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30304)," = ",exprs.call(null,i_30304),";");

var G__30305 = (i_30304 + (1));
i_30304 = G__30305;
continue;
} else {
}
break;
}

var n__4607__auto___30306 = cljs.core.count.call(null,exprs);
var i_30307 = (0);
while(true){
if((i_30307 < n__4607__auto___30306)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30307))," = ",temps.call(null,i_30307),";");

var G__30308 = (i_30307 + (1));
i_30307 = G__30308;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30309){
var map__30310 = p__30309;
var map__30310__$1 = (((((!((map__30310 == null))))?(((((map__30310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310):map__30310);
var expr = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30312_30324 = cljs.core.seq.call(null,bindings);
var chunk__30313_30325 = null;
var count__30314_30326 = (0);
var i__30315_30327 = (0);
while(true){
if((i__30315_30327 < count__30314_30326)){
var map__30320_30328 = cljs.core._nth.call(null,chunk__30313_30325,i__30315_30327);
var map__30320_30329__$1 = (((((!((map__30320_30328 == null))))?(((((map__30320_30328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30320_30328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30320_30328):map__30320_30328);
var binding_30330 = map__30320_30329__$1;
var init_30331 = cljs.core.get.call(null,map__30320_30329__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30330)," = ",init_30331,";");


var G__30332 = seq__30312_30324;
var G__30333 = chunk__30313_30325;
var G__30334 = count__30314_30326;
var G__30335 = (i__30315_30327 + (1));
seq__30312_30324 = G__30332;
chunk__30313_30325 = G__30333;
count__30314_30326 = G__30334;
i__30315_30327 = G__30335;
continue;
} else {
var temp__5720__auto___30336 = cljs.core.seq.call(null,seq__30312_30324);
if(temp__5720__auto___30336){
var seq__30312_30337__$1 = temp__5720__auto___30336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30312_30337__$1)){
var c__4550__auto___30338 = cljs.core.chunk_first.call(null,seq__30312_30337__$1);
var G__30339 = cljs.core.chunk_rest.call(null,seq__30312_30337__$1);
var G__30340 = c__4550__auto___30338;
var G__30341 = cljs.core.count.call(null,c__4550__auto___30338);
var G__30342 = (0);
seq__30312_30324 = G__30339;
chunk__30313_30325 = G__30340;
count__30314_30326 = G__30341;
i__30315_30327 = G__30342;
continue;
} else {
var map__30322_30343 = cljs.core.first.call(null,seq__30312_30337__$1);
var map__30322_30344__$1 = (((((!((map__30322_30343 == null))))?(((((map__30322_30343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30322_30343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30322_30343):map__30322_30343);
var binding_30345 = map__30322_30344__$1;
var init_30346 = cljs.core.get.call(null,map__30322_30344__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30345)," = ",init_30346,";");


var G__30347 = cljs.core.next.call(null,seq__30312_30337__$1);
var G__30348 = null;
var G__30349 = (0);
var G__30350 = (0);
seq__30312_30324 = G__30347;
chunk__30313_30325 = G__30348;
count__30314_30326 = G__30349;
i__30315_30327 = G__30350;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30353){
var map__30354 = p__30353;
var map__30354__$1 = (((((!((map__30354 == null))))?(((((map__30354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354):map__30354);
var expr = map__30354__$1;
var f = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30356 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env){
return (function (p1__30351_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30351_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env){
return (function (p1__30352_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30352_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30354,map__30354__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30356,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30356,(1),null);
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30359 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30359,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30360 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30360,args)),(((mfa_30360 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30360,args)),"], 0))");
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
var fprop_30361 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_30361," ? ",f__$1,fprop_30361,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_30361," ? ",f__$1,fprop_30361,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30362){
var map__30363 = p__30362;
var map__30363__$1 = (((((!((map__30363 == null))))?(((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var ctor = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30365){
var map__30366 = p__30365;
var map__30366__$1 = (((((!((map__30366 == null))))?(((((map__30366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30366):map__30366);
var target = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
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
var map__30368 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30368__$1 = (((((!((map__30368 == null))))?(((((map__30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30368):map__30368);
var options = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30369 = options;
var map__30369__$1 = (((((!((map__30369 == null))))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var target = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30370 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30375 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30375__$1 = (((((!((map__30375 == null))))?(((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var node_libs = cljs.core.get.call(null,map__30375__$1,true);
var libs_to_load = cljs.core.get.call(null,map__30375__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__30370,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__30370,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30377_30397 = cljs.core.seq.call(null,libs_to_load);
var chunk__30378_30398 = null;
var count__30379_30399 = (0);
var i__30380_30400 = (0);
while(true){
if((i__30380_30400 < count__30379_30399)){
var lib_30401 = cljs.core._nth.call(null,chunk__30378_30398,i__30380_30400);
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


var G__30402 = seq__30377_30397;
var G__30403 = chunk__30378_30398;
var G__30404 = count__30379_30399;
var G__30405 = (i__30380_30400 + (1));
seq__30377_30397 = G__30402;
chunk__30378_30398 = G__30403;
count__30379_30399 = G__30404;
i__30380_30400 = G__30405;
continue;
} else {
var temp__5720__auto___30406 = cljs.core.seq.call(null,seq__30377_30397);
if(temp__5720__auto___30406){
var seq__30377_30407__$1 = temp__5720__auto___30406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30377_30407__$1)){
var c__4550__auto___30408 = cljs.core.chunk_first.call(null,seq__30377_30407__$1);
var G__30409 = cljs.core.chunk_rest.call(null,seq__30377_30407__$1);
var G__30410 = c__4550__auto___30408;
var G__30411 = cljs.core.count.call(null,c__4550__auto___30408);
var G__30412 = (0);
seq__30377_30397 = G__30409;
chunk__30378_30398 = G__30410;
count__30379_30399 = G__30411;
i__30380_30400 = G__30412;
continue;
} else {
var lib_30413 = cljs.core.first.call(null,seq__30377_30407__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30413)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30413),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30413),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30413),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30413),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30413,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30413),"');");
}

}
}
}


var G__30414 = cljs.core.next.call(null,seq__30377_30407__$1);
var G__30415 = null;
var G__30416 = (0);
var G__30417 = (0);
seq__30377_30397 = G__30414;
chunk__30378_30398 = G__30415;
count__30379_30399 = G__30416;
i__30380_30400 = G__30417;
continue;
}
} else {
}
}
break;
}

var seq__30381_30418 = cljs.core.seq.call(null,node_libs);
var chunk__30382_30419 = null;
var count__30383_30420 = (0);
var i__30384_30421 = (0);
while(true){
if((i__30384_30421 < count__30383_30420)){
var lib_30422 = cljs.core._nth.call(null,chunk__30382_30419,i__30384_30421);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30422)," = require('",lib_30422,"');");


var G__30423 = seq__30381_30418;
var G__30424 = chunk__30382_30419;
var G__30425 = count__30383_30420;
var G__30426 = (i__30384_30421 + (1));
seq__30381_30418 = G__30423;
chunk__30382_30419 = G__30424;
count__30383_30420 = G__30425;
i__30384_30421 = G__30426;
continue;
} else {
var temp__5720__auto___30427 = cljs.core.seq.call(null,seq__30381_30418);
if(temp__5720__auto___30427){
var seq__30381_30428__$1 = temp__5720__auto___30427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30381_30428__$1)){
var c__4550__auto___30429 = cljs.core.chunk_first.call(null,seq__30381_30428__$1);
var G__30430 = cljs.core.chunk_rest.call(null,seq__30381_30428__$1);
var G__30431 = c__4550__auto___30429;
var G__30432 = cljs.core.count.call(null,c__4550__auto___30429);
var G__30433 = (0);
seq__30381_30418 = G__30430;
chunk__30382_30419 = G__30431;
count__30383_30420 = G__30432;
i__30384_30421 = G__30433;
continue;
} else {
var lib_30434 = cljs.core.first.call(null,seq__30381_30428__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30434)," = require('",lib_30434,"');");


var G__30435 = cljs.core.next.call(null,seq__30381_30428__$1);
var G__30436 = null;
var G__30437 = (0);
var G__30438 = (0);
seq__30381_30418 = G__30435;
chunk__30382_30419 = G__30436;
count__30383_30420 = G__30437;
i__30384_30421 = G__30438;
continue;
}
} else {
}
}
break;
}

var seq__30385_30439 = cljs.core.seq.call(null,global_exports_libs);
var chunk__30386_30440 = null;
var count__30387_30441 = (0);
var i__30388_30442 = (0);
while(true){
if((i__30388_30442 < count__30387_30441)){
var lib_30443 = cljs.core._nth.call(null,chunk__30386_30440,i__30388_30442);
var map__30393_30444 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30443));
var map__30393_30445__$1 = (((((!((map__30393_30444 == null))))?(((((map__30393_30444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30393_30444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30393_30444):map__30393_30444);
var global_exports_30446 = cljs.core.get.call(null,map__30393_30445__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30446,lib_30443);


var G__30447 = seq__30385_30439;
var G__30448 = chunk__30386_30440;
var G__30449 = count__30387_30441;
var G__30450 = (i__30388_30442 + (1));
seq__30385_30439 = G__30447;
chunk__30386_30440 = G__30448;
count__30387_30441 = G__30449;
i__30388_30442 = G__30450;
continue;
} else {
var temp__5720__auto___30451 = cljs.core.seq.call(null,seq__30385_30439);
if(temp__5720__auto___30451){
var seq__30385_30452__$1 = temp__5720__auto___30451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30385_30452__$1)){
var c__4550__auto___30453 = cljs.core.chunk_first.call(null,seq__30385_30452__$1);
var G__30454 = cljs.core.chunk_rest.call(null,seq__30385_30452__$1);
var G__30455 = c__4550__auto___30453;
var G__30456 = cljs.core.count.call(null,c__4550__auto___30453);
var G__30457 = (0);
seq__30385_30439 = G__30454;
chunk__30386_30440 = G__30455;
count__30387_30441 = G__30456;
i__30388_30442 = G__30457;
continue;
} else {
var lib_30458 = cljs.core.first.call(null,seq__30385_30452__$1);
var map__30395_30459 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30458));
var map__30395_30460__$1 = (((((!((map__30395_30459 == null))))?(((((map__30395_30459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30395_30459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30395_30459):map__30395_30459);
var global_exports_30461 = cljs.core.get.call(null,map__30395_30460__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30461,lib_30458);


var G__30462 = cljs.core.next.call(null,seq__30385_30452__$1);
var G__30463 = null;
var G__30464 = (0);
var G__30465 = (0);
seq__30385_30439 = G__30462;
chunk__30386_30440 = G__30463;
count__30387_30441 = G__30464;
i__30388_30442 = G__30465;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__30466){
var map__30467 = p__30466;
var map__30467__$1 = (((((!((map__30467 == null))))?(((((map__30467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30467):map__30467);
var name = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30469){
var map__30470 = p__30469;
var map__30470__$1 = (((((!((map__30470 == null))))?(((((map__30470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30470):map__30470);
var name = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__30472){
var map__30473 = p__30472;
var map__30473__$1 = (((((!((map__30473 == null))))?(((((map__30473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30473):map__30473);
var t = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30475_30499 = cljs.core.seq.call(null,protocols);
var chunk__30476_30500 = null;
var count__30477_30501 = (0);
var i__30478_30502 = (0);
while(true){
if((i__30478_30502 < count__30477_30501)){
var protocol_30503 = cljs.core._nth.call(null,chunk__30476_30500,i__30478_30502);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30503)),"}");


var G__30504 = seq__30475_30499;
var G__30505 = chunk__30476_30500;
var G__30506 = count__30477_30501;
var G__30507 = (i__30478_30502 + (1));
seq__30475_30499 = G__30504;
chunk__30476_30500 = G__30505;
count__30477_30501 = G__30506;
i__30478_30502 = G__30507;
continue;
} else {
var temp__5720__auto___30508 = cljs.core.seq.call(null,seq__30475_30499);
if(temp__5720__auto___30508){
var seq__30475_30509__$1 = temp__5720__auto___30508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30475_30509__$1)){
var c__4550__auto___30510 = cljs.core.chunk_first.call(null,seq__30475_30509__$1);
var G__30511 = cljs.core.chunk_rest.call(null,seq__30475_30509__$1);
var G__30512 = c__4550__auto___30510;
var G__30513 = cljs.core.count.call(null,c__4550__auto___30510);
var G__30514 = (0);
seq__30475_30499 = G__30511;
chunk__30476_30500 = G__30512;
count__30477_30501 = G__30513;
i__30478_30502 = G__30514;
continue;
} else {
var protocol_30515 = cljs.core.first.call(null,seq__30475_30509__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30515)),"}");


var G__30516 = cljs.core.next.call(null,seq__30475_30509__$1);
var G__30517 = null;
var G__30518 = (0);
var G__30519 = (0);
seq__30475_30499 = G__30516;
chunk__30476_30500 = G__30517;
count__30477_30501 = G__30518;
i__30478_30502 = G__30519;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30479_30520 = cljs.core.seq.call(null,fields__$1);
var chunk__30480_30521 = null;
var count__30481_30522 = (0);
var i__30482_30523 = (0);
while(true){
if((i__30482_30523 < count__30481_30522)){
var fld_30524 = cljs.core._nth.call(null,chunk__30480_30521,i__30482_30523);
cljs.compiler.emitln.call(null,"this.",fld_30524," = ",fld_30524,";");


var G__30525 = seq__30479_30520;
var G__30526 = chunk__30480_30521;
var G__30527 = count__30481_30522;
var G__30528 = (i__30482_30523 + (1));
seq__30479_30520 = G__30525;
chunk__30480_30521 = G__30526;
count__30481_30522 = G__30527;
i__30482_30523 = G__30528;
continue;
} else {
var temp__5720__auto___30529 = cljs.core.seq.call(null,seq__30479_30520);
if(temp__5720__auto___30529){
var seq__30479_30530__$1 = temp__5720__auto___30529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30479_30530__$1)){
var c__4550__auto___30531 = cljs.core.chunk_first.call(null,seq__30479_30530__$1);
var G__30532 = cljs.core.chunk_rest.call(null,seq__30479_30530__$1);
var G__30533 = c__4550__auto___30531;
var G__30534 = cljs.core.count.call(null,c__4550__auto___30531);
var G__30535 = (0);
seq__30479_30520 = G__30532;
chunk__30480_30521 = G__30533;
count__30481_30522 = G__30534;
i__30482_30523 = G__30535;
continue;
} else {
var fld_30536 = cljs.core.first.call(null,seq__30479_30530__$1);
cljs.compiler.emitln.call(null,"this.",fld_30536," = ",fld_30536,";");


var G__30537 = cljs.core.next.call(null,seq__30479_30530__$1);
var G__30538 = null;
var G__30539 = (0);
var G__30540 = (0);
seq__30479_30520 = G__30537;
chunk__30480_30521 = G__30538;
count__30481_30522 = G__30539;
i__30482_30523 = G__30540;
continue;
}
} else {
}
}
break;
}

var seq__30483_30541 = cljs.core.seq.call(null,pmasks);
var chunk__30484_30542 = null;
var count__30485_30543 = (0);
var i__30486_30544 = (0);
while(true){
if((i__30486_30544 < count__30485_30543)){
var vec__30493_30545 = cljs.core._nth.call(null,chunk__30484_30542,i__30486_30544);
var pno_30546 = cljs.core.nth.call(null,vec__30493_30545,(0),null);
var pmask_30547 = cljs.core.nth.call(null,vec__30493_30545,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30546,"$ = ",pmask_30547,";");


var G__30548 = seq__30483_30541;
var G__30549 = chunk__30484_30542;
var G__30550 = count__30485_30543;
var G__30551 = (i__30486_30544 + (1));
seq__30483_30541 = G__30548;
chunk__30484_30542 = G__30549;
count__30485_30543 = G__30550;
i__30486_30544 = G__30551;
continue;
} else {
var temp__5720__auto___30552 = cljs.core.seq.call(null,seq__30483_30541);
if(temp__5720__auto___30552){
var seq__30483_30553__$1 = temp__5720__auto___30552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30483_30553__$1)){
var c__4550__auto___30554 = cljs.core.chunk_first.call(null,seq__30483_30553__$1);
var G__30555 = cljs.core.chunk_rest.call(null,seq__30483_30553__$1);
var G__30556 = c__4550__auto___30554;
var G__30557 = cljs.core.count.call(null,c__4550__auto___30554);
var G__30558 = (0);
seq__30483_30541 = G__30555;
chunk__30484_30542 = G__30556;
count__30485_30543 = G__30557;
i__30486_30544 = G__30558;
continue;
} else {
var vec__30496_30559 = cljs.core.first.call(null,seq__30483_30553__$1);
var pno_30560 = cljs.core.nth.call(null,vec__30496_30559,(0),null);
var pmask_30561 = cljs.core.nth.call(null,vec__30496_30559,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30560,"$ = ",pmask_30561,";");


var G__30562 = cljs.core.next.call(null,seq__30483_30553__$1);
var G__30563 = null;
var G__30564 = (0);
var G__30565 = (0);
seq__30483_30541 = G__30562;
chunk__30484_30542 = G__30563;
count__30485_30543 = G__30564;
i__30486_30544 = G__30565;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__30566){
var map__30567 = p__30566;
var map__30567__$1 = (((((!((map__30567 == null))))?(((((map__30567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30567):map__30567);
var t = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30569_30593 = cljs.core.seq.call(null,protocols);
var chunk__30570_30594 = null;
var count__30571_30595 = (0);
var i__30572_30596 = (0);
while(true){
if((i__30572_30596 < count__30571_30595)){
var protocol_30597 = cljs.core._nth.call(null,chunk__30570_30594,i__30572_30596);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30597)),"}");


var G__30598 = seq__30569_30593;
var G__30599 = chunk__30570_30594;
var G__30600 = count__30571_30595;
var G__30601 = (i__30572_30596 + (1));
seq__30569_30593 = G__30598;
chunk__30570_30594 = G__30599;
count__30571_30595 = G__30600;
i__30572_30596 = G__30601;
continue;
} else {
var temp__5720__auto___30602 = cljs.core.seq.call(null,seq__30569_30593);
if(temp__5720__auto___30602){
var seq__30569_30603__$1 = temp__5720__auto___30602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30569_30603__$1)){
var c__4550__auto___30604 = cljs.core.chunk_first.call(null,seq__30569_30603__$1);
var G__30605 = cljs.core.chunk_rest.call(null,seq__30569_30603__$1);
var G__30606 = c__4550__auto___30604;
var G__30607 = cljs.core.count.call(null,c__4550__auto___30604);
var G__30608 = (0);
seq__30569_30593 = G__30605;
chunk__30570_30594 = G__30606;
count__30571_30595 = G__30607;
i__30572_30596 = G__30608;
continue;
} else {
var protocol_30609 = cljs.core.first.call(null,seq__30569_30603__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_30609)),"}");


var G__30610 = cljs.core.next.call(null,seq__30569_30603__$1);
var G__30611 = null;
var G__30612 = (0);
var G__30613 = (0);
seq__30569_30593 = G__30610;
chunk__30570_30594 = G__30611;
count__30571_30595 = G__30612;
i__30572_30596 = G__30613;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30573_30614 = cljs.core.seq.call(null,fields__$1);
var chunk__30574_30615 = null;
var count__30575_30616 = (0);
var i__30576_30617 = (0);
while(true){
if((i__30576_30617 < count__30575_30616)){
var fld_30618 = cljs.core._nth.call(null,chunk__30574_30615,i__30576_30617);
cljs.compiler.emitln.call(null,"this.",fld_30618," = ",fld_30618,";");


var G__30619 = seq__30573_30614;
var G__30620 = chunk__30574_30615;
var G__30621 = count__30575_30616;
var G__30622 = (i__30576_30617 + (1));
seq__30573_30614 = G__30619;
chunk__30574_30615 = G__30620;
count__30575_30616 = G__30621;
i__30576_30617 = G__30622;
continue;
} else {
var temp__5720__auto___30623 = cljs.core.seq.call(null,seq__30573_30614);
if(temp__5720__auto___30623){
var seq__30573_30624__$1 = temp__5720__auto___30623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30573_30624__$1)){
var c__4550__auto___30625 = cljs.core.chunk_first.call(null,seq__30573_30624__$1);
var G__30626 = cljs.core.chunk_rest.call(null,seq__30573_30624__$1);
var G__30627 = c__4550__auto___30625;
var G__30628 = cljs.core.count.call(null,c__4550__auto___30625);
var G__30629 = (0);
seq__30573_30614 = G__30626;
chunk__30574_30615 = G__30627;
count__30575_30616 = G__30628;
i__30576_30617 = G__30629;
continue;
} else {
var fld_30630 = cljs.core.first.call(null,seq__30573_30624__$1);
cljs.compiler.emitln.call(null,"this.",fld_30630," = ",fld_30630,";");


var G__30631 = cljs.core.next.call(null,seq__30573_30624__$1);
var G__30632 = null;
var G__30633 = (0);
var G__30634 = (0);
seq__30573_30614 = G__30631;
chunk__30574_30615 = G__30632;
count__30575_30616 = G__30633;
i__30576_30617 = G__30634;
continue;
}
} else {
}
}
break;
}

var seq__30577_30635 = cljs.core.seq.call(null,pmasks);
var chunk__30578_30636 = null;
var count__30579_30637 = (0);
var i__30580_30638 = (0);
while(true){
if((i__30580_30638 < count__30579_30637)){
var vec__30587_30639 = cljs.core._nth.call(null,chunk__30578_30636,i__30580_30638);
var pno_30640 = cljs.core.nth.call(null,vec__30587_30639,(0),null);
var pmask_30641 = cljs.core.nth.call(null,vec__30587_30639,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30640,"$ = ",pmask_30641,";");


var G__30642 = seq__30577_30635;
var G__30643 = chunk__30578_30636;
var G__30644 = count__30579_30637;
var G__30645 = (i__30580_30638 + (1));
seq__30577_30635 = G__30642;
chunk__30578_30636 = G__30643;
count__30579_30637 = G__30644;
i__30580_30638 = G__30645;
continue;
} else {
var temp__5720__auto___30646 = cljs.core.seq.call(null,seq__30577_30635);
if(temp__5720__auto___30646){
var seq__30577_30647__$1 = temp__5720__auto___30646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30577_30647__$1)){
var c__4550__auto___30648 = cljs.core.chunk_first.call(null,seq__30577_30647__$1);
var G__30649 = cljs.core.chunk_rest.call(null,seq__30577_30647__$1);
var G__30650 = c__4550__auto___30648;
var G__30651 = cljs.core.count.call(null,c__4550__auto___30648);
var G__30652 = (0);
seq__30577_30635 = G__30649;
chunk__30578_30636 = G__30650;
count__30579_30637 = G__30651;
i__30580_30638 = G__30652;
continue;
} else {
var vec__30590_30653 = cljs.core.first.call(null,seq__30577_30647__$1);
var pno_30654 = cljs.core.nth.call(null,vec__30590_30653,(0),null);
var pmask_30655 = cljs.core.nth.call(null,vec__30590_30653,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30654,"$ = ",pmask_30655,";");


var G__30656 = cljs.core.next.call(null,seq__30577_30647__$1);
var G__30657 = null;
var G__30658 = (0);
var G__30659 = (0);
seq__30577_30635 = G__30656;
chunk__30578_30636 = G__30657;
count__30579_30637 = G__30658;
i__30580_30638 = G__30659;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__30660){
var map__30661 = p__30660;
var map__30661__$1 = (((((!((map__30661 == null))))?(((((map__30661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30661):map__30661);
var target = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30663){
var map__30664 = p__30663;
var map__30664__$1 = (((((!((map__30664 == null))))?(((((map__30664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30664):map__30664);
var op = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29458__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29458__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__30670 = cljs.core.seq.call(null,table);
var chunk__30671 = null;
var count__30672 = (0);
var i__30673 = (0);
while(true){
if((i__30673 < count__30672)){
var vec__30680 = cljs.core._nth.call(null,chunk__30671,i__30673);
var sym = cljs.core.nth.call(null,vec__30680,(0),null);
var value = cljs.core.nth.call(null,vec__30680,(1),null);
var ns_30686 = cljs.core.namespace.call(null,sym);
var name_30687 = cljs.core.name.call(null,sym);
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


var G__30688 = seq__30670;
var G__30689 = chunk__30671;
var G__30690 = count__30672;
var G__30691 = (i__30673 + (1));
seq__30670 = G__30688;
chunk__30671 = G__30689;
count__30672 = G__30690;
i__30673 = G__30691;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30670);
if(temp__5720__auto__){
var seq__30670__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30670__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30670__$1);
var G__30692 = cljs.core.chunk_rest.call(null,seq__30670__$1);
var G__30693 = c__4550__auto__;
var G__30694 = cljs.core.count.call(null,c__4550__auto__);
var G__30695 = (0);
seq__30670 = G__30692;
chunk__30671 = G__30693;
count__30672 = G__30694;
i__30673 = G__30695;
continue;
} else {
var vec__30683 = cljs.core.first.call(null,seq__30670__$1);
var sym = cljs.core.nth.call(null,vec__30683,(0),null);
var value = cljs.core.nth.call(null,vec__30683,(1),null);
var ns_30696 = cljs.core.namespace.call(null,sym);
var name_30697 = cljs.core.name.call(null,sym);
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


var G__30698 = cljs.core.next.call(null,seq__30670__$1);
var G__30699 = null;
var G__30700 = (0);
var G__30701 = (0);
seq__30670 = G__30698;
chunk__30671 = G__30699;
count__30672 = G__30700;
i__30673 = G__30701;
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
var G__30703 = arguments.length;
switch (G__30703) {
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
var k_30708 = cljs.core.first.call(null,ks);
var vec__30704_30709 = cljs.core.conj.call(null,prefix,k_30708);
var top_30710 = cljs.core.nth.call(null,vec__30704_30709,(0),null);
var prefix_SINGLEQUOTE__30711 = vec__30704_30709;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_30708)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__30711) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_30710)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_30710)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30711)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_30710);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__30711)),";");
}
} else {
}

var m_30712 = cljs.core.get.call(null,externs,k_30708);
if(cljs.core.empty_QMARK_.call(null,m_30712)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__30711,m_30712,top_level,known_externs);
}

var G__30713 = cljs.core.next.call(null,ks);
ks = G__30713;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1610065042063
