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
var _STAR_always_update_STAR__orig_val__29951 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29952 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29952;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__29951,_STAR_always_update_STAR__temp_val__29952){
return (function (){
var _STAR_always_update_STAR__orig_val__29953 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29954 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29954;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29953;
}});})(_STAR_always_update_STAR__orig_val__29951,_STAR_always_update_STAR__temp_val__29952))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29951;
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
var G__29956 = arguments.length;
switch (G__29956) {
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

var seq__29958_29962 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__29959_29963 = null;
var count__29960_29964 = (0);
var i__29961_29965 = (0);
while(true){
if((i__29961_29965 < count__29960_29964)){
var v_29966 = cljs.core._nth.call(null,chunk__29959_29963,i__29961_29965);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29966);


var G__29967 = seq__29958_29962;
var G__29968 = chunk__29959_29963;
var G__29969 = count__29960_29964;
var G__29970 = (i__29961_29965 + (1));
seq__29958_29962 = G__29967;
chunk__29959_29963 = G__29968;
count__29960_29964 = G__29969;
i__29961_29965 = G__29970;
continue;
} else {
var temp__5720__auto___29971 = cljs.core.seq.call(null,seq__29958_29962);
if(temp__5720__auto___29971){
var seq__29958_29972__$1 = temp__5720__auto___29971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29958_29972__$1)){
var c__4550__auto___29973 = cljs.core.chunk_first.call(null,seq__29958_29972__$1);
var G__29974 = cljs.core.chunk_rest.call(null,seq__29958_29972__$1);
var G__29975 = c__4550__auto___29973;
var G__29976 = cljs.core.count.call(null,c__4550__auto___29973);
var G__29977 = (0);
seq__29958_29962 = G__29974;
chunk__29959_29963 = G__29975;
count__29960_29964 = G__29976;
i__29961_29965 = G__29977;
continue;
} else {
var v_29978 = cljs.core.first.call(null,seq__29958_29972__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29978);


var G__29979 = cljs.core.next.call(null,seq__29958_29972__$1);
var G__29980 = null;
var G__29981 = (0);
var G__29982 = (0);
seq__29958_29962 = G__29979;
chunk__29959_29963 = G__29980;
count__29960_29964 = G__29981;
i__29961_29965 = G__29982;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1601260776415
