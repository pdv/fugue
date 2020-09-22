(ns webcv.bootstrap
  (:require [clojure.string :as string]
            [cljs.js]
            [webcv.audio]))

;; https://stackoverflow.com/questions/51573858/

(def compiler-state (cljs.js/empty-state))

(def audio-ops
  ["out"
   "gain"
   "mix"
   "const"
   "sin-osc"
   "saw"
   "square"
   "tri-osc"
   "lfo"
   "lpf"
   "hpf"
   "bpf"])

(def init-forms
  [(str "(require '[webcv.audio :refer [" (string/join " " audio-ops) "]])")
   (str "(require '[webcv.midi :refer [midi-in hz gate]])")
   (str "(require '[webcv.feedback :refer [dub-delay]])")
   (str "(require '[webcv.envelope :refer [adsr perc env-gen]])")])

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

