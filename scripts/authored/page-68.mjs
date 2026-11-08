/**
 * Page 68 — tetris → tick-03.
 *
 * Gallery page (80 public icons). Visible handcrafted original skipped:
 * tick-02. The hidden handcrafted thumbs-up sits in this span and is skipped
 * too.
 *
 * Text tools act out their formatting: alignment lines shrink toward the
 * edge they align to, bold thickens, italic leans, underline / strike draw,
 * indents push the block, sub- and superscript drop or lift their small
 * digit. Thumbs bob up or down. 3D tools rotate, scale or move their cube.
 *
 * Identical-geometry pairs get different jobs: three-finger / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  HOLD_E,
  HOLD_T,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flex,
  flip,
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
  swing,
  tap,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
/** A text line shrinking toward an anchor x (alignment edge) and regrowing. */
const toward = (ax, c, delay = 0) => scaleFrom('X', [ax, c[1]], c, [1, 0.45, 1.05, 1], { as: 'line', times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], delay, dur: 0.6 })
const thumb = (c, dy, o = {}) => ride(c, [[0, 0], [0, dy], [0, -dy * 0.2], [0, dy * 0.5], [0, 0]], { as: 'thumb', times: [0, 0.24, 0.5, 0.72, 1], ease: 'easeInOut', dur: 0.66, ...o })

// ---------------------------------------------------------------------------

const specs = {
  tetris: {
    verb: 'the falling block drops into the gap and the row settles',
    parts: [ride([9, 7], [[0, 0], [0, -2], [0, 0.4], [0, 0], [0, 0]], { as: 'block', times: [0, 0.3, 0.6, 0.86, 1] }), hop([15, 15], 0.6, { as: 'block', delay: 0.3 }), beat([15, 19], { delay: 0.36 }), ride([5, 11], [[0, 0], [-1, 0], [0.2, 0], [0, 0], [0, 0]], { as: 'block', delay: 0.1 })],
  },

  // --- text alignment ---------------------------------------------------------------------------------
  'text-align-center': {
    verb: 'the lines pinch in toward the centre one after another',
    parts: [0, 0.08, 0.16, 0.24].map((d, i) => toward(12, [12, [3, 9, 15, 21][i]], d)),
  },
  'text-align-justify-center': {
    verb: 'the full-width lines pinch toward the centre and stretch back',
    parts: [0, 0.08, 0.16, 0.24].map((d, i) => flex('X', [12, [3, 9, 15, 21][i]], [12, [3, 9, 15, 21][i]], [1, 0.6, 1.04, 1, 1], { as: 'line', delay: d })),
  },
  'text-align-justify-left': {
    verb: 'the short lines and long lines shrink back to the left edge',
    parts: [toward(3, [7, 3]), toward(3, [7, 9], 0.08), toward(3, [12, 15], 0.16), toward(3, [12, 21], 0.24)],
  },
  'text-align-justify-right': {
    verb: 'the short lines and long lines shrink back to the right edge',
    parts: [toward(21, [17, 3]), toward(21, [17, 9], 0.08), toward(21, [12, 15], 0.16), toward(21, [12, 21], 0.24)],
  },
  'text-align-left-01': {
    verb: 'the lines shrink back to the margin bar, which nods',
    parts: [toward(9, [14, 4.5]), toward(9, [11.5, 9.5], 0.08), toward(9, [14, 14.5], 0.16), toward(9, [11.5, 19.5], 0.24), flex('Y', [5, 12], [5, 12], [1, 0.9, 1.04, 1, 1], { as: 'margin', delay: 0.1 })],
  },
  'text-align-left': {
    verb: 'the lines shrink back to the left edge one after another',
    parts: [toward(3, [12, 3]), toward(3, [7, 9], 0.08), toward(3, [12, 15], 0.16), toward(3, [7, 21], 0.24)],
  },
  'text-align-right-01': {
    verb: 'the lines shrink back to the right margin bar, which nods',
    parts: [toward(15, [10, 4.5]), toward(15, [12.5, 9.5], 0.08), toward(15, [10, 14.5], 0.16), toward(15, [12.5, 19.5], 0.24), flex('Y', [19, 12], [19, 12], [1, 0.9, 1.04, 1, 1], { as: 'margin', delay: 0.1 })],
  },
  'text-align-right': {
    verb: 'the lines shrink back to the right edge one after another',
    parts: [toward(21, [12, 3]), toward(21, [17, 9], 0.08), toward(21, [12, 15], 0.16), toward(21, [17, 21], 0.24)],
  },

  // --- text styles ---------------------------------------------------------------------------------
  'text-all-caps': {
    verb: 'the two capitals hop in turn',
    parts: [hop([6.3, 12], 1.1, { as: 'letter' }), hop([17.7, 12], 1.1, { as: 'letter', delay: 0.12 })],
  },
  'text-bold': {
    verb: 'the B thickens and swells',
    parts: [{ as: 'b', origin: [11, 7.5], transform: ['scale(1)', 'scale(1.12)', 'scale(0.98)', 'scale(1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }, { as: 'b', origin: [11.5, 16.5], transform: ['scale(1)', 'scale(1.12)', 'scale(0.98)', 'scale(1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }],
  },
  'text-centerline-center-top': {
    verb: 'the arrow drops toward the centre line and the side ticks pull in',
    parts: [nudge([4, 3.5], 0.6, 0, { as: 'tick' }), nudge([20, 3.5], -0.6, 0, { as: 'tick' }), nudge([4, 9.5], 0.6, 0, { as: 'tick' }), nudge([20, 9.5], -0.6, 0, { as: 'tick' }), line(0.2), line(0.28), nudge([12, 7], 0, 1.2, { as: 'arrow' })],
  },
  'text-centerline-left': {
    verb: 'the arrow pushes left toward the short lines',
    parts: [null, null, toward(3, [6, 9], 0.1), toward(3, [6, 15], 0.16), nudge([17, 12], -1.2, 0, { as: 'arrow' })],
  },
  'text-centerline-middle': {
    verb: 'the diamond marker pops on the centre line and the ticks pull in',
    parts: [null, null, nudge([4, 9], 0.6, 0, { as: 'tick' }), nudge([20, 9], -0.6, 0, { as: 'tick' }), nudge([4, 15], 0.6, 0, { as: 'tick' }), nudge([20, 15], -0.6, 0, { as: 'tick' }), lap(C, 90, { as: 'marker', dur: 0.6 })],
  },
  'text-centerline-right': {
    verb: 'the arrow pushes right toward the short lines',
    parts: [null, null, toward(21, [18, 9], 0.1), toward(21, [18, 15], 0.16), nudge([7, 12], 1.2, 0, { as: 'arrow' })],
  },
  'text-check': {
    verb: 'the check draws after the text lines',
    parts: [draw({ as: 'check', delay: 0.24 }), line(0), line(0.06), line(0.12)],
  },
  'text-circle': {
    verb: 'the letters rewrite inside the ring',
    parts: [line(0, { as: 'text', dur: 0.6 }), beat(C, { delay: 0.3 })],
  },
  'text-clear': {
    verb: 'the X twists and the T dims',
    parts: [null, { as: 'dim', opacity: [1, 0.3, 0.3, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, delay: 0.1 }, lap([16.5, 17.5], 90, { as: 'x', dur: 0.6 })],
  },
  'text-color': {
    verb: 'the colour bar draws under the A',
    parts: [draw({ as: 'colour', delay: 0.1 }), hop([12, 10.5], 0.8, { as: 'a' }), hop([12, 11], 0.8, { as: 'a' })],
  },
  'text-creation': {
    verb: 'the corner handles pop and the T rewrites',
    parts: [loop({ as: 'frame' }), line(0.1, { as: 't', dur: 0.6 }), pop([20, 4], 1.2, { as: 'handle' }), pop([4, 4], 1.2, { as: 'handle', delay: 0.08 }), pop([20, 20], 1.2, { as: 'handle', delay: 0.16 }), pop([4, 20], 1.2, { as: 'handle', delay: 0.24 })],
  },
  'text-firstline-left': {
    verb: 'the first-line arrow pushes left and its lines shrink after it',
    parts: [toward(3, [6, 3.5], 0.1), toward(3, [6, 9.5], 0.16), null, null, nudge([17, 6.5], -1.2, 0, { as: 'arrow' })],
  },
  'text-firstline-right': {
    verb: 'the first-line arrow pushes right and its lines shrink after it',
    parts: [toward(21, [18, 3.5], 0.1), toward(21, [18, 9.5], 0.16), null, null, nudge([7, 6.5], 1.2, 0, { as: 'arrow' })],
  },
  'text-font': {
    verb: 'the big A and small a hop in turn',
    parts: [hop([8, 12], 1, { as: 'letter' }), hop([18.6, 14.3], 1, { as: 'letter', delay: 0.12 })],
  },
  'text-footnote': {
    verb: 'the footnote mark pops beside the T',
    parts: [pop([19.8, 8.4], 1.3, { as: 'note' }), null, line(0.1, { as: 't' }), null],
  },
  'text-indent-01': {
    verb: 'the arrows push the block right and back',
    parts: [ride([17, 4.5], out(1, 0), { as: 'block', delay: 0.06 }), ride([15.5, 9.5], out(1, 0), { as: 'block', delay: 0.06 }), ride([17, 14.5], out(1, 0), { as: 'block', delay: 0.06 }), ride([15.5, 19.5], out(1, 0), { as: 'block', delay: 0.06 }), nudge([5, 7.8], 1, 0, { as: 'arrow' }), nudge([5, 15.3], 1, 0, { as: 'arrow' })],
  },
  'text-indent-less': {
    verb: 'the chevron pulls left and the lines follow',
    parts: [ride([6.5, 4.5], out(-1, 0), { as: 'line', delay: 0.08 }), ride([7.5, 9.5], out(-1, 0), { as: 'line', delay: 0.08 }), ride([6.5, 14.5], out(-1, 0), { as: 'line', delay: 0.08 }), ride([7.5, 19.5], out(-1, 0), { as: 'line', delay: 0.08 }), null, nudge([18.3, 12], -1.2, 0, { as: 'chevron' })],
  },
  'text-indent-more': {
    verb: 'the chevron pushes right and the lines follow',
    parts: [ride([17.5, 4.5], out(1, 0), { as: 'line', delay: 0.08 }), ride([16.5, 9.5], out(1, 0), { as: 'line', delay: 0.08 }), ride([17.5, 14.5], out(1, 0), { as: 'line', delay: 0.08 }), ride([16.5, 19.5], out(1, 0), { as: 'line', delay: 0.08 }), null, nudge([5.8, 12], 1.2, 0, { as: 'chevron' })],
  },
  'text-indent': {
    verb: 'the chevron nudges in and the first lines shift with it',
    parts: [ride([16, 6], out(1, 0), { as: 'line', delay: 0.06 }), null, null, nudge([4.8, 6.5], 1.2, 0, { as: 'chevron' })],
  },
  'text-italic-slash': {
    verb: 'the slash cuts across the leaning I',
    parts: [null, draw({ as: 'slash' }), null, wiggle([10, 20], [10, 12], 6, { as: 'i', delay: 0.14 })],
  },
  'text-italic': {
    verb: 'the I leans further over and straightens',
    parts: [wiggle([10, 20], [15.5, 4], 6, { as: 'i' }), wiggle([10, 20], [12, 12], 6, { as: 'i' }), null],
  },
  'text-kerning': {
    verb: 'the two letters slide apart along the kerning bar',
    parts: [ride([18, 9], out(1, 0), { as: 'letter' }), ride([6, 9], out(-1, 0), { as: 'letter' }), flex('X', [17, 19.5], [17, 19.5], [1, 1.12, 0.96, 1, 1], { as: 'bar' }), null],
  },
  'text-number-sign': {
    verb: 'the number sign pops beside the text and the bar draws',
    parts: [null, draw({ as: 'bar', delay: 0.14 }), pop([19, 7], 1.2, { as: 'sign' })],
  },
  'text-select': {
    verb: 'the dashed selection traces around the lines',
    parts: [loop({ as: 'selection' }), line(0.1)],
  },
  'text-selection': {
    verb: 'the cursor clicks beside the I-beam',
    parts: [flex('Y', [7, 12], [7, 12], [1, 0.9, 1.04, 1, 1], { as: 'beam' }), { as: 'pointer', origin: [17.6, 16.4], transform: ['translate(0px, 0px) scale(1)', 'translate(-0.7px, -0.7px) scale(0.92)', 'translate(0.1px, 0.1px) scale(1.02)', 'translate(0px, 0px) scale(1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.5 }],
  },
  'text-smallcaps': {
    verb: 'the big capital and the small capital hop in turn',
    parts: [hop([8, 10.5], 1, { as: 'letter' }), hop([18, 16.5], 1, { as: 'letter', delay: 0.12 })],
  },
  'text-square': {
    verb: 'the letters rewrite inside the tile',
    parts: [line(0, { as: 'text', dur: 0.6 }), null],
  },
  'text-strikethrough': {
    verb: 'the strike line draws across the S',
    parts: [draw({ as: 'strike', delay: 0.1 }), line(0, { as: 's', dur: 0.6 })],
  },
  'text-subscript': {
    verb: 'the small digit drops below the T',
    parts: [null, null, null, nudge([20, 17.7], 0, 1.2, { as: 'sub' })],
  },
  'text-superscript': {
    verb: 'the small digit lifts above the T',
    parts: [null, null, null, nudge([20.5, 8.7], 0, -1.2, { as: 'sup' })],
  },
  'text-tracking': {
    verb: 'the letters spread apart along the tracking bar',
    parts: [flex('X', [12, 19], [12, 19], [1, 1.1, 0.97, 1, 1], { as: 'bar' }), ride([17.5, 8.5], out(1, 0), { as: 'letter' }), ride([6.5, 8.5], out(-1, 0), { as: 'letter' })],
  },
  'text-underline': {
    verb: 'the underline draws under the U',
    parts: [hop([12, 10.5], 0.6, { as: 'u', delay: 0.3 }), draw({ as: 'underline' })],
  },
  'text-variable-front': {
    verb: 'the two letters hop and the slider dot travels the bar',
    parts: [hop([6, 9], 1, { as: 'letter' }), hop([18, 9], 1, { as: 'letter', delay: 0.12 }), null, null, ride([12, 19], [[0, 0], [-5, 0], [5, 0], [0, 0], [0, 0]], { as: 'dot', ease: INOUT, dur: 0.9 })],
  },
  'text-vertical-alignment': {
    verb: 'the lines gather toward the middle line and the arrows point in',
    parts: [ride([17.5, 4], out(0, 1.2), { as: 'line' }), ride([17.5, 8], out(0, 0.8), { as: 'line' }), flex('X', [12, 12], [12, 12], [1, 1.04, 0.98, 1, 1], { as: 'mid' }), ride([17.5, 20], out(0, -1.2), { as: 'line' }), ride([17.5, 16], out(0, -0.8), { as: 'line' }), nudge([5, 5.5], 0, 1, { as: 'arrow' }), nudge([5, 18.5], 0, -1, { as: 'arrow' })],
  },
  'text-wrap': {
    verb: 'the wrap arrow loops back around to the next line',
    parts: [null, null, null, line(0, { as: 'wrap', dur: 0.7 })],
  },
  text: {
    verb: 'the T rewrites on its base',
    parts: [draw({ as: 'base', delay: 0.2 }), line(0, { as: 't', dur: 0.6 })],
  },
  'the-prophets-mosque': {
    verb: 'the dome rises and the minaret crescent rocks',
    parts: [null, null, wiggle([19, 6], [19, 4], 14, { as: 'crescent' }), null, { ...scaleFrom('Y', [11, 17], [11, 12.5], [1, 0.8, 1.04, 1], { as: 'dome', times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT] }) }],
  },
  theater: {
    verb: 'the curtains part and the stage lights flicker',
    parts: [blink({ as: 'light', opacity: [1, 0.2, 1, 1, 1] }), blink({ as: 'light', opacity: [1, 0.2, 1, 1, 1], delay: 0.1 }), blink({ as: 'light', opacity: [1, 0.2, 1, 1, 1], delay: 0.2 }), ride([18, 7], out(1, 0), { as: 'curtain' }), ride([20.5, 9], out(1, 0), { as: 'curtain' }), ride([6, 7], out(-1, 0), { as: 'curtain' }), ride([3.5, 9], out(-1, 0), { as: 'curtain' })],
  },
  'thermometer-cold': {
    verb: 'the mercury drops and the snowflake spins',
    parts: [{ ...scaleFrom('Y', [17.5, 20], [17.5, 12], [1, 0.9, 1.02, 1], { as: 'thermometer', times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT] }) }, lap([7, 11.5], 60, { as: 'flake', dur: 0.7 })],
  },
  'thermometer-warm': {
    verb: 'the mercury rises and the sun rays pulse',
    parts: [{ ...scaleFrom('Y', [16.5, 20], [16.5, 12], [1, 1.04, 0.99, 1], { as: 'thermometer', times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT] }) }, wave([7.5, 11], { as: 'sun' })],
  },
  thermometer: {
    verb: 'the thermometer tips and the level line rewrites',
    parts: [wiggle([4, 20], C, 5, { as: 'thermometer' }), line(0.1, { as: 'level' }), line(0.16, { as: 'level' })],
  },
  'third-bracket-circle': {
    verb: 'the curly braces flex inside the ring',
    parts: [flex('X', C, C, [1, 1.18, 0.94, 1, 1], { as: 'braces' }), beat(C, { delay: 0.3 })],
  },
  'third-bracket-square': {
    verb: 'the curly braces pinch in inside the tile',
    parts: [flex('X', C, C, [1, 0.78, 1.04, 1, 1], { as: 'braces' }), null],
  },
  'third-bracket': {
    verb: 'the curly braces push apart',
    parts: [nudge([20.1, 12], 1, 0, { as: 'brace' }), nudge([3.9, 12], -1, 0, { as: 'brace' })],
  },
  thread: {
    verb: 'the thread unwinds and the spool ends nod',
    parts: [line(0, { as: 'thread', dur: 0.7 }), beat([10.5, 20.5], { delay: 0.2 }), beat([10.5, 3.5], { delay: 0.2 })],
  },
  'threads-ellipse': {
    verb: 'the @ mark rewrites inside the ring',
    parts: [beat(C, { delay: 0.3 }), line(0, { as: 'mark', dur: 0.7 })],
  },
  'threads-rectangle': {
    verb: 'the @ mark spins a full turn inside the tile',
    parts: [null, lap([12.1, 12], 360, { as: 'mark', dur: 0.9 })],
  },
  threads: {
    verb: 'the @ mark rewrites itself',
    parts: [line(0, { as: 'mark', dur: 0.7 })],
  },
  'three-circle': {
    verb: 'the three hops inside the ring',
    parts: [hop(C, 1.3, { as: 'three' }), beat(C, { delay: 0.3 })],
  },
  'three-square': {
    verb: 'the three rewrites inside the tile',
    parts: [null, line(0, { as: 'three', dur: 0.6 })],
  },

  // --- 3D ---------------------------------------------------------------------------------
  'three-d-move': {
    verb: 'the axis arrows push out from the cube centre',
    parts: [beat([12, 12.8], { delay: 0.2 }), nudge([12, 4.5], 0, -1, { as: 'arrow' }), nudge([19.3, 19.3], 0.9, 0.6, { as: 'arrow' }), nudge([4.7, 19.3], -0.9, 0.6, { as: 'arrow' })],
  },
  'three-d-printer': {
    verb: 'the print head slides along the gantry and the print rewrites',
    parts: [null, null, ...[[12, 6], [12, 11.5], [12, 15.3]].map((c) => ride(c, [[0, 0], [2, 0], [-2, 0], [0, 0], [0, 0]], { as: 'head', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 })), retrace({ as: 'print', delay: 0.1, dur: 0.8 }), ride([14, 5], [[0, 0], [2, 0], [-2, 0], [0, 0], [0, 0]], { as: 'head', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 }), ride([14, 7.5], [[0, 0], [2, 0], [-2, 0], [0, 0], [0, 0]], { as: 'head', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 })],
  },
  'three-d-rotate': {
    verb: 'the globe rings rotate around the sphere',
    parts: [null, { as: 'ring', origin: [12, 14.4], transform: ['scaleY(1)', 'scaleY(-1)', 'scaleY(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.9 }, { as: 'ring', origin: [9.2, 12], transform: ['scaleX(1)', 'scaleX(-1)', 'scaleX(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.9, delay: 0.1 }],
  },
  'three-d-scale': {
    verb: 'the corner arrows push outward as the cube scales',
    parts: [{ as: 'cube', origin: [12, 12.8], transform: ['scale(1)', 'scale(1.12)', 'scale(0.97)', 'scale(1)'], times: [0, 0.32, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }, nudge([19.3, 19], 0.8, 0.8, { as: 'arrow' }), nudge([4.8, 19], -0.8, 0.8, { as: 'arrow' }), nudge([12, 5], 0, -1, { as: 'arrow' })],
  },
  'three-d-view': {
    verb: 'the cube turns in the dashed viewport',
    parts: [flip([12, 12], 1, { as: 'cube' }), flip([12, 13.3], 1, { as: 'cube' }), loop({ as: 'viewport' })],
  },

  // --- three-finger gestures ---------------------------------------------------------------------------------
  'three-finger': {
    verb: 'the three fingers tap down together',
    parts: [tap([11.9, 12])],
  },
  'three-finger-01': {
    verb: 'the three fingers swipe up and back',
    parts: [nudge([11.9, 12], 0, -1.6, { as: 'hand' })],
  },
  'three-finger-02': {
    verb: 'the three fingers swipe left and back',
    parts: [nudge([11.5, 12], -1.6, 0, { as: 'hand' })],
  },
  'three-finger-03': {
    verb: 'the three fingers swipe down and back',
    parts: [nudge([12.2, 12], 0, 1.6, { as: 'hand' })],
  },
  'three-finger-04': {
    verb: 'the three fingers swipe right and back',
    parts: [nudge([11.6, 12.1], 1.6, 0, { as: 'hand' })],
  },
  'three-finger-05': {
    verb: 'the hand pinches its three fingers in and opens',
    parts: [{ as: 'hand', origin: [12, 11.9], transform: ['scale(1)', 'scale(0.88)', 'scale(1.04)', 'scale(1)'], times: [0, 0.32, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }],
  },

  // --- thumbs ---------------------------------------------------------------------------------
  'thumbs-down-ellipse': {
    verb: 'the thumb jabs down inside the ring',
    parts: [beat(C, { delay: 0.3 }), thumb([12.6, 12.5], 1.2)],
  },
  'thumbs-down-rectangle': {
    verb: 'the thumb jabs down inside the tile',
    parts: [null, thumb([12.1, 12], 1.2)],
  },
  'thumbs-down': {
    verb: 'the hand jabs a thumbs-down, cuff and all',
    parts: [thumb([4.5, 8.5], 1.4), thumb([14.6, 12.1], 1.4)],
  },
  'thumbs-up-down': {
    verb: 'the up thumb rises while the down thumb drops',
    parts: [thumb([7.1, 7.5], -1.2), thumb([16.9, 16.5], 1.2, { delay: 0.12 })],
  },
  'thumbs-up-ellipse': {
    verb: 'the thumb pops up inside the ring',
    parts: [beat(C, { delay: 0.3 }), thumb([12.6, 11.5], -1.2)],
  },
  'thumbs-up-rectangle': {
    verb: 'the thumb pops up inside the tile',
    parts: [null, thumb([12.1, 12], -1.2)],
  },
  'tic-tac-toe': {
    verb: 'the O and X are played one after the other',
    parts: [null, null, pop([5.5, 18.5], 1.3, { as: 'o' }), lap([18.5, 5.5], 90, { as: 'x', delay: 0.2, dur: 0.6 })],
  },
  'tick-01': {
    verb: 'the tick writes itself',
    parts: [draw({ as: 'tick' })],
  },
  'tick-03': {
    verb: 'the tick badge stamps down',
    parts: [stamp([12, 11.8], { as: 'badge' })],
  },
}

export default settleSpecs(specs)
