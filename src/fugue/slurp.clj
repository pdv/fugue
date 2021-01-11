(ns fugue.slurp)

(defmacro inline-resource [resource-path]
  (slurp resource-path))
