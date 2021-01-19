// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.layout');
goog.require('cljs.core');
goog.require('clojure.zip');
fugue.ide.layout.in_row_QMARK_ = (function fugue$ide$layout$in_row_QMARK_(loc){
return cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clojure.zip.path.call(null,loc)));
});
fugue.ide.layout.insert_node = (function fugue$ide$layout$insert_node(nodes,direction,node,new_node){
var loc = clojure.zip.seq_zip.call(null,nodes);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
if(cljs.core._EQ_.call(null,node,clojure.zip.node.call(null,loc))){
return clojure.zip.root.call(null,(function (){var G__3125 = direction;
var G__3125__$1 = (((G__3125 instanceof cljs.core.Keyword))?G__3125.fqn:null);
switch (G__3125__$1) {
case "after":
return clojure.zip.insert_right.call(null,loc,new_node);

break;
case "right":
if(fugue.ide.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.insert_right.call(null,loc,new_node);
} else {
return clojure.zip.edit.call(null,loc,((function (loc,G__3125,G__3125__$1){
return (function (p1__3121_SHARP_){
return (new cljs.core.List(null,p1__3121_SHARP_,(new cljs.core.List(null,new_node,null,(1),null)),(2),null));
});})(loc,G__3125,G__3125__$1))
);
}

break;
case "left":
if(fugue.ide.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.insert_left.call(null,loc,new_node);
} else {
return clojure.zip.edit.call(null,loc,((function (loc,G__3125,G__3125__$1){
return (function (p1__3122_SHARP_){
return (new cljs.core.List(null,new_node,(new cljs.core.List(null,p1__3122_SHARP_,null,(1),null)),(2),null));
});})(loc,G__3125,G__3125__$1))
);
}

break;
case "below":
if(fugue.ide.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.edit.call(null,loc,((function (loc,G__3125,G__3125__$1){
return (function (p1__3123_SHARP_){
return (new cljs.core.List(null,p1__3123_SHARP_,(new cljs.core.List(null,new_node,null,(1),null)),(2),null));
});})(loc,G__3125,G__3125__$1))
);
} else {
return clojure.zip.insert_right.call(null,loc,new_node);
}

break;
case "above":
if(fugue.ide.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.edit.call(null,loc,((function (loc,G__3125,G__3125__$1){
return (function (p1__3124_SHARP_){
return (new cljs.core.List(null,new_node,(new cljs.core.List(null,p1__3124_SHARP_,null,(1),null)),(2),null));
});})(loc,G__3125,G__3125__$1))
);
} else {
return clojure.zip.insert_left.call(null,loc,new_node);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3125__$1)].join('')));

}
})());
} else {
var G__3127 = clojure.zip.next.call(null,loc);
loc = G__3127;
continue;
}
}
break;
}
});
fugue.ide.layout.remove_node = (function fugue$ide$layout$remove_node(nodes,node){
var loc = clojure.zip.seq_zip.call(null,nodes);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
if(cljs.core._EQ_.call(null,node,clojure.zip.node.call(null,loc))){
return clojure.zip.root.call(null,clojure.zip.remove.call(null,loc));
} else {
var G__3128 = clojure.zip.next.call(null,loc);
loc = G__3128;
continue;
}
}
break;
}
});
fugue.ide.layout.map_values = (function fugue$ide$layout$map_values(f,nodes){
var loc = clojure.zip.seq_zip.call(null,nodes);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
var G__3129 = clojure.zip.next.call(null,(((!(cljs.core.seq_QMARK_.call(null,clojure.zip.node.call(null,loc)))))?clojure.zip.edit.call(null,loc,f):loc));
loc = G__3129;
continue;
}
break;
}
});
fugue.ide.layout.row_or_col = (function fugue$ide$layout$row_or_col(node,is_row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),(cljs.core.truth_(is_row)?"row":"column")], null)], null),((cljs.core.seq_QMARK_.call(null,node))?cljs.core.map.call(null,(function (p1__3130_SHARP_){
return fugue.ide.layout.row_or_col.call(null,p1__3130_SHARP_,cljs.core.not.call(null,is_row));
}),node):node)], null);
});
fugue.ide.layout.container = (function fugue$ide$layout$container(root){
return fugue.ide.layout.row_or_col.call(null,root,true);
});

//# sourceMappingURL=layout.js.map?rel=1611075293411
