// Compiled by ClojureScript 1.10.520 {}
goog.provide('oops.messages');
goog.require('cljs.core');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return ["Oops",", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if((typeof oops !== 'undefined') && (typeof oops.messages !== 'undefined') && (typeof oops.messages.runtime_message !== 'undefined')){
} else {
oops.messages.runtime_message = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"oops.messages","runtime-message"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function() { 
var G__27703__delegate = function (type,_){
return type;
};
var G__27703 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__27704__i = 0, G__27704__a = new Array(arguments.length -  1);
while (G__27704__i < G__27704__a.length) {G__27704__a[G__27704__i] = arguments[G__27704__i + 1]; ++G__27704__i;}
  _ = new cljs.core.IndexedSeq(G__27704__a,0,null);
} 
return G__27703__delegate.call(this,type,_);};
G__27703.cljs$lang$maxFixedArity = 1;
G__27703.cljs$lang$applyTo = (function (arglist__27705){
var type = cljs.core.first(arglist__27705);
var _ = cljs.core.rest(arglist__27705);
return G__27703__delegate(type,_);
});
G__27703.cljs$core$IFn$_invoke$arity$variadic = G__27703__delegate;
return G__27703;
})()
;})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),(function (_type,info){
var map__27706 = info;
var map__27706__$1 = (((((!((map__27706 == null))))?(((((map__27706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27706):map__27706);
var flavor = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"flavor","flavor",-1331636636));
var path = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",((cljs.core.empty_QMARK_.call(null,path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),(function (_type,info){
var map__27708 = info;
var map__27708__$1 = (((((!((map__27708 == null))))?(((((map__27708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);
var soft_QMARK_ = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"soft?","soft?",-1339668477));
var path = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var fn = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return oops.messages.post_process_message.call(null,["Expected a function",(cljs.core.truth_(soft_QMARK_)?" or nil":null),((cljs.core.empty_QMARK_.call(null,path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),(function (_type,info){
var map__27710 = info;
var map__27710__$1 = (((((!((map__27710 == null))))?(((((map__27710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27710):map__27710);
var key = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),(function (_type,info){
var map__27712 = info;
var map__27712__$1 = (((((!((map__27712 == null))))?(((((map__27712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27712):map__27712);
var key = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var frozen_QMARK_ = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"frozen?","frozen?",613726824));
return oops.messages.post_process_message.call(null,["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')),(cljs.core.truth_(frozen_QMARK_)?" because the object is frozen":null)].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),(function (_type,info){
var map__27714 = info;
var map__27714__$1 = (((((!((map__27714 == null))))?(((((map__27714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27714):map__27714);
var key = cljs.core.get.call(null,map__27714__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__27714__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))," because the object is sealed"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),(function (_type,info){
var map__27716 = info;
var map__27716__$1 = (((((!((map__27716 == null))))?(((((map__27716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27716):map__27716);
var key = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))," because the object is frozen"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),(function (_type){
return oops.messages.post_process_message.call(null,"Invalid selector");
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),(function (_type){
return oops.messages.post_process_message.call(null,"Unexpected empty selector");
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),(function (_type){
return oops.messages.post_process_message.call(null,"Unexpected punching selector (\"!\" makes sense only with oset!)");
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),(function (_type){
return oops.messages.post_process_message.call(null,"Unexpected soft selector (\"?\" does not make sense with oset!)");
}));

//# sourceMappingURL=messages.js.map?rel=1600808340884
