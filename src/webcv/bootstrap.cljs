(ns webcv.bootstrap
  (:require [cljs.js]
            [webcv.audio]))

;; https://stackoverflow.com/questions/51573858/

(def compiler-state (cljs.js/empty-state))

(def init-forms
  ["(def out webcv.audio/out)"
   "(def sin-osc webcv.audio/sin-osc"
   "(def saw webcv.audio/saw)"
   "(def square webcv.audio/square)"
   "(def tri-osc webcv.audio/tri-osc)"
   "(def lpf webcv.audio/lpf)"
   "(def hpf webcv.audio/hpf)"
   "(def bpf webcv.audio/bpf)"
   "(def gain webcv.audio/gain)"
   "(def const webcv.audio/const)"])

(let [init (atom false)]
  (defn read-eval
    [s]
    (let [x (atom nil)
          call-eval (fn [text]
                      (cljs.js/eval-str compiler-state text nil
                                        {:eval cljs.js/js-eval}
                        (partial reset! x)))]
      (when-not @init
        (doseq [f init-forms] (call-eval f))
        (reset! init true))
      (when s (call-eval s))
      (deref x))))

