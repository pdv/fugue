(ns fugue.demo.demo-loader
  (:require-macros [fugue.slurp :refer [inline-resource]]))

(def cof (inline-resource "src/fugue/demo/cof.cljs"))
(def cantor (inline-resource "src/fugue/demo/cantor.cljs"))
(def midi-monitor (inline-resource "src/fugue/demo/midi_monitor.cljs"))

