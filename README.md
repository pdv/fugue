# webcv

Cljs wrapper for Web Audio, focused on CV utilities for modular synthesis

## Overview

```
(require '[webcv.core :as cv])
(cv/out 5 (cv/sin-osc 440))
```

#### IO

```
(out channel node)
(in channel)
```

#### CV

```
(v volts)     ;; maps [-10, 10] to [-1, 1]
(const value) ;; holds value
```

#### Audio

```
(sin-osc freq)
```

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2020 pdv

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
