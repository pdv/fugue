(ns fugue.ide.file
  (:require [goog.fs :as fs]
            [oops.core :refer [oset!]]))

(defn upload [cb]
  (let [elem (.createElement js/document "input")]
    (oset! elem "type" "file")
    (.addEventListener elem "change" (fn []
                                       (let [files (.-files elem)
                                             file (aget files (dec (.-length files)))
                                             name (.-name file)]
                                         (when file
                                           ;(.removeChild (.-body js/document) elem)
                                           (.then (.text file) (partial cb name))))))
    (.click elem)))

(defn download [name text]
  (let [elem (.createElement js/document "a")
        blob (js/Blob. (js/Array. text) {:type "text/plain"})]
    (oset! elem "href" (fs/createObjectUrl blob))
    (oset! elem "download" name)
    (.click elem)
    (.removeChild (.-body js/document) elem)))
