/**
 * Page 23 — cursor-info-02 → database-locked.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped:
 * cursor-pointer-01, dashboard-square-01.
 *
 * Cursors keep the page 22 split: the hand `tap`s, the arrow `point`s, the
 * badge does its job. Dashboards keep their tiles and let the corner badge
 * act. Databases keep the stack still: ticks blink, the badge acts.
 *
 * Identical-geometry pairs get different jobs: cursor-loading-01 /
 * cursor-loading, cursor-magic-selection-01 / cursor-magic-selection,
 * cursor-move-01 / cursor-move, cursor-progress-01 / cursor-progress,
 * cursor-rectangle-selection-01 / cursor-rectangle-selection,
 * cursor-remove-selection-01 / cursor-remove-selection, cylinder-01 /
 * cylinder, dashboard-speed-01 / dashboard-speed, dashed-line-01 /
 * dashed-line.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  draw,
  fall,
  flex,
  flip,
  hold,
  hop,
  lap,
  nudge,
  point,
  pop,
  retrace,
  ride,
  scaleHold,
  settleSpecs,
  shake,
  spinStar,
  swell,
  swing,
  tap,
  twinkle,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const HAND = [12, 11.9]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const scribble = (origin, o = {}) => ride(origin, [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen', ...o })
const shuttle = (dx, dy, o = {}) => ride(C, [[0, 0], [-dx, -dy], [dx, dy], [-dx * 0.25, -dy * 0.25], [0, 0]], { as: 'arrow', dur: 0.66, ...o })
const minus = (c, o = {}) => flex('X', c, c, [1, 0.25, 1.12, 0.98, 1], { as: 'minus', ...o })
const plus = (c, o = {}) => lap(c, 90, { as: 'plus', dur: 0.62, ...o })
const cog = (c, o = {}) => lap(c, 360, { as: 'cog', dur: 1, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- cursors --------------------------------------------------------------------------
  'cursor-info-02': {
    verb: 'the pointer clicks and the question mark hops beside it',
    parts: [point([11.8, 9.8]), hop([18, 18], 1.2, { as: 'mark', delay: 0.14 })],
  },
  'cursor-info': {
    verb: 'the question mark pops and the hand taps',
    parts: [pop([15, 6], 1.3, { as: 'mark' }), tap(HAND, { delay: 0.14 })],
  },
  'cursor-loading-01': {
    verb: 'the hourglass flips over beside the hand',
    parts: [lap([15, 6], 180, { as: 'hourglass', dur: 0.7 }), null],
  },
  'cursor-loading': {
    verb: 'the hand taps and the hourglass spins a full turn while it waits',
    parts: [lap([15, 6], 360, { as: 'hourglass', dur: 1, delay: 0.1 }), tap(HAND)],
  },
  'cursor-loading-02': {
    verb: 'the hourglass flips over under the pointer',
    parts: [null, lap([18, 17.5], 180, { as: 'hourglass', dur: 0.7 })],
  },
  'cursor-magic-selection-01': {
    verb: 'the two sparkles twinkle beside the hand',
    parts: [twinkle([13.5, 7.5]), null, twinkle([17.8, 3.3], { delay: 0.16 })],
  },
  'cursor-magic-selection': {
    verb: 'the hand taps and the big sparkle spins onto its axis',
    parts: [spinStar([13.5, 7.5], { delay: 0.1 }), tap(HAND), pop([17.8, 3.3], 1.5, { as: 'spark', delay: 0.24 })],
  },
  'cursor-magic-selection-02': {
    verb: 'the pointer clicks and the sparkles twinkle above it',
    parts: [point([11.8, 12.9]), twinkle([11.5, 7.5], { delay: 0.1 }), twinkle([15.7, 3.3], { delay: 0.24 })],
  },
  'cursor-magic-selection-03': {
    verb: 'the magic rays flare out from the pointer tip',
    parts: [null, swell([9, 9], [8.3, 8.3], [1, 0.6, 1.16, 0.98, 1], { as: 'rays' })],
  },
  'cursor-magic-selection-04': {
    verb: 'the pointer clicks and the rays flicker around its tip',
    parts: [point([14.3, 14.3]), blink({ as: 'rays', dur: 0.6, delay: 0.1 })],
  },
  'cursor-move-01': {
    verb: 'the move arrows push outward in all four directions',
    parts: [pop([14.5, 6.5], 1.2, { as: 'arrows' }), null],
  },
  'cursor-move': {
    verb: 'the hand taps and the move arrows turn a quarter',
    parts: [lap([14.5, 6.5], 90, { as: 'arrows', dur: 0.66, delay: 0.1 }), tap(HAND)],
  },
  'cursor-move-02': {
    verb: 'the move arrows turn a quarter under the pointer',
    parts: [null, lap([17.5, 17.5], 90, { as: 'arrows', dur: 0.66 })],
  },
  'cursor-pointer-02': {
    verb: 'the click ripples light up from inner to outer ring',
    parts: [null, wave([8.3, 8.3]), wave([8.5, 8.5], { delay: 0.14 })],
  },
  'cursor-pointer': {
    verb: 'the pointer clicks and both ripple rings pop',
    parts: [point([15.4, 15.4]), pop([8.3, 8.3], 1.2, { as: 'ring', delay: 0.12 }), pop([8.5, 8.5], 1.1, { as: 'ring', delay: 0.2 })],
  },
  'cursor-progress-01': {
    verb: 'the spinner turns a full revolution beside the hand',
    parts: [null, lap([15.3, 6], 360, { as: 'spinner', dur: 0.9 })],
  },
  'cursor-progress': {
    verb: 'the hand taps and the spinner arc rewrites',
    parts: [tap(HAND), retrace({ as: 'spinner', delay: 0.12 })],
  },
  'cursor-progress-02': {
    verb: 'the busy mark spins a full turn beside the hand',
    parts: [null, lap([14.5, 6.5], 360, { as: 'busy', dur: 0.9 })],
  },
  'cursor-progress-03': {
    verb: 'the spinner turns a full revolution under the pointer',
    parts: [null, lap([17.8, 17.5], 360, { as: 'spinner', dur: 0.9 })],
  },
  'cursor-progress-04': {
    verb: 'the pointer clicks and the busy mark rewrites',
    parts: [point([9.8, 9.8]), retrace({ as: 'busy', delay: 0.12 })],
  },
  'cursor-rectangle-selection-01': {
    verb: 'the dashed selection rectangle draws around',
    parts: [null, retrace({ as: 'selection', dur: 0.76 })],
  },
  'cursor-rectangle-selection': {
    verb: 'the pointer clicks and the selection answers',
    parts: [point([15.9, 15.9]), beat([10, 10], { as: 'selection', delay: 0.2 })],
  },
  'cursor-rectangle-selection-02': {
    verb: 'the selection stretches out, holds, and snaps back',
    parts: [null, scaleHold([10, 10], 1.08, { as: 'selection' })],
  },
  'cursor-remove-selection-01': {
    verb: 'the minus squeezes short beside the hand',
    parts: [null, minus([15, 6.5])],
  },
  'cursor-remove-selection': {
    verb: 'the hand taps and the minus wipes back on',
    parts: [tap(HAND), draw({ as: 'minus', delay: 0.12 })],
  },
  'cursor-remove-selection-02': {
    verb: 'the minus squeezes short under the pointer',
    parts: [null, minus([17.5, 18.5])],
  },
  'cursor-text': {
    verb: 'the letter writes itself and the text caret blinks',
    parts: [draw({ as: 'letter' }), blink({ as: 'caret', dur: 0.8 })],
  },
  cursor: {
    verb: 'the hand pointer taps down',
    parts: [tap([12, 11.8])],
  },
  curtains: {
    verb: 'the curtains sway open from the rod and fall back',
    parts: [
      null,
      null,
      null,
      swing([7.5, 3], [7.5, 12], [0, 7, -3, 1, 0], { as: 'curtain' }),
      swing([16.5, 3], [16.5, 12], [0, -7, 3, -1, 0], { as: 'curtain' }),
    ],
  },
  'curvy-left-direction': {
    verb: 'the curvy arrow pushes left along its road',
    parts: [nudge(C, -1.8, 0)],
  },
  'curvy-left-right-direction': {
    verb: 'the curvy two-way arrow shuttles left and right',
    parts: [shuttle(1.2, 0)],
  },
  'curvy-right-direction': {
    verb: 'the curvy arrow pushes right along its road',
    parts: [nudge(C, 1.8, 0)],
  },
  'curvy-up-down-direction': {
    verb: 'the curvy two-way arrow shuttles up and down',
    parts: [shuttle(0, 1.2)],
  },
  'custom-field': {
    verb: 'the field value types in and the stepper hops',
    parts: [null, hop([16, 12], 1, { as: 'stepper', delay: 0.2 }), draw({ as: 'value' })],
  },
  'customer-service-01': {
    verb: 'the headset mic swings out and the earcups answer',
    parts: [beat([19.5, 14], { as: 'cup', delay: 0.2 }), beat([4.5, 14], { as: 'cup', delay: 0.2 }), null, retrace({ as: 'mic' })],
  },
  'customer-service-02': {
    verb: 'the mic redraws while the earcups bob',
    parts: [hop([19.5, 16], 0.8, { as: 'cup', delay: 0.1 }), retrace({ as: 'mic' }), hop([4.5, 16], 0.8, { as: 'cup' }), null],
  },
  'customer-service': {
    verb: 'the speech mark pops and the arc of conversation redraws',
    parts: [beat(C, { as: 'agent', delay: 0.3 }), pop([15, 9.5], 1.3, { as: 'speech' }), retrace({ as: 'arc', delay: 0.1 })],
  },
  'customer-support': {
    verb: 'the mic draws in and the headband answers',
    parts: [null, null, beat([12, 6], { as: 'band', delay: 0.3 }), draw({ as: 'mic' })],
  },
  customize: {
    verb: 'both toggle knobs slide across their tracks and back',
    parts: [hold([17.5, 17.5], -11, 0, { as: 'knob' }), null, hold([6.5, 6.5], 11, 0, { as: 'knob' }), null],
  },

  // --- cylinders --------------------------------------------------------------------------
  'cylinder-01': {
    verb: 'the cylinder lid hops off and lands',
    parts: [hop([12, 5.5], 1.4, { as: 'lid' }), null, null],
  },
  cylinder: {
    verb: 'the cylinder walls redraw and the top answers',
    parts: [beat([12, 5.5], { as: 'top', delay: 0.3 }), null, retrace({ as: 'walls' })],
  },
  'cylinder-02': {
    verb: 'the small top hops and the wide base answers',
    parts: [hop([12, 4], 1.2, { as: 'top' }), beat([12, 18], { as: 'base', delay: 0.28 }), null],
  },
  'cylinder-03': {
    verb: 'the top disc spins on the drum',
    parts: [null, flip([12, 5], 1, { as: 'disc' }), null],
  },
  'cylinder-04': {
    verb: 'a drop falls from the tank tap and refills',
    parts: [fall([12, 19], 0, 2, { as: 'drop' }), beat([12, 9], { as: 'tank', delay: 0.3 })],
  },

  // --- d ------------------------------------------------------------------------------------
  dam: {
    verb: 'the water ripples against the dam wall',
    parts: [null, ride([14.8, 12], [[0, 0], [-0.8, 0], [0.6, 0], [-0.2, 0], [0, 0]], { as: 'water', dur: 0.8 }), ride([15, 18], [[0, 0], [-0.8, 0], [0.6, 0], [-0.2, 0], [0, 0]], { as: 'water', dur: 0.8, delay: 0.1 })],
  },
  danger: {
    verb: 'the skull rattles and its eye sockets flare',
    parts: [pop([8.8, 11.3], 1.2, { as: 'eye', delay: 0.1 }), pop([15.3, 11.3], 1.2, { as: 'eye', delay: 0.1 }), null, shake([12, 12.2], { as: 'skull' }), ride([14, 20.8], out(0, 0.8), { as: 'teeth' }), ride([10, 20.8], out(0, 0.8), { as: 'teeth' })],
  },
  'dark-mode': {
    verb: 'the divider turns a half and the inner circle pops',
    parts: [null, pop(C, 1.12, { as: 'core', delay: 0.1 }), lap(C, 180, { as: 'divider', dur: 0.7 })],
  },
  dart: {
    verb: 'the dart lunges at the board and pulls back',
    parts: [
      ride([20.8, 3.3], out(-1.6, 1.6), { as: 'dart' }),
      ride([4.5, 19.5], out(-1.6, 1.6), { as: 'dart' }),
      ride([16.5, 7.5], out(-1.6, 1.6), { as: 'dart' }),
      ride([14.1, 9.9], out(-1.6, 1.6), { as: 'dart' }),
      ride([7.5, 16.5], out(-1.6, 1.6), { as: 'dart' }),
    ],
  },

  // --- dashboards ---------------------------------------------------------------------------
  'dashboard-browsing': {
    verb: 'the gauge needle sweeps and settles in the window',
    parts: [null, null, null, around([12, 17], [12, 16], [0, -60, 20, -6, 0], { as: 'needle' })],
  },
  'dashboard-circle-add': {
    verb: 'the plus turns a quarter beside the tiles',
    parts: [null, null, null, plus([17.3, 6.8])],
  },
  'dashboard-circle-edit': {
    verb: 'the pencil scribbles in the corner',
    parts: [null, null, null, scribble([17.6, 6.4])],
  },
  'dashboard-circle-remove': {
    verb: 'the minus squeezes short in the corner',
    parts: [null, null, null, minus([17.3, 6.8])],
  },
  'dashboard-circle-settings': {
    verb: 'the cog turns a full revolution in the corner',
    parts: [null, null, null, cog([17.3, 6.8])],
  },
  'dashboard-circle': {
    verb: 'the four circles pop clockwise',
    parts: [pop([17.3, 6.8], 1.2, { delay: 0.1 }), pop([6.8, 6.8], 1.2), pop([17.3, 17.3], 1.2, { delay: 0.2 }), pop([6.8, 17.3], 1.2, { delay: 0.3 })],
  },
  'dashboard-speed-01': {
    verb: 'the speed needle swings back and settles',
    parts: [around([12, 15], [13.5, 13], [0, -50, 15, -5, 0], { as: 'needle' }), null, null],
  },
  'dashboard-speed': {
    verb: 'the needle revs forward and the arc redraws behind it',
    parts: [around([12, 15], [13.5, 13], [0, 20, -6, 2, 0], { as: 'needle' }), retrace({ as: 'arc', delay: 0.06 }), null],
  },
  'dashboard-speed-02': {
    verb: 'the needle swings across the gauge and settles',
    parts: [pop([12, 18], 1.12, { as: 'hub', delay: 0.2 }), around([12, 15], [12, 12.5], [0, -60, 40, -10, 0], { as: 'needle', dur: 0.8 }), null],
  },
  'dashboard-square-02': {
    verb: 'the tiles hop in turn',
    parts: [hop([6.8, 7.8], 1), hop([6.8, 18.3], 1, { delay: 0.1 }), hop([17.3, 16.3], 1, { delay: 0.2 }), hop([17.3, 5.8], 1, { delay: 0.3 })],
  },
  'dashboard-square-03': {
    verb: 'the tiles pop in turn',
    parts: [pop([7.8, 5.8], 1.12), pop([18.3, 7.8], 1.12, { delay: 0.1 }), pop([18.3, 18.3], 1.12, { delay: 0.2 }), pop([7.8, 16.3], 1.12, { delay: 0.3 })],
  },
  'dashboard-square-add': {
    verb: 'the plus turns a quarter in the empty slot',
    parts: [plus([17.3, 6.8]), null, null, null],
  },
  'dashboard-square-edit': {
    verb: 'the pencil scribbles in the empty slot',
    parts: [scribble([17.6, 6.4]), null, null, null],
  },
  'dashboard-square-remove': {
    verb: 'the minus squeezes short in the empty slot',
    parts: [minus([17.3, 6.8]), null, null, null],
  },
  'dashboard-square-setting': {
    verb: 'the cog turns a full revolution in the slot',
    parts: [cog([17.3, 6.8]), null, null, null],
  },
  'dashboard-square': {
    verb: 'the diagonal tiles pop, then the other pair',
    parts: [pop([17.3, 17.3], 1.12), pop([17.3, 6.8], 1.12, { delay: 0.14 }), pop([6.8, 17.3], 1.12, { delay: 0.14 }), pop([6.8, 6.8], 1.12)],
  },

  // --- dashed lines ------------------------------------------------------------------------
  'dashed-line-01': {
    verb: 'the dashes march to the right one after another',
    parts: [nudge([20.3, 12], 1, 0, { as: 'dash', delay: 0.24 }), nudge([14.8, 12], 1, 0, { as: 'dash', delay: 0.16 }), nudge([9.3, 12], 1, 0, { as: 'dash', delay: 0.08 }), nudge([3.8, 12], 1, 0, { as: 'dash' })],
  },
  'dashed-line': {
    verb: 'the dashes blink on from left to right',
    parts: [blink({ as: 'dash', dur: 0.5, delay: 0.3 }), blink({ as: 'dash', dur: 0.5, delay: 0.2 }), blink({ as: 'dash', dur: 0.5, delay: 0.1 }), blink({ as: 'dash', dur: 0.5 })],
  },
  'dashed-line-02': {
    verb: 'the dashed square outline rewrites itself',
    parts: [retrace({ as: 'outline', dur: 0.76 })],
  },
  'dashed-line-circle': {
    verb: 'the dashed circle spins a full turn',
    parts: [lap(C, 360, { as: 'dashes', dur: 1 })],
  },

  // --- databases ----------------------------------------------------------------------------
  'data-recovery': {
    verb: 'the recovery arrow turns a full circle and the drive ticks blink',
    parts: [null, null, null, blink({ as: 'tick', dur: 0.6 }), blink({ as: 'tick', dur: 0.6, delay: 0.12 }), lap([17.5, 18], 360, { as: 'arrow', dur: 0.9 })],
  },
  'database-01': {
    verb: 'the server lights blink and the slots redraw',
    parts: [null, null, draw({ as: 'slot', delay: 0.06 }), blink({ as: 'led', dur: 0.6 }), draw({ as: 'slot', delay: 0.18 }), blink({ as: 'led', dur: 0.6, delay: 0.12 })],
  },
  'database-02': {
    verb: 'the disk ticks blink in turn and the top answers',
    parts: [beat([12, 5], { as: 'top', delay: 0.3 }), null, null, blink({ as: 'tick', dur: 0.6 }), blink({ as: 'tick', dur: 0.6, delay: 0.12 })],
  },
  'database-add': {
    verb: 'the plus badge turns a quarter beside the stack',
    parts: [null, null, null, null, null, lap([17, 18], 90, { as: 'badge', dur: 0.66 })],
  },
  'database-backup': {
    verb: 'the backup arrow rewrites around and its head pops',
    parts: [null, null, retrace({ as: 'arrow' }), null, pop([13.5, 14.7], 1.3, { as: 'head', delay: 0.4 })],
  },
  'database-expand': {
    verb: 'the four corners push outward around the database',
    parts: [
      null,
      null,
      beat([12, 13], { as: 'db', delay: 0.2 }),
      nudge([20, 4], 1.2, -1.2, { as: 'corner' }),
      nudge([4, 4], -1.2, -1.2, { as: 'corner' }),
      nudge([20, 20], 1.2, 1.2, { as: 'corner' }),
      nudge([4, 20], -1.2, 1.2, { as: 'corner' }),
    ],
  },
  'database-export': {
    verb: 'the arrow pushes up out of the stack',
    parts: [null, null, null, null, null, nudge([16.5, 18], 0, -1.6, { as: 'arrow' })],
  },
  'database-import': {
    verb: 'the arrow pushes down into the stack',
    parts: [null, null, null, null, null, nudge([17.5, 18], 0, 1.6, { as: 'arrow' })],
  },
  'database-lightning': {
    verb: 'the bolt flashes and the disk lights blink',
    parts: [null, null, null, pop([17, 16], 1.2, { as: 'bolt' }), blink({ as: 'led', dur: 0.6 }), blink({ as: 'led', dur: 0.6, delay: 0.12 })],
  },
  'database-locked': {
    verb: 'the lock rattles beside the stack',
    parts: [null, null, null, null, null, shake([17.5, 17.3], { as: 'lock' })],
  },
}

export default settleSpecs(specs)
