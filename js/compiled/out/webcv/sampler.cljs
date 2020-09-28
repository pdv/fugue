(ns webcv.sampler
  (:require [clojure.spec.alpha :as s]
            [webcv.synthdef :as synthdef]))

(defn load-sample
  "Fetches and decodes the sample at url. Calls cb with an AudioBuffer"
  [actx url cb]
  (let [request (js/XMLHttpRequest.)
        onerror (fn [e] (.log js/console (.-err e)))
        onload #(.decodeAudioData actx (.-response request) cb onerror)]
    (.open request "GET" url true)
    (set! (.-responseType request) "arraybuffer")
    (set! (.-onload request) onload)
    (.send request)))
