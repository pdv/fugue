// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.file');
goog.require('cljs.core');
goog.require('goog.fs');
goog.require('oops.core');
fugue.ide.file.upload = (function fugue$ide$file$upload(cb){
var elem = document.createElement("input");
var target_obj_19091_19095 = elem;
var _STAR_runtime_state_STAR__orig_val__19093_19096 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19094_19097 = oops.state.prepare_state.call(null,target_obj_19091_19095,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19094_19097;

try{var parent_obj_19092_19098 = target_obj_19091_19095;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19092_19098,(0),"type",true,true,true)){
(parent_obj_19092_19098["type"] = "file");
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19093_19096;
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
var target_obj_19099_19107 = elem;
var _STAR_runtime_state_STAR__orig_val__19101_19108 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19102_19109 = oops.state.prepare_state.call(null,target_obj_19099_19107,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19102_19109;

try{var parent_obj_19100_19110 = target_obj_19099_19107;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19100_19110,(0),"href",true,true,true)){
(parent_obj_19100_19110["href"] = goog.fs.createObjectUrl(blob));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19101_19108;
}
var target_obj_19103_19111 = elem;
var _STAR_runtime_state_STAR__orig_val__19105_19112 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19106_19113 = oops.state.prepare_state.call(null,target_obj_19103_19111,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19106_19113;

try{var parent_obj_19104_19114 = target_obj_19103_19111;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19104_19114,(0),"download",true,true,true)){
(parent_obj_19104_19114["download"] = name);
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19105_19112;
}
elem.click();

return document.body.removeChild(elem);
});

//# sourceMappingURL=file.js.map?rel=1611089351273
