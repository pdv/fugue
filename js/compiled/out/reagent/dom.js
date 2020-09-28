// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22978 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22979 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22979;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__22978,_STAR_always_update_STAR__temp_val__22979){
return (function (){
var _STAR_always_update_STAR__orig_val__22980 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22981 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22981;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22980;
}});})(_STAR_always_update_STAR__orig_val__22978,_STAR_always_update_STAR__temp_val__22979))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22978;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22983 = arguments.length;
switch (G__22983) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__22985_22989 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__22986_22990 = null;
var count__22987_22991 = (0);
var i__22988_22992 = (0);
while(true){
if((i__22988_22992 < count__22987_22991)){
var v_22993 = cljs.core._nth.call(null,chunk__22986_22990,i__22988_22992);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22993);


var G__22994 = seq__22985_22989;
var G__22995 = chunk__22986_22990;
var G__22996 = count__22987_22991;
var G__22997 = (i__22988_22992 + (1));
seq__22985_22989 = G__22994;
chunk__22986_22990 = G__22995;
count__22987_22991 = G__22996;
i__22988_22992 = G__22997;
continue;
} else {
var temp__5720__auto___22998 = cljs.core.seq.call(null,seq__22985_22989);
if(temp__5720__auto___22998){
var seq__22985_22999__$1 = temp__5720__auto___22998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22985_22999__$1)){
var c__4550__auto___23000 = cljs.core.chunk_first.call(null,seq__22985_22999__$1);
var G__23001 = cljs.core.chunk_rest.call(null,seq__22985_22999__$1);
var G__23002 = c__4550__auto___23000;
var G__23003 = cljs.core.count.call(null,c__4550__auto___23000);
var G__23004 = (0);
seq__22985_22989 = G__23001;
chunk__22986_22990 = G__23002;
count__22987_22991 = G__23003;
i__22988_22992 = G__23004;
continue;
} else {
var v_23005 = cljs.core.first.call(null,seq__22985_22999__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23005);


var G__23006 = cljs.core.next.call(null,seq__22985_22999__$1);
var G__23007 = null;
var G__23008 = (0);
var G__23009 = (0);
seq__22985_22989 = G__23006;
chunk__22986_22990 = G__23007;
count__22987_22991 = G__23008;
i__22988_22992 = G__23009;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1601321426934
