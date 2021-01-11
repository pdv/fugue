(ns fugue.demo.midi-monitor)

;;

(defn component []
  (let [midi-in-chan (async/chan)
        held-notes (ratom #{})]
    (monitor-held-notes midi-in-chan held-notes)
    (fn []
      [:div
       [midi-input midi-in-chan]
       [:p @held-notes]])))

[component]
