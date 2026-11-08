/**
 * Page 65 — structure-02 → surfboard.
 *
 * Gallery page (80 public icons). The handcrafted sun-03 original sits in
 * this span and is skipped.
 *
 * The sun-cloud weather family follows one rule:
 * - bare: the weather under the cloud acts (rain and hail fall through the
 *   bottom and re-enter, snow drifts down spinning, bolts flash, wind
 *   streams by), and the sun stays put.
 * - -01 (same geometry as bare): the sun peeking behind the cloud rocks,
 *   then the weather blinks.
 * - -02 (full sun disc behind the cloud): the cloud drifts across the sun,
 *   then the weather acts.
 * Plain sun / sun-cloud get the same split (sun rays turn vs cloud drifts).
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
  spinStar,
  stamp,
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
const D = 0.26

// Weather beats on the precipitation part (c = its centre).
const wx = {
  rain: (c, o = {}) => fall(c, -1, 3, { as: 'rain', ...o }),
  hail: (c, o = {}) => fall(c, 0, 3, { as: 'hail', ...o }),
  snow: (c, o = {}) => ({ as: 'snow', origin: c, transform: ['translate(0px, 0px) rotate(0deg)', 'translate(0px, 2.4px) rotate(60deg)', 'translate(0px, -2.4px) rotate(60deg)', 'translate(0px, 0px) rotate(0deg)'], opacity: [1, 0, 0, 1], times: [0, 0.4, 0.42, 1], ease: ['easeIn', 'linear', OUT], dur: 0.9, ...o }),
  zap: (c, o = {}) => ({ ...pop(c, 1.25, { as: 'bolt', ...o }), opacity: [1, 0.2, 1, 1] }),
  wind: (c, o = {}) => ride(c, [[0, 0], [1.4, 0], [-1.4, 0], [0, 0], [0, 0]], { as: 'wind', times: [0, 0.3, 0.32, 0.8, 1], ease: ['easeIn', 'linear', OUT, 'linear'], dur: 0.8, ...o }),
  blink: (o = {}) => blink({ as: 'weather', opacity: [1, 0.15, 1, 0.15, 1], ...o }),
}
const sunRock = (c) => wiggle(c, c, 18, { as: 'sun' })
const drift = (c) => ride(c, [[0, 0], [-1, 0], [0.6, 0], [0, 0], [0, 0]], { as: 'cloud', ease: INOUT, dur: 0.9 })
const SUN = [5.5, 5.5]
const SUN2 = [7, 6.5]

// ---------------------------------------------------------------------------

const specs = {
  // --- structures ---------------------------------------------------------------------------------
  'structure-02': {
    verb: 'the top node hops and the side and bottom nodes answer',
    parts: [hop([4, 13], 1, { as: 'node', delay: 0.16 }), hop([20, 13], 1, { as: 'node', delay: 0.16 }), line(0.08, { as: 'links' }), hop([12, 16.5], 1, { as: 'node', delay: 0.24 }), hop([12, 4.5], 1.2, { as: 'node' })],
  },
  'structure-03': {
    verb: 'the arc of links rewrites and the nodes hop in turn',
    parts: [hop([12, 16.5], 1, { as: 'node', delay: 0.24 }), hop([12, 4.5], 1.2, { as: 'node' }), line(0.08, { as: 'arc' }), hop([4, 15], 1, { as: 'node', delay: 0.16 }), hop([20, 15], 1, { as: 'node', delay: 0.16 }), draw({ as: 'link', delay: 0.06 }), draw({ as: 'link', delay: 0.2 })],
  },
  'structure-04': {
    verb: 'the left block pushes out the branch and the two right blocks pop',
    parts: [nudge([6, 12], 0.8, 0, { as: 'block' }), pop([18, 7], 1.12, { as: 'block', delay: 0.16 }), pop([18, 17], 1.12, { as: 'block', delay: 0.24 }), line(0.06, { as: 'branch' })],
  },
  'structure-05': {
    verb: 'the blocks hop down the zigzag chain',
    parts: [hop([6, 5], 1, { as: 'block' }), hop([18.5, 9], 1, { as: 'block', delay: 0.12 }), hop([17, 19], 1, { as: 'block', delay: 0.24 }), line(0.06, { as: 'chain' })],
  },
  'structure-add': {
    verb: 'the plus spins on the root and the branches rewrite',
    parts: [pop([18.5, 5], 1.12, { as: 'node', delay: 0.24 }), pop([18.5, 19], 1.12, { as: 'node', delay: 0.3 }), spinStar([7, 12], { as: 'plus' }), line(0.1, { as: 'branches' })],
  },
  'structure-check': {
    verb: 'the check draws on the root and the leaf nodes pop',
    parts: [pop([18.5, 5], 1.12, { as: 'node', delay: 0.24 }), pop([18.5, 19], 1.12, { as: 'node', delay: 0.3 }), null, draw({ as: 'check' })],
  },
  'structure-fail': {
    verb: 'the X twists on the root and the branches rattle',
    parts: [shake([18.5, 5], { as: 'node', delay: 0.14 }), shake([18.5, 19], { as: 'node', delay: 0.14 }), lap([7, 12], 90, { as: 'x', dur: 0.6 }), null],
  },
  'structure-folder-circle': {
    verb: 'the folder hops and the two circle leaves pop',
    parts: [pop([5, 19], 1.16, { as: 'leaf', delay: 0.2 }), pop([19, 19], 1.16, { as: 'leaf', delay: 0.28 }), line(0.1, { as: 'branch' }), hop([12, 6], 1.2, { as: 'folder' })],
  },
  'structure-folder': {
    verb: 'the folder hops and the two square leaves pop',
    parts: [pop([5, 19.5], 1.16, { as: 'leaf', delay: 0.2 }), pop([19, 19.5], 1.16, { as: 'leaf', delay: 0.28 }), line(0.1, { as: 'branch' }), hop([12, 6], 1.2, { as: 'folder' })],
  },
  structure: {
    verb: 'the branches rewrite from the top box down to the children',
    parts: [line(0, { as: 'branches', dur: 0.6 }), pop([5, 19], 1.14, { as: 'child', delay: 0.3 }), pop([19, 19], 1.14, { as: 'child', delay: 0.36 }), null],
  },

  // --- students ---------------------------------------------------------------------------------
  'student-card': {
    verb: 'the photo pops on the card and the lines rewrite',
    parts: [null, pop([8.5, 12], 1.12, { as: 'photo' }), line(0.12), line(0.2)],
  },
  student: {
    verb: 'the graduate tips the mortarboard',
    parts: [{ as: 'cap', origin: [12, 5.5], transform: ['translate(0px, 0px) rotate(0deg)', 'translate(0px, -1.2px) rotate(-10deg)', 'translate(0px, 0.2px) rotate(3deg)', 'translate(0px, 0px) rotate(0deg)'], times: [0, 0.32, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.66 }, null, null],
  },
  students: {
    verb: 'the two students bob one after the other',
    parts: [hop([8, 7], 1, { as: 'front' }), hop([8, 10.5], 1, { as: 'front' }), hop([17.5, 10.5], 1, { as: 'back', delay: 0.16 }), null, hop([19.4, 17.9], 0.6, { as: 'back', delay: 0.16 })],
  },
  'study-desk': {
    verb: 'the lamp nods over the desk and the books shuffle',
    parts: [null, ride([16, 14.5], out(0.8, 0), { as: 'drawer', delay: 0.2 }), null, wiggle([18, 11.5], [15.9, 6.9], 8, { as: 'lamp' }), hop([5.5, 9], 0.8, { as: 'book', delay: 0.1 }), hop([8.5, 9], 0.8, { as: 'book', delay: 0.16 })],
  },
  'study-lamp': {
    verb: 'the lamp head bobs on its arm and the hinge pops',
    parts: [wiggle([13, 7], [16.1, 6.7], 10, { as: 'head' }), pop([5, 13], 1.2, { as: 'hinge', delay: 0.1 }), wiggle([6, 12], [9.5, 9.5], -5, { as: 'arm' }), null, null],
  },
  stumbleupon: {
    verb: 'the mark rewrites inside its tile',
    parts: [line(0, { as: 'mark', dur: 0.7 }), null],
  },
  submarine: {
    verb: 'the submarine bobs and its periscope rises',
    parts: [ride([12, 15.5], [[0, 0], [0, -0.6], [0, 0.4], [0, 0], [0, 0]], { as: 'hull', ease: INOUT, dur: 0.86 }), ride([14, 10.5], [[0, 0], [0, -0.6], [0, 0.4], [0, 0], [0, 0]], { as: 'hull', ease: INOUT, dur: 0.86 }), ride([15, 6.5], out(0, -1.2), { as: 'periscope', delay: 0.1 })],
  },
  submerge: {
    verb: 'the ball sinks under the waterline and bobs back up',
    parts: [ride([12, 14], [[0, 0], [0, 2], [0, -0.4], [0, 0], [0, 0]], { as: 'ball' }), blink({ as: 'drips', opacity: [1, 0.2, 1, 1, 1], delay: 0.1 }), null, ride([12, 15.5], [[0, 0], [0.6, 0], [-0.6, 0], [0, 0], [0, 0]], { as: 'water', ease: INOUT, dur: 0.8 })],
  },
  'subnode-add': {
    verb: 'the plus spins in and the sub-node hops',
    parts: [line(0.1, { as: 'link' }), hop([17.5, 19.5], 1, { as: 'node', delay: 0.2 }), null, spinStar([17.5, 11.5], { as: 'plus' })],
  },
  'subnode-delete': {
    verb: 'the X twists and the sub-node drops away and back',
    parts: [null, ride([17.5, 19.5], out(0, 1), { as: 'node', delay: 0.14 }), null, lap([17.5, 11.5], 90, { as: 'x', dur: 0.6 })],
  },
  subpoena: {
    verb: 'the seal stamps on the summons and the clip lifts',
    parts: [null, hop([12, 5], 0.8, { as: 'clip' }), stamp([12.5, 14.5], { as: 'seal', delay: 0.1 })],
  },
  subtitle: {
    verb: 'the subtitle lines type in one after the other',
    parts: [null, draw({ as: 'line', delay: 0.16 }), draw({ as: 'line' })],
  },

  // --- suits ---------------------------------------------------------------------------------
  suit: {
    verb: 'the tie straightens and the lapels nod',
    parts: [null, null, null, wiggle([15, 4], [16.5, 13], 4, { as: 'lapel' }), wiggle([9, 4], [7.5, 13], -4, { as: 'lapel' }), null, wiggle([12, 12.5], [12, 14.7], 10, { as: 'tie' })],
  },
  'suit-01': {
    verb: 'the collar points lift and the buttons blink',
    parts: [null, ride([15, 5.5], out(0, -0.8), { as: 'collar' }), ride([9, 5.5], out(0, -0.8), { as: 'collar' }), null, null, null, blink({ as: 'button', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'suit-02': {
    verb: 'the bow tie pops and the collar lifts',
    parts: [null, ride([15, 6.1], out(0, -0.6), { as: 'collar' }), ride([9, 6.1], out(0, -0.6), { as: 'collar' }), null, pop([12, 11], 1.3, { as: 'bow', delay: 0.1 }), null],
  },
  sujood: {
    verb: 'the figure bows down to the ground and rises',
    parts: [swing([5, 17], [13.6, 11.6], [0, 6, 6, 0, 0], { as: 'figure', times: [0, 0.3, 0.66, 1, 1], ease: [INOUT, 'linear', INOUT, 'linear'], dur: 0.9 }), null],
  },

  // --- summation ---------------------------------------------------------------------------------
  summation: {
    verb: 'the sigma rewrites itself',
    parts: [line(0, { as: 'sigma', dur: 0.7 })],
  },
  'summation-01': {
    verb: 'the sigma squashes and springs back',
    parts: [{ as: 'sigma', origin: [11.9, 12], transform: ['scale(1, 1)', 'scale(1.1, 0.8)', 'scale(0.96, 1.05)', 'scale(1, 1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }],
  },
  'summation-02': {
    verb: 'the brackets close in on the sigma, which pops',
    parts: [flex('X', C, C, [1, 0.92, 1.03, 1, 1], { as: 'brackets' }), pop(C, 1.16, { as: 'sigma', delay: 0.12 })],
  },
  'summation-circle': {
    verb: 'the sigma hops inside the ring',
    parts: [hop(C, 1.3, { as: 'sigma' }), beat(C, { delay: 0.3 })],
  },
  'summation-square': {
    verb: 'the sigma flips inside the tile',
    parts: [null, flip(C, 1, { as: 'sigma' })],
  },

  // --- suns ---------------------------------------------------------------------------------
  sun: {
    verb: 'the sun rays turn an eighth around the disc',
    parts: [null, lap(C, 45, { as: 'rays', dur: 0.7 })],
  },
  'sun-01': {
    verb: 'the sun disc pulses and the rays twinkle',
    parts: [pop(C, 1.12, { as: 'disc' }), blink({ as: 'rays', opacity: [1, 0.3, 1, 0.3, 1], delay: 0.1 })],
  },
  'sun-02': {
    verb: 'the wavy rays spin a full turn around the disc',
    parts: [pop(C, 1.1, { as: 'disc', delay: 0.2 }), lap(C, 360, { as: 'rays', dur: 0.9 })],
  },
  'sun-cloud': {
    verb: 'the cloud drifts across the sun',
    parts: [drift([12, 12.5]), null],
  },
  'sun-cloud-01': {
    verb: 'the sun behind the cloud rocks, then the cloud nods',
    parts: [beat([12, 12.5], { delay: D }), sunRock([5.5, 7.5])],
  },
  'sun-cloud-02': {
    verb: 'the cloud drifts across the full sun, which pops',
    parts: [drift([12, 13.5]), pop(SUN2, 1.1, { as: 'sun', delay: D })],
  },

  // --- sun-cloud weather ---------------------------------------------------------------------------------
  'sun-cloud-angled-rain': { verb: 'the slanted rain falls from the cloud', parts: [wx.rain([12, 19]), null, null] },
  'sun-cloud-angled-rain-01': { verb: 'the sun rocks, then the slanted rain blinks', parts: [wx.blink({ delay: D }), null, sunRock(SUN)] },
  'sun-cloud-angled-rain-02': { verb: 'the cloud drifts across the sun, then the rain falls', parts: [wx.rain([12, 19], { delay: D }), drift([12, 12]), null] },
  'sun-cloud-angled-rain-zap': { verb: 'the bolt flashes and the rain falls beside it', parts: [null, null, wx.zap([8.5, 17]), wx.rain([15.5, 19.5], { delay: 0.1 }), wx.rain([12.5, 19.5], { delay: 0.18 })] },
  'sun-cloud-angled-rain-zap-01': { verb: 'the sun rocks, then the bolt and rain blink', parts: [sunRock(SUN), null, wx.blink({ delay: D }), wx.blink({ delay: D + 0.08 }), wx.blink({ delay: D + 0.14 })] },
  'sun-cloud-angled-rain-zap-02': { verb: 'the cloud drifts, then the bolt flashes and the rain falls', parts: [wx.zap([8.5, 18.5], { delay: D }), wx.rain([15.5, 21], { delay: D + 0.08 }), wx.rain([12.5, 21], { delay: D + 0.16 }), null, drift([12, 12.3])] },
  'sun-cloud-angled-zap': { verb: 'the bolt flashes under the cloud', parts: [null, null, wx.zap([12, 17.5])] },
  'sun-cloud-angled-zap-01': { verb: 'the sun rocks, then the bolt blinks', parts: [sunRock([5.5, 6.5]), null, wx.blink({ delay: D })] },
  'sun-cloud-angled-zap-02': { verb: 'the cloud drifts, then the bolt flashes', parts: [wx.zap([12, 18.5], { delay: D }), null, drift([12, 12.5])] },
  'sun-cloud-big-rain': { verb: 'the big drop falls from the cloud', parts: [null, null, wx.hail([12, 19])] },
  'sun-cloud-big-rain-01': { verb: 'the sun rocks, then the big drop blinks', parts: [sunRock([5.5, 6.5]), null, wx.blink({ delay: D })] },
  'sun-cloud-big-rain-02': { verb: 'the cloud drifts, then the big drop falls', parts: [drift([12, 12.5]), wx.hail([12, 19], { delay: D }), null] },
  'sun-cloud-fast-wind': { verb: 'the wind streaks rush under the cloud', parts: [null, wx.wind([10, 20]), wx.wind([20, 20.5], { delay: 0.08 }), null] },
  'sun-cloud-fast-wind-01': { verb: 'the sun rocks, then the wind streaks blink', parts: [sunRock([5.5, 6]), wx.blink({ delay: D }), wx.blink({ delay: D + 0.08 }), null] },
  'sun-cloud-fast-wind-02': { verb: 'the cloud drifts and the wind rushes under it', parts: [null, wx.wind([10.2, 20.5], { delay: D }), wx.wind([20.2, 21], { delay: D + 0.08 }), drift([12.2, 11.6])] },
  'sun-cloud-hailstone': { verb: 'the hailstones drop from the cloud', parts: [null, null, wx.hail([12, 18.3])] },
  'sun-cloud-hailstone-01': { verb: 'the sun rocks, then the hailstones blink', parts: [sunRock(SUN), null, wx.blink({ delay: D })] },
  'sun-cloud-hailstone-02': { verb: 'the cloud drifts, then the hailstones drop', parts: [null, drift([12, 11.8]), wx.hail([12, 18.3], { delay: D })] },
  'sun-cloud-little-rain': { verb: 'the light rain falls from the cloud', parts: [null, null, wx.rain([12, 18.3])] },
  'sun-cloud-little-rain-01': { verb: 'the sun rocks, then the light rain blinks', parts: [null, sunRock(SUN), wx.blink({ delay: D })] },
  'sun-cloud-little-rain-02': { verb: 'the cloud drifts, then the light rain falls', parts: [wx.rain([12, 18.3], { delay: D }), drift([12, 12]), null] },
  'sun-cloud-little-snow': { verb: 'the snowflake drifts down spinning', parts: [null, null, wx.snow([12, 19])] },
  'sun-cloud-little-snow-01': { verb: 'the sun rocks, then the snowflake blinks', parts: [sunRock(SUN), null, wx.blink({ delay: D })] },
  'sun-cloud-little-snow-02': { verb: 'the cloud drifts, then the snowflake drifts down', parts: [wx.snow([12, 19], { delay: D }), drift([12, 12]), null] },
  'sun-cloud-mid-rain': { verb: 'the three drops fall in turn', parts: [null, null, wx.hail([12, 14.8]), wx.hail([8.5, 20.3], { delay: 0.12 }), wx.hail([15.5, 20.3], { delay: 0.2 })] },
  'sun-cloud-mid-rain-01': { verb: 'the sun rocks, then the drops blink in turn', parts: [sunRock(SUN), null, wx.blink({ delay: D }), wx.blink({ delay: D + 0.1 }), wx.blink({ delay: D + 0.16 })] },
  'sun-cloud-mid-rain-02': { verb: 'the cloud drifts, then the drops fall in turn', parts: [drift([12, 12]), null, wx.hail([12, 14.8], { delay: D }), wx.hail([8.5, 20.3], { delay: D + 0.1 }), wx.hail([15.5, 20.3], { delay: D + 0.18 })] },
  'sun-cloud-mid-snow': { verb: 'the snowflake drifts down spinning', parts: [null, null, wx.snow([12, 17])] },
  'sun-cloud-mid-snow-01': { verb: 'the sun rocks, then the snowflake blinks', parts: [sunRock(SUN), null, wx.blink({ delay: D })] },
  'sun-cloud-mid-snow-02': { verb: 'the cloud drifts, then the snowflake drifts down', parts: [drift([12, 12.3]), wx.snow([12, 19], { delay: D }), null] },
  'sun-cloud-slow-wind': { verb: 'the slow wind ripples under the cloud', parts: [null, null, ride([12, 19.5], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'wind', ease: INOUT, dur: 1 })] },
  'sun-cloud-slow-wind-01': { verb: 'the sun rocks, then the wind blinks', parts: [null, sunRock(SUN), wx.blink({ delay: D })] },
  'sun-cloud-slow-wind-02': { verb: 'the cloud drifts and the slow wind ripples', parts: [ride([12, 19.5], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'wind', ease: INOUT, dur: 1, delay: D }), null, drift([12, 11.8])] },
  'sun-cloud-snow': { verb: 'the snow dots drift down from the cloud', parts: [null, null, wx.snow([12, 18.8])] },
  'sun-cloud-snow-01': { verb: 'the sun rocks, then the snow dots blink', parts: [sunRock(SUN), null, wx.blink({ delay: D })] },
  'sun-cloud-snow-02': { verb: 'the cloud drifts, then the snow dots drift down', parts: [null, drift([12, 12.3]), wx.snow([12, 18.8], { delay: D })] },

  // --- sunglasses, sunrise ---------------------------------------------------------------------------------
  sunglasses: {
    verb: 'the shades slide down the nose and back up',
    parts: [null, flex('X', [12, 16.5], [12, 16.5], [1, 1.2, 0.96, 1, 1], { as: 'smile', delay: 0.14 }), ride([7.8, 10.5], out(0, 1.2), { as: 'shades' }), ride([16.3, 10.5], out(0, 1.2), { as: 'shades' })],
  },
  sunrise: {
    verb: 'the sun rises over the horizon and the up arrow lifts',
    parts: [nudge([12, 7], 0, -1.2, { as: 'arrow' }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.16 }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.2 }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.24 }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.28 }), null, ride([12, 15], [[0, 0], [0, 1.6], [0, -0.6], [0, 0], [0, 0]], { as: 'sun', times: [0, 0.3, 0.62, 0.86, 1] })],
  },
  sunset: {
    verb: 'the sun sinks under the horizon and the down arrow drops',
    parts: [nudge([12, 7], 0, 1.2, { as: 'arrow' }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.28 }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.24 }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.2 }), blink({ as: 'ray', opacity: [1, 0.2, 1, 1, 1], delay: 0.16 }), null, ride([12, 15], [[0, 0], [0, 1.6], [0, -0.2], [0, 0], [0, 0]], { as: 'sun' })],
  },
  'super-mario-toad': {
    verb: 'the mushroom cap bobs and the eyes blink',
    parts: [null, hop([12, 10], 0.9, { as: 'cap' }), hop([12, 7], 0.9, { as: 'cap' }), hop([3.7, 10], 0.9, { as: 'cap' }), hop([20.3, 10], 0.9, { as: 'cap' }), blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 }), blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 })],
  },
  'super-mario': {
    verb: 'the cap tips and the moustache wiggles',
    parts: [wiggle([12, 12], [12, 7], -6, { as: 'cap' }), wiggle([12, 12], [12, 9], -6, { as: 'cap' }), wiggle([12, 12], [12, 6], -6, { as: 'cap' }), flex('X', [12, 17.4], [12, 17.4], [1, 1.2, 0.92, 1.06, 1], { as: 'moustache', delay: 0.1 }), null, blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 }), blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 })],
  },
  surfboard: {
    verb: 'the board rides a wave, rocking on its rail',
    parts: [wiggle([12, 20], C, 8, { as: 'board', dur: 0.86 }), wiggle([12, 20], [13.3, 11.1], 8, { as: 'board', dur: 0.86 }), wiggle([12, 20], [7.5, 16.5], 8, { as: 'board', dur: 0.86 })],
  },
}

export default settleSpecs(specs)
