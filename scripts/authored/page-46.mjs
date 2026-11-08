/**
 * Page 46 — modern-tv-issue → more-horizontal-circle-02.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted moon-02 sits in this span and is skipped.
 *
 * Money icons are banknotes: corner curls, the note and a coin in the
 * middle. The bare name lets the badge or flow act; -01 (same geometry)
 * flips the coin and lets the badge answer differently; -02 (a wavy note)
 * ripples the note before the badge acts. Moon-cloud weather keeps the
 * moon and lets the weather fall. The more-dots grids ripple.
 *
 * Identical-geometry pairs get different jobs: money / money-01, money-add,
 * money-bag, money-exchange, money-not-found, money-receive,
 * money-receive-flow, money-remove, money-send, money-send-flow (each with
 * its -01 twin).
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  dim,
  draw,
  fall,
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** The banknote flutters. */
const flutter = (c, o = {}) => ({ as: 'note', origin: c, transform: ['skewY(0deg)', 'skewY(-4deg)', 'skewY(3deg)', 'skewY(-1deg)', 'skewY(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8, ...o })
/** The wavy -02 note ripples. */
const ripple = (o = {}) => retrace({ as: 'wave', dur: 0.6, ...o })
const coin = (c, o = {}) => flip(c, 1, { as: 'coin', ...o })
const n = (k) => Array(k).fill(null)
/** Corner curls flick outward in turn: tl, tr, bl, br centres. */
const curl = (c, dx, dy, delay) => ride(c, out(dx, dy), { as: 'curl', delay })
/** Moon-cloud weather: the moon sways, the weather falls. */
const moon = (o = {}) => around([6, 10], [5.9, 6.2], [0, -10, 6, -2, 0], { as: 'moon', ...o })
const rain = (c, o = {}) => fall(c, -0.6, 2, { as: 'rain', ...o })

// ---------------------------------------------------------------------------

const specs = {
  'modern-tv-issue': {
    verb: 'the exclamation shakes on the screen',
    parts: [null, null, flex('Y', [12, 10], [12, 8.5], [1, 1.3, 0.9, 1.04, 1], { as: 'bang' }), hop([12, 13.3], 1.2, { as: 'dot', delay: 0.14 })],
  },
  'modern-tv': {
    verb: 'the screen flickers on above its stand',
    parts: [{ as: 'screen', opacity: [1, 0.3, 1, 0.5, 1], times: [0, 0.15, 0.3, 0.45, 0.7], ease: 'linear', dur: 0.8 }, flex('X', [12, 20.5], [12, 20.5], [1, 0.8, 1.04, 1, 1], { as: 'stand', delay: 0.2 })],
  },
  molecules: {
    verb: 'the atoms vibrate on their bonds',
    parts: [pop([12, 13], 1.08, { as: 'core' }), ride([12, 4], out(0, -0.8), { as: 'atom', delay: 0.06 }), ride([4, 20], out(-0.6, 0.6), { as: 'atom', delay: 0.12 }), ride([20, 20], out(0.6, 0.6), { as: 'atom', delay: 0.18 }), null],
  },
  mollie: {
    verb: 'the wordmark bounces',
    parts: [hop(C, 1, { as: 'logo' })],
  },
  monas: {
    verb: 'the flame on the monument flickers',
    parts: [{ as: 'flame', origin: [12, 7], transform: ['scaleY(1) skewX(0deg)', 'scaleY(1.1) skewX(-4deg)', 'scaleY(0.94) skewX(3deg)', 'scaleY(1.04) skewX(-1deg)', 'scaleY(1) skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, null, null, null, null],
  },

  // --- money ------------------------------------------------------------------------------------
  money: {
    verb: 'the banknote flutters and its corners flick',
    parts: [curl([4, 17], -0.5, 0.5, 0.12), curl([19.9, 17], 0.5, 0.5, 0.18), curl([4, 7], -0.5, -0.5, 0), curl([20, 7], 0.5, -0.5, 0.06), flutter(C), null],
  },
  'money-01': {
    verb: 'the coin in the middle flips',
    parts: [...n(5), coin(C)],
  },
  'money-02': {
    verb: 'the coin pops and the dots blink',
    parts: [null, blink({ as: 'dot' }), blink({ as: 'dot', delay: 0.1 }), pop(C, 1.15, { as: 'coin' })],
  },
  'money-03': {
    verb: 'the wavy note ripples around its coin',
    parts: [pop(C, 1.15, { as: 'coin', delay: 0.2 }), null, ripple()],
  },
  'money-04': {
    verb: 'the coin flips and the dots blink on the wavy note',
    parts: [coin(C), blink({ as: 'dot' }), blink({ as: 'dot', delay: 0.1 }), null],
  },
  'money-add': {
    verb: 'the plus spins beside the banknote',
    parts: [...n(5), lap([19, 17], 90, { as: 'plus', dur: 0.6 })],
  },
  'money-add-01': {
    verb: 'the coin flips and the plus pops',
    parts: [...n(4), coin([12, 11]), pop([19, 17], 1.3, { as: 'plus', delay: 0.2 })],
  },
  'money-add-02': {
    verb: 'the note ripples and the plus spins',
    parts: [null, null, ripple(), lap([19, 17], 90, { as: 'plus', dur: 0.6, delay: 0.2 })],
  },
  'money-bag-01': {
    verb: 'the bag is lifted by its knot and sways',
    parts: [around([12, 5], [12, 14.5], [0, 6, -4, 2, 0], { as: 'bag', delay: 0.06 }), ride([12, 4.5], out(0, -0.8), { as: 'knot' })],
  },
  'money-bag': {
    verb: 'the bag drops and squats',
    parts: [{ as: 'bag', origin: [12, 22], transform: ['translateY(0px) scale(1, 1)', 'translateY(-1.4px) scale(0.97, 1.03)', 'translateY(0.4px) scale(1.06, 0.94)', 'translateY(0px) scale(1, 1)', 'translateY(0px) scale(1, 1)'], times: [0, 0.3, 0.52, 0.76, 1], ease: 'easeInOut', dur: 0.66 }, ride([12, 4.5], [[0, 0], [0, -1.4], [0, 0.4], [0, 0], [0, 0]], { as: 'knot', times: [0, 0.3, 0.52, 0.76, 1], dur: 0.66 })],
  },
  'money-bag-02': {
    verb: 'the dollar sign rewrites on the bag',
    parts: [null, null, sweep({ as: 'dollar' })],
  },
  'money-exchange': {
    verb: 'the exchange arrows swap beside the note',
    parts: [...n(5), lap([19, 16.5], 180, { as: 'swap', dur: 0.8 })],
  },
  'money-exchange-01': {
    verb: 'the coin flips and the arrows nudge',
    parts: [...n(4), coin([12, 10.5]), ride([19, 16.5], out(0, 0.8), { as: 'swap', delay: 0.2 })],
  },
  'money-exchange-02': {
    verb: 'the note ripples and the arrows swap',
    parts: [null, null, ripple(), lap([19, 16.5], 180, { as: 'swap', dur: 0.8, delay: 0.2 })],
  },
  'money-exchange-03': {
    verb: 'the two bills trade places along the arrows',
    parts: [draw({ as: 'arrow', delay: 0.2 }), draw({ as: 'arrow', delay: 0.2 }), ride([16.5, 6.5], out(-1.2, 1.2), { as: 'bill' }), ride([7.5, 17.5], out(1.2, -1.2), { as: 'bill' }), ride([7.5, 17.5], out(1.2, -1.2), { as: 'bill' }), ride([16.5, 6.5], out(-1.2, 1.2), { as: 'bill' })],
  },
  'money-lock': {
    verb: 'the padlock rattles beside the note',
    parts: [ride([19, 15.5], out(0, -0.8), { as: 'shackle' }), shake([19, 19], { as: 'lock' }), ...n(5)],
  },
  'money-not-found': {
    verb: 'the slash cuts across and the note fades',
    parts: [dim({ as: 'curl', delay: 0.1 }), dim({ as: 'curl', delay: 0.1 }), dim({ as: 'curl', delay: 0.1 }), dim({ as: 'coin', delay: 0.1 }), draw({ as: 'slash' }), null, null],
  },
  'money-not-found-01': {
    verb: 'the slash cuts across and the coin shivers',
    parts: [null, null, null, shake([11.6, 12.4], { as: 'coin', delay: 0.16 }), draw({ as: 'slash' }), null, shake(C, { as: 'note', delay: 0.16 })],
  },
  'money-not-found-02': {
    verb: 'the slash cuts across and the dots blink out',
    parts: [null, draw({ as: 'slash' }), null, dim({ as: 'dot', delay: 0.1 }), dim({ as: 'dot', delay: 0.16 })],
  },
  'money-not-found-03': {
    verb: 'the slash cuts across and the wavy note sags',
    parts: [draw({ as: 'slash' }), dim({ as: 'coin', delay: 0.1 }), null, ride(C, out(0, 0.8), { as: 'wave', delay: 0.1 })],
  },
  'money-not-found-04': {
    verb: 'the dots fall away as the slash cuts',
    parts: [ride([18.5, 11.5], out(0, 1.4), { as: 'dot', delay: 0.14 }), ride([5.5, 12.5], out(0, 1.4), { as: 'dot', delay: 0.1 }), draw({ as: 'slash' }), null, null],
  },
  'money-receive': {
    verb: 'the arrow drops onto the note',
    parts: [...n(6), ride([12, 5.3], out(0, 1.6), { as: 'arrow' })],
  },
  'money-receive-01': {
    verb: 'the coin flips as the arrow lands',
    parts: [...n(5), coin([12, 14.5], { delay: 0.2 }), hop([12, 5.3], 1, { as: 'arrow' })],
  },
  'money-receive-02': {
    verb: 'the arrow drops and the note ripples',
    parts: [null, null, ripple({ delay: 0.2 }), ride([12, 5.8], out(0, 1.6), { as: 'arrow' })],
  },
  'money-receive-circle': {
    verb: 'the dollar rewrites as the arrow comes in',
    parts: [null, sweep({ as: 'dollar', delay: 0.1 }), ride([19.5, 4.5], out(-1, 1), { as: 'arrow' })],
  },
  'money-receive-flow': {
    verb: 'the three streams flow down into the note',
    parts: [null, null, null, flex('Y', [12, 7], [12, 5], [1, 0.2, 1.1, 1, 1], { as: 'flow' }), flex('Y', [15, 7], [15, 6], [1, 0.2, 1.1, 1, 1], { as: 'flow', delay: 0.08 }), flex('Y', [9, 7], [9, 6], [1, 0.2, 1.1, 1, 1], { as: 'flow', delay: 0.16 }), null],
  },
  'money-receive-flow-01': {
    verb: 'the streams drip and the coin flips',
    parts: [null, null, null, fall([12, 5], 0, 2, { as: 'flow' }), fall([15, 6], 0, 2, { as: 'flow', delay: 0.08 }), fall([9, 6], 0, 2, { as: 'flow', delay: 0.16 }), coin([12, 14], { delay: 0.3 })],
  },
  'money-receive-flow-02': {
    verb: 'the streams flow and the wavy note ripples',
    parts: [null, null, ripple({ delay: 0.24 }), flex('Y', [12, 7.5], [12, 5.5], [1, 0.2, 1.1, 1, 1], { as: 'flow' })],
  },
  'money-receive-square': {
    verb: 'the arrow comes into the square and the dollar rewrites',
    parts: [sweep({ as: 'dollar', delay: 0.1 }), null, ride([19, 5], out(-1, 1), { as: 'arrow' })],
  },
  'money-remove': {
    verb: 'the X rattles beside the note',
    parts: [...n(5), shake([19.8, 17.8], { as: 'x' })],
  },
  'money-remove-01': {
    verb: 'the coin flips and the X spins away',
    parts: [...n(4), coin([12, 11]), lap([19.8, 17.8], 90, { as: 'x', dur: 0.6, delay: 0.2 })],
  },
  'money-remove-02': {
    verb: 'the note ripples and the X rattles',
    parts: [null, null, ripple(), shake([19.8, 17.8], { as: 'x', delay: 0.2 })],
  },
  'money-safe': {
    verb: 'the dial spins and the handle turns',
    parts: [null, ride([17.5, 11], out(0.6, 0), { as: 'handle', delay: 0.3 }), null, null, lap([9.5, 11], 360, { as: 'dial', dur: 0.9 })],
  },
  'money-saving-jar': {
    verb: 'the coin drops into the jar',
    parts: [beat([12, 14], { as: 'jar', delay: 0.3 }), fall([12, 14], 0, 3, { as: 'dollar' }), ride([12, 3.5], out(0, -0.6), { as: 'lid' })],
  },
  'money-security': {
    verb: 'the shield stamps around the dollar',
    parts: [sweep({ as: 'dollar', delay: 0.1 }), stamp(C, { as: 'shield' })],
  },
  'money-send': {
    verb: 'the arrow rises off the note',
    parts: [...n(6), ride([12, 5.3], out(0, -1.6), { as: 'arrow' })],
  },
  'money-send-01': {
    verb: 'the coin flips and the arrow lifts',
    parts: [...n(5), coin([12, 14.5]), hop([12, 5.3], 1.2, { as: 'arrow', delay: 0.2 })],
  },
  'money-send-02': {
    verb: 'the note ripples and the arrow rises',
    parts: [null, null, ripple(), ride([12, 5.8], out(0, -1.6), { as: 'arrow', delay: 0.2 })],
  },
  'money-send-circle': {
    verb: 'the arrow leaves the circle and the dollar rewrites',
    parts: [null, sweep({ as: 'dollar', delay: 0.1 }), ride([19.5, 4.5], out(1, -1), { as: 'arrow' })],
  },
  'money-send-flow': {
    verb: 'the three streams pour out of the note',
    parts: [null, null, null, flex('Y', [12, 17], [12, 19], [1, 0.2, 1.1, 1, 1], { as: 'flow' }), flex('Y', [15, 17], [15, 18], [1, 0.2, 1.1, 1, 1], { as: 'flow', delay: 0.08 }), flex('Y', [9, 17], [9, 18], [1, 0.2, 1.1, 1, 1], { as: 'flow', delay: 0.16 }), null],
  },
  'money-send-flow-01': {
    verb: 'the coin flips and the streams drip out',
    parts: [null, null, null, fall([12, 19], 0, 2, { as: 'flow', delay: 0.2 }), fall([15, 18], 0, 2, { as: 'flow', delay: 0.28 }), fall([9, 18], 0, 2, { as: 'flow', delay: 0.36 }), coin([12, 10])],
  },
  'money-send-flow-02': {
    verb: 'the wavy note ripples and the streams pour',
    parts: [null, null, ripple(), flex('Y', [12, 16.5], [12, 18.5], [1, 0.2, 1.1, 1, 1], { as: 'flow', delay: 0.2 })],
  },
  'money-send-square': {
    verb: 'the arrow leaves the square and the dollar rewrites',
    parts: [sweep({ as: 'dollar', delay: 0.1 }), null, ride([19, 5], out(1, -1), { as: 'arrow' })],
  },

  // --- monitors -------------------------------------------------------------------------------
  'monitor-dot': {
    verb: 'the notification dot pops on the monitor',
    parts: [null, null, pop([19, 6], 1.3, { as: 'dot' }), null],
  },
  'monitor-pause': {
    verb: 'the pause bars press in turn',
    parts: [null, null, flex('Y', [10, 10], [10, 10], [1, 0.6, 1.1, 1, 1], { as: 'bar' }), flex('Y', [14, 10], [14, 10], [1, 0.6, 1.1, 1, 1], { as: 'bar', delay: 0.1 })],
  },
  'monitor-speaker': {
    verb: 'the speaker cone pulses beside the monitor',
    parts: [pop([17, 14.5], 1.25, { as: 'cone' }), pop([17, 8.3], 2, { as: 'tweeter', delay: 0.1 }), null, null, null],
  },
  'monitor-stop': {
    verb: 'the stop square presses in',
    parts: [null, null, swell([12, 10], [12, 10], [1, 0.7, 1.1, 1, 1], { as: 'stop' })],
  },
  'monocle-01': {
    verb: 'the monocle drops on its chain and the eyebrow lifts',
    parts: [null, ride([15, 10.5], out(0, 0.8), { as: 'monocle' }), around([18.5, 10.5], [20, 16.3], [0, 10, -6, 2, 0], { as: 'chain' }), ride([7, 10], out(0, -0.8), { as: 'brow' }), ride([15, 10.5], out(0, 0.8), { as: 'monocle' }), flex('X', [10, 17], [10, 17], [1, 1.2, 0.95, 1, 1], { as: 'mouth', delay: 0.1 })],
  },
  monocle: {
    verb: 'the lens glints and the chain swings',
    parts: [pop([8, 8], 1.06, { as: 'lens' }), pop([16, 8], 1.3, { as: 'clip', delay: 0.1 }), around([16, 8], [19, 13.5], [0, -10, 6, -2, 0], { as: 'chain' })],
  },
  monster: {
    verb: 'the monster wiggles its horns and opens its eye',
    parts: [flex('Y', [12, 11.5], [12, 11.5], [1, 0.2, 1.1, 1, 1], { as: 'eye', dur: 0.5 }), flex('X', [12, 18.3], [12, 18.3], [1, 1.3, 0.94, 1, 1], { as: 'mouth', delay: 0.1 }), null, around([16, 5], [17.5, 3.5], [0, 14, -10, 4, 0], { as: 'horn' }), around([8, 5], [6.5, 3.5], [0, -14, 10, -4, 0], { as: 'horn' }), pop([12, 11.5], 2, { as: 'pupil', delay: 0.2 })],
  },

  // --- moons ----------------------------------------------------------------------------------
  'moon-01': {
    verb: 'the craters twinkle on the moon',
    parts: [around(C, C, [0, -8, 4, -1, 0], { as: 'moon' }), pop([14, 16], 1.2, { as: 'crater', delay: 0.1 }), pop([7, 14], 2, { as: 'crater', delay: 0.2 }), pop([10, 8], 2, { as: 'crater', delay: 0.3 })],
  },
  'moon-angled-rain-zap': {
    verb: 'the bolt flashes and the rain slants down',
    parts: [{ as: 'bolt', opacity: [1, 0.1, 1, 0.1, 1], times: [0, 0.15, 0.3, 0.45, 0.6], ease: 'linear', dur: 0.8 }, rain([15.5, 21], { delay: 0.1 }), rain([12.5, 21], { delay: 0.2 }), null, moon()],
  },
  'moon-cloud-angled-rain': {
    verb: 'the slanted rain falls under the moon cloud',
    parts: [rain([12, 19]), null, moon({ delay: 0.1 })],
  },
  'moon-cloud-angled-zap': {
    verb: 'the bolt strikes under the moon cloud',
    parts: [{ as: 'bolt', opacity: [1, 0.1, 1, 0.1, 1], times: [0, 0.15, 0.3, 0.45, 0.6], ease: 'linear', dur: 0.8 }, null, moon({ delay: 0.1 })],
  },
  'moon-cloud-big-rain': {
    verb: 'the big drop falls from the moon cloud',
    parts: [null, fall([12, 19], 0, 2.4, { as: 'drop' }), moon({ delay: 0.1 })],
  },
  'moon-cloud-fast-wind': {
    verb: 'the wind gusts past the moon cloud',
    parts: [ride([10.2, 20.5], out(1.6, 0), { as: 'wind' }), ride([20.2, 21], out(1.6, 0), { as: 'wind', delay: 0.06 }), moon(), ride([12.2, 11.4], out(0.6, 0), { as: 'cloud', delay: 0.1 })],
  },
  'moon-cloud-hailstone': {
    verb: 'the hailstones bounce down',
    parts: [null, moon({ delay: 0.1 }), ride([12, 18.3], [[0, 0], [0, 1.6], [0, 0.6], [0, 1.2], [0, 0]], { as: 'hail', times: [0, 0.3, 0.5, 0.7, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  'moon-cloud-little-rain': {
    verb: 'the light drizzle falls',
    parts: [fall([12, 18.3], 0, 1.6, { as: 'rain' }), null, moon({ delay: 0.1 })],
  },
  'moon-cloud-little-snow': {
    verb: 'the snowflakes drift and spin in turn',
    parts: [null, lap([12, 17], 90, { as: 'flake', dur: 0.7 }), lap([16, 21], 90, { as: 'flake', dur: 0.7, delay: 0.12 }), lap([8, 21], 90, { as: 'flake', dur: 0.7, delay: 0.24 }), moon({ delay: 0.1 })],
  },
  'moon-cloud-mid-rain': {
    verb: 'the drops fall one after another',
    parts: [null, fall([12, 14.8], 0, 2, { as: 'drop' }), fall([8.5, 20.3], 0, 1.6, { as: 'drop', delay: 0.12 }), fall([15.5, 20.3], 0, 1.6, { as: 'drop', delay: 0.24 }), moon({ delay: 0.1 })],
  },
  'moon-cloud-mid-snow': {
    verb: 'the snowflake spins under the moon cloud',
    parts: [lap([12, 19], 60, { as: 'flake', dur: 0.8 }), null, moon({ delay: 0.1 })],
  },
  'moon-cloud-slow-wind': {
    verb: 'the breeze drifts slowly under the cloud',
    parts: [ride([12, 19.5], out(1, 0), { as: 'wind', dur: 0.9 }), null, moon({ delay: 0.1 })],
  },
  'moon-cloud-snow': {
    verb: 'the snow dots drift down',
    parts: [null, moon({ delay: 0.1 }), fall([12, 18.8], 0, 1.6, { as: 'snow', dur: 0.9 })],
  },
  'moon-cloud': {
    verb: 'the moon peeks out from behind the cloud',
    parts: [ride([12, 13.5], out(0.8, 0), { as: 'cloud' }), ride([6.4, 6.5], out(-0.6, -0.6), { as: 'moon' })],
  },
  'moon-eclipse': {
    verb: 'the shadow slides across the moon',
    parts: [null, ride([14, 12], [[0, 0], [-3, 0], [-3, 0], [0, 0], [0, 0]], { as: 'shadow', ease: 'easeInOut', dur: 1 })],
  },
  'moon-fast-wind': {
    verb: 'the gusts streak past the moon',
    parts: [around([14, 10], [13.9, 9.9], [0, -8, 4, -1, 0], { as: 'moon' }), ride([7.5, 15.3], out(1.6, 0), { as: 'wind' }), ride([9.5, 19.5], out(1.6, 0), { as: 'wind', delay: 0.06 }), ride([20, 19.7], out(1.6, 0), { as: 'wind', delay: 0.12 })],
  },
  'moon-landing': {
    verb: 'the flag is planted on the moon',
    parts: [null, null, ride([16, 7], out(0, -1.6), { as: 'flag' }), pop([15, 17], 2, { as: 'crater', delay: 0.3 })],
  },
  'moon-slow-wind': {
    verb: 'the breeze drifts slowly past the moon',
    parts: [around([14, 11], [13.9, 10.9], [0, -6, 3, -1, 0], { as: 'moon', dur: 0.9 }), ride([9.5, 17.5], out(1, 0), { as: 'wind', dur: 0.9 })],
  },
  moon: {
    verb: 'the moon phase sweeps and the craters twinkle',
    parts: [null, flex('X', [12, 12], [15, 12], [1, 0.3, 1.06, 1, 1], { as: 'phase' }), pop([8.5, 14.5], 1.25, { as: 'crater', delay: 0.14 }), pop([11, 7], 2, { as: 'crater', delay: 0.24 })],
  },
  moonset: {
    verb: 'the moon sinks below the horizon and rises again',
    parts: [ride([19.5, 6], out(0, 1.2), { as: 'arrow' }), ride([10, 11.4], [[0, 0], [0, 4], [0, 4], [0, 0], [0, 0]], { as: 'moon', dur: 0.9 }), null],
    clip: true,
  },

  // --- more -----------------------------------------------------------------------------------
  'more-01': {
    verb: 'the dots ripple out from the center',
    parts: [pop([6, 6.5], 1.6, { as: 'dot', delay: 0.2 }), pop([6, 12.5], 1.6, { as: 'dot', delay: 0.1 }), pop([6, 18.5], 1.6, { as: 'dot', delay: 0.2 }), pop([18, 6.5], 1.6, { as: 'dot', delay: 0.2 }), pop([18, 12.5], 1.6, { as: 'dot', delay: 0.1 }), pop([12, 12.5], 1.6, { as: 'dot' }), pop([12, 6.5], 1.6, { as: 'dot', delay: 0.1 }), pop([18, 18.5], 1.6, { as: 'dot', delay: 0.2 }), pop([12, 18.5], 1.6, { as: 'dot', delay: 0.1 })],
  },
  'more-02': {
    verb: 'the dots ripple diagonally from the top-left corner',
    parts: [hop([19.5, 19.5], 1, { as: 'dot', delay: 0.32 }), hop([12, 19.5], 1, { as: 'dot', delay: 0.24 }), hop([4.5, 19.5], 1, { as: 'dot', delay: 0.16 }), hop([19.5, 12], 1, { as: 'dot', delay: 0.24 }), hop([19.5, 4.5], 1, { as: 'dot', delay: 0.16 }), hop(C, 1, { as: 'dot', delay: 0.16 }), hop([12, 4.5], 1, { as: 'dot', delay: 0.08 }), hop([4.5, 12], 1, { as: 'dot', delay: 0.08 }), hop([4.5, 4.5], 1, { as: 'dot' })],
  },
  'more-03': {
    verb: 'the dot grid turns a quarter',
    parts: [lap(C, 90, { as: 'grid', dur: 0.7 })],
  },
  'more-horizontal-circle-01': {
    verb: 'the three dots hop left to right',
    parts: [hop([19.5, 12], 1, { as: 'dot', delay: 0.16 }), hop(C, 1, { as: 'dot', delay: 0.08 }), hop([4.5, 12], 1, { as: 'dot' })],
  },
  'more-horizontal-circle-02': {
    verb: 'the three dots pulse inside the circle',
    parts: [pop(C, 2, { as: 'dot', delay: 0.08 }), pop([17, 12], 2, { as: 'dot', delay: 0.16 }), pop([7, 12], 2, { as: 'dot' }), null],
  },
}

export default settleSpecs(specs)
