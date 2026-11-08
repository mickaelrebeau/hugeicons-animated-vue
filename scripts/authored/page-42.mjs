/**
 * Page 42 — look-left → mail-setting.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * magic-wand-01, mail-01, mail-open.
 *
 * The mail family comes in triples: the bare name and -01 share geometry,
 * -02 has a small inner flap. One rule keeps them apart: the bare icon lets
 * its badge act; -01 snaps the envelope flap shut and the badge answers with
 * a second gesture; -02 retraces the inner flap and the badge acts after it.
 *
 * Identical-geometry pairs get different jobs: luggage / luggage-01,
 * magic-wand (-01 is an original), and every mail-X / mail-X-01 pair.
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
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const scribble = (c, o = {}) => ride(c, [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen', ...o })

/**
 * Build a mail icon. `order` names each primitive: f = flap, b = body,
 * x = badge. `badge` holds [main, alt] gesture factories `(delay) => part`.
 */
const mail = (order, [main, alt], variant) =>
  order.split('').map((k) => {
    if (k === 'x') return variant === '01' ? alt(0.2) : variant === '02' ? main(0.22) : main(0)
    if (k === 'f' && variant === '01') return flex('Y', [12, 3], [12, 8], [1, 0.3, 1.08, 1, 1], { as: 'flap', dur: 0.56 })
    if (k === 'f' && variant === '02') return retrace({ as: 'flap', dur: 0.56 })
    return null
  })
const family = (name, order, badge, verbs, order02 = order) => ({
  [name]: { verb: verbs[0], parts: mail(order, badge, '') },
  [`${name}-01`]: { verb: verbs[1], parts: mail(order, badge, '01') },
  [`${name}-02`]: { verb: verbs[2], parts: mail(order02, badge, '02') },
})

// Badge gestures, centred on their own corner.
const B = {
  plus: (c) => [(d) => lap(c, 90, { as: 'plus', dur: 0.6, delay: d }), (d) => pop(c, 1.3, { as: 'plus', delay: d })],
  at: (c) => [(d) => lap(c, -360, { as: 'at', dur: 0.8, delay: d }), (d) => pop(c, 1.25, { as: 'at', delay: d })],
  block: (c) => [(d) => shake(c, { as: 'block', delay: d }), (d) => stamp(c, { as: 'block', delay: d })],
  down: (c) => [(d) => ride(c, out(0, 1.4), { as: 'arrow', delay: d }), (d) => hop(c, 1, { as: 'arrow', delay: d })],
  pen: (c) => [(d) => scribble(c, { delay: d }), (d) => around([c[0] - 3, c[1] + 3], c, [0, -14, 8, -2, 0], { as: 'pen', delay: d })],
  lock: (c) => [(d) => shake(c, { as: 'lock', delay: d }), (d) => hop(c, 1, { as: 'lock', delay: d })],
  heart: (c) => [(d) => ({ as: 'heart', origin: c, transform: ['scale(1)', 'scale(1.2)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut', dur: 0.72, delay: d }), (d) => ride(c, out(0, -1.2), { as: 'heart', delay: d })],
  minus: (c) => [(d) => flex('X', c, c, [1, 0.3, 1.1, 1, 1], { as: 'minus', delay: d }), (d) => ride(c, out(1.2, 0), { as: 'minus', delay: d })],
  receive: (c) => [(d) => ride(c, out(-1.4, 0), { as: 'arrow', delay: d }), (d) => nudge(c, -1, 0, { as: 'arrow', delay: d })],
  x: (c) => [(d) => shake(c, { as: 'x', delay: d }), (d) => lap(c, 90, { as: 'x', dur: 0.6, delay: d })],
  reply: (c) => [(d) => around([22, 21.5], c, [0, -20, 4, -1, 0], { as: 'reply', delay: d }), (d) => ride(c, out(-1, 0), { as: 'reply', delay: d })],
  search: (c) => [(d) => swell([22, 21.5], c, [1, 1.2, 0.95, 1.03, 1], { as: 'lens', delay: d }), (d) => ride(c, [[0, 0], [-0.8, -0.6], [0, -1], [0.4, -0.4], [0, 0]], { as: 'lens', delay: d })],
  shield: (c) => [(d) => stamp(c, { as: 'shield', delay: d }), (d) => hop(c, 1, { as: 'shield', delay: d })],
  send: (c) => [(d) => ride(c, out(1.4, 0), { as: 'arrow', delay: d }), (d) => nudge(c, 1, 0, { as: 'arrow', delay: d })],
  gear: (c) => [(d) => lap(c, 60, { as: 'gear', dur: 0.7, delay: d }), (d) => lap(c, -60, { as: 'gear', dur: 0.7, delay: d })],
}

// ---------------------------------------------------------------------------

const specs = {
  'look-left': {
    verb: 'the eyes and the smile glance left and back',
    parts: [null, ride([5.8, 14.5], out(-1, 0), { as: 'mouth', delay: 0.06 }), ride([7.6, 8.8], out(-1.4, 0), { as: 'eyes' })],
  },
  'look-right': {
    verb: 'the eyes and the smile glance right and back',
    parts: [null, ride([18.3, 14.5], out(1, 0), { as: 'mouth', delay: 0.06 }), ride([16.4, 8.8], out(1.4, 0), { as: 'eyes' })],
  },
  'look-top': {
    verb: 'the eyes look up and back',
    parts: [null, ride([12, 12.5], out(0, -0.6), { as: 'mouth', delay: 0.06 }), ride([12, 7.3], out(0, -1.4), { as: 'eyes' })],
  },
  loom: {
    verb: 'the spokes turn around the hub like a spinning wheel',
    parts: [pop(C, 1.15, { as: 'hub' }), lap(C, 90, { as: 'spoke', dur: 0.9 }), lap(C, 90, { as: 'spoke', dur: 0.9 }), lap(C, 90, { as: 'spoke', dur: 0.9 }), lap(C, 90, { as: 'spoke', dur: 0.9 }), lap(C, 90, { as: 'spoke', dur: 0.9 }), lap(C, 90, { as: 'spoke', dur: 0.9 })],
  },
  lottiefiles: {
    verb: 'the curve draws itself inside the square',
    parts: [null, retrace({ as: 'curve' })],
  },
  'love-korean-finger': {
    verb: 'the fingers snap into the heart sign',
    parts: [{ as: 'hand', origin: [12.6, 20], transform: ['rotate(0deg) scale(1)', 'rotate(-8deg) scale(0.96)', 'rotate(4deg) scale(1.04)', 'rotate(0deg) scale(1)'], times: [0, 0.3, 0.6, 1], ease: 'easeInOut', dur: 0.6 }],
  },
  'low-signal': {
    verb: 'the first bar flickers while the empty bars wait',
    parts: [dim({ as: 'bar', delay: 0.2 }), dim({ as: 'bar', delay: 0.1 }), { as: 'bar', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }],
  },
  'loyalty-card': {
    verb: 'the star stamp lands on the card',
    parts: [null, stamp([9.5, 13.4], { as: 'star' }), flex('X', [15, 16.5], [16.5, 16.5], [1, 0.3, 1.08, 1, 1], { as: 'line', delay: 0.16 })],
  },
  'luggage-01': {
    verb: 'the suitcase is lifted by its handle',
    parts: [ride([12, 13.8], out(0, -1.2), { as: 'case', delay: 0.06 }), flex('Y', [12, 6.5], [12, 4.8], [1, 1.3, 0.9, 1, 1], { as: 'handle' }), ride([7, 13.8], out(0, -1.2), { as: 'case', delay: 0.06 }), ride([17, 13.8], out(0, -1.2), { as: 'case', delay: 0.06 })],
  },
  luggage: {
    verb: 'the suitcase wobbles on its base',
    parts: [around([12, 21], [12, 13.8], [0, -5, 4, -1, 0], { as: 'case' }), around([12, 21], [12, 4.8], [0, -5, 4, -1, 0], { as: 'case' }), around([12, 21], [7, 13.8], [0, -5, 4, -1, 0], { as: 'case' }), around([12, 21], [17, 13.8], [0, -5, 4, -1, 0], { as: 'case' })],
  },
  'luggage-02': {
    verb: 'the trolley handle extends and the case rolls',
    parts: [ride([12, 2], out(0, -1.6), { as: 'handle' }), flex('Y', [12, 8], [12, 5], [1, 1.5, 0.92, 1, 1], { as: 'pole' }), null, null, ride([12, 14.3], out(0.6, 0), { as: 'case', delay: 0.2 }), ride([10, 14.3], out(0.6, 0), { as: 'case', delay: 0.2 }), ride([14, 14.3], out(0.6, 0), { as: 'case', delay: 0.2 })],
  },
  lungs: {
    verb: 'the lungs breathe in and out',
    parts: [swell([10.9, 7], [6.4, 13], [1, 1.08, 1.08, 1, 1], { as: 'lung', dur: 1 }), swell([13.1, 7], [17.6, 13], [1, 1.08, 1.08, 1, 1], { as: 'lung', dur: 1 }), flex('Y', [12, 3], [12, 5], [1, 1.1, 1.1, 1, 1], { as: 'trachea', dur: 1 })],
  },
  'machine-robot': {
    verb: 'the robot head turns and its eyes blink',
    parts: [around([12, 18], [12, 10.5], [0, -8, 6, -2, 0], { as: 'head' }), null, null, flex('Y', [10, 7.3], [10, 7.3], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5, delay: 0.1 }), flex('Y', [14, 7.3], [14, 7.3], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5, delay: 0.1 }), null],
  },

  // --- wands, magnets -------------------------------------------------------------------------
  'magic-wand-02': {
    verb: 'the wand flicks and its tip sparkles',
    parts: [nudge([19.5, 19.5], 0.8, 0.8, { as: 'handle' }), around([20, 20], [11.5, 11.5], [0, -10, 4, -1, 0], { as: 'wand' })],
    extras: [{ ...glint(5, 5, 1.4), delay: 0.2 }],
  },
  'magic-wand-03': {
    verb: 'the wand waves and the star tip spins',
    parts: [around([19, 19], [15.8, 15.8], [0, -10, 4, -1, 0], { as: 'wand' }), around([19, 19], [19, 19], [0, -10, 4, -1, 0], { as: 'wand' }), lap([10, 10], 72, { as: 'star', dur: 0.7 })],
  },
  'magic-wand-04': {
    verb: 'the wand taps and three sparkles pop in turn',
    parts: [around([3, 21], [8.5, 15.5], [0, -10, 4, -1, 0], { as: 'wand' }), pop([18.5, 5.5], 1.4, { as: 'sparkle', delay: 0.1 }), pop([18.5, 16.5], 1.4, { as: 'sparkle', delay: 0.22 }), pop([7.5, 5.5], 1.4, { as: 'sparkle', delay: 0.34 })],
  },
  'magic-wand-05': {
    verb: 'the wand swings and its sparkles twinkle',
    parts: [around([3, 21], C, [0, -8, 4, -1, 0], { as: 'wand' }), lap([18, 17], 90, { as: 'sparkle', dur: 0.6, delay: 0.14 }), lap([8.5, 5.5], 90, { as: 'sparkle', dur: 0.6, delay: 0.24 })],
  },
  'magic-wand': {
    verb: 'the wand taps and the two sparkles twinkle',
    parts: [around([20, 21], [15, 16], [0, -10, 4, -1, 0], { as: 'wand' }), pop([17, 6], 1.3, { as: 'sparkle', delay: 0.14 }), pop([6, 7], 1.3, { as: 'sparkle', delay: 0.24 })],
  },
  'magnet-01': {
    verb: 'the magnet pulls and the plus and minus poles answer',
    parts: [hop([12, 15.5], 0.8, { as: 'magnet' }), lap([18, 4], 90, { as: 'plus', dur: 0.6, delay: 0.14 }), flex('X', [6, 4], [6, 4], [1, 0.4, 1.1, 1, 1], { as: 'minus', delay: 0.14 })],
  },
  'magnet-02': {
    verb: 'the magnet hums under the bolt of attraction',
    parts: [shake([12, 14.5], { as: 'magnet', dur: 0.5 }), { as: 'bolt', opacity: [1, 0.15, 1, 0.15, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }],
  },
  magnet: {
    verb: 'the magnet tilts to pull',
    parts: [around([12, 21], C, [0, -10, 6, -2, 0], { as: 'magnet' }), around([12, 21], [12, 7.3], [0, -10, 6, -2, 0], { as: 'magnet' })],
  },
  'mail-02': {
    verb: 'the inner flap redraws and the envelope hops',
    parts: [retrace({ as: 'flap' }), hop(C, 0.8, { as: 'envelope', delay: 0.2 })],
  },

  // --- mail account (four primitives) ---------------------------------------------------------
  'mail-account': {
    verb: 'the person on the corner pops up',
    parts: [null, null, ride([18, 19.6], out(0, -0.6), { as: 'body', delay: 0.06 }), hop([18, 14], 1.2, { as: 'head' })],
  },
  'mail-account-01': {
    verb: 'the flap snaps shut and the person waves',
    parts: [flex('Y', [12, 3], [12, 7.7], [1, 0.3, 1.08, 1, 1], { as: 'flap', dur: 0.56 }), null, around([18, 21.5], [18, 19.6], [0, -8, 6, -2, 0], { as: 'person', delay: 0.2 }), around([18, 21.5], [18, 14], [0, -8, 6, -2, 0], { as: 'person', delay: 0.2 })],
  },
  'mail-account-02': {
    verb: 'the inner flap redraws and the person pops up',
    parts: [retrace({ as: 'flap', dur: 0.56 }), null, ride([18, 19.6], out(0, -0.6), { as: 'body', delay: 0.28 }), hop([18, 14], 1.2, { as: 'head', delay: 0.22 })],
  },

  ...family('mail-add', 'fbx', B.plus([18, 17]), ['the plus spins on the corner', 'the flap snaps shut and the plus pops', 'the inner flap redraws and the plus spins']),
  ...family('mail-at-sign', 'fbx', B.at([17.5, 17]), ['the @ rolls a full turn on the corner', 'the flap snaps shut and the @ pops', 'the inner flap redraws and the @ rolls']),
  ...family('mail-block', 'bfx', B.block([18.5, 17.5]), ['the block sign rattles on the corner', 'the flap snaps shut and the block sign stamps', 'the inner flap redraws and the block sign rattles']),
  ...family('mail-download', 'bfx', B.down([19.5, 17.5]), ['the arrow drops on the corner', 'the flap snaps shut and the arrow hops', 'the inner flap redraws and the arrow drops']),
  ...family('mail-edit', 'fbx', B.pen([18, 17]), ['the pen scribbles on the corner', 'the flap snaps shut and the pen tips', 'the inner flap redraws and the pen scribbles']),
  ...family('mail-lock', 'fbx', B.lock([18.5, 17]), ['the padlock rattles on the corner', 'the flap snaps shut and the padlock hops', 'the inner flap redraws and the padlock rattles']),
  ...family('mail-love', 'fbx', B.heart([18, 17.4]), ['the heart beats on the corner', 'the flap snaps shut and the heart rises', 'the inner flap redraws and the heart beats']),
  ...family('mail-minus', 'bfx', B.minus([18, 18.5]), ['the minus shrinks on the corner', 'the flap snaps shut and the minus slides off', 'the inner flap redraws and the minus shrinks']),
  ...family('mail-receive', 'bfx', B.receive([18, 17.5]), ['the arrow comes in from the right', 'the flap snaps shut and the arrow nudges in', 'the inner flap redraws and the arrow comes in']),
  ...family('mail-remove', 'fbx', B.x([17.5, 18]), ['the X rattles on the corner', 'the flap snaps shut and the X spins away', 'the inner flap redraws and the X rattles']),
  ...family('mail-reply', 'fbx', B.reply([18.5, 17.5]), ['the reply arrow swings back', 'the flap snaps shut and the reply arrow nudges back', 'the inner flap redraws and the reply arrow swings'], 'bfx'),
  ...family('mail-search', 'bfx', B.search([18, 17.5]), ['the magnifier zooms on the corner', 'the flap snaps shut and the magnifier scans', 'the inner flap redraws and the magnifier zooms']),
  ...family('mail-secure', 'fbx', B.shield([18.5, 17.5]), ['the shield stamps on the corner', 'the flap snaps shut and the shield hops', 'the inner flap redraws and the shield stamps']),
  ...family('mail-send', 'bfx', B.send([18, 17.5]), ['the arrow leaves to the right', 'the flap snaps shut and the arrow nudges out', 'the inner flap redraws and the arrow leaves']),
  ...family('mail-setting', 'fbx', B.gear([18, 17]), ['the gear turns on the corner', 'the flap snaps shut and the gear turns back', 'the inner flap redraws and the gear turns']),

  'mail-reply-all': {
    verb: 'the two reply arrows swing back one after the other',
    parts: [null, null, around([13.5, 18.5], [12.2, 16], [0, -20, 4, -1, 0], { as: 'reply', delay: 0.08 }), around([22, 21.5], [18.5, 17.5], [0, -20, 4, -1, 0], { as: 'reply' })],
  },
  'mail-reply-all-01': {
    verb: 'the flap snaps shut and the reply arrows nudge back',
    parts: [null, flex('Y', [12, 3], [12, 7.7], [1, 0.3, 1.08, 1, 1], { as: 'flap', dur: 0.56 }), ride([12.2, 16], out(-1, 0), { as: 'reply', delay: 0.28 }), ride([18.5, 17.5], out(-1, 0), { as: 'reply', delay: 0.2 })],
  },
  'mail-reply-all-02': {
    verb: 'the inner flap redraws and the reply arrows swing back',
    parts: [null, retrace({ as: 'flap', dur: 0.56 }), around([13.5, 18.5], [12.2, 16], [0, -20, 4, -1, 0], { as: 'reply', delay: 0.3 }), around([22, 21.5], [18.5, 17.5], [0, -20, 4, -1, 0], { as: 'reply', delay: 0.22 })],
  },
  'mail-open-01': {
    verb: 'the flap opens wider and folds back',
    parts: [null, null, flex('Y', [12, 9.5], [12, 11.8], [1, 1.6, 0.9, 1, 1], { as: 'flap' })],
  },
  'mail-open-02': {
    verb: 'the envelope hops and the flap line redraws',
    parts: [hop(C, 0.8, { as: 'envelope', delay: 0.16 }), retrace({ as: 'flap' })],
  },
  'mail-open-love': {
    verb: 'the letter rises out of the envelope with a beating heart',
    parts: [null, null, ride([12, 7], out(0, -1.4), { as: 'letter' }), { ...ride([12, 8.4], out(0, -1.4), { as: 'heart' }), transform: ['translate(0px, 0px) scale(1)', 'translate(0px, -1.4px) scale(1.15)', 'translate(0px, 0.2px) scale(1)', 'translate(0px, 0px) scale(1)', 'translate(0px, 0px) scale(1)'] }],
  },
  'mail-question-mark': {
    verb: 'the question mark tilts and its dot bounces',
    parts: [null, around([20, 18], [20, 15.5], [0, -14, 10, -4, 0], { as: 'question' }), hop([20, 20.8], 1.2, { as: 'dot', delay: 0.14 }), null],
  },
}

export default settleSpecs(specs)
