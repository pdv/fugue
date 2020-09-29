(defproject fugue "0.1.0-SNAPSHOT"
  :description "Control your modular from the web"
  :url "http://github.com/pdv/fugue"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.9.1"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/core.async  "0.4.500"]
                 [binaryage/oops "0.7.0"]
                 [aysylu/loom "1.0.2"]
                 [reagent "0.10.0"]]
  :plugins [[lein-figwheel "0.5.19"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]
  :source-paths ["src"]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:on-jsload "fugue.web/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}
                ;; lein cljsbuild once
                :compiler {:main fugue.web
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/fugue.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                           ;; https://github.com/binaryage/cljs-devtools
                           :preloads [devtools.preload]}}]}
  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"
             :css-dirs ["resources/public/css"] ;; watch and update CSS
             ;; Start an nREPL server into the running figwheel process
             :nrepl-port 7888}
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.10"]
                                  [figwheel-sidecar "0.5.19"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
