// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.file');
goog.require('cljs.core');
goog.require('goog.fs');
goog.require('oops.core');
fugue.ide.file.upload = (function fugue$ide$file$upload(cb){
var elem = document.createElement("input");
var target_obj_11954_11958 = elem;
var _STAR_runtime_state_STAR__orig_val__11956_11959 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__11957_11960 = oops.state.prepare_state.call(null,target_obj_11954_11958,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__11957_11960;

try{var parent_obj_11955_11961 = target_obj_11954_11958;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_11955_11961,(0),"type",true,true,true)){
(parent_obj_11955_11961["type"] = "file");
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__11956_11959;
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
var target_obj_11962_11970 = elem;
var _STAR_runtime_state_STAR__orig_val__11964_11971 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__11965_11972 = oops.state.prepare_state.call(null,target_obj_11962_11970,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__11965_11972;

try{var parent_obj_11963_11973 = target_obj_11962_11970;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_11963_11973,(0),"href",true,true,true)){
(parent_obj_11963_11973["href"] = goog.fs.createObjectUrl(blob));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__11964_11971;
}
var target_obj_11966_11974 = elem;
var _STAR_runtime_state_STAR__orig_val__11968_11975 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__11969_11976 = oops.state.prepare_state.call(null,target_obj_11966_11974,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__11969_11976;

try{var parent_obj_11967_11977 = target_obj_11966_11974;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_11967_11977,(0),"download",true,true,true)){
(parent_obj_11967_11977["download"] = name);
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__11968_11975;
}
elem.click();

return document.body.removeChild(elem);
});

//# sourceMappingURL=file.js.map?rel=1611075064608
