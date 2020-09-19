(ns webcv.biquad-filter
  (:require [clojure.spec.alpha :as s]
            [webcv.web-audio :as web-audio]
            [webcv.synthdef :refer [effect]]))

(s/def ::freq number?)
(s/def ::Q number?)
(s/def ::type #{::lowpass ::highpass ::bandpass})
(defmethod web-audio/node-spec ::biquad-filter [_]
  (s/keys :req [::type]))

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq -1))
  ([type in freq q]
   (effect in
           {::web-audio/node-type ::biquad-filter
            ::type type
            ::freq -2
            ::Q -1}
           {::freq freq
            ::Q q})))

(def lpf (partial biquad-filter ::lowpass))
(def hpf (partial biquad-filter ::highpass))
(def bpf (partial biquad-filter ::bandpass))