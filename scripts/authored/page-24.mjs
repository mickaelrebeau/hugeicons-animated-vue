/**
 * Page 24 — database-restore → dice-faces-04.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped: delete-02,
 * diamond-02, and the hidden database.
 *
 * Delivery icons share a box (body, lid, tape) and a truck (wheels, body,
 * cab). The box or truck stays put and the badge acts (return arrow, lock,
 * pin, eye, clock); trucks without a badge drive or bump. Bins lift their
 * lid. Dialpads light their keys in a pattern that differs per variant.
 *
 * Identical-geometry pairs get different jobs: delivery-box /
 * delivery-box-01, delivery-return / -01, delivery-secure / -01,
 * delivery-tracking / -01, delivery-view / -01, delivery-truck / -01,
 * diagonal-scroll-point / -01, dialpad-circle / -01, dialpad-square / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  dim,
  draw,
  flex,
  flip,
  glint,
  hold,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  swell,
  trail,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const WOBBLE = [0, -8, 6, -2, 0]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const BUMP = [[0, 0], [0, -0.8], [0, 0.2], [0, -0.4], [0, 0]]
const minus = (c, o = {}) => flex('X', c, c, [1, 0.25, 1.12, 0.98, 1], { as: 'minus', ...o })
const plus = (c, o = {}) => lap(c, 90, { as: 'plus', dur: 0.62, ...o })
const spin = (c, deg = 360, o = {}) => lap(c, deg, { as: 'spin', dur: 0.9, ...o })
const search = (c, o = {}) => ride(c, [[0, 0], [-0.8, -0.6], [0.6, -0.8], [0.2, 0.4], [0, 0]], { as: 'loupe', dur: 0.8, ...o })

/** A truck (wheels, body, cab/extra parts) moving together. */
const truck = (centers, keys, o = {}) => centers.map((c) => (c ? ride(c, keys, { as: 'truck', ...o }) : null))
const WHEELS = [[17, 17.5], [7, 17.5], [12, 10.8]]
const DRIVE = out(1.4, 0)

/** The shackle lifts and clicks back down. */
const click = (center, o = {}) =>
  ride(center, [[0, 0], [0, -1.3], [0, 0.25], [0, 0], [0, 0]], { as: 'shackle', times: [0, 0.3, 0.52, 0.76, 1], dur: 0.56, ...o })

/** An eye blinking shut and open. */
const blinkEye = (pivot, center, o = {}) => flex('Y', pivot, center, [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5, ...o })

/** Keys of a 3×3 pad: pop each with a delay from a 0..n order list. */
const keys = (centers, order, step = 0.06) => centers.map((c, i) => pop(c, 1.25, { as: 'key', delay: order[i] * step }))
const PAD9 = [[4, 4], [4, 12], [4, 20], [12, 4], [12, 12], [12, 20], [20, 4], [20, 12], [20, 20]]
const PAD7 = [[4, 4], [4, 12], [12, 4], [12, 12], [12, 20], [20, 4], [20, 12]]

// ---------------------------------------------------------------------------

const specs = {
  // --- databases -----------------------------------------------------------------------
  'database-restore': {
    verb: 'the restore arrow turns back a full circle and the disk ticks blink',
    parts: [null, blink({ as: 'tick', dur: 0.6 }), blink({ as: 'tick', dur: 0.6, delay: 0.12 }), spin([17, 17.5], -360), null, null],
  },
  'database-search': {
    verb: 'the loupe circles over the database',
    parts: [search([16.5, 17.5]), null, null, null],
  },
  'database-setting': {
    verb: 'the cog turns a full revolution beside the stack',
    parts: [null, null, null, null, null, lap([17, 17.5], 360, { as: 'cog', dur: 1 })],
  },
  'database-sync-01': {
    verb: 'the sync arrows chase a full turn beside the stack',
    parts: [null, null, null, spin([17, 18]), null, null],
  },
  'database-sync': {
    verb: 'the sync arrows chase a full turn while the server lights blink',
    parts: [null, null, null, blink({ as: 'led', dur: 0.6 }), blink({ as: 'led', dur: 0.6, delay: 0.12 }), spin([18, 17.5])],
  },
  'database-zap': {
    verb: 'the bolt strikes beside the stack and the top answers',
    parts: [beat([11, 5], { as: 'top', delay: 0.24 }), null, null, pop([17.1, 18], 1.25, { as: 'bolt' })],
  },
  'date-time': {
    verb: 'the calendar rings hop and the clock hands turn',
    parts: [hop([12, 4], 1, { as: 'rings' }), null, null, spin([17, 18], 360, { delay: 0.1 })],
  },
  dates: {
    verb: 'the two dates hop off the branch in turn',
    parts: [hop([13.8, 13.7], 1.2, { as: 'date', delay: 0.12 }), around([2, 14], [9.3, 10.6], [0, -4, 3, -1, 0], { as: 'branch' }), hop([14.5, 13.5], 1.2, { as: 'date' })],
  },
  datev: {
    verb: 'the DATEV letters hop in a wave',
    parts: [hop([3, 12], 1), hop([7.8, 12], 1, { delay: 0.06 }), hop([20.8, 12], 1, { delay: 0.24 }), hop([11.8, 12], 1, { delay: 0.12 }), hop([16, 12], 1, { delay: 0.18 })],
  },
  dead: {
    verb: 'the X eyes rattle and the flat mouth shrinks',
    parts: [null, minus([12, 16]), shake([12, 9.5], { as: 'eyes' })],
  },
  deepseek: {
    verb: 'the whale bobs through a wave',
    parts: [
      ride([12.1, 12], [[0, 0], [0, -1], [0, 0.4], [0, -0.2], [0, 0]], { as: 'whale', dur: 0.8 }),
      ride([13.5, 11.4], [[0, 0], [0, -1], [0, 0.4], [0, -0.2], [0, 0]], { as: 'whale', dur: 0.8 }),
      ride([8.5, 12.7], [[0, 0], [0, -1], [0, 0.4], [0, -0.2], [0, 0]], { as: 'whale', dur: 0.8 }),
    ],
  },

  // --- delete --------------------------------------------------------------------------
  'delete-01': {
    verb: 'the bin lid tilts open on its hinge and closes',
    parts: [null, around([3, 5.5], [12, 3.8], [0, -14, 3, -1, 0], { as: 'lid' })],
  },
  'delete-03': {
    verb: 'the lid hops and the lines inside wipe on',
    parts: [null, draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.2 }), hop([12, 3.8], 1.2, { as: 'lid' })],
  },
  'delete-04': {
    verb: 'the X spins a quarter beside the bin',
    parts: [null, plus([16.5, 18.5], { as: 'x' }), null],
  },
  'delete-column': {
    verb: 'the X rattles and the column it marks fades',
    parts: [null, shake([18.5, 12], { as: 'x' }), null, dim({ as: 'column', delay: 0.1 })],
  },
  'delete-put-back': {
    verb: 'the lid lifts off, holds, and is put back',
    parts: [null, hold([12, 3.7], 0, -1.6, { as: 'lid' })],
  },
  'delete-row': {
    verb: 'the X spins and the row it marks fades',
    parts: [null, plus([12, 18.5], { as: 'x' }), null, dim({ as: 'row', delay: 0.1 })],
  },
  'delete-throw': {
    verb: 'the item is thrown up out of the bin while the lid hops',
    parts: [null, nudge([12, 14], 0, -1.8, { as: 'item' }), hop([12, 3.8], 1, { as: 'lid', delay: 0.06 })],
  },
  delete: {
    verb: 'the bin rattles and the lid hops',
    parts: [shake([12, 13.8], { as: 'bin', delay: 0.06 }), hop([12, 3.8], 1, { as: 'lid' })],
  },

  // --- delivery ---------------------------------------------------------------------------
  'delivered-sent': {
    verb: 'the van pulls forward as the sent arrow draws',
    parts: [...truck([[17, 19], [7, 19], C, [18.3, 9.5]], DRIVE), draw({ as: 'arrow', delay: 0.1 })],
  },
  'delivery-box-01': {
    verb: 'the box lid hops open and shuts',
    parts: [null, hop([12, 5], 1.4, { as: 'lid' }), hop([12, 5], 1.4, { as: 'lid' }), null],
  },
  'delivery-box': {
    verb: 'the label writes on the box and the box answers',
    parts: [beat([12, 14.5], { as: 'box', delay: 0.3 }), null, null, draw({ as: 'label' })],
  },
  'delivery-box-02': {
    verb: 'the open box lid flaps up and settles',
    parts: [null, hop([12, 4.5], 1.4, { as: 'lid' }), draw({ as: 'label', delay: 0.2 })],
  },
  'delivery-delay-01': {
    verb: 'the truck bumps along and the clock pops',
    parts: [...truck([[17, 19.5], [7, 19.5], [12, 12.8]], BUMP), pop([6.5, 6.5], 1.2, { as: 'clock', delay: 0.2 })],
  },
  'delivery-delay-02': {
    verb: 'the delay clock rattles over the truck',
    parts: [null, null, null, shake([6.5, 6.5], { as: 'clock' })],
  },
  'delivery-delay': {
    verb: 'the clock hands turn a full circle over the waiting truck',
    parts: [null, null, null, spin([6.5, 6.5])],
  },
  'delivery-return-01': {
    verb: 'the return arrow pulls back to the left',
    parts: [null, null, null, nudge([17.5, 18], -1.6, 0, { as: 'arrow' }), null],
  },
  'delivery-return': {
    verb: 'the return arrow rewrites and the box answers',
    parts: [beat([12, 14.5], { as: 'box', delay: 0.3 }), null, null, retrace({ as: 'arrow' }), null],
  },
  'delivery-return-02': {
    verb: 'the return arrow pulls back to the left',
    parts: [null, null, nudge([17.5, 17.5], -1.6, 0, { as: 'arrow' })],
  },
  'delivery-secure-01': {
    verb: 'the shackle on the box clicks shut',
    parts: [null, null, null, null, click([18, 15.3]), null],
  },
  'delivery-secure': {
    verb: 'the lock on the box rattles to prove it holds',
    parts: [null, null, null, null, shake([18, 17.5], { as: 'lock' }), shake([18, 17.5], { as: 'lock' })],
  },
  'delivery-secure-02': {
    verb: 'the shackle clicks and the lock body answers',
    parts: [null, null, click([18, 15.3]), beat([18, 19.3], { as: 'lock', delay: 0.24 })],
  },
  'delivery-sent-01': {
    verb: 'the sent arrow pushes forward on the truck',
    parts: [null, null, null, nudge([8.5, 9.5], 1.4, 0, { as: 'arrow' })],
  },
  'delivery-sent-02': {
    verb: 'the truck pulls away and rolls back',
    parts: truck([[17, 17.5], [7, 17.5], [12, 10.8], [8.5, 9.5]], DRIVE),
  },
  'delivery-sent': {
    verb: 'the sent arrow draws on the truck',
    parts: [null, null, null, draw({ as: 'arrow' })],
  },
  'delivery-tracking-01': {
    verb: 'the tracking pin hops on the box',
    parts: [null, null, null, null, hop([18, 17.3], 1.2, { as: 'pin' }), hop([18, 16.5], 1.2, { as: 'pin' })],
  },
  'delivery-tracking': {
    verb: 'the pin dot pops and the pin answers',
    parts: [null, null, null, null, beat([18, 17.3], { as: 'pin', delay: 0.2 }), pop([18, 16.5], 2.2, { as: 'dot' })],
  },
  'delivery-tracking-02': {
    verb: 'the tracking pin hops on the open box',
    parts: [null, null, hop([18, 17.3], 1.2, { as: 'pin' }), hop([18, 16.5], 1.2, { as: 'pin' })],
  },
  'delivery-truck-01': {
    verb: 'the truck pulls forward with speed lines',
    parts: [...truck([[17, 17.5], [7, 17.5], [12, 10.8]], DRIVE), draw({ as: 'speed', delay: 0.1 })],
  },
  'delivery-truck-02': {
    verb: 'the truck bounces over a bump',
    parts: [...truck([null, null, [12, 10.8], [5, 8.5]], BUMP)],
  },
  'delivery-truck': {
    verb: 'the truck pulls forward and its speed lines trail behind',
    parts: [...truck([[17, 17.5], [7, 17.5], [12, 10.8]], DRIVE), blink({ as: 'speed', dur: 0.5 })],
    extras: [trail('M0.6 13H2.2', -1.4)],
  },
  'delivery-view-01': {
    verb: 'the eye on the box looks left and right',
    parts: [null, null, null, null, null, ride([16.5, 18.5], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'pupil' })],
  },
  'delivery-view': {
    verb: 'the eye on the box blinks',
    parts: [null, null, null, null, blinkEye([16.5, 18.5], [16.5, 18.5]), blinkEye([16.5, 18.5], [16.5, 18.5])],
  },
  'delivery-view-02': {
    verb: 'the eye on the open box blinks',
    parts: [null, null, blinkEye([16.5, 18.5], [16.5, 18.5]), blinkEye([16.5, 18.5], [16.5, 18.5])],
  },

  // --- dental ------------------------------------------------------------------------------
  'dental-braces': {
    verb: 'the brace wire draws across and the bracket pops',
    parts: [null, pop(C, 1.2, { as: 'bracket', delay: 0.2 }), draw({ as: 'wire' }), draw({ as: 'wire' })],
  },
  'dental-broken-tooth': {
    verb: 'the broken tooth winces',
    parts: [shake([13.1, 11.6], { as: 'tooth' })],
  },
  'dental-care': {
    verb: 'the care check writes beside the tooth',
    parts: [beat([10.1, 10.6], { as: 'tooth', delay: 0.3 }), draw({ as: 'check' })],
  },
  'dental-tooth': {
    verb: 'the tooth gleams',
    parts: [pop([12, 11.6], 1.06, { as: 'tooth' })],
    extras: [glint(17.5, 4.6, 1, { delay: 0.14 })],
  },
  departement: {
    verb: 'the office windows flicker on',
    parts: [beat(C, { as: 'building', delay: 0.3 }), blink({ as: 'windows', dur: 0.6 })],
  },
  desert: {
    verb: 'the desert sun pulses and the cactus waves its arms',
    parts: [null, null, null, around([8, 18], [6, 15.5], [0, 10, -4, 2, 0], { as: 'arm' }), around([8, 16], [10, 12.5], [0, -10, 4, -2, 0], { as: 'arm', delay: 0.06 }), pop([18, 6], 1.15, { as: 'sun' })],
  },
  'desk-01': {
    verb: 'the drawer slides out, holds, and shuts',
    parts: [null, null, hold([17.5, 12], 1.4, 0, { as: 'drawer' }), hold([17.5, 14], 1.4, 0, { as: 'drawer' }), null],
  },
  'desk-02': {
    verb: 'the drawer pops out and springs back',
    parts: [null, null, ride([17.5, 12], out(1.4, 0), { as: 'drawer' }), ride([17.5, 12], out(1.4, 0), { as: 'drawer' }), null],
  },
  desk: {
    verb: 'the monitor hops on the desk',
    parts: [beat([12, 12.5], { as: 'desk', delay: 0.26 }), hop([12, 5], 1.2, { as: 'monitor' }), null, null, null],
  },
  dessert: {
    verb: 'the cherry hops on top of the dessert',
    parts: [hop([11, 6], 1.4, { as: 'cherry' }), null, beat([11, 19], { as: 'plate', delay: 0.3 }), null, hop([11.5, 3], 1.4, { as: 'cherry' })],
  },
  detergent: {
    verb: 'the cap hops off and the drop on the label pops',
    parts: [hop([10.5, 3.3], 1.2, { as: 'cap' }), null, pop([13.8, 9.2], 1.2, { as: 'drop', delay: 0.16 })],
  },
  developer: {
    verb: 'the slash writes and the brackets part on the developer’s shirt',
    parts: [null, nudge([14.8, 10.5], 0.8, 0, { as: 'bracket', delay: 0.1 }), nudge([6.3, 10.5], -0.8, 0, { as: 'bracket', delay: 0.1 }), draw({ as: 'slash' })],
  },
  deviantart: {
    verb: 'the logo flips over',
    parts: [flip(C, 1, { as: 'logo' })],
  },
  'device-access': {
    verb: 'the key turns beside the phone and the screen dot answers',
    parts: [null, around([18, 11], [14, 11], [0, -18, 6, -2, 0], { as: 'key' }), pop([10, 19], 2, { as: 'dot', delay: 0.24 }), null],
  },
  'diagonal-scroll-point-01': {
    verb: 'the two arrows push out along the diagonal',
    parts: [null, nudge([6.8, 17.2], -1.2, 1.2, { as: 'arrow' }), nudge([17.2, 6.8], 1.2, -1.2, { as: 'arrow' })],
  },
  'diagonal-scroll-point': {
    verb: 'the anchor dot pops and the arrows shuttle along the diagonal',
    parts: [pop(C, 1.3, { as: 'dot' }), ride([6.8, 17.2], [[0, 0], [-1, 1], [0.6, -0.6], [0, 0], [0, 0]], { as: 'arrow' }), ride([17.2, 6.8], [[0, 0], [1, -1], [-0.6, 0.6], [0, 0], [0, 0]], { as: 'arrow' })],
  },
  'diagonal-scroll-point-02': {
    verb: 'the two arrows push out along the other diagonal',
    parts: [null, nudge([6.8, 6.8], -1.2, -1.2, { as: 'arrow' }), nudge([17.2, 17.2], 1.2, 1.2, { as: 'arrow' })],
  },

  // --- dialpads ----------------------------------------------------------------------------
  'dialpad-circle-01': {
    verb: 'the keys light up in reading order',
    parts: keys(PAD9, [0, 3, 6, 1, 4, 7, 2, 5, 8]),
  },
  'dialpad-circle': {
    verb: 'the keys ripple out from the center key',
    parts: keys(PAD9, [2, 1, 2, 1, 0, 1, 2, 1, 2], 0.12),
  },
  'dialpad-circle-02': {
    verb: 'the keys light up column by column',
    parts: keys(PAD7, [0, 0, 1, 1, 1, 2, 2], 0.12),
  },
  'dialpad-square-01': {
    verb: 'the keys light up along the diagonals',
    parts: keys(PAD9, [0, 1, 2, 1, 2, 3, 2, 3, 4], 0.1),
  },
  'dialpad-square': {
    verb: 'the keys light up row by row',
    parts: keys(PAD9, [0, 1, 2, 0, 1, 2, 0, 1, 2], 0.12),
  },
  'dialpad-square-02': {
    verb: 'the keys light up in reading order',
    parts: keys(PAD7, [0, 3, 1, 4, 6, 2, 5]),
  },

  // --- diameter / diamonds / diaper / dice -------------------------------------------------
  diameter: {
    verb: 'the diameter arrows push out to the rim',
    parts: [nudge([16.3, 12], 1.2, 0, { as: 'arm' }), nudge([7.8, 12], -1.2, 0, { as: 'arm' }), pop(C, 1.3, { as: 'center', delay: 0.1 }), null, nudge([6, 12], -1.2, 0, { as: 'arm' }), nudge([18, 12], 1.2, 0, { as: 'arm' })],
  },
  'diamond-01': {
    verb: 'the diamond sparkles',
    parts: [pop([12.5, 12], 1.06, { as: 'gem' })],
    extras: [glint(18.6, 4, 1, { delay: 0.12 })],
  },
  'diamond-minus': {
    verb: 'the minus squeezes short in the diamond',
    parts: [beat(C, { as: 'frame', delay: 0.3 }), minus(C)],
  },
  'diamond-percent': {
    verb: 'the percent sign turns a half and lands on itself',
    parts: [
      null,
      around(C, C, [0, 36, 126, 185.4, 180], { as: 'percent', dur: 0.76 }),
      around(C, [9.3, 9.3], [0, 36, 126, 185.4, 180], { as: 'percent', dur: 0.76 }),
      around(C, [14.8, 14.8], [0, 36, 126, 185.4, 180], { as: 'percent', dur: 0.76 }),
    ],
  },
  'diamond-plus': {
    verb: 'the plus turns a quarter in the diamond',
    parts: [beat(C, { as: 'frame', delay: 0.3 }), plus(C)],
  },
  diamond: {
    verb: 'the diamond turns a quarter onto itself',
    parts: [lap(C, 90, { as: 'diamond', dur: 0.7 })],
  },
  diaper: {
    verb: 'the side tabs fasten in, hold, and release',
    parts: [null, hold([20, 8], -1, 0, { as: 'tab' }), hold([4, 8], 1, 0, { as: 'tab' }), null, null],
  },
  'dice-faces-01': {
    verb: 'the die rattles and its single pip pops',
    parts: [shake(C, { as: 'die' }), pop(C, 1.8, { as: 'pip', delay: 0.2 })],
  },
  'dice-faces-02': {
    verb: 'the die tumbles and both pips pop',
    parts: [around(C, C, WOBBLE, { as: 'die' }), pop([8, 8], 1.8, { as: 'pip', delay: 0.2 }), pop([16, 16], 1.8, { as: 'pip', delay: 0.3 })],
  },
  'dice-faces-03': {
    verb: 'the three pips pop down the diagonal',
    parts: [beat(C, { as: 'die', delay: 0.3 }), pop([8, 8], 1.8, { as: 'pip' }), pop(C, 1.8, { as: 'pip', delay: 0.1 }), pop([16, 16], 1.8, { as: 'pip', delay: 0.2 })],
  },
  'dice-faces-04': {
    verb: 'the four pips pop clockwise',
    parts: [beat(C, { as: 'die', delay: 0.36 }), pop([8, 8], 1.8, { as: 'pip' }), pop([8, 16], 1.8, { as: 'pip', delay: 0.27 }), pop([16, 16], 1.8, { as: 'pip', delay: 0.18 }), pop([16, 8], 1.8, { as: 'pip', delay: 0.09 })],
  },
}

export default settleSpecs(specs)
