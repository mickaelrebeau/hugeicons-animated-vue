/**
 * Page 17 — check-unread-03 → circle-arrow-down-right.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped:
 * chevron-down, chevron-left, chevron-right, chevron-up.
 *
 * Checkmarks: the check writes, stamps, pops or flies out of the open gap of
 * its badge / circle / square; closed frames acknowledge it. Chess pieces
 * each move the way the piece reads (pawn steps, knight rears, rook castles,
 * queen's crown lights up). Kitchen and lab icons get props: bubbles in the
 * flasks, steam off the drumstick and the cigarette, chimes over the church.
 *
 * Identical-geometry pairs get different jobs: cheese-cake-01 / cheese-cake,
 * chemistry-01 / chemistry, chess-01 / chess, circle-arrow-diagonal-01 /
 * circle-arrow-diagonal, circle-arrow-down-01 / circle-arrow-down.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  T5,
  E5,
  around,
  beat,
  blink,
  dim,
  draw,
  flex,
  flip,
  glint,
  glow,
  hold,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  rise,
  settleSpecs,
  swell,
  stamp,
  sweep,
  swing,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

/** A confirmation ring that expands off the frame and fades. */
const ripple = (tag, attrs, o = {}) => ({
  as: 'ripple',
  tag,
  attrs: { ...attrs, strokeWidth: '1' },
  transform: ['scale(1)', 'scale(1)', 'scale(1.01)', 'scale(1.18)'],
  opacity: [0, 0, 0.7, 0],
  times: [0, 0.3, 0.34, 1],
  ease: ['linear', 'linear', OUT],
  dur: 0.8,
  delay: 0.1,
  ...o,
})

/** A bell chime: an arc that rings twice and fades. */
const chime = (d, o = {}) => ({
  as: 'chime',
  tag: 'path',
  attrs: { d, strokeWidth: '1.2' },
  transform: ['scale(0.7)', 'scale(0.7)', 'scale(1)', 'scale(1)', 'scale(1.1)', 'scale(1.2)'],
  opacity: [0, 0, 1, 0.25, 1, 0],
  times: [0, 0.18, 0.34, 0.5, 0.66, 1],
  ease: ['linear', OUT, 'linear', 'linear', OUT],
  dur: 0.9,
  ...o,
})

/** A bubble rising through liquid. */
const bubble = (cx, cy, dy, o = {}) => puff(cx, cy, 0.5, 0, dy, { as: 'bubble', ...o })

const press = { transform: ['scale(1)', 'scale(0.9)', 'scale(1.04)', 'scale(1)'] }
const DROP = [[0, 0], [0, -1.6], [0, 0.3], [0, 0], [0, 0]]
const LIFT = [[0, 0], [0, -2.2], [0, 0.4], [0, 0], [0, 0]]

// ---------------------------------------------------------------------------

const specs = {
  // --- checks ---------------------------------------------------------------
  'check-unread-03': {
    verb: 'the slash strikes down through the double check, which sinks under it',
    parts: [nudge([12, 12], 0, 1.2, { as: 'check', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'check-unread-04': {
    verb: 'the two checks write in turn, then the slash wipes across them',
    parts: [draw({ as: 'slash', delay: 0.32 }), draw({ as: 'tick' }), draw({ as: 'tick', delay: 0.14 })],
  },
  'check-unread': {
    verb: 'the slash draws across and knocks the hand-drawn check back',
    parts: [stamp([12, 12.5], { as: 'check', delay: 0.14 }), draw({ as: 'slash' })],
  },
  check: {
    verb: 'the check writes itself and its tip catches the light',
    parts: [draw({ as: 'check', dur: 0.6 })],
    extras: [glint(19.6, 5, 0.9, { delay: 0.3 })],
  },

  'checkmark-badge-01': {
    verb: 'the rosette turns one scallop over and the check rewrites inside it',
    parts: [lap([12, 12], 45, { as: 'rosette', dur: 0.8 }), draw({ as: 'check', delay: 0.2 })],
  },
  'checkmark-badge-02': {
    verb: 'the badge presses down like a seal and the check pops out of it',
    parts: [beat([12, 12], { as: 'seal', ...press }), pop([12, 12], 1.25, { as: 'check', delay: 0.1 })],
  },
  'checkmark-badge-03': {
    verb: 'the check shoots out past the badge, which acknowledges it',
    parts: [beat([12, 12], { as: 'badge', delay: 0.3 }), draw({ as: 'check', dur: 0.72 })],
  },
  'checkmark-badge-04': {
    verb: 'the check retraces out through the gap and glints at its tip',
    parts: [beat([12, 12], { as: 'badge' }), retrace({ as: 'check' })],
    extras: [glint(21.4, 2.6, 0.9, { delay: 0.3 })],
  },
  'checkmark-badge': {
    verb: 'the badge and its check flip over together like a medal',
    parts: [flip([12, 12], 1, { as: 'medal' }), flip([12, 12], 1, { as: 'medal' })],
  },

  'checkmark-circle-01': {
    verb: 'the ring retraces itself, then the check writes inside it',
    parts: [retrace({ as: 'ring' }), draw({ as: 'check', delay: 0.24 })],
  },
  'checkmark-circle-02': {
    verb: 'the check stamps in and the circle answers',
    parts: [beat([12, 12], { as: 'ring' }), stamp([12, 12], { as: 'check' })],
  },
  'checkmark-circle-03': {
    verb: 'the check leaps out through the gap in the circle and settles back',
    parts: [beat([12, 12], { as: 'ring', delay: 0.2 }), nudge([15, 10.5], 1.2, -1.2, { as: 'check' })],
  },
  'checkmark-circle-04': {
    verb: 'the check writes out of the open circle and glints past the gap',
    parts: [beat([12, 12], { as: 'ring', delay: 0.3 }), draw({ as: 'check' })],
    extras: [glint(21.4, 2.6, 0.9, { delay: 0.34 })],
  },
  'checkmark-circle': {
    verb: 'the check pops and a confirmation ring spreads out of the circle',
    parts: [null, pop([12, 11.5], 1.2, { as: 'check' })],
    extras: [ripple('circle', { cx: '12', cy: '12', r: '10' })],
  },

  'checkmark-square-01': {
    verb: 'the check writes in the box, which acknowledges it',
    parts: [beat([12, 12], { as: 'box', delay: 0.3 }), draw({ as: 'check' })],
  },
  'checkmark-square-02': {
    verb: 'the checkbox is clicked: the box presses in and the check pops',
    parts: [beat([12, 12], { as: 'box', ...press }), pop([12, 12], 1.3, { as: 'check', delay: 0.1 })],
  },
  'checkmark-square-03': {
    verb: 'the check retracts and rewrites out through the open corner, then glints',
    parts: [null, sweep({ as: 'check' })],
    extras: [glint(21.6, 4, 0.9, { delay: 0.45 })],
  },
  'checkmark-square-04': {
    verb: 'the oversized check stamps onto the open box',
    parts: [beat([12, 12], { as: 'box', delay: 0.2 }), stamp([14.8, 8.5], { as: 'check' })],
  },
  'checkmark-square': {
    verb: 'the check writes and a confirmation outline spreads out of the box',
    parts: [null, draw({ as: 'check' })],
    extras: [ripple('rect', { x: '2.5', y: '2.5', width: '19', height: '19', rx: '5.5' }, { delay: 0.2 })],
  },

  // --- food -------------------------------------------------------------------
  'cheese-cake-01': {
    verb: 'the cherry bounces on the cream and the slice squashes under it',
    parts: [
      null,
      null,
      ride([12.5, 6.5], [[0, 0], [0, -2.6], [0, 0.4], [0, 0], [0, 0]], { as: 'cherry', dur: 0.66 }),
      flex('Y', [12, 21], [11.8, 11.1], [1, 1, 0.94, 1.02, 1], { as: 'slice', dur: 0.66 }),
      flex('Y', [12, 21], [12, 16.3], [1, 1, 0.94, 1.02, 1], { as: 'slice', dur: 0.66 }),
    ],
  },
  'cheese-cake': {
    verb: 'the cherry dangles from its stem while the plate draws under the slice',
    parts: [
      draw({ as: 'plate', delay: 0.2 }),
      draw({ as: 'plate', delay: 0.3 }),
      swing([15, 3], [12.5, 6.5], [0, -16, 10, -4, 0], { as: 'cherry', dur: 0.86 }),
      null,
      null,
    ],
  },
  'cheese-cake-02': {
    verb: 'the cherry hops off the top and the layers compress as it lands',
    parts: [
      flex('Y', [12, 19], [12, 9], [1, 1, 0.92, 1.03, 1], { as: 'layers' }),
      flex('Y', [12, 19], [12, 14], [1, 1, 0.92, 1.03, 1], { as: 'layers' }),
      flex('Y', [12, 19], [12, 14], [1, 1, 0.92, 1.03, 1], { as: 'layers' }),
      beat([12, 19], { as: 'plate', delay: 0.24 }),
      hop([12, 5], 2, { as: 'cherry' }),
    ],
  },
  cheese: {
    verb: 'the holes bubble open one after another across the wedge',
    parts: [
      null,
      beat([12.3, 7.4], { as: 'wedge', delay: 0.3 }),
      pop([8.5, 16.2], 1.4, { as: 'hole' }),
      pop([16, 8], 2.2, { as: 'hole', delay: 0.12 }),
      pop([17, 15], 2.2, { as: 'hole', delay: 0.24 }),
    ],
  },
  'chef-hat': {
    verb: 'the puffy top swells up out of the band, which rewrites under it',
    parts: [swell([12, 13], [12, 8], [1, 1.1, 0.96, 1.02, 1], { as: 'puff' }), retrace({ as: 'band', delay: 0.2 }), null, null],
  },
  chef: {
    verb: 'the chef tips the hat off one side and puts it back',
    parts: [
      swing([7, 14], [12, 6.5], [0, -12, 3, -1, 0], { as: 'hat' }),
      swing([7, 14], [12, 12], [0, -12, 3, -1, 0], { as: 'hat' }),
      swing([7, 14], [12, 14], [0, -12, 3, -1, 0], { as: 'hat' }),
      null,
    ],
  },

  // --- lab ----------------------------------------------------------------------
  'chemistry-01': {
    verb: 'the tube rocks in its stand and bubbles rise through it',
    parts: [
      null,
      swing([14, 4], [14, 11], [0, 9, -7, 3, 0], { as: 'tube' }),
      null,
      swing([14, 4], [14, 4], [0, 9, -7, 3, 0], { as: 'tube' }),
    ],
    extras: [bubble(13.3, 15.5, -5), bubble(14.7, 14.5, -6, { delay: 0.2 })],
  },
  chemistry: {
    verb: 'the tube lifts out of the stand and drops back into place',
    parts: [null, ride([14, 11], LIFT, { as: 'tube' }), null, ride([14, 4], LIFT, { as: 'tube' })],
  },
  'chemistry-02': {
    verb: 'the flask swirls on its neck and bubbles rise from the bottom',
    parts: [
      null,
      null,
      swing([13.5, 4], [13.5, 11], [0, 8, -6, 2.5, 0], { as: 'flask' }),
      swing([13.5, 4], [13.5, 4], [0, 8, -6, 2.5, 0], { as: 'flask' }),
    ],
    extras: [bubble(12.4, 15.6, -6), bubble(14.6, 15, -6.5, { delay: 0.18 })],
  },
  'chemistry-03': {
    verb: 'the round flask boils: it rattles and bubbles stream up the neck',
    parts: [
      null,
      null,
      ride([13.5, 4], [[0, 0], [-0.5, 0], [0.5, 0], [-0.2, 0], [0, 0]], { as: 'boil', dur: 0.5 }),
      ride([13.5, 11], [[0, 0], [-0.5, 0], [0.5, 0], [-0.2, 0], [0, 0]], { as: 'boil', dur: 0.5 }),
    ],
    extras: [bubble(12.4, 15, -6), bubble(14.6, 14.6, -6, { delay: 0.14 }), bubble(13.5, 13.4, -5.4, { delay: 0.28 })],
  },
  cherry: {
    verb: 'the cherry pair dangles from the stem knot and swings back',
    parts: [
      swing([14, 3], [16.5, 16.5], [0, 6, -4, 2, 0], { as: 'cherries', dur: 0.86 }),
      swing([14, 3], [6.3, 15.5], [0, 6, -4, 2, 0], { as: 'cherries', dur: 0.86 }),
      swing([14, 3], [11, 7.5], [0, 6, -4, 2, 0], { as: 'cherries', dur: 0.86 }),
    ],
  },

  // --- chess --------------------------------------------------------------------
  'chess-01': {
    verb: 'the king hops one square and lands, crown last',
    parts: [hop([12, 15.5], 2), hop([12, 5.5], 2, { delay: 0.05 }), hop([12, 18], 2)],
  },
  chess: {
    verb: 'the crown wobbles on top of the piece, as if in check',
    parts: [beat([12, 15.5], { as: 'piece', delay: 0.2 }), around([12, 9], [12, 5.5], [0, -10, 8, -3, 0], { as: 'crown' }), null],
  },
  'chess-02': {
    verb: 'the piece tips over to resign and rights itself',
    parts: [swing([16.5, 21.5], [11.4, 12], [0, 16, -4, 1, 0], { as: 'piece' }), swing([16.5, 21.5], [12, 19], [0, 16, -4, 1, 0], { as: 'piece' })],
  },
  'chess-bishop': {
    verb: 'the bishop’s ball hops and the mitre slit cuts again',
    parts: [null, hop([12, 4], 1.6, { as: 'ball' }), beat([12, 11.8], { as: 'mitre', delay: 0.24 }), draw({ as: 'slit', delay: 0.12 })],
  },
  'chess-king': {
    verb: 'the cross on the crown hops up and gleams',
    parts: [null, null, hop([12, 5], 1.4, { as: 'cross' }), hop([12, 4], 1.4, { as: 'cross' })],
    extras: [glint(15.4, 2.4, 0.9, { delay: 0.2 })],
  },
  'chess-knight': {
    verb: 'the knight rears up on its hind side and lands on the base',
    parts: [beat([12.3, 20], { as: 'base', delay: 0.36 }), around([17, 18], [11.9, 10], [0, 10, -2, 0.6, 0], { as: 'horse', dur: 0.72 })],
  },
  'chess-pawn': {
    verb: 'the pawn steps forward with a hop and the base takes its weight',
    parts: [hop([12, 14], 1.8, { as: 'pawn' }), hop([12, 5], 1.8, { as: 'pawn' }), hop([12, 10], 1.8, { as: 'pawn' }), beat([12, 20], { as: 'base', delay: 0.3 })],
  },
  'chess-queen': {
    verb: 'the queen’s crown jewels light up left, top, right',
    parts: [
      pop([12, 4.5], 1.35, { as: 'jewel', delay: 0.1 }),
      pop([4, 7.5], 1.35, { as: 'jewel' }),
      pop([20, 7.5], 1.35, { as: 'jewel', delay: 0.2 }),
      beat([12, 12], { as: 'crown', delay: 0.12 }),
      null,
    ],
  },
  'chess-rook': {
    verb: 'the rook castles: it leaps over a square and slides back home',
    parts: [
      ride([12, 20], [[0, 0], [-1.2, -1.8], [0.2, 0.3], [0, 0], [0, 0]], { as: 'rook' }),
      ride([12, 5.5], [[0, 0], [-1.2, -1.8], [0.2, 0.3], [0, 0], [0, 0]], { as: 'rook' }),
      ride([12, 13.5], [[0, 0], [-1.2, -1.8], [0.2, 0.3], [0, 0], [0, 0]], { as: 'rook' }),
    ],
  },

  // --- chevrons ------------------------------------------------------------------
  'chevron-double-close': {
    verb: 'the two outward chevrons slide in to close, hold, and part again',
    parts: [hold([6.5, 12], 2, 0, { as: 'chevron', dur: 0.6 }), hold([17.5, 12], -2, 0, { as: 'chevron', dur: 0.6 })],
  },
  'chevron-first': {
    verb: 'the chevron rushes back to the first bar, which flinches on impact',
    parts: [flex('Y', [7, 12], [7, 12], [1, 1, 0.86, 1.04, 1], { as: 'bar', dur: 0.56 }), nudge([14, 12], -2.2, 0, { as: 'chevron' })],
  },
  'chevron-last': {
    verb: 'the chevron rushes forward to the last bar, which flinches on impact',
    parts: [flex('Y', [17, 12], [17, 12], [1, 1, 0.86, 1.04, 1], { as: 'bar', dur: 0.56 }), nudge([10, 12], 2.2, 0, { as: 'chevron' })],
  },
  'chevrons-down-up': {
    verb: 'the two chevrons squeeze toward the middle line and spring back',
    parts: [nudge([12, 16.5], 0, -1.4, { as: 'chevron' }), nudge([12, 7.5], 0, 1.4, { as: 'chevron' })],
  },
  'chevrons-down': {
    verb: 'the chevrons cascade downward, back one first',
    parts: [nudge([12, 8.5], 0, 1.8, { as: 'chevron' }), nudge([12, 15.5], 0, 1.8, { as: 'chevron', delay: 0.08 })],
  },
  'chevrons-left-right-ellipsis': {
    verb: 'the dots tick in turn while the chevrons push outward',
    parts: [
      pop([14.5, 12], 1.8, { as: 'dot', delay: 0.1 }),
      pop([9.5, 12], 1.8, { as: 'dot' }),
      nudge([4.5, 12], -1.4, 0, { as: 'chevron', delay: 0.16 }),
      nudge([19.5, 12], 1.4, 0, { as: 'chevron', delay: 0.16 }),
    ],
  },
  'chevrons-left-right': {
    verb: 'the two chevrons push apart, each toward the side it points at',
    parts: [nudge([6.5, 12], -1.6, 0, { as: 'chevron' }), nudge([17.5, 12], 1.6, 0, { as: 'chevron' })],
  },
  'chevrons-left': {
    verb: 'the chevrons cascade left, back one first',
    parts: [nudge([15.5, 12], -1.8, 0, { as: 'chevron' }), nudge([8.5, 12], -1.8, 0, { as: 'chevron', delay: 0.08 })],
  },
  'chevrons-right-left': {
    verb: 'the two inward chevrons converge on the middle and spring back',
    parts: [nudge([17.5, 12], -1.6, 0, { as: 'chevron' }), nudge([6.5, 12], 1.6, 0, { as: 'chevron' })],
  },
  'chevrons-right': {
    verb: 'the chevrons cascade right, back one first',
    parts: [nudge([8.5, 12], 1.8, 0, { as: 'chevron' }), nudge([15.5, 12], 1.8, 0, { as: 'chevron', delay: 0.08 })],
  },
  'chevrons-up': {
    verb: 'the chevrons cascade upward, back one first',
    parts: [nudge([12, 15.5], 0, -1.8, { as: 'chevron' }), nudge([12, 8.5], 0, -1.8, { as: 'chevron', delay: 0.08 })],
  },

  // --- misc -----------------------------------------------------------------------
  'chicken-thighs': {
    verb: 'the drumstick waggles by its bone and steam lifts off the meat',
    parts: [
      swing([10, 14], [5.9, 18.1], [0, -10, 6, -2, 0], { as: 'drumstick' }),
      swing([10, 14], [14.5, 8.9], [0, -10, 6, -2, 0], { as: 'drumstick' }),
    ],
    extras: [puff(17, 5, 0.7, 0.4, -3, { as: 'steam', delay: 0.1 })],
  },
  child: {
    verb: 'the child tilts their head side to side with a giggle',
    parts: [
      swing([12, 18], [11.8, 10], [0, -6, 5, -2, 0], { as: 'head' }),
      swing([12, 18], [8.3, 5], [0, -6, 5, -2, 0], { as: 'head' }),
      swing([12, 18], [15.8, 5], [0, -6, 5, -2, 0], { as: 'head' }),
      null,
      swing([12, 18], [12, 11], [0, -6, 5, -2, 0], { as: 'head' }),
      swing([12, 18], [12, 14.5], [0, -6, 5, -2, 0], { as: 'head' }),
    ],
  },
  chimney: {
    verb: 'the smoke curls out of the stack and trails off in wisps',
    parts: [null, null, retrace({ as: 'smoke' }), draw({ as: 'wisp', delay: 0.2 }), draw({ as: 'wisp', delay: 0.1 })],
  },
  'china-temple': {
    verb: 'the temple builds up: pillars rise, each roof lands on them',
    parts: [
      ride([12, 12], DROP, { as: 'roof', delay: 0.14 }),
      ride([12, 4], DROP, { as: 'roof', delay: 0.3 }),
      rise('Y', [17, 10], [17, 8], { as: 'pillar', delay: 0.2 }),
      rise('Y', [7, 10], [7, 8], { as: 'pillar', delay: 0.2 }),
      rise('Y', [19, 22], [19, 18], { as: 'pillar' }),
      rise('Y', [5, 22], [5, 18], { as: 'pillar' }),
      null,
      null,
    ],
  },
  'chip-02': {
    verb: 'the casino chip spins a quarter turn on its notches and the 8 flips',
    parts: [null, null, flip([12, 12], 1, { as: 'eight' }), lap([12, 12], 90, { as: 'notch' }), lap([12, 12], 90, { as: 'notch' })],
  },
  chip: {
    verb: 'the die computes while the pins flicker with signal',
    parts: [beat([12, 12], { as: 'package', delay: 0.2 }), { ...beat([12, 12]), as: 'die', transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.6, 1, 1], dur: 0.56 }, blink({ as: 'pins', dur: 0.6 })],
  },
  chocolate: {
    verb: 'the wrapper halves pull apart to reveal the bar and close again',
    parts: [
      null,
      hold([7.8, 16.3], -1.4, 1.4, { as: 'wrapper' }),
      hold([15.5, 8.5], 1.2, -1.2, { as: 'wrapper' }),
      pop([16, 8], 1.12, { as: 'squares', delay: 0.18 }),
    ],
  },
  chopsticks: {
    verb: 'the chopsticks pinch together and open',
    parts: [around([20, 8], [12, 12], [0, -5, 2.5, -1, 0], { as: 'sticks', dur: 0.56 })],
  },
  chrome: {
    verb: 'the three blades whirl a full turn around the inner circle',
    parts: [
      null,
      null,
      around([12, 12], [6.3, 10], [0, 72, 252, 370.8, 360], { as: 'blade', dur: 0.9 }),
      around([12, 12], [13.5, 17.8], [0, 72, 252, 370.8, 360], { as: 'blade', dur: 0.9 }),
      around([12, 12], [16.5, 8], [0, 72, 252, 370.8, 360], { as: 'blade', dur: 0.9 }),
    ],
  },
  chrysler: {
    verb: 'the tower lights up floor by floor and the spire shoots up and gleams',
    parts: [
      null,
      null,
      null,
      null,
      rise('Y', [12, 4], [12, 3], { as: 'spire', delay: 0.3 }),
      blink({ as: 'light', dur: 0.6, delay: 0.1 }),
      blink({ as: 'light', dur: 0.6, delay: 0.2 }),
      blink({ as: 'light', dur: 0.6 }),
      blink({ as: 'window', dur: 0.6 }),
    ],
    extras: [glint(12, 1.6, 0.9, { delay: 0.4 })],
  },
  church: {
    verb: 'the bell chimes from the steeple and the rose window glows',
    parts: [null, null, beat([12, 14.5], { as: 'nave', delay: 0.3 }), null, null, null, glow([12, 12.3], 2.2, { as: 'window', delay: 0.1 })],
    extras: [chime('M8.6 3.2C7.6 4.2 7.6 5.8 8.6 6.8'), chime('M15.4 3.2C16.4 4.2 16.4 5.8 15.4 6.8')],
  },
  'cigarette-off': {
    verb: 'the slash draws across and the smoke dies out',
    parts: [draw({ as: 'slash' }), null, null, dim({ as: 'smoke' }), dim({ as: 'smoke', delay: 0.08 }), null],
  },
  cigarette: {
    verb: 'the tip glows, the smoke curls rewrite and a puff drifts up',
    parts: [null, blink({ as: 'ember', dur: 0.6 }), retrace({ as: 'smoke' }), retrace({ as: 'smoke', delay: 0.12 }), null],
    extras: [puff(19.5, 4, 0.7, 0.6, -2.4, { as: 'smoke', delay: 0.25 })],
  },
  'cinnamon-roll': {
    verb: 'the cinnamon swirl unwinds and rolls back up on top of the bun',
    parts: [beat([12, 9], { as: 'top', delay: 0.3 }), sweep({ as: 'swirl' }), null],
  },

  // --- circle arrows -----------------------------------------------------------------
  'circle-arrow-data-transfer-diagonal': {
    verb: 'the two diagonal arrows trade places with a half turn',
    parts: [lap([12, 12], 180, { as: 'arrows', dur: 0.76 }), beat([12, 12], { as: 'ring', delay: 0.34 })],
  },
  'circle-arrow-data-transfer-horizontal': {
    verb: 'the left and right arrows rewrite themselves along their direction',
    parts: [beat([12, 12], { as: 'ring', delay: 0.4 }), sweep({ as: 'arrows' })],
  },
  'circle-arrow-data-transfer-vertical': {
    verb: 'the up and down arrows shuttle up, down, and settle',
    parts: [null, ride([12, 12], [[0, 0], [0, -1.2], [0, 1.2], [0, -0.3], [0, 0]], { as: 'arrows', dur: 0.66 })],
  },
  'circle-arrow-diagonal-01': {
    verb: 'the double-headed arrow stretches out toward both edges',
    parts: [pop([12, 12], 1.2, { as: 'arrow' }), beat([12, 12], { as: 'ring', delay: 0.2 })],
  },
  'circle-arrow-diagonal-02': {
    verb: 'the diagonal arrow flips end over end',
    parts: [null, lap([12, 12], 180, { as: 'arrow', dur: 0.76 })],
  },
  'circle-arrow-diagonal': {
    verb: 'the arrow jolts along its diagonal both ways',
    parts: [ride([12, 12], [[0, 0], [1, -1], [-1, 1], [0.3, -0.3], [0, 0]], { as: 'arrow', dur: 0.62 }), null],
  },
  'circle-arrow-down-01': {
    verb: 'the chevron dips down and the circle answers',
    parts: [beat([12, 12], { as: 'ring', delay: 0.25 }), nudge([12, 12], 0, 2, { as: 'chevron' })],
  },
  'circle-arrow-down-02': {
    verb: 'the arrow pushes down, narrowing as it travels',
    parts: [
      null,
      { as: 'arrow', origin: [12, 12], transform: ['translateY(0px) scaleX(1)', 'translateY(2.6px) scaleX(0.94)', 'translateY(-0.3px) scaleX(1)', 'translateY(0px) scaleX(1)'], times: [0, 0.44, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.5 },
    ],
  },
  'circle-arrow-down-03': {
    verb: 'the download arrow and its baseline retract and rewrite',
    parts: [null, sweep({ as: 'arrow' })],
  },
  'circle-arrow-down-double': {
    verb: 'the double chevron bounces down twice',
    parts: [null, ride([12, 12], [[0, 0], [0, 1.6], [0, -0.2], [0, 1.2], [0, 0]], { as: 'chevrons', dur: 0.7 })],
  },
  'circle-arrow-down-left': {
    verb: 'the arrow pushes toward the lower-left and the circle answers',
    parts: [beat([12, 12], { as: 'ring', delay: 0.22 }), nudge([12, 12], -2.1, 2.1)],
  },
  'circle-arrow-down-right': {
    verb: 'the arrow pushes toward the lower-right and the circle answers',
    parts: [beat([12, 12], { as: 'ring', delay: 0.22 }), nudge([12, 12], 2.1, 2.1)],
  },
}

export default settleSpecs(specs)
