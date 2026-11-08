/**
 * Page 20 — cloud-snow → computer-check.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped:
 * cloud-upload, cloud, coffee-02, command, compass, and the hidden code-xml.
 *
 * Comments follow the chat convention from page 16: the badge (plus, X,
 * block) performs, the bubble acknowledges. Coins flip on their axis or let
 * the currency sign act. Code brackets part, squeeze or flip. Computers keep
 * the screen still and let what is on it act.
 *
 * Identical-geometry pairs get different jobs: clubs-01 / clubs, coffee-01 /
 * coffee, coins-01 / coins, comet-01 / comet, coming-soon-01 / coming-soon,
 * comment-01 / comment, comment-add-01 / comment-add, comment-block-01 /
 * comment-block, comment-remove-01 / comment-remove.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  around,
  beat,
  blink,
  dim,
  draw,
  fall,
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
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  swell,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const TURN = [0, 72, 252, 370.8, 360]

/** Steam rising off a drink and fading back in. */
const steam = (origin, o = {}) => ({
  as: 'steam',
  origin,
  transform: ['translateY(0px)', 'translateY(-1.4px)', 'translateY(0.2px)', 'translateY(0px)'],
  opacity: [1, 0.15, 1, 1],
  times: [0, 0.4, 0.75, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.7,
  ...o,
})

/** A coin and its symbol flipping together around the coin's axis. */
const coinFlip = (pivot, center, o = {}) =>
  scaleFrom('X', pivot, center, [1, 0.06, 1], { as: 'coin', times: [0, 0.5, 1], ease: [INOUT, INOUT], dur: 0.56, ...o })

const bubble = (o = {}) => beat([12, 12.6], { as: 'bubble', delay: 0.28, ...o })
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]

// ---------------------------------------------------------------------------

const specs = {
  // --- clouds -----------------------------------------------------------------------------
  'cloud-snow': {
    verb: 'the snowflakes fall out of the cloud and new ones form',
    parts: [beat([12, 10], { as: 'cloud', delay: 0.1 }), fall([12, 17.8], 0, 2, { as: 'snow', dur: 0.9 })],
  },
  'cloud-sun-rain': {
    verb: 'the sun’s rays flare behind the cloud while two drops fall',
    parts: [
      null,
      null,
      swell([13.5, 12], [14.7, 7.2], [1, 0.8, 1.14, 0.98, 1], { as: 'rays' }),
      fall([11, 20], 0, 1.4, { as: 'drop', delay: 0.16 }),
      fall([7, 19], 0, 1.4, { as: 'drop' }),
    ],
  },
  'cloud-sync': {
    verb: 'the sync arrows chase each other a full turn under the cloud',
    parts: [
      null,
      around([12, 16.5], [12, 16.5], TURN, { as: 'sync', dur: 0.9 }),
      around([12, 16.5], [9.5, 13.5], TURN, { as: 'sync', dur: 0.9 }),
      around([12, 16.5], [14.5, 19.5], TURN, { as: 'sync', dur: 0.9 }),
    ],
  },
  cloudy: {
    verb: 'the two clouds drift past each other and settle back',
    parts: [ride([10, 14], [[0, 0], [-1.2, 0], [0.3, 0], [0, 0], [0, 0]], { as: 'cloud', dur: 0.9 }), ride([15.8, 9.4], [[0, 0], [1.2, 0], [-0.3, 0], [0, 0], [0, 0]], { as: 'cloud', dur: 0.9 })],
  },

  // --- clover / clubs -----------------------------------------------------------------------
  clover: {
    verb: 'the four-leaf clover twirls a quarter turn and its stem flicks',
    parts: [lap([12, 10.5], 90, { as: 'leaves', dur: 0.7 }), around([7.5, 15], [5.5, 18.5], [0, 10, -6, 2, 0], { as: 'stem' })],
  },
  club: {
    verb: 'the club card flips over',
    parts: [flip(C, 1, { as: 'card' })],
  },
  'clubs-01': {
    verb: 'the three leaves pop in turn: top, right, left',
    parts: [null, pop([12, 6], 1.2, { as: 'leaf' }), pop([18, 13], 1.2, { as: 'leaf', delay: 0.12 }), pop([6, 13], 1.2, { as: 'leaf', delay: 0.24 }), null, null],
  },
  clubs: {
    verb: 'the three leaves spread out from the knot and close back in',
    parts: [
      null,
      ride([12, 6], out(0, -1.2), { as: 'leaf' }),
      ride([18, 13], out(1.2, 0), { as: 'leaf' }),
      ride([6, 13], out(-1.2, 0), { as: 'leaf' }),
      null,
      null,
    ],
  },
  'clubs-02': {
    verb: 'the club swells up from its stem and settles',
    parts: [swell([12, 22], [12, 12.2], [1, 0.88, 1.06, 0.99, 1], { as: 'club' })],
  },
  'co-present': {
    verb: 'the presenter nods in front of the screen',
    parts: [beat([12, 10.6], { as: 'screen', delay: 0.28 }), null, hop([12, 11], 1, { as: 'head' })],
  },

  // --- code ---------------------------------------------------------------------------------
  'code-circle': {
    verb: 'the brackets part toward the circle edge and come back',
    parts: [beat(C, { as: 'ring', delay: 0.24 }), nudge([8.3, 12], -1.4, 0, { as: 'bracket' }), nudge([15.8, 12], 1.4, 0, { as: 'bracket' })],
  },
  'code-folder': {
    verb: 'the slash writes and the brackets part around it',
    parts: [null, nudge([16.3, 13.5], 1.2, 0, { as: 'bracket', delay: 0.1 }), nudge([7.8, 13.5], -1.2, 0, { as: 'bracket', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'code-simple': {
    verb: 'the angle brackets push wide apart and spring back',
    parts: [nudge([5, 12], -1.6, 0, { as: 'bracket' }), nudge([19, 12], 1.6, 0, { as: 'bracket' })],
  },
  'code-square': {
    verb: 'the brackets squeeze together, hold, and part',
    parts: [null, hold([8.3, 12], 1.4, 0, { as: 'bracket', dur: 0.6 }), hold([15.8, 12], -1.4, 0, { as: 'bracket', dur: 0.6 })],
  },
  code: {
    verb: 'the brackets flip on their own axis one after the other',
    parts: [flip([18.5, 12], 1, { as: 'bracket', delay: 0.12 }), flip([5.5, 12], 1, { as: 'bracket' })],
  },
  codepen: {
    verb: 'the cube edges redraw one after another inside the frame',
    parts: [retrace({ as: 'edge', delay: 0.18 }), draw({ as: 'edge' }), retrace({ as: 'edge', delay: 0.1 }), draw({ as: 'edge', delay: 0.26 }), beat(C, { as: 'frame', delay: 0.36 })],
  },
  codesandbox: {
    verb: 'the box lid hops and the inner edges redraw',
    parts: [beat(C, { as: 'box', delay: 0.3 }), hop([12, 5.1], 1.2, { as: 'lid' }), retrace({ as: 'edges', delay: 0.1 }), null, null],
  },

  // --- coffee -------------------------------------------------------------------------------
  'coffee-01': {
    verb: 'the lid pops off the cup and snaps back on',
    parts: [null, hop([12, 4.3], 1.8, { as: 'lid' }), hop([12, 7], 1.8, { as: 'lid' }), null],
  },
  coffee: {
    verb: 'the logo on the cup flips while the cup answers',
    parts: [beat([12, 14.7], { as: 'cup', delay: 0.3 }), null, null, flip([12, 14.5], 1, { as: 'logo' })],
  },
  'coffee-03': {
    verb: 'steam curls rise off the mug in turn',
    parts: [null, null, steam([10, 4], { delay: 0.1 }), steam([14, 4], { delay: 0.2 }), steam([6, 4])],
  },
  'coffee-04': {
    verb: 'the steam lines draw upward and the mug answers',
    parts: [beat([10, 15], { as: 'mug', delay: 0.3 }), null, draw({ as: 'steam', delay: 0.1 }), draw({ as: 'steam', delay: 0.2 }), draw({ as: 'steam' })],
  },
  'coffee-beans': {
    verb: 'the small bean hops and the big bean rocks',
    parts: [hop([7.6, 7.6], 1.4, { as: 'bean' }), around([14.5, 14.5], [14.5, 14.5], [0, -14, 8, -3, 0], { as: 'bean' })],
  },
  cog: {
    verb: 'the cog turns a full revolution on its hub',
    parts: [null, null, lap(C, 360, { as: 'teeth', dur: 1 })],
  },
  coinbase: {
    verb: 'the coin flips over',
    parts: [flip(C, 1, { as: 'coin' })],
  },

  // --- coins --------------------------------------------------------------------------------
  'coins-01': {
    verb: 'the front stack hops and lands back on the table',
    parts: [hop([15.5, 11], 1.6, { as: 'stack' }), hop([15.5, 16.5], 1.6, { as: 'stack' }), hop([15.5, 16.5], 1.6, { as: 'stack' }), null, null, null, null],
  },
  coins: {
    verb: 'the top coin of the back stack flips and glints',
    parts: [null, null, null, flip([8.5, 4], 1, { as: 'coin' }), null, null, null],
    extras: [glint(19.5, 7, 0.9, { delay: 0.3 })],
  },
  'coins-02': {
    verb: 'the front coin flips over the one behind it',
    parts: [flip([14, 10], 1, { as: 'coin' }), beat([7.6, 16.4], { as: 'back', delay: 0.3 })],
  },
  'coins-bitcoin': {
    verb: 'the bitcoin flips over, sign and all',
    parts: [coinFlip([14, 10], [14, 10]), null, coinFlip([14, 10], [14.5, 10])],
  },
  'coins-dollar': {
    verb: 'the dollar sign rewrites itself on the coin',
    parts: [beat([14, 10], { as: 'coin', delay: 0.4 }), null, retrace({ as: 'sign', dur: 0.74 })],
  },
  'coins-euro': {
    verb: 'the euro sign hops on the coin',
    parts: [beat([14, 10], { as: 'coin', delay: 0.3 }), null, hop([14, 10], 1.2, { as: 'sign' })],
  },
  'coins-pound': {
    verb: 'the pound sign stamps onto the coin',
    parts: [null, null, stamp([14, 9.9], { as: 'sign' })],
  },
  'coins-yen': {
    verb: 'the yen sign pops and the back coin shifts in the stack',
    parts: [null, ride([7.5, 16.5], out(-0.8, 0.8), { as: 'back' }), pop([14, 10], 1.3, { as: 'sign' })],
  },
  'coins-swap': {
    verb: 'the two coins trade places along the arrows',
    parts: [ride([16, 8], out(-1.6, 1.6), { as: 'coin' }), ride([8, 16], out(1.6, -1.6), { as: 'coin' }), draw({ as: 'arrow', delay: 0.2 }), draw({ as: 'arrow', delay: 0.2 })],
  },

  // --- collapse / collections / color -----------------------------------------------------------
  collapse: {
    verb: 'the two corners pull in toward the center and release',
    parts: [nudge([16.5, 7.5], -1.4, 1.4, { as: 'corner' }), nudge([7.5, 16.5], 1.4, -1.4, { as: 'corner' })],
  },
  'collections-bookmark': {
    verb: 'the ribbon drops down the front card and the back card shifts',
    parts: [null, flex('Y', [10.5, 5.5], [10.5, 8.9], [1, 1.3, 0.9, 1.04, 1], { as: 'ribbon' }), nudge([15, 10], 0.8, -0.8, { as: 'back', delay: 0.1 })],
  },
  'color-picker': {
    verb: 'the bulb squeezes and a drop of color falls from the tip',
    parts: [null, pop([17.6, 6.4], 0.8, { as: 'bulb' })],
    extras: [
      {
        as: 'drop',
        tag: 'circle',
        attrs: { cx: '3.6', cy: '20.6', r: '0.6', strokeWidth: '1.2' },
        transform: ['translateY(0px)', 'translateY(0px)', 'translateY(0.8px)', 'translateY(2.4px)'],
        opacity: [0, 0, 1, 0],
        times: [0, 0.34, 0.5, 1],
        ease: ['linear', 'easeIn', 'easeIn'],
        dur: 0.8,
      },
    ],
  },
  colors: {
    verb: 'the color wheel spins a full turn',
    parts: [lap([12, 11.5], 360, { as: 'wheel', dur: 1 })],
  },
  colosseum: {
    verb: 'the colosseum settles in the sun and its rim catches the light',
    parts: [beat([12, 11.7], { as: 'arena' })],
    extras: [glint(19.6, 3.4, 1, { delay: 0.16 })],
  },
  'column-delete': {
    verb: 'the X spins and the column it marks fades out and back',
    parts: [null, dim({ as: 'column', delay: 0.1 }), lap([19, 6], 90, { as: 'x', dur: 0.62 })],
  },
  'column-insert': {
    verb: 'the chevron drops in and the columns part to make room',
    parts: [nudge([17.5, 14.5], 1, 0, { as: 'column', delay: 0.12 }), nudge([6.5, 14.5], -1, 0, { as: 'column', delay: 0.12 }), nudge([12, 3.3], 0, 1.6, { as: 'chevron' })],
  },
  'columns-three-cog': {
    verb: 'the cog turns a full revolution in the corner of the table',
    parts: [lap([17.5, 17.5], 360, { as: 'cog', dur: 1 }), null, null, null],
  },
  combine: {
    verb: 'the arrow pushes and the top square slides toward the merged one',
    parts: [ride([6, 6], out(1.4, 1.4), { as: 'piece' }), null, null, beat([17, 17], { as: 'merged', delay: 0.3 }), nudge([6, 16], 1.2, 0, { as: 'arrow' })],
  },

  // --- comets / coming soon ---------------------------------------------------------------------
  'comet-01': {
    verb: 'the comet lunges forward down its path, streaks redrawing',
    parts: [ride([11.7, 12.3], out(-1.2, 1.2), { as: 'comet' }), ride([9, 15], out(-1.2, 1.2), { as: 'comet' }), retrace({ as: 'streaks', delay: 0.1 })],
  },
  comet: {
    verb: 'the comet head glows and its streaks draw out behind it',
    parts: [retrace({ as: 'trail', delay: 0.1 }), pop([9, 15], 1.2, { as: 'head' }), draw({ as: 'streaks', delay: 0.14 })],
  },
  'comet-02': {
    verb: 'the comet dives down-left and its streaks redraw',
    parts: [draw({ as: 'streak', delay: 0.2 }), pop([20, 12], 1.4, { as: 'spark', delay: 0.3 }), nudge([8.4, 16.5], -1.2, 1.2, { as: 'comet' }), draw({ as: 'streak', delay: 0.1 })],
  },
  'coming-soon-01': {
    verb: 'the letters of SOON hop in a wave',
    parts: [hop([3.5, 18.5], 1.2), hop([9, 18.5], 1.2, { delay: 0.08 }), hop([14.5, 18.5], 1.2, { delay: 0.16 }), hop([20.3, 18.5], 1.2, { delay: 0.24 }), null, null],
  },
  'coming-soon': {
    verb: 'the clock hand sweeps a full turn above SOON',
    parts: [null, null, null, null, beat([12, 8], { as: 'dial', delay: 0.5 }), around([12, 8], [12.8, 7], TURN, { as: 'hand', dur: 0.9 })],
  },
  'coming-soon-02': {
    verb: 'the stopwatch button presses and the hand sweeps a full turn',
    parts: [null, null, nudge([12, 2], 0, 0.8, { as: 'button', dur: 0.36 }), around([12, 13.5], [13.8, 11.8], TURN, { as: 'hand', dur: 0.9, delay: 0.1 })],
  },
  'command-line': {
    verb: 'the prompt nudges forward and the cursor blinks',
    parts: [null, nudge([8.5, 12], 1.2, 0, { as: 'prompt' }), blink({ as: 'cursor', dur: 0.8 })],
  },

  // --- comments ---------------------------------------------------------------------------------
  'comment-01': {
    verb: 'the comment lines type themselves out',
    parts: [draw({ as: 'lines' }), null],
  },
  comment: {
    verb: 'the bubble swells out of its tail and the lines rewrite',
    parts: [retrace({ as: 'lines', delay: 0.16 }), swell([6, 19.5], [12, 12.1], [1, 0.9, 1.05, 0.99, 1], { as: 'bubble' })],
  },
  'comment-02': {
    verb: 'the empty bubble swells out of its tail and settles',
    parts: [swell([6, 19.5], [12, 12.1], [1, 0.88, 1.06, 0.99, 1], { as: 'bubble' })],
  },
  'comment-03': {
    verb: 'the round bubble’s lines type out and the bubble answers',
    parts: [bubble({ origin: C }), draw({ as: 'lines' })],
  },
  'comment-add-01': {
    verb: 'the plus turns a quarter beside the bubble',
    parts: [lap([18, 6], 90, { as: 'plus', dur: 0.62 }), null, null],
  },
  'comment-add-02': {
    verb: 'the plus stamps in and the bubble answers',
    parts: [stamp([18, 6], { as: 'plus' }), bubble()],
  },
  'comment-add-03': {
    verb: 'the plus inside the bubble turns a quarter and the bubble answers',
    parts: [bubble({ origin: C }), lap([12, 10.5], 90, { as: 'plus', dur: 0.62 })],
  },
  'comment-add': {
    verb: 'the plus pops and a new line writes into the bubble',
    parts: [pop([18, 6], 1.3, { as: 'plus' }), null, draw({ as: 'lines', delay: 0.16 })],
  },
  'comment-block-01': {
    verb: 'the block sign rattles beside the bubble',
    parts: [null, null, shake([18, 6], { as: 'sign' })],
  },
  'comment-block-02': {
    verb: 'the block sign stamps down and the bubble answers',
    parts: [bubble(), stamp([18, 6], { as: 'sign' })],
  },
  'comment-block-03': {
    verb: 'the block sign rattles inside the bubble, which answers',
    parts: [shake([12.1, 10.5], { as: 'sign' }), bubble({ origin: C })],
  },
  'comment-block': {
    verb: 'the block sign spins a half turn and the lines dim',
    parts: [null, dim({ as: 'lines', delay: 0.1 }), lap([18, 6], 180, { as: 'sign', dur: 0.7 })],
  },
  'comment-remove-01': {
    verb: 'the X spins a quarter turn beside the bubble',
    parts: [lap([18.5, 5.5], 90, { as: 'x', dur: 0.62 }), null, null],
  },
  'comment-remove-02': {
    verb: 'the X rattles and the bubble answers',
    parts: [shake([18.5, 5.5], { as: 'x' }), bubble()],
  },
  'comment-remove-03': {
    verb: 'the X inside the bubble turns a quarter and the bubble answers',
    parts: [bubble({ origin: C }), lap([12, 10.5], 90, { as: 'x', dur: 0.62 })],
  },
  'comment-remove': {
    verb: 'the X wipes off and redraws while the lines fade',
    parts: [draw({ as: 'x' }), null, dim({ as: 'lines', delay: 0.1 })],
  },

  // --- compass / complaint / component ------------------------------------------------------------
  'compass-01': {
    verb: 'the drafting compass swings its legs and draws its arc',
    parts: [around([12, 7], [12, 16], [0, -4, 3, -1, 0], { as: 'legs' }), null, null, draw({ as: 'arc', delay: 0.1 }), pop([12, 18], 1.4, { as: 'tick', delay: 0.4 })],
  },
  complaint: {
    verb: 'the complaint bubble rattles, the bang stretches and the person flinches',
    parts: [flex('Y', [17, 10], [17, 7.8], [1, 1.3, 0.9, 1.04, 1], { as: 'bang' }), shake([17, 8], { as: 'bubble' }), hop([7, 13], 0.8, { as: 'head', delay: 0.18 }), null],
  },
  component: {
    verb: 'the four diamonds light up clockwise from the top',
    parts: [pop([12, 6], 1.25, { as: 'diamond' }), pop([6, 12], 1.25, { as: 'diamond', delay: 0.3 }), pop([18, 12], 1.25, { as: 'diamond', delay: 0.1 }), pop([12, 18], 1.25, { as: 'diamond', delay: 0.2 })],
  },

  // --- computers ----------------------------------------------------------------------------------
  'computer-activity': {
    verb: 'the activity pulse traces across the screen',
    parts: [null, null, draw({ as: 'pulse', dur: 0.7, times: [0, 0.1, 0.16, 1] })],
  },
  'computer-add': {
    verb: 'the plus on the screen turns a quarter',
    parts: [null, beat([12, 10], { as: 'screen', delay: 0.3 }), lap([12, 10], 90, { as: 'plus', dur: 0.62 })],
  },
  'computer-arrow-down': {
    verb: 'the arrow on the screen pushes down',
    parts: [null, null, nudge([12, 10], 0, 1.6, { as: 'arrow' })],
  },
  'computer-arrow-up': {
    verb: 'the arrow on the screen pushes up',
    parts: [null, null, nudge([12, 10], 0, -1.6, { as: 'arrow' })],
  },
  'computer-chart-down': {
    verb: 'the falling line retracts and rewrites downward',
    parts: [null, beat([12, 10], { as: 'screen', delay: 0.36 }), retrace({ as: 'line' })],
  },
  'computer-chart-up': {
    verb: 'the rising line draws itself across the screen',
    parts: [null, null, draw({ as: 'line', dur: 0.7, times: [0, 0.1, 0.16, 1] })],
  },
  'computer-check': {
    verb: 'the check writes on the screen and the screen answers',
    parts: [null, beat([12, 10], { as: 'screen', delay: 0.3 }), draw({ as: 'check' })],
  },
}

export default settleSpecs(specs)
