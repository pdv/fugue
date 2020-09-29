(ns fugue.metronome
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [oops.core :refer [oget]]
            [fugue.synthdef :as synthdef]
            [fugue.audio :as audio]
            [fugue.chan :as chan]))

(def bpm (partial / 60000))

(defmethod chan/chan-node-spec ::metronome [_]
  (s/keys :req [::period-ms]))

(defn now-ms [actx] (* 1000 (oget actx "currentTime")))

(defmethod chan/make-chan-node ::metronome
  [{::audio/keys [actx]} {::keys [period-ms]}]
  (let [out-chan (async/chan 1)]
    (async/go-loop [last-time nil i 0]
      (let [now (now-ms actx)
            target (+ (or last-time now) period-ms)
            delay (/ (- target now) 1000)]
        (async/put! out-chan {:value (mod i 2) :delay delay})
        (async/<! (async/timeout (* 0.7 period-ms)))
        (recur now (inc i))))
    {::chan/mult-out (async/mult out-chan)}))

(defn metro [period-ms]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::metronome
     ::period-ms period-ms}
    {}))


