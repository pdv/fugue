// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.cof');
goog.require('cljs.core');
fugue.cof.names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G",(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E",(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B",(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["F#",(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Db",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ab",(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Eb",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bb",(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["F",(5)], null)], null);
fugue.cof.cof = (function fugue$cof$cof(midi_notes){
var intervals = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__34620_SHARP_){
return cljs.core.mod.call(null,p1__34620_SHARP_,(12));
}),midi_notes));
cljs.core.print.call(null,intervals);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cof-container>div.cof>ul","div.cof-container>div.cof>ul",169103731),(function (){var iter__4523__auto__ = ((function (intervals){
return (function fugue$cof$cof_$_iter__34621(s__34622){
return (new cljs.core.LazySeq(null,((function (intervals){
return (function (){
var s__34622__$1 = s__34622;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34622__$1);
if(temp__5720__auto__){
var s__34622__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34622__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34622__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34624 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34623 = (0);
while(true){
if((i__34623 < size__4522__auto__)){
var vec__34625 = cljs.core._nth.call(null,c__4521__auto__,i__34623);
var name = cljs.core.nth.call(null,vec__34625,(0),null);
var interval = cljs.core.nth.call(null,vec__34625,(1),null);
cljs.core.chunk_append.call(null,b__34624,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>i","li>i",-450305548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,intervals,interval))?"active":"inactive")], null),name], null));

var G__34631 = (i__34623 + (1));
i__34623 = G__34631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34624),fugue$cof$cof_$_iter__34621.call(null,cljs.core.chunk_rest.call(null,s__34622__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34624),null);
}
} else {
var vec__34628 = cljs.core.first.call(null,s__34622__$2);
var name = cljs.core.nth.call(null,vec__34628,(0),null);
var interval = cljs.core.nth.call(null,vec__34628,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>i","li>i",-450305548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,intervals,interval))?"active":"inactive")], null),name], null),fugue$cof$cof_$_iter__34621.call(null,cljs.core.rest.call(null,s__34622__$2)));
}
} else {
return null;
}
break;
}
});})(intervals))
,null,null));
});})(intervals))
;
return iter__4523__auto__.call(null,fugue.cof.names);
})()], null);
});

//# sourceMappingURL=cof.js.map?rel=1610221077088
