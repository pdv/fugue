// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.demo.demo_loader');
goog.require('cljs.core');
fugue.demo.demo_loader.cof = "(ns fugue.demo.cof\r\n  (:require [live.api :refer [ratom int-slider]]))\r\n\r\n(def note-names [\"C\" \"Db\" \"D\" \"Eb\" \"E\" \"F\" \"F#\" \"G\" \"Ab\" \"A\" \"Bb\" \"B\"])\r\n\r\n(def interval-names\r\n  [\"unison\"\r\n   \"chromatic scale\"\r\n   \"whole tone scale\"\r\n   \"diminished chord\"\r\n   \"augmented chord\"\r\n   \"circle of fourths\"\r\n   \"tritone\"\r\n   \"circle of fifths\"\r\n   \"augmented chord\"\r\n   \"diminished chord\"\r\n   \"chromatic scale\"\r\n   \"octave\"])\r\n\r\n(def container-style\r\n  {:width \"400px\"\r\n   :height \"400px\"})\r\n\r\n(def ul-style\r\n  {:list-style \"none\"\r\n   :height \"38%\"\r\n   :width \"0\"\r\n   :position \"absolute\"\r\n   :bottom \"50%\"\r\n   :left \"50%\"})\r\n\r\n(def li-style\r\n  {:height \"100%\"\r\n   :position \"absolute\"\r\n   :top \"0\"\r\n   :left \"0\"\r\n   :transform-origin \"50% 100%\"})\r\n\r\n(def i-style\r\n  {:font-style \"normal\"\r\n   :position \"absolute\"\r\n   :top \"0\"\r\n   :left \"50%\"\r\n   :transform \"translateX(-50%)\"\r\n   :border-radius \"50%\"\r\n   :width \"32px\"\r\n   :height \"32px\"\r\n   :padding \"4px\"\r\n   :text-align \"center\"\r\n   :font-size \"28px\"\r\n   :border \"2px solid #666\"\r\n   :background \"#fff\"\r\n   :color \"#666\"})\r\n\r\n(defn outer-transform [angle]\r\n  (str \"rotate(\" angle \"deg)\"))\r\n\r\n(defn inner-transform [angle]\r\n  (str \"translateX(-50%) rotate(\" (* -1 angle) \"deg)\"))\r\n\r\n(defn circle [children]\r\n  (let [slice-angle (/ 360.0 (count children))]\r\n    [:div {:style container-style}\r\n     [:div {:style (assoc container-style :position \"absolute\")}\r\n      [:ul {:style ul-style}\r\n       (for [[i child] (map-indexed vector children)\r\n             :let [angle (* i slice-angle)]]\r\n         [:li\r\n          {:style (assoc li-style :transform (outer-transform angle))}\r\n          [:i\r\n           {:style (assoc i-style :transform (inner-transform angle))}\r\n           child]])]]]))\r\n\r\n(defn gcd [a b]\r\n  (if (zero? b) a (recur b (mod a b))))\r\n\r\n(defn lcm [a b]\r\n  (/ (* a b) (gcd a b)))\r\n\r\n(defn interval-circle []\r\n  (let [root (ratom 0)\r\n        interval (ratom 5)]\r\n    (fn []\r\n      [:div\r\n       [int-slider root 0 11]\r\n       [:p (str \"root: \" (get note-names @root))]\r\n       [int-slider interval 1 11]\r\n       [:p (str @interval \" semitones\")]\r\n       [:p (interval-names @interval)]\r\n       (let [step @interval\r\n             limit (lcm step 12)\r\n             notes (map #(get note-names (mod (+ @root %) 12))\r\n                        (range 0 limit step))]\r\n         [circle notes])])))\r\n\r\n[interval-circle]";
fugue.demo.demo_loader.cantor = "(ns fugue.demo.cantor\r\n  (:require [live.api :refer [ratom format slider picker]]))\r\n\r\n(defn note->hz [note]\r\n  (as-> note v\r\n        (- v 69.0)\r\n        (/ v 12)\r\n        (js/Math.pow 2.0 v)\r\n        (* v 440.0)))\r\n\r\n(defn hz->note [freq]\r\n  (as-> freq v\r\n        (/ v 440)\r\n        (.log2 js/Math v)\r\n        (* v 12)\r\n        (+ v 69)))\r\n\r\n(def note-names [\"C\" \"Db\" \"D\" \"Eb\" \"E\" \"F\" \"F#\" \"G\" \"Ab\" \"A\" \"Bb\" \"B\"])\r\n\r\n(defn rgb-string [r g b]\r\n  (str \"rgb(\" r \",\" g \",\" b \")\"))\r\n\r\n(defn range-to-rgb [min max value]\r\n  (let [ratio (/ (* 2 (- value min))\r\n                 (- max min))\r\n        b (int (.max js/Math 0 (* 255 (- 1 ratio))))\r\n        r (int (.max js/Math 0 (* 255 (- ratio 1))))\r\n        g (- 255 b r)]\r\n    [r g b]))\r\n\r\n(defn color-by-cents [value]\r\n  (let [diff (- value (.round js/Math value))\r\n        abs (* 255 5 (.abs js/Math diff))\r\n        [r g b] (cond\r\n                  (< diff 0) [0 255 abs]\r\n                  (= 0 diff) [0 255 0]\r\n                  (> diff 0) [abs 255 0])]\r\n    (rgb-string r g b)))\r\n\r\n(def note-colors\r\n  [\"#9e0142\" \"#d53e4f\" \"#f46d43\" \"#fdae61\" \"#fee08b\" \"#ffffbf\"\r\n   \"#e6f598\" \"#abdda4\" \"#66c2a5\" \"#3288bd\" \"#5e4fa2\" \"#6a3d9a\"])\r\n\r\n(defn color-by-note [value]\r\n  (let [tone (mod (.round js/Math value) 12)]\r\n    (first (drop tone note-colors))))\r\n\r\n(def color-fns\r\n  {\"none\"  (constantly \"#fff\")\r\n   \"cents\" color-by-cents\r\n   \"note\"  color-by-note})\r\n\r\n(defn cantor [root harmonics color-fn]\r\n  (let [root-hz (note->hz root)]\r\n    [:table\r\n     {:style {:border-collapse \"collapse\"}}\r\n     [:thead\r\n      (for [i (range harmonics)] [:th (if (not= 0 i) i)])\r\n      (for [denominator (range 1 harmonics)]\r\n        ^{:key denominator}\r\n        [:tr\r\n         [:th denominator]\r\n         (for [numerator (range 1 harmonics)\r\n               :let [freq (/ (* root-hz numerator) denominator)\r\n                     note (hz->note freq)\r\n                     closest (.round js/Math note)]]\r\n           ^{:key (str numerator \"/\" denominator)}\r\n           [:td\r\n            {:style {:backgroundColor (color-fn (- note root))\r\n                     :height \"60px\" :width \"60px\"\r\n                     :border \"1px solid black\"\r\n                     :text-align \"center\"}}\r\n            (str (nth note-names (mod closest 12)) (int (/ closest 12)))\r\n            [:br]\r\n            (format \"%.2f\" (- note root))\r\n            [:br]\r\n            (format \"%.2f\" freq)])])]]))\r\n\r\n(defn component []\r\n  (let [root (ratom 60)\r\n        harmonics (ratom 8)\r\n        colors (ratom \"none\")]\r\n    (fn []\r\n      [:div\r\n       \"Root\"\r\n       [slider root 0 120]\r\n       \"Harmonics\"\r\n       [slider harmonics 1 30]\r\n       \"Colors\"\r\n       [picker colors (keys color-fns)]\r\n       [cantor @root @harmonics (get color-fns @colors)]])))\r\n\r\n[component]\r\n";
fugue.demo.demo_loader.midi_monitor = "(ns fugue.demo.midi-monitor\r\n  (:require [live.api :refer [chan monitor-chan midi-input ratom note-on? note-off? monitor-chan]]))\r\n\r\n;;\r\n\r\n(def chord-names\r\n  {:dim7 #{0 3 6 9}\r\n   :min #{0 3 7}\r\n   :min7 #{0 3 7 10}\r\n   :min9 #{0 2 3 7 10}\r\n   :7 #{0 4 7 10}\r\n   :7b9 #{0 1 4 7 10}\r\n   :Maj #{0 4 7}\r\n   :Maj7 #{0 4 7 11}\r\n   :Maj9 #{0 2 4 7 11}\r\n   :Aug #{0 4 8}\r\n   :Maj6 #{0 4 7 9}})\r\n\r\n(def note-names [:C :Db :D :Eb :E :F :F# :G :Ab :A :Bb :B])\r\n\r\n(defn chords-from [predicate root notes]\r\n  (let [relative-notes (map #(mod (- % root) 12) notes)]\r\n    (->> chord-names\r\n         (filter (fn [[_ chord]] (predicate chord relative-notes)))\r\n         (map (fn [[name _]] [(nth note-names (mod root 12)) name])))))\r\n\r\n(defn chords-where [predicate notes]\r\n  (into #{} (mapcat #(chords-from predicate % notes) notes)))\r\n\r\n(defn every-note-in-chord? [chord relative-notes]\r\n  (every? #(contains? chord %) relative-notes))\r\n\r\n(defn chord-contained-in-notes? [chord relative-notes]\r\n  (every? #(contains? (set relative-notes) %) chord))\r\n\r\n(defn component []\r\n  (let [midi-in-chan (chan)\r\n        held-notes (ratom #{})]\r\n    (monitor-chan midi-in-chan\r\n                  (fn [msg]\r\n                    (print msg)\r\n                    (cond\r\n                      (note-on? msg) (swap! held-notes conj (:note msg))\r\n                      (note-off? msg) (swap! held-notes disj (:note msg)))))\r\n    (fn []\r\n      [:div\r\n       [midi-input midi-in-chan]\r\n       [:p @held-notes]\r\n       (for [chord (chords-where every-note-in-chord? @held-notes)]\r\n         [:p (str chord)])])))\r\n\r\n[component]\r\n";
fugue.demo.demo_loader.api = "(ns live.api)\r\n\r\n(def ratom fugue.api/ratom)\r\n(def format fugue.api/format)\r\n(def slider fugue.api/slider)\r\n(def picker fugue.api/picker)\r\n\r\n(def chan fugue.api/chan)\r\n(def monitor-chan fugue.api/monitor-chan)\r\n(def midi-input fugue.api/midi-input)\r\n(def note-on? fugue.api/note-on?)\r\n(def note-off? fugue.api/note-off?)\r\n\r\n(def int-slider fugue.api/int-slider)";

//# sourceMappingURL=demo_loader.js.map?rel=1611084585036
