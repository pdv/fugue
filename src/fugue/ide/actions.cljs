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

(defn eval-action [eval-state]
  (fn [state cb]
    (let [[source settings] ((juxt s/active-buffer-file eval-settings) state)
          on-result (fn [result]
                      (if (fn? (:value result))
                        (cb (:value result))
                        (cb on-eval result)))]
      (cljs.js/eval-str eval-state source nil settings on-result))))

(def number-jumps
  (into {} (map (fn [i] [[" " (str i)] (fn [_ cb] (cb s/activate i))]) (range 10))))

(defn kill-active-buffer [state cb]
  (cb s/kill-buffer (:active state)))

(defn split-right [state cb]
  (cb s/open-file (s/active-buffer-name state) :right))

(defn split-down [state cb]
  (cb s/open-file (s/active-buffer-name state) :below))

(defn open-minibuffer [_ cb]
  (cb s/open-minibuffer))

(defn go-back [_ cb]
  (cb s/go-back))

(defn default-keymap [eval-state]
  (merge number-jumps
         {[" " " "] open-minibuffer
          [" " "Tab"] go-back
          [" " "w" "x"] kill-active-buffer
          [" " "w" "/"] split-right
          [" " "w" "-"] split-down
          [" " "e" "b"] (eval-action eval-state)}))

(defn default-actions [eval-state]
  {"eval-active-buffer" (eval-action eval-state)
   "kill-active-buffer" kill-active-buffer})