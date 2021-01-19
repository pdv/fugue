(ns fugue.ide.actions
  (:require [cljs.js]
            [fugue.ide.state :as s]))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn on-eval [state result]
  (let [filename (gensym "result")]
    (-> state
        (s/write-file filename result)
        (s/open-file filename :after))))

(defn eval-action [state eval-state swap-cb]
  (let [[source settings] ((juxt s/active-window-file-contents eval-settings) state)
        on-result (fn [result]
                    (if (fn? (:value result))
                      (swap-cb (:value result))
                      (swap-cb on-eval result)))]
    (cljs.js/eval-str eval-state source nil settings on-result)))

(def number-jumps
  (into {} (map (fn [i] [[" " (str i)] (fn [_ cb] (cb s/activate i))]) (range 10))))

(defn split-right [state cb]
  (cb s/open-file (s/active-window-name state) :right))

(defn split-down [state cb]
  (cb s/open-file (s/active-window-name state) :below))

(defn go-back [_ cb]
  (cb s/go-back))