/**
 * Page 64 — square-square → structure-01.
 *
 * Gallery page (80 public icons). The handcrafted star original sits in this
 * span and is skipped.
 *
 * Stores follow one rule: bare lets the badge act; -01 (same geometry)
 * ripples the awning, then pops the badge; -02 shakes the awning out from its
 * ridge, then lets the badge act. Stairs climb in steps. Stroke icons redraw
 * the stroke on the side they name.
 *
 * Identical-geometry pairs get different jobs: square-unlock / -01,
 * stairs / -01, star-award / -01, start-up / -01, sticky-note / -01,
 * store / -01, store-add / -01, store-location / -01,
 * store-management / -01, store-remove / -01, store-verified / -01.
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
  dim,
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
  stamp,
  swing,
  trail,
  twinkle,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const D = 0.28
const awning = (c = [12, 6.5]) => wave(c, { as: 'awning' })
const awning2 = (c = [12.1, 6.7]) => ({ as: 'awning', origin: c, transform: ['scaleY(1)', 'scaleY(1.14)', 'scaleY(0.94)', 'scaleY(1.04)', 'scaleY(1)'], times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut', dur: 0.66 })
const star5 = (c, o = {}) => lap(c, 72, { as: 'star', dur: 0.7, ...o })
const shackleUp = (c) => ({ as: 'shackle', origin: c, transform: ['translate(0px, 0px) rotate(0deg)', 'translate(0px, -1.2px) rotate(-10deg)', 'translate(0px, -1.2px) rotate(-10deg)', 'translate(0px, 0px) rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 })

// ---------------------------------------------------------------------------

const specs = {
  // --- squares ---------------------------------------------------------------------------------
  'square-square': {
    verb: 'the inner square turns a quarter inside the outer one',
    parts: [null, lap(C, 90, { as: 'inner', dur: 0.7 })],
  },
  'square-stack': {
    verb: 'the stacked squares fan out from the front one',
    parts: [null, ride(C, out(-0.9, -0.9), { as: 'middle' }), ride([7, 7], out(-1.6, -1.6), { as: 'back' })],
  },
  'square-unlock': {
    verb: 'the shackle swings open and the keyhole blinks',
    parts: [null, shackleUp([11.8, 5.5]), blink({ as: 'keyhole', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'square-unlock-01': {
    verb: 'the lock body drops away from the open shackle and returns',
    parts: [ride([12, 15.5], out(0, 1.2), { as: 'body' }), null, ride([12, 15.5], out(0, 1.2), { as: 'body' })],
  },
  'square-unlock-02': {
    verb: 'the key slot turns and the shackle lifts open',
    parts: [swing([12, 15.5], [12, 15.5], [0, 90, 90, 0, 0], { as: 'slot', times: [0, 0.3, 0.66, 1, 1], ease: [INOUT, 'linear', OUT, 'linear'], dur: 0.8 }), null, { ...shackleUp([11.8, 5.5]), delay: 0.12 }],
  },
  square: {
    verb: 'the square tile flips on its axis',
    parts: [flip(C, 1, { as: 'square' })],
  },
  'squares-exclude': {
    verb: 'the two squares slide out of their overlap and back',
    parts: [ride([9, 9], out(-1, -1), { as: 'square' }), ride([15, 15], out(1, 1), { as: 'square' })],
  },
  'stack-star': {
    verb: 'the star spins on the stack and the back card slides',
    parts: [null, ride([14, 10], out(0.8, -0.8), { as: 'back' }), star5([10, 14])],
  },

  // --- stairs ---------------------------------------------------------------------------------
  stairs: {
    verb: 'the staircase climbs up toward its top step',
    parts: [{ as: 'stairs', origin: C, transform: ['translate(0px, 0px)', 'translate(1px, -1px)', 'translate(1px, -1px)', 'translate(2px, -2px)', 'translate(0px, 0px)'], times: [0, 0.2, 0.4, 0.6, 1], ease: [OUT, 'linear', OUT, INOUT], dur: 0.9 }],
  },
  'stairs-01': {
    verb: 'the staircase outline traces itself up',
    parts: [loop({ as: 'stairs' })],
  },
  'stairs-02': {
    verb: 'the steps stack up one after another',
    parts: [hop([6, 16.5], 1, { as: 'step' }), hop([9, 13.5], 1, { as: 'step', delay: 0.08 }), null, hop([12, 10.5], 1, { as: 'step', delay: 0.16 }), hop([15, 7.5], 1, { as: 'step', delay: 0.24 })],
  },
  'stairs-03': {
    verb: 'the ladder rungs light up one after another',
    parts: [null, null, ...[0.32, 0.24, 0.16, 0.08, 0].map((d) => blink({ as: 'rung', opacity: [1, 0.15, 1, 1, 1], delay: d }))],
  },
  'stairs-04': {
    verb: 'the tiers rise one on top of another',
    parts: [rise('Y', [12, 18], [12, 16.5]), rise('Y', [12, 15], [12, 13.5], { delay: 0.08 }), rise('Y', [12, 12], [12, 10.5], { delay: 0.16 }), rise('Y', [12, 9], [12, 7.5], { delay: 0.24 })],
  },
  stake: {
    verb: 'the coin stack lifts and the token coin flips',
    parts: [hop([8, 4], 1, { as: 'stack', delay: 0.1 }), null, flip([15.5, 15.5], 1, { as: 'coin' }), hop([8, 9], 0.6, { as: 'stack', delay: 0.1 })],
  },

  // --- stamps, stars ---------------------------------------------------------------------------------
  'stamp-01': {
    verb: 'the stamp presses down onto its pad and lifts',
    parts: [{ as: 'pad', origin: [12, 20.6], transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.6 }, ride([12, 10.5], [[0, 0], [0, 1.4], [0, -0.3], [0, 0], [0, 0]], { as: 'stamp', times: [0, 0.36, 0.64, 0.88, 1], dur: 0.6 })],
  },
  'stamp-02': {
    verb: 'the stamp handle presses down and the pad spreads',
    parts: [ride([12, 8.5], [[0, 0], [0, 1.2], [0, -0.3], [0, 0], [0, 0]], { as: 'handle', times: [0, 0.36, 0.64, 0.88, 1], dur: 0.6 }), ride([12, 16.5], [[0, 0], [0, 0.6], [0, 0], [0, 0], [0, 0]], { as: 'block', times: [0, 0.36, 0.64, 0.88, 1], dur: 0.6 }), { as: 'pad', origin: [12, 20], transform: ['scaleX(1)', 'scaleX(1)', 'scaleX(1.1)', 'scaleX(1)'], times: [0, 0.3, 0.5, 1], ease: OUT, dur: 0.6 }],
  },
  stamp: {
    verb: 'the stamp thumps down and the mark rewrites',
    parts: [{ as: 'pad', origin: [12, 18.5], transform: ['scaleX(1)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.6 }, ride([12, 9.5], [[0, 0], [0, 1.2], [0, -0.3], [0, 0], [0, 0]], { as: 'stamp', times: [0, 0.36, 0.64, 0.88, 1], dur: 0.6 }), line(0.3, { as: 'mark' })],
  },
  'star-award': {
    verb: 'the star turns a point inside the medal',
    parts: [star5([12, 8.5]), null, null, null],
  },
  'star-award-01': {
    verb: 'the medal swings on its ribbons',
    parts: [wiggle([12, 22], [12, 8.5], 6, { as: 'medal' }), wiggle([12, 22], [12, 9], 6, { as: 'medal' }), wiggle([16.5, 16], [16.5, 18], 8, { as: 'ribbon' }), wiggle([7.5, 16], [7.5, 18], -8, { as: 'ribbon' })],
  },
  'star-award-02': {
    verb: 'the medal hops on its ribbon and the star pops',
    parts: [hop([12, 9], 1.2, { as: 'medal' }), null, { ...hop([12, 8.5], 1.2, { as: 'medal' }), transform: ['translate(0px, 0px) scale(1)', 'translate(0px, -1.2px) scale(1.2)', 'translate(0px, 0.17px) scale(1)', 'translate(0px, 0px) scale(1)', 'translate(0px, 0px) scale(1)'] }],
  },
  'star-circle': {
    verb: 'the star spins a point inside the ring',
    parts: [null, star5([12, 12.1])],
  },
  'star-face': {
    verb: 'the star eyes twinkle and the smile widens',
    parts: [null, twinkle([7, 8], { as: 'eye' }), twinkle([17, 8], { as: 'eye', delay: 0.08 }), flex('X', [12, 16], [12, 16], [1, 1.2, 0.96, 1, 1], { as: 'smile', delay: 0.12 })],
  },
  'star-half': {
    verb: 'the half star fills and flips over',
    parts: [flip([12, 12.4], 1, { as: 'star' })],
  },
  'star-off': {
    verb: 'the slash cuts through the star, which dims',
    parts: [dim({ delay: 0.14 }), dim({ delay: 0.14 }), draw({ as: 'slash' })],
  },
  'star-square': {
    verb: 'the star stamps down in the tile',
    parts: [null, stamp([11.5, 12.1], { as: 'star' })],
  },
  stars: {
    verb: 'the three stars twinkle one after another',
    parts: [twinkle(C, { as: 'star' }), twinkle([4.5, 19.5], { as: 'star', delay: 0.14 }), twinkle([19, 5], { as: 'star', delay: 0.28 })],
  },

  // --- start-up ---------------------------------------------------------------------------------
  'start-up': {
    verb: 'the rocket lifts off and its flame flickers',
    parts: [ride([12, 9.5], out(0, -1.6), { as: 'rocket' }), ride(C, out(0, -1.6), { as: 'rocket' }), ride([20, 14], out(0, -1.6), { as: 'rocket' }), ride([4, 14], out(0, -1.6), { as: 'rocket' }), { ...flex('Y', [12, 19], [12, 20.5], [1, 1.5, 0.8, 1.2, 1], { as: 'flame' }), opacity: [1, 0.5, 1, 0.6, 1] }],
  },
  'start-up-01': {
    verb: 'the rocket window blinks and the fins wiggle',
    parts: [null, blink({ as: 'window', opacity: [1, 0.1, 1, 1, 1] }), wiggle([18, 12], [20, 14], 10, { as: 'fin', delay: 0.1 }), wiggle([6, 12], [4, 14], -10, { as: 'fin', delay: 0.1 }), null],
  },
  'start-up-02': {
    verb: 'the rocket launches up and to the right and its window glints',
    parts: [ride([14.8, 9.2], out(1.2, -1.2), { as: 'rocket' }), ride([17.4, 17.5], out(1.2, -1.2), { as: 'rocket' }), ride([6.5, 6.6], out(1.2, -1.2), { as: 'rocket' }), { ...ride([7.3, 16.7], out(1.2, -1.2), { as: 'flame' }), opacity: [1, 0.4, 1, 1, 1] }, ride([16.2, 7.8], out(1.2, -1.2), { as: 'rocket' })],
    extras: [trail('M5 21L3 23M2 18L1 19', -1.2)],
  },
  stationery: {
    verb: 'the pencil hops beside the ruler and the ticks blink',
    parts: [null, hop([5, 12], 1.2, { as: 'pencil' }), blink({ as: 'tick', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'tick', opacity: [1, 0.1, 1, 1, 1], delay: 0.12 }), blink({ as: 'tick', opacity: [1, 0.1, 1, 1, 1], delay: 0.04 }), hop([5, 7.5], 1.2, { as: 'pencil' })],
  },
  status: {
    verb: 'the status ring pulses',
    parts: [{ as: 'ring', origin: C, transform: ['scale(1)', 'scale(0.88)', 'scale(1.06)', 'scale(0.98)', 'scale(1)'], opacity: [1, 0.6, 1, 1, 1], times: [0, 0.24, 0.5, 0.76, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  steak: {
    verb: 'the steak sizzles and the bone pops',
    parts: [shake([12, 10], { as: 'steak' }), shake([12, 15.3], { as: 'steak' }), pop([17, 11], 1.2, { as: 'bone', delay: 0.14 })],
    extras: [{ as: 'sizzle', tag: 'path', attrs: { d: 'M8 2.5V1M12 2.5V1M16 2.5V1', strokeWidth: '1.2' }, transform: ['translateY(0px)', 'translateY(0px)', 'translateY(-1px)', 'translateY(-1.6px)'], opacity: [0, 0, 1, 0], times: [0, 0.2, 0.5, 0.86], ease: ['linear', OUT, 'linear'], dur: 0.8 }],
  },
  steering: {
    verb: 'the wheel spokes turn left and right',
    parts: [null, swing(C, [12, 14.5], [0, -24, 18, -6, 0], { as: 'spokes', dur: 0.86 }), swing(C, [12, 13], [0, -24, 18, -6, 0], { as: 'spokes', dur: 0.86 })],
  },

  // --- debugger steps ---------------------------------------------------------------------------------
  'step-into': {
    verb: 'the arrow dives down into the gap between the lines',
    parts: [nudge([12, 15.5], 0, 1.4, { as: 'head' }), line(0, { as: 'path' }), ride([6, 20], out(-0.6, 0), { as: 'line', delay: 0.2 }), ride([18, 20], out(0.6, 0), { as: 'line', delay: 0.2 })],
  },
  'step-out': {
    verb: 'the arrow climbs up and out of the gap',
    parts: [nudge([19.5, 7], 0.6, -1.2, { as: 'head', delay: 0.1 }), line(0, { as: 'path' }), ride([6, 21], out(-0.6, 0), { as: 'line' }), ride([18, 21], out(0.6, 0), { as: 'line' })],
  },
  'step-over': {
    verb: 'the arrow arcs over the line and lands beside it',
    parts: [nudge([17, 15.5], 0, 1.2, { as: 'head', delay: 0.24 }), line(0, { as: 'arc', dur: 0.6 }), beat([10, 20], { delay: 0.4 })],
  },

  // --- stethoscopes, stickers ---------------------------------------------------------------------------------
  'stethoscope-02': {
    verb: 'the chest piece taps and the tubing swings',
    parts: [wiggle([9, 3.5], [9, 8.5], 5, { as: 'tube' }), wiggle([18.5, 15.5], [13.8, 17.5], -6, { as: 'tube', delay: 0.1 }), null, null, pop([18.5, 13.5], 1.2, { as: 'chest' })],
  },
  stethoscope: {
    verb: 'the chest piece pulses as if picking up a heartbeat',
    parts: [null, null, null, { as: 'chest', origin: [18, 13], transform: ['scale(1)', 'scale(1.16)', 'scale(1)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.4, 0.58, 1], ease: 'easeInOut', dur: 0.8 }, blink({ as: 'dot', opacity: [1, 0.1, 1, 0.1, 1] })],
  },
  sticker: {
    verb: 'the sticker corner peels up and the face smiles',
    parts: [null, { as: 'peel', origin: [17.8, 6.3], transform: ['scale(1)', 'scale(1.3)', 'scale(1.3)', 'scale(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 }, flex('X', [12, 14.5], [12, 14.5], [1, 1.16, 0.96, 1, 1], { as: 'smile', delay: 0.1 })],
  },
  'sticky-note': {
    verb: 'the pin presses the note and the lines rewrite',
    parts: [beat([12, 13.5], { delay: 0.2 }), ride([12, 5.5], out(0, 0.9), { as: 'pin' }), line(0.24)],
  },
  'sticky-note-01': {
    verb: 'the note swings from its pin',
    parts: [wiggle([12, 7.5], [12, 13.5], 6, { as: 'note' }), null, wiggle([12, 7.5], [12, 15.5], 6, { as: 'note' })],
  },
  'sticky-note-02': {
    verb: 'the back note slides out and the clip pops',
    parts: [null, ride([10, 16], out(-0.8, 0.8), { as: 'back' }), pop([10, 5], 1.2, { as: 'clip', delay: 0.1 })],
  },
  'sticky-note-03': {
    verb: 'the folded corner flaps open and closed',
    parts: [{ as: 'corner', origin: [17.3, 17.3], transform: ['scale(1)', 'scale(1.3)', 'scale(0.9)', 'scale(1)'], times: [0, 0.3, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }, null],
  },

  // --- stop ---------------------------------------------------------------------------------
  'stop-circle': {
    verb: 'the stop square presses in inside the ring',
    parts: [null, { as: 'stop', origin: C, transform: ['scale(1)', 'scale(0.8)', 'scale(0.8)', 'scale(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.6 }],
  },
  'stop-loss-order': {
    verb: 'the price ball drops to the stop line and bounces back',
    parts: [ride(C, [[0, 0], [-1, 1.4], [0.2, -0.3], [0, 0], [0, 0]], { as: 'ball' }), line(0.1, { as: 'trend' }), line(0, { as: 'trend' }), blink({ as: 'stop', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'stop', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), pop(C, 2, { as: 'dot', delay: 0.2 })],
  },
  'stop-watch': {
    verb: 'the hand sweeps around and the button clicks',
    parts: [null, ride([12, 2], out(0, 0.6), { as: 'button' }), swing([12, 13.5], [13.8, 11.8], [0, 72, 252, 371, 360], { as: 'hand', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9 })],
  },
  stop: {
    verb: 'the stop square presses in and holds',
    parts: [{ as: 'stop', origin: C, transform: ['scale(1)', 'scale(0.82)', 'scale(0.82)', 'scale(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.6 }],
  },

  // --- stores ---------------------------------------------------------------------------------
  store: {
    verb: 'the door smile rewrites under the awning',
    parts: [null, null, line(0, { as: 'smile' })],
  },
  'store-01': {
    verb: 'the awning ripples, then the shop nods',
    parts: [beat([12, 15.5], { delay: D }), awning(), null],
  },
  'store-02': {
    verb: 'the awning shakes out and the counter line draws',
    parts: [null, draw({ as: 'counter', delay: D }), awning2([12, 6.5])],
  },
  'store-03': {
    verb: 'the roof awning shakes out and the door smile rewrites',
    parts: [null, line(D, { as: 'smile' }), awning2()],
  },
  'store-04': {
    verb: 'the roof awning ripples and the window line draws',
    parts: [null, draw({ as: 'window', delay: D }), wave([12.1, 7.4], { as: 'awning' })],
  },
  'store-add': {
    verb: 'the plus spins in at the shop corner',
    parts: [null, null, spinStar([17.5, 18], { as: 'plus' })],
  },
  'store-add-01': {
    verb: 'the awning ripples, then the plus pops',
    parts: [null, awning(), pop([17.5, 18], 1.3, { as: 'plus', delay: D })],
  },
  'store-add-02': {
    verb: 'the awning shakes out, then the plus spins in',
    parts: [null, null, spinStar([18.5, 18.5], { as: 'plus', delay: D }), awning2()],
  },
  'store-location': {
    verb: 'the pin hops beside the shop',
    parts: [null, null, hop([18, 16.7], 1.4, { as: 'pin' }), hop([18, 16], 1.4, { as: 'pin' })],
  },
  'store-location-01': {
    verb: 'the awning ripples, then the pin pops',
    parts: [null, awning(), pop([18, 16.7], 1.16, { as: 'pin', delay: D }), pop([18, 16], 1.6, { as: 'pin', delay: D })],
  },
  'store-location-02': {
    verb: 'the awning shakes out, then the pin drops in',
    parts: [awning2(), null, null, ride([18.5, 17.8], [[0, 0], [0, -1.4], [0, 0.3], [0, 0], [0, 0]], { as: 'pin', delay: D }), ride([18.5, 17], [[0, 0], [0, -1.4], [0, 0.3], [0, 0], [0, 0]], { as: 'pin', delay: D })],
  },
  'store-management': {
    verb: 'the gear badge turns at the shop corner',
    parts: [null, null, lap([18.5, 17.5], 90, { as: 'gear', dur: 0.7 })],
  },
  'store-management-01': {
    verb: 'the awning ripples, then the gear pops',
    parts: [null, awning(), pop([18.5, 17.5], 1.2, { as: 'gear', delay: D })],
  },
  'store-management-02': {
    verb: 'the awning shakes out, then the gear turns',
    parts: [null, lap([17.5, 18], 90, { as: 'gear', delay: D, dur: 0.7 }), awning2([12.1, 6.9])],
  },
  'store-remove': {
    verb: 'the X twists at the shop corner',
    parts: [null, null, lap([18, 18.5], 90, { as: 'x', dur: 0.6 })],
  },
  'store-remove-01': {
    verb: 'the awning ripples, then the X pops',
    parts: [null, awning(), pop([18, 18.5], 1.3, { as: 'x', delay: D })],
  },
  'store-remove-02': {
    verb: 'the awning shakes out, then the X rattles',
    parts: [null, null, shake([19, 19], { as: 'x', delay: D }), awning2()],
  },
  'store-verified': {
    verb: 'the check draws in the verified badge',
    parts: [draw({ as: 'check' }), null, null],
  },
  'store-verified-01': {
    verb: 'the verified badge pops, then the check draws',
    parts: [draw({ as: 'check', delay: D }), null, pop([17, 7], 1.14, { as: 'badge' })],
  },
  'store-verified-02': {
    verb: 'the badge ring traces around, then the check stamps',
    parts: [stamp([17, 7], { as: 'check', delay: D }), loop({ as: 'badge', dur: 0.8 }), null],
  },

  // --- straight edge, strategy, steering ---------------------------------------------------------------------------------
  'straight-edge': {
    verb: 'the edge handles slide out along the diagonal and back',
    parts: [null, pop(C, 1.2, { as: 'centre' }), ride([19, 5], out(1, -1), { as: 'handle' }), ride([5, 19], out(-1, 1), { as: 'handle' })],
  },
  strategy: {
    verb: 'the play path rewrites from the circle to the X',
    parts: [line(0.1, { as: 'path', dur: 0.66 }), pop([5.5, 5.5], 1.2, { as: 'start' }), lap([15.5, 18.5], 90, { as: 'x', delay: 0.4, dur: 0.5 })],
  },
  'streering-wheel': {
    verb: 'the steering wheel turns left and right',
    wrap: swing(C, C, [0, -30, 22, -8, 0], { as: 'wheel', dur: 0.9 }),
    parts: [null, null, null, null, null],
  },
  'street-food': {
    verb: 'the two skewers hop and their sticks wobble',
    parts: [blink({ as: 'steam', opacity: [1, 0.2, 1, 1, 1] }), blink({ as: 'steam', opacity: [1, 0.2, 1, 1, 1], delay: 0.1 }), null, null, hop([7.5, 9.5], 1, { as: 'skewer' }), hop([16.5, 9.5], 1, { as: 'skewer', delay: 0.12 })],
  },
  stripe: {
    verb: 'the S rewrites itself',
    parts: [line(0, { as: 's', dur: 0.7 })],
  },

  // --- strokes ---------------------------------------------------------------------------------
  'stroke-bottom': {
    verb: 'the bottom stroke draws across under the shape',
    parts: [null, draw({ as: 'stroke' })],
  },
  'stroke-center': {
    verb: 'the centre stroke rewrites and the swatch pops',
    parts: [null, pop([7.5, 16.5], 1.2, { as: 'swatch' }), line(0.1, { as: 'stroke' }), draw({ as: 'stroke', delay: 0.18 })],
  },
  'stroke-inside': {
    verb: 'the swatch pops inside the corner and the outline rewrites',
    parts: [pop([5, 19], 1.2, { as: 'swatch', delay: 0.16 }), line(0, { as: 'outline', dur: 0.66 })],
  },
  'stroke-left': {
    verb: 'the left stroke draws down beside the shape',
    parts: [null, draw({ as: 'stroke' })],
  },
  'stroke-outside': {
    verb: 'the outside stroke rewrites around the circle, which pops',
    parts: [line(0, { as: 'outline', dur: 0.66 }), pop(C, 1.16, { as: 'circle', delay: 0.16 })],
  },
  'stroke-right': {
    verb: 'the right stroke draws up beside the shape',
    parts: [null, draw({ as: 'stroke' })],
  },
  'stroke-top': {
    verb: 'the top stroke draws across over the shape',
    parts: [null, draw({ as: 'stroke' })],
  },
  'structure-01': {
    verb: 'the top box hops and the branches rewrite to the two children',
    parts: [line(0.12, { as: 'branches' }), hop([5, 19], 1, { as: 'child', delay: 0.3 }), hop([19, 19], 1, { as: 'child', delay: 0.36 }), hop([12, 6], 1.2, { as: 'parent' })],
  },
}

export default settleSpecs(specs)
