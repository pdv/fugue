(ns fugue.ide.state
  (:require [fugue.ide.layout :as layout]))

(def init-state
  {::layout '(1)
   ::active 1
   ::prev nil
   ::windows {1 :default-text}
   ::key-seq nil
   ::shortcuts {}
   ::actions {}
   ::minibuffer false
   ::files {:default-text "(+ 1 2)"}})

(defn next-window-id [state]
  (first (filter #(not (contains? (::windows state) %)) (range 1 10))))

(defn in-popup? [state]
  (::key-seq state))

(defn in-minibuffer? [state]
  (::minibuffer state))

(defn in-shortcuts? [state]
  (and (in-popup? state) (not (in-minibuffer? state))))

(defn open-popup [state]
  (assoc state ::key-seq []))

(defn close-popup [state]
  (-> state
      (assoc ::key-seq nil)
      (assoc ::minibuffer false)))

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

(defn popup-menu [state]
  (->> (get-in (::shortcuts state) (::key-seq state))
       (filter (comp string? first))
       (map #(vector (first %) (or (::group-name (second %))
                                   (clj->js (second %)))))))

(defn add-shortcut-group [state path name]
  (assoc-in state (cons ::shortcuts (conj path ::group-name)) name))

(defn add-shortcut [state path action-name]
  (assoc-in state (cons ::shortcuts path) action-name))

(defn add-action [state action-name action]
  (assoc-in state [::actions action-name] action))

(defn action-names [state]
  (map clj->js (keys (::actions state))))

(defn perform-action [state name & args]
  (apply (get-in state [::actions (keyword name)]) args))

(defn on-key [state key cb]
  (let [new-seq (conj (::key-seq state) key)
        shortcut (get-in (::shortcuts state) new-seq)]
    (cond
      ;; open popup
      (and (= [" "] new-seq) (not (in-popup? state)))
      (cb open-popup)
      ;; open minibuffer
      (and (= [" "] new-seq) (in-popup? state))
      (cb assoc ::minibuffer true)
      ;; another menu
      (map? shortcut)
      (cb update-in [::key-seq] conj key)
      ;; no action, close popup
      (nil? shortcut)
      (cb close-popup)
      ;; action with args
      (vector? shortcut)
      (apply perform-action state (first shortcut) (rest shortcut))
      :else ;; action without args
      (perform-action state shortcut))))

(defn layout [state window-fn]
  [layout/container
   (layout/map-values
     (fn [id]
       (let [filename (get-in state [::windows id])
             value (get-in state [::files filename])
             active (and (= id (::active state))
                         (not (in-popup? state)))]
         (window-fn id filename value active)))
     (::layout state))])

;;

(defn on-upload [state name file]
  (-> state
      (write-file name file)
      (open-file name :after)))