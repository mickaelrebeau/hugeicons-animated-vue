/**
 * Page 62 — snapchat → spray-can.
 *
 * Gallery page (80 public icons). The hidden handcrafted snow,
 * sort-by-down-01, sort-by-up-01 and sparkles sit in this span and are
 * skipped. sort-by-down / sort-by-up share geometry with those originals
 * (which bounce the whole arrow), so they swap their two blocks instead.
 *
 * Sorting icons move their arrow the way it points and give the list lines a
 * different reshuffle per number. Solar panels keep the panel and let the sun
 * or the bolt act. Sofas sink, bounce or lean.
 *
 * Identical-geometry pairs get different jobs: sofa / -01,
 * soft-drink / -01, solar-panel / -01, solid-line / -01, sorting / -01,
 * sorting-az / -az01, sorting-za / -za01, speed-train / -01.
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
  rays,
  burst,
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
/** A list line that shrinks back toward its left edge (x0) and regrows. */
const shrinkL = (x0, c, delay = 0) => scaleFrom('X', [x0, c[1]], c, [1, 0.3, 1.06, 1], { as: 'line', times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], delay, dur: 0.56 })
const sortArrow = (dy, o = {}) => nudge([5.5, 12], 0, dy, { as: 'arrow', ...o })
const sunRays = (idx, delay = 0) => blink({ as: 'ray', opacity: [1, 0.15, 1, 1, 1], delay: delay + idx * 0.05 })

// ---------------------------------------------------------------------------

const specs = {
  // --- snapchat, socks, soda ---------------------------------------------------------------------------------
  snapchat: {
    verb: 'the ghost wiggles its arms and bobs',
    parts: [hop(C, 1, { as: 'ghost' }), wiggle([5.8, 12.5], [3.9, 12.5], 14, { as: 'arm' }), wiggle([18.2, 12.5], [20.1, 12.5], -14, { as: 'arm' })],
  },
  socks: {
    verb: 'the two socks kick one after the other',
    parts: [
      wiggle([17, 4.5], [17, 4.5], -8, { as: 'right', delay: 0.18 }),
      wiggle([17, 4.5], [14.8, 13.7], -8, { as: 'right', delay: 0.18 }),
      wiggle([9, 4.5], [9, 4.5], 8, { as: 'left' }),
      wiggle([9, 4.5], [5.3, 13.6], 8, { as: 'left' }),
      wiggle([17, 4.5], [13.5, 17], -8, { as: 'right', delay: 0.18 }),
      wiggle([9, 4.5], [6, 15.5], 8, { as: 'left' }),
      wiggle([17, 4.5], [19, 14.5], -8, { as: 'right', delay: 0.18 }),
    ],
  },
  'soda-can': {
    verb: 'the can fizzes with a shake and its logo pops',
    parts: [shake(C, { as: 'can' }), shake([12, 5], { as: 'can' }), shake([12, 19], { as: 'can' }), hop([12, 2], 1, { as: 'tab', delay: 0.1 }), pop(C, 1.2, { as: 'logo', delay: 0.2 })],
  },

  // --- sofas ---------------------------------------------------------------------------------
  sofa: {
    verb: 'the seat cushion sinks and springs back',
    parts: [null, null, ride([12, 13], [[0, 0], [0, 0.8], [0, -0.2], [0, 0], [0, 0]], { as: 'seat' })],
  },
  'sofa-01': {
    verb: 'the whole sofa bounces on its legs',
    parts: [{ ...scaleFrom('Y', [12, 20], [12, 18.5], [1, 0.7, 1.06, 1], { as: 'legs', times: [0, 0.3, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }) }, ride([12, 6.5], out(0, 0.9), { as: 'sofa', dur: 0.56 }), ride([12, 13], out(0, 0.9), { as: 'sofa', dur: 0.56 })],
  },
  'sofa-02': {
    verb: 'the two halves of the back flex apart at the seam',
    parts: [null, blink({ as: 'seam', opacity: [1, 0.15, 1, 1, 1], delay: 0.1 }), flex('X', C, [12, 6.5], [1, 1.06, 0.98, 1, 1], { as: 'back' }), null],
  },
  'sofa-03': {
    verb: 'the backrest leans back and the seat settles',
    parts: [null, ride([12, 12.4], out(0, 0.6), { as: 'seat', delay: 0.1 }), wiggle([12, 9], [12, 7], -5, { as: 'back' })],
  },
  'sofa-single': {
    verb: 'the armchair cushion puffs up and settles',
    parts: [null, null, flex('Y', [12, 12.5], [12, 12], [1, 1.8, 0.9, 1, 1], { as: 'cushion' }), wiggle([12, 9], [12, 5.5], -5, { as: 'back', delay: 0.1 })],
  },

  // --- soft drinks, software ---------------------------------------------------------------------------------
  'soft-drink': {
    verb: 'the straw bobs as someone sips',
    parts: [ride([15, 4.3], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.6], [0, 0]], { as: 'straw', ease: 'easeInOut' }), null, null, null, null],
  },
  'soft-drink-01': {
    verb: 'the liquid level lines drop one after another',
    parts: [null, null, null, ride([12, 12], out(0, 1), { as: 'level' }), ride([12, 16], out(0, 1), { as: 'level', delay: 0.08 })],
  },
  'soft-drink-02': {
    verb: 'the straw wobbles in the cup and a bubble blinks',
    parts: [null, wiggle([13.6, 19], [16.3, 10.5], 6, { as: 'straw' }), wave([11.8, 9.5], { as: 'lid', delay: 0.1 }), blink({ as: 'bubble', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'software-license': {
    verb: 'the seal pops on the licence and its ribbon swings',
    parts: [null, line(0.2), pop([12, 14], 1.16, { as: 'seal' }), wiggle([12, 16.5], [12, 19.3], 10, { as: 'ribbon', delay: 0.1 })],
  },
  'software-uninstall': {
    verb: 'the X twists and the disc lifts off the box',
    parts: [ride([11.5, 10], out(0, -1), { as: 'disc' }), ride([11.5, 8], out(0, -1), { as: 'disc' }), null, ride([16.4, 5.6], out(0, -1), { as: 'disc' }), lap([19, 19.5], 90, { as: 'x', dur: 0.6, delay: 0.1 })],
  },
  software: {
    verb: 'the disc spins out of the drive and back',
    parts: [lap([12, 10], 360, { as: 'disc' }), ride([12, 8.5], out(0, -0.8), { as: 'disc' }), null, blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), ride([16.9, 5.6], out(0, -0.8), { as: 'disc' })],
  },

  // --- soil ---------------------------------------------------------------------------------
  'soil-moisture-field': {
    verb: 'the sprout lifts and the water drop falls into the soil',
    parts: [wiggle([8, 9], [5, 6], -10, { as: 'leaf' }), wiggle([8, 9], [10, 7], 10, { as: 'leaf' }), null, line(0.2), line(0.28), line(0.36), ride([18.5, 18], [[0, 0], [0, -1.2], [0, 0.4], [0, 0], [0, 0]], { as: 'drop' })],
  },
  'soil-moisture-global': {
    verb: 'the field arcs light outward and the drop bobs',
    parts: [hop([19.5, 19], 1, { as: 'drop' }), wave([17.4, 15], { as: 'arc', delay: 0.06 }), wave([15.3, 13], { as: 'arc', delay: 0.12 }), wave([13.2, 11], { as: 'arc', delay: 0.18 }), null, null, null],
  },
  'soil-temperature-field': {
    verb: 'the sprout leaves sway and the thermometer rises',
    parts: [wiggle([9, 9], [6, 6], -10, { as: 'leaf' }), wiggle([9, 9], [11, 7], 10, { as: 'leaf' }), null, null, null, null, rise('Y', [19, 21], [19, 15], { as: 'thermometer' })],
  },
  'soil-temperature-global': {
    verb: 'the thermometer rises and the field arcs pulse',
    parts: [ride([13.4, 17], out(0, -0.8), { as: 'flame' }), wave([15.3, 13], { as: 'arc', delay: 0.1 }), wave([13.2, 11], { as: 'arc', delay: 0.18 }), rise('Y', [19, 22], [19, 16.5], { as: 'thermometer' }), null, null, null],
  },

  // --- solar ---------------------------------------------------------------------------------
  'solar-energy': {
    verb: 'the cycle turns and the sun at its centre pops',
    parts: [lap(C, 360, { as: 'cycle', dur: 0.9 }), pop(C, 1.2, { as: 'sun', delay: 0.1 })],
  },
  'solar-panel': {
    verb: 'the panel tilts toward the sun on its stand',
    parts: [wiggle([12, 16], [12, 10], 6, { as: 'panel' }), null, wiggle([12, 16], [9, 10], 6, { as: 'panel' }), wiggle([12, 16], [15, 10], 6, { as: 'panel' }), wiggle([12, 16], [12, 10], 6, { as: 'panel' })],
  },
  'solar-panel-01': {
    verb: 'light glints across the panel cells',
    parts: [beat([12, 10], { delay: 0.3 }), null, blink({ as: 'cell', opacity: [1, 0.15, 1, 1, 1] }), blink({ as: 'cell', opacity: [1, 0.15, 1, 1, 1], delay: 0.12 }), blink({ as: 'cell', opacity: [1, 0.15, 1, 1, 1], delay: 0.06 })],
    extras: [{ as: 'glint', tag: 'path', attrs: { d: 'M4 6L6 4', strokeWidth: '1.2' }, transform: ['translateX(0px)', 'translateX(0px)', 'translateX(7px)', 'translateX(14px)'], opacity: [0, 0, 1, 0], times: [0, 0.1, 0.45, 0.8], ease: ['linear', 'linear', 'linear'], dur: 0.8 }],
  },
  'solar-panel-02': {
    verb: 'the panel stripe flashes and the panel nods on its stand',
    parts: [beat([11, 9], { delay: 0.2 }), null, line(0, { as: 'cells' }), null, blink({ as: 'stripe', opacity: [1, 0.15, 1, 0.15, 1] })],
  },
  'solar-panel-03': {
    verb: 'the sun rays blink around the rising sun above the panel',
    parts: [ride([12, 7.5], out(0, -0.8), { as: 'sun' }), null, null, null, ...[0, 1, 2, 3, 4].map((i) => sunRays(i))],
  },
  'solar-panel-04': {
    verb: 'the bolt flashes above the panel',
    parts: [beat([12, 14], { delay: 0.24 }), null, null, null, flash([12, 5.5], 1.3)],
  },
  'solar-panel-05': {
    verb: 'the sun pops and its rays blink above the panel',
    parts: [pop([12, 6.5], 1.16, { as: 'sun' }), null, null, null, null, ...[0, 1, 2, 3, 4].map((i) => sunRays(i, 0.08))],
  },
  'solar-power': {
    verb: 'the sun rises over the panel and the panel brightens',
    parts: [beat([12, 14.5], { delay: 0.3 }), null, null, ride([12, 5.5], [[0, 0], [0, 1.6], [0, -0.4], [0, 0], [0, 0]], { as: 'sun', times: [0, 0.3, 0.62, 0.86, 1] }), null, null],
  },
  'solar-system-01': {
    verb: 'the planets swing around the sun on their orbits',
    parts: [null, swing(C, [5, 5], [0, 20, -6, 2, 0], { as: 'planet' }), swing(C, [19, 19], [0, 20, -6, 2, 0], { as: 'planet' }), swing(C, [8, 15], [0, -30, 8, -2, 0], { as: 'planet', delay: 0.06 }), null, pop(C, 2, { as: 'sun', delay: 0.1 })],
  },
  'solar-system': {
    verb: 'the sun turns at the centre of its orbit',
    parts: [lap(C, 90, { as: 'sun', dur: 0.7 }), beat(C, { delay: 0.3 })],
  },
  'solid-line-01': {
    verb: 'the line draws itself across',
    parts: [draw({ as: 'line' })],
  },
  'solid-line-02': {
    verb: 'the solid-line tile nods',
    parts: [{ ...beat(C), transform: ['scale(1)', 'scale(0.9)', 'scale(1.04)', 'scale(1)'] }],
  },
  'solid-line': {
    verb: 'the line thickens toward the middle and back',
    parts: [{ as: 'line', origin: C, transform: ['scale(1, 1)', 'scale(0.9, 2)', 'scale(1.02, 0.9)', 'scale(1, 1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }],
  },

  // --- sort ---------------------------------------------------------------------------------
  'sort-by-down-02': {
    verb: 'the arrow drops and the lines rewrite from short to long',
    parts: [line(0.1), line(0.2), line(0), nudge([18.5, 15], 0, 1.4)],
  },
  'sort-by-down': {
    verb: 'the two blocks trade places and the arrow rewrites',
    parts: [line(0.12, { as: 'arrow' }), ride([6.5, 6.5], out(0, 1.6), { as: 'block' }), ride([6.5, 17.5], out(0, -1.6), { as: 'block' })],
  },
  'sort-by-up-02': {
    verb: 'the arrow rises and the lines rewrite from short to long',
    parts: [line(0.1), line(0.2), line(0), nudge([18.5, 9], 0, -1.4)],
  },
  'sort-by-up': {
    verb: 'the two blocks trade places upward and the arrow rewrites',
    parts: [line(0.12, { as: 'arrow' }), ride([6.5, 6.5], out(0, 1.6), { as: 'block', delay: 0.06 }), ride([6.5, 17.5], out(0, -1.6), { as: 'block' })],
  },
  'sort-descending': {
    verb: 'the arrow drops down its curve and the lines shrink',
    parts: [nudge([17.3, 17.5], 0, 1.2, { delay: 0.12 }), line(0, { as: 'curve', dur: 0.6 }), shrinkL(9, [14, 6]), shrinkL(9, [12.5, 10], 0.08)],
  },
  sorting: {
    verb: 'the list lines shrink back to the margin in turn',
    parts: [shrinkL(11, [15, 8], 0.08), shrinkL(11, [13.5, 12], 0.16), shrinkL(11, [12.5, 16], 0.24), shrinkL(11, [16, 4]), null],
  },
  'sorting-01': {
    verb: 'the arrow pushes down and the lines rewrite',
    parts: [line(0.1), line(0.18), line(0.26), line(0.02), sortArrow(1.2)],
  },
  'sorting-02': {
    verb: 'the arrow lifts and the lines rewrite from the bottom up',
    parts: [line(0.1), line(0.18), line(0.26), line(0.02), sortArrow(-1.2)],
  },
  'sorting-03': {
    verb: 'the centred lines pinch in and the arrow nudges',
    parts: [flex('X', [15.5, 8], [15.5, 8], [1, 0.4, 1.06, 1, 1], { as: 'line', delay: 0.06 }), flex('X', [15, 12], [15, 12], [1, 0.4, 1.06, 1, 1], { as: 'line', delay: 0.12 }), flex('X', [15, 16], [15, 16], [1, 0.4, 1.06, 1, 1], { as: 'line', delay: 0.18 }), flex('X', [15.5, 4], [15.5, 4], [1, 0.4, 1.06, 1, 1], { as: 'line' }), sortArrow(1)],
  },
  'sorting-04': {
    verb: 'the equal lines slide right in turn like a stack being sorted',
    parts: [ride([16, 8], out(1, 0), { as: 'line', delay: 0.06 }), ride([16, 12], out(1, 0), { as: 'line', delay: 0.12 }), ride([16, 16], out(1, 0), { as: 'line', delay: 0.18 }), ride([16, 4], out(1, 0), { as: 'line' }), sortArrow(1.2, { delay: 0.1 })],
  },
  'sorting-05': {
    verb: 'the two arrows push apart and the lines shrink',
    parts: [shrinkL(11, [14.5, 10], 0.08), shrinkL(11, [13.5, 14], 0.16), shrinkL(11, [12.5, 18], 0.24), shrinkL(11, [16, 6]), nudge([5, 18], 0, 1, { as: 'arrow' }), nudge([5, 6], 0, -1, { as: 'arrow' })],
  },
  'sorting-az': {
    verb: 'the two swap arrows sweep around the letters',
    parts: [sweep({ as: 'arc' }), sweep({ as: 'arc', delay: 0.12 }), null, null, null],
  },
  'sorting-az01': {
    verb: 'the A and Z hop in turn between the swap arrows',
    parts: [null, null, hop([17, 12], 1.2, { as: 'letter', delay: 0.14 }), hop([5.5, 12], 1.2, { as: 'letter' }), blink({ as: 'dash', opacity: [1, 0.1, 1, 1, 1], delay: 0.07 })],
  },
  'sorting-az02': {
    verb: 'the arrow drops and the letters pop from A to Z',
    parts: [pop([7, 17.5], 1.2, { as: 'letter', delay: 0.16 }), pop([7, 6], 1.2, { as: 'letter' }), nudge([17.5, 12], 0, 1.2, { as: 'arrow', delay: 0.06 })],
  },
  'sorting-down': {
    verb: 'the three arrows push down one after another',
    parts: [line(0.24), line(0.3), nudge([8, 5.5], 0, 1.1, { as: 'arrow' }), nudge([12, 18.5], 0, 1.1, { as: 'arrow', delay: 0.16 }), nudge([16, 5.5], 0, 1.1, { as: 'arrow', delay: 0.08 })],
  },
  'sorting-nine-one': {
    verb: 'the arrow drops and the nine and one hop in turn',
    parts: [hop([7, 17.4], 1.1, { as: 'digit', delay: 0.12 }), hop([7, 6.5], 1.1, { as: 'digit' }), nudge([16.5, 12], 0, 1.2, { as: 'arrow', delay: 0.06 })],
  },
  'sorting-one-nine': {
    verb: 'the arrow drops and the one and nine flip in turn',
    parts: [flip([7, 6.4], 1, { as: 'digit' }), flip([7, 17.5], 1, { as: 'digit', delay: 0.12 }), nudge([16.5, 12], 0, 1.2, { as: 'arrow', delay: 0.06 })],
  },
  'sorting-up': {
    verb: 'the three arrows push up one after another',
    parts: [line(0.24), line(0.3), nudge([16, 18.5], 0, -1.1, { as: 'arrow', delay: 0.08 }), nudge([12, 5.5], 0, -1.1, { as: 'arrow', delay: 0.16 }), nudge([8, 18.5], 0, -1.1, { as: 'arrow' })],
  },
  'sorting-za': {
    verb: 'the arrow drops past the Z and A',
    parts: [null, null, nudge([17.5, 12], 0, 1.4, { as: 'arrow' })],
  },
  'sorting-za01': {
    verb: 'the Z and A pop one after the other',
    parts: [pop([7, 6.5], 1.2, { as: 'letter' }), pop([7, 18], 1.2, { as: 'letter', delay: 0.14 }), null],
  },

  // --- sound, source ---------------------------------------------------------------------------------
  soundcloud: {
    verb: 'the sound bars flicker and the cloud nods',
    parts: [blink({ as: 'bars', opacity: [1, 0.2, 1, 0.2, 1] }), beat([16.5, 12], { delay: 0.2 })],
  },
  'source-code-circle': {
    verb: 'the brackets push apart and the slash redraws inside the ring',
    parts: [null, nudge([17, 12], 0.9, 0, { as: 'bracket' }), nudge([7, 12], -0.9, 0, { as: 'bracket' }), draw({ as: 'slash', delay: 0.1 })],
  },
  'source-code-square': {
    verb: 'the slash flips and the brackets pinch in inside the tile',
    parts: [nudge([17, 12], -0.8, 0, { as: 'bracket', delay: 0.1 }), nudge([7, 12], 0.8, 0, { as: 'bracket', delay: 0.1 }), flip(C, 1, { as: 'slash' }), null],
  },
  'source-code': {
    verb: 'the brackets push apart and the slash rewrites between them',
    parts: [nudge([18.5, 11.5], 1.2, 0, { as: 'bracket' }), nudge([5.5, 11.5], -1.2, 0, { as: 'bracket' }), line(0.1, { as: 'slash' })],
  },

  // --- space ---------------------------------------------------------------------------------
  spaceship: {
    verb: 'the saucer hovers and its legs lift',
    parts: [ride([12, 6.8], out(0, -1.2), { as: 'ship' }), ride([12, 9.8], out(0, -1.2), { as: 'ship' }), blink({ as: 'beam', opacity: [1, 0.1, 1, 0.1, 1] }), ride([17.5, 19], out(0, -0.6), { as: 'leg', delay: 0.06 }), ride([6.5, 19], out(0, -0.6), { as: 'leg', delay: 0.06 })],
  },
  spades: {
    verb: 'the spade flips like a card being turned',
    parts: [flip([12, 12.2], 1, { as: 'spade' })],
  },
  spaghetti: {
    verb: 'the noodles twirl up on the fork above the bowl',
    parts: [null, wiggle([9, 13], [9, 10], -8, { as: 'noodle' }), wiggle([17, 13], [17.3, 10.5], 8, { as: 'noodle', delay: 0.06 }), lap([9, 12], 360, { as: 'twirl' }), ride([12.7, 5.8], out(0, -0.8), { as: 'fork' })],
  },
  spam: {
    verb: 'the warning octagon rattles and the bang stretches',
    parts: [shake(C), flex('Y', [12, 8], [12, 10], [1, 1.2, 0.95, 1, 1], { as: 'bang' }), pop([12, 15.8], 2, { as: 'dot', delay: 0.2 })],
  },
  'spartan-helmet': {
    verb: 'the helmet crest sways and the eye slit glints',
    parts: [wiggle([12, 22], [12, 12.2], 5, { as: 'helmet' }), line(0.2, { as: 'slit' }), pop([12, 8], 2, { as: 'rivet', delay: 0.14 })],
  },
  spatula: {
    verb: 'the spatula flips something over',
    parts: [wiggle([3, 21], [11.9, 12.1], -12, { as: 'spatula' }), wiggle([3, 21], [16.3, 9.6], -12, { as: 'spatula' }), wiggle([3, 21], [14.5, 7.8], -12, { as: 'spatula' })],
  },
  'speaker-01': {
    verb: 'the woofer cone thumps',
    parts: [null, { as: 'woofer', origin: [12, 14.5], transform: ['scale(1)', 'scale(1.16)', 'scale(0.94)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.4, 0.58, 1], ease: 'easeInOut', dur: 0.7 }, blink({ as: 'led', opacity: [1, 0.15, 1, 1, 1], delay: 0.2 })],
  },
  speaker: {
    verb: 'the woofer and tweeter thump in turn',
    parts: [null, pop([12, 15], 1.14, { as: 'woofer' }), pop([12, 7], 1.24, { as: 'tweeter', delay: 0.14 })],
  },
  'speech-to-text': {
    verb: 'the voice bars wave and the text line rewrites',
    parts: [line(0.24, { as: 'text' }), flex('Y', [6.5, 6], [6.5, 6], [1, 1.4, 0.7, 1, 1], { as: 'voice' }), line(0.1, { as: 'frame', dur: 0.6 })],
  },
  speech: {
    verb: 'the speaker head nods as the sound arcs pulse',
    parts: [wave([19.6, 12], { as: 'sound', delay: 0.1 }), wiggle([7.5, 20], [7.5, 12], -5, { as: 'head' })],
  },

  // --- trains ---------------------------------------------------------------------------------
  'speed-train': {
    verb: 'the train shoots forward trailing speed lines',
    wrap: ride(C, out(-1.4, 0), { as: 'train', dur: 0.62 }),
    parts: [null, null, null, null, null, null, null],
    extras: [trail('M22.5 6H24M22.5 9H23.5', 1.4)],
  },
  'speed-train-01': {
    verb: 'the train sways on the rails and the rail ties blink by',
    parts: [ride([12, 9], [[0, 0], [0, -0.6], [0, 0.2], [0, -0.4], [0, 0]], { as: 'train', dur: 0.66 }), ride([5, 10], [[0, 0], [0, -0.6], [0, 0.2], [0, -0.4], [0, 0]], { as: 'train', dur: 0.66 }), ride([16.5, 7.5], [[0, 0], [0, -0.6], [0, 0.2], [0, -0.4], [0, 0]], { as: 'train', dur: 0.66 }), null, blink({ as: 'tie', opacity: [1, 0.1, 1, 1, 1], delay: 0.16 }), blink({ as: 'tie', opacity: [1, 0.1, 1, 1, 1], delay: 0.08 }), blink({ as: 'tie', opacity: [1, 0.1, 1, 1, 1] })],
  },
  'speed-train-02': {
    verb: 'the nose window flashes and the train lunges',
    parts: [ride([12, 9], out(-0.8, 0), { as: 'train', delay: 0.1 }), ride([9, 13], out(-0.8, 0), { as: 'train', delay: 0.1 }), blink({ as: 'window', opacity: [1, 0.1, 1, 1, 1] }), null, null, null, null],
  },
  sperm: {
    verb: 'the tail whips and the head darts forward',
    parts: [ride([14.6, 9.4], out(0.8, -0.8), { as: 'head', delay: 0.06 }), { as: 'tail', origin: [6.5, 17.5], transform: ['skewX(0deg)', 'skewX(14deg)', 'skewX(-10deg)', 'skewX(5deg)', 'skewX(0deg)'], times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut', dur: 0.66 }],
  },
  sphere: {
    verb: 'the sphere turns: its highlight and band slide across',
    parts: [ride([12, 7.8], [[0, 0], [1.4, 0], [-0.4, 0], [0, 0], [0, 0]], { as: 'highlight' }), null, { as: 'band', origin: C, transform: ['scaleY(1)', 'scaleY(-1)', 'scaleY(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.86 }],
  },
  spirals: {
    verb: 'the spiral winds once around',
    parts: [lap([10.1, 12], 360, { as: 'spiral', dur: 0.9 })],
  },
  'spline-pointer': {
    verb: 'the curve handles pull and the pointer clicks',
    parts: [ride([18.5, 4.5], out(0.8, -0.8), { as: 'handle' }), ride([4.5, 18.5], out(-0.8, 0.8), { as: 'handle' }), line(0.06, { as: 'curve' }), { as: 'pointer', origin: [15.9, 15.9], transform: ['translate(0px, 0px) scale(1)', 'translate(-0.7px, -0.7px) scale(0.92)', 'translate(0.1px, 0.1px) scale(1.02)', 'translate(0px, 0px) scale(1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.5, delay: 0.14 }],
  },
  split: {
    verb: 'the branch splits off to the right and the stem rewrites',
    parts: [nudge([17.8, 6.3], 1, -1, { as: 'branch' }), line(0, { as: 'stem', dur: 0.6 })],
  },
  spool: {
    verb: 'the two thread ribbons wind in opposite directions',
    parts: [ride([12, 9.5], out(0.8, 0), { as: 'thread' }), ride([12, 14.5], out(-0.8, 0), { as: 'thread' })],
  },
  'spoon-and-fork': {
    verb: 'the fork and spoon cross and uncross on the plate',
    parts: [wiggle(C, [13, 12], 8, { as: 'fork' }), wiggle(C, [18.8, 6.2], 8, { as: 'fork' }), wiggle(C, [10.7, 11.7], -8, { as: 'spoon' }), beat(C, { delay: 0.3 })],
  },
  'spoon-and-knife': {
    verb: 'the spoon and knife hop beside the plate',
    parts: [null, pop([12, 13], 1.12, { as: 'plate', delay: 0.2 }), hop([4, 6.5], 1.2, { as: 'spoon' }), hop([20.8, 12], 1.2, { as: 'knife', delay: 0.1 }), hop([4, 14.5], 1.2, { as: 'spoon' })],
  },
  spoon: {
    verb: 'the spoon scoops and lifts',
    parts: [wiggle([21, 3], [12.3, 11.7], 10, { as: 'spoon' })],
  },
  spotify: {
    verb: 'the sound waves pulse inside the ring',
    parts: [beat(C, { delay: 0.3 }), wave([12.5, 12], { as: 'waves' })],
  },
  spotlight: {
    verb: 'the spotlight swivels on its stand and the beam flashes',
    parts: [null, wiggle([8, 9], [8, 9], -10, { as: 'lamp' }), wiggle([8, 9], [12.5, 13.5], -10, { as: 'lamp' }), blink({ as: 'beam', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.14 })],
  },
  'spray-can': {
    verb: 'the nozzle is pressed and the spray mist fans out',
    parts: [ride([8, 6], out(0, 0.6), { as: 'nozzle' }), beat([8, 15], { delay: 0.2 }), line(0.2, { as: 'label' }), { ...wave([16.8, 6], { as: 'mist', delay: 0.06 }), opacity: [1, 0, 1, 1] }],
  },
}

export default settleSpecs(specs)
