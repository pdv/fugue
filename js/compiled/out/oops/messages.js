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
var G__24564__delegate = function (type,_){
return type;
};
var G__24564 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__24565__i = 0, G__24565__a = new Array(arguments.length -  1);
while (G__24565__i < G__24565__a.length) {G__24565__a[G__24565__i] = arguments[G__24565__i + 1]; ++G__24565__i;}
  _ = new cljs.core.IndexedSeq(G__24565__a,0,null);
} 
return G__24564__delegate.call(this,type,_);};
G__24564.cljs$lang$maxFixedArity = 1;
G__24564.cljs$lang$applyTo = (function (arglist__24566){
var type = cljs.core.first(arglist__24566);
var _ = cljs.core.rest(arglist__24566);
return G__24564__delegate(type,_);
});
G__24564.cljs$core$IFn$_invoke$arity$variadic = G__24564__delegate;
return G__24564;
})()
;})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),(function (_type,info){
var map__24567 = info;
var map__24567__$1 = (((((!((map__24567 == null))))?(((((map__24567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24567):map__24567);
var flavor = cljs.core.get.call(null,map__24567__$1,new cljs.core.Keyword(null,"flavor","flavor",-1331636636));
var path = cljs.core.get.call(null,map__24567__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",((cljs.core.empty_QMARK_.call(null,path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),(function (_type,info){
var map__24569 = info;
var map__24569__$1 = (((((!((map__24569 == null))))?(((((map__24569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24569):map__24569);
var soft_QMARK_ = cljs.core.get.call(null,map__24569__$1,new cljs.core.Keyword(null,"soft?","soft?",-1339668477));
var path = cljs.core.get.call(null,map__24569__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var fn = cljs.core.get.call(null,map__24569__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return oops.messages.post_process_message.call(null,["Expected a function",(cljs.core.truth_(soft_QMARK_)?" or nil":null),((cljs.core.empty_QMARK_.call(null,path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),(function (_type,info){
var map__24571 = info;
var map__24571__$1 = (((((!((map__24571 == null))))?(((((map__24571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24571):map__24571);
var key = cljs.core.get.call(null,map__24571__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__24571__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),(function (_type,info){
var map__24573 = info;
var map__24573__$1 = (((((!((map__24573 == null))))?(((((map__24573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24573):map__24573);
var key = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var frozen_QMARK_ = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"frozen?","frozen?",613726824));
return oops.messages.post_process_message.call(null,["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')),(cljs.core.truth_(frozen_QMARK_)?" because the object is frozen":null)].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),(function (_type,info){
var map__24575 = info;
var map__24575__$1 = (((((!((map__24575 == null))))?(((((map__24575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24575):map__24575);
var key = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))," because the object is sealed"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),(function (_type,info){
var map__24577 = info;
var map__24577__$1 = (((((!((map__24577 == null))))?(((((map__24577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24577):map__24577);
var key = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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

//# sourceMappingURL=messages.js.map?rel=1610422538344
