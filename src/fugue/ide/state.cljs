(ns fugue.ide.state
  (:require [fugue.ide.layout :as layout]))

(def init-state
  {::layout '(1)
   ::active 1
   ::prev nil
   ::windows {1 :default-text}
   ::popup false
   ::files {:default-text "(+ 1 2)"}})

(defn next-window-id [state]
  (first (filter #(not (contains? (::windows state) %)) (range 1 10))))

(defn in-popup? [state]
  (::popup state))

(defn open-popup [state]
  (assoc state ::popup true))

(defn close-popup [state]
  (assoc state ::popup false))

(defn activate [state id]
  (-> state
      (assoc ::prev (::active state))
      (assoc ::active (if (contains? (::windows state) id)
                        id
                        (::active state)))
      (close-popup)))

(defn go-back [state]
  (activate state (::prev state)))

(defn active-window-name [state]
  (get-in state [::windows (::active state)]))

(defn file-contents [state name]
  (get-in state [::files name]))

(defn active-window-file-contents [state]
  (file-contents state (active-window-name state)))

(defn open-file [state name direction]
  (let [id (next-window-id state)]
    (-> state
        (assoc-in [::windows id] name)
        (update ::layout layout/insert-node direction (::active state) id)
        (activate id))))

(defn write-file [state name value]
  (assoc-in state [::files name] value))

(defn kill-window [state id]
  (-> state
      (update ::layout layout/remove-node id)
      (update ::windows dissoc id)))

(defn kill-active-window [state]
  (-> state
      (kill-window (::active state))
      (activate (::prev state))))

(defn layout [state window-fn]
  [layout/container
   (layout/map-values
     (fn [id]
       (let [filename (get-in state [::windows id])
             value (get-in state [::files filename])
             active (and (= id (::active state))
                         (not (::popup state)))]
         (window-fn id value active)))
     (::layout state))])
