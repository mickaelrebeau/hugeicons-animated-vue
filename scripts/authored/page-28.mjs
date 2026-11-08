/**
 * Page 28 — ethereum-rectangle → file-corrupt.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped:
 * external-link, eye-off, eye, favourite, file-01, and the hidden file-add.
 *
 * Exchange icons turn their arrows a full lap; currency marks rewrite or
 * flip. Exclamation marks follow the alert convention: the stem stretches,
 * the dot answers later. Files keep the sheet still and let the content or
 * corner badge act (paperclip swings, clock ticks, chart bars grow).
 *
 * Identical-geometry pairs get different jobs: exchange / exchange-01,
 * facebook / facebook-01, fan / fan-01.
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
  puff,
  retrace,
  ride,
  rise,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  swing,
  trail,
  twinkle,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const TURN = [0, 72, 252, 370.8, 360]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]

/** Alert stem stretches from its base; the dot answers later. */
const bang = (pivot, center, o = {}) => flex('Y', pivot, center, [1, 1.25, 0.9, 1.04, 1], { as: 'stem', ...o })
const dot = (c, o = {}) => hop(c, 1.2, { as: 'dot', delay: 0.18, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- ethereum / ethernet / euro -----------------------------------------------------------
  'ethereum-rectangle': {
    verb: 'the ether diamond spins inside the square',
    parts: [beat(C, { as: 'frame', delay: 0.3 }), flip(C, 2, { as: 'diamond' })],
  },
  ethereum: {
    verb: 'the ether diamond hops and lands',
    parts: [hop(C, 1.4, { as: 'diamond' })],
  },
  'ethernet-port': {
    verb: 'the port pins light up one after another',
    parts: [beat(C, { as: 'port', delay: 0.36 }), blink({ as: 'pin', dur: 0.5 }), blink({ as: 'pin', dur: 0.5, delay: 0.08 }), blink({ as: 'pin', dur: 0.5, delay: 0.16 }), blink({ as: 'pin', dur: 0.5, delay: 0.24 })],
  },
  'euro-circle': {
    verb: 'the euro sign rewrites inside the circle',
    parts: [beat(C, { as: 'ring', delay: 0.4 }), retrace({ as: 'sign', dur: 0.74 })],
  },
  'euro-receive': {
    verb: 'the arrow pulls the euro in',
    parts: [null, null, beat([8.5, 12], { as: 'sign', delay: 0.26 }), nudge([18.3, 13], -1.6, 0, { as: 'arrow' })],
  },
  'euro-send': {
    verb: 'the arrow pushes the euro out',
    parts: [null, null, beat([8.5, 12], { as: 'sign' }), nudge([18.3, 13], 1.6, 0, { as: 'arrow', delay: 0.06 })],
  },
  'euro-square': {
    verb: 'the euro sign flips inside the square',
    parts: [null, flip(C, 1, { as: 'sign' })],
  },
  euro: {
    verb: 'the euro bars slide in and the curve rewrites',
    parts: [nudge([9, 10], -1, 0, { as: 'bar', delay: 0.1 }), nudge([9, 14], -1, 0, { as: 'bar', delay: 0.16 }), sweep({ as: 'curve' })],
  },
  'ev-charger': {
    verb: 'the bolt flashes and the cable sways',
    parts: [null, null, blink({ as: 'bolt', dur: 0.6 }), around([14, 13], [18, 12], [0, 8, -5, 2, 0], { as: 'cable' })],
  },
  'ev-charging': {
    verb: 'the bolt flashes and the nozzle bobs on its hose',
    parts: [null, null, null, hop([20.5, 8.2], 1, { as: 'nozzle' }), retrace({ as: 'hose', delay: 0.06 }), blink({ as: 'bolt', dur: 0.6 })],
  },
  evil: {
    verb: 'the brows furrow, the horns twitch and the grin widens',
    parts: [ride([12, 9.9], out(0, 0.6), { as: 'brows' }), shake([12, 11.5], { as: 'head' }), flex('X', [12, 16.5], [12, 16.5], [1, 1.2, 0.96, 1.02, 1], { as: 'grin' })],
  },

  // --- exchange ------------------------------------------------------------------------------
  'exchange-01': {
    verb: 'the exchange arrows chase a full lap',
    parts: [lap(C, 360, { as: 'arrows', dur: 0.9 })],
  },
  exchange: {
    verb: 'the exchange arrows retract and rewrite',
    parts: [sweep({ as: 'arrows' })],
  },
  'exchange-02': {
    verb: 'the dollar and ether trade places along the arrows',
    parts: [ride([6, 6.5], out(1.4, 1.4), { as: 'coin' }), ride([18, 17.5], out(-1.4, -1.4), { as: 'coin' }), draw({ as: 'arrow', delay: 0.1 }), draw({ as: 'arrow', delay: 0.1 })],
  },
  'exchange-03': {
    verb: 'the two currencies trade places along the arrows',
    parts: [ride([18, 17.5], out(-1.4, -1.4), { as: 'coin' }), draw({ as: 'arrow', delay: 0.1 }), draw({ as: 'arrow', delay: 0.1 }), ride([5.5, 7], out(1.4, 1.4), { as: 'coin' })],
  },
  'exchange-bitcoin': {
    verb: 'the corner arrows push and the bitcoin flips',
    parts: [nudge([4, 6], -0.8, -0.8, { as: 'arrow' }), nudge([20, 18], 0.8, 0.8, { as: 'arrow' }), retrace({ as: 'ring', delay: 0.1 }), flip([12.5, 12], 1, { as: 'coin', delay: 0.16 }), flip([12.5, 12], 1, { as: 'coin', delay: 0.16 }), flip([12.5, 12], 1, { as: 'coin', delay: 0.16 }), flip([12.5, 12], 1, { as: 'coin', delay: 0.16 })],
  },
  'exchange-dollar': {
    verb: 'the dollar rewrites while the corner arrows push',
    parts: [retrace({ as: 'sign', delay: 0.1 }), flex('Y', C, C, [1, 1.1, 0.96, 1, 1], { as: 'bar' }), nudge([4, 6], -0.8, -0.8, { as: 'arrow' }), nudge([20, 18], 0.8, 0.8, { as: 'arrow' }), null],
  },

  // --- exclamation -----------------------------------------------------------------------------
  'exclamation-mark-big-slash': {
    verb: 'the slash cuts across and the bang dims',
    parts: [dim({ as: 'stem', delay: 0.1 }), draw({ as: 'slash' }), dim({ as: 'dot', delay: 0.1 })],
  },
  'exclamation-mark-big': {
    verb: 'the big stem stretches and the dot answers',
    parts: [bang([12, 14], [12, 9]), dot([12, 18.5])],
  },
  'exclamation-mark-slash': {
    verb: 'the slash cuts across and the bang shakes',
    parts: [shake([12, 12], { as: 'stem', delay: 0.1 }), dim({ as: 'dot', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'exclamation-mark': {
    verb: 'the stem stretches and the dot bounces after it',
    parts: [bang([12, 15], [12, 10]), dot([12, 18.8])],
  },

  // --- expand ------------------------------------------------------------------------------------
  'expand-paragraph': {
    verb: 'the chevrons push apart and the lines redraw',
    parts: [nudge([5, 5.5], 0, -1.2, { as: 'chevron' }), draw({ as: 'lines', delay: 0.1 }), nudge([5, 18.5], 0, 1.2, { as: 'chevron' }), flex('Y', C, [5, 12], [1, 1.14, 0.96, 1, 1], { as: 'stem' })],
  },
  expand: {
    verb: 'the two corners fly out along the diagonal',
    parts: [nudge([15.5, 8.5], 1.4, -1.4, { as: 'corner' }), nudge([8.5, 15.5], -1.4, 1.4, { as: 'corner' })],
  },
  expander: {
    verb: 'the two handles push out and the knob turns',
    parts: [lap(C, 90, { as: 'knob', dur: 0.66 }), nudge([5.9, 18.1], -1, 1, { as: 'handle' }), nudge([18.1, 5.9], 1, -1, { as: 'handle' })],
  },
  'external-drive': {
    verb: 'the drive light blinks and the label lines redraw',
    parts: [null, null, draw({ as: 'label' }), draw({ as: 'label', delay: 0.1 }), blink({ as: 'led', dur: 0.6 })],
  },

  // --- eyes / face -------------------------------------------------------------------------------
  'eye-closed': {
    verb: 'the closed eye lashes flutter',
    parts: [flex('Y', [12, 8], [12, 10.5], [1, 1.2, 0.9, 1.04, 1], { as: 'lid' }), nudge([15.8, 14.5], 0.3, 0.6, { as: 'lash', delay: 0.06 }), nudge([21, 12.3], 0.4, 0.4, { as: 'lash', delay: 0.06 }), nudge([3, 12.3], -0.4, 0.4, { as: 'lash', delay: 0.06 }), nudge([8.3, 14.5], -0.3, 0.6, { as: 'lash', delay: 0.06 })],
  },
  'face-id': {
    verb: 'the scan frame redraws and the face nods',
    parts: [retrace({ as: 'frame' }), hop([12, 11.5], 0.8, { as: 'face', delay: 0.2 })],
  },
  'facebook-01': {
    verb: 'the f hops inside the square',
    parts: [beat(C, { as: 'frame', delay: 0.26 }), hop([13.5, 14.7], 1, { as: 'f' })],
  },
  facebook: {
    verb: 'the f rewrites inside the square',
    parts: [null, retrace({ as: 'f', dur: 0.74 })],
  },
  'facebook-02': {
    verb: 'the f flips over',
    parts: [flip(C, 1, { as: 'f' })],
  },

  // --- factories -----------------------------------------------------------------------------------
  'factory-01': {
    verb: 'the chimney smoke curls up and the stack answers',
    parts: [beat([9, 14.5], { as: 'stack', delay: 0.3 }), retrace({ as: 'smoke' }), draw({ as: 'pipe', delay: 0.1 }), null],
  },
  'factory-02': {
    verb: 'the windows light up along the factory',
    parts: [null, null, blink({ as: 'vent', dur: 0.5 }), blink({ as: 'window', dur: 0.5, delay: 0.1 }), blink({ as: 'window', dur: 0.5, delay: 0.2 })],
  },
  factory: {
    verb: 'the chimney puffs smoke and the trails drift',
    parts: [null, null, retrace({ as: 'smoke' }), draw({ as: 'wisp', delay: 0.2 }), draw({ as: 'wisp', delay: 0.1 })],
    extras: [puff(18.5, 1.8, 0.6, 1, -0.8, { as: 'puff', delay: 0.2 })],
  },
  fahrenheit: {
    verb: 'the degree pops and the F writes itself',
    parts: [pop([5, 6], 1.3, { as: 'degree' }), draw({ as: 'f', delay: 0.1 }), draw({ as: 'bar', delay: 0.3 })],
  },
  'falling-star': {
    verb: 'the star streaks down and its trails draw behind it',
    parts: [ride([8, 16.1], out(-1, 1), { as: 'star' }), draw({ as: 'trail', delay: 0.06 })],
  },

  // --- fans -----------------------------------------------------------------------------------------
  'fan-01': {
    verb: 'the fan blades spin a full turn around the hub',
    parts: [around([11.7, 12.5], [6.1, 16.8], TURN, { as: 'blade', dur: 0.8 }), around([11.7, 12.5], [17.5, 15.3], TURN, { as: 'blade', dur: 0.8 }), around([11.7, 12.5], [10.8, 6.5], TURN, { as: 'blade', dur: 0.8 }), null],
  },
  fan: {
    verb: 'the blades spin twice and the hub pulses',
    parts: [
      around([11.7, 12.5], [6.1, 16.8], [0, 144, 504, 741.6, 720], { as: 'blade', dur: 1 }),
      around([11.7, 12.5], [17.5, 15.3], [0, 144, 504, 741.6, 720], { as: 'blade', dur: 1 }),
      around([11.7, 12.5], [10.8, 6.5], [0, 144, 504, 741.6, 720], { as: 'blade', dur: 1 }),
      pop([11.7, 12.5], 1.15, { as: 'hub', delay: 0.3 }),
    ],
  },
  'fan-02': {
    verb: 'the four blades spin a full turn',
    parts: [around(C, [9.5, 17.4], TURN, { as: 'blade', dur: 0.8 }), around(C, [6.6, 9.5], TURN, { as: 'blade', dur: 0.8 }), around(C, [14.5, 6.6], TURN, { as: 'blade', dur: 0.8 }), around(C, [17.4, 14.5], TURN, { as: 'blade', dur: 0.8 }), null],
  },
  'fast-forward': {
    verb: 'the two triangles rush forward one after the other',
    parts: [nudge([16.5, 12], 1.6, 0, { as: 'tri', delay: 0.08 }), nudge([7.5, 12], 1.6, 0, { as: 'tri' })],
  },
  'fast-wind': {
    verb: 'the gusts whip past one after another',
    parts: [retrace({ as: 'gust' }), retrace({ as: 'gust', delay: 0.1 }), retrace({ as: 'gust', delay: 0.2 }), draw({ as: 'wisp', delay: 0.3 })],
  },
  'favourite-circle': {
    verb: 'the heart beats inside the circle',
    parts: [beat(C, { as: 'ring', delay: 0.26 }), { as: 'heart', origin: [12, 12.5], transform: ['scale(1)', 'scale(1.18)', 'scale(1)', 'scale(1.12)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 1], ease: 'easeOut', dur: 0.7 }],
  },
  'favourite-square': {
    verb: 'the heart hops inside the square',
    parts: [beat([11, 12], { as: 'frame', delay: 0.26 }), hop([11, 12], 1, { as: 'heart' })],
  },
  feather: {
    verb: 'the quill writes a stroke and the shaft redraws',
    parts: [ride([14.2, 9.8], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'feather' }), retrace({ as: 'shaft', delay: 0.1 }), draw({ as: 'barb', delay: 0.2 })],
  },
  'female-02': {
    verb: 'she tilts her head',
    parts: [around([12, 21.5], [12, 11.6], [0, -5, 4, -1.5, 0], { as: 'woman' })],
  },
  'female-symbol': {
    verb: 'the female symbol swings from its ring',
    parts: [around([12, 8], C, [0, 10, -6, 2, 0], { as: 'symbol' })],
  },
  fence: {
    verb: 'the pickets drop into place one after another',
    parts: [ride([20, 12], out(0, -1.2), { as: 'picket', delay: 0.16 }), ride(C, out(0, -1.2), { as: 'picket', delay: 0.08 }), ride([4, 12], out(0, -1.2), { as: 'picket' }), null, null],
  },
  'fencing-mask': {
    verb: 'the mask grill redraws and the bib swings',
    parts: [null, draw({ as: 'bar' }), draw({ as: 'mesh', delay: 0.1 }), draw({ as: 'mesh', delay: 0.18 }), around([6, 16], [4.5, 19], [0, 8, -4, 1, 0], { as: 'bib' }), around([18, 16], [19.5, 19], [0, -8, 4, -1, 0], { as: 'bib' })],
  },
  fencing: {
    verb: 'the two foils cross and part',
    parts: [around([3, 20], [10.7, 12.3], [0, 8, -3, 1, 0], { as: 'foil' }), around([21, 20], [13.3, 12.3], [0, -8, 3, -1, 0], { as: 'foil' })],
  },
  'ferris-wheel': {
    verb: 'the wheel turns and the cabins ride around it',
    parts: [
      null,
      null,
      around(C, [12, 4], [0, 36, 126, 185.4, 180], { as: 'cabin', dur: 1 }),
      around(C, [19, 8], [0, 36, 126, 185.4, 180], { as: 'cabin', dur: 1 }),
      around(C, [5, 16], [0, 36, 126, 185.4, 180], { as: 'cabin', dur: 1 }),
      around(C, [5, 7.8], [0, 36, 126, 185.4, 180], { as: 'cabin', dur: 1 }),
      around(C, [19, 16], [0, 36, 126, 185.4, 180], { as: 'cabin', dur: 1 }),
    ],
  },
  'ferry-boat': {
    verb: 'the ferry rocks on the waves',
    parts: [around([12, 18], C, [0, -5, 4, -1.5, 0], { as: 'ferry' }), around([12, 18], [12, 6.5], [0, -5, 4, -1.5, 0], { as: 'ferry' }), around([12, 18], [12, 3], [0, -5, 4, -1.5, 0], { as: 'ferry' }), ride([12, 20.7], [[0, 0], [-0.8, 0], [0.6, 0], [-0.2, 0], [0, 0]], { as: 'wave', dur: 0.8 })],
  },
  figma: {
    verb: 'the figma pieces pop in turn, the circle last',
    parts: [pop([15, 12], 1.2, { as: 'piece', delay: 0.32 }), pop([9, 18], 1.12, { as: 'piece', delay: 0.24 }), pop([9, 12], 1.12, { as: 'piece', delay: 0.16 }), pop([9, 6], 1.12, { as: 'piece' }), pop([15, 6], 1.12, { as: 'piece', delay: 0.08 })],
  },

  // --- files ----------------------------------------------------------------------------------------
  'file-02': {
    verb: 'the lines write themselves under the folded corner',
    parts: [draw({ as: 'line', delay: 0.12 }), draw({ as: 'line' }), null],
  },
  'file-archive': {
    verb: 'the zipper pull slides down the file and back',
    parts: [null, ride([9, 20.5], out(0, -1.4), { as: 'pull' }), retrace({ as: 'zip' })],
  },
  'file-attachment': {
    verb: 'the paperclip swings on the corner of the file',
    parts: [null, around([7.5, 2], [7.5, 6.5], [0, 12, -8, 3, 0], { as: 'clip' })],
  },
  'file-audio': {
    verb: 'the note bounces on the file',
    parts: [null, hop([16.5, 18], 1.2, { as: 'note' })],
  },
  'file-axis-three-d': {
    verb: 'the axes redraw and the diagonal axis pushes out',
    parts: [null, retrace({ as: 'axis' }), nudge([11, 15], 0.8, -0.8, { as: 'axis', delay: 0.1 })],
  },
  'file-badge': {
    verb: 'the award badge pops and its ribbon swings',
    parts: [null, pop([7, 14], 1.2, { as: 'badge' }), around([7, 16.5], [7, 19.3], [0, 10, -6, 2, 0], { as: 'ribbon', delay: 0.1 })],
  },
  'file-bitcoin': {
    verb: 'the bitcoin flips beside the file',
    parts: [flip([18.5, 17.5], 1, { as: 'coin' }), null, retrace({ as: 'fold', delay: 0.1 })],
  },
  'file-block': {
    verb: 'the block sign rattles on the file',
    parts: [null, shake([7.5, 5.5], { as: 'sign' })],
  },
  'file-bookmark': {
    verb: 'the bookmark drops down the corner of the file',
    parts: [null, flex('Y', [7, 2], [7, 6.1], [1, 1.25, 0.92, 1.03, 1], { as: 'ribbon' })],
  },
  'file-box': {
    verb: 'the box lid flaps and the box hops',
    parts: [null, draw({ as: 'tape', delay: 0.1 }), hop([8, 17], 1.2, { as: 'box' })],
  },
  'file-braces-corner': {
    verb: 'the brace in the corner flips and the fold redraws',
    parts: [flip([7, 18], 1, { as: 'brace' }), retrace({ as: 'fold', delay: 0.1 }), null],
  },
  'file-braces': {
    verb: 'the braces part on the file',
    parts: [flex('X', [12, 15], [12, 15], [1, 1.25, 0.94, 1.02, 1], { as: 'braces' }), null],
  },
  'file-chart-column-increasing': {
    verb: 'the bars draw upward, shortest first',
    parts: [draw({ as: 'bars', dur: 0.7 }), null],
  },
  'file-chart-column': {
    verb: 'the columns grow from the baseline in turn',
    parts: [null, rise('Y', [8, 18], [8, 17]), rise('Y', [12, 18], [12, 15.5], { delay: 0.1 }), rise('Y', [16, 18], [16, 16.5], { delay: 0.2 })],
  },
  'file-chart-line': {
    verb: 'the chart line draws itself across the file',
    parts: [draw({ as: 'line', dur: 0.7 }), null],
  },
  'file-chart-pie': {
    verb: 'the pie slice pops out and the pie turns',
    parts: [lap([8, 17], 360, { as: 'pie', dur: 0.9 }), ride([10.5, 14.5], out(0.6, -0.6), { as: 'slice', delay: 0.1 }), null],
  },
  'file-check-corner': {
    verb: 'the check writes in the corner and the fold redraws',
    parts: [retrace({ as: 'fold', delay: 0.2 }), null, draw({ as: 'check' })],
  },
  'file-check': {
    verb: 'the check writes on the file',
    parts: [draw({ as: 'check' }), beat(C, { as: 'file', delay: 0.3 })],
  },
  'file-clock': {
    verb: 'the clock hands sweep a full turn on the file',
    parts: [beat([8, 17], { as: 'dial', delay: 0.5 }), around([8, 17], [8.8, 16.3], TURN, { as: 'hands', dur: 0.9 }), null],
  },
  'file-cloud': {
    verb: 'the cloud drifts on the corner of the file',
    parts: [null, ride([8.5, 5.5], out(0.8, 0), { as: 'cloud', dur: 0.8 })],
  },
  'file-code-corner': {
    verb: 'the code brackets part in the corner',
    parts: [nudge([4.5, 19], -0.8, 0, { as: 'bracket' }), nudge([11.5, 19], 0.8, 0, { as: 'bracket' }), null],
  },
  'file-code': {
    verb: 'the code brackets part on the file',
    parts: [nudge([8.8, 15.5], -0.8, 0, { as: 'bracket' }), nudge([15.3, 15.5], 0.8, 0, { as: 'bracket' }), null],
  },
  'file-cog': {
    verb: 'the cog turns a full revolution in the corner',
    parts: [lap([7, 18], 360, { as: 'cog', dur: 1 }), null, null],
  },
  'file-corrupt': {
    verb: 'the corrupted file glitches side to side',
    parts: [ride(C, [[0, 0], [-0.8, 0], [0.6, 0], [-0.4, 0], [0, 0]], { as: 'file', dur: 0.4 })],
  },
}

export default settleSpecs(specs)
