(ns webcv.bootstrap
  (:require [clojure.string :as string]))

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
   (str "(require '[webcv.midi :refer [midi-in hz gate ctrl]])")
   (str "(require '[webcv.feedback :refer [dub-delay]])")
   (str "(require '[webcv.keyboard :refer [kb]])")
   (str "(require '[webcv.envelope :refer [adsr perc env-gen]])")])

