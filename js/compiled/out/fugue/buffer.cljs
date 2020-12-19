(ns fugue.buffer
  (:require [clojure.spec.alpha :as s]))

(s/def ::buffer-name string?)
(s/def ::audio-buffer #(== js/AudioBuffer (type %)))
(s/def ::buffer-cache (s/map-of ::buffer-name ::audio-buffer))


