// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.file');
goog.require('cljs.core');
goog.require('goog.fs');
goog.require('oops.core');
fugue.ide.file.upload = (function fugue$ide$file$upload(cb){
var elem = document.createElement("input");
var target_obj_19093_19097 = elem;
var _STAR_runtime_state_STAR__orig_val__19095_19098 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19096_19099 = oops.state.prepare_state.call(null,target_obj_19093_19097,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19096_19099;

try{var parent_obj_19094_19100 = target_obj_19093_19097;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19094_19100,(0),"type",true,true,true)){
(parent_obj_19094_19100["type"] = "file");
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19095_19098;
}
elem.addEventListener("change",((function (elem){
return (function (){
var files = elem.files;
var file = (files[(files.length - (1))]);
var name = file.name;
if(cljs.core.truth_(file)){
return file.text().then(cljs.core.partial.call(null,cb,name));
} else {
return null;
}
});})(elem))
);

return elem.click();
});
fugue.ide.file.download = (function fugue$ide$file$download(name,text){
var elem = document.createElement("a");
var blob = (new Blob((new Array(text)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/plain"], null)));
var target_obj_19101_19109 = elem;
var _STAR_runtime_state_STAR__orig_val__19103_19110 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19104_19111 = oops.state.prepare_state.call(null,target_obj_19101_19109,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19104_19111;

try{var parent_obj_19102_19112 = target_obj_19101_19109;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19102_19112,(0),"href",true,true,true)){
(parent_obj_19102_19112["href"] = goog.fs.createObjectUrl(blob));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19103_19110;
}
var target_obj_19105_19113 = elem;
var _STAR_runtime_state_STAR__orig_val__19107_19114 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19108_19115 = oops.state.prepare_state.call(null,target_obj_19105_19113,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19108_19115;

try{var parent_obj_19106_19116 = target_obj_19105_19113;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19106_19116,(0),"download",true,true,true)){
(parent_obj_19106_19116["download"] = name);
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19107_19114;
}
elem.click();

return document.body.removeChild(elem);
});

//# sourceMappingURL=file.js.map?rel=1611101812693
