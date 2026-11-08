/**
 * Page 49 — not-equal-sign → package-add.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * notification-03, notification-off-01.
 *
 * Bells ring from their crown and the clapper answers; badges on the bell
 * act on their own. Notes keep the pad and rewrite their lines. Orientation
 * icons rotate the frame they describe. Packages open their flaps.
 *
 * Identical-geometry pairs get different jobs: notification-block / -01,
 * notification-snooze / -01, notion / notion-01, online-learning / -01,
 * orbit / orbit-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  dim,
  draw,
  fall,
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** A bell rings from its crown. */
const ring = (c = [12, 10.5], pivot = [12, 3], o = {}) => around(pivot, c, [0, 14, -10, 5, 0], { as: 'bell', times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut', dur: 0.8, ...o })
/** The clapper swings opposite the bell. */
const clapper = (c, o = {}) => ride(c, [[0, 0], [-1, 0], [0.8, 0], [-0.4, 0], [0, 0]], { as: 'clapper', times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut', dur: 0.8, delay: 0.04, ...o })
const block = (c, o = {}) => shake(c, { as: 'block', ...o })
/** Snooze: the Z floats up and fades back. */
const zed = (c, o = {}) => ({ as: 'z', origin: c, transform: ['translate(0px, 0px) scale(1)', 'translate(0.8px, -1.6px) scale(0.8)', 'translate(0px, 0px) scale(1)'], opacity: [1, 0.2, 1], times: [0, 0.5, 1], ease: 'easeInOut', dur: 0.9, ...o })
const lines = (o = {}) => retrace({ as: 'lines', ...o })

// ---------------------------------------------------------------------------

const specs = {
  'not-equal-sign': {
    verb: 'the slash strikes through the equals',
    parts: [nudge([12, 8], 0, -0.6, { as: 'bar', delay: 0.14 }), nudge([12, 16], 0, 0.6, { as: 'bar', delay: 0.14 }), draw({ as: 'slash' })],
  },

  // --- notes -----------------------------------------------------------------------------------
  'note-01': {
    verb: 'the binder rings lift and the lines rewrite',
    parts: [ride([12, 3.5], out(0, -0.8), { as: 'rings' }), null, lines({ delay: 0.1 })],
  },
  'note-02': {
    verb: 'the folded corner flaps and the lines rewrite',
    parts: [null, lines({ delay: 0.1 }), around([20, 22], [17, 19], [0, -14, 6, -2, 0], { as: 'corner' }), null],
  },
  'note-03': {
    verb: 'the check ticks and the list writes on',
    parts: [null, null, draw({ as: 'check' }), lines({ delay: 0.14 }), pop([8.5, 17], 2, { as: 'bullet', delay: 0.3 })],
  },
  'note-04': {
    verb: 'the binder tabs flip and the lines rewrite',
    parts: [null, flip([5, 9], 1, { as: 'tab' }), flip([5, 16], 1, { as: 'tab', delay: 0.1 }), lines({ delay: 0.16 })],
  },
  'note-05': {
    verb: 'the top page tears off and comes back',
    parts: [null, null, ride([12, 11.3], out(0.8, -1), { as: 'page' }), ride(C, out(0.8, -1), { as: 'page' })],
  },
  'note-add': {
    verb: 'the plus spins on the pad corner',
    parts: [null, null, null, lap([18, 19], 90, { as: 'plus', dur: 0.6 })],
  },
  'note-done': {
    verb: 'the check ticks on the pad corner',
    parts: [null, null, lines(), draw({ as: 'check', delay: 0.2 })],
  },
  'note-edit': {
    verb: 'the pen scribbles on the pad corner',
    parts: [null, null, lines({ delay: 0.14 }), ride([17.5, 18.5], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' })],
  },
  'note-remove': {
    verb: 'the X rattles on the pad corner',
    parts: [null, null, null, shake([18.5, 19.5], { as: 'x' })],
  },
  note: {
    verb: 'the sticky note peels up at its corner',
    parts: [around([7, 18], [14.5, 10.5], [0, -6, 3, -1, 0], { as: 'note' }), around([12, 22], [6.8, 14.6], [0, 8, -4, 1, 0], { as: 'curl', delay: 0.06 })],
  },
  'notebook-01': {
    verb: 'the label slides on the cover and the rings rattle',
    parts: [null, ride([13.5, 8], out(1, 0), { as: 'label' }), shake([3.5, 12], { as: 'rings', delay: 0.1 })],
  },
  'notebook-02': {
    verb: 'the cover opens along the spine',
    parts: [flex('X', [9, 12], [13, 12], [1, 0.7, 1.04, 1, 1], { as: 'cover' }), null, flex('X', [9, 9], [15.5, 9], [1, 0.7, 1.04, 1, 1], { as: 'cover' }), null],
  },
  notebook: {
    verb: 'the lines write on the cover',
    parts: [lines(), null, ride([4.5, 12], out(-0.6, 0), { as: 'rings', delay: 0.1 })],
  },
  'notepad-text-dashed': {
    verb: 'the dashed outline marches around the pad',
    parts: [{ as: 'outline', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1.1 }, null, lines({ delay: 0.1 })],
  },

  // --- notifications ----------------------------------------------------------------------------
  'notification-01': {
    verb: 'the bell rings and the clapper swings',
    parts: [clapper([12, 19.8]), ring([12, 10.3], [12, 2.5])],
  },
  'notification-02': {
    verb: 'the bell rings over its rim',
    parts: [ring([12, 10.3], [12, 2.5]), null, clapper([12, 20.8])],
  },
  'notification-block-01': {
    verb: 'the block sign stamps on the bell',
    parts: [null, null, stamp([17.5, 5.5], { as: 'block' })],
  },
  'notification-block-02': {
    verb: 'the block sign rattles and the bell flinches',
    parts: [shake([11.5, 10.8], { as: 'bell', delay: 0.16 }), null, null, block([17.5, 5.5])],
  },
  'notification-block-03': {
    verb: 'the block sign spins on the bell corner',
    parts: [null, null, null, lap([17, 5.5], 90, { as: 'block', dur: 0.6 })],
  },
  'notification-block': {
    verb: 'the block sign rattles on the bell corner',
    parts: [null, null, block([17.5, 5.5])],
  },
  'notification-bubble': {
    verb: 'the dot pops on the bubble corner',
    parts: [null, pop([18, 6], 1.3, { as: 'dot' })],
  },
  'notification-circle': {
    verb: 'the dot pops and the lines rewrite',
    parts: [pop([18.5, 5.5], 1.3, { as: 'dot' }), null, draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.18 })],
  },
  'notification-off-02': {
    verb: 'the slash cuts across and the bell sags',
    parts: [null, null, draw({ as: 'slash' }), ride([12, 10.3], out(0, 0.8), { as: 'bell', delay: 0.1 })],
  },
  'notification-off-03': {
    verb: 'the slash cuts across and the bell fades',
    parts: [dim({ as: 'bell', delay: 0.1 }), dim({ as: 'clapper', delay: 0.1 }), draw({ as: 'slash' }), dim({ as: 'bell', delay: 0.1 })],
  },
  'notification-off': {
    verb: 'the slash cuts across and the bell shivers',
    parts: [shake([12, 19.8], { as: 'clapper', delay: 0.16 }), draw({ as: 'slash' }), shake([12, 10.3], { as: 'bell', delay: 0.16 })],
  },
  'notification-snooze-01': {
    verb: 'the Z pops beside the bell',
    parts: [null, null, pop([17.5, 5], 1.3, { as: 'z' })],
  },
  'notification-snooze-02': {
    verb: 'the bell dozes and the Z floats up',
    parts: [around([12, 3], [12, 10.8], [0, 4, 4, 0, 0], { as: 'bell', dur: 0.9 }), null, null, zed([17.5, 5])],
  },
  'notification-snooze-03': {
    verb: 'the Z rewrites on the corner',
    parts: [null, null, null, sweep({ as: 'z' })],
  },
  'notification-snooze': {
    verb: 'the Z floats up beside the bell',
    parts: [null, null, zed([17.5, 5])],
  },
  'notification-square': {
    verb: 'the dot pops on the square corner and the lines rewrite',
    parts: [null, pop([18, 6], 1.3, { as: 'dot' }), draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.18 })],
  },
  notification: {
    verb: 'the bell rings from its crown',
    parts: [clapper([12, 19.8], { delay: 0.08 }), ring([12, 10.3], [12, 2.5], { dur: 0.9 })],
  },

  // --- brands -----------------------------------------------------------------------------------
  'notion-01': {
    verb: 'the N rewrites inside the cube',
    parts: [null, retrace({ as: 'n' })],
  },
  notion: {
    verb: 'the N flips inside the cube',
    parts: [null, flip(C, 1, { as: 'n' })],
  },
  'notion-02': {
    verb: 'the cube outline redraws and the N hops',
    parts: [retrace({ as: 'cube' }), hop([14, 13.4], 0.8, { as: 'n', delay: 0.14 })],
  },
  npm: {
    verb: 'the inner block squeezes and springs',
    parts: [null, swell(C, C, [1, 0.8, 1.08, 1, 1], { as: 'block' })],
  },
  'nuclear-power': {
    verb: 'the trefoil spins around its core',
    parts: [pop([12, 12.5], 1.25, { as: 'core' }), lap([12, 12.5], 120, { as: 'trefoil', dur: 0.9 })],
  },
  'nut-off': {
    verb: 'the slash cuts across and the nut fades',
    parts: [dim({ as: 'nut', delay: 0.1 }), dim({ as: 'nut', delay: 0.1 }), draw({ as: 'slash' })],
  },
  nut: {
    verb: 'the nut cracks open a little and closes',
    parts: [ride([9.2, 13.8], out(-0.6, 0.6), { as: 'shell' }), ride([15.2, 8.6], out(0.6, -0.6), { as: 'shell' })],
  },
  obtuse: {
    verb: 'the angle widens and the arc sweeps',
    parts: [around([2, 17], [12, 11.4], [0, -6, 2, 0, 0], { as: 'arm' }), retrace({ as: 'arc', delay: 0.1 })],
  },
  'octagon-x': {
    verb: 'the X spins inside the octagon',
    parts: [lap(C, 90, { as: 'x', dur: 0.6 }), null],
  },
  octagon: {
    verb: 'the octagon turns an eighth',
    parts: [lap(C, 45, { as: 'octagon', dur: 0.7 })],
  },
  octopus: {
    verb: 'the tentacles wiggle and the eyes blink',
    parts: [hop([12, 7.5], 0.6, { as: 'head', delay: 0.1 }), { as: 'tentacles', origin: [12, 14], transform: ['skewX(0deg)', 'skewX(-10deg)', 'skewX(8deg)', 'skewX(-4deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, { as: 'tentacles', origin: [12, 14], transform: ['skewX(0deg)', 'skewX(8deg)', 'skewX(-8deg)', 'skewX(3deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, flex('Y', [10, 10], [10, 10], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5 }), flex('Y', [14, 10], [14, 10], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5 })],
  },
  'office-365': {
    verb: 'the logo panel folds and unfolds',
    parts: [flex('X', [20, 12], C, [1, 0.8, 1.04, 1, 1], { as: 'logo' })],
  },
  'office-chair': {
    verb: 'the chair spins on its base',
    parts: [null, flex('X', [12, 14.5], [12, 14.5], [1, 0.3, 1, 1, 1], { as: 'seat', times: [0, 0.3, 0.6, 0.85, 1] }), flex('X', [12, 12.5], [19, 12.5], [1, 0.3, 1, 1, 1], { as: 'arm', times: [0, 0.3, 0.6, 0.85, 1] }), flex('X', [12, 12.5], [5, 12.5], [1, 0.3, 1, 1, 1], { as: 'arm', times: [0, 0.3, 0.6, 0.85, 1] }), null, flex('X', [12, 6], [12, 6], [1, 0.3, 1, 1, 1], { as: 'back', times: [0, 0.3, 0.6, 0.85, 1] }), null],
  },
  office: {
    verb: 'the windows light up floor by floor',
    parts: [null, blink({ as: 'window' }), blink({ as: 'window', delay: 0.14 }), null],
  },
  'oil-barrel': {
    verb: 'the barrel wobbles and its drop swells',
    parts: [around([12, 22], [12, 4], [0, -4, 3, -1, 0], { as: 'barrel' }), swell([12, 12.5], [12, 10.5], [1, 1.25, 0.94, 1.04, 1], { as: 'drop' }), around([12, 22], [12, 10], [0, -4, 3, -1, 0], { as: 'barrel' }), around([12, 22], [12, 17.8], [0, -4, 3, -1, 0], { as: 'barrel' })],
  },
  'ok-finger': {
    verb: 'the OK hand gives a little shake',
    parts: [around([12, 22], C, [0, -8, 6, -2, 0], { as: 'hand' })],
  },
  'olympic-torch': {
    verb: 'the flame flickers on the raised torch',
    parts: [{ as: 'flame', origin: [17.2, 8.4], transform: ['scale(1) skewX(0deg)', 'scale(1.08) skewX(-6deg)', 'scale(0.94) skewX(4deg)', 'scale(1.04) skewX(-2deg)', 'scale(1) skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, ride([12.4, 11.6], out(0.4, -0.4), { as: 'torch', delay: 0.06 }), ride([6.9, 17.1], out(0.4, -0.4), { as: 'torch', delay: 0.06 }), ride([10.5, 13.5], out(0.4, -0.4), { as: 'torch', delay: 0.06 })],
  },
  'one-circle': {
    verb: 'the 1 rewrites inside the circle',
    parts: [sweep({ as: 'one' }), null],
  },
  'one-square': {
    verb: 'the 1 hops inside the square',
    parts: [null, hop([11.5, 12], 1.2, { as: 'one' })],
  },

  // --- online learning ----------------------------------------------------------------------
  'online-learning-01': {
    verb: 'the book pages flap and the cap hops',
    parts: [around([12, 21], [7, 12], [0, 6, -3, 1, 0], { as: 'page' }), around([12, 21], [17, 12], [0, -6, 3, -1, 0], { as: 'page' }), hop([12, 6], 1, { as: 'cap', delay: 0.14 })],
  },
  'online-learning': {
    verb: 'the cap is tossed over the open book',
    parts: [null, null, ride([12, 6], [[0, 0], [0, -2], [0, 0.3], [0, 0], [0, 0]], { as: 'cap' })],
  },
  'online-learning-02': {
    verb: 'the cap hops on the book and the ribbon swings',
    parts: [null, around([19, 18], [19, 20], [0, 10, -6, 2, 0], { as: 'ribbon' }), hop([12, 10], 1, { as: 'cap' })],
  },
  'online-learning-03': {
    verb: 'the lines write in the chat bubble beside the phone',
    parts: [retrace({ as: 'lines', delay: 0.14 }), null, pop([15.5, 7.5], 1.06, { as: 'bubble' }), pop([8.5, 19], 2, { as: 'home', delay: 0.3 })],
  },
  'online-learning-04': {
    verb: 'the book opens above the phone',
    parts: [null, flex('X', [15, 6.8], [15, 6.8], [1, 0.7, 1.06, 1, 1], { as: 'book' }), pop([8.5, 19], 2, { as: 'home', delay: 0.3 })],
  },
  'open-caption': {
    verb: 'the CC caption flips on the screen',
    parts: [null, flip([12, 10.5], 1, { as: 'caption' }), flex('X', [12, 21], [12, 21], [1, 0.8, 1.04, 1, 1], { as: 'base', delay: 0.2 })],
  },
  'open-source': {
    verb: 'the open-source ring spins a little',
    parts: [around(C, C, [0, -30, 8, -2, 0], { as: 'ring' })],
  },
  option: {
    verb: 'the option key switches its lever',
    parts: [retrace({ as: 'lever' }), ride([17, 5], out(1, 0), { as: 'bar', delay: 0.1 })],
  },
  'options-call': {
    verb: 'the C rewrites inside the square',
    parts: [null, sweep({ as: 'c' })],
  },
  orange: {
    verb: 'the leaf flutters on the orange',
    parts: [hop([12, 14], 0.6, { as: 'orange', delay: 0.14 }), null, around([12, 6], [9, 4], [0, -16, 10, -4, 0], { as: 'leaf' })],
  },
  'orbit-01': {
    verb: 'the orbit ring turns around the planet',
    parts: [null, lap(C, 360, { as: 'orbit', dur: 1 })],
  },
  orbit: {
    verb: 'the planet pulses in its orbit',
    parts: [pop(C, 1.12, { as: 'planet' }), around(C, C, [0, 30, -6, 2, 0], { as: 'orbit' })],
  },
  'orbit-02': {
    verb: 'the moon circles the planet',
    parts: [ride([12, 7], [[0, 0], [4, 4], [0, 8], [-4, 4], [0, 0]], { as: 'moon', times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear', dur: 1 }), null, null],
  },
  'organic-food': {
    verb: 'the leaf sprouts from the bowl',
    parts: [around([10, 13], [10, 8.1], [0, -12, 8, -3, 0], { as: 'leaf' }), null, beat([12, 17.5], { as: 'bowl', delay: 0.2 })],
  },

  // --- orientation ----------------------------------------------------------------------------
  'orientation-image-landscape-to-potrait': {
    verb: 'the arrow turns and the picture rotates to portrait',
    parts: [null, null, null, null, around([15, 17], [15, 17], [0, -90, -90, 0, 0], { as: 'frame', dur: 1 }), around([15, 17], [15, 17.5], [0, -90, -90, 0, 0], { as: 'frame', dur: 1 }), lap([18, 5.5], 90, { as: 'arrow', dur: 0.7 })],
  },
  'orientation-image-potrait-to-landscape': {
    verb: 'the arrow turns and the picture rotates to landscape',
    parts: [null, around([7, 10], [7, 10], [0, 90, 90, 0, 0], { as: 'frame', dur: 1 }), around([7, 10], [7, 10.5], [0, 90, 90, 0, 0], { as: 'frame', dur: 1 }), null, null, null, lap([18.5, 6], -90, { as: 'arrow', dur: 0.7 })],
  },
  'orientation-landscape-to-potrait': {
    verb: 'the screen rotates to portrait along the arrow',
    parts: [null, around([11, 17], [11, 17], [0, -90, -90, 0, 0], { as: 'screen', dur: 1 }), lap([19, 5.8], 90, { as: 'arrow', dur: 0.7 })],
  },
  'orientation-potrait-to-landscape': {
    verb: 'the screen rotates to landscape along the arrow',
    parts: [around([7, 13], [7, 13], [0, 90, 90, 0, 0], { as: 'screen', dur: 1 }), null, lap([18.3, 5], -90, { as: 'arrow', dur: 0.7 })],
  },
  origami: {
    verb: 'the paper crane flaps its wing',
    parts: [null, around([17, 11], [15, 7], [0, -20, 10, -4, 0], { as: 'wing' }), around([17, 3], [19, 5.5], [0, 14, -8, 2, 0], { as: 'head', delay: 0.06 })],
  },
  'orthogonal-edge': {
    verb: 'the edge redraws between the two nodes',
    parts: [retrace({ as: 'edge' }), pop([5, 6], 1.2, { as: 'node' }), pop([19, 18], 1.2, { as: 'node', delay: 0.3 })],
  },
  oval: {
    verb: 'the oval breathes wide and tall',
    parts: [{ as: 'oval', origin: C, transform: ['scale(1, 1)', 'scale(1.06, 0.94)', 'scale(0.96, 1.04)', 'scale(1, 1)'], times: [0, 0.33, 0.66, 1], ease: 'easeInOut', dur: 0.7 }],
  },
  oven: {
    verb: 'the oven window glows and the knobs click',
    parts: [null, { as: 'window', opacity: [1, 0.3, 1, 0.3, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, flex('X', [12, 11], [12, 11], [1, 0.6, 1.08, 1, 1], { as: 'handle', delay: 0.1 }), pop([12, 5], 3, { as: 'knob', delay: 0.06 }), pop([16, 5], 3, { as: 'knob', delay: 0.12 }), pop([8, 5], 3, { as: 'knob' })],
  },

  // --- packages ---------------------------------------------------------------------------------
  'package-01': {
    verb: 'the lid lifts off the box',
    parts: [null, ride([12, 5], out(0, -1.2), { as: 'lid' }), ride([12, 5], out(0, -1.2), { as: 'lid' }), flex('X', [12, 10.5], [12, 10.5], [1, 0.4, 1.08, 1, 1], { as: 'handle', delay: 0.1 })],
  },
  'package-02': {
    verb: 'the label slides and the tape stripe pops',
    parts: [ride([9, 16.5], out(0.8, 0), { as: 'label' }), null, null, hop([12, 4.5], 0.8, { as: 'tape', delay: 0.1 }), hop([12, 8.5], 0.8, { as: 'tape', delay: 0.1 })],
  },
  'package-03': {
    verb: 'the box hops and its tag swings',
    parts: [hop([12, 6], 0.8, { as: 'box' }), hop([12, 14], 0.8, { as: 'box' }), hop([12, 16], 0.8, { as: 'box' }), hop([11.8, 7.3], 0.8, { as: 'box' }), around([7, 14], [7.3, 16], [0, -14, 10, -4, 0], { as: 'tag', delay: 0.1 })],
  },
  'package-add-01': {
    verb: 'the plus spins beside the box',
    parts: [null, null, null, null, lap([18.5, 18.5], 90, { as: 'plus', dur: 0.6 })],
  },
  'package-add': {
    verb: 'the plus pops and the box lid lifts',
    parts: [null, pop([18.5, 17.5], 1.3, { as: 'plus' }), ride([11, 6.5], out(0, -0.8), { as: 'lid', delay: 0.1 }), null, ride([11, 6.5], out(0, -0.8), { as: 'lid', delay: 0.1 })],
  },
}

export default settleSpecs(specs)
