// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.web');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('fugue.bootstrap');
goog.require('fugue.ide');
fugue.web.ide = (function fugue$web$ide(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.ide,fugue.bootstrap.eval_str], null);
});
fugue.web.app = (function fugue$web$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.web.ide], null);
});
fugue.web._main = (function fugue$web$_main(){
cljs.core.enable_console_print_BANG_.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.web.app], null),document.getElementById("app"));
});
fugue.web.on_js_reload = (function fugue$web$on_js_reload(){
return fugue.web._main.call(null);
});
fugue.web._main.call(null);

//# sourceMappingURL=web.js.map?rel=1610381661197
