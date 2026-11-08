/**
 * Page 67 — tablets → test-tubes.
 *
 * Gallery page (80 public icons). The hidden handcrafted target-01 sits in
 * this span and is skipped; target shares its geometry, so the dart pushes
 * into the bullseye instead of the original's pulse.
 *
 * tag and tag-01 carry a circle with an SVG transform attribute (primitive 0);
 * it stays still so the CSS transform does not override it.
 *
 * Task clipboards follow one rule: bare lets the badge act; -01 (same
 * geometry) hops the clip, then pops the badge; -02 rewrites the lines, then
 * lets the badge act. Tally marks draw stroke by stroke. Tap hands use the
 * hand family (tap, poke, nudge, hold) with the ripple arc answering.
 *
 * Identical-geometry pairs get different jobs: taco / -01, tag / -01,
 * tap / -01, target / target-01, task / -01, task-add / -01,
 * task-daily / -01, task-done / -01, task-edit / -01, task-remove / -01,
 * telescope / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  DIR,
  HOLD_E,
  HOLD_T,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flex,
  flip,
  hand,
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
  spinStar,
  stamp,
  swing,
  tap,
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
const D = 0.28
const B = [18, 19] // task badge centre
const badge = {
  add: (o = {}) => spinStar(B, { as: 'plus', ...o }),
  done: (o = {}) => draw({ as: 'check', ...o }),
  edit: (o = {}) => wiggle([14.5, 21.5], [17.5, 18.5], -10, { as: 'pencil', dur: 0.66, ...o }),
  remove: (o = {}) => lap([18.5, 19.5], 90, { as: 'x', dur: 0.6, ...o }),
}
const clipHop = (c = [11, 3.5]) => hop(c, 1, { as: 'clip' })
const tally = (n) => Array.from({ length: n }, (_, i) => draw({ as: 'mark', delay: i * 0.1, dur: 0.5 }))

// ---------------------------------------------------------------------------

const specs = {
  tablets: {
    verb: 'the two tablets tumble a half turn, one after the other',
    parts: [lap([16.5, 16.5], 180, { as: 'tablet', delay: 0.12, dur: 0.7 }), lap([7.5, 7.5], 180, { as: 'tablet', dur: 0.7 })],
  },
  taco: {
    verb: 'the taco shell crunches and the fillings hop',
    parts: [{ as: 'shell', origin: [12, 14.5], transform: ['scaleY(1)', 'scaleY(0.88)', 'scaleY(1.04)', 'scaleY(1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }, null, hop([16, 14], 1, { as: 'filling', delay: 0.14 }), hop([18, 17], 1, { as: 'filling', delay: 0.2 }), hop([13, 16], 1, { as: 'filling', delay: 0.08 })],
  },
  'taco-01': {
    verb: 'the lettuce edge ruffles and the fillings blink',
    parts: [null, wave([12, 9.4], { as: 'lettuce' }), blink({ as: 'filling', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'filling', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'filling', opacity: [1, 0.1, 1, 1, 1] })],
  },
  'taco-02': {
    verb: 'the taco tilts and its two fillings hop',
    parts: [wiggle([12, 20], [12, 14.5], 5, { as: 'taco' }), wiggle([12, 20], [12, 9.4], 5, { as: 'taco' }), hop([6, 17], 1, { as: 'filling', delay: 0.14 }), hop([8, 14], 1, { as: 'filling', delay: 0.2 })],
  },

  // --- tags ---------------------------------------------------------------------------------
  tag: {
    verb: 'the tag swings from its hole and the mark rewrites',
    parts: [null, wiggle([17, 6], C, 6, { as: 'tag' }), line(0.12, { as: 'mark' })],
  },
  'tag-01': {
    verb: 'the tag pops and its mark redraws',
    parts: [null, pop(C, 1.08, { as: 'tag' }), draw({ as: 'mark', delay: 0.14 })],
  },
  'tag-02': {
    verb: 'the string flicks and the tag swings',
    parts: [wiggle([20, 4], [11.5, 12.5], 6, { as: 'tag', delay: 0.06 }), wiggle([20, 4], [8.5, 15.5], 6, { as: 'tag', delay: 0.06 }), nudge([20, 4], 0.8, -0.8, { as: 'string' })],
  },
  tags: {
    verb: 'the two tags fan apart and back',
    parts: [wiggle([14, 9], [15, 14.5], 8, { as: 'tag' }), wiggle([14, 9], [8.9, 13], -8, { as: 'tag' }), line(0.1, { as: 'string' })],
  },
  tailwindcss: {
    verb: 'the two waves roll across in turn',
    parts: [ride([14.5, 9], [[0, 0], [1, 0], [-0.4, 0], [0, 0], [0, 0]], { as: 'wave', ease: INOUT, dur: 0.8 }), ride([9.5, 15], [[0, 0], [1, 0], [-0.4, 0], [0, 0], [0, 0]], { as: 'wave', ease: INOUT, dur: 0.8, delay: 0.12 })],
  },
  'taj-mahal': {
    verb: 'the dome finial glints and the minarets light in turn',
    parts: [null, pop([12, 7], 1.06, { as: 'dome' }), null, twinkle([12, 2.5], { as: 'finial' }), null, null, blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), null, blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.15 })],
  },

  // --- tally ---------------------------------------------------------------------------------
  'tally-five': {
    verb: 'the four strokes draw one by one, then the slash crosses them',
    parts: [draw({ as: 'mark', delay: 0.1, dur: 0.5 }), draw({ as: 'mark', dur: 0.5 }), draw({ as: 'mark', delay: 0.2, dur: 0.5 }), draw({ as: 'mark', delay: 0.3, dur: 0.5 }), draw({ as: 'slash', delay: 0.42, dur: 0.5 })],
  },
  'tally-four': {
    verb: 'the four strokes draw one by one',
    parts: [draw({ as: 'mark', delay: 0.1, dur: 0.5 }), draw({ as: 'mark', dur: 0.5 }), draw({ as: 'mark', delay: 0.2, dur: 0.5 }), draw({ as: 'mark', delay: 0.3, dur: 0.5 })],
  },
  'tally-one': {
    verb: 'the single stroke draws down',
    parts: tally(1),
  },
  'tally-three': {
    verb: 'the three strokes draw one by one',
    parts: [draw({ as: 'mark', delay: 0.1, dur: 0.5 }), draw({ as: 'mark', dur: 0.5 }), draw({ as: 'mark', delay: 0.2, dur: 0.5 })],
  },
  'tally-two': {
    verb: 'the two strokes draw one after the other',
    parts: [draw({ as: 'mark', delay: 0.1, dur: 0.5 }), draw({ as: 'mark', dur: 0.5 })],
  },
  tan: {
    verb: 't, a and n hop one after another',
    parts: [hop([11.5, 12], 1.1, { as: 'letter', delay: 0.1 }), hop([19.5, 12], 1.1, { as: 'letter', delay: 0.2 }), hop([4.5, 12], 1.1, { as: 'letter' })],
  },
  tangent: {
    verb: 'the tangent line slides along the curve and its end points pop',
    parts: [line(0, { as: 'curve' }), ride([14, 10], out(0.8, 0.8), { as: 'tangent' }), pop([8, 4], 1.4, { as: 'point', delay: 0.14 }), pop([20, 16], 1.4, { as: 'point', delay: 0.22 })],
  },
  'tank-top': {
    verb: 'the top sways on its straps',
    parts: [wiggle([12, 1], [12, 5.5], 5, { as: 'top' }), wiggle([12, 1], [12, 9], 5, { as: 'top' }), wiggle([12, 1], [12, 15.9], 5, { as: 'top' }), null, null, wiggle([12, 1], [12, 6], 5, { as: 'top' })],
  },
  'tanker-truck': {
    verb: 'the tanker rolls forward and its tank sloshes',
    parts: [ride([8, 16.3], out(1, 0), { as: 'truck' }), ride([19, 13.5], out(1, 0), { as: 'truck' }), ride([5, 17.5], out(1, 0), { as: 'truck' }), ride([6.8, 8.5], [[0, 0], [0.6, 0], [1.4, 0], [1, 0], [0, 0]], { as: 'tank' }), ride([6.8, 8.5], [[0, 0], [0.6, 0], [1.4, 0], [1, 0], [0, 0]], { as: 'tank' })],
  },

  // --- tap hands ---------------------------------------------------------------------------------
  tap: {
    verb: 'the finger taps down and the ripple arc pulses',
    parts: [wave([11, 3.8], { as: 'ripple', delay: 0.14 }), tap([12.2, 13.5])],
  },
  'tap-01': {
    verb: 'the finger pokes twice and the ripple blinks',
    parts: [blink({ as: 'ripple', opacity: [1, 0.15, 1, 0.15, 1] }), hand.poke([12.2, 13.5], DIR.up)],
  },
  'tap-02': {
    verb: 'the finger nudges up into the ripple',
    parts: [hand.nudge([12.1, 13.5], DIR.up), wave([10.5, 3.8], { as: 'ripple', delay: 0.2 })],
  },
  'tap-03': {
    verb: 'the hand wags as the ripple pulses',
    parts: [hand.wag([11.9, 13.2], DIR.up), wave([10.3, 4], { as: 'ripple', delay: 0.16 })],
  },
  'tap-04': {
    verb: 'the hand winds back and thrusts up into the ripple',
    parts: [hand.thrust([12, 13.3], DIR.up), wave([9.3, 4], { as: 'ripple', delay: 0.3 })],
  },
  'tap-05': {
    verb: 'the finger presses and holds, the ripple popping',
    parts: [pop([10, 4], 1.3, { as: 'ripple', delay: 0.16 }), hand.hold([11.9, 12.9], DIR.up)],
  },
  'tap-06': {
    verb: 'the hand lifts and the ripple redraws',
    parts: [hop([11.9, 13.3], 1.2, { as: 'hand' }), retrace({ as: 'ripple', delay: 0.1, dur: 0.56 })],
  },
  'tap-07': {
    verb: 'the ripple arc flickers above the tapping hand',
    parts: [blink({ as: 'ripple', opacity: [1, 0.1, 1, 0.1, 1] }), tap([10.9, 13])],
  },
  'tap-08': {
    verb: 'the hand taps twice',
    parts: [{ as: 'hand', origin: [12, 12.1], transform: ['translateY(0px) scale(1)', 'translateY(1px) scale(0.94)', 'translateY(0px) scale(1)', 'translateY(1px) scale(0.94)', 'translateY(0px) scale(1)'], times: [0, 0.2, 0.4, 0.6, 0.85], ease: 'easeInOut', dur: 0.7 }],
  },
  'tape-measure': {
    verb: 'the tape pulls out of the case and snaps back',
    parts: [lap([7, 9.9], 180, { as: 'spool', dur: 0.7 }), null, ride([12, 14], [[0, 0], [1.4, 0], [-0.2, 0], [0, 0], [0, 0]], { as: 'tape' }), ride([12, 17.8], [[0, 0], [1.4, 0], [-0.2, 0], [0, 0], [0, 0]], { as: 'tape' })],
  },

  // --- targets ---------------------------------------------------------------------------------
  'target-02': {
    verb: 'the dart lands in the bullseye and the board shudders',
    parts: [beat(C, { delay: 0.3 }), shake(C, { as: 'board', delay: 0.3 }), ride([17.1, 6.9], [[0, 0], [1.4, -1.4], [-0.4, 0.4], [0, 0], [0, 0]], { as: 'dart', times: [0, 0.2, 0.36, 0.7, 1] })],
  },
  'target-03': {
    verb: 'the rings pulse in from the outside to the bullseye',
    parts: [wave(C, { as: 'ring' }), wave(C, { as: 'ring', delay: 0.1 }), pop(C, 1.3, { as: 'bull', delay: 0.2 })],
  },
  'target-dollar': {
    verb: 'the dollar flips in the crosshair and the ticks pull in',
    parts: [null, nudge([12, 3], 0, 0.8, { as: 'tick' }), nudge([21, 12], -0.8, 0, { as: 'tick' }), nudge([12, 21], 0, -0.8, { as: 'tick' }), nudge([3, 12], 0.8, 0, { as: 'tick' }), flip(C, 1, { as: 'dollar', delay: 0.12 })],
  },
  target: {
    verb: 'the dart drives into the bullseye',
    parts: [null, beat(C, { delay: 0.26 }), ride([17, 7], [[0, 0], [1.2, -1.2], [-0.5, 0.5], [0, 0], [0, 0]], { as: 'dart', times: [0, 0.22, 0.38, 0.7, 1] })],
  },
  tasbih: {
    verb: 'the prayer beads pass one by one around the loop',
    parts: [...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => pop([[14, 3.7], [9.6, 5.6], [7.7, 10], [9.5, 14.4], [14, 16.3], [18.4, 14.4], [20.3, 10], [18.4, 5.6]][i], 1.25, { as: 'bead', delay: i * 0.07, dur: 0.4 })), wiggle([7.8, 14.8], [5.4, 18.5], 10, { as: 'tassel', delay: 0.1 })],
  },

  // --- tasks ---------------------------------------------------------------------------------
  task: {
    verb: 'the task lines rewrite on the clipboard',
    parts: [null, line(0, { dur: 0.6 }), null],
  },
  'task-01': {
    verb: 'the clip hops and the clipboard nods',
    parts: [clipHop([12, 3.5]), null, beat([12, 12.7], { delay: D })],
  },
  'task-02': {
    verb: 'the task lines blink and the clip pops',
    parts: [null, pop([12, 3.5], 1.16, { as: 'clip', delay: 0.14 }), blink({ as: 'line', opacity: [1, 0.15, 1, 1, 1] })],
  },
  'task-add': {
    verb: 'the plus spins in at the clipboard corner',
    parts: [null, null, null, badge.add()],
  },
  'task-add-01': {
    verb: 'the clip hops, then the plus pops',
    parts: [clipHop(), null, null, pop(B, 1.3, { as: 'plus', delay: D })],
  },
  'task-add-02': {
    verb: 'the lines rewrite, then the plus spins in',
    parts: [null, null, line(0), badge.add({ delay: D })],
  },
  'task-daily': {
    verb: 'the check ticks and the dot item blinks',
    parts: [null, null, draw({ as: 'check' }), null, blink({ as: 'dot', opacity: [1, 0.1, 1, 1, 1], delay: 0.24 })],
  },
  'task-daily-01': {
    verb: 'the clip hops, then the items pop',
    parts: [clipHop([12, 3.5]), null, pop([9, 10.8], 1.3, { as: 'check', delay: D }), line(D + 0.06), pop([8.5, 17], 2, { as: 'dot', delay: D + 0.1 })],
  },
  'task-daily-02': {
    verb: 'the lines rewrite, then the check ticks',
    parts: [null, null, draw({ as: 'check', delay: D }), line(0), blink({ as: 'dot', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 })],
  },
  'task-done': {
    verb: 'the check draws at the clipboard corner',
    parts: [null, null, null, badge.done()],
  },
  'task-done-01': {
    verb: 'the clip hops, then the check pops',
    parts: [clipHop(), null, null, pop([17.5, 19], 1.3, { as: 'check', delay: D })],
  },
  'task-done-02': {
    verb: 'the lines rewrite, then the check draws',
    parts: [null, null, line(0), badge.done({ delay: D })],
  },
  'task-edit': {
    verb: 'the pencil scribbles at the clipboard corner',
    parts: [null, null, null, badge.edit()],
  },
  'task-edit-01': {
    verb: 'the clip hops, then the pencil pops',
    parts: [clipHop(), null, null, pop([17.5, 18.5], 1.2, { as: 'pencil', delay: D })],
  },
  'task-edit-02': {
    verb: 'the lines rewrite, then the pencil scribbles',
    parts: [null, null, line(0), badge.edit({ delay: D })],
  },
  'task-remove': {
    verb: 'the X twists at the clipboard corner',
    parts: [null, null, null, badge.remove()],
  },
  'task-remove-01': {
    verb: 'the clip hops, then the X pops',
    parts: [clipHop(), null, null, pop([18.5, 19.5], 1.3, { as: 'x', delay: D })],
  },
  'task-remove-02': {
    verb: 'the lines rewrite, then the X twists',
    parts: [null, null, line(0), lap([18.8, 19.5], 90, { as: 'x', delay: D, dur: 0.6 })],
  },

  // --- taxes, taxis, tea ---------------------------------------------------------------------------------
  taxes: {
    verb: 'the pillars rise, the roof nods and the percent badge pops',
    parts: [{ ...line(0.1, { as: 'pillars' }) }, line(0.16, { as: 'pillars' }), pop([18, 19], 1.2, { as: 'percent', delay: 0.24 }), beat([12, 5.5]), null, pop([12, 5.8], 2, { as: 'dot', delay: 0.1 })],
  },
  'taxi-02': {
    verb: 'the roof sign lights up and the headlights blink',
    parts: [null, null, { ...pop([12, 4.3], 1.2, { as: 'sign' }), opacity: [1, 0.4, 1, 1] }, blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.14 }), blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.14 })],
  },
  taxi: {
    verb: 'the taxi bounces and its roof sign flashes',
    parts: [null, null, null, null, null, null, null, ride([12, 7.5], [[0, 0], [0, -0.6], [0, 0.2], [0, 0], [0, 0]], { as: 'body', dur: 0.56 }), { ...ride([12, 3.3], [[0, 0], [0, -0.6], [0, 0.2], [0, 0], [0, 0]], { as: 'sign', dur: 0.56 }), opacity: [1, 0.3, 1, 0.3, 1] }, ride([12, 14.8], [[0, 0], [0, -0.6], [0, 0.2], [0, 0], [0, 0]], { as: 'body', dur: 0.56 })],
  },
  'tea-pod': {
    verb: 'the tea bag dunks into the cup and lifts',
    parts: [ride([14.5, 6], [[0, 0], [0, 1.4], [0, 0], [0, 1.4], [0, 0]], { as: 'bag', times: [0, 0.22, 0.44, 0.66, 0.9], ease: 'easeInOut', dur: 0.8 }), ride([14.5, 8.3], [[0, 0], [0, 1.4], [0, 0], [0, 1.4], [0, 0]], { as: 'bag', times: [0, 0.22, 0.44, 0.66, 0.9], ease: 'easeInOut', dur: 0.8 }), null],
  },
  tea: {
    verb: 'steam curls up and the tea bag tag swings',
    parts: [null, beat([10, 15], { delay: 0.3 }), wiggle([10, 8.5], [10, 12.9], 8, { as: 'tag' }), wave([10.5, 4], { as: 'steam' })],
  },
  teacher: {
    verb: 'the teacher points at the board and the line rewrites',
    parts: [null, line(0.1, { as: 'writing' }), wiggle([7, 13], [7, 16.5], -6, { as: 'teacher' }), hop([4, 6.5], 0.8, { as: 'head' })],
  },
  teaching: {
    verb: 'the teacher nods and the board lines rewrite',
    parts: [wiggle([7.5, 21], [7.5, 18], -4, { as: 'body' }), null, hop([7.5, 12.5], 0.8, { as: 'head' }), line(0.1, { as: 'notes' })],
  },
  'team-work': {
    verb: 'the two figures bump fists and the spark lines flash',
    parts: [blink({ as: 'spark', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.1 }), ride([7.5, 15.5], out(0.8, 0), { as: 'left' }), ride([16.8, 10.5], out(-0.8, 0), { as: 'right' })],
  },
  teamviewer: {
    verb: 'the double arrow pushes apart inside the tile',
    parts: [null, flex('X', C, C, [1, 1.2, 0.94, 1, 1], { as: 'arrows' })],
  },
  telegram: {
    verb: 'the paper plane darts up and to the right',
    parts: [ride([12.2, 11.9], out(1, -1), { as: 'plane' })],
    extras: [trail('M3 18L1.5 19.5M2 15L1 16', -1.2)],
  },
  telephone: {
    verb: 'the handset rattles on its cradle and the dial pops',
    parts: [null, pop([12, 17], 1.2, { as: 'dial', delay: 0.14 }), { ...shake([12, 6.4], { as: 'handset' }), times: [0, 0.15, 0.3, 0.45, 0.6] }],
  },

  // --- telescopes, TV ---------------------------------------------------------------------------------
  telescope: {
    verb: 'the telescope tube tilts up on its tripod',
    parts: [wiggle([12, 12], [16.2, 6.6], -8, { as: 'tube' }), wiggle([12, 12], [10.4, 10], -8, { as: 'tube' }), wiggle([12, 12], [5.7, 12.7], -8, { as: 'tube' }), null],
  },
  'telescope-01': {
    verb: 'the eyepiece extends and the lens glints',
    parts: [{ ...pop([16.2, 6.6], 1.1, { as: 'lens' }), opacity: [1, 0.5, 1, 1] }, null, ride([5.7, 12.7], out(-0.8, 0.6), { as: 'eyepiece' }), null],
  },
  'telescope-02': {
    verb: 'the tube swivels on its tripod and the stars twinkle',
    parts: [null, wiggle([14, 13], [12.4, 9.6], 8, { as: 'tube' }), wiggle([14, 13], [19, 6], 8, { as: 'tube' }), blink({ as: 'star', opacity: [1, 0.1, 1, 0.1, 1] })],
  },
  'television-table': {
    verb: 'the TV picture flickers and the drawer knobs blink',
    parts: [null, blink({ as: 'knob', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'knob', opacity: [1, 0.1, 1, 1, 1], delay: 0.26 }), { as: 'screen', origin: [12, 6.5], opacity: [1, 0.4, 1, 0.5, 1], times: [0, 0.15, 0.3, 0.45, 0.6], ease: 'linear', dur: 0.8 }, null, null],
  },
  temperature: {
    verb: 'the mercury rises up the thermometer',
    parts: [null, rise('Y', [12, 19], [12, 13.5], { as: 'mercury' })],
  },
  'tennis-ball': {
    verb: 'the ball bounces and spins',
    parts: [hop(C, 1.6, { as: 'ball' }), hop([7, 12], 1.6, { as: 'ball' }), hop([17, 12], 1.6, { as: 'ball' })],
  },
  'tennis-racket': {
    verb: 'the racket swings and the ball pops off the strings',
    parts: [wiggle([4, 21], [12.3, 11.7], -12, { as: 'racket' }), ride([15, 9], out(1.4, -1.4), { as: 'ball', delay: 0.12 })],
  },
  'tent-tree': {
    verb: 'the tree sways, the flag waves and the sun pops',
    parts: [pop([5, 5], 1.3, { as: 'sun' }), null, null, null, wiggle([18, 2], [18, 3.5], -6, { as: 'flag' }), wiggle([18, 2], [18, 7.5], -6, { as: 'flag', delay: 0.06 }), null],
  },
  tent: {
    verb: 'the tent flap opens and closes',
    parts: [{ as: 'flap', origin: [12, 17.5], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(0.4)', 'scaleX(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 }, null, null, null],
  },
  terminal: {
    verb: 'the prompt nudges forward and the cursor blinks',
    parts: [nudge([7, 11], 1, 0, { as: 'prompt' }), blink({ as: 'cursor', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8] })],
  },
  terrace: {
    verb: 'the umbrella canopy sways over the table',
    parts: [null, null, wiggle([12, 22], [12, 16], 3, { as: 'pole' }), wiggle([12, 22], [12, 6], 3, { as: 'canopy' }), null, line(0.2, { as: 'table' })],
  },

  // --- test tubes ---------------------------------------------------------------------------------
  'test-tube-01': {
    verb: 'the liquid sloshes and the bubbles rise in the flask',
    parts: [null, wiggle([11.7, 14.2], [11.7, 14.2], 6, { as: 'liquid' }), null, ride([15, 19], out(0, -1.6), { as: 'bubble' }), ride([10, 17], out(0, -1.6), { as: 'bubble', delay: 0.12 })],
  },
  'test-tube-02': {
    verb: 'the bubbles rise up the tube and the liquid sloshes',
    parts: [null, wiggle(C, [12, 9.1], 6, { as: 'liquid' }), null, ride([13, 14], out(0, -2), { as: 'bubble' }), ride([11, 18], out(0, -2), { as: 'bubble', delay: 0.14 })],
  },
  'test-tube-03': {
    verb: 'the flask bubbles and the liquid line sloshes',
    parts: [null, wiggle([12, 11.6], [12, 11.6], 5, { as: 'liquid' }), null, ride([14, 14], out(0, -1.6), { as: 'bubble' }), ride([10, 18], out(0, -1.6), { as: 'bubble', delay: 0.12 })],
  },
  'test-tube-diagonal': {
    verb: 'the tube tips and the liquid level sloshes',
    parts: [null, wiggle([18, 6], [11.5, 12.5], 6, { as: 'tube' }), wiggle([18, 6], [11.5, 12.5], 10, { as: 'liquid' })],
  },
  'test-tube': {
    verb: 'the two tubes clink together',
    parts: [wiggle([9, 6], [9, 14], -6, { as: 'tube' }), null, wiggle([9, 6], [9, 13.5], -6, { as: 'tube' }), wiggle([11.5, 7], [15.5, 8], 6, { as: 'tube' })],
  },
  'test-tubes': {
    verb: 'the two tubes bubble in turn',
    parts: [hop([6.5, 12], 0.8, { as: 'tube' }), wave([6.5, 12], { as: 'level' }), null, null, hop([17.5, 12], 0.8, { as: 'tube', delay: 0.14 }), wave([17.5, 12], { as: 'level', delay: 0.14 })],
  },
}

export default settleSpecs(specs)
