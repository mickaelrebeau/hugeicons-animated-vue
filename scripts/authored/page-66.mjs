/**
 * Page 66 — surprise → tablet.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * Swipe gestures carry a corner arrow and a hand. Each number keeps the same
 * job in every direction, moving along the direction it names:
 * bare slides with speed lines · 01 (same geometry) pokes twice · 02 nudges ·
 * 03 wags from the wrist · 04 winds back and thrusts · 05 holds · 06 flings
 * the arrow off and back · 07 taps while the arrow blinks · 08 lifts while the
 * arrow redraws · 09 drags in a long sweep.
 *
 * Identical-geometry pairs get different jobs: sushi / -01, svg / -01,
 * swipe-* / -01, sword / -01, system-update / -01, table-lamp / -01,
 * tablet / -01.
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
  fall,
  flex,
  flip,
  hand,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  swing,
  tap,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })

/** One swipe icon: d = DIR key, v = variant, h/a = hand and arrow centres, handFirst = primitive order. */
const swipe = (d, v, h, a, handFirst) => {
  const [x, y] = DIR[d]
  const arrowNudge = (o = {}) => nudge(a, x * 1.2, y * 1.2, { as: 'arrow', delay: 0.2, ...o })
  const jobs = {
    bare: [ride(h, out(x * 1.6, y * 1.6), { as: 'hand', dur: 0.6 }), arrowNudge({ delay: 0.08 })],
    '01': [hand.poke(h, DIR[d]), arrowNudge({ delay: 0.3 })],
    '02': [hand.nudge(h, DIR[d]), arrowNudge()],
    '03': [hand.wag(h, DIR[d]), arrowNudge({ delay: 0.24 })],
    '04': [hand.thrust(h, DIR[d]), arrowNudge({ delay: 0.3 })],
    '05': [hand.hold(h, DIR[d]), pop(a, 1.3, { as: 'arrow', delay: 0.16 })],
    '06': [ride(h, out(x * 0.8, y * 0.8), { as: 'hand' }), fall(a, x * 3, y * 3, { as: 'arrow', delay: 0.1 })],
    '07': [tap(h), blink({ as: 'arrow', opacity: [1, 0.15, 1, 1, 1], delay: 0.16 })],
    '08': [hop(h, 1.2, { as: 'hand' }), retrace({ as: 'arrow', delay: 0.1, dur: 0.56 })],
    '09': [ride(h, [[0, 0], [-x * 0.6, -y * 0.6], [x * 2.6, y * 2.6], [x * 2.6, y * 2.6], [0, 0]], { as: 'hand', times: [0, 0.2, 0.5, 0.7, 1], ease: [INOUT, OUT, 'linear', INOUT], dur: 0.86 }), arrowNudge({ delay: 0.24 })],
  }
  const [handPart, arrowPart] = jobs[v]
  const verbs = {
    bare: x ? `the hand swipes ${d} trailing speed lines and the arrow leads` : `the hand swipes ${d} and the arrow leads`,
    '01': `the hand pokes ${d} twice and the arrow follows`,
    '02': `the hand nudges ${d} and the arrow follows`,
    '03': `the hand wags from the wrist while the arrow points ${d}`,
    '04': `the hand winds back and thrusts ${d}, kicking the arrow`,
    '05': `the hand swipes ${d} and holds while the arrow pops`,
    '06': `the hand flicks and the arrow flies off ${d}, re-entering behind`,
    '07': 'the hand taps and the arrow blinks',
    '08': 'the hand lifts and the arrow redraws itself',
    '09': `the hand drags in one long sweep ${d}`,
  }
  const spec = { verb: verbs[v], parts: handFirst ? [handPart, arrowPart] : [arrowPart, handPart] }
  if (v === 'bare' && x) spec.extras = [trail(x < 0 ? 'M22 13H20.5M22 16H21' : 'M2 13H3.5M2 16H3', x < 0 ? 1.4 : -1.4)]
  return spec
}

const SWIPES = {
  down: { a: [18.5, 5], rows: [['bare', [11.4, 11.7], 0], ['01', [11.4, 11.7], 0], ['02', [10.5, 12], 0], ['03', [11.4, 12.5], 1], ['04', [11, 12.5], 1], ['05', [11.2, 12], 1], ['06', [10.6, 12], 0], ['07', [10.2, 12.5], 1, [19.5, 5]], ['08', [9.7, 12.6], 0, [19.5, 5]]] },
  left: { a: [18, 4.5], rows: [['bare', [11.2, 12], 0], ['01', [11.2, 12], 0], ['02', [10.5, 12], 0], ['03', [11.4, 12.5], 1], ['04', [11, 12.5], 1, [17.5, 4.5]], ['05', [10.2, 12], 1], ['06', [10.6, 12], 0], ['07', [11.2, 12.5], 1], ['08', [10.7, 12.6], 0], ['09', [10.7, 12.4], 1, [18.8, 4.5]]] },
  right: { a: [18, 4.5], rows: [['bare', [11.2, 12], 0], ['01', [11.2, 12], 0], ['02', [10.5, 12], 0], ['03', [11.4, 12.5], 1], ['04', [11, 12.5], 1, [17.5, 4.5]], ['05', [10.7, 12], 1, [18.5, 4.5]], ['06', [10.6, 12], 0], ['07', [11.2, 12.5], 1], ['08', [10.7, 12.6], 0], ['09', [10.7, 12.4], 1, [18.8, 4.5]]] },
  up: { a: [18.5, 5], rows: [['bare', [11.2, 12], 0], ['01', [11.2, 12], 0], ['02', [10.5, 12], 0], ['03', [11.4, 12.5], 1], ['04', [11, 12.5], 1, [18, 5]], ['05', [11.2, 12], 1], ['06', [10.6, 12], 0], ['07', [10.2, 12.5], 1], ['08', [9.7, 12.6], 0, [19.5, 5]]] },
}
const swipeSpecs = Object.fromEntries(
  Object.entries(SWIPES).flatMap(([d, { a, rows }]) =>
    rows.map(([v, h, handFirst, a2]) => [v === 'bare' ? `swipe-${d}` : `swipe-${d}-${v}`, swipe(d, v, h, a2 || a, handFirst)]),
  ),
)

// ---------------------------------------------------------------------------

const specs = {
  surprise: {
    verb: 'the mouth drops open in an O and the brows jump',
    parts: [null, pop([12, 15.5], 1.3, { as: 'mouth' }), ride([12, 8.8], out(0, -1), { as: 'brows' })],
  },
  sushi: {
    verb: 'the rice grains on top blink and the roll nods',
    parts: [beat([12, 16.8], { delay: 0.3 }), null, blink({ as: 'grain', opacity: [1, 0.15, 1, 1, 1] }), blink({ as: 'grain', opacity: [1, 0.15, 1, 1, 1], delay: 0.12 })],
  },
  'sushi-01': {
    verb: 'the topping slice lifts off the rice and settles',
    parts: [null, ride([12, 9.1], out(0, -1.2), { as: 'topping' }), ride([10, 8], out(0, -1.2), { as: 'topping' }), ride([16.5, 8.5], out(0, -1.2), { as: 'topping' })],
  },
  'sushi-02': {
    verb: 'the chopsticks pinch the maki piece, which hops',
    parts: [hop([15, 9], 1, { as: 'maki', delay: 0.2 }), hop([15, 9], 1, { as: 'maki', delay: 0.2 }), wiggle([6, 22], [8.8, 12], 4, { as: 'stick' }), wiggle([2, 18], [12, 15.3], -4, { as: 'stick' })],
  },
  'sushi-03': {
    verb: 'the nigiri lifts on the chopsticks and the eye of fish roe blinks',
    parts: [ride([9.5, 9.5], out(0, -0.8), { as: 'topping' }), null, wiggle([2, 18], [12, 14.5], -4, { as: 'stick' }), wiggle([2, 14], [12, 9.5], 4, { as: 'stick' }), blink({ as: 'roe', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  suspicious: {
    verb: 'the narrowed eyes glance side to side',
    parts: [null, null, ride([12.1, 8.9], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'eyes', ease: INOUT, dur: 0.9 })],
  },
  'sustainable-energy': {
    verb: 'the cycle turns around the bolt, which flashes',
    parts: [lap(C, 360, { as: 'cycle', dur: 0.9 }), { ...pop(C, 1.2, { as: 'bolt', delay: 0.1 }), opacity: [1, 0.3, 1, 1] }],
  },
  svg: {
    verb: 'the SVG letters stamp down under the page',
    parts: [null, stamp([5.5, 19], { as: 'letters' }), stamp([11.8, 19], { as: 'letters' }), stamp([18.3, 19], { as: 'letters' })],
  },
  'svg-01': {
    verb: 'the S, V and G hop one after another',
    parts: [beat([12, 7.5], { delay: 0.3 }), hop([5.5, 19], 1.1, { as: 'letter' }), hop([11.8, 19], 1.1, { as: 'letter', delay: 0.1 }), hop([18.3, 19], 1.1, { as: 'letter', delay: 0.2 })],
  },
  'svg-02': {
    verb: 'the SVG label slides out of the page to the right and back',
    parts: [null, nudge([19.3, 16.5], 1.6, 0, { as: 'label' }), nudge([8.8, 16.5], 1.6, 0, { as: 'label' }), nudge([13.8, 16.5], 1.6, 0, { as: 'label' })],
  },
  swarm: {
    verb: 'the bees in the swarm bob one after another',
    parts: [hop([15, 5.5], 1, { as: 'bee' }), hop([5.9, 9], 1, { as: 'bee', delay: 0.12 }), hop([15.4, 15.7], 1, { as: 'bee', delay: 0.24 }), hop([15.5, 15.5], 1, { as: 'bee', delay: 0.24 })],
  },
  swatch: {
    verb: 'the swatch cards fan open from their pivot',
    parts: [wiggle([7.5, 17.5], [16, 12.5], 10, { as: 'card' }), wiggle([7.5, 17.5], [12, 18.5], 6, { as: 'card', delay: 0.06 }), null, pop([7.5, 17.5], 2, { as: 'pivot' }), null],
  },
  'swimming-cap': {
    verb: 'the cap stretches on and the goggles snap down',
    parts: [ride([5.3, 9.5], out(-0.4, 0), { as: 'cap' }), ride([18.7, 9.5], out(0.4, 0), { as: 'cap' }), flex('X', [12, 8], [12, 8], [1, 1.06, 0.98, 1, 1], { as: 'cap' }), ride([12, 19], out(0, -1), { as: 'goggles', delay: 0.14 })],
  },
  swimming: {
    verb: 'the swimmer strokes forward and the wave ripples',
    parts: [wiggle([12, 14], [8.5, 10.1], -8, { as: 'arm' }), ride([19, 10], out(0.6, 0), { as: 'head' }), ride([11.5, 17.9], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'wave', ease: INOUT, dur: 0.86 })],
  },
  ...swipeSpecs,
  'swiss-franc': {
    verb: 'the franc stroke rewrites and the two bars draw',
    parts: [line(0, { as: 'f', dur: 0.6 }), draw({ as: 'bar', delay: 0.16 }), draw({ as: 'bar', delay: 0.24 })],
  },
  'switch-camera': {
    verb: 'the switch arrows spin around the camera',
    parts: [beat([12, 12.5], { delay: 0.3 }), null, lap(C, 180, { as: 'arrows', dur: 0.8 }), pop([12, 12.5], 1.5, { as: 'lens', delay: 0.2 })],
  },

  // --- swords ---------------------------------------------------------------------------------
  sword: {
    verb: 'the sword slashes from its hilt',
    parts: [wiggle([5, 19], [3.5, 20.5], -14, { as: 'sword' }), wiggle([5, 19], [6, 18], -14, { as: 'sword' }), wiggle([5, 19], [14.5, 9.5], -14, { as: 'sword' }), wiggle([5, 19], [7.5, 16.5], -14, { as: 'sword' })],
  },
  'sword-01': {
    verb: 'the sword thrusts forward and the blade glints',
    parts: [ride([3.5, 20.5], out(1.2, -1.2), { as: 'sword' }), ride([6, 18], out(1.2, -1.2), { as: 'sword' }), { ...ride([14.5, 9.5], out(1.2, -1.2), { as: 'blade' }), opacity: [1, 0.5, 1, 1, 1] }, ride([7.5, 16.5], out(1.2, -1.2), { as: 'sword' })],
  },
  'sword-02': {
    verb: 'the pommel spins and the sword raises',
    parts: [lap([4, 20], 90, { as: 'pommel', dur: 0.6 }), ride([6.8, 17.3], out(0.6, -0.6), { as: 'sword', delay: 0.1 }), ride([14.5, 9.5], out(0.6, -0.6), { as: 'sword', delay: 0.1 }), ride([7.5, 16.5], out(0.6, -0.6), { as: 'sword', delay: 0.1 })],
  },
  'sword-03': {
    verb: 'the two crossed swords clash',
    parts: [wiggle([12, 12], [13, 12], 8, { as: 'sword' }), wiggle([12, 12], [11, 12], -8, { as: 'sword' })],
  },

  // --- system update ---------------------------------------------------------------------------------
  'system-update': {
    verb: 'the gear turns as the update arrows cycle inside it',
    parts: [lap(C, 45, { as: 'gear', dur: 0.66 }), lap(C, -360, { as: 'arrows', dur: 0.9 })],
  },
  'system-update-01': {
    verb: 'the update arrows rewrite inside the gear',
    parts: [beat(C, { delay: 0.3 }), line(0, { as: 'arrows', dur: 0.66 })],
  },
  'system-update-02': {
    verb: 'the update arrows spin inside the cog, which rocks',
    parts: [lap(C, 360, { as: 'arrows', dur: 0.9 }), wiggle(C, C, -20, { as: 'cog' })],
  },

  // --- clothes, tables ---------------------------------------------------------------------------------
  't-shirt': {
    verb: 'the sleeves lift and the collar rewrites',
    parts: [null, hop([12, 8], 0.9, { as: 'shirt' }), line(0.1, { as: 'collar' }), line(0.18, { as: 'v' })],
  },
  'table-01': {
    verb: 'the tabletop rocks on its legs and the drawer knob pops',
    parts: [wiggle([12, 20], C, 3, { as: 'table' }), pop([12, 7], 1.6, { as: 'knob', delay: 0.14 })],
  },
  'table-02': {
    verb: 'the tabletop presses down and the rail line rewrites',
    parts: [ride([12, 4], out(0, 0.8), { as: 'top' }), flex('X', [12, 20], C, [1, 1.06, 0.98, 1, 1], { as: 'legs' }), line(0.14, { as: 'rail' })],
  },
  'table-03': {
    verb: 'the drawer slides out of the table and back',
    parts: [null, null, null, null, ride([12, 7.5], out(0, 1), { as: 'drawer' })],
  },
  'table-columns-split': {
    verb: 'the two column halves slide apart from the dashed split',
    parts: [ride([6, 12], out(-1, 0), { as: 'left' }), ride([20, 12], out(1, 0), { as: 'right' }), ride([6, 12], out(-1, 0), { as: 'left' }), loop({ as: 'split' }), ride([6, 12], out(-1, 0), { as: 'left' }), ride([6, 8], out(-1, 0), { as: 'left' }), ride([6, 16], out(-1, 0), { as: 'left' }), ride([20, 12], out(1, 0), { as: 'right' }), ride([20, 8], out(1, 0), { as: 'right' }), ride([20, 16], out(1, 0), { as: 'right' })],
  },
  'table-lamp': {
    verb: 'the lamp shade tilts on its stem over the table',
    parts: [null, null, null, null, wiggle([12, 7], [12, 4.5], 10, { as: 'shade' }), null],
  },
  'table-lamp-01': {
    verb: 'the lamp switches on: the shade pops and the drawer knob blinks',
    parts: [null, null, null, blink({ as: 'knob', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), pop([12, 4.5], 1.14, { as: 'shade' }), null],
  },
  'table-lamp-02': {
    verb: 'the lamp pull cord is tugged and the shade nods',
    parts: [null, null, null, null, null, wiggle([8, 6], [8, 4], 8, { as: 'shade', delay: 0.14 }), null, ride([11, 6.8], out(0, 1), { as: 'cord' })],
  },
  'table-round': {
    verb: 'the round top spins on its pedestal',
    parts: [{ as: 'top', origin: [12, 6.5], transform: ['scaleX(1)', 'scaleX(-1)', 'scaleX(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.9 }, beat([12, 19], { delay: 0.4 }), null],
  },
  'table-rows-split': {
    verb: 'the two row halves slide apart from the dashed split',
    parts: [ride([12, 18], out(0, 1), { as: 'bottom' }), ride([12, 4], out(0, -1), { as: 'top' }), ride([12, 18], out(0, 1), { as: 'bottom' }), loop({ as: 'split' }), ride([12, 18], out(0, 1), { as: 'bottom' }), ride([8, 18], out(0, 1), { as: 'bottom' }), ride([16, 18], out(0, 1), { as: 'bottom' }), ride([12, 4], out(0, -1), { as: 'top' }), ride([8, 4], out(0, -1), { as: 'top' }), ride([16, 4], out(0, -1), { as: 'top' })],
  },
  'table-tennis-bat': {
    verb: 'the bat swings to hit the ball',
    parts: [wiggle([3, 21], [11, 13], -14, { as: 'bat' }), wiggle([3, 21], [12.1, 12], -14, { as: 'bat' })],
  },
  table: {
    verb: 'the table rows rewrite one after another',
    parts: [null, line(0), line(0.08), line(0.16), draw({ as: 'divider', delay: 0.24 })],
  },

  // --- tablets ---------------------------------------------------------------------------------
  tablet: {
    verb: 'the home dot pops on the tablet',
    parts: [null, pop([12, 19], 2, { as: 'dot' })],
  },
  'tablet-01': {
    verb: 'the tablet turns a quarter onto its side and back',
    parts: [{ as: 'tablet', origin: C, transform: ['rotate(0deg)', 'rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.9 }, swing(C, [12, 19], [0, 90, 90, 0, 0], { as: 'tablet', times: [0, 0.26, 0.72, 1, 1], ease: [INOUT, 'linear', OUT, 'linear'], dur: 0.9 })],
  },
  'tablet-02': {
    verb: 'the speaker slot blinks and the home dot pops',
    parts: [null, blink({ as: 'speaker', opacity: [1, 0.1, 1, 1, 1] }), pop([12, 19], 2, { as: 'dot', delay: 0.14 })],
  },
  'tablet-connected-bluetooth': {
    verb: 'the bluetooth mark pulses beside the tablet',
    parts: [wave([17.5, 12], { as: 'signal' }), null, null],
  },
  'tablet-connected-usb': {
    verb: 'the USB plug pushes into the tablet',
    parts: [null, null, nudge([16, 12], -1.2, 0, { as: 'plug' })],
  },
  'tablet-connected-wifi': {
    verb: 'the wifi arcs pulse beside the tablet',
    parts: [beat(C, { delay: 0.3 }), null, wave([17, 12.5], { as: 'signal' })],
  },
  'tablet-pen': {
    verb: 'the pen nib writes a small loop on the tablet',
    parts: [null, null, ride([14.5, 12], [[0, 0], [-0.8, -0.6], [0.6, -0.8], [0.4, 0.4], [0, 0]], { as: 'nib', ease: INOUT, dur: 0.86 })],
  },
}

export default settleSpecs(specs)
