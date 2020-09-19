(ns webcv.bootstrap
  (:require [cljs.js]
            [webcv.io]
            [webcv.osc]
            [webcv.biquad-filter]))

;; https://stackoverflow.com/questions/51573858/

(def compiler-state (cljs.js/empty-state))

(def init-forms
  ["(def out webcv.io/out)"
   "(def sin-osc webcv.osc/sin-osc)"
   "(def saw webcv.osc/saw)"
   "(def square webcv.osc/square)"
   "(def tri webcv.osc/tri)"
   "(def lpf webcv.biquad-filter/lpf)"
   "(def hpf webcv.biquad-filter/hpf)"
   "(def bpf webcv.biquad-filter/bpf)"])

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

