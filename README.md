# fugue

[Live demo](https://pdv.github.io/fugue)

fugue is...
- a tool for making music with a web browser
- a library and bootstrapped ClojureScript IDE for audio/midi applications
- [Overtone](https://github.com/overtone/overtone) on the web

...and lets you...
- quickly prototype musical programming experiments without installation or setup
- rapidly develop user interfaces with [Reagent](https://github.com/reagent-project/reagent), live in the browser
- control a modular synthesizer from the web (if you have a DC-coupled audio interface)
- get the most out of the Web Audio and Web MIDI APIs

...with some nifty features
- operators are just functions that return synthdefs, and can be composed (e.g. with `->`)
- parameters for operators can be other synthdefs, Watchables (like Reagent atoms), or just values
- synthdefs are just values, implemented with directed [loom](https://github.com/aysylu/loom) graphs
- synthdefs are constructed using a context (audio in/out or midi, which requires browser permission)
- discrete signals (like midi) are implemented with [core.async](https://github.com/clojure/core.async) channels
- midi effects, gates, envelopes, ramps, and other transformations are modeled with [transducers](https://clojure.org/reference/transducers)

#### Example

```clojure
(defn mary-had-a-little-synth [tempo decay cutoff]
  (let [m (metro tempo)
        freq-gate (hz (sequencer [64 62 60 62 64 64 64 64] m))
        freq-env (env-gen (slide 0.01) freq-gate)
        gain-gate (sequencer [1 1 1 1 1 1 1 0] m)
        gain-env (env-gen (perc 0.1 decay) gain-gate 0.5)]
    (-> (saw freq-env)
        (gain gain-env)
        (lpf cutoff 2)
        (panner 0)
        (out))))
        
(def tempo (reagent.core/atom 120))
(def decay (midi-ctrl "FaderFox" 33 0.3 0.8))
(def cutoff (lfo 400 200 0.2))

(make-synth (make-ctx) (mary-had-a-little-synth tempo decay cutoff))
```

## Operators

#### Audio

- These operators match the Web Audio API [AudioNodes](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode). 
- All arguments to these functions (except the ones called "in", which must be a synthdef) can be numbers, Watchables (like Reagent atoms), or other synthdefs

```
(out node channel)
(in channel)
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
(delay-node in time)
(panner in amt)
(compressor threshold knee ratio reduction attack release)
```

#### MIDI

- MIDI in/out requires a browser permission, and the context is loaded separately via `midi/make-context`
- These operators return synthdefs, which are built into core.async channels and transducers upon construction
- Transducers are a natural way to model MIDI effects, as they are potentially stateful transformers agnostic of their carriers

```
(midi-in name)           ; Acquires a midi channel
(ctrl midi note min max) ; Maps the control value at note to range [min, max)
(note midi)              ; Gets the "current" note as defined by a priority function (by default, `last`)
(hz midi)                ; Produces a frequency channel from a note channel
(gate midi)              ; Produces a gate channel from a midi channel
(kb)                     ; A midi channel controlled by the computer keyboard (a is C, w is C#, s is D, etc; z is octave down, x is octave up) 
```

#### Envelopes

- Envelopes control audio parameters over time.
- Envelopes are just synthdefs, and are defined by an envdef and triggered by a gate channel, sort of like how Overtone does it.
- envdefs like `adsr` are transducers that map their parameters (attack, decay, etc) to a function on a gate value that returns a sequence of stages
- `env-gen` is a transducer that takes these envdefs and, when it receives a new gate, uses the stages defined by the envdef to produce ramps that control the parameters
```
(adsr a d s r)
(perc a d)
(env-gen env gate scale bias)
```

#### Sampler

- AudioBuffers must be loaded ahead of time, and included in the context when building a synthdef
- Fugue provides tools for uploading and decoding files to AudioBuffers and caching them for playback.
- Samplers can be 1-shot (trigger) or gate
- Samples can be tuned using the detune parameter, which is in cents so it can be played like an instrument with a midi signal (offset from middle C, midi note 60)

```
(sampler buffer-name trigger detune)
```

The convolver node (used primarily for reverbs) also uses audio buffers, and can be passed an audio buffer name in the same way:

```
(convolver in buffer-name)
```

#### Metronome

- Metronomes are channels that fire repeatedly with a given interval
- Metronomes can be used as gate values, to fire an envelope or trigger a sequencer
- To get over the ["Tale of Two Clocks"](https://www.html5rocks.com/en/tutorials/audio/scheduling/) problem, metronomes deliberately fire early, but use the AudioContext's clock to determine how early they are and provide a delay in their payload. This delay is accounted for by envelopes, which will push back their ramps accordingly.

```
(bpm tempo) ; converts beats-per-minute to period
(metro period-ms)
```

## Bootstrapped Environment

- Uses `cljs.js/eval-str` to evaluate on changes
- If the last expression is a Hiccup vector, it is rendered
- The `fugue.api` is imported into the environment, and contains aliases for the various operators
- `fugue.ctx-ctrls` contains tooling for managing the AudioContext, which must be done manually.


## Dev Setup

Uses [Leiningen](https://leiningen.org/)

```
lein figwheel
```
starts a development server at [localhost:3449](http://localhost:3449/).

```
lein do clean, cljsbuild once
cd resources/public
python3 -m http.server 8000
``` 
to preview a build production at [localhost:8000](http://localhost:8000/).

GitHub Actions are set up to build to GitHub pages.


## See also

- [Klangmeister](https://github.com/ctford/klangmeister) - same concept, different execution
- [Overtone](https://github.com/overtone/overtone) - uses the powerful SuperCollider engine

## License

Copyright © 2020 pdv

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
