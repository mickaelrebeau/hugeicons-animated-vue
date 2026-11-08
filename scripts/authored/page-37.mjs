/**
 * Page 37 — image-remove → join-straight.
 *
 * Gallery page (80 public icons). Visible handcrafted original skipped:
 * information-circle. The hidden handcrafted inbox sits in this span and is
 * skipped too.
 *
 * Inboxes catch what drops in. Inequalities tip their chevron toward the
 * smaller side. Inserts slide the new row or column in along its arrow.
 * Antennas broadcast arc by arc. Infinity loops trace themselves.
 *
 * Identical-geometry pairs get different jobs: inequality / inequality-01,
 * inequality-circle / -01, inequality-square / -01, infinity / infinity-01,
 * installing-updates / -01, internet-antenna / -01.
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
  glint,
  hold,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const hill = (c = [13, 15.5], o = {}) => flex('Y', [c[0], 21], c, [1, 0.8, 1.06, 1, 1], { as: 'hill', delay: 0.16, ...o })
/** The inbox tray dips as something lands in it. */
const tray = (o = {}) => ride([12, 15], out(0, 0.8), { as: 'tray', delay: 0.24, ...o })
/** A chevron of an inequality tipping toward the small side. */
const tip = (c, dx, o = {}) => nudge(c, dx, 0, { as: 'chevron', ...o })
/** An infinity stroke that traces itself. */
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.25, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1.1, ...o })
const caret = (c, o = {}) => ({ as: 'caret', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8, ...o })

// ---------------------------------------------------------------------------

const specs = {
  'image-remove': {
    verb: 'the minus slides off to the right',
    parts: [null, null, ride([18, 6], out(1.4, 0), { as: 'minus' })],
  },
  'image-rotation-clockwise': {
    verb: 'the arrow turns clockwise and the picture tilts with it',
    parts: [around([14, 14], [14, 14], [0, 10, -4, 1, 0], { as: 'picture', delay: 0.1 }), around([14, 14], [14, 15.5], [0, 10, -4, 1, 0], { as: 'picture', delay: 0.1 }), around([6.5, 8], [6.5, 8], [0, 40, -6, 2, 0], { as: 'arrow' }), around([14, 14], [11.5, 11.5], [0, 10, -4, 1, 0], { as: 'picture', delay: 0.1 })],
  },
  'image-upload-01': {
    verb: 'the arrow lifts off the corner and the hill rises',
    parts: [hill(), ride([19.5, 6], out(0, -1.4), { as: 'arrow' }), null],
  },
  'image-upload': {
    verb: 'the arrow lifts off the corner',
    parts: [null, null, ride([18.5, 6], out(0, -1.4), { as: 'arrow' })],
  },
  image: {
    verb: 'the sun rises over the mountains',
    parts: [ride([7.5, 7.5], out(0, -1.2), { as: 'sun' }), null, hill([13.2, 14.9])],
  },
  imo: {
    verb: 'the letters bounce inside the bubble',
    parts: [null, hop([12.5, 12], 1, { as: 'letters' })],
  },
  'important-book': {
    verb: 'the exclamation stretches and the dot bounces',
    parts: [null, hop([12, 13.9], 1.2, { as: 'dot', delay: 0.14 }), flex('Y', [12, 10], [12, 8], [1, 1.3, 0.9, 1.04, 1], { as: 'bang' }), around([19, 18], [19, 20], [0, 10, -6, 2, 0], { as: 'ribbon' })],
  },
  'in-love': {
    verb: 'the heart pops out of the face and the smile widens',
    parts: [null, flex('X', [12, 16], [12, 16], [1, 1.2, 0.95, 1.03, 1], { as: 'mouth' }), hop([12, 9.8], 0.6, { as: 'eyes', delay: 0.1 }), { as: 'heart', origin: [18.5, 4.9], transform: ['scale(1)', 'scale(1.25)', 'scale(0.96)', 'scale(1.12)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut', dur: 0.72 }],
  },

  // --- inboxes ------------------------------------------------------------------------------
  'inbox-check': {
    verb: 'the check badge pops and the tray dips',
    parts: [tray(), draw({ as: 'check', delay: 0.1 }), null, pop([18, 6], 1.15, { as: 'badge' })],
  },
  'inbox-download': {
    verb: 'the arrow drops into the tray',
    parts: [null, ride([12, 6.5], out(0, 2), { as: 'arrow' }), tray()],
  },
  'inbox-unread': {
    verb: 'the unread dot pulses on the corner',
    parts: [null, pop([18.5, 5.5], 1.3, { as: 'dot' }), null],
  },
  'inbox-upload': {
    verb: 'the arrow rises out of the tray',
    parts: [null, ride([12, 6.5], out(0, -2), { as: 'arrow', delay: 0.1 }), ride([12, 15], out(0, -0.6), { as: 'tray' })],
  },
  incognito: {
    verb: 'the glasses glint and the hat tips',
    parts: [ride([7, 18], out(0, -0.6), { as: 'lens', delay: 0.1 }), ride([17, 18], out(0, -0.6), { as: 'lens', delay: 0.1 }), null, ride([12, 15.7], out(0, -0.6), { as: 'bridge', delay: 0.1 }), around([20, 12], [12, 7.2], [0, -6, 3, -1, 0], { as: 'hat' })],
    extras: [{ ...glint(17, 17, 1.2), delay: 0.3 }],
  },
  'india-gate': {
    verb: 'the arch lights up and the flame on top flickers',
    parts: [null, pop([12, 17.5], 1.06, { as: 'arch', delay: 0.1 }), blink({ as: 'slot', delay: 0.2 }), blink({ as: 'slot', delay: 0.2 }), pop([12, 10], 2, { as: 'light' }), null, hop([12, 4], 0.8, { as: 'top' }), null],
  },

  // --- inequalities --------------------------------------------------------------------------
  'inequality-01': {
    verb: 'the less-than chevron tips left and the bar underlines it',
    parts: [draw({ as: 'bar', delay: 0.16 }), tip([11.9, 10], -1.4)],
  },
  inequality: {
    verb: 'the chevron closes its jaws and opens',
    parts: [null, flex('Y', [3, 10], [11.9, 10], [1, 0.6, 1.1, 1, 1], { as: 'chevron' })],
  },
  'inequality-02': {
    verb: 'the greater-than chevron tips right and the bar underlines it',
    parts: [draw({ as: 'bar', delay: 0.16 }), tip([12.1, 10], 1.4)],
  },
  'inequality-circle-01': {
    verb: 'the chevron tips left inside the circle',
    parts: [null, tip([11.9, 10.5], -1.2), null],
  },
  'inequality-circle': {
    verb: 'the bar slides under the chevron',
    parts: [null, null, ride([12, 16.5], out(-1.4, 0), { as: 'bar' })],
  },
  'inequality-circle-02': {
    verb: 'the chevron tips right inside the circle',
    parts: [null, tip([12.1, 10.5], 1.2), ride([12, 16.5], out(1, 0), { as: 'bar', delay: 0.1 })],
  },
  'inequality-square-01': {
    verb: 'the chevron squeezes inside the square',
    parts: [null, flex('Y', [8, 10.5], [11.9, 10.5], [1, 0.6, 1.1, 1, 1], { as: 'chevron' }), null],
  },
  'inequality-square': {
    verb: 'the chevron hops and the bar answers',
    parts: [null, hop([11.9, 10.5], 1, { as: 'chevron' }), hop([12, 16.5], 0.6, { as: 'bar', delay: 0.1 })],
  },
  'inequality-square-02': {
    verb: 'the chevron tips right inside the square',
    parts: [null, tip([12.1, 10.5], 1.2), null],
  },

  // --- infant, infinity, info ---------------------------------------------------------------
  infant: {
    verb: 'the baby blinks and the curl bounces',
    parts: [null, null, hop([12.3, 4], 1, { as: 'curl' }), flex('Y', [12, 10], [12, 10], [1, 0.1, 1, 1, 1], { as: 'eyes', dur: 0.5, delay: 0.1 }), pop([12, 14.5], 1.3, { as: 'mouth', delay: 0.2 })],
  },
  'infinity-01': {
    verb: 'the infinity loop traces itself',
    parts: [loop()],
  },
  infinity: {
    verb: 'the loop stretches wide and springs back',
    parts: [flex('X', C, C, [1, 1.12, 0.94, 1.02, 1], { as: 'loop' })],
  },
  'infinity-02': {
    verb: 'the loop traces inside its brackets',
    parts: [loop({ dur: 1 }), null],
  },
  'infinity-circle': {
    verb: 'the loop turns half a turn inside the circle',
    parts: [lap(C, 180, { as: 'loop' }), null],
  },
  'infinity-square': {
    verb: 'the loop flips inside the square',
    parts: [flip(C, 1, { as: 'loop' }), null],
  },
  'information-diamond': {
    verb: 'the i stretches and its dot bounces',
    parts: [null, flex('Y', [12, 16], [12, 14], [1, 1.3, 0.9, 1.04, 1], { as: 'stem' }), hop([12, 8.3], 1.4, { as: 'dot', delay: 0.1 })],
  },
  'information-square': {
    verb: 'the dot drops onto the i stem',
    parts: [null, flex('Y', [12, 16], [12, 14], [1, 0.8, 1.06, 1, 1], { as: 'stem', delay: 0.24 }), ride([12, 8.3], out(0, -2), { as: 'dot' })],
  },
  injection: {
    verb: 'the plunger pushes and a drop leaves the needle',
    parts: [ride([19.5, 4.5], out(-1.2, 1.2), { as: 'plunger' }), null, ride([14.5, 9.5], out(-1.2, 1.2), { as: 'plunger' }), null, null, null],
    extras: [{ as: 'drop', tag: 'circle', attrs: { cx: '2', cy: '22', r: '0.6', fill: 'currentColor', stroke: 'none' }, opacity: [0, 0, 1, 0], transform: ['translate(0px, 0px)', 'translate(0px, 0px)', 'translate(-0.4px, 0.4px)', 'translate(-1px, 1px)'], times: [0, 0.4, 0.6, 1], ease: 'easeOut', dur: 0.8 }],
  },

  // --- inputs -------------------------------------------------------------------------------
  'input-cursor-text': {
    verb: 'the text cursor blinks at the field edge',
    parts: [caret(), null],
  },
  'input-long-text': {
    verb: 'the letters type in and the cursor blinks',
    parts: [null, pop([7, 12], 1.2, { as: 'letter' }), pop([13, 12], 1.2, { as: 'letter', delay: 0.12 }), caret([18, 12], { delay: 0.24 })],
  },
  'input-numeric': {
    verb: 'the digits count up in the field',
    parts: [null, flip([7, 12], 1, { as: 'digit' }), flip([12.5, 12], 1, { as: 'digit', delay: 0.12 })],
  },
  'input-short-text': {
    verb: 'the cursor hops and the letter types in',
    parts: [hop([15, 12], 1, { as: 'caret', delay: 0.1 }), pop([7, 12], 1.2, { as: 'letter' }), null],
  },
  'input-text': {
    verb: 'the letters A and B type into the field',
    parts: [null, pop([7, 12], 1.2, { as: 'letter' }), pop([13.5, 10.5], 1.2, { as: 'letter', delay: 0.1 }), pop([13.5, 13.5], 1.2, { as: 'letter', delay: 0.14 })],
  },

  // --- inserts ------------------------------------------------------------------------------
  'insert-bottom-image': {
    verb: 'the image slides up under the text lines',
    parts: [null, null, ride([12, 16], out(0, 1.6), { as: 'image' })],
  },
  'insert-center-image': {
    verb: 'the image pops between the text lines',
    parts: [ride([11, 3], out(0, -0.8), { as: 'line' }), ride([7.5, 21], out(0, 0.8), { as: 'line' }), pop(C, 1.06, { as: 'image', delay: 0.1 })],
  },
  'insert-column-left': {
    verb: 'the arrow pushes a new column in from the left',
    parts: [null, nudge([6.5, 12], -1.4, 0, { as: 'arrow' }), ride([15, 12], out(0.8, 0), { as: 'column', delay: 0.1 }), ride([18.3, 12], out(0.8, 0), { as: 'column', delay: 0.1 })],
  },
  'insert-column-right': {
    verb: 'the arrow pushes a new column in from the right',
    parts: [null, nudge([17.5, 12], 1.4, 0, { as: 'arrow' }), ride([9, 12], out(-0.8, 0), { as: 'column', delay: 0.1 }), ride([5.7, 12], out(-0.8, 0), { as: 'column', delay: 0.1 })],
  },
  'insert-column': {
    verb: 'the plus turns in the new column slot',
    parts: [null, lap([17.5, 12], 90, { as: 'plus', dur: 0.6 }), null, null],
  },
  'insert-pi': {
    verb: 'the pi rewrites and the plus pops',
    parts: [retrace({ as: 'bar' }), draw({ as: 'leg', delay: 0.1 }), draw({ as: 'leg', delay: 0.16 }), pop([17, 17.5], 1.15, { as: 'plus', delay: 0.2 })],
  },
  'insert-row-down': {
    verb: 'the arrow pushes a new row in from the bottom',
    parts: [null, nudge([12, 17.5], 0, 1.4, { as: 'arrow' }), ride([12, 9], out(0, -0.8), { as: 'row', delay: 0.1 }), ride([12, 5.8], out(0, -0.8), { as: 'row', delay: 0.1 })],
  },
  'insert-row-up': {
    verb: 'the arrow pushes a new row in from the top',
    parts: [null, nudge([12, 6.5], 0, -1.4, { as: 'arrow' }), ride([12, 15], out(0, 0.8), { as: 'row', delay: 0.1 }), ride([12, 18.3], out(0, 0.8), { as: 'row', delay: 0.1 })],
  },
  'insert-row': {
    verb: 'the plus turns in the new row slot',
    parts: [null, lap([12, 17.5], 90, { as: 'plus', dur: 0.6 }), null, null],
  },
  'insert-top-image': {
    verb: 'the image slides down over the text lines',
    parts: [null, null, ride([12, 8], out(0, -1.6), { as: 'image' })],
  },
  'inspect-code': {
    verb: 'the magnifier zooms on the code and the brackets part',
    parts: [null, swell([21, 21], [11, 11], [1, 1.06, 0.98, 1, 1], { as: 'lens' }), nudge([15.3, 11], 0.6, 0, { as: 'bracket', delay: 0.1 }), nudge([6.8, 11], -0.6, 0, { as: 'bracket', delay: 0.1 }), lap([11, 11], 180, { as: 'slash', dur: 0.7 })],
  },
  instagram: {
    verb: 'the lens focuses and the flash dot blinks',
    parts: [null, swell(C, C, [1, 0.8, 1.1, 1, 1], { as: 'lens' }), pop([17.2, 6.8], 2.2, { as: 'flash', delay: 0.2 })],
  },
  'installing-updates-01': {
    verb: 'the gear turns while the progress tray fills',
    parts: [null, lap([12, 10.8], 60, { as: 'gear', dur: 0.8 }), retrace({ as: 'tray', delay: 0.1 })],
  },
  'installing-updates': {
    verb: 'the gear and its hub turn a full lap',
    parts: [lap([12, 10.8], -360, { as: 'hub', dur: 1 }), lap([12, 10.8], 360, { as: 'gear', dur: 1 }), null],
  },
  'installing-updates-02': {
    verb: 'the cog spins a sixth and the tray dips',
    parts: [null, lap([12, 10.5], 60, { as: 'cog', dur: 0.7 }), tray({ delay: 0.3 })],
  },

  // --- antennas, internet --------------------------------------------------------------------
  'internet-antenna-01': {
    verb: 'the arcs broadcast from the mast, inside first',
    parts: [null, pop(C, 1.25, { as: 'dot' }), wave([12, 10], { delay: 0.2 }), wave([12, 11], { delay: 0.1 })],
  },
  'internet-antenna': {
    verb: 'the mast hums and the arcs flicker',
    parts: [shake([12, 18], { as: 'mast', dur: 0.4 }), null, dim({ as: 'arc', delay: 0.1 }), dim({ as: 'arc' })],
  },
  'internet-antenna-02': {
    verb: 'the arcs broadcast over the stand',
    parts: [pop(C, 1.25, { as: 'dot' }), wave([12, 10], { delay: 0.2 }), wave([12, 11], { delay: 0.1 }), null, null],
  },
  'internet-antenna-03': {
    verb: 'the arcs fan out over the mast',
    parts: [wave([12, 10], { delay: 0.14 }), wave([12, 11]), null],
  },
  'internet-antenna-04': {
    verb: 'the tower sends three arcs out from the top',
    parts: [pop([12, 8], 1.25, { as: 'dot' }), wave([12, 8], { delay: 0.1 }), wave([12, 8], { delay: 0.2 }), null, null, null],
  },
  internet: {
    verb: 'the globe turns on its axis',
    parts: [null, { as: 'meridian', origin: C, transform: ['scaleX(1)', 'scaleX(0.1)', 'scaleX(1.6)', 'scaleX(1)'], times: [0, 0.33, 0.66, 1], ease: 'easeInOut', dur: 0.9 }, flex('X', C, C, [1, 0.94, 1.03, 1, 1], { as: 'equator', delay: 0.1 })],
  },
  investigation: {
    verb: 'the magnifier scans over the report',
    parts: [null, ride([16, 17], [[0, 0], [-1.4, -1], [0, -1.6], [0.4, -0.4], [0, 0]], { as: 'lens', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }), retrace({ as: 'line' }), retrace({ as: 'line', delay: 0.1 })],
  },

  // --- invoices -------------------------------------------------------------------------------
  'invoice-01': {
    verb: 'the line items write in',
    parts: [null, retrace({ as: 'line', delay: 0.1 }), retrace({ as: 'line' })],
  },
  'invoice-02': {
    verb: 'the dollar sign flips and the lines rewrite',
    parts: [null, retrace({ as: 'line' }), retrace({ as: 'line', delay: 0.06 }), flip([14.5, 12.5], 1, { as: 'dollar', delay: 0.1 })],
  },
  'invoice-03': {
    verb: 'the receipt curl unrolls and the dollar sign hops',
    parts: [around([18, 8], [20, 5], [0, -14, 6, -2, 0], { as: 'curl' }), null, retrace({ as: 'line' }), retrace({ as: 'line', delay: 0.06 }), hop([12.5, 13.5], 1, { as: 'dollar', delay: 0.1 })],
  },
  'invoice-04': {
    verb: 'the receipt prints out of the slot',
    parts: [ride([12, 14.1], out(0, 1.2), { as: 'paper' }), null, ride([10.5, 10], out(0, 1.2), { as: 'paper' }), ride([11, 14], out(0, 1.2), { as: 'paper' })],
  },
  invoice: {
    verb: 'the dollar sign rewrites on the receipt',
    parts: [null, null, sweep({ as: 'dollar' })],
  },
  ipod: {
    verb: 'the click wheel turns and the screen lights',
    parts: [null, lap([12, 16], 360, { as: 'wheel', dur: 0.9 }), blink({ as: 'screen' })],
  },
  'iris-scan': {
    verb: 'the scan line sweeps down over the eye',
    parts: [pop(C, 1.04, { as: 'frame', delay: 0.3 }), ride(C, [[0, 0], [0, -5], [0, 5], [0, 0], [0, 0]], { as: 'scan', ease: 'easeInOut', dur: 0.9 }), flex('Y', C, C, [1, 0.2, 1, 1, 1], { as: 'eye', dur: 0.5, delay: 0.2 })],
  },
  island: {
    verb: 'the palm sways over the island',
    parts: [null, null, null, around([12, 15], [14, 10], [0, -6, 4, -2, 0], { as: 'trunk' }), around([12, 15], [15.6, 5.5], [0, -10, 7, -3, 0], { as: 'leaves' })],
  },
  'iteration-ccw': {
    verb: 'the loop turns back counter-clockwise',
    parts: [around([12, 10], [12, 10], [0, -40, 6, -2, 0], { as: 'loop' }), ride([18, 18], out(-1.2, 0), { as: 'arrow', delay: 0.1 })],
  },
  'iteration-cw': {
    verb: 'the loop turns forward clockwise',
    parts: [around([12, 10], [12, 10], [0, 40, -6, 2, 0], { as: 'loop' }), ride([6, 18], out(1.2, 0), { as: 'arrow', delay: 0.1 })],
  },
  jar: {
    verb: 'the measuring marks fill up the jar',
    parts: [null, flex('Y', [17.5, 18], [17.5, 13], [1, 0.2, 1.06, 1, 1], { as: 'marks' })],
  },
  'java-script': {
    verb: 'the JS letters hop in turn',
    parts: [null, hop([9.9, 15], 1, { as: 'letter' }), hop([16.7, 15], 1, { as: 'letter', delay: 0.1 })],
  },
  java: {
    verb: 'the steam rises off the cup',
    parts: [null, null, null, fall([16.4, 4.8], 0, -2, { as: 'steam', delay: 0.1 }), fall([12, 5.1], 0, -2, { as: 'steam' })],
  },
  'job-link': {
    verb: 'the link swings on the briefcase',
    parts: [null, around([16, 18.5], [17.5, 18.5], [0, -20, 12, -4, 0], { as: 'link' }), ride([11.5, 4.3], out(0, -0.8), { as: 'handle' })],
  },
  'job-search': {
    verb: 'the magnifier zooms over the briefcase',
    parts: [null, swell([22, 22], [18, 18], [1, 1.2, 0.95, 1.03, 1], { as: 'lens' }), null],
  },
  'job-share': {
    verb: 'the share arrow shoots out from the briefcase',
    parts: [null, ride([17.5, 17.5], out(1, -1), { as: 'share' }), ride([11.5, 3.8], out(0, -0.8), { as: 'handle', delay: 0.1 })],
  },
  'jogger-pants': {
    verb: 'the pants stride and the tie bounces',
    parts: [{ as: 'pants', origin: [12, 5], transform: ['skewX(0deg)', 'skewX(-6deg)', 'skewX(5deg)', 'skewX(-2deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, hop([12.5, 7.5], 0.8, { as: 'tie' })],
  },
  'join-bevel': {
    verb: 'the bevel corner cuts in and out',
    parts: [swell([2, 22], C, [1, 0.94, 1.03, 1, 1], { as: 'join' })],
  },
  'join-round': {
    verb: 'the rounded corner swings around its bend',
    parts: [around([2, 22], C, [0, -6, 4, -1, 0], { as: 'join' })],
  },
  'join-straight': {
    verb: 'the straight corner stretches its two arms',
    parts: [{ ...flex('X', [2, 22], C, [1, 1.08, 0.97, 1, 1], { as: 'join' }) }],
  },
}

export default settleSpecs(specs)
