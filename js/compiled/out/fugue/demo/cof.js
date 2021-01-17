// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.demo.cof');
goog.require('cljs.core');
goog.require('live.api');
fugue.demo.cof.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"], null);
fugue.demo.cof.interval_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unison","chromatic scale","whole tone scale","diminished chord","augmented chord","circle of fourths","tritone","circle of fifths","augmented chord","diminished chord","chromatic scale","octave"], null);
fugue.demo.cof.container_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null);
fugue.demo.cof.ul_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"height","height",1025178622),"38%",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"50%",new cljs.core.Keyword(null,"left","left",-399115937),"50%"], null);
fugue.demo.cof.li_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"50% 100%"], null);
fugue.demo.cof.i_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["normal","translateX(-50%)","#666","center","28px","0","32px","#fff","4px","absolute","2px solid #666","50%","32px","50%"]);
fugue.demo.cof.outer_transform = (function fugue$demo$cof$outer_transform(angle){
return ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle),"deg)"].join('');
});
fugue.demo.cof.inner_transform = (function fugue$demo$cof$inner_transform(angle){
return ["translateX(-50%) rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((-1) * angle)),"deg)"].join('');
});
fugue.demo.cof.circle = (function fugue$demo$cof$circle(children){
var slice_angle = (360.0 / cljs.core.count.call(null,children));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),fugue.demo.cof.container_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,fugue.demo.cof.container_style,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),fugue.demo.cof.ul_style], null),(function (){var iter__4523__auto__ = ((function (slice_angle){
return (function fugue$demo$cof$circle_$_iter__19059(s__19060){
return (new cljs.core.LazySeq(null,((function (slice_angle){
return (function (){
var s__19060__$1 = s__19060;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19060__$1);
if(temp__5720__auto__){
var s__19060__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19060__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19060__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19062 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19061 = (0);
while(true){
if((i__19061 < size__4522__auto__)){
var vec__19063 = cljs.core._nth.call(null,c__4521__auto__,i__19061);
var i = cljs.core.nth.call(null,vec__19063,(0),null);
var child = cljs.core.nth.call(null,vec__19063,(1),null);
var angle = (i * slice_angle);
cljs.core.chunk_append.call(null,b__19062,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,fugue.demo.cof.li_style,new cljs.core.Keyword(null,"transform","transform",1381301764),fugue.demo.cof.outer_transform.call(null,angle))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,fugue.demo.cof.i_style,new cljs.core.Keyword(null,"transform","transform",1381301764),fugue.demo.cof.inner_transform.call(null,angle))], null),child], null)], null));

var G__19069 = (i__19061 + (1));
i__19061 = G__19069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19062),fugue$demo$cof$circle_$_iter__19059.call(null,cljs.core.chunk_rest.call(null,s__19060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19062),null);
}
} else {
var vec__19066 = cljs.core.first.call(null,s__19060__$2);
var i = cljs.core.nth.call(null,vec__19066,(0),null);
var child = cljs.core.nth.call(null,vec__19066,(1),null);
var angle = (i * slice_angle);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,fugue.demo.cof.li_style,new cljs.core.Keyword(null,"transform","transform",1381301764),fugue.demo.cof.outer_transform.call(null,angle))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,fugue.demo.cof.i_style,new cljs.core.Keyword(null,"transform","transform",1381301764),fugue.demo.cof.inner_transform.call(null,angle))], null),child], null)], null),fugue$demo$cof$circle_$_iter__19059.call(null,cljs.core.rest.call(null,s__19060__$2)));
}
} else {
return null;
}
break;
}
});})(slice_angle))
,null,null));
});})(slice_angle))
;
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,children));
})()], null)], null)], null);
});
fugue.demo.cof.gcd = (function fugue$demo$cof$gcd(a,b){
while(true){
if((b === (0))){
return a;
} else {
var G__19070 = b;
var G__19071 = cljs.core.mod.call(null,a,b);
a = G__19070;
b = G__19071;
continue;
}
break;
}
});
fugue.demo.cof.lcm = (function fugue$demo$cof$lcm(a,b){
return ((a * b) / fugue.demo.cof.gcd.call(null,a,b));
});
fugue.demo.cof.interval_circle = (function fugue$demo$cof$interval_circle(){
var root = live.api.ratom.call(null,(0));
var interval = live.api.ratom.call(null,(5));
return ((function (root,interval){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [live.api.int_slider,root,(0),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["root: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,fugue.demo.cof.note_names,cljs.core.deref.call(null,root)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [live.api.int_slider,interval,(1),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,interval))," semitones"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),fugue.demo.cof.interval_names.call(null,cljs.core.deref.call(null,interval))], null),(function (){var step = cljs.core.deref.call(null,interval);
var limit = fugue.demo.cof.lcm.call(null,step,(12));
var notes = cljs.core.map.call(null,((function (step,limit,root,interval){
return (function (p1__19072_SHARP_){
return cljs.core.get.call(null,fugue.demo.cof.note_names,cljs.core.mod.call(null,(cljs.core.deref.call(null,root) + p1__19072_SHARP_),(12)));
});})(step,limit,root,interval))
,cljs.core.range.call(null,(0),limit,step));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cof.circle,notes], null);
})()], null);
});
;})(root,interval))
});
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cof.interval_circle], null);

//# sourceMappingURL=cof.js.map?rel=1610846314230
