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
var _STAR_always_update_STAR__orig_val__31159 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31160 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31160;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__31159,_STAR_always_update_STAR__temp_val__31160){
return (function (){
var _STAR_always_update_STAR__orig_val__31161 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31162 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31162;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31161;
}});})(_STAR_always_update_STAR__orig_val__31159,_STAR_always_update_STAR__temp_val__31160))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31159;
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
var G__31164 = arguments.length;
switch (G__31164) {
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

var seq__31166_31170 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__31167_31171 = null;
var count__31168_31172 = (0);
var i__31169_31173 = (0);
while(true){
if((i__31169_31173 < count__31168_31172)){
var v_31174 = cljs.core._nth.call(null,chunk__31167_31171,i__31169_31173);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_31174);


var G__31175 = seq__31166_31170;
var G__31176 = chunk__31167_31171;
var G__31177 = count__31168_31172;
var G__31178 = (i__31169_31173 + (1));
seq__31166_31170 = G__31175;
chunk__31167_31171 = G__31176;
count__31168_31172 = G__31177;
i__31169_31173 = G__31178;
continue;
} else {
var temp__5720__auto___31179 = cljs.core.seq.call(null,seq__31166_31170);
if(temp__5720__auto___31179){
var seq__31166_31180__$1 = temp__5720__auto___31179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31166_31180__$1)){
var c__4550__auto___31181 = cljs.core.chunk_first.call(null,seq__31166_31180__$1);
var G__31182 = cljs.core.chunk_rest.call(null,seq__31166_31180__$1);
var G__31183 = c__4550__auto___31181;
var G__31184 = cljs.core.count.call(null,c__4550__auto___31181);
var G__31185 = (0);
seq__31166_31170 = G__31182;
chunk__31167_31171 = G__31183;
count__31168_31172 = G__31184;
i__31169_31173 = G__31185;
continue;
} else {
var v_31186 = cljs.core.first.call(null,seq__31166_31180__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_31186);


var G__31187 = cljs.core.next.call(null,seq__31166_31180__$1);
var G__31188 = null;
var G__31189 = (0);
var G__31190 = (0);
seq__31166_31170 = G__31187;
chunk__31167_31171 = G__31188;
count__31168_31172 = G__31189;
i__31169_31173 = G__31190;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1610422543924
