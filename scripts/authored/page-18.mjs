/**
 * Page 18 — circle-arrow-down → circle-power.
 *
 * Gallery page (80 public icons). Handcrafted original skipped: circle-check.
 *
 * The circle-arrow family follows the arrow conventions from pages 4–5, one
 * job per variant: `-01` chevron nudges, plain chevron leaves through the
 * circle and re-enters, `-02` shaft+head pushes 2.6px and narrows, `-03`
 * to-line rewrites, `double` bounces twice, `move-*` follows its bend.
 * Expand flies out, shrink pulls in, reload turns. The lock family keeps the
 * body still: the shackle clicks, the key slot turns, the badge acts.
 *
 * Identical-geometry pairs get different jobs: left-01 / left, right-01 /
 * right, up-01 / up, expand-01 / expand, shrink-01 / shrink, reload-01 /
 * reload, lock-add-01 / lock-add, lock-check-01 / lock-check,
 * lock-minus-01 / lock-minus, lock-remove-01 / lock-remove.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  around,
  beat,
  dim,
  draw,
  flex,
  flip,
  glint,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  scaleHold,
  settleSpecs,
  shake,
  stamp,
  sweep,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]

/** The circle acknowledging what its arrow just did. */
const ring = (o = {}) => beat(C, { as: 'ring', delay: 0.22, ...o })

/** Leave through one side, come back in from the other. */
const through = (dx, dy, o = {}) => ({
  as: 'through',
  origin: C,
  transform: ['translate(0px, 0px)', `translate(${dx}px, ${dy}px)`, `translate(${-dx}px, ${-dy}px)`, 'translate(0px, 0px)'],
  opacity: [1, 0, 0, 1],
  times: [0, 0.36, 0.38, 1],
  ease: [INOUT, 'linear', OUT],
  dur: 0.66,
  ...o,
})

/** Shaft+head push: 2.6px along the axis, narrowing across it (arrow-*-02). */
const push = (axis, d, o = {}) => {
  const across = axis === 'X' ? 'Y' : 'X'
  return {
    as: 'arrow',
    origin: C,
    transform: [
      `translate${axis}(0px) scale${across}(1)`,
      `translate${axis}(${d}px) scale${across}(0.94)`,
      `translate${axis}(${-d * 0.12}px) scale${across}(1)`,
      `translate${axis}(0px) scale${across}(1)`,
    ],
    times: [0, 0.44, 0.72, 1],
    ease: [INOUT, OUT, OUT],
    dur: 0.5,
    ...o,
  }
}

/** Two bounces toward a direction — for the double chevrons. */
const twice = (dx, dy, o = {}) =>
  ride(C, [[0, 0], [dx, dy], [-dx * 0.12, -dy * 0.12], [dx * 0.75, dy * 0.75], [0, 0]], { as: 'chevrons', dur: 0.7, ...o })

/** Back-and-forth along one axis — two opposing arrows trading. */
const shuttle = (dx, dy, o = {}) =>
  ride(C, [[0, 0], [-dx, -dy], [dx, dy], [-dx * 0.25, -dy * 0.25], [0, 0]], { as: 'arrows', dur: 0.66, ...o })

/** Travel along a bend: first leg, second leg, home. */
const bend = (a, b, o = {}) => ride(C, [[0, 0], a, b, [b[0] * -0.1, b[1] * -0.1], [0, 0]], { as: 'arrow', times: [0, 0.26, 0.56, 0.8, 1], dur: 0.7, ...o })

/** Pull in toward the center and spring back. */
const pinch = (s = 0.78, o = {}) => ({
  as: 'arrows',
  origin: C,
  transform: ['scale(1)', `scale(${s})`, 'scale(1.04)', 'scale(1)'],
  times: [0, 0.4, 0.72, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.56,
  ...o,
})

/** A confirmation ring that spreads out of the circle and fades. */
const ripple = (o = {}) => ({
  as: 'ripple',
  tag: 'circle',
  attrs: { cx: '12', cy: '12', r: '10', strokeWidth: '1' },
  transform: ['scale(1)', 'scale(1)', 'scale(1.01)', 'scale(1.18)'],
  opacity: [0, 0, 0.7, 0],
  times: [0, 0.3, 0.34, 1],
  ease: ['linear', 'linear', OUT],
  dur: 0.8,
  delay: 0.1,
  ...o,
})

/** A key slot turning a quarter and back. */
const turnKey = (origin, o = {}) => ({
  as: 'slot',
  origin,
  transform: ['rotate(0deg)', 'rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)'],
  times: [0, 0.3, 0.64, 1],
  ease: [INOUT, 'linear', INOUT],
  dur: 0.7,
  ...o,
})

/** The shackle lifts and clicks back down. */
const click = (center, o = {}) =>
  ride(center, [[0, 0], [0, -1.3], [0, 0.25], [0, 0], [0, 0]], { as: 'shackle', times: [0, 0.3, 0.52, 0.76, 1], dur: 0.56, ...o })

const DROP = [[0, 0], [0, -2.2], [0, 0.3], [0, 0], [0, 0]]
const SPIN = { dur: 1 }

// ---------------------------------------------------------------------------

const specs = {
  // --- circle arrows: down ----------------------------------------------------------
  'circle-arrow-down': {
    verb: 'the chevron drops out of the circle and comes back in from the top',
    parts: [null, through(0, 4, { as: 'chevron' })],
  },

  // --- expand / horizontal --------------------------------------------------------
  'circle-arrow-expand-01': {
    verb: 'the two heads fly out along the diagonal and the circle answers',
    parts: [ring({ delay: 0.24 }), pop(C, 1.2, { as: 'arrows' })],
  },
  'circle-arrow-expand-02': {
    verb: 'the arrows stretch out to the edges, hold there, and pull back',
    parts: [null, scaleHold(C, 1.18, { as: 'arrows' })],
  },
  'circle-arrow-expand': {
    verb: 'the arrows burst outward and a ring spreads past the circle',
    parts: [null, pop(C, 1.24, { as: 'arrows' })],
    extras: [ripple()],
  },
  'circle-arrow-horizontal': {
    verb: 'the double arrow stretches wide, then snaps back to length',
    parts: [null, flex('X', C, C, [1, 1.26, 0.9, 1.05, 1], { as: 'arrow' })],
  },

  // --- left ----------------------------------------------------------------------------
  'circle-arrow-left-01': {
    verb: 'the chevron nudges left and the circle answers',
    parts: [ring(), nudge(C, -2, 0, { as: 'chevron' })],
  },
  'circle-arrow-left-02': {
    verb: 'the arrow pushes left, narrowing as it travels',
    parts: [null, push('X', -2.6)],
  },
  'circle-arrow-left-03': {
    verb: 'the arrow and its stop line retract and rewrite toward the left',
    parts: [null, sweep({ as: 'arrow' })],
  },
  'circle-arrow-left-double': {
    verb: 'the double chevron bounces left twice',
    parts: [null, twice(-1.6, 0)],
  },
  'circle-arrow-left-right': {
    verb: 'the opposing arrows shuttle left and right and settle',
    parts: [null, shuttle(1.2, 0)],
  },
  'circle-arrow-left': {
    verb: 'the chevron slips out the left side and comes back in from the right',
    parts: [null, through(-4, 0, { as: 'chevron' })],
  },

  // --- move (bent arrows) ---------------------------------------------------------------
  'circle-arrow-move-down-left': {
    verb: 'the arrow follows its bend: down, then left',
    parts: [null, bend([0, 1.2], [-1.4, 1.2])],
  },
  'circle-arrow-move-down-right': {
    verb: 'the arrow follows its bend: down, then right',
    parts: [null, bend([0, 1.2], [1.4, 1.2])],
  },
  'circle-arrow-move-left-down': {
    verb: 'the arrow follows its curve up and around to the left',
    parts: [null, bend([-0.6, -0.6], [-1.6, -0.6])],
  },
  'circle-arrow-move-right-down': {
    verb: 'the arrow follows its curve up and around to the right',
    parts: [null, bend([0.6, -0.6], [1.6, -0.6])],
  },
  'circle-arrow-move-up-left': {
    verb: 'the arrow follows its bend: up, then left',
    parts: [null, bend([0, -1.4], [-1.2, -1.4])],
  },
  'circle-arrow-move-up-right': {
    verb: 'the arrow follows its bend: up, then right',
    parts: [null, bend([0, -1.2], [1.4, -1.2])],
  },

  // --- out (arrow leaving a broken circle) ----------------------------------------------
  'circle-arrow-out-down-left': {
    verb: 'the arrow shoots out of the circle toward the lower-left, head first',
    parts: [
      beat([13, 11], { as: 'ring', delay: 0.26 }),
      nudge([7.5, 16.5], -1.5, 1.5, { as: 'shaft', delay: 0.04 }),
      nudge([4.8, 19.2], -1.5, 1.5, { as: 'head' }),
    ],
  },
  'circle-arrow-out-down-right': {
    verb: 'the arrow shoots out of the circle toward the lower-right, head first',
    parts: [
      beat([11, 11], { as: 'ring', delay: 0.26 }),
      nudge([16.5, 16.5], 1.5, 1.5, { as: 'shaft', delay: 0.04 }),
      nudge([19.2, 19.2], 1.5, 1.5, { as: 'head' }),
    ],
  },
  'circle-arrow-out-up-left': {
    verb: 'the arrow shoots out of the circle toward the upper-left, head first',
    parts: [
      beat([13, 13], { as: 'ring', delay: 0.26 }),
      nudge([7.5, 7.5], -1.5, -1.5, { as: 'shaft', delay: 0.04 }),
      nudge([4.8, 4.8], -1.5, -1.5, { as: 'head' }),
    ],
  },
  'circle-arrow-out-up-right': {
    verb: 'the arrow rises while the dashed ring spins a full turn around it',
    parts: [nudge([12, 12.3], 0, -1.6, { as: 'arrow' }), nudge([12, 10], 0, -1.6, { as: 'arrow' }), lap(C, 360, { as: 'dashes', ...SPIN })],
  },

  // --- reload ------------------------------------------------------------------------------
  'circle-arrow-reload-01': {
    verb: 'the two reload arrows chase each other a full turn',
    parts: [null, lap(C, 360, { as: 'arrows', ...SPIN })],
  },
  'circle-arrow-reload-02': {
    verb: 'the reload arrows swap ends with a half turn',
    parts: [ring({ delay: 0.36 }), lap(C, 180, { as: 'arrows', dur: 0.76 })],
  },
  'circle-arrow-reload': {
    verb: 'the two reload strokes retract and rewrite, heads chasing',
    parts: [null, sweep({ as: 'arrows' })],
  },

  // --- right ---------------------------------------------------------------------------------
  'circle-arrow-right-01': {
    verb: 'the chevron nudges right and the circle answers',
    parts: [ring(), nudge(C, 2, 0, { as: 'chevron' })],
  },
  'circle-arrow-right-02': {
    verb: 'the arrow pushes right, narrowing as it travels',
    parts: [null, push('X', 2.6)],
  },
  'circle-arrow-right-03': {
    verb: 'the arrow and its stop line retract and rewrite toward the right',
    parts: [null, sweep({ as: 'arrow' })],
  },
  'circle-arrow-right-double': {
    verb: 'the double chevron bounces right twice',
    parts: [null, twice(1.6, 0)],
  },
  'circle-arrow-right': {
    verb: 'the chevron slips out the right side and comes back in from the left',
    parts: [null, through(4, 0, { as: 'chevron' })],
  },

  // --- shrink ----------------------------------------------------------------------------------
  'circle-arrow-shrink-01': {
    verb: 'the two heads pull in toward the center and the circle answers',
    parts: [ring({ delay: 0.24 }), pinch()],
  },
  'circle-arrow-shrink-02': {
    verb: 'the arrows pull into the center, hold there, and let go',
    parts: [null, scaleHold(C, 0.8, { as: 'arrows' })],
  },
  'circle-arrow-shrink': {
    verb: 'the arrows and the circle both tighten in, then release',
    parts: [beat(C, { as: 'ring', transform: ['scale(1)', 'scale(0.92)', 'scale(1.02)', 'scale(1)'] }), pinch(0.72)],
  },

  // --- up ----------------------------------------------------------------------------------------
  'circle-arrow-up-01': {
    verb: 'the chevron nudges up and the circle answers',
    parts: [ring(), nudge(C, 0, -2, { as: 'chevron' })],
  },
  'circle-arrow-up-02': {
    verb: 'the arrow pushes up, narrowing as it travels',
    parts: [null, push('Y', -2.6)],
  },
  'circle-arrow-up-03': {
    verb: 'the upload arrow and its top line retract and rewrite',
    parts: [null, sweep({ as: 'arrow' })],
  },
  'circle-arrow-up-double': {
    verb: 'the double chevron bounces up twice',
    parts: [null, twice(0, -1.6)],
  },
  'circle-arrow-up-down': {
    verb: 'the up and down arrows shuttle and settle',
    parts: [null, shuttle(0, 1.2)],
  },
  'circle-arrow-up-left': {
    verb: 'the arrow pushes toward the upper-left and the circle answers',
    parts: [ring(), nudge(C, -2.1, -2.1)],
  },
  'circle-arrow-up-right-02': {
    verb: 'the head leads the shaft toward the upper-right',
    parts: [ring({ delay: 0.26 }), nudge([11.5, 12.5], 1.6, -1.6, { as: 'shaft', delay: 0.05 }), nudge([13.1, 10.9], 2.1, -2.1, { as: 'head' })],
  },
  'circle-arrow-up-right': {
    verb: 'the arrow pushes toward the upper-right and the circle answers',
    parts: [ring(), nudge(C, 2.1, -2.1)],
  },
  'circle-arrow-up': {
    verb: 'the chevron rises out the top and comes back in from below',
    parts: [null, through(0, -4, { as: 'chevron' })],
  },
  'circle-arrow-vertical': {
    verb: 'the double arrow stretches tall, then snaps back to length',
    parts: [null, flex('Y', C, C, [1, 1.26, 0.9, 1.05, 1], { as: 'arrow' })],
  },

  // --- circle marks ----------------------------------------------------------------------------
  'circle-check-big': {
    verb: 'the big check retracts and rewrites out through the gap, then glints',
    parts: [ring({ delay: 0.4 }), sweep({ as: 'check' })],
    extras: [glint(21.6, 3.6, 0.9, { delay: 0.46 })],
  },
  'circle-chevron-down': {
    verb: 'the chevron dips down and the circle answers',
    parts: [ring(), nudge([12, 12.3], 0, 1.8, { as: 'chevron' })],
  },
  'circle-chevron-left': {
    verb: 'the chevron dips left and the circle answers',
    parts: [ring(), nudge(C, -1.8, 0, { as: 'chevron' })],
  },
  'circle-chevron-right': {
    verb: 'the chevron dips right and the circle answers',
    parts: [ring(), nudge(C, 1.8, 0, { as: 'chevron' })],
  },
  'circle-chevron-up': {
    verb: 'the chevron dips up and the circle answers',
    parts: [ring(), nudge([12, 11.8], 0, -1.8, { as: 'chevron' })],
  },
  'circle-dashed': {
    verb: 'the dashed circle spins one full turn like a loader',
    parts: [lap(C, 360, { as: 'dashes', ...SPIN })],
  },
  'circle-dollar-sign': {
    verb: 'the dollar coin flips over',
    parts: [flip(C, 1, { as: 'coin' }), flip(C, 1, { as: 'coin' }), flip(C, 1, { as: 'coin' })],
  },
  'circle-dot-dashed': {
    verb: 'the dashed ring spins around the dot, which pulses',
    parts: [lap(C, 360, { as: 'dashes', ...SPIN }), pop(C, 1.6, { as: 'dot', delay: 0.1 })],
  },
  'circle-dot': {
    verb: 'the dot pulses bigger and the circle answers',
    parts: [ring({ delay: 0.2 }), pop(C, 1.7, { as: 'dot' })],
  },
  'circle-ellipsis': {
    verb: 'the three dots tick one after another, left to right',
    parts: [null, pop(C, 2.2, { as: 'dot', delay: 0.12 }), pop([17, 12], 2.2, { as: 'dot', delay: 0.24 }), pop([7, 12], 2.2, { as: 'dot' })],
  },
  'circle-fading-arrow-up': {
    verb: 'the fading ring spins around while the arrow rises',
    parts: [lap([11.9, 11.5], 360, { as: 'ring', ...SPIN }), nudge([12, 12.5], 0, -1.6, { as: 'arrow' }), nudge([12, 10], 0, -1.6, { as: 'arrow' })],
  },
  'circle-fading-plus': {
    verb: 'the fading ring spins around while the plus turns a quarter',
    parts: [lap([11.9, 11.5], 360, { as: 'ring', ...SPIN }), lap(C, 90, { as: 'plus', dur: 0.66 })],
  },
  'circle-gauge': {
    verb: 'the needle drops to empty, sweeps back to its reading, and the scale redraws',
    parts: [null, retrace({ as: 'scale', delay: 0.1 }), around(C, [14, 10], [0, -70, 18, -6, 0], { as: 'needle', dur: 0.86 })],
  },

  // --- locks ---------------------------------------------------------------------------------------
  'circle-lock-01': {
    verb: 'the shackle clicks shut and the keyhole answers',
    parts: [null, click([12, 5.8]), pop([12, 15], 2, { as: 'keyhole', delay: 0.24 })],
  },
  'circle-lock-02': {
    verb: 'the key slot turns a quarter and turns back',
    parts: [turnKey([12, 15]), null, null],
  },
  'circle-lock-add-01': {
    verb: 'the plus turns a quarter beside the lock',
    parts: [lap([16.5, 18], 90, { as: 'plus', dur: 0.62 }), null, null],
  },
  'circle-lock-add-02': {
    verb: 'the plus badge rolls a quarter turn and the shackle clicks',
    parts: [click([10.5, 5.8], { delay: 0.2 }), lap([16.5, 18], 90, { as: 'badge', dur: 0.66 }), null],
  },
  'circle-lock-add': {
    verb: 'the plus pops and the shackle clicks shut',
    parts: [pop([16.5, 18], 1.3, { as: 'plus' }), null, click([10.5, 5.8], { delay: 0.16 })],
  },
  'circle-lock-check-01': {
    verb: 'the check writes itself beside the lock',
    parts: [draw({ as: 'check' }), null, null],
  },
  'circle-lock-check-02': {
    verb: 'the check writes inside the badge, which answers',
    parts: [null, null, beat([16.5, 18], { as: 'badge', delay: 0.3 }), draw({ as: 'check' })],
  },
  'circle-lock-check': {
    verb: 'the check stamps in and the shackle clicks shut',
    parts: [stamp([17, 17], { as: 'check' }), null, click([10, 5.8], { delay: 0.18 })],
  },
  'circle-lock-minus-01': {
    verb: 'the minus wipes off and redraws beside the lock',
    parts: [null, null, draw({ as: 'minus' })],
  },
  'circle-lock-minus-02': {
    verb: 'the minus badge pops and the shackle clicks',
    parts: [click([10.5, 5.8], { delay: 0.2 }), pop([16.5, 18], 1.25, { as: 'badge' }), null],
  },
  'circle-lock-minus': {
    verb: 'the minus squeezes short and springs back to length',
    parts: [null, null, flex('X', [16, 17], [16, 17], [1, 0.3, 1.12, 0.98, 1], { as: 'minus' })],
  },
  'circle-lock-remove-01': {
    verb: 'the X spins a quarter turn beside the lock',
    parts: [null, null, lap([17, 18.5], 90, { as: 'x', dur: 0.62 })],
  },
  'circle-lock-remove-02': {
    verb: 'the X badge rattles as a refusal',
    parts: [null, null, shake([16.5, 18], { as: 'badge' })],
  },
  'circle-lock-remove': {
    verb: 'the X wipes off and redraws beside the lock',
    parts: [null, null, draw({ as: 'x' })],
  },
  'circle-lock': {
    verb: 'the shackle swings open on its right leg and closes again',
    parts: [null, around([16.5, 9.5], [12, 5.8], [0, -22, -22, 4, 0], { as: 'shackle', times: [0, 0.3, 0.6, 0.82, 1] }), null],
  },

  // --- rest of circle-* -----------------------------------------------------------------------------
  'circle-minus': {
    verb: 'the minus squeezes short and springs back to length',
    parts: [ring({ delay: 0.24 }), flex('X', C, C, [1, 0.2, 1.12, 0.98, 1], { as: 'minus' })],
  },
  'circle-off': {
    verb: 'the slash draws across and the broken circle dims behind it',
    parts: [dim({ as: 'ring', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'circle-parking-off': {
    verb: 'the slash draws across and the P fades out',
    parts: [null, dim({ as: 'p', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'circle-parking': {
    verb: 'the P pulls into its spot with a hop and the circle answers',
    parts: [ring({ delay: 0.3 }), hop([12.5, 10.5], 1.6, { as: 'p' }), hop([9.5, 15], 1.6, { as: 'p' })],
  },
  'circle-password': {
    verb: 'the password dots are typed in one after the other',
    parts: [beat([12, 15], { as: 'body', delay: 0.3 }), null, pop([10, 15], 2.4, { as: 'dot' }), pop([14, 15], 2.4, { as: 'dot', delay: 0.14 })],
  },
  'circle-pile': {
    verb: 'the pile stacks up: bottom row, then middle, then the top ball',
    parts: [
      ride([12, 19], DROP, { as: 'ball', delay: 0.06 }),
      ride([4, 19], DROP, { as: 'ball' }),
      ride([16, 12], DROP, { as: 'ball', delay: 0.2 }),
      ride([8, 12], DROP, { as: 'ball', delay: 0.16 }),
      ride([12, 5], DROP, { as: 'ball', delay: 0.3 }),
      ride([20, 19], DROP, { as: 'ball', delay: 0.1 }),
    ],
  },
  'circle-plus': {
    verb: 'the plus turns a quarter and the circle answers',
    parts: [ring({ delay: 0.3 }), lap(C, 90, { as: 'plus', dur: 0.62 })],
  },
  'circle-pound-sterling': {
    verb: 'the pound sign rewrites itself like handwriting',
    parts: [retrace({ as: 'pound', dur: 0.74 }), ring({ delay: 0.4 })],
  },
  'circle-power': {
    verb: 'the power stem presses down and the arc lights back up around it',
    parts: [ring({ delay: 0.3 }), retrace({ as: 'arc', delay: 0.12 }), nudge([12, 9], 0, 1.2, { as: 'stem', dur: 0.44 })],
  },
}

export default settleSpecs(specs)
