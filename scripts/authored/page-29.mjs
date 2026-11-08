/**
 * Page 29 — file-database → filter-remove.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted file-download and file-upload sit in this span.
 *
 * The file family keeps the sheet still and lets the badge act, with one
 * gesture per badge kind: arrows push, locks rattle or click, currency signs
 * rewrite/flip/hop/stamp, media badges pop or play, sync turns, pens
 * scribble. Empty files fold their corner instead. Films and filters get
 * their own reel spin, sliders and lines.
 *
 * Identical-geometry pairs get different jobs: file-empty / file-empty-01,
 * files / files-01, film / film-01, film-roll / film-roll-01.
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
  hold,
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
const TURN = [0, 72, 252, 370.8, 360]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const scribble = (origin, o = {}) => ride(origin, [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen', ...o })
const page = (o = {}) => beat(C, { as: 'page', delay: 0.3, ...o })
const fold = (o = {}) => retrace({ as: 'fold', ...o })
const click = (center, o = {}) => ride(center, [[0, 0], [0, -1.2], [0, 0.25], [0, 0], [0, 0]], { as: 'shackle', times: [0, 0.3, 0.52, 0.76, 1], dur: 0.56, ...o })
const slide = (c, dx, o = {}) => hold(c, dx, 0, { as: 'knob', ...o })

// ---------------------------------------------------------------------------

const specs = {
  'file-database': {
    verb: 'the database discs stack up one after another beside the file',
    parts: [ride([17, 18.3], out(0, -0.8), { as: 'disc', delay: 0.16 }), null, ride([17, 14.5], out(0, -0.8), { as: 'disc' }), ride([17, 18.3], out(0, -0.8), { as: 'disc', delay: 0.08 })],
  },
  'file-diff': {
    verb: 'the plus turns and the minus under it redraws',
    parts: [lap([6, 15], 90, { as: 'plus', dur: 0.62 }), draw({ as: 'minus', delay: 0.2 }), null],
  },
  'file-digit': {
    verb: 'the 0 and 1 digits hop in turn',
    parts: [hop([5, 19], 1), hop([13, 22], 1, { delay: 0.12 }), hop([12, 18.9], 1, { delay: 0.12 }), null],
  },
  'file-dollar': {
    verb: 'the dollar sign rewrites beside the file',
    parts: [null, retrace({ as: 'sign', dur: 0.74 })],
  },
  'file-down': {
    verb: 'the arrow drops down the page',
    parts: [page(), nudge([12, 15], 0, 1.6, { as: 'arrow' })],
  },
  'file-edit': {
    verb: 'the pencil scribbles on the corner of the file',
    parts: [scribble([17, 18]), null],
  },
  'file-empty-01': {
    verb: 'the empty page folds its corner and settles',
    parts: [{ ...beat(C, { as: 'page' }), transform: ['scale(1)', 'scale(0.94)', 'scale(1.03)', 'scale(1)'] }],
  },
  'file-empty-02': {
    verb: 'the empty page flips over',
    parts: [flip(C, 1, { as: 'page' })],
  },
  'file-empty': {
    verb: 'the empty page outline rewrites itself',
    parts: [retrace({ as: 'page', dur: 0.8 })],
  },
  'file-euro': {
    verb: 'the euro sign hops beside the file',
    parts: [null, fold({ delay: 0.1 }), hop([18, 18], 1.2, { as: 'sign' })],
  },
  'file-exclamation-point': {
    verb: 'the bang stretches on the page and the dot answers',
    parts: [page({ delay: 0.36 }), flex('Y', [12, 15], [12, 13.5], [1, 1.3, 0.9, 1.04, 1], { as: 'stem' }), hop([12, 18.5], 1.2, { as: 'dot', delay: 0.18 })],
  },
  'file-export': {
    verb: 'the arrow pushes out of the file to the right',
    parts: [null, nudge([16, 19], 1.6, 0, { as: 'arrow' })],
  },
  'file-favourite': {
    verb: 'the heart beats on the corner of the file',
    parts: [null, { as: 'heart', origin: [8, 5.2], transform: ['scale(1)', 'scale(1.2)', 'scale(1)', 'scale(1.12)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 1], ease: 'easeOut', dur: 0.7 }],
  },
  'file-headphone': {
    verb: 'the headphone cups bob to the beat',
    parts: [hop([4.5, 20], 0.8), hop([11.5, 20], 0.8, { delay: 0.12 }), beat([8, 15], { as: 'band', delay: 0.06 }), null],
  },
  'file-heart': {
    verb: 'the heart hops on the corner of the file',
    parts: [hop([7.5, 18.5], 1.2, { as: 'heart' }), null],
  },
  'file-image': {
    verb: 'the sun pops and the mountain line redraws',
    parts: [pop([9.5, 12.5], 1.4, { as: 'sun' }), draw({ as: 'mountain', delay: 0.1 }), null],
  },
  'file-import': {
    verb: 'the arrow pulls into the file from the right',
    parts: [null, nudge([16, 19], -1.6, 0, { as: 'arrow' })],
  },
  'file-input': {
    verb: 'the arrow pushes into the file from the left',
    parts: [nudge([9, 15], 1.6, 0, { as: 'arrow' }), null],
  },
  'file-key': {
    verb: 'the key turns on the corner of the file',
    parts: [null, around([7.5, 18], [7.5, 18], [0, -24, 8, -3, 0], { as: 'key' })],
  },
  'file-link': {
    verb: 'the chain links rock as they connect',
    parts: [null, around([8.5, 6.5], [8.5, 6.5], [0, -18, 10, -4, 0], { as: 'link' })],
  },
  'file-lock': {
    verb: 'the shackle on the file clicks shut',
    parts: [null, click([7, 18])],
  },
  'file-locked': {
    verb: 'the lock beside the file rattles',
    parts: [null, shake([16.5, 17.5], { as: 'lock' })],
  },
  'file-management': {
    verb: 'the gear on the file turns a full revolution',
    parts: [null, lap([8, 6.5], 360, { as: 'gear', dur: 1 })],
  },
  'file-minus': {
    verb: 'the minus squeezes short above the file',
    parts: [null, flex('X', [8, 6], [8, 6], [1, 0.25, 1.12, 0.98, 1], { as: 'minus' })],
  },
  'file-music': {
    verb: 'the note bounces on the file',
    parts: [null, hop([16.5, 18], 1.2, { as: 'note' })],
  },
  'file-not-found': {
    verb: 'the slash cuts across and the file fades',
    parts: [draw({ as: 'slash' }), dim({ as: 'file', delay: 0.1 }), dim({ as: 'file', delay: 0.1 })],
  },
  'file-paste': {
    verb: 'the arrow pushes back into the corner to paste',
    parts: [null, nudge([8, 6], -1.2, 0, { as: 'arrow' })],
  },
  'file-pen': {
    verb: 'the pen scribbles on the corner of the file',
    parts: [null, scribble([7.5, 18])],
  },
  'file-pin': {
    verb: 'the pin hops on the file',
    parts: [null, hop([17, 18], 1.2, { as: 'pin' })],
  },
  'file-play': {
    verb: 'the play button pops on the file',
    parts: [page(), pop([12.3, 15], 1.3, { as: 'play' })],
  },
  'file-plus': {
    verb: 'the plus turns a quarter on the file',
    parts: [lap([12, 15], 90, { as: 'plus', dur: 0.62 }), page()],
  },
  'file-pound': {
    verb: 'the pound sign stamps beside the file',
    parts: [stamp([18.5, 17.9], { as: 'sign' }), null, fold({ delay: 0.1 })],
  },
  'file-question-mark': {
    verb: 'the question hook tilts and its dot hops',
    parts: [around([6, 18.5], [6, 15.3], [0, -12, 9, -4, 0], { as: 'hook' }), hop([6, 21.8], 1, { as: 'dot', delay: 0.2 }), null],
  },
  'file-remove': {
    verb: 'the X spins a quarter on the corner of the file',
    parts: [null, lap([7.5, 5.5], 90, { as: 'x', dur: 0.62 })],
  },
  'file-scan': {
    verb: 'the scan frame redraws around the corner',
    parts: [retrace({ as: 'frame' }), null],
  },
  'file-script': {
    verb: 'the script scroll unrolls beside the file',
    parts: [null, flex('X', [12, 19.5], [16, 19.5], [1, 0.5, 1.1, 0.98, 1], { as: 'scroll' })],
  },
  'file-search': {
    verb: 'the loupe circles over the file',
    parts: [ride([12, 15], [[0, 0], [-0.8, -0.6], [0.6, -0.8], [0.2, 0.4], [0, 0]], { as: 'loupe', dur: 0.8 }), null],
  },
  'file-security': {
    verb: 'the shield stamps beside the file',
    parts: [null, stamp([16.5, 18], { as: 'shield' })],
  },
  'file-shredder': {
    verb: 'the page drops into the shredder and the strips fall out',
    parts: [beat([12, 13], { as: 'slot', delay: 0.2 }), ride([12, 7.5], out(0, 1.4), { as: 'page' }), ride([12, 19], out(0, 1), { as: 'strips', delay: 0.12 })],
  },
  'file-signal': {
    verb: 'the signal arcs pulse beside the file',
    parts: [{ as: 'signal', origin: [9, 17.8], transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'], opacity: [1, 0.3, 1, 1], times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1], dur: 0.62 }, null],
  },
  'file-sliders': {
    verb: 'the slider knob slides along its track',
    parts: [draw({ as: 'track', delay: 0.1 }), slide([14, 16], -2.5), null],
  },
  'file-spreadsheet': {
    verb: 'the spreadsheet cells blink in',
    parts: [blink({ as: 'cells', dur: 0.6 }), page()],
  },
  'file-stack': {
    verb: 'the pages fan out from the stack and settle',
    parts: [ride([18, 7], out(0.8, -0.8), { as: 'page' }), ride(C, out(0.4, -0.4), { as: 'page', delay: 0.04 }), null],
  },
  'file-star': {
    verb: 'the star spins onto its axis beside the file',
    parts: [null, { as: 'star', origin: [16, 18.3], transform: ['rotate(0deg) scale(1)', 'rotate(36deg) scale(0.7)', 'rotate(72deg) scale(1.12)', 'rotate(72deg) scale(1)'], times: [0, 0.36, 0.76, 1], ease: [0.23, 1, 0.32, 1], dur: 0.78 }],
  },
  'file-sync': {
    verb: 'the sync arrows chase a full turn beside the file',
    parts: [null, lap([15.5, 18.5], 360, { as: 'sync', dur: 0.9 })],
  },
  'file-terminal': {
    verb: 'the prompt nudges and the cursor blinks on the file',
    parts: [nudge([9, 15], 0.8, 0, { as: 'prompt' }), blink({ as: 'cursor', dur: 0.8 }), null],
  },
  'file-type': {
    verb: 'the T stamps onto the page',
    parts: [stamp([12, 15.3], { as: 'glyph' }), null],
  },
  'file-unknown': {
    verb: 'the question mark tilts on the corner of the file',
    parts: [around([7, 11.5], [7, 6.8], [0, -12, 9, -4, 0], { as: 'mark' }), null],
  },
  'file-unlocked': {
    verb: 'the shackle beside the file lifts open',
    parts: [click([16.5, 15], { as: 'lock' }), null],
  },
  'file-up': {
    verb: 'the arrow pushes up the page',
    parts: [page(), nudge([12, 15], 0, -1.6, { as: 'arrow' })],
  },
  'file-user': {
    verb: 'the user on the page nods',
    parts: [hop([12, 14.5], 1, { as: 'head' }), retrace({ as: 'shoulders', delay: 0.1 }), null],
  },
  'file-validation': {
    verb: 'the check writes in its badge and the page answers',
    parts: [null, draw({ as: 'check' }), beat([17, 7], { as: 'badge', delay: 0.3 }), fold({ delay: 0.1 })],
  },
  'file-verified': {
    verb: 'the check writes beside the file',
    parts: [draw({ as: 'check' }), null],
  },
  'file-video-camera': {
    verb: 'the camera lens rolls and the body answers',
    parts: [beat([6.8, 19], { as: 'camera', delay: 0.2 }), ride([11.8, 19], out(0.6, 0), { as: 'lens' }), null],
  },
  'file-video': {
    verb: 'the play camera pushes forward beside the file',
    parts: [null, nudge([16.5, 19], 1, 0, { as: 'camera' })],
  },
  'file-view': {
    verb: 'the eye beside the file blinks',
    parts: [null, flex('Y', [16, 19], [16, 19], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5 }), flex('Y', [16, 19], [16, 19], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5 })],
  },
  'file-volume': {
    verb: 'the speaker pulses and the sound wave arcs out',
    parts: [{ as: 'wave', origin: [13, 18], transform: ['scale(1)', 'scale(0.8)', 'scale(1.1)', 'scale(1)'], opacity: [1, 0.2, 1, 1], times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1], dur: 0.62, delay: 0.1 }, pop([6, 18], 1.12, { as: 'speaker' }), null],
  },
  'file-x-corner': {
    verb: 'the X in the corner rattles',
    parts: [shake([18, 19.5], { as: 'x' }), null],
  },
  'file-x': {
    verb: 'the X spins a quarter on the page',
    parts: [lap([12, 15.5], 90, { as: 'x', dur: 0.62 }), page()],
  },
  'file-yen': {
    verb: 'the yen sign pops beside the file',
    parts: [pop([18, 17.5], 1.3, { as: 'sign' }), null, fold({ delay: 0.1 })],
  },
  'file-zip': {
    verb: 'the zipper pull slides down and back',
    parts: [null, retrace({ as: 'zip' }), ride([9, 19.5], out(0, -1.4), { as: 'pull' })],
  },
  file: {
    verb: 'the lines write themselves on the page',
    parts: [draw({ as: 'line' }), draw({ as: 'line', delay: 0.12 }), null],
  },
  'files-01': {
    verb: 'the front sheet slides off the back one and returns',
    parts: [ride([13.5, 10.5], out(0.8, -0.8), { as: 'back' }), ride([17.5, 5], out(0.8, -0.8), { as: 'back' }), null, draw({ as: 'lines', delay: 0.1 })],
  },
  files: {
    verb: 'the lines write on the front sheet and the back one answers',
    parts: [beat([13.5, 10.5], { as: 'back', delay: 0.3 }), null, null, draw({ as: 'lines' })],
  },
  'files-02': {
    verb: 'the sheets shuffle and the lines rewrite',
    parts: [ride([13.5, 13.5], out(0.8, 0.8), { as: 'front' }), ride([17.5, 19], out(0.8, 0.8), { as: 'front' }), null, retrace({ as: 'lines', delay: 0.1 })],
  },

  // --- film ------------------------------------------------------------------------------------
  'film-01': {
    verb: 'the film frame advances: perforations slide down',
    parts: [null, null, null, null, ride([12, 5], out(0, 1.2), { as: 'perf' }), ride([12, 19], out(0, 1.2), { as: 'perf' })],
  },
  film: {
    verb: 'the frame divider flickers like a projector',
    parts: [null, null, null, blink({ as: 'divider', dur: 0.6 }), blink({ as: 'perf', dur: 0.6, delay: 0.1 }), blink({ as: 'perf', dur: 0.6, delay: 0.1 })],
  },
  'film-02': {
    verb: 'the film strip advances sideways',
    parts: [null, null, null, null, ride([5, 12], out(1.2, 0), { as: 'perf' }), ride([19, 12], out(1.2, 0), { as: 'perf' })],
  },
  'film-roll-01': {
    verb: 'the film pulls out of the canister and winds back',
    parts: [null, null, null, null, flex('X', [13, 12.8], [17, 12.8], [1, 1.2, 0.96, 1.02, 1], { as: 'film' })],
  },
  'film-roll': {
    verb: 'the canister knob turns and the film ripples',
    parts: [beat([8.5, 13.3], { as: 'canister', delay: 0.3 }), lap([8.5, 3], 180, { as: 'knob', dur: 0.6 }), null, null, ride([17, 12.8], [[0, 0], [0, -0.6], [0, 0.6], [0, -0.2], [0, 0]], { as: 'film' })],
  },
  'film-roll-02': {
    verb: 'the reel spins a full turn and the tail unwinds',
    parts: [null, lap([10.5, 10.5], 360, { as: 'reel', dur: 0.9 }), retrace({ as: 'tail', delay: 0.1 })],
  },

  // --- filters -----------------------------------------------------------------------------------
  'filter-add': {
    verb: 'the plus turns a quarter beside the funnel',
    parts: [null, lap([17.5, 11.5], 90, { as: 'plus', dur: 0.62 })],
  },
  'filter-edit': {
    verb: 'the pencil scribbles beside the funnel',
    parts: [null, scribble([18, 11])],
  },
  'filter-horizontal': {
    verb: 'the two slider knobs slide along their tracks',
    parts: [null, null, null, null, slide([9, 7], 4), slide([15, 17], -4, { delay: 0.08 })],
  },
  'filter-mail-circle': {
    verb: 'the filter lines narrow one after another',
    parts: [beat(C, { as: 'ring', delay: 0.36 }), flex('X', C, C, [1, 0.6, 1.06, 1, 1], { as: 'line', delay: 0.08 }), flex('X', [12, 15.5], [12, 15.5], [1, 0.6, 1.06, 1, 1], { as: 'line', delay: 0.16 }), flex('X', [12, 8.5], [12, 8.5], [1, 0.6, 1.06, 1, 1], { as: 'line' })],
  },
  'filter-mail-edit': {
    verb: 'the pencil scribbles beside the filter lines',
    parts: [draw({ as: 'line' }), draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.2 }), scribble([17.5, 14.5])],
  },
  'filter-mail-remove': {
    verb: 'the X spins a quarter beside the filter lines',
    parts: [null, null, lap([18, 15], 90, { as: 'x', dur: 0.62 }), null],
  },
  'filter-mail-square': {
    verb: 'the filter lines draw one after another in the square',
    parts: [beat([11.5, 11.5], { as: 'frame', delay: 0.36 }), draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.2 }), draw({ as: 'line' })],
  },
  'filter-mail': {
    verb: 'the filter lines narrow down to the last one',
    parts: [flex('X', [12, 6], [12, 6], [1, 0.7, 1.04, 1, 1], { as: 'line' }), flex('X', C, C, [1, 0.7, 1.04, 1, 1], { as: 'line', delay: 0.08 }), flex('X', [12, 18], [12, 18], [1, 0.7, 1.04, 1, 1], { as: 'line', delay: 0.16 })],
  },
  'filter-remove': {
    verb: 'the X rattles beside the funnel',
    parts: [null, shake([18, 10], { as: 'x' })],
  },
}

export default settleSpecs(specs)
