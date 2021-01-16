// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.boxes.layout');
goog.require('cljs.core');
goog.require('clojure.zip');
fugue.boxes.layout.in_row_QMARK_ = (function fugue$boxes$layout$in_row_QMARK_(loc){
return cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clojure.zip.path.call(null,loc)));
});
fugue.boxes.layout.insert = (function fugue$boxes$layout$insert(boxes,direction,box,new_box){
var loc = clojure.zip.seq_zip.call(null,boxes);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
if(cljs.core._EQ_.call(null,box,clojure.zip.node.call(null,loc))){
return clojure.zip.root.call(null,(function (){var G__17668 = direction;
var G__17668__$1 = (((G__17668 instanceof cljs.core.Keyword))?G__17668.fqn:null);
switch (G__17668__$1) {
case "after":
return clojure.zip.insert_right.call(null,loc,new_box);

break;
case "right":
if(fugue.boxes.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.insert_right.call(null,loc,new_box);
} else {
return clojure.zip.edit.call(null,loc,((function (loc,G__17668,G__17668__$1){
return (function (p1__17664_SHARP_){
return (new cljs.core.List(null,p1__17664_SHARP_,(new cljs.core.List(null,new_box,null,(1),null)),(2),null));
});})(loc,G__17668,G__17668__$1))
);
}

break;
case "left":
if(fugue.boxes.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.insert_left.call(null,loc,new_box);
} else {
return clojure.zip.edit.call(null,loc,((function (loc,G__17668,G__17668__$1){
return (function (p1__17665_SHARP_){
return (new cljs.core.List(null,new_box,(new cljs.core.List(null,p1__17665_SHARP_,null,(1),null)),(2),null));
});})(loc,G__17668,G__17668__$1))
);
}

break;
case "below":
if(fugue.boxes.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.edit.call(null,loc,((function (loc,G__17668,G__17668__$1){
return (function (p1__17666_SHARP_){
return (new cljs.core.List(null,p1__17666_SHARP_,(new cljs.core.List(null,new_box,null,(1),null)),(2),null));
});})(loc,G__17668,G__17668__$1))
);
} else {
return clojure.zip.insert_right.call(null,loc,new_box);
}

break;
case "above":
if(fugue.boxes.layout.in_row_QMARK_.call(null,loc)){
return clojure.zip.edit.call(null,loc,((function (loc,G__17668,G__17668__$1){
return (function (p1__17667_SHARP_){
return (new cljs.core.List(null,new_box,(new cljs.core.List(null,p1__17667_SHARP_,null,(1),null)),(2),null));
});})(loc,G__17668,G__17668__$1))
);
} else {
return clojure.zip.insert_left.call(null,loc,new_box);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17668__$1)].join('')));

}
})());
} else {
var G__17670 = clojure.zip.next.call(null,loc);
loc = G__17670;
continue;
}
}
break;
}
});
fugue.boxes.layout.remove = (function fugue$boxes$layout$remove(boxes,box){
var loc = clojure.zip.seq_zip.call(null,boxes);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
if(cljs.core._EQ_.call(null,box,clojure.zip.node.call(null,loc))){
return clojure.zip.root.call(null,clojure.zip.remove.call(null,loc));
} else {
var G__17671 = clojure.zip.next.call(null,loc);
loc = G__17671;
continue;
}
}
break;
}
});
fugue.boxes.layout.map_values = (function fugue$boxes$layout$map_values(f,boxes){
var loc = clojure.zip.seq_zip.call(null,boxes);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
var G__17672 = clojure.zip.next.call(null,(((!(cljs.core.seq_QMARK_.call(null,clojure.zip.node.call(null,loc)))))?clojure.zip.edit.call(null,loc,f):loc));
loc = G__17672;
continue;
}
break;
}
});
fugue.boxes.layout.row_or_col = (function fugue$boxes$layout$row_or_col(box,is_row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),(cljs.core.truth_(is_row)?"row":"column")], null)], null),((cljs.core.seq_QMARK_.call(null,box))?cljs.core.map.call(null,(function (p1__17673_SHARP_){
return fugue.boxes.layout.row_or_col.call(null,p1__17673_SHARP_,cljs.core.not.call(null,is_row));
}),box):box)], null);
});
fugue.boxes.layout.boxes_container = (function fugue$boxes$layout$boxes_container(boxes){
return fugue.boxes.layout.row_or_col.call(null,boxes,true);
});

//# sourceMappingURL=layout.js.map?rel=1610837653946
