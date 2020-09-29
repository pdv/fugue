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
var _STAR_always_update_STAR__orig_val__31096 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31097 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31097;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__31096,_STAR_always_update_STAR__temp_val__31097){
return (function (){
var _STAR_always_update_STAR__orig_val__31098 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31099 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31099;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31098;
}});})(_STAR_always_update_STAR__orig_val__31096,_STAR_always_update_STAR__temp_val__31097))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31096;
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
var G__31101 = arguments.length;
switch (G__31101) {
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

var seq__31103_31107 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__31104_31108 = null;
var count__31105_31109 = (0);
var i__31106_31110 = (0);
while(true){
if((i__31106_31110 < count__31105_31109)){
var v_31111 = cljs.core._nth.call(null,chunk__31104_31108,i__31106_31110);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_31111);


var G__31112 = seq__31103_31107;
var G__31113 = chunk__31104_31108;
var G__31114 = count__31105_31109;
var G__31115 = (i__31106_31110 + (1));
seq__31103_31107 = G__31112;
chunk__31104_31108 = G__31113;
count__31105_31109 = G__31114;
i__31106_31110 = G__31115;
continue;
} else {
var temp__5720__auto___31116 = cljs.core.seq.call(null,seq__31103_31107);
if(temp__5720__auto___31116){
var seq__31103_31117__$1 = temp__5720__auto___31116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31103_31117__$1)){
var c__4550__auto___31118 = cljs.core.chunk_first.call(null,seq__31103_31117__$1);
var G__31119 = cljs.core.chunk_rest.call(null,seq__31103_31117__$1);
var G__31120 = c__4550__auto___31118;
var G__31121 = cljs.core.count.call(null,c__4550__auto___31118);
var G__31122 = (0);
seq__31103_31107 = G__31119;
chunk__31104_31108 = G__31120;
count__31105_31109 = G__31121;
i__31106_31110 = G__31122;
continue;
} else {
var v_31123 = cljs.core.first.call(null,seq__31103_31117__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_31123);


var G__31124 = cljs.core.next.call(null,seq__31103_31117__$1);
var G__31125 = null;
var G__31126 = (0);
var G__31127 = (0);
seq__31103_31107 = G__31124;
chunk__31104_31108 = G__31125;
count__31105_31109 = G__31126;
i__31106_31110 = G__31127;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1601408404583
