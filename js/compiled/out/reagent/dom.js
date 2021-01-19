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
var _STAR_always_update_STAR__orig_val__3632 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__3633 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__3633;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__3632,_STAR_always_update_STAR__temp_val__3633){
return (function (){
var _STAR_always_update_STAR__orig_val__3634 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__3635 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__3635;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__3634;
}});})(_STAR_always_update_STAR__orig_val__3632,_STAR_always_update_STAR__temp_val__3633))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__3632;
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
var G__3637 = arguments.length;
switch (G__3637) {
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

var seq__3639_3643 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__3640_3644 = null;
var count__3641_3645 = (0);
var i__3642_3646 = (0);
while(true){
if((i__3642_3646 < count__3641_3645)){
var v_3647 = cljs.core._nth.call(null,chunk__3640_3644,i__3642_3646);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_3647);


var G__3648 = seq__3639_3643;
var G__3649 = chunk__3640_3644;
var G__3650 = count__3641_3645;
var G__3651 = (i__3642_3646 + (1));
seq__3639_3643 = G__3648;
chunk__3640_3644 = G__3649;
count__3641_3645 = G__3650;
i__3642_3646 = G__3651;
continue;
} else {
var temp__5720__auto___3652 = cljs.core.seq.call(null,seq__3639_3643);
if(temp__5720__auto___3652){
var seq__3639_3653__$1 = temp__5720__auto___3652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3639_3653__$1)){
var c__4550__auto___3654 = cljs.core.chunk_first.call(null,seq__3639_3653__$1);
var G__3655 = cljs.core.chunk_rest.call(null,seq__3639_3653__$1);
var G__3656 = c__4550__auto___3654;
var G__3657 = cljs.core.count.call(null,c__4550__auto___3654);
var G__3658 = (0);
seq__3639_3643 = G__3655;
chunk__3640_3644 = G__3656;
count__3641_3645 = G__3657;
i__3642_3646 = G__3658;
continue;
} else {
var v_3659 = cljs.core.first.call(null,seq__3639_3653__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_3659);


var G__3660 = cljs.core.next.call(null,seq__3639_3653__$1);
var G__3661 = null;
var G__3662 = (0);
var G__3663 = (0);
seq__3639_3643 = G__3660;
chunk__3640_3644 = G__3661;
count__3641_3645 = G__3662;
i__3642_3646 = G__3663;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1611075055606
