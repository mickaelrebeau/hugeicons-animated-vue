/**
 * Page 21 — computer-cloud → cos.
 *
 * Gallery page (80 public icons). Handcrafted original skipped: copy-01.
 *
 * Computers keep the screen and stand still and let the screen content act.
 * Copy icons keep both sheets and let the mark act. Corner arrows travel
 * toward their head, shaft and head together. People (contact, conference,
 * conversation) nod with a head hop.
 *
 * Identical-geometry pairs get different jobs: computer-desk-01 /
 * computer-desk, computer-programming-01 / computer-programming,
 * computer-terminal-01 / computer-terminal, cone-01 / cone,
 * configuration-01 / configuration, coordinate-01 / coordinate.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  around,
  beat,
  blink,
  burst,
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
  rise,
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  trail,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const S = [12, 10] // screen center on the monitor icons
const TURN = [0, 72, 252, 370.8, 360]
const HALF = [0, 36, 126, 185.4, 180]

const screen = (o = {}) => beat(S, { as: 'screen', delay: 0.3, ...o })
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const scribble = (origin, o = {}) => ride(origin, [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen', ...o })

/** A card flipping around one shared axis (every part uses the same pivot). */
const cardFlip = (pivot, center, o = {}) =>
  scaleFrom('X', pivot, center, [1, 0.06, 1], { as: 'card', times: [0, 0.5, 1], ease: [INOUT, INOUT], dur: 0.56, ...o })

/** A corner arrow travelling toward its head, shaft and head together. */
const corner = (shaft, head, dx, dy) => [nudge(shaft, dx, dy, { as: 'arrow' }), nudge(head, dx, dy, { as: 'arrow' })]

// ---------------------------------------------------------------------------

const specs = {
  // --- computers ---------------------------------------------------------------------------
  'computer-cloud': {
    verb: 'the cloud drifts across the screen and settles',
    parts: [null, ride(S, out(1.4, 0), { as: 'cloud', dur: 0.8 }), null],
  },
  'computer-desk-01': {
    verb: 'the monitor bobs up off the desk and lands',
    parts: [null, null, null, hop([12, 5.5], 1.2, { as: 'monitor' }), hop([12, 10.5], 1.2, { as: 'monitor' })],
  },
  'computer-desk': {
    verb: 'the drawer slides out, holds, and shuts',
    parts: [null, hold([16, 14.5], 1.4, 0, { as: 'drawer', dur: 0.66 }), null, null, null],
  },
  'computer-desk-02': {
    verb: 'the mug hops on the desk while the monitor answers',
    parts: [null, hop([18.5, 9.5], 1.2, { as: 'mug' }), null, null, beat([8, 5.5], { as: 'monitor', delay: 0.28 }), null],
  },
  'computer-desk-03': {
    verb: 'the plant on the desk sways from its pot',
    parts: [null, around([18.5, 12], [18.5, 8], [0, -8, 5, -2, 0], { as: 'plant' }), null, null, beat([8, 5.5], { as: 'monitor', delay: 0.3 }), null],
  },
  'computer-dollar': {
    verb: 'the dollar sign rewrites itself on the screen',
    parts: [null, null, null, retrace({ as: 'sign', dur: 0.74 }), screen({ delay: 0.4 })],
  },
  'computer-ethernet': {
    verb: 'the ethernet plug lifts out and clicks back in',
    parts: [null, null, ride([19.5, 7.8], out(0, -1.4), { as: 'plug' }), null, ride([19.5, 4.3], out(0, -1.4), { as: 'plug' })],
  },
  'computer-phone-sync': {
    verb: 'the phone taps against the screen twice to sync',
    parts: [null, ride([19, 16], [[0, 0], [-1, 0], [0.2, 0], [-0.7, 0], [0, 0]], { as: 'phone', dur: 0.66 }), null],
  },
  'computer-programming-01': {
    verb: 'the slash writes and the brackets part around it',
    parts: [null, null, nudge([17, 10], 1, 0, { as: 'bracket', delay: 0.1 }), nudge([7, 10], -1, 0, { as: 'bracket', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'computer-programming': {
    verb: 'the slash flips end over end between the brackets',
    parts: [null, null, null, null, lap(S, 180, { as: 'slash', dur: 0.7 })],
  },
  'computer-programming-02': {
    verb: 'the pen scribbles in the corner and the line writes itself',
    parts: [null, null, draw({ as: 'line', delay: 0.1 }), scribble([18.5, 6.5])],
  },
  'computer-protection': {
    verb: 'the shield stamps onto the corner of the screen',
    parts: [null, null, stamp([18.5, 6], { as: 'shield' })],
  },
  'computer-remove': {
    verb: 'the X spins a quarter turn on the screen',
    parts: [null, screen(), lap(S, 90, { as: 'x', dur: 0.62 })],
  },
  'computer-screen-share': {
    verb: 'the share arrow pushes out to the right',
    parts: [null, null, nudge([12.5, 10], 1.4, 0, { as: 'arrow' })],
  },
  'computer-settings': {
    verb: 'the cog turns a full revolution on the screen',
    parts: [null, null, lap(S, 360, { as: 'cog', dur: 1 })],
  },
  'computer-terminal-01': {
    verb: 'the prompt nudges forward and the cursor blinks',
    parts: [nudge([8.5, 9.5], 1, 0, { as: 'prompt' }), blink({ as: 'cursor', dur: 0.8 }), null],
  },
  'computer-terminal': {
    verb: 'the prompt pops and the command types itself out',
    parts: [pop([8.5, 9.5], 1.3, { as: 'prompt' }), draw({ as: 'command', delay: 0.14 }), null],
  },
  'computer-terminal-02': {
    verb: 'the title bar redraws, the prompt nudges and the cursor blinks',
    parts: [null, draw({ as: 'bar' }), blink({ as: 'cursor', dur: 0.8, delay: 0.2 }), nudge([8, 14], 1, 0, { as: 'prompt', delay: 0.1 })],
  },
  'computer-user': {
    verb: 'the user on the screen hops up to say hello',
    parts: [null, screen(), hop(S, 1.2, { as: 'user' })],
  },
  'computer-video-call': {
    verb: 'the caller on the screen hops up and the screen answers',
    parts: [screen({ delay: 0.28 }), null, null, hop(S, 1, { as: 'caller' })],
  },
  'computer-video': {
    verb: 'the play button pops on the screen',
    parts: [null, screen(), pop([12.5, 10], 1.3, { as: 'play' })],
  },
  computer: {
    verb: 'the screen wakes up and a glare runs across its corner',
    parts: [null, screen({ delay: 0 })],
    extras: [glint(18.5, 6, 1, { delay: 0.16 })],
  },

  // --- con* ---------------------------------------------------------------------------------
  'concierge-bell': {
    verb: 'the bell button is pressed and the bell rings out',
    parts: [null, beat([12, 10.5], { as: 'dome', delay: 0.16 }), ride([12, 5], out(0, 1), { as: 'button', dur: 0.4 }), ride([12, 3.5], out(0, 1), { as: 'button', dur: 0.4 })],
    extras: [burst(rays(12, 3.5, 2.2, 3.4, 6, -180), { delay: 0.04 })],
  },
  'cone-01': {
    verb: 'the cone grows up out of its base',
    parts: [null, rise('Y', [12, 16.5], [12, 9.3], { as: 'cone' })],
  },
  cone: {
    verb: 'the cone spins on its base and the base answers',
    parts: [beat([12, 18], { as: 'base', delay: 0.3 }), flip([12, 9.3], 1, { as: 'cone' })],
  },
  'cone-02': {
    verb: 'the sprinkles pop on the scoop and the scoop answers',
    parts: [null, null, beat([12, 9], { as: 'scoop', delay: 0.26 }), pop([12, 9], 2.4, { as: 'sprinkle' }), pop(C, 2.4, { as: 'sprinkle', delay: 0.12 })],
  },
  conference: {
    verb: 'the speaker nods at the podium while the side screens flicker',
    parts: [null, blink({ as: 'screen', dur: 0.6 }), blink({ as: 'screen', dur: 0.6, delay: 0.1 }), hop([12, 8.5], 1, { as: 'head' }), null],
  },
  'configuration-01': {
    verb: 'the wrench turns on its handle to tighten',
    parts: [null, around([2.5, 20.5], [8.7, 15.5], [0, -14, 6, -2, 0], { as: 'wrench' })],
  },
  configuration: {
    verb: 'the gear turns a full revolution behind the wrench',
    parts: [lap(C, 360, { as: 'gear', dur: 1 }), null],
  },
  'configuration-02': {
    verb: 'the wrench turns and the frame answers',
    parts: [beat(C, { as: 'frame', delay: 0.3 }), around([2, 20], [8.5, 14.9], [0, -14, 6, -2, 0], { as: 'wrench' })],
  },
  confused: {
    verb: 'the eyes dart side to side and the crooked mouth wobbles',
    parts: [null, around([12.5, 16], [12.5, 16], [0, -14, 10, -3, 0], { as: 'mouth' }), ride([12, 9.8], [[0, 0], [-0.8, 0], [0.8, 0], [0, 0], [0, 0]], { as: 'eyes' })],
  },
  'congruent-to-circle': {
    verb: 'the congruence sign stretches wide and settles inside the circle',
    parts: [flex('X', [12, 11.8], [12, 11.8], [1, 0.8, 1.08, 0.98, 1], { as: 'sign' }), null],
  },
  'congruent-to-square': {
    verb: 'the congruence sign shuttles side to side inside the square',
    parts: [ride([12, 11.8], [[0, 0], [-0.8, 0], [0.8, 0], [-0.2, 0], [0, 0]], { as: 'sign' }), null],
  },
  'congruent-to': {
    verb: 'the tilde ripples and the two bars redraw below it',
    parts: [draw({ as: 'bar', delay: 0.12 }), draw({ as: 'bar', delay: 0.22 }), ride([12, 7], [[0, 0], [-0.8, 0], [0.8, 0], [-0.2, 0], [0, 0]], { as: 'tilde' })],
  },
  connect: {
    verb: 'the two plugs push together, hold, and part',
    parts: [hold([7.6, 16.5], 0.9, -0.9, { as: 'plug', dur: 0.66 }), hold([16.3, 7.7], -0.9, 0.9, { as: 'plug', dur: 0.66 })],
  },
  console: {
    verb: 'the knob pops, the dial redraws and the ticks blink',
    parts: [null, pop([11, 11], 1.3, { as: 'knob' }), retrace({ as: 'dial', delay: 0.1 }), blink({ as: 'tick', dur: 0.6 }), blink({ as: 'tick', dur: 0.6, delay: 0.12 })],
  },
  constellation: {
    verb: 'the stars light up one by one and the lines join them',
    parts: [
      pop(C, 1.3, { as: 'star', delay: 0.12 }),
      pop([20, 16], 1.3, { as: 'star', delay: 0.24 }),
      pop([11, 20], 1.3, { as: 'star', delay: 0.36 }),
      pop([15, 4], 1.3, { as: 'star' }),
      pop([4, 8], 1.3, { as: 'star', delay: 0.06 }),
      retrace({ as: 'lines', delay: 0.1 }),
    ],
  },
  construction: {
    verb: 'the warning stripes flash in turn across the barrier',
    parts: [null, blink({ as: 'stripe', dur: 0.6, delay: 0.2 }), blink({ as: 'stripe', dur: 0.6, delay: 0.1 }), blink({ as: 'stripe', dur: 0.6 }), null, null],
  },

  // --- contacts -----------------------------------------------------------------------------
  'contact-01': {
    verb: 'the contact card flips over on its rings',
    parts: [cardFlip([12.8, 12], [12.8, 12]), cardFlip([12.8, 12], [13, 14.9]), cardFlip([12.8, 12], [13, 9]), cardFlip([12.8, 12], [3.8, 12])],
  },
  'contact-02': {
    verb: 'the contact pops on the card and the card answers',
    parts: [beat([12.8, 12], { as: 'card', delay: 0.26 }), pop([13.5, 12], 1.2, { as: 'contact' }), null],
  },
  'contact-book': {
    verb: 'the contact in the book nods',
    parts: [null, null, hop([13.3, 8.5], 1, { as: 'head' }), beat([13.3, 15.5], { as: 'body', delay: 0.2 })],
  },
  'contact-round': {
    verb: 'the contact nods and the shoulders redraw',
    parts: [null, hop([12, 8.8], 1, { as: 'head' }), retrace({ as: 'shoulders', delay: 0.1 })],
  },
  contact: {
    verb: 'the binder rings pop and the contact nods',
    parts: [null, pop([8, 3], 1.4, { as: 'ring' }), pop([16, 3], 1.4, { as: 'ring', delay: 0.1 }), hop([12, 9.5], 1, { as: 'head', delay: 0.16 }), null],
  },

  // --- containers ---------------------------------------------------------------------------
  'container-truck-01': {
    verb: 'the truck pulls forward with speed lines and rolls back',
    parts: [
      ride([17, 17.5], out(1.2, 0), { as: 'truck' }),
      ride([7, 17.5], out(1.2, 0), { as: 'truck' }),
      ride([12, 10.8], out(1.2, 0), { as: 'truck' }),
      ride([8.5, 9], out(1.2, 0), { as: 'truck' }),
    ],
    extras: [trail('M0.8 8H3M0.8 12H2.4', -1.6)],
  },
  'container-truck-02': {
    verb: 'the container bounces on its suspension',
    parts: [null, null, hop([12, 10.8], 0.8, { as: 'body' }), hop([8.5, 9], 0.8, { as: 'body' })],
  },
  'container-truck': {
    verb: 'the truck rumbles over a bump',
    parts: [
      ride([10, 10], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.4], [0, 0]], { as: 'body' }),
      null,
      null,
      ride([12, 11], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.4], [0, 0]], { as: 'body' }),
      ride([18.3, 8.5], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.4], [0, 0]], { as: 'body' }),
      ride([6, 10], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.4], [0, 0]], { as: 'body' }),
    ],
  },
  container: {
    verb: 'the corrugated ribs draw in one after another',
    parts: [null, draw({ as: 'rib', delay: 0.3 }), draw({ as: 'rib', delay: 0.2 }), draw({ as: 'rib', delay: 0.1 }), draw({ as: 'rib' })],
  },
  'content-writing': {
    verb: 'the pen scribbles and the lines write in turn',
    parts: [scribble([17.1, 17.9]), null, draw({ as: 'line' }), draw({ as: 'line', delay: 0.12 }), draw({ as: 'line', delay: 0.24 })],
  },
  contracts: {
    verb: 'the pen signs and the signature writes itself',
    parts: [null, scribble([17, 13]), draw({ as: 'signature', delay: 0.1 }), null, null],
  },
  contrast: {
    verb: 'the dark half turns a full revolution inside the circle',
    parts: [null, around(C, [15.5, 12], TURN, { as: 'half', dur: 0.9 })],
  },
  conversation: {
    verb: 'the two people nod in turn under their shared bubble',
    parts: [beat([12, 6.5], { as: 'bubble', delay: 0.3 }), null, null, hop([6, 13.5], 1, { as: 'head' }), hop([18, 13.5], 1, { as: 'head', delay: 0.16 })],
  },
  'cook-book': {
    verb: 'the chef hat on the cover hops',
    parts: [null, null, null, hop([12.5, 9.5], 1.2, { as: 'hat' })],
  },
  cookie: {
    verb: 'the chocolate chips pop one after another',
    parts: [
      beat([12.1, 11.7], { as: 'cookie', delay: 0.36 }),
      pop([12, 18], 2, { as: 'chip', delay: 0.3 }),
      pop([9.5, 6.5], 1.6, { as: 'chip' }),
      pop([16.5, 14.5], 1.6, { as: 'chip', delay: 0.18 }),
      pop([7.5, 15.5], 1.6, { as: 'chip', delay: 0.24 }),
      pop([11, 12], 2, { as: 'chip', delay: 0.12 }),
      pop([6, 10], 2, { as: 'chip', delay: 0.06 }),
    ],
  },
  'cooking-pot': {
    verb: 'the lid lifts off the boiling pot and steam escapes',
    parts: [null, null, null, ride([12.2, 5.8], out(0, -1.4), { as: 'lid' }), ride([12, 4.3], out(0, -1.4), { as: 'lid' })],
    extras: [puff(12, 9.6, 0.6, 0.4, -1.6, { as: 'steam', delay: 0.06 })],
  },

  // --- coordinates / copilot ------------------------------------------------------------------
  'coordinate-01': {
    verb: 'the up axis pushes up, then the right axis pushes right',
    parts: [nudge([7, 12], 0, -1.4, { as: 'axis' }), nudge([12, 17], 1.4, 0, { as: 'axis', delay: 0.14 })],
  },
  coordinate: {
    verb: 'both axes stretch out at once and spring back',
    parts: [flex('Y', [7, 22], [7, 12], [1, 1.12, 0.96, 1.02, 1], { as: 'axis' }), flex('X', [2, 17], [12, 17], [1, 1.1, 0.96, 1.02, 1], { as: 'axis' })],
  },
  'coordinate-02': {
    verb: 'the axes redraw and the X, Y, Z labels pop in turn',
    parts: [pop([12, 3.5], 1.3, { as: 'label', delay: 0.2 }), pop([3.5, 15.5], 1.3, { as: 'label', delay: 0.3 }), pop([20.5, 15.5], 1.3, { as: 'label', delay: 0.1 }), retrace({ as: 'axes' })],
  },
  copilot: {
    verb: 'the two lobes orbit each other a half turn and trade places',
    parts: [around(C, [10.4, 9.8], HALF, { as: 'lobe', dur: 0.8 }), around(C, [13.6, 14.3], HALF, { as: 'lobe', dur: 0.8 })],
  },

  // --- copy ------------------------------------------------------------------------------------
  'copy-02': {
    verb: 'the dashed copy outlines itself on the front',
    parts: [beat([9.5, 9.5], { as: 'original', delay: 0.3 }), retrace({ as: 'copy', dur: 0.76 })],
  },
  'copy-check': {
    verb: 'the check writes on the front sheet',
    parts: [draw({ as: 'check' }), null, null],
  },
  'copy-link': {
    verb: 'the link rocks on the sheet as it connects',
    parts: [around([15.5, 8.5], [15.5, 8.5], [0, -20, 10, -4, 0], { as: 'link' }), beat(C, { as: 'sheet', delay: 0.3 })],
  },
  'copy-minus': {
    verb: 'the minus squeezes short and springs back',
    parts: [flex('X', [14, 10], [14, 10], [1, 0.25, 1.12, 0.98, 1], { as: 'minus' }), null, null],
  },
  'copy-plus': {
    verb: 'the plus turns a quarter on the front sheet',
    parts: [lap([14, 10], 90, { as: 'plus', dur: 0.62 }), null, null],
  },
  'copy-slash': {
    verb: 'the slash cuts across the front sheet',
    parts: [draw({ as: 'slash' }), null, null],
  },
  'copy-x': {
    verb: 'the X rattles on the front sheet',
    parts: [null, shake([14, 10], { as: 'x' }), null],
  },
  copy: {
    verb: 'the front sheet slides off the back one and returns',
    parts: [ride([14, 10], out(1.2, -1.2), { as: 'front' }), null],
  },
  copyleft: {
    verb: 'the reversed C turns a full revolution counter-clockwise',
    parts: [null, lap([12.5, 12], -360, { as: 'c', dur: 0.9 })],
  },
  copyright: {
    verb: 'the C turns a full revolution clockwise',
    parts: [null, lap(C, 360, { as: 'c', dur: 0.9 })],
  },
  corn: {
    verb: 'the husk leaf flaps open and back on the cob',
    parts: [beat([10.2, 14.3], { as: 'cob', delay: 0.3 }), around([17.6, 13], [16.3, 7], [0, -10, 6, -2, 0], { as: 'husk' })],
  },

  // --- corner arrows ---------------------------------------------------------------------------
  'corner-down-left': { verb: 'the corner arrow pushes toward its head on the left', parts: corner([12.5, 9.5], [6.5, 15], -1.8, 0) },
  'corner-down-right': { verb: 'the corner arrow pushes toward its head on the right', parts: corner([11.5, 9.5], [17.5, 15], 1.8, 0) },
  'corner-left-down': { verb: 'the corner arrow pushes down toward its head', parts: corner([14.5, 11.5], [9, 17.5], 0, 1.8) },
  'corner-left-up': { verb: 'the corner arrow pushes up toward its head', parts: corner([14.5, 12.5], [9, 6.5], 0, -1.8) },
  'corner-right-down': { verb: 'the corner arrow pushes down toward its head', parts: corner([9.5, 11.5], [15, 17.5], 0, 1.8) },
  'corner-right-up': { verb: 'the corner arrow pushes up toward its head', parts: corner([9.5, 12.5], [15, 6.5], 0, -1.8) },
  'corner-up-left': { verb: 'the corner arrow pushes toward its head on the left', parts: corner([11.5, 14.5], [5.5, 9], -1.8, 0) },
  'corner-up-right': { verb: 'the corner arrow pushes toward its head on the right', parts: corner([10.5, 14.5], [16.5, 9], 1.8, 0) },

  corporate: {
    verb: 'the office windows light up across both buildings',
    parts: [null, beat([17, 15], { as: 'annex', delay: 0.3 }), blink({ as: 'windows', dur: 0.6, delay: 0.14 }), blink({ as: 'windows', dur: 0.6 })],
  },
  cos: {
    verb: 'the letters c, o, s hop in a wave',
    parts: [hop(C, 1.2, { delay: 0.1 }), hop([19.5, 12], 1.2, { delay: 0.2 }), hop([4.5, 12], 1.2)],
  },
}

export default settleSpecs(specs)
