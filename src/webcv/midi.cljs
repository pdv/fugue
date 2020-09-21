(ns webcv.midi
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [oops.core :refer [oset!+]]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]))

(defmulti midi-node-spec ::midi-node-type)
(defmethod synthdef/node-spec ::midi-node [_]
  (s/multi-spec midi-node-spec ::midi-node-type))
(defmethod midi-node-spec ::input [_]
  (s/keys :req [::input-name]))
(defmethod midi-node-spec ::effect [_]
  (s/keys :req [::xforms]))

(defmulti make-midi-node (fn [_ nodedef] (::midi-node-type nodedef)))
(defmethod synthdef/make-node ::midi-node [ctx nodedef]
  (make-midi-node ctx nodedef))

(defmulti make-xform ::xform-name)

(defmethod make-midi-node ::input
  [{::keys [ins]} {::keys [input-name]}]
  (let [midi-chan (get ins input-name)
        out-chan (async/chan 1)]
    (async/tap midi-chan out-chan)
    {::out-mult (async/mult out-chan)}))

(defmethod make-midi-node ::effect
  [_ {::keys [xforms]}]
  (let [xform (apply comp (map make-xform xforms))
        in-chan (async/chan 1 xform)]
    {::in-chan in-chan ::out-mult (async/mult in-chan)}))

(defmethod synthdef/make-edge [::midi-node ::midi-node]
  [_ src dest _]
  (async/tap (::out-mult src) (::in-chan dest)))

(defmethod synthdef/make-edge [::midi-node ::audio/audio-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (let [c (async/chan 1)]
    (async/go-loop []
      (let [msg (async/<! c)]
        (oset!+ dest (str param-name ".value") msg)
        (recur)))
    (async/tap (::out-mult src) c)))

;;

(defn midi-x-note
  "Returns a stateful transducer that maps midi events to midi notes based on
  priority-fn, which selects from a list of notes currently down."
  [priority-fn]
  (fn [rf]
    (let [v-down (volatile! [])]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result midi]
         (let [{:keys [type note velocity]} midi
               note-on (> velocity 0)
               op (if note-on conj #(remove #{%2} %1))
               down (op @v-down note)]
           (vreset! v-down (into [] down))
           (if-let [output (priority-fn down)]
             (rf result output)
             result)))))))

(defn note->hz [note]
  (* 439.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

(def midi-x-hz
  (comp
    (midi-x-note last)
    (map note->hz)))

(defn midi-x-velo
  "Returns a stateful transducer that maps midi events to midi velocities,
  retriggering if retrigger is truthful"
  [retrigger]
  (fn [rf]
    (let [v-down-count (volatile! 0)]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result midi]
         (let [{:keys [type velocity]} midi
               note-on (and (= :note type) (> 0 velocity))
               prev-down-count @v-down-count]
           (vswap! v-down-count (if note-on inc dec))
           (if (or (and note-on retrigger (> 1 prev-down-count))
                   (and note-on (= 0 prev-down-count))
                   (and (not note-on) (= 1 prev-down-count)))
             (rf result velocity)
             result)))))))

(def midi-x-gate
  "Naive monophonic algorithm, outputs [0, 1)"
  (comp
    (midi-x-velo true)
    (map #(/ % 128))))

(defmethod make-xform ::midi-x-hz [_] midi-x-hz)

;;

(def msg-type
  {144 :note
   128 :note
   224 :bend
   176 :ctrl})

(defn event->msg
  "Converts a js MIDIMessageEvent into a midi message"
  [e]
  (let [js-arr (.from js/Array (.-data e))
        [status note velocity] (js->clj js-arr)]
    {:type (msg-type (bit-and status 0xf0))
     :note note
     :velocity velocity}))

(def event-x-msg
  (comp
    (filter #(= 3 (.-length (.-data %))))
    (map event->msg)))

(defn msg->event
  "This is probably wrong"
  [{:keys [type note velocity]}]
  (.from js/Array [type note velocity]))

(defn midi-in-chan
  "Returns a mult'd chan of midi messages from a js MIDIInput"
  [midi-in]
  (let [c (async/chan 1 event-x-msg)]
    (set! (.-onmidimessage midi-in)
          (partial async/put! c))
    (async/mult c)))

(defn midi-out-chan
  "Returns a chan that passes midi messages to a MIDIOutput"
  [midi-out]
  (let [c (async/chan 1 (map msg->event))]
    (async/go-loop []
      (let [msg (async/<! c)]
        (.send midi-out msg)
        (recur)))
    c))

(defn- maplike->seq
  "The Web MIDI Api uses 'maplike' for its MIDIInputMap and MIDIOutputMap"
  [m]
  (js->clj (.from js/Array (.values m))))

(defn- port-map
  "Maps port name to a channel that sends/receives on that port"
  [ports-maplike chan-fn]
  (into {} (map (juxt #(.-name %) chan-fn)
                (maplike->seq ports-maplike))))

(defn- ports [midi-access]
  {::ins (port-map (.-inputs midi-access) midi-in-chan)
   ::outs (port-map (.-outputs midi-access) midi-out-chan)})

(defn make-ctx [cb]
  (.then (.requestMIDIAccess js/navigator)
         (fn [midi-access]
           (cb (ports midi-access)))))

;;

(defn midi-in [name]
  (synthdef/synthdef
    {::synthdef/node-type ::midi-node
     ::midi-node-type ::input
     ::input-name name}
    {}))

(defn hz [in]
  (synthdef/synthdef
    {::synthdef/node-type ::midi-node
     ::midi-node-type ::effect
     ::xforms [{::xform-name ::midi-x-hz}]}
    {::input [in]}))


