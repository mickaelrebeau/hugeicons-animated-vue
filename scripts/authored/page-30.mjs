/**
 * Page 30 — filter-reset → folder-check.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted filter, fire, flash, flower, folder-01 and folder-add
 * sit in this span and are skipped.
 *
 * Fingerprints keep the print still and let the corner badge act. Fire and
 * flames flicker from their base. Flags wave from the pole. Flip icons
 * mirror their panel across the dashed axis. Flowcharts light their nodes
 * along the flow. Folders keep the folder and let the badge act.
 *
 * Identical-geometry pairs get different jobs: flag / flag-01, flowchart /
 * flowchart-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  burst,
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
  rays,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  swing,
  trail,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const TURN = [0, 72, 252, 370.8, 360]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const scribble = (origin, o = {}) => ride(origin, [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen', ...o })

/** A flame flickering from its base. */
const flicker = (pivot, center, o = {}) => ({
  as: 'flame',
  origin: center,
  transform: [1, 1.08, 0.94, 1.05, 1].map((s, i) => {
    const sk = [0, -4, 3, -2, 0][i]
    const ty = ((pivot[1] - center[1]) * (1 - s)).toFixed(2)
    return `translate(0px, ${ty}px) scaleY(${s}) skewX(${sk}deg)`
  }),
  times: [0, 0.25, 0.5, 0.75, 1],
  ease: 'easeInOut',
  dur: 0.8,
  ...o,
})

/** A flag waving from its pole. */
const wave = (poleX, center, o = {}) => ({
  as: 'flag',
  origin: center,
  transform: [0, 6, -4, 2, 0].map((sk, i) => {
    const s = [1, 0.92, 1.03, 0.98, 1][i]
    return `translate(${((poleX - center[0]) * (1 - s)).toFixed(2)}px, 0px) scaleX(${s}) skewY(${sk}deg)`
  }),
  times: [0, 0.25, 0.5, 0.75, 1],
  ease: 'easeInOut',
  dur: 0.8,
  ...o,
})

/** Mirror a panel across an axis: squash to 0 on the axis and back. */
const mirror = (axis, c, o = {}) => ({ as: 'panel', origin: c, transform: [`scale${axis}(1)`, `scale${axis}(-1)`, `scale${axis}(-1)`, `scale${axis}(1)`], times: [0, 0.35, 0.65, 1], ease: 'easeInOut', dur: 0.8, ...o })

const badge = { lap: (c, deg = 90, o = {}) => lap(c, deg, { as: 'badge', dur: 0.62, ...o }) }

// ---------------------------------------------------------------------------

const specs = {
  // --- filters -----------------------------------------------------------------------------
  'filter-reset': {
    verb: 'the reset arrow turns back a full circle beside the funnel',
    parts: [null, lap([17.5, 10], -360, { as: 'arrow', dur: 0.9 })],
  },
  'filter-vertical': {
    verb: 'the two slider knobs slide along their vertical tracks',
    parts: [null, null, null, null, hold([7, 15], 0, -4, { as: 'knob' }), hold([17, 9], 0, 4, { as: 'knob', delay: 0.08 })],
  },

  // --- fingerprints --------------------------------------------------------------------------
  'finger-access': {
    verb: 'the fingerprint ridges scan from the center outward',
    parts: [retrace({ as: 'ridge', delay: 0.1 }), retrace({ as: 'ridge', delay: 0.2 }), draw({ as: 'core' })],
  },
  'finger-print-add': {
    verb: 'the plus badge rolls a quarter beside the print',
    parts: [badge.lap([17.5, 18]), null],
  },
  'finger-print-check': {
    verb: 'the check badge pops beside the print',
    parts: [null, pop([17.5, 18], 1.2, { as: 'badge' })],
  },
  'finger-print-minus': {
    verb: 'the minus badge squeezes beside the print',
    parts: [null, flex('X', [17.5, 18], [17.5, 18], [1, 0.6, 1.08, 1, 1], { as: 'badge' })],
  },
  'finger-print-remove': {
    verb: 'the X badge rattles beside the print',
    parts: [shake([17.5, 18], { as: 'badge' }), null],
  },
  'finger-print-scan': {
    verb: 'the scan frame redraws and the print pulses',
    parts: [retrace({ as: 'frame' }), pop([12, 11.9], 1.08, { as: 'print', delay: 0.2 })],
  },
  'finger-print': {
    verb: 'the ridges rewrite from the core out',
    parts: [retrace({ as: 'ridge', delay: 0.2 }), retrace({ as: 'ridge', delay: 0.1 }), draw({ as: 'core' })],
  },
  'fingerprint-pattern': {
    verb: 'the fingerprint pattern draws in sweeps',
    parts: [retrace({ as: 'ridge', delay: 0.2 }), retrace({ as: 'ridge', delay: 0.1 }), draw({ as: 'core' })],
  },
  fins: {
    verb: 'the two fins paddle in turn',
    parts: [around([11, 21], [6.5, 12.2], [0, -8, 4, -1, 0], { as: 'fin' }), around([13, 3], [17.5, 11.8], [0, -8, 4, -1, 0], { as: 'fin', delay: 0.12 }), null, null],
  },

  // --- fire ---------------------------------------------------------------------------------
  'fire-02': {
    verb: 'the flame flickers and its core flares',
    parts: [flicker([12, 22], C), pop([12, 15], 1.15, { as: 'core', delay: 0.1 })],
  },
  'fire-03': {
    verb: 'the flame flickers around its core',
    parts: [flicker([12, 21.5], C), flicker([12, 18.5], [12, 14], { delay: 0.08 })],
  },
  'fire-extinguisher': {
    verb: 'the hose sprays and the tank shudders',
    parts: [shake([14, 14], { as: 'tank' }), null, null, retrace({ as: 'hose' }), nudge([18, 3], 0.8, 0, { as: 'lever' })],
    extras: [puff(5, 17, 0.7, -1, 1.5, { as: 'spray', delay: 0.1 })],
  },
  'fire-pit': {
    verb: 'the fire flickers over the logs',
    parts: [flicker([12, 19], [12, 10.5]), flicker([11, 16], [11.3, 12.5], { delay: 0.1 }), null, beat([12.8, 20.5], { as: 'logs', delay: 0.3 })],
  },
  'fire-security': {
    verb: 'the flame flickers and the shield stamps',
    parts: [flicker([10, 22], [10, 12]), stamp([17.5, 17.3], { as: 'shield', delay: 0.1 })],
  },
  firewall: {
    verb: 'the flame flickers over the brick wall',
    parts: [beat([12, 18], { as: 'wall', delay: 0.3 }), null, null, null, null, flicker([12, 11], [11.9, 6.5])],
  },
  fireworks: {
    verb: 'the rockets burst and the sparks pop around them',
    parts: [
      draw({ as: 'trail' }),
      retrace({ as: 'burst', delay: 0.1 }),
      retrace({ as: 'burst', delay: 0.14 }),
      retrace({ as: 'burst', delay: 0.18 }),
      pop([3.1, 3.1], 4, { as: 'spark', delay: 0.3 }),
      pop([16.9, 3.1], 4, { as: 'spark', delay: 0.34 }),
      pop([20.5, 12.5], 4, { as: 'spark', delay: 0.38 }),
      pop([13, 20.9], 4, { as: 'spark', delay: 0.42 }),
      pop([4.1, 15.9], 4, { as: 'spark', delay: 0.36 }),
      pop([17.9, 11.1], 4, { as: 'spark', delay: 0.3 }),
      pop([11, 4.1], 4, { as: 'spark', delay: 0.32 }),
    ],
  },
  'first-aid-kit': {
    verb: 'the cross turns a quarter and the handle lifts',
    parts: [beat([12, 13.5], { as: 'case', delay: 0.3 }), lap([12, 13.5], 90, { as: 'cross', dur: 0.62 }), ride([12, 4.5], out(0, -0.8), { as: 'handle' })],
  },
  'first-bracket-circle': {
    verb: 'the parentheses part inside the circle',
    parts: [flex('X', C, C, [1, 1.25, 0.94, 1.02, 1], { as: 'brackets' }), null],
  },
  'first-bracket-square': {
    verb: 'the parentheses squeeze inside the square',
    parts: [null, flex('X', C, C, [1, 0.7, 1.06, 1, 1], { as: 'brackets' })],
  },
  'first-bracket': {
    verb: 'the two parentheses bow outward and back',
    parts: [nudge([4, 12], -1, 0, { as: 'bracket' }), nudge([20, 12], 1, 0, { as: 'bracket' })],
  },

  // --- fish ---------------------------------------------------------------------------------
  'fish-food': {
    verb: 'the fish wiggles toward the food and the eye blinks',
    parts: [around([18, 12], C, [0, -6, 5, -2, 0], { as: 'fish' }), flex('Y', [6, 12], [6, 12], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5 })],
  },
  'fish-off': {
    verb: 'the slash cuts across and the fish fades',
    parts: [dim({ as: 'eye', delay: 0.1 }), dim({ as: 'fish', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'fish-symbol': {
    verb: 'the fish symbol swims forward and back',
    parts: [ride(C, out(-1.2, 0), { as: 'fish' }), ride([15.5, 6.5], out(-1.2, 0), { as: 'fish' })],
  },
  fish: {
    verb: 'the fish wags its tail',
    parts: [around([12, 12], [12.1, 11.9], [0, -8, 6, -3, 0], { as: 'fish' }), around([12, 12], [16.5, 6.5], [0, -8, 6, -3, 0], { as: 'fish' })],
  },
  'fishing-hook': {
    verb: 'the hook bobs on its line',
    parts: [ride([7, 8], out(0, 1), { as: 'hook' }), flex('Y', [7, 2], [7, 4], [1, 1.25, 0.94, 1.02, 1], { as: 'line' }), ride([13, 16], out(0, 1), { as: 'hook' })],
  },
  'fishing-rod': {
    verb: 'the rod flexes and the reel spins',
    parts: [lap([9, 16], 360, { as: 'reel', dur: 0.8 }), null, around([3, 21], [12, 11.8], [0, -4, 2, -1, 0], { as: 'rod' })],
  },
  'fit-to-screen': {
    verb: 'the arrows push out to the edges, which answer',
    parts: [nudge([3, 12], -0.6, 0, { as: 'edge', delay: 0.2 }), nudge([21, 12], 0.6, 0, { as: 'edge', delay: 0.2 }), flex('X', C, C, [1, 1.2, 0.96, 1.02, 1], { as: 'arrows' })],
  },
  'five-circle': {
    verb: 'the 5 rewrites inside the circle',
    parts: [sweep({ as: 'five' }), null],
  },
  'five-square': {
    verb: 'the 5 flips inside the square',
    parts: [null, flip(C, 1, { as: 'five' })],
  },
  fiverr: {
    verb: 'the logo hops',
    parts: [hop(C, 1.2, { as: 'logo' })],
  },

  // --- flags --------------------------------------------------------------------------------
  'flag-01': {
    verb: 'the flag waves from its pole',
    parts: [wave(5, [12.3, 11.3])],
  },
  flag: {
    verb: 'the flag is planted: it drops into place and settles',
    parts: [ride([12.3, 11.3], out(0, -1.6), { as: 'flag' })],
  },
  'flag-02': {
    verb: 'the cloth waves from the pole',
    parts: [null, wave(4, [12, 8.9])],
  },
  'flag-03': {
    verb: 'the banner waves from the pole',
    parts: [wave(4, [12.1, 9]), null],
  },
  'flag-off': {
    verb: 'the slash cuts across and the flag droops',
    parts: [null, flex('Y', [12, 3], [12, 9], [1, 0.8, 0.8, 1, 1], { as: 'flag', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'flag-triangle-left': {
    verb: 'the pennant waves from the pole',
    parts: [null, wave(18.3, [12, 8.6])],
  },
  'flag-triangle-right': {
    verb: 'the pennant flutters on its pole',
    parts: [wave(5.5, C)],
  },
  'flame-kindling': {
    verb: 'the flame flickers over the crossed sticks',
    parts: [flicker([12, 15], [12, 8.5]), nudge([12, 19.5], 0, 0.4, { as: 'stick', delay: 0.2 }), nudge([12, 19.5], 0, 0.4, { as: 'stick', delay: 0.2 })],
  },
  flame: {
    verb: 'the flame flickers from its base',
    parts: [flicker([12, 21.3], C)],
  },
  'flash-off': {
    verb: 'the slash cuts across and the bolt halves dim',
    parts: [dim({ as: 'bolt', delay: 0.1 }), dim({ as: 'bolt', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'flashlight-off': {
    verb: 'the slash cuts across and the switch clicks off',
    parts: [dim({ as: 'body', delay: 0.1 }), dim({ as: 'head', delay: 0.1 }), draw({ as: 'slash' }), null, ride([12, 13.5], out(0, 0.8), { as: 'switch' })],
  },
  flashlight: {
    verb: 'the switch clicks and a beam bursts from the head',
    parts: [null, null, ride([12, 14], out(0, -0.8), { as: 'switch' })],
    extras: [burst(rays(12, 1.4, 0.8, 1.9, 5, -180), { delay: 0.1 })],
  },

  // --- flasks -------------------------------------------------------------------------------
  'flask-conical-off': {
    verb: 'the slash cuts across and the liquid sinks',
    parts: [dim({ as: 'flask', delay: 0.1 }), null, null, null, ride([12, 15.5], out(0, 0.8), { as: 'liquid' }), draw({ as: 'slash' })],
  },
  'flask-conical': {
    verb: 'the flask swirls and the liquid sloshes',
    parts: [around([12, 2], [12, 12], [0, 6, -4, 1.5, 0], { as: 'flask' }), null, ride([13, 15.5], [[0, 0], [-0.8, 0], [0.6, 0], [-0.2, 0], [0, 0]], { as: 'liquid' })],
    extras: [puff(11, 18, 0.5, 0, -5, { as: 'bubble', delay: 0.1 })],
  },
  'flask-round': {
    verb: 'the liquid sloshes in the round flask',
    parts: [ride([12, 14.5], [[0, 0], [0.8, 0], [-0.6, 0], [0.2, 0], [0, 0]], { as: 'liquid' }), null, around([12, 2], [12, 12], [0, -5, 3, -1, 0], { as: 'flask' })],
  },
  flaticon: {
    verb: 'the two strokes hop in turn',
    parts: [hop([8.8, 12.1], 1), hop([17.7, 10], 1, { delay: 0.12 })],
  },
  flickr: {
    verb: 'the two dots trade places',
    parts: [null, ride([8, 12], out(8, 0), { as: 'dot', dur: 0.7 }), ride([16, 12], out(-8, 0), { as: 'dot', dur: 0.7 })],
  },
  'flim-slate': {
    verb: 'the clapper snaps shut on the slate',
    parts: [beat([12.3, 16.3], { as: 'slate', delay: 0.14 }), around([3.5, 10.5], [11.3, 6.1], [0, 12, -2, 0.6, 0], { as: 'clapper', dur: 0.5 }), around([3.5, 10.5], [8, 7], [0, 12, -2, 0.6, 0], { as: 'clapper', dur: 0.5 }), around([3.5, 10.5], [15, 5], [0, 12, -2, 0.6, 0], { as: 'clapper', dur: 0.5 }), null],
  },

  // --- flips ----------------------------------------------------------------------------------
  'flip-bottom': {
    verb: 'the panel flips down across the dashed edge',
    parts: [null, mirror('Y', [12, 17])],
  },
  'flip-horizontal': {
    verb: 'the two triangles swap sides across the axis',
    parts: [ride([5.3, 12], out(1.2, 0), { as: 'tri' }), ride([18.7, 12], out(-1.2, 0), { as: 'tri' }), blink({ as: 'axis', dur: 0.6 })],
  },
  'flip-left': {
    verb: 'the panel flips left across the dashed edge',
    parts: [null, mirror('X', [17, 12])],
  },
  'flip-phone': {
    verb: 'the flip phone folds open on its hinge',
    parts: [null, null, flex('Y', [12, 12], [12, 9.5], [1, 0.4, 1.08, 1, 1], { as: 'screen' }), ride([5.5, 3], out(0, -0.8), { as: 'antenna' })],
  },
  'flip-right': {
    verb: 'the panel flips right across the dashed edge',
    parts: [null, mirror('X', [7, 12])],
  },
  'flip-top': {
    verb: 'the panel flips up across the dashed edge',
    parts: [null, mirror('Y', [12, 7])],
  },
  'flip-vertical': {
    verb: 'the two triangles swap across the axis',
    parts: [ride([12, 5.3], out(0, 1.2), { as: 'tri' }), ride([12, 18.7], out(0, -1.2), { as: 'tri' }), blink({ as: 'axis', dur: 0.6 })],
  },
  'floor-plan': {
    verb: 'the floor plan walls draw room by room',
    parts: [draw({ as: 'wall' }), draw({ as: 'wall', delay: 0.1 }), draw({ as: 'wall', delay: 0.2 }), draw({ as: 'wall', delay: 0.3 }), null],
  },
  'floppy-disk': {
    verb: 'the shutter slides and the label redraws',
    parts: [hold([12, 18.5], 1.4, 0, { as: 'shutter' }), draw({ as: 'label', delay: 0.1 }), null],
  },

  // --- flow -----------------------------------------------------------------------------------
  'flow-circle': {
    verb: 'the flow lights its nodes from left to right',
    parts: [pop([15.5, 4.5], 1.2, { as: 'node', delay: 0.2 }), pop([15.5, 19.5], 1.2, { as: 'node', delay: 0.3 }), pop([6, 12], 1.15, { as: 'node' }), retrace({ as: 'links', delay: 0.06 })],
  },
  'flow-connection': {
    verb: 'the connections redraw from node to node',
    parts: [pop([6, 5.5], 1.15, { as: 'node' }), pop([6, 18], 1.15, { as: 'node', delay: 0.14 }), retrace({ as: 'links', delay: 0.06 }), pop([18.5, 18], 1.15, { as: 'node', delay: 0.28 })],
  },
  'flow-square': {
    verb: 'the square nodes light along the flow',
    parts: [pop([15, 4.5], 1.2, { as: 'node', delay: 0.2 }), pop([15, 19.5], 1.2, { as: 'node', delay: 0.3 }), pop([5.5, 12], 1.15, { as: 'node' }), retrace({ as: 'links', delay: 0.06 })],
  },
  flow: {
    verb: 'the four nodes light up around the loop',
    parts: [pop([17.5, 6.5], 1.15, { as: 'node', delay: 0.1 }), pop([6.5, 6.5], 1.15, { as: 'node' }), pop([6.5, 17.5], 1.15, { as: 'node', delay: 0.3 }), pop([17.5, 17.5], 1.15, { as: 'node', delay: 0.2 }), retrace({ as: 'links', delay: 0.06 })],
  },
  'flowchart-01': {
    verb: 'the decision diamond turns and the branches redraw',
    parts: [lap(C, 90, { as: 'decision', dur: 0.66 }), pop([12, 4], 1.12, { as: 'start' }), pop([12, 20], 1.12, { as: 'end', delay: 0.3 }), retrace({ as: 'branch', delay: 0.1 }), retrace({ as: 'branch', delay: 0.1 }), draw({ as: 'link' })],
  },
  flowchart: {
    verb: 'the flow runs top to bottom through the decision',
    parts: [pop(C, 1.15, { as: 'decision', delay: 0.14 }), pop([12, 4], 1.12, { as: 'start' }), pop([12, 20], 1.12, { as: 'end', delay: 0.28 }), null, null, draw({ as: 'link', delay: 0.06 })],
  },
  'flowchart-02': {
    verb: 'the steps light top to bottom and the loop redraws',
    parts: [pop([4, 20], 1.2, { as: 'start' }), retrace({ as: 'links', delay: 0.06 }), pop([14, 4], 1.1, { as: 'step', delay: 0.1 }), pop([14, 12], 1.1, { as: 'step', delay: 0.2 }), pop([14, 20], 1.1, { as: 'step', delay: 0.3 }), retrace({ as: 'loop', delay: 0.2 })],
  },
  'flower-pot': {
    verb: 'the flower sways in its pot',
    parts: [swing([12, 15], [12, 6.5], [0, -8, 5, -2, 0], { as: 'flower' }), swing([12, 15], [12, 3], [0, -8, 5, -2, 0], { as: 'flower' }), swing([12, 15], C, [0, -8, 5, -2, 0], { as: 'flower' }), swing([12, 15], [13.5, 12], [0, -8, 5, -2, 0], { as: 'flower' }), null],
  },
  flushed: {
    verb: 'the eyes widen and the mouth tightens',
    parts: [null, pop([8.5, 9.5], 1.3, { as: 'eye' }), pop([15.5, 9.5], 1.3, { as: 'eye' }), flex('X', [12, 16], [12, 16], [1, 0.6, 1.04, 1, 1], { as: 'mouth', delay: 0.1 })],
  },
  'flying-human': {
    verb: 'the flyer soars forward, cape trailing',
    parts: [ride([14.5, 5.5], out(1, -0.8), { as: 'flyer' }), ride([14, 8], out(1, -0.8), { as: 'flyer' }), retrace({ as: 'cape', delay: 0.06 })],
  },
  'focus-point': {
    verb: 'the focus frame closes in and the ticks blink',
    parts: [{ as: 'frame', origin: C, transform: ['scale(1)', 'scale(0.9)', 'scale(1.03)', 'scale(1)'], times: [0, 0.4, 0.72, 1], ease: [0.23, 1, 0.32, 1], dur: 0.56 }, blink({ as: 'ticks', dur: 0.6, delay: 0.2 })],
  },
  focus: {
    verb: 'the frame closes in on the target, which pops',
    parts: [pop(C, 1.25, { as: 'target', delay: 0.2 }), { as: 'frame', origin: C, transform: ['scale(1)', 'scale(0.88)', 'scale(1.03)', 'scale(1)'], times: [0, 0.4, 0.72, 1], ease: [0.23, 1, 0.32, 1], dur: 0.56 }],
  },
  'fold-horizontal': {
    verb: 'the two halves fold in toward the crease',
    parts: [null, null, nudge([19.5, 12], -1.2, 0, { as: 'edge' }), nudge([4.5, 12], 1.2, 0, { as: 'edge' }), null, null, nudge([6.5, 12], 1.2, 0, { as: 'chevron' }), nudge([17.5, 12], -1.2, 0, { as: 'chevron' })],
  },
  'fold-vertical': {
    verb: 'the two halves fold down toward the crease',
    parts: [null, null, null, null, nudge([12, 19], 0, -1.2, { as: 'arrow' }), nudge([12, 5], 0, 1.2, { as: 'arrow' })],
  },

  // --- folders ----------------------------------------------------------------------------------
  'folder-02': {
    verb: 'the folder flap opens and settles',
    parts: [null, flex('Y', [12, 21], [12, 16], [1, 0.7, 1.06, 1, 1], { as: 'flap' })],
  },
  'folder-03': {
    verb: 'the front flap dips open and the back answers',
    parts: [flex('Y', [12, 21], [12, 16], [1, 0.75, 1.04, 1, 1], { as: 'flap' }), beat([12, 7], { as: 'back', delay: 0.24 })],
  },
  'folder-archive': {
    verb: 'the zipper pull slides on the folder',
    parts: [ride([14, 15.8], out(0, -1.4), { as: 'zip' }), null],
  },
  'folder-attachment': {
    verb: 'the paperclip swings on the folder',
    parts: [null, around([18, 21], [18, 17], [0, 10, -6, 2, 0], { as: 'clip' })],
  },
  'folder-audio': {
    verb: 'the note bounces on the folder',
    parts: [null, hop([18.5, 17], 1.2, { as: 'note' })],
  },
  'folder-block': {
    verb: 'the block sign rattles on the folder',
    parts: [null, shake([18.5, 17.5], { as: 'sign' })],
  },
  'folder-check': {
    verb: 'the check writes beside the folder',
    parts: [null, draw({ as: 'check' })],
  },
}

export default settleSpecs(specs)
