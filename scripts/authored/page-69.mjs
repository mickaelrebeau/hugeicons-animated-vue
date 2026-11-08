/**
 * Page 69 — tick-04 → touch-interaction-04.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * Ticks write themselves (doubles write in turn). Clocks sweep their hands
 * differently per variant. Touch hands (one path each) take a different hand
 * gesture per number: tap, nudge, wag, hold, poke, thrust, hop, double tap,
 * pinch. Touch-interaction icons add a ripple arc that pulses after the touch.
 *
 * Identical-geometry pairs get different jobs: tick-double / -01,
 * ticket / -01, tiff / -01, time / -01, time-setting / -01, timer / -01,
 * tired / -01, toilet / -01, tornado / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  DIR,
  HOLD_E,
  HOLD_T,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flex,
  flip,
  hand,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  swing,
  tap,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
/** Clock hands sweeping a full turn around a pivot. */
const sweepHands = (pivot, c, o = {}) => swing(pivot, c, [0, 72, 252, 371, 360], { as: 'hands', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9, ...o })
const doubleTap = (c) => ({ as: 'hand', origin: c, transform: ['translateY(0px) scale(1)', 'translateY(1px) scale(0.94)', 'translateY(0px) scale(1)', 'translateY(1px) scale(0.94)', 'translateY(0px) scale(1)'], times: [0, 0.2, 0.4, 0.6, 0.85], ease: 'easeInOut', dur: 0.7 })
const pinch = (c) => ({ as: 'hand', origin: c, transform: ['scale(1)', 'scale(0.88)', 'scale(1.04)', 'scale(1)'], times: [0, 0.32, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.6 })
const fileStamp = () => [null, stamp([12, 19], { as: 'letters' })]
const fileSlide = () => [
  beat([12, 7.5]),
  { as: 'letters', origin: [12, 19], transform: ['translateX(0px)', 'translateX(-2px)', 'translateX(0.3px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
]

// ---------------------------------------------------------------------------

const specs = {
  // --- ticks ---------------------------------------------------------------------------------
  'tick-04': {
    verb: 'the tick badge pops',
    parts: [pop([12.1, 11.9], 1.14, { as: 'badge' })],
  },
  'tick-double': {
    verb: 'the two ticks write themselves one after the other',
    parts: [draw({ as: 'tick' }), draw({ as: 'tick', delay: 0.16 })],
  },
  'tick-double-01': {
    verb: 'the two ticks hop in turn',
    parts: [hop([10, 11.5], 1, { as: 'tick' }), hop([15, 11.5], 1, { as: 'tick', delay: 0.12 })],
  },
  'tick-double-02': {
    verb: 'the second tick slides up beside the first and both nod',
    parts: [beat([9.5, 12], { delay: 0.2 }), ride([14.5, 12], out(1, 0), { as: 'tick' })],
  },
  'tick-double-03': {
    verb: 'the two ticks stamp down one after the other',
    parts: [stamp([8.4, 12], { as: 'tick', delay: 0.14 }), stamp([14.5, 11.9], { as: 'tick' })],
  },
  'tick-double-04': {
    verb: 'the two ticks pop one after the other',
    parts: [pop([14.6, 11.9], 1.14, { as: 'tick', delay: 0.12 }), pop([8.5, 12], 1.14, { as: 'tick' })],
  },
  tick: {
    verb: 'the tick writes itself',
    parts: [draw({ as: 'tick' })],
  },

  // --- tickets, ties, files ---------------------------------------------------------------------------------
  ticket: {
    verb: 'the stub line tears and the ticket nods',
    parts: [beat(C, { delay: 0.2 }), { as: 'perf', pathLength: [1, 0.4, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  'ticket-01': {
    verb: 'the ticket stub swings off and back',
    parts: [wiggle([9, 12], C, 6, { as: 'ticket' }), null],
  },
  'ticket-02': {
    verb: 'the ticket tips on its corner and the slash rewrites',
    parts: [wiggle([4, 20], C, 6, { as: 'ticket' }), line(0.1, { as: 'slash' })],
  },
  'ticket-03': {
    verb: 'the ticket lines print in one after the other',
    parts: [beat(C, { delay: 0.3 }), draw({ as: 'line' }), draw({ as: 'line', delay: 0.12 })],
  },
  'ticket-star': {
    verb: 'the star spins on the ticket and the perforations blink',
    parts: [lap([14.5, 12], 72, { as: 'star', dur: 0.7 }), blink({ as: 'perf', opacity: [1, 0.15, 1, 1, 1], delay: 0.1 }), blink({ as: 'perf', opacity: [1, 0.15, 1, 1, 1], delay: 0.18 }), null],
  },
  tie: {
    verb: 'the tie swings from its knot',
    parts: [null, wiggle([12, 8], [12, 15], 8, { as: 'tie' })],
  },
  tiff: {
    verb: 'the TIFF letters stamp down under the page',
    parts: fileStamp(),
  },
  'tiff-01': {
    verb: 'the page nods while the TIFF letters slide in from the left',
    parts: fileSlide(),
  },
  'tiff-02': {
    verb: 'the TIFF label slides out of the page to the right and back',
    parts: [null, nudge([13.8, 16.5], 1.6, 0, { as: 'label' })],
  },
  tiktok: {
    verb: 'the note shakes to the beat inside the tile',
    parts: [null, { as: 'note', origin: [11.7, 12.4], transform: ['translate(0px, 0px) rotate(0deg)', 'translate(-0.6px, 0px) rotate(-6deg)', 'translate(0.6px, 0px) rotate(6deg)', 'translate(-0.3px, 0px) rotate(-3deg)', 'translate(0px, 0px) rotate(0deg)'], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut', dur: 0.66 }],
  },
  tiltify: {
    verb: 'the dot hops off the tilted mark',
    parts: [hop([18.3, 5.5], 1.4, { as: 'dot' }), wiggle([10.9, 21], [10.9, 11.9], -5, { as: 'mark' })],
  },

  // --- time ---------------------------------------------------------------------------------
  time: {
    verb: 'the clock hands sweep a full turn',
    parts: [null, sweepHands([12, 11], [12.8, 11])],
  },
  'time-01': {
    verb: 'the hands tick forward one step and the frame nods',
    parts: [beat(C, { delay: 0.26 }), swing([12, 11], [12.8, 11], [0, 30, 26, 30, 30], { as: 'hands', times: [0, 0.2, 0.32, 0.44, 1], ease: OUT, dur: 0.7 })],
  },
  'time-02': {
    verb: 'the hands sweep inside the ring and the ring pulses',
    parts: [wave(C, { as: 'ring', delay: 0.3 }), sweepHands([12, 11], [12.8, 11])],
  },
  'time-03': {
    verb: 'the scissor hands snap open and closed',
    parts: [null, { as: 'hands', origin: [12.5, 10.5], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1)', 'scaleX(0.4)', 'scaleX(1)'], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut', dur: 0.7 }],
  },
  'time-04': {
    verb: 'the hands spin back a full turn inside the ring',
    parts: [beat(C, { delay: 0.4 }), swing([12.5, 12], [12.8, 10.5], [0, -72, -252, -371, -360], { as: 'hands', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9 })],
  },
  'time-half-pass': {
    verb: 'the half arc fills around and the hand sweeps',
    parts: [blink({ as: 'dash', opacity: [1, 0.15, 1, 1, 1], delay: 0.3 }), line(0, { as: 'arc', dur: 0.66 }), sweepHands([12, 13.5], [12, 11])],
  },
  'time-management-circle': {
    verb: 'the clock hands sweep and the two hands under it lift',
    parts: [ride([4.5, 19.5], out(0, -0.6), { as: 'hand', delay: 0.3 }), ride([19.5, 19.5], out(0, -0.6), { as: 'hand', delay: 0.36 }), null, wiggle([12, 6.5], [12, 6.5], 20, { as: 'clock' })],
  },
  'time-management': {
    verb: 'the clock rocks above the platform and the blocks pop',
    parts: [pop([5, 19.5], 1.12, { as: 'block', delay: 0.3 }), pop([19, 19.5], 1.12, { as: 'block', delay: 0.36 }), null, hop([12, 6.5], 1.2, { as: 'clock' })],
  },
  'time-quarter-02': {
    verb: 'the quarter hand sweeps and the arrow pushes on',
    parts: [swing([12, 12], [14, 9], [0, 30, -8, 2, 0], { as: 'hand' }), null, nudge([18.5, 5.5], 0.8, 0.8, { as: 'arrow', delay: 0.1 })],
  },
  'time-quarter-pass': {
    verb: 'the quarter arc rewrites and the hand ticks',
    parts: [blink({ as: 'dash', opacity: [1, 0.15, 1, 1, 1], delay: 0.3 }), wiggle([12, 12], [13.3, 9.8], 20, { as: 'hand' }), line(0, { as: 'arc', dur: 0.6 })],
  },
  'time-quarter': {
    verb: 'the dashed quarter blinks and the hand sweeps',
    parts: [blink({ as: 'dash', opacity: [1, 0.15, 1, 0.15, 1] }), sweepHands([12, 12], [9.8, 13.3]), null],
  },
  'time-schedule': {
    verb: 'the hands tick and the calendar badge pops',
    parts: [wiggle([12, 12], [12.8, 10.8], 24, { as: 'hands' }), pop([18.8, 18.5], 1.14, { as: 'badge', delay: 0.14 }), null],
  },
  'time-setting': {
    verb: 'the gear rocks around the clock hands',
    parts: [sweepHands([12, 12], [13.4, 10.8], { delay: 0.1 }), wiggle(C, C, -20, { as: 'gear' })],
  },
  'time-setting-01': {
    verb: 'the gear turns an eighth while the hands hold',
    parts: [null, lap(C, 45, { as: 'gear', dur: 0.7 })],
  },
  'time-setting-02': {
    verb: 'the cog spins and the hands tick',
    parts: [lap([12.1, 12], 360, { as: 'cog', dur: 0.9 }), wiggle([12, 12], [13.4, 10.8], 24, { as: 'hands', delay: 0.2 })],
  },
  'time-setting-03': {
    verb: 'the gear rocks back and the hands sweep',
    parts: [wiggle(C, C, 16, { as: 'gear' }), sweepHands([12, 12], [13.4, 10.8])],
  },
  'time-zone': {
    verb: 'the globe meridian turns and the clock badge ticks',
    parts: [null, wiggle([18, 18], [18, 18], 30, { as: 'clock', delay: 0.1 }), line(0.1), line(0.18), { as: 'meridian', origin: [11, 11], transform: ['scaleX(1)', 'scaleX(-1)', 'scaleX(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.86 }],
  },

  // --- timelines, timers ---------------------------------------------------------------------------------
  'timeline-event': {
    verb: 'the event card hops above its dot, which pops',
    parts: [pop([12, 20], 1.2, { as: 'dot', delay: 0.2 }), hop([12, 8.5], 1, { as: 'card' }), hop([10.5, 6], 1, { as: 'card' }), hop(C, 1, { as: 'card' }), line(0.24, { as: 'rail' })],
  },
  'timeline-list': {
    verb: 'the dots pop down the rail and the entries slide in',
    parts: [pop([4, 8], 1.4, { as: 'dot' }), pop([4, 16], 1.4, { as: 'dot', delay: 0.16 }), null, ride([14, 8], out(1, 0), { as: 'entry', delay: 0.06 }), ride([15, 16], out(1, 0), { as: 'entry', delay: 0.22 })],
  },
  timeline: {
    verb: 'the clock pin hops above its dot and its hands tick',
    parts: [pop([12, 20], 1.2, { as: 'dot', delay: 0.2 }), hop([12, 8.5], 1, { as: 'pin' }), wiggle([12, 7.5], [12.8, 6.8], 30, { as: 'hands', delay: 0.1 }), line(0.24, { as: 'rail' })],
  },
  timer: {
    verb: 'the timer hand sweeps around',
    parts: [sweepHands([11, 11], [11.1, 10.6]), null],
  },
  'timer-01': {
    verb: 'the timer buzzes and the hand jumps',
    parts: [wiggle([11, 11], [11.1, 10.6], 20, { as: 'hand' }), shake([12, 11.9], { as: 'timer' })],
  },
  'timer-02': {
    verb: 'the stopwatch hand sweeps and the speed lines streak',
    parts: [ride([12.5, 2], out(0, 0.6), { as: 'button' }), null, ride([5.5, 19], out(-1, 0), { as: 'speed', delay: 0.1 }), ride([4.5, 16], out(-1, 0), { as: 'speed', delay: 0.16 }), swing([12.5, 13.5], [14.3, 11.8], [0, 72, 252, 371, 360], { as: 'hand', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9 })],
  },
  tips: {
    verb: 'the coin drops into the open hand',
    parts: [ride([16.5, 8], [[0, 0], [0, -1.4], [0, 0.6], [0, 0], [0, 0]], { as: 'coin', times: [0, 0.24, 0.5, 0.76, 1] }), blink({ as: 'spark', opacity: [1, 0.1, 1, 1, 1], delay: 0.24 }), ride([12.1, 17.5], out(0, -0.6), { as: 'hand', delay: 0.3 })],
  },
  tire: {
    verb: 'the tire rolls a turn',
    wrap: lap(C, 360, { as: 'tire', dur: 0.9 }),
    parts: [null, null, null, null, null, null],
  },

  // --- tired ---------------------------------------------------------------------------------
  tired: {
    verb: 'the face yawns, its mouth stretching open',
    parts: [null, null, { as: 'mouth', origin: [12, 15.3], transform: ['scale(1, 1)', 'scale(1.1, 1.4)', 'scale(1.1, 1.4)', 'scale(1, 1)'], times: HOLD_T, ease: HOLD_E, dur: 0.9 }],
  },
  'tired-01': {
    verb: 'the head droops forward and the eyelids sag',
    wrap: { as: 'head', origin: [12, 22], transform: ['rotate(0deg)', 'rotate(6deg)', 'rotate(6deg)', 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.9 },
    parts: [null, ride([12, 8.5], out(0, 0.6), { as: 'lids' }), null],
  },
  'tired-02': {
    verb: 'the heavy eyelids blink slowly and the mouth yawns',
    parts: [null, { as: 'lids', origin: [12, 9.5], opacity: [1, 0.3, 1, 1], times: [0, 0.4, 0.8, 1], ease: INOUT, dur: 0.9 }, pop([12, 15.3], 1.2, { as: 'mouth', delay: 0.14 })],
  },
  'tissue-paper': {
    verb: 'a tissue pulls up out of the roll and settles',
    parts: [lap([6, 9.5], 120, { as: 'roll', dur: 0.66 }), ride([14, 12], out(0.8, -0.6), { as: 'sheet' }), null],
  },
  'toggle-off': {
    verb: 'the knob slides toward on, then snaps back off',
    parts: [ride([8, 12], [[0, 0], [5, 0], [5, 0], [0, 0], [0, 0]], { as: 'knob', times: [0, 0.3, 0.55, 0.85, 1], ease: INOUT, dur: 0.8 }), null],
  },
  'toggle-on': {
    verb: 'the knob slides toward off, then snaps back on',
    parts: [ride([16, 12], [[0, 0], [-5, 0], [-5, 0], [0, 0], [0, 0]], { as: 'knob', times: [0, 0.3, 0.55, 0.85, 1], ease: INOUT, dur: 0.8 }), null],
  },

  // --- toilets, tokens, tongues ---------------------------------------------------------------------------------
  toilet: {
    verb: 'the lid lifts and the flush handle presses',
    parts: [ride([14.1, 14], out(0, -0.8), { as: 'seat' }), null, ride([8.5, 7], out(0, 0.6), { as: 'handle', delay: 0.1 }), null],
  },
  'toilet-01': {
    verb: 'the tank swirls with a flush',
    parts: [null, shake([6, 7.5], { as: 'tank' }), blink({ as: 'handle', opacity: [1, 0.15, 1, 1, 1] }), null],
  },
  'toilet-02': {
    verb: 'the seat lid tips up and closes',
    parts: [null, null, swing([12, 12], [12, 6.9], [0, -14, -14, 0, 0], { as: 'lid', times: [0, 0.3, 0.66, 1, 1], ease: [INOUT, 'linear', OUT, 'linear'], dur: 0.8 })],
  },
  'token-circle': {
    verb: 'the token mark spins inside the coin',
    parts: [lap(C, 360, { as: 'mark', dur: 0.9 }), null],
  },
  'token-square': {
    verb: 'the token mark flips inside the tile',
    parts: [null, flip(C, 1, { as: 'mark' })],
  },
  'tongue-01': {
    verb: 'the tongue pokes out and wiggles',
    parts: [null, null, { as: 'tongue', origin: [12, 18.5], transform: ['translateY(0px) rotate(0deg)', 'translateY(1px) rotate(-8deg)', 'translateY(1px) rotate(8deg)', 'translateY(0.5px) rotate(-4deg)', 'translateY(0px) rotate(0deg)'], times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut', dur: 0.8 }, null],
  },
  'tongue-wink-left': {
    verb: 'the face winks its left eye and the tongue wags',
    parts: [null, wiggle([10, 14], [10.9, 18.2], 8, { as: 'tongue', delay: 0.1 }), { as: 'wink', origin: [8.5, 8.4], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1)'], times: [0, 0.3, 0.6], ease: INOUT, dur: 0.66 }, null],
  },
  'tongue-wink-right': {
    verb: 'the face winks its right eye and the tongue wags',
    parts: [null, null, wiggle([14, 15], [16.4, 18.7], -8, { as: 'tongue', delay: 0.1 }), { as: 'wink', origin: [16, 8.4], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1)'], times: [0, 0.3, 0.6], ease: INOUT, dur: 0.66 }, null],
  },
  tongue: {
    verb: 'the tongue curls up and drops back',
    parts: [null, scaleFrom('Y', [12, 9], [12, 14.5], [1, 1.12, 0.94, 1], { as: 'tongue', times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT] })],
  },

  // --- tools ---------------------------------------------------------------------------------
  'tool-case': {
    verb: 'the case handles lift and the latch blinks',
    parts: [ride([16.3, 6.9], out(0, -0.8), { as: 'handle' }), beat([12, 16.1], { delay: 0.2 }), blink({ as: 'latch', opacity: [1, 0.15, 1, 1, 1], delay: 0.2 }), ride([9, 6.8], out(0, -0.8), { as: 'handle', delay: 0.06 })],
  },
  toolbox: {
    verb: 'the toolbox lid lifts on its handle and drops',
    parts: [null, ride([12, 10.5], out(0, -1), { as: 'lid' }), ride([16, 14], out(0, -0.4), { as: 'clasp' }), ride([8, 14], out(0, -0.4), { as: 'clasp' }), ride([12, 5], out(0, -1), { as: 'lid' })],
  },
  tools: {
    verb: 'the screwdriver pushes in and the wrench rocks',
    parts: [ride([15.5, 8.5], out(-0.8, 0.8), { as: 'driver' }), ride([18.8, 5.3], out(-0.8, 0.8), { as: 'driver' }), wiggle(C, C, -10, { as: 'wrench', delay: 0.08 }), ride([7.8, 16.2], out(-0.8, 0.8), { as: 'driver' })],
  },
  'tornado-01': {
    verb: 'the funnel bands sway one after another',
    parts: [ride([12, 7], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8 }), ride([12, 14], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8, delay: 0.08 }), ride([12, 19], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8, delay: 0.16 })],
  },
  'tornado-02': {
    verb: 'the funnel strokes whip side to side from the top down',
    parts: [ride([12.1, 7.2], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8 }), ride([12, 12.5], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8, delay: 0.06 }), ride([12.5, 21.8], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8, delay: 0.24 }), ride([11, 15.6], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8, delay: 0.12 }), ride([10.5, 18.7], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'band', ease: INOUT, dur: 0.8, delay: 0.18 })],
  },
  tornado: {
    verb: 'the funnel twists, its top swinging wide',
    parts: [wiggle([12, 21], [12, 7], 8, { as: 'funnel' }), wiggle([12, 21], [12, 14], 5, { as: 'funnel' }), wiggle([12, 21], [12, 19], 2, { as: 'funnel' })],
  },
  'torri-gate': {
    verb: 'the lintel rises and settles on the posts',
    parts: [null, ride([12, 10], out(0, -0.6), { as: 'beam', delay: 0.06 }), ride([12, 10], out(0, -0.6), { as: 'beam', delay: 0.06 }), ride([12, 5.5], out(0, -1), { as: 'roof' })],
  },
  torus: {
    verb: 'the torus flips over on its axis',
    parts: [{ as: 'ring', origin: C, transform: ['scaleY(1)', 'scaleY(-1)', 'scaleY(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.9 }, { as: 'hole', origin: [12, 11], transform: ['translateY(0px) scaleY(1)', 'translateY(2px) scaleY(-1)', 'translateY(0px) scaleY(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.9 }],
  },

  // --- touch ---------------------------------------------------------------------------------
  'touch-01': { verb: 'the finger taps down', parts: [tap([12.2, 12])] },
  'touch-02': { verb: 'the finger nudges up', parts: [hand.nudge([12.3, 12], DIR.up)] },
  'touch-03': { verb: 'the hand wags from the wrist', parts: [hand.wag([11.9, 12], DIR.up)] },
  'touch-04': { verb: 'the finger presses and holds', parts: [hand.hold(C, DIR.up)] },
  'touch-05': { verb: 'the finger pokes twice', parts: [hand.poke([11.9, 11.6], DIR.up)] },
  'touch-06': { verb: 'the hand winds back and thrusts up', parts: [hand.thrust([11.9, 12], DIR.up)] },
  'touch-07': { verb: 'the hand hops up and lands', parts: [hop([11.9, 12], 1.4, { as: 'hand' })] },
  'touch-08': { verb: 'the finger double-taps', parts: [doubleTap([12, 12.1])] },
  'touch-09': { verb: 'the hand pinches in and opens', parts: [pinch([12, 11.4])] },
  'touch-10': {
    verb: 'the finger taps and the ripple arc pulses',
    parts: [tap([12, 13.5]), wave([12, 8], { as: 'ripple', delay: 0.14 }), pop([12, 11.5], 1.3, { as: 'point', delay: 0.1 })],
  },
  'touch-interaction-01': {
    verb: 'the finger taps and the ripple arc pulses above it',
    parts: [wave([12, 5], { as: 'ripple', delay: 0.14 }), tap([12.7, 13.5])],
  },
  'touch-interaction-02': {
    verb: 'the finger nudges up into the ripple',
    parts: [hand.nudge([13.4, 13.5], DIR.up), wave([12, 5], { as: 'ripple', delay: 0.2 })],
  },
  'touch-interaction-03': {
    verb: 'the finger pokes and the ripple redraws',
    parts: [hand.poke([13.2, 13.5], DIR.up), retrace({ as: 'ripple', delay: 0.2, dur: 0.56 })],
  },
  'touch-interaction-04': {
    verb: 'the hand holds and the ripple blinks',
    parts: [hand.hold([13.4, 13.5], DIR.up), blink({ as: 'ripple', opacity: [1, 0.15, 1, 0.15, 1] })],
  },
}

export default settleSpecs(specs)
