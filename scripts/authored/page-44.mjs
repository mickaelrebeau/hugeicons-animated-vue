/**
 * Page 44 — medal-07 → message-outgoing-02.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted menu-01, message-01 and message-add-01 sit in this span
 * and are skipped.
 *
 * Message triples follow one rule: the bare icon lets its badge act; -01
 * rewrites the text lines and the badge answers with a second gesture; -02
 * types its three dots in turn and the badge acts after them. Menus each
 * move their bars in a way that fits their silhouette.
 *
 * Identical-geometry pairs get different jobs: medicine / medicine-01,
 * medicine-bottle / -01, megaphone / megaphone-01, message-multiple / -01,
 * and every message-X / message-X-01 pair.
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
const sway = (c, o = {}) => around([12, 2], c, [0, 8, -6, 2, 0], { as: 'medal', dur: 0.8, ...o })
/** The three typing dots of a -02 bubble, drawn as one path. */
const typing = { as: 'dots', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.16, 0.32, 0.48, 0.64], ease: 'linear', dur: 0.8 }

/**
 * Build a message icon. `order` names each primitive: o = outline,
 * l = text lines, d = typing dots, x = badge. `badge` = [main, alt].
 */
const msg = (order, [main, alt], variant) =>
  order.split('').map((k) => {
    if (k === 'x') return variant === '01' ? alt(0.2) : variant === '02' ? main(0.3) : main(0)
    if (k === 'l' && variant === '01') return retrace({ as: 'lines', dur: 0.6 })
    if (k === 'd') return typing
    return null
  })
const triple = (name, orders, badge, verbs, skip = []) =>
  Object.fromEntries(
    [
      [name, orders[0], '', verbs[0]],
      [`${name}-01`, orders[0], '01', verbs[1]],
      [`${name}-02`, orders[1], '02', verbs[2]],
    ]
      .filter(([n]) => !skip.includes(n))
      .map(([n, order, v, verb]) => [n, { verb, parts: msg(order, badge, v) }]),
  )

const B = {
  plus: (c) => [(d) => lap(c, 90, { as: 'plus', dur: 0.6, delay: d }), (d) => pop(c, 1.3, { as: 'plus', delay: d })],
  x: (c) => [(d) => shake(c, { as: 'x', delay: d }), (d) => lap(c, 90, { as: 'x', dur: 0.6, delay: d })],
  clock: (c) => [(d) => lap(c, 360, { as: 'clock', dur: 0.9, delay: d }), (d) => pop(c, 1.2, { as: 'clock', delay: d })],
  check: (c) => [(d) => draw({ as: 'check', delay: d }), (d) => pop(c, 1.3, { as: 'check', delay: d })],
  down: (c) => [(d) => ride(c, out(0, 1.4), { as: 'arrow', delay: d }), (d) => hop(c, 1, { as: 'arrow', delay: d })],
  pen: (c) => [(d) => ride(c, [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen', delay: d }), (d) => around([c[0] - 3, c[1] + 3], c, [0, -14, 8, -2, 0], { as: 'pen', delay: d })],
  heart: (c) => [(d) => ({ as: 'heart', origin: c, transform: ['scale(1)', 'scale(1.2)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut', dur: 0.72, delay: d }), (d) => ride(c, out(0, -1.2), { as: 'heart', delay: d })],
  in: (c) => [(d) => ride(c, out(-1.4, 0), { as: 'arrow', delay: d }), (d) => nudge(c, -1, 0, { as: 'arrow', delay: d })],
  out: (c) => [(d) => ride(c, out(1.4, 0), { as: 'arrow', delay: d }), (d) => nudge(c, 1, 0, { as: 'arrow', delay: d })],
  lock: (c) => [(d) => shake(c, { as: 'lock', delay: d }), (d) => hop(c, 1, { as: 'lock', delay: d })],
  dot: (c) => [(d) => pop(c, 1.4, { as: 'dot', delay: d }), (d) => ({ as: 'dot', opacity: [1, 0.15, 1, 0.15, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8, delay: d })],
}

// ---------------------------------------------------------------------------

const specs = {
  // --- medals -------------------------------------------------------------------------------
  'medal-07': {
    verb: 'the medal swings under the folded ribbon',
    parts: [sway([12, 16.5]), null, null, sway([12, 16.5])],
  },
  'medal-first-place': {
    verb: 'the 1 flips on the medal',
    parts: [null, null, null, null, null, flip([12, 15.5], 1, { as: 'one' })],
  },
  'medal-second-place': {
    verb: 'the 2 rewrites on the medal',
    parts: [sweep({ as: 'two' }), null, null, null, null, null],
  },
  'medal-third-place': {
    verb: 'the medal swings with its 3',
    parts: [sway([12, 15.5]), sway([12, 15.5]), null, null, null, null],
  },
  medal: {
    verb: 'the medal hops off its ribbon and lands',
    parts: [null, null, hop([12, 17.5], 1.2, { as: 'medal' })],
  },
  'medical-file': {
    verb: 'the heartbeat line traces across the file',
    parts: [null, retrace({ as: 'pulse' }), pop([8, 7], 1.1, { as: 'corner', delay: 0.2 })],
  },
  'medical-mask': {
    verb: 'the mask straps stretch as the mask is pulled on',
    parts: [hop([12, 8.8], 0.6, { as: 'eyes', delay: 0.2 }), null, ride([12, 15.5], out(0, -0.6), { as: 'mask' }), flex('X', [12, 14.8], [12, 14.8], [1, 1.06, 0.98, 1, 1], { as: 'straps' })],
  },
  'medicine-01': {
    verb: 'the capsule drops into the open hand',
    parts: [beat([8.5, 16], { as: 'hand', delay: 0.26 }), null, ride([13, 7], [[0, 0], [0, 2], [0, 2], [0, 0], [0, 0]], { as: 'pill', times: [0, 0.3, 0.6, 0.86, 1] })],
  },
  medicine: {
    verb: 'the capsule spins over the hand',
    parts: [null, null, lap([13, 7], 180, { as: 'pill', dur: 0.8 })],
  },
  'medicine-02': {
    verb: 'the two capsules tumble against each other',
    parts: [around(C, [15, 16], [0, 20, -10, 4, 0], { as: 'pill', delay: 0.06 }), around(C, [11.9, 8.7], [0, -20, 10, -4, 0], { as: 'pill' })],
  },
  'medicine-bottle-01': {
    verb: 'the cap twists off and back on',
    parts: [around([12, 4], [12, 4], [0, -14, 10, -3, 0], { as: 'cap' }), null, null],
  },
  'medicine-bottle': {
    verb: 'the cap lifts and the cross turns',
    parts: [ride([12, 4], out(0, -1.2), { as: 'cap' }), null, lap([12, 15.5], 90, { as: 'cross', dur: 0.6, delay: 0.1 })],
  },
  'medicine-bottle-02': {
    verb: 'the pill rolls out beside the bottle',
    parts: [null, ride([10, 4], out(0, -1), { as: 'cap' }), around([16, 18], [16, 18], [0, 90, 180, 180, 0], { as: 'pill', dur: 0.9 })],
  },
  'medicine-syrup': {
    verb: 'the syrup drop swells in the bottle',
    parts: [swell([12, 18], [12, 15], [1, 1.2, 0.95, 1.04, 1], { as: 'drop' }), ride([12, 4], out(0, -1), { as: 'cap', delay: 0.1 }), null],
  },
  'medium-signal': {
    verb: 'the two lit bars pulse while the third waits',
    parts: [dim({ as: 'bar', delay: 0.2 }), flex('Y', [12, 19], [12, 13.5], [1, 0.4, 1.06, 1, 1], { as: 'bar', delay: 0.08 }), flex('Y', [5.5, 19], [5.5, 15.5], [1, 0.4, 1.06, 1, 1], { as: 'bar' })],
  },
  'medium-square': {
    verb: 'the three dots squash in turn inside the square',
    parts: [flex('X', [7.5, 12.5], [7.5, 12.5], [1, 0.6, 1.1, 1, 1], { as: 'dot' }), flex('X', [13.5, 12.5], [13.5, 12.5], [1, 0.6, 1.1, 1, 1], { as: 'dot', delay: 0.08 }), flex('X', [18, 12.5], [18, 12.5], [1, 0.6, 1.1, 1, 1], { as: 'dot', delay: 0.16 }), null],
  },
  medium: {
    verb: 'the three dots hop in turn',
    parts: [hop([6.5, 12], 1, { as: 'dot' }), hop([15.5, 12], 1, { as: 'dot', delay: 0.08 }), hop([21, 12], 1, { as: 'dot', delay: 0.16 })],
  },
  'meeting-room': {
    verb: 'the door opens to the meeting room',
    parts: [flex('X', [3, 12], [10, 12], [1, 0.4, 0.4, 1, 1], { as: 'door' }), null, ride([13, 12], out(-3, 0), { as: 'handle' })],
  },

  // --- megaphones ---------------------------------------------------------------------------
  'megaphone-01': {
    verb: 'the megaphone blares: the bell swells',
    parts: [swell([7.5, 9.5], [12.2, 9.5], [1, 1.08, 0.97, 1.03, 1], { as: 'bell' }), null, null],
    extras: [{ as: 'sound', tag: 'path', attrs: { d: 'M22 5L23.5 4M22.5 9.5H24M22 14L23.5 15', strokeWidth: '1.2' }, opacity: [0, 0, 1, 0], transform: ['translateX(-1px)', 'translateX(-1px)', 'translateX(0px)', 'translateX(0.6px)'], times: [0, 0.2, 0.5, 1], ease: 'easeOut', dur: 0.8 }],
  },
  megaphone: {
    verb: 'the megaphone recoils with each shout',
    parts: [ride([12.2, 9.5], [[0, 0], [-0.8, 0.4], [0, 0], [-0.8, 0.4], [0, 0]], { as: 'horn', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 }), ride([9.5, 17.5], [[0, 0], [-0.8, 0.4], [0, 0], [-0.8, 0.4], [0, 0]], { as: 'horn', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 }), ride([7.5, 9.5], [[0, 0], [-0.8, 0.4], [0, 0], [-0.8, 0.4], [0, 0]], { as: 'horn', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 })],
  },
  'megaphone-02': {
    verb: 'the megaphone tilts up to shout',
    parts: [around([8, 16], [12.2, 11], [0, -10, 4, -1, 0], { as: 'horn' }), around([8, 16], [10, 17.5], [0, -10, 4, -1, 0], { as: 'horn' }), around([8, 16], [7.5, 11], [0, -10, 4, -1, 0], { as: 'horn' })],
  },
  'megaphone-03': {
    verb: 'the horn shakes as it blares',
    parts: [null, shake(C, { as: 'horn', dur: 0.5 }), around([8, 15.5], [10.5, 17.8], [0, 10, -6, 2, 0], { as: 'handle' })],
  },
  meh: {
    verb: 'the flat mouth slides side to side, unimpressed',
    parts: [null, ride([12, 16], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'mouth', dur: 0.8 }), ride([8, 9], out(0, 0.4), { as: 'eye', delay: 0.1 }), ride([16, 9], out(0, 0.4), { as: 'eye', delay: 0.1 })],
  },
  'memory-stick': {
    verb: 'the chips light up in turn on the stick',
    parts: [null, blink({ as: 'chip', delay: 0.1 }), blink({ as: 'chip', delay: 0.2 }), blink({ as: 'chip' }), flex('X', [12, 18], [12, 18], [1, 0.9, 1.04, 1, 1], { as: 'pins', delay: 0.2 })],
  },
  mentor: {
    verb: 'the mentor points at the board and the student nods',
    parts: [ride([18, 18.9], out(0, -0.4), { as: 'student', delay: 0.26 }), hop([18, 12.5], 0.8, { as: 'student', delay: 0.2 }), retrace({ as: 'board' }), around([7, 14], [7, 12.7], [0, -8, 4, -1, 0], { as: 'mentor' }), hop([4.5, 5], 0.6, { as: 'head' })],
  },
  mentoring: {
    verb: 'the mentor leans in over the laptop and the learner nods',
    parts: [null, around([8, 13], [8, 10.8], [0, 8, -4, 1, 0], { as: 'mentor' }), hop([17, 13], 1, { as: 'head', delay: 0.16 }), around([8, 13], [8, 4], [0, 8, -4, 1, 0], { as: 'mentor' }), ride([18, 19.8], out(0, -0.4), { as: 'body', delay: 0.2 })],
  },

  // --- menus ----------------------------------------------------------------------------------
  'menu-02': {
    verb: 'the bars stretch to equal length and spring back',
    parts: [flex('X', [4, 5], [10, 5], [1, 1.33, 0.97, 1, 1], { as: 'bar' }), null, flex('X', [4, 19], [8, 19], [1, 2, 0.94, 1, 1], { as: 'bar', delay: 0.06 })],
  },
  'menu-03': {
    verb: 'the short bars slide toward their sides',
    parts: [ride([15, 5], out(-1.6, 0), { as: 'bar' }), null, ride([9, 19], out(1.6, 0), { as: 'bar', delay: 0.06 })],
  },
  'menu-04': {
    verb: 'the outer bars widen to the middle one',
    parts: [flex('X', C, [12, 5], [1, 1.3, 0.96, 1, 1], { as: 'bar' }), null, flex('X', C, [12, 19], [1, 1.3, 0.96, 1, 1], { as: 'bar', delay: 0.06 })],
  },
  'menu-05': {
    verb: 'the top bar grows full width',
    parts: [flex('X', [4, 5], [9, 5], [1, 1.6, 0.97, 1, 1], { as: 'bar' }), null, null],
  },
  'menu-06': {
    verb: 'the chevron in the middle bar drops like a dropdown',
    parts: [null, ride([12, 13], out(0, 1), { as: 'dropdown' }), null],
  },
  'menu-07': {
    verb: 'the four bars ripple from top to bottom',
    parts: [ride([12, 4.5], out(1, 0), { as: 'bar' }), ride([12, 14.5], out(1, 0), { as: 'bar', delay: 0.16 }), ride([12, 9.5], out(1, 0), { as: 'bar', delay: 0.08 }), ride([12, 19.5], out(1, 0), { as: 'bar', delay: 0.24 })],
  },
  'menu-08': {
    verb: 'the funnel of bars narrows further and opens',
    parts: [null, flex('X', C, C, [1, 0.7, 1.06, 1, 1], { as: 'bar', delay: 0.06 }), flex('X', [12, 19], [12, 19], [1, 0.5, 1.1, 1, 1], { as: 'bar', delay: 0.12 })],
  },
  'menu-09': {
    verb: 'the two bars twist into an X and back',
    parts: [around([12, 12], [12, 8.5], [0, 45, 45, 0, 0], { as: 'bar', times: [0, 0.35, 0.6, 0.9, 1] }), around([12, 12], [12, 15.5], [0, -45, -45, 0, 0], { as: 'bar', times: [0, 0.35, 0.6, 0.9, 1] })],
  },
  'menu-10': {
    verb: 'the dot drops and the bars fill under it',
    parts: [flex('X', [5, 9], [12, 9], [1, 0.3, 1.04, 1, 1], { as: 'bar', delay: 0.14 }), ride([12, 5], out(0, -1.4), { as: 'dot' }), flex('X', [5, 14], [12, 14], [1, 0.3, 1.04, 1, 1], { as: 'bar', delay: 0.2 }), flex('X', [5, 19], [12, 19], [1, 0.3, 1.04, 1, 1], { as: 'bar', delay: 0.26 })],
  },
  'menu-11': {
    verb: 'the short middle bar slides out to the left',
    parts: [ride([15, 12], out(-2, 0), { as: 'bar' }), null, null],
  },
  'menu-circle': {
    verb: 'the four circles orbit a quarter turn',
    parts: [lap(C, 90, { as: 'dots', dur: 0.8 }), lap(C, 90, { as: 'dots', dur: 0.8 }), lap(C, 90, { as: 'dots', dur: 0.8 }), lap(C, 90, { as: 'dots', dur: 0.8 })],
  },
  'menu-collapse': {
    verb: 'the arrow folds the menu away and the lines shorten',
    parts: [flex('X', [3, 6], [10, 6], [1, 0.6, 1.04, 1, 1], { as: 'line', delay: 0.1 }), flex('X', [3, 12], [8, 12], [1, 0.6, 1.04, 1, 1], { as: 'line', delay: 0.14 }), flex('X', [3, 18], [10, 18], [1, 0.6, 1.04, 1, 1], { as: 'line', delay: 0.18 }), nudge([19, 12], -1.2, 0, { as: 'arrow' })],
  },
  'menu-restaurant': {
    verb: 'the cloche lifts off the menu card',
    parts: [null, ride([12, 12], out(0, -1), { as: 'cloche' }), flex('X', [12, 18], [12, 18], [1, 0.6, 1.06, 1, 1], { as: 'line', delay: 0.1 }), hop([10, 3.9], 0.8, { as: 'tab', delay: 0.2 })],
  },
  'menu-square': {
    verb: 'the four squares pop in a clockwise round',
    parts: [pop([6, 18], 1.15, { as: 'tile', delay: 0.36 }), pop([18, 18], 1.15, { as: 'tile', delay: 0.24 }), pop([6, 6], 1.15, { as: 'tile' }), pop([18, 6], 1.15, { as: 'tile', delay: 0.12 })],
  },
  'menu-two-line': {
    verb: 'the short line stretches to match the long one',
    parts: [null, flex('X', [4, 15], [9, 15], [1, 1.6, 0.97, 1, 1], { as: 'line' })],
  },
  menu: {
    verb: 'the three bars slide out in turn',
    parts: [ride([12, 5], out(1.2, 0), { as: 'bar' }), ride(C, out(1.2, 0), { as: 'bar', delay: 0.08 }), ride([12, 19], out(1.2, 0), { as: 'bar', delay: 0.16 })],
  },

  // --- messages -------------------------------------------------------------------------------
  'message-02': {
    verb: 'the dots type in the bubble',
    parts: [null, typing],
  },
  'message-add': {
    verb: 'the plus spins on the bubble corner',
    parts: [null, null, lap([18.5, 5.5], 90, { as: 'plus', dur: 0.6 })],
  },
  'message-add-02': {
    verb: 'the dots type and the plus spins',
    parts: [null, typing, lap([19, 5], 90, { as: 'plus', dur: 0.6, delay: 0.3 })],
  },
  'message-blocked': {
    verb: 'the slash cuts across and the bubble halves fade',
    parts: [dim({ as: 'bubble', delay: 0.1 }), dim({ as: 'bubble', delay: 0.1 }), draw({ as: 'slash' })],
  },
  ...triple('message-cancel', ['oxl', 'odx'], B.x([19, 5]), ['the X rattles on the bubble corner', 'the lines rewrite and the X spins away', 'the dots type and the X rattles']),
  'message-circle-code': {
    verb: 'the code brackets part inside the bubble',
    parts: [null, nudge([8.5, 12], -1, 0, { as: 'bracket' }), nudge([15.5, 12], 1, 0, { as: 'bracket' })],
  },
  'message-circle-reply': {
    verb: 'the reply arrow swings back inside the bubble',
    parts: [around([16.5, 14.5], [12, 11.8], [0, -20, 4, -1, 0], { as: 'reply' }), null],
  },
  ...triple('message-delay', ['lox', 'odx'], B.clock([18, 6]), ['the clock hand sweeps a full hour on the corner', 'the lines rewrite and the clock pops', 'the dots type and the clock sweeps']),
  ...triple('message-done', ['oxl', 'odx'], B.check([18, 5]), ['the check ticks on the corner', 'the lines rewrite and the check pops', 'the dots type and the check ticks']),
  ...triple('message-download', ['olx', 'odx'], B.down([18.5, 6]), ['the arrow drops on the corner', 'the lines rewrite and the arrow hops', 'the dots type and the arrow drops']),
  ...triple('message-edit', ['olx', 'odx'], B.pen([18.1, 6]), ['the pen scribbles on the corner', 'the lines rewrite and the pen tips', 'the dots type and the pen scribbles']),
  ...triple('message-favourite', ['lox', 'odx'], B.heart([18, 5.4]), ['the heart beats on the corner', 'the lines rewrite and the heart rises', 'the dots type and the heart beats']),
  ...triple('message-incoming', ['olx', 'odx'], B.in([18, 4.5]), ['the arrow comes in from the right', 'the lines rewrite and the arrow nudges in', 'the dots type and the arrow comes in']),
  ...triple('message-lock', ['olx', 'odx'], B.lock([18.5, 6.5]), ['the padlock rattles on the corner', 'the lines rewrite and the padlock hops', 'the dots type and the padlock rattles']),
  'message-multiple-01': {
    verb: 'the back bubble slides out from behind',
    parts: [null, ride([15.3, 16.5], out(1, 1), { as: 'back' }), null],
  },
  'message-multiple': {
    verb: 'the front bubble rewrites its lines and hops',
    parts: [retrace({ as: 'lines' }), null, hop([10.5, 10], 0.8, { as: 'front', delay: 0.2 })],
  },
  'message-multiple-02': {
    verb: 'the two bubbles bob in turn',
    parts: [hop([11.5, 11], 0.8, { as: 'bubble' }), hop([16, 16.5], 0.8, { as: 'bubble', delay: 0.14 })],
  },
  ...triple('message-notification', ['olx', 'xod'], B.dot([18.5, 5.5]), ['the notification dot pops on the corner', 'the lines rewrite and the dot blinks', 'the dots type and the notification pops']),
  'message-outgoing-01': {
    verb: 'the lines rewrite and the arrow nudges out',
    parts: msg('olx', B.out([18, 4.5]), '01'),
  },
  'message-outgoing-02': {
    verb: 'the dots type and the arrow leaves',
    parts: msg('odx', B.out([18.5, 5]), '02'),
  },
}

export default settleSpecs(specs)
