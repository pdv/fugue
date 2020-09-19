(ns webcv.nodedef
  (:require [clojure.spec.alpha :as s]))

(s/def ::aparam number?)
(s/def ::type keyword?)

(defmulti node-type ::type)
(s/def ::node (s/multi-spec node-type ::type))

(defmulti constructor ::type)


