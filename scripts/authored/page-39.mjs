/**
 * Page 39 — lamp-04 → layout-two-row.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * Laptops keep the screen and base still and let the screen glyph act.
 * Laurel wreaths grow leaf by leaf from the stem. Layers stack and shuffle.
 * Layouts slide their dividers to resize the panes.
 *
 * Identical-geometry pairs get different jobs: lasso-tool / lasso-tool-01,
 * laurel-wreath / -01, laurel-wreath-first / -01, laurel-wreath-left / -01,
 * laurel-wreath-right / -01, layer-mask / -01, layers / layers-01,
 * layout-table / layout-table-01.
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
const there = (dx, dy, o = {}) => (c) => ride(c, [[0, 0], [dx, dy], [dx, dy], [0, 0], [0, 0]], { as: 'divider', times: [0, 0.3, 0.62, 0.9, 1], ease: 'easeInOut', dur: 0.9, ...o })
/** A laptop: screen and base still, glyph acts. */
const laptop = (glyph) => [null, null, glyph]
/** A laurel leaf unfurling from the stem side. */
const leaf = (c, delay, o = {}) => pop(c, 1.25, { as: 'leaf', delay, dur: 0.46, ...o })
/** A whole wreath ripples leaf by leaf, bottom to top on both sides. */
const wreath = (leaves) => leaves.map(([c, d]) => (c ? leaf(c, d) : null))

// ---------------------------------------------------------------------------

const specs = {
  // --- lamps ----------------------------------------------------------------------------------
  'lamp-04': {
    verb: 'the pull switch is tugged and the shade lights',
    parts: [ride([12, 17.5], out(0, 1), { as: 'pull' }), flex('Y', [12, 12], [12, 14], [1, 1.25, 0.95, 1, 1], { as: 'cord' }), null, null, pop([12, 7], 1.05, { as: 'shade', delay: 0.2 })],
    extras: [{ ...burst(rays(12, 7, 8, 9.5, 6, 30)), delay: 0.24 }],
  },
  'lamp-05': {
    verb: 'the desk lamp nods its shade down and back',
    parts: [null, null, around([12, 14], [12, 6], [0, 12, -4, 1, 0], { as: 'shade' }), around([12, 14], [12, 12], [0, 12, -4, 1, 0], { as: 'shade' }), null],
  },
  'lamp-wall-down': {
    verb: 'the wall lamp light beams downward',
    parts: [pop([14, 16.5], 1.05, { as: 'shade', delay: 0.1 }), flex('X', [14, 16], [14, 16], [1, 1.2, 0.95, 1, 1], { as: 'glow', delay: 0.1 }), null, null],
    extras: [{ as: 'beam', tag: 'path', attrs: { d: 'M11 19L10 22M14 19V22M17 19L18 22', strokeWidth: '1.2' }, opacity: [0, 0, 1, 0], transform: ['translateY(-1px)', 'translateY(-1px)', 'translateY(0px)', 'translateY(0.6px)'], times: [0, 0.2, 0.5, 1], ease: 'easeOut', dur: 0.8 }],
  },
  'lamp-wall-up': {
    verb: 'the wall lamp light beams upward',
    parts: [flex('X', [14, 7], [14, 7], [1, 1.2, 0.95, 1, 1], { as: 'glow', delay: 0.1 }), pop([14, 7.5], 1.05, { as: 'shade', delay: 0.1 }), null, null],
    extras: [{ as: 'beam', tag: 'path', attrs: { d: 'M11 2L10 0M14 2V0M17 2L18 0', strokeWidth: '1.2' }, opacity: [0, 0, 1, 0], transform: ['translateY(1px)', 'translateY(1px)', 'translateY(0px)', 'translateY(-0.6px)'], times: [0, 0.2, 0.5, 1], ease: 'easeOut', dur: 0.8 }],
  },
  lamp: {
    verb: 'the shade tilts on its stand and the light pops',
    parts: [around([12, 13], [12, 7.5], [0, -10, 6, -2, 0], { as: 'shade' }), null, beat([12, 20.5], { as: 'base', delay: 0.2 })],
    extras: [{ ...burst(rays(12, 15, 2, 3.5, 6, 30)), delay: 0.2 }],
  },
  'land-plot': {
    verb: 'the flag is planted on the plot and the X marks it',
    parts: [null, lap([12, 16], 90, { as: 'x', dur: 0.6, delay: 0.2 }), ride([15, 6.9], out(0, -1.6), { as: 'flag' })],
  },
  landmark: {
    verb: 'the columns rise in turn under the pediment',
    parts: [
      null,
      hop([12, 5], 0.8, { as: 'roof', delay: 0.3 }),
      flex('Y', [18, 19], [18, 15], [1, 0.3, 1.06, 1, 1], { as: 'column', delay: 0.18 }),
      flex('Y', [14, 19], [14, 15], [1, 0.3, 1.06, 1, 1], { as: 'column', delay: 0.12 }),
      flex('Y', [10, 19], [10, 15], [1, 0.3, 1.06, 1, 1], { as: 'column', delay: 0.06 }),
      flex('Y', [6, 19], [6, 15], [1, 0.3, 1.06, 1, 1], { as: 'column' }),
    ],
  },

  // --- language -------------------------------------------------------------------------------
  'language-circle': {
    verb: 'the glyph flips inside the circle like a translation',
    parts: [null, flip(C, 1, { as: 'glyph' })],
  },
  'language-skill': {
    verb: 'the two speech badges trade places',
    parts: [null, ride([6, 6.1], out(1.2, 1.2), { as: 'badge' }), ride([18, 18.1], out(-1.2, -1.2), { as: 'badge' })],
  },
  'language-square': {
    verb: 'the glyph rewrites inside the square',
    parts: [sweep({ as: 'glyph' }), null],
  },
  lantern: {
    verb: 'the lantern swings on its hook and the flame flickers',
    parts: [
      around([12, 2], [12, 13], [0, 8, -6, 2, 0], { as: 'lantern' }),
      around([12, 2], [12, 5.8], [0, 8, -6, 2, 0], { as: 'lantern' }),
      around([12, 2], [12, 20.3], [0, 8, -6, 2, 0], { as: 'lantern' }),
      around([12, 2], [12, 8], [0, 8, -6, 2, 0], { as: 'lantern' }),
      around([12, 2], [12, 18], [0, 8, -6, 2, 0], { as: 'lantern' }),
      { as: 'glow', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 },
      { as: 'glow', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 },
      around([12, 2], [12, 13], [0, 8, -6, 2, 0], { as: 'lantern' }),
      null,
    ],
  },

  // --- laptops --------------------------------------------------------------------------------
  'laptop-add': { verb: 'the plus spins on the screen', parts: laptop(lap([12, 10], 90, { as: 'plus', dur: 0.6 })) },
  'laptop-charging': { verb: 'the bolt flashes on the screen', parts: laptop({ as: 'bolt', opacity: [1, 0.15, 1, 0.15, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }) },
  'laptop-check': { verb: 'the check ticks on the screen', parts: laptop(draw({ as: 'check' })) },
  'laptop-cloud': { verb: 'the cloud drifts across the screen', parts: laptop(ride([12, 10], out(1.4, 0), { as: 'cloud', dur: 0.8 })) },
  'laptop-issue': { verb: 'the exclamation shakes on the screen', parts: laptop(shake([12, 10], { as: 'bang' })) },
  'laptop-performance': { verb: 'the pulse line traces across the screen', parts: laptop(retrace({ as: 'pulse' })) },
  'laptop-phone-sync': {
    verb: 'the phone slides toward the laptop and back as they sync',
    parts: [ride([19, 15.5], out(-1.2, 0), { as: 'phone' }), null, retrace({ as: 'base', delay: 0.1 })],
  },
  'laptop-programming': {
    verb: 'the code brackets part and the slash flips',
    parts: [null, null, nudge([16.3, 8.5], 0.8, 0, { as: 'bracket' }), nudge([7.8, 8.5], -0.8, 0, { as: 'bracket' }), lap([12, 8.5], 180, { as: 'slash', dur: 0.7 })],
  },
  'laptop-remove': { verb: 'the X turns away on the screen', parts: laptop(lap([12, 10], 90, { as: 'x', dur: 0.6 })) },
  'laptop-settings': { verb: 'the gear turns on the screen', parts: laptop(lap([12, 10], 60, { as: 'gear', dur: 0.7 })) },
  'laptop-video': {
    verb: 'the play button pushes forward on the screen',
    parts: [nudge([12.5, 10], 1, 0, { as: 'play' }), null, null],
  },
  laptop: {
    verb: 'the lid closes a little and opens again',
    parts: [flex('Y', [12, 16.5], [12, 10], [1, 0.4, 1.04, 1, 1], { as: 'lid' }), null],
  },

  // --- lasso ----------------------------------------------------------------------------------
  'lasso-select': {
    verb: 'the cursor drags and the lasso loop redraws',
    parts: [ride([17.4, 16.4], out(-0.8, -0.8), { as: 'cursor' }), retrace({ as: 'lasso', delay: 0.1 })],
  },
  'lasso-tool-01': {
    verb: 'the lasso loop twirls',
    parts: [around([5, 19], [11.9, 11.5], [0, -14, 10, -4, 0], { as: 'lasso', dur: 0.8 })],
  },
  'lasso-tool': {
    verb: 'the lasso draws itself around',
    parts: [retrace({ as: 'lasso' })],
  },
  'lasso-tool-02': {
    verb: 'the loop swings and the knot drops',
    parts: [around([7.5, 17], [11.9, 9.9], [0, -8, 6, -2, 0], { as: 'loop' }), hop([7.5, 18.5], 1, { as: 'knot', delay: 0.1 })],
  },
  'last-fm': {
    verb: 'the logo bounces inside the square',
    parts: [null, hop(C, 1, { as: 'logo' })],
  },
  latitude: {
    verb: 'the latitude lines sweep up the globe in turn',
    parts: [null, flex('X', C, C, [1, 0.8, 1.05, 1, 1], { as: 'line', delay: 0.1 }), flex('X', [12, 7], [12, 7], [1, 0.6, 1.08, 1, 1], { as: 'line', delay: 0.2 }), flex('X', [12, 17], [12, 17], [1, 0.6, 1.08, 1, 1], { as: 'line' })],
  },
  laughing: {
    verb: 'the face laughs so hard the tears fly',
    parts: [shake(C, { as: 'face', dur: 0.5 }), flex('Y', [12, 14], [12, 16], [1, 1.2, 0.9, 1.1, 1], { as: 'mouth' }), hop([12, 8.8], 0.6, { as: 'eyes' }), ride([3.9, 14.6], out(-1, -0.6), { as: 'tear', delay: 0.1 }), ride([20.1, 14.6], out(1, -0.6), { as: 'tear', delay: 0.1 })],
  },

  // --- laurels --------------------------------------------------------------------------------
  'laurel-wreath-01': {
    verb: 'the leaves sprout up both sides of the wreath',
    parts: wreath([[null], [null], [[17.1, 5.5], 0.3], [[20, 11], 0.18], [[18.8, 16.9], 0.06], [[5.3, 16.9], 0.06], [[4, 11], 0.18], [[6.9, 5.5], 0.3]]),
  },
  'laurel-wreath': {
    verb: 'the wreath sways and the ribbon flutters',
    parts: [
      around([12, 20], [12, 13], [0, -5, 4, -1, 0], { as: 'wreath' }),
      around([12, 18], [12, 19.5], [0, 10, -8, 3, 0], { as: 'ribbon' }),
      around([12, 20], [17.1, 5.5], [0, -5, 4, -1, 0], { as: 'wreath' }),
      around([12, 20], [20, 11], [0, -5, 4, -1, 0], { as: 'wreath' }),
      around([12, 20], [18.8, 16.9], [0, -5, 4, -1, 0], { as: 'wreath' }),
      around([12, 20], [5.3, 16.9], [0, -5, 4, -1, 0], { as: 'wreath' }),
      around([12, 20], [4, 11], [0, -5, 4, -1, 0], { as: 'wreath' }),
      around([12, 20], [6.9, 5.5], [0, -5, 4, -1, 0], { as: 'wreath' }),
    ],
  },
  'laurel-wreath-02': {
    verb: 'the leaves sprout down from the top on both sides',
    parts: wreath([[[17.1, 6.5], 0], [[20, 12.4], 0.1], [[17.3, 18.5], 0.2], [null], [[6.9, 6.5], 0], [[4, 12.4], 0.1], [[6.8, 18.5], 0.2], [null]]),
  },
  'laurel-wreath-first-01': {
    verb: 'the 1 pops inside the wreath and the top leaves answer',
    parts: [null, null, leaf([17.1, 5.5], 0.2), pop([12, 11], 1.3, { as: 'one' }), null, null, null, null, leaf([6.9, 5.5], 0.2)],
  },
  'laurel-wreath-first': {
    verb: 'the 1 flips inside the wreath',
    parts: [null, null, null, flip([12, 11], 1, { as: 'one' }), null, null, null, null, null],
  },
  'laurel-wreath-first-02': {
    verb: 'the 1 hops and the leaves sprout around it',
    parts: [leaf([17.1, 6.5], 0.1), leaf([20, 12.4], 0.16), leaf([17.3, 18.5], 0.22), null, leaf([6.9, 6.5], 0.1), leaf([4, 12.4], 0.16), leaf([6.8, 18.5], 0.22), null, hop([12, 12], 1.2, { as: 'one' })],
  },
  'laurel-wreath-left-01': {
    verb: 'the branch leaves sprout from the bottom up',
    parts: [leaf([10.7, 6.8], 0.24), leaf([9, 11.5], 0.16), leaf([9.4, 16.2], 0.08), leaf([12.7, 20.4], 0), leaf([14.8, 4.1], 0.32)],
  },
  'laurel-wreath-left': {
    verb: 'the branch sways from its base',
    parts: [around([13, 22], [10.7, 6.8], [0, -8, 6, -2, 0], { as: 'branch' }), around([13, 22], [9, 11.5], [0, -8, 6, -2, 0], { as: 'branch' }), around([13, 22], [9.4, 16.2], [0, -8, 6, -2, 0], { as: 'branch' }), around([13, 22], [12.7, 20.4], [0, -8, 6, -2, 0], { as: 'branch' }), around([13, 22], [14.8, 4.1], [0, -8, 6, -2, 0], { as: 'branch' })],
  },
  'laurel-wreath-left-02': {
    verb: 'the leaves flutter down the branch',
    parts: [leaf([10.7, 6.8], 0.08), leaf([9, 11.5], 0.16), around([12, 22], [12, 18], [0, -6, 4, -1, 0], { as: 'stem' }), leaf([14.8, 4.1], 0)],
  },
  'laurel-wreath-left-03': {
    verb: 'the branch grows and its leaves unfold',
    parts: [leaf([12.3, 4.3], 0.3), draw({ as: 'stem' }), leaf([15.5, 16], 0.12), leaf([13.3, 19.3], 0.04), leaf([7.4, 11.2], 0.2), leaf([11.6, 10.8], 0.24)],
  },
  'laurel-wreath-right-01': {
    verb: 'the branch leaves sprout from the bottom up',
    parts: [leaf([15.3, 6.8], 0.24), leaf([17, 11.5], 0.16), leaf([16.6, 16.2], 0.08), leaf([13.3, 20.4], 0), leaf([11.2, 4.1], 0.32)],
  },
  'laurel-wreath-right': {
    verb: 'the branch sways from its base',
    parts: [around([11, 22], [15.3, 6.8], [0, 8, -6, 2, 0], { as: 'branch' }), around([11, 22], [17, 11.5], [0, 8, -6, 2, 0], { as: 'branch' }), around([11, 22], [16.6, 16.2], [0, 8, -6, 2, 0], { as: 'branch' }), around([11, 22], [13.3, 20.4], [0, 8, -6, 2, 0], { as: 'branch' }), around([11, 22], [11.2, 4.1], [0, 8, -6, 2, 0], { as: 'branch' })],
  },
  'laurel-wreath-right-02': {
    verb: 'the leaves flutter down the branch',
    parts: [leaf([15.3, 6.8], 0.08), leaf([17, 11.5], 0.16), around([12, 22], [14, 18], [0, 6, -4, 1, 0], { as: 'stem' }), leaf([11.2, 4.1], 0)],
  },
  'laurel-wreath-right-03': {
    verb: 'the branch grows and its leaves unfold',
    parts: [leaf([11.8, 4.3], 0.3), draw({ as: 'stem' }), leaf([8.5, 16], 0.12), leaf([10.8, 19.3], 0.04), leaf([16.6, 11.2], 0.2), leaf([12.4, 10.8], 0.24)],
  },

  // --- layers ---------------------------------------------------------------------------------
  'layer-add': {
    verb: 'the plus spins on the front layer and the back one lifts',
    parts: [null, ride([9.5, 9.5], out(-0.8, -0.8), { as: 'back' }), lap([15.5, 15.5], 90, { as: 'plus', dur: 0.6 })],
  },
  'layer-bring-forward': {
    verb: 'the arrow lifts out of the layer',
    parts: [beat([12, 15.8], { as: 'layer', delay: 0.2 }), ride([12, 9.5], out(0, -1.6), { as: 'arrow' })],
  },
  'layer-bring-to-front': {
    verb: 'the arrow rises through both layers',
    parts: [ride([12, 12], out(0, 0.6), { as: 'layer', delay: 0.16 }), ride([12, 6], out(0, -1.6), { as: 'arrow' }), ride([12, 18.8], out(0, 0.6), { as: 'layer', delay: 0.22 })],
  },
  'layer-mask-01': {
    verb: 'the hatch lines sweep across the mask',
    parts: [null, draw({ as: 'edge' }), retrace({ as: 'hatch', delay: 0.1 })],
  },
  'layer-mask': {
    verb: 'the masked half slides and comes back',
    parts: [null, ride([12, 12.5], out(0.8, 0.8), { as: 'edge' }), ride([15, 15.3], out(0.8, 0.8), { as: 'hatch' })],
  },
  'layer-mask-02': {
    verb: 'the crescent sweeps across the circle',
    parts: [null, flex('X', [8.5, 12], [11.8, 12], [1, 0.3, 1.1, 1, 1], { as: 'crescent' })],
  },
  'layer-send-backward': {
    verb: 'the arrow sinks into the layer',
    parts: [beat([12, 8.3], { as: 'layer', delay: 0.2 }), ride([12, 14.5], out(0, 1.6), { as: 'arrow' })],
  },
  'layer-send-to-back': {
    verb: 'the arrow drops through both layers',
    parts: [ride([12, 14.5], out(0, 1.6), { as: 'arrow' }), ride([12, 14], out(0, -0.6), { as: 'layer', delay: 0.16 }), ride([12, 6.3], out(0, -0.6), { as: 'layer', delay: 0.1 })],
  },
  layer: {
    verb: 'the top sheet lifts off the lower one and settles',
    parts: [ride([12, 9], out(0, -1.6), { as: 'sheet' }), beat([12, 16.8], { as: 'sheet', delay: 0.24 })],
  },
  'layers-01': {
    verb: 'the sheets fan open from the top',
    parts: [ride([12, 6.8], out(0, -1.4), { as: 'sheet' }), ride([12, 13.8], out(0, -0.6), { as: 'sheet', delay: 0.06 }), null],
  },
  layers: {
    verb: 'the sheets drop onto the stack one by one',
    parts: [ride([12, 6.8], out(0, -1.4), { as: 'sheet', delay: 0.2 }), ride([12, 13.8], out(0, -1), { as: 'sheet', delay: 0.1 }), ride([12, 19.1], out(0, -0.6), { as: 'sheet' })],
  },
  'layers-02': {
    verb: 'the squares cascade diagonally',
    parts: [ride([16.5, 7.5], out(0.8, -0.8), { as: 'square', delay: 0.12 }), ride(C, out(0.4, -0.4), { as: 'square', delay: 0.06 }), null],
  },
  'layers-logo': {
    verb: 'the layered squares slide back into place',
    parts: [ride([15, 15], out(0.8, 0.8), { as: 'square' }), ride(C, out(0.4, 0.4), { as: 'square', delay: 0.06 }), null],
  },

  // --- layouts --------------------------------------------------------------------------------
  'layout-01': {
    verb: 'the sidebar widens under the header',
    parts: [null, null, there(2, 0)([8, 15.3])],
  },
  'layout-02': {
    verb: 'the right sidebar widens under the header',
    parts: [null, null, there(-2, 0)([16, 15.3])],
  },
  'layout-03': {
    verb: 'the header grows and the split slides',
    parts: [null, there(0, 2)([12, 9]), there(3, 0, { delay: 0.1 })([12, 15.3])],
  },
  'layout-04': {
    verb: 'the sidebar narrows and the split lowers',
    parts: [null, there(-2, 0)([9, 12]), there(0, 2, { delay: 0.1 })([15.3, 12])],
  },
  'layout-05': {
    verb: 'the two columns squeeze the middle pane',
    parts: [null, null, there(-1.6, 0)([16, 15.3]), there(1.6, 0)([8, 15.3])],
  },
  'layout-06': {
    verb: 'the right rows shift down one after another',
    parts: [null, null, there(0, 1.6)([15.3, 8]), there(0, 1.6, { delay: 0.1 })([15.3, 16])],
  },
  'layout-07': {
    verb: 'the content row rises toward the header',
    parts: [null, null, there(0, -2)([14.8, 15]), null],
  },
  'layout-align-bottom': {
    verb: 'the bar drops to the bottom edge',
    parts: [null, ride([12, 16], out(0, 2), { as: 'bar' })],
  },
  'layout-align-left': {
    verb: 'the bar slides to the left edge',
    parts: [null, ride([8, 12], out(-2, 0), { as: 'bar' })],
  },
  'layout-align-right': {
    verb: 'the bar slides to the right edge',
    parts: [null, ride([16, 12], out(2, 0), { as: 'bar' })],
  },
  'layout-align-top': {
    verb: 'the bar rises to the top edge',
    parts: [null, ride([12, 8], out(0, -2), { as: 'bar' })],
  },
  'layout-bottom': {
    verb: 'the bottom panel slides up',
    parts: [null, there(0, -3)([12, 15])],
  },
  'layout-grid': {
    verb: 'the grid lines rotate a quarter',
    parts: [null, lap(C, 90, { as: 'grid', dur: 0.7 }), lap(C, 90, { as: 'grid', dur: 0.7 })],
  },
  'layout-left': {
    verb: 'the left panel widens',
    parts: [null, there(3, 0)([9, 12])],
  },
  'layout-right': {
    verb: 'the right panel widens',
    parts: [null, there(-3, 0)([15, 12])],
  },
  'layout-table-01': {
    verb: 'the columns slide while the header holds',
    parts: [null, null, there(-2, 0)([16, 12]), there(2, 0)([8, 12])],
  },
  'layout-table': {
    verb: 'the table lines draw in: header, then columns',
    parts: [null, draw({ as: 'header' }), draw({ as: 'column', delay: 0.16 }), draw({ as: 'column', delay: 0.08 })],
  },
  'layout-table-02': {
    verb: 'the rows draw across after the sidebar line',
    parts: [null, draw({ as: 'sidebar' }), draw({ as: 'row', delay: 0.1 }), draw({ as: 'row', delay: 0.2 })],
  },
  'layout-three-column': {
    verb: 'the two dividers trade widths',
    parts: [null, there(-2, 0)([8.5, 12]), there(2, 0)([15.5, 12])],
  },
  'layout-three-row': {
    verb: 'the two row dividers spread apart',
    parts: [null, there(0, -2)([12, 8.5]), there(0, 2)([12, 15.5])],
  },
  'layout-top': {
    verb: 'the header slides down',
    parts: [null, there(0, 3)([12, 9])],
  },
  'layout-two-column': {
    verb: 'the split swings left then right',
    parts: [null, ride(C, [[0, 0], [-3, 0], [3, 0], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.9 })],
  },
  'layout-two-row': {
    verb: 'the split rises then falls',
    parts: [null, ride(C, [[0, 0], [0, -3], [0, 3], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.9 })],
  },
}

export default settleSpecs(specs)
