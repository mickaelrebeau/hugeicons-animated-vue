/**
 * Page 61 — shrink-dot → snail.
 *
 * Gallery page (80 public icons). The hidden handcrafted sleeping,
 * sliders-horizontal and smile sit in this span and are skipped.
 *
 * Signal icons: bare names raise their bars in turn from the baseline; -01
 * (same geometry) pings the antenna and blinks the bars; -02 block bars rise
 * while the empty slots blink. "No signal" twists or redraws its X.
 * Sidebars slide their divider. Smart phones and watches keep the body and
 * let the screen detail act.
 *
 * Identical-geometry pairs get different jobs: signal-full / -01,
 * signal-low / -01, signal-medium / -01, signal-no / -01, simcard / -01,
 * sine / -01, sink / -01, smart-phone / -01, smart-watch / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  HOLD_E,
  HOLD_T,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  rise,
  scaleFrom,
  settleSpecs,
  shake,
  spinStar,
  sweep,
  swell,
  swing,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const tilt = (origin, deg, o = {}) => ({
  as: 'tilt',
  origin,
  transform: ['rotate(0deg)', `rotate(${deg}deg)`, `rotate(${-deg * 0.6}deg)`, `rotate(${deg * 0.25}deg)`, 'rotate(0deg)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: [INOUT, INOUT, INOUT, OUT],
  dur: 0.7,
  ...o,
})
const flash = (c, s = 1.22, o = {}) => ({ ...pop(c, s, { as: 'bolt', ...o }), opacity: [1, 0.3, 1, 1] })
const blinkOff = (delay = 0) => blink({ as: 'slot', opacity: [1, 0.15, 1, 1, 1], delay })

/** A signal bar (x, top) rising from the y=19 baseline. */
const bar = (x, top, delay = 0) => rise('Y', [x, 19], [x, (top + 19) / 2], { delay })
const mast = (x) => [rise('Y', [x, 19], [x, 14.5]), wave([x, 7.5], { as: 'antenna', delay: 0.04 })]
const ping = (x) => [null, { ...wave([x, 7.5], { as: 'antenna' }), transform: ['scale(1)', 'scale(1.3)', 'scale(0.95)', 'scale(1)'] }]
const barBlink = (delay = 0) => blink({ as: 'bar', opacity: [1, 0.2, 1, 1, 1], delay })
/** Block bars (-02): grow from the bottom. */
const block = (c, delay = 0) => rise('Y', [c[0], 19], c, { delay })
const eyes = (o = {}) => blink({ as: 'eyes', opacity: [1, 0, 1, 1, 1], dur: 0.6, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- shrink, shuffle, sidebars ---------------------------------------------------------------------------------
  'shrink-dot': {
    verb: 'the four corners pull in toward the dot, which pops',
    parts: [pop(C, 1.6, { as: 'dot', delay: 0.18 }), ride([6, 6], out(1.4, 1.4), { as: 'corner' }), ride([18, 6], out(-1.4, 1.4), { as: 'corner' }), ride([6, 18], out(1.4, -1.4), { as: 'corner' }), ride([18, 18], out(-1.4, -1.4), { as: 'corner' })],
  },
  'shuffle-square': {
    verb: 'the crossing arrows shuffle inside the tile',
    parts: [sweep({ as: 'arrows' }), beat(C, { delay: 0.4 })],
  },
  shuffle: {
    verb: 'the two crossing arrows sweep one after the other',
    parts: [sweep({ as: 'arrow' }), sweep({ as: 'arrow', delay: 0.12 })],
  },
  'shut-down': {
    verb: 'the power stem presses down and the ring rewrites',
    parts: [line(0.12, { as: 'ring', dur: 0.6 }), ride([12, 6.5], out(0, 1.6), { as: 'stem' })],
  },
  shutterstock: {
    verb: 'the two shutter brackets slide apart and back',
    parts: [beat(C, { delay: 0.34 }), flex('X', C, C, [1, 1.16, 0.96, 1, 1], { as: 'brackets' })],
  },
  'sidebar-bottom': {
    verb: 'the bottom panel divider slides up and the dots blink',
    parts: [null, ride([12, 14.5], out(0, -1.6), { as: 'divider' }), blink({ as: 'dots', opacity: [1, 0.1, 1, 1, 1], delay: 0.14 })],
  },
  'sidebar-left-01': {
    verb: 'the divider slides right and the chevron nudges open',
    parts: [null, ride([9.5, 12], out(1.4, 0), { as: 'divider' }), ride([5.8, 7], out(1.4, 0), { as: 'divider' }), ride([5.8, 11], out(1.4, 0), { as: 'divider' }), nudge([16, 12], 1.2, 0, { as: 'chevron', delay: 0.08 })],
  },
  'sidebar-left': {
    verb: 'the left panel divider slides out and back',
    parts: [null, ride([9.5, 12], out(1.6, 0), { as: 'divider' }), ride([5.5, 8.5], out(1.6, 0), { as: 'divider' })],
  },
  'sidebar-right-01': {
    verb: 'the divider slides left and the chevron nudges open',
    parts: [null, ride([14.5, 12], out(-1.4, 0), { as: 'divider' }), ride([18.3, 7], out(-1.4, 0), { as: 'divider' }), ride([18.3, 11], out(-1.4, 0), { as: 'divider' }), nudge([9, 12], -1.2, 0, { as: 'chevron', delay: 0.08 })],
  },
  'sidebar-right': {
    verb: 'the right panel divider slides out and back',
    parts: [null, ride([14.5, 12], out(-1.6, 0), { as: 'divider' }), ride([18.5, 8.5], out(-1.6, 0), { as: 'divider' })],
  },
  'sidebar-top': {
    verb: 'the top panel divider slides down and the dots blink',
    parts: [null, ride([12, 9.5], out(0, 1.6), { as: 'divider' }), blink({ as: 'dots', opacity: [1, 0.1, 1, 1, 1], delay: 0.14 })],
  },
  'sign-language-c': {
    verb: 'the hand curls into the C sign and opens',
    parts: [{ as: 'hand', origin: [12.1, 12], transform: ['scale(1) rotate(0deg)', 'scale(0.9) rotate(-8deg)', 'scale(1.03) rotate(2deg)', 'scale(1) rotate(0deg)'], times: [0, 0.32, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.66 }],
  },

  // --- signal ---------------------------------------------------------------------------------
  'signal-full': {
    verb: 'the bars rise one after another to full strength',
    parts: [...mast(5), bar(9, 14, 0.08), bar(13, 11, 0.16), bar(17, 10, 0.24), bar(21, 7, 0.32)],
  },
  'signal-full-01': {
    verb: 'the antenna pings and the bars blink across',
    parts: [...ping(5), barBlink(0.1), barBlink(0.18), barBlink(0.26), barBlink(0.34)],
  },
  'signal-full-02': {
    verb: 'the three block bars grow up in turn',
    parts: [block([5, 16.5]), block([12, 14.5], 0.1), block([19, 12.5], 0.2)],
  },
  'signal-low': {
    verb: 'the two bars rise and the empty slots blink',
    parts: [...mast(6), bar(10, 13, 0.08), blinkOff(0.2), blinkOff(0.28), blinkOff(0.36)],
  },
  'signal-low-01': {
    verb: 'the antenna pings and only the first bar answers',
    parts: [...ping(6), barBlink(0.12), null, null, null],
  },
  'signal-low-02': {
    verb: 'the single block bar grows and the empty slots blink',
    parts: [blinkOff(0.3), blinkOff(0.2), block([5, 16.5])],
  },
  'signal-low-medium': {
    verb: 'three bars rise and the two empty slots blink',
    parts: [...mast(5), bar(9, 13, 0.08), bar(13, 11, 0.16), blinkOff(0.28), blinkOff(0.36)],
  },
  'signal-medium': {
    verb: 'four bars rise in turn and the last slot blinks',
    parts: [...mast(5), bar(9, 13, 0.08), bar(13, 11, 0.16), bar(17, 10, 0.24), blinkOff(0.36)],
  },
  'signal-medium-01': {
    verb: 'the antenna pings and the bars blink, the empty slot staying dark',
    parts: [...ping(5), barBlink(0.1), barBlink(0.18), barBlink(0.26), null],
  },
  'signal-medium-02': {
    verb: 'two block bars grow and the empty slot blinks',
    parts: [blinkOff(0.3), block([5, 16.5]), block([12, 14.5], 0.1)],
  },
  'signal-no': {
    verb: 'the X twists beside the mast and the empty slots blink',
    parts: [null, null, lap([15.4, 12], 90, { as: 'x', dur: 0.6 }), blinkOff(0.2), blinkOff(0.1), blinkOff(0.3), blinkOff(0.4)],
  },
  'signal-no-01': {
    verb: 'the antenna pings and the X redraws',
    parts: [...ping(5), draw({ as: 'x', delay: 0.14 }), null, null, null, null],
  },
  'signal-no-02': {
    verb: 'the X rattles above the empty slots, which blink',
    parts: [blinkOff(0.3), blinkOff(0.2), blinkOff(0.1), shake([11.5, 9], { as: 'x' })],
  },
  signal: {
    verb: 'the inner ring pulses out to the outer one',
    parts: [wave([11.9, 12.1], { as: 'ring', delay: 0.14 }), wave(C, { as: 'ring' })],
  },
  signature: {
    verb: 'the signature writes itself above the line',
    parts: [draw({ as: 'signature', dur: 0.8 }), line(0.3, { as: 'baseline' })],
  },
  silence: {
    verb: 'the zipped mouth tightens and the eyes squeeze',
    parts: [null, flex('X', [12, 16], [12, 16], [1, 0.8, 1.04, 1, 1], { as: 'zip' }), flex('X', [12, 16], [12, 16], [1, 0.8, 1.04, 1, 1], { as: 'zip' }), { as: 'eyes', origin: [12, 8.8], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(0.4)', 'scaleY(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 }],
  },

  // --- sim cards ---------------------------------------------------------------------------------
  simcard: {
    verb: 'the chip contacts rewrite on the card',
    parts: [line(0, { as: 'chip', dur: 0.6 }), null],
  },
  'simcard-01': {
    verb: 'the card pushes into its slot and pops back out',
    parts: [ride([12, 16], out(0, -1.4), { as: 'card' }), ride(C, out(0, -1.4), { as: 'card' })],
  },
  'simcard-02': {
    verb: 'the chip pops on the card',
    parts: [beat(C, { delay: 0.3 }), pop([12, 14.5], 1.16, { as: 'chip' })],
  },
  'simcard-dual': {
    verb: 'the back card slides out from behind the front one',
    parts: [null, ride([16, 9], out(1, -1), { as: 'back' })],
  },

  // --- math ---------------------------------------------------------------------------------
  sin: {
    verb: 'the s, i and n letters hop in turn',
    parts: [hop(C, 1.1, { as: 'letter', delay: 0.08 }), hop([19.5, 12], 1.1, { as: 'letter', delay: 0.16 }), hop([4.5, 12], 1.1, { as: 'letter' })],
  },
  sine: {
    verb: 'the wave sweeps along the axis',
    parts: [sweep({ as: 'wave' }), null, null, null, null, null],
  },
  'sine-01': {
    verb: 'the wave amplitude swells and the end labels hop',
    parts: [flex('Y', C, C, [1, 1.18, 0.9, 1, 1], { as: 'wave' }), null, null, null, hop([19.5, 4.5], 1, { as: 'label', delay: 0.1 }), hop([5.5, 19.5], 1, { as: 'label', delay: 0.18 })],
  },
  'sine-02': {
    verb: 'the wave rewrites through the dashed axis, which blinks',
    parts: [line(0, { as: 'wave', dur: 0.7 }), blinkOff(0.1), blinkOff(0.18), blinkOff(0.26), blinkOff(0.34)],
  },
  'sing-left': {
    verb: 'the mouth opens and closes on the left as if singing',
    parts: [null, { as: 'mouth', origin: [10, 16], transform: ['scale(1)', 'scale(1.3)', 'scale(0.8)', 'scale(1.25)', 'scale(1)'], times: [0, 0.2, 0.42, 0.64, 1], ease: 'easeInOut', dur: 0.8 }, null],
  },
  'sing-right': {
    verb: 'the face sways to the tune and the mouth opens',
    wrap: tilt([12, 22], 5, { dur: 0.86 }),
    parts: [null, pop([14, 16], 1.3, { as: 'mouth', delay: 0.1 }), null],
  },

  // --- sinks ---------------------------------------------------------------------------------
  sink: {
    verb: 'water drips from the faucet into the basin',
    parts: [beat([12, 10.5], { delay: 0.4 }), null, null, null, null],
    extras: [{ as: 'drop', tag: 'path', attrs: { d: 'M16 7.5V8.5', strokeWidth: '1.4' }, transform: ['translateY(0px)', 'translateY(0px)', 'translateY(2.5px)', 'translateY(3.5px)'], opacity: [0, 1, 1, 0], times: [0, 0.14, 0.4, 0.5], ease: ['linear', 'easeIn', 'linear'], dur: 0.8 }],
  },
  'sink-01': {
    verb: 'the faucet handle twists and the spout bobs',
    parts: [null, wiggle([13, 7], [14.5, 4.5], 10, { as: 'spout' }), wiggle([9, 7], [9, 5.5], -18, { as: 'handle' }), null, null],
  },
  'sink-02': {
    verb: 'the tap turns on and the bowl nods',
    parts: [beat([12, 13], { delay: 0.3 }), null, wiggle([8, 9], [8, 7.5], -20, { as: 'handle' }), blink({ as: 'water', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.14 }), null],
  },
  'siri-new': {
    verb: 'the voice wave ripples across the ring',
    parts: [flex('Y', C, C, [1, 1.3, 0.75, 1, 1], { as: 'wave' }), beat(C, { delay: 0.3 })],
  },
  siri: {
    verb: 'the waveform strands ripple one after another',
    parts: [null, flex('Y', [11, 7.2], [11, 7.2], [1, 1.4, 0.8, 1, 1], { as: 'strand' }), flex('Y', [10, 8.5], [10, 8.5], [1, 1.3, 0.85, 1, 1], { as: 'strand', delay: 0.06 }), flex('Y', [10, 16.6], [10, 16.6], [1, 1.3, 0.85, 1, 1], { as: 'strand', delay: 0.12 }), flex('Y', [12.5, 14], [12.5, 14], [1, 1.4, 0.8, 1, 1], { as: 'strand', delay: 0.18 })],
  },
  'six-circle': {
    verb: 'the six hops inside the ring',
    parts: [hop([12, 14.5], 1.3, { as: 'six' }), hop([12, 10.8], 1.3, { as: 'six' }), beat(C, { delay: 0.3 })],
  },
  'six-square': {
    verb: 'the six rewrites inside the tile',
    parts: [null, line(0.1, { as: 'six', dur: 0.6 }), line(0, { as: 'six', dur: 0.6 })],
  },
  sketch: {
    verb: 'the gem sparkles: its facets turn and the outline rewrites',
    parts: [pop([12, 12], 1.1, { as: 'gem', delay: 0.1 }), line(0, { as: 'facet' }), line(0.12, { as: 'facet' })],
  },
  skew: {
    verb: 'the four corner handles drag the shape into a skew and back',
    parts: [ride([9, 4], out(1.4, 0), { as: 'handle' }), ride([19, 7], out(1.4, 0), { as: 'handle' }), ride([20, 20], out(-1.4, 0), { as: 'handle' }), ride([4, 18], out(-1.4, 0), { as: 'handle' }), { as: 'shape', origin: [12.3, 12.2], transform: ['skewX(0deg)', 'skewX(-12deg)', 'skewX(2deg)', 'skewX(0deg)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.62 }],
  },
  ski: {
    verb: 'the skier bobs down the slope',
    parts: [hop([18.5, 4.5], 1, { as: 'skier', delay: 0.06 }), ride([13.5, 10.5], out(0.6, 0.8), { as: 'skier' }), ride([11.3, 16.5], out(0.6, 0.4), { as: 'ski' })],
  },
  'skipping-rope': {
    verb: 'the rope swings over the jumper, who hops',
    parts: [hop([12, 5.5], 1.4, { as: 'jumper', delay: 0.1 }), wiggle([4.5, 9], [4.5, 15.3], 14, { as: 'handle' }), { as: 'rope', origin: [13.9, 11.2], transform: ['scaleY(1)', 'scaleY(-0.6)', 'scaleY(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.8 }],
  },
  skool: {
    verb: 'the two letters hop in turn',
    parts: [hop([17.5, 11.5], 1.2, { as: 'letter', delay: 0.1 }), hop([5.5, 14], 1.2, { as: 'letter' })],
  },
  skull: {
    verb: 'the skull jaw chatters and the eye sockets flicker',
    parts: [{ as: 'skull', origin: C, transform: ['translateY(0px)', 'translateY(-0.6px)', 'translateY(0px)', 'translateY(-0.6px)', 'translateY(0px)'], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut', dur: 0.7 }, null, null, blink({ as: 'eye', opacity: [1, 0.1, 1, 0.1, 1] }), blink({ as: 'eye', opacity: [1, 0.1, 1, 0.1, 1] }), null],
  },
  skype: {
    verb: 'the S flips inside the cloud',
    parts: [flip(C, 1, { as: 's' }), beat(C, { delay: 0.3 })],
  },
  slack: {
    verb: 'the four pill arms slide out from the centre and click back',
    parts: [
      ride([14.8, 6.5], out(0, -0.8), { as: 'arm' }),
      ride([9.3, 17.5], out(0, 0.8), { as: 'arm' }),
      ride([17.5, 14.8], out(0.8, 0), { as: 'arm' }),
      ride([6.5, 9.3], out(-0.8, 0), { as: 'arm' }),
      ride([8.8, 3.8], out(0, -0.8), { as: 'arm', delay: 0.06 }),
      ride([15.3, 20.3], out(0, 0.8), { as: 'arm', delay: 0.06 }),
      ride([20.3, 8.8], out(0.8, 0), { as: 'arm', delay: 0.06 }),
      ride([3.8, 15.3], out(-0.8, 0), { as: 'arm', delay: 0.06 }),
    ],
  },
  sleeveless: {
    verb: 'the vest sways on its neckline',
    parts: [wiggle([12, 2], [12, 12.3], 5, { as: 'vest' }), line(0.1, { as: 'neck' })],
  },
  slide: {
    verb: 'the slide speed lines streak by as the slide nods',
    parts: [null, ride([6.8, 11.5], out(-1.2, 0), { as: 'speed' }), ride([5.3, 15.5], out(-1.2, 0), { as: 'speed', delay: 0.08 }), beat(C, { delay: 0.3 }), ride([10, 7], out(-1.2, 0), { as: 'speed', delay: 0.04 })],
  },
  'sliders-vertical': {
    verb: 'the three slider knobs slide up and down their tracks',
    parts: [null, null, ride([12, 8], [[0, 0], [0, 3], [0, -1], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.9 }), ride([5, 14], [[0, 0], [0, -3], [0, 1], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.9 }), ride([19, 12], [[0, 0], [0, 2.5], [0, -0.8], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.9, delay: 0.06 }), null, null, null, null],
  },
  slideshare: {
    verb: 'the two figures bob and the slide board nods',
    parts: [hop([12, 15.6], 1, { as: 'figures' }), beat([12, 5.5], { delay: 0.2 })],
  },
  'slow-winds': {
    verb: 'the wind strokes drift slowly in turn',
    parts: [ride([15, 5.5], out(-1, 0), { as: 'wind', dur: 0.9 }), ride([8, 9.5], out(1, 0), { as: 'wind', delay: 0.1, dur: 0.9 }), ride([15, 14.5], out(-1, 0), { as: 'wind', delay: 0.2, dur: 0.9 }), ride([8, 18.5], out(1, 0), { as: 'wind', delay: 0.3, dur: 0.9 })],
  },
  'smart-ac': {
    verb: 'the air streams blow down and the status light blinks',
    parts: [null, line(0, { as: 'vent' }), ride([7, 19.5], out(-0.4, 0.8), { as: 'air', delay: 0.1 }), ride([17, 19.5], out(0.4, 0.8), { as: 'air', delay: 0.1 }), ride([12, 19.5], out(0, 0.8), { as: 'air', delay: 0.06 }), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1] })],
  },

  // --- smart phones ---------------------------------------------------------------------------------
  'smart-phone': {
    verb: 'the home dot pops on the phone',
    parts: [null, pop([12, 19], 2, { as: 'dot' })],
  },
  'smart-phone-01': {
    verb: 'the phone buzzes in place',
    parts: [shake(C, { as: 'phone' }), shake([12, 19], { as: 'phone' })],
  },
  'smart-phone-02': {
    verb: 'the notch pops and the phone nods',
    parts: [beat(C, { delay: 0.2 }), pop([12, 2.5], 1.3, { as: 'notch' })],
  },
  'smart-phone-03': {
    verb: 'the side vibration marks shake out on both sides',
    parts: [null, ride([19, 12], [[0, 0], [0.6, 0], [-0.3, 0], [0.6, 0], [0, 0]], { as: 'buzz', ease: 'easeInOut', dur: 0.6 }), ride([5, 12], [[0, 0], [-0.6, 0], [0.3, 0], [-0.6, 0], [0, 0]], { as: 'buzz', ease: 'easeInOut', dur: 0.6 }), null],
  },
  'smart-phone-04': {
    verb: 'the side signal arc pulses out of the phone',
    parts: [wave([19, 12], { as: 'signal' }), beat([9.5, 12], { delay: 0.2 }), null],
  },
  'smart-phone-landscape-02': {
    verb: 'the phone tips onto its side and back',
    parts: [swing(C, C, [0, -12, 4, -1, 0], { as: 'phone' }), swing(C, [2.5, 11.5], [0, -12, 4, -1, 0], { as: 'phone' })],
  },
  'smart-phone-landscape': {
    verb: 'the home dot pops at the side of the landscape phone',
    parts: [beat(C, { delay: 0.2 }), pop([19, 12], 2, { as: 'dot' })],
  },
  'smart-watch': {
    verb: 'the watch face pops on its strap',
    parts: [pop(C, 1.12, { as: 'face' }), null, null],
  },
  'smart-watch-01': {
    verb: 'the watch rocks on the wrist and the straps flex',
    parts: [wiggle(C, C, 10, { as: 'watch' }), wiggle(C, [12, 4.8], 10, { as: 'watch' }), wiggle(C, [12, 19.3], 10, { as: 'watch' })],
  },
  'smart-watch-02': {
    verb: 'the square face nods and the straps flex',
    parts: [beat(C), flex('Y', [12, 7], [12, 4.5], [1, 1.12, 0.96, 1, 1], { as: 'strap', delay: 0.08 }), flex('Y', [12, 17], [12, 19.5], [1, 1.12, 0.96, 1, 1], { as: 'strap', delay: 0.08 })],
  },
  'smart-watch-03': {
    verb: 'the heartbeat line on the watch rewrites',
    parts: [null, null, null, line(0, { as: 'pulse', dur: 0.66 })],
  },
  'smart-watch-04': {
    verb: 'the watch hands sweep around the face',
    parts: [null, null, null, lap([12.5, 11], 360, { as: 'hands', dur: 0.9 })],
  },
  smart: {
    verb: 'the smirk lifts and the brows raise',
    parts: [null, wiggle([11, 17.8], [14, 16.8], -10, { as: 'smirk' }), ride([12.1, 9.9], out(0, -0.8), { as: 'brows' })],
  },
  'smartphone-charging': {
    verb: 'the bolt flashes on the charging phone',
    parts: [beat(C, { delay: 0.3 }), null, flash(C, 1.3)],
  },
  'smartphone-lost-wifi': {
    verb: 'the wifi arcs flicker and the X twists',
    parts: [null, blink({ as: 'signal', opacity: [1, 0.15, 1, 0.15, 1] }), lap([19, 3], 90, { as: 'x', delay: 0.14, dur: 0.6 }), null],
  },
  'smartphone-nfc': {
    verb: 'the NFC arcs pulse out from the card one after another',
    parts: [beat([5.5, 12], { delay: 0.3 }), wave([21, 12], { as: 'arc', delay: 0.16 }), wave([17.3, 12], { as: 'arc', delay: 0.08 }), wave([13.5, 12], { as: 'arc' })],
  },
  'smartphone-wifi': {
    verb: 'the wifi arcs pulse above the phone',
    parts: [null, wave([15, 6], { as: 'signal' }), blink({ as: 'speaker', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'smile-dizzy': {
    verb: 'the dizzy face wobbles with a grin',
    wrap: tilt(C, -9, { dur: 0.8 }),
    parts: [null, null, null],
  },
  'smile-plus': {
    verb: 'the plus spins in and the smile widens',
    parts: [null, spinStar([19.5, 4.5], { as: 'plus' }), flex('X', [11.5, 16.5], [11.5, 16.5], [1, 1.18, 0.97, 1, 1], { as: 'smile', delay: 0.14 }), eyes({ delay: 0.2 })],
  },
  'sms-code': {
    verb: 'the code dots appear one by one in the bubble',
    parts: [null, beat([14, 11], { delay: 0.4 }), null, pop([14, 10], 2, { as: 'dot', delay: 0.12 }), pop([10.5, 10], 2, { as: 'dot' }), pop([17.5, 10], 2, { as: 'dot', delay: 0.24 })],
  },
  snail: {
    verb: 'the snail stretches forward and pulls back into its shell',
    parts: [scaleFrom('X', [2, 12], [11.7, 12], [1, 1.08, 0.96, 1], { as: 'snail', times: [0, 0.4, 0.75, 1], ease: INOUT, dur: 1 })],
  },
}

export default settleSpecs(specs)
