/**
 * Page 57 — rotate-left-01 → save-energy-01.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * Rotate-left / rotate-right turn their device under the arrow; each number
 * picks a different turn (tilt, hold, quarter, rock, hop, swing). RSS feeds
 * light their arcs from the dot outward and let the badge act. Safety pins
 * and sale tags swing from their pivot. Sad faces droop, blink or wobble.
 *
 * Identical-geometry pairs get different jobs: rotate-left / -01,
 * rotate-right / -01, route / -01, rss-connected / -01, sad / -01,
 * safe-delivery / -01, safety-pin / -01, sale-tag / -01.
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
  hold,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  settleSpecs,
  shake,
  sweep,
  swell,
  swing,
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
const tilt = (origin, deg, o = {}) => ({
  as: 'tilt',
  origin,
  transform: ['rotate(0deg)', `rotate(${deg}deg)`, `rotate(${-deg * 0.6}deg)`, `rotate(${deg * 0.25}deg)`, 'rotate(0deg)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: [INOUT, INOUT, INOUT, OUT],
  dur: 0.7,
  ...o,
})
/** Turn to an angle, hold, return. */
const turn = (c, deg, o = {}) => ({ as: 'device', origin: c, transform: ['rotate(0deg)', `rotate(${deg}deg)`, `rotate(${deg}deg)`, 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.8, ...o })
/** The rotate-left / rotate-right family: [device, arrow]; s = -1 left, +1 right. */
const rot = {
  tilt: (c, s) => [wiggle(c, c, 12 * s, { as: 'device' }), line(0, { as: 'arrow', dur: 0.6 })],
  hold: (c, s) => [turn(c, 12 * s), sweep({ as: 'arrow' })],
  push: (c, s) => [wiggle(c, c, 18 * s, { as: 'device' }), ride([12, 3], out(1.2 * s, 0), { as: 'arrow' })],
  rock: (c, s) => [wiggle([c[0], 22], c, 8 * s, { as: 'device', delay: 0.1 }), line(0, { as: 'arrow', dur: 0.56 })],
  hop: (c, s) => [{ ...hop(c, 1.2, { as: 'device' }), transform: ['translate(0px, 0px) rotate(0deg)', `translate(0px, -1.2px) rotate(${8 * s}deg)`, 'translate(0px, 0.17px) rotate(0deg)', 'translate(0px, 0px) rotate(0deg)', 'translate(0px, 0px) rotate(0deg)'] }, blink({ as: 'arrow', opacity: [1, 0.2, 1, 1, 1] })],
  quarter: (c, s) => [turn(c, 90 * s, { dur: 0.9 }), wave([12 - 3 * s, 3.2], { as: 'arrow' })],
  swingBack: (c, s) => [wiggle(c, c, 30 * s, { as: 'device', dur: 0.8 }), nudge([12, 3], 1.2 * s, 0, { as: 'arrow', delay: 0.1 })],
}
const eyesBlink = (o = {}) => blink({ as: 'eyes', opacity: [1, 0, 1, 1, 1], dur: 0.6, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- rotate left / right ---------------------------------------------------------------------------------
  'rotate-left-01': { verb: 'the device turns left under the arrow and holds there', parts: rot.hold([11, 13.6], -1) },
  'rotate-left-02': { verb: 'the device swings left and the arrow pushes along', parts: rot.push([11.4, 14.4], -1) },
  'rotate-left-03': { verb: 'the device rocks left from its base as the arrow rewrites', parts: rot.rock([11.4, 13.9], -1) },
  'rotate-left-04': { verb: 'the device hops with a left twist and the arrow blinks', parts: rot.hop([11.4, 14.4], -1) },
  'rotate-left-05': { verb: 'the device turns a full quarter left, holds and returns', parts: rot.quarter([9.9, 14.1], -1) },
  'rotate-left-06': { verb: 'the device swings hard left and back, the arrow pulling it', parts: rot.swingBack([10.4, 15.1], -1) },
  'rotate-left': { verb: 'the device tilts left and the arrow rewrites over it', parts: rot.tilt([11, 13.6], -1) },
  'rotate-right-01': { verb: 'the device turns right under the arrow and holds there', parts: rot.hold([13, 13.9], 1) },
  'rotate-right-02': { verb: 'the device swings right and the arrow pushes along', parts: rot.push([12.6, 14.4], 1) },
  'rotate-right-03': { verb: 'the device rocks right from its base as the arrow rewrites', parts: rot.rock([12.6, 13.9], 1) },
  'rotate-right-04': { verb: 'the device hops with a right twist and the arrow blinks', parts: rot.hop([12.6, 14.4], 1) },
  'rotate-right-05': { verb: 'the device turns a full quarter right, holds and returns', parts: rot.quarter([14.1, 14.1], 1) },
  'rotate-right-06': { verb: 'the device swings hard right and back, the arrow pulling it', parts: rot.swingBack([13.6, 15.1], 1) },
  'rotate-right': { verb: 'the device tilts right and the arrow rewrites over it', parts: rot.tilt([13, 13.9], 1) },
  'rotate-square': {
    verb: 'the open square spins a full turn counter-clockwise',
    parts: [lap(C, -360, { as: 'square' })],
  },
  'rotate-top-left': {
    verb: 'the square tips a quarter turn left and the arrow lifts',
    parts: [turn([10, 15], -90, { as: 'square', dur: 0.8 }), nudge([16.5, 7.5], 0, -1.2, { delay: 0.1 })],
  },
  'rotate-top-right': {
    verb: 'the square tips a quarter turn right and the arrow lifts',
    parts: [turn([14, 15], 90, { as: 'square', dur: 0.8 }), nudge([7.5, 7.5], 0, -1.2, { delay: 0.1 })],
  },
  rotate: {
    verb: 'the arrow spins a full turn clockwise',
    parts: [lap(C, 360, { as: 'arrow', dur: 0.9 })],
  },

  // --- routes, routers, rows ---------------------------------------------------------------------------------
  route: {
    verb: 'a traveller runs the route from start to end',
    parts: [null, null, loop({ as: 'path', pathLength: [1, 0.35, 1] })],
  },
  'route-01': {
    verb: 'the start pops, the path rewrites, then the end pops',
    parts: [pop([18, 5], 1.2, { as: 'stop', delay: 0.4 }), pop([6, 19], 1.2, { as: 'stop' }), line(0.1, { as: 'path', dur: 0.6 })],
  },
  'route-02': {
    verb: 'the path rewrites up to the pin, which hops',
    parts: [hop([18, 6.5], 1.3, { as: 'pin', delay: 0.3 }), hop([18, 6], 1.3, { as: 'pin', delay: 0.3 }), null, line(0, { as: 'path', dur: 0.6 }), hop([18, 6], 1.3, { as: 'pin', delay: 0.3 })],
  },
  'route-03': {
    verb: 'the path draws out to the pin, which drops in',
    parts: [null, draw({ as: 'path' }), ride([18.3, 6.5], [[0, 0], [0, -1.4], [0, 0.3], [0, 0], [0, 0]], { as: 'pin', delay: 0.26 }), ride([18.3, 5.5], [[0, 0], [0, -1.4], [0, 0.3], [0, 0], [0, 0]], { as: 'pin', delay: 0.26 })],
  },
  'route-block': {
    verb: 'the route dims and the X blocks the end with a twist',
    parts: [lap([18, 5], 90, { as: 'x', dur: 0.6 }), null, dim({ delay: 0.1, opacity: [1, 0.35, 0.35, 1] })],
  },
  'router-01': {
    verb: 'the wifi arcs pulse above the router and the lights blink',
    parts: [null, null, null, wave([12, 4.9], { as: 'signal' }), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'router-02': {
    verb: 'the antenna wobbles, its arcs pulse and the ports blink in turn',
    parts: [null, wiggle([14, 14], [14, 10.3], 8, { as: 'antenna' }), wave([20, 6.3], { as: 'signal', delay: 0.1 }), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1] })],
  },
  router: {
    verb: 'the signal fans out above the router and its lights blink',
    parts: [null, wave([12.5, 5.6], { as: 'signal' }), blink({ as: 'led', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.1 }), line(0.2)],
  },
  'row-delete': {
    verb: 'the X twists and the top row lifts away and back',
    parts: [null, ride([11.5, 7.5], out(0, -1), { as: 'row', delay: 0.14 }), lap([18, 5], 90, { as: 'x', dur: 0.6 })],
  },
  'row-insert': {
    verb: 'the rows part and the arrow pushes in between them',
    parts: [ride([14.5, 6.5], out(0, -1), { as: 'row' }), ride([14.5, 17.5], out(0, 1), { as: 'row' }), nudge([3.3, 12], 1.4, 0, { delay: 0.06 })],
  },

  // --- rss ---------------------------------------------------------------------------------
  'rss-connected-01': {
    verb: 'the feed arcs rewrite and the check pops',
    parts: [line(0.12), line(0.04), null, pop([16.5, 7.5], 1.3, { as: 'check', delay: 0.26 })],
  },
  'rss-connected-02': {
    verb: 'the feed arcs pulse and the link badge rocks',
    parts: [wave([10.5, 13.5], { as: 'arc', delay: 0.16 }), wave([7, 17], { as: 'arc', delay: 0.08 }), pop([3.5, 20.5], 1.6, { as: 'dot' }), wiggle([16, 8], [16, 8], 14, { as: 'link', delay: 0.1 })],
  },
  'rss-connected': {
    verb: 'the feed arcs light from the dot out, then the check draws',
    parts: [wave([11, 12], { as: 'arc', delay: 0.16 }), wave([7.5, 15.5], { as: 'arc', delay: 0.08 }), pop([4, 19], 1.6, { as: 'dot' }), draw({ as: 'check', delay: 0.24 })],
  },
  'rss-error': {
    verb: 'the alert badge rattles beside the feed',
    parts: [null, null, shake([16, 8], { as: 'alert' }), null],
  },
  'rss-locked': {
    verb: 'the padlock clamps shut beside the feed',
    parts: [null, null, null, ride([17, 5], out(0, 0.8), { as: 'shackle' }), beat([17, 9.5], { delay: 0.14 })],
  },
  'rss-unlocked': {
    verb: 'the open shackle lifts and swings on the padlock',
    parts: [null, null, null, { ...wiggle([18.5, 7], [16.8, 5], 14, { as: 'shackle' }) }, null],
  },
  rss: {
    verb: 'the feed arcs light from the dot outward',
    parts: [wave([12, 12], { as: 'arc', delay: 0.18 }), wave([8.5, 15.5], { as: 'arc', delay: 0.09 }), pop([5, 19], 1.6, { as: 'dot' })],
  },

  // --- symbols ---------------------------------------------------------------------------------
  'rub-el-hizb': {
    verb: 'the two squares turn against each other around the centre circle',
    parts: [lap(C, 90, { as: 'square', dur: 0.8 }), lap(C, -90, { as: 'square', dur: 0.8 }), pop(C, 1.2, { as: 'centre', delay: 0.2 })],
  },
  'rubber-duck': {
    verb: 'the duck bobs on the water, its wing flapping and eye blinking',
    wrap: tilt([12, 21], -6, { dur: 0.8 }),
    parts: [null, wiggle([11, 13], [13, 15.5], -14, { as: 'wing' }), blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2 })],
  },
  'rubiks-cube': {
    verb: 'the top layer twists and the middle seam shifts',
    parts: [wiggle([12, 7], [12, 7], -12, { as: 'top' }), null, ride([12, 15.3], out(0.6, 0), { as: 'seam', delay: 0.1 }), null, null, null],
  },
  ruku: {
    verb: 'the figure bows a little deeper and rises',
    parts: [swing([10, 15], [18, 5.8], [0, 8, 8, 0, 0], { as: 'bow', times: [0, 0.3, 0.66, 1, 1], ease: [INOUT, 'linear', INOUT, 'linear'], dur: 0.9 }), swing([10, 15], [9.8, 10.5], [0, 8, 8, 0, 0], { as: 'bow', times: [0, 0.3, 0.66, 1, 1], ease: [INOUT, 'linear', INOUT, 'linear'], dur: 0.9 }), null],
  },
  ruler: {
    verb: 'the ruler slides along its edge and the ticks rewrite',
    parts: [line(0.12, { as: 'ticks' }), ride(C, out(-1, -1), { as: 'ruler' })],
  },
  'running-shoes': {
    verb: 'the shoe rocks onto its toe as if pushing off',
    wrap: { as: 'shoe', origin: [21, 18], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(1deg)', 'rotate(0deg)'], times: [0, 0.32, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
    parts: [null, null, blink({ as: 'lace', opacity: [1, 0.2, 1, 1, 1] }), blink({ as: 'lace', opacity: [1, 0.2, 1, 1, 1], delay: 0.1 })],
  },

  // --- rupee, ruble ---------------------------------------------------------------------------------
  'rupee-circle': {
    verb: 'the rupee sign flips inside the coin',
    parts: [beat(C, { delay: 0.3 }), flip([12, 12.5], 1, { as: 'rupee' }), flip([12, 12.5], 1, { as: 'rupee' }), flip([11, 12.5], 1, { as: 'rupee' })],
  },
  'rupee-shield': {
    verb: 'the rupee sign hops on the shield',
    parts: [beat(C, { delay: 0.3 }), hop([12.5, 10], 1.2, { as: 'rupee' }), hop([12.5, 7], 1.2, { as: 'rupee' }), hop([11.5, 12], 1.2, { as: 'rupee' })],
  },
  'rupee-square': {
    verb: 'the rupee sign pops in the tile',
    parts: [null, swell([12, 12.5], [12, 10], [1, 1.2, 0.94, 1, 1], { as: 'rupee' }), swell([12, 12.5], [12, 7], [1, 1.2, 0.94, 1, 1], { as: 'rupee' }), swell([12, 12.5], [11, 12.5], [1, 1.2, 0.94, 1, 1], { as: 'rupee' })],
  },
  rupee: {
    verb: 'the two bars draw across and the stroke rewrites below',
    parts: [line(0.14, { as: 'stroke', dur: 0.6 }), draw({ as: 'bar' }), draw({ as: 'bar', delay: 0.08 })],
  },
  'russian-ruble': {
    verb: 'the bowl rewrites and the cross bars draw',
    parts: [line(0, { as: 'bowl', dur: 0.6 }), null, draw({ as: 'bar', delay: 0.16 }), draw({ as: 'bar', delay: 0.24 })],
  },

  // --- sad ---------------------------------------------------------------------------------
  sad: {
    verb: 'the face droops down and the frown deepens',
    wrap: { as: 'face', origin: C, transform: ['translateY(0px)', 'translateY(0.9px)', 'translateY(0.9px)', 'translateY(0px)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
    parts: [null, { as: 'frown', origin: [12, 15], transform: ['scaleY(1)', 'scaleY(1.4)', 'scaleY(1.4)', 'scaleY(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 }, null],
  },
  'sad-01': {
    verb: 'the eyes blink and the frown tightens',
    parts: [null, flex('X', [12, 15], [12, 15], [1, 0.75, 1.04, 1, 1], { as: 'frown', delay: 0.14 }), eyesBlink()],
  },
  'sad-02': {
    verb: 'the downcast eyes sag and the mouth wobbles',
    parts: [null, wiggle([12, 16], [12, 16], 6, { as: 'mouth' }), hold([8.5, 9.4], 0, 0.6, { as: 'eye' }), hold([15.5, 9.4], 0, 0.6, { as: 'eye' })],
  },
  'sad-dizzy': {
    verb: 'the dizzy face wobbles around',
    wrap: tilt(C, 9, { dur: 0.8 }),
    parts: [null, null, null],
  },

  // --- safes ---------------------------------------------------------------------------------
  safari: {
    verb: 'the compass needle spins a full turn',
    parts: [lap(C, 360, { as: 'needle', dur: 0.9 }), null, null, null],
  },
  'safe-box': {
    verb: 'the dial is turned and the door nods on its hinges',
    parts: [beat(C, { delay: 0.3 }), { ...pop(C, 1.1, { as: 'dial' }), transform: ['scale(1) rotate(0deg)', 'scale(1.1) rotate(-40deg)', 'scale(0.97) rotate(20deg)', 'scale(1) rotate(0deg)'] }, ride([4.3, 12], out(-0.6, 0), { as: 'hinge', delay: 0.2 })],
  },
  'safe-delivery': {
    verb: 'the parcel hops up out of the open hand',
    parts: [null, null, hop([14, 7], 1.4, { as: 'parcel' }), hop([14, 5], 1.4, { as: 'parcel' })],
  },
  'safe-delivery-01': {
    verb: 'the hand lifts the parcel up and lowers it',
    parts: [ride([8.5, 16], out(0, -1.2), { as: 'hand' }), ride([12.1, 18.5], out(0, -1.2), { as: 'hand' }), ride([14, 7], out(0, -1.2), { as: 'hand' }), ride([14, 5], out(0, -1.2), { as: 'hand' })],
  },
  'safe-delivery-02': {
    verb: 'the parcel sways under its parachute',
    wrap: tilt([12, 2], 6, { dur: 0.9 }),
    parts: [null, null, null, null],
  },
  safe: {
    verb: 'the safe handle spins and the body nods',
    parts: [wiggle([17.5, 17], [17.5, 17], -40, { as: 'handle' }), beat([10.4, 12], { delay: 0.3 })],
  },
  'safety-pin': {
    verb: 'the pin rocks on its coil',
    wrap: tilt([4.5, 19.5], 8),
    parts: [null, null, null],
  },
  'safety-pin-01': {
    verb: 'the clasp head pops and the coil pulses',
    parts: [pop([16.9, 7.1], 1.12, { as: 'clasp' }), wave([4.5, 19.5], { as: 'coil', delay: 0.14 }), null],
  },
  'safety-pin-02': {
    verb: 'the open arm swings shut toward the clasp and springs back',
    parts: [null, null, wiggle([4.5, 19.5], [10, 13], -9, { as: 'arm' })],
  },

  // --- sailing, sakura, salad ---------------------------------------------------------------------------------
  'sailboat-coastal': {
    verb: 'the boat bobs while the waterline slides past',
    parts: [wiggle([12, 18], [12, 15.5], 5, { as: 'boat' }), wiggle([12, 18], [13, 5.5], 5, { as: 'boat' }), wiggle([12, 18], [14, 7.5], 5, { as: 'boat' }), ride([12, 21], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'water', ease: INOUT, dur: 0.9 })],
  },
  'sailboat-offshore': {
    verb: 'the sail fills and the waves roll',
    parts: [null, { as: 'sail', origin: [12.5, 6], transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.97)', 'scaleX(1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.7 }, null, ride([12, 21.5], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'water', ease: INOUT, dur: 0.9 })],
  },
  sakura: {
    verb: 'the blossom turns one petal around its pistil',
    parts: [pop([12, 12.5], 1.3, { as: 'pistil', delay: 0.2 }), lap(C, 72, { as: 'petals', dur: 0.8 })],
  },
  salad: {
    verb: 'the leaves toss up out of the bowl and the fork stirs',
    parts: [hop([15, 7.9], 1.4, { as: 'leaf', delay: 0.06 }), wiggle([11, 13], [14, 10], 12, { as: 'fork' }), beat([12, 17], { delay: 0.3 }), hop([7.5, 9], 1.4, { as: 'leaf' })],
  },
  'salah-time': {
    verb: 'the clock hands sweep round and the figure bows',
    parts: [null, swing([9, 9.5], [8.3, 8.8], [0, 72, 252, 371, 360], { as: 'hands', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9 }), wiggle([16.5, 22], [16.5, 14.6], 6, { as: 'figure', delay: 0.1 })],
  },
  salah: {
    verb: 'the praying figure bows forward and rises',
    parts: [swing([12, 22], C, [0, 6, 6, 0, 0], { as: 'figure', times: [0, 0.26, 0.72, 1, 1], ease: [INOUT, 'linear', OUT, 'linear'], dur: 0.9 })],
  },

  // --- sale tags, sandals ---------------------------------------------------------------------------------
  'sale-tag': {
    verb: 'the tag swings from its string',
    wrap: tilt([12.8, 1], 7, { dur: 0.8 }),
    parts: [null, null, null],
  },
  'sale-tag-01': {
    verb: 'the price sign flips on the tag and the string rewrites',
    parts: [line(0.2, { as: 'string' }), flip([11.5, 14.4], 1, { as: 'sign' }), null],
  },
  'sale-tag-02': {
    verb: 'the tag rocks on its hole and the sign pops',
    parts: [null, wiggle([17.5, 6.5], C, 8, { as: 'tag' }), pop([11, 12.9], 1.2, { as: 'sign', delay: 0.14 })],
  },
  sandals: {
    verb: 'the two sandals step one after the other',
    parts: [hop([6.1, 12], 1.2, { as: 'left' }), hop([17.9, 12], 1.2, { as: 'right', delay: 0.22 }), hop([6.8, 10], 1.2, { as: 'left' }), hop([17.3, 10], 1.2, { as: 'right', delay: 0.22 })],
  },

  // --- space ---------------------------------------------------------------------------------
  'satellite-01': {
    verb: 'the dish swivels on its base',
    parts: [wiggle([7, 16], [13, 10], -12, { as: 'dish' }), null],
  },
  'satellite-02': {
    verb: 'the satellite drifts and turns, its antenna blinking',
    wrap: tilt(C, 10, { dur: 0.9 }),
    parts: [null, blink({ as: 'antenna', opacity: [1, 0.1, 1, 1, 1] }), null, null, null, null],
  },
  'satellite-03': {
    verb: 'the signal waves pulse out as the dish rocks',
    parts: [wiggle([12, 13], [14.2, 9.8], 10, { as: 'dish' }), wave([6.4, 17.6], { as: 'signal', delay: 0.1 }), null],
  },
  satellite: {
    verb: 'the dish swivels on its stand and the signal dot pops',
    parts: [null, wiggle([6, 16], [12.1, 10.9], -10, { as: 'dish' }), pop([19, 4], 1.4, { as: 'signal', delay: 0.14 }), wiggle([6, 16], [15.1, 8], -10, { as: 'dish' })],
  },
  'saturn-01': {
    verb: 'the ring tilts around the planet and back',
    parts: [null, wiggle(C, [12.3, 12.3], 10, { as: 'ring' })],
  },
  'saturn-02': {
    verb: 'the moon slides along its orbit and back',
    parts: [wiggle(C, [19.5, 8.5], -30, { as: 'moon', dur: 0.9 }), null, null],
  },
  saturn: {
    verb: 'the ringed planet rocks on its axis',
    wrap: tilt(C, 10, { dur: 0.86 }),
    parts: [null],
  },
  'saudi-riyal': {
    verb: 'the riyal strokes hop and the bars draw across',
    parts: [hop([7, 11.5], 1, { as: 'stroke' }), hop([17, 9.9], 1, { as: 'stroke', delay: 0.08 }), draw({ as: 'bar', delay: 0.24 }), draw({ as: 'bar', delay: 0.16 })],
  },
  sausage: {
    verb: 'the two sausages hop one after the other',
    parts: [hop([12, 5.3], 1, { as: 'top' }), hop([12, 7.3], 1, { as: 'top' }), hop([12, 17], 1, { as: 'bottom', delay: 0.16 })],
  },
  'save-all': {
    verb: 'the back disk slides out, the shutter slides and the front disk nods',
    parts: [beat([14, 10], { delay: 0.3 }), ride([10, 14], out(-0.8, 0.8), { as: 'back' }), ride([14, 4], out(1, 0), { as: 'shutter', delay: 0.1 }), null],
  },
  'save-energy-01': {
    verb: 'the hand lifts the bulb and its bolt flashes',
    parts: [ride([15, 7], out(0, -1), { as: 'bulb' }), { ...ride([15, 7], out(0, -1), { as: 'bolt' }), opacity: [1, 0.2, 1, 1, 1] }, ride([12.1, 18], out(0, -0.5), { as: 'hand' })],
  },
}

export default settleSpecs(specs)
