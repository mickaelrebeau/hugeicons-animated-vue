/**
 * Page 40 — layout → loading-01.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted leaf-01, link-01, link-square-02 and list-view sit in
 * this span and are skipped.
 *
 * Leaves sway from the stem. Left-to-right lists write their lines and pop
 * their markers. Legal icons strike with the gavel. Licenses keep the page
 * and let the badge act. Links close their chain. Lists act on their badge
 * or the line it points at.
 *
 * Identical-geometry pairs get different jobs: layout / layout-01 (page 39),
 * legal / legal-01, legal-document / -01, link-square / link-square-01,
 * linkedin / linkedin-01, live-streaming / live-streaming-01.
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
  rays,
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
/** A list line writes itself left to right. */
const line = (delay = 0, o = {}) => draw({ as: 'line', delay, ...o })
/** The gavel lifts and strikes the block. */
const strike = (c) => around([4, 18], c, [0, -18, 6, -1, 0], { as: 'gavel', times: [0, 0.4, 0.56, 0.78, 1] })
/** The chain halves pull apart and click back together. */
const chain = (a, b, d = 1) => [ride(a, out(-d, d), { as: 'link' }), ride(b, out(d, -d), { as: 'link' })]

// ---------------------------------------------------------------------------

const specs = {
  layout: {
    verb: 'the header line redraws, then the sidebar line drops down',
    parts: [null, draw({ as: 'header' }), draw({ as: 'sidebar', delay: 0.16 })],
  },

  // --- leaves ---------------------------------------------------------------------------------
  'leaf-02': {
    verb: 'the leaf sways from its stem',
    parts: [around([3, 21], [10, 14], [0, -6, 4, -1, 0], { as: 'stem' }), around([3, 21], [12.9, 10.6], [0, -6, 4, -1, 0], { as: 'leaf' })],
  },
  'leaf-03': {
    verb: 'the leaf flutters and the vein redraws',
    parts: [{ as: 'leaf', origin: [6, 18], transform: ['skewX(0deg)', 'skewX(-8deg)', 'skewX(6deg)', 'skewX(-2deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, draw({ as: 'vein', delay: 0.1 })],
  },
  'leaf-04': {
    verb: 'the leaf falls a little and floats back',
    parts: [ride([11.7, 12.3], [[0, 0], [-1, 1.4], [0.6, 2], [0, 0], [0, 0]], { as: 'leaf', ease: 'easeInOut', dur: 0.9 }), ride([8, 16], [[0, 0], [-1, 1.4], [0.6, 2], [0, 0], [0, 0]], { as: 'leaf', ease: 'easeInOut', dur: 0.9 })],
  },
  leaf: {
    verb: 'the leaf unfurls from the stem',
    parts: [swell([7, 16], [15.3, 11], [1, 0.8, 1.06, 1, 1], { as: 'leaf' }), null],
  },
  'leafy-green': {
    verb: 'the lettuce leaf ruffles',
    parts: [{ as: 'leaf', origin: C, transform: ['scale(1)', 'scale(1.06, 0.96)', 'scale(0.97, 1.03)', 'scale(1.02, 0.99)', 'scale(1)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7 }, draw({ as: 'vein', delay: 0.1 })],
  },
  'leaving-geo-fence': {
    verb: 'the arrow rises out of the fence ring',
    parts: [ride([12, 10], out(0, -2), { as: 'arrow' }), flex('X', [12, 18], [12, 18], [1, 0.9, 1.04, 1, 1], { as: 'fence', delay: 0.2 })],
  },
  leetcode: {
    verb: 'the bracket bends and the dash slides in',
    parts: [nudge([9.9, 12.1], -0.8, 0, { as: 'bracket' }), retrace({ as: 'arc', delay: 0.1 }), ride([15.5, 13], out(1.2, 0), { as: 'dash', delay: 0.06 })],
  },
  'left-angle': {
    verb: 'the angle sweeps and its arrowheads push out',
    parts: [nudge([19, 4], 0, -1, { as: 'head', delay: 0.14 }), nudge([4, 19], -1, 0, { as: 'head', delay: 0.14 }), retrace({ as: 'arc' }), null],
  },

  // --- left-to-right text -------------------------------------------------------------------
  'left-to-right-block-quote': {
    verb: 'the quote bar draws down and the lines write after it',
    parts: [line(0.12), line(0.2), line(0.28), draw({ as: 'bar' })],
  },
  'left-to-right-list-bullet': {
    verb: 'each bullet pops and its line writes',
    parts: [line(0.06), line(0.18), line(0.3), pop([4.3, 5.5], 2.4, { as: 'bullet' }), pop([4.3, 12.5], 2.4, { as: 'bullet', delay: 0.12 }), pop([4.3, 19.5], 2.4, { as: 'bullet', delay: 0.24 })],
  },
  'left-to-right-list-dash': {
    verb: 'each dash slides in and its line follows',
    parts: [line(0.08), ride([4, 5], out(-1, 0), { as: 'dash' }), line(0.2), ride([4, 12], out(-1, 0), { as: 'dash', delay: 0.12 }), line(0.32), ride([4, 19], out(-1, 0), { as: 'dash', delay: 0.24 })],
  },
  'left-to-right-list-number': {
    verb: 'the numbers flip and the lines write',
    parts: [line(0.06), line(0.16), line(0.26), flip([4.5, 18], 1, { as: 'number', delay: 0.14 }), flip([4.5, 6], 1, { as: 'number' })],
  },
  'left-to-right-list-star-01': {
    verb: 'the stars spin at the line ends',
    parts: [line(0), line(0.08), line(0.16), lap([18.5, 5.5], 60, { as: 'star', dur: 0.6, delay: 0.1 }), lap([18.5, 18.5], 60, { as: 'star', dur: 0.6, delay: 0.24 })],
  },
  'left-to-right-list-star': {
    verb: 'the leading stars twinkle and the lines write',
    parts: [line(0.1), line(0.18), line(0.26), pop([5.5, 5.5], 1.3, { as: 'star' }), pop([5.5, 18.5], 1.3, { as: 'star', delay: 0.12 })],
  },
  'left-to-right-list-triangle': {
    verb: 'the play markers push and the lines write',
    parts: [line(0.06), nudge([5, 18.5], 0.8, 0, { as: 'marker', delay: 0.16 }), nudge([5, 5.5], 0.8, 0, { as: 'marker' }), line(0.16), line(0.26)],
  },
  'left-triangle': {
    verb: 'the set square tips and the stand answers',
    parts: [flex('Y', [11, 20], [11, 21], [1, 0.4, 1.1, 1, 1], { as: 'stand', delay: 0.2 }), around([11, 20], [11.9, 10.9], [0, -6, 4, -1, 0], { as: 'square' }), retrace({ as: 'arc', delay: 0.1 })],
  },

  // --- legal --------------------------------------------------------------------------------
  'legal-01': {
    verb: 'the gavel strikes and the impact lines flash',
    parts: [strike([5.9, 14.1]), strike([11.5, 8.5]), { as: 'impact', opacity: [1, 1, 0, 1, 1], times: [0, 0.5, 0.6, 0.76, 1], ease: 'linear', dur: 0.7 }, beat([16, 21], { as: 'block', delay: 0.3 })],
  },
  legal: {
    verb: 'the gavel rocks on the block',
    parts: [around([16, 21], [5.9, 14.1], [0, 6, -4, 1, 0], { as: 'gavel' }), around([16, 21], [11.5, 8.5], [0, 6, -4, 1, 0], { as: 'gavel' }), dim({ as: 'impact' }), null],
  },
  'legal-02': {
    verb: 'the gavel strikes down onto the block',
    parts: [ride([8, 8.5], [[0, 0], [0, -1.6], [0, 0.6], [0, 0], [0, 0]], { as: 'head', times: [0, 0.4, 0.56, 0.8, 1] }), ride([17, 8.5], [[0, 0], [0, -1.6], [0, 0.6], [0, 0], [0, 0]], { as: 'head', times: [0, 0.4, 0.56, 0.8, 1] }), beat([17, 19.5], { as: 'block', delay: 0.3 })],
  },
  'legal-document-01': {
    verb: 'the gavel taps on the document',
    parts: [null, ride([12, 10], [[0, 0], [0, -1], [0, 0.4], [0, 0], [0, 0]], { as: 'gavel', times: [0, 0.4, 0.56, 0.8, 1] }), flex('X', [8, 18], [12, 18], [1, 0.3, 1.06, 1, 1], { as: 'line', delay: 0.3 })],
  },
  'legal-document': {
    verb: 'the gavel swings on the page',
    parts: [null, around([9, 13], [12, 10], [0, -14, 6, -1, 0], { as: 'gavel' }), null],
  },
  'legal-document-02': {
    verb: 'the scales tip on the document',
    parts: [null, flex('X', [8, 18], [12, 18], [1, 0.3, 1.06, 1, 1], { as: 'line', delay: 0.2 }), around([12, 7], [12, 10.5], [0, 8, -5, 2, 0], { as: 'scale', dur: 0.8 })],
  },
  'legal-hammer': {
    verb: 'the gavel swings across the shield',
    parts: [around([9, 15], [12.5, 11.5], [0, -14, 6, -1, 0], { as: 'gavel' }), beat(C, { as: 'shield', delay: 0.3 })],
  },
  'less-than-circle': {
    verb: 'the < points left inside the circle',
    parts: [nudge([11.9, 12], -1.2, 0, { as: 'chevron' }), null],
  },
  'less-than-square': {
    verb: 'the < sharpens inside the square',
    parts: [null, flex('Y', [11.9, 12], [11.9, 12], [1, 0.7, 1.1, 1, 1], { as: 'chevron' })],
  },
  'less-than': {
    verb: 'the < opens its jaws and bites to the left',
    parts: [{ ...flex('Y', [8, 12], [11.7, 12], [1, 1.25, 0.8, 1.04, 1], { as: 'chevron' }), times: [0, 0.3, 0.5, 0.76, 1] }],
  },
  'letter-spacing': {
    verb: 'the side bars push out and the letter stretches',
    parts: [nudge([2, 12], -0.8, 0, { as: 'bar' }), nudge([22, 12], 0.8, 0, { as: 'bar' }), flex('X', C, C, [1, 1.2, 0.95, 1.02, 1], { as: 'letter' })],
  },
  libraries: {
    verb: 'the books shuffle on the shelf and the leaning one rights itself',
    parts: [hop([5, 12], 0.8, { as: 'book' }), hop([10, 13.5], 0.8, { as: 'book', delay: 0.08 }), around([14, 20], [17.5, 13.9], [0, -16, 4, -1, 0], { as: 'book', delay: 0.14 })],
  },
  library: {
    verb: 'the book is pulled from the shelf and pushed back',
    parts: [null, null, null, null, ride([16.5, 12], out(0.6, -1.4), { as: 'book' }), ride([15.3, 7], out(0.6, -1.4), { as: 'book' })],
  },

  // --- licenses -------------------------------------------------------------------------------
  'license-draft': {
    verb: 'the pencil scribbles on the corner and the lines rewrite',
    parts: [null, retrace({ as: 'lines', delay: 0.1 }), ride([17.3, 18], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' })],
  },
  'license-maintenance': {
    verb: 'the gear turns on the license corner',
    parts: [null, null, lap([17.5, 17.5], 60, { as: 'gear', dur: 0.7 })],
  },
  'license-no': {
    verb: 'the slash cuts across and the license fades',
    parts: [draw({ as: 'slash' }), dim({ as: 'lines', delay: 0.1 }), dim({ as: 'page', delay: 0.1 })],
  },
  'license-pin': {
    verb: 'the pin drops into the corner',
    parts: [retrace({ as: 'lines', delay: 0.2 }), null, ride([18.5, 18], out(0, -1.4), { as: 'pin' })],
  },
  'license-third-party': {
    verb: 'the person on the corner pops up',
    parts: [null, null, ride([18, 20.5], out(0, -0.6), { as: 'body', delay: 0.06 }), hop([18, 14.8], 1.2, { as: 'head' })],
  },
  license: {
    verb: 'the license lines write in',
    parts: [null, retrace({ as: 'lines' })],
  },
  lifebuoy: {
    verb: 'the ring spins and the rope swings',
    parts: [lap(C, 90, { as: 'ring', dur: 0.8 }), lap(C, 90, { as: 'ring', dur: 0.8 }), lap(C, 90, { as: 'ring', dur: 0.8 }), around([12, 2], C, [0, -6, 4, -1, 0], { as: 'rope' })],
  },
  'lift-truck': {
    verb: 'the fork rises up the mast and lowers',
    parts: [null, null, null, null, ride([19, 13], [[0, 0], [0, -6], [0, -6], [0, 0], [0, 0]], { as: 'fork', dur: 1 }), null],
  },
  ligature: {
    verb: 'the f and l bind: the stroke rewrites and the serifs tap',
    parts: [retrace({ as: 'f' }), flex('X', [8, 20], [8, 20], [1, 0.6, 1.1, 1, 1], { as: 'serif', delay: 0.2 }), flex('X', [8, 12], [8, 12], [1, 0.6, 1.1, 1, 1], { as: 'serif', delay: 0.14 }), retrace({ as: 'l', delay: 0.1 }), flex('X', [16, 20], [16, 20], [1, 0.6, 1.1, 1, 1], { as: 'serif', delay: 0.26 })],
  },
  'lightbulb-off': {
    verb: 'the slash cuts across and the bulb fades',
    parts: [dim({ as: 'bulb', delay: 0.1 }), null, null, dim({ as: 'filament', delay: 0.1 }), draw({ as: 'slash' })],
  },
  lighthouse: {
    verb: 'the beams sweep from the lantern',
    parts: [pop([12, 5], 1.08, { as: 'lantern' }), null, null, null, null, null, { as: 'beam', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, { as: 'beam', opacity: [1, 1, 0, 1, 0, 1], times: [0, 0.1, 0.3, 0.5, 0.7, 0.9], ease: 'linear', dur: 0.8 }],
  },
  'limit-order': {
    verb: 'the price hits the limit: the coin drops on the dotted line',
    parts: [ride([12, 14], out(0, -1.6), { as: 'coin' }), retrace({ as: 'path' }), pop([19.5, 14], 2, { as: 'dot', delay: 0.3 }), pop([4.5, 14], 2, { as: 'dot', delay: 0.2 }), null],
  },
  limitation: {
    verb: 'the needle sweeps up to the limit and back',
    parts: [null, around(C, [15.8, 7.8], [0, -40, 6, -2, 0], { as: 'needle' }), pop(C, 1.25, { as: 'hub', delay: 0.1 })],
  },
  line: {
    verb: 'the chat bubble pops and the LINE letters hop',
    parts: [pop(C, 1.05, { as: 'bubble' }), hop([11.8, 10.5], 0.8, { as: 'letters', delay: 0.1 })],
  },
  liner: {
    verb: 'the line draws itself across',
    parts: [draw({ as: 'line' })],
  },

  // --- links --------------------------------------------------------------------------------
  'link-02': {
    verb: 'the links pull apart and click back together',
    parts: [lap(C, 90, { as: 'bar', dur: 0.6 }), flex('X', C, C, [1, 1.08, 0.98, 1, 1], { as: 'links' })],
  },
  'link-03': {
    verb: 'the center bar spins and the links snap shut',
    parts: [draw({ as: 'bar' }), swell(C, C, [1, 1.06, 0.97, 1, 1], { as: 'links', delay: 0.1 })],
  },
  'link-04': {
    verb: 'the two links pull apart and click back together',
    parts: chain([15.2, 9.5], [8.8, 14.5], -0.8),
  },
  'link-05': {
    verb: 'the bar slides into the chain',
    parts: [flex('X', C, C, [1, 1.06, 0.97, 1, 1], { as: 'links', delay: 0.1 }), flex('X', C, C, [1, 0.3, 1.1, 1, 1], { as: 'bar' })],
  },
  'link-06': {
    verb: 'the two links slide past each other and lock',
    parts: [ride([10, 14.5], out(0, 1), { as: 'link' }), ride([14, 9.5], out(0, -1), { as: 'link' })],
  },
  'link-backward': {
    verb: 'the link arrow points back',
    parts: [nudge(C, -1.6, 0, { as: 'arrow' })],
  },
  'link-circle-02': {
    verb: 'the arrow leaves the circle and the rim redraws',
    parts: [retrace({ as: 'rim', delay: 0.1 }), ride([16.1, 8], out(1, -1), { as: 'arrow' })],
  },
  'link-circle': {
    verb: 'the corner arrow points out of the circle',
    parts: [null, nudge([18, 6], 1, -1, { as: 'arrow' })],
  },
  'link-forward': {
    verb: 'the link arrow points forward',
    parts: [nudge(C, 1.6, 0, { as: 'arrow' })],
  },
  'link-square-01': {
    verb: 'the arrow pops out of the square corner',
    parts: [retrace({ as: 'frame', delay: 0.1 }), ride([18, 6], out(1, -1), { as: 'arrow' })],
  },
  'link-square': {
    verb: 'the corner arrow points out of the square',
    parts: [null, nudge([18, 6], 1, -1, { as: 'arrow' })],
  },
  link: {
    verb: 'the two links pull apart and click back together',
    parts: chain([11.5, 15.5], [12.5, 8.5]),
  },

  // --- linkedin, lists ------------------------------------------------------------------------
  'linkedin-01': {
    verb: 'the letters hop inside the square',
    parts: [hop([7, 13.5], 1, { as: 'i' }), hop([14, 13.5], 1, { as: 'n', delay: 0.1 }), hop([7, 6.8], 1, { as: 'i' }), null],
  },
  linkedin: {
    verb: 'the dot of the i pops',
    parts: [null, null, pop([7, 6.8], 2.6, { as: 'dot' }), null],
  },
  'linkedin-02': {
    verb: 'the dot drops onto the i and the n answers',
    parts: [beat([4.3, 15.8], { as: 'i', delay: 0.24 }), ride([4.3, 4.3], out(0, -1.6), { as: 'dot' }), hop([15.8, 15.8], 0.8, { as: 'n', delay: 0.3 })],
  },
  'list-chevrons-down-up': {
    verb: 'the chevrons fold toward each other',
    parts: [nudge([18, 7.5], 0, 1, { as: 'chevron' }), nudge([18, 16.5], 0, -1, { as: 'chevron' }), line(0), line(0.08), line(0.16)],
  },
  'list-filter-plus': {
    verb: 'the plus spins as the funnel lines narrow',
    parts: [flex('X', [7, 7.5], [7, 7.5], [1, 0.7, 1.06, 1, 1], { as: 'line' }), lap([18, 7.5], 90, { as: 'plus', dur: 0.6 }), flex('X', C, [12, 13.5], [1, 0.7, 1.06, 1, 1], { as: 'line', delay: 0.06 }), flex('X', C, [12, 19.5], [1, 0.7, 1.06, 1, 1], { as: 'line', delay: 0.12 })],
  },
  'list-indent-decrease': {
    verb: 'the arrow pulls left and the lines outdent',
    parts: [nudge([5, 12], -1, 0, { as: 'arrow' }), ride([16, 12], out(-1.4, 0), { as: 'line', delay: 0.06 }), null, null],
  },
  'list-indent-increase': {
    verb: 'the arrow pushes right and the lines indent',
    parts: [ride([16, 12], out(1.4, 0), { as: 'line', delay: 0.06 }), null, null, nudge([5, 12], 1, 0, { as: 'arrow' })],
  },
  'list-music': {
    verb: 'the note bounces beside the playlist',
    parts: [null, null, null, ride([17, 12], [[0, 0], [0, -1.2], [0, 0], [0, -0.7], [0, 0]], { as: 'note', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 })],
  },
  'list-plus': {
    verb: 'the plus spins and the short line stretches toward it',
    parts: [null, flex('X', [3, 12], [7, 12], [1, 1.3, 0.95, 1, 1], { as: 'line', delay: 0.1 }), lap([18, 12], 90, { as: 'plus', dur: 0.6 }), null],
  },
  'list-restart': {
    verb: 'the restart arrow loops back',
    parts: [null, null, null, lap([16.5, 14.5], -360, { as: 'arrow', dur: 0.9 })],
  },
  'list-setting': {
    verb: 'the gear turns under the list',
    parts: [lap([16.5, 17], 60, { as: 'gear', dur: 0.7 }), line(0), line(0.08), line(0.16)],
  },
  'list-start': {
    verb: 'the arrow pushes into the top line',
    parts: [line(0.16), nudge([17, 12], -1, 0, { as: 'arrow' }), null, null],
  },
  'list-tree': {
    verb: 'the branch draws down and the items write',
    parts: [line(0.14), line(0.22), line(0.38), line(0.3), draw({ as: 'trunk' }), draw({ as: 'branch', delay: 0.06 })],
  },
  'list-video': {
    verb: 'the play button pushes forward beside the list',
    parts: [null, null, nudge([17.5, 15], 1, 0, { as: 'play' }), null],
  },
  'list-x': {
    verb: 'the X rattles beside the list',
    parts: [null, null, shake([18.5, 12], { as: 'x' }), null],
  },
  litecoin: {
    verb: 'the coin flips and the L rewrites',
    parts: [flip(C, 1, { as: 'coin' }), sweep({ as: 'l', delay: 0.2 })],
  },

  // --- live streaming -----------------------------------------------------------------------
  'live-streaming-01': {
    verb: 'the signal arcs broadcast over the LIVE sign',
    parts: [null, wave([12, 5], { delay: 0.1 }), wave([12, 7.5]), null],
  },
  'live-streaming': {
    verb: 'the LIVE label blinks under the signal',
    parts: [null, null, null, blink({ as: 'label' })],
  },
  'live-streaming-02': {
    verb: 'the dot pulses and the arcs broadcast both ways',
    parts: [pop(C, 1.3, { as: 'dot' }), wave([12, 12], { delay: 0.1 }), wave([12, 12], { delay: 0.2 }), wave([12, 12], { delay: 0.1 }), wave([12, 12], { delay: 0.2 })],
  },
  'live-streaming-03': {
    verb: 'the camera records: the lens pulses and the side shutter flaps',
    parts: [null, flex('X', [17, 12], [19.5, 12], [1, 0.6, 1.08, 1, 1], { as: 'shutter' }), pop([9.5, 12], 1.6, { as: 'lens' })],
  },
  liver: {
    verb: 'the liver pulses',
    parts: [swell(C, [12, 11.5], [1, 1.05, 0.98, 1.02, 1], { as: 'liver' })],
  },
  'loader-pinwheel': {
    verb: 'the pinwheel blades spin inside the ring',
    parts: [null, lap(C, 360, { as: 'blade' }), lap(C, 360, { as: 'blade' }), lap(C, 360, { as: 'blade' })],
  },
  'loading-01': {
    verb: 'the hourglass flips and the sand settles',
    parts: [lap(C, 180, { as: 'glass' }), lap(C, 180, { as: 'glass' })],
  },
}

export default settleSpecs(specs)
