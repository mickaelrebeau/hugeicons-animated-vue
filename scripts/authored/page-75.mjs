/**
 * Page 75 — wifi-circle → wudu.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * Wi-Fi badges follow the family rule: bare lets the badge act; `-01` lights
 * the arcs in turn, then the badge answers. `wifi` shares geometry with the
 * handcrafted `wifi-01` (arcs expand from the source), so its arcs only blink
 * on in turn. Wind turbines spin their blades around the hub. Workflow nodes
 * fire along their connectors.
 *
 * Identical-geometry pairs get different jobs: wifi-connected / -01,
 * wifi-disconnected / -01, wifi-error / -01, wifi-off / -01,
 * workflow-circle / -01, workflow-square / -01, wrench / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  fall,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  swing,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const dimmed = (o = {}) => ({ as: 'dim', opacity: [1, 0.3, 0.3, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.7, ...o })
const quarter = (c, o = {}) => ({ as: 'mark', origin: c, transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.8)', 'rotate(96deg) scale(1.08)', 'rotate(90deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56, ...o })
const boing = (c, o = {}) => ({
  as: 'logo',
  origin: c,
  transform: ['scale(1, 1)', 'scale(1.08, 0.9)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: OUT,
  dur: 0.62,
  ...o,
})
/** An arc that lights up: off, then back on, staggered by delay. */
const lit = (delay) => ({ as: 'arc', opacity: [1, 0.15, 1, 1], times: [0, 0.2, 0.5, 1], ease: 'easeInOut', dur: 0.6, delay })
const badgePop = (c, { s = 1.2, ...o } = {}) => pop(c, s, { as: 'badge', delay: 0.3, ...o })
/** Rotor blades spin around the hub. */
const spin = (hub, c, turns = 1, o = {}) => swing(hub, c, [0, 70 * turns, 250 * turns, 368 * turns, 360 * turns], { as: 'rotor', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9, ...o })
const node = (c, delay = 0, { s = 1.24, ...o } = {}) => pop(c, s, { as: 'node', delay, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- wifi -----------------------------------------------------------------------------------------
  'wifi-circle': {
    verb: 'the signal arcs pulse inside the ring',
    parts: [beat(C, { delay: 0.2 }), wave([12, 12])],
  },
  'wifi-connected-01': {
    verb: 'the arcs light up in turn and the tick pops',
    parts: [null, lit(0.08), lit(0.16), lit(0), badgePop([18, 18])],
  },
  'wifi-connected-02': {
    verb: 'the arcs blink on and the tick writes in below',
    parts: [lit(0), lit(0.1), draw({ as: 'tick', delay: 0.16 })],
  },
  'wifi-connected-03': {
    verb: 'the wedge answers as the tick writes in',
    parts: [beat([8.8, 12], { delay: 0.2 }), draw({ as: 'tick' })],
  },
  'wifi-connected': {
    verb: 'the tick writes itself beside the signal',
    parts: [null, null, null, null, draw({ as: 'tick' })],
  },
  'wifi-disconnected-01': {
    verb: 'the arcs fade one by one and the cross rattles',
    parts: [dimmed({ delay: 0 }), dimmed({ delay: 0.08 }), dimmed({ delay: 0.16 }), shake([18, 16.5], { as: 'x', delay: 0.2 })],
  },
  'wifi-disconnected-02': {
    verb: 'the cross pops under the fading arcs',
    parts: [pop([12, 17.5], 1.3, { as: 'x' }), dimmed({ delay: 0.06 }), dimmed({ delay: 0.12 })],
  },
  'wifi-disconnected-03': {
    verb: 'the cross rattles beside the signal',
    parts: [null, shake([19, 7], { as: 'x' })],
  },
  'wifi-disconnected-04': {
    verb: 'the wedge dims and the cross pops',
    parts: [dimmed(), pop([18, 18], 1.3, { as: 'x', delay: 0.1 })],
  },
  'wifi-disconnected': {
    verb: 'the cross turns a quarter',
    parts: [null, null, null, quarter([18, 16.5])],
  },
  'wifi-error-01': {
    verb: 'the arcs blink on and the warning sign pops',
    parts: [lit(0.08), lit(0), badgePop([12, 16.5], { s: 1.14, delay: 0.24 })],
  },
  'wifi-error-02': {
    verb: 'the bang stretches through the signal wedge',
    parts: [beat([12, 12.2], { delay: 0.16 }), scaleFrom('Y', [12, 15.5], [12, 10], [1, 1.2, 0.94, 1], { as: 'stem' })],
  },
  'wifi-error': {
    verb: 'the warning sign rattles under the arcs',
    parts: [null, null, shake([12, 16.5], { as: 'sign' })],
  },
  'wifi-full-signal': {
    verb: 'all three arcs light up from the bottom',
    parts: [null, lit(0.1), lit(0.2), lit(0)],
  },
  'wifi-low-signal': {
    verb: 'the single arc flickers weakly',
    parts: [null, blink({ as: 'arc', dur: 0.7 })],
  },
  'wifi-medium-signal': {
    verb: 'the two arcs light up from the bottom',
    parts: [null, lit(0.12), lit(0)],
  },
  'wifi-no-signal': {
    verb: 'the empty wedge fades and returns',
    parts: [dimmed()],
  },
  'wifi-location': {
    verb: 'the pin hops and the signal pulses inside it',
    parts: [hop(C, 1), wave([12, 12], { delay: 0.18 })],
  },
  'wifi-lock': {
    verb: 'the padlock rattles beside the arcs',
    parts: [null, null, null, shake([18.5, 16.5], { as: 'lock' })],
  },
  'wifi-off-01': {
    verb: 'the arcs fade in turn and the slash cuts across',
    parts: [dimmed({ delay: 0 }), dimmed({ delay: 0.08 }), dimmed({ delay: 0.08 }), dimmed({ delay: 0.16 }), dimmed({ delay: 0.16 }), dimmed({ delay: 0 }), draw({ as: 'slash', delay: 0.14 })],
  },
  'wifi-off-02': {
    verb: 'the slash writes across and the wedge dims',
    parts: [dimmed(), draw({ as: 'slash' })],
  },
  'wifi-off': {
    verb: 'the slash writes itself across the signal',
    parts: [null, null, null, null, null, null, draw({ as: 'slash' })],
  },
  'wifi-pen': {
    verb: 'the pen scribbles under the signal',
    parts: [null, ride([17, 16], [[0, 0], [-0.6, 0.6], [0.5, -0.2], [-0.4, 0.5], [0, 0]], { as: 'pen', times: [0, 0.22, 0.46, 0.72, 1], ease: 'easeInOut', dur: 0.7 })],
  },
  'wifi-square': {
    verb: 'the signal arcs hop inside the tile',
    parts: [beat(C, { delay: 0.2 }), hop(C, 1)],
  },
  'wifi-sync': {
    verb: 'the sync arrows turn once under the signal',
    parts: [null, lap([18, 15.5], 360, { as: 'sync' })],
  },
  'wifi-unlock': {
    verb: 'the open padlock hops beside the arcs',
    parts: [null, null, null, hop([18.5, 16.5], 1.2, { as: 'lock' })],
  },
  wifi: {
    verb: 'the arcs blink on from the dot outward',
    parts: [lit(0.06), lit(0.14), lit(0.22), blink({ as: 'dot', times: [0, 0.15, 0.3, 0.45, 0.6], dur: 0.6 })],
  },
  wikipedia: {
    verb: 'the W hops inside its tile',
    parts: [beat(C, { delay: 0.2 }), hop([12, 12.5], 1)],
  },

  // --- wind -----------------------------------------------------------------------------------------
  'wind-power-01': {
    verb: 'the blades spin around the hub as the wind arcs flash',
    parts: [null, null, null, spin([12, 12.5], [12, 5]), spin([12, 12.5], [18.3, 16.3]), spin([12, 12.5], [5.8, 16.3]), spin([12, 12.5], [12, 9.5]), spin([12, 12.5], [14.5, 14]), spin([12, 12.5], [9.5, 14]), wave([12, 7.5], { delay: 0.1 })],
  },
  'wind-power-02': {
    verb: 'the four blades spin around the hub',
    parts: [null, spin([12, 9], [7.8, 5.1]), spin([12, 9], [16.2, 12.9]), spin([12, 9], [16.2, 5.1]), spin([12, 9], [7.8, 12.9]), null],
  },
  'wind-power-03': {
    verb: 'the three blades spin around the hub',
    parts: [null, spin([12, 10.9], [15.9, 13.5]), spin([12, 10.9], [12, 5.9]), spin([12, 10.9], [8.1, 13.5]), null],
  },
  'wind-power': {
    verb: 'the wind arc pulses and the blades spin once',
    parts: [null, wave([12, 7]), spin([12, 11], [12, 8.3], 1, { delay: 0.1 }), spin([12, 11], [9.5, 12.3], 1, { delay: 0.1 }), spin([12, 11], [14.5, 12.3], 1, { delay: 0.1 }), null, null, spin([12, 11], [12, 4.5], 1, { delay: 0.1 }), spin([12, 11], [17.8, 14.5], 1, { delay: 0.1 }), spin([12, 11], [6.2, 14.5], 1, { delay: 0.1 })],
  },
  'wind-surf': {
    verb: 'the sail leans into the wind and the board rocks',
    parts: [blink({ as: 'splash', dur: 0.6 }), wiggle([12, 20.5], [12, 20.5], 3, { as: 'board' }), wiggle([15, 19], [16.6, 10.5], -6, { as: 'sail' }), wiggle([15, 19], [12, 9.9], -6, { as: 'sail' })],
  },
  'wind-turbine': {
    verb: 'the blades whirl two quick turns',
    parts: [
      null,
      null,
      spin([12, 11], [12, 8.3], 2, { dur: 1 }),
      spin([12, 11], [12, 4.5], 2, { dur: 1 }),
      spin([12, 11], [9.6, 12.4], 2, { dur: 1 }),
      spin([12, 11], [6.3, 14.4], 2, { dur: 1 }),
      spin([12, 11], [14.4, 12.4], 2, { dur: 1 }),
      spin([12, 11], [17.7, 14.4], 2, { dur: 1 }),
      null,
      null,
    ],
  },
  'windows-new': {
    verb: 'the four panes pop out of the frame',
    parts: [beat(C, { delay: 0.16 }), pop(C, 1.08, { as: 'cross' })],
  },
  'windows-old': {
    verb: 'the flag waves from its left edge',
    parts: [wiggle([3, 12], C, -5, { as: 'flag' }), wiggle([3, 12], C, -5, { as: 'flag' })],
  },
  wink: {
    verb: 'the open eye winks shut',
    parts: [null, null, null, { as: 'eye', origin: [8.4, 8.8], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.24, 0.6, 0.8], ease: 'easeInOut', dur: 0.7 }],
  },
  winking: {
    verb: 'the wink tilts and the smile widens',
    parts: [null, wiggle([15.5, 8.5], [15.5, 8.5], -16, { as: 'wink' }), { as: 'smile', origin: [12, 16], transform: ['scaleX(1)', 'scaleX(1.14)', 'scaleX(0.98)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 }, null],
  },
  'wireless-cloud-access': {
    verb: 'the cloud drifts and the signal pulses beneath it',
    parts: [ride([12, 9.5], [[0, 0], [0.8, 0], [-0.4, 0], [0.2, 0], [0, 0]], { as: 'cloud', dur: 0.8 }), wave([12, 16.5], { delay: 0.1 }), blink({ as: 'dot', delay: 0.2, dur: 0.6 })],
  },
  wireless: {
    verb: 'the router light blinks and the signal arc pulses',
    parts: [null, blink({ as: 'led' }), wave([12, 4.5], { delay: 0.1 })],
  },
  wise: {
    verb: 'the arrow mark nudges up',
    parts: [nudge(C, 0, -1.6, { as: 'logo' })],
  },
  woman: {
    verb: 'the head bobs and the dress sways',
    parts: [hop([12, 4], 1), wiggle([12, 8.5], [12, 15.2], 3, { as: 'dress', delay: 0.06 })],
  },
  wordpress: {
    verb: 'the two strokes of the W hop in turn',
    parts: [hop([7.4, 13], 1), hop([16, 11.5], 1, { delay: 0.12 })],
  },

  // --- work -----------------------------------------------------------------------------------------
  'work-alert': {
    verb: 'the bang stretches and its dot drops in on the bag',
    parts: [beat([18, 17.5], { delay: 0.2 }), pop([18, 19.4], 1.8, { as: 'dot', delay: 0.2 }), scaleFrom('Y', [18, 17], [18, 16.3], [1, 1.4, 0.9, 1], { as: 'stem' }), null, null],
  },
  'work-history': {
    verb: 'the clock winds back on the briefcase',
    parts: [null, swing([17.5, 17.5], [17.5, 17.5], [0, -40, 8, -3, 0], { as: 'clock' }), null],
  },
  'work-update': {
    verb: 'the update arrow spins inside its badge',
    parts: [null, beat([17.5, 17.5], { delay: 0.3 }), lap([17.5, 17.5], 360, { as: 'arrow' }), null],
  },
  work: {
    verb: 'the briefcase is lifted by its handle',
    parts: [hop([12, 14], 1, { delay: 0.04 }), hop([12, 5], 1.2), retrace({ as: 'clasp', delay: 0.1 })],
  },

  // --- workflow -------------------------------------------------------------------------------------
  'workflow-circle-01': {
    verb: 'the start node hops, then the end node answers',
    parts: [hop([6, 9], 1), hop([18, 18], 1, { delay: 0.2 }), null, null],
  },
  'workflow-circle-02': {
    verb: 'the zigzag flows down and the nodes fire in order',
    parts: [node([18.5, 19.5], 0.36), node([18.5, 9.5], 0.12), node([5.5, 14.5], 0.24), node([5.5, 4.5], 0), retrace({ as: 'flow', dur: 0.8 })],
  },
  'workflow-circle-03': {
    verb: 'the root fires and the branch splits to both leaves',
    parts: [node([12, 5], 0), line(0.08), node([5, 19], 0.24), node([19, 19], 0.24)],
  },
  'workflow-circle-04': {
    verb: 'the connectors draw and the nodes fire',
    parts: [node([6, 5], 0), node([18, 5], 0.2), node([6, 19], 0.3), line(0.06), line(0.12)],
  },
  'workflow-circle-05': {
    verb: 'the branch reaches right and its node pops',
    parts: [null, node([18, 5], 0.24), null, null, line(0)],
  },
  'workflow-circle-06': {
    verb: 'the branch node slides in along its curve',
    parts: [null, ride([18, 14], out(-1.2, 0), { as: 'node', delay: 0.1 }), null, null, line(0)],
  },
  'workflow-circle': {
    verb: 'the connector draws through and the end node pops',
    parts: [null, node([18, 18], 0.26), line(0), null],
  },
  'workflow-square-01': {
    verb: 'the two blocks pop in turn',
    parts: [node([10, 5.5], 0, { s: 1.14 }), node([10, 15.5], 0.14, { s: 1.14 }), null, null, null],
  },
  'workflow-square-02': {
    verb: 'the blocks drop into place down the flow',
    parts: [ride([7, 4], out(0, -1), { as: 'block' }), ride([17, 13], out(0, -1), { as: 'block', delay: 0.1 }), ride([17, 20], out(0, -1), { as: 'block', delay: 0.2 }), null, null],
  },
  'workflow-square-03': {
    verb: 'the connector bends down and the last block pops',
    parts: [null, null, node([8, 20], 0.24, { s: 1.14 }), null, line(0)],
  },
  'workflow-square-04': {
    verb: 'the arrow line draws and the target block pops',
    parts: [node([18, 18], 0.26, { s: 1.14 }), null, line(0), null],
  },
  'workflow-square-05': {
    verb: 'the zigzag flows and the squares fire in order',
    parts: [node([5.5, 4.5], 0), node([18.5, 9.5], 0.12), node([5.5, 14.5], 0.24), node([18.5, 19.5], 0.36), retrace({ as: 'flow', dur: 0.8 })],
  },
  'workflow-square-06': {
    verb: 'the tree branches draw from the root',
    parts: [hop([12, 5], 0.8), node([5, 19], 0.24, { s: 1.14 }), node([19, 19], 0.24, { s: 1.14 }), line(0.06)],
  },
  'workflow-square-07': {
    verb: 'the side node hops and the connector curves to it',
    parts: [null, null, hop([18, 7], 1, { delay: 0.2 }), null, line(0)],
  },
  'workflow-square-08': {
    verb: 'the branch square slides in along its curve',
    parts: [null, null, ride([18, 14], out(-1.2, 0), { as: 'node', delay: 0.1 }), null, line(0)],
  },
  'workflow-square-09': {
    verb: 'the top-right square pops at the end of its branch',
    parts: [null, null, node([18, 5], 0.24, { s: 1.14 }), null, line(0)],
  },
  'workflow-square-10': {
    verb: 'the root pops, the arms draw and the leaves hop',
    parts: [node([12, 6], 0, { s: 1.12 }), hop([4.5, 13.5], 0.8, { delay: 0.24 }), hop([19.5, 13.5], 0.8, { delay: 0.24 }), line(0.1), line(0.1), line(0.1), hop([12, 19.5], 0.8, { delay: 0.3 })],
  },
  'workflow-square': {
    verb: 'the arrow node pushes right',
    parts: [null, null, nudge([19, 15.5], 1.4, 0, { as: 'arrow' }), null, null],
  },

  // --- workout --------------------------------------------------------------------------------------
  'workout-battle-ropes': {
    verb: 'the ropes whip in waves as the athlete pumps',
    parts: [hop([7.5, 4.5], 0.5), ride([17.5, 7.4], [[0, 0], [0, -0.8], [0, 0.8], [0, -0.4], [0, 0]], { as: 'rope', dur: 0.7 }), ride([14.2, 13.5], [[0, 0], [0, 0.8], [0, -0.8], [0, 0.4], [0, 0]], { as: 'rope', dur: 0.7 }), hop([8, 14], 0.5)],
  },
  'workout-gymnastics': {
    verb: 'the gymnast swings from the hands',
    parts: [wiggle([16, 3], [5.5, 9.5], 10, { as: 'body' }), wiggle([16, 3], [13.5, 12], 10, { as: 'body' })],
  },
  'workout-kicking': {
    verb: 'the leg snaps out in a kick',
    parts: [hop([5.5, 5.5], 0.5, { delay: 0.1 }), wiggle([10, 12], [13, 12], -10, { as: 'kick' })],
  },
  'workout-run': {
    verb: 'the runner bobs and the trail streaks behind',
    parts: [hop([15.5, 4.5], 0.8), hop([13, 14.5], 0.8), retrace({ as: 'trail', delay: 0.08 })],
  },
  'workout-sport': {
    verb: 'the arms swing up and the head bobs',
    parts: [hop([14.5, 4.5], 0.8, { delay: 0.1 }), wiggle([12, 9.5], [12, 9.5], 10, { as: 'arms' }), null],
  },
  'workout-squats': {
    verb: 'the body squats down and stands back up',
    parts: [ride([11.5, 4.5], [[0, 0], [0, 1.6], [0, 1.6], [0, 0], [0, 0]], { as: 'head', times: [0, 0.3, 0.6, 0.9, 1], dur: 0.8 }), scaleFrom('Y', [11.9, 21], [11.9, 14.5], [1, 0.88, 0.88, 1], { as: 'body', times: [0, 0.3, 0.6, 0.9], dur: 0.8 })],
  },
  'workout-stretching': {
    verb: 'the arm reaches up and the body leans with it',
    parts: [hop([14.5, 5.5], 0.6), wiggle([14.5, 15], [12.7, 9], -10, { as: 'arm' }), wiggle([12, 21], C, -4, { as: 'body' })],
  },
  'workout-warm-up': {
    verb: 'the leg kicks forward as the body sways',
    parts: [hop([13, 4.5], 0.5, { delay: 0.1 }), wiggle([13.9, 21], [13.9, 14.5], 3, { as: 'body' }), wiggle([10, 17], [7.5, 19], 18, { as: 'leg' })],
  },
  worry: {
    verb: 'the mouth wobbles and the eyes shiver',
    parts: [null, ride([12, 15.5], [[0, 0], [-0.5, 0], [0.5, 0], [-0.3, 0], [0, 0]], { as: 'mouth', ease: 'easeInOut', dur: 0.6 }), ride([12, 8.8], [[0, 0], [0.3, 0], [-0.3, 0], [0.2, 0], [0, 0]], { as: 'eyes', ease: 'easeInOut', dur: 0.6 })],
  },
  'wps-office-rectangle': {
    verb: 'the W hops inside its tile',
    parts: [hop(C, 1), beat(C, { delay: 0.2 })],
  },
  'wps-office': {
    verb: 'the W squashes and springs back',
    parts: [boing(C)],
  },

  // --- wrench ---------------------------------------------------------------------------------------
  'wrench-01': {
    verb: 'the wrench taps down along its handle',
    parts: [ride([15.5, 8.5], out(-0.9, 0.9), { as: 'wrench' }), ride([7.9, 16.1], out(-0.9, 0.9), { as: 'wrench' }), ride([5.5, 18.5], out(-0.9, 0.9), { as: 'wrench' })],
  },
  'wrench-02': {
    verb: 'the wrench rocks to turn a bolt',
    parts: [wiggle([12, 7.6], [12, 7.6], 18, { as: 'wrench' }), wiggle([12, 7.6], [12, 17], 18, { as: 'wrench' }), wiggle([12, 7.6], [12, 19], 18, { as: 'wrench' })],
  },
  wrench: {
    verb: 'the wrench turns a bolt around its jaw',
    parts: [wiggle([15.5, 8.5], [15.5, 8.5], -26, { as: 'wrench' }), wiggle([15.5, 8.5], [7.9, 16.1], -26, { as: 'wrench' }), wiggle([15.5, 8.5], [5.5, 18.5], -26, { as: 'wrench' })],
  },
  wudu: {
    verb: 'the water drop falls into the cupped hands',
    parts: [fall([16, 7.2], 0, 3), ride([12.1, 18], [[0, 0], [0, 0], [0, 0.6], [0, -0.2], [0, 0]], { as: 'hands', times: [0, 0.4, 0.56, 0.8, 1] })],
  },
}

export default settleSpecs(specs)
