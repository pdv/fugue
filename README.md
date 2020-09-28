# webcv

ClojureScript music programming environment

## Overview

Webcv is build on operators, which produce synthdefs. Rather than directly calling the Web MIDI and Web Audio APIs, these synthdefs are loom graph representations of an audio/midi setup.
```
(require '[webcv.audio :as a])
(a/sin-osc 440)
```
To build a synthdef, call `synthdef/make-synth` with a context (audio, midi, or both) and a synthdef.

#### IO

```
(out channel node)
(in channel)
```

#### Aduio

```
(out & ins)
(gain in & gains)
(mix & ins)
(const & offsets)
(sin-osc freq detune)
(saw freq detune)
(sqare freq detune)
(tri-osc freq detune)
(lpf in frequency q)
(bpf in frequency q)
(hpf in frequency q)
```

#### MIDI

```
(midi-in name)  ; Acquires a midi channel
(hz midi)       ; Produces a frequency channel from a midi channel
(gate midi)     ; Produces a gate channel from a midi channel
```

#### Envelopes

Envelopes are defined by an envdef and triggered by a gate channel.
```
(adsr a d s r)
(perc a d)
(env-gen env gate scale bias)
```

## Setup

   make dev 

starts a development server at [localhost:3449](http://localhost:3449/).

   make build 

to make a production build. github pages expects index.html in /docs, running

   make full-deploy

will do all the shenanigans for you.

## License

Copyright © 2020 pdv

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
