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

(defn default-keymap [eval-state]
  (merge number-jumps
         {[" " " "] (fn [s cb]
                      (cb s/open-minibuffer s))
          [" " "w" "x"] (fn [s cb]
                          (cb s/kill-buffer (:active s)))
          [" " "w" "/"] (fn [s cb]
                          (cb s/open-file (s/active-buffer-name s) :right))
          [" " "w" "-"] (fn [s cb]
                          (cb s/open-file (s/active-buffer-name s) :below))
          [" " "e" "b"] (eval-action eval-state)}))

