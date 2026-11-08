/**
 * Page 22 — cosine-01 → cursor-info-01.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted credit-card and crown sit in this span and are skipped.
 *
 * Cursors: the hand pointer taps down, the arrow pointer clicks toward its
 * tip; the badge beside it (plus, clock, block sign, selection ring) does
 * its own job. Credit cards keep the card still and let the corner mark act.
 * Food gets a wobble or a hop; tools swing from where they are held.
 *
 * Identical-geometry pairs get different jobs: cosine-01 / cosine,
 * coupon-01 / coupon, css-file-01 / css-file, csv-01 / csv, cupcake-01 /
 * cupcake, cursor-add-selection-01 / cursor-add-selection,
 * cursor-circle-selection-01 / cursor-circle-selection, cursor-disabled-01 /
 * cursor-disabled, cursor-edit-01 / cursor-edit, cursor-hold-01 / cursor-hold.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  around,
  beat,
  blink,
  compute,
  dim,
  draw,
  flex,
  glint,
  hold,
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
  swell,
  swing,
  tap,
  point,
  trail,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const TURN = [0, 72, 252, 370.8, 360]
const HALF = [0, 36, 126, 185.4, 180]
const WOBBLE = [0, -8, 6, -2, 0]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]

const card = (o = {}) => beat(C, { as: 'card', delay: 0.3, ...o })
const wave = (keys, o = {}) => ride(C, keys, { as: 'wave', dur: 0.8, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- cosine -----------------------------------------------------------------------------
  'cosine-01': {
    verb: 'the cosine curve retracts and rewrites across the axis',
    parts: [retrace({ as: 'curve', dur: 0.76 }), null, null, null],
  },
  cosine: {
    verb: 'the cosine curve damps flat against the axis and swings back out',
    parts: [flex('Y', C, [12, 12.8], [1, 0.4, 1.12, 0.96, 1], { as: 'curve', dur: 0.8 }), null, null, null],
  },
  'cosine-02': {
    verb: 'the wave shifts phase along the axis and settles',
    parts: [wave([[0, 0], [-1, 0], [0.6, 0], [-0.2, 0], [0, 0]]), null, null, null],
  },

  // --- co* ---------------------------------------------------------------------------------
  cottage: {
    verb: 'the round window lights up and the door opens a crack',
    parts: [null, pop([12, 9], 1.35, { as: 'window' }), null, flex('X', [9, 18], [12, 18], [1, 0.6, 0.6, 1, 1], { as: 'door', delay: 0.12 })],
  },
  'cotton-candy': {
    verb: 'the cotton candy twirls on its stick',
    parts: [swing([5, 19], [14, 10], WOBBLE, { as: 'candy' }), swing([5, 19], [5, 19], WOBBLE, { as: 'candy' })],
  },
  'coupon-01': {
    verb: 'the percent slash writes and its dots pop',
    parts: [draw({ as: 'slash' }), null, pop([9.3, 8.2], 2.2, { as: 'dot', delay: 0.2 }), pop([14.8, 13.7], 2.2, { as: 'dot', delay: 0.3 })],
  },
  coupon: {
    verb: 'the coupon swings from its top edge',
    parts: [
      swing([12, 2], [12, 11], [0, -6, 4, -1.5, 0], { as: 'coupon' }),
      swing([12, 2], C, [0, -6, 4, -1.5, 0], { as: 'coupon' }),
      swing([12, 2], [9.3, 8.2], [0, -6, 4, -1.5, 0], { as: 'coupon' }),
      swing([12, 2], [14.8, 13.7], [0, -6, 4, -1.5, 0], { as: 'coupon' }),
    ],
  },
  'coupon-02': {
    verb: 'the slash retraces and the dots pop on the ticket',
    parts: [beat(C, { as: 'ticket', delay: 0.32 }), retrace({ as: 'slash' }), pop([9.3, 9.3], 2.2, { as: 'dot', delay: 0.12 }), pop([14.8, 14.8], 2.2, { as: 'dot', delay: 0.22 })],
  },
  'coupon-03': {
    verb: 'the ticket waggles like it was just torn off',
    parts: [around(C, C, WOBBLE, { as: 'ticket' })],
  },
  'coupon-percent': {
    verb: 'the percent sign turns a half and lands on itself',
    parts: [around(C, C, HALF, { as: 'percent', dur: 0.76 }), around(C, [9.3, 9.3], HALF, { as: 'percent', dur: 0.76 }), around(C, [14.8, 14.8], HALF, { as: 'percent', dur: 0.76 }), null],
  },
  course: {
    verb: 'the graduation cap hops off the board',
    parts: [beat([11.5, 12], { as: 'board', delay: 0.3 }), hop([14, 9], 1.4, { as: 'cap' })],
  },
  'court-house': {
    verb: 'the roof and pediment settle onto the courthouse',
    parts: [
      ride([12, 8.5], out(0, -1.4), { as: 'pediment', delay: 0.08 }),
      beat([12, 20.5], { as: 'base', delay: 0.3 }),
      ride([12, 9], out(0, -1.4), { as: 'pediment', delay: 0.08 }),
      null,
      ride([12, 3.5], out(0, -1.4), { as: 'roof' }),
      null,
    ],
  },
  'court-law': {
    verb: 'the gavel swings down and strikes',
    parts: [beat(C, { as: 'frame', delay: 0.26 }), around([16, 16], [12, 12.5], [0, -22, 4, 0, 0], { as: 'gavel', dur: 0.56 })],
  },
  covariate: {
    verb: 'the data points pop and the trend line draws through them',
    parts: [
      null,
      draw({ as: 'trend', delay: 0.2 }),
      pop([7.3, 10.3], 2.2, { as: 'point' }),
      pop([12.3, 6.3], 2.2, { as: 'point', delay: 0.08 }),
      pop([14.3, 15.3], 2.2, { as: 'point', delay: 0.16 }),
      pop([19.3, 11.3], 2.2, { as: 'point', delay: 0.24 }),
    ],
  },
  'covid-info': {
    verb: 'the virus wobbles inside the circle, which answers',
    parts: [beat(C, { as: 'ring', delay: 0.3 }), around([12, 12.8], [12, 12.8], [0, -14, 10, -4, 0], { as: 'virus' })],
  },
  'cowboy-hat': {
    verb: 'the cowboy tips the hat by its brim',
    parts: [
      swing([2, 17], [12, 17], [0, -8, 2, -0.6, 0], { as: 'hat' }),
      swing([2, 17], [12, 8], [0, -8, 2, -0.6, 0], { as: 'hat' }),
      swing([2, 17], [12, 10.5], [0, -8, 2, -0.6, 0], { as: 'hat' }),
    ],
  },
  cpp: {
    verb: 'the C rewrites and the two pluses turn in turn',
    parts: [null, retrace({ as: 'c' }), lap(C, 90, { as: 'plus', dur: 0.56, delay: 0.1 }), lap([17.5, 12], 90, { as: 'plus', dur: 0.56, delay: 0.22 })],
  },

  // --- cpu ----------------------------------------------------------------------------------
  'cpu-charge': {
    verb: 'the bolt flashes and the pins light up with current',
    parts: [
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      blink({ as: 'pin', dur: 0.5, delay: 0.1 }),
      pop(C, 1.25, { as: 'bolt' }),
      null,
    ],
  },
  'cpu-settings': {
    verb: 'the cog turns a full revolution in the corner of the chip',
    parts: [null, lap([18, 16.5], 360, { as: 'cog', dur: 1 }), null, null, null, null, null, null, draw({ as: 'trace', delay: 0.2 })],
  },
  cpu: {
    verb: 'the chip computes while the inner traces redraw',
    parts: [compute(C), null, null, null, null, draw({ as: 'trace', delay: 0.1 }), draw({ as: 'trace', delay: 0.22 }), null, null, null, null],
  },

  // --- cr* -------------------------------------------------------------------------------------
  crab: {
    verb: 'the crab snaps both claws and blinks its eye stalks',
    parts: [
      around([18, 12], [20, 8.5], [0, 12, -4, 8, 0], { as: 'claw' }),
      around([6, 12], [4, 8.5], [0, -12, 4, -8, 0], { as: 'claw' }),
      null,
      null,
      null,
      hop([12, 9.3], 0.8, { as: 'eyes', delay: 0.1 }),
    ],
  },
  crane: {
    verb: 'the crane hook swings and the track wheels roll',
    parts: [null, null, around([15, 4], [17.8, 8], [0, -6, 4, -1.5, 0], { as: 'arm', dur: 0.8 }), pop([10, 19], 2, { as: 'wheel', delay: 0.1 }), pop([5.5, 19], 2, { as: 'wheel' }), pop([14.5, 19], 2, { as: 'wheel', delay: 0.2 })],
  },
  crazy: {
    verb: 'one eye bulges, the other squints, and the grin wobbles',
    parts: [null, pop([8.5, 10.5], 0.7, { as: 'eye' }), pop([15.5, 8.5], 1.3, { as: 'eye' }), around([12.1, 15.3], [12.1, 15.3], [0, -8, 6, -2, 0], { as: 'mouth' })],
  },
  'creative-commons': {
    verb: 'the two Cs hop in turn inside the circle',
    parts: [hop([8, 12], 1.2, { as: 'c' }), hop([15, 12], 1.2, { as: 'c', delay: 0.12 }), beat(C, { as: 'ring', delay: 0.3 })],
  },
  'creative-market': {
    verb: 'the price tag swings from its hole',
    parts: [swing([17.8, 6.3], [11.8, 12.2], [0, 8, -5, 2, 0], { as: 'tag' }), swing([17.8, 6.3], [11, 13], [0, 8, -5, 2, 0], { as: 'tag' }), null],
  },

  // --- credit cards ----------------------------------------------------------------------------
  'credit-card-accept': {
    verb: 'the check writes beside the card, which answers',
    parts: [card(), null, draw({ as: 'check' })],
  },
  'credit-card-add': {
    verb: 'the plus turns a quarter beside the card',
    parts: [null, lap([18.5, 16.5], 90, { as: 'plus', dur: 0.62 }), null],
  },
  'credit-card-change': {
    verb: 'the exchange arrows chase each other a full turn',
    parts: [null, null, lap([18, 16.5], 360, { as: 'arrows', dur: 0.9 })],
  },
  'credit-card-defrost': {
    verb: 'the heat waves rise and redraw beside the card',
    parts: [null, null, retrace({ as: 'heat' })],
  },
  'credit-card-freeze': {
    verb: 'the snowflake turns a sixth of a turn beside the card',
    parts: [card({ delay: 0.36 }), null, lap([18, 17], 60, { as: 'flake', dur: 0.72 })],
  },
  'credit-card-not-accept': {
    verb: 'the X rattles beside the card as a refusal',
    parts: [null, null, shake([19, 17], { as: 'x' })],
  },
  'credit-card-not-found': {
    verb: 'the slash draws across and the card fades behind it',
    parts: [dim({ as: 'card', delay: 0.1 }), dim({ as: 'card', delay: 0.1 }), draw({ as: 'slash' }), dim({ as: 'card', delay: 0.1 }), dim({ as: 'card', delay: 0.1 })],
  },
  'credit-card-pos': {
    verb: 'the card swipes through the terminal and back',
    parts: [ride([11, 9.8], out(1.2, 1.2), { as: 'card' }), beat(C, { as: 'terminal', delay: 0.26 }), null],
  },
  'credit-card-validation': {
    verb: 'the validation check writes in its badge',
    parts: [draw({ as: 'check' }), beat([17, 7], { as: 'badge', delay: 0.3 }), null, null, null, null],
  },

  // --- cricket / food ---------------------------------------------------------------------------
  'cricket-bat': {
    verb: 'the bat swings from its handle',
    parts: [
      swing([3, 21], [14.5, 9.5], [0, -14, 6, -2, 0], { as: 'bat' }),
      swing([3, 21], [5.4, 18.6], [0, -14, 6, -2, 0], { as: 'bat' }),
      swing([3, 21], [5.3, 18.8], [0, -14, 6, -2, 0], { as: 'bat' }),
      null,
    ],
  },
  'cricket-helmet': {
    verb: 'the grill drops down over the face and lifts, the vent pops',
    parts: [null, null, ride([19, 16.5], out(0, 1), { as: 'grill' }), ride([20.5, 18.5], out(0, 1), { as: 'grill' }), pop([10, 17], 2, { as: 'vent', delay: 0.2 })],
  },
  croissant: {
    verb: 'the croissant rocks on the plate',
    parts: [around(C, [9.5, 9.4], WOBBLE, { as: 'croissant' }), around(C, [12.3, 12.3], WOBBLE, { as: 'croissant' })],
  },
  crop: {
    verb: 'the two crop corners pull in to frame and release',
    parts: [nudge([13, 11], -1, 1, { as: 'corner' }), nudge([11, 13], 1, -1, { as: 'corner' })],
  },
  cross: {
    verb: 'the cross glows and catches the light',
    parts: [pop([11, 12], 1.08, { as: 'cross' })],
    extras: [glint(18, 4.5, 1, { delay: 0.16 })],
  },
  crosshair: {
    verb: 'the ticks close in on the target and the dot locks on',
    parts: [
      beat([11, 12], { as: 'ring', transform: ['scale(1)', 'scale(0.92)', 'scale(1.02)', 'scale(1)'] }),
      pop([11, 12], 2, { as: 'dot', delay: 0.24 }),
      nudge([11, 4], 0, 1.2, { as: 'tick' }),
      nudge([11, 20], 0, -1.2, { as: 'tick' }),
      nudge([19, 12], -1.2, 0, { as: 'tick' }),
      nudge([3, 12], 1.2, 0, { as: 'tick' }),
    ],
  },
  crowdfunding: {
    verb: 'the coin drops into the raised hands as the crowd pops in turn',
    parts: [
      ride([12, 5], [[0, 0], [0, -1.6], [0, 0.4], [0, 0], [0, 0]], { as: 'coin' }),
      pop([12, 20], 1.3, { as: 'head', delay: 0.2 }),
      pop([20, 20], 1.3, { as: 'head', delay: 0.3 }),
      pop([4, 20], 1.3, { as: 'head', delay: 0.1 }),
      beat([12, 14], { as: 'hands', delay: 0.26 }),
      null,
    ],
  },
  'crown-02': {
    verb: 'the crown hops off its base and lands',
    parts: [null, hop([12, 10], 1.4, { as: 'crown' })],
  },
  'crown-03': {
    verb: 'the crown swells proudly and its tip glints',
    parts: [null, swell([12, 17.5], [12, 10.5], [1, 0.9, 1.08, 0.99, 1], { as: 'crown' })],
    extras: [glint(12, 1.6, 0.9, { delay: 0.2 })],
  },
  'crown-minus': {
    verb: 'the minus squeezes short beside the crown',
    parts: [flex('X', [19, 3], [19, 3], [1, 0.25, 1.12, 0.98, 1], { as: 'minus' }), null, null],
  },
  'crown-plus': {
    verb: 'the plus turns a quarter beside the crown',
    parts: [lap([18.5, 4.5], 90, { as: 'plus', dur: 0.62 }), null, null],
  },
  crying: {
    verb: 'the tears stream down and the mouth trembles',
    parts: [null, ride([12, 15.5], [[0, 0], [0, 0.4], [0, -0.2], [0, 0.3], [0, 0]], { as: 'mouth', dur: 0.6 }), null, retrace({ as: 'tears', dur: 0.8 })],
  },

  // --- css / csv ------------------------------------------------------------------------------------
  'css-file-01': {
    verb: 'the C, S, S letters hop in a wave under the page',
    parts: [null, hop([12, 19], 1, { delay: 0.1 }), hop([5, 19], 1), hop([19, 19], 1, { delay: 0.2 })],
  },
  'css-file': {
    verb: 'the CSS letters write themselves under the page',
    parts: [beat([12, 7.5], { as: 'page', delay: 0.4 }), draw({ as: 'letter', delay: 0.1 }), draw({ as: 'letter' }), draw({ as: 'letter', delay: 0.2 })],
  },
  'css-file-02': {
    verb: 'the C, S, S letters hop in a wave on the page',
    parts: [null, hop([14, 16.5], 1, { delay: 0.1 }), hop([19.5, 16.5], 1, { delay: 0.2 }), hop([8.3, 16.5], 1)],
  },
  'css-three': {
    verb: 'the 3 rewrites on the shield',
    parts: [beat([12.3, 12], { as: 'shield', delay: 0.36 }), retrace({ as: 'three' })],
  },
  'csv-01': {
    verb: 'the CSV letters retract and rewrite',
    parts: [retrace({ as: 'letters' }), null],
  },
  csv: {
    verb: 'the CSV letters hop under the page',
    parts: [hop([12, 19], 1.2, { as: 'letters' }), beat([12, 7.5], { as: 'page', delay: 0.26 })],
  },
  'csv-02': {
    verb: 'the CSV letters type themselves out on the page',
    parts: [draw({ as: 'letters' }), null],
  },
  cube: {
    verb: 'the cube rocks on its corner',
    parts: [around(C, C, [0, -10, 8, -3, 0], { as: 'cube' })],
  },
  'cup-soda': {
    verb: 'the straw bobs in the lid and the lid answers',
    parts: [beat([11, 7.5], { as: 'lid', delay: 0.24 }), null, around([12, 6], [14, 4], [0, -12, 6, -2, 0], { as: 'straw' })],
  },

  // --- cupcakes / curling / currency ---------------------------------------------------------------
  'cupcake-01': {
    verb: 'the frosting swells up out of the wrapper',
    parts: [null, swell([12, 14], [12, 8], [1, 0.88, 1.08, 0.99, 1], { as: 'frosting' })],
  },
  cupcake: {
    verb: 'the frosting hops and a sprinkle glints on top',
    parts: [beat([12, 17], { as: 'wrapper', delay: 0.26 }), hop([12, 8], 1.2, { as: 'frosting' })],
    extras: [glint(17.5, 2.6, 0.9, { delay: 0.24 })],
  },
  'cupcake-02': {
    verb: 'the frosting wobbles on top of the wrapper',
    parts: [around([12, 13], [12, 7.5], [0, -6, 5, -2, 0], { as: 'frosting' }), null],
  },
  'cupcake-03': {
    verb: 'the cherry hops on top of the frosting',
    parts: [hop([12, 5], 1.6, { as: 'cherry' }), beat([12, 11], { as: 'frosting', delay: 0.3 }), null],
  },
  curling: {
    verb: 'the curling stone slides forward and glides back',
    parts: [ride([7, 15], out(1.4, 0), { as: 'stone', dur: 0.8 }), ride(C, out(1.4, 0), { as: 'stone', dur: 0.8 })],
    extras: [trail('M0.8 13H2.4M0.6 17H2', -1.4)],
  },
  currency: {
    verb: 'the four rays turn a quarter around the coin and the center pops',
    parts: [null, lap(C, 90, { as: 'rays', dur: 0.66 }), pop(C, 1.2, { as: 'center', delay: 0.1 })],
  },

  // --- cursors ----------------------------------------------------------------------------------------
  'cursor-01': {
    verb: 'the hand pointer taps down',
    parts: [tap([12, 11.8])],
  },
  'cursor-02': {
    verb: 'the arrow pointer clicks toward its tip',
    parts: [point([11.8, 11.8])],
  },
  'cursor-add-selection-01': {
    verb: 'the plus turns a quarter beside the pointer',
    parts: [null, lap([15, 6], 90, { as: 'plus', dur: 0.62 })],
  },
  'cursor-add-selection': {
    verb: 'the pointer taps and the plus pops',
    parts: [tap([12, 11.9]), pop([15, 6], 1.3, { as: 'plus', delay: 0.16 })],
  },
  'cursor-add-selection-02': {
    verb: 'the pointer clicks and the plus stamps in',
    parts: [point([10.8, 10.8]), stamp([17.5, 17.5], { as: 'plus', delay: 0.12 })],
  },
  'cursor-circle-selection-01': {
    verb: 'the dashed selection ring spins around the pointer',
    parts: [lap([10, 10], 360, { as: 'ring', dur: 1 }), null],
  },
  'cursor-circle-selection': {
    verb: 'the pointer clicks and the selection ring answers',
    parts: [beat([10, 10], { as: 'ring', delay: 0.2 }), point([15.9, 15.9])],
  },
  'cursor-circle-selection-02': {
    verb: 'the dashed selection ring spins backward behind the pointer',
    parts: [null, lap([10, 10], -360, { as: 'ring', dur: 1 })],
  },
  'cursor-disabled-01': {
    verb: 'the block sign rattles beside the pointer',
    parts: [shake([15, 6], { as: 'sign' }), null],
  },
  'cursor-disabled': {
    verb: 'the pointer tries to tap and the block sign spins a half turn',
    parts: [lap([15, 6], 180, { as: 'sign', dur: 0.7, delay: 0.1 }), tap([12, 11.9])],
  },
  'cursor-disabled-02': {
    verb: 'the block sign stamps down beside the pointer',
    parts: [null, stamp([17.5, 17.5], { as: 'sign' })],
  },
  'cursor-edit-01': {
    verb: 'the selection handles pop one after another',
    parts: [null, pop([4, 4], 1.3, { as: 'handle' }), pop([4, 15], 1.3, { as: 'handle', delay: 0.2 }), pop([15, 4], 1.3, { as: 'handle', delay: 0.1 }), null],
  },
  'cursor-edit': {
    verb: 'the pointer clicks and the selection edges redraw',
    parts: [point([14.3, 14.3]), null, null, null, retrace({ as: 'edges', delay: 0.1 })],
  },
  'cursor-edit-02': {
    verb: 'the handles hop in turn while the pointer clicks',
    parts: [point([14.3, 14.3], { delay: 0.2 }), hop([4, 4], 1), hop([4, 15], 1, { delay: 0.16 }), hop([15, 4], 1, { delay: 0.08 }), null],
  },
  'cursor-hold-01': {
    verb: 'the timer beside the pointer turns a full revolution',
    parts: [null, lap([15, 6], 360, { as: 'timer', dur: 0.9 })],
  },
  'cursor-hold': {
    verb: 'the pointer presses and holds while the timer pops',
    parts: [scaleHold([12, 11.9], 0.92, { as: 'hand' }), pop([15, 6], 1.2, { as: 'timer', delay: 0.2 })],
  },
  'cursor-hold-02': {
    verb: 'the timer under the pointer turns a full revolution',
    parts: [null, lap([17.5, 17.5], 360, { as: 'timer', dur: 0.9 })],
  },
  'cursor-in-window': {
    verb: 'the pointer clicks inside the window and the title bar redraws',
    parts: [null, point([16.6, 16.6]), draw({ as: 'bar', delay: 0.12 })],
  },
  'cursor-info-01': {
    verb: 'the question mark hops beside the pointer, which taps',
    parts: [hop([15, 6], 1.2, { as: 'mark' }), tap([12, 11.9], { delay: 0.14 })],
  },
}

export default settleSpecs(specs)
