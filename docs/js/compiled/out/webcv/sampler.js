// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.sampler');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('webcv.synthdef');
/**
 * Fetches and decodes the sample at url. Calls cb with an AudioBuffer
 */
webcv.sampler.load_sample = (function webcv$sampler$load_sample(actx,url,cb){
var request = (new XMLHttpRequest());
var onerror = ((function (request){
return (function (e){
return console.log(e.err);
});})(request))
;
var onload = ((function (request,onerror){
return (function (){
return actx.decodeAudioData(request.response,cb,onerror);
});})(request,onerror))
;
request.open("GET",url,true);

request.responseType = "arraybuffer";

request.onload = onload;

return request.send();
});

//# sourceMappingURL=sampler.js.map?rel=1601259685008
