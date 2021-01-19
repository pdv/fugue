// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.file');
goog.require('cljs.core');
goog.require('goog.fs');
goog.require('oops.core');
fugue.ide.file.upload = (function fugue$ide$file$upload(cb){
var elem = document.createElement("input");
var target_obj_19074_19078 = elem;
var _STAR_runtime_state_STAR__orig_val__19076_19079 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19077_19080 = oops.state.prepare_state.call(null,target_obj_19074_19078,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19077_19080;

try{var parent_obj_19075_19081 = target_obj_19074_19078;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19075_19081,(0),"type",true,true,true)){
(parent_obj_19075_19081["type"] = "file");
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19076_19079;
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
var target_obj_19082_19090 = elem;
var _STAR_runtime_state_STAR__orig_val__19084_19091 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19085_19092 = oops.state.prepare_state.call(null,target_obj_19082_19090,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19085_19092;

try{var parent_obj_19083_19093 = target_obj_19082_19090;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19083_19093,(0),"href",true,true,true)){
(parent_obj_19083_19093["href"] = goog.fs.createObjectUrl(blob));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19084_19091;
}
var target_obj_19086_19094 = elem;
var _STAR_runtime_state_STAR__orig_val__19088_19095 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19089_19096 = oops.state.prepare_state.call(null,target_obj_19086_19094,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19089_19096;

try{var parent_obj_19087_19097 = target_obj_19086_19094;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_19087_19097,(0),"download",true,true,true)){
(parent_obj_19087_19097["download"] = name);
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19088_19095;
}
elem.click();

return document.body.removeChild(elem);
});

//# sourceMappingURL=file.js.map?rel=1611084585085
